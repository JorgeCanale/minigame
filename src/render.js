function Render(incomingGrid, goal, playerOne, playerTwo) {
    incomingGrid.forEach((square, index) => {
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

module.exports = Render;
