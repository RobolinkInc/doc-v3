(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"e0744434a915e103d1e217d6652d0aae","url":"404.html"},{"revision":"90919af245c85e54ed615f19e7bdafff","url":"assets/css/styles.eb2f7879.css"},{"revision":"52088cfe5bf7e6ad08c44e802c365830","url":"assets/js/02300d48.bf86eaf2.js"},{"revision":"e3e438a30762580c20f2eb772383644e","url":"assets/js/0508cc55.3580ec40.js"},{"revision":"bed63d76eb686cf6e38b87646a87df3e","url":"assets/js/07007199.02cefb61.js"},{"revision":"b69e7017758211f81bdfa5f4293dbe6b","url":"assets/js/092989d9.07155d32.js"},{"revision":"319a4ba3c02e61ae2808df7f36987e5d","url":"assets/js/0f311104.9523bfca.js"},{"revision":"fe71ff03ef4891bdf9e4dc17039af625","url":"assets/js/131.ddc57711.js"},{"revision":"f206cdfb3e71e4e22ebaf24e5e664fe0","url":"assets/js/158f0636.54f99cbb.js"},{"revision":"4a7bb60c0c2198d10574a0f8f825363d","url":"assets/js/17896441.c1a7eaf4.js"},{"revision":"9f88a6d9a97f656b95a5b839544cbaef","url":"assets/js/1f391b9e.efe75fcd.js"},{"revision":"ad7151c1d187ba34d7c038bc4463fe58","url":"assets/js/283.7bb5b329.js"},{"revision":"39246dc9eb29df9fd30677d9a18066a6","url":"assets/js/290.f0064c03.js"},{"revision":"3a5d661fbb724c6b219b1143328f705e","url":"assets/js/325.901d58ba.js"},{"revision":"e6933b961397a272836da0377e39960f","url":"assets/js/339.aa438608.js"},{"revision":"414d3a4b67dd2b9344beea245e741e54","url":"assets/js/343.0c71a0d3.js"},{"revision":"5376fb1dbe4072b4e35432c1b27f9062","url":"assets/js/393be207.822a2222.js"},{"revision":"85b071527763a8cda4826bfecd9e22fc","url":"assets/js/3fc6cfb8.f62aa800.js"},{"revision":"958caa0b7751ca2cdca52b91041cfc55","url":"assets/js/5837d240.0984bf17.js"},{"revision":"f066cbd3324395cb636a300aa4057a5d","url":"assets/js/5e95c892.419c0362.js"},{"revision":"4b97c0f39b35fcf9c12e049ec59908e4","url":"assets/js/617402dc.947e0af7.js"},{"revision":"e96c8c56ae783f2b2e233c30fdf2feb8","url":"assets/js/6570bb30.8e4ceda2.js"},{"revision":"21f0b0d0ded7e94d7aefb440bd3dc9bb","url":"assets/js/7246bb61.966729b6.js"},{"revision":"7a1d9277b060d78cc77a678afae668ee","url":"assets/js/74da6b32.ed1ef6b1.js"},{"revision":"fe849337ded6ba80bfc46437a5be4d40","url":"assets/js/772.7affcf1d.js"},{"revision":"53c02907d718bb0c52960315b0f8bc98","url":"assets/js/778ae53a.37a21687.js"},{"revision":"1d63aaede4e3a66ac11a38a80be98ef8","url":"assets/js/7eec636a.14fdbf6c.js"},{"revision":"80fdf2cd54befe9bfbc70880d7d9b593","url":"assets/js/878.9aa7539b.js"},{"revision":"f262fce852d2ddf78933cc766586d62a","url":"assets/js/8db091af.07a4e97c.js"},{"revision":"d681672882e8bd4db84e66dee24be5e8","url":"assets/js/935f2afb.8400c0f1.js"},{"revision":"21121bb22cb30c7bc05cd92050e8815d","url":"assets/js/943073d6.c7a78824.js"},{"revision":"171d07a9e15d2eeb7cd211368c9e8520","url":"assets/js/9709db02.c7efd957.js"},{"revision":"d95260446c7828728f8bcc5f388a24d7","url":"assets/js/a7bd4aaa.afb1270f.js"},{"revision":"b98c30d2c714be712a43edd649a4fd96","url":"assets/js/a8600a24.ff1ca260.js"},{"revision":"9725beb8aa9895b622fc24b6ac6447f3","url":"assets/js/a94703ab.1c75ff42.js"},{"revision":"b488285ec94c6fae1245d1a7051590bf","url":"assets/js/c4f5d8e4.3f0aa244.js"},{"revision":"7b86613b0d62be2ceb70caf9f918f3fb","url":"assets/js/c4f8873b.a96b4757.js"},{"revision":"6c13412d53c8a8b42725191b5615ccf5","url":"assets/js/c5f764e0.11180e90.js"},{"revision":"4f5ff8cb3dd4700885da803b36ddf8aa","url":"assets/js/d6d1f361.da354310.js"},{"revision":"1ffaf02d063c351aecb41faf0e4092c6","url":"assets/js/db48e978.ac3a199f.js"},{"revision":"316108c4abe0856070f792cbd2452de1","url":"assets/js/ed9001f9.5156f795.js"},{"revision":"a9a18d76ed002a151cfa1a632b03de49","url":"assets/js/ef3c2eba.1548a469.js"},{"revision":"c8294bcb5c72ea037b4661ef0956e7fa","url":"assets/js/main.890597c5.js"},{"revision":"1a4602806c2528f0050f0bd36724d446","url":"assets/js/runtime~main.1cd04cbb.js"},{"revision":"7e13c3a56b590f2e4c8b5c12390915c8","url":"custom.js"},{"revision":"f08c23a3724621f72485babb2931e35c","url":"docs/CoDroneEDU/Blockly/index.html"},{"revision":"8f1b0c9a495a61572483c2d75b7b321a","url":"docs/CoDroneEDU/Blockly/page1/index.html"},{"revision":"f6e16d14afa4b1becde8aa4235af35df","url":"docs/CoDroneEDU/Blockly/page2/index.html"},{"revision":"f0a666d9b85ba059682ebdf1fe41dfdf","url":"docs/CoDroneEDU/Blockly/page3/index.html"},{"revision":"565a601de7c8a4b249a236ead167d67e","url":"docs/CoDroneEDU/Documents/index.html"},{"revision":"f93d43690fd84e0598b68aca7aaa9b18","url":"docs/CoDroneEDU/Documents/page1/index.html"},{"revision":"b712a6585dc286a37801897e1b5fe48e","url":"docs/CoDroneEDU/Documents/page2/index.html"},{"revision":"afe835be6e41a467210bb4962a48e753","url":"docs/CoDroneEDU/Documents/page3/index.html"},{"revision":"ece5c43639468daf2df6f78ac3b7efcc","url":"docs/CoDroneEDU/Documents/page4/index.html"},{"revision":"3ba8f2107f485af940547f0c49fe05d8","url":"docs/CoDroneEDU/Documents/page5/index.html"},{"revision":"93570a13d7521877b45c06a8a440465f","url":"docs/CoDroneEDU/index.html"},{"revision":"633fac142a31f565b37d6a8e57b391f1","url":"docs/CoDroneEDU/Python/index.html"},{"revision":"364af95cfdc5de205dfab14e1da82688","url":"docs/CoDroneEDU/Python/page1/index.html"},{"revision":"3ece97c9c389928b826bc9df2b110614","url":"docs/CoDroneEDU/Python/page2/index.html"},{"revision":"60545f7497a53b4c7e0f572789155a50","url":"docs/CoDroneEDU/Python/page3/index.html"},{"revision":"8f3c315371cf1d76365d422a24123cf1","url":"docs/CoDroneEDU/Python/page4/index.html"},{"revision":"a1499ca8799caa334d57ef3f6d054663","url":"docs/CoDroneMini/index.html"},{"revision":"a3a1dc9d7fcaf90efdbed18bf7e0afb5","url":"docs/CoDroneMini/TestMini/index.html"},{"revision":"63c732af71e16fda8152020169d272ab","url":"docs/CoDronePro_Lite/index.html"},{"revision":"c358d03b1ea6bd325f105ab04bb09047","url":"docs/CoDronePro_Lite/TestPro_Lite/index.html"},{"revision":"5295dba9dc1d1aa12f4bf3b6522228ea","url":"docs/Zumi/index.html"},{"revision":"c610cccbc130ba8efb21e107cc560773","url":"docs/Zumi/TestZumi/index.html"},{"revision":"c2833c8eb09cb2b72b41cb769cc417dc","url":"index.html"},{"revision":"9b5eef2a3c9497514393df933827831b","url":"lunr-index-1704314138183.json"},{"revision":"9b5eef2a3c9497514393df933827831b","url":"lunr-index.json"},{"revision":"25eb377387c9263d14ab4102c34983e5","url":"manifest.json"},{"revision":"7c26bf3bdaeb1146d0da0a8062aaa201","url":"markdown-page/index.html"},{"revision":"b49c0d73b1f6e1966c04a4a2e1fb9416","url":"search-doc-1704314138183.json"},{"revision":"b49c0d73b1f6e1966c04a4a2e1fb9416","url":"search-doc.json"},{"revision":"cb1d4c699bda898f1b0162ef593df2d8","url":"assets/images/889-compliance-statement-icon-5c133d1fdaad696081f1527e2c8fd2dc.png"},{"revision":"1394aa1e3698775f234ed3061b606911","url":"assets/images/Blockly-logo-9748e65a1f5c6e68edf4984f05a8c901.png"},{"revision":"e2cc083cc79791b96d26547779786ca7","url":"assets/images/doc-app-c2cd6cec7e21d6c2d4da9e3537ec5d82.png"},{"revision":"35de4f49b449a5cf16bd86ef5f49f1d4","url":"assets/images/document-main-icon-049f64a7270e2d3ba92cdaf4998d8c08.png"},{"revision":"8337f1373213b2c18f36d8bf3f76ad80","url":"assets/images/pdf-folder-icon-f6d22f90a25fe70732c304a7088fea49.png"},{"revision":"2e2bfc5ee7cc8251f67e337765f19c83","url":"assets/images/Python-logo-d46ac419e049a12bd39b0c34cf45dc7e.png"},{"revision":"54ec2e0a6e67d6a3b4971e8d47b306e1","url":"assets/images/python-update-icon-64289e1b24a9e0490b5e44f6cce42fd5.png"},{"revision":"447ce5b959b671d585f891759e9dcbcb","url":"assets/images/safety-guide-icon-9299473a972b3010fcf4302fff3ac80b.png"},{"revision":"8d424e0de56b06d802e78d08190bba9f","url":"assets/images/set-up-9b850e724c53d00312ed2049533a1654.png"},{"revision":"a9c51a67fcf896dbc1431a3c060db277","url":"assets/images/what-is-icon-bc9027046f4b8a76ef2c1664f6f4e3a5.png"},{"revision":"cb1d4c699bda898f1b0162ef593df2d8","url":"img/CDE/889-compliance-statement-icon.png"},{"revision":"c6cb105136c1919b54550cf0b3dca448","url":"img/CDE/app-docu-icon.png"},{"revision":"1394aa1e3698775f234ed3061b606911","url":"img/CDE/Blockly-logo.png"},{"revision":"02cb17bfd6db15e5a420dbb6c24428b0","url":"img/CDE/device-requirements.png"},{"revision":"e2cc083cc79791b96d26547779786ca7","url":"img/CDE/doc-app.png"},{"revision":"35de4f49b449a5cf16bd86ef5f49f1d4","url":"img/CDE/document-main-icon.png"},{"revision":"0c207188c6ea23eb26fb898c63303c3f","url":"img/CDE/drone_remote-3.png"},{"revision":"2e6f720c5a75305160a4a21eccbf1832","url":"img/CDE/firmware-icon.png"},{"revision":"f44c7a1a1ab2ec87c71769465a681ed7","url":"img/CDE/land.png"},{"revision":"c436e60941b8d704e0d991d27fe2eae6","url":"img/CDE/pdf-doc-icon.png"},{"revision":"8337f1373213b2c18f36d8bf3f76ad80","url":"img/CDE/pdf-folder-icon.png"},{"revision":"2e2bfc5ee7cc8251f67e337765f19c83","url":"img/CDE/Python-logo.png"},{"revision":"54ec2e0a6e67d6a3b4971e8d47b306e1","url":"img/CDE/python-update-icon.png"},{"revision":"447ce5b959b671d585f891759e9dcbcb","url":"img/CDE/safety-guide-icon.png"},{"revision":"8d424e0de56b06d802e78d08190bba9f","url":"img/CDE/set-up.png"},{"revision":"9c6733f4bb79e5030357a78bd6e4c5d2","url":"img/CDE/take_off_ex.png"},{"revision":"9bb56c4042d8b231d107cd0882d8eee8","url":"img/CDE/take_off.png"},{"revision":"a9c51a67fcf896dbc1431a3c060db277","url":"img/CDE/what-is-icon.png"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/favicon.ico"},{"revision":"70758cf026b374464ca8f3db8a4ec82f","url":"img/icons/rblk_favicon-32x32.png"},{"revision":"9afe0e07eb61f5a654266a0a5f319e16","url":"img/icons/rblk_favicon-android-chrome-128x128.png"},{"revision":"0016cf952f7e1c671c2396fbd56b3d06","url":"img/icons/rblk_favicon-android-chrome-144x144.png"},{"revision":"98e5daa3c2dbfbe4f2c42c20ec235226","url":"img/icons/rblk_favicon-android-chrome-152x152.png"},{"revision":"ede8bacea1444f89a191bf69b526e2b9","url":"img/icons/rblk_favicon-android-chrome-192x192.png"},{"revision":"5dacaa8fa937429443c8ecbac710523b","url":"img/icons/rblk_favicon-android-chrome-384x384.png"},{"revision":"b920c6e053066daba761c76a62bf1942","url":"img/icons/rblk_favicon-android-chrome-512X512.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/icons/rblk_favicon-android-chrome-72x72.png"},{"revision":"5a93e254d94fd8bb188cd92b4f2eeb00","url":"img/icons/rblk_favicon-android-chrome-96x96.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"bcf5f7b98f0c632c8cad82e27a7f73e2","url":"img/main/after_vector.png"},{"revision":"dbdbfefc76619cb3ed1091fd3ac1336c","url":"img/main/before_vector.png"},{"revision":"149bf54107bc8f9041e4be18cec32720","url":"img/main/CDE_img.png"},{"revision":"976526a791e115f2ae0b028ffba41b43","url":"img/main/CDM_img.png"},{"revision":"c7152a01a42ae7d5ab83bc89725d6388","url":"img/main/CDP_img.png"},{"revision":"f30d6b4329fdbd8e3755d1bfe987061b","url":"img/main/dark_vector.png"},{"revision":"ed049d444047f4896f5672f3ca36ed71","url":"img/main/white_vector.png"},{"revision":"8a597a1523dac978bc868fb800c4b1c5","url":"img/main/Zumi_img.png"},{"revision":"db2d8a6097ba2c3128d477f6615a7f56","url":"img/moon_dark.png"},{"revision":"fb3eca256f955ec7987fa63ab97ad693","url":"img/R-docs-logo.png"},{"revision":"78b264dd08cebb50a1534cdf8c809880","url":"img/R-footer-logo.png"},{"revision":"0038e66ed3078e684390927ace62568f","url":"img/R-footer-logo.svg"},{"revision":"774c38678ba1e3423e9bff92dff29747","url":"img/sun_light.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"a1d77c9c8493112f933aaf70c017f817","url":"assets/fonts/Cabin-Regular-cad64ef2209de4aec6e4ce83cbb31675.ttf"},{"revision":"a1d77c9c8493112f933aaf70c017f817","url":"fonts/Cabin-Regular.ttf"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();