// typing effect
const words = ["full-stack web apps", "AI-powered tools", "secure REST APIs", "clean, responsive interfaces"];
const el = document.getElementById("typing");
let w = 0, c = 0, deleting = false;

function type() {
  const word = words[w];
  el.textContent = word.slice(0, c);
  if (!deleting && c < word.length) {
    c++;
    setTimeout(type, 80);
  } else if (!deleting) {
    deleting = true;
    setTimeout(type, 1400);
  } else if (c > 0) {
    c--;
    setTimeout(type, 40);
  } else {
    deleting = false;
    w = (w + 1) % words.length;
    setTimeout(type, 300);
  }
}
type();

// reveal elements when they scroll into view
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// count-up numbers
function countUp(el) {
  const target = parseFloat(el.dataset.target);
  const decimals = parseInt(el.dataset.decimals || "0");
  const suffix = el.dataset.suffix || "";
  const duration = 1500;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    el.textContent = (target * progress).toFixed(decimals) + suffix;
    if (progress < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      countUp(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.6 });

document.querySelectorAll(".stat-number[data-target]").forEach((el) => counterObserver.observe(el));