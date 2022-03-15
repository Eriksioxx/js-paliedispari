console.log('JS OK!');

// ************Palidroma*************
// Chiedere all’utente di inserire una parola

// LOGICA PER SVOLGERE L'ESERCIZIO

/*let word = prompt('Inserisci una parola palindroma').toLowerCase().split('');
console.log(word);

let wordReverse = word.reverse();
console.log(wordReverse);
  
let wordJoin = wordReverse.join('');
console.log(wordJoin);

if (word === wordReverse) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}*/

// Creare una funzione per capire se la parola inserita è palindroma

let word = prompt('Inserisci una parola palindroma').toLowerCase();

while (!word || word.length === 0) {
    word = prompt('Inserisci una parola palindroma').toLowerCase();
}

console.log(word);

// Dobbiamo fare un reverse della parola inserita e 
// confrontarla con quella dell'utente

const reverseWord = invertWord(word);
console.log(reverseWord);



function invertWord(wordArgument) {

    let inverted = '';

    // creo un ciclo che va da 0 alla lunghezza in caratteri della stringa
    for (let i = 0; i < wordArgument.length; i++) {
        // recupero il carattre all'interno della stringa alla posizione i 
        // (0 indica il primo carattere, 1 al secondo carattere e cosi via...)
        const char = wordArgument.charAt(i);
        console.log(char);

        inverted = char + inverted;
    }

    return inverted;
}

// Controllo se è o no palindroma 

if (word === reverseWord) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}