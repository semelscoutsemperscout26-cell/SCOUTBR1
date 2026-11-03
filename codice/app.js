/* ==========================================================================
   CONFIGURAZIONE UFFICIALE CONTATTI — GRUPPO SCOUT AGESCI BRANCALEONE 1
   ========================================================================== */
const CONFIG_CONTATTI = {
  whatsappBranco: "393486533309", // +39 348 653 3309 (Branco Lupetti)
  whatsappReparto: "393332547995", // +39 333 254 7995 (Reparto E/G)
  instagramUrl:
    "https://www.instagram.com/agescibrancaleone1?utm_source=ig_web_button_share_sheet&vrfl=ZDNlZDc0MzIxNw==",
  facebookUrl: "https://www.facebook.com/p/Agesci-Brancaleone-1-100078887537538/",
};

/* ==========================================================================
   DATI SEZIONE "CHI SIAMO" (4 TAB IDENTITARI CON I VALORI AUTENTICI)
   ========================================================================== */
const IDENTITY_TABS_DATA = {
  gruppo: {
    tag: "Brancaleone (RC) · Tra il mare Jonio e i boschi",
    title: "Una grande famiglia unita dal fazzolettone blu e rosso",
    body1:
      "Il <strong>Gruppo Scout AGESCI Brancaleone 1</strong> è una comunità viva di bambini, ragazzi, giovani e adulti educatori radicata nel nostro territorio. Quando incontri per le strade del paese la camicia azzurra e il nostro <strong>fazzolettone blu con le due fettucce rosse incrociate sulla punta</strong>, vedi ragazzi che scelgono la vita vera all’aria aperta invece dell’isolamento dietro uno schermo.",
    body2:
      "Nel nostro gruppo <strong>ragazzi e ragazze crescono insieme alla pari</strong> (coeducazione). Non esistono selezioni né panchine: chiunque arriva viene accolto per nome, ascoltato e aiutato a tirare fuori il meglio di sé.",
    stats: [
      { title: "8 – 21 anni", desc: "Un percorso educativo completo diviso in 3 fasce d’età" },
      { title: "100% Volontariato", desc: "Educatori adulti formati che donano tempo e passione gratuitamente" },
    ],
  },
  fede: {
    tag: "Educare alla vita cristiana · La fede si vive e si condivide",
    title: "Come i discepoli sulla strada di Emmaus",
    body1:
      "La fede non si impara soltanto: si vive, si incontra, si condivide. Non proponiamo un apprendimento del Vangelo fatto solo di nozioni da memorizzare o schede da completare: crediamo che la fede nasca e cresca nell’incontro con Gesù, dentro la vita concreta di ciascuno. Come i <strong>discepoli sulla strada di Emmaus</strong>, camminiamo insieme — capi e ragazzi — con le nostre domande, le amicizie, le gioie, le paure e i traguardi.",
    body2:
      "Rileggiamo ciò che viviamo alla luce della sua Parola e celebriamo la nostra fede nella preghiera e nei Sacramenti, partecipando insieme alla <strong>Santa Messa domenicale, alternandoci nelle due parrocchie del Comune di Brancaleone</strong>. Infine, torniamo alla nostra Gerusalemme: la famiglia, la scuola, il paese, gli amici, per essere testimoni capaci di amare e servire.",
    stats: [
      { title: "Strada di Emmaus", desc: "Riconoscere Gesù nella vita reale e quotidiana" },
      { title: "2 Parrocchie", desc: "Comunità viva inserita nel territorio di Brancaleone" },
    ],
  },
  incontri: {
    tag: "Sabato 16:00–18:00 · Messa domenicale · Uscite e Campi",
    title: "Quando ci incontriamo durante la settimana e l’anno?",
    body1:
      "Il nostro appuntamento settimanale è il <strong>sabato pomeriggio, generalmente dalle 16:00 alle 18:00 circa</strong>: il momento in cui ci ritroviamo per giocare, esplorare, imparare nuove competenze, progettare avventure e vivere esperienze che ci aiutano a crescere insieme. La <strong>domenica</strong> ci incontriamo per partecipare alla Santa Messa, alternandoci nelle due parrocchie di Brancaleone.",
    body2:
      "Periodicamente organizziamo <strong>uscite sul territorio</strong>, indicativamente <strong>una ogni due mesi</strong> (le uscite vengono comunicate per tempo alle famiglie). Il momento più atteso dell’anno è il <strong>campo estivo</strong>: il Reparto (11–16 anni) vive generalmente un campo di circa <strong>10–15 giorni in tenda</strong> nei boschi, mentre il Branco (8–11 anni) si ritrova per un’esperienza di circa <strong>7 giorni</strong> in una struttura al chiuso.",
    stats: [
      { title: "Sabato 16:00–18:00", desc: "Attività settimanali + Messa domenicale" },
      { title: "Campi Estivi", desc: "Reparto 10–15 gg in tenda · Branco 7 gg in struttura al chiuso" },
    ],
  },
  democrazia: {
    tag: "Pedagogia Istituzionale · Educazione alla democrazia e alla pace",
    title: "Non basta parlare di democrazia: bisogna farne esperienza",
    body1:
      "Non crediamo in un’educazione fondata sul formalismo o sull’obbedienza passiva: crediamo in regole che abbiano un significato e aiutino tutti a vivere meglio insieme. Per questo diamo spazio agli strumenti della pedagogia istituzionale: <strong>assemblee, consigli e squadriglie</strong>, dove i ragazzi esprimono il proprio pensiero, discutono i problemi, formulano proposte e prendono decisioni condivise.",
    body2:
      "Il potere educativo si distribuisce attraverso responsabilità reali: i capi accompagnano e orientano senza sostituirsi ai ragazzi nelle decisioni che possono prendere da soli. È così che <strong>si educa alla pace</strong>: imparando a discutere senza distruggere, a riconoscere il valore delle differenze e a cercare soluzioni che tengano conto di tutti.",
    stats: [
      { title: "Partecipazione Reale", desc: "Consigli e assemblee: la voce di ciascuno conta" },
      { title: "Educare alla Pace", desc: "Discutere senza distruggere e gestire i conflitti" },
    ],
  },
};

