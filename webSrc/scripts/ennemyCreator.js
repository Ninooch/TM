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
        startCombat(){ //functionne et c'est super cool! //rajouter des trucs
        game.camera.fade(0x000000,1000,false,1);
        game.camera.onFadeComplete.addOnce(function(){
            this.game.state.start("battle");
            game.camera.flash(0x000000,1000);
        },this);
    }
    turn(battleData){ //voir si ça marche et améliorer pour les batailles phi
        if(!battleData.solo){
            let rnd = Math.random();
            if(rnd<0.5){
                var target = battleData.player;
            }
            else{
                var target = battleData.helper;
            }
        }
        else{
            var target = battleData.player;
        }

        if(this.attack2 == undefined){
            this.attack1.turn(target);
        }
        else if(this.attack3 == undefined){
            let rnd = Math.random();
            if(rnd<0.5){
                this.attack1.tour(target);
            }
            else{
                this.attack2.tour(target);
            }

        }
        else if(this.attack4 == undefined){
            let rnd = Math.random();
            if(rnd<0.33){
                this.attack1.tour(target);
            }
            else if(rnd>0.33 && rnd<0.66){
                this.attack2.tour(target);
            }
            else if(rnd>0.66){
                this.attack3.tour(target);
            }
        }
        else{
            let rnd = Math.random();
            if(rnd<0.25){
                this.attack1.tour(target);
            }
            else if( rnd > 0.25 && rnd < 0.5){
                this.attack2.tour(target);
            }
            else if ( rnd> 0.5 && rnd< 0.75){
                this.attack3.tour(target);
            }
            else{
                this.attack4.tour(target);
            }
        }
    }
}
