"use strict"

const fs = require("fs");
const nunjucks = require("nunjucks");
const m_grid_nc = require("./m_grid_prv_nc.js");
const m_grid_publique = require("./m_grid_publique.js")
const tir = require("./m_ultime_tir.js");

const req_tir = function (req, res, query)
{
    let marqueurs;
    let page;
    let id = query.id;
    let adverse = query.adverse;

    page = fs.readFileSync("page_tir.html", "utf-8");

    if (query.bouton)
    {
        let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
        tir(id,a)

    }
    

    let grid_nc = "";
    grid_nc = m_grid_nc(query.id);

    let grid_publique = "";
    grid_publique = m_grid_publique(query.adverse);

    marqueurs = {};
    marqueurs.erreur = "";
	marqueurs.grid_nc = grid_nc;
    marqueurs.grid_publique = grid_publique;
    marqueurs.id = query.id;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();

};

module.exports = req_tir;