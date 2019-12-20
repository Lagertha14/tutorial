const advices = [];
const input = document.querySelector('input');

const addingAdvice = (e) => {
    e.preventDefault();
    const newAdvice = input.value;
    console.log(newAdvice);

    if (input.value.length) {
        for (advice of advices) {
            if (advice === newAdvice) {
                alert("taka rada już istnieje!")
                return
            }
        }

    }

    advices.push(newAdvice);
    input.value = "";
    // console.log(advices);
}
const btnAdd = document.querySelector('.add');
btnAdd.addEventListener('click', addingAdvice);

const resetAdvice = ( ) => {
    advices.length = 0;
    // console.log(advices);
}
const btnReset = document.querySelector(".clean");
btnReset.addEventListener('click', resetAdvice)


const randomAdvice = () => {
    const randomEl = Math.floor(Math.random() * advices.length);
    h1.textContent = advices[randomEl];
}

const h1 = document.querySelector("h1");
const showAdvice = document.querySelector(".showAdvice");
showAdvice.addEventListener("click", randomAdvice);

 const show = () =>{
     alert(advices);
    //  h1.textContent = advices;
 }
const showOptions = document.querySelector(".showOptions");
showOptions.addEventListener("click",show)