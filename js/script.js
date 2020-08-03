//chiedi nome utente e salvalo in una variabile
var nome = prompt("Inserisci il tuo nome!");
//chiedi cognome e salvalo
var cognome = prompt("Inserisci il tuo cognome!");
//chiedi colore preferito
var color = prompt("Inserisci il tuo colore preferito!");


//stampa a video
document.getElementById('generator').innerHTML = nome + cognome + color + "19";
