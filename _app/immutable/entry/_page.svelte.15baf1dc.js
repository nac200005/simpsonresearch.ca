import{S as O,i as K,s as U,k as p,r as w,l as k,m as E,u as y,h as u,q as I,p as g,b as R,H as d,n as G,I as Q,J as Z,K as q,L as de,g as $,M as he,o as me,a as N,c as H,v as W,N as _e,d as M,f as F,e as re,w as P,z as Y,A as B,B as X,C as J,x as ve}from"../chunks/index.c10d3ee8.js";import{f as C,S as pe,E as ke}from"../chunks/index.957d29fd.js";function Ee(c){let t,l,s,e,r,a,n,o,f,i,h;return{c(){t=p("div"),l=p("div"),s=w(`WELCOME\r
    `),e=p("mark"),r=w("$USER"),a=p("mark"),n=w("/"),o=w(c[0]),this.h()},l(m){t=k(m,"DIV",{class:!0});var S=E(t);l=k(S,"DIV",{class:!0});var A=E(l);s=y(A,`WELCOME\r
    `),e=k(A,"MARK",{style:!0});var V=E(e);r=y(V,"$USER"),a=k(V,"MARK",{style:!0});var b=E(a);n=y(b,"/"),b.forEach(u),o=y(V,c[0]),V.forEach(u),A.forEach(u),S.forEach(u),this.h()},h(){I(a,"background","none"),I(a,"color","white"),I(a,"font-size","4rem"),I(e,"background","none"),I(e,"color","#FF0055"),I(e,"font-size","3.5rem"),g(l,"class","mt-72 font-black text-white tracking-widest text-[3rem]"),g(t,"class","justify-center items-center flex mx-20")},m(m,S){R(m,t,S),d(t,l),d(l,s),d(l,e),d(e,r),d(e,a),d(a,n),d(e,o),h=!0},p:G,i(m){h||(Q(()=>{h&&(i&&i.end(1),f=Z(t,C,{delay:1e3,duration:2e3}),f.start())}),h=!0)},o(m){f&&f.invalidate(),i=q(t,C,{duration:400}),h=!1},d(m){m&&u(t),m&&i&&i.end()}}}function be(c){return[Math.random().toString(36).slice(2,6).toUpperCase()]}class ge extends O{constructor(t){super(),K(this,t,be,Ee,U,{})}}function xe(c){let t,l,s,e,r,a,n,o,f;return{c(){t=p("div"),l=p("div"),s=w(`THE\r
    `),e=p("mark"),r=w("SIMPSON"),a=w(`\r
    GALAXY`),this.h()},l(i){t=k(i,"DIV",{class:!0});var h=E(t);l=k(h,"DIV",{class:!0});var m=E(l);s=y(m,`THE\r
    `),e=k(m,"MARK",{style:!0});var S=E(e);r=y(S,"SIMPSON"),S.forEach(u),a=y(m,`\r
    GALAXY`),m.forEach(u),h.forEach(u),this.h()},h(){I(e,"background","none"),I(e,"color","#FF0055"),g(l,"class","mt-24 mb-10 font-black text-white tracking-widest text-6xl cursor-pointer hover:tracking-[0.25em] duration-500 ease-in-out"),g(t,"class","justify-center items-center flex mx-20")},m(i,h){R(i,t,h),d(t,l),d(l,s),d(l,e),d(e,r),d(l,a),o||(f=de(l,"click",c[0]),o=!0)},p:G,i(i){n||Q(()=>{n=Z(t,C,{delay:400,duration:1200}),n.start()})},o:G,d(i){i&&u(t),o=!1,f()}}}function $e(c){return[()=>window.location.reload()]}class we extends O{constructor(t){super(),K(this,t,$e,xe,U,{})}}function se(c,t,l){const s=c.slice();return s[1]=t[l],s[3]=l,s}function ae(c,t,l){const s=c.slice();return s[4]=t[l],s}function ne(c){let t,l,s=c[4]+"",e,r;return{c(){t=p("div"),l=p("h2"),e=w(s),r=N(),this.h()},l(a){t=k(a,"DIV",{class:!0});var n=E(t);l=k(n,"H2",{class:!0});var o=E(l);e=y(o,s),o.forEach(u),r=H(n),n.forEach(u),this.h()},h(){g(l,"class","text-[0.60rem] text-gray-50 tracking-widest mx-4 uppercase"),g(t,"class","")},m(a,n){R(a,t,n),d(t,l),d(l,e),d(t,r)},p(a,n){n&1&&s!==(s=a[4]+"")&&W(e,s)},d(a){a&&u(t)}}}function ie(c){let t,l,s,e,r,a,n=c[1].name+"",o,f,i,h=c[1].description+"",m,S,A,V,b,T,L=c[1].topics,x=[];for(let _=0;_<L.length;_+=1)x[_]=ne(ae(c,L,_));return{c(){t=p("div"),l=p("a"),s=p("h2"),e=p("mark"),r=w("#"),a=w(" "),o=w(n),f=N(),i=p("h2"),m=w(h),S=N(),A=p("div");for(let _=0;_<x.length;_+=1)x[_].c();b=N(),this.h()},l(_){t=k(_,"DIV",{class:!0});var D=E(t);l=k(D,"A",{href:!0,rel:!0,target:!0,class:!0});var v=E(l);s=k(v,"H2",{class:!0});var j=E(s);e=k(j,"MARK",{style:!0,class:!0});var ee=E(e);r=y(ee,"#"),ee.forEach(u),a=y(j," "),o=y(j,n),j.forEach(u),f=H(v),i=k(v,"H2",{class:!0});var te=E(i);m=y(te,h),te.forEach(u),S=H(v),A=k(v,"DIV",{class:!0});var le=E(A);for(let z=0;z<x.length;z+=1)x[z].l(le);le.forEach(u),v.forEach(u),b=H(D),D.forEach(u),this.h()},h(){I(e,"background","none"),g(e,"class","text-[#FF0055]"),g(s,"class","text-white text-center text-xl font-black"),g(i,"class","text-gray-200 text-center text-md font-base mt-4"),g(A,"class","flex justify-center items-center mt-6"),g(l,"href",V=c[1].html_url),g(l,"rel","noopener noreferrer"),g(l,"target","_blank"),g(l,"class","mb-48 h-64 px-10 pt-6 rounded-[2.5rem] tracking-widest shadow-[#202020]"),g(t,"class","group my-20 translate-y-0 hover:-translate-y-8 duration-[400ms] ease-in-out lg:mr-10 mx-28 lg:mx-0 w-[20rem] md:w-[40rem] 2xl:w-[50rem]")},m(_,D){R(_,t,D),d(t,l),d(l,s),d(s,e),d(e,r),d(s,a),d(s,o),d(l,f),d(l,i),d(i,m),d(l,S),d(l,A);for(let v=0;v<x.length;v+=1)x[v]&&x[v].m(A,null);d(t,b)},p(_,D){if(D&1&&n!==(n=_[1].name+"")&&W(o,n),D&1&&h!==(h=_[1].description+"")&&W(m,h),D&1){L=_[1].topics;let v;for(v=0;v<L.length;v+=1){const j=ae(_,L,v);x[v]?x[v].p(j,D):(x[v]=ne(j),x[v].c(),x[v].m(A,null))}for(;v<x.length;v+=1)x[v].d(1);x.length=L.length}D&1&&V!==(V=_[1].html_url)&&g(l,"href",V)},i(_){T||Q(()=>{T=Z(t,C,{delay:1200+250*c[3],duration:1e3}),T.start()})},o:G,d(_){_&&u(t),he(x,_)}}}function ye(c){let t,l,s=c[0],e=[];for(let r=0;r<s.length;r+=1)e[r]=ie(se(c,s,r));return{c(){t=p("div"),l=p("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=k(r,"DIV",{class:!0});var a=E(t);l=k(a,"DIV",{});var n=E(l);for(let o=0;o<e.length;o+=1)e[o].l(n);n.forEach(u),a.forEach(u),this.h()},h(){g(t,"class","flex justify-center items-center")},m(r,a){R(r,t,a),d(t,l);for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,null)},p(r,[a]){if(a&1){s=r[0];let n;for(n=0;n<s.length;n+=1){const o=se(r,s,n);e[n]?(e[n].p(o,a),$(e[n],1)):(e[n]=ie(o),e[n].c(),$(e[n],1),e[n].m(l,null))}for(;n<e.length;n+=1)e[n].d(1);e.length=s.length}},i(r){for(let a=0;a<s.length;a+=1)$(e[a])},o:G,d(r){r&&u(t),he(e,r)}}}function Se(c,t,l){let s=[];return me(async()=>{await self.fetch("https://api.github.com/users/Simpson-Computer-Technologies-Research/repos").then(e=>e.json()).then(e=>l(0,s=[...s,...e])).catch(e=>console.log(e)),await self.fetch("https://api.github.com/users/realTristan/repos").then(e=>e.json()).then(e=>l(0,s=[...s,...e])).catch(e=>console.log(e))}),[s]}class Ie extends O{constructor(t){super(),K(this,t,Se,ye,U,{})}}function oe(c){let t,l,s,e,r,a,n,o,f,i,h,m,S,A,V;return{c(){t=p("div"),l=p("div"),s=w(`SIMPSON\r
      `),e=p("mark"),r=w("+"),a=w(`\r
      RESEARCH`),o=N(),f=p("div"),i=p("button"),h=w("ENGAGE LIGHT SPEED"),this.h()},l(b){t=k(b,"DIV",{class:!0});var T=E(t);l=k(T,"DIV",{class:!0});var L=E(l);s=y(L,`SIMPSON\r
      `),e=k(L,"MARK",{style:!0});var x=E(e);r=y(x,"+"),x.forEach(u),a=y(L,`\r
      RESEARCH`),L.forEach(u),T.forEach(u),o=H(b),f=k(b,"DIV",{class:!0});var _=E(f);i=k(_,"BUTTON",{class:!0});var D=E(i);h=y(D,"ENGAGE LIGHT SPEED"),D.forEach(u),_.forEach(u),this.h()},h(){I(e,"background","none"),I(e,"color","#FF0055"),g(l,"class","mt-72 font-black text-white tracking-widest text-6xl"),g(t,"class","justify-center items-center flex mx-20"),g(i,"class","px-4 text-xl md:text-2xl w-42 h-12 backdrop-blur-sm text-white rounded-lg font-black tracking-widest hover:bg-white hover:tracking-[0.2em] hover:text-black duration-700 ease-in-out"),g(f,"class","mt-6 justify-center items-center flex mr-8")},m(b,T){R(b,t,T),d(t,l),d(l,s),d(l,e),d(e,r),d(l,a),R(b,o,T),R(b,f,T),d(f,i),d(i,h),S=!0,A||(V=de(i,"click",c[3]),A=!0)},p:G,i(b){S||(n&&n.end(1),m&&m.end(1),S=!0)},o(b){n=q(t,C,{duration:600}),m=q(f,C,{duration:600}),S=!1},d(b){b&&u(t),b&&n&&n.end(),b&&u(o),b&&u(f),b&&m&&m.end(),A=!1,V()}}}function ce(c){let t,l,s,e=!c[2]&&fe(),r=c[2]&&ue();return{c(){e&&e.c(),t=N(),r&&r.c(),l=re()},l(a){e&&e.l(a),t=H(a),r&&r.l(a),l=re()},m(a,n){e&&e.m(a,n),R(a,t,n),r&&r.m(a,n),R(a,l,n),s=!0},p(a,n){a[2]?e&&(P(),M(e,1,1,()=>{e=null}),F()):e?n&4&&$(e,1):(e=fe(),e.c(),$(e,1),e.m(t.parentNode,t)),a[2]?r?n&4&&$(r,1):(r=ue(),r.c(),$(r,1),r.m(l.parentNode,l)):r&&(P(),M(r,1,1,()=>{r=null}),F())},i(a){s||($(e),$(r),s=!0)},o(a){M(e),M(r),s=!1},d(a){e&&e.d(a),a&&u(t),r&&r.d(a),a&&u(l)}}}function fe(c){let t,l;return t=new ge({}),{c(){Y(t.$$.fragment)},l(s){B(t.$$.fragment,s)},m(s,e){X(t,s,e),l=!0},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){M(t.$$.fragment,s),l=!1},d(s){J(t,s)}}}function ue(c){let t,l,s,e;return t=new we({}),s=new Ie({}),{c(){Y(t.$$.fragment),l=N(),Y(s.$$.fragment)},l(r){B(t.$$.fragment,r),l=H(r),B(s.$$.fragment,r)},m(r,a){X(t,r,a),R(r,l,a),X(s,r,a),e=!0},i(r){e||($(t.$$.fragment,r),$(s.$$.fragment,r),e=!0)},o(r){M(t.$$.fragment,r),M(s.$$.fragment,r),e=!1},d(r){J(t,r),r&&u(l),J(s,r)}}}function Ae(c){let t,l,s,e,r,a,n,o=!c[1]&&oe(c),f=c[1]&&ce(c);return{c(){t=p("style"),l=w("body { background: black; }"),s=N(),o&&o.c(),e=N(),f&&f.c(),r=N(),a=p("canvas"),this.h()},l(i){const h=_e("svelte-1nh8qc1",document.head);t=k(h,"STYLE",{});var m=E(t);l=y(m,"body { background: black; }"),m.forEach(u),h.forEach(u),s=H(i),o&&o.l(i),e=H(i),f&&f.l(i),r=H(i),a=k(i,"CANVAS",{style:!0}),E(a).forEach(u),this.h()},h(){I(a,"position","absolute"),I(a,"top","0"),I(a,"left","0"),I(a,"z-index","-1"),I(a,"position","fixed")},m(i,h){d(document.head,t),d(t,l),R(i,s,h),o&&o.m(i,h),R(i,e,h),f&&f.m(i,h),R(i,r,h),R(i,a,h),c[4](a),n=!0},p(i,[h]){i[1]?o&&(P(),M(o,1,1,()=>{o=null}),F()):o?(o.p(i,h),h&2&&$(o,1)):(o=oe(i),o.c(),$(o,1),o.m(e.parentNode,e)),i[1]?f?(f.p(i,h),h&2&&$(f,1)):(f=ce(i),f.c(),$(f,1),f.m(r.parentNode,r)):f&&(P(),M(f,1,1,()=>{f=null}),F())},i(i){n||($(o),$(f),n=!0)},o(i){M(o),M(f),n=!1},d(i){u(t),i&&u(s),o&&o.d(i),i&&u(e),f&&f.d(i),i&&u(r),i&&u(a),c[4](null)}}}function Re(c,t,l){let s;me(async()=>await pe(s));let e,r=!1;const a=async()=>{setTimeout(async()=>l(1,e=!0),2500),setTimeout(async()=>l(2,r=!0),5300),ke()};function n(o){ve[o?"unshift":"push"](()=>{s=o,l(0,s)})}return[s,e,r,a,n]}class Le extends O{constructor(t){super(),K(this,t,Re,Ae,U,{})}}export{Le as default};