/* ==========================================================================
   DATI BRANCHE PER LE CARD SCALATE E L'ESPLORATORE D'ETÀ (8-21 ANNI)
   ========================================================================== */
const BRANCHES_INFO = {
  lc: {
    colorKey: "lc",
    badge: "Branca indicativa · L/C (8–11 anni) · Branco Waingunga",
    title: "Il Branco dei Lupetti — Imparare giocando nella “Famiglia Felice”",
    desc: "Dagli 8 agli 11 anni nel nostro Branco Waingunga sia i bambini sia le bambine sono Lupetti! Vivono insieme un ambiente gioioso, accogliente e ricco di fantasia: attraverso il gioco, l’ambiente fantastico Giungla, la libera espressione e le Vacanze di Branco estive imparano a fare amicizia con tutti e a conquistare con fierezza le prime piccole autonomie.",
    keyword: "“Del nostro meglio!” · Gioco e Gioia",
    growth: "Amicizia, fantasia, rispetto degli altri e fiducia in sé",
    photo: "../branco info/WhatsApp Image 2026-11-01 at 11.05.29 PM (5).jpeg",
    photoCaption: "Il nostro Branco Waingunga affacciato sul mare Jonio con le magliette gialle della Famiglia Felice",
    formValue: "Branco Lupetti (8-11 anni)",
  },
  eg: {
    colorKey: "eg",
    badge: "Branca indicativa · E/G (11–16 anni)",
    title: "Reparto (Esploratori e Guide) — L’età della grande avventura",
    desc: "Dagli 11 ai 16 anni ragazzi e ragazze sono veri protagonisti nella propria Squadriglia! Costruiscono tavoli da campo con nodi e legature, montano la tenda, cucinano, accendono il fuoco in sicurezza, viaggiano fino a Roma e mettono in campo la propria creatività — proprio come hanno fatto ideando le scene del nostro video!",
    keyword: "“Estote Parati” (Siate Pronti) · Avventura",
    growth: "Autonomia pratica, autostima, senso di squadra e protagonismo",
    photo: "../Reparto info/IMG-20261018-WA0038.jpg",
    photoCaption: "Il nostro Reparto immerso nei boschi tra costruzioni, natura e amicizia vera",
    formValue: "Reparto Esploratori e Guide (11-16 anni)",
  },
  rs: {
    colorKey: "rs",
    badge: "Branca indicativa · R/S (16–21 anni)",
    title: "Noviziato e Clan/Fuoco (Rover e Scolte) — Strada, Comunità e Servizio",
    desc: "Dai 16 ai 21 anni i giovani camminano zaino in spalla lungo i sentieri dell’Aspromonte e d’Italia (le Route), custodiscono la Forcola e la Carta di Clan, si confrontano sui grandi temi della vita e della fede e vivono il servizio gratuito verso il prossimo, preparandosi a scelte mature da cittadini attivi.",
    keyword: "“Servire” · Strada, Comunità e Scelte",
    growth: "Maturità, spirito critico, solidarietà e cittadinanza attiva",
    photo: "../Clan info/WhatsApp Image 2026-11-01 at 9.04.26 PM (1).jpeg",
    photoCaption: "Il nostro Clan in Route a Gambarie d’Aspromonte con zaini in spalla e la Forcola",
    formValue: "Clan/Fuoco Rover e Scolte (16-21 anni)",
  },
};

