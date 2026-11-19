import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve('.');
const ORIGIN = 'https://ari-builds.github.io/prosoft-of-texas-site';
const REPO = 'prosoft-of-texas-site';

const M = JSON.parse(fs.readFileSync('C:/Users/Arian/AppData/Local/Temp/opencode/asset-manifest.json', 'utf8')).prosoft;

const S = {
  name: 'ProSoft of Texas',
  short: 'ProSoft',
  tel: '(281) 235-7491',
  telHref: 'tel:+12812357491',
  owner: 'Charlie Dwiggins',
  area: 'Greater Houston, Texas',
  towns: ['Houston', 'Katy', 'Cypress', 'Spring', 'Tomball', 'Sugar Land', 'Pearland', 'The Woodlands', 'Richmond', 'Fulshear', 'Magnolia', 'Conroe'],
};

const NAV = [
  ['Services', 'services/', 'services'],
  ['Work', 'work/', 'work'],
  ['Process', 'process/', 'process'],
  ['About', 'about/', 'about'],
  ['Contact', 'contact/', 'contact'],
];

const SERVICES = [
  {
    slug: 'soft-washing',
    n: '01',
    title: 'Soft washing',
    kicker: 'Low pressure, deep clean',
    short: 'Siding, stucco, brick and roofs cleaned at low pressure with a solution that kills the growth instead of blasting the finish.',
    lede: 'The safe way to clean a house: low pressure, the right mix, and time for it to work.',
    body: [
      'Most of what makes a house look dingy is alive — algae, mildew, pollen and spider webs. High pressure strips paint, forces water behind siding and etches stucco. A soft wash does the opposite: low pressure, a diluted cleaning solution, and enough dwell time for the growth to die and rinse away.',
      'Vinyl, HardiePlank, stucco, brick and painted wood each get their own mix and their own tip. Plants are wet down and covered, windows are rinsed, and the finish stays exactly where it was.',
    ],
    includes: ['Low pressure on every surface', 'Siding, soffits and eaves', 'Roof algae treatment', 'Windows and screens rinsed', 'Landscaping protected', 'Walkaround before we leave'],
    img: 'work-01',
    alt: 'Soft washing a Houston-area home',
    best: 'Vinyl, stucco, brick and painted wood',
  },
  {
    slug: 'pressure-washing',
    n: '02',
    title: 'Pressure washing',
    kicker: 'Concrete & hard surfaces',
    short: 'Driveways, sidewalks, patios and pool decks cleaned with a surface cleaner for an even finish — no wand stripes.',
    lede: 'Hard surfaces need pressure. They also need an even pass, clean edges and no zebra stripes.',
    body: [
      'Concrete holds red clay, oil, rust, leaf tannin and tyre marks, and each one needs a different pre-treatment. A single fast pass with a wand leaves stripes that never come out, especially on older concrete.',
      'We use a surface cleaner for an even finish, pre-treat the stains, and rinse the edges and expansion joints by hand. Pavers get lower pressure with the joints protected, and we can quote a re-sand afterwards if they need it.',
    ],
    includes: ['Surface-cleaner finish', 'Oil, rust and clay pre-treatment', 'Edges and joints by hand', 'Paver-safe pressure', 'Surrounding surfaces rinsed', 'Optional paver re-sand'],
    img: 'work-04',
    alt: 'Pressure washing a driveway in Greater Houston',
    best: 'Concrete, pavers, aggregate and asphalt',
  },
  {
    slug: 'window-cleaning',
    n: '03',
    title: 'Window cleaning',
    kicker: 'Glass, screens & tracks',
    short: 'Exterior glass, frames, screens and tracks cleaned by hand — the details that make a whole house look sharper.',
    lede: 'Clean glass is the cheapest face-lift a house can get.',
    body: [
      'Windows are usually the first thing a visitor notices and the last thing anyone cleans properly. Spraying glass and wiping it dry just moves the dirt around. We wash, squeegee and detail the edges, then clean the frames, screens and tracks so the whole opening looks new.',
      'Hard-water spots and construction residue get a different treatment. We work from the outside, protect the landscaping, and check every pane in daylight before we pack up.',
    ],
    includes: ['Exterior glass washed and squeegeed', 'Frames and sills wiped', 'Screens removed and cleaned', 'Tracks vacuumed and wiped', 'Hard-water spot treatment', 'Daylight check on every pane'],
    img: 'work-06',
    alt: 'Window cleaning on a Houston home',
    best: 'Homes, storefronts and offices',
  },
  {
    slug: 'gutter-cleaning',
    n: '04',
    title: 'Gutter cleaning',
    kicker: 'Flow & fascia',
    short: 'Debris out by hand, downspouts flushed and tested, fascia rinsed — before the next Texas storm finds the weak point.',
    lede: 'Clean gutters are a water-management job, not a cosmetic one.',
    body: [
      'A blocked gutter sends water down the fascia, behind the siding and toward the foundation. In a Houston downpour that can happen in minutes. We remove the debris by hand, flush every downspout and confirm water actually leaves the building where it should.',
      'Debris is bagged rather than dropped in the beds, the fascia gets rinsed, and we report anything that looks like a loose hanger, a leaking joint or a downspout that needs re-routing.',
    ],
    includes: ['Debris removed by hand', 'Downspouts flushed and tested', 'Fascia rinsed', 'Debris bagged and hauled', 'Hanger and joint check', 'Photo report of problem areas'],
    img: 'work-08',
    alt: 'Gutter cleaning in Greater Houston',
    best: 'Every roof with gutters, before storm season',
  },
  {
    slug: 'concrete-and-driveways',
    n: '05',
    title: 'Driveways & concrete',
    kicker: 'Surface restoration',
    short: 'Driveways, walkways, pool decks and patios brought back to an even, uniform finish.',
    lede: 'Concrete should look the same color from the street to the garage.',
    body: [
      'Houston clay, oak tannin and summer storms leave concrete stained and streaked. We pre-treat oil, rust and organic stains, then clean with a surface cleaner so the whole slab comes back evenly.',
      'Expansion joints and edges are detailed by hand, and the surrounding lawn, beds and fencing are rinsed before we leave. Sealing can be quoted separately once the concrete is dry.',
    ],
    includes: ['Even surface-cleaner pass', 'Oil and rust pre-treatment', 'Joint and edge detailing', 'Pool deck and patio safe', 'Landscaping rinsed', 'Sealing quote on request'],
    img: 'work-09',
    alt: 'Driveway and concrete cleaning',
    best: 'Driveways, walkways, patios and pool decks',
  },
  {
    slug: 'commercial-exterior',
    n: '06',
    title: 'Commercial exterior',
    kicker: 'Storefronts & property',
    short: 'Storefronts, sidewalks, dumpster pads, entryways and building washes — scheduled around your hours.',
    lede: 'Curb appeal on a calendar, not when someone finally complains.',
    body: [
      'Commercial exterior cleaning is about consistency. We build a scope per site — storefront glass and entry, sidewalks, dumpster pad, drive-through, building wash — and put it on a recurring schedule so it never becomes a crisis.',
      'Early-morning and after-hours work is normal. One point of contact, a written scope, and a photo record after each visit. Restaurant operators and property managers get the same standard as a homeowner.',
    ],
    includes: ['Storefront glass and entry', 'Sidewalks and dumpster pads', 'Building and awning wash', 'Recurring schedules', 'After-hours availability', 'Photo record each visit'],
    img: 'work-07',
    alt: 'Commercial exterior cleaning in Houston',
    best: 'Retail, restaurants, offices and multi-unit properties',
  },
];

