import{r as l,h as t,H as n,g as c}from"./index-f8aaaabc.js";import{c as s}from"./index-713f92a5-09099cb6.js";const m=`:host{--spacing-left:calc(-1 * var(--telekom-spacing-unit-x2));--font-size-list-item:var(--telekom-typography-font-size-caption);--color-separator:var(--telekom-color-ui-regular);--spacing-y-item:var(--telekom-spacing-unit-x1);--spacing-x-item:var(--telekom-spacing-unit-x2);--color-link:var(--telekom-color-text-and-icon-additional);--radius-link:var(--telekom-radius-standard);--color-link-hover:var(--telekom-color-text-and-icon-primary-hovered);--color-link-active:var(--telekom-color-text-and-icon-primary-pressed);--focus-outline:var(--telekom-line-weight-highlight) solid
    var(--telekom-color-functional-focus-standard);--color-current:var(--telekom-color-text-and-icon-standard)}.breadcrumb{margin-left:var(--spacing-left)}.breadcrumb__list{display:flex;list-style:none;margin-top:0;padding-left:0;margin-bottom:0}.breadcrumb__list-item{display:inline-flex;font-size:var(--font-size-list-item);align-items:center}.breadcrumb__separator{display:flex;color:var(--color-separator)}.breadcrumb__item,.breadcrumb__link{padding:var(--spacing-y-item) var(--spacing-x-item)}.breadcrumb__link{text-decoration:none;color:var(--color-link);border-radius:var(--radius-link)}.breadcrumb__link:hover{color:var(--color-link-hover)}.breadcrumb__link:active{color:var(--color-link-active)}.breadcrumb__link:focus{outline:var(--focus-outline)}.breadcrumb__current{color:var(--color-current)}`,u=class{constructor(r){l(this,r),this.linksArray=[],this.separatorSlot=null}componentWillLoad(){this.linksArray.length===0&&this.setLinksArray(),this.separatorSlot=this.hostElement.querySelector('[slot="separator"]')}componentDidLoad(){const r=new MutationObserver(()=>{this.setLinksArray()});r.observe(this.hostElement,{attributes:!1,childList:!0,subtree:!0}),this.mo=r}disconnectedCallback(){this.mo&&this.mo.disconnect()}setLinksArray(){this.linksArray=Array.from(this.hostElement.children).filter(r=>r.slot==="")}render(){const r=e=>e===this.linksArray.length-1,o=e=>r(e)===!0?{"aria-current":"page"}:void 0;return t(n,null,this.styles&&t("style",null,this.styles),t("nav",{"aria-label":"Breadcrumb",class:this.getCssClassMap(),part:"base"},t("ol",{class:"breadcrumb__list",part:"list"},this.linksArray.map((e,a)=>{const i=this.separatorSlot!=null?t("span",{class:"breadcrumb__separator",part:"separator",innerHTML:this.separatorSlot.innerHTML}):t("span",{class:"breadcrumb__separator",part:"separator"},this.separator||t("scale-icon-navigation-right",{size:12}));return t("li",{class:"breadcrumb__list-item",part:"list-item"},e.href||e.tagName==="SCALE-LINK"?t("a",Object.assign({href:e.href,class:s(r(a)&&"breadcrumb__current","breadcrumb__link"),part:s(r(a)&&"current","link")},o(a)),e.textContent):t("span",{class:s(r(a)&&"breadcrumb__current","breadcrumb__item"),part:s(r(a)&&"current","item")},e.textContent),r(a)?null:i)}))))}getCssClassMap(){return s("breadcrumb")}get hostElement(){return c(this)}};u.style=m;export{u as scale_breadcrumb};