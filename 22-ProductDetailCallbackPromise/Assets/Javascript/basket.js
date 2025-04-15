document.addEventListener("DOMContentLoaded", () => {
  const basketContainer = document.querySelector(".basket");
  const totalPriceEl = document.querySelector(".total-price");

  let basket = JSON.parse(localStorage.getItem("basket")) || [];
  const renderBasket = () => {
    basketContainer.innerHTML = "";
    let total = 0;
    basket.forEach((item, index) => {
      const itemEl = document.createElement("div");
      itemEl.classList.add("basket-item");
      itemEl.style.borderBottom = "1px solid #ddd";
      itemEl.style.padding = "10px 0";
      itemEl.innerHTML = `
        <h3>${item.title}</h3>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: $${item.totalPrice}</p>
        <button class="remove-btn" data-index="${index}">Remove</button>
      `;
      basketContainer.appendChild(itemEl);
      total += parseFloat(item.totalPrice);
    });
    totalPriceEl.textContent = `$${total.toFixed(2)}`;
  };
  basketContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-btn")) {
      const index = e.target.dataset.index;
      basket.splice(index, 1);
      localStorage.setItem("basket", JSON.stringify(basket));
      renderBasket();
    }
  });
  renderBasket();
});


