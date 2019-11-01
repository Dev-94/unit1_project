//variables
var problems = [
    {
        question: "5 + 5 = ?" + "<br/>" + "<br/>" + "a) 10 &nbsp;&nbsp;             b) 3    &nbsp;&nbsp;       c) 16",
        answer: "a"
    },
    {
        question: "6 + 6 = ?" + "<br/>" + "<br/>" + "a) 12 &nbsp;&nbsp;             b) 3    &nbsp;&nbsp;       c) 16",
        a: "12",
        b: "3",
        c: "16",
        answer: "12",
    },
    // ]


    // how take button and add answer choices
    // how to refactor code to check if selected is answer through template literals
    // var answer = `${answer}`

    // bttn1.innerHTML(answer);
    // {
    //     question: "2 + 2 = ?" + "<br/>" + "a) 8 " + " b) 4 " + " c) 1",
    //     answer: "b"
    // },
    // {
    //     question: "8 x 9 = ?" + "<br/>" + "a) 86 " + " b) 40 " + " c) 72",
    //     answer: "c"
    // },
    // {
    //     question: "6 - 2 = ?" + "<br/>" + "a) 6 " + " b) 40 " + " c) 4",
    //     answer: "c"
    // },
    // {
    //     question: "9 / 3 = ?" + "<br/>" + "a) 3 " + " b) 40 " + " c) 4",
    //     answer: "a"
    // },
    // {
    //     question: "7 x 8 = ?" + "<br/>" + "a) 56 " + " b) 42 " + " c) 1",
    //     answer: "a"
    // },
    // {
    //     question: "4 + 16 = ?" + "<br/>" + "a) 6 " + " b) 20 " + " c) 4",
    //     answer: "b"
    // },
    // {
    //     question: "19 - 7 = ?" + "<br/>" + "a) 62 " + " b) 9 " + " c) 12",
    //     answer: "c"
    // },
    // {
    //     question: "60 - 2 = ?" + "<br/>" + "a) 58 " + " b) 2 " + " c) 14",
    //     answer: "a"
    // },
    // {
    //     question: "50 + 50 = ?" + "<br/>" + "a) 100 " + " b) 13 " + " c) 76",
    //     answer: "a"
    // },
    // {
    //     question: "29 + 23 = ?" + "<br/>" + "a) 82 " + " b) 52 " + " c) 59",
    //     answer: "b"
    // },
    // {
    //     question: "1 x 7 = ?" + "<br/>" + "a) 7 " + " b) 17 " + " c) 71",
    //     answer: "a"
    // },
    // {
    //     question: "2 - 2 = ?" + "<br/>" + "a) 80 " + " b) 2 " + " c) 0",
    //     answer: "c"
    // },
    // {
    //     question: "12 / 6 = ?" + "<br/>" + "a) 2 " + " b) 7 " + " c) 11",
    //     answer: "a"
    // },
    // {
    //     question: "4 x 4 = ?" + "<br/>" + "a) 5 " + " b) 2 " + " c) 16",
    //     answer: "c"
    // },
    // {
    //     question: "41 + 16 = ?" + "<br/>" + "a) 57 " + " b) 28 " + " c) 41",
    //     answer: "a"
    // },
    // {
    //     question: "59 - 17 = ?" + "<br/>" + "a) 42 " + " b) 91 " + " c) 22",
    //     answer: "a"
    // },
    // {
    //     question: "6 - 5 = ?" + "<br/>" + "a) 8 " + " b) 23 " + " c) 1",
    //     answer: "c"
    // }
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
bttn1.addEventListener('click', checkAnswer1)
bttn2.addEventListener('click', checkAnswer2)
bttn3.addEventListener('click', checkAnswer3)

// functions
init();

function checkAnswer1(evt) {
    if (bttn1.value === ans) {
        score += 100;
        sound.play();
        init();
    } else {
        bttn1.classList.add("gone");
    }
}

function checkAnswer2(evt) {
    if (bttn2.value === ans) {
        score += 100;
        sound.play();
        init();
    } else {
        bttn2.classList.add("gone");
    }
}

function checkAnswer3(evt) {
    if (bttn3.value === ans) {
        score += 100;
        sound.play();
        init();
    } else {
        bttn3.classList.add("gone");
    }
}

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
function userWins() {
    // displays victory message
    quest.innerHTML = "You reached 1000 points!" + "<br/>" + "You're so smart!!";
    // sets score to 1000
    sco.innerHTML = 1000;
    // plays victory music
    mariachi.play();
    confetti.start();
    // removes buttons
    bttn1.classList.add("gone");
    bttn2.classList.add("gone");
    bttn3.classList.add("gone");
}

// if you gets answer correct
function userCorrect() {
    // updates questions, answer, and score
    quest.innerHTML = prob;
    sco.innerHTML = score;
    // adds buttons
    bttn1.classList.remove("gone");
    bttn2.classList.remove("gone");
    bttn3.classList.remove("gone");

}

function render() {
    if (score >= 1000) {
        userWins()
    } else {
        userCorrect()
    }
}

init();