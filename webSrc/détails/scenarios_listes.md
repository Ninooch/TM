# Candide scénario et listes
# ! DISCLAIMER: Ce scénario sert uniquement de pense-bête et de courte structure mentale pour la progression du jeu. Le langage est volontairement abrégé et incompréhensible. !

## idées générales :
* quête secondaire : chercher des arbres tout du long du jeu : pour le jardin
* implémenter des quêtes secondaire pour étoffer le jeu.
* combats philo et à l'épée avec des gens sur les routes etc... (combats ou les gens ne meurent pas.)

## dynamique des combats philosophiques :
* liste d'arguments généraux, que le joueur agrandit en gagnant des combats, parlant aux gens , fouillant dans les feuilles etc...
* dans un combat : un argument perd de sa valeur s'il es utilisé plusieurs fois de suite.
* chaque argument a une "valeur de dégat" , un coefficient de diminution et porte un nom.
* chaque argument fait des dégat sur une barre de vie adverse.
* le texte est balancé
* on peut recevoir des dégats. ( et perdre un combat)
* arguments à développer :
    - même que na ;
    - Pangloss a raison ;
    - Ce que vous dites est stupide : j'ai raison ;
    - tout va bien dans le meilleur des mondes ;
    - c'est pas juste ;
    - je renonce à ton optimisme, Pangloss (l.43 p.118)
    - il y a pourtant du bon (l.36 p 126)
* le dernier : cela est bien, mais il faut cultiver notre jardin.
* séléctionner le joueur qui attaque. séléctionner une attaque , séléctionner un ennemi.
* 2 boîtes : inventaire ; attaques ; (liste verticales)

## 1 ère partie : Introduction

### décors tirés du livre:

* petit village -> maisons et habitants, un vicaire donc petite église, taverne (quand il raconte des contes ? )
* château en pierre avec écuries + palfreniers et granges ( moutons et cochons dedans + paille).
* intérieur avec une tapisserie dans la grande salle, un portrait de la baronne,  une salle à manger avec un grand paravent, une chambre pour cunégonde,une pour son frère, une pour les domestiques (Paquette + 2-3 vieux domestiques) une pour pangloss, une pour les darons et une pour Candide. voir répartition des étages. Une seule grande porte principale.
* cour du château avec chiens, étang aux canards, arbres.
* petit bois avec des buissons et des arbres.

### scénario :

* introduction faite par Pangloss pour lui expliquer les commandes avec comme exemple de choix , de mettre du sucre dans le thé. et l'importance de toujours lui répondre oui ( optimisme) ou une connerie dans le genre. Ensuite il raconte son discours et tant qu'on ne lui répond pas "oui", il le redit en mode "non, tu n'as pas bien compris ta leçon, laisse moi te la réexpliquer"
* phase de découverte du monde ( parler aux gens etc... aller au petit bois) tant que pas allé au bois, pangloss ne change pas de discours.
* en sortant du bois, rencontre avec cunégonde ~cutscene~ rdv après le souper derrière le paravent
* souper
* scène du mouchoir , Candide se fait chasser - à développer plus que dans le livre

### trucs à dessiner :

* spritesheet Candide
* spritesheet Pangloss
* spritesheet Cunégonde
* spritesheet Baron
*  spritesheet Baronne + face
* spritesheet frère + face
* spritesheet "habitants" + face habitants //même animations, différentes couleurs etc...
* tileset terrain
* tilset maisons intérieur + extérieur , taverne
* tileset château intérieur + extérieur
* objets ( nourriture : pain etc... , mouchoir de Cunégonde ) //éventuellement

## 2ème partie : la guerre

### décors tirés du livre:

* champs, sillons
* village, maisons, cabaret : table : à boire et à manger
* cachot chez les bulgares (?)
* villages décombres avec des morts, ruines, fumée.

### scénario:

* candide se balade, il neige, les pvs sont faibles et va à waldberghofftrarbkdrickdorff.
* les maisons sont fermées sauf un cabaret. Il voit les gardes qui lancent le dialogue et Candide va à l'intérieur. Ils mangent et boivent --> pvs restaurés.
* obligation --> roi des bulgares. //illusion du choix
* Chambre fermée, exercice bulgare et si fail, moins de pvs.
* un matin, chambre ouverte, ballade et capture.
* cachot, on le bat jusqu'à 1 pv quand roi des bulgares le sauve. on le soigne et l'informe de la guerre. réveil dans les décombres.
* décors de guerre, musique avec les instruments décrits. traverse le village et arrive à un autre village ( le même mais en symétrie):
* à la fin du village warp en Hollande. // après une longue route ?

### trucs à dessiner:

* spritesheet soldats et roi bulgare ( habits bleus | les abares en rouge)
* tileset cachot et dortoir
* tilset décombres avec fumée et feu ( particules)

## 3ème partie : la Hollande

### décors tirés du livre :
* maisons, gens dans les rues
* étable de JAcques
* gars en manteau noir
* maison de martin
*  village avec un nom hollandais, un port!

### scénario :

