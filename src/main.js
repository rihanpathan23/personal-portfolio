import "./style.css";
import { projects } from "./data/projects.js";
import { initAnimations } from "./animations.js";

document.body.insertAdjacentHTML("afterbegin", `
  <div id="preloader"><div class="text-center px-6">
    <div class="text-5xl font-black tracking-tighter text-white">Rihan<span class="text-cyan-400">.</span></div>
    <div class="preloader-bar mx-auto mt-6"><span></span></div>
    <p class="mt-5 text-[10px] uppercase tracking-[0.5em] text-slate-500">Initializing System</p>
  </div></div>
  <div class="cursor-glow"></div><div class="cursor-ring"></div><div id="scroll-progress"></div>
  <div class="bg-orbs"><div class="blob blob-1"></div><div class="blob blob-2"></div><div class="blob blob-3"></div></div>
  <div class="bg-grid"></div><div class="grain"></div>
`);

document.querySelector("#app").innerHTML = `
<div class="min-h-screen text-slate-50 font-sans antialiased relative z-10">
  <button id="backToTopBtn" aria-label="Back to top">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
  </button>

  <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-[#020617]/80 backdrop-blur-xl">
    <div class="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 relative">
      <a href="#home" class="text-2xl font-extrabold tracking-tight text-white">Rihan<span class="text-cyan-400">.</span></a>
      <nav aria-label="Global" class="hidden md:flex items-center gap-8">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#skills" class="nav-link">Skills</a>
        <a href="#projects" class="nav-link">Projects</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="/resume.pdf" download="Rihan_Pathan_Resume.pdf" class="magnetic btn-ripple inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-[13px] sm:text-sm font-bold text-slate-900 hover:bg-cyan-400 transition-colors">
          <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/></svg>
          Resume
        </a>
        <button id="menuBtn" type="button" class="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 md:hidden" aria-expanded="false" aria-label="Menu">
          <svg id="menuIconOpen" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
          <svg id="menuIconClose" class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>
      </div>
      <div id="mobileMenu" class="mobile-menu md:hidden">
        <nav class="flex flex-col gap-1">
          <a href="#home">Home</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#contact">Contact</a>
        </nav>
        <a href="/resume.pdf" download="Rihan_Pathan_Resume.pdf" class="mobile-resume">Download Resume</a>
        <div class="flex items-center gap-5 pt-2 text-sm text-slate-400">
          <a href="https://github.com/rihanpathan23" target="_blank" rel="noopener">GitHub</a>
          <a href="https://www.linkedin.com/in/rihan-pathan-959782403/" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://instagram.com/rihan_can_build" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    </div>
  </header>

  <main>
    <section id="home" class="hero-section relative overflow-hidden pt-8 sm:pt-14 lg:pt-20 pb-14 sm:pb-20">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-5 flex justify-center order-1 lg:order-2 lg:justify-end">
            <div class="hero-visual">
              <div class="hero-glow"></div>
              <div class="avatar-wrap float-y">
                <img src="/myphoto.jpg" alt="Rihan Pathan" class="h-full w-full rounded-full object-cover bg-slate-900" />
              </div>
              <span class="chip chip-a">⚛️ React</span>
              <span class="chip chip-b">🟢 Node.js</span>
              <span class="chip chip-c">🍃 MongoDB</span>
              <span class="chip chip-d">🐍 Python</span>
            </div>
          </div>
          <div class="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <p class="reveal hero-badge"><span class="h-2 w-2 rounded-full bg-emerald-400 pulse-glow"></span> Available for internships & freelance</p>
            <h1 class="font-black tracking-[-0.04em] text-white leading-[0.95] text-[clamp(2.6rem,9vw,5.8rem)]">
              <span class="block" data-split>I'm Rihan Pathan</span>
              <span class="block gradient-text pb-2" data-split>CS Student</span>
            </h1>
            <h2 class="mt-5 text-[17px] sm:text-xl font-medium text-cyan-300 type-line">&gt; <span id="roleText"></span><span class="type-caret"></span></h2>
            <p class="reveal mt-5 text-[15px] sm:text-lg leading-relaxed text-slate-400 max-w-xl">Passionate AI Builder & Full Stack Developer creating modern web apps with MERN, Python and Flask. I turn ideas into fast, real-world products.</p>
            <div class="reveal mt-8 flex flex-col w-full gap-3 sm:flex-row sm:w-auto" style="--rd:.45s">
              <a href="#projects" class="magnetic btn-ripple hero-btn-primary">View Projects <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg></a>
              <a href="#contact" class="magnetic hero-btn-ghost">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="marquee-wrap"><div class="marquee-track">${marqueeItems()}</div></div>

    <section id="about" class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="mb-12 reveal"><div class="section-tag"><span></span>About Me</div>
          <h2 class="section-title">About <span class="gradient-text">Me</span></h2>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-7 flex flex-col gap-7">
            ${aboutBlock("Introduction", "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z", "I am a passionate Third-Year Computer Science student with a strong interest in Artificial Intelligence, Full Stack Development, and modern web technologies. I enjoy transforming ideas into practical digital solutions by combining analytical thinking with creative problem-solving. My focus is on building scalable applications that create real-world impact while continuously expanding my technical expertise.", 0)}
            ${aboutBlock("Education", "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84", "Pursuing a Bachelor of Computer Science (Third Year), where I have consistently maintained excellent academic performance. Alongside academics, I actively work on real-world development projects, strengthen my problem-solving skills, and continuously explore emerging technologies in software engineering and Artificial Intelligence.", 1)}
            ${aboutBlock("Career Goal", "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58", "My long-term goal is to become a highly skilled AI Engineer and Full Stack Developer capable of designing intelligent, scalable, and user-centric applications. I am committed to mastering Artificial Intelligence, Data Science, and modern web development while building innovative products that solve meaningful real-world problems.", 2)}
          </div>
          <div class="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
            ${aboutStatCard("9", "CGPA", "Consistent academic record", "blue", 0, true)}
            ${aboutStatCard("AI", "Builder", "Developing intelligent applications to solve real-world problems", "emerald", 1, false)}
            ${aboutStatCard("Full", "Stack", "MERN + React + Vite + Node.js", "purple", 2, false)}
            ${aboutStatCard("Leadership", "", "Leading teams, taking initiative, and turning ideas into action.", "amber", 3, false)}
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12 reveal"><div class="section-tag center"><span></span>Skills</div>
          <h2 class="section-title">My <span class="gradient-text">Tech Stack</span></h2>
          <p class="mt-4 text-slate-400">Technologies I use to build modern, full-stack applications.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          ${skillCard("Frontend", "Pixel-perfect, fast interfaces", "blue", 0, ["React", "Vite", "JavaScript", "Tailwind CSS", "HTML5", "CSS3"])}
          ${skillCard("Backend", "APIs and server logic", "emerald", 1, ["Node.js", "Express.js", "Python", "Flask", "REST APIs"])}
          ${skillCard("Database", "Clean data models", "purple", 2, ["MongoDB", "Mongoose", "MySQL", "SQLite", "SQL"])}
          ${skillCard("Tools and AI", "Ship faster", "amber", 3, ["Git", "GitHub", "VS Code", "Postman", "Vercel", "AI Tools"])}
        </div>
      </div>
    </section>

    <section id="projects" class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-12 reveal"><div class="section-tag center"><span></span>Work</div>
          <h2 class="section-title">Featured <span class="gradient-text">Projects</span></h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          ${projects.map((p, i) => projectCard(p, i % 3)).join("")}
        </div>
      </div>
    </section>

    <section id="contact" class="py-20 sm:py-28">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-12 reveal"><div class="section-tag center"><span></span>Contact</div>
          <h2 class="section-title">Lets <span class="gradient-text">Connect</span></h2>
          <p class="mt-4 text-slate-400">Open for AI, Full Stack internships, freelance and collaborations.</p>
        </div>
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          ${contactCard("mailto:rp3948430@gmail.com", "blue", "Email", "rp3948430@gmail.com", 0)}
          ${contactCard("https://www.linkedin.com/in/rihan-pathan-959782403/", "sky", "LinkedIn", "in/rihan-pathan", 1)}
          ${contactCard("https://github.com/rihanpathan23", "purple", "GitHub", "rihanpathan23", 2)}
          ${contactCard("https://instagram.com/rihan_can_build", "pink", "Instagram", "@rihan_can_build", 3)}
        </div>
        <div class="mt-12 flex justify-center reveal">
          <a href="mailto:rp3948430@gmail.com" class="magnetic btn-ripple hero-btn-primary">Lets Work Together</a>
        </div>
      </div>
    </section>

    <footer class="border-t border-white/5 pt-12 pb-8">
      <div class="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div class="text-sm text-slate-500">© 2026 Rihan Pathan. All rights reserved.</div>
        <nav class="flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-slate-400">
          <a href="#home" class="hover:text-cyan-400">Home</a><a href="#about" class="hover:text-cyan-400">About</a><a href="#skills" class="hover:text-cyan-400">Skills</a><a href="#projects" class="hover:text-cyan-400">Projects</a><a href="#contact" class="hover:text-cyan-400">Contact</a>
        </nav>
        <div class="text-sm text-slate-500">Built with Vite + Tailwind + Lenis</div>
      </div>
    </footer>
  </main>
</div>
`;

