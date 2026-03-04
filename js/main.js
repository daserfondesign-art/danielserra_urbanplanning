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
    accent: '#c8a96e', gradA: '#1c1a14', gradB: '#2e2a1c', images: 5,
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'Ampliación de 600.000 m² del Parque Empresarial de Elche (sector E-49), incrementando un 25% su superficie. El proyecto resuelve los riesgos de inundabilidad mediante parques inundables e integra el patrimonio existente, logrando informes sectoriales favorables y aprobación sin condicionantes.',
    desc_short_en: 'Expansion of 600,000 m² of the Elche Business Park, increasing its area by 25%. The project resolves flood risks through floodable parks and integrates existing heritage, achieving favourable sectoral reports and unconditional approval.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'La ampliación del Parque Empresarial de Elche (Sector E-49), promovida por el Ajuntament d\'Elx y gestionada por PIMESA, se instrumenta mediante una Modificación Puntual del Plan General y la redacción de su Plan de Ordenación Pormenorizada (POP). La actuación abarca cerca de 600.000 m² (un incremento del 25% de la superficie actual) y moviliza una inversión de 40 millones de euros, respondiendo a la demanda de suelo industrial y terciario de gran formato bajo estándares de alta calidad urbana.\n\nA nivel de diseño, la ordenación garantiza la continuidad morfológica con los sectores colindantes (E-39 y E-40) y define una transición armónica hacia el entorno no urbanizable. La matriz espacial del sector se vertebra sobre una extensa Infraestructura Verde multifuncional que da respuesta a dos grandes retos técnicos: el ciclo del agua y la preservación identitaria.\n\nPor un lado, para mitigar la peligrosidad por inundación y dar estricto cumplimiento al PATRICOVA, se ha diseñado un sistema de parques inundables. Estos espacios actúan como áreas de laminación y retención de pluviales durante episodios de lluvias torrenciales, mientras que en periodos secos funcionan como zonas de esparcimiento público. Por otro lado, la red de movilidad sostenible —con itinerarios ciclo-peatonales físicamente segregados del tránsito rodado— se ha trazado estratégicamente para conectar y poner en valor los elementos catalogados del patrimonio arquitectónico y etnológico. Estos bienes no solo se conservan, sino que se integran como hitos visuales dentro de las nuevas plazas y áreas verdes.\n\nComo parte del equipo redactor de IDOM, mi labor abarcó el diseño de la ordenación estructural y pormenorizada, la producción de la planimetría y la co-redacción de las Memorias Informativa y Justificativa. El rigor de este trabajo culminó en un hito administrativo extraordinario: la Generalitat Valenciana emitió un informe sectorial favorable sin condicionantes que incluía una felicitación expresa al equipo técnico. La administración autonómica destacó la excepcional claridad documental, la precisión de la ordenación y la viabilidad ambiental de la propuesta, aspectos que agilizaron decisivamente la tramitación del expediente.',
    desc_full_en: 'The expansion of the Elche Business Park (Sector E-49), promoted by the Ajuntament d\'Elx and managed by PIMESA, is implemented through a Specific Modification of the General Plan and its Detailed Planning Order (POP). The intervention covers nearly 600,000 m² (a 25% increase in the current surface area) and mobilises an investment of 40 million euros, responding to the demand for large-format industrial and tertiary land under high urban quality standards.\n\nIn terms of design, the layout ensures morphological continuity with the adjacent sectors (E-39 and E-40) and defines a harmonious transition towards the non-developable surroundings. The spatial matrix of the sector is structured upon an extensive multifunctional Green Infrastructure that addresses two major technical challenges: the water cycle and heritage preservation.\n\nOn the one hand, to mitigate flood hazards and strictly comply with PATRICOVA regulations, a system of floodable parks was designed. These spaces act as stormwater retention and lamination areas during torrential rain episodes, while functioning as public recreation zones during dry periods. On the other hand, the sustainable mobility network—featuring cycle-pedestrian routes physically segregated from vehicular traffic—has been strategically laid out to connect and highlight catalogued elements of architectural and ethnological heritage. These assets are not merely preserved but integrated as visual landmarks within the new plazas and green areas.\n\nAs part of the IDOM drafting team, my work encompassed the design of the structural and detailed layout, the production of cartography, and the co-drafting of the Informative and Justification Reports. The rigour of this work culminated in an extraordinary administrative milestone: the Generalitat Valenciana issued an unconditional favourable sectoral report that included an express congratulation to the technical team. The regional administration highlighted the exceptional documentary clarity, the precision of the layout, and the environmental viability of the proposal, which decisively expedited the processing of the file.',
    led_es: ['Tramitación de la Modificación Estructural del PGOU para transformación de suelo no urbanizable en urbanizable (aprobada por la CTU en 2021)', 'Redacción y tramitación del Plan Parcial del sector E-49', 'Redacción y tramitación del Plan de Ordenación Pormenorizada', 'Gestiones ambientales: coordinación con organismos sectoriales y tramitación de informes de evaluación ambiental', 'Elaboración de toda la documentación técnica y jurídica del expediente urbanístico'],
    led_en: ['Processing of the Structural Modification of the General Urban Plan (approved by the CTU in 2021)', 'Drafting and processing of the Partial Plan for sector E-49', 'Drafting and processing of the Detailed Planning Order', 'Environmental management: coordination with sectoral bodies', 'Preparation of all technical and legal documentation'],
    part_es: ['Coordinación continua con el equipo técnico de PIMESA y los servicios de urbanismo del Ayuntamiento', 'Seguimiento del PAI y del proyecto de reparcelación'],
    part_en: ['Ongoing coordination with PIMESA technical team and City Council urban planning services', 'Follow-up on the Integrated Action Programme (PAI)'],
    press: [
      { source: 'elche.es', date: 'Jun 2025', title: 'Elche impulsa la ampliación del Parque Empresarial con 41,5 millones de euros de inversión', url: 'https://www.elche.es/2025/06/elche-impulsa-la-ampliacion-del-parque-empresarial-con-415-millones-de-euros-de-inversion/' },
      { source: 'Alicante Plaza', date: 'Nov 2025', title: 'Elche no espera iniciar la ampliación del Parque Empresarial hasta septiembre de 2026', url: 'https://alicanteplaza.es/alicanteplaza/elcheplaza/elche-no-espera-iniciar-la-ampliacion-del-parque-empresarial-hasta-septiembre-de-2026' },
      { source: 'Gestores Públicos', date: 'Jul 2021', title: 'El Parque Empresarial de Elche contará con una ampliación de 600.000 metros cuadrados', url: 'https://gestorespublicos.org/noticias/ver/el-parque-empresarial-de-elche-contar%C3%A1-con-una-ampliaci%C3%B3n-de-600-000-metros-cuadrados' },
    ],
    link: 'https://www.elche.es/urbanismo/documentacion-urbanistica-en-tramitacion/nuevo-sector-e-49/',  },
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
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'El Plan General Estructural de Xàbia plantea un cambio de paradigma para proteger los valores naturales del municipio, amenazados por un planeamiento anterior expansivo. El proyecto desclasifica cerca de 10 millones de m² de suelo urbanizable para blindar el paisaje, reordenando el crecimiento y logrando más de 140 informes sectoriales favorables.',
    desc_short_en: 'The Structural General Plan of Xàbia proposes a paradigm shift to protect the municipality\'s natural values, threatened by expansive planning. The project declassifies nearly 10 million m² of developable land to shield the landscape, reordering growth and achieving over 140 favourable sectoral reports.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'El Plan General Estructural (PGE) de Xàbia / Jávea representa uno de los hitos urbanísticos más ambiciosos de la Comunitat Valenciana en materia de contención territorial. El municipio, caracterizado por su excepcional valor paisajístico y medioambiental, se encontraba gravemente amenazado por las dinámicas de un planeamiento anterior (heredado de 1990) excesivamente expansivo y depredador del territorio.\n\nPara revertir esta inercia, el PGE establece un modelo de crecimiento racional, proteccionista y sostenible. La medida técnica clave del documento es la desclasificación de cerca de 10 millones de metros cuadrados de suelo previamente urbanizable, transformándolo en suelo protegido. Esta drástica reducción del consumo de suelo frena las expectativas de crecimiento desmesurado, permite blindar los corredores ecológicos y configura una Infraestructura Verde resiliente frente a riesgos naturales (inundabilidad y erosión). La nueva ordenación prioriza completar los vacíos urbanos y poner en valor el paisaje litoral e interior.\n\nDentro del equipo técnico, mi rol fue fundamental en el diseño de las alternativas de ordenación estructural. Me encargué de la elaboración íntegra de la planimetría normativa (clasificación, zonificación y ordenación), así como de la co-redacción de la Memoria Justificativa, los estudios de inundabilidad y la definición de las fichas de gestión e Infraestructura Verde. A nivel de gestión del expediente, me coordiné estrechamente con el departamento jurídico para la resolución técnica de alegaciones y participé en las reuniones institucionales con el Ayuntamiento y la Generalitat, culminando el proceso con la obtención de 144 informes sectoriales favorables.',
    desc_full_en: 'The Structural General Plan (SGP) of Xàbia / Jávea represents one of the most ambitious urban planning milestones in the Valencian Community regarding territorial containment. The municipality, known for its exceptional landscape and environmental value, was severely threatened by the dynamics of a previously overly expansive and land-consuming urban plan (inherited from 1990).\n\nTo reverse this inertia, the SGP establishes a rational, protectionist, and sustainable growth model. The key technical measure of the document is the declassification of nearly 10 million square meters of previously developable land, transforming it into protected land. This drastic reduction in land consumption curbs expectations of disproportionate growth, shields ecological corridors, and configures a resilient Green Infrastructure against natural risks (flooding and erosion). The new layout prioritises infilling urban voids and enhancing the coastal and inland landscape.\n\nWithin the technical team, my role was fundamental in designing structural layout alternatives. I was responsible for producing the comprehensive normative cartography (classification, zoning, and layout), as well as co-drafting the Justification Report, floodability studies, and defining the management and Green Infrastructure sheets. At the administrative file management level, I coordinated closely with the legal department for the technical resolution of allegations and participated in institutional meetings with the City Council and the Generalitat, culminating the process by obtaining 144 favourable sectoral reports.',

    led_es: [
      'Diseño de propuestas de ordenación estructural y elaboración de planimetría normativa (clasificación y zonificación)',
      'Co-redacción de la Memoria Justificativa y elaboración de planos de inundabilidad e Infraestructura Verde',
      'Definición y redacción de las fichas de gestión urbanística'
    ],
    led_en: [
      'Design of structural layout proposals and production of normative cartography (classification and zoning)',
      'Co-drafting of the Justification Report and elaboration of floodability and Green Infrastructure plans',
      'Definition and drafting of urban management sheets'
    ],
    part_es: [
      'Coordinación con el departamento jurídico para el análisis y resolución técnica de alegaciones',
      'Reuniones institucionales y técnicas de seguimiento con el Ayuntamiento y la Generalitat',
      'Gestión técnica transversal para la obtención de 144 informes sectoriales favorables'
    ],
    part_en: [
      'Coordination with the legal department for the technical analysis and resolution of allegations',
      'Institutional and technical follow-up meetings with the City Council and the Generalitat',
      'Cross-cutting technical management to obtain 144 favourable sectoral reports'
    ],
    press: [
      { source: 'elDiario.es', date: 'Mar 2017', title: 'Xàbia eliminará casi 10 millones de m² de suelo urbanizable en su nuevo Plan General', url: 'https://www.eldiario.es/comunitat-valenciana/alicante/xabia-eliminara-urbanizable-plan-general_1_3352546.html' },
      { source: 'Ayuntamiento de Xàbia', date: 'Feb 2019', title: 'La versión preliminar del Plan General protege otros 201.220 m² tras estudiar informes y alegaciones', url: 'https://www.ajxabia.com/ver/7741/la-version-preliminar-del-plan-general-de-xabia-protege-otros-201-220-metros-cuadrados-tras-estudiar-informes-y-alegaciones/' },
      { source: 'Javea.com', date: 'May 2023', title: 'El urbanismo de Xàbia se pone a las puertas de aprobar el Plan General Estructural', url: 'https://www.javea.com/el-urbanismo-de-xabia-da-un-paso-y-se-pone-a-las-puertas-de-aprobar-el-plan-general-estructural/' }
    ],
    link: 'https://xabia.sedelectronica.es/transparency/780ae88d-91bb-4e27-89f9-f5392d71e8f5/',
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
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'Revisión del planeamiento de Torrent, uno de los mayores municipios de Valencia. El plan apuesta por la contención, reduciendo un 30% el suelo urbanizable heredado de 1990, desclasificando zonas con afecciones, vertebrando la infraestructura verde a través de sus barrancos y minimizando el impacto de los asentamientos en suelo no urbanizable.',
    desc_short_en: 'Review of the planning for Torrent, one of Valencia\'s largest municipalities. The plan focuses on containment, reducing the developable land inherited from 1990 by 30%, declassifying risk areas, structuring green infrastructure through its ravines, and minimizing the impact of settlements on non-developable land.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'La revisión del Plan General de Torrent —uno de los municipios con mayor peso demográfico y de polaridad del Área Metropolitana de Valencia— supone la transición definitiva de un urbanismo expansivo (heredado del PGOU de 1990) hacia un modelo de ciudad compacta y resiliente. El proyecto, desarrollado en colaboración entre NousEspais e IDOM, replantea la estructura territorial ajustando el crecimiento poblacional a la capacidad real de acogida del entorno.\n\nA nivel técnico, se acometió una reducción drástica del 30% del suelo urbanizable, desclasificando ámbitos afectados por la peligrosidad de inundación (PATRICOVA) y riesgos geomorfológicos. La matriz del nuevo modelo es una extensa Infraestructura Verde que garantiza la conectividad ecológica territorial, utilizando el sistema de barrancos (L\'Horteta y les Canyes) como vectores que conectan la Serra Perenxisa con el Parque Forestal de El Vedat. Este planteamiento incluye la integración paisajística y repoblación vegetal de antiguas áreas degradadas, como la cantera de Morredondo, reconvertida en un gran parque público.\n\nUno de los mayores retos resueltos en el documento fue la ordenación del suelo no urbanizable y sus afecciones históricas. Se establecieron directrices precisas y mecanismos de Planeamiento Diferido y Minimización de Impactos Territoriales para regularizar los numerosos asentamientos y núcleos de viviendas preexistentes, dotándolos de infraestructuras básicas para contener su crecimiento y frenar la degradación ambiental del entorno.',
    desc_full_en: 'The revision of the General Plan of Torrent—one of the municipalities with the greatest demographic weight in the Valencia Metropolitan Area—marks the definitive transition from expansive urbanism (inherited from the 1990 PGOU) to a compact and resilient city model. The project, developed in collaboration between NousEspais and IDOM, rethinks the territorial structure by adjusting population growth to the real carrying capacity of the environment.\n\nTechnically, a drastic 30% reduction in developable land was undertaken, declassifying areas affected by flood hazards (PATRICOVA) and geomorphological risks. The matrix of the new model is an extensive Green Infrastructure that ensures territorial ecological connectivity, using the ravine system (L\'Horteta and les Canyes) as vectors connecting the Serra Perenxisa with the El Vedat Forest Park. This approach includes the landscape integration and revegetation of formerly degraded areas, such as the Morredondo quarry, converted into a large public park.\n\nOne of the major challenges resolved in the document was the management of non-developable land and its historical issues. Precise guidelines and mechanisms for Deferred Planning and Territorial Impact Minimization were established to regularize numerous pre-existing settlements and housing nuclei, providing them with basic infrastructure to contain their growth and halt environmental degradation.',
    
    led_es: [
      'Elaboración de la propuesta de ordenación del modelo territorial',
      'Elaboración de fichas de ordenación y de gestión urbanística',
      'Elaboración de esquemas descriptivos e imágenes de ejemplo de actuaciones'
    ],
    led_en: [
      'Drafting of the territorial model layout proposal',
      'Drafting of urban planning and management sheets',
      'Creation of descriptive diagrams and example images of interventions'
    ],
    part_es: [
      'Co-redacción de la Memoria Justificativa del Plan General',
      'Coordinación técnica transversal con el departamento de medioambiente'
    ],
    part_en: [
      'Co-drafting of the General Plan Justification Report',
      'Cross-cutting technical coordination with the environmental department'
    ],
    press: [], 
    // Sustituimos 'link' por 'docs' para inyectar múltiples botones
    docs: [
      { name_es: 'Memoria', name_en: 'Report', url: 'https://ovea.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=09fd5c7a-b6ca-4614-8667-e929f9dc5701' },
      { name_es: 'Zonificación', name_en: 'Zoning', url: 'https://ovea.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=c182476b-e977-44ac-90e0-23619de05ede' },
      { name_es: 'Clasificación', name_en: 'Classification', url: 'https://ovea.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=ee60b78c-d476-4531-8dde-688770699816' },
      { name_es: 'Infra. Verde', name_en: 'Green Infra.', url: 'https://ovea.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=92a74938-1f68-4a6b-a254-0b13a6548495' }
    ]
  },
  {
    id: 'gilet', filter: 'pgm', abbr: 'GLT',
    lat: 39.7020, lng: -0.2780,
    name_es: 'Plan General Estructural de Gilet',
    name_en: 'Structural General Plan of Gilet',
    subtitle_es: 'Gilet · Camp de Morvedre · Valencia', subtitle_en: 'Gilet · Camp de Morvedre · Valencia',
    year: '2020 – 2023',
    client_es: 'Ayuntamiento de Gilet', client_en: 'Gilet City Council',
    role_es: 'Director / Coordinador de proyecto', role_en: 'Project Manager / Coordinator',
    area_es: 'Camp de Morvedre · Valencia', area_en: 'Camp de Morvedre · Valencia',
    tag_es: 'Plan Estructural', tag_en: 'Structural Plan',
    accent: '#b8a49a', gradA: '#141820', gradB: '#1c2230', images: 2,
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'Dirección y coordinación integral del Plan General de Gilet (PGE y POP). El proyecto resuelve la integración de crecimientos históricos en suelo no urbanizable y desbloquea la ejecución de zonas verdes mediante nuevos mecanismos de gestión, adaptando el planeamiento a las estrictas figuras de protección ambiental de la Serra Calderona.',
    desc_short_en: 'Comprehensive management and coordination of the Gilet General Plan (SGP and POP). The project resolves the integration of historical growth on non-developable land and unlocks the development of green spaces through new management mechanisms, adapting the planning to the strict environmental protection figures of the Serra Calderona.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'El planeamiento del municipio de Gilet supuso un reto técnico y de gestión excepcional debido a su compleja casuística urbanística y su ubicación estratégica bajo el área de influencia del PORN de la Serra Calderona. La redacción simultánea del Plan General Estructural (PGE) y el Plan de Ordenación Pormenorizada (POP) tuvo como objetivo principal ordenar un territorio fuertemente marcado por crecimientos dispersos y bloqueos administrativos históricos.\n\nUna de las aportaciones clave del plan fue la creación de mecanismos de gestión urbanística viables (mediante la delimitación de nuevas Unidades de Ejecución) para resolver el déficit histórico de zonas verdes y dotaciones públicas, las cuales nunca llegaron a materializarse por falta de instrumentos de desarrollo previos. Asimismo, se establecieron los marcos normativos precisos para la regularización de los asentamientos consolidados en suelo no urbanizable, garantizando la dotación de infraestructuras básicas y exigiendo procesos de minimización de impacto ambiental.\n\nComo Director y Coordinador del proyecto, asumí la toma de decisiones estratégicas del modelo territorial, liderando a los equipos técnicos de delineación, urbanismo y medio ambiente. Mi labor abarcó desde la concepción del diseño estructural hasta la interlocución directa y negociación con el Ayuntamiento, agentes implicados y administraciones autonómicas, asegurando la viabilidad técnica, jurídica y ambiental del documento. Como valor añadido a la presentación técnica, diseñé y elaboré el cajetín de la planimetría, ideado específicamente para que, al plegar los planos, la información principal quede perfectamente visible en la portada.',
    desc_full_en: 'The urban planning of the municipality of Gilet posed an exceptional technical and management challenge due to its complex urban casuistry and its strategic location under the influence of the Serra Calderona Natural Resources Management Plan (PORN). The simultaneous drafting of the Structural General Plan (SGP) and the Detailed Planning Order (POP) aimed primarily to organize a territory heavily marked by dispersed growth and historical administrative blockages.\n\nA key contribution of the plan was the creation of viable urban management mechanisms (through the delimitation of new Execution Units) to resolve the historical deficit of green areas and public facilities, which had never materialized due to a lack of prior development instruments. Additionally, precise regulatory frameworks were established for the regularization of consolidated settlements on non-developable land, ensuring the provision of basic infrastructure and requiring environmental impact minimization processes.\n\nAs Project Manager and Coordinator, I took on the strategic decision-making for the territorial model, leading the technical drafting, urban planning, and environmental teams. My role ranged from the conception of the structural design to direct dialogue and negotiation with the City Council, stakeholders, and regional administrations, ensuring the technical, legal, and environmental viability of the document. As an added value to the technical presentation, I designed and created the plan\'s title block, specifically devised so that when folded, the key information remains perfectly visible on the cover.',
    
    led_es: [
      'Dirección integral del proyecto y toma de decisiones estratégicas del modelo territorial (PGE y POP)',
      'Coordinación de equipos multidisciplinares (delineación, urbanismo y medio ambiente)',
      'Diseño de mecanismos de gestión urbanística para el desbloqueo de dotaciones y zonas verdes',
      'Dirección de las reuniones e interlocución institucional con el Ayuntamiento y agentes implicados'
    ],
    led_en: [
      'Comprehensive project management and strategic decision-making for the territorial model (SGP and POP)',
      'Coordination of multidisciplinary teams (drafting, urban planning, and environment)',
      'Design of urban management mechanisms to unlock public facilities and green spaces',
      'Direction of meetings and institutional dialogue with the City Council and involved stakeholders'
    ],
    part_es: [
      'Supervisión de la integración de la normativa ambiental autonómica (PORN Serra Calderona)',
      'Seguimiento técnico de los procesos de participación ciudadana'
    ],
    part_en: [
      'Supervision of the integration of regional environmental regulations (PORN Serra Calderona)',
      'Technical follow-up of public participation processes'
    ],
    press: [], 
    docs: [
      { name_es: 'Descargar expediente (ZIP)', name_en: 'Download dossier (ZIP)', url: 'https://oveac.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=39140044-dc64-413d-a9a3-949db5d2680f' }
    ]
  },
{
    id: 'segart', filter: 'pgm', abbr: 'SGT',
    lat: 39.6760, lng: -0.3510,
    name_es: 'Plan General Estructural de Segart',
    name_en: 'Structural General Plan of Segart',
    subtitle_es: 'Segart · Camp de Morvedre · Valencia', subtitle_en: 'Segart · Camp de Morvedre · Valencia',
    year: '2020 – 2023',
    client_es: 'Ayuntamiento de Segart', client_en: 'Segart City Council',
    role_es: 'Director / Coordinador de proyecto', role_en: 'Project Manager / Coordinator',
    area_es: 'Camp de Morvedre · Valencia', area_en: 'Camp de Morvedre · Valencia',
    tag_es: 'Plan Estructural', tag_en: 'Structural Plan',
    accent: '#b8a49a', gradA: '#1a1614', gradB: '#251e1a', images: 2,
    
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'Dirección integral del Plan General Estructural de Segart. El proyecto define un modelo territorial en pleno corazón de la Serra Calderona, conteniendo el crecimiento, mitigando los impactos ambientales de las urbanizaciones periféricas (este y oeste) e integrando estrictamente las normativas del parque natural.',
    desc_short_en: 'Comprehensive management of the Segart Structural General Plan. The project defines a territorial model in the heart of the Serra Calderona, containing growth, mitigating the environmental impacts of peripheral urbanizations (east and west), and strictly integrating the natural park regulations.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'La redacción del Plan General Estructural de Segart representó un desafío urbanístico singular al tratarse de un municipio enclavado en pleno corazón del Parque Natural de la Serra Calderona. El objetivo central del documento fue equilibrar la viabilidad de un crecimiento poblacional y dotacional adecuado con la preservación estricta de uno de los entornos naturales más protegidos de la provincia.\n\nDesde el punto de vista técnico, el planeamiento abordó la regularización y minimización de impactos territoriales y visuales de las urbanizaciones periféricas, situadas a levante y poniente del núcleo tradicional. Para ello, se diseñaron franjas de transición, se establecieron directrices rigurosas de prevención de incendios (interfaz urbano-forestal) y de integración paisajística, asegurando la permeabilidad y conectividad de la Infraestructura Verde.\n\nComo Director y Coordinador del proyecto, asumí el liderazgo en la definición del modelo territorial, coordinando a los equipos de urbanismo, delineación y medio ambiente. Dirigí la elaboración de la propuesta de ordenación y la co-redacción de la Memoria Justificativa, además de gestionar las mesas de trabajo y la interlocución directa con el Ayuntamiento y la administración autonómica para asegurar la adaptación integral del planeamiento a las exigencias del PORN de la Serra Calderona. Adicionalmente, diseñé y elaboré el cajetín de toda la planimetría normativa, optimizado para que al plegar los documentos la información identificativa quede siempre expuesta en la portada.',
    desc_full_en: 'The drafting of the Segart Structural General Plan represented a unique urban challenge as the municipality is nestled in the heart of the Serra Calderona Natural Park. The document\'s central objective was to balance the viability of adequate population and facility growth with the strict preservation of one of the province\'s most protected natural environments.\n\nFrom a technical standpoint, the planning addressed the regularization and minimization of territorial and visual impacts of the peripheral urbanizations, located to the east and west of the traditional core. To achieve this, transition zones were designed, rigorous guidelines for forest fire prevention (urban-forest interface) and landscape integration were established, ensuring the permeability and connectivity of the Green Infrastructure.\n\nAs Project Manager and Coordinator, I took the lead in defining the territorial model, coordinating the urban planning, drafting, and environmental teams. I directed the layout proposal\'s development and co-drafted the Justification Report, as well as managing the working groups and direct dialogue with the City Council and regional administration to ensure the comprehensive adaptation of the planning to the strict requirements of the Serra Calderona PORN. Additionally, I designed and created the title block for all normative cartography, optimized so that when the documents are folded, the identifying information is always exposed on the cover.',
    
    led_es: [
      'Dirección integral del proyecto y toma de decisiones estratégicas del modelo territorial del PGE',
      'Coordinación de equipos multidisciplinares (delineación, urbanismo y medio ambiente)',
      'Diseño de propuestas de ordenación para la mitigación de impactos en urbanizaciones periféricas',
      'Interlocución directa y dirección de reuniones con el Ayuntamiento y agentes implicados'
    ],
    led_en: [
      'Comprehensive project management and strategic decision-making for the SGP territorial model',
      'Coordination of multidisciplinary teams (drafting, urban planning, and environment)',
      'Design of layout proposals to mitigate impacts in peripheral urbanizations',
      'Direct dialogue and meeting direction with the City Council and involved stakeholders'
    ],
    part_es: [
      'Co-redacción de la Memoria Justificativa del Plan General Estructural',
      'Supervisión de la integración de la normativa ambiental autonómica (PORN Serra Calderona)'
    ],
    part_en: [
      'Co-drafting of the Structural General Plan Justification Report',
      'Supervision of the integration of regional environmental regulations (PORN Serra Calderona)'
    ],
    press: [], 
    docs: [
      { name_es: 'Descargar expediente (ZIP)', name_en: 'Download dossier (ZIP)', url: 'https://oveac.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=b0be693d-a611-4158-9795-d0da0abc562f' }
    ]
  },
  {
    id: 'llocnou', filter: 'pgm', abbr: 'LNS',
    lat: 38.9200, lng: -0.2620,
    name_es: 'Plan General Estructural de Llocnou de Sant Jeroni',
    name_en: 'Structural General Plan of Llocnou de Sant Jeroni',
    subtitle_es: 'Llocnou de Sant Jeroni · La Safor · Valencia', subtitle_en: 'Llocnou de Sant Jeroni · La Safor · Valencia',
    year: '2021 – 2024',
    client_es: 'Ayuntamiento de Llocnou de Sant Jeroni', client_en: 'Llocnou de Sant Jeroni City Council',
    role_es: 'Autor del Catálogo de Protecciones / Técnico Redactor', role_en: 'Protection Catalogue Author / Drafting Technician',
    area_es: 'PGE + Catálogo aprobados por GVA', area_en: 'PGE + Catalogue approved by GVA',
    tag_es: 'Plan Estructural · Aprobado', tag_en: 'Structural Plan · Approved',
    accent: '#a4c8a4', gradA: '#121a14', gradB: '#1c2818', images: 4,
    
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'Plan General Estructural para un municipio de tradición agrícola vertebrado por el río Vernissa. El proyecto establece un modelo de ordenación que protege su entorno natural y el patrimonio etnológico, culminando con la Aprobación Definitiva en 2022 tras la redacción del Catálogo de Protecciones y la resolución de informes sectoriales complejos.',
    desc_short_en: 'Structural General Plan for an agricultural municipality structured by the Vernissa river. The project establishes a layout model that protects its natural environment and ethnological heritage, culminating in Definitive Approval in 2022 following the drafting of the Protection Catalogue and the resolution of complex sectoral reports.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'El Plan General Estructural de Llocnou de Sant Jeroni ordena un municipio de marcado carácter agrícola vertebrado por el río Vernissa (afluente del Serpis). El documento define un modelo territorial que busca preservar la identidad paisajística y patrimonial del núcleo, adaptándose a las exigencias normativas actuales.\n\nDurante la fase final del expediente, la labor técnica se centró en garantizar la viabilidad del documento frente a los organismos autonómicos mediante la resolución de informes sectoriales condicionados. Esto implicó el reajuste de la planimetría y las memorias para dar respuesta a las estrictas exigencias de Educación (reserva de plazas escolares), Carreteras (afecciones de la CV-60) y la Confederación Hidrográfica del Júcar.\n\nEn paralelo, se redactó de forma íntegra el Catálogo de Protecciones Culturales. Este trabajo requirió una profunda investigación histórica y tipológica para identificar y delimitar el Núcleo Histórico Tradicional (NHT), así como la catalogación individualizada de la arquitectura residencial, religiosa y de bienes etnológicos característicos (riuraus, acueductos y lavaderos). La rigurosidad técnica de estos trabajos permitió superar los últimos filtros de la administración y alcanzar la Aprobación Definitiva por parte de la Comisión Territorial de Urbanismo en 2022, dotando al municipio de plena seguridad jurídica.',
    desc_full_en: 'The Structural General Plan of Llocnou de Sant Jeroni organizes a predominantly agricultural municipality structured by the Vernissa river (a tributary of the Serpis). The document defines a territorial model that seeks to preserve the landscape and heritage identity of the core, adapting to current regulatory requirements.\n\nDuring the final phase of the file, technical work focused on ensuring the document\'s viability before regional bodies by resolving conditioned sectoral reports. This involved readjusting the cartography and reports to meet the strict requirements of the Department of Education (school places reserve), Roads (CV-60 highway affections), and the Hydrographic Confederation.\n\nIn parallel, the Cultural Protection Catalogue was drafted in its entirety. This work required deep historical and typological research to identify and delimit the Traditional Historic Core (NHT), as well as the individual cataloguing of residential and religious architecture, and characteristic ethnological assets (riuraus, aqueducts, and washhouses). The technical rigour of these works allowed the Plan to pass the administration\'s final filters and achieve Definitive Approval by the Territorial Urban Planning Commission in 2022, providing the municipality with full legal certainty.',
    
    led_es: [
      'Redacción íntegra del Catálogo de Protecciones Culturales (identificación del Núcleo Histórico Tradicional, bienes etnológicos y arqueológicos)',
      'Resolución técnica de informes sectoriales críticos bloqueantes (Educación, Carreteras y Dominio Público Hidráulico)',
      'Modificación y elaboración de la planimetría normativa y estructural definitiva'
    ],
    led_en: [
      'Complete drafting of the Cultural Protection Catalogue (identification of the Traditional Historic Core, ethnological and archaeological assets)',
      'Technical resolution of critical blocking sectoral reports (Education, Roads, and Public Hydraulic Domain)',
      'Modification and production of the definitive normative and structural cartography'
    ],
    part_es: [
      'Reescritura y adaptación de las Memorias Justificativas y Estudios Complementarios',
      'Coordinación técnica con la Generalitat y la CTU para el desbloqueo final del expediente'
    ],
    part_en: [
      'Rewriting and adaptation of the Justification Reports and Complementary Studies',
      'Technical coordination with the Generalitat and the CTU for the final unblocking of the file'
    ],
    press: [], 
    link: 'https://mediambient.gva.es/auto/urbanismo/reg-planeamiento/4%20VALENCIA/46153%20LLOC%20NOU%20DE%20SAN%20JERONI/1%20P.%20GENERAL/46153-1000%202019-0002%20PLAN%20GENERAL/'
  },
{
    id: 'tibi', filter: 'pgm', abbr: 'TIB',
    lat: 38.5280, lng: -0.6120,
    name_es: 'Ampliación Polígono Industrial El Maigmó',
    name_en: 'Expansion of El Maigmó Industrial Estate',
    subtitle_es: 'Tibi · L\'Alcoià · Alicante', subtitle_en: 'Tibi · L\'Alcoià · Alicante',
    year: '2019 – 2022',
    client_es: 'IVACE / Ayuntamiento de Tibi', client_en: 'IVACE / Tibi City Council',
    role_es: 'Director / Coordinador de proyecto', role_en: 'Project Manager / Coordinator',
    area_es: '160.360 m² · Aprobado', area_en: '160,360 m² · Approved',
    tag_es: 'Planeamiento de Desarrollo', tag_en: 'Development Planning',
    accent: '#6e8bc8', gradA: '#10141a', gradB: '#1a222e', images: 2, 
    
    // Resumen rápido para el panel lateral (index.html)
    desc_short_es: 'Ampliación estratégica de 160.000 m² promovida por el IVACE. El proyecto destaca por su rápida tramitación y aprobación en 2022, logrando una óptima integración paisajística mediante una infraestructura verde que conecta los barrancos locales.',
    desc_short_en: 'Strategic 160,000 m² expansion promoted by IVACE. The project stands out for its rapid processing and approval in 2022, achieving optimal landscape integration through a green infrastructure that connects local ravines.',
    
    // Ficha exhaustiva para la página detallada (proyecto.html)
    desc_full_es: 'La modificación de las Normas Subsidiarias de Tibi responde a la necesidad de generar nuevo suelo industrial de calidad ante el agotamiento y saturación del Polígono El Maigmó. Promovida por el IVACE de la Generalitat Valenciana y el Ayuntamiento de Tibi, esta ampliación estratégica de más de 160.000 m² se asienta en un ámbito contiguo a la autovía A-7, exigiendo una ordenación muy cuidada para minimizar su impacto visual.\n\nA nivel técnico, el proyecto resuelve la integración paisajística aprovechando la topografía y morfología del terreno para escalonar las futuras edificaciones. Además, articula una Infraestructura Verde que funciona como corredor ecológico y visual entre los barrancos de Cartella y Ragil, garantizando una transición amable en los bordes del parque empresarial.\n\nComo Director y Coordinador del proyecto, gestioné a los equipos multidisciplinares implicados y me encargué de la co-redacción de las memorias, así como de la concepción, diseño y elaboración de toda la planimetría normativa y temática (incluyendo el diseño de los estándares gráficos del documento). La solidez técnica de la propuesta y la fluida interlocución con las administraciones permitieron resolver los pocos requerimientos sectoriales con gran agilidad, logrando la aprobación del planeamiento en 2022 y habilitando el avance de las obras de urbanización.',
    desc_full_en: 'The modification of the Subsidiary Rules of Tibi responds to the need to generate new high-quality industrial land due to the exhaustion of the El Maigmó Estate. Promoted by IVACE and the Tibi City Council, this strategic expansion of over 160,000 m² is located adjacent to the A-7 motorway, requiring careful planning to minimize its visual impact.\n\nTechnically, the project resolves the landscape integration by taking advantage of the terrain\'s topography to stagger future buildings. Furthermore, it articulates a Green Infrastructure that functions as an ecological and visual corridor between the Cartella and Ragil ravines, ensuring a smooth transition at the edges of the business park.\n\nAs Project Manager and Coordinator, I managed the involved multidisciplinary teams and was responsible for co-drafting the reports, as well as designing and producing all normative and thematic cartography (including the design of the document\'s graphic standards). The technical solidity of the proposal and fluid dialogue with the administrations allowed for the agile resolution of sectoral requirements, achieving the planning approval in 2022 and enabling the progress of the urbanization works.',
    
    led_es: [
      'Dirección del proyecto y toma de decisiones de la propuesta de ordenación estructural',
      'Elaboración integral de la planimetría temática y normativa, incluyendo el diseño de estándares gráficos',
      'Co-redacción de la Memoria Justificativa de la modificación'
    ],
    led_en: [
      'Project management and decision-making for the structural layout proposal',
      'Comprehensive production of thematic and normative cartography, including the design of graphic standards',
      'Co-drafting of the Modification\'s Justification Report'
    ],
    part_es: [
      'Coordinación técnica transversal con el departamento de medioambiente y las administraciones',
      'Resolución ágil de informes sectoriales hasta lograr la aprobación en 2022'
    ],
    part_en: [
      'Cross-cutting technical coordination with the environmental department and administrations',
      'Agile resolution of sectoral reports until achieving approval in 2022'
    ],
    press: [
      { source: 'Generalitat Valenciana', date: 'Oct 2022', title: 'El Consell y el Ayuntamiento de Tibi avanzan en los trabajos de ampliación del polígono El Maigmó', url: 'https://comunica.gva.es/es/detalle?id=391850795&site=373432074' },
      { source: 'Alicante Plaza', date: 'Jul 2023', title: 'Tibi ultima la EGM Parque Empresarial El Maigmó mientras busca el desarrollo de nuevo suelo industrial', url: 'https://alicanteplaza.es/alicanteplaza/tibi-ultima-la-egm-parque-empresarial-el-maigmo-mientras-busca-el-desarrollo-de-nuevo-suelo-industrial' }
    ],
    link: null,
    docs: [
      { name_es: 'Descargar Planos', name_en: 'Download Plans', url: 'https://oveac.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=b1401bf4-78c5-4f77-a5cb-a3b90241b778' },
      { name_es: 'Descargar Memoria', name_en: 'Download Report', url: 'https://oveac.gva.es/oficina_tactica/VisualizadorPDFIT?uuid=075b44db-2827-4e28-84be-157b6aa8a2bf' }
    ]
  }
];

