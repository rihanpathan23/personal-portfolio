import "./style.css";
import { projects } from "./data/projects.js";
import { initAnimations } from "./animations.js";

/* ==========================================================
   GLOBAL OVERLAYS (preloader, cursor, scroll bar, bg orbs)
   ========================================================== */
document.body.insertAdjacentHTML(
  "afterbegin",
  `
  <div id="preloader">
    <div class="text-center">
      <div class="text-5xl sm:text-6xl font-black tracking-tighter text-white">Rihan<span class="text-cyan-400">.</span></div>
      <div class="preloader-bar mx-auto mt-6"><span></span></div>
      <p class="mt-5 text-[10px] uppercase tracking-[0.5em] text-slate-500">ENTERING THE PORTFOLIO</p>
    </div>
  </div>
  <div class="cursor-glow"></div>
  <div class="cursor-ring"></div>
  <div id="scroll-progress"></div>
  <div class="bg-orbs">
    <div class="blob blob-1"></div>
    <div class="blob blob-2"></div>
    <div class="blob blob-3"></div>
  </div>
  <div class="grain"></div>
  <div class="side-label">Rihan Pathan — Portfolio &nbsp;©&nbsp; 2026</div>
  <div class="side-socials">
    <a href="https://github.com/rihanpathan23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
    </a>
    <a href="https://www.linkedin.com/in/rihan-pathan-959782403/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>
    <a href="https://instagram.com/rihan_can_build" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"/></svg>
    </a>
  </div>
  `
);

/* ==========================================================
   MAIN CONTENT
   ========================================================== */
