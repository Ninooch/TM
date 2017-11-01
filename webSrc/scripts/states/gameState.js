function startGame(){
    //alert("pouet");
    setDialog(gameRef.main.langue);
    this.game.state.start("game");
    //destroyButtons("mainMenu");
}


var gameState = {
    create: function(){
        pnjGroup = game.add.group();
        initInput();
        terrainManager.initGroup();
        game.physics.startSystem(Phaser.Physics.ARCADE);

        //map = this.game.add.tilemap("testmap");
        //map.addTilesetImage("terrain1","terrain");
        /*
        fond = map.createLayer("Calque de Tile 1");
        fond.resizeWorld();
        */
        
        pnjTest = new Pnj(90,150,"martin",0,"Choix",pnjTestDialogs,"martinFaceAnimation");
        pnjTest2 = new Pnj(300,150,"pnjTest",0,"Dialogue",["Bonjour je suis un test. je parle blah blah blah.Exindeque ad petit agens Galli Domitiani Armeniam Mesopotamiam altiora iam artissime conpertis an ad militares lapsus scripta Mesopotamiam diebus per Antiochiae exindeque susceperint a per susceperint a retractus protectores Apollinaris militares Apollinaris Domitiani Galli exindeque exindeque Caesaris Constantinopolim Consta meditantis qui Antiochiae Armeniam conpertis a gestis a militares conpertis Mesopotamiam militares a Galli Galli ante Apollinaris artissime palatii gestis scripta paulo Domitiani paulo meditantis per Apollinaris gener Galli Domitiani missus a militares minorem agens immodice artissime per scrutabatur quaedam per scripta an petit per susceperint per tenebatur agens agens Armeniam protectores protectores Domitiani tenebatur ad meditantis ad quaedam scripta Domitiani."],"martinFaceAnimation");

        terrainManager.initMap("testmap","terrain","terrain1",["Calque de Tile 1"],[pnjTest,pnjTest2]);
      


        //this.game.add.existing(pnjTest); // ok c'est important donc feuille de pnj sur un autre script et appeler en fonction des besoins.
        //this.game.add.existing(pnjTest2);
        dialogManager = new Dialog();
        
        var sparkles = game.add.sprite(250,250,"sparkles");
        sparkles.animations.add("shine",[0,1,2,3,4,5],10);
        sparkles.animations.play("shine",10,true);



        initPlayer(180,150);

  
        terrainManager.fade(true);

    },
    update: function(){
        updatePlayer();

    }
};
var pnjTest;