/* ===== Product Data (realistic PK prices + public image URLs) ===== */
const products = [
  {
    id: 1,
    brand: "samsung",
    name: "Samsung Galaxy A16",
    specs: "6.7\" Super AMOLED • 50MP • 5000mAh • Helio G99",
    price: 46999,
    oldPrice: 52999,
    badge: "Popular",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a16-4g.jpg",
    details: {
      display: "6.7\" Super AMOLED, 90Hz",
      camera: "50MP + 5MP + 2MP | 13MP Front",
      battery: "5000 mAh, 25W",
      ram: "6/8 GB",
      storage: "128/256 GB",
      os: "Android 14, One UI"
    }
  },
  {
    id: 2,
    brand: "samsung",
    name: "Samsung Galaxy A36",
    specs: "6.7\" AMOLED 120Hz • 50MP OIS • 5000mAh",
    price: 89999,
    oldPrice: 99999,
    badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a36.jpg",
    details: {
      display: "6.7\" Super AMOLED, 120Hz",
      camera: "50MP OIS + 8MP + 5MP | 12MP Front",
      battery: "5000 mAh, 45W",
      ram: "8/12 GB",
      storage: "128/256 GB",
      os: "Android 15, One UI"
    }
  },
  {
    id: 3,
    brand: "samsung",
    name: "Samsung Galaxy S24",
    specs: "6.2\" Dynamic AMOLED • 50MP • Snapdragon 8 Gen 3",
    price: 189999,
    oldPrice: 219999,
    badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24.jpg",
    details: {
      display: "6.2\" Dynamic AMOLED 2X, 120Hz",
      camera: "50MP + 10MP + 12MP | 12MP Front",
      battery: "4000 mAh, 25W",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 14, One UI 6.1"
    }
  },
  {
    id: 4,
    brand: "samsung",
    name: "Samsung Galaxy A06",
    specs: "6.7\" PLS LCD • 50MP • 5000mAh • Helio G85",
    price: 32999,
    oldPrice: 36999,
    badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a06.jpg",
    details: {
      display: "6.7\" PLS LCD, 60Hz",
      camera: "50MP + 2MP | 8MP Front",
      battery: "5000 mAh, 25W",
      ram: "4/6 GB",
      storage: "64/128 GB",
      os: "Android 14"
    }
  },
  {
    id: 5,
    brand: "xiaomi",
    name: "Xiaomi Redmi Note 14",
    specs: "6.67\" AMOLED 120Hz • 108MP • 5500mAh",
    price: 57999,
    oldPrice: 64999,
    badge: "Best Seller",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-4g.jpg",
    details: {
      display: "6.67\" AMOLED, 120Hz",
      camera: "108MP + 8MP + 2MP | 20MP Front",
      battery: "5500 mAh, 33W",
      ram: "6/8 GB",
      storage: "128/256 GB",
      os: "Android 14, HyperOS"
    }
  },
  {
    id: 6,
    brand: "xiaomi",
    name: "Xiaomi 14T",
    specs: "6.67\" AMOLED 144Hz • Leica 50MP • Dimensity 8300",
    price: 149999,
    oldPrice: 169999,
    badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t.jpg",
    details: {
      display: "6.67\" CrystalRes AMOLED, 144Hz",
      camera: "Leica 50MP + 50MP + 12MP | 32MP Front",
      battery: "5000 mAh, 67W",
      ram: "12 GB",
      storage: "256/512 GB",
      os: "Android 14, HyperOS"
    }
  },
  {
    id: 7,
    brand: "xiaomi",
    name: "Redmi Note 14 Pro",
    specs: "6.67\" AMOLED • 200MP • 5500mAh • 45W",
    price: 82999,
    oldPrice: 89999,
    badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-4g.jpg",
    details: {
      display: "6.67\" AMOLED, 120Hz",
      camera: "200MP + 8MP + 2MP | 20MP Front",
      battery: "5500 mAh, 45W",
      ram: "8/12 GB",
      storage: "256 GB",
      os: "Android 14, HyperOS"
    }
  },
  {
    id: 8,
    brand: "infinix",
    name: "Infinix Note 40",
    specs: "6.78\" AMOLED 120Hz • 108MP • 5000mAh 45W",
    price: 57999,
    oldPrice: 64999,
    badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40.jpg",
    details: {
      display: "6.78\" AMOLED, 120Hz",
      camera: "108MP + 2MP + 2MP | 32MP Front",
      battery: "5000 mAh, 45W + Wireless",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 14, XOS"
    }
  },
  {
    id: 9,
    brand: "infinix",
    name: "Infinix Hot 50",
    specs: "6.78\" 120Hz • 50MP • 5000mAh • Helio G100",
    price: 39999,
    oldPrice: 44999,
    badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50.jpg",
    details: {
      display: "6.78\" IPS, 120Hz",
      camera: "50MP + AI Lens | 8MP Front",
      battery: "5000 mAh, 18W",
      ram: "8 GB",
      storage: "128/256 GB",
      os: "Android 14, XOS"
    }
  },
  {
    id: 10,
    brand: "infinix",
    name: "Infinix Note 60",
    specs: "6.78\" AMOLED • 50MP • 6150mAh • Dimensity",
    price: 96999,
    oldPrice: 109999,
    badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro.jpg",
    details: {
      display: "6.78\" AMOLED, 120Hz",
      camera: "50MP + 8MP | 13MP Front",
      battery: "6150 mAh, 45W",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 15, XOS"
    }
  },
  {
    id: 11,
    brand: "tecno",
    name: "Tecno Spark 30",
    specs: "6.78\" 120Hz • 50MP • 5000mAh",
    price: 34999,
    oldPrice: 39999,
    badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30.jpg",
    details: {
      display: "6.78\" IPS LCD, 120Hz",
      camera: "50MP AI | 8MP Front",
      battery: "5000 mAh, 18W",
      ram: "8 GB",
      storage: "128/256 GB",
      os: "Android 14, HiOS"
    }
  },
  {
    id: 12,
    brand: "tecno",
    name: "Tecno Camon 30",
    specs: "6.78\" AMOLED 120Hz • 50MP OIS • 5000mAh",
    price: 69999,
    oldPrice: 77999,
    badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30.jpg",
    details: {
      display: "6.78\" AMOLED, 120Hz",
      camera: "50MP OIS + 2MP | 50MP Front",
      battery: "5000 mAh, 70W",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 14, HiOS"
    }
  },
  {
    id: 13,
    brand: "tecno",
    name: "Tecno Camon 40 Pro",
    specs: "6.78\" AMOLED • 50MP • 5200mAh • 45W",
    price: 84999,
    oldPrice: 94999,
    badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-pro.jpg",
    details: {
      display: "6.78\" AMOLED, 120Hz",
      camera: "50MP + 8MP | 50MP Front",
      battery: "5200 mAh, 45W",
      ram: "8 GB",
      storage: "256 GB",
      os: "Android 15, HiOS"
    }
  },
  {
    id: 14,
    brand: "iphone",
    name: "iPhone 15",
    specs: "6.1\" Super Retina • 48MP • A16 Bionic • USB-C",
    price: 249999,
    oldPrice: 279999,
    badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
    details: {
      display: "6.1\" Super Retina XDR OLED",
      camera: "48MP + 12MP | 12MP Front",
      battery: "Up to 20 hrs video",
      ram: "6 GB",
      storage: "128/256 GB",
      os: "iOS 17 / 18"
    }
  },
  {
    id: 15,
    brand: "iphone",
    name: "iPhone 16",
    specs: "6.1\" Super Retina • 48MP • A18 • Camera Control",
    price: 299999,
    oldPrice: 329999,
    badge: "Flagship",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
    details: {
      display: "6.1\" Super Retina XDR OLED, 60Hz",
      camera: "48MP Fusion + 12MP | 12MP Front",
      battery: "Up to 22 hrs video",
      ram: "8 GB",
      storage: "128/256 GB",
      os: "iOS 18"
    }
  },
  {
    id: 16,
    brand: "iphone",
    name: "iPhone 16 Pro",
    specs: "6.3\" ProMotion 120Hz • A18 Pro • Titanium",
    price: 399999,
    oldPrice: 439999,
    badge: "Premium",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
    details: {
      display: "6.3\" Super Retina XDR, 120Hz ProMotion",
      camera: "48MP + 48MP + 12MP | 12MP Front",
      battery: "Up to 27 hrs video",
      ram: "8 GB",
      storage: "256/512 GB",
      os: "iOS 18"
    }
  }
];

