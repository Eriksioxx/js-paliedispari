console.log('JS OK!');

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const pariDispari = prompt('Vuoi un numero pari o dispari?').toLowerCase();
const number = parseInt(prompt('Inserisci un numero da 1 a 5...'));

console.log('Hai scelto:', pariDispari);
console.log('Hai scelto il numero:', number);

// Generiamo un numero random (sempre da 1 a 5)
// per il computer (usando una funzione).

let computer = computerNumber();

function computerNumber(numberRandom) {
    let random = Math.floor(Math.random() * 5) + 1;
    return random;
}

console.log('Il computer ha scelto:', computer);

// Sommiamo i due numeri

let somma = number + computer;

console.log('La somma dei due numeri è:', somma);

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)



function sommaPariODispari()

if (somma % 2 !== 0) {
    console.log('La somma è Dispari');
} else {
    console.log('La somma è Pari');
}



// Dichiariamo chi ha vinto.