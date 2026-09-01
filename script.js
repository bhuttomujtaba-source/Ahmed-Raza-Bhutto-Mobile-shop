/* ===== Product Data – Mobiles + Electronics (realistic PK prices) ===== */
const products = [
  /* ========== SAMSUNG ========== */
  {
    id: 1, brand: "samsung", category: "mobile",
    name: "Samsung Galaxy A16",
    specs: "6.7\" Super AMOLED • 50MP • 5000mAh • Helio G99",
    price: 46999, oldPrice: 52999, badge: "Popular",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a16-4g.jpg",
    details: { display: "6.7\" Super AMOLED, 90Hz", camera: "50MP + 5MP + 2MP | 13MP Front", battery: "5000 mAh, 25W", ram: "6/8 GB", storage: "128/256 GB", os: "Android 14, One UI" }
  },
  {
    id: 2, brand: "samsung", category: "mobile",
    name: "Samsung Galaxy A36",
    specs: "6.7\" AMOLED 120Hz • 50MP OIS • 5000mAh",
    price: 89999, oldPrice: 99999, badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a36.jpg",
    details: { display: "6.7\" Super AMOLED, 120Hz", camera: "50MP OIS + 8MP + 5MP | 12MP Front", battery: "5000 mAh, 45W", ram: "8/12 GB", storage: "128/256 GB", os: "Android 15, One UI" }
  },
  {
    id: 3, brand: "samsung", category: "mobile",
    name: "Samsung Galaxy S24",
    specs: "6.2\" Dynamic AMOLED • 50MP • Snapdragon 8 Gen 3",
    price: 189999, oldPrice: 219999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24.jpg",
    details: { display: "6.2\" Dynamic AMOLED 2X, 120Hz", camera: "50MP + 10MP + 12MP | 12MP Front", battery: "4000 mAh, 25W", ram: "8 GB", storage: "256 GB", os: "Android 14, One UI 6.1" }
  },
  {
    id: 4, brand: "samsung", category: "mobile",
    name: "Samsung Galaxy A06",
    specs: "6.7\" PLS LCD • 50MP • 5000mAh • Helio G85",
    price: 32999, oldPrice: 36999, badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a06.jpg",
    details: { display: "6.7\" PLS LCD, 60Hz", camera: "50MP + 2MP | 8MP Front", battery: "5000 mAh, 25W", ram: "4/6 GB", storage: "64/128 GB", os: "Android 14" }
  },
  {
    id: 5, brand: "samsung", category: "mobile",
    name: "Samsung Galaxy S26 Ultra",
    specs: "6.8\" Dynamic AMOLED • 200MP • Snapdragon 8 Elite",
    price: 449999, oldPrice: 489999, badge: "Flagship",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s25-ultra.jpg",
    details: { display: "6.8\" Dynamic AMOLED 2X, 120Hz", camera: "200MP + 50MP + 10MP + 50MP | 12MP Front", battery: "5000 mAh, 45W", ram: "12 GB", storage: "256/512 GB", os: "Android 16, One UI" }
  },
  {
    id: 6, brand: "samsung", category: "mobile",
    name: "Samsung Galaxy A56",
    specs: "6.7\" AMOLED 120Hz • 50MP • 5000mAh",
    price: 137999, oldPrice: 149999, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-a55.jpg",
    details: { display: "6.7\" Super AMOLED, 120Hz", camera: "50MP OIS + 12MP + 5MP | 32MP Front", battery: "5000 mAh, 25W", ram: "8 GB", storage: "256 GB", os: "Android 15, One UI" }
  },

  /* ========== XIAOMI / REDMI ========== */
  {
    id: 7, brand: "xiaomi", category: "mobile",
    name: "Xiaomi Redmi Note 14",
    specs: "6.67\" AMOLED 120Hz • 108MP • 5500mAh",
    price: 57999, oldPrice: 64999, badge: "Best Seller",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-4g.jpg",
    details: { display: "6.67\" AMOLED, 120Hz", camera: "108MP + 8MP + 2MP | 20MP Front", battery: "5500 mAh, 33W", ram: "6/8 GB", storage: "128/256 GB", os: "Android 14, HyperOS" }
  },
  {
    id: 8, brand: "xiaomi", category: "mobile",
    name: "Xiaomi 14T",
    specs: "6.67\" AMOLED 144Hz • Leica 50MP • Dimensity 8300",
    price: 149999, oldPrice: 169999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t.jpg",
    details: { display: "6.67\" CrystalRes AMOLED, 144Hz", camera: "Leica 50MP + 50MP + 12MP | 32MP Front", battery: "5000 mAh, 67W", ram: "12 GB", storage: "256/512 GB", os: "Android 14, HyperOS" }
  },
  {
    id: 9, brand: "xiaomi", category: "mobile",
    name: "Redmi Note 14 Pro",
    specs: "6.67\" AMOLED • 200MP • 5500mAh • 45W",
    price: 82999, oldPrice: 89999, badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-14-pro-4g.jpg",
    details: { display: "6.67\" AMOLED, 120Hz", camera: "200MP + 8MP + 2MP | 20MP Front", battery: "5500 mAh, 45W", ram: "8/12 GB", storage: "256 GB", os: "Android 14, HyperOS" }
  },
  {
    id: 10, brand: "xiaomi", category: "mobile",
    name: "Xiaomi 17T Pro",
    specs: "6.83\" AMOLED 144Hz • Leica 50MP • Dimensity 9500",
    price: 289999, oldPrice: 319999, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t-pro.jpg",
    details: { display: "6.83\" AMOLED, 144Hz", camera: "Leica 50MP + 50MP + 12MP | 32MP Front", battery: "7000 mAh, 100W", ram: "12 GB", storage: "512 GB", os: "Android 15, HyperOS" }
  },
  {
    id: 11, brand: "xiaomi", category: "mobile",
    name: "Redmi Note 16",
    specs: "6.67\" AMOLED 120Hz • 108MP • 5500mAh",
    price: 61999, oldPrice: 69999, badge: "Popular",
    image: "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-note-13-pro-5g.jpg",
    details: { display: "6.67\" AMOLED, 120Hz", camera: "108MP + 8MP + 2MP | 16MP Front", battery: "5500 mAh, 45W", ram: "8 GB", storage: "256 GB", os: "Android 15, HyperOS" }
  },

  /* ========== INFINIX ========== */
  {
    id: 12, brand: "infinix", category: "mobile",
    name: "Infinix Note 40",
    specs: "6.78\" AMOLED 120Hz • 108MP • 5000mAh 45W",
    price: 57999, oldPrice: 64999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40.jpg",
    details: { display: "6.78\" AMOLED, 120Hz", camera: "108MP + 2MP + 2MP | 32MP Front", battery: "5000 mAh, 45W + Wireless", ram: "8 GB", storage: "256 GB", os: "Android 14, XOS" }
  },
  {
    id: 13, brand: "infinix", category: "mobile",
    name: "Infinix Hot 50",
    specs: "6.78\" 120Hz • 50MP • 5000mAh • Helio G100",
    price: 39999, oldPrice: 44999, badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50.jpg",
    details: { display: "6.78\" IPS, 120Hz", camera: "50MP + AI Lens | 8MP Front", battery: "5000 mAh, 18W", ram: "8 GB", storage: "128/256 GB", os: "Android 14, XOS" }
  },
  {
    id: 14, brand: "infinix", category: "mobile",
    name: "Infinix Note 60",
    specs: "6.78\" AMOLED • 50MP • 6150mAh • Dimensity",
    price: 96999, oldPrice: 109999, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro.jpg",
    details: { display: "6.78\" AMOLED, 120Hz", camera: "50MP + 8MP | 13MP Front", battery: "6150 mAh, 45W", ram: "8 GB", storage: "256 GB", os: "Android 15, XOS" }
  },
  {
    id: 15, brand: "infinix", category: "mobile",
    name: "Infinix Hot 70 Pro",
    specs: "6.76\" IPS • 50MP • 6000mAh • Dimensity 7100",
    price: 84999, oldPrice: 94999, badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40-pro.jpg",
    details: { display: "6.76\" IPS LCD, 120Hz", camera: "50MP Dual | 13MP Front", battery: "6000 mAh, 45W", ram: "8 GB", storage: "128/256 GB", os: "Android 15, XOS" }
  },
  {
    id: 16, brand: "infinix", category: "mobile",
    name: "Infinix Smart 10 Plus",
    specs: "6.7\" HD+ • 13MP • 5000mAh",
    price: 31499, oldPrice: 34999, badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8.jpg",
    details: { display: "6.7\" IPS LCD", camera: "13MP | 8MP Front", battery: "5000 mAh, 18W", ram: "4 GB", storage: "128 GB", os: "Android 14, XOS" }
  },

  /* ========== TECNO ========== */
  {
    id: 17, brand: "tecno", category: "mobile",
    name: "Tecno Spark 30",
    specs: "6.78\" 120Hz • 50MP • 5000mAh",
    price: 34999, oldPrice: 39999, badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30.jpg",
    details: { display: "6.78\" IPS LCD, 120Hz", camera: "50MP AI | 8MP Front", battery: "5000 mAh, 18W", ram: "8 GB", storage: "128/256 GB", os: "Android 14, HiOS" }
  },
  {
    id: 18, brand: "tecno", category: "mobile",
    name: "Tecno Camon 30",
    specs: "6.78\" AMOLED 120Hz • 50MP OIS • 5000mAh",
    price: 69999, oldPrice: 77999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30.jpg",
    details: { display: "6.78\" AMOLED, 120Hz", camera: "50MP OIS + 2MP | 50MP Front", battery: "5000 mAh, 70W", ram: "8 GB", storage: "256 GB", os: "Android 14, HiOS" }
  },
  {
    id: 19, brand: "tecno", category: "mobile",
    name: "Tecno Camon 40 Pro",
    specs: "6.78\" AMOLED • 50MP • 5200mAh • 45W",
    price: 84999, oldPrice: 94999, badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-pro.jpg",
    details: { display: "6.78\" AMOLED, 120Hz", camera: "50MP + 8MP | 50MP Front", battery: "5200 mAh, 45W", ram: "8 GB", storage: "256 GB", os: "Android 15, HiOS" }
  },
  {
    id: 20, brand: "tecno", category: "mobile",
    name: "Tecno Pova 8",
    specs: "6.78\" 120Hz • 50MP • 8000mAh • Dimensity 7100",
    price: 69999, oldPrice: 77999, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6.jpg",
    details: { display: "6.78\" IPS LCD, 120Hz", camera: "50MP | 13MP Front", battery: "8000 mAh, 45W", ram: "8 GB", storage: "256 GB", os: "Android 15, HiOS" }
  },
  {
    id: 21, brand: "tecno", category: "mobile",
    name: "Tecno Spark Slim",
    specs: "6.78\" 120Hz • 50MP • 5160mAh • Helio G200",
    price: 43999, oldPrice: 49999, badge: "Budget",
    image: "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro.jpg",
    details: { display: "6.78\" IPS, 120Hz", camera: "50MP | 13MP Front", battery: "5160 mAh, 45W", ram: "8 GB", storage: "256 GB", os: "Android 15, HiOS" }
  },

  /* ========== iPHONE ========== */
  {
    id: 22, brand: "iphone", category: "mobile",
    name: "iPhone 15",
    specs: "6.1\" Super Retina • 48MP • A16 Bionic • USB-C",
    price: 249999, oldPrice: 279999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
    details: { display: "6.1\" Super Retina XDR OLED", camera: "48MP + 12MP | 12MP Front", battery: "Up to 20 hrs video", ram: "6 GB", storage: "128/256 GB", os: "iOS 17 / 18" }
  },
  {
    id: 23, brand: "iphone", category: "mobile",
    name: "iPhone 16",
    specs: "6.1\" Super Retina • 48MP • A18 • Camera Control",
    price: 299999, oldPrice: 329999, badge: "Flagship",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
    details: { display: "6.1\" Super Retina XDR OLED, 60Hz", camera: "48MP Fusion + 12MP | 12MP Front", battery: "Up to 22 hrs video", ram: "8 GB", storage: "128/256 GB", os: "iOS 18" }
  },
  {
    id: 24, brand: "iphone", category: "mobile",
    name: "iPhone 16 Pro",
    specs: "6.3\" ProMotion 120Hz • A18 Pro • Titanium",
    price: 399999, oldPrice: 439999, badge: "Premium",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
    details: { display: "6.3\" Super Retina XDR, 120Hz ProMotion", camera: "48MP + 48MP + 12MP | 12MP Front", battery: "Up to 27 hrs video", ram: "8 GB", storage: "256/512 GB", os: "iOS 18" }
  },
  {
    id: 25, brand: "iphone", category: "mobile",
    name: "iPhone 17",
    specs: "6.3\" Super Retina • 50MP • A19 • Ceramic Shield 2",
    price: 399000, oldPrice: 429000, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
    details: { display: "6.3\" Super Retina XDR OLED", camera: "50MP + 12MP | 24MP Front", battery: "Up to 24 hrs video", ram: "8/12 GB", storage: "256/512 GB", os: "iOS 19" }
  },
  {
    id: 26, brand: "iphone", category: "mobile",
    name: "iPhone 17 Pro",
    specs: "6.3\" ProMotion 120Hz • A19 Pro • Titanium",
    price: 520500, oldPrice: 560000, badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
    details: { display: "6.3\" Super Retina XDR, 120Hz", camera: "48MP + 48MP + 12MP | 12MP Front", battery: "Up to 28 hrs video", ram: "12 GB", storage: "256/512 GB / 1TB", os: "iOS 19" }
  },
  {
    id: 27, brand: "iphone", category: "mobile",
    name: "iPhone 17 Pro Max",
    specs: "6.9\" ProMotion 120Hz • A19 Pro • 2TB option",
    price: 565000, oldPrice: 620000, badge: "Flagship",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
    details: { display: "6.9\" Super Retina XDR, 120Hz ProMotion", camera: "48MP + 48MP + 12MP | 12MP Front", battery: "Up to 33 hrs video", ram: "12 GB", storage: "256/512 GB / 1TB / 2TB", os: "iOS 19" }
  },
  {
    id: 28, brand: "iphone", category: "mobile",
    name: "iPhone Air",
    specs: "Ultra-slim design • A19 Pro • Super Retina",
    price: 480000, oldPrice: 520000, badge: "Premium",
    image: "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
    details: { display: "6.1\" Super Retina XDR", camera: "48MP + 12MP | 12MP Front", battery: "Up to 25 hrs video", ram: "8 GB", storage: "256/512 GB / 1TB", os: "iOS 19" }
  },

  /* ========== GOOGLE PIXEL ========== */
  {
    id: 29, brand: "pixel", category: "mobile",
    name: "Google Pixel 9",
    specs: "6.3\" OLED 120Hz • 50MP • Tensor G4",
    price: 189998, oldPrice: 219999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9.jpg",
    details: { display: "6.3\" OLED, 120Hz", camera: "50MP + 48MP | 10.5MP Front", battery: "4700 mAh, 27W", ram: "12 GB", storage: "128/256 GB", os: "Android 14/15" }
  },
  {
    id: 30, brand: "pixel", category: "mobile",
    name: "Google Pixel 9 Pro",
    specs: "6.3\" LTPO OLED • 50MP Triple • Tensor G4",
    price: 225000, oldPrice: 259999, badge: "Hot",
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro.jpg",
    details: { display: "6.3\" LTPO OLED, 120Hz", camera: "50MP + 48MP + 48MP | 42MP Front", battery: "4700 mAh, 30W", ram: "16 GB", storage: "128/256/512 GB", os: "Android 14/15" }
  },
  {
    id: 31, brand: "pixel", category: "mobile",
    name: "Google Pixel 11",
    specs: "6.3\" OLED • 48MP • Tensor G6",
    price: 285999, oldPrice: 319999, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9.jpg",
    details: { display: "6.3\" OLED, 120Hz", camera: "48MP + 10.8MP + 13MP | 10.5MP Front", battery: "4985 mAh, 30W", ram: "12 GB", storage: "256/512 GB", os: "Android 16" }
  },
  {
    id: 32, brand: "pixel", category: "mobile",
    name: "Google Pixel 11 Pro",
    specs: "6.3\" LTPO OLED • 50MP Triple • Tensor G6",
    price: 345000, oldPrice: 389999, badge: "Flagship",
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro.jpg",
    details: { display: "6.3\" LTPO OLED, 120Hz", camera: "50MP + 48MP + 48MP | 42MP Front", battery: "4850 mAh, 30W", ram: "12/16 GB", storage: "256/512 GB / 1TB", os: "Android 16" }
  },
  {
    id: 33, brand: "pixel", category: "mobile",
    name: "Google Pixel 11 Pro XL",
    specs: "6.8\" LTPO OLED • 50MP • Tensor G6",
    price: 390999, oldPrice: 429999, badge: "Premium",
    image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9-pro-xl.jpg",
    details: { display: "6.8\" LTPO OLED, 120Hz", camera: "50MP + 48MP + 48MP | 42MP Front", battery: "5115 mAh, 45W", ram: "16 GB", storage: "256/512 GB / 1TB", os: "Android 16" }
  },

  /* ========== OTHER MOBILES ========== */
  {
    id: 34, brand: "vivo", category: "mobile",
    name: "Vivo V80 Lite 5G",
    specs: "6.78\" AMOLED • 50MP • 7050mAh • Dimensity 7360",
    price: 124999, oldPrice: 139999, badge: "New",
    image: "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40.jpg",
    details: { display: "6.78\" AMOLED, 120Hz", camera: "50MP Dual | 32MP Front", battery: "7050 mAh, 44W", ram: "8 GB", storage: "128/256 GB", os: "Android 15, Funtouch" }
  },
  {
    id: 35, brand: "realme", category: "mobile",
    name: "Realme 16 Pro",
    specs: "6.7\" AMOLED 120Hz • 50MP • 5500mAh",
    price: 169999, oldPrice: 189999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/realme-12-pro.jpg",
    details: { display: "6.7\" AMOLED, 120Hz", camera: "50MP + 8MP + 2MP | 16MP Front", battery: "5500 mAh, 67W", ram: "12 GB", storage: "256/512 GB", os: "Android 15, Realme UI" }
  },
  {
    id: 36, brand: "oppo", category: "mobile",
    name: "Oppo Reno 16 5G",
    specs: "6.7\" AMOLED • 50MP • 5000mAh",
    price: 199999, oldPrice: 219999, badge: null,
    image: "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12.jpg",
    details: { display: "6.7\" AMOLED, 120Hz", camera: "50MP + 8MP | 32MP Front", battery: "5000 mAh, 80W", ram: "12 GB", storage: "256/512 GB", os: "Android 15, ColorOS" }
  },

  /* ========== ELECTRONICS & ACCESSORIES ========== */
  {
    id: 37, brand: "accessories", category: "electronics",
    name: "MEMO CX08 Mobile Cooling Fan",
    specs: "Magnetic • Dual Fan • RGB • Gaming Cooler",
    price: 2950, oldPrice: 4200, badge: "Hot",
    image: "https://via.placeholder.com/280x280/0f766e/ffffff?text=Cooling+Fan",
    details: { display: "N/A", camera: "N/A", battery: "USB Powered", ram: "N/A", storage: "N/A", os: "Compatible with all phones" }
  },
  {
    id: 38, brand: "accessories", category: "electronics",
    name: "26cm Ring Light + 7ft Tripod",
    specs: "LED Ring Light • Tripod Stand • TikTok / YouTube",
    price: 3500, oldPrice: 5500, badge: "Best Seller",
    image: "https://via.placeholder.com/280x280/f59e0b/ffffff?text=Ring+Light",
    details: { display: "26cm LED Ring", camera: "N/A", battery: "USB / Adapter", ram: "N/A", storage: "N/A", os: "Phone Holder included" }
  },
  {
    id: 39, brand: "accessories", category: "electronics",
    name: "RGB LED Ring Light 33cm",
    specs: "Dimmable RGB • Phone Holder • Vlogging / Makeup",
    price: 2199, oldPrice: 3500, badge: "Popular",
    image: "https://via.placeholder.com/280x280/25d366/ffffff?text=RGB+Light",
    details: { display: "33cm RGB LED", camera: "N/A", battery: "USB Powered", ram: "N/A", storage: "N/A", os: "Adjustable brightness & colors" }
  },
  {
    id: 40, brand: "accessories", category: "electronics",
    name: "Bluetooth Selfie Stick + Tripod",
    specs: "3-in-1 • Wireless Remote • Extendable • Flash",
    price: 1650, oldPrice: 2500, badge: "Budget",
    image: "https://via.placeholder.com/280x280/0f766e/ffffff?text=Selfie+Stick",
    details: { display: "N/A", camera: "N/A", battery: "Built-in Battery", ram: "N/A", storage: "N/A", os: "iOS & Android compatible" }
  },
  {
    id: 41, brand: "accessories", category: "electronics",
    name: "K9 Dual Wireless Microphone",
    specs: "2 Mic • Noise Reduction • Plug & Play • Vlogging",
    price: 4500, oldPrice: 6500, badge: "Hot",
    image: "https://via.placeholder.com/280x280/ef4444/ffffff?text=Wireless+Mic",
    details: { display: "N/A", camera: "N/A", battery: "Rechargeable", ram: "N/A", storage: "N/A", os: "iPhone, Type-C, Micro USB" }
  },
  {
    id: 42, brand: "accessories", category: "electronics",
    name: "Mobile Gaming Cooler Fan RGB",
    specs: "Semiconductor Cooling • RGB Lights • Magnetic",
    price: 3900, oldPrice: 5000, badge: null,
    image: "https://via.placeholder.com/280x280/0f766e/ffffff?text=Gaming+Cooler",
    details: { display: "N/A", camera: "N/A", battery: "USB-C Powered", ram: "N/A", storage: "N/A", os: "All smartphones" }
  },
  {
    id: 43, brand: "accessories", category: "electronics",
    name: "Vlogging Stick with LED Light",
    specs: "Extendable Pole • Built-in Light • Phone Clamp",
    price: 1600, oldPrice: 2500, badge: "Budget",
    image: "https://via.placeholder.com/280x280/f59e0b/ffffff?text=Vlog+Stick",
    details: { display: "N/A", camera: "N/A", battery: "Battery for Light", ram: "N/A", storage: "N/A", os: "Universal phone holder" }
  },
  {
    id: 44, brand: "accessories", category: "electronics",
    name: "USB Type-C Fast Charging Cable",
    specs: "3A Fast Charge • 1.5m • Data Transfer",
    price: 450, oldPrice: 800, badge: null,
    image: "https://via.placeholder.com/280x280/64748b/ffffff?text=USB+Cable",
    details: { display: "N/A", camera: "N/A", battery: "N/A", ram: "N/A", storage: "N/A", os: "Type-C devices" }
  },
  {
    id: 45, brand: "accessories", category: "electronics",
    name: "20W Fast Charger Adapter",
    specs: "PD 20W • USB-C • Compatible with iPhone & Android",
    price: 1200, oldPrice: 1800, badge: "Popular",
    image: "https://via.placeholder.com/280x280/0f766e/ffffff?text=Fast+Charger",
    details: { display: "N/A", camera: "N/A", battery: "N/A", ram: "N/A", storage: "N/A", os: "Universal" }
  },
  {
    id: 46, brand: "accessories", category: "electronics",
    name: "Power Bank 20000mAh",
    specs: "22.5W Fast Charge • Dual Output • LED Display",
    price: 3500, oldPrice: 4500, badge: "Best Seller",
    image: "https://via.placeholder.com/280x280/25d366/ffffff?text=Power+Bank",
    details: { display: "LED Display", camera: "N/A", battery: "20000mAh", ram: "N/A", storage: "N/A", os: "All devices" }
  },
  {
    id: 47, brand: "accessories", category: "electronics",
    name: "Wireless Earbuds TWS",
    specs: "Bluetooth 5.3 • Noise Cancel • 30Hrs Battery",
    price: 2999, oldPrice: 4500, badge: "Hot",
    image: "https://via.placeholder.com/280x280/0f766e/ffffff?text=Earbuds",
    details: { display: "N/A", camera: "N/A", battery: "30Hrs Total", ram: "N/A", storage: "N/A", os: "iOS & Android" }
  },
  {
    id: 48, brand: "accessories", category: "electronics",
    name: "Phone Case + Tempered Glass Combo",
    specs: "Shockproof Case • 9H Glass • Multiple Designs",
    price: 800, oldPrice: 1500, badge: "Budget",
    image: "https://via.placeholder.com/280x280/64748b/ffffff?text=Case+%2B+Glass",
    details: { display: "N/A", camera: "N/A", battery: "N/A", ram: "N/A", storage: "N/A", os: "Model specific" }
  },
  {
    id: 49, brand: "accessories", category: "electronics",
    name: "Laptop Cooling Pad",
    specs: "Dual Fan • USB Powered • Adjustable Height",
    price: 2500, oldPrice: 3500, badge: null,
    image: "https://via.placeholder.com/280x280/0f766e/ffffff?text=Laptop+Cooler",
    details: { display: "N/A", camera: "N/A", battery: "USB Powered", ram: "N/A", storage: "N/A", os: "All laptops" }
  },
  {
    id: 50, brand: "accessories", category: "electronics",
    name: "Wireless Keyboard & Mouse Combo",
    specs: "2.4GHz • Silent Keys • Long Battery",
    price: 2800, oldPrice: 3999, badge: "Popular",
    image: "https://via.placeholder.com/280x280/f59e0b/ffffff?text=KB+%2B+Mouse",
    details: { display: "N/A", camera: "N/A", battery: "AA / Rechargeable", ram: "N/A", storage: "N/A", os: "Windows, Mac, Android" }
  },
  {
    id: 51, brand: "accessories", category: "electronics",
    name: "Electric Extension Board 4-Socket",
    specs: "4 Sockets + 2 USB • Surge Protection • 3m Cable",
    price: 1500, oldPrice: 2200, badge: null,
    image: "https://via.placeholder.com/280x280/ef4444/ffffff?text=Extension+Board",
    details: { display: "N/A", camera: "N/A", battery: "N/A", ram: "N/A", storage: "N/A", os: "220V Pakistan Standard" }
  },
  {
    id: 52, brand: "accessories", category: "electronics",
    name: "LED Desk Lamp with USB",
    specs: "3 Color Modes • Touch Control • Eye Care",
    price: 1800, oldPrice: 2500, badge: null,
    image: "https://via.placeholder.com/280x280/f59e0b/ffffff?text=Desk+Lamp",
    details: { display: "LED Panel", camera: "N/A", battery: "USB Powered", ram: "N/A", storage: "N/A", os: "Study / Office use" }
  }
];