/* ===== Helpers ===== */
function formatPrice(num) {
  return "Rs. " + num.toLocaleString("en-PK");
}

function createProductCard(p) {
  const badgeClass = p.badge === "Hot" || p.badge === "Best Seller" ? "hot" : "";
  const badgeHtml = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : "";
  const oldPriceHtml = p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : "";

  return `
    <div class="product-card" data-brand="${p.brand}" data-price="${p.price}" data-name="${p.name.toLowerCase()}">
      <div class="product-image">
        ${badgeHtml}
        <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x280/e2e8f0/64748b?text=📱'" />
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <h3 class="product-name">${p.name}</h3>
        <p class="product-specs">${p.specs}</p>
        <div class="product-price">
          <span class="price-current">${formatPrice(p.price)}</span>
          ${oldPriceHtml}
        </div>
        <div class="product-actions">
          <button class="btn-sm btn-details" data-id="${p.id}">Details</button>
          <button class="btn-sm btn-order" data-id="${p.id}">Order</button>
          <a href="https://wa.me/923318373204?text=${encodeURIComponent('Assalam o Alaikum, I want to order: ' + p.name + ' (' + formatPrice(p.price) + ')')}" class="btn-sm btn-wa-sm" target="_blank" rel="noopener" title="WhatsApp">💬</a>
        </div>
      </div>
    </div>
  `;
}

