(()=>{"use strict";var e={913:()=>{try{self["workbox:core:6.6.0"]&&_()}catch(e){}},977:()=>{try{self["workbox:precaching:6.6.0"]&&_()}catch(e){}},80:()=>{try{self["workbox:routing:6.6.0"]&&_()}catch(e){}},873:()=>{try{self["workbox:strategies:6.6.0"]&&_()}catch(e){}}},t={};function s(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,s),i.exports}(()=>{s(913);const e=(e,...t)=>{let s=e;return t.length>0&&(s+=` :: ${JSON.stringify(t)}`),s};class t extends Error{constructor(t,s){super(e(t,s)),this.name=t,this.details=s}}const a={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[a.prefix,e,a.suffix].filter((e=>e&&e.length>0)).join("-"),i=e=>e||n(a.precache),r=e=>e||n(a.runtime);function c(e,t){const s=t();return e.waitUntil(s),s}s(977);function o(e){if(!e)throw new t("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:s,url:a}=e;if(!a)throw new t("add-to-cache-list-unexpected-type",{entry:e});if(!s){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const n=new URL(a,location.href),i=new URL(a,location.href);return n.searchParams.set("__WB_REVISION__",s),{cacheKey:n.href,url:i.href}}class h{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:t})=>{t&&(t.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:t,cachedResponse:s})=>{if("install"===e.type&&t&&t.originalRequest&&t.originalRequest instanceof Request){const e=t.originalRequest.url;s?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return s}}}class l{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:t})=>{const s=(null==t?void 0:t.cacheKey)||this._precacheController.getCacheKeyForURL(e.url);return s?new Request(s,{headers:e.headers}):e},this._precacheController=e}}let u;async function f(e,s){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new t("cross-origin-copy-response",{origin:a});const n=e.clone(),i={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=s?s(i):i,c=function(){if(void 0===u){const e=new Response("");if("body"in e)try{new Response(e.body),u=!0}catch(e){u=!1}u=!1}return u}()?n.body:await n.blob();return new Response(c,r)}function d(e,t){const s=new URL(e);for(const e of t)s.searchParams.delete(e);return s.href}class p{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}const g=new Set;s(873);function y(e){return"string"==typeof e?new Request(e):e}class w{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new p,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:s}=this;let a=y(e);if("navigate"===a.mode&&s instanceof FetchEvent&&s.preloadResponse){const e=await s.preloadResponse;if(e)return e}const n=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:s})}catch(e){if(e instanceof Error)throw new t("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this._strategy.fetchOptions);for(const t of this.iterateCallbacks("fetchDidSucceed"))e=await t({event:s,request:i,response:e});return e}catch(e){throw n&&await this.runCallbacks("fetchDidFail",{error:e,event:s,originalRequest:n.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),s=t.clone();return this.waitUntil(this.cachePut(e,s)),t}async cacheMatch(e){const t=y(e);let s;const{cacheName:a,matchOptions:n}=this._strategy,i=await this.getCacheKey(t,"read"),r=Object.assign(Object.assign({},n),{cacheName:a});s=await caches.match(i,r);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))s=await e({cacheName:a,matchOptions:n,cachedResponse:s,request:i,event:this.event})||void 0;return s}async cachePut(e,s){const a=y(e);var n;await(n=0,new Promise((e=>setTimeout(e,n))));const i=await this.getCacheKey(a,"write");if(!s)throw new t("cache-put-with-no-response",{url:(r=i.url,new URL(String(r),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var r;const c=await this._ensureResponseSafeToCache(s);if(!c)return!1;const{cacheName:o,matchOptions:h}=this._strategy,l=await self.caches.open(o),u=this.hasCallback("cacheDidUpdate"),f=u?await async function(e,t,s,a){const n=d(t.url,s);if(t.url===n)return e.match(t,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),r=await e.keys(t,i);for(const t of r)if(n===d(t.url,s))return e.match(t,a)}(l,i.clone(),["__WB_REVISION__"],h):null;try{await l.put(i,u?c.clone():c)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of g)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:f,newResponse:c.clone(),request:i,event:this.event});return!0}async getCacheKey(e,t){const s=`${e.url} | ${t}`;if(!this._cacheKeys[s]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=y(await e({mode:t,request:a,event:this.event,params:this.params}));this._cacheKeys[s]=a}return this._cacheKeys[s]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const s of this.iterateCallbacks(e))await s(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const s=this._pluginStateMap.get(t),a=a=>{const n=Object.assign(Object.assign({},a),{state:s});return t[e](n)};yield a}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let t=e,s=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,s=!0,!t)break;return s||t&&200!==t.status&&(t=void 0),t}}class _{constructor(e={}){this.cacheName=r(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,s="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,n=new w(this,{event:t,request:s,params:a}),i=this._getResponse(n,s,t);return[i,this._awaitComplete(i,n,s,t)]}async _getResponse(e,s,a){let n;await e.runCallbacks("handlerWillStart",{event:a,request:s});try{if(n=await this._handle(s,e),!n||"error"===n.type)throw new t("no-response",{url:s.url})}catch(t){if(t instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(n=await i({error:t,event:a,request:s}),n)break;if(!n)throw t}for(const t of e.iterateCallbacks("handlerWillRespond"))n=await t({event:a,request:s,response:n});return n}async _awaitComplete(e,t,s,a){let n,i;try{n=await e}catch(i){}try{await t.runCallbacks("handlerDidRespond",{event:a,request:s,response:n}),await t.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await t.runCallbacks("handlerDidComplete",{event:a,request:s,response:n,error:i}),t.destroy(),i)throw i}}class v extends _{constructor(e={}){e.cacheName=i(e.cacheName),super(e),this._fallbackToNetwork=!1!==e.fallbackToNetwork,this.plugins.push(v.copyRedirectedCacheableResponsesPlugin)}async _handle(e,t){const s=await t.cacheMatch(e);return s||(t.event&&"install"===t.event.type?await this._handleInstall(e,t):await this._handleFetch(e,t))}async _handleFetch(e,s){let a;const n=s.params||{};if(!this._fallbackToNetwork)throw new t("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{0;const t=n.integrity,i=e.integrity,r=!i||i===t;if(a=await s.fetch(new Request(e,{integrity:"no-cors"!==e.mode?i||t:void 0})),t&&r&&"no-cors"!==e.mode){this._useDefaultCacheabilityPluginIfNeeded();await s.cachePut(e,a.clone());0}}return a}async _handleInstall(e,s){this._useDefaultCacheabilityPluginIfNeeded();const a=await s.fetch(e);if(!await s.cachePut(e,a.clone()))throw new t("bad-precaching-response",{url:e.url,status:a.status});return a}_useDefaultCacheabilityPluginIfNeeded(){let e=null,t=0;for(const[s,a]of this.plugins.entries())a!==v.copyRedirectedCacheableResponsesPlugin&&(a===v.defaultPrecacheCacheabilityPlugin&&(e=s),a.cacheWillUpdate&&t++);0===t?this.plugins.push(v.defaultPrecacheCacheabilityPlugin):t>1&&null!==e&&this.plugins.splice(e,1)}}v.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},v.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await f(e):e};class m{constructor({cacheName:e,plugins:t=[],fallbackToNetwork:s=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new v({cacheName:i(e),plugins:[...t,new l({precacheController:this})],fallbackToNetwork:s}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const s=[];for(const a of e){"string"==typeof a?s.push(a):a&&void 0===a.revision&&s.push(a.url);const{cacheKey:e,url:n}=o(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(n)&&this._urlsToCacheKeys.get(n)!==e)throw new t("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(n),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==a.integrity)throw new t("add-to-cache-list-conflicting-integrities",{url:n});this._cacheKeysToIntegrities.set(e,a.integrity)}if(this._urlsToCacheKeys.set(n,e),this._urlsToCacheModes.set(n,i),s.length>0){const e=`Workbox is precaching URLs without revision info: ${s.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return c(e,(async()=>{const t=new h;this.strategy.plugins.push(t);for(const[t,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),n=this._urlsToCacheModes.get(t),i=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:i,event:e}))}const{updatedURLs:s,notUpdatedURLs:a}=t;return{updatedURLs:s,notUpdatedURLs:a}}))}activate(e){return c(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),t=await e.keys(),s=new Set(this._urlsToCacheKeys.values()),a=[];for(const n of t)s.has(n.url)||(await e.delete(n),a.push(n.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const t=e instanceof Request?e.url:e,s=this.getCacheKeyForURL(t);if(s){return(await self.caches.open(this.strategy.cacheName)).match(s)}}createHandlerBoundToURL(e){const s=this.getCacheKeyForURL(e);if(!s)throw new t("non-precached-url",{url:e});return t=>(t.request=new Request(e),t.params=Object.assign({cacheKey:s},t.params),this.strategy.handle(t))}}s(80);(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"e068dc230375491d7fdd7aaffd9614f7","url":"404.html"},{"revision":"f7b28c3c3404e311def19d58058b46dd","url":"assets/css/styles.58b66fad.css"},{"revision":"f993e280404e7f581f82b361b470e42f","url":"assets/js/02300d48.abb8b56c.js"},{"revision":"64913597f48e722e8286567f5f42f2a2","url":"assets/js/0508cc55.fb322b6b.js"},{"revision":"bcf0f31f0d0a1de2154ee9bcadc5d499","url":"assets/js/07007199.9deacc6f.js"},{"revision":"35f9deb477c038927d18315e4be00683","url":"assets/js/092989d9.279cc4b6.js"},{"revision":"eb1f415db621c129d739b91adbe5e8ec","url":"assets/js/0f311104.d2775b05.js"},{"revision":"fe71ff03ef4891bdf9e4dc17039af625","url":"assets/js/131.ddc57711.js"},{"revision":"a1b4039a71e1f23898170ca81bdbdf01","url":"assets/js/158f0636.79d4bbd7.js"},{"revision":"604e4f5e87f49372890ab0e2e55bf185","url":"assets/js/17896441.cac5855f.js"},{"revision":"d0b4674ee2f7da80b00ed2c2344a7e57","url":"assets/js/1f391b9e.be51639d.js"},{"revision":"ad7151c1d187ba34d7c038bc4463fe58","url":"assets/js/283.7bb5b329.js"},{"revision":"39246dc9eb29df9fd30677d9a18066a6","url":"assets/js/290.f0064c03.js"},{"revision":"e6933b961397a272836da0377e39960f","url":"assets/js/339.aa438608.js"},{"revision":"414d3a4b67dd2b9344beea245e741e54","url":"assets/js/343.0c71a0d3.js"},{"revision":"0e7068c728d5804cc8d48a58e37dea79","url":"assets/js/393be207.1b9eedf9.js"},{"revision":"2ad1fbe4339dc6047735166a222c1f79","url":"assets/js/3fc6cfb8.7dbb028f.js"},{"revision":"2884ea507519e5dde0128607d8488381","url":"assets/js/5837d240.a14a1cf0.js"},{"revision":"f066cbd3324395cb636a300aa4057a5d","url":"assets/js/5e95c892.419c0362.js"},{"revision":"63e9b3fbf889b772e58b80d9ae0ba573","url":"assets/js/617402dc.95f89937.js"},{"revision":"9b686b09953fa0cb084b8ea210d32a8c","url":"assets/js/6570bb30.45739bb3.js"},{"revision":"2d9f4af856adb8ef5baafaa15fbac68f","url":"assets/js/7246bb61.2d28c437.js"},{"revision":"c7cd8b9431cc14e3dfc728c9e49dc551","url":"assets/js/74da6b32.f241ed73.js"},{"revision":"fe849337ded6ba80bfc46437a5be4d40","url":"assets/js/772.7affcf1d.js"},{"revision":"ff6bc0ab59f75d19b4d596bab21b39a9","url":"assets/js/778ae53a.dbf0d0a4.js"},{"revision":"3917318135c9a52b067d9d1f2d8beffe","url":"assets/js/7eec636a.12525a38.js"},{"revision":"80fdf2cd54befe9bfbc70880d7d9b593","url":"assets/js/878.9aa7539b.js"},{"revision":"f262fce852d2ddf78933cc766586d62a","url":"assets/js/8db091af.07a4e97c.js"},{"revision":"bd58cffb8cc3899205e035ded10b7bef","url":"assets/js/909.6a3b5c5b.js"},{"revision":"e9b2f3a09fdfc603d12df9a85dc867b8","url":"assets/js/935f2afb.f5baf20f.js"},{"revision":"0b27847b3947721af6328497384e8377","url":"assets/js/943073d6.eb7c0613.js"},{"revision":"816e115beb36b8a7cbf9ca5f32c49472","url":"assets/js/9709db02.847682b2.js"},{"revision":"d95260446c7828728f8bcc5f388a24d7","url":"assets/js/a7bd4aaa.afb1270f.js"},{"revision":"a5fa9738e0ccd00aa2748854431e201c","url":"assets/js/a8600a24.fe03de3c.js"},{"revision":"9725beb8aa9895b622fc24b6ac6447f3","url":"assets/js/a94703ab.1c75ff42.js"},{"revision":"b488285ec94c6fae1245d1a7051590bf","url":"assets/js/c4f5d8e4.3f0aa244.js"},{"revision":"69bab8fc1f5b97789418aac966739bf1","url":"assets/js/c4f8873b.24579e9e.js"},{"revision":"555473d3b24957033edf3e5b57c50266","url":"assets/js/c5f764e0.caa911a8.js"},{"revision":"f5ae4517461aa6cca5feb4419d71df52","url":"assets/js/d6d1f361.3362e7d4.js"},{"revision":"921bed5b9582d6b2756699ea1ed66dfb","url":"assets/js/db48e978.021741fe.js"},{"revision":"e809ea823b87db26ad7232b0c42bbc21","url":"assets/js/ed9001f9.08a4c74c.js"},{"revision":"a9a18d76ed002a151cfa1a632b03de49","url":"assets/js/ef3c2eba.1548a469.js"},{"revision":"325ab83236a33331f5b7368c35ac1270","url":"assets/js/main.f5ce1834.js"},{"revision":"f2b5182fc74468e451d7e7ecfe807705","url":"assets/js/runtime~main.637bb479.js"},{"revision":"143c7c978ba3559e83325dbf0a58b850","url":"custom.js"},{"revision":"14723023fc918d430a5cff2963e1c452","url":"docs/CoDroneEDU/Blockly/index.html"},{"revision":"d119954adf38a757560ac91e2fb58531","url":"docs/CoDroneEDU/Blockly/page1/index.html"},{"revision":"7a1a773ec45bcd57b63ee20420b32772","url":"docs/CoDroneEDU/Blockly/page2/index.html"},{"revision":"abfe961112868aaccf2897de62ec6e9f","url":"docs/CoDroneEDU/Blockly/page3/index.html"},{"revision":"2453a4840a7127fba07e703fa5b8e733","url":"docs/CoDroneEDU/Documents/index.html"},{"revision":"a0d42e4a74d6b6dd4865c27b4ffcda45","url":"docs/CoDroneEDU/Documents/page1/index.html"},{"revision":"3df5ab52510fc865323ac1f5721c0546","url":"docs/CoDroneEDU/Documents/page2/index.html"},{"revision":"e2351ed0ccf1c1520aa24916380de98d","url":"docs/CoDroneEDU/Documents/page3/index.html"},{"revision":"7af39388b00b94a1194713919a41ae43","url":"docs/CoDroneEDU/Documents/page4/index.html"},{"revision":"4ae966218d086b554def69adbb9af10d","url":"docs/CoDroneEDU/Documents/page5/index.html"},{"revision":"3a1226471607723f8bba8fd79dec3816","url":"docs/CoDroneEDU/index.html"},{"revision":"b008c7add8cf588b408ce95a61bed257","url":"docs/CoDroneEDU/Python/index.html"},{"revision":"2fbf7e782ef92258c80afcf2a7cdd6d6","url":"docs/CoDroneEDU/Python/page1/index.html"},{"revision":"d003c5d6dc219838336f2100e0da9f01","url":"docs/CoDroneEDU/Python/page2/index.html"},{"revision":"7d71ab3f1d0cfa4b281fe3562dea1cf0","url":"docs/CoDroneEDU/Python/page3/index.html"},{"revision":"074e3ab0e839c3ab0f5ef4201a7474e5","url":"docs/CoDroneEDU/Python/page4/index.html"},{"revision":"44ddc8f0004b1461aaf75035bc86e698","url":"docs/CoDroneMini/index.html"},{"revision":"cc647ab79238f5637b349cf38df178da","url":"docs/CoDroneMini/TestMini/index.html"},{"revision":"6c1d7c9aafc2af5947b4bfe3b4c207b0","url":"docs/CoDronePro_Lite/index.html"},{"revision":"8e3a11219123af2d1f2441228c9a2637","url":"docs/CoDronePro_Lite/TestPro_Lite/index.html"},{"revision":"0eda1e4ea6be9d0717e3cacfa2f7ccb6","url":"docs/Zumi/index.html"},{"revision":"790db47d478fe7e21a5e0bd92217c2a9","url":"docs/Zumi/TestZumi/index.html"},{"revision":"b1c5a372e0b4f227ab0a8e0ec8c749d0","url":"index.html"},{"revision":"438f9ec892c80743c132fe3fae071ac1","url":"lunr-index-1703119289848.json"},{"revision":"438f9ec892c80743c132fe3fae071ac1","url":"lunr-index.json"},{"revision":"25eb377387c9263d14ab4102c34983e5","url":"manifest.json"},{"revision":"19c2f8a4f77914835b7987dfef19152a","url":"markdown-page/index.html"},{"revision":"fa664c9bf2186a42f7cb1a3e920327cc","url":"search-doc-1703119289848.json"},{"revision":"fa664c9bf2186a42f7cb1a3e920327cc","url":"search-doc.json"},{"revision":"cb1d4c699bda898f1b0162ef593df2d8","url":"assets/images/889-compliance-statement-icon-5c133d1fdaad696081f1527e2c8fd2dc.png"},{"revision":"1394aa1e3698775f234ed3061b606911","url":"assets/images/Blockly-logo-9748e65a1f5c6e68edf4984f05a8c901.png"},{"revision":"e2cc083cc79791b96d26547779786ca7","url":"assets/images/doc-app-c2cd6cec7e21d6c2d4da9e3537ec5d82.png"},{"revision":"35de4f49b449a5cf16bd86ef5f49f1d4","url":"assets/images/document-main-icon-049f64a7270e2d3ba92cdaf4998d8c08.png"},{"revision":"8337f1373213b2c18f36d8bf3f76ad80","url":"assets/images/pdf-folder-icon-f6d22f90a25fe70732c304a7088fea49.png"},{"revision":"2e2bfc5ee7cc8251f67e337765f19c83","url":"assets/images/Python-logo-d46ac419e049a12bd39b0c34cf45dc7e.png"},{"revision":"54ec2e0a6e67d6a3b4971e8d47b306e1","url":"assets/images/python-update-icon-64289e1b24a9e0490b5e44f6cce42fd5.png"},{"revision":"447ce5b959b671d585f891759e9dcbcb","url":"assets/images/safety-guide-icon-9299473a972b3010fcf4302fff3ac80b.png"},{"revision":"8d424e0de56b06d802e78d08190bba9f","url":"assets/images/set-up-9b850e724c53d00312ed2049533a1654.png"},{"revision":"a9c51a67fcf896dbc1431a3c060db277","url":"assets/images/what-is-icon-bc9027046f4b8a76ef2c1664f6f4e3a5.png"},{"revision":"cb1d4c699bda898f1b0162ef593df2d8","url":"img/CDE/889-compliance-statement-icon.png"},{"revision":"c6cb105136c1919b54550cf0b3dca448","url":"img/CDE/app-docu-icon.png"},{"revision":"1394aa1e3698775f234ed3061b606911","url":"img/CDE/Blockly-logo.png"},{"revision":"02cb17bfd6db15e5a420dbb6c24428b0","url":"img/CDE/device-requirements.png"},{"revision":"e2cc083cc79791b96d26547779786ca7","url":"img/CDE/doc-app.png"},{"revision":"35de4f49b449a5cf16bd86ef5f49f1d4","url":"img/CDE/document-main-icon.png"},{"revision":"0c207188c6ea23eb26fb898c63303c3f","url":"img/CDE/drone_remote-3.png"},{"revision":"2e6f720c5a75305160a4a21eccbf1832","url":"img/CDE/firmware-icon.png"},{"revision":"f44c7a1a1ab2ec87c71769465a681ed7","url":"img/CDE/land.png"},{"revision":"c436e60941b8d704e0d991d27fe2eae6","url":"img/CDE/pdf-doc-icon.png"},{"revision":"8337f1373213b2c18f36d8bf3f76ad80","url":"img/CDE/pdf-folder-icon.png"},{"revision":"2e2bfc5ee7cc8251f67e337765f19c83","url":"img/CDE/Python-logo.png"},{"revision":"54ec2e0a6e67d6a3b4971e8d47b306e1","url":"img/CDE/python-update-icon.png"},{"revision":"447ce5b959b671d585f891759e9dcbcb","url":"img/CDE/safety-guide-icon.png"},{"revision":"8d424e0de56b06d802e78d08190bba9f","url":"img/CDE/set-up.png"},{"revision":"9c6733f4bb79e5030357a78bd6e4c5d2","url":"img/CDE/take_off_ex.png"},{"revision":"9bb56c4042d8b231d107cd0882d8eee8","url":"img/CDE/take_off.png"},{"revision":"a9c51a67fcf896dbc1431a3c060db277","url":"img/CDE/what-is-icon.png"},{"revision":"000de4a48405bd21b7eec1abc07ede6c","url":"img/docusaurus-social-card.jpg"},{"revision":"7fa1a026116afe175cae818030d4ffc4","url":"img/docusaurus.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/favicon.ico"},{"revision":"70758cf026b374464ca8f3db8a4ec82f","url":"img/icons/rblk_favicon-32x32.png"},{"revision":"9afe0e07eb61f5a654266a0a5f319e16","url":"img/icons/rblk_favicon-android-chrome-128x128.png"},{"revision":"0016cf952f7e1c671c2396fbd56b3d06","url":"img/icons/rblk_favicon-android-chrome-144x144.png"},{"revision":"98e5daa3c2dbfbe4f2c42c20ec235226","url":"img/icons/rblk_favicon-android-chrome-152x152.png"},{"revision":"ede8bacea1444f89a191bf69b526e2b9","url":"img/icons/rblk_favicon-android-chrome-192x192.png"},{"revision":"5dacaa8fa937429443c8ecbac710523b","url":"img/icons/rblk_favicon-android-chrome-384x384.png"},{"revision":"b920c6e053066daba761c76a62bf1942","url":"img/icons/rblk_favicon-android-chrome-512X512.png"},{"revision":"af18b9d1148c60dd269fc5f5252f95b9","url":"img/icons/rblk_favicon-android-chrome-72x72.png"},{"revision":"5a93e254d94fd8bb188cd92b4f2eeb00","url":"img/icons/rblk_favicon-android-chrome-96x96.png"},{"revision":"aa4fa2cdc39d33f2ee3b8f245b6d30d9","url":"img/logo.svg"},{"revision":"bcf5f7b98f0c632c8cad82e27a7f73e2","url":"img/main/after_vector.png"},{"revision":"dbdbfefc76619cb3ed1091fd3ac1336c","url":"img/main/before_vector.png"},{"revision":"149bf54107bc8f9041e4be18cec32720","url":"img/main/CDE_img.png"},{"revision":"976526a791e115f2ae0b028ffba41b43","url":"img/main/CDM_img.png"},{"revision":"c7152a01a42ae7d5ab83bc89725d6388","url":"img/main/CDP_img.png"},{"revision":"f30d6b4329fdbd8e3755d1bfe987061b","url":"img/main/dark_vector.png"},{"revision":"ed049d444047f4896f5672f3ca36ed71","url":"img/main/white_vector.png"},{"revision":"8a597a1523dac978bc868fb800c4b1c5","url":"img/main/Zumi_img.png"},{"revision":"db2d8a6097ba2c3128d477f6615a7f56","url":"img/moon_dark.png"},{"revision":"fb3eca256f955ec7987fa63ab97ad693","url":"img/R-docs-logo.png"},{"revision":"78b264dd08cebb50a1534cdf8c809880","url":"img/R-footer-logo.png"},{"revision":"0038e66ed3078e684390927ace62568f","url":"img/R-footer-logo.svg"},{"revision":"774c38678ba1e3423e9bff92dff29747","url":"img/sun_light.png"},{"revision":"a6b83d7b4c3cf36cb21eb7a9721716dd","url":"img/undraw_docusaurus_mountain.svg"},{"revision":"b64ae8e3c10e5ff2ec85a653cfe6edf8","url":"img/undraw_docusaurus_react.svg"},{"revision":"8fa6e79a15c385d7b2dc4bb761a2e9e3","url":"img/undraw_docusaurus_tree.svg"},{"revision":"a1d77c9c8493112f933aaf70c017f817","url":"assets/fonts/Cabin-Regular-cad64ef2209de4aec6e4ce83cbb31675.ttf"},{"revision":"a1d77c9c8493112f933aaf70c017f817","url":"fonts/Cabin-Regular.ttf"}],s=new m({fallbackToNetwork:!0});e.offlineMode&&(s.addToCacheList(t),e.debug&&console.log("[Docusaurus-PWA][SW]: addToCacheList",{precacheManifest:t})),await async function(e){}(),self.addEventListener("install",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: install event",{event:t}),t.waitUntil(s.install(t))})),self.addEventListener("activate",(t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: activate event",{event:t}),t.waitUntil(s.activate(t))})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const a=t.request.url,n=function(e){const t=new URL(e,self.location.href);return t.origin!==self.location.origin?[]:(t.search="",t.hash="",[t.href,`${t.href}${t.pathname.endsWith("/")?"":"/"}index.html`])}(a);for(const i of n){const r=s.getCacheKeyForURL(i);if(r){const s=caches.match(r);e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:a,possibleURL:i,possibleURLs:n,cacheKey:r,cachedResponse:s}),t.respondWith(s);break}}}})),self.addEventListener("message",(async t=>{e.debug&&console.log("[Docusaurus-PWA][SW]: message event",{event:t});const s=t.data?.type;"SKIP_WAITING"===s&&self.skipWaiting()}))})()})()})();