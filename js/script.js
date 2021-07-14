//STEP
// aggiungo array bombe vuoto
//2 aggiungo array numeri utente vuoto
//3 funzione per randomizzare numero da 1 a 100
//4 invoco la funzione 16 volte e inserisco numeri nell'array

//5 chiedere al giocatare numero da 1 a 10
//6 verificare se è presente nell'array bombe, se si termina partita
//7 verificare se è presente nell'array utetente ed aggiungere. Se è presente richiedere numero.
//8 continuare a chiedere per 100 - 16 volte

//9 a termine partita stampare messaggio e punteggio


//Array bombe
let bombArray = [];

//Array numeri scelti dall'utente
let userArray = [];

//Randomizzare 16 numeri
while (bombArray.length < 16) {
    let random = bombRandom(100, 1);
    if (!isListed(random, bombArray)) {
        insert(random, bombArray);
    }
}
console.table(bombArray);

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
