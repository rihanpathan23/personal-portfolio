export function initAnimations() {
  initSmoothScroll();
  initCursor();
  initScrollProgress();
  initReveal();
  initTilt();
  initMagnetic();
  initCounters();
  initTypewriter();
  initSplitWords();
  initBackToTop();
  initMobileMenu();
  initRipple();
  initHeroParallax();
  initPreloader();
  initActiveNav();
}

const isTouch = () => window.matchMedia("(hover: none), (pointer: coarse)").matches;

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
      if (href && href.length > 1 && document.querySelector(href)) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -80 });
      }
    });
  });
}

function initCursor() {
  if (isTouch()) return;
  const glow = document.querySelector(".cursor-glow");
  const ring = document.querySelector(".cursor-ring");
  if (!glow || !ring) return;
  let mx = window.innerWidth / 2, my = window.innerHeight / 2, rx = mx, ry = my;
  document.addEventListener("mousemove", (e) => {
    mx = e.clientX; my = e.clientY;
    glow.style.transform = "translate(" + mx + "px," + my + "px) translate(-50%,-50%)";
  });
  (function loop() {
    rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
    ring.style.transform = "translate(" + rx + "px," + ry + "px) translate(-50%,-50%)";
    requestAnimationFrame(loop);
  })();
  const targets = "a, button, .tilt, input, textarea, .tech-pill";
  document.addEventListener("mouseover", (e) => {
    if (e.target.closest(targets)) ring.classList.add("grow");
  });
  document.addEventListener("mouseout", (e) => {
    if (e.target.closest(targets)) ring.classList.remove("grow");
  });
}

function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (max > 0 ? (window.scrollY / max) * 100 : 0) + "%";
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  els.forEach((el) => obs.observe(el));
}

function initTilt() {
  if (isTouch()) return;
  document.querySelectorAll(".tilt").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = "perspective(1000px) rotateY(" + (x * 8) + "deg) rotateX(" + (-y * 8) + "deg) translateY(-6px)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });
}

function initMagnetic() {
  if (isTouch()) return;
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) / r.width;
      const y = (e.clientY - r.top - r.height / 2) / r.height;
      el.style.transform = "translate(" + (x * 10) + "px," + (y * 10) + "px)";
    });
    el.addEventListener("mouseleave", () => {
      el.style.transform = "";
    });
  });
}

function initCounters() {
  const counters = document.querySelectorAll("[data-count]");
  if (!counters.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const duration = 1600;
      const start = performance.now();
      (function tick(now) {
        const p = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.floor(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      })(start);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => obs.observe(c));
}

function initTypewriter() {
  const el = document.getElementById("roleText");
  if (!el) return;
  const roles = ["Full Stack MERN Developer", "React + Vite Specialist", "AI & Python Builder", "CS Student & Problem Solver"];
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
    setTimeout(tick, deleting ? 32 : 68);
  })();
}

function initSplitWords() {
  document.querySelectorAll("[data-split]").forEach((el) => {
    const text = el.textContent.trim();
    el.innerHTML = text.split(" ").map((w, i) => '<span class="word-mask"><span class="word" style="animation-delay:' + (0.3 + i * 0.09) + 's">' + w + '</span></span>').join(" ");
  });
}

function initBackToTop() {
  const btn = document.getElementById("backToTopBtn");
  if (!btn) return;
  const update = () => {
    if (window.scrollY > 500) btn.classList.add("show");
    else btn.classList.remove("show");
  };
  window.addEventListener("scroll", update, { passive: true });
  update();
  btn.addEventListener("click", () => {
    if (window.__lenis) window.__lenis.scrollTo(0);
    else window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initMobileMenu() {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");
  if (!btn || !menu) return;
  const openI = document.getElementById("menuIconOpen");
  const closeI = document.getElementById("menuIconClose");
  const toggle = (force) => {
    const willOpen = force !== undefined ? force : !menu.classList.contains("active");
    menu.classList.toggle("active", willOpen);
    btn.setAttribute("aria-expanded", String(willOpen));
    if (openI) openI.classList.toggle("hidden", willOpen);
    if (closeI) closeI.classList.toggle("hidden", !willOpen);
    document.body.style.overflow = willOpen ? "hidden" : "";
  };
  btn.addEventListener("click", () => toggle());
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle(false)));
}

function initRipple() {
  if (!document.getElementById("ripple-anim")) {
    const s = document.createElement("style");
    s.id = "ripple-anim";
    s.textContent = "@keyframes rippleA{to{transform:scale(4);opacity:0}}";
    document.head.appendChild(s);
  }
  document.querySelectorAll(".btn-ripple, .magnetic").forEach((btn) => {
    if (getComputedStyle(btn).position === "static") btn.style.position = "relative";
    btn.style.overflow = "hidden";
    btn.addEventListener("click", function (e) {
      const r = this.getBoundingClientRect();
      const size = Math.max(r.width, r.height);
      const span = document.createElement("span");
      span.style.cssText = "position:absolute;border-radius:50%;background:rgba(255,255,255,.35);transform:scale(0);animation:rippleA .6s linear;pointer-events:none;width:" + size + "px;height:" + size + "px;left:" + (e.clientX - r.left - size / 2) + "px;top:" + (e.clientY - r.top - size / 2) + "px;z-index:2;";
      this.appendChild(span);
      setTimeout(() => span.remove(), 650);
    });
  });
}

function initHeroParallax() {
  if (isTouch()) return;
  const hero = document.querySelector(".hero-section");
  const layers = document.querySelectorAll("[data-parallax]");
  if (!hero || !layers.length) return;
  hero.addEventListener("mousemove", (e) => {
    const x = e.clientX / window.innerWidth - 0.5;
    const y = e.clientY / window.innerHeight - 0.5;
    layers.forEach((l) => {
      if (l.closest(".hero-visual")) return;
      const d = parseFloat(l.dataset.parallax) || 20;
      l.style.translate = (x * d) + "px " + (y * d) + "px";
    });
  });
}

function initPreloader() {
  const pre = document.getElementById("preloader");
  if (!pre) return;
  const done = () => pre.classList.add("done");
  window.addEventListener("load", () => setTimeout(done, 1100));
  setTimeout(done, 3200);
}

function initActiveNav() {
  const links = [...document.querySelectorAll('.nav-link')];
  const secs = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  if (!secs.length) return;
  const obs = new IntersectionObserver((es) => {
    es.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  secs.forEach(s => obs.observe(s));
}