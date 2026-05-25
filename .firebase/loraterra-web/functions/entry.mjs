import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CkJ7zC8e.mjs';
import { manifest } from './manifest_Cefd2h_g.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/contact.json.astro.mjs');
const _page2 = () => import('./pages/aviso-legal.astro.mjs');
const _page3 = () => import('./pages/contacto.astro.mjs');
const _page4 = () => import('./pages/equipo.astro.mjs');
const _page5 = () => import('./pages/impacto.astro.mjs');
const _page6 = () => import('./pages/politica-cookies.astro.mjs');
const _page7 = () => import('./pages/politica-privacidad.astro.mjs');
const _page8 = () => import('./pages/tecnologia.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/node.js", _page0],
    ["src/pages/api/contact.json.js", _page1],
    ["src/pages/aviso-legal.astro", _page2],
    ["src/pages/contacto.astro", _page3],
    ["src/pages/equipo.astro", _page4],
    ["src/pages/impacto.astro", _page5],
    ["src/pages/politica-cookies.astro", _page6],
    ["src/pages/politica-privacidad.astro", _page7],
    ["src/pages/tecnologia.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "mode": "middleware",
    "client": "file:///C:/Users/danie/Documents/LoRaTerra/dist/client/",
    "server": "file:///C:/Users/danie/Documents/LoRaTerra/dist/server/",
    "host": false,
    "port": 4321,
    "assets": "_astro"
};
const _exports = createExports(_manifest, _args);
const handler = _exports['handler'];
const startServer = _exports['startServer'];
const options = _exports['options'];
const _start = 'start';
{
	serverEntrypointModule[_start](_manifest, _args);
}

export { handler, options, pageMap, startServer };
