# Projet Trackada

## Présentation
- checktrack.js : Code contenant les fonctions (ouvrir pour tester)
- package.json : Initialisation du package, modif effectuée : type = module
- track.json : Données qui serviront de comparaison avec les dossiers réels

## Utilisation
``ETAPE 1 - Télecharger``

Cloner le dépot git :
- Dans le terminal, se déplacer dans l'endroit souhaité pour cloner le dossier (cd)
- Cloner via HTML : git clone https://github.com/NicoProgNb/Trackada-Nico.git
        ou
- Cloner via SSH : git clone git@github.com:NicoProgNb/Trackada-Nico.git

``ETAPE 2 - Executer``

- Ouvrir checktrack.js sur vsCode
- Ouvrir le terminal
- Taper le code suivant : node checktrack.js

## Commentaire
En suivant les consignes, les chemins sont absolus via homedir() que l'on a importé. 
Pour que tout n'apparaisse pas en "false" chez un utilisateur autre, cela incite à avoir la même disposition de dossier. 

## Piste d'amélioration
Séparer la recherche du dossier parent nommé "projets" (chemin absolu),
de la recherche de chacun des projets (chemin relatifs)