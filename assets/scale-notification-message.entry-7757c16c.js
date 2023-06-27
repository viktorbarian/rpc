import{r as i,c as s,h as t,H as n,g as r}from"./index-f8aaaabc.js";import{c}from"./index-713f92a5-09099cb6.js";import{s as l}from"./status-note-0089e9c9-ce64fd2c.js";import{e as d}from"./utils-3cf81b34-7d965a95.js";const h=`:host{--width:100%;--radius:var(--telekom-radius-standard);--border:var(--telekom-line-weight-standard) solid transparent;--background-error:var(--telekom-color-functional-danger-subtle);--background-warning:var(--telekom-color-functional-warning-subtle);--background-informational:var(
    --telekom-color-functional-informational-subtle
  );--background-success:var(--telekom-color-functional-success-subtle)}.notification-message{border:var(--border);border-radius:var(--radius);width:var(--width);position:relative}.notification-message--variant-error{background:var(--background-error)}.notification-message--variant-warning{background-color:var(--background-warning)}.notification-message--variant-informational{background-color:var(--background-informational)}.notification-message--variant-success{background-color:var(--background-success)}.notification-message__heading{margin:14px 48px 14px 48px;font-weight:var(--telekom-typography-font-weight-bold);line-height:var(--telekom-typography-line-spacing-standard)}.notification-message__text{margin:8px 48px 15px 48px}::slotted(*){font-weight:var(--telekom-typography-font-weight-regular)}.notification-message__icon-close{position:absolute;top:8px;right:13.5px;border:none;cursor:pointer;margin:0;padding:0;background:transparent;color:var(--telekom-color-text-and-icon-standard)}.notification-message__icon-close svg{height:19px;width:19px;padding:6.5px;border-radius:20%}.notification-message__icon-close:hover svg{background-color:hsl(0, 0%, 100%);color:var(--telekom-color-text-and-icon-primary-hovered)}.notification-message__icon-success{position:absolute;top:12.5px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-success)}.notification-message__icon-error{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-danger)}.notification-message__icon-information{position:absolute;top:12px;left:17px;height:20px;width:20px;color:var(--telekom-color-text-and-icon-functional-informational)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.notification-message__icon-close{color:hsl(0, 0%, 100%)}.notification-message{border:1px solid hsl(0, 0%, 100%)}}`,g=class{constructor(e){i(this,e),this.scaleClose=s(this,"scale-close",7),this.variant="informational",this.dismissible=!1,this.autoHide=!1,this.autoHideDuration=3e3,this.closeButtonLabel="close",this.closeButtonTitle="close",this.close=()=>{this.opened=!1,d(this,"scaleClose")}}componentWillLoad(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]")}componentDidRender(){this.autoHide===!0&&setTimeout(this.close,this.autoHideDuration)}componentDidUpdate(){this.hasSlotText=!!this.hostElement.querySelector("[slot=text]")}connectedCallback(){l({source:this.hostElement,type:"warn"})}async open(){this.opened=!0}handleIcons(){if(this.variant)switch(this.variant){case"success":return t("scale-icon-alert-success",{class:"notification-message__icon-success",color:"#187431","aria-hidden":"true"});case"informational":return t("scale-icon-alert-information",{class:"notification-message__icon-information","aria-hidden":"true"});case"error":return t("scale-icon-alert-error",{class:"notification-message__icon-error","aria-hidden":"true"});case"warning":return t("scale-icon-alert-warning",{class:"notification-message__icon-information",color:"#AE461C","aria-hidden":"true"})}}render(){return this.opened?t(n,null,t("div",{role:"alert",style:{display:`${this.opened?"":"none"}`},part:this.getBasePartMap(),class:this.getCssClassMap(),tabindex:"0"},t("div",{part:"container",class:"notification-message__container"},this.handleIcons(),t("div",{part:"heading",class:"notification-message__heading"},t("slot",null," "),this.dismissible&&t("button",{part:"button-dismissable",type:"button",class:"notification-message__icon-close",onClick:()=>this.close(),tabindex:0,"aria-label":this.closeButtonLabel,title:this.closeButtonTitle,onKeyDown:e=>{e.key==="Enter"&&this.close()}},t("scale-icon-action-circle-close",null))),this.hasSlotText&&t("div",{part:"text",class:"notification-message__text"},t("slot",{name:"text"}))))):null}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(e){const o="notification-message",a=e==="basePart"?"":`${o}--`;return c(o,this.variant&&`${a}variant-${this.variant}`)}get hostElement(){return r(this)}};g.style=h;export{g as scale_notification_message};