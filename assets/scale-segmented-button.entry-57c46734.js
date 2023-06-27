import{r,c as a,h as l,H as h,g as o}from"./index-17cfbcc7.js";import{c as d}from"./index-713f92a5-09099cb6.js";import{e as g}from"./utils-3cf81b34-7d965a95.js";const c=":host{--background-color:var(--telekom-color-ui-faint);--radius:var(--telekom-radius-standard);--height:32px;--height-medium:40px;--height-large:44px;display:flex;flex-direction:column}.segmented-button{background-color:var(--background-color);border:0;border-radius:var(--radius);padding:0 var(--telekom-spacing-unit-x05);width:fit-content;height:var(--height);display:inline-grid}.segmented-button--full-width{width:100%}.segmented-button--medium{height:var(--height-medium);padding:0 var(--telekom-spacing-unit-x05)}.segmented-button--large{height:var(--height-large);padding:0 var(--telekom-spacing-unit-x05)}.segmented-button--label{font-size:var(--telekom-typography-font-size-body);font-weight:var(--telekom-typography-font-weight-bold);margin-bottom:var(--telekom-spacing-unit-x2)}.segmented-button--helper-text{margin-top:var(--telekom-spacing-unit-x2)}",u=14,p=18,m=class{constructor(t){r(this,t),this.scaleChange=a(this,"scale-change",7),this.scaleChangeLegacy=a(this,"scaleChange",7),this.position=0,this.slottedSegments=0,this.status=[],this.size="small",this.multiSelect=!1,this.disabled=!1,this.fullWidth=!1,this.invalid=!1,this.helperText="Please select an option",this.ariaLabelTranslation="segment button with $slottedSegments",this.showHelperText=!1,this.getAdjacentSiblings=(e,s)=>{let i="";return s!==0&&e[s].selected&&e[s-1].selected&&(i="left"),s!==e.length-1&&e[s].selected&&e[s+1].selected&&(i=`${i?i+" right":"right"}`),i}}scaleClickHandler(t){let e;this.multiSelect?e=this.status.map(s=>t.detail.id===s.id?t.detail:Object.assign({},s)):t.detail.selected?e=this.status.map(s=>t.detail.id===s.id?t.detail:Object.assign(Object.assign({},s),{selected:!1})):e=this.status.map(s=>t.detail.id===s.id?t.detail:Object.assign({},s)),this.setState(e)}handlePropsChange(){this.propagatePropsToChildren()}propagatePropsToChildren(){this.getAllSegments().forEach(t=>{t.setAttribute("size",this.size),t.setAttribute("selected-index",this.selectedIndex.toString()),this.disabled&&t.setAttribute("disabled","disabled")})}componentDidLoad(){const t=[],e=this.getAllSegments();this.slottedSegments=e.length;const s=this.getLongestButtonWidth();e.forEach(i=>{this.position++,t.push({id:i.getAttribute("segment-id")||i.segmentId,selected:i.hasAttribute("selected")||i.selected}),i.setAttribute("position",this.position.toString()),i.setAttribute("aria-description-translation","$position $selected")}),this.fullWidth?this.container.style.display="flex":this.container.style.gridTemplateColumns=`repeat(${this.hostElement.children.length}, ${Math.ceil(s)}px)`,this.selectedIndex=this.getSelectedIndex(),this.propagatePropsToChildren(),this.position=0,this.status=t,this.setState(t)}componentWillUpdate(){this.selectedIndex=this.getSelectedIndex(),this.showHelperText=!1,this.invalid&&this.status.filter(t=>t.selected===!0).length<=0&&(this.showHelperText=!0)}getSelectedIndex(){return this.multiSelect?-1:this.getAllSegments().findIndex(s=>s.selected===!0)}getLongestButtonWidth(){let t=0;return Array.from(this.hostElement.children).forEach(e=>{const s=e.hasAttribute("selected"),i=e.hasAttribute("icon-only"),n=this.size==="small"?u:p;s||i?t=e.getBoundingClientRect().width>t?e.getBoundingClientRect().width:t:t=e.getBoundingClientRect().width+n>t?e.getBoundingClientRect().width+n:t}),t}setState(t){Array.from(this.hostElement.querySelectorAll("scale-segment")).forEach((s,i)=>{s.setAttribute("adjacent-siblings",this.getAdjacentSiblings(t,i)),s.setAttribute("selected",t[i].selected?"true":"false")}),this.status=t,g(this,"scaleChange",this.status)}getAllSegments(){return Array.from(this.hostElement.querySelectorAll("scale-segment"))}getAriaLabelTranslation(){return this.ariaLabelTranslation.replace(/\$slottedSegments/g,`${this.slottedSegments}`)}render(){return l(h,null,this.styles&&l("style",null,this.styles),this.label&&l("span",{class:"segmented-button--label"}," ",this.label," "),l("div",{class:this.getCssClassMap(),part:this.getBasePartMap(),"aria-label":this.getAriaLabelTranslation(),role:"group",ref:t=>this.container=t},l("slot",null)),this.showHelperText&&l("scale-helper-text",{class:"segmented-button--helper-text",helperText:this.helperText,variant:"danger"}))}getBasePartMap(){return this.getCssOrBasePartMap("basePart")}getCssClassMap(){return this.getCssOrBasePartMap("css")}getCssOrBasePartMap(t){const e=t==="basePart"?"":"segmented-button--";return d("segmented-button",this.size&&`${e}${this.size}`,this.fullWidth&&`${e}full-width`)}get hostElement(){return o(this)}static get watchers(){return{disabled:["handlePropsChange"],size:["handlePropsChange"],selectedIndex:["handlePropsChange"]}}};m.style=c;export{m as scale_segmented_button};