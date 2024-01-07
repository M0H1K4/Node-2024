const express = require("express");
const app = express();
const port = 3000;


app.get('/app', (req, res) => {
const apps = [
  {id: 1, name: 'App 1' },
  {id: 2, name: 'App 2'},
  {id: 3, name: 'App 3'},
  {id: 4, name: 'App 4'},
  {id: 5, name: 'App 5'}
]
res.json(apps);
});

app.get("/app", (req, res) => {
 res.json({id: req.params.id, name: 'App 1'})
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