/* ===== Custom Images (localStorage) ===== */
const CUSTOM_IMAGES_KEY = "ahmedRazaCustomImages";
let customImages = {};
try {
  customImages = JSON.parse(localStorage.getItem(CUSTOM_IMAGES_KEY) || "{}");
} catch (e) {
  customImages = {};
}

function getProductImage(p) {
  return customImages[p.id] || p.image;
}

function saveCustomImage(id, dataUrl) {
  customImages[id] = dataUrl;
  try {
    localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(customImages));
  } catch (e) {
    alert("Storage full! Image too large. Please use a smaller photo (under 1MB).");
  }
}

function removeCustomImage(id) {
  delete customImages[id];
  localStorage.setItem(CUSTOM_IMAGES_KEY, JSON.stringify(customImages));
}

/* ===== Admin Mode ===== */
let isAdminMode = false;
let logoClickCount = 0;
let logoClickTimer = null;

function toggleAdminMode(force) {
  if (typeof force === "boolean") {
    isAdminMode = force;
  } else {
    isAdminMode = !isAdminMode;
  }
  document.body.classList.toggle("admin-mode", isAdminMode);
  if (isAdminMode) {
    alert("✅ Admin Mode ON\n\nअब हर मोबाइल के नीचे Upload Photo बटन दिखेगा।\nफोटो चुनें → तुरंत बदल जाएगी।\n\nAdmin Mode बंद करने के लिए लोगो पर फिर 5 बार क्लिक करें।");
  } else {
    alert("🔒 Admin Mode OFF");
  }
  // Re-render to show/hide upload buttons
  applyFilters();
}

