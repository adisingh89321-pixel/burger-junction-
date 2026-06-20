// Burger Junction 2.0 - Client Side Application Script

// --- Menu Database ---
const menuItems = [
  // --- BURGERS ---
  {
    id: 'aloo_tikki',
    name: 'Aloo Tikki Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Crispy potato patty, fresh onions, tomatoes & signature burger sauces.',
    price: 45
  },
  {
    id: 'aloo_tikki_cheese',
    name: 'Aloo Tikki Cheese Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Crispy aloo tikki patty loaded with a slice of creamy cheddar cheese.',
    price: 55
  },
  {
    id: 'supreme_burger',
    name: 'Supreme Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Rich vegetable patty with garlic-herb mayonnaise and fresh veggies.',
    price: 65
  },
  {
    id: 'supreme_cheese_burger',
    name: 'Supreme Cheese Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Supreme veggie patty topped with fresh cheese slice & signature spreads.',
    price: 75
  },
  {
    id: 'veggie_burger',
    name: 'Veggie Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Premium green veg patty with creamy mayo, crisp lettuce, tomato & onion.',
    price: 70
  },
  {
    id: 'veggie_cheese_burger',
    name: 'Veggie Cheese Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Classic veggie burger with double mayo and a melt-in-your-mouth cheese slice.',
    price: 80
  },
  {
    id: 'veggie_chilli_cheese_burger',
    name: 'Veggie Chilli Cheese Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Spicy veggie patty layered with liquid cheese, green chillies & spicy sauce.',
    price: 85
  },
  {
    id: 'palak_corn_patty_burger',
    name: 'Palak Corn Patty Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Unique crispy spinach and sweet corn patty paired with mint mayo.',
    price: 70
  },
  {
    id: 'palak_corn_patty_cheese_burger',
    name: 'Palak Corn Cheese Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Palak corn patty served with a thick slice of cheese and premium herbs.',
    price: 80
  },
  {
    id: 'paneer_chilli_burger',
    name: 'Paneer Chilli Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Crispy paneer patty, hot chilli sauce, capsicum slices, and rich mayonnaise.',
    price: 90
  },
  {
    id: 'paneer_chilli_cheese_burger',
    name: 'Paneer Chilli Cheese Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Spicy paneer patty, loaded cheese slice, and spicy schezwan dressing.',
    price: 99
  },
  {
    id: 'cheese_burst_burger',
    name: 'Cheese Burst Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'Filled with overflowing liquid cheese, a crispy patty, and fresh toppings.',
    price: 95
  },
  {
    id: 'veg_king_burger',
    name: 'Veg King Burger',
    category: 'burgers',
    emoji: '🍔',
    desc: 'King size double-patty burger with layered cheese, fresh veggies and pickles.',
    price: 90
  },
  {
    id: 'bj_special_burger',
    name: 'BJ Special Burger',
    category: 'burgers',
    emoji: '👑',
    desc: 'Our signature heavy burger loaded with premium paneer, cheese burst, and special sauces.',
    price: 115
  },
  
  // --- KOREAN STYLE BURGERS ---
  {
    id: 'veg_korean_burger',
    name: 'Veg Korean Burger',
    category: 'burgers',
    emoji: '🇰🇷',
    desc: 'Crispy veggie patty dipped in sweet & spicy Korean glaze, topped with sesame.',
    price: 75,
    tag: 'Korean Style'
  },
  {
    id: 'paneer_korean_burger',
    name: 'Paneer Korean Burger',
    category: 'burgers',
    emoji: '🇰🇷',
    desc: 'Succulent paneer patty coated in authentic Korean chili paste glaze.',
    price: 99,
    tag: 'Korean Style'
  },

  // --- BURGER COMBOS ---
  {
    id: 'aloo_tikki_combo',
    name: 'Aloo Tikki Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Aloo Tikki Burger + Salted French Fries + Cold Drink (250ml)',
    price: 115,
    tag: 'Combo'
  },
  {
    id: 'supreme_combo',
    name: 'Supreme Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Supreme Burger + Salted French Fries + Cold Drink (250ml)',
    price: 135,
    tag: 'Combo'
  },
  {
    id: 'veggie_burger_combo',
    name: 'Veggie Burger Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Veggie Burger + Salted French Fries + Cold Drink (250ml)',
    price: 145,
    tag: 'Combo'
  },
  {
    id: 'veggie_chilli_cheese_combo',
    name: 'Veggie Chilli Cheese Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Veggie Chilli Cheese Burger + Salted French Fries + Cold Drink (250ml)',
    price: 155,
    tag: 'Combo'
  },
  {
    id: 'palak_corn_combo',
    name: 'Palak Corn Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Palak Corn Burger + Salted French Fries + Cold Drink (250ml)',
    price: 145,
    tag: 'Combo'
  },
  {
    id: 'paneer_chilli_combo',
    name: 'Paneer Chilli Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Paneer Chilli Burger + Salted French Fries + Cold Drink (250ml)',
    price: 165,
    tag: 'Combo'
  },
  {
    id: 'cheese_burst_combo',
    name: 'Cheese Burst Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Cheese Burst Burger + Salted French Fries + Cold Drink (250ml)',
    price: 170,
    tag: 'Combo'
  },
  {
    id: 'king_combo',
    name: 'King Combo',
    category: 'burgers',
    emoji: '🥤',
    desc: 'Veg King Burger + Salted French Fries + Cold Drink (250ml)',
    price: 160,
    tag: 'Combo'
  },
  {
    id: 'bj_special_combo',
    name: 'BJ Special Combo',
    category: 'burgers',
    emoji: '👑',
    desc: 'BJ Special Burger + Salted French Fries + Cold Drink (250ml)',
    price: 190,
    tag: 'Combo'
  },

  // --- PIZZAS ---
  {
    id: 'margherita_pizza',
    name: 'Margherita Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Classic single cheese pizza with fresh tomato-herb pizza sauce base.',
    prices: { Small: 79, Medium: 169, Large: 229 }
  },
  {
    id: 'farm_fresh_pizza',
    name: 'Farm Fresh Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Loaded with crunchy capsicum, sweet corn, onions, tomatoes, and mozzarella.',
    prices: { Small: 119, Medium: 179, Large: 249 }
  },
  {
    id: 'sweet_corn_pizza',
    name: 'Sweet Corn Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Fresh golden sweet corn kernels with mozzarella cheese and Italian seasoning.',
    prices: { Small: 119, Medium: 179, Large: 249 }
  },
  {
    id: 'chilli_cheese_pizza',
    name: 'Chilli Cheese Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Spicy green chillies, liquid cheese, red paprika, and loaded mozzarella.',
    prices: { Small: 119, Medium: 179, Large: 249 }
  },
  {
    id: 'paneer_tikka_pizza',
    name: 'Paneer Tikka Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Tandoori marinated paneer cubes, capsicum, onions, and spicy pizza sauce.',
    prices: { Small: 129, Medium: 199, Large: 289 }
  },
  {
    id: 'cheese_burst_pizza',
    name: 'Cheese Burst Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Pizza base overflowing with hot liquid cheese sauce, topped with mozzarella.',
    prices: { Small: 139, Medium: 199, Large: 289 }
  },
  {
    id: 'double_cheese_pizza',
    name: 'Double Cheese Pizza',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Double portion of pure mozzarella cheese on a crispy hand-tossed base.',
    prices: { Small: 139, Medium: 199, Large: 289 }
  },
  {
    id: 'pizza_exotica',
    name: 'Pizza Exotica',
    category: 'pizzas',
    emoji: '🍕',
    desc: 'Premium pizza loaded with sweet corn, paneer, olives, capsicum, and jalapenos.',
    prices: { Small: 159, Medium: 209, Large: 299 }
  },
  {
    id: 'kulhad_pizza',
    name: 'Kulhad Pizza',
    category: 'pizzas',
    emoji: '🏺',
    desc: 'Unique Delhi style cheesy pizza mixture baked piping-hot inside a clay pot (Kulhad).',
    price: 60
  },
  {
    id: 'paneer_kulhad_pizza',
    name: 'Paneer Kulhad Pizza',
    category: 'pizzas',
    emoji: '🏺',
    desc: 'Signature clay-pot pizza loaded with paneer chunks, sweet corn, veggies, and cheese.',
    price: 79
  },

  // --- GARLIC BREADS ---
  {
    id: 'garlic_bread_plain',
    name: 'Garlic Bread Without Topping',
    category: 'pizzas',
    emoji: '🥖',
    desc: 'Freshly baked buttery bread with garlic-herb spread.',
    price: 69
  },
  {
    id: 'garlic_bread_toppings',
    name: 'Garlic Bread With Topping',
    category: 'pizzas',
    emoji: '🥖',
    desc: 'Garlic bread topped with chopped onions, juicy tomatoes, capsicum, and cheese.',
    price: 79
  },
  {
    id: 'stuffed_garlic_bread_corn',
    name: 'Stuffed Garlic Bread Sweet Corn',
    category: 'pizzas',
    emoji: '🥖',
    desc: 'Folded garlic bread stuffed with sweet corn kernels, jalapenos, and mozzarella.',
    price: 120
  },
  {
    id: 'stuffed_garlic_bread_paneer',
    name: 'Stuffed Garlic Bread Paneer',
    category: 'pizzas',
    emoji: '🥖',
    desc: 'Folded garlic bread stuffed with spicy paneer chunks and melted cheese.',
    price: 150
  },

  // --- FRIES & SNACKS ---
  {
    id: 'french_fries',
    name: 'French Fries',
    category: 'snacks',
    emoji: '🍟',
    desc: 'Golden crispy potato fingers fried to perfection.',
    prices: { Medium: 69, Large: 89 }
  },
  {
    id: 'peri_peri_fries',
    name: 'Peri Peri Fries',
    category: 'snacks',
    emoji: '🍟',
    desc: 'Crispy french fries tossed in spicy and tangy Peri Peri spice seasoning.',
    prices: { Medium: 79, Large: 99 }
  },
  {
    id: 'loaded_fries',
    name: 'Loaded Fries',
    category: 'snacks',
    emoji: '🍟',
    desc: 'Fries drenched in warm liquid cheese sauce and special burger dressing.',
    prices: { Medium: 99, Large: 129 }
  },
  {
    id: 'ching_fries',
    name: 'Ching Fries (Korean Style)',
    category: 'snacks',
    emoji: '🍟',
    desc: 'Crispy fries drizzled with spicy Korean chilli glaze and sesame toppings.',
    prices: { Medium: 99, Large: 129 },
    tag: 'Korean Style'
  },
  {
    id: 'veg_cheese_stix',
    name: 'Veg Cheese Stix (5 Pcs)',
    category: 'snacks',
    emoji: '🧀',
    desc: 'Breaded cheese sticks fried golden, served with creamy cheese dip.',
    price: 85
  },
  {
    id: 'cheese_balls',
    name: 'Cheese Balls (8 Pcs)',
    category: 'snacks',
    emoji: '🧀',
    desc: 'Bite-sized potato-cheese balls fried crispy, bursting with cheese inside.',
    price: 85
  },
  
  // --- MOMOS ---
  {
    id: 'veg_momos',
    name: 'Veg Momos (8 Pcs)',
    category: 'snacks',
    emoji: '🥟',
    desc: 'Stuffed with fresh minced vegetables and steamed or fried to perfection.',
    prices: { Steamed: 79, Fried: 89 }
  },
  {
    id: 'paneer_momos',
    name: 'Paneer Momos (8 Pcs)',
    category: 'snacks',
    emoji: '🥟',
    desc: 'Stuffed with soft seasoned paneer mash and steamed or fried.',
    prices: { Steamed: 109, Fried: 119 }
  },
  {
    id: 'gravy_momos_veg',
    name: 'Gravy Momos Veg (8 Pcs)',
    category: 'snacks',
    emoji: '🥟',
    desc: 'Veg momos tossed in creamy, spicy, tomato-based tandoori gravy.',
    price: 109,
    tag: 'Steamed'
  },
  {
    id: 'gravy_momos_paneer',
    name: 'Gravy Momos Paneer (8 Pcs)',
    category: 'snacks',
    emoji: '🥟',
    desc: 'Paneer momos cooked in hot, buttery, spicy cream gravy.',
    price: 139,
    tag: 'Steamed'
  },
  {
    id: 'veg_kurkure_momos',
    name: 'Veg Kurkure Momos',
    category: 'snacks',
    emoji: '🥟',
    desc: 'Momos coated in crispy cornflake batter, deep fried. Served with spicy dip.',
    prices: { '4 Pcs': 69, '8 Pcs': 129 }
  },
  {
    id: 'paneer_kurkure_momos',
    name: 'Paneer Kurkure Momos',
    category: 'snacks',
    emoji: '🥟',
    desc: 'Paneer momos fried in ultra-crisp cornflake coating. Super crunchy!',
    prices: { '4 Pcs': 79, '8 Pcs': 149 }
  },
  {
    id: 'spring_rolls',
    name: 'Spring Rolls (4 Pcs)',
    category: 'snacks',
    emoji: '🌯',
    desc: 'Crisp sheet rolls stuffed with noodles and stir-fried vegetables.',
    price: 79
  },
  {
    id: 'classic_vada_pav',
    name: 'Classic Vada Pav',
    category: 'snacks',
    emoji: '🥯',
    desc: 'Mumbai style spicy potato vada inside a soft pav with garlic chutney.',
    price: 35
  },
  {
    id: 'spicy_vada_pav',
    name: 'Spicy Mumbai Vada Pav',
    category: 'snacks',
    emoji: '🥯',
    desc: 'Vada Pav loaded with extra spicy green chilli paste and mint chutney.',
    price: 45
  },
  {
    id: 'cheese_vada_pav',
    name: 'Cheese Vada Pav',
    category: 'snacks',
    emoji: '🥯',
    desc: 'Vada Pav topped with hot liquid cheese and a cheddar slice.',
    price: 45
  },

  // --- SANDWICHES ---
  {
    id: 'farm_fresh_sandwich',
    name: 'Farm Fresh Sandwich',
    category: 'pastas',
    emoji: '🥪',
    desc: 'Fresh bread slices packed with cucumbers, onions, tomatoes, and sandwich mayo.',
    price: 70
  },
  {
    id: 'paneer_tikka_sandwich',
    name: 'Paneer Tikka Sandwich',
    category: 'pastas',
    emoji: '🥪',
    desc: 'Grilled sandwich stuffed with roasted paneer cubes and tandoori spread.',
    price: 85
  },
  {
    id: 'palak_corn_sandwich',
    name: 'Palak Corn Sandwich',
    category: 'pastas',
    emoji: '🥪',
    desc: 'Grilled bread stuffed with spinach, sweet corn, cream, and herbs.',
    price: 85
  },
  {
    id: 'cheese_sandwich',
    name: 'Cheese Sandwich',
    category: 'pastas',
    emoji: '🥪',
    desc: 'Classic buttered bread grilled with loaded cheddar and mozzarella cheese.',
    price: 85
  },
  {
    id: 'pizza_sandwich',
    name: 'Pizza Sandwich',
    category: 'pastas',
    emoji: '🥪',
    desc: 'Grilled sandwich stuffed with pizza veggies, pizza sauce, and mozzarella cheese.',
    price: 85
  },
  {
    id: 'farm_fresh_sandwich_combo',
    name: 'Farm Fresh Sandwich Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Farm Fresh Sandwich + French Fries + Cold Drink (250ml)',
    price: 135,
    tag: 'Combo'
  },
  {
    id: 'paneer_tikka_sandwich_combo',
    name: 'Paneer Tikka Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Paneer Tikka Sandwich + French Fries + Cold Drink (250ml)',
    price: 145,
    tag: 'Combo'
  },
  {
    id: 'palak_corn_sandwich_combo',
    name: 'Palak Corn Sandwich Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Palak Corn Sandwich + French Fries + Cold Drink (250ml)',
    price: 145,
    tag: 'Combo'
  },
  {
    id: 'cheese_sandwich_combo',
    name: 'Cheese Sandwich Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Cheese Sandwich + French Fries + Cold Drink (250ml)',
    price: 145,
    tag: 'Combo'
  },
  {
    id: 'pizza_sandwich_combo',
    name: 'Pizza Sandwich Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Pizza Sandwich + French Fries + Cold Drink (250ml)',
    price: 145,
    tag: 'Combo'
  },

  // --- PASTAS ---
  {
    id: 'red_devil_pasta',
    name: 'Red Devil Pasta',
    category: 'pastas',
    emoji: '🍝',
    desc: 'Penne pasta cooked in hot, tangy tomato red sauce with herbs.',
    prices: { Medium: 90, Large: 130 }
  },
  {
    id: 'white_magic_pasta',
    name: 'White Magic Pasta',
    category: 'pastas',
    emoji: '🍝',
    desc: 'Penne cooked in rich, creamy, cheese-garlic white sauce.',
    prices: { Medium: 110, Large: 160 }
  },
  {
    id: 'red_white_pasta',
    name: 'Red & White Mix Pasta',
    category: 'pastas',
    emoji: '🍝',
    desc: 'Chef\'s special pink sauce pasta—blend of red and white sauces.',
    prices: { Medium: 110, Large: 160 }
  },
  {
    id: 'cheese_garlic_pasta',
    name: 'Cheese Garlic Pasta',
    category: 'pastas',
    emoji: '🍝',
    desc: 'Super cheesy pasta with strong garlic aroma, baked cheese layer.',
    prices: { Medium: 130, Large: 190 }
  },
  {
    id: 'exotica_pasta',
    name: 'Exotica Pasta',
    category: 'pastas',
    emoji: '🍝',
    desc: 'Creamy pasta loaded with olives, mushrooms, baby corn, capsicum and herbs.',
    prices: { Medium: 130, Large: 190 }
  },
  {
    id: 'red_devil_combo',
    name: 'Red Devil Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Red Devil Pasta + Garlic Bread (2 Pcs) + Cold Drink (250ml)',
    price: 169,
    tag: 'Combo'
  },
  {
    id: 'white_magic_combo',
    name: 'White Magic Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'White Magic Pasta + Garlic Bread (2 Pcs) + Cold Drink (250ml)',
    price: 169,
    tag: 'Combo'
  },
  {
    id: 'red_white_combo',
    name: 'Red & White Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Red & White Mix Pasta + Garlic Bread (2 Pcs) + Cold Drink (250ml)',
    price: 169,
    tag: 'Combo'
  },
  {
    id: 'cheese_garlic_combo',
    name: 'Cheese Garlic Combo',
    category: 'pastas',
    emoji: '🥤',
    desc: 'Cheese Garlic Pasta + Garlic Bread (2 Pcs) + Cold Drink (250ml)',
    price: 190,
    tag: 'Combo'
  },
  {
    id: 'exotica_pasta_combo',
    name: 'Exotica Pasta Combo',
    category: 'pastas',
    emoji: '👑',
    desc: 'Exotica Pasta + Garlic Bread (2 Pcs) + Cold Drink (250ml)',
    price: 199,
    tag: 'Combo'
  },

  // --- WRAPS ---
  {
    id: 'veggie_wrap',
    name: 'Veggie Wrap',
    category: 'pastas',
    emoji: '🌯',
    desc: 'Tortilla wrap stuffed with crispy veg patty salad and cheese dressing.',
    price: 75
  },
  {
    id: 'paneer_tikka_wrap',
    name: 'Paneer Tikka Wrap',
    category: 'pastas',
    emoji: '🌯',
    desc: 'Soft wrap stuffed with roasted paneer cubes, onion capsicum, and mint mayonnaise.',
    price: 99
  },
  {
    id: 'spicy_paneer_wrap',
    name: 'Spicy Paneer Wrap',
    category: 'pastas',
    emoji: '🌯',
    desc: 'Loaded wrap with crunchy paneer cubes, hot tandoori sauce and pickled onions.',
    price: 99
  },
  {
    id: 'falafel_wrap',
    name: 'Falafal Wrap',
    category: 'pastas',
    emoji: '🌯',
    desc: 'Mediterranean style wrap with crispy falafel chickpea patties and garlic spread.',
    price: 85
  },
  {
    id: 'soya_chaap_wrap',
    name: 'Soya Chaap Wrap',
    category: 'pastas',
    emoji: '🌯',
    desc: 'Unique Delhi special tandoori soya chaap masala wrap with green mint cream.',
    price: 99
  }
];

