var bootState = {
    preload: function(){
        game.load.image("loadBg","assets/sprites/mainLoad.png");
        game.load.image("loadBar","assets/sprites/loadingBar.png");
    },
    create: function(){
        // alert("booting");
        this.game.state.start("preload");
    }
};
