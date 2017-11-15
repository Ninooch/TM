var battleState = {
    create : function(){
        createMap1();
        //mettre le fond image tileimage ? en attendant mp 2
        globals.terrainManager;
        globals.maps.testMap2;

        globals.terrainManager.initMap(globals.maps.testMap2);
        //mettre les entités du combat (sprite fixes à animer avec des tweens)
        //de profil

        //créer les menus et leurs interactions
        for(let k=0;k<3;k++){
            game.add.sprite(25+k*250,250,"menuBattlebox");
        }
        //1ere colonne = combattants
        //2ème colonne = actions
        //3ème colonne = ennemis
        //ou voir l'ordre différent ?
        //faire la dynamique en t par t



    }
}