document.querySelector("#app").innerHTML = `
<div class="min-h-screen text-slate-50 font-sans antialiased relative z-10">
  <button id="backToTopBtn" class="fixed bottom-8 right-8 z-50 flex h-12 w-12 translate-y-4 items-center justify-center rounded-xl bg-cyan-500 text-white opacity-0 shadow-[0_8px_30px_rgb(6,182,212,0.45)] pointer-events-none transition-all duration-300 hover:bg-cyan-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400" aria-label="Back to top">
    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5"/></svg>
  </button>

  <!-- ============= HEADER ============= -->
  <header class="sticky top-0 z-50 w-full border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      <a href="#home" class="text-2xl font-bold tracking-tight text-white focus:outline-none">
        Rihan<span class="text-cyan-400">.</span>
      </a>
      <nav aria-label="Global" class="hidden md:flex items-center gap-x-8">
        <a href="#home" class="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">Home</a>
        <a href="#about" class="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">About</a>
        <a href="#skills" class="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">Skills</a>
        <a href="#projects" class="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">Projects</a>
        <a href="#contact" class="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-400">Contact</a>
      </nav>
      <div class="flex items-center gap-4">
        <a href="/resume.pdf" download="Rihan_Pathan_Resume.pdf" class="magnetic hidden md:inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-cyan-400 hover:text-slate-950">
          Resume
        </a>
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:hidden" aria-expanded="false" aria-label="Open main menu">
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/></svg>
        </button>
      </div>
    </div>
  </header>

  <main id="main-content">

    <!-- ============= HERO ============= -->
    <section id="home" class="hero-section relative overflow-hidden pt-20 pb-28 sm:pt-28 sm:pb-36 lg:pb-44">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">

          <div class="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p class="reveal mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm" style="--rd:.1s">
              <span class="h-2 w-2 rounded-full bg-emerald-400 pulse-glow"></span>
              Available for internships & collaborations
            </p>

            <h1 class="font-black tracking-[-0.04em] text-white leading-[0.95] text-[clamp(2.6rem,8.5vw,6.5rem)]">
              <span class="block" data-split>I'm Rihan Pathan</span>
              <span class="block gradient-text" data-split>CS Student ✦</span>
            </h1>

            <h2 class="mt-7 text-lg font-medium text-cyan-300/90 sm:text-xl lg:text-2xl type-line">
              &gt;&nbsp;<span id="roleText"></span><span class="type-caret"></span>
            </h2>

            <p class="reveal mt-6 text-base sm:text-lg leading-relaxed text-slate-400 max-w-xl" style="--rd:.35s">
              Passionate AI Builder and Full Stack Developer creating modern web applications and solving real-world problems with the MERN stack, Python and Flask.
            </p>

            <div class="reveal mt-10 flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:gap-5" style="--rd:.5s">
              <a href="#projects" class="magnetic card-shine inline-flex w-full items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_10px_40px_rgb(6,182,212,0.35)] transition-all hover:bg-cyan-400 hover:shadow-[0_15px_50px_rgb(6,182,212,0.5)] sm:w-auto">
                View Projects
                <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
              </a>
              <a href="#contact" class="magnetic inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-transparent px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:border-cyan-500/50 hover:bg-slate-900 hover:text-white sm:w-auto">
                Contact Me
              </a>
            </div>

            <div class="reveal mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500" style="--rd:.65s">
              <span class="uppercase tracking-[0.25em]">Focus</span>
              <span class="h-1 w-8 bg-cyan-500/40 rounded-full"></span>
              <span>MERN</span><span>•</span><span>React + Vite</span><span>•</span><span>Node.js</span><span>•</span><span>Python + Flask</span>
            </div>
          </div>

          <div class="lg:col-span-5 flex justify-center lg:justify-end relative">
            <div class="relative float-y" data-parallax="30">
              <div class="avatar-wrap h-64 w-64 sm:h-80 sm:w-80 lg:h-[420px] lg:w-[420px]">
                <img src="/myphoto.jpg" alt="Rihan Pathan" class="h-full w-full rounded-full object-cover bg-slate-900" />
              </div>

              <span class="chip chip-a">⚛ React</span>
              <span class="chip chip-b">🟢 Node.js</span>
              <span class="chip chip-c">🍃 MongoDB</span>
              <span class="chip chip-d">🐍 Python</span>
            </div>
          </div>

        </div>
      </div>

      <div class="scroll-hint hidden lg:flex">
        <span>Scroll</span>
        <span class="scroll-line"></span>
      </div>
    </section>

    <!-- ============= MARQUEE ============= -->
    <div class="marquee-wrap overflow-hidden border-y border-white/5 bg-white/[0.015] py-6">
      <div class="marquee-track">
        ${marqueeItems()}
      </div>
    </div>

    <!-- ============= ABOUT ============= -->
    <section id="about" class="py-24 sm:py-32 relative">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mb-16 max-w-2xl reveal">
          <p class="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">// 01 About</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-white">
            About <span class="gradient-text">Me</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-7 flex flex-col gap-8">
            ${aboutBlock("Introduction", "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z", "I am a passionate Third-Year Computer Science student with a strong interest in Artificial Intelligence, Full Stack Development, and modern web technologies. I enjoy transforming ideas into practical digital solutions by combining analytical thinking with creative problem-solving. My focus is on building scalable applications that create real-world impact while continuously expanding my technical expertise.", 0)}
            ${aboutBlock("Education", "M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84", "Pursuing a Bachelor of Computer Science (Third Year), where I have consistently maintained excellent academic performance as a class topper. Alongside academics, I actively work on real-world development projects, strengthen my problem-solving skills, and continuously explore emerging technologies in software engineering and Artificial Intelligence.", 1)}
            ${aboutBlock("Career Goal", "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58", "My long-term goal is to become a highly skilled AI Engineer and Full Stack Developer capable of designing intelligent, scalable, and user-centric applications. I am committed to mastering Artificial Intelligence, Data Science, and modern web development while building innovative products that solve meaningful real-world problems.", 2)}
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-5">
            ${aboutCard("9", "+", "CGPA", "Achieved consistently as a class topper", "blue", 0)}
            ${aboutCard("AI", "Builder", "", "Developing intelligent applications to solve real-world problems", "emerald", 1)}
            ${aboutCard("Full", "Stack", "", "MERN + React + Vite + Node.js", "purple", 2)}
            ${aboutCard("🥇", "Esports", "", "Free Fire LAN Tournament Winner", "orange", 3)}
          </div>
        </div>
      </div>
    </section>

    <!-- ============= SKILLS ============= -->
    <section id="skills" class="py-24 sm:py-32 relative">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16 reveal">
          <p class="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">// 02 Skills</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-white">
            My <span class="gradient-text">Tech Stack</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-slate-400">Technologies I use to build modern, full-stack applications.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          ${skillCard("Frontend", "blue", 0, [
            ["React", 88], ["Vite", 85], ["Tailwind CSS", 90], ["JavaScript", 85], ["HTML5", 92], ["CSS3", 88]
          ])}
          ${skillCard("Backend", "emerald", 1, [
            ["Node.js", 82], ["Express.js", 80], ["Python", 90], ["Flask", 85], ["REST APIs", 82]
          ])}
          ${skillCard("Database", "purple", 2, [
            ["MongoDB", 80], ["MySQL", 78], ["SQLite", 82], ["SQL", 80]
          ])}
          ${skillCard("Tools", "amber", 3, [
            ["Git", 85], ["GitHub", 88], ["VS Code", 92], ["Postman", 78], ["AI Tools", 85]
          ])}
        </div>
      </div>
    </section>

    <!-- ============= PROJECTS ============= -->
    <section id="projects" class="py-24 sm:py-32 relative">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-3xl text-center mb-16 reveal">
          <p class="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">// 03 Work</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Featured <span class="gradient-text">Projects</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-slate-400">Projects built to solve real-world problems through software and intelligent applications.</p>
        </div>

        <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
          ${projects.map((p, i) => projectCard(p, i % 3)).join("")}
        </div>
      </div>
    </section>

    <!-- ============= CONTACT ============= -->
    <section id="contact" class="py-24 sm:py-32 relative">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center mb-16 reveal">
          <p class="text-xs uppercase tracking-[0.3em] text-cyan-400 mb-4">// 04 Contact</p>
          <h2 class="text-4xl sm:text-5xl font-black tracking-tight text-white">
            Let's <span class="gradient-text">Connect</span>
          </h2>
          <p class="mt-6 text-lg leading-relaxed text-slate-400">I'm always open to discussing AI, Full Stack Development, internships, collaborations, and exciting opportunities.</p>
        </div>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          ${contactCard("mailto:rp3948430@gmail.com", "blue", "Email", "rp3948430@gmail.com", "stroke", '<path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />', 0)}
          ${contactCard("https://www.linkedin.com/in/rihan-pathan-959782403/", "sky", "LinkedIn", "linkedin.com/in/rihan-pathan-959782403/", "fill", '<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>', 1)}
          ${contactCard("https://github.com/rihanpathan23", "purple", "GitHub", "github.com/rihanpathan23", "fill", '<path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />', 2)}
          ${contactCard("https://instagram.com/rihan_can_build", "pink", "Instagram", "@rihan_can_build", "fill", '<path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clip-rule="evenodd" />', 3)}
        </div>

        <div class="mt-16 flex justify-center reveal">
          <a href="mailto:rp3948430@gmail.com" class="magnetic card-shine group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-lg font-bold text-white transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgb(6,182,212,0.5)]">
            Let's Work Together
            <svg class="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ============= FOOTER ============= -->
    <footer class="border-t border-slate-800/50 pt-16 pb-8 relative">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800/50 pb-8">
          <div class="order-3 md:order-1 text-sm font-medium text-slate-400">© 2026 Rihan Pathan. All rights reserved.</div>
          <nav aria-label="Footer Navigation" class="order-1 md:order-2 flex flex-wrap justify-center gap-x-8 gap-y-4">
            <a href="#home" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">Home</a>
            <a href="#about" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">About</a>
            <a href="#skills" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">Skills</a>
            <a href="#projects" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">Projects</a>
            <a href="#contact" class="text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400">Contact</a>
          </nav>
          <div class="order-2 md:order-3 flex items-center gap-6 text-slate-400">
            <a href="https://github.com/rihanpathan23" target="_blank" rel="noopener noreferrer" class="transition-all hover:-translate-y-1 hover:text-purple-400" aria-label="GitHub"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg></a>
            <a href="https://www.linkedin.com/in/rihan-pathan-959782403/" target="_blank" rel="noopener noreferrer" class="transition-all hover:-translate-y-1 hover:text-sky-400" aria-label="LinkedIn"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
            <a href="https://instagram.com/rihan_can_build" target="_blank" rel="noopener noreferrer" class="transition-all hover:-translate-y-1 hover:text-pink-500" aria-label="Instagram"><svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clip-rule="evenodd" /></svg></a>
          </div>
        </div>
        <div class="pt-8 flex flex-col items-center justify-center">
          <p class="text-sm font-medium text-slate-500 flex items-center justify-center flex-wrap gap-1 text-center">
            Built with <span class="text-red-500 animate-pulse mx-0.5">❤️</span> using Vite, Tailwind CSS and Vanilla JavaScript.
          </p>
        </div>
      </div>
    </footer>
  </main>
</div>
`;

