function c(e,o,n){return n={path:o,exports:{},require:function(s,t){return f()}},e(n,n.exports),n.exports}function f(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}var p=c(function(e){/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/(function(){var o={}.hasOwnProperty;function n(){for(var s=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var u=typeof r;if(u==="string"||u==="number")s.push(r);else if(Array.isArray(r)&&r.length){var i=n.apply(null,r);i&&s.push(i)}else if(u==="object")for(var a in r)o.call(r,a)&&r[a]&&s.push(a)}}return s.join(" ")}e.exports?(n.default=n,e.exports=n):window.classNames=n})()});export{p as c};
