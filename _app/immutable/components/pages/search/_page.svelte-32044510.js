import{S as Q,i as Z,s as $,k as w,r as I,a as M,l as x,m as E,u as V,h as f,c as F,q as D,p as k,b as H,G as h,K as ee,f as U,H as z,n as N,L as W,o as te,v as q,I as B,M as le}from"../../../chunks/index-6147ecbe.js";import{S as ae,f as J}from"../../../chunks/index-c74a54fe.js";function O(c,a,t){const r=c.slice();return r[5]=a[t],r[7]=t,r}function P(c,a,t){const r=c.slice();return r[8]=a[t],r}function X(c){let a,t,r=c[8]+"",o,b;return{c(){a=w("div"),t=w("h2"),o=I(r),b=M(),this.h()},l(_){a=x(_,"DIV",{class:!0});var u=E(a);t=x(u,"H2",{class:!0});var p=E(t);o=V(p,r),p.forEach(f),b=F(u),u.forEach(f),this.h()},h(){k(t,"class","text-[0.60rem] text-gray-50 tracking-widest mx-4 uppercase"),k(a,"class","")},m(_,u){H(_,a,u),h(a,t),h(t,o),h(a,b)},p(_,u){u&2&&r!==(r=_[8]+"")&&q(o,r)},d(_){_&&f(a)}}}function Y(c){let a,t,r,o,b,_,u=c[5].name+"",p,L,g,d=c[5].description+"",y,v,S,C,A,i,l=c[5].topics,s=[];for(let e=0;e<l.length;e+=1)s[e]=X(P(c,l,e));return{c(){a=w("div"),t=w("a"),r=w("h2"),o=w("mark"),b=I("#"),_=I("\xA0"),p=I(u),L=M(),g=w("h2"),y=I(d),v=M(),S=w("div");for(let e=0;e<s.length;e+=1)s[e].c();A=M(),this.h()},l(e){a=x(e,"DIV",{class:!0});var m=E(a);t=x(m,"A",{href:!0,rel:!0,target:!0,class:!0});var n=E(t);r=x(n,"H2",{class:!0});var R=E(r);o=x(R,"MARK",{style:!0,class:!0});var j=E(o);b=V(j,"#"),j.forEach(f),_=V(R,"\xA0"),p=V(R,u),R.forEach(f),L=F(n),g=x(n,"H2",{class:!0});var G=E(g);y=V(G,d),G.forEach(f),v=F(n),S=x(n,"DIV",{class:!0});var K=E(S);for(let T=0;T<s.length;T+=1)s[T].l(K);K.forEach(f),n.forEach(f),A=F(m),m.forEach(f),this.h()},h(){D(o,"background","none"),k(o,"class","text-[#FF0055]"),k(r,"class","text-white text-center text-xl font-black"),k(g,"class","text-gray-200 text-center text-md font-base mt-4"),k(S,"class","flex justify-center items-center mt-6"),k(t,"href",C=c[5].html_url),k(t,"rel","noopener noreferrer"),k(t,"target","_blank"),k(t,"class","mb-48 h-64 px-10 pt-6 rounded-[2.5rem] tracking-widest shadow-[#202020]"),k(a,"class","group my-20 translate-y-0 hover:-translate-y-8 duration-[400ms] ease-in-out lg:mr-10 mx-28 lg:mx-0 w-[20rem] md:w-[40rem] 2xl:w-[50rem]")},m(e,m){H(e,a,m),h(a,t),h(t,r),h(r,o),h(o,b),h(r,_),h(r,p),h(t,L),h(t,g),h(g,y),h(t,v),h(t,S);for(let n=0;n<s.length;n+=1)s[n].m(S,null);h(a,A)},p(e,m){if(m&2&&u!==(u=e[5].name+"")&&q(p,u),m&2&&d!==(d=e[5].description+"")&&q(y,d),m&2){l=e[5].topics;let n;for(n=0;n<l.length;n+=1){const R=P(e,l,n);s[n]?s[n].p(R,m):(s[n]=X(R),s[n].c(),s[n].m(S,null))}for(;n<s.length;n+=1)s[n].d(1);s.length=l.length}m&2&&C!==(C=e[5].html_url)&&k(t,"href",C)},i(e){i||z(()=>{i=B(a,J,{delay:250*c[7],duration:1e3}),i.start()})},o:N,d(e){e&&f(a),W(s,e)}}}function se(c){let a,t,r,o,b=c[2].toUpperCase()+"",_,u,p,L,g,d,y,v,S,C,A=c[1],i=[];for(let l=0;l<A.length;l+=1)i[l]=Y(O(c,A,l));return{c(){a=w("div"),t=w("div"),r=I(`THE \r
        `),o=w("mark"),_=I(b),u=I(`\r
        GALAXY`),L=M(),g=w("div"),d=w("div");for(let l=0;l<i.length;l+=1)i[l].c();y=M(),v=w("canvas"),this.h()},l(l){a=x(l,"DIV",{class:!0});var s=E(a);t=x(s,"DIV",{class:!0});var e=E(t);r=V(e,`THE \r
        `),o=x(e,"MARK",{style:!0});var m=E(o);_=V(m,b),m.forEach(f),u=V(e,`\r
        GALAXY`),e.forEach(f),s.forEach(f),L=F(l),g=x(l,"DIV",{class:!0});var n=E(g);d=x(n,"DIV",{});var R=E(d);for(let j=0;j<i.length;j+=1)i[j].l(R);R.forEach(f),n.forEach(f),y=F(l),v=x(l,"CANVAS",{style:!0}),E(v).forEach(f),this.h()},h(){D(o,"background","none"),D(o,"color","#FF0055"),k(t,"class","mt-24 mb-10 font-black text-white tracking-widest text-6xl cursor-pointer hover:tracking-[0.25em] duration-500 ease-in-out"),k(a,"class","justify-center items-center flex mx-20"),k(g,"class","flex justify-center items-center"),D(v,"position","absolute"),D(v,"top","0"),D(v,"left","0"),D(v,"z-index","-1"),D(v,"position","fixed")},m(l,s){H(l,a,s),h(a,t),h(t,r),h(t,o),h(o,_),h(t,u),H(l,L,s),H(l,g,s),h(g,d);for(let e=0;e<i.length;e+=1)i[e].m(d,null);H(l,y,s),H(l,v,s),c[4](v),S||(C=ee(t,"click",c[3]),S=!0)},p(l,[s]){if(s&2){A=l[1];let e;for(e=0;e<A.length;e+=1){const m=O(l,A,e);i[e]?(i[e].p(m,s),U(i[e],1)):(i[e]=Y(m),i[e].c(),U(i[e],1),i[e].m(d,null))}for(;e<i.length;e+=1)i[e].d(1);i.length=A.length}},i(l){p||z(()=>{p=B(a,J,{delay:400,duration:1200}),p.start()});for(let s=0;s<A.length;s+=1)U(i[s])},o:N,d(l){l&&f(a),l&&f(L),l&&f(g),W(i,l),l&&f(y),l&&f(v),c[4](null),S=!1,C()}}}function re(c,a,t){const r=new URLSearchParams(window.location.search).get("query");let o,b=[];te(async()=>{await ae(o),["https://api.github.com/users/Simpson-Computer-Technologies-Research/repos","https://api.github.com/users/realTristan/repos"].forEach(async(L,g)=>{await self.fetch(L).then(d=>d.json()).then(d=>{new Map(Object.entries(d)).forEach((y,v)=>{y.name.toLowerCase().includes(r.toLowerCase())&&t(1,b=[...b,y])})}).catch(d=>console.log(d))})});const _=()=>window.location.reload();function u(p){le[p?"unshift":"push"](()=>{o=p,t(0,o)})}return[o,b,r,_,u]}class ie extends Q{constructor(a){super(),Z(this,a,re,se,$,{})}}export{ie as default};
