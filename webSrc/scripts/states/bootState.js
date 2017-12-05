var bootState = {
    preload: function(){
        game.load.image("loadBg","assets/sprites/game/mainLoad.png");
        game.load.image("loadBar","assets/sprites/game/loadingBar.png");
    },
    create: function(){
        // alert("booting");
        game.plugins.add(Phaser.Plugin.TilemapPlus);
        this.game.state.start("preload");
    }
};
