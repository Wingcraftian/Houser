const express = require("express");
const bodyParser = require("body-parser");
const massive = require("massive");
require('dotenv').config();
const cors = require('cors');
const control = require("./controllers/controller");


const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance) );




app.get("/api/houses", control.getAll);
app.post("/api/houses", control.createHouses);


// app.get("/api/houses", (req, res) => {
//     req.app
//     .get("db")
//     .get_all()
//     .then(houses => res.status(200).json(houses))
// })


const port = process.env.PORT || 3003;
app.listen(port, ()=> console.log (`listening on: ${port}`));
 