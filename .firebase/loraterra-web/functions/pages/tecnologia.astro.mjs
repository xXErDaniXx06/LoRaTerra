/* empty css                                       */
import { T as createComponent, _ as maybeRenderHead, H as addAttribute, a0 as renderComponent, e as Fragment, a7 as renderTemplate, aa as unescapeHTML } from '../chunks/astro/server_DbyyUoHs.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$Footer } from '../chunks/Footer_BHoCHQf9.mjs';
export { renderers } from '../renderers.mjs';

const $$Problem = createComponent(($$result, $$props, $$slots) => {
  const cards = [
    {
      id: "problem-climate",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`,
      title: "Inexactitud Clim\xE1tica",
      text: "Dependencia de promedios regionales que ignoran el microclima real de la parcela."
    },
    {
      id: "problem-tools",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true"><rect width="7" height="7" x="3" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="3" rx="1.5"/><rect width="7" height="7" x="14" y="14" rx="1.5"/><rect width="7" height="7" x="3" y="14" rx="1.5"/></svg>`,
      title: "Herramientas Fragmentadas",
      text: "Sistemas separados para el control de suelo, clima y ciclo h\xEDdrico que generan ineficiencias cr\xEDticas."
    },
    {
      id: "problem-connectivity",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-7 h-7" aria-hidden="true"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
      title: "Baja Conectividad",
      text: "Estaciones convencionales costosas que pierden se\xF1al en \xE1reas rurales de topograf\xEDa compleja."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="el-desafio" class="bg-white py-24" aria-labelledby="problem-heading"> <!-- Encabezado centrado --> <div class="text-center px-6 max-w-3xl mx-auto"> <p class="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-3">
El Desafío
</p> <h2 id="problem-heading" class="text-4xl font-bold font-display text-brand-dark leading-tight">
¿A qué se enfrenta el agricultor moderno?
</h2> <p class="text-slate-600 max-w-2xl mx-auto mt-4 leading-relaxed">
Los productores sufren una grave <em class="not-italic font-semibold text-slate-700">"ceguera climática"</em>:
      dependen de predicciones meteorológicas genéricas que ignoran la realidad de sus parcelas, tomando
      decisiones críticas de riego, fertilización y cosecha con datos inexactos o incompletos.
</p> </div> <!-- Grid de tarjetas --> <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 lg:px-12 max-w-7xl mx-auto" role="list" aria-label="Principales desafíos del sector agrícola"> ${cards.map((card, i) => renderTemplate`<article${addAttribute(card.id, "id")} role="listitem" class="group relative flex flex-col gap-5 bg-eco-bg rounded-2xl shadow-soft p-8 border border-green-100/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium"> <!-- Número decorativo --> <span class="absolute top-5 right-6 text-6xl font-black text-brand-dark/[0.05] select-none leading-none" aria-hidden="true"> ${String(i + 1).padStart(2, "0")} </span> <!-- Icono --> <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light text-brand-primary transition-transform duration-300 group-hover:scale-110"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(card.icon)}` })} </div> <!-- Título --> <h3 class="text-lg font-bold text-brand-dark leading-snug"> ${card.title} </h3> <!-- Descripción --> <p class="text-slate-600 text-sm leading-relaxed"> ${card.text} </p> <!-- Línea accent inferior al hover --> <div class="absolute bottom-0 left-8 right-8 h-0.5 rounded-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> </article>`)} </div> </section>`;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/Problem.astro", void 0);

const $$Architecture = createComponent(($$result, $$props, $$slots) => {
  const steps = [
    {
      id: "arch-stations",
      number: "01",
      title: "Estaciones Modulares",
      description: "Sensores locales de alta precisi\xF3n instalados directamente en cada sector de la parcela. Miden temperatura, humedad de suelo, conductividad el\xE9ctrica, radiaci\xF3n solar y precipitaci\xF3n in-situ.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
      connector: true
    },
    {
      id: "arch-lora",
      number: "02",
      title: "Enlace de Red LoRa",
      description: "Comunicaci\xF3n inal\xE1mbrica de bajo consumo y largo alcance (hasta 15 km en campo abierto) entre estaciones, sin depender de 4G/5G ni infraestructura de operador.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>`,
      connector: true
    },
    {
      id: "arch-hub",
      number: "03",
      title: "Hub Central",
      description: "Nodo de borde que agrega, pre-procesa y transmite los datos de campo hacia la nube de forma cifrada. Opera de forma aut\xF3noma incluso con conectividad intermitente.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>`,
      connector: true
    },
    {
      id: "arch-ui",
      number: "04",
      title: "Interfaz Unificada",
      description: "Panel de usuario donde la observaci\xF3n se convierte en acci\xF3n: control remoto de actuadores de riego, alertas inteligentes en tiempo real y dashboards agron\xF3micos personalizados.",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>`,
      connector: false
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="arquitectura" class="bg-eco-bg py-24 px-6 lg:px-12" aria-labelledby="arch-heading"> <div class="max-w-7xl mx-auto"> <!-- Encabezado --> <div class="text-center max-w-3xl mx-auto mb-16"> <p class="text-brand-primary font-semibold text-sm tracking-widest uppercase mb-3">
La Solución
</p> <h2 id="arch-heading" class="text-4xl font-bold font-display text-brand-dark leading-tight">
Arquitectura Unificada
</h2> <p class="text-slate-600 mt-4 leading-relaxed">
Cuatro capas perfectamente integradas que convierten los datos crudos del campo
        en decisiones agronómicas de alto valor.
</p> </div> <!-- Grid 2×2 --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"> ${steps.map((step) => renderTemplate`<article${addAttribute(step.id, "id")} class="group relative flex flex-col gap-5 bg-white rounded-2xl shadow-soft p-8 border border-green-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-medium overflow-hidden"> <!-- Accent strip izquierdo --> <div class="absolute left-0 top-8 bottom-8 w-1 rounded-r-full bg-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> <!-- Número y icono --> <div class="flex items-center justify-between"> <div class="flex items-center gap-4"> <!-- Icono en círculo brand --> <div class="w-12 h-12 flex items-center justify-center rounded-xl bg-brand-light text-brand-primary transition-transform duration-300 group-hover:scale-110"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(step.icon)}` })} </div> <!-- Número de paso --> <span class="text-xs font-bold tracking-[0.2em] text-brand-primary uppercase">
Paso ${step.number} </span> </div> <!-- Número decorativo fondo --> <span class="text-7xl font-black text-brand-dark/[0.04] select-none leading-none" aria-hidden="true"> ${step.number} </span> </div> <!-- Título --> <h3 class="text-xl font-bold text-brand-dark leading-snug"> ${step.title} </h3> <!-- Descripción --> <p class="text-slate-600 text-sm leading-relaxed"> ${step.description} </p> </article>`)} </div> <!-- Diagrama de flujo simplificado (texto) --> <div class="mt-14 flex flex-wrap items-center justify-center gap-2 text-xs font-semibold text-slate-400" aria-hidden="true"> ${["Estaci\xF3n de Campo", "\u2192", "Red LoRa", "\u2192", "Hub Central", "\u2192", "Plataforma Cloud", "\u2192", "Interfaz de Usuario"].map((item) => renderTemplate`<span${addAttribute(item === "\u2192" ? "text-brand-primary text-base" : "px-3 py-1.5 bg-white rounded-full border border-green-100 text-slate-500", "class")}> ${item} </span>`)} </div> </div> </section>`;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/Architecture.astro", void 0);

const $$Tecnologia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tecnolog\xEDa IoT \u2014 LoRaTerra", "description": "Descubre la arquitectura LoRa de LoRaTerra: estaciones modulares, red de bajo consumo, hub central e interfaz unificada para agricultura de precisi\xF3n." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative pt-32 pb-20 bg-brand-dark text-white text-center overflow-hidden"> <!-- Fondo decorativo: radial glow verde --> <div aria-hidden="true" class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 120%, rgba(34,197,94,0.18) 0%, transparent 65%);"></div> <!-- Grid dot pattern sutil --> <div aria-hidden="true" class="absolute inset-0 opacity-[0.04]" style="background-image: radial-gradient(circle, #22c55e 1px, transparent 1px); background-size: 32px 32px;"></div> <div class="relative max-w-4xl mx-auto px-6"> <!-- Breadcrumb / etiqueta --> <p class="inline-flex items-center gap-2 text-brand-primary font-semibold text-xs tracking-widest uppercase mb-6"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5" aria-hidden="true"> <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path> </svg>
LoRaTerra · Tecnología
</p> <!-- H1 principal --> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-[1.1] tracking-tight">
Del espacio a la parcela.
<span class="block mt-1 text-brand-primary">Tecnología LoRa</span>
para agricultura de precisión.
</h1> <!-- Párrafo introductorio --> <p class="mt-6 text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
Descubre cómo nuestra arquitectura IoT proporciona
<em class="not-italic font-semibold text-white">"Ground Truth"</em>
—datos reales de parcela— para maximizar la rentabilidad de cada campaña.
</p> <!-- Stats rápidas --> <div class="flex flex-wrap justify-center gap-8 mt-10" aria-label="Cifras clave de LoRaTerra"> ${[
    { value: "15 km", label: "Alcance LoRa en campo" },
    { value: "25%", label: "Ahorro h\xEDdrico" },
    { value: "40%", label: "Reducci\xF3n de p\xE9rdidas" },
    { value: "10 a\xF1os", label: "Bater\xEDa de nodo" }
  ].map((stat) => renderTemplate`<div class="flex flex-col items-center gap-1"> <span class="text-3xl font-bold text-brand-primary">${stat.value}</span> <span class="text-xs text-white/50 uppercase tracking-wider">${stat.label}</span> </div>`)} </div> </div> <!-- Wave separator hacia el blanco --> <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true"> <svg viewBox="0 0 1440 48" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-12"> <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#ffffff"></path> </svg> </div> </div>  ${renderComponent($$result2, "Problem", $$Problem, {})}  ${renderComponent($$result2, "Architecture", $$Architecture, {})}  <section class="py-20 px-6 bg-white text-center" aria-label="Llamada a la acción"> <div class="max-w-2xl mx-auto"> <h2 class="text-3xl font-bold font-display text-brand-dark">
¿Quieres ver el sistema en acción?
</h2> <p class="text-slate-500 mt-4 leading-relaxed">
Solicita una demostración personalizada y comprueba cómo LoRaTerra
        se adapta a tu explotación en menos de 48 horas.
</p> <div class="flex flex-wrap justify-center gap-4 mt-8"> <a id="tech-cta-demo" href="/contacto" class="btn-primary text-base">
Solicitar Demo Gratuita
</a> <a id="tech-cta-dossier" href="mailto:inversores@loraterra.com" class="btn-secondary text-base">
Dossier Técnico
</a> </div> </div> </section>  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/danie/Documents/LoRaTerra/src/pages/tecnologia.astro", void 0);

const $$file = "C:/Users/danie/Documents/LoRaTerra/src/pages/tecnologia.astro";
const $$url = "/tecnologia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tecnologia,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