const WORK = [
  ['work-01', 'House soft wash', 'Katy', 'house'],
  ['work-02', 'House soft wash', 'Cypress', 'house'],
  ['work-03', 'Roof soft wash', 'Spring', 'roof'],
  ['work-04', 'Driveway', 'Houston', 'driveway'],
  ['work-05', 'Patio & pool deck', 'Sugar Land', 'patio'],
  ['work-06', 'Window cleaning', 'The Woodlands', 'window'],
  ['work-07', 'Commercial exterior', 'Houston', 'commercial'],
  ['work-08', 'Gutter cleaning', 'Tomball', 'gutter'],
  ['work-09', 'Driveway & walkway', 'Pearland', 'driveway'],
  ['work-10', 'House soft wash', 'Richmond', 'house'],
  ['work-11', 'Commercial storefront', 'Houston', 'commercial'],
  ['work-12', 'Fence & patio', 'Magnolia', 'patio'],
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const url = (d, p) => '../'.repeat(d) + p;
const asset = (d, f) => '../'.repeat(d) + 'assets/opt/' + f;

const icons = () => `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>
<symbol id="i-arrow" viewBox="0 0 24 24"><path d="M4 12h15M13 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-check" viewBox="0 0 24 24"><path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-tel" viewBox="0 0 24 24"><path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 006.5 6.5l1.5-2 4 1.5v3A2.5 2.5 0 0118.5 21C10.5 21 3 13.5 3 5.5A2.5 2.5 0 015.5 3z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-pin" viewBox="0 0 24 24"><path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0113 0c0 4.8-6.5 11-6.5 11z" fill="none" stroke="currentColor" stroke-width="1.5"/><circle cx="12" cy="10" r="2.2" fill="none" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="i-drop" viewBox="0 0 24 24"><path d="M12 3c3.5 5 6 8.2 6 11a6 6 0 11-12 0c0-2.8 2.5-6 6-11z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-spray" viewBox="0 0 24 24"><path d="M8 9h7v12H8zM8 9V6h7v3M5 12H2M20 4l2-1M20 8h3M18 2v3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
<symbol id="i-window" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M12 3v18M3 12h18" stroke="currentColor" stroke-width="1.5"/></symbol>
<symbol id="i-gutter" viewBox="0 0 24 24"><path d="M3 7h18v4H3zM6 11v5a3 3 0 003 3M18 11v5a3 3 0 01-3 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
<symbol id="i-spark" viewBox="0 0 24 24"><path d="M12 2l2.2 7.8L22 12l-7.8 2.2L12 22l-2.2-7.8L2 12l7.8-2.2z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></symbol>
</defs></svg>`;

const logo = (d) => `<a class="logo" href="${d === 0 ? '#top' : url(d, '')}" aria-label="${S.name}, home">
  <span class="logo__mark" aria-hidden="true"><svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 3c3.5 5 6 8.2 6 11a6 6 0 11-12 0c0-2.8 2.5-6 6-11z" fill="currentColor"/></svg></span>
  <span class="logo__txt"><strong>ProSoft</strong><span class="mono">of Texas</span></span>
</a>`;

const head = ({ d, title, desc, canonical, og, jsonld, active = '', base = '' }) => `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<script>document.documentElement.classList.add('js');</script>
${base ? `<base href="${base}">` : ''}
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<meta name="description" content="${esc(desc)}">
<link rel="canonical" href="${ORIGIN}/${canonical}">
<meta property="og:type" content="website">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(desc)}">
<meta property="og:url" content="${ORIGIN}/${canonical}">
<meta property="og:image" content="${ORIGIN}/assets/opt/${og}">
<meta name="theme-color" content="#0D2734">
<link rel="icon" href="${asset(d, 'work-01.webp')}" type="image/webp">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=IBM+Plex+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${url(d, 'styles.css')}">
<script type="application/ld+json">${jsonld}</script>
</head>
<body>
${icons()}
<a class="skip" href="#main">Skip to content</a>
<header class="hdr" id="top">
  <div class="shell hdr__in">
    ${logo(d)}
    <nav class="nav" aria-label="Main">
      ${NAV.map(([label, p, key]) => `<a href="${url(d, p)}"${key === active ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ')}
    </nav>
    <a class="hdr__cta" href="${url(d, 'contact/')}">Free quote</a>
    <a class="hdr__tel" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg><span>${S.tel}</span></a>
    <button class="burger" aria-label="Menu" aria-expanded="false" aria-controls="mnav"><span></span><span></span><span></span></button>
  </div>
  <div class="mnav" id="mnav" hidden>
    ${NAV.map(([label, p]) => `<a href="${url(d, p)}">${label}</a>`).join('\n    ')}
    <a class="mnav__tel" href="${S.telHref}">${S.tel}</a>
    <a class="btn btn--navy" href="${url(d, 'contact/')}">Get a free quote</a>
  </div>
</header>`;

const foot = (d) => `<footer class="foot">
  <div class="shell foot__top">
    <div class="foot__brand">
      ${logo(d)}
      <p>Soft washing, pressure washing, window cleaning and gutters across ${S.area}. Let us make your home POP.</p>
      <a class="foot__tel" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
    </div>
    <div class="foot__col">
      <h4 class="mono">Services</h4>
      ${SERVICES.map((s) => `<a href="${url(d, `services/#${s.slug}`)}">${s.title}</a>`).join('\n      ')}
    </div>
    <div class="foot__col">
      <h4 class="mono">Company</h4>
      <a href="${url(d, 'about/')}">About</a>
      <a href="${url(d, 'work/')}">Recent work</a>
      <a href="${url(d, 'process/')}">Our process</a>
      <a href="${url(d, 'contact/')}">Contact</a>
    </div>
    <div class="foot__col">
      <h4 class="mono">Service area</h4>
      <p class="foot__area">${S.towns.slice(0, 8).join(' · ')}</p>
      <p class="foot__fine">Based in Greater Houston. Ask if you are just outside the list.</p>
    </div>
  </div>
  <div class="shell foot__bottom">
    <span class="mono">© <span data-year>2026</span> ${S.name}</span>
    <span class="mono">Free estimates · Owner-operated</span>
  </div>
</footer>`;

const ctaBand = (d) => `<section class="band">
  <div class="bubbles" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span></div>
  <div class="shell band__in">
    <div>
      <span class="label label--light">Free estimate</span>
      <h2>Ready to make it<br><em>POP?</em></h2>
      <p>Send the address or call Charlie. One walkaround, a written quote, and a date — no deposit, no pressure.</p>
    </div>
    <div class="band__acts">
      <a class="btn btn--aqua btn--lg" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
      <a class="btn btn--outline-light btn--lg" href="${url(d, 'contact/')}">Request online</a>
      <span class="mono band__note">${S.area}</span>
    </div>
  </div>
</section>`;

const crumbs = (trail) => {
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: ORIGIN + '/' }];
  trail.forEach((t, i) => items.push({ '@type': 'ListItem', position: i + 2, name: t[0], item: `${ORIGIN}/${t[1]}` }));
  return { '@type': 'BreadcrumbList', itemListElement: items };
};

const biz = () => ({
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${ORIGIN}/#business`,
  name: S.name,
  description: 'Soft washing, pressure washing, window cleaning, gutter cleaning, concrete and commercial exterior cleaning across Greater Houston, Texas.',
  url: ORIGIN + '/',
  image: `${ORIGIN}/assets/opt/hero.webp`,
  telephone: '+1-281-235-7491',
  areaServed: ['Houston', 'Katy', 'Cypress', 'Spring', 'Tomball', 'Sugar Land', 'Pearland', 'The Woodlands'],
  priceRange: '$$',
  founder: { '@type': 'Person', name: S.owner },
  slogan: 'Let Us Make Your Home POP!',
});

function page(opts, body) {
  const jsonld = JSON.stringify(opts.jsonld);
  const html = `${head({ ...opts, jsonld })}
<main id="main">
${body}
</main>
${foot(opts.d)}
<script src="${url(opts.d, 'script.js')}" defer></script>
</body>
</html>
`.replace(/(src|href|data-full)="assets\/opt\//g, (m, attr) => `${attr}="${'../'.repeat(opts.d)}assets/opt/`);
  const out = opts.canonical === '' || opts.canonical.endsWith('/')
    ? path.join(ROOT, opts.canonical, 'index.html')
    : path.join(ROOT, opts.canonical);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  console.log('wrote', path.relative(ROOT, out));
}

/* ------------------------------------------------------------------ */
/* home                                                                */
/* ------------------------------------------------------------------ */

const METHODS = {
  soft: {
    label: 'Soft washing',
    pressure: 'Low pressure',
    icon: 'i-drop',
    h: 'Clean the house without touching the finish.',
    p: 'A soft wash uses low pressure and a diluted cleaning solution. The mix kills algae, mildew and pollen, then a gentle rinse carries it away. Nothing gets stripped, etched or forced behind the siding.',
    good: ['Siding, stucco and brick', 'Painted wood and trim', 'Roofs and shingles', 'Fences and decks'],
    meter: 26,
  },
  pressure: {
    label: 'Pressure washing',
    pressure: 'Higher pressure',
    icon: 'i-spray',
    h: 'Bring hard surfaces back to one even color.',
    p: 'Concrete, pavers and aggregate need pressure — but they need an even pass, clean edges and the right pre-treatment. A surface cleaner gives a uniform finish instead of wand stripes.',
    good: ['Driveways and sidewalks', 'Patios and pool decks', 'Pavers and aggregate', 'Dumpster pads'],
    meter: 82,
  },
};

const home = `
<section class="hero">
  <div class="hero__bubbles" aria-hidden="true"><span></span><span></span><span></span><span></span><span></span><span></span></div>
  <div class="shell hero__grid">
    <div class="hero__copy">
      <span class="label"><span class="label__dot" aria-hidden="true"></span>${S.area}</span>
      <h1>Let us make<br>your home <em>POP.</em></h1>
      <p class="hero__p">Soft washing, pressure washing, windows and gutters — the exterior cleaned properly, by the owner, with a written quote before anyone picks up a hose.</p>
      <div class="hero__acts">
        <a class="btn btn--navy btn--lg" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
        <a class="btn btn--ghost btn--lg" href="contact/">Get a free quote</a>
      </div>
      <ul class="hero__ticks">
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Free written estimates</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Owner on every job</li>
        <li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>Residential &amp; commercial</li>
      </ul>
    </div>
    <div class="hero__media">
      <span class="hero__blob" aria-hidden="true"></span>
      <figure class="hero__fig"><img src="assets/opt/hero.webp" alt="Home exterior cleaning in Greater Houston" width="${M.hero.w}" height="${M.hero.h}" fetchpriority="high" decoding="async"></figure>
      <div class="hero__card">
        <span class="hero__card-ico" aria-hidden="true"><svg class="ico"><use href="#i-spark"/></svg></span>
        <div><strong>Let us make your home POP!</strong><span class="mono">Free estimate · no deposit</span></div>
      </div>
      <span class="hero__stamp"><span class="mono">Serving</span><strong>Houston</strong><span class="mono">&amp; around</span></span>
    </div>
  </div>
  <div class="shell hero__foot">
    <span class="mono">Soft wash · Pressure wash · Windows · Gutters</span>
    <span class="mono">Owner-operated · ${S.owner}</span>
  </div>
</section>

<div class="ticker" aria-hidden="true">
  <div class="ticker__track">
    <span>Soft washing</span><span class="ticker__dot">•</span><span>Pressure washing</span><span class="ticker__dot">•</span><span>Window cleaning</span><span class="ticker__dot">•</span><span>Gutters</span><span class="ticker__dot">•</span><span>Concrete</span><span class="ticker__dot">•</span><span>Commercial</span><span class="ticker__dot">•</span>
    <span>Soft washing</span><span class="ticker__dot">•</span><span>Pressure washing</span><span class="ticker__dot">•</span><span>Window cleaning</span><span class="ticker__dot">•</span><span>Gutters</span><span class="ticker__dot">•</span><span>Concrete</span><span class="ticker__dot">•</span><span>Commercial</span><span class="ticker__dot">•</span>
  </div>
</div>

<section class="sec method" id="methods">
  <div class="shell">
    <div class="sechead">
      <span class="label">01 — Two ways to clean</span>
      <h2>Not everything<br>wants <em>pressure.</em></h2>
      <p class="sechead__p">The method should match the surface. Switch between them to see which one your house needs.</p>
    </div>
    <div class="method__switch" role="tablist" aria-label="Cleaning method">
      <button class="method__btn is-on" role="tab" aria-selected="true" aria-controls="method-panel" data-method="soft"><svg class="ico" aria-hidden="true"><use href="#i-drop"/></svg><span>Soft washing</span><span class="mono">Low pressure</span></button>
      <button class="method__btn" role="tab" aria-selected="false" aria-controls="method-panel" data-method="pressure"><svg class="ico" aria-hidden="true"><use href="#i-spray"/></svg><span>Pressure washing</span><span class="mono">Hard surfaces</span></button>
    </div>
    <div class="method__panel" id="method-panel" role="tabpanel">
      <div class="method__copy">
        <span class="method__kicker mono" data-method-kicker>Low pressure + solution</span>
        <h3 data-method-h>${METHODS.soft.h}</h3>
        <p data-method-p>${METHODS.soft.p}</p>
        <ul class="ticks" data-method-good>${METHODS.soft.good.map((g) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${g}</li>`).join('')}</ul>
        <a class="btn btn--navy" href="estimate/">Get this quoted <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      </div>
      <div class="method__meterbox">
        <span class="mono">Pressure level</span>
        <div class="meter"><span class="meter__fill" data-method-meter style="width:${METHODS.soft.meter}%"></span></div>
        <div class="meter__labels mono"><span>Gentle</span><span>Firm</span></div>
        <div class="method__note">
          <svg class="ico" aria-hidden="true"><use href="#i-spark"/></svg>
          <p data-method-note>Soft washing is the default for anything with a finish to protect.</p>
        </div>
        <figure class="method__fig"><img src="assets/opt/work-01.webp" alt="Soft washing a home exterior" width="${M['work-01'].w}" height="${M['work-01'].h}" loading="lazy" decoding="async"></figure>
      </div>
    </div>
  </div>
</section>

<section class="sec sec--sand svcs">
  <div class="shell">
    <div class="sechead sechead--split">
      <div><span class="label">02 — Services</span><h2>Everything outside<br>the <em>front door.</em></h2></div>
      <p class="sechead__p">Four core services and two extras that come up on almost every property. Every quote is written, not guessed on the phone.</p>
    </div>
    <div class="svcgrid">
      ${SERVICES.map((s) => `<a class="svc" href="services/#${s.slug}">
        <span class="svc__n mono">${s.n}</span>
        <span class="svc__ico" aria-hidden="true"><svg class="ico"><use href="${s.slug === 'soft-washing' ? '#i-drop' : s.slug === 'pressure-washing' ? '#i-spray' : s.slug === 'window-cleaning' ? '#i-window' : s.slug === 'gutter-cleaning' ? '#i-gutter' : s.slug === 'concrete-and-driveways' ? '#i-spray' : '#i-spark'}"/></svg></span>
        <h3>${s.title}</h3>
        <p>${s.short}</p>
        <span class="svc__more mono">View service <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></span>
        <span class="svc__peek"><img src="assets/opt/${M[s.img].small}" alt="" loading="lazy" decoding="async"></span>
      </a>`).join('\n      ')}
    </div>
    <div class="svcs__foot">
      <a class="btn btn--navy" href="services/">All six services <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <span class="mono">Written scope · no deposit</span>
    </div>
  </div>
</section>

<section class="sec why">
  <div class="shell why__grid">
    <div class="why__media">
      <figure class="why__fig"><img src="assets/opt/about.webp" alt="ProSoft of Texas at work" width="${M.about.w}" height="${M.about.h}" loading="lazy" decoding="async"></figure>
      <div class="why__chip"><span class="mono">Owner on site</span><strong>Charlie Dwiggins</strong></div>
    </div>
    <div class="why__copy">
      <span class="label">03 — The standard</span>
      <h2>Clean is a result.<br><em>Care</em> is the method.</h2>
      <p class="lead">Anyone can point a pressure washer at a house. The difference is in what gets protected, what gets pre-treated, and what happens after the big pass.</p>
      <p>ProSoft of Texas is owner-operated by ${S.owner}, working across ${S.area}. The approach is simple: identify the surface, choose the right pressure and chemistry, protect everything that should not get wet, and do not leave until the edges match the middle.</p>
      <div class="why__rows">
        <div><span class="mono">01</span><strong>Test patch first</strong><p>A small area tells us more than a phone description — especially on stucco, painted wood and older concrete.</p></div>
        <div><span class="mono">02</span><strong>Protect the surroundings</strong><p>Plants, furniture, pets and the neighbour's car. Water goes where it is supposed to and nowhere else.</p></div>
        <div><span class="mono">03</span><strong>Walk it before you pay</strong><p>The job is done when you have walked it and anything you spotted has been fixed.</p></div>
      </div>
      <a class="link" href="process/">See how a job runs <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

<section class="sec sec--navy work">
  <div class="shell">
    <div class="sechead sechead--split">
      <div><span class="label label--light">04 — Recent work</span><h2>Real houses.<br><em>Real difference.</em></h2></div>
      <a class="link link--light" href="work/">See all 12 projects <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
    <div class="gal">
      ${WORK.slice(0, 6).map(([img, label, town], i) => `<a class="gal__item" href="work/" aria-label="${esc(label)} in ${esc(town)}">
        <img src="assets/opt/${M[img].small}" alt="${esc(label)} in ${esc(town)}" width="${M[img].w}" height="${M[img].h}" loading="lazy" decoding="async">
        <span class="gal__cap"><span class="mono">${String(i + 1).padStart(2, '0')}</span><span>${label} · ${town}</span></span>
      </a>`).join('\n      ')}
    </div>
  </div>
</section>

<section class="sec proc">
  <div class="shell">
    <div class="sechead sechead--split">
      <div><span class="label">05 — The process</span><h2>Three steps,<br>then the <em>POP.</em></h2></div>
      <p class="sechead__p">You know who is coming, what they will use, and what it costs before anyone pulls into the driveway.</p>
    </div>
    <ol class="steps">
      <li><span class="steps__n">01</span><h3>Walkaround &amp; quote</h3><p>Fifteen minutes on site. We test a small area, check the surface and the water source, and send a fixed written price.</p></li>
      <li><span class="steps__n">02</span><h3>Protect &amp; clean</h3><p>Plants covered and wet down, windows closed, then the right method for each surface — soft wash or surface cleaner.</p></li>
      <li><span class="steps__n">03</span><h3>Walk it with us</h3><p>We walk the property together, fix anything you spot, and leave the before-and-after photos with the invoice.</p></li>
    </ol>
    <a class="link" href="process/">More about the process <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
  </div>
</section>

<section class="sec sec--sand area">
  <div class="shell area__grid">
    <div>
      <span class="label">06 — Where we work</span>
      <h2>Greater Houston,<br><em>and around it.</em></h2>
      <p>Based in the Houston metro and working the surrounding communities. If you are just outside the list, call — the answer is usually yes.</p>
      <a class="foot__tel foot__tel--big" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
    </div>
    <ul class="area__list">
      ${S.towns.map((t) => `<li>${t}</li>`).join('')}
    </ul>
  </div>
</section>

${ctaBand(0)}
`;

page({
  d: 0,
  title: `ProSoft of Texas | Soft & Pressure Washing in Houston`,
  desc: 'Soft washing, pressure washing, window cleaning and gutters across Greater Houston. Owner-operated, free written estimates. Let us make your home POP.',
  canonical: '',
  og: 'hero.webp',
  active: 'home',
  jsonld: {
    '@context': 'https://schema.org',
    '@graph': [biz(), {
      '@type': 'WebSite',
      '@id': ORIGIN + '/#website',
      url: ORIGIN + '/',
      name: S.name,
      publisher: { '@id': ORIGIN + '/#business' },
    }],
  },
}, home);

/* ------------------------------------------------------------------ */
/* services                                                            */
/* ------------------------------------------------------------------ */

const servicesBody = `
<section class="phero">
  <div class="shell phero__grid">
    <div>
      <span class="label">Services</span>
      <h1>Six services.<br>One <em>standard.</em></h1>
      <p>Soft washing, pressure washing, windows, gutters, concrete and commercial exteriors across ${S.area}.</p>
      <a class="phero__tel" href="${S.telHref}"><svg class="ico" aria-hidden="true"><use href="#i-tel"/></svg>${S.tel}</a>
    </div>
    <figure class="phero__fig"><img src="assets/opt/work-02.webp" alt="House washing in Greater Houston" width="${M['work-02'].w}" height="${M['work-02'].h}" fetchpriority="high" decoding="async"></figure>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <div class="cmp">
      <div class="cmp__head">
        <span class="label">Choose the method</span>
        <h2>Soft wash or<br><em>pressure wash?</em></h2>
        <p class="cmp__intro">Both clean. Only one is safe for a finished surface.</p>
      </div>
      <div class="cmp__grid">
        <div class="cmp__col">
          <span class="cmp__ico" aria-hidden="true"><svg class="ico"><use href="#i-drop"/></svg></span>
          <h3>Soft wash</h3>
          <p class="mono">Low pressure + solution</p>
          <ul>
            <li>Siding, stucco, brick and painted wood</li>
            <li>Roofs and shingles</li>
            <li>Fences and decks</li>
            <li>Anything with a finish to protect</li>
          </ul>
        </div>
        <div class="cmp__col">
          <span class="cmp__ico" aria-hidden="true"><svg class="ico"><use href="#i-spray"/></svg></span>
          <h3>Pressure wash</h3>
          <p class="mono">Higher pressure + surface cleaner</p>
          <ul>
            <li>Concrete driveways and sidewalks</li>
            <li>Pavers and aggregate</li>
            <li>Patios and pool decks</li>
            <li>Surfaces with no finish to damage</li>
          </ul>
        </div>
      </div>
      <p class="cmp__note">We name the method in the quote, so there is no surprise about how your house will be cleaned.</p>
    </div>
  </div>
</section>

${SERVICES.map((s, i) => `<section class="sec ${i % 2 ? 'sec--sand' : ''} svcsec" id="${s.slug}">
  <div class="shell svcsec__grid">
    <div class="svcsec__media">
      <figure class="plate"><img src="assets/opt/${s.img}.webp" alt="${esc(s.alt)}" width="${M[s.img].w}" height="${M[s.img].h}" loading="lazy" decoding="async"></figure>
      <span class="svcsec__num mono">${s.n}</span>
    </div>
    <div class="svcsec__body">
      <span class="label">${s.n} — ${s.kicker}</span>
      <h2>${s.lede}</h2>
      ${s.body.map((p) => `<p>${p}</p>`).join('\n      ')}
      <ul class="ticks ticks--two">${s.includes.map((x) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${x}</li>`).join('')}</ul>
      <div class="svcsec__foot">
        <a class="btn btn--navy" href="${url(1, 'contact/')}">Price this service <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
        <span class="mono">${esc(s.best)}</span>
      </div>
    </div>
  </div>
</section>`).join('\n')}

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Exterior Cleaning Services in Houston | ${S.name}`,
  desc: 'Soft washing, pressure washing, window cleaning, gutter cleaning, concrete and commercial exterior cleaning across Greater Houston, Texas.',
  canonical: 'services/',
  og: 'work-02.webp',
  active: 'services',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Services', 'services/']]), {
    '@type': 'ItemList',
    itemListElement: SERVICES.map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.title, url: `${ORIGIN}/services/#${s.slug}` })),
  }] },
}, servicesBody);

/* ------------------------------------------------------------------ */
/* work                                                                */
/* ------------------------------------------------------------------ */

const workBody = `
<section class="phero phero--work">
  <div class="shell">
    <span class="label">Recent work</span>
    <h1>Twelve properties.<br>One <em>standard.</em></h1>
    <p>House washes, roofs, concrete, windows, gutters and commercial exteriors around ${S.area}. Filter by surface, then tap any photo to look closer.</p>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <div class="filters" role="group" aria-label="Filter projects">
      <button class="filters__btn is-on" data-filter="all">All <span class="mono">12</span></button>
      ${[...new Set(WORK.map((w) => w[3]))].map((cat) => `<button class="filters__btn" data-filter="${cat}">${cat[0].toUpperCase() + cat.slice(1)} <span class="mono">${WORK.filter((w) => w[3] === cat).length}</span></button>`).join('\n      ')}
    </div>
    <div class="gal gal--work" data-gallery>
      ${WORK.map(([img, label, town, cat], i) => `<button class="gal__item gal__item--btn" data-cat="${cat}" data-lightbox="${i}" data-full="assets/opt/${M[img].file}" data-label="${esc(label)} · ${esc(town)}" aria-label="Open ${esc(label)} in ${esc(town)}">
        <img src="assets/opt/${M[img].small}" alt="${esc(label)} in ${esc(town)} by ${S.name}" width="${M[img].w}" height="${M[img].h}" loading="lazy" decoding="async">
        <span class="gal__cap"><span class="mono">${String(i + 1).padStart(2, '0')}</span><span>${label} · ${town}</span></span>
      </button>`).join('\n      ')}
    </div>
    <p class="gal__empty mono" hidden>No projects in this category yet.</p>
  </div>
</section>

<div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Project photo" hidden>
  <button class="lb__close" aria-label="Close">×</button>
  <button class="lb__nav lb__prev" aria-label="Previous">‹</button>
  <img class="lb__img" src="assets/opt/${M['work-01'].file}" alt="">
  <button class="lb__nav lb__next" aria-label="Next">›</button>
  <span class="lb__cap mono"></span>
</div>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Recent Exterior Cleaning Projects in Houston | ${S.name}`,
  desc: 'House washing, roof treatment, driveway cleaning, window and gutter projects across Greater Houston by ProSoft of Texas.',
  canonical: 'work/',
  og: 'work-05.webp',
  active: 'work',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Work', 'work/']])] },
}, workBody);

