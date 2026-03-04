document.addEventListener('DOMContentLoaded', () => {
    AOS.init({ duration: 1000, once: true });

    // Lógica del Menú Responsive
    const navLinks = document.querySelectorAll('.nav-link');
    const menu = document.querySelector('.navbar-collapse');
    
    navLinks.forEach(n => n.addEventListener('click', () => {
        if(window.innerWidth < 992) {
            new bootstrap.Collapse(menu).toggle();
        }
    }));

    // Animación visual de música
    const bars = document.querySelectorAll('.wave-bar');
    bars.forEach((bar, i) => {
        bar.style.animationDelay = `${i * 0.2}s`;
    });

    // Dark Mode Toggle
    const btn = document.getElementById('toggle-dark');
    btn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const icon = btn.querySelector('i');
        icon.classList.toggle('fa-moon');
        icon.classList.toggle('fa-sun');
    });
});
