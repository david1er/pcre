//const sql = require('../util/database');
const config = require('../config/config.json');

const {Pool, Client} = require('pg');

const sql = new Pool({
    host:config.PG_HOST,
    user: config.PG_USER,
    database:config.PG_DATABASE,
    password:config.PG_PASSWORD,
})

/**
 * Modèle de fiche d'examen
 * @param {*} ficheExamen 
 */
const FicheExamen = function(ficheExamen){
    this.id_fiche_examen = ficheExamen.id_fiche_examen;
    this.annee = ficheExamen.annee;
    this.centre_decrit = ficheExamen.centre_decrit;
    this.date_naissance = ficheExamen.date_naissance;
    this.decision = ficheExamen.decision;
    this.ets_provenance = ficheExamen.ets_provenance;
    this.jury = ficheExamen.jury;
    this.lieu_naiss = ficheExamen.lieu_naiss;
    this.mention = ficheExamen.mention;
    this.moyenne = ficheExamen.moyenne;
    this.nom_prenom = ficheExamen.nom_prenom;
    this.num_table = ficheExamen.num_table;
    this.region = ficheExamen.region;
    this.serie_filiere = ficheExamen.serie_filiere;
    this.session = ficheExamen.session;
    this.sexe = ficheExamen.sexe;
    this.config = ficheExamen.config;
    
};

/**
 * Methode d'ajout manuelle de fiche d'examen
 * @param {*} req 
 * @param {*} response 
 */
FicheExamen.create=(req,response)=>{
    sql.query("INSERT INTO fiche_examen SET ?",req,(error,res)=>{
        if(error){
            console.log('erreur',error);
            res(error,null);
            return;
        }
        response(null,res)
    })
}

/**
 * Methode d'affichage de toutes les fiches d'examen
 * @param {*} req 
 * @param {*} result 
 */
FicheExamen.getAllFicheExamen = (req,result)=>{
    sql.query('SELECT * FROM fiche_examen',req,(err,res)=>{

        let data = Array();
        if(err){
            console.log('erreur',error);
            res(error,null);
            return;
        } else {
            return result.send(res);
        }

       

        console.log('ficheExamen',res);
        //return result.send({error: false,data:res});
    })
}

FicheExamen.getNumFicheExamen = (req,result)=>{
    const num_table = parseInt(req,params.num_table);
    sql.query("SELECT * FROM fiche_examen WHERE num_table = $param",[num_table],(err,res)=>{

        let data = Array();
        if(err){
            console.log('erreur',error);
            res(error,null);
            return;
        } else {
            return result.send(res);
        }

        console.log('ficheExamen',res);
        //return result.send({error: false,data:res});
    })
}


FicheExamen.getFicheExamen= (req,res)=>{
    var query = req.params.query;

    Model.find({
        $text: {
            $search: query
        }
    }, function(err, result) {
        if (err) throw err;
        if (result) {
            res.json(result)
        } else {
            res.send(JSON.stringify({
                error : 'Error'
            }))
        }
    })
}

/**
 * AUTRE METHODE
 */
const getFicheExamenCEPD = "SELECT * FROM fiche_examen WHERE num_table= $num_table";
const getFicheExamenTous = "SELECT * FROM fiche_examen";
module.exports = {
    FicheExamen,
    getFicheExamenCEPD,
    getFicheExamenTous,
};