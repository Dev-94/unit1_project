//variables
var problems = [
    {
        question: "5 + 5 = ?" + "<br/>" + "<br/>" + "a) 10 &nbsp;&nbsp; b) 3 &nbsp;&nbsp; c) 16",
        answer: "a"
    },
    {
        question: "2 + 2 = ?" + "<br/>" + "<br/>" + "a) 8 &nbsp;&nbsp; b) 4 &nbsp;&nbsp; c) 1",
        answer: "b"
    },
    {
        question: "8 x 9 = ?" + "<br/>" + "<br/>" + "a) 86 &nbsp;&nbsp; b) 40 &nbsp;&nbsp; c) 72",
        answer: "c"
    },
    {
        question: "6 - 2 = ?" + "<br/>" + "<br/>" + "a) 6 &nbsp;&nbsp; b) 40 &nbsp;&nbsp; c) 4",
        answer: "c"
    },
    {
        question: "9 / 3 = ?" + "<br/>" + "<br/>" + "a) 3 &nbsp;&nbsp; b) 40 &nbsp;&nbsp; c) 4",
        answer: "a"
    },
    {
        question: "7 x 8 = ?" + "<br/>" + "<br/>" + "a) 56 &nbsp;&nbsp; b) 42 &nbsp;&nbsp; c) 1",
        answer: "a"
    },
    {
        question: "4 + 16 = ?" + "<br/>" + "<br/>" + "a) 6 &nbsp;&nbsp; b) 20 &nbsp;&nbsp; c) 4",
        answer: "b"
    },
    {
        question: "19 - 7 = ?" + "<br/>" + "<br/>" + "a) 62 &nbsp;&nbsp; b) 9 &nbsp;&nbsp; c) 12",
        answer: "c"
    },
    {
        question: "60 - 2 = ?" + "<br/>" + "<br/>" + "a) 58 &nbsp;&nbsp; b) 2 &nbsp;&nbsp; c) 14",
        answer: "a"
    },
    {
        question: "50 + 50 = ?" + "<br/>" + "<br/>" + "a) 100 &nbsp;&nbsp; b) 13 &nbsp;&nbsp; c) 76",
        answer: "a"
    },
    {
        question: "29 + 23 = ?" + "<br/>" + "<br/>" + "a) 82 &nbsp;&nbsp; b) 52 &nbsp;&nbsp; c) 59",
        answer: "b"
    },
    {
        question: "1 x 7 = ?" + "<br/>" + "<br/>" + "a) 7 &nbsp;&nbsp; b) 17 &nbsp;&nbsp; c) 71",
        answer: "a"
    },
    {
        question: "2 - 2 = ?" + "<br/>" + "<br/>" + "a) 80 &nbsp;&nbsp; b) 2 &nbsp;&nbsp; c) 0",
        answer: "c"
    },
    {
        question: "12 / 6 = ?" + "<br/>" + "<br/>" + "a) 2 &nbsp;&nbsp; b) 7 &nbsp;&nbsp; c) 11",
        answer: "a"
    },
    {
        question: "4 x 4 = ?" + "<br/>" + "<br/>" + "a) 5 &nbsp;&nbsp; b) 2 &nbsp;&nbsp; c) 16",
        answer: "c"
    },
    {
        question: "41 + 16 = ?" + "<br/>" + "<br/>" + "a) 57 &nbsp;&nbsp; b) 28 &nbsp;&nbsp; c) 41",
        answer: "a"
    },
    {
        question: "59 - 17 = ?" + "<br/>" + "<br/>" + "a) 42 &nbsp;&nbsp; b) 91 &nbsp;&nbsp; c) 22",
        answer: "a"
    },
    {
        question: "6 - 5 = ?" + "<br/>" + "<br/>" + "a) 8 &nbsp;&nbsp; b) 23 &nbsp;&nbsp; c) 1",
        answer: "c"
    }
]

