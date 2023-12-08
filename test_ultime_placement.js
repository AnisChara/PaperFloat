//fichier test de placement ultime
"use strict"

const fs = require("fs");
const ultime_placement = require("./m_ultime_placement");

let player = 1;
let party = 2;
let co_case_choisi = {x:4,y:3};
let rotate = false;
let bateaux = fs.readFileSync("./save_bateaux_"+player+"_"+party+".json");
bateaux = JSON.parse(bateaux);
let bateau = 2;
bateaux = ultime_placement(player,party,co_case_choisi,rotate,bateau);
if (bateaux === false ) console.log("error");
else {console.log(bateaux[bateau]);
bateaux = JSON.stringify(bateaux);
fs.writeFileSync("./save_bateaux_"+player+"_"+party+".json",bateaux,"UTF-8");
}