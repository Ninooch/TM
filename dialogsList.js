// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

var pnjTestDialogs = [];
function setDialog(langue){
    switch(langue){
        case 0 : 
            pnjTestDialogs = ["bonjour! je suis un test"];
            break;
        case 1: 
            pnjTestDialogs = ["hi! I'm a test"];
            break;
                 }
}
