import{S as Xe,i as Ye,s as Qe,a as Ze,e as T,c as xe,b as J,g as Y,t as D,d as Q,f as q,h as B,j as et,o as ve,k as tt,l as nt,m as rt,n as ye,p as H,q as at,r as st,u as ot,v as F,w as K,x as ae,y as z,z as G,A as Be}from"./chunks/index-ac04eb27.js";import{g as Je,f as Fe,s as X,a as ke,b as it,i as lt}from"./chunks/singletons-639a416c.js";const ct=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ft=function(r,e){return new URL(r,e).href},Ke={},x=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=ft(s,o),s in Ke)return;Ke[s]=!0;const d=s.endsWith(".css"),n=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":ct,d||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),d)return new Promise((u,h)=>{l.addEventListener("load",u),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())};function ut(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function dt(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const pt=["href","pathname","search","searchParams","toString","toJSON"];function ht(r,e){const t=new URL(r);for(const o of pt){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,d)=>d(r,s),mt(t),t}function mt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function _t(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Se=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ue.delete(o)}return Se(r,e)};const ue=new Map;function gt(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(s+=`[data-hash="${_t(t.body)}"]`);const d=document.querySelector(s);if(d!=null&&d.textContent){const{body:n,...l}=JSON.parse(d.textContent),u=d.getAttribute("data-ttl");return u&&ue.set(e,{body:n,init:l,ttl:1e3*Number(u)}),Promise.resolve(new Response(n,l))}return Se(r,t)}function wt(r,e){const t=ue.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ue.delete(r)}return Se(r,e)}const yt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function bt(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(vt).map((d,n,l)=>{const u=decodeURIComponent(d),h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(u);if(h)return e.push(h[1]),t.push(h[2]),"(?:/(.*))?";const g=n===l.length-1;return u&&"/"+u.split(/\[(.+?)\]/).map((L,N)=>{if(N%2){const v=yt.exec(L);if(!v)throw new Error(`Invalid param: ${L}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,V,W,C]=v;return e.push(W),t.push(C),V?"(.*?)":"([^/]+?)"}return g&&L.includes(".")&&(o=!1),L.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function vt(r){return!/^\([^)]+\)$/.test(r)}function kt(r,e,t,o){const s={};for(let d=0;d<e.length;d+=1){const n=e[d],l=t[d],u=r[d+1]||"";if(l){const h=o[l];if(!h)throw new Error(`Missing "${l}" param matcher`);if(!h(u))return}s[n]=u}return s}function $t(r,e,t,o){const s=new Set(e);return Object.entries(t).map(([l,[u,h,g]])=>{const{pattern:L,names:N,types:v}=bt(l),V={id:l,exec:W=>{const C=L.exec(W);if(C)return kt(C,N,v,o)},errors:[1,...g||[]].map(W=>r[W]),layouts:[0,...h||[]].map(n),leaf:d(u)};return V.errors.length=V.layouts.length=Math.max(V.errors.length,V.layouts.length),V});function d(l){const u=l<0;return u&&(l=~l),[u,r[l]]}function n(l){return l===void 0?l:[s.has(l),r[l]]}}function Et(r){let e,t,o;var s=r[0][0];function d(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=F(s,d(r))),{c(){e&&K(e.$$.fragment),t=T()},l(n){e&&ae(e.$$.fragment,n),t=T()},m(n,l){e&&z(e,n,l),J(n,t,l),o=!0},p(n,l){const u={};if(l&4&&(u.data=n[2]),l&2&&(u.form=n[1]),s!==(s=n[0][0])){if(e){Y();const h=e;D(h.$$.fragment,1,0,()=>{G(h,1)}),Q()}s?(e=F(s,d(n)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(n){o||(e&&q(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Rt(r){let e,t,o;var s=r[0][0];function d(n){return{props:{data:n[2],$$slots:{default:[Ot]},$$scope:{ctx:n}}}}return s&&(e=F(s,d(r))),{c(){e&&K(e.$$.fragment),t=T()},l(n){e&&ae(e.$$.fragment,n),t=T()},m(n,l){e&&z(e,n,l),J(n,t,l),o=!0},p(n,l){const u={};if(l&4&&(u.data=n[2]),l&1051&&(u.$$scope={dirty:l,ctx:n}),s!==(s=n[0][0])){if(e){Y();const h=e;D(h.$$.fragment,1,0,()=>{G(h,1)}),Q()}s?(e=F(s,d(n)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(n){o||(e&&q(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function St(r){let e,t,o;var s=r[0][1];function d(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=F(s,d(r))),{c(){e&&K(e.$$.fragment),t=T()},l(n){e&&ae(e.$$.fragment,n),t=T()},m(n,l){e&&z(e,n,l),J(n,t,l),o=!0},p(n,l){const u={};if(l&8&&(u.data=n[3]),l&2&&(u.form=n[1]),s!==(s=n[0][1])){if(e){Y();const h=e;D(h.$$.fragment,1,0,()=>{G(h,1)}),Q()}s?(e=F(s,d(n)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(n){o||(e&&q(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Lt(r){let e,t,o;var s=r[0][1];function d(n){return{props:{data:n[3],$$slots:{default:[Pt]},$$scope:{ctx:n}}}}return s&&(e=F(s,d(r))),{c(){e&&K(e.$$.fragment),t=T()},l(n){e&&ae(e.$$.fragment,n),t=T()},m(n,l){e&&z(e,n,l),J(n,t,l),o=!0},p(n,l){const u={};if(l&8&&(u.data=n[3]),l&1043&&(u.$$scope={dirty:l,ctx:n}),s!==(s=n[0][1])){if(e){Y();const h=e;D(h.$$.fragment,1,0,()=>{G(h,1)}),Q()}s?(e=F(s,d(n)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(n){o||(e&&q(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Pt(r){let e,t,o;var s=r[0][2];function d(n){return{props:{data:n[4],form:n[1]}}}return s&&(e=F(s,d(r))),{c(){e&&K(e.$$.fragment),t=T()},l(n){e&&ae(e.$$.fragment,n),t=T()},m(n,l){e&&z(e,n,l),J(n,t,l),o=!0},p(n,l){const u={};if(l&16&&(u.data=n[4]),l&2&&(u.form=n[1]),s!==(s=n[0][2])){if(e){Y();const h=e;D(h.$$.fragment,1,0,()=>{G(h,1)}),Q()}s?(e=F(s,d(n)),K(e.$$.fragment),q(e.$$.fragment,1),z(e,t.parentNode,t)):e=null}else s&&e.$set(u)},i(n){o||(e&&q(e.$$.fragment,n),o=!0)},o(n){e&&D(e.$$.fragment,n),o=!1},d(n){n&&B(t),e&&G(e,n)}}}function Ot(r){let e,t,o,s;const d=[Lt,St],n=[];function l(u,h){return u[0][2]?0:1}return e=l(r),t=n[e]=d[e](r),{c(){t.c(),o=T()},l(u){t.l(u),o=T()},m(u,h){n[e].m(u,h),J(u,o,h),s=!0},p(u,h){let g=e;e=l(u),e===g?n[e].p(u,h):(Y(),D(n[g],1,1,()=>{n[g]=null}),Q(),t=n[e],t?t.p(u,h):(t=n[e]=d[e](u),t.c()),q(t,1),t.m(o.parentNode,o))},i(u){s||(q(t),s=!0)},o(u){D(t),s=!1},d(u){n[e].d(u),u&&B(o)}}}function ze(r){let e,t=r[6]&&Ge(r);return{c(){e=tt("div"),t&&t.c(),this.h()},l(o){e=nt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=rt(e);t&&t.l(s),s.forEach(B),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),H(e,"position","absolute"),H(e,"left","0"),H(e,"top","0"),H(e,"clip","rect(0 0 0 0)"),H(e,"clip-path","inset(50%)"),H(e,"overflow","hidden"),H(e,"white-space","nowrap"),H(e,"width","1px"),H(e,"height","1px")},m(o,s){J(o,e,s),t&&t.m(e,null)},p(o,s){o[6]?t?t.p(o,s):(t=Ge(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&B(e),t&&t.d()}}}function Ge(r){let e;return{c(){e=at(r[7])},l(t){e=st(t,r[7])},m(t,o){J(t,e,o)},p(t,o){o&128&&ot(e,t[7])},d(t){t&&B(e)}}}function At(r){let e,t,o,s,d;const n=[Rt,Et],l=[];function u(g,L){return g[0][1]?0:1}e=u(r),t=l[e]=n[e](r);let h=r[5]&&ze(r);return{c(){t.c(),o=Ze(),h&&h.c(),s=T()},l(g){t.l(g),o=xe(g),h&&h.l(g),s=T()},m(g,L){l[e].m(g,L),J(g,o,L),h&&h.m(g,L),J(g,s,L),d=!0},p(g,[L]){let N=e;e=u(g),e===N?l[e].p(g,L):(Y(),D(l[N],1,1,()=>{l[N]=null}),Q(),t=l[e],t?t.p(g,L):(t=l[e]=n[e](g),t.c()),q(t,1),t.m(o.parentNode,o)),g[5]?h?h.p(g,L):(h=ze(g),h.c(),h.m(s.parentNode,s)):h&&(h.d(1),h=null)},i(g){d||(q(t),d=!0)},o(g){D(t),d=!1},d(g){l[e].d(g),g&&B(o),h&&h.d(g),g&&B(s)}}}function It(r,e,t){let{stores:o}=e,{page:s}=e,{components:d}=e,{form:n}=e,{data_0:l=null}=e,{data_1:u=null}=e,{data_2:h=null}=e;et(o.page.notify);let g=!1,L=!1,N=null;return ve(()=>{const v=o.page.subscribe(()=>{g&&(t(6,L=!0),t(7,N=document.title||"untitled page"))});return t(5,g=!0),v}),r.$$set=v=>{"stores"in v&&t(8,o=v.stores),"page"in v&&t(9,s=v.page),"components"in v&&t(0,d=v.components),"form"in v&&t(1,n=v.form),"data_0"in v&&t(2,l=v.data_0),"data_1"in v&&t(3,u=v.data_1),"data_2"in v&&t(4,h=v.data_2)},r.$$.update=()=>{r.$$.dirty&768&&o.page.set(s)},[d,n,l,u,h,g,L,N,o,s]}class Ut extends Xe{constructor(e){super(),Ye(this,e,It,At,Qe,{stores:8,page:9,components:0,form:1,data_0:2,data_1:3,data_2:4})}}const jt={},de=[()=>x(()=>import("./chunks/0-ad9b04e4.js"),["chunks\\0-ad9b04e4.js","components\\pages\\_layout.svelte-6964ccb9.js","assets\\app-8251a3b5.css","chunks\\index-ac04eb27.js"],import.meta.url),()=>x(()=>import("./chunks/1-63be177f.js"),["chunks\\1-63be177f.js","components\\error.svelte-d6f10a30.js","chunks\\index-ac04eb27.js","chunks\\stores-d7d13c46.js","chunks\\singletons-639a416c.js"],import.meta.url),()=>x(()=>import("./chunks/2-f4e15a70.js"),["chunks\\2-f4e15a70.js","components\\pages\\_search_\\_layout.svelte-f010bf63.js","assets\\app-8251a3b5.css","chunks\\index-ac04eb27.js"],import.meta.url),()=>x(()=>import("./chunks/3-203c86a8.js"),["chunks\\3-203c86a8.js","chunks\\_page-bac68b31.js","components\\pages\\_page.svelte-57d60fea.js","chunks\\index-ac04eb27.js","chunks\\SimpsonGalaxyTitle-c8d894f7.js"],import.meta.url),()=>x(()=>import("./chunks/4-d47694a5.js"),["chunks\\4-d47694a5.js","chunks\\_page-71af1b63.js","components\\pages\\_search_\\_page.svelte-7a97b816.js","chunks\\index-ac04eb27.js","chunks\\SimpsonGalaxyTitle-c8d894f7.js","chunks\\stores-d7d13c46.js","chunks\\singletons-639a416c.js"],import.meta.url)],Nt=[],Tt={"":[3],"[search]":[4,[2]]},Dt={handleError:({error:r})=>{console.error(r)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class We{constructor(e,t){this.status=e,this.location=t}}const qt="/__data.js";async function Ct(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}const Me="sveltekit:scroll",M="sveltekit:index",le=$t(de,Nt,Tt,jt),Ee=de[0],Re=de[1];Ee();Re();let re={};try{re=JSON.parse(sessionStorage[Me])}catch{}function be(r){re[r]=ke()}function Vt({target:r,base:e,trailing_slash:t}){var qe;const o=[];let s=null;const d={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},l=!1,u=!1,h=!0,g=!1,L=!1,N,v=(qe=history.state)==null?void 0:qe[M];v||(v=Date.now(),history.replaceState({...history.state,[M]:v},"",location.href));const V=re[v];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let W=!1,C,Le,se;async function Pe(){se=se||Promise.resolve(),await se,se=null;const a=new URL(location.href),f=_e(a,!0);s=null,await Ae(f,a,[])}async function pe(a,{noscroll:f=!1,replaceState:p=!1,keepfocus:i=!1,state:c={}},m,_){return typeof a=="string"&&(a=new URL(a,Je(document))),ge({url:a,scroll:f?ke():null,keepfocus:i,redirect_chain:m,details:{state:c,replaceState:p},nav_token:_,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Oe(a){const f=_e(a,!1);if(!f)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:f.id,promise:je(f)},s.promise}async function Ae(a,f,p,i,c={},m){var $,k;Le=c;let _=a&&await je(a);if(_||(_=await De(f,null,ne(new Error(`Not found: ${f.pathname}`),{url:f,params:{},routeId:null}),404)),f=(a==null?void 0:a.url)||f,Le!==c)return!1;if(_.type==="redirect")if(p.length>10||p.includes(f.pathname))_=await oe({status:500,error:ne(new Error("Redirect loop"),{url:f,params:{},routeId:null}),url:f,routeId:null});else return pe(new URL(_.location,f).href,{},[...p,f.pathname],c),!1;else((k=($=_.props)==null?void 0:$.page)==null?void 0:k.status)>=400&&await X.updated.check()&&await ie(f);if(o.length=0,L=!1,g=!0,i&&i.details){const{details:y}=i,b=y.replaceState?0:1;y.state[M]=v+=b,history[y.replaceState?"replaceState":"pushState"](y.state,"",f)}if(s=null,u){n=_.state,_.props.page&&(_.props.page.url=f);const y=fe();N.$set(_.props),y()}else Ie(_);if(i){const{scroll:y,keepfocus:b}=i;if(!b){const R=document.body,P=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var O;(O=getSelection())==null||O.removeAllRanges()}),P!==null?R.setAttribute("tabindex",P):R.removeAttribute("tabindex")}if(await Be(),h){const R=f.hash&&document.getElementById(f.hash.slice(1));y?scrollTo(y.x,y.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Be();h=!0,_.props.page&&(C=_.props.page),m&&m(),g=!1}function Ie(a){var c,m;n=a.state;const f=document.querySelector("style[data-sveltekit]");f&&f.remove(),C=a.props.page;const p=fe();N=new Ut({target:r,props:{...a.props,stores:X},hydrate:!0}),p();const i={from:null,to:ce("to",{params:n.params,routeId:(m=(c=n.route)==null?void 0:c.id)!=null?m:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(_=>_(i)),u=!0}async function ee({url:a,params:f,branch:p,status:i,error:c,route:m,form:_}){var P;const $=p.filter(Boolean),k={type:"loaded",state:{url:a,params:f,branch:p,error:c,route:m},props:{components:$.map(O=>O.node.component)}};_!==void 0&&(k.props.form=_);let y={},b=!C;for(let O=0;O<$.length;O+=1){const U=$[O];y={...y,...U.data},(b||!n.branch.some(j=>j===U))&&(k.props[`data_${O}`]=y,b=b||Object.keys((P=U.data)!=null?P:{}).length>0)}if(b||(b=Object.keys(C.data).length!==Object.keys(y).length),!n.url||a.href!==n.url.href||n.error!==c||_!==void 0||b){k.props.page={error:c,params:f,routeId:m&&m.id,status:i,url:a,form:_,data:b?y:C.data};const O=(U,j)=>{Object.defineProperty(k.props.page,U,{get:()=>{throw new Error(`$page.${U} has been replaced by $page.url.${j}`)}})};O("origin","origin"),O("path","pathname"),O("query","searchParams")}return k}async function he({loader:a,parent:f,url:p,params:i,routeId:c,server_data_node:m}){var y,b,R,P,O;let _=null;const $={dependencies:new Set,params:new Set,parent:!1,url:!1},k=await a();if((y=k.shared)!=null&&y.load){let U=function(...S){for(const w of S){const{href:E}=new URL(w,p);$.dependencies.add(E)}};const j={routeId:c,params:new Proxy(i,{get:(S,w)=>($.params.add(w),S[w])}),data:(b=m==null?void 0:m.data)!=null?b:null,url:ht(p,()=>{$.url=!0}),async fetch(S,w){let E;S instanceof Request?(E=S.url,w={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...w}):E=S;const I=new URL(E,p).href;return U(I),u?wt(I,w):gt(E,I,w)},setHeaders:()=>{},depends:U,parent(){return $.parent=!0,f()}};Object.defineProperties(j,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),_=(R=await k.shared.load.call(null,j))!=null?R:null,_=_?await Ct(_):null}return{node:k,loader:a,server:m,shared:(P=k.shared)!=null&&P.load?{type:"data",data:_,uses:$}:null,data:(O=_!=null?_:m==null?void 0:m.data)!=null?O:null}}function Ue(a,f,p,i){if(L)return!0;if(!p)return!1;if(p.parent&&f||p.url&&a)return!0;for(const c of p.params)if(i[c]!==n.params[c])return!0;for(const c of p.dependencies)if(o.some(m=>m(new URL(c))))return!0;return!1}function me(a,f){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&f!=null?f:null}async function je({id:a,invalidating:f,url:p,params:i,route:c}){var S;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:_,leaf:$}=c,k=[..._,$];m.forEach(w=>w==null?void 0:w().catch(()=>{})),k.forEach(w=>w==null?void 0:w[1]().catch(()=>{}));let y=null;const b=n.url?a!==n.url.pathname+n.url.search:!1,R=k.reduce((w,E,I)=>{var te;const A=n.branch[I],Z=!!(E!=null&&E[0])&&((A==null?void 0:A.loader)!==E[1]||Ue(b,w.some(Boolean),(te=A.server)==null?void 0:te.uses,i));return w.push(Z),w},[]);if(R.some(Boolean)){try{y=await He(p,R)}catch(w){return oe({status:500,error:ne(w,{url:p,params:i,routeId:c.id}),url:p,routeId:c.id})}if(y.type==="redirect")return y}const P=y==null?void 0:y.nodes;let O=!1;const U=k.map(async(w,E)=>{var te;if(!w)return;const I=n.branch[E],A=P==null?void 0:P[E];if((!A||A.type==="skip")&&w[1]===(I==null?void 0:I.loader)&&!Ue(b,O,(te=I.shared)==null?void 0:te.uses,i))return I;if(O=!0,(A==null?void 0:A.type)==="error")throw A;return he({loader:w[1],url:p,params:i,routeId:c.id,parent:async()=>{var Ve;const Ce={};for(let we=0;we<E;we+=1)Object.assign(Ce,(Ve=await U[we])==null?void 0:Ve.data);return Ce},server_data_node:me(A===void 0&&w[0]?{type:"skip"}:A!=null?A:null,I==null?void 0:I.server)})});for(const w of U)w.catch(()=>{});const j=[];for(let w=0;w<k.length;w+=1)if(k[w])try{j.push(await U[w])}catch(E){if(E instanceof We)return{type:"redirect",location:E.location};let I=500,A;P!=null&&P.includes(E)?(I=(S=E.status)!=null?S:I,A=E.error):E instanceof $e?(I=E.status,A=E.body):A=ne(E,{params:i,url:p,routeId:c.id});const Z=await Ne(w,j,m);return Z?await ee({url:p,params:i,branch:j.slice(0,Z.idx).concat(Z.node),status:I,error:A,route:c}):await De(p,c.id,A,I)}else j.push(void 0);return await ee({url:p,params:i,branch:j,status:200,error:null,route:c,form:f?void 0:null})}async function Ne(a,f,p){for(;a--;)if(p[a]){let i=a;for(;!f[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:f,url:p,routeId:i}){var y;const c={},m=await Ee();let _=null;if(m.server)try{const b=await He(p,[!0]);if(b.type!=="data"||b.nodes[0]&&b.nodes[0].type!=="data")throw 0;_=(y=b.nodes[0])!=null?y:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||l)&&await ie(p)}const $=await he({loader:Ee,url:p,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:me(_)}),k={node:await Re(),loader:Re,shared:null,server:null,data:null};return await ee({url:p,params:c,branch:[$,k],status:a,error:f,route:null})}function _e(a,f){if(Te(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of le){const c=i.exec(p);if(c){const m=new URL(a.origin+ut(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:f,route:i,params:dt(c),url:m}}}}function Te(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ge({url:a,scroll:f,keepfocus:p,redirect_chain:i,details:c,type:m,delta:_,nav_token:$,accepted:k,blocked:y}){var U,j,S,w;let b=!1;const R=_e(a,!1),P={from:ce("from",{params:n.params,routeId:(j=(U=n.route)==null?void 0:U.id)!=null?j:null,url:n.url}),to:ce("to",{params:(S=R==null?void 0:R.params)!=null?S:null,routeId:(w=R==null?void 0:R.route.id)!=null?w:null,url:a}),type:m};_!==void 0&&(P.delta=_);const O={...P,cancel:()=>{b=!0}};if(d.before_navigate.forEach(E=>E(O)),b){y();return}be(v),k(),u&&X.navigating.set(P),await Ae(R,a,i,{scroll:f,keepfocus:p,details:c},$,()=>{d.after_navigate.forEach(E=>E(P)),X.navigating.set(null)})}async function De(a,f,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!l?await oe({status:i,error:p,url:a,routeId:f}):await ie(a)}function ie(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{ve(()=>(d.after_navigate.push(a),()=>{const f=d.after_navigate.indexOf(a);d.after_navigate.splice(f,1)}))},before_navigate:a=>{ve(()=>(d.before_navigate.push(a),()=>{const f=d.before_navigate.indexOf(a);d.before_navigate.splice(f,1)}))},disable_scroll_handling:()=>{(g||!u)&&(h=!1)},goto:(a,f={})=>pe(a,f,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:f}=new URL(a,location.href);o.push(p=>p.href===f)}return Pe()},invalidateAll:()=>(L=!0,Pe()),prefetch:async a=>{const f=new URL(a,Je(document));await Oe(f)},prefetch_routes:async a=>{const p=(a?le.filter(i=>a.some(c=>i.exec(c))):le).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const f=new URL(location.href),{branch:p,route:i}=n;if(!i)return;const c=await Ne(n.branch.length,p,i.errors);if(c){const m=await ee({url:f,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});n=m.state;const _=fe();N.$set(m.props),_()}}else if(a.type==="redirect")pe(a.location,{},[]);else{const f={form:a.data,page:{...C,form:a.data,status:a.status}},p=fe();N.$set(f),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var _,$;let c=!1;const m={from:ce("from",{params:n.params,routeId:($=(_=n.route)==null?void 0:_.id)!=null?$:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};d.before_navigate.forEach(k=>k(m)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){be(v);try{sessionStorage[Me]=JSON.stringify(re)}catch{}}});const a=i=>{const{url:c,options:m}=Fe(i);if(c&&m.prefetch){if(Te(c))return;Oe(c)}};let f;const p=i=>{clearTimeout(f),f=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:m,options:_}=Fe(i);if(!c||!m)return;const $=c instanceof SVGAElement;if(!$&&!(m.protocol==="https:"||m.protocol==="http:"))return;const k=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||k.includes("external")||_.reload||($?c.target.baseVal:c.target))return;const[y,b]=m.href.split("#");if(b!==void 0&&y===location.href.split("#")[0]){W=!0,be(v),n.url=m,X.page.set({...C,url:m}),X.page.notify();return}ge({url:m,scroll:_.noscroll?ke():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[M]===v)return;const c=i.state[M]-v;ge({url:new URL(location.href),scroll:re[i.state[M]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{v=i.state[M]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{W&&(W=!1,history.replaceState({...history.state,[M]:++v},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&X.navigating.set(null)})},_hydrate:async({status:a,error:f,node_ids:p,params:i,routeId:c,data:m,form:_})=>{var y;l=!0;const $=new URL(location.href);let k;try{const b=p.map(async(R,P)=>{const O=m[P];return he({loader:de[R],url:$,params:i,routeId:c,parent:async()=>{const U={};for(let j=0;j<P;j+=1)Object.assign(U,(await b[j]).data);return U},server_data_node:me(O)})});k=await ee({url:$,params:i,branch:await Promise.all(b),status:a,error:f,form:_,route:(y=le.find(R=>R.id===c))!=null?y:null})}catch(b){if(b instanceof We){await ie(new URL(b.location,location.href));return}k=await oe({status:b instanceof $e?b.status:500,error:ne(b,{url:$,params:i,routeId:c}),url:$,routeId:c})}Ie(k)}}}let Bt=1;async function He(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+qt,t.searchParams.set("__invalid",e.map(s=>s?"y":"n").join("")),t.searchParams.set("__id",String(Bt++)),await x(()=>import(t.href),[],import.meta.url);const o=window.__sveltekit_data;return delete window.__sveltekit_data,o}function ne(r,e){var t;return r instanceof $e?r.body:(t=Dt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Jt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ce(r,e){for(const t of Jt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function fe(){return()=>{}}async function zt({env:r,hydrate:e,paths:t,target:o,trailing_slash:s}){it(t);const d=Vt({target:o,base:t.base,trailing_slash:s});lt({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{zt as start};
