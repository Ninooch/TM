var config = {
    width: 800,
    height: 450,
    antialias: false,
    renderer: Phaser.CANVAS  
};

var game = new Phaser.Game(config); //src : https://phaser.io/examples/v2/misc/game-config

//déclaration des variables globales :
//MENU PRINCIPAL :  
//BOUTONS: 
var playButton; 
var optionButton;
var langueButton; 
var frButton;
var enButton;
var backButton;
// création des states du jeu, (son nom, l'objet à référencer)
game.state.add("boot",bootState);
game.state.add("preload",preloadState);
game.state.add("mainMenu",mainMenuState);
game.state.add("game",gameState);


game.state.start("boot");  // src:  http://www.emanueleferonato.com/2014/08/28/phaser-tutorial-understanding-phaser-states/