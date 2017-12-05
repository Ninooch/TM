function startGame(){
    //alert("pouet")
    //this.game.state.start("battle");
    this.game.state.start("game");
    //destroyButtons("mainMenu");
}

var gameState = {
    create: function(){

        initInput();
        game.physics.startSystem(Phaser.Physics.ARCADE);


        setDialog(gameRef.main.langue);

        createMap1();


        globals.dialogManager = new Dialog();



        globals.terrainManager.initMap(globals.maps.testMap);

        initPlayer(180,150);

        var sparkles = game.add.sprite(250,250,"sparkles");
        sparkles.animations.add("shine",[0,1,2,3,4,5],10);
        sparkles.animations.play("shine",10,true);
        game.camera.flash(0x000000,1000,false,1);

    },
    update: function(){
        updatePlayer();
        globals.terrainManager.update();
    },


};
var pnjTest;
