/* =====================================================
   AMY'S GIRLY AESTHETIC STORE
   FRONTEND JAVASCRIPT
===================================================== */


/* =====================================================
   TEMPORARY PRODUCT IMAGES

   When the real product pictures arrive,
   simply replace these URLs.
===================================================== */

const imageBank = {
  skincare:
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85",

  beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",

  perfume:
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",

  jewellery:
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",

  fashion:
    "https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85",

  accessories:
    "https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?auto=format&fit=crop&w=900&q=85"
};


/* =====================================================
   PRODUCTS

   
===================================================== */

let products = [

  // =========================
  // WHITENING & BRIGHTENING
  // =========================

  {
    id: 1,
    name: "Vitamin C Whitening Lotion",
    category: "Whitening",
    price: 6000,
    image: "images/products/vitamin-c-whitening-body-lotion.jpeg",
    description: "A vitamin C body lotion for a brighter-looking, refreshed skin appearance."
  },

  {
    id: 2,
    name: "Whitening Toner",
    category: "Whitening",
    price: 7000,
    image: "images/products/whitening-toner.jpeg",
    description: "A refreshing toner designed to complement your daily skincare routine."
  },

  {
    id: 3,
    name: "USA Papaya Soap for Black Spots",
    category: "Whitening",
    price: 2000,
    image: "images/products/usa.jpeg",
    description: "Papaya-based cleansing soap for your everyday body-care routine."
  },

  {
    id: 4,
    name: "Turmeric Aroma Therapy Cleanser & Whitener",
    category: "Whitening",
    price: 6000,
    image: "images/products/kua-spa.jpeg",
    description: "A turmeric-inspired cleanser for a refreshing and bright-looking skincare routine."
  },

  {
    id: 5,
    name: "Dr. Rashel Whitening & Fade Spots Skincare",
    category: "Whitening",
    price: 6000,
    image: "images/products/white-skin.jpeg",
    description: "Skincare designed to support a more even and refreshed-looking complexion."
  },

  {
    id: 6,
    name: "Whitening Rose Water",
    category: "Whitening",
    price: 5000,
    image: "images/products/rose-water.jpeg",
    description: "Refreshing rose water for a simple and soothing skincare routine."
  },

  {
    id: 7,
    name: "Kojie San Skin Lightening Soap",
    category: "Whitening",
    price: 4000,
    image: "images/products/kojie-san-skin-lightening.jpeg",
    description: "Cleansing soap for your everyday body-care routine."
  },

  {
    id: 8,
    name: "Always Bright Skin Rescue System",
    category: "Whitening",
    price: 6000,
    image: "images/products/always-bright.jpeg",
    description: "A skincare rescue system for a refreshed and brighter-looking appearance."
  },


  // =========================
  // FACE CARE
  // =========================

  {
    id: 9,
    name: "Roushun Vitamin C Serum",
    category: "Face Care",
    price: 3500,
    image: "images/products/vitamin-c-serum.jpeg",
    description: "A facial oil to add to your everyday skincare routine."
  },

  {
    id: 10,
    name: "Help Biocos Acne Cream",
    category: "Face Care",
    price: 3000,
    image: "images/products/acne.jpeg",
    description: "Helps remove acne spots."
  },

  {
    id: 11,
    name: "Tea Tree Foaming Face Wash",
    category: "Face Care",
    price: 4500,
    image: "images/products/tea-tree-face-wash.jpeg",
    description: "A gentle foaming cleanser for everyday facial cleansing."
  },

  {
    id: 12,
    name: "Skin Aqua Sunscreen",
    category: "Face Care",
    price: 18000,
    image:"images/products/skin-aqua.jpeg",
    description: "Helps protect skin from sun burn."
  },

  {
    id: 13,
    name: "Biore UV Sunscreen",
    category: "Face Care",
    price: 6000,
    image: "images/products/biore-uv.jpeg",
    description: "Helps protect face from sun burn."
  },

  {
    id: 14,
    name: "Ceramide Serum",
    category: "Face Care",
    price: 5000,
    image: "images/products/ceramide-serum.jpeg",
    description: "It smoothes, protects and hydrates skin."
  },

  {
    id: 15,
    name: "Sadoer Collagen Face Cream",
    category: "Face Care",
    price: 5000,
    image: "images/products/cp.jpeg",
    description: "Collagen face cream for your everyday skincare routine."
  },

  {
    id: 16,
    name: "Dr. Rashel Vitamin C Face Serum",
    category: "Face Care",
    price: 6000,
    image: "images/products/vitamin-c-face-serum.jpeg",
    description: "Vitamin C face serum containing hyaluronic acid for a complete skincare routine."
  },


  // =========================
  // MASKS & TREATMENTS
  // =========================

  {
    id: 17,
    name: "Eye Mask",
    category: "Masks",
    price: 500,
    image: "images/products/eye-mask.jpeg",
    description: "A simple self-care eye mask for your beauty routine."
  },

  {
    id: 18,
    name: "Mud Mask",
    category: "Masks",
    price: 1000,
    image: "images/products/mud.jpeg",
    description: "A mud mask for a relaxing at-home skincare session."
  },

  {
    id: 19,
    name: "Pimple Patch",
    category: "Masks",
    price: 2000,
    image: "images/products/pimple-patch.jpeg",
    description: "Easy-to-use pimple patches to remove pimples on face."
  },


  // =========================
  // LIP CARE
  // =========================

  {
    id: 20,
    name: "Pink Lip Scrub",
    category: "Lip Care",
    price: 2500,
    image: "images/products/lip-scrub.jpeg",
    description: "A sweet lip scrub for a soft and smooth-looking lip-care routine."
  },

  {
    id: 21,
    name: "Lip Pencils",
    category: "Lip Care",
    price: 1500,
    image:"images/products/lip-pencil.jpeg",
    description: "Lip pencils for defining and completing your lip looks."
  },


  // =========================
  // ORAL CARE
  // =========================

  {
    id: 22,
    name: "Oral Care Kit",
    category: "Oral Care",
    price: 6000,
    image: "images/products/oral-care-kit.jpeg",
    description: "An everyday oral-care kit for keeping your routine fresh."
  },

  {
    id: 23,
    name: "Mouthwash",
    category: "Oral Care",
    price: 500,
    image: "images/products/lemon-wash.jpeg",
    description: "A simple addition to your daily oral-care routine."
  },

  {
    id: 24,
    name: "Tongue Scrapers",
    category: "Oral Care",
    price: 2000,
    image: "images/products/tongue-scrappers.jpeg",
    description: "A tongue scraper for a more complete oral-care routine."
  },


  // =========================
  // BODY CARE
  // =========================

  {
    id: 25,
    name: "Foot Cream",
    category: "Body Care",
    price: 4000,
    image: "images/products/collagen-foot-cream.jpeg",
    description: "A nourishing foot cream for everyday self-care."
  },

  {
    id: 26,
    name: "Hand Cream",
    category: "Body Care",
    price: 2000,
    image: "images/products/hand-cream.jpeg",
    description: "A handy moisturising cream for soft and cared-for hands."
  },

  {
    id: 27,
    name: "Ultra Dry Whitening Roll-On",
    category: "Body Care",
    price: 1500,
    image: "images/products/rollon.jpeg",
    description: "An everyday roll-on designed to clear dark armpit and complement your body-care routine."
  },

  {
    id: 28,
    name: " Lasgidi Body Mist",
    category: "Body Care",
    price: 3000,
    image: "images/products/body-mist.jpeg",
    description: "A light body mist for a fresh everyday feel."
  },


  // =========================
  // HAIR & STYLING
  // =========================

  {
    id: 29,
    name: "Hair Growth",
    category: "Hair & Styling",
    price: 10000,
    image: "images/products/hair-growth.jpeg",
    description: "A hair-care product for your regular hair-growth routine."
  },

  {
    id: 30,
    name: "Curly / Straight 2-in-1 Straightener",
    category: "Hair & Styling",
    price: 9500,
    image: "images/products/curly-straight.jpeg",
    description: "A versatile 2-in-1 styling tool for creating straight or curly looks."
  },

  {
    id: 31,
    name: "Straightener, Hair Band & Claw Clip Set",
    category: "Hair & Styling",
    price: 6000,
    image: "images/products/mixed-products4.jpeg",
    description: "A cute styling set with a straightener, hair band and claw clip."
  },

  {
    id: 32,
    name: "Cute Straightener",
    category: "Hair & Styling",
    price: 4000,
    image: "images/products/staightners2.jpeg",
    description: "A cute styling straightener for your everyday hair looks."
  },

  {
    id: 33,
    name: "Head Band",
    category: "Hair & Styling",
    price: 700,
    image:"images/products/head-bands.jpeg",
    description: "A simple head band for styling and everyday beauty routines."
  },

  {
    id: 34,
    name: "Claw Clips",
    category: "Hair & Styling",
    price: 1200,
    image: "images/products/mini-clawclips2.jpeg",
    description: "Cute claw clips for quick and effortless hairstyles."
  },

  {
    id: 35,
    name: "Claw Clips",
    category: "Hair & Styling",
    price: 2000,
    image: "images/products/big-claw-clip.jpeg",
    description: "Cute claw clips for quick and effortless hairstyles."
  },


  // =========================
  // BEAUTY ACCESSORIES
  // =========================

  {
    id: 36,
    name: "Mirror",
    category: "Accessories",
    price: 3000,
    image: "images/products/mirror.jpeg",
    description: "A handy mirror for your everyday beauty routine."
  },

  {
    id: 37,
    name: "Mirror",
    category: "Accessories",
    price: 1500,
    image: "images/products/mini-miro.jpeg",
    description: "A cute mini mirror that's easy to carry around."
  },

  {
    id: 38,
    name: "5 in 1 Face Scrub",
    category: "Accessories",
    price: 7000,
    image: "images/products/5in1-face-scrub.jpeg",
    description: "A beauty brush for your everyday skincare and beauty routine."
  },

  {
    id: 39,
    name: "Boob Tape",
    category: "Accessories",
    price: 5000,
    image: "images/products/boob-tape.jpeg",
    description: "A practical fashion and styling accessory."
  },

  {
    id: 40,
    name: "YumYum Perfum",
    category: "Accessories",
    price: 5000,
    image: "images/products/yum-yum-pef.jpeg",
    description: "A convenient spray accessory for your beauty routine."
  },

  {
    id: 41,
    name: "Canned Wet Wipes",
    category: "Accessories",
    price: 2000,
    image: "images/products/caned-wipe.jpeg",
    description: "Convenient wet wipes for keeping fresh while on the go."
  },


  // =========================
  // SUPPLEMENTS
  // =========================

  {
    id: 42,
    name: "Women's Biotic Supplement",
    category: "Supplements",
    price: 10000,
    image: "images/products/women-pro-gummy.jpeg",
    description: "A women's supplement product available from Amy's Girly Aesthetic Store."
  },


  // =========================
  // BASKETS & MIXED PRODUCTS
  // =========================

  {
    id: 43,
    name: "Mixed Products Basket",
    category: "Baskets",
    price: 10000,
    image: "images/products/mixed-6.jpeg",
    description: "A cute basket for organising and styling your beauty essentials."
  },

  {
    id: 44,
    name: "Staightners and Clawclip Set",
    category: "Baskets",
    price: 6000,
    image: "images/products/mixed-products4.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 45,
    name: "Mixed Products Basket",
    category: "Baskets",
    price: 18000,
    image: "images/products/mixed-products1.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 46,
    name: "Claw Clip and Strightner Set",
    category: "Baskets",
    price: 6000,
    image:"images/products/mixed-products2.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 47,
    name: "Mixed Products Basket",
    category: "Baskets",
    price: 17000,
    image: "images/products/mixed8.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 48,
    name: "Mixed Products Basket",
    category: "Baskets",
    price: 18000,
    image: "images/products/mixed-products3.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 49,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 4500,
    image: "images/products/mixed5.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 50,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 7000,
    image: "images/products/mixed7.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 51,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 13000,
    image: "images/products/mixed9.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 52,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 8000,
    image: "images/products/mixed10.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 53,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 7000,
    image: "images/products/mixed11.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 54,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 4000,
    image: "images/products/mixed12.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },


  // =========================
  // ROOM DECOR
  // =========================

  {
    id: 55,
    name: "Butterfly Room Deco",
    category: "Room Decor",
    price: 1000,
    image: "images/products/butterfly-room-deco.jpeg",
    description: "Cute butterfly decor for adding a little aesthetic touch to your space."
  },


  // =========================
  // OTHER BEAUTY FINDS
  // =========================

  {
    id: 56,
    name: "Imperio Way",
    category: "Body Care",
    price: 5000,
    image: "images/products/imprio-way.jpeg",
    description: "A beauty and body-care product available from Amy's Girly Aesthetic Store."
  },

  {
    id: 57,
    name: "Phone Stand",
    category: "Accessories",
    price: 6000,
    image: "images/products/pink-thing.jpeg",
    description: "A cute mini mirror that's easy to carry around."
  },

  {
    id: 58,
    name: "Extra strong Peeling Oil",
    category: "Body Care",
    price: 8000,
    image: "images/products/peeling-body-oi.jpeg",
    description: "A cute mini mirror that's easy to carry around."
  },

  {
    id: 59,
    name: "Vaseline",
    category: "Body Care",
    price: 2500,
    image: "images/products/vaseline.jpeg",
    description: "Helps moisturizes your skin."
  },

  {
    id: 60,
    name: "Temporary Body Tattoos",
    category: "Accessories",
    price: 1500,
    image: "images/products/body-tatoo.jpeg",
    description: "Beautiful and cute temporary body tattoos"
  },
  

  {
    id: 61,
    name: "Straightener, Hair Band & Claw Clip Set",
    category: "Hair & Styling",
    price: 6000,
    image: "images/products/mixed-products2.jpeg",
    description: "A cute styling set with a straightener, hair band and claw clip."
  },
  {
    id: 62,
    name: "Idole Papaya Whitening Facial Soap",
    category: "Whitening",
    price: 2000,
    image: "images/products/idole-papaya.jpeg",
    description: "Good to brighten up both dark and bright skin"
  },

  {
    id: 63,
    name: "Asthetic Flower Vase",
    category: "Room Decor",
    price: 3000,
    image: "images/products/asthetic-flower.jpeg",
    description: "Cute butterfly decor for adding a little aesthetic touch to your space."
  },
  {
    id: 64,
    name: "Black Head Nose Mask",
    category: "Masks",
    price: 600,
    image: "images/products/black-nose-mask.jpeg",
    description: "A nose mask to remove nose pores."
  },
  {
    id: 65,
    name: "Kaly Body Mist",
    category: "Body Care",
    price: 3000,
    image: "images/products/kaly-body-mist.jpeg",
    description: "A light body mist for a fresh everyday feel."
  },
  {
    id: 66,
    name: "Cute Mirror",
    category: "Accessories",
    price: 3000,
    image: "images/products/mirror.jpeg",
    description: "A cute mirror that's easy to carry around."
  },

  {
    id: 67,
    name: "Rabbit Phone Stand",
    category: "Accessories",
    price: 4000,
    image: "images/products/rabbit-phonestand.jpeg",
    description: "A phone stand very easy to carry around."
  },
  {
    id: 68,
    name: "Silicon Face Brush",
    category: "Accessories",
    price: 2000,
    image: "images/products/silicon-face-scrub.jpeg",
    description: "Good for scrubbing face to removing dirt."
  },
  {
    id: 69,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 7000,
    image: "images/products/mixed13.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },
  
  {
    id: 70,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 4000,
    image: "images/products/mixed15.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

  {
    id: 71,
    name: "Mixed Product Basket",
    category: "Baskets",
    price: 4000,
    image: "images/products/mixed14.jpeg",
    description: "A curated mixed-product basket filled with beauty and lifestyle finds."
  },

   {
    id: 72,
    name: "Brightening Vitamin C Daily Face Wash",
    category: "Whitening",
    price: 6000,
    image: "images/products/brigthening-vitamin-c-face-scrub.jpeg",
    description: "Brightening face wash for daily facial routine. "
  },
  {
    id: 73,
    name: "Baskets",
    category: "Accessories",
    price: 2000,
    image: "images/products/basket.jpeg",
    description: "For holding items. "
  },
  {
    id: 74,
    name: "Dental Floss",
    category: "Oral care",
    price: 1000,
    image: "images/products/floss.jpeg",
    description: "Helps remove particules from teeth."
  },

  {
    id: 75,
    name: "Aloe 99% fresh Moisturizing Soothing Gel",
    category: "Body Care",
    price: 4000,
    image: "images/products/alovera-gel.jpeg",
    description: "Aloe Vera Soothing Gel."
  },

  {
    id: 76,
    name: "Lashes Curler",
    category: "Accessories",
    price: 5000,
    image: "images/products/lashes-curl.jpeg",
    description: "Helps curl lashes."
  },

  {
    id: 77,
    name: "Smart Temperature Flask",
    category: "Accessories",
    price: 6000,
    image: "images/products/temp-flask.jpeg",
    description:"Good to keeep water hot or cold. ",
  },

  {
    id: 78,
    name: "Petal Soap Dish",
    category: "Accessories",
    price: 1000,
    image: "images/products/soap-dish.jpeg",
    description: "Holds soap."
  },

  {
    id: 79,
    name: "Virginia Green Garden Rose Water",
    category: "Body Care",
    price: 4000,
    image: "images/products/rose-water2.jpeg",
    description: "Rose water."
  },

  {
    id: 80,
    name: "Tooth-Brush Case",
    category: "Accessories",
    price: 3000,
    image: "images/products/brush-case.jpeg",
    description: "Used to keep toothbrush. "
  },

  {
    id: 81,
    name: "Monogotas Coconut Oil",
    category: "Body Care",
    price: 4000,
    image: "images/products/coco.jpeg",
    description: "Coconut oil for the body."
  },

  {
    id: 82,
    name: "Collagen Canberry Supplement",
    category: "Supplements",
    price: 15000,
    image: "images/products/cola.jpeg",
    description: "Collagen Supplement."
  },

  {
    id: 83,
    name: "Necklace",
    category: "Accessories",
    price: 3000,
    image: "images/products/necklace.jpeg",
    description: "Different styles of necklace."
  },
  

 
  
];

const fallbackProducts = products;
/* =====================================================
   STORE STATE
===================================================== */

let cart = JSON.parse(localStorage.getItem("amyCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("amyWishlist")) || [];

let currentFilter = "All";


/* =====================================================
   ELEMENTS
===================================================== */

const productGrid = document.getElementById("productGrid");
const cartDrawer = document.getElementById("cartDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");
const toast = document.getElementById("toast");

const searchBox = document.getElementById("searchBox");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const clearSearch = document.getElementById("clearSearch");
const searchSuggestions = document.getElementById("searchSuggestions");


/* =====================================================
   CURRENCY
===================================================== */

function money(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG");
}


/* =====================================================
   TOAST
===================================================== */

function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}


/* =====================================================
   SAVE STATE
===================================================== */

function saveState() {
  localStorage.setItem("amyCart", JSON.stringify(cart));
  localStorage.setItem("amyWishlist", JSON.stringify(wishlist));
}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");

        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);


function observeRevealElements() {
  document
    .querySelectorAll(".scroll-reveal:not(.revealed)")
    .forEach(element => {
      revealObserver.observe(element);
    });
}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

  let filtered = [...products];


  /* CATEGORY */

  if (currentFilter !== "All") {
    filtered = filtered.filter(
      product => product.category === currentFilter
    );
  }


  /* SEARCH */

  const searchValue = searchInput.value
    .toLowerCase()
    .trim();

  if (searchValue) {

    filtered = filtered.filter(product => {

      const searchableText = `
        ${product.name}
        ${product.category}
        ${product.description}
      `.toLowerCase();

      return searchableText.includes(searchValue);
    });

  }


  /* SORT */

  const sortValue =
    document.getElementById("sortProducts").value;

  if (sortValue === "low") {
    filtered.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "az") {
    filtered.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }


  /* CLEAR GRID */

  productGrid.innerHTML = "";


  /* NO RESULTS */

  if (!filtered.length) {

    productGrid.innerHTML = `
      <div class="no-products scroll-reveal">

        <div class="no-products-icon">
          🎀
        </div>

        <h3>No pretty finds here yet</h3>

        <p>
          We couldn't find anything matching
          "${searchValue}".
        </p>

        <button
          onclick="clearProductSearch()"
          class="no-products-btn"
        >
          View All Products
        </button>

      </div>
    `;

    observeRevealElements();
    return;
  }


  /* PRODUCT CARDS */

  filtered.forEach((product, index) => {

    const isWishlisted =
      wishlist.some(id => String(id) === String(product.id));

    const card =
      document.createElement("article");

    card.className =
      "product-card scroll-reveal";

    card.style.setProperty(
      "--reveal-delay",
      `${(index % 4) * 80}ms`
    );


    card.innerHTML = `

      <div class="product-image">

        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
        >

        <span class="product-category">
          ${product.category}
        </span>

        <button
          class="wishlist"
          onclick="toggleWishlist('${product.id}')"
          aria-label="Add ${product.name} to wishlist"
        >
          ${isWishlisted ? "♥" : "♡"}
        </button>

      </div>


      <div class="product-info">

        <h3>
          ${product.name}
        </h3>

        <p>
          ${product.description}
        </p>

        <div class="product-price">
          ${money(product.price)}
        </div>

        <div class="product-actions">

          <button
           onclick="viewProduct('${product.id}')"
            class="view-product-btn"
          >
            View
          </button>

          <button
          onclick="addToCart('${product.id}')"
            class="add-cart-btn"
          >
            Add to Cart
          </button>

        </div>

      </div>
    `;

    productGrid.appendChild(card);

  });


  observeRevealElements();
}


/* =====================================================
   CLEAR SEARCH
===================================================== */

function clearProductSearch() {

  searchInput.value = "";

  clearSearch.classList.remove("show");

  searchSuggestions.classList.remove("show");

  searchSuggestions.innerHTML = "";

  renderProducts();
}


/* =====================================================
   FILTERS
===================================================== */

document.querySelectorAll(".filter").forEach(button => {

  button.addEventListener("click", () => {

    document
      .querySelectorAll(".filter")
      .forEach(btn =>
        btn.classList.remove("active")
      );

    button.classList.add("active");

    currentFilter =
      button.dataset.filter;

    renderProducts();

  });

});


/* =====================================================
   CATEGORY CARDS
===================================================== */

document
  .querySelectorAll(".category-card")
  .forEach(card => {

    card.addEventListener("click", () => {

      currentFilter =
        card.dataset.category;

      document
        .querySelectorAll(".filter")
        .forEach(btn => {

          btn.classList.toggle(
            "active",
            btn.dataset.filter === currentFilter
          );

        });

      document
        .getElementById("shop")
        .scrollIntoView({
          behavior: "smooth"
        });

      renderProducts();

    });

  });


/* =====================================================
   SORT
===================================================== */

document
  .getElementById("sortProducts")
  .addEventListener(
    "change",
    renderProducts
  );


/* =====================================================
   PROFESSIONAL SEARCH
===================================================== */

function getSearchText(product) {

  return `
    ${product.name}
    ${product.category}
    ${product.description}
  `.toLowerCase();

}


searchBtn.addEventListener("click", () => {

  searchBox.classList.toggle("show");

  if (searchBox.classList.contains("show")) {

    searchInput.focus();

  } else {

    searchInput.value = "";

    clearSearch.classList.remove("show");

    searchSuggestions.classList.remove("show");

    searchSuggestions.innerHTML = "";

    renderProducts();

  }

});


searchInput.addEventListener("input", () => {

  const query =
    searchInput.value
      .trim()
      .toLowerCase();

  renderProducts();


  if (!query) {

    clearSearch.classList.remove("show");

    searchSuggestions.classList.remove("show");

    searchSuggestions.innerHTML = "";

    return;
  }


  clearSearch.classList.add("show");


  const matches = products
    .filter(product =>
      getSearchText(product).includes(query)
    )
    .slice(0, 6);


  if (!matches.length) {

    searchSuggestions.innerHTML = `
      <div class="search-empty">
        No products found 💕
      </div>
    `;

    searchSuggestions.classList.add("show");

    return;
  }


  searchSuggestions.innerHTML =
    matches.map(product => `

      <div
        class="search-suggestion"
        data-product-id="${product.id}"
      >

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <div class="search-suggestion-info">

          <div class="search-suggestion-name">
            ${product.name}
          </div>

          <div class="search-suggestion-category">
            ${product.category}
          </div>

        </div>

        <div class="search-suggestion-price">
          ${money(product.price)}
        </div>

      </div>

    `).join("");


  searchSuggestions.classList.add("show");

});


clearSearch.addEventListener("click", () => {

  searchInput.value = "";

  clearSearch.classList.remove("show");

  searchSuggestions.classList.remove("show");

  searchSuggestions.innerHTML = "";

  renderProducts();

  searchInput.focus();

});


searchSuggestions.addEventListener(
  "click",
  event => {

    const item =
      event.target.closest(
        ".search-suggestion"
      );

    if (!item) return;

    const productId = item.dataset.productId;

const product = products.find(
  product => String(product.id) === String(productId)
);

    if (!product) return;

    searchSuggestions.classList.remove("show");

    searchInput.value = product.name;

    renderProducts();

    viewProduct(product.id);

  }
);


document.addEventListener(
  "click",
  event => {

    if (
      !searchBox.contains(event.target) &&
      event.target !== searchBtn
    ) {

      searchSuggestions.classList.remove("show");

    }

  }
);


/* =====================================================
   CART
===================================================== */

function addToCart(productId) {

  const product =
    products.find(
      product => String(product.id) === String(productId)
    );

  if (!product) return;


  const existing =
    cart.find(
      item => item.id === productId
    );


  if (existing) {

    existing.quantity++;

  } else {

    cart.push({
      id: productId,
      quantity: 1
    });

  }


  saveState();

  updateCart();

  showToast(
    `${product.name} added to your cart 🎀`
  );

}


function removeFromCart(productId) {

  cart =
    cart.filter(
      item => item.id !== productId
    );

  saveState();

  updateCart();

}


function changeQuantity(
  productId,
  change
) {

  const item =
    cart.find(
      item => item.id === productId
    );

  if (!item) return;


  item.quantity += change;


  if (item.quantity <= 0) {

    removeFromCart(productId);

    return;

  }


  saveState();

  updateCart();

}


function updateCart() {

  cartItems.innerHTML = "";


  if (!cart.length) {

    cartItems.innerHTML = `

      <div class="empty-cart">

        <div class="empty-cart-icon">
          🛍️
        </div>

        <h3>
          Your cart is empty
        </h3>

        <p>
          Add something pretty to your
          cart and come back here. 💕
        </p>

      </div>

    `;

    cartTotal.textContent =
      money(0);

    cartCount.textContent = "0";

    return;
  }


  cart.forEach(item => {

    const product =
      products.find(
        product => String(product.id) === String(item.id)
      );

    if (!product) return;


    cartItems.innerHTML += `

      <div class="cart-item">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

        <div class="cart-item-info">

          <h4>
            ${product.name}
          </h4>

          <p>
            ${money(product.price)}
          </p>

          <div class="quantity-controls">

            <button
              onclick="changeQuantity(${product.id}, -1)"
            >
              −
            </button>

            <span>
              ${item.quantity}
            </span>

            <button
              onclick="changeQuantity(${product.id}, 1)"
            >
              +
            </button>

          </div>

        </div>

        <button
          class="remove-cart-item"
          onclick="removeFromCart(${product.id})"
          aria-label="Remove ${product.name}"
        >
          ×
        </button>

      </div>

    `;

  });


  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            product => String(product.id) === String(item.id)
          );

        return product
          ? sum + product.price * item.quantity
          : sum;

      },
      0
    );


  const totalItems =
    cart.reduce(
      (sum, item) =>
        sum + item.quantity,
      0
    );


  cartTotal.textContent =
    money(total);

  cartCount.textContent =
    totalItems;

}


