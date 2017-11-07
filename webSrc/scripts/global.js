var globals = {
    player : {},
    maps : {},
    pnjs : {},
    dialCallback : {},
    dialogs : {},
    warps : {},
};

globals.terrainManager = new Terrain();
globals.dialogManager = new Dialog();


function createMap1 (){
    globals.maps.testMap2 = new CustomMap("testmap2",["terrain1"],["Calque de Tile 1"],[],[],"");
    globals.warps.toMap2 = new Warp(false,globals.maps.testMap2,200,200,128,0,3,2,"Entrer?");
    globals.pnjs.martin = new Pnj(90,150,"martin",0,"Choix",globals.dialogs.pnjTestDialogs,"martinFaceAnimation");

    globals.maps.testMap = new CustomMap("testmap",["terrain1"],["Calque de Tile 1"],[globals.pnjs.martin],[globals.warps.toMap2],"");

}
