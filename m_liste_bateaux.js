"use strict"

const fs = require("fs");

const create_bateaux = function(player, party)
{
let bateau_2_A = [];
let bateau_2_B = [];
let bateau_3_A = [];
let bateau_3_B = [];
let bateau_4 = [];
let bateau_10 = [];

let bateaux = [

    bateau_2_A = [
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false}
    ],

    bateau_2_B = [ 
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false}
    ],

    bateau_3_A = [
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false}
    ],

    bateau_3_B = [
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false}
    ],
    
    bateau_4 = [
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false}
    ],

    bateau_10 =[
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
        {x : 0, y : 0, state : false},
    ]
]

bateaux = JSON.stringify(bateaux);
fs.writeFileSync("./save_bateaux_"+player+"_"+party+".js",bateaux,"UTF-8")
}

module.exports = m_liste_bateaux.js
