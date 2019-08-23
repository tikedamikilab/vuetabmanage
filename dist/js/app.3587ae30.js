(function(t){function e(e){for(var a,r,u=e[0],i=e[1],l=e[2],c=0,f=[];c<u.length;c++)r=u[c],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&f.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o={app:0},s=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"3074f6b1"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"d302d049"}[t]+".css",o=i.p+a,s=document.getElementsByTagName("link"),u=0;u<s.length;u++){var l=s[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===o))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],c=l.getAttribute("data-href");if(c===a||c===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[t],d.parentNode.removeChild(d),n(s)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise(function(e,n){a=o[t]=[e,n]});e.push(a[2]=s);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=u(t);var f=new Error;l=function(e){c.onerror=c.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",f.name="ChunkLoadError",f.type=a,f.request=r,n[1](f)}o[t]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("14c6"),n("08c1"),n("4842"),n("d9fc");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" |\n    "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v("|\n    "),n("router-link",{attrs:{to:"/game"}},[t._v("Game")])],1),n("router-view")],1)},o=[],s=(n("034f"),n("2877")),u={},i=Object(s["a"])(u,r,o,!1,null,null,null),l=i.exports,c=n("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("TaskManage",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v(t._s(t.msg))]),n("h2",[t._v("タスク一覧")]),n("ul",t._l(t.tasks,function(e){return n("li",{key:e.id},[n("input",{attrs:{type:"checkbox"},domProps:{checked:e.done},on:{change:t.toggleTaskStatus}}),t._v("\n      "+t._s(e.name)+"\n    ")])}),0),n("form",{on:{submit:function(e){return e.preventDefault(),t.addTask(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTaskName,expression:"newTaskName"}],attrs:{type:"task",placeholder:"新しいタスク"},domProps:{value:t.newTaskName},on:{input:function(e){e.target.composing||(t.newTaskName=e.target.value)}}})]),n("button",{attrs:{type:"button"},on:{click:t.save}},[t._v("保存")]),n("button",{attrs:{type:"button"},on:{click:t.restore}},[t._v("復元")])])},m=[],v={data:function(){return{newTaskName:""}},name:"TaskManage",props:{msg:String},computed:{tasks:function(){return this.$store.state.tasks}},methods:{addTask:function(){this.$store.commit("addTask",{name:this.newTaskName}),this.newTaskName=""},toggleTaskStatus:function(t){this.$store.commit("togleTaskState",{id:t.id})},save:function(){this.$store.dispatch("save")},restore:function(){this.$store.dispatch("restore")}}},h=v,g=Object(s["a"])(h,p,m,!1,null,null,null),k=g.exports,b={name:"home",components:{TaskManage:k}},y=b,_=Object(s["a"])(y,f,d,!1,null,null,null),w=_.exports,T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gameview"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("Game")],1)},x=[],S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[n("p",[t._v("じゃんけん！")]),t._l(t.menu,function(e){return n("button",{key:e.key,staticClass:"selecthand-btn",on:{click:function(n){return t.handleClick(e.key)}}},[t._v(t._s(e.label))])}),n("p",[t._v("私は"+t._s(t._f("label")(t.player,t.menu)))]),n("p",[t._v("相手は"+t._s(t._f("label")(t.bot,t.menu)))]),n("p",[t._v("この勝負…"+t._s(t._f("resultText")(t.result)))])],2)},O=[],j=(n("7514"),{name:"Game",data:function(){return{player:"",bot:"",menu:[{label:"グー",key:"guu"},{label:"チョキ",key:"tyoki"},{label:"パー",key:"paa"}]}},filters:{label:function(t,e){return t?e.find(function(e){return e.key===t}).label:""},resultText:function(t){var e={win:"あなたの勝ち！😍",lose:"あなたの負け…😨",draw:"引き分けっ😑"};return e[t]}},computed:{result:function(){var t=this.player,e=this.bot;if(!t||!e)return"";var n={guu:{guu:"draw",tyoki:"win",paa:"lose"},tyoki:{guu:"lose",tyoki:"draw",paa:"win"},paa:{guu:"win",tyoki:"lose",paa:"draw"}};return n[t][e]}},methods:{handleClick:function(t){this.player=t,this.getBotSelect()},getBotSelect:function(){var t=this.getRandom(0,this.menu.length-1);this.bot=this.menu[t].key},getRandom:function(t,e){return t+Math.floor(Math.random()*(e+1))}}}),E=j,N=(n("a6dc"),Object(s["a"])(E,S,O,!1,null,"38ec0a63",null)),C=N.exports,P={name:"gameview",components:{Game:C}},$=P,I=Object(s["a"])($,T,x,!1,null,null,null),M=I.exports;a["a"].use(c["a"]);var A=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:w},{path:"/game",name:"game",component:M},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),B=(n("ac6a"),n("7f7f"),n("2f62"));a["a"].use(B["a"]);var L=new B["a"].Store({state:{tasks:[{id:1,name:"牛乳を買う",done:!1},{id:2,name:"Vue.jsの本を買う",done:!0}]},nextTaskId:3,mutations:{addTask:function(t,e){var n=e.name;t.tasks.push({id:t.nextTaskId,name:n,done:!1}),t.nextTaskId++},toggleTaskStatus:function(t,e){var n=e.id,a=t.tasks.filter(function(t){return t.id===n});a.forEach(function(t){t.done=!t.done})},restore:function(t,e){var n=e.tasks,a=e.nextTaskId;t.tasks=n,t.nextTaskId=a}},actions:{save:function(t){var e=t.state,n={tasks:e.tasks,nextTaskId:e.nextTaskId};localStorage.setItem("task-app-data",JSON.stringify(n))},restore:function(t){var e=t.commit,n=localStorage.getItem("task-app-data");n&&e("restore",JSON.parse(n))}}});a["a"].config.productionTip=!1,new a["a"]({router:A,store:L,render:function(t){return t(l)}}).$mount("#app")},"64a9":function(t,e,n){},a6dc:function(t,e,n){"use strict";var a=n("dcfa"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dcfa:function(t,e,n){}});
//# sourceMappingURL=app.3587ae30.js.map