let grid;
let message = "";;
let steps = 0;
let lastSteps;
let gameState = "playing";
let goal={x:1,y:1};
const handleInputs = require('./src/input');
const Player = require('./src/player');
const setRandomGoal = require('./src/goal');
const {MapGridInit, clearGrid} = require('./src/grid');
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
   gameState = "win"
   goal = setRandomGoal(grid, playerOne, playerTwo); 
}



process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on("data", (key)=>{
    
    if(key == "\u0003") process.exit();
    handleInputs(playerOne, key, grid);
    handleInputs(playerTwo, key, grid)
    if(goal.Y === playerOne.y && goal.X === playerOne.x && gameState === "playing"){
        win();
    }
    if(gameState ==="playing"){

        console.clear();
        Render(grid, goal, playerOne, playerTwo);
        if(message.length > 0) console.log( `\n\n (${message})`)
    }

        else if(gameState === "win"){
            console.log("GANASTE, FELICIDADES ")
            console.log("Presiona alguna tecla de movimiento para iniciar el siguiente nivel")
            gameState = "playing"
    }
    
})


clearGrid();
grid = 	MapGridInit(50,20);
goal = setRandomGoal(grid,playerOne, playerTwo);
Render(grid, goal, playerOne, playerTwo);
