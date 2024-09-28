const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');
const overlay = document.querySelector('.overlay');

// Toggle navbar and overlay active classes
menuIcon.addEventListener('click', function() {
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close navbar and overlay when overlay is clicked
overlay.addEventListener('click', function() {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
});

window.addEventListener('scroll', function() {
    const pImage = document.querySelector('.portfolio-image');
    const greet = document.querySelector('.greeting-text');
const about=document.querySelector('.about-me');
    
    if (window.scrollY > 50) {
        pImage.classList.add('expand');
        
        greet.classList.add('fade-out');
        about.classList.add('visible'); 
    } else {
        about.classList.remove('visible'); 
        pImage.classList.remove('expand');
        greet.classList.remove('fade-out');
    }
});
window.addEventListener('load',function(){
const loader= document.getElementById('pre-loader');
const loader_line=document.getElementById('loader-circle');
const content=document.getElementById('content');

setTimeout(() => {
   
    loader.style.display= 'none';
       
    // Animate the white background upward
    content.style.display = 'block'; // Show the content
    document.body.classList.add('loaded'); // Allow scrolling
}, 1000); // Adjust timing to match loader duration
});

//for the progress bar




document.addEventListener("scroll", () => {
    const skillsSection = document.querySelector(".skills-section");
    const progressBars = document.querySelectorAll(".progress-bar");
    const sectionPosition = skillsSection.getBoundingClientRect();
    
    // Check if the skills section is in the viewport
    if (sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0) {
        progressBars.forEach(bar => {
            const skillLevel = bar.getAttribute("data-skill"); // Get the skill level
            bar.style.width = skillLevel; // Animate the progress bar width

            // Set a timeout to check if the width matches skill level after animation duration
          
        });
    } else {
        // Reset the progress bars when the section is out of view
        progressBars.forEach(bar => {
            bar.style.width = '0%'; // Reset width
           
        });
    }
});
