export function zipCountryValidation() {
    document.addEventListener("DOMContentLoaded", () => {
        const countrySelect = document.getElementById("country");
        const countryErrorDiv = document.querySelector(".country-error");
        const zipCode = document.querySelector("#zip-code");
        const zipCodeErrorDiv = document.querySelector(".zip-code-error");

        const countryList = [
            {
                code: "AF",
                name: "Afghanistan",
                regex: [
                    "^\\d{4,5}$",
                    "Afghan postal codes must have 4 or 5 digits: e.g. 1001",
                ],
            },
            {
                code: "AL",
                name: "Albania",
                regex: [
                    "^\\d{4}$",
                    "Albanian postal codes must have 4 digits: e.g. 1001",
                ],
            },
            {
                code: "DZ",
                name: "Algeria",
                regex: [
                    "^\\d{5}$",
                    "Algerian postal codes must have 5 digits: e.g. 16027",
                ],
            },
            {
                code: "AD",
                name: "Andorra",
                regex: [
                    "^AD\\d{3}$",
                    "Andorran postal codes start with 'AD' followed by 3 digits: e.g. AD500",
                ],
            },
            {
                code: "AO",
                name: "Angola",
                regex: [
                    "^\\d{6}$",
                    "Angolan postal codes must have 6 digits: e.g. 123456",
                ],
            },
            {
                code: "AR",
                name: "Argentina",
                regex: [
                    "^\\d{4}|[A-Z]\\d{4}[A-Z]{3}$",
                    "Argentine postal codes have 4 digits or a format like A1234BCD",
                ],
            },
            {
                code: "AM",
                name: "Armenia",
                regex: [
                    "^\\d{4}$",
                    "Armenian postal codes must have 4 digits: e.g. 0010",
                ],
            },
            {
                code: "AU",
                name: "Australia",
                regex: [
                    "^\\d{4}$",
                    "Australian postal codes must have 4 digits: e.g. 2000",
                ],
            },
            {
                code: "AT",
                name: "Austria",
                regex: [
                    "^\\d{4}$",
                    "Austrian postal codes must have 4 digits: e.g. 1010",
                ],
            },
            {
                code: "AZ",
                name: "Azerbaijan",
                regex: [
                    "^AZ\\d{4}$",
                    "Azerbaijani postal codes start with 'AZ' followed by 4 digits: e.g. AZ1000",
                ],
            },
            {
                code: "BD",
                name: "Bangladesh",
                regex: [
                    "^\\d{4}$",
                    "Bangladeshi postal codes must have 4 digits: e.g. 1212",
                ],
            },
            {
                code: "BE",
                name: "Belgium",
                regex: [
                    "^\\d{4}$",
                    "Belgian postal codes must have 4 digits: e.g. 1000",
                ],
            },
            {
                code: "BJ",
                name: "Benin",
                regex: [
                    "^\\d{4}$",
                    "Beninese postal codes must have 4 digits: e.g. 1120",
                ],
            },
            {
                code: "BR",
                name: "Brazil",
                regex: [
                    "^\\d{5}-\\d{3}$",
                    "Brazilian postal codes follow the format 12345-678",
                ],
            },
            {
                code: "CA",
                name: "Canada",
                regex: [
                    "^[A-Z]\\d[A-Z] ?\\d[A-Z]\\d$",
                    "Canadian postal codes follow the format A1A 1A1",
                ],
            },
            {
                code: "CN",
                name: "China",
                regex: [
                    "^\\d{6}$",
                    "Chinese postal codes must have 6 digits: e.g. 100000",
                ],
            },
            {
                code: "FR",
                name: "France",
                regex: [
                    "^\\d{5}$",
                    "French postal codes must have 5 digits: e.g. 75001",
                ],
            },
            {
                code: "DE",
                name: "Germany",
                regex: [
                    "^\\d{5}$",
                    "German postal codes must have 5 digits: e.g. 10115",
                ],
            },
            {
                code: "IN",
                name: "India",
                regex: [
                    "^\\d{6}$",
                    "Indian postal codes (PIN codes) must have 6 digits: e.g. 110001",
                ],
            },
            {
                code: "IT",
                name: "Italy",
                regex: [
                    "^\\d{5}$",
                    "Italian postal codes must have 5 digits: e.g. 00100",
                ],
            },
            {
                code: "JP",
                name: "Japan",
                regex: [
                    "^\\d{3}-\\d{4}$",
                    "Japanese postal codes follow the format 123-4567",
                ],
            },
            {
                code: "KE",
                name: "Kenya",
                regex: [
                    "^\\d{5}$",
                    "Kenyan postal codes must have 5 digits: e.g. 00100",
                ],
            },
            {
                code: "NG",
                name: "Nigeria",
                regex: [
                    "^\\d{6}$",
                    "Nigerian postal codes must have 6 digits: e.g. 100001",
                ],
            },
            {
                code: "RU",
                name: "Russia",
                regex: [
                    "^\\d{6}$",
                    "Russian postal codes must have 6 digits: e.g. 101000",
                ],
            },
            {
                code: "RW",
                name: "Rwanda",
                regex: [
                    "^\\d{5}$",
                    "Rwandan postal codes must have 5 digits: e.g. 00250",
                ],
            },
            {
                code: "ZA",
                name: "South Africa",
                regex: [
                    "^\\d{4}$",
                    "South African postal codes must have 4 digits: e.g. 0002",
                ],
            },
            {
                code: "ES",
                name: "Spain",
                regex: [
                    "^\\d{5}$",
                    "Spanish postal codes must have 5 digits: e.g. 28001",
                ],
            },
            {
                code: "SE",
                name: "Sweden",
                regex: [
                    "^\\d{3} ?\\d{2}$",
                    "Swedish postal codes follow the format 123 45",
                ],
            },
            {
                code: "CH",
                name: "Switzerland",
                regex: [
                    "^(CH-)?\\d{4}$",
                    "Swiss postal codes must have exactly 4 digits: e.g. CH-1950 or 1950",
                ],
            },
            {
                code: "TH",
                name: "Thailand",
                regex: [
                    "^\\d{5}$",
                    "Thai postal codes must have 5 digits: e.g. 10110",
                ],
            },
            {
                code: "TR",
                name: "Turkey",
                regex: [
                    "^\\d{5}$",
                    "Turkish postal codes must have 5 digits: e.g. 34000",
                ],
            },
            {
                code: "UA",
                name: "Ukraine",
                regex: [
                    "^\\d{5}$",
                    "Ukrainian postal codes must have 5 digits: e.g. 01001",
                ],
            },
            {
                code: "AE",
                name: "United Arab Emirates",
                regex: [
                    "^\\d{5}$",
                    "UAE postal codes must have 5 digits: e.g. 12345",
                ],
            },
            {
                code: "GB",
                name: "United Kingdom",
                regex: [
                    "^[A-Z]{1,2}\\d[A-Z\\d]? ?\\d[A-Z]{2}$",
                    "UK postal codes follow formats like EC1A 1BB or W1A 0AX",
                ],
            },
            {
                code: "US",
                name: "United States",
                regex: [
                    "^\\d{5}(-\\d{4})?$",
                    "US ZIP codes have 5 digits, optionally followed by a 4-digit extension",
                ],
            },
            {
                code: "VN",
                name: "Vietnam",
                regex: [
                    "^\\d{6}$",
                    "Vietnamese postal codes must have 6 digits: e.g. 700000",
                ],
            },
            {
                code: "ZM",
                name: "Zambia",
                regex: [
                    "^\\d{5}$",
                    "Zambian postal codes must have 5 digits: e.g. 10101",
                ],
            },
            {
                code: "ZW",
                name: "Zimbabwe",
                regex: [
                    "^\\d{4}$",
                    "Zimbabwean postal codes must have 4 digits: e.g. 2634",
                ],
            },
        ];

        countrySelect.addEventListener("submit", validateCountry);
        zipCode.addEventListener("input", validateZipCode);
        zipCode.addEventListener("blur", validateZipCode);
        zipCode.addEventListener("focus", validateZipCode);

        function populateOption() {
            countryList.forEach((country) => {
                const option = document.createElement("option");
                option.value = country.code;
                option.textContent = country.name;
                countrySelect.appendChild(option);
            });
        }
        function validateCountry() {
            if (countrySelect.value === "default") {
                countryErrorDiv.textContent = "You need to select a country..";
                countryErrorDiv.classList.add("error")
            } else {
                countryErrorDiv.textContent = "";
                countryErrorDiv.classList.remove("error");
                countrySelect.setAttribute("class", "valid")
            }
        }
        function validateZipCode() {
            const countryCode = countrySelect.value;
            countryList.forEach((country) => {
                if (
                    countryCode === "default" &&
                    document.activeElement === zipCode
                ) {
                    zipCodeErrorDiv.textContent = "You need to select country.";
                    zipCodeErrorDiv.classList.add("error")
                    countrySelect.classList.add("active")
                }
                if (country.code === countryCode) {
                    const [regex, message] = country.regex;
                    const zipCodeRegex = new RegExp(regex);
                    if (!zipCodeRegex.test(zipCode.value)) {
                        zipCodeErrorDiv.textContent = message;
                        zipCodeErrorDiv.classList.add("error")
                    } else {
                        zipCodeErrorDiv.textContent = "";
                        zipCode.setAttribute("class", "valid");
                    }
                }
            });
        }
        validateZipCode();
        populateOption();
    });
}
