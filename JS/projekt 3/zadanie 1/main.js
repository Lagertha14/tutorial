// tutaj rozwiązanie
const btn = document.querySelector("button");
let isDisplayed = false;
const listElements = document.querySelectorAll("li");
listElements.style.fontSize = size;
let size = 10;
listElements.style.display = "block";

function displayList() {
    if (isDisplayed = false) {
        listElements.style.display = "block"
    }
    else (isDisplayed = true){
        size += 2;
        // listElements.style.fontSize=size;
    }
    listElements.style.fontSize = size;
}

btn.addEventListener("click", displayList)