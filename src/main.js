import Phaser from 'phaser';

import HelloWorldScene from './scenes/HelloWorldScene';
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
	scene: [HelloWorldScene, GameOver],
};

export default new Phaser.Game(config);
