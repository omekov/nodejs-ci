"use strict";

const express = require("express");

const port = 8080;

const app = express();
app.get("/", (req, res) => {
  res.send("Hello Gitlab");
});

app.listen(port);
console.log(`running on :${port}`);

module.exports.app = app;
