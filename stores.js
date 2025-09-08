const stores = {
  hanoi: [
    {
      name: "Quận Hai Bà Trưng",
      address: "261 Phố Huế, Hai Bà Trưng, Hà Nội",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.529852251756!2d105.84917167379663!3d21.01147508837485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab8b39d1a847%3A0x27ff1e0fea5f515c!2zMjYxIFAuIEh14bq_LCBQaOG7kSBIdeG6vywgSGFpIELDoCBUcsawbmcsIEjDoCBO4buZaSAxMDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1757217902201!5m2!1sen!2s",
    },
    {
      name: "Quận Hoàn Kiếm",
      address: "123 Tràng Tiền, Hoàn Kiếm, Hà Nội",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14896.739683222675!2d105.84088502857847!3d21.025285619206375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab85b21db31f%3A0x497acf351c7dd9fc!2sTrang%20Tien%20Plaza!5e0!3m2!1sen!2s!4v1757218001680!5m2!1sen!2s",
    },
  ],
  hcm: [
    {
      name: "Quận 1",
      address: "45 Lê Lợi, Quận 1, HCM",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15677.928679081162!2d106.68297657143249!3d10.774334434226427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f4714ef72eb%3A0x14dd909906876b0c!2zNDUgTMOqIEzhu6NpLCBC4bq_biBOZ2jDqSwgUXXhuq1uIDEsIEjhu5MgQ2jDrSBNaW5oLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1757218038293!5m2!1sen!2s",

    },
  ],
};

const storeList = document.getElementById("store-list");
const mapFrame = document.getElementById("map");
const citySelect = document.getElementById("city");

function renderStores(city) {
  storeList.innerHTML = "";
  stores[city].forEach((s, index) => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `<strong>${s.name}</strong><br>${s.address}`;
    
    // Click đổi bản đồ
    li.addEventListener("click", () => {
      mapFrame.src = s.map;
      document.querySelectorAll("#store-list li").forEach(el => el.classList.remove("active"));
      li.classList.add("active");
    });

    storeList.appendChild(li);

    // mặc định chọn cái đầu tiên
    if (index === 0) {
      li.classList.add("active");
      mapFrame.src = s.map;
    }
  });
}

// render mặc định Hà Nội
renderStores("hanoi");

// khi đổi tỉnh/thành
citySelect.addEventListener("change", (e) => {
  renderStores(e.target.value);
});
