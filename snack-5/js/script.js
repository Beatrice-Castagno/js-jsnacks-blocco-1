// creo un array vuoto
var numeriUtente;
var contenitoreNumeri = [];

// chiedo all'utente i numeri 6 volte e controllo se è dispari
for (i = 1; i <= 6; i++) {
  var numeriUtente = parseInt(prompt("Inserisci un numero:"));
  if (numeriUtente % 2 == 1) {
    contenitoreNumeri.push(numeriUtente);
  }
}
// stampo solo i numeri dispari inseriti dall'utente
alert("I numeri dispari inseriti nell'arrray sono: " + contenitoreNumeri);
