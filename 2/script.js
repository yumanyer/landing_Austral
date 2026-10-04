(() => {
  const root = document.documentElement;
  root.classList.add("js");

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  // Reveals only decorative/editorial sections; content stays readable without JS.
  const revealItems = [...document.querySelectorAll("[data-reveal]")];
  if ("IntersectionObserver" in window && !prefersReducedMotion.matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -35px 0px" });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  // Responsive navigation with Escape handling and focus return.
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".primary-nav");
  const navLinks = nav ? [...nav.querySelectorAll("a")] : [];

  function setMenu(open, restoreFocus = false) {
    if (!menuToggle || !nav) return;
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
    if (!open && restoreFocus && document.activeElement instanceof HTMLElement && nav.contains(document.activeElement)) {
      menuToggle.focus();
    }
  }

  menuToggle?.addEventListener("click", () => {
    setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
  });
  navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle?.getAttribute("aria-expanded") === "true") setMenu(false, true);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 800 && menuToggle?.getAttribute("aria-expanded") === "true") setMenu(false);
  }, { passive: true });

  // Interactive explanation: each stop advances the conceptual capital route.
  const marketSteps = {
    company: {
      index: "01",
      kicker: "EL PUNTO DE PARTIDA",
      title: "Una empresa que quiere crecer.",
      copy: "Su tamaño actual no define el mercado al que puede aspirar. El primer paso es hacer visible su potencial."
    },
    capital: {
      index: "02",
      kicker: "UNA NUEVA CONEXIÓN",
      title: "Participantes que descubren otra oportunidad.",
      copy: "Una infraestructura abierta puede acercar empresas con potencial a participantes que antes no encontraban esa ruta."
    },
    market: {
      index: "03",
      kicker: "UN MERCADO POR CREAR",
      title: "El encuentro se convierte en mercado.",
      copy: "Austral construye la infraestructura para que esa conexión pueda existir de manera continua, transparente y eficiente."
    }
  };
  const marketStage = document.querySelector("#market-stage");
  const readoutIndex = document.querySelector(".readout-index");
  const readoutKicker = document.querySelector("#readout-kicker");
  const readoutTitle = document.querySelector("#readout-title");
  const readoutCopy = document.querySelector("#readout-copy");
  const readoutProgress = document.querySelector("#readout-progress");
  const marketButtons = [...document.querySelectorAll("[data-market-step]")];

  marketButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const stepName = button.dataset.marketStep;
      const step = marketSteps[stepName];
      if (!step || !marketStage) return;
      marketStage.dataset.active = stepName;
      marketButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      if (readoutIndex) readoutIndex.textContent = step.index;
      if (readoutKicker) readoutKicker.textContent = step.kicker;
      if (readoutTitle) readoutTitle.textContent = step.title;
      if (readoutCopy) readoutCopy.textContent = step.copy;
      if (readoutProgress) readoutProgress.style.transform = `translateX(${(Number(step.index) - 1) * 100}%)`;
    });
  });

  // The geographic horizon is an editorial sequence, not a live map or market feed.
  const regionData = {
    argentina: {
      copy: "Conocemos el lugar desde el que empezamos. Argentina es nuestro punto de partida; también, el lugar desde donde vemos todo lo que todavía se puede construir.",
      progress: "610px",
      index: "01 — 03"
    },
    latam: {
      copy: "Latinoamérica es el siguiente paso: una región de talento, empresas e ideas que pueden crecer más allá de sus fronteras.",
      progress: "300px",
      index: "02 — 03"
    },
    world: {
      copy: "El mundo es el horizonte. Queremos que la infraestructura que construimos acá pueda servir a mercados en cualquier lugar.",
      progress: "0px",
      index: "03 — 03"
    }
  };
  const horizon = document.querySelector("#horizon-visual");
  const regionCopy = document.querySelector("#region-copy");
  const regionButtons = [...document.querySelectorAll("button[data-region]")];
  const horizonProgress = document.querySelector("#horizon-progress");
  const horizonIndex = document.querySelector(".horizon-caption--top span:last-child");

  regionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const region = button.dataset.region;
      const data = regionData[region];
      if (!data || !horizon) return;
      horizon.dataset.region = region;
      regionButtons.forEach((item) => {
        const active = item === button;
        item.setAttribute("aria-pressed", String(active));
      });
      if (regionCopy) regionCopy.textContent = data.copy;
      if (horizonProgress) horizonProgress.style.strokeDashoffset = data.progress;
      if (horizonIndex) horizonIndex.textContent = data.index;
    });
  });

  // Slight pointer response on the hero illustration; disabled for touch/reduced motion.
  const heroArt = document.querySelector("[data-parallax]");
  if (heroArt && !prefersReducedMotion.matches && window.matchMedia("(pointer: fine)").matches) {
    heroArt.addEventListener("pointermove", (event) => {
      const rect = heroArt.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      heroArt.style.setProperty("--pointer-x", `${(x * 9).toFixed(1)}px`);
      heroArt.style.setProperty("--pointer-y", `${(y * 7).toFixed(1)}px`);
    }, { passive: true });
    heroArt.addEventListener("pointerleave", () => {
      heroArt.style.setProperty("--pointer-x", "0px");
      heroArt.style.setProperty("--pointer-y", "0px");
    }, { passive: true });
  }

  const year = document.querySelector("#current-year");
  if (year) year.textContent = String(new Date().getFullYear());
})();
