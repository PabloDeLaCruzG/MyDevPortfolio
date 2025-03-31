import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { n as NOOP_MIDDLEWARE_HEADER, o as decodeKey } from './chunks/astro/server_BuByIu8-.mjs';
import 'cookie';
import 'es-module-lexer';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/","cacheDir":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/node_modules/.astro/","outDir":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/dist/","srcDir":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/src/","publicDir":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/public/","buildClientDir":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/dist/","buildServerDir":"file:///Users/pablodelacruz/Essentials/Proyectos%20personales/portfolio-astro/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/pablodelacruz/Essentials/Proyectos personales/portfolio-astro/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_CPoreGvw.mjs","/Users/pablodelacruz/Essentials/Proyectos personales/portfolio-astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_DP709tfA.mjs","/Users/pablodelacruz/Essentials/Proyectos personales/portfolio-astro/src/components/sectionsComponents/ProjectsSection.tsx":"_astro/ProjectsSection.BRMgHlAc.js","/Users/pablodelacruz/Essentials/Proyectos personales/portfolio-astro/src/components/sectionsComponents/ContactMeSection.tsx":"_astro/ContactMeSection.C4QDAhKG.js","@astrojs/react/client.js":"_astro/client.BXWm451Q.js","/Users/pablodelacruz/Essentials/Proyectos personales/portfolio-astro/src/components/header/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.CiEqQVVp.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/pablodelacruz/Essentials/Proyectos personales/portfolio-astro/src/components/header/ThemeToggle.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"DOMContentLoaded\",function(){const e=document.getElementById(\"theme-toggle-dark-icon\"),t=document.getElementById(\"theme-toggle-light-icon\"),n=document.getElementById(\"theme-toggle\");window.matchMedia(\"(prefers-color-scheme: dark)\").matches?(document.documentElement.classList.add(\"dark\"),t.classList.remove(\"hidden\")):(document.documentElement.classList.remove(\"dark\"),e.classList.remove(\"hidden\")),n.addEventListener(\"click\",function(){e.classList.toggle(\"hidden\"),t.classList.toggle(\"hidden\"),document.documentElement.classList.contains(\"dark\")?(document.documentElement.classList.remove(\"dark\"),localStorage.setItem(\"theme\",\"light\")):(document.documentElement.classList.add(\"dark\"),localStorage.setItem(\"theme\",\"dark\"))})});"]],"assets":["/_astro/linkedinIcon.Cnj3YLGX.png","/_astro/githubIcon.XJkqWddK.png","/_astro/starIcon.BOIunnrG.png","/_astro/perfilPortfolio.BKD_XFVD.png","/_astro/workIcon.CEUvrOuh.png","/_astro/studyIcon.B_QuXur9.png","/_astro/userIcon.Bon82dk8.png","/_astro/folderIcon.96NCoGMv.png","/_astro/react.kG_rcbVY.png","/_astro/typescript.yfxkX6Sv.png","/_astro/php.D5ZwK6XB.png","/_astro/java.BdE0LEPD.png","/_astro/jsIcon.4qDtPYfU.png","/_astro/nodeIcon.MzJFKNWN.png","/_astro/next.07PqTbjA.png","/_astro/astro.LNM6OJ9p.png","/_astro/sql.e2syQTgd.png","/_astro/openProjectIcon.BtmZKo__.png","/_astro/mongodb.DZpx2Pxy.png","/_astro/gitIconW.Bj3pWNkt.png","/_astro/springIcon.WI5YzRbb.png","/_astro/tlfIcon.Dzzd3bJV.png","/_astro/image (1).C8dMA9QU.png","/_astro/dashboard-sbs-presencia.CsQlDg5L.png","/_astro/image (2).7TNxnSyf.png","/_astro/image (4).CUNPAmz_.png","/_astro/image (3).BmW9WwT_.png","/_astro/image.DcFYb3o4.png","/_astro/index.BiOKTrAE.css","/_redirects","/favicon.svg","/_astro/ContactMeSection.C4QDAhKG.js","/_astro/ProjectsSection.BRMgHlAc.js","/_astro/client.BXWm451Q.js","/_astro/index.DK-fsZOb.js","/_astro/jsx-runtime.ClP7wGfN.js","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"s7YboQ7gbpOF3D8mUo8TiAd1RJ6zn5Rr7FS0Q67yNAs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
