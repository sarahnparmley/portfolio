// 1. Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// 2. Scroll to Top Button - Show/Hide based on Scroll Position
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

// When the scroll top button is clicked, scroll to the top
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// 3. Modal for Project Details (Optional)
const projectLinks = document.querySelectorAll('.project-card');
const modal = document.getElementById('projectModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

projectLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        // Get data from the clicked project card
        const title = this.querySelector('h3').textContent;
        const description = this.querySelector('p').textContent;
        const imageSrc = this.querySelector('img').src;

        // Display the modal with project details
        modal.style.display = 'block';
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modalImage.src = imageSrc;
    });
});

// Close the modal when clicking the close button
modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