/* ==========================================================
   HELPER BUILDERS
   ========================================================== */

function marqueeItems() {
  const items = ["React", "Node.js", "Express", "MongoDB", "Python", "Flask", "Tailwind", "Vite", "Git", "AI"];
  const build = (arr) =>
    arr
      .map((t, i) =>
        i % 2 === 0
          ? `<span class="marquee-word">${t}</span>`
          : `<span class="marquee-dot">✦</span>`
      )
      .join("");
  return build(items) + build(items);
}

function aboutBlock(title, path, text, i) {
  return `
  <div class="space-y-4 reveal" style="--rd:${i * 0.1}s">
    <h3 class="text-xl font-semibold text-slate-100 flex items-center gap-3">
      <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="${path}"/></svg>
      </span>
      ${title}
    </h3>
    <p class="leading-relaxed text-slate-400">${text}</p>
  </div>`;
}

function aboutCard(big, small, label, text, color, i) {
  const map = {
    blue: "text-blue-400 bg-blue-500/10 group-hover:border-blue-500/50",
    emerald: "text-emerald-400 bg-emerald-500/10 group-hover:border-emerald-500/50",
    purple: "text-purple-400 bg-purple-500/10 group-hover:border-purple-500/50",
    orange: "text-orange-400 bg-orange-500/10 group-hover:border-orange-500/50"
  };
  const isNumeric = /^\d/.test(big);
  return `
  <article class="reveal tilt group relative flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/40 p-6 transition-all duration-300 hover:-translate-y-2 ${map[color]} overflow-hidden" style="--rd:${i * 0.08}s">
    <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg ${map[color].split(" ")[1]} ${map[color].split(" ")[0]}">
      <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14M12 5l7 7-7 7"/></svg>
    </div>
    ${isNumeric
      ? `<div class="flex items-baseline gap-1"><h4 class="text-3xl font-black text-white tabular" data-count="${big}">0</h4><span class="text-3xl font-black text-white">${small}</span></div>`
      : `<h4 class="text-2xl font-black text-white">${big} <span class="text-slate-400 font-bold">${small}</span></h4>`}
    ${label ? `<p class="text-sm font-semibold text-slate-300 mt-1">${label}</p>` : ""}
    <p class="text-xs text-slate-500 mt-2 leading-relaxed">${text}</p>
  </article>`;
}

