!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);window.addEventListener("message",(function(e){var t=e.data;if(e.origin===window.com_coremedia_pbe_studioUrl||"*"===window.com_coremedia_pbe_studioUrl){var n=void 0;try{n=JSON.parse(t)}catch(e){}if(n&&("placements.addHighlight"===n.type||"placements.removeHighlight"===n.type)){var i=n.body;r&&(r.disconnect(),r=null),"placements.addHighlight"===n.type?(r=new MutationObserver((function(e){e.forEach((function(e){"childList"===e.type&&Array.prototype.forEach.call(e.addedNodes,(function(e){if(e.nodeType===Node.ELEMENT_NODE){var t=l(e);t.length>0&&o(i,t)}}))}))})),o(i,l(document.body)),r.observe(document.body,{childList:!0,subtree:!0})):function(e){for(var t=0;t<e.length;t++){var n=e[t],r=n.classList,i=void 0,o=void 0;if(r.contains("cm-placement-highlighting-orange"))r.remove("cm-placement-highlighting-orange"),i="cm-placement-highlighting-orange-overlay",o="cm-placement-highlighting-orange-text";else if(r.contains("cm-placement-highlighting-green"))r.remove("cm-placement-highlighting-green"),i="cm-placement-highlighting-green-overlay",o="cm-placement-highlighting-green-text";else if(r.contains("cm-placement-highlighting-blue")){r.remove("cm-placement-highlighting-blue");var a=n.getElementsByClassName("cm-placement-border-left"),l=void 0;for(l=0;l<a.length;l++)n.removeChild(a[l]);for(a=n.getElementsByClassName("cm-placement-border-top"),l=0;l<a.length;l++)n.removeChild(a[l]);for(a=n.getElementsByClassName("cm-placement-border-right"),l=0;l<a.length;l++)n.removeChild(a[l]);for(a=n.getElementsByClassName("cm-placement-border-bottom"),l=0;l<a.length;l++)n.removeChild(a[l]);i="cm-placement-highlighting-blue-overlay"}var c=n.getElementsByClassName(i),s=void 0;for(s=0;s<c.length;s++)n.removeChild(c[s]);for(c=n.getElementsByClassName(o),s=0;s<c.length;s++)n.removeChild(c[s])}}(l(document.body))}}}));var r;function i(e){for(var t=[],n=e&&e.parentElement;n;)t.push(n),n=n.parentElement;return t}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n],i=r.getAttribute("data-cm-metadata"),o=JSON.parse(i),l=void 0,c=void 0,s=void 0;for(var p in o)if(o.hasOwnProperty(p)){var d=o[p].placementRequest;if(void 0!==d){l=Boolean(d[0].hasItems),c=Boolean(d[0].isInLayout),s=a(e,String(d[0].placementName));break}}var m=document.createElement("div");if(c)if(l){var h=document.createElement("div");h.classList.add("cm-placement-border-left"),r.appendChild(h);var g=document.createElement("div");g.classList.add("cm-placement-border-right"),r.appendChild(g);var u=document.createElement("div");u.classList.add("cm-placement-border-top"),r.appendChild(u);var f=document.createElement("div");f.classList.add("cm-placement-border-bottom"),r.appendChild(f),m.classList.add("cm-placement-highlighting-blue-overlay"),r.classList.add("cm-placement-highlighting-blue")}else{m.classList.add("cm-placement-highlighting-green-overlay"),r.classList.add("cm-placement-highlighting-green"),r.style.paddingLeft=m.width;var v=document.createElement("div"),b=document.createTextNode(a(e,"PlacementHighlighting_emptyPlacement"));v.appendChild(b),v.classList.add("cm-placement-highlighting-green-text"),r.appendChild(v)}else{r.classList.add("cm-placement-highlighting-orange"),m.classList.add("cm-placement-highlighting-orange-overlay");var y=document.createElement("div"),x=document.createTextNode(a(e,"PlacementHighlighting_notInLayout").replace("(PLACEMENTNAME)",s));y.appendChild(x),y.classList.add("cm-placement-highlighting-orange-text"),r.appendChild(y)}var E=document.createTextNode(s);m.appendChild(E),r.appendChild(m),l||(r.style.paddingLeft=m.offsetWidth+8+"px")}}function a(e,t){return e[t]}function l(e){var t,n,r="[data-cm-metadata*='placementRequest']",o=[];(function(e,t){return(Element.prototype.matches||Element.prototype.msMatchesSelector).call(e,t)})(e,r)&&o.push(e),t=e.querySelectorAll(r),n=function(e){o.push(e)},(NodeList.prototype.forEach||Array.prototype.forEach).call(t,n);for(var a=[],l=0;l<o.length;l++){for(var c=o[l],s=i(c),p=!1,d=0;d<s.length;d++){var m=s[d].getAttribute("data-cm-metadata");if(m){var h=JSON.parse(m);for(var g in h){if(h.hasOwnProperty(g))if(void 0!==h[g].placementRequest){p=!0;break}}}}p||a.push(c)}return a}},function(e,t,n){var r=n(3);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};n(5)(r,i);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=n(4)(!1)).push([e.i,'.cm-placement-highlighting-blue,\n.cm-placement-highlighting-green,\n.cm-placement-highlighting-orange {\n  position: relative;\n}\n\n/* Available Empty Placement: */\n.cm-placement-highlighting-green {\n  background: #E8F8AF;\n  border: 2px solid #2FAC66;\n  margin: 3px 0;\n}\n\n/* Unavailable Placement: */\n.cm-placement-highlighting-orange {\n  background: #FFFCCC;\n  border: 2px solid #ED8703;\n  margin: 3px 0;\n}\n\n/* Available Placement: */\n.cm-placement-highlighting-blue .cm-placement-border-left,\n.cm-placement-highlighting-blue .cm-placement-border-right,\n.cm-placement-highlighting-blue .cm-placement-border-top,\n.cm-placement-highlighting-blue .cm-placement-border-bottom {\n  background-color: #006CAE;\n}\n\n.cm-placement-border-left,\n.cm-placement-border-right,\n.cm-placement-border-top,\n.cm-placement-border-bottom {\n  position: absolute;\n  z-index: 10;\n  margin-bottom: 0;\n  margin-top: 0 !important;\n}\n\n.cm-placement-border-left,\n.cm-placement-border-right {\n  top: 0;\n  height: 100%;\n}\n\n.cm-placement-border-left {\n  left: 0;\n  width: 2px;\n}\n\n.cm-placement-border-right {\n  right: 0;\n  width: 2px;\n}\n\n.cm-placement-border-top,\n.cm-placement-border-bottom {\n  left: 0;\n  width: 100%;\n  height: 2px;\n}\n\n.cm-placement-border-top {\n  top: 0;\n}\n\n.cm-placement-border-bottom {\n  bottom: 0;\n}\n\n.cm-placement-highlighting-blue-overlay,\n.cm-placement-highlighting-green-overlay,\n.cm-placement-highlighting-orange-overlay {\n  position: absolute;\n  top: -1px;\n  left: -1px;\n  width: initial;\n  padding: 0 3px;\n  margin-top: 0 !important;\n  z-index: 10;\n  font-weight: bold;\n}\n\n.cm-placement-highlighting-blue-overlay {\n  top: 1px;\n  left: 1px;\n}\n\n.cm-placement-highlighting-green-overlay {\n  background: #E8F8AF;\n  border: 1px solid #2FAC66;\n}\n\n.cm-placement-highlighting-orange-overlay {\n  background: #FFFCCC;\n  border: 1px solid #ED8703;\n}\n\n.cm-placement-highlighting-blue-overlay {\n  background: #D6F0FF;\n  border: 1px solid #006CAE;\n}\n\n.cm-placement-highlighting-blue-overlay,\n.cm-placement-highlighting-green-overlay,\n.cm-placement-highlighting-orange-overlay,\n.cm-placement-highlighting-green,\n.cm-placement-highlighting-orange {\n  font-family: "Segoe UI", "Trebuchet MS", "Lucida Grande", Helvetica, sans-serif;\n  font-size: 12px;\n  line-height: 1.4;\n  text-align: left;\n  color: #4F4F4F;\n}\n\n.cm-placement-highlighting-green-text,\n.cm-placement-highlighting-orange-text {\n  margin-top: 0 !important;\n}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(c," */")),o=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(o).concat([i]).join("\n")}var a,l,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var c=[].concat(e[l]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){var r,i,o={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),l=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=l.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),s=null,p=0,d=[],m=n(6);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(y(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(y(r.parts[a],t));o[r.id]={id:r.id,refs:1,parts:l}}}}function g(e,t){for(var n=[],r={},i=0;i<e.length;i++){var o=e[i],a=t.base?o[0]+t.base:o[0],l={css:o[1],media:o[2],sourceMap:o[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function u(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=c(e.insertAt.before,n);n.insertBefore(t,i)}}function f(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function v(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return b(t,e.attrs),u(e,t),t}function b(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function y(e,t){var n,r,i,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var a=p++;n=s||(s=v(t)),r=C.bind(null,n,a,!1),i=C.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",b(t,e.attrs),u(e,t),t}(t),r=L.bind(null,n,t),i=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(t),r=w.bind(null,n),i=function(){f(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=g(e,t);return h(n,t),function(e){for(var r=[],i=0;i<n.length;i++){var a=n[i];(l=o[a.id]).refs--,r.push(l)}e&&h(g(e,t),t);for(i=0;i<r.length;i++){var l;if(0===(l=r[i]).refs){for(var c=0;c<l.parts.length;c++)l.parts[c]();delete o[l.id]}}}};var x,E=(x=[],function(e,t){return x[e]=t,x.filter(Boolean).join("\n")});function C(e,t,n,r){var i=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function w(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function L(e,t,n){var r=n.css,i=n.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=m(r)),i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var i,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?n+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")}))}}]);
//# sourceMappingURL=coremedia.preview.blueprint.js.map