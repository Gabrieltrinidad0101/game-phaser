import Desert from "./scene/desert/desert.js"
import Bootloader from "./Bootloader.js"
const config = {
    width: window.innerWidth,
    heigh: window.innerHeight,
    type: Phaser.CANVAS,
    backgroundColor: "#00000000",
    physics: {
        default: "arcade"
    },
    scene: [Bootloader,Desert]
}

new Phaser.Game(config)