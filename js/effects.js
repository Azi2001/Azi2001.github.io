(function () {
  // 1. scroll progress bar
  const bar = document.getElementById("scrollProgress");
  function updateBar() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  }
  window.addEventListener("scroll", updateBar);
  updateBar();

  // 2. cursor glow (skipped on touch screens and for reduced motion)
  const glow = document.getElementById("cursorGlow");
  const noMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const touch = window.matchMedia("(hover: none)").matches;
  if (noMotion || touch) {
    glow.style.display = "none";
  } else {
    let tx = 0, ty = 0, cx = 0, cy = 0;
    window.addEventListener("pointermove", (e) => {
      tx = e.clientX;
      ty = e.clientY;
    });
    (function loop() {
      cx += (tx - cx) * 0.12;
      cy += (ty - cy) * 0.12;
      glow.style.transform = `translate(${cx}px, ${cy}px)`;
      requestAnimationFrame(loop);
    })();
  }

  // 3. spotlight on project cards (cards are built by main.js, so listen on the page)
  document.addEventListener("pointermove", (e) => {
    const card = e.target.closest(".project-card");
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty("--x", e.clientX - r.left + "px");
    card.style.setProperty("--y", e.clientY - r.top + "px");
  });
})();