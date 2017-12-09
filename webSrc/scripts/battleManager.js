class Battle{
    //faire la dynamique en t par t avec un battleManager ?

    constructor(){
        this.menus = [];
        this.str = "";
        this.txt = [];
        this.first = "";
        this.index = 2;
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
        this.player = game.add.sprite(data.playerX,data.playerY,"player",4);
        if(!data.solo){
            this.helper = game.add.sprite(data.helperX,data.helperY,"player",4);
        }
    }
    startBattlePhi(data){


        //lister les arguments

    }
    listAttack(data){
        //lister les attaques // mettre un argument dans data pour battle phi
        for(let k=1;k<data.attnb;k++){
            this.attackBg = game.add.image(0,0,"attackBg");
            this.attackBg.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-k*30 -k*5 - 10);
        }
        this.attack1 = game.add.bitmapText(0,0,"candideFont",data.attack1.name, 45);
        this.attack1.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-45);

        if(data.attack2 != undefined){
            console.log("aatck2")
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


    }
    startTurn(data){
        if(data.solo){
            var ctx = this;
            this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
            this.txt.push([this.str,function(){ctx.txt = "";console.log("1èreFunction"); globals.dialogManager.stop(false);}]);
            globals.dialogManager.startBattleDesc(this.txt);
        }
        else{
            var ctx = this;
            this.selectArrow = game.add.sprite(data.playerX, data.playerY - 29, "selectArrow");
            this.selectArrow.animations.add("iddle",[0,1,2,3,4],5);
            this.selectArrow.animations.play("iddle",9,true);

            this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
            this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data);}]);
            globals.dialogManager.startBattleDesc(this.txt,{is:false});
            this.first = "player";

            this.chooseCharacter(data);
        }
    }
    chooseCharacter(data){
        var ctx = this;
        input.enter.onDown.removeAll(this);
        input.up.onDown.removeAll(this);
        input.down.onDown.removeAll(this);

        input.up.onDown.addOnce(function(){
            if(this.selectArrow.x == data.helperX){
                this.transitionTween = 	game.add.tween(this.selectArrow).to(
                    {x: data.playerX,y:data.playerY-29},300,Phaser.Easing.Linear.None, true);
                    globals.dialogManager.stop();
                    this.first = "player";
                    this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data);}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                }
            },this);

            input.down.onDown.addOnce(function(){
                if(this.selectArrow.x == data.playerX){
                    this.transitionTween = 	game.add.tween(this.selectArrow).to(
                        {x: data.helperX,y:data.helperY-29},300,Phaser.Easing.Linear.None, true);
                        globals.dialogManager.stop();
                        this.first = "helper";
                        this.str = globals.battleData.text.choosePlayer + globals.battleData.duo.helperName + "?" ;
                        this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data);}]);
                        globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    }
                },this);

                input.enter.onDown.addOnce(function(){
                    input.up.onDown.removeAll(this);
                    input.down.onDown.removeAll(this);
                    globals.dialogManager.stop();
                    this.str = "";
                    this.txt = [];
                    this.selectArrow.destroy();
                    if(this.first == "player"){
                        this.listAttack(globals.battleData.player);
                        this.chooseAction(globals.battleData.player);
                    }
                    else{
                        this.listAttack(globals.battleData.helper);
                        this.chooseAction(globals.battleData.helper);
                    }
                    this.choice = game.add.sprite(400,295,"attackChoice");
                },this);
            }
            chooseAction(data){
                input.enter.onDown.removeAll(this);
                input.up.onDown.removeAll(this);
                input.down.onDown.removeAll(this);

                input.down.onDown.addOnce(function(){
                    if(this.index<data.attnb){
                        this.index++;
                        console.log(this.index);
                        this.choice.y += +35;
                    }
                    this.chooseAction(data);
                },this);

                input.up.onDown.addOnce(function(){
                    if(this.index != 2){
                        this.index--;
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
                var ctx = this;
                switch(this.index){
                    case 2:
                    this.str = globals.battleData.text.chooseItem + data.attack1.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                    case 3:
                    this.str = globals.battleData.text.chooseItem + data.attack2.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                    case 4:
                    this.str = globals.battleData.text.chooseItem + data.attack3.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                    case 5:
                    this.str = globals.battleData.text.chooseItem + data.attack4.name + "?";
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                    break;
                }
            }


        }
