const container = document.querySelector(".Best-Selling-Products-lits");
const TContainer = document.querySelector(".Trading-Selling-Products-lits");

// Best Selling Products Listing
data.forEach(product => {
    const item = document.createElement("div");
    item.className = "Best-Selling-Products-lits-items";

    item.innerHTML = `
        <div class="Best-Selling-Products-lits-items-img">
            <a href="product-details.html?id=${product.id}">
                <img src="${product.img}" alt="${product.title}">
            </a>
        </div>
        <span class="sub-title">Groceries</span>
        <a href="product-details.html?id=${product.id}" class="brand">${product.title}</a>
        <div class="Your-rating-star">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <span class="price">£${product.price.toFixed(2)}</span>
    `;

    container.appendChild(item);
});

// Trending Products Listing
Treadingproducts.forEach((Tproduct, index) => {
    const Titem = document.createElement("div");
    Titem.className = "Best-Selling-Products-lits-items";

    const spanText = index === 1 ? "Juice" : "Groceries";

    Titem.innerHTML = `
        <div class="Best-Selling-Products-lits-items-img">
            <a href="product-details.html?id=${Tproduct.id}">
                <img src="${Tproduct.img}" alt="${Tproduct.title}">
            </a>
        </div>
        <span class="sub-title">${spanText}</span>
        <a href="product-details.html?id=${Tproduct.id}" class="brand">${Tproduct.title}</a>
        <div class="Your-rating-star">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <span class="price">£${Tproduct.price.toFixed(2)}</span>
    `;

    TContainer.appendChild(Titem);
});