function skillCard(title, color, i, skills) {
  const map = {
    blue: { icon: "text-blue-400", iconBg: "bg-blue-500/10", bar: "linear-gradient(90deg,#3b82f6,#60a5fa)" },
    emerald: { icon: "text-emerald-400", iconBg: "bg-emerald-500/10", bar: "linear-gradient(90deg,#10b981,#34d399)" },
    purple: { icon: "text-purple-400", iconBg: "bg-purple-500/10", bar: "linear-gradient(90deg,#a855f7,#c084fc)" },
    amber: { icon: "text-amber-400", iconBg: "bg-amber-500/10", bar: "linear-gradient(90deg,#f59e0b,#fbbf24)" }
  };
  const c = map[color];
  return `
  <article data-skill-group class="reveal card-shine group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/40 p-6 hover:border-white/20 hover:bg-slate-900/70 transition-all duration-300" style="--rd:${i * 0.08}s">
    <div class="mb-5 flex items-center gap-3">
      <span class="flex h-11 w-11 items-center justify-center rounded-lg ${c.iconBg} ${c.icon}">
        <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
      </span>
      <h3 class="text-lg font-bold text-white">${title}</h3>
    </div>
    <div class="space-y-3.5">
      ${skills.map(([name, level]) => `
        <div class="skill-row">
          <div class="flex justify-between text-xs font-semibold text-slate-400 mb-1.5">
            <span>${name}</span><span>${level}%</span>
          </div>
          <div class="skill-bar">
            <div class="skill-fill" data-level="${level}" style="background:${c.bar}"></div>
          </div>
        </div>
      `).join("")}
    </div>
  </article>`;
}

