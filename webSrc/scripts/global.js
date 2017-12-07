var globals = {
    player : {},
    maps : {},
    pnjs : {},
    dialogs : {},
    warps : {},
    attacks : {},
    battleData :{}
};

globals.terrainManager = new Terrain();
globals.dialogManager = new Dialog();
globals.battleManager = new Battle();

globals.attacks.cpsDroit = new Attaque("coup droit",20,1);

globals.battleData.solo = {
    solo: true,
    playerY : 100,
    playerX : 600
}
globals.battleData.player = {
    attack1:globals.attacks.cpsDroit,
    attack2:undefined,
    attack3:undefined,
    attack4:undefined,
    attnb:2,
}
globals.battleData.helper = {
    attack1:globals.attacks.cpsDroit,
    attack2:undefined,
    attack3:undefined,
    attack4:undefined,
    attnb:2,
}
globals.battleData.duo = {
    solo : false,
    playerY : 70,
    playerX : 570,
    helperX : 600,
    helperY : 120,
    helperName : "Cacambo", //changer en cours de route ( en fonction du jeu)
}

globals.battleData.text = {
    choosePlayer : "Que doit faire ",
    chooseItem : "Que faire avec ",
    cpsCrtq : "Coups critique !",
    rate : "Mais son attaque a échoué !",
    attaque : "attaque ",
    argumente : "argumente contre ",
} //idée

function createMap1 (){
    globals.maps.testMap2 = new CustomMap("testmap2",["terrain1"],["Calque de Tile 1"],[],[],"");
    globals.warps.toMap2 = new Warp(false,globals.maps.testMap2,200,200,128,0,3,2,"Entrer?");
    globals.pnjs.martin2 = new Ennemy({x:200,y:250,key:"pnjTest",frame:0,health:300,name:"BattleTest"},globals.dialogs.pnjTestDialogs);
    globals.pnjs.martin = new Pnj(90,150,"martin",0,"Choix",globals.dialogs.pnjTestDialogs,"martinFaceAnimation");
    globals.pnjs.pangloss = new Pnj(300,150,"pangloss",0,"Pangloss",globals.dialogs.pangloss,"panglossFaceAnimation");

    globals.maps.testMap = new CustomMap("testmap",["terrain1"],["Calque de Tile 1"],[globals.pnjs.martin,globals.pnjs.pangloss,globals.pnjs.martin2],[globals.warps.toMap2],"");
}
