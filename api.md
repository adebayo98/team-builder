# Liste des routes de l'api

##### Demander un jeton d'authentification
* POST {domain}/api/user/credentials

##### Demander la liste formations
* GET {domain}/api/formations

##### Demander la liste des types de compétences
* GET {domain}/api/skills

##### Demander la liste des types de compétences
* GET {domain}/api/skill/types

##### Demander la liste des types de compétences
* GET {domain}/api/skill/notes

##### Inscription
* POST {domain}/api/user/register

##### Demander la liste utilisateurs
* GET {domain}/api/users

##### Demander la liste aléatoire d'utilisateur
* GET {domain}/api/users/random/{limit}

##### Demander un utilisateur
* GET {domain}/api/user/{user.id}

##### Demander les compétences d'un utilisateur
* GET {domain}/api/user/{user.id}/skills

##### Demander une liste filtrer
* GET {domain}/api/users/filter

##### Mettre à jour un utilisateur
* PUT {domain}/api/user/{user.id}

