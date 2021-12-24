import Phaser from 'phaser';

import toggleMetadata from '../ui/toggleMetadata';
import resetLevel from '../ui/resetLevel';
import resetScore from '../ui/resetScore';

class GameOver extends Phaser.Scene {
	constructor() {
		super('GameOver');
	}

	create() {
		this.cameras.main.setBackgroundColor('#000');

		this.add.text(220, 200, 'GAME OVER :(', { color: 'white', fontSize: '48px' });
		this.add.text(100, 400, 'PRESS SPACE TO RESTART', { color: 'white', fontSize: '48px' });

		this.inputs = this.input.keyboard.createCursorKeys();
	}

	update() {
		if (this.inputs.space.isDown) {
			toggleMetadata(true);
			resetLevel();
			resetScore();
			this.scene.start('LevelOne');
		}
	}
}

export default GameOver;
