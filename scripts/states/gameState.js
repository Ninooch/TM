var gameState = {
    create: function(){
        initInput();
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        map = this.game.add.tilemap("testmap");
        map.addTilesetImage("terrain1","terrain");

        fond = map.createLayer("Calque de Tile 1");
        fond.resizeWorld();
        
        pnjTest = new Pnj(this,30,150,"pnjTest",0,"coucouTEst",["bonjour je suis un test!! youhou!!"]);
        initPlayer(70,150);
        
        
    },
    update: function(){
        updatePlayer();
    }
};
var pnjTest;