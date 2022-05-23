let btn = document.getElementById('btn');
let output = document.getElementById('outputText');

let number = [Math.floor(Math.random() *100)]

btn.addEventListener('click' , function(){
    let input = document.getElementById('userInput').value;
    if (input == number){
        output.innerHTML = `You guessed right, the number was ${number}`
    } else if (input < number){
        output.innerHTML = "Your guessed is too low!"
    };
    if (input > number){
        output.innerHTML = "Your guessed is too high!"
    }
});