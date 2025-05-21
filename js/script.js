    AOS.init({
        duration: 1000,
        once: true
    });

    const toggle = document.getElementById('toggle-dark');
    const icon = toggle.querySelector('i');

    const darkModeEnabled = localStorage.getItem('darkMode') === 'true';

    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }

    toggle.addEventListener('click', () => {
        const isDark = document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', isDark);

        if (isDark) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    });


    function animateProgressBar(bar) {
        const value = parseInt(bar.getAttribute('data-value'));
        let current = 0;

        bar.style.width = value + '%';

        const interval = setInterval(() => {
        if (current >= value) {
            clearInterval(interval);
        } else {
            current++;
            bar.textContent = current + '%';
        }
        }, 20);
    }

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            animateProgressBar(bar);
            obs.unobserve(bar);
        }
        });
    }, {
        threshold: 0.5
    });

    document.querySelectorAll('.progress-bar').forEach(bar => {
        observer.observe(bar);
    });

    const btnTop = document.getElementById("btnTop");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
        btnTop.style.display = "block";
        } else {
        btnTop.style.display = "none";
        }
    });

    btnTop.addEventListener("click", () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    });
