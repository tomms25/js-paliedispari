// Chiedere all’utente di inserire una parola

const parolaUtente = parseInt(prompt("Scopri se la parola che hai scelto è palindroma"))

console.log(parolaUtente);

// Creare una funzione per capire se la parola inserita è palindroma


//  let parolaDivisa = parolaUtente.split("");
//  console.log(parolaDivisa);

//  parolaDivisa = parolaDivisa.reverse();
//  console.log(parolaDivisa);

//  let parolaAlContrario = parolaDivisa.join("");
//  console.log(parolaAlContrario);


function parolaAlContrario(parola) {
    let parolaEndStart = parola.split("");
    parolaEndStart = parolaEndStart.reverse();
    parolaEndStart = parolaEndStart.join("");
    return parolaEndStart;
}

function palindroma(parola, parolaReverse) {
    return parolaUtente == parolaCapovolta;
}




let parolaCapovolta = parolaAlContrario(parolaUtente);
console.log(parolaCapovolta);

if (palindroma(parolaUtente, parolaCapovolta)) {
    console.log("Esatto la parola è palindroma");
    document.getElementById("parola_scelta").innerHTML = "Esatto la parola è palindroma"
} else {
    console.log("Sbagliato! La parola che hai inserito non è palindroma");
    document.getElementById("parola_scelta").innerHTML = "Sbagliato! La parola che hai inserito non è palindroma"
}