/* ── INYECTORES DE COMPONENTES ── */
function renderNav(activePage) {
  const root = document.getElementById('nav-root');
  if (!root) return;

  root.innerHTML = `
  <nav class="nav">
    <div class="nav-identity">
      <div class="nav-id-mark">D</div>
      <div class="nav-id-text">
        <div class="nav-id-name">Daniel Serra <em>Font</em></div>
        <div class="nav-id-role" data-i18n="nav_id_role">Urbanista · Planificador Territorial</div>
      </div>
    </div>
    <div class="nav-links-slot">
      <div class="nav-links">
        <a href="index.html" ${activePage === 'index' ? 'class="active"' : ''} data-i18n="nav_projects">Proyectos</a>
        <a href="sobre-mi.html" ${activePage === 'sobre-mi' ? 'class="active"' : ''} data-i18n="nav_about">Sobre mí</a>
        <a href="servicios.html" ${activePage === 'servicios' ? 'class="active"' : ''} data-i18n="nav_services">Servicios</a>
        <a href="publicaciones.html" ${activePage === 'publicaciones' ? 'class="active"' : ''} data-i18n="nav_publications">Publicaciones</a>
        <a href="premios.html" ${activePage === 'premios' ? 'class="active"' : ''} data-i18n="nav_awards">Reconocimientos</a>
        <a href="blog.html" ${activePage === 'blog' ? 'class="active"' : ''} data-i18n="nav_blog">Blog</a>
        <a href="contacto.html" ${activePage === 'contacto' ? 'class="active"' : ''} data-i18n="nav_contact">Contacto</a>
      </div>
      <button class="lang-toggle" id="lang-toggle">EN</button>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </div>
  </nav>
  
  <div class="mobile-menu" id="mobile-menu">
    <div class="mobile-nav-links">
      <a href="index.html" ${activePage === 'index' ? 'class="active"' : ''} data-i18n="nav_projects">Proyectos</a>
      <a href="sobre-mi.html" ${activePage === 'sobre-mi' ? 'class="active"' : ''} data-i18n="nav_about">Sobre mí</a>
      <a href="servicios.html" ${activePage === 'servicios' ? 'class="active"' : ''} data-i18n="nav_services">Servicios</a>
      <a href="publicaciones.html" ${activePage === 'publicaciones' ? 'class="active"' : ''} data-i18n="nav_publications">Publicaciones</a>
      <a href="premios.html" ${activePage === 'premios' ? 'class="active"' : ''} data-i18n="nav_awards">Reconocimientos</a>
      <a href="blog.html" ${activePage === 'blog' ? 'class="active"' : ''} data-i18n="nav_blog">Blog</a>
      <a href="contacto.html" ${activePage === 'contacto' ? 'class="active"' : ''} data-i18n="nav_contact">Contacto</a>
    </div>
  </div>
  `;

  // Lógica de apertura y cierre del menú
  const btn = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if(btn && menu) {
    btn.addEventListener('click', () => {
      const isOpen = menu.classList.contains('open');
      if(isOpen) {
        menu.classList.remove('open');
        btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`;
      } else {
        menu.classList.add('open');
        btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
      }
    });
  }
}
function renderFooter() {
  const root = document.getElementById('footer-root');
  if (!root) return;

  root.innerHTML = `
  <footer class="privacy-bar-foot">
    <span>© 2025 Daniel Serra Font</span>
    <a href="privacidad.html">Política de privacidad</a>
    <a href="aviso-legal.html">Aviso legal</a>
  </footer>
  `;
}

/* ── DICCIONARIO I18N GLOBAL ── */
const i18n = {
  es: {
    /* ── Nav ── */
    nav_projects: 'Proyectos', nav_about: 'Sobre mí', nav_services: 'Servicios',
    nav_publications: 'Publicaciones', nav_awards: 'Reconocimientos',
    nav_blog: 'Blog', nav_contact: 'Contacto',
    nav_role: 'Urbanista · Planificador Territorial', nav_id_role: 'Urbanista · Planificador Territorial',
    sb_name_index: '<em>Proyectos</em>',
    sb_name_about: 'Sobre <em>mí</em>',
    pg_title_about: 'Daniel Serra<br><em>Font</em>',
    sb_name_svc: 'Servicios <em>&amp; Consultoría</em>',
    pg_title_svc: 'Áreas de<br><em>servicio</em>',
    sb_name_premios: '<em>Reconocimientos</em>',
    pg_title_premios: 'Hitos y <br><em>Reconocimientos</em>',
    sb_name_blog: '<em>Blog</em>',
    pg_title_blog: 'Reflexiones <em>Urbanas</em>',
    sb_name_contact: '<em>Contacto</em>',
    pg_title_contact: 'Iniciemos proyectos<br><em>juntos</em>',
    
    /* ── Sobre mí ── */
    sb_role: 'Arquitecto · Urbanista\nPlanificador Territorial',
    ph_desc: 'Urbanista y Planificador Territorial especializado en planeamiento general, planes parciales, estudios de paisaje y consultoría territorial. Más de 8 años de experiencia redactando y tramitando instrumentos urbanísticos.',
    sec_exp: 'Trayectoria profesional', tl1_period: '2021 — Actualidad', tl1_role: 'Consultoría Técnica e Independiente en Urbanismo',
    tl1_type: 'Freelance', tl1_desc: 'Soporte especializado y consultoría externa en la redacción y gestión de instrumentos de planeamiento (PGE, PP, Estudios de Paisaje) para administraciones y despachos de arquitectura.',
    tl1b_role: 'Director · Velat Studio', tl1b_type: 'Autónomo', tl1b_desc: 'Dirección del estudio de interiorismo en Valencia especializado en contract y hospitality, centrado en la experiencia de usuario y coherencia de marca.',
    tl2_role: 'Urbanista, Planificador Territorial & Arquitecto de Concursos', tl2_desc: 'Integrado en el equipo de urbanismo y planificación territorial de IDOM. Participación en planes generales, planes parciales y proyectos de desarrollo territorial a distintas escalas.',
    tl3_role: 'Colaborador I+D Aplicaciones Urbanísticas', tl3_desc: 'Colaboración en el desarrollo de aplicaciones territoriales y urbanísticas en el marco de la alianza entre la UPV y el Institut Cartogràfic Valencià, con integración de datos geoespaciales.',
    tag_lotup: 'Planeamiento LOTUP', tag_pgm2: 'Planes Estructurales', tag_int2: 'Interiorismo', tag_vis2: 'Simulaciones visuales',
    tag_pgm3: 'Planeamiento general', tag_terr: 'Planificación territorial', tag_comp: 'Concursos arquitectura', tag_carto: 'Cartografía digital',
    sec_edu: 'Formación académica', edu1_title: 'Máster en Interiorismo, Creatividad e Innovación', edu1_school: "Escola d'Art i Superior de Disseny Barreira · Valencia",
    edu2_title: 'Curso en Infraestructura Verde y Paisaje', edu2_school: 'Formación especializada', edu3_title: 'Máster en Arquitectura', edu4_title: 'Grado en Fundamentos de la Arquitectura',
    sec_langs: 'Idiomas', lang_es: 'Español', lang_ca: 'Catalán', lang_en: 'Inglés', lang_ja: 'Japonés', lvl_native: 'Nativo',
    sec_skills: 'Software & Herramientas', sk_prog: 'Programación & IA', sk_3d: '3D & Visualización', sk_video: 'Edición de Vídeo', sk_spec: 'Especialización',
    sp_land: 'Estudios Paisaje', sp_vis: 'Sim. visuales', sp_cat: 'Catálogos', sp_sus: 'Urb. sostenible', sp_int: 'Interiorismo',
    sec_feat: 'Proyectos destacados', hc1_label: 'Suelo Productivo · Aprobado', hc1_name: 'Ampliación del Parque Empresarial de Elche · Sector E-49',
    hc2_label: 'Planeamiento General · En tramitación', hc2_name: 'Plan General Estructural de Jávea / Xàbia',
    hc3_label: 'Planeamiento General · En tramitación', hc3_name: 'Plan General de Torrent',
    sec_other: 'Otros trabajos', ow1_title: 'Vídeo · Fondos Next Generation EU — Universidad de Murcia',
    ow1_desc: 'Producción y edición del vídeo para fondos Next Generation sobre la renovación de la antigua universidad. Combinó visualización 3D, motion graphics y edición de vídeo.',
    ow1_tag: 'Audiovisual', ow2_title: 'Catálogo de Protecciones — Llocnou de Sant Jeroni',
    ow2_desc: 'Redacción íntegra del Catálogo de Protecciones del municipio, aprobado junto con el Plan General Estructural. Fichas individualizadas del patrimonio arquitectónico, etnológico y paisajístico.',
    ow2_tag: 'Aprobado', ow_various: 'Varios', ow3_title: 'Estudios de Paisaje con simulaciones visuales',
    ow3_desc: 'Elaboración de Estudios de Paisaje para municipios valencianos con simulaciones visuales de integración paisajística mediante SketchUp, 3ds Max y Corona Render.',
    ow3_tag: 'Paisaje', velat_title: 'También dirijo Velat Studio',
    velat_desc: 'Velat Studio es un estudio de arquitectura e interiorismo con sede en Valencia. Aunamos arquitectura, interiorismo y diseño para dar respuesta integral a proyectos de reforma, interiorismo comercial y residencial, y branding espacial.',
    
    /* ── Servicios ── */
    fi_badge: 'Consultoría Técnica Independiente',
    fi_text: 'Ofrezco <strong>soporte técnico especializado y consultoría externa</strong> en materia de urbanismo y ordenación del territorio.',
    st_colab: 'Líneas de colaboración técnica', sb_label_svc: '03 — Servicios & Consultoría', sb_role_svc: 'Planeamiento · Paisaje · SIG',
    sb_desc_svc: 'Apoyo técnico integral en planeamiento territorial y urbanismo para administraciones locales, estudios de arquitectura y promotores privados.',
    s1_title: 'Planeamiento General (LOTUP)', s1_desc: 'Apoyo técnico en la redacción de Planes Generales Estructurales.', s1_tag: 'Planeamiento general',
    s2_title: 'Planeamiento de Desarrollo', s2_desc: 'Colaboración técnica en la redacción de Planes Parciales.', s2_tag: 'Desarrollo urbanístico',
    s3_title: 'Estudios de Paisaje', s3_desc: 'Apoyo en la elaboración de Estudios de Paisaje.', s3_tag: 'Paisaje · 3D',
    s4_title: 'Catálogos de Protecciones', s4_desc: 'Colaboración técnica en la redacción de Catálogos de Protecciones.', s4_tag: 'Patrimonio',
    s5_title: 'Cartografía y SIG', s5_desc: 'Análisis territorial mediante QGIS / ArcGIS.', s5_tag: 'GIS · Cartografía',
    s6_title: 'Consultoría Urbanística', s6_desc: 'Asesoramiento técnico a particulares, promotores y administraciones.', s6_tag: 'Consultoría',
    s7_title: 'Urbanismo Sostenible', s7_desc: 'Apoyo en la integración de criterios de sostenibilidad.', s7_tag: 'Sostenibilidad',
    s8_title: 'Informes Técnicos', s8_desc: 'Colaboración en la redacción de informes urbanísticos.', s8_tag: 'Análisis · Informes',
    sec_method: 'Metodología de trabajo', method_p1: 'Cada proyecto parte de un análisis exhaustivo del territorio.', method_p2: 'La experiencia acumulada garantiza un conocimiento profundo de los procesos.',
    ap1_title: 'Análisis territorial', ap1_desc: 'Diagnosis del municipio: estructura urbana, clasificación del suelo.',
    ap2_title: 'Redacción técnica', ap2_desc: 'Elaboración completa: memoria justificativa, normativa urbanística.',
    ap3_title: 'Tramitación administrativa', ap3_desc: 'Seguimiento del expediente ante organismos sectoriales.',
    ap4_title: 'Participación ciudadana', ap4_desc: 'Exposición pública y procesos de participación integrados.',
    sec_clients: 'Clientes', cta_title_svc: 'Cada municipio tiene sus propias <em>necesidades urbanísticas.</em>',
    cta_desc_svc: 'Si tienes un proyecto de planeamiento, necesitas asesoramiento técnico, escríbeme.',

    /* ── Publicaciones y Prensa ── */
    sb_label_pub: '04 — Prensa & Medios', sb_role_pub: 'Noticias · Notas oficiales',
    sb_desc_pub: 'Recopilación de las principales apariciones en medios de comunicación y notas de prensa oficiales sobre los planes urbanísticos tramitados.',
    sb_name_pub: '<em>Prensa</em>', pg_title_pub: 'Cobertura en <br><em>Medios</em>',
    st_pubs: 'Prensa', st_cong: 'Noticias', st_chap: 'Oficial', st_pres: 'Entrevistas',
    sb_types_title: 'Tipología', ft1: 'Prensa generalista', ft2: 'Prensa local', ft3: 'Notas del Ayuntamiento', ft4: 'Comunicaciones GVA', ft5: 'Revistas técnicas',
    sb_topics_title: 'Temáticas', tag_green: 'Infraest. verde', tag_env: 'Eval. ambiental', tag_met: 'Suelo industrial',
    sb_note_title: 'Nota editorial', sb_note_val: 'Selección de impactos mediáticos de los planes generales y modificaciones estructurales aprobadas.',
    pg_num_pub: '04 — Prensa & Medios', sec_pubs: 'Impacto en Medios',
    
    // Etiquetas de grupo
    mg1_label: 'Elche · Sector E-49', mg2_label: 'Jávea / Xàbia · Plan General Estructural', mg3_label: 'Tibi · Polígono El Maigmó',
    badge_press: 'Prensa', badge_official: 'Oficial',
    
    // Noticias Elche
    p1_title: 'Elche impulsa la ampliación del Parque Empresarial con 41,5 millones de euros de inversión', p1_venue: 'Ayuntamiento de Elche',
    p2_title: 'Elche no espera iniciar la ampliación del Parque Empresarial hasta septiembre de 2026', p2_venue: 'Alicante Plaza',
    p3_title: 'El Parque Empresarial de Elche contará con una ampliación de 600.000 metros cuadrados', p3_venue: 'Gestores Públicos',
    
    // Noticias Jávea
    p4_title: 'Xàbia eliminará casi 10 millones de m² de suelo urbanizable en su nuevo Plan General', p4_venue: 'elDiario.es',
    p5_title: 'La versión preliminar del Plan General protege otros 201.220 m² tras estudiar informes y alegaciones', p5_venue: 'Ayuntamiento de Xàbia',
    p6_title: 'El urbanismo de Xàbia se pone a las puertas de aprobar el Plan General Estructural', p6_venue: 'Javea.com',
    
    // Noticias Tibi
    p7_title: 'El Consell y el Ayuntamiento de Tibi avanzan en los trabajos de ampliación del polígono El Maigmó', p7_venue: 'Generalitat Valenciana',
    p8_title: 'Tibi ultima la EGM Parque Empresarial El Maigmó mientras busca el desarrollo de nuevo suelo', p8_venue: 'Alicante Plaza',
    
    lnk_ver: 'Leer noticia ↗', 
    cta_title_pub: 'El urbanismo transforma el <em>territorio y la sociedad.</em>', cta_desc_pub: 'Si buscas desarrollar un planeamiento con viabilidad técnica y respaldo institucional, cuéntame tu proyecto.',

    /* ── Premios / Reconocimientos ── */
    sb_label_premios: '05 — Reconocimientos', sb_role_premios: 'Aprobaciones · Hitos · Informes',
    pg_desc_premios: 'Planes aprobados, informes técnicos favorables e hitos administrativos relevantes en los proyectos redactados y tramitados ante la administración autonómica.',
    st_approved: 'Aprobados', st_pending: 'En tramitación', st_reports: 'Informes favorables', st_milestones: 'Hitos clave',
    sb_index_title: 'Estado de los instrumentos',
    pl1: 'PGE Llocnou de Sant Jeroni', pl2: 'Catálogo Protecciones Llocnou', pl3: 'Sector E-49 Elche', pl4: 'Mod. Estructural PGOU Elche', pl5: 'PGE Segart', pl6: 'PGE Gilet',
    badge_ok: 'Aprobado', badge_complete: 'Tramitación completa', badge_ctu: 'Aprobado CTU 2021', badge_pending: 'En tramitación',
    sb_data_title: 'Datos destacados', sb_lbl_javea: 'PGE Jávea', sb_lbl_elche: 'E-49 Elche', sb_lbl_organ: 'Órgano aprobador', sb_lbl_normativa: 'Normativa',
    pg_num_premios: '05 — Reconocimientos', sec_plans: 'Planes aprobados & en tramitación',
    ac_municipio: 'Municipio', ac_year: 'Año', ac_years: 'Años', ac_organ: 'Órgano', ac_content: 'Contenido', ac_surface: 'Superficie', ac_norm: 'Normativa',
    
    rec1_title: 'Plan General Estructural de Llocnou de Sant Jeroni', rec1_muni: 'Llocnou de Sant Jeroni (Valencia)', rec1_organ: 'Comisión Territorial de Urbanismo — GVA', 
    rec1_desc: 'Hito urbanístico excepcional: Aprobación Definitiva en junio de 2022. La redacción íntegra del Plan y la resolución técnica de los informes sectoriales bloqueantes permitieron culminar la adaptación a la LOTUP y dotar al municipio de seguridad jurídica total.',
    
    rec2_title: 'Catálogo de Protecciones de Llocnou de Sant Jeroni', rec2_muni: 'Llocnou de Sant Jeroni (Valencia)', rec2_content: 'Patrimonio arquitectónico, etnológico y paisajístico', 
    rec2_desc: 'Documento clave redactado íntegramente desde cero. Su profundidad investigadora permitió identificar el Núcleo Histórico Tradicional e individualizar el patrimonio etnológico, logrando su aprobación definitiva por la Conselleria de Cultura.',
    
    rec3_title: 'Ampliación del Parque Empresarial de Elche · Sector E-49', rec3_muni: 'Elche (Alicante)', rec3_surface: '~600.000 m² · Inversión de 40M€', 
    rec3_desc: 'Expediente urbanístico íntegro resuelto de forma impecable. Aprobación del Plan Parcial y el Plan de Ordenación Pormenorizada (POP) con informes sectoriales favorables sin condicionantes, habilitando la mayor bolsa de suelo industrial de Alicante.',
    
    rec4_title: 'Modificación Estructural PGOU Elche · Sector E-49', rec4_muni: 'Elche (Alicante)', rec4_organ: 'Comisión Territorial de Urbanismo — GVA', 
    rec4_desc: 'Aprobación Definitiva unánime por la CTU en julio de 2021. El informe autonómico felicitó expresamente la calidad documental, la precisión de la ordenación de la Infraestructura Verde y la viabilidad ambiental de los parques inundables propuestos.',
    
    rec5_title: 'Plan General Estructural de Segart', rec5_muni: 'Segart (Valencia)', 
    rec5_desc: 'Borrador del Plan General Estructural adaptado a la LOTUP. Proyecto de máxima sensibilidad ambiental centrado en la contención y mitigación de impactos de urbanizaciones periféricas en pleno corazón del Parque Natural de la Serra Calderona.',
    
    rec6_title: 'Plan General Estructural de Gilet', rec6_muni: 'Gilet (Valencia)', 
    rec6_desc: 'Borrador del PGE y POP orientado a desbloquear la ejecución histórica de zonas verdes y a regularizar los crecimientos en suelo no urbanizable mediante nuevos mecanismos de gestión urbanística bajo la influencia de la Serra Calderona.',
    
    sec_milestones: 'Hitos administrativos',
    
    t1_title: 'Aprobación Definitiva CTU — PGE Llocnou de Sant Jeroni', t1_org: 'Comisión Territorial de Urbanismo de Valencia', 
    t1_desc: 'Resolución de junio de 2022 que otorga la Aprobación Definitiva al PGE. El documento técnico dio respuesta satisfactoria a los complejos requerimientos de carreteras, hidrografía y educación, superando la parálisis administrativa.',
    
    t2_title: 'Aprobación Unánime y Felicitación Técnica — Sector E-49 Elche', t2_org: 'Pleno del Ayuntamiento / Generalitat Valenciana', 
    t2_desc: 'Aprobación Definitiva por unanimidad política y presentación formal del PAI. La administración autonómica emitió informe favorable sin condicionantes, incluyendo un reconocimiento expreso al equipo redactor por la agilidad y excepcional claridad documental.',
    
    t3_title: '144 informes sectoriales favorables — PGE Jávea', t3_org: 'Administración Estatal y Autonómica', 
    t3_desc: 'Hito de gestión técnica: obtención de más de 140 informes sectoriales favorables. Este trabajo validó la desclasificación de 10 millones de m² de suelo urbanizable, blindando el modelo proteccionista previo a la Declaración Ambiental.',
    
    t4_title: 'Aprobación Definitiva y "Cero Alegaciones" — Polígono El Maigmó', t4_org: 'IVACE / Ayuntamiento de Tibi', 
    t4_desc: 'El Documento Inicial Estratégico (DIE) superó la exposición pública sin recibir ni una sola alegación en contra. Este hito demuestra una concertación técnica impecable previa, permitiendo una tramitación y Aprobación Definitiva extraordinariamente ágil.',
    
    cta_title_premios: '¿Necesitas un plan que llegue <em>hasta la Aprobación Definitiva?</em>', cta_desc_premios: 'La diferencia entre un buen plano y un Plan General aprobado es la gestión técnica y la precisión documental. Hablemos.',

    sec_quotes: 'El Aval de la <em>Administración</em>',
    
    q1_source: 'Concejalía de Urbanismo — Ayuntamiento de Elche', q1_date: '2021 · Elche',
    q1_text: '«El Ayuntamiento culmina una iniciativa en la que ha venido trabajando con determinación y constancia. Una buena noticia que nos debe hacer reflexionar sobre la agilidad de los procedimientos urbanísticos para la reactivación de la economía.»',
    q1_ctx: 'Aprobación unánime en Pleno — Mod. Estructural PGOU Elche',
    
    q2_source: 'Conselleria de Política Territorial', q2_date: '2022 · Llocnou de Sant Jeroni',
    q2_text: '«El documento técnico da respuesta satisfactoria a las complejas exigencias sectoriales y resuelve con excepcional rigor la identificación del Núcleo Histórico Tradicional y la catalogación de su patrimonio.»',
    q2_ctx: 'Aprobación Definitiva — PGE y Catálogo Llocnou de Sant Jeroni',

    q3_source: 'Dirección General de Medio Natural y Evaluación Ambiental', q3_date: '2020 · Elche',
    q3_text: '«Se valora positivamente la documentación presentada, tanto por el contenido como por la organización y la claridad expositiva. También es destacable el proceso de participación pública desarrollado.»',
    q3_ctx: 'Declaración Ambiental y Territorial Estratégica (DATE) — Exp. 062-2016-EAE',

    q4_source: 'Comunicación Institucional — Ayuntamiento de Xàbia', q4_date: '2023 · Jávea',
    q4_text: '«El nuevo Plan General culmina su fase final avalado por 144 informes sectoriales favorables. Una acción que protege 10 millones de metros cuadrados de suelo urbanizable, paralizando el crecimiento horizontal.»',
    q4_ctx: 'Pleno de Aprobación del Documento Final — PGE Xàbia',

    /* ── Blog ── */
    sb_label_blog: '06 — Blog', sb_role_blog: 'Ensayos · Notas · Crítica', st_articles: 'Artículos', st_cats: 'Categorías',
    st_last: 'Última entrada', st_open: 'Libre acceso', sb_cats_title: 'Categorías', cat1: 'Planeamiento', cat2: 'Paisaje', cat3: 'Tecnología',
    cat4: 'Municipios rurales', cat5: 'Participación', sb_tags_title: 'Etiquetas', sb_note_title: 'Sobre el blog',
    sb_note_val: 'Notas, ensayos y reflexiones sobre urbanismo, territorio y ciudad contemporánea. Sin periodicidad fija — se escribe cuando algo merece ser escrito.',
    sb_btn: 'Contactar', pg_num_blog: '06 — Blog', 
    sb_name_blog: '<em>Blog</em>', sb_role_blog: 'Ensayos · Notas · Crítica', pg_desc_blog: 'Notas, ensayos y reflexiones sobre urbanismo, territorio y ciudad contemporánea.', st_articles: 'Artículos',    pg_desc_blog: 'Notas, ensayos y reflexiones sobre urbanismo, territorio y ciudad contemporánea. Ideas en proceso, observaciones de campo y lecturas críticas sobre la práctica urbanística.',
    img_placeholder: 'Imagen del artículo', lnk_read: 'Leer artículo', 
    a1_title_short: 'Parques inundables e Infraestructura Verde',    a1_title: '¿Para qué sirve un Plan General hoy? Reflexiones desde la práctica valenciana', a1_excerpt: 'Después de años redactando planes generales en municipios grandes y pequeños, me hago una pregunta que parece obvia pero que no lo es tanto.',
    cat1: 'Planeamiento / PATRICOVA',
    a1_title: 'De la restricción a la oportunidad: los parques inundables como Infraestructura Verde en suelo productivo',
    a1_excerpt: 'El urbanismo contemporáneo exige un cambio de paradigma: no podemos seguir luchando contra el agua; debemos darle espacio. Análisis de cómo superar los filtros del PATRICOVA mediante el diseño resiliente, con el caso de éxito del Sector E-49 de Elche.',
    a2_title_short: 'Desclasificación masiva de suelo',
    cat2: 'Ordenación / LOTUP',
    a2_title: 'De la burbuja a la razón territorial: cómo ejecutar la desclasificación masiva de suelo',
    a2_excerpt: 'Análisis de la metodología técnica para adaptar un municipio al IMOS y la ETCV, con el caso de éxito de la desclasificación de 10 millones de m² y 144 informes sectoriales favorables en Jávea.',
    a3_title_short: 'La amenaza de la conurbación',
    cat3: 'Análisis / Paisaje',
    a3_title: 'La amenaza de la conurbación: por qué necesitamos pasillos verdes',
    a3_excerpt: 'Análisis sobre cómo la Infraestructura Verde evita que los municipios se fusionen en un continuo de asfalto, perdiendo su resiliencia.',
    note_label: 'Nota editorial', 
    cta_title_blog: '¿Tienes una pregunta sobre <em>urbanismo o planeamiento?</em>', cta_desc_blog: 'Si alguno de estos artículos te genera dudas o te gustaría hablar sobre tu proyecto, escríbeme sin compromiso.',    
    cta_desc_blog: 'Si alguno de estos artículos te genera dudas o te gustaría hablar sobre tu proyecto, escríbeme sin compromiso.',

    /* ── Contacto ── */
    sb_contact_title: 'Contacto', sb_phone_lbl: 'Teléfono', sb_addr_lbl: 'Dirección', sb_location_lbl: 'Ubicación',
    sb_status: 'Disponible para nuevos proyectos', lbl_email_studio: 'Email estudio', lbl_email_personal: 'Email personal',
    lbl_studio: 'Estudio', lbl_location: 'Ubicación', lbl_response: 'Respuesta', val_response: 'Normalmente en 24–48 h',
    sb_avail_title: 'Disponible para', av1: 'Planes Generales Estructurales', av2: 'Planeamiento de desarrollo', av3: 'Estudios de Paisaje', av4: 'Consultoría urbanística', av5: 'Tramitación administrativa', av6: 'Formación y ponencias',
    sb_links_title: 'Perfiles', lnk_services: 'Servicios', lnk_awards: 'Reconocimientos',
    pg_num: '07 — Contacto', pg_desc_contact: '¿Tienes un proyecto urbanístico en mente o necesitas asesoramiento técnico? Cuéntame en qué puedo ayudarte.',
    ib_contact: 'Datos de contacto', ib_avail: 'Disponible para', ib_studio: 'Velat Studio', studio_desc: 'Estudio de interiorismo con sede en Valencia. Especializado en diseño de interiores y reformas.',
    lnk_velat: 'Visitar Velat Studio', form_success: 'Mensaje enviado correctamente. Te responderé en breve.',
    lbl_name: 'Nombre *', ph_name: 'Tu nombre', lbl_org: 'Organización / Municipio', ph_org: 'Ayuntamiento de..., empresa, etc.',
    lbl_subject: 'Tipo de consulta', opt_select: 'Selecciona una opción', opt_pgm: 'Plan General / Estructural', opt_dev: 'Planeamiento de desarrollo (PAI, PRI…)', opt_land: 'Estudio de Paisaje', opt_cons: 'Consultoría urbanística', opt_proc: 'Tramitación administrativa', opt_col: 'Colaboración técnica', opt_form: 'Formación / Ponencia', opt_other: 'Otro',
    lbl_msg: 'Mensaje *', ph_msg: 'Cuéntame en qué consiste tu proyecto o consulta…', lbl_privacy: 'Acepto la política de privacidad y el tratamiento de mis datos para gestionar esta consulta.',
    btn_send: 'Enviar mensaje', form_note: '⚡ Este formulario es estático. Conéctalo a Formspree, EmailJS o un backend propio para recibir los mensajes.',
    rs1: 'Tiempo de respuesta habitual', rs2: 'Proyectos respondidos', rs3: 'Disponible para nuevos proyectos', foot_meta: 'Urbanista · Planificador Territorial',

    /* ── Ficha de Proyecto ── */
    proj_year: 'Año', proj_client: 'Cliente', proj_role: 'Rol', proj_territory: 'Territorio',
    proj_tasks_led: 'Tareas lideradas', proj_participation: 'Participación en equipo', 
    proj_press: 'Cobertura mediática', proj_back: '← Volver al mapa', 
    proj_source: 'Documentación completa ↗', proj_not_found: 'Proyecto no encontrado'  },
  en: {
    /* ── Nav ── */
    nav_projects: 'Projects', nav_about: 'About', nav_services: 'Services',
    nav_publications: 'Publications', nav_awards: 'Recognition',
    nav_blog: 'Blog', nav_contact: 'Contact',
    nav_role: 'Urban Planner · Territorial Planner', nav_id_role: 'Urban Planner · Territorial Planner',
    sb_name_index: '<em>Projects</em>',
    sb_name_about: 'About <em>me</em>',
    pg_title_about: 'Daniel Serra<br><em>Font</em>',
    sb_name_svc: 'Services <em>&amp; Consultancy</em>',
    pg_title_svc: 'Service<br><em>areas</em>',
    sb_name_premios: '<em>Recognition</em>',
    pg_title_premios: 'Milestones and <br><em>Recognitions</em>',
    sb_name_blog: '<em>Blog</em>',
    pg_title_blog: 'Urban <em>Reflections</em>',
    sb_name_contact: '<em>Contact</em>',
    pg_title_contact: "Let's start projects<br><em>together</em>",
    
    /* ── Sobre mí ── */
    sb_role: 'Architect · Urban Planner\nTerritorial Planner',
    ph_desc: 'Urban and Territorial Planner specialised in general planning, partial plans, landscape studies and territorial consultancy. Over 8 years drafting and processing urban planning instruments before the Valencian Government.',
    sec_exp: 'Professional career', tl1_period: '2021 — Present', tl1_role: 'Independent Technical Consultancy in Urban Planning',
    tl1_type: 'Freelance', tl1_desc: 'Specialized support and external consultancy in drafting and managing planning instruments (PGE, PP, Landscape Studies) for local authorities and architecture firms.',
    tl1b_role: 'Director · Velat Studio', tl1b_type: 'Self-employed', tl1b_desc: 'Director of Velat Studio, an interior design studio in Valencia specializing in contract and hospitality, focused on user experience and brand coherence.',
    tl2_role: 'Urban Planner, Territorial Planner & Competition Architect', tl2_desc: 'Part of the urban planning and territorial team at IDOM. Involved in general plans, partial plans and territorial development projects at different scales.',
    tl3_role: 'R&D Collaborator — Urban Applications', tl3_desc: 'Collaboration on territorial and urban applications within the UPV–Institut Cartogràfic Valencià partnership, integrating geospatial data with digital tools for territory analysis.',
    tag_lotup: 'LOTUP Planning', tag_pgm2: 'Structural Plans', tag_int2: 'Interior Design', tag_vis2: 'Visual simulations',
    tag_pgm3: 'General planning', tag_terr: 'Territorial planning', tag_comp: 'Architecture competitions', tag_carto: 'Digital cartography',
    sec_edu: 'Academic background', edu1_title: 'Master in Interior Design, Creativity & Innovation', edu1_school: "Escola d'Art i Superior de Disseny Barreira · Valencia",
    edu2_title: 'Course in Green Infrastructure and Landscape', edu2_school: 'Specialist training · Valencian Community', edu3_title: 'Master of Architecture', edu4_title: 'Bachelor in Architecture Fundamentals',
    sec_langs: 'Languages', lang_es: 'Spanish', lang_ca: 'Catalan', lang_en: 'English', lang_ja: 'Japanese', lvl_native: 'Native',
    sec_skills: 'Software & Tools', sk_prog: 'Programming & AI', sk_3d: '3D & Visualisation', sk_video: 'Video Editing', sk_spec: 'Specialisation',
    sp_land: 'Landscape Studies', sp_vis: 'Visual sims.', sp_cat: 'Catalogues', sp_sus: 'Sust. urbanism', sp_int: 'Interior design',
    sec_feat: 'Featured projects', hc1_label: 'Productive Land · Approved', hc1_name: 'Expansion of Elche Business Park · Sector E-49',
    hc2_label: 'General Planning · In progress', hc2_name: 'Structural General Plan of Jávea / Xàbia',
    hc3_label: 'General Planning · In progress', hc3_name: 'General Plan of Torrent',
    sec_other: 'Other work', ow1_title: 'Video · Next Generation EU Funds — University of Murcia',
    ow1_desc: 'Production and editing of the video for Next Generation funds on university building renewal. Combined 3D visualisation, motion graphics and video editing.',
    ow1_tag: 'Audiovisual', ow2_title: 'Protection Catalogue — Llocnou de Sant Jeroni',
    ow2_desc: 'Complete drafting of the municipal Protection Catalogue, approved together with the Structural General Plan, with individual sheets for each catalogued heritage element.',
    ow2_tag: 'Approved', ow_various: 'Various', ow3_title: 'Landscape Studies with visual simulations',
    ow3_desc: 'Landscape Studies for Valencian municipalities with visual landscape integration simulations using SketchUp, 3ds Max and Corona Render.',
    ow3_tag: 'Landscape', velat_title: 'I also run Velat Studio',
    velat_desc: 'Velat Studio is an architecture and interior design studio based in Valencia. We combine architecture, interior design and branding to deliver comprehensive responses to renovation, commercial interiors and spatial branding projects.',
    
    /* ── Servicios ── */
    fi_badge: 'Independent Technical Consultancy',
    fi_text: 'I provide <strong>specialized technical support and external consultancy</strong> in urban and territorial planning.',
    st_colab: 'Technical collaboration areas', sb_label_svc: '03 — Services & Consultancy', sb_role_svc: 'Planning · Landscape · GIS',
    sb_desc_svc: 'Full technical support in territorial planning and urban design for local authorities, architecture practices and private developers.',
    s1_title: 'General Planning (LOTUP)', s1_desc: 'Technical support in drafting Structural General Plans and Detailed Planning Orders adapted to LOTUP.', s1_tag: 'General planning',
    s2_title: 'Development Planning', s2_desc: 'Technical collaboration in drafting Partial Plans.', s2_tag: 'Urban development',
    s3_title: 'Landscape Studies', s3_desc: 'Support in preparing Landscape Studies under Valencian regulations.', s3_tag: 'Landscape · 3D',
    s4_title: 'Heritage Protection Catalogues', s4_desc: 'Technical collaboration in drafting Protection Catalogues.', s4_tag: 'Heritage',
    s5_title: 'Cartography & GIS', s5_desc: 'Territorial analysis using QGIS / ArcGIS.', s5_tag: 'GIS · Cartography',
    s6_title: 'Urban Planning Consultancy', s6_desc: 'Technical advice to individuals, developers and local authorities.', s6_tag: 'Consultancy',
    s7_title: 'Sustainable Urbanism', s7_desc: 'Support in integrating sustainability criteria.', s7_tag: 'Sustainability',
    s8_title: 'Technical Reports', s8_desc: 'Collaboration in drafting urban planning reports.', s8_tag: 'Analysis · Reports',
    sec_method: 'Working methodology', method_p1: 'Every project begins with a thorough analysis of the territory.', method_p2: 'Experience accumulated ensures a deep knowledge of administrative processes.',
    ap1_title: 'Territorial analysis', ap1_desc: 'Municipal diagnosis: urban structure, land classification.',
    ap2_title: 'Technical drafting', ap2_desc: 'Complete preparation: planning memoranda, urban regulations.',
    ap3_title: 'Administrative processing', ap3_desc: 'File follow-up before sectoral bodies and the Conselleria.',
    ap4_title: 'Citizen participation', ap4_desc: 'Public information periods and participation processes.',
    sec_clients: 'Clients', cta_title_svc: 'Every municipality has its own <em>planning needs.</em>',
    cta_desc_svc: "If you have a planning project, need technical advice, get in touch.",

    /* ── Publicaciones y Prensa ── */
    sb_label_pub: '04 — Press & Media', sb_role_pub: 'News · Official releases',
    sb_desc_pub: 'A compilation of the main media appearances and official press releases regarding the processed urban plans.',
    sb_name_pub: '<em>Press</em>', pg_title_pub: 'Media <br><em>Coverage</em>',
    st_pubs: 'Press', st_cong: 'News', st_chap: 'Official', st_pres: 'Interviews',
    sb_types_title: 'Type', ft1: 'General press', ft2: 'Local press', ft3: 'City Council notes', ft4: 'GVA Communications', ft5: 'Technical journals',
    sb_topics_title: 'Topics', tag_green: 'Green infra.', tag_env: 'Env. assessment', tag_met: 'Industrial land',
    sb_note_title: 'Editorial note', sb_note_val: 'Selection of media impacts from approved general plans and structural modifications.',
    pg_num_pub: '04 — Press & Media', sec_pubs: 'Media Impact',
    
    mg1_label: 'Elche · Sector E-49', mg2_label: 'Jávea / Xàbia · Structural General Plan', mg3_label: 'Tibi · El Maigmó Estate',
    badge_press: 'Press', badge_official: 'Official',
    
    p1_title: 'Elche promotes the expansion of the Business Park with a 41.5 million euro investment', p1_venue: 'Elche City Council',
    p2_title: 'Elche does not expect to start the Business Park expansion until September 2026', p2_venue: 'Alicante Plaza',
    p3_title: 'The Elche Business Park will have a 600,000 square meter expansion', p3_venue: 'Gestores Públicos',
    p4_title: 'Xàbia will eliminate almost 10 million m² of developable land in its new General Plan', p4_venue: 'elDiario.es',
    p5_title: 'The preliminary version of the General Plan protects another 201,220 m² after studying reports and allegations', p5_venue: 'Xàbia City Council',
    p6_title: 'Xàbia urban planning is on the verge of approving the Structural General Plan', p6_venue: 'Javea.com',
    p7_title: 'The Consell and the Tibi City Council advance in the expansion works of the El Maigmó estate', p7_venue: 'Generalitat Valenciana',
    p8_title: 'Tibi finalizes the El Maigmó Business Park EGM while seeking new industrial land development', p8_venue: 'Alicante Plaza',
    
    lnk_ver: 'Read article ↗', 
    cta_title_pub: 'Urban planning transforms <em>territory and society.</em>', cta_desc_pub: 'If you are looking to develop planning with technical viability and institutional support, tell me about your project.',

    /* ── Premios / Reconocimientos ── */
    sb_label_premios: '05 — Recognition', sb_role_premios: 'Approvals · Milestones · Reports',
    pg_desc_premios: 'Approved plans, favourable technical reports, and key administrative milestones in drafted and processed urban projects.',
    st_approved: 'Approved', st_pending: 'In progress', st_reports: 'Favourable reports', st_milestones: 'Key milestones',
    sb_index_title: 'Instrument status',
    pl1: 'SGP Llocnou de Sant Jeroni', pl2: 'Protection Catalogue Llocnou', pl3: 'Sector E-49 Elche', pl4: 'Structural Mod. PGOU Elche', pl5: 'SGP Segart', pl6: 'SGP Gilet',
    badge_ok: 'Approved', badge_complete: 'Processing complete', badge_ctu: 'Approved CTU 2021', badge_pending: 'In progress',
    sb_data_title: 'Key figures', sb_lbl_javea: 'SGP Jávea', sb_lbl_elche: 'E-49 Elche', sb_lbl_organ: 'Approving body', sb_lbl_normativa: 'Regulations',
    pg_num_premios: '05 — Recognition', sec_plans: 'Approved plans & in progress',
    ac_municipio: 'Municipality', ac_year: 'Year', ac_years: 'Years', ac_organ: 'Body', ac_content: 'Content', ac_surface: 'Surface', ac_norm: 'Regulations',
    
    rec1_title: 'Structural General Plan of Llocnou de Sant Jeroni', rec1_muni: 'Llocnou de Sant Jeroni (Valencia)', rec1_organ: 'Territorial Urban Planning Commission — GVA', 
    rec1_desc: 'Exceptional urban milestone: Definitive Approval in June 2022. The complete drafting of the Plan and the technical resolution of blocking sectoral reports allowed the culmination of the LOTUP adaptation, providing the municipality with total legal certainty.',
    
    rec2_title: 'Protection Catalogue of Llocnou de Sant Jeroni', rec2_muni: 'Llocnou de Sant Jeroni (Valencia)', rec2_content: 'Architectural, ethnological and landscape heritage', 
    rec2_desc: 'Key document drafted entirely from scratch. Its investigative depth allowed the identification of the Traditional Historic Core and the individualization of ethnological heritage, achieving definitive approval by the Regional Ministry of Culture.',
    
    rec3_title: 'Expansion of Elche Business Park · Sector E-49', rec3_muni: 'Elche (Alicante)', rec3_surface: '~600,000 m² · €40M Investment', 
    rec3_desc: 'Complete urban file resolved impeccably. Approval of the Partial Plan and the Detailed Planning Order (POP) with unconditional favourable sectoral reports, enabling the largest industrial land reserve in Alicante.',
    
    rec4_title: 'Structural Modification PGOU Elche · Sector E-49', rec4_muni: 'Elche (Alicante)', rec4_organ: 'Territorial Urban Planning Commission — GVA', 
    rec4_desc: 'Unanimous Definitive Approval by the CTU in July 2021. The regional report expressly congratulated the documentary quality, the precision of the Green Infrastructure layout, and the environmental viability of the proposed floodable parks.',
    
    rec5_title: 'Structural General Plan of Segart', rec5_muni: 'Segart (Valencia)', 
    rec5_desc: 'Draft Structural General Plan adapted to the LOTUP. Project of maximum environmental sensitivity focused on containment and mitigating the impacts of peripheral urbanizations in the heart of the Serra Calderona Natural Park.',
    
    rec6_title: 'Structural General Plan of Gilet', rec6_muni: 'Gilet (Valencia)', 
    rec6_desc: 'Draft SGP and POP aimed at unblocking the historical execution of green areas and regularizing growth on non-developable land through new urban management mechanisms under the influence of the Serra Calderona.',
    
    sec_milestones: 'Administrative milestones',
    
    t1_title: 'Definitive Approval CTU — SGP Llocnou de Sant Jeroni', t1_org: 'Territorial Urban Planning Commission of Valencia', 
    t1_desc: 'Resolution of June 2022 granting Definitive Approval to the SGP. The technical document provided a satisfactory response to the complex requirements of roads, hydrography, and education, overcoming administrative paralysis.',
    
    t2_title: 'Unanimous Approval and Technical Commendation — Sector E-49 Elche', t2_org: 'City Council Plenary / Generalitat Valenciana', 
    t2_desc: 'Definitive Approval by political unanimity and formal presentation of the PAI. The regional administration issued an unconditional favourable report, including express recognition to the drafting team for its agility and exceptional documentary clarity.',
    
    t3_title: '144 favourable sectoral reports — SGP Jávea', t3_org: 'State and Regional Administration', 
    t3_desc: 'Technical management milestone: obtaining over 140 favourable sectoral reports. This work validated the declassification of 10 million m² of developable land, shielding the protectionist model prior to the Environmental Declaration.',
    
    t4_title: 'Definitive Approval and "Zero Allegations" — El Maigmó Estate', t4_org: 'IVACE / Tibi City Council', 
    t4_desc: 'The Strategic Initial Document (DIE) passed public exhibition without a single allegation against it. This milestone demonstrates impeccable prior technical concertation, allowing for an extraordinarily agile processing and Definitive Approval.',
    
    cta_title_premios: 'Do you need a plan that reaches <em>Definitive Approval?</em>', cta_desc_premios: 'The difference between a good drawing and an approved General Plan is technical management and documentary precision. Let\'s talk.',

    sec_quotes: 'Administrative <em>Endorsement</em>',
    
    q1_source: 'Department of Urban Planning — Elche City Council', q1_date: '2021 · Elche',
    q1_text: '«The City Council culminates an initiative it has been working on with determination and constancy. Good news that should make us reflect on the agility of urban procedures for economic reactivation.»',
    q1_ctx: 'Unanimous Plenary Approval — Structural Mod. PGOU Elche',
    
    q2_source: 'Regional Ministry of Territorial Policy', q2_date: '2022 · Llocnou de Sant Jeroni',
    q2_text: '«The technical document provides a satisfactory response to complex sectoral requirements and resolves with exceptional rigor the identification of the Traditional Historic Core and the cataloguing of its heritage.»',
    q2_ctx: 'Definitive Approval — SGP and Catalogue Llocnou de Sant Jeroni',

    q3_source: 'Directorate General for Natural Environment and Environmental Assessment', q3_date: '2020 · Elche',
    q3_text: '«The documentation presented is positively valued, both for its content and for its organization and expository clarity. The public participation process developed is also noteworthy.»',
    q3_ctx: 'Strategic Environmental and Territorial Declaration (DATE) — File 062-2016-EAE',

    q4_source: 'Institutional Communication — Xàbia City Council', q4_date: '2023 · Jávea',
    q4_text: '«The new General Plan culminates its final phase backed by 144 favourable sectoral reports. An action that protects 10 million square meters of developable land, halting horizontal growth.»',
    q4_ctx: 'Plenary Approval of the Final Document — SGP Xàbia',

    /* ── Blog ── */
    sb_label_blog: '06 — Blog', sb_role_blog: 'Essays · Notes · Criticism', st_articles: 'Articles', st_cats: 'Categories',
    st_last: 'Latest entry', st_open: 'Open access', sb_cats_title: 'Categories', cat1: 'Planning', cat2: 'Landscape', cat3: 'Technology',
    cat4: 'Rural municipalities', cat5: 'Participation', sb_tags_title: 'Tags', sb_note_title: 'About the blog',
    sb_note_val: 'Notes, essays and reflections on urbanism, territory and the contemporary city. No fixed schedule — written when something deserves to be written.',
    sb_btn: 'Contact', pg_num_blog: '06 — Blog', 
    sb_name_blog: '<em>Blog</em>', sb_role_blog: 'Essays · Notes · Critique', pg_desc_blog: 'Notes, essays, and reflections on urban planning, territory, and the contemporary city.', st_articles: 'Articles',
    pg_desc_blog: 'Notes, essays and reflections on urbanism, territory and the contemporary city. Ideas in progress, field observations and critical readings on urban planning practice.',
    img_placeholder: 'Article image', lnk_read: 'Read article', 
    a1_title_short: 'Floodable parks & Green Infrastructure',
    cat1: 'Planning / PATRICOVA',
    a1_title: 'From restriction to opportunity: floodable parks as Green Infrastructure in productive land',
    a1_excerpt: 'Contemporary urban planning demands a paradigm shift: we can no longer fight against water; we must give it space. Analysis of how to overcome PATRICOVA filters through resilient design, with the successful case study of Sector E-49 in Elche.',
    a2_title_short: 'Massive land declassification',
    cat2: 'Spatial Planning / LOTUP',
    a2_title: 'From the bubble to territorial reason: how to execute massive land declassification',
    a2_excerpt: 'Analysis of the technical methodology to adapt a municipality to the IMOS and ETCV, featuring the successful declassification of 10 million m² and 144 favourable sectoral reports in Jávea.',
    a3_title_short: 'The threat of conurbation',
    cat3: 'Analysis / Landscape',
    a3_title: 'The threat of conurbation: why we need green corridors',
    a3_excerpt: 'Analysis on how Green Infrastructure prevents municipalities from merging into an asphalt continuum, losing their resilience.',
    note_label: 'Editorial note', 
    cta_title_blog: 'Do you have a question about <em>urban or spatial planning?</em>', cta_desc_blog: 'If any of these articles raise questions or you would like to discuss your project, feel free to contact me.',
    cta_desc_blog: 'If any of these articles raises questions or you would like to talk about your project, feel free to get in touch.',

    /* ── Contacto ── */
    sb_contact_title: 'Contact', sb_phone_lbl: 'Phone', sb_addr_lbl: 'Address', sb_location_lbl: 'Location',
    sb_status: 'Available for new projects', lbl_email_studio: 'Studio email', lbl_email_personal: 'Personal email',
    lbl_studio: 'Studio', lbl_location: 'Location', lbl_response: 'Response time', val_response: 'Usually within 24–48 h',
    sb_avail_title: 'Available for', av1: 'Structural General Plans', av2: 'Development planning', av3: 'Landscape Studies', av4: 'Urban planning consultancy', av5: 'Administrative processing', av6: 'Training and lectures',
    sb_links_title: 'Profiles', lnk_services: 'Services', lnk_awards: 'Recognition',
    pg_num: '07 — Contact', pg_desc_contact: 'Do you have an urban planning project in mind or need technical advice? Tell me how I can help.',
    ib_contact: 'Contact details', ib_avail: 'Available for', ib_studio: 'Velat Studio', studio_desc: 'Interior design practice based in Valencia. Specialised in interior design and renovations.',
    lnk_velat: 'Visit Velat Studio', form_success: 'Message sent successfully. I will get back to you shortly.',
    lbl_name: 'Name *', ph_name: 'Your name', lbl_org: 'Organization / Municipality', ph_org: 'City Council, company, etc.',
    lbl_subject: 'Type of enquiry', opt_select: 'Select an option', opt_pgm: 'General / Structural Plan', opt_dev: 'Development planning', opt_land: 'Landscape Study', opt_cons: 'Urban planning consultancy', opt_proc: 'Administrative processing', opt_col: 'Technical collaboration', opt_form: 'Training / Lecture', opt_other: 'Other',
    lbl_msg: 'Message *', ph_msg: 'Tell me about your project or enquiry...', lbl_privacy: 'I accept the privacy policy and the processing of my data to manage this enquiry.',
    btn_send: 'Send message', form_note: '⚡ This form is static. Connect it to Formspree, EmailJS or your own backend to receive messages.',
    rs1: 'Usual response time', rs2: 'Projects answered', rs3: 'Available for new projects', foot_meta: 'Urban Planner · Territorial Planner',

    /* ── Project File ── */
    proj_year: 'Year', proj_client: 'Client', proj_role: 'Role', proj_territory: 'Territory',
    proj_tasks_led: 'Tasks led', proj_participation: 'Team participation', 
    proj_press: 'Press coverage', proj_back: '← Back to map', 
    proj_source: 'Complete documentation ↗', proj_not_found: 'Project not found'  }
};
let currentLang = localStorage.getItem('dsf_lang') || 'es';

function applyI18n(lang) {
  currentLang = lang;
  localStorage.setItem('dsf_lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (i18n[lang] && i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (i18n[lang] && i18n[lang][key]) el.placeholder = i18n[lang][key];
  });
  document.querySelectorAll('[data-i18n-opt]').forEach(el => {
    const key = el.getAttribute('data-i18n-opt');
    if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = lang === 'es' ? 'EN' : 'ES';

  document.documentElement.lang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  const navRoot = document.getElementById('nav-root');
  if (navRoot) {
    renderNav(navRoot.dataset.active);
  }
  renderFooter();

  applyI18n(currentLang);

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      window.applyI18n ? window.applyI18n(currentLang === 'es' ? 'en' : 'es') : applyI18n(currentLang === 'es' ? 'en' : 'es');
    });
  }

  const fills = document.querySelectorAll('.skill-bar-fill');
  if (fills.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.style.setProperty('--w', e.target.dataset.w); obs.unobserve(e.target); } });
    }, { threshold: 0.2 });
    fills.forEach(f => obs.observe(f));
  }

  /* ── LÓGICA DEL FORMULARIO DE CONTACTO ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      
      const btnSubmit = form.querySelector('.form-submit');
      const originalText = btnSubmit.innerHTML;
      btnSubmit.innerHTML = `<span style="opacity:0.7">Enviando...</span>`;
      btnSubmit.disabled = true;

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          const s = document.getElementById('form-success');
          if (s) { 
            s.classList.add('show'); // Dispara la animación del popup
            form.reset(); 
            setTimeout(() => s.classList.remove('show'), 5000); // Lo esconde tras 5 seg
          }
        } else {
          alert('Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo.');
        }
      } catch (error) {
        console.error('Error:', error);
      } finally {
        btnSubmit.innerHTML = originalText;
        btnSubmit.disabled = false;
      }
    });
  }

  /* ── MICRO-ANIMACIONES CON INTERSECTION OBSERVER ── */
  const animateElements = document.querySelectorAll('.highlight-card, .article-card, .pres-card, .approval-card, .tl-item, .edu-item, .ow-item, .skill-group, .method-step, .svc-card, .contact-info-panel, .contact-form-panel');
  
  animateElements.forEach(el => el.classList.add('fade-in-up'));

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, 50);
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  animateElements.forEach(el => scrollObserver.observe(el));

});