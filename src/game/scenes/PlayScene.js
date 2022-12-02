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
        this.listVirus = ["blennorragie", "Chlamydiae", "hepatite", "Herpes", "Papillomavirus", "syphilis", "VIH"]
    }

    create () {
        const x = this.cameras.main.width / 2
        const y = this.cameras.main.height / 2 
        const sky = this.add.image(x, y, 'sky')

        this.cursors = this.input.keyboard.createCursorKeys()
        Gamepad.self = this

        this.player = this.physics.add.sprite(this.cameras.main.width / 6, this.cameras.main.height / 2, 'space_ship', 4)
        this.player.setScale(0.3, 0.3)
        this.player.setCollideWorldBounds(true)
        this.timerEvent = this.time.addEvent({ delay: this.spawnCooldown, repeat: 1 })

        this.enemies = this.add.group();
        this.enemies.enableBody = true;

    }

    update () {

        this.physics.collide(this.player, this.enemies, touchingEnemies);

        if(this.timerEvent.elapsed == this.spawnCooldown){
            var virus = this.enemies.create(this.cameras.main.width, Math.floor(Math.random() * this.cameras.main.height), 
                    this.listVirus[Math.floor(Math.random() * this.listVirus.length)], 4)
                virus.setScale(0.2, 0.2)
                //virus.setCollideWorldBounds(true)
                /*const collisionHappened = (virus, this.player) => {
                    projectile.destroy()
                }*/
                //virus.body.onWorldBounds = true
                //virus.setBounce(1)
                //virus.setVelocity(200.20)
                //this.physics.add.collider(virus, cats, collisionHappened, null, this)
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

function touchingEnemies(player, enemy)
{
    player.destroy()
}