class Ennemy extends Pnj {
    constructor(data,dialogs){
        super(data.x,data.y,data.key,data.frame,data.name,dialogs);
        this.combatFrame = 8;
        this.faceAnimKey = data.faceAnimation || "animationBase";
        this.attaques = [];
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
}
