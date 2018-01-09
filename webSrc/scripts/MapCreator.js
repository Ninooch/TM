class CustomMap {
    constructor(key,tilesets,layerKeys,music){
        this.music = music || undefined;
        this.pnjs = [];
        this.warps = [];
        this.tilesets = tilesets;
        this.layerKeys = layerKeys;
        this.tilemap = game.make.tilemap(key);
        console.log(this.tilemap);
        this.properties = this.tilemap.properties;
        this.layers = {};
        this.createMap();

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
        for(let l of this.layerKeys){
            this.layers[this.layerKeys[l]] = {
                    layerObject : new Phaser.TilemapLayer(game,this.tilemap,0,0),
                    //properties : this.layers[this.layerKeys[l]].layerObject.properties,
            };
        }
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
