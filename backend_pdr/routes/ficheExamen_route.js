module.exports = app => {
    const route_ficheExamen = require('../controllers/ficheExamen_controller' );
  
    let router = require("express").Router();
    
    const { body } = require('express-validator');
  
    router.post("/post-examen", route_ficheExamen.create);
  
    router.get("/get-examen", route_ficheExamen.getAll);

    router.get("/table/:num",route_ficheExamen.getNumFicheExamen);

    /**AUTRE METHODE */
    router.get("/cepd/:num_table",route_ficheExamen.getFicheExamenCEPD);
    
    router.get("/examens",route_ficheExamen.getFicheExamenTous);

    /** FIN AUTRE METHODE */

    router.get("/find/:query",route_ficheExamen.getFicheExamen);
  
    router.get("/testmethode", route_ficheExamen.getTest);

    router.get("/testons",(req,res)=>{
        console.log("2iem bah humm");
        res.send({
            status:"success",
            message:"appel api"
        })
        
    });
    
    app.use("/api/examen", router);
  };

