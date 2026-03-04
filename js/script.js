document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializar AOS (Animaciones)
    AOS.init({ duration: 1000, once: true });

    // 2. Dark Mode persistente
    const btnDark = document.getElementById('toggle-dark');
    const body = document.body;

    const toggleTheme = () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        btnDark.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    btnDark.addEventListener('click', toggleTheme);
    if (localStorage.getItem('theme') === 'dark') toggleTheme();

    // 3. Navbar scroll effect
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('#mainNav');
        const btnTop = document.getElementById('btnTop');
        
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 0';
            btnTop.style.display = 'block';
        } else {
            nav.style.padding = '1.5rem 0';
            btnTop.style.display = 'none';
        }
    });

    // 4. Smooth scroll y cerrar menú en móvil
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            const menu = document.getElementById('navMenu');
            if (window.innerWidth < 992) {
                new bootstrap.Collapse(menu).hide();
            }
        });
    });

    // 5. Botón Subir
    document.getElementById('btnTop').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
