import{r as i,h as t,H as l,g as a}from"./index-17cfbcc7.js";const n=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,c=class{constructor(e){i(this,e),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const e=this.decorative?{"aria-hidden":"true"}:{},s=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},e,s),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{d:"M22.09 6.715l-4.5 2.36-1.285-1-.105-1.64 4.5-2.36c-2.03-2.5-5.43-3.42-8.18-2S8.63 6.68 9.43 9.725L2.325 16.83a3.5 3.5 0 004.95 4.95l6.885-6.89a6.205 6.205 0 004.89-.33c2.755-1.44 3.95-4.745 3.04-7.845z","fill-rule":"evenodd"})):t("g",null,t("path",{d:"M22.1 6.7l-4.5 2.35-1.3-1-.1-1.65 4.5-2.35c-1.35-1.7-3.35-2.65-5.35-2.65-.95 0-1.9.2-2.8.7-1.6.85-2.65 2.3-3.1 3.95-.3 1.15-.3 2.45 0 3.7l-7.1 7.1C1 18.2 1 20.45 2.35 21.8s3.6 1.35 4.95 0l6.9-6.9c1.6.55 3.35.5 4.9-.35 2.7-1.45 3.9-4.75 3-7.85zm-3.75 6.55c-2.05 1.1-3.9.15-4.6-.05L6.2 20.7c-.8.8-2.05.8-2.85 0s-.8-2.05 0-2.85l7.7-7.7c-.2-.75-.65-1.95-.3-3.5.3-1.4 1.15-2.6 2.4-3.25.65-.35 1.35-.5 2.1-.5.95 0 1.95.3 2.8.85l-3.45 1.8.2 3.3 2.55 2.05 3.45-1.8c0 1.7-.9 3.35-2.45 4.15z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};c.style=n;export{c as scale_icon_service_maintanance};