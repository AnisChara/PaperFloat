//fichier test de placement ultime
"use strict"

const fs = require("fs");
const ultime_placement = require("./m_ultime_placement");

let player = 1;
let party = 2;
let co_case_choisi = {x:0,y:4};
let rotate = false;
let bateaux = fs.readFileSync("./save_bateaux_"+player+"_"+party+".js");
bateaux = JSON.parse(bateaux);
let bateau = bateaux[5];
JSON.stringify("./save_bateaux_"+player+"_"+party+".js",bateaux,"UTF-8");
let test = ultime_placement(player,party,co_case_choisi,rotate,bateau);
if (test === false ) console.log("error");
else console.log(bateaux);
