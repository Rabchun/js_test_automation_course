let productsJSON = '[{"id": 1, "name": "Laptop", "price": 999, "category": "Electronics"}, {"id": 2, "name": "Book", "price": 15, "category": "Education"}, {"id": 3, "name": "Headphones", "price": 79, "category": "Electronics"}]';

// Convert JSON string to JavaScript array
let products = JSON.parse(productsJSON);

// Filter products by category
function filterProducts(products) {
    return products.filter(p => p.category === "Electronics");
}

// Add a new product to the catalog
function addProduct(name, price, category) {
    let newId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    let newProduct = {
      id: newId,
      name: name,
      price: price,
      category: category
    };

    products.push(newProduct);

    // Convert the updated catalog back to JSON
    productsJSON = JSON.stringify(products);
}

// Calculate total value of all products
function calculateTotal(products) {
    return products.reduce((sum, p) => sum + p.price, 0);
}

console.log('Products are filtered by the category "Electronics":');
console.log(filterProducts(products));
addProduct("Notebook", 30, "Education");
console.log('The product "Notebook" has been added to the catalog and the updated catalog has been converted back to JSON:');
console.log(productsJSON);
console.log(`Total value of all products: ${calculateTotal(products)}`);