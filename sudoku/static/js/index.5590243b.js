(function(e){function n(n){for(var r,i,s=n[0],l=n[1],u=n[2],g=0,p=[];g<s.length;g++)i=s[g],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);c&&c(n);while(p.length)p.shift()();return t.push.apply(t,u||[]),a()}function a(){for(var e,n=0;n<t.length;n++){for(var a=t[n],r=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(r=!1)}r&&(t.splice(n--,1),e=s(s.s=a[0]))}return e}var r={},o={index:0},t=[];function i(e){return s.p+"static/js/"+({"pages-answer-answer~pages-game-game~pages-index-index~pages-level-level":"pages-answer-answer~pages-game-game~pages-index-index~pages-level-level","pages-answer-answer~pages-game-game~pages-level-level":"pages-answer-answer~pages-game-game~pages-level-level","pages-answer-answer":"pages-answer-answer","pages-game-game":"pages-game-game","pages-level-level":"pages-level-level","pages-index-index":"pages-index-index","pages-searchanswer-searchanswer":"pages-searchanswer-searchanswer"}[e]||e)+"."+{"pages-answer-answer~pages-game-game~pages-index-index~pages-level-level":"37db8870","pages-answer-answer~pages-game-game~pages-level-level":"af882919","pages-answer-answer":"655836ae","pages-game-game":"71975838","pages-level-level":"25e1f351","pages-index-index":"cc1cb79e","pages-searchanswer-searchanswer":"e6480f89"}[e]+".js"}function s(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a=o[e];if(0!==a)if(a)n.push(a[2]);else{var r=new Promise((function(n,r){a=o[e]=[n,r]}));n.push(a[2]=r);var t,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var u=new Error;t=function(n){l.onerror=l.onload=null,clearTimeout(g);var a=o[e];if(0!==a){if(a){var r=n&&("load"===n.type?"missing":n.type),t=n&&n.target&&n.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+t+")",u.name="ChunkLoadError",u.type=r,u.request=t,a[1](u)}o[e]=void 0}};var g=setTimeout((function(){t({type:"timeout",target:l})}),12e4);l.onerror=l.onload=t,document.head.appendChild(l)}return Promise.all(n)},s.m=e,s.c=r,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)s.d(a,r,function(n){return e[n]}.bind(null,r));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var g=0;g<l.length;g++)n(l[g]);var c=u;t.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("8fb6")},"397a":function(e,n,a){var r=a("64b1");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var o=a("4f06").default;o("4f2cc5ca",r,!0,{sourceMap:!1,shadowMode:!1})},"64b1":function(e,n,a){var r=a("24fb");n=r(!1),n.push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*每个页面公共css */.ad{position:fixed;bottom:0}",""]),e.exports=n},"664d":function(e,n,a){"use strict";(function(e){var n=a("4ea4");a("13d5"),a("d3b7"),a("ac1f"),a("5319"),a("ddb0");var r=n(a("e143")),o={keys:function(){return[]}};e["____ECA5774____"]=!0,delete e["____ECA5774____"],e.__uniConfig={globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"TEST",navigationBarBackgroundColor:"#0a97b0",backgroundColor:"#0a97b0"}},e.__uniConfig.compilerVersion="3.3.2",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=o.keys().reduce((function(e,n){var a=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),r=o(n);return Object.assign(e[a]||(e[a]={}),r.common||r),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=a.e,r.default.component("pages-searchanswer-searchanswer",(function(e){var n={component:a.e("pages-searchanswer-searchanswer").then(function(){return e(a("185f"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-index-index",(function(e){var n={component:Promise.all([a.e("pages-answer-answer~pages-game-game~pages-index-index~pages-level-level"),a.e("pages-index-index")]).then(function(){return e(a("bac8"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-level-level",(function(e){var n={component:Promise.all([a.e("pages-answer-answer~pages-game-game~pages-index-index~pages-level-level"),a.e("pages-answer-answer~pages-game-game~pages-level-level"),a.e("pages-level-level")]).then(function(){return e(a("0713"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-game-game",(function(e){var n={component:Promise.all([a.e("pages-answer-answer~pages-game-game~pages-index-index~pages-level-level"),a.e("pages-answer-answer~pages-game-game~pages-level-level"),a.e("pages-game-game")]).then(function(){return e(a("0341"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),r.default.component("pages-answer-answer",(function(e){var n={component:Promise.all([a.e("pages-answer-answer~pages-game-game~pages-index-index~pages-level-level"),a.e("pages-answer-answer~pages-game-game~pages-level-level"),a.e("pages-answer-answer")]).then(function(){return e(a("789a"))}.bind(null,a)).catch(a.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/searchanswer/searchanswer",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{transparentTitle:"none",navigationBarTitleText:"巅疯数独",enablePullDownRefresh:!1})},[e("pages-searchanswer-searchanswer",{slot:"page"})])}},meta:{id:1,name:"pages-searchanswer-searchanswer",isNVue:!1,maxWidth:0,pagePath:"pages/searchanswer/searchanswer",isQuit:!0,isEntry:!0,windowTop:44}},{path:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-index-index",{slot:"page"})])}},meta:{name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",windowTop:44}},{path:"/pages/level/level",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-level-level",{slot:"page"})])}},meta:{name:"pages-level-level",isNVue:!1,maxWidth:0,pagePath:"pages/level/level",windowTop:44}},{path:"/pages/game/game",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{})},[e("pages-game-game",{slot:"page"})])}},meta:{name:"pages-game-game",isNVue:!1,maxWidth:0,pagePath:"pages/game/game",windowTop:44}},{path:"/pages/answer/answer",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"",enablePullDownRefresh:!1})},[e("pages-answer-answer",{slot:"page"})])}},meta:{name:"pages-answer-answer",isNVue:!1,maxWidth:0,pagePath:"pages/answer/answer",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,a("c8ba"))},"75d3":function(e,n,a){"use strict";a.r(n);var r=a("f677"),o=a.n(r);for(var t in r)"default"!==t&&function(e){a.d(n,e,(function(){return r[e]}))}(t);n["default"]=o.a},"7ad9":function(e,n,a){"use strict";a.r(n);var r=a("8f53"),o=a("75d3");for(var t in o)"default"!==t&&function(e){a.d(n,e,(function(){return o[e]}))}(t);a("d111");var i,s=a("f0c5"),l=Object(s["a"])(o["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);n["default"]=l.exports},"8f53":function(e,n,a){"use strict";var r;a.d(n,"b",(function(){return o})),a.d(n,"c",(function(){return t})),a.d(n,"a",(function(){return r}));var o=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},t=[]},"8fb6":function(e,n,a){"use strict";var r=a("4ea4"),o=r(a("5530"));a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("664d"),a("1c31");var t=r(a("e143")),i=r(a("7ad9"));t.default.config.productionTip=!1,i.default.mpType="app";var s=new t.default((0,o.default)({},i.default));s.$mount()},d111:function(e,n,a){"use strict";var r=a("397a"),o=a.n(r);o.a},f677:function(e,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r={onLaunch:function(){console.log("App Launch")},onShow:function(){console.log("App Show")},onHide:function(){console.log("App Hide")}};n.default=r}});