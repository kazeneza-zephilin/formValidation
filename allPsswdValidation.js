export function allPsswdValidation() {
    document.addEventListener("DOMContentLoaded", () => {
        const password = document.getElementById("password");
        const confirmPsswd = document.getElementById("confirm-psswd");
        const psswdErrorDiv = document.querySelector(".psswd-error");
        const confirmPsswdErrorDiv = document.querySelector(
            ".confirm-psswd-error"
        );
        initialPsswdValidation();
        password.addEventListener("focus", initialPsswdValidation);
        password.addEventListener("input", initialPsswdValidation);
        password.addEventListener("blur", initialPsswdValidation);
        confirmPsswd.addEventListener("focus", finalPsswdValidation);
        confirmPsswd.addEventListener("input", finalPsswdValidation);
        confirmPsswd.addEventListener("blur", finalPsswdValidation);

        function initialPsswdValidation() {
            if (!password.value && document.activeElement === password) {
                psswdErrorDiv.textContent = "You need to enter a password.";
                psswdErrorDiv.classList.add("error");
            } else if (password.validity.tooShort) {
                psswdErrorDiv.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
                psswdErrorDiv.classList.add("error");
            } else {
                psswdErrorDiv.textContent = "";
                if (password.validity.valid && password.value.length > 5) {
                    password.setAttribute("class", "valid");
                }
            }
        }
        function finalPsswdValidation() {
            if (!confirmPsswd) {
                console.log("confirmPsswd is empty");
                confirmPsswdErrorDiv.textContent =
                    "You need to confirm your password.";
            } else if (confirmPsswd.value !== password.value) {
                confirmPsswdErrorDiv.textContent = "Passwords do not match.";
                confirmPsswdErrorDiv.classList.add("error");
            } else {
                confirmPsswdErrorDiv.textContent = 
                confirmPsswd.setAttribute("class", "valid");
            }
        }
    });
}
