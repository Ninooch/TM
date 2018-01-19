class Healthbar{
    constructor(x,y,data){
        this.holder = game.add.image(x,y,"healthbar");
        this.health = game.add.image(x+65,y+2,"health");
        this.healthP2 = game.add.sprite(x+54,y+36,"healthP2",0);
        this.healthP2.animations.add("ko",[0,1,2,3,4],6);
        this.currentHealth = data.health;
        this.color(data);
        this.firstScale(data);
    }
    //100 % c'est quand le pnj a l'entièreté de ses points de vie.
    // sinon : ( ptsMax-currentHP / ptsMax )*longeur de la barre, dimensions du rectangle à crop
    color(data){
        if(data.health < data.maxHealth/2){
            if(data.health < data.maxHealth /4 && this.health.tint != globals.colors.red){
                this.health.tint = globals.colors.red;
                this.healthP2.tint = globals.colors.red;
            }
            if(data.health> data.maxHealth/4 && this.health.tint != globals.colors.orange){
                this.health.tint = globals.colors.orange;
                this.healthP2.tint = globals.colors.orange;
            }
        }
        else{
            if(this.health.tint != globals.colors.green){
                this.health.tint = globals.colors.green;
                this.healthP2.tint = globals.colors.green;
            }
        }
    }
    firstScale(data){
        let prct = (data.maxHealth-(data.maxHealth - data.health)) / data.maxHealth;
        this.health.scale.x = prct;
    }
    scale(data){
            let prct = ((data.maxHealth-(data.maxHealth-data.health)) / data.maxHealth );
            console.log(prct)
                console.log(data.health)
            let tween = game.add.tween(this.health.scale).to( {x : prct}, 600, Phaser.Easing.Linear.None,true);
    }
    turn(data){
        this.color(data);
        this.scale(data);
        console.log(data.alive)
        if(data.health== 0 ){
            console.log("0!anima")
            this.healthP2.animations.play("ko",null,false,true);
        }
    }
}
