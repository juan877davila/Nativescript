const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
app.listen(3000,()=>console.log("Server running on Port 3000"));

const news=[
    "Literatura Paris",
    "Futbol Barcelona",
    "Futbol Barranquilla",
    "Politica Montevideo",
    "Economia Chile",
    "Cocina Mexico",
    "Finanzas New York"
];

app.get("/get",(req,res,next)=>res.json(noticias.filter((c)=>c.toLowerCase().indexOf(req.query.q.toString().toLowerCase())>-1))); 
//res.json(noticias.filter((c)=>c.toLowerCase().indexOf(req.query.q.toString().toLowerCase())>-1));

const misFavoritos=[];
app.get("/favs",(req,res,next)=>res.json(misFavoritos));
app.post("/favs",(req,res,next)=>{
    console.log(req.body);
    misFavoritos.push(req.body.nuevo);
    res.json(misFavoritos);
});


