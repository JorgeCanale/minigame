let grid = [];
let message = "";
let score = 0;
let steps = 0;
let lastSteps;
let gameState = "playing";
let goal;
const handleInputs = require('./src/input');
const Player = require('./src/player');
const setRandomGoal = require('./src/goal');


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
    

function MapGridInit(width, heigth) {
    let h;
    let w;
    if(heigth !== undefined && heigth > 0 ) {
        h = heigth;
    }else{ 
        h = 9;
    }
    if(width !== undefined && width > 0 ) {
        w = width
    }else{ 
        w = 9;
    }
    for (let i = 0; i < h; i++) {
        let gridLine = [];
        for (let j = 0; j < w; j++) {
            if (i === 0 || i === h - 1) {
                gridLine.push("#");
            } else if (j === 0 || j === w - 1) {
                gridLine.push("#");
            } else {
                gridLine.push("-");
            };
        };
        grid.push(gridLine);
    };
    goal = setRandomGoal(grid, playerOne, playerTwo);
    console.log(goal);
};


function Render() {
    grid.forEach((square, index) => {

        let line = "";
        square.forEach((floor, ind) => {
            if (index === playerOne.y && ind === playerOne.x) {
               line += "A"
            }else if(index === playerTwo.y && ind === playerTwo.x) {
                line += "B"
            }
            else if(index === goal.Y && ind === goal.X){
                line += "G"
            }else{
                line += floor
            }

        })
        console.log(line);
    })
}

function cleanGrid() {
    grid = [];
}

function win(){
    gameState = "win"
    score += Math.floor((100 - steps) * 0.9)
    lastSteps = steps;
    steps = 0;
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

        console.log(`score ${score} | steps: ${steps}\n`)

        Render();
        if(message.length > 0) console.log( `\n\n (${message})`)
    }

        else if(gameState === "win"){
            console.log("GANASTE, FELICIDADES ")
            console.log(`te tomo ${lastSteps} pasos legar a la meta`)
            console.log(`puntaje actual: ${score}`)
            console.log("Presiona alguna tecla de movimiento para iniciar el siguiente nivel")
            gameState = "playing"
    }
    
})


cleanGrid();

MapGridInit(50,30);

Render();
