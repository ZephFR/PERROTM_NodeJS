const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const ip = require("ip");
const ipAddr = ip.address();

let Maison = "Gryffindor";

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {    
  res.json({Maison})
});
app.post("/", (req, res) => {
  Maison = req.body.Maison
  res.json({Maison})
})

app.use("/", require("./routes/start"));

app.listen(port, () => {
  console.log("http://"+ip.address()+":"+ port);
});