/* ===== Render Products ===== */
const grid = document.getElementById("productsGrid");
const modelSelect = document.getElementById("mobileModel");

function renderProducts(list) {
  if (!list.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">No mobiles found matching your search/filter.</p>`;
    return;
  }
  grid.innerHTML = list.map(createProductCard).join("");
  attachCardEvents();
}

function populateModelSelect() {
  const options = products.map(p => `<option value="${p.name}">${p.name} — ${formatPrice(p.price)}</option>`).join("");
  modelSelect.innerHTML = `<option value="">Select Mobile</option>${options}<option value="Other">Other (write in notes)</option>`;
}

/* ===== Filter & Search ===== */
let currentFilter = "all";
let currentSearch = "";

function applyFilters() {
  let filtered = products;
  if (currentFilter === "budget") {
    filtered = filtered.filter(p => p.price < 50000);
  } else if (currentFilter !== "all") {
    filtered = filtered.filter(p => p.brand === currentFilter);
  }
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.includes(q) ||
      p.specs.toLowerCase().includes(q) ||
      String(p.price).includes(q)
    );
  }
  renderProducts(filtered);
}

document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    applyFilters();
  });
});

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", () => {
  currentSearch = searchInput.value.trim();
  applyFilters();
});

/* ===== Modal ===== */
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(product) {
  const d = product.details;
  modalBody.innerHTML = `
    <div class="modal-image">
      <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200x280/e2e8f0/64748b?text=📱'" />
    </div>
    <div class="modal-brand">${product.brand}</div>
    <h3 class="modal-name">${product.name}</h3>
    <div class="modal-price">${formatPrice(product.price)}${product.oldPrice ? ' <span style="font-size:0.9rem;color:#64748b;text-decoration:line-through;font-weight:400">' + formatPrice(product.oldPrice) + '</span>' : ''}</div>
    <ul class="modal-specs-list">
      <li><strong>Display</strong> ${d.display}</li>
      <li><strong>Camera</strong> ${d.camera}</li>
      <li><strong>Battery</strong> ${d.battery}</li>
      <li><strong>RAM</strong> ${d.ram}</li>
      <li><strong>Storage</strong> ${d.storage}</li>
      <li><strong>OS</strong> ${d.os}</li>
    </ul>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="selectForOrder(${product.id})">Order This Mobile</button>
      <a href="https://wa.me/923318373204?text=${encodeURIComponent('Assalam o Alaikum, I am interested in ' + product.name + ' priced at ' + formatPrice(product.price) + '. Please share availability and delivery details.')}" class="btn btn-whatsapp" target="_blank" rel="noopener">💬 WhatsApp Inquiry</a>
    </div>
  `;
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.hidden = true;
  document.body.style.overflow = "";
}

