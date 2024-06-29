document.addEventListener("DOMContentLoaded", function () {
  const productList = document.getElementById("products-list");
  const filters = document.querySelectorAll(".product-filters ul li");

  const products = [
    {
      name: "Mango",
      image: "https://www.svz.com/wp-content/uploads/2018/05/Mango.jpg",
      price: "85$",
      category: "Fruits",
    },
    {
      name: "Kiwi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQALJiATjTXuSriYCuWy9Ai0jO0e-nMaY6a_w&s",
      price: "70$",
      category: "Fruits",
    },
    {
      name: "Apple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfarAFccmDz22ZlfrL_vWW9Rxja-7INLgIRA&s",
      price: "35$",
      category: "Fruits",
    },
    {
      name: "Grapes",
      image: "https://www.kroger.com/product/images/large/front/0000000004022",
      price: "45$",
      category: "Fruits",
    },
    {
      name: "Pine apple",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EZenExcPl5a_leFkFbwu5jGw2Dv3dmI2fw&s",
      price: "60$",
      category: "Fruits",
    },
    {
      name: "Pomegranate",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT96Qbt2cEk0C3pvieUBQGmsWmBrmGsWyJ4XA&s",
      price: "80$",
      category: "Fruits",
    },
    {
      name: "Tomato",
      image:
        "https://m.economictimes.com/thumb/msid-95423731,width-1200,height-900,resizemode-4,imgsize-56196/tomatoes-canva.jpg",
      price: "85$",
      category: "Vegetables",
    },
    {
      name: "Potato",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjyCPNv5D9KE6RYXJqI01UWluNj-iV7j55qQ&s",
      price: "70$",
      category: "Vegetables",
    },
    {
      name: "Onion",
      image:
        "https://i5.walmartimages.ca/images/Enlarge/610/109/885677610109.jpg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
      price: "35$",
      category: "Vegetables",
    },
    {
      name: "Spinach",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBWeLtrc_d_I0fRUVPT8pNEiiR2cswKU-pdQ&s",
      price: "45$",
      category: "Vegetables",
    },
    {
      name: "Corn",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXX4INk4Ec5e8NvYK9g5lieiKuJoNUkuHPmQ&s",
      price: "60$",
      category: "Vegetables",
    },
    {
      name: "Lemon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKOOL300iHQoUz8yAn7-wdu7pEIyhYB1poRA&s",
      price: "80$",
      category: "Vegetables",
    },
    {
      name: "Brown Eggs",
      image:
        "https://images.heb.com/is/image/HEBGrocery/prd-small/001011641.jpg",
      price: "85$",
      category: "Goods",
    },
    {
      name: "Salted Butter",
      image:
        "https://images.heb.com/is/image/HEBGrocery/prd-small/000126467.jpg",
      price: "70$",
      category: "Goods",
    },
    {
      name: "Yogurt",
      image:
        "https://images.heb.com/is/image/HEBGrocery/prd-small/001142099.jpg",
      price: "35$",
      category: "Goods",
    },
    {
      name: "Biscuit",
      image:
        "https://images.heb.com/is/image/HEBGrocery/prd-small/000126585.jpg",
      price: "45$",
      category: "Goods",
    },
    {
      name: "Slice cheese",
      image:
        "https://images.heb.com/is/image/HEBGrocery/prd-small/000127613.jpg",
      price: "60$",
      category: "Goods",
    },
    {
      name: "Milk",
      image:
        "https://images.heb.com/is/image/HEBGrocery/prd-medium/000481244.jpg",
      price: "80$",
      category: "Goods",
    },
  ];


  function addToCart(product) {
    alert(`${product.name} has been added to the cart`);
    
    // Get the existing cart from Local Storage or create an empty array if it doesn't exist
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Add the new product to the cart
    cart.push(product);

    // Save the updated cart back to Local Storage
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function filterProducts(category) {
    productList.innerHTML = ""; // Clear existing products

    const filteredProducts = products.filter(
      (product) => category === "*" || product.category === category
    );

    // Limit to 9 products only for the "All" category
    const displayedProducts =
      category === "*" ? filteredProducts.slice(0, 9) : filteredProducts;

    displayedProducts.forEach((product) => {
      const productCard = `
        <div class="col-lg-4 col-md-6 text-center ${product.category}">
          <div class="single-product-item">
            <div class="product-image">
              <a href="single-product.html">
                <img src="${product.image}" alt="${product.name}" />
              </a>
            </div>
            <h3>${product.name}</h3>
            <p class="product-price"><span>Per Kg</span> ${product.price}</p>
            <a class="cart-btn" data-product='${JSON.stringify(product)}'>
              <i class="fas fa-shopping-cart"></i> Add to Cart
            </a>
          </div>
        </div>
      `;
      productList.innerHTML += productCard;
    });

    // Add event listeners to the "Add to Cart" buttons
    const cartButtons = document.querySelectorAll(".cart-btn");
    cartButtons.forEach(button => {
      button.addEventListener("click", function () {
        const product = JSON.parse(this.getAttribute('data-product'));
        addToCart(product);
      });
    });
  }

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      const category = this.getAttribute("data-filter");
      filterProducts(category);

      filters.forEach((f) => f.classList.remove("active"));
      this.classList.add("active");
    });
  });

  filterProducts("*");
  filters[0].classList.add("active"); // Selects the "All" filter by default
});
