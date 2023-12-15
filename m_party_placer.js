"use strict"

const fs = require("fs");
const verif_all_place = require("./m_verif_all_place");

const party_placer = function(id)
{   
    let list_party = JSON.parse(fs.readFileSync("./party.json"));
    let adverse;
    let place;

    for (let i = 0; i< list_party.length; i++)
    {
        if (list_party[i].player1 && !list_party[i].player2)
        {
            list_party[i].player2 = id;
            adverse = list_party[i].player1;
            break;
        }
        else if (list_party[i].player2 && !list_party[i].player1)
        {
            list_party[i].player1 = id;
            adverse = list_party[i].player2;
            break;
        }
    }
    if (adverse)
    {
        list_party = JSON.stringify(list_party);
        fs.writeFileSync("./party.json", list_party, "UTF-8");  
        return adverse;
    }
    else if (!adverse)
    {
        for (let i = 0; i< list_party.length; i++)
        {
            if (!list_party[i].player1)
            {
                list_party[i].player1 = id;
                place= true;
                break;
            }
        }
        if (place !== true)
        {
            list_party.push({ "player1" : id , "player2" : ""});
        }
    }

list_party = JSON.stringify(list_party);
fs.writeFileSync("./party.json", list_party, "UTF-8");   

}
module.exports = party_placer