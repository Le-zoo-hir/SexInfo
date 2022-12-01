import { Scene } from 'phaser'

export default class PlayScene extends Scene {

    static self

    constructor () {
        super({ key: 'PlayScene' })

        this.player
        this.canMove = true
        this.cursors
    }

    create () {
        const x = this.cameras.main.width / 2;
        const y = this.cameras.main.height / 2 
        const sky = this.add.image(x, y, 'sky')

        this.cursors = this.input.keyboard.createCursorKeys();
        Gamepad.self = this;

        this.player = this.physics.add.sprite(150, 450, 'bomb', 4);
        this.player.setCollideWorldBounds(true);

    }

    update () {
        let playerAsMove = false

        if (this.player!=null){
            
            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-160);
                this.player.anims.play('left', true);
                playerAsMove = true
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(160);
                this.player.anims.play('right', true);
                playerAsMove = true
            }
            else if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(160);
                this.player.anims.play('right', true);
                playerAsMove = true
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(-160);
                this.player.anims.play('right', true);
                playerAsMove = true
            }
            else
            {
                this.player.setVelocityX(0);
                this.player.anims.play('turn');
            }

            if (playerAsMove)
                this.tryMovePlayer()              
        } 

    }
}