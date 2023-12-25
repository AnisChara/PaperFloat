"use strict"

const fs = require("fs");
const gen_bateaux = require("./m_liste_bateaux");
const gen_grille = require("./m_generer_grille");

const reset = function(id)
{
    let data = {"id" : id,"adverse" : "", "rotate" : false, "bateau_edit" : 0, "progress" : false, "bateaux" : "./save_bateaux_"+id+".json", "turn" : 0};
    data = JSON.stringify(data);
    fs.writeFileSync("./data/"+id+".json", data, "UTF-8");
    gen_bateaux(id);
    gen_grille(id);

    let party = JSON.parse(fs.readFileSync("./party.json"));

    for ( let i = 0 ; i < party.length; i++)
    {
        if (party[i].player1 === id || party[i].player2 === id)
        {
            party[i].player1 = "";
            party[i].player2 = "";
            fs.writeFileSync("./party.json",JSON.stringify(party), "UTF-8");
            return;
        }
    }

}
module.exports = reset