// assets/js/gallery.js
document.querySelectorAll('.gallery-item img').forEach(image => {
    image.addEventListener('click', e => {
        const lightbox = document.createElement('div');
        lightbox.className = 'gallery-lightbox';
        const img = document.createElement('img');
        img.src = e.target.src;
        lightbox.appendChild(img);
        document.body.appendChild(lightbox);
        
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});