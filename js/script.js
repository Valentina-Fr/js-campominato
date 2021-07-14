//STEP
//1 aggiungo array bombe vuoto
//2 aggiungo array numeri utente vuoto
//3 funzione per randomizzare numero da 1 a 100
//4 invoco la funzione 16 volte e inserisco numeri nell'array

//5 chiedere al giocatare numero da 1 a 100
//6 verificare se è presente nell'array bombe, se si termina partita
//7 verificare se è presente nell'array utetente ed aggiungere. Se è presente richiedere numero.
//8 continuare a chiedere per 100 - 16 volte

//9 a termine partita stampare messaggio e punteggio


//Array bombe
let bombArray = [];

//Array numeri scelti dall'utente
let userArray = [];

//Scelta difficoltà 
let levelChoice;
let min;
let max;

do {levelChoice = parseInt(prompt("Inserisci livello: 0, 1 o 2", "2"))}
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

    case 2:
    min = 1;
    max = 50;
} 

//Randomizzare 16 numeri
while (bombArray.length < 16) {
    let random = bombRandom(max, min);
    if (!isListed(random, bombArray)) {
        insert(random, bombArray);
    }
}
console.table(bombArray);

//Scelta numeri utente
let userNumber;

while (max - bombArray.length !== userArray.length && !isListed(userNumber, bombArray)) {
    do {userNumber = parseInt(prompt("Scegli un numero da " + min + " a " + max))}
    while (isNaN(userNumber) || userNumber < min || userNumber > max);
    if(isListed(userNumber, bombArray)) {
        alert ("Hai perso, il tuo totale punti è: " + userArray.length);
    } else if (!isListed(userNumber, userArray)) {
        insert(userNumber, userArray); 
    } 
    if (max - bombArray.length === userArray.length) {
        alert ("Hai vinto, il tuo totale punti è " + userArray.length);
    } 
}

console.table(userArray); 

//Funzione che randomizza numero 
function bombRandom (numMax, numMin) {
    return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

//Funzione che controlla la presenza di un elemento in un array 
function isListed(num, numArray){
    if (numArray.includes(num)){
       return isListed;
    } 
}

//Funzione che inserisce elemento in un array
function insert (num, numArray) {
    return numArray.push(num);   
}
