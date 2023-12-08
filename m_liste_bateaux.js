"use strict"

const fs = require("fs");
//fonction qui genere les bateaux
const create_bateaux = function(player, party)
{
let bateau_1 = [];
let bateau_3_A = [];
let bateau_3_B = [];
let bateau_5 = [];
let bateau_9 = [];
//bateaux -> bateau -> case -> x,y,state
let bateaux = [

    bateau_1 = [
        {x : 11, y : 11, state : false},
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
    
    bateau_5 = [
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false},
        {x : 11, y : 11, state : false}
    ],

    bateau_9 =[
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
fs.writeFileSync("./save_bateaux_"+player+"_"+party+".json",bateaux,"UTF-8")
}
/*let player=1;
let party = 2
create_bateaux(player,party)*/
module.exports = create_bateaux