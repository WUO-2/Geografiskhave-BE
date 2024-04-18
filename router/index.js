const router = require("express").Router();

router.get("/status", (req, res) => {
  res.send("OK");
});

router.use("/auth", require("./auth"));

module.exports = router;
