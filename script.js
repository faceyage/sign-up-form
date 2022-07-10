const password = document.getElementById("password");
const password_confirmation = document.getElementById("password_confirmation");
const text = document.getElementById("password_validation_text");

function validate_password(){
    console.log(`Passsword: ${password.value} Confirmation Password: ${password_confirmation.value}`);
    if (password.value === "" && password_confirmation.value === "") {
        text.innerHTML = "*";
    }
    else if (password.value !== password_confirmation.value) {
        text.classList.add("error");
        text.innerHTML = "* Passwords do not match!";
    }
    else if (password.value === password_confirmation.value) {
        text.classList.remove("error");
        text.innerHTML = "";
    }
}

password.addEventListener("change", validate_password);
password_confirmation.addEventListener("change", validate_password);