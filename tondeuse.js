const data = [
  { date: "Jeu. 13 Août",     zone: "Zone 1", surface: 247, temps: "3h 24min", vitesse: "0,4 m/s", hauteur: "20mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 3" },
  { date: "Jeu. 13 Août",     zone: "Zone 2", surface: 58,  temps: "47min",    vitesse: "0,5 m/s", hauteur: "20mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 3" },
  { date: "Jeu. 13 Août",     zone: "Zone 1", surface: 278, temps: "3h 9min",  vitesse: "0,5 m/s", hauteur: "20mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 3" },
  { date: "Jeu. 06 Août",     zone: "Zone 2", surface: 58,  temps: "35min",    vitesse: "0,5 m/s", hauteur: "20mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 3" },
  { date: "Jeu. 06 Août",     zone: "Zone 1", surface: 278, temps: "2h 10min", vitesse: "0,5 m/s", hauteur: "20mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 3" },
  { date: "Mer. 29 Juillet",  zone: "Zone 2", surface: 58,  temps: "39min",    vitesse: "0,6 m/s", hauteur: "20mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 3" },
  { date: "Mer. 29 Juillet",  zone: "Zone 1", surface: 278, temps: "2h 7min",  vitesse: "0,6 m/s", hauteur: "20mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 3" },
  { date: "Mer. 22 Juillet",  zone: "Zone 2", surface: 58,  temps: "28min",    vitesse: "0,6 m/s", hauteur: "20mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 3" },
  { date: "Mer. 22 Juillet",  zone: "Zone 1", surface: 278, temps: "1h 49min", vitesse: "0,6 m/s", hauteur: "20mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 3" },
  { date: "Lun. 13 Juillet",  zone: "Zone 2", surface: 58,  temps: "24min",    vitesse: "0,6 m/s", hauteur: "20mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 3" },
  { date: "Lun. 13 Juillet",  zone: "Zone 1", surface: 278, temps: "1h 49min", vitesse: "0,6 m/s", hauteur: "20mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 3" },
  { date: "Dim. 14 Juin",     zone: "Zone 2", surface: 59,  temps: "42min",    vitesse: "0,4 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Dim. 14 Juin",     zone: "Zone 1", surface: 277, temps: "2h 35min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Dim. 07 Juin",     zone: "Zone 2", surface: 59,  temps: "32min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Dim. 07 Juin",     zone: "Zone 1", surface: 277, temps: "2h 33min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Sam. 30 Mai",      zone: "Zone 2", surface: 59,  temps: "43min",    vitesse: "0,4 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Sam. 30 Mai",      zone: "Zone 1", surface: 277, temps: "2h 34min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Lun. 25 Mai",      zone: "Zone 1", surface: 277, temps: "2h 33min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Jeu. 21 Mai",      zone: "Zone 2", surface: 59,  temps: "25min",    vitesse: "0,6 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Jeu. 21 Mai",      zone: "Zone 1", surface: 277, temps: "2h 36min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Dim. 17 Mai",      zone: "Zone 2", surface: 59,  temps: "27min",    vitesse: "0,6 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Dim. 17 Mai",      zone: "Zone 1", surface: 277, temps: "2h 29min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Mer. 13 Mai",      zone: "Zone 2", surface: 59,  temps: "23min",    vitesse: "0,6 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Mer. 13 Mai",      zone: "Zone 1", surface: 277, temps: "2h 30min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Jeu. 07 Mai",      zone: "Zone 2", surface: 59,  temps: "27min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Jeu. 07 Mai",      zone: "Zone 1", surface: 277, temps: "2h 32min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Ven. 01 Mai",      zone: "Zone 2", surface: 59,  temps: "27min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Ven. 01 Mai",      zone: "Zone 1", surface: 277, temps: "2h 38min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Dim. 26 Avril",    zone: "Zone 2", surface: 59,  temps: "24min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Dim. 26 Avril",    zone: "Zone 1", surface: 277, temps: "2h 33min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Mar. 21 Avril",    zone: "Zone 2", surface: 59,  temps: "27min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Mar. 21 Avril",    zone: "Zone 1", surface: 277, temps: "2h 20min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Ven. 17 Avril",    zone: "Zone 2", surface: 59,  temps: "25min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "12cm", carto: "Cartograhie 2" },
  { date: "Ven. 17 Avril",    zone: "Zone 1", surface: 277, temps: "2h 20min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Mar. 14 Avril",    zone: "Zone 2", surface: 59,  temps: "32min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Mar. 14 Avril",    zone: "Zone 1", surface: 277, temps: "2h 17min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 2" },
  { date: "Jeu. 09 Avril",    zone: "Zone 2", surface: 60,  temps: "34min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Jeu. 09 Avril",    zone: "Zone 1", surface: 206, temps: "1h 41min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Lun. 06 Avril",    zone: "Zone 2", surface: 60,  temps: "33min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Lun. 06 Avril",    zone: "Zone 1", surface: 288, temps: "2h 43min", vitesse: "0,4 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Dim. 29 Mars",     zone: "Zone 2", surface: 60,  temps: "37min",    vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Dim. 29 Mars",     zone: "Zone 1", surface: 288, temps: "2h 19min", vitesse: "0,5 m/s", hauteur: "25mm", puissance: "Faible", espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Mar. 24 Mars",     zone: "Zone 2", surface: 60,  temps: "52min",    vitesse: "0,3 m/s", hauteur: "30mm", puissance: "Forte",  espacement: "9cm",  carto: "Cartograhie 1" },
  { date: "Mar. 24 Mars",     zone: "Zone 1", surface: 288, temps: "2h 17min", vitesse: "0,5 m/s", hauteur: "30mm", puissance: "Forte",  espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Jeu. 19 Mars",     zone: "Zone 2", surface: 60,  temps: "47min",    vitesse: "0,3 m/s", hauteur: "30mm", puissance: "Forte",  espacement: "9cm",  carto: "Cartograhie 1" },
  { date: "Jeu. 19 Mars",     zone: "Zone 1", surface: 288, temps: "2h 14min", vitesse: "0,5 m/s", hauteur: "30mm", puissance: "Forte",  espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Dim. 15 Mars",     zone: "Zone 2", surface: 60,  temps: "39min",    vitesse: "0,4 m/s", hauteur: "30mm", puissance: "Forte",  espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Sam. 14 Mars",     zone: "Zone 1", surface: 288, temps: "2h 50min", vitesse: "0,4 m/s", hauteur: "30mm", puissance: "Forte",  espacement: "11cm", carto: "Cartograhie 1" },
  { date: "Dim. 08 Mars",     zone: "Zone 2", surface: 59,  temps: "44min",    vitesse: "0,4 m/s", hauteur: "35mm", puissance: "Faible", espacement: "11cm", carto: "Test" },
  { date: "Sam. 07 Mars",     zone: "Zone 1", surface: 296, temps: "3h 10min", vitesse: "0,4 m/s", hauteur: "35mm", puissance: "Faible", espacement: "10cm", carto: "Test" },
  { date: "Tontes manuelles", zone: "Toutes", surface: 773, temps: "6h 35min", vitesse: "Manuel", hauteur: "Manuel",puissance: "Faible", espacement: "Manuel", carto: "Manuel", special: true },
  { date: "Installation",     zone: "Toutes", surface: 39,  temps: "24min",    vitesse: "Manuel",  hauteur: "30mm", puissance: "Faible", espacement: "Manuel", carto: "Test", special: true },];
const KM_FAITS = 108.54;
const LAMES_ACTUELLES = 82;
const LAMES_MAX = 145;
function parseMinutes(t) {
  if (!t || t === "—") return 0;
  let m = 0;
  const hm = t.match(/(\d+)h/);
  const mm = t.match(/(\d+)min/);
  if (hm) m += parseInt(hm[1]) * 60;
  if (mm) m += parseInt(mm[1]);
  return m;
}
function formatMinutes(total) {
  if (total >= 60) {
    const h = Math.floor(total / 60);
    const m = total % 60;
    return m > 0 ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
  }
  return `${total}min`;
}
function badgeZone(z) {
  if (z === 'Zone 1') return `<span class="badge-zone badge-zone1">Zone 1</span>`;
  if (z === 'Zone 2') return `<span class="badge-zone badge-zone2">Zone 2</span>`;
  return `<span class="badge-zone badge-toutes">Toutes</span>`;
}
function badgePuissance(p) {
  if (p === 'Forte')  return `<span class="badge-puissance puissance-forte">Forte</span>`;
  if (p === 'Faible') return `<span class="badge-puissance puissance-faible">Faible</span>`;
  return `<span class="badge-puissance puissance-toutes">${p}</span>`;
}
function barColor(pct) {
  const r = Math.round(90  + (224 - 90)  * pct / 100);
  const g = Math.round(170 + (120 - 170) * pct / 100);
  const b = Math.round(74  + (40  - 74)  * pct / 100);
  return `rgb(${r},${g},${b})`;
}
function drawLamesBar(h, max) {
  const canvas = document.getElementById('bar-lames-canvas');
  if (!canvas) return;
  const wrap = canvas.parentElement;
  const W = wrap.clientWidth || 200;
  canvas.width  = W;
  canvas.height = 6;
  const ctx   = canvas.getContext('2d');
  const fillW = Math.round(W * Math.min(1, h / max));
  ctx.clearRect(0, 0, W, 6);
  const grad = ctx.createLinearGradient(0, 0, W, 0);
  grad.addColorStop(0,    '#1b5e20');
  grad.addColorStop(0.48, '#2e7d32');
  grad.addColorStop(0.65, '#689f38');
  grad.addColorStop(0.80, '#f9a825');
  grad.addColorStop(0.90, '#ef6c00');
  grad.addColorStop(1,    '#b71c1c');
  if (fillW > 0) {
    ctx.save();
    ctx.beginPath();
    ctx.roundRect(0, 0, fillW, 6, 3);
    ctx.clip();
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, 6);
    ctx.restore();
  }
  if (fillW < W) {
    ctx.fillStyle = 'rgba(255,255,255,0.07)';
    ctx.beginPath();
    ctx.roundRect(fillW, 0, W - fillW, 6, 3);
    ctx.fill();
  }
}
function initStats() {
  const totalMin   = data.reduce((s, d) => s + parseMinutes(d.temps), 0);
  const totalSurf  = data.reduce((s, d) => s + d.surface, 0);
  const nbSessions = data.filter(d => !d.special).length;
  document.getElementById('stat-temps').textContent    = formatMinutes(totalMin);
  document.getElementById('stat-surface').textContent  = totalSurf + 'm²';
  document.getElementById('stat-sessions').textContent = nbSessions;
  document.getElementById('stat-km').innerHTML = `${KM_FAITS}<span class="stat-unit">km</span>`;
  document.getElementById('stat-lames').innerHTML = `${LAMES_ACTUELLES}<span class="stat-unit">h</span>`;
  document.getElementById('lames-max-label').textContent = `${LAMES_MAX} h`;
  requestAnimationFrame(() => drawLamesBar(LAMES_ACTUELLES, LAMES_MAX));
}
function initTable() {
  const real  = data.filter(d => d.zone !== 'Toutes');
  const maxS  = Math.max(...real.map(d => d.surface));
  const tbody = document.getElementById('table-body');
  const styleEl = document.createElement('style');
  document.head.appendChild(styleEl);
  data.forEach((row, index) => {
    const pct      = Math.round((row.surface / maxS) * 100);
    const isManuel = row.zone === 'Toutes';
    const tr       = document.createElement('tr');
    tr.dataset.zone = row.zone;
    let barHtml = '';
    if (!isManuel) {
      const cls   = `bar-fill-${index}`;
      const color = barColor(pct);
      styleEl.sheet.insertRule(
        `.${cls} { background: ${color} !important; }`,
        styleEl.sheet.cssRules.length
      );
      barHtml = `<div class="bar-wrap"><div class="bar-fill ${cls}" data-pct="${pct}" style="width:0%"></div></div>`;
    }
    tr.innerHTML = `
      <td data-col="date">${row.date}</td>
      <td data-col="zone"       data-group="zone-surface">${badgeZone(row.zone)}</td>
      <td data-col="surface"    data-group="zone-surface" class="surface-cell">
        <span class="surface-val">${row.surface}m²</span>${barHtml}
      </td>
      <td data-col="duree"      data-group="duree-vitesse"><span style="font-family:'DM Mono',monospace">${row.temps}</span></td>
      <td data-col="vitesse"    data-group="duree-vitesse">${row.vitesse}</td>
      <td data-col="hauteur"    data-group="lame">${row.hauteur}</td>
      <td data-col="puissance"  data-group="lame">${badgePuissance(row.puissance)}</td>
      <td data-col="espacement" data-group="carto">${row.espacement}</td>
      <td data-col="carto"      data-group="carto">${row.carto}</td>
    `;
    tbody.appendChild(tr);
  });
  setTimeout(() => {
    document.querySelectorAll('.bar-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  }, 100);
}
function applyGroupVisibility() {
  document.querySelectorAll('[data-col]').forEach(el => {
    el.classList.remove('col-hidden');
  });
}
function initGroupBtns() {
  document.querySelectorAll('.group-btn').forEach(btn => {
    btn.classList.add('active');
    btn.addEventListener('click', () => {
      const group = btn.dataset.group;
      const isActive = btn.classList.toggle('active');
      const cols = GROUP_COLS[group] || [];
      cols.forEach(col => {
        document.querySelectorAll(`[data-col="${col}"]`).forEach(el => {
          el.classList.toggle('col-hidden', !isActive);
        });
      });
    });
  });
}
function filterZone(zone, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('#table-body tr').forEach(tr => {
    tr.classList.toggle('hidden', zone !== 'all' && tr.dataset.zone !== zone);
  });
}
(function() {
  const modal = document.getElementById('mentionsModal');
  let _triggerEl = null, _trapHandler = null;
  window.openModal = function() {
    _triggerEl = document.activeElement;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => { modal.classList.add('show'); });
    document.querySelectorAll('body > *').forEach(el => {
      if (el !== modal && !el.contains(modal)) { el.setAttribute('inert', ''); el.setAttribute('data-was-inert', ''); }
    });
    _trapHandler = function(e) { if (e.key === 'Tab') e.preventDefault(); };
    document.addEventListener('keydown', _trapHandler);
  };
  window.closeModal = function() {
    if (_trapHandler) { document.removeEventListener('keydown', _trapHandler); _trapHandler = null; }
    document.querySelectorAll('[data-was-inert]').forEach(el => { el.removeAttribute('inert'); el.removeAttribute('data-was-inert'); });
    modal.classList.remove('show');
    document.body.style.overflow = '';
    setTimeout(() => { modal.style.display = 'none'; }, 100);
    if (_triggerEl && typeof _triggerEl.focus === 'function') { _triggerEl.focus(); _triggerEl = null; }
  };
  document.querySelector('.close-btn').addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModal();
  });
})();
const GROUP_COLS = {
  "zone-surface":  ["zone", "surface"],
  "duree-vitesse": ["duree", "vitesse"],
  "lame":          ["hauteur", "puissance"],
  "carto":         ["espacement", "carto"],};
const activeGroups = new Set(Object.keys(GROUP_COLS));
window.addEventListener('resize', () => drawLamesBar(LAMES_ACTUELLES, LAMES_MAX));
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};
initStats();
initTable();
initGroupBtns();