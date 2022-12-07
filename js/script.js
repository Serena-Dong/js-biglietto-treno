/* 
1-questions
2-operations
3-result
*/

// Preparo l'elemento che deve essere riempito
const placeholder = document.getElementById('amount');


// Chiedo all'utente l'età
const age = prompt('Quanti anni hai?');

// Chiedo all'utente la quantità dei chiolometri che vuole percorrere
const distance = prompt('Quanti chilometri vuole percorrere?');

// Dati
const ticket = 0.21

const a = age
const x = distance 

let price = distance * ticket
const minorDiscount = (price * 20) / 100
const overDiscount = (price * 40) / 100

// Operazioni
if (a >= 21){
    message = 'maggiorenne';
    if (a >= 65){
        message = 'over';
        tot = ( price - overDiscount);
        document.getElementById("initial-amount").innerHTML =`<p>Prezzo Iniziale: € ${price}</p>`;
        document.getElementById("discount-amount").innerHTML = `<p>Sconto Applicato: € ${overDiscount.toFixed(2)}</p>`;

    } else {
        message = 'under';
        tot = (price);
    }
} else {
    message = 'minorenne';
    tot = ( price - minorDiscount);
    document.getElementById("initial-amount").innerHTML =`<p>Prezzo Iniziale: € ${price}</p>`;
    document.getElementById("discount-amount").innerHTML = `<p>Sconto Applicato: € ${minorDiscount.toFixed(2)}</p>`;

}

console.log(message)

// Colleziono i dati e li inserisco nella risposta
placeholder.innerText = (tot.toFixed(2));