* les pnjs ne réponde que par l 33-35 , sont hostiles envers Candide.
* cutscene : homme en manteau noir qui parle tout seul de la charité devant plusieurs hollandais
* bonne cause ? -manque de pain --> rejet ( combat philosophique avec des attaques spéciales, impossible à battre.)
*  rejet de la femme de l'orateur
* réaction de Jaques. qui l'emmène chez lui. PV restaurés, lui donne du pain, de la bière et 2 florins (écus?)
*  exploration du monde : Jaques lui dit qu'il est occupé et qu'il ferait bien de se familiariser avec les alentours.
* le joueur est sensé rencontrer Pangloss misérable.
* il a alors le choix de lui donner ses pièces.
* cutscene avec réaction de Pangloss. " ne reconnaissez vous pas votre ami?" --> lui donner une importance dans la vie de Candide, pour s'en attacher. ( et non pas "oh non encore celui là")
* mener à "l'étable" de Jaques.
* Jaques donne à Candide un remède contre la siphilis (libre au joueur de le garder ou de l'utiliser sur pangloss)
* pangloss raconte ce qu'il s'est passé pour le château et pour sa syphilis.IL A CHOPé PAR UNE MARQUISE!!!
* Jaques fait tenir ses comptes à Pangloss.
* Jaques est un marchand de ? tissu, épices , fleurs ?
* ils vont se diriger vers Lisbonne en bâteau. décider pourquoi

## partie 4 : bâteau

### scénario:
* tempête horrible. vent, pluie etc.. ( effet avec des particules?)
* les gens à bords paniquent. bâteau selon description, c'est à dire détruit par le temps)
* après avoir fait le tour des lieux (et parlé à un marin) scène avec jaques qui tombe.
* si on se dirige vers l'endroit où il est tombé, dialogue : avec "aller sauver Jacques ? "
* PANGLOSS qui répond en fonction de notre choix. ( nous en empêchant si oui, sinon, dire que nous avons raison.)
* peut-être que si débloqué qqch de spé, on peut aller le sauver.
* le bâteau se brise et il faut nager jusqu'à une plage en récupérant une planche ? (si on touche les obstacles, on perd des hp et il faut arriver à la planche intact. si on choisit de sauver Jacques, on doit sacrifier une partie de ses HP )
* planche va jusqu'à la terre ( plage).

## partie 5 : Lisbonne

### scénario:
 * tremblement de terre dès qu'ils arrivent en ville (effets de la caméra avec tweens ? )
 * ville en ruine , débris, feu, ( mots clés surlignés p. 58)
 * Candide est blessé par les pierres ( descendre les HP jusqu'à 1 ?)
 * Pangloss lui fait une théorie alors que le joueur panique (normalement)
 * Si Jaques est là, il va chercher les provisions. Sinon c'est Pangloss.
 * trouver 2-3 provisions et objets dans les décombres. pour regagner de la vie ( idéalement il ne faut manger u'un seul pain)
 * chercher les survivants et partager les provisions. ( on ne peut les sauver qu'en partageant les provisions, donc il ne faut pas les avoir mangées toutes).
 * Pangloss fait chier comme d'hab.
 * Inquisiteur qui réplique. ( il boit du vin)
 * il décide de l'auto da fé pour empêcher les tremblements ( dialogues)
 * mettre en prison Jaques ( s'il est là), Pangloss et Candide. chambre sombre et froide sans fenêtres
 * (habits cf p62)--> changement de sprite ?
 * auto da fé : pnjs randoms brûlent ( ceux du dîner ), Pangloss est pendu ( suggéré ) et Candide (plus Jacques) frappé ( on baisse ses HP)
 * sortie et rencontre avec la vieille. ( mon fils en espagnol ? mes fils si Jacques)

## partie 6 : aventures avec la vieille

### scénario
 * regagnage des HP
 * provisions
 * (si Jaques, reste chez la vieille) retrouvailles avec Cunégonde, elle raconte son histoire ( chapitre 8), expliction avec l'inquisiteur et isaachar
 * isaachar revient , premier combat. il n'a qu'un HP (indiqué de le battre) --> choix de l'achever ou pas.
 * la vieille nous interrompt mais en plein millieu de son discours,
 * l'inquisiteur revient à son tour , combat
 * si on en bat un ou les deux, cunégonde est effrayée de notre comportement (cf l28 p72)
 * fuire chez la vieille, (si Jacques, soit la vieille monte avec Cunégonde, soit il monte avec Candide). Cunégonde lui offre de l'argent
 * partir : 3 chevaux dans la nuit

## partie 7 : Cadix

### scénario
* à Cadix ( coupé un peu l'histoire, ou alors auberge sur le chemin) : ils se font voler l'argent. solution: vendre un cheval (si Jacques, soit il reste à Cadix en mode "je te retrouverai", soit il vend qqch de son artisanat)
* explorer un peu la ville de Cadix, rencontre avec Cacambo qui se propose comme valet et compagnon de voyage.
* la vieille va au port et demande de le rejoindre quand il aura fini.
* au port, rencontre avec un capitaine/marin qui engage Candide en combat ( demonstration, sans fin violent ). S'il réussit le combat, Candide et son équipe peut monter sur leur propre bâteau. (dans le livre Candide est capitaine mais il aura un conducteur privé, enfin, il donnera les ordres)
* cutscene, cunégonde qui se plaint et la vieille réplique : de tous les gens du bateau je suis certaine que mon histoire est la pire. parler aux autres gens avant de déclancher le dialogue de la vieille ?
* à trier entre ch11 et 12 les dialogues (faire simple et efficace, pas ennuyeux!), on arrive au port de Buenos-Ayres

## partie 8 : Buenos-Ayres
### scénario
 * rencontre avec le gouverneur : voir son nom p 86 ch13
 * il drague Cunégonde et demande à Candide si c'est sa femme. ( ou un truc du genre, quoi qu'il en soit, le gouverneur désire choper Cunégonde. faire en sorte d'être dans l'impasse)
 * la vieille conseille Cunégonde de l'épouser plutôt que de rester avec Candide. ( truc convaincant )
 * conseille Candide de partir loin car on est déjà au courant de ce qu'il a fait ( dépend de s'il a tué l'inquisiteur ou pas, quoi qu'il en soit, cunégonde avait piqué son argent et on le suit pour ça)
 * Cacambo et Candide partent, Cacambo le "guide" ( donne des renseignements mais il ne faut pas altérer la phase exploration).
 * Cacambo et Candide rencontre au bout d'un moment des gardes , Cacambo est traité rudement mais Candide est privilégié, il retrouve le baron ( frère de cunégonde). dialogues. On peut explorer le petit jardin et ramasser des fruits / victuailles.
 * le baron nous attaque (car refuse qu'on épouse Cunégonde). (insultes en allemand ? )
 * fuite (après avoir volé ses habits si tué). ( si tué, Cunégonde choquée pour le restant de ses jours ?)

## partie 9 : rencontre avec les orejons (voir note des indiens Xarayes)
### scénario :
* jolies prairies, exploration
* combat avec les singes(loin, qu'on ait le temps de les oublier) fuite dans la forêt.
* rencontre avec les orejons. Si singes tués et habits du baron: capturés. (interaction de Cacambo et du joueur, ? mettre une utilité à Cacambo). si baron pas tué mais singes oui, plus compliqué.... si aucun tué, Orejons amicaux, revitalisent le joueur avant de le laisser partir. (truc spécial à obtenir)
* fuite

## partie 10 : Eldorado
## scénario:
* perdu dans la forêt puis "grotte" dans montagne. le joueur doit faire un pattern spécial pour trouver l'eldorado. cocotiers
* lamas rouges, or partout. les enfants jouent avec leur or. faire en sorte d'aller les ramasser. le gars les relance au sol. (on peut se servir)
* exploration : habitants gentils, pas de boutiques, les pierres sortent du sol automatiquement. aller dans une auberge --> repas, festin (restaure les pvs)                                                
* dialogues --> conduite chez le vieux de 172 ans
* discours du vieux. (à trier p.108-112)
* carosse pour aller voir le roi ( quand ils sont prêts)
*  visite du roi : portail , pierres. filles qui font l'acceuil. le roi les acceuille chaleureusement.
* visite de l'eldorado. tout est parfait.
* éventuellement il décident de quitter l'eldorado.
* le roi leur offre des moutons (lamas) avec beaucoup d'argent.

## partie 11: retour à la réalité
### scénario
* le joueur accompagné de Cacambo traversent de multiples terrains (marais, désert, montagnes etc) et perdent beaucoup de leur moutons. il ne leur en reste que 2.
* rencontre avec l'esclave au bord du chemin.
* dialogues ( en fonction du choix de départ du thé)
* dans la ville : il y a un cabaret. rdv avec capitaine espagnol. Cacambo décide alors de partir pour retrouver Cunégonde. p.119
* exploration et embarcations pour Venise ( seule possibilité)
* Vanderdendur est d'accord de l'embarque mais pour tout son blé . ( enfin quasi )
* Vanderdendur part ensuite sans Candide
* Candide cherche à se défendre mais ça lui coûte encore une fois beaucoup d'argent. (genre un pnj qui lui dit : "j'ai vu ce qu'il s'est passé monsieur etc..")
* Un bâteau français va partir pour Paris (on saute bordeaux, désolé)
* le capitaine demande : "reviens me voir quand tu seras accompagné" parce que l'âme bien triste ou qqch du genre.
* grand souper au cabaret et le joueur enchaîne combat philo sur combat philo . Le dernier (sur 3, 4 ? ) sera imbattable (faire tout pour) et ce sera Martin, le nouveau compagnon de voyage de Candide.
* ils embarquent et Martin raconte sa vie (à inventer en fonction du livre. dans le livre Martin est vieux, dans mon jeu, il ne sera qu'usé par la vie.(27 ans??))

## partie 12 : direction paris!
### scénario :
* sur le bateau : multiples combats philosophiques , qui permettent d'apprendre plusieurs nouveaux arguments. (à trier p.126-127)
* bataille navale en face (pendant une conversation)
* sauvetage du mouton ( même épisode qu'avec Jacques ?
)
* en chemin (?) institut où on laisse le mouton (à choix ? )
* 