/* =====================================================
   CART OPEN / CLOSE
===================================================== */

function openCart() {

  cartDrawer.classList.add("open");

  drawerOverlay.classList.add("show");

}


function closeCart() {

  cartDrawer.classList.remove("open");

  drawerOverlay.classList.remove("show");

}


document
  .getElementById("cartBtn")
  .addEventListener(
    "click",
    openCart
  );


document
  .getElementById("closeCart")
  .addEventListener(
    "click",
    closeCart
  );


drawerOverlay.addEventListener(
  "click",
  closeCart
);


/* =====================================================
   WISHLIST
===================================================== */

function updateWishlistCount() {

  wishlistCount.textContent =
    wishlist.length;

}


function toggleWishlist(productId) {

  if (wishlist.some(id => String(id) === String(product.id))) {

    wishlist =
      wishlist.filter(
        id => id !== productId
      );

    showToast(
      "Removed from wishlist."
    );

  } else {

    wishlist.push(productId);

    showToast(
      "Added to your wishlist 💕"
    );

  }


  saveState();

  updateWishlistCount();

  renderProducts();

}


document
  .getElementById("wishlistBtn")
  .addEventListener(
    "click",
    () => {

      if (!wishlist.length) {

        showToast(
          "Your wishlist is empty 💕"
        );

        return;

      }


      currentFilter = "All";


      const wishedProducts =
        products.filter(
          product =>
           wishlist.some(id => String(id) === String(product.id))
        );


      productGrid.innerHTML = "";


      wishedProducts.forEach(
        (product, index) => {

          const card =
            document.createElement(
              "article"
            );

          card.className =
            "product-card scroll-reveal";

          card.style.setProperty(
            "--reveal-delay",
            `${(index % 4) * 80}ms`
          );


          card.innerHTML = `

            <div class="product-image">

              <img
                src="${product.image}"
                alt="${product.name}"
              >

              <button
                class="wishlist"
                onclick="toggleWishlist(${product.id})"
              >
                ♥
              </button>

            </div>


            <div class="product-info">

              <h3>
                ${product.name}
              </h3>

              <p>
                ${product.description}
              </p>

              <div class="product-price">
                ${money(product.price)}
              </div>

              <div class="product-actions">

                <button
                  class="view-product-btn"
                  onclick="viewProduct(${product.id})"
                >
                  View
                </button>

                <button
                  class="add-cart-btn"
                  onclick="addToCart(${product.id})"
                >
                  Add to Cart
                </button>

              </div>

            </div>

          `;


          productGrid.appendChild(card);

        }
      );


      observeRevealElements();


      document
        .getElementById("shop")
        .scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* =====================================================
   PRODUCT DETAILS
===================================================== */

function viewProduct(productId) {

  const product =
    products.find(
      product => String(product.id) === String(productId)
    );

  if (!product) return;


  document.getElementById(
    "productDetails"
  ).innerHTML = `

    <div class="product-detail">

      <div class="product-detail-image">

        <img
          src="${product.image}"
          alt="${product.name}"
        >

      </div>


      <div class="product-detail-info">

        <span class="product-detail-category">
          ${product.category}
        </span>

        <h2>
          ${product.name}
        </h2>

        <div class="product-detail-price">
          ${money(product.price)}
        </div>

        <p class="product-detail-description">
          ${product.description}
        </p>

        <div class="product-detail-note">
          🎀 Nationwide delivery available
        </div>

        <div class="product-detail-actions">

          <button
            class="btn btn-primary full"
            onclick="
              addToCart(${product.id});
              closeModal('productModal')
            "
          >
            🛍 Add to Cart
          </button>

          <button
            class="btn btn-secondary full"
            onclick="
              closeModal('productModal')
            "
          >
            Continue Shopping
          </button>

        </div>

      </div>

    </div>

  `;


  document
    .getElementById("productModal")
    .classList.add("show");

}


/* =====================================================
   MODALS
===================================================== */

function closeModal(id) {

  document
    .getElementById(id)
    .classList.remove("show");

}


document
  .querySelectorAll(".modal-close")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        closeModal(
          button.dataset.close
        );

      }
    );

  });


