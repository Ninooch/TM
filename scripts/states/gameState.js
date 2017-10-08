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
        game.physics.startSystem(Phaser.Physics.ARCADE);

        map = this.game.add.tilemap("testmap");
        map.addTilesetImage("terrain1","terrain");

        fond = map.createLayer("Calque de Tile 1");
        fond.resizeWorld();

        pnjTest = new Pnj(90,150,"pnjTest",0,pnjTestDialogs);
        this.game.add.existing(pnjTest); // ok c'est important donc feuille de pnj sur un autre script et appeler en fonction des besoins.
        dialog = new Dialog();



        initPlayer(180,150);



    },
    update: function(){
        updatePlayer();

    }
};
var pnjTest;