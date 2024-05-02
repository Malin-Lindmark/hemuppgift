const express = require("express");
const app = express();
const port = 3000;
const routes = require("./routes");
const services = require("./services");

app.use(express.text());
routes(app, services);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is listening on: http://localhost:${port}`);
});