document
  .querySelectorAll(".modal")
  .forEach(modal => {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {

          modal.classList.remove(
            "show"
          );

        }

      }
    );

  });


/* =====================================================
   CHECKOUT
===================================================== */

document
  .getElementById("checkoutBtn")
  .addEventListener(
    "click",
    () => {

      if (!cart.length) {

        showToast(
          "Add something pretty to your cart first 🎀"
        );

        return;

      }


      closeCart();


      document
        .getElementById("checkoutModal")
        
        .classList.add("show");
        updateCheckoutTotal();

    }
  );


/* =====================================================
   COPY ACCOUNT NUMBER
===================================================== */

document
  .getElementById("copyAccount")
  .addEventListener(
    "click",
    async  () => {

      try {

        await navigator.clipboard.writeText(
          "9037405727"
        );

        showToast(
          "OPay account number copied 💳"
        );

      } catch {

        showToast(
          "Account number copied manually."
        );

      }

    }
  );


/* =====================================================
   PLACE ORDER
===================================================== */
const customerState = document.getElementById("customerState");
const checkoutSubtotal = document.getElementById("checkoutSubtotal");
const deliveryFeeDisplay = document.getElementById("deliveryFee");
const checkoutTotal = document.getElementById("checkoutTotal");

function getDeliveryFee() {

  if (!customerState.value) {
    return 0;
  }

  if (customerState.value === "Enugu") {
    return 2000;
  }
  
  
  return 0;
}

