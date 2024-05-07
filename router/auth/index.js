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

    const badges = await prisma.badgesOnUsers.findMany({
      where: {
        userId: requesterid,
      },
      include: {
        badge: true,
      },
    });

    const assembledUser = {
      ...user,
      badges: [...badges],
    };

    console.log(assembledUser);
    res.status(200).send(assembledUser);
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

module.exports = router;