/* ===== Helpers ===== */
function formatPrice(num) {
  return "Rs. " + num.toLocaleString("en-PK");
}

function createProductCard(p) {
  const badgeClass = p.badge === "Hot" || p.badge === "Best Seller" || p.badge === "Flagship" ? "hot" : "";
  const badgeHtml = p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : "";
  const oldPriceHtml = p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : "";
  const imgSrc = getProductImage(p);
  const hasCustom = !!customImages[p.id];

  const adminUploadHtml = isAdminMode ? `
    <div class="admin-upload-box">
      <label class="btn-upload">
        📷 Upload Photo
        <input type="file" accept="image/*" class="product-upload-input" data-id="${p.id}" hidden />
      </label>
      ${hasCustom ? `<button type="button" class="btn-reset-img" data-id="${p.id}" title="Reset to original">↺ Reset</button>` : ""}
      ${hasCustom ? `<span class="custom-badge">✓ Custom</span>` : ""}
    </div>
  ` : "";

  return `
    <div class="product-card" data-brand="${p.brand}" data-price="${p.price}" data-name="${p.name.toLowerCase()}" data-category="${p.category || 'mobile'}">
      <div class="product-image">
        ${badgeHtml}
        <img src="${imgSrc}" alt="${p.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x280/e2e8f0/64748b?text=📱'" />
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand === 'accessories' ? 'Accessories' : p.brand}</div>
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
        ${adminUploadHtml}
      </div>
    </div>
  `;
}

