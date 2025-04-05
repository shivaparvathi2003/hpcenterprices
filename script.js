// Mobile menu functionality
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

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