function updateCheckoutTotal() {




  const subtotal = cart.reduce(
    (total, item) => {

      const product = products.find(
        product => String(product.id) === String(item.id)
      );

      return product
        ? total + Number(product.price) * Number(item.quantity)
        : total;

    },
    0
  );

  const deliveryFee = getDeliveryFee();
  const total = subtotal + deliveryFee;

  checkoutSubtotal.textContent = money(subtotal);
  deliveryFeeDisplay.textContent = money(deliveryFee);
  checkoutTotal.textContent = money(total);
}
customerState.addEventListener("change", updateCheckoutTotal);
document
  .getElementById("checkoutForm")
  .addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const name =
        document
          .getElementById("customerName")
          .value
          .trim();


      const phone =
        document
          .getElementById("customerPhone")
          .value
          .trim();


      const address =
        document
          .getElementById("customerAddress")
          .value
          .trim();

          const state = customerState.value;

let subtotal = 0;

cart.forEach(item => {
  const product = products.find(
    product => String(product.id) === String(item.id)
  );

  if (product) {
    subtotal += Number(product.price) * Number(item.quantity);
  }
});


const deliveryFee = getDeliveryFee();
const total = subtotal + deliveryFee;


      if (!name || !phone || !address) {

        showToast(
          "Please complete your details first 💕"
        );

        return;

      }


     const order = {
  customerName: name,
  customerPhone: phone,
  customerState: state,
  customerAddress: address,

  items: cart.map(item => {
    const product = products.find(
      product => String(product.id) === String(item.id)
    );

    return {
      productId: product?._id || null,
      name: product?.name || "Product",
      price: product?.price || 0,
      quantity: item.quantity
    };
  }),

  subtotal,
  deliveryFee,
  total,

  paymentStatus: "Awaiting Payment",
  orderStatus: "Pending"
};

