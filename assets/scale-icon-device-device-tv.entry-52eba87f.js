import{r as s,h as e,H as l,g as a}from"./index-17cfbcc7.js";const c=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,n=class{constructor(t){s(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const t=this.decorative?{"aria-hidden":"true"}:{},i=this.focusable?{tabindex:0}:{};return e(l,null,e("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},t,i),this.accessibilityTitle&&e("title",null,this.accessibilityTitle),e("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?e("g",null,e("path",{d:"M1 3.5V16a3 3 0 003 3h5.44l-.11.21A1.5 1.5 0 018 20H5.5v1.5h13V20H16a1.5 1.5 0 01-1.325-.79L14.56 19H20a3 3 0 003-3V3.5H1zm8.5 11.35v-7.2l5.5 3.6-5.5 3.6z","fill-rule":"evenodd"})):e("g",null,e("path",{d:"M23 3.5V16c0 1.65-1.35 3-3 3h-5.45l.2.2c.25.5.75.8 1.3.8h2.5v1.5h-13V20h2.5c.55 0 1.05-.3 1.3-.8l.1-.2H4c-1.65 0-3-1.35-3-3V3.5h22zM21.5 5h-19v11c0 .85.65 1.5 1.5 1.5h16c.85 0 1.5-.65 1.5-1.5V5zm-12 2.65l5.5 3.6-5.5 3.6v-7.2z","fill-rule":"evenodd"})))))}get hostElement(){return a(this)}};n.style=c;export{n as scale_icon_device_device_tv};