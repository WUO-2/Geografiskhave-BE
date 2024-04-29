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

module.exports = router;
