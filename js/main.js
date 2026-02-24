/* ============================================
   DANIEL SERRA FONT — Portfolio JS
   ============================================ */

/* ── Language Data ── */
const i18n = {
  es: {
    nav_projects:      'Proyectos',
    nav_about:         'Sobre mí',
    nav_services:      'Servicios',
    nav_publications:  'Publicaciones',
    nav_awards:        'Premios',
    nav_blog:          'Blog',
    nav_contact:       'Contacto',
    sidebar_title:     'Proyectos',
    filter_all:        'Todos',
    filter_pgm:        'Planeamiento',
    filter_urban:      'Urbanismo',
    meta_year:         'Año',
    meta_client:       'Cliente',
    meta_role:         'Rol',
    meta_status:       'Estado',
    tasks_led:         'Tareas lideradas',
    tasks_part:        'Participación',
    view_project:      'Ver proyecto completo',
    click_hint:        'Selecciona un proyecto para ver los detalles',
    lang_btn:          'EN',
  },
  en: {
    nav_projects:      'Projects',
    nav_about:         'About',
    nav_services:      'Services',
    nav_publications:  'Publications',
    nav_awards:        'Awards',
    nav_blog:          'Blog',
    nav_contact:       'Contact',
    sidebar_title:     'Projects',
    filter_all:        'All',
    filter_pgm:        'Planning',
    filter_urban:      'Urban Design',
    meta_year:         'Year',
    meta_client:       'Client',
    meta_role:         'Role',
    meta_status:       'Status',
    tasks_led:         'Tasks led',
    tasks_part:        'Participation',
    view_project:      'View full project',
    click_hint:        'Select a project to view details',
    lang_btn:          'ES',
  }
};

