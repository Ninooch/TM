class Battle{
    //faire la dynamique en t par t avec un battleManager ?

    constructor(){
        this.menus = [];
        this.str = "";
        this.txt = [];
        this.first = "";
        this.attNb = 0;
        this.attIndex = 2;
        this.turn = {};

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

    listAttack(data,isPhi){
        //lister les attaques // mettre un argument dans data pour battle phi
        if(isPhi){
            this.attNb = data.argmntNb;
            for(let k=1;k<this.attNb;k++){
                this.attackBg = game.add.image(0,0,"attackBg");
                this.attackBg.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-k*30 -k*5 - 10);
            }
            this.attack1 = game.add.bitmapText(0,0,"candideFont",data.argmt1.name, 45);
            this.attack1.alignIn(this.menus[1],Phaser.TOP_CENTER,0,-45);

            if(data.attack2 != undefined){
                console.log("aatck2")
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
            this.choice = game.add.sprite(400,295,"attackChoice")
        }
    }
    startTurn(data,isPhi){
        if(data.solo){
            var ctx = this;
            this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
            this.txt.push([this.str,function(){ctx.str="";ctx.txt = [];ctx.listAttack(globals.battleData.player,isPhi);ctx.chooseAction(globals.battleData.player);}]);
            globals.dialogManager.startBattleDesc(this.txt,{is:true,callback:true,time:500});
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
        }
    }
    chooseCharacter(data,action){
        var ctx = this;
        input.enter.onDown.removeAll(this);
        input.up.onDown.removeAll(this);
        input.down.onDown.removeAll(this);

        input.up.onDown.addOnce(function(){
            if(this.selectArrow.x == data.helperX){
                this.transitionTween = 	game.add.tween(this.selectArrow).to(
                    {x: data.playerX,y:data.playerY-29},300,Phaser.Easing.Linear.None, true);
                globals.dialogManager.stop();
                if(action == "att"){
                    this.first = "player";
                    this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data);}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                }
                if(action == "obj"){
                    this.first = "player";
                    this.str = globals.battleData.text.choosePlayer + globals.player.name + "?" ;
                    this.txt.push([this.str,function(){ctx.str= ""; ctx.txt = [];ctx.chooseCharacter(data);}]);
                    globals.dialogManager.startBattleDesc(this.txt,{is:false});
                }
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
                this.listAttack(globals.battleData.player,isPhi);
                this.chooseAction(globals.battleData.player);
            }
            else{
                this.listAttack(globals.battleData.helper,isPhi);
                this.chooseAction(globals.battleData.helper);
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
        var ctx = this;
        switch(this.attIndex){
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
