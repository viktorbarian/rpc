import{r as d,c as l,h as r,H as h,g as p}from"./index-17cfbcc7.js";import{e as n}from"./utils-3cf81b34-7d965a95.js";import{s as o}from"./status-note-0089e9c9-ce64fd2c.js";const g=`:host{--stars-color:var(--telekom-color-text-and-icon-primary-standard);--stars-hover-color:var(--telekom-color-text-and-icon-primary-hovered);--stars-active-color:var(--telekom-color-text-and-icon-primary-pressed);--stars-inactive-color:transparent;--stars-placeholder-color:var(--telekom-color-text-and-icon-standard);--stars-placeholder-revert-color:var(--telekom-color-ui-regular);--stars-disabled-color:var(--telekom-color-text-and-icon-disabled);--stars-spacing:var(--telekom-spacing-unit-x05);--stars-transition:color var(--telekom-motion-duration-immediate);--stars-size:24px;--font-weight-medium:var(--telekom-typography-font-weight-medium);--font-size-small:var(--telekom-typography-font-size-small);--infotext-color:var(--telekom-color-text-and-icon-additional);--focus-outline:var(--telekom-line-weight-highlight) solid
    var(--telekom-color-functional-focus-standard)}:host([star-size='small']){--stars-size:16px;font-size:var(--font-size-small)}[part='container']{display:inline-flex;flex-direction:column;position:relative}[part='range-slider']{position:absolute;border:0;margin:0;left:calc(-1 * var(--stars-size));bottom:0;z-index:2;width:calc(100% + var(--stars-size) * 2);opacity:0;height:var(--stars-size)}@media (hover: hover){[part='range-slider']{clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;white-space:nowrap;width:1px}}input[type='range']::-webkit-slider-thumb{-webkit-appearance:none;border:0;height:var(--stars-size);width:var(--stars-size);border-radius:50%;background:#ffffff;cursor:pointer;margin-left:0px;margin-top:0}[part='content']{display:flex}[part='wrapper']{display:inline-flex;border-radius:var(--telekom-spacing-unit-x1);margin-left:calc(-1 * var(--stars-spacing))}[part='wrapper']:hover [part='star'] [part='selected-star']{opacity:1}[part='star']>*{pointer-events:none}[part='label']{margin-bottom:var(--telekom-spacing-unit-x2);white-space:nowrap}[part='infotext']{margin-left:var(--telekom-spacing-unit-x2);display:flex;align-items:center;font-weight:var(--font-weight-medium);color:var(--infotext-color);white-space:nowrap}[part='star']{--decimal-width:100%;display:inline-flex;position:relative;color:var(--stars-color);cursor:pointer;padding:0 var(--stars-spacing)}[part='placeholder-star']{display:inline-flex;color:var(--stars-placeholder-color);transition:var(--stars-transition)}[part='selected-star']{color:var(--stars-inactive-color);margin-left:0px;position:relative;transition:var(--stars-transition)}.icon-clip{overflow:hidden;position:absolute;width:var(--decimal-width);height:100%}[part='star'][data-half]{--decimal-width:calc(50% - var(--stars-spacing))}[part='star'][data-selected]{--stars-placeholder-color:transparent}[part='star'][data-half]{--stars-placeholder-color:currentColor}[part='star'][data-selected] [part='selected-star']{color:var(--stars-color)}@media (hover: hover){[part='wrapper']:hover{--stars-color:var(--stars-hover-color);--stars-placeholder-color:transparent}[part='wrapper']:hover [part='star']{--decimal-width:100%}[part='wrapper']:hover [part='star'][data-half]{--stars-placeholder-color:transparent}[part='wrapper']:hover [part='selected-star']{color:var(--stars-color)}[part='star']:hover~[part='star'] [part='selected-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{--stars-placeholder-color:var(--telekom-color-text-and-icon-standard)}}[part='wrapper']:active{--stars-color:var(--stars-active-color)}:host(:focus-within) [part='wrapper'],[part='wrapper']:focus{outline:var(--focus-outline)}:host(.readonly) [part='wrapper']{--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.disabled) [part='label'],:host(.disabled) [part='infotext']{color:var(--stars-disabled-color)}:host(.disabled) [part='wrapper']{--stars-color:var(--stars-disabled-color);--stars-placeholder-color:var(--stars-disabled-color);pointer-events:none}:host(.hideLabel) [part='label']{visibility:hidden;height:0;margin-bottom:0}@media screen and (forced-colors: active), (-ms-high-contrast: active){[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='star'][data-selected] [part='placeholder-star']{color:var(--stars-inactive-color)}[part='star']:hover~[part='star'] [part='placeholder-star']{color:var(--telekom-color-text-and-icon-inverted-standard)}[part='wrapper']:hover [part='placeholder-star']{color:var(--stars-inactive-color)}}`,v={small:16,large:24};let m=0;const u=class{constructor(e){d(this,e),this.scaleChange=l(this,"scale-change",7),this.scaleChangeLegacy=l(this,"scaleChange",7),this.ratingStarId=`scale-rating-star-${m++}`,this.starSize="large",this.size="large",this.minRating=0,this.maxRating=5,this.max=5,this.rating=0,this.readonly=!1,this.disabled=!1,this.ariaLabelTranslation="$rating out of $max stars",this.label="Rating",this.hideLabel=!1,this.handleInput=s=>{const a=s.composedPath()[0],t=Number(a.value);switch(!0){case t<this.minRating:a.value=this.minRating.toString();break;case t>this.max:a.value=this.max.toString();break}this.rating=Number(a.value),n(this,"scaleChange",{value:this.rating})},this.handleStarClick=s=>{const a=s.composedPath()[0],t=Number(a.dataset.value);this.host.shadowRoot.querySelector("input").focus(),t===1&&this.rating===1&&this.minRating===0?this.rating=this.minRating:this.rating=t,n(this,"scaleChange",{value:this.rating})}}componentWillRender(){this.maxRating!==5&&(this.max=this.maxRating,o({tag:"deprecated",message:'Property "maxRating" is deprecated. Please use the "max" property!',type:"warn",source:this.host})),this.minRating!==0&&o({tag:"deprecated",message:'Property "minRating" is deprecated and will be deleted upon the next release',type:"warn",source:this.host}),this.starSize!=="large"&&(this.size=this.starSize,o({tag:"deprecated",message:'Property "starSize" is deprecated. Please use the "size" property!',type:"warn",source:this.host})),this.rating=Math.round(this.rating)}getRatingText(){return this.ariaLabelTranslation.replace(/\$rating/g,`${this.rating}`).replace(/\$maxRating/g,`${this.max}`).replace(/\$max/g,`${this.max}`)}renderStar(e,s=!1,a){const t=v[this.size],i=a%1===0,c=Math.ceil(a)===e;return r("div",{part:"star","data-value":e,"data-selected":s,"data-half":c&&!i,onMouseUp:!this.readonly&&this.handleStarClick,style:{zIndex:e===1?"5":"auto"}},r("scale-icon-action-favorite",{size:t,part:"placeholder-star"}),r("div",{class:"icon-clip"},r("scale-icon-action-favorite",{size:t,selected:!0,part:"selected-star"})))}renderRating(){const e=[],s=Math.ceil(this.rating),a=this.max;for(let t=1;t<=a;t++){const i=s>=t;e.push(this.renderStar(t,i,this.rating))}return e}render(){return r(h,{class:{hideLabel:this.hideLabel,disabled:this.disabled,readonly:this.readonly}},r("div",{part:"container"},r("label",{id:`${this.ratingStarId}-label`,part:"label",htmlFor:this.ratingStarId},this.label),r("div",{part:"content"},r("div",{part:"wrapper","aria-valuetext":this.getRatingText(),"aria-orientation":"horizontal","aria-describedby":this.infoText?`${this.ratingStarId}-infotext`:!1},r("input",{disabled:this.disabled,readonly:this.readonly,part:"range-slider",type:this.readonly?"number":"range",id:this.ratingStarId,min:0,max:this.max+1,value:this.rating,step:"1","aria-labelledby":`${this.ratingStarId}-label`,"aria-readonly":this.readonly?"true":!1,"aria-valuemin":this.minRating,"aria-valuemax":this.max,"aria-valuenow":this.rating,"aria-valuetext":this.getRatingText(),onInput:!this.readonly&&this.handleInput}),this.renderRating()),this.infoText&&r("div",{part:"infotext",id:`${this.ratingStarId}-infotext`},this.infoText))))}get host(){return p(this)}};u.style=g;export{u as scale_rating_stars};
