class Terrain {
    constructor(){
        this.layers = [];
        this.map;
        this.pnjs = [];
        this.graphicGroup;

    }
    initGroup(){
        this.graphicGroup = game.add.group(); 
        game.world.bringToTop(this.graphicGroup);
    }
    clearMap(){ 
        // console.log("destroying map")
        this.map.destroy();
        for(let l in this.layers){
            this.layers[l].destroy();
        }
        //détruire les pnjs 
        for(let l in this.pnjs){
            this.pnjs[l].destroy();
        }
    }

    fade(In){ //In = bool
        if(In){
            this.rectangle =  game.add.graphics(0,0);
            this.rectangle.beginFill(0x000000);
            this.rectangle.drawRect(0,0,game.camera.width,game.camera.height);
            this.rectangle.endFill();
            this.graphicGroup.add(this.rectangle);

            game.world.bringToTop(this.graphicGroup);

            this.rectTween = game.add.tween(this.rectangle);
            this.rectTween.to({alpha: 0}, 1000, null, true);
            this.rectTween.onComplete.addOnce(function(){
                this.rectangle.destroy();
            },this);
        }
        else {
            this.rectangle =  game.add.graphics(0,0);
            this.rectangle.beginFill(0x000000);
            this.rectangle.alpha = 0;
            this.rectangle.drawRect(0,0,game.camera.width,game.camera.height);
            this.rectangle.endFill();

            game.world.bringToTop(this.graphicGroup);

            this.rectTween = game.add.tween(this.rectangle);
            this.rectTween.to({alpha: 0.9}, 1000, null, true);
            this.rectTween.onComplete.add(function(){
                this.rectangle.destroy();
            },this);
        }
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
            this.pnjs.push(pnjs[l]);
        }
    }
}

var terrainManager = new Terrain();