/* ==========================================================================
   AVVIO DI TUTTI I MODULI INTERATTIVI
   ========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgressAndReveals();
  initMobileNav();
  initThemeToggle();
  initIdentityTabs();
  initBrancaReelPlayer();
  initMythCards();
  initPhotoHotspots();
  initTrueReefKnotLab();
  initAgeExplorer();
  initGalleryAndLightbox();
  initTrialMessageBuilder();
});

/* 1. Barra progresso corda + animazioni scroll reveal */
function initScrollProgressAndReveals() {
  const ropeFill = document.getElementById("scrollRopeFill");
  const updateRope = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(100, (scrollTop / docHeight) * 100) : 0;
    if (ropeFill) ropeFill.style.width = `${pct}%`;
  };
  window.addEventListener("scroll", updateRope, { passive: true });
  updateRope();

  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach((el) => observer.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }
}

/* 2. Menu Mobile */
function initMobileNav() {
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  if (!menuToggle || !mainNav) return;

  const closeMenu = () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
  };

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
}

/* 3. Switcher Atmosfera "Giorno al Campo" <-> "Sera al Bivacco" */
function initThemeToggle() {
  const toggleBtn = document.getElementById("themeToggle");
  const heroTrigger = document.getElementById("heroCampfireTrigger");
  const iconEl = document.getElementById("themeIcon");
  const labelEl = document.getElementById("themeLabel");

  const applyTheme = (mode) => {
    document.documentElement.setAttribute("data-theme", mode);
    const isCampfire = mode === "campfire";
    if (toggleBtn) toggleBtn.setAttribute("aria-pressed", String(isCampfire));
    if (iconEl) iconEl.textContent = isCampfire ? "☀️" : "🔥";
    if (labelEl) labelEl.textContent = isCampfire ? "Giorno" : "Bivacco";
  };

  const switchTheme = () => {
    const current = document.documentElement.getAttribute("data-theme") || "day";
    const next = current === "day" ? "campfire" : "day";
    if (document.startViewTransition) {
      document.startViewTransition(() => applyTheme(next));
    } else {
      applyTheme(next);
    }
  };

  if (toggleBtn) toggleBtn.addEventListener("click", switchTheme);
  if (heroTrigger) heroTrigger.addEventListener("click", switchTheme);
}

/* 4. Sezione Interattiva "Chi Siamo" (4 Tab Identitari) */
function initIdentityTabs() {
  const tabs = document.querySelectorAll(".identity-tab");
  const tagEl = document.getElementById("identityTag");
  const titleEl = document.getElementById("identityTitle");
  const body1El = document.getElementById("identityBody1");
  const body2El = document.getElementById("identityBody2");
  const highlightsEl = document.getElementById("identityHighlights");

  const renderIdentity = (key) => {
    const data = IDENTITY_TABS_DATA[key];
    if (!data) return;

    tabs.forEach((t) => {
      const active = t.getAttribute("data-identity") === key;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });

    if (tagEl) tagEl.textContent = data.tag;
    if (titleEl) titleEl.textContent = data.title;
    if (body1El) body1El.innerHTML = data.body1;
    if (body2El) body2El.innerHTML = data.body2;
    if (highlightsEl) {
      highlightsEl.innerHTML = data.stats
        .map(
          (s) => `
          <div class="id-stat">
            <strong>${s.title}</strong>
            <span>${s.desc}</span>
          </div>`
        )
        .join("");
    }
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const key = tab.getAttribute("data-identity");
      if (document.startViewTransition) {
        document.startViewTransition(() => renderIdentity(key));
      } else {
        renderIdentity(key);
      }
    });
  });
}

/* ==========================================================================
   5. PLAYER INTERATTIVO DEL VIDEO GIRATO A BRANCALEONE
   ========================================================================== */
