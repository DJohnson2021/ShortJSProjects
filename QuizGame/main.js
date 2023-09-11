const prompt = require("prompt-sync")()

console.log("Welcome to the Anime Weeb quiz!");

const chances = 3;

const correct_answer1 = ["naruto", "bleach", "one piece"];


function q1() {
    let raw_answer1 = prompt("What is one of the Big 3 Shounen anime? ");
    return raw_answer1;
}


function check_q1_answer(answer, correct_answer1) {
    let answer1 = answer.toLowerCase();
    for (let i = 0; i < correct_answer1.length; ++i) {
        if (answer1 === correct_answer1[i]) {
            console.log("You are correct!")
            break;
        } else {
            console.log("Incorrect! You don't know the culture!");
            break;
        }
    }
}

const q1_answer = q1();
check_q1_answer(q1_answer, correct_answer1);


