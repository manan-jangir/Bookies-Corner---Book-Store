/* --- PART 1: THE INVENTORY (50 REAL BOOKS) --- */
const bookInventory = [
    // --- CLASSICS ---
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", price: 15.00, category: "Classic" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", price: 18.50, category: "Classic" },
    { title: "1984", author: "George Orwell", price: 14.00, category: "Dystopian" },
    { title: "Pride and Prejudice", author: "Jane Austen", price: 12.00, category: "Romance" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", price: 16.00, category: "Classic" },
    { title: "Little Women", author: "Louisa May Alcott", price: 13.50, category: "Classic" },
    { title: "Moby Dick", author: "Herman Melville", price: 17.00, category: "Adventure" },
    { title: "War and Peace", author: "Leo Tolstoy", price: 25.00, category: "Historical" },
    { title: "The Odyssey", author: "Homer", price: 15.50, category: "Classic" },
    { title: "Crime and Punishment", author: "Fyodor Dostoevsky", price: 19.00, category: "Classic" },

    // --- FANTASY & SCI-FI ---
    { title: "The Hobbit", author: "J.R.R. Tolkien", price: 20.00, category: "Fantasy" },
    { title: "Harry Potter & Sorcerer's Stone", author: "J.K. Rowling", price: 22.00, category: "Fantasy" },
    { title: "Dune", author: "Frank Herbert", price: 21.50, category: "Sci-Fi" },
    { title: "Ender's Game", author: "Orson Scott Card", price: 18.00, category: "Sci-Fi" },
    { title: "The Alchemist", author: "Paulo Coelho", price: 16.50, category: "Fantasy" },
    { title: "A Game of Thrones", author: "George R.R. Martin", price: 24.00, category: "Fantasy" },
    { title: "The Martian", author: "Andy Weir", price: 19.50, category: "Sci-Fi" },
    { title: "Brave New World", author: "Aldous Huxley", price: 17.00, category: "Dystopian" },
    { title: "Fahrenheit 451", author: "Ray Bradbury", price: 15.00, category: "Dystopian" },
    { title: "The Hitchhiker's Guide", author: "Douglas Adams", price: 14.50, category: "Sci-Fi" },

    // --- TECHNOLOGY & SCIENCE ---
    { title: "Clean Code", author: "Robert C. Martin", price: 35.50, category: "Tech" },
    { title: "The Pragmatic Programmer", author: "Andrew Hunt", price: 38.00, category: "Tech" },
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen", price: 60.00, category: "Tech" },
    { title: "JavaScript: The Good Parts", author: "Douglas Crockford", price: 28.00, category: "Tech" },
    { title: "Design Patterns", author: "Erich Gamma", price: 45.00, category: "Tech" },
    { title: "Sapiens", author: "Yuval Noah Harari", price: 22.00, category: "History" },
    { title: "A Brief History of Time", author: "Stephen Hawking", price: 18.50, category: "Science" },
    { title: "The Selfish Gene", author: "Richard Dawkins", price: 20.00, category: "Science" },
    { title: "Cosmos", author: "Carl Sagan", price: 21.00, category: "Science" },
    { title: "Code: Hidden Language", author: "Charles Petzold", price: 25.00, category: "Tech" },

    // --- MYSTERY & THRILLER ---
    { title: "The Da Vinci Code", author: "Dan Brown", price: 16.00, category: "Thriller" },
    { title: "Gone Girl", author: "Gillian Flynn", price: 15.50, category: "Thriller" },
    { title: "Sherlock Holmes", author: "Arthur Conan Doyle", price: 14.00, category: "Mystery" },
    { title: "And Then There Were None", author: "Agatha Christie", price: 13.00, category: "Mystery" },
    { title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", price: 17.50, category: "Thriller" },
    { title: "The Silent Patient", author: "Alex Michaelides", price: 18.00, category: "Thriller" },
    { title: "Angels & Demons", author: "Dan Brown", price: 16.50, category: "Thriller" },
    { title: "The Godfather", author: "Mario Puzo", price: 19.00, category: "Crime" },
    { title: "In Cold Blood", author: "Truman Capote", price: 15.00, category: "Crime" },
    { title: "Murder on the Orient Express", author: "Agatha Christie", price: 14.50, category: "Mystery" },

    // --- SELF-HELP & BIOGRAPHY ---
    { title: "Atomic Habits", author: "James Clear", price: 21.00, category: "Self-Help" },
    { title: "The Power of Habit", author: "Charles Duhigg", price: 19.00, category: "Self-Help" },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 14.00, category: "Finance" },
    { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", price: 19.00, category: "Psychology" },
    { title: "Becoming", author: "Michelle Obama", price: 23.00, category: "Biography" },
    { title: "Steve Jobs", author: "Walter Isaacson", price: 24.00, category: "Biography" },
    { title: "Educated", author: "Tara Westover", price: 18.00, category: "Biography" },
    { title: "The Diary of a Young Girl", author: "Anne Frank", price: 12.50, category: "Biography" },
    { title: "Man's Search for Meaning", author: "Viktor Frankl", price: 13.00, category: "Psychology" },
    { title: "How to Win Friends", author: "Dale Carnegie", price: 15.00, category: "Self-Help" }
];


/* --- PART 2: RENDER FUNCTION WITH IMAGES --- */
function renderBooks(targetId, mode) {
    const container = document.getElementById(targetId);
    let booksToShow = [];

    if (mode === 'random') {
        let shuffled = [...bookInventory].sort(() => 0.5 - Math.random());
        booksToShow = shuffled.slice(0, 5);
    } else {
        booksToShow = bookInventory;
    }

    container.innerHTML = ""; 

    booksToShow.forEach((book, index) => {
        let qtyId = "qty_" + mode + "_" + index; 
        
        // --- IMAGE LOGIC STARTS HERE ---
        // 1. Prepare the title for the URL (replace spaces with plus signs)
        let formattedTitle = book.title.replace(/ /g, "+");
        
        // 2. Default Image (if it's a generated "Book Title X")
        let imgUrl = "https://placehold.co/140x210?text=No+Cover";
        
        // 3. If it is a Real Book (doesn't start with "Book Title"), try fetching real cover
        if (!book.title.startsWith("Book Title")) {
            // Open Library API: Fetches cover by Title
            imgUrl = `https://covers.openlibrary.org/b/title/${formattedTitle}-M.jpg?default=false`;
        }
        // --------------------------------

        let cardHTML = `
            <div class="book-card">
                <img src="${imgUrl}" 
                     class="book-img" 
                     alt="${book.title}"
                     onerror="this.onerror=null; this.src='https://placehold.co/140x210?text=No+Image';">
                
                <div style="width: 100%;">
                    <h3>${book.title}</h3>
                    <p>${book.author}</p>
                    <div class="price">$${Number(book.price).toFixed(2)}</div>
                </div>
                
                <div class="action-row">
                    <input type="number" id="${qtyId}" class="qty-input" value="1" min="1">
                    <button class="btn-cart" onclick="addToCart('${book.title.replace(/'/g, "\\'")}', ${book.price}, '${qtyId}')">Add</button>
                </div>
            </div>
        `;
        container.innerHTML += cardHTML;
    });
}

function createToastElement() {
    if (!document.getElementById("toast-box")) {
        var toastDiv = document.createElement("div");
        toastDiv.id = "toast-box";
        document.body.appendChild(toastDiv);
    }
}

// 2. Helper to Show the Message
function showToast(message) {
    createToastElement(); // Ensure the box exists
    
    var x = document.getElementById("toast-box");
    x.innerText = message;
    x.className = "show"; // Add the CSS class to make it visible

    // After 3 seconds (3000ms), remove the class to hide it
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// 3. The Updated Add to Cart Function
function addToCart(bookName, price, inputId) {
    var qty = document.getElementById(inputId).value;
    
    if(qty < 1) {
        showToast("⚠️ Quantity must be at least 1");
        return;
    }

    var bookItem = {
        name: bookName,
        price: Number(price),
        qty: parseInt(qty)
    };

    // Get existing cart or create new
    var currentCart = JSON.parse(localStorage.getItem("myShoppingCart")) || [];
    
    currentCart.push(bookItem);
    
    localStorage.setItem("myShoppingCart", JSON.stringify(currentCart));
    
    // --- CHANGE: Use showToast instead of alert ---
    showToast("✅ Added " + qty + " x " + bookName + " to Cart!");
}