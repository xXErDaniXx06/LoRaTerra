/* empty css                                       */
import { T as createComponent, _ as maybeRenderHead, H as addAttribute, a7 as renderTemplate, a0 as renderComponent, e as Fragment, aa as unescapeHTML } from '../chunks/astro/server_DbyyUoHs.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$Footer } from '../chunks/Footer_BHoCHQf9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ImpactKPIs = createComponent(($$result, $$props, $$slots) => {
  const kpis = [
    {
      id: "kpi-water",
      value: "25%",
      title: "Ahorro de agua",
      description: "Riego optimizado por microclima y sensores de humedad multicapa."
    },
    {
      id: "kpi-losses",
      value: "40%",
      title: "Reducci\xF3n de p\xE9rdidas",
      description: "Decisiones de prevenci\xF3n basadas en datos precisos de suelo y clima."
    },
    {
      id: "kpi-roi",
      value: "3x",
      title: "Retorno de Inversi\xF3n",
      description: "Amortizaci\xF3n estimada en menos de dos campa\xF1as agr\xEDcolas."
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="impacto-kpis" class="bg-brand-dark py-20 px-6" aria-labelledby="kpis-heading"> <!-- Fondo decorativo sutil --> <div aria-hidden="true" class="absolute pointer-events-none inset-0 overflow-hidden" style="background: radial-gradient(ellipse at 50% 100%, rgba(34,197,94,0.12) 0%, transparent 60%);"></div> <div class="relative max-w-5xl mx-auto"> <!-- Encabezado de sección --> <div class="text-center mb-14"> <p class="text-brand-primary font-semibold text-xs tracking-widest uppercase mb-3">
Impacto Real
</p> <h2 id="kpis-heading" class="text-3xl md:text-4xl font-bold font-display text-white">
Resultados que hablan por sí solos
</h2> </div> <!-- Grid de KPIs --> <div class="grid grid-cols-1 md:grid-cols-3 gap-0 text-center divide-y md:divide-y-0 md:divide-x divide-white/20" role="list" aria-label="Métricas clave de LoRaTerra"> ${kpis.map((kpi) => renderTemplate`<div${addAttribute(kpi.id, "id")} role="listitem" class="group flex flex-col items-center px-8 py-10 md:py-0"> <!-- Número gigante con animación hover sutil --> <span class="text-6xl md:text-7xl font-bold text-brand-primary mb-4 leading-none transition-transform duration-300 group-hover:scale-105 inline-block"${addAttribute(kpi.value, "aria-label")}> ${kpi.value} </span> <!-- Título --> <h3 class="text-xl font-semibold text-white mb-2"> ${kpi.title} </h3> <!-- Descripción --> <p class="text-brand-light/80 text-sm max-w-xs mx-auto leading-relaxed"> ${kpi.description} </p> </div>`)} </div> <!-- Nota disclaimer (transparencia) --> <p class="text-center text-brand-light/60 text-xs mt-12 max-w-2xl mx-auto leading-relaxed">
* Las métricas de ahorro y reducción de pérdidas representan estimaciones de rendimiento
      basadas en estudios y pruebas piloto de arquitecturas IoT y sistemas análogos de
      agricultura de precisión.
</p> </div> </section>`;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/ImpactKPIs.astro", void 0);

const $$Pricing = createComponent(($$result, $$props, $$slots) => {
  const plans = [
    {
      id: "plan-basic",
      level: "Nivel B\xE1sico",
      subtitle: "Meteo Esencial",
      price: "450\u20AC \u2013 600\u20AC",
      priceNote: "instalaci\xF3n incluida",
      featured: false,
      badge: null,
      profile: "Sustituto de estaciones gen\xE9ricas.",
      includes: [
        "Hub Central LoRa",
        "Nodo Termo-higr\xF3metro",
        "Pluvi\xF3metro ultras\xF3nico",
        "App m\xF3vil b\xE1sica"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>`
    },
    {
      id: "plan-advanced",
      level: "Nivel Avanzado",
      subtitle: "Suelo & Ciclo H\xEDdrico",
      price: "1.200\u20AC \u2013 1.800\u20AC",
      priceNote: "seg\xFAn superficie",
      featured: true,
      badge: "M\xE1s Popular",
      profile: "Gesti\xF3n h\xEDdrica y de suelo integrada.",
      includes: [
        "Todo lo del Nivel B\xE1sico",
        "Sondas de humedad multicapa",
        "Sensor de pH y conductividad",
        "Caudal\xEDmetros de riego",
        "Alertas de estr\xE9s h\xEDdrico"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`
    },
    {
      id: "plan-premium",
      level: "Nivel Premium",
      subtitle: "Control Total",
      price: "Desde 2.500\u20AC",
      priceNote: "dise\xF1o personalizado",
      featured: false,
      badge: null,
      profile: "Explotaciones de alta tecnificaci\xF3n.",
      includes: [
        "Todo lo del Nivel Avanzado",
        "Sensores NPK de suelo",
        "Actuadores de riego remotos",
        "Sensor de Radiaci\xF3n PAR",
        "Integraci\xF3n con maquinaria"
      ],
      icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="precios" class="bg-white py-24 px-6" aria-labelledby="pricing-heading"> <div class="max-w-6xl mx-auto"> <!-- Encabezado --> <div class="text-center max-w-2xl mx-auto mb-14"> <p class="text-brand-primary font-semibold text-xs tracking-widest uppercase mb-3">
Modelos & Precios
</p> <h2 id="pricing-heading" class="text-3xl md:text-4xl font-bold font-display text-brand-dark leading-tight">
Tecnología que crece con tu terreno
</h2> <p class="text-slate-500 mt-4 leading-relaxed">
Paga solo por el hardware que necesitas. Escalabilidad modular sin límites.
</p> </div> <!-- Grid de tarjetas --> <div class="grid grid-cols-1 lg:grid-cols-3 gap-8"> ${plans.map((plan) => renderTemplate`<article${addAttribute(plan.id, "id")}${addAttribute([
    "relative flex flex-col rounded-3xl p-8 border transition-all duration-300 hover:shadow-xl",
    plan.featured ? "border-brand-primary bg-eco-bg shadow-medium ring-2 ring-brand-primary/20" : "border-slate-100 bg-eco-bg hover:border-brand-primary/30"
  ].join(" "), "class")}${addAttribute(`Plan ${plan.level}`, "aria-label")}> <!-- Badge "Más Popular" --> ${plan.badge && renderTemplate`<div class="absolute -top-3.5 left-1/2 -translate-x-1/2"> <span class="inline-flex items-center px-4 py-1 bg-brand-primary text-white text-xs font-bold rounded-full shadow-soft">
★ ${plan.badge} </span> </div>`} <!-- Icono + nivel --> <div class="flex items-center gap-3 mb-6"> <div${addAttribute([
    "w-11 h-11 flex items-center justify-center rounded-xl",
    plan.featured ? "bg-brand-primary text-white" : "bg-brand-light text-brand-primary"
  ].join(" "), "class")}> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(plan.icon)}` })} </div> <div> <p class="text-xs font-semibold text-brand-primary uppercase tracking-wider"> ${plan.subtitle} </p> <h3 class="text-lg font-bold text-brand-dark leading-tight"> ${plan.level} </h3> </div> </div> <!-- Precio --> <div class="mb-1"> <span${addAttribute([
    "text-3xl font-bold leading-none",
    plan.featured ? "text-brand-dark" : "text-brand-dark"
  ].join(" "), "class")}> ${plan.price} </span> </div> <p class="text-xs text-slate-400 mb-6">${plan.priceNote}</p> <!-- Perfil --> <p class="text-sm text-slate-500 italic mb-6 pb-6 border-b border-slate-100"> ${plan.profile} </p> <!-- Lista de includes --> <ul class="flex flex-col gap-3 mb-8 flex-grow" role="list"${addAttribute(`Incluye en ${plan.level}`, "aria-label")}> ${plan.includes.map((item) => renderTemplate`<li class="flex items-start gap-2.5 text-sm text-slate-600"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 mt-0.5 flex-shrink-0 text-brand-primary" aria-hidden="true"> <polyline points="20 6 9 17 4 12"></polyline> </svg> ${item} </li>`)} </ul> <!-- CTA --> <a href="/contacto"${addAttribute(`pricing-cta-${plan.id}`, "id")}${addAttribute([
    "w-full text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200",
    plan.featured ? "bg-brand-primary text-white hover:bg-green-500 shadow-soft hover:shadow-medium" : "border-2 border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-white"
  ].join(" "), "class")}${addAttribute(`Solicitar informaci\xF3n sobre el plan ${plan.level}`, "aria-label")}>
Solicitar información
</a> </article>`)} </div> <!-- Banner SaaS --> <div class="bg-brand-light rounded-2xl p-6 mt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-green-200" role="region" aria-label="Suscripción SaaS mensual"> <div class="flex items-start gap-4"> <div class="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mt-0.5"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" aria-hidden="true"> <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"></path> </svg> </div> <div> <p class="font-bold text-brand-dark">Suscripción Base de Datos (SaaS)</p> <p class="text-sm text-slate-600 mt-0.5 max-w-xl">
Incluye plataforma unificada, alertas móviles en tiempo real, almacenamiento histórico
            ilimitado y actualizaciones de firmware automáticas.
</p> </div> </div> <div class="flex flex-col items-start md:items-end gap-1 flex-shrink-0"> <span class="text-2xl font-bold text-brand-dark">15€ <span class="text-base font-normal text-slate-500">/ mes</span></span> <span class="text-xs text-slate-400">por hub · sin permanencia</span> </div> </div> </div> </section>`;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/Pricing.astro", void 0);

const $$Impacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Impacto & Viabilidad Econ\xF3mica \u2014 LoRaTerra", "description": "Rentabilidad medible: 25% de ahorro de agua, 40% de reducci\xF3n de p\xE9rdidas y 3x de ROI. Descubre los modelos de hardware y suscripci\xF3n SaaS de LoRaTerra." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="relative pt-32 pb-20 bg-eco-bg text-center overflow-hidden"> <!-- Decoración radial verde muy sutil --> <div aria-hidden="true" class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse at 50% 0%, rgba(34,197,94,0.07) 0%, transparent 60%);"></div> <div class="relative max-w-3xl mx-auto px-6"> <!-- Etiqueta de sección --> <p class="text-brand-primary font-semibold text-xs tracking-widest uppercase mb-4">
Impacto & Viabilidad
</p> <!-- H1 --> <h1 class="text-4xl md:text-5xl font-bold font-display text-brand-dark leading-tight">
Rentabilidad Medible
<span class="block text-brand-primary mt-1">y Sostenibilidad</span> </h1> <!-- Párrafo --> <p class="text-slate-600 mt-6 text-lg leading-relaxed max-w-xl mx-auto">
Un modelo de negocio diseñado para maximizar el valor de tu explotación agrícola,
        con retornos verificados en campo desde la primera campaña.
</p> <!-- Breadcrumb visual / mini-nav --> <div class="flex items-center justify-center gap-2 mt-8 text-xs text-slate-400" aria-hidden="true"> <a href="/" class="hover:text-brand-dark transition-colors">Inicio</a> <span>›</span> <span class="text-brand-dark font-medium">Impacto & Viabilidad</span> </div> </div> <!-- Wave separator hacia el brand-dark de KPIs --> <div class="absolute bottom-0 left-0 right-0 overflow-hidden leading-none" aria-hidden="true"> <svg viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" class="w-full h-10"> <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" fill="#14532d"></path> </svg> </div> </div>  ${renderComponent($$result2, "ImpactKPIs", $$ImpactKPIs, {})}  ${renderComponent($$result2, "Pricing", $$Pricing, {})}  <section class="py-20 px-6 bg-eco-bg text-center" aria-label="Llamada a la acción final"> <div class="max-w-2xl mx-auto"> <h2 class="text-3xl font-bold font-display text-brand-dark">
¿Calculamos el ROI de tu explotación?
</h2> <p class="text-slate-500 mt-4 leading-relaxed">
Cuéntanos el tamaño de tu terreno y cultivo. Nuestro equipo te prepara
        un estudio de viabilidad personalizado en 48 horas, sin compromiso.
</p> <div class="flex flex-wrap justify-center gap-4 mt-8"> <a id="impacto-cta-roi" href="/contacto" class="btn-primary text-base">
Solicitar Estudio de ROI
</a> <a id="impacto-cta-demo" href="mailto:demo@loraterra.com" class="btn-secondary text-base">
Hablar con un Especialista
</a> </div> </div> </section>  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/danie/Documents/LoRaTerra/src/pages/impacto.astro", void 0);

const $$file = "C:/Users/danie/Documents/LoRaTerra/src/pages/impacto.astro";
const $$url = "/impacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Impacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
