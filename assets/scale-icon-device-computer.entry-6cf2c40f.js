import{r as s,h as t,H as l,g as a}from"./index-17cfbcc7.js";const o=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,n=class{constructor(e){s(this,e),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const e=this.decorative?{"aria-hidden":"true"}:{},i=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},e,i),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{d:"M24 17a2 2 0 01-2 2H2a2 2 0 01-2-2zM18.5 4.25a2.245 2.245 0 012.25 2.25v9H3.25v-9A2.245 2.245 0 015.5 4.25zm-11 3.505v5.09l1.08-1.29 1 2.385.92-.39-1-2.38 1.645.14z","fill-rule":"evenodd"})):t("g",null,t("path",{d:"M24 17c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2zM18.5 3.5c1.65 0 3 1.35 3 3v9H20v-9c0-.85-.65-1.5-1.5-1.5h-13C4.65 5 4 5.65 4 6.5v9H2.5v-9c0-1.65 1.35-3 3-3zm-11 4.25l3.65 3.55-1.65-.15 1 2.4-.95.4-1-2.4-1.05 1.3z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};n.style=o;export{n as scale_icon_device_computer};
