//1.create two var,firstCard and SecondCard
//set their value to a random number between 2-11
//2.create a variable, sum and set it tp the sum pf the two card
//in blackjack sum of cards is equal to 21 or less then 21 as close as possible
//if sum is greater than 21 we are out of the game

//let firstCard = getRandomCard()
//let SecondCard = getRandomCard()

let cards = []
let sum = 0
let message = ""


let hasBlackjack = false
let isAlive= true



let messageEl = document.getElementById("message-el")
//let sumEl = document.getElementById("sum-el")
//instead we can use query selector also by going dynamic
let sumEl = document.querySelector("#sum-el")//Query selector
let cardsEl = document.getElementById("cards-el")


//console.log(messageEl)
function startGame(){
    cards = []
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards.push(firstCard)
    cards.push(secondCard)
    renderGame()
}
//objects
let player = {
    Name : "Per",
    chips: 145,
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.Name + " $" + player.chips
function getRandomCard(){
    let randomNum = Math.random()*13//0-11.999
    let ans = Math.floor(randomNum)+1//1-13
    if(ans === 1){
        return 11;
    }else if(ans>10){
        return 10;
    }else{
        return ans;
    }

}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    //rendering only the first and second card
    cardsEl.textContent = "Cards: "//try quoting it and see what happens
    //for loop to render out all the cards
    for(let i=0;i < cards.length;i++){
        cardsEl.textContent += cards[i] + " "
    }
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    }else if(sum === 21){
        message = "Wohoo! You've got Blackjack"
        hasBlackjack = true
    }else {
        message = "you're out of the game"
        isAlive = false
    }
     messageEl.textContent = message
     
}

function newCard(){
    if(hasBlackjack==false&&isAlive==true){
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    renderGame()
    }
    
}



