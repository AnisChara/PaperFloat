"use strict";
 
const fs = require("fs");
const nunjucks = require("nunjucks");;
 
const m_grid_publique = function( adverse,id) {
 
    let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+adverse+".json"))
    let grille_t = JSON.parse(fs.readFileSync("./grille/save_grille_"+adverse+".json"))
    let grid = "";
    let full_boat = 0;
		
    for (let i = 0; i < 10; i++)
    { 
        for (let j = 0; j < 10; j++ )
        {
			let css = `<div class="case_eau"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button"></a></div>`

            if ( grille_t[j][i] === false )
            {
            }
            else 
            {
               css = `<div class="case_eau_touch"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button" disabled="disabled"></a></div>`

                for (let u= 0; u < bateaux.length; u++)
                {
                    for (let v = 0; v < bateaux[u].length; v++)
                    {
                        if (bateaux[u][v].x === j && bateaux[u][v].y === i && bateaux[u][v].state === true )
                        {   
                            for (let a = 0; a< bateaux[u].length; a++)
                            {
                                if(bateaux[u][a].state === true)
                                {
                                    full_boat++;
                                }
                            }
                            if(full_boat === bateaux[u].length) 
						    {
						    	css = `<div class="case_bateau_touch_c"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button" disabled="disabled"></a></div>`
						    }
                            else
						    {
							    css = `<div class="case_bateau_touch"><a type="submit" href="/req_tir?bouton=${i}-${j}&id=${id}&adverse=${adverse}"><input type="button" disabled="disabled"></a></div>`
						    }
                    
						    full_boat = 0;
                        }
                    }
                }   
            }
            
            grid += css;
        }
    }
    return grid;
};
 
module.exports = m_grid_publique;