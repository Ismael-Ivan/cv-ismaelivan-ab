document.addEventListener('DOMContentLoaded', () => {
    // Inicializar animaciones AOS
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true
    });

    // Toggle de Modo Oscuro con Persistencia
    const btnDark = document.getElementById('toggle-dark');
    const body = document.body;

    const enableDarkMode = () => {
        body.classList.add('dark-mode');
        btnDark.innerHTML = '<i class="fa-solid fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    };

    const disableDarkMode = () => {
        body.classList.remove('dark-mode');
        btnDark.innerHTML = '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    };

    btnDark.addEventListener('click', () => {
        body.classList.contains('dark-mode') ? disableDarkMode() : enableDarkMode();
    });

    // Cargar preferencia
    if (localStorage.getItem('theme') === 'dark') enableDarkMode();

    // Animación suave para barras de progreso
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const val = bar.getAttribute('data-value');
                bar.style.width = val + '%';
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.progress-bar').forEach(bar => observer.observe(bar));
});
