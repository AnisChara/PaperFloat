// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const req_grid = require("./m_grid.js");
const { log } = require("console");
const placement = require("./m_ultime_placement.js");
const gen_bateaux = require("./m_liste_bateaux.js");

const req_bateaux = function (req, res, query) {

	let marqueurs;
	let page;
	let bouton;

	// AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('page_placement.html', 'utf-8');

	let bateau;
	let rotate;
	if(query.reset)
	{
		gen_bateaux();
	}
	if(query.rotate)
	{
		let nb_rotate = JSON.parse(fs.readFileSync("./rotate.json"))
		nb_rotate = nb_rotate + Number(query.rotate);
		fs.writeFileSync("rotate.json",String(nb_rotate),"UTF-8");
	}
	if(query.bateau)
	{
		bateau = query.bateau
		fs.writeFileSync("./bateau_edit.json",bateau,"UTF-8");
	}
	if(query.bouton)
	{
		let bateaux = JSON.parse(fs.readFileSync("./save_bateaux_1_2.json"));
		let bateau = JSON.parse(fs.readFileSync("./bateau_edit.json"));
		let nb_rotate = JSON.parse(fs.readFileSync("./rotate.json"));
		if (nb_rotate%2 === 0)
		{
			rotate = false;
		}
		else 
		{
			rotate = true;
		}
		let party = 2;
		let player = 1;
		let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
		bateaux = placement(player,party,co,rotate,bateau);
		bateaux = JSON.stringify(bateaux);
		
		if(bateaux !== "false")
		{ 
			fs.writeFileSync("./save_bateaux_"+player+"_"+party+".json",bateaux,"UTF-8");
		}
	}
	

    let grid = "";
	grid = req_grid(query.id)


	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.grid = grid;
	marqueurs.id = query.id;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_bateaux;
