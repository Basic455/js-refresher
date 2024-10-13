const btn = document.querySelector("#btn")
const result = document.querySelector("#result")
const cel = document.querySelector("#celcius")
const fr = document.querySelector("#fr")

btn.addEventListener('click', function(){
    let temp1 = cel.value 
    let temp2 = fr.value
    if(temp1 && !temp2) {
        result.textContent = `Your temp in fr is : ${(temp1*1.8)+32}`
    } else if (temp2 && !temp1) {
        result.textContent = `Your temp in Cel is: ${(temp2-32)*5/9}`
    } else {
        result.textContent = "Enter One field or Enter valid Values"
    }
})