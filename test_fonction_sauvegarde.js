const traitement_sauvegarde = require("./m_fonction_sauvegarde.js");
const fs = require("fs");
const rls = require("readline-sync")

const create_test_save = function()
{
    let json_test = 10;
    json_test = JSON.stringify(json_test);
    fs.writeFileSync("./nb_test.json",json_test,"UTF-8");
}

const exe = function(nbBase,nb1,nb2,nb3,nb4)
{
    nbBase = Number(nbBase + nb1);
    nbBase = Number(nbBase - nb2);
    nbBase = Number(nbBase / nb3);
    nbBase = Number(nbBase **nb4);
    return nbBase;
}

//ARRANGE
create_test_save(); 

//ACT
traitement_sauvegarde("./nb_test.json",exe,"2","3","3","4");

//ASSERT
let show = fs.readFileSync("./nb_test.json");
show = JSON.parse(show);
console.log(show);

//DELETE TEST 

try{
    rls.question("check content file :");
    fs.unlinkSync("./nb_test.json");
}
catch(e)
{
    console.log(e);
}
