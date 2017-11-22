class Battle{
    //faire la dynamique en t par t avec un battleManager ?

    constructor(){
        this.menus = [];
    }
    init(){
        //mettre les entités du combat (sprite fixes à animer avec des tweens)
        //de profil

        //créer les menus et leurs interactions
        //inventaire et attaques
        for(let k=0;k<2;k++){
            this.menus.push(game.add.sprite(k*400,250,"menuBattlebox"));
        }
        //TODO mettre le texte en fonction de la langue!!
        this.invText = game.add.bitmapText(0,0,"candideFont", "Inventaire", 50);
        this.invText.alignIn(this.menus[0], Phaser.TOP_CENTER,0,0);
        this.atkText = game.add.bitmapText(0,0,"candideFont", "Attaques",50);
        this.atkText.alignIn(this.menus[1],Phaser.TOP_CENTER,0,0);
    }
}
