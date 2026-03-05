/* ═══════════════════════════════════════════════════════
   DSF ANALYTICS — Lightweight internal page tracker
   No cookies · No external services · localStorage only
   
   Usage:
   - Tracks automatically on every page load
   - View stats: open browser console and type  dsf_stats()
   - Clear data: dsf_clear()
   - Data stays in YOUR browser only (the site owner's)
═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  const STORAGE_KEY = 'dsf_analytics';
  const MAX_ENTRIES = 5000; // prevent localStorage bloat

  function getStore() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch { return []; }
  }

  function save(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch { /* quota exceeded — silently fail */ }
  }

  // ── Track page view ──
  function track() {
    const entry = {
      p: location.pathname.split('/').pop() || 'index.html',  // page
      t: Date.now(),                                            // timestamp
      r: document.referrer || null,                             // referrer
      w: window.innerWidth,                                     // viewport width
      l: navigator.language || null                             // language
    };

    const data = getStore();
    data.push(entry);

    // Trim oldest if exceeds max
    if (data.length > MAX_ENTRIES) data.splice(0, data.length - MAX_ENTRIES);

    save(data);
  }

  // ── Console dashboard ──
  function stats() {
    const data = getStore();
    if (!data.length) { console.log('📊 Sin datos aún.'); return; }

    const now = Date.now();
    const day = 86400000;
    const today = data.filter(e => now - e.t < day);
    const week = data.filter(e => now - e.t < day * 7);
    const month = data.filter(e => now - e.t < day * 30);

    // Page counts
    const pageCounts = {};
    data.forEach(e => { pageCounts[e.p] = (pageCounts[e.p] || 0) + 1; });
    const sorted = Object.entries(pageCounts).sort((a, b) => b[1] - a[1]);

    // Referrers
    const refs = {};
    data.filter(e => e.r).forEach(e => {
      try {
        const host = new URL(e.r).hostname || 'direct';
        refs[host] = (refs[host] || 0) + 1;
      } catch { /* invalid referrer */ }
    });

    // Device breakdown
    const mobile = data.filter(e => e.w <= 640).length;
    const tablet = data.filter(e => e.w > 640 && e.w <= 960).length;
    const desktop = data.filter(e => e.w > 960).length;

    console.log(`
╔══════════════════════════════════════════╗
║   📊  DSF ANALYTICS — Dashboard         ║
╠══════════════════════════════════════════╣
║  Total visitas:  ${String(data.length).padStart(6)}                 ║
║  Hoy:            ${String(today.length).padStart(6)}                 ║
║  Última semana:  ${String(week.length).padStart(6)}                 ║
║  Último mes:     ${String(month.length).padStart(6)}                 ║
╠══════════════════════════════════════════╣
║  📱 Móvil: ${mobile}  |  📋 Tablet: ${tablet}  |  🖥 PC: ${desktop}
╚══════════════════════════════════════════╝`);

    console.log('\n📄 Páginas más vistas:');
    console.table(sorted.map(([page, views]) => ({ Página: page, Visitas: views })));

    if (Object.keys(refs).length) {
      console.log('\n🔗 Referrers:');
      console.table(Object.entries(refs).sort((a, b) => b[1] - a[1]).map(([host, count]) => ({ Origen: host, Visitas: count })));
    }

    // Last 10 visits
    console.log('\n🕐 Últimas 10 visitas:');
    console.table(data.slice(-10).reverse().map(e => ({
      Página: e.p,
      Fecha: new Date(e.t).toLocaleString('es-ES'),
      Ancho: e.w + 'px',
      Idioma: e.l
    })));
  }

  function clear() {
    localStorage.removeItem(STORAGE_KEY);
    console.log('🗑️ Datos de analytics eliminados.');
  }

  // ── Expose to console ──
  window.dsf_stats = stats;
  window.dsf_clear = clear;

  // ── Auto-track on load ──
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', track);
  } else {
    track();
  }
})();
