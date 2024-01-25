"use strict";

const botC = function(grille,liste_bateaux)
{
    let checkCell = [,];
    let checkNSEW = [[undefined,undefined],[undefined,undefined],[undefined,undefined],[undefined,undefined]];
    let movingToAnotherCell = 0;
    let old_direction = undefined;
    let skip;
    let noMovement = false;
    let stillMoving = 0;
    let choice;

    for(let y = 0; y<grille.length; y++)
    {
        for(let x = 0; x<grille[y].length; x++)
        {
            if(grille[y][x] === true)
            {
                console.log("Case :"+x+","+y);

                for(let bateaux = 0; bateaux< liste_bateaux.length; bateaux++)
                {
                    for(let bateau_cell = 0; bateau_cell<liste_bateaux[bateaux].length; bateau_cell++)
                    {
                        console.log("bateaux :"+bateaux);
                        console.log("cell :"+bateau_cell);
                        console.log("co :"+liste_bateaux[bateaux][bateau_cell].x+","+liste_bateaux[bateaux][bateau_cell].y)

                        if(liste_bateaux[bateaux][bateau_cell].x === y && liste_bateaux[bateaux][bateau_cell].y === x)
                        {
                            console.log("in");
                            console.log("if");

                            for(let count_true = 0; count_true < liste_bateaux[bateaux].length; count_true++)
                            {
                                console.log("4");

                                if(liste_bateaux[bateaux][count_true].state === false) //Passer cette ligne on sait que toute les cases du bateaux ne sont pas coulés.
                                {
                                    console.log("5");
                                    checkCell = [x,y];

                                    while(movingToAnotherCell !== undefined) //tant qu'il y'a une case adjacente en true.
                                    {
                                        
                                            //console.log("in while");
                                    
                                        if(checkCell[1]+1 < 10 && checkCell[1]+1 >= 0) //y+
                                        {
                                            checkNSEW[0][0] = checkCell[0];
                                            checkNSEW[0][1] =  checkCell[1]+1;
                                        }
                                    
                                        if(checkCell[1]-1 < 10 && checkCell[1]-1 >= 0) //y-
                                        {
                                            checkNSEW[1][0] = checkCell[0];
                                            checkNSEW[1][1] =  checkCell[1]-1;
                                        }
                                    
                                        if(checkCell[0]+1 < 10 && checkCell[0]+1 >= 0) //x+
                                        {
                                            checkNSEW[2][0] = checkCell[0]+1;
                                            checkNSEW[2][1] =  checkCell[1];
                                        }
                                    
                                        if(checkCell[0]-1 < 10 && checkCell[0]-1 >= 0) //x-
                                        {
                                            checkNSEW[3][0] = checkCell[0]-1;
                                            checkNSEW[3][1] =  checkCell[1];
                                        }
                                        
                                        for(let direction = 0; direction<4; direction++) // vérification des quatres directions si il y'a un bateau touché autour.
                                        {

                                            if(old_direction !== undefined)
                                            {
                                                if(old_direction === 0)
                                                {
                                                    skip = 1;
                                                }
                                                else if(old_direction === 1)
                                                {
                                                    skip = 0;
                                                }
                                                else if(old_direction === 2)
                                                {
                                                    skip = 3;
                                                }
                                                else if(old_direction === 3)
                                                {
                                                    skip = 2;
                                                }
                                            }

                                            if(grille[checkNSEW[0][0]][checkNSEW[0][1]] === true && grille[checkNSEW[1][0]][checkNSEW[1][1]] === true && grille[checkNSEW[2][0]][checkNSEW[2][1]] === true && grille[checkNSEW[3][0]][checkNSEW[3][1]] === true)
                                            {
                                                direction = skip;
                                                skip = old_direction;
                                                
                                            }

                                            //console.log("here");

                                        
                                            if(checkNSEW[direction][0] === undefined || checkNSEW[direction][1] === undefined)
                                            {
                                                direction++;

                                                if(direction === 4)
                                                {
                                                    break;
                                                }
                                            }
                                            if(old_direction !== undefined && direction === skip)
                                            {
                                            direction++; 
                                            }

                                            //console.log("here 2");

                                            //for(let check_y = 0; check_y < grille.length; check_y++)
                                            //{
                                                //for(let check_x = 0; check_x < grille[check_y].length; check_x++)
                                                //{
                                                    //if(skip === 3)
                                                    //{
                                                    //    break;
                                                    //}


                                                    //console.log("2.5");
                                                    //if(check_x === checkNSEW[direction][0] && check_y === checkNSEW[direction][1] && grille[check_y][check_x] === true) // on trouve une case touché adjacente a celle de départ
                                                    //{
                                                        console.log("2.7");
                                                        for(let check_bateaux = 0; check_bateaux<liste_bateaux.length; check_bateaux++)
                                                        {
                                                            if(direction === 4)
                                                            {
                                                                break;
                                                            }

                                                            for(let check_bateau = 0; check_bateau < liste_bateaux[check_bateaux].length;check_bateau++)
                                                            {
                                                                if(liste_bateaux[check_bateaux][check_bateau].x === checkNSEW[direction][1] && liste_bateaux[check_bateaux][check_bateau].y === checkNSEW[direction][0] && liste_bateaux[check_bateaux][check_bateau].state === true && skip !== direction) // si les coordonnées d'une direction corresponde a une case de bateau et touché  && skip !== direction
                                                                {
                                                                    for(let count_true = 0; count_true < liste_bateaux[check_bateaux].length; count_true++) //avant de changer de case on verifie que cette case appartient à un bateau non coulé.
                                                                    {
                                                                        if(liste_bateaux[check_bateaux][count_true].state === false)
                                                                        {
                                                                            if(stillMoving > 23) //changement de manoeuvre, si on rentre dans cette condition alors on boucle dans le déplacement, dans le bateau de neuf cases et/ou a cause de bateau collé entre eux.
                                                                            {
                                                                                switch(checkNSEW) //choix d'une direction possibles avec les cases
                                                                                {
                                                                                    case checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined && checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined && checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined && checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined && grille[checkNSEW[0][0]][checkNSEW[0][1]] === true && grille[checkNSEW[1][0]][checkNSEW[1][1]] === true && grille[checkNSEW[2][0]][checkNSEW[2][1]] === true && grille[checkNSEW[3][0]][checkNSEW[3][1]] === true : // si vrai c'est la case du centre
                                                                                        choice = [[checkNSEW[0][0]-1,checkNSEW[0][1]+1][checkNSEW[1][0]+1,checkNSEW[1][1]-1][checkNSEW[2][0]+1,checkNSEW[2][1]+1][checkNSEW[3][0]-1,checkNSEW[3][1]-1]];
                                                                                        result = choice[Math.floor(math.random() * 4)];
                                                                                        return result;
                                                                                    
                                                                                    case checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined && grille[checkNSEW[0][0]][checkNSEW[0][1]] === true: // si un tir est possible
                                                                                        switch(checkNSEW)
                                                                                        {
                                                                                            case checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined && grille[checkNSEW[2][0]][checkNSEW[2][1]] === true: // perpendiculaire
                                                                                                if(checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[3][0];
                                                                                                    choice[0][1] = checkNSEW[3][1];
                                                                                                }
                                                                                                if(checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[1][0];
                                                                                                    choice[1][1] = checkNSEW[1][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;

                                                                                            case checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined && grille[checkNSEW[3][0]][checkNSEW[3][1]] === true: // perpendiculaire
                                                                                                if(checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[2][0];
                                                                                                    choice[0][1] = checkNSEW[2][1];
                                                                                                }
                                                                                                if(checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[1][0];
                                                                                                    choice[1][1] = checkNSEW[1][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                        }
                                                                                    
                                                                                    case checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined && grille[checkNSEW[1][0]][checkNSEW[1][1]] === true:
                                                                                        switch(checkNSEW)
                                                                                        {
                                                                                            case checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined && grille[checkNSEW[2][0]][checkNSEW[2][1]] === true:
                                                                                                if(checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[3][0];
                                                                                                    choice[0][1] = checkNSEW[3][1];
                                                                                                }
                                                                                                if(checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[0][0];
                                                                                                    choice[1][1] = checkNSEW[0][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                            
                                                                                            case checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined && grille[checkNSEW[3][0]][checkNSEW[3][1]] === true:
                                                                                                if(checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[3][0];
                                                                                                    choice[0][1] = checkNSEW[3][1];
                                                                                                }
                                                                                                if(checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[0][0];
                                                                                                    choice[1][1] = checkNSEW[0][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                        }
                                                                                    
                                                                                    case checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined && grille[checkNSEW[2][0]][checkNSEW[2][1]] === true:
                                                                                        switch(checkNSEW)
                                                                                        {
                                                                                            case checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined && grille[checkNSEW[0][0]][checkNSEW[0][1]] === true:
                                                                                                if(checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[3][0];
                                                                                                    choice[0][1] = checkNSEW[3][1];
                                                                                                }
                                                                                                if(checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[1][0];
                                                                                                    choice[1][1] = checkNSEW[1][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                            case checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined && grille[checkNSEW[1][0]][checkNSEW[1][1]] === true:
                                                                                                if(checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[3][0];
                                                                                                    choice[0][1] = checkNSEW[3][1];
                                                                                                }
                                                                                                if(checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[0][0];
                                                                                                    choice[1][1] = checkNSEW[0][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                        }
                                                                                    
                                                                                    case checkNSEW[3][0] !== undefined && checkNSEW[3][1] !== undefined && grille[checkNSEW[3][0]][checkNSEW[3][1]] === true:
                                                                                        switch(checkNSEW)
                                                                                        {
                                                                                            case checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined && grille[checkNSEW[0][0]][checkNSEW[0][1]] === true:
                                                                                                if(checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[2][0];
                                                                                                    choice[0][1] = checkNSEW[2][1];
                                                                                                }
                                                                                                if(checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[1][0];
                                                                                                    choice[1][1] = checkNSEW[1][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                            case checkNSEW[1][0] !== undefined && checkNSEW[1][1] !== undefined && grille[checkNSEW[1][0]][checkNSEW[1][1]] === true:
                                                                                                if(checkNSEW[2][0] !== undefined && checkNSEW[2][1] !== undefined)
                                                                                                {
                                                                                                    choice[0][0] = checkNSEW[2][0];
                                                                                                    choice[0][1] = checkNSEW[2][1];
                                                                                                }
                                                                                                if(checkNSEW[0][0] !== undefined && checkNSEW[0][1] !== undefined)
                                                                                                {
                                                                                                    choice[1][0] = checkNSEW[0][0];
                                                                                                    choice[1][1] = checkNSEW[0][1];
                                                                                                }

                                                                                                result = choice[Math.floor(math.random() * 1)];
                                                                                                return result;
                                                                                        }
                                                                                }

                                                                            }

                                                                            console.log("here 3");
                                                                            movingToAnotherCell++;
                                                                            stillMoving++;
                                                                            checkCell = [checkNSEW[direction][0],checkNSEW[direction][1]];
                                                                            old_direction = direction; 
                                                                            break;
                                                                        }
                                                                    }
                                                                
                                                                }
                                                                //else
                                                                //{
                                                                //    movingToAnotherCell = undefined;
                                                                //    noMovement = true;
                                                                //}
                                                            }
                                                        }
                                                    //}
                                                    //else
                                                    //{
                                                    //    movingToAnotherCell = undefined;
                                                    //    noMovement = true;
                                                    //}
                                                //}
                                            //}
                                        }    
                                    
                                        console.log("6");
                                        console.log("Dernière case étudié :"+checkCell);
                                    
                                        if(movingToAnotherCell === 0)
                                        {
                                            let response;
                                            response = checkNSEW[Math.floor(Math.random() *  4)];

                                            if(skip !== undefined)
                                            {
                                                while(response[0] === undefined || response[1] === undefined || response[0] === checkNSEW[skip][0] || response[1] === checkNSEW[skip][1])
                                                {
                                                    response = checkNSEW[Math.floor(Math.random() *  4)]; // expected result : 0 , 1 , 2 , 3
                                                }
                                                return response;
                                            }

                                            else
                                            {
                                                while(response[0] === undefined || response[1] === undefined)
                                                {
                                                    response = checkNSEW[Math.floor(Math.random() *  4)]; // expected result : 0 , 1 , 2 , 3
                                                }
                                                return response;
                                            }

                                        }
                                        movingToAnotherCell = 0;
                                    }
                                }
                            }
                        }
                    }

                }
            }        
        }
    }
    
    console.log("First guess");

    let first_guess = [Math.floor(Math.random() *  10),Math.floor(Math.random() *  10)];
    return first_guess; //math random + chercher a tirer au milieu de la grille pour le premier tir.
};

//le if s'arrete après avoir vérifier si il reste une cases du bateau non touché. 
// doit regarder les cases autour de lui si il y'a déja une cases adjacente en true aussi.
//Check[0] = Nord Check[1] = Sud Check[2] = Est Check[3] West 
//Présence d'une inversion de coordonnées entre le x et y grille et liste_bateaux 


module.exports = botC;