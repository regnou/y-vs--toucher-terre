import{S as u,i as h,s as _,k as l,l as d,m as f,h as o,p as n,a2 as v,b as p,E as x,n as i,q as m}from"./index.d1eb6e3e.js";import{A as g}from"./AX_CONST__FRAME.5dcc56c2.js";function y(a){let t,e,s;return{c(){t=l("div"),e=l("img"),this.h()},l(r){t=d(r,"DIV",{class:!0});var c=f(t);e=d(c,"IMG",{class:!0,src:!0,alt:!0}),c.forEach(o),this.h()},h(){n(e,"class","w-36"),v(e.src,s=g+"icon/separator.png")||n(e,"src",s),n(e,"alt",""),n(t,"class","my-3 grid place-items-center")},m(r,c){p(r,t,c),x(t,e)},p:i,i,o:i,d(r){r&&o(t)}}}class b extends u{constructor(t){super(),h(this,t,null,y,_,{})}}function S(a){let t;return{c(){t=l("div"),this.h()},l(e){t=d(e,"DIV",{style:!0,class:!0});var s=f(t);s.forEach(o),this.h()},h(){m(t,"color","var(--mdc-theme-on-secondary)"),m(t,"border","none"),n(t,"class","m-auto w-3/4 text-center font-bold")},m(e,s){p(e,t,s),t.innerHTML=a[0]},p(e,[s]){s&1&&(t.innerHTML=e[0])},i,o:i,d(e){e&&o(t)}}}function A(a,t,e){let{text:s="N/A"}=t;return a.$$set=r=>{"text"in r&&e(0,s=r.text)},[s]}class q extends u{constructor(t){super(),h(this,t,A,S,_,{text:0})}}export{q as P,b as S};
