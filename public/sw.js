if(!self.define){let e,t={};const s=(s,c)=>(s=new URL(s+".js",c).href,t[s]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=t,document.head.appendChild(e)}else e=s,importScripts(s),t()})).then((()=>{let e=t[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(t[i])return;let n={};const r=e=>s(e,i),u={module:{uri:i},exports:n,require:r};t[i]=Promise.all(c.map((e=>u[e]||r(e)))).then((e=>(a(...e),n)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZlyAo8ubCMXzcrTNet57t/_buildManifest.js",revision:"67d0e59cd6e798b967e97f78364e4cb6"},{url:"/_next/static/ZlyAo8ubCMXzcrTNet57t/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1240-d64d35f378b71140.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/131.eda3a7990be7d346.js",revision:"eda3a7990be7d346"},{url:"/_next/static/chunks/1328-07e5c8fa529f16e3.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/1355-593777341ba8222f.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/1462.076c738a97e6c0a7.js",revision:"076c738a97e6c0a7"},{url:"/_next/static/chunks/1765-527bbeb8f63222f5.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/2114-89a922eeb841239e.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/2513-e64be2654b05b6c6.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/2948.eb33e9befbee18ce.js",revision:"eb33e9befbee18ce"},{url:"/_next/static/chunks/3169-c0cdad4db0d8d298.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/3193-8ec1c23dec3096ba.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/31b59deb-c09cc91f7b8cf38c.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/3403.a059630acb47aeb0.js",revision:"a059630acb47aeb0"},{url:"/_next/static/chunks/3554.1af1912dc10226d6.js",revision:"1af1912dc10226d6"},{url:"/_next/static/chunks/3611-c7a3a79712e157d7.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/3756-2c187d374ea1e65c.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/4051-ec5118967e8ec681.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/406-d4052f8d1f80e914.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/4158-9b71b2c1aaf66f67.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/4883-8342470510106e3f.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/5639-f47a16f29dd20198.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/5760-16e2db257f63ad89.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/6233-0ab32622989acfdb.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/700-ff6da97776fba3d9.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/7424-7e9cda66ce4df443.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/7620.fa16fe639fb97b12.js",revision:"fa16fe639fb97b12"},{url:"/_next/static/chunks/8029-4a9beab831ba1d32.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/8104-ee61bf1ce37dd21d.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/8182-d4c834729d746605.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/8244.c3b9185fd396759e.js",revision:"c3b9185fd396759e"},{url:"/_next/static/chunks/827-f00be736ab0af135.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/9033-79827913112d8964.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/9252-aa1389941246dc72.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/9809.bf6789b8787cb93e.js",revision:"bf6789b8787cb93e"},{url:"/_next/static/chunks/9869-8502564ce1cf862f.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/%5B...not-found%5D/layout-7f20344e1402b684.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/%5B...not-found%5D/page-4c640954887ad24b.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(auth)/auth/layout-861f73bc3717317c.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(auth)/auth/login/page-8071ce8352503f5d.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(auth)/auth/registration/page-69ed9d398c6604bd.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/candles/%5Bid%5D/page-e9b3d5af76a72f16.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/candles/create/page-4f99749e51d250ea.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/candles/layout-bdb194ec0176a75d.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/candles/page-dcc88056fd68824c.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/category/%5Bid%5D/page-4871d631fec1a5cb.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/category/create-category/page-d2d1c4378bda0fc9.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/category/layout-6cfb3fe559311aa9.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/category/page-a36432fc5fc3437b.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/colors/create/page-ab952a73f525c7eb.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/colors/page-8cc814edc619d224.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/layout-f873fc6481cf96ec.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/orders/layout-351d5059d94e7b20.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/orders/page-9eb24c44c5a5215b.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/admin/page-89ed573dd8b4df25.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/layout-436a9ba1af9d12cb.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/order/layout-c1b5c0522d90c075.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(private)/order/page-e1d45eb46f07bb06.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/catalog/%5Bid%5D/page-5cc81d3d548b002f.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/catalog/page-6aba55219a5ed257.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/contacts/page-e0cea8fd789b88c2.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/favorites/page-fa82dc4bee09b124.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/layout-0706eeb1456b6709.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/page-cad7b773935d26f1.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/(public)/thanks/page-1e714152dd6e5bf3.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/_not-found/page-1a1fb0850aa25456.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/app/layout-6c2b1b6d66cb000b.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/framework-337401a8e5b51b39.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/main-088238efaef46057.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/main-app-81e50f28d312e46c.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/pages/_app-98764d98fddb5695.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/pages/_error-535e8f6b3eabf13c.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-718cca84127812cb.js",revision:"ZlyAo8ubCMXzcrTNet57t"},{url:"/_next/static/css/15ad22a8f35367aa.css",revision:"15ad22a8f35367aa"},{url:"/_next/static/css/35b91dbafd362b79.css",revision:"35b91dbafd362b79"},{url:"/_next/static/css/4817c45067299aa3.css",revision:"4817c45067299aa3"},{url:"/_next/static/css/4fddf60baa3fdde2.css",revision:"4fddf60baa3fdde2"},{url:"/_next/static/css/763666fd8d5be4f7.css",revision:"763666fd8d5be4f7"},{url:"/_next/static/css/c5127d2e3f68edcd.css",revision:"c5127d2e3f68edcd"},{url:"/_next/static/media/286145886ce4e71f-s.woff2",revision:"50d075ea54dc4fcb163a656279b37236"},{url:"/_next/static/media/4109e698ed614358-s.woff2",revision:"c66f766ed3837aa13d9f0270f971a645"},{url:"/_next/static/media/7f68c83748a713fb-s.woff2",revision:"d7f2464eabb5a0d54ba7dc3caa05d18f"},{url:"/_next/static/media/99270eb41c047ded-s.woff2",revision:"f4445631bf02b356d8705c7dd16c76fb"},{url:"/_next/static/media/a5b040c7a70a39dd-s.p.woff2",revision:"d4d95af04b3f19cc867c1dfeb69fa108"},{url:"/_next/static/media/b126d9129ac2c50d-s.woff2",revision:"086725f4508259c1c6fc74032ac2e9b0"},{url:"/_next/static/media/b702e6a3977e37e4-s.woff2",revision:"ed4aeb5c1fbcc9731a100874d392b860"},{url:"/_next/static/media/bgCandle1.d74701b6.webp",revision:"d74701b6"},{url:"/_next/static/media/bgCandle1.d74701b6.webp",revision:"ec32dbc1eb0c19aa6e86c3a3549e1618"},{url:"/_next/static/media/bgCandle3.938f9108.webp",revision:"938f9108"},{url:"/_next/static/media/c0d59cecdec06816-s.woff2",revision:"4210331503cff542ed0e85c17896c0f9"},{url:"/_next/static/media/candle.e5cad272.webp",revision:"e201c05a8f2f179377743b61db3b18ed"},{url:"/_next/static/media/d9c457acd7adb2b9-s.woff2",revision:"a4b04bd3815c668dbb2fad3ff22c658a"},{url:"/_next/static/media/ecb58dafd4683223-s.p.woff2",revision:"91e2dd0ee3f88d8830f0f67131d17d76"},{url:"/candles_pwa_128.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/candles_pwa_256.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/candles_pwa_512.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/favicon.ico",revision:"2512cea0f299351e97a72a78c54c656b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:t}})=>!(!e||t.startsWith("/api/auth/callback")||!t.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:t},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!t.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:t},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!t.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:t})=>t&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