/* ── Projects Data ── */
const projects = [
  {
    id: 'parque-elche',
    filter: 'urban',
    year: '2019 – 2025',
    name_es: 'Ampliación del Parque Empresarial de Elche · Sector E-49',
    name_en: 'Expansion of Elche Business Park · Sector E-49',
    client_es: 'Ayuntamiento de Elche / PIMESA',
    client_en: 'Elche City Council / PIMESA',
    role_es: 'Técnico redactor — Tramitación íntegra',
    role_en: 'Lead Drafting Technician — Full processing',
    status_es: 'Tramitación finalizada · Obras 2026',
    status_en: 'Processing complete · Works 2026',
    description_es: 'Ampliación de casi 600.000 m² del Parque Empresarial de Elche (sector E-49), uno de los proyectos de desarrollo de suelo productivo más relevantes de la provincia de Alicante. La actuación supone un incremento del 25% sobre la superficie actual del parque y una inversión estimada de 40 millones de euros en urbanización. El proyecto responde a la necesidad del municipio de generar nuevo suelo industrial de gran formato para atraer implantaciones de primer nivel, ante la saturación del parcelario existente. La Estrategia Territorial de la Comunitat Valenciana reconoce el Parque Empresarial de Elche como ámbito estratégico del territorio.',
    description_en: 'Expansion of nearly 600,000 m² of the Elche Business Park (sector E-49), one of the most significant productive land development projects in the province of Alicante. The action represents a 25% increase over the current park area and an estimated investment of 40 million euros in urbanisation. The project responds to the municipality\'s need to generate new large-format industrial land to attract top-tier companies, given the saturation of the existing plots. The Territorial Strategy of the Valencian Community recognises the Elche Business Park as a strategic area of the territory.',
    tasks_led_es: [
      'Tramitación de la Modificación Estructural del Plan General de Ordenación Urbana para la transformación de suelo no urbanizable en urbanizable (aprobada por la Comisión Territorial de Urbanismo en 2021)',
      'Redacción y tramitación del Plan Parcial del sector E-49',
      'Redacción y tramitación del Plan de Ordenación Pormenorizada',
      'Gestiones ambientales: coordinación con organismos sectoriales y tramitación de informes de evaluación ambiental',
      'Elaboración de toda la documentación técnica y jurídica del expediente urbanístico',
    ],
    tasks_led_en: [
      'Processing of the Structural Modification of the General Urban Plan to transform non-developable land into developable land (approved by the Territorial Urban Planning Commission in 2021)',
      'Drafting and processing of the Partial Plan for sector E-49',
      'Drafting and processing of the Detailed Planning Order',
      'Environmental management: coordination with sectoral bodies and processing of environmental assessment reports',
      'Preparation of all technical and legal documentation for the urban planning file',
    ],
    tasks_part_es: [
      'Coordinación continua con el equipo técnico de PIMESA y los servicios de urbanismo del Ayuntamiento de Elche',
      'Seguimiento del Programa de Actuación Integrado (PAI) y del proyecto de reparcelación',
    ],
    tasks_part_en: [
      'Ongoing coordination with PIMESA technical team and Elche City Council urban planning services',
      'Follow-up on the Integrated Action Programme (PAI) and the land redistribution project',
    ],
    link: 'https://www.elche.es/2025/06/elche-impulsa-la-ampliacion-del-parque-empresarial-con-415-millones-de-euros-de-inversion/',
    images: 3,
    gradient: 'linear-gradient(135deg, #1c1c1c 0%, #2a2a2a 50%, #1a1a1a 100%)',
  },
  {
    id: 'pgm-javea',
    filter: 'pgm',
    year: '2017 – 2021',
    name_es: 'Plan General de Jávea',
    name_en: 'Jávea General Urban Plan',
    client_es: 'Ayuntamiento de Jávea / Xàbia',
    client_en: 'Jávea / Xàbia City Council',
    role_es: 'Técnico redactor',
    role_en: 'Drafting Technician',
    status_es: 'En tramitación',
    status_en: 'In process',
    description_es: 'Redacción del Plan General Municipal de Jávea (Xàbia), municipio costero de la Marina Alta con una fuerte presión urbanística y un elevado valor paisajístico y medioambiental. El plan afronta el reto de compatibilizar el desarrollo sostenible del municipio con la protección de los espacios naturales, el litoral y el patrimonio cultural, adaptando el modelo urbano existente a los retos del siglo XXI.',
    description_en: 'Drafting of the Municipal General Plan for Jávea (Xàbia), a coastal municipality in the Marina Alta comarca with significant urban development pressure and high landscape and environmental value. The plan faces the challenge of reconciling sustainable municipal development with the protection of natural spaces, the coastline, and cultural heritage.',
    tasks_led_es: ['Análisis urbanístico y diagnóstico del modelo territorial', 'Redacción de la normativa urbanística y fichas de zonas', 'Elaboración del Estudio de Paisaje', 'Coordinación del equipo multidisciplinar'],
    tasks_led_en: ['Urban analysis and territorial model diagnosis', 'Drafting of urban regulations and zone sheets', 'Landscape Study preparation', 'Coordination of the multidisciplinary team'],
    tasks_part_es: ['Informes de sostenibilidad ambiental', 'Reuniones de participación ciudadana', 'Gestión documental ante organismos sectoriales'],
    tasks_part_en: ['Environmental sustainability reports', 'Citizen participation meetings', 'Document management with sectoral bodies'],
    link: 'https://www.xabia.org/urbanisme',
    images: 3,
    gradient: 'linear-gradient(135deg, #1e1e2a 0%, #2a2a3a 50%, #1a1a24 100%)',
  },
  {
    id: 'pgm-torrent',
    filter: 'pgm',
    year: '2017 – 2022',
    name_es: 'Plan General de Torrent',
    name_en: 'Torrent General Urban Plan',
    client_es: 'Ayuntamiento de Torrent',
    client_en: 'Torrent City Council',
    role_es: 'Técnico redactor',
    role_en: 'Drafting Technician',
    status_es: 'En tramitación',
    status_en: 'In process',
    description_es: 'Revisión y adaptación del planeamiento general del municipio de Torrent, uno de los municipios más poblados del área metropolitana de Valencia. El trabajo supone la renovación integral del modelo urbanístico, con especial atención a la definición de los nuevos sectores de crecimiento, la consolidación del suelo urbano existente y la adaptación a la normativa autonómica vigente.',
    description_en: 'Revision and adaptation of the general planning for Torrent, one of the most populated municipalities in the Valencia metropolitan area. The work involves a comprehensive renewal of the urban planning model, with particular attention to defining new growth sectors, consolidating existing urban land, and adapting to current regional regulations.',
    tasks_led_es: ['Diagnóstico urbanístico y análisis de la demanda residencial', 'Redacción de las normas urbanísticas municipales', 'Delimitación y ordenación de nuevos sectores de desarrollo'],
    tasks_led_en: ['Urban diagnosis and residential demand analysis', 'Drafting of municipal urban planning regulations', 'Delimitation and planning of new development sectors'],
    tasks_part_es: ['Coordinación con el área de medio ambiente municipal', 'Informes técnicos sectoriales', 'Proceso de participación pública'],
    tasks_part_en: ['Coordination with the municipal environment department', 'Sectoral technical reports', 'Public participation process'],
    link: 'https://www.torrent.es/urbanisme',
    images: 3,
    gradient: 'linear-gradient(135deg, #1a1f1e 0%, #242b2a 50%, #161b1a 100%)',
  },
  {
    id: 'pge-segart',
    filter: 'pgm',
    year: '2020 – 2023',
    name_es: 'Plan General Estructural de Segart',
    name_en: 'Segart Structural General Plan',
    client_es: 'Ayuntamiento de Segart',
    client_en: 'Segart City Council',
    role_es: 'Técnico redactor',
    role_en: 'Drafting Technician',
    status_es: 'Redacción',
    status_en: 'Drafting',
    description_es: 'Redacción del Plan General Estructural del municipio de Segart, pequeño municipio del interior valenciano del Camp de Morvedre, adaptado a los requisitos de la nueva Ley Urbanística Valenciana (LOTUP). El plan define el modelo territorial y los grandes sistemas estructurales del municipio, sentando las bases para el desarrollo urbanístico sostenible.',
    description_en: 'Drafting of the Structural General Plan for the municipality of Segart, a small inland Valencian municipality in the Camp de Morvedre area, adapted to the requirements of the new Valencian Urban Planning Law (LOTUP). The plan defines the territorial model and main structural systems of the municipality.',
    tasks_led_es: ['Redacción íntegra del documento de Plan General Estructural', 'Elaboración de la cartografía y planos', 'Memoria justificativa y normativa'],
    tasks_led_en: ['Full drafting of the Structural General Plan document', 'Cartography and plans preparation', 'Justifying report and regulations'],
    tasks_part_es: ['Tramitación ante la Conselleria de Territorio', 'Coordinación con el equipo de medio ambiente'],
    tasks_part_en: ['Processing with the Ministry of Territory', 'Coordination with the environmental team'],
    link: '#',
    images: 2,
    gradient: 'linear-gradient(135deg, #1e1a18 0%, #2a2420 50%, #1a1614 100%)',
  },
  {
    id: 'pge-gilet',
    filter: 'pgm',
    year: '2020 – 2023',
    name_es: 'Plan General Estructural de Gilet',
    name_en: 'Gilet Structural General Plan',
    client_es: 'Ayuntamiento de Gilet',
    client_en: 'Gilet City Council',
    role_es: 'Técnico redactor',
    role_en: 'Drafting Technician',
    status_es: 'Redacción',
    status_en: 'Drafting',
    description_es: 'Redacción del Plan General Estructural del municipio de Gilet, en el Camp de Morvedre, en el marco de la adaptación al nuevo modelo urbanístico de la LOTUP. El trabajo incluye el análisis del medio físico y socioeconómico del municipio, la definición del modelo territorial de referencia y la ordenación estructural del suelo.',
    description_en: 'Drafting of the Structural General Plan for the municipality of Gilet in Camp de Morvedre, within the framework of adaptation to the new LOTUP urban planning model. The work includes analysis of the physical and socioeconomic environment, the definition of the reference territorial model, and structural land use planning.',
    tasks_led_es: ['Redacción del Plan General Estructural', 'Análisis ambiental y paisajístico', 'Definición de la clasificación y calificación del suelo'],
    tasks_led_en: ['Drafting of the Structural General Plan', 'Environmental and landscape analysis', 'Definition of land classification and qualification'],
    tasks_part_es: ['Tramitación administrativa', 'Reuniones con la corporación municipal'],
    tasks_part_en: ['Administrative processing', 'Meetings with the municipal corporation'],
    link: '#',
    images: 2,
    gradient: 'linear-gradient(135deg, #1a1c1e 0%, #22262a 50%, #161820 100%)',
  },
  {
    id: 'pge-llocnou',
    filter: 'pgm',
    year: '2021 – 2024',
    name_es: 'Plan General Estructural de Llocnou de Sant Jeroni',
    name_en: "Llocnou de Sant Jeroni Structural General Plan",
    client_es: 'Ayuntamiento de Llocnou de Sant Jeroni',
    client_en: "Llocnou de Sant Jeroni City Council",
    role_es: 'Técnico redactor',
    role_en: 'Drafting Technician',
    status_es: 'Redacción',
    status_en: 'Drafting',
    description_es: 'Redacción del Plan General Estructural del municipio de Llocnou de Sant Jeroni, en la comarca de la Safor, en el contexto de la revisión general del planeamiento adaptada a la LOTUP. Municipio de carácter rural con especial valor agrícola y paisajístico, donde el plan busca garantizar la protección del territorio y la cohesión del modelo de asentamiento existente.',
    description_en: "Drafting of the Structural General Plan for Llocnou de Sant Jeroni, in the Safor region, within the context of a comprehensive planning revision adapted to LOTUP. A rural municipality with special agricultural and landscape value, where the plan seeks to guarantee territorial protection and the cohesion of the existing settlement model.",
    tasks_led_es: ['Redacción del Plan General Estructural LOTUP', 'Análisis del paisaje agrícola y natural', 'Propuesta de ordenación estructural'],
    tasks_led_en: ['Drafting of the LOTUP Structural General Plan', 'Agricultural and natural landscape analysis', 'Structural planning proposal'],
    tasks_part_es: ['Coordinación con el equipo técnico', 'Tramitación ante organismos autonómicos'],
    tasks_part_en: ['Coordination with the technical team', 'Processing with regional bodies'],
    link: '#',
    images: 2,
    gradient: 'linear-gradient(135deg, #1a1e1a 0%, #22262a 50%, #161a14 100%)',
  },
];

