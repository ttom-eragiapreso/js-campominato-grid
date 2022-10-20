console.log("app loaded")

// **Consegna**
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// **Bonus**
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;



// Mi prendo gli elementi del DOM con i quali dovrò interagire
const container = document.querySelector(".container");
const button = document.querySelector("#inizia");
const select = document.querySelector("#selectDifficoltà");
const reset = document.getElementById("reset");



// Aggiungo una funzione custom al click del bottone per iniziare
button.addEventListener("click", createSquares);


let isEmpty = true;

// La funzione custom
function createSquares(){

  // Appena clicco controllo subito se non ho cliccato prima con questa flag
  if(isEmpty){

    // Per prima cosa rimuovo la classe che rende invisibile il bottone di reset
    reset.classList.remove("hide");
    // Poi inizializzo una variabile che prenderà in conto la difficoltà scelta dall'utente
    let difficoltà;
    let width;
    // Faccio un switch per comparare il valore del select al momento del click e vado a scrivere dentro difficoltà il limite massimo di quadrati che poi andrò a scrivere.
    // Vado anche ad ogni casistica ad assegnare un valore di width da riusare poi nel loop che crea le caselle.
    switch(select.value){
  
      case "2":
        difficoltà = 82;
        width = "calc(100% / 9)"
        break;
        
      case "3":
        difficoltà = 50;
        width = "calc(100% / 7)"
        break
  
      default:
        difficoltà = 101;
        width = "10%"
        break
  }
    
    // Faccio un loop da 1 fino a il valore trovato con lo switch e per ogni iterazione creo un elemento div, con classe square, che dentro ha il numero al contatore del loop, e infine ad esso stesso gli creo un addEventListener che al click gli assegni una classe per colorarlo e stampi in console il suo numero.
    for(let i = 1; i < difficoltà; i++){
      let square = document.createElement("div");
      square.style.width = width;
      square.classList.add("square");
      square.innerHTML = i;
      container.append(square);
      square.addEventListener("click", function(){
        console.log(this.innerHTML);
        this.classList.add("blue")
      })
    }
    // Una volta che finisce tutta la logica del click inverto il valore della flag.
    isEmpty = false;
  }else {

    console.log("Devi prima resettare")
  }
  
}


// La funzione di reset che avviene quando il bottone di reset viene premuto semplicemente cancella tutto quello che c'è dentro al container che ospita tutti i quadrati. Infine nasconde se stesso.
reset.addEventListener("click", function(){
  container.innerHTML = "";
  this.classList.add("hide");
  isEmpty = true;
})








