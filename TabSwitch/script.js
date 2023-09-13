const content = {
        historyBtn: "Content for History tab",
        visionBtn: "Content for Vision tab",
        goalsBtn: "Content for Goals tab"
    };

    const tabContent = document.getElementById("tab");
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            buttons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            const contentText = content[this.id];
            tabContent.textContent = contentText;
        });
    });

    document.getElementById("historyBtn").click();