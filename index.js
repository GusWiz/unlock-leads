const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
myLeads = []

ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    renderLead()
    inputEl.value = ''

})

function renderLead() {
    // let listItem = "<li>" + myLeads[myLeads.length - 1] + "</li>"
    let listItem = "<li>" + inputEl.value + "</li>"
    ulEl.innerHTML += listItem
}