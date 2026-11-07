(function () {
  const card = document.getElementById("portrait3d");
  if (!card) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const MAX = 14;       // max tilt in degrees
  const SPEED = 0.08;   // 0.03 = slow, 0.2 = quick
  const clamp = (v) => Math.max(-1, Math.min(1, v));
  let tx = 0, ty = 0, cx = 0, cy = 0;

  window.addEventListener("pointermove", (e) => {
    const r = card.getBoundingClientRect();
    tx = clamp((e.clientX - (r.left + r.width / 2)) / (window.innerWidth / 2));
    ty = clamp((e.clientY - (r.top + r.height / 2)) / (window.innerHeight / 2));
  });

  function loop() {
    cx += (tx - cx) * SPEED;
    cy += (ty - cy) * SPEED;
    card.style.transform = `perspective(900px) rotateY(${cx * MAX}deg) rotateX(${-cy * MAX}deg)`;
    card.style.setProperty("--mx", 50 + cx * 30 + "%");
    card.style.setProperty("--my", 50 + cy * 30 + "%");
    requestAnimationFrame(loop);
  }
  loop();
})();