function marqueeItems() {
  const items = ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "Tailwind", "Vite", "Git", "AI"];
  const one = items.map(t => '<span class="marquee-word">' + t + '</span><span class="marquee-dot">✦</span>').join("");
  return one + one;
}

function aboutBlock(title, path, text, i) {
  return '<div class="reveal about-text-card tilt card-shine" style="--rd:' + (i * 0.1) + 's"><h3><span class="about-icon"><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.6" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="' + path + '"/></svg></span>' + title + '</h3><p>' + text + '</p></div>';
}

function aboutStatCard(big, small, desc, color, i, isCounter) {
  const map = {
    blue: "icon-blue text-blue-300",
    emerald: "icon-emerald text-emerald-300",
    purple: "icon-purple text-purple-300",
    amber: "icon-amber text-amber-300"
  };
  let titleHtml = "";
  if (isCounter) {
    titleHtml = '<div class="stat-big"><span data-count="' + big + '">0</span>+</div><div class="stat-sub">' + small + '</div>';
  } else {
    titleHtml = '<div class="stat-big">' + big + ' ' + (small ? '<span>' + small + '</span>' : '') + '</div>';
  }
  return '<article class="reveal tilt card-shine about-stat" style="--rd:' + (i * 0.08) + 's"><div class="stat-arrow ' + map[color] + '"><svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg></div>' + titleHtml + '<p class="stat-desc">' + desc + '</p></article>';
}

