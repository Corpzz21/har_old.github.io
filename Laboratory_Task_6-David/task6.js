document.getElementById("Form").addEventListener("submit", function(event) {
    let hasError = false;
    let errorMessages = [];

    let nFields = {
        "First Name": document.getElementById("firstName"),
        "Middle Initial": document.getElementById("middleInitial"),
        "Last Name": document.getElementById("lastName")
    };
    let emailField = document.getElementById("email");

    for (let fieldName in nFields) {
        let field = nFields[fieldName];
        field.classList.remove("error");

        if (!field.value.trim()) {
            field.classList.add("error");
            hasError = true;
            errorMessages.push(`${fieldName} should not be empty.\n`);
        }
    }

    emailField.classList.remove("error");

    let emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailFormat.test(emailField.value)) {
        emailField.classList.add("error");
        hasError = true;
        errorMessages.push("Invalid email format.");
    }

    if (hasError) {
        alert(errorMessages.join(" "));
        event.preventDefault();
    } else{
        alert("Success!");
    }
});

document.getElementById("Form").addEventListener("reset", function() {
    let fields = [document.getElementById("firstName"), document.getElementById("middleInitial"), document.getElementById("lastName"), document.getElementById("email")];

    fields.forEach(field => field.classList.remove("error"));
});