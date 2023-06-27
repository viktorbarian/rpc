import{r as h,h as a}from"./index-17cfbcc7.js";import{f as v,a as k}from"./menu-utils-ee192675-8ad251d1.js";import{r as f}from"./render-icon-05777d0c-2e738ec6.js";const d=`/**
 * @license
 * Scale https://github.com/telekom/scale
 *
 * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG
 *
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/.
 */


scale-telekom-header-data-back-compat .user-menu-mobile {
  display: block;
}

scale-telekom-header-data-back-compat .user-menu-desktop {
  display: none;
}

scale-telekom-header-data-back-compat .user-menu-desktop scale-menu-flyout {
  display: flex;
}

scale-telekom-header-data-back-compat .user-menu-trigger {
  position: relative;
  left: 24px;
}

@media screen and (min-width: 640px) {
  scale-telekom-header-data-back-compat .user-menu-trigger {
    top: calc(var(--_spacing-bottom-slotted-bottom) + 8px);
  }
}

@media screen and (min-width: 1040px) {
  scale-telekom-header-data-back-compat .user-menu-mobile {
    display: none;
  }

  scale-telekom-header-data-back-compat .user-menu-desktop {
    display: block;
  }
}

dia screen and (--xl) {
  scale-telekom-header-data-back-compat .user-menu-trigger {
    top: calc(var(--_spacing-bottom-slotted-bottom) + 12px);
  }
}
`,t=r=>{let c;try{c=JSON.parse(r)}catch{c=r}return c},b=class{constructor(r){h(this,r)}render(){const{shortName:r="Login",badge:c,badgeLabel:m}=(t(this.userNavigation)||[]).find(({type:e})=>e==="userInfo")||{shortName:"Login"};return a("scale-telekom-header",{"app-name":this.appName,"app-name-link":this.appNameLink,"app-name-click":this.appNameClick,"logo-href":this.logoHref,"logo-title":this.logoTitle,"logo-hide-title":this.logoHideTitle},t(this.sectorNavigation)?a("scale-telekom-nav-list",{slot:"meta-nav-external",variant:"meta-nav-external",alignment:"left"},t(this.sectorNavigation).map(e=>a("scale-telekom-nav-item",null,a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:i=>{typeof e.onClick=="function"&&e.onClick(i)}},e.name)))):null,t(this.addonNavigation)?a("scale-telekom-nav-list",{slot:"meta-nav",variant:"meta-nav",alignment:"right"},t(this.addonNavigation).map(e=>a("scale-telekom-nav-item",null,a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:i=>{typeof e.onClick=="function"&&e.onClick(i)}},e.name)))):null,t(this.mainNavigation)?a("scale-telekom-nav-list",{variant:"main-nav",slot:"main-nav"},t(this.mainNavigation).map(e=>{const{selected:i}=v(t(this.mainNavigation),this.activeRouteId),u=i&&k(t(this.mainNavigation),i.id);return a("scale-telekom-nav-item",{active:(o=>u&&u.id===o)(e.id)},a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:o=>{typeof e.onClick=="function"&&e.onClick(o)}},a("span",null,e.name)),e.children?a("scale-telekom-nav-flyout",{hover:!0},a("scale-telekom-mega-menu",null,e.children.map(o=>a("scale-telekom-mega-menu-column",null,a("a",{href:o.href||"javascript:void(0);",target:o.target||"_self",onClick:l=>{typeof o.onClick=="function"&&o.onClick(l)},slot:"heading"},o.name),o.children?a("ul",null,o.children.map(l=>a("li",null,a("a",{href:l.href||"javascript:void(0);",target:l.target||"_self",onClick:n=>{typeof l.onClick=="function"&&l.onClick(n)}},l.name)))):null)))):null)})):null,!t(this.iconNavigation)&&!t(this.userNavigation)?null:a("scale-telekom-nav-list",{variant:"functions",slot:"functions",alignment:"right"},t(this.userNavigation).length>0&&a("scale-telekom-nav-item",{class:"user-menu-desktop"},a("a",{href:"javascript:void(0);",ref:e=>this.userMenuDesktopLink=e,onKeyDown:e=>{[" ","Enter","Escape"].includes(e.key)&&(e.preventDefault(),this.userMenuDesktopTrigger.click())},onClick:e=>{e.stopPropagation(),this.userMenuDesktopTrigger.click()}},a("scale-menu-flyout",{direction:"bottom-left"},c?a("scale-badge",{count:m,label:r,"label-visually-hidden":!0},a("scale-icon-user-file-user",null," ")):a("scale-icon-user-file-user",null," "),a("scale-menu-flyout-list",null,a("app-navigation-user-menu",{hide:()=>{this.userMenuDesktopTrigger.click(),this.userMenuDesktopLink.focus()},navigation:t(this.userNavigation)})),a("div",{slot:"trigger",class:"user-menu-trigger",ref:e=>this.userMenuDesktopTrigger=e})))),t(this.userNavigation).length>0&&a("scale-telekom-nav-item",{class:"user-menu-mobile"},a("button",{ref:e=>{this.userMenuMobileTrigger=e}},a("scale-badge",{count:m,label:r,"label-visually-hidden":!0},a("scale-icon-user-file-user",null," "))),a("scale-telekom-nav-flyout",{variant:"mobile"},a("scale-telekom-mobile-flyout-canvas",null,a("app-navigation-user-menu",{slot:"mobile-main-nav",hide:()=>{this.userMenuMobileTrigger.click(),this.userMenuMobileTrigger.focus()},navigation:t(this.userNavigation)})))),(t(this.iconNavigation)||[]).filter(({id:e})=>e!=="menu").map(e=>a("scale-telekom-nav-item",null,a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:i=>{typeof e.onClick=="function"&&e.onClick(i)}},e.badgeLabel?a("scale-badge",{count:e.badgeCount,label:e.badgeLabel,"label-visually-hidden":e.labelVisuallyHidden,"aria-label-translation":e.ariaLabelTranslation},f({tag:`scale-icon-${e.icon}`,attributes:{}})):f({tag:`scale-icon-${e.icon}`,attributes:{}})))),!t(this.mainNavigation)&&!t(this.sectorNavigation)&&!t(this.addonNavigation)?null:a("scale-telekom-nav-item",{"hide-on-desktop":!0},a("button",null,a("scale-badge",null,a("scale-icon-action-menu",null))),a("scale-telekom-nav-flyout",{variant:"mobile"},a("scale-telekom-mobile-flyout-canvas",{"app-name":this.appName,"app-name-link":this.appNameLink||"javascript:void(0);","app-name-click":e=>{typeof this.appNameClick=="function"&&this.appNameClick(e)}},t(this.mainNavigation)?a("scale-telekom-mobile-menu",{slot:"mobile-main-nav"},t(this.mainNavigation).map(e=>{const{selected:i,parent:u}=v(t(this.mainNavigation),this.activeRouteId),p=i&&k(t(this.mainNavigation),i.id),o=n=>p&&p.id===n&&n!==this.activeRouteId,l=n=>n===this.activeRouteId;return a("scale-telekom-mobile-menu-item",{open:o(e.id),active:l(e.id)},a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:n=>{typeof e.onClick=="function"&&e.onClick(n)}},e.name),e.children?e.children.map(n=>a("scale-telekom-mobile-menu-item",{slot:"children",active:l(n.id),open:u&&u.id===n.id},a("a",{href:n.href||"javascript:void(0);",target:n.target||"_self",onClick:s=>{typeof n.onClick=="function"&&n.onClick(s)}},n.name),n.children?n.children.map(s=>a("scale-telekom-mobile-menu-item",{slot:"children",active:l(s.id)},a("a",{href:s.href||"javascript:void(0);",target:s.target||"_self",onClick:g=>{typeof s.onClick=="function"&&s.onClick(g)}},s.name))):null)):null)})):null,t(this.sectorNavigation)?a("scale-telekom-nav-list",{variant:"meta-nav",slot:"mobile-meta-nav-external",alignment:"left"},t(this.sectorNavigation).map(e=>a("scale-telekom-nav-item",null,a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:i=>{typeof e.onClick=="function"&&e.onClick(i)}},e.name)))):null,t(this.addonNavigation)?a("scale-telekom-nav-list",{variant:"meta-nav",slot:"mobile-meta-nav",alignment:"left"},t(this.addonNavigation).map(e=>a("scale-telekom-nav-item",null,a("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:i=>{typeof e.onClick=="function"&&e.onClick(i)}},e.name)))):null)))))}};b.style=d;export{b as scale_telekom_header_data_back_compat};
