const initMobileMenu = () => {
    const burger = document.querySelector('.burger');
    const navMenu = document.querySelector('.nav-links');
    
    if (burger && navMenu) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            navMenu.classList.toggle('open');
        });

        // Close menu when clicking a link
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                burger.classList.remove('open');
                navMenu.classList.remove('open');
            });
        });
    }
};

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileMenu);
} else {
    initMobileMenu();
}

// Keep the existing lightbox code
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
