class CustomMap {
    constructor(key,tilesets,layers,pnjs,warps,music){
        this.key = key;
        this.music = music;
        this.pnjs = pnjs;
        this.warps = warps;
        this.tilesets = tilesets;
        this.layers = layers;

    }
}

class Warp extends Phaser.Image {
    constructor(toMap,newX,newY,x,y,tileWidth,tileHeight){
        super(game,x,y);
        this.to = toMap;
        this.nx = newX;
        this.ny = newY;
        this.overlap = false;

        this.rectangle = new Phaser.Rectangle(x,y,tileWidth*32,tileHeight*32);
    }
    update(){
        if(checkPnjOverlap(this,globals.player) && !this.overlap){
            globals.terrainManager.changeMap(this.to,this.nx,this.ny);
            this.overlap = true;
        }
    }
}
