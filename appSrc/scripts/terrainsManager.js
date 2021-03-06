class Terrain {
    constructor(){
        this.layers = [];
        this.map;
        this.pnjs = [];
    }
    clearMap(){ 
        // console.log("destroying map")
        this.map.destroy();
        for(let l in this.layers){
            this.layers[l].destroy();
        }
        //détruire les pnjs 
    }

    fadeIn(){
        this.rectangle =  game.add.graphics(0,0);
        this.rectangle.beginFill(0xf00000);
        this.rectangle.drawRect(0,0,600,200);
        this.rectangle.endFill();

    }

    fadeOut(){

    }

    initMap(map,tilesetImKey,tilesetIm,layers,pnjs){ //dépendra aussi des pnjs, des objets de Tiled et éventuellement des animations, à voir , prendre en compte la musique aussi
        //l'argument layers est un array qui contient tout les noms des couches de la map
        this.map =  game.add.tilemap(map);
        this.map.addTilesetImage(tilesetIm,tilesetImKey); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction

        for(let l in layers){
            this.layers.push(this.map.createLayer(layers[l]));
            this.layers[l].resizeWorld();
        }

        for(let l in pnjs){
            game.add.existing(pnjs[l]);
        }


    }
}

var terrainManager = new Terrain();