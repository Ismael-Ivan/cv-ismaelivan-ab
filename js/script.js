(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const preference = window.matchMedia('(prefers-color-scheme: dark)');
  let savedTheme = null;
  try {
    savedTheme = localStorage.getItem('cv-theme');
    if (!savedTheme && localStorage.getItem('darkMode') === 'true') savedTheme = 'dark';
  } catch { /* La web sigue funcionando si el navegador bloquea el almacenamiento. */ }
  function applyTheme(theme) {
    const isDark = theme === 'dark';
    root.dataset.theme = isDark ? 'dark' : 'light';
    themeButton.setAttribute('aria-pressed', String(isDark));
    themeButton.setAttribute('aria-label', isDark ? 'Activar modo claro' : 'Activar modo oscuro');
    document.querySelector('meta[name="theme-color"]').content = isDark ? '#161e1a' : '#f7f8f4';
  }
  applyTheme(savedTheme || (preference.matches ? 'dark' : 'light'));
  themeButton.hidden = false;
  themeButton.addEventListener('click', () => {
    savedTheme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(savedTheme);
    try { localStorage.setItem('cv-theme', savedTheme); } catch { /* Preferencia válida durante esta visita. */ }
  });
  preference.addEventListener('change', event => {
    if (!savedTheme) applyTheme(event.matches ? 'dark' : 'light');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
  // Resalta la sección visible sin ocultar el contenido ni depender de animaciones.
  const links = [...document.querySelectorAll('.navigation a')];
  const sections = [...document.querySelectorAll('main section[id]')];
  let scheduled = false;
  function updateNavigation() {
    let current = '';
    for (const section of sections) {
      if (section.getBoundingClientRect().top <= 170) current = '#' + section.id;
    }
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = '#contacto';
    links.forEach(link => {
      if (link.getAttribute('href') === current) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    scheduled = false;
  }
  window.addEventListener('scroll', () => {
    if (!scheduled) { scheduled = true; requestAnimationFrame(updateNavigation); }
  }, { passive: true });
  window.addEventListener('resize', updateNavigation);
  updateNavigation();
})();
