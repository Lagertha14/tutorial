const spnText = document.querySelector(".text");
const spnCursor = document.querySelector(".cursor");                     
const txt = "Sed eu ipsum id sapien placerat faucibus. Donec sit amet scelerisque eros, non gravida ligula. Praesent malesuada ullamcorper turpis quis viverra. Aliquam vel nulla non nisl condimentum rutrum vitae ac est. Vivamus quam est, ultrices quis velit vitae, venenatis mollis augue. Maecenas sodales nisl in dolor condimentum tempus. Proin id sagittis metus. Vestibulum accumsan turpis id mauris efficitur hendrerit. Phasellus sit amet tristique arcu, condimentum porttitor tortor. Maecenas lobortis eleifend libero, ac sollicitudin lacus";

// Parametry
const time = 50;
let indexText=0;

// Implementacja
const addLetter =() => {
    spnText.textContent += txt[indexText];
    indexText++;
    if (indexText ===txt.length) clearInterval(indexTyping)
}

const cursorAnimation =() =>{
    spnCursor.classList.toggle('active');
//     console.log("działa")
}
const indexTyping = setInterval(addLetter, time);


setInterval(cursorAnimation,400);