/* ------------------------------------------------------------------ */
/* process                                                             */
/* ------------------------------------------------------------------ */

const processBody = `
<section class="phero phero--process">
  <div class="shell">
    <span class="label">Process</span>
    <h1>From the call<br>to the <em>walkaround.</em></h1>
    <p>Cleaning is simple. Doing it the same way on every property is the hard part — so we made it a checklist.</p>
  </div>
</section>

<section class="sec">
  <div class="shell">
    <ol class="bigsteps">
      <li><span class="mono">01</span><div><h2>Call or send the address</h2><p>Tell us what is bothering you — the siding, the roof streaks, the driveway, the windows, or all of it. Photos help but are not required. We will ask about the surface and the water source before quoting.</p></div></li>
      <li><span class="mono">02</span><div><h2>Walkaround &amp; test patch</h2><p>On site we check the material, test a small area, and look for anything that needs a gentler method — oxidized paint, loose flashing, a deck that has not been sealed in years. The quote is based on what is actually there.</p></div></li>
      <li><span class="mono">03</span><div><h2>Protect, then clean</h2><p>Plants are covered and wet down, windows closed, electrical fixtures checked. Then the work: soft wash on the house and roof, surface cleaner on concrete, low pressure on wood, and a rinse on everything that should not have soap left on it.</p></div></li>
      <li><span class="mono">04</span><div><h2>Walk it with us</h2><p>Before we pack up, we walk the property with you. Anything you spot gets fixed while we are still there, and you get the before-and-after photos by email or text. No deposit, payment when you are happy.</p></div></li>
    </ol>
  </div>
</section>

<section class="sec sec--sand">
  <div class="shell two">
    <div>
      <span class="label">What we protect</span>
      <h2>The house is not<br>the only thing <em>on site.</em></h2>
      <p>Landscaping, pets, outdoor furniture, grills, light fixtures and the neighbour's car — all of it gets considered before water starts moving. Plants are wet down before and rinsed after, and anything delicate gets covered.</p>
      <p>If a surface should not be pressure washed, we say so. A soft wash on a roof or a deck is not a shortcut; it is the correct method.</p>
    </div>
    <figure class="frame"><img src="assets/opt/work-05.webp" alt="Protected patio during exterior cleaning" width="${M['work-05'].w}" height="${M['work-05'].h}" loading="lazy" decoding="async"><figcaption class="mono">Covered, rinsed, walked</figcaption></figure>
  </div>
</section>

<section class="sec">
  <div class="shell faqmini">
    <span class="label">Good to know</span>
    <h2>Questions we get<br>before <em>booking.</em></h2>
    <div class="faqmini__grid">
      <div><h3>Do you need my water?</h3><p>Yes, a standard outdoor spigot is ideal. If water access is limited, tell us when you call and we will plan around it.</p></div>
      <div><h3>How long does it take?</h3><p>A house wash is usually two to four hours. A roof treatment is similar. Driveways, windows and gutters depend on size.</p></div>
      <div><h3>Will plants be harmed?</h3><p>They are covered and wet down before we start and rinsed after. The mixes we use are diluted for exterior surfaces, not vegetation.</p></div>
      <div><h3>What about rain?</h3><p>Light rain does not stop a house wash. If weather would affect the finish or safety, we reschedule at no cost.</p></div>
    </div>
    <a class="btn btn--navy" href="${url(1, 'contact/')}">Ask us directly <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Our Exterior Cleaning Process | ${S.name}`,
  desc: 'How ProSoft of Texas works: walkaround and test patch, written quote, protection, the right method for each surface, and a final walkaround.',
  canonical: 'process/',
  og: 'work-05.webp',
  active: 'process',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Process', 'process/']])] },
}, processBody);

