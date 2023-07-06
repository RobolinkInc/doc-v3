(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.5.4"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.5.4"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.5.4"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.5.4"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"621c8c88e01bed77da29695b9d3b9e52","url":"404.html"},{"revision":"ad319f7d19ebb406bb9ed64d4908bde3","url":"assets/css/styles.d7b34481.css"},{"revision":"559dee47d035b3388f244de76fb47fbb","url":"assets/js/01a85c17.cf4ec4cb.js"},{"revision":"8f9f1546945b1f92cfb807c9af945e24","url":"assets/js/02300d48.5836674b.js"},{"revision":"0d1c3f3010282da544f3b3dad1b404ed","url":"assets/js/0508cc55.e93569de.js"},{"revision":"89c7477d7cc3e82ca5fb52eafeaa7374","url":"assets/js/0d1d3360.0175ace9.js"},{"revision":"50715e67335446f17344193b83b16660","url":"assets/js/1029a38b.cfa4a202.js"},{"revision":"9e2fd6637c3423d7c5a64673540c8d94","url":"assets/js/1227b9db.a3bd5db2.js"},{"revision":"be92b1d59b84cd39774c0a258790706d","url":"assets/js/158f0636.a51ea349.js"},{"revision":"ab66a2373b5b9f886b0641ae1074e96b","url":"assets/js/17896441.5651132c.js"},{"revision":"e234ea14648b862fcdf6dd0362f32d43","url":"assets/js/199bc3c6.2acb6b30.js"},{"revision":"a01249139f9acf29c8582b8432d6c883","url":"assets/js/1be78505.bc40d915.js"},{"revision":"8619e5f1182292c30f4b75723bea76b2","url":"assets/js/1f391b9e.c259a46a.js"},{"revision":"63675ff36e0795ff84c71d39ad9a4e9d","url":"assets/js/230.e27125f7.js"},{"revision":"78f0b924b262118b99fc65a8b87ad05a","url":"assets/js/2529.3b2831ed.js"},{"revision":"0eda66ecc2416eede4ae647275598830","url":"assets/js/30a24c52.1eb34315.js"},{"revision":"e3e11323a417aa1851e3181b7a7cdebb","url":"assets/js/3339.1f07477b.js"},{"revision":"18ddfd1ffcf1bf4dd2cb1852de0ee0b1","url":"assets/js/3343.32f86eea.js"},{"revision":"c995a4c4c8b3be56061a3f136243cb16","url":"assets/js/36156cbc.3ede9794.js"},{"revision":"987cba59093b50df0b7713faddb65e49","url":"assets/js/3720c009.ff6b9352.js"},{"revision":"54cfdc0266490f27ececfded02fe50c8","url":"assets/js/393be207.37389204.js"},{"revision":"022be3c2e3d8fa0ed3c9a860a9aa7960","url":"assets/js/4972.feaa167d.js"},{"revision":"a8feecf6632a764d1309c66213f1547c","url":"assets/js/5131.c71b2630.js"},{"revision":"a0623e337f8faed700125c5289e0e10d","url":"assets/js/5283.3f7ce035.js"},{"revision":"a9c4b25f19d1368f63d9d7ef8339b7e5","url":"assets/js/532267fd.38642f44.js"},{"revision":"fc1f84729c6f78137f4ccc84ab08be50","url":"assets/js/55960ee5.87896d75.js"},{"revision":"83d619939f9d8951c7241db7d11ae6b3","url":"assets/js/55a52890.10f28fb1.js"},{"revision":"3c30b0f15435c508088356b85ef8c17a","url":"assets/js/608ae6a4.003fa430.js"},{"revision":"b2794cefba7606957813883a7fecd998","url":"assets/js/66406991.e59989ea.js"},{"revision":"f26a6a78d2cc0c1f68de6dbe6500a869","url":"assets/js/6875c492.9f1df2d3.js"},{"revision":"993fbce620449e5f17ba0270a989bbc1","url":"assets/js/814f3328.d4929c49.js"},{"revision":"e0f869e8a837467e719358cad4a8046d","url":"assets/js/85f98a7f.f9dda06b.js"},{"revision":"84d537d735fad52e7406e886d94cc293","url":"assets/js/8718.f8814bd7.js"},{"revision":"309cc438987e63b03628162933a0b34d","url":"assets/js/8db091af.e1543ca0.js"},{"revision":"a24d0f1191eb6d8317f1b13bb1a2b86c","url":"assets/js/935f2afb.d0cd0120.js"},{"revision":"18efde9ac2318463360ea29c3f757d8c","url":"assets/js/9878.2aa813ee.js"},{"revision":"1d0cdc433c53ff546ddb683af7b67eb5","url":"assets/js/9e4087bc.961975a5.js"},{"revision":"62f6f942fd3c618c3883fa466e83b73e","url":"assets/js/a424efa6.dbc43b6e.js"},{"revision":"69a70c81b9c006eaef111e3a7a2882a3","url":"assets/js/a6aa9e1f.49db37b5.js"},{"revision":"f3e722b7822dbfd95e8878105a9b6138","url":"assets/js/a7023ddc.3f3f093b.js"},{"revision":"7f06750239602ed275332f167cc5c710","url":"assets/js/a80da1cf.6103fa86.js"},{"revision":"b5c609d2c601293f2eae5ee35dd756ab","url":"assets/js/b2b675dd.7b93e55a.js"},{"revision":"6a85a75bbfea1d2befdbba05d18095b2","url":"assets/js/b2f554cd.b8890423.js"},{"revision":"7809f1de915a5c244cc91e8eed812291","url":"assets/js/c4f5d8e4.e1176b7e.js"},{"revision":"8c67ccc563568cb432bf80ea28800e19","url":"assets/js/ccc49370.a8974755.js"},{"revision":"1fad2f5f9996160fad0026468b1808d6","url":"assets/js/dc016e2d.577c8918.js"},{"revision":"a0c49738a1617aa509dd643b4ad614de","url":"assets/js/df203c0f.25bbacb9.js"},{"revision":"1775ea0bd5298a5d089b820b122a7a80","url":"assets/js/e2a9bd62.6fc654e3.js"},{"revision":"c9d6c51c9bf229fddf258ad655d831b1","url":"assets/js/ed9001f9.24ce5cd1.js"},{"revision":"a8ea5fae2286d5fc1484e492f64a9681","url":"assets/js/ef3c2eba.c68981d2.js"},{"revision":"e1be39a529a242471f14410c2a9156cc","url":"assets/js/main.5d17edf4.js"},{"revision":"757d033e49c4f093323d769329cab84d","url":"assets/js/runtime~main.248d14c1.js"},{"revision":"570cd056448c2fbd823c474133f607d6","url":"blog/archive/index.html"},{"revision":"3c70539a43fd721214356d52665975a9","url":"blog/index.html"},{"revision":"a991cdf9e2fdca8bb3c9503fc6104a38","url":"blog/Introduction/index.html"},{"revision":"5f5f36f2ad251531b2447de1219e2e09","url":"blog/tags/co-drone-edu/index.html"},{"revision":"6ed00689ee5c1cfc2111e4f3d31cb972","url":"blog/tags/docusaurus/index.html"},{"revision":"5c135b3b6381f7bd60f493171cf62a91","url":"blog/tags/hello/index.html"},{"revision":"8efd544c18fa2922ee43c6d2869337e4","url":"blog/tags/index.html"},{"revision":"603b3fb7cf9c2f295618abe435aa42e8","url":"blog/tags/robolink/index.html"},{"revision":"d54a18aab38c8957f528cf5aa6380b22","url":"docs/CoDroneEDU/codron-explain/index.html"},{"revision":"78e2a2d6bef93aa303535275500f129b","url":"docs/CoDroneEDU/function/index.html"},{"revision":"e425d070cdf42487ea7546b44b34dd3f","url":"docs/CoDroneEDU/index.html"},{"revision":"f96e6e127571decf38bd0a1e4f5f7655","url":"docs/CoDroneMini/index.html"},{"revision":"3fad1ea147654f2d927f927b4fc82027","url":"docs/CoDronePro_Lite/index.html"},{"revision":"9a7563b20e22125945638276140dbc0e","url":"docs/tags/co-drone-edu/index.html"},{"revision":"c0a12c4d3e2c8e497852d6321a631e87","url":"docs/tags/index.html"},{"revision":"b67962f92329f9ffe2e6504b50e56671","url":"docs/tags/robolink/index.html"},{"revision":"0b5b3aedec2db6ff81b32d930222f82b","url":"docs/Zumi/index.html"},{"revision":"01b466f7b6545af5b0288aaa6144c0d6","url":"index.html"},{"revision":"0ea6b60f448a6add06ce5245f93cb3b0","url":"lunr-index-1688625589585.json"},{"revision":"0ea6b60f448a6add06ce5245f93cb3b0","url":"lunr-index.json"},{"revision":"25eb377387c9263d14ab4102c34983e5","url":"manifest.json"},{"revision":"afd452402766d4d1b34190e8827915e7","url":"markdown-page/index.html"},{"revision":"8318191e085247622d8b96b7f8d644bb","url":"search-doc-1688625589585.json"},{"revision":"8318191e085247622d8b96b7f8d644bb","url":"search-doc.json"},{"revision":"4440f0a8b4a6e6aa77f36a07c38f5141","url":"assets/images/main_background-6e19366b2e07b2083ef24f6062986b94.png"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"4343e07bf942aefb5f334501958fbc0e","url":"img/favicon.ico"},{"revision":"70758cf026b374464ca8f3db8a4ec82f","url":"img/icons/rblk_favicon-32x32.png"},{"revision":"9afe0e07eb61f5a654266a0a5f319e16","url":"img/icons/rblk_favicon-android-chrome-128x128.png"},{"revision":"0016cf952f7e1c671c2396fbd56b3d06","url":"img/icons/rblk_favicon-android-chrome-144x144.png"},{"revision":"98e5daa3c2dbfbe4f2c42c20ec235226","url":"img/icons/rblk_favicon-android-chrome-152x152.png"},{"revision":"ede8bacea1444f89a191bf69b526e2b9","url":"img/icons/rblk_favicon-android-chrome-192x192.png"},{"revision":"5dacaa8fa937429443c8ecbac710523b","url":"img/icons/rblk_favicon-android-chrome-384x384.png"},{"revision":"b920c6e053066daba761c76a62bf1942","url":"img/icons/rblk_favicon-android-chrome-512X512.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/icons/rblk_favicon-android-chrome-72x72.png"},{"revision":"5a93e254d94fd8bb188cd92b4f2eeb00","url":"img/icons/rblk_favicon-android-chrome-96x96.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"4440f0a8b4a6e6aa77f36a07c38f5141","url":"img/main_background.png"},{"revision":"a5a176cb4c0c00a90a3d7f1cfe673a72","url":"img/R-docs-logo.png"},{"revision":"1091a4350893e64760788168876c9908","url":"img/R-footer-logo.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();