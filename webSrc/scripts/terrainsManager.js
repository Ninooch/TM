class TerrainManager {
    constructor(){
        this.currentLayers = [];
        this.currentMap;
        this.currentPnjs = [];
        this.currentWarps = [];

    }
    clearMap(collision){
        this.currentMap.plus.animation.disable();
        if(collision){
            this.currentMap.setCollisionByExclusion([], false, this.collision);
            this.collision.destroy();
        }
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



    initMap(map,collision){ //dépendra aussi des pnjs, des objets de Tiled et éventuellement des animations, à voir , prendre en compte la musique aussi
        //l'argument layers est un array qui contient tout les noms des couches de la map
        this.currentMap = game.add.tilemap(map.key);

        for(let l in map.tilesets){
            this.currentMap.addTilesetImage(map.tilesets[l],map.tilesets[l]); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction
        }

        this.currentLayers = []; //let key in object
        // array for each : applique une fonction à chaque élément de l'array
        for(let k of map.layerKeys){

            let layer = this.currentMap.createLayer(k);
            this.currentLayers.push(layer);
        }

        if(collision){
            this.collision = this.currentMap.createLayer("Collision");
            this.currentMap.setCollisionByExclusion([], true, this.collision);
            this.collision.resizeWorld();
            this.collision.visible = false;
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
        game.camera.fade(0x000000,500,false,1);
        game.camera.onFadeComplete.addOnce(function(){
            this.clearMap(true);
            this.initMap(newMap,true);
            initPlayer(x,y);
            console.log("fait")
            game.camera.flash(0x000000,500);
        },this);
    }

    update(){
        game.physics.arcade.collide(globals.player,this.collision);
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
