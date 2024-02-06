
export default class Gameboard {
    constructor() {
        this.ships = [];
        this.missedAttacks = [];
    }

    placeShip(ship, row, col, isVertical) {
        // Place the ship on the gameboard
        this.ships.push({ ship, row, col, isVertical });
    }

    receiveAttack(row, col) {
        // Process an attack and update the gameboard
        let hit = false;

        for (const shipInfo of this.ships) {
            const { ship, row: shipRow, col: shipCol, isVertical } = shipInfo;

            if (isVertical && row >= shipRow && row < shipRow + ship.length && col === shipCol) {
                // Vertical ship hit
                ship.hit();
                hit = true;
                break;
            } else if (!isVertical && row === shipRow && col >= shipCol && col < shipCol + ship.length) {
                // Horizontal ship hit
                ship.hit();
                hit = true;
                break;
            }
        }

        if (!hit) {
            // Record missed attack
            this.missedAttacks.push({ row, col });
        }

        return hit;
    }

    areAllShipsSunk() {
        // Check if all ships on the gameboard are sunk
        return this.ships.every(({ ship }) => ship.isSunk());
    }
};
