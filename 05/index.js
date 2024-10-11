const label = document.querySelector("#randomNum");
const input = document.querySelector("#upperLimit");
const generate = document.querySelector("#generate");
const reset = document.querySelector("#reset");

function randomNumber(input) {
    return Math.floor(Math.random() * input);
}

generate.addEventListener('click', function() {
    const upperLimit = parseInt(input.value); 
    if (isNaN(upperLimit) || upperLimit <= 0) {
        label.textContent = "enter a valid number";
    } else {
        label.textContent = randomNumber(upperLimit);
    }
});

reset.addEventListener('click', function() {
    label.textContent = "RESETTED";
});