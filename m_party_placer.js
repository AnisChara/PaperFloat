"use strict"

const fs = require("fs");

const party_placer = function(id)
{   
    let list_party = JSON.parse(fs.readFileSync("./party.json"));// on prend la liste des parties en cours
    let adverse;
    let place;

    for (let i = 0; i< list_party.length; i++)//on balaye la liste
    {   
        if (list_party[i].player1 === id)// Lors de la deuxieme tentative le joueur est deja placé on vérifie si quelqu'un est arrivé entre temps
        {
            adverse = list_party[i].player2;
            return adverse;
        }
        else if (list_party[i].player2 === id)
        {
            adverse = list_party[i].player1;
            return adverse;
        }
        else if (list_party[i].player1 && !list_party[i].player2)//POV du 2eme joeuur; il se place si il ya de la place
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
        for (let i = 0; i< list_party.length; i++)//verifie une partie vide 
        {
            if (!list_party[i].player1)
            {
                list_party[i].player1 = id;
                place= true;
            }
        }
        if (place !== true)// il crée sa partie
        {
            list_party.push({ "player1" : id , "player2" : ""});
        }
    }

list_party = JSON.stringify(list_party);
fs.writeFileSync("./party.json", list_party, "UTF-8");   

}
module.exports = party_placer