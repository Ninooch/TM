var player; 

function initPlayer(x,y){
    player = game.add.sprite(x,y,"player");

    game.physics.enable(player,Phaser.Physics.ARCADE);
    player.body.collideWorldBounds = true;

    game.camera.follow(player);

    player.customProps = {};

    player.customProps.animationSpeed = 6;
    player.customProps.speed = 150;
    player.customProps.canMove = true;

    player.animations.add("walkDown", [0,1,2,3], player.customProps.animationSpeed);
    player.animations.add("walkLeft", [4,5,6,7], player.customProps.animationSpeed);
    player.animations.add("walkRight", [8,9,10,11], player.customProps.animationSpeed);
    player.animations.add("walkUp", [12,13,14,15], player.customProps.animationSpeed); 
}

function updatePlayer(){
    player.body.velocity.x=0;
    player.body.velocity.y=0;
    if(player.customProps.canMove){
        if(input.left.isDown){
            player.body.velocity.x = -player.customProps.speed; 
            player.animations.play("walkLeft",player.customProps.animationSpeed,true);
            return;
        }

        if(input.up.isDown){
            player.body.velocity.y = -player.customProps.speed; 
            player.animations.play("walkUp",player.animationSpeed,true);
            terrainManager.clearMap();
            return;
        }
        if(input.down.isDown){
            player.body.velocity.y = player.customProps.speed; 
            player.animations.play("walkDown",player.customProps.animationSpeed,true);
            // dialogManager.start();
            // dialogManager.displayText(["ceci description"],0,false);
            return;
        }

        if(input.right.isDown){
            player.body.velocity.x = player.customProps.speed;
            player.animations.play("walkRight",player.customProps.animationSpeed,true);
            return;
        }

        else{
            player.animations.stop(null,true);
        }
    }
}