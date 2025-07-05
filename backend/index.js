const express = require("express");
const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello not ts yet");
});

app.listen(port, () => {
  console.log("this string doesnt matter");
});
