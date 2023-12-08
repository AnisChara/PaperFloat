//fichier test de placement

"use strict"

const m_placement_bateau = require("./m_placement_bateau");
const fs = require("fs");

let player = 1;
let party = 2;
let co_case_choisi = {x:4,y:4};
let rotate = true;
let bateaux = JSON.parse(fs.readFileSync("./save_bateaux_"+player+"_"+party+".js"));
console.log(bateaux);
let bateau = bateaux[4];
console.log(bateaux[4]);

let co_bateau = m_placement_bateau(co_case_choisi,bateau,rotate);
console.log(co_bateau);



