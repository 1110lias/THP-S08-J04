
const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Question 1: Est-ce que tous les livres ont été au moins empruntés une fois ?
const tousEmpruntes = books.every(book => book.rented > 0);
console.log("Est-ce que tous les livres ont été au moins empruntés une fois ?", tousEmpruntes ? "Oui" : "Non");

let livrePlusEmprunte = books[0]; 

for (let i = 1; i < books.length; i++) {
    const book = books[i];
    if (book.rented > livrePlusEmprunte.rented) {
        livrePlusEmprunte = book;
    }
}

console.log("Le livre le plus emprunté est :", livrePlusEmprunte.title);

// Question 3: Quel est le livre le moins emprunté ?
const livreMoinsEmprunte = books.reduce((minRented, book) => book.rented < minRented.rented ? book : minRented);
console.log("Méthode 1. Le livre le moins emprunté est :", livreMoinsEmprunte.title);

// Pour trouver le livre le moins emprunté methode 2:
const livreMoinsEmprunte2 = books.find(book => book.rented === Math.min(...books.map(book => book.rented)));

console.log("Méthode 2. Le livre le moins emprunté est :", livreMoinsEmprunte2.title);

// Pour trouver le livre le moins emprunté Méthode 3: Utiliser la boucle for...of avec une comparaison directe.
let livreMoinsEmprunte4 = books[0];

for (const book of books) {
    if (book.rented < livreMoinsEmprunte4.rented) {
        livreMoinsEmprunte4 = book;
    }
}

console.log("Méthode 3. Le livre le moins emprunté est :", livreMoinsEmprunte4.title);

//Pour trouver le livre le moins emprunté Méthode 4: Utiliser la fonction reduce() avec une fonction externe :
function trouverLivreMoinsEmprunte(books) {
  return books.reduce((minRented, book) => book.rented < minRented.rented ? book : minRented);
}

const livreMoinsEmprunte5 = trouverLivreMoinsEmprunte(books);
console.log("Méthode 4. Le livre le moins emprunté est :", livreMoinsEmprunte5.title);


// Question 4: Trouve le livre avec l'ID: 873495
const livreID873495 = books.find(book => book.id === 873495);
console.log("Le livre avec l'ID 873495 est :", livreID873495.title);

// Question 5: Supprime le livre avec l'ID: 133712
const indexToRemove = books.findIndex(book => book.id === 133712);
if (indexToRemove !== -1) {
  books.splice(indexToRemove, 1);
  console.log("Le livre avec l'ID 133712 a été supprimé.");
} else {
  console.log("Aucun livre trouvé avec l'ID 133712.");
}

// Question 6: Trie les livres par ordre alphabétique (sans celui avec l'ID 133712 car il est supprimé)
const livresTries = books.filter(book => book.id !== 133712).sort((a, b) => a.title.localeCompare(b.title));
console.log("Livres triés par ordre alphabétique :", livresTries);
