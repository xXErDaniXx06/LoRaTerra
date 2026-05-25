import { T as createComponent, _ as maybeRenderHead, H as addAttribute, a7 as renderTemplate, Q as createAstro, a2 as renderHead, a0 as renderComponent, a5 as renderSlot } from './astro/server_DbyyUoHs.mjs';
import 'kleur/colors';
/* empty css                               */
import 'clsx';

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const navLinks = [
    { label: "Inicio", href: "/" },
    { label: "Tecnolog\xEDa", href: "/tecnologia" },
    { label: "Impacto & Precios", href: "/impacto" },
    { label: "Equipo", href: "/equipo" },
    { label: "Contacto", href: "/contacto" }
  ];
  const currentPath = Astro2.url.pathname;
  function isActive(href) {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  }
  return renderTemplate`${maybeRenderHead()}<header id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-green-100/60 transition-all duration-300"> <nav class="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between" role="navigation" aria-label="Navegación principal"> <!-- Brand / Logo --> <a href="/" class="flex items-center gap-2 group" aria-label="LoRaTerra — Inicio"> <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-light group-hover:bg-brand-primary/20 transition-colors duration-200"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-brand-dark" aria-hidden="true"> <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path> </svg> </span> <span class="text-xl font-bold tracking-tight text-brand-dark select-none">
LoRaTerra
</span> </a> <!-- Desktop nav links --> <ul class="hidden md:flex items-center gap-8" role="list"> ${navLinks.map((link) => {
    const active = isActive(link.href);
    return renderTemplate`<li> <a${addAttribute(link.href, "href")}${addAttribute([
      "relative text-sm font-medium transition-colors duration-200 pb-0.5",
      "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded-full after:bg-brand-primary after:transition-all after:duration-300",
      active ? "text-brand-dark after:w-full" : "text-slate-500 hover:text-brand-dark after:w-0 hover:after:w-full"
    ].join(" "), "class")}${addAttribute(active ? "page" : void 0, "aria-current")}> ${link.label} </a> </li>`;
  })} </ul> <!-- CTA Button + Mobile toggle --> <div class="flex items-center gap-3"> <a id="nav-cta-btn" href="/contacto" class="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-brand-primary text-white text-sm font-semibold rounded-full shadow-soft transition-all duration-300 hover:bg-green-500 hover:shadow-medium hover:-translate-y-0.5 active:translate-y-0" aria-label="Acceso Consorcios"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true"> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path> <circle cx="9" cy="7" r="4"></circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path> <path d="M16 3.13a4 4 0 0 1 0 7.75"></path> </svg>
Acceso Consorcios
</a> <!-- Mobile hamburger --> <button id="mobile-menu-btn" class="md:hidden p-2 rounded-lg text-brand-dark hover:bg-brand-light transition-colors" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobile-menu"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true"> <line x1="3" y1="12" x2="21" y2="12"></line> <line x1="3" y1="6" x2="21" y2="6"></line> <line x1="3" y1="18" x2="21" y2="18"></line> </svg> </button> </div> </nav> <!-- Mobile menu --> <div id="mobile-menu" class="md:hidden hidden border-t border-green-100/60 bg-white/95 backdrop-blur-md" role="menu" aria-labelledby="mobile-menu-btn"> <ul class="flex flex-col px-6 py-4 gap-1" role="list"> ${navLinks.map((link) => {
    const active = isActive(link.href);
    return renderTemplate`<li role="none"> <a${addAttribute(link.href, "href")}${addAttribute([
      "flex items-center py-2.5 px-3 text-sm font-medium rounded-lg transition-all duration-200",
      active ? "text-brand-dark bg-brand-light font-semibold" : "text-slate-600 hover:text-brand-dark hover:bg-brand-light"
    ].join(" "), "class")} role="menuitem"${addAttribute(active ? "page" : void 0, "aria-current")}> ${link.label} </a> </li>`;
  })} <li role="none" class="pt-2 border-t border-green-100 mt-2"> <a href="/contacto" class="flex items-center justify-center gap-2 py-2.5 px-3 text-sm font-semibold bg-brand-primary text-white rounded-full hover:bg-green-500 transition-colors" role="menuitem">
Acceso Consorcios
</a> </li> </ul> </div> </header> `;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "LoRaTerra \u2014 Ingenier\xEDa IoT de Precisi\xF3n para la Agricultura",
    description = "LoRaTerra es un ecosistema IoT modular que unifica la gesti\xF3n de suelo, agua y clima. Tecnolog\xEDa LoRa para ahorro de agua y reducci\xF3n de p\xE9rdidas en parcela."
  } = Astro2.props;
  return renderTemplate`<html lang="es" class="scroll-smooth"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description"${addAttribute(description, "content")}><meta name="robots" content="index, follow"><meta name="author" content="LoRaTerra"><!-- Open Graph --><meta property="og:type" content="website"><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:locale" content="es_ES"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>${title}</title>${renderHead()}</head> <body class="bg-eco-bg font-sans antialiased overflow-x-hidden"> <!-- Navbar always at top --> ${renderComponent($$result, "Navbar", $$Navbar, {})} <!-- Main page content — Footer is inserted per-page as <Footer /> --> <main> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "C:/Users/danie/Documents/LoRaTerra/src/layouts/Layout.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Tecnolog\xEDa", href: "/tecnologia" },
    { label: "Impacto & Precios", href: "/impacto" },
    { label: "Equipo", href: "/equipo" }
  ];
  const legalLinks = [
    { label: "Aviso Legal", href: "/aviso-legal" },
    { label: "Pol\xEDtica de Privacidad", href: "/politica-privacidad" },
    { label: "Pol\xEDtica de Cookies", href: "/politica-cookies" }
  ];
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer id="footer" class="bg-brand-dark text-white pt-16 pb-8" role="contentinfo" aria-label="Pie de página LoRaTerra"> <div class="max-w-6xl mx-auto px-6"> <!-- Grid superior --> <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"> <!-- Col 1: Marca y descripción --> <div class="flex flex-col gap-4"> <!-- Logo textual --> <a href="/" class="flex items-center gap-2 group w-fit" aria-label="LoRaTerra — Inicio"> <span class="w-8 h-8 flex items-center justify-center rounded-lg bg-brand-primary/20 group-hover:bg-brand-primary/30 transition-colors"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-brand-primary" aria-hidden="true"> <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path> </svg> </span> <span class="text-xl font-bold tracking-tight text-white">LoRaTerra</span> </a> <p class="text-white/60 text-sm leading-relaxed max-w-xs">
Ingeniería de precisión para la fortaleza de nuestra agricultura.
          Ecosistema IoT modular con tecnología LoRa.
</p> <!-- Email de contacto --> <a href="mailto:contacto@loraterra.com" class="text-sm text-brand-primary hover:text-green-400 transition-colors w-fit" aria-label="Email de contacto">
contacto@loraterra.com
</a> </div> <!-- Col 2: Enlaces rápidos --> <nav aria-label="Navegación de pie de página"> <p class="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
Páginas
</p> <ul class="flex flex-col gap-2.5" role="list"> ${quickLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-white/70 hover:text-brand-primary transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </nav> <!-- Col 3: Legal --> <nav aria-label="Información legal"> <p class="text-xs font-bold tracking-widest uppercase text-white/40 mb-4">
Legal
</p> <ul class="flex flex-col gap-2.5" role="list"> ${legalLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="text-sm text-white/70 hover:text-brand-primary transition-colors duration-200"> ${link.label} </a> </li>`)} </ul> </nav> </div> <!-- ── Bloque Institucional UE (CRÍTICO) ── --> <div class="border-t border-white/20 pt-8 mt-8 flex flex-col items-center gap-6 text-center" role="complementary" aria-label="Información institucional y cofinanciación"> <!-- Texto UE --> <p class="text-sm text-brand-light/80 max-w-2xl leading-relaxed"> <strong class="font-semibold text-white">Proyecto Cofinanciado por la Unión Europea</strong> <br>
FSE+ — Fondo Social Europeo Plus · Programa de apoyo al emprendimiento tecnológico 2024–2027
</p> <!-- Logos institucionales --> <div class="flex justify-center gap-6 mt-4 flex-wrap items-center" aria-label="Logotipos de entidades cofinanciadoras"> <img src="/logos/ue-logo.jpg" alt="Cofinanciado por la Unión Europea — FSE+" class="h-12 object-contain opacity-80 grayscale hover:grayscale-0 transition duration-300" loading="lazy" onerror="this.style.display='none'"> <img src="/logos/Logo_EOI_4.jpg" alt="Escuela de Organización Industrial — EOI" class="h-12 object-contain opacity-80 grayscale hover:grayscale-0 transition duration-300" loading="lazy" onerror="this.style.display='none'"> <img src="/logos/Logotipo_del_Gobierno_de_España.svg.png" alt="Gobierno de España" class="h-12 object-contain opacity-80 grayscale hover:grayscale-0 transition duration-300" loading="lazy" onerror="this.style.display='none'"> <img src="/logos/logo-junta..png" alt="Junta de Andalucía" class="h-12 object-contain opacity-80 grayscale hover:grayscale-0 transition duration-300" loading="lazy" onerror="this.style.display='none'"> </div> <!-- Copyright --> <p class="text-xs text-white/30">
© ${currentYear} LoRaTerra · Todos los derechos reservados · Málaga, España
</p> <!-- Disclaimer métricas --> <p class="text-brand-light/60 text-xs max-w-2xl leading-relaxed">
* Las métricas de ahorro y reducción de pérdidas representan estimaciones de rendimiento
        basadas en estudios y pruebas piloto de arquitecturas IoT y sistemas análogos de
        agricultura de precisión.
</p> </div> </div> </footer>`;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/Footer.astro", void 0);

export { $$Footer as $, $$Layout as a };
