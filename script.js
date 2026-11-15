(() => {
  'use strict';

  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  /* ---------- header state ---------- */
  const hdr = $('.hdr');
  if (hdr) {
    const onScroll = () => hdr.classList.toggle('is-stuck', window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- mobile nav ---------- */
  const burger = $('.burger');
  const mnav = $('#mnav');
  if (burger && mnav) {
    const setOpen = (open) => {
      burger.setAttribute('aria-expanded', String(open));
      mnav.hidden = !open;
      document.body.style.overflow = open ? 'hidden' : '';
    };
    burger.addEventListener('click', () => setOpen(burger.getAttribute('aria-expanded') !== 'true'));
    mnav.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !mnav.hidden) setOpen(false); });
    window.addEventListener('resize', () => { if (window.innerWidth >= 900 && !mnav.hidden) setOpen(false); });
  }

  /* ---------- method switcher ---------- */
  const METHODS = {
    soft: {
      kicker: 'Low pressure + solution',
      h: 'Clean the house without touching the finish.',
      p: 'A soft wash uses low pressure and a diluted cleaning solution. The mix kills algae, mildew and pollen, then a gentle rinse carries it away. Nothing gets stripped, etched or forced behind the siding.',
      good: ['Siding, stucco and brick', 'Painted wood and trim', 'Roofs and shingles', 'Fences and decks'],
      meter: 26,
      note: 'Soft washing is the default for anything with a finish to protect.',
    },
    pressure: {
      kicker: 'Higher pressure + surface cleaner',
      h: 'Bring hard surfaces back to one even color.',
      p: 'Concrete, pavers and aggregate need pressure — but they need an even pass, clean edges and the right pre-treatment. A surface cleaner gives a uniform finish instead of wand stripes.',
      good: ['Driveways and sidewalks', 'Patios and pool decks', 'Pavers and aggregate', 'Dumpster pads'],
      meter: 82,
      note: 'Pressure is for surfaces with no finish to damage — never siding or roofs.',
    },
  };

  const methodBtns = $$('.method__btn');
  const panel = $('#method-panel');
  if (methodBtns.length && panel) {
    const kicker = $('[data-method-kicker]', panel);
    const head = $('[data-method-h]', panel);
    const body = $('[data-method-p]', panel);
    const good = $('[data-method-good]', panel);
    const meter = $('[data-method-meter]', panel);
    const note = $('[data-method-note]', panel);

    const setMethod = (key) => {
      const m = METHODS[key];
      if (!m) return;
      methodBtns.forEach((b) => {
        const on = b.dataset.method === key;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-selected', String(on));
      });
      panel.style.opacity = '0.35';
      window.requestAnimationFrame(() => {
        if (kicker) kicker.textContent = m.kicker;
        if (head) head.textContent = m.h;
        if (body) body.textContent = m.p;
        if (good) good.innerHTML = m.good.map((g) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${g}</li>`).join('');
        if (meter) meter.style.width = m.meter + '%';
        if (note) note.textContent = m.note;
        panel.style.opacity = '1';
      });
    };

    methodBtns.forEach((btn) => btn.addEventListener('click', () => setMethod(btn.dataset.method)));
    methodBtns.forEach((btn, i) => btn.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      const next = methodBtns[(i + (e.key === 'ArrowRight' ? 1 : methodBtns.length - 1)) % methodBtns.length];
      next.focus();
      setMethod(next.dataset.method);
    }));
  }

  /* ---------- work filters ---------- */
  const filterBtns = $$('.filters__btn');
  const gallery = $('[data-gallery]');
  const empty = $('.gal__empty');
  let visible = [];

  const applyFilter = () => {
    if (!gallery) return;
    const active = $('.filters__btn.is-on');
    const cat = active ? active.dataset.filter : 'all';
    const items = $$('.gal__item--btn', gallery);
    items.forEach((it) => {
      const show = cat === 'all' || it.dataset.cat === cat;
      it.classList.toggle('is-hidden', !show);
    });
    visible = items.filter((it) => !it.classList.contains('is-hidden'));
    if (empty) empty.hidden = visible.length > 0;
  };

  if (filterBtns.length && gallery) {
    filterBtns.forEach((btn) => btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        const on = b === btn;
        b.classList.toggle('is-on', on);
        b.setAttribute('aria-pressed', String(on));
      });
      applyFilter();
    }));
    applyFilter();
  }

  /* ---------- lightbox ---------- */
  const lb = $('#lightbox');
  if (lb && gallery) {
    const img = $('.lb__img', lb);
    const cap = $('.lb__cap', lb);
    let index = 0;
    let lastFocus = null;

    const show = (i) => {
      if (!visible.length) return;
      index = (i + visible.length) % visible.length;
      const item = visible[index];
      const full = item.dataset.full || $('img', item)?.currentSrc || '';
      if (img) {
        img.src = full;
        img.alt = $('img', item)?.alt || '';
      }
      if (cap) cap.textContent = item.dataset.label || '';
    };

    const open = (i) => {
      lastFocus = document.activeElement;
      lb.hidden = false;
      document.body.style.overflow = 'hidden';
      show(i);
      $('.lb__close', lb)?.focus();
    };

    const close = () => {
      lb.hidden = true;
      document.body.style.overflow = '';
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    };

    gallery.addEventListener('click', (e) => {
      const item = e.target.closest('.gal__item--btn');
      if (!item) return;
      const i = visible.indexOf(item);
      open(i < 0 ? 0 : i);
    });

    $('.lb__close', lb)?.addEventListener('click', close);
    $('.lb__prev', lb)?.addEventListener('click', () => show(index - 1));
    $('.lb__next', lb)?.addEventListener('click', () => show(index + 1));
    lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
    document.addEventListener('keydown', (e) => {
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') show(index - 1);
      if (e.key === 'ArrowRight') show(index + 1);
    });

    let sx = 0, sy = 0;
    lb.addEventListener('touchstart', (e) => {
      sx = e.touches[0].clientX;
      sy = e.touches[0].clientY;
    }, { passive: true });
    lb.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - sx;
      const dy = e.changedTouches[0].clientY - sy;
      if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
    }, { passive: true });
  }

  /* ---------- year ---------- */
  $$('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });

  /* ---------- reveal ---------- */
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const targets = $$([
      '.sechead', '.method__switch', '.method__panel', '.svc', '.why__media', '.why__copy',
      '.gal__item', '.steps li', '.area__grid > *', '.band__in > *', '.phero__grid > *',
      '.cmp__head', '.cmp__col', '.svcsec__media', '.svcsec__body', '.filters',
      '.bigsteps li', '.two > *', '.faqmini__grid > div', '.about__grid > *',
      '.rules li', '.form', '.contact__aside', '.thanks__in > *', '.hero__copy > *', '.hero__media',
    ].join(',')).slice(0, 240);

    targets.forEach((el) => el.classList.add('rv'));

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('on');
        io.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.06 });

    targets.forEach((el) => io.observe(el));
  }
})();
