// Traitement de "req_commencer"

"use strict";

const fs = require("fs");
const nunjucks = require("nunjucks");;

const req_grid = function() {

	let bateaux = JSON.parse(fs.readFileSync("./save_bateaux_1_2.json"))
    let grid = "";
	let css;

    for (let i = 0; i < 10; i++) 
	{
		for ( let j = 0; j < 10; j++ ) 
		{
			for (let u= 0; u < bateaux.length; u++)
			{
				for (let v = 0; v < bateaux[u].length; v++)
				{
					if (bateaux[u][v].x === j && bateaux[u][v].y === i)
					{
						css = true;
					}
				}
			}
			if (css === true)
			{
				grid+= `<div class="btn2"><a type="submit" href="/req_bateaux?bouton=${i}-${j}"><input type="button"></a></div>`
			}
			else
			{
				grid+= `<div class="btn"><a type="submit" href="/req_bateaux?bouton=${i}-${j}"><input type="button"></a></div>`
			}
			css = false;
		}
    }
	return grid;
};

module.exports = req_grid;
