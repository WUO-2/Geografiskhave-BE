const router = require("express").Router();

router.get("/status", (req, res) => {
  res.send("OK");
});

router.use("/auth", require("./auth"));
router.use("/treasurehunt", require("./treasurehunt"));

module.exports = router;
