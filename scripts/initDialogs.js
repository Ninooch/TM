class Dialog{ // dépend : du pnj, du type de pnj, de s'il y a un choix, du stade du jeu, des choix déjà fait du joueurs et de l'index du dialogs qui est un array.
    // les textes dépendants des choix du joueurs seront directement exprimés par les pnj dans leur configurations, le changement sera surement indiqué par l'index.
    // créer une méthode pour les choix
    // méthode pour les pnj simples , avec index,
    // méthode pour les pnjs plus complexes , gestion des states etc... 
    // à utiliser également pour les descriptions et interactions avec l'environnement 
    constructor(){
        this.onscreen = false; // sert à ce que la boîte ne s'affiche qu'une seule fois quand elle est appellée avec enter, cf initPNJ.js 
        this.waitTriangle = game.make.sprite(0,0,"dialogTriangle");
        this.waitTriangle.animations.add("wait",[0,1],4);
    }

    start(){
        //ajoute la boîte de dialogue sur l'écran
        player.customProps.canMove = false;
        this.onscreen = true;
        this.dialBox = game.add.image((game.camera.width)/2,(game.camera.height),"dialogBox");
        this.dialBox.anchor.setTo(0.5,1);

        //affiches le texte
        this.bmpText = game.add.bitmapText(0,0,"candideFont", "", 50);
        this.bmpText.alignIn(this.dialBox, Phaser.TOP_LEFT, -120, -5);
        this.bmpText.maxWidth = this.dialBox.width -125;

    } // dépendant de l'objet à inspecter (?) 

    stop(){
        player.customProps.canMove = true;
        this.onscreen = false;
        this.dialBox.destroy();
    }

    displayText(texts,index,isDialog,faceAnim){ // le texte est stocké dans un array , isDialog pour gérer les animations,
        if(isDialog){
            this.faceAnimation = game.add.existing(faceAnim);
            this.faceAnimation.alignIn(this.dialBox,Phaser.LEFT_CENTER,0,0);
            this.faceAnimation.animations.play("talk",9,true);
        }

        var textArray = texts[index].split(" "); //sépare le texte par mots
        var compteurMots = 0;

        this.bmpText.text = "";

        this.wordTimer = game.time.create();

        this.wordTimer.repeat(100,textArray.length,function(){
            //alert("entré dans la boucle");
            this.bmpText.text += textArray[compteurMots] + " ";

            if(this.bmpText.text.length >= 184){
                this.wait();
                this.wordTimer.pause();
            }
            compteurMots ++;
        },this);

        this.wordTimer.start();

    } 

    wait(isDialog){
        if(isDialog){
            this.faceAnimation.animations.play("blink",9,true);
        }
        game.add.existing(this.waitTriangle);
        this.waitTriangle.scale.setTo(2);
        this.waitTriangle.alignIn(this.dialBox,Phaser.RIGHT_CENTER,-3,0);
        this.waitTriangle.animations.play("wait",4,true);

    }

    startDialog(pnj){
        pnj.destroyBulle();
        pnj.canBulle = false;
        this.start();
        this.displayText(pnj.dialogs,pnj.currentIndex,true,pnj.faceAnimation);
        //gérer les animations
    }

    startDialogSpe(pnjSpe,state,index){
        pnjSpe.destroyBulle();
        this.displayText(pnjSpe.state.dialogs,pnjSpe.currentIndex,true);
    }

    stopDialog(){
    } // à utiliser pour dialog et dialog spe



}

var dialogManager;