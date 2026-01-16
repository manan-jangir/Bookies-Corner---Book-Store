function addToCart(bookName, price, inputId) {
    // 1. Get Quantity from the specific input box
    var qtyInput = document.getElementById(inputId);
    var qty = qtyInput.value;

    // 2. Validate Quantity
    if(qty < 1) {
        alert("Quantity must be at least 1");
        return;
    }

    // 3. Create the Book Object
    var bookItem = {
        name: bookName,
        price: price,
        qty: parseInt(qty)
    };

    // 4. Get existing cart from Local Storage (or start a new empty list)
    // We use JSON.parse to turn the stored string back into an array
    var currentCart = JSON.parse(localStorage.getItem("myShoppingCart")) || [];

    // 5. Add new book to the list
    currentCart.push(bookItem);

    // 6. Save updated list back to Local Storage
    // We use JSON.stringify to turn the array into a string for storage
    localStorage.setItem("myShoppingCart", JSON.stringify(currentCart));

    // 7. Feedback to user
    alert(qty + " x " + bookName + " added to Cart!");
    
    // Optional: Reset quantity back to 1 after adding
    qtyInput.value = 1; 
}