var mainMenuState = {
    create: function(){
        game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;

        bg = this.add.sprite(0,0,"mainBg");
        bg.scale.setTo(1/0.375);
        
        initButtons(gameRef.main.langue,"mainMenu"); //voir initMenu.js 
    }
};