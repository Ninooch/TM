class Pnj extends Phaser.Sprite{ //catchphrse = "", dialogs = objet contenant un array //voir feuille de dialogues
    constructor(x,y,key,frame,dialogs){ // faire en sorte que ça soit dépendant de la langue
        super(game,x,y,key,frame);
        this.dialogs = dialogs; // sera un array
        this.currentIndex = 0; // sert pour les dialogues // voir feuille de dialogues, exemple : si telle action a été faite, mettre l'index à ... ; ou encore suivant les phases du jeu etc...
        this.bulleIsOnScreen = false;

        game.physics.enable(this,Phaser.Physics.ARCADE);
        pnjGroup.add(this);
    }


    bulle(){ //ça marche qu'une seule fois...
        this.bulleIsOnScreen = true;
        this.bulle = game.add.sprite(this.x + 20,this.y,"bulle");
        this.bulle.anchor.setTo(0.5,1);
        this.catchphrase = game.add.bitmapText(this.x + 20 ,this.y,"candideFont","...",41);
        this.catchphrase.anchor.setTo(0.5,1);
        this.catchphrase.alignIn(this.bulle,Phaser.LEFT_CENTER,-10,5);
    }
    
    destroyBulle(){ // ça marche qu'une seule fois....
        this.bulle.destroy();
        this.catchphrase.destroy();
        this.bulleIsOnScreen = false;
    }
    
    update(){
        if(checkOverlap(this,player) && !this.bulleIsOnScreen){
            this.bulle();
            if(input.enter.isDown){
                dialog.startDesc();
            }
        }
        else if (!checkOverlap(this,player) && this.bulleIsOnScreen){
             this.destroyBulle();
        }

    }
}

var pnjGroup;

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA,boundsB);

}

