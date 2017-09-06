var preloadState = {
    preload: function(){
        //fond 
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        loadBg = this.add.sprite(0,0,"loadBg");
        loadBg.width = 800;
        loadBg.height = 450;
        
        //barre de chargement
        loadBar = this.add.sprite(40,324,"loadBar");
        loadBar.width = 720;
        loadBar.height = 40;
        //this.load.setPreloadSprite(loadBar); // pour render la barre en même temps que les fichiers chargent, expérimental

        //chargements 
        game.load.image("mainBg","assets/sprites/main.png");

    },
    create: function(){

        game.state.start("mainMenu");
    }
};