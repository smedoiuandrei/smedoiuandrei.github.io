/* =========================================================
   DATA — MODIFICA QUI PER AGGIORNARE IL PORTFOLIO
   ========================================================= */
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

const LANGUAGES = [
  { name: "C", icon: `${DEVICON}/c/c-original.svg` },
  { name: "C++", icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  { name: "Python", icon: `${DEVICON}/python/python-original.svg` },
  { name: "Java", icon: `${DEVICON}/java/java-original.svg` },
  { name: "JavaScript", icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: "Bash", icon: `${DEVICON}/bash/bash-original.svg` },
  { name: "HTML", icon: `${DEVICON}/html5/html5-original.svg` },
  { name: "CSS", icon: `${DEVICON}/css3/css3-original.svg` }
];

const TECHNOLOGIES = [
  { name: "Linux", icon: `${DEVICON}/linux/linux-original.svg` },
  { name: "Git", icon: `${DEVICON}/git/git-original.svg` },
  { name: "LaTeX", icon: `${DEVICON}/latex/latex-original.svg`, invertDark: true },
  { name: "POSIX IPC", customIcon: "ipc" },
  { name: "raylib", customIcon: "raylib" },
  { name: "AI", customIcon: "ai" }
];

const SPOKEN_LANGUAGES = [
  { name: "Italiano", level: "C2" },
  { name: "Română", level: "C2" },
  { name: "English", level: "B2 · IELTS" }
];

const CATEGORIES = [
  "Systems & Low-Level",
  "Graphics & Real-Time",
  "AI & Strategy",
  "University"
];

const PROJECTS = [
  {
    id: "aircraft-radar",
    title: "Aircraft radar",
    url: "https://github.com/smedoiuandrei/aircraft-radar",
    description:
      "Aircraft radar in real-time in C with raylib: rotating scan, real ADS-B data from OpenSky Network and click on an aircraft to see its altitude and speed.",
    tags: ["C", "raylib", "Graphics", "Linux", "Real data"],
    categories: ["Systems & Low-Level", "Graphics & Real-Time"],
    banner: "radar"
  },
  {
    id: "blockchain-ipc",
    title: "Blockchain multi-processo",
    url: "https://github.com/Gelminaio/os-blockchain-project",
    description:
      "Simulation of a blockchain where nodes, miners and clients are separate processes that communicate with POSIX IPC. Simulated proof-of-work, Merkle trees, SHA-256 from scratch and a Bash script to verify the chain.",
    tags: ["C", "Bash", "POSIX IPC", "University", "Git"],
    categories: ["Systems & Low-Level", "University"],
    banner: "blockchain"
  },
  {
    id: "fedrigoni-oga",
    title: "Fedrigoni OGA Challenge",
    url: null,
    description:
      "Group project on shift scheduling assisted by AI for a manufacturing plant: report, comparative analysis of existing tools and business case with ROI.",
    tags: ["AI", "University", "LaTeX"],
    categories: ["AI & Strategy", "University"],
    banner: "fedrigoni"
  }
];

/* =========================================================
   CUSTOM SVG ICONS (POSIX IPC, raylib, AI)
   ========================================================= */
function getCustomSkillSvg(type) {
  if (type === "ipc") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="2" y="4" width="7" height="6" rx="1.5"></rect>
        <rect x="15" y="14" width="7" height="6" rx="1.5"></rect>
        <path d="M9 7h4a2 2 0 0 1 2 2v5"></path>
        <path d="M15 17h-4a2 2 0 0 1-2-2v-5" stroke="#34d399"></path>
      </svg>`;
  }
  if (type === "raylib") {
    return `
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="2.5" y="2.5" width="19" height="19" rx="2" fill="#f8fafc" stroke="#0f172a" stroke-width="2.2"></rect>
        <text x="12" y="17.5" text-anchor="middle" font-size="6.2" font-weight="700" font-family="monospace" fill="#0f172a">raylib</text>
      </svg>`;
  }
  if (type === "ai") {
    return `
      <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" fill="rgba(167,139,250,0.18)"></path>
        <circle cx="19" cy="5" r="1.4" fill="#38bdf8" stroke="none"></circle>
      </svg>`;
  }
  return "";
}

/* =========================================================
   ANIMATED PROJECT BANNERS
   ========================================================= */
function getProjectBannerSvg(type) {
  if (type === "radar") {
    return `
      <svg viewBox="0 0 360 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <radialGradient id="radarBg" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stop-color="#0a2e25" />
            <stop offset="100%" stop-color="#050b12" />
          </radialGradient>
          <linearGradient id="sweepGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="rgba(52,211,153,0)" />
            <stop offset="100%" stop-color="rgba(52,211,153,0.45)" />
          </linearGradient>
        </defs>
        <rect width="360" height="180" fill="url(#radarBg)" />
        <g stroke="rgba(52,211,153,0.22)" fill="none" stroke-width="1">
          <circle cx="180" cy="90" r="26" />
          <circle cx="180" cy="90" r="52" />
          <circle cx="180" cy="90" r="78" />
          <line x1="90" y1="90" x2="270" y2="90" />
          <line x1="180" y1="6" x2="180" y2="174" />
        </g>
        <g class="radar-sweep">
          <path d="M180 90 L180 12 A78 78 0 0 1 238 38 Z" fill="url(#sweepGrad)" />
          <line x1="180" y1="90" x2="238" y2="38" stroke="#34d399" stroke-width="1.6" />
        </g>
        <circle class="blip" cx="218" cy="58" r="3.5" fill="#34d399" />
        <text x="226" y="56" fill="#6ee7b7" font-family="JetBrains Mono, monospace" font-size="8.5">RYR482 · FL340</text>
        <circle class="blip blip-delay" cx="136" cy="116" r="3.5" fill="#38bdf8" />
        <text x="80" y="131" fill="#7dd3fc" font-family="JetBrains Mono, monospace" font-size="8.5">DLH9M · 462kt</text>
        <text x="14" y="22" fill="rgba(110,231,183,0.75)" font-family="JetBrains Mono, monospace" font-size="9">ADS-B // OPENSKY LIVE</text>
      </svg>`;
  }

  if (type === "blockchain") {
    return `
      <svg viewBox="0 0 360 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <defs>
          <linearGradient id="chainBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#0b132b" />
            <stop offset="100%" stop-color="#111c3a" />
          </linearGradient>
        </defs>
        <rect width="360" height="180" fill="url(#chainBg)" />
        <!-- IPC connection lines -->
        <line class="ipc-flow" x1="108" y1="92" x2="146" y2="92" stroke="#38bdf8" stroke-width="2" />
        <line class="ipc-flow" x1="214" y1="92" x2="252" y2="92" stroke="#34d399" stroke-width="2" />
        <!-- Block 1 -->
        <g transform="translate(40,56)">
          <rect width="68" height="72" rx="9" fill="#162344" stroke="#38bdf8" stroke-width="1.4" />
          <text x="10" y="21" fill="#7dd3fc" font-family="JetBrains Mono, monospace" font-size="8.5">NODE_01</text>
          <text x="10" y="38" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="7.5">SHA-256</text>
          <text x="10" y="54" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="7.5">000a9f..</text>
        </g>
        <!-- Block 2 -->
        <g transform="translate(146,56)">
          <rect width="68" height="72" rx="9" fill="#162344" stroke="#38bdf8" stroke-width="1.4" />
          <text x="10" y="21" fill="#7dd3fc" font-family="JetBrains Mono, monospace" font-size="8.5">MINER</text>
          <text x="10" y="38" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="7.5">PoW + IPC</text>
          <text x="10" y="54" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="7.5">0004c1..</text>
        </g>
        <!-- Block 3 -->
        <g transform="translate(252,56)">
          <rect width="68" height="72" rx="9" fill="#162344" stroke="#34d399" stroke-width="1.4" />
          <text x="10" y="21" fill="#6ee7b7" font-family="JetBrains Mono, monospace" font-size="8.5">MERKLE</text>
          <text x="10" y="38" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="7.5">VERIFY.SH</text>
          <text x="10" y="54" fill="#34d399" font-family="JetBrains Mono, monospace" font-size="7.5">VALID OK</text>
        </g>
        <text x="14" y="22" fill="rgba(125,211,252,0.8)" font-family="JetBrains Mono, monospace" font-size="9">POSIX IPC // MULTI-PROCESS CHAIN</text>
      </svg>`;
  }

  return `
    <svg viewBox="0 0 360 180" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="aiBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#19112b" />
          <stop offset="100%" stop-color="#0d172a" />
        </linearGradient>
      </defs>
      <rect width="360" height="180" fill="url(#aiBg)" />
      <!-- Shift matrix -->
      <g transform="translate(24,46)">
        <rect x="0" y="0" width="38" height="18" rx="4" fill="#38bdf8" opacity="0.8" />
        <rect x="44" y="0" width="38" height="18" rx="4" fill="#a78bfa" class="shift-pulse" />
        <rect x="88" y="0" width="38" height="18" rx="4" fill="#1e293b" stroke="#475569" />

        <rect x="0" y="26" width="38" height="18" rx="4" fill="#1e293b" stroke="#475569" />
        <rect x="44" y="26" width="38" height="18" rx="4" fill="#34d399" class="shift-pulse-2" />
        <rect x="88" y="26" width="38" height="18" rx="4" fill="#38bdf8" opacity="0.8" />

        <rect x="0" y="52" width="38" height="18" rx="4" fill="#a78bfa" opacity="0.85" />
        <rect x="44" y="52" width="38" height="18" rx="4" fill="#1e293b" stroke="#475569" />
        <rect x="88" y="52" width="38" height="18" rx="4" fill="#34d399" opacity="0.85" />

        <text x="0" y="92" fill="#cbd5e1" font-family="JetBrains Mono, monospace" font-size="8">AI SHIFT MATRIX</text>
      </g>
      <!-- ROI Chart -->
      <g transform="translate(186,44)">
        <line x1="0" y1="86" x2="146" y2="86" stroke="rgba(148,163,184,0.35)" stroke-width="1" />
        <line x1="0" y1="10" x2="0" y2="86" stroke="rgba(148,163,184,0.35)" stroke-width="1" />
        <polyline class="roi-line" points="6,78 42,66 78,48 112,30 142,14" fill="none" stroke="#34d399" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
        <circle cx="142" cy="14" r="3.5" fill="#34d399" />
        <text x="92" y="102" fill="#6ee7b7" font-family="JetBrains Mono, monospace" font-size="8.5">ROI +UP</text>
      </g>
      <text x="14" y="22" fill="rgba(196,181,253,0.85)" font-family="JetBrains Mono, monospace" font-size="9">FEDRIGONI OGA // AI SCHEDULING</text>
    </svg>`;
}

/* =========================================================
   STATE & DOM ELEMENTS
   ========================================================= */
let activeFilter = null; // { type: "tag" | "category", value: string }

const languagesGrid = document.getElementById("languages-grid");
const technologiesGrid = document.getElementById("technologies-grid");
const spokenGrid = document.getElementById("spoken-grid");
const projectsGrid = document.getElementById("projects-grid");
const categoriesGrid = document.getElementById("categories-grid");
const projectCount = document.getElementById("project-count");
const activeFilterBar = document.getElementById("active-filter-bar");
const activeFilterName = document.getElementById("active-filter-name");
const clearFilterBtn = document.getElementById("clear-filter-btn");
const themeToggleBtn = document.getElementById("theme-toggle");

/* =========================================================
   RENDER FUNCTIONS
   ========================================================= */
function createSkillButton(skill) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "skill-pill";
  if (
    activeFilter &&
    activeFilter.type === "tag" &&
    activeFilter.value.toLowerCase() === skill.name.toLowerCase()
  ) {
    btn.classList.add("active");
  }

  const iconHtml = skill.icon
    ? `<img src="${skill.icon}" alt="${skill.name} logo" class="${skill.invertDark ? "invert-dark" : ""}" loading="lazy" />`
    : getCustomSkillSvg(skill.customIcon);

  btn.innerHTML = `
    <span class="skill-icon">${iconHtml}</span>
    <span>${skill.name}</span>
  `;

  btn.addEventListener("click", () => toggleFilter("tag", skill.name));
  return btn;
}

function renderSidebar() {
  languagesGrid.innerHTML = "";
  LANGUAGES.forEach((lang) => languagesGrid.appendChild(createSkillButton(lang)));

  technologiesGrid.innerHTML = "";
  TECHNOLOGIES.forEach((tech) => technologiesGrid.appendChild(createSkillButton(tech)));

  spokenGrid.innerHTML = SPOKEN_LANGUAGES.map(
    (item) => `
      <span class="spoken-badge">
        <span>${item.name}</span>
        <span class="spoken-level">${item.level}</span>
      </span>`
  ).join("");
}

function getFilteredProjects() {
  if (!activeFilter) return PROJECTS;
  const target = activeFilter.value.toLowerCase();

  if (activeFilter.type === "category") {
    return PROJECTS.filter((p) =>
      p.categories.some((cat) => cat.toLowerCase() === target)
    );
  }
  return PROJECTS.filter((p) =>
    p.tags.some((tag) => tag.toLowerCase() === target)
  );
}

function renderProjects() {
  const list = getFilteredProjects();
  projectCount.textContent = `${list.length} / ${PROJECTS.length}`;

  if (activeFilter) {
    activeFilterBar.classList.remove("hidden");
    activeFilterName.textContent = activeFilter.value;
  } else {
    activeFilterBar.classList.add("hidden");
  }

  projectsGrid.innerHTML = "";

  if (list.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    empty.innerHTML = `
      <p>No projects tagged with <strong>${activeFilter.value}</strong> yet.</p>
      <button type="button" class="clear-btn">Show all projects</button>
    `;
    empty.querySelector("button").addEventListener("click", clearFilter);
    projectsGrid.appendChild(empty);
    return;
  }

  list.forEach((project) => {
    const card = document.createElement("article");
    card.className = "project-card";

    const titleHtml = project.url
      ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">
           <span>${project.title}</span>
           <svg class="external-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
             <path d="M7 17 17 7M7 7h10v10"></path>
           </svg>
         </a>`
      : `<span>${project.title}</span>`;

    card.innerHTML = `
      <div class="project-banner">${getProjectBannerSvg(project.banner)}</div>
      <div class="project-body">
        <div class="project-top">
          <h3>${titleHtml}</h3>
        </div>
        <p class="project-desc">${project.description}</p>
        <div class="project-tags"></div>
      </div>
    `;

    const tagsContainer = card.querySelector(".project-tags");
    project.tags.forEach((tag) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "tag-chip";
      if (
        activeFilter &&
        activeFilter.type === "tag" &&
        activeFilter.value.toLowerCase() === tag.toLowerCase()
      ) {
        chip.classList.add("active");
      }
      chip.textContent = tag;
      chip.addEventListener("click", () => toggleFilter("tag", tag));
      tagsContainer.appendChild(chip);
    });

    projectsGrid.appendChild(card);
  });
}

