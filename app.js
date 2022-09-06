let Player1 = {
    name: "Player1",
    chips: 1000,
    bets: []
}

let Player2 = {
    name: "Player2",
    chips: 1000,
    bets: []
}
console.log(Player1)

let NumberLog = []
let player1bets = []
let player2bets = []


const updateNumberLog = document.querySelector('.pastNums')
updateNumberLog.innerHTML = NumberLog



bet1 = () => {
    Player1.chips--;

}

const button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(e) {
    console.log(e);

}



// start round button will provide random number bet 0 and 36, then log number to NumberLog


const startRoundFunction = () => {
    // player 1 gets to place chips on the board with click. 
    // for each click, one "chip" is reduced from wallet. 
    // for each click, player1bets.push
    // player 1 clicks "end bet"
    console.log(RndInt)
    console.log('button works')
    randomIntFromWheel(0, 36)
}
let startRound = document.getElementById('startRound').addEventListener('click', startRoundFunction);





function randomIntFromWheel(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);


}

let addNum = NumberLog.push(randomIntFromWheel)

let RndInt = randomIntFromWheel(0, 36);
NumberLog.push(addNum);
console.log(RndInt)

// show game number
const pastNums = document.querySelector('.pastNums')
const gameNumber = document.querySelector('.wheel')
gameNumber.innerHTML = ("Wheel Number " + RndInt)


const spinWheel = document.querySelector(".spinwheel").addEventListener('click', randomIntFromWheel)




const recordbet = () => {
    console.log('55')
}

// document.getElementsByClassName('number').addEventListener('click', recordbet)