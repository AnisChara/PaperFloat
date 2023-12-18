// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");
const req_grid = require("./m_grid.js");
const { log } = require("console");
const placement = require("./m_ultime_placement.js");
const gen_bateaux = require("./m_liste_bateaux.js");
const verif_all_place = require("./m_verif_all_place.js");
const party_placer = require("./m_party_placer.js");

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

	let bateau;
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
				tmp = true;
			}
		}
	
		catch(e)
		{
			console.log(e.message);
			console.log(e.stack);
			data = {"id" : query.id,"adverse" : adverse, "rotate" : 0, "bateau_edit" : null, "progress" : false, "bateaux" : "./save_bateaux_"+query.id+".json"};
			data = JSON.stringify(data);
			fs.writeFileSync("./data/"+query.id+".json", data, "UTF-8");
			data = JSON.parse(fs.readFileSync("./data/"+query.id+".json"));
			data.adverse = adverse;
		}
	}
	if(query.reset || data.progress === false)
	{
		gen_bateaux(query.id);
		if (data.progress === false) data.progress = "req_bateaux.js";
	}
	if(query.rotate)
	{
		data.rotate = data.rotate + Number(query.rotate);
	}
	if(query.bateau)
	{
		data.bateau_edit = query.bateau;
	}
	if(query.bouton)
	{
		let bateaux = JSON.parse(fs.readFileSync("./save_bateaux_"+query.id+".json"));
		if (data.rotate%2 === 0)
		{
			rotate = false;
		}
		else 
		{
			rotate = true;
		}
		let co = query.bouton;
		co = co.split("-");
		co = {x:Number(co[1]),y:Number(co[0])};
		bateaux = placement(query.id,co,rotate,data.bateau_edit);
		bateaux = JSON.stringify(bateaux);
		
		if(bateaux !== "false")
		{ 
			fs.writeFileSync("./save_bateaux_"+query.id+".json",bateaux,"UTF-8");
		}
	}

	confirm = verif_all_place("./save_bateaux_"+query.id+".json");

	if(confirm !== false) 
	{
		button_confirm = `<div class="valide">\n
		<div class="confirm"><a href="req_tir?id=${query.id}&adverse=${data.adverse}"><input type="button" value="confirmer"></a></div>\n
	</div>`;
	}

	data = JSON.stringify(data);
	fs.writeFileSync("./data/"+query.id+".json", data, "UTF-8");
    let grid = "";
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
