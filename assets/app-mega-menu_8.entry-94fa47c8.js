import{r as s,h as e,g,c as v,H as p}from"./index-17cfbcc7.js";import{s as l}from"./status-note-0089e9c9-ce64fd2c.js";import{f as r,a as u}from"./menu-utils-ee192675-8ad251d1.js";import{r as m}from"./render-icon-05777d0c-2e738ec6.js";import{c as h}from"./index-713f92a5-09099cb6.js";const f=`app-mega-menu{--box-shadow:var(--telekom-shadow-top);--spacing-y:2.125rem;--spacing-right:var(--telekom-spacing-unit-x4);--spacing-left:var(--telekom-spacing-unit-x6);--background:var(--telekom-color-background-surface);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--font-size-row-title:var(--telekom-typography-font-size-body);--spacing-bottom-row-title:1.125rem;--font-weight-row-title:var(--telekom-typography-font-weight-extra-bold);--color-row-title:var(--telekom-color-text-and-icon-standard);--font-size-row-item:var(--telekom-typography-font-size-body);--line-height-row-item:var(--telekom-typography-line-spacing-loose);--font-weight-row-item:var(--telekom-typography-font-weight-medium);--color-row-item:var(--telekom-color-text-and-icon-standard);--spacing-bottom-row-item:var(--telekom-spacing-unit-x2)}.mega-menu{width:100%;position:absolute;top:calc(var(--header-brand-height) * -1);left:0;border-radius:0 0 var(--header-border-radius) var(--header-border-radius);padding-top:calc(var(--header-nav-height) + var(--header-brand-height));display:none;pointer-events:none;transition:none;box-shadow:var(--box-shadow)}.mega-menu__wrapper{padding:var(--spacing-y) var(--spacing-right) var(--spacing-y)
    var(--spacing-left);background:var(--background);pointer-events:none;border-radius:var(--header-border-radius)}.mega-menu__container{max-width:1168px;margin:0 auto;display:grid;grid-template-columns:repeat(5, minmax(min-content, 240px));list-style:none;padding-left:var(--telekom-spacing-unit-x8)}.mega-menu__row-title{cursor:default;font-size:var(--font-size-row-title);margin-bottom:var(--spacing-bottom-row-title);font-weight:var(--font-weight-row-title);color:var(--color-row-title)}.mega-menu__row-item{font-size:var(--font-size-row-item);line-height:var(--line-height-row-item);font-weight:var(--font-weight-row-item);color:var(--color-row-item);margin-bottom:var(--spacing-bottom-row-item);text-decoration:none;transition:color, border 0.15s ease-in-out;display:block;margin-bottom:7px}.mega-menu__row-item:hover,.mega-menu__row-item:hover span{color:var(--color-hover)}.mega-menu__row-item.active span{padding-bottom:2px;margin-bottom:-2px;display:inline-block;border-bottom:1px solid var(--color-selected)}.mega-menu__row-item.active{color:var(--color-selected)}.mega-menu__row-item.active:hover{color:var(--color-hover)}.mega-menu__row-item.active:hover span{color:var(--color-hover);border-bottom:1px solid var(--color-hover)}.mega-menu__row li{list-style:none}.mega-menu__row ul{padding-inline-start:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){.mega-menu{border:1px solid hsl(0, 0%, 100%)}}`,b=class{constructor(i){s(this,i),this.navigation=[]}componentWillLoad(){this.hasCustomBody=!!this.hostElement.querySelector('[slot="custom-body"]')}componentWillRender(){this.isActive!==void 0&&l({tag:"deprecated",message:'Property "isActive" is deprecated. Please use the "active" property!',type:"warn",source:this.hostElement})}render(){return e("div",{class:"mega-menu"},e("div",{class:"mega-menu__wrapper"},this.hasCustomBody?e("slot",{name:"custom-body"}):e("ul",{class:"mega-menu__container"},this.navigation.map(i=>e("li",{class:"mega-menu__row"},e("div",{class:"mega-menu__row-title"},i.name),e("ul",null,i.children&&i.children.length>0&&i.children.map(t=>e("li",null,e("a",{class:`mega-menu__row-item ${this.activeRouteId===t.id?"active":""}`,"aria-current":this.activeRouteId===t.id?"true":"false",href:t.href||"javascript:void(0);",tabIndex:this.active||this.isActive?0:-1,onClick:n=>{this.hide(),typeof t.onClick=="function"&&t.onClick(n)},onKeyDown:n=>{["Escape","Esc"].includes(n.key)&&this.hide()}},e("span",null,t.name),this.activeRouteId===t.id&&e("span",{class:"sr-only"},"active"))))))))))}get hostElement(){return g(this)}};b.style=f;const _=`app-navigation-main-mobile{--min-height:calc(100vh - 56px - 56px);--font-size:var(--telekom-typography-font-size-headline-3);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:3.333;--border-bottom:1px solid var(--telekom-color-ui-faint);--color:var(--telekom-color-text-and-icon-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size-child:var(--telekom-typography-font-size-headline-3);--line-height-child:2.5;--font-weight-child:var(--telekom-typography-font-weight-regular);--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);width:100%}.main-navigation-mobile{width:100%;position:relative}.main-navigation-mobile__main-menu{width:100%;list-style:none;padding:0;margin:0;min-height:var(--min-height)}.main-navigation-mobile__item{font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height)}.main-navigation-mobile__item--selected{border-right:2px solid var(--color-selected)}.main-navigation-mobile__item-link{text-decoration:none;color:var(--color);transition:var(--transition)}.main-navigation-mobile__item-link--selected{color:var(--color-selected);transition:var(--transition)}.main-navigation-mobile__item-link--selected svg{margin-right:-2px}.main-navigation-mobile__item-wrapper{box-sizing:border-box;width:calc(100% - 34px);display:flex;justify-content:space-between;margin-left:34px;border-bottom:var(--border-bottom);padding-right:34px;align-items:center}.main-navigation-mobile__child-menu{position:absolute;top:0;left:0;background:var(--telekom-color-background-surface);width:100%;min-height:var(--min-height)}.main-navigation-mobile__child-menu-current-item{line-height:var(--line-height)}.main-navigation-mobile__child-menu-current-item svg{margin-right:6px;margin-top:-4px}.main-navigation-mobile__child-menu-current{font-size:var(--telekom-typography-font-size-headline-3);font-weight:var(--telekom-typography-font-weight-extra-bold);color:var(--color-selected);text-decoration:none}.main-navigation-mobile__child-menu-current-wrapper{width:calc(100% - 34px);display:flex;align-items:center;border-bottom:var(--border-bottom);margin-left:34px}.main-navigation-mobile__child-menu-current app-icon{margin-right:var(--telekom-spacing-unit-x2)}.main-navigation-mobile__child-menu-current .icon-back{fill:var(--color-selected)}.main-navigation-mobile__child-menu-items{list-style:none;margin:0;padding:0}.main-navigation-mobile__child-menu-item-link{text-decoration:none;color:var(--color)}.main-navigation-mobile__child-menu-item-link.selected{color:var(--color-selected)}.main-navigation-mobile__child-menu-item-link.selected .main-navigation-mobile__child-menu-item-wrapper{border-right:2px solid var(--color-selected)}.main-navigation-mobile__child-menu-item-link.selected svg{margin-right:38px}.main-navigation-mobile__child-menu-item{font-size:var(--font-size-child);line-height:var(--line-height-child);font-weight:var(--font-weight-child)}.main-navigation-mobile__child-menu-item-wrapper{width:calc(100% - 64px);display:flex;justify-content:space-between;align-items:center;border-bottom:var(--border-bottom);margin-left:var(--telekom-spacing-unit-x16);box-sizing:border-box}.main-navigation-mobile__child-menu-item-wrapper svg{margin-right:var(--telekom-spacing-unit-x10)}`,d=i=>Array.isArray(i.children)&&i.children.length>0,x=class{constructor(i){s(this,i),this.closeMenu=v(this,"closeMenu",7),this.selected=void 0,this.parent=void 0}handleActiveRoute(i){this.selected=r(this.navigation,i,null).selected,this.parent=r(this.navigation,i).parent}componentWillLoad(){this.selected=r(this.navigation,this.activeRouteId,null).selected,this.parent=r(this.navigation,this.activeRouteId).parent}closeMenuHandler(){this.closeMenu.emit()}handlePrevSelected(i,t){i.preventDefault();const n=r(this.navigation,t.id).parent;this.selected=n,this.parent=n}handleSelect(i,t){const{selected:n,parent:o}=r(this.navigation,t.id);this.selected=n,this.parent=o,typeof t.onClick=="function"&&t.onClick(i),d(n)||this.closeMenuHandler()}childMenuPage(){const i=this.selected&&d(this.selected)?this.selected:this.parent,{selected:t,parent:n}=r(this.navigation,this.activeRouteId);if(!i)return e("div",null);const o=a=>t&&a.id===t.id||n&&n.id===a.id;return e("div",{class:"main-navigation-mobile__child-menu"},e("a",{class:"main-navigation-mobile__child-menu-current",href:i.href||"javascript:void(0);",onClick:a=>{this.handlePrevSelected(a,i)},tabIndex:0,onKeyDown:a=>{["Enter"," "].includes(a.key)&&(a.preventDefault(),this.handlePrevSelected(a,i),this.selected||this.mainNavigationWrapper.querySelector("a").focus()),["Escape","Esc"].includes(a.key)&&this.hide()}},e("div",{class:"main-navigation-mobile__child-menu-current-item"},e("div",{class:"main-navigation-mobile__child-menu-current-wrapper"},e("scale-icon-navigation-left",null),e("div",null,i.name)))),e("ul",{class:"main-navigation-mobile__child-menu-items",ref:a=>{this.childrenWrapper=a}},i.children.map(a=>e("li",{class:"main-navigation-mobile__child-menu-item"},e("a",{"aria-current":o(a)?"true":"false","aria-haspopup":d(a)?"true":"false",class:`main-navigation-mobile__child-menu-item-link ${o(a)?"selected":""}`,href:a.href||"javascript:void(0);",tabIndex:0,onClick:c=>{this.handleSelect(c,a)},onKeyDown:c=>{["Enter"," "].includes(c.key)&&(this.handleSelect(c,a),setTimeout(()=>{this.childrenWrapper.querySelector("a")&&this.childrenWrapper.querySelector("a").focus()})),["Escape","Esc"].includes(c.key)&&this.hide()}},e("div",{class:"main-navigation-mobile__child-menu-item-wrapper"},e("span",null,a.name),o(a)&&e("span",{class:"sr-only"},"active"),d(a)&&e("scale-icon-navigation-right",null)))))))}render(){const{selected:i}=r(this.navigation,this.activeRouteId),t=i&&u(this.navigation,i.id),n=o=>t&&t.id===o;return e("div",{class:"main-navigation-mobile"},this.childMenuPage(),e("ul",{class:"main-navigation-mobile__main-menu",ref:o=>{this.mainNavigationWrapper=o}},(this.navigation||[]).map(o=>e("li",{class:`main-navigation-mobile__item${n(o.id)?" main-navigation-mobile__item--selected":""}`},e("a",{"aria-current":n(o.id)?"true":"false","aria-haspopup":d(o)?"true":"false",class:`main-navigation-mobile__item-link${n(o.id)?" main-navigation-mobile__item-link--selected":""}`,href:o.href||"javascript:void(0);",onClick:a=>{this.handleSelect(a,o)},onKeyDown:a=>{["Enter"," "].includes(a.key)&&(this.handleSelect(a,o),setTimeout(()=>{this.childrenWrapper.querySelector("a")&&this.childrenWrapper.querySelector("a").focus()})),["Escape","Esc"].includes(a.key)&&this.hide()},tabIndex:this.selected?-1:0},e("div",{class:"main-navigation-mobile__item-wrapper"},e("span",null,o.name),n(o.id)&&e("span",{class:"sr-only"},"active"),d(o)&&e("scale-icon-navigation-right",null)))))))}static get watchers(){return{activeRouteId:["handleActiveRoute"]}}};x.style=_;const k=`app-navigation-sector-mobile{--border-bottom:1px solid var(--telekom-color-ui-subtle);--color:var(--telekom-color-text-and-icon-standard);--font-weight:var(--telekom-typography-font-weight-bold);--font-size:var(--telekom-typography-font-size-body);--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);--border-bottom-selected:1px solid var(--telekom-color-primary-standard);--color-selected:var(--telekom-color-text-and-icon-primary-standard);width:100%}.sector-navigation-mobile{display:flex;width:100%;list-style:none;padding:0;margin:0;border-bottom:var(--border-bottom)}.sector-navigation-mobile__item{width:100%}.sector-navigation-mobile__item-link{color:var(--color);text-decoration:none;font-weight:var(--font-weight);font-size:var(--font-size);width:100%;height:54px;display:flex;align-items:center;justify-content:center;transition:var(--transition)}.sector-navigation-mobile__item-link--selected{border-bottom:var(--border-bottom-selected);color:var(--color-selected);transition:var(--transition)}`,y=class{constructor(i){s(this,i),this.selected=this.navigation?this.navigation.find(({id:t})=>t===this.activeSectorId)||this.navigation[0]:{}}handleActiveSegment(i){this.selected=this.navigation.find(({id:t})=>t===i)||this.navigation[0]}handleSelected(i,t){this.selected=t,typeof t.onClick=="function"&&t.onClick(i)}render(){return e("ul",{class:"sector-navigation-mobile"},(this.navigation||[]).map(i=>e("li",{class:"sector-navigation-mobile__item"},e("a",{class:`sector-navigation-mobile__item-link${this.selected.id===i.id?" sector-navigation-mobile__item-link--selected":""}`,href:i.href||"javascript:void(0);",onClick:t=>this.handleSelected(t,i),onKeyDown:t=>{["Escape","Esc"].includes(t.key)&&this.hide()},"aria-current":this.selected.id===i.id?"true":"false"},i.name,this.selected.id===i.id&&e("span",{class:"sr-only"},"active")))))}static get watchers(){return{activeSectorId:["handleActiveSegment"]}}};y.style=k;const w=`:host{--border-width-divider:var(--telekom-spacing-unit-x025);--color-divider:var(--telekom-color-ui-subtle);--color-menu-item-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-menu-item-active:var(--telekom-color-text-and-icon-primary-pressed);--box-shadow-focus:0 0 0 var(--telekom-line-weight-highlight)
    var(--telekom-color-functional-focus-standard)}.app-navigation-user-menu{width:100%;position:relative;min-width:260px}.app-navigation-user-menu__divider{margin:var(--telekom-spacing-unit-x4) 0;border:0;border-top:var(--border-width-divider) solid var(--color-divider)}@media (min-width: 1040px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-unit-x3) var(--telekom-spacing-unit-x6) 0
      var(--telekom-spacing-unit-x6)}}@media (max-width: 1039px){.app-navigation-user-menu__user-info{margin:var(--telekom-spacing-unit-x6) var(--telekom-spacing-unit-x4) 0
      var(--telekom-spacing-unit-x4)}}.app-navigation-user-menu__user-info--name{font:var(--telekom-text-style-heading-5);margin-bottom:var(--telekom-spacing-unit-x1)}.app-navigation-user-menu__user-info--email{color:var(--telekom-color-text-and-icon-additional);font:var(--telekom-text-style-body)}.app-navigation-user-menu__item{display:flex;font:var(--telekom-text-style-heading-6);padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x4);border-radius:calc(var(--telekom-radius-small) / 2);color:var(--telekom-color-text-and-icon-standard);text-decoration:none}@media (min-width: 1040px){.app-navigation-user-menu__item{padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x6)}}.app-navigation-user-menu__item:hover{color:var(--color-menu-item-hover)}.app-navigation-user-menu__item:active{color:var(--color-menu-item-active)}.app-navigation-user-menu__item:focus{outline:none;box-shadow:var(--box-shadow-focus)}.app-navigation-user-menu__item--icon-prefix{margin-right:var(--telekom-spacing-unit-x2)}.app-navigation-user-menu__item--icon-suffix{margin-left:var(--telekom-spacing-unit-x2)}.app-navigation-user-menu__button{padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x4)}@media (min-width: 1040px){.app-navigation-user-menu__button{padding:var(--telekom-spacing-unit-x2) var(--telekom-spacing-unit-x6)}}@media (min-width: 1040px){.app-navigation-user-menu{padding-bottom:var(--telekom-spacing-unit-x1)}}`,M=class{constructor(i){s(this,i),this.closeMenu=v(this,"closeMenu",7)}render(){return e(p,null,e("div",{class:"app-navigation-user-menu"},this.navigation.map(i=>{if(i.type==="divider")return e("hr",{class:"app-navigation-user-menu__divider",part:"rule-horizontal"});if(i.type==="userInfo")return e("div",{class:"app-navigation-user-menu__user-info"},e("div",{class:"app-navigation-user-menu__user-info--name scl-font-variant-heading-4"},i.name),e("div",{class:"app-navigation-user-menu__user-info--email"},i.email));if(i.type==="item")return e("a",{href:i.href||"javascript:void(0);",target:i.target||"_self",tabindex:0,class:"app-navigation-user-menu__item",onClick:t=>{t.stopImmediatePropagation(),i.onClick&&i.onClick(t),this.hide()},onKeyDown:t=>{[" ","Enter"].includes(t.key)&&(t.stopImmediatePropagation(),t.preventDefault(),i.onClick&&i.onClick(t),this.hide())}},i.icon&&(!i.iconPosition||i.iconPosition==="prefix")?m({tag:`scale-icon-${i.icon}`,attributes:{class:"app-navigation-user-menu__item--icon-prefix"}}):null,i.name,i.icon&&i.iconPosition==="suffix"?m({tag:`scale-icon-${i.icon}`,attributes:{class:"app-navigation-user-menu__item--icon-suffix"}}):null);if(i.type==="button")return e("scale-button",{class:"app-navigation-user-menu__button",onClick:t=>{i.onClick&&i.onClick(t),this.hide()},onKeyDown:t=>{[" ","Enter"].includes(t.key)&&(t.stopImmediatePropagation(),t.preventDefault(),i.onClick&&i.onClick(t),this.hide())},href:i.href,variant:i.variant||"primary"},i.icon&&(!i.iconPosition||i.iconPosition==="prefix")?m({tag:`scale-icon-${i.icon}`,attributes:{}}):null,i.name,i.icon&&i.iconPosition==="suffix"?m({tag:`scale-icon-${i.icon}`,attributes:{}}):null)})))}get hostElement(){return g(this)}};M.style=w;const C=`scale-nav-icon{--spacing-mobile:var(--telekom-spacing-unit-x0) 6px;--font-size-mobile:var(--telekom-typography-font-size-badge);--line-height-mobile:var(--telekom-typography-line-spacing-tight);--font-weight-mobile:var(--telekom-typography-font-weight-bold);--spacing-desktop:0 0 0 var(--telekom-spacing-unit-x4);--font-size-desktop:var(--telekom-typography-font-size-small);--line-height-desktop:var(--telekom-typography-line-spacing-standard);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid
    var(--telekom-color-functional-focus-standard)}.meta-navigation__item-link{color:var(--color);display:flex;transition:all 0.2s ease-in-out;align-items:center;font-weight:var(--font-weight-mobile);text-decoration:none;height:var(--header-nav-height)}.meta-navigation__item--selected .meta-navigation__item-link{color:var(--color)}@media screen and (forced-colors: active), (-ms-high-contrast: active){.meta-navigation__item-link{color:var(--telekom-color-text-and-icon-inverted-standard)}}.meta-navigation__item-link:hover{color:var(--color-hover)}.meta-navigation__item-link:active{color:var(--color-active)}.meta-navigation__item-link:focus{outline:var(--focus-outline)}@media (max-width: 1039px){.meta-navigation__item-link{min-width:24px;height:auto}.meta-navigation__item-link{margin:var(--spacing-mobile);font-size:var(--font-size-mobile);line-height:var(--line-height-mobile);flex-direction:column}.meta-navigation__item.mobile-menu{width:50px;text-align:center;cursor:pointer}.meta-navigation__item-link .meta-navigation__item-link-icon{width:18px;height:18px;margin-bottom:4px}}@media (min-width: 1040px){.meta-navigation__item scale-menu-flyout{height:24px}.meta-navigation__item-link{margin:var(--spacing-desktop);font-size:var(--font-size-desktop);line-height:var(--line-height-desktop)}.meta-navigation__item-link .meta-navigation__item-link-icon{margin-right:6px}}`,z=class{constructor(i){s(this,i),this.href="javascript:void(0);",this.isMobileMenuOpen=!1,this.mobileMenuOpen=!1,this.badge=!1}componentWillRender(){this.isActive!==void 0&&l({tag:"deprecated",message:'Property "isActive" is deprecated. Please use the "active" property!',type:"warn",source:this.host}),this.isMobileMenuOpen!==!1&&l({tag:"deprecated",message:'Property "isMobileMenuOpen" is deprecated. Please use the "mobileMenuOpen" property!',type:"warn",source:this.host})}render(){return e("li",{class:this.getCssClassMap()},e("a",{class:"meta-navigation__item-link",ref:this.refMobileMenuToggle||this.refMobileUserMenuToggle||this.refUserMenuToggle,href:this.href,role:this.href==="javascript:void(0);"?"button":null,onClick:this.clickLink,onKeyDown:i=>{this.refMobileMenuToggle&&["Enter"," ","Escape","Esc"].includes(i.key)&&(i.preventDefault(),this.clickLink(i))}},this.badge||this.badgeLabel&&this.badge||this.badgeLabel?e("scale-notification-badge",{label:this.badgeLabel,type:"nav-icon"},m({tag:`scale-icon-${this.icon}`,attributes:{class:"meta-navigation__item-link-icon",selected:this.active||this.isActive}})):m({tag:`scale-icon-${this.icon}`,attributes:{class:"meta-navigation__item-link-icon",selected:this.active||this.isActive}}),e("span",{class:"meta-navigation__item-label"},e("slot",null))))}getCssClassMap(){return h("meta-navigation__item",(this.active||this.isActive||this.mobileMenuOpen||this.isMobileMenuOpen)&&"meta-navigation__item--selected",!!this.refMobileMenuToggle&&"mobile-menu")}get host(){return g(this)}};z.style=C;const E=`scale-nav-main{--spacing-x:var(--telekom-typography-font-size-body);--color:var(--telekom-color-text-and-icon-standard);--color-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-active:var(--telekom-color-text-and-icon-primary-hovered);--color-selected:var(--telekom-color-text-and-icon-primary-standard);--font-size:var(--telekom-typography-font-size-callout);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-tight);--focus-outline:var(--telekom-line-weight-highlight) solid
    var(--telekom-color-functional-focus-standard)}.main-navigation__item{height:100%;margin-left:var(--spacing-x);margin-right:var(--spacing-x)}.main-navigation__item:has(a[href]){cursor:pointer}.main-navigation__item-link-text{white-space:nowrap}.main-navigation__item.mega-menu--visible .mega-menu{display:block}.main-navigation__item.mega-menu--visible .mega-menu__wrapper{pointer-events:visible}.main-navigation__item .main-navigation__item-link{display:flex;height:100%;color:var(--color);font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:color, border 0.2s ease-in-out;align-items:center;text-decoration:none}.main-navigation__item:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item:hover .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);color:var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item-link:focus{outline:var(--focus-outline)}.main-navigation__item:active .main-navigation__item-link{color:var(--color-active)}.main-navigation__item:active .main-navigation__item-link-text{border-bottom:2px solid var(--color-active);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected .main-navigation__item-link{color:var(--color-selected)}.main-navigation__item.selected:hover .main-navigation__item-link{color:var(--color-hover)}.main-navigation__item.selected .main-navigation__item-link-text{border-bottom:2px solid var(--color-selected);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.main-navigation__item.selected:hover .main-navigation__item-link-text{color:var(--color-hover);border-bottom:2px solid var(--color-hover)}.main-navigation__item.mega-menu--visible .main-navigation__item-link-text{border-bottom:2px solid var(--color-hover);margin-bottom:-2px;height:calc(100% - 4px);display:flex;align-items:center}.sr-only{position:absolute;left:-10000px;overflow:hidden}`,P=class{constructor(i){s(this,i),this.isMegaMenuVisible=!1,this.megaMenuVisible=!1,this.href="javascript:void(0);",this.target="_self"}componentWillLoad(){this.hasPopup=this.popup||!!this.hostElement.querySelector("app-mega-menu")}componentWillRender(){this.isMegaMenuVisible!==!1&&l({tag:"deprecated",message:'Property "isMegaMenuVisible" is deprecated. Please use the "megaMenuVisible" property!',type:"warn",source:this.hostElement}),this.isActive!==void 0&&l({tag:"deprecated",message:'Property "isActive" is deprecated. Please use the "active" property!',type:"warn",source:this.hostElement})}render(){return e(p,null,e("li",{class:this.getCssClassMap()},e("a",{class:"main-navigation__item-link",href:this.href,target:this.target||"_self","aria-current":this.active||this.isActive?"true":"false","aria-haspopup":this.hasPopup?"true":"false",onClick:this.clickLink,id:this.innerId},e("span",{class:"main-navigation__item-link-text"},this.name),(this.active||this.isActive)&&e("span",{class:"sr-only"},"active")),e("slot",null)))}getCssClassMap(){return h("main-navigation__item",(this.megaMenuVisible||this.isMegaMenuVisible)&&"mega-menu--visible",(this.active||this.isActive)&&"selected")}get hostElement(){return g(this)}};P.style=E;const S=`scale-nav-segment{--transition:all 0.2s ease-in-out;--color:var(--telekom-color-text-and-icon-white-standard);--spacing-y:var(--telekom-spacing-unit-x1);--font-size:var(--telekom-typography-font-size-caption);--font-weight:var(--telekom-typography-font-weight-extra-bold);--line-height:var(--telekom-typography-line-spacing-extra-tight);--border-bottom:1px solid var(--telekom-color-text-and-icon-white-standard);--focus-outline:var(--telekom-line-weight-highlight) solid
    var(--telekom-color-functional-focus-standard)}.sr-only{position:absolute;left:-10000px;overflow:hidden}.segment-navigation__item{list-style:none}.segment-navigation__item-link{color:var(--color);padding:var(--spacing-y) 0;font-size:var(--font-size);font-weight:var(--font-weight);line-height:var(--line-height);transition:var(--transition);text-decoration:none}.segment-navigation__item-link:hover,.segment-navigation__item-link.active{border-bottom:var(--border-bottom);transition:var(--transition)}.segment-navigation__item-link:focus{outline:var(--focus-outline)}`,A=class{constructor(i){s(this,i),this.href="javascript:void(0);"}componentWillRender(){this.isActive!==void 0&&l({tag:"deprecated",message:'Property "isActive" is deprecated. Please use the "active" property!',type:"warn",source:this.host})}render(){return e("li",{class:this.getCssClassMap()},e("a",{class:h("segment-navigation__item-link",(this.active||this.isActive)&&"active"),href:this.href,onFocus:()=>{window.scrollTo({top:0})},"aria-current":this.active||this.isActive?"true":"false"},e("slot",null),(this.active||this.isActive)&&e("span",{class:"sr-only"},"active")))}getCssClassMap(){return h("segment-navigation__item")}get host(){return g(this)}};A.style=S;const N=`:host{--padding-type-text-after-badge-slot:0 0 0 12px;--padding-type-icon-after-badge-slot:0 0 0 7px;--background-color-circle:var(--telekom-color-primary-standard);--color-circle:var(--telekom-color-text-and-icon-inverted-standard);--font-size-circle:var(--telekom-typography-font-size-badge);--font-weight-circle:bold;--border-radius-circle:var(--telekom-radius-circle);--color-notification-badge-border-focus:var(
    --telekom-color-functional-focus-standard
  );--color-notification-badge-border-hover:var(
    --telekom-color-text-and-icon-primary-hovered
  );--line-width-notification-badge-border-focus:2px;--padding-notification-badge-border:8px 5px 0 5px;--margin-notification-badge-border:-8px -5px 0 -5px}.notification-badge-border{display:inline-block;border:var(--line-width-notification-badge-border-focus) solid transparent;padding:var(--padding-notification-badge-border);margin:var(--margin-notification-badge-border)}.notification-badge-border:hover{color:var(--color-notification-badge-border-hover);cursor:pointer}.notification-badge-border:focus{border:var(--line-width-notification-badge-border-focus) solid
    var(--color-notification-badge-border-focus);outline:none;padding:var(--padding-notification-badge-border);border-radius:3px}.notification-badge{display:flex;align-items:center}.notification-badge__wrapper{text-decoration:none;position:relative;display:inline-block;justify-content:center}.notification-badge--nav-icon .notification-badge__wrapper{margin-bottom:-5px}.notification-badge__circle{display:flex;position:absolute;font-size:var(--font-size-circle);font-weight:var(--font-weight-circle);border-radius:var(--border-radius-circle);background-color:var(--background-color-circle);color:var(--color-circle);align-items:center;justify-content:center}.notification-badge.notification-badge--label .notification-badge__circle{padding:0 2px}::slotted([slot='after-badge']){padding:var(--padding-type-icon-after-badge-slot)}.notification-badge.notification-badge--text ::slotted([slot='after-badge']){padding:var(--padding-type-text-after-badge-slot)}@media (min-width: 1040px){.notification-badge.notification-badge--icon .notification-badge__circle{top:-4px;right:-2px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--icon .notification-badge__circle{top:-8px;right:-5px;height:14px;min-width:10px}.notification-badge.notification-badge--nav-icon .notification-badge__circle{top:-5px;right:4px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--nav-icon .notification-badge__circle{top:-8px;right:1px;height:14px;min-width:10px}.notification-badge.notification-badge--text .notification-badge__circle{top:-5px;right:-10px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--text .notification-badge__circle{top:-10px;right:-15px;height:14px;min-width:10px}}@media (max-width: 1039px){.notification-badge.notification-badge--icon .notification-badge__circle{top:-4px;right:-1px;height:8px;min-width:8px}.notification-badge.notification-badge--label.notification-badge--icon .notification-badge__circle{top:-6px;right:-4px;height:14px;min-width:10px}.notification-badge.notification-badge--nav-icon .notification-badge__circle{top:0px;right:-1px;height:6px;min-width:6px}.notification-badge.notification-badge--label.notification-badge--nav-icon .notification-badge__circle{top:-3px;right:-4.5px;height:12px;min-width:8px}.notification-badge.notification-badge--text .notification-badge__circle{top:-4px;right:-10px;height:6px;min-width:6px}.notification-badge.notification-badge--label.notification-badge--text .notification-badge__circle{top:-6px;right:-15px;height:14px;min-width:10px}}`,I=class{constructor(i){s(this,i),this.maxCharacters=3,this.type="icon"}connectedCallback(){l({source:this.hostElement,tag:"beta"})}getBadgeLabel(){if(this.label){if(!isNaN(this.label)){let i=""+this.label;if(i.length>this.maxCharacters){const t=["","k","M","G","T","P","E"],n=Math.floor(Math.log10(Number(this.label))/3)||0;n>0&&(i=(Number(this.label)/Math.pow(10,n*3)).toFixed(1).replace(".0","")+t[n])}return i}return this.label}}getRender(){return e("div",{class:this.getCssClassMap()},e("span",{class:"notification-badge__wrapper"},e("slot",null),e("span",{class:"notification-badge__circle"},this.getBadgeLabel())),e("slot",{name:"after-badge"}))}render(){return e(p,null,this.type!=="nav-icon"?e("div",{class:"notification-badge-border",tabIndex:0,onClick:this.clickHandler},this.getRender()):this.getRender())}getCssClassMap(){return h("notification-badge",this.label&&"notification-badge--label",this.type&&`notification-badge--${this.type}`)}get hostElement(){return g(this)}};I.style=N;export{b as app_mega_menu,x as app_navigation_main_mobile,y as app_navigation_sector_mobile,M as app_navigation_user_menu,z as scale_nav_icon,P as scale_nav_main,A as scale_nav_segment,I as scale_notification_badge};