/* ------------------------------------------------------------------ */
/* about                                                               */
/* ------------------------------------------------------------------ */

const aboutBody = `
<section class="phero phero--about">
  <div class="shell phero__grid">
    <div>
      <span class="label">About</span>
      <h1>Owner-operated.<br>Houston <em>proud.</em></h1>
      <p>ProSoft of Texas is ${S.owner}'s company, working across ${S.area}.</p>
    </div>
    <figure class="phero__fig phero__fig--portrait"><img src="assets/opt/about.webp" alt="Charlie Dwiggins, ProSoft of Texas" width="${M.about.w}" height="${M.about.h}" fetchpriority="high" decoding="async"></figure>
  </div>
</section>

<section class="sec">
  <div class="shell about__grid">
    <div class="about__lead">
      <span class="label">The standard</span>
      <h2>“Let us make your<br>home <em>POP”</em> is a promise.</h2>
      <p class="lead">It means the house looks better from the street, the concrete looks even, the windows actually let light in, and nothing you care about got damaged along the way.</p>
      <p>Charlie started ProSoft to do exterior cleaning properly: soft washing where pressure would cause damage, surface cleaning where it produces an even finish, and a written scope so the price does not move halfway through the day.</p>
      <p>The company works with homeowners, realtors, property managers and small commercial sites. Residential and commercial, one property or a recurring schedule. You deal with the owner, and the owner is on site.</p>
    </div>
    <figure class="about__fig plate"><img src="assets/opt/detail.webp" alt="Exterior cleaning detail" width="${M.detail.w}" height="${M.detail.h}" loading="lazy" decoding="async"><figcaption class="mono">Detail work · Greater Houston</figcaption></figure>
  </div>
</section>

<section class="sec sec--sand">
  <div class="shell">
    <div class="sechead"><span class="label">What we hold to</span><h2>Four rules on<br>every <em>property.</em></h2></div>
    <ul class="rules">
      <li><span class="mono">01</span><h3>Test before you treat</h3><p>A small patch tells us more than a phone description. It is how we avoid bleaching a finish or etching a surface.</p></li>
      <li><span class="mono">02</span><h3>Protect the surroundings</h3><p>Plants, furniture, pets and neighbours. Water goes where it is supposed to and nowhere else.</p></li>
      <li><span class="mono">03</span><h3>Name the method</h3><p>The quote says soft wash or pressure wash, and why. You should not have to guess what will happen to your siding.</p></li>
      <li><span class="mono">04</span><h3>Walk it before you pay</h3><p>The job is finished when you have walked it and anything you spotted has been fixed. Not when the truck pulls away.</p></li>
    </ul>
  </div>
</section>

<section class="sec">
  <div class="shell two two--rev">
    <figure class="frame"><img src="assets/opt/work-07.webp" alt="Commercial exterior cleaning in Houston" width="${M['work-07'].w}" height="${M['work-07'].h}" loading="lazy" decoding="async"><figcaption class="mono">Commercial exterior · Houston</figcaption></figure>
    <div>
      <span class="label">Residential &amp; commercial</span>
      <h2>The same crew.<br>The same <em>standard.</em></h2>
      <p>Homes get the careful version. Commercial properties get the same careful version on a schedule — storefronts, sidewalks, dumpster pads and building washes, early morning or after close.</p>
      <p>If you manage multiple properties, ask about a recurring scope. One point of contact, a photo record after each visit, and a calendar that does not slip.</p>
      <a class="btn btn--navy" href="${url(1, 'contact/')}">Talk about a property <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
    </div>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `About ProSoft of Texas | Houston Exterior Cleaning`,
  desc: 'Meet ProSoft of Texas — owner-operated by Charlie Dwiggins, serving Greater Houston with soft washing, pressure washing, windows and gutters.',
  canonical: 'about/',
  og: 'about.webp',
  active: 'about',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['About', 'about/']]), {
    '@type': 'Person',
    name: S.owner,
    jobTitle: 'Owner',
    worksFor: { '@id': `${ORIGIN}/#business` },
  }] },
}, aboutBody);

