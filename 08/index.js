const username = document.querySelector("#username")
const password = document.querySelector("#password")
const checkbox = document.querySelector("#checkbox")
const p = document.querySelector("#message")
const btn = document.querySelector("#btn")
p.textContent = "Hello";


btn.addEventListener('click', function(){
    let isLoggedIn = false;
    let name = username.value;
    let pass = password.value;
        if(name === "admin" && pass === "admin123" && checkbox.checked){
            p.textContent = "Welcome";
            isLoggedIn = true;
        } else {
            p.textContent = "Incorrect Username or Password";
        } 
})