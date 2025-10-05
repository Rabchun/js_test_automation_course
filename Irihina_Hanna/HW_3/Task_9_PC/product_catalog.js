
let productsJSON = '[{"id": 1, "name": "Laptop", "price": 999, "category": "Electronics"}, {"id": 2, "name": "Book", "price": 15, "category": "Education"}, {"id": 3, "name": "Headphones", "price": 79, "category": "Electronics"}]';

// Parse a JSON string containing an array of products
let products = JSON.parse(productsJSON);
console.log(products);

// Filter products by category
 let ElectronicProducts = products.filter(product => product.category === "Electronics");
console.log( 'This is products from the Electronics category: ' + ElectronicProducts.map(product => product.name).join(" and "));

let EducationProducts = products.filter (product => product.category === "Education");
console.log( 'This is products from the Education category: ' + (EducationProducts.map (product => product.name).join(" and ")));

//Add a new product to the catalog
let newProduct = {id: 4, name: "Phone", price: 699, category: "Electronics"};
products.push(newProduct);
console.log(products);

//Calculate total value of all products
let total= products.reduce ((sum,products) => sum + products.price, 0);
console.log('Total value of all products: ' + total);


//Convert the updated catalog back to JSON
let updatedCatalog = JSON.stringify(products);
console.log(updatedCatalog);
