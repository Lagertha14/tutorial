const btn = document.querySelector(".button");
// console.log(btn);

let elements = document.querySelector(".elements");
let counter = 1;

// btn.addEventListener("click", function()
// {
//     counter ++;
// if(counter%5===0){
//     element.classList.add("divisible")
// }else(
//     element.classList.add("number")
// )
// })

const onClickListener = function () {
    let addElement = document.createElement("div");
    if (counter % 5 === 0) {
        addElement.classList.add("divisible")
    } else (
        addElement.classList.add("number")
    )
    addElement.innerHTML = counter;
    elements.appendChild(addElement);
    counter++;
}

btn.addEventListener("click", onClickListener);

onClickListener();
onClickListener();