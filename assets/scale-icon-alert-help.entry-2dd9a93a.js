import{r as i,h as t,H as l,g as a}from"./index-17cfbcc7.js";const n=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,o=class{constructor(e){i(this,e),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const e=this.decorative?{"aria-hidden":"true"}:{},s=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},e,s),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm1.25 16.235h-2.31v-2.31h2.31zm-.18-3.705v.21h-1.965v-.5c0-1.95 2.145-2.115 2.145-3.39a.935.935 0 00-1-1c-.615 0-1 .39-1.065 1.155h-2.03a2.95 2.95 0 013.09-3c1.695 0 3.03 1.11 3.03 2.775 0 2.145-2.205 2.445-2.205 3.75z","fill-rule":"evenodd"})):t("g",null,t("path",{d:"M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zm1.25 12.4v2.3h-2.3v-2.3zm-1-7.9c1.7 0 3 1.1 2.95 2.8 0 2.15-2.2 2.45-2.2 3.75v.2h-1.95v-.5c0-1.95 2.15-2.15 2.15-3.4 0-.65-.4-1-1-1s-1 .4-1.05 1.15h-2c.05-1.6 1.15-3 3.1-3z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};o.style=n;export{o as scale_icon_alert_help};