try {
  const response = await fetch(
    "https://amys-girly-aesthetic-backend.onrender.com/api/orders",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(order)
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.message + ( data.message?": " + data.error : "")
    );
  }

  cart = [];

  saveState();

  updateCart();

  document
    .getElementById("checkoutModal")
    .classList.remove("show");

  document
    .getElementById("checkoutForm")
    .reset();

  showToast(
  `Order received! 🎀 Order ID: ${data.order._id}`
);

document
  .getElementById("trackingOrderId")
  .value = data.order._id;

} catch (error) {
  console.error(
    "Order submission failed:",
    error
  );
  
 showToast("We couldn't place your order. Please try again.");
}
    }
  );
renderProducts()
updateCart()
updateWishlistCount()
updateCheckoutTotal()

// =========================================
// ORDER TRACKING
// =========================================

const trackingOrderId =
  document.getElementById("trackingOrderId");

const trackOrderBtn =
  document.getElementById("trackOrderBtn");

const trackingResult =
  document.getElementById("trackingResult");

const trackingError =
  document.getElementById("trackingError");

const trackedOrderId =
  document.getElementById("trackedOrderId");

const trackedCustomerName =
  document.getElementById("trackedCustomerName");

const trackedOrderTotal =
  document.getElementById("trackedOrderTotal");

