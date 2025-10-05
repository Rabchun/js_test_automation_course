const allProductsAvailable = products => {
    return products.every (item => item.inventory.isAvailable);
}

const testProducts = [{
    id:101,
    name: "Wireless Headphones",
    inventory: {
        stock: 15,
        isAvailable: true
    }
}, {
    id: 102,
    name : "Gaming Mouse",
    inventory: {
        stock : 0,
        isAvailable: false
    }
}, {
    id: 103,
    name: "Mechanical Keyboard",
    inventory: {
        stock: 8,
        isAvailable: true
    }
}]

console.log (allProductsAvailable (testProducts)); 