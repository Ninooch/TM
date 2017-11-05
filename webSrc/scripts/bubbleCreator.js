class Bubble {
    create(x,y,text){
        this.bubble = game.add.sprite(x + 20,y,"bulle");
        this.bubble.anchor.setTo(0.5,1);

        this.text = game.add.bitmapText(x,y,"candideFont",text,41);
        this.text.anchor.setTo(0.5,1);
        this.text.alignIn(this.bubble,Phaser.LEFT_CENTER,-10,5);

        this.waitTriangle = game.add.sprite(x,y,"dialogTriangle");
        this.waitTriangle.animations.add("waiting",[0,1],4);
        this.waitTriangle.alignIn(this.bubble,Phaser.RIGHT_CENTER,-10,0);
        this.waitTriangle.animations.play("waiting",4,true);
    }

    destroy(){ // ça marche
        this.bubble.destroy();
        this.text.destroy();
        this.waitTriangle.destroy();
    }
}
