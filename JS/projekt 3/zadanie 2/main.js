let size = 10;
let orderElement = 1;

const init = () => {
    const btn = document.createElement("button");
    btn.innerText = "Dodaj 10 elementów listy!";
    document.body.appendChild(btn);
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    btn.addEventListener("click", createLiElements)

}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerText = "Element nr " + orderElement;
        li.style.fontSize = size + "px";
        size+=2;
        orderElement++;
        document.querySelector("ul").appendChild(li);

    }
}


init()