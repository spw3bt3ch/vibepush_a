/* =====================================================
   VibePush Africa — Main JavaScript
   ===================================================== */

// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const scrollHandler = () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
};
window.addEventListener('scroll', scrollHandler, { passive: true });
scrollHandler();

// ===== MOBILE MENU TOGGLE =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    mobileMenu.classList.toggle('hidden', isOpen);
    const icon = mobileMenuBtn.querySelector('i');
    icon.className = isOpen ? 'fas fa-bars text-xl' : 'fas fa-times text-xl';
  });

  // Close menu when clicking a link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.querySelector('i').className = 'fas fa-bars text-xl';
    });
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add('hidden');
      mobileMenuBtn.querySelector('i').className = 'fas fa-bars text-xl';
    }
  });
}

// ===== INTERSECTION OBSERVER — FADE-IN ON SCROLL =====
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger sibling elements
      const siblings = Array.from(entry.target.parentElement.children)
        .filter(el => el.classList.contains('fade-in-element'));
      const idx = siblings.indexOf(entry.target);
      const delay = idx * 80;
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, delay);
      fadeObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in-element').forEach(el => fadeObserver.observe(el));

// ===== SMOOTH ANCHOR SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 90;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== PLAN CARD GLOW ON HOVER =====
document.querySelectorAll('.plan-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(109,40,217,0.08) 0%, transparent 60%), linear-gradient(145deg, #1A1A2E, #16213E)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.background = '';
  });
});

// ===== ACTIVE NAV LINK HIGHLIGHT =====
const currentPath = window.location.pathname;
document.querySelectorAll('.nav-link').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPath || (href !== '/' && currentPath.startsWith(href))) {
    link.classList.add('active');
  }
});

// ===== FEATURED CARD TILT EFFECT =====
document.querySelectorAll('.featured-card, .service-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const xVal = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const yVal = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    card.style.transform = `perspective(600px) rotateY(${xVal * 4}deg) rotateX(${-yVal * 4}deg) translateY(-6px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

// ===== COUNTER ANIMATION (for hero stats) =====
function animateCounter(el, target, duration = 1500) {
  const start = performance.now();
  const suffix = el.dataset.suffix || '';
  const update = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}

// Observe stat numbers
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.textContent.trim();
      const num = parseInt(raw.replace(/[^0-9]/g, ''), 10);
      const suffix = raw.replace(/[0-9]/g, '').trim();
      el.dataset.suffix = suffix;
      animateCounter(el, num);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.text-3xl.font-display.font-black').forEach(el => {
  if (!isNaN(parseInt(el.textContent))) statObserver.observe(el);
});

// ===== CONSOLE SIGNATURE =====
console.log('%c🎵 VibePush Africa%c\nAmplifying African Sounds & Events\nDeveloped by SMI Solutions',
  'color:#7C3AED;font-size:20px;font-weight:bold;',
  'color:#EC4899;font-size:12px;');
