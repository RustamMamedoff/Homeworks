document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".product-container");
  const product = JSON.parse(localStorage.getItem("selectedProduct"));

  if (!product) return;
  container.innerHTML = `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" />
      <h2>${product.title}</h2>
      <p>${product.category}</p>
      <p>${product.description}</p>
      <p class="unit-price">${product.price}</p>
      <div class="quantity-control">
        <button id="decrease">-</button>
        <span id="quantity">1</span>
        <button id="increase">+</button>
      </div>
      <p>Total Price: <span id="total">${product.price}</span></p>
      <button id="addToBasket">Add to Basket</button>
    </div>
  `;
  const priceNum = parseFloat(product.price.replace("$", ""));
  let quantity = 1;
  const updateTotal = () => {
    document.getElementById("total").textContent = `$${(priceNum * quantity).toFixed(2)}`;
    document.getElementById("quantity").textContent = quantity;
  };
  document.getElementById("increase").addEventListener("click", () => {
    quantity++;
    updateTotal();
  });
  document.getElementById("decrease").addEventListener("click", () => {
    if (quantity > 1) {
      quantity--;
      updateTotal();
    }
  });
  document.getElementById("addToBasket").addEventListener("click", () => {
    const basketItem = {
      ...product,
      quantity,
      totalPrice: (priceNum * quantity).toFixed(2)
    };
    const basket = JSON.parse(localStorage.getItem("basket")) || [];
    basket.push(basketItem);
    localStorage.setItem("basket", JSON.stringify(basket));
    window.location.href = "basket.html";
  });
});
