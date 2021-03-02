// chiedo all'utente di inserire i numeri
var primoNum = parseInt(prompt("Inserisci il primo numero:"));
var secondoNum = parseInt(prompt("Inserisci il secondo numero:"));
// controllo che non siano caratteri sbagliati
if (isNaN(primoNum) || isNaN(secondoNum)) {
	alert("I dati che hai inserito non sono corretti. Riprova.");
}
// controllo quale numero è maggiore o se sono uguali
if (primoNum > secondoNum) {
  alert("Il numero maggiore è: " + primoNum);
} else if (secondoNum > primoNum) {
  alert("Il numero maggiore è: " + secondoNum);
} else {
  alert("I numeri che hai inserito sono uguali: " + primoNum + secondoNum);
}
