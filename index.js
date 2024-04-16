const express = require("express");
const cors = require("cors");
const { register } = require("./controllers/AuthController");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./router"));

//app.post("/api/v1/auth/register", register);
//app.get("/api/v1/status", (req, res) => {
//  res.send("OK");
//});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
