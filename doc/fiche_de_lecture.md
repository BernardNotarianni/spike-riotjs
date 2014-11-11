# Fiche de lecture de la documentation

Ce document résume la documentation "officielle" de riojts.

## Le blog original

https://muut.com/blog/technology/riotjs-the-1kb-mvp-framework.html

### Introduction

L'article commence par une explication des motivations pour créer
riot-js. Cela recouvre essentiellement deux aspects:

**La simplicité**

L'auteur compare notamment la taille de la lib avec ses principaux
concurrents AngularJS ou EmberJS. Il argumente en faveur de librairies
plus petites, plus simples à comprendre et à donc avec moins de bugs.

**Les performances**

L'auteur présente plusieurs tests de performances qui mettent en
valeur riotjs.

### Architecture MVP

L'article se poursuit avec la présentation du modèle MVP (ou MVC). Il
utilise un vocabulaire à lui, mais au final, c'est toujours le meme
pattern que nous connaissons bien:

Un **model** bien isolé et autonome. L'auteur prétend qu'il s'agit d'un POJO
sans dépendance au framework, ce qui est globalement vrai. Cependant, on
remarquera que l'expemple TODO utilise quand meme des API de RiotJS tel que
`observable` ou `self.on`. 

On remarque le style suivant dans le code du model:
- les API sont définie à l'aide de l'idiome `self.add = function (label) {...`
- chaque définition de fonction de l'API se termine par le déclenchement
d'un évenement RiotJS portant le même nom que la fonction, par exemple `self.trigger('add', item)`

L'article décrit ensuite les 3 principales API de RiotJS:
- `riot.observable(obj)` pour rendre un objet capable de recevoir des events riot
- `obj.trigger(event_name, args...)` declenche un événement sur un objet
- `obj.on(event_name, fn)` intercepte les événements recu par l'objet

Ces 3 fonctions sont les seules à vraiment bien comprendre et utiliser. C'est
l'essentiel de ce qu'apporte RiotJS.

Une **view** est un morceau de HTML rendu par le browser. RiotJS propose
simplement un mécanisme de rendu de template pour faciliter la création et la
réutilisation des views.

Un **presenter** est responsable de tout mettre en place. Il instancie (ou
récupère) le model et génére la view pertinente pour l'utilisateur. Il écoute
les événements DOM qui peuvent arriver sur la view et déclenche les
traitements appropriés sur le model. Le presenter écoute également les
évenements RiotJS sur son model pour les répercuter si cela est pertinent sur
la view.

L'article indique que l'on peut avoir plusieurs presenters au sein de la même
application pour découper la logique mais ne fournit pas d'exemples sur la
manière de faire concretement.

### Routage

Cette partie décrit comment la navigation par URL est réalisée en RiotJS. Elle se base sur une uniquement fontion `riot.route`.

L'exemple est assez parlant et se décompose en deux parties:
1. On intercepte l'évenement DOM de click, par exemple sur un lien *a href* et
on déclenche alors l'appelle à la fonction `riot.route(some_param)`.
2. On déclare le comportement de `riot.route(function (some_param))`
qui pourra faire les choses adaptées en réponse au déclenchement de changement de route.


## La doc officielle

https://muut.com/riotjs/docs/

