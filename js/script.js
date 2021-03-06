//STEP
//1 aggiungo array bombe vuoto
//2 aggiungo array numeri utente vuoto
//3 funzione per randomizzare numero da 1 a 100
//4 invoco la funzione 16 volte e inserisco numeri nell'array

//5 chiedere al giocatare numero da 1 a 100
//6 verificare se è presente nell'array bombe, se si termina partita
//7 verificare se è presente nell'array utente ed aggiungere. Se è presente richiedere numero.
//8 continuare a chiedere per 100 - 16 volte

//9 a termine partita stampare messaggio e punteggio


//Array bombe
const bombArray = [];

//Array numeri scelti dall'utente
const userArray = [];

//Scelta difficoltà 
let levelChoice;
let min;
let max;

do {levelChoice = parseInt(prompt("Inserisci livello: 0 (facile), 1 (normale) o 2 (difficile)", "2"))}
while (isNaN(levelChoice) || levelChoice < 0 || levelChoice > 2);

switch (levelChoice) {
    case 0:
    min = 1;
    max = 100;
    break;

    case 1:
    min = 1;
    max = 80;
    break;

    default:
    min = 1;
    max = 50;
} 

//Randomizzare 16 numeri
while (bombArray.length < 16) {
    const random = bombRandom(max, min);
    if (!isListed(random, bombArray)) {
        insert(random, bombArray);
    }
}
console.table(bombArray);

//Scelta numeri utente
let userNumber;
let userLost = false;

while ((max - bombArray.length) !== userArray.length && !userLost) {
    do {userNumber = parseInt(prompt("Scegli un numero da " + min + " a " + max))}
    while (isNaN(userNumber) || userNumber < min || userNumber > max);
    if(isListed(userNumber, bombArray)) {
       userLost = true;
    } else if (!isListed(userNumber, userArray)) {
        insert(userNumber, userArray); 
        if((max - bombArray.length) !== userArray.length) {
            alert("Il tuo punteggio provvisorio è " + userArray.length);
        }
    } 
}
console.table(userArray); 

if (userLost) {
    alert ("Hai perso, il tuo punteggio totale è: " + userArray.length); 
} else {
    alert ("Hai vinto, il tuo punteggio totale è: " + userArray.length);
}

//**************** Elenco funzioni

//Funzione che randomizza numero 
function bombRandom (numMax, numMin) {
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

//Funzione che controlla la presenza di un elemento in un array 
function isListed(num, numArray){
    let isListed = false;
    if (numArray.includes(num)){
        isListed = true;
    } 
    return isListed
}

//Funzione che inserisce elemento in un array
function insert (num, numArray) {
    numArray.push(num);   
}
