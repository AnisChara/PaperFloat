"use strict"
const fs = require("fs");
const verif_down = function(id, nb_bateau)
{
    let down = 0;
    let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json"));
    for (let i = 0; i < bateaux[nb_bateau].length; i++)
    {
        if (bateaux[nb_bateau][i].state === true) down++;
    }
    if (down === bateaux[nb_bateau].length) return true;
}

module.exports = verif_down;