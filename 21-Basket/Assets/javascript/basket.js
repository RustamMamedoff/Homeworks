const basket = document.querySelector(".basket");
    const totalPriceEl = document.querySelector(".total-price");
    const storedItem = JSON.parse(localStorage.getItem("basketItem"));
  
    if (storedItem) {
      renderItem(storedItem);
    } else {
      basket.innerHTML = "<p>empty basket</p>";
    }
    function renderItem(item) {
      const unitPrice = parseFloat(item.price.replace("$", ""));
      let count = item.count;
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("basket-item");
      itemDiv.innerHTML = `
        <div class="image">
          <img src="${item.image}" alt="Product Image" width="150" />
        </div>
        <h6 class="title">${item.title}</h6>
        <p class="category">${item.category}</p>
        <p class="price">$<span class="item-price">${(unitPrice * count).toFixed(2)}</span></p>
        <div class="count-area">
          <button class="minus-btn" ${count <= 1 ? "disabled" : ""}>-</button>
          <p class="count">${count}</p>
          <button class="plus-btn">+</button>
        </div>
        <button class="btn btn-danger">Remove</button>
      `;
      basket.appendChild(itemDiv);
      updateTotal(unitPrice, count);
      const minusBtn = itemDiv.querySelector(".minus-btn");
      const plusBtn = itemDiv.querySelector(".plus-btn");
      const countEl = itemDiv.querySelector(".count");
      const priceEl = itemDiv.querySelector(".item-price");
      const removeBtn = itemDiv.querySelector(".btn-danger");
      plusBtn.addEventListener("click", () => {
        count++;
        countEl.textContent = count;
        minusBtn.disabled = count <= 1;
        priceEl.textContent = (unitPrice * count).toFixed(2);
        updateTotal(unitPrice, count);
      });
      minusBtn.addEventListener("click", () => {
        if (count > 1) {
          count--;
          countEl.textContent = count;
          minusBtn.disabled = count <= 1;
          priceEl.textContent = (unitPrice * count).toFixed(2);
          updateTotal(unitPrice, count);
        }
      });
      removeBtn.addEventListener("click", () => {
        localStorage.removeItem("basketItem");
        basket.innerHTML = "<p>empty basket.</p>";
        totalPriceEl.textContent = "$0";
      });
    }
    function updateTotal(unitPrice, count) {
      const total = unitPrice * count;
      totalPriceEl.textContent = `$${total.toFixed(2)}`;
    }