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

class Warp {
    constructor(isHouse,toMap,newX,newY,x,y,tileWidth,tileHeight,text){
        this.to = toMap;
        this.isHouse = isHouse;
        this.nx = newX;
        this.ny = newY;
        this.text = text;
        this.overlap = false;
        this.rectangle = new Phaser.Rectangle(x,y,tileWidth*32,tileHeight*32);
    }
}
