class Dialog{ // dépend : du pnj, du type de pnj, de s'il y a un choix, du stade du jeu, des choix déjà fait du joueurs et de l'index du dialogs qui est un array.
    // les textes dépendants des choix du joueurs seront directement exprimés par les pnj dans leur configurations, le changement sera surement indiqué par l'index.
    // créer une méthode pour les choix
    // méthode pour les pnj simples , avec index,
    // méthode pour les pnjs plus complexes , gestion des states etc... 
    // à utiliser également pour les descriptions et interactions avec l'environnement 
    constructor(){
        this.onscreen = false;
    }

    startDesc(){
        //ajoute la boîte de dialogue sur l'écran
        player.customProps.canMove = false;
        this.onscreen = true;
        this.dialBox = game.add.image((game.camera.width)/2,(game.camera.height)/2,"dialogBox");
        this.dialBox.anchor.setTo(0.5,1);
    } // dépendant de l'objet à inspecter (?) 

    stopDesc(){}
    startDialog(pnj,index){}
    startDialogSpe(pnj,state,index){}
    stopDialog(){} // à utiliser pour dialog et dialog spe



}

var dialog;