function projectCard(p, i) {
  const accents = {
    blue:    { text: "text-blue-400",    blob: "bg-blue-500/15",    hover: "group-hover:text-blue-400",    border: "hover:border-blue-500/40",    glow: "group-hover:shadow-[0_20px_60px_-20px_rgb(59,130,246,0.4)]",    btn: "bg-blue-600 hover:bg-blue-500",       chip: "text-blue-300" },
    emerald: { text: "text-emerald-400", blob: "bg-emerald-500/15", hover: "group-hover:text-emerald-400", border: "hover:border-emerald-500/40", glow: "group-hover:shadow-[0_20px_60px_-20px_rgb(16,185,129,0.4)]", btn: "bg-emerald-600 hover:bg-emerald-500", chip: "text-emerald-300" },
    purple:  { text: "text-purple-400",  blob: "bg-purple-500/15",  hover: "group-hover:text-purple-400",  border: "hover:border-purple-500/40",  glow: "group-hover:shadow-[0_20px_60px_-20px_rgb(168,85,247,0.4)]", btn: "bg-purple-600 hover:bg-purple-500",   chip: "text-purple-300" },
    cyan:    { text: "text-cyan-400",    blob: "bg-cyan-500/15",    hover: "group-hover:text-cyan-400",    border: "hover:border-cyan-500/40",    glow: "group-hover:shadow-[0_20px_60px_-20px_rgb(6,182,212,0.4)]",   btn: "bg-cyan-600 hover:bg-cyan-500",       chip: "text-cyan-300" },
    pink:    { text: "text-pink-400",    blob: "bg-pink-500/15",    hover: "group-hover:text-pink-400",    border: "hover:border-pink-500/40",    glow: "group-hover:shadow-[0_20px_60px_-20px_rgb(236,72,153,0.4)]", btn: "bg-pink-600 hover:bg-pink-500",       chip: "text-pink-300" },
    amber:   { text: "text-amber-400",   blob: "bg-amber-500/15",   hover: "group-hover:text-amber-400",   border: "hover:border-amber-500/40",   glow: "group-hover:shadow-[0_20px_60px_-20px_rgb(245,158,11,0.4)]", btn: "bg-amber-600 hover:bg-amber-500",     chip: "text-amber-300" }
  };
  const a = accents[p.accent];

  const demoBtn = p.demo && p.demo !== "#"
    ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl ${a.btn} px-4 py-2.5 text-sm font-semibold text-white transition-all">
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"/></svg>
        Live Demo
      </a>`
    : "";

  const githubBtn = p.github && p.github !== "#"
    ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl border border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white" aria-label="GitHub">
        <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
      </a>`
    : "";

  return `
  <article class="reveal tilt card-shine group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-7 transition-all duration-500 ${a.border} hover:bg-slate-900/70 ${a.glow} overflow-hidden" style="--rd:${i * 0.1}s">
    <div class="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full ${a.blob} blur-3xl transition-all duration-700 group-hover:scale-125"></div>

    <div class="relative z-10 flex flex-col h-full">
      ${p.badge ? `<span class="self-start mb-5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] ${a.text}">${p.badge}</span>` : ""}

      <p class="text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-2">${p.tagline}</p>
      <h3 class="mb-4 text-2xl font-black text-white tracking-tight ${a.hover} transition-colors duration-300">${p.title}</h3>

      <p class="mb-6 text-sm leading-relaxed text-slate-400">${p.description}</p>

      <div class="mb-7 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-5">
        <h4 class="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] ${a.text}">Problem Solved</h4>
        <p class="text-sm leading-relaxed text-slate-300">${p.problem}</p>
      </div>

      <div class="flex-grow"></div>

      <div class="mt-auto pt-6 border-t border-slate-800/60 flex flex-col gap-5">
        <ul class="flex flex-wrap gap-2">
          ${p.stack.map((t) => `<li class="rounded-md bg-slate-800/80 px-3 py-1 text-xs font-medium ${a.chip} border border-slate-700/50">${t}</li>`).join("")}
        </ul>

        ${demoBtn || githubBtn ? `<div class="flex items-center gap-3">${demoBtn}${githubBtn}</div>` : ""}
      </div>
    </div>
  </article>`;
}

