export function emailValidation() {
    document.addEventListener("DOMContentLoaded", () => {
        const email = document.getElementById("email");
        const emailErrorDiv = document.querySelector(".email-error");

        email.addEventListener("blur", validateEmail);
        email.addEventListener("input", validateEmail);

        function validateEmail() {
            if (email.validity.valueMissing) {
                emailErrorDiv.textContent = "You need to enter an email address.";
                emailErrorDiv.classList.add("error");
            } else if (email.validity.typeMismatch) {
                emailErrorDiv.textContent =
                    "Entered value needs to be an email address.";
                    emailErrorDiv.classList.add("error");
            } else if (email.validity.tooShort) {
                emailErrorDiv.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
                emailErrorDiv.classList.add("error");
            } else {
                emailErrorDiv.textContent = ""
                emailErrorDiv.classList.remove("error")
             
                email.classList.add("valid");
            }
        }
        
    });
}
