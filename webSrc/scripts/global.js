var globals = {
    player : {},
    maps : {},
    pnjs : {},
    dialogs : {},
    warps : {},
    attacks : {},
    battleData :{}
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
    argmt1:undefined,
    argmnt2:undefined,
    argmnt3:undefined,
    argmnt4:undefined,
    argmntNb:1,
}
globals.battleData.helper = {
    attack1:globals.attacks.cpsDroit,
    attack2:undefined,
    attack3:undefined,
    attack4:undefined,
    attnb:2,
    argmt1:undefined,
    argmnt2:undefined,
    argmnt3:undefined,
    argmnt4:undefined,
    argmntNb:1,
}
globals.battleData.set = {
    //let variable = (condition) ? valueIfTrue : valueIfFalse;
    solo : false,
    player:globals.player,
    helper:globals.pnjs.martin2 || undefined,
    isPhi : false,
    playerY : (!this.solo) ? 70 : 100,
    playerX : (!this.solo) ? 570 : 600,
    helperX : 600,
    helperY : 120,
    helperName : "Cacambo", //changer en cours de route ( en fonction du jeu)
    singleEnnemy : false,
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
} //idée juste pour noter, le vrai se trouve dans dialoglist.js

function createCh1(){ // crée tous ce qu'il y a d'important ( maps, pnjs , warps), voir les évents.
    globals.pnjs.domestique1 = new Pnj();
}
function createCh2(){

}
