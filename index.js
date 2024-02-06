export default class ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
    }

    hit() {
        if (this.isSunk() === false) {
            this.hits++
        }
        console.log(this.hits)

        //if player presses box containing ship increase number of hits for that ship
    }

    isSunk() {
        if (this.hits === this.length) {
            return true
        } else {
            return false
        }
        //if no of hits === length of ship then the ship is sunk
    }
}
