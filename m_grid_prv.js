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
						css = `<div class="case_bateau"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
						
						if (u === 1 || u === 2)
						{
							if (bateaux[u][0].x === bateaux[u][1].x)
							{
								if (v === 0)
								{
									css = `<div class="case2_bateau3"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`

								}
								if (v === 1)
								{
									css = `<div class="case1_bateau3"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 2)
								{
									css = `<div class="case3_bateau3"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
							}
							else if (bateaux[u][0].y === bateaux[u][1].y)
							{
								if (v === 0)
								{
									css = `<div class="case2_bateau3H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`

								}
								if (v === 1)
								{
									css = `<div class="case1_bateau3H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 2)
								{
									css = `<div class="case3_bateau3H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
							}

						}
						else if (u === 0)
						{
							css = `<div class="case_bateau1"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
						}
						/*else if (u === 3)
						{
							if (bateaux[u][0].x === bateaux[u][1].x)
							{
								if (v === 0)
								{
									css = `<div class="case3_bateau5"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 1)
								{
									css = `<div class="case2_bateau5"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 2)
								{
									css = `<div class="case4_bateau5"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 3)
								{
									css = `<div class="case1_bateau5"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 4)
								{
									css = `<div class="case5_bateau5"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
							}
							else if (bateaux[u][0].y === bateaux[u][1].y)
							{
								if (v === 0)
								{
									css = `<div class="case3_bateau5H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 1)
								{
									css = `<div class="case2_bateau5H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 2)
								{
									css = `<div class="case4_bateau5H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 3)
								{
									css = `<div class="case1_bateau5H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
								if (v === 4)
								{
									css = `<div class="case5_bateau5H"><a type="submit" href="/req_bateaux?bouton=${i}-${j}&id=${id}"><input type="button"></a></div>`
								}
							}

						}
						else if (u === 4)
						{

						}*/
						
					}
				}
			}
			grid += css;
		}
    }
	return grid;
};

module.exports = m_grid_prv;
