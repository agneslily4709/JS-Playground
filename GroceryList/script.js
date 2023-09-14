const groceryList = []
const form = document.getElementById("form")
const formInput = document.getElementById("formInput")
let item = ""
formInput.addEventListener("input",function(){
        item = formInput.value
})
form.addEventListener("submit",function(e){
        e.preventDefault()
        console.log(item)
        groceryList.push(item)
        formInput.value = ""
        renderPage()
})
var renderPage = function(){
        const content = document.getElementById("content")
        for (let grocery of groceryList){
                let itemDiv = document.createElement("div")
                let itemTitle = document.createElement("p")
                let editBtn = document.createElement("button")
                editBtn.textContent = "Edit"
                let delBtn = document.createElement("button")
                delBtn.textContent = "Delete"
                itemTitle.textContent = grocery
                itemDiv.append(itemTitle,editBtn,delBtn)
                content.append(itemDiv)
        }
}