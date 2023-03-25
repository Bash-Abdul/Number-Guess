let message1 = document.querySelector('#first_message');
let message2 = document.querySelector('#second_message');
let message3 = document.querySelector('#third_message');
let btn = document.querySelector('#btn');

let Guess = Math.floor(Math.random() * 100) + 1;
let n_o_g = 0;
let guessedNumbers = []



function Guessing(){
    let Choice = document.querySelector('#box').value;
    // alert('it works')

    if (Choice < 1 || Choice > 100){
        alert('Please. Input a number between 1-100');
    }
    else{
        guessedNumbers.push(Choice);
        n_o_g++;


        if(Choice < Guess){
            message1.textContent = "Your guess is too low";
            message2.textContent = "No of guesses: " + n_o_g;
            message3.textContent = "Guessed numbers are: " + guessedNumbers;
        }
        else if (Choice == Guess){
            message1.style.fontSize = "2rem"
            message1.textContent = "Your Win :)";
            message2.textContent = "No of guesses: " + n_o_g;
            message3.textContent = "Guessed numbers are: " + guessedNumbers;
            btn.disabled = true;
        }
        else{
            message1.textContent = "Your guess is too high";
            message2.textContent = "No of guesses: " + n_o_g;
            message3.textContent = "Guessed numbers are: " + guessedNumbers;
        }
    }    
}