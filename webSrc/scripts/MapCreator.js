class CustomMap {
    constructor(key,tilesets,layerKeys,music){
        this.key = key;
        this.tilemap = game.add.tilemap(key);
        this.properties = this.tilemap.plus.properties;
        this.music = music || undefined;
        this.pnjs = [];
        this.warps = [];
        this.tilesets = tilesets;
        this.layers = layerKeys;
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
        for(let l in this.tilesets){
            this.tilemap.addTilesetImage(this.tilesets[l],this.tilesets[l]);
        }
        // créer les layers ( new tilemapLayer ou makeLayer)
        let n = 0;
        // for(let l of this.layerKeys){
        //     var str = "layer" + n;
        //     this.layers[str] = {};
        //     this.layers[str].layerObject = new Phaser.TilemapLayer(game,this.tilemap,0,0);
        //     this.layers[str].name = l;
        //     n++;
        // }

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
