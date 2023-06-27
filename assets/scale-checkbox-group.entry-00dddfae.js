import{r as d,h as i,H as p,g as u}from"./index-17cfbcc7.js";import{s as r}from"./status-note-0089e9c9-ce64fd2c.js";const b=":host,.checkbox-group{--spacing-left-container:var(--telekom-spacing-unit-x8);--spacing-left-checkbox:var(--telekom-spacing-unit-x2);--spacing-top-slotted-item:var(--telekom-spacing-unit-x3)}.checkbox-group{display:inline-flex;flex-direction:column;position:relative}.checkbox-group [part='fieldset']{display:flex;flex-direction:column;border:0;padding:0;margin:0;margin-left:var(--spacing-left-container)}.checkbox-group [part='parent-checkbox']{line-height:var(--telekom-typography-line-spacing-standard);--font-weight-label:var(--telekom-typography-font-weight-bold)}.checkbox-group legend{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.checkbox-group scale-checkbox{margin-top:var(--spacing-top-slotted-item)}",x=class{constructor(e){d(this,e),this.label="",this.status="",this.invalid=!1,this.value="",this.selectText="Select all",this.unselectText="Unselect all"}handleCheckboxChange(e){const s=e.composedPath()[0],{tagName:t,checked:o}=s;t.toLowerCase()==="scale-checkbox"&&(s!==this.groupNode?this.updateParentCheckboxState():(this.updateChildrenCheckboxStates(o),this.updateParentCheckboxState()))}componentDidRender(){this.status!==""&&r({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.host}),this.host.hasAttribute("aria-label")&&r({tag:"deprecated",message:'Property "ariaLabel" is deprecated. Please use the "ariaLabelCheckboxGroup" property!',type:"warn",source:this.host})}getChildNodes(){return Array.from(this.host.querySelector("fieldset").querySelectorAll("scale-checkbox"))}updateChildrenCheckboxStates(e){this.getChildNodes().filter(t=>!t.disabled).forEach(t=>{e!==void 0&&(t.checked=e,t.indeterminate=!1)})}updateParentCheckboxState(){const e=this.getChildNodes(),s=e==null?void 0:e.map(a=>a.checked),t=e==null?void 0:e.map(a=>a.indeterminate),o=e==null?void 0:e.map(a=>a.disabled),l=s.every(Boolean),c=s.some(Boolean),h=t.some(Boolean),n=o.every(Boolean);this.checked=l||c,this.indeterminate=h||c&&!l,this.disabled=n,this.actionText=l?this.unselectText:this.selectText}render(){return i(p,{class:"checkbox-group"},i("scale-checkbox",{ref:e=>this.groupNode=e,name:this.name,label:this.label,ariaLabelCheckbox:`${this.ariaLabelCheckboxGroup||this.label} - ${this.actionText}`,helperText:this.helperText,status:this.status,invalid:this.invalid,value:this.value,inputId:this.inputId,checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,part:"parent-checkbox"}),i("fieldset",{part:"fieldset"},i("legend",null,this.ariaLabelCheckboxGroup||this.label),i("slot",null)))}componentDidLoad(){this.updateParentCheckboxState()}get host(){return u(this)}};x.style=b;export{x as scale_checkbox_group};