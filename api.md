# Liste des routes de l'api

##### Demander un jeton d'authentification
* POST {domain}/api/user/credentials

##### Demander la liste des formations
* GET {domain}/api/formations

##### Demander la liste des compétences
* GET {domain}/api/skills

##### Demander la liste des types de compétences
* GET {domain}/api/skill/types

##### Demander la liste des notes des compétences
* GET {domain}/api/skill/notes

##### Ajouter ou modifer une compétence
* POST {domain}/api/user/{user.id}/skill/{skill.id}/{note}

##### Supprimer une compétence d'un utilisateur
* DELETE {domain}/api/user/{user.id}/skill/{skill.id}

##### Inscription
* POST {domain}/api/user/register

##### Demander la liste des utilisateurs
* GET {domain}/api/users

##### Demander une liste aléatoire d'utilisateur
* GET {domain}/api/users/random/{limit}

##### Demander un utilisateur
* GET {domain}/api/user/{user.id}

##### Demander les compétences d'un utilisateur
* GET {domain}/api/user/{user.id}/skills

##### Demander une liste d'utilisateur filtrer
* GET {domain}/api/users/filter

##### Mettre à jour un untilisateur
* PUT {domain}/api/user/{user.id}

