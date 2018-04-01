var input;

function initInput(){
	input = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.UP),
		left: game.input.keyboard.addKey(Phaser.Keyboard.LEFT),
		right: game.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
        down: game.input.keyboard.addKey(Phaser.Keyboard.DOWN),
		enter: game.input.keyboard.addKey(Phaser.Keyboard.ENTER),
		menu: game.input.keyboard.addKey(Phaser.Keyboard.S),
	};
}
