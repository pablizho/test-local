document.addEventListener('DOMContentLoaded', () => {
    console.log("Script loaded and DOM fully parsed");

    // Smooth scroll for navigation links in header and the "Back to Top" link in footer
    const smoothScrollLinks = document.querySelectorAll('header nav ul li a, footer a[href="#about"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior

            const targetId = this.getAttribute('href'); // Get the href attribute (e.g., "#about")
            
            // Ensure targetId is not just "#" or empty if that could occur
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
                const targetSection = document.querySelector(targetId); // Find the target section element

                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth', // Enable smooth scrolling
                        block: 'start' 
                    });
                }
            }
        });
    });
});
