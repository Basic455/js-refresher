const label = document.querySelector("#countLabel")
const increase = document.querySelector("#increase")
const decrease = document.querySelector("#decrease")
const reset = document.querySelector("#reset")
let count = 0;


increase.addEventListener('click', function(){
    count++
    label.textContent = count;
})



decrease.addEventListener('click', function(){
    count--;
    label.textContent = count;
})



reset.addEventListener('click', function(){
    count = 0;
    label.textContent = count;
})