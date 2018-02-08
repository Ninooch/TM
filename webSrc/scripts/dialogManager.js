class DialogManager{ // dépend : du pnj, du type de pnj, de s'il y a un choix, du stade du jeu,
// les textes dépendants des choix du joueurs seront directement exprimés par les pnj dans leur configurations, le changement sera surement indiqué par l'index.
// créer une méthode pour les choix --> fait
// méthode pour les pnj simples , avec index,  --> fait
// méthode pour les pnjs plus complexes , gestion des states etc...
// à utiliser également pour les descriptions et interactions avec l'environnement --> à voir

constructor(){
    this.onscreen = false; // sert à ce que la boîte ne s'affiche qu'une seule fois quand elle est appellée avec enter, cf initPNJ.js
}

start(){
    //alert("started");
    globals.player.customProps.canMove = false;
    this.onscreen = true;
    this.dialBox = game.add.image((game.camera.width)/2,(game.camera.height),"dialogBox");
    this.dialBox.fixedToCamera=true;
    this.dialBox.anchor.setTo(0.5,1);

    //affiches le texte
    this.bmpText = game.add.bitmapText(115,255,"candideFont", "", 50);
    //this.bmpText.alignIn(this.dialBox, Phaser.TOP_LEFT, -15, -5);
    this.bmpText.fixedToCamera = true;
    this.bmpText.maxWidth = this.dialBox.width -125;

}

stop(isDialog,canBulle){
    // alert("stopped");
    globals.player.customProps.canMove = true;
    this.onscreen = false;
    this.dialBox.destroy();
    this.bmpText.destroy();
    this.waitTriangle.destroy();
    if(isDialog){
        this.faceAnimation.destroy();
        this.nameHolder.destroy();
        this.namePnj.destroy();
        if(canBulle){
            game.time.events.add(300,function(){ // pour éviter que le dialogue se relance en boucle car toutes les autres conditions pour lancer le dialogues sont remplies
                this.pnj.canBulle = true;
            },this);
        }
    }
}

displayText(texts,index,isDialog,faceAnim,battleDesc){ // le texte est stocké dans un array , isDialog pour gérer les animations,
    if(isDialog){
        //this.bmpText.alignIn(this.dialBox, Phaser.TOP_LEFT, -120, -5);
        this.bmpText.cameraOffset = new Phaser.Point(220,255);
        this.faceAnimation = game.add.existing(faceAnim);//ça ne se crée qu'une seule fois!!
        this.faceAnimation.fixedToCamera = true;
        //alert(this.faceAnimation.exists);
        //this.faceAnimation.alignIn(this.dialBox,Phaser.LEFT_CENTER,0,0);
        this.faceAnimation.cameraOffset = new Phaser.Point(100,285);
        this.faceAnimation.animations.play("talk",9,true);
    }


    if(typeof texts[index] == "string"){
        var textArray = texts[index].split(" "); //sépare le texte par mots
    }
    else {
        var textArray = texts[index][0].split(" ");
        this.texts = texts;
        this.index = index;
    }

    var compteurMots = 0;

    this.bmpText.text = "";

    this.wordTimer = game.time.create();

    this.wordTimer.repeat(100,textArray.length,function(){
        //alert("entré dans la boucle");
        this.bmpText.text += textArray[compteurMots] + " ";

        if(this.bmpText.text.length >= 184){
            this.wait(isDialog,false,false);
            this.wordTimer.pause();
        }
        compteurMots ++;
    },this);
    if(battleDesc != undefined){
        if(battleDesc.is){
            if(battleDesc.callback){
                this.wordTimer.onComplete.add(function(){
                    game.time.events.add(battleDesc.time || 1000,function(){ // pour éviter que le dialogue se relance en boucle car toutes les autres conditions pour lancer le dialogues sont remplies
                        this.stop();
                        texts[index][1]();
                    },this);
                },this);
            }
            else{
                this.wordTimer.onComplete.add(function(){
                    game.time.events.add(battleDesc.time||1000,function(){ // pour éviter que le dialogue se relance en boucle car toutes les autres conditions pour lancer le dialogues sont remplies
                        this.stop();
                    },this);
                },this);
            }
        }
        else{
            this.wordTimer.onComplete.add(function(){
                texts[index][1]();
            },this);
        }
    }
    else{
        if(typeof texts[index] == "string"){
            this.wordTimer.onComplete.add(function(){
                //alert("timer fini");
                this.wait(isDialog,true,null,false);
            },this); //THIS EST IMPORTANT
        }
        else if(texts[index].length == 2 ){
            this.wordTimer.onComplete.add(function(){
                this.wait(isDialog,true,texts[index][1],false);
            },this);
        }
        else{
            this.wordTimer.onComplete.add(function(){
                this.wait(isDialog,false,null,true);
            },this);
        }
    }

    this.wordTimer.start();

}

wait(isDialog,isLast,callback,isQuestion){
    if(isDialog){
        this.faceAnimation.animations.play("blink",9,true);
    }

    this.waitTriangle = game.add.sprite(0,0,"dialogTriangle");
    this.waitTriangle.animations.add("wait",[0,1],4);
    this.waitTriangle.scale.setTo(2);
    this.waitTriangle.alignIn(this.dialBox,Phaser.RIGHT_CENTER,-3,0);
    this.waitTriangle.animations.play("wait",4,true);

    input.enter.onDown.addOnce(function(){ //permet de passer à la feuille de dialogue suivante. lorsqu'on presse sur enter, l'événement ne se produit qu'une fois et se détruit.
    if(!isQuestion){
        if(isLast && callback != null){
            // alert("last");
            //tu dois décider d'arrêter le dialogue
            callback();
        }
        else if(isLast){
            this.stop(isDialog,true);
        }
        else{
            this.resume(isDialog);
        }
    }
    else{
        //alert("isQuestion");
        this.question(this.texts,this.index);
    }
},this); // important de préciser ce "this" sinon celui au dessus ne fonctionne pas!!
}

resume(isDialog){
    //  alert("resumed");
    if(isDialog){
        this.faceAnimation.animations.play("talk",9,true);
    }
    this.waitTriangle.destroy();
    this.bmpText.text = "";
    this.wordTimer.resume();
}
question(texts,index){
    //alert("question");
    this.waitTriangle.destroy();
    this.answerList = [];
    this.answerBoxes = [];

    for(var k=0;k<texts[index][1].length;k++){ // créer une réponse pour chaque possibilité
        var answerBox = game.add.image(0,0,"answerBox");
        answerBox.alignTo(this.dialBox,Phaser.TOP_RIGHT,0,(k*50)+k*1);

        var answer = game.add.bitmapText(0,0,"candideFont",texts[index][1][k],50);
        answer.alignIn(answerBox,Phaser.LEFT_CENTER,-15,-10);

        this.answerList.push(answer);
        this.answerBoxes.push(answerBox);
    }
    this.selectionBox = game.add.sprite(this.answerBoxes[0].x,this.answerBoxes[0].y,"selection");
    this.selection(texts,index);
}

selection(texts,index){
    // alert("selection");
    input.enter.onDown.removeAll(this);
    input.up.onDown.removeAll(this);
    input.down.onDown.removeAll(this);

    var max = this.answerBoxes.length;

    input.up.onDown.addOnce(function(){
        //alert("up");
        if(this.selectionBox.y > this.answerBoxes[max -1].y){
            this.selectionBox.y -=51;
        }
        this.selection(texts,index);
    },this);

    input.down.onDown.addOnce(function(){
        //alert("down");
        if(this.selectionBox.y < this.answerBoxes[0].y){
            this.selectionBox.y +=51;
        }
        this.selection(texts,index);
    },this);

    input.enter.onDown.addOnce(function(){
        //alert("enterSelection");
        input.up.onDown.removeAll(this);
        input.down.onDown.removeAll(this);
        for(let k=0;k<this.answerBoxes.length;k++){
            if(checkSpriteOverlap(this.selectionBox,this.answerBoxes[k])){
                //  alert("la selBox touche la boite " + k);
                texts[index][2][k]();
            }
        }
        for(let d=0;d<this.answerBoxes.length;d++){
            this.answerBoxes[d].destroy();
            this.answerList[d].destroy();
        }
        this.selectionBox.destroy();
    },this);
}

startDialog(pnj){
    this.pnj = pnj;
    pnj.destroyBulle();
    pnj.canBulle = false;
    pnj.createFaceAnimation(); // pour pouvoir utiliser l'animation du pnj avec add.existing

    this.start(); //important de mettre start() avant parce que sinon this.dialbox n'existe pas !!!

    this.nameHolder = game.add.sprite(0,0,"nameBox");
    this.nameHolder.alignTo(this.dialBox,Phaser.TOP_LEFT,0,0);
    this.nameHolder.fixedToCamera = true;
    this.namePnj = game.add.bitmapText(100,225,"candideFont",pnj.name,45);
    //this.namePnj.alignIn(this.nameHolder,Phaser.LEFT_CENTER,0,0);
    this.namePnj.fixedToCamera = true;


    this.displayText(pnj.dialogs,pnj.currentIndex,true,pnj.faceAnimation);
}
startBattleDesc(text,battleDesc){
    this.dialBox = game.add.image(0,0,"battleTxt");
    this.dialBox.fixedToCamera = true;

    this.bmpText = game.add.bitmapText(115,255,"candideFont", "", 55);
    this.bmpText.fixedToCamera = true;
    this.bmpText.cameraOffset = new Phaser.Point(30,5);
    this.displayText(text,0,false,null,battleDesc);
}

endBattleScreen(what){
    this.dialBox = game.add.image(400,180,"dialogBox");
    this.dialBox.anchor.setTo(0.5);
    this.dialBox.alpha = 1;

    let db = this.dialBox;
    let tween = game.add.tween(globals.dialogManager.dialBox).from({alpha:0},500, Phaser.Easing.Linear.None,true,1160);
    tween.onComplete.addOnce(function(){
        this.bmpText = game.add.bitmapText(200,130,"candideFont", "", 50);
        this.bmpText.fixedToCamera = true;
        this.bmpText.maxWidth = this.dialBox.width -125;
        if(what=="victoire"){
            this.dialBox = db;
            var headertxt= game.add.bitmapText(0,0,"candideFont",globals.battleData.text.victoire, 70);
            var txt = [["You won! Congrats",function(){
                game.camera.fade(0x000000,1000,false,1);
                game.camera.onFadeComplete.addOnce(function(){
                    game.state.start("game");
                    game.camera.flash(0x000000,1000);
                },this);}]];
            }
            if(what=="defaite"){
                this.dialBox = db;
                var headertxt = game.add.bitmapText(0,0,"candideFont",globals.battleData.text.defaite,70);
                var txt = [["you lost! TEst TExt",function(){
                    game.camera.fade(0x000000,1000,false,1);
                    game.camera.onFadeComplete.addOnce(function(){
                        game.state.start("game");
                        game.camera.flash(0x000000,1000);
                    },this);
                }]];
            }
            headertxt.alignIn(db, Phaser.TOP_CENTER,0,0);
            this.displayText(txt,0,false);
        },this)
        //mettre du texte X) //argument peut-être
    }
desc(text){
    console.log("activé")
    this.dialBox = game.add.image(400,240,"dialogBox");
    this.dialBox.anchor.setTo(0.5);

    this.bmpText = game.add.bitmapText(115,200,"candideFont", "", 55);
    this.bmpText.fixedToCamera = true;
    //this.bmpText.cameraOffset = new Phaser.Point(30,5);
    this.displayText(text,0,false,null);
}

}
