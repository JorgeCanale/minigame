function handleInputs(player,key ,grid){
    const actions = {
        [player.controls.up]: ()=> player.move(0, -1, grid),
        [player.controls.down]: ()=> player.move(0, 1, grid),
        [player.controls.left]: ()=> player.move(-1, 0, grid),
        [player.controls.right]: ()=> player.move(1, 0, grid)
    };

    if(actions[key]){
        actions[key]?.()
    }
}
module.exports = handleInputs;
