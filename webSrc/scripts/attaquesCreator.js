class Attaque{ //eventuellement des types d'attaques. avec des faiblesses etc...
constructor(name,pdg,cEff,minPdg){
    this.name = name //nom de l'attaque, argument
    this.pdg = pdg  //Points De Dégats
    this.minPdg = minPdg || 5 ;
    this.msg = 0;
    this.cEff = cEff || 1 //coefficient d'efficacité : chaque tour, l'argument diminue si réutilisé.
    //les attaques peuvent foirer mais ça n'a rien à avoir avec le coefficient
    this.animation = "" //truc à faire pour faire une impression :D
}
info(){
    var str = "Inflige " + this.pdg + " dégats."; //ça marche mais pas de chiffres dans la police! :(
        return str;
    }
    nextTurn(){
        if(Math.ceil(this.pdg/this.cEff)>this.minPdg){
            this.pdg = Math.ceil(this.pdg/this.cEff);
        }
        else{
            this.pdg = this.minPdg;
        }
    }
    normal(cible){
        cible.alive = true;
        cible.damage(this.pdg);
        //debugger;
        this.msg = 0;
    }
    rate(){
        //fait rater au hasard l'attaque pour un tour
        this.msg = 1;
        //message
    }
    coupCritique(cible){
        cible.damage(Math.ceil(this.pdg*1.5));
        this.msg = 2;
        //fait  au hasard multiplier par 1.5 les points de dégats pour un tour
    }
    desc(){
        let str;
        switch(this.msg){
            case 0 :
            str = "";
            break;
            case 1 :
            str = globals.battleData.text.rate;
            break;
            case 2 :
            str = globals.battleData.text.cpsCrtq;
            break;
        }
        return str;
    }
    tour(cible){
        var rnd = Math.random();
        if(rnd<0.1){
            this.rate();
        }
        else if(rnd>0.1 && rnd<0.2 ){
            this.coupCritique(cible);
        }
        else{
            this.normal(cible);
        }
        this.nextTurn();
    }
}

//mécanique d'un tour :
//le joueur a 4 attaques ou moins (même chose pour les arguments).
//les ennemis ont 4 attaques. Au hasard, l'une d'entre elle est choisie et attaque le joueur ou le helper.
// le joueur a le choix d'attaquer l'ennemi ou de se soigner.
// le match est gagné quand l'ennemi n'a plus aucun hp dans sa barre de vie.
// le match est perdu quand le joueur n'a plus de hp ou que ts les helpers sont K.0.
