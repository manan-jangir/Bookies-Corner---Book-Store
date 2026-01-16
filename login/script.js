function checkLogin(event) {
    
    event.preventDefault();

    var inputUser = document.getElementById("loginUser").value;
    var inputPass = document.getElementById("loginPass").value;
    
    var storedUser = localStorage.getItem("storedUsername");
    var storedPass = localStorage.getItem("storedPassword");
    
    if(inputUser == storedUser && inputPass == storedPass) {
        alert("Login Successful! Welcome " + inputUser);
        window.parent.location.href = "../home/index.html"; 
    } else {
        alert("Invalid Username or Password.");
    }
}