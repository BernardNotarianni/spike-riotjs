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

L'article se poursuit avec la présentation du modèle MVP (ou MVP). Il
utilise un vocabulaire à lui, mais au final, c'est toujours le meme
pattern que nous connaissons bien:

Un *model* bien isolé et autonome. L'auteur prétend qu'il s'agit d'un
POJO sans dépendance au framework, ce qui est globalement
vrai. Cependant, on remarquera que l'expemple TODO fourni utilise
quand meme des API de RiotJS tel que observable ou self.on.


- 


## La doc officielle

https://muut.com/riotjs/docs/

