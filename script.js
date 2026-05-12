const els = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('vis');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
els.forEach(el => obs.observe(el));

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (window.scrollY > 50) {
    nav.style.height = '60px';
  } else {
    nav.style.height = '68px';
  }
});

// Stagger children on problem grid
document.querySelectorAll('.prob-card,.wif-card,.trust-card').forEach((el,i) => {
  el.style.transitionDelay = (i * 0.07) + 's';
  el.classList.add('fade-up');
  obs.observe(el);
});