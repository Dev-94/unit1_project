//state
var problems = [
    {
    question:"5+5=?" + "<br/>" + "(A) 10 (B) 3 (C) 16",
    answer: "A"
    },
    {
    question: "2+2=?" + "<br/>" + "(A) 8 (B) 4 (C) 1",
    answer: "B"
    },
    {
    question: "8*9=?" + "<br/>" + "(A) 86 (B) 40 (C) 72",
    answer: "C"
    },
    {
    question: "6-2=?" + "<br/>" + "(A) 6 (B) 40 (C) 4",
    answer: "C"
    }
];

var questions;
var prob;
var rndProb;
var ans;
var probSet;
var score = 0;

// cached elements
var display = document.getElementById('display');
var quest = document.getElementById('quest');
var sco = document.getElementById('sco');
var buttons = document.querySelectorAll('#bttn');
var bottom = document.querySelector('#bottom');
var valBttn1 = document.querySelector('bttn1.value');
var valBttn2 = document.querySelector('bttn2.value');
var valBttn3 = document.querySelector('bttn3.value');
var bttn1 = document.getElementById('bttn1');
var bttn2 = document.getElementById('bttn2');
var bttn3 = document.getElementById('bttn3');
var body = document.querySelector('body');


// event listeners
/*
bttn1.addEventListener('click', b1);

var b1 = function() {
    console.log('button "A" works');    
    if (bttn1.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
}

bttn2.addEventListener('click', b2);

var b2 = function() {
    console.log('button "B" works');    
    if (bttn2.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
}

bttn3.addEventListener('click', b3);

var b3 = function() {
    console.log('button "C" works');    
    if (bttn3.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
}
*/



bttn1.addEventListener('click', function(evt) {
    console.log('button "A" works');    
    if (bttn1.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
} 
});



bttn2.addEventListener('click', function(evt) {
    console.log('button "B" works');    
    if (bttn2.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
} 
});



bttn3.addEventListener('click', function(evt) {
    console.log('button "C" works');    
    if (bttn3.value === ans) {
    console.log("Yay!!! You're so smart!");
    score += 10;
    init();
    } else {
    console.log("You didn't get it :(");
} 
});



// functions
init();

function getRandomProb() {
    rndProb = Math.floor(Math.random() * problems.length);
    prob = problems[rndProb].question;
    ans = problems[rndProb].answer;
    return prob;
}

function init() {
    getRandomProb();
    render();
}

function render() {
    if (score === 20) {
        quest.innerHTML = "You reached 100 points!" + "<br/>" + "You're so smart!!";
        sco.innerHTML = 100;
        confetti.start();
    } else {
        quest.innerHTML = prob;
        sco.innerHTML = score;
    }  
}

init();

/*
    for(var i=0; i < problems.length; i++){
            //iterate through questions and alert user
        alert(problems[i].question);
            //problems[i].question;

        var ask = window.prompt(problems[i].prompt); 
            //var ask = problems[i].prompt; 
            //checks if answer is correct and alerts user

        if(ask == problems[i].answer){
            score++;
            alert("Yay!!! You're so smart!");

        } else {
            alert("You didn't get it :(");
        }
    }
*/