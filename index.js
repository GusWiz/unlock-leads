const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
myInputs = []

inputBtn.addEventListener("click", function() {
    myInputs.push(inputEl.value)
})

console.log(myInputs)