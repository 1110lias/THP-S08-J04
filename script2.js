// Définir la fonction factorielle
function factorielle(n) {
  if (n < 0) return "La factorielle n'est pas définie pour les nombres négatifs.";
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
      result *= i;
  }
  return result;
}

// Afficher un prompt pour demander à l'utilisateur de saisir un nombre
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertir l'entrée utilisateur en nombre entier
let nombreEntier = parseInt(nombre);

// Vérifier si l'entrée utilisateur est un nombre valide
if (isNaN(nombreEntier)) {
  console.log("Veuillez entrer un nombre valide.");
} else {
  // Calculer la factorielle du nombre
  let resultat = factorielle(nombreEntier);
  // Afficher le résultat dans la console
  console.log("Le résultat est : " + resultat);
}
