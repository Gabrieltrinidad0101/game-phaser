class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootloader"})
    }
    preload(){
        this.load.on("complete",_=>{
            this.scene.start("Desert")
        })
        this.load.atlas("player","/src/gameObjects/player/assets/player.png",
        "/src/gameObjects/player/assets/player_atlas.json")
        this.load.json("player_anims","/src/gameObjects/player/assets/player_anim.json")
    }
}

export default Bootloader