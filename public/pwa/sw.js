if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let n={};const r=e=>s(e,t),p={module:{uri:t},exports:n,require:r};i[t]=Promise.all(a.map((e=>p[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"32205cbd6e5d1081b48e1084ef0faab4"},{url:"/_next/static/chunks/1161-04277dece2822a43.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/1229-38a8fe21b4d42483.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/1280-0fb0efeda47b9ade.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/1365-3b9e0f14fefae7f5.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/1517-8c3e3971bdfd90c6.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/1750.9ed8f41cd51fb2f4.js",revision:"9ed8f41cd51fb2f4"},{url:"/_next/static/chunks/1902-7c92973f6b77f2c7.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/2161-0692d8dcbbf378e9.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/2211.e7512e450dc16b1e.js",revision:"e7512e450dc16b1e"},{url:"/_next/static/chunks/2657-17037f8de3ef4423.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/3143-dc76479b2dc83d42.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/3165-fbadc48df91abbe1.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/3233-226a74078cbc6397.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/3545.eebef9ed39416d4f.js",revision:"eebef9ed39416d4f"},{url:"/_next/static/chunks/3839-ef11eb159c84f4a7.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/3948-c26278146ec51f54.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/4090-45cf788b58ba222b.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/4110.e2c4d9ec637eb6ea.js",revision:"e2c4d9ec637eb6ea"},{url:"/_next/static/chunks/4449-a52eb726253db081.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/4839-3e60b67c11e5fcc9.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/4845-1b1a569523db5446.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/4bd1b696-22372c3c809deecc.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/5037-d80cbc3c1fec5115.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/5318-7c5ebd6c2f03d5c8.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/700.56c8267a0fbe4357.js",revision:"56c8267a0fbe4357"},{url:"/_next/static/chunks/7421-6d957bf973d02a58.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/7527-61dfe23c708a818f.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/7959-d92feadf47d93cbe.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/8529.9c3771ca415eb89a.js",revision:"9c3771ca415eb89a"},{url:"/_next/static/chunks/8625-34b1ada445b1f1b5.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/8875-e4ecf1419cd8b3b8.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/980-7eaeb3f874249dda.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/%5B...not-found%5D/layout-43bcd9b0050fa85f.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/%5B...not-found%5D/page-ea92efdb159c2687.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(auth)/auth/layout-6b79803e57d4de1e.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(auth)/auth/login/page-dac6be847d52cbb7.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(auth)/auth/registration/page-9fe81bd396855ac0.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/candles/%5Bid%5D/page-01aab97b7b1f8070.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/candles/create/page-a0b2e2aa4554b3f3.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/candles/layout-8a469620ad6744b8.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/candles/page-9c6860db263e8988.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/category/layout-6ccfa279e87ed280.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/category/page-687c1d3b919dd2ca.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/colors/create/page-f23f10719b8bcf94.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/colors/page-dde15c3d197accb0.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/layout-d855b76b789240b4.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/orders/layout-76d3f035a9b486b4.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/orders/page-f843df3f060d0676.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/admin/page-0e005048d8fde890.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/layout-a81f422e156f7aba.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/order/layout-c71876d4fa9cdf3a.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(private)/order/page-7cbdd237d95b2c56.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/catalog/%5Bid%5D/page-5e632e8489aca157.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/catalog/page-308ff36414718afd.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/favorites/page-14f513bc1a3ca42f.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/layout-ac48738b2669a2d3.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/loading-29ce3c879a05e9c8.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/page-f95c699c5e96b488.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/(public)/thanks/page-0310ca5c23f3a23b.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/_not-found/page-f70fe925c9a3eb69.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/app/layout-666a7a125c7c1532.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/framework-f6702087ccb9a2ef.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/main-app-378e6c460ac9abe6.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/main-d19cbcffcba1ef53.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/pages/_app-00b41aece417ee52.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/pages/_error-6b43ce36a8d09a61.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-9e910df7fcb9cd49.js",revision:"eCDMppr9bmAiieExKqiZI"},{url:"/_next/static/css/15a460f12b20e8b4.css",revision:"15a460f12b20e8b4"},{url:"/_next/static/css/37566d56ba91bc1e.css",revision:"37566d56ba91bc1e"},{url:"/_next/static/css/4fddf60baa3fdde2.css",revision:"4fddf60baa3fdde2"},{url:"/_next/static/css/8c691e07536759ce.css",revision:"8c691e07536759ce"},{url:"/_next/static/css/9495c002bf48cccd.css",revision:"9495c002bf48cccd"},{url:"/_next/static/css/f84a317ab5226af7.css",revision:"f84a317ab5226af7"},{url:"/_next/static/eCDMppr9bmAiieExKqiZI/_buildManifest.js",revision:"b994b8abf8df453d143ae29eeede95c0"},{url:"/_next/static/eCDMppr9bmAiieExKqiZI/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/286145886ce4e71f-s.woff2",revision:"50d075ea54dc4fcb163a656279b37236"},{url:"/_next/static/media/4109e698ed614358-s.woff2",revision:"c66f766ed3837aa13d9f0270f971a645"},{url:"/_next/static/media/7f68c83748a713fb-s.woff2",revision:"d7f2464eabb5a0d54ba7dc3caa05d18f"},{url:"/_next/static/media/99270eb41c047ded-s.woff2",revision:"f4445631bf02b356d8705c7dd16c76fb"},{url:"/_next/static/media/a5b040c7a70a39dd-s.p.woff2",revision:"d4d95af04b3f19cc867c1dfeb69fa108"},{url:"/_next/static/media/b126d9129ac2c50d-s.woff2",revision:"086725f4508259c1c6fc74032ac2e9b0"},{url:"/_next/static/media/b702e6a3977e37e4-s.woff2",revision:"ed4aeb5c1fbcc9731a100874d392b860"},{url:"/_next/static/media/bgCandle1.d74701b6.webp",revision:"d74701b6"},{url:"/_next/static/media/bgCandle1.d74701b6.webp",revision:"ec32dbc1eb0c19aa6e86c3a3549e1618"},{url:"/_next/static/media/bgCandle3.938f9108.webp",revision:"938f9108"},{url:"/_next/static/media/c0d59cecdec06816-s.woff2",revision:"4210331503cff542ed0e85c17896c0f9"},{url:"/_next/static/media/candle.e5cad272.webp",revision:"e201c05a8f2f179377743b61db3b18ed"},{url:"/_next/static/media/d9c457acd7adb2b9-s.woff2",revision:"a4b04bd3815c668dbb2fad3ff22c658a"},{url:"/_next/static/media/ecb58dafd4683223-s.p.woff2",revision:"91e2dd0ee3f88d8830f0f67131d17d76"},{url:"/candles_pwa_128.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/candles_pwa_256.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/candles_pwa_512.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/favicon.ico",revision:"2512cea0f299351e97a72a78c54c656b"},{url:"/pwa/sw.js",revision:"a4912fa9f642a4ac1252798f94fb7af6"},{url:"/pwa/workbox-1bb06f5e.js",revision:"5cd913a91fe368f785b783a35c9c5d42"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));