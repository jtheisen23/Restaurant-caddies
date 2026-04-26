// Restaurant Caddies — site interactions

(function () {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const yearEl = document.getElementById('year');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header style on scroll
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 8) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      const open = !mobileNav.hasAttribute('hidden');
      if (open) {
        mobileNav.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      } else {
        mobileNav.removeAttribute('hidden');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });

    mobileNav.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        mobileNav.setAttribute('hidden', '');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active nav highlighting
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.primary-nav a, .mobile-nav a').forEach((a) => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (!href || href.startsWith('http') || href.startsWith('#')) return;
    if (href === path || (path === '' && href === 'index.html')) {
      a.setAttribute('aria-current', 'page');
    }
  });

  // Subtle reveal on scroll
  const reveal = document.querySelectorAll('.service-card, .result-card, .approach-steps li, .team-card, .quote-block');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveal.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(14px)';
      el.style.transition = 'opacity .5s ease, transform .5s ease';
      io.observe(el);
    });
  }

  // Web3Forms async submit
  const form = document.querySelector('form[data-web3forms]');
  if (form) {
    const status = form.querySelector('.form-status');
    const button = form.querySelector('button[type="submit"]');
    const setStatus = (msg, kind) => {
      if (!status) return;
      status.textContent = msg;
      status.classList.remove('is-success', 'is-error');
      if (kind) status.classList.add('is-' + kind);
    };

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const accessKey = form.querySelector('input[name="access_key"]').value;
      if (!accessKey || accessKey.startsWith('REPLACE_')) {
        setStatus(
          'The form is not yet activated. Add a Web3Forms access key to enable submissions.',
          'error'
        );
        return;
      }
      const data = new FormData(form);
      button.disabled = true;
      const original = button.textContent;
      button.textContent = 'Sending…';
      setStatus('', null);

      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: data,
        });
        const json = await res.json();
        if (res.ok && json.success) {
          form.reset();
          setStatus("Thanks — we'll be in touch within one business day.", 'success');
        } else {
          setStatus(json.message || 'Something went wrong. Please email us directly.', 'error');
        }
      } catch (err) {
        setStatus('Network error. Please try again or email us directly.', 'error');
      } finally {
        button.disabled = false;
        button.textContent = original;
      }
    });
  }
})();
