import{S as tt,i as nt,s as Fe,N as ut,L as x,k as Rt,l as kt,m as Dt,h as H,P as Tt,b as se,Q as ct,R as ht,T as dt,U as ft,V as st,W as es,g as W,d as X,X as ts,J as ie,K as mt,M as pt,x as $e,aa as qf,ab as Kf,ac as Ic,y as Ge,z as Oe,e as re,A as jt,B as Ne,Y as be,w as Ht,C as Le,f as zt,Z as Je,_ as De,$ as ws,a as su,c as iu,p as Jt,ad as me,F as Hn,o as wr,G as Gf,H as Wf,I as Xf,a4 as Qf,n as Ro,O as tr,ae as Yf,D as Jf,a2 as Ec,a3 as Zf,r as $f,u as em,v as tm}from"./index.7b956d01.js";import{_ as Nn,b as Sn,M as aa,u as ca,f as un,R as nr,c as lt,B as nm,A as ru,d as tn,S as sm,g as la,h as im,D as Ar,i as rm,j as om,k as am,N as cm,U as lm,l as li,L as um,m as hm}from"./Button.159e9cda.js";import{a as Ye,A as yt,p as dm}from"./AX_BASE1__STORE_CONTENT.7a1475bd.js";import{A as fm}from"./AX_STORE__frame.13548d38.js";import{r as mm}from"./singletons.cda8cad1.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mi={ICON_BUTTON_ON:"mdc-icon-button--on",ROOT:"mdc-icon-button"},Wt={ARIA_LABEL:"aria-label",ARIA_PRESSED:"aria-pressed",DATA_ARIA_LABEL_OFF:"data-aria-label-off",DATA_ARIA_LABEL_ON:"data-aria-label-on",CHANGE_EVENT:"MDCIconButtonToggle:change"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pm=function(n){Nn(e,n);function e(t){var s=n.call(this,Sn(Sn({},e.defaultAdapter),t))||this;return s.hasToggledAriaLabel=!1,s}return Object.defineProperty(e,"cssClasses",{get:function(){return Mi},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},hasClass:function(){return!1},notifyChange:function(){},removeClass:function(){},getAttr:function(){return null},setAttr:function(){}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.getAttr(Wt.DATA_ARIA_LABEL_ON),s=this.adapter.getAttr(Wt.DATA_ARIA_LABEL_OFF);if(t&&s){if(this.adapter.getAttr(Wt.ARIA_PRESSED)!==null)throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");this.hasToggledAriaLabel=!0}else this.adapter.setAttr(Wt.ARIA_PRESSED,String(this.isOn()))},e.prototype.handleClick=function(){this.toggle(),this.adapter.notifyChange({isOn:this.isOn()})},e.prototype.isOn=function(){return this.adapter.hasClass(Mi.ICON_BUTTON_ON)},e.prototype.toggle=function(t){if(t===void 0&&(t=!this.isOn()),t?this.adapter.addClass(Mi.ICON_BUTTON_ON):this.adapter.removeClass(Mi.ICON_BUTTON_ON),this.hasToggledAriaLabel){var s=t?this.adapter.getAttr(Wt.DATA_ARIA_LABEL_ON):this.adapter.getAttr(Wt.DATA_ARIA_LABEL_OFF);this.adapter.setAttr(Wt.ARIA_LABEL,s||"")}else this.adapter.setAttr(Wt.ARIA_PRESSED,""+t)},e}(aa);/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ro="mdc-dom-focus-sentinel",gm=function(){function n(e,t){t===void 0&&(t={}),this.root=e,this.options=t,this.elFocusedBeforeTrapFocus=null}return n.prototype.trapFocus=function(){var e=this.getFocusableElements(this.root);if(e.length===0)throw new Error("FocusTrap: Element must have at least one focusable child.");this.elFocusedBeforeTrapFocus=document.activeElement instanceof HTMLElement?document.activeElement:null,this.wrapTabFocus(this.root),this.options.skipInitialFocus||this.focusInitialElement(e,this.options.initialFocusEl)},n.prototype.releaseFocus=function(){[].slice.call(this.root.querySelectorAll("."+ro)).forEach(function(e){e.parentElement.removeChild(e)}),!this.options.skipRestoreFocus&&this.elFocusedBeforeTrapFocus&&this.elFocusedBeforeTrapFocus.focus()},n.prototype.wrapTabFocus=function(e){var t=this,s=this.createSentinel(),i=this.createSentinel();s.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[r.length-1].focus()}),i.addEventListener("focus",function(){var r=t.getFocusableElements(e);r.length>0&&r[0].focus()}),e.insertBefore(s,e.children[0]),e.appendChild(i)},n.prototype.focusInitialElement=function(e,t){var s=0;t&&(s=Math.max(e.indexOf(t),0)),e[s].focus()},n.prototype.getFocusableElements=function(e){var t=[].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));return t.filter(function(s){var i=s.getAttribute("aria-disabled")==="true"||s.getAttribute("disabled")!=null||s.getAttribute("hidden")!=null||s.getAttribute("aria-hidden")==="true",r=s.tabIndex>=0&&s.getBoundingClientRect().width>0&&!s.classList.contains(ro)&&!i,a=!1;if(r){var o=getComputedStyle(s);a=o.display==="none"||o.visibility==="hidden"}return r&&!a})},n.prototype.createSentinel=function(){var e=document.createElement("div");return e.setAttribute("tabindex","0"),e.setAttribute("aria-hidden","true"),e.classList.add(ro),e},n}();const ym=Object.freeze(Object.defineProperty({__proto__:null,FocusTrap:gm},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Q={UNKNOWN:"Unknown",BACKSPACE:"Backspace",ENTER:"Enter",SPACEBAR:"Spacebar",PAGE_UP:"PageUp",PAGE_DOWN:"PageDown",END:"End",HOME:"Home",ARROW_LEFT:"ArrowLeft",ARROW_UP:"ArrowUp",ARROW_RIGHT:"ArrowRight",ARROW_DOWN:"ArrowDown",DELETE:"Delete",ESCAPE:"Escape",TAB:"Tab"},it=new Set;it.add(Q.BACKSPACE);it.add(Q.ENTER);it.add(Q.SPACEBAR);it.add(Q.PAGE_UP);it.add(Q.PAGE_DOWN);it.add(Q.END);it.add(Q.HOME);it.add(Q.ARROW_LEFT);it.add(Q.ARROW_UP);it.add(Q.ARROW_RIGHT);it.add(Q.ARROW_DOWN);it.add(Q.DELETE);it.add(Q.ESCAPE);it.add(Q.TAB);var gt={BACKSPACE:8,ENTER:13,SPACEBAR:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ESCAPE:27,TAB:9},rt=new Map;rt.set(gt.BACKSPACE,Q.BACKSPACE);rt.set(gt.ENTER,Q.ENTER);rt.set(gt.SPACEBAR,Q.SPACEBAR);rt.set(gt.PAGE_UP,Q.PAGE_UP);rt.set(gt.PAGE_DOWN,Q.PAGE_DOWN);rt.set(gt.END,Q.END);rt.set(gt.HOME,Q.HOME);rt.set(gt.ARROW_LEFT,Q.ARROW_LEFT);rt.set(gt.ARROW_UP,Q.ARROW_UP);rt.set(gt.ARROW_RIGHT,Q.ARROW_RIGHT);rt.set(gt.ARROW_DOWN,Q.ARROW_DOWN);rt.set(gt.DELETE,Q.DELETE);rt.set(gt.ESCAPE,Q.ESCAPE);rt.set(gt.TAB,Q.TAB);var Ln=new Set;Ln.add(Q.PAGE_UP);Ln.add(Q.PAGE_DOWN);Ln.add(Q.END);Ln.add(Q.HOME);Ln.add(Q.ARROW_LEFT);Ln.add(Q.ARROW_UP);Ln.add(Q.ARROW_RIGHT);Ln.add(Q.ARROW_DOWN);function je(n){var e=n.key;if(it.has(e))return e;var t=rt.get(n.keyCode);return t||Q.UNKNOWN}function _m(n){let e,t,s,i,r;const a=n[6].default,o=ut(a,n,n[5],null);let c=[n[3]],l={};for(let u=0;u<c.length;u+=1)l=x(l,c[u]);return{c(){e=Rt("i"),o&&o.c(),this.h()},l(u){e=kt(u,"I",{});var h=Dt(e);o&&o.l(h),h.forEach(H),this.h()},h(){Tt(e,l)},m(u,h){se(u,e,h),o&&o.m(e,null),n[7](e),s=!0,i||(r=[ct(t=ca.call(null,e,n[0])),ct(n[2].call(null,e))],i=!0)},p(u,[h]){o&&o.p&&(!s||h&32)&&ht(o,a,u,u[5],s?ft(a,u[5],h,null):dt(u[5]),null),Tt(e,l=st(c,[h&8&&u[3]])),t&&es(t.update)&&h&1&&t.update.call(null,u[0])},i(u){s||(W(o,u),s=!0)},o(u){X(o,u),s=!1},d(u){u&&H(e),o&&o.d(u),n[7](null),i=!1,ts(r)}}}function vm(n,e,t){const s=["use","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const c=un(mt());let l;function u(){return l}function h(d){$e[d?"unshift":"push"](()=>{l=d,t(1,l)})}return n.$$set=d=>{e=x(x({},e),pt(d)),t(3,i=ie(e,s)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,l,c,i,u,a,r,h]}let Im=class extends tt{constructor(e){super(),nt(this,e,vm,_m,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}};function Em(n){let e,t,s,i,r;const a=n[6].default,o=ut(a,n,n[5],null);let c=[n[3]],l={};for(let u=0;u<c.length;u+=1)l=x(l,c[u]);return{c(){e=qf("svg"),o&&o.c(),this.h()},l(u){e=Kf(u,"svg",{});var h=Dt(e);o&&o.l(h),h.forEach(H),this.h()},h(){Ic(e,l)},m(u,h){se(u,e,h),o&&o.m(e,null),n[7](e),s=!0,i||(r=[ct(t=ca.call(null,e,n[0])),ct(n[2].call(null,e))],i=!0)},p(u,[h]){o&&o.p&&(!s||h&32)&&ht(o,a,u,u[5],s?ft(a,u[5],h,null):dt(u[5]),null),Ic(e,l=st(c,[h&8&&u[3]])),t&&es(t.update)&&h&1&&t.update.call(null,u[0])},i(u){s||(W(o,u),s=!0)},o(u){X(o,u),s=!1},d(u){u&&H(e),o&&o.d(u),n[7](null),i=!1,ts(r)}}}function bm(n,e,t){const s=["use","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e;const c=un(mt());let l;function u(){return l}function h(d){$e[d?"unshift":"push"](()=>{l=d,t(1,l)})}return n.$$set=d=>{e=x(x({},e),pt(d)),t(3,i=ie(e,s)),"use"in d&&t(0,o=d.use),"$$scope"in d&&t(5,a=d.$$scope)},[o,l,c,i,u,a,r,h]}class bc extends tt{constructor(e){super(),nt(this,e,bm,Em,Fe,{use:0,getElement:4})}get getElement(){return this.$$.ctx[4]}}function Tc(n){let e;return{c(){e=Rt("div"),this.h()},l(t){e=kt(t,"DIV",{class:!0}),Dt(e).forEach(H),this.h()},h(){Jt(e,"class","mdc-icon-button__touch")},m(t,s){se(t,e,s)},d(t){t&&H(e)}}}function Tm(n){let e,t,s,i;const r=n[32].default,a=ut(r,n,n[36],null);let o=n[8]&&Tc();return{c(){e=Rt("div"),t=su(),a&&a.c(),o&&o.c(),s=re(),this.h()},l(c){e=kt(c,"DIV",{class:!0}),Dt(e).forEach(H),t=iu(c),a&&a.l(c),o&&o.l(c),s=re(),this.h()},h(){Jt(e,"class","mdc-icon-button__ripple")},m(c,l){se(c,e,l),se(c,t,l),a&&a.m(c,l),o&&o.m(c,l),se(c,s,l),i=!0},p(c,l){a&&a.p&&(!i||l[1]&32)&&ht(a,r,c,c[36],i?ft(r,c[36],l,null):dt(c[36]),null),c[8]?o||(o=Tc(),o.c(),o.m(s.parentNode,s)):o&&(o.d(1),o=null)},i(c){i||(W(a,c),i=!0)},o(c){X(a,c),i=!1},d(c){c&&H(e),c&&H(t),a&&a.d(c),o&&o.d(c),c&&H(s)}}}function wm(n){let e,t,s;const i=[{use:[[nr,{ripple:n[4],unbounded:!0,color:n[5],disabled:!!n[28].disabled,addClass:n[25],removeClass:n[26],addStyle:n[27]}],n[21],...n[1]]},{class:lt({[n[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!n[22](n[0])&&n[0],"mdc-icon-button--touch":n[8],"mdc-icon-button--display-flex":n[9],"smui-icon-button--size-button":n[10]==="button","mdc-icon-button--reduced-size":n[10]==="mini"||n[10]==="button","mdc-card__action":n[23]==="card:action","mdc-card__action--icon":n[23]==="card:action","mdc-top-app-bar__navigation-icon":n[23]==="top-app-bar:navigation","mdc-top-app-bar__action-item":n[23]==="top-app-bar:action","mdc-snackbar__dismiss":n[23]==="snackbar:actions","mdc-data-table__pagination-button":n[23]==="data-table:pagination","mdc-data-table__sort-icon-button":n[23]==="data-table:sortable-header-cell","mdc-dialog__close":n[23]==="dialog:header"&&n[12]==="close",...n[17]})},{style:Object.entries(n[18]).map(wc).concat([n[3]]).join(" ")},{"aria-pressed":n[22](n[0])?null:n[0]?"true":"false"},{"aria-label":n[0]?n[6]:n[7]},{"data-aria-label-on":n[6]},{"data-aria-label-off":n[7]},{"aria-describedby":n[24]},{href:n[11]},n[20],n[19],n[28]];var r=n[13];function a(o){let c={$$slots:{default:[Tm]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[33](e),e.$on("click",n[34]),e.$on("click",n[35])),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,c){const l=c[0]&536748031?st(i,[c[0]&505413682&&{use:[[nr,{ripple:o[4],unbounded:!0,color:o[5],disabled:!!o[28].disabled,addClass:o[25],removeClass:o[26],addStyle:o[27]}],o[21],...o[1]]},c[0]&12719877&&{class:lt({[o[2]]:!0,"mdc-icon-button":!0,"mdc-icon-button--on":!o[22](o[0])&&o[0],"mdc-icon-button--touch":o[8],"mdc-icon-button--display-flex":o[9],"smui-icon-button--size-button":o[10]==="button","mdc-icon-button--reduced-size":o[10]==="mini"||o[10]==="button","mdc-card__action":o[23]==="card:action","mdc-card__action--icon":o[23]==="card:action","mdc-top-app-bar__navigation-icon":o[23]==="top-app-bar:navigation","mdc-top-app-bar__action-item":o[23]==="top-app-bar:action","mdc-snackbar__dismiss":o[23]==="snackbar:actions","mdc-data-table__pagination-button":o[23]==="data-table:pagination","mdc-data-table__sort-icon-button":o[23]==="data-table:sortable-header-cell","mdc-dialog__close":o[23]==="dialog:header"&&o[12]==="close",...o[17]})},c[0]&262152&&{style:Object.entries(o[18]).map(wc).concat([o[3]]).join(" ")},c[0]&4194305&&{"aria-pressed":o[22](o[0])?null:o[0]?"true":"false"},c[0]&193&&{"aria-label":o[0]?o[6]:o[7]},c[0]&64&&{"data-aria-label-on":o[6]},c[0]&128&&{"data-aria-label-off":o[7]},c[0]&16777216&&{"aria-describedby":o[24]},c[0]&2048&&{href:o[11]},c[0]&1048576&&be(o[20]),c[0]&524288&&be(o[19]),c[0]&268435456&&be(o[28])]):{};if(c[0]&256|c[1]&32&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[13])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[33](e),e.$on("click",o[34]),e.$on("click",o[35]),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[33](null),o&&H(t),e&&Le(e,o)}}}const wc=([n,e])=>`${n}: ${e};`;function Am(n,e,t){let s;const i=["use","class","style","ripple","color","toggle","pressed","ariaLabelOn","ariaLabelOff","touch","displayFlex","size","href","action","component","getElement"];let r=ie(e,i),{$$slots:a={},$$scope:o}=e;const c=un(mt());let l=()=>{};function u(T){return T===l}let{use:h=[]}=e,{class:d=""}=e,{style:f=""}=e,{ripple:g=!0}=e,{color:m=void 0}=e,{toggle:p=!1}=e,{pressed:A=l}=e,{ariaLabelOn:S=void 0}=e,{ariaLabelOff:E=void 0}=e,{touch:b=!1}=e,{displayFlex:w=!0}=e,{size:K="normal"}=e,{href:ee=void 0}=e,{action:oe=void 0}=e,ae,G,Z={},ue={},ce={},Y=Je("SMUI:icon-button:context"),z=Je("SMUI:icon-button:aria-describedby"),{component:D=ee==null?nm:ru}=e,pe=r.disabled;De("SMUI:icon:context","icon-button");let It=null;ws(()=>{G&&G.destroy()});function xe(T){return T in Z?Z[T]:At().classList.contains(T)}function wt(T){Z[T]||t(17,Z[T]=!0,Z)}function Kt(T){(!(T in Z)||Z[T])&&t(17,Z[T]=!1,Z)}function Gt(T,Ve){ue[T]!=Ve&&(Ve===""||Ve==null?(delete ue[T],t(18,ue)):t(18,ue[T]=Ve,ue))}function hn(T){var Ve;return T in ce?(Ve=ce[T])!==null&&Ve!==void 0?Ve:null:At().getAttribute(T)}function N(T,Ve){ce[T]!==Ve&&t(19,ce[T]=Ve,ce)}function Nt(T){t(0,A=T.isOn)}function At(){return ae.getElement()}function ge(T){$e[T?"unshift":"push"](()=>{ae=T,t(15,ae)})}const dn=()=>G&&G.handleClick(),rs=()=>Y==="top-app-bar:navigation"&&tn(At(),"SMUITopAppBarIconButton:nav");return n.$$set=T=>{e=x(x({},e),pt(T)),t(28,r=ie(e,i)),"use"in T&&t(1,h=T.use),"class"in T&&t(2,d=T.class),"style"in T&&t(3,f=T.style),"ripple"in T&&t(4,g=T.ripple),"color"in T&&t(5,m=T.color),"toggle"in T&&t(29,p=T.toggle),"pressed"in T&&t(0,A=T.pressed),"ariaLabelOn"in T&&t(6,S=T.ariaLabelOn),"ariaLabelOff"in T&&t(7,E=T.ariaLabelOff),"touch"in T&&t(8,b=T.touch),"displayFlex"in T&&t(9,w=T.displayFlex),"size"in T&&t(10,K=T.size),"href"in T&&t(11,ee=T.href),"action"in T&&t(12,oe=T.action),"component"in T&&t(13,D=T.component),"$$scope"in T&&t(36,o=T.$$scope)},n.$$.update=()=>{if(n.$$.dirty[0]&4096&&t(20,s=(()=>{if(Y==="data-table:pagination")switch(oe){case"first-page":return{"data-first-page":"true"};case"prev-page":return{"data-prev-page":"true"};case"next-page":return{"data-next-page":"true"};case"last-page":return{"data-last-page":"true"};default:return{"data-action":"true"}}else return Y==="dialog:header"?{"data-mdc-dialog-action":oe}:{action:oe}})()),pe!==r.disabled){const T=At();"blur"in T&&T.blur(),t(30,pe=r.disabled)}n.$$.dirty[0]&536969216|n.$$.dirty[1]&1&&ae&&At()&&p!==It&&(p&&!G?(t(16,G=new pm({addClass:wt,hasClass:xe,notifyChange:T=>{Nt(T),tn(At(),"SMUIIconButtonToggle:change",T,void 0,!0)},removeClass:Kt,getAttr:hn,setAttr:N})),G.init()):!p&&G&&(G.destroy(),t(16,G=void 0),t(17,Z={}),t(19,ce={})),t(31,It=p)),n.$$.dirty[0]&65537&&G&&!u(A)&&G.isOn()!==A&&G.toggle(A)},[A,h,d,f,g,m,S,E,b,w,K,ee,oe,D,At,ae,G,Z,ue,ce,s,c,u,Y,z,wt,Kt,Gt,r,p,pe,It,a,ge,dn,rs,o]}class Kw extends tt{constructor(e){super(),nt(this,e,Am,wm,Fe,{use:1,class:2,style:3,ripple:4,color:5,toggle:29,pressed:0,ariaLabelOn:6,ariaLabelOff:7,touch:8,displayFlex:9,size:10,href:11,action:12,component:13,getElement:14},null,[-1,-1])}get getElement(){return this.$$.ctx[14]}}function Sm(n){let e;const t=n[9].default,s=ut(t,n,n[11],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&2048)&&ht(s,t,i,i[11],e?ft(t,i[11],r,null):dt(i[11]),null)},i(i){e||(W(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function Cm(n){let e,t,s;const i=[{use:[n[4],...n[0]]},{class:lt({[n[1]]:!0,"mdc-button__label":n[5]==="button","mdc-fab__label":n[5]==="fab","mdc-tab__text-label":n[5]==="tab","mdc-image-list__label":n[5]==="image-list","mdc-snackbar__label":n[5]==="snackbar","mdc-banner__text":n[5]==="banner","mdc-segmented-button__label":n[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":n[5]==="data-table:pagination","mdc-data-table__header-cell-label":n[5]==="data-table:sortable-header-cell"})},n[5]==="snackbar"?{"aria-atomic":"false"}:{},{tabindex:n[6]},n[7]];var r=n[2];function a(o){let c={$$slots:{default:[Sm]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[10](e)),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,[c]){const l=c&243?st(i,[c&17&&{use:[o[4],...o[0]]},c&34&&{class:lt({[o[1]]:!0,"mdc-button__label":o[5]==="button","mdc-fab__label":o[5]==="fab","mdc-tab__text-label":o[5]==="tab","mdc-image-list__label":o[5]==="image-list","mdc-snackbar__label":o[5]==="snackbar","mdc-banner__text":o[5]==="banner","mdc-segmented-button__label":o[5]==="segmented-button","mdc-data-table__pagination-rows-per-page-label":o[5]==="data-table:pagination","mdc-data-table__header-cell-label":o[5]==="data-table:sortable-header-cell"})},c&32&&be(o[5]==="snackbar"?{"aria-atomic":"false"}:{}),c&64&&{tabindex:o[6]},c&128&&be(o[7])]):{};if(c&2048&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[2])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[10](e),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[10](null),o&&H(t),e&&Le(e,o)}}}function Rm(n,e,t){const s=["use","class","component","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e;const o=un(mt());let{use:c=[]}=e,{class:l=""}=e,u,{component:h=sm}=e;const d=Je("SMUI:label:context"),f=Je("SMUI:label:tabindex");function g(){return u.getElement()}function m(p){$e[p?"unshift":"push"](()=>{u=p,t(3,u)})}return n.$$set=p=>{e=x(x({},e),pt(p)),t(7,i=ie(e,s)),"use"in p&&t(0,c=p.use),"class"in p&&t(1,l=p.class),"component"in p&&t(2,h=p.component),"$$scope"in p&&t(11,a=p.$$scope)},[c,l,h,u,o,d,f,i,g,r,m,a]}class km extends tt{constructor(e){super(),nt(this,e,Rm,Cm,Fe,{use:0,class:1,component:2,getElement:8})}get getElement(){return this.$$.ctx[8]}}function Dm(n){let e;const t=n[9].default,s=ut(t,n,n[11],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&2048)&&ht(s,t,i,i[11],e?ft(t,i[11],r,null):dt(i[11]),null)},i(i){e||(W(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function Om(n){let e,t,s;const i=[{use:[n[5],...n[0]]},{class:lt({[n[1]]:!0,"mdc-button__icon":n[6]==="button","mdc-fab__icon":n[6]==="fab","mdc-icon-button__icon":n[6]==="icon-button","mdc-icon-button__icon--on":n[6]==="icon-button"&&n[2],"mdc-tab__icon":n[6]==="tab","mdc-banner__icon":n[6]==="banner","mdc-segmented-button__icon":n[6]==="segmented-button"})},{"aria-hidden":"true"},n[3]===bc?{focusable:"false",tabindex:"-1"}:{},n[7]];var r=n[3];function a(o){let c={$$slots:{default:[Dm]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[10](e)),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,[c]){const l=c&239?st(i,[c&33&&{use:[o[5],...o[0]]},c&70&&{class:lt({[o[1]]:!0,"mdc-button__icon":o[6]==="button","mdc-fab__icon":o[6]==="fab","mdc-icon-button__icon":o[6]==="icon-button","mdc-icon-button__icon--on":o[6]==="icon-button"&&o[2],"mdc-tab__icon":o[6]==="tab","mdc-banner__icon":o[6]==="banner","mdc-segmented-button__icon":o[6]==="segmented-button"})},i[2],c&8&&be(o[3]===bc?{focusable:"false",tabindex:"-1"}:{}),c&128&&be(o[7])]):{};if(c&2048&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[3])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[10](e),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[10](null),o&&H(t),e&&Le(e,o)}}}function Nm(n,e,t){const s=["use","class","on","component","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e;const o=un(mt());let{use:c=[]}=e,{class:l=""}=e,{on:u=!1}=e,h,{component:d=Im}=e;const f=Je("SMUI:icon:context");function g(){return h.getElement()}function m(p){$e[p?"unshift":"push"](()=>{h=p,t(4,h)})}return n.$$set=p=>{e=x(x({},e),pt(p)),t(7,i=ie(e,s)),"use"in p&&t(0,c=p.use),"class"in p&&t(1,l=p.class),"on"in p&&t(2,u=p.on),"component"in p&&t(3,d=p.component),"$$scope"in p&&t(11,a=p.$$scope)},[c,l,u,d,h,o,f,i,g,r,m,a]}class Lm extends tt{constructor(e){super(),nt(this,e,Nm,Om,Fe,{use:0,class:1,on:2,component:3,getElement:8})}get getElement(){return this.$$.ctx[8]}}const Gw=km,Ww=Lm,Xw="/favicon.png",Qw="/media/frame/",Yw="/media/content/",Jw="6xl",Zw="m-10",$w={image:"IMAGE",video:"VIDEO"},Mm=(n,e=!1)=>{if(!n.length)return!1;const t=ou(n[0]);return e&&console.debug("isInputValues? : ",t),t},Pm=(n,e=!1)=>{if(!n.length)return!1;const t=ua(n[0]);return e&&console.debug("isEntityEvent? : ",t),t},Um=(n,e=!1)=>{if(!n.length)return!1;const t=au(n[0]);return e&&console.debug("isEntityPost? : ",t),t},ou=(n,e=!1)=>{const t=n.value!==void 0;return e&&console.debug("isInputValue? : ",t),t},ua=(n,e=!1)=>{const t=n.titleEvent!==void 0;return e&&console.debug("isEntityEvent? : ",t),t},au=(n,e=!1)=>{const t=n.titlePost!==void 0;return e&&console.debug("isEntityPost? : ",t),t},cu=(n,e=!1)=>{const t=n.idDoc!==void 0;return e&&console.debug("isEntity ?",t),t},Ac=(n,e=!1)=>{const t=ua(n)||au(n);return e&&console.debug("isEntityNtIv ?",t),t},zn=(n,e)=>{fm.set({type:n,text:e,open:!0})};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Fm=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],a=n[t++],o=n[t++],c=((i&7)<<18|(r&63)<<12|(a&63)<<6|o&63)-65536;e[s++]=String.fromCharCode(55296+(c>>10)),e[s++]=String.fromCharCode(56320+(c&1023))}else{const r=n[t++],a=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|a&63)}}return e.join("")},uu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],a=i+1<n.length,o=a?n[i+1]:0,c=i+2<n.length,l=c?n[i+2]:0,u=r>>2,h=(r&3)<<4|o>>4;let d=(o&15)<<2|l>>6,f=l&63;c||(f=64,a||(d=64)),s.push(t[u],t[h],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(lu(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Fm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],o=i<n.length?t[n.charAt(i)]:0;++i;const l=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||o==null||l==null||h==null)throw new Bm;const d=r<<2|o>>4;if(s.push(d),l!==64){const f=o<<4&240|l>>2;if(s.push(f),h!==64){const g=l<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Bm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xm=function(n){const e=lu(n);return uu.encodeByteArray(e,!0)},sr=function(n){return xm(n).replace(/\./g,"")},hu=function(n){try{return uu.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jm=()=>Vm().__FIREBASE_DEFAULTS__,Hm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},zm=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&hu(n[1]);return e&&JSON.parse(e)},Sr=()=>{try{return jm()||Hm()||zm()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},du=n=>{var e,t;return(t=(e=Sr())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},qm=n=>{const e=du(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Km=()=>{var n;return(n=Sr())===null||n===void 0?void 0:n.config},fu=n=>{var e;return(e=Sr())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),o="";return[sr(JSON.stringify(t)),sr(JSON.stringify(a)),o].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(We())}function Qm(){var n;const e=(n=Sr())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Ym(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Jm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Zm(){const n=We();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $m(){try{return typeof indexedDB=="object"}catch{return!1}}function ep(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="FirebaseError";class qt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=tp,Object.setPrototypeOf(this,qt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ui.prototype.create)}}class ui{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],a=r?np(r,s):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new qt(i,o,s)}}function np(n,e){return n.replace(sp,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const sp=/\{\$([^}]+)}/g;function ip(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Gs(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],a=e[i];if(Sc(r)&&Sc(a)){if(!Gs(r,a))return!1}else if(r!==a)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Sc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function rp(n,e){const t=new op(n,e);return t.subscribe.bind(t)}class op{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");ap(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=oo),i.error===void 0&&(i.error=oo),i.complete===void 0&&(i.complete=oo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ap(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function oo(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(n){return n&&n._delegate?n._delegate:n}class Cn{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Un="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cp{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Gm;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(up(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(r);s===o&&a.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const a=this.instances.get(i);return a&&e(a,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:lp(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lp(n){return n===Un?void 0:n}function up(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new cp(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var te;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(te||(te={}));const dp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},fp=te.INFO,mp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},pp=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=mp[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ha{constructor(e){this.name=e,this._logLevel=fp,this._logHandler=pp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?dp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...e),this._logHandler(this,te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...e),this._logHandler(this,te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,te.INFO,...e),this._logHandler(this,te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,te.WARN,...e),this._logHandler(this,te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...e),this._logHandler(this,te.ERROR,...e)}}const gp=(n,e)=>e.some(t=>n instanceof t);let Cc,Rc;function yp(){return Cc||(Cc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _p(){return Rc||(Rc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mu=new WeakMap,ko=new WeakMap,pu=new WeakMap,ao=new WeakMap,da=new WeakMap;function vp(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",a)},r=()=>{t(bn(n.result)),i()},a=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&mu.set(t,n)}).catch(()=>{}),da.set(e,n),e}function Ip(n){if(ko.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",a),n.removeEventListener("abort",a)},r=()=>{t(),i()},a=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",a),n.addEventListener("abort",a)});ko.set(n,e)}let Do={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ko.get(n);if(e==="objectStoreNames")return n.objectStoreNames||pu.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ep(n){Do=n(Do)}function bp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(co(this),e,...t);return pu.set(s,e.sort?e.sort():[e]),bn(s)}:_p().includes(n)?function(...e){return n.apply(co(this),e),bn(mu.get(this))}:function(...e){return bn(n.apply(co(this),e))}}function Tp(n){return typeof n=="function"?bp(n):(n instanceof IDBTransaction&&Ip(n),gp(n,yp())?new Proxy(n,Do):n)}function bn(n){if(n instanceof IDBRequest)return vp(n);if(ao.has(n))return ao.get(n);const e=Tp(n);return e!==n&&(ao.set(n,e),da.set(e,n)),e}const co=n=>da.get(n);function wp(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const a=indexedDB.open(n,e),o=bn(a);return s&&a.addEventListener("upgradeneeded",c=>{s(bn(a.result),c.oldVersion,c.newVersion,bn(a.transaction))}),t&&a.addEventListener("blocked",()=>t()),o.then(c=>{r&&c.addEventListener("close",()=>r()),i&&c.addEventListener("versionchange",()=>i())}).catch(()=>{}),o}const Ap=["get","getKey","getAll","getAllKeys","count"],Sp=["put","add","delete","clear"],lo=new Map;function kc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(lo.get(e))return lo.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Sp.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Ap.includes(t)))return;const r=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return s&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),i&&c.done]))[0]};return lo.set(e,r),r}Ep(n=>({...n,get:(e,t,s)=>kc(e,t)||n.get(e,t,s),has:(e,t)=>!!kc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Rp(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Rp(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Oo="@firebase/app",Dc="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn=new ha("@firebase/app"),kp="@firebase/app-compat",Dp="@firebase/analytics-compat",Op="@firebase/analytics",Np="@firebase/app-check-compat",Lp="@firebase/app-check",Mp="@firebase/auth",Pp="@firebase/auth-compat",Up="@firebase/database",Fp="@firebase/database-compat",Bp="@firebase/functions",xp="@firebase/functions-compat",Vp="@firebase/installations",jp="@firebase/installations-compat",Hp="@firebase/messaging",zp="@firebase/messaging-compat",qp="@firebase/performance",Kp="@firebase/performance-compat",Gp="@firebase/remote-config",Wp="@firebase/remote-config-compat",Xp="@firebase/storage",Qp="@firebase/storage-compat",Yp="@firebase/firestore",Jp="@firebase/firestore-compat",Zp="firebase",$p="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const No="[DEFAULT]",eg={[Oo]:"fire-core",[kp]:"fire-core-compat",[Op]:"fire-analytics",[Dp]:"fire-analytics-compat",[Lp]:"fire-app-check",[Np]:"fire-app-check-compat",[Mp]:"fire-auth",[Pp]:"fire-auth-compat",[Up]:"fire-rtdb",[Fp]:"fire-rtdb-compat",[Bp]:"fire-fn",[xp]:"fire-fn-compat",[Vp]:"fire-iid",[jp]:"fire-iid-compat",[Hp]:"fire-fcm",[zp]:"fire-fcm-compat",[qp]:"fire-perf",[Kp]:"fire-perf-compat",[Gp]:"fire-rc",[Wp]:"fire-rc-compat",[Xp]:"fire-gcs",[Qp]:"fire-gcs-compat",[Yp]:"fire-fst",[Jp]:"fire-fst-compat","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Map,Lo=new Map;function tg(n,e){try{n.container.addComponent(e)}catch(t){Xn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Qn(n){const e=n.name;if(Lo.has(e))return Xn.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,n);for(const t of Ws.values())tg(t,n);return!0}function Cr(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Tn=new ui("app","Firebase",ng);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Cn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Tn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=$p;function gu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:No,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Tn.create("bad-app-name",{appName:String(i)});if(t||(t=Km()),!t)throw Tn.create("no-options");const r=Ws.get(i);if(r){if(Gs(t,r.options)&&Gs(s,r.config))return r;throw Tn.create("duplicate-app",{appName:i})}const a=new hp(i);for(const c of Lo.values())a.addComponent(c);const o=new sg(t,s,a);return Ws.set(i,o),o}function yu(n=No){const e=Ws.get(n);if(!e&&n===No)return gu();if(!e)throw Tn.create("no-app",{appName:n});return e}function ig(){return Array.from(Ws.values())}function Pt(n,e,t){var s;let i=(s=eg[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),a=e.match(/\s|\//);if(r||a){const o=[`Unable to register library "${i}" with version "${e}":`];r&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Xn.warn(o.join(" "));return}Qn(new Cn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rg="firebase-heartbeat-database",og=1,Xs="firebase-heartbeat-store";let uo=null;function _u(){return uo||(uo=wp(rg,og,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Xs)}}}).catch(n=>{throw Tn.create("idb-open",{originalErrorMessage:n.message})})),uo}async function ag(n){try{return(await _u()).transaction(Xs).objectStore(Xs).get(vu(n))}catch(e){if(e instanceof qt)Xn.warn(e.message);else{const t=Tn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Xn.warn(t.message)}}}async function Oc(n,e){try{const s=(await _u()).transaction(Xs,"readwrite");return await s.objectStore(Xs).put(e,vu(n)),s.done}catch(t){if(t instanceof qt)Xn.warn(t.message);else{const s=Tn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Xn.warn(s.message)}}}function vu(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=1024,lg=30*24*60*60*1e3;class ug{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dg(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Nc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=lg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Nc(),{heartbeatsToSend:t,unsentEntries:s}=hg(this._heartbeatsCache.heartbeats),i=sr(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Nc(){return new Date().toISOString().substring(0,10)}function hg(n,e=cg){const t=[];let s=n.slice();for(const i of n){const r=t.find(a=>a.agent===i.agent);if(r){if(r.dates.push(i.date),Lc(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Lc(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class dg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $m()?ep().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ag(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Oc(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Lc(n){return sr(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fg(n){Qn(new Cn("platform-logger",e=>new Cp(e),"PRIVATE")),Qn(new Cn("heartbeat",e=>new ug(e),"PRIVATE")),Pt(Oo,Dc,n),Pt(Oo,Dc,"esm2017"),Pt("fire-js","")}fg("");var mg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},C,fa=fa||{},F=mg||self;function ir(){}function Rr(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function di(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function pg(n){return Object.prototype.hasOwnProperty.call(n,ho)&&n[ho]||(n[ho]=++gg)}var ho="closure_uid_"+(1e9*Math.random()>>>0),gg=0;function yg(n,e,t){return n.call.apply(n.bind,arguments)}function _g(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),n.apply(e,i)}}return function(){return n.apply(e,arguments)}}function qe(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?qe=yg:qe=_g,qe.apply(null,arguments)}function Pi(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function Be(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,i,r){for(var a=Array(arguments.length-2),o=2;o<arguments.length;o++)a[o-2]=arguments[o];return e.prototype[i].apply(s,a)}}function Mn(){this.s=this.s,this.o=this.o}var vg=0;Mn.prototype.s=!1;Mn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),vg!=0)&&pg(this)};Mn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Iu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function ma(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Mc(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(Rr(s)){const i=n.length||0,r=s.length||0;n.length=i+r;for(let a=0;a<r;a++)n[i+a]=s[a]}else n.push(s)}}function Ke(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Ke.prototype.h=function(){this.defaultPrevented=!0};var Ig=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{F.addEventListener("test",ir,e),F.removeEventListener("test",ir,e)}catch{}return n}();function rr(n){return/^[\s\xa0]*$/.test(n)}var Pc=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function fo(n,e){return n<e?-1:n>e?1:0}function kr(){var n=F.navigator;return n&&(n=n.userAgent)?n:""}function Lt(n){return kr().indexOf(n)!=-1}function pa(n){return pa[" "](n),n}pa[" "]=ir;function Eg(n){var e=wg;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var bg=Lt("Opera"),ps=Lt("Trident")||Lt("MSIE"),Eu=Lt("Edge"),Mo=Eu||ps,bu=Lt("Gecko")&&!(kr().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge"))&&!(Lt("Trident")||Lt("MSIE"))&&!Lt("Edge"),Tg=kr().toLowerCase().indexOf("webkit")!=-1&&!Lt("Edge");function Tu(){var n=F.document;return n?n.documentMode:void 0}var or;e:{var mo="",po=function(){var n=kr();if(bu)return/rv:([^\);]+)(\)|;)/.exec(n);if(Eu)return/Edge\/([\d\.]+)/.exec(n);if(ps)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(Tg)return/WebKit\/(\S+)/.exec(n);if(bg)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(po&&(mo=po?po[1]:""),ps){var go=Tu();if(go!=null&&go>parseFloat(mo)){or=String(go);break e}}or=mo}var wg={};function Ag(){return Eg(function(){let n=0;const e=Pc(String(or)).split("."),t=Pc("9").split("."),s=Math.max(e.length,t.length);for(let a=0;n==0&&a<s;a++){var i=e[a]||"",r=t[a]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;n=fo(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||fo(i[2].length==0,r[2].length==0)||fo(i[2],r[2]),i=i[3],r=r[3]}while(n==0)}return 0<=n})}var Po;if(F.document&&ps){var Uc=Tu();Po=Uc||parseInt(or,10)||void 0}else Po=void 0;var Sg=Po;function Qs(n,e){if(Ke.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(bu){e:{try{pa(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Cg[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Qs.X.h.call(this)}}Be(Qs,Ke);var Cg={2:"touch",3:"pen",4:"mouse"};Qs.prototype.h=function(){Qs.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var fi="closure_listenable_"+(1e6*Math.random()|0),Rg=0;function kg(n,e,t,s,i){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=i,this.key=++Rg,this.ba=this.ea=!1}function Dr(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function ga(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function wu(n){const e={};for(const t in n)e[t]=n[t];return e}const Fc="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Au(n,e){let t,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(t in s)n[t]=s[t];for(let r=0;r<Fc.length;r++)t=Fc[r],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function Or(n){this.src=n,this.g={},this.h=0}Or.prototype.add=function(n,e,t,s,i){var r=n.toString();n=this.g[r],n||(n=this.g[r]=[],this.h++);var a=Fo(n,e,s,i);return-1<a?(e=n[a],t||(e.ea=!1)):(e=new kg(e,this.src,r,!!s,i),e.ea=t,n.push(e)),e};function Uo(n,e){var t=e.type;if(t in n.g){var s=n.g[t],i=Iu(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Dr(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Fo(n,e,t,s){for(var i=0;i<n.length;++i){var r=n[i];if(!r.ba&&r.listener==e&&r.capture==!!t&&r.ha==s)return i}return-1}var ya="closure_lm_"+(1e6*Math.random()|0),yo={};function Su(n,e,t,s,i){if(s&&s.once)return Ru(n,e,t,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Su(n,e[r],t,s,i);return null}return t=Ia(t),n&&n[fi]?n.N(e,t,di(s)?!!s.capture:!!s,i):Cu(n,e,t,!1,s,i)}function Cu(n,e,t,s,i,r){if(!e)throw Error("Invalid event type");var a=di(i)?!!i.capture:!!i,o=va(n);if(o||(n[ya]=o=new Or(n)),t=o.add(e,t,s,a,r),t.proxy)return t;if(s=Dg(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Ig||(i=a),i===void 0&&(i=!1),n.addEventListener(e.toString(),s,i);else if(n.attachEvent)n.attachEvent(Du(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Dg(){function n(t){return e.call(n.src,n.listener,t)}const e=Og;return n}function Ru(n,e,t,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Ru(n,e[r],t,s,i);return null}return t=Ia(t),n&&n[fi]?n.O(e,t,di(s)?!!s.capture:!!s,i):Cu(n,e,t,!0,s,i)}function ku(n,e,t,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)ku(n,e[r],t,s,i);else s=di(s)?!!s.capture:!!s,t=Ia(t),n&&n[fi]?(n=n.i,e=String(e).toString(),e in n.g&&(r=n.g[e],t=Fo(r,t,s,i),-1<t&&(Dr(r[t]),Array.prototype.splice.call(r,t,1),r.length==0&&(delete n.g[e],n.h--)))):n&&(n=va(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Fo(e,t,s,i)),(t=-1<n?e[n]:null)&&_a(t))}function _a(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[fi])Uo(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Du(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=va(e))?(Uo(t,n),t.h==0&&(t.src=null,e[ya]=null)):Dr(n)}}}function Du(n){return n in yo?yo[n]:yo[n]="on"+n}function Og(n,e){if(n.ba)n=!0;else{e=new Qs(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&_a(n),n=t.call(s,e)}return n}function va(n){return n=n[ya],n instanceof Or?n:null}var _o="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ia(n){return typeof n=="function"?n:(n[_o]||(n[_o]=function(e){return n.handleEvent(e)}),n[_o])}function Me(){Mn.call(this),this.i=new Or(this),this.P=this,this.I=null}Be(Me,Mn);Me.prototype[fi]=!0;Me.prototype.removeEventListener=function(n,e,t,s){ku(this,n,e,t,s)};function Ue(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new Ke(e,n);else if(e instanceof Ke)e.target=e.target||n;else{var i=e;e=new Ke(s,n),Au(e,i)}if(i=!0,t)for(var r=t.length-1;0<=r;r--){var a=e.g=t[r];i=Ui(a,s,!0,e)&&i}if(a=e.g=n,i=Ui(a,s,!0,e)&&i,i=Ui(a,s,!1,e)&&i,t)for(r=0;r<t.length;r++)a=e.g=t[r],i=Ui(a,s,!1,e)&&i}Me.prototype.M=function(){if(Me.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)Dr(t[s]);delete n.g[e],n.h--}}this.I=null};Me.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};Me.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Ui(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var a=e[r];if(a&&!a.ba&&a.capture==t){var o=a.listener,c=a.ha||a.src;a.ea&&Uo(n.i,a),i=o.call(c,s)!==!1&&i}}return i&&!s.defaultPrevented}var Ea=F.JSON.stringify;function Ng(){var n=Lu;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Lg{constructor(){this.h=this.g=null}add(e,t){const s=Ou.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Ou=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new Mg,n=>n.reset());class Mg{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pg(n){F.setTimeout(()=>{throw n},0)}function Nu(n,e){Bo||Ug(),xo||(Bo(),xo=!0),Lu.add(n,e)}var Bo;function Ug(){var n=F.Promise.resolve(void 0);Bo=function(){n.then(Fg)}}var xo=!1,Lu=new Lg;function Fg(){for(var n;n=Ng();){try{n.h.call(n.g)}catch(t){Pg(t)}var e=Ou;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}xo=!1}function Nr(n,e){Me.call(this),this.h=n||1,this.g=e||F,this.j=qe(this.lb,this),this.l=Date.now()}Be(Nr,Me);C=Nr.prototype;C.ca=!1;C.R=null;C.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ue(this,"tick"),this.ca&&(ba(this),this.start()))}};C.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function ba(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}C.M=function(){Nr.X.M.call(this),ba(this),delete this.g};function Ta(n,e,t){if(typeof n=="function")t&&(n=qe(n,t));else if(n&&typeof n.handleEvent=="function")n=qe(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(n,e||0)}function Mu(n){n.g=Ta(()=>{n.g=null,n.i&&(n.i=!1,Mu(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class Bg extends Mn{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Mu(this)}M(){super.M(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ys(n){Mn.call(this),this.h=n,this.g={}}Be(Ys,Mn);var Bc=[];function Pu(n,e,t,s){Array.isArray(t)||(t&&(Bc[0]=t.toString()),t=Bc);for(var i=0;i<t.length;i++){var r=Su(e,t[i],s||n.handleEvent,!1,n.h||n);if(!r)break;n.g[r.key]=r}}function Uu(n){ga(n.g,function(e,t){this.g.hasOwnProperty(t)&&_a(e)},n),n.g={}}Ys.prototype.M=function(){Ys.X.M.call(this),Uu(this)};Ys.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lr(){this.g=!0}Lr.prototype.Aa=function(){this.g=!1};function xg(n,e,t,s,i,r){n.info(function(){if(n.g)if(r)for(var a="",o=r.split("&"),c=0;c<o.length;c++){var l=o[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");a=2<=h.length&&h[1]=="type"?a+(u+"="+l+"&"):a+(u+"=redacted&")}}else a=null;else a=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+t+`
`+a})}function Vg(n,e,t,s,i,r,a){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+t+`
`+r+" "+a})}function ls(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+Hg(n,t)+(s?" "+s:"")})}function jg(n,e){n.info(function(){return"TIMEOUT: "+e})}Lr.prototype.info=function(){};function Hg(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var a=1;a<i.length;a++)i[a]=""}}}}return Ea(t)}catch{return e}}var ns={},xc=null;function Mr(){return xc=xc||new Me}ns.Pa="serverreachability";function Fu(n){Ke.call(this,ns.Pa,n)}Be(Fu,Ke);function Js(n){const e=Mr();Ue(e,new Fu(e))}ns.STAT_EVENT="statevent";function Bu(n,e){Ke.call(this,ns.STAT_EVENT,n),this.stat=e}Be(Bu,Ke);function Ze(n){const e=Mr();Ue(e,new Bu(e,n))}ns.Qa="timingevent";function xu(n,e){Ke.call(this,ns.Qa,n),this.size=e}Be(xu,Ke);function mi(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){n()},e)}var Pr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Vu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function wa(){}wa.prototype.h=null;function Vc(n){return n.h||(n.h=n.i())}function ju(){}var pi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Aa(){Ke.call(this,"d")}Be(Aa,Ke);function Sa(){Ke.call(this,"c")}Be(Sa,Ke);var Vo;function Ur(){}Be(Ur,wa);Ur.prototype.g=function(){return new XMLHttpRequest};Ur.prototype.i=function(){return{}};Vo=new Ur;function gi(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new Ys(this),this.O=zg,n=Mo?125:void 0,this.T=new Nr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Hu}function Hu(){this.i=null,this.g="",this.h=!1}var zg=45e3,jo={},ar={};C=gi.prototype;C.setTimeout=function(n){this.O=n};function Ho(n,e,t){n.K=1,n.v=Br(sn(e)),n.s=t,n.P=!0,zu(n,null)}function zu(n,e){n.F=Date.now(),yi(n),n.A=sn(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Ju(t.i,"t",s),n.C=0,t=n.l.H,n.h=new Hu,n.g=_h(n.l,t?e:null,!n.s),0<n.N&&(n.L=new Bg(qe(n.La,n,n.g),n.N)),Pu(n.S,n.g,"readystatechange",n.ib),e=n.H?wu(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Js(),xg(n.j,n.u,n.A,n.m,n.U,n.s)}C.ib=function(n){n=n.target;const e=this.L;e&&Zt(n)==3?e.l():this.La(n)};C.La=function(n){try{if(n==this.g)e:{const u=Zt(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>u)&&(u!=3||Mo||this.g&&(this.h.h||this.g.fa()||qc(this.g)))){this.I||u!=4||e==7||(e==8||0>=h?Js(3):Js(2)),Fr(this);var t=this.g.aa();this.Y=t;t:if(qu(this)){var s=qc(this.g);n="";var i=s.length,r=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Bn(this),xs(this);var a="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=n,this.C=0,a=this.h.g}else a=this.g.fa();if(this.i=t==200,Vg(this.j,this.u,this.A,this.m,this.U,u,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var o,c=this.g;if((o=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rr(o)){var l=o;break t}}l=null}if(t=l)ls(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,zo(this,t);else{this.i=!1,this.o=3,Ze(12),Bn(this),xs(this);break e}}this.P?(Ku(this,u,a),Mo&&this.i&&u==3&&(Pu(this.S,this.T,"tick",this.hb),this.T.start())):(ls(this.j,this.m,a,null),zo(this,a)),u==4&&Bn(this),this.i&&!this.I&&(u==4?mh(this.l,this):(this.i=!1,yi(this)))}else t==400&&0<a.indexOf("Unknown SID")?(this.o=3,Ze(12)):(this.o=0,Ze(13)),Bn(this),xs(this)}}}catch{}finally{}};function qu(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function Ku(n,e,t){let s=!0,i;for(;!n.I&&n.C<t.length;)if(i=qg(n,t),i==ar){e==4&&(n.o=4,Ze(14),s=!1),ls(n.j,n.m,null,"[Incomplete Response]");break}else if(i==jo){n.o=4,Ze(15),ls(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else ls(n.j,n.m,i,null),zo(n,i);qu(n)&&i!=ar&&i!=jo&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Ze(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),La(e),e.K=!0,Ze(11))):(ls(n.j,n.m,t,"[Invalid Chunked Response]"),Bn(n),xs(n))}C.hb=function(){if(this.g){var n=Zt(this.g),e=this.g.fa();this.C<e.length&&(Fr(this),Ku(this,n,e),this.i&&n!=4&&yi(this))}};function qg(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?ar:(t=Number(e.substring(t,s)),isNaN(t)?jo:(s+=1,s+t>e.length?ar:(e=e.substr(s,t),n.C=s+t,e)))}C.cancel=function(){this.I=!0,Bn(this)};function yi(n){n.V=Date.now()+n.O,Gu(n,n.O)}function Gu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=mi(qe(n.gb,n),e)}function Fr(n){n.B&&(F.clearTimeout(n.B),n.B=null)}C.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(jg(this.j,this.A),this.K!=2&&(Js(),Ze(17)),Bn(this),this.o=2,xs(this)):Gu(this,this.V-n)};function xs(n){n.l.G==0||n.I||mh(n.l,n)}function Bn(n){Fr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,ba(n.T),Uu(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function zo(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||qo(t.h,n))){if(!n.J&&qo(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)ur(t),jr(t);else break e;Na(t),Ze(18)}}else t.Ba=i[1],0<t.Ba-t.T&&37500>i[2]&&t.L&&t.A==0&&!t.v&&(t.v=mi(qe(t.cb,t),6e3));if(1>=eh(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else xn(t,11)}else if((n.J||t.g==n)&&ur(t),!rr(e))for(i=t.Fa.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(t.T=l[0],l=l[1],t.G==2)if(l[0]=="c"){t.I=l[1],t.ka=l[2];const u=l[3];u!=null&&(t.ma=u,t.j.info("VER="+t.ma));const h=l[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const f=n.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var r=s.h;r.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Ca(r,r.h),r.h=null))}if(s.D){const m=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;m&&(s.za=m,de(s.F,s.D,m))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var a=n;if(s.sa=yh(s,s.H?s.ka:null,s.V),a.J){th(s.h,a);var o=a,c=s.J;c&&o.setTimeout(c),o.B&&(Fr(o),yi(o)),s.g=a}else dh(s);0<t.i.length&&Hr(t)}else l[0]!="stop"&&l[0]!="close"||xn(t,7);else t.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?xn(t,7):Oa(t):l[0]!="noop"&&t.l&&t.l.wa(l),t.A=0)}}Js(4)}catch{}}function Kg(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Rr(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function Gg(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Rr(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Wu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Rr(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=Gg(n),s=Kg(n),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],t&&t[r],n)}var Xu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wg(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),i=null;if(0<=s){var r=n[t].substring(0,s);i=n[t].substring(s+1)}else r=n[t];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function qn(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof qn){this.h=e!==void 0?e:n.h,cr(this,n.j),this.s=n.s,this.g=n.g,lr(this,n.m),this.l=n.l,e=n.i;var t=new Zs;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),jc(this,t),this.o=n.o}else n&&(t=String(n).match(Xu))?(this.h=!!e,cr(this,t[1]||"",!0),this.s=Us(t[2]||""),this.g=Us(t[3]||"",!0),lr(this,t[4]),this.l=Us(t[5]||"",!0),jc(this,t[6]||"",!0),this.o=Us(t[7]||"")):(this.h=!!e,this.i=new Zs(null,this.h))}qn.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Fs(e,Hc,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Fs(e,Hc,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Fs(t,t.charAt(0)=="/"?Yg:Qg,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Fs(t,Zg)),n.join("")};function sn(n){return new qn(n)}function cr(n,e,t){n.j=t?Us(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function lr(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function jc(n,e,t){e instanceof Zs?(n.i=e,$g(n.i,n.h)):(t||(e=Fs(e,Jg)),n.i=new Zs(e,n.h))}function de(n,e,t){n.i.set(e,t)}function Br(n){return de(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Us(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Fs(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,Xg),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Xg(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Hc=/[#\/\?@]/g,Qg=/[#\?:]/g,Yg=/[#\?]/g,Jg=/[#\?@]/g,Zg=/#/g;function Zs(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Pn(n){n.g||(n.g=new Map,n.h=0,n.i&&Wg(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}C=Zs.prototype;C.add=function(n,e){Pn(this),this.i=null,n=Ss(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function Qu(n,e){Pn(n),e=Ss(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Yu(n,e){return Pn(n),e=Ss(n,e),n.g.has(e)}C.forEach=function(n,e){Pn(this),this.g.forEach(function(t,s){t.forEach(function(i){n.call(e,i,s,this)},this)},this)};C.oa=function(){Pn(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const i=n[s];for(let r=0;r<i.length;r++)t.push(e[s])}return t};C.W=function(n){Pn(this);let e=[];if(typeof n=="string")Yu(this,n)&&(e=e.concat(this.g.get(Ss(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};C.set=function(n,e){return Pn(this),this.i=null,n=Ss(this,n),Yu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};C.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Ju(n,e,t){Qu(n,e),0<t.length&&(n.i=null,n.g.set(Ss(n,e),ma(t)),n.h+=t.length)}C.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const r=encodeURIComponent(String(s)),a=this.W(s);for(s=0;s<a.length;s++){var i=r;a[s]!==""&&(i+="="+encodeURIComponent(String(a[s]))),n.push(i)}}return this.i=n.join("&")};function Ss(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function $g(n,e){e&&!n.j&&(Pn(n),n.i=null,n.g.forEach(function(t,s){var i=s.toLowerCase();s!=i&&(Qu(this,s),Ju(this,i,t))},n)),n.j=e}var ey=class{constructor(e,t){this.h=e,this.g=t}};function Zu(n){this.l=n||ty,F.PerformanceNavigationTiming?(n=F.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(F.g&&F.g.Ga&&F.g.Ga()&&F.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ty=10;function $u(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function eh(n){return n.h?1:n.g?n.g.size:0}function qo(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Ca(n,e){n.g?n.g.add(e):n.h=e}function th(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Zu.prototype.cancel=function(){if(this.i=nh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function nh(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return ma(n.i)}function Ra(){}Ra.prototype.stringify=function(n){return F.JSON.stringify(n,void 0)};Ra.prototype.parse=function(n){return F.JSON.parse(n,void 0)};function ny(){this.g=new Ra}function sy(n,e,t){const s=t||"";try{Wu(n,function(i,r){let a=i;di(i)&&(a=Ea(i)),e.push(s+r+"="+encodeURIComponent(a))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function iy(n,e){const t=new Lr;if(F.Image){const s=new Image;s.onload=Pi(Fi,t,s,"TestLoadImage: loaded",!0,e),s.onerror=Pi(Fi,t,s,"TestLoadImage: error",!1,e),s.onabort=Pi(Fi,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=Pi(Fi,t,s,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Fi(n,e,t,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function _i(n){this.l=n.ac||null,this.j=n.jb||!1}Be(_i,wa);_i.prototype.g=function(){return new xr(this.l,this.j)};_i.prototype.i=function(n){return function(){return n}}({});function xr(n,e){Me.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=ka,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Be(xr,Me);var ka=0;C=xr.prototype;C.open=function(n,e){if(this.readyState!=ka)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,$s(this)};C.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||F).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};C.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vi(this)),this.readyState=ka};C.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,$s(this)),this.g&&(this.readyState=3,$s(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sh(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function sh(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}C.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?vi(this):$s(this),this.readyState==3&&sh(this)}};C.Va=function(n){this.g&&(this.response=this.responseText=n,vi(this))};C.Ua=function(n){this.g&&(this.response=n,vi(this))};C.ga=function(){this.g&&vi(this)};function vi(n){n.readyState=4,n.l=null,n.j=null,n.A=null,$s(n)}C.setRequestHeader=function(n,e){this.v.append(n,e)};C.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};C.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function $s(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(xr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var ry=F.JSON.parse;function ye(n){Me.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ih,this.K=this.L=!1}Be(ye,Me);var ih="",oy=/^https?$/i,ay=["POST","PUT"];C=ye.prototype;C.Ka=function(n){this.L=n};C.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Vo.g(),this.C=this.u?Vc(this.u):Vc(Vo),this.g.onreadystatechange=qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(r){zc(this,r);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)t.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())t.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(r=>r.toLowerCase()=="content-type"),i=F.FormData&&n instanceof F.FormData,!(0<=Iu(ay,e))||s||i||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,a]of t)this.g.setRequestHeader(r,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{ah(this),0<this.B&&((this.K=cy(this.g))?(this.g.timeout=this.B,this.g.ontimeout=qe(this.qa,this)):this.A=Ta(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(r){zc(this,r)}};function cy(n){return ps&&Ag()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}C.qa=function(){typeof fa<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ue(this,"timeout"),this.abort(8))};function zc(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,rh(n),Vr(n)}function rh(n){n.D||(n.D=!0,Ue(n,"complete"),Ue(n,"error"))}C.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Ue(this,"complete"),Ue(this,"abort"),Vr(this))};C.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Vr(this,!0)),ye.X.M.call(this)};C.Ha=function(){this.s||(this.F||this.v||this.l?oh(this):this.fb())};C.fb=function(){oh(this)};function oh(n){if(n.h&&typeof fa<"u"&&(!n.C[1]||Zt(n)!=4||n.aa()!=2)){if(n.v&&Zt(n)==4)Ta(n.Ha,0,n);else if(Ue(n,"readystatechange"),Zt(n)==4){n.h=!1;try{const o=n.aa();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=o===0){var i=String(n.H).match(Xu)[1]||null;if(!i&&F.self&&F.self.location){var r=F.self.location.protocol;i=r.substr(0,r.length-1)}s=!oy.test(i?i.toLowerCase():"")}t=s}if(t)Ue(n,"complete"),Ue(n,"success");else{n.m=6;try{var a=2<Zt(n)?n.g.statusText:""}catch{a=""}n.j=a+" ["+n.aa()+"]",rh(n)}}finally{Vr(n)}}}}function Vr(n,e){if(n.g){ah(n);const t=n.g,s=n.C[0]?ir:null;n.g=null,n.C=null,e||Ue(n,"ready");try{t.onreadystatechange=s}catch{}}}function ah(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(F.clearTimeout(n.A),n.A=null)}function Zt(n){return n.g?n.g.readyState:0}C.aa=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};C.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};C.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),ry(e)}};function qc(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case ih:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}C.Ea=function(){return this.m};C.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ch(n){let e="";return ga(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Da(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=ch(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):de(n,e,t))}function Ms(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function lh(n){this.Ca=0,this.i=[],this.j=new Lr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ms("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ms("baseRetryDelayMs",5e3,n),this.bb=Ms("retryDelaySeedMs",1e4,n),this.$a=Ms("forwardChannelMaxRetries",2,n),this.ta=Ms("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Zu(n&&n.concurrentRequestLimit),this.Fa=new ny,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}C=lh.prototype;C.ma=8;C.G=1;function Oa(n){if(uh(n),n.G==3){var e=n.U++,t=sn(n.F);de(t,"SID",n.I),de(t,"RID",e),de(t,"TYPE","terminate"),Ii(n,t),e=new gi(n,n.j,e,void 0),e.K=2,e.v=Br(sn(t)),t=!1,F.navigator&&F.navigator.sendBeacon&&(t=F.navigator.sendBeacon(e.v.toString(),"")),!t&&F.Image&&(new Image().src=e.v,t=!0),t||(e.g=_h(e.l,null),e.g.da(e.v)),e.F=Date.now(),yi(e)}gh(n)}function jr(n){n.g&&(La(n),n.g.cancel(),n.g=null)}function uh(n){jr(n),n.u&&(F.clearTimeout(n.u),n.u=null),ur(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&F.clearTimeout(n.m),n.m=null)}function Hr(n){$u(n.h)||n.m||(n.m=!0,Nu(n.Ja,n),n.C=0)}function ly(n,e){return eh(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=mi(qe(n.Ja,n,e),ph(n,n.C)),n.C++,!0)}C.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const i=new gi(this,this.j,n,void 0);let r=this.s;if(this.S&&(r?(r=wu(r),Au(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=hh(this,i,e),t=sn(this.F),de(t,"RID",n),de(t,"CVER",22),this.D&&de(t,"X-HTTP-Session-Id",this.D),Ii(this,t),r&&(this.N?e="headers="+encodeURIComponent(String(ch(r)))+"&"+e:this.o&&Da(t,this.o,r)),Ca(this.h,i),this.Ya&&de(t,"TYPE","init"),this.O?(de(t,"$req",e),de(t,"SID","null"),i.Z=!0,Ho(i,t,null)):Ho(i,t,e),this.G=2}}else this.G==3&&(n?Kc(this,n):this.i.length==0||$u(this.h)||Kc(this))};function Kc(n,e){var t;e?t=e.m:t=n.U++;const s=sn(n.F);de(s,"SID",n.I),de(s,"RID",t),de(s,"AID",n.T),Ii(n,s),n.o&&n.s&&Da(s,n.o,n.s),t=new gi(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=hh(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Ca(n.h,t),Ho(t,s,e)}function Ii(n,e){n.ia&&ga(n.ia,function(t,s){de(e,s,t)}),n.l&&Wu({},function(t,s){de(e,s,t)})}function hh(n,e,t){t=Math.min(n.i.length,t);var s=n.l?qe(n.l.Ra,n.l,n):null;e:{var i=n.i;let r=-1;for(;;){const a=["count="+t];r==-1?0<t?(r=i[0].h,a.push("ofs="+r)):r=0:a.push("ofs="+r);let o=!0;for(let c=0;c<t;c++){let l=i[c].h;const u=i[c].g;if(l-=r,0>l)r=Math.max(0,i[c].h-100),o=!1;else try{sy(u,a,"req"+l+"_")}catch{s&&s(u)}}if(o){s=a.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function dh(n){n.g||n.u||(n.Z=1,Nu(n.Ia,n),n.A=0)}function Na(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=mi(qe(n.Ia,n),ph(n,n.A)),n.A++,!0)}C.Ia=function(){if(this.u=null,fh(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=mi(qe(this.eb,this),n)}};C.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Ze(10),jr(this),fh(this))};function La(n){n.B!=null&&(F.clearTimeout(n.B),n.B=null)}function fh(n){n.g=new gi(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=sn(n.sa);de(e,"RID","rpc"),de(e,"SID",n.I),de(e,"CI",n.L?"0":"1"),de(e,"AID",n.T),de(e,"TYPE","xmlhttp"),Ii(n,e),n.o&&n.s&&Da(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Br(sn(e)),t.s=null,t.P=!0,zu(t,n)}C.cb=function(){this.v!=null&&(this.v=null,jr(this),Na(this),Ze(19))};function ur(n){n.v!=null&&(F.clearTimeout(n.v),n.v=null)}function mh(n,e){var t=null;if(n.g==e){ur(n),La(n),n.g=null;var s=2}else if(qo(n.h,e))t=e.D,th(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var i=n.C;s=Mr(),Ue(s,new xu(s,t)),Hr(n)}else dh(n);else if(i=e.o,i==3||i==0&&0<n.pa||!(s==1&&ly(n,e)||s==2&&Na(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),i){case 1:xn(n,5);break;case 4:xn(n,10);break;case 3:xn(n,6);break;default:xn(n,2)}}}function ph(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function xn(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=qe(n.kb,n);t||(t=new qn("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||cr(t,"https"),Br(t)),iy(t.toString(),s)}else Ze(2);n.G=0,n.l&&n.l.va(e),gh(n),uh(n)}C.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Ze(2)):(this.j.info("Failed to ping google.com"),Ze(1))};function gh(n){if(n.G=0,n.la=[],n.l){const e=nh(n.h);(e.length!=0||n.i.length!=0)&&(Mc(n.la,e),Mc(n.la,n.i),n.h.i.length=0,ma(n.i),n.i.length=0),n.l.ua()}}function yh(n,e,t){var s=t instanceof qn?sn(t):new qn(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),lr(s,s.m);else{var i=F.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new qn(null,void 0);s&&cr(r,s),e&&(r.g=e),i&&lr(r,i),t&&(r.l=t),s=r}return t=n.D,e=n.za,t&&e&&de(s,t,e),de(s,"VER",n.ma),Ii(n,s),s}function _h(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new ye(new _i({jb:!0})):new ye(n.ra),e.Ka(n.H),e}function vh(){}C=vh.prototype;C.xa=function(){};C.wa=function(){};C.va=function(){};C.ua=function(){};C.Ra=function(){};function hr(){if(ps&&!(10<=Number(Sg)))throw Error("Environmental error: no available transport.")}hr.prototype.g=function(n,e){return new vt(n,e)};function vt(n,e){Me.call(this),this.g=new lh(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!rr(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rr(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Cs(this)}Be(vt,Me);vt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Ze(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=yh(n,null,n.V),Hr(n)};vt.prototype.close=function(){Oa(this.g)};vt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Ea(n),n=t);e.i.push(new ey(e.ab++,n)),e.G==3&&Hr(e)};vt.prototype.M=function(){this.g.l=null,delete this.j,Oa(this.g),delete this.g,vt.X.M.call(this)};function Ih(n){Aa.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}Be(Ih,Aa);function Eh(){Sa.call(this),this.status=1}Be(Eh,Sa);function Cs(n){this.g=n}Be(Cs,vh);Cs.prototype.xa=function(){Ue(this.g,"a")};Cs.prototype.wa=function(n){Ue(this.g,new Ih(n))};Cs.prototype.va=function(n){Ue(this.g,new Eh)};Cs.prototype.ua=function(){Ue(this.g,"b")};hr.prototype.createWebChannel=hr.prototype.g;vt.prototype.send=vt.prototype.u;vt.prototype.open=vt.prototype.m;vt.prototype.close=vt.prototype.close;Pr.NO_ERROR=0;Pr.TIMEOUT=8;Pr.HTTP_ERROR=6;Vu.COMPLETE="complete";ju.EventType=pi;pi.OPEN="a";pi.CLOSE="b";pi.ERROR="c";pi.MESSAGE="d";Me.prototype.listen=Me.prototype.N;ye.prototype.listenOnce=ye.prototype.O;ye.prototype.getLastError=ye.prototype.Oa;ye.prototype.getLastErrorCode=ye.prototype.Ea;ye.prototype.getStatus=ye.prototype.aa;ye.prototype.getResponseJson=ye.prototype.Sa;ye.prototype.getResponseText=ye.prototype.fa;ye.prototype.send=ye.prototype.da;ye.prototype.setWithCredentials=ye.prototype.Ka;var uy=function(){return new hr},hy=function(){return Mr()},vo=Pr,dy=Vu,fy=ns,Gc={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},my=_i,Bi=ju,py=ye;const Wc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn=new ha("@firebase/firestore");function Xc(){return Yn.logLevel}function R(n,...e){if(Yn.logLevel<=te.DEBUG){const t=e.map(Ma);Yn.debug(`Firestore (${Rs}): ${n}`,...t)}}function rn(n,...e){if(Yn.logLevel<=te.ERROR){const t=e.map(Ma);Yn.error(`Firestore (${Rs}): ${n}`,...t)}}function Qc(n,...e){if(Yn.logLevel<=te.WARN){const t=e.map(Ma);Yn.warn(`Firestore (${Rs}): ${n}`,...t)}}function Ma(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(n="Unexpected state"){const e=`FIRESTORE (${Rs}) INTERNAL ASSERTION FAILED: `+n;throw rn(e),new Error(e)}function le(n,e){n||P()}function V(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends qt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class yy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(at.UNAUTHENTICATED))}shutdown(){}}class _y{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const i=c=>this.i!==s?(s=this.i,t(c)):Promise.resolve();let r=new wn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new wn,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},o=c=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(c=>o(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?o(c):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new wn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(le(typeof s.accessToken=="string"),new gy(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string"),new at(e)}}class vy{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i,this.type="FirstParty",this.user=at.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(le(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class Iy{constructor(e,t,s,i){this.h=e,this.l=t,this.m=s,this.g=i}getToken(){return Promise.resolve(new vy(this.h,this.l,this.m,this.g))}start(e,t){e.enqueueRetryable(()=>t(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ey{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class by{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,t){const s=r=>{r.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const a=r.token!==this.A;return this.A=r.token,R("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.T.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.T.getImmediate({optional:!0});r?i(r):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(le(typeof t.token=="string"),this.A=t.token,new Ey(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ty(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=Ty(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<t&&(s+=e.charAt(i[r]%e.length))}return s}}function ne(n,e){return n<e?-1:n>e?1:0}function gs(n,e,t){return n.length===e.length&&n.every((s,i)=>t(s,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new M(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ae.fromMillis(Date.now())}static fromDate(e){return Ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new Ae(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e){this.timestamp=e}static fromTimestamp(e){return new B(e)}static min(){return new B(new Ae(0,0))}static max(){return new B(new Ae(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t,s){t===void 0?t=0:t>e.length&&P(),s===void 0?s=e.length-t:s>e.length-t&&P(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return ei.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ei?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let i=0;i<s;i++){const r=e.get(i),a=t.get(i);if(r<a)return-1;if(r>a)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class fe extends ei{construct(e,t,s){return new fe(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new M(_.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(i=>i.length>0))}return new fe(t)}static emptyPath(){return new fe([])}}const wy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends ei{construct(e,t,s){return new ze(e,t,s)}static isValidIdentifier(e){return wy.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const t=[];let s="",i=0;const r=()=>{if(s.length===0)throw new M(_.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let a=!1;for(;i<e.length;){const o=e[i];if(o==="\\"){if(i+1===e.length)throw new M(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[i+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=c,i+=2}else o==="`"?(a=!a,i++):o!=="."||a?(s+=o,i++):(r(),i++)}if(r(),a)throw new M(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(fe.fromString(e))}static fromName(e){return new O(fe.fromString(e).popFirst(5))}static empty(){return new O(fe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&fe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return fe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new fe(e.slice()))}}function Ay(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,i=B.fromTimestamp(s===1e9?new Ae(t+1,0):new Ae(t,s));return new Rn(i,O.empty(),e)}function Sy(n){return new Rn(n.readTime,n.key,-1)}class Rn{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new Rn(B.min(),O.empty(),-1)}static max(){return new Rn(B.max(),O.empty(),-1)}}function Cy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:ne(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ky{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(n){if(n.code!==_.FAILED_PRECONDITION||n.message!==Ry)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&P(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new v((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(t,r).next(s,i)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof v?t:v.resolve(t)}catch(t){return v.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):v.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):v.reject(t)}static resolve(e){return new v((t,s)=>{t(e)})}static reject(e){return new v((t,s)=>{s(e)})}static waitFor(e){return new v((t,s)=>{let i=0,r=0,a=!1;e.forEach(o=>{++i,o.next(()=>{++r,a&&r===i&&t()},c=>s(c))}),a=!0,r===i&&t()})}static or(e){let t=v.resolve(!1);for(const s of e)t=t.next(i=>i?v.resolve(i):s());return t}static forEach(e,t){const s=[];return e.forEach((i,r)=>{s.push(t.call(this,i,r))}),this.waitFor(s)}static mapArray(e,t){return new v((s,i)=>{const r=e.length,a=new Array(r);let o=0;for(let c=0;c<r;c++){const l=c;t(e[l]).next(u=>{a[l]=u,++o,o===r&&s(a)},u=>i(u))}})}static doWhile(e,t){return new v((s,i)=>{const r=()=>{e()===!0?t().next(()=>{r()},i):s()};r()})}}function bi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ut(s),this.ct=s=>t.writeSequenceNumber(s))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Pa.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dy{constructor(e,t,s,i,r,a,o,c){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.useFetchStreams=c}}class ti{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ks(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Th(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(n){return n==null}function dr(n){return n===0&&1/n==-1/0}function Oy(n){return typeof n=="number"&&Number.isInteger(n)&&!dr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw i instanceof DOMException?new Ny("Invalid base64 string: "+i):i}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kn(n){if(le(!!n),typeof n=="string"){let e=0;const t=Ly.exec(n);if(le(!!t),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Ee(n.seconds),nanos:Ee(n.nanos)}}function Ee(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ys(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wh(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Ah(n){const e=n.mapValue.fields.__previous_value__;return wh(e)?Ah(e):e}function ni(n){const e=kn(n.mapValue.fields.__local_write_time__.timestampValue);return new Ae(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?wh(n)?4:My(n)?9007199254740991:10:P()}function xt(n,e){if(n===e)return!0;const t=Jn(n);if(t!==Jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=kn(s.timestampValue),a=kn(i.timestampValue);return r.seconds===a.seconds&&r.nanos===a.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return ys(s.bytesValue).isEqual(ys(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return Ee(s.geoPointValue.latitude)===Ee(i.geoPointValue.latitude)&&Ee(s.geoPointValue.longitude)===Ee(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ee(s.integerValue)===Ee(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=Ee(s.doubleValue),a=Ee(i.doubleValue);return r===a?dr(r)===dr(a):isNaN(r)&&isNaN(a)}return!1}(n,e);case 9:return gs(n.arrayValue.values||[],e.arrayValue.values||[],xt);case 10:return function(s,i){const r=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Yc(r)!==Yc(a))return!1;for(const o in r)if(r.hasOwnProperty(o)&&(a[o]===void 0||!xt(r[o],a[o])))return!1;return!0}(n,e);default:return P()}}function si(n,e){return(n.values||[]).find(t=>xt(t,e))!==void 0}function _s(n,e){if(n===e)return 0;const t=Jn(n),s=Jn(e);if(t!==s)return ne(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return ne(n.booleanValue,e.booleanValue);case 2:return function(i,r){const a=Ee(i.integerValue||i.doubleValue),o=Ee(r.integerValue||r.doubleValue);return a<o?-1:a>o?1:a===o?0:isNaN(a)?isNaN(o)?0:-1:1}(n,e);case 3:return Jc(n.timestampValue,e.timestampValue);case 4:return Jc(ni(n),ni(e));case 5:return ne(n.stringValue,e.stringValue);case 6:return function(i,r){const a=ys(i),o=ys(r);return a.compareTo(o)}(n.bytesValue,e.bytesValue);case 7:return function(i,r){const a=i.split("/"),o=r.split("/");for(let c=0;c<a.length&&c<o.length;c++){const l=ne(a[c],o[c]);if(l!==0)return l}return ne(a.length,o.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,r){const a=ne(Ee(i.latitude),Ee(r.latitude));return a!==0?a:ne(Ee(i.longitude),Ee(r.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(i,r){const a=i.values||[],o=r.values||[];for(let c=0;c<a.length&&c<o.length;++c){const l=_s(a[c],o[c]);if(l)return l}return ne(a.length,o.length)}(n.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===xi.mapValue&&r===xi.mapValue)return 0;if(i===xi.mapValue)return 1;if(r===xi.mapValue)return-1;const a=i.fields||{},o=Object.keys(a),c=r.fields||{},l=Object.keys(c);o.sort(),l.sort();for(let u=0;u<o.length&&u<l.length;++u){const h=ne(o[u],l[u]);if(h!==0)return h;const d=_s(a[o[u]],c[l[u]]);if(d!==0)return d}return ne(o.length,l.length)}(n.mapValue,e.mapValue);default:throw P()}}function Jc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ne(n,e);const t=kn(n),s=kn(e),i=ne(t.seconds,s.seconds);return i!==0?i:ne(t.nanos,s.nanos)}function vs(n){return Ko(n)}function Ko(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const i=kn(s);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ys(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,O.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let i="[",r=!0;for(const a of s.values||[])r?r=!1:i+=",",i+=Ko(a);return i+"]"}(n.arrayValue):"mapValue"in n?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",a=!0;for(const o of i)a?a=!1:r+=",",r+=`${o}:${Ko(s.fields[o])}`;return r+"}"}(n.mapValue):P();var e,t}function Go(n){return!!n&&"integerValue"in n}function Ua(n){return!!n&&"arrayValue"in n}function Zc(n){return!!n&&"nullValue"in n}function $c(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Gi(n){return!!n&&"mapValue"in n}function Vs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return ks(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=Vs(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function My(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{constructor(e,t){this.position=e,this.inclusive=t}}function el(n,e,t){let s=0;for(let i=0;i<n.position.length;i++){const r=e[i],a=n.position[i];if(r.field.isKeyField()?s=O.comparator(O.fromName(a.referenceValue),t.key):s=_s(a,t.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function tl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!xt(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{}class we extends Sh{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Uy(e,t,s):t==="array-contains"?new xy(e,s):t==="in"?new Vy(e,s):t==="not-in"?new jy(e,s):t==="array-contains-any"?new Hy(e,s):new we(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Fy(e,s):new By(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(_s(t,this.value)):t!==null&&Jn(this.value)===Jn(t)&&this.matchesComparison(_s(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return P()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vt extends Sh{constructor(e,t){super(),this.filters=e,this.op=t,this.ft=null}static create(e,t){return new Vt(e,t)}matches(e){return Ch(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(t=>t.isInequality());return e!==null?e.field:null}dt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Ch(n){return n.op==="and"}function Rh(n){return Py(n)&&Ch(n)}function Py(n){for(const e of n.filters)if(e instanceof Vt)return!1;return!0}function Wo(n){if(n instanceof we)return n.field.canonicalString()+n.op.toString()+vs(n.value);if(Rh(n))return n.filters.map(e=>Wo(e)).join(",");{const e=n.filters.map(t=>Wo(t)).join(",");return`${n.op}(${e})`}}function kh(n,e){return n instanceof we?function(t,s){return s instanceof we&&t.op===s.op&&t.field.isEqual(s.field)&&xt(t.value,s.value)}(n,e):n instanceof Vt?function(t,s){return s instanceof Vt&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((i,r,a)=>i&&kh(r,s.filters[a]),!0):!1}(n,e):void P()}function Dh(n){return n instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${vs(e.value)}`}(n):n instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(Dh).join(" ,")+"}"}(n):"Filter"}class Uy extends we{constructor(e,t,s){super(e,t,s),this.key=O.fromName(s.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class Fy extends we{constructor(e,t){super(e,"in",t),this.keys=Oh("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class By extends we{constructor(e,t){super(e,"not-in",t),this.keys=Oh("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Oh(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>O.fromName(s.referenceValue))}class xy extends we{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ua(t)&&si(t.arrayValue,this.value)}}class Vy extends we{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class jy extends we{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!si(this.value.arrayValue,t)}}class Hy extends we{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ua(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>si(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t="asc"){this.field=e,this.dir=t}}function zy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||Pe.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pe.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return t+s.left.size;i<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vi(this.root,e,this.comparator,!0)}}class Vi{constructor(e,t,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?s(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pe{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??Pe.RED,this.left=i??Pe.EMPTY,this.right=r??Pe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,i,r){return new Pe(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Pe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return Pe.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw P();const e=this.left.check();if(e!==this.right.check())throw P();return e+(this.isRed()?0:1)}}Pe.EMPTY=null,Pe.RED=!0,Pe.BLACK=!1;Pe.EMPTY=new class{constructor(){this.size=0}get key(){throw P()}get value(){throw P()}get color(){throw P()}get left(){throw P()}get right(){throw P()}copy(n,e,t,s,i){return this}insert(n,e,t){return new Pe(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new nl(this.data.getIterator())}getIteratorFrom(e){return new nl(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class nl{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ct([])}unionWith(e){let t=new Se(ze.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ct(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gs(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Gi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(t)}setAll(e){let t=ze.emptyPath(),s={},i=[];e.forEach((a,o)=>{if(!t.isImmediateParentOf(o)){const c=this.getFieldsMap(t);this.applyChanges(c,s,i),s={},i=[],t=o.popLast()}a?s[o.lastSegment()]=Vs(a):i.push(o.lastSegment())});const r=this.getFieldsMap(t);this.applyChanges(r,s,i)}delete(e){const t=this.field(e.popLast());Gi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return xt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=t.mapValue.fields[e.get(s)];Gi(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,s){ks(t,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new Et(Vs(this.value))}}function Nh(n){const e=[];return ks(n.fields,(t,s)=>{const i=new ze([t]);if(Gi(s)){const r=Nh(s.mapValue).fields;if(r.length===0)e.push(i);else for(const a of r)e.push(i.child(a))}else e.push(i)}),new Ct(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,t,s,i,r,a,o){this.key=e,this.documentType=t,this.version=s,this.readTime=i,this.createTime=r,this.data=a,this.documentState=o}static newInvalidDocument(e){return new He(e,0,B.min(),B.min(),B.min(),Et.empty(),0)}static newFoundDocument(e,t,s,i){return new He(e,1,t,B.min(),s,i,0)}static newNoDocument(e,t){return new He(e,2,t,B.min(),B.min(),Et.empty(),0)}static newUnknownDocument(e,t){return new He(e,3,t,B.min(),B.min(),Et.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof He&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new He(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t=null,s=[],i=[],r=null,a=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=a,this.endAt=o,this._t=null}}function sl(n,e=null,t=[],s=[],i=null,r=null,a=null){return new qy(n,e,t,s,i,r,a)}function Fa(n){const e=V(n);if(e._t===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>Wo(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),zr(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>vs(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>vs(s)).join(",")),e._t=t}return e._t}function Ba(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!zy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!kh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!tl(n.startAt,e.startAt)&&tl(n.endAt,e.endAt)}function Xo(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e,t=null,s=[],i=[],r=null,a="F",o=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=a,this.startAt=o,this.endAt=c,this.wt=null,this.gt=null,this.startAt,this.endAt}}function Ky(n,e,t,s,i,r,a,o){return new qr(n,e,t,s,i,r,a,o)}function Lh(n){return new qr(n)}function il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Gy(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Wy(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function Xy(n){return n.collectionGroup!==null}function hs(n){const e=V(n);if(e.wt===null){e.wt=[];const t=Wy(e),s=Gy(e);if(t!==null&&s===null)t.isKeyField()||e.wt.push(new js(t)),e.wt.push(new js(ze.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new js(ze.keyField(),r))}}}return e.wt}function on(n){const e=V(n);if(!e.gt)if(e.limitType==="F")e.gt=sl(e.path,e.collectionGroup,hs(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const r of hs(e)){const a=r.dir==="desc"?"asc":"desc";t.push(new js(r.field,a))}const s=e.endAt?new fr(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new fr(e.startAt.position,e.startAt.inclusive):null;e.gt=sl(e.path,e.collectionGroup,t,e.filters,e.limit,s,i)}return e.gt}function Qo(n,e,t){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Kr(n,e){return Ba(on(n),on(e))&&n.limitType===e.limitType}function Mh(n){return`${Fa(on(n))}|lt:${n.limitType}`}function Yo(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Dh(s)).join(", ")}]`),zr(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>vs(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>vs(s)).join(",")),`Target(${t})`}(on(n))}; limitType=${n.limitType})`}function Gr(n,e){return e.isFoundDocument()&&function(t,s){const i=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(i):O.isDocumentKey(t.path)?t.path.isEqual(i):t.path.isImmediateParentOf(i)}(n,e)&&function(t,s){for(const i of hs(t))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const i of t.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(i,r,a){const o=el(i,r,a);return i.inclusive?o<=0:o<0}(t.startAt,hs(t),s)||t.endAt&&!function(i,r,a){const o=el(i,r,a);return i.inclusive?o>=0:o>0}(t.endAt,hs(t),s))}(n,e)}function Qy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Ph(n){return(e,t)=>{let s=!1;for(const i of hs(n)){const r=Yy(i,e,t);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function Yy(n,e,t){const s=n.field.isKeyField()?O.comparator(e.key,t.key):function(i,r,a){const o=r.data.field(i),c=a.data.field(i);return o!==null&&c!==null?_s(o,c):P()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return P()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(n,e){if(n.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:dr(e)?"-0":e}}function Fh(n){return{integerValue:""+n}}function Jy(n,e){return Oy(e)?Fh(e):Uh(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(){this._=void 0}}function Zy(n,e,t){return n instanceof ii?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(t,e):n instanceof ri?xh(n,e):n instanceof oi?Vh(n,e):function(s,i){const r=Bh(s,i),a=rl(r)+rl(s.It);return Go(r)&&Go(s.It)?Fh(a):Uh(s.Tt,a)}(n,e)}function $y(n,e,t){return n instanceof ri?xh(n,e):n instanceof oi?Vh(n,e):t}function Bh(n,e){return n instanceof mr?Go(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class ii extends Wr{}class ri extends Wr{constructor(e){super(),this.elements=e}}function xh(n,e){const t=jh(e);for(const s of n.elements)t.some(i=>xt(i,s))||t.push(s);return{arrayValue:{values:t}}}class oi extends Wr{constructor(e){super(),this.elements=e}}function Vh(n,e){let t=jh(e);for(const s of n.elements)t=t.filter(i=>!xt(i,s));return{arrayValue:{values:t}}}class mr extends Wr{constructor(e,t){super(),this.Tt=e,this.It=t}}function rl(n){return Ee(n.integerValue||n.doubleValue)}function jh(n){return Ua(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(e,t){this.field=e,this.transform=t}}function t_(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof ri&&s instanceof ri||t instanceof oi&&s instanceof oi?gs(t.elements,s.elements,xt):t instanceof mr&&s instanceof mr?xt(t.It,s.It):t instanceof ii&&s instanceof ii}(n.transform,e.transform)}class n_{constructor(e,t){this.version=e,this.transformResults=t}}class nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Xr{}function Hh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new qh(n.key,nn.none()):new Ti(n.key,n.data,nn.none());{const t=n.data,s=Et.empty();let i=new Se(ze.comparator);for(let r of e.fields)if(!i.has(r)){let a=t.field(r);a===null&&r.length>1&&(r=r.popLast(),a=t.field(r)),a===null?s.delete(r):s.set(r,a),i=i.add(r)}return new ss(n.key,s,new Ct(i.toArray()),nn.none())}}function s_(n,e,t){n instanceof Ti?function(s,i,r){const a=s.value.clone(),o=al(s.fieldTransforms,i,r.transformResults);a.setAll(o),i.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(n,e,t):n instanceof ss?function(s,i,r){if(!Wi(s.precondition,i))return void i.convertToUnknownDocument(r.version);const a=al(s.fieldTransforms,i,r.transformResults),o=i.data;o.setAll(zh(s)),o.setAll(a),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(n,e,t):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,t)}function Hs(n,e,t,s){return n instanceof Ti?function(i,r,a,o){if(!Wi(i.precondition,r))return a;const c=i.value.clone(),l=cl(i.fieldTransforms,o,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(n,e,t,s):n instanceof ss?function(i,r,a,o){if(!Wi(i.precondition,r))return a;const c=cl(i.fieldTransforms,o,r),l=r.data;return l.setAll(zh(i)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(u=>u.field))}(n,e,t,s):function(i,r,a){return Wi(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):a}(n,e,t)}function i_(n,e){let t=null;for(const s of n.fieldTransforms){const i=e.data.field(s.field),r=Bh(s.transform,i||null);r!=null&&(t===null&&(t=Et.empty()),t.set(s.field,r))}return t||null}function ol(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&gs(t,s,(i,r)=>t_(i,r))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Ti extends Xr{constructor(e,t,s,i=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ss extends Xr{constructor(e,t,s,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function zh(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function al(n,e,t){const s=new Map;le(n.length===t.length);for(let i=0;i<t.length;i++){const r=n[i],a=r.transform,o=e.data.field(r.field);s.set(r.field,$y(a,o,t[i]))}return s}function cl(n,e,t){const s=new Map;for(const i of n){const r=i.transform,a=t.data.field(i.field);s.set(i.field,Zy(r,a,e))}return s}class qh extends Xr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r_ extends Xr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,$;function a_(n){switch(n){default:return P();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}function Kh(n){if(n===void 0)return rn("GRPC error has no .code"),_.UNKNOWN;switch(n){case Ie.OK:return _.OK;case Ie.CANCELLED:return _.CANCELLED;case Ie.UNKNOWN:return _.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return _.INTERNAL;case Ie.UNAVAILABLE:return _.UNAVAILABLE;case Ie.UNAUTHENTICATED:return _.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case Ie.NOT_FOUND:return _.NOT_FOUND;case Ie.ALREADY_EXISTS:return _.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return _.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case Ie.ABORTED:return _.ABORTED;case Ie.OUT_OF_RANGE:return _.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return _.UNIMPLEMENTED;case Ie.DATA_LOSS:return _.DATA_LOSS;default:return P()}}($=Ie||(Ie={}))[$.OK=0]="OK",$[$.CANCELLED=1]="CANCELLED",$[$.UNKNOWN=2]="UNKNOWN",$[$.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",$[$.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",$[$.NOT_FOUND=5]="NOT_FOUND",$[$.ALREADY_EXISTS=6]="ALREADY_EXISTS",$[$.PERMISSION_DENIED=7]="PERMISSION_DENIED",$[$.UNAUTHENTICATED=16]="UNAUTHENTICATED",$[$.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",$[$.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",$[$.ABORTED=10]="ABORTED",$[$.OUT_OF_RANGE=11]="OUT_OF_RANGE",$[$.UNIMPLEMENTED=12]="UNIMPLEMENTED",$[$.INTERNAL=13]="INTERNAL",$[$.UNAVAILABLE=14]="UNAVAILABLE",$[$.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[t]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ks(this.inner,(t,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return Th(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c_=new Ce(O.comparator);function an(){return c_}const Gh=new Ce(O.comparator);function Bs(...n){let e=Gh;for(const t of n)e=e.insert(t.key,t);return e}function Wh(n){let e=Gh;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function Vn(){return zs()}function Xh(){return zs()}function zs(){return new Ds(n=>n.toString(),(n,e)=>n.isEqual(e))}const l_=new Ce(O.comparator),u_=new Se(O.comparator);function J(...n){let e=u_;for(const t of n)e=e.add(t);return e}const h_=new Se(ne);function Qh(){return h_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr{constructor(e,t,s,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const i=new Map;return i.set(e,wi.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new Qr(B.min(),i,Qh(),an(),J())}}class wi{constructor(e,t,s,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new wi(s,t,J(),J(),J())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,t,s,i){this.Et=e,this.removedTargetIds=t,this.key=s,this.At=i}}class Yh{constructor(e,t){this.targetId=e,this.Rt=t}}class Jh{constructor(e,t,s=Xe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=i}}class ll{constructor(){this.bt=0,this.vt=hl(),this.Pt=Xe.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=J(),t=J(),s=J();return this.vt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:s=s.add(i);break;default:P()}}),new wi(this.Pt,this.Vt,e,t,s)}kt(){this.St=!1,this.vt=hl()}Ot(e,t){this.St=!0,this.vt=this.vt.insert(e,t)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class d_{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=an(),this.Kt=ul(),this.Gt=new Se(ne)}Qt(e){for(const t of e.Et)e.At&&e.At.isFoundDocument()?this.jt(t,e.At):this.zt(t,e.key,e.At);for(const t of e.removedTargetIds)this.zt(t,e.key,e.At)}Wt(e){this.forEachTarget(e,t=>{const s=this.Ht(t);switch(e.state){case 0:this.Jt(t)&&s.xt(e.resumeToken);break;case 1:s.$t(),s.Dt||s.kt(),s.xt(e.resumeToken);break;case 2:s.$t(),s.Dt||this.removeTarget(t);break;case 3:this.Jt(t)&&(s.Bt(),s.xt(e.resumeToken));break;case 4:this.Jt(t)&&(this.Yt(t),s.xt(e.resumeToken));break;default:P()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qt.forEach((s,i)=>{this.Jt(i)&&t(i)})}Zt(e){const t=e.targetId,s=e.Rt.count,i=this.Xt(t);if(i){const r=i.target;if(Xo(r))if(s===0){const a=new O(r.path);this.zt(t,a,He.newNoDocument(a,B.min()))}else le(s===1);else this.te(t)!==s&&(this.Yt(t),this.Gt=this.Gt.add(t))}}ee(e){const t=new Map;this.qt.forEach((r,a)=>{const o=this.Xt(a);if(o){if(r.current&&Xo(o.target)){const c=new O(o.target.path);this.Ut.get(c)!==null||this.ne(a,c)||this.zt(a,c,He.newNoDocument(c,e))}r.Ct&&(t.set(a,r.Nt()),r.kt())}});let s=J();this.Kt.forEach((r,a)=>{let o=!0;a.forEachWhile(c=>{const l=this.Xt(c);return!l||l.purpose===2||(o=!1,!1)}),o&&(s=s.add(r))}),this.Ut.forEach((r,a)=>a.setReadTime(e));const i=new Qr(e,t,this.Gt,this.Ut,s);return this.Ut=an(),this.Kt=ul(),this.Gt=new Se(ne),i}jt(e,t){if(!this.Jt(e))return;const s=this.ne(e,t.key)?2:0;this.Ht(e).Ot(t.key,s),this.Ut=this.Ut.insert(t.key,t),this.Kt=this.Kt.insert(t.key,this.se(t.key).add(e))}zt(e,t,s){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,t)?i.Ot(t,1):i.Mt(t),this.Kt=this.Kt.insert(t,this.se(t).delete(e)),s&&(this.Ut=this.Ut.insert(t,s))}removeTarget(e){this.qt.delete(e)}te(e){const t=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let t=this.qt.get(e);return t||(t=new ll,this.qt.set(e,t)),t}se(e){let t=this.Kt.get(e);return t||(t=new Se(ne),this.Kt=this.Kt.insert(e,t)),t}Jt(e){const t=this.Xt(e)!==null;return t||R("WatchChangeAggregator","Detected inactive target",e),t}Xt(e){const t=this.qt.get(e);return t&&t.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new ll),this.Lt.getRemoteKeysForTarget(e).forEach(t=>{this.zt(e,t,null)})}ne(e,t){return this.Lt.getRemoteKeysForTarget(e).has(t)}}function ul(){return new Ce(O.comparator)}function hl(){return new Ce(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),m_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),p_=(()=>({and:"AND",or:"OR"}))();class g_{constructor(e,t){this.databaseId=e,this.yt=t}}function pr(n,e){return n.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zh(n,e){return n.yt?e.toBase64():e.toUint8Array()}function y_(n,e){return pr(n,e.toTimestamp())}function Ut(n){return le(!!n),B.fromTimestamp(function(e){const t=kn(e);return new Ae(t.seconds,t.nanos)}(n))}function xa(n,e){return function(t){return new fe(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function $h(n){const e=fe.fromString(n);return le(sd(e)),e}function Jo(n,e){return xa(n.databaseId,e.path)}function Io(n,e){const t=$h(e);if(t.get(1)!==n.databaseId.projectId)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new M(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(ed(t))}function Zo(n,e){return xa(n.databaseId,e)}function __(n){const e=$h(n);return e.length===4?fe.emptyPath():ed(e)}function $o(n){return new fe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ed(n){return le(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function dl(n,e,t){return{name:Jo(n,e),fields:t.value.mapValue.fields}}function v_(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:P()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(c,l){return c.yt?(le(l===void 0||typeof l=="string"),Xe.fromBase64String(l||"")):(le(l===void 0||l instanceof Uint8Array),Xe.fromUint8Array(l||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const l=c.code===void 0?_.UNKNOWN:Kh(c.code);return new M(l,c.message||"")}(a);t=new Jh(s,i,r,o||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=Io(n,s.document.name),r=Ut(s.document.updateTime),a=s.document.createTime?Ut(s.document.createTime):B.min(),o=new Et({mapValue:{fields:s.document.fields}}),c=He.newFoundDocument(i,r,a,o),l=s.targetIds||[],u=s.removedTargetIds||[];t=new Xi(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=Io(n,s.document),r=s.readTime?Ut(s.readTime):B.min(),a=He.newNoDocument(i,r),o=s.removedTargetIds||[];t=new Xi([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=Io(n,s.document),r=s.removedTargetIds||[];t=new Xi([],r,i,null)}else{if(!("filter"in e))return P();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new o_(i),a=s.targetId;t=new Yh(a,r)}}return t}function I_(n,e){let t;if(e instanceof Ti)t={update:dl(n,e.key,e.value)};else if(e instanceof qh)t={delete:Jo(n,e.key)};else if(e instanceof ss)t={update:dl(n,e.key,e.data),updateMask:k_(e.fieldMask)};else{if(!(e instanceof r_))return P();t={verify:Jo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const a=r.transform;if(a instanceof ii)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof ri)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof oi)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof mr)return{fieldPath:r.field.canonicalString(),increment:a.It};throw P()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:y_(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:P()}(n,e.precondition)),t}function E_(n,e){return n&&n.length>0?(le(e!==void 0),n.map(t=>function(s,i){let r=s.updateTime?Ut(s.updateTime):Ut(i);return r.isEqual(B.min())&&(r=Ut(i)),new n_(r,s.transformResults||[])}(t,e))):[]}function b_(n,e){return{documents:[Zo(n,e.path)]}}function T_(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Zo(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Zo(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(c){if(c.length!==0)return nd(Vt.create(c,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const r=function(c){if(c.length!==0)return c.map(l=>function(u){return{field:as(u.field),direction:S_(u.dir)}}(l))}(e.orderBy);r&&(t.structuredQuery.orderBy=r);const a=function(c,l){return c.yt||zr(l)?l:{value:l}}(n,e.limit);var o;return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt={before:(o=e.startAt).inclusive,values:o.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function w_(n){let e=__(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let i=null;if(s>0){le(s===1);const u=t.from[0];u.allDescendants?i=u.collectionId:e=e.child(u.collectionId)}let r=[];t.where&&(r=function(u){const h=td(u);return h instanceof Vt&&Rh(h)?h.getFilters():[h]}(t.where));let a=[];t.orderBy&&(a=t.orderBy.map(u=>function(h){return new js(cs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let o=null;t.limit&&(o=function(u){let h;return h=typeof u=="object"?u.value:u,zr(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(u){const h=!!u.before,d=u.values||[];return new fr(d,h)}(t.startAt));let l=null;return t.endAt&&(l=function(u){const h=!u.before,d=u.values||[];return new fr(d,h)}(t.endAt)),Ky(e,i,a,r,o,"F",c,l)}function A_(n,e){const t=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return P()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function td(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=cs(e.unaryFilter.field);return we.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=cs(e.unaryFilter.field);return we.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cs(e.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=cs(e.unaryFilter.field);return we.create(r,"!=",{nullValue:"NULL_VALUE"});default:return P()}}(n):n.fieldFilter!==void 0?function(e){return we.create(cs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return P()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(t=>td(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return P()}}(e.compositeFilter.op))}(n):P()}function S_(n){return f_[n]}function C_(n){return m_[n]}function R_(n){return p_[n]}function as(n){return{fieldPath:n.canonicalString()}}function cs(n){return ze.fromServerFormat(n.fieldPath)}function nd(n){return n instanceof we?function(e){if(e.op==="=="){if($c(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NAN"}};if(Zc(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if($c(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NAN"}};if(Zc(e.value))return{unaryFilter:{field:as(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:as(e.field),op:C_(e.op),value:e.value}}}(n):n instanceof Vt?function(e){const t=e.getFilters().map(s=>nd(s));return t.length===1?t[0]:{compositeFilter:{op:R_(e.op),filters:t}}}(n):P()}function k_(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function sd(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e,t,s,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&s_(r,e,s[i])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=Hs(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=Hs(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Xh();return this.mutations.forEach(i=>{const r=e.get(i.key),a=r.overlayedDocument;let o=this.applyToLocalView(a,r.mutatedFields);o=t.has(i.key)?null:o;const c=Hh(a,o);c!==null&&s.set(i.key,c),a.isValidDocument()||a.convertToNoDocument(B.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),J())}isEqual(e){return this.batchId===e.batchId&&gs(this.mutations,e.mutations,(t,s)=>ol(t,s))&&gs(this.baseMutations,e.baseMutations,(t,s)=>ol(t,s))}}class Va{constructor(e,t,s,i){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=i}static from(e,t,s){le(e.mutations.length===s.length);let i=l_;const r=e.mutations;for(let a=0;a<r.length;a++)i=i.insert(r[a].key,s[a].version);return new Va(e,t,s,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn{constructor(e,t,s,i,r=B.min(),a=B.min(),o=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o}withSequenceNumber(e){return new Kn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Kn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(e){this.oe=e}}function L_(n){const e=w_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Qo(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(){this.Ze=new P_}addToCollectionParentIndex(e,t){return this.Ze.add(t),v.resolve()}getCollectionParents(e,t){return v.resolve(this.Ze.getEntries(t))}addFieldIndex(e,t){return v.resolve()}deleteFieldIndex(e,t){return v.resolve()}getDocumentsMatchingTarget(e,t){return v.resolve(null)}getIndexType(e,t){return v.resolve(0)}getFieldIndexes(e,t){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,t){return v.resolve(Rn.min())}getMinOffsetFromCollectionGroup(e,t){return v.resolve(Rn.min())}updateCollectionGroup(e,t,s){return v.resolve()}updateIndexEntries(e,t){return v.resolve()}}class P_{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t]||new Se(fe.comparator),r=!i.has(s);return this.index[t]=i.add(s),r}has(e){const t=e.lastSegment(),s=e.popLast(),i=this.index[t];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Se(fe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Is(0)}static Sn(){return new Is(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(){this.changes=new Ds(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,He.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?v.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,s,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,t))).next(i=>(s!==null&&Hs(s.mutation,i,Ct.empty(),Ae.now()),i))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,J()).next(()=>s))}getLocalViewOfDocuments(e,t,s=J()){const i=Vn();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,s).next(r=>{let a=Bs();return r.forEach((o,c)=>{a=a.insert(o,c.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const s=Vn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,J()))}populateOverlays(e,t,s){const i=[];return s.forEach(r=>{t.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((a,o)=>{t.set(a,o)})})}computeViews(e,t,s,i){let r=an();const a=zs(),o=zs();return t.forEach((c,l)=>{const u=s.get(l.key);i.has(l.key)&&(u===void 0||u.mutation instanceof ss)?r=r.insert(l.key,l):u!==void 0?(a.set(l.key,u.mutation.getFieldMask()),Hs(u.mutation,l,u.mutation.getFieldMask(),Ae.now())):a.set(l.key,Ct.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>a.set(l,u)),t.forEach((l,u)=>{var h;return o.set(l,new F_(u,(h=a.get(l))!==null&&h!==void 0?h:null))}),o))}recalculateAndSaveOverlays(e,t){const s=zs();let i=new Ce((a,o)=>a-o),r=J();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const o of a)o.keys().forEach(c=>{const l=t.get(c);if(l===null)return;let u=s.get(c)||Ct.empty();u=o.applyToLocalView(l,u),s.set(c,u);const h=(i.get(o.batchId)||J()).add(c);i=i.insert(o.batchId,h)})}).next(()=>{const a=[],o=i.getReverseIterator();for(;o.hasNext();){const c=o.getNext(),l=c.key,u=c.value,h=Xh();u.forEach(d=>{if(!r.has(d)){const f=Hh(t.get(d),s.get(d));f!==null&&h.set(d,f),r=r.add(d)}}),a.push(this.documentOverlayCache.saveOverlays(e,l,h))}return v.waitFor(a)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(i){return O.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Xy(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,i).next(r=>{const a=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,i-r.size):v.resolve(Vn());let o=-1,c=r;return a.next(l=>v.forEach(l,(u,h)=>(o<h.largestBatchId&&(o=h.largestBatchId),r.get(u)?v.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,J())).next(u=>({batchId:o,changes:Wh(u)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(s=>{let i=Bs();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const i=t.collectionGroup;let r=Bs();return this.indexManager.getCollectionParents(e,i).next(a=>v.forEach(a,o=>{const c=function(l,u){return new qr(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(t,o.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,s).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,t,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,i))).next(r=>{i.forEach((o,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,He.newInvalidDocument(l)))});let a=Bs();return r.forEach((o,c)=>{const l=i.get(o);l!==void 0&&Hs(l.mutation,c,Ct.empty(),Ae.now()),Gr(t,c)&&(a=a.insert(o,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,t){return v.resolve(this.es.get(t))}saveBundleMetadata(e,t){var s;return this.es.set(t.id,{id:(s=t).id,version:s.version,createTime:Ut(s.createTime)}),v.resolve()}getNamedQuery(e,t){return v.resolve(this.ns.get(t))}saveNamedQuery(e,t){return this.ns.set(t.name,function(s){return{name:s.name,query:L_(s.bundledQuery),readTime:Ut(s.readTime)}}(t)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(){this.overlays=new Ce(O.comparator),this.ss=new Map}getOverlay(e,t){return v.resolve(this.overlays.get(t))}getOverlays(e,t){const s=Vn();return v.forEach(t,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((i,r)=>{this.ce(e,t,r)}),v.resolve()}removeOverlaysForBatchId(e,t,s){const i=this.ss.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ss.delete(s)),v.resolve()}getOverlaysForCollection(e,t,s){const i=Vn(),r=t.length+1,a=new O(t.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const c=o.getNext().value,l=c.getKey();if(!t.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>s&&i.set(c.getKey(),c)}return v.resolve(i)}getOverlaysForCollectionGroup(e,t,s,i){let r=new Ce((l,u)=>l-u);const a=this.overlays.getIterator();for(;a.hasNext();){const l=a.getNext().value;if(l.getKey().getCollectionGroup()===t&&l.largestBatchId>s){let u=r.get(l.largestBatchId);u===null&&(u=Vn(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const o=Vn(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>o.set(l,u)),!(o.size()>=i)););return v.resolve(o)}ce(e,t,s){const i=this.overlays.get(s.key);if(i!==null){const a=this.ss.get(i.largestBatchId).delete(s.key);this.ss.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(s.key,new O_(t,s));let r=this.ss.get(t);r===void 0&&(r=J(),this.ss.set(t,r)),this.ss.set(t,r.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(){this.rs=new Se(ke.os),this.us=new Se(ke.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,t){const s=new ke(e,t);this.rs=this.rs.add(s),this.us=this.us.add(s)}hs(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.ls(new ke(e,t))}fs(e,t){e.forEach(s=>this.removeReference(s,t))}ds(e){const t=new O(new fe([])),s=new ke(t,e),i=new ke(t,e+1),r=[];return this.us.forEachInRange([s,i],a=>{this.ls(a),r.push(a.key)}),r}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const t=new O(new fe([])),s=new ke(t,e),i=new ke(t,e+1);let r=J();return this.us.forEachInRange([s,i],a=>{r=r.add(a.key)}),r}containsKey(e){const t=new ke(e,0),s=this.rs.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class ke{constructor(e,t){this.key=e,this.gs=t}static os(e,t){return O.comparator(e.key,t.key)||ne(e.gs,t.gs)}static cs(e,t){return ne(e.gs,t.gs)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ys=1,this.ps=new Se(ke.os)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,i){const r=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new D_(r,t,s,i);this.mutationQueue.push(a);for(const o of i)this.ps=this.ps.add(new ke(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return v.resolve(a)}lookupMutationBatch(e,t){return v.resolve(this.Is(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,i=this.Ts(s),r=i<0?0:i;return v.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new ke(t,0),i=new ke(t,Number.POSITIVE_INFINITY),r=[];return this.ps.forEachInRange([s,i],a=>{const o=this.Is(a.gs);r.push(o)}),v.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new Se(ne);return t.forEach(i=>{const r=new ke(i,0),a=new ke(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([r,a],o=>{s=s.add(o.gs)})}),v.resolve(this.Es(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,i=s.length+1;let r=s;O.isDocumentKey(r)||(r=r.child(""));const a=new ke(new O(r),0);let o=new Se(ne);return this.ps.forEachWhile(c=>{const l=c.key.path;return!!s.isPrefixOf(l)&&(l.length===i&&(o=o.add(c.gs)),!0)},a),v.resolve(this.Es(o))}Es(e){const t=[];return e.forEach(s=>{const i=this.Is(s);i!==null&&t.push(i)}),t}removeMutationBatch(e,t){le(this.As(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this.ps;return v.forEach(t.mutations,i=>{const r=new ke(i.key,t.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=s})}bn(e){}containsKey(e,t){const s=new ke(t,0),i=this.ps.firstAfterOrEqual(s);return v.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}As(e,t){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const t=this.Ts(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.Rs=e,this.docs=new Ce(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,i=this.docs.get(s),r=i?i.size:0,a=this.Rs(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:a}),this.size+=a-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return v.resolve(s?s.document.mutableCopy():He.newInvalidDocument(t))}getEntries(e,t){let s=an();return t.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():He.newInvalidDocument(i))}),v.resolve(s)}getDocumentsMatchingQuery(e,t,s,i){let r=an();const a=t.path,o=new O(a.child("")),c=this.docs.getIteratorFrom(o);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!a.isPrefixOf(l.path))break;l.path.length>a.length+1||Cy(Sy(u),s)<=0||(i.has(u.key)||Gr(t,u))&&(r=r.insert(u.key,u.mutableCopy()))}return v.resolve(r)}getAllFromCollectionGroup(e,t,s,i){P()}bs(e,t){return v.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new z_(this)}getSize(e){return v.resolve(this.size)}}class z_ extends U_{constructor(e){super(),this.Xn=e}applyChanges(e){const t=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?t.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(s)}),v.waitFor(t)}getFromCache(e,t){return this.Xn.getEntry(e,t)}getAllFromCache(e,t){return this.Xn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(e){this.persistence=e,this.vs=new Ds(t=>Fa(t),Ba),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new ja,this.targetCount=0,this.Ss=Is.Vn()}forEachTarget(e,t){return this.vs.forEach((s,i)=>t(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Ps&&(this.Ps=t),v.resolve()}xn(e){this.vs.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ss=new Is(t),this.highestTargetId=t),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,t){return this.xn(t),this.targetCount+=1,v.resolve()}updateTargetData(e,t){return this.xn(t),v.resolve()}removeTargetData(e,t){return this.vs.delete(t.target),this.Vs.ds(t.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,t,s){let i=0;const r=[];return this.vs.forEach((a,o)=>{o.sequenceNumber<=t&&s.get(o.targetId)===null&&(this.vs.delete(a),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)}),v.waitFor(r).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,t){const s=this.vs.get(t)||null;return v.resolve(s)}addMatchingKeys(e,t,s){return this.Vs.hs(t,s),v.resolve()}removeMatchingKeys(e,t,s){this.Vs.fs(t,s);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach(a=>{r.push(i.markPotentiallyOrphaned(e,a))}),v.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.Vs.ds(t),v.resolve()}getMatchingKeysForTargetId(e,t){const s=this.Vs.ws(t);return v.resolve(s)}containsKey(e,t){return v.resolve(this.Vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e,t){this.Ds={},this.overlays={},this.Cs=new Pa(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new q_(this),this.indexManager=new M_,this.remoteDocumentCache=function(s){return new H_(s)}(s=>this.referenceDelegate.ks(s)),this.Tt=new N_(t),this.Os=new x_(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new V_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ds[e.toKey()];return s||(s=new j_(t,this.referenceDelegate),this.Ds[e.toKey()]=s),s}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,t,s){R("MemoryPersistence","Starting transaction:",e);const i=new G_(this.Cs.next());return this.referenceDelegate.Ms(),s(i).next(r=>this.referenceDelegate.Fs(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}$s(e,t){return v.or(Object.values(this.Ds).map(s=>()=>s.containsKey(e,t)))}}class G_ extends ky{constructor(e){super(),this.currentSequenceNumber=e}}class Ha{constructor(e){this.persistence=e,this.Bs=new ja,this.Ls=null}static qs(e){return new Ha(e)}get Us(){if(this.Ls)return this.Ls;throw P()}addReference(e,t,s){return this.Bs.addReference(s,t),this.Us.delete(s.toString()),v.resolve()}removeReference(e,t,s){return this.Bs.removeReference(s,t),this.Us.add(s.toString()),v.resolve()}markPotentiallyOrphaned(e,t){return this.Us.add(t.toString()),v.resolve()}removeTarget(e,t){this.Bs.ds(t.targetId).forEach(i=>this.Us.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(i=>{i.forEach(r=>this.Us.add(r.toString()))}).next(()=>s.removeTargetData(e,t))}Ms(){this.Ls=new Set}Fs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Us,s=>{const i=O.fromPath(s);return this.Ks(e,i).next(r=>{r||t.removeEntry(i,B.min())})}).next(()=>(this.Ls=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ks(e,t).next(s=>{s?this.Us.delete(t.toString()):this.Us.add(t.toString())})}ks(e){return 0}Ks(e,t){return v.or([()=>v.resolve(this.Bs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.$s(e,t)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,s,i){this.targetId=e,this.fromCache=t,this.Ci=s,this.xi=i}static Ni(e,t){let s=J(),i=J();for(const r of t.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new za(e,t.fromCache,s,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(){this.ki=!1}initialize(e,t){this.Oi=e,this.indexManager=t,this.ki=!0}getDocumentsMatchingQuery(e,t,s,i){return this.Mi(e,t).next(r=>r||this.Fi(e,t,i,s)).next(r=>r||this.$i(e,t))}Mi(e,t){if(il(t))return v.resolve(null);let s=on(t);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(t.limit!==null&&i===1&&(t=Qo(t,null,"F"),s=on(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const a=J(...r);return this.Oi.getDocuments(e,a).next(o=>this.indexManager.getMinOffset(e,s).next(c=>{const l=this.Bi(t,o);return this.Li(t,l,a,c.readTime)?this.Mi(e,Qo(t,null,"F")):this.qi(e,l,t,c)}))})))}Fi(e,t,s,i){return il(t)||i.isEqual(B.min())?this.$i(e,t):this.Oi.getDocuments(e,s).next(r=>{const a=this.Bi(t,r);return this.Li(t,a,s,i)?this.$i(e,t):(Xc()<=te.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Yo(t)),this.qi(e,a,t,Ay(i,-1)))})}Bi(e,t){let s=new Se(Ph(e));return t.forEach((i,r)=>{Gr(e,r)&&(s=s.add(r))}),s}Li(e,t,s,i){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const r=e.limitType==="F"?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}$i(e,t){return Xc()<=te.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",Yo(t)),this.Oi.getDocumentsMatchingQuery(e,t,Rn.min())}qi(e,t,s,i){return this.Oi.getDocumentsMatchingQuery(e,s,i).next(r=>(t.forEach(a=>{r=r.insert(a.key,a)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(e,t,s,i){this.persistence=e,this.Ui=t,this.Tt=i,this.Ki=new Ce(ne),this.Gi=new Ds(r=>Fa(r),Ba),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(s)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new B_(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ki))}}function Q_(n,e,t,s){return new X_(n,e,t,s)}async function id(n,e){const t=V(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let i;return t.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,t.zi(e),t.mutationQueue.getAllMutationBatches(s))).next(r=>{const a=[],o=[];let c=J();for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return t.localDocuments.getDocuments(s,c).next(l=>({Wi:l,removedBatchIds:a,addedBatchIds:o}))})})}function Y_(n,e){const t=V(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=t.ji.newChangeBuffer({trackRemovals:!0});return function(a,o,c,l){const u=c.batch,h=u.keys();let d=v.resolve();return h.forEach(f=>{d=d.next(()=>l.getEntry(o,f)).next(g=>{const m=c.docVersions.get(f);le(m!==null),g.version.compareTo(m)<0&&(u.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),l.addEntry(g)))})}),d.next(()=>a.mutationQueue.removeMutationBatch(o,u))}(t,s,e,r).next(()=>r.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let o=J();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(o=o.add(a.batch.mutations[c].key));return o}(e))).next(()=>t.localDocuments.getDocuments(s,i))})}function rd(n){const e=V(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ns.getLastRemoteSnapshotVersion(t))}function J_(n,e){const t=V(n),s=e.snapshotVersion;let i=t.Ki;return t.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const a=t.ji.newChangeBuffer({trackRemovals:!0});i=t.Ki;const o=[];e.targetChanges.forEach((u,h)=>{const d=i.get(h);if(!d)return;o.push(t.Ns.removeMatchingKeys(r,u.removedDocuments,h).next(()=>t.Ns.addMatchingKeys(r,u.addedDocuments,h)));let f=d.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(h)?f=f.withResumeToken(Xe.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,s)),i=i.insert(h,f),function(g,m,p){return g.resumeToken.approximateByteSize()===0||m.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:p.addedDocuments.size+p.modifiedDocuments.size+p.removedDocuments.size>0}(d,f,u)&&o.push(t.Ns.updateTargetData(r,f))});let c=an(),l=J();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&o.push(t.persistence.referenceDelegate.updateLimboDocument(r,u))}),o.push(Z_(r,a,e.documentUpdates).next(u=>{c=u.Hi,l=u.Ji})),!s.isEqual(B.min())){const u=t.Ns.getLastRemoteSnapshotVersion(r).next(h=>t.Ns.setTargetsMetadata(r,r.currentSequenceNumber,s));o.push(u)}return v.waitFor(o).next(()=>a.apply(r)).next(()=>t.localDocuments.getLocalViewOfDocuments(r,c,l)).next(()=>c)}).then(r=>(t.Ki=i,r))}function Z_(n,e,t){let s=J(),i=J();return t.forEach(r=>s=s.add(r)),e.getEntries(n,s).next(r=>{let a=an();return t.forEach((o,c)=>{const l=r.get(o);c.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(o)),c.isNoDocument()&&c.version.isEqual(B.min())?(e.removeEntry(o,c.readTime),a=a.insert(o,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),a=a.insert(o,c)):R("LocalStore","Ignoring outdated watch update for ",o,". Current version:",l.version," Watch version:",c.version)}),{Hi:a,Ji:i}})}function $_(n,e){const t=V(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function ev(n,e){const t=V(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return t.Ns.getTargetData(s,e).next(r=>r?(i=r,v.resolve(i)):t.Ns.allocateTargetId(s).next(a=>(i=new Kn(e,a,0,s.currentSequenceNumber),t.Ns.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=t.Ki.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ki=t.Ki.insert(s.targetId,s),t.Gi.set(e,s.targetId)),s})}async function ea(n,e,t){const s=V(n),i=s.Ki.get(e),r=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",r,a=>s.persistence.referenceDelegate.removeTarget(a,i))}catch(a){if(!bi(a))throw a;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}s.Ki=s.Ki.remove(e),s.Gi.delete(i.target)}function fl(n,e,t){const s=V(n);let i=B.min(),r=J();return s.persistence.runTransaction("Execute query","readonly",a=>function(o,c,l){const u=V(o),h=u.Gi.get(l);return h!==void 0?v.resolve(u.Ki.get(h)):u.Ns.getTargetData(c,l)}(s,a,on(e)).next(o=>{if(o)return i=o.lastLimboFreeSnapshotVersion,s.Ns.getMatchingKeysForTargetId(a,o.targetId).next(c=>{r=c})}).next(()=>s.Ui.getDocumentsMatchingQuery(a,e,t?i:B.min(),t?r:J())).next(o=>(tv(s,Qy(e),o),{documents:o,Yi:r})))}function tv(n,e,t){let s=n.Qi.get(e)||B.min();t.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),n.Qi.set(e,s)}class ml{constructor(){this.activeTargetIds=Qh()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nv{constructor(){this.Ur=new ml,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,t,s){this.Kr[e]=t}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new ml,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iv={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.co=t+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,t,s,i,r){const a=this.fo(e,t);R("RestConnection","Sending: ",a,s);const o={};return this._o(o,i,r),this.wo(e,a,o,s).then(c=>(R("RestConnection","Received: ",c),c),c=>{throw Qc("RestConnection",`${e} failed with error: `,c,"url: ",a,"request:",s),c})}mo(e,t,s,i,r,a){return this.lo(e,t,s,i,r)}_o(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+Rs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}fo(e,t){const s=iv[e];return`${this.co}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,t,s,i){return new Promise((r,a)=>{const o=new py;o.setWithCredentials(!0),o.listenOnce(dy.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case vo.NO_ERROR:const l=o.getResponseJson();R("Connection","XHR received:",JSON.stringify(l)),r(l);break;case vo.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),a(new M(_.DEADLINE_EXCEEDED,"Request time out"));break;case vo.HTTP_ERROR:const u=o.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',u,"response text:",o.getResponseText()),u>0){let h=o.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const f=function(g){const m=g.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(m)>=0?m:_.UNKNOWN}(d.status);a(new M(f,d.message))}else a(new M(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new M(_.UNAVAILABLE,"Connection failed."));break;default:P()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(i);o.send(t,"POST",c,s,15)})}yo(e,t,s){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],r=uy(),a=hy(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new my({})),this._o(o.initMessageHeaders,t,s),o.encodeInitMessageHeaders=!0;const c=i.join("");R("Connection","Creating WebChannel: "+c,o);const l=r.createWebChannel(c,o);let u=!1,h=!1;const d=new rv({Yr:g=>{h?R("Connection","Not sending because WebChannel is closed:",g):(u||(R("Connection","Opening WebChannel transport."),l.open(),u=!0),R("Connection","WebChannel sending:",g),l.send(g))},Zr:()=>l.close()}),f=(g,m,p)=>{g.listen(m,A=>{try{p(A)}catch(S){setTimeout(()=>{throw S},0)}})};return f(l,Bi.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),f(l,Bi.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.oo())}),f(l,Bi.EventType.ERROR,g=>{h||(h=!0,Qc("Connection","WebChannel transport errored:",g),d.oo(new M(_.UNAVAILABLE,"The operation could not be completed")))}),f(l,Bi.EventType.MESSAGE,g=>{var m;if(!h){const p=g.data[0];le(!!p);const A=p,S=A.error||((m=A[0])===null||m===void 0?void 0:m.error);if(S){R("Connection","WebChannel received error:",S);const E=S.status;let b=function(K){const ee=Ie[K];if(ee!==void 0)return Kh(ee)}(E),w=S.message;b===void 0&&(b=_.INTERNAL,w="Unknown error status: "+E+" with message "+S.message),h=!0,d.oo(new M(b,w)),l.close()}else R("Connection","WebChannel received:",p),d.uo(p)}}),f(a,fy.STAT_EVENT,g=>{g.stat===Gc.PROXY?R("Connection","Detected buffering proxy"):g.stat===Gc.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Eo(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(n){return new g_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t,s=1e3,i=1.5,r=6e4){this.Ys=e,this.timerId=t,this.po=s,this.Io=i,this.To=r,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const t=Math.floor(this.Eo+this.Po()),s=Math.max(0,Date.now()-this.Ro),i=Math.max(0,t-s);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,s,i,r,a,o,c){this.Ys=e,this.So=s,this.Do=i,this.connection=r,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=c,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new od(e,t)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,t){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(rn(t.toString()),rn("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):t&&t.code===_.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(t)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),t=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Co===t&&this.jo(s,i)},s=>{e(()=>{const i=new M(_.UNKNOWN,"Fetching auth token failed: "+s.message);return this.zo(i)})})}jo(e,t){const s=this.Qo(this.Co);this.stream=this.Wo(e,t),this.stream.Xr(()=>{s(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{s(()=>this.zo(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return t=>{this.Ys.enqueueAndForget(()=>this.Co===e?t():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class av extends ad{constructor(e,t,s,i,r,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,i,a),this.Tt=r}Wo(e,t){return this.connection.yo("Listen",e,t)}onMessage(e){this.ko.reset();const t=v_(this.Tt,e),s=function(i){if(!("targetChange"in i))return B.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?B.min():r.readTime?Ut(r.readTime):B.min()}(e);return this.listener.Ho(t,s)}Jo(e){const t={};t.database=$o(this.Tt),t.addTarget=function(i,r){let a;const o=r.target;return a=Xo(o)?{documents:b_(i,o)}:{query:T_(i,o)},a.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?a.resumeToken=Zh(i,r.resumeToken):r.snapshotVersion.compareTo(B.min())>0&&(a.readTime=pr(i,r.snapshotVersion.toTimestamp())),a}(this.Tt,e);const s=A_(this.Tt,e);s&&(t.labels=s),this.qo(t)}Yo(e){const t={};t.database=$o(this.Tt),t.removeTarget=e,this.qo(t)}}class cv extends ad{constructor(e,t,s,i,r,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,i,a),this.Tt=r,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,t){return this.connection.yo("Write",e,t)}onMessage(e){if(le(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const t=E_(e.writeResults,e.commitTime),s=Ut(e.commitTime);return this.listener.eu(s,t)}return le(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=$o(this.Tt),this.qo(e)}tu(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>I_(this.Tt,s))};this.qo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv extends class{}{constructor(e,t,s,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,t,s){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.lo(e,t,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(_.UNKNOWN,i.toString())})}mo(e,t,s,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,a])=>this.connection.mo(e,t,s,r,a,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new M(_.UNKNOWN,r.toString())})}terminate(){this.iu=!0}}class uv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(rn(t),this.cu=!1):R("OnlineStateTracker",t)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,t,s,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=r,this.yu.Gr(a=>{s.enqueueAndForget(async()=>{is(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(o){const c=V(o);c.mu.add(4),await Ai(c),c.pu.set("Unknown"),c.mu.delete(4),await Jr(c)}(this))})}),this.pu=new uv(s,i)}}async function Jr(n){if(is(n))for(const e of n.gu)await e(!0)}async function Ai(n){for(const e of n.gu)await e(!1)}function cd(n,e){const t=V(n);t.wu.has(e.targetId)||(t.wu.set(e.targetId,e),Ga(t)?Ka(t):Os(t).Mo()&&qa(t,e))}function ld(n,e){const t=V(n),s=Os(t);t.wu.delete(e),s.Mo()&&ud(t,e),t.wu.size===0&&(s.Mo()?s.Bo():is(t)&&t.pu.set("Unknown"))}function qa(n,e){n.Iu.Ft(e.targetId),Os(n).Jo(e)}function ud(n,e){n.Iu.Ft(e),Os(n).Yo(e)}function Ka(n){n.Iu=new d_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>n.wu.get(e)||null}),Os(n).start(),n.pu.au()}function Ga(n){return is(n)&&!Os(n).Oo()&&n.wu.size>0}function is(n){return V(n).mu.size===0}function hd(n){n.Iu=void 0}async function dv(n){n.wu.forEach((e,t)=>{qa(n,e)})}async function fv(n,e){hd(n),Ga(n)?(n.pu.fu(e),Ka(n)):n.pu.set("Unknown")}async function mv(n,e,t){if(n.pu.set("Online"),e instanceof Jh&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const a of i.targetIds)s.wu.has(a)&&(await s.remoteSyncer.rejectListen(a,r),s.wu.delete(a),s.Iu.removeTarget(a))}(n,e)}catch(s){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await gr(n,s)}else if(e instanceof Xi?n.Iu.Qt(e):e instanceof Yh?n.Iu.Zt(e):n.Iu.Wt(e),!t.isEqual(B.min()))try{const s=await rd(n.localStore);t.compareTo(s)>=0&&await function(i,r){const a=i.Iu.ee(r);return a.targetChanges.forEach((o,c)=>{if(o.resumeToken.approximateByteSize()>0){const l=i.wu.get(c);l&&i.wu.set(c,l.withResumeToken(o.resumeToken,r))}}),a.targetMismatches.forEach(o=>{const c=i.wu.get(o);if(!c)return;i.wu.set(o,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),ud(i,o);const l=new Kn(c.target,o,1,c.sequenceNumber);qa(i,l)}),i.remoteSyncer.applyRemoteEvent(a)}(n,t)}catch(s){R("RemoteStore","Failed to raise snapshot:",s),await gr(n,s)}}async function gr(n,e,t){if(!bi(e))throw e;n.mu.add(1),await Ai(n),n.pu.set("Offline"),t||(t=()=>rd(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await t(),n.mu.delete(1),await Jr(n)})}function dd(n,e){return e().catch(t=>gr(n,t,e))}async function Zr(n){const e=V(n),t=Dn(e);let s=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;pv(e);)try{const i=await $_(e.localStore,s);if(i===null){e._u.length===0&&t.Bo();break}s=i.batchId,gv(e,i)}catch(i){await gr(e,i)}fd(e)&&md(e)}function pv(n){return is(n)&&n._u.length<10}function gv(n,e){n._u.push(e);const t=Dn(n);t.Mo()&&t.Xo&&t.tu(e.mutations)}function fd(n){return is(n)&&!Dn(n).Oo()&&n._u.length>0}function md(n){Dn(n).start()}async function yv(n){Dn(n).su()}async function _v(n){const e=Dn(n);for(const t of n._u)e.tu(t.mutations)}async function vv(n,e,t){const s=n._u.shift(),i=Va.from(s,e,t);await dd(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Zr(n)}async function Iv(n,e){e&&Dn(n).Xo&&await async function(t,s){if(i=s.code,a_(i)&&i!==_.ABORTED){const r=t._u.shift();Dn(t).$o(),await dd(t,()=>t.remoteSyncer.rejectFailedWrite(r.batchId,s)),await Zr(t)}var i}(n,e),fd(n)&&md(n)}async function gl(n,e){const t=V(n);t.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const s=is(t);t.mu.add(3),await Ai(t),s&&t.pu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.mu.delete(3),await Jr(t)}async function Ev(n,e){const t=V(n);e?(t.mu.delete(2),await Jr(t)):e||(t.mu.add(2),await Ai(t),t.pu.set("Unknown"))}function Os(n){return n.Tu||(n.Tu=function(e,t,s){const i=V(e);return i.ru(),new av(t,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(n.datastore,n.asyncQueue,{Xr:dv.bind(null,n),no:fv.bind(null,n),Ho:mv.bind(null,n)}),n.gu.push(async e=>{e?(n.Tu.$o(),Ga(n)?Ka(n):n.pu.set("Unknown")):(await n.Tu.stop(),hd(n))})),n.Tu}function Dn(n){return n.Eu||(n.Eu=function(e,t,s){const i=V(e);return i.ru(),new cv(t,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,s)}(n.datastore,n.asyncQueue,{Xr:yv.bind(null,n),no:Iv.bind(null,n),nu:_v.bind(null,n),eu:vv.bind(null,n)}),n.gu.push(async e=>{e?(n.Eu.$o(),await Zr(n)):(await n.Eu.stop(),n._u.length>0&&(R("RemoteStore",`Stopping write stream with ${n._u.length} pending writes`),n._u=[]))})),n.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t,s,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new wn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}static createAndSchedule(e,t,s,i,r){const a=Date.now()+s,o=new Wa(e,t,a,i,r);return o.start(s),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xa(n,e){if(rn("AsyncQueue",`${e}: ${n}`),bi(n))return new M(_.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(t,s)=>e(t,s)||O.comparator(t.key,s.key):(t,s)=>O.comparator(t.key,s.key),this.keyedMap=Bs(),this.sortedSet=new Ce(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new ds;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(){this.Au=new Ce(O.comparator)}track(e){const t=e.doc.key,s=this.Au.get(t);s?e.type!==0&&s.type===3?this.Au=this.Au.insert(t,e):e.type===3&&s.type!==1?this.Au=this.Au.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Au=this.Au.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Au=this.Au.remove(t):e.type===1&&s.type===2?this.Au=this.Au.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Au=this.Au.insert(t,{type:2,doc:e.doc}):P():this.Au=this.Au.insert(t,e)}Ru(){const e=[];return this.Au.inorderTraversal((t,s)=>{e.push(s)}),e}}class Es{constructor(e,t,s,i,r,a,o,c,l){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,t,s,i,r){const a=[];return t.forEach(o=>{a.push({type:0,doc:o})}),new Es(e,t,ds.emptySet(t),a,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Kr(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==s[i].type||!t[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bv{constructor(){this.bu=void 0,this.listeners=[]}}class Tv{constructor(){this.queries=new Ds(e=>Mh(e),Kr),this.onlineState="Unknown",this.vu=new Set}}async function wv(n,e){const t=V(n),s=e.query;let i=!1,r=t.queries.get(s);if(r||(i=!0,r=new bv),i)try{r.bu=await t.onListen(s)}catch(a){const o=Xa(a,`Initialization of query '${Yo(e.query)}' failed`);return void e.onError(o)}t.queries.set(s,r),r.listeners.push(e),e.Pu(t.onlineState),r.bu&&e.Vu(r.bu)&&Qa(t)}async function Av(n,e){const t=V(n),s=e.query;let i=!1;const r=t.queries.get(s);if(r){const a=r.listeners.indexOf(e);a>=0&&(r.listeners.splice(a,1),i=r.listeners.length===0)}if(i)return t.queries.delete(s),t.onUnlisten(s)}function Sv(n,e){const t=V(n);let s=!1;for(const i of e){const r=i.query,a=t.queries.get(r);if(a){for(const o of a.listeners)o.Vu(i)&&(s=!0);a.bu=i}}s&&Qa(t)}function Cv(n,e,t){const s=V(n),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(t);s.queries.delete(e)}function Qa(n){n.vu.forEach(e=>{e.next()})}class Rv{constructor(e,t,s){this.query=e,this.Su=t,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=s||{}}Vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Es(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Du?this.xu(e)&&(this.Su.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.ku(e),t=!0),this.Cu=e,t}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let t=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),t=!0),t}Nu(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.Ou||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const t=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ku(e){e=Es.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pd{constructor(e){this.key=e}}class gd{constructor(e){this.key=e}}class kv{constructor(e,t){this.query=e,this.Ku=t,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=J(),this.mutatedKeys=J(),this.ju=Ph(e),this.zu=new ds(this.ju)}get Wu(){return this.Ku}Hu(e,t){const s=t?t.Ju:new yl,i=t?t.zu:this.zu;let r=t?t.mutatedKeys:this.mutatedKeys,a=i,o=!1;const c=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((u,h)=>{const d=i.get(u),f=Gr(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),m=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let p=!1;d&&f?d.data.isEqual(f.data)?g!==m&&(s.track({type:3,doc:f}),p=!0):this.Yu(d,f)||(s.track({type:2,doc:f}),p=!0,(c&&this.ju(f,c)>0||l&&this.ju(f,l)<0)&&(o=!0)):!d&&f?(s.track({type:0,doc:f}),p=!0):d&&!f&&(s.track({type:1,doc:d}),p=!0,(c||l)&&(o=!0)),p&&(f?(a=a.add(f),r=m?r.add(u):r.delete(u)):(a=a.delete(u),r=r.delete(u)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const u=this.query.limitType==="F"?a.last():a.first();a=a.delete(u.key),r=r.delete(u.key),s.track({type:1,doc:u})}return{zu:a,Ju:s,Li:o,mutatedKeys:r}}Yu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const r=e.Ju.Ru();r.sort((l,u)=>function(h,d){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return P()}};return f(h)-f(d)}(l.type,u.type)||this.ju(l.doc,u.doc)),this.Zu(s);const a=t?this.Xu():[],o=this.Qu.size===0&&this.current?1:0,c=o!==this.Gu;return this.Gu=o,r.length!==0||c?{snapshot:new Es(this.query,e.zu,i,r,e.mutatedKeys,o===0,c,!1,!!s&&s.resumeToken.approximateByteSize()>0),tc:a}:{tc:a}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new yl,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(t=>this.Ku=this.Ku.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ku=this.Ku.delete(t)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=J(),this.zu.forEach(s=>{this.ec(s.key)&&(this.Qu=this.Qu.add(s.key))});const t=[];return e.forEach(s=>{this.Qu.has(s)||t.push(new gd(s))}),this.Qu.forEach(s=>{e.has(s)||t.push(new pd(s))}),t}nc(e){this.Ku=e.Yi,this.Qu=J();const t=this.Hu(e.documents);return this.applyChanges(t,!0)}sc(){return Es.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class Dv{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class Ov{constructor(e){this.key=e,this.ic=!1}}class Nv{constructor(e,t,s,i,r,a){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=a,this.rc={},this.oc=new Ds(o=>Mh(o),Kr),this.uc=new Map,this.cc=new Set,this.ac=new Ce(O.comparator),this.hc=new Map,this.lc=new ja,this.fc={},this.dc=new Map,this._c=Is.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function Lv(n,e){const t=zv(n);let s,i;const r=t.oc.get(e);if(r)s=r.targetId,t.sharedClientState.addLocalQueryTarget(s),i=r.view.sc();else{const a=await ev(t.localStore,on(e));t.isPrimaryClient&&cd(t.remoteStore,a);const o=t.sharedClientState.addLocalQueryTarget(a.targetId);s=a.targetId,i=await Mv(t,e,s,o==="current",a.resumeToken)}return i}async function Mv(n,e,t,s,i){n.mc=(h,d,f)=>async function(g,m,p,A){let S=m.view.Hu(p);S.Li&&(S=await fl(g.localStore,m.query,!1).then(({documents:w})=>m.view.Hu(w,S)));const E=A&&A.targetChanges.get(m.targetId),b=m.view.applyChanges(S,g.isPrimaryClient,E);return vl(g,m.targetId,b.tc),b.snapshot}(n,h,d,f);const r=await fl(n.localStore,e,!0),a=new kv(e,r.Yi),o=a.Hu(r.documents),c=wi.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",i),l=a.applyChanges(o,n.isPrimaryClient,c);vl(n,t,l.tc);const u=new Dv(e,t,a);return n.oc.set(e,u),n.uc.has(t)?n.uc.get(t).push(e):n.uc.set(t,[e]),l.snapshot}async function Pv(n,e){const t=V(n),s=t.oc.get(e),i=t.uc.get(s.targetId);if(i.length>1)return t.uc.set(s.targetId,i.filter(r=>!Kr(r,e))),void t.oc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await ea(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),ld(t.remoteStore,s.targetId),ta(t,s.targetId)}).catch(Ei)):(ta(t,s.targetId),await ea(t.localStore,s.targetId,!0))}async function Uv(n,e,t){const s=qv(n);try{const i=await function(r,a){const o=V(r),c=Ae.now(),l=a.reduce((d,f)=>d.add(f.key),J());let u,h;return o.persistence.runTransaction("Locally write mutations","readwrite",d=>{let f=an(),g=J();return o.ji.getEntries(d,l).next(m=>{f=m,f.forEach((p,A)=>{A.isValidDocument()||(g=g.add(p))})}).next(()=>o.localDocuments.getOverlayedDocuments(d,f)).next(m=>{u=m;const p=[];for(const A of a){const S=i_(A,u.get(A.key).overlayedDocument);S!=null&&p.push(new ss(A.key,S,Nh(S.value.mapValue),nn.exists(!0)))}return o.mutationQueue.addMutationBatch(d,c,p,a)}).next(m=>{h=m;const p=m.applyToLocalDocumentSet(u,g);return o.documentOverlayCache.saveOverlays(d,m.batchId,p)})}).then(()=>({batchId:h.batchId,changes:Wh(u)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,a,o){let c=r.fc[r.currentUser.toKey()];c||(c=new Ce(ne)),c=c.insert(a,o),r.fc[r.currentUser.toKey()]=c}(s,i.batchId,t),await Si(s,i.changes),await Zr(s.remoteStore)}catch(i){const r=Xa(i,"Failed to persist write");t.reject(r)}}async function yd(n,e){const t=V(n);try{const s=await J_(t.localStore,e);e.targetChanges.forEach((i,r)=>{const a=t.hc.get(r);a&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?a.ic=!0:i.modifiedDocuments.size>0?le(a.ic):i.removedDocuments.size>0&&(le(a.ic),a.ic=!1))}),await Si(t,s,e)}catch(s){await Ei(s)}}function _l(n,e,t){const s=V(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const i=[];s.oc.forEach((r,a)=>{const o=a.view.Pu(e);o.snapshot&&i.push(o.snapshot)}),function(r,a){const o=V(r);o.onlineState=a;let c=!1;o.queries.forEach((l,u)=>{for(const h of u.listeners)h.Pu(a)&&(c=!0)}),c&&Qa(o)}(s.eventManager,e),i.length&&s.rc.Ho(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function Fv(n,e,t){const s=V(n);s.sharedClientState.updateQueryState(e,"rejected",t);const i=s.hc.get(e),r=i&&i.key;if(r){let a=new Ce(O.comparator);a=a.insert(r,He.newNoDocument(r,B.min()));const o=J().add(r),c=new Qr(B.min(),new Map,new Se(ne),a,o);await yd(s,c),s.ac=s.ac.remove(r),s.hc.delete(e),Ya(s)}else await ea(s.localStore,e,!1).then(()=>ta(s,e,t)).catch(Ei)}async function Bv(n,e){const t=V(n),s=e.batch.batchId;try{const i=await Y_(t.localStore,e);vd(t,s,null),_d(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Si(t,i)}catch(i){await Ei(i)}}async function xv(n,e,t){const s=V(n);try{const i=await function(r,a){const o=V(r);return o.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return o.mutationQueue.lookupMutationBatch(c,a).next(u=>(le(u!==null),l=u.keys(),o.mutationQueue.removeMutationBatch(c,u))).next(()=>o.mutationQueue.performConsistencyCheck(c)).next(()=>o.documentOverlayCache.removeOverlaysForBatchId(c,l,a)).next(()=>o.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>o.localDocuments.getDocuments(c,l))})}(s.localStore,e);vd(s,e,t),_d(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Si(s,i)}catch(i){await Ei(i)}}function _d(n,e){(n.dc.get(e)||[]).forEach(t=>{t.resolve()}),n.dc.delete(e)}function vd(n,e,t){const s=V(n);let i=s.fc[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(t?r.reject(t):r.resolve(),i=i.remove(e)),s.fc[s.currentUser.toKey()]=i}}function ta(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.uc.get(e))n.oc.delete(s),t&&n.rc.gc(s,t);n.uc.delete(e),n.isPrimaryClient&&n.lc.ds(e).forEach(s=>{n.lc.containsKey(s)||Id(n,s)})}function Id(n,e){n.cc.delete(e.path.canonicalString());const t=n.ac.get(e);t!==null&&(ld(n.remoteStore,t),n.ac=n.ac.remove(e),n.hc.delete(t),Ya(n))}function vl(n,e,t){for(const s of t)s instanceof pd?(n.lc.addReference(s.key,e),Vv(n,s)):s instanceof gd?(R("SyncEngine","Document no longer in limbo: "+s.key),n.lc.removeReference(s.key,e),n.lc.containsKey(s.key)||Id(n,s.key)):P()}function Vv(n,e){const t=e.key,s=t.path.canonicalString();n.ac.get(t)||n.cc.has(s)||(R("SyncEngine","New document in limbo: "+t),n.cc.add(s),Ya(n))}function Ya(n){for(;n.cc.size>0&&n.ac.size<n.maxConcurrentLimboResolutions;){const e=n.cc.values().next().value;n.cc.delete(e);const t=new O(fe.fromString(e)),s=n._c.next();n.hc.set(s,new Ov(t)),n.ac=n.ac.insert(t,s),cd(n.remoteStore,new Kn(on(Lh(t.path)),s,2,Pa.at))}}async function Si(n,e,t){const s=V(n),i=[],r=[],a=[];s.oc.isEmpty()||(s.oc.forEach((o,c)=>{a.push(s.mc(c,e,t).then(l=>{if((l||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const u=za.Ni(c.targetId,l);r.push(u)}}))}),await Promise.all(a),s.rc.Ho(i),await async function(o,c){const l=V(o);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>v.forEach(c,h=>v.forEach(h.Ci,d=>l.persistence.referenceDelegate.addReference(u,h.targetId,d)).next(()=>v.forEach(h.xi,d=>l.persistence.referenceDelegate.removeReference(u,h.targetId,d)))))}catch(u){if(!bi(u))throw u;R("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const d=l.Ki.get(h),f=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(f);l.Ki=l.Ki.insert(h,g)}}}(s.localStore,r))}async function jv(n,e){const t=V(n);if(!t.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const s=await id(t.localStore,e);t.currentUser=e,function(i,r){i.dc.forEach(a=>{a.forEach(o=>{o.reject(new M(_.CANCELLED,r))})}),i.dc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Si(t,s.Wi)}}function Hv(n,e){const t=V(n),s=t.hc.get(e);if(s&&s.ic)return J().add(s.key);{let i=J();const r=t.uc.get(e);if(!r)return i;for(const a of r){const o=t.oc.get(a);i=i.unionWith(o.view.Wu)}return i}}function zv(n){const e=V(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=yd.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Hv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Fv.bind(null,e),e.rc.Ho=Sv.bind(null,e.eventManager),e.rc.gc=Cv.bind(null,e.eventManager),e}function qv(n){const e=V(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Bv.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=xv.bind(null,e),e}class Kv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Yr(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,t){return null}Rc(e,t){return null}Ec(e){return Q_(this.persistence,new W_,e.initialUser,this.Tt)}Tc(e){return new K_(Ha.qs,this.Tt)}Ic(e){return new nv}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Gv{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>_l(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=jv.bind(null,this.syncEngine),await Ev(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Tv}createDatastore(e){const t=Yr(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new ov(i));var i;return function(r,a,o,c){return new lv(r,a,o,c)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,i=e.asyncQueue,r=o=>_l(this.syncEngine,o,0),a=pl.C()?new pl:new sv,new hv(t,s,i,r,a);var t,s,i,r,a}createSyncEngine(e,t){return function(s,i,r,a,o,c,l){const u=new Nv(s,i,r,a,o,c);return l&&(u.wc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=V(e);R("RemoteStore","RemoteStore shutting down."),t.mu.add(5),await Ai(t),t.yu.shutdown(),t.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):rn("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xv{constructor(e,t,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=i,this.user=at.UNAUTHENTICATED,this.clientId=bh.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{R("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(R("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new wn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=Xa(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Qv(n,e){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async i=>{s.isEqual(i)||(await id(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Yv(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Jv(n);R("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(i=>gl(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,r)=>gl(e.remoteStore,r)),n.onlineComponents=e}async function Jv(n){return n.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await Qv(n,new Kv)),n.offlineComponents}async function Ed(n){return n.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await Yv(n,new Gv)),n.onlineComponents}function Zv(n){return Ed(n).then(e=>e.syncEngine)}async function $v(n){const e=await Ed(n),t=e.eventManager;return t.onListen=Lv.bind(null,e.syncEngine),t.onUnlisten=Pv.bind(null,e.syncEngine),t}function eI(n,e,t={}){const s=new wn;return n.asyncQueue.enqueueAndForget(async()=>function(i,r,a,o,c){const l=new Wv({next:h=>{r.enqueueAndForget(()=>Av(i,u)),h.fromCache&&o.source==="server"?c.reject(new M(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),u=new Rv(a,l,{includeMetadataChanges:!0,Ou:!0});return wv(i,u)}(await $v(n),n.asyncQueue,e,t,s)),s.promise}const Il=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bd(n,e,t){if(!t)throw new M(_.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function tI(n,e,t,s){if(e===!0&&s===!0)throw new M(_.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function El(n){if(!O.isDocumentKey(n))throw new M(_.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bl(n){if(O.isDocumentKey(n))throw new M(_.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Ja(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":P()}function yr(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new M(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Ja(n);throw new M(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new M(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,tI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(e,t,s,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tl(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new yy;switch(t.type){case"gapi":const s=t.client;return new Iy(s,t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new M(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Il.get(e);t&&(R("ComponentProvider","Removing Datastore"),Il.delete(e),t.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new An(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new bt(this.firestore,e,this._key)}}class $r{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class An extends $r{constructor(e,t,s){super(e,t,Lh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new bt(this.firestore,null,new O(e))}withConverter(e){return new An(this.firestore,e,this._path)}}function nI(n,e,...t){if(n=et(n),bd("collection","path",e),n instanceof Za){const s=fe.fromString(e,...t);return bl(s),new An(n,null,s)}{if(!(n instanceof bt||n instanceof An))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(fe.fromString(e,...t));return bl(s),new An(n.firestore,null,s)}}function Td(n,e,...t){if(n=et(n),arguments.length===1&&(e=bh.R()),bd("doc","path",e),n instanceof Za){const s=fe.fromString(e,...t);return El(s),new bt(n,null,new O(s))}{if(!(n instanceof bt||n instanceof An))throw new M(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(fe.fromString(e,...t));return El(s),new bt(n.firestore,n instanceof An?n.converter:null,new O(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new od(this,"async_queue_retry"),this.Hc=()=>{const t=Eo();t&&R("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ko.Vo()};const e=Eo();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const t=Eo();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const t=new wn;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!bi(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const t=this.qc.then(()=>(this.jc=!0,e().catch(s=>{this.Qc=s,this.jc=!1;const i=function(r){let a=r.message||"";return r.stack&&(a=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),a}(s);throw rn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.jc=!1,s))));return this.qc=t,t}enqueueAfterDelay(e,t,s){this.Jc(),this.Wc.indexOf(e)>-1&&(t=0);const i=Wa.createAndSchedule(this,e,t,s,r=>this.Xc(r));return this.Gc.push(i),i}Jc(){this.Qc&&P()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const t of this.Gc)if(t.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.Gc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const t=this.Gc.indexOf(e);this.Gc.splice(t,1)}}class $a extends Za{constructor(e,t,s,i){super(e,t,s,i),this.type="firestore",this._queue=new sI,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ad(this),this._firestoreClient.terminate()}}function iI(n,e,t){t||(t="(default)");const s=Cr(n,"firestore");if(s.isInitialized(t)){const i=s.getImmediate({identifier:t}),r=s.getOptions(t);if(Gs(r,e))return i;throw new M(_.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function wd(n){return n._firestoreClient||Ad(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Ad(n){var e;const t=n._freezeSettings(),s=function(i,r,a,o){return new Dy(i,r,a,o.host,o.ssl,o.experimentalForceLongPolling,o.experimentalAutoDetectLongPolling,o.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new Xv(n._authCredentials,n._appCheckCredentials,n._queue,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(Xe.fromBase64String(e))}catch(t){throw new M(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new bs(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new M(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new M(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new M(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI=/^__.*__$/;class oI{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,t,this.fieldTransforms):new Ti(e,this.data,t,this.fieldTransforms)}}function Sd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw P()}}class sc{constructor(e,t,s,i,r,a){this.settings=e,this.databaseId=t,this.Tt=s,this.ignoreUndefinedProperties=i,r===void 0&&this.ia(),this.fieldTransforms=r||[],this.fieldMask=a||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new sc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.oa({path:s,ca:!1});return i.aa(e),i}ha(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),i=this.oa({path:s,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return _r(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(Sd(this.ra)&&rI.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class aI{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.Tt=s||Yr(e)}wa(e,t,s,i=!1){return new sc({ra:e,methodName:t,_a:s,path:ze.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function cI(n){const e=n._freezeSettings(),t=Yr(n._databaseId);return new aI(n._databaseId,!!e.ignoreUndefinedProperties,t)}function lI(n,e,t,s,i,r={}){const a=n.wa(r.merge||r.mergeFields?2:0,e,t,i);Dd("Data must be an object, but it was:",a,s);const o=Rd(s,a);let c,l;if(r.merge)c=new Ct(a.fieldMask),l=a.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const d=uI(e,h,t);if(!a.contains(d))throw new M(_.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);dI(u,d)||u.push(d)}c=new Ct(u),l=a.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=a.fieldTransforms;return new oI(new Et(o),c,l)}class ic extends tc{_toFieldTransform(e){return new e_(e.path,new ii)}isEqual(e){return e instanceof ic}}function Cd(n,e){if(kd(n=et(n)))return Dd("Unsupported field value:",e,n),Rd(n,e);if(n instanceof tc)return function(t,s){if(!Sd(s.ra))throw s.fa(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.fa(`${t._methodName}() is not currently supported inside arrays`);const i=t._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(t,s){const i=[];let r=0;for(const a of t){let o=Cd(a,s.la(r));o==null&&(o={nullValue:"NULL_VALUE"}),i.push(o),r++}return{arrayValue:{values:i}}}(n,e)}return function(t,s){if((t=et(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Jy(s.Tt,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const i=Ae.fromDate(t);return{timestampValue:pr(s.Tt,i)}}if(t instanceof Ae){const i=new Ae(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:pr(s.Tt,i)}}if(t instanceof nc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof bs)return{bytesValue:Zh(s.Tt,t._byteString)};if(t instanceof bt){const i=s.databaseId,r=t.firestore._databaseId;if(!r.isEqual(i))throw s.fa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:xa(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.fa(`Unsupported field value: ${Ja(t)}`)}(n,e)}function Rd(n,e){const t={};return Th(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ks(n,(s,i)=>{const r=Cd(i,e.ua(s));r!=null&&(t[s]=r)}),{mapValue:{fields:t}}}function kd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ae||n instanceof nc||n instanceof bs||n instanceof bt||n instanceof tc)}function Dd(n,e,t){if(!kd(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Ja(t);throw s==="an object"?e.fa(n+" a custom object"):e.fa(n+" "+s)}}function uI(n,e,t){if((e=et(e))instanceof ec)return e._internalPath;if(typeof e=="string")return Od(n,e);throw _r("Field path arguments must be of type string or ",n,!1,void 0,t)}const hI=new RegExp("[~\\*/\\[\\]]");function Od(n,e,t){if(e.search(hI)>=0)throw _r(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ec(...e.split("."))._internalPath}catch{throw _r(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function _r(n,e,t,s,i){const r=s&&!s.isEmpty(),a=i!==void 0;let o=`Function ${e}() called with invalid data`;t&&(o+=" (via `toFirestore()`)"),o+=". ";let c="";return(r||a)&&(c+=" (found",r&&(c+=` in field ${s}`),a&&(c+=` in document ${i}`),c+=")"),new M(_.INVALID_ARGUMENT,o+n+c)}function dI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t,s,i,r){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new bt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fI(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Ld("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fI extends Nd{data(){return super.data()}}function Ld(n,e){return typeof e=="string"?Od(n,e):e instanceof ec?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new M(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pI{convertValue(e,t="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ee(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw P()}}convertObject(e,t){const s={};return ks(e.fields,(i,r)=>{s[i]=this.convertValue(r,t)}),s}convertGeoPoint(e){return new nc(Ee(e.latitude),Ee(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Ah(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=kn(e);return new Ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=fe.fromString(e);le(sd(s));const i=new ti(s.get(1),s.get(3)),r=new O(s.popFirst(5));return i.isEqual(t)||rn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gI(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class yI extends Nd{constructor(e,t,s,i,r,a){super(e,t,s,i,a),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Qi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Ld("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Qi extends yI{data(e={}){return super.data(e)}}class _I{constructor(e,t,s,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ji(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Qi(this._firestore,this._userDataWriter,s.key,s,new ji(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new M(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(a=>{const o=new Qi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ji(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:o,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const o=new Qi(s._firestore,s._userDataWriter,a.doc.key,a.doc,new ji(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,l=-1;return a.type!==0&&(c=r.indexOf(a.doc.key),r=r.delete(a.doc.key)),a.type!==1&&(r=r.add(a.doc),l=r.indexOf(a.doc.key)),{type:vI(a.type),doc:o,oldIndex:c,newIndex:l}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function vI(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return P()}}class II extends pI{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new bt(this.firestore,null,t)}}function EI(n){n=yr(n,$r);const e=yr(n.firestore,$a),t=wd(e),s=new II(e);return mI(n._query),eI(t,n._query).then(i=>new _I(e,s,n,i))}function Md(n,e,t){n=yr(n,bt);const s=yr(n.firestore,$a),i=gI(n.converter,e,t);return bI(s,[lI(cI(s),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,nn.none())])}function bI(n,e){return function(t,s){const i=new wn;return t.asyncQueue.enqueueAndForget(async()=>Uv(await Zv(t),s,i)),i.promise}(wd(n),e)}function Pd(){return new ic("serverTimestamp")}(function(n,e=!0){(function(t){Rs=t})(As),Qn(new Cn("firestore",(t,{instanceIdentifier:s,options:i})=>{const r=t.getProvider("app").getImmediate(),a=new $a(new _y(t.getProvider("auth-internal")),new by(t.getProvider("app-check-internal")),function(o,c){if(!Object.prototype.hasOwnProperty.apply(o.options,["projectId"]))throw new M(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ti(o.options.projectId,c)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Pt(Wc,"3.8.4",n),Pt(Wc,"3.8.4","esm2017")})();const TI={firebase:{apiKey:"AIzaSyD5i4ZlJRnsk6XylkGzX3K8a4iHI6MZlok",authDomain:"y-toucherterre.firebaseapp.com",projectId:"y-toucherterre",storageBucket:"y-toucherterre.appspot.com",messagingSenderId:"799638465669",appId:"1:799638465669:web:8ef965f30f1c0c4a7a4dec",measurementId:"G-GKZG8MVZHE"}};var wI="firebase",AI="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(wI,AI,"app");function Ud(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const SI=Ud,Fd=new ui("auth","Firebase",Ud());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wl=new ha("@firebase/auth");function Yi(n,...e){wl.logLevel<=te.ERROR&&wl.error(`Auth (${As}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cn(n,...e){throw rc(n,...e)}function Ft(n,...e){return rc(n,...e)}function CI(n,e,t){const s=Object.assign(Object.assign({},SI()),{[e]:t});return new ui("auth","Firebase",s).create(e,{appName:n.name})}function rc(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Fd.create(n,...e)}function U(n,e,...t){if(!n)throw rc(e,...t)}function $t(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Yi(e),new Error(e)}function ln(n,e){n||$t(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=new Map;function en(n){ln(n instanceof Function,"Expected a class definition");let e=Al.get(n);return e?(ln(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Al.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(n,e){const t=Cr(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(Gs(r,e??{}))return i;cn(i,"already-initialized")}return t.initialize({options:e})}function kI(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(en);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function DI(){return Sl()==="http:"||Sl()==="https:"}function Sl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(DI()||Ym()||"connection"in navigator)?navigator.onLine:!0}function NI(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,ln(t>e,"Short delay should be less than long delay!"),this.isMobile=Xm()||Jm()}get(){return OI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){ln(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bd{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;$t("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;$t("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;$t("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI=new Ci(3e4,6e4);function PI(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function eo(n,e,t,s,i={}){return xd(n,i,async()=>{let r={},a={};s&&(e==="GET"?a=s:r={body:JSON.stringify(s)});const o=hi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),Bd.fetch()(Vd(n,n.config.apiHost,t,o),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function xd(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},LI),e);try{const i=new FI(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const a=await r.json();if("needConfirmation"in a)throw Hi(n,"account-exists-with-different-credential",a);if(r.ok&&!("errorMessage"in a))return a;{const o=r.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Hi(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Hi(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw Hi(n,"user-disabled",a);const u=s[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw CI(n,u,l);cn(n,u)}}catch(i){if(i instanceof qt)throw i;cn(n,"internal-error",{message:String(i)})}}async function UI(n,e,t,s,i={}){const r=await eo(n,e,t,s,i);return"mfaPendingCredential"in r&&cn(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Vd(n,e,t,s){const i=`${e}${t}?${s}`;return n.config.emulator?oc(n.config,i):`${n.config.apiScheme}://${i}`}class FI{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(Ft(this.auth,"network-request-failed")),MI.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Hi(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=Ft(n,e,s);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BI(n,e){return eo(n,"POST","/v1/accounts:delete",e)}async function xI(n,e){return eo(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function VI(n,e=!1){const t=et(n),s=await t.getIdToken(e),i=ac(s);U(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,a=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:qs(bo(i.auth_time)),issuedAtTime:qs(bo(i.iat)),expirationTime:qs(bo(i.exp)),signInProvider:a||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function bo(n){return Number(n)*1e3}function ac(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Yi("JWT malformed, contained fewer than 3 sections"),null;try{const i=hu(t);return i?JSON.parse(i):(Yi("Failed to decode base64 JWT payload"),null)}catch(i){return Yi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function jI(n){const e=ac(n);return U(e,"internal-error"),U(typeof e.exp<"u","internal-error"),U(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof qt&&HI(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function HI({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=qs(this.lastLoginAt),this.creationTime=qs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vr(n){var e;const t=n.auth,s=await n.getIdToken(),i=await ai(n,xI(t,{idToken:s}));U(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const a=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?GI(r.providerUserInfo):[],o=KI(n.providerData,a),c=n.isAnonymous,l=!(n.email&&r.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new jd(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function qI(n){const e=et(n);await vr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KI(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function GI(n){return n.map(e=>{var{providerId:t}=e,s=la(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WI(n,e){const t=await xd(n,{},async()=>{const s=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,a=Vd(n,i,"/v1/token",`key=${r}`),o=await n._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",Bd.fetch()(a,{method:"POST",headers:o,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){U(e.idToken,"internal-error"),U(typeof e.idToken<"u","internal-error"),U(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):jI(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return U(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await WI(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,a=new ci;return s&&(U(typeof s=="string","internal-error",{appName:e}),a.refreshToken=s),i&&(U(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),r&&(U(typeof r=="number","internal-error",{appName:e}),a.expirationTime=r),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n,e){U(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Gn{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=la(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new jd(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ai(this,this.stsTokenManager.getToken(this.auth,e));return U(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return VI(this,e)}reload(){return qI(this)}_assign(e){this!==e&&(U(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Gn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){U(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await vr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ai(this,BI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,a,o,c,l,u;const h=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,g=(a=t.photoURL)!==null&&a!==void 0?a:void 0,m=(o=t.tenantId)!==null&&o!==void 0?o:void 0,p=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,A=(l=t.createdAt)!==null&&l!==void 0?l:void 0,S=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:E,emailVerified:b,isAnonymous:w,providerData:K,stsTokenManager:ee}=t;U(E&&ee,e,"internal-error");const oe=ci.fromJSON(this.name,ee);U(typeof E=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),U(typeof b=="boolean",e,"internal-error"),U(typeof w=="boolean",e,"internal-error"),mn(f,e.name),mn(g,e.name),mn(m,e.name),mn(p,e.name),mn(A,e.name),mn(S,e.name);const ae=new Gn({uid:E,auth:e,email:d,emailVerified:b,displayName:h,isAnonymous:w,photoURL:g,phoneNumber:f,tenantId:m,stsTokenManager:oe,createdAt:A,lastLoginAt:S});return K&&Array.isArray(K)&&(ae.providerData=K.map(G=>Object.assign({},G))),p&&(ae._redirectEventId=p),ae}static async _fromIdTokenResponse(e,t,s=!1){const i=new ci;i.updateFromServerResponse(t);const r=new Gn({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await vr(r),r}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Hd.type="NONE";const Cl=Hd;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e,t){return`firebase:${n}:${e}:${t}`}class fs{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ji(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ji("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Gn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new fs(en(Cl),e,s);const i=(await Promise.all(t.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=i[0]||en(Cl);const a=Ji(s,e.config.apiKey,e.name);let o=null;for(const l of t)try{const u=await l._get(a);if(u){const h=Gn._fromJSON(e,u);l!==r&&(o=h),r=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new fs(r,e,s):(r=c[0],o&&await r._set(a,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==r)try{await l._remove(a)}catch{}})),new fs(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rl(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kd(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(zd(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Wd(e))return"Blackberry";if(Xd(e))return"Webos";if(cc(e))return"Safari";if((e.includes("chrome/")||qd(e))&&!e.includes("edge/"))return"Chrome";if(Gd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function zd(n=We()){return/firefox\//i.test(n)}function cc(n=We()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qd(n=We()){return/crios\//i.test(n)}function Kd(n=We()){return/iemobile/i.test(n)}function Gd(n=We()){return/android/i.test(n)}function Wd(n=We()){return/blackberry/i.test(n)}function Xd(n=We()){return/webos/i.test(n)}function to(n=We()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function XI(n=We()){var e;return to(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QI(){return Zm()&&document.documentMode===10}function Qd(n=We()){return to(n)||Gd(n)||Xd(n)||Wd(n)||/windows phone/i.test(n)||Kd(n)}function YI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n,e=[]){let t;switch(n){case"Browser":t=Rl(We());break;case"Worker":t=`${Rl(We())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${As}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((a,o)=>{try{const c=e(r);a(c)}catch(c){o(c)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e,t,s){this.app=e,this.heartbeatServiceProvider=t,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kl(this),this.idTokenSubscription=new kl(this),this.beforeStateQueue=new JI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Fd,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await fs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return U(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vr(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?et(e):null;return t&&U(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&U(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ui("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&en(e)||this._popupRedirectResolver;U(t,this,"argument-error"),this.redirectPersistenceManager=await fs.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t),a=this._isInitialized?Promise.resolve():this._initializationPromise;return U(a,this,"internal-error"),a.then(()=>r(this.currentUser)),typeof t=="function"?e.addObserver(t,s,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return U(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yd(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return s&&(t["X-Firebase-Client"]=s),t}}function lc(n){return et(n)}class kl{constructor(e){this.auth=e,this.observer=null,this.addObserver=rp(t=>this.observer=t)}get next(){return U(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function $I(n,e,t){const s=lc(n);U(s._canInitEmulator,s,"emulator-config-failed"),U(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),r=Jd(e),{host:a,port:o}=eE(e),c=o===null?"":`:${o}`;s.config.emulator={url:`${r}//${a}${c}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:a,port:o,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||tE()}function Jd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function eE(n){const e=Jd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Dl(s.substr(r.length+1))}}else{const[r,a]=s.split(":");return{host:r,port:Dl(a)}}}function Dl(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function tE(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return $t("not implemented")}_getIdTokenResponse(e){return $t("not implemented")}_linkToIdToken(e,t){return $t("not implemented")}_getReauthenticationResolver(e){return $t("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ms(n,e){return UI(n,"POST","/v1/accounts:signInWithIdp",PI(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE="http://localhost";class Zn extends Zd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=la(t,["providerId","signInMethod"]);if(!s||!i)return null;const a=new Zn(s,i);return a.idToken=r.idToken||void 0,a.accessToken=r.accessToken||void 0,a.secret=r.secret,a.nonce=r.nonce,a.pendingToken=r.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return ms(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,ms(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ms(e,t)}buildRequest(){const e={requestUri:nE,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $d{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends $d{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Ri{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends Ri{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Zn._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Yt.credential(t,s)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Ri{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Ri{constructor(){super("twitter.com")}static credential(e,t){return Zn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return vn.credential(t,s)}catch{return null}}}vn.TWITTER_SIGN_IN_METHOD="twitter.com";vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await Gn._fromIdTokenResponse(e,s,i),a=Ol(s);return new Ts({user:r,providerId:a,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=Ol(s);return new Ts({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function Ol(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends qt{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ir.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Ir(e,t,s,i)}}function ef(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ir._fromErrorAndOperation(n,r,e,s):r})}async function sE(n,e,t=!1){const s=await ai(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Ts._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iE(n,e,t=!1){const{auth:s}=n,i="reauthenticate";try{const r=await ai(n,ef(s,i,e,n),t);U(r.idToken,s,"internal-error");const a=ac(r.idToken);U(a,s,"internal-error");const{sub:o}=a;return U(n.uid===o,s,"user-mismatch"),Ts._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&cn(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(n,e,t=!1){const s="signIn",i=await ef(n,s,e),r=await Ts._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}function oE(n,e,t,s){return et(n).onIdTokenChanged(e,t,s)}function aE(n,e,t){return et(n).beforeAuthStateChanged(e,t)}const Er="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Er,"1"),this.storage.removeItem(Er),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cE(){const n=We();return cc(n)||to(n)}const lE=1e3,uE=10;class nf extends tf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=cE()&&YI(),this.fallbackToPolling=Qd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const s=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(s);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!t)return}const i=()=>{const a=this.storage.getItem(s);!t&&this.localCache[s]===a||this.notifyListeners(s,a)},r=this.storage.getItem(s);QI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,uE):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},lE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nf.type="LOCAL";const hE=nf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf extends tf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}sf.type="SESSION";const rf=sf;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new no(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const o=Array.from(a).map(async l=>l(t.origin,r)),c=await dE(o);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}no.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,a;return new Promise((o,c)=>{const l=uc("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},s);a={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),o(d.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function mE(n){Bt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function of(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function pE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function gE(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function yE(){return of()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af="firebaseLocalStorageDb",_E=1,br="firebaseLocalStorage",cf="fbase_key";class ki{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function so(n,e){return n.transaction([br],e?"readwrite":"readonly").objectStore(br)}function vE(){const n=indexedDB.deleteDatabase(af);return new ki(n).toPromise()}function sa(){const n=indexedDB.open(af,_E);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(br,{keyPath:cf})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(br)?e(s):(s.close(),await vE(),e(await sa()))})})}async function Nl(n,e,t){const s=so(n,!0).put({[cf]:e,value:t});return new ki(s).toPromise()}async function IE(n,e){const t=so(n,!1).get(e),s=await new ki(t).toPromise();return s===void 0?null:s.value}function Ll(n,e){const t=so(n,!0).delete(e);return new ki(t).toPromise()}const EE=800,bE=3;class lf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sa(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>bE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=no._getInstance(yE()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await pE(),!this.activeServiceWorker)return;this.sender=new fE(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||gE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sa();return await Nl(e,Er,"1"),await Ll(e,Er),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Nl(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>IE(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ll(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=so(i,!1).getAll();return new ki(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),EE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}lf.type="LOCAL";const TE=lf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function AE(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=Ft("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",wE().appendChild(s)})}function SE(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Ci(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(n,e){return e?en(e):(U(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hc extends Zd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ms(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ms(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ms(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function RE(n){return rE(n.auth,new hc(n),n.bypassAuthState)}function kE(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),iE(t,new hc(n),n.bypassAuthState)}async function DE(n){const{auth:e,user:t}=n;return U(t,e,"internal-error"),sE(t,new hc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:a,type:o}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return RE;case"linkViaPopup":case"linkViaRedirect":return DE;case"reauthViaPopup":case"reauthViaRedirect":return kE;default:cn(this.auth,"internal-error")}}resolve(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ln(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE=new Ci(2e3,1e4);class us extends uf{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,us.currentPopupAction&&us.currentPopupAction.cancel(),us.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return U(e,this.auth,"internal-error"),e}async onExecution(){ln(this.filter.length===1,"Popup operations only handle one event");const e=uc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ft(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ft(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,us.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ft(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,OE.get())};e()}}us.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NE="pendingRedirect",Zi=new Map;class LE extends uf{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Zi.get(this.auth._key());if(!e){try{const s=await ME(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Zi.set(this.auth._key(),e)}return this.bypassAuthState||Zi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ME(n,e){const t=FE(e),s=UE(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function PE(n,e){Zi.set(n._key(),e)}function UE(n){return en(n._redirectPersistence)}function FE(n){return Ji(NE,n.config.apiKey,n.name)}async function BE(n,e,t=!1){const s=lc(n),i=CE(s,e),a=await new LE(s,i,t).execute();return a&&!t&&(delete a.user._redirectEventId,await s._persistUserIfCurrent(a.user),await s._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE=10*60*1e3;class VE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jE(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!hf(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(Ft(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xE&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ml(e))}saveEventToCache(e){this.cachedEventUids.add(Ml(e)),this.lastProcessedEventTime=Date.now()}}function Ml(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function hf({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jE(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return hf(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HE(n,e={}){return eo(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,qE=/^https?/;async function KE(n){if(n.config.emulator)return;const{authorizedDomains:e}=await HE(n);for(const t of e)try{if(GE(t))return}catch{}cn(n,"unauthorized-domain")}function GE(n){const e=na(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===s}if(!qE.test(t))return!1;if(zE.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE=new Ci(3e4,6e4);function Pl(){const n=Bt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function XE(n){return new Promise((e,t)=>{var s,i,r;function a(){Pl(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pl(),t(Ft(n,"network-request-failed"))},timeout:WE.get()})}if(!((i=(s=Bt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Bt().gapi)===null||r===void 0)&&r.load)a();else{const o=SE("iframefcb");return Bt()[o]=()=>{gapi.load?a():t(Ft(n,"network-request-failed"))},AE(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw $i=null,e})}let $i=null;function QE(n){return $i=$i||XE(n),$i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new Ci(5e3,15e3),JE="__/auth/iframe",ZE="emulator/auth/iframe",$E={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function tb(n){const e=n.config;U(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oc(e,ZE):`https://${n.config.authDomain}/${JE}`,s={apiKey:e.apiKey,appName:n.name,v:As},i=eb.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${hi(s).slice(1)}`}async function nb(n){const e=await QE(n),t=Bt().gapi;return U(t,n,"internal-error"),e.open({where:document.body,url:tb(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$E,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const a=Ft(n,"network-request-failed"),o=Bt().setTimeout(()=>{r(a)},YE.get());function c(){Bt().clearTimeout(o),i(s)}s.ping(c).then(c,()=>{r(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ib=500,rb=600,ob="_blank",ab="http://localhost";class Ul{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function cb(n,e,t,s=ib,i=rb){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-s)/2,0).toString();let o="";const c=Object.assign(Object.assign({},sb),{width:s.toString(),height:i.toString(),top:r,left:a}),l=We().toLowerCase();t&&(o=qd(l)?ob:t),zd(l)&&(e=e||ab,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(XI(l)&&o!=="_self")return lb(e||"",o),new Ul(null);const h=window.open(e||"",o,u);U(h,n,"popup-blocked");try{h.focus()}catch{}return new Ul(h)}function lb(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub="__/auth/handler",hb="emulator/auth/handler";function Fl(n,e,t,s,i,r){U(n.config.authDomain,n,"auth-domain-config-required"),U(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:As,eventId:i};if(e instanceof $d){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",ip(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,l]of Object.entries(r||{}))a[c]=l}if(e instanceof Ri){const c=e.getScopes().filter(l=>l!=="");c.length>0&&(a.scopes=c.join(","))}n.tenantId&&(a.tid=n.tenantId);const o=a;for(const c of Object.keys(o))o[c]===void 0&&delete o[c];return`${db(n)}?${hi(o).slice(1)}`}function db({config:n}){return n.emulator?oc(n,hb):`https://${n.authDomain}/${ub}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="webStorageSupport";class fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rf,this._completeRedirectFn=BE,this._overrideRedirectResult=PE}async _openPopup(e,t,s,i){var r;ln((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const a=Fl(e,t,s,na(),i);return cb(e,a,uc())}async _openRedirect(e,t,s,i){return await this._originValidation(e),mE(Fl(e,t,s,na(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(ln(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await nb(e),s=new VE(e);return t.register("authEvent",i=>(U(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(To,{type:To},i=>{var r;const a=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[To];a!==void 0&&t(!!a),cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=KE(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Qd()||cc()||to()}}const mb=fb;var Bl="@firebase/auth",xl="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){U(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function yb(n){Qn(new Cn("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:r,authDomain:a}=s.options;return((o,c)=>{U(r&&!r.includes(":"),"invalid-api-key",{appName:o.name}),U(!(a!=null&&a.includes(":")),"argument-error",{appName:o.name});const l={apiKey:r,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yd(n)},u=new ZI(o,c,l);return kI(u,t),u})(s,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),Qn(new Cn("auth-internal",e=>{const t=lc(e.getProvider("auth").getImmediate());return(s=>new pb(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(Bl,xl,gb(n)),Pt(Bl,xl,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _b=5*60,vb=fu("authIdTokenMaxAge")||_b;let Vl=null;const Ib=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>vb)return;const i=t==null?void 0:t.token;Vl!==i&&(Vl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Eb(n=yu()){const e=Cr(n,"auth");if(e.isInitialized())return e.getImmediate();const t=RI(n,{popupRedirectResolver:mb,persistence:[TE,hE,rf]}),s=fu("authTokenSyncURL");if(s){const r=Ib(s);aE(t,r,()=>r(t.currentUser)),oE(t,a=>r(a))}const i=du("auth");return i&&$I(t,`http://${i}`),t}yb("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df="firebasestorage.googleapis.com",ff="storageBucket",bb=2*60*1e3,Tb=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends qt{constructor(e,t,s=0){super(wo(e),`Firebase Storage: ${t} (${wo(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return wo(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var _e;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(_e||(_e={}));function wo(n){return"storage/"+n}function dc(){const n="An unknown error occurred, please check the error payload for server response.";return new ve(_e.UNKNOWN,n)}function wb(n){return new ve(_e.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Ab(n){return new ve(_e.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Sb(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(_e.UNAUTHENTICATED,n)}function Cb(){return new ve(_e.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Rb(n){return new ve(_e.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function kb(){return new ve(_e.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Db(){return new ve(_e.CANCELED,"User canceled the upload/download.")}function Ob(n){return new ve(_e.INVALID_URL,"Invalid URL '"+n+"'.")}function Nb(n){return new ve(_e.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Lb(){return new ve(_e.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ff+"' property when initializing the app?")}function Mb(){return new ve(_e.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Pb(){return new ve(_e.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Ub(n){return new ve(_e.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ia(n){return new ve(_e.INVALID_ARGUMENT,n)}function mf(){return new ve(_e.APP_DELETED,"The Firebase app was deleted.")}function Fb(n){return new ve(_e.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ks(n,e){return new ve(_e.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Ps(n){throw new ve(_e.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let s;try{s=_t.makeFromUrl(e,t)}catch{return new _t(e,"")}if(s.path==="")return s;throw Nb(e)}static makeFromUrl(e,t){let s=null;const i="([A-Za-z0-9.\\-_]+)";function r(b){b.path.charAt(b.path.length-1)==="/"&&(b.path_=b.path_.slice(0,-1))}const a="(/(.*))?$",o=new RegExp("^gs://"+i+a,"i"),c={bucket:1,path:3};function l(b){b.path_=decodeURIComponent(b.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${i}/o${d}`,"i"),g={bucket:1,path:3},m=t===df?"(?:storage.googleapis.com|storage.cloud.google.com)":t,p="([^?#]*)",A=new RegExp(`^https?://${m}/${i}/${p}`,"i"),E=[{regex:o,indices:c,postModify:r},{regex:f,indices:g,postModify:l},{regex:A,indices:{bucket:1,path:2},postModify:l}];for(let b=0;b<E.length;b++){const w=E[b],K=w.regex.exec(e);if(K){const ee=K[w.indices.bucket];let oe=K[w.indices.path];oe||(oe=""),s=new _t(ee,oe),w.postModify(s);break}}if(s==null)throw Ob(e);return s}}class Bb{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xb(n,e,t){let s=1,i=null,r=null,a=!1,o=0;function c(){return o===2}let l=!1;function u(...p){l||(l=!0,e.apply(null,p))}function h(p){i=setTimeout(()=>{i=null,n(f,c())},p)}function d(){r&&clearTimeout(r)}function f(p,...A){if(l){d();return}if(p){d(),u.call(null,p,...A);return}if(c()||a){d(),u.call(null,p,...A);return}s<64&&(s*=2);let E;o===1?(o=2,E=0):E=(s+Math.random())*1e3,h(E)}let g=!1;function m(p){g||(g=!0,d(),!l&&(i!==null?(p||(o=2),clearTimeout(i),h(0)):p||(o=1)))}return h(0),r=setTimeout(()=>{a=!0,m(!0)},t),m}function Vb(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jb(n){return n!==void 0}function Hb(n){return typeof n=="object"&&!Array.isArray(n)}function fc(n){return typeof n=="string"||n instanceof String}function jl(n){return mc()&&n instanceof Blob}function mc(){return typeof Blob<"u"&&!Qm()}function Hl(n,e,t,s){if(s<e)throw ia(`Invalid value for '${n}'. Expected ${e} or greater.`);if(s>t)throw ia(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(n,e,t){let s=e;return t==null&&(s=`https://${e}`),`${t}://${s}/v0${n}`}function pf(n){const e=encodeURIComponent;let t="?";for(const s in n)if(n.hasOwnProperty(s)){const i=e(s)+"="+e(n[s]);t=t+i+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wn;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Wn||(Wn={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(n,e){const t=n>=500&&n<600,i=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||i||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e,t,s,i,r,a,o,c,l,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=s,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=a,this.callback_=o,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(s,i)=>{if(i){s(!1,new zi(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const a=o=>{const c=o.loaded,l=o.lengthComputable?o.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&r.addUploadProgressListener(a),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(a),this.pendingConnection_=null;const o=r.getErrorCode()===Wn.NO_ERROR,c=r.getStatus();if(!o||zb(c,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===Wn.ABORT;s(!1,new zi(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;s(!0,new zi(l,r))})},t=(s,i)=>{const r=this.resolve_,a=this.reject_,o=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(o,o.getResponse());jb(c)?r(c):r()}catch(c){a(c)}else if(o!==null){const c=dc();c.serverResponse=o.getErrorText(),this.errorCallback_?a(this.errorCallback_(o,c)):a(c)}else if(i.canceled){const c=this.appDelete_?mf():Db();a(c)}else{const c=kb();a(c)}};this.canceled_?t(!1,new zi(!1,null,!0)):this.backoffId_=xb(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Vb(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class zi{constructor(e,t,s){this.wasSuccessCode=e,this.connection=t,this.canceled=!!s}}function Kb(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function Gb(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Wb(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Xb(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Qb(n,e,t,s,i,r,a=!0){const o=pf(n.urlParams),c=n.url+o,l=Object.assign({},n.headers);return Wb(l,e),Kb(l,t),Gb(l,r),Xb(l,s),new qb(c,n.method,l,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yb(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Jb(...n){const e=Yb();if(e!==void 0){const t=new e;for(let s=0;s<n.length;s++)t.append(n[s]);return t.getBlob()}else{if(mc())return new Blob(n);throw new ve(_e.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Zb(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $b(n){if(typeof atob>"u")throw Ub("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ao{constructor(e,t){this.data=e,this.contentType=t||null}}function eT(n,e){switch(n){case Mt.RAW:return new Ao(gf(e));case Mt.BASE64:case Mt.BASE64URL:return new Ao(yf(n,e));case Mt.DATA_URL:return new Ao(nT(e),sT(e))}throw dc()}function gf(n){const e=[];for(let t=0;t<n.length;t++){let s=n.charCodeAt(t);if(s<=127)e.push(s);else if(s<=2047)e.push(192|s>>6,128|s&63);else if((s&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=s,a=n.charCodeAt(++t);s=65536|(r&1023)<<10|a&1023,e.push(240|s>>18,128|s>>12&63,128|s>>6&63,128|s&63)}else(s&64512)===56320?e.push(239,191,189):e.push(224|s>>12,128|s>>6&63,128|s&63)}return new Uint8Array(e)}function tT(n){let e;try{e=decodeURIComponent(n)}catch{throw Ks(Mt.DATA_URL,"Malformed data URL.")}return gf(e)}function yf(n,e){switch(n){case Mt.BASE64:{const i=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(i||r)throw Ks(n,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Mt.BASE64URL:{const i=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(i||r)throw Ks(n,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=$b(e)}catch(i){throw i.message.includes("polyfill")?i:Ks(n,"Invalid character found")}const s=new Uint8Array(t.length);for(let i=0;i<t.length;i++)s[i]=t.charCodeAt(i);return s}class _f{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Ks(Mt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const s=t[1]||null;s!=null&&(this.base64=iT(s,";base64"),this.contentType=this.base64?s.substring(0,s.length-7):s),this.rest=e.substring(e.indexOf(",")+1)}}function nT(n){const e=new _f(n);return e.base64?yf(Mt.BASE64,e.rest):tT(e.rest)}function sT(n){return new _f(n).contentType}function iT(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(e,t){let s=0,i="";jl(e)?(this.data_=e,s=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),s=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),s=e.length),this.size_=s,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(jl(this.data_)){const s=this.data_,i=Zb(s,e,t);return i===null?null:new In(i)}else{const s=new Uint8Array(this.data_.buffer,e,t-e);return new In(s,!0)}}static getBlob(...e){if(mc()){const t=e.map(s=>s instanceof In?s.data_:s);return new In(Jb.apply(null,t))}else{const t=e.map(a=>fc(a)?eT(Mt.RAW,a).data:a.data_);let s=0;t.forEach(a=>{s+=a.byteLength});const i=new Uint8Array(s);let r=0;return t.forEach(a=>{for(let o=0;o<a.length;o++)i[r++]=a[o]}),new In(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vf(n){let e;try{e=JSON.parse(n)}catch{return null}return Hb(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function oT(n,e){const t=e.split("/").filter(s=>s.length>0).join("/");return n.length===0?t:n+"/"+t}function If(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aT(n,e){return e}class Qe{constructor(e,t,s,i){this.server=e,this.local=t||e,this.writable=!!s,this.xform=i||aT}}let qi=null;function cT(n){return!fc(n)||n.length<2?n:If(n)}function Ef(){if(qi)return qi;const n=[];n.push(new Qe("bucket")),n.push(new Qe("generation")),n.push(new Qe("metageneration")),n.push(new Qe("name","fullPath",!0));function e(r,a){return cT(a)}const t=new Qe("name");t.xform=e,n.push(t);function s(r,a){return a!==void 0?Number(a):a}const i=new Qe("size");return i.xform=s,n.push(i),n.push(new Qe("timeCreated")),n.push(new Qe("updated")),n.push(new Qe("md5Hash",null,!0)),n.push(new Qe("cacheControl",null,!0)),n.push(new Qe("contentDisposition",null,!0)),n.push(new Qe("contentEncoding",null,!0)),n.push(new Qe("contentLanguage",null,!0)),n.push(new Qe("contentType",null,!0)),n.push(new Qe("metadata","customMetadata",!0)),qi=n,qi}function lT(n,e){function t(){const s=n.bucket,i=n.fullPath,r=new _t(s,i);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function uT(n,e,t){const s={};s.type="file";const i=t.length;for(let r=0;r<i;r++){const a=t[r];s[a.local]=a.xform(s,e[a.server])}return lT(s,n),s}function bf(n,e,t){const s=vf(e);return s===null?null:uT(n,s,t)}function hT(n,e,t,s){const i=vf(e);if(i===null||!fc(i.downloadTokens))return null;const r=i.downloadTokens;if(r.length===0)return null;const a=encodeURIComponent;return r.split(",").map(l=>{const u=n.bucket,h=n.fullPath,d="/b/"+a(u)+"/o/"+a(h),f=pc(d,t,s),g=pf({alt:"media",token:l});return f+g})[0]}function dT(n,e){const t={},s=e.length;for(let i=0;i<s;i++){const r=e[i];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Tf{constructor(e,t,s,i){this.url=e,this.method=t,this.handler=s,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wf(n){if(!n)throw dc()}function fT(n,e){function t(s,i){const r=bf(n,i,e);return wf(r!==null),r}return t}function mT(n,e){function t(s,i){const r=bf(n,i,e);return wf(r!==null),hT(r,i,n.host,n._protocol)}return t}function Af(n){function e(t,s){let i;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?i=Cb():i=Sb():t.getStatus()===402?i=Ab(n.bucket):t.getStatus()===403?i=Rb(n.path):i=s,i.status=t.getStatus(),i.serverResponse=s.serverResponse,i}return e}function pT(n){const e=Af(n);function t(s,i){let r=e(s,i);return s.getStatus()===404&&(r=wb(n.path)),r.serverResponse=i.serverResponse,r}return t}function gT(n,e,t){const s=e.fullServerUrl(),i=pc(s,n.host,n._protocol),r="GET",a=n.maxOperationRetryTime,o=new Tf(i,r,mT(n,t),a);return o.errorHandler=pT(e),o}function yT(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function _T(n,e,t){const s=Object.assign({},t);return s.fullPath=n.path,s.size=e.size(),s.contentType||(s.contentType=yT(null,e)),s}function vT(n,e,t,s,i){const r=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function o(){let E="";for(let b=0;b<2;b++)E=E+Math.random().toString().slice(2);return E}const c=o();a["Content-Type"]="multipart/related; boundary="+c;const l=_T(e,s,i),u=dT(l,t),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=In.getBlob(h,s,d);if(f===null)throw Mb();const g={name:l.fullPath},m=pc(r,n.host,n._protocol),p="POST",A=n.maxUploadRetryTime,S=new Tf(m,p,fT(n,t),A);return S.urlParams=g,S.headers=a,S.body=f.uploadData(),S.errorHandler=Af(e),S}class IT{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Wn.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Wn.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Wn.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,s,i){if(this.sent_)throw Ps("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),i!==void 0)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return s!==void 0?this.xhr_.send(s):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ps("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ps("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ps("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ps("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class ET extends IT{initXhr(){this.xhr_.responseType="text"}}function Sf(){return new ET}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,t){this._service=e,t instanceof _t?this._location=t:this._location=_t.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new $n(e,t)}get root(){const e=new _t(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return If(this._location.path)}get storage(){return this._service}get parent(){const e=rT(this._location.path);if(e===null)return null;const t=new _t(this._location.bucket,e);return new $n(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw Fb(e)}}function bT(n,e,t){n._throwIfRoot("uploadBytes");const s=vT(n.storage,n._location,Ef(),new In(e,!0),t);return n.storage.makeRequestWithTokens(s,Sf).then(i=>({metadata:i,ref:n}))}function TT(n){n._throwIfRoot("getDownloadURL");const e=gT(n.storage,n._location,Ef());return n.storage.makeRequestWithTokens(e,Sf).then(t=>{if(t===null)throw Pb();return t})}function wT(n,e){const t=oT(n._location.path,e),s=new _t(n._location.bucket,t);return new $n(n.storage,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AT(n){return/^[A-Za-z]+:\/\//.test(n)}function ST(n,e){return new $n(n,e)}function Cf(n,e){if(n instanceof gc){const t=n;if(t._bucket==null)throw Lb();const s=new $n(t,t._bucket);return e!=null?Cf(s,e):s}else return e!==void 0?wT(n,e):n}function CT(n,e){if(e&&AT(e)){if(n instanceof gc)return ST(n,e);throw ia("To use ref(service, url), the first argument must be a Storage instance.")}else return Cf(n,e)}function zl(n,e){const t=e==null?void 0:e[ff];return t==null?null:_t.makeFromBucketSpec(t,n)}function RT(n,e,t,s={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:i}=s;i&&(n._overrideAuthToken=typeof i=="string"?i:Wm(i,n.app.options.projectId))}class gc{constructor(e,t,s,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=s,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=df,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=bb,this._maxUploadRetryTime=Tb,this._requests=new Set,i!=null?this._bucket=_t.makeFromBucketSpec(i,this._host):this._bucket=zl(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=_t.makeFromBucketSpec(this._url,e):this._bucket=zl(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Hl("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Hl("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new $n(this,e)}_makeRequest(e,t,s,i,r=!0){if(this._deleted)return new Bb(mf());{const a=Qb(e,this._appId,s,i,t,this._firebaseVersion,r);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(e,t){const[s,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,s,i).getPromise()}}const ql="@firebase/storage",Kl="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf="storage";function kT(n,e,t){return n=et(n),bT(n,e,t)}function DT(n){return n=et(n),TT(n)}function OT(n,e){return n=et(n),CT(n,e)}function NT(n=yu(),e){n=et(n);const s=Cr(n,Rf).getImmediate({identifier:e}),i=qm("storage");return i&&LT(s,...i),s}function LT(n,e,t,s={}){RT(n,e,t,s)}function MT(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),s=n.getProvider("auth-internal"),i=n.getProvider("app-check-internal");return new gc(t,s,i,e,As)}function PT(){Qn(new Cn(Rf,MT,"PUBLIC").setMultipleInstances(!0)),Pt(ql,Kl,""),Pt(ql,Kl,"esm2017")}PT();function kf(){const n=e();return n.isConfigured||(console.debug("🚔 🔥✅ 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"),console.debug("🚔 🔥✅ 🎉  Initializing FIREBASE <-- [1st time] "),console.debug("🚔 🔥✅ 🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉"),console.debug("🚔 🔥✅ 🟠🟠🟠🟠🟠🟠🟠  USING > PRODUCTION "),console.debug("🚔 🔥✅ 🟠🟠🟠🟠🟠🟠🟠  FIRESTORE ")),n;function e(){const t=ig().length>0,s=gu(TI.firebase),i=iI(s,{experimentalForceLongPolling:!0}),r=NT(s),a=Eb(s),o=new Yt;return a.languageCode="it",a.useDeviceLanguage(),o.addScope("profile"),o.addScope("email"),o.setCustomParameters({login_hint:"user@example.com"}),{firebaseApp:s,FIRESTORE:i,STORAGE:r,AUTH:a,GOOGLE_AUTH__PROVIDER:o,isConfigured:t}}}const Gl=!0,yc=async(n,e,t)=>{try{console.debug("🚔 🔥🐶 ... -- firestore-crud");const s=await n(e);return console.debug("🚔 🔥🎤"),Gl&&console.dir(s.data),Gl&&console.debug(`🚔 🔥✅ db -- ${t}--ED ${s.msg}`),s}catch(s){return console.debug(`🚔 🔥❌ db -- ${t}--ING ${e}`),s instanceof Error?(console.debug(s.message),console.debug(s.name),console.debug(s),console.error(s.message),{msg:s.name,data:s.message}):{msg:"error in db request",data:""}}},UT=async n=>{const e=`\x1B[35;40;4m  ${n.id.toUpperCase()} \x1B[m\x1B[95;40;4m ALL\x1B[m`;return await yc(async s=>{const i=[],r=await EI(n);return r.docs.length>0&&r.forEach(a=>{const o=a.data();i.push(o)}),{msg:s,data:i}},e,"GET-allCollection-Sort")},FT=async(n,e,t)=>{const s=`\x1B[45;97;4m ${n.id.toUpperCase()} \x1B[m\x1B[105;97;4m ${e}\x1B[m`;return await yc(async()=>(await Md(Td(n,e),{...t}),{msg:s,data:t}),s,"ADD-id")},Df=async(n,e)=>{let t=`\x1B[35;40;4m  ${n.id.toUpperCase()} \x1B[m`;return await yc(async()=>{const i=Td(n);t=t+`\x1B[95;40;4m ${i.id} \x1B[m`;const r={idDoc:i.id,dateUpdated:Pd(),...e};return await Md(i,r),{msg:t,data:i.id}},t,"ADD-new")},BT=async(n,e=!1)=>{try{const s=(await UT(n)).data;if(s.length>0){if(console.debug("🚔 🧞‍♂️✅ SORT-ing... 🔥 -> 🏎️"),e){let i;return Mm(s)?i=s.sort((r,a)=>r.pos>=a.pos?1:-1):cu(s),i=s.sort((r,a)=>r.createdAt>=a.createdAt?-1:1),i}return s}else return zn("firestore",`🚔 🧞‍♂️${n.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED :: loaded NO DATA (you could inject them) ! ✅`),[]}catch{return zn("firestore",`🚔 🧞‍♂️ ❌ [ loaded ] GETid <<< ${n.id.toUpperCase()} / FULL-COLLECTION-GETS--SORTED ❌`),[]}},Of=async(n,e)=>{try{const t={...e,dateUpdated:Pd()};if(cu(t)){const s=await FT(n,t.idDoc,t);return zn("firestore",`🚔 🧞‍♂️ [ add ]  ${n.id.toUpperCase()} ! ✅`),s.data}else{const s=await Df(n,t);return zn("firestore",`🚔 🧞‍♂️ [ add ]  ${n.id.toUpperCase()} ! ✅`),s.data}}catch{zn("firestore",`🚔 🧞‍♂️ [ adds ]  ${n.id.toUpperCase()} ! ❌`)}},xT=async(n,e)=>{try{for(const t of e)await Of(n,t);zn("firestore",`🚔 🧞‍♂️ [ adds ]  ${n.id.toUpperCase()} ! ✅`)}catch{zn("firestore",`🚔 🧞‍♂️ [ adds ]  ${n.id.toUpperCase()} ! ❌`)}},VT=!1,tA=Di("acceuil"),nA=Di("la-demarche"),jT=Di("post"),sA=Di("event"),HT=Di("z-img");function Di(n){const{FIRESTORE:e}=kf();return nI(e,n)}async function Wl(n){console.debug("🟢 Uploading your image...");const{STORAGE:e}=kf();console.debug("🚔debug 0 - filename: ",n.name.trim()),console.debug("🚔debug 1 - upload file: ",n),console.debug("🚔 🐶🔥 ...");const s="/media/"+(await Df(HT,{filename:n.name.trim()})).data,i=OT(e,s);console.debug("🚔 🐶🔥 ...");const r=await kT(i,n),a=await DT(r.ref);return console.debug("-----------------------------------------"),console.debug("🚔  Upload finished: downloadURL/urlStorage: ",a,"fileax",n),console.debug("-----------------------------------------"),a}const iA=async(n,e,t)=>{Ye.set(await BT(n,!0)),yt.set({collection:n,dataset:e,formAdd:t})},rA=async()=>{var i,r,a,o,c,l,u;console.debug("🌎🏎️✅ click >> on:add 1 🟡");const n={pos:0,tag:"error-bro",label:"error-bro",value:"error-bro"};let e;Um(me(Ye))?e={titlePost:structuredClone((i=me(yt))==null?void 0:i.formAdd[0])??n,body:structuredClone((r=me(yt))==null?void 0:r.formAdd[2])??n,createdAt:Date.now()}:Pm(me(Ye))&&(e={titleEvent:structuredClone((a=me(yt))==null?void 0:a.formAdd[0])??n,body:structuredClone((o=me(yt))==null?void 0:o.formAdd[2])??n,date:structuredClone((c=me(yt))==null?void 0:c.formAdd[3])??n,image:structuredClone((l=me(yt))==null?void 0:l.formAdd[4])??n,createdAt:Date.now()});const t=await Of(jT,e),s={...e,idDoc:t};Ye.set([...me(Ye),s]),me(Ye).sort((h,d)=>Ac(h)&&Ac(d)?h.createdAt>=d.createdAt?-1:1:-1),(u=me(yt))==null||u.formAdd.forEach(h=>{console.debug("reseted"),h.value=""}),yt.set(me(yt)),console.debug("c 🌎🏎️✅ click << on:add 2 🟨end, arr",me(yt))},oA=async n=>{console.debug("🌎🏎️✅ click >> on:del 1 🟡",me(Ye),n),!(!me(Ye)||!Array.isArray(me(Ye))||n===void 0)&&(confirm("Supprimer l'article ?")&&(me(Ye).splice(n,1),Ye.set([...me(Ye)])),console.debug("🌎🏎️✅ click << on:del 2 🟨"))},aA=async()=>{var e;if(!((e=me(yt))!=null&&e.collection)||!me(Ye))return;console.debug("🌎🏎️✅ click >> on:save 1 🟡"),await n(me(Ye)),await xT(me(yt).collection,me(Ye)),console.debug("🌎🏎️✅ click << on:save 2 🟨");return;async function n(t){for(let s=0;s<t.length;s++){const i=t[s];let r="N/A";ou(i,!1)?i.tag==="file"&&i.blobs&&(r=await Wl(i.blobs),i.value=r,delete i.blobs):ua(i,!1)&&i.image.tag==="file"&&i.image.blobs&&(r=await Wl(i.image.blobs),i.image.value=r,delete i.image.blobs)}}};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var pn,Xt,q={LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_DISABLED_CLASS:"mdc-list-item--disabled",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_TEXT_CLASS:"mdc-list-item__text",LIST_ITEM_PRIMARY_TEXT_CLASS:"mdc-list-item__primary-text",ROOT:"mdc-list"};pn={},pn[""+q.LIST_ITEM_ACTIVATED_CLASS]="mdc-list-item--activated",pn[""+q.LIST_ITEM_CLASS]="mdc-list-item",pn[""+q.LIST_ITEM_DISABLED_CLASS]="mdc-list-item--disabled",pn[""+q.LIST_ITEM_SELECTED_CLASS]="mdc-list-item--selected",pn[""+q.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-list-item__primary-text",pn[""+q.ROOT]="mdc-list";var os=(Xt={},Xt[""+q.LIST_ITEM_ACTIVATED_CLASS]="mdc-deprecated-list-item--activated",Xt[""+q.LIST_ITEM_CLASS]="mdc-deprecated-list-item",Xt[""+q.LIST_ITEM_DISABLED_CLASS]="mdc-deprecated-list-item--disabled",Xt[""+q.LIST_ITEM_SELECTED_CLASS]="mdc-deprecated-list-item--selected",Xt[""+q.LIST_ITEM_TEXT_CLASS]="mdc-deprecated-list-item__text",Xt[""+q.LIST_ITEM_PRIMARY_TEXT_CLASS]="mdc-deprecated-list-item__primary-text",Xt[""+q.ROOT]="mdc-deprecated-list",Xt),gn={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",ARIA_INTERACTIVE_ROLES_SELECTOR:'[role="listbox"], [role="menu"]',ARIA_MULTI_SELECTABLE_SELECTOR:'[aria-multiselectable="true"]',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:`
    .`+q.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+q.LIST_ITEM_CLASS+` a,
    .`+os[q.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+os[q.LIST_ITEM_CLASS]+` a
  `,DEPRECATED_SELECTOR:".mdc-deprecated-list",FOCUSABLE_CHILD_ELEMENTS:`
    .`+q.LIST_ITEM_CLASS+` button:not(:disabled),
    .`+q.LIST_ITEM_CLASS+` a,
    .`+q.LIST_ITEM_CLASS+` input[type="radio"]:not(:disabled),
    .`+q.LIST_ITEM_CLASS+` input[type="checkbox"]:not(:disabled),
    .`+os[q.LIST_ITEM_CLASS]+` button:not(:disabled),
    .`+os[q.LIST_ITEM_CLASS]+` a,
    .`+os[q.LIST_ITEM_CLASS]+` input[type="radio"]:not(:disabled),
    .`+os[q.LIST_ITEM_CLASS]+` input[type="checkbox"]:not(:disabled)
  `,RADIO_SELECTOR:'input[type="radio"]',SELECTED_ITEM_SELECTOR:'[aria-selected="true"], [aria-current="true"]'},Te={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var zT=["input","button","textarea","select"],Fn=function(n){var e=n.target;if(e){var t=(""+e.tagName).toLowerCase();zT.indexOf(t)===-1&&n.preventDefault()}};/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function qT(){var n={bufferClearTimeout:0,currentFirstChar:"",sortedIndexCursor:0,typeaheadBuffer:""};return n}function KT(n,e){for(var t=new Map,s=0;s<n;s++){var i=e(s).trim();if(i){var r=i[0].toLowerCase();t.has(r)||t.set(r,[]),t.get(r).push({text:i.toLowerCase(),index:s})}}return t.forEach(function(a){a.sort(function(o,c){return o.index-c.index})}),t}function ra(n,e){var t=n.nextChar,s=n.focusItemAtIndex,i=n.sortedIndexByFirstChar,r=n.focusedItemIndex,a=n.skipFocus,o=n.isItemAtIndexDisabled;clearTimeout(e.bufferClearTimeout),e.bufferClearTimeout=setTimeout(function(){Lf(e)},Te.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS),e.typeaheadBuffer=e.typeaheadBuffer+t;var c;return e.typeaheadBuffer.length===1?c=GT(i,r,o,e):c=WT(i,o,e),c!==-1&&!a&&s(c),c}function GT(n,e,t,s){var i=s.typeaheadBuffer[0],r=n.get(i);if(!r)return-1;if(i===s.currentFirstChar&&r[s.sortedIndexCursor].index===e){s.sortedIndexCursor=(s.sortedIndexCursor+1)%r.length;var a=r[s.sortedIndexCursor].index;if(!t(a))return a}s.currentFirstChar=i;var o=-1,c;for(c=0;c<r.length;c++)if(!t(r[c].index)){o=c;break}for(;c<r.length;c++)if(r[c].index>e&&!t(r[c].index)){o=c;break}return o!==-1?(s.sortedIndexCursor=o,r[s.sortedIndexCursor].index):-1}function WT(n,e,t){var s=t.typeaheadBuffer[0],i=n.get(s);if(!i)return-1;var r=i[t.sortedIndexCursor];if(r.text.lastIndexOf(t.typeaheadBuffer,0)===0&&!e(r.index))return r.index;for(var a=(t.sortedIndexCursor+1)%i.length,o=-1;a!==t.sortedIndexCursor;){var c=i[a],l=c.text.lastIndexOf(t.typeaheadBuffer,0)===0,u=!e(c.index);if(l&&u){o=a;break}a=(a+1)%i.length}return o!==-1?(t.sortedIndexCursor=o,i[t.sortedIndexCursor].index):-1}function Nf(n){return n.typeaheadBuffer.length>0}function Lf(n){n.typeaheadBuffer=""}function Xl(n,e){var t=n.event,s=n.isTargetListItem,i=n.focusedItemIndex,r=n.focusItemAtIndex,a=n.sortedIndexByFirstChar,o=n.isItemAtIndexDisabled,c=je(t)==="ArrowLeft",l=je(t)==="ArrowUp",u=je(t)==="ArrowRight",h=je(t)==="ArrowDown",d=je(t)==="Home",f=je(t)==="End",g=je(t)==="Enter",m=je(t)==="Spacebar";if(t.ctrlKey||t.metaKey||c||l||u||h||d||f||g)return-1;var p=!m&&t.key.length===1;if(p){Fn(t);var A={focusItemAtIndex:r,focusedItemIndex:i,nextChar:t.key.toLowerCase(),sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return ra(A,e)}if(!m)return-1;s&&Fn(t);var S=s&&Nf(e);if(S){var A={focusItemAtIndex:r,focusedItemIndex:i,nextChar:" ",sortedIndexByFirstChar:a,skipFocus:!1,isItemAtIndexDisabled:o};return ra(A,e)}return-1}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */function XT(n){return n instanceof Array}var QT=function(n){Nn(e,n);function e(t){var s=n.call(this,Sn(Sn({},e.defaultAdapter),t))||this;return s.wrapFocus=!1,s.isVertical=!0,s.isSingleSelectionList=!1,s.selectedIndex=Te.UNSET_INDEX,s.focusedItemIndex=Te.UNSET_INDEX,s.useActivatedClass=!1,s.useSelectedAttr=!1,s.ariaCurrentAttrValue=null,s.isCheckboxList=!1,s.isRadioList=!1,s.hasTypeahead=!1,s.typeaheadState=qT(),s.sortedIndexByFirstChar=new Map,s}return Object.defineProperty(e,"strings",{get:function(){return gn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return q},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return Te},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClassForElementIndex:function(){},focusItemAtIndex:function(){},getAttributeForElementIndex:function(){return null},getFocusedElementIndex:function(){return 0},getListItemCount:function(){return 0},hasCheckboxAtIndex:function(){return!1},hasRadioAtIndex:function(){return!1},isCheckboxCheckedAtIndex:function(){return!1},isFocusInsideList:function(){return!1},isRootFocused:function(){return!1},listItemAtIndexHasClass:function(){return!1},notifyAction:function(){},removeClassForElementIndex:function(){},setAttributeForElementIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},setTabIndexForListItemChildren:function(){},getPrimaryTextAtIndex:function(){return""}}},enumerable:!1,configurable:!0}),e.prototype.layout=function(){this.adapter.getListItemCount()!==0&&(this.adapter.hasCheckboxAtIndex(0)?this.isCheckboxList=!0:this.adapter.hasRadioAtIndex(0)?this.isRadioList=!0:this.maybeInitializeSingleSelection(),this.hasTypeahead&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex()))},e.prototype.getFocusedItemIndex=function(){return this.focusedItemIndex},e.prototype.setWrapFocus=function(t){this.wrapFocus=t},e.prototype.setVerticalOrientation=function(t){this.isVertical=t},e.prototype.setSingleSelection=function(t){this.isSingleSelectionList=t,t&&(this.maybeInitializeSingleSelection(),this.selectedIndex=this.getSelectedIndexFromDOM())},e.prototype.maybeInitializeSingleSelection=function(){var t=this.getSelectedIndexFromDOM();if(t!==Te.UNSET_INDEX){var s=this.adapter.listItemAtIndexHasClass(t,q.LIST_ITEM_ACTIVATED_CLASS);s&&this.setUseActivatedClass(!0),this.isSingleSelectionList=!0,this.selectedIndex=t}},e.prototype.getSelectedIndexFromDOM=function(){for(var t=Te.UNSET_INDEX,s=this.adapter.getListItemCount(),i=0;i<s;i++){var r=this.adapter.listItemAtIndexHasClass(i,q.LIST_ITEM_SELECTED_CLASS),a=this.adapter.listItemAtIndexHasClass(i,q.LIST_ITEM_ACTIVATED_CLASS);if(r||a){t=i;break}}return t},e.prototype.setHasTypeahead=function(t){this.hasTypeahead=t,t&&(this.sortedIndexByFirstChar=this.typeaheadInitSortedIndex())},e.prototype.isTypeaheadInProgress=function(){return this.hasTypeahead&&Nf(this.typeaheadState)},e.prototype.setUseActivatedClass=function(t){this.useActivatedClass=t},e.prototype.setUseSelectedAttribute=function(t){this.useSelectedAttr=t},e.prototype.getSelectedIndex=function(){return this.selectedIndex},e.prototype.setSelectedIndex=function(t,s){var i=s===void 0?{}:s,r=i.forceUpdate;this.isIndexValid(t)&&(this.isCheckboxList?this.setCheckboxAtIndex(t):this.isRadioList?this.setRadioAtIndex(t):this.setSingleSelectionAtIndex(t,{forceUpdate:r}))},e.prototype.handleFocusIn=function(t){t>=0&&(this.focusedItemIndex=t,this.adapter.setAttributeForElementIndex(t,"tabindex","0"),this.adapter.setTabIndexForListItemChildren(t,"0"))},e.prototype.handleFocusOut=function(t){var s=this;t>=0&&(this.adapter.setAttributeForElementIndex(t,"tabindex","-1"),this.adapter.setTabIndexForListItemChildren(t,"-1")),setTimeout(function(){s.adapter.isFocusInsideList()||s.setTabindexToFirstSelectedOrFocusedItem()},0)},e.prototype.handleKeydown=function(t,s,i){var r=this,a=je(t)==="ArrowLeft",o=je(t)==="ArrowUp",c=je(t)==="ArrowRight",l=je(t)==="ArrowDown",u=je(t)==="Home",h=je(t)==="End",d=je(t)==="Enter",f=je(t)==="Spacebar",g=t.key==="A"||t.key==="a";if(this.adapter.isRootFocused()){if(o||h?(t.preventDefault(),this.focusLastElement()):(l||u)&&(t.preventDefault(),this.focusFirstElement()),this.hasTypeahead){var m={event:t,focusItemAtIndex:function(S){r.focusItemAtIndex(S)},focusedItemIndex:-1,isTargetListItem:s,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(S){return r.adapter.listItemAtIndexHasClass(S,q.LIST_ITEM_DISABLED_CLASS)}};Xl(m,this.typeaheadState)}return}var p=this.adapter.getFocusedElementIndex();if(!(p===-1&&(p=i,p<0))){if(this.isVertical&&l||!this.isVertical&&c)Fn(t),this.focusNextElement(p);else if(this.isVertical&&o||!this.isVertical&&a)Fn(t),this.focusPrevElement(p);else if(u)Fn(t),this.focusFirstElement();else if(h)Fn(t),this.focusLastElement();else if(g&&t.ctrlKey&&this.isCheckboxList)t.preventDefault(),this.toggleAll(this.selectedIndex===Te.UNSET_INDEX?[]:this.selectedIndex);else if((d||f)&&s){var A=t.target;if(A&&A.tagName==="A"&&d||(Fn(t),this.adapter.listItemAtIndexHasClass(p,q.LIST_ITEM_DISABLED_CLASS)))return;this.isTypeaheadInProgress()||(this.isSelectableList()&&this.setSelectedIndexOnAction(p),this.adapter.notifyAction(p))}if(this.hasTypeahead){var m={event:t,focusItemAtIndex:function(E){r.focusItemAtIndex(E)},focusedItemIndex:this.focusedItemIndex,isTargetListItem:s,sortedIndexByFirstChar:this.sortedIndexByFirstChar,isItemAtIndexDisabled:function(E){return r.adapter.listItemAtIndexHasClass(E,q.LIST_ITEM_DISABLED_CLASS)}};Xl(m,this.typeaheadState)}}},e.prototype.handleClick=function(t,s){t!==Te.UNSET_INDEX&&(this.adapter.listItemAtIndexHasClass(t,q.LIST_ITEM_DISABLED_CLASS)||(this.isSelectableList()&&this.setSelectedIndexOnAction(t,s),this.adapter.notifyAction(t)))},e.prototype.focusNextElement=function(t){var s=this.adapter.getListItemCount(),i=t+1;if(i>=s)if(this.wrapFocus)i=0;else return t;return this.focusItemAtIndex(i),i},e.prototype.focusPrevElement=function(t){var s=t-1;if(s<0)if(this.wrapFocus)s=this.adapter.getListItemCount()-1;else return t;return this.focusItemAtIndex(s),s},e.prototype.focusFirstElement=function(){return this.focusItemAtIndex(0),0},e.prototype.focusLastElement=function(){var t=this.adapter.getListItemCount()-1;return this.focusItemAtIndex(t),t},e.prototype.focusInitialElement=function(){var t=this.getFirstSelectedOrFocusedItemIndex();return this.focusItemAtIndex(t),t},e.prototype.setEnabled=function(t,s){this.isIndexValid(t)&&(s?(this.adapter.removeClassForElementIndex(t,q.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,gn.ARIA_DISABLED,"false")):(this.adapter.addClassForElementIndex(t,q.LIST_ITEM_DISABLED_CLASS),this.adapter.setAttributeForElementIndex(t,gn.ARIA_DISABLED,"true")))},e.prototype.setSingleSelectionAtIndex=function(t,s){var i=s===void 0?{}:s,r=i.forceUpdate;if(!(this.selectedIndex===t&&!r)){var a=q.LIST_ITEM_SELECTED_CLASS;this.useActivatedClass&&(a=q.LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex!==Te.UNSET_INDEX&&this.adapter.removeClassForElementIndex(this.selectedIndex,a),this.setAriaForSingleSelectionAtIndex(t),this.setTabindexAtIndex(t),t!==Te.UNSET_INDEX&&this.adapter.addClassForElementIndex(t,a),this.selectedIndex=t}},e.prototype.setAriaForSingleSelectionAtIndex=function(t){this.selectedIndex===Te.UNSET_INDEX&&(this.ariaCurrentAttrValue=this.adapter.getAttributeForElementIndex(t,gn.ARIA_CURRENT));var s=this.ariaCurrentAttrValue!==null,i=s?gn.ARIA_CURRENT:gn.ARIA_SELECTED;if(this.selectedIndex!==Te.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,i,"false"),t!==Te.UNSET_INDEX){var r=s?this.ariaCurrentAttrValue:"true";this.adapter.setAttributeForElementIndex(t,i,r)}},e.prototype.getSelectionAttribute=function(){return this.useSelectedAttr?gn.ARIA_SELECTED:gn.ARIA_CHECKED},e.prototype.setRadioAtIndex=function(t){var s=this.getSelectionAttribute();this.adapter.setCheckedCheckboxOrRadioAtIndex(t,!0),this.selectedIndex!==Te.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex,s,"false"),this.adapter.setAttributeForElementIndex(t,s,"true"),this.selectedIndex=t},e.prototype.setCheckboxAtIndex=function(t){for(var s=this.getSelectionAttribute(),i=0;i<this.adapter.getListItemCount();i++){var r=!1;t.indexOf(i)>=0&&(r=!0),this.adapter.setCheckedCheckboxOrRadioAtIndex(i,r),this.adapter.setAttributeForElementIndex(i,s,r?"true":"false")}this.selectedIndex=t},e.prototype.setTabindexAtIndex=function(t){this.focusedItemIndex===Te.UNSET_INDEX&&t!==0?this.adapter.setAttributeForElementIndex(0,"tabindex","-1"):this.focusedItemIndex>=0&&this.focusedItemIndex!==t&&this.adapter.setAttributeForElementIndex(this.focusedItemIndex,"tabindex","-1"),!(this.selectedIndex instanceof Array)&&this.selectedIndex!==t&&this.adapter.setAttributeForElementIndex(this.selectedIndex,"tabindex","-1"),t!==Te.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(t,"tabindex","0")},e.prototype.isSelectableList=function(){return this.isSingleSelectionList||this.isCheckboxList||this.isRadioList},e.prototype.setTabindexToFirstSelectedOrFocusedItem=function(){var t=this.getFirstSelectedOrFocusedItemIndex();this.setTabindexAtIndex(t)},e.prototype.getFirstSelectedOrFocusedItemIndex=function(){return this.isSelectableList()?typeof this.selectedIndex=="number"&&this.selectedIndex!==Te.UNSET_INDEX?this.selectedIndex:XT(this.selectedIndex)&&this.selectedIndex.length>0?this.selectedIndex.reduce(function(t,s){return Math.min(t,s)}):0:Math.max(this.focusedItemIndex,0)},e.prototype.isIndexValid=function(t){var s=this;if(t instanceof Array){if(!this.isCheckboxList)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return t.length===0?!0:t.some(function(i){return s.isIndexInRange(i)})}else if(typeof t=="number"){if(this.isCheckboxList)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+t);return this.isIndexInRange(t)||this.isSingleSelectionList&&t===Te.UNSET_INDEX}else return!1},e.prototype.isIndexInRange=function(t){var s=this.adapter.getListItemCount();return t>=0&&t<s},e.prototype.setSelectedIndexOnAction=function(t,s){s===void 0&&(s=!0),this.isCheckboxList?this.toggleCheckboxAtIndex(t,s):this.setSelectedIndex(t)},e.prototype.toggleCheckboxAtIndex=function(t,s){var i=this.getSelectionAttribute(),r=this.adapter.isCheckboxCheckedAtIndex(t);s&&(r=!r,this.adapter.setCheckedCheckboxOrRadioAtIndex(t,r)),this.adapter.setAttributeForElementIndex(t,i,r?"true":"false");var a=this.selectedIndex===Te.UNSET_INDEX?[]:this.selectedIndex.slice();r?a.push(t):a=a.filter(function(o){return o!==t}),this.selectedIndex=a},e.prototype.focusItemAtIndex=function(t){this.adapter.focusItemAtIndex(t),this.focusedItemIndex=t},e.prototype.toggleAll=function(t){var s=this.adapter.getListItemCount();if(t.length===s)this.setCheckboxAtIndex([]);else{for(var i=[],r=0;r<s;r++)(!this.adapter.listItemAtIndexHasClass(r,q.LIST_ITEM_DISABLED_CLASS)||t.indexOf(r)>-1)&&i.push(r);this.setCheckboxAtIndex(i)}},e.prototype.typeaheadMatchItem=function(t,s,i){var r=this;i===void 0&&(i=!1);var a={focusItemAtIndex:function(o){r.focusItemAtIndex(o)},focusedItemIndex:s||this.focusedItemIndex,nextChar:t,sortedIndexByFirstChar:this.sortedIndexByFirstChar,skipFocus:i,isItemAtIndexDisabled:function(o){return r.adapter.listItemAtIndexHasClass(o,q.LIST_ITEM_DISABLED_CLASS)}};return ra(a,this.typeaheadState)},e.prototype.typeaheadInitSortedIndex=function(){return KT(this.adapter.getListItemCount(),this.adapter.getPrimaryTextAtIndex)},e.prototype.clearTypeaheadBuffer=function(){Lf(this.typeaheadState)},e}(aa);/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ot={ANIMATE:"mdc-drawer--animate",CLOSING:"mdc-drawer--closing",DISMISSIBLE:"mdc-drawer--dismissible",MODAL:"mdc-drawer--modal",OPEN:"mdc-drawer--open",OPENING:"mdc-drawer--opening",ROOT:"mdc-drawer"},YT={APP_CONTENT_SELECTOR:".mdc-drawer-app-content",CLOSE_EVENT:"MDCDrawer:closed",OPEN_EVENT:"MDCDrawer:opened",SCRIM_SELECTOR:".mdc-drawer-scrim",LIST_SELECTOR:".mdc-list,.mdc-deprecated-list",LIST_ITEM_ACTIVATED_SELECTOR:".mdc-list-item--activated,.mdc-deprecated-list-item--activated"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Mf=function(n){Nn(e,n);function e(t){var s=n.call(this,Sn(Sn({},e.defaultAdapter),t))||this;return s.animationFrame=0,s.animationTimer=0,s}return Object.defineProperty(e,"strings",{get:function(){return YT},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return ot},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},elementHasClass:function(){return!1},notifyClose:function(){},notifyOpen:function(){},saveFocus:function(){},restoreFocus:function(){},focusActiveNavigationItem:function(){},trapFocus:function(){},releaseFocus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.destroy=function(){this.animationFrame&&cancelAnimationFrame(this.animationFrame),this.animationTimer&&clearTimeout(this.animationTimer)},e.prototype.open=function(){var t=this;this.isOpen()||this.isOpening()||this.isClosing()||(this.adapter.addClass(ot.OPEN),this.adapter.addClass(ot.ANIMATE),this.runNextAnimationFrame(function(){t.adapter.addClass(ot.OPENING)}),this.adapter.saveFocus())},e.prototype.close=function(){!this.isOpen()||this.isOpening()||this.isClosing()||this.adapter.addClass(ot.CLOSING)},e.prototype.isOpen=function(){return this.adapter.hasClass(ot.OPEN)},e.prototype.isOpening=function(){return this.adapter.hasClass(ot.OPENING)||this.adapter.hasClass(ot.ANIMATE)},e.prototype.isClosing=function(){return this.adapter.hasClass(ot.CLOSING)},e.prototype.handleKeydown=function(t){var s=t.keyCode,i=t.key,r=i==="Escape"||s===27;r&&this.close()},e.prototype.handleTransitionEnd=function(t){var s=ot.OPENING,i=ot.CLOSING,r=ot.OPEN,a=ot.ANIMATE,o=ot.ROOT,c=this.isElement(t.target)&&this.adapter.elementHasClass(t.target,o);c&&(this.isClosing()?(this.adapter.removeClass(r),this.closed(),this.adapter.restoreFocus(),this.adapter.notifyClose()):(this.adapter.focusActiveNavigationItem(),this.opened(),this.adapter.notifyOpen()),this.adapter.removeClass(a),this.adapter.removeClass(s),this.adapter.removeClass(i))},e.prototype.opened=function(){},e.prototype.closed=function(){},e.prototype.runNextAnimationFrame=function(t){var s=this;cancelAnimationFrame(this.animationFrame),this.animationFrame=requestAnimationFrame(function(){s.animationFrame=0,clearTimeout(s.animationTimer),s.animationTimer=setTimeout(t,0)})},e.prototype.isElement=function(t){return Boolean(t.classList)},e}(aa);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var JT=function(n){Nn(e,n);function e(){return n!==null&&n.apply(this,arguments)||this}return e.prototype.handleScrimClick=function(){this.close()},e.prototype.opened=function(){this.adapter.trapFocus()},e.prototype.closed=function(){this.adapter.releaseFocus()},e}(Mf);function ZT(n){let e,t,s,i,r,a;const o=n[15].default,c=ut(o,n,n[14],null);let l=[{class:t=lt({[n[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":n[2]==="dismissible","mdc-drawer--modal":n[2]==="modal","smui-drawer__absolute":n[2]==="modal"&&!n[3],...n[6]})},n[8]],u={};for(let h=0;h<l.length;h+=1)u=x(u,l[h]);return{c(){e=Rt("aside"),c&&c.c(),this.h()},l(h){e=kt(h,"ASIDE",{class:!0});var d=Dt(e);c&&c.l(d),d.forEach(H),this.h()},h(){Tt(e,u)},m(h,d){se(h,e,d),c&&c.m(e,null),n[16](e),i=!0,r||(a=[ct(s=ca.call(null,e,n[0])),ct(n[7].call(null,e)),Hn(e,"keydown",n[17]),Hn(e,"transitionend",n[18])],r=!0)},p(h,[d]){c&&c.p&&(!i||d&16384)&&ht(c,o,h,h[14],i?ft(o,h[14],d,null):dt(h[14]),null),Tt(e,u=st(l,[(!i||d&78&&t!==(t=lt({[h[1]]:!0,"mdc-drawer":!0,"mdc-drawer--dismissible":h[2]==="dismissible","mdc-drawer--modal":h[2]==="modal","smui-drawer__absolute":h[2]==="modal"&&!h[3],...h[6]})))&&{class:t},d&256&&h[8]])),s&&es(s.update)&&d&1&&s.update.call(null,h[0])},i(h){i||(W(c,h),i=!0)},o(h){X(c,h),i=!1},d(h){h&&H(e),c&&c.d(h),n[16](null),r=!1,ts(a)}}}function $T(n,e,t){const s=["use","class","variant","open","fixed","setOpen","isOpen","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e;const{FocusTrap:o}=ym,c=un(mt());let{use:l=[]}=e,{class:u=""}=e,{variant:h=void 0}=e,{open:d=!1}=e,{fixed:f=!0}=e,g,m,p={},A=null,S,E=!1;De("SMUI:list:nav",!0),De("SMUI:list:item:nav",!0),De("SMUI:list:wrapFocus",!0);let b=h;wr(()=>{S=new o(g,{skipInitialFocus:!0}),t(4,m=w()),m&&m.init()}),ws(()=>{m&&m.destroy(),E&&E.removeEventListener("SMUIDrawerScrim:click",ae)});function w(){var D,pe;E&&E.removeEventListener("SMUIDrawerScrim:click",ae),h==="modal"&&(E=(pe=(D=g.parentNode)===null||D===void 0?void 0:D.querySelector(".mdc-drawer-scrim"))!==null&&pe!==void 0?pe:!1,E&&E.addEventListener("SMUIDrawerScrim:click",ae));const It=h==="dismissible"?Mf:h==="modal"?JT:void 0;return It?new It({addClass:ee,removeClass:oe,hasClass:K,elementHasClass:(xe,wt)=>xe.classList.contains(wt),saveFocus:()=>A=document.activeElement,restoreFocus:()=>{A&&"focus"in A&&g.contains(document.activeElement)&&A.focus()},focusActiveNavigationItem:()=>{const xe=g.querySelector(".mdc-list-item--activated,.mdc-deprecated-list-item--activated");xe&&xe.focus()},notifyClose:()=>{t(9,d=!1),tn(g,"SMUIDrawer:closed",void 0,void 0,!0)},notifyOpen:()=>{t(9,d=!0),tn(g,"SMUIDrawer:opened",void 0,void 0,!0)},trapFocus:()=>S.trapFocus(),releaseFocus:()=>S.releaseFocus()}):void 0}function K(D){return D in p?p[D]:ue().classList.contains(D)}function ee(D){p[D]||t(6,p[D]=!0,p)}function oe(D){(!(D in p)||p[D])&&t(6,p[D]=!1,p)}function ae(){m&&"handleScrimClick"in m&&m.handleScrimClick()}function G(D){t(9,d=D)}function Z(){return d}function ue(){return g}function ce(D){$e[D?"unshift":"push"](()=>{g=D,t(5,g)})}const Y=D=>m&&m.handleKeydown(D),z=D=>m&&m.handleTransitionEnd(D);return n.$$set=D=>{e=x(x({},e),pt(D)),t(8,i=ie(e,s)),"use"in D&&t(0,l=D.use),"class"in D&&t(1,u=D.class),"variant"in D&&t(2,h=D.variant),"open"in D&&t(9,d=D.open),"fixed"in D&&t(3,f=D.fixed),"$$scope"in D&&t(14,a=D.$$scope)},n.$$.update=()=>{n.$$.dirty&8212&&b!==h&&(t(13,b=h),m&&m.destroy(),t(6,p={}),t(4,m=w()),m&&m.init()),n.$$.dirty&528&&m&&m.isOpen()!==d&&(d?m.open():m.close())},[l,u,h,f,m,g,p,c,i,d,G,Z,ue,b,a,r,ce,Y,z]}class cA extends tt{constructor(e){super(),nt(this,e,$T,ZT,Fe,{use:0,class:1,variant:2,open:9,fixed:3,setOpen:10,isOpen:11,getElement:12})}get setOpen(){return this.$$.ctx[10]}get isOpen(){return this.$$.ctx[11]}get getElement(){return this.$$.ctx[12]}}function ew(n){let e;const t=n[10].default,s=ut(t,n,n[12],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&4096)&&ht(s,t,i,i[12],e?ft(t,i[12],r,null):dt(i[12]),null)},i(i){e||(W(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function tw(n){let e,t,s;const i=[{use:[n[7],...n[0]]},{class:lt({[n[1]]:!0,[n[5]]:!0,...n[4]})},n[6],n[8]];var r=n[2];function a(o){let c={$$slots:{default:[ew]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[11](e)),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,[c]){const l=c&499?st(i,[c&129&&{use:[o[7],...o[0]]},c&50&&{class:lt({[o[1]]:!0,[o[5]]:!0,...o[4]})},c&64&&be(o[6]),c&256&&be(o[8])]):{};if(c&4096&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[2])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[11](e),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[11](null),o&&H(t),e&&Le(e,o)}}}const En={component:im,class:"",classMap:{},contexts:{},props:{}};function nw(n,e,t){const s=["use","class","component","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{class:c=""}=e,l;const u=En.class,h={},d=[],f=En.contexts,g=En.props;let{component:m=En.component}=e;Object.entries(En.classMap).forEach(([E,b])=>{const w=Je(b);w&&"subscribe"in w&&d.push(w.subscribe(K=>{t(4,h[E]=K,h)}))});const p=un(mt());for(let E in f)f.hasOwnProperty(E)&&De(E,f[E]);ws(()=>{for(const E of d)E()});function A(){return l.getElement()}function S(E){$e[E?"unshift":"push"](()=>{l=E,t(3,l)})}return n.$$set=E=>{e=x(x({},e),pt(E)),t(8,i=ie(e,s)),"use"in E&&t(0,o=E.use),"class"in E&&t(1,c=E.class),"component"in E&&t(2,m=E.component),"$$scope"in E&&t(12,a=E.$$scope)},[o,c,m,l,h,u,g,p,i,A,r,S,a]}let sw=class extends tt{constructor(e){super(),nt(this,e,nw,tw,Fe,{use:0,class:1,component:2,getElement:9})}get getElement(){return this.$$.ctx[9]}};const Ql=Object.assign({},En);function Ot(n){return new Proxy(sw,{construct:function(e,t){return Object.assign(En,Ql,n),new e(...t)},get:function(e,t){return Object.assign(En,Ql,n),e[t]}})}const uA=Ot({class:"mdc-drawer-app-content",component:Ar}),hA=Ot({class:"mdc-drawer__content",component:Ar}),dA=Ot({class:"mdc-drawer__header",component:Ar}),fA=Ot({class:"mdc-drawer__title",component:rm});Ot({class:"mdc-drawer__subtitle",component:om});/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var iw=function(){function n(e){e===void 0&&(e={}),this.adapter=e}return Object.defineProperty(n,"cssClasses",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"strings",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"numbers",{get:function(){return{}},enumerable:!1,configurable:!0}),Object.defineProperty(n,"defaultAdapter",{get:function(){return{}},enumerable:!1,configurable:!0}),n.prototype.init=function(){},n.prototype.destroy=function(){},n}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var jn={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},er={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},rw={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _c=function(n){Nn(e,n);function e(t){return n.call(this,Sn(Sn({},e.defaultAdapter),t))||this}return Object.defineProperty(e,"strings",{get:function(){return rw},enumerable:!1,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return jn},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return er},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.handleTargetScroll=function(){},e.prototype.handleWindowResize=function(){},e.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},e}(iw);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ki=0,oa=function(n){Nn(e,n);function e(t){var s=n.call(this,t)||this;return s.wasDocked=!0,s.isDockedShowing=!0,s.currentAppBarOffsetTop=0,s.isCurrentlyBeingResized=!1,s.resizeThrottleId=Ki,s.resizeDebounceId=Ki,s.lastScrollPosition=s.adapter.getViewportScrollY(),s.topAppBarHeight=s.adapter.getTopAppBarHeight(),s}return e.prototype.destroy=function(){n.prototype.destroy.call(this),this.adapter.setStyle("top","")},e.prototype.handleTargetScroll=function(){var t=Math.max(this.adapter.getViewportScrollY(),0),s=t-this.lastScrollPosition;this.lastScrollPosition=t,this.isCurrentlyBeingResized||(this.currentAppBarOffsetTop-=s,this.currentAppBarOffsetTop>0?this.currentAppBarOffsetTop=0:Math.abs(this.currentAppBarOffsetTop)>this.topAppBarHeight&&(this.currentAppBarOffsetTop=-this.topAppBarHeight),this.moveTopAppBar())},e.prototype.handleWindowResize=function(){var t=this;this.resizeThrottleId||(this.resizeThrottleId=setTimeout(function(){t.resizeThrottleId=Ki,t.throttledResizeHandler()},er.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized=!0,this.resizeDebounceId&&clearTimeout(this.resizeDebounceId),this.resizeDebounceId=setTimeout(function(){t.handleTargetScroll(),t.isCurrentlyBeingResized=!1,t.resizeDebounceId=Ki},er.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},e.prototype.checkForUpdate=function(){var t=-this.topAppBarHeight,s=this.currentAppBarOffsetTop<0,i=this.currentAppBarOffsetTop>t,r=s&&i;if(r)this.wasDocked=!1;else if(this.wasDocked){if(this.isDockedShowing!==i)return this.isDockedShowing=i,!0}else return this.wasDocked=!0,!0;return r},e.prototype.moveTopAppBar=function(){if(this.checkForUpdate()){var t=this.currentAppBarOffsetTop;Math.abs(t)>=this.topAppBarHeight&&(t=-er.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",t+"px")}},e.prototype.throttledResizeHandler=function(){var t=this.adapter.getTopAppBarHeight();this.topAppBarHeight!==t&&(this.wasDocked=!1,this.currentAppBarOffsetTop-=this.topAppBarHeight-t,this.topAppBarHeight=t),this.handleTargetScroll()},e}(_c);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ow=function(n){Nn(e,n);function e(){var t=n!==null&&n.apply(this,arguments)||this;return t.wasScrolled=!1,t}return e.prototype.handleTargetScroll=function(){var t=this.adapter.getViewportScrollY();t<=0?this.wasScrolled&&(this.adapter.removeClass(jn.FIXED_SCROLLED_CLASS),this.wasScrolled=!1):this.wasScrolled||(this.adapter.addClass(jn.FIXED_SCROLLED_CLASS),this.wasScrolled=!0)},e}(oa);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var aw=function(n){Nn(e,n);function e(t){var s=n.call(this,t)||this;return s.collapsed=!1,s.isAlwaysCollapsed=!1,s}return Object.defineProperty(e.prototype,"isCollapsed",{get:function(){return this.collapsed},enumerable:!1,configurable:!0}),e.prototype.init=function(){n.prototype.init.call(this),this.adapter.getTotalActionItems()>0&&this.adapter.addClass(jn.SHORT_HAS_ACTION_ITEM_CLASS),this.setAlwaysCollapsed(this.adapter.hasClass(jn.SHORT_COLLAPSED_CLASS))},e.prototype.setAlwaysCollapsed=function(t){this.isAlwaysCollapsed=!!t,this.isAlwaysCollapsed?this.collapse():this.maybeCollapseBar()},e.prototype.getAlwaysCollapsed=function(){return this.isAlwaysCollapsed},e.prototype.handleTargetScroll=function(){this.maybeCollapseBar()},e.prototype.maybeCollapseBar=function(){if(!this.isAlwaysCollapsed){var t=this.adapter.getViewportScrollY();t<=0?this.collapsed&&this.uncollapse():this.collapsed||this.collapse()}},e.prototype.uncollapse=function(){this.adapter.removeClass(jn.SHORT_COLLAPSED_CLASS),this.collapsed=!1},e.prototype.collapse=function(){this.adapter.addClass(jn.SHORT_COLLAPSED_CLASS),this.collapsed=!0},e}(_c);function On(n){return Object.entries(n).filter(([e,t])=>e!==""&&t).map(([e])=>e).join(" ")}function cw(n,e,t,s={bubbles:!0},i=!1){if(typeof Event<"u"&&n){const r=new CustomEvent(e,Object.assign(Object.assign({},s),{detail:t}));if(n==null||n.dispatchEvent(r),i&&e.startsWith("SMUI")){const a=new CustomEvent(e.replace(/^SMUI/g,()=>"MDC"),Object.assign(Object.assign({},s),{detail:t}));n==null||n.dispatchEvent(a),a.defaultPrevented&&r.preventDefault()}return r}}const Yl=/^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/,lw=/^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;function Oi(n){let e,t=[];n.$on=(i,r)=>{let a=i,o=()=>{};return e?o=e(a,r):t.push([a,r]),a.match(Yl)&&console&&console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ',a),()=>{o()}};function s(i){Gf(n,i)}return i=>{const r=[],a={};e=(o,c)=>{let l=o,u=c,h=!1;const d=l.match(Yl),f=l.match(lw),g=d||f;if(l.match(/^SMUI:\w+:/)){const A=l.split(":");let S="";for(let E=0;E<A.length;E++)S+=E===A.length-1?":"+A[E]:A[E].split("-").map(b=>b.slice(0,1).toUpperCase()+b.slice(1)).join("");console.warn(`The event ${l.split("$")[0]} has been renamed to ${S.split("$")[0]}.`),l=S}if(g){const A=l.split(d?":":"$");l=A[0];const S=A.slice(1).reduce((E,b)=>(E[b]=!0,E),{});S.passive&&(h=h||{},h.passive=!0),S.nonpassive&&(h=h||{},h.passive=!1),S.capture&&(h=h||{},h.capture=!0),S.once&&(h=h||{},h.once=!0),S.preventDefault&&(u=Wf(u)),S.stopPropagation&&(u=Xf(u))}const m=Hn(i,l,u,h),p=()=>{m();const A=r.indexOf(p);A>-1&&r.splice(A,1)};return r.push(p),l in a||(a[l]=Hn(i,l,s)),p};for(let o=0;o<t.length;o++)e(t[o][0],t[o][1]);return{destroy:()=>{for(let o=0;o<r.length;o++)r[o]();for(let o of Object.entries(a))o[1]()}}}}function io(n,e){let t=[];if(e)for(let s=0;s<e.length;s++){const i=e[s],r=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?t.push(r(n,i[1])):t.push(r(n))}return{update(s){if((s&&s.length||0)!=t.length)throw new Error("You must not change the length of an actions array.");if(s)for(let i=0;i<s.length;i++){const r=t[i];if(r&&r.update){const a=s[i];Array.isArray(a)&&a.length>1?r.update(a[1]):r.update()}}},destroy(){for(let s=0;s<t.length;s++){const i=t[s];i&&i.destroy&&i.destroy()}}}}const{window:Jl}=Qf;function uw(n){let e,t,s,i,r,a,o;const c=n[22].default,l=ut(c,n,n[21],null);let u=[{class:t=On({[n[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":n[4]==="short","mdc-top-app-bar--short-collapsed":n[0],"mdc-top-app-bar--fixed":n[4]==="fixed","smui-top-app-bar--static":n[4]==="static","smui-top-app-bar--color-secondary":n[5]==="secondary","mdc-top-app-bar--prominent":n[6],"mdc-top-app-bar--dense":n[7],...n[11]})},{style:s=Object.entries(n[12]).map(Zl).concat([n[3]]).join(" ")},n[15]],h={};for(let d=0;d<u.length;d+=1)h=x(h,u[d]);return{c(){e=Rt("header"),l&&l.c(),this.h()},l(d){e=kt(d,"HEADER",{class:!0,style:!0});var f=Dt(e);l&&l.l(f),f.forEach(H),this.h()},h(){Tt(e,h)},m(d,f){se(d,e,f),l&&l.m(e,null),n[25](e),r=!0,a||(o=[Hn(Jl,"resize",n[23]),Hn(Jl,"scroll",n[24]),ct(i=io.call(null,e,n[1])),ct(n[13].call(null,e)),Hn(e,"SMUITopAppBarIconButton:nav",n[26])],a=!0)},p(d,f){l&&l.p&&(!r||f[0]&2097152)&&ht(l,c,d,d[21],r?ft(c,d[21],f,null):dt(d[21]),null),Tt(e,h=st(u,[(!r||f[0]&2293&&t!==(t=On({[d[2]]:!0,"mdc-top-app-bar":!0,"mdc-top-app-bar--short":d[4]==="short","mdc-top-app-bar--short-collapsed":d[0],"mdc-top-app-bar--fixed":d[4]==="fixed","smui-top-app-bar--static":d[4]==="static","smui-top-app-bar--color-secondary":d[5]==="secondary","mdc-top-app-bar--prominent":d[6],"mdc-top-app-bar--dense":d[7],...d[11]})))&&{class:t},(!r||f[0]&4104&&s!==(s=Object.entries(d[12]).map(Zl).concat([d[3]]).join(" ")))&&{style:s},f[0]&32768&&d[15]])),i&&es(i.update)&&f[0]&2&&i.update.call(null,d[1])},i(d){r||(W(l,d),r=!0)},o(d){X(l,d),r=!1},d(d){d&&H(e),l&&l.d(d),n[25](null),a=!1,ts(o)}}}const Zl=([n,e])=>`${n}: ${e};`;function hw(n,e,t){const s=["use","class","style","variant","color","collapsed","prominent","dense","scrollTarget","getPropStore","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e;const o=Oi(mt());let c=()=>{};function l(N){return N===c}let{use:u=[]}=e,{class:h=""}=e,{style:d=""}=e,{variant:f="standard"}=e,{color:g="primary"}=e,{collapsed:m=c}=e;const p=!l(m)&&!!m;l(m)&&(m=!1);let{prominent:A=!1}=e,{dense:S=!1}=e,{scrollTarget:E=void 0}=e,b,w,K={},ee={},oe,ae=mm({variant:f,prominent:A,dense:S},N=>{t(18,oe=N)}),G,Z=f;wr(()=>(t(9,w=ue()),w.init(),()=>{w.destroy()}));function ue(){const N={static:_c,short:aw,fixed:ow,standard:oa}[f]||oa;return new N({hasClass:ce,addClass:Y,removeClass:z,setStyle:D,getTopAppBarHeight:()=>b.clientHeight,notifyNavigationIconClicked:()=>cw(b,"SMUITopAppBar:nav",void 0,void 0,!0),getViewportScrollY:()=>E==null?window.pageYOffset:E.scrollTop,getTotalActionItems:()=>b.querySelectorAll(".mdc-top-app-bar__action-item").length})}function ce(N){return N in K?K[N]:xe().classList.contains(N)}function Y(N){K[N]||t(11,K[N]=!0,K)}function z(N){(!(N in K)||K[N])&&t(11,K[N]=!1,K)}function D(N,Nt){ee[N]!=Nt&&(Nt===""||Nt==null?(delete ee[N],t(12,ee),t(20,Z),t(4,f),t(9,w)):t(12,ee[N]=Nt,ee))}function pe(){w&&(w.handleTargetScroll(),f==="short"&&t(0,m="isCollapsed"in w&&w.isCollapsed))}function It(){return ae}function xe(){return b}const wt=()=>f!=="short"&&f!=="fixed"&&w&&w.handleWindowResize(),Kt=()=>E==null&&pe();function Gt(N){$e[N?"unshift":"push"](()=>{b=N,t(10,b)})}const hn=()=>w&&w.handleNavigationClick();return n.$$set=N=>{e=x(x({},e),pt(N)),t(15,i=ie(e,s)),"use"in N&&t(1,u=N.use),"class"in N&&t(2,h=N.class),"style"in N&&t(3,d=N.style),"variant"in N&&t(4,f=N.variant),"color"in N&&t(5,g=N.color),"collapsed"in N&&t(0,m=N.collapsed),"prominent"in N&&t(6,A=N.prominent),"dense"in N&&t(7,S=N.dense),"scrollTarget"in N&&t(8,E=N.scrollTarget),"$$scope"in N&&t(21,a=N.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&262352&&oe&&oe({variant:f,prominent:A,dense:S}),n.$$.dirty[0]&1049104&&Z!==f&&w&&(t(20,Z=f),w.destroy(),t(11,K={}),t(12,ee={}),t(9,w=ue()),w.init()),n.$$.dirty[0]&528&&w&&f==="short"&&"setAlwaysCollapsed"in w&&w.setAlwaysCollapsed(p),n.$$.dirty[0]&524544&&G!==E&&(G&&G.removeEventListener("scroll",pe),E&&E.addEventListener("scroll",pe),t(19,G=E))},[m,u,h,d,f,g,A,S,E,w,b,K,ee,o,pe,i,It,xe,oe,G,Z,a,r,wt,Kt,Gt,hn]}class mA extends tt{constructor(e){super(),nt(this,e,hw,uw,Fe,{use:1,class:2,style:3,variant:4,color:5,collapsed:0,prominent:6,dense:7,scrollTarget:8,getPropStore:16,getElement:17},null,[-1,-1])}get getPropStore(){return this.$$.ctx[16]}get getElement(){return this.$$.ctx[17]}}function dw(n){let e=n[1],t,s,i=n[1]&&So(n);return{c(){i&&i.c(),t=re()},l(r){i&&i.l(r),t=re()},m(r,a){i&&i.m(r,a),se(r,t,a),s=!0},p(r,a){r[1]?e?Fe(e,r[1])?(i.d(1),i=So(r),i.c(),i.m(t.parentNode,t)):i.p(r,a):(i=So(r),i.c(),i.m(t.parentNode,t)):e&&(i.d(1),i=null),e=r[1]},i(r){s||(W(i),s=!0)},o(r){X(i),s=!1},d(r){r&&H(t),i&&i.d(r)}}}function fw(n){let e=n[1],t,s=n[1]&&Co(n);return{c(){s&&s.c(),t=re()},l(i){s&&s.l(i),t=re()},m(i,r){s&&s.m(i,r),se(i,t,r)},p(i,r){i[1]?e?Fe(e,i[1])?(s.d(1),s=Co(i),s.c(),s.m(t.parentNode,t)):s.p(i,r):(s=Co(i),s.c(),s.m(t.parentNode,t)):e&&(s.d(1),s=null),e=i[1]},i:Ro,o:Ro,d(i){i&&H(t),s&&s.d(i)}}}function So(n){let e,t,s,i,r;const a=n[8].default,o=ut(a,n,n[7],null);let c=[n[5]],l={};for(let u=0;u<c.length;u+=1)l=x(l,c[u]);return{c(){e=Rt(n[1]),o&&o.c(),this.h()},l(u){e=kt(u,(n[1]||"null").toUpperCase(),{});var h=Dt(e);o&&o.l(h),h.forEach(H),this.h()},h(){/-/.test(n[1])?tr(e,l):Tt(e,l)},m(u,h){se(u,e,h),o&&o.m(e,null),n[10](e),s=!0,i||(r=[ct(t=io.call(null,e,n[0])),ct(n[4].call(null,e))],i=!0)},p(u,h){o&&o.p&&(!s||h&128)&&ht(o,a,u,u[7],s?ft(a,u[7],h,null):dt(u[7]),null),l=st(c,[h&32&&u[5]]),/-/.test(u[1])?tr(e,l):Tt(e,l),t&&es(t.update)&&h&1&&t.update.call(null,u[0])},i(u){s||(W(o,u),s=!0)},o(u){X(o,u),s=!1},d(u){u&&H(e),o&&o.d(u),n[10](null),i=!1,ts(r)}}}function Co(n){let e,t,s,i,r=[n[5]],a={};for(let o=0;o<r.length;o+=1)a=x(a,r[o]);return{c(){e=Rt(n[1]),this.h()},l(o){e=kt(o,(n[1]||"null").toUpperCase(),{}),Dt(e).forEach(H),this.h()},h(){/-/.test(n[1])?tr(e,a):Tt(e,a)},m(o,c){se(o,e,c),n[9](e),s||(i=[ct(t=io.call(null,e,n[0])),ct(n[4].call(null,e))],s=!0)},p(o,c){a=st(r,[c&32&&o[5]]),/-/.test(o[1])?tr(e,a):Tt(e,a),t&&es(t.update)&&c&1&&t.update.call(null,o[0])},d(o){o&&H(e),n[9](null),s=!1,ts(i)}}}function mw(n){let e,t,s,i;const r=[fw,dw],a=[];function o(c,l){return c[3]?0:1}return e=o(n),t=a[e]=r[e](n),{c(){t.c(),s=re()},l(c){t.l(c),s=re()},m(c,l){a[e].m(c,l),se(c,s,l),i=!0},p(c,[l]){let u=e;e=o(c),e===u?a[e].p(c,l):(Ht(),X(a[u],1,1,()=>{a[u]=null}),zt(),t=a[e],t?t.p(c,l):(t=a[e]=r[e](c),t.c()),W(t,1),t.m(s.parentNode,s))},i(c){i||(W(t),i=!0)},o(c){X(t),i=!1},d(c){a[e].d(c),c&&H(s)}}}function pw(n,e,t){let s;const i=["use","tag","getElement"];let r=ie(e,i),{$$slots:a={},$$scope:o}=e,{use:c=[]}=e,{tag:l}=e;const u=Oi(mt());let h;function d(){return h}function f(m){$e[m?"unshift":"push"](()=>{h=m,t(2,h)})}function g(m){$e[m?"unshift":"push"](()=>{h=m,t(2,h)})}return n.$$set=m=>{e=x(x({},e),pt(m)),t(5,r=ie(e,i)),"use"in m&&t(0,c=m.use),"tag"in m&&t(1,l=m.tag),"$$scope"in m&&t(7,o=m.$$scope)},n.$$.update=()=>{n.$$.dirty&2&&t(3,s=["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"].indexOf(l)>-1)},[c,l,h,s,u,r,d,o,a,f,g]}class Tr extends tt{constructor(e){super(),nt(this,e,pw,mw,Fe,{use:0,tag:1,getElement:6})}get getElement(){return this.$$.ctx[6]}}function gw(n){let e;const t=n[11].default,s=ut(t,n,n[13],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&8192)&&ht(s,t,i,i[13],e?ft(t,i[13],r,null):dt(i[13]),null)},i(i){e||(W(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function yw(n){let e,t,s;const i=[{tag:n[3]},{use:[n[8],...n[0]]},{class:On({[n[1]]:!0,[n[6]]:!0,...n[5]})},n[7],n[9]];var r=n[2];function a(o){let c={$$slots:{default:[gw]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[12](e)),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,[c]){const l=c&1003?st(i,[c&8&&{tag:o[3]},c&257&&{use:[o[8],...o[0]]},c&98&&{class:On({[o[1]]:!0,[o[6]]:!0,...o[5]})},c&128&&be(o[7]),c&512&&be(o[9])]):{};if(c&8192&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[2])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[12](e),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[12](null),o&&H(t),e&&Le(e,o)}}}const Qt={component:Tr,tag:"div",class:"",classMap:{},contexts:{},props:{}};function _w(n,e,t){const s=["use","class","component","tag","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e,{use:o=[]}=e,{class:c=""}=e,l;const u=Qt.class,h={},d=[],f=Qt.contexts,g=Qt.props;let{component:m=Qt.component}=e,{tag:p=m===Tr?Qt.tag:void 0}=e;Object.entries(Qt.classMap).forEach(([b,w])=>{const K=Je(w);K&&"subscribe"in K&&d.push(K.subscribe(ee=>{t(5,h[b]=ee,h)}))});const A=Oi(mt());for(let b in f)f.hasOwnProperty(b)&&De(b,f[b]);ws(()=>{for(const b of d)b()});function S(){return l.getElement()}function E(b){$e[b?"unshift":"push"](()=>{l=b,t(4,l)})}return n.$$set=b=>{e=x(x({},e),pt(b)),t(9,i=ie(e,s)),"use"in b&&t(0,o=b.use),"class"in b&&t(1,c=b.class),"component"in b&&t(2,m=b.component),"tag"in b&&t(3,p=b.tag),"$$scope"in b&&t(13,a=b.$$scope)},[o,c,m,p,l,h,u,g,A,i,S,r,E,a]}class vw extends tt{constructor(e){super(),nt(this,e,_w,yw,Fe,{use:0,class:1,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}const $l=Object.assign({},Qt);function Pf(n){return new Proxy(vw,{construct:function(e,t){return Object.assign(Qt,$l,n),new e(...t)},get:function(e,t){return Object.assign(Qt,$l,n),e[t]}})}const pA=Pf({class:"mdc-top-app-bar__row",tag:"div"});function Iw(n){let e,t,s,i,r,a;const o=n[9].default,c=ut(o,n,n[8],null);let l=[{class:t=On({[n[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":n[2]==="start","mdc-top-app-bar__section--align-end":n[2]==="end"})},n[3]?{role:"toolbar"}:{},n[6]],u={};for(let h=0;h<l.length;h+=1)u=x(u,l[h]);return{c(){e=Rt("section"),c&&c.c(),this.h()},l(h){e=kt(h,"SECTION",{class:!0});var d=Dt(e);c&&c.l(d),d.forEach(H),this.h()},h(){Tt(e,u)},m(h,d){se(h,e,d),c&&c.m(e,null),n[10](e),i=!0,r||(a=[ct(s=io.call(null,e,n[0])),ct(n[5].call(null,e))],r=!0)},p(h,[d]){c&&c.p&&(!i||d&256)&&ht(c,o,h,h[8],i?ft(o,h[8],d,null):dt(h[8]),null),Tt(e,u=st(l,[(!i||d&6&&t!==(t=On({[h[1]]:!0,"mdc-top-app-bar__section":!0,"mdc-top-app-bar__section--align-start":h[2]==="start","mdc-top-app-bar__section--align-end":h[2]==="end"})))&&{class:t},d&8&&(h[3]?{role:"toolbar"}:{}),d&64&&h[6]])),s&&es(s.update)&&d&1&&s.update.call(null,h[0])},i(h){i||(W(c,h),i=!0)},o(h){X(c,h),i=!1},d(h){h&&H(e),c&&c.d(h),n[10](null),r=!1,ts(a)}}}function Ew(n,e,t){const s=["use","class","align","toolbar","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e;const o=Oi(mt());let{use:c=[]}=e,{class:l=""}=e,{align:u="start"}=e,{toolbar:h=!1}=e,d;De("SMUI:icon-button:context",h?"top-app-bar:action":"top-app-bar:navigation"),De("SMUI:button:context",h?"top-app-bar:action":"top-app-bar:navigation");function f(){return d}function g(m){$e[m?"unshift":"push"](()=>{d=m,t(4,d)})}return n.$$set=m=>{e=x(x({},e),pt(m)),t(6,i=ie(e,s)),"use"in m&&t(0,c=m.use),"class"in m&&t(1,l=m.class),"align"in m&&t(2,u=m.align),"toolbar"in m&&t(3,h=m.toolbar),"$$scope"in m&&t(8,a=m.$$scope)},[c,l,u,h,d,o,i,f,a,r,g]}class gA extends tt{constructor(e){super(),nt(this,e,Ew,Iw,Fe,{use:0,class:1,align:2,toolbar:3,getElement:7})}get getElement(){return this.$$.ctx[7]}}Pf({class:"mdc-top-app-bar__title",tag:"span"});function bw(n){let e;const t=n[12].default,s=ut(t,n,n[14],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r&16384)&&ht(s,t,i,i[14],e?ft(t,i[14],r,null):dt(i[14]),null)},i(i){e||(W(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function Tw(n){let e,t,s;const i=[{tag:n[3]},{use:[n[7],...n[0]]},{class:On({[n[1]]:!0,[n[6]]:!0})},n[8]];var r=n[2];function a(o){let c={$$slots:{default:[bw]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[13](e)),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,[c]){const l=c&459?st(i,[c&8&&{tag:o[3]},c&129&&{use:[o[7],...o[0]]},c&66&&{class:On({[o[1]]:!0,[o[6]]:!0})},c&256&&be(o[8])]):{};if(c&16384&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[2])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[13](e),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[13](null),o&&H(t),e&&Le(e,o)}}}function ww(n,e,t){let s,i;const r=["use","class","topAppBar","component","tag","getElement"];let a=ie(e,r),o,c=Ro,l=()=>(c(),c=Yf(s,w=>t(11,o=w)),s);n.$$.on_destroy.push(()=>c());let{$$slots:u={},$$scope:h}=e;const d=Oi(mt());let{use:f=[]}=e,{class:g=""}=e,{topAppBar:m}=e,p,{component:A=Tr}=e,{tag:S=A===Tr?"main":void 0}=e;function E(){return p.getElement()}function b(w){$e[w?"unshift":"push"](()=>{p=w,t(5,p)})}return n.$$set=w=>{e=x(x({},e),pt(w)),t(8,a=ie(e,r)),"use"in w&&t(0,f=w.use),"class"in w&&t(1,g=w.class),"topAppBar"in w&&t(9,m=w.topAppBar),"component"in w&&t(2,A=w.component),"tag"in w&&t(3,S=w.tag),"$$scope"in w&&t(14,h=w.$$scope)},n.$$.update=()=>{n.$$.dirty&512&&l(t(4,s=m&&m.getPropStore())),n.$$.dirty&2064&&t(6,i=(()=>!s||o.variant==="static"?"":o.variant==="short"?"mdc-top-app-bar--short-fixed-adjust":o.prominent&&o.dense?"mdc-top-app-bar--dense-prominent-fixed-adjust":o.prominent?"mdc-top-app-bar--prominent-fixed-adjust":o.dense?"mdc-top-app-bar--dense-fixed-adjust":"mdc-top-app-bar--fixed-adjust")())},[f,g,A,S,s,p,i,d,a,m,E,o,u,b,h]}class yA extends tt{constructor(e){super(),nt(this,e,ww,Tw,Fe,{use:0,class:1,topAppBar:9,component:2,tag:3,getElement:10})}get getElement(){return this.$$.ctx[10]}}function Aw(n){let e;const t=n[37].default,s=ut(t,n,n[43],null);return{c(){s&&s.c()},l(i){s&&s.l(i)},m(i,r){s&&s.m(i,r),e=!0},p(i,r){s&&s.p&&(!e||r[1]&4096)&&ht(s,t,i,i[43],e?ft(t,i[43],r,null):dt(i[43]),null)},i(i){e||(W(s,i),e=!0)},o(i){X(s,i),e=!1},d(i){s&&s.d(i)}}}function Sw(n){let e,t,s;const i=[{use:[n[17],...n[0]]},{class:lt({[n[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":n[2],"mdc-deprecated-list--dense":n[3],"mdc-deprecated-list--textual-list":n[4],"mdc-deprecated-list--avatar-list":n[5]||n[18],"mdc-deprecated-list--icon-list":n[6],"mdc-deprecated-list--image-list":n[7],"mdc-deprecated-list--thumbnail-list":n[8],"mdc-deprecated-list--video-list":n[9],"mdc-deprecated-list--two-line":n[10],"smui-list--three-line":n[11]&&!n[10]})},{role:n[15]},n[23]];var r=n[12];function a(o){let c={$$slots:{default:[Aw]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[38](e),e.$on("keydown",n[39]),e.$on("focusin",n[40]),e.$on("focusout",n[41]),e.$on("click",n[42]),e.$on("SMUIListItem:mount",n[19]),e.$on("SMUIListItem:unmount",n[20]),e.$on("SMUI:action",n[21])),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,c){const l=c[0]&8818687?st(i,[c[0]&131073&&{use:[o[17],...o[0]]},c[0]&266238&&{class:lt({[o[1]]:!0,"mdc-deprecated-list":!0,"mdc-deprecated-list--non-interactive":o[2],"mdc-deprecated-list--dense":o[3],"mdc-deprecated-list--textual-list":o[4],"mdc-deprecated-list--avatar-list":o[5]||o[18],"mdc-deprecated-list--icon-list":o[6],"mdc-deprecated-list--image-list":o[7],"mdc-deprecated-list--thumbnail-list":o[8],"mdc-deprecated-list--video-list":o[9],"mdc-deprecated-list--two-line":o[10],"smui-list--three-line":o[11]&&!o[10]})},c[0]&32768&&{role:o[15]},c[0]&8388608&&be(o[23])]):{};if(c[1]&4096&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[12])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[38](e),e.$on("keydown",o[39]),e.$on("focusin",o[40]),e.$on("focusout",o[41]),e.$on("click",o[42]),e.$on("SMUIListItem:mount",o[19]),e.$on("SMUIListItem:unmount",o[20]),e.$on("SMUI:action",o[21]),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[38](null),o&&H(t),e&&Le(e,o)}}}function Cw(n,e,t){const s=["use","class","nonInteractive","dense","textualList","avatarList","iconList","imageList","thumbnailList","videoList","twoLine","threeLine","vertical","wrapFocus","singleSelection","selectedIndex","radioList","checkList","hasTypeahead","component","layout","setEnabled","getTypeaheadInProgress","getSelectedIndex","getFocusedItemIndex","getElement"];let i=ie(e,s),{$$slots:r={},$$scope:a}=e;var o;const{closest:c,matches:l}=am,u=un(mt());let{use:h=[]}=e,{class:d=""}=e,{nonInteractive:f=!1}=e,{dense:g=!1}=e,{textualList:m=!1}=e,{avatarList:p=!1}=e,{iconList:A=!1}=e,{imageList:S=!1}=e,{thumbnailList:E=!1}=e,{videoList:b=!1}=e,{twoLine:w=!1}=e,{threeLine:K=!1}=e,{vertical:ee=!0}=e,{wrapFocus:oe=(o=Je("SMUI:list:wrapFocus"))!==null&&o!==void 0?o:!1}=e,{singleSelection:ae=!1}=e,{selectedIndex:G=-1}=e,{radioList:Z=!1}=e,{checkList:ue=!1}=e,{hasTypeahead:ce=!1}=e,Y,z,D=[],pe=Je("SMUI:list:role"),It=Je("SMUI:list:nav");const xe=new WeakMap;let wt=Je("SMUI:dialog:selection"),Kt=Je("SMUI:addLayoutListener"),Gt,{component:hn=It?cm:lm}=e;De("SMUI:list:nonInteractive",f),De("SMUI:separator:context","list"),pe||(ae?(pe="listbox",De("SMUI:list:item:role","option")):Z?(pe="radiogroup",De("SMUI:list:item:role","radio")):ue?(pe="group",De("SMUI:list:item:role","checkbox")):(pe="list",De("SMUI:list:item:role",void 0))),Kt&&(Gt=Kt(Ns)),wr(()=>{t(13,z=new QT({addClassForElementIndex:T,focusItemAtIndex:dn,getAttributeForElementIndex:(L,k)=>{var he,Ls;return(Ls=(he=ge()[L])===null||he===void 0?void 0:he.getAttr(k))!==null&&Ls!==void 0?Ls:null},getFocusedElementIndex:()=>document.activeElement?ge().map(L=>L.element).indexOf(document.activeElement):-1,getListItemCount:()=>D.length,getPrimaryTextAtIndex:Re,hasCheckboxAtIndex:L=>{var k,he;return(he=(k=ge()[L])===null||k===void 0?void 0:k.hasCheckbox)!==null&&he!==void 0?he:!1},hasRadioAtIndex:L=>{var k,he;return(he=(k=ge()[L])===null||k===void 0?void 0:k.hasRadio)!==null&&he!==void 0?he:!1},isCheckboxCheckedAtIndex:L=>{var k;const he=ge()[L];return(k=(he==null?void 0:he.hasCheckbox)&&he.checked)!==null&&k!==void 0?k:!1},isFocusInsideList:()=>Y!=null&&fn()!==document.activeElement&&fn().contains(document.activeElement),isRootFocused:()=>Y!=null&&document.activeElement===fn(),listItemAtIndexHasClass:rs,notifyAction:L=>{t(24,G=L),Y!=null&&tn(fn(),"SMUIList:action",{index:L},void 0,!0)},removeClassForElementIndex:Ve,setAttributeForElementIndex:Ni,setCheckedCheckboxOrRadioAtIndex:(L,k)=>{ge()[L].checked=k},setTabIndexForListItemChildren:(L,k)=>{const he=ge()[L],Ls="button:not(:disabled), a";Array.prototype.forEach.call(he.element.querySelectorAll(Ls),zf=>{zf.setAttribute("tabindex",k)})}}));const y={get element(){return fn()},get items(){return D},get typeaheadInProgress(){return z.isTypeaheadInProgress()},typeaheadMatchItem(L,k){return z.typeaheadMatchItem(L,k,!0)},getOrderedList:ge,focusItemAtIndex:dn,addClassForElementIndex:T,removeClassForElementIndex:Ve,setAttributeForElementIndex:Ni,removeAttributeForElementIndex:I,getAttributeFromElementIndex:j,getPrimaryTextAtIndex:Re};return tn(fn(),"SMUIList:mount",y),z.init(),()=>{z.destroy()}}),ws(()=>{Gt&&Gt()});function N(y){D.push(y.detail),xe.set(y.detail.element,y.detail),ae&&y.detail.selected&&t(24,G=St(y.detail.element)),y.stopPropagation()}function Nt(y){var L;const k=(L=y.detail&&D.indexOf(y.detail))!==null&&L!==void 0?L:-1;k!==-1&&(D.splice(k,1),D=D,xe.delete(y.detail.element)),y.stopPropagation()}function At(y){if(Z||ue){const L=St(y.target);if(L!==-1){const k=ge()[L];k&&(Z&&!k.checked||ue)&&(k.checked=!k.checked,k.activateRipple(),window.requestAnimationFrame(()=>{k.deactivateRipple()}))}}}function ge(){return Y==null?[]:[...fn().children].map(y=>xe.get(y)).filter(y=>y&&y._smui_list_item_accessor)}function dn(y){const L=ge()[y];L&&"focus"in L.element&&L.element.focus()}function rs(y,L){var k;const he=ge()[y];return(k=he&&he.hasClass(L))!==null&&k!==void 0?k:!1}function T(y,L){const k=ge()[y];k&&k.addClass(L)}function Ve(y,L){const k=ge()[y];k&&k.removeClass(L)}function Ni(y,L,k){const he=ge()[y];he&&he.addAttr(L,k)}function I(y,L){const k=ge()[y];k&&k.removeAttr(L)}function j(y,L){const k=ge()[y];return k?k.getAttr(L):null}function Re(y){var L;const k=ge()[y];return(L=k&&k.getPrimaryText())!==null&&L!==void 0?L:""}function St(y){const L=c(y,".mdc-deprecated-list-item, .mdc-deprecated-list");return L&&l(L,".mdc-deprecated-list-item")?ge().map(k=>k==null?void 0:k.element).indexOf(L):-1}function Ns(){return z.layout()}function Li(y,L){return z.setEnabled(y,L)}function Uf(){return z.isTypeaheadInProgress()}function vc(){return z.getSelectedIndex()}function Ff(){return z.getFocusedItemIndex()}function fn(){return Y.getElement()}function Bf(y){$e[y?"unshift":"push"](()=>{Y=y,t(14,Y)})}const xf=y=>z&&z.handleKeydown(y,y.target.classList.contains("mdc-deprecated-list-item"),St(y.target)),Vf=y=>z&&z.handleFocusIn(St(y.target)),jf=y=>z&&z.handleFocusOut(St(y.target)),Hf=y=>z&&z.handleClick(St(y.target),!l(y.target,'input[type="checkbox"], input[type="radio"]'));return n.$$set=y=>{e=x(x({},e),pt(y)),t(23,i=ie(e,s)),"use"in y&&t(0,h=y.use),"class"in y&&t(1,d=y.class),"nonInteractive"in y&&t(2,f=y.nonInteractive),"dense"in y&&t(3,g=y.dense),"textualList"in y&&t(4,m=y.textualList),"avatarList"in y&&t(5,p=y.avatarList),"iconList"in y&&t(6,A=y.iconList),"imageList"in y&&t(7,S=y.imageList),"thumbnailList"in y&&t(8,E=y.thumbnailList),"videoList"in y&&t(9,b=y.videoList),"twoLine"in y&&t(10,w=y.twoLine),"threeLine"in y&&t(11,K=y.threeLine),"vertical"in y&&t(25,ee=y.vertical),"wrapFocus"in y&&t(26,oe=y.wrapFocus),"singleSelection"in y&&t(27,ae=y.singleSelection),"selectedIndex"in y&&t(24,G=y.selectedIndex),"radioList"in y&&t(28,Z=y.radioList),"checkList"in y&&t(29,ue=y.checkList),"hasTypeahead"in y&&t(30,ce=y.hasTypeahead),"component"in y&&t(12,hn=y.component),"$$scope"in y&&t(43,a=y.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&33562624&&z&&z.setVerticalOrientation(ee),n.$$.dirty[0]&67117056&&z&&z.setWrapFocus(oe),n.$$.dirty[0]&1073750016&&z&&z.setHasTypeahead(ce),n.$$.dirty[0]&134225920&&z&&z.setSingleSelection(ae),n.$$.dirty[0]&151003136&&z&&ae&&vc()!==G&&z.setSelectedIndex(G)},[h,d,f,g,m,p,A,S,E,b,w,K,hn,z,Y,pe,l,u,wt,N,Nt,At,St,i,G,ee,oe,ae,Z,ue,ce,Ns,Li,Uf,vc,Ff,fn,r,Bf,xf,Vf,jf,Hf,a]}class _A extends tt{constructor(e){super(),nt(this,e,Cw,Sw,Fe,{use:0,class:1,nonInteractive:2,dense:3,textualList:4,avatarList:5,iconList:6,imageList:7,thumbnailList:8,videoList:9,twoLine:10,threeLine:11,vertical:25,wrapFocus:26,singleSelection:27,selectedIndex:24,radioList:28,checkList:29,hasTypeahead:30,component:12,layout:31,setEnabled:32,getTypeaheadInProgress:33,getSelectedIndex:34,getFocusedItemIndex:35,getElement:36},null,[-1,-1])}get layout(){return this.$$.ctx[31]}get setEnabled(){return this.$$.ctx[32]}get getTypeaheadInProgress(){return this.$$.ctx[33]}get getSelectedIndex(){return this.$$.ctx[34]}get getFocusedItemIndex(){return this.$$.ctx[35]}get getElement(){return this.$$.ctx[36]}}function eu(n){let e;return{c(){e=Rt("span"),this.h()},l(t){e=kt(t,"SPAN",{class:!0}),Dt(e).forEach(H),this.h()},h(){Jt(e,"class","mdc-deprecated-list-item__ripple")},m(t,s){se(t,e,s)},d(t){t&&H(e)}}}function Rw(n){let e,t,s=n[7]&&eu();const i=n[32].default,r=ut(i,n,n[35],null);return{c(){s&&s.c(),e=re(),r&&r.c()},l(a){s&&s.l(a),e=re(),r&&r.l(a)},m(a,o){s&&s.m(a,o),se(a,e,o),r&&r.m(a,o),t=!0},p(a,o){a[7]?s||(s=eu(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),r&&r.p&&(!t||o[1]&16)&&ht(r,i,a,a[35],t?ft(i,a[35],o,null):dt(a[35]),null)},i(a){t||(W(r,a),t=!0)},o(a){X(r,a),t=!1},d(a){s&&s.d(a),a&&H(e),r&&r.d(a)}}}function kw(n){let e,t,s;const i=[{use:[...n[6]?[]:[[nr,{ripple:!n[14],unbounded:!1,color:(n[1]||n[0])&&n[5]==null?"primary":n[5],disabled:n[9],addClass:n[22],removeClass:n[23],addStyle:n[24]}]],n[20],...n[2]]},{class:lt({[n[3]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":n[1],"mdc-deprecated-list-item--selected":n[0],"mdc-deprecated-list-item--disabled":n[9],"mdc-menu-item--selected":!n[21]&&n[8]==="menuitem"&&n[0],"smui-menu-item--non-interactive":n[6],...n[16]})},{style:Object.entries(n[17]).map(tu).concat([n[4]]).join(" ")},n[21]&&n[1]?{"aria-current":"page"}:{},n[21]?{}:{role:n[8]},!n[21]&&n[8]==="option"?{"aria-selected":n[0]?"true":"false"}:{},!n[21]&&(n[8]==="radio"||n[8]==="checkbox")?{"aria-checked":n[14]&&n[14].checked?"true":"false"}:{},n[21]?{}:{"aria-disabled":n[9]?"true":"false"},{"data-menu-item-skip-restore-focus":n[10]||void 0},{tabindex:n[19]},{href:n[11]},n[18],n[27]];var r=n[12];function a(o){let c={$$slots:{default:[Rw]},$$scope:{ctx:o}};for(let l=0;l<i.length;l+=1)c=x(c,i[l]);return{props:c}}return r&&(e=Ge(r,a(n)),n[33](e),e.$on("click",n[13]),e.$on("keydown",n[25]),e.$on("SMUIGenericInput:mount",n[26]),e.$on("SMUIGenericInput:unmount",n[34])),{c(){e&&Oe(e.$$.fragment),t=re()},l(o){e&&jt(e.$$.fragment,o),t=re()},m(o,c){e&&Ne(e,o,c),se(o,t,c),s=!0},p(o,c){const l=c[0]&167726975?st(i,[c[0]&30425703&&{use:[...o[6]?[]:[[nr,{ripple:!o[14],unbounded:!1,color:(o[1]||o[0])&&o[5]==null?"primary":o[5],disabled:o[9],addClass:o[22],removeClass:o[23],addStyle:o[24]}]],o[20],...o[2]]},c[0]&2163531&&{class:lt({[o[3]]:!0,"mdc-deprecated-list-item":!0,"mdc-deprecated-list-item--activated":o[1],"mdc-deprecated-list-item--selected":o[0],"mdc-deprecated-list-item--disabled":o[9],"mdc-menu-item--selected":!o[21]&&o[8]==="menuitem"&&o[0],"smui-menu-item--non-interactive":o[6],...o[16]})},c[0]&131088&&{style:Object.entries(o[17]).map(tu).concat([o[4]]).join(" ")},c[0]&2097154&&be(o[21]&&o[1]?{"aria-current":"page"}:{}),c[0]&2097408&&be(o[21]?{}:{role:o[8]}),c[0]&2097409&&be(!o[21]&&o[8]==="option"?{"aria-selected":o[0]?"true":"false"}:{}),c[0]&2113792&&be(!o[21]&&(o[8]==="radio"||o[8]==="checkbox")?{"aria-checked":o[14]&&o[14].checked?"true":"false"}:{}),c[0]&2097664&&be(o[21]?{}:{"aria-disabled":o[9]?"true":"false"}),c[0]&1024&&{"data-menu-item-skip-restore-focus":o[10]||void 0},c[0]&524288&&{tabindex:o[19]},c[0]&2048&&{href:o[11]},c[0]&262144&&be(o[18]),c[0]&134217728&&be(o[27])]):{};if(c[0]&128|c[1]&16&&(l.$$scope={dirty:c,ctx:o}),r!==(r=o[12])){if(e){Ht();const u=e;X(u.$$.fragment,1,0,()=>{Le(u,1)}),zt()}r?(e=Ge(r,a(o)),o[33](e),e.$on("click",o[13]),e.$on("keydown",o[25]),e.$on("SMUIGenericInput:mount",o[26]),e.$on("SMUIGenericInput:unmount",o[34]),Oe(e.$$.fragment),W(e.$$.fragment,1),Ne(e,t.parentNode,t)):e=null}else r&&e.$set(l)},i(o){s||(e&&W(e.$$.fragment,o),s=!0)},o(o){e&&X(e.$$.fragment,o),s=!1},d(o){n[33](null),o&&H(t),e&&Le(e,o)}}}let Dw=0;const tu=([n,e])=>`${n}: ${e};`;function Ow(n,e,t){let s;const i=["use","class","style","color","nonInteractive","ripple","activated","role","selected","disabled","skipRestoreFocus","tabindex","inputId","href","component","action","getPrimaryText","getElement"];let r=ie(e,i),{$$slots:a={},$$scope:o}=e;var c;const l=un(mt());let u=()=>{};function h(I){return I===u}let{use:d=[]}=e,{class:f=""}=e,{style:g=""}=e,{color:m=void 0}=e,{nonInteractive:p=(c=Je("SMUI:list:nonInteractive"))!==null&&c!==void 0?c:!1}=e;De("SMUI:list:nonInteractive",void 0);let{ripple:A=!p}=e,{activated:S=!1}=e,{role:E=Je("SMUI:list:item:role")}=e;De("SMUI:list:item:role",void 0);let{selected:b=!1}=e,{disabled:w=!1}=e,{skipRestoreFocus:K=!1}=e,{tabindex:ee=u}=e,{inputId:oe="SMUI-form-field-list-"+Dw++}=e,{href:ae=void 0}=e,G,Z={},ue={},ce={},Y,z,D=Je("SMUI:list:item:nav"),{component:pe=D?ae?ru:li:um}=e;De("SMUI:generic:input:props",{id:oe}),De("SMUI:separator:context",void 0),wr(()=>{if(!b&&!p){let j=!0,Re=G;for(;Re.previousSibling;)if(Re=Re.previousSibling,Re.nodeType===1&&Re.classList.contains("mdc-deprecated-list-item")&&!Re.classList.contains("mdc-deprecated-list-item--disabled")){j=!1;break}j&&(z=window.requestAnimationFrame(Nt))}const I={_smui_list_item_accessor:!0,get element(){return T()},get selected(){return b},set selected(j){t(0,b=j)},hasClass:It,addClass:xe,removeClass:wt,getAttr:Gt,addAttr:hn,removeAttr:N,getPrimaryText:rs,get checked(){var j;return(j=Y&&Y.checked)!==null&&j!==void 0?j:!1},set checked(j){Y&&t(14,Y.checked=!!j,Y)},get hasCheckbox(){return!!(Y&&"_smui_checkbox_accessor"in Y)},get hasRadio(){return!!(Y&&"_smui_radio_accessor"in Y)},activateRipple(){Y&&Y.activateRipple()},deactivateRipple(){Y&&Y.deactivateRipple()},getValue(){return r.value},action:dn,get tabindex(){return s},set tabindex(j){t(28,ee=j)},get disabled(){return w},get activated(){return S},set activated(j){t(1,S=j)}};return tn(T(),"SMUIListItem:mount",I),()=>{tn(T(),"SMUIListItem:unmount",I)}}),ws(()=>{z&&window.cancelAnimationFrame(z)});function It(I){return I in Z?Z[I]:T().classList.contains(I)}function xe(I){Z[I]||t(16,Z[I]=!0,Z)}function wt(I){(!(I in Z)||Z[I])&&t(16,Z[I]=!1,Z)}function Kt(I,j){ue[I]!=j&&(j===""||j==null?(delete ue[I],t(17,ue)):t(17,ue[I]=j,ue))}function Gt(I){var j;return I in ce?(j=ce[I])!==null&&j!==void 0?j:null:T().getAttribute(I)}function hn(I,j){ce[I]!==j&&t(18,ce[I]=j,ce)}function N(I){(!(I in ce)||ce[I]!=null)&&t(18,ce[I]=void 0,ce)}function Nt(){let I=!0,j=G.getElement();for(;j.nextElementSibling;)if(j=j.nextElementSibling,j.nodeType===1&&j.classList.contains("mdc-deprecated-list-item")){const Re=j.attributes.getNamedItem("tabindex");if(Re&&Re.value==="0"){I=!1;break}}I&&t(19,s=0)}function At(I){const j=I.key==="Enter",Re=I.key==="Space";(j||Re)&&dn(I)}function ge(I){("_smui_checkbox_accessor"in I.detail||"_smui_radio_accessor"in I.detail)&&t(14,Y=I.detail)}function dn(I){w||tn(T(),"SMUI:action",I)}function rs(){var I,j,Re;const St=T(),Ns=St.querySelector(".mdc-deprecated-list-item__primary-text");if(Ns)return(I=Ns.textContent)!==null&&I!==void 0?I:"";const Li=St.querySelector(".mdc-deprecated-list-item__text");return Li?(j=Li.textContent)!==null&&j!==void 0?j:"":(Re=St.textContent)!==null&&Re!==void 0?Re:""}function T(){return G.getElement()}function Ve(I){$e[I?"unshift":"push"](()=>{G=I,t(15,G)})}const Ni=()=>t(14,Y=void 0);return n.$$set=I=>{e=x(x({},e),pt(I)),t(27,r=ie(e,i)),"use"in I&&t(2,d=I.use),"class"in I&&t(3,f=I.class),"style"in I&&t(4,g=I.style),"color"in I&&t(5,m=I.color),"nonInteractive"in I&&t(6,p=I.nonInteractive),"ripple"in I&&t(7,A=I.ripple),"activated"in I&&t(1,S=I.activated),"role"in I&&t(8,E=I.role),"selected"in I&&t(0,b=I.selected),"disabled"in I&&t(9,w=I.disabled),"skipRestoreFocus"in I&&t(10,K=I.skipRestoreFocus),"tabindex"in I&&t(28,ee=I.tabindex),"inputId"in I&&t(29,oe=I.inputId),"href"in I&&t(11,ae=I.href),"component"in I&&t(12,pe=I.component),"$$scope"in I&&t(35,o=I.$$scope)},n.$$.update=()=>{n.$$.dirty[0]&268452417&&t(19,s=h(ee)?!p&&!w&&(b||Y&&Y.checked)?0:-1:ee)},[b,S,d,f,g,m,p,A,E,w,K,ae,pe,dn,Y,G,Z,ue,ce,s,l,D,xe,wt,Kt,At,ge,r,ee,oe,rs,T,a,Ve,Ni,o]}let Nw=class extends tt{constructor(e){super(),nt(this,e,Ow,kw,Fe,{use:2,class:3,style:4,color:5,nonInteractive:6,ripple:7,activated:1,role:8,selected:0,disabled:9,skipRestoreFocus:10,tabindex:28,inputId:29,href:11,component:12,action:13,getPrimaryText:30,getElement:31},null,[-1,-1])}get action(){return this.$$.ctx[13]}get getPrimaryText(){return this.$$.ctx[30]}get getElement(){return this.$$.ctx[31]}};const Lw=Ot({class:"mdc-deprecated-list-item__text",component:li});Ot({class:"mdc-deprecated-list-item__primary-text",component:li});Ot({class:"mdc-deprecated-list-item__secondary-text",component:li});Ot({class:"mdc-deprecated-list-item__meta",component:li});Ot({class:"mdc-deprecated-list-group",component:Ar});const IA=Ot({class:"mdc-deprecated-list-group__subheader",component:hm}),Mw=Nw,EA="/acceuil",bA="/cms/acceuil";function nu(n){let e,t,s,i;return t=new Mw({props:{activated:n[1]===n[0].url,$$slots:{default:[Uw]},$$scope:{ctx:n}}}),t.$on("click",n[4]),{c(){e=Rt("a"),Oe(t.$$.fragment),this.h()},l(r){e=kt(r,"A",{href:!0});var a=Dt(e);jt(t.$$.fragment,a),a.forEach(H),this.h()},h(){Jt(e,"href",s=n[0].url)},m(r,a){se(r,e,a),Ne(t,e,null),i=!0},p(r,a){const o={};a&3&&(o.activated=r[1]===r[0].url),a&33&&(o.$$scope={dirty:a,ctx:r}),t.$set(o),(!i||a&1&&s!==(s=r[0].url))&&Jt(e,"href",s)},i(r){i||(W(t.$$.fragment,r),i=!0)},o(r){X(t.$$.fragment,r),i=!1},d(r){r&&H(e),Le(t)}}}function Pw(n){let e=n[0].title+"",t;return{c(){t=$f(e)},l(s){t=em(s,e)},m(s,i){se(s,t,i)},p(s,i){i&1&&e!==(e=s[0].title+"")&&tm(t,e)},d(s){s&&H(t)}}}function Uw(n){let e,t,s,i,r;return i=new Lw({props:{class:"capitalize",$$slots:{default:[Pw]},$$scope:{ctx:n}}}),{c(){e=Rt("img"),s=su(),Oe(i.$$.fragment),this.h()},l(a){e=kt(a,"IMG",{class:!0,src:!0,alt:!0}),s=iu(a),jt(i.$$.fragment,a),this.h()},h(){var a;Jt(e,"class","mr-2 h-10 w-10 svelte-1mi53hn"),Ec(e.src,t=(a=n[0].img)==null?void 0:a.replace("--creme",""))||Jt(e,"src",t),Jt(e,"alt",""),Zf(e,"uiDebug",VT)},m(a,o){se(a,e,o),se(a,s,o),Ne(i,a,o),r=!0},p(a,o){var l;(!r||o&1&&!Ec(e.src,t=(l=a[0].img)==null?void 0:l.replace("--creme","")))&&Jt(e,"src",t);const c={};o&33&&(c.$$scope={dirty:o,ctx:a}),i.$set(c)},i(a){r||(W(i.$$.fragment,a),r=!0)},o(a){X(i.$$.fragment,a),r=!1},d(a){a&&H(e),a&&H(s),Le(i,a)}}}function Fw(n){let e,t,s=n[0]&&nu(n);return{c(){s&&s.c(),e=re()},l(i){s&&s.l(i),e=re()},m(i,r){s&&s.m(i,r),se(i,e,r),t=!0},p(i,[r]){i[0]?s?(s.p(i,r),r&1&&W(s,1)):(s=nu(i),s.c(),W(s,1),s.m(e.parentNode,e)):s&&(Ht(),X(s,1,1,()=>{s=null}),zt())},i(i){t||(W(s),t=!0)},o(i){X(s),t=!1},d(i){s&&s.d(i),i&&H(e)}}}function Bw(n,e,t){let s;Jf(n,dm,c=>t(3,s=c));let{menu:i=void 0}=e,r=s.url.pathname;function a(c){r!==c&&t(1,r=c)}const o=()=>{i&&a(i.url)};return n.$$set=c=>{"menu"in c&&t(0,i=c.menu)},n.$$.update=()=>{n.$$.dirty&8&&t(1,r=s.url.pathname)},[i,r,a,s,o]}class TA extends tt{constructor(e){super(),nt(this,e,Bw,Fw,Fe,{menu:0})}}export{Qw as A,ua as B,hA as C,cA as D,fA as E,ym as F,aA as G,dA as H,Ww as I,_A as L,pA as R,IA as S,mA as T,TA as a,bA as b,Xw as c,Gw as d,VT as e,gA as f,uA as g,yA as h,Kw as i,EA as j,Yw as k,Mm as l,Jw as m,Zw as n,iA as o,tA as p,Um as q,jT as r,nA as s,Pm as t,sA as u,Ot as v,$w as w,rA as x,oA as y,au as z};
