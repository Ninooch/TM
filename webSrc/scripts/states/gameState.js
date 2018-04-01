function startGame(){
    this.game.state.start("game");
}

var gameState = {
    create: function(){

        if(!gameRef.introDone){
        globals.functions.intro();

    }

        initInput();
        game.physics.startSystem(Phaser.Physics.ARCADE);

        setDialog(gameRef.main.langue);
        createMap1();
        input.menu.onDown.addOnce(function(){
            let sp = game.add.sprite(game.camera.x,game.camera.y,"title");
            sp.bringToTop();
            //faire une classe avec une récursion des signaux : quand on affiche le menu, on enclenche le signal pour le fermer etc.

            //nom des graines c'est en fonctino de ce qu'il a appris
        });
        globals.terrainManager.currentPnjs = []; //solution rapide pour éviter la double bulle des pnjs.
        globals.terrainManager.initMap(globals.maps.chateau,true);

        initPlayer(1182,1152);

        var sparkles = game.add.sprite(250,250,"sparkles");
        sparkles.animations.add("shine",[0,1,2,3,4,5],10);
        sparkles.animations.play("shine",10,true);
        game.camera.flash(0x000000,1000,false,1);

    },
    update: function(){
        updatePlayer();
        globals.terrainManager.update();
    },
};