// --- Application State ---
let cart = [];
let currentCategory = 'all';
let searchQuery = '';

// --- DOM Elements ---
const menuGrid = document.getElementById('menuGrid');
const menuSearch = document.getElementById('menuSearch');
const tabButtons = document.querySelectorAll('.tab-btn');
const noResults = document.getElementById('noResults');

const cartTrigger = document.getElementById('cartTrigger');
const cartDrawer = document.getElementById('cartDrawer');
const cartClose = document.getElementById('cartClose');
const cartBackdrop = document.getElementById('cartBackdrop');
const cartItemsContainer = document.getElementById('cartItems');
const cartCountBadge = document.getElementById('cartCount');
const cartFooter = document.getElementById('cartFooter');
const cartSubtotalEl = document.getElementById('cartSubtotal');

const orderNameInput = document.getElementById('orderName');
const orderTypeRadios = document.getElementsByName('orderType');
const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

const menuToggle = document.getElementById('menuToggle');
const mobileNavOverlay = document.getElementById('mobileNavOverlay');
const mobileNavLinks = document.querySelectorAll('.mobile-link');

// --- Helper Functions ---
function getPriceForItem(item, selectedOption) {
  if (item.prices) {
    return item.prices[selectedOption];
  }
  return item.price;
}

// --- Cart Logic ---
function saveCartToLocalStorage() {
  localStorage.setItem('bj_cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('bj_cart');
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
      updateCartUI();
    } catch (e) {
      cart = [];
    }
  }
}

