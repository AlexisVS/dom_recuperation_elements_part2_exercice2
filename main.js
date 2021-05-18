// # Instructions :
// >*Les exercices suivants doivent être résolus en utilisant getElementsByTagName*, mis à part si il est précisé d'utiliser autre chose*

// >*Cherche des methodes pour résoudre les énoncés suivants :*

// ### 1. Affiche le h3 qui est le premier enfant de la div content
console.log(document.querySelector('#content').querySelector('h3'));
// ### 2. Affiche le titreNiv3
console.log(document.querySelector('#titreNiv3'));
// ### 3. Affiche l'élément qui précède le titreNiv3
console.log(document.querySelector('#titreNiv3').previousElementSibling);
// ### 4. Affiche l'élément qui succède a petitParagraphe en utilisant la méthode nextElementSibling
console.log(document.querySelector('.petitParagraphe').nextElementSibling);
// ### 5. Affiche le parent des éléments ayant comme class "important" 
console.log(document.querySelector('.important').parentElement);
// ### 6. Affiche le premier enfant, du parent de "listElements"
console.log(document.querySelector('#listElements').children[0]);
// ### 7. Affiche l'élément qui succède le dernier élément ayant la class "important"
console.log(document.getElementsByClassName("important")[3].nextElementSibling);
// ### 8. Affiche l'élément qui succède celui qui succède a l'élément ayant comme id "textGeneral" 
console.log(document.getElementById("textGeneral").nextElementSibling.nextElementSibling);
// ### 9. En partant du span Nom affiche l'élément "p" (ayant un span Prénom)
console.log(document.querySelector("#footer span").parentElement.nextElementSibling.innerHTML)
// ### 10. En partant de Nicolas, affiche Primo
console.log(document.querySelector("#footer span").parentElement.nextElementSibling.querySelector("span b").parentElement.parentElement.previousElementSibling.querySelector('span b').innerHTML)
// ### 11. Trouve une methode de récupération qui permet de récupérer "un" élément via sa class ou son id sans utiliser getElementById ou getElementsByClassName et récupère "grandParagraphe"
console.log(document.querySelector('.grandParagraphe'));
// ### 12. Trouve une methode qui permet de récupérer plusieurs éléments, qu'ils aient des class ou non et affiche tous les li dansu ne boucle
let li = document.querySelector('#listElements').querySelectorAll("li");
console.log(li);
li.forEach(element => {
    console.log(element.innerHTML);
});