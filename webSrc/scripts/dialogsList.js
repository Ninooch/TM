// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

function setDialog(langue){
    switch(langue){
        case 0 :
        //globals.dialogs.intro = [["DISCLAIMER: Ce jeu est inspiré par Candide de Voltaire. Par conséquent, certaines idées exprimées dans le livre ne correspondent plus à l'actualité. Toute représentation offensante est en aucun cas souhaitée."]];
        globals.dialogs.intro = [["Ce jeu se joue à l'aide des touches directionnelles et de la touche enter. Appuyez sur entrer pour continuer.",function(){globals.dialogManager.stop();globals.dialogs.intro.currentIndex=1;globals.dialogManager.desc(globals.dialogs.intro);}],["Il y avait en Westphalie, dans le château de monsieur le Baron de Thunder-Then-Tronckh, un jeune garçon à qui la nature avait donné les moeurs les plus douces.",function(){game.state.start("game");gameRef.introDone=true;}]];
        globals.dialogs.pnj1Ch1 = ["Je suis le jardinier de monseigneur le baron et de madame son épouse."];
        //["Ce jeu se joue à l'aide des touches directionnelles et de la touche enter. Appuyez sur entrer pour continuer.",function(){this.currentIndex=1;}]
        globals.dialogs.pnjTestDialogs = [["bonjour! je suis un test . tu peux choisir entre un et deux.",["combat","option deux"],[function(){globals.battleData.set.ennemy1 = globals.pnjs.martin2; globals.battleData.set.helper = globals.pnjs.martin2; globals.battleData.set.player = globals.player;globals.battleData.set.ennemy2 = globals.pnjs.martin3; globals.pnjs.martin2.startCombat();},function(){globals.dialogManager.stop(true,false);globals.pnjs.martin2.currentIndex = 2;globals.dialogManager.startDialog(globals.pnjs.martin2)}]],"j'affirme que tu as bien choisi l'option une","j'affirme que tu as bien choisi l'option deux"];
        globals.dialogs.pangloss =[["Oh Candide, bonjour! Viens, tu arrives à point nommé pour ma bénéfique leçon de métaphysico-cosmo-nigologie.",function(){globals.pnjs.pangloss.currentIndex=1; globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);}],["-explications-... Mais dis-moi, Candide. Tu devras faire des choix dans ta vie et il sera toujours important de répondre comme ton bon Pangloss te l'a appris, c'est à dire positivement! Es-tu d'accord?",["oui","non"],[function(){globals.pnjs.pangloss.currentIndex=2;globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);} , function(){globals.pnjs.pangloss.currentIndex=3; globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);}]],"bien... Sur ce, va donc explorer les alentours et retourne me voir quand tu auras appris quelque chose.",["Il me semble que tu n'as pas bien compris, mon cher. Laisse moi te réexpliquer...",function(){globals.pnjs.pangloss.currentIndex=1 ; globals.dialogManager.stop(true,false);globals.dialogManager.startDialog(globals.pnjs.pangloss);}]];


        globals.battleData.text = {
            choosePlayer : "Que doit faire ",
            chooseItem : "Que faire avec ",
            cpsCrtq : "Coups critique !",
            rate : "Mais son attaque a échoué !",
            attaque : "attaque ",
            use : "utiliser ",
            useOn: "Quel ennemi attaquer ?",
            sur : "sur ",
            inventaire : "Inventaire",
            attaques : "Attaques",
            info : "info ",
            retour: "retour ",
            argumente : "argumente contre ",
            victoire : "Victoire!",
            defaite: "Défaite...",
        };
        break; // chaque réplique à question est stockée dans un array. à l'index 0 se trouve la question. à l'index 1, les réponses contenues dans un array. à l'index 2  les callbacks des réponses aussi dans un array.
        case 1:
        globals.dialogs.pnjTestDialogs = [["hi! I'm a test. You can choose between one and two.ééééééééééééééééééééé kjfkjshdk hdf jkhsd kjh fskj sdfkjhdkh kjsdfh kjdsfh kjdsh kj fkdhj skjh ksj hhkfsjh ksdfjh kjdhf kjhfskjshf kjsfh kjh fkjhsf kjh fkjh fj fskjh fsdkjh sjh fdsjkh dkjh fjhkdkj fdskjh ",function(){console.log("fonction 1")}],"you chose option 1","you chose option 2"];
        globals.battleData.text = {
            choosePlayer : "What will",//what will machin do
            chooseItem : "What to do with ",
            cpsCrtq : "Critical hit !",
            rate : "But his attack failed !",
            attaque : " attacks ",
            argumente : " argue with ",
            inventaire : "Items",
            attaques : "Attacks",
        };
        break;
    }
}
