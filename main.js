document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simple alert for form submission
    alert('Thank you for your message!');
    
    // Clear the form fields
    this.reset();
});
