/* ═══════════════════════════════════════════════════════
   DANIEL SERRA FONT — main.js
   Project data + i18n + shared utilities
═══════════════════════════════════════════════════════ */

const PROJECTS = [
  {
    id: 'elche', filter: 'urban', abbr: 'E-49',
    lat: 38.2699, lng: -0.6970,
    name_es: 'Ampliación del Parque Empresarial de Elche · Sector E-49',
    name_en: 'Expansion of Elche Business Park · Sector E-49',
    subtitle_es: 'Elche · Alicante', subtitle_en: 'Elche · Alicante',
    year: '2019 – 2025',
    client_es: 'Ayuntamiento de Elche / PIMESA', client_en: 'Elche City Council / PIMESA',
    role_es: 'Técnico redactor — Tramitación íntegra', role_en: 'Lead Drafting Technician — Full processing',
    area_es: '~600.000 m²  ·  40M€ inversión', area_en: '~600,000 m²  ·  €40M investment',
    tag_es: 'Suelo Productivo', tag_en: 'Productive Land',
    accent: '#c8a96e', gradA: '#1c1a14', gradB: '#2e2a1c', images: 3,
    desc_es: 'Ampliación de casi 600.000 m² del Parque Empresarial de Elche (sector E-49), uno de los proyectos de desarrollo de suelo productivo más relevantes de la provincia de Alicante. La actuación supone un incremento del 25% sobre la superficie actual del parque con una inversión estimada de 40 millones de euros en urbanización.\n\nEl proyecto responde a la necesidad del municipio de generar nuevo suelo industrial de gran formato para atraer implantaciones de primer nivel, ante la saturación del parcelario existente. La Estrategia Territorial de la Comunitat Valenciana reconoce el Parque Empresarial de Elche como ámbito estratégico del territorio.',
    desc_en: 'Expansion of nearly 600,000 m² of the Elche Business Park (sector E-49), one of the most significant productive land development projects in the province of Alicante. The action represents a 25% increase over the current park area with an estimated investment of 40 million euros in urbanisation.\n\nThe project responds to the need to generate new large-format industrial land to attract top-tier companies. The Territorial Strategy of the Valencian Community recognises the Elche Business Park as a strategic territory.',
    led_es: ['Tramitación de la Modificación Estructural del PGOU para transformación de suelo no urbanizable en urbanizable (aprobada por la CTU en 2021)', 'Redacción y tramitación del Plan Parcial del sector E-49', 'Redacción y tramitación del Plan de Ordenación Pormenorizada', 'Gestiones ambientales: coordinación con organismos sectoriales y tramitación de informes de evaluación ambiental', 'Elaboración de toda la documentación técnica y jurídica del expediente urbanístico'],
    led_en: ['Processing of the Structural Modification of the General Urban Plan (approved by the CTU in 2021)', 'Drafting and processing of the Partial Plan for sector E-49', 'Drafting and processing of the Detailed Planning Order', 'Environmental management: coordination with sectoral bodies', 'Preparation of all technical and legal documentation'],
    part_es: ['Coordinación continua con el equipo técnico de PIMESA y los servicios de urbanismo del Ayuntamiento', 'Seguimiento del PAI y del proyecto de reparcelación'],
    part_en: ['Ongoing coordination with PIMESA technical team and City Council urban planning services', 'Follow-up on the Integrated Action Programme (PAI)'],
    press: [
      { source: 'elche.es', date: 'Jun 2025', title: 'Elche impulsa la ampliación del Parque Empresarial con 41,5 millones de euros de inversión', url: 'https://www.elche.es/2025/06/elche-impulsa-la-ampliacion-del-parque-empresarial-con-415-millones-de-euros-de-inversion/' },
      { source: 'Alicante Plaza', date: 'Nov 2025', title: 'Elche no espera iniciar la ampliación del Parque Empresarial hasta septiembre de 2026', url: 'https://alicanteplaza.es/alicanteplaza/elcheplaza/elche-no-espera-iniciar-la-ampliacion-del-parque-empresarial-hasta-septiembre-de-2026' },
      { source: 'Gestores Públicos', date: 'Jul 2021', title: 'El Parque Empresarial de Elche contará con una ampliación de 600.000 metros cuadrados', url: 'https://gestorespublicos.org/noticias/ver/el-parque-empresarial-de-elche-contar%C3%A1-con-una-ampliaci%C3%B3n-de-600-000-metros-cuadrados' },
    ],
    link: 'https://www.elche.es',
  },
  {
    id: 'javea', filter: 'pgm', abbr: 'PGE',
    lat: 38.7891, lng: 0.1659,
    name_es: 'Plan General Estructural de Jávea / Xàbia',
    name_en: 'Structural General Plan of Jávea / Xàbia',
    subtitle_es: 'Jávea · Marina Alta · Alicante', subtitle_en: 'Jávea · Marina Alta · Alicante',
    year: '2017 – 2021',
    client_es: 'Ayuntamiento de Jávea', client_en: 'Jávea City Council',
    role_es: 'Técnico redactor', role_en: 'Drafting Technician',
    area_es: '144 informes sectoriales favorables', area_en: '144 favourable sectoral reports',
    tag_es: 'Planeamiento General', tag_en: 'General Planning',
    accent: '#9ab8a4', gradA: '#0e1a18', gradB: '#182824', images: 3,
    desc_es: 'Plan General Estructural para el municipio costero de Jávea (Marina Alta), con fuerte presión urbanística y alto valor paisajístico y medioambiental. El plan protege 10 millones de m² hasta ahora urbanizables y define el modelo territorial para las próximas dos décadas.\n\nEl expediente acumuló 144 informes sectoriales favorables de organismos autonómicos y estatales, paso previo a la emisión de la Declaración Ambiental Territorial Estratégica (DATE) por parte de la Conselleria de Territori i Habitatge.',
    desc_en: 'Structural General Plan for the coastal municipality of Jávea (Marina Alta), with strong urban pressure and high landscape and environmental value. The plan protects 10 million m² previously designated as developable land.\n\nThe file accumulated 144 favourable sectoral reports from regional and state bodies, as a prior step to the issuance of the Strategic Territorial Environmental Declaration (DATE).',
    led_es: ['Diagnóstico urbanístico y análisis del modelo territorial', 'Redacción de la normativa urbanística y fichas de zonas', 'Elaboración del Estudio de Paisaje con simulaciones visuales de integración paisajística', 'Coordinación del equipo multidisciplinar a lo largo de todo el proceso'],
    led_en: ['Urban diagnosis and territorial model analysis', 'Drafting of urban planning regulations and zoning sheets', 'Preparation of the Landscape Study with visual integration simulations', 'Coordination of the multidisciplinary team throughout the process'],
    part_es: ['Elaboración de informes de sostenibilidad ambiental', 'Tramitación ante la Conselleria de Territori i Habitatge'],
    part_en: ['Environmental sustainability reports', 'Processing before the Regional Ministry'],
    press: [
      { source: 'Javea.com', date: 'May 2023', title: 'El urbanismo de Xàbia da un paso y se pone a las puertas de aprobar el Plan General Estructural', url: 'https://www.javea.com/el-urbanismo-de-xabia-da-un-paso-y-se-pone-a-las-puertas-de-aprobar-el-plan-general-estructural/' },
      { source: 'Javea.com', date: 'Abr 2019', title: 'Xàbia aprueba el Plan General Estructural para los próximos 20 años', url: 'https://en.javea.com/xabia-aprueba-el-plan-general-estructural-para-los-proximos-20-anos/' },
    ],
    link: 'https://www.javea.com',
  },
  {
    id: 'torrent', filter: 'pgm', abbr: 'PGT',
    lat: 39.4361, lng: -0.4573,
    name_es: 'Plan General de Torrent',
    name_en: 'General Plan of Torrent',
    subtitle_es: 'Torrent · Área Metropolitana de Valencia', subtitle_en: 'Torrent · Valencia Metropolitan Area',
    year: '2017 – 2022',
    client_es: 'Ayuntamiento de Torrent', client_en: 'Torrent City Council',
    role_es: 'Técnico redactor', role_en: 'Drafting Technician',
    area_es: 'Área metropolitana de Valencia', area_en: 'Valencia metropolitan area',
    tag_es: 'Planeamiento General', tag_en: 'General Planning',
    accent: '#9ab8a4', gradA: '#111a16', gradB: '#1c2820', images: 3,
    desc_es: 'Revisión y adaptación del planeamiento general del municipio de Torrent, uno de los municipios más poblados del área metropolitana de Valencia. El trabajo supone la renovación integral del modelo urbanístico, con especial atención a la definición de los nuevos sectores de crecimiento y la consolidación del suelo urbano existente.\n\nAdaptación al nuevo marco normativo de la LOTUP, integrando los nuevos criterios de sostenibilidad y paisaje exigidos por la normativa autonómica.',
    desc_en: 'Review and adaptation of the general planning of Torrent, one of the most populated municipalities in the Valencia metropolitan area. The work involves a comprehensive renewal of the urban model, with special attention to new growth sectors and consolidating existing urban land.\n\nAdaptation to the new LOTUP regulatory framework, integrating new sustainability and landscape criteria.',
    led_es: ['Diagnóstico urbanístico y análisis de la demanda residencial y económica', 'Redacción de las normas urbanísticas municipales adaptadas a LOTUP', 'Delimitación y ordenación de nuevos sectores de desarrollo urbano'],
    led_en: ['Urban diagnosis and analysis of residential and economic demand', 'Drafting of municipal urban planning regulations adapted to LOTUP', 'Delimitation and planning of new urban development sectors'],
    part_es: ['Coordinación con el área de medio ambiente y servicios técnicos municipales', 'Redacción de informes técnicos sectoriales'],
    part_en: ['Coordination with the environmental area and municipal technical services', 'Drafting of sectoral technical reports'],
    press: [], link: null,
  },
  {
    id: 'segart', filter: 'pgm', abbr: 'SGT',
    lat: 39.6760, lng: -0.3510,
    name_es: 'Plan General Estructural de Segart',
    name_en: 'Structural General Plan of Segart',
    subtitle_es: 'Segart · Camp de Morvedre · Valencia', subtitle_en: 'Segart · Camp de Morvedre · Valencia',
    year: '2020 – 2023',
    client_es: 'Ayuntamiento de Segart', client_en: 'Segart City Council',
    role_es: 'Técnico redactor', role_en: 'Drafting Technician',
    area_es: 'Camp de Morvedre · Valencia', area_en: 'Camp de Morvedre · Valencia',
    tag_es: 'Plan Estructural', tag_en: 'Structural Plan',
    accent: '#b8a49a', gradA: '#1a1614', gradB: '#251e1a', images: 2,
    desc_es: 'Plan General Estructural del municipio de Segart, adaptado a los requisitos de la LOTUP. El plan define el modelo territorial y los grandes sistemas estructurales del municipio, sentando las bases para el desarrollo urbanístico sostenible.\n\nTrabajo redactado íntegramente desde el análisis territorial previo hasta la documentación final para tramitación ante la Conselleria de Territori de la Generalitat Valenciana.',
    desc_en: 'Structural General Plan for the municipality of Segart, adapted to the requirements of the LOTUP. The plan defines the territorial model and the main structural systems of the municipality.\n\nWork drafted entirely from the preliminary territorial analysis through to the final documentation for processing before the Conselleria de Territori.',
    led_es: ['Redacción íntegra del Plan General Estructural adaptado a LOTUP', 'Elaboración de la cartografía y planos de ordenación', 'Memoria justificativa y normativa urbanística municipal'],
    led_en: ['Complete drafting of the Structural General Plan adapted to LOTUP', 'Preparation of cartography and planning maps', 'Justification report and municipal urban planning regulations'],
    part_es: ['Tramitación ante la Conselleria de Territori de la GVA', 'Coordinación con el equipo de análisis ambiental'],
    part_en: ['Processing before the Conselleria de Territori', 'Coordination with the environmental analysis team'],
    press: [], link: null,
  },
  {
    id: 'gilet', filter: 'pgm', abbr: 'GLT',
    lat: 39.7020, lng: -0.2780,
    name_es: 'Plan General Estructural de Gilet',
    name_en: 'Structural General Plan of Gilet',
    subtitle_es: 'Gilet · Camp de Morvedre · Valencia', subtitle_en: 'Gilet · Camp de Morvedre · Valencia',
    year: '2020 – 2023',
    client_es: 'Ayuntamiento de Gilet', client_en: 'Gilet City Council',
    role_es: 'Técnico redactor', role_en: 'Drafting Technician',
    area_es: 'Camp de Morvedre · Valencia', area_en: 'Camp de Morvedre · Valencia',
    tag_es: 'Plan Estructural', tag_en: 'Structural Plan',
    accent: '#b8a49a', gradA: '#141820', gradB: '#1c2230', images: 2,
    desc_es: 'Plan General Estructural para el municipio de Gilet en el Camp de Morvedre, en el marco de la adaptación al nuevo modelo urbanístico de la LOTUP. El trabajo incluye el análisis del medio físico y socioeconómico, la definición del modelo territorial de referencia y la ordenación estructural del suelo.\n\nEl plan presta especial atención a los valores paisajísticos del entorno del río Palancia y la sierra Calderona.',
    desc_en: 'Structural General Plan for the municipality of Gilet in the Camp de Morvedre, within the framework of adapting to the new LOTUP urban planning model. The work includes analysis of the physical and socioeconomic environment and the structural land planning.\n\nThe plan pays special attention to the landscape values of the Palancia river and Calderona mountain range.',
    led_es: ['Redacción del Plan General Estructural completo adaptado a LOTUP', 'Análisis ambiental y paisajístico del territorio municipal', 'Definición de la clasificación y calificación del suelo'],
    led_en: ['Complete drafting of the Structural General Plan adapted to LOTUP', 'Environmental and landscape analysis of the municipal territory', 'Definition of land classification and qualification'],
    part_es: ['Tramitación administrativa ante organismos sectoriales', 'Reuniones de coordinación con la corporación municipal'],
    part_en: ['Administrative processing before sectoral bodies', 'Coordination meetings with the municipal council'],
    press: [], link: null,
  },
  {
    id: 'llocnou', filter: 'pgm', abbr: 'LNS',
    lat: 38.9200, lng: -0.2620,
    name_es: 'Plan General Estructural de Llocnou de Sant Jeroni',
    name_en: 'Structural General Plan of Llocnou de Sant Jeroni',
    subtitle_es: 'Llocnou de Sant Jeroni · La Safor · Valencia', subtitle_en: 'Llocnou de Sant Jeroni · La Safor · Valencia',
    year: '2021 – 2024',
    client_es: 'Ayuntamiento de Llocnou de Sant Jeroni', client_en: 'Llocnou de Sant Jeroni City Council',
    role_es: 'Técnico redactor', role_en: 'Drafting Technician',
    area_es: 'PGE + Catálogo aprobados por GVA', area_en: 'PGE + Catalogue approved by GVA',
    tag_es: 'Plan Estructural · Aprobado', tag_en: 'Structural Plan · Approved',
    accent: '#a4c8a4', gradA: '#121a14', gradB: '#1c2818', images: 2,
    desc_es: 'Plan General Estructural aprobado definitivamente por la Generalitat Valenciana para el municipio rural de Llocnou de Sant Jeroni, en la comarca de la Safor. Municipio de carácter eminentemente agrícola, con especial valor paisajístico ligado al cultivo de cítricos y al entorno del río Serpis.\n\nEl trabajo incluyó también la redacción íntegra del Catálogo de Protecciones del municipio, aprobado simultáneamente con el PGE, con fichas individualizadas para cada elemento del patrimonio arquitectónico, etnológico y paisajístico catalogado.',
    desc_en: 'Structural General Plan definitively approved by the Valencian Regional Government for the rural municipality of Llocnou de Sant Jeroni. A predominantly agricultural municipality with special landscape value linked to citrus cultivation and the Serpis river environment.\n\nThe work also included the complete drafting of the Protection Catalogue, approved simultaneously with the PGE, with individual sheets for each catalogued heritage element.',
    led_es: ['Redacción íntegra del Plan General Estructural adaptado a la LOTUP', 'Catálogo de Protecciones completo con fichas individualizadas — aprobado por la GVA', 'Análisis del paisaje agrícola, natural y patrimonial del municipio', 'Tramitación completa ante la Conselleria de Territori i Habitatge'],
    led_en: ['Complete drafting of the Structural General Plan adapted to the LOTUP', 'Complete Protection Catalogue with individual sheets — approved by GVA', 'Analysis of the agricultural, natural and heritage landscape', 'Full processing before the Conselleria de Territori i Habitatge'],
    part_es: ['Coordinación con el equipo técnico externo', 'Reuniones de seguimiento con la corporación municipal'],
    part_en: ['Coordination with the external technical team', 'Follow-up meetings with the municipal council'],
    press: [], link: null,
  },
];

