"use strict"

const fs = require("fs");

    

const m_tir = require("./m_tir.js");
const m_verif_tir_case = require("./m_verif_tir_case.js");


const ultime_tir = function(grille,co,bateau,adverse)
{
    if(m_verif_tir_case(co,grille))
    {
        const result = m_tir(grille,bateau,co)

        fs.writeFileSync("./save_grille_"+adverse+".json",JSON.stringify(result[0]),"utf-8");
        
        if(result[1] != undefined)
        {
            fs.writeFileSync("./save_bateaux_",JSON.stringify(result[1]),"utf-8")
        }

        return true;

    }
    else
    {
        return false;
    }
    
}

module.exports = ultime_tir;