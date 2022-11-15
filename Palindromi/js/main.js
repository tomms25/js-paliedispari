// Chiedere all’utente di inserire una parola

// Creare una funzione per capire se la parola inserita è palindroma. 

// Dare output relativo.

const parolaImmessa = prompt('Inserisci una parola');

// console.log("La tua parola è:" + " " + parolaImmessa);


// Devo verificare se la parola iniziale e quella invertita combaciano 
const parolaUtenteInvertita = invertiParola(parolaImmessa);

if(parolaImmessa === parolaUtenteInvertita){
  console.log('la parola è palindroma');
} else {
  console.log('la parola non è palindroma');
}


// Con una funzione cerco di verificare se la parola che l'utente inserisce è effettivamente palindroma
// Uso split per dividere la parole, reverse per invertirla e join per riunirla



function invertiParola(palindroma) {
  const parolaInvertita = palindroma.split('').reverse().join('');
  return parolaInvertita;
}