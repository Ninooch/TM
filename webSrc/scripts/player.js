

function initPlayer(x,y){
    globals.player = game.add.sprite(x,y,"player",0);
    globals.player.name = "Candide";

    game.physics.enable(globals.player,Phaser.Physics.ARCADE);
    globals.player.body.collideWorldBounds = true;

    game.camera.follow(globals.player);

    globals.player.maxHealth = 120;
    globals.player.setHealth(120);
    globals.player.isAlive = true;
    globals.player.customProps = {};

    globals.player.customProps.animationSpeed = 6;
    globals.player.customProps.speed = 150;
    globals.player.customProps.canMove = true;

    globals.player.customProps.bulle = new Bubble();
    globals.player.customProps.bulleOnScreen = false;

    //les attaques phi et normales devront être listées dans une propriété

    globals.player.animations.add("walkDown", [0,1,2,3], globals.player.customProps.animationSpeed);
    globals.player.animations.add("walkLeft", [4,5,6,7], globals.player.customProps.animationSpeed);
    globals.player.animations.add("walkRight", [8,9,10,11], globals.player.customProps.animationSpeed);
    globals.player.animations.add("walkUp", [12,13,14,15], globals.player.customProps.animationSpeed);
}

function updatePlayer(){
    globals.player.rectangle = getBounds(globals.player);

    globals.player.body.velocity.x=0;
    globals.player.body.velocity.y=0;
    if(globals.player.customProps.canMove){
        if(input.left.isDown){
            globals.player.body.velocity.x = -globals.player.customProps.speed;
            globals.player.animations.play("walkLeft",globals.player.customProps.animationSpeed,true);
            return;
        }

        if(input.up.isDown){
            globals.player.body.velocity.y = -globals.player.customProps.speed;
            globals.player.animations.play("walkUp",globals.player.animationSpeed,true);
            return;
        }
        if(input.down.isDown){
            globals.player.body.velocity.y = globals.player.customProps.speed;
            globals.player.animations.play("walkDown",globals.player.customProps.animationSpeed,true);
            return;
        }

        if(input.right.isDown){
            globals.player.body.velocity.x = globals.player.customProps.speed;
            globals.player.animations.play("walkRight",globals.player.customProps.animationSpeed,true);
            return;
        }

        else{
            globals.player.animations.stop(null,true);
        }
    }
}
