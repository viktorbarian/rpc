import{r as i,h as t,H as l,g as a}from"./index-17cfbcc7.js";const n=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,o=class{constructor(e){i(this,e),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const e=this.decorative?{"aria-hidden":"true"}:{},s=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},e,s),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{d:"M15.7.225L16.625 3H20.5v2H22v6h-6a2.5 2.5 0 100 5h6v3a3 3 0 01-3 3H5a3 3 0 01-3-3V6a3 3 0 013-3h4.535zM22 12.5v2h-6a1 1 0 110-2zM14.8 2.275L8.745 5h6.965z","fill-rule":"evenodd"})):t("g",null,t("path",{"fill-rule":"evenodd",d:"M20.5 5V3h-3.9L15.7.25 9.55 3H5C3.35 3 2 4.35 2 6v13c0 1.65 1.35 3 3 3h14c1.65 0 3-1.35 3-3V5h-1.5zm-4.8 0H8.75l6.05-2.75.9 2.75zm4.8 9.5H16c-.55 0-1-.45-1-1s.45-1 1-1h4.5v2zM16 11c-1.4 0-2.5 1.1-2.5 2.5S14.6 16 16 16h4.5v3c0 .85-.65 1.5-1.5 1.5H5c-.85 0-1.5-.65-1.5-1.5V6.5h17V11H16z"})))))}get hostElement(){return a(this)}};o.style=n;export{o as scale_icon_content_wallet};
