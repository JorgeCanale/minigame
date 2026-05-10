

function setRandomGoal (grid, playerOne, playerTwo){
	let Y = 0;
	let X = 0;
	do{
	Y = Math.floor(Math.random() * (grid.length - 2)) + 1;
        X = Math.floor(Math.random() * (grid[0].length - 2)) + 1;
		}while(
		(X === playerOne.x && Y === playerOne.y) || 
		(playerTwo.x === X && playerTwo.y === Y)
		)
	return {Y, X};
	}

module.exports = setRandomGoal;

