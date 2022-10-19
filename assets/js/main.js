/*Visualizzare in pagina 5 numeri casuali. 
    -creo una funzione a parte math.random 
    -creo un array vuoto in cui inserire i 5 numeri casuali con un ciclo while
    -mi seleziono in pagina l'elemento e gli inserisco dinamicamente i numeri

Da lì parte un timer di 30 secondi. 
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt(). 
    -attraverso setTimeout do un delay di 30 secondi alla funzione che mi farà poi togliere i numeri dallo schermo
    -inserisco i prompt sempre all'interno della funzione sopra, probabilmente con un ciclo for

Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    -devo confrontare i numeri inseriti dall'utente con i numeri dell'array random
    -stampo a schermo i numeri indovinati e qaunti
        -se il numero è contenuto nell'array allora lo stampo e aumento il counter del punteggio di 1
        -altrimenti niente
*/

const numbElement = document.querySelector(".number");
const scoreElement = document.querySelector(".score");
//const userNumberArr = [];
const randomNumberArr = [];
const finalArray = [];

function generateNumber(max) {
   return Math.floor(Math.random() * max);
}

let randomNumberPc = 0;
while (randomNumberArr.length !== 5) {
    randomNumberPc = generateNumber(100);
    //console.log(randomNumberPc);
    if (!randomNumberArr.includes(randomNumberPc)) {
        randomNumberArr.push(randomNumberPc)
    }
    
    
}
//console.log(randomNumberArr);
//utilizzo join per togliere le virgole e rendere i miei numeri una stringa da stampare a schermo
let numberString = randomNumberArr.join(" ");
//console.log(numberString);

//stampo a schermo
numbElement.innerHTML = numberString;

//timer
let count = 0;
const emptyDom = setTimeout(function(){
    numbElement.innerHTML = "";
},30000)

const timer = setTimeout(function(){
    
    for (let i = 0; i < 5; i++) {
        const userNumber = Number( prompt("Inserire un numero"));
        if (randomNumberArr.includes(userNumber)) {
            finalArray.push(userNumber)
            count++
        }
    }
    numbElement.innerHTML = 'I numeri giusti che hai scelto sono: ' + finalArray.join(" ") ;
    scoreElement.innerHTML = 'Il tuo punteggio è di: ' + count;
}, 31000)    //#####cambia in 30000

console.log(randomNumberArr);
console.log(finalArray);


// stampo i numeri presi

// #### altra soluzione ###             
// const comparedArray = randomNumberArr.filter(element => userNumberArr.includes(element))

// const mioArr = [];
// for(let i = 0; i < randomNumberArr.length; i++) {
//     if (userNumberArr.includes(randomNumberArr[i]) ) {
//         mioArr.push()
//     }
// }


                    
                    
                    
                    