const trackedPaymentStatus =
  document.getElementById("trackedPaymentStatus");

const trackingStatus =
  document.getElementById("trackingStatus");

const refreshTracking =
  document.getElementById("refreshTracking");


// -----------------------------------------
// STATUS ORDER
// -----------------------------------------

const orderStatuses = [
  "Pending",
  "Processing",
  "Shipped",
  "Delivered"
];


// -----------------------------------------
// SHOW TRACKING ERROR
// -----------------------------------------

function showTrackingError(message) {

  trackingResult.classList.remove("show");

  trackingError.textContent = message;

  trackingError.classList.add("show");
}


// -----------------------------------------
// UPDATE TIMELINE
// -----------------------------------------

function updateOrderTimeline(status) {

  const steps =
    document.querySelectorAll(
      ".timeline-step"
    );

  const lines =
    document.querySelectorAll(
      ".timeline-line"
    );

  const currentIndex =
    orderStatuses.indexOf(status);

  steps.forEach((step, index) => {

    step.classList.remove(
      "active",
      "completed"
    );

    if (
      currentIndex >= 0 &&
      index <= currentIndex
    ) {
      step.classList.add("completed");
    }

    if (index === currentIndex) {
      step.classList.add("active");
    }

  });


  lines.forEach((line, index) => {

    line.classList.remove("active");

    if (
      currentIndex > index
    ) {
      line.classList.add("active");
    }

  });

}


