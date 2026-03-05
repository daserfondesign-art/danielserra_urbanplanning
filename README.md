# Daniel Serra Font — Portfolio Urbanístico
## Instrucciones de uso y personalización

---

### 🚀 Cómo ejecutar en local

**Opción 1 – Doble clic (más simple):**
Abre `index.html` directamente en tu navegador.

**Opción 2 – VS Code + Live Server (recomendada):**
1. Instala [VS Code](https://code.visualstudio.com/)
2. Instala la extensión **Live Server**
3. Clic derecho en `index.html` → *Open with Live Server*

**Opción 3 – Python:**
```bash
cd portfolio-dsf
python -m http.server 8000
# Abre http://localhost:8000
```

---

### 📁 Estructura de archivos

```
portfolio-dsf/
├── index.html            ← Página principal (Proyectos)
├── sobre-mi.html         ← Perfil profesional y aptitudes
├── servicios.html        ← Servicios ofrecidos
├── publicaciones.html    ← Artículos y publicaciones
├── premios.html          ← Premios y reconocimientos
├── blog.html             ← Blog / reflexiones urbanas
├── contacto.html         ← Contacto + formulario
├── css/
│   └── styles.css        ← Todos los estilos (una sola hoja)
├── js/
│   └── main.js           ← JS: idiomas, carrusel, proyectos, formulario
└── assets/
    └── img/              ← Pon aquí tus imágenes de proyectos
```

---

### 🖼️ Cómo añadir imágenes a los proyectos

Cada proyecto en el carrusel muestra un placeholder oscuro. Para añadir imágenes reales:

1. Guarda tus imágenes en `assets/img/` con este formato de nombre:
   - `parque-elche-1.jpg`, `parque-elche-2.jpg`, `parque-elche-3.jpg`
   - `pgm-javea-1.jpg`, `pgm-javea-2.jpg`
   - etc.

2. En `js/main.js`, busca el array `projects` y para cada proyecto cambia
   el bloque del carrusel de mostrar el placeholder a mostrar la imagen real.

   Busca en `renderCarousel()` el div `.carousel-placeholder` y reemplázalo por:
   ```html
   <img src="assets/img/${p.id}-${i+1}.jpg" alt="${name}">
   ```

---

### ✏️ Cómo editar los proyectos

Todos los proyectos están en `js/main.js`, en el array `projects[]`.
Cada proyecto tiene estos campos que puedes editar:

```js
{
  id: 'identificador-unico',        // solo letras minúsculas y guiones
  filter: 'pgm',                    // 'pgm' o 'urban' (para los filtros)
  year: '2019',
  name_es: 'Nombre en español',
  name_en: 'Name in English',
  client_es: 'Ayuntamiento de...',
  client_en: 'City Council of...',
  role_es: 'Técnico redactor',
  role_en: 'Drafting Technician',
  status_es: 'Aprobado',
  status_en: 'Approved',
  description_es: 'Texto descriptivo en español...',
  description_en: 'Descriptive text in English...',
  tasks_led_es: ['Tarea 1', 'Tarea 2'],     // Tareas lideradas
  tasks_led_en: ['Task 1', 'Task 2'],
  tasks_part_es: ['Tarea A', 'Tarea B'],    // Tareas de participación
  tasks_part_en: ['Task A', 'Task B'],
  link: 'https://www.ayuntamiento.es/...',  // Link externo al proyecto
  images: 3,                                // Número de imágenes del carrusel
  gradient: 'linear-gradient(...)',         // Color fondo placeholder
}
```

Para añadir un nuevo proyecto, copia un bloque y añádelo al array.

---

### 🌐 Idiomas (ES / EN)

El toggle de idioma en la esquina superior derecha alterna entre español e inglés.
Los textos de la navegación, sidebar y fichas de proyecto se actualizan automáticamente.

Para añadir traducciones a las páginas interiores (sobre-mi, servicios...),
añade `data-es="..."` y `data-en="..."` a los elementos HTML que quieras traducir.

---

### 📬 Activar el formulario de contacto

El formulario es estático (solo HTML/JS). Para recibir los mensajes tienes dos opciones sencillas:

**Opción A — Formspree (gratis, fácil):**
1. Regístrate en [formspree.io](https://formspree.io)
2. Crea un nuevo formulario y copia tu endpoint (ej: `https://formspree.io/f/XXXXXXX`)
3. En `contacto.html`, cambia:
   ```html
   <form id="contact-form" action="https://formspree.io/f/XXXXXXX" method="POST">
   ```
4. En `js/main.js`, modifica `initContactForm()` para usar `fetch` con ese endpoint.

**Opción B — EmailJS (envío directo a tu email):**
1. Regístrate en [emailjs.com](https://www.emailjs.com)
2. Sigue su guía de integración para añadir su SDK y reemplazar el submit handler.

---

### 🎨 Personalización visual

Los colores, tipografías y espaciados están definidos como variables CSS al inicio de `css/styles.css`:

```css
:root {
  --bg:      #F7F6F3;   /* Fondo general */
  --surface: #FFFFFF;   /* Fondo tarjetas */
  --border:  #E3E1DA;   /* Bordes */
  --text:    #111111;   /* Texto principal */
  --text-2:  #6B6864;   /* Texto secundario */
  --text-3:  #B0ADA6;   /* Texto terciario / labels */
}
```

---

### 🌍 Publicar en internet (hosting gratuito)

Para publicar la web sin necesidad de servidor, las mejores opciones gratuitas son:

- **[Netlify](https://netlify.com):** Arrastra la carpeta `portfolio-dsf/` y se publica al instante.
- **[GitHub Pages](https://pages.github.com):** Sube los archivos a un repositorio de GitHub y activa Pages.
- **[Vercel](https://vercel.com):** Similar a Netlify, muy sencillo.

---

*Portfolio generado con Claude / Anthropic — Febrero 2025*
