// shopping

const prompt = require("prompt-sync")();
let products = ["apple", "milk", "chocolate"]
let prices = [50, 75, 100]
let cart = [];

while (true) {
  const productsItem = prompt('Введіть назву товару (apple 50грн, milk 75грн, chocolate 100грн) або "stop" для завершення:').trim().toLowerCase()

  if (productsItem === 'stop') {
    break;
  }

  if (products.includes(productsItem)) {
    cart.push(productsItem);
    console.log(`"${productsItem}" додано до кошика.`);
  } else {
    console.log(`"${productsItem}" не знайдено в списку товарів.`);
  }
}

cart.forEach((item, index) => {
  const price = prices[products.indexOf(item)];
  console.log(`${index + 1}. ${item} - ${price} грн`);
});

let totalBeforeDiscount = cart.reduce((sum, item) => {
  const price = prices[products.indexOf(item)];
  return sum + price;
}, 0);

console.log(`Загальна сума до сплати без знижки: ${totalBeforeDiscount.toFixed(2)} грн`);

let total = totalBeforeDiscount;

if (cart.includes("milk") && cart.includes("chocolate")) {
  console.log("Ваша знижка 10%");
  total *= 0.9;
}

console.log(`Сума до сплати зі знижкою: ${total.toFixed(2)} грн`);

if (total > 500) {
  console.log("У вас безкоштовна доставка!");
}