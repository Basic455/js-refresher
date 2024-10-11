// ternery operator
// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10 : 0 ;
// console.log(purchaseAmount - discount)

const input = document.querySelector("#weekDay")
const p = document.querySelector("#result")
const btn = document.querySelector("#day")
p.textContent = "WEEKDAY"

btn.addEventListener('click', function () {
    let day = parseInt(input.value);
    switch(day){
        case 1:
            p.textContent = "Monday";
            break;
        case 2:
            p.textContent = "Tuesday";
            break;
        case 3:
            p.textContent = "Wednesday";
            break;
        case 4:
            p.textContent = "Thursday";
            break;
        case 5:
            p.textContent = "Friday";
            break;
        case 6:
            p.textContent = "Saturday";
            break;
        case 7:
            p.textContent = "Sunday";
            break;
        default:
            p.textContent = "Enter value from 1 to 7"

    }
})