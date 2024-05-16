// Afficher un prompt pour demander à l'utilisateur combien d'étages il veut
let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertir l'entrée utilisateur en nombre entier
let nombreEtages = parseInt(etages);

// Vérifier si l'entrée utilisateur est un nombre valide
if (isNaN(nombreEtages) || nombreEtages <= 0) {
    console.log("Veuillez entrer un nombre valide supérieur à 0.");
} else {
    // Générer la pyramide
    for (let i = 1; i <= nombreEtages; i++) {
        let espace = ' '.repeat(nombreEtages - i);
        let diese = '#'.repeat(i);
        console.log(espace + diese);
    }
}
