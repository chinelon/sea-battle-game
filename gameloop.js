import Player from "./player";
import Gameboard from "./gameboard";
import ship from ".";



const player = new Player()
const gameboard = new Gameboard()
const ship = new ship()

const gameboardUI = document.getElementById('gameboard')
gameboardUI.innerHTML = `
<h2>BattleSHip<h2>
`
