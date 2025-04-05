// Mobile menu functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger) {
        console.log('Burger menu found'); // Debug line
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Rest of your existing code...
});

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        navLinks.classList.remove('nav-active');
        burger.classList.remove('toggle');
    }
});

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
});

// Image gallery lightbox
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <img src="${image.src}" alt="${image.alt}">
            <span class="close">&times;</span>
        `;
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.close').addEventListener('click', () => {
            lightbox.remove();
        });
    });
});
