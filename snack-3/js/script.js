// chiedo all'utente 10 numeri
var somma = 0;
for (var i = 1; i <= 10; i++) {
  var numeriUtente = parseInt(prompt("Inserisci un numero:"));
  somma = somma + numeriUtente;
}
// stampo i numeri inseriti dall'utente
alert ("Hai inserito questi numeri: " + somma);
