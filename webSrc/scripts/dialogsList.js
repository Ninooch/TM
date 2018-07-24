// feuilles de dialogues : mettre un perso , mettre les dialogues en suivant la langue etc...

function setDialog(langue){
    switch(langue){
        case 0 :
        //globals.dialogs.intro = [["DISCLAIMER: Ce jeu est inspiré par Candide de Voltaire. Par conséquent, certaines idées exprimées dans le livre ne correspondent plus à l'actualité. Toute représentation offensante est en aucun cas souhaitée."]];
        globals.dialogs.intro = [["Ce jeu se joue à l'aide des touches directionnelles et de la touche enter. Appuyez sur entrer pour continuer.",function(){globals.dialogManager.stop();globals.dialogs.intro.currentIndex=1;globals.dialogManager.desc(globals.dialogs.intro);}],["Il y avait en Westphalie, dans le château de monsieur le Baron de Thunder-Then-Tronckh, un jeune garçon à qui la nature avait donné les moeurs les plus douces...",function(){game.state.start("game");gameRef.introDone=true;globals.music.campanella.play("",0,1,true);}]];
        globals.dialogs.pnj1Ch1 = ["Je suis le jardinier de monseigneur le baron et de madame son épouse."];
        //["Ce jeu se joue à l'aide des touches directionnelles et de la touche enter. Appuyez sur entrer pour continuer.",function(){this.currentIndex=1;}]
        globals.dialogs.pnjTestDialogs = [["Bonjour Candide! Souhaiterais-tu t'entraîner au combat ?",["Combat !","Non merci"],
        [function(){
            globals.battleData.set.ennemy1 = globals.pnjs.martin2;
            globals.battleData.set.helper = globals.pnjs.helper1;
            globals.battleData.set.player = globals.player;
            globals.battleData.set.ennemy2 = globals.pnjs.martin3;
            globals.pnjs.martin2.startCombat();}
            ,function(){
                globals.dialogManager.stop(true,false);
                globals.pnjs.martin2.currentIndex = 1;
                ;globals.dialogManager.startDialog(globals.pnjs.martin2)
            }]
        ],["Très bien, remettons cela pour une prochaine fois.",function(){
            globals.dialogManager.stop(true,true);
            globals.pnjs.martin2.currentIndex = 0;
        }]];
        globals.dialogs.pangloss =[
            ["Oh Candide, bonjour! Viens, tu arrives à point nommé pour ma bénéfique leçon de métaphysico-théologo-cosmonigologie.",function(){
                globals.pnjs.pangloss.currentIndex=1;
                globals.dialogManager.stop(true,false);
                globals.dialogManager.startDialog(globals.pnjs.pangloss);}
            ],["Vois-tu, Candide, je vais te démontrer qu'il n'y a point d'effet sans cause, car c'est la base primordiale de tout ce que je peux admirablement prouver...Comme je te l'ai déjà dit, nous vivons dans le meilleur des mondes possibles et en son sein, le château de monseigneur le Baron est de ce fait le plus beau des châteaux. D'ailleurs, madame la Baronne, son épouse ne peut être autre que la meilleure des baronnes possibles.",function(){
                globals.pnjs.pangloss.currentIndex=2;
                globals.dialogManager.stop(true,false);
                globals.dialogManager.startDialog(globals.pnjs.pangloss);
            }],
            ["Tu ne me crois toujours pas? ... Tu as tort : les choses ne peuvent être autrement. C'est pourtant simple, chaque chose étant faite pour une fin, cette dernière est nécessairement la meilleure! Regarde mon nez par exemple. Il a visiblement été fait pour porter des lunettes. Comme le tien d'ailleurs, et ceux de notre bon seigneur le baron et sa cour. C'est pourquoi l'on porte des lunettes! Cela ne te suffit toujours pas? Regarde tes jambes alors, elles ont clairement été instituées pour être chaussées. Et nous avons des chausses! N'est-ce pas magnifique ? Les pierres ont été formées pour être taillées et pour en faire des châteaux, aussi, monseigneur le Baron a un très beau château : le plus grand baron de la province doit être le mieux logé, c'est une évidence. Par conséquent, ceux qui osent avancer que tout est bien n'affirment rien de plus que des sottises. Il faut dire que tout est au mieux. Quod erat demonstrandum .",function(){
                globals.pnjs.pangloss.currentIndex=3;
                globals.dialogManager.stop(true,false);
                globals.dialogManager.startDialog(globals.pnjs.pangloss);
            }],
            [" Mais dis-moi, Candide. Tu es un grand garçon maintenant. Il te faudra faire des choix dans ta vie et il sera toujours important de répondre comme ton bon Pangloss te l'a appris, c'est à dire positivement! Es-tu d'accord?",
            ["non","oui"],
            [function(){
                globals.pnjs.pangloss.currentIndex=5;
                globals.dialogManager.stop(true,false);
                globals.dialogManager.startDialog(globals.pnjs.pangloss);
            },function(){
                globals.pnjs.pangloss.currentIndex=4;
                globals.dialogManager.stop(true,false);
                globals.dialogManager.startDialog(globals.pnjs.pangloss);}]
            ],
            "Bien... Sur ce, va donc explorer les alentours et retourne me voir quand tu auras appris quelque chose."
            ,["Il me semble que tu n'as pas bien compris, mon cher. Laisse moi te réexpliquer...",
            function(){globals.pnjs.pangloss.currentIndex=1 ;
                globals.dialogManager.stop(true,false);
                globals.dialogManager.startDialog(globals.pnjs.pangloss);}
            ]
        ];

        globals.dialogs.cunegonde = [["Candide! Candide! Il faut absolument que je te raconte quelque chose! Tu... Tu ne sais pas ce que j'ai vu l'autre jour, près d'ici... J'ai vu Pangloss avec Paquette, cachés parmi les buissons. Je crois qu'il lui enseignait quelque chose comme de la physique expérimentale... A en voir Paquette, ça avait l'air intéressant alors j'ai observé sans faire de bruit les expériences répétées de Pangloss. J'ai cru comprendre qu'il lui montrait sa raison suffisante, ses causes, ses effets et visiblement, il enseignait très bien.",function(){
            globals.pnjs.cunegonde.currentIndex=1;
            globals.dialogManager.stop(true,false);
            globals.dialogManager.startDialog(globals.pnjs.cunegonde);}
        ],
        ["...", function(){
            globals.pnjs.cunegonde.currentIndex = 2;
            globals.dialogManager.stop(true,false);
            globals.dialogManager.startDialog(globals.pnjs.cunegonde);}
        ],
        "Tu sais, Candide, j'aime bien la science... Et je me suis dit qu'on pourrait essayer de comprendre ensemble ce que c'est, une raison suffisante..."];

        globals.dialogs.endDemo = [["Merci d'avoir joué à l'ébauche de Candide 2.0 ou l'optimisme en jeu vidéo. Bien que bref, j'espère que le moment passé sur ce projet fut agréable. A bientôt! ",
        function(){
            globals.dialogManager.stop();
            let title = game.add.image(250,180,"title");
            let tween = game.add.tween(title).from({alpha:0},800, Phaser.Easing.Linear.None,true,1160);

        } ]];

        globals.dialogs.paquette = [
            ["Bonjour Candide! Regarde, j'ai un message que l'on m'a confié à te remettre.",function(){
                game.state.start("txt",true,false,
                function(){
                    globals.dialogManager.desc(globals.dialogs.endDemo);
                });
            }]
        ];


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
            vtxt:"Félicitations, le combat est remporté!",
            dtxt:"L'adversaire a remporté le combat!"
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
