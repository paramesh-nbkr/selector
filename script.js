// Get the button
const button = document.getElementById("myButton");

// Get the output area
const output = document.getElementById("output");

// Run when button is clicked
button.addEventListener("click", function () {

    // Selecting by Class Name
    const descriptions =
        document.getElementsByClassName("description");

    // Selecting by Tag Name
    const allParagraphs =
        document.getElementsByTagName("p");

    // Selecting by Name
    const buttonByName =
        document.getElementsByName("myButton");

    // Using querySelector
    const firstParagraph =
        document.querySelector(".description");

    // Using querySelectorAll
    const allDescriptions =
        document.querySelectorAll(".description");

    // Display information on screen
    output.innerHTML = `
        <h3>DOM Selector Information</h3>

        <p><b>Class Name:</b> ${descriptions.length} elements found</p>

        <p><b>Tag Name:</b> ${allParagraphs.length} paragraph(s) found</p>

        <p><b>Name:</b> ${buttonByName.length} button(s) found</p>

        <p><b>querySelector:</b> ${firstParagraph.textContent}</p>

        <p><b>querySelectorAll:</b> ${allDescriptions.length} elements found</p>
    `;
});
