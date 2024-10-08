let username;
const h1 = document.querySelector("h1")

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value
    h1.textContent = `Welcome ${username}`
}