document.addEventListener('scroll', function () {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const triggerPoint = window.innerHeight / 1.2;

    // Handle timeline item visibility
    timelineItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < triggerPoint) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Handle paragraph and image effects
    const paragraphs = document.querySelectorAll('p');
    const images = document.querySelectorAll('.timeline-image');
    
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