// -----------------------------------------
// UPDATE STATUS BADGE
// -----------------------------------------

function updateTrackingStatus(status) {

  trackingStatus.textContent = status;

  trackingStatus.className =
    "tracking-status-badge";

  trackingStatus.classList.add(
    status.toLowerCase().replace(" ", "-")
  );

}


// -----------------------------------------
// FIND ORDER
// -----------------------------------------

async function trackOrder(orderId) {

  if (!orderId) {

    showTrackingError(
      "Please enter your Order ID first 🎀"
    );

    return;
  }


  trackingError.classList.remove("show");

  trackOrderBtn.disabled = true;

  trackOrderBtn.textContent =
    "Checking...";


  try {

    const response = await fetch(
      `https://amys-girly-aesthetic-backend.onrender.com/api/orders/${encodeURIComponent(orderId)}`
    );


    const data = await response.json();


    if (!response.ok) {

      throw new Error(
        data.message ||
        "Order could not be found."
      );

    }


    const order = data.order;


    trackedOrderId.textContent =
      order._id;

    trackedCustomerName.textContent =
      order.customerName || "Customer";

    trackedOrderTotal.textContent =
      money(order.total || 0);

    trackedPaymentStatus.textContent =
      order.paymentStatus ||
      "Awaiting Payment";


    const status =
      order.orderStatus ||
      "Pending";


    updateTrackingStatus(status);


    if (
      status === "Cancelled"
    ) {

      updateOrderTimeline(
        "Pending"
      );

      trackingStatus.textContent =
        "Cancelled";

      trackingStatus.style.background =
        "#ffe5e9";

      trackingStatus.style.color =
        "#b4233c";

    } else {

      updateOrderTimeline(
        status
      );

    }


    trackingResult.classList.add(
      "show"
    );


    trackingResult.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });


  } catch (error) {

    console.error(
      "Tracking error:",
      error
    );

    showTrackingError(
      "We couldn't find that order. Please check your Order ID and try again."
    );

  } finally {

    trackOrderBtn.disabled = false;

    trackOrderBtn.textContent =
      "Track My Order";

  }

}


