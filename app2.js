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


let player1bets = []
let player2bets = []

let wheelRecord = []

// spin wheel button . 

// make some functions that clear player array after each round 

let WheelSpin = () => {
    console.log('button works')
    let randomIntFromWheel = (min, max) => { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let RndInt = randomIntFromWheel(0, 36);
    console.log(` round 1 ${RndInt} `)
    document.querySelector(".wheel").innerHTML = (RndInt);
    wheelRecord.push(" --   " + RndInt)
    let pushNum = document.querySelector(".pastNums");
    pushNum.innerHTML = wheelRecord

    if (RndInt === document.getElementById('"' + RndInt + '"')) {
        document.getElementById('"' + RndInt + '"').style.backgroundColor = "pink"
    }


}

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
            pushBets.innerHTML = `P1 Bets : ${player1bets}`
        } else if (turn == 2) {
            player2bets.push(i + 1)
            let pushBets = document.querySelector(".player2bets");
            pushBets.innerHTML = `P2 Bets : ${player2bets}`
        }
    })
}

let MakeBets1 = () => {
    // let pushBets = document.querySelector(".player1bets");
    // pushBets.innerHTML = `P1 Bets : ${player1bets}`
    turn = 2
}

let MakeBets2 = () => {
    // let pushBets = document.querySelector(".player2bets");
    // pushBets.innerHTML = `P2 Bets : ${player2bets}`
    turn = 1
}

let turn = 1

let StartRound = document.querySelector(".StartRound");
StartRound.addEventListener('click', () => {
    if (turn == 1) {
        MakeBets1()
    } else if (turn == 2) {
        MakeBets2()
    }
})