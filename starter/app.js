/*
Step 1: Sélectionner l'ID "result" stocker ce dernier dans une variable nommée "resultDisplay"

 Setp 2: Sélectionner l'ID "choices" stocker ce dernier dans une variable nommée "choicesDisplay"

Step 3: Créer un tableau "choices" qui contiendra 'rock', 'paper', 'scissors'

 Step 4: Afficher les choix possible sur le HTML:
     • Fais une boucle sur "choices"
     • Créer un élément 'button' depuis le fichier app.js stock le dans une variable  const button
     • Ajouter tous les choix possible sur l'élément button que vous voulez de créer
     • Afficher les choix (button) dans l'élément div#choices grâce à "appendChild" (variable "choicesDisplay")

Step 5: Afficher via un console.log le choix du user:
• Créer une fonction "handleClick" qui prend en paramétre "e" pour event.
• Dans la fonction "handleClick" fais un console.log de "e.target" - tu peux consulter la documentation https://developer.mozilla.org/fr/docs/Web/API/Event/target
• Retourne sur ta boucle du Step 4, ajoute un event click sur tes buttons - tu peux consulter la documentation https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
• Maintenant affiche le choix du user console.log(e.target.innerHTML);

Step 6: Créer un choix aléatoire réprensentant l'ordinateur dans la fonction "handleClick"
• Dans une variable "random" créer un chiffre aléatoire entre 0 et 2 en utilisateur Math.floor et Math.random
• Afficher la viariable "random"  dans un console.log
• Maintenant que vous avez un chiffre entre 0 et 2, utiliser le pour afficher le choix de l'ordinateur
  exple choices[1] // 'paper'

Step 7: Créer une fonction "getResults" pour afficher le résultat
• Fais une fonction "getResults" qui prend 2 paramétres (userChoice, computerChoice)
• Ajouter la fonction "getResults" dans la fonction "handleClick" crée en  Step 5
• Dans la fonction "getResults" fais les conditions de victoire et affiche le résultat ('You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU WIN!')
    en utilisant la variable "resultDisplay" Step 1. TU PEUX UTILISER SWITCH/CASE OU IF ELSE
• Fais de même dans le cas d'une défaite du user ('You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , YOU LOSE!')
• Pour fais le cas d'un match nul ('You chose ' + userChoice + ' and the computer chose ' + computerChoice + ' , ITS A DRAW!')


BRAVO T'ES VRAIMENT MONSTRE 👏
*/
