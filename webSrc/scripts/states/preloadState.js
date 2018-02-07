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
        game.load.spritesheet("sparkles","assets/sprites/game/sparkles.png",32,32);
        game.load.image("menuBattlebox","assets/sprites/game/battleBg.png");
        game.load.image("attackChoice","assets/sprites/game/attackChoice.png");
        game.load.image("attckActionChoice","assets/sprites/game/attckActionChoice.png");
        game.load.image("battleTxt","assets/sprites/game/battleTxt.png");
        game.load.spritesheet("selectArrow","assets/sprites/game/arrow.png",32,32);
        game.load.image("attackBg","assets/sprites/game/attackBg.png");
        game.load.image("healthbar","assets/sprites/game/healthBar.png");
        game.load.image("health","assets/sprites/game/health.png");
        game.load.spritesheet("healthP2","assets/sprites/game/healthP2.png",11,16);
        game.load.audio("campanella","assets/musiques/paganiniCampanella.mp3");
        //tilemaps
        //game.load.tilemap("testmap","assets/maps/test.json",null,Phaser.Tilemap.TILED_JSON);
        //game.load.tilemap("testmap2","assets/maps/test2.json",null,Phaser.Tilemap.TILED_JSON);
        game.load.spritesheet("terrain1","assets/sprites/tilesets/terrain1.png",32,32);
        game.load.spritesheet("chateau","assets/sprites/tilesets/chateau.png",32,32);
        game.load.tilemap("chateau","assets/maps/ch1/chateau.json",null,Phaser.Tilemap.TILED_JSON);
        game.load.tilemap("bois","assets/maps/ch1/bois.json",null,Phaser.Tilemap.TILED_JSON);


        //joueur
        game.load.spritesheet("player","assets/sprites/sprite_animations/candideSprite.png",35,67);

        //pnjs
        game.load.spritesheet("pnjTest","assets/sprites/sprite_animations/pnjTest.png",35,67);
        game.load.spritesheet("martin","assets/sprites/sprite_animations/martinBase.png",35,67)
        game.load.spritesheet("martinFaceAnimation","assets/sprites/faces_animations/martinFaceAnimation.png",110,130);
        game.load.spritesheet("panglossFaceAnimation","assets/sprites/faces_animations/panglossFaceAnimation.png",110,130);
        game.load.spritesheet("pangloss","assets/sprites/sprite_animations/panglossSprite.png",35,67);
        game.load.spritesheet("animationBase","assets/sprites/faces_animations/base.png",110,130);





    },
    create: function(){
        game.state.start("mainMenu");
    }
};
