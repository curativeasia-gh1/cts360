/* ===== CTS360 MAIN JS v2 ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Navbar scroll --- */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    });
  }

  /* --- Active nav link --- */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });

  /* --- Dropdown nav: JS-controlled hover with delay for reliability --- */
  document.querySelectorAll('.has-dropdown').forEach(item => {
    let closeTimer;
    const dropdown = item.querySelector('.dropdown');

    const openDropdown = () => {
      clearTimeout(closeTimer);
      // Close all other dropdowns first
      document.querySelectorAll('.has-dropdown').forEach(other => {
        if (other !== item) other.classList.remove('dropdown-open');
      });
      item.classList.add('dropdown-open');
    };

    const closeDropdown = () => {
      closeTimer = setTimeout(() => {
        item.classList.remove('dropdown-open');
      }, 120);
    };

    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', closeDropdown);

    if (dropdown) {
      dropdown.addEventListener('mouseenter', () => clearTimeout(closeTimer));
      dropdown.addEventListener('mouseleave', closeDropdown);
    }

    // Also support click toggle (touch devices)
    const link = item.querySelector(':scope > a');
    if (link) {
      link.addEventListener('click', (e) => {
        // Only intercept if dropdown exists and we're on desktop
        if (window.innerWidth > 860 && dropdown) {
          if (!item.classList.contains('dropdown-open')) {
            e.preventDefault();
            openDropdown();
          }
          // If already open, let the link navigate
        }
      });
    }

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!item.contains(e.target)) {
        item.classList.remove('dropdown-open');
      }
    });
  });

  /* --- Hamburger toggle --- */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('active', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    // Close mobile menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- FAQ accordion --- */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    });
  });

  /* --- Scroll reveal --- */
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
  }

  /* --- Contact form --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]');
      btn.textContent = 'Sending...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent!';
        btn.style.background = '#22C55E';
        contactForm.reset();
      }, 1200);
    });
  }
});
