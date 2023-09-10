import express from "express";
import body_parser from "body-parser";

const app = express().use(body_parser.json());

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});
