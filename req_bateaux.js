// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const req_grid = require("./req_grid.js");

const req_bateaux = function (req, res, query) {

	let marqueurs;
	let page;
	let bouton;

	// AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('page_placement.html', 'utf-8');

    let grid = "";
	grid = req_grid(case_choisi, liste_bateaux, grille)

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.grid = grid;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_bateaux;
