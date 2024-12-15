let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

function displayCart() {
    const cartItemsList = document.getElementById("cart-items-list");
    const cartTotal = document.getElementById("cart-total");

    // Clear current list
    cartItemsList.innerHTML = "";

    if (cart.length === 0) {
        cartItemsList.innerHTML = "<li>Your cart is empty!</li>";
        return;
    }

    // Populate the list
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} - $${item.price.toFixed(2)}
            <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
        `;
        cartItemsList.appendChild(listItem);
    });

    // Update total
    cartTotal.textContent = total.toFixed(2);
}

function removeItem(index) {
    total -= cart[index].price;
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total.toFixed(2));

    displayCart();
}

displayCart();

