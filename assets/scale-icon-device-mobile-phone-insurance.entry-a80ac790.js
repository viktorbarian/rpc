import{r as s,h as e,H as l,g as a}from"./index-17cfbcc7.js";const n=`scale-icon{--display:inline-flex;--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}`,o=class{constructor(t){s(this,t),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1,this.focusable=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){const t=this.decorative?{"aria-hidden":"true"}:{},i=this.focusable?{tabindex:0}:{};return e(l,null,e("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},t,i),this.accessibilityTitle&&e("title",null,this.accessibilityTitle),e("g",{fill:this.fill==="currentColor"?this.color:this.fill},this.selected?e("g",null,e("path",{"fill-rule":"evenodd",d:"M16 .5a3 3 0 013 3v1.955L9.03 11l4.05 2.19-3.785 2.31.81 1.275 6-3.675-3.94-2.1L19 7.17V20.5a3 3 0 01-3 3H8a3 3 0 01-3-3v-17a3 3 0 013-3zm-4 17.75a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm0 .5a1 1 0 110 2 1 1 0 010-2zm2-16.5h-4v1h4v-1z"})):e("g",null,e("path",{"fill-rule":"evenodd",d:"M16 .5c1.65 0 3 1.35 3 3v17c0 1.65-1.35 3-3 3H8c-1.65 0-3-1.35-3-3v-17c0-1.65 1.35-3 3-3zM10 2H8c-.85 0-1.5.65-1.5 1.5v17c0 .85.65 1.5 1.5 1.5h8c.85 0 1.5-.65 1.5-1.5V7.9L12.2 11l3.95 2.1-6.05 3.7-.8-1.3 3.8-2.35L9.05 11l8.45-4.8V3.5c0-.85-.65-1.5-1.5-1.5h-2v1.5h-4V2zm2 16.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"})))))}get hostElement(){return a(this)}};o.style=n;export{o as scale_icon_device_mobile_phone_insurance};