function addToCart(itemId, option = null) {
  const item = menuItems.find(i => i.id === itemId);
  if (!item) return;

  const price = getPriceForItem(item, option);
  
  // Find duplicate in cart
  const cartIndex = cart.findIndex(c => c.id === itemId && c.option === option);
  
  if (cartIndex > -1) {
    cart[cartIndex].qty += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      option: option,
      price: price,
      qty: 1,
      emoji: item.emoji
    });
  }

  saveCartToLocalStorage();
  updateCartUI();
  
  // Quick bounce effect on cart badge
  cartCountBadge.classList.add('bounce');
  setTimeout(() => cartCountBadge.classList.remove('bounce'), 300);

  // Auto open cart drawer when adding item
  openCartDrawer();
}

function updateCartQty(itemId, option, change) {
  const cartIndex = cart.findIndex(c => c.id === itemId && c.option === option);
  if (cartIndex === -1) return;

  cart[cartIndex].qty += change;
  if (cart[cartIndex].qty <= 0) {
    cart.splice(cartIndex, 1);
  }

  saveCartToLocalStorage();
  updateCartUI();
}

function updateCartUI() {
  // Update badge count
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountBadge.textContent = totalCount;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <span class="empty-icon">🍔</span>
        <p>Your cart is empty.</p>
        <p class="empty-sub">Add delicious burgers and combos to start your order!</p>
      </div>
    `;
    cartFooter.style.display = 'none';
    return;
  }

  // Render items
  cartItemsContainer.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <div class="cart-item-title">${item.emoji} ${item.name}</div>
        ${item.option ? `<div class="cart-item-option">Size/Type: ${item.option}</div>` : ''}
        <div class="cart-item-price">${item.price * item.qty} <span style="font-size: 11px; color:#888;">(₹${item.price} each)</span></div>
      </div>
      <div class="cart-item-qty-control">
        <button class="qty-btn" onclick="updateCartQty('${item.id}', ${item.option ? `'${item.option}'` : 'null'}, 1)">+</button>
        <span class="qty-val">${item.qty}</span>
        <button class="qty-btn" onclick="updateCartQty('${item.id}', ${item.option ? `'${item.option}'` : 'null'}, -1)">-</button>
      </div>
    </div>
  `).join('');

  // Calculate Subtotal
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  cartSubtotalEl.textContent = `₹${subtotal}`;
  cartFooter.style.display = 'block';
}

