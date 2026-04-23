# React – TP Hooks Avancés (Niveau Débutant)
## Description
Ce projet est une application React regroupant plusieurs exemples pratiques pour découvrir et manipuler les Hooks avancés.
Il illustre l’utilisation de useReducer, useRef, useEffect, useState et d’un Hook personnalisé useFetch.
L’objectif est de fournir une base pédagogique claire pour les débutants souhaitant comprendre la puissance des Hooks dans React.

## Structure du projet

````

TP-Hooks-Avancés/
├── src/
│   ├── App.js
│   ├── Compteur.js
│   ├── FocusInput.js
│   ├── CompteurRendu.js
│   ├── ListeArticles.js
│   ├── Timer.js
│   ├── useFetch.js
│   └── App.css
└── public/

````


## Fonctionnalités
````
🔢 Compteur avec useReducer
Gestion d’état via un reducer et des actions.
Actions disponibles : increment, decrement, reset.
````
🎯 FocusInput avec useRef
Utilisation de useRef pour cibler un champ input.
Bouton permettant de mettre le focus automatiquement.
````
🔄 Compteur de rendus
Utilisation combinée de useRef et useEffect pour compter le nombre de rendus du composant.
Résultat affiché dans la console.
````
📑 Liste d’articles avec useFetch
Hook personnalisé useFetch pour récupérer des données depuis une API.
Gestion des états : chargement, erreur, données.
````
⏱️ Timer avec nettoyage d’effet
Utilisation de useState et useEffect pour créer un timer.
Mise à jour de l’heure en temps réel.
Nettoyage automatique de l’intervalle pour éviter les fuites mémoire.

````
🎨 Interface
Design simple et épuré avec App.css.
Mise en page centrée et responsive.
Boutons stylisés avec hover et couleurs distinctes (notamment pour le bouton Reset).

````
```` 
## Exemple d’exécution
