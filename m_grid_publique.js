// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");;

const m_grid_publique = function(id) {

	let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json"))
    let grid = "";
	let is_a_boat;

    for (let i = 0; i < 10; i++) 
	{
		for ( let j = 0; j < 10; j++ ) 
		{
			for (let u= 0; u < bateaux.length; u++)
			{
				for (let v = 0; v < bateaux[u].length; v++)
				{
					if (bateaux[u][v].x === j && bateaux[u][v].y === i && bateaux[u][v].state === true )
					{
						is_a_boat = true;
					}
				}
			}
			if (is_a_boat === true)
			{
				grid+= `<div class="btn2"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
			}
			else
			{
				grid+= `<div class="btn"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
			}
			is_a_boat = false;
		}
    }
	return grid;
};

module.exports = m_grid_publique;