function initBrancaReelPlayer() {
  const reelFrame = document.getElementById("reelFrame");
  const video = document.getElementById("brancaVideo");
  const bigPlayBtn = document.getElementById("reelBigPlayBtn");
  const playPauseBtn = document.getElementById("reelPlayPauseBtn");
  const muteBtn = document.getElementById("reelMuteBtn");
  const scrubber = document.getElementById("reelScrubber");

  if (!video || !reelFrame) return;

  const syncUi = () => {
    const dur = Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 37.8;
    const cur = video.currentTime || 0;
    const isPlaying = !video.paused && !video.ended;

    reelFrame.classList.toggle("is-playing", isPlaying);
    if (playPauseBtn) {
      playPauseBtn.textContent = isPlaying ? "⏸ Pausa" : "▶ Riproduci";
    }
    if (muteBtn) {
      muteBtn.textContent = video.muted ? "🔇 Riattiva audio" : "🔊 Audio attivo";
    }
    if (scrubber) {
      scrubber.max = String(dur);
      scrubber.value = String(cur);
    }
  };

  const togglePlay = () => {
    if (video.paused || video.ended) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  if (bigPlayBtn) bigPlayBtn.addEventListener("click", togglePlay);
  if (playPauseBtn) playPauseBtn.addEventListener("click", togglePlay);
  video.addEventListener("click", togglePlay);

  if (muteBtn) {
    muteBtn.addEventListener("click", () => {
      video.muted = !video.muted;
      syncUi();
    });
  }

  if (scrubber) {
    scrubber.addEventListener("input", () => {
      video.currentTime = Number(scrubber.value);
      syncUi();
    });
  }

  ["loadedmetadata", "timeupdate", "play", "pause", "ended", "volumechange"].forEach((ev) => {
    video.addEventListener(ev, syncUi);
  });

  syncUi();
}

/* 6. Flip Cards 3D "Sfata gli Stereotipi" */
function initMythCards() {
  const cards = document.querySelectorAll(".myth-card");
  const progressBar = document.getElementById("mythProgressBar");
  const progressText = document.getElementById("mythProgressText");
  const unlockedBanner = document.getElementById("mythUnlockedBanner");
  const discovered = new Set();

  cards.forEach((card) => {
    const btn = card.querySelector(".myth-card__btn");
    const id = card.getAttribute("data-myth-id");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const flipped = card.classList.toggle("is-flipped");
      btn.setAttribute("aria-expanded", String(flipped));
      discovered.add(id);

      const count = discovered.size;
      const pct = (count / cards.length) * 100;
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressText) {
        progressText.innerHTML =
          count === cards.length
            ? `🎉 Tutti i luoghi comuni sfatati: <strong>4 su 4</strong>!`
            : `Stereotipi sfatati: <strong>${count} su ${cards.length}</strong> — tocca anche le altre carte!`;
      }
      if (count === cards.length && unlockedBanner) {
        unlockedBanner.hidden = false;
      }
    });
  });
}

/* 7. Hotspots Interattivi sulle Foto Reali (Tavolo Costruzioni WA0000 + Treno per Roma WA0039) */
function initPhotoHotspots() {
  const bindHotspotGroup = (frameId, readoutId) => {
    const frame = document.getElementById(frameId);
    const readout = document.getElementById(readoutId);
    if (!frame || !readout) return;

    const pins = frame.querySelectorAll(".hotspot-pin");
    pins.forEach((pin) => {
      pin.addEventListener("click", () => {
        pins.forEach((p) => p.classList.remove("is-selected"));
        pin.classList.add("is-selected");
        readout.textContent = pin.getAttribute("data-spot-text") || "";
      });
    });
  };

  bindHotspotGroup("craftHotspotFrame", "craftSpotReadout");
  bindHotspotGroup("romeHotspotFrame", "romeSpotReadout");
}

/* ==========================================================================
   8. VERO LABORATORIO TECNICO DEL NODO PIANO (TOPOLOGIA ESATTA A 6 INCROCI)
   - Passo 1: Due cime separate (Dormienti e Correnti)
   - Passo 2: 1° Mezzo Nodo ("Destra sopra Sinistra e gira sotto")
   - Passo 3: 2° Mezzo Nodo opposto ("Sinistra sopra Destra") -> VERO NODO PIANO
     (Nell'asola sinistra entrambi i rami blu passano SOPRA l'archetto rosso;
      nell'asola destra entrambi i rami rossi passano SOTTO l'archetto blu;
      al centro i due rami rossi passano SOPRA quelli blu -> 6 incroci alternati!)
   - Passo 4: Confronto educativo con il NODO DELL'ASINO (errore asimmetrico)
   ========================================================================== */
