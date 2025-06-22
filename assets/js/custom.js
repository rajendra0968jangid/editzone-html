
  // All available products
  const products = [
    {
      name: "Edius 11",
      price: 1529,
      image: "assets/img/products/grass-valley-edius-11.png",
      link: "edius11.html"
    },
    {
      name: "Cut Sense",
      price: 1529,
      image: "assets/img/products/cut.png",
      link: "/cut-sense.html"
    },
    {
      name: "Album Sense",
      price: 1529,
      image: "assets/img/products/insidelogic-album-sense.png",
      link: "album-sense.html"
    }
  ];

  // Load or initialize cart
  let cart = JSON.parse(localStorage.getItem("cartItems")) || [];

  function saveCart() {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }

  function addToCart(productName) {
    const product = products.find(p => p.name === productName);
    if (!product) {
      console.error("Product not found:", productName);
      return;
    }

    const existingItem = cart.find(item => item.name === product.name);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    console.log(`✅ ${productName} added to cart`);
    displayCart();
  }

  function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    saveCart();
    displayCart();
  }

  function increaseQuantity(productName) {
    const item = cart.find(item => item.name === productName);
    if (item) item.quantity += 1;
    saveCart();
    displayCart();
  }

  function decreaseQuantity(productName) {
    const item = cart.find(item => item.name === productName);
    if (item) {
      item.quantity -= 1;
      if (item.quantity <= 0) {
        removeFromCart(productName);
      } else {
        saveCart();
      }
    }
    displayCart();
  }

  function displayCart() {
    console.clear();
    console.log("🛒 Cart Items:");
    cart.forEach(item => {
      console.log(`📦 ${item.name} x ${item.quantity} - ₹${item.price} each`);
    });
  }

  displayCart();

