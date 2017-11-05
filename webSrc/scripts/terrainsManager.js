class Terrain {
    constructor(){
        this.currentLayers = [];
        this.currentMap;
        this.currentPnjs = [];

    }
    clearMap(){
        // console.log("destroying map")
        this.currentMap.destroy();
        for(let l in this.currentLayers){
            this.currentLayers[l].destroy();
            //supprimer les layers
        }
        //détruire les pnjs
        for(let l in this.currentPnjs){
            this.currentPnjs[l].destroy();
        }
        globals.player.destroy();
    }



    initMap(map){ //dépendra aussi des pnjs, des objets de Tiled et éventuellement des animations, à voir , prendre en compte la musique aussi
        //l'argument layers est un array qui contient tout les noms des couches de la map
        this.currentMap =  game.add.tilemap(map.key);
        for(let l in map.tilesets){
            this.currentMap.addTilesetImage(map.tilesets[l],map.tilesets[l]); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction
        }

        this.currentLayers = [];
        for(let l of map.layers){
            let layer = this.currentMap.createLayer(l);
            this.currentLayers.push(layer);
            //debugger;
        }
        //debugger;

        this.currentLayers[0].resizeWorld();

        for(let l in map.pnjs){
            game.add.existing(map.pnjs[l]);
            this.currentPnjs.push(map.pnjs[l]);
        }
    }

    changeMap(newMap,x,y){
        //var ctx = this;
        game.camera.fade(0x000000,1000,false,1);
        game.camera.onFadeComplete.addOnce(function(){
            this.clearMap();
            this.initMap(newMap);
            initPlayer(x,y);
            game.camera.flash(0x000000,1000);
        },this);
    }

}
