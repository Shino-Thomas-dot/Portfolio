document.addEventListener('scroll', function () {
    const projectItems = document.querySelectorAll('.project-item');
    const triggerPoint = window.innerHeight / 1.2;

    // Handle project item visibility
    projectItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < triggerPoint) {
            item.classList.add('active'); // Add active class when in view
        } else {
            item.classList.remove('active'); // Remove active class when out of view
        }
    });

    // Handle paragraph and image effects
    const paragraphs = document.querySelectorAll('.project-content p');
    const images = document.querySelectorAll('.project-image');

    paragraphs.forEach(p => {
        if (window.scrollY > 50) {
            p.classList.add('scrolled');
        } else {
            p.classList.remove('scrolled');
        }
    });

    images.forEach(img => {
        if (window.scrollY > 50) {
            img.classList.add('greyscale');
        } else {
            img.classList.remove('greyscale');
        }
    });
});
