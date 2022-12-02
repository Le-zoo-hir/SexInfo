import { Scene } from 'phaser'

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
        this.listVirus = [{'name' :"blennorragie", 'velocityX': 17, 'velocityY': 40}, 
            {'name' :"Chlamydiae", 'velocityX': -140, 'velocityY': 17},
            {'name' :"hepatite", 'velocityX': -118, 'velocityY': 11},
            {'name' :"Herpes", 'velocityX': -158, 'velocityY': 171},
            {'name' :"Papillomavirus", 'velocityX': -17, 'velocityY': 14},
            {'name' :"syphilis", 'velocityX': -112, 'velocityY': 20},
            {'name' :"VIH", 'velocityX': -117, 'velocityY': 140}
        ]
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
            var virusObject = this.listVirus[Math.floor(Math.random() * this.listVirus.length)]
            var virus = this.physics.add.sprite(this.cameras.main.width, Math.floor(Math.random() * this.cameras.main.height), virusObject.name, 4)
            virus.setScale(0.3, 0.3).setVelocityX(virusObject.velocityX).setVelocityY(virusObject.velocityY * (Math.random() < 0.5 ? -1 : 1))
            virus.setCollideWorldBounds(true)
            virus.setBounce(1)
            virus.body.onWorldBounds = true;
            this.physics.world.on('worldbounds', function(body){
                if(body.gameObject.x < 100)
                    body.gameObject.destroy()
            },this);
            this.physics.add.overlap(this.player, virus, function (player, virus) {
                console.log("Aie!")
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