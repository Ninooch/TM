var mainMenuState = {
    create: function(){
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        bg = this.add.sprite(0,0,"mainBg");
        bg.width = 800;
        bg.height = 450;
        
        initButtons(gameRef.main.langue,"mainMenu"); //voir initMenu.js 
    }
};