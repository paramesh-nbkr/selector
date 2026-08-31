const button = document.getElementById("myButton");
const results = document.getElementById("results");

button.addEventListener("click", function () {

    // Selecting by Class Name
    const descriptions = document.getElementsByClassName("description");

    // Selecting by Tag Name
    const allParagraphs = document.getElementsByTagName("p");

    // Selecting by Name
    const buttonByName = document.getElementsByName("myButton");

    // Using querySelector
    const firstParagraph = document.querySelector(".description");

    // Using querySelectorAll
    const allDescriptions = document.querySelectorAll(".description");

    // Display results below the button
    results.innerHTML = `
        <h2>Selector Results</h2>

        <h3>getElementsByClassName()</h3>
        <p>Found ${descriptions.length} elements</p>

        <h3>getElementsByTagName()</h3>
        <p>Found ${allParagraphs.length} paragraph elements</p>

        <h3>getElementsByName()</h3>
        <p>Found ${buttonByName.length} button(s)</p>

        <h3>querySelector()</h3>
        <p>${firstParagraph.textContent}</p>

        <h3>querySelectorAll()</h3>
        <ul>
            ${Array.from(allDescriptions)
                .map(element => `<li>${element.textContent}</li>`)
                .join("")}
        </ul>
    `;
});