// --- Menu Rendering Logic ---
function renderMenu() {
  const filtered = menuItems.filter(item => {
    const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.tag && item.tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    menuGrid.innerHTML = '';
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';
  
  menuGrid.innerHTML = filtered.map(item => {
    // Check if item has sizes/price variations
    const hasOptions = !!item.prices;
    const optionsKeys = hasOptions ? Object.keys(item.prices) : [];
    const defaultOption = hasOptions ? optionsKeys[0] : null;
    const initialPrice = hasOptions ? item.prices[defaultOption] : item.price;
    
    // Check item tags
    let badgeHtml = '';
    if (item.tag === 'Korean Style') {
      badgeHtml = `<span class="card-badge badge-korean">🇰🇷 Korean</span>`;
    } else if (item.tag === 'Combo') {
      badgeHtml = `<span class="card-badge badge-combo">🥤 Combo</span>`;
    } else if (item.tag === 'Steamed') {
      badgeHtml = `<span class="card-badge badge-regular">Steamed</span>`;
    } else {
      badgeHtml = `<span class="card-badge badge-regular">${item.category}</span>`;
    }

    return `
      <div class="menu-card" data-id="${item.id}">
        <div class="card-top">
          ${badgeHtml}
          <span class="card-emoji">${item.emoji}</span>
        </div>
        
        <div class="card-details-wrapper">
          <h3 class="card-title">${item.name}</h3>
          <p class="card-desc">${item.desc}</p>
        </div>

        ${hasOptions ? `
          <div class="card-options">
            <p class="option-title">Select Size / Type:</p>
            <div class="option-selector">
              ${optionsKeys.map((option, index) => `
                <label class="selector-label ${index === 0 ? 'active' : ''}" data-price="${item.prices[option]}">
                  <input type="radio" name="option-${item.id}" value="${option}" ${index === 0 ? 'checked' : ''}>
                  ${option}
                </label>
              `).join('')}
            </div>
          </div>
        ` : ''}

        <div class="card-bottom">
          <div class="card-price" id="price-${item.id}">${initialPrice}</div>
          <button class="btn-add" aria-label="Add to Order" onclick="handleCardAddClick('${item.id}')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
          </button>
        </div>
      </div>
    `;
  }).join('');

  // Attach dynamic behavior for options selection inside the generated HTML
  attachOptionClickHandlers();
}

function attachOptionClickHandlers() {
  document.querySelectorAll('.option-selector').forEach(selector => {
    const labels = selector.querySelectorAll('.selector-label');
    labels.forEach(label => {
      label.addEventListener('click', function() {
        // Toggle active styling
        labels.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        
        // Find price and card ID to update UI
        const input = this.querySelector('input');
        input.checked = true;
        
        const price = this.getAttribute('data-price');
        const card = this.closest('.menu-card');
        const cardId = card.getAttribute('data-id');
        
        document.getElementById(`price-${cardId}`).textContent = price;
      });
    });
  });
}

function handleCardAddClick(itemId) {
  const card = document.querySelector(`.menu-card[data-id="${itemId}"]`);
  if (!card) return;

  const activeOptionLabel = card.querySelector('.selector-label.active');
  const option = activeOptionLabel ? activeOptionLabel.querySelector('input').value : null;
  
  addToCart(itemId, option);
}

// --- Navigation & Header Effects ---
window.addEventListener('scroll', () => {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  scrollSpy();
});

function scrollSpy() {
  const sections = document.querySelectorAll('section, footer');
  const navLinks = document.querySelectorAll('.nav-link');
  
  let currentActiveId = 'home';
  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    
    if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
      currentActiveId = sectionId;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentActiveId}`) {
      link.classList.add('active');
    }
  });
}

// --- Drawer Navigation Controls ---
function openCartDrawer() {
  cartDrawer.classList.add('open');
  cartBackdrop.classList.add('open');
  document.body.style.overflow = 'hidden'; // Lock background scrolling
}

function closeCartDrawer() {
  cartDrawer.classList.remove('open');
  cartBackdrop.classList.remove('open');
  document.body.style.overflow = 'auto'; // Unlock background scrolling
}

// --- Mobile Hamburger Menu ---
function toggleMobileMenu() {
  mobileNavOverlay.classList.toggle('open');
  menuToggle.classList.toggle('active');
  
  // Transform Hamburger Icon
  const spans = menuToggle.querySelectorAll('span');
  if (menuToggle.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
  } else {
    spans[0].style.transform = 'none';
    spans[1].style.opacity = '1';
    spans[2].style.transform = 'none';
  }
}

// --- Send Order on WhatsApp ---
function initiateWhatsAppCheckout() {
  if (cart.length === 0) return;

  const customerName = orderNameInput.value.trim() || 'Valued Customer';
  
  let orderType = 'Takeaway';
  for (let radio of orderTypeRadios) {
    if (radio.checked) {
      orderType = radio.value;
      break;
    }
  }

  // Format order text
  let orderMsg = `🔥 *NEW ORDER - BURGER JUNCTION 2.0* 🔥\n`;
  orderMsg += `------------------------------------------\n`;
  orderMsg += `👤 *Name:* ${customerName}\n`;
  orderMsg += `📦 *Order Mode:* ${orderType}\n`;
  orderMsg += `------------------------------------------\n\n`;
  
  orderMsg += `🛒 *Items Ordered:* \n`;
  
  cart.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    const optionText = item.option ? ` [${item.option}]` : '';
    orderMsg += `${index + 1}. ${item.emoji} *${item.name}*${optionText}\n`;
    orderMsg += `    Qty: ${item.qty} x ₹${item.price} = *₹${itemTotal}*\n`;
  });
  
  const totalAmount = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  orderMsg += `\n💵 *Total Amount to Pay: ₹${totalAmount}*\n`;
  orderMsg += `------------------------------------------\n`;
  orderMsg += `👋 _Please verify and prepare my order. Thanks!_`;

  // Encode message
  const encodedText = encodeURIComponent(orderMsg);
  const waUrl = `https://api.whatsapp.com/send?phone=919289281280&text=${encodedText}`;

  // Clear cart upon redirection to encourage completion
  cart = [];
  saveCartToLocalStorage();
  updateCartUI();
  closeCartDrawer();
  
  // Redirect
  window.open(waUrl, '_blank');
}

// --- Setup Event Listeners ---
function init() {
  // Load local storage cart
  loadCartFromLocalStorage();
  
  // Render Menu
  renderMenu();

  // Search input event
  menuSearch.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderMenu();
  });

  // Category tab clicking
  tabButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      tabButtons.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');
      renderMenu();
    });
  });

  // Drawer toggles
  cartTrigger.addEventListener('click', openCartDrawer);
  cartClose.addEventListener('click', closeCartDrawer);
  cartBackdrop.addEventListener('click', closeCartDrawer);

  // Mobile menu toggle
  menuToggle.addEventListener('click', toggleMobileMenu);
  
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggleMobileMenu();
    });
  });

  // Order type selection toggle styling
  const orderTypeLabels = document.querySelectorAll('.order-type-toggle label');
  orderTypeLabels.forEach(label => {
    label.addEventListener('click', function() {
      orderTypeLabels.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // WhatsApp checkout triggers
  whatsappCheckoutBtn.addEventListener('click', initiateWhatsAppCheckout);
}

// Run init on load
window.addEventListener('DOMContentLoaded', init);
