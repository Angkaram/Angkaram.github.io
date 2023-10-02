function showAlert() {
    alert("Font size increased!");
    // Get the textarea element by its id
    var textarea = document.getElementById("textBox");

    // Set the new font size (24 pt)
    textarea.style.fontSize = "24pt";
}

function radioButtonAlert() {
    var textarea = document.getElementById("textBox");
    var fancyRadio = document.getElementById("fancy");
    var boringRadio = document.getElementById("boring");

    if (fancyRadio.checked) {
        textarea.style.fontWeight = "bold";
        textarea.style.color = "blue"; // Change text color to blue
        textarea.style.textDecoration = "underline"; // Add underline
        alert("Bolding, underlining, and blue-ing");
    } else if (boringRadio.checked) {
        textarea.style.fontWeight = "normal";
        alert("No bold!");
    }
}

function mooButtonChanges() {
    alert("Uppercasing and Moo-ing!");
    // Get the textarea element by its id
    var textarea = document.getElementById("textBox");

    // Uppercase the text in textarea
    textarea.value = textarea.value.toUpperCase();

    // Split the text by periods and join with -Moo
    var textValue = textarea.value;
    var parts = textValue.split(".");
    textValue = parts.join("-Moo");

    textarea.value = textValue;    
}

// Add an event listener to the "Bigger!" button
document.getElementById("biggerButton").onclick = showAlert;
document.getElementById("mooButton").onclick = mooButtonChanges;