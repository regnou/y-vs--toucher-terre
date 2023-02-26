import{S as b,i as E,s as v,z as x,A,B,g as D,d as O,C as T,D as C,o as H,k as l,r as d,l as p,m as h,u as _,h as $,p as g,b as M,E as o,n as R}from"../chunks/index.cef1b14a.mjs";import{A as S}from"../chunks/AxFrameCms.827dd033.mjs";import{p as y}from"../chunks/stores.c450d993.mjs";import{a as I}from"../chunks/AX_STORE__UI_isopen.6e371441.mjs";function L(c){let t,a,e,n,s,f,u;return{c(){t=l("div"),a=l("div"),e=d(`Tableau de bord
			`),n=l("br"),s=d(`
			WELCOME TO THE DASHBOARD !
			`),f=l("br"),u=d(`
			NB: rien a afficher pour l instant dans cet onglet.`),this.h()},l(i){t=p(i,"DIV",{slot:!0});var m=h(t);a=p(m,"DIV",{class:!0});var r=h(a);e=_(r,`Tableau de bord
			`),n=p(r,"BR",{}),s=_(r,`
			WELCOME TO THE DASHBOARD !
			`),f=p(r,"BR",{}),u=_(r,`
			NB: rien a afficher pour l instant dans cet onglet.`),r.forEach($),m.forEach($),this.h()},h(){g(a,"class",""),g(t,"slot","cms")},m(i,m){M(i,t,m),o(t,a),o(a,e),o(a,n),o(a,s),o(a,f),o(a,u)},p:R,d(i){i&&$(t)}}}function N(c){let t,a;return t=new S({props:{$$slots:{cms:[L]},$$scope:{ctx:c}}}),{c(){x(t.$$.fragment)},l(e){A(t.$$.fragment,e)},m(e,n){B(t,e,n),a=!0},p(e,[n]){const s={};n&2&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){a||(D(t.$$.fragment,e),a=!0)},o(e){O(t.$$.fragment,e),a=!1},d(e){T(t,e)}}}function V(c,t,a){let e;return C(c,y,n=>a(0,e=n)),H(()=>{I(void 0,e.url.pathname,"HOME (cms)")}),[]}class z extends b{constructor(t){super(),E(this,t,V,N,v,{})}}export{z as default};
