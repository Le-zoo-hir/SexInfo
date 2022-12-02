import { Scene } from 'phaser'
import sky from '../assets/sky.png'
import space_ship from '../assets/space_ship.png'

//virus
import blennorragie from '../assets/blennorragie.png'
import Chlamydiae from '../assets/Chlamydiae.png'
import hepatite from '../assets/hepatite.png'
import Herpes from '../assets/Herpes.png'
import Papillomavirus from '../assets/Papillomavirus.png'
import syphilis from '../assets/syphilis.png'
import VIH from '../assets/VIH.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('space_ship', space_ship)

    this.load.image('blennorragie', blennorragie)
    this.load.image('Chlamydiae', Chlamydiae)
    this.load.image('hepatite', hepatite)
    this.load.image('Herpes', Herpes)
    this.load.image('Papillomavirus', Papillomavirus)
    this.load.image('syphilis', syphilis)
    this.load.image('VIH', VIH)
  }

  create () {
    this.scene.start('PlayScene')
  }
}