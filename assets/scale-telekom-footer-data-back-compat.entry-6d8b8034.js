import{r as s,h as e}from"./index-f8aaaabc.js";const i=t=>{let o;try{o=JSON.parse(t)}catch{o=t}return o},n=class{constructor(t){s(this,t),this.type="standard",this.footerNavigation=[],this.copyright="© Deutsche Telekom AG"}render(){return e("scale-telekom-footer",{type:this.type},e("scale-telekom-footer-content",null,e("span",{slot:"notice"}," ",this.copyright," "),e("ul",{slot:"navigation"},i(this.footerNavigation).map(({name:t,id:o,href:a="javascript:void(0);",target:r="_self"})=>e("li",null,e("a",{href:a,id:o,target:r},t))))))}};export{n as scale_telekom_footer_data_back_compat};