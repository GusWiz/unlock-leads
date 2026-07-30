const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
myLeads = ["awesomeLeans", "www1241", "werwer141"]

ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    console.log(myLeads)
})

for (let i = 0; i < myLeads.length; i++) {
    // ulEl.innerHTML += "<li>" + myLeads[i] + '</li>'

    // creaete elements
    const li = document.createElement("li")
    // set text content
    li.textContent = myLeads[i]
    // append to ul
    ulEl.append(li)
}