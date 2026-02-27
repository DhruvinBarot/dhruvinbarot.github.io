/* ============================================================
   DHRUVIN BAROT — PORTFOLIO
   script.js
   ============================================================ */

/* ============================================================
   1. CLOUD GENERATOR
   ============================================================ */
const sky = document.getElementById('sky');

function makeCloud(startX) {
  const el    = document.createElement('div');
  const layer = [1, 1, 1, 2, 2, 3][Math.floor(Math.random() * 6)];
  el.className = `cloud l${layer}`;

  const h   = layer === 1 ? 38 + Math.random() * 55
            : layer === 2 ? 22 + Math.random() * 38
            :               14 + Math.random() * 25;
  const w   = h * (1.7 + Math.random() * 0.9);
  const dur = layer === 1 ? 45 + Math.random() * 40
            : layer === 2 ? 65 + Math.random() * 50
            :               85 + Math.random() * 60;
  const delay = startX !== undefined ? 0 : -(Math.random() * dur * 0.95);

  el.style.cssText = `
    width:  ${w}px;
    height: ${h}px;
    top:    ${5 + Math.random() * 82}%;
    left:   ${startX !== undefined ? startX + 'px' : '-380px'};
    animation-duration: ${dur}s;
    animation-delay:    ${delay}s;
  `;

  sky.appendChild(el);
  el.addEventListener('animationend', () => { el.remove(); makeCloud(); });
}

// Seed initial clouds spread across the viewport
for (let i = 0; i < 24; i++) {
  makeCloud(Math.random() * window.innerWidth);
}
// Keep spawning new clouds at the left edge
setInterval(() => makeCloud(), 4000);

/* ── Mouse parallax depth on clouds ── */
document.addEventListener('mousemove', e => {
  const py = e.clientY / window.innerHeight - 0.5;
  document.querySelectorAll('.cloud.l1').forEach(c => { c.style.marginTop = `${py * 16}px`; });
  document.querySelectorAll('.cloud.l2').forEach(c => { c.style.marginTop = `${py *  9}px`; });
  document.querySelectorAll('.cloud.l3').forEach(c => { c.style.marginTop = `${py *  4}px`; });
});

/* ============================================================
   4. TYPEWRITER — HERO NAME
   ============================================================ */
const nameEl   = document.getElementById('typed-name');
const fullName = 'Dhruvin Barot';
let charIdx    = 0;

function typeChar() {
  if (charIdx <= fullName.length) {
    nameEl.innerHTML = fullName.slice(0, charIdx) + '<span class="cursor-blink"></span>';
    charIdx++;
    const delay = charIdx < 4 ? 200 : 95 + Math.random() * 65;
    setTimeout(typeChar, delay);
  }
}
setTimeout(typeChar, 900);

/* ============================================================
   5. SCROLL REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, idx) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('show'), idx * 60);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));