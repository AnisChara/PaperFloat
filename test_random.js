"use strict"
const rand = require("./m_random");
const fs = require("fs");

let id ="anis";

let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json"));
console.log(bateaux);

bateaux = rand(id);
bateaux= JSON.parse(bateaux);
console.log(bateaux);