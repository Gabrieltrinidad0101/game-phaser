class Player extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,type){
        super(scene,x,y,type)
        this.scene = scene
        this.scene.add.existing(this)
        
        //transforms
        this.setScale(.5)
        
        //methods
        this.setPhysics()
        this.animation()

        //property
        this.cursos = this.scene.input.keyboard.createCursorKeys();
        this.speedX = 300
    }
    
    setPhysics(){
        this.scene.physics.world.enable(this)
        this.body.immovable = true;
        this.body.setGravityY(500)
        this.scene.physics.world.setBoundsCollision(false,false,true,true);
        console.log(this.body)
    }

    moves(){
        if(this.cursos.left.isDown){
            this.body.setVelocityX(-this.speedX)
            this.flipX = true
            this.anims.play("run",true)
        }else if(this.cursos.right.isDown){
            this.body.setVelocityX(this.speedX)
            this.flipX = false
            this.anims.play("run",true)
        }else if(this.body.onFloor()){
            this.body.setVelocityX(0)
            this.anims.play("idle",true)
        }
        if(this.cursos.up.isDown && this.body.onFloor()){
            this.body.setVelocityY(-500)
            this.anims.play("jump",true)
        }
    }

    lostLive(){
        setTimeout(_=>{
            console.log("1")
        },1000)
    }

    animation(){
        this.dataAnim = this.scene.cache.json.get("player_anims")
        this.scene.anims.fromJSON(this.dataAnim)
    }
}

export default Player