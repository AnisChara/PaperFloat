// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");;

const req_grid = function (req, res, query) {

	let marqueurs;
	let page;
	let bouton;

	// AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('page_jeu.html', 'utf-8');

    let grid = "";

    for (let i = 0; i < 10; i++) {
		for ( let j = 0; j < 10; j++ ) {
			grid+= `<div class="btn"><a type="submit" href="/req_grid?bouton=${i}/${j}"><input type="button"></a></div>`
		}
    }

	marqueurs = {};
	marqueurs.erreur = "";
	marqueurs.grid = grid;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_grid;
