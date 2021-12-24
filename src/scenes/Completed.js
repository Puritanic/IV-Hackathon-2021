import Phaser from 'phaser';

class GameOver extends Phaser.Scene {
    constructor() {
        super('Completed');
    }

    preload() {
        this.load.image('nesnadjeni', './assets/nesnadjeni.jpg');
    }

    create() {
        this.cameras.main.setBackgroundColor('#000');
        this.add.image(410, 320, 'nesnadjeni')

        this.add.text(180, 10, 'GROWING TOGETHER', { color: 'white', fontSize: '48px' });
    }
}

export default GameOver;