/* ── State ── */
let currentLang    = 'es';
let activeProject  = null;
let carouselIndex  = 0;

/* ── Helpers ── */
function t(key) { return i18n[currentLang][key] || key; }

function svgArrow() {
  return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>`;
}

/* ── Language Toggle ── */
function initLangToggle() {
  const btn = document.getElementById('lang-toggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentLang = currentLang === 'es' ? 'en' : 'es';
    btn.textContent = t('lang_btn');
    updateAllText();
    if (activeProject) renderProjectDetail(activeProject);
  });
}

function updateAllText() {
  // Nav links
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (t(key)) el.textContent = t(key);
  });
  // Sidebar header
  const sh = document.querySelector('.sidebar-header h2');
  if (sh) sh.textContent = t('sidebar_title');
  // Filter buttons
  const filters = document.querySelectorAll('.filter-btn[data-filter-label]');
  filters.forEach(f => {
    const key = f.dataset.filterLabel;
    if (t(key)) f.textContent = t(key);
  });
  // Project list items
  document.querySelectorAll('.project-list-item').forEach(el => {
    const id = el.dataset.projectId;
    const p = projects.find(x => x.id === id);
    if (!p) return;
    el.querySelector('.project-item-name').textContent = currentLang === 'es' ? p.name_es : p.name_en;
    el.querySelector('.project-item-client').textContent = currentLang === 'es' ? p.client_es : p.client_en;
  });
  // Empty state hint
  const hint = document.querySelector('.detail-empty p');
  if (hint) hint.textContent = t('click_hint');
}

/* ── Sidebar / Project List ── */
function initProjectSidebar() {
  const sidebar = document.getElementById('project-list');
  if (!sidebar) return;

  // render items
  projects.forEach(p => {
    const item = document.createElement('div');
    item.className = 'project-list-item';
    item.dataset.projectId = p.id;
    item.dataset.filter    = p.filter;
    item.innerHTML = `
      <span class="project-item-year">${p.year}</span>
      <span class="project-item-name">${currentLang === 'es' ? p.name_es : p.name_en}</span>
      <span class="project-item-client">${currentLang === 'es' ? p.client_es : p.client_en}</span>
      <div class="project-item-tags">
        <span class="tag led">${currentLang === 'es' ? p.role_es : p.role_en}</span>
      </div>`;
    item.addEventListener('click', () => selectProject(p.id));
    sidebar.appendChild(item);
  });

  // filter buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-list-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.filter === filter) ? '' : 'none';
      });
    });
  });
}

function selectProject(id) {
  activeProject = id;
  carouselIndex = 0;
  document.querySelectorAll('.project-list-item').forEach(el => {
    el.classList.toggle('active', el.dataset.projectId === id);
  });
  const p = projects.find(x => x.id === id);
  if (p) renderProjectDetail(p);
}

/* ── Carousel ── */
function renderCarousel(p) {
  const count = p.images;
  let slidesHTML = '';
  for (let i = 0; i < count; i++) {
    slidesHTML += `
      <div class="carousel-slide">
        <div class="carousel-placeholder" style="background: ${p.gradient};">
          <span class="ph-number">0${i + 1}</span>
          <span class="ph-label">— Add image here —<br>assets/img/${p.id}-${i + 1}.jpg</span>
        </div>
      </div>`;
  }

  let dotsHTML = '';
  for (let i = 0; i < count; i++) {
    dotsHTML += `<div class="carousel-dot ${i === 0 ? 'active' : ''}"></div>`;
  }

  return `
    <div class="carousel-wrapper" id="carousel-wrapper">
      <div class="carousel-track" id="carousel-track">${slidesHTML}</div>
      ${count > 1 ? `
        <button class="carousel-btn prev" onclick="moveCarousel(-1)">&#8592;</button>
        <button class="carousel-btn next" onclick="moveCarousel(1)">&#8594;</button>
        <div class="carousel-counter" id="carousel-counter">01 / 0${count}</div>
        <div class="carousel-dots" id="carousel-dots">${dotsHTML}</div>
      ` : ''}
    </div>`;
}

function moveCarousel(dir) {
  const p = projects.find(x => x.id === activeProject);
  if (!p) return;
  carouselIndex = (carouselIndex + dir + p.images) % p.images;
  const track = document.getElementById('carousel-track');
  if (track) track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  const counter = document.getElementById('carousel-counter');
  if (counter) counter.textContent = `0${carouselIndex + 1} / 0${p.images}`;
  document.querySelectorAll('#carousel-dots .carousel-dot').forEach((d, i) => {
    d.classList.toggle('active', i === carouselIndex);
  });
}

/* ── Project Detail Render ── */
function renderProjectDetail(p) {
  const container = document.getElementById('project-detail');
  if (!container) return;

  const name  = currentLang === 'es' ? p.name_es  : p.name_en;
  const desc  = currentLang === 'es' ? p.description_es  : p.description_en;
  const client= currentLang === 'es' ? p.client_es : p.client_en;
  const role  = currentLang === 'es' ? p.role_es   : p.role_en;
  const status= currentLang === 'es' ? p.status_es : p.status_en;
  const led   = currentLang === 'es' ? p.tasks_led_es : p.tasks_led_en;
  const part  = currentLang === 'es' ? p.tasks_part_es : p.tasks_part_en;

  const ledItems  = led.map(x => `<div class="task-item">${x}</div>`).join('');
  const partItems = part.map(x => `<div class="task-item">${x}</div>`).join('');

  const linkText = t('view_project');
  const linkEl = p.link && p.link !== '#'
    ? `<a href="${p.link}" target="_blank" rel="noopener" class="project-link">${linkText} ${svgArrow()}</a>`
    : `<span class="project-link" style="opacity:0.4;cursor:default;">${linkText} ${svgArrow()}</span>`;

  container.innerHTML = `
    ${renderCarousel(p)}
    <div class="project-info fade-up">
      <div class="project-meta-grid">
        <div class="meta-item">
          <span class="meta-label">${t('meta_year')}</span>
          <span class="meta-value">${p.year}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">${t('meta_client')}</span>
          <span class="meta-value">${client}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">${t('meta_role')}</span>
          <span class="meta-value role-badge">${role}</span>
        </div>
        <div class="meta-item">
          <span class="meta-label">${t('meta_status')}</span>
          <span class="meta-value">${status}</span>
        </div>
      </div>
      <div class="project-title-block">
        <h1>${name}</h1>
      </div>
      <p class="project-description">${desc}</p>
      <div class="tasks-section led">
        <h3>${t('tasks_led')}</h3>
        <div class="tasks-list">${ledItems}</div>
      </div>
      <div class="tasks-section">
        <h3>${t('tasks_part')}</h3>
        <div class="tasks-list">${partItems}</div>
      </div>
      ${linkEl}
    </div>`;
}

/* ── Contact Form ── */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = '...';
    btn.disabled = true;
    setTimeout(() => {
      const success = document.getElementById('form-success');
      if (success) { success.style.display = 'flex'; }
      form.reset();
      btn.textContent = currentLang === 'es' ? 'Enviar mensaje' : 'Send message';
      btn.disabled = false;
    }, 1200);
  });
}

/* ── Skill Bars Animation ── */
function initSkillBars() {
  const fills = document.querySelectorAll('.skill-bar-fill');
  if (!fills.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.style.getPropertyValue('--w') || entry.target.dataset.w || '80%';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  fills.forEach(f => obs.observe(f));
}

/* ── Active Nav Link ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    a.classList.toggle('active', href === path || (path === '' && href === 'index.html'));
  });
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initLangToggle();
  initProjectSidebar();
  initContactForm();
  initSkillBars();
  setActiveNav();

  // Keyboard carousel navigation
  document.addEventListener('keydown', e => {
    if (!activeProject) return;
    if (e.key === 'ArrowLeft')  moveCarousel(-1);
    if (e.key === 'ArrowRight') moveCarousel(1);
  });
});
