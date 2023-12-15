"use strict"

const fs = require("fs");
const nunjucks = require("nunjucks");
const m_grid = require("./req_grid.js");

const req_tir = function (req, res, query)
{
    let marqueurs;
    let page;

    page = fs.readFileSync("page_tir.html", "utf-8");

    let grid = "";
    grid = m_grid(query.id);

    marqueurs = {};
    marqueurs.erreur = "";
	marqueurs.grid = grid;
    marqueurs.id = query.id;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = req_tir;