function initButtons(langue, where){ //mainMenu , options, choixLangue
    switch(where){
        case "mainMenu":
            switch(langue){
                case 0: //fr
                    playButton = game.add.button(game.world.centerX - 120,200,"boutons",myfunction,this,0,1,2);
                    optionButton = game.add.button(game.world.centerX-120,260,"boutons",function(){initButtons(langue,"options");},this,3,4,5);
                    //helpButton ?
                    break;
                case 1 : //en
                    break; 
                         }
            break;

        case "options":
            destroyButtons("mainMenu");
            switch(langue){
                case 0 :
                    alert("options-0");
                    break;
                case 1: 
                    alert("options-1");
                    break;
                         }
            break;
            
        case "choixLangue":
            destroyButtons("options");
            //var frButton = ... 
            //var enButton = ... 
            break;
                }

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

