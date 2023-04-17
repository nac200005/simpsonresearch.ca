import{S as Me,i as Xe,s as Ye,a as Qe,e as B,c as Ze,b as G,g as ce,t as J,d as fe,f as F,h as K,j as et,o as be,k as tt,l as nt,m as rt,n as we,p as q,q as at,r as st,u as ot,v as H,w as M,x as Se,y as X,z as Y,A as xe}from"./chunks/index-8c56bedf.js";import{g as Be,f as Je,s as z,a as ve,b as it,i as lt}from"./chunks/singletons-c52ba9e4.js";const ct=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ft=function(n,e){return new URL(n,e).href},Fe={},x=function(e,t,l){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ft(o,l),o in Fe)return;Fe[o]=!0;const d=o.endsWith(".css"),a=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":ct,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((_,m)=>{f.addEventListener("load",_),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function ut(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function dt(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const pt=["href","pathname","search","searchParams","toString","toJSON"];function ht(n,e){const t=new URL(n);for(const l of pt){let o=t[l];Object.defineProperty(t,l,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(l,o,d)=>d(n,o),mt(t),t}function mt(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let l=t.length;for(;l;)e=e*33^t[--l]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Le=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const l=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;le.delete(l)}return Le(n,e)};const le=new Map;function gt(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(o+=`[data-hash="${_t(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:a,...f}=JSON.parse(d.textContent),_=d.getAttribute("data-ttl");return _&&le.set(e,{body:a,init:f,ttl:1e3*Number(_)}),Promise.resolve(new Response(a,f))}return Le(n,t)}function wt(n,e){const t=le.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);le.delete(n)}return Le(n,e)}const yt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(n){const e=[],t=[];let l=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(vt).map((d,a,f)=>{const _=decodeURIComponent(d),m=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(_);if(m)return e.push(m[1]),t.push(m[2]),"(?:/(.*))?";const y=a===f.length-1;return _&&"/"+_.split(/\[(.+?)\]/).map(($,R)=>{if(R%2){const T=yt.exec($);if(!T)throw new Error(`Invalid param: ${$}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,N,V,D]=T;return e.push(V),t.push(D),N?"(.*?)":"([^/]+?)"}return y&&$.includes(".")&&(l=!1),$.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${l?"/?":""}$`),names:e,types:t}}function vt(n){return!/^\([^)]+\)$/.test(n)}function Et(n,e,t,l){const o={};for(let d=0;d<e.length;d+=1){const a=e[d],f=t[d],_=n[d+1]||"";if(f){const m=l[f];if(!m)throw new Error(`Missing "${f}" param matcher`);if(!m(_))return}o[a]=_}return o}function kt(n,e,t,l){const o=new Set(e);return Object.entries(t).map(([f,[_,m,y]])=>{const{pattern:$,names:R,types:T}=bt(f),N={id:f,exec:V=>{const D=$.exec(V);if(D)return Et(D,R,T,l)},errors:[1,...y||[]].map(V=>n[V]),layouts:[0,...m||[]].map(a),leaf:d(_)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function d(f){const _=f<0;return _&&(f=~f),[_,n[f]]}function a(f){return f===void 0?f:[o.has(f),n[f]]}}function Rt(n){let e,t,l;var o=n[0][0];function d(a){return{props:{data:a[2],form:a[1]}}}return o&&(e=H(o,d(n))),{c(){e&&M(e.$$.fragment),t=B()},l(a){e&&Se(e.$$.fragment,a),t=B()},m(a,f){e&&X(e,a,f),G(a,t,f),l=!0},p(a,f){const _={};if(f&4&&(_.data=a[2]),f&2&&(_.form=a[1]),o!==(o=a[0][0])){if(e){ce();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),fe()}o?(e=H(o,d(a)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(a){l||(e&&F(e.$$.fragment,a),l=!0)},o(a){e&&J(e.$$.fragment,a),l=!1},d(a){a&&K(t),e&&Y(e,a)}}}function St(n){let e,t,l;var o=n[0][0];function d(a){return{props:{data:a[2],$$slots:{default:[Lt]},$$scope:{ctx:a}}}}return o&&(e=H(o,d(n))),{c(){e&&M(e.$$.fragment),t=B()},l(a){e&&Se(e.$$.fragment,a),t=B()},m(a,f){e&&X(e,a,f),G(a,t,f),l=!0},p(a,f){const _={};if(f&4&&(_.data=a[2]),f&523&&(_.$$scope={dirty:f,ctx:a}),o!==(o=a[0][0])){if(e){ce();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),fe()}o?(e=H(o,d(a)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(a){l||(e&&F(e.$$.fragment,a),l=!0)},o(a){e&&J(e.$$.fragment,a),l=!1},d(a){a&&K(t),e&&Y(e,a)}}}function Lt(n){let e,t,l;var o=n[0][1];function d(a){return{props:{data:a[3],form:a[1]}}}return o&&(e=H(o,d(n))),{c(){e&&M(e.$$.fragment),t=B()},l(a){e&&Se(e.$$.fragment,a),t=B()},m(a,f){e&&X(e,a,f),G(a,t,f),l=!0},p(a,f){const _={};if(f&8&&(_.data=a[3]),f&2&&(_.form=a[1]),o!==(o=a[0][1])){if(e){ce();const m=e;J(m.$$.fragment,1,0,()=>{Y(m,1)}),fe()}o?(e=H(o,d(a)),M(e.$$.fragment),F(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(_)},i(a){l||(e&&F(e.$$.fragment,a),l=!0)},o(a){e&&J(e.$$.fragment,a),l=!1},d(a){a&&K(t),e&&Y(e,a)}}}function Ke(n){let e,t=n[5]&&ze(n);return{c(){e=tt("div"),t&&t.c(),this.h()},l(l){e=nt(l,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=rt(e);t&&t.l(o),o.forEach(K),this.h()},h(){we(e,"id","svelte-announcer"),we(e,"aria-live","assertive"),we(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(l,o){G(l,e,o),t&&t.m(e,null)},p(l,o){l[5]?t?t.p(l,o):(t=ze(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&K(e),t&&t.d()}}}function ze(n){let e;return{c(){e=at(n[6])},l(t){e=st(t,n[6])},m(t,l){G(t,e,l)},p(t,l){l&64&&ot(e,t[6])},d(t){t&&K(e)}}}function $t(n){let e,t,l,o,d;const a=[St,Rt],f=[];function _(y,$){return y[0][1]?0:1}e=_(n),t=f[e]=a[e](n);let m=n[4]&&Ke(n);return{c(){t.c(),l=Qe(),m&&m.c(),o=B()},l(y){t.l(y),l=Ze(y),m&&m.l(y),o=B()},m(y,$){f[e].m(y,$),G(y,l,$),m&&m.m(y,$),G(y,o,$),d=!0},p(y,[$]){let R=e;e=_(y),e===R?f[e].p(y,$):(ce(),J(f[R],1,1,()=>{f[R]=null}),fe(),t=f[e],t?t.p(y,$):(t=f[e]=a[e](y),t.c()),F(t,1),t.m(l.parentNode,l)),y[4]?m?m.p(y,$):(m=Ke(y),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},i(y){d||(F(t),d=!0)},o(y){J(t),d=!1},d(y){f[e].d(y),y&&K(l),m&&m.d(y),y&&K(o)}}}function Pt(n,e,t){let{stores:l}=e,{page:o}=e,{components:d}=e,{form:a}=e,{data_0:f=null}=e,{data_1:_=null}=e;et(l.page.notify);let m=!1,y=!1,$=null;return be(()=>{const R=l.page.subscribe(()=>{m&&(t(5,y=!0),t(6,$=document.title||"untitled page"))});return t(4,m=!0),R}),n.$$set=R=>{"stores"in R&&t(7,l=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,a=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,_=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&l.page.set(o)},[d,a,f,_,m,y,$,l,o]}class Ot extends Me{constructor(e){super(),Xe(this,e,Pt,$t,Ye,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const At={},ue=[()=>x(()=>import("./chunks/0-5a198980.js"),["chunks\\0-5a198980.js","components\\pages\\_layout.svelte-0064b102.js","assets\\_layout-1246b60f.css","chunks\\index-8c56bedf.js"],import.meta.url),()=>x(()=>import("./chunks/1-4567855e.js"),["chunks\\1-4567855e.js","components\\error.svelte-ecbf3b9b.js","chunks\\index-8c56bedf.js","chunks\\singletons-c52ba9e4.js"],import.meta.url),()=>x(()=>import("./chunks/2-9874d4dc.js"),["chunks\\2-9874d4dc.js","chunks\\_page-8d45a3db.js","components\\pages\\_page.svelte-8c20fdf9.js","chunks\\index-8c56bedf.js"],import.meta.url),()=>x(()=>import("./chunks/3-95e29307.js"),["chunks\\3-95e29307.js","chunks\\_page-13b849c5.js","components\\pages\\apc\\_page.svelte-8d7e0b7e.js","chunks\\index-8c56bedf.js"],import.meta.url),()=>x(()=>import("./chunks/4-306c43f4.js"),["chunks\\4-306c43f4.js","chunks\\_page-a312883a.js","components\\pages\\github\\_page.svelte-37ef6ca5.js","chunks\\index-8c56bedf.js"],import.meta.url),()=>x(()=>import("./chunks/5-0881dbd6.js"),["chunks\\5-0881dbd6.js","chunks\\_page-1c72233a.js","components\\pages\\latex\\_page.svelte-31625f29.js","chunks\\index-8c56bedf.js"],import.meta.url),()=>x(()=>import("./chunks/6-75229c16.js"),["chunks\\6-75229c16.js","chunks\\_page-6528da8b.js","components\\pages\\stem\\_page.svelte-5f8e4d30.js","chunks\\index-8c56bedf.js"],import.meta.url)],It=[],Ut={"":[2],apc:[3],github:[4],latex:[5],stem:[6]},jt={handleError:({error:n})=>{console.error(n)}};class Ee{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Ge{constructor(e,t){this.status=e,this.location=t}}const Tt="/__data.js";async function Dt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([l,o])=>[l,await o])));return n}const He="sveltekit:scroll",C="sveltekit:index",se=kt(ue,It,Ut,At),ke=ue[0],Re=ue[1];ke();Re();let te={};try{te=JSON.parse(sessionStorage[He])}catch{}function ye(n){te[n]=ve()}function Nt({target:n,base:e,trailing_slash:t}){var Ve;const l=[];let o=null;const d={before_navigate:[],after_navigate:[]};let a={branch:[],error:null,url:null},f=!1,_=!1,m=!0,y=!1,$=!1,R,T=(Ve=history.state)==null?void 0:Ve[C];T||(T=Date.now(),history.replaceState({...history.state,[C]:T},"",location.href));const N=te[T];N&&(history.scrollRestoration="manual",scrollTo(N.x,N.y));let V=!1,D,$e,ne;async function Pe(){ne=ne||Promise.resolve(),await ne,ne=null;const r=new URL(location.href),c=me(r,!0);o=null,await Ae(c,r,[])}async function de(r,{noscroll:c=!1,replaceState:u=!1,keepfocus:s=!1,state:i={}},p,h){return typeof r=="string"&&(r=new URL(r,Be(document))),_e({url:r,scroll:c?ve():null,keepfocus:s,redirect_chain:p,details:{state:i,replaceState:u},nav_token:h,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(r){const c=me(r,!1);if(!c)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o={id:c.id,promise:je(c)},o.promise}async function Ae(r,c,u,s,i={},p){var E,v;$e=i;let h=r&&await je(r);if(h||(h=await Ne(c,null,ee(new Error(`Not found: ${c.pathname}`),{url:c,params:{},routeId:null}),404)),c=(r==null?void 0:r.url)||c,$e!==i)return!1;if(h.type==="redirect")if(u.length>10||u.includes(c.pathname))h=await re({status:500,error:ee(new Error("Redirect loop"),{url:c,params:{},routeId:null}),url:c,routeId:null});else return de(new URL(h.location,c).href,{},[...u,c.pathname],i),!1;else((v=(E=h.props)==null?void 0:E.page)==null?void 0:v.status)>=400&&await z.updated.check()&&await ae(c);if(l.length=0,$=!1,y=!0,s&&s.details){const{details:w}=s,b=w.replaceState?0:1;w.state[C]=T+=b,history[w.replaceState?"replaceState":"pushState"](w.state,"",c)}if(o=null,_){a=h.state,h.props.page&&(h.props.page.url=c);const w=ie();R.$set(h.props),w()}else Ie(h);if(s){const{scroll:w,keepfocus:b}=s;if(!b){const S=document.body,P=S.getAttribute("tabindex");S.tabIndex=-1,S.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),P!==null?S.setAttribute("tabindex",P):S.removeAttribute("tabindex")}if(await xe(),m){const S=c.hash&&document.getElementById(c.hash.slice(1));w?scrollTo(w.x,w.y):S?S.scrollIntoView():scrollTo(0,0)}}else await xe();m=!0,h.props.page&&(D=h.props.page),p&&p(),y=!1}function Ie(r){var i,p;a=r.state;const c=document.querySelector("style[data-sveltekit]");c&&c.remove(),D=r.props.page;const u=ie();R=new Ot({target:n,props:{...r.props,stores:z},hydrate:!0}),u();const s={from:null,to:oe("to",{params:a.params,routeId:(p=(i=a.route)==null?void 0:i.id)!=null?p:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(h=>h(s)),_=!0}async function Q({url:r,params:c,branch:u,status:s,error:i,route:p,form:h}){var P;const E=u.filter(Boolean),v={type:"loaded",state:{url:r,params:c,branch:u,error:i,route:p},props:{components:E.map(O=>O.node.component)}};h!==void 0&&(v.props.form=h);let w={},b=!D;for(let O=0;O<E.length;O+=1){const U=E[O];w={...w,...U.data},(b||!a.branch.some(j=>j===U))&&(v.props[`data_${O}`]=w,b=b||Object.keys((P=U.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(D.data).length!==Object.keys(w).length),!a.url||r.href!==a.url.href||a.error!==i||h!==void 0||b){v.props.page={error:i,params:c,routeId:p&&p.id,status:s,url:r,form:h,data:b?w:D.data};const O=(U,j)=>{Object.defineProperty(v.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${j}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return v}async function pe({loader:r,parent:c,url:u,params:s,routeId:i,server_data_node:p}){var w,b,S,P,O;let h=null;const E={dependencies:new Set,params:new Set,parent:!1,url:!1},v=await r();if((w=v.shared)!=null&&w.load){let U=function(...L){for(const g of L){const{href:k}=new URL(g,u);E.dependencies.add(k)}};const j={routeId:i,params:new Proxy(s,{get:(L,g)=>(E.params.add(g),L[g])}),data:(b=p==null?void 0:p.data)!=null?b:null,url:ht(u,()=>{E.url=!0}),async fetch(L,g){let k;L instanceof Request?(k=L.url,g={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...g}):k=L;const I=new URL(k,u).href;return U(I),_?wt(I,g):gt(k,I,g)},setHeaders:()=>{},depends:U,parent(){return E.parent=!0,c()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),h=(S=await v.shared.load.call(null,j))!=null?S:null,h=h?await Dt(h):null}return{node:v,loader:r,server:p,shared:(P=v.shared)!=null&&P.load?{type:"data",data:h,uses:E}:null,data:(O=h!=null?h:p==null?void 0:p.data)!=null?O:null}}function Ue(r,c,u,s){if($)return!0;if(!u)return!1;if(u.parent&&c||u.url&&r)return!0;for(const i of u.params)if(s[i]!==a.params[i])return!0;for(const i of u.dependencies)if(l.some(p=>p(new URL(i))))return!0;return!1}function he(r,c){var u,s;return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set((u=r.uses.dependencies)!=null?u:[]),params:new Set((s=r.uses.params)!=null?s:[]),parent:!!r.uses.parent,url:!!r.uses.url}}:(r==null?void 0:r.type)==="skip"&&c!=null?c:null}async function je({id:r,invalidating:c,url:u,params:s,route:i}){var L;if((o==null?void 0:o.id)===r)return o.promise;const{errors:p,layouts:h,leaf:E}=i,v=[...h,E];p.forEach(g=>g==null?void 0:g().catch(()=>{})),v.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let w=null;const b=a.url?r!==a.url.pathname+a.url.search:!1,S=v.reduce((g,k,I)=>{var Z;const A=a.branch[I],W=!!(k!=null&&k[0])&&((A==null?void 0:A.loader)!==k[1]||Ue(b,g.some(Boolean),(Z=A.server)==null?void 0:Z.uses,s));return g.push(W),g},[]);if(S.some(Boolean)){try{w=await We(u,S)}catch(g){return re({status:500,error:ee(g,{url:u,params:s,routeId:i.id}),url:u,routeId:i.id})}if(w.type==="redirect")return w}const P=w==null?void 0:w.nodes;let O=!1;const U=v.map(async(g,k)=>{var Z;if(!g)return;const I=a.branch[k],A=P==null?void 0:P[k];if((!A||A.type==="skip")&&g[1]===(I==null?void 0:I.loader)&&!Ue(b,O,(Z=I.shared)==null?void 0:Z.uses,s))return I;if(O=!0,(A==null?void 0:A.type)==="error")throw A;return pe({loader:g[1],url:u,params:s,routeId:i.id,parent:async()=>{var Ce;const qe={};for(let ge=0;ge<k;ge+=1)Object.assign(qe,(Ce=await U[ge])==null?void 0:Ce.data);return qe},server_data_node:he(A===void 0&&g[0]?{type:"skip"}:A!=null?A:null,I==null?void 0:I.server)})});for(const g of U)g.catch(()=>{});const j=[];for(let g=0;g<v.length;g+=1)if(v[g])try{j.push(await U[g])}catch(k){if(k instanceof Ge)return{type:"redirect",location:k.location};let I=500,A;P!=null&&P.includes(k)?(I=(L=k.status)!=null?L:I,A=k.error):k instanceof Ee?(I=k.status,A=k.body):A=ee(k,{params:s,url:u,routeId:i.id});const W=await Te(g,j,p);return W?await Q({url:u,params:s,branch:j.slice(0,W.idx).concat(W.node),status:I,error:A,route:i}):await Ne(u,i.id,A,I)}else j.push(void 0);return await Q({url:u,params:s,branch:j,status:200,error:null,route:i,form:c?void 0:null})}async function Te(r,c,u){for(;r--;)if(u[r]){let s=r;for(;!c[s];)s-=1;try{return{idx:s+1,node:{node:await u[r](),loader:u[r],data:{},server:null,shared:null}}}catch{continue}}}async function re({status:r,error:c,url:u,routeId:s}){var w;const i={},p=await ke();let h=null;if(p.server)try{const b=await We(u,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;h=(w=b.nodes[0])!=null?w:null}catch{(u.origin!==location.origin||u.pathname!==location.pathname||f)&&await ae(u)}const E=await pe({loader:ke,url:u,params:i,routeId:s,parent:()=>Promise.resolve({}),server_data_node:he(h)}),v={node:await Re(),loader:Re,shared:null,server:null,data:null};return await Q({url:u,params:i,branch:[E,v],status:r,error:c,route:null})}function me(r,c){if(De(r))return;const u=decodeURI(r.pathname.slice(e.length)||"/");for(const s of se){const i=s.exec(u);if(i){const p=new URL(r.origin+ut(r.pathname,t)+r.search+r.hash);return{id:p.pathname+p.search,invalidating:c,route:s,params:dt(i),url:p}}}}function De(r){return r.origin!==location.origin||!r.pathname.startsWith(e)}async function _e({url:r,scroll:c,keepfocus:u,redirect_chain:s,details:i,type:p,delta:h,nav_token:E,accepted:v,blocked:w}){var U,j,L,g;let b=!1;const S=me(r,!1),P={from:oe("from",{params:a.params,routeId:(j=(U=a.route)==null?void 0:U.id)!=null?j:null,url:a.url}),to:oe("to",{params:(L=S==null?void 0:S.params)!=null?L:null,routeId:(g=S==null?void 0:S.route.id)!=null?g:null,url:r}),type:p};h!==void 0&&(P.delta=h);const O={...P,cancel:()=>{b=!0}};if(d.before_navigate.forEach(k=>k(O)),b){w();return}ye(T),v(),_&&z.navigating.set(P),await Ae(S,r,s,{scroll:c,keepfocus:u,details:i},E,()=>{d.after_navigate.forEach(k=>k(P)),z.navigating.set(null)})}async function Ne(r,c,u,s){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await re({status:s,error:u,url:r,routeId:c}):await ae(r)}function ae(r){return location.href=r.href,new Promise(()=>{})}return{after_navigate:r=>{be(()=>(d.after_navigate.push(r),()=>{const c=d.after_navigate.indexOf(r);d.after_navigate.splice(c,1)}))},before_navigate:r=>{be(()=>(d.before_navigate.push(r),()=>{const c=d.before_navigate.indexOf(r);d.before_navigate.splice(c,1)}))},disable_scroll_handling:()=>{(y||!_)&&(m=!1)},goto:(r,c={})=>de(r,c,[]),invalidate:r=>{if(r===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof r=="function")l.push(r);else{const{href:c}=new URL(r,location.href);l.push(u=>u.href===c)}return Pe()},invalidateAll:()=>($=!0,Pe()),prefetch:async r=>{const c=new URL(r,Be(document));await Oe(c)},prefetch_routes:async r=>{const u=(r?se.filter(s=>r.some(i=>s.exec(i))):se).map(s=>Promise.all([...s.layouts,s.leaf].map(i=>i==null?void 0:i[1]())));await Promise.all(u)},apply_action:async r=>{if(r.type==="error"){const c=new URL(location.href),{branch:u,route:s}=a;if(!s)return;const i=await Te(a.branch.length,u,s.errors);if(i){const p=await Q({url:c,params:a.params,branch:u.slice(0,i.idx).concat(i.node),status:500,error:r.error,route:s});a=p.state;const h=ie();R.$set(p.props),h()}}else if(r.type==="redirect")de(r.location,{},[]);else{const c={form:r.data,page:{...D,form:r.data,status:r.status}},u=ie();R.$set(c),u()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var h,E;let i=!1;const p={from:oe("from",{params:a.params,routeId:(E=(h=a.route)==null?void 0:h.id)!=null?E:null,url:a.url}),to:null,type:"unload",cancel:()=>i=!0};d.before_navigate.forEach(v=>v(p)),i?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(T);try{sessionStorage[He]=JSON.stringify(te)}catch{}}});const r=s=>{const{url:i,options:p}=Je(s);if(i&&p.prefetch){if(De(i))return;Oe(i)}};let c;const u=s=>{clearTimeout(c),c=setTimeout(()=>{var i;(i=s.target)==null||i.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",r),addEventListener("mousemove",u),addEventListener("sveltekit:trigger_prefetch",r),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:i,url:p,options:h}=Je(s);if(!i||!p)return;const E=i instanceof SVGAElement;if(!E&&!(p.protocol==="https:"||p.protocol==="http:"))return;const v=(i.getAttribute("rel")||"").split(/\s+/);if(i.hasAttribute("download")||v.includes("external")||h.reload||(E?i.target.baseVal:i.target))return;const[w,b]=p.href.split("#");if(b!==void 0&&w===location.href.split("#")[0]){V=!0,ye(T),a.url=p,z.page.set({...D,url:p}),z.page.notify();return}_e({url:p,scroll:h.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[C]===T)return;const i=s.state[C]-T;_e({url:new URL(location.href),scroll:te[s.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{T=s.state[C]},blocked:()=>{history.go(-i)},type:"popstate",delta:i})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++T},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&z.navigating.set(null)})},_hydrate:async({status:r,error:c,node_ids:u,params:s,routeId:i,data:p,form:h})=>{var w;f=!0;const E=new URL(location.href);let v;try{const b=u.map(async(S,P)=>{const O=p[P];return pe({loader:ue[S],url:E,params:s,routeId:i,parent:async()=>{const U={};for(let j=0;j<P;j+=1)Object.assign(U,(await b[j]).data);return U},server_data_node:he(O)})});v=await Q({url:E,params:s,branch:await Promise.all(b),status:r,error:c,form:h,route:(w=se.find(S=>S.id===i))!=null?w:null})}catch(b){if(b instanceof Ge){await ae(new URL(b.location,location.href));return}v=await re({status:b instanceof Ee?b.status:500,error:ee(b,{url:E,params:s,routeId:i}),url:E,routeId:i})}Ie(v)}}}let Vt=1;async function We(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Tt,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Vt++)),await x(()=>import(t.href),[],import.meta.url);const l=window.__sveltekit_data;return delete window.__sveltekit_data,l}function ee(n,e){var t;return n instanceof Ee?n.body:(t=jt.handleError({error:n,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function oe(n,e){for(const t of qt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return e}function ie(){return()=>{}}async function Bt({env:n,hydrate:e,paths:t,target:l,trailing_slash:o}){it(t);const d=Nt({target:l,base:t.base,trailing_slash:o});lt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Bt as start};
