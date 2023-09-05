const modal = document.getElementById("modal")

const close = document.getElementById("close-button")
close.addEventListener("click",function(){
        modal.style.display = "none"
})

const button = document.getElementById("clickButton")
button.addEventListener("click",function(){
        modal.style.display = "block"
        modal.style.zIndex = 1
        modal.style.alignItems = "center"
})


