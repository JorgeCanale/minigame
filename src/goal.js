

function setRandomGoal (grid, playerOne, playerTwo){
	let y = 0;
	let x = 0;
	do{
	y = Math.floor(Math.random() * (grid.length - 2)) + 1;
        x = Math.floor(Math.random() * (grid[0].length - 2)) + 1;
		}while(
		(x === playerOne.x && y === playerOne.y) || 
		(playerTwo.x === x && playerTwo.y === y)
		)
	return {y,x};
	}


module.exports = setRandomGoal;

