import "./style.css";

document.querySelector("#app").innerHTML = `
<div class="min-h-screen bg-slate-950 text-slate-50 font-sans antialiased selection:bg-blue-500/30">
<button
  id="backToTopBtn"
  class="fixed bottom-8 right-8 z-50 flex h-12 w-12 translate-y-4 items-center justify-center rounded-xl bg-blue-600 text-white opacity-0 shadow-[0_8px_30px_rgb(59,130,246,0.3)] pointer-events-none transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_8px_30px_rgb(59,130,246,0.5)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
  aria-label="Back to top"
>
  <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
  </svg>
</button>
  
  <header class="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
    <div class="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
      
      <a href="#home" class="text-2xl font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">
       Rihan<span class="text-blue-500">.</span>
       </a>

      <nav aria-label="Global" class="hidden md:flex items-center gap-x-8">
        <a href="#home" class="text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">Home</a>
        <a href="#about" class="text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">About</a>
        <a href="#skills" class="text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">Skills</a>
        <a href="#projects" class="text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">Projects</a>
        <a href="#contact" class="text-sm font-medium text-slate-300 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-sm">Contact</a>
      </nav>

      <div class="flex items-center gap-4">
        
             <a href="/resume.pdf" download="Rihan_Pathan_Resume.pdf" class="hidden md:inline-flex items-center justify-center rounded-lg bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                 Resume
                 </a>
        
        <button type="button" class="inline-flex items-center justify-center rounded-md p-2.5 text-slate-400 transition-colors hover:bg-slate-800 hover:text-white md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

    </div>
  </header>

  <main id="main-content">
    
    <section id="home" class="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="flex flex-col-reverse items-center gap-16 lg:flex-row lg:justify-between lg:gap-8">
          
          <div class="flex max-w-2xl flex-col items-center text-center lg:items-start lg:text-left">
           <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
  Hi, I'm <span class="whitespace-nowrap">Rihan <span class="inline-block origin-bottom-right hover:animate-pulse" aria-hidden="true">👋</span></span>
</h1>
            
            <h2 class="mt-6 text-xl font-semibold text-blue-400 sm:text-2xl lg:text-3xl">
              BSc Computer Science Student
            </h2>
            
            <p class="mt-6 text-lg leading-8 text-slate-400 sm:text-xl max-w-xl">
              Passionate AI Builder and Full Stack Developer creating modern web applications and solving real-world problems.
            </p>
            
            <div class="mt-10 flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:gap-6">
              <a href="#projects" class="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-sm shadow-blue-500/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto">
                View Projects
              </a>
              <a href="#contact" class="inline-flex w-full items-center justify-center rounded-lg border border-slate-700 bg-transparent px-8 py-4 text-base font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 sm:w-auto">
                Contact Me
              </a>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end lg:w-1/2 flex-shrink-0">
            <div class="relative flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-slate-800 bg-gradient-to-br from-slate-800 to-slate-900 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96 ring-1 ring-white/10 ring-offset-8 ring-offset-slate-950">
              <img src="/myphoto.jpg" alt="Rihan Pathan" class="h-full w-full object-cover">
            
              <div class="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/10 to-transparent mix-blend-overlay"></div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
</div>
<section id="about" class="py-24 sm:py-32 bg-slate-950">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="mb-16 max-w-2xl">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl inline-block relative">
        About Me
        <span class="absolute -bottom-2 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
      </h2>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <div class="flex flex-col gap-10 text-slate-400">
        
        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            Introduction
          </h3>
          <p class="leading-relaxed text-lg">
           I am a passionate Third-Year Computer Science student with a strong interest in Artificial Intelligence, Full Stack Development, and modern web technologies. I enjoy transforming ideas into practical digital solutions by combining analytical thinking with creative problem-solving. My focus is on building scalable applications that create real-world impact while continuously expanding my technical expertise.
          </p>
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
            </svg>
            Education
          </h3>
          <p class="leading-relaxed text-lg">
           "Pursuing a Bachelor of Computer Science (Third Year). where I have consistently maintained excellent academic performance as a class topper. Alongside academics, I actively work on real-world development projects, strengthen my problem-solving skills, and continuously explore emerging technologies in software engineering and Artificial Intelligence.
        </div>

        <div class="space-y-4">
          <h3 class="text-xl font-semibold text-slate-200 flex items-center gap-2">
            <svg class="w-6 h-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45" />
            </svg>
            Career Goal
          </h3>
          <p class="leading-relaxed text-lg">
            My long-term goal is to become a highly skilled AI Engineer and Full Stack Developer capable of designing intelligent, scalable, and user-centric applications. I am committed to mastering Artificial Intelligence, Data Science, and modern web development while building innovative products that solve meaningful real-world problems. I aspire to contribute to cutting-edge technology and eventually develop impactful AI solutions through my own ventures.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        
        <article class="group relative flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
            </svg>
          </div>
          <h4 class="text-3xl font-bold text-white mb-2">9+</h4>
          <p class="text-sm font-medium text-slate-400">CGPA</p>
        </article>

        <article class="group relative flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">AI Builder</h4>
          <p class="text-sm font-medium text-slate-400">Developing intelligent applications
                to solve real-world problems</p>
        </article>

        <article class="group relative flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-300">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">AI & Full Stack</h4>
          <p class="text-sm font-medium text-slate-400">Developing AI-powered web applications with Python, Flask and modern frontend technologies</p>
        </article>

        <article class="group relative flex flex-col justify-center rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10 text-orange-400 group-hover:scale-110 group-hover:bg-orange-500/20 transition-all duration-300">
            <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.536.57a48.124 48.124 0 01-.12 3.935c-.011.256.204.476.46.476h9.096c.256 0 .471-.22.46-.476a48.124 48.124 0 01-.12-3.935c-.019-.31.227-.57.536-.57v0c.355 0 .676.186.959.401.29.221.634.349 1.003.349 1.036 0 1.875-1.007 1.875-2.25s-.84-2.25-1.875-2.25c-.369 0-.713.128-1.003.349-.283.215-.604.401-.959.401v0a.656.656 0 01-.658-.663 48.422 48.422 0 00.315-4.907 48.39 48.39 0 01-4.163.3.64.64 0 01-.657-.643v0z" />
            </svg>
          </div>
          <h4 class="text-xl font-bold text-white mb-2">Competitive Esports Player</h4>
          <p class="text-sm font-medium text-slate-400">Free Fire LAN Tournament Winner
            Teamwork • Strategy • Quick Decision Making</p>
        </article>

      </div>
    </div>
  </div>
</section>
<section id="skills" class="py-24 sm:py-32 bg-slate-950">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl inline-block relative">
        Skills
        <span class="absolute -bottom-2 left-[25%] w-1/2 h-1 bg-blue-500 rounded-full"></span>
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-slate-400">
        Technologies and tools I use to build modern applications.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      
      <article class="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)]">
        <div class="mb-6 flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-transform duration-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Frontend</h3>
        </div>
        
        <ul class="flex flex-wrap gap-3">
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]">
              HTML5
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]">
              CSS3
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]">
              JavaScript
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]">
              Tailwind CSS
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-blue-400 hover:bg-blue-500/10 hover:text-blue-400 hover:shadow-[0_0_15px_rgb(59,130,246,0.2)]">
              Vite
            </span>
          </li>
        </ul>
      </article>

      <article class="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-emerald-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(16,185,129,0.15)]">
        <div class="mb-6 flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-transform duration-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Backend</h3>
        </div>
        
        <ul class="flex flex-wrap gap-3">
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_15px_rgb(16,185,129,0.2)]">
              Python
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_15px_rgb(16,185,129,0.2)]">
              Flask
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_15px_rgb(16,185,129,0.2)]">
              SQL
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-400 hover:shadow-[0_0_15px_rgb(16,185,129,0.2)]">
              SQLite
            </span>
          </li>
        </ul>
      </article>

      <article class="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/50 p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-purple-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)]">
        <div class="mb-6 flex items-center gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-transform duration-300">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.492-3.396m-2.492 3.396l-3.396 2.492m3.396-2.492L8.32 8.32M9.88 12.75L12.75 9.88m0 0l-3.396-2.492m3.396 2.492L15.17 11.42m-2.492-3.396L8.32 8.32m0 0l5.877-5.877A2.652 2.652 0 0010.45 6.2L4.57 12.07l.001.001-3.397 2.492a2.652 2.652 0 003.748 3.748l2.492-3.396z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-white">Tools & Technologies</h3>
        </div>
        
        <ul class="flex flex-wrap gap-3">
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_15px_rgb(168,85,247,0.2)]">
              Git
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_15px_rgb(168,85,247,0.2)]">
              GitHub
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_15px_rgb(168,85,247,0.2)]">
              VS Code
            </span>
          </li>
          <li>
            <span class="inline-flex cursor-default items-center rounded-full border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-medium text-slate-300 transition-all duration-300 hover:scale-105 hover:border-purple-400 hover:bg-purple-500/10 hover:text-purple-400 hover:shadow-[0_0_15px_rgb(168,85,247,0.2)]">
              AI Tools
            </span>
          </li>
        </ul>
      </article>

    </div>
  </div>
</section>
<section id="projects" class="py-24 sm:py-32 bg-slate-950">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="mx-auto max-w-3xl text-center mb-16">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl inline-block relative">
        Featured Projects
        <span class="absolute -bottom-2 left-[15%] w-[70%] h-1 bg-blue-500 rounded-full"></span>
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-slate-400">
        Projects built to solve real-world problems through software and intelligent applications.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-12 lg:grid-cols-3">
      
      <article class="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/30 hover:bg-slate-800/60 hover:shadow-[0_8px_40px_rgb(59,130,246,0.1)] overflow-hidden">
        
        <div class="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-500/20"></div>

        <div class="relative z-10 flex flex-col h-full">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 transition-colors duration-300 group-hover:bg-blue-500 group-hover:text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25zm.75-12h9v9h-9v-9z" />
              </svg>
            </div>
          </div>

          <h3 class="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-400">
            Star AI
          </h3>
          
          <p class="mb-6 text-sm leading-relaxed text-slate-400">
            A college-focused AI chatbot designed to provide instant answers to student queries through a simple conversational interface.
          </p>

          <div class="mb-8 rounded-2xl bg-slate-950/50 p-5 border border-slate-800/50">
            <h4 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Problem Solved</h4>
            <p class="text-sm leading-relaxed text-slate-300">
              Reduces information delays by helping students quickly access important college-related information such as today's lectures, academic updates, notices, and common questions without waiting for manual responses.
            </p>
          </div>

          <div class="flex-grow"></div>

          <div class="mt-auto pt-6 border-t border-slate-800/50 flex flex-col gap-6">
            
            <ul class="flex flex-wrap gap-2">
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-blue-300 border border-slate-700/50">HTML</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-blue-300 border border-slate-700/50">CSS</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-blue-300 border border-slate-700/50">JavaScript</li>
            </ul>

            <div class="flex items-center gap-4">
              <a href="https://star-ai-ybbi.onrender.com/" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Live Demo
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      <article class="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-slate-800/60 hover:shadow-[0_8px_40px_rgb(16,185,129,0.1)] overflow-hidden">
        
        <div class="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:bg-emerald-500/20"></div>

        <div class="relative z-10 flex flex-col h-full">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </div>
          </div>

          <h3 class="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-emerald-400">
            Team Star System
          </h3>
          
          <p class="mb-6 text-sm leading-relaxed text-slate-400">
            A complete esports team management platform built to organize team operations and simplify tournament management.
          </p>

          <div class="mb-8 rounded-2xl bg-slate-950/50 p-5 border border-slate-800/50">
            <h4 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Problem Solved</h4>
            <p class="text-sm leading-relaxed text-slate-300">
              Helps esports teams track tournament schedules, entry fees, profits and losses, remaining funds, match history, and strategy discussions in one centralized platform.
            </p>
          </div>

          <div class="flex-grow"></div>

          <div class="mt-auto pt-6 border-t border-slate-800/50 flex flex-col gap-6">
            
            <ul class="flex flex-wrap gap-2">
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-emerald-300 border border-slate-700/50">Python</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-emerald-300 border border-slate-700/50">Flask</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-emerald-300 border border-slate-700/50">SQLite</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-emerald-300 border border-slate-700/50">JavaScript</li>
            </ul>

            <div class="flex items-center gap-4">
              <a href="https://team-star-management-system.onrender.com/" target="_blank" rel="noopener noreferrer" class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400">
                <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Live Demo
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center rounded-xl border border-slate-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </article>

      <article class="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/30 hover:bg-slate-800/60 hover:shadow-[0_8px_40px_rgb(168,85,247,0.1)] overflow-hidden">
        
        <div class="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-purple-500/10 blur-3xl transition-all duration-500 group-hover:bg-purple-500/20"></div>

        <div class="relative z-10 flex flex-col h-full">
          <div class="mb-6 flex items-center justify-between">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors duration-300 group-hover:bg-purple-500 group-hover:text-white">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
          </div>

          <h3 class="mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-purple-400">
            Personal Portfolio
          </h3>
          
          <p class="mb-6 text-sm leading-relaxed text-slate-400">
            A modern responsive developer portfolio showcasing projects, technical skills, achievements, and career journey.
          </p>

          <div class="mb-8 rounded-2xl bg-slate-950/50 p-5 border border-slate-800/50">
            <h4 class="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Problem Solved</h4>
            <p class="text-sm leading-relaxed text-slate-300">
              Creates a professional online presence where recruiters and clients can explore projects, skills, and contact information in one place.
            </p>
          </div>

          <div class="flex-grow"></div>

          <div class="mt-auto pt-6 border-t border-slate-800/50 flex flex-col gap-6">
            
            <ul class="flex flex-wrap gap-2">
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-purple-300 border border-slate-700/50">Vite</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-purple-300 border border-slate-700/50">Tailwind CSS</li>
              <li class="rounded-md bg-slate-800/80 px-3 py-1.5 text-xs font-medium text-purple-300 border border-slate-700/50">JavaScript</li>
            </ul>

            <div class="flex items-center gap-4">
              <a href="#" target="_blank" rel="noopener noreferrer" class="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-transparent px-4 py-2.5 text-sm font-semibold text-slate-300 transition-all hover:border-slate-500 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </article>

    </div>
  </div>
</section>
<section id="contact" class="py-24 sm:py-32 bg-slate-950">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="mx-auto max-w-2xl text-center mb-16">
      <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl inline-block relative">
        Let's Connect
        <span class="absolute -bottom-2 left-[25%] w-1/2 h-1 bg-blue-500 rounded-full transition-all duration-300"></span>
      </h2>
      <p class="mt-6 text-lg leading-relaxed text-slate-400">
        I'm always open to discussing AI, Full Stack Development, internships, collaborations, and exciting opportunities.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      
      <a href="mailto:rp3948430@gmail.com" class="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-blue-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] overflow-hidden">
        <div class="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl transition-all duration-500 group-hover:bg-blue-500/20"></div>
        <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-500/20">
          <svg class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-bold text-white group-hover:text-blue-400 transition-colors">Email</h3>
        <p class="text-sm font-medium text-slate-400 break-all group-hover:text-slate-300 transition-colors">rp3948430@gmail.com</p>
      </a>

      <a href="https://www.linkedin.com/in/rihan-pathan-959782403/" target="_blank" rel="noopener noreferrer" class="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-sky-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(14,165,233,0.15)] overflow-hidden">
        <div class="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:bg-sky-500/20"></div>
        <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-500/20">
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-bold text-white group-hover:text-sky-400 transition-colors">LinkedIn</h3>
        <p class="text-sm font-medium text-slate-400 break-all group-hover:text-slate-300 transition-colors">linkedin.com/in/rihan-pathan-959782403/</p>
      </a>

      <a href="https://github.com/rihanpathan23" target="_blank" rel="noopener noreferrer" class="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-purple-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(168,85,247,0.15)] overflow-hidden">
        <div class="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition-all duration-500 group-hover:bg-purple-500/20"></div>
        <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-purple-500/20">
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-bold text-white group-hover:text-purple-400 transition-colors">GitHub</h3>
        <p class="text-sm font-medium text-slate-400 break-all group-hover:text-slate-300 transition-colors">github.com/rihanpathan23</p>
      </a>

      <a href="https://instagram.com/rihan_can_build" target="_blank" rel="noopener noreferrer" class="group relative flex flex-col items-center rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-pink-500/50 hover:bg-slate-800/80 hover:shadow-[0_8px_30px_rgb(236,72,153,0.15)] overflow-hidden">
        <div class="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-pink-500/10 blur-2xl transition-all duration-500 group-hover:bg-pink-500/20"></div>
        <div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-500/10 text-pink-400 transition-transform duration-300 group-hover:scale-110 group-hover:bg-pink-500/20">
          <svg class="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
          </svg>
        </div>
        <h3 class="mb-2 text-lg font-bold text-white group-hover:text-pink-400 transition-colors">InstaGram</h3>
        <p class="text-sm font-medium text-slate-400 break-all group-hover:text-slate-300 transition-colors">@rihan_can_build</p>
      </a>

    </div>

    <div class="mt-16 flex justify-center">
      <a href="mailto:rp3948430@gmail.com" class="group relative inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-[0_8px_30px_rgb(59,130,246,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400">
        Let's Work Together
        <svg class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </a>
    </div>

  </div>
</section>
<footer class="bg-slate-950 border-t border-slate-800/50 pt-16 pb-8">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    
    <div class="flex flex-col md:flex-row justify-between items-center gap-8 border-b border-slate-800/50 pb-8">
      
      <div class="order-3 md:order-1 text-sm font-medium text-slate-400">
        © 2026 Rihan Pathan. All rights reserved.
      </div>

      <nav aria-label="Footer Navigation" class="order-1 md:order-2 flex flex-wrap justify-center gap-x-8 gap-y-4">
        <a href="#home" class="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">Home</a>
        <a href="#about" class="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">About</a>
        <a href="#skills" class="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">Skills</a>
        <a href="#projects" class="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">Projects</a>
        <a href="#contact" class="text-sm font-medium text-slate-400 transition-colors hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm">Contact</a>
      </nav>

      <div class="order-2 md:order-3 flex items-center gap-6">
        
        <a href="https://github.com/rihanpathan23" target="_blank" rel="noopener noreferrer" class="text-slate-400 transition-all hover:-translate-y-1 hover:text-purple-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 rounded-sm" aria-label="GitHub">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
        </a>

        <a href="https://www.linkedin.com/in/rihan-pathan-959782403/" target="_blank" rel="noopener noreferrer" class="text-slate-400 transition-all hover:-translate-y-1 hover:text-sky-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-sm" aria-label="LinkedIn">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
          </svg>
        </a>
        <a href="https://instagram.com/rihan_can_build" target="_blank" rel="noopener noreferrer" class="text-slate-400 transition-all hover:-translate-y-1 hover:text-pink-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-sm" aria-label="Instagram">
          <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
         </svg>
        </a>
      </div>
    </div>

    <div class="pt-8 flex flex-col items-center justify-center">
      <p class="text-sm font-medium text-slate-500 flex items-center justify-center flex-wrap gap-1 text-center">
        Built with <span class="text-red-500 animate-pulse mx-0.5">❤️</span> using Vite, Tailwind CSS and Vanilla JavaScript.
      </p>
    </div>

  </div>
</footer>
`;
const backToTopBtn = document.getElementById('backToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.remove('opacity-0', 'translate-y-4', 'pointer-events-none');
    backToTopBtn.classList.add('opacity-100', 'translate-y-0');
  } else {
    backToTopBtn.classList.add('opacity-0', 'translate-y-4', 'pointer-events-none');
    backToTopBtn.classList.remove('opacity-100', 'translate-y-0');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
const menuBtn = document.querySelector('button[aria-expanded]');
const nav = document.querySelector('nav[aria-label="Global"]');

if (menuBtn && nav) { 
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
    nav.classList.toggle('hidden'); 
    nav.classList.toggle('flex');
  });
}