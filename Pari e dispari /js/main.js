// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
// Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). 
// Dichiariamo chi ha vinto.

// Inizio definendo i prompt:

// Per pari e dispari 

const opzione = prompt("Scegli pari o dispari");
console.log('Hai scelto', opzione);

// Per i numeri da 1 a 5
const numeroUtente = parseInt(prompt("Scegli un numero da 1 a 5"));
console.log('Il numero scelto è', numeroUtente);


const numeroPc = numRandom();

console.log('Il numero del pc è', numeroPc);

// Devo fare la somma tra il numero scelto dall'utente e quello del pc per capire se il risultato sia pari o dispari
let somma = numeroUtente + numeroPc;
console.log('La somma dei due numeri è', somma);


let risultato = PariODispari(somma);

// In caso di vittoria avrò

if (opzione === "pari" && risultato === true){
  console.log("Hai vinto!");
} 
else if (opzione === "dispari" && risultato === false){
  console.log("Hai vinto!")
}
// In caso di sconfitta avrò
 else {
  console.log("Hai perso, riprova");
}



// Scrivo le funzioni generando un numero random da 1 a 5

function numRandom(min, max) {
    // Devo definire i valori di min e massimo, che saranno 1 e 5
  min = 1; 
  max = 5;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Scrivo la funzione per capire se il risultato è pari o dispari

function PariODispari(pari) {
  if (pari % 2 === 0) {
    console.log("il risultato è pari");
    return true;
  } else {
    console.log("il risultato è dispari");
    return false;
  }
}