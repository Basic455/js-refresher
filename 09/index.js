const guesses = document.querySelector("#number")
const btn = document.querySelector("#guess")
const message = document.querySelector("#msg")


let num =   Math.floor((Math.random()*100) + 1)
let attempt = 1;

function logic(){
    let input = parseInt(guesses.value)


        if (input === num && attempt <= 10){
            message.textContent = `YaY! You Guessed it in ${attempt} attempts. ${input}`
            attempt++;
        } else if (input > num && attempt <= 10){
            message.textContent = `. Go lower ${attempt} attempts`
            attempt++;
        } else if (input < num && attempt <= 10 ) {
            message.textContent = `. Go Higher ${attempt} attempts`
            attempt++;
        } else {
            message.textContent = `You Lose. The Answer was ${num} ${attempt} attempts`

        }
}


btn.addEventListener('click', logic

)