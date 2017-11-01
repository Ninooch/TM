class Terrain {
    constructor(){
        this.currentLayers = [];
        this.currentMap;
        this.currentPnjs = [];
        this.graphicGroup;
        this.rectangle;

    }
    initGroup(){
        this.graphicGroup = game.add.group(); 
        game.world.bringToTop(this.graphicGroup);
    }
    clearMap(){ 
        // console.log("destroying map")
        this.currentMap.destroy();
        for(let l in this.currentLayers){
            this.currentLayers[l].destroy();
        }
        //détruire les pnjs 
        for(let l in this.currentPnjs){
            this.currentPnjs[l].destroy();
        }
    }

    drawRect(){
        this.rectangle =  game.add.graphics(0,0);
        this.rectangle.beginFill(0x000000);
        this.rectangle.drawRect(game.camera.x,game.camera.y,game.camera.width,game.camera.height);
        this.rectangle.endFill();
        this.graphicGroup.add(this.rectangle);

        game.world.bringToTop(this.graphicGroup);
    }
    clearRect(){
        this.graphicGroup.removeAll(true);
        this.rectangle.destroy();
    }

    fade(In,hasCallback,callback){ //In = bool, hasCallback = bool
        this.drawRect();
        if(In){
            this.rectTweenIn = game.add.tween(this.rectangle);
            this.rectTweenIn.to({alpha: 0}, 1000, null, true);
            this.rectTweenIn.onComplete.addOnce(function(){
                if(hasCallback){
                    callback();
                }
                this.clearRect();
            },this);
        }
        else {
            this.rectangle.alpha = 0;
            this.rectTweenOut = game.add.tween(this.rectangle);
            this.rectTweenOut.to({alpha: 1}, 1000, null, true);
            this.rectTweenOut.onComplete.addOnce(function(){
                if(hasCallback){
                    callback();
                }
                this.clearRect();
            },this);
        }
    }

    initMap(map){ //dépendra aussi des pnjs, des objets de Tiled et éventuellement des animations, à voir , prendre en compte la musique aussi
        //l'argument layers est un array qui contient tout les noms des couches de la map
        this.currentMap =  game.add.tilemap(map.key);
        for(let l in map.tilesets){
            this.currentMap.addTilesetImage(map.tilesets[l],map.tilesets[l]); // tilesetIm c'est le "nom".pnj et tileseImKey c'est le nom dans le cache de Phaser, faire en sorte qu'ils portent le même nom, comme ça un argument en moins dans la fonction
        }

        for(let l in map.layers){
            console.log(map.layers[l]);
            this.currentLayers.push(this.currentMap.createLayer(map.layers[l]));
          //  this.currentLayers[l].resizeWorld();
        }

        for(let l in map.pnjs){
            game.add.existing(map.pnjs[l]);
            this.currentPnjs.push(map.pnjs[l]);
        }
    }

    changeMap(newMap){
        var self = this;
        this.fade(false,true,function(){
            self.clearMap();
            self.initMap(newMap);
            self.fade(true,false);
        });

    }



}

var terrainManager = new Terrain();