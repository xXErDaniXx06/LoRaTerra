/* empty css                                       */
import { T as createComponent, _ as maybeRenderHead, a7 as renderTemplate, a0 as renderComponent } from '../chunks/astro/server_DbyyUoHs.mjs';
import 'kleur/colors';
import { a as $$Layout, $ as $$Footer } from '../chunks/Footer_BHoCHQf9.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contacto-form" class="bg-brand-light py-20 px-6" aria-labelledby="contact-heading"> <div class="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-green-100"> <!-- Header del formulario --> <div class="text-center mb-8"> <div class="w-12 h-12 bg-brand-light rounded-xl flex items-center justify-center mx-auto mb-4"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-brand-primary" aria-hidden="true"> <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path> <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path> </svg> </div> <h2 id="contact-heading" class="text-2xl font-bold text-brand-dark">
Únete a la revolución agrícola
</h2> <p class="text-slate-500 text-sm mt-2 leading-relaxed">
Cuéntanos tu proyecto y te respondemos en menos de 24 horas.
</p> </div> <!-- Formulario --> <form id="contact-form" class="flex flex-col gap-5" novalidate aria-label="Formulario de contacto LoRaTerra"> <!-- Nombre completo --> <div class="flex flex-col gap-1.5"> <label for="contact-name" class="text-sm font-medium text-slate-700">
Nombre Completo <span class="text-red-400" aria-hidden="true">*</span> </label> <input id="contact-name" name="nombre" type="text" required autocomplete="name" placeholder="ej. María García Ruiz" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white"> </div> <!-- Email profesional --> <div class="flex flex-col gap-1.5"> <label for="contact-email" class="text-sm font-medium text-slate-700">
Email Profesional <span class="text-red-400" aria-hidden="true">*</span> </label> <input id="contact-email" name="email" type="email" required autocomplete="email" placeholder="tu@empresa.com" class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white"> </div> <!-- Perfil --> <div class="flex flex-col gap-1.5"> <label for="contact-profile" class="text-sm font-medium text-slate-700">
Perfil <span class="text-red-400" aria-hidden="true">*</span> </label> <div class="relative"> <select id="contact-profile" name="perfil" required class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 text-sm appearance-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white cursor-pointer"> <option value="" disabled selected>Selecciona tu perfil...</option> <option value="agricultor">Agricultor / Productor</option> <option value="inversor">Inversor</option> <option value="consorcio">Consorcio Agrícola</option> <option value="distribuidor">Distribuidor / Integrador</option> <option value="otro">Otro</option> </select> <!-- Chevron custom --> <div class="pointer-events-none absolute inset-y-0 right-4 flex items-center" aria-hidden="true"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-slate-400"> <polyline points="6 9 12 15 18 9"></polyline> </svg> </div> </div> </div> <!-- Mensaje --> <div class="flex flex-col gap-1.5"> <label for="contact-message" class="text-sm font-medium text-slate-700">
Mensaje
</label> <textarea id="contact-message" name="mensaje" rows="4" placeholder="Cuéntanos sobre tu explotación, superficie aproximada y qué necesitas monitorizar..." class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 placeholder-slate-400 text-sm resize-none transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-transparent focus:bg-white"></textarea> </div> <!-- Consentimiento GDPR --> <div class="flex items-start gap-3"> <input id="contact-gdpr" name="gdpr" type="checkbox" required class="mt-0.5 w-4 h-4 rounded border-slate-300 text-brand-primary focus:ring-brand-primary cursor-pointer flex-shrink-0"> <label for="contact-gdpr" class="text-xs text-slate-500 leading-relaxed cursor-pointer">
Acepto la
<a href="/politica-privacidad" class="text-brand-primary hover:underline">Política de Privacidad</a>
y el tratamiento de mis datos para recibir información comercial de LoRaTerra.
</label> </div> <!-- Botón de envío --> <button id="contact-submit-btn" type="submit" class="w-full bg-brand-primary text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-green-600 active:bg-green-700 transition-all duration-200 shadow-soft hover:shadow-medium hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:ring-offset-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true"> <line x1="22" y1="2" x2="11" y2="13"></line> <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon> </svg>
Enviar mensaje
</button> </form> <!-- Trust indicators --> <p class="text-center text-xs text-slate-400 mt-5 flex items-center justify-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-3.5 h-3.5 text-brand-primary" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
Datos protegidos · GDPR Compliant · Sin spam
</p> </div> </section> `;
}, "C:/Users/danie/Documents/LoRaTerra/src/components/ContactForm.astro", void 0);

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contacto e Inversi\xF3n \u2014 LoRaTerra", "description": "Contacta con LoRaTerra para solicitar una demostraci\xF3n, digitalizar tu explotaci\xF3n agr\xEDcola o participar en nuestra ronda de inversi\xF3n." }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="pt-32 pb-8 bg-eco-bg text-center"> <div class="max-w-3xl mx-auto px-6"> <h1 class="text-4xl md:text-5xl font-bold font-display text-brand-dark mb-4">
Contacto e Inversión
</h1> <p class="text-lg text-slate-600 leading-relaxed">
Establece una alianza con LoRaTerra para digitalizar tu infraestructura
        o participar en nuestra ronda de inversión.
</p> </div> </div>  ${renderComponent($$result2, "ContactForm", $$ContactForm, {})}  ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/danie/Documents/LoRaTerra/src/pages/contacto.astro", void 0);

const $$file = "C:/Users/danie/Documents/LoRaTerra/src/pages/contacto.astro";
const $$url = "/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contacto,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
