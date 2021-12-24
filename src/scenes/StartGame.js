import Phaser from 'phaser';
import toggleMetadata from '../ui/toggleMetadata';

class StartGame extends Phaser.Scene {
    constructor() {
        super({ active: true, key: 'StartGame' });
    }

    preload() {
        this.load.image('logo-ivko', './assets/logo-ivko.png');
    }

    create() {
        this.add.image(380, 250, 'logo-ivko').setScale(0.2, 0.2);
        this.add.text(100, 500, 'PRESS SPACE TO START', { color: 'black', fontSize: '48px' });

        this.inputs = this.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.inputs.space.isDown) {
            toggleMetadata(true);
            this.scene.start('LevelOne');
        }
    }
}

export default StartGame;