/* ── I18N ── */
const i18n = {
  es: { nav_projects: 'Proyectos', nav_about: 'Sobre mí', nav_services: 'Servicios', nav_publications: 'Publicaciones', nav_awards: 'Reconocimientos', nav_blog: 'Blog', nav_contact: 'Contacto' },
  en: { nav_projects: 'Projects', nav_about: 'About', nav_services: 'Services', nav_publications: 'Publications', nav_awards: 'Recognition', nav_blog: 'Blog', nav_contact: 'Contact' },
};

let currentLang = localStorage.getItem('dsf_lang') || 'es';

function applyI18n(lang) {
  currentLang = lang;
  localStorage.setItem('dsf_lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n(currentLang);
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.addEventListener('click', () => applyI18n(currentLang === 'es' ? 'en' : 'es'));

  /* Skill bar animation */
  const fills = document.querySelectorAll('.skill-bar-fill');
  if (fills.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.style.setProperty('--w', e.target.dataset.w); obs.unobserve(e.target); } });
    }, { threshold: 0.2 });
    fills.forEach(f => obs.observe(f));
  }

  /* Contact form */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const s = document.getElementById('form-success');
      if (s) { s.style.display = 'flex'; form.reset(); setTimeout(() => s.style.display = 'none', 5000); }
    });
  }
});
