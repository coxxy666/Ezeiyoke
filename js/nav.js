// Grab elements
const navbar = document.querySelector('.navbar-div');
const closeIcon = document.querySelector('.close-icon');
const homepage = document.getElementById('home');
const sections = document.querySelectorAll('.page');

// Unified flipPage function
function flipPage(pageId) {
    console.log(`Attempting to flip to page: ${pageId}`);

    // Hide and animate all pages
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.transform = 'rotateX(90deg)';
        section.style.display = 'none'; // Ensure hidden sections don't block visibility
        console.log(`Deactivated page: ${section.id}`);
    });

    // Show and animate the selected page based on pageId
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
        activePage.style.display = 'block'; // Make the active page visible
        setTimeout(() => {
            activePage.style.transform = 'rotateX(0deg)';
            console.log(`Animation applied to page: ${pageId}`);
        }, 50); // Slight delay for animation effect
    } else {
        console.warn(`Page with ID '${pageId}' not found.`);
    }

    // Show or hide the "X" button
    if (pageId !== 'home') {
        closeIcon.style.display = 'block'; // Show "X" button when not on the homepage
    } else {
        closeIcon.style.display = 'none'; // Hide "X" button on the homepage
    }
}

// Function to navigate back to the homepage
function backToHome() {
    console.log("Navigating back to the homepage");

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
        section.style.transform = 'rotateX(90deg)';
        section.style.display = 'none';
    });

    // Show homepage
    homepage.classList.add('active');
    homepage.style.display = 'block';
    homepage.style.transform = 'rotateX(0deg)';

    // Hide "X" button
    closeIcon.style.display = 'none';

    
}
