import{r as e,h as i,H as a,g as s}from"./index-f8aaaabc.js";const o=":host{--background:var(--telekom-color-background-canvas, #fff);--spacing-x:var(--telekom-spacing-unit-x6);--min-height:100vh}.sr-only{position:absolute;left:-10000px;overflow:hidden}.shell{display:flex;min-height:var(--min-height);flex-direction:column}.shell .content{box-sizing:border-box;align-self:center;width:100%;background:var(--background);padding-left:var(--spacing-x);padding-right:var(--spacing-x);flex:1}@media (min-width: 1552px){.shell .content{max-width:var(--header-max-width)}}",l=class{constructor(t){e(this,t),this.portalName="",this.claimLang="de",this.mainNavigation=[],this.iconNavigation=[],this.userNavigation=[],this.sectorNavigation=[],this.addonNavigation=[],this.activeRouteId="",this.activeSectorId="",this.sticky=!1,this.scrolled=!1}componentWillLoad(){this.hasSlotHeader=!!this.hostElement.querySelector('[slot="header"]')}render(){return i(a,null,this.styles&&i("style",null,this.styles),i("div",{part:"base",class:"shell"},this.hasSlotHeader?i("slot",{name:"header"}):i("scale-app-header",{logoClick:this.logoClick,logoAriaDescribedBy:this.logoAriaDescribedBy,logoHref:this.logoHref,logoTitle:this.logoTitle,logoHideTitle:this.logoHideTitle,portalName:this.portalName,mainNavigation:this.mainNavigation,iconNavigation:this.iconNavigation,userNavigation:this.userNavigation,sectorNavigation:this.sectorNavigation,addonNavigation:this.addonNavigation,activeRouteId:this.activeRouteId,activeSectorId:this.activeSectorId,claimLang:this.claimLang,sticky:this.sticky,userMenuAriaLabel:this.userMenuAriaLabel}),i("main",{class:"content"},i("slot",null)),i("slot",{name:"footer"})))}get hostElement(){return s(this)}};l.style=o;export{l as scale_app_shell};