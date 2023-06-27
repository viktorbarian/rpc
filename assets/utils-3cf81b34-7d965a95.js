/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */const u=e=>!!e.shadowRoot&&!!e.attachShadow,a=e=>{let n=document.styleSheets[0];if(!n){const o=document.createElement("style");document.head.appendChild(o),n=document.styleSheets[0],document.head.removeChild(o)}function t(){try{return/^:/.test(e)||(e=":"+e),n.insertRule("html"+e+"{}",0),n.deleteRule(0),!0}catch{return!1}}return t()};function d(e,n,t){const o=n+"Legacy",s=[];return typeof e[o]<"u"&&s.push(e[o].emit(t)),s.push(e[n].emit(t)),s}function c(e,n){let t=e.target;const o=t.shadowRoot!=null,s=o?e.composedPath():[];do{if(t===n)return!1;o?t=s.shift():t=t.parentNode}while(t);return!0}const i=e=>e==null||e.nodeType!==1?!1:e.nodeName.toUpperCase().substring(0,10)==="SCALE-ICON";let r=0;function h(){return r++}export{c as a,a as b,d as e,h as g,u as h,i};
