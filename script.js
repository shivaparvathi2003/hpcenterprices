window.addEventListener('DOMContentLoaded', () => {
    try {
        const burger = document.querySelector('.burger');
        const nav = document.querySelector('.nav-links');
        const navLinks = document.querySelectorAll('.nav-links li');

        if (!burger || !nav) {
            console.error('Navigation elements not found');
            return;
        }

        burger.addEventListener('click', (e) => {
            e.stopPropagation();
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
                navLinks.forEach(link => {
                    link.style.animation = '';
                });
            }
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
    } catch (error) {
        console.error('Error initializing navigation:', error);
    }
});
