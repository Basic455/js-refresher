const message = document.querySelector("#message")
const input = document.querySelector("#age")
const btn = document.querySelector("#btn")


function verification(age) {
    if(age >= 100){
        message.textContent = "You are TOO OLD";
    } else if (age >= 18) {
        message.textContent = "You can Enter";
    } else if (age < 18) {
        message.textContent = "you are not allowed";

    } else if (age == 0) {
        message.textContent = "You were just Born";
    } else if (age < 0) {
        message.textContent = "You're in Debt";
    } else {
        message.textContent = "Enter valid age > 0";
    }
}

btn.addEventListener('click', function(){
    const age = parseInt(input.value)
    verification(age)
})