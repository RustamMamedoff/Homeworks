const apiURL = "https://fakestoreapi.com/products";
const container = document.getElementById("products-container");

fetch(apiURL)
  .then(response => response.json())
  .then(data => {
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
  })
  .catch(err => {
    console.error("something goes wrong:", err);
    container.innerHTML = "<p>Error.Try again</p>";
  });