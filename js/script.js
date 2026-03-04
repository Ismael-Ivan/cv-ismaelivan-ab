document.addEventListener('DOMContentLoaded', () => {
    // Inicializar AOS (Animaciones)
    AOS.init({
        duration: 800,
        once: true
    });

    // Lógica Modo Oscuro
    const btnDark = document.getElementById('toggle-dark');
    const body = document.body;
    const icon = btnDark.querySelector('i');

    // Comprobar preferencia guardada
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        icon.classList.replace('fa-moon', 'fa-sun');
    }

    btnDark.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Animación de Barras de Progreso al hacer Scroll
    const progressBars = document.querySelectorAll('.progress-bar');
    
    const showProgress = () => {
        progressBars.forEach(bar => {
            const value = bar.getAttribute('data-value');
            const pos = bar.getBoundingClientRect().top;
            const screenPos = window.innerHeight / 1.2;

            if (pos < screenPos) {
                bar.style.width = `${value}%`;
                bar.innerText = `${value}%`;
            }
        });
    };

    // Botón Subir
    const btnTop = document.getElementById('btnTop');
    window.addEventListener('scroll', () => {
        showProgress();
        if (window.scrollY > 300) {
            btnTop.style.display = "block";
        } else {
            btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
