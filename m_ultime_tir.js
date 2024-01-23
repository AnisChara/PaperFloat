"use strict"

const fs = require("fs");

    

const m_tir = require("./m_tir.js");
const m_verif_tir_case = require("./m_verif_tir_case.js");


const ultime_tir = function(grille,co,bateau,adverse,shot)
{
    if(m_verif_tir_case(co,grille) === true)
    {
        const result = m_tir(grille,bateau,co,shot)

        fs.writeFileSync("./grille/save_grille_"+adverse+".json",JSON.stringify(result[0]),"utf-8");
        
        if(result[1] !== undefined)
        {
            fs.writeFileSync("./bateaux/save_bateaux_"+adverse+".json",JSON.stringify(result[1]),"utf-8")
        }
        else
        {
            for(let i = 0; i < bateau.length; i++)
            {
                for(let j = 0; j < bateau[i].length; j++)
                {
                    if (((bateau[i][j].x - co.x)**2 + (bateau[i][j].y - co.y)**2)**0.5 <= 1 && bateau[i][j].state === false || ((bateau[i][j].x - co.x+1)**2 + (bateau[i][j].y - co.y)**2)**0.5 < 1.5 && bateau[i][j].state === false || ((bateau[i][j].x - co.x-1)**2 + (bateau[i][j].y - co.y)**2)**0.5 < 1.5 && bateau[i][j].state === false|| ((bateau[i][j].x - co.x)**2 + (bateau[i][j].y - co.y+1)**2)**0.5 < 1.5 && bateau[i][j].state === false || ((bateau[i][j].x - co.x)**2 + (bateau[i][j].y - co.y-1)**2)**0.5 < 1.5 && bateau[i][j].state === false)
                    {
                        return "miss";
                    }
                }
            }
        }
        
        return true;

    }
    else
    {
        return false;
    }
    
}

module.exports = ultime_tir;