function initTrueReefKnotLab() {
  const svg = document.getElementById("knotSvg");
  const statusPill = document.getElementById("knotStatusPill");
  const captionBox = document.getElementById("knotCaption");
  const stepBtns = document.querySelectorAll(".knot-step-btn");
  if (!svg) return;

  const drawRopeLayers = (d, color, withGap = false) => {
    const gap = withGap ? `<path d="${d}" class="rope-gap" />` : "";
    return `
      ${gap}
      <path d="${d}" class="rope-border rope-border--${color}" />
      <path d="${d}" class="rope-core rope-core--${color}" />
      <path d="${d}" class="rope-twist" />
    `;
  };

  // Piccola fascetta gialla d'impalmatura vicino alla punta del capo corrente (libero)
  const drawWhippedTip = (x, y, angleDeg = 0) => `
    <rect x="${x - 4}" y="${y - 9}" width="7" height="18" rx="2"
      fill="#fbbf24" stroke="#78350f" stroke-width="1.5"
      transform="rotate(${angleDeg} ${x} ${y})" />
  `;

  // Geometria simmetrica perfetta (capi aperti a ventaglio come nei manuali tecnici AGESCI/WOSM)
  const FULL_BLUE =
    "M 42 192 L 172 150 C 212 138, 282 178, 322 178 C 396 178, 396 82, 322 82 C 282 82, 212 122, 172 110 L 68 74";
  const FULL_RED =
    "M 458 192 L 328 150 C 288 138, 218 178, 178 178 C 104 178, 104 82, 178 82 C 218 82, 288 122, 328 110 L 432 74";

  const KNOT_STEPS = {
    1: {
      pillText: "Passo 1 di 3 · Capi di fronte",
      isError: false,
      caption:
        "<strong>1. Avvicina le due cime:</strong> prendi due corde dello <strong>stesso spessore</strong>. In basso vedi i due <em>dormienti</em> (la parte fissa della corda), in alto con la fascetta gialla i due <em>capi correnti</em> (i capi liberi che muoveremo con le mani).",
      renderSvg: () => {
        const b1 = "M 42 188 C 110 175, 155 142, 208 92";
        const r1 = "M 458 188 C 390 175, 345 142, 292 92";
        return `
          ${drawRopeLayers(r1, "red", false)}
          ${drawRopeLayers(b1, "blue", false)}
          ${drawWhippedTip(201, 98, -42)}
          ${drawWhippedTip(299, 98, 42)}
          <text x="38" y="218" class="rope-label">Dormiente Blu</text>
          <text x="128" y="72" class="rope-label">Corrente Blu</text>
          <text x="372" y="218" class="rope-label">Dormiente Rosso</text>
          <text x="292" y="72" class="rope-label">Corrente Rosso</text>
        `;
      },
    },

    2: {
      pillText: "Passo 2 di 3 · 1° Mezzo Nodo",
      isError: false,
      caption:
        "<strong>2. Primo mezzo nodo («Destra sopra Sinistra»):</strong> incrocia i due capi correnti facendo passare uno sotto l’altro. Ora il capo blu punta in alto a destra e il capo rosso punta in alto a sinistra.",
      renderSvg: () => {
        const b2 =
          "M 42 192 L 172 150 C 212 138, 282 178, 322 178 C 368 178, 372 128, 398 64";
        const r2 =
          "M 458 192 L 328 150 C 288 138, 218 178, 178 178 C 132 178, 128 128, 102 64";
        return `
          <defs>
            <clipPath id="clipStep2Center">
              <rect x="185" y="132" width="130" height="64" />
            </clipPath>
          </defs>
          ${drawRopeLayers(r2, "red", false)}
          ${drawRopeLayers(b2, "blue", true)}
          <g clip-path="url(#clipStep2Center)">
            ${drawRopeLayers(r2, "red", true)}
          </g>
          ${drawWhippedTip(393, 74, -66)}
          ${drawWhippedTip(107, 74, 66)}
          <text x="58" y="50" class="rope-label">Corrente Rosso</text>
          <text x="352" y="50" class="rope-label">Corrente Blu</text>
        `;
      },
    },

    3: {
      pillText: "✓ Vero Nodo Piano (Simmetrico)",
      isError: false,
      caption:
        "<strong>3. Secondo mezzo nodo opposto («Sinistra sopra Destra») — NODO PIANO PERFETTO!</strong> Guarda le due asole: a sinistra <strong>entrambi i rami blu escono SOPRA</strong> l’archetto rosso dallo stesso lato; a destra <strong>entrambi i rami rossi escono SOTTO</strong> l’archetto blu. Più tiri, più tiene senza scorrere!",
      renderSvg: () => `
        <defs>
          <!-- Al centro (M1 e M2) il rosso passa SOPRA il blu; ai lati (L1, L2, R1, R2) il blu passa SOPRA il rosso -->
          <clipPath id="clipReefCenter">
            <rect x="185" y="65" width="130" height="130" />
          </clipPath>
        </defs>
        ${drawRopeLayers(FULL_RED, "red", false)}
        ${drawRopeLayers(FULL_BLUE, "blue", true)}
        <g clip-path="url(#clipReefCenter)">
          ${drawRopeLayers(FULL_RED, "red", true)}
        </g>
        ${drawWhippedTip(79, 78, 19)}
        ${drawWhippedTip(421, 78, -19)}
        <text x="24" y="58" class="rope-label">Corrente Blu (stesso lato!)</text>
        <text x="24" y="218" class="rope-label">Dormiente Blu</text>
        <text x="318" y="58" class="rope-label">Corrente Rosso (stesso lato!)</text>
        <text x="366" y="218" class="rope-label">Dormiente Rosso</text>
      `,
    },

    4: {
      pillText: "✗ Errore: Nodo dell’Asino!",
      isError: true,
      caption:
        "<strong>⚠️ Attenzione all’errore classico (Nodo dell’Asino):</strong> se fai il secondo incrocio nello <em>stesso verso</em> del primo invece che al contrario, guarda le due asole laterali: in ogni lato <strong>un ramo passa SOPRA e l’altro passa SOTTO</strong>! È asimmetrico e sotto trazione scorre.",
      renderSvg: () => `
        <defs>
          <!-- Nel Nodo dell'Asino l'intreccio superiore è invertito: L1 e R1 diventano Rosso SOPRA Blu, mentre M2 resta Rosso SOPRA Blu -->
          <clipPath id="clipGranny">
            <rect x="185" y="135" width="130" height="60" />
            <rect x="105" y="65" width="80" height="62" />
            <rect x="315" y="65" width="80" height="62" />
          </clipPath>
        </defs>
        ${drawRopeLayers(FULL_RED, "red", false)}
        ${drawRopeLayers(FULL_BLUE, "blue", true)}
        <g clip-path="url(#clipGranny)">
          ${drawRopeLayers(FULL_RED, "red", true)}
        </g>
        ${drawWhippedTip(79, 78, 19)}
        ${drawWhippedTip(421, 78, -19)}
        <text x="24" y="58" class="rope-label">✗ Uno sopra e uno sotto!</text>
        <text x="322" y="58" class="rope-label">✗ Asimmetrico (scorre!)</text>
      `,
    },
  };

  const setStep = (stepNum) => {
    const stepData = KNOT_STEPS[stepNum];
    if (!stepData) return;

    svg.innerHTML = stepData.renderSvg();

    if (statusPill) {
      statusPill.textContent = stepData.pillText;
      statusPill.classList.toggle("is-error", stepData.isError);
    }
    if (captionBox) {
      captionBox.innerHTML = stepData.caption;
      captionBox.classList.toggle("is-warning", stepData.isError);
    }

    stepBtns.forEach((btn) => {
      btn.classList.toggle("is-active", Number(btn.getAttribute("data-knot-step")) === stepNum);
    });
  };

  stepBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const n = Number(btn.getAttribute("data-knot-step"));
      setStep(n);
    });
  });

  // Avvia direttamente sul Passo 3 (il Vero Nodo Piano completo)
  setStep(3);
}

