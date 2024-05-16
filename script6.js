// Définition du code génétique (codons correspondants aux acides aminés)
const codeGenetique = {
  "UCU": "Sérine", "UCC": "Sérine", "UCA": "Sérine", "UCG": "Sérine",
  "AGU": "Sérine", "AGC": "Sérine", "CCU": "Proline", "CCC": "Proline",
  "CCA": "Proline", "CCG": "Proline", "UUA": "Leucine", "UUG": "Leucine",
  "UUU": "Phénylalanine", "UUC": "Phénylalanine", "CGU": "Arginine",
  "CGC": "Arginine", "CGA": "Arginine", "CGG": "Arginine", "AGA": "Arginine",
  "AGG": "Arginine", "UAU": "Tyrosine", "UAC": "Tyrosine"
};

// Fonction pour traduire un ARN en protéines
function traduireARNenProteines(ARN) {
  // Initialisation de la séquence de protéines
  let proteines = "";

  // Découper l'ARN en codons (groupes de 3 lettres) à l'aide d'une boucle for
  for (let i = 0; i < ARN.length; i += 3) {
      const codon = ARN.slice(i, i + 3); // Extraire chaque codon
      proteines += (codeGenetique[codon] || "Inconnu") + "-"; // Traduire et ajouter à la séquence de protéines
  }

  // Retourner la séquence de protéines (en retirant le dernier "-")
  return proteines.slice(0, -1);
}

// ARN à traduire
const ARN1 = "CCGUCGUUGCGCUACAGC";
const ARN2 = "CCUCGCCGGUACUUCUCG";

// Traduction des ARN en protéines et affichage
console.log("Protéines pour ARN1:", traduireARNenProteines(ARN1));
console.log("Protéines pour ARN2:", traduireARNenProteines(ARN2));
