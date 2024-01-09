// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");;

const m_grid_prv = function(id) {

	let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json"))
    let grid = "";
	let is_a_boat;

    for (let i = 0; i < 10; i++) 
	{
		for ( let j = 0; j < 10; j++ ) 
		{
			let css = `<div class="case_eau"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button" ></a></div>`

			for (let u= 0; u < bateaux.length; u++)
			{
				for (let v = 0; v < bateaux[u].length; v++)
				{
					if (bateaux[u][v].x === j && bateaux[u][v].y === i)
					{
						/*if (u === 3)
						{
							if (v === 0)
							{
								css = `<div class="case_bateau_5_1"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
							}
							else if (v === 1)
							{
								css = `<div class="case_bateau_5_2"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
							}
						}*/
						css = `<div class="case_bateau"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
						
					}
				}
			}
			grid += css;
		}
    }
	return grid;
};

module.exports = m_grid_prv;
