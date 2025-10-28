// Toggle menú responsive
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

// Año dinámico en el footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Enlace con clase .btn-primary hace scroll suave al #contenido (ya hay smooth en CSS, esto solo asegura foco)
document.querySelectorAll('a.btn-primary[href="#contenido"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    e.preventDefault();
    const el = document.getElementById('contenido');
    if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
  });
});
