function initButtons(langue, where){ //mainMenu , options, choixLangue
    switch(where){
        case "mainMenu":
            switch(langue){
                case 0: //fr
                    playButton = game.add.button(game.world.centerX - 120,200,"boutons",startGame,this,0,1,2); //cf gameState.js
                    optionButton = game.add.button(game.world.centerX-120,260,"boutons",function(){initButtons(langue,"options");},this,3,4,5);
                    //helpButton ?
                    break;
                case 1 : //en
                    playButton = game.add.button(game.world.centerX -120,200,"boutons",startGame,this,6,7,8);
                    optionButton = game.add.button(game.world.centerX-120,260,"boutons",function(){
                        initButtons(langue,"options");
                    },this,3,4,5);
                    break; 
                         }
            break;

        case "options":
            destroyButtons("mainMenu");
            switch(langue){
                case 0 :
                    //alert("options-0");
                    langueButton = game.add.button(game.world.centerX-120,200,"boutons",function(){
                        initButtons(gameRef.main.langue,"choixLangue");
                    },this,15,16,17);
                    backButton = game.add.button(game.world.centerX-120,260,"boutons",function(){
                        initButtons(gameRef.main.langue,"mainMenu");
                    },this,21,22,23);
                    break;
                case 1: 
                    // alert("options-1");
                    langueButton = game.add.button(game.world.centerX-120,200,"boutons",function(){
                        initButtons(gameRef.main.langue,"choixLangue");
                    },this,18,19,20);
                    backButton = game.add.button(game.world.centerX-120,260,"boutons",function(){
                        initButtons(gameRef.main.langue,"mainMenu");
                    },this,24,25,26);
                    break;
                         }
            break;

        case "choixLangue": //add main title buttons //done
            destroyButtons("options"); 
            frButton = game.add.button(game.world.centerX-120,200,"boutons",function(){
                choixLangue(0);
            },this,12,13,14);
            enButton = game.add.button(game.world.centerX-120,260,"boutons",function(){
                choixLangue(1);
            },this,9,10,11); 

            switch(langue){
                case 0:
                    backButton = game.add.button(game.world.centerX-120,320,"boutons",function(){
                        destroyButtons("choixLangue");
                        initButtons(gameRef.main.langue,"options");
                    },this,21,22,23);
                    break;
                case 1:
                    backButton = game.add.button(game.world.centerX-120,320,"boutons",function(){
                        destroyButtons("choixLangue");
                        initButtons(gameRef.main.langue,"options");
                    },this,24,25,26);
                    break;
                         }
            break;
                }
}

function choixLangue(langue){
    switch(langue){
        case 0 :
            gameRef.main.langue = 0;
            destroyButtons("choixLangue");
            initButtons(langue,"options");
            break;
        case 1 :
            gameRef.main.langue = 1;
            destroyButtons("choixLangue");
            initButtons(langue,"options");
            break;
                 }
}


function destroyButtons(where){ //where : mainMenu, options, choixLangue
    switch(where){
        case "mainMenu":
            // alert("destroying mainMenuButtons");
            playButton.destroy();
            optionButton.destroy();
            break;
        case "options":
            //  alert("destroying optionsButtons")
            langueButton.destroy();
            backButton.destroy();
            break;
        case "choixLangue" : 
            frButton.destroy();
            enButton.destroy();
            //alert("destroying choixLangueButtons");
            backButton.destroy();
            break; 
                }
} 

