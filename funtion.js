var nameg = document.getElementById("inputName");
var password = document.getElementById("inputpassword");
var repassword = document.getElementById("inputretry");
var checkbox = document.getElementById("check");
var button = document.getElementById("button");
var errorname = document.getElementById("errorname");
var errorpass = document.getElementById("errorpass");
var errorretry = document.getElementById("errorretry");
var veryerro = document.getElementById("veryerro");

var namereg = /^[a-zA-Z]+$/;

button.addEventListener("click", function() {
    var valid = true;
    
    // Validate name
    var name2 = nameg.value.trim();
    if (namereg.test(name2) == false) {
        errorname.textContent = "Invalid name.";
        errorname.style.display = "block";
        valid = false;
    } else {
        errorname.style.display = "none";
    }

    // Validate password
    var pass2 = password.value.length;
    if (pass2 < 6) {
        errorpass.textContent = "Invalid password. Must be at least 6 characters.";
        errorpass.style.display = "block";
        valid = false;
    } else {
        errorpass.style.display = "none";
    }

    // Validate password match
    var pass3 = repassword.value.trim();
    if (password.value !== pass3) {
        errorretry.textContent = "Passwords do not match.";
        errorretry.style.display = "block";
        valid = false;
    } else {
        errorretry.style.display = "none";
    }

    // Validate checkbox
    if (checkbox.checked == false) {
        veryerro.textContent = "Please check the box";
        veryerro.style.display = "block";
        valid = false;
    } else {
        veryerro.style.display = "none";
    }

    // Prevent form submission if validation fails
    if (valid == false) {
        event.preventDefault();
    } else {
        alert("Form submitted successfully!");
    }
});
