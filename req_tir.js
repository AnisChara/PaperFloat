"use strict"

const fs = require("fs");
const nunjucks = require("nunjucks");
const m_grid_nc = require("./m_grid_prv_nc.js");
const m_grid_publique = require("./m_grid_publique.js")
const tir = require("./m_ultime_tir.js");
const gen_grille = require("./m_generer_grille.js");
const { stringify } = require("querystring");

const req_tir = function (req, res, query)
{
    let marqueurs = {};
    let page;
    let id = query.id;
    let adverse;
    let grille;
    let result;

    let data = JSON.parse(fs.readFileSync("./data/"+id+".json"));	
        adverse = data.adverse;
        data.status = "playing";
        data = JSON.stringify(data);
        fs.writeFileSync("./data/"+id+".json",data, "UTF-8");

    let data_adverse = JSON.parse(fs.readFileSync("./data/"+adverse+".json"));
    if (data_adverse.status === "placing")
    {
        page = fs.readFileSync("./loading_tir.html", 'utf-8');
		marqueurs.id = id;
        marqueurs.adverse = adverse;
		page = nunjucks.renderString(page, marqueurs);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(page);
		res.end();
		return;
    }

    if (data.progress === "req_bateaux")
    {
        gen_grille(id);
        data.progress = "req_tir";
        data = JSON.stringify(data);
        fs.writeFileSync("./data/"+id+".json", data, "UTF-8");
        console.log("oui");
    }

    page = fs.readFileSync("page_tir.html", "utf-8");

    if (query.bouton)
    {			

        grille = fs.readFileSync("./grille/save_grille_"+adverse+".json");
        let liste_bateaux = fs. readFileSync("./bateaux/save_bateaux_"+adverse+".json");
        
        grille = JSON.parse(grille);
        liste_bateaux = JSON.parse(liste_bateaux);
        
        let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
        if (co.x <= 9 && co.x >= 0 && co.y <= 9 && co.y >= 0)
        {
            result = tir(grille, co, liste_bateaux,adverse);
        }
        else 
        {}
    
    }
    let grid_nc = "";
    grid_nc = m_grid_nc(query.id);

    let grid_publique = "";
    grid_publique = m_grid_publique(adverse, id);
    

    marqueurs = {};
    marqueurs.erreur = "";
	marqueurs.grid_nc = grid_nc;
    marqueurs.grid_publique = grid_publique;
    marqueurs.id = query.id;
    marqueurs.adverse = adverse;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = req_tir;