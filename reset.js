"use strict"

const fs = require("fs");
const gen_bateaux = require("./m_liste_bateaux");
const gen_grille = require("./m_generer_grille");

const reset = function()
{
let membres = JSON.parse(fs.readFileSync("./membres.json"));

for (let i = 0; i < membres.length; i++)
{
    let data = {"id" : membres[i].pseudo,"adverse" : "", "rotate" : false, "bateau_edit" : 0, "progress" : false, "bateaux" : "./save_bateaux_"+membres[i].pseudo+".json", "turn" : 0, "sonar" : true, "shot" : false };
    data = JSON.stringify(data);
    fs.writeFileSync("./data/"+membres[i].pseudo+".json", data, "UTF-8");
    gen_bateaux(membres[i].pseudo);
    gen_grille(membres[i].pseudo);
}
let party = [];
party = JSON.stringify(party);
fs.writeFileSync("./party.json",party, "UTF-8");
}
reset();