

// ================== BANNERS ==================
const banners = {
  oxford:
    "//bizweb.dktcdn.net/100/292/624/collections/dscf8155.jpg?v=1650384517223",
  loafer:
    "//bizweb.dktcdn.net/100/292/624/collections/191121-30.jpg?v=1650384826053",
  derby:
    "//bizweb.dktcdn.net/100/292/624/collections/db1214-28.jpg?v=1586950393023",
};

// ================== RENDER FUNCTION ==================
function render(products, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = "";

  products.forEach((p) => {
    let thumbsHTML = p.thumbs
      .map(
        (t) => `<img src="${t}" class="border thumb" width="40" height="40" />`
      )
      .join("");

    container.innerHTML += `
      <div class="col-md-3">
        <div class="card custom-card position-relative">
          <span class="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 small">${p.discount}</span>
          <img src="${p.mainImg}" class="card-img-top main-img" alt="${p.title}" />
          <div class="card-body position-relative text-center">
            <div class="d-flex justify-content-center gap-2 mb-2 thumbnails">
              ${thumbsHTML}
            </div>
            <h7 class="small product-title">${p.category}</h7>
            <h6 class="card-title-seriese product-subtitle">${p.title}</h6>
            <p class="price-info">
              <span class="text-danger fw-bold me-2">${p.priceNew}</span>
              <span class="text-muted text-decoration-line-through">${p.priceOld}</span>
            </p>
            <button class="btn nutchon choose-button">Tùy chọn</button>
          </div>
        </div>
      </div>
    `;
  });
}

// ================== PAGE LOAD ==================
// Lấy tham số từ URL
const urlParams = new URLSearchParams(window.location.search);
const type = urlParams.get("type");

// Map sản phẩm theo loại
const productMap = {
  oxford: oxfordProducts,
  loafer: loaferProducts,
  derby: derbyProducts,
};

// Render banner
const bannerEl = document.getElementById("cateroge-banner");
if (bannerEl) bannerEl.src = banners[type] || "";

// Render sản phẩm
render(productMap[type] || [], "cateroge-products");

// ================== HOVER EFFECT ==================
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".custom-card").forEach(function (card) {
    const mainImg = card.querySelector(".main-img");
    const thumbnails = card.querySelectorAll(".thumb");

    let index = 0;
    let interval;

    // Hover vào card: tự động chuyển ảnh
    card.addEventListener("mouseenter", () => {
      interval = setInterval(() => {
        index = (index + 1) % thumbnails.length;
        mainImg.src = thumbnails[index].src;
      }, 1000);
    });

    // Rời chuột: dừng và reset ảnh đầu tiên
    card.addEventListener("mouseleave", () => {
      clearInterval(interval);
      index = 0;
      mainImg.src = thumbnails[0].src;
    });

    // Click vào ảnh nhỏ => đổi ảnh chính
    thumbnails.forEach((thumb, i) => {
      thumb.addEventListener("click", () => {
        clearInterval(interval); // dừng auto chuyển
        index = i;
        mainImg.src = thumb.src;
      });
    });
  });
});
