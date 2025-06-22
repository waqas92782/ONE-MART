// Assume data and Treadingproducts are already included from data.js
const allProducts = [...data, ...Treadingproducts];

// Elements for main product details
const detailTitle = document.querySelector("#detail-title");
const detailImage = document.querySelector("#detail-image");
const detailPrice = document.querySelector("#detail-price");
const detailDesc = document.querySelector("#detail-desc");
const des2 = document.getElementById("zzz");

// Get current product ID from URL
const params = new URLSearchParams(window.location.search);
let currentProductId = parseInt(params.get("id"));

// Function to render main product details
function renderProductDetails(product) {
  if (!product) {
    detailTitle.innerText = "Product Not Found!";
    detailImage.src = "";
    detailImage.alt = "";
    detailPrice.innerText = "";
    detailDesc.innerText = "";
    des2.innerHTML = "";
    return;
  }

  detailTitle.innerText = product.title;
  detailImage.src = product.img;
  detailImage.alt = product.title;
  detailPrice.innerHTML = `£${product.price.toFixed(2)} <span class="p-free-sopping">+ Free Shipping</span>`;
  detailDesc.innerText = product.description;
  des2.innerHTML = product.description;
}

// Initial render of current product
const initialProduct = allProducts.find(p => p.id === currentProductId);
renderProductDetails(initialProduct);

// Description display toggles
const DisplayDes = document.getElementById("dec-para");
const RSection = document.getElementById("resid");
let ttt = document.querySelector(".des-section");
let FFF = document.querySelector(".rewviese-section");

RSection.addEventListener("click", function () {
  FFF.style.display = "block";
  ttt.style.display = "none";
});

DisplayDes.addEventListener("click", function () {
  FFF.style.display = "none";
  ttt.style.display = "block";
});

// Related products section
const relatedSection = document.getElementById("related-products");

// Get related products: exclude current, shuffle, pick 4
function getRelatedProducts(currentId) {
  const filtered = allProducts.filter(p => p.id !== currentId);
  return filtered.sort(() => 0.5 - Math.random()).slice(0, 4);
}

// Render related products cards and add click listeners
function renderRelatedProducts(currentId) {
  const relatedProducts = getRelatedProducts(currentId);

  if (relatedSection) {
    relatedSection.innerHTML = relatedProducts.map(product => `
      <div class="product-card" data-id="${product.id}" style="cursor:pointer;">
        <img src="${product.img}" alt="${product.title}" />
        <h4>${product.title}</h4>
        <div class="Your-rating-star">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <p>$${product.price.toFixed(2)}</p>
      </div>
    `).join('');

    // Add click event to each product card
    document.querySelectorAll(".product-card").forEach(card => {
      card.addEventListener("click", function () {
        const selectedId = parseInt(this.dataset.id);
        const selectedProduct = allProducts.find(p => p.id === selectedId);
        if (selectedProduct) {
          currentProductId = selectedId;  // Update current ID
          renderProductDetails(selectedProduct); // Update main details
          renderRelatedProducts(selectedId);      // Refresh related products
          // Optional: update URL without reload
          history.pushState(null, '', `product-details.html?id=${selectedId}`);
          // Scroll to top or details section if needed
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    });
  }
}

// Initial render of related products
renderRelatedProducts(currentProductId);

  document.querySelector('.add-to-cart').addEventListener('click', function (e) {
    e.preventDefault();

    const title = document.getElementById('detail-title').innerText;
    const price = parseFloat(document.getElementById('detail-price').innerText.replace('£', '').trim());
    const image = document.getElementById('detail-image').src;
    const qty = parseInt(document.querySelector('.cart-counter').value) || 1;

    const newItem = {
      id: Date.now(), // unique ID
      title,
      price,
      image,
      qty,
      total: price * qty
    };

    let cart = JSON.parse(localStorage.getItem('cartItems')) || [];

    // If same item exists, update qty
    const existing = cart.find(item => item.title === title);
    if (existing) {
      existing.qty += qty;
      existing.total = existing.qty * existing.price;
    } else {
      cart.push(newItem);
    }

    localStorage.setItem('cartItems', JSON.stringify(cart));

    // Optional: redirect to cart page
    window.location.href = 'cart.html';
  });
