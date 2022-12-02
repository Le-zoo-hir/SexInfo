import Phaser from 'phaser'
import BootScene from '../game/scenes/BootScene.js'
import PlayScene from '../game/scenes/PlayScene.js'

let emitter = null;
function launch(containerId,emitterR) {
  emitter = emitterR

  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 2000,
    height: 1333,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene]
  })
}

export default launch
export { launch, emitter }