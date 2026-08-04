myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const leadsFromLocalStorage = localStorage.getItem("myLeads")

if (leadsFromLocalStorage){ 
    myLeads = JSON.parse(leadsFromLocalStorage)
    render(myLeads)
}

function render(leads) {
    // let listItem = "<li>" + myLeads[myLeads.length - 1] + "</li>"
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    // saving myLeads (array) to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})