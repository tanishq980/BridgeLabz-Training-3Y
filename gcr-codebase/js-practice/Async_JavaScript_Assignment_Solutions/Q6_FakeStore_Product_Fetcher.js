// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run in a browser, or use Node.js 18+ (which has built-in fetch).
// Optional visual bonus: open Q6_Product_Dashboard.html in a browser.

const API_URL = "https://fakestoreapi.com/products";

async function loadProducts() {
    try {
        const response = await fetch(API_URL);

        // fetch() does not reject for HTTP error status codes,
        // so check response.ok explicitly.
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();

        products.forEach((product) => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("------------------------------");
        });

        // The optional HTML card rendering is handled by the
        // separate Q6_Product_Dashboard.js file.
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

loadProducts();
