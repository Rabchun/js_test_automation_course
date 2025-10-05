let products = ["bread", "milk", "apples"];
let prices =[60, 80, 90]
let cart = [];

while (true) {
    let input = prompt("Which product would you like to add to cart? (enter 'stop' to finish)");

    if (input.toLowerCase() === "stop") {
        break;
    }

    if (products.includes(input)) {
        cart.push(input);
        alert("Product " + input + " added to cart");
    } else {
        alert("This product is not available in the store.")
    }
}

console.log("Your order: ");
for (let item of cart) {
  console.log(item);
}

let total = 0;
for (let item of cart) {
    let value = products.indexOf(item);
    total += prices[value];
}

if (cart.includes("milk") && cart.includes("bread")) {
    total *= 0.9;
    console.log("10% discount is applied");
}

console.log("Total amount to pay: " + total + " UAH");

if (total > 500) {
    console.log("You have free shipping!");
}