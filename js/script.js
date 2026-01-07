// Fade-in ao scroll
    const faders = document.querySelectorAll('.fade-in');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    faders.forEach(el => observer.observe(el));

    // Scroll CTA
    document.querySelectorAll('.scroll-cta').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelector('#projetos')
          .scrollIntoView({ behavior: 'smooth' });
      });
    });