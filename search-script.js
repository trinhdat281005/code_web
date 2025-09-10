// File: search-results.js

// Đảm bảo code chạy sau khi trang đã tải xong
document.addEventListener("DOMContentLoaded", function () {
  // 1. Lấy từ khóa tìm kiếm từ URL
  const params = new URLSearchParams(window.location.search);
  const query = params.get("query");

  // 2. Lấy các phần tử HTML để hiển thị kết quả và thông báo
  const resultsContainer = document.getElementById("search-results");
  const noResultsMessage = document.getElementById("no-results-message");
  const heading = document.querySelector(".search-results-heading");

  // 3. Cập nhật tiêu đề trang
  if (query) {
    heading.textContent = ``;
  } else {
    heading.textContent = `Kết quả tìm kiếm`;
  }

  // 4. Kiểm tra xem file products.js đã được tải chưa
  if (!window.products) {
    console.error(
      "products.js not loaded. Vui lòng kiểm tra lại đường dẫn file."
    );
    noResultsMessage.style.display = "block";
    return; // Dừng chương trình nếu không có dữ liệu
  }

  // 5. Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = window.products.filter((product) =>
    product.title.toLowerCase().includes(query?.toLowerCase() || "")
  );

  // 6. HIỂN THỊ KẾT QUẢ hoặc THÔNG BÁO TẠI ĐÂY
  if (filteredProducts.length > 0) {
    // Nếu có sản phẩm, tạo chuỗi HTML và chèn vào trang
    let productsHtml = "";
    filteredProducts.forEach((product) => {
      productsHtml += `
                <div class="col-md-4 col-sm-6 product-item">
                    <a href="product-detail.html?id=${product.id}">
                        <img src="${product.mainImg}" alt="${product.title}" class="img-fluid">
                        <h3>${product.title}</h3>
                        <p>${product.priceNew}</p>
                    </a>
                </div>
            `;
    });
    resultsContainer.innerHTML = productsHtml;
    noResultsMessage.style.display = "none"; // Ẩn thông báo
  } else {
    // Nếu không có sản phẩm nào, hiển thị thông báo
    resultsContainer.innerHTML = "";
    noResultsMessage.style.display = "block";
  }
});
