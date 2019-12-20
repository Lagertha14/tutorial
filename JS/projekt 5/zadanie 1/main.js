const input = document.getElementById("pass");
const div = document.querySelector(".message")
const passwords = ["user", "wiosna", "Ania"];
const messages = ["wyjechałam na zawsze", "piękna pora roku", "nic"];

input.addEventListener("input", (e) => {
 div.textContent = "";
    const text = e.target.value;
    // console.log(text);
    passwords.forEach((password, index) => {
        if (password === text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    });


    // if (password === e.target.value) {
    //     div.textContent = message;
    //     e.target.value = "";
    // }
    // else {
    //     div.textContent = "";
    // }
})
input.addEventListener("focus", (e) => {
    e.target.classList.add("active");

})
input.addEventListener("blur", (e) => {
    e.target.classList.remove("active");

})