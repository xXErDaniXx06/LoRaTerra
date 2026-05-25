import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DuiESSvW.mjs';
import 'es-module-lexer';
import { W as decodeKey } from './chunks/astro/server_DbyyUoHs.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/danie/Documents/LoRaTerra/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/contact.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/contact\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"contact.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/contact.json.js","pathname":"/api/contact.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/aviso-legal","isIndex":false,"type":"page","pattern":"^\\/aviso-legal\\/?$","segments":[[{"content":"aviso-legal","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/aviso-legal.astro","pathname":"/aviso-legal","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C0cqS94Z.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/contacto","isIndex":false,"type":"page","pattern":"^\\/contacto\\/?$","segments":[[{"content":"contacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contacto.astro","pathname":"/contacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/equipo","isIndex":false,"type":"page","pattern":"^\\/equipo\\/?$","segments":[[{"content":"equipo","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/equipo.astro","pathname":"/equipo","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/impacto","isIndex":false,"type":"page","pattern":"^\\/impacto\\/?$","segments":[[{"content":"impacto","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/impacto.astro","pathname":"/impacto","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/politica-cookies","isIndex":false,"type":"page","pattern":"^\\/politica-cookies\\/?$","segments":[[{"content":"politica-cookies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica-cookies.astro","pathname":"/politica-cookies","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/politica-privacidad","isIndex":false,"type":"page","pattern":"^\\/politica-privacidad\\/?$","segments":[[{"content":"politica-privacidad","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/politica-privacidad.astro","pathname":"/politica-privacidad","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/tecnologia","isIndex":false,"type":"page","pattern":"^\\/tecnologia\\/?$","segments":[[{"content":"tecnologia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tecnologia.astro","pathname":"/tecnologia","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.Cz74nyGL.js"}],"styles":[{"type":"external","src":"/_astro/aviso-legal.Cm4V-sz1.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/danie/Documents/LoRaTerra/src/pages/aviso-legal.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/contacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/equipo.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/impacto.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/politica-cookies.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/politica-privacidad.astro",{"propagation":"none","containsHead":true}],["C:/Users/danie/Documents/LoRaTerra/src/pages/tecnologia.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/api/contact.json@_@js":"pages/api/contact.json.astro.mjs","\u0000@astro-page:src/pages/aviso-legal@_@astro":"pages/aviso-legal.astro.mjs","\u0000@astro-page:src/pages/contacto@_@astro":"pages/contacto.astro.mjs","\u0000@astro-page:src/pages/equipo@_@astro":"pages/equipo.astro.mjs","\u0000@astro-page:src/pages/impacto@_@astro":"pages/impacto.astro.mjs","\u0000@astro-page:src/pages/politica-cookies@_@astro":"pages/politica-cookies.astro.mjs","\u0000@astro-page:src/pages/politica-privacidad@_@astro":"pages/politica-privacidad.astro.mjs","\u0000@astro-page:src/pages/tecnologia@_@astro":"pages/tecnologia.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","C:/Users/danie/Documents/LoRaTerra/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Cefd2h_g.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.C0cqS94Z.js","/astro/hoisted.js?q=1":"_astro/hoisted.Cz74nyGL.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/aviso-legal.Cm4V-sz1.css","/favicon.svg","/logos/daniel-carrasco.jpeg","/logos/logo-junta..png","/logos/Logotipo_del_Gobierno_de_España.svg.png","/logos/Logo_EOI_4.jpg","/logos/ue-logo.jpg","/_astro/hoisted.C0cqS94Z.js","/_astro/hoisted.Cz74nyGL.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"uTP8x03pPitbCV9iKZLuJR+x/g+cbvpKbNwY54Smkf4=","experimentalEnvGetSecretEnabled":false});

export { manifest };
