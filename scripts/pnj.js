function Pnj(_game,x,y,key,frame,_catchphrase,dialogs){ //catchphrse = "", dialogs = objet contenant un array //voir feuille de dialogues
    sprite.call(this,_game,x,y,key,frame);
    game.physics.enable(this,Phaser.Physics.ARCADE);
   // this.catchphrase = _catchphrase;
    this.dialogs = dialogs; // sera un array

    this.bulle = function(){
        bulle = game.add.sprite(x,y-64,"bulle");
        bulle.anchor.setTo(0.5,1);
        catchphrase = game.add.bitmapText(x,y-64,"candideFont",_catchphrase,14);
        catchphrase.alignTo(bulle,Phaser.LEFT-CENTER,0,0);
    }
}

