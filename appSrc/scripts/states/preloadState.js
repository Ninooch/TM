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

        //éléments du jeu
        game.load.image("mainBg","assets/sprites/game/main.png");
        game.load.spritesheet("boutons","assets/sprites/game/boutons.png",240,50);
        game.load.bitmapFont("candideFont","assets/fonts/candideFont/candideFont.png","assets/fonts/candideFont/candideFont.fnt"); // src: https://www.joshmorony.com/adding-custom-fonts-to-your-phaser-game/
        game.load.image("bulle","assets/sprites/game/bulle.png");
        game.load.image("dialogBox","assets/sprites/game/dialogBg.png");
        game.load.image("nameBox","assets/sprites/game/nameBg.png");
        game.load.spritesheet("dialogTriangle","assets/sprites/game/dialogTriangle.png",9,9);
        game.load.image("answerBox","assets/sprites/game/answerBg.png");
        game.load.image("selection","assets/sprites/game/selection.png");
        
        //tilemaps
        game.load.tilemap("testmap","assets/maps/test.json",null,Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet("terrain","assets/sprites/tilesets/terrain1.png",32,32);
        
        //joueur 
        game.load.spritesheet("player","assets/sprites/sprite_animations/playerTest.png",35,67);
        
        //pnjs
        game.load.spritesheet("pnjTest","assets/sprites/sprite_animations/pnjTest.png",35,67);
        game.load.spritesheet("martin","assets/sprites/sprite_animations/martinBase.png",35,67)
        game.load.spritesheet("martinFaceAnimation","assets/sprites/faces_animations/martinFaceAnimation.png",110,130);
        
        




    },
    create: function(){

        game.state.start("mainMenu");
    }
};

