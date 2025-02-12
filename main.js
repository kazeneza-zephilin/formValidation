//getting dom elements
import { zipCountryValidation } from "./zipCoutntryValidation.js";
import { allPsswdValidation } from "./allPsswdValidation.js";
import { emailValidation } from "./emailValidation.js";
emailValidation();
zipCountryValidation();
allPsswdValidation();

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
});
