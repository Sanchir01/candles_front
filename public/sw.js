if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),l={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>l[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/cBK1G6m1lnm_RXsyLryiM/_buildManifest.js",revision:"683e2bbe63cb9dc1e45de260a6c72668"},{url:"/_next/static/cBK1G6m1lnm_RXsyLryiM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/1240-d64d35f378b71140.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/131.eda3a7990be7d346.js",revision:"eda3a7990be7d346"},{url:"/_next/static/chunks/1328-07e5c8fa529f16e3.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/1355-593777341ba8222f.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/1462.076c738a97e6c0a7.js",revision:"076c738a97e6c0a7"},{url:"/_next/static/chunks/1765-527bbeb8f63222f5.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/2114-89a922eeb841239e.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/2513-e64be2654b05b6c6.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/2948.02e51036615da461.js",revision:"02e51036615da461"},{url:"/_next/static/chunks/3169-c0cdad4db0d8d298.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/3193-8ec1c23dec3096ba.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/31b59deb-c09cc91f7b8cf38c.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/3403.a059630acb47aeb0.js",revision:"a059630acb47aeb0"},{url:"/_next/static/chunks/3554.1af1912dc10226d6.js",revision:"1af1912dc10226d6"},{url:"/_next/static/chunks/3611-c7a3a79712e157d7.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/3756-2ff5a51d1aa57a82.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/4051-ec5118967e8ec681.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/406-d4052f8d1f80e914.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/4158-9b71b2c1aaf66f67.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/4883-8495928c7599a386.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/5639-f47a16f29dd20198.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/5760-3756833b58241285.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/6233-0ab32622989acfdb.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/700-ff6da97776fba3d9.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/7424-7e9cda66ce4df443.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/7620.fa16fe639fb97b12.js",revision:"fa16fe639fb97b12"},{url:"/_next/static/chunks/8029-4a9beab831ba1d32.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/8104-ee61bf1ce37dd21d.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/8182-d4c834729d746605.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/8244.c3b9185fd396759e.js",revision:"c3b9185fd396759e"},{url:"/_next/static/chunks/827-f850a33978d67f3d.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/9033-79827913112d8964.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/9252-aa1389941246dc72.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/9809.bf6789b8787cb93e.js",revision:"bf6789b8787cb93e"},{url:"/_next/static/chunks/9869-8502564ce1cf862f.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/%5B...not-found%5D/layout-8830cb9912eac42a.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/%5B...not-found%5D/page-bae0b69c1e191aae.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(auth)/auth/layout-7ea53edb62f149ad.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(auth)/auth/login/page-9020a6493b712db3.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(auth)/auth/registration/page-ee28d3a12847d724.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/candles/%5Bid%5D/page-e3f21841c7622df6.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/candles/create/page-a0babc460e92fcc7.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/candles/layout-274674423acbe66e.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/candles/page-3705ec159036c8af.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/category/%5Bid%5D/page-681af9d5a3abb833.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/category/create-category/page-9b34aab416c19162.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/category/layout-960e736a9be28080.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/category/page-fc0d91d8d19915f2.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/colors/create-color/page-9e8437fb7b71b955.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/colors/page-b4ba4e1582ce801f.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/layout-eb62a1a1d34ae744.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/orders/layout-d32a7944b0300313.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/orders/page-d95c9c629887c64c.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/admin/page-7fbb98dcdb16114f.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/layout-432dd4f20587a892.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/order/layout-ff2052cad10a54e8.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(private)/order/page-1e6780a1c05651c3.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/catalog/%5Bid%5D/page-d2bdf82031b887e9.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/catalog/page-37fd6e0fa79f9624.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/contacts/page-28a8890c298c3a58.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/favorites/page-0593681da2547e34.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/layout-278889502b01286a.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/page-8ab852dce2de1108.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/(public)/thanks/page-3deb55581402aa5f.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/_not-found/page-1a1fb0850aa25456.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/app/layout-7552613a7e1e3821.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/framework-337401a8e5b51b39.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/main-088238efaef46057.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/main-app-55be498d078a7d4c.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/pages/_app-98764d98fddb5695.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/pages/_error-535e8f6b3eabf13c.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-b6e2f30a7d65d45b.js",revision:"cBK1G6m1lnm_RXsyLryiM"},{url:"/_next/static/css/15ad22a8f35367aa.css",revision:"15ad22a8f35367aa"},{url:"/_next/static/css/35b91dbafd362b79.css",revision:"35b91dbafd362b79"},{url:"/_next/static/css/4817c45067299aa3.css",revision:"4817c45067299aa3"},{url:"/_next/static/css/4fddf60baa3fdde2.css",revision:"4fddf60baa3fdde2"},{url:"/_next/static/css/763666fd8d5be4f7.css",revision:"763666fd8d5be4f7"},{url:"/_next/static/css/c5127d2e3f68edcd.css",revision:"c5127d2e3f68edcd"},{url:"/_next/static/media/286145886ce4e71f-s.woff2",revision:"50d075ea54dc4fcb163a656279b37236"},{url:"/_next/static/media/4109e698ed614358-s.woff2",revision:"c66f766ed3837aa13d9f0270f971a645"},{url:"/_next/static/media/7f68c83748a713fb-s.woff2",revision:"d7f2464eabb5a0d54ba7dc3caa05d18f"},{url:"/_next/static/media/99270eb41c047ded-s.woff2",revision:"f4445631bf02b356d8705c7dd16c76fb"},{url:"/_next/static/media/a5b040c7a70a39dd-s.p.woff2",revision:"d4d95af04b3f19cc867c1dfeb69fa108"},{url:"/_next/static/media/b126d9129ac2c50d-s.woff2",revision:"086725f4508259c1c6fc74032ac2e9b0"},{url:"/_next/static/media/b702e6a3977e37e4-s.woff2",revision:"ed4aeb5c1fbcc9731a100874d392b860"},{url:"/_next/static/media/bgCandle1.d74701b6.webp",revision:"d74701b6"},{url:"/_next/static/media/bgCandle1.d74701b6.webp",revision:"ec32dbc1eb0c19aa6e86c3a3549e1618"},{url:"/_next/static/media/bgCandle3.938f9108.webp",revision:"938f9108"},{url:"/_next/static/media/c0d59cecdec06816-s.woff2",revision:"4210331503cff542ed0e85c17896c0f9"},{url:"/_next/static/media/candle.e5cad272.webp",revision:"e201c05a8f2f179377743b61db3b18ed"},{url:"/_next/static/media/d9c457acd7adb2b9-s.woff2",revision:"a4b04bd3815c668dbb2fad3ff22c658a"},{url:"/_next/static/media/ecb58dafd4683223-s.p.woff2",revision:"91e2dd0ee3f88d8830f0f67131d17d76"},{url:"/candles_pwa_128.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/candles_pwa_256.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/candles_pwa_512.ico",revision:"41fdb27981e7e9d9cc90a5a84ac4255e"},{url:"/favicon.ico",revision:"2512cea0f299351e97a72a78c54c656b"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
