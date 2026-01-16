function loadCart() {
            var storedCart = JSON.parse(localStorage.getItem("myShoppingCart")) || [];
            var tableBody = document.getElementById("cartTableBody");
            var grandTotal = 0;

            if (storedCart.length === 0) {
                document.getElementById("cartContainer").innerHTML = "<p class='empty-msg'>Your cart is empty. Go add some books!</p>";
                return;
            }

            tableBody.innerHTML = "";
            
            for (var i = 0; i < storedCart.length; i++) {
                var item = storedCart[i];
                var subtotal = item.price * item.qty;
                grandTotal += subtotal;

                // We add buttons that call updateQty(index, change)
                var row = `<tr>
                    <td>${item.name}</td>
                    <td>$${item.price.toFixed(2)}</td>
                    <td>
                        <button class="btn-qty" onclick="updateQty(${i}, -1)">-</button>
                        <span class="qty-display">${item.qty}</span>
                        <button class="btn-qty" onclick="updateQty(${i}, 1)">+</button>
                    </td>
                    <td>$${subtotal.toFixed(2)}</td>
                </tr>`;
                
                tableBody.innerHTML += row;
            }

            document.getElementById("grandTotal").innerText = "$" + grandTotal.toFixed(2);
        }

        // --- NEW FUNCTION TO HANDLE QUANTITY CHANGE ---
        function updateQty(index, change) {
            // 1. Get Cart
            var cart = JSON.parse(localStorage.getItem("myShoppingCart"));
            
            // 2. Check if removing the last item
            if (cart[index].qty === 1 && change === -1) {
                var confirmDelete = confirm("Remove '" + cart[index].name + "' from cart?");
                if(confirmDelete) {
                    cart.splice(index, 1); // Remove item
                } else {
                    return; // Do nothing
                }
            } else {
                // 3. Just update quantity
                cart[index].qty += change;
            }

            // 4. Check if cart is empty after deletion
            if (cart.length === 0) {
                localStorage.removeItem("myShoppingCart");
                location.reload();
            } else {
                // 5. Save and Refresh Table
                localStorage.setItem("myShoppingCart", JSON.stringify(cart));
                loadCart();
            }
        }

        function clearCart() {
            localStorage.removeItem("myShoppingCart");
            location.reload();
        }