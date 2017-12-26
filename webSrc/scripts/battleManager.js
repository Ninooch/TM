class Battle{
    //faire la dynamique en t par t avec un battleManager ?
    constructor(){
        this.menus = [];
        this.str = "";
        this.txt = [];
        this.attNb = 0;
        this.attIndex = 2;
        this.tab = [];
        this.turn = {
            player: {name:"candide",ready:false,currentAction:"",alive:true},
            helper : {name:"cacambo",ready:false,currentAction:"",alive:true}, //à voir dans set s'il existe
            ennemy1 : {ready:false,currentAction:"",alive:true},
            ennemy2 : {ready:false,currentAction:"",alive:true}, //pareil
        };
        this.currentPlayer = this.turn.player; //par défaut
        //faire un objet turn avec différentes propriétés. turn on complet c'est quand tout les combattants ont participés (att ou obj)
        // faire en sorte de réutiliser au max les fonctions (améliorer chooseplayer, typiquement )
        // pour qu'un tour soit complet il faut que :
        // - tous les joueurs actifs choisissent une action
        // - tous les ennemis actifs choisissent une action ( aléatoire)
        // - les actions soient jouées (animations + desc. surtout) (ironie dans la desc?)
        // - les propriétés du turn sont remises à zéro.
        //le combat s'arrête quand tous les ennemis ont 0 hp ou que tous les joueurs ont à 0 hp.
    }
    init(){
        //mettre les entités du combat (sprite fixes à animer avec des tweens)
        //de profil

        //créer les menus et leurs interactions
        //inventaire et attaques
        for(let k=0;k<2;k++){
            this.menus.push(game.add.sprite(k*400,250,"menuBattlebox"));
        }
        //TODO mettre le texte en fonction de la langue!!
        this.invText = game.add.bitmapText(0,0,"candideFont", "Inventaire", 50);
        this.invText.alignIn(this.menus[0], Phaser.TOP_CENTER,0,0);
        this.atkText = game.add.bitmapText(0,0,"candideFont", "Attaques",50);
        this.atkText.alignIn(this.menus[1],Phaser.TOP_CENTER,0,0);

        this.initEnnemy(globals.battleData.set);
        this.initFighters(globals.battleData.set);
    }
    initEnnemy(data){
        this.ennemy1 = game.add.sprite(data.ennemy1X,data.ennemy1Y,"player",8);
        if(!data.singleEnnemy){
            this.ennemy2 = game.add.sprite(data.ennemy2X,data.ennemy2Y,"player",8);
        }
    }
    //éventuellement 1vs1 , 1vs2 et 2vs2
    //bataille en 2 étapes d'actions: choisir une option. si attaque : choisir l'ennemi, si objet, choisir le bénéficiaire
    listItems(){
        //mets les objets sous forme de liste déroulante dans le menu 0.
        //lorsqu'on choisit un objet, on peut choisir de lire la description de l'objet ou de l'utiliser.
        //à implémenter quand l'inventaire sera fait.
    }
    initFighters(data){
        //positioner le(s) joueur en fonction de la bataille
        //condidtionner les positions dans un seul objet ?
        this.player = game.add.sprite(data.playerX,data.playerY,"player",4);
        if(!data.solo){
            this.helper = game.add.sprite(data.helperX,data.helperY,"player",4);
        }
    }

    listAttack(data){
        //lister les attaques // mettre un argument dans data pour battle phi
        if(data.isPhi){
            this.attNb = data.argmntNb;
            for(let k=1;k<this.attNb;k++){
                console.log("attckBg")
                this.attackBg = game.add.image(0,0,"attackBg");
                this.attackBg.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-k*30 -k*5 - 10);
            }


            this.attack1 = game.add.bitmapText(0,0,"candideFont",data.argmt1.name, 45);
            this.attack1.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-45);

            if(data.attack2 != undefined){
                this.attack2 = game.add.bitmapText(0,0,"candideFont",data.argmnt2.name, 45);
                this.attack2.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-80);
            }
            if(data.attack3 != undefined){
                this.attack3 = game.add.bitmapText(0,0,"candideFont",data.argmnt3.name, 45);
                this.attack3.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-115);
            }
            if(data.attack4 != undefined){
                this.attack4 = game.add.bitmapText(0,0,"candideFont",data.argmnt4.name, 45);
                this.attack4.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-150);
            }
        }
        else{
            this.attNb = data.attnb;
            for(let k=1;k<this.attNb;k++){
                console.log("attckBg")
                this.attackBg = game.add.image(0,0,"attackBg");
                this.attackBg.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-k*30 -k*5 - 10);
            }

            this.attack1 = game.add.bitmapText(0,0,"candideFont",data.attack1.name, 45);
            this.attack1.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-45);

            if(data.attack2 != undefined){
                this.attack2 = game.add.bitmapText(0,0,"candideFont",data.attack2.name, 45);
                this.attack2.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-80);
            }
            if(data.attack3 != undefined){
                this.attack3 = game.add.bitmapText(0,0,"candideFont",data.attack3.name, 45);
                this.attack3.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-115);
            }
            if(data.attack4 != undefined){
                this.attack4 = game.add.bitmapText(0,0,"candideFont",data.attack4.name, 45);
                this.attack4.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-150);
            }
            this.choice = game.add.sprite(400,295,"attackChoice")
        }
    }
    startTurn(data){
        if(data.solo){
            var ctx = this;
            this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
            this.txt.push([this.str,function(){ctx.str="";ctx.txt = [];ctx.listAttack(globals.battleData.player,data.isPhi);ctx.chooseAction(globals.battleData.player);}]);
            globals.dialogManager.startBattleDesc(this.txt,{is:true,callback:true,time:500});
        }
        else if(!data.solo && !this.turn.player.ready && !this.turn.helper.ready){
            var ctx = this;
            this.selectArrow = game.add.sprite(data.playerX, data.playerY - 29, "selectArrow");
            this.selectArrow.animations.add("iddle",[0,1,2,3,4],5);
            this.selectArrow.animations.play("iddle",9,true);

            this.str = globals.battleData.text.choosePlayer + this.currentPlayer.name + "?" ;
            this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data,"choseHandler");}]);
            globals.dialogManager.startBattleDesc(this.txt,{is:false});
            this.currentPlayer = this.turn.player;
        }
    }
    chooseCharacter(data,action){
        //action : choseHandler , choseReceiver , choseEnnemy (x vs2)
        var ctx = this;
        input.enter.onDown.removeAll(this);
        input.up.onDown.removeAll(this);
        input.down.onDown.removeAll(this);

        input.up.onDown.addOnce(function(){
            if(this.selectArrow.x == data.helperX){
                this.transitionTween = 	game.add.tween(this.selectArrow).to(
                    {x: data.playerX,y:data.playerY-29},300,Phaser.Easing.Linear.None, true);
                    globals.dialogManager.stop();
                    if(action == "choseHandler"){
                        this.currentPlayer = this.turn.player;
                        this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
                        this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data,"choseHandler");}]);
                        globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    }
                    if(action == "choseReceiver"){
                        this.str = globals.battleData.text.use + globals.battleData.text.sur + globals.player.name + "?" ;
                        this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data,"choseReceiver");}]);
                        globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    }
                }
            },this);

            input.down.onDown.addOnce(function(){
                if(this.selectArrow.x == data.playerX){
                    this.transitionTween = 	game.add.tween(this.selectArrow).to(
                        {x: data.helperX,y:data.helperY-29},300,Phaser.Easing.Linear.None, true);
                        globals.dialogManager.stop();
                        if(action == "choseHandler"){
                            this.currentPlayer = this.turn.helper;
                            this.str = globals.battleData.text.choosePlayer + globals.battleData.set.helperName + "?" ;
                            this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data,"choseHandler");}]);
                            globals.dialogManager.startBattleDesc(this.txt,{is:false});
                        }
                        if(action == "choseReceiver"){
                            this.str = globals.battleData.text.use + globals.battleData.text.sur + globals.player.name + "?" ;
                            this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data,"choseReceiver");}]);
                            globals.dialogManager.startBattleDesc(this.txt,{is:false});
                        }
                    }
                },this);

                input.enter.onDown.addOnce(function(){
                    input.up.onDown.removeAll(this);
                    input.down.onDown.removeAll(this);
                    globals.dialogManager.stop();
                    this.str = "";
                    this.txt = [];
                    this.selectArrow.destroy();
                    if(action == "choseHandler"){
                        if(this.currentPlayer == this.turn.player){
                            this.listAttack(globals.battleData.player,data.isPhi);
                            this.chooseAction(globals.battleData.player);
                        }
                        else{
                            this.listAttack(globals.battleData.helper,data.isPhi);
                            this.chooseAction(globals.battleData.helper);
                        }
                    }
                    else if(action == "choseReceiver"){
                        //faire en sorte de retenir le joueur qui sera guéri
                    }
                    else if(action =="choseEnnemy"){
                        //retenir l'ennemi
                    }
                    //this.choice = game.add.sprite(400,295,"attackChoice");
                },this);
            }
            chooseAction(data){
                input.enter.onDown.removeAll(this);
                input.up.onDown.removeAll(this);
                input.down.onDown.removeAll(this);

                input.down.onDown.addOnce(function(){
                    if(this.attIndex<this.attNb){
                        this.attIndex++;
                        this.choice.y += +35;
                    }
                    this.chooseAction(data);
                },this);

                input.up.onDown.addOnce(function(){
                    if(this.attIndex != 2){
                        this.attIndex--;
                        this.choice.y -= 35;
                    }
                    this.chooseAction(data);
                },this);

                input.enter.onDown.addOnce(function(){
                    this.whatToDow(data);
                },this);
            }
            whatToDow(data){
                input.enter.onDown.removeAll(this);
                input.up.onDown.removeAll(this);
                input.down.onDown.removeAll(this);
                this.choice.destroy();
                var ctx = this;
                switch(this.attIndex){
                    case 2:
                    this.currentPlayer.currentAction = data.attack1;
                    this.str = globals.battleData.text.chooseItem + data.attack1.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.infoDesc();}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                    case 3:
                    this.currentPlayer.currentAction = data.attack2;
                    this.str = globals.battleData.text.chooseItem + data.attack2.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                    case 4:
                    this.currentPlayer.currentAction = data.attack3;
                    this.str = globals.battleData.text.chooseItem + data.attack3.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                    case 5:
                    this.currentPlayer.currentAction = data.attack4;
                    this.str = globals.battleData.text.chooseItem + data.attack4.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                }
            }
            infoDesc(){
                var tab = [globals.battleData.text.info,globals.battleData.text.use,globals.battleData.text.retour];
                for(let k=0;k<3;k++){
                    var box = game.add.image(145+k*170,50,"nameBox");
                    this.tab.push(box);

                    var txt = game.add.bitmapText(0,0,"candideFont",tab[k],50);
                    txt.alignIn(box,Phaser.TOP_CENTER,0,5);

                    this.tab.push(txt);
                }
                this.choice = game.add.image(145,50,"attckActionChoice");
                this.indexChoice = 0;
                this.chooseAtckAction();
            }
            chooseAtckAction(){
                console.log(this.indexChoice)
                input.enter.onDown.removeAll(this);
                input.left.onDown.removeAll(this);
                input.right.onDown.removeAll(this);

                input.left.onDown.addOnce(function(){
                    if(this.indexChoice!=0){
                        this.indexChoice --;
                        this.choice.x -= 170;
                    }
                    this.chooseAtckAction();
                },this);

                input.right.onDown.addOnce(function(){
                    if(this.indexChoice < 2){
                        this.indexChoice++;
                        this.choice.x += 170;
                    }
                    this.chooseAtckAction();
                },this);

                input.enter.onDown.addOnce(function(){
                    input.left.onDown.removeAll(this);
                    input.right.onDown.removeAll(this);
                    switch(this.indexChoice){
                        case 0 :
                        // choisir un ennemi avec un texte : sur qui utiliser "...";
                        case 1 :
                        //mettre l'info : faire disparaître les choix et réenclencher la fonction une fois le display terminé
                        case 3:
                        //retour au choix des attaques: faire disparaitre les choix, --> retour au choix d'attaque.
                    }
                },this);
            }
        }
