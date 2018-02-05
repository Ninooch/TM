var globals = {
    player : {},
    maps : {},
    pnjs : {},
    dialogs : {},
    warps : {},
    attacks : {},
    battleData :{},
    music : {},
};
globals.terrainManager = new TerrainManager();
globals.dialogManager = new DialogManager();
globals.battleManager = new BattleManager();

globals.attacks.cpsDroit = new Attaque("coup droit",20,1);
globals.attacks.cpsCote = new Attaque("coup de côté",25,1);

globals.battleData.player = { //meilleure idée pour traduction : faire des méthodes avec les arguments étant les joueurs etc..
    attack1:globals.attacks.cpsDroit,
    attack2:globals.attacks.cpsCote,
    attack3:globals.attacks.cpsDroit,
    attack4:undefined,
    attnb:4, //nb d'attaques plus 1
    arg1:undefined,
    arg2:undefined,
    arg3:undefined,
    arg4:undefined,
    argNb:1,
}
globals.battleData.helper = {
    attack1:globals.attacks.cpsDroit,
    attack2:undefined,
    attack3:undefined,
    attack4:undefined,
    attnb:2,
    arg1:undefined,
    arg2:undefined,
    arg3:undefined,
    arg4:undefined,
    argNb:1,
}


globals.battleData.set = {
    //let variable = (condition) ? valueIfTrue : valueIfFalse;
    solo : true,
    player:globals.player,
    helper:"",
    isPhi : false,
    playerY : (!this.solo) ? 70 : 100,
    playerX : (!this.solo) ? 540 : 600,
    helperX : 570,
    helperY : 120,
    helperName : "Cacambo", //changer en cours de route ( en fonction du jeu)
    singleEnnemy : false,
    ennemy1 : "",
    ennemy2 : "",
    ennemy1X :(this.singleEnnemy) ? 200 : 230,
    ennemy1Y :(this.singleEnnemy) ? 100 : 70,
    ennemy2X :200,
    ennemy2Y :120,
}

globals.battleData.text = {
    choosePlayer : "Que doit faire ",
    chooseItem : "Que faire avec ",
    cpsCrtq : "Coups critique !",
    rate : "Mais son attaque a échoué !",
    attaque : "attaque ",
    use : "utiliser ",
    useOn : "Quel ennemi attaquer ?",
    sur : "sur ",
    info : "info ",
    retour: "retour ",
    argumente : "argumente contre ",
}; //idée juste pour noter, le vrai se trouve dans dialoglist.js

globals.colors = {
    green: 0x66ff66,
    orange : 0xffd11a,
    red : 0xff1a1a,
};

globals.functions.intro = function(){
    game.camera.fade(0x000000,1000,false,1);
    game.camera.onFadeComplete.addOnce(function(){
        globals.dialogManager.desc(["test ahsbkjdbf en westphalie"]);
    },this);
}

function createMap1 (){
    // globals.maps.testMap2 = new CustomMap("testmap2",["terrain1"],["Calque de Tile 1"],"");
    // globals.warps.toMap2 = new Warp(false,globals.maps.testMap2,200,200,128,0,3,2,"Entrer?");
     globals.pnjs.martin2 = new Ennemy({x:200,y:250,key:"pnjTest",frame:0,health:50,name:"Ennemy1",attack1:globals.attacks.cpsCote},globals.dialogs.pnjTestDialogs);
    // globals.pnjs.martin = new Pnj(90,150,"martin",0,"Choix",globals.dialogs.pnjTestDialogs,"martinFaceAnimation");
    // globals.pnjs.pangloss = new Pnj(300,150,"pangloss",0,"Pangloss",globals.dialogs.pangloss,"panglossFaceAnimation");
    // globals.maps.testMap = new CustomMap("testmap",["terrain1"],["Calque de Tile 1"],"");
    // globals.maps.testMap.addPnjs(globals.pnjs.pangloss);
    // globals.maps.testMap.addWarps(globals.warps.toMap2);
     globals.pnjs.martin3 = new Ennemy({x:200,y:250,key:"martin",frame:0,health:100,name:"Ennemy2",attack1:globals.attacks.cpsCote},globals.dialogs.pnjTestDialogs);

    globals.maps.chateau = new CustomMap("chateau",["terrain1"],["Calque de Tile 1"]);
    globals.maps.bois = new CustomMap("bois",["terrain1"],["Calque de Tile 1"]);
    globals.warps.toBois = new Warp(false,globals.maps.bois,32,32,globals.maps.chateau.properties.warp4X*32,globals.maps.chateau.properties.warp4Y*32,1,3);
    globals.pnjs.domestique1 = new Pnj(globals.maps.chateau.properties.pnj1X,globals.maps.chateau.properties.pnj1Y,"pnjTest",0,"Domestique",globals.dialogs.pnj1Ch1);
    globals.maps.chateau.addPnjs(globals.pnjs.domestique1);
    globals.maps.chateau.addWarps(globals.warps.toBois);
    globals.pnjs.pangloss = new Pnj(globals.maps.chateau.properties.pnj2X,globals.maps.chateau.properties.pnj2Y,"pangloss",0,"Pangloss",globals.dialogs.pangloss,"panglossFaceAnimation");
    globals.maps.chateau.addPnjs(globals.pnjs.pangloss);
    globals.maps.chateau.addPnjs(globals.pnjs.martin2);

    globals.music.campanella = game.add.audio("campanella");
}
