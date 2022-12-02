import { Scene } from 'phaser'
import { emitter } from '../game'

export default class PlayScene extends Scene {

    static self

    constructor () {
        super({ key: 'PlayScene' })

        this.player
        this.speed = 350
        this.spawnCooldown = 2000
        this.canMove = true
        this.cursors
        this.timerEvent
        this.listVirus = ["blennorragie", "Chlamydiae", "hepatite", "Herpes", "Papillomavirus", "syphilis", "VIH"]
        this.blood_cell_2
        this.translationRight = true
    }

    create () {
        const x = this.cameras.main.width / 2
        const y = this.cameras.main.height / 2 
        const back_red = this.add.image(x, y, 'back_red')
        this.blood_cell_2 = this.physics.add.sprite(x, y, 'blood_cell_2')
        this.blood_cell_2.setScale(3, 3)
        this.blood_cell_2.setVelocityX(10)

        this.cursors = this.input.keyboard.createCursorKeys()
        Gamepad.self = this

        this.player = this.physics.add.sprite(this.cameras.main.width / 6, this.cameras.main.height / 2, 'space_ship', 4)
        this.player.setScale(0.3, 0.3)
        this.player.setCollideWorldBounds(true)
        this.timerEvent = this.time.addEvent({ delay: this.spawnCooldown, repeat: 1 })
    }

    update () {
        if(this.timerEvent.elapsed == this.spawnCooldown){
            if(this.translationRight) {
                this.translationRight = false
                this.blood_cell_2.setVelocityX(-10)
            }
            else {
                this.translationRight = true
                this.blood_cell_2.setVelocityX(10)
            }
            var virus = this.physics.add.sprite(this.cameras.main.width, Math.floor(Math.random() * this.cameras.main.height), 
                this.listVirus[Math.floor(Math.random() * this.listVirus.length)], 4)
            
            virus.setScale(0.2, 0.2).setAccelerationX(-8).setAccelerationY(-10)
            virus.setCollideWorldBounds(true)
            virus.body.onWorldBounds = true
            virus.setBounce(1)
            virus.setVelocity(200.20)
            this.physics.add.collider(this.player, virus, function (player, virus) {
                emitter.emit('finish', true);
            });
        
            this.timerEvent = this.time.addEvent({ delay: this.spawnCooldown, repeat: 1 })
        }
        let playerAsMove = false

        if (this.player!=null){
            
            if (this.cursors.left.isDown)
            {
                this.player.setVelocityX(-this.speed);
                playerAsMove = true
            }
            else if (this.cursors.right.isDown)
            {
                this.player.setVelocityX(this.speed);
                playerAsMove = true
            }
            else {
                this.player.setVelocityX(0);
            }

            if (this.cursors.up.isDown)
            {
                this.player.setVelocityY(-this.speed);
                playerAsMove = true
            }
            else if (this.cursors.down.isDown)
            {
                this.player.setVelocityY(this.speed);
                playerAsMove = true
            }
            else
            {
                this.player.setVelocityY(0);
            }         
        } 

    }
}