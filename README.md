# Projet Trackada

## Présentation
- checktrack.js : Code contenant les fonctions (ouvrir pour tester)
- package.json : Initialisation du package, modif effectuée : type = module
- track.json : Données qui serviront de comparaison avec les dossiers réels

## Utilisation
>> Option 1
- Ouvrir checktrack.js sur vsCode
- Ouvrir le terminal
- Taper le code suivant : node checktrack.js

>> Option 2 (si l'on sait s'y déplacer via "cd")
- Ouvrir le terminal
- Se déplacer dans le dossier "projets"
- Taper le code suivant : node checktrack.js

## Commentaire
En suivant les consignes, les chemins sont absolus via homedir() que l'on a importé. 
Pour que tout n'apparaisse pas en "false", cela incite à avoir la même disposition de dossier. 

## Piste d'amélioration
Faire des chemins relatifs (./projets)