/* 9. Card Scalate Stile Odoo + Esploratore Interattivo per Età (8-21 anni) */
function initAgeExplorer() {
  const ageInput = document.getElementById("ageRangeInput");
  const ageDisplay = document.getElementById("ageValueDisplay");
  const showcase = document.getElementById("branchShowcase");
  const badgeEl = document.getElementById("branchBadge");
  const titleEl = document.getElementById("branchTitle");
  const descEl = document.getElementById("branchDesc");
  const keywordEl = document.getElementById("branchKeyword");
  const growthEl = document.getElementById("branchGrowth");
  const photoEl = document.getElementById("branchPhoto");
  const captionEl = document.getElementById("branchPhotoCaption");
  const ctaBtn = document.getElementById("branchCtaBtn");
  const staggerCards = document.querySelectorAll(".stagger-card");
  const childBranchSelect = document.getElementById("childBranch");

  const getBranchKey = (age) => {
    if (age <= 11) return "lc";
    if (age <= 16) return "eg";
    return "rs";
  };

  const updateAge = (age) => {
    const key = getBranchKey(age);
    const info = BRANCHES_INFO[key];
    if (!info) return;

    let transitionNote = "";
    if (age === 11 || age === 12) {
      transitionNote =
        " L’associazione con l’età è indicativa: intorno agli 11–12 anni ci si può trovare ancora nel Branco oppure già vicini al passaggio in Reparto, in base alla situazione individuale e al percorso scout.";
    } else if (age === 16 || age === 17) {
      transitionNote =
        " L’associazione con l’età è indicativa: intorno ai 16–17 anni il passaggio tra Reparto e Noviziato R/S viene valutato insieme ai Capi in base alla situazione individuale e al percorso scout.";
    }

    if (ageDisplay) ageDisplay.textContent = `${age} anni`;
    if (showcase) showcase.setAttribute("data-branch-color", info.colorKey);
    if (badgeEl) badgeEl.textContent = info.badge;
    if (titleEl) titleEl.textContent = info.title;
    if (descEl) descEl.textContent = info.desc + transitionNote;
    if (keywordEl) keywordEl.textContent = info.keyword;
    if (growthEl) growthEl.textContent = info.growth;
    if (photoEl && photoEl.getAttribute("src") !== info.photo) {
      photoEl.src = info.photo;
    }
    if (captionEl) captionEl.textContent = info.photoCaption;
    if (ctaBtn) {
      const shortName =
        key === "lc" ? "il Branco dei Lupetti" : key === "eg" ? "il Reparto" : "il Clan/Fuoco";
      ctaBtn.textContent = `Scopri ${shortName} →`;
      ctaBtn.href = key === "lc" ? "branco.html" : key === "eg" ? "reparto.html" : "clan.html";
    }

    staggerCards.forEach((card) => {
      const cardKey = card.getAttribute("data-branch-card");
      card.classList.toggle("is-selected", cardKey === key);
    });

    if (childBranchSelect) {
      childBranchSelect.value = info.formValue;
      childBranchSelect.dispatchEvent(new Event("change"));
    }
  };

  if (ageInput) {
    ageInput.addEventListener("input", () => updateAge(Number(ageInput.value)));
  }

  staggerCards.forEach((card) => {
    const activateCard = () => {
      const targetAge = Number(card.getAttribute("data-target-age") || 13);
      if (ageInput) ageInput.value = String(targetAge);
      updateAge(targetAge);
    };

    card.addEventListener("click", activateCard);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activateCard();
      }
    });
  });

  updateAge(13);
}

