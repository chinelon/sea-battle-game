export default class Player{
    constructor(name, gameboard){
        this.name = name;
        this.gameboard = gameboard;
    }

    attackEnemy(enemyGameboard, row, col){
        return enemyGameboard.receiveAttack(row, col)
    }

    computerRandomPlay(enemyGameboard) {
        let row, col;

        do {
            // Generate random coordinates
            row = Math.floor(Math.random() * enemyGameboard.gridSize);
            col = Math.floor(Math.random() * enemyGameboard.gridSize);
        } while (enemyGameboard.missedAttacks.some(coord => coord.row === row && coord.col === col));

        return enemyGameboard.receiveAttack(row, col);
    }
}
