let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = parseFloat(localStorage.getItem("total")) || 0;

function updateCartIconCount() {
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cart.length; // Display number of items in the cart

    // Show the count only if there are items
    if (cart.length > 0) {
        cartCount.style.display = "inline-block";
    } else {
        cartCount.style.display = "none";
    }
}

function addToCart(itemName, price) {
    // Add to cart array
    cart.push({ name: itemName, price });
    total += price;

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total.toFixed(2));

    // Update the cart icon count
    updateCartIconCount();
}

// Update the cart count on page load
document.addEventListener("DOMContentLoaded", updateCartIconCount);
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();


});
document.getElementById('show-message-btn').addEventListener('click', function () {
    const messageContainer = document.getElementById('message-container');

    // Create the message element
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = 'Added to order list';
    message.style.color = "green";
    // Append the message under the button
    messageContainer.appendChild(message);

    // Remove the message after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
});