function renderCategories() {
  categoriesGrid.innerHTML = "";

  CATEGORIES.forEach((category) => {
    const count = PROJECTS.filter((p) => p.categories.includes(category)).length;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "category-chip";
    if (
      activeFilter &&
      activeFilter.type === "category" &&
      activeFilter.value === category
    ) {
      btn.classList.add("active");
    }
    btn.innerHTML = `
      <span>${category}</span>
      <span class="category-count">${count}</span>
    `;
    btn.addEventListener("click", () => toggleFilter("category", category));
    categoriesGrid.appendChild(btn);
  });
}

/* =========================================================
   FILTER & THEME INTERACTIONS
   ========================================================= */
function toggleFilter(type, value) {
  if (
    activeFilter &&
    activeFilter.type === type &&
    activeFilter.value.toLowerCase() === value.toLowerCase()
  ) {
    activeFilter = null;
  } else {
    activeFilter = { type, value };
  }
  renderAll();
}

function clearFilter() {
  activeFilter = null;
  renderAll();
}

function renderAll() {
  renderSidebar();
  renderProjects();
  renderCategories();
}

function initTheme() {
  const saved = localStorage.getItem("portfolio-theme");
  if (saved === "light" || saved === "dark") {
    document.documentElement.setAttribute("data-theme", saved);
  }
  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("portfolio-theme", next);
  });
}

clearFilterBtn.addEventListener("click", clearFilter);
initTheme();
renderAll();