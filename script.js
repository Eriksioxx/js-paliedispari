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

let wordJoin = parolaPalindroma(word);

if (word === wordJoin) {
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
}

function parolaPalindroma(ciccio) {
    let ciccioInverso = ciccio.split('').reverse().join('');
    return ciccioInverso;
}