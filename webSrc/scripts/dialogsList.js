// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

globals.dialogs.pnjTestDialogs = [];


var callback1 = function(){
    globals.pnjs.martin.currentIndex = 1;
    globals.dialogManager.stop(true,false);
   // dialogManager.startDialog(pnjTest);
    globals.terrainManager.changeMap(globals.maps.testMap2,600,620);
}

var callback2 = function(){
    globals.pnjs.martin.currentIndex = 0;
    globals.dialogManager.stop(true,false);
    globals.dialogManager.startDialog(globals.pnjs.martin);
}


function setDialog(langue){
    switch(langue){
        case 0 :
             globals.dialogs.pnjTestDialogs = [["bonjour! je suis un test . tu peux choisir entre un et deux.",["nouvelle map","option deux"],[callback1,callback2]],"j'affirme que tu as bien choisi l'option une","j'affirme que tu as bien choisi l'option deux"];
             globals.dialogs.pangloss =[["Oh Candide, bonjour! Viens, tu arrives à point nommé pour ma bénéfique leçon de métaphysico-cosmo-nigologie.",function(){globals.pnjs.pangloss.currentIndex=1; globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);}],["-explication-... Mais dis-moi, Candide. Tu devras faire des choix dans ta vie et il sera toujours important de répondre comme ton bon Pangloss te l'a appris, c'est à dire positivement! Es-tu d'accord?",["oui","non"],[function(){globals.pnjs.pangloss.currentIndex=2;globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);} , function(){globals.pnjs.pangloss.currentIndex=3; globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);}]],"bien... Sur ce, va donc explorer les alentours et retourne me voir quand tu auras appris quelque chose.",["Il me semble que tu n'as pas bien compris, mon cher. Laisse moi te réexpliquer...",function(){globals.pnjs.pangloss.currentIndex=1 ; globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);}]];
            break; // chaque réplique à question est stockée dans un array. à l'index 0 se trouve la question. à l'index 1, les réponses contenues dans un array. à l'index 2  les callbacks des réponses aussi dans un array.
        case 1:
             globals.dialogs.pnjTestDialogs = [["hi! I'm a test. You can choose between one and two.ééééééééééééééééééééé kjfkjshdk hdf jkhsd kjh fskj sdfkjhdkh kjsdfh kjdsfh kjdsh kj fkdhj skjh ksj hhkfsjh ksdfjh kjdhf kjhfskjshf kjsfh kjh fkjhsf kjh fkjh fj fskjh fsdkjh sjh fdsjkh dkjh fjhkdkj fdskjh ",function(){console.log("fonction 1")}],"you chose option 1","you chose option 2"];
            break;
                 }
}
