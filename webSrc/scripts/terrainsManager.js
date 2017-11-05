class Terrain {
    constructor(){
        this.currentLayers = [];
        this.currentMap;
        this.currentPnjs = [];
        this.rectangle;

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

    drawRect(){
        var rectangle = game.add.graphics(0,0);
        rectangle.beginFill(0x000000);

        this.logCam();
        rectangle.drawRect(game.camera.x,game.camera.y,game.camera.width,game.camera.height);
        // debugger
        rectangle.endFill();
        game.world.bringToTop(rectangle);

        return rectangle;
    }


    fade(In,callback){ //In = bool
        if(In){
            this.logCam();
            var rect = this.drawRect();
            this.rectTweenIn = game.add.tween(rect);
            this.rectTweenIn.to({alpha: 0}, 1000, null);
            this.rectTweenIn.onComplete.addOnce(function(){
                console.log("Tweened in");
                if(callback != undefined){
                    callback();
                }
                rect.destroy();
            },this);

            this.rectTweenIn.start();
        }else {
            var rect = this.drawRect();
            rect.alpha = 0;
            this.rectTweenOut = game.add.tween(rect);
            this.rectTweenOut.to({alpha: 1}, 1000, null);
            this.rectTweenOut.onComplete.addOnce(function(){
                console.log("Tweened out");
                if(callback != undefined){
                    callback();
                }
                rect.destroy();
            },this);

            this.rectTweenOut.start();
        }
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
      //  this.fade(false,function(){
        //     ctx.clearMap();
        //     ctx.initMap(newMap);
        //     initPlayer(x,y);
        //     ctx.logCam();
        //     ctx.fade(true);
        // });
    }

    logCam(){
      console.log(game.camera.x, game.camera.y);
    }
}
