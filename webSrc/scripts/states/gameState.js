function startGame(){
    //alert("pouet");
    setDialog(gameRef.main.langue);
    this.game.state.start("game");
    //destroyButtons("mainMenu");
}


var gameState = {
    create: function(){
        initInput();
        globals.terrainManager.initGroup();
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //map = this.game.add.tilemap("testmap");
        //map.addTilesetImage("terrain1","terrain");
        /*
        fond = map.createLayer("Calque de Tile 1");
        fond.resizeWorld();
        */

        pnjTest = new Pnj(90,150,"martin",0,"Choix",pnjTestDialogs,"martinFaceAnimation");
        pnjTest2 = new Pnj(300,150,"pnjTest",0,"Dialogue",["Bonjour je suis un test. je parle blah blah blah.Exindeque ad petit agens Galli Domitiani Armeniam Mesopotamiam altiora iam artissime conpertis an ad militares lapsus scripta Mesopotamiam diebus per Antiochiae exindeque susceperint a per susceperint a retractus protectores Apollinaris militares Apollinaris Domitiani Galli exindeque exindeque Cae."],"martinFaceAnimation");

        var testMap = new CustomMap("testmap",["terrain1"],["Calque de Tile 1"],[pnjTest,pnjTest2],"");
        // var testMap2 = new CustomMap("testmap2",["terrain1"],["Calque de Tile 1"],[pnjTest2],"");

        globals.terrainManager.initMap(testMap);



        //this.game.add.existing(pnjTest); // ok c'est important donc feuille de pnj sur un autre script et appeler en fonction des besoins.
        //this.game.add.existing(pnjTest2);
        globals.dialogManager = new Dialog();

        var sparkles = game.add.sprite(250,250,"sparkles");
        sparkles.animations.add("shine",[0,1,2,3,4,5],10);
        sparkles.animations.play("shine",10,true);



        initPlayer(180,150);


        globals.terrainManager.fade(true,true,false);

    },
    update: function(){
        updatePlayer();

    }
};
var pnjTest;