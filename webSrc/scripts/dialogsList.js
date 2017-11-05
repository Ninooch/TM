// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

var pnjTestDialogs = [];


var callback1 = function(){
    pnjTest.currentIndex = 1;
    globals.dialogManager.stop(true,false);
   // dialogManager.startDialog(pnjTest);
    globals.terrainManager.changeMap(globals.maps.testMap2,600,620);
}

var callback2 = function(){
    pnjTest.currentIndex = 2;
    globals.dialogManager.stop(true,false);
    globals.dialogManager.startDialog(pnjTest);
}


function setDialog(langue){
    switch(langue){
        case 0 :
            pnjTestDialogs = [["bonjour! je suis un test . tu peux choisir entre un et deux.",["nouvelle map","option deux"],[callback1,callback2]],"j'affirme que tu as bien choisi l'option une","j'affirme que tu as bien choisi l'option deux"];
            break; // chaque réplique à question est stockée dans un array. à l'index 0 se trouve la question. à l'index 1, les réponses contenues dans un array. à l'index 2  les callbacks des réponses aussi dans un array.
        case 1:
            pnjTestDialogs = ["hi! I'm a test. You can choose between one and two. kjfkjshdk hdf jkhsd kjh fskj sdfkjhdkh kjsdfh kjdsfh kjdsh kj fkdhj skjh ksj hhkfsjh ksdfjh kjdhf kjhfskjshf kjsfh kjh fkjhsf kjh fkjh fj fskjh fsdkjh sjh fdsjkh dkjh fjhkdkj fdskjh ","you chose option 1","you chose option 2"];
            break;
                 }
}