/* 10. Galleria Filtrabile Multi-Pagina + Lightbox Nativo <dialog> */
function initGalleryAndLightbox() {
  const galleryContainer = document.querySelector(".photo-gallery");
  const filterChips = document.querySelectorAll(".filter-chip");
  const items = document.querySelectorAll(".gallery-item");
  const dialog = document.getElementById("photoLightbox");
  const lbImg = document.getElementById("lightboxImg");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbDesc = document.getElementById("lightboxDesc");
  const lbCounter = document.getElementById("lightboxCounter");
  const closeBtn = document.getElementById("lightboxClose");
  const prevBtn = document.getElementById("lightboxPrev");
  const nextBtn = document.getElementById("lightboxNext");

  if (!items.length) return;

  let currentIndex = 0;

  const getVisibleButtons = () =>
    Array.from(document.querySelectorAll(".gallery-item:not([hidden]) .gallery-item__btn"));

  filterChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const filter = chip.getAttribute("data-filter") || "all";
      filterChips.forEach((c) => c.classList.toggle("is-active", c === chip));

      const applyFilter = () => {
        if (galleryContainer) {
          galleryContainer.classList.toggle("is-filtered", filter !== "all");
        }
        items.forEach((item) => {
          const cats = (item.getAttribute("data-category") || "").split(/\s+/).filter(Boolean);
          item.hidden = !(filter === "all" || cats.includes(filter));
        });
      };

      if (document.startViewTransition) {
        document.startViewTransition(applyFilter);
      } else {
        applyFilter();
      }
    });
  });

  const showSlide = (idx) => {
    const visibleBtns = getVisibleButtons();
    if (!visibleBtns.length) return;

    currentIndex = ((idx % visibleBtns.length) + visibleBtns.length) % visibleBtns.length;
    const activeBtn = visibleBtns[currentIndex];
    const imgEl = activeBtn.querySelector("img");
    const overlayStrong = activeBtn.querySelector(".gallery-item__overlay strong");

    const src = imgEl ? imgEl.getAttribute("src") || "" : "";
    const title =
      activeBtn.getAttribute("data-title") ||
      (overlayStrong ? overlayStrong.textContent.trim() : "") ||
      (imgEl ? imgEl.alt : "");
    const desc = activeBtn.getAttribute("data-desc") || (imgEl ? imgEl.alt : "");

    if (lbImg) {
      lbImg.src = src;
      lbImg.alt = title;
    }
    if (lbTitle) lbTitle.textContent = title;
    if (lbDesc) lbDesc.textContent = desc;
    if (lbCounter) lbCounter.textContent = `Foto ${currentIndex + 1} di ${visibleBtns.length}`;
  };

  document.querySelectorAll(".gallery-item__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const visibleBtns = getVisibleButtons();
      const idx = visibleBtns.indexOf(btn);
      showSlide(idx >= 0 ? idx : 0);
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });
  });

  if (closeBtn && dialog) closeBtn.addEventListener("click", () => dialog.close());
  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(currentIndex + 1));

  if (dialog) {
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog) dialog.close();
    });
    dialog.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") showSlide(currentIndex - 1);
      if (e.key === "ArrowRight") showSlide(currentIndex + 1);
    });
  }
}

