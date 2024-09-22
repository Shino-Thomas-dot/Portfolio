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
}, 2000); // Adjust timing to match loader duration
});

