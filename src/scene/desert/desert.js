import Player from "../../gameObjects/player/player.js"
class Desert extends Phaser.Scene{
    constructor(){
        super({key: "Desert"})
    }

    preload(){
        this.load.image("desertPNG","/src/scene/desert/assets/spritesheetDesert.png")
        this.load.tilemapTiledJSON("desertJSON","/src/scene/desert/assets/desert.json")
        this.load.image("background","/src/scene/desert/assets/BG.png")
    }
    create(){
        //background
        const {width,height} = this.sys.game.config
        this.background = this.add.image(0,0,"background")
        this.background2 = this.add.image(0,0,"background")
        this.background.setScrollFactor(0,0)
        this.background2.setScrollFactor(0,0)
        
        this.background.displayHeight = height
        this.background.y = height/2
        this.background.x = this.background.width/2
        if(this.background.width <= window.innerWidth){
            this.background2.y = height/2
            this.background2.x = this.background.width/2 + window.innerWidth - (window.innerWidth - this.background.width)
            this.background2.width = 200
        }else{
            this.background2.destroy()
        }

        const map = this.make.tilemap({key: "desertJSON",tileWidth:128,tileHeight:128})
        const tileset = map.addTilesetImage("world","desertPNG")
        const world = map.createLayer("desert",tileset,0,0)
        const actus = map.createLayer("actus",tileset,0,0)
        const finish = map.createLayer("finish",tileset,0,0)

        this.physics.world.setBoundsCollision(true);
        this.player = new Player(this,300,500,"player")


        this.physics.add.collider(this.player,world)
        this.physics.add.collider(this.player,actus,_=>this.scene.restart(),null,this)
        this.physics.add.collider(this.player,finish,_=>this.scene.restart(),null,this)
        world.setCollisionBetween(12,29)
        world.setCollisionBetween(9,11)
        world.setCollisionBetween(10,13)
        world.setCollisionBetween(1,12)
        world.setCollision(18)

        actus.setCollisionBetween(425,426)
        actus.setCollisionBetween(425,426)

        finish.setCollisionBetween(41,42)
        finish.setCollisionBetween(49,50)

        this.cameras.main.setBounds(0, 0, 10000, 600);
        this.cameras.main.startFollow(this.player)
    }
    update(){
        this.player.moves()
    }
}
export default Desert