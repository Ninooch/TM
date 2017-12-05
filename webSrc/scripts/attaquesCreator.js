class Attaque{ //eventuellement des types d'attaques. avec des faiblesses etc...
    constructor(name,pdg,cEff){
        this.name = name //nom de l'attaque, argument
        this.pdg = pdg //Points De Dégats
        this.cEff = cEff //coefficient d'efficacité : chaque tour, l'argument diminue si réutilisé.
        //les attaques peuvent foirer mais ça n'a rien à avoir avec le coefficient
    }
    rate(){
        this.pdg = 0; 
        //fait rater au hasard l'attaque pour un tour
    }
    coupCritique(){
        //fait  au hasard multiplier par 1.5 les points de dégats pour un tour
    }
}

//mécanique d'un tour :
//le joueur a 4 attaques ou moins (même chose pour les arguments).
//les ennemis ont 4 attaques. Au hasard, l'une d'entre elle est choisie et attaque le joueur ou le helper.
// le joueur a le choix d'attaquer l'ennemi ou de se soigner.
// le match est gagné quand l'ennemi n'a plus aucun hp dans sa barre de vie.
// le match est perdu quand le joueur n'a plus de hp ou que ts les helpers sont K.0.
