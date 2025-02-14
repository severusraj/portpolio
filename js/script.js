// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Hamburger Menu
const hamburger = document.getElementById('hamburger');
hamburger.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('hidden');
});
