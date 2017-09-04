var preloadState = {
    preload: function(){
        loadBg = this.add.sprite(0,0,"loadBg");
        loadBar = this.add.sprite(40,324,"loadBar");
        this.load.setPreloadSprite(loadBar);
        
 
        
    },
    create: function(){
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        loadBg.width = 800;
        loadBg.height = 450;

        loadBar.width = 720;
        loadBar.height = 40;

        game.state.start("mainMenu");
    }

};