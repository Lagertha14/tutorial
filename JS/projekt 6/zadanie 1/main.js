const btn = document.querySelector("button");
const div = document.querySelector('div');
const names = ["Jagienka", "Dobrawa (Dobrusia)", "Daria", "Asia", "Kira", "Marysia", "Anastazja"];
;
const prefixs = ["Wydaje mi się", "Mam wrażenie", "Szczerze powiedziawszy, myślę", " Szczerze uważam", "Na 100% twierdzę", "Jestem pewien"]
const nameGenerator = () => {
    const indexName = Math.floor(Math.random() * names.length);
    // div.textContent =`że najlepsze będzie imię ${names[indexName]}`;
    // const indexPrefix = Math.floor(Math.random() * prefixs.length);
    // div.textContent=`${prefixs[indexPrefix]}, że najlepsze będzie imię ${names[indexName]}`
    div.textContent = `${prefixs[Math.floor(Math.random() * prefixs.length)]}, że najlepsze będzie imię ${names[indexName]}`
}

btn.addEventListener("click", nameGenerator)