(() => {
  "use strict";

  /* ---------- Settings you can edit ---------- */
  const GITHUB_USER = "HenningTrillhus";
  // Public access key from web3forms.com (free; the key is meant to be public and only lets people email you).
  // While it is empty the contact form stays hidden.
  const WEB3FORMS_ACCESS_KEY = "ac9406cd-dd6a-4889-b7ca-eab4f9b43ee6";
  // Repos to leave out of the list (by name).
  const HIDDEN_REPOS = ["Portfolio"];
  // How each project was made. Repos in neither list end up under "More projects".
  const HAND_CODED = ["first-project", "Deepvein", "3D-Shooter", "Zeptrico", "UnityRPG", "Game-Of-Life-Conway"];
  const VIBE_CODED = ["Kollokvie-IFI", "My-Munch", "Min-Munch", "Leilighet-Designer-"];
  // Nicer descriptions than the ones on GitHub, in both languages (by repo name). Optional.
  const DESCRIPTIONS = {
    "Kollokvie-IFI": {
      en: "Web app for organising study groups (kollokvier) at the Department of Informatics.",
      no: "Nettapp for å organisere kollokvier ved Institutt for informatikk.",
    },
    "My-Munch": {
      en: "A social platform where people can share food recipes.",
      no: "En sosial plattform der folk kan dele matoppskrifter.",
    },
    "Min-Munch": {
      en: "A digital recipe book for saving and organising my own recipes.",
      no: "En digital oppskriftsbok for å lagre og organisere mine egne oppskrifter.",
    },
    "Game-Of-Life-Conway": {
      en: "Conway's Game of Life, built with pygame.",
      no: "Conways Game of Life, laget med pygame.",
    },
    "Zeptrico": {
      en: "Indie base-building zombie survival game, made in Unity.",
      no: "Indiespill der du bygger base og overlever zombier, laget i Unity.",
    },
    "UnityRPG": {
      en: "My first Unity game: a small RPG.",
      no: "Mitt første Unity-spill: et lite rollespill.",
    },
    "3D-Shooter": {
      en: "A 3D shooter game made in Unity.",
      no: "Et 3D-skytespill laget i Unity.",
    },
    "first-project": {
      en: "Keeps track of what's in your fridge and uses AI to suggest dinner ideas from it.",
      no: "Holder oversikt over hva du har i kjøleskapet og bruker KI til å foreslå middagsideer.",
    },
    "Leilighet-Designer-": {
      en: "An apartment designer: lay out and plan your own flat.",
      no: "En leilighetsdesigner: design og planlegg din egen leilighet.",
    },
    "WorkoutLab": {
      en: "A fitness website I built in 2020, completely self-taught in HTML, CSS and JavaScript. It lived at workoutlab.no, but the site is down now because it was so long ago.",
      no: "En treningsnettside jeg lagde i 2020, helt selvlært i HTML, CSS og JavaScript. Den lå på workoutlab.no, men nettsiden er nede nå fordi det var så lenge siden.",
    },
    "TheChatHive": {
      en: "A social platform I coded in high school, before the AI era.",
      no: "En sosial plattform jeg kodet på videregående, før KI-tiden.",
    },
    "MatchMetrix": {
      en: "Another social platform from high school, also coded by hand before the AI era.",
      no: "En annen sosial plattform fra videregående, også kodet for hånd før KI-tiden.",
    },
  };

  // Older projects that live on my earlier GitHub account (HenningT05).
  // The MatchMetrix demo on Vercel no longer exists, so it has no live link.
  const OLDER_PROJECTS = [
    // No repository and no live site: the year is approximate, so no month is shown.
    { name: "WorkoutLab", html_url: null, language: "HTML", languageLabel: "HTML · CSS · JS", homepage: null, created: "2020-06-15T00:00:00Z", made: "hand", preAi: true, preAiLabel: "preAiShort", noMonth: true, offline: true },
    { name: "TheChatHive", html_url: "https://github.com/HenningT05/TheChatHive", language: "Svelte", homepage: null, created: "2023-05-23T00:00:00Z", made: "hand", preAi: true },
    { name: "MatchMetrix", html_url: "https://github.com/HenningT05/MatchMetrix", language: "Svelte", homepage: null, created: "2023-10-20T00:00:00Z", made: "hand", preAi: true },
  ];

  /* ---------- Translations ---------- */
  const I18N = {
    en: {
      metaTitle: "Henning Trillhus – Computer Science Student & Developer",
      metaDesc: "Portfolio of Henning Trillhus, a computer science student at the University of Oslo who builds web apps and games.",
      ogDesc: "Web apps, games and side projects by a computer science student at the University of Oslo.",
      skip: "Skip to content",
      brandLabel: "Henning Trillhus, back to top",
      navLabel: "Main",
      navAbout: "About", navProjects: "Projects", navSkills: "Skills", navEducation: "Education", navContact: "Contact",
      langSwitch: "Bytt til norsk",
      themeToLight: "Switch to light theme", themeToDark: "Switch to dark theme",
      menuOpen: "Open menu", menuClose: "Close menu",
      badge: "Open to internships & part-time roles",
      heroTitle1: "Hi, I'm Henning.",
      heroTitle2: "I build web apps and games.",
      heroLead: "I'm studying Informatics: Programming and System Architecture at the University of Oslo. I've been programming since primary school and enjoy turning ideas into working software.",
      ctaWork: "View my work", ctaContact: "Get in touch", ctaCv: "Download CV",
      profiles: "Profiles", email: "Email",
      codeLabel: "A short summary of Henning as code",
      statsLabel: "GitHub at a glance",
      statProjects: "Projects", statHand: "Hand-coded", statLanguages: "Languages", statDemos: "Live demos",
      aboutKicker: "01 / About", aboutTitle: "A bit about me",
      about1: "I started programming in primary school and moved on to HTML and JavaScript. Since then I've mostly taught myself, and today I build web apps and games with tools like Svelte, TypeScript, C# and Unity.",
      about2: "Today I'm taking a bachelor's degree in <strong>Informatics: Programming and System Architecture</strong> at the University of Oslo. The degree gives me the theory, and my own projects are where I put it into practice.",
      about3: "What I enjoy most is turning an idea into something people can actually use, like a recipe app, a study-group tool or a game. I'm looking for <strong>internships and part-time roles</strong> in software development where I can learn from experienced developers and contribute from day one.",
      factStudying: "Studying", factStudyingValue: "Informatics: Programming and System Architecture",
      factDegree: "Degree", factDegreeValue: "Bachelor, 3 years (180 ECTS)",
      factUniversity: "University", factUniversityValue: "University of Oslo, Department of Informatics",
      factBased: "Based in", factBasedValue: "Oslo, Norway",
      factLooking: "Looking for", factLookingValue: "Internships & part-time roles",
      factLanguages: "Languages", factLanguagesValue: "Norwegian, English",
      projectsKicker: "02 / Projects", projectsTitle: "Things I've built",
      projectsSub: "Everything I've built, with a clear split between what I coded myself and what I built with AI (vibe coding). Newest first, loaded live from my <a href=\"https://github.com/HenningTrillhus\" target=\"_blank\" rel=\"noopener\">GitHub profile</a> plus older projects from my <a href=\"https://github.com/HenningT05\" target=\"_blank\" rel=\"noopener\">earlier account</a>.",
      loading: "Loading projects…", noProjects: "Projects coming soon.",
      handTitle: "Hand-coded", handDesc: "Written by me, line by line.",
      vibeTitle: "Vibe-coded", vibeDesc: "Built by describing what I want to an AI and steering the result. Quick for prototyping, and I'm upfront that the AI wrote most of the code.",
      otherTitle: "More projects", otherDesc: "More projects from my GitHub.",
      badgeHand: "Hand-coded", badgeVibe: "Vibe-coded", preAi: "Before AI · High school", preAiNote: "Before AI coding tools",
      createdIn: "Created {month}",
      journeyTitle: "How I got here", journeySub: "I've been making websites since I was little. Roughly how it went:",
      j1When: "~2018", j1Where: "7th grade, primary school", j1Title: "Scratch", j1Text: "Started programming with Scratch, a block-based language. This is where my interest in development began.",
      j2When: "~2020", j2Where: "Lower secondary school", j2Title: "HTML & JavaScript", j2Text: "Moved on to writing real code. In 2020 I built WorkoutLab (workoutlab.no), a fitness website, completely self-taught in HTML, CSS and JavaScript.",
      j3When: "~2023", j3Where: "Going deeper", j3Title: "Python, Node.js, JavaScript & Svelte", j3Text: "Went deeper and built full projects, including the social platforms TheChatHive and MatchMetrix.",
      j4When: "Now", j4Where: "University of Oslo", j4Title: "Informatics at UiO", j4Text: "Studying programming and system architecture, and building with C#, Unity, TypeScript and AI-assisted tools.",
      preAiShort: "Before AI", offline: "Offline",
      backToProjects: "Back to projects",
      pvLoading: "Loading README from GitHub…",
      pvError: "Couldn't load the README right now.",
      pvGitHub: "View on GitHub ↗",
      pvFrom: "README fetched live from GitHub.",
      milWhen: "2025 – 2026",
      milTitle: "A break from development: military service",
      milDetail: "I served in the Norwegian Armed Forces Cyber Defence (Cyberforsvaret), which meant a pause in my development journey.",
      footerTag: "Informatics student in Oslo, building web apps and games.",
      hsWhen: "High school",
      hsTitle: "Vika videregående skole",
      hsDetail: "Science track (realfag) with IT2, R2 and Physics 2.",
      formName: "Name",
      formEmail: "Email",
      formMessage: "Message",
      formSend: "Send message",
      formSending: "Sending…",
      formOk: "Thanks! Your message has been sent. I'll get back to you soon.",
      formErr: "Something went wrong. Please try again, or email me directly.",
      formOr: "Or reach me directly",
      formNote: "Sent by email through Web3Forms.",
      formConsent: "I agree that my name, email address and message are used to reply to me, and that they are handled as described in the <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">privacy policy</a>.",
      privacyLink: "Privacy policy",
      liveDemo: "Live demo ↗", code: "Code", project: "Project",
      descLang: "A {lang} project.", descGeneric: "A personal project.",
      skillsKicker: "03 / Skills", skillsTitle: "What I work with",
      skillsLanguages: "Languages", skillsTools: "Tools & platforms", skillsDegree: "Covered in my degree", skillsSpoken: "Spoken languages",
      topicOop: "Object-oriented programming", topicAlgo: "Algorithms & data structures", topicDb: "Databases & data modelling",
      topicSe: "Software engineering", topicSec: "Information security", topicOs: "Operating systems & networking", topicLogic: "Logic & complexity",
      langNorwegian: "Norwegian", langEnglish: "English",
      eduKicker: "04 / Education & background", eduTitle: "Where I'm coming from",
      eduWhen: "In progress",
      eduDegree: "BSc Informatics: Programming and System Architecture, University of Oslo",
      eduDetail: "Department of Informatics (IFI). Learn to build effective, secure, high-quality programs and medium-sized data systems, and to work both independently and in teams.",
      eduLink: "Programme page ↗",
      curriculumTitle: "The degree, semester by semester",
      curriculumSub: "What the programme covers, straight from the UiO study plan.",
      semester: "Semester {n}", chooseOne: "Choose one:",
      sem5: "Development semester: exchange, electives or self-directed study.",
      sem6: "One specialisation course (10 ECTS) plus free electives.",
      contactKicker: "05 / Contact", contactTitle: "Let's work together",
      contactLead: "I'm open to internships and part-time roles in software development. Send me a message below, or reach me directly.",
      copyEmail: "Copy email",
      copyOk: "Email address copied to clipboard.",
      copyFail: "Copy failed. My email is {email}",
      footerSource: "View source on GitHub",
    },
    no: {
      metaTitle: "Henning Trillhus – Informatikkstudent og utvikler",
      metaDesc: "Portefølje for Henning Trillhus, informatikkstudent ved Universitetet i Oslo som lager nettapper og spill.",
      ogDesc: "Nettapper, spill og sideprosjekter av en informatikkstudent ved Universitetet i Oslo.",
      skip: "Gå til innhold",
      brandLabel: "Henning Trillhus, tilbake til toppen",
      navLabel: "Hovedmeny",
      navAbout: "Om meg", navProjects: "Prosjekter", navSkills: "Ferdigheter", navEducation: "Utdanning", navContact: "Kontakt",
      langSwitch: "Switch to English",
      themeToLight: "Bytt til lyst tema", themeToDark: "Bytt til mørkt tema",
      menuOpen: "Åpne meny", menuClose: "Lukk meny",
      badge: "Åpen for internship og deltidsjobber",
      heroTitle1: "Hei, jeg er Henning.",
      heroTitle2: "Jeg lager nettapper og spill.",
      heroLead: "Jeg studerer Informatikk: programmering og systemarkitektur ved Universitetet i Oslo. Jeg har programmert siden barneskolen og liker å gjøre ideer om til fungerende programvare.",
      ctaWork: "Se prosjektene mine", ctaContact: "Ta kontakt", ctaCv: "Last ned CV",
      profiles: "Profiler", email: "E-post",
      codeLabel: "En kort oppsummering av Henning som kode",
      statsLabel: "GitHub i tall",
      statProjects: "Prosjekter", statHand: "Håndkodet", statLanguages: "Språk", statDemos: "Live-demoer",
      aboutKicker: "01 / Om meg", aboutTitle: "Litt om meg",
      about1: "Jeg begynte å programmere på barneskolen og gikk videre til HTML og JavaScript. Siden har jeg for det meste lært meg ting selv, og i dag lager jeg nettapper og spill med blant annet Svelte, TypeScript, C# og Unity.",
      about2: "I dag tar jeg en bachelorgrad i <strong>Informatikk: programmering og systemarkitektur</strong> ved Universitetet i Oslo. Studiet gir meg teorien, og mine egne prosjekter er stedet jeg bruker den i praksis.",
      about3: "Det jeg liker best er å gjøre en idé om til noe folk faktisk kan bruke, som en oppskriftsapp, et verktøy for kollokvier eller et spill. Jeg leter etter <strong>internship og deltidsjobber</strong> innen programvareutvikling, der jeg kan lære av erfarne utviklere og bidra fra dag én.",
      factStudying: "Studerer", factStudyingValue: "Informatikk: programmering og systemarkitektur",
      factDegree: "Grad", factDegreeValue: "Bachelor, 3 år (180 studiepoeng)",
      factUniversity: "Universitet", factUniversityValue: "Universitetet i Oslo, Institutt for informatikk",
      factBased: "Bor i", factBasedValue: "Oslo, Norge",
      factLooking: "Søker", factLookingValue: "Internship og deltidsjobber",
      factLanguages: "Språk", factLanguagesValue: "Norsk, engelsk",
      projectsKicker: "02 / Prosjekter", projectsTitle: "Ting jeg har bygget",
      projectsSub: "Alt jeg har bygget, med et tydelig skille mellom det jeg har kodet selv og det jeg har bygget med KI (vibekoding). Nyeste først, hentet direkte fra <a href=\"https://github.com/HenningTrillhus\" target=\"_blank\" rel=\"noopener\">GitHub-profilen min</a>, pluss eldre prosjekter fra <a href=\"https://github.com/HenningT05\" target=\"_blank\" rel=\"noopener\">min tidligere konto</a>.",
      loading: "Laster prosjekter…", noProjects: "Prosjekter kommer snart.",
      handTitle: "Håndkodet", handDesc: "Skrevet av meg selv, linje for linje.",
      vibeTitle: "Vibekodet", vibeDesc: "Laget ved å beskrive for en KI hva jeg vil ha, og styre resultatet. Raskt for prototyping, og jeg er åpen om at KI skrev det meste av koden.",
      otherTitle: "Flere prosjekter", otherDesc: "Flere prosjekter fra GitHub-profilen min.",
      badgeHand: "Håndkodet", badgeVibe: "Vibekodet", preAi: "Før KI · videregående", preAiNote: "Før KI-verktøy for koding",
      createdIn: "Opprettet {month}",
      journeyTitle: "Slik kom jeg hit", journeySub: "Jeg har laget nettsider siden jeg var liten. Omtrent slik gikk det:",
      j1When: "~2018", j1Where: "7. klasse, barneskolen", j1Title: "Scratch", j1Text: "Startet med programmering i Scratch, et blokkbasert språk. Her begynte interessen min for utvikling.",
      j2When: "~2020", j2Where: "Ungdomsskolen", j2Title: "HTML og JavaScript", j2Text: "Gikk videre til å skrive ekte kode. I 2020 lagde jeg WorkoutLab (workoutlab.no), en treningsnettside, helt selvlært i HTML, CSS og JavaScript.",
      j3When: "~2023", j3Where: "Å gå dypere", j3Title: "Python, Node.js, JavaScript og Svelte", j3Text: "Gikk dypere og lagde hele prosjekter, blant annet de sosiale plattformene TheChatHive og MatchMetrix.",
      j4When: "Nå", j4Where: "Universitetet i Oslo", j4Title: "Informatikk ved UiO", j4Text: "Studerer programmering og systemarkitektur, og bygger med C#, Unity, TypeScript og KI-assisterte verktøy.",
      preAiShort: "Før KI", offline: "Nede",
      backToProjects: "Tilbake til prosjektene",
      pvLoading: "Laster README fra GitHub…",
      pvError: "Kunne ikke laste README akkurat nå.",
      pvGitHub: "Se på GitHub ↗",
      pvFrom: "README hentet direkte fra GitHub.",
      milWhen: "2025 – 2026",
      milTitle: "Pause fra utviklingen: militærtjeneste",
      milDetail: "Jeg tjenestegjorde i Cyberforsvaret, og det ga meg en pause i utviklingen min.",
      footerTag: "Informatikkstudent i Oslo som lager nettapper og spill.",
      hsWhen: "Videregående",
      hsTitle: "Vika videregående skole",
      hsDetail: "Realfag med IT2, R2 og fysikk 2.",
      formName: "Navn",
      formEmail: "E-post",
      formMessage: "Melding",
      formSend: "Send melding",
      formSending: "Sender…",
      formOk: "Takk! Meldingen er sendt. Jeg svarer så snart jeg kan.",
      formErr: "Noe gikk galt. Prøv igjen, eller send meg en e-post direkte.",
      formOr: "Eller ta kontakt direkte",
      formNote: "Sendes som e-post via Web3Forms.",
      formConsent: "Jeg samtykker til at navn, e-postadresse og melding brukes til å svare meg, og at de behandles slik det står i <a href=\"privacy.html\" target=\"_blank\" rel=\"noopener\">personvernerklæringen</a>.",
      privacyLink: "Personvernerklæring",
      liveDemo: "Live-demo ↗", code: "Kode", project: "Prosjekt",
      descLang: "Et {lang}-prosjekt.", descGeneric: "Et personlig prosjekt.",
      skillsKicker: "03 / Ferdigheter", skillsTitle: "Det jeg jobber med",
      skillsLanguages: "Programmeringsspråk", skillsTools: "Verktøy og plattformer", skillsDegree: "Dekkes av studiet mitt", skillsSpoken: "Språk jeg snakker",
      topicOop: "Objektorientert programmering", topicAlgo: "Algoritmer og datastrukturer", topicDb: "Databaser og datamodellering",
      topicSe: "Systemutvikling", topicSec: "Informasjonssikkerhet", topicOs: "Operativsystemer og datakommunikasjon", topicLogic: "Logikk og kompleksitet",
      langNorwegian: "Norsk", langEnglish: "Engelsk",
      eduKicker: "04 / Utdanning og bakgrunn", eduTitle: "Bakgrunnen min",
      eduWhen: "Pågår",
      eduDegree: "Bachelor i Informatikk: programmering og systemarkitektur, Universitetet i Oslo",
      eduDetail: "Institutt for informatikk (IFI). Lær å lage effektive, sikre og gode programmer og mellomstore datasystemer, og å jobbe både selvstendig og i team.",
      eduLink: "Studieprogramsiden ↗",
      curriculumTitle: "Studiet, semester for semester",
      curriculumSub: "Det studieprogrammet dekker, hentet fra UiOs studieplan.",
      semester: "Semester {n}", chooseOne: "Velg ett:",
      sem5: "Utviklingssemester: utveksling, valgemner eller selvstyrt studium.",
      sem6: "Ett spesialiseringsemne (10 studiepoeng) pluss frie valgemner.",
      contactKicker: "05 / Kontakt", contactTitle: "La oss jobbe sammen",
      contactLead: "Jeg er åpen for internship og deltidsjobber innen programvareutvikling. Send meg en melding under, eller ta kontakt direkte.",
      copyEmail: "Kopier e-post",
      copyOk: "E-postadressen er kopiert.",
      copyFail: "Kopiering feilet. E-posten min er {email}",
      footerSource: "Se kildekoden på GitHub",
    },
  };


  // Courses in the study plan (uio.no/studier/program/informatikk-programmering/oppbygging/).
  // Add the codes of courses you have finished, e.g. ["IN1000", "IN1020"], to mark them with a tick.
  const COMPLETED_COURSES = [];
  const course = (code, en, no) => ({ code, en, no });
  const CURRICULUM = [
    { sem: 1, courses: [
      course("IN1000", "Introduction to Object-oriented Programming", "Introduksjon til objektorientert programmering"),
      course("IN1020", "Introduction to Computer Technology", "Introduksjon til datateknologi"),
      course("EXPHIL03", "Examen philosophicum", "Examen philosophicum"),
    ] },
    { sem: 2, courses: [
      course("IN1010", "Object-oriented Programming", "Objektorientert programmering"),
      course("IN1030", "Systems, Requirements and Consequences", "Systemer, krav og konsekvenser"),
      course("IN1150", "Logical Methods", "Logiske metoder"),
    ] },
    { sem: 3, courses: [
      course("IN2010", "Algorithms and Data Structures", "Algoritmer og datastrukturer"),
      course("IN2120", "Information Security", "Informasjonssikkerhet"),
      course("IN2090", "Databases and Data Modelling", "Databaser og datamodellering"),
    ] },
    { sem: 4, courses: [
      course("IN2000", "Software Engineering with Project Work", "Software Engineering med prosjektarbeid"),
    ], oneOf: [
      course("IN2080", "Computation and Complexity", "Beregninger og kompleksitet"),
      course("IN2100", "Logic for Distributed Systems", "Logikk for distribuerte systemer"),
      course("IN2140", "Introduction to Operating Systems and Data Communication", "Introduksjon til operativsystemer og datakommunikasjon"),
    ] },
    { sem: 5, noteKey: "sem5" },
    { sem: 6, noteKey: "sem6" },
  ];

  // Used only if GitHub can't be reached and nothing is cached.
  const FALLBACK_REPOS = [
    { name: "Kollokvie-IFI", language: "TypeScript", homepage: "https://kollokvie-ifi.vercel.app", created_at: "2026-09-18T00:00:00Z" },
    { name: "My-Munch", language: "TypeScript", homepage: "https://my-munch.vercel.app", created_at: "2026-08-20T00:00:00Z" },
    { name: "Zeptrico", language: "ShaderLab", homepage: "", created_at: "2026-06-10T00:00:00Z" },
    { name: "Deepvein", language: "C#", homepage: "", created_at: "2026-09-29T00:00:00Z" },
    { name: "3D-Shooter", language: "ShaderLab", homepage: "", created_at: "2026-09-22T00:00:00Z" },
    { name: "Game-Of-Life-Conway", language: "Python", homepage: "", created_at: "2026-09-16T00:00:00Z" },
    { name: "Min-Munch", language: "JavaScript", homepage: "https://min-munch.vercel.app", created_at: "2026-07-27T00:00:00Z" },
    { name: "Leilighet-Designer-", language: "JavaScript", homepage: "", created_at: "2026-07-26T00:00:00Z" },
    { name: "UnityRPG", language: "C#", homepage: "", created_at: "2026-02-12T00:00:00Z" },
    { name: "first-project", language: "HTML", homepage: "", created_at: "2026-01-07T00:00:00Z" },
  ].map((r) => ({ ...r, html_url: `https://github.com/${GITHUB_USER}/${r.name}` }));

  const CACHE_KEY = "portfolio-repos-v2";
  const CACHE_MS = 60 * 60 * 1000;

  const LANG_COLORS = {
    "C#": "#178600",
    TypeScript: "#3178c6",
    JavaScript: "#e6c619",
    Python: "#3572a5",
    HTML: "#e34c26",
    CSS: "#7c5bd6",
    ShaderLab: "#8b6fe0",
    Svelte: "#ff3e00",
  };
  const langColor = (lang) => LANG_COLORS[lang] || "#8b8b98";

  /* ---------- Helpers ---------- */
  const root = document.documentElement;
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, props = {}, ...children) {
    const node = Object.assign(document.createElement(tag), props);
    node.append(...children);
    return node;
  }

  function safeUrl(value) {
    if (!value) return null;
    try {
      const url = new URL(value);
      return url.protocol === "https:" || url.protocol === "http:" ? url.href : null;
    } catch {
      return null;
    }
  }

  /* ---------- Language ---------- */
  let lang = root.dataset.lang === "no" ? "no" : "en";

  function t(key, vars = {}) {
    const text = (I18N[lang] && I18N[lang][key]) ?? I18N.en[key] ?? key;
    return text.replace(/\{(\w+)\}/g, (_, name) => vars[name] ?? "");
  }

  const monthYear = (iso) =>
    new Date(iso).toLocaleDateString(lang === "no" ? "nb-NO" : "en-US", { month: "short", year: "numeric", timeZone: "UTC" });

  const monthName = (iso) =>
    new Date(iso).toLocaleDateString(lang === "no" ? "nb-NO" : "en-US", { month: "short", timeZone: "UTC" });

  function translatePage() {
    document.querySelectorAll("[data-i18n]").forEach((n) => { n.textContent = t(n.dataset.i18n); });
    document.querySelectorAll("[data-i18n-html]").forEach((n) => { n.innerHTML = t(n.dataset.i18nHtml); });
    document.querySelectorAll("[data-i18n-attr]").forEach((n) => {
      n.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        n.setAttribute(attr.trim(), t(key.trim()));
      });
    });
    document.title = t("metaTitle");
    $('meta[name="description"]').content = t("metaDesc");
    $('meta[property="og:title"]').content = t("metaTitle");
    $('meta[property="og:description"]').content = t("ogDesc");
  }

  /* ---------- Theme ---------- */
  const themeBtn = $("#theme-toggle");
  const media = matchMedia("(prefers-color-scheme: dark)");
  let hasSavedTheme = false;
  try { hasSavedTheme = !!localStorage.getItem("theme"); } catch { /* storage blocked */ }

  function applyTheme(theme) {
    root.dataset.theme = theme;
    themeBtn.setAttribute("aria-label", t(theme === "dark" ? "themeToLight" : "themeToDark"));
  }

  themeBtn.addEventListener("click", () => {
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
    hasSavedTheme = true;
    try { localStorage.setItem("theme", next); } catch { /* storage blocked */ }
  });
  media.addEventListener("change", (e) => {
    if (!hasSavedTheme) applyTheme(e.matches ? "dark" : "light");
  });

  /* ---------- Mobile menu ---------- */
  const navBtn = $("#nav-toggle");
  const nav = $("#site-nav");

  function setMenu(open) {
    nav.classList.toggle("open", open);
    navBtn.setAttribute("aria-expanded", String(open));
    navBtn.setAttribute("aria-label", t(open ? "menuClose" : "menuOpen"));
  }
  navBtn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  nav.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) { setMenu(false); navBtn.focus(); }
  });
  matchMedia("(min-width: 48.01rem)").addEventListener("change", (e) => { if (e.matches) setMenu(false); });

  /* ---------- Reveal on scroll ---------- */
  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" })
    : null;

  function observeReveals(scope = document) {
    scope.querySelectorAll(".reveal:not(.in)").forEach((node) => {
      if (revealObserver) revealObserver.observe(node);
      else node.classList.add("in");
    });
  }

  /* ---------- Active nav link ---------- */
  if ("IntersectionObserver" in window) {
    const links = new Map([...nav.querySelectorAll("a")].map((a) => [a.getAttribute("href").slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const link = links.get(entry.target.id);
        if (link && entry.isIntersecting) {
          links.forEach((a) => a.removeAttribute("aria-current"));
          link.setAttribute("aria-current", "true");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    links.forEach((_, id) => { const s = document.getElementById(id); if (s) spy.observe(s); });
  }

  /* ---------- Scroll progress ---------- */
  const progress = $("#progress");
  let progressQueued = false;
  function updateProgress() {
    const max = root.scrollHeight - innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(scrollY / max, 1) : 0})`;
    progressQueued = false;
  }
  addEventListener("scroll", () => {
    if (!progressQueued) { progressQueued = true; requestAnimationFrame(updateProgress); }
  }, { passive: true });
  addEventListener("resize", updateProgress);

  /* ---------- Copy email ---------- */
  const copyBtn = $("#copy-email");
  const copyStatus = $("#copy-status");
  let copyTimer;
  copyBtn.addEventListener("click", async () => {
    const email = copyBtn.dataset.email;
    let ok = false;
    try {
      await navigator.clipboard.writeText(email);
      ok = true;
    } catch {
      const ta = el("textarea", { value: email });
      ta.style.cssText = "position:fixed;opacity:0";
      document.body.append(ta);
      ta.select();
      try { ok = document.execCommand("copy"); } catch { /* ignore */ }
      ta.remove();
    }
    copyStatus.textContent = ok ? t("copyOk") : t("copyFail", { email });
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => { copyStatus.textContent = ""; }, 3000);
  });

  $("#year").textContent = new Date().getFullYear();

  /* ---------- Contact form (Web3Forms) ---------- */
  const formWrap = $("#contact-form-wrap");
  const form = $("#contact-form");
  const formStatus = $("#form-status");
  const sendBtn = $("#form-send");
  formWrap.hidden = !WEB3FORMS_ACCESS_KEY;

  function setFormStatus(key, kind) {
    formStatus.dataset.key = key || "";
    formStatus.textContent = key ? t(key) : "";
    formStatus.classList.remove("is-ok", "is-error");
    if (kind) formStatus.classList.add(`is-${kind}`);
  }

  function refreshFormText() {
    if (formStatus.dataset.key) formStatus.textContent = t(formStatus.dataset.key);
    if (!sendBtn.disabled) sendBtn.textContent = t("formSend");
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (sendBtn.disabled || !WEB3FORMS_ACCESS_KEY) return;
    const data = Object.fromEntries(new FormData(form));
    if (data.botcheck) return; // honeypot: real visitors never tick this hidden box
    delete data.botcheck;

    sendBtn.disabled = true;
    sendBtn.textContent = t("formSending");
    setFormStatus("", "");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: "New message from henningtrillhus.no",
          from_name: "Portfolio contact form",
          ...data,
        }),
      });
      const result = await res.json().catch(() => ({}));
      if (!res.ok || !result.success) throw new Error(result.message || `Web3Forms responded ${res.status}`);
      form.reset();
      setFormStatus("formOk", "ok");
    } catch (err) {
      console.warn("Contact form failed:", err);
      setFormStatus("formErr", "error");
    } finally {
      sendBtn.disabled = false;
      sendBtn.textContent = t("formSend");
    }
  });

  /* ---------- Projects ---------- */
  const timelineEl = $("#project-timeline");
  let projects = [];

  function normalise(list) {
    const fromGitHub = list
      .filter((r) => !r.fork && !r.archived && !HIDDEN_REPOS.includes(r.name))
      .map((r) => ({
        name: r.name,
        html_url: safeUrl(r.html_url) || `https://github.com/${GITHUB_USER}/${encodeURIComponent(r.name)}`,
        rawDescription: (r.description || "").trim(),
        language: r.language || null,
        homepage: safeUrl(r.homepage),
        created: r.created_at || r.pushed_at,
        stars: r.stargazers_count || 0,
        made: VIBE_CODED.includes(r.name) ? "vibe" : HAND_CODED.includes(r.name) ? "hand" : "other",
        preAi: false,
      }));
    const older = OLDER_PROJECTS.map((p) => ({ ...p, rawDescription: "", stars: 0 }));
    return [...fromGitHub, ...older].sort((a, b) => new Date(b.created) - new Date(a.created));
  }

  function describe(project) {
    const custom = DESCRIPTIONS[project.name];
    if (custom && custom[lang]) return custom[lang];
    if (project.rawDescription) return project.rawDescription;
    return project.language ? t("descLang", { lang: project.language }) : t("descGeneric");
  }

  function repoRef(project) {
    const m = /^https:\/\/github\.com\/([^/]+)\/([^/]+?)\/?$/.exec(project.html_url || "");
    return m ? { owner: m[1], repo: m[2] } : null;
  }

  function card(project) {
    const ref = repoRef(project);
    const tags = el("div", { className: "card-tags" });
    if (project.made === "hand" || project.made === "vibe") {
      tags.append(el("span", { className: "tag made" }, t(project.made === "vibe" ? "badgeVibe" : "badgeHand")));
    }
    if (project.preAi) tags.append(el("span", { className: "tag made" }, t(project.preAiLabel || "preAi")));
    if (project.offline) tags.append(el("span", { className: "tag made" }, t("offline")));

    const top = el("div", { className: "card-top" },
      el("span", { className: "card-lang" }, project.languageLabel || project.language || t("project")), tags);

    let title;
    if (ref) {
      // Opens the project page on this site (or GitHub directly if the repo has no README).
      const link = el("a", { href: `#/p/${ref.owner}/${ref.repo}` }, project.name);
      link.dataset.owner = ref.owner;
      link.dataset.repo = ref.repo;
      link.dataset.gh = project.html_url;
      title = el("h3", {}, link);
    } else {
      title = el("h3", {}, project.name);
    }
    const desc = el("p", { className: "card-desc" }, describe(project));

    const foot = el("div", { className: "card-foot" });
    if (project.homepage) {
      foot.append(el("a", { href: project.homepage, target: "_blank", rel: "noopener" }, t("liveDemo")));
    }
    if (ref) foot.append(el("a", { href: project.html_url, target: "_blank", rel: "noopener" }, t("code")));
    if (project.stars) foot.append(el("span", {}, `★ ${project.stars}`));
    const when = project.noMonth
      ? String(new Date(project.created).getUTCFullYear())
      : t("createdIn", { month: monthName(project.created) });
    foot.append(el("span", { className: "updated" }, when));

    const node = el("article", { className: "card reveal" }, top, title, desc, foot);
    node.style.setProperty("--lang", langColor(project.language));
    return node;
  }

  function renderProjects() {
    const groups = [
      ["hand", "handTitle", "handDesc"],
      ["vibe", "vibeTitle", "vibeDesc"],
      ["other", "otherTitle", "otherDesc"],
    ];
    const sections = groups.map(([made, titleKey, descKey]) => {
      const items = projects.filter((p) => p.made === made);
      if (!items.length) return null;

      const byYear = new Map();
      items.forEach((p) => {
        const year = new Date(p.created).getUTCFullYear();
        if (!byYear.has(year)) byYear.set(year, []);
        byYear.get(year).push(p);
      });

      const timeline = el("ol", { className: "ptl" }, ...[...byYear.entries()].sort((a, b) => b[0] - a[0]).map(([year, list]) => {
        const head = el("div", { className: "year-head" }, el("span", { className: "year-label" }, String(year)));
        if (list.every((p) => p.preAi)) head.append(el("span", { className: "year-note" }, t("preAiNote")));
        return el("li", { className: "year-block" }, head, el("div", { className: "ptl-cards" }, ...list.map(card)));
      }));

      const head = el("header", { className: "group-head" },
        el("h3", {}, t(titleKey)),
        el("span", { className: "group-count" }, String(items.length)),
        el("p", {}, t(descKey)));
      const section = el("section", { className: "proj-group" }, head, timeline);
      section.dataset.made = made;
      return section;
    }).filter(Boolean);

    timelineEl.replaceChildren(...sections);
    observeReveals(timelineEl);
  }

  function countUp(node, target, animate) {
    if (!animate || reduceMotion || document.hidden || target === 0) { node.textContent = String(target); return; }
    const start = performance.now();
    const duration = 900;
    const step = (now) => {
      const p = Math.min((now - start) / duration, 1);
      node.textContent = String(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  function renderStats(animate = false) {
    const languages = new Set(projects.map((p) => p.language).filter(Boolean));
    const num = (key, value) => { const n = $(`[data-stat="${key}"]`); if (n) countUp(n, value, animate); };
    num("projects", projects.length);
    num("hand", projects.filter((p) => p.made === "hand").length);
    num("languages", languages.size);
    num("demos", projects.filter((p) => p.homepage).length);
  }

  function readCache() {
    try {
      const cached = JSON.parse(localStorage.getItem(CACHE_KEY));
      if (cached && Array.isArray(cached.repos)) return cached;
    } catch { /* no cache */ }
    return null;
  }

  async function fetchRepos() {
    const cached = readCache();
    if (cached && Date.now() - cached.time < CACHE_MS) return cached.repos;
    try {
      const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=pushed`, {
        headers: { Accept: "application/vnd.github+json" },
      });
      if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
      const data = await res.json();
      try { localStorage.setItem(CACHE_KEY, JSON.stringify({ time: Date.now(), repos: data })); } catch { /* storage blocked */ }
      return data;
    } catch (err) {
      console.warn("Could not load repos from GitHub:", err);
      return cached ? cached.repos : FALLBACK_REPOS;
    }
  }

  async function loadProjects() {
    projects = normalise(await fetchRepos());
    renderStats(true);
    renderProjects();
    if (current) { renderProjectView(); renderReadme(); }
  }

  /* ---------- Project pages: README from GitHub, shown at #/p/owner/repo ---------- */
  const ALLOWED_OWNERS = ["henningtrillhus", "henningt05"];
  const ROUTE = /^#\/p\/([\w.-]+)\/([\w.-]+)$/;
  const homeEl = $("#home");
  const viewEl = $("#project-view");
  const pvHead = $("#pv-head");
  const pvReadme = $("#pv-readme");
  const pvBack = $("#pv-back");
  const readmeCache = new Map();
  let current = null;
  let cameFromHome = false;

  const ALLOWED_TAGS = new Set(["A", "ABBR", "B", "BLOCKQUOTE", "BR", "CODE", "DD", "DEL", "DETAILS", "DIV", "DL", "DT", "EM",
    "H1", "H2", "H3", "H4", "H5", "H6", "HR", "I", "INS", "KBD", "LI", "OL", "P", "PRE", "Q", "S", "SPAN", "STRONG", "SUB",
    "SUMMARY", "SUP", "TABLE", "TBODY", "TD", "TFOOT", "TH", "THEAD", "TR", "UL"]);
  const DROP_TAGS = new Set(["SCRIPT", "STYLE", "IFRAME", "OBJECT", "EMBED", "FORM", "SVG", "LINK", "META", "NOSCRIPT", "TEMPLATE",
    "BUTTON", "TEXTAREA", "SELECT", "VIDEO", "AUDIO", "CANVAS", "MATH", "BASE", "SOURCE", "SLOT", "CLIPBOARD-COPY"]);

  function findProject(owner, repo) {
    return projects.find((p) => {
      const r = repoRef(p);
      return r && r.owner.toLowerCase() === owner.toLowerCase() && r.repo.toLowerCase() === repo.toLowerCase();
    });
  }

  const githubUrlFor = (owner, repo) => (findProject(owner, repo) || {}).html_url || `https://github.com/${owner}/${repo}`;

  async function getReadme(owner, repo) {
    const key = `${owner}/${repo}`.toLowerCase();
    if (readmeCache.has(key)) return readmeCache.get(key);
    try {
      const saved = JSON.parse(sessionStorage.getItem(`readme:${key}`));
      if (saved && saved.status) { readmeCache.set(key, saved); return saved; }
    } catch { /* nothing cached */ }

    let result;
    try {
      const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/readme`, {
        headers: { Accept: "application/vnd.github.html+json" },
      });
      if (res.status === 404) result = { status: "none" };
      else if (!res.ok) return { status: "error" };
      else result = { status: "ok", html: await res.text() };
    } catch {
      return { status: "error" };
    }
    readmeCache.set(key, result);
    try { sessionStorage.setItem(`readme:${key}`, JSON.stringify(result)); } catch { /* storage full or blocked */ }
    return result;
  }

  // GitHub already sanitises its README HTML; this rebuilds it from an allow-list anyway, so nothing unexpected
  // (scripts, inline styles, event handlers, odd URL schemes) can end up on this page.
  function sanitizeReadme(html, owner, repo) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    const blobBase = `https://github.com/${owner}/${repo}/blob/HEAD/`;
    const rawBase = `https://github.com/${owner}/${repo}/raw/HEAD/`;
    const out = document.createDocumentFragment();

    const resolve = (value, base, protocols) => {
      try {
        const url = new URL(value, base);
        return protocols.includes(url.protocol) ? url.href : null;
      } catch {
        return null;
      }
    };
    const numeric = (node, copy, names, pattern) => {
      names.forEach((name) => {
        const v = node.getAttribute(name);
        if (v && pattern.test(v)) copy.setAttribute(name, v);
      });
    };

    function walk(from, into) {
      from.childNodes.forEach((node) => {
        if (node.nodeType === 3) { into.append(document.createTextNode(node.nodeValue)); return; }
        if (node.nodeType !== 1) return;
        const tag = node.nodeName.toUpperCase();
        if (DROP_TAGS.has(tag)) return;

        if (tag === "INPUT") {
          if (node.type === "checkbox") into.append(document.createTextNode(node.checked ? "\u2611 " : "\u2610 "));
          return;
        }
        if (tag === "A" && node.classList.contains("anchor")) return;

        if (tag === "IMG") {
          const src = resolve(node.getAttribute("src") || "", rawBase, ["https:", "http:"]);
          if (!src) return;
          const img = el("img", { src, alt: node.getAttribute("alt") || "", loading: "lazy", decoding: "async" });
          img.referrerPolicy = "no-referrer";
          numeric(node, img, ["width", "height"], /^\d{1,4}%?$/);
          into.append(img);
          return;
        }

        if (!ALLOWED_TAGS.has(tag)) { walk(node, into); return; }

        const heading = /^H([1-6])$/.exec(tag);
        const copy = document.createElement(heading ? `h${Math.min(6, Number(heading[1]) + 1)}` : tag.toLowerCase());
        if (heading) {
          const anchor = node.parentElement && node.parentElement.querySelector(":scope > a.anchor[id]");
          if (anchor) copy.id = anchor.id;
        }
        if (tag === "A") {
          const href = node.getAttribute("href") || "";
          if (href.startsWith("#")) {
            copy.href = "#";
            copy.dataset.frag = href.slice(1);
          } else {
            const target = resolve(href, blobBase, ["https:", "http:", "mailto:"]);
            if (target) {
              copy.href = target;
              if (!target.startsWith("mailto:")) { copy.target = "_blank"; copy.rel = "noopener noreferrer"; }
            }
          }
          const title = node.getAttribute("title");
          if (title) copy.title = title;
        }
        const align = node.getAttribute("align");
        if (["left", "center", "right"].includes(align)) copy.dataset.align = align;
        if (tag === "OL") numeric(node, copy, ["start"], /^\d{1,4}$/);
        if (tag === "TD" || tag === "TH") numeric(node, copy, ["colspan", "rowspan"], /^\d{1,2}$/);
        if (tag === "DETAILS" && node.hasAttribute("open")) copy.setAttribute("open", "");

        walk(node, copy);
        into.append(copy);
      });
    }

    walk(doc.body, out);
    return out;
  }

  function renderProjectView() {
    if (!current) return;
    const { owner, repo } = current;
    const project = findProject(owner, repo);
    const name = project ? project.name : repo;
    const ghUrl = githubUrlFor(owner, repo);

    const tags = el("div", { className: "pv-tags" });
    if (project && (project.made === "hand" || project.made === "vibe")) {
      const tag = el("span", { className: "tag made" }, t(project.made === "vibe" ? "badgeVibe" : "badgeHand"));
      tag.dataset.made = project.made;
      tags.append(tag);
    }
    if (project && project.preAi) tags.append(el("span", { className: "tag made" }, t(project.preAiLabel || "preAi")));
    if (project && project.language) {
      const langTag = el("span", { className: "card-lang" }, project.language);
      langTag.style.setProperty("--lang", langColor(project.language));
      tags.append(langTag);
    }

    const links = el("div", { className: "pv-links" },
      el("a", { className: "btn primary", href: ghUrl, target: "_blank", rel: "noopener" }, t("pvGitHub")));
    if (project && project.homepage) {
      links.append(el("a", { className: "btn", href: project.homepage, target: "_blank", rel: "noopener" }, t("liveDemo")));
    }

    pvHead.replaceChildren(tags, el("h1", {}, name),
      ...(project ? [el("p", { className: "pv-desc" }, describe(project))] : []), links);
    document.title = `${name} – Henning Trillhus`;
  }

  function renderReadme() {
    if (!current || !current.readme) return;
    const { owner, repo, readme } = current;
    const ghUrl = githubUrlFor(owner, repo);
    if (readme.status === "ok") {
      pvReadme.replaceChildren(
        sanitizeReadme(readme.html, owner, repo),
        el("p", { className: "readme-note" }, `${t("pvFrom")} `, el("a", { href: ghUrl, target: "_blank", rel: "noopener" }, t("pvGitHub"))));
    } else {
      pvReadme.replaceChildren(el("div", { className: "readme-error" },
        el("p", {}, t("pvError")),
        el("a", { className: "btn primary", href: ghUrl, target: "_blank", rel: "noopener" }, t("pvGitHub"))));
    }
  }

  async function showProject(owner, repo) {
    if (!ALLOWED_OWNERS.includes(owner.toLowerCase())) {
      history.replaceState(null, "", location.pathname + location.search);
      showHome();
      return;
    }
    if (!homeEl.hidden) {
      homeEl.hidden = true;
      viewEl.hidden = false;
      setMenu(false);
      scrollTo({ top: 0, behavior: "instant" });
    }
    const token = { owner, repo, readme: null };
    current = token;
    renderProjectView();
    pvReadme.replaceChildren(el("p", { className: "muted" }, t("pvLoading")));

    const result = await getReadme(owner, repo);
    if (current !== token) return;
    if (result.status === "none") {
      // No README: skip our page and go straight to the repository on GitHub.
      history.replaceState(null, "", location.pathname + location.search);
      location.replace(githubUrlFor(owner, repo));
      return;
    }
    token.readme = result;
    renderReadme();
  }

  function showHome() {
    current = null;
    cameFromHome = false;
    if (viewEl.hidden) return;
    viewEl.hidden = true;
    homeEl.hidden = false;
    document.title = t("metaTitle");
    const saved = history.state && typeof history.state.scroll === "number" ? history.state.scroll : null;
    const target = location.hash.length > 1 ? document.getElementById(location.hash.slice(1)) : null;
    if (saved !== null) scrollTo({ top: saved, behavior: "instant" });
    else if (target) target.scrollIntoView();
    else scrollTo({ top: 0, behavior: "instant" });
  }

  function route() {
    const match = ROUTE.exec(location.hash);
    if (match) showProject(match[1], match[2]);
    else showHome();
  }

  async function openProject(link) {
    const { owner, repo, gh } = link.dataset;
    const cardEl = link.closest(".card");
    if (cardEl && cardEl.classList.contains("busy")) return;
    if (cardEl) cardEl.classList.add("busy");
    const result = await getReadme(owner, repo);
    if (cardEl) cardEl.classList.remove("busy");
    if (result.status === "none") { location.href = gh; return; }
    history.replaceState({ ...(history.state || {}), scroll: scrollY }, "");
    cameFromHome = true;
    location.hash = `#/p/${owner}/${repo}`;
  }

  timelineEl.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-repo]");
    if (!link || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    openProject(link);
  });

  pvBack.addEventListener("click", (e) => {
    if (cameFromHome) { e.preventDefault(); history.back(); }
  });

  // README links that point inside the README itself (#some-heading) scroll within this page.
  pvReadme.addEventListener("click", (e) => {
    const link = e.target.closest("a[data-frag]");
    if (!link) return;
    e.preventDefault();
    let frag = link.dataset.frag;
    try { frag = decodeURIComponent(frag); } catch { /* keep as is */ }
    const target = pvReadme.querySelector(`[id="${CSS.escape(`user-content-${frag}`)}"]`);
    if (target) target.scrollIntoView();
  });

  /* ---------- Curriculum ---------- */
  const curriculumEl = $("#curriculum");

  function courseItem(c) {
    const done = COMPLETED_COURSES.includes(c.code);
    const code = c.code.startsWith("IN")
      ? el("a", { className: "course-code", href: `https://www.uio.no/studier/emner/matnat/ifi/${c.code}/`, target: "_blank", rel: "noopener" }, c.code)
      : el("span", { className: "course-code" }, c.code);
    const li = el("li", { className: done ? "done" : "" }, code, el("span", { className: "course-name" }, c[lang]));
    if (done) li.prepend(el("span", { className: "tick", "aria-hidden": "true" }, "\u2713 "));
    return li;
  }

  function renderCurriculum() {
    curriculumEl.replaceChildren(...CURRICULUM.map((s) => {
      const box = el("article", { className: "sem reveal" }, el("h4", {}, t("semester", { n: s.sem })));
      if (s.noteKey) box.append(el("p", { className: "sem-note" }, t(s.noteKey)));
      if (s.courses) box.append(el("ul", {}, ...s.courses.map(courseItem)));
      if (s.oneOf) {
        box.append(el("p", { className: "sem-note" }, t("chooseOne")));
        box.append(el("ul", {}, ...s.oneOf.map(courseItem)));
      }
      return box;
    }));
    observeReveals(curriculumEl);
  }

  /* ---------- Apply language everywhere (static text + dynamic content) ---------- */
  function setLanguage(next, persist) {
    lang = next;
    root.dataset.lang = next;
    root.lang = next === "no" ? "nb" : "en";
    translatePage();
    applyTheme(root.dataset.theme);
    setMenu(nav.classList.contains("open"));
    $("#lang-toggle").setAttribute("aria-label", t("langSwitch"));
    $("#lang-toggle").setAttribute("lang", next === "no" ? "en" : "nb");
    renderCurriculum();
    refreshFormText();
    if (projects.length) {
      renderStats(false);
      renderProjects();
    }
    if (current) { renderProjectView(); renderReadme(); }
    if (persist) {
      try { localStorage.setItem("lang", next); } catch { /* storage blocked */ }
    }
  }

  $("#lang-toggle").addEventListener("click", () => setLanguage(lang === "en" ? "no" : "en", true));

  setLanguage(lang, false);
  observeReveals();
  updateProgress();
  route();
  addEventListener("hashchange", route);
  loadProjects();
})();
