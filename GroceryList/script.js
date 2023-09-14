const groceryList = ["milk","bread"]
const form = document.getElementById("form")
const formInput = document.getElementById("formInput")
let item = ""
formInput.addEventListener("input",function(){
        item = formInput.value
})
form.addEventListener("submit",function(e){
        e.preventDefault()
        console.log(item)
})

const content = document.getElementById("content")
for (let grocery of groceryList){
        let itemDiv = document.createElement("div")
        let itemTitle = document.createElement("p")
        let editBtn = document.createElement("button")
        editBtn.textContent = "&#xf044;"
        itemTitle.textContent = grocery
        itemDiv.append(itemTitle,editBtn)
        content.append(itemDiv)
}