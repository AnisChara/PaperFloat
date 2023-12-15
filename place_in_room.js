"use strict";

const fs = require("fs");

const place_in_room = function(JSON_File,ID_Player1,ID_Player2)
{
    try{
            let room_file = fs.readFileSync(JSON_File);
            room_file = JSON.parse(room_file);

            let room_number = room_file.length;
            room_file[room_number] = ({"PLayer1" : ID_Player1 , "Player2" : ID_Player2});

            room_file = JSON.stringify(room_file);
            fs.writeFileSync("./List_room.json",room_file,"UTF-8");
        }
    catch(e){
                let list_room = [];
                list_room = JSON.stringify(list_room);
                fs.writeFileSync("./List_room.json",list_room,"UTF-8");
                console.log("Création du fichier : ./List_room.json");
                place_in_room("./List_room.json",joueur1,joueur2);
                
            }
}




