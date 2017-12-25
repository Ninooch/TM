var battleState = {
    create : function(){
        createMap1();
        //mettre le fond image tileimage ? en attendant mp 2
        globals.terrainManager.initMap(globals.maps.testMap2);
        globals.battleManager.init();
        globals.battleManager.startTurn(globals.battleData.set);


    }
}
