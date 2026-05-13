// defino la clase Player para poder crear mas de un jugador con sus propio set de imputs

class Player{
constructor(x,y,controls){
    this.x = x;
    this.y = y;
    this.id = undefined;
    this.stats = {
    lastStep:0,
    steps: 0,
    score: 0
    };
    this.controls = controls;
};

move(dx,dy, grid){
	console.log('move se ejecuto');
    const newX = this.x + dx;
    const newY = this.y + dy;
    if(grid[newY][newX] === "#"){
    	console.log('chocaste con una pared');
        return {moved: false}
    }
        this.x = newX;
        this.y = newY;
        this.stats.steps++
    console.log('te moviste');
    return {moved: true}
}
}
module.exports = Player;

