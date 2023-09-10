    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function() {
            const product = this.closest(".product");
            const productId = product.getAttribute("data-product-id");
            const productName = product.querySelector("h2").textContent;
            const productPrice = parseFloat(product.querySelector(".price").textContent.replace("ราคา: ", "").replace(" บาท", ""));
            
            const cartItem = {
                id: productId,
                name: productName,
                price: productPrice
            };
            
            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            cart.push(cartItem);
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    });