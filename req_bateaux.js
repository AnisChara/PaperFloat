// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const req_grid = require("./req_grid.js");
const { log } = require("console");
const placement = require("./m_ultime_placement.js")

const req_bateaux = function (req, res, query) {

	let marqueurs;
	let page;
	let bouton;

	// AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('page_placement.html', 'utf-8');

	let bateau;
	if(query.bateau)
	{
		bateau = query.bateau
		fs.writeFileSync("./bateau_edit.json",bateau,"UTF-8");
	}
	if(query.bouton)
	{
		let bateaux = JSON.parse(fs.readFileSync("./save_bateaux_1_2.json"))
		let bateau = JSON.parse(fs.readFileSync("./bateau_edit.json"))
		let party = 2;
		let player = 1;
		let rotate = true;
		let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
		bateaux = placement(player,party,co,rotate,bateau);
		bateaux = JSON.stringify(bateaux);
		console.log(bateaux);
		
		if(bateaux !== "false")
		{ 
			fs.writeFileSync("./save_bateaux_"+player+"_"+party+".json",bateaux,"UTF-8");
		}
	}

    let grid = "";
	grid = req_grid()


	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.grid = grid;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_bateaux;
