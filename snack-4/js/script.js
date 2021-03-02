// chiedo i dati all'utente
var nomeUtente = prompt("Inserisci il tuo nome:");

// creo un contenitore degli invitati
var nomiInvitati = ["Giorgio", "Cesare", "Luca", "Loredana", "Michele", "Franca"];

// scansiono l'array e controllo che l'utente non sia già inserito
var trovatoNome = false;
for (var i = 0; i < nomiInvitati.length; i++) {
if (nomeUtente == nomiInvitati[i]) {
trovatoNome = true;
}
}
// comunico all'utente se è invitato oppure no
if (trovatoNome == true) {
	alert("Sei invitato alla festa.");
}
else {
    alert("Non sei stato invitato, mi dispiace.");
}
