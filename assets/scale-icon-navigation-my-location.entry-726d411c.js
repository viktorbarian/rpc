import{r as e,h as t,H as a,g as l}from"./index-17cfbcc7.js";const o=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,n=class{constructor(i){e(this,i),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const i=this.decorative?{"aria-hidden":"true"}:{},s=this.focusable?{tabindex:0}:{};return t(a,null,t("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},i,s),this.accessibilityTitle&&t("title",null,this.accessibilityTitle),t("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?t("g",null,t("path",{"fill-rule":"evenodd",d:"M12 1a.75.75 0 01.75.75v1.79a8.5 8.5 0 017.71 7.71h1.79a.75.75 0 110 1.5h-1.79a8.5 8.5 0 01-7.71 7.71v1.79a.75.75 0 11-1.5 0v-1.79a8.5 8.5 0 01-7.71-7.71H1.75a.75.75 0 110-1.5h1.79a8.5 8.5 0 017.71-7.71V1.75A.75.75 0 0112 1zm0 9a2 2 0 100 4 2 2 0 000-4z"})):t("g",null,t("path",{d:"M12 1c.4 0 .75.35.75.75v1.8c4.1.35 7.35 3.6 7.7 7.7h1.8c.4 0 .75.35.75.75s-.35.75-.75.75h-1.8c-.35 4.1-3.6 7.35-7.7 7.7v1.8c0 .4-.35.75-.75.75s-.75-.35-.75-.75v-1.8c-4.1-.35-7.35-3.6-7.7-7.7h-1.8c-.4 0-.75-.35-.75-.75s.35-.75.75-.75h1.8c.35-4.1 3.6-7.35 7.7-7.7v-1.8c0-.4.35-.75.75-.75zm0 4c-3.85 0-7 3.15-7 7s3.15 7 7 7 7-3.15 7-7-3.15-7-7-7zm0 5a2 2 0 110 4 2 2 0 010-4z","fill-rule":"evenodd"})))))}get hostElement(){return l(this)}};n.style=o;export{n as scale_icon_navigation_my_location};
