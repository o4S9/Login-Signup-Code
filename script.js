let login = document.getElementById("loginform");
let signup = document.getElementById("signup");
let btns = document.getElementById("s");
let btnl = document.getElementById("l");


function loginform() {
    let email = document.getElementById("email2").value;
    let password = document.getElementById("password2").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
    }
    
        alert("Signup successful!");
        return true;
    


}
function submitFrom() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (name === "") {
        alert("Full Name is required.");
        return false;
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    alert("Signup successful!");
    return true;
}


function Login() {
    login.style.display = "block";
    signup.style.display = "none";
    btns.style.display = "none";
    btnl.style.display = "block";
    btnl.style.width = "100%"
}
function SignUp() {
    login.style.display = "none";
    signup.style.display = "block";
    btnl.style.display = "none";
    btns.style.display = "block";
    btns.style.width = "100%";
}