var preloadState = {
    preload: function(){
        //fond 
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        loadBg = this.add.sprite(0,0,"loadBg");
        loadBg.scale.setTo(1/0.375);
        
        //barre de chargement
        loadBar = this.add.sprite(40,324,"loadBar");
        loadBar.scale.setTo(1/0.375);
        this.load.setPreloadSprite(loadBar); // pour render la barre en même temps que les fichiers chargent, expérimental

        //chargements 
        game.load.image("mainBg","assets/sprites/game/main.png");
        game.load.spritesheet("boutons","assets/sprites/game/boutons.png",240,50);
        

    },
    create: function(){

        game.state.start("mainMenu");
    }
};

function myfunction(){
    alert("pouet");
    //destroyButtons("mainMenu");
}