/* ------------------------------------------------------------------ */
/* contact                                                             */
/* ------------------------------------------------------------------ */

const contactBody = `
<section class="phero phero--contact">
  <div class="shell">
    <span class="label">Contact</span>
    <h1>Send us the<br><em>address.</em></h1>
    <p>Call for the fastest answer, or send the form with a photo. Estimates are free and written.</p>
  </div>
</section>

<section class="sec">
  <div class="shell contact__grid">
    <form class="form" action="../thank-you/" method="get" data-quote>
      <div class="form__row">
        <label>Name<input type="text" name="name" autocomplete="name" required placeholder="Your name"></label>
        <label>Phone<input type="tel" name="phone" autocomplete="tel" required placeholder="(281) 555-0123"></label>
      </div>
      <label>Property address<input type="text" name="address" autocomplete="street-address" placeholder="Street, city"></label>
      <div class="form__row">
        <label>Service
          <select name="service">
            ${SERVICES.map((s) => `<option>${s.title}</option>`).join('\n            ')}
            <option>Not sure yet</option>
          </select>
        </label>
        <label>Timeline
          <select name="timeline">
            <option>As soon as possible</option>
            <option>Within two weeks</option>
            <option>This month</option>
            <option>Just planning</option>
          </select>
        </label>
      </div>
      <label>About the property<textarea name="message" rows="5" placeholder="Single storey or two? Vinyl, brick or stucco? What needs cleaning, and anything we should know."></textarea></label>
      <button class="btn btn--navy btn--lg" type="submit">Request my free quote <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></button>
      <p class="form__fine mono">Free estimate · no deposit · reply the same or next business day</p>
    </form>

    <aside class="contact__aside">
      <a class="cbox cbox--aqua" href="${S.telHref}">
        <span class="mono">Fastest answer</span>
        <strong>${S.tel}</strong>
        <span>Call or text Charlie directly</span>
      </a>
      <div class="cbox">
        <h3>Where we work</h3>
        <p>${S.towns.join(' · ')}, and the surrounding ${S.area} communities.</p>
      </div>
      <div class="cbox">
        <h3>What to send</h3>
        <p>A photo of the surface and the rough size is enough for a first number. We confirm on site with a test patch.</p>
      </div>
      <div class="cbox cbox--navy">
        <h3>Residential &amp; commercial</h3>
        <p>Property managers and business owners: ask about recurring schedules and after-hours work.</p>
        <span class="mono">Owner · ${S.name}</span>
      </div>
    </aside>
  </div>
</section>

${ctaBand(1)}
`;

