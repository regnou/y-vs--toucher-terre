import{S as b,i as g,s as A,z as $,A as N,B as x,g as B,d as C,C as D,D as d,o as R,k as _,r as f,l as p,m as h,u as E,h as T,p as O,b as S,E as i,n as v}from"../chunks/index.d1eb6e3e.js";import{b as H,p as M,A as X,a as y}from"../chunks/AX_BASE1__STORE_CONTENT.31ee1a53.js";import{A as I}from"../chunks/Ax1FrameCms.d9283fcb.js";function L(o){let t,e,a,n,s,r,u;return{c(){t=_("div"),e=_("div"),a=f(`Tableau de bord
			`),n=_("br"),s=f(`
			WELCOME TO THE DASHBOARD !
			`),r=_("br"),u=f(`
			NB: rien a afficher pour l instant dans cet onglet.`),this.h()},l(l){t=p(l,"DIV",{slot:!0});var m=h(t);e=p(m,"DIV",{class:!0});var c=h(e);a=E(c,`Tableau de bord
			`),n=p(c,"BR",{}),s=E(c,`
			WELCOME TO THE DASHBOARD !
			`),r=p(c,"BR",{}),u=E(c,`
			NB: rien a afficher pour l instant dans cet onglet.`),c.forEach(T),m.forEach(T),this.h()},h(){O(e,"class",""),O(t,"slot","cms")},m(l,m){S(l,t,m),i(t,e),i(e,a),i(e,n),i(e,s),i(e,r),i(e,u)},p:v,d(l){l&&T(t)}}}function V(o){let t,e;return t=new I({props:{$$slots:{cms:[L]},$$scope:{ctx:o}}}),{c(){$(t.$$.fragment)},l(a){N(t.$$.fragment,a)},m(a,n){x(t,a,n),e=!0},p(a,[n]){const s={};n&8&&(s.$$scope={dirty:n,ctx:a}),t.$set(s)},i(a){e||(B(t.$$.fragment,a),e=!0)},o(a){C(t.$$.fragment,a),e=!1},d(a){D(t,a)}}}function W(o,t,e){let a,n,s;return d(o,M,r=>e(0,a=r)),d(o,X,r=>e(1,n=r)),d(o,y,r=>e(2,s=r)),R(()=>{H({data:s,db:n},a.url.pathname,"HOME ")}),[]}class z extends b{constructor(t){super(),g(this,t,W,V,A,{})}}export{z as default};
