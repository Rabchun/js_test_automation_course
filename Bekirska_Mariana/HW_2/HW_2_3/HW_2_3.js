let products = ["bread", "milk", "apples"];
let prices = [260, 260, 100];
let cart = [ ];
let total = 0;
let discount = 0;
while (true) {
    let productName = prompt("What product do you want to add to cart? If you don't want to add anything, you should type 'stop'").trim().toLowerCase();
    if (productName === "stop") {
        break;
    }
    if (products.includes(productName)) {
        cart.push(productName);
        total = total + prices[products.indexOf(productName)];
    } else {
        console.log("Don't have such product(");
    } 
}

if (cart.length > 0) {
    console.log(cart);
}

if (cart.includes("bread") && cart.includes("milk")) {
    discount = total * 10 / 100;
    total = total - discount;
} 

if (total > 0) {
    console.log(`Your total price is ${total}. Your discount is ${discount}!`);
}

if (total > 500) {
    console.log("You have free shipping!");
} else if (total !== 0 && total < 500) {
    console.log("Your total price is less than 500, so you will pay for the shipping additionally! ")
}