console.log('JS OK!');

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

let pariDispari = prompt('Vuoi un numero pari o dispari?').toLowerCase();

let utente = parseInt(prompt('Inserisci un numero da 1 a 5...'));
let computer = generaNumeroRandom(5, 1);

console.log('Hai scelto:', pariDispari);
console.log('Hai scelto il numero:', utente);

// Generiamo un numero random (sempre da 1 a 5)
// per il computer (usando una funzione).

function generaNumeroRandom(min, max) {
    const range = max - min + 1;
    const generatedNumber = Math.floor(Math.random() * range) + min;
    return generatedNumber;
}
console.log('Il computer ha scelto:', computer);

// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

function sommaPariODispari(utente, computer) {

    const somma = utente + computer;
    console.log('la somma dei due numeri è:', somma);

    if (somma % 2 !== 0) {
        console.log('la somma è Dispari');
        return 'dispari';
    } else {
        console.log('la somma è Pari');
        return 'pari';
    }
}
// Dichiariamo chi ha vinto.
let verifica = sommaPariODispari(utente, computer);

if (verifica === pariDispari) {
    console.log('Il vincitore sei tu!! Daje man :D');
} else {
    console.log('Il vincitore è Computer!! :C');
}