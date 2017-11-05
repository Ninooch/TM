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


globals.maps.testMap2 = new CustomMap("testmap2",["terrain1"],["Calque de Tile 1"],[],[],"");
globals.warps.toMap2 = new Warp(true,globals.maps.testMap2,200,200,128,0,3,2,"Entrer?");

globals.maps.testMap = new CustomMap("testmap",["terrain1"],["Calque de Tile 1"],[],[globals.warps.toMap2],"");
