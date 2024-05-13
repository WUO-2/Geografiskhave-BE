const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.post("/register", (req, res) => {
  try {
    const { id } = req.body;

    const user = prisma.user
      .create({
        data: {
          id: id,
        },
      })
      .then((user) => console.log(user));
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send("Unable to create user");
  }
});

router.get("/user", async (req, res) => {
  try {
    const { requesterid } = req.headers;
    const user = await prisma.user.findUnique({
      where: {
        id: requesterid,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/coins", async (req, res) => {
  try {
    const { requesterid } = req.headers;
    const coins = await prisma.user.findUnique({
      where: {
        id: requesterid,
      },
      select: {
        points: true,
      },
    });
    res.status(200).send({ points: coins.points });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/avatars", async (req, res) => {
  try {
    const avatars = await prisma.avatar.findMany();
    res.status(200).send(avatars);
  } catch (error) {
    res.status(400).send(error);
  }
}); 

router.patch("/avatar", async (req, res) => {
  try {
    const { imageURL, id } = req.body;

    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        imageURL: imageURL,
      },
    });
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});



module.exports = router;
