const prompt = require('prompt-sync')({sigint: true});


const infoChar =prompt("Welcome to color room. Your start location is 0,0")
const infoChar1 =prompt("Your goal is to reach exit as your move through rooms if color.")

let directionofTravel = prompt("Would you like to move \"right\", \"left\",\"up\"or\"down\"?")



const directionRight = "right"
const directionLeft = "left"
const directionUp = "up"
const directionDown = "down"

const stopProgram = "done"



 let x = 0
 
 let y = 0
 





while ( !(x == -4 && y == 4)){
   
    

    if (directionofTravel == 'up'){
        x=x+1 
        console.log(x,y)
        
        if (x == 2 && y == -2){
        console.log("You reached blue room.")
        }
        else if (x == 2 && y == -4){
            console.log("You reached yellow room.")
            }
            else if (x == 4 && y == -4){
                console.log("You reached violet room.")
                }
                else if (x == 2 && y == -4){
                    console.log("You reached red room.")
                    }
                    else if (x == 4 && y == 2){
                        console.log("You reached orange room.")
                        }
                        else if (x == 4 && y == 4){
                            console.log("You reached pink room.")
                            }
                            else if (x == 2 && y == 4){
                                console.log("You reached brown room.")
                                }
                                else if (x == 2 && y == 2){
                                    console.log("You reached black room.")
                                    }
                                    else if (x == -2 && y == 2){
                                        console.log("You reached cyan room.")
                                        }
                                        else if (x == -4 && y == 2){
                                            console.log("You reached tan room.")
                                            }
                                            else if (x == -4 && y == 4){
                                                console.log("You reached final room.")
                                                console.log("The colorless room, good job.")
                                                console.log("Press return to end.")
                                                }
                                                else if (x == -2 && y == 4){
                                                    console.log("You reached magenta room.")
                                                    }
                                                    else if (x == -4 && y == -2){
                                                        console.log("You reached white room.")
                                                        }
                                                        else if (x == -4 && y == -4){
                                                            console.log("You reached Home room.")
                                                            }
                                                            else if (x == -2 && y == -4){
                                                                console.log("You reached gray room.")
                                                                }
                                                                else if (x == -2 && y == -2){
                                                                    console.log("You reached green room.")
                                                                    }
       directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
       console.log(directionofTravel)
    } 
     
    else if (directionofTravel === 'down'){
        x=x-1
        console.log(x,y)
        if (x == 2 && y == -2){
            console.log("You reached blue room.")
            }
            else if (x == 2 && y == -4){
                console.log("You reached yellow room.")
                }
                else if (x == 4 && y == -4){
                    console.log("You reached violet room.")
                    }
                    else if (x == 2 && y == -4){
                        console.log("You reached red room.")
                        }
                        else if (x == 4 && y == 2){
                            console.log("You reached orange room.")
                            }
                            else if (x == 4 && y == 4){
                                console.log("You reached pink room.")
                                }
                                else if (x == 2 && y == 4){
                                    console.log("You reached brown room.")
                                    }
                                    else if (x == 2 && y == 2){
                                        console.log("You reached black room.")
                                        }
                                        else if (x == -2 && y == 2){
                                            console.log("You reached cyan room.")
                                            }
                                            else if (x == -4 && y == 2){
                                                console.log("You reached tan room.")
                                                }
                                                else if (x == -4 && y == 4){
                                                    console.log("You reached exit room.")
                                                    console.log("The colorless room, good job.")
                                                    console.log("Press return to end.")
                                                    }
                                                    else if (x == -2 && y == 4){
                                                        console.log("You reached magenta room.")
                                                        }
                                                        else if (x == -4 && y == -2){
                                                            console.log("You reached white room.")
                                                            }
                                                            else if (x == -4 && y == -4){
                                                                console.log("You reached Home room.")
                                                                }
                                                                else if (x == -2 && y == -4){
                                                                    console.log("You reached gray room.")
                                                                    }
                                                                    else if (x == -2 && y == -2){
                                                                        console.log("You reached green room.")
                                                                        }
        directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
    }    
    else if (directionofTravel === "right"){
        y=y+1
        console.log (x,y)
        if (x == 2 && y == -2){
            console.log("You reached blue room.")
            }
            else if (x == 2 && y == -4){
                console.log("You reached yellow room.")
                }
                else if (x == 4 && y == -4){
                    console.log("You reached violet room.")
                    }
                    else if (x == 2 && y == -4){
                        console.log("You reached red room.")
                        }
                        else if (x == 4 && y == 2){
                            console.log("You reached orange room.")
                            }
                            else if (x == 4 && y == 4){
                                console.log("You reached pink room.")
                                }
                                else if (x == 2 && y == 4){
                                    console.log("You reached brown room.")
                                    }
                                    else if (x == 2 && y == 2){
                                        console.log("You reached black room.")
                                        }
                                        else if (x == -2 && y == 2){
                                            console.log("You reached cyan room.")
                                            }
                                            else if (x == -4 && y == 2){
                                                console.log("You reached tan room.")
                                                }
                                                else if (x == -4 && y == 4){
                                                    console.log("You reached exit room.")
                                                    console.log("The colorless room, good job.")
                                                    console.log("Press return to end.")
                                                    }
                                                    else if (x == -2 && y == 4){
                                                        console.log("You reached magenta room.")
                                                        }
                                                        else if (x == -4 && y == -2){
                                                            console.log("You reached white room.")
                                                            }
                                                            else if (x == -4 && y == -4){
                                                                console.log("You reached Home room.")
                                                                }
                                                                else if (x == -2 && y == -4){
                                                                    console.log("You reached gray room.")
                                                                    }
                                                                    else if (x == -2 && y == -2){
                                                                        console.log("You reached green room.")
                                                                        }
        directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
    }
    else if (directionofTravel === "left"){
        y=y-1
        console.log (x,y)
        if (x == 2 && y == -2){
            console.log("You reached blue room.")
            }
            else if (x == 2 && y == -4){
                console.log("You reached yellow room.")
                }
                else if (x == 4 && y == -4){
                    console.log("You reached violet room.")
                    }
                    else if (x == 2 && y == -4){
                        console.log("You reached red room.")
                        }
                        else if (x == 4 && y == 2){
                            console.log("You reached orange room.")
                            }
                            else if (x == 4 && y == 4){
                                console.log("You reached pink room.")
                                }
                                else if (x == 2 && y == 4){
                                    console.log("You reached brown room.")
                                    }
                                    else if (x == 2 && y == 2){
                                        console.log("You reached black room.")
                                        }
                                        else if (x == -2 && y == 2){
                                            console.log("You reached cyan room.")
                                            }
                                            else if (x == -4 && y == 2){
                                                console.log("You reached tan room.")
                                                }
                                                else if (x == -4 && y == 4){
                                                    console.log("You reached exit room.")
                                                    console.log("The colorless room, good job.")
                                                    console.log("Press return to end.")
                                                    }
                                                    else if (x == -2 && y == 4){
                                                        console.log("You reached magenta room.")
                                                        }
                                                        else if (x == -4 && y == -2){
                                                            console.log("You reached white room.")
                                                            }
                                                            else if (x == -4 && y == -4){
                                                                console.log("You reached Home room.")
                                                                }
                                                                else if (x == -2 && y == -4){
                                                                    console.log("You reached gray room.")
                                                                    }
                                                                    else if (x == -2 && y == -2){
                                                                        console.log("You reached green room.")
                                                                        }
        directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
    }
    else if (directionofTravel === "done"){
        console.log("Your final destination is", x,y)
    } 
    
}