page({
  d: 1,
  title: `Contact ProSoft of Texas | Free Houston Estimate`,
  desc: `Request a free exterior cleaning estimate in Greater Houston. Call ${S.tel} or send the form for a written quote.`,
  canonical: 'contact/',
  og: 'hero.webp',
  active: 'contact',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz(), crumbs([['Contact', 'contact/']])] },
}, contactBody);

/* ------------------------------------------------------------------ */
/* thank you + 404                                                     */
/* ------------------------------------------------------------------ */

const thanksBody = `
<section class="thanks">
  <div class="shell thanks__in">
    <span class="label">Request received</span>
    <h1>Got it.<br>We will <em>call you.</em></h1>
    <p>Thanks — your quote request is in. Charlie will reply the same or next business day to book the walkaround. If it is urgent, call ${S.tel}.</p>
    <div class="thanks__acts">
      <a class="btn btn--navy" href="${url(1, '')}">Back to home <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a class="btn btn--ghost" href="${S.telHref}">${S.tel}</a>
    </div>
  </div>
</section>
`;

page({
  d: 1,
  title: `Request received | ${S.name}`,
  desc: 'Your exterior cleaning quote request has been received. ProSoft of Texas will reply the same or next business day.',
  canonical: 'thank-you/',
  og: 'hero.webp',
  active: '',
  jsonld: { '@context': 'https://schema.org', '@graph': [biz()] },
}, thanksBody);

