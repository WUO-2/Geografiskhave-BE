const router = require("express").Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

router.get("/task/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await prisma.task.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        treasureHunt: true,
        answers: true,
      },
    });
    res.status(200).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
