class Ennemy extends Pnj {
    constructor(data,dialogs){
        super(data.x,data.y,data.key,data.frame,data.name,dialogs);
        this.combatFrame = 8;
        this.faceAnimKey = data.faceAnimation || "animationBase";
        this.attack1 = data.attack1;
        this.attack2 = data.attack2 || undefined;
        this.attack3 = data.attack3 || undefined;
        this.attakc4 = data.attack4 || undefined;
        this.health = data.health;
        this.maxHealth = data.health;
    }
    startCombat(){ //functionne et c'est super cool!
        game.camera.fade(0x000000,1000,false,1);
        game.camera.onFadeComplete.addOnce(function(){
            this.game.state.start("battle");
            game.camera.flash(0x000000,1000);
        },this);
    }
    turn(battleData){
        if(!battleData.solo){
            var rnd = Math.random();
        }
        if(this.attack2 == undefined){

        }
        else if(this.attack3 == undefined){

        }
        else if(this.attack4 == undefined){

        }
        else{

        }
    }
}
