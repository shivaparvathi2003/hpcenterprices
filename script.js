document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded'); // Debug line
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    console.log('Burger element:', burger); // Debug line
    
    if (burger) {
        burger.addEventListener('click', () => {
            console.log('Burger clicked'); // Debug line
            nav.classList.toggle('active');
            burger.classList.toggle('active');
            
            navLinks.forEach((link, index) => {
                if (link.style.animation) {
                    link.style.animation = '';
                } else {
                    link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                }
            });
        });
    }

    // Rest of your existing code...
});
