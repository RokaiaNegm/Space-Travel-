document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const nationality = document.querySelector("select").value;
        const experience = document.querySelector('input[name="experience"]:checked');
        const motivation = document.getElementById("motivational-q").value.trim();
        const consent = document.getElementById("consent").checked;

        // Validation Checks
        if (name === "") {
            alert("Please enter your full name.");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (nationality === "") {
            alert("Please select your nationality.");
            return;
        }

        if (!experience) {
            alert("Please select your experience level.");
            return;
        }

        if (motivation === "") {
            alert("Please answer why you want to explore space.");
            return;
        }

        if (!consent) {
            alert("You must agree to data storage consent.");
            return;
        }

        // Success Message
        alert("🎉 Registration Successful! Welcome aboard, " + name + "!");
        form.reset(); // Clear the form after successful submission
    });
});
