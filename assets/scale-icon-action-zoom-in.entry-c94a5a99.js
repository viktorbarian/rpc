import{r as e,h as t,H as l,g as a}from"./index-17cfbcc7.js";const o=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,n=class{constructor(s){e(this,s),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const s=this.decorative?{"aria-hidden":"true"}:{},i=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},s,i),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{"fill-rule":"evenodd",d:"M21.385 19.615l-4.92-4.915a8 8 0 10-1.765 1.765l4.915 4.92c.49.487 1.28.487 1.77 0a1.26 1.26 0 000-1.77zM10.75 13a.75.75 0 11-1.5 0v-2.25H7a.75.75 0 110-1.5h2.25V7a.75.75 0 011.5 0v2.25H13a.75.75 0 110 1.5h-2.25V13z"})):t("g",null,t("path",{"fill-rule":"evenodd",d:"M10 2c4.42 0 8 3.58 8 8 0 1.76-.575 3.38-1.535 4.695l4.92 4.92c.485.49.485 1.28.005 1.77a1.245 1.245 0 01-.885.365c-.32 0-.64-.12-.885-.365l-4.92-4.92A7.961 7.961 0 0110 18c-4.42 0-8-3.58-8-8s3.58-8 8-8zm0 1.5A6.506 6.506 0 003.5 10c0 3.585 2.915 6.5 6.5 6.5s6.5-2.915 6.5-6.5-2.915-6.5-6.5-6.5zm0 2.75c.415 0 .75.335.75.75v2.25H13a.749.749 0 110 1.5h-2.25V13a.749.749 0 11-1.5 0v-2.25H7a.749.749 0 110-1.5h2.25V7c0-.415.335-.75.75-.75z"})))))}get hostElement(){return a(this)}};n.style=o;export{n as scale_icon_action_zoom_in};
