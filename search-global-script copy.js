
// File: global.js (hoặc tên tương tự)

// Hàm để cập nhật số lượng sản phẩm trong giỏ hàng
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCountElement = document.getElementById("cart-count");

  if (cartCountElement) {
    // Tính tổng số lượng sản phẩm
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    // Cập nhật text hiển thị
    cartCountElement.textContent = totalItems;

    // Ẩn huy hiệu nếu giỏ hàng rỗng, hiện nếu có sản phẩm
    if (totalItems === 0) {
      cartCountElement.style.display = "none";
    } else {
      cartCountElement.style.display = "block";
    }
  }
}

// Gọi hàm này khi trang web tải xong
document.addEventListener("DOMContentLoaded", updateCartCount);

// Bạn cũng có thể đặt các mã JavaScript chung khác của bạn vào đây,
// ví dụ: mã xử lý hiển thị/ẩn thanh tìm kiếm.
// ... (mã xử lý thanh tìm kiếm của bạn từ search-global.js cũng có thể ở đây)
// File: global.js
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử cần thiết
  const searchIcon = document.querySelector(".search-icon-link");
  const searchOverlay = document.querySelector(".search-overlay-container");
  const closeSearchBtn = document.querySelector(".close-search-btn");

  // Hiển thị thanh tìm kiếm khi click vào icon
  if (searchIcon) {
    searchIcon.addEventListener("click", function (e) {
      e.preventDefault(); // Ngăn trình duyệt chuyển hướng khi click vào thẻ <a>
      searchOverlay.classList.add("active"); // Thêm class để hiện thanh tìm kiếm
      document.body.style.overflow = "hidden"; // Ngăn cuộn trang
      document.querySelector(".search-input").focus(); // Tự động focus vào ô input
    });
  }

  // Ẩn thanh tìm kiếm khi click vào nút "X"
  if (closeSearchBtn) {
    closeSearchBtn.addEventListener("click", function () {
      searchOverlay.classList.remove("active"); // Xóa class để ẩn thanh tìm kiếm
      document.body.style.overflow = ""; // Cho phép cuộn trang trở lại
    });
  }
});