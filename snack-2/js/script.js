// chiedi all'utente di inserire le parole
var primaParola = prompt("Inserisci la prima parola:");
var secondaParola = prompt("Inserisci la seconda parola:");

// controllo quale parola è più lunga o se sono uguali
if (primaParola.length > secondaParola.length) {
  alert("La prima parola è più lunga della seconda parola");
} else if (primaParola.length < secondaParola.length) {
  alert("La seconda parola è più lunga della prima parola.");
} else {
  alert("Le parole sono lunghe uguali");
}
