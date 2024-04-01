(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const me=globalThis,eo=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,oo=Symbol(),$o=new WeakMap;let fi=class{constructor(e,o,i){if(this._$cssResult$=!0,i!==oo)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=o}get styleSheet(){let e=this.o;const o=this.t;if(eo&&e===void 0){const i=o!==void 0&&o.length===1;i&&(e=$o.get(o)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&$o.set(o,e))}return e}toString(){return this.cssText}};const ts=t=>new fi(typeof t=="string"?t:t+"",void 0,oo),I=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[r+1],t[0]);return new fi(o,t,oo)},es=(t,e)=>{if(eo)t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of e){const i=document.createElement("style"),s=me.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=o.cssText,t.appendChild(i)}},xo=eo?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return ts(o)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:os,defineProperty:is,getOwnPropertyDescriptor:ss,getOwnPropertyNames:rs,getOwnPropertySymbols:ns,getPrototypeOf:ls}=Object,ut=globalThis,ko=ut.trustedTypes,as=ko?ko.emptyScript:"",Oe=ut.reactiveElementPolyfillSupport,Jt=(t,e)=>t,Mt={toAttribute(t,e){switch(e){case Boolean:t=t?as:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},io=(t,e)=>!os(t,e),So={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:io};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),ut.litPropertyMetadata??(ut.litPropertyMetadata=new WeakMap);class Tt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,o=So){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(e,o),!o.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,o);s!==void 0&&is(this.prototype,e,s)}}static getPropertyDescriptor(e,o,i){const{get:s,set:r}=ss(this.prototype,e)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const a=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??So}static _$Ei(){if(this.hasOwnProperty(Jt("elementProperties")))return;const e=ls(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Jt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Jt("properties"))){const o=this.properties,i=[...rs(o),...ns(o)];for(const s of i)this.createProperty(s,o[s])}const e=this[Symbol.metadata];if(e!==null){const o=litPropertyMetadata.get(e);if(o!==void 0)for(const[i,s]of o)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[o,i]of this.elementProperties){const s=this._$Eu(o,i);s!==void 0&&this._$Eh.set(s,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const s of i)o.unshift(xo(s))}else e!==void 0&&o.push(xo(e));return o}static _$Eu(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(o=>o(this))}addController(e){var o;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)==null||o.call(e))}removeController(e){var o;(o=this._$EO)==null||o.delete(e)}_$E_(){const e=new Map,o=this.constructor.elementProperties;for(const i of o.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return es(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(o=>{var i;return(i=o.hostConnected)==null?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(o=>{var i;return(i=o.hostDisconnected)==null?void 0:i.call(o)})}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$EC(e,o){var r;const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:Mt).toAttribute(o,i.type);this._$Em=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,o){var r;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:Mt;this._$Em=s,this[s]=a.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(e,o,i){if(e!==void 0){if(i??(i=this.constructor.getPropertyOptions(e)),!(i.hasChanged??io)(this[e],o))return;this.P(e,o,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(e,o,i){this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$Em!==e&&(this._$Ej??(this._$Ej=new Set)).add(e)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(o)):this._$EU()}catch(s){throw e=!1,this._$EU(),s}e&&this._$AE(o)}willUpdate(e){}_$AE(e){var o;(o=this._$EO)==null||o.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(e){}firstUpdated(e){}}Tt.elementStyles=[],Tt.shadowRootOptions={mode:"open"},Tt[Jt("elementProperties")]=new Map,Tt[Jt("finalized")]=new Map,Oe==null||Oe({ReactiveElement:Tt}),(ut.reactiveElementVersions??(ut.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zt=globalThis,ye=Zt.trustedTypes,Co=ye?ye.createPolicy("lit-html",{createHTML:t=>t}):void 0,gi="$lit$",dt=`lit$${(Math.random()+"").slice(9)}$`,mi="?"+dt,cs=`<${mi}>`,kt=document,te=()=>kt.createComment(""),ee=t=>t===null||typeof t!="object"&&typeof t!="function",bi=Array.isArray,ds=t=>bi(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",ze=`[ 	
\f\r]`,Wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ao=/-->/g,Eo=/>/g,bt=RegExp(`>|${ze}(?:([^\\s"'>=/]+)(${ze}*=${ze}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),To=/'/g,Po=/"/g,vi=/^(?:script|style|textarea|title)$/i,us=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),C=us(1),Y=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),Lo=new WeakMap,$t=kt.createTreeWalker(kt,129);function yi(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return Co!==void 0?Co.createHTML(e):e}const hs=(t,e)=>{const o=t.length-1,i=[];let s,r=e===2?"<svg>":"",n=Wt;for(let a=0;a<o;a++){const l=t[a];let d,h,u=-1,m=0;for(;m<l.length&&(n.lastIndex=m,h=n.exec(l),h!==null);)m=n.lastIndex,n===Wt?h[1]==="!--"?n=Ao:h[1]!==void 0?n=Eo:h[2]!==void 0?(vi.test(h[2])&&(s=RegExp("</"+h[2],"g")),n=bt):h[3]!==void 0&&(n=bt):n===bt?h[0]===">"?(n=s??Wt,u=-1):h[1]===void 0?u=-2:(u=n.lastIndex-h[2].length,d=h[1],n=h[3]===void 0?bt:h[3]==='"'?Po:To):n===Po||n===To?n=bt:n===Ao||n===Eo?n=Wt:(n=bt,s=void 0);const f=n===bt&&t[a+1].startsWith("/>")?" ":"";r+=n===Wt?l+cs:u>=0?(i.push(d),l.slice(0,u)+gi+l.slice(u)+dt+f):l+dt+(u===-2?a:f)}return[yi(t,r+(t[o]||"<?>")+(e===2?"</svg>":"")),i]};class oe{constructor({strings:e,_$litType$:o},i){let s;this.parts=[];let r=0,n=0;const a=e.length-1,l=this.parts,[d,h]=hs(e,o);if(this.el=oe.createElement(d,i),$t.currentNode=this.el.content,o===2){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(s=$t.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(const u of s.getAttributeNames())if(u.endsWith(gi)){const m=h[n++],f=s.getAttribute(u).split(dt),g=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:g[2],strings:f,ctor:g[1]==="."?fs:g[1]==="?"?gs:g[1]==="@"?ms:Ee}),s.removeAttribute(u)}else u.startsWith(dt)&&(l.push({type:6,index:r}),s.removeAttribute(u));if(vi.test(s.tagName)){const u=s.textContent.split(dt),m=u.length-1;if(m>0){s.textContent=ye?ye.emptyScript:"";for(let f=0;f<m;f++)s.append(u[f],te()),$t.nextNode(),l.push({type:2,index:++r});s.append(u[m],te())}}}else if(s.nodeType===8)if(s.data===mi)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(dt,u+1))!==-1;)l.push({type:7,index:r}),u+=dt.length-1}r++}}static createElement(e,o){const i=kt.createElement("template");return i.innerHTML=e,i}}function Bt(t,e,o=t,i){var n,a;if(e===Y)return e;let s=i!==void 0?(n=o._$Co)==null?void 0:n[i]:o._$Cl;const r=ee(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(t),s._$AT(t,o,i)),i!==void 0?(o._$Co??(o._$Co=[]))[i]=s:o._$Cl=s),s!==void 0&&(e=Bt(t,s._$AS(t,e.values),s,i)),e}class ps{constructor(e,o){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:o},parts:i}=this._$AD,s=((e==null?void 0:e.creationScope)??kt).importNode(o,!0);$t.currentNode=s;let r=$t.nextNode(),n=0,a=0,l=i[0];for(;l!==void 0;){if(n===l.index){let d;l.type===2?d=new ae(r,r.nextSibling,this,e):l.type===1?d=new l.ctor(r,l.name,l.strings,this,e):l.type===6&&(d=new bs(r,this,e)),this._$AV.push(d),l=i[++a]}n!==(l==null?void 0:l.index)&&(r=$t.nextNode(),n++)}return $t.currentNode=kt,s}p(e){let o=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,o),o+=i.strings.length-2):i._$AI(e[o])),o++}}class ae{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,o,i,s){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Bt(this,e,o),ee(e)?e===T||e==null||e===""?(this._$AH!==T&&this._$AR(),this._$AH=T):e!==this._$AH&&e!==Y&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):ds(e)?this.k(e):this._(e)}S(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.S(e))}_(e){this._$AH!==T&&ee(this._$AH)?this._$AA.nextSibling.data=e:this.T(kt.createTextNode(e)),this._$AH=e}$(e){var r;const{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=oe.createElement(yi(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(o);else{const n=new ps(s,this),a=n.u(this.options);n.p(o),this.T(a),this._$AH=n}}_$AC(e){let o=Lo.get(e.strings);return o===void 0&&Lo.set(e.strings,o=new oe(e)),o}k(e){bi(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,s=0;for(const r of e)s===o.length?o.push(i=new ae(this.S(te()),this.S(te()),this,this.options)):i=o[s],i._$AI(r),s++;s<o.length&&(this._$AR(i&&i._$AB.nextSibling,s),o.length=s)}_$AR(e=this._$AA.nextSibling,o){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,o);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var o;this._$AM===void 0&&(this._$Cv=e,(o=this._$AP)==null||o.call(this,e))}}class Ee{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,o,i,s,r){this.type=1,this._$AH=T,this._$AN=void 0,this.element=e,this.name=o,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=T}_$AI(e,o=this,i,s){const r=this.strings;let n=!1;if(r===void 0)e=Bt(this,e,o,0),n=!ee(e)||e!==this._$AH&&e!==Y,n&&(this._$AH=e);else{const a=e;let l,d;for(e=r[0],l=0;l<r.length-1;l++)d=Bt(this,a[i+l],o,l),d===Y&&(d=this._$AH[l]),n||(n=!ee(d)||d!==this._$AH[l]),d===T?e=T:e!==T&&(e+=(d??"")+r[l+1]),this._$AH[l]=d}n&&!s&&this.j(e)}j(e){e===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class fs extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===T?void 0:e}}class gs extends Ee{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==T)}}class ms extends Ee{constructor(e,o,i,s,r){super(e,o,i,s,r),this.type=5}_$AI(e,o=this){if((e=Bt(this,e,o,0)??T)===Y)return;const i=this._$AH,s=e===T&&i!==T||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==T&&(i===T||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,e):this._$AH.handleEvent(e)}}class bs{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}}const Re=Zt.litHtmlPolyfillSupport;Re==null||Re(oe,ae),(Zt.litHtmlVersions??(Zt.litHtmlVersions=[])).push("3.1.2");const vs=(t,e,o)=>{const i=(o==null?void 0:o.renderBefore)??e;let s=i._$litPart$;if(s===void 0){const r=(o==null?void 0:o.renderBefore)??null;i._$litPart$=s=new ae(e.insertBefore(te(),r),r,void 0,o??{})}return s._$AI(t),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Qt=class extends Tt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const e=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=e.firstChild),e}update(e){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=vs(o,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return Y}};var pi;Qt._$litElement$=!0,Qt.finalized=!0,(pi=globalThis.litElementHydrateSupport)==null||pi.call(globalThis,{LitElement:Qt});const De=globalThis.litElementPolyfillSupport;De==null||De({LitElement:Qt});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var ys=I`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function ws(t,e){function o(s){const r=t.getBoundingClientRect(),n=t.ownerDocument.defaultView,a=r.left+n.scrollX,l=r.top+n.scrollY,d=s.pageX-a,h=s.pageY-l;e!=null&&e.onMove&&e.onMove(d,h)}function i(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",i),e!=null&&e.onStop&&e.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",i),(e==null?void 0:e.initialEvent)instanceof PointerEvent&&o(e.initialEvent)}function we(t,e,o){const i=s=>Object.is(s,-0)?0:s;return t<e?i(e):t>o?i(o):i(t)}const Ve=new Set,_s=new MutationObserver(xi),Ot=new Map;let wi=document.documentElement.dir||"ltr",_i=document.documentElement.lang||navigator.language,vt;_s.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function $i(...t){t.map(e=>{const o=e.$code.toLowerCase();Ot.has(o)?Ot.set(o,Object.assign(Object.assign({},Ot.get(o)),e)):Ot.set(o,e),vt||(vt=e)}),xi()}function xi(){wi=document.documentElement.dir||"ltr",_i=document.documentElement.lang||navigator.language,[...Ve.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}let $s=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){Ve.add(this.host)}hostDisconnected(){Ve.delete(this.host)}dir(){return`${this.host.dir||wi}`.toLowerCase()}lang(){return`${this.host.lang||_i}`.toLowerCase()}getTranslationData(e){var o,i;const s=new Intl.Locale(e.replace(/_/g,"-")),r=s==null?void 0:s.language.toLowerCase(),n=(i=(o=s==null?void 0:s.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&i!==void 0?i:"",a=Ot.get(`${r}-${n}`),l=Ot.get(r);return{locale:s,language:r,region:n,primary:a,secondary:l}}exists(e,o){var i;const{primary:s,secondary:r}=this.getTranslationData((i=o.lang)!==null&&i!==void 0?i:this.lang());return o=Object.assign({includeFallback:!1},o),!!(s&&s[e]||r&&r[e]||o.includeFallback&&vt&&vt[e])}term(e,...o){const{primary:i,secondary:s}=this.getTranslationData(this.lang());let r;if(i&&i[e])r=i[e];else if(s&&s[e])r=s[e];else if(vt&&vt[e])r=vt[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof r=="function"?r(...o):r}date(e,o){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),o).format(e)}number(e,o){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),o).format(e)}relativeTime(e,o,i){return new Intl.RelativeTimeFormat(this.lang(),i).format(e,o)}};var ki={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(t,e)=>`Go to slide ${t} of ${e}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:t=>t===0?"No options selected":t===1?"1 option selected":`${t} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:t=>`Slide ${t}`,toggleColorFormat:"Toggle color format"};$i(ki);var xs=ki,mt=class extends $s{};$i(xs);var Si=Object.defineProperty,ks=Object.defineProperties,Ss=Object.getOwnPropertyDescriptor,Cs=Object.getOwnPropertyDescriptors,Oo=Object.getOwnPropertySymbols,As=Object.prototype.hasOwnProperty,Es=Object.prototype.propertyIsEnumerable,Me=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),zo=(t,e,o)=>e in t?Si(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Ct=(t,e)=>{for(var o in e||(e={}))As.call(e,o)&&zo(t,o,e[o]);if(Oo)for(var o of Oo(e))Es.call(e,o)&&zo(t,o,e[o]);return t},Te=(t,e)=>ks(t,Cs(e)),c=(t,e,o,i)=>{for(var s=i>1?void 0:i?Ss(e,o):e,r=t.length-1,n;r>=0;r--)(n=t[r])&&(s=(i?n(e,o,s):n(s))||s);return i&&s&&Si(e,o,s),s},Ts=function(t,e){this[0]=t,this[1]=e},Ps=t=>{var e=t[Me("asyncIterator")],o=!1,i,s={};return e==null?(e=t[Me("iterator")](),i=r=>s[r]=n=>e[r](n)):(e=e.call(t),i=r=>s[r]=n=>{if(o){if(o=!1,r==="throw")throw n;return n}return o=!0,{done:!1,value:new Ts(new Promise(a=>{var l=e[r](n);if(!(l instanceof Object))throw TypeError("Object expected");a(l)}),1)}}),s[Me("iterator")]=()=>s,i("next"),"throw"in e?i("throw"):s.throw=r=>{throw r},"return"in e&&i("return"),s};function R(t,e){const o=Ct({waitUntilFirstUpdate:!1},e);return(i,s)=>{const{update:r}=i,n=Array.isArray(t)?t:[t];i.update=function(a){n.forEach(l=>{const d=l;if(a.has(d)){const h=a.get(d),u=this[d];h!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[s](h,u)}}),r.call(this,a)}}}var G=I`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ls={attribute:!0,type:String,converter:Mt,reflect:!1,hasChanged:io},Os=(t=Ls,e,o)=>{const{kind:i,metadata:s}=o;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(o.name,t),i==="accessor"){const{name:n}=o;return{set(a){const l=e.get.call(this);e.set.call(this,a),this.requestUpdate(n,l,t)},init(a){return a!==void 0&&this.P(n,void 0,t),a}}}if(i==="setter"){const{name:n}=o;return function(a){const l=this[n];e.call(this,a),this.requestUpdate(n,l,t)}}throw Error("Unsupported decorator location: "+i)};function p(t){return(e,o)=>typeof o=="object"?Os(t,e,o):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(t,e,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function J(t){return p({...t,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zs(t){return(e,o)=>{const i=typeof e=="function"?e:e[o];Object.assign(i,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ro=(t,e,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function M(t,e){return(o,i,s)=>{const r=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(t))??null};if(e){const{get:n,set:a}=typeof i=="object"?o:s??(()=>{const l=Symbol();return{get(){return this[l]},set(d){this[l]=d}}})();return Ro(o,i,{get(){let l=n.call(this);return l===void 0&&(l=r(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return Ro(o,i,{get(){return r(this)}})}}var B=class extends Qt{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([t,e])=>{this.constructor.define(t,e)})}emit(t,e){const o=new CustomEvent(t,Ct({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}static define(t,e=this,o={}){const i=customElements.get(t);if(!i){customElements.define(t,class extends e{},o);return}let s=" (unknown version)",r=s;"version"in e&&e.version&&(s=" v"+e.version),"version"in i&&i.version&&(r=" v"+i.version),!(s&&r&&s===r)&&console.warn(`Attempted to register <${t}>${s}, but <${t}>${r} has already been registered.`)}};B.version="2.14.0";B.dependencies={};c([p()],B.prototype,"dir",2);c([p()],B.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=t=>t??T;var W=class extends B{constructor(){super(...arguments),this.localize=new mt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(t=>this.handleResize(t)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:t,height:e}=this.getBoundingClientRect();this.size=this.vertical?e:t}percentageToPixels(t){return this.size*(t/100)}pixelsToPercentage(t){return t/this.size*100}handleDrag(t){const e=this.localize.dir()==="rtl";this.disabled||(t.cancelable&&t.preventDefault(),ws(this,{onMove:(o,i)=>{let s=this.vertical?i:o;this.primary==="end"&&(s=this.size-s),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),e&&!this.vertical&&(a=this.size-a),s>=a-this.snapThreshold&&s<=a+this.snapThreshold&&(s=a)}),this.position=we(this.pixelsToPercentage(s),0,100)},initialEvent:t}))}handleKeyDown(t){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){let e=this.position;const o=(t.shiftKey?10:1)*(this.primary==="end"?-1:1);t.preventDefault(),(t.key==="ArrowLeft"&&!this.vertical||t.key==="ArrowUp"&&this.vertical)&&(e-=o),(t.key==="ArrowRight"&&!this.vertical||t.key==="ArrowDown"&&this.vertical)&&(e+=o),t.key==="Home"&&(e=this.primary==="end"?100:0),t.key==="End"&&(e=this.primary==="end"?0:100),this.position=we(e,0,100)}}handleResize(t){const{width:e,height:o}=t[0].contentRect;this.size=this.vertical?o:e,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const t=this.vertical?"gridTemplateRows":"gridTemplateColumns",e=this.vertical?"gridTemplateColumns":"gridTemplateRows",o=this.localize.dir()==="rtl",i=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,s="auto";return this.primary==="end"?o&&!this.vertical?this.style[t]=`${i} var(--divider-width) ${s}`:this.style[t]=`${s} var(--divider-width) ${i}`:o&&!this.vertical?this.style[t]=`${s} var(--divider-width) ${i}`:this.style[t]=`${i} var(--divider-width) ${s}`,this.style[e]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${$(this.disabled?void 0:"0")}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term("resize")}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};W.styles=[G,ys];c([M(".divider")],W.prototype,"divider",2);c([p({type:Number,reflect:!0})],W.prototype,"position",2);c([p({attribute:"position-in-pixels",type:Number})],W.prototype,"positionInPixels",2);c([p({type:Boolean,reflect:!0})],W.prototype,"vertical",2);c([p({type:Boolean,reflect:!0})],W.prototype,"disabled",2);c([p()],W.prototype,"primary",2);c([p()],W.prototype,"snap",2);c([p({type:Number,attribute:"snap-threshold"})],W.prototype,"snapThreshold",2);c([R("position")],W.prototype,"handlePositionChange",1);c([R("positionInPixels")],W.prototype,"handlePositionInPixelsChange",1);c([R("vertical")],W.prototype,"handleVerticalChange",1);W.define("sl-split-panel");const Rs="modulepreload",Ds=function(t){return"/"+t},Do={},Ms=function(e,o,i){let s=Promise.resolve();if(o&&o.length>0){const r=document.getElementsByTagName("link");s=Promise.all(o.map(n=>{if(n=Ds(n),n in Do)return;Do[n]=!0;const a=n.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let u=r.length-1;u>=0;u--){const m=r[u];if(m.href===n&&(!a||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${l}`))return;const h=document.createElement("link");if(h.rel=a?"stylesheet":Rs,a||(h.as="script",h.crossOrigin=""),h.href=n,document.head.appendChild(h),a)return new Promise((u,m)=>{h.addEventListener("load",u),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${n}`)))})}))}return s.then(()=>e()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};var Bs=I`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,so=class extends B{constructor(){super(...arguments),this.localize=new mt(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};so.styles=[G,Bs];var qt=new WeakMap,Kt=new WeakMap,Yt=new WeakMap,Be=new WeakSet,he=new WeakMap,ro=class{constructor(t,e){this.handleFormData=o=>{const i=this.options.disabled(this.host),s=this.options.name(this.host),r=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!i&&!n&&typeof s=="string"&&s.length>0&&typeof r<"u"&&(Array.isArray(r)?r.forEach(a=>{o.formData.append(s,a.toString())}):o.formData.append(s,r.toString()))},this.handleFormSubmit=o=>{var i;const s=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((i=qt.get(this.form))==null||i.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!s&&!r(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),he.set(this.host,[])},this.handleInteraction=o=>{const i=he.get(this.host);i.includes(o.type)||i.push(o.type),i.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.checkValidity=="function"&&!i.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const i of o)if(typeof i.reportValidity=="function"&&!i.reportValidity())return!1}return!0},(this.host=t).addController(this),this.options=Ct({form:o=>{const i=o.form;if(i){const r=o.getRootNode().getElementById(i);if(r)return r}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var i;return(i=o.disabled)!=null?i:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,i)=>o.value=i,assumeInteractionOn:["sl-input"]},e)}hostConnected(){const t=this.options.form(this.host);t&&this.attachForm(t),he.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),he.delete(this.host),this.options.assumeInteractionOn.forEach(t=>{this.host.removeEventListener(t,this.handleInteraction)})}hostUpdated(){const t=this.options.form(this.host);t||this.detachForm(),t&&this.form!==t&&(this.detachForm(),this.attachForm(t)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(t){t?(this.form=t,qt.has(this.form)?qt.get(this.form).add(this.host):qt.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Kt.has(this.form)||(Kt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),Yt.has(this.form)||(Yt.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const t=qt.get(this.form);t&&(t.delete(this.host),t.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Kt.has(this.form)&&(this.form.reportValidity=Kt.get(this.form),Kt.delete(this.form)),Yt.has(this.form)&&(this.form.checkValidity=Yt.get(this.form),Yt.delete(this.form)),this.form=void 0))}setUserInteracted(t,e){e?Be.add(t):Be.delete(t),t.requestUpdate()}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&(o.name=e.name,o.value=e.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))})),this.form.append(o),o.click(),o.remove()}}getForm(){var t;return(t=this.form)!=null?t:null}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}setValidity(t){const e=this.host,o=!!Be.has(e),i=!!e.required;e.toggleAttribute("data-required",i),e.toggleAttribute("data-optional",!i),e.toggleAttribute("data-invalid",!t),e.toggleAttribute("data-valid",t),e.toggleAttribute("data-user-invalid",!t&&o),e.toggleAttribute("data-user-valid",t&&o)}updateValidity(){const t=this.host;this.setValidity(t.validity.valid)}emitInvalidEvent(t){const e=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});t||e.preventDefault(),this.host.dispatchEvent(e)||t==null||t.preventDefault()}},no=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Te(Ct({},no),{valid:!1,valueMissing:!0}));Object.freeze(Te(Ct({},no),{valid:!1,customError:!0}));var Is=I`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      .sl-button-group__button:not(
          .sl-button-group__button--first,
          .sl-button-group__button--radio,
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,ce=class{constructor(t,...e){this.slotNames=[],this.handleSlotChange=o=>{const i=o.target;(this.slotNames.includes("[default]")&&!i.name||i.name&&this.slotNames.includes(i.name))&&this.host.requestUpdate()},(this.host=t).addController(this),this.slotNames=e}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},je="";function Mo(t){je=t}function Fs(t=""){if(!je){const e=[...document.getElementsByTagName("script")],o=e.find(i=>i.hasAttribute("data-shoelace"));if(o)Mo(o.getAttribute("data-shoelace"));else{const i=e.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let s="";i&&(s=i.getAttribute("src")),Mo(s.split("/").slice(0,-1).join("/"))}}return je.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}var Us={name:"default",resolver:t=>Fs(`assets/icons/${t}.svg`)},Ns=Us,Bo={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Hs={name:"system",resolver:t=>t in Bo?`data:image/svg+xml,${encodeURIComponent(Bo[t])}`:""},Vs=Hs,js=[Ns,Vs],We=[];function Ws(t){We.push(t)}function qs(t){We=We.filter(e=>e!==t)}function Io(t){return js.find(e=>e.name===t)}var Ks=I`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ys=(t,e)=>e===void 0?(t==null?void 0:t._$litType$)!==void 0:(t==null?void 0:t._$litType$)===e,Xs=t=>t.strings===void 0,Gs={},Js=(t,e=Gs)=>t._$AH=e;var Xt=Symbol(),pe=Symbol(),Ie,Fe=new Map,q=class extends B{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(t,e){var o;let i;if(e!=null&&e.spriteSheet)return C`<svg part="svg">
        <use part="use" href="${t}"></use>
      </svg>`;try{if(i=await fetch(t,{mode:"cors"}),!i.ok)return i.status===410?Xt:pe}catch{return pe}try{const s=document.createElement("div");s.innerHTML=await i.text();const r=s.firstElementChild;if(((o=r==null?void 0:r.tagName)==null?void 0:o.toLowerCase())!=="svg")return Xt;Ie||(Ie=new DOMParser);const a=Ie.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):Xt}catch{return Xt}}connectedCallback(){super.connectedCallback(),Ws(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),qs(this)}getIconSource(){const t=Io(this.library);return this.name&&t?{url:t.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var t;const{url:e,fromLibrary:o}=this.getIconSource(),i=o?Io(this.library):void 0;if(!e){this.svg=null;return}let s=Fe.get(e);if(s||(s=this.resolveIcon(e,i),Fe.set(e,s)),!this.initialRender)return;const r=await s;if(r===pe&&Fe.delete(e),e===this.getIconSource().url){if(Ys(r)){this.svg=r;return}switch(r){case pe:case Xt:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(t=i==null?void 0:i.mutator)==null||t.call(i,this.svg),this.emit("sl-load")}}}render(){return this.svg}};q.styles=[G,Ks];c([J()],q.prototype,"svg",2);c([p({reflect:!0})],q.prototype,"name",2);c([p()],q.prototype,"src",2);c([p()],q.prototype,"label",2);c([p({reflect:!0})],q.prototype,"library",2);c([R("label")],q.prototype,"handleLabelChange",1);c([R(["name","src","library"])],q.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ct={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},lo=t=>(...e)=>({_$litDirective$:t,values:e});class ao{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=lo(class extends ao{constructor(t){var e;if(super(t),t.type!==ct.ATTRIBUTE||t.name!=="class"||((e=t.strings)==null?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var i,s;if(this.st===void 0){this.st=new Set,t.strings!==void 0&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in e)e[r]&&!((i=this.nt)!=null&&i.has(r))&&this.st.add(r);return this.render(e)}const o=t.element.classList;for(const r of this.st)r in e||(o.remove(r),this.st.delete(r));for(const r in e){const n=!!e[r];n===this.st.has(r)||(s=this.nt)!=null&&s.has(r)||(n?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return Y}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=Symbol.for(""),Zs=t=>{if((t==null?void 0:t.r)===Ci)return t==null?void 0:t._$litStatic$},_e=(t,...e)=>({_$litStatic$:e.reduce((o,i,s)=>o+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[s+1],t[0]),r:Ci}),Fo=new Map,Qs=t=>(e,...o)=>{const i=o.length;let s,r;const n=[],a=[];let l,d=0,h=!1;for(;d<i;){for(l=e[d];d<i&&(r=o[d],(s=Zs(r))!==void 0);)l+=s+e[++d],h=!0;d!==i&&a.push(r),n.push(l),d++}if(d===i&&n.push(e[i]),h){const u=n.join("$$lit$$");(e=Fo.get(u))===void 0&&(n.raw=n,Fo.set(u,e=n)),o=a}return t(e,...o)},be=Qs(C);var S=class extends B{constructor(){super(...arguments),this.formControlController=new ro(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new ce(this,"[default]","prefix","suffix"),this.localize=new mt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:no}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(t){this.isButton()&&(this.button.setCustomValidity(t),this.formControlController.updateValidity())}render(){const t=this.isLink(),e=t?_e`a`:_e`button`;return be`
      <${e}
        part="base"
        class=${D({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:this.type)}
        title=${this.title}
        name=${$(t?void 0:this.name)}
        value=${$(t?void 0:this.value)}
        href=${$(t?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t?this.rel:void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?be` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?be`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${e}>
    `}};S.styles=[G,Is];S.dependencies={"sl-icon":q,"sl-spinner":so};c([M(".button")],S.prototype,"button",2);c([J()],S.prototype,"hasFocus",2);c([J()],S.prototype,"invalid",2);c([p()],S.prototype,"title",2);c([p({reflect:!0})],S.prototype,"variant",2);c([p({reflect:!0})],S.prototype,"size",2);c([p({type:Boolean,reflect:!0})],S.prototype,"caret",2);c([p({type:Boolean,reflect:!0})],S.prototype,"disabled",2);c([p({type:Boolean,reflect:!0})],S.prototype,"loading",2);c([p({type:Boolean,reflect:!0})],S.prototype,"outline",2);c([p({type:Boolean,reflect:!0})],S.prototype,"pill",2);c([p({type:Boolean,reflect:!0})],S.prototype,"circle",2);c([p()],S.prototype,"type",2);c([p()],S.prototype,"name",2);c([p()],S.prototype,"value",2);c([p()],S.prototype,"href",2);c([p()],S.prototype,"target",2);c([p()],S.prototype,"rel",2);c([p()],S.prototype,"download",2);c([p()],S.prototype,"form",2);c([p({attribute:"formaction"})],S.prototype,"formAction",2);c([p({attribute:"formenctype"})],S.prototype,"formEnctype",2);c([p({attribute:"formmethod"})],S.prototype,"formMethod",2);c([p({attribute:"formnovalidate",type:Boolean})],S.prototype,"formNoValidate",2);c([p({attribute:"formtarget"})],S.prototype,"formTarget",2);c([R("disabled",{waitUntilFirstUpdate:!0})],S.prototype,"handleDisabledChange",1);S.define("sl-button");const tr=()=>{document.querySelector("#uploadModalButton").addEventListener("click",async e=>{const{uploadModal:o}=await Ms(()=>import("./upload-modal.js"),__vite__mapDeps([]));document.querySelector("#upload-modal-container").innerHTML=o()})},er=()=>(setTimeout(()=>tr(),0),`
  <div class="flex flex-col">
    Upload to Motion Storyline
    <br />
    <sl-button id="uploadModalButton" class="p-3">Log in</sl-button>
  </div>
  <div id="upload-modal-container"></div>
`);var or=class{constructor(t,e){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},t.addController(this),this.host=t,this.tickCallback=e}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(t){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},t)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},ir=I`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function ie(t,e){return new Promise(o=>{function i(s){s.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function yt(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const s=t.animate(e,Te(Ct({},o),{duration:qe()?0:o.duration}));s.addEventListener("cancel",i,{once:!0}),s.addEventListener("finish",i,{once:!0})})}function qe(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function zt(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{e.cancel(),requestAnimationFrame(o)})))}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*sr(t,e){if(t!==void 0){let o=0;for(const i of t)yield e(i,o++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*rr(t,e,o=1){const i=e===void 0?0:t;e??(e=t);for(let s=i;o>0?s<e:e<s;s+=o)yield s}var nr=(t,e)=>{let o=0;return function(...i){window.clearTimeout(o),o=window.setTimeout(()=>{t.call(this,...i)},e)}},Uo=(t,e,o)=>{const i=t[e];t[e]=function(...s){i.call(this,...s),o.call(this,i,...s)}},lr="onscrollend"in window;if(!lr){const t=new Set,e=new WeakMap,o=s=>{for(const r of s.changedTouches)t.add(r.identifier)},i=s=>{for(const r of s.changedTouches)t.delete(r.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",i,!0),document.addEventListener("touchcancel",i,!0),Uo(EventTarget.prototype,"addEventListener",function(s,r){if(r!=="scrollend")return;const n=nr(()=>{t.size?n():this.dispatchEvent(new Event("scrollend"))},100);s.call(this,"scroll",n,{passive:!0}),e.set(this,n)}),Uo(EventTarget.prototype,"removeEventListener",function(s,r){if(r!=="scrollend")return;const n=e.get(this);n&&s.call(this,"scroll",n,{passive:!0})})}var P=class extends B{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new or(this,()=>this.next()),this.intersectionObserverEntries=new Map,this.localize=new mt(this),this.handleMouseDrag=t=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-t.movementX,top:-t.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const t=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const e=t.scrollLeft,o=t.scrollTop;t.style.removeProperty("scroll-snap-type"),t.style.setProperty("overflow","hidden");const i=t.scrollLeft,s=t.scrollTop;t.style.removeProperty("overflow"),t.style.setProperty("scroll-snap-type","none"),t.scrollTo({left:e,top:o,behavior:"instant"}),requestAnimationFrame(async()=>{(e!==i||o!==s)&&(t.scrollTo({left:i,top:s,behavior:qe()?"auto":"smooth"}),await ie(t,"scrollend")),t.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=t=>{t.some(o=>[...o.addedNodes,...o.removedNodes].some(i=>this.isCarouselItem(i)&&!i.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const t=new IntersectionObserver(e=>{e.forEach(o=>{this.intersectionObserverEntries.set(o.target,o);const i=o.target;i.toggleAttribute("inert",!o.isIntersecting),i.classList.toggle("--in-view",o.isIntersecting),i.setAttribute("aria-hidden",o.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=t,t.takeRecords().forEach(e=>{this.intersectionObserverEntries.set(e.target,e)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(t){(t.has("slidesPerMove")||t.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const t=this.getSlides().length,{slidesPerPage:e,slidesPerMove:o,loop:i}=this,s=i?t/o:(t-e)/o+1;return Math.ceil(s)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:t=!0}={}){return[...this.children].filter(e=>this.isCarouselItem(e)&&(!t||!e.hasAttribute("data-clone")))}handleKeyDown(t){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(t.key)){const e=t.target,o=this.localize.dir()==="rtl",i=e.closest('[part~="pagination-item"]')!==null,s=t.key==="ArrowDown"||!o&&t.key==="ArrowRight"||o&&t.key==="ArrowLeft",r=t.key==="ArrowUp"||!o&&t.key==="ArrowLeft"||o&&t.key==="ArrowRight";t.preventDefault(),r&&this.previous(),s&&this.next(),t.key==="Home"&&this.goToSlide(0),t.key==="End"&&this.goToSlide(this.getSlides().length-1),i&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(t){this.mouseDragging&&t.button===0&&(t.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}handleScrollEnd(){if(!this.scrolling||this.dragging)return;const e=[...this.intersectionObserverEntries.values()].find(o=>o.isIntersecting);if(this.loop&&(e!=null&&e.target.hasAttribute("data-clone"))){const o=Number(e.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else if(e){const i=this.getSlides().indexOf(e.target);this.activeSlide=Math.ceil(i/this.slidesPerMove)*this.slidesPerMove}this.scrolling=!1}isCarouselItem(t){return t instanceof Element&&t.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const t=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((e,o)=>{t.unobserve(e),e.classList.remove("--in-view"),e.classList.remove("--is-active"),e.setAttribute("aria-label",this.localize.term("slideNum",o+1)),e.hasAttribute("data-clone")&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(e=>{t.observe(e)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const t=this.getSlides(),e=this.slidesPerPage,o=t.slice(-e),i=t.slice(0,e);o.reverse().forEach((s,r)=>{const n=s.cloneNode(!0);n.setAttribute("data-clone",String(t.length-r-1)),this.prepend(n)}),i.forEach((s,r)=>{const n=s.cloneNode(!0);n.setAttribute("data-clone",String(r)),this.append(n)})}handelSlideChange(){const t=this.getSlides();t.forEach((e,o)=>{e.classList.toggle("--is-active",o===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:t[this.activeSlide]}})}updateSlidesSnap(){const t=this.getSlides(),e=this.slidesPerMove;t.forEach((o,i)=>{(i+e)%e===0?o.style.removeProperty("scroll-snap-align"):o.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(t="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,t)}next(t="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,t)}goToSlide(t,e="smooth"){const{slidesPerPage:o,loop:i}=this,s=this.getSlides(),r=this.getSlides({excludeClones:!1});if(!s.length)return;const n=i?(t+s.length)%s.length:we(t,0,s.length-1);this.activeSlide=n;const a=we(t+(i?o:0),0,r.length-1),l=r[a];this.scrollToSlide(l,qe()?"auto":e)}scrollToSlide(t,e="smooth"){const o=this.scrollContainer,i=o.getBoundingClientRect(),s=t.getBoundingClientRect(),r=s.left-i.left,n=s.top-i.top;o.scrollTo({left:r+o.scrollLeft,top:n+o.scrollTop,behavior:e})}render(){const{slidesPerMove:t,scrolling:e}=this,o=this.getPageCount(),i=this.getCurrentPage(),s=this.canScrollPrev(),r=this.canScrollNext(),n=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${D({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${e?"true":"false"}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
        >
          <slot></slot>
        </div>

        ${this.navigation?C`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${D({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!s})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${s?"false":"true"}"
                  @click=${s?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${D({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!r})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${sr(rr(o),a=>{const l=a===i;return C`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${D({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,o)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*t)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};P.styles=[G,ir];P.dependencies={"sl-icon":q};c([p({type:Boolean,reflect:!0})],P.prototype,"loop",2);c([p({type:Boolean,reflect:!0})],P.prototype,"navigation",2);c([p({type:Boolean,reflect:!0})],P.prototype,"pagination",2);c([p({type:Boolean,reflect:!0})],P.prototype,"autoplay",2);c([p({type:Number,attribute:"autoplay-interval"})],P.prototype,"autoplayInterval",2);c([p({type:Number,attribute:"slides-per-page"})],P.prototype,"slidesPerPage",2);c([p({type:Number,attribute:"slides-per-move"})],P.prototype,"slidesPerMove",2);c([p()],P.prototype,"orientation",2);c([p({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],P.prototype,"mouseDragging",2);c([M(".carousel__slides")],P.prototype,"scrollContainer",2);c([M(".carousel__pagination")],P.prototype,"paginationContainer",2);c([J()],P.prototype,"activeSlide",2);c([J()],P.prototype,"scrolling",2);c([J()],P.prototype,"dragging",2);c([zs({passive:!0})],P.prototype,"handleScroll",1);c([R("loop",{waitUntilFirstUpdate:!0}),R("slidesPerPage",{waitUntilFirstUpdate:!0})],P.prototype,"initializeSlides",1);c([R("activeSlide")],P.prototype,"handelSlideChange",1);c([R("slidesPerMove")],P.prototype,"updateSlidesSnap",1);c([R("autoplay")],P.prototype,"handleAutoplayChange",1);P.define("sl-carousel");var No=new WeakMap;function Ai(t){let e=No.get(t);return e||(e=window.getComputedStyle(t,null),No.set(t,e)),e}function ar(t){if(typeof t.checkVisibility=="function")return t.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});const e=Ai(t);return e.visibility!=="hidden"&&e.display!=="none"}function cr(t){const e=Ai(t),{overflowY:o,overflowX:i}=e;return o==="scroll"||i==="scroll"?!0:o!=="auto"||i!=="auto"?!1:t.scrollHeight>t.clientHeight&&o==="auto"||t.scrollWidth>t.clientWidth&&i==="auto"}function dr(t){const e=t.tagName.toLowerCase(),o=Number(t.getAttribute("tabindex"));return t.hasAttribute("tabindex")&&(isNaN(o)||o<=-1)||t.hasAttribute("disabled")||t.closest("[inert]")||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||!ar(t)?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"||["button","input","select","textarea","a","audio","video","summary","iframe"].includes(e)?!0:cr(t)}function ur(t,e){var o;return((o=t.getRootNode({composed:!0}))==null?void 0:o.host)!==e}function Ho(t){const e=new WeakMap,o=[];function i(s){if(s instanceof Element){if(s.hasAttribute("inert")||s.closest("[inert]")||e.has(s))return;e.set(s,!0),!o.includes(s)&&dr(s)&&o.push(s),s instanceof HTMLSlotElement&&ur(s,t)&&s.assignedElements({flatten:!0}).forEach(r=>{i(r)}),s.shadowRoot!==null&&s.shadowRoot.mode==="open"&&i(s.shadowRoot)}for(const r of s.children)i(r)}return i(t),o.sort((s,r)=>{const n=Number(s.getAttribute("tabindex"))||0;return(Number(r.getAttribute("tabindex"))||0)-n})}function*co(t=document.activeElement){t!=null&&(yield t,"shadowRoot"in t&&t.shadowRoot&&t.shadowRoot.mode!=="closed"&&(yield*Ps(co(t.shadowRoot.activeElement))))}function hr(){return[...co()].pop()}var Gt=[],pr=class{constructor(t){this.tabDirection="forward",this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var o;if(e.key!=="Tab"||this.isExternalActivated||!this.isActive())return;const i=hr();if(this.previousFocus=i,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection="backward":this.tabDirection="forward";const s=Ho(this.element);let r=s.findIndex(a=>a===i);this.previousFocus=this.currentFocus;const n=this.tabDirection==="forward"?1:-1;for(;;){r+n>=s.length?r=0:r+n<0?r=s.length-1:r+=n,this.previousFocus=this.currentFocus;const a=s[r];if(this.tabDirection==="backward"&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||a&&this.possiblyHasTabbableChildren(a))return;e.preventDefault(),this.currentFocus=a,(o=this.currentFocus)==null||o.focus({preventScroll:!1});const l=[...co()];if(l.includes(this.currentFocus)||!l.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection="forward"},this.element=t,this.elementsWithTabbableControls=["iframe"]}activate(){Gt.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Gt=Gt.filter(t=>t!==this.element),this.currentFocus=null,document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Gt[Gt.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){const t=Ho(this.element);if(!this.element.matches(":focus-within")){const e=t[0],o=t[t.length-1],i=this.tabDirection==="forward"?e:o;typeof(i==null?void 0:i.focus)=="function"&&(this.currentFocus=i,i.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(t){return this.elementsWithTabbableControls.includes(t.tagName.toLowerCase())||t.hasAttribute("controls")}};function fr(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var Ke=new Set;function gr(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function Vo(t){if(Ke.add(t),!document.body.classList.contains("sl-scroll-lock")){const e=gr();document.body.classList.add("sl-scroll-lock"),document.body.style.setProperty("--sl-scroll-lock-size",`${e}px`)}}function jo(t){Ke.delete(t),Ke.size===0&&(document.body.classList.remove("sl-scroll-lock"),document.body.style.removeProperty("--sl-scroll-lock-size"))}function mr(t,e,o="vertical",i="smooth"){const s=fr(t,e),r=s.top+e.scrollTop,n=s.left+e.scrollLeft,a=e.scrollLeft,l=e.scrollLeft+e.offsetWidth,d=e.scrollTop,h=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(n<a?e.scrollTo({left:n,behavior:i}):n+t.clientWidth>l&&e.scrollTo({left:n-e.offsetWidth+t.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(r<d?e.scrollTo({top:r,behavior:i}):r+t.clientHeight>h&&e.scrollTo({top:r-e.offsetHeight+t.clientHeight,behavior:i}))}var br=I`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,vr=I`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,F=class extends B{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}render(){const t=!!this.href,e=t?_e`a`:_e`button`;return be`
      <${e}
        part="base"
        class=${D({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${$(t?void 0:this.disabled)}
        type=${$(t?void 0:"button")}
        href=${$(t?this.href:void 0)}
        target=${$(t?this.target:void 0)}
        download=${$(t?this.download:void 0)}
        rel=${$(t&&this.target?"noreferrer noopener":void 0)}
        role=${$(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${$(this.name)}
          library=${$(this.library)}
          src=${$(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};F.styles=[G,vr];F.dependencies={"sl-icon":q};c([M(".icon-button")],F.prototype,"button",2);c([J()],F.prototype,"hasFocus",2);c([p()],F.prototype,"name",2);c([p()],F.prototype,"library",2);c([p()],F.prototype,"src",2);c([p()],F.prototype,"href",2);c([p()],F.prototype,"target",2);c([p()],F.prototype,"download",2);c([p()],F.prototype,"label",2);c([p({type:Boolean,reflect:!0})],F.prototype,"disabled",2);var Ei=new Map,yr=new WeakMap;function wr(t){return t??{keyframes:[],options:{duration:0}}}function Wo(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function At(t,e){Ei.set(t,wr(e))}function wt(t,e,o){const i=yr.get(t);if(i!=null&&i[e])return Wo(i[e],o.dir);const s=Ei.get(e);return s?Wo(s,o.dir):{keyframes:[],options:{duration:0}}}var it=class extends B{constructor(){super(...arguments),this.hasSlotController=new ce(this,"footer"),this.localize=new mt(this),this.modal=new pr(this),this.open=!1,this.label="",this.noHeader=!1,this.handleDocumentKeyDown=t=>{t.key==="Escape"&&this.modal.isActive()&&this.open&&(t.stopPropagation(),this.requestClose("keyboard"))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),Vo(this))}disconnectedCallback(){var t;super.disconnectedCallback(),this.modal.deactivate(),jo(this),(t=this.closeWatcher)==null||t.destroy()}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=wt(this,"dialog.denyClose",{dir:this.localize.dir()});yt(this.panel,o.keyframes,o.options);return}this.hide()}addOpenListeners(){var t;"CloseWatcher"in window?((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose("keyboard")):document.addEventListener("keydown",this.handleDocumentKeyDown)}removeOpenListeners(){var t;(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),Vo(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([zt(this.dialog),zt(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=wt(this,"dialog.show",{dir:this.localize.dir()}),o=wt(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([yt(this.panel,e.keyframes,e.options),yt(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([zt(this.dialog),zt(this.overlay)]);const t=wt(this,"dialog.hide",{dir:this.localize.dir()}),e=wt(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([yt(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),yt(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,jo(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}async show(){if(!this.open)return this.open=!0,ie(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,ie(this,"sl-after-hide")}render(){return C`
      <div
        part="base"
        class=${D({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${$(this.noHeader?this.label:void 0)}
          aria-labelledby=${$(this.noHeader?void 0:"title")}
          tabindex="-1"
        >
          ${this.noHeader?"":C`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:"\uFEFF"} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term("close")}
                      library="system"
                      @click="${()=>this.requestClose("close-button")}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${""}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};it.styles=[G,br];it.dependencies={"sl-icon-button":F};c([M(".dialog")],it.prototype,"dialog",2);c([M(".dialog__panel")],it.prototype,"panel",2);c([M(".dialog__overlay")],it.prototype,"overlay",2);c([p({type:Boolean,reflect:!0})],it.prototype,"open",2);c([p({reflect:!0})],it.prototype,"label",2);c([p({attribute:"no-header",type:Boolean,reflect:!0})],it.prototype,"noHeader",2);c([R("open",{waitUntilFirstUpdate:!0})],it.prototype,"handleOpenChange",1);At("dialog.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:"ease"}});At("dialog.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:"ease"}});At("dialog.denyClose",{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}});At("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});At("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});it.define("sl-dialog");const _t={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1};let Pt,Ye,se,uo=!1,$e=!1,ho=!1,H=!1,Xe=null,Ge=!1;const re=(t,e="")=>()=>{},_r="slot-fb{display:contents}slot-fb[hidden]{display:none}",qo="http://www.w3.org/1999/xlink",Ko={},$r="http://www.w3.org/2000/svg",xr="http://www.w3.org/1999/xhtml",kr=t=>t!=null,Ti=t=>(t=typeof t,t==="object"||t==="function");function Sr(t){var e,o,i;return(i=(o=(e=t.head)===null||e===void 0?void 0:e.querySelector('meta[name="csp-nonce"]'))===null||o===void 0?void 0:o.getAttribute("content"))!==null&&i!==void 0?i:void 0}const Pi=(t,e,...o)=>{let i=null,s=null,r=null,n=!1,a=!1;const l=[],d=u=>{for(let m=0;m<u.length;m++)i=u[m],Array.isArray(i)?d(i):i!=null&&typeof i!="boolean"&&((n=typeof t!="function"&&!Ti(i))&&(i=String(i)),n&&a?l[l.length-1].$text$+=i:l.push(n?xe(null,i):i),a=n)};if(d(o),e){e.key&&(s=e.key),e.name&&(r=e.name);{const u=e.className||e.class;u&&(e.class=typeof u!="object"?u:Object.keys(u).filter(m=>u[m]).join(" "))}}if(typeof t=="function")return t(e===null?{}:e,l,Er);const h=xe(t,null);return h.$attrs$=e,l.length>0&&(h.$children$=l),h.$key$=s,h.$name$=r,h},xe=(t,e)=>{const o={$flags$:0,$tag$:t,$text$:e,$elm$:null,$children$:null};return o.$attrs$=null,o.$key$=null,o.$name$=null,o},Cr={},Ar=t=>t&&t.$tag$===Cr,Er={forEach:(t,e)=>t.map(Yo).forEach(e),map:(t,e)=>t.map(Yo).map(e).map(Tr)},Yo=t=>({vattrs:t.$attrs$,vchildren:t.$children$,vkey:t.$key$,vname:t.$name$,vtag:t.$tag$,vtext:t.$text$}),Tr=t=>{if(typeof t.vtag=="function"){const o=Object.assign({},t.vattrs);return t.vkey&&(o.key=t.vkey),t.vname&&(o.name=t.vname),Pi(t.vtag,o,...t.vchildren||[])}const e=xe(t.vtag,t.vtext);return e.$attrs$=t.vattrs,e.$children$=t.vchildren,e.$key$=t.vkey,e.$name$=t.vname,e},Xo=new WeakMap,Pr=(t,e,o)=>{var i;const s=Or(e,o),r=qr.get(s);if(t=t.nodeType===11?t:xt,r)if(typeof r=="string"){t=t.head||t;let n=Xo.get(t),a;if(n||Xo.set(t,n=new Set),!n.has(s)){{a=xt.createElement("style"),a.innerHTML=r;const l=(i=et.$nonce$)!==null&&i!==void 0?i:Sr(xt);l!=null&&a.setAttribute("nonce",l),t.insertBefore(a,t.querySelector("link"))}e.$flags$&4&&(a.innerHTML+=_r),n&&n.add(s)}}else t.adoptedStyleSheets.includes(r)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,r]);return s},Lr=t=>{const e=t.$cmpMeta$,o=t.$hostElement$,i=e.$flags$,s=re("attachStyles",e.$tagName$),r=Pr(o.shadowRoot?o.shadowRoot:o.getRootNode(),e,t.$modeName$);i&10&&(o["s-sc"]=r,o.classList.add(r+"-h"),i&2&&o.classList.add(r+"-s")),s()},Or=(t,e)=>"sc-"+(e&&t.$flags$&32?t.$tagName$+"-"+e:t.$tagName$),Go=(t,e,o,i,s,r)=>{if(o!==i){let n=oi(t,e),a=e.toLowerCase();if(e==="class"){const l=t.classList,d=Jo(o),h=Jo(i);l.remove(...d.filter(u=>u&&!h.includes(u))),l.add(...h.filter(u=>u&&!d.includes(u)))}else if(e==="style"){for(const l in o)(!i||i[l]==null)&&(l.includes("-")?t.style.removeProperty(l):t.style[l]="");for(const l in i)(!o||i[l]!==o[l])&&(l.includes("-")?t.style.setProperty(l,i[l]):t.style[l]=i[l])}else if(e!=="key")if(e==="ref")i&&i(t);else if(!t.__lookupSetter__(e)&&e[0]==="o"&&e[1]==="n"){if(e[2]==="-"?e=e.slice(3):oi(go,a)?e=a.slice(2):e=a[2]+e.slice(3),o||i){const l=e.endsWith(Li);e=e.replace(Rr,""),o&&et.rel(t,e,o,l),i&&et.ael(t,e,i,l)}}else{const l=Ti(i);if((n||l&&i!==null)&&!s)try{if(t.tagName.includes("-"))t[e]=i;else{const h=i??"";e==="list"?n=!1:(o==null||t[e]!=h)&&(t[e]=h)}}catch{}let d=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(e=a,d=!0),i==null||i===!1?(i!==!1||t.getAttribute(e)==="")&&(d?t.removeAttributeNS(qo,e):t.removeAttribute(e)):(!n||r&4||s)&&!l&&(i=i===!0?"":i,d?t.setAttributeNS(qo,e,i):t.setAttribute(e,i))}}},zr=/\s/,Jo=t=>t?t.split(zr):[],Li="Capture",Rr=new RegExp(Li+"$"),Oi=(t,e,o,i)=>{const s=e.$elm$.nodeType===11&&e.$elm$.host?e.$elm$.host:e.$elm$,r=t&&t.$attrs$||Ko,n=e.$attrs$||Ko;for(i in r)i in n||Go(s,i,r[i],void 0,o,e.$flags$);for(i in n)Go(s,i,r[i],n[i],o,e.$flags$)},ke=(t,e,o,i)=>{const s=e.$children$[o];let r=0,n,a,l;if(uo||(ho=!0,s.$tag$==="slot"&&(Pt&&i.classList.add(Pt+"-s"),s.$flags$|=s.$children$?2:1)),s.$text$!==null)n=s.$elm$=xt.createTextNode(s.$text$);else if(s.$flags$&1)n=s.$elm$=xt.createTextNode("");else{if(H||(H=s.$tag$==="svg"),n=s.$elm$=xt.createElementNS(H?$r:xr,s.$flags$&2?"slot-fb":s.$tag$),H&&s.$tag$==="foreignObject"&&(H=!1),Oi(null,s,H),kr(Pt)&&n["s-si"]!==Pt&&n.classList.add(n["s-si"]=Pt),s.$children$)for(r=0;r<s.$children$.length;++r)a=ke(t,s,r,n),a&&n.appendChild(a);s.$tag$==="svg"?H=!1:n.tagName==="foreignObject"&&(H=!0)}return n["s-hn"]=se,s.$flags$&3&&(n["s-sr"]=!0,n["s-cr"]=Ye,n["s-sn"]=s.$name$||"",l=t&&t.$children$&&t.$children$[o],l&&l.$tag$===s.$tag$&&t.$elm$&&ne(t.$elm$,!1)),n},ne=(t,e)=>{et.$flags$|=1;const o=t.childNodes;for(let i=o.length-1;i>=0;i--){const s=o[i];s["s-hn"]!==se&&s["s-ol"]&&(Di(s).insertBefore(s,po(s)),s["s-ol"].remove(),s["s-ol"]=void 0,s["s-sh"]=void 0,ho=!0),e&&ne(s,e)}et.$flags$&=-2},zi=(t,e,o,i,s,r)=>{let n=t["s-cr"]&&t["s-cr"].parentNode||t,a;for(n.shadowRoot&&n.tagName===se&&(n=n.shadowRoot);s<=r;++s)i[s]&&(a=ke(null,o,s,t),a&&(i[s].$elm$=a,n.insertBefore(a,po(e))))},Ri=(t,e,o)=>{for(let i=e;i<=o;++i){const s=t[i];if(s){const r=s.$elm$;Ii(s),r&&($e=!0,r["s-ol"]?r["s-ol"].remove():ne(r,!0),r.remove())}}},Dr=(t,e,o,i,s=!1)=>{let r=0,n=0,a=0,l=0,d=e.length-1,h=e[0],u=e[d],m=i.length-1,f=i[0],g=i[m],b,v;for(;r<=d&&n<=m;)if(h==null)h=e[++r];else if(u==null)u=e[--d];else if(f==null)f=i[++n];else if(g==null)g=i[--m];else if(fe(h,f,s))Lt(h,f,s),h=e[++r],f=i[++n];else if(fe(u,g,s))Lt(u,g,s),u=e[--d],g=i[--m];else if(fe(h,g,s))(h.$tag$==="slot"||g.$tag$==="slot")&&ne(h.$elm$.parentNode,!1),Lt(h,g,s),t.insertBefore(h.$elm$,u.$elm$.nextSibling),h=e[++r],g=i[--m];else if(fe(u,f,s))(h.$tag$==="slot"||g.$tag$==="slot")&&ne(u.$elm$.parentNode,!1),Lt(u,f,s),t.insertBefore(u.$elm$,h.$elm$),u=e[--d],f=i[++n];else{for(a=-1,l=r;l<=d;++l)if(e[l]&&e[l].$key$!==null&&e[l].$key$===f.$key$){a=l;break}a>=0?(v=e[a],v.$tag$!==f.$tag$?b=ke(e&&e[n],o,a,t):(Lt(v,f,s),e[a]=void 0,b=v.$elm$),f=i[++n]):(b=ke(e&&e[n],o,n,t),f=i[++n]),b&&Di(h.$elm$).insertBefore(b,po(h.$elm$))}r>d?zi(t,i[m+1]==null?null:i[m+1].$elm$,o,i,n,m):n>m&&Ri(e,r,d)},fe=(t,e,o=!1)=>t.$tag$===e.$tag$?t.$tag$==="slot"?t.$name$===e.$name$:o?!0:t.$key$===e.$key$:!1,po=t=>t&&t["s-ol"]||t,Di=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,Lt=(t,e,o=!1)=>{const i=e.$elm$=t.$elm$,s=t.$children$,r=e.$children$,n=e.$tag$,a=e.$text$;let l;a===null?(H=n==="svg"?!0:n==="foreignObject"?!1:H,n==="slot"&&!uo||Oi(t,e,H),s!==null&&r!==null?Dr(i,s,e,r,o):r!==null?(t.$text$!==null&&(i.textContent=""),zi(i,null,e,r,0,r.length-1)):s!==null&&Ri(s,0,s.length-1),H&&n==="svg"&&(H=!1)):(l=i["s-cr"])?l.parentNode.textContent=a:t.$text$!==a&&(i.data=a)},Mi=t=>{const e=t.childNodes;for(const o of e)if(o.nodeType===1){if(o["s-sr"]){const i=o["s-sn"];o.hidden=!1;for(const s of e)if(s!==o){if(s["s-hn"]!==o["s-hn"]||i!==""){if(s.nodeType===1&&(i===s.getAttribute("slot")||i===s["s-sn"])){o.hidden=!0;break}}else if(s.nodeType===1||s.nodeType===3&&s.textContent.trim()!==""){o.hidden=!0;break}}}Mi(o)}},rt=[],Bi=t=>{let e,o,i;for(const s of t.childNodes){if(s["s-sr"]&&(e=s["s-cr"])&&e.parentNode){o=e.parentNode.childNodes;const r=s["s-sn"];for(i=o.length-1;i>=0;i--)if(e=o[i],!e["s-cn"]&&!e["s-nr"]&&e["s-hn"]!==s["s-hn"]&&!_t.experimentalSlotFixes)if(Zo(e,r)){let n=rt.find(a=>a.$nodeToRelocate$===e);$e=!0,e["s-sn"]=e["s-sn"]||r,n?(n.$nodeToRelocate$["s-sh"]=s["s-hn"],n.$slotRefNode$=s):(e["s-sh"]=s["s-hn"],rt.push({$slotRefNode$:s,$nodeToRelocate$:e})),e["s-sr"]&&rt.map(a=>{Zo(a.$nodeToRelocate$,e["s-sn"])&&(n=rt.find(l=>l.$nodeToRelocate$===e),n&&!a.$slotRefNode$&&(a.$slotRefNode$=n.$slotRefNode$))})}else rt.some(n=>n.$nodeToRelocate$===e)||rt.push({$nodeToRelocate$:e})}s.nodeType===1&&Bi(s)}},Zo=(t,e)=>t.nodeType===1?t.getAttribute("slot")===null&&e===""||t.getAttribute("slot")===e:t["s-sn"]===e?!0:e==="",Ii=t=>{t.$attrs$&&t.$attrs$.ref&&t.$attrs$.ref(null),t.$children$&&t.$children$.map(Ii)},Mr=(t,e,o=!1)=>{var i,s,r,n,a;const l=t.$hostElement$,d=t.$cmpMeta$,h=t.$vnode$||xe(null,null),u=Ar(e)?e:Pi(null,null,e);if(se=l.tagName,d.$attrsToReflect$&&(u.$attrs$=u.$attrs$||{},d.$attrsToReflect$.map(([m,f])=>u.$attrs$[f]=l[m])),o&&u.$attrs$)for(const m of Object.keys(u.$attrs$))l.hasAttribute(m)&&!["key","ref","style","class"].includes(m)&&(u.$attrs$[m]=l[m]);u.$tag$=null,u.$flags$|=4,t.$vnode$=u,u.$elm$=h.$elm$=l.shadowRoot||l,Pt=l["s-sc"],uo=(d.$flags$&1)!==0,Ye=l["s-cr"],$e=!1,Lt(h,u,o);{if(et.$flags$|=1,ho){Bi(u.$elm$);for(const m of rt){const f=m.$nodeToRelocate$;if(!f["s-ol"]){const g=xt.createTextNode("");g["s-nr"]=f,f.parentNode.insertBefore(f["s-ol"]=g,f)}}for(const m of rt){const f=m.$nodeToRelocate$,g=m.$slotRefNode$;if(g){const b=g.parentNode;let v=g.nextSibling;{let y=(i=f["s-ol"])===null||i===void 0?void 0:i.previousSibling;for(;y;){let w=(s=y["s-nr"])!==null&&s!==void 0?s:null;if(w&&w["s-sn"]===f["s-sn"]&&b===w.parentNode&&(w=w.nextSibling,!w||!w["s-nr"])){v=w;break}y=y.previousSibling}}(!v&&b!==f.parentNode||f.nextSibling!==v)&&f!==v&&(!f["s-hn"]&&f["s-ol"]&&(f["s-hn"]=f["s-ol"].parentNode.nodeName),b.insertBefore(f,v),f.nodeType===1&&(f.hidden=(r=f["s-ih"])!==null&&r!==void 0?r:!1))}else f.nodeType===1&&(o&&(f["s-ih"]=(n=f.hidden)!==null&&n!==void 0?n:!1),f.hidden=!0)}}$e&&Mi(u.$elm$),et.$flags$&=-2,rt.length=0}if(_t.experimentalScopedSlotChanges&&d.$flags$&2)for(const m of u.$elm$.childNodes)m["s-hn"]!==se&&!m["s-sh"]&&(o&&m["s-ih"]==null&&(m["s-ih"]=(a=m.hidden)!==null&&a!==void 0?a:!1),m.hidden=!0);Ye=void 0},Br=(t,e)=>{},Ir=(t,e)=>(t.$flags$|=16,Br(t,t.$ancestorComponent$),Gr(()=>Fr(t,e))),Fr=(t,e)=>{const o=t.$hostElement$,i=re("scheduleUpdate",t.$cmpMeta$.$tagName$),s=o;let r;return e?r=Rt(s,"componentWillLoad"):r=Rt(s,"componentWillUpdate"),r=Qo(r,()=>Rt(s,"componentWillRender")),i(),Qo(r,()=>Nr(t,s,e))},Qo=(t,e)=>Ur(t)?t.then(e):e(),Ur=t=>t instanceof Promise||t&&t.then&&typeof t.then=="function",Nr=async(t,e,o)=>{const i=t.$hostElement$,s=re("update",t.$cmpMeta$.$tagName$);i["s-rc"],o&&Lr(t);const r=re("render",t.$cmpMeta$.$tagName$);Hr(t,e,i,o),r(),s(),Vr(t)},Hr=(t,e,o,i)=>{try{Xe=e,e=e.render&&e.render(),t.$flags$&=-17,t.$flags$|=2,(_t.hasRenderFn||_t.reflect)&&(_t.vdomRender||_t.reflect)&&(_t.hydrateServerSide||Mr(t,e,i))}catch(l){fo(l,t.$hostElement$)}return Xe=null,null},ti=()=>Xe,Vr=t=>{const e=t.$cmpMeta$.$tagName$,o=t.$hostElement$,i=re("postUpdate",e),s=o;t.$ancestorComponent$,Rt(s,"componentDidRender"),t.$flags$&64?(Rt(s,"componentDidUpdate"),i()):(t.$flags$|=64,Rt(s,"componentDidLoad"),i())},ei=t=>{{const e=Wr(t),o=e.$hostElement$.isConnected;return o&&(e.$flags$&18)===2&&Ir(e,!1),o}},Rt=(t,e,o)=>{if(t&&t[e])try{return t[e](o)}catch(i){fo(i)}},jr=new WeakMap,Wr=t=>jr.get(t),oi=(t,e)=>e in t,fo=(t,e)=>(0,console.error)(t,e),qr=new Map,go=typeof window<"u"?window:{},xt=go.document||{head:{}};go.HTMLElement;const et={$flags$:0,$resourcesUrl$:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,o,i)=>t.addEventListener(e,o,i),rel:(t,e,o,i)=>t.removeEventListener(e,o,i),ce:(t,e)=>new CustomEvent(t,e)},Kr=t=>Promise.resolve(t),ii=[],Fi=[],Yr=(t,e)=>o=>{t.push(o),Ge||(Ge=!0,e&&et.$flags$&4?Xr(Je):et.raf(Je))},si=t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(o){fo(o)}t.length=0},Je=()=>{si(ii),si(Fi),(Ge=ii.length>0)&&et.raf(Je)},Xr=t=>Kr().then(t),Gr=Yr(Fi,!0),Jr=(t,e,o)=>{const i=t.get(e);i?i.includes(o)||i.push(o):t.set(e,[o])},Zr=(t,e)=>{let o;return(...i)=>{o&&clearTimeout(o),o=setTimeout(()=>{o=0,t(...i)},e)}},Qr=t=>!("isConnected"in t)||t.isConnected,ri=Zr(t=>{for(let e of t.keys())t.set(e,t.get(e).filter(Qr))},2e3),tn=()=>{if(typeof ti!="function")return{};const t=new Map;return{dispose:()=>t.clear(),get:e=>{const o=ti();o&&Jr(t,e,o)},set:e=>{const o=t.get(e);o&&t.set(e,o.filter(ei)),ri(t)},reset:()=>{t.forEach(e=>e.forEach(ei)),ri(t)}}},Ue=t=>typeof t=="function"?t():t,en=(t,e=(o,i)=>o!==i)=>{const o=Ue(t);let i=new Map(Object.entries(o??{}));const s={dispose:[],get:[],set:[],reset:[]},r=()=>{var g;i=new Map(Object.entries((g=Ue(t))!==null&&g!==void 0?g:{})),s.reset.forEach(b=>b())},n=()=>{s.dispose.forEach(g=>g()),r()},a=g=>(s.get.forEach(b=>b(g)),i.get(g)),l=(g,b)=>{const v=i.get(g);e(b,v,g)&&(i.set(g,b),s.set.forEach(y=>y(g,b,v)))},d=typeof Proxy>"u"?{}:new Proxy(o,{get(g,b){return a(b)},ownKeys(g){return Array.from(i.keys())},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},has(g,b){return i.has(b)},set(g,b,v){return l(b,v),!0}}),h=(g,b)=>(s[g].push(b),()=>{on(s[g],b)});return{state:d,get:a,set:l,on:h,onChange:(g,b)=>{const v=h("set",(w,k)=>{w===g&&b(k)}),y=h("reset",()=>b(Ue(t)[g]));return()=>{v(),y()}},use:(...g)=>{const b=g.reduce((v,y)=>(y.set&&v.push(h("set",y.set)),y.get&&v.push(h("get",y.get)),y.reset&&v.push(h("reset",y.reset)),y.dispose&&v.push(h("dispose",y.dispose)),v),[]);return()=>b.forEach(v=>v())},dispose:n,reset:r,forceUpdate:g=>{const b=i.get(g);s.set.forEach(v=>v(g,b,b))}}},on=(t,e)=>{const o=t.indexOf(e);o>=0&&(t[o]=t[t.length-1],t.length--)},sn=(t,e)=>{const o=en(t,e);return o.use(tn()),o},{state:z,onChange:It}=sn({images:[],videos:[],generationID:[],mainPanel:"image",currentSlide:0});function rn(t){z.images=[...z.images,t]}function nn(t){const e=[...z.videos];e[z.currentSlide]=t,z.videos=e}function ln(t){const e=[...z.generationID];e[z.currentSlide]=t,z.generationID=e}function an(t){z.mainPanel=t}function cn(t){z.currentSlide=t}const Ne=t=>`
  <sl-carousel-item>
    <img src='${t}' class='w-full h-full cursor-pointer' alt="" />
  </sl-carousel-item>
`,dn=()=>{const t=document.querySelector(".nav-carousel"),e=document.querySelector("#modal-image"),o=document.querySelector(".dialog-width");It("images",s=>{let r="";for(const a of s)r+=Ne(a);t.innerHTML=r,e.innerHTML=Ne(s[z.currentSlide]),document.querySelectorAll(".nav-carousel img").forEach(a=>a.addEventListener("click",l=>o.show()))}),It("currentSlide",s=>{e.innerHTML=Ne(z.images[s])}),t.addEventListener("sl-slide-change",s=>{const r=s.detail.index;cn(r)}),o.querySelector('sl-button[slot="footer"]').addEventListener("click",()=>{const s=document.createElement("a");s.href=z.images[z.currentSlide],s.download="generatedImage.png",document.body.appendChild(s),s.click()})},un=()=>(setTimeout(()=>dn(),0),`
  <sl-carousel class="vertical nav-carousel" pagination orientation="vertical" style="--aspect-ratio: 3/2;"></sl-carousel>
  <sl-dialog label="Full Image" class="dialog-width" style="--width: 90vw;">
    <div id="modal-image"></div>
    <sl-button slot="footer" variant="primary">Download image</sl-button>
  </sl-dialog>
  <style>
  .vertical {
    max-height: 400px;
  }

  .vertical::part(base) {
    grid-template-areas: 'slides slides pagination';
  }

  .vertical::part(pagination) {
    flex-direction: column;
  }

  .vertical::part(navigation) {
    transform: rotate(90deg);
    display: flex;
  }
  </style>

`);var Ui=I`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,hn=I`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear:not(.input__clear--visible) {
    visibility: hidden;
  }

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Ni=(t="value")=>(e,o)=>{const i=e.constructor,s=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(r,n,a){var l;const d=i.getPropertyOptions(t),h=typeof d.attribute=="string"?d.attribute:t;if(r===h){const u=d.converter||Mt,f=(typeof u=="function"?u:(l=u==null?void 0:u.fromAttribute)!=null?l:Mt.fromAttribute)(a,d.type);this[t]!==f&&(this[o]=f)}s.call(this,r,n,a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn=lo(class extends ao{constructor(t){if(super(t),t.type!==ct.PROPERTY&&t.type!==ct.ATTRIBUTE&&t.type!==ct.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Xs(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Y||e===T)return e;const o=t.element,i=t.name;if(t.type===ct.PROPERTY){if(e===o[i])return Y}else if(t.type===ct.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return Y}else if(t.type===ct.ATTRIBUTE&&o.getAttribute(i)===e+"")return Y;return Js(t),e}});var _=class extends B{constructor(){super(...arguments),this.formControlController=new ro(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ce(this,"help-text","label"),this.localize=new mt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var t;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((t=this.input)==null?void 0:t.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(t){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=t,this.value=this.__dateInput.value}get valueAsNumber(){var t;return this.__numberInput.value=this.value,((t=this.input)==null?void 0:t.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(t){this.__numberInput.valueAsNumber=t,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{!t.defaultPrevented&&!t.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){const s=e??this.input.selectionStart,r=o??this.input.selectionEnd;this.input.setRangeText(t,s,r,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.formControlController.updateValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&!this.readonly,r=s&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${D({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${$(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${$(this.placeholder)}
              minlength=${$(this.minlength)}
              maxlength=${$(this.maxlength)}
              min=${$(this.min)}
              max=${$(this.max)}
              step=${$(this.step)}
              .value=${pn(this.value)}
              autocapitalize=${$(this.autocapitalize)}
              autocomplete=${$(this.autocomplete)}
              autocorrect=${$(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${$(this.pattern)}
              enterkeyhint=${$(this.enterkeyhint)}
              inputmode=${$(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${s?C`
                  <button
                    part="clear-button"
                    class=${D({input__clear:!0,"input__clear--visible":r})}
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?C`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?C`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:C`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};_.styles=[G,Ui,hn];_.dependencies={"sl-icon":q};c([M(".input__control")],_.prototype,"input",2);c([J()],_.prototype,"hasFocus",2);c([p()],_.prototype,"title",2);c([p({reflect:!0})],_.prototype,"type",2);c([p()],_.prototype,"name",2);c([p()],_.prototype,"value",2);c([Ni()],_.prototype,"defaultValue",2);c([p({reflect:!0})],_.prototype,"size",2);c([p({type:Boolean,reflect:!0})],_.prototype,"filled",2);c([p({type:Boolean,reflect:!0})],_.prototype,"pill",2);c([p()],_.prototype,"label",2);c([p({attribute:"help-text"})],_.prototype,"helpText",2);c([p({type:Boolean})],_.prototype,"clearable",2);c([p({type:Boolean,reflect:!0})],_.prototype,"disabled",2);c([p()],_.prototype,"placeholder",2);c([p({type:Boolean,reflect:!0})],_.prototype,"readonly",2);c([p({attribute:"password-toggle",type:Boolean})],_.prototype,"passwordToggle",2);c([p({attribute:"password-visible",type:Boolean})],_.prototype,"passwordVisible",2);c([p({attribute:"no-spin-buttons",type:Boolean})],_.prototype,"noSpinButtons",2);c([p({reflect:!0})],_.prototype,"form",2);c([p({type:Boolean,reflect:!0})],_.prototype,"required",2);c([p()],_.prototype,"pattern",2);c([p({type:Number})],_.prototype,"minlength",2);c([p({type:Number})],_.prototype,"maxlength",2);c([p()],_.prototype,"min",2);c([p()],_.prototype,"max",2);c([p()],_.prototype,"step",2);c([p()],_.prototype,"autocapitalize",2);c([p()],_.prototype,"autocorrect",2);c([p()],_.prototype,"autocomplete",2);c([p({type:Boolean})],_.prototype,"autofocus",2);c([p()],_.prototype,"enterkeyhint",2);c([p({type:Boolean,converter:{fromAttribute:t=>!(!t||t==="false"),toAttribute:t=>t?"true":"false"}})],_.prototype,"spellcheck",2);c([p()],_.prototype,"inputmode",2);c([R("disabled",{waitUntilFirstUpdate:!0})],_.prototype,"handleDisabledChange",1);c([R("step",{waitUntilFirstUpdate:!0})],_.prototype,"handleStepChange",1);c([R("value",{waitUntilFirstUpdate:!0})],_.prototype,"handleValueChange",1);_.define("sl-input");var fn=I`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Hi=class extends B{constructor(){super(...arguments),this.hasSlotController=new ce(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${D({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Hi.styles=[G,fn];Hi.define("sl-card");var gn=I`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Et=class extends B{constructor(){super(...arguments),this.localize=new mt(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return C`
      <span
        part="base"
        class=${D({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?C`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </span>
    `}};Et.styles=[G,gn];Et.dependencies={"sl-icon-button":F};c([p({reflect:!0})],Et.prototype,"variant",2);c([p({reflect:!0})],Et.prototype,"size",2);c([p({type:Boolean,reflect:!0})],Et.prototype,"pill",2);c([p({type:Boolean})],Et.prototype,"removable",2);var mn=I`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix */
  .select__prefix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,bn=I`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const ht=Math.min,V=Math.max,Se=Math.round,ge=Math.floor,pt=t=>({x:t,y:t}),vn={left:"right",right:"left",bottom:"top",top:"bottom"},yn={start:"end",end:"start"};function Ze(t,e,o){return V(t,ht(e,o))}function Ut(t,e){return typeof t=="function"?t(e):t}function ft(t){return t.split("-")[0]}function Nt(t){return t.split("-")[1]}function Vi(t){return t==="x"?"y":"x"}function mo(t){return t==="y"?"height":"width"}function de(t){return["top","bottom"].includes(ft(t))?"y":"x"}function bo(t){return Vi(de(t))}function wn(t,e,o){o===void 0&&(o=!1);const i=Nt(t),s=bo(t),r=mo(s);let n=s==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(n=Ce(n)),[n,Ce(n)]}function _n(t){const e=Ce(t);return[Qe(t),e,Qe(e)]}function Qe(t){return t.replace(/start|end/g,e=>yn[e])}function $n(t,e,o){const i=["left","right"],s=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(t){case"top":case"bottom":return o?e?s:i:e?i:s;case"left":case"right":return e?r:n;default:return[]}}function xn(t,e,o,i){const s=Nt(t);let r=$n(ft(t),o==="start",i);return s&&(r=r.map(n=>n+"-"+s),e&&(r=r.concat(r.map(Qe)))),r}function Ce(t){return t.replace(/left|right|bottom|top/g,e=>vn[e])}function kn(t){return{top:0,right:0,bottom:0,left:0,...t}}function ji(t){return typeof t!="number"?kn(t):{top:t,right:t,bottom:t,left:t}}function Ae(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function ni(t,e,o){let{reference:i,floating:s}=t;const r=de(e),n=bo(e),a=mo(n),l=ft(e),d=r==="y",h=i.x+i.width/2-s.width/2,u=i.y+i.height/2-s.height/2,m=i[a]/2-s[a]/2;let f;switch(l){case"top":f={x:h,y:i.y-s.height};break;case"bottom":f={x:h,y:i.y+i.height};break;case"right":f={x:i.x+i.width,y:u};break;case"left":f={x:i.x-s.width,y:u};break;default:f={x:i.x,y:i.y}}switch(Nt(e)){case"start":f[n]-=m*(o&&d?-1:1);break;case"end":f[n]+=m*(o&&d?-1:1);break}return f}const Sn=async(t,e,o)=>{const{placement:i="bottom",strategy:s="absolute",middleware:r=[],platform:n}=o,a=r.filter(Boolean),l=await(n.isRTL==null?void 0:n.isRTL(e));let d=await n.getElementRects({reference:t,floating:e,strategy:s}),{x:h,y:u}=ni(d,i,l),m=i,f={},g=0;for(let b=0;b<a.length;b++){const{name:v,fn:y}=a[b],{x:w,y:k,data:L,reset:E}=await y({x:h,y:u,initialPlacement:i,placement:m,strategy:s,middlewareData:f,rects:d,platform:n,elements:{reference:t,floating:e}});h=w??h,u=k??u,f={...f,[v]:{...f[v],...L}},E&&g<=50&&(g++,typeof E=="object"&&(E.placement&&(m=E.placement),E.rects&&(d=E.rects===!0?await n.getElementRects({reference:t,floating:e,strategy:s}):E.rects),{x:h,y:u}=ni(d,m,l)),b=-1)}return{x:h,y:u,placement:m,strategy:s,middlewareData:f}};async function vo(t,e){var o;e===void 0&&(e={});const{x:i,y:s,platform:r,rects:n,elements:a,strategy:l}=t,{boundary:d="clippingAncestors",rootBoundary:h="viewport",elementContext:u="floating",altBoundary:m=!1,padding:f=0}=Ut(e,t),g=ji(f),v=a[m?u==="floating"?"reference":"floating":u],y=Ae(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:d,rootBoundary:h,strategy:l})),w=u==="floating"?{...n.floating,x:i,y:s}:n.reference,k=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),L=await(r.isElement==null?void 0:r.isElement(k))?await(r.getScale==null?void 0:r.getScale(k))||{x:1,y:1}:{x:1,y:1},E=Ae(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:w,offsetParent:k,strategy:l}):w);return{top:(y.top-E.top+g.top)/L.y,bottom:(E.bottom-y.bottom+g.bottom)/L.y,left:(y.left-E.left+g.left)/L.x,right:(E.right-y.right+g.right)/L.x}}const Cn=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:i,placement:s,rects:r,platform:n,elements:a,middlewareData:l}=e,{element:d,padding:h=0}=Ut(t,e)||{};if(d==null)return{};const u=ji(h),m={x:o,y:i},f=bo(s),g=mo(f),b=await n.getDimensions(d),v=f==="y",y=v?"top":"left",w=v?"bottom":"right",k=v?"clientHeight":"clientWidth",L=r.reference[g]+r.reference[f]-m[f]-r.floating[g],E=m[f]-r.reference[f],O=await(n.getOffsetParent==null?void 0:n.getOffsetParent(d));let U=O?O[k]:0;(!U||!await(n.isElement==null?void 0:n.isElement(O)))&&(U=a.floating[k]||r.floating[g]);const Z=L/2-E/2,at=U/2-b[g]/2-1,Ht=ht(u[y],at),Vt=ht(u[w],at),K=Ht,jt=U-b[g]-Vt,N=U/2-b[g]/2+Z,Q=Ze(K,N,jt),tt=!l.arrow&&Nt(s)!=null&&N!==Q&&r.reference[g]/2-(N<K?Ht:Vt)-b[g]/2<0,st=tt?N<K?N-K:N-jt:0;return{[f]:m[f]+st,data:{[f]:Q,centerOffset:N-Q-st,...tt&&{alignmentOffset:st}},reset:tt}}}),An=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,i;const{placement:s,middlewareData:r,rects:n,initialPlacement:a,platform:l,elements:d}=e,{mainAxis:h=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...v}=Ut(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const y=ft(s),w=ft(a)===a,k=await(l.isRTL==null?void 0:l.isRTL(d.floating)),L=m||(w||!b?[Ce(a)]:_n(a));!m&&g!=="none"&&L.push(...xn(a,b,g,k));const E=[a,...L],O=await vo(e,v),U=[];let Z=((i=r.flip)==null?void 0:i.overflows)||[];if(h&&U.push(O[y]),u){const K=wn(s,n,k);U.push(O[K[0]],O[K[1]])}if(Z=[...Z,{placement:s,overflows:U}],!U.every(K=>K<=0)){var at,Ht;const K=(((at=r.flip)==null?void 0:at.index)||0)+1,jt=E[K];if(jt)return{data:{index:K,overflows:Z},reset:{placement:jt}};let N=(Ht=Z.filter(Q=>Q.overflows[0]<=0).sort((Q,tt)=>Q.overflows[1]-tt.overflows[1])[0])==null?void 0:Ht.placement;if(!N)switch(f){case"bestFit":{var Vt;const Q=(Vt=Z.map(tt=>[tt.placement,tt.overflows.filter(st=>st>0).reduce((st,Qi)=>st+Qi,0)]).sort((tt,st)=>tt[1]-st[1])[0])==null?void 0:Vt[0];Q&&(N=Q);break}case"initialPlacement":N=a;break}if(s!==N)return{reset:{placement:N}}}return{}}}};async function En(t,e){const{placement:o,platform:i,elements:s}=t,r=await(i.isRTL==null?void 0:i.isRTL(s.floating)),n=ft(o),a=Nt(o),l=de(o)==="y",d=["left","top"].includes(n)?-1:1,h=r&&l?-1:1,u=Ut(e,t);let{mainAxis:m,crossAxis:f,alignmentAxis:g}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return a&&typeof g=="number"&&(f=a==="end"?g*-1:g),l?{x:f*h,y:m*d}:{x:m*d,y:f*h}}const Tn=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,i;const{x:s,y:r,placement:n,middlewareData:a}=e,l=await En(e,t);return n===((o=a.offset)==null?void 0:o.placement)&&(i=a.arrow)!=null&&i.alignmentOffset?{}:{x:s+l.x,y:r+l.y,data:{...l,placement:n}}}}},Pn=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:s}=e,{mainAxis:r=!0,crossAxis:n=!1,limiter:a={fn:v=>{let{x:y,y:w}=v;return{x:y,y:w}}},...l}=Ut(t,e),d={x:o,y:i},h=await vo(e,l),u=de(ft(s)),m=Vi(u);let f=d[m],g=d[u];if(r){const v=m==="y"?"top":"left",y=m==="y"?"bottom":"right",w=f+h[v],k=f-h[y];f=Ze(w,f,k)}if(n){const v=u==="y"?"top":"left",y=u==="y"?"bottom":"right",w=g+h[v],k=g-h[y];g=Ze(w,g,k)}const b=a.fn({...e,[m]:f,[u]:g});return{...b,data:{x:b.x-o,y:b.y-i}}}}},Ln=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:s,elements:r}=e,{apply:n=()=>{},...a}=Ut(t,e),l=await vo(e,a),d=ft(o),h=Nt(o),u=de(o)==="y",{width:m,height:f}=i.floating;let g,b;d==="top"||d==="bottom"?(g=d,b=h===(await(s.isRTL==null?void 0:s.isRTL(r.floating))?"start":"end")?"left":"right"):(b=d,g=h==="end"?"top":"bottom");const v=f-l[g],y=m-l[b],w=!e.middlewareData.shift;let k=v,L=y;if(u){const O=m-l.left-l.right;L=h||w?ht(y,O):O}else{const O=f-l.top-l.bottom;k=h||w?ht(v,O):O}if(w&&!h){const O=V(l.left,0),U=V(l.right,0),Z=V(l.top,0),at=V(l.bottom,0);u?L=m-2*(O!==0||U!==0?O+U:V(l.left,l.right)):k=f-2*(Z!==0||at!==0?Z+at:V(l.top,l.bottom))}await n({...e,availableWidth:L,availableHeight:k});const E=await s.getDimensions(r.floating);return m!==E.width||f!==E.height?{reset:{rects:!0}}:{}}}};function gt(t){return Wi(t)?(t.nodeName||"").toLowerCase():"#document"}function j(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function lt(t){var e;return(e=(Wi(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Wi(t){return t instanceof Node||t instanceof j(t).Node}function nt(t){return t instanceof Element||t instanceof j(t).Element}function ot(t){return t instanceof HTMLElement||t instanceof j(t).HTMLElement}function li(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof j(t).ShadowRoot}function ue(t){const{overflow:e,overflowX:o,overflowY:i,display:s}=X(t);return/auto|scroll|overlay|hidden|clip/.test(e+i+o)&&!["inline","contents"].includes(s)}function On(t){return["table","td","th"].includes(gt(t))}function yo(t){const e=wo(),o=X(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(i=>(o.willChange||"").includes(i))||["paint","layout","strict","content"].some(i=>(o.contain||"").includes(i))}function zn(t){let e=Ft(t);for(;ot(e)&&!Pe(e);){if(yo(e))return e;e=Ft(e)}return null}function wo(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Pe(t){return["html","body","#document"].includes(gt(t))}function X(t){return j(t).getComputedStyle(t)}function Le(t){return nt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function Ft(t){if(gt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||li(t)&&t.host||lt(t);return li(e)?e.host:e}function qi(t){const e=Ft(t);return Pe(e)?t.ownerDocument?t.ownerDocument.body:t.body:ot(e)&&ue(e)?e:qi(e)}function le(t,e,o){var i;e===void 0&&(e=[]),o===void 0&&(o=!0);const s=qi(t),r=s===((i=t.ownerDocument)==null?void 0:i.body),n=j(s);return r?e.concat(n,n.visualViewport||[],ue(s)?s:[],n.frameElement&&o?le(n.frameElement):[]):e.concat(s,le(s,[],o))}function Ki(t){const e=X(t);let o=parseFloat(e.width)||0,i=parseFloat(e.height)||0;const s=ot(t),r=s?t.offsetWidth:o,n=s?t.offsetHeight:i,a=Se(o)!==r||Se(i)!==n;return a&&(o=r,i=n),{width:o,height:i,$:a}}function _o(t){return nt(t)?t:t.contextElement}function Dt(t){const e=_o(t);if(!ot(e))return pt(1);const o=e.getBoundingClientRect(),{width:i,height:s,$:r}=Ki(e);let n=(r?Se(o.width):o.width)/i,a=(r?Se(o.height):o.height)/s;return(!n||!Number.isFinite(n))&&(n=1),(!a||!Number.isFinite(a))&&(a=1),{x:n,y:a}}const Rn=pt(0);function Yi(t){const e=j(t);return!wo()||!e.visualViewport?Rn:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Dn(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==j(t)?!1:e}function St(t,e,o,i){e===void 0&&(e=!1),o===void 0&&(o=!1);const s=t.getBoundingClientRect(),r=_o(t);let n=pt(1);e&&(i?nt(i)&&(n=Dt(i)):n=Dt(t));const a=Dn(r,o,i)?Yi(r):pt(0);let l=(s.left+a.x)/n.x,d=(s.top+a.y)/n.y,h=s.width/n.x,u=s.height/n.y;if(r){const m=j(r),f=i&&nt(i)?j(i):i;let g=m,b=g.frameElement;for(;b&&i&&f!==g;){const v=Dt(b),y=b.getBoundingClientRect(),w=X(b),k=y.left+(b.clientLeft+parseFloat(w.paddingLeft))*v.x,L=y.top+(b.clientTop+parseFloat(w.paddingTop))*v.y;l*=v.x,d*=v.y,h*=v.x,u*=v.y,l+=k,d+=L,g=j(b),b=g.frameElement}}return Ae({width:h,height:u,x:l,y:d})}const Mn=[":popover-open",":modal"];function Xi(t){return Mn.some(e=>{try{return t.matches(e)}catch{return!1}})}function Bn(t){let{elements:e,rect:o,offsetParent:i,strategy:s}=t;const r=s==="fixed",n=lt(i),a=e?Xi(e.floating):!1;if(i===n||a&&r)return o;let l={scrollLeft:0,scrollTop:0},d=pt(1);const h=pt(0),u=ot(i);if((u||!u&&!r)&&((gt(i)!=="body"||ue(n))&&(l=Le(i)),ot(i))){const m=St(i);d=Dt(i),h.x=m.x+i.clientLeft,h.y=m.y+i.clientTop}return{width:o.width*d.x,height:o.height*d.y,x:o.x*d.x-l.scrollLeft*d.x+h.x,y:o.y*d.y-l.scrollTop*d.y+h.y}}function In(t){return Array.from(t.getClientRects())}function Gi(t){return St(lt(t)).left+Le(t).scrollLeft}function Fn(t){const e=lt(t),o=Le(t),i=t.ownerDocument.body,s=V(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),r=V(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let n=-o.scrollLeft+Gi(t);const a=-o.scrollTop;return X(i).direction==="rtl"&&(n+=V(e.clientWidth,i.clientWidth)-s),{width:s,height:r,x:n,y:a}}function Un(t,e){const o=j(t),i=lt(t),s=o.visualViewport;let r=i.clientWidth,n=i.clientHeight,a=0,l=0;if(s){r=s.width,n=s.height;const d=wo();(!d||d&&e==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}return{width:r,height:n,x:a,y:l}}function Nn(t,e){const o=St(t,!0,e==="fixed"),i=o.top+t.clientTop,s=o.left+t.clientLeft,r=ot(t)?Dt(t):pt(1),n=t.clientWidth*r.x,a=t.clientHeight*r.y,l=s*r.x,d=i*r.y;return{width:n,height:a,x:l,y:d}}function ai(t,e,o){let i;if(e==="viewport")i=Un(t,o);else if(e==="document")i=Fn(lt(t));else if(nt(e))i=Nn(e,o);else{const s=Yi(t);i={...e,x:e.x-s.x,y:e.y-s.y}}return Ae(i)}function Ji(t,e){const o=Ft(t);return o===e||!nt(o)||Pe(o)?!1:X(o).position==="fixed"||Ji(o,e)}function Hn(t,e){const o=e.get(t);if(o)return o;let i=le(t,[],!1).filter(a=>nt(a)&&gt(a)!=="body"),s=null;const r=X(t).position==="fixed";let n=r?Ft(t):t;for(;nt(n)&&!Pe(n);){const a=X(n),l=yo(n);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||ue(n)&&!l&&Ji(t,n))?i=i.filter(h=>h!==n):s=a,n=Ft(n)}return e.set(t,i),i}function Vn(t){let{element:e,boundary:o,rootBoundary:i,strategy:s}=t;const n=[...o==="clippingAncestors"?Hn(e,this._c):[].concat(o),i],a=n[0],l=n.reduce((d,h)=>{const u=ai(e,h,s);return d.top=V(u.top,d.top),d.right=ht(u.right,d.right),d.bottom=ht(u.bottom,d.bottom),d.left=V(u.left,d.left),d},ai(e,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function jn(t){const{width:e,height:o}=Ki(t);return{width:e,height:o}}function Wn(t,e,o){const i=ot(e),s=lt(e),r=o==="fixed",n=St(t,!0,r,e);let a={scrollLeft:0,scrollTop:0};const l=pt(0);if(i||!i&&!r)if((gt(e)!=="body"||ue(s))&&(a=Le(e)),i){const u=St(e,!0,r,e);l.x=u.x+e.clientLeft,l.y=u.y+e.clientTop}else s&&(l.x=Gi(s));const d=n.left+a.scrollLeft-l.x,h=n.top+a.scrollTop-l.y;return{x:d,y:h,width:n.width,height:n.height}}function ci(t,e){return!ot(t)||X(t).position==="fixed"?null:e?e(t):t.offsetParent}function Zi(t,e){const o=j(t);if(!ot(t)||Xi(t))return o;let i=ci(t,e);for(;i&&On(i)&&X(i).position==="static";)i=ci(i,e);return i&&(gt(i)==="html"||gt(i)==="body"&&X(i).position==="static"&&!yo(i))?o:i||zn(t)||o}const qn=async function(t){const e=this.getOffsetParent||Zi,o=this.getDimensions;return{reference:Wn(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await o(t.floating)}}};function Kn(t){return X(t).direction==="rtl"}const ve={convertOffsetParentRelativeRectToViewportRelativeRect:Bn,getDocumentElement:lt,getClippingRect:Vn,getOffsetParent:Zi,getElementRects:qn,getClientRects:In,getDimensions:jn,getScale:Dt,isElement:nt,isRTL:Kn};function Yn(t,e){let o=null,i;const s=lt(t);function r(){var a;clearTimeout(i),(a=o)==null||a.disconnect(),o=null}function n(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const{left:d,top:h,width:u,height:m}=t.getBoundingClientRect();if(a||e(),!u||!m)return;const f=ge(h),g=ge(s.clientWidth-(d+u)),b=ge(s.clientHeight-(h+m)),v=ge(d),w={rootMargin:-f+"px "+-g+"px "+-b+"px "+-v+"px",threshold:V(0,ht(1,l))||1};let k=!0;function L(E){const O=E[0].intersectionRatio;if(O!==l){if(!k)return n();O?n(!1,O):i=setTimeout(()=>{n(!1,1e-7)},100)}k=!1}try{o=new IntersectionObserver(L,{...w,root:s.ownerDocument})}catch{o=new IntersectionObserver(L,w)}o.observe(t)}return n(!0),r}function Xn(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=i,d=_o(t),h=s||r?[...d?le(d):[],...le(e)]:[];h.forEach(y=>{s&&y.addEventListener("scroll",o,{passive:!0}),r&&y.addEventListener("resize",o)});const u=d&&a?Yn(d,o):null;let m=-1,f=null;n&&(f=new ResizeObserver(y=>{let[w]=y;w&&w.target===d&&f&&(f.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var k;(k=f)==null||k.observe(e)})),o()}),d&&!l&&f.observe(d),f.observe(e));let g,b=l?St(t):null;l&&v();function v(){const y=St(t);b&&(y.x!==b.x||y.y!==b.y||y.width!==b.width||y.height!==b.height)&&o(),b=y,g=requestAnimationFrame(v)}return o(),()=>{var y;h.forEach(w=>{s&&w.removeEventListener("scroll",o),r&&w.removeEventListener("resize",o)}),u==null||u(),(y=f)==null||y.disconnect(),f=null,l&&cancelAnimationFrame(g)}}const Gn=Pn,Jn=An,di=Ln,Zn=Cn,Qn=(t,e,o)=>{const i=new Map,s={platform:ve,...o},r={...s.platform,_c:i};return Sn(t,e,{...s,platform:r})};function tl(t){return el(t)}function He(t){return t.assignedSlot?t.assignedSlot:t.parentNode instanceof ShadowRoot?t.parentNode.host:t.parentNode}function el(t){for(let e=t;e;e=He(e))if(e instanceof Element&&getComputedStyle(e).display==="none")return null;for(let e=He(t);e;e=He(e)){if(!(e instanceof Element))continue;const o=getComputedStyle(e);if(o.display!=="contents"&&(o.position!=="static"||o.filter!=="none"||e.tagName==="BODY"))return e}return null}function ol(t){return t!==null&&typeof t=="object"&&"getBoundingClientRect"in t}var A=class extends B{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const t=this.anchorEl.getBoundingClientRect(),e=this.popup.getBoundingClientRect(),o=this.placement.includes("top")||this.placement.includes("bottom");let i=0,s=0,r=0,n=0,a=0,l=0,d=0,h=0;o?t.top<e.top?(i=t.left,s=t.bottom,r=t.right,n=t.bottom,a=e.left,l=e.top,d=e.right,h=e.top):(i=e.left,s=e.bottom,r=e.right,n=e.bottom,a=t.left,l=t.top,d=t.right,h=t.top):t.left<e.left?(i=t.right,s=t.top,r=e.left,n=e.top,a=t.right,l=t.bottom,d=e.left,h=e.bottom):(i=e.right,s=e.top,r=t.left,n=t.top,a=e.right,l=e.bottom,d=t.left,h=t.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${i}px`),this.style.setProperty("--hover-bridge-top-left-y",`${s}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${a}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${l}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${d}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${h}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof Element||ol(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=Xn(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}reposition(){if(!this.active||!this.anchorEl)return;const t=[Tn({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(di({apply:({rects:o})=>{const i=this.sync==="width"||this.sync==="both",s=this.sync==="height"||this.sync==="both";this.popup.style.width=i?`${o.reference.width}px`:"",this.popup.style.height=s?`${o.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(Jn({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(Gn({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(di({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:o,availableHeight:i})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${i}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${o}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(Zn({element:this.arrowEl,padding:this.arrowPadding}));const e=this.strategy==="absolute"?o=>ve.getOffsetParent(o,tl):ve.getOffsetParent;Qn(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy,platform:Te(Ct({},ve),{getOffsetParent:e})}).then(({x:o,y:i,middlewareData:s,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${o}px`,top:`${i}px`}),this.arrow){const l=s.arrow.x,d=s.arrow.y;let h="",u="",m="",f="";if(this.arrowPlacement==="start"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",u=n?g:"",f=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof l=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=n?"":g,f=n?g:"",m=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof l=="number"?"calc(50% - var(--arrow-size-diagonal))":"",h=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof l=="number"?`${l}px`:"",h=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:h,right:u,bottom:m,left:f,[a]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return C`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${D({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${D({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?C`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};A.styles=[G,bn];c([M(".popup")],A.prototype,"popup",2);c([M(".popup__arrow")],A.prototype,"arrowEl",2);c([p()],A.prototype,"anchor",2);c([p({type:Boolean,reflect:!0})],A.prototype,"active",2);c([p({reflect:!0})],A.prototype,"placement",2);c([p({reflect:!0})],A.prototype,"strategy",2);c([p({type:Number})],A.prototype,"distance",2);c([p({type:Number})],A.prototype,"skidding",2);c([p({type:Boolean})],A.prototype,"arrow",2);c([p({attribute:"arrow-placement"})],A.prototype,"arrowPlacement",2);c([p({attribute:"arrow-padding",type:Number})],A.prototype,"arrowPadding",2);c([p({type:Boolean})],A.prototype,"flip",2);c([p({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],A.prototype,"flipFallbackPlacements",2);c([p({attribute:"flip-fallback-strategy"})],A.prototype,"flipFallbackStrategy",2);c([p({type:Object})],A.prototype,"flipBoundary",2);c([p({attribute:"flip-padding",type:Number})],A.prototype,"flipPadding",2);c([p({type:Boolean})],A.prototype,"shift",2);c([p({type:Object})],A.prototype,"shiftBoundary",2);c([p({attribute:"shift-padding",type:Number})],A.prototype,"shiftPadding",2);c([p({attribute:"auto-size"})],A.prototype,"autoSize",2);c([p()],A.prototype,"sync",2);c([p({type:Object})],A.prototype,"autoSizeBoundary",2);c([p({attribute:"auto-size-padding",type:Number})],A.prototype,"autoSizePadding",2);c([p({attribute:"hover-bridge",type:Boolean})],A.prototype,"hoverBridge",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class to extends ao{constructor(e){if(super(e),this.it=T,e.type!==ct.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(e){if(e===T||e==null)return this._t=void 0,this.it=e;if(e===Y)return e;if(typeof e!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(e===this.it)return this._t;this.it=e;const o=[e];return o.raw=o,this._t={_$litType$:this.constructor.resultType,strings:o,values:[]}}}to.directiveName="unsafeHTML",to.resultType=1;const il=lo(to);var x=class extends B{constructor(){super(...arguments),this.formControlController=new ro(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new ce(this,"help-text","label"),this.localize=new mt(this),this.typeToSelectString="",this.hasFocus=!1,this.displayLabel="",this.selectedOptions=[],this.name="",this.value="",this.defaultValue="",this.size="medium",this.placeholder="",this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.form="",this.required=!1,this.getTag=t=>C`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${e=>this.handleTagRemove(e,t)}
      >
        ${t.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()},this.handleDocumentKeyDown=t=>{const e=t.target,o=e.closest(".select__clear")!==null,i=e.closest("sl-icon-button")!==null;if(!(o||i)){if(t.key==="Escape"&&this.open&&!this.closeWatcher&&(t.preventDefault(),t.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),t.key==="Enter"||t.key===" "&&this.typeToSelectString===""){if(t.preventDefault(),t.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if(["ArrowUp","ArrowDown","Home","End"].includes(t.key)){const s=this.getAllOptions(),r=s.indexOf(this.currentOption);let n=Math.max(0,r);if(t.preventDefault(),!this.open&&(this.show(),this.currentOption))return;t.key==="ArrowDown"?(n=r+1,n>s.length-1&&(n=0)):t.key==="ArrowUp"?(n=r-1,n<0&&(n=s.length-1)):t.key==="Home"?n=0:t.key==="End"&&(n=s.length-1),this.setCurrentOption(s[n])}if(t.key.length===1||t.key==="Backspace"){const s=this.getAllOptions();if(t.metaKey||t.ctrlKey||t.altKey)return;if(!this.open){if(t.key==="Backspace")return;this.show()}t.stopPropagation(),t.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const r of s)if(r.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(r);break}}}},this.handleDocumentMouseDown=t=>{const e=t.composedPath();this&&!e.includes(this)&&this.hide()}}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),this.open=!1}addOpenListeners(){var t;const e=this.getRootNode();"CloseWatcher"in window&&((t=this.closeWatcher)==null||t.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))}),e.addEventListener("focusin",this.handleDocumentFocusIn),e.addEventListener("keydown",this.handleDocumentKeyDown),e.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){var t;const e=this.getRootNode();e.removeEventListener("focusin",this.handleDocumentFocusIn),e.removeEventListener("keydown",this.handleDocumentKeyDown),e.removeEventListener("mousedown",this.handleDocumentMouseDown),(t=this.closeWatcher)==null||t.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit("sl-focus")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(t){const o=t.composedPath().some(i=>i instanceof Element&&i.tagName.toLowerCase()==="sl-icon-button");this.disabled||o||(t.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(t){t.key!=="Tab"&&(t.stopPropagation(),this.handleDocumentKeyDown(t))}handleClearClick(t){t.stopPropagation(),this.value!==""&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change")}))}handleClearMouseDown(t){t.stopPropagation(),t.preventDefault()}handleOptionClick(t){const o=t.target.closest("sl-option"),i=this.value;o&&!o.disabled&&(this.multiple?this.toggleOptionSelection(o):this.setSelectedOptions(o),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==i&&this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value],o=[];customElements.get("sl-option")?(t.forEach(i=>o.push(i.value)),this.setSelectedOptions(t.filter(i=>e.includes(i.value)))):customElements.whenDefined("sl-option").then(()=>this.handleDefaultSlotChange())}handleTagRemove(t,e){t.stopPropagation(),this.disabled||(this.toggleOptionSelection(e,!1),this.updateComplete.then(()=>{this.emit("sl-input"),this.emit("sl-change")}))}getAllOptions(){return[...this.querySelectorAll("sl-option")]}getFirstOption(){return this.querySelector("sl-option")}setCurrentOption(t){this.getAllOptions().forEach(o=>{o.current=!1,o.tabIndex=-1}),t&&(this.currentOption=t,t.current=!0,t.tabIndex=0,t.focus())}setSelectedOptions(t){const e=this.getAllOptions(),o=Array.isArray(t)?t:[t];e.forEach(i=>i.selected=!1),o.length&&o.forEach(i=>i.selected=!0),this.selectionChanged()}toggleOptionSelection(t,e){e===!0||e===!1?t.selected=e:t.selected=!t.selected,this.selectionChanged()}selectionChanged(){var t,e,o,i;this.selectedOptions=this.getAllOptions().filter(s=>s.selected),this.multiple?(this.value=this.selectedOptions.map(s=>s.value),this.placeholder&&this.value.length===0?this.displayLabel="":this.displayLabel=this.localize.term("numOptionsSelected",this.selectedOptions.length)):(this.value=(e=(t=this.selectedOptions[0])==null?void 0:t.value)!=null?e:"",this.displayLabel=(i=(o=this.selectedOptions[0])==null?void 0:o.getTextLabel())!=null?i:""),this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((t,e)=>{if(e<this.maxOptionsVisible||this.maxOptionsVisible<=0){const o=this.getTag(t,e);return C`<div @sl-remove=${i=>this.handleTagRemove(i,t)}>
          ${typeof o=="string"?il(o):o}
        </div>`}else if(e===this.maxOptionsVisible)return C`<sl-tag>+${this.selectedOptions.length-e}</sl-tag>`;return C``})}handleInvalid(t){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(t)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}handleValueChange(){const t=this.getAllOptions(),e=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(t.filter(o=>e.includes(o.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit("sl-show"),this.addOpenListeners(),await zt(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});const{keyframes:t,options:e}=wt(this,"select.show",{dir:this.localize.dir()});await yt(this.popup.popup,t,e),this.currentOption&&mr(this.currentOption,this.listbox,"vertical","auto"),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await zt(this);const{keyframes:t,options:e}=wt(this,"select.hide",{dir:this.localize.dir()});await yt(this.popup.popup,t,e),this.listbox.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,ie(this,"sl-after-show")}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,ie(this,"sl-after-hide")}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(t){this.valueInput.setCustomValidity(t),this.formControlController.updateValidity()}focus(t){this.displayInput.focus(t)}blur(){this.displayInput.blur()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,s=this.clearable&&!this.disabled&&this.value.length>0,r=this.placeholder&&this.value.length===0;return C`
      <div
        part="form-control"
        class=${D({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${o?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${D({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":r,"select--top":this.placement==="top","select--bottom":this.placement==="bottom","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large"})}
            placement=${this.placement}
            strategy=${this.hoist?"fixed":"absolute"}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?"true":"false"}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?"true":"false"}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?C`<div part="tags" class="select__tags">${this.tags}</div>`:""}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(", "):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${s?C`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?"true":"false"}
              aria-multiselectable=${this.multiple?"true":"false"}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};x.styles=[G,Ui,mn];x.dependencies={"sl-icon":q,"sl-popup":A,"sl-tag":Et};c([M(".select")],x.prototype,"popup",2);c([M(".select__combobox")],x.prototype,"combobox",2);c([M(".select__display-input")],x.prototype,"displayInput",2);c([M(".select__value-input")],x.prototype,"valueInput",2);c([M(".select__listbox")],x.prototype,"listbox",2);c([J()],x.prototype,"hasFocus",2);c([J()],x.prototype,"displayLabel",2);c([J()],x.prototype,"currentOption",2);c([J()],x.prototype,"selectedOptions",2);c([p()],x.prototype,"name",2);c([p({converter:{fromAttribute:t=>t.split(" "),toAttribute:t=>t.join(" ")}})],x.prototype,"value",2);c([Ni()],x.prototype,"defaultValue",2);c([p({reflect:!0})],x.prototype,"size",2);c([p()],x.prototype,"placeholder",2);c([p({type:Boolean,reflect:!0})],x.prototype,"multiple",2);c([p({attribute:"max-options-visible",type:Number})],x.prototype,"maxOptionsVisible",2);c([p({type:Boolean,reflect:!0})],x.prototype,"disabled",2);c([p({type:Boolean})],x.prototype,"clearable",2);c([p({type:Boolean,reflect:!0})],x.prototype,"open",2);c([p({type:Boolean})],x.prototype,"hoist",2);c([p({type:Boolean,reflect:!0})],x.prototype,"filled",2);c([p({type:Boolean,reflect:!0})],x.prototype,"pill",2);c([p()],x.prototype,"label",2);c([p({reflect:!0})],x.prototype,"placement",2);c([p({attribute:"help-text"})],x.prototype,"helpText",2);c([p({reflect:!0})],x.prototype,"form",2);c([p({type:Boolean,reflect:!0})],x.prototype,"required",2);c([p()],x.prototype,"getTag",2);c([R("disabled",{waitUntilFirstUpdate:!0})],x.prototype,"handleDisabledChange",1);c([R("value",{waitUntilFirstUpdate:!0})],x.prototype,"handleValueChange",1);c([R("open",{waitUntilFirstUpdate:!0})],x.prototype,"handleOpenChange",1);At("select.show",{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:"ease"}});At("select.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:"ease"}});x.define("sl-select");so.define("sl-spinner");async function sl(){const t=document.querySelector(".spinner");t.classList.remove("hidden");try{let e=document.querySelector("#prompt").value;(!e||e.length<1)&&(e=document.querySelector("#promptSelect").value.replace(/_/g," "));const i=await fetch("https://imagine.motionstoryline.com/image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!i.ok)throw new Error("Network response was not ok");const s=await i.blob(),r=await rl(URL.createObjectURL(s));rn(r)}catch(e){console.error("Error generating image:",e),alert("Something has gone wrong. Please try again.")}t.classList.add("hidden")}async function rl(t,e=768,o=768){try{const i=document.getElementById("canvas");if(!i)throw new Error("Canvas element not found");const s=i.getContext("2d");if(!s)throw new Error("Unable to get canvas context");i.width=e,i.height=o;const r=new Image;return r.src=t,await new Promise((a,l)=>{r.onload=()=>{s.drawImage(r,0,0,i.width,i.height);const d=i.toDataURL();a(d)},r.onerror=()=>l(new Error("Image loading error"))})}catch(i){throw console.error("Error cropping image:",i),i}}const ui=t=>`
  <img src='${t}' class='max-w-full max-h-[calc(100vh-188px-60px)]' />
`,hi=()=>(setTimeout(()=>nl(),0),`
  <div>
    <sl-card class="card-header w-full px-10">
      <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: darkgreen;"></sl-spinner>
      <p>Describe the image you want to generate.</p>
      <sl-input id="prompt" placeholder="Image description prompt" filled></sl-input>
      <br />
      <sl-select id="promptSelect" label="Or start with a preset" size="small" clearable placement="top" value="Fluffy_catbear_in_his_natural_habitat">
        <sl-option value="Fluffy_catbear_in_his_natural_habitat">Fluffy catbear in his natural habitat</sl-option>
        <sl-option value="Fluffy_dragon_cat_photo_by_National_Geographic">Fluffy dragon cat photo by National Geographic</sl-option>
        <sl-option value="White_monkey_parrot_in_African_jungle">White monkey parrot in African jungle</sl-option>
      </sl-select>
      <sl-button id="generate" class="py-2">Generate Image</sl-button>
    </sl-card>
    <div id="image-container" class="w-full px-10 py-3 overflow-hidden mb-2"></div>
    <canvas id="canvas" class="hidden"></canvas>
  </div>
`),nl=()=>{document.querySelector("#generate").addEventListener("click",sl);const e=document.querySelector("#image-container");It("images",o=>{e.innerHTML=ui(o[o.length-1])}),It("currentSlide",o=>{e.innerHTML=ui(z.images[o])})};async function ll(t){const o=await(await fetch(t)).blob();return new Promise((i,s)=>{const r=new FileReader;r.onloadend=()=>i(r.result.split(",")[1]),r.onerror=s,r.readAsDataURL(o)})}const al=async()=>{const t=document.querySelector(".spinner");t.classList.remove("hidden");const e=await ll(z.images[z.currentSlide]),i=await fetch("https://imagine.motionstoryline.com/video",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:e})});i.ok||console.log("Network response was not ok");const r=(await i.json()).generationID;ln(r),t.classList.add("hidden")},cl=async()=>{const t=document.querySelector(".spinner");t.classList.remove("hidden");const e=z.generationID[z.currentSlide];if(e.length<1)return console.log("generationID not found");const i=await fetch("https://imagine.motionstoryline.com/poll_video",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({generationID:e})});i.ok||console.log("Network response was not ok");const s=await i.arrayBuffer(),r=new Blob([s],{type:"video/*"});nn(URL.createObjectURL(r)),t.classList.add("hidden")},dl=t=>`
  <video src='${t}' controls autoplay class='max-w-full max-h-full'></video>
`,ul=()=>{document.querySelector("#generate-video").addEventListener("click",al),document.querySelector("#poll-video").addEventListener("click",cl),It("videos",(o,i)=>{const s=document.querySelector("#video-container");s.innerHTML=dl(o[z.currentSlide])})},hl=()=>(setTimeout(()=>ul(),0),`
  <sl-card class="card-header w-full px-10">
    <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: darkgreen;"></sl-spinner>
    <p>Generate video from current image.</p>
    <sl-button id="generate-video" class="py-2">Generate Video</sl-button>
    <sl-button id="poll-video" class="py-2">Poll Video</sl-button>
    <p>Videos take a couple of minutes to generate. Check to see if it ready by clicking poll.
  </sl-card>
  <div id="video-container" class="w-full py-3 overflow-hidden mb-2"></div>
`),pl=()=>{const t=document.querySelector("#main-area");document.querySelectorAll("sl-menu-item").forEach(o=>o.addEventListener("click",i=>an(i.target.value))),It("mainPanel",o=>{t.innerHTML=o==="video"?hl():hi()}),t.innerHTML=hi()},fl=()=>(setTimeout(()=>pl(),0),`
        <sl-split-panel style="height: 100%;" position="80">
            <div
                slot="start"
                style="height: 100%; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
            >
                <div id="main-area"></div>
            </div>
            <div slot="end">
                <sl-split-panel vertical style="height: 100%;" position="75">
                <div
                    slot="start"
                    style="background: var(--sl-color-neutral-50);"
                    class="flex flex-col items-center content-center overflow-hidden h-full"
                >
                <p>Navigation</p>
                ${un()}
                </div>
                <div
                    slot="end"
                    style="height: 100%; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
                >
                ${er()}
                </div>
                </sl-split-panel>
            </div>
        </sl-split-panel>
    `);document.querySelector("#dashboard").innerHTML=fl();export{B as S,c as _,G as c,I as i,p as n,z as s,R as w};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
