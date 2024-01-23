"use strict"

const fs = require("fs");
const nunjucks = require("nunjucks");
const m_grid_nc = require("./m_grid_prv_nc.js");
const m_grid_publique = require("./m_grid_publique.js")
const tir = require("./m_ultime_tir.js");
const gen_grille = require("./m_generer_grille.js");
const { stringify } = require("querystring");
const verif_all_down = require("./m_verif_all_down.js");
const reset = require("./m_reset_data.js");
const verif_down = require("./m_verif_down.js");

const req_tir = function (req, res, query)
{
    let marqueurs = {};
    let page;
    let id = query.id;
    let adverse;
    let grille;
    let result;
    let sonar = query.sonar;
    let shot;

    let data = JSON.parse(fs.readFileSync("./data/"+id+".json"));	
    adverse = data.adverse;
    let data_adverse = JSON.parse(fs.readFileSync("./data/"+adverse+".json"));
    if (data.turn > data_adverse.turn)
    {
        page = fs.readFileSync("./loading_tir.html", 'utf-8');
		marqueurs.id = id;
        marqueurs.adverse = adverse;
        marqueurs.sonar = query.sonar;
		page = nunjucks.renderString(page, marqueurs);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(page);
		res.end();
		return;
    }

    //verification win or lose 

    if (data.turn === data_adverse.turn)
    {
        let win = verif_all_down(JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+adverse+".json")));
        let lose = verif_all_down(JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json")));

        if (win === true && lose === true)
        {   
            data.progress = false;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            if (data_adverse.progress === false) {reset(id); reset(adverse);}
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("tie");
            res.end();
            return;
        }
        else if (win === true)
        {
            data.progress = false;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            if (data_adverse.progress === false) {reset(id); reset(adverse);}
            page = fs.readFileSync("./page_victoire.html", 'utf-8');
            marqueurs.id = id;
            marqueurs.adverse = adverse;
            page = nunjucks.renderString(page, marqueurs);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(page);
            res.end();
		    return;
        }
        else if (lose === true)
        {
            data.progress = false;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            if (data_adverse.progress === false) {reset(id); reset(adverse);}
            page = fs.readFileSync("./page_defaite.html", 'utf-8');
            marqueurs.id = id;
            marqueurs.adverse = adverse;
            page = nunjucks.renderString(page, marqueurs);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(page);
            res.end();
            return;
        }
    }

    if (data.progress === "req_bateaux")
    {
        gen_grille(id);
        data.progress = "req_tir";
        data = JSON.stringify(data);
        fs.writeFileSync("./data/"+id+".json", data, "UTF-8");
    }


    if (data_adverse.progress === "req_bateaux") 
    {
        page = fs.readFileSync("./loading_tir.html", 'utf-8');
		marqueurs.id = id;
        marqueurs.adverse = adverse;
        marqueurs.sonar = query.sonar;
		page = nunjucks.renderString(page, marqueurs);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(page);
		res.end();
		return;
    }

    //si joue en appuyant sur un bouton
    
    if (query.bouton)
    {	
        data = JSON.parse(fs.readFileSync("./data/"+id+".json"));

        grille = fs.readFileSync("./grille/save_grille_"+adverse+".json");
        let liste_bateaux = fs.readFileSync("./bateaux/save_bateaux_"+adverse+".json");
        
        grille = JSON.parse(grille);
        liste_bateaux = JSON.parse(liste_bateaux);
        
        let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
        result = tir(grille, co, liste_bateaux,adverse,data.shot);

        if (result !== false)
        {
            if(result === "miss" && data.sonar === true)
            {
                if (verif_down(id, 0) === true) data.sonar = false;
                else sonar = "miss";

            }
            
            if (data.shot === true) data.shot = "done";
            data.turn++;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            
            if (data.shot === false)
            {
                if(verif_down(id, 4) === true)
                {
                    data.shot = true;
                    shot = "Vous disposez du mega tir";
                    fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
                }
            }		
        }

    }

    // verification win or lose

    if (data.turn === data_adverse.turn)
    {
        
        let win = verif_all_down(JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+adverse+".json")));
        let lose = verif_all_down(JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json")));

        if (win === true && lose === true)
        {
            data.progress = false;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            if (data_adverse.progress === false) {reset(id); reset(adverse);}
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write("tie");
            res.end();
            return;
        }
        else if (win === true)
        {
            data.progress = false;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            if (data_adverse.progress === false) {reset(id); reset(adverse);}
            page = fs.readFileSync("./page_victoire.html", 'utf-8');
            marqueurs.id = id;
            marqueurs.adverse = adverse;
            page = nunjucks.renderString(page, marqueurs);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(page);
            res.end();
		    return;
        }
        else if (lose === true)
        {
            data.progress = false;
            fs.writeFileSync("./data/"+id+".json", JSON.stringify(data), "UTF-8");
            if (data_adverse.progress === false) {reset(id); reset(adverse);}
            page = fs.readFileSync("./page_defaite.html", 'utf-8');
            marqueurs.id = id;
            marqueurs.adverse = adverse;
            page = nunjucks.renderString(page, marqueurs);
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(page);
            res.end();
            return;
        }
    }


    if (data.turn > data_adverse.turn)
    {
        page = fs.readFileSync("./loading_tir.html", 'utf-8');
		marqueurs.id = id;
        marqueurs.adverse = adverse;
        marqueurs.sonar = sonar;
		page = nunjucks.renderString(page, marqueurs);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(page);
		res.end();
		return;
    }

    if(sonar === "miss")
    {
        sonar =`<div class ="miss"><p> Raté de peu ! <p></div>`;
    }
    
   

    let grid_nc = "";
    grid_nc = m_grid_nc(query.id);

    let grid_publique = "";
    grid_publique = m_grid_publique(adverse, id);
    
    page = fs.readFileSync("page_tir.html", "utf-8");

    marqueurs = {};
    marqueurs.erreur = "";
	marqueurs.grid_nc = grid_nc;
    marqueurs.grid_publique = grid_publique;
    marqueurs.id = query.id;
    marqueurs.adverse = adverse;
    marqueurs.sonar = sonar;
    marqueurs.shot = shot;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = req_tir;