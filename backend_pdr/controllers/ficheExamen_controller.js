
const {Client} = require('pg');
const pool = require("../util/database");
const ficheExamen_model = require('../models/ficheExamen');

module.exports.getClient = async()=>{
    const client = new Client({
        host:config.PG_HOST,
        user: config.PG_USER,
        database:config.PG_DATABASE,
        password:config.PG_PASSWORD,
        ssl:true,   
    });
    await client.connect();
    return client;
};

exports.create = (req,result)=>{
    if(!req){
        res.status(404).send({
            message:"Le contenu ne doit pas être vide"
        });
    }

    ficheExamen_model.create(
        {
            /* libelleRegion:req.body.libelleRegion,
            codeRegion : req.body.codeRegion,
            dimension:req.body.dimension */
        },(err,res)=>{
        if(err){
            res.status(500).send({
                message:
                    err.message || 'Rien ne fonctionne'
            });
        }

        else result.json({ data:req.body})
    })
}

exports.getAll=((req,res)=>{
    ficheExamen_model.getAllFicheExamen((err,data)=>{
        if(err){
            res.status(500).send({
                message:
                    err.message || 'Rien ne fonctionne'
            });
        }
        else if(data){
            res.send(data);
        }else res.send("Aucune données");
        ;
    }) 
})


exports.getFicheExamen=((req,res)=>{
    ficheExamen_model.getFicheExamen((err,data)=>{
        if(err){
            res.status(500).send({
                message:
                    err.message || 'Rien ne fonctionne'
            });
        }
        else if(data){
            res.send(data);
        }else res.send("Aucune données");
        ;
    }) 
})


exports.getNumFicheExamen=((req,res)=>{
    const num_table = parseInt(req,params.num_table);

    ficheExamen_model.getNumFicheExamen([num_table],(err,data)=>{
        
        if(err){
            res.status(500).send({
                message:
                    err.message || 'Rien ne fonctionne'
            });
        }
        else if(data){
            res.send(data);
        }else res.send("Aucune données");
        ;
    }) 
})


exports.getTest=(req,res)=>{
    res.send("okiii");
}

/**
 * EXEMPLE AUTRE METHODE
 */

exports.getFicheExamenTous=(req,res)=>{
    console.log("sssss");
    pool.query(ficheExamen_model.getFicheExamenTous,(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};


exports.getFicheExamenCEPD = (req,res)=>{
    console.log("ICI OOOOOOO");
    const num_table = parseInt(req,params.num_table);
    pool.query(ficheExamen_model.getFicheExamenCEPD,[num_table],(error,results)=>{
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};
/*
module.exports={
    getFicheExamenCEPD,
}; */