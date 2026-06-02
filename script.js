const form = document.getElementById("registrationForm");

const fullName = document.getElementById("fullname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const age = document.getElementById("age");
const eventType = document.getElementById("eventType");
const experience = document.getElementById("experience");
const terms = document.getElementById("terms");

const successMessage =
    document.getElementById("successMessage");

function showError(element, message)
{
    element.nextElementSibling.textContent = message;
}

function clearError(element)
{
    element.nextElementSibling.textContent = "";
}

form.addEventListener("submit", function(e)
{
    e.preventDefault();

    let valid = true;

    document
        .querySelectorAll(".error")
        .forEach(error => error.textContent = "");

    // Name Validation
    if(fullName.value.trim().length < 3)
    {
        showError(
            fullName,
            "Name must contain at least 3 characters."
        );
        valid = false;
    }

    // Email Regex
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email.value))
    {
        showError(
            email,
            "Enter a valid email address."
        );
        valid = false;
    }

    // Phone Regex
    const phoneRegex =
        /^(\+?1[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

    if(!phoneRegex.test(phone.value))
    {
        showError(
            phone,
            "Enter a valid phone number."
        );
        valid = false;
    }

    // Age Validation
    if(age.value < 16)
    {
        showError(
            age,
            "Must be at least 16 years old."
        );
        valid = false;
    }

    // Dropdown Validation
    if(eventType.value === "")
    {
        showError(
            eventType,
            "Please select an event."
        );
        valid = false;
    }

    if(experience.value === "")
    {
        showError(
            experience,
            "Please select experience level."
        );
        valid = false;
    }

    // Checkbox Validation
    if(!terms.checked)
    {
        document.getElementById("termsError")
            .textContent =
            "You must accept the Terms and Conditions.";

        valid = false;
    }

    if(valid)
    {
        successMessage.innerHTML =
            "<p class='success'>Registration submitted successfully! 🎉</p>";

        form.reset();
    }
});

// Real-time validation events

fullName.addEventListener("input", () =>
{
    if(fullName.value.length >= 3)
    {
        clearError(fullName);
    }
});

email.addEventListener("input", () =>
{
    clearError(email);
});

phone.addEventListener("input", () =>
{
    clearError(phone);
});