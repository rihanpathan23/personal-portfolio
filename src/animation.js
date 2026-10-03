/* ========== Master animation engine ========== */

export function initAnimations() {
  initSmoothScroll();
  initCursor();
  initScrollProgress();
  initReveal();
  initTilt();
  initMagnetic();
  initCounters();
  initSkillBars();
  initTypewriter();
  initSplitWords();
  initBackToTop();
  initMobileMenu();
  initRipple();
  initHeroParallax();
  initPreloader();
}

/* -------- Lenis smooth scroll -------- */
function initSmoothScroll() {
  if (!window.Lenis) return;
  const lenis = new window.Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true
  });
  window.__lenis = lenis;
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (href.length > 1) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -90 });
      }
    });
  });
}

/* -------- Custom cursor -------- */
function initCursor() {
  const glow = document.querySelector(".cursor-glow");
  const ring = document.querySelector(".cursor-ring");
  if (!glow || !ring) return;
  let mx = window.innerWidth / 2;
  let my = window.innerHeight / 2;
  let rx = mx, ry = my;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    glow.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
  });
  (function loop() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
    requestAnimationFrame(loop);
  })();
  const targets = "a, button, .tilt, input, select, textarea, .skill-row";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(targets)) ring.classList.add("grow");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(targets)) ring.classList.remove("grow");
  });
}

/* -------- Scroll progress bar -------- */
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = ((window.scrollY / max) * 100) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* -------- Scroll reveal -------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          obs.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  );
  els.forEach((el) => obs.observe(el));
}

/* -------- 3D tilt -------- */
function initTilt() {
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(1100px) rotateY(${x * 9}deg) rotateX(${-y * 9}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

/* -------- Magnetic buttons -------- */
function initMagnetic() {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = `translate(${x * 12}px, ${y * 12}px)`;
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

/* -------- Number counters -------- */
function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.dataset.count);
        const isDecimal = String(target).includes(".");
        const suffix = el.dataset.suffix || "";
        const duration = 1800;
        const start = performance.now();
        (function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent =
            (isDecimal ? (target * eased).toFixed(1) : Math.floor(target * eased)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
        })(start);
        obs.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );
  counters.forEach((c) => obs.observe(c));
}

/* -------- Animated skill bars -------- */
function initSkillBars() {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const bars = entry.target.querySelectorAll(".skill-fill");
        bars.forEach((bar, i) => {
          setTimeout(() => {
            bar.style.width = bar.dataset.level + "%";
          }, i * 100);
        });
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.3 }
  );
  document.querySelectorAll("[data-skill-group]").forEach((el) => obs.observe(el));
}

/* -------- Typewriter for the hero role -------- */
function initTypewriter() {
  const el = document.getElementById("roleText");
  if (!el) return;
  const roles = [
    "Full Stack MERN Developer",
    "React + Vite Enthusiast",
    "AI & Python Builder",
    "CS Student & Problem Solver"
  ];
  let i = 0, c = 0, deleting = false;
  (function tick() {
    const cur = roles[i];
    if (!deleting) {
      el.textContent = cur.slice(0, ++c);
      if (c === cur.length) {
        deleting = true;
        return setTimeout(tick, 1600);
      }
    } else {
      el.textContent = cur.slice(0, --c);
      if (c === 0) {
        deleting = false;
        i = (i + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 70);
  })();
}

/* -------- Split hero words for stagger rise -------- */
function initSplitWords() {
  document.querySelectorAll("[data-split]").forEach((el) => {
    const text = el.textContent.trim();
    el.innerHTML = text
      .split(" ")
      .map(
        (w, i) =>
          `<span class="word-mask"><span class="word" style="animation-delay:${i * 0.08}s">${w}</span></span>`
      )
      .join(" ");
  });
}

/* -------- Back to top -------- */
function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  const update = () => {
    if (window.scrollY > 500) {
      btn.classList.remove("opacity-0", "translate-y-4", "pointer-events-none");
      btn.classList.add("opacity-100", "translate-y-0");
    } else {
      btn.classList.add("opacity-0", "translate-y-4", "pointer-events-none");
      btn.classList.remove("opacity-100", "translate-y-0");
    }
  };
  window.addEventListener("scroll", update, { passive: true });
  btn.addEventListener("click", () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* -------- Mobile menu -------- */
function initMobileMenu() {
  const btn = document.querySelector("button[aria-expanded]");
  const nav = document.querySelector('nav[aria-label="Global"]');
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    [
      "hidden", "flex", "flex-col", "absolute", "top-full", "left-0",
      "right-0", "w-full", "bg-slate-950/95", "backdrop-blur-xl", "p-6",
      "gap-4", "border-b", "border-white/10", "z-40"
    ].forEach((cls) => nav.classList.toggle(cls));
  });
}

/* -------- Ripple on click -------- */
function initRipple() {
  if (!document.getElementById("ripple-anim")) {
    const s = document.createElement("style");
    s.id = "ripple-anim";
    s.textContent = "@keyframes rippleA{to{transform:scale(4);opacity:0}}";
    document.head.appendChild(s);
  }
  document.querySelectorAll(".btn, .magnetic").forEach((btn) => {
    if (getComputedStyle(btn).position === "static") btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.addEventListener("click", function (e) {
      const r = this.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const span = document.createElement("span");
      span.style.cssText = `position:absolute;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);animation:rippleA .6s linear;pointer-events:none;width:${size}px;height:${size}px;left:${e.clientX - r.left - size / 2}px;top:${e.clientY - r.top - size / 2}px;z-index:1;`;
      this.appendChild(span);
      setTimeout(() => span.remove(), 650);
    });
  });
}

/* -------- Hero parallax on floating chips -------- */
function initHeroParallax() {
  const hero = document.querySelector(".hero-section");
  const layers = document.querySelectorAll("[data-parallax]");
  if (!hero || !layers.length) return;
  hero.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    layers.forEach((l) => {
      const depth = parseFloat(l.dataset.parallax) || 20;
      l.style.transform = `translate3d(${x * depth}px, ${y * depth}px, 0)`;
    });
  });
}

/* -------- Preloader -------- */
function initPreloader() {
  const pre = document.getElementById("preloader");
  if (!pre) return;
  const done = () => pre.classList.add("done");
  window.addEventListener("load", () => setTimeout(done, 1200));
  setTimeout(done, 3500);
}