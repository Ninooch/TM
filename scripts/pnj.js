class Pnj extends Phaser.Sprite{ //catchphrse = "", dialogs = objet contenant un array //voir feuille de dialogues
    constructor(x,y,key,frame,_catchphrase,dialogs){
        super(game,x,y,key,frame);
        this.dialogs = dialogs; // sera un array
        this.catchphrase = _catchphrase;

        game.physics.enable(this,Phaser.Physics.ARCADE);
    }


    bulle(){
        var bulle = game.add.sprite(this.x + 20,this.y,"bulle");
        bulle.anchor.setTo(0.5,1);
        var catchphrase = game.add.bitmapText(this.x + 20 ,this.y,"candideFont",this.catchphrase,30);
        catchphrase.anchor.setTo(0.5,1);
        catchphrase.alignIn(bulle,Phaser.LEFT_CENTER,-10,2);
    }
}

