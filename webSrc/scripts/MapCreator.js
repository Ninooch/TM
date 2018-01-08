class CustomMap {
    constructor(key,tilesets,layers,music){
        this.music = music || undefined;
        this.pnjs = [];
        this.warps = [];
        this.tilesets = tilesets;
        this.layers = layers;
        this.tilemap = new Phaser.Tilemap(key);

    }
    addWarps(args){
        this.warps.push(args);
    }
    addPnjs(args){
        this.pnjs.push(args);
    }
    createMap(){
        //object["propName1"] = 22; //INCORABLE
        // associer un tileset;
        // créer les layers ( new tilemapLayer ou makeLayer)
        // récuper les références (dans les layers ou la map)

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
