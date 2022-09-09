// make 2 classes for players. 
// include methods for each bet, 
// include methods for wins. 
// name each player on prompt start 

// change img spin to ".wheelSize"
// clear 

// make player 2 deduct
// make player 2 bets button reset to player 1 bets 

//  try using alerts instead of consol log to test order 


class Player {
    constructor(name) {
        this.name = name
        this.chips = 1000
        this.bets = []
    }
    bet10() {
        this.chips -= 10
    }
    win1to1() {
        this.chips += 360
    }
}

let Player1 = new Player('Player1')
let Player2 = new Player('Player2')

console.log(Player1.chips)

document.querySelector('.P1Chips').innerHTML += Player1.chips;

document.querySelector('.P2Chips').innerHTML += Player2.chips;

let gameRound = 1

let player1bets = []
let player2bets = []

let wheelRecord = []

// spin wheel button . 

// make some functions that clear player array after each round 



// this is the "SPIN WHEEL "
// this is the "SPIN WHEEL "
// this is the "SPIN WHEEL "
// this is the "SPIN WHEEL "
// this is the "SPIN WHEEL "

let WheelSpin = () => {
    console.log('button works')
    let randomIntFromWheel = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let RndInt = randomIntFromWheel(1, 4);
    console.log(` round ${gameRound+=1} `)
    document.querySelector(".wheel").innerHTML = (RndInt);
    wheelRecord.push(" --   " + RndInt)
    let pushNum = document.querySelector(".pastNums");
    pushNum.innerHTML = wheelRecord
    wheelpicSpin()


    for (let i = 0; i < player1bets.length; i++) {
        if (player1bets[i] === RndInt) {
            Player1.win1to1()
            let chipsBet1 = document.querySelector(".P1Chips")
            chipsBet1.innerHTML = `P1 Chips : ${Player1.chips
            }`;
        }
        console.log(RndInt)
        console.log(player1bets[i])
    }
    window.alert(`winning number ${RndInt}`)
    playAgainFunction()
    MakeBets2()
    let changeTurn = document.querySelector('.StartRound');
    changeTurn.innerHTML = `player 1 bets test`;

}

// when Play again button pressed - functions clear player bets

let clearBets1 = () => {
    player1bets.length = 0;
    return player1bets.length;
}
let clearBets2 = () => {
    player2bets.length = 0;
    return player2bets.length;
}

let playAgainFunction = () => {
    player1bets.length = 0;
    player2bets.length = 0;
    console.log(player1bets)
    console.log(player2bets)
    document.querySelector(".player1bets").innerHTML = clearBets1()
    document.querySelector(".player2bets").innerHTML = clearBets2()
    console.log("Play Again works")
}

// let playAgain = document.querySelector('#playAgain')
// playAgain.addEventListener('click', playAgainFunction)




let SpinWheel = document.querySelector(".spinwheel");
SpinWheel.addEventListener('click', WheelSpin)


// spin wheel button end 

// start round button
// let player1bets = []


for (let i = 0; i < 36; i++) {
    let div = document.querySelector(`.N${i+1}`);
    div.addEventListener('click', () => {
        if (turn == 1) {
            player1bets.push(i + 1);
            let pushBets = document.querySelector(".player1bets");
            pushBets.innerHTML = `P1 Bets : ${player1bets}`;
            Player1.bet10()
            let chipsBet1 = document.querySelector(".P1Chips");
            chipsBet1.innerHTML = `P1 Chips : ${Player1.chips
            }`;
            // let changeTurn = document.querySelector('.StartRound');
            // changeTurn.innerHTML = `player 2 bets`;
            // console.log(changeTurn);
            // console.log(chipsBet1);

        } else if (turn == 2) {
            player2bets.push(i + 1)
            let pushBets = document.querySelector(".player2bets");
            pushBets.innerHTML = `P2 Bets : ${player2bets}`
        }
    })
}

let MakeBets1 = () => {
    turn = 2
}
let MakeBets2 = () => {
    turn = 1
}

let turn = 1

let StartRound = document.querySelector(".StartRound");
StartRound.addEventListener('click', () => {
    if (turn == 1) {
        MakeBets1()
        let changeTurn = document.querySelector('.StartRound');
        changeTurn.innerHTML = `player 2 bets`;
        console.log(changeTurn);
    } else if (turn == 2) {
        MakeBets2()
        let changeTurn = document.querySelector('.StartRound');
        changeTurn.innerHTML = `player 1 bets test`;

    }
})


let gameRoundEnd = () => {

}

// SPIN THE WHEEL PICTURE

let wheelpicSpin = () => {

    document.querySelector(".wheelSize").style.transform = "rotate(90deg)";

}

let TestSpin = document.querySelector("#TestSpin");
TestSpin.addEventListener('click', () => {
    window.alert('button works')
    wheelpicSpin()


})

let WheelSpin2 = () => {
    console.log('button works')
    let randomIntFromWheel = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let RndInt = randomIntFromWheel(1, 4);
    console.log(` round ${gameRound+=1} `)
    document.querySelector(".wheel").innerHTML = (RndInt);
    wheelRecord.push(" --   " + RndInt)
    let pushNum = document.querySelector(".pastNums");
    pushNum.innerHTML = wheelRecord
    wheelpicSpin2()
}