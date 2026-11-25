// Optional Q6 bonus – create product cards dynamically in the browser.

const productContainer = document.getElementById("products");
const statusMessage = document.getElementById("status");

async function displayProductCards() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();
        productContainer.innerHTML = "";

        products.forEach((product) => {
            const card = document.createElement("article");
            card.className = "product-card";

            const title = document.createElement("h3");
            title.textContent = product.title;

            const image = document.createElement("img");
            image.src = product.image;
            image.alt = product.title;

            const price = document.createElement("p");
            price.className = "price";
            price.textContent = `$${product.price}`;

            card.append(image, title, price);
            productContainer.appendChild(card);
        });

        statusMessage.textContent = `${products.length} products loaded.`;
    } catch (error) {
        statusMessage.textContent = "Failed to load products. Please try again.";
        console.error(error);
    }
}

displayProductCards();
