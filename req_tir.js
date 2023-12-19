"use strict"

const fs = require("fs");
const nunjucks = require("nunjucks");
const m_grid_nc = require("./m_grid_prv_nc.js");

const req_tir = function (req, res, query)
{
    let marqueurs;
    let page;

    page = fs.readFileSync("page_tir.html", "utf-8");

    let grid_nc = "";
    grid_nc = m_grid_nc(query.id);

    marqueurs = {};
    marqueurs.erreur = "";
	marqueurs.grid_nc = grid_nc;
    marqueurs.id = query.id;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = req_tir;