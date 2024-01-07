const express = require("express");
const app = express();
const port = 3000;

const vApp = {
  id: 1,
  name: "App 1",
};

const apps = [
  { id: 1, name: "App 1" },
  { id: 2, name: "App 2" },
  { id: 3, name: "App 3" },
  { id: 4, name: "App 4" },
  { id: 5, name: "App 5" },
];
console.log(apps[0].name);

app.get("/app", (req, res) => {
  res.json(apps);
});

app.get("/app/:id", (req, res) => {
  const vId = pareseInt(req.params.id);
  const result = apps.find((app) => {
    return app.id === vId;
  });
  res.json(result);
});

app.post("/app/:id", (req, res) => {
  res.setHeader("Contentt-Type", "application/json").send("Hello World!");
});

app.put("/ap", (req, res) => {
  res.setHeader("Contentt-Type", "application/json").send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
