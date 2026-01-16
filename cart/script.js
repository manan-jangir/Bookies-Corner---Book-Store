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

        function updateQty(index, change) {
            var cart = JSON.parse(localStorage.getItem("myShoppingCart"));
            
            if (cart[index].qty === 1 && change === -1) {
                var confirmDelete = confirm("Remove '" + cart[index].name + "' from cart?");
                if(confirmDelete) {
                    cart.splice(index, 1); 
                } else {
                    return; 
                }
            } else {
                cart[index].qty += change;
            }

            if (cart.length === 0) {
                localStorage.removeItem("myShoppingCart");
                location.reload();
            } else {
                localStorage.setItem("myShoppingCart", JSON.stringify(cart));
                loadCart();
            }
        }

        function clearCart() {
            localStorage.removeItem("myShoppingCart");
            location.reload();
        }