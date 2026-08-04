myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el") 
const deleteBtn = document.getElementById("delete-btn")
ulEl = document.getElementById("ul-el")


leadsFromLocalStorage = localStorage.getItem("myLeads")

if (leadsFromLocalStorage){ 
    myLeads = JSON.parse(leadsFromLocalStorage)
    renderLeads()
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    // saving myLeads (array) to local storage
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // console.log(localStorage.getItem("myLeads"))
    renderLeads()
})

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    renderLeads()
})
function renderLeads() {
    // let listItem = "<li>" + myLeads[myLeads.length - 1] + "</li>"
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>
                ${myLeads[i]}
            </a>
        </li>
        `
    }
    ulEl.innerHTML = listItems
}