/* Instancier Express */
const express = require('express');
const cors = require("cors");

const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth');

const ficheExamenRoutes = require('./routes/ficheExamen_route');

//const postsRoutes = require('.routes/posts');

const errorController = require('./controllers/error');

const ficheExamen_route = require('./routes/ficheExamen_route');

const app = express();

require('./routes/ficheExamen_route')(app) 

const ports = process.env.PORT || 5000;

/* Activer le middleware bodyParser pour parser le corps des requêtes en JSON */
app.use(bodyParser.json());

/* Activer CORS */
app.use(cors());

app.use((req,res,next)=> {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Origin','GET','POST','PUT','DELETE','OPTIONS');
    res.setHeader('Access-Control-Allow-Origin','Content-Type','Authorization');
    next();
});

/* Définir les noutes */
app.use('/auth',authRoutes);

//app.use('/post',postsRoutes);

app.use('/ficheExamen',ficheExamenRoutes);

app.get("/test",(req,res)=>{
    console.log("1ere");
    res.send({
        status:"success",
        message:"appel api"
    })
    
});

app.use(errorController.get404);

app.use(errorController.get500);

/* Ecouter le port */
app.listen(ports,()=> console.log(`Ecoute du port::${ports}`));