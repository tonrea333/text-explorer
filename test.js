const prompt = require('prompt-sync')({sigint: true});

let directionofTravel = prompt("Would you like to move \"right\", \"left\",\"up\"or\"down\"?")



const directionRight = "right"
const directionLeft = "left"
const directionUp = "up"
const directionDown = "down"

const stopProgram = "done"

 let x = 0
 
 let y = 0
 





while (directionofTravel !== "done"){
   
    

    if (directionofTravel == 'up'){
        x=x+1 
        console.log(x,y)
       directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
       console.log(directionofTravel)
    }   
    else if (directionofTravel === 'down'){
        x=x-1
        console.log(x,y)
        directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
    }    
    else if (directionofTravel === "right"){
        y=y+1
        console.log (x,y)
        directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
    }
    else if (directionofTravel === "left"){
        y=y-1
        console.log (x,y)
        directionofTravel = prompt("Would you like to move \"right\", \"left\",\"done\"\"up\"or\"down\"?");
    }
    else if (directionofTravel === "done"){
        console.log("Your final destination is", x,y)
    } 
    
}