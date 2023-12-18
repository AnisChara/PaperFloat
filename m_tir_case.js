"use strict";
//recuperer les modules 
let save = require(".\m_fonction_sauvegarde.js");
let serveur = require(".\index.js");
let grid = require(".\req_grid.js")
const url = require("url");
const http = require("http");
const { isUndefined } = require("util");

const tir_case = function(serveur)
{
    if (query === isUndefined)
    {
    }
    else
    {
        let co = query.bouton;
        let coord = co.split("/");
        for(let i = 0; i<10;i++)
        {
            for(let j = 0; j<10;j++)
            {
                if(i===coord[1] && j===coord[2]&& coord[3]=== false)
                {
                    state = true;
                }
            }
        }
    }
}

module.exports = tir_case;