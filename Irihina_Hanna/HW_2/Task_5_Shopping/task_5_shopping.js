let products = ["хліб", "молоко", "яблука"];
let prices = [38, 75, 45];
let cart = [];


while (true) {
    let Order = prompt("Що Ви хочете придбати? (хліб, молоко, яблука) або введіть 'стоп' для завершення").toLowerCase();

    if (Order === "стоп") {
        break;
    }

    if (products.includes(Order)) {
        cart.push(Order);
        alert(`Товар "${Order}" додано до кошика.`);
    } else {
        alert(`Товар "${Order}" не знайдено. Спробуйте ще раз.`);
        continue;
    }
}

// Підрахунок загальної суми
let total = 0;
for (let item of cart) {
    let index = products.indexOf(item);
    total += prices[index];
}

// Вивід результатів
var discountedTotal = total * 0.9;
console.log("Ваш кошик: " + cart.join(", "));
if (cart.includes("молоко") && cart.includes("хліб")) {
    console.log("Загальна сума з 10% знижкою: " + discountedTotal.toFixed(2) + " грн.");
} else {
    console.log("Загальна сума: " + total + " грн.");
}

if (total > 500) {
    console.log ("У вас безкоштовна доставка!")
}
