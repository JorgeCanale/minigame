// defino la clase Player para poder crear mas de un jugador con sus propio set de imputs

class Player{
constructor(x,y,controls){
    this.x = x;
    this.y = y;
    this.stats = {
    step: 0,
    score: 0
    };
    this.controls = controls;
};

move(dx,dy, grid){
    const newX = this.x + dx;
    const newY = this.y + dy;
    if(grid[newY][newX] === "#"){

        return {moved: false}
    }
        this.x = newX;
        this.y = newY;
        this.stats.steps++
    

    return {moved: true}
}
}
module.exports = Player;

