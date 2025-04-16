const apiURL = "https://fakestoreapi.com/products"; 
    
        const container = document.getElementById("products-container");
        async function loadProducts() {
          try {
            const response = await fetch(apiURL);
            if (!response.ok) {
              throw new Error("Error");
            }
            const data = await response.json();
            data.forEach(product => {
              const el = document.createElement("div");
              el.className = "product";
              el.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
              `;
              container.appendChild(el);
            });
          } catch (error) {
            console.error("something goes wrong:", error);
            container.innerHTML = "<p>Error.Try again</p>";
          }
        }
        loadProducts();