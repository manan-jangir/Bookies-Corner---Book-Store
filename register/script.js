function validateForm() {
    var fname = document.forms["regForm"]["fname"].value;
    var lname = document.forms["regForm"]["lname"].value;
    var email = document.forms["regForm"]["email"].value;
    var mobile = document.forms["regForm"]["mobile"].value;
    var address = document.forms["regForm"]["address"].value;
    var password = document.forms["regForm"]["password"].value;
    var confirmpass = document.forms["regForm"]["confirm_password"].value;
    var username = document.forms["regForm"]["username"].value;

    var namePattern = /^[A-Za-z]+$/;
    if (fname == "") {
        alert("First Name cannot be empty.");
        return false;
    }
    
    if (!fname.match(namePattern)) {
        alert("First Name must contain alphabets only.");
        return false;
    }

    if (lname == "") {
        alert("Last Name cannot be empty.");
        return false;
    }

    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid Email ID (e.g., name@domain.com).");
        return false;
    }

    var mobilePattern = /^\d{10}$/;
    if (!mobile.match(mobilePattern)) {
        alert("Mobile Number must contain exactly 10 digits.");
        return false;
    }

    if (address == "") {
        alert("Address cannot be empty.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (password != confirmpass) {
        alert("Password do not match");
        return false;
    }
    
    if (username == "") {
        alert("Username cannot be empty.");
        return false;
    }

    localStorage.setItem("storedUsername", username);
    localStorage.setItem("storedPassword", password);

    alert("Registration Successful! Redirecting to Login...");

    window.location.href = "../login/index.html";
    return false;
}