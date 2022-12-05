/* 

1-questions
2-operations
3-result

*/

// Preparo l'elemento che deve essere riempito
const placeholder = document.getElementById('amount');

// Chiedo all'utente l'età
const age = prompt('Age?');

// Chiedo all'utente la quantità dei chiolometri che vuole percorrere
const distance = prompt('Quanti chilometri vuole percorrere?');

// Dati
const ticket = 0.21

const a = age
const x = distance 

let amount = distance * ticket

// Operazioni
if (a >= 21){
    message = 'maggiorenne';
    if (a >= 65){
        message = 'over';
        message = ( amount - ( amount * 40 / 100));
    } else {
        message = 'under';
        message = (amount);
    }
} else {
    message = 'minorenne';
    message = ( amount - ( amount * 20 / 100));

}

console.log(message)


// Colleziono i dati e li inserisco nella risposta
placeholder.innerText = (message);