/* 11. Costruttore Messaggio di Contatto + Banner Finale */
function initTrialMessageBuilder() {
  const roleEl = document.getElementById("senderRole");
  const nameEl = document.getElementById("childName");
  const branchEl = document.getElementById("childBranch");
  const goalEl = document.getElementById("contactGoal");
  const previewEl = document.getElementById("generatedMessagePreview");
  const copyBtn = document.getElementById("copyMsgBtn");
  const waBtn = document.getElementById("whatsappBtn");
  const waBtnLabel = document.getElementById("whatsappBtnLabel");
  const closingWaBtn = document.getElementById("closingWhatsappBtn");
  const instagramLink = document.getElementById("instagramLink");
  const facebookLink = document.getElementById("facebookLink");

  if (instagramLink && CONFIG_CONTATTI.instagramUrl) {
    instagramLink.href = CONFIG_CONTATTI.instagramUrl;
  }
  if (facebookLink && CONFIG_CONTATTI.facebookUrl) {
    facebookLink.href = CONFIG_CONTATTI.facebookUrl;
  }

  const buildMessage = () => {
    const role = roleEl ? roleEl.value : "genitore";
    const rawName = nameEl ? nameEl.value.trim() : "";
    const branch = branchEl ? branchEl.value : "Reparto Esploratori e Guide (11-16 anni)";
    const goal = goalEl ? goalEl.value : "conoscere";

    const isBranco = branch.includes("Branco");
    const isClan = branch.includes("Clan");
    const targetPhone = isBranco
      ? CONFIG_CONTATTI.whatsappBranco
      : CONFIG_CONTATTI.whatsappReparto;

    let greetingTarget = "Capi del Gruppo AGESCI Brancaleone 1";
    if (isBranco) {
      greetingTarget = "Capi del Branco (AGESCI Brancaleone 1)";
    } else if (!isClan) {
      greetingTarget = "Capi del Reparto (AGESCI Brancaleone 1)";
    }

    let intro = "";
    if (role === "genitore") {
      intro = rawName
        ? `Ciao ${greetingTarget}! Sono un genitore e vi scrivo per ${rawName} (fascia ${branch}).`
        : `Ciao ${greetingTarget}! Sono un genitore e vi scrivo per la fascia ${branch}.`;
    } else {
      intro = rawName
        ? `Ciao ${greetingTarget}! Mi chiamo ${rawName} e vi scrivo per la fascia ${branch}.`
        : `Ciao ${greetingTarget}! Vorrei avvicinarmi agli scout nella fascia ${branch}.`;
    }

    let actionText = "";
    if (goal === "conoscere" || goal === "prova") {
      actionText =
        "Ho visitato il vostro sito e mi piacerebbe passare in sede a Brancaleone per conoscere i Capi e scoprire le vostre attività. Quando possiamo incontrarci?";
    } else if (goal === "info") {
      actionText =
        "Vorrei sapere quali sono i giorni e gli orari delle attività e dove si trova esattamente la sede per venire a salutarvi!";
    } else {
      actionText =
        "Mi ha colpito molto il vostro sito! Avrei piacere di fare due chiacchiere con voi per avere qualche informazione in più sul percorso scout.";
    }

    const fullMsg = `${intro} ${actionText} Grazie mille!`;

    if (previewEl) previewEl.textContent = fullMsg;

    const encoded = encodeURIComponent(fullMsg);
    const waUrl = `https://wa.me/${targetPhone}?text=${encoded}`;

    if (waBtn) waBtn.href = waUrl;
    if (waBtnLabel) {
      if (isBranco) {
        waBtnLabel.textContent = "💬 Invia su WhatsApp · Branco (+39 348 653 3309)";
      } else if (isClan) {
        waBtnLabel.textContent = "💬 Scrivici su WhatsApp per info Clan (+39 333 254 7995)";
      } else {
        waBtnLabel.textContent = "💬 Invia su WhatsApp · Reparto (+39 333 254 7995)";
      }
    }
    if (closingWaBtn) closingWaBtn.href = waUrl;

    return fullMsg;
  };

  [roleEl, nameEl, branchEl, goalEl].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", buildMessage);
    el.addEventListener("change", buildMessage);
  });

  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      const msg = buildMessage();
      try {
        await navigator.clipboard.writeText(msg);
        copyBtn.textContent = "✓ Copiato!";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copia testo";
        }, 2200);
      } catch {
        copyBtn.textContent = "Seleziona il testo qui sotto";
      }
    });
  }

  buildMessage();
}
