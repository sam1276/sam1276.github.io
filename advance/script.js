// Get all the accordion headers
const accordionHeaders = document.querySelectorAll(".accordion-header");

// Add click event listeners to each header
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        // Get the content container (next sibling of the header)
        const content = header.nextElementSibling;

        // Toggle the visibility of the content
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});
