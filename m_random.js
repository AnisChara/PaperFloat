"use strict";
const fs = require("fs");
const place = require("./m_ultime_placement");
let max = 9;
let min =0;
let co_bateaux = {};

const random = function(id)
{ 
    let bateaux = JSON.parse(fs.readFileSync("./bateaux/save_bateaux_"+id+".json"));
    for (let i = 0; i <bateaux.length; i++) 
    {  
        do
        {   
            let rotate;
            if (Math.floor(Math.random() * (max - min)) < 5) rotate = false;
            else rotate = true;
            co_bateaux = {x: Math.floor(Math.random() * (max - min)), y : Math.floor(Math.random() * (max - min))};   
            co_bateaux =  place(id, co_bateaux ,rotate ,i);
        }
        while(co_bateaux === false)

        co_bateaux = JSON.stringify(co_bateaux);
        fs.writeFileSync("./bateaux/save_bateaux_"+id+".json",co_bateaux,"UTF-8");
    }
    return co_bateaux; 
}
module.exports = random;