function contactCard(href, color, title, value, iconStyle, iconPath, i) {
  const map = {
    blue:   { text: "text-blue-400",   bg: "bg-blue-500/10",   hover: "group-hover:text-blue-400",   border: "hover:border-blue-500/50",   blob: "bg-blue-500/10" },
    sky:    { text: "text-sky-400",    bg: "bg-sky-500/10",    hover: "group-hover:text-sky-400",    border: "hover:border-sky-500/50",    blob: "bg-sky-500/10" },
    purple: { text: "text-purple-400", bg: "bg-purple-500/10", hover: "group-hover:text-purple-400", border: "hover:border-purple-500/50", blob: "bg-purple-500/10" },
    pink:   { text: "text-pink-400",   bg: "bg-pink-500/10",   hover: "group-hover:text-pink-400",   border: "hover:border-pink-500/50",   blob: "bg-pink-500/10" }
  };
  const c = map[color];
  const svgAttrs = iconStyle === "fill"
    ? 'fill="currentColor"'
    : 'fill="none" stroke-width="1.5" stroke="currentColor"';

  return `
  <a href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""} class="reveal card-shine group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/40 p-7 text-center transition-all duration-300 hover:-translate-y-2 ${c.border} hover:bg-slate-900/70 overflow-hidden" style="--rd:${i * 0.08}s">
    <div class="absolute -top-12 -right-12 h-24 w-24 rounded-full ${c.blob} blur-2xl transition-all duration-500 group-hover:scale-150"></div>
    <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} ${c.text} transition-transform duration-300 group-hover:scale-110">
      <svg class="h-7 w-7" ${svgAttrs} viewBox="0 0 24 24">${iconPath}</svg>
    </div>
    <h3 class="mb-2 text-lg font-bold text-white ${c.hover} transition-colors">${title}</h3>
    <p class="text-sm font-medium text-slate-400 break-all group-hover:text-slate-300 transition-colors">${value}</p>
  </a>`;
}

/* ==========================================================
   BOOT ANIMATIONS
   ========================================================== */
initAnimations();