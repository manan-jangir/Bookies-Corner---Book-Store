function addToCart(bookName, price, inputId) {
    var qtyInput = document.getElementById(inputId);
    var qty = qtyInput.value;

    if(qty < 1) {
        alert("Quantity must be at least 1");
        return;
    }

    var bookItem = {
        name: bookName,
        price: price,
        qty: parseInt(qty)
    };

    var currentCart = JSON.parse(localStorage.getItem("myShoppingCart")) || [];

    currentCart.push(bookItem);

    localStorage.setItem("myShoppingCart", JSON.stringify(currentCart));

    alert(qty + " x " + bookName + " added to Cart!");
    
    qtyInput.value = 1; 
}