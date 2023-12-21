"use strict";
 
const fs = require("fs");
const nunjucks = require("nunjucks");;
 
const m_grid_publique = function( adverse,id) {
 
    let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+adverse+".json"))
    let grid = "";
	let i;
	let j;
    let is_a_boat_touch = `<div class="btn2"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button"></a></div>`
    let is_a_boat_down = `<div class="btn3"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button"></a></div>`
    let full_boat = 0;
		
    for (i = 0; i < 10; i++)
    { 
        for (j = 0; j < 10; j++ )
        {
			let css = `<div class="btn"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button"></a></div>`

            for (let u= 0; u < bateaux.length; u++)
            {
                for (let v = 0; v < bateaux[u].length; v++)
                {
                    if (bateaux[u][v].x === j && bateaux[u][v].y === i && bateaux[u][v].state === true )
                    {
                        for (let a = 0; a< bateaux[u].length; a++)
                        {
                            if(bateaux[u][a].state === true) full_boat++;
                        }
                        if(full_boat === bateaux[u].length) 
						{
							css = is_a_boat_down
						}
                        else
						{
							css = is_a_boat_touch;
						}
						full_boat = 0;
                    }
                }
            }
                grid += css;
				css = `<div class="btn"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button"></a></div>`

        }
    }
    return grid;
};
 
module.exports = m_grid_publique;