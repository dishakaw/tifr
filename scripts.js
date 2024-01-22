// Adding JavaScript code here, such as interactions or dynamic content.
// Function to toggle the visibility of the navigation links
function toggleNav() {
    var navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Function to clear form fields
function clearForm() {
    var form = document.getElementById('appointment-form');
    form.reset();
}

// Adding an event listener to clear the form on page load
document.addEventListener('DOMContentLoaded', function () {
    // Call the clearForm function when the page loads
    clearForm();
});

// Adding an event listener to clear the form when the home link is clicked
var homeLink = document.querySelector('a[href="#home"]');
homeLink.addEventListener('click', function (event) {
    // Prevent the default behavior of the link
    event.preventDefault();
    // Call the clearForm function when the home link is clicked
    clearForm();
    // Scroll to the home section
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
