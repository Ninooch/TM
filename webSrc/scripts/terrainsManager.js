class TerrainManager {
    constructor(){
        this.currentLayers = [];
        this.currentMap;
        this.currentPnjs = [];
        this.currentWarps = [];

    }
    clearMap(){
        this.currentMap.plus.animation.disable();
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
        this.currentPnjs = [];
        this.currentWarps = [];
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

        }
        this.currentMap.plus.animation.enable();
        this.currentLayers[0].resizeWorld();



        for(let l in map.pnjs){
            game.add.existing(map.pnjs[l]);
            this.currentPnjs.push(map.pnjs[l]);
        }
        for(let l in map.warps){
            this.currentWarps.push(map.warps[l]);
        }
    }

    changeMap(newMap,x,y){
        game.camera.fade(0x000000,1000,false,1);
        game.camera.onFadeComplete.addOnce(function(){
            this.clearMap();
            this.initMap(newMap);
            initPlayer(x,y);
            game.camera.flash(0x000000,1000);
        },this);
    }

    update(){
        for(let l in this.currentWarps){
            if(checkPnjOverlap(this.currentWarps[l],globals.player)){
                if(this.currentWarps[l].isHouse){
                    if(!globals.player.customProps.bulleOnScreen){
                        globals.player.customProps.bulle.create(globals.player.x,globals.player.y,this.currentWarps[l].text,37);
                        globals.player.customProps.bulle.goToHouse(this.currentWarps[l].to,this.currentWarps[l].nx,this.currentWarps[l].ny);
                        globals.player.customProps.bulleOnScreen = true;
                    }
                    else{
                        globals.player.customProps.bulle.update(globals.player.x,globals.player.y);
                    }
                }
                else{
                    if(!this.currentWarps[l].overlap){
                        globals.terrainManager.changeMap(this.currentWarps[l].to,this.currentWarps[l].nx,this.currentWarps[l].ny);
                    }
                }
            }
            else{
                if(globals.player.customProps.bulleOnScreen){
                    globals.player.customProps.bulle.destroy();
                    globals.player.customProps.bulleOnScreen = false;
                }
            }
        }
    }

}
