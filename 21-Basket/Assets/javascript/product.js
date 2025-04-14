document.querySelector(".submit-btn").addEventListener("click", function () {
    const card = document.querySelector(".card");
    const product = {
      image: card.querySelector("img").src,
      title: card.querySelector(".card-title").textContent,
      category: card.querySelector(".card-category").textContent,
      price: card.querySelector(".card-price").textContent,
      count: 1
    };
    localStorage.setItem("basketItem", JSON.stringify(product));
    window.location.href = "basket.html";
  });