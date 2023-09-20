const menuToggle = document.querySelector(".menu-toggle");
const navItems = document.querySelector(".navItems");
let toggleFlag = false
menuToggle.addEventListener("click", () => {
        // menuToggle.classList.toggle("active");
        toggleFlag = true
        if(toggleFlag)navItems.style.display = "block";
        else navItems.style.display = "none";
});