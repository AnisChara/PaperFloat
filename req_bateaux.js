// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const req_grid = require("./m_grid_prv.js");
const { log } = require("console");
const placement = require("./m_ultime_placement.js");
const gen_bateaux = require("./m_liste_bateaux.js");
const verif_all_place = require("./m_verif_all_place.js");
const party_placer = require("./m_party_placer.js");
const random = require("./m_random.js");

const req_bateaux = function (req, res, query) {

	let marqueurs = {};
	let page;
	let bouton;
	let confirm;
	let button_confirm = "";
	let adverse;
	let tmp = false;
	let data;
	// AFFICHAGE DE LA PAGE D'ACCUEIL

	page = fs.readFileSync('./page_placement.html', 'utf-8');

	let rotate;

	adverse = party_placer(query.id);

	if (!adverse)
	{
		page = fs.readFileSync("./loading3.html", 'utf-8');
		marqueurs.id = query.id;
		page = nunjucks.renderString(page, marqueurs);
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(page);
		res.end();
		return;
	}
	
	while(tmp !== true)
	{
		try
		{	
			if (adverse)
			{
				marqueurs.adverse = adverse;
				data = JSON.parse(fs.readFileSync("./data/"+query.id+".json"));
				data.adverse = adverse;
				data.status = "placing";
				tmp = true;
			}
		}
	
		catch(e)
		{
			console.log(e.message);
			console.log(e.stack);
			data = {"id" : query.id,"adverse" : adverse, "rotate" : false, "bateau_edit" : 0, "progress" : false, "bateaux" : "./save_bateaux_"+query.id+".json", "turn" : 0};
		}
	}
	if(query.reset || data.progress === false)
	{
		gen_bateaux(query.id);
		if (data.progress === false) data.progress = "req_bateaux";
	}
	if(query.rotate)
	{
		if (data.rotate === false) data.rotate = true;
		else if (data.rotate === true) data.rotate = false;
	}
	if(query.bateau)
	{
		data.bateau_edit = query.bateau;
	}
	if(query.bouton)
	{
		let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+query.id+".json"));
		let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
		bateaux = placement(query.id,co,data.rotate,data.bateau_edit);
		bateaux = JSON.stringify(bateaux);
		
		if(bateaux !== "false")
		{ 
			fs.writeFileSync("./bateaux/save_bateaux_"+query.id+".json",bateaux,"UTF-8");
		}
	}
	
	if(query.random)
	{
		random(query.id);
	}
	
	confirm = verif_all_place("./bateaux/save_bateaux_"+query.id+".json");

	if(confirm !== false) 
	{
		button_confirm = `<div class="valide">\n
		<div class="btn4"><a href="req_tir?id=${query.id}&adverse=${data.adverse}"><input type="button" value="confirmer"></a></div>\n
	</div>`;
	}

	data = JSON.stringify(data);
	fs.writeFileSync("./data/"+query.id+".json", data, "UTF-8");
    let grid = "";
	data = JSON.parse(fs.readFileSync("./data/"+query.id+".json"));
	grid = req_grid(query.id)


	marqueurs.erreur = "";
	marqueurs.grid = grid;
	marqueurs.id = query.id;
	marqueurs.button_confirm = button_confirm;
	page = nunjucks.renderString(page, marqueurs);

	res.writeHead(200, { 'Content-Type': 'text/html' });
	res.write(page);
	res.end();
};

module.exports = req_bateaux;
