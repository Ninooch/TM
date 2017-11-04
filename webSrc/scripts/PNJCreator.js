class Pnj extends Phaser.Sprite{ //catchphrse = "", dialogs = objet contenant un array //voir feuille de dialogues
    constructor(x,y,key,frame,name,dialogs,faceAnimKey){ // faire en sorte que ça soit dépendant de la langue
        super(game,x,y,key,frame);
        this.dialogs = dialogs; // sera un array
        this.currentIndex = 0; // sert pour les dialogues // voir feuille de dialogues, exemple : si telle action a été faite, mettre l'index à ... ; ou encore suivant les phases du jeu etc...
        this.bulleIsOnScreen = false;
        this.name = name;

        this.faceAnimKey = faceAnimKey;

        this.canBulle = true;

        this.rectangle = new Phaser.Rectangle(x-32,y-32, this.width +64, this.height + 32);

        game.physics.enable(this,Phaser.Physics.ARCADE);
    }

    createFaceAnimation(){
        this.faceAnimation = game.make.sprite(0,0,this.faceAnimKey,0);
        this.faceAnimation.animations.add("blink",[0,1,2,3,4,5,6,21,22,23,24,25,26,27],9);
        this.faceAnimation.animations.add("talk",[7,8,9,10,11,12,13,14,15,16,17,18,19,20],9);

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
        if(this.canBulle){
            if(checkPnjOverlap(this,globals.player) && !this.bulleIsOnScreen){
                // alert("Bulle");
                this.createBulle();
            }
            else if (!checkPnjOverlap(this,globals.player) && this.bulleIsOnScreen){
                this.destroyBulle();
            }

            if(this.bulleIsOnScreen && !globals.dialogManager.onscreen){
                if(input.enter.isDown){
                    //alert("you typed enter");
                    //dialogManager.start();
                    globals.dialogManager.startDialog(this);
                }
            }
        }
    }
}

var pnjGroup;

function checkSpriteOverlap(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA,boundsB);

}

function checkPnjOverlap(pnj,spriteB){
    var boundsA = pnj.rectangle; 
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA,boundsB);
}

