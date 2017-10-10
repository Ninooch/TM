// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

var pnjTestDialogs = [];
function setDialog(langue){
    switch(langue){
        case 0 : 
            pnjTestDialogs = [["bonjour! je suis un test . tu peux choisir entre un et deux.",["option une","option deux"],["callback1","callback2"]],"j'affirme que tu as bien choisi l'option 1","j'affirme que tu as bien choisi l'option 2"];
            break; // chaque réplique à question est stockée dans un array. à l'index 0 se trouve la question. à l'index 1, les réponses contenues dans un array. à l'index 2  les callbacks des réponses aussi dans un array.
        case 1: 
            pnjTestDialogs = ["hi! I'm a test. You can choose between one and two. ","you chose option 1","you chose option 2"];
            break;
                 }
}
