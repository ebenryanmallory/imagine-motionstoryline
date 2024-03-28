(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=o(r);fetch(r.href,i)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const St=globalThis,Kt=St.ShadowRoot&&(St.ShadyCSS===void 0||St.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Xt=Symbol(),re=new WeakMap;let Fe=class{constructor(t,o,s){if(this._$cssResult$=!0,s!==Xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=o}get styleSheet(){let t=this.o;const o=this.t;if(Kt&&t===void 0){const s=o!==void 0&&o.length===1;s&&(t=re.get(o)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&re.set(o,t))}return t}toString(){return this.cssText}};const mo=e=>new Fe(typeof e=="string"?e:e+"",void 0,Xt),R=(e,...t)=>{const o=e.length===1?e[0]:t.reduce((s,r,i)=>s+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+e[i+1],e[0]);return new Fe(o,e,Xt)},yo=(e,t)=>{if(Kt)e.adoptedStyleSheets=t.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet);else for(const o of t){const s=document.createElement("style"),r=St.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=o.cssText,e.appendChild(s)}},ie=Kt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let o="";for(const s of t.cssRules)o+=s.cssText;return mo(o)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$o,defineProperty:_o,getOwnPropertyDescriptor:wo,getOwnPropertyNames:xo,getOwnPropertySymbols:So,getPrototypeOf:ko}=Object,D=globalThis,ne=D.trustedTypes,Co=ne?ne.emptyScript:"",Lt=D.reactiveElementPolyfillSupport,lt=(e,t)=>e,tt={toAttribute(e,t){switch(t){case Boolean:e=e?Co:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let o=e;switch(t){case Boolean:o=e!==null;break;case Number:o=e===null?null:Number(e);break;case Object:case Array:try{o=JSON.parse(e)}catch{o=null}}return o}},Yt=(e,t)=>!$o(e,t),le={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:Yt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),D.litPropertyMetadata??(D.litPropertyMetadata=new WeakMap);class Y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,o=le){if(o.state&&(o.attribute=!1),this._$Ei(),this.elementProperties.set(t,o),!o.noAccessor){const s=Symbol(),r=this.getPropertyDescriptor(t,s,o);r!==void 0&&_o(this.prototype,t,r)}}static getPropertyDescriptor(t,o,s){const{get:r,set:i}=wo(this.prototype,t)??{get(){return this[o]},set(n){this[o]=n}};return{get(){return r==null?void 0:r.call(this)},set(n){const a=r==null?void 0:r.call(this);i.call(this,n),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??le}static _$Ei(){if(this.hasOwnProperty(lt("elementProperties")))return;const t=ko(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(lt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(lt("properties"))){const o=this.properties,s=[...xo(o),...So(o)];for(const r of s)this.createProperty(r,o[r])}const t=this[Symbol.metadata];if(t!==null){const o=litPropertyMetadata.get(t);if(o!==void 0)for(const[s,r]of o)this.elementProperties.set(s,r)}this._$Eh=new Map;for(const[o,s]of this.elementProperties){const r=this._$Eu(o,s);r!==void 0&&this._$Eh.set(r,o)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const o=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const r of s)o.unshift(ie(r))}else t!==void 0&&o.push(ie(t));return o}static _$Eu(t,o){const s=o.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(o=>o(this))}addController(t){var o;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)==null||o.call(t))}removeController(t){var o;(o=this._$EO)==null||o.delete(t)}_$E_(){const t=new Map,o=this.constructor.elementProperties;for(const s of o.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return yo(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostConnected)==null?void 0:s.call(o)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(o=>{var s;return(s=o.hostDisconnected)==null?void 0:s.call(o)})}attributeChangedCallback(t,o,s){this._$AK(t,s)}_$EC(t,o){var i;const s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){const n=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:tt).toAttribute(o,s.type);this._$Em=t,n==null?this.removeAttribute(r):this.setAttribute(r,n),this._$Em=null}}_$AK(t,o){var i;const s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){const n=s.getPropertyOptions(r),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((i=n.converter)==null?void 0:i.fromAttribute)!==void 0?n.converter:tt;this._$Em=r,this[r]=a.fromAttribute(o,n.type),this._$Em=null}}requestUpdate(t,o,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??Yt)(this[t],o))return;this.P(t,o,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,o,s){this._$AL.has(t)||this._$AL.set(t,o),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(o){Promise.reject(o)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[i,n]of r)n.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],n)}let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(o)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(o)}willUpdate(t){}_$AE(t){var o;(o=this._$EO)==null||o.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(o=>this._$EC(o,this[o]))),this._$EU()}updated(t){}firstUpdated(t){}}Y.elementStyles=[],Y.shadowRootOptions={mode:"open"},Y[lt("elementProperties")]=new Map,Y[lt("finalized")]=new Map,Lt==null||Lt({ReactiveElement:Y}),(D.reactiveElementVersions??(D.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const at=globalThis,kt=at.trustedTypes,ae=kt?kt.createPolicy("lit-html",{createHTML:e=>e}):void 0,He="$lit$",B=`lit$${(Math.random()+"").slice(9)}$`,je="?"+B,Eo=`<${je}>`,W=document,dt=()=>W.createComment(""),ut=e=>e===null||typeof e!="object"&&typeof e!="function",Ve=Array.isArray,Ao=e=>Ve(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",zt=`[ 	
\f\r]`,ot=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ce=/-->/g,de=/>/g,N=RegExp(`>|${zt}(?:([^\\s"'>=/]+)(${zt}*=${zt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ue=/'/g,he=/"/g,qe=/^(?:script|style|textarea|title)$/i,To=e=>(t,...o)=>({_$litType$:e,strings:t,values:o}),C=To(1),P=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),pe=new WeakMap,V=W.createTreeWalker(W,129);function We(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ae!==void 0?ae.createHTML(t):t}const Po=(e,t)=>{const o=e.length-1,s=[];let r,i=t===2?"<svg>":"",n=ot;for(let a=0;a<o;a++){const l=e[a];let h,p,d=-1,v=0;for(;v<l.length&&(n.lastIndex=v,p=n.exec(l),p!==null);)v=n.lastIndex,n===ot?p[1]==="!--"?n=ce:p[1]!==void 0?n=de:p[2]!==void 0?(qe.test(p[2])&&(r=RegExp("</"+p[2],"g")),n=N):p[3]!==void 0&&(n=N):n===N?p[0]===">"?(n=r??ot,d=-1):p[1]===void 0?d=-2:(d=n.lastIndex-p[2].length,h=p[1],n=p[3]===void 0?N:p[3]==='"'?he:ue):n===he||n===ue?n=N:n===ce||n===de?n=ot:(n=N,r=void 0);const f=n===N&&e[a+1].startsWith("/>")?" ":"";i+=n===ot?l+Eo:d>=0?(s.push(h),l.slice(0,d)+He+l.slice(d)+B+f):l+B+(d===-2?a:f)}return[We(e,i+(e[o]||"<?>")+(t===2?"</svg>":"")),s]};class ht{constructor({strings:t,_$litType$:o},s){let r;this.parts=[];let i=0,n=0;const a=t.length-1,l=this.parts,[h,p]=Po(t,o);if(this.el=ht.createElement(h,s),V.currentNode=this.el.content,o===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(r=V.nextNode())!==null&&l.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(const d of r.getAttributeNames())if(d.endsWith(He)){const v=p[n++],f=r.getAttribute(d).split(B),g=/([.?@])?(.*)/.exec(v);l.push({type:1,index:i,name:g[2],strings:f,ctor:g[1]==="."?zo:g[1]==="?"?Mo:g[1]==="@"?Io:Pt}),r.removeAttribute(d)}else d.startsWith(B)&&(l.push({type:6,index:i}),r.removeAttribute(d));if(qe.test(r.tagName)){const d=r.textContent.split(B),v=d.length-1;if(v>0){r.textContent=kt?kt.emptyScript:"";for(let f=0;f<v;f++)r.append(d[f],dt()),V.nextNode(),l.push({type:2,index:++i});r.append(d[v],dt())}}}else if(r.nodeType===8)if(r.data===je)l.push({type:2,index:i});else{let d=-1;for(;(d=r.data.indexOf(B,d+1))!==-1;)l.push({type:7,index:i}),d+=B.length-1}i++}}static createElement(t,o){const s=W.createElement("template");return s.innerHTML=t,s}}function et(e,t,o=e,s){var n,a;if(t===P)return t;let r=s!==void 0?(n=o._$Co)==null?void 0:n[s]:o._$Cl;const i=ut(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(e),r._$AT(e,o,s)),s!==void 0?(o._$Co??(o._$Co=[]))[s]=r:o._$Cl=r),r!==void 0&&(t=et(e,r._$AS(e,t.values),r,s)),t}class Lo{constructor(t,o){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=o}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:o},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??W).importNode(o,!0);V.currentNode=r;let i=V.nextNode(),n=0,a=0,l=s[0];for(;l!==void 0;){if(n===l.index){let h;l.type===2?h=new bt(i,i.nextSibling,this,t):l.type===1?h=new l.ctor(i,l.name,l.strings,this,t):l.type===6&&(h=new Oo(i,this,t)),this._$AV.push(h),l=s[++a]}n!==(l==null?void 0:l.index)&&(i=V.nextNode(),n++)}return V.currentNode=W,r}p(t){let o=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,o),o+=s.strings.length-2):s._$AI(t[o])),o++}}class bt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,o,s,r){this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=o,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=o.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,o=this){t=et(this,t,o),ut(t)?t===x||t==null||t===""?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==P&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ao(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==x&&ut(this._$AH)?this._$AA.nextSibling.data=t:this.T(W.createTextNode(t)),this._$AH=t}$(t){var i;const{values:o,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=ht.createElement(We(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(o);else{const n=new Lo(r,this),a=n.u(this.options);n.p(o),this.T(a),this._$AH=n}}_$AC(t){let o=pe.get(t.strings);return o===void 0&&pe.set(t.strings,o=new ht(t)),o}k(t){Ve(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let s,r=0;for(const i of t)r===o.length?o.push(s=new bt(this.S(dt()),this.S(dt()),this,this.options)):s=o[r],s._$AI(i),r++;r<o.length&&(this._$AR(s&&s._$AB.nextSibling,r),o.length=r)}_$AR(t=this._$AA.nextSibling,o){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,o);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){var o;this._$AM===void 0&&(this._$Cv=t,(o=this._$AP)==null||o.call(this,t))}}class Pt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,o,s,r,i){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=o,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x}_$AI(t,o=this,s,r){const i=this.strings;let n=!1;if(i===void 0)t=et(this,t,o,0),n=!ut(t)||t!==this._$AH&&t!==P,n&&(this._$AH=t);else{const a=t;let l,h;for(t=i[0],l=0;l<i.length-1;l++)h=et(this,a[s+l],o,l),h===P&&(h=this._$AH[l]),n||(n=!ut(h)||h!==this._$AH[l]),h===x?t=x:t!==x&&(t+=(h??"")+i[l+1]),this._$AH[l]=h}n&&!r&&this.j(t)}j(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class zo extends Pt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===x?void 0:t}}class Mo extends Pt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==x)}}class Io extends Pt{constructor(t,o,s,r,i){super(t,o,s,r,i),this.type=5}_$AI(t,o=this){if((t=et(this,t,o,0)??x)===P)return;const s=this._$AH,r=t===x&&s!==x||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==x&&(s===x||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var o;typeof this._$AH=="function"?this._$AH.call(((o=this.options)==null?void 0:o.host)??this.element,t):this._$AH.handleEvent(t)}}class Oo{constructor(t,o,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=o,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){et(this,t)}}const Mt=at.litHtmlPolyfillSupport;Mt==null||Mt(ht,bt),(at.litHtmlVersions??(at.litHtmlVersions=[])).push("3.1.2");const Uo=(e,t,o)=>{const s=(o==null?void 0:o.renderBefore)??t;let r=s._$litPart$;if(r===void 0){const i=(o==null?void 0:o.renderBefore)??null;s._$litPart$=r=new bt(t.insertBefore(dt(),i),i,void 0,o??{})}return r._$AI(e),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ct=class extends Y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var o;const t=super.createRenderRoot();return(o=this.renderOptions).renderBefore??(o.renderBefore=t.firstChild),t}update(t){const o=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Uo(o,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return P}};var Ne;ct._$litElement$=!0,ct.finalized=!0,(Ne=globalThis.litElementHydrateSupport)==null||Ne.call(globalThis,{LitElement:ct});const It=globalThis.litElementPolyfillSupport;It==null||It({LitElement:ct});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Ro=R`
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
`;function Bo(e,t){function o(r){const i=e.getBoundingClientRect(),n=e.ownerDocument.defaultView,a=i.left+n.scrollX,l=i.top+n.scrollY,h=r.pageX-a,p=r.pageY-l;t!=null&&t.onMove&&t.onMove(h,p)}function s(){document.removeEventListener("pointermove",o),document.removeEventListener("pointerup",s),t!=null&&t.onStop&&t.onStop()}document.addEventListener("pointermove",o,{passive:!0}),document.addEventListener("pointerup",s),(t==null?void 0:t.initialEvent)instanceof PointerEvent&&o(t.initialEvent)}function Ct(e,t,o){const s=r=>Object.is(r,-0)?0:r;return e<t?s(t):e>o?s(o):s(e)}const Nt=new Set,Do=new MutationObserver(Ge),Z=new Map;let Ke=document.documentElement.dir||"ltr",Xe=document.documentElement.lang||navigator.language,H;Do.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ye(...e){e.map(t=>{const o=t.$code.toLowerCase();Z.has(o)?Z.set(o,Object.assign(Object.assign({},Z.get(o)),t)):Z.set(o,t),H||(H=t)}),Ge()}function Ge(){Ke=document.documentElement.dir||"ltr",Xe=document.documentElement.lang||navigator.language,[...Nt.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let No=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Nt.add(this.host)}hostDisconnected(){Nt.delete(this.host)}dir(){return`${this.host.dir||Ke}`.toLowerCase()}lang(){return`${this.host.lang||Xe}`.toLowerCase()}getTranslationData(t){var o,s;const r=new Intl.Locale(t.replace(/_/g,"-")),i=r==null?void 0:r.language.toLowerCase(),n=(s=(o=r==null?void 0:r.region)===null||o===void 0?void 0:o.toLowerCase())!==null&&s!==void 0?s:"",a=Z.get(`${i}-${n}`),l=Z.get(i);return{locale:r,language:i,region:n,primary:a,secondary:l}}exists(t,o){var s;const{primary:r,secondary:i}=this.getTranslationData((s=o.lang)!==null&&s!==void 0?s:this.lang());return o=Object.assign({includeFallback:!1},o),!!(r&&r[t]||i&&i[t]||o.includeFallback&&H&&H[t])}term(t,...o){const{primary:s,secondary:r}=this.getTranslationData(this.lang());let i;if(s&&s[t])i=s[t];else if(r&&r[t])i=r[t];else if(H&&H[t])i=H[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof i=="function"?i(...o):i}date(t,o){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),o).format(t)}number(t,o){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),o).format(t)}relativeTime(t,o,s){return new Intl.RelativeTimeFormat(this.lang(),s).format(t,o)}};var Je={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ye(Je);var Fo=Je,mt=class extends No{};Ye(Fo);var Ze=Object.defineProperty,Ho=Object.defineProperties,jo=Object.getOwnPropertyDescriptor,Vo=Object.getOwnPropertyDescriptors,fe=Object.getOwnPropertySymbols,qo=Object.prototype.hasOwnProperty,Wo=Object.prototype.propertyIsEnumerable,ge=(e,t,o)=>t in e?Ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,yt=(e,t)=>{for(var o in t||(t={}))qo.call(t,o)&&ge(e,o,t[o]);if(fe)for(var o of fe(t))Wo.call(t,o)&&ge(e,o,t[o]);return e},Qe=(e,t)=>Ho(e,Vo(t)),c=(e,t,o,s)=>{for(var r=s>1?void 0:s?jo(t,o):t,i=e.length-1,n;i>=0;i--)(n=e[i])&&(r=(s?n(t,o,r):n(r))||r);return s&&r&&Ze(t,o,r),r};function E(e,t){const o=yt({waitUntilFirstUpdate:!1},t);return(s,r)=>{const{update:i}=s,n=Array.isArray(e)?e:[e];s.update=function(a){n.forEach(l=>{const h=l;if(a.has(h)){const p=a.get(h),d=this[h];p!==d&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](p,d)}}),i.call(this,a)}}}var K=R`
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
 */const Ko={attribute:!0,type:String,converter:tt,reflect:!1,hasChanged:Yt},Xo=(e=Ko,t,o)=>{const{kind:s,metadata:r}=o;let i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(o.name,e),s==="accessor"){const{name:n}=o;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(n,l,e)},init(a){return a!==void 0&&this.P(n,void 0,e),a}}}if(s==="setter"){const{name:n}=o;return function(a){const l=this[n];t.call(this,a),this.requestUpdate(n,l,e)}}throw Error("Unsupported decorator location: "+s)};function u(e){return(t,o)=>typeof o=="object"?Xo(e,t,o):((s,r,i)=>{const n=r.hasOwnProperty(i);return r.constructor.createProperty(i,n?{...s,wrapped:!0}:s),n?Object.getOwnPropertyDescriptor(r,i):void 0})(e,t,o)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function X(e){return u({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yo(e){return(t,o)=>{const s=typeof t=="function"?t:t[o];Object.assign(s,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ve=(e,t,o)=>(o.configurable=!0,o.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,o),o);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $t(e,t){return(o,s,r)=>{const i=n=>{var a;return((a=n.renderRoot)==null?void 0:a.querySelector(e))??null};if(t){const{get:n,set:a}=typeof s=="object"?o:r??(()=>{const l=Symbol();return{get(){return this[l]},set(h){this[l]=h}}})();return ve(o,s,{get(){let l=n.call(this);return l===void 0&&(l=i(this),(l!==null||this.hasUpdated)&&a.call(this,l)),l}})}return ve(o,s,{get(){return i(this)}})}}var L=class extends ct{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const o=new CustomEvent(e,yt({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(o),o}static define(e,t=this,o={}){const s=customElements.get(e);if(!s){customElements.define(e,class extends t{},o);return}let r=" (unknown version)",i=r;"version"in t&&t.version&&(r=" v"+t.version),"version"in s&&s.version&&(i=" v"+s.version),!(r&&i&&r===i)&&console.warn(`Attempted to register <${e}>${r}, but <${e}>${i} has already been registered.`)}};L.version="2.14.0";L.dependencies={};c([u()],L.prototype,"dir",2);c([u()],L.prototype,"lang",2);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _=e=>e??x;var T=class extends L{constructor(){super(...arguments),this.localize=new mt(this),this.position=50,this.vertical=!1,this.disabled=!1,this.snapThreshold=12}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}detectSize(){const{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){const t=this.localize.dir()==="rtl";this.disabled||(e.cancelable&&e.preventDefault(),Bo(this,{onMove:(o,s)=>{let r=this.vertical?s:o;this.primary==="end"&&(r=this.size-r),this.snap&&this.snap.split(" ").forEach(n=>{let a;n.endsWith("%")?a=this.size*(parseFloat(n)/100):a=parseFloat(n),t&&!this.vertical&&(a=this.size-a),r>=a-this.snapThreshold&&r<=a+this.snapThreshold&&(r=a)}),this.position=Ct(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){let t=this.position;const o=(e.shiftKey?10:1)*(this.primary==="end"?-1:1);e.preventDefault(),(e.key==="ArrowLeft"&&!this.vertical||e.key==="ArrowUp"&&this.vertical)&&(t-=o),(e.key==="ArrowRight"&&!this.vertical||e.key==="ArrowDown"&&this.vertical)&&(t+=o),e.key==="Home"&&(t=this.primary==="end"?100:0),e.key==="End"&&(t=this.primary==="end"?0:100),this.position=Ct(t,0,100)}}handleResize(e){const{width:t,height:o}=e[0].contentRect;this.size=this.vertical?o:t,this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.positionInPixels=this.percentageToPixels(this.position),this.emit("sl-reposition")}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){const e=this.vertical?"gridTemplateRows":"gridTemplateColumns",t=this.vertical?"gridTemplateColumns":"gridTemplateRows",o=this.localize.dir()==="rtl",s=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,r="auto";return this.primary==="end"?o&&!this.vertical?this.style[e]=`${s} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${s}`:o&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${s}`:this.style[e]=`${s} var(--divider-width) ${r}`,this.style[t]="",C`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${_(this.disabled?void 0:"0")}
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
    `}};T.styles=[K,Ro];c([$t(".divider")],T.prototype,"divider",2);c([u({type:Number,reflect:!0})],T.prototype,"position",2);c([u({attribute:"position-in-pixels",type:Number})],T.prototype,"positionInPixels",2);c([u({type:Boolean,reflect:!0})],T.prototype,"vertical",2);c([u({type:Boolean,reflect:!0})],T.prototype,"disabled",2);c([u()],T.prototype,"primary",2);c([u()],T.prototype,"snap",2);c([u({type:Number,attribute:"snap-threshold"})],T.prototype,"snapThreshold",2);c([E("position")],T.prototype,"handlePositionChange",1);c([E("positionInPixels")],T.prototype,"handlePositionInPixelsChange",1);c([E("vertical")],T.prototype,"handleVerticalChange",1);T.define("sl-split-panel");var Go=R`
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
`,Gt=class extends L{constructor(){super(...arguments),this.localize=new mt(this)}render(){return C`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Gt.styles=[K,Go];var st=new WeakMap,rt=new WeakMap,it=new WeakMap,Ot=new WeakSet,_t=new WeakMap,to=class{constructor(e,t){this.handleFormData=o=>{const s=this.options.disabled(this.host),r=this.options.name(this.host),i=this.options.value(this.host),n=this.host.tagName.toLowerCase()==="sl-button";this.host.isConnected&&!s&&!n&&typeof r=="string"&&r.length>0&&typeof i<"u"&&(Array.isArray(i)?i.forEach(a=>{o.formData.append(r,a.toString())}):o.formData.append(r,i.toString()))},this.handleFormSubmit=o=>{var s;const r=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&((s=st.get(this.form))==null||s.forEach(n=>{this.setUserInteracted(n,!0)})),this.form&&!this.form.noValidate&&!r&&!i(this.host)&&(o.preventDefault(),o.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),_t.set(this.host,[])},this.handleInteraction=o=>{const s=_t.get(this.host);s.includes(o.type)||s.push(o.type),s.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.checkValidity=="function"&&!s.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){const o=this.form.querySelectorAll("*");for(const s of o)if(typeof s.reportValidity=="function"&&!s.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=yt({form:o=>{const s=o.form;if(s){const i=o.getRootNode().getElementById(s);if(i)return i}return o.closest("form")},name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>{var s;return(s=o.disabled)!=null?s:!1},reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,checkValidity:o=>typeof o.checkValidity=="function"?o.checkValidity():!0,setValue:(o,s)=>o.value=s,assumeInteractionOn:["sl-input"]},t)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),_t.set(this.host,[]),this.options.assumeInteractionOn.forEach(t=>{this.host.addEventListener(t,this.handleInteraction)})}hostDisconnected(){this.detachForm(),_t.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,st.has(this.form)?st.get(this.form).add(this.host):st.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),rt.has(this.form)||(rt.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),it.has(this.form)||(it.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;const e=st.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),rt.has(this.form)&&(this.form.reportValidity=rt.get(this.form),rt.delete(this.form)),it.has(this.form)&&(this.form.checkValidity=it.get(this.form),it.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?Ot.add(e):Ot.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const o=document.createElement("button");o.type=e,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",t&&(o.name=t.name,o.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach(s=>{t.hasAttribute(s)&&o.setAttribute(s,t.getAttribute(s))})),this.form.append(o),o.click(),o.remove()}}getForm(){var e;return(e=this.form)!=null?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,o=!!Ot.has(t),s=!!t.required;t.toggleAttribute("data-required",s),t.toggleAttribute("data-optional",!s),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&o),t.toggleAttribute("data-user-valid",e&&o)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e==null||e.preventDefault()}},Jt=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1});Object.freeze(Qe(yt({},Jt),{valid:!1,valueMissing:!0}));Object.freeze(Qe(yt({},Jt),{valid:!1,customError:!0}));var Jo=R`
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
`,Zt=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=o=>{const s=o.target;(this.slotNames.includes("[default]")&&!s.name||s.name&&this.slotNames.includes(s.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Ft="";function be(e){Ft=e}function Zo(e=""){if(!Ft){const t=[...document.getElementsByTagName("script")],o=t.find(s=>s.hasAttribute("data-shoelace"));if(o)be(o.getAttribute("data-shoelace"));else{const s=t.find(i=>/shoelace(\.min)?\.js($|\?)/.test(i.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(i.src));let r="";s&&(r=s.getAttribute("src")),be(r.split("/").slice(0,-1).join("/"))}}return Ft.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Qo={name:"default",resolver:e=>Zo(`assets/icons/${e}.svg`)},ts=Qo,me={caret:`
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
  `},es={name:"system",resolver:e=>e in me?`data:image/svg+xml,${encodeURIComponent(me[e])}`:""},os=es,ss=[ts,os],Ht=[];function rs(e){Ht.push(e)}function is(e){Ht=Ht.filter(t=>t!==e)}function ye(e){return ss.find(t=>t.name===e)}var ns=R`
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
 */const ls=(e,t)=>t===void 0?(e==null?void 0:e._$litType$)!==void 0:(e==null?void 0:e._$litType$)===t,as=e=>e.strings===void 0,cs={},ds=(e,t=cs)=>e._$AH=t;var nt=Symbol(),wt=Symbol(),Ut,Rt=new Map,z=class extends L{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var o;let s;if(t!=null&&t.spriteSheet)return C`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`;try{if(s=await fetch(e,{mode:"cors"}),!s.ok)return s.status===410?nt:wt}catch{return wt}try{const r=document.createElement("div");r.innerHTML=await s.text();const i=r.firstElementChild;if(((o=i==null?void 0:i.tagName)==null?void 0:o.toLowerCase())!=="svg")return nt;Ut||(Ut=new DOMParser);const a=Ut.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return a?(a.part.add("svg"),document.adoptNode(a)):nt}catch{return nt}}connectedCallback(){super.connectedCallback(),rs(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),is(this)}getIconSource(){const e=ye(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:o}=this.getIconSource(),s=o?ye(this.library):void 0;if(!t){this.svg=null;return}let r=Rt.get(t);if(r||(r=this.resolveIcon(t,s),Rt.set(t,r)),!this.initialRender)return;const i=await r;if(i===wt&&Rt.delete(t),t===this.getIconSource().url){if(ls(i)){this.svg=i;return}switch(i){case wt:case nt:this.svg=null,this.emit("sl-error");break;default:this.svg=i.cloneNode(!0),(e=s==null?void 0:s.mutator)==null||e.call(s,this.svg),this.emit("sl-load")}}}render(){return this.svg}};z.styles=[K,ns];c([X()],z.prototype,"svg",2);c([u({reflect:!0})],z.prototype,"name",2);c([u()],z.prototype,"src",2);c([u()],z.prototype,"label",2);c([u({reflect:!0})],z.prototype,"library",2);c([E("label")],z.prototype,"handleLabelChange",1);c([E(["name","src","library"])],z.prototype,"setIcon",1);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const F={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},eo=e=>(...t)=>({_$litDirective$:e,values:t});class oo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,o,s){this._$Ct=t,this._$AM=o,this._$Ci=s}_$AS(t,o){return this.update(t,o)}update(t,o){return this.render(...o)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const U=eo(class extends oo{constructor(e){var t;if(super(e),e.type!==F.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var s,r;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(i=>i!=="")));for(const i in t)t[i]&&!((s=this.nt)!=null&&s.has(i))&&this.st.add(i);return this.render(t)}const o=e.element.classList;for(const i of this.st)i in t||(o.remove(i),this.st.delete(i));for(const i in t){const n=!!t[i];n===this.st.has(i)||(r=this.nt)!=null&&r.has(i)||(n?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return P}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const so=Symbol.for(""),us=e=>{if((e==null?void 0:e.r)===so)return e==null?void 0:e._$litStatic$},$e=(e,...t)=>({_$litStatic$:t.reduce((o,s,r)=>o+(i=>{if(i._$litStatic$!==void 0)return i._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${i}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(s)+e[r+1],e[0]),r:so}),_e=new Map,hs=e=>(t,...o)=>{const s=o.length;let r,i;const n=[],a=[];let l,h=0,p=!1;for(;h<s;){for(l=t[h];h<s&&(i=o[h],(r=us(i))!==void 0);)l+=r+t[++h],p=!0;h!==s&&a.push(i),n.push(l),h++}if(h===s&&n.push(t[s]),p){const d=n.join("$$lit$$");(t=_e.get(d))===void 0&&(n.raw=n,_e.set(d,t=n)),o=a}return e(t,...o)},Bt=hs(C);var y=class extends L{constructor(){super(...arguments),this.formControlController=new to(this,{assumeInteractionOn:["click"]}),this.hasSlotController=new Zt(this,"[default]","prefix","suffix"),this.localize=new mt(this),this.hasFocus=!1,this.invalid=!1,this.title="",this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button",this.name="",this.value="",this.href="",this.rel="noreferrer noopener"}get validity(){return this.isButton()?this.button.validity:Jt}get validationMessage(){return this.isButton()?this.button.validationMessage:""}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(){this.type==="submit"&&this.formControlController.submit(this),this.type==="reset"&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){const e=this.isLink(),t=e?$e`a`:$e`button`;return Bt`
      <${t}
        part="base"
        class=${U({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${_(e?void 0:this.disabled)}
        type=${_(e?void 0:this.type)}
        title=${this.title}
        name=${_(e?void 0:this.name)}
        value=${_(e?void 0:this.value)}
        href=${_(e?this.href:void 0)}
        target=${_(e?this.target:void 0)}
        download=${_(e?this.download:void 0)}
        rel=${_(e?this.rel:void 0)}
        role=${_(e?void 0:"button")}
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
        ${this.caret?Bt` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:""}
        ${this.loading?Bt`<sl-spinner part="spinner"></sl-spinner>`:""}
      </${t}>
    `}};y.styles=[K,Jo];y.dependencies={"sl-icon":z,"sl-spinner":Gt};c([$t(".button")],y.prototype,"button",2);c([X()],y.prototype,"hasFocus",2);c([X()],y.prototype,"invalid",2);c([u()],y.prototype,"title",2);c([u({reflect:!0})],y.prototype,"variant",2);c([u({reflect:!0})],y.prototype,"size",2);c([u({type:Boolean,reflect:!0})],y.prototype,"caret",2);c([u({type:Boolean,reflect:!0})],y.prototype,"disabled",2);c([u({type:Boolean,reflect:!0})],y.prototype,"loading",2);c([u({type:Boolean,reflect:!0})],y.prototype,"outline",2);c([u({type:Boolean,reflect:!0})],y.prototype,"pill",2);c([u({type:Boolean,reflect:!0})],y.prototype,"circle",2);c([u()],y.prototype,"type",2);c([u()],y.prototype,"name",2);c([u()],y.prototype,"value",2);c([u()],y.prototype,"href",2);c([u()],y.prototype,"target",2);c([u()],y.prototype,"rel",2);c([u()],y.prototype,"download",2);c([u()],y.prototype,"form",2);c([u({attribute:"formaction"})],y.prototype,"formAction",2);c([u({attribute:"formenctype"})],y.prototype,"formEnctype",2);c([u({attribute:"formmethod"})],y.prototype,"formMethod",2);c([u({attribute:"formnovalidate",type:Boolean})],y.prototype,"formNoValidate",2);c([u({attribute:"formtarget"})],y.prototype,"formTarget",2);c([E("disabled",{waitUntilFirstUpdate:!0})],y.prototype,"handleDisabledChange",1);y.define("sl-button");const ps=()=>`
  <div class="flex flex-col">
    Upload to Motion Storyline
    <br />
    <sl-button class="p-3">Log in</sl-button>
  </div>
`;var fs=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener("mouseenter",this.pause),this.host.addEventListener("mouseleave",this.resume),this.host.addEventListener("focusin",this.pause),this.host.addEventListener("focusout",this.resume),this.host.addEventListener("touchstart",this.pause,{passive:!0}),this.host.addEventListener("touchend",this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener("mouseenter",this.pause),this.host.removeEventListener("mouseleave",this.resume),this.host.removeEventListener("focusin",this.pause),this.host.removeEventListener("focusout",this.resume),this.host.removeEventListener("touchstart",this.pause),this.host.removeEventListener("touchend",this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},gs=R`
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
`;function vs(e,t){return new Promise(o=>{function s(r){r.target===e&&(e.removeEventListener(t,s),o())}e.addEventListener(t,s)})}function we(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*bs(e,t){if(e!==void 0){let o=0;for(const s of e)yield t(s,o++)}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*ms(e,t,o=1){const s=t===void 0?0:e;t??(t=e);for(let r=s;o>0?r<t:t<r;r+=o)yield r}var ys=(e,t)=>{let o=0;return function(...s){window.clearTimeout(o),o=window.setTimeout(()=>{e.call(this,...s)},t)}},xe=(e,t,o)=>{const s=e[t];e[t]=function(...r){s.call(this,...r),o.call(this,s,...r)}},$s="onscrollend"in window;if(!$s){const e=new Set,t=new WeakMap,o=r=>{for(const i of r.changedTouches)e.add(i.identifier)},s=r=>{for(const i of r.changedTouches)e.delete(i.identifier)};document.addEventListener("touchstart",o,!0),document.addEventListener("touchend",s,!0),document.addEventListener("touchcancel",s,!0),xe(EventTarget.prototype,"addEventListener",function(r,i){if(i!=="scrollend")return;const n=ys(()=>{e.size?n():this.dispatchEvent(new Event("scrollend"))},100);r.call(this,"scroll",n,{passive:!0}),t.set(this,n)}),xe(EventTarget.prototype,"removeEventListener",function(r,i){if(i!=="scrollend")return;const n=t.get(this);n&&r.call(this,"scroll",n,{passive:!0})})}var w=class extends L{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation="horizontal",this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new fs(this,()=>this.next()),this.intersectionObserverEntries=new Map,this.localize=new mt(this),this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty("scroll-snap-type","none"),this.dragging=!0),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:"instant"})},this.handleMouseDragEnd=()=>{const e=this.scrollContainer;document.removeEventListener("pointermove",this.handleMouseDrag,{capture:!0});const t=e.scrollLeft,o=e.scrollTop;e.style.removeProperty("scroll-snap-type"),e.style.setProperty("overflow","hidden");const s=e.scrollLeft,r=e.scrollTop;e.style.removeProperty("overflow"),e.style.setProperty("scroll-snap-type","none"),e.scrollTo({left:t,top:o,behavior:"instant"}),requestAnimationFrame(async()=>{(t!==s||o!==r)&&(e.scrollTo({left:s,top:r,behavior:we()?"auto":"smooth"}),await vs(e,"scrollend")),e.style.removeProperty("scroll-snap-type"),this.dragging=!1,this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(o=>[...o.addedNodes,...o.removedNodes].some(s=>this.isCarouselItem(s)&&!s.hasAttribute("data-clone")))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","region"),this.setAttribute("aria-label",this.localize.term("carousel"));const e=new IntersectionObserver(t=>{t.forEach(o=>{this.intersectionObserverEntries.set(o.target,o);const s=o.target;s.toggleAttribute("inert",!o.isIntersecting),s.classList.toggle("--in-view",o.isIntersecting),s.setAttribute("aria-hidden",o.isIntersecting?"false":"true")})},{root:this,threshold:.6});this.intersectionObserver=e,e.takeRecords().forEach(t=>{this.intersectionObserverEntries.set(t.target,t)})}disconnectedCallback(){super.disconnectedCallback(),this.intersectionObserver.disconnect(),this.mutationObserver.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has("slidesPerMove")||e.has("slidesPerPage"))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){const e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:o,loop:s}=this,r=s?e/o:(e-t)/o+1;return Math.ceil(r)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute("data-clone")))}handleKeyDown(e){if(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key)){const t=e.target,o=this.localize.dir()==="rtl",s=t.closest('[part~="pagination-item"]')!==null,r=e.key==="ArrowDown"||!o&&e.key==="ArrowRight"||o&&e.key==="ArrowLeft",i=e.key==="ArrowUp"||!o&&e.key==="ArrowLeft"||o&&e.key==="ArrowRight";e.preventDefault(),i&&this.previous(),r&&this.next(),e.key==="Home"&&this.goToSlide(0),e.key==="End"&&this.goToSlide(this.getSlides().length-1),s&&this.updateComplete.then(()=>{var n;const a=(n=this.shadowRoot)==null?void 0:n.querySelector('[part~="pagination-item--active"]');a&&a.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener("pointermove",this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener("pointerup",this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0}handleScrollEnd(){if(!this.scrolling||this.dragging)return;const t=[...this.intersectionObserverEntries.values()].find(o=>o.isIntersecting);if(this.loop&&(t!=null&&t.target.hasAttribute("data-clone"))){const o=Number(t.target.getAttribute("data-clone"));this.goToSlide(o,"instant")}else if(t){const s=this.getSlides().indexOf(t.target);this.activeSlide=Math.ceil(s/this.slidesPerMove)*this.slidesPerMove}this.scrolling=!1}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()==="sl-carousel-item"}initializeSlides(){const e=this.intersectionObserver;this.intersectionObserverEntries.clear(),this.getSlides({excludeClones:!1}).forEach((t,o)=>{e.unobserve(t),t.classList.remove("--in-view"),t.classList.remove("--is-active"),t.setAttribute("aria-label",this.localize.term("slideNum",o+1)),t.hasAttribute("data-clone")&&t.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)}),this.goToSlide(this.activeSlide,"auto")}createClones(){const e=this.getSlides(),t=this.slidesPerPage,o=e.slice(-t),s=e.slice(0,t);o.reverse().forEach((r,i)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(e.length-i-1)),this.prepend(n)}),s.forEach((r,i)=>{const n=r.cloneNode(!0);n.setAttribute("data-clone",String(i)),this.append(n)})}handelSlideChange(){const e=this.getSlides();e.forEach((t,o)=>{t.classList.toggle("--is-active",o===this.activeSlide)}),this.hasUpdated&&this.emit("sl-slide-change",{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){const e=this.getSlides(),t=this.slidesPerMove;e.forEach((o,s)=>{(s+t)%t===0?o.style.removeProperty("scroll-snap-align"):o.style.setProperty("scroll-snap-align","none")})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e="smooth"){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e="smooth"){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t="smooth"){const{slidesPerPage:o,loop:s}=this,r=this.getSlides(),i=this.getSlides({excludeClones:!1});if(!r.length)return;const n=s?(e+r.length)%r.length:Ct(e,0,r.length-1);this.activeSlide=n;const a=Ct(e+(s?o:0),0,i.length-1),l=i[a];this.scrollToSlide(l,we()?"auto":t)}scrollToSlide(e,t="smooth"){const o=this.scrollContainer,s=o.getBoundingClientRect(),r=e.getBoundingClientRect(),i=r.left-s.left,n=r.top-s.top;o.scrollTo({left:i+o.scrollLeft,top:n+o.scrollTop,behavior:t})}render(){const{slidesPerMove:e,scrolling:t}=this,o=this.getPageCount(),s=this.getCurrentPage(),r=this.canScrollPrev(),i=this.canScrollNext(),n=this.localize.dir()==="ltr";return C`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${U({carousel__slides:!0,"carousel__slides--horizontal":this.orientation==="horizontal","carousel__slides--vertical":this.orientation==="vertical","carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?"true":"false"}"
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
                  class="${U({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!r})}"
                  aria-label="${this.localize.term("previousSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${r?"false":"true"}"
                  @click=${r?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${n?"chevron-left":"chevron-right"}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${U({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!i})}
                  aria-label="${this.localize.term("nextSlide")}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?"false":"true"}"
                  @click=${i?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${n?"chevron-right":"chevron-left"}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:""}
        ${this.pagination?C`
              <div part="pagination" role="tablist" class="carousel__pagination" aria-controls="scroll-container">
                ${bs(ms(o),a=>{const l=a===s;return C`
                    <button
                      part="pagination-item ${l?"pagination-item--active":""}"
                      class="${U({"carousel__pagination-item":!0,"carousel__pagination-item--active":l})}"
                      role="tab"
                      aria-selected="${l?"true":"false"}"
                      aria-label="${this.localize.term("goToSlide",a+1,o)}"
                      tabindex=${l?"0":"-1"}
                      @click=${()=>this.goToSlide(a*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:""}
      </div>
    `}};w.styles=[K,gs];w.dependencies={"sl-icon":z};c([u({type:Boolean,reflect:!0})],w.prototype,"loop",2);c([u({type:Boolean,reflect:!0})],w.prototype,"navigation",2);c([u({type:Boolean,reflect:!0})],w.prototype,"pagination",2);c([u({type:Boolean,reflect:!0})],w.prototype,"autoplay",2);c([u({type:Number,attribute:"autoplay-interval"})],w.prototype,"autoplayInterval",2);c([u({type:Number,attribute:"slides-per-page"})],w.prototype,"slidesPerPage",2);c([u({type:Number,attribute:"slides-per-move"})],w.prototype,"slidesPerMove",2);c([u()],w.prototype,"orientation",2);c([u({type:Boolean,reflect:!0,attribute:"mouse-dragging"})],w.prototype,"mouseDragging",2);c([$t(".carousel__slides")],w.prototype,"scrollContainer",2);c([$t(".carousel__pagination")],w.prototype,"paginationContainer",2);c([X()],w.prototype,"activeSlide",2);c([X()],w.prototype,"scrolling",2);c([X()],w.prototype,"dragging",2);c([Yo({passive:!0})],w.prototype,"handleScroll",1);c([E("loop",{waitUntilFirstUpdate:!0}),E("slidesPerPage",{waitUntilFirstUpdate:!0})],w.prototype,"initializeSlides",1);c([E("activeSlide")],w.prototype,"handelSlideChange",1);c([E("slidesPerMove")],w.prototype,"updateSlidesSnap",1);c([E("autoplay")],w.prototype,"handleAutoplayChange",1);w.define("sl-carousel");const j={allRenderFn:!1,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!0,cmpDidRender:!0,cmpWillLoad:!0,cmpWillUpdate:!0,cmpWillRender:!0,connectedCallback:!0,disconnectedCallback:!0,element:!0,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!0,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!0,mode:!0,observeAttribute:!0,prop:!0,propMutable:!0,reflect:!0,scoped:!0,shadowDom:!0,slot:!0,cssAnnotations:!0,state:!0,style:!0,formAssociated:!1,svg:!0,updatable:!0,vdomAttribute:!0,vdomXlink:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomPropOrAttr:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,hotModuleReplacement:!1,isDebug:!1,isDev:!1,isTesting:!1,hydrateServerSide:!1,hydrateClientSide:!1,lifecycleDOMEvents:!1,lazyLoad:!1,profile:!1,slotRelocation:!0,appendChildSlotFix:!1,cloneNodeFix:!1,hydratedAttribute:!1,hydratedClass:!0,scriptDataOpts:!1,scopedSlotTextContentFix:!1,shadowDomShim:!1,slotChildNodesFix:!1,invisiblePrehydration:!0,propBoolean:!0,propNumber:!0,propString:!0,constructableCSS:!0,cmpShouldUpdate:!0,devTools:!1,shadowDelegatesFocus:!0,initializeNextTick:!1,asyncLoading:!1,asyncQueue:!1,transformTagName:!1,attachStyles:!0,experimentalSlotFixes:!1};let G,jt,pt,Qt=!1,Et=!1,te=!1,A=!1,Vt=null,qt=!1;const ft=(e,t="")=>()=>{},_s="slot-fb{display:contents}slot-fb[hidden]{display:none}",Se="http://www.w3.org/1999/xlink",ke={},ws="http://www.w3.org/2000/svg",xs="http://www.w3.org/1999/xhtml",Ss=e=>e!=null,ro=e=>(e=typeof e,e==="object"||e==="function");function ks(e){var t,o,s;return(s=(o=(t=e.head)===null||t===void 0?void 0:t.querySelector('meta[name="csp-nonce"]'))===null||o===void 0?void 0:o.getAttribute("content"))!==null&&s!==void 0?s:void 0}const io=(e,t,...o)=>{let s=null,r=null,i=null,n=!1,a=!1;const l=[],h=d=>{for(let v=0;v<d.length;v++)s=d[v],Array.isArray(s)?h(s):s!=null&&typeof s!="boolean"&&((n=typeof e!="function"&&!ro(s))&&(s=String(s)),n&&a?l[l.length-1].$text$+=s:l.push(n?At(null,s):s),a=n)};if(h(o),t){t.key&&(r=t.key),t.name&&(i=t.name);{const d=t.className||t.class;d&&(t.class=typeof d!="object"?d:Object.keys(d).filter(v=>d[v]).join(" "))}}if(typeof e=="function")return e(t===null?{}:t,l,As);const p=At(e,null);return p.$attrs$=t,l.length>0&&(p.$children$=l),p.$key$=r,p.$name$=i,p},At=(e,t)=>{const o={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return o.$attrs$=null,o.$key$=null,o.$name$=null,o},Cs={},Es=e=>e&&e.$tag$===Cs,As={forEach:(e,t)=>e.map(Ce).forEach(t),map:(e,t)=>e.map(Ce).map(t).map(Ts)},Ce=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),Ts=e=>{if(typeof e.vtag=="function"){const o=Object.assign({},e.vattrs);return e.vkey&&(o.key=e.vkey),e.vname&&(o.name=e.vname),io(e.vtag,o,...e.vchildren||[])}const t=At(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},Ee=new WeakMap,Ps=(e,t,o)=>{var s;const r=zs(t,o),i=Ws.get(r);if(e=e.nodeType===11?e:q,i)if(typeof i=="string"){e=e.head||e;let n=Ee.get(e),a;if(n||Ee.set(e,n=new Set),!n.has(r)){{a=q.createElement("style"),a.innerHTML=i;const l=(s=I.$nonce$)!==null&&s!==void 0?s:ks(q);l!=null&&a.setAttribute("nonce",l),e.insertBefore(a,e.querySelector("link"))}t.$flags$&4&&(a.innerHTML+=_s),n&&n.add(r)}}else e.adoptedStyleSheets.includes(i)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,i]);return r},Ls=e=>{const t=e.$cmpMeta$,o=e.$hostElement$,s=t.$flags$,r=ft("attachStyles",t.$tagName$),i=Ps(o.shadowRoot?o.shadowRoot:o.getRootNode(),t,e.$modeName$);s&10&&(o["s-sc"]=i,o.classList.add(i+"-h"),s&2&&o.classList.add(i+"-s")),r()},zs=(e,t)=>"sc-"+(t&&e.$flags$&32?e.$tagName$+"-"+t:e.$tagName$),Ae=(e,t,o,s,r,i)=>{if(o!==s){let n=Ie(e,t),a=t.toLowerCase();if(t==="class"){const l=e.classList,h=Te(o),p=Te(s);l.remove(...h.filter(d=>d&&!p.includes(d))),l.add(...p.filter(d=>d&&!h.includes(d)))}else if(t==="style"){for(const l in o)(!s||s[l]==null)&&(l.includes("-")?e.style.removeProperty(l):e.style[l]="");for(const l in s)(!o||s[l]!==o[l])&&(l.includes("-")?e.style.setProperty(l,s[l]):e.style[l]=s[l])}else if(t!=="key")if(t==="ref")s&&s(e);else if(!e.__lookupSetter__(t)&&t[0]==="o"&&t[1]==="n"){if(t[2]==="-"?t=t.slice(3):Ie(se,a)?t=a.slice(2):t=a[2]+t.slice(3),o||s){const l=t.endsWith(no);t=t.replace(Is,""),o&&I.rel(e,t,o,l),s&&I.ael(e,t,s,l)}}else{const l=ro(s);if((n||l&&s!==null)&&!r)try{if(e.tagName.includes("-"))e[t]=s;else{const p=s??"";t==="list"?n=!1:(o==null||e[t]!=p)&&(e[t]=p)}}catch{}let h=!1;a!==(a=a.replace(/^xlink\:?/,""))&&(t=a,h=!0),s==null||s===!1?(s!==!1||e.getAttribute(t)==="")&&(h?e.removeAttributeNS(Se,t):e.removeAttribute(t)):(!n||i&4||r)&&!l&&(s=s===!0?"":s,h?e.setAttributeNS(Se,t,s):e.setAttribute(t,s))}}},Ms=/\s/,Te=e=>e?e.split(Ms):[],no="Capture",Is=new RegExp(no+"$"),lo=(e,t,o,s)=>{const r=t.$elm$.nodeType===11&&t.$elm$.host?t.$elm$.host:t.$elm$,i=e&&e.$attrs$||ke,n=t.$attrs$||ke;for(s in i)s in n||Ae(r,s,i[s],void 0,o,t.$flags$);for(s in n)Ae(r,s,i[s],n[s],o,t.$flags$)},Tt=(e,t,o,s)=>{const r=t.$children$[o];let i=0,n,a,l;if(Qt||(te=!0,r.$tag$==="slot"&&(G&&s.classList.add(G+"-s"),r.$flags$|=r.$children$?2:1)),r.$text$!==null)n=r.$elm$=q.createTextNode(r.$text$);else if(r.$flags$&1)n=r.$elm$=q.createTextNode("");else{if(A||(A=r.$tag$==="svg"),n=r.$elm$=q.createElementNS(A?ws:xs,r.$flags$&2?"slot-fb":r.$tag$),A&&r.$tag$==="foreignObject"&&(A=!1),lo(null,r,A),Ss(G)&&n["s-si"]!==G&&n.classList.add(n["s-si"]=G),r.$children$)for(i=0;i<r.$children$.length;++i)a=Tt(e,r,i,n),a&&n.appendChild(a);r.$tag$==="svg"?A=!1:n.tagName==="foreignObject"&&(A=!0)}return n["s-hn"]=pt,r.$flags$&3&&(n["s-sr"]=!0,n["s-cr"]=jt,n["s-sn"]=r.$name$||"",l=e&&e.$children$&&e.$children$[o],l&&l.$tag$===r.$tag$&&e.$elm$&&gt(e.$elm$,!1)),n},gt=(e,t)=>{I.$flags$|=1;const o=e.childNodes;for(let s=o.length-1;s>=0;s--){const r=o[s];r["s-hn"]!==pt&&r["s-ol"]&&(uo(r).insertBefore(r,ee(r)),r["s-ol"].remove(),r["s-ol"]=void 0,r["s-sh"]=void 0,te=!0),t&&gt(r,t)}I.$flags$&=-2},ao=(e,t,o,s,r,i)=>{let n=e["s-cr"]&&e["s-cr"].parentNode||e,a;for(n.shadowRoot&&n.tagName===pt&&(n=n.shadowRoot);r<=i;++r)s[r]&&(a=Tt(null,o,r,e),a&&(s[r].$elm$=a,n.insertBefore(a,ee(t))))},co=(e,t,o)=>{for(let s=t;s<=o;++s){const r=e[s];if(r){const i=r.$elm$;fo(r),i&&(Et=!0,i["s-ol"]?i["s-ol"].remove():gt(i,!0),i.remove())}}},Os=(e,t,o,s,r=!1)=>{let i=0,n=0,a=0,l=0,h=t.length-1,p=t[0],d=t[h],v=s.length-1,f=s[0],g=s[v],m,$;for(;i<=h&&n<=v;)if(p==null)p=t[++i];else if(d==null)d=t[--h];else if(f==null)f=s[++n];else if(g==null)g=s[--v];else if(xt(p,f,r))J(p,f,r),p=t[++i],f=s[++n];else if(xt(d,g,r))J(d,g,r),d=t[--h],g=s[--v];else if(xt(p,g,r))(p.$tag$==="slot"||g.$tag$==="slot")&&gt(p.$elm$.parentNode,!1),J(p,g,r),e.insertBefore(p.$elm$,d.$elm$.nextSibling),p=t[++i],g=s[--v];else if(xt(d,f,r))(p.$tag$==="slot"||g.$tag$==="slot")&&gt(d.$elm$.parentNode,!1),J(d,f,r),e.insertBefore(d.$elm$,p.$elm$),d=t[--h],f=s[++n];else{for(a=-1,l=i;l<=h;++l)if(t[l]&&t[l].$key$!==null&&t[l].$key$===f.$key$){a=l;break}a>=0?($=t[a],$.$tag$!==f.$tag$?m=Tt(t&&t[n],o,a,e):(J($,f,r),t[a]=void 0,m=$.$elm$),f=s[++n]):(m=Tt(t&&t[n],o,n,e),f=s[++n]),m&&uo(p.$elm$).insertBefore(m,ee(p.$elm$))}i>h?ao(e,s[v+1]==null?null:s[v+1].$elm$,o,s,n,v):n>v&&co(t,i,h)},xt=(e,t,o=!1)=>e.$tag$===t.$tag$?e.$tag$==="slot"?e.$name$===t.$name$:o?!0:e.$key$===t.$key$:!1,ee=e=>e&&e["s-ol"]||e,uo=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,J=(e,t,o=!1)=>{const s=t.$elm$=e.$elm$,r=e.$children$,i=t.$children$,n=t.$tag$,a=t.$text$;let l;a===null?(A=n==="svg"?!0:n==="foreignObject"?!1:A,n==="slot"&&!Qt||lo(e,t,A),r!==null&&i!==null?Os(s,r,t,i,o):i!==null?(e.$text$!==null&&(s.textContent=""),ao(s,null,t,i,0,i.length-1)):r!==null&&co(r,0,r.length-1),A&&n==="svg"&&(A=!1)):(l=s["s-cr"])?l.parentNode.textContent=a:e.$text$!==a&&(s.data=a)},ho=e=>{const t=e.childNodes;for(const o of t)if(o.nodeType===1){if(o["s-sr"]){const s=o["s-sn"];o.hidden=!1;for(const r of t)if(r!==o){if(r["s-hn"]!==o["s-hn"]||s!==""){if(r.nodeType===1&&(s===r.getAttribute("slot")||s===r["s-sn"])){o.hidden=!0;break}}else if(r.nodeType===1||r.nodeType===3&&r.textContent.trim()!==""){o.hidden=!0;break}}}ho(o)}},O=[],po=e=>{let t,o,s;for(const r of e.childNodes){if(r["s-sr"]&&(t=r["s-cr"])&&t.parentNode){o=t.parentNode.childNodes;const i=r["s-sn"];for(s=o.length-1;s>=0;s--)if(t=o[s],!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]&&!j.experimentalSlotFixes)if(Pe(t,i)){let n=O.find(a=>a.$nodeToRelocate$===t);Et=!0,t["s-sn"]=t["s-sn"]||i,n?(n.$nodeToRelocate$["s-sh"]=r["s-hn"],n.$slotRefNode$=r):(t["s-sh"]=r["s-hn"],O.push({$slotRefNode$:r,$nodeToRelocate$:t})),t["s-sr"]&&O.map(a=>{Pe(a.$nodeToRelocate$,t["s-sn"])&&(n=O.find(l=>l.$nodeToRelocate$===t),n&&!a.$slotRefNode$&&(a.$slotRefNode$=n.$slotRefNode$))})}else O.some(n=>n.$nodeToRelocate$===t)||O.push({$nodeToRelocate$:t})}r.nodeType===1&&po(r)}},Pe=(e,t)=>e.nodeType===1?e.getAttribute("slot")===null&&t===""||e.getAttribute("slot")===t:e["s-sn"]===t?!0:t==="",fo=e=>{e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(fo)},Us=(e,t,o=!1)=>{var s,r,i,n,a;const l=e.$hostElement$,h=e.$cmpMeta$,p=e.$vnode$||At(null,null),d=Es(t)?t:io(null,null,t);if(pt=l.tagName,h.$attrsToReflect$&&(d.$attrs$=d.$attrs$||{},h.$attrsToReflect$.map(([v,f])=>d.$attrs$[f]=l[v])),o&&d.$attrs$)for(const v of Object.keys(d.$attrs$))l.hasAttribute(v)&&!["key","ref","style","class"].includes(v)&&(d.$attrs$[v]=l[v]);d.$tag$=null,d.$flags$|=4,e.$vnode$=d,d.$elm$=p.$elm$=l.shadowRoot||l,G=l["s-sc"],Qt=(h.$flags$&1)!==0,jt=l["s-cr"],Et=!1,J(p,d,o);{if(I.$flags$|=1,te){po(d.$elm$);for(const v of O){const f=v.$nodeToRelocate$;if(!f["s-ol"]){const g=q.createTextNode("");g["s-nr"]=f,f.parentNode.insertBefore(f["s-ol"]=g,f)}}for(const v of O){const f=v.$nodeToRelocate$,g=v.$slotRefNode$;if(g){const m=g.parentNode;let $=g.nextSibling;{let S=(s=f["s-ol"])===null||s===void 0?void 0:s.previousSibling;for(;S;){let M=(r=S["s-nr"])!==null&&r!==void 0?r:null;if(M&&M["s-sn"]===f["s-sn"]&&m===M.parentNode&&(M=M.nextSibling,!M||!M["s-nr"])){$=M;break}S=S.previousSibling}}(!$&&m!==f.parentNode||f.nextSibling!==$)&&f!==$&&(!f["s-hn"]&&f["s-ol"]&&(f["s-hn"]=f["s-ol"].parentNode.nodeName),m.insertBefore(f,$),f.nodeType===1&&(f.hidden=(i=f["s-ih"])!==null&&i!==void 0?i:!1))}else f.nodeType===1&&(o&&(f["s-ih"]=(n=f.hidden)!==null&&n!==void 0?n:!1),f.hidden=!0)}}Et&&ho(d.$elm$),I.$flags$&=-2,O.length=0}if(j.experimentalScopedSlotChanges&&h.$flags$&2)for(const v of d.$elm$.childNodes)v["s-hn"]!==pt&&!v["s-sh"]&&(o&&v["s-ih"]==null&&(v["s-ih"]=(a=v.hidden)!==null&&a!==void 0?a:!1),v.hidden=!0);jt=void 0},Rs=(e,t)=>{},Bs=(e,t)=>(e.$flags$|=16,Rs(e,e.$ancestorComponent$),Gs(()=>Ds(e,t))),Ds=(e,t)=>{const o=e.$hostElement$,s=ft("scheduleUpdate",e.$cmpMeta$.$tagName$),r=o;let i;return t?i=Q(r,"componentWillLoad"):i=Q(r,"componentWillUpdate"),i=Le(i,()=>Q(r,"componentWillRender")),s(),Le(i,()=>Fs(e,r,t))},Le=(e,t)=>Ns(e)?e.then(t):t(),Ns=e=>e instanceof Promise||e&&e.then&&typeof e.then=="function",Fs=async(e,t,o)=>{const s=e.$hostElement$,r=ft("update",e.$cmpMeta$.$tagName$);s["s-rc"],o&&Ls(e);const i=ft("render",e.$cmpMeta$.$tagName$);Hs(e,t,s,o),i(),r(),js(e)},Hs=(e,t,o,s)=>{try{Vt=t,t=t.render&&t.render(),e.$flags$&=-17,e.$flags$|=2,(j.hasRenderFn||j.reflect)&&(j.vdomRender||j.reflect)&&(j.hydrateServerSide||Us(e,t,s))}catch(l){oe(l,e.$hostElement$)}return Vt=null,null},ze=()=>Vt,js=e=>{const t=e.$cmpMeta$.$tagName$,o=e.$hostElement$,s=ft("postUpdate",t),r=o;e.$ancestorComponent$,Q(r,"componentDidRender"),e.$flags$&64?(Q(r,"componentDidUpdate"),s()):(e.$flags$|=64,Q(r,"componentDidLoad"),s())},Me=e=>{{const t=qs(e),o=t.$hostElement$.isConnected;return o&&(t.$flags$&18)===2&&Bs(t,!1),o}},Q=(e,t,o)=>{if(e&&e[t])try{return e[t](o)}catch(s){oe(s)}},Vs=new WeakMap,qs=e=>Vs.get(e),Ie=(e,t)=>t in e,oe=(e,t)=>(0,console.error)(e,t),Ws=new Map,se=typeof window<"u"?window:{},q=se.document||{head:{}};se.HTMLElement;const I={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,o,s)=>e.addEventListener(t,o,s),rel:(e,t,o,s)=>e.removeEventListener(t,o,s),ce:(e,t)=>new CustomEvent(e,t)},Ks=e=>Promise.resolve(e),Oe=[],go=[],Xs=(e,t)=>o=>{e.push(o),qt||(qt=!0,t&&I.$flags$&4?Ys(Wt):I.raf(Wt))},Ue=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(o){oe(o)}e.length=0},Wt=()=>{Ue(Oe),Ue(go),(qt=Oe.length>0)&&I.raf(Wt)},Ys=e=>Ks().then(e),Gs=Xs(go,!0),Js=(e,t,o)=>{const s=e.get(t);s?s.includes(o)||s.push(o):e.set(t,[o])},Zs=(e,t)=>{let o;return(...s)=>{o&&clearTimeout(o),o=setTimeout(()=>{o=0,e(...s)},t)}},Qs=e=>!("isConnected"in e)||e.isConnected,Re=Zs(e=>{for(let t of e.keys())e.set(t,e.get(t).filter(Qs))},2e3),tr=()=>{if(typeof ze!="function")return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const o=ze();o&&Js(e,t,o)},set:t=>{const o=e.get(t);o&&e.set(t,o.filter(Me)),Re(e)},reset:()=>{e.forEach(t=>t.forEach(Me)),Re(e)}}},Dt=e=>typeof e=="function"?e():e,er=(e,t=(o,s)=>o!==s)=>{const o=Dt(e);let s=new Map(Object.entries(o??{}));const r={dispose:[],get:[],set:[],reset:[]},i=()=>{var g;s=new Map(Object.entries((g=Dt(e))!==null&&g!==void 0?g:{})),r.reset.forEach(m=>m())},n=()=>{r.dispose.forEach(g=>g()),i()},a=g=>(r.get.forEach(m=>m(g)),s.get(g)),l=(g,m)=>{const $=s.get(g);t(m,$,g)&&(s.set(g,m),r.set.forEach(S=>S(g,m,$)))},h=typeof Proxy>"u"?{}:new Proxy(o,{get(g,m){return a(m)},ownKeys(g){return Array.from(s.keys())},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},has(g,m){return s.has(m)},set(g,m,$){return l(m,$),!0}}),p=(g,m)=>(r[g].push(m),()=>{or(r[g],m)});return{state:h,get:a,set:l,on:p,onChange:(g,m)=>{const $=p("set",(M,bo)=>{M===g&&m(bo)}),S=p("reset",()=>m(Dt(e)[g]));return()=>{$(),S()}},use:(...g)=>{const m=g.reduce(($,S)=>(S.set&&$.push(p("set",S.set)),S.get&&$.push(p("get",S.get)),S.reset&&$.push(p("reset",S.reset)),S.dispose&&$.push(p("dispose",S.dispose)),$),[]);return()=>m.forEach($=>$())},dispose:n,reset:i,forceUpdate:g=>{const m=s.get(g);r.set.forEach($=>$(g,m,m))}}},or=(e,t)=>{const o=e.indexOf(t);o>=0&&(e[o]=e[e.length-1],e.length--)},sr=(e,t)=>{const o=er(e,t);return o.use(tr()),o},{state:k,onChange:vt}=sr({images:[],videos:[],generationID:[],mainPanel:"image",currentSlide:0});function rr(e){k.images=[...k.images,e]}function ir(e){const t=[...k.videos];t[k.currentSlide]=e,k.videos=t}function nr(e){const t=[...k.generationID];t[k.currentSlide]=e,k.generationID=t}function lr(e){k.mainPanel=e}function ar(e){k.currentSlide=e}const cr=e=>`
  <sl-carousel-item>
    <img src='${e}' class='w-full h-full' alt="" />
  </sl-carousel-item>
`,dr=()=>{vt("images",t=>{const o=document.querySelector(".nav-carousel");let s="";for(const r of t)s+=cr(r);o.innerHTML=s}),document.querySelector(".nav-carousel").addEventListener("sl-slide-change",t=>{const o=t.detail.index;ar(o)})},ur=()=>(setTimeout(()=>dr(),0),`
  <sl-carousel class="vertical nav-carousel" pagination orientation="vertical" style="--aspect-ratio: 3/2;"></sl-carousel>
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

`);var hr=R`
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
`,pr=R`
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
`,fr=(e="value")=>(t,o)=>{const s=t.constructor,r=s.prototype.attributeChangedCallback;s.prototype.attributeChangedCallback=function(i,n,a){var l;const h=s.getPropertyOptions(e),p=typeof h.attribute=="string"?h.attribute:e;if(i===p){const d=h.converter||tt,f=(typeof d=="function"?d:(l=d==null?void 0:d.fromAttribute)!=null?l:tt.fromAttribute)(a,h.type);this[e]!==f&&(this[o]=f)}r.call(this,i,n,a)}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gr=eo(class extends oo{constructor(e){if(super(e),e.type!==F.PROPERTY&&e.type!==F.ATTRIBUTE&&e.type!==F.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!as(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===P||t===x)return t;const o=e.element,s=e.name;if(e.type===F.PROPERTY){if(t===o[s])return P}else if(e.type===F.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(s))return P}else if(e.type===F.ATTRIBUTE&&o.getAttribute(s)===t+"")return P;return ds(e),t}});var b=class extends L{constructor(){super(...arguments),this.formControlController=new to(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new Zt(this,"help-text","label"),this.localize=new mt(this),this.hasFocus=!1,this.title="",this.__numberInput=Object.assign(document.createElement("input"),{type:"number"}),this.__dateInput=Object.assign(document.createElement("input"),{type:"date"}),this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){var e;return this.__dateInput.type=this.type,this.__dateInput.value=this.value,((e=this.input)==null?void 0:e.valueAsDate)||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){var e;return this.__numberInput.value=this.value,((e=this.input)==null?void 0:e.valueAsNumber)||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key==="Enter"&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,o="none"){this.input.setSelectionRange(e,t,o)}setRangeText(e,t,o,s="preserve"){const r=t??this.input.selectionStart,i=o??this.input.selectionEnd;this.input.setRangeText(e,r,i,s),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),o=this.label?!0:!!e,s=this.helpText?!0:!!t,r=this.clearable&&!this.disabled&&!this.readonly,i=r&&(typeof this.value=="number"||this.value.length>0);return C`
      <div
        part="form-control"
        class=${U({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":s})}
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
            class=${U({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
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
              name=${_(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${_(this.placeholder)}
              minlength=${_(this.minlength)}
              maxlength=${_(this.maxlength)}
              min=${_(this.min)}
              max=${_(this.max)}
              step=${_(this.step)}
              .value=${gr(this.value)}
              autocapitalize=${_(this.autocapitalize)}
              autocomplete=${_(this.autocomplete)}
              autocorrect=${_(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${_(this.pattern)}
              enterkeyhint=${_(this.enterkeyhint)}
              inputmode=${_(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?C`
                  <button
                    part="clear-button"
                    class=${U({input__clear:!0,"input__clear--visible":i})}
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
          aria-hidden=${s?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};b.styles=[K,hr,pr];b.dependencies={"sl-icon":z};c([$t(".input__control")],b.prototype,"input",2);c([X()],b.prototype,"hasFocus",2);c([u()],b.prototype,"title",2);c([u({reflect:!0})],b.prototype,"type",2);c([u()],b.prototype,"name",2);c([u()],b.prototype,"value",2);c([fr()],b.prototype,"defaultValue",2);c([u({reflect:!0})],b.prototype,"size",2);c([u({type:Boolean,reflect:!0})],b.prototype,"filled",2);c([u({type:Boolean,reflect:!0})],b.prototype,"pill",2);c([u()],b.prototype,"label",2);c([u({attribute:"help-text"})],b.prototype,"helpText",2);c([u({type:Boolean})],b.prototype,"clearable",2);c([u({type:Boolean,reflect:!0})],b.prototype,"disabled",2);c([u()],b.prototype,"placeholder",2);c([u({type:Boolean,reflect:!0})],b.prototype,"readonly",2);c([u({attribute:"password-toggle",type:Boolean})],b.prototype,"passwordToggle",2);c([u({attribute:"password-visible",type:Boolean})],b.prototype,"passwordVisible",2);c([u({attribute:"no-spin-buttons",type:Boolean})],b.prototype,"noSpinButtons",2);c([u({reflect:!0})],b.prototype,"form",2);c([u({type:Boolean,reflect:!0})],b.prototype,"required",2);c([u()],b.prototype,"pattern",2);c([u({type:Number})],b.prototype,"minlength",2);c([u({type:Number})],b.prototype,"maxlength",2);c([u()],b.prototype,"min",2);c([u()],b.prototype,"max",2);c([u()],b.prototype,"step",2);c([u()],b.prototype,"autocapitalize",2);c([u()],b.prototype,"autocorrect",2);c([u()],b.prototype,"autocomplete",2);c([u({type:Boolean})],b.prototype,"autofocus",2);c([u()],b.prototype,"enterkeyhint",2);c([u({type:Boolean,converter:{fromAttribute:e=>!(!e||e==="false"),toAttribute:e=>e?"true":"false"}})],b.prototype,"spellcheck",2);c([u()],b.prototype,"inputmode",2);c([E("disabled",{waitUntilFirstUpdate:!0})],b.prototype,"handleDisabledChange",1);c([E("step",{waitUntilFirstUpdate:!0})],b.prototype,"handleStepChange",1);c([E("value",{waitUntilFirstUpdate:!0})],b.prototype,"handleValueChange",1);b.define("sl-input");var vr=R`
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
`,vo=class extends L{constructor(){super(...arguments),this.hasSlotController=new Zt(this,"footer","header","image")}render(){return C`
      <div
        part="base"
        class=${U({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};vo.styles=[K,vr];vo.define("sl-card");Gt.define("sl-spinner");async function br(){document.querySelector(".spinner").classList.remove("hidden");try{const e=document.querySelector("#prompt").value;if(!e)return alert("No text description entered");const o=await fetch("https://imagine.motionstoryline.com/image",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:e})});if(!o.ok)throw new Error("Network response was not ok");const s=await o.blob(),r=await mr(URL.createObjectURL(s));rr(r)}catch(e){console.error("Error generating image:",e),alert("Something has gone wrong. Please try again.")}document.querySelector(".spinner").classList.add("hidden")}async function mr(e,t=768,o=768){try{const s=document.getElementById("canvas");if(!s)throw new Error("Canvas element not found");const r=s.getContext("2d");if(!r)throw new Error("Unable to get canvas context");s.width=t,s.height=o;const i=new Image;return i.src=e,await new Promise((a,l)=>{i.onload=()=>{r.drawImage(i,0,0,s.width,s.height);const h=s.toDataURL();a(h)},i.onerror=()=>l(new Error("Image loading error"))})}catch(s){throw console.error("Error cropping image:",s),s}}const Be=e=>`
  <img src='${e}' class='max-w-full max-h-[calc(100vh-188px-60px)]' />
`,De=()=>(setTimeout(()=>yr(),0),`
  <div>
    <sl-card class="card-header w-full px-10">
      <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: green;"></sl-spinner>
      <p>Describe the image you want to generate.</p>
      <sl-input id="prompt" placeholder="Image description prompt" filled></sl-input>
      <sl-button id="generate" class="py-2">Generate Image</sl-button>
    </sl-card>
    <div id="image-container" class="w-full px-10 py-3"></div>
    <canvas id="canvas" class="hidden"></canvas>
  </div>
`),yr=()=>{document.querySelector("#generate").addEventListener("click",br);const t=document.querySelector("#image-container");vt("images",o=>{t.innerHTML=Be(o[o.length-1])}),vt("currentSlide",o=>{t.innerHTML=Be(k.images[o])})};async function $r(e){const o=await(await fetch(e)).blob();return new Promise((s,r)=>{const i=new FileReader;i.onloadend=()=>s(i.result.split(",")[1]),i.onerror=r,i.readAsDataURL(o)})}const _r=async()=>{document.querySelector(".spinner").classList.remove("hidden");const e=await $r(k.images[k.currentSlide]),o=await fetch("https://imagine.motionstoryline.com/video",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({image:e})});o.ok||console.log("Network response was not ok");const r=(await o.json()).generationID;nr(r),document.querySelector(".spinner").classList.add("hidden")},wr=async()=>{document.querySelector(".spinner").classList.remove("hidden");const e=k.generationID[k.currentVideo];if(e.length<1)return console.log("generationID not found");const o=await fetch("https://imagine.motionstoryline.com/poll_video",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({generationID:e})});o.ok||console.log("Network response was not ok");const s=await o.arrayBuffer(),r=new Blob([s],{type:"video/*"});ir(URL.createObjectURL(r)),document.querySelector(".spinner").classList.add("hidden")},xr=e=>`
  <video src='${e}' controls autoplay class='max-w-full max-h-full'></video>
`,Sr=()=>{document.querySelector("#generate-video").addEventListener("click",_r),document.querySelector("#poll-video").addEventListener("click",wr),vt("videos",(o,s)=>{const r=document.querySelector("#video-container");r.innerHTML=xr(o[k.currentSlide])})},kr=()=>(setTimeout(()=>Sr(),0),`
  <sl-card class="card-header w-full px-10">
    <sl-spinner class="spinner hidden" style="font-size: 3rem; --indicator-color: lightgreen; --track-color: green;"></sl-spinner>
    <p>Generate video from current image.</p>
    <sl-button id="generate-video" class="py-2">Generate Video</sl-button>
    <sl-button id="poll-video" class="py-2">Poll Video</sl-button>
    <p>Videos take a couple of minutes to generate. Check to see if it ready by clicking poll.
  </sl-card>
  <div id="video-container" class="w-full px-10 py-3"></div>
`),Cr=()=>{const e=document.querySelector("#main-area");document.querySelectorAll("sl-menu-item").forEach(o=>o.addEventListener("click",s=>lr(s.target.value))),vt("mainPanel",o=>{e.innerHTML=o==="video"?kr():De()}),e.innerHTML=De()},Er=()=>(setTimeout(()=>Cr(),0),`
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
                ${ur()}
                </div>
                <div
                    slot="end"
                    style="height: 100%; background: var(--sl-color-neutral-50); display: flex; align-items: center; justify-content: center; overflow: hidden"
                >
                ${ps()}
                </div>
                </sl-split-panel>
            </div>
        </sl-split-panel>
    `);document.querySelector("#dashboard").innerHTML=Er();
