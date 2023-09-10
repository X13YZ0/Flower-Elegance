const checkoutButton = document.querySelector(".checkout-button");

checkoutButton.addEventListener("click", function() {
    const cartItems = document.querySelectorAll(".cart-item");

    if (cartItems.length === 0) {
        alert("There are no products in the cart.");
    } else {
        // เปลี่ยนไปยังหน้า Checkout
        window.location.href = "checkout.html";
    }
});