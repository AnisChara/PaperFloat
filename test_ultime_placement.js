//fichier test de placement ultime
"use strict"

const fs = require("fs");
const ultime_placement = require("./m_ultime_placement");
const gen_bateaux = require("./m_liste_bateaux");

let id = "anis";
let co_case_choisi = {x:2,y:3};
let rotate = false;
let bateaux = fs.readFileSync("./save_bateaux_"+id+".json");
bateaux = JSON.parse(bateaux);

let bateau = 2;
bateaux = ultime_placement(id,co_case_choisi,rotate,bateau);
if (bateaux === false ) console.log("error");
else {console.log(bateaux[bateau]);
bateaux = JSON.stringify(bateaux);
fs.writeFileSync("./save_bateaux_"+id+".json",bateaux,"UTF-8");
}