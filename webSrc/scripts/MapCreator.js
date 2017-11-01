class CustomMap extends Phaser.Tilemap {
    constructor(key,pnjs,music,tilesets,layers){
        super(game,key);
        this.music = music;
        this.pnjs = pnjs;
        this.tilesets = tilesets;
        this.layers = layers;
        
    }
}