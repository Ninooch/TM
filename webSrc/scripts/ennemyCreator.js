class Ennemy extends Pnj {
        constructor(data,dialogs){
            super(data.x,data.y,data.key,data.frame,data.name,dialogs);
            this.combatFrame = 8;
            this.faceAnimKey = data.faceAnimation || "animationBase";
            this.attack1 = data.attack1;
            this.attack2 = data.attack2 || undefined;
            this.attack3 = data.attack3 || undefined;
            this.attack4 = data.attack4 || undefined;
            this.msg = "";
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
         this.target;
        if(!battleData.solo){
            let rnd = Math.random();
            this.target = (rnd<.5) ? battleData.player : battleData.helper;
        }
        else{
            this.target = battleData.player;
        }
        if(this.attack2 == undefined){
            this.attack1.tour(this.target);
            this.msg = this.attack1.desc();
        }
        else if(this.attack3 == undefined){
            let rnd = Math.random();
            if(rnd<0.5){
                this.attack1.tour(this.target);
                this.msg = this.attack1.desc();
            }
            else{
                this.attack2.tour(this.target);
                this.msg = this.attack2.desc();
            }

        }
        else if(this.attack4 == undefined){
            let rnd = Math.random();
            if(rnd<0.33){
                this.attack1.tour(this.target);
                this.msg = this.attack1.desc();
            }
            else if(rnd>0.33 && rnd<0.66){
                this.attack2.tour(this.target);
                this.msg = this.attack2.desc();
            }
            else if(rnd>0.66){
                this.attack3.tour(this.target);
                this.msg = this.attack3.desc();
            }
        }
        else{
            let rnd = Math.random();
            if(rnd<0.25){
                this.attack1.tour(this.target);
                this.msg = this.attack1.desc();
            }
            else if( rnd > 0.25 && rnd < 0.5){
                this.attack2.tour(this.target);
                this.msg = this.attack2.desc();
            }
            else if ( rnd> 0.5 && rnd< 0.75){
                this.attack3.tour(this.target);
                this.msg = this.attack2.desc();
            }
            else{
                this.attack4.tour(this.target);
                this.msg = this.attack4.desc();
            }
        }
    }
}
