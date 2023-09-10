document.addEventListener('DOMContentLoaded', function() {
    // Get the contact form element
    const contactForm = document.getElementById('contact-form');

    // Add event listener for form submission
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from being submitted

        // Get the form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Send the form data to the server (replace with your own code)
        sendFormData(name, email, message);
    });
});

function sendFormData(name, email, message) {
    // Replace this code with your actual implementation to send the form data to the server
    // This is just a placeholder example
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Display a confirmation message
    alert('Thank you for your message! We will get back to you soon.');
}
