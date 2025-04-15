document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  card.addEventListener("click", (event) => {
    if (event.target.classList.contains("submit-btn")) {
      return;
    }
    const productData = {
      title: card.querySelector(".card-title").textContent,
      category: card.querySelector(".card-category").textContent,
      description: card.querySelector(".card-description").textContent,
      price: card.querySelector(".card-price").textContent,
      rating: card.querySelector(".card-rating span").textContent,
      image: card.querySelector("img").src
    };
    localStorage.setItem("selectedProduct", JSON.stringify(productData));
    window.location.href = "pr-details.html";
  });
});