/* ===== Render Products ===== */
const grid = document.getElementById("productsGrid");
const modelSelect = document.getElementById("mobileModel");

function renderProducts(list) {
  if (!list.length) {
    grid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:#64748b;padding:40px;">No products found matching your search/filter.</p>`;
    return;
  }
  grid.innerHTML = list.map(createProductCard).join("");
  attachCardEvents();
}

function populateModelSelect() {
  const options = products.map(p => `<option value="${p.name}">${p.name} — ${formatPrice(p.price)}</option>`).join("");
  modelSelect.innerHTML = `<option value="">Select Product</option>${options}<option value="Other">Other (write in notes)</option>`;
}

/* ===== Filter & Search ===== */
let currentFilter = "all";
let currentSearch = "";

function applyFilters() {
  let filtered = products;
  if (currentFilter === "budget") {
    filtered = filtered.filter(p => p.price < 50000);
  } else if (currentFilter === "electronics") {
    filtered = filtered.filter(p => p.category === "electronics");
  } else if (currentFilter !== "all") {
    filtered = filtered.filter(p => p.brand === currentFilter);
  }
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.includes(q) ||
      p.specs.toLowerCase().includes(q) ||
      String(p.price).includes(q) ||
      (p.category && p.category.includes(q))
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
if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentSearch = searchInput.value.trim();
    applyFilters();
  });
}

