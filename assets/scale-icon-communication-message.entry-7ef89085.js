import{r as i,h as s,H as l,g as a}from"./index-17cfbcc7.js";const c=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,n=class{constructor(t){i(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const t=this.decorative?{"aria-hidden":"true"}:{},e=this.focusable?{tabindex:0}:{};return s(l,null,s("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},t,e),this.accessibilityTitle&&s("title",null,this.accessibilityTitle),s("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?s("g",null,s("path",{"fill-rule":"evenodd",d:"M1.5 3.5V16a3 3 0 003 3H6v2.275A1.75 1.75 0 009 22.5l3.5-3.5h7a3 3 0 003-3V3.5h-21zm15 10h-9a.75.75 0 110-1.5h9a.75.75 0 110 1.5zm0-3.5h-9a.75.75 0 010-1.5h9a.75.75 0 110 1.5z"})):s("g",null,s("path",{d:"M22.45 3.5v12.55c0 1.65-1.35 3-3 3h-7l-3.5 3.5c-.35.35-.75.5-1.2.5-.9 0-1.75-.7-1.75-1.75V19H4.5c-1.65 0-3-1.35-3-3V3.5zM21 5H3v11c0 .85.65 1.5 1.5 1.5h3.05v3.8c0 .25.25.25.25.25.05 0 .1-.05.15-.1l3.95-3.95h7.6c.85 0 1.5-.65 1.5-1.5zm-4.5 7c.4 0 .75.35.75.75s-.35.75-.75.75h-9c-.4 0-.75-.35-.75-.75S7.1 12 7.5 12zm0-3.5c.4 0 .75.35.75.75s-.35.75-.75.75h-9c-.4 0-.75-.35-.75-.75s.35-.75.75-.75z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};n.style=c;export{n as scale_icon_communication_message};
