let game = {
players:[],
enemies:{},
grid:[],
state:"playing",
coreboard:{},
message:"",
goal:{x: 1, y: 1},
}
const handleInputs = require('./src/input');
const Player = require('./src/player');
const setRandomGoal = require('./src/goal');
const {MapGridInit} = require('./src/grid');
const Render = require('./src/render');



const playerOne = new Player(15,15, {    
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd'});

const playerTwo = new Player(16,16,{
    up: '\u001B[A',   
    down: '\u001B[B',
    left: '\u001B[D',
    right: '\u001B[C'})



function win(){
   game.state = "win"
   game.goal = setRandomGoal(game.grid, playerOne, playerTwo); 
}



process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (key)=>{
    
    if(key == "\u0003") process.exit();
    handleInputs(playerOne, key, game.grid);
    handleInputs(playerTwo, key, game.grid);
    if(game.goal.y === playerOne.y && game.goal.x === playerOne.x && game.state === "playing"){
        win();
    }
    if(game.state ==="playing"){

        console.clear();
        Render(game.grid, game.goal, playerOne, playerTwo);
        if(game.message.length > 0) console.log( `\n\n (${game.message})`)
    }

        else if(game.state === "win"){
            console.log("GANASTE, FELICIDADES ");
            console.log("Presiona alguna tecla de movimiento para iniciar el siguiente nivel");
            game.state = "playing";
    }
    
})


game.grid = MapGridInit(50,20);
game.goal = setRandomGoal(game.grid,playerOne, playerTwo);
Render(game.grid, game.goal, playerOne, playerTwo);

