import Phaser from 'phaser';

import * as levels from './scenes/levels'
import GameOver from './scenes/GameOver';

import './assets/scss/index.scss';

const config = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	pixelArt: true,
	backgroundColor: '#87CEEB',
	parent: 'mario',
	physics: {
		default: 'arcade',
		arcade: {
			// debug: true, // Set it to true if you want debugger enabled by default
			gravity: { y: 600 },
		},
	},
	scene: [
        levels.One,
        levels.Two,
        levels.Three,
        levels.Four,
        levels.Five,
        levels.Six,
        levels.Seven,
        levels.Eight,
        levels.Nine,
        levels.Ten,
        GameOver
    ],
};

export default new Phaser.Game(config);
