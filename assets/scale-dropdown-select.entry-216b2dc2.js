import{r as u,c as d,h as i,H as m,g as v}from"./index-17cfbcc7.js";import{c as g}from"./index-713f92a5-09099cb6.js";import{s as x}from"./status-note-0089e9c9-ce64fd2c.js";import{c as f}from"./floating-ui.dom.esm-07191aca-2f3015f7.js";import{e as h,g as k}from"./utils-3cf81b34-7d965a95.js";const w=`:host{--font-weight:var(--telekom-typography-font-weight-bold);--height:var(--telekom-spacing-unit-x11);--color:var(--telekom-color-text-and-icon-standard);--color-disabled:var(--telekom-color-text-and-icon-disabled);--background-disabled:none;--background-hover:var(--telekom-color-ui-state-fill-hovered);--border:var(--telekom-spacing-unit-x025) solid
    var(--telekom-color-ui-border-standard);--border-color-hover:var(--telekom-color-ui-border-hovered);--border-color-focus:var(--telekom-color-ui-border-hovered);--border-color-disabled:var(--telekom-color-ui-border-disabled);--border-invalid:var(--telekom-spacing-unit-x05) solid
    var(--telekom-color-functional-danger-hovered);--focus-outline:var(--telekom-line-weight-highlight) solid
    var(--telekom-color-functional-focus-standard);--spacing-x:var(--telekom-spacing-unit-x3);--transition:all var(--telekom-motion-duration-transition)
    var(--telekom-motion-easing-standard);--radius:var(--telekom-radius-standard);--spacing-x-for-helper-text:var(--telekom-spacing-unit-x1);--transition-combobox:var(--transition);--font-size-combobox:var(--telekom-typography-font-size-body);--background-combobox:var(--telekom-color-ui-state-fill-standard);--spacing-combobox:18px var(--telekom-spacing-unit-x10) 5px
    calc(var(--spacing-x) - 1px);--spacing-y-meta:var(--telekom-spacing-unit-x1);--color-meta:var(--telekom-color-text-and-icon-standard);--height-icon:var(--telekom-spacing-unit-x6);--color-icon:var(--telekom-color-text-and-icon-standard);--color-icon-hover:var(--telekom-color-text-and-icon-standard);--color-icon-active:var(--telekom-color-text-and-icon-standard);--transition-icon:var(--transition);--color-label:var(--telekom-color-text-and-icon-additional);--z-index-label:var(--scl-z-index-10);--transition-label:var(--transition);--font-size-label:var(--telekom-typography-font-size-body);--font-weight-label:var(--telekom-typography-font-weight-medium);--font-size-label-focus:var(--telekom-typography-font-size-small);--font-weight-label-focus:var(--telekom-typography-font-weight-bold);--margin-top-label-focus:-1.5px;--line-height-label:var(--telekom-typography-font-size-body);--line-height-label-animated:var(--telekom-typography-font-size-small);--transform-label:translate(
    var(--spacing-x),
    calc((var(--telekom-spacing-unit-x11) - var(--font-size-label)) / 2)
  );--transform-label-animated:translate(
    var(--spacing-x),
    var(--telekom-spacing-unit-x2)
  );--background-listbox:var(--telekom-color-background-surface);--box-shadow-listbox:0 2px 4px 0 rgba(0, 0, 0, 0.1),
    0 4px 16px 0 rgba(0, 0, 0, 0.1);--max-height-listbox:300px;--z-index-listbox:99;--outline-color-option:var(--telekom-color-functional-focus-standard)}[part='combobox-container'] *,[part='combobox-container'] *::before,[part='combobox-container'] *::after{box-sizing:border-box}[part='combobox-container']{display:block;position:relative}[part='combobox']{width:100%;height:var(--height);margin:0;display:flex;align-items:center;outline:none;padding:var(--spacing-combobox);z-index:1;box-sizing:border-box;transition:var(--transition-combobox);font-family:inherit;font-size:var(--font-size-combobox);border-radius:var(--radius);border:var(--border);white-space:nowrap;text-overflow:ellipsis;appearance:none;-webkit-appearance:none;background-color:var(--background-combobox);color:var(--color)}[part~='select']:not([part~='disabled']) [part='combobox']:hover~[part='icon']{color:var(--color-icon-hover)}[part~='select']:not([part~='disabled']) [part='combobox']:active~[part='icon']{color:var(--color-icon-active)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:hover{border-color:var(--border-color-hover);background-color:var(--background-hover)}[part~='select']:not([part~='disabled'])[part~='invalid'] [part='combobox']:hover{background-color:var(--background-hover)}[part~='select']:not([part~='disabled']):not([part~='invalid']) [part='combobox']:focus{border-color:var(--border-color-focus)}[part~='select']:not([part~='disabled']):not([part~='steal-focus']) [part='combobox']:focus{outline:var(--focus-outline);outline-offset:1px}[part~='invalid'] [part='combobox']{border:var(--border-invalid)}[part~='transparent'] [part='combobox']{background-color:transparent}[part~='disabled'] [part='combobox']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='meta']{display:flex;justify-content:space-between;margin-top:var(--spacing-y-meta);color:var(--color-meta)}[part='icon']{top:50%;right:var(--spacing-x);position:absolute;transform:translateY(-50%);pointer-events:none;height:var(--height-icon);color:var(--color-icon);transition:var(--transition-icon)}[part~='disabled'] [part='icon']{color:var(--color-disabled)}[part='label']{top:0;left:0;color:var(--color-label);display:flex;z-index:var(--z-index-label);position:absolute;transition:var(--transition-label);pointer-events:none;font-size:var(--font-size-label);transform:var(--transform-label);font-weight:var(--font-weight-label);line-height:var(--line-height-label)}[part~='animated'] [part='label']{margin-top:var(--margin-top-label-focus);transform:var(--transform-label-animated);font-size:var(--font-size-label-focus);font-weight:var(--font-weight-label-focus);line-height:var(--line-height-label-animated)}[part~='disabled'] [part='label']{cursor:not-allowed;border-color:var(--border-color-disabled);color:var(--color-disabled);background:var(--background-disabled)}[part='listbox']{position:relative}[part='listbox-scroll-container']{max-height:var(--max-height-listbox);overflow-y:auto}[part='listbox-pad']{background:var(--background-listbox);box-shadow:var(--box-shadow-listbox);border-radius:var(--radius);padding:var(--radius) 0;margin-top:var(--telekom-line-weight-highlight);left:0;position:absolute;top:100%;width:100%;z-index:var(--z-index-listbox);display:none}[part~='open'] [part='listbox-pad']{display:block}[part~='transparent'] [part='listbox']{background-color:transparent}[part~='option']{color:var(--color)}[part~='option']:hover{background-color:var(--background-hover)}[part~='option'][part~='current']{outline:3px solid var(--outline-color-option);outline-offset:-3px}[part~='option'][aria-selected='true']{padding-right:30px;position:relative}[part~='option'][aria-selected='true'] scale-icon-action-success{position:absolute;right:16px;top:12px}[part~='option'] scale-dropdown-select-item::part(base){padding:12px}[part~='has-helper-text'] [part~='combobox-container']{margin-bottom:var(--spacing-x-for-helper-text)}`;var r;(function(e){e.Close="Close",e.CloseSelect="CloseSelect",e.First="First",e.Last="Last",e.Next="Next",e.Open="Open",e.PageDown="PageDown",e.PageUp="PageUp",e.Previous="Previous",e.Select="Select",e.Type="Type"})(r||(r={}));const y=e=>typeof e.value=="string",E=e=>y(e)?e.value:null,l=e=>Array.from(e.children).map(t=>{var o;return{label:t.textContent.trim(),value:(o=t.getAttribute("value"))!==null&&o!==void 0?o:E(t),ItemElement:i("span",{innerHTML:t.outerHTML})}});function I(e,t){const{key:o,altKey:a,ctrlKey:n,metaKey:s}=e;if(!t&&["ArrowDown","ArrowUp","Enter"," "].includes(o))return r.Open;if(o==="Home")return r.First;if(o==="End")return r.Last;if(["Backspace","Clear"].includes(o)||o.length===1&&o!==" "&&!a&&!n&&!s)return r.Type;if(t){if(o==="ArrowUp"&&a)return r.CloseSelect;if(o==="ArrowDown"&&!a)return r.Next;switch(o){case"ArrowUp":return r.Previous;case"PageUp":return r.PageUp;case"PageDown":return r.PageDown;case"Escape":return r.Close;case"Enter":return r.CloseSelect;case" ":return r.CloseSelect}}}function C(e,t,o){switch(o){case r.First:return 0;case r.Last:return t;case r.Previous:return Math.max(0,e-1);case r.Next:return Math.min(t,e+1);case r.PageUp:return Math.max(0,e-10);case r.PageDown:return Math.min(t,e+10);default:return e}}function b(e=[],t){return e.filter(o=>o.toLowerCase().indexOf(t.toLowerCase())===0)}function O(e,t,o=0){const a=[...e.slice(o),...e.slice(0,o)],n=b(a,t)[0],s=c=>c.every(p=>p===c[0]);if(n)return e.indexOf(n);if(s(t.split(""))){const c=b(a,t[0]);return e.indexOf(c[0])}return-1}function P(e,t){const{offsetHeight:o,offsetTop:a}=e,{offsetHeight:n,scrollTop:s}=t,c=a<s;if(a+o>s+n)return t.scrollTop=a+o-n;if(c)return t.scrollTop=a}function T(e){return e&&e.clientHeight<e.scrollHeight}function z(e){const t=e.getBoundingClientRect(),o={top:0,left:0,right:window.innerWidth||document.documentElement.clientWidth,bottom:window.innerHeight||document.documentElement.clientHeight};return t.top>=o.top&&t.left>=o.left&&t.bottom<=o.bottom&&t.right<=o.right}const S=class{constructor(e){u(this,e),this.scaleChange=d(this,"scale-change",7),this.scaleFocus=d(this,"scale-focus",7),this.scaleBlur=d(this,"scale-blur",7),this.scaleKeydown=d(this,"scale-keydown",7),this.comboboxId="combobox",this.helperText="",this.invalid=!1,this.variant="informational",this.options="",this.open=!1,this.currentIndex=-1,this.queryString="",this.queryTimeout=null,this.ignoreBlur=!1,this.hasFocus=!1,this.selectOption=t=>{this.currentIndex=t,this.value=l(this.hostElement)[t].value,h(this,"scaleChange",{value:this.value})},this.handleKeyDown=t=>{const{key:o}=t,a=l(this.hostElement).length-1,n=I(t,this.open);switch(h(this,"scaleKeydown",t),n){case r.Last:case r.First:this.setOpen(!0);case r.Next:case r.Previous:case r.PageUp:case r.PageDown:return t.preventDefault(),this.handleOptionChange(C(this.currentIndex,a,n));case r.CloseSelect:t.preventDefault(),this.selectOption(this.currentIndex);case r.Close:return t.preventDefault(),this.setOpen(!1);case r.Type:return this.buildQueryString(o);case r.Open:return t.preventDefault(),this.setOpen(!0)}},this.handleBlur=()=>{if(this.ignoreBlur){this.ignoreBlur=!1;return}this.setOpen(!1),h(this,"scaleBlur")},this.handleFocus=()=>{h(this,"scaleFocus")},this.handleClick=()=>{this.setOpen(!this.open);const t=l(this.hostElement).findIndex(({value:o})=>o===this.value);t>-1&&setTimeout(()=>{this.bringIntoView(t)})}}valueChange(e){this.currentIndex=l(this.hostElement).findIndex(({value:t})=>t===e)}connectedCallback(){x({source:this.hostElement,tag:"beta"}),this.currentIndex=l(this.hostElement).findIndex(({value:e})=>e===this.value)||-1}componentDidRender(){this.open&&f(this.comboEl,this.listboxPadEl,{placement:"bottom"}).then(({x:e,y:t})=>{Object.assign(this.listboxPadEl.style,{left:`${e}px`,top:`${t}px`})})}handleOptionChange(e){this.currentIndex=e,this.bringIntoView(e)}bringIntoView(e){const t=this.listboxEl.querySelectorAll("[role=option]");T(this.listboxEl)&&P(t[e],this.listboxEl),z(t[e])||t[e].scrollIntoView({behavior:"smooth",block:"nearest"})}setOpen(e){this.open!==e&&(this.disabled||(this.open=e,this.open||(this.comboEl.scrollIntoView({behavior:"smooth",block:"nearest"}),this.comboEl.focus(),this.currentIndex=-1)))}handleOptionClick(e,t){e.stopPropagation(),this.handleOptionChange(t),this.selectOption(t),this.setOpen(!1)}getSearchString(e){return typeof this.queryTimeout=="number"&&window.clearTimeout(this.queryTimeout),this.queryTimeout=window.setTimeout(()=>{this.queryString=""},500),this.queryString+=e,this.queryString}buildQueryString(e){this.setOpen(!0);const t=this.getSearchString(e),o=O(l(this.hostElement).map(({label:a})=>a),t,this.currentIndex+1);o>=0?this.handleOptionChange(o):(window.clearTimeout(this.queryTimeout),this.queryString="")}render(){const e=(l(this.hostElement).find(({value:a})=>a===this.value)||{}).ItemElement,o={"aria-describedBy":`helper-message-${k()}`};return i(m,null,i("div",{part:this.getBasePartMap()},i("div",{part:"combobox-container"},i("label",{id:`${this.comboboxId}-label`,part:"label"},this.label),i("div",Object.assign({ref:a=>this.comboEl=a,"aria-controls":`${this.comboboxId}-listbox`,"aria-expanded":this.open?"true":"false","aria-haspopup":"listbox","aria-labelledby":`${this.comboboxId}-label`,id:this.comboboxId,part:"combobox",role:"combobox",tabindex:"0",onBlur:this.handleBlur,onFocus:this.handleFocus,onClick:this.handleClick,onKeyDown:this.handleKeyDown},this.open?{"aria-activedescendant":(l(this.hostElement)[this.currentIndex]||{}).value}:{},this.helperText?o:{},this.invalid?{"aria-invalid":"true"}:{}),e),i("div",{part:"listbox-pad",ref:a=>this.listboxPadEl=a},i("div",{part:"listbox-scroll-container"},i("div",{ref:a=>this.listboxEl=a,part:"listbox",role:"listbox",id:`${this.comboboxId}-listbox`,"aria-labelledby":`${this.comboboxId}-label`,tabindex:"-1"},l(this.hostElement).map(({value:a,ItemElement:n},s)=>i("div",Object.assign({role:"option",part:`option${s===this.currentIndex?" current":""}`,id:a,onClick:c=>{this.handleOptionClick(c,s)},onMouseDown:()=>{this.ignoreBlur=!0}},a===this.value?{"aria-selected":"true"}:{}),n,a===this.value?i("scale-icon-action-success",{size:16}):null))))),i("div",{part:"icon"},this.open?i("scale-icon-navigation-collapse-up",{decorative:!0}):i("scale-icon-navigation-collapse-down",{decorative:!0}))),this.helperText&&i("scale-helper-text",{helperText:this.helperText,variant:this.invalid?"danger":this.variant})))}getBasePartMap(){const e=this.value!=null&&this.value!=="";return g("select",this.open&&"open",this.disabled&&"disabled",this.readonly&&"readonly",this.transparent&&"transparent",this.invalid&&"invalid",this.currentIndex>-1&&"steal-focus",e&&"animated",this.helperText&&"has-helper-text")}get hostElement(){return v(this)}static get watchers(){return{value:["valueChange"]}}};S.style=w;export{S as scale_dropdown_select};
