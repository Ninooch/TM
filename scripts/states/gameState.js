var gameState = {
    create: function(){
        map = this.game.add.tilemap("testmap");
        map.addTilesetImage("terrain1","terrain");

        fond = map.createLayer("Calque de Tile 1");
        fond.resizeWorld();
    }
};