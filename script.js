const changeTheme = document.getElementById("theme");
const mainContainer = document.querySelector(".main-container");
const display = document.querySelector(".display");
const digits = document.querySelectorAll(".buttons button");

// Function to change themes.
changeTheme.addEventListener("click", () => {
    let isChanged = false;
    const mainBackground = ["hsl(0, 0%, 90%)", "hsl(268, 75%, 9%)", "hsl(222, 26%, 31%)"];
    const randomBackground = Math.floor(Math.random() * mainBackground.length);

    if(isChanged === false) {
        mainContainer.style.backgroundColor = mainBackground[randomBackground];
        isChanged = true;
    } else {
        mainContainer.style.backgroundColor = "hsl(222, 26%, 31%)";
    }
})