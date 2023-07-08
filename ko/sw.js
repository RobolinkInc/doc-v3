(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"01e6e0129d3bb1d20230d843d814dd1d","url":"404.html"},{"revision":"5ad008f56617dcef10ca25bd709ed5ae","url":"assets/css/styles.2e48f460.css"},{"revision":"559dee47d035b3388f244de76fb47fbb","url":"assets/js/01a85c17.cf4ec4cb.js"},{"revision":"ec2782c571793c10f1e4f0ebf2adf858","url":"assets/js/02300d48.74634cf4.js"},{"revision":"b3269a3d047ceb3e7c76ca23d0160281","url":"assets/js/0508cc55.9b38e4be.js"},{"revision":"6e5ec38533b70922b4821976630a6d5b","url":"assets/js/158f0636.693b9beb.js"},{"revision":"ab66a2373b5b9f886b0641ae1074e96b","url":"assets/js/17896441.5651132c.js"},{"revision":"a01249139f9acf29c8582b8432d6c883","url":"assets/js/1be78505.bc40d915.js"},{"revision":"8619e5f1182292c30f4b75723bea76b2","url":"assets/js/1f391b9e.c259a46a.js"},{"revision":"63675ff36e0795ff84c71d39ad9a4e9d","url":"assets/js/230.e27125f7.js"},{"revision":"78f0b924b262118b99fc65a8b87ad05a","url":"assets/js/2529.3b2831ed.js"},{"revision":"8ecffea662b9ed65522a590b76447d96","url":"assets/js/2b4c33f1.1ed5c470.js"},{"revision":"9fb2b115bad21e3134d85c7d312a7dbd","url":"assets/js/32b10f74.59d2a652.js"},{"revision":"e3e11323a417aa1851e3181b7a7cdebb","url":"assets/js/3339.1f07477b.js"},{"revision":"18ddfd1ffcf1bf4dd2cb1852de0ee0b1","url":"assets/js/3343.32f86eea.js"},{"revision":"c995a4c4c8b3be56061a3f136243cb16","url":"assets/js/36156cbc.3ede9794.js"},{"revision":"26bb67a36b10e7e0ca7130b7fd13fbb4","url":"assets/js/370adea3.d47447c9.js"},{"revision":"987cba59093b50df0b7713faddb65e49","url":"assets/js/3720c009.ff6b9352.js"},{"revision":"d2a9058e6f22d1907ef47958f3d9aa96","url":"assets/js/393be207.7a44f50c.js"},{"revision":"cbde0e3fead35a7a9ca4709dc25cb7da","url":"assets/js/42153cf2.738e3a97.js"},{"revision":"349d3e5096f0d74f3f5da25c9c6f55b3","url":"assets/js/442606ca.8d4f044a.js"},{"revision":"cfc58a11c3c5d1a6bbd68ec6bb472493","url":"assets/js/48c3879e.98e709e9.js"},{"revision":"022be3c2e3d8fa0ed3c9a860a9aa7960","url":"assets/js/4972.feaa167d.js"},{"revision":"a8feecf6632a764d1309c66213f1547c","url":"assets/js/5131.c71b2630.js"},{"revision":"a0623e337f8faed700125c5289e0e10d","url":"assets/js/5283.3f7ce035.js"},{"revision":"c837cc08f8e1675ff45f9d7058fcf50e","url":"assets/js/52a2ca59.fa0cec83.js"},{"revision":"38f201dc3f5dadcbf7de11193687a2d4","url":"assets/js/55960ee5.01c49430.js"},{"revision":"f26a6a78d2cc0c1f68de6dbe6500a869","url":"assets/js/6875c492.9f1df2d3.js"},{"revision":"23e9852737adeab9bced9cee1f0e8a14","url":"assets/js/814f3328.5c4b2b16.js"},{"revision":"e6d16d3aef387c17dddbb698ee226515","url":"assets/js/8274c49f.e00acf24.js"},{"revision":"f8a75690171343c7436613af288698f0","url":"assets/js/85d2bb10.2a0035ea.js"},{"revision":"ad304d8365d4c59dfafea54d0b975c85","url":"assets/js/85f98a7f.d1a5cd87.js"},{"revision":"84d537d735fad52e7406e886d94cc293","url":"assets/js/8718.f8814bd7.js"},{"revision":"d005e922eef55a55215296ec6928c118","url":"assets/js/8adb3e43.bdc7ba4d.js"},{"revision":"4c59ac47b5b3c04aef8fcc35b00b4afd","url":"assets/js/8b9d2005.1847ff98.js"},{"revision":"309cc438987e63b03628162933a0b34d","url":"assets/js/8db091af.e1543ca0.js"},{"revision":"68c10c57cca53ee452423649c418fac1","url":"assets/js/935f2afb.00d42d7d.js"},{"revision":"18efde9ac2318463360ea29c3f757d8c","url":"assets/js/9878.2aa813ee.js"},{"revision":"1d0cdc433c53ff546ddb683af7b67eb5","url":"assets/js/9e4087bc.961975a5.js"},{"revision":"61dc6f0abec570b9bc5774cae0b9ea60","url":"assets/js/a424efa6.58232237.js"},{"revision":"69a70c81b9c006eaef111e3a7a2882a3","url":"assets/js/a6aa9e1f.49db37b5.js"},{"revision":"58c8f640c8b130cd4c7cd6c3ed09dcd2","url":"assets/js/c4f5d8e4.adee58a9.js"},{"revision":"8c67ccc563568cb432bf80ea28800e19","url":"assets/js/ccc49370.a8974755.js"},{"revision":"774afb3b1d90e620d40ffb4eb228b119","url":"assets/js/dc016e2d.4c6c8fce.js"},{"revision":"a0c49738a1617aa509dd643b4ad614de","url":"assets/js/df203c0f.25bbacb9.js"},{"revision":"0a8f69b47b1c34c12389152f038d55b8","url":"assets/js/e2a9bd62.0c1122a3.js"},{"revision":"f2258b20e27e4214a5e1e3c084cf26a0","url":"assets/js/e3cebec4.1c0b7da4.js"},{"revision":"6f6d1bea8397e6d5777eca414b1983de","url":"assets/js/ed9001f9.52e43a57.js"},{"revision":"a8ea5fae2286d5fc1484e492f64a9681","url":"assets/js/ef3c2eba.c68981d2.js"},{"revision":"a413b85a01eb33521a81d1b51f5bf520","url":"assets/js/fac2235d.a5884e7c.js"},{"revision":"4734b0061d19a08f1acaa517cf57f82c","url":"assets/js/main.bc715e24.js"},{"revision":"2342640848e982a414c1487ed1de1331","url":"assets/js/runtime~main.43e9a696.js"},{"revision":"7f0e3eaff1f155fb0ea22f4161d9d312","url":"blog/archive/index.html"},{"revision":"aea0a13f2715d68c0d00302631cf5764","url":"blog/index.html"},{"revision":"1e736ea089dee5396e9700c95f2b2046","url":"blog/Introduction/index.html"},{"revision":"8bfe4dd1f588c539b86716e8a921f80c","url":"blog/tags/co-drone-edu/index.html"},{"revision":"f7782b1f4a2a1c8de0d02ea811e6ff4d","url":"blog/tags/docusaurus/index.html"},{"revision":"2395b5d86a9978a68c399901954116a3","url":"blog/tags/hello/index.html"},{"revision":"273b71feeb7b28a09df1808dcf6073e7","url":"blog/tags/index.html"},{"revision":"e5693da9778362165bc459e3a9068045","url":"blog/tags/robolink/index.html"},{"revision":"ab5f2c8db6ca3786ce0bb92ba9d5e5f2","url":"docs/CoDroneEDU/codron-explain/index.html"},{"revision":"e81aa2c1ade74cad635c251b8e7bc36c","url":"docs/CoDroneEDU/function/index.html"},{"revision":"571c3acdc1436d01049a9c36120d5149","url":"docs/CoDroneEDU/index.html"},{"revision":"27ab34db28d01669f33afec38b346acc","url":"docs/CoDroneMini/index.html"},{"revision":"740267c5a618283e726e41d7e5f3a053","url":"docs/CoDronePro_Lite/index.html"},{"revision":"3a199cea011f809d2b9b886f9ece29f1","url":"docs/tags/co-drone-edu/index.html"},{"revision":"c017ddce38215bf755d965349ed32a89","url":"docs/tags/index.html"},{"revision":"05023bc6b31ea62d725a6dd55e603917","url":"docs/tags/robolink/index.html"},{"revision":"6c0ed3da805fffd94168e9f4eb7a4957","url":"docs/Zumi/index.html"},{"revision":"8acec0100a617f772962008d59f73499","url":"index.html"},{"revision":"5bf09faee0bf368f67bc5534de770cf2","url":"lunr-index-1688783784050.json"},{"revision":"5bf09faee0bf368f67bc5534de770cf2","url":"lunr-index.json"},{"revision":"25eb377387c9263d14ab4102c34983e5","url":"manifest.json"},{"revision":"b8def3e7f5855ffa6dc4c9f26b21b40c","url":"markdown-page/index.html"},{"revision":"8b2becc9f38364cffa1f4046e9ad04d6","url":"search-doc-1688783784050.json"},{"revision":"8b2becc9f38364cffa1f4046e9ad04d6","url":"search-doc.json"},{"revision":"4440f0a8b4a6e6aa77f36a07c38f5141","url":"assets/images/main_background-6e19366b2e07b2083ef24f6062986b94.png"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"70758cf026b374464ca8f3db8a4ec82f","url":"img/icons/rblk_favicon-32x32.png"},{"revision":"9afe0e07eb61f5a654266a0a5f319e16","url":"img/icons/rblk_favicon-android-chrome-128x128.png"},{"revision":"0016cf952f7e1c671c2396fbd56b3d06","url":"img/icons/rblk_favicon-android-chrome-144x144.png"},{"revision":"98e5daa3c2dbfbe4f2c42c20ec235226","url":"img/icons/rblk_favicon-android-chrome-152x152.png"},{"revision":"ede8bacea1444f89a191bf69b526e2b9","url":"img/icons/rblk_favicon-android-chrome-192x192.png"},{"revision":"5dacaa8fa937429443c8ecbac710523b","url":"img/icons/rblk_favicon-android-chrome-384x384.png"},{"revision":"b920c6e053066daba761c76a62bf1942","url":"img/icons/rblk_favicon-android-chrome-512X512.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/icons/rblk_favicon-android-chrome-72x72.png"},{"revision":"5a93e254d94fd8bb188cd92b4f2eeb00","url":"img/icons/rblk_favicon-android-chrome-96x96.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"4440f0a8b4a6e6aa77f36a07c38f5141","url":"img/main_background.png"},{"revision":"a5a176cb4c0c00a90a3d7f1cfe673a72","url":"img/R-docs-logo.png"},{"revision":"1091a4350893e64760788168876c9908","url":"img/R-footer-logo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();