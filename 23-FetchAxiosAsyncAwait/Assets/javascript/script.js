const apiURL = "https://fakestoreapi.com/products";

    const container = document.getElementById("products-container");
    axios.get(apiURL)
      .then(res => {
        res.data.forEach(product => {
          const el = document.createElement("div");
          el.className = "product";
          el.innerHTML = `
            <img src="${product.image}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>$${product.price}</p>
          `;
          container.appendChild(el);
        });
      })
      .catch(err => {
        console.error("Error.Try again:", err);
        container.innerHTML = "<p>Error</p>";
      });