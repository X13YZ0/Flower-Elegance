<!-- เพิ่มโค้ดส่วนแสดงข้อมูลสินค้าในตะกร้าจาก localStorage -->
    const cartItemsContainer = document.getElementById("cart-items");
    const emptyCartMessage = document.getElementById("empty-cart-message");
    
    function updateTotalPrice() {
        const cartItems = document.querySelectorAll(".cart-item");
        const totalPriceElement = document.querySelector(".total-price");
        let totalPrice = 0;
        
        cartItems.forEach(item => {
            const priceText = item.querySelector(".price").textContent;
            const priceValue = parseFloat(priceText.replace("Price: ", "").replace(" Bath", ""));
            totalPrice += priceValue;
        });
        
        totalPriceElement.textContent = totalPrice.toFixed(2) + " Bath";
    }
    
    function removeCartItemFromStorage(productId) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter(item => item.id !== productId);
        localStorage.setItem("cart", JSON.stringify(cart));
    }

    function clearLocalStorage() {
        localStorage.removeItem("cart");
    }
    
    // โหลดข้อมูลสินค้าจาก localStorage เมื่อหน้าโหลด
    window.addEventListener("load", function() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        
        if (cart.length > 0) {
            cart.forEach(item => {
                const cartItem = document.createElement("div");
                cartItem.classList.add("cart-item");
                cartItem.setAttribute("data-product-id", item.id);
                cartItem.innerHTML = `
                    
                    <h3>${item.name}</h3>
                    <p class="price">Price: ${item.price.toFixed(2)} Bath</p>
                    <button class="remove-from-cart">remove from cart</button>
                `;
                cartItemsContainer.appendChild(cartItem);
                
                const removeFromCartButton = cartItem.querySelector(".remove-from-cart");
                removeFromCartButton.addEventListener("click", function() {
                    cartItem.remove();
                    updateTotalPrice();
                    
                    const productId = item.id;
                    removeCartItemFromStorage(productId);
                    
                    if (document.querySelectorAll(".cart-item").length === 0) {
                        emptyCartMessage.style.display = "block";
                    }
                });
            });
            
            updateTotalPrice();
        } else {
            emptyCartMessage.style.display = "block";
        }
    });

    const clearCartButton = document.getElementById("clear-cart-button");
    clearCartButton.addEventListener("click", function() {
        cartItemsContainer.innerHTML = "";
        updateTotalPrice();
        clearLocalStorage();
        emptyCartMessage.style.display = "block";
    });