(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"5cd3bcee4e4560d97a1778e8c4a670d1","url":"404.html"},{"revision":"f423bbfe139dd4624183ef180ec4727d","url":"assets/css/styles.3eae3228.css"},{"revision":"e2efe62ba34a65c3e1a493b568d4a3b5","url":"assets/js/01a85c17.9e699ce9.js"},{"revision":"79261de9c3c4629ebb282f26759608b6","url":"assets/js/02300d48.5c218499.js"},{"revision":"716189696069c5e0742dbf3c464f4a6b","url":"assets/js/0508cc55.aac09b63.js"},{"revision":"c16559e98636490a013f9b4dbbbd57c4","url":"assets/js/07007199.3fc75d76.js"},{"revision":"5b07e65f458f2e1b72fc56da0a0a4fa3","url":"assets/js/092989d9.eb1e2a43.js"},{"revision":"13bb4991d6bd11c47b0f6f8534e042b8","url":"assets/js/0f311104.fe1eb6f7.js"},{"revision":"da282883a82c6282bab15b355b60a239","url":"assets/js/158f0636.6f8706d5.js"},{"revision":"ab66a2373b5b9f886b0641ae1074e96b","url":"assets/js/17896441.5651132c.js"},{"revision":"a01249139f9acf29c8582b8432d6c883","url":"assets/js/1be78505.bc40d915.js"},{"revision":"8619e5f1182292c30f4b75723bea76b2","url":"assets/js/1f391b9e.c259a46a.js"},{"revision":"63675ff36e0795ff84c71d39ad9a4e9d","url":"assets/js/230.e27125f7.js"},{"revision":"78f0b924b262118b99fc65a8b87ad05a","url":"assets/js/2529.3b2831ed.js"},{"revision":"8ecffea662b9ed65522a590b76447d96","url":"assets/js/2b4c33f1.1ed5c470.js"},{"revision":"9fb2b115bad21e3134d85c7d312a7dbd","url":"assets/js/32b10f74.59d2a652.js"},{"revision":"e3e11323a417aa1851e3181b7a7cdebb","url":"assets/js/3339.1f07477b.js"},{"revision":"18ddfd1ffcf1bf4dd2cb1852de0ee0b1","url":"assets/js/3343.32f86eea.js"},{"revision":"c995a4c4c8b3be56061a3f136243cb16","url":"assets/js/36156cbc.3ede9794.js"},{"revision":"26bb67a36b10e7e0ca7130b7fd13fbb4","url":"assets/js/370adea3.d47447c9.js"},{"revision":"d2a9058e6f22d1907ef47958f3d9aa96","url":"assets/js/393be207.7a44f50c.js"},{"revision":"fcf6713ac58d279ad418716b6bcd344a","url":"assets/js/3fc6cfb8.e3b8d108.js"},{"revision":"cbde0e3fead35a7a9ca4709dc25cb7da","url":"assets/js/42153cf2.738e3a97.js"},{"revision":"349d3e5096f0d74f3f5da25c9c6f55b3","url":"assets/js/442606ca.8d4f044a.js"},{"revision":"022be3c2e3d8fa0ed3c9a860a9aa7960","url":"assets/js/4972.feaa167d.js"},{"revision":"a8feecf6632a764d1309c66213f1547c","url":"assets/js/5131.c71b2630.js"},{"revision":"a0623e337f8faed700125c5289e0e10d","url":"assets/js/5283.3f7ce035.js"},{"revision":"c837cc08f8e1675ff45f9d7058fcf50e","url":"assets/js/52a2ca59.fa0cec83.js"},{"revision":"3b23d54a1101dfac48371dc8c0d0c128","url":"assets/js/5837d240.a152e47a.js"},{"revision":"984b8ede8be57d9556abd2204afce9c5","url":"assets/js/617402dc.c3467d00.js"},{"revision":"c78f7ed52ce943bb39279f801ab68910","url":"assets/js/6570bb30.cd4c7d60.js"},{"revision":"f26a6a78d2cc0c1f68de6dbe6500a869","url":"assets/js/6875c492.9f1df2d3.js"},{"revision":"4a11a8967740f3aecfb7417b5b82a6e2","url":"assets/js/7246bb61.23657209.js"},{"revision":"56f446b031a7b7ae49feb75a3cb45071","url":"assets/js/74da6b32.0d10a78f.js"},{"revision":"ae49950ac8a51e3b443146b92f193b68","url":"assets/js/778ae53a.e8e4ff45.js"},{"revision":"1573940277ad646ae13d947a7da3dff3","url":"assets/js/7eec636a.0dd4a34e.js"},{"revision":"23e9852737adeab9bced9cee1f0e8a14","url":"assets/js/814f3328.5c4b2b16.js"},{"revision":"e6d16d3aef387c17dddbb698ee226515","url":"assets/js/8274c49f.e00acf24.js"},{"revision":"f8a75690171343c7436613af288698f0","url":"assets/js/85d2bb10.2a0035ea.js"},{"revision":"9276ac4a9aee2dec40564c4b9d239668","url":"assets/js/85f98a7f.f5989964.js"},{"revision":"84d537d735fad52e7406e886d94cc293","url":"assets/js/8718.f8814bd7.js"},{"revision":"d005e922eef55a55215296ec6928c118","url":"assets/js/8adb3e43.bdc7ba4d.js"},{"revision":"309cc438987e63b03628162933a0b34d","url":"assets/js/8db091af.e1543ca0.js"},{"revision":"a518db4b8139eea59382417167a25bc7","url":"assets/js/935f2afb.fa116eac.js"},{"revision":"2b2ce1dd8c9dd74d4280febfe23a3a9d","url":"assets/js/943073d6.2661f7a9.js"},{"revision":"69158fe89c7361377ccaa9265ef23dc9","url":"assets/js/9709db02.31c95b4f.js"},{"revision":"18efde9ac2318463360ea29c3f757d8c","url":"assets/js/9878.2aa813ee.js"},{"revision":"1d0cdc433c53ff546ddb683af7b67eb5","url":"assets/js/9e4087bc.961975a5.js"},{"revision":"61dc6f0abec570b9bc5774cae0b9ea60","url":"assets/js/a424efa6.58232237.js"},{"revision":"69a70c81b9c006eaef111e3a7a2882a3","url":"assets/js/a6aa9e1f.49db37b5.js"},{"revision":"c42c67a9e9f4b08e186068b1c536354f","url":"assets/js/a8600a24.b185694b.js"},{"revision":"a8f39c5da16e42f70061519945444d8c","url":"assets/js/c4f5d8e4.2e2b3747.js"},{"revision":"97007de3115e062b4b5b31b6b893ea48","url":"assets/js/c4f8873b.29f48b4e.js"},{"revision":"ae299ef7224586db66854576d64c74e9","url":"assets/js/c5f764e0.a6f8a3a7.js"},{"revision":"8c67ccc563568cb432bf80ea28800e19","url":"assets/js/ccc49370.a8974755.js"},{"revision":"2fd63d276b621191022f0b471b4ce9ac","url":"assets/js/d6d1f361.c1911a1e.js"},{"revision":"1c1c68da2a79027b9f2bbce619a9fa33","url":"assets/js/db48e978.e6a6eaea.js"},{"revision":"774afb3b1d90e620d40ffb4eb228b119","url":"assets/js/dc016e2d.4c6c8fce.js"},{"revision":"f2258b20e27e4214a5e1e3c084cf26a0","url":"assets/js/e3cebec4.1c0b7da4.js"},{"revision":"412e725b7f8166c35bbf5808409fca2a","url":"assets/js/ed9001f9.ae6039a4.js"},{"revision":"a8ea5fae2286d5fc1484e492f64a9681","url":"assets/js/ef3c2eba.c68981d2.js"},{"revision":"a413b85a01eb33521a81d1b51f5bf520","url":"assets/js/fac2235d.a5884e7c.js"},{"revision":"570d7ad24dd9136382a53e406d3d64d5","url":"assets/js/main.5ef35985.js"},{"revision":"66d2a5fcd52315d00b85da552d558156","url":"assets/js/runtime~main.85040028.js"},{"revision":"865a2cc4960d43aa12ca220933460db2","url":"blog/archive/index.html"},{"revision":"58ec809e81dd216b75d21e306d1798ad","url":"blog/index.html"},{"revision":"f7512783a54650aa1a6d787db7095c93","url":"blog/Introduction/index.html"},{"revision":"2e80f17d02c37529a11d5a0ec1ebfd97","url":"blog/tags/co-drone-edu/index.html"},{"revision":"c79a7b22a865d62ba6199d409e1b2815","url":"blog/tags/docusaurus/index.html"},{"revision":"b6c2a0f9d3f81b0c5653c88eb87c71d8","url":"blog/tags/hello/index.html"},{"revision":"2dfd4d96c527bce15bfa80d9a7db9eff","url":"blog/tags/index.html"},{"revision":"13e2f016e10f4bde271611573b106e60","url":"blog/tags/robolink/index.html"},{"revision":"eb8342d5c14ecc9f8f75729c86d754c7","url":"docs/CoDroneEDU/Blockly/index.html"},{"revision":"9090b28eff13ed34f7600fe4f5444904","url":"docs/CoDroneEDU/Blockly/page1/index.html"},{"revision":"426c760159e1acba9c4adc53706269f7","url":"docs/CoDroneEDU/Blockly/page2/index.html"},{"revision":"207281a14d84680ce91d6059102d9a51","url":"docs/CoDroneEDU/Blockly/page3/index.html"},{"revision":"abf3e04502845127dc2c586807851de3","url":"docs/CoDroneEDU/Documents/index.html"},{"revision":"a1e8c299178118caa59d39df30f7a88d","url":"docs/CoDroneEDU/Documents/page1/index.html"},{"revision":"a6dd9825daf5958be9898ba11ab74a5c","url":"docs/CoDroneEDU/Documents/page2/index.html"},{"revision":"a6400d8b3ad75cdca7034dc2b65c862d","url":"docs/CoDroneEDU/Documents/page3/index.html"},{"revision":"825761ef027cb0c94891c3c92bbf1cb4","url":"docs/CoDroneEDU/Documents/page4/index.html"},{"revision":"b786cc2d7fe1c5035d90448b7a6390ef","url":"docs/CoDroneEDU/Documents/page5/index.html"},{"revision":"265fcd9aa791d36da79b7767aae0bad5","url":"docs/CoDroneEDU/function/index.html"},{"revision":"e91452a95198088745c714384a8e9047","url":"docs/CoDroneEDU/index.html"},{"revision":"a2942987a90143dcef32ae68b155c005","url":"docs/CoDroneEDU/Python/index.html"},{"revision":"2b609ccde2f52c54de6bbd3e613f95b9","url":"docs/CoDroneEDU/Python/page1/index.html"},{"revision":"f9b203132f7a08d6ad22349fb8b12f10","url":"docs/CoDroneEDU/Python/page2/index.html"},{"revision":"860ec0dcac0854d6a067cb0f6b016c85","url":"docs/CoDroneEDU/Python/page3/index.html"},{"revision":"db64e4b249027c6787393c912a2ca58c","url":"docs/CoDroneEDU/Python/page4/index.html"},{"revision":"04646960dbd75836b85b5aba0ea96786","url":"docs/CoDroneMini/index.html"},{"revision":"1e70cb72c7160ad90156671521e66f94","url":"docs/CoDroneMini/TestMini/index.html"},{"revision":"29da46d8743e2c55e6ac1b896b243753","url":"docs/CoDronePro_Lite/index.html"},{"revision":"c2847e04380fcbe0ee3ce925f2696381","url":"docs/CoDronePro_Lite/TestPro_Lite/index.html"},{"revision":"cb6814a7a35f0c0d7b094d9edbc2c864","url":"docs/Zumi/index.html"},{"revision":"2833000e8be93b77a9d1209c539eb417","url":"docs/Zumi/TestZumi/index.html"},{"revision":"5875869069ab06aa73f3e6b35af75637","url":"index.html"},{"revision":"5dcfd11bf5959aeac3e1ddfbac81b1e2","url":"lunr-index-1689233449345.json"},{"revision":"5dcfd11bf5959aeac3e1ddfbac81b1e2","url":"lunr-index.json"},{"revision":"25eb377387c9263d14ab4102c34983e5","url":"manifest.json"},{"revision":"38677794ce08dc0f637333c98c239596","url":"markdown-page/index.html"},{"revision":"75abc3795b20db6c34339fc376d1cd83","url":"search-doc-1689233449345.json"},{"revision":"75abc3795b20db6c34339fc376d1cd83","url":"search-doc.json"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"70758cf026b374464ca8f3db8a4ec82f","url":"img/icons/rblk_favicon-32x32.png"},{"revision":"9afe0e07eb61f5a654266a0a5f319e16","url":"img/icons/rblk_favicon-android-chrome-128x128.png"},{"revision":"0016cf952f7e1c671c2396fbd56b3d06","url":"img/icons/rblk_favicon-android-chrome-144x144.png"},{"revision":"98e5daa3c2dbfbe4f2c42c20ec235226","url":"img/icons/rblk_favicon-android-chrome-152x152.png"},{"revision":"ede8bacea1444f89a191bf69b526e2b9","url":"img/icons/rblk_favicon-android-chrome-192x192.png"},{"revision":"5dacaa8fa937429443c8ecbac710523b","url":"img/icons/rblk_favicon-android-chrome-384x384.png"},{"revision":"b920c6e053066daba761c76a62bf1942","url":"img/icons/rblk_favicon-android-chrome-512X512.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/icons/rblk_favicon-android-chrome-72x72.png"},{"revision":"5a93e254d94fd8bb188cd92b4f2eeb00","url":"img/icons/rblk_favicon-android-chrome-96x96.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"bcf5f7b98f0c632c8cad82e27a7f73e2","url":"img/main/after_vector.png"},{"revision":"dbdbfefc76619cb3ed1091fd3ac1336c","url":"img/main/before_vector.png"},{"revision":"48f8c0915d44b11df9767f37f6ca5c56","url":"img/main/CDE.png"},{"revision":"de883f93fd0750aaddbd168c85de6413","url":"img/main/CDM.png"},{"revision":"885a1ba867dc8771c02826165af36607","url":"img/main/CDP.png"},{"revision":"83e391a07bca2e2a168c05885d6c9d05","url":"img/main/Zumi.png"},{"revision":"fb3eca256f955ec7987fa63ab97ad693","url":"img/R-docs-logo.png"},{"revision":"71590662f64ece803a36b5d1006e9f43","url":"img/R-footer-logo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();