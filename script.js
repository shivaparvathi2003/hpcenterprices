document.addEventListener('DOMContentLoaded', () => {
    console.log('Script loaded');
    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    console.log('Burger:', burger);

    burger.addEventListener('click', () => {
        console.log('Burger clicked');
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

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar') && !e.target.closest('.burger')) {
            nav.classList.remove('active');
            burger.classList.remove('active');
        }
    });
});
