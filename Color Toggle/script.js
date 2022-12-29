const toggleList = function() {
    const getElement = document.getElementById("menu-img");
    const getLiElement = document.getElementsByClassName("item");
    getElement.addEventListener("click", function() {
        for(const item of getLiElement) {
            item.classList.toggle("visible");
        }
    })
}
const changeBackgroundRed = function() {
    console.log("red active");
    const getElement = document.getElementById("red");
    const body = document.getElementById("body");
    getElement.addEventListener("click", function() {
        body.style.background = 'red';
        const getTextElement = document.getElementById("color");
        getTextElement.textContent = "Red";
        closeList();
    })

}
const changeBackgroundGreen = function() {
    console.log("green active");
    const getElement = document.getElementById("green");
    const body = document.getElementById("body");
    getElement.addEventListener("click", function() {
        body.style.background = 'green';
        const getTextElement = document.getElementById("color");
        getTextElement.textContent = "Green";
        closeList();
    })
}
const changeBackgroundBlue = function() {
    console.log("blue active");
    const getElement = document.getElementById("blue");
    const body = document.getElementById("body");
    getElement.addEventListener("click", function() {
        body.style.background = 'blue';
        const getTextElement = document.getElementById("color");
        getTextElement.textContent = "Blue";
        closeList();
    })
}
const changeBackgroundYellow = function() {
    console.log("yellow active");
    const getElement = document.getElementById("yellow");
    const body = document.getElementById("body");
    getElement.addEventListener("click", function() {
        body.style.background = 'yellow';
        const getTextElement = document.getElementById("color");
        getTextElement.textContent = "Yellow";
        closeList();
    })
}
const changeBackgroundPink = function() {
    console.log("pink active");
    const getElement = document.getElementById("pink");
    const body = document.getElementById("body");
    getElement.addEventListener("click", function() {
        body.style.background = 'pink';
        const getTextElement = document.getElementById("color");
        getTextElement.textContent = "Pink";
        closeList();
    })
}
const changeBackgroundColor = function(color) {
    const body = document.getElementById("body");
    body.style.background = color;
}
const closeList = function() {
    const getLiElement = document.getElementsByClassName("item");
    for(const item of getLiElement) {
        item.classList.toggle("visible");
    }
}

toggleList();
changeBackgroundRed();
changeBackgroundGreen();
changeBackgroundBlue();
changeBackgroundYellow();
changeBackgroundPink();

