// name each player on prompt start 

//  try using alerts instead of consol log to test order 
// fix p1/p2 bets after round to still say P1 bets and not 0






class Player {
    constructor(name) {
        this.name = name
        this.chips = 100
        this.bets = []
    }
    bet10() {
        this.chips -= 10
    }
    win1to1() {
        this.chips += 360
    }
    winner() {
        if (this.chips >= 200) {
            window.alert(this.name + " You win! <br> What are you going to do w all those $$$?")
        }
    }
    loser() {
        if (this.chips <= 0) {
            window.alert(this.name + " chips balance = 0, please venmo @Remy to continue")
        }
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

    // this is the range of numbers to pick from 
    let RndInt = randomIntFromWheel(1, 4);
    console.log(` round ${gameRound+=1} `)
    let WheelNum = document.querySelector(".wheelNum")
    WheelNum.innerHTML = "wheel Number <br>" + RndInt;
    wheelRecord.push(" - " + RndInt)
    let pushNum = document.querySelector(".pastNums");
    pushNum.innerHTML = "Wheel Record <br>" + wheelRecord;
    wheelpicSpin()



    let Results = () => {
        window.alert(`winning number ${RndInt}`)
    }



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

    for (let i = 0; i < player2bets.length; i++) {
        if (player2bets[i] === RndInt) {
            Player2.win1to1()
            let chipsBet2 = document.querySelector(".P2Chips")
            chipsBet2.innerHTML = `P2 Chips : ${Player2.chips
            }`;
        }
        console.log(RndInt)
        console.log(player1bets[i])
    }

    // delays alert pop up showing game number 
    setTimeout(() => {
        Results();
    }, 2000)

    playAgainFunction()
    MakeBets2()
    let changeTurn = document.querySelector('.StartRound');
    changeTurn.innerHTML = `player 1 bets`;

    // win state & loss state

    Player1.winner()
    Player2.winner()

    Player1.loser()
    Player2.loser()

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
    document.querySelector(".player1bets").innerHTML = "P1 Bets :" + clearBets1()
    document.querySelector(".player2bets").innerHTML = "P2 Bets :" + clearBets2()
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
            chipsBet1.innerHTML = `P1 Chips : ${Player1.chips}`;

        } else if (turn == 2) {
            player2bets.push(i + 1)
            let pushBets = document.querySelector(".player2bets");
            pushBets.innerHTML = `P2 Bets : ${player2bets}`;
            Player2.bet10()
            let chipsBet2 = document.querySelector(".P2Chips");
            chipsBet2.innerHTML = `P2 Chips : ${Player2.chips}`;
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
        changeTurn.innerHTML = `player 1 bets`;

    }
})

let gameRoundEnd = () => {}


// Immediately invoked function expression
// to not pollute the global scope
(function() {
    const wheel = document.querySelector('.wheelSize');
    const startButton = document.querySelector('.button');
    let deg = 0;

    startButton.addEventListener('click', () => {
        // Disable button during spin
        startButton.style.pointerEvents = 'none';
        // Calculate a new rotation between 5000 and 10 000
        deg = Math.floor(5000 + Math.random() * 5000);
        // Set the transition on the wheel
        wheel.style.transition = 'all 10s ease-out';
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`;
        // Apply the blur
        wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
        // Remove blur
        wheel.classList.remove('blur');
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        // Calculate degree on a 360 degree basis to get the "natural" real rotation
        // Important because we want to start the next spin from that one
        // Use modulus to get the rest value from 360
        const actualDeg = deg % 360;
        // Set the real rotation instantly without animation
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
})();

// reset button
let resetF = () => {
    globalThis.location.reload()
}

let reset = document.querySelector(".reset")
reset.addEventListener("click", resetF)






// SPIN THE WHEEL PICTURE

let wheelpicSpin = () => {
    const wheel = document.querySelector('.wheelSize');

    // query selector that operates the wheel 
    const startButton = document.querySelector('.spinwheel');
    let deg = 0;

    startButton.addEventListener('click', () => {
        // Disable button during spin
        startButton.style.pointerEvents = 'none';
        // Calculate a new rotation between 5000 and 10 000
        deg = Math.floor(5000 + Math.random() * 5000);
        // Set the transition on the wheel
        wheel.style.transition = 'all 10s ease-out';
        // Rotate the wheel
        wheel.style.transform = `rotate(${deg}deg)`;
        // Apply the blur
        wheel.classList.add('blur');
    });

    wheel.addEventListener('transitionend', () => {
        // Remove blur
        wheel.classList.remove('blur');
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        // Calculate degree on a 360 degree basis to get the "natural" real rotation
        // Important because we want to start the next spin from that one
        // Use modulus to get the rest value from 360
        const actualDeg = deg % 360;
        // Set the real rotation instantly without animation
        wheel.style.transform = `rotate(${actualDeg}deg)`;
    });
}



// this is the start screen button 

let start = document.querySelector(".start")

start.addEventListener('click', () => {
        console.log(' start button works"');
        Zindex();
    })
    // start screen deleted upon click 
let Zindex = () => {
    document.querySelector(".startscreen").remove();
}