function skillCard(title, desc, color, i, skills) {
  const bar = { blue: "#3b82f6", emerald: "#10b981", purple: "#a855f7", amber: "#f59e0b" }[color];
  const pills = skills.map(s => '<span class="tech-pill">' + s + '</span>').join("");
  return '<article class="reveal tilt card-shine skill-card" style="--rd:' + (i * 0.08) + 's"><div class="skill-top"><span class="skill-dot" style="background:' + bar + ';box-shadow:0 0 12px ' + bar + '"></span><h3>' + title + '</h3></div><p class="skill-desc">' + desc + '</p><div class="flex flex-wrap gap-2 mt-4">' + pills + '</div><div class="skill-line" style="background:linear-gradient(90deg,' + bar + ',transparent)"></div></article>';
}

function projectCard(p, i) {
  const accents = {
    blue: { t: "text-blue-300", b: "bg-blue-500/15", btn: "bg-blue-600 hover:bg-blue-500", bd: "hover:border-blue-500/40" },
    emerald: { t: "text-emerald-300", b: "bg-emerald-500/15", btn: "bg-emerald-600 hover:bg-emerald-500", bd: "hover:border-emerald-500/40" },
    cyan: { t: "text-cyan-300", b: "bg-cyan-500/15", btn: "bg-cyan-600 hover:bg-cyan-500", bd: "hover:border-cyan-500/40" },
    pink: { t: "text-pink-300", b: "bg-pink-500/15", btn: "bg-pink-600 hover:bg-pink-500", bd: "hover:border-pink-500/40" },
    purple: { t: "text-purple-300", b: "bg-purple-500/15", btn: "bg-purple-600 hover:bg-purple-500", bd: "hover:border-purple-500/40" },
    amber: { t: "text-amber-300", b: "bg-amber-500/15", btn: "bg-amber-600 hover:bg-amber-500", bd: "hover:border-amber-500/40" },
    orange: { t: "text-orange-300", b: "bg-orange-500/15", btn: "bg-orange-600 hover:bg-orange-500", bd: "hover:border-orange-500/40" },
    lime: { t: "text-lime-300", b: "bg-lime-500/15", btn: "bg-lime-600 hover:bg-lime-500", bd: "hover:border-lime-500/40" }
  };
  const a = accents[p.accent] || accents.blue;
  const hasDemo = p.demo && p.demo !== "#" && p.demo.startsWith("http");
  const badge = p.badge ? '<span class="proj-badge ' + a.t + '">' + p.badge + '</span>' : '';
  const achieve = p.achievement ? '<div class="proj-achieve">' + p.achievement + '</div>' : '';
  const stack = p.stack.map(t => '<span class="stack-chip">' + t + '</span>').join("");
  const btn = hasDemo ? '<a href="' + p.demo + '" target="_blank" rel="noopener" class="magnetic proj-btn ' + a.btn + '">Live Demo</a>' : '<div class="proj-soon">Demo on request</div>';
  return '<article class="reveal tilt card-shine proj-card ' + a.bd + '" style="--rd:' + (i * 0.08) + 's"><div class="absolute -top-20 -right-20 h-48 w-48 rounded-full ' + a.b + ' blur-3xl pointer-events-none"></div><div class="relative">' + badge + achieve + '<p class="text-[10px] uppercase tracking-[0.22em] text-slate-500 mt-4">' + p.tagline + '</p><h3 class="text-[22px] font-black text-white mt-1 leading-tight">' + p.title + '</h3><p class="text-[13.5px] text-slate-400 mt-3 leading-relaxed">' + p.description + '</p><div class="proj-box"><h4 class="' + a.t + '">Problem Solved</h4><p>' + p.problem + '</p></div><div class="proj-feature"><span>Key Feature -</span> ' + p.feature + '</div><div class="flex flex-wrap gap-1.5 mt-4">' + stack + '</div>' + btn + '</div></article>';
}

function contactCard(href, color, title, value, i) {
  const icons = {
    blue: '<svg class="h-7 w-7" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>',
    sky: '<svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>',
    purple: '<svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>',
    pink: '<svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/></svg>'
  };
  const box = {
    blue: "bg-blue-500/10 text-blue-300",
    sky: "bg-sky-500/10 text-sky-300",
    purple: "bg-purple-500/10 text-purple-300",
    pink: "bg-pink-500/10 text-pink-300"
  }[color];
  const ext = href.startsWith("http") ? ' target="_blank" rel="noopener"' : '';
  return '<a href="' + href + '"' + ext + ' class="reveal tilt card-shine contact-card group" style="--rd:' + (i * 0.08) + 's"><div class="contact-icon ' + box + '">' + icons[color] + '</div><h3>' + title + '</h3><p>' + value + '</p><span>Open</span></a>';
}

initAnimations();