function initButtons(langue){
    switch(langue){
        case 0:
            playButton = game.add.button(game.world.centerX - 120,200,"boutons",myfunction,this,0,1,2);
            optionButton = game.add.button(game.world.centerX-120,260,"boutons",function(){destroyButtons("mainMenu")},this,3,4,5);
            //helpButton ?
            break;
        case 1:
            break;
                 }
}
/*
function initOptionsButtons(langue){
    destroyButtons("mainMenu");
    switch(langue){
        case 0: 
            // languageButton = game.add.button
            // 
            break;
        case 1: 
            // languageButton = 
            // 
            break;
                 } 
}

function initChoixLangueButtons(langue){
    destroyButtons("options");
    // var FrButton = game.add.button
    //var EnButton = game.add.button 
} 

function choixLangue(langue){
    switch(langue){
        case 0 :
            gameRef.main.langue = 0;
            destroyButtons("choixLangue");
            initOptionsButtons(langue);
            break;
        case 1 :
            gameRef.main.langue = 1;
            destroyButtons("choixLangue");
            initOptionsButtons(langue);
                 }
}
*/

function destroyButtons(where){ //where : mainMenu, options, choixLangue
    switch(where){
        case "mainMenu":
            playButton.destroy();
            alert("destroying");
            optionButton.destroy();
            break;
        case "options":
            //languageButton.destroy();
            break;
        case "choixLangue" : 
            break; 
                }
} 

