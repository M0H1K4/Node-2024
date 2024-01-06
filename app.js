const express = require("express");
const app = express();
const port = 3000;

app.get("/app", (req, res) => {
  res.setHeader('Contentt-Type', 'application/json').send("Hello World!");
}); 

app.post("/", (req, res) => {
    res.setHeader('Contentt-Type', 'application/json').send("Hello World!");
  }); 

  app.put("/", (req, res) => {
    res.setHeader('Contentt-Type', 'application/json').send("Hello World!" );
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
