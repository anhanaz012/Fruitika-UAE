document.addEventListener("DOMContentLoaded", function () {
  const cartTableBody = document.querySelector(".cart-table tbody");

  // Function to retrieve products from local storage
  function getCartProducts() {
    // Retrieve products from local storage
    let products = JSON.parse(localStorage.getItem("cart")) || [];

    // Clear existing table rows
    cartTableBody.innerHTML = "";

    products.forEach((product) => {
      const row = `
            <tr class="table-body-row">
              <td class="product-image">
                <img src="${product.image}" alt="${product.name}" style="height: 40px;" />
              </td>
              <td class="product-name">${product.name}</td>
              <td class="product-price">${product.price}</td>
              <td class="product-quantity">
                <input type="number" value="1" min="1" data-price="${product.price}" />
              </td>
              <td class="product-total">${product.price}</td>
            </tr>
          `;
      cartTableBody.innerHTML += row;
    });

    // Add event listener to each quantity input
    const quantityInputs = document.querySelectorAll(".product-quantity input");
    quantityInputs.forEach((input) => {
      input.addEventListener("change", function () {
        const quantity = parseInt(this.value);
        const price = parseFloat(this.dataset.price);
        const total = quantity * price;
        const row = this.closest(".table-body-row");
        row.querySelector(".product-total").textContent =
          "$" + total.toFixed(2); // Update total with 2 decimal places and prepend '$'

        // Recalculate total price of all products

        calculateTotalPrice();
      });
    });
  }

  // Function to calculate total price of all products
  function calculateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll(".product-total").forEach((total) => {
      // Ensure we only sum up actual product totals, not headers or other unintended elements
      if (total.tagName === "TD") {
        totalPrice += parseFloat(total.textContent.replace("$", ""));
      }
    });

    // Update the total price element
    const totalElement = document.getElementById("total-data");
    totalElement.textContent = "$" + totalPrice.toFixed(2); // Format total price with 2 decimal places and prepend '$'
    totalElement.style.fontWeight = "bold";
    totalElement.style.display = "flex";
    totalElement.style.margin = "20px";
    totalElement.style.fontSize = "20px";
  }

  document
    .getElementById("checkout-button")
    .addEventListener("click", function () {
      alert("Your order has been placed!");
      localStorage.removeItem("cart");
      window.location.href = "index_2.html"
    });

  getCartProducts(); // Initialize cart products
  calculateTotalPrice(); // Calculate initial total price
});
