import express from "express";
import body_parser from "body-parser";

const app = express().use(body_parser.json());
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running on port", port);
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

export default app;
