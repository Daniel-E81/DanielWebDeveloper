const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(clickedLink => {
    clickedLink.addEventListener('click', (event) => {
        // Find the currently active link and remove the 'active' class
        const currentActive = document.querySelector('.nav-link.active');
        if (currentActive) {
            currentActive.classList.remove('active');
        }
        // Add the 'active' class to the link that was clicked
        clickedLink.classList.add('active');
    });
});