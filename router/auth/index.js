const router = require("express").Router();
const { User, PrismaClient } = require("@prisma/client");

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

module.exports = router;