const notFoundBody = `
<section class="thanks">
  <div class="shell thanks__in">
    <span class="label">404</span>
    <h1>This page<br>needs a <em>rinse.</em></h1>
    <p>The link may be old or mistyped. Head back to the home page, or call and we will point you the right way.</p>
    <div class="thanks__acts">
      <a class="btn btn--navy" href="/${REPO}/">Back to home <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      <a class="btn btn--ghost" href="/${REPO}/contact/">Contact us</a>
    </div>
  </div>
</section>
`;

{
  const html = head({
    d: 0,
    title: `Page not found | ${S.name}`,
    desc: 'That page could not be found.',
    canonical: '404.html',
    og: 'hero.webp',
    base: `/${REPO}/`,
    jsonld: JSON.stringify({ '@context': 'https://schema.org', '@graph': [biz()] }),
  }).replace('<meta name="description"', '<meta name="robots" content="noindex">\n<meta name="description"');
  fs.writeFileSync(path.join(ROOT, '404.html'), `${html}
<main id="main">${notFoundBody}</main>
${foot(0)}
<script src="/${REPO}/script.js" defer></script>
</body>
</html>
`);
  console.log('wrote 404.html');
}

/* ------------------------------------------------------------------ */
/* sitemap, robots, llms, .nojekyll                                    */
/* ------------------------------------------------------------------ */

const routes = [['', '1.0', 'monthly'], ['services/', '0.9', 'monthly'], ['work/', '0.8', 'monthly'], ['process/', '0.7', 'yearly'], ['about/', '0.7', 'yearly'], ['contact/', '0.9', 'yearly']];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([p, pr, f]) => `  <url><loc>${ORIGIN}/${p}</loc><changefreq>${f}</changefreq><priority>${pr}</priority></url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${ORIGIN}/sitemap.xml\n`);
fs.writeFileSync(path.join(ROOT, 'llms.txt'), `# ${S.name}\nSoft washing, pressure washing, window cleaning, gutter cleaning, concrete and commercial exterior cleaning across Greater Houston, Texas. Phone ${S.tel}.\n\n## Pages\n- Home: ${ORIGIN}/\n- Services: ${ORIGIN}/services/\n- Work: ${ORIGIN}/work/\n- Process: ${ORIGIN}/process/\n- About: ${ORIGIN}/about/\n- Contact: ${ORIGIN}/contact/\n`);
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
console.log('wrote sitemap.xml, robots.txt, llms.txt, .nojekyll');