var prob;
var rndProb;
var ans;
var score = 0;
const sound = new Audio("audio/yay.wav");
const mariachi = new Audio("audio/mariachi.wav");

// cached elements
var quest = document.getElementById('quest');
var sco = document.getElementById('sco');
var bttn1 = document.getElementById('bttn1');
var bttn2 = document.getElementById('bttn2');
var bttn3 = document.getElementById('bttn3');

// event listeners
// bttn1.addEventListener('click', checkAnswer1)
// bttn2.addEventListener('click', checkAnswer2)
// bttn3.addEventListener('click', checkAnswer3)


bttn1.addEventListener('click', function (evt) {
    if (bttn1.value === ans) {
        score += 100;
        sound.play();
        init();
    } else {
        bttn1.classList.add("gone");
    }
});

bttn2.addEventListener('click', function (evt) {
    if (bttn2.value === ans) {
        score += 100;
        sound.play();
        init();
    } else {
        bttn2.classList.add("gone");
    }
});

bttn3.addEventListener('click', function (evt) {
    if (bttn3.value === ans) {
        score += 100;
        sound.play();
        init();
    } else {
        bttn3.classList.add("gone");
    }
});

// functions
init();

// function checkAnswer1(evt) {
//     if (bttn1.value === ans) {
//         score += 100;
//         sound.play();
//         init();
//     }
//     else {
//         // bttn1.classList.add("gone");
//     }
// }

// function checkAnswer2(evt) {
//     if (bttn2.value === ans) {
//         score += 100;
//         sound.play();
//         init();
//     } else {
//         // bttn2.classList.add("gone");
//     }
// }

// function checkAnswer3(evt) {
//     if (bttn3.value === ans) {
//         score += 100;
//         sound.play();
//         init();
//     } else {
//         // bttn3.classList.add("gone");
//     }
// }

function getRandomProb() {
    //chooses random question
    rndProb = Math.floor(Math.random() * problems.length);
    // stores randomly selected as prob
    prob = problems[rndProb].question;

    // stores corresponding answer in to ans
    ans = problems[rndProb].answer;
    return prob;
}

function init() {
    //generates question and renders game logic
    getRandomProb();
    render();
}



//if user wins game
// function userWins() {
//     // displays victory message
//     quest.innerHTML = "You reached 1000 points!" + "<br/>" + "You're so smart!!";
//     // sets score to 1000
//     sco.innerHTML = 1000;
//     // plays victory music
//     mariachi.play();
//     confetti.start();
//     bttn1.removeAttribute("bttn1");
//     bttn2.removeAttribute("bttn2");
//     bttn3.removeAttribute("bttn3");
//     // removes buttons
//     // bttn1.classList.add("gone");
//     // bttn2.classList.add("gone");
//     // bttn3.classList.add("gone");
// }

// // if you gets answer correct
// function userCorrect() {
//     // updates questions, answer, and score
//     quest.innerHTML = prob;
//     sco.innerHTML = score;
//     // adds buttons
//     bttn1.classList.remove("gone");
//     bttn2.classList.remove("gone");
//     bttn3.classList.remove("gone");
//     getRandomProb();

// }

// function render() {
//     if (score >= 1000) {
//         userWins()
//     } else {
//         userCorrect()
//     }
// }
function render() {
    //if user wins game
    if (score === 1000) {
        //if user wins game
        quest.innerHTML = "You reached 1000 points!" + "<br/>" + "You're so smart!!";
        sco.innerHTML = 1000;
        bttn1.removeAttribute("bttn1");
        bttn2.removeAttribute("bttn2");
        bttn3.removeAttribute("bttn3");
        mariachi.play();
        confetti.start();
    } else {
        //if you gets answer correct
        quest.innerHTML = prob;
        sco.innerHTML = score;
        bttn1.classList.remove("gone");
        bttn2.classList.remove("gone");
        bttn3.classList.remove("gone");
    }
}

init();