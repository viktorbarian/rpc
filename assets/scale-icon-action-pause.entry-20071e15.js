import{r as i,h as t,H as l,g as a}from"./index-17cfbcc7.js";const n=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,o=class{constructor(s){i(this,s),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const s=this.decorative?{"aria-hidden":"true"}:{},e=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},s,e),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm-1 15H9V8h2zm4 0h-2V8h2z","fill-rule":"evenodd"})):t("g",null,t("path",{d:"M12 1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1zm0 1.5c-5.24 0-9.5 4.26-9.5 9.5s4.26 9.5 9.5 9.5 9.5-4.26 9.5-9.5-4.26-9.5-9.5-9.5zM11 8v8H9V8zm4 0v8h-2V8z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};o.style=n;export{o as scale_icon_action_pause};