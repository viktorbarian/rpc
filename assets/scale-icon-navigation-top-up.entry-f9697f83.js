import{r as e,h as t,H as l,g as a}from"./index-17cfbcc7.js";const o=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,n=class{constructor(i){e(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const i=this.decorative?{"aria-hidden":"true"}:{},s=this.focusable?{tabindex:0}:{};return t(l,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},i,s),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{"fill-rule":"evenodd",d:"M20.12 17.31c-.332.001-.65-.13-.885-.365L12 9.71l-7.235 7.235A1.25 1.25 0 113 15.175l9-9 9 9a1.26 1.26 0 010 1.77c-.233.234-.55.365-.88.365z"})):t("g",null,t("path",{d:"M20.65 15.55L12 6.9l-8.65 8.65c-.3.3-.3.75 0 1.05s.75.3 1.05 0L12 9l7.6 7.6c.3.3.75.3 1.05 0s.3-.8 0-1.05z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};n.style=o;export{n as scale_icon_navigation_top_up};