/* ===== Modal ===== */
const modal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");

function openModal(product) {
  const d = product.details;
  const imgSrc = getProductImage(product);
  modalBody.innerHTML = `
    <div class="modal-image">
      <img src="${imgSrc}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/200x280/e2e8f0/64748b?text=📱'" />
    </div>
    <div class="modal-brand">${product.brand === 'accessories' ? 'Accessories / Electronics' : product.brand}</div>
    <h3 class="modal-name">${product.name}</h3>
    <div class="modal-price">${formatPrice(product.price)}${product.oldPrice ? ' <span style="font-size:0.9rem;color:#64748b;text-decoration:line-through;font-weight:400">' + formatPrice(product.oldPrice) + '</span>' : ''}</div>
    <ul class="modal-specs-list">
      <li><strong>Display</strong> ${d.display}</li>
      <li><strong>Camera</strong> ${d.camera}</li>
      <li><strong>Battery</strong> ${d.battery}</li>
      <li><strong>RAM</strong> ${d.ram}</li>
      <li><strong>Storage</strong> ${d.storage}</li>
      <li><strong>OS / Info</strong> ${d.os}</li>
    </ul>
    <div class="modal-actions">
      <button class="btn btn-primary" onclick="selectForOrder(${product.id})">Order This Item</button>
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

if (modalClose) modalClose.addEventListener("click", closeModal);
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

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

  // Upload photo handlers (admin)
  document.querySelectorAll(".product-upload-input").forEach(input => {
    input.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 1.5 * 1024 * 1024) {
        alert("फोटो बहुत बड़ी है! कृपया 1.5MB से छोटी फोटो चुनें।");
        return;
      }
      const id = Number(input.dataset.id);
      const reader = new FileReader();
      reader.onload = (ev) => {
        saveCustomImage(id, ev.target.result);
        applyFilters(); // re-render with new image
        alert("✅ फोटो सफलतापूर्वक अपलोड हो गई!\nअब कस्टमर को यही फोटो दिखेगी।");
      };
      reader.readAsDataURL(file);
    });
  });

  // Reset custom image
  document.querySelectorAll(".btn-reset-img").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      if (confirm("क्या आप मूल फोटो पर वापस जाना चाहते हैं?")) {
        removeCustomImage(id);
        applyFilters();
      }
    });
  });
}

/* ===== Order Form ===== */
const orderForm = document.getElementById("orderForm");
const orderSuccess = document.getElementById("orderSuccess");
const successMessage = document.getElementById("successMessage");
const waOrderLink = document.getElementById("waOrderLink");

if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      name: document.getElementById("customerName").value.trim(),
      phone: document.getElementById("customerPhone").value.trim(),
      email: document.getElementById("customerEmail")?.value.trim() || "",
      city: document.getElementById("customerCity").value.trim(),
      model: document.getElementById("mobileModel").value,
      variant: document.getElementById("storageVariant")?.value || "N/A",
      color: document.getElementById("colorPref")?.value.trim() || "",
      quantity: document.getElementById("quantity")?.value || "1",
      address: document.getElementById("address").value.trim(),
      payment: document.getElementById("paymentMethod")?.value || "COD",
      delivery: document.getElementById("deliveryPref")?.value || "Any",
      notes: document.getElementById("notes").value.trim()
    };

    successMessage.innerHTML = `
      Thank you <strong>${data.name}</strong>!<br>
      Your request for <strong>${data.model}</strong> has been received.<br>
      We will contact you soon on <strong>${data.phone}</strong>.
    `;

    const waText = `*New Online Order Request*%0A%0A` +
      `*Name:* ${data.name}%0A` +
      `*Phone:* ${data.phone}%0A` +
      `*City:* ${data.city}%0A` +
      `*Product:* ${data.model}%0A` +
      `*Variant:* ${data.variant}%0A` +
      `*Color:* ${data.color || "Any"}%0A` +
      `*Qty:* ${data.quantity}%0A` +
      `*Address:* ${data.address}%0A` +
      `*Payment:* ${data.payment}%0A` +
      `*Delivery Prefer:* ${data.delivery}%0A` +
      `*Notes:* ${data.notes || "None"}%0A%0A` +
      `_Submitted via Ahmed Raza Mobile Shop (Kamber) website_`;

    if (waOrderLink) waOrderLink.href = `https://wa.me/923318373204?text=${waText}`;
    orderSuccess.hidden = false;
    orderForm.reset();
    if (document.getElementById("quantity")) document.getElementById("quantity").value = 1;
    orderSuccess.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}

/* ===== Mobile Menu ===== */
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => nav.classList.remove("open"));
  });
}

/* ===== Admin Mode Toggle (click logo 5 times) ===== */
function setupAdminToggle() {
  const logo = document.querySelector(".logo");
  if (!logo) return;
  logo.style.cursor = "pointer";
  logo.title = "Click 5 times for Admin Mode";
  logo.addEventListener("click", (e) => {
    logoClickCount++;
    if (logoClickTimer) clearTimeout(logoClickTimer);
    logoClickTimer = setTimeout(() => { logoClickCount = 0; }, 2000);
    if (logoClickCount >= 5) {
      logoClickCount = 0;
      if (isAdminMode) {
        // turning OFF – no password needed
        toggleAdminMode(false);
      } else {
        // turning ON – ask password
        const pass = prompt("Admin Password डालें:\n(पासवर्ड: ahmed123)");
        if (pass === "ahmed123") {
          toggleAdminMode(true);
        } else if (pass !== null) {
          alert("❌ गलत पासवर्ड!");
        }
      }
    }
  });
}

/* ===== Init ===== */
populateModelSelect();
renderProducts(products);
setupAdminToggle();
