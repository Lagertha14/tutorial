const btnCalc = document.querySelector("button");

btnCalc.addEventListener("click", function () {
    const weightEl = document.querySelector("#weight");
    const heightEl = document.querySelector("#height");

    const resultBMI = weightEl.value / Math.pow(heightEl.value / 100, 2);
    console.log(resultBMI);

})

const lists = [
[
    { id: 12312, name: "Banan", quantity: 3, price: 1.365786785 },
    { id: 53674, name: "Pomidor", quantity: 23, price: 0.67845 },
    { id: 76355, name: "Makaron", quantity: 2, price: 3.96789 },
    { id: 45536, name: "Lampa", quantity: 1, price: 25.06780 },
    { id: 34553, name: "Chipsy", quantity: 3, price: 12.07897890 },
    { id: 64434, name: "Zupka Chińska", quantity: 87, price: 1.99 },
],

[
    { id: 12312, name: "Banan", quantity: 3, price: 1.365786785 },
    { id: 53674, name: "Pomidor", quantity: 23, price: 0.67845 },
    { id: 64434, name: "Zupka Chińska", quantity: 87, price: 1.99 },
],

[
    { id: 12312, name: "Banan", quantity: 3, price: 1.365786785 },
    { id: 64434, name: "Zupka Chińska", quantity: 87, price: 1.99 },
]


]



render(lists[2]);

// wyświetl listę
// jeśli liczba danego rodzaju artykułu jest większa niż 3 ( pierwsze 3 w tej samej cenie),są objęte rabatem 50%
function render(list) {

    let shoppingListEl = document.getElementById("container");
    let quantityTotalEl = document.getElementById("quantityTotal");
    let priceTotalEl = document.getElementById("priceTotal");
    let mostExpensiveItemEl = document.getElementById("mostExpensiveItem");
    let quantityTotal = 0;
    let priceTotal = 0;
    let priceTotalAfterDiscount = 0;
    let currentListItem = list[0];

    shoppingListEl.innerHTML = ""

    for (let i = 0; i < list.length; i++) {

        // tworzenie el i dodawanie do html
        let li = document.createElement("li")
        li.textContent = list[i].quantity + "x " + list[i].name;
        li.addEventListener("click", function () {
            deleteItem(list, list[i].id)
        })
        shoppingListEl.appendChild(li);

        // liczenie ilości sztuk
        quantityTotal += list[i].quantity;

        // liczenie ceny
        priceTotal += list[i].quantity * list[i].price;

        // najdroższy element
        if (list[i].price > currentListItem.price) {
            currentListItem = list[i];
        }

        // rabat
        console.log("rabat")
        if (list[i].quantity > 3) {
            let priceAfterDiscount = list[i].price * 0.5;
            priceTotalAfterDiscount += (3 * list[i].price) + (priceAfterDiscount * (list[i].quantity - 3));
        } else {
            priceTotalAfterDiscount += list[i].quantity * list[i].price;
        }
    }
    // wyświetlanie el
    quantityTotalEl.textContent = "Sztuk: " + quantityTotal + " szt";
    priceTotalEl.textContent = "Razem: " + priceTotal.toFixed(2) + " zł - cena po rabacie " + priceTotalAfterDiscount.toFixed(2) + " zł";
    mostExpensiveItemEl.textContent = "Najdroższy artykuł: " + currentListItem.name + " kosztuje " + currentListItem.price.toFixed(2) + " zł";
}

function deleteItem(list, id) {
    console.log("delete")
    for (let i = 0; i < list.length; i++) {
        if (id === list[i].id) {
            list[i].quantity = list[i].quantity - 1;
            if (list[i].quantity <= 0) {
                list.splice(i, 1)
            }
            render(list)
        }
    }

}