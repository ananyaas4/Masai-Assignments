function processProducts(products) {
    let productNames = products.map(product => product.name);
    productNames.forEach(productName => {
        for (let product of products)
        {
            if (product.name === productName)
            {
                if (product.price > 50)
                {
                    console.log(`${productName} is above $50`);
                }
                else
                {
                    console.log(`${productName} is below $50`);
                }
                break;
            }
        }
    });
}
let products = [{ name: "Laptop", price: 1000 }, { name: "Mouse", price: 20 }];
processProducts(products);