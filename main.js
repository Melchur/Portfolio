document.addEventListener('DOMContentLoaded', () => {
    const expandLink = document.getElementById('expand-link');
    const videoContainer = document.getElementById('video-container');

    expandLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default link behavior
        videoContainer.classList.toggle('expanded'); // Toggle the expanded class
    });
});
