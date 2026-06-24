/* ============================================================
   TANIA AYALA — FAJAS COLOMBIANAS
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initBeforeAfterSliders();
  initCarousel();
});

/* ============================================================
   NAVBAR — add .scrolled class on scroll
   ============================================================ */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  function update() {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ============================================================
   MOBILE HAMBURGER MENU
   ============================================================ */
function initMobileMenu() {
  const toggle  = document.getElementById('navToggle');
  const links   = document.getElementById('navLinks');
  const overlay = document.getElementById('navOverlay');
  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-label', 'Open menu');
    if (overlay) overlay.classList.remove('visible');
  }

  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.classList.toggle('open', open);
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (overlay) overlay.classList.toggle('visible', open);
  });

  links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));

  // Close on overlay click
  if (overlay) overlay.addEventListener('click', closeMenu);
}

/* ============================================================
   BEFORE / AFTER SLIDERS
   ============================================================ */
function initBeforeAfterSliders() {
  document.querySelectorAll('.ba-wrap').forEach(wrap => {
    const before = wrap.querySelector('.ba-before');
    const handle = wrap.querySelector('.ba-handle');
    if (!before || !handle) return;

    let dragging = false;

    function setPos(clientX) {
      const rect = wrap.getBoundingClientRect();
      const pct  = Math.max(5, Math.min(95, ((clientX - rect.left) / rect.width) * 100));
      before.style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
      handle.style.left     = `${pct}%`;
    }

    // Mouse
    wrap.addEventListener('mousedown', e => { dragging = true; setPos(e.clientX); });
    document.addEventListener('mousemove', e => { if (dragging) setPos(e.clientX); });
    document.addEventListener('mouseup', () => { dragging = false; });

    // Touch
    wrap.addEventListener('touchstart', e => {
      dragging = true;
      setPos(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchmove', e => {
      if (dragging) setPos(e.touches[0].clientX);
    }, { passive: true });
    document.addEventListener('touchend', () => { dragging = false; });

    // Start at 50%
    setPos(wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width * 0.5);

    // Re-init on resize
    window.addEventListener('resize', () => {
      setPos(wrap.getBoundingClientRect().left + wrap.getBoundingClientRect().width * 0.5);
    }, { passive: true });
  });
}

/* ============================================================
   TESTIMONIALS CAROUSEL
   ============================================================ */
function initCarousel() {
  const track    = document.getElementById('carouselTrack');
  const dotsWrap = document.getElementById('cDots');
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  if (!track) return;

  const cards = track.querySelectorAll('.t-card');
  const total  = cards.length;
  let current  = 0;
  let autoplay;

  // Build dots
  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'c-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(index) {
    current = ((index % total) + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dotsWrap.querySelectorAll('.c-dot').forEach((d, i) => {
      d.classList.toggle('active', i === current);
    });
  }

  function startAuto() {
    clearInterval(autoplay);
    autoplay = setInterval(() => goTo(current + 1), 5000);
  }

  prevBtn.addEventListener('click', () => { goTo(current - 1); startAuto(); });
  nextBtn.addEventListener('click', () => { goTo(current + 1); startAuto(); });

  // Touch swipe support
  let touchStartX = 0;
  track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const delta = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) { goTo(delta > 0 ? current + 1 : current - 1); startAuto(); }
  });

  startAuto();
}
