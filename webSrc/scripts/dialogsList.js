// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

var pnjTestDialogs = [];
var testMap2 = new CustomMap("testmap2",["terrain1"],["Calque de Tile 1"],[],"");

var callback1 = function(){
    pnjTest.currentIndex = 1;
    dialogManager.stop(true,false);
    dialogManager.startDialog(pnjTest);
    terrainManager.changeMap(testMap2);
    //debugger;
}

var callback2 = function(){
    pnjTest.currentIndex = 2;
    dialogManager.stop(true,false);
    dialogManager.startDialog(pnjTest);
}


function setDialog(langue){
    switch(langue){
        case 0 : 
            pnjTestDialogs = [["bonjour! je suis un test . tu peux choisir entre un et deux.",["option une","option deux"],[callback1,callback2]],"j'affirme que tu as bien choisi l'option une","j'affirme que tu as bien choisi l'option deux"];
            break; // chaque réplique à question est stockée dans un array. à l'index 0 se trouve la question. à l'index 1, les réponses contenues dans un array. à l'index 2  les callbacks des réponses aussi dans un array.
        case 1: 
            pnjTestDialogs = ["hi! I'm a test. You can choose between one and two. kjfkjshdk hdf jkhsd kjh fskj sdfkjhdkh kjsdfh kjdsfh kjdsh kj fkdhj skjh ksj hhkfsjh ksdfjh kjdhf kjhfskjshf kjsfh kjh fkjhsf kjh fkjh fj fskjh fsdkjh sjh fdsjkh dkjh fjhkdkj fdskjh ","you chose option 1","you chose option 2"];
            break;
                 }
}

