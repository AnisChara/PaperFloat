"use strict"

const fs = require("fs");
//fonction qui genere les bateaux
const create_bateaux = function(player, party)
{
let bateau_2_A = [];
let bateau_2_B = [];
let bateau_3_A = [];
let bateau_3_B = [];
let bateau_4 = [];
let bateau_10 = [];
//bateaux -> bateau -> case -> x,y,state
let bateaux = [

    bateau_2_A = [
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false}
    ],

    bateau_2_B = [ 
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false}
    ],

    bateau_3_A = [
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false}
    ],

    bateau_3_B = [
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false}
    ],
    
    bateau_4 = [
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false}
    ],

    bateau_10 =[
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
    ]
]

bateaux = JSON.stringify(bateaux);
fs.writeFileSync("./save_bateaux_"+player+"_"+party+".js",bateaux,"UTF-8")
}

module.exports = create_bateaux
