// Function to show the selected section and hide everything else
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });

    // Hide the header and footer
    document.querySelector('header').style.display = 'none';
    document.querySelector('footer').style.display = 'none';
}

// Add event listeners to navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        showSection(targetId);
    });
});

// Initial setup: Show the home section only
document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
});
