const { PrismaClient } = require("@prisma/client");

const router = require("express").Router();

const prisma = new PrismaClient();

router.get("/pois", async (req, res) => {
  try {
    const pois = await prisma.poi.findMany();
    console.log(pois);
    res.status(200).send(pois);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/poi", async (req, res) => {
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

    const { name, latitude, longitude, imageURL, iconURL, description } =
      req.body;

    console.log(name, latitude, longitude, imageURL, iconURL, description);

    let poi = await prisma.poi.create({
      data: {
        name: name,
        latitude: latitude,
        longitude: longitude,
        imageURL: imageURL,
        iconURL: iconURL,
        description: description,
      },
    });

    console.log(poi);

    res.status(201).send(poi);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
