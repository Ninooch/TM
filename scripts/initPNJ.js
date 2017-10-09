class Pnj extends Phaser.Sprite{ //catchphrse = "", dialogs = objet contenant un array //voir feuille de dialogues
    constructor(x,y,key,frame,name,dialogs,faceAnimKey){ // faire en sorte que ça soit dépendant de la langue
        super(game,x,y,key,frame);
        this.dialogs = dialogs; // sera un array
        this.currentIndex = 0; // sert pour les dialogues // voir feuille de dialogues, exemple : si telle action a été faite, mettre l'index à ... ; ou encore suivant les phases du jeu etc...
        this.bulleIsOnScreen = false;
        this.name = name;
        this.faceAnimation = game.make.sprite(x,y,faceAnimKey,0);

        game.physics.enable(this,Phaser.Physics.ARCADE);
        pnjGroup.add(this);
    }


    createBulle(){ //ça marche
        this.bulleIsOnScreen = true;
        this.bulle = game.add.sprite(this.x + 20,this.y,"bulle");
        this.bulle.anchor.setTo(0.5,1);

        this.catchphrase = game.add.bitmapText(this.x + 20 ,this.y,"candideFont","...",41);
        this.catchphrase.anchor.setTo(0.5,1);
        this.catchphrase.alignIn(this.bulle,Phaser.LEFT_CENTER,-10,5);

        this.waitTriangle = game.add.sprite(this.x,this.y,"dialogTriangle");
        this.waitTriangle.animations.add("waiting",[0,1],4);
        this.waitTriangle.alignIn(this.bulle,Phaser.RIGHT_CENTER,-10,0);
        this.waitTriangle.animations.play("waiting",4,true);
    }

    destroyBulle(){ // ça marche 
        this.bulle.destroy();
        this.catchphrase.destroy();
        this.waitTriangle.destroy();
        this.bulleIsOnScreen = false;
    }

    update(){
        if(checkOverlap(this,player) && !this.bulleIsOnScreen){
            this.createBulle();
        }
        else if (!checkOverlap(this,player) && this.bulleIsOnScreen){
            this.destroyBulle();
        }

        if(this.bulleIsOnScreen && !dialogManager.onscreen){
            if(input.enter.isDown){
                //alert("you typed enter");
                //dialogManager.start();
                dialogManager.startDialog(this);
            }
        }

    }
}

var pnjGroup;

function checkOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA,boundsB);

}

