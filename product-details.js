// product-details.js
const detailTitle = document.querySelector("#detail-title");
const detailImage = document.querySelector("#detail-image");
const detailPrice = document.querySelector("#detail-price");
const detailDesc = document.querySelector("#detail-desc");
const des2 = document.getElementById("zzz")
if (detailTitle && detailImage && detailPrice && detailDesc) {
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id"));

    // Combine both arrays
    const allProducts = [...data, ...Treadingproducts];
    const product = allProducts.find(p => p.id === id);

    des2.innerHTML = product.description;
    if (product) {
        detailTitle.innerText = product.title;
        detailImage.src = product.img;
        detailImage.alt = product.title;
        detailPrice.innerHTML = `£${product.price.toFixed(2)}  <span class="p-free-sopping">+ Free Shipping</span>`;
        detailDesc.innerText = product.description;
    } else {
        detailTitle.innerText = "Product Not Found!";
        detailImage.src = "";
        detailImage.alt = "";
        detailPrice.innerText = "";
        detailDesc.innerText = "";
    }
};


// descritopn display code 

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