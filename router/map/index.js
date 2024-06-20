const { PrismaClient } = require("@prisma/client");
const { readdir, writeFile, unlink } = require("node:fs/promises");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/assets/skattejagt/images");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname),
    );
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/pois", async (req, res) => {
  try {
    const pois = await prisma.poi.findMany();
    res.status(200).send(pois);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/poi", upload.single("image"), async (req, res) => {
  try {
    let u = await prisma.user.findUnique({
      where: {
        id: req.body.userId,
      },
    });

    if (u.role === "user") {
      res.status(403).send("you are not allowed to perform this action");
      return;
    }

    const { name, latitude, longitude, iconURL, description } = req.body;

    const photopath = `http://localhost:5000/assets/skattejagt/images/${req.file.filename}`;

    let poi = await prisma.poi
      .create({
        data: {
          name: name,
          latitude: Number(latitude),
          longitude: Number(longitude),
          imageURL: photopath,
          iconURL: iconURL,
          description: description,
        },
      })
      .catch((error) => {
        console.log(error);
      });

    res.status(201).send(poi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.delete("/poi/:id", async (req, res) => {
  try {
    let u = await prisma.user.findUnique({
      where: {
        id: req.body.userId,
      },
    });
    if (u.role === "USER") {
      res.status(403).send("You are not allowed to perform this action");
      return;
    }
    const { id } = req.params;
    let poi = await prisma.poi.delete({
      where: {
        id: Number(id),
      },
    });
    res.status(200).send(poi);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.put("/poi/:id", upload.single("image"), async (req, res) => {
  try {
    let u = await prisma.user.findUnique({
      where: {
        id: req.body.userId,
      },
    });
    if (u.role === "USER") {
      res.status(403).send("You are not allowed to perform this action");
      return;
    }
    const { id } = req.params;
    const { name, latitude, longitude, iconURL, description } = req.body;
    const photopath = req.body.imageURL
      ? req.body.imageURL
      : `http://localhost:5000/assets/skattejagt/images/${req.file.filename}`;

    let poi = await prisma.poi.update({
      where: {
        id: Number(id),
      },
      data: {
        name: name,
        latitude: Number(latitude),
        longitude: Number(longitude),
        iconURL: iconURL,
        imageURL: photopath,
        description: description,
      },
    });
    res.status(200).send(poi);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

router.get("/icons", async (req, res) => {
  try {
    let files = await readdir("./public/assets/icons").then((files) => {
      return files.map((file) => {
        return "http://localhost:5000/assets/icons/" + file;
      });
    });

    res.status(200).send(files);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
