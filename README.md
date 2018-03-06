# LIAnno

## Choix des technologies

Front end très simple en CSS / Javascript / HTML5. Utilisation seulement d'un petit framework (MiLligram, licence MIT) pour des champs de formulaire plus beaux.
Grâce aux flexbox (une propriété CSS) le site est responsive et peut être utilisé sur n'importe quelle plateforme : portable, tablette, PC.

Pour modifier le CSS il est nécessaire de lire la documentation sur les flexbox. Un bon tutoriel se trouve ici : https://css-tricks.com/snippets/css/a-guide-to-flexbox/

Note : A décider si l'on conserve le Framework sous licence MIT. Possible sans, moins beau mais tout fonctionne.

Par ailleurs, étant donné qu'aucun framework lourd est utilisé, le chargement des pages est très très rapide même sur une machine peu puissante (encore une fois, intéressant pour les portables.)

## Différents écran

### Premier écran
Présentation de la collecte de données. Rien de spécial pour la première passe. On peut envisager un "tuto" avec des exemples pour la seconde si l'on fait annoter avec des catégories.

### Second écran
Demande du genre de la personne en champ libre (note : texte à modifier). Je pense qu'il vaudrai mieux avoir des bouton HOMME/FEMME/INPUT LIBRE plutôt qu'un input libre pour tout le monde. Cela permet de beaucoup simplifier le post traitement. Cependant, dans un soucis de non discrimination, le groupe a voté pour qu'il y ai uniquement un champs libre. Note : On peut pour l'instant passer cette page sans répondre, à voir si on modifie cela.

### Ecran principal, annotations
Question, suivie du texte à annoter et deux boutons "sexiste" ou "pas sexiste". On ne peut pas cliquer sur suivant sans avoir annoter. Doit-on envisager un bouton PASSER ? ou 'je ne sais pas'?

### Ecran de collection / Final
Contient des remerciements et des petites icones débloquées au fur et à mesure des annotations

## Boutons & champs

### Abandonner/Fermer
Envoie les informations au serveur si nécessaire et ferme la page

### Suivant/C'est parti/Terminer
Permet de passer à la page suivante. Ce bouton peut être bloqué (notamment quand on n'a pas selectionné de réponse à une question dont la réponse est obligatoire), pour le débloquer, il suffit de selectionner une option.
Par ailleurs, d'un point de vue technique cela est géré grâce à la classe CSS .notActive qui est activée ou non grâce au javascript. Pour plus d'information sur le fonctionnement du javascript, voir les commentaires dans le code.

### Sexiste/Pas sexiste
Note : J'avais pensé à Sexiste/Neutre, mais cela peut porter à confusion. Un énoncé non sexiste peut ne pas être neutre.
Ces boutons permettent d'annoter le texte. Lorsque l'un des deux est selectionné, il est mis en surbrillance (vert plus foncé) grâce à la pseudo-class CSS :active. Cette classe est désactivée pour tous les boutons (sauf celui concerné) dès qu'un bouton est cliqué. Cliquer sur un des deux boutons débloque le bouton "suivant" permettant de passer au texte suivant, et annote le texte courant.

### Champs commentaire
Permet à l'annotateur de préciser quelque chose en plus de son annotation, en cas de doute ou autre problème.