// -----------------------------------------
// TRACK BUTTON
// -----------------------------------------

trackOrderBtn.addEventListener(
  "click",
  () => {

    trackOrder(
      trackingOrderId.value.trim()
    );

  }
);


// -----------------------------------------
// ENTER KEY
// -----------------------------------------

trackingOrderId.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Enter"
    ) {

      event.preventDefault();

      trackOrder(
        trackingOrderId.value.trim()
      );

    }

  }
);


// -----------------------------------------
// REFRESH TRACKING
// -----------------------------------------

refreshTracking.addEventListener(
  "click",
  () => {

    const orderId =
      trackingOrderId.value.trim();

    if (orderId) {

      trackOrder(orderId);

    }

  }
);

/* =========================================
   LOAD PRODUCTS FROM THE LIVE BACKEND
========================================= */

async function loadProductsFromAPI() {
  try {
    const response = await fetch(
      "https://amys-girly-aesthetic-backend.onrender.com/api/products"
    );

    if (!response.ok) {
      throw new Error("Could not load products from the server.");
    }

    const data = await response.json();

    const apiProducts = Array.isArray(data)
      ? data
      : data.products || data.data || [];

    if (!Array.isArray(apiProducts) || apiProducts.length === 0) {
      console.warn("No products returned. Keeping the existing products.");
      return;
    }

    products = apiProducts.map(product => {
      // Match existing products by name to preserve their old IDs.
      const existingProduct = fallbackProducts.find(
        oldProduct =>
          oldProduct.name?.trim().toLowerCase() ===
          product.name?.trim().toLowerCase()
      );

      return {
        ...product,

        id: existingProduct
          ? existingProduct.id
          : String(product._id ?? product.id),

        image: product.image || existingProduct?.image || ""
      };
    });

    renderProducts();
    updateCart();
    updateWishlistCount();
    updateCheckoutTotal();

    console.log("Live products loaded successfully 🎀", products);

  } catch (error) {
    console.error("Could not load live products:", error);
    // Keep the existing products if the request fails.
  }
}

// Load the latest products from the live backend.
loadProductsFromAPI();