modalClose.addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

window.selectForOrder = function(id) {
  const p = products.find(x => x.id === id);
  if (p) {
    modelSelect.value = p.name;
    closeModal();
    document.getElementById("order").scrollIntoView({ behavior: "smooth" });
  }
};

function attachCardEvents() {
  document.querySelectorAll(".btn-details").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = products.find(x => x.id === Number(btn.dataset.id));
      if (p) openModal(p);
    });
  });
  document.querySelectorAll(".btn-order").forEach(btn => {
    btn.addEventListener("click", () => {
      const p = products.find(x => x.id === Number(btn.dataset.id));
      if (p) {
        modelSelect.value = p.name;
        document.getElementById("order").scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

/* ===== Order Form ===== */
const orderForm = document.getElementById("orderForm");
const orderSuccess = document.getElementById("orderSuccess");
const successMessage = document.getElementById("successMessage");
const waOrderLink = document.getElementById("waOrderLink");

orderForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = {
    name: document.getElementById("customerName").value.trim(),
    phone: document.getElementById("customerPhone").value.trim(),
    email: document.getElementById("customerEmail").value.trim(),
    city: document.getElementById("customerCity").value.trim(),
    model: document.getElementById("mobileModel").value,
    variant: document.getElementById("storageVariant").value,
    color: document.getElementById("colorPref").value.trim(),
    quantity: document.getElementById("quantity").value,
    address: document.getElementById("address").value.trim(),
    payment: document.getElementById("paymentMethod").value,
    delivery: document.getElementById("deliveryPref").value,
    notes: document.getElementById("notes").value.trim()
  };

  successMessage.innerHTML = `
    Thank you <strong>${data.name}</strong>!<br>
    Your request for <strong>${data.model}</strong> (${data.variant}) has been received.<br>
    We will contact you soon on <strong>${data.phone}</strong>.
  `;

  const waText = `*New Online Order Request*%0A%0A` +
    `*Name:* ${data.name}%0A` +
    `*Phone:* ${data.phone}%0A` +
    `*City:* ${data.city}%0A` +
    `*Model:* ${data.model}%0A` +
    `*Variant:* ${data.variant}%0A` +
    `*Color:* ${data.color || "Any"}%0A` +
    `*Qty:* ${data.quantity}%0A` +
    `*Address:* ${data.address}%0A` +
    `*Payment:* ${data.payment}%0A` +
    `*Delivery Prefer:* ${data.delivery}%0A` +
    `*Notes:* ${data.notes || "None"}%0A%0A` +
    `_Submitted via Ahmed Raza Bhutto Mobile Shop website_`;

  waOrderLink.href = `https://wa.me/923318373204?text=${waText}`;
  orderSuccess.hidden = false;
  orderForm.reset();
  document.getElementById("quantity").value = 1;
  orderSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
});

/* ===== Mobile Menu ===== */
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
nav.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => nav.classList.remove("open"));
});

/* ===== Init ===== */
populateModelSelect();
renderProducts(products);
