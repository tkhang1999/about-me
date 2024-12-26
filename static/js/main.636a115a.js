/*! For license information please see main.636a115a.js.LICENSE.txt */
(()=>{var e={219:(e,t,n)=>{"use strict";var r=n(86),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function s(e){return r.isMemo(e)?o:i[e.$$typeof]||a}i[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,f=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(m){var a=p(n);a&&a!==m&&e(t,a,r)}var o=c(n);f&&(o=o.concat(f(n)));for(var i=s(t),h=s(n),g=0;g<o.length;++g){var v=o[g];if(!l[v]&&(!r||!r[v])&&(!h||!h[v])&&(!i||!i[v])){var y=d(n,v);try{u(t,v,y)}catch(b){}}}}return t}},497:(e,t,n)=>{"use strict";var r=n(218);function a(){}function l(){}l.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,l,o){if(o!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:a};return n.PropTypes=n,n}},173:(e,t,n)=>{e.exports=n(497)()},218:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},479:(e,t)=>{"use strict";var n,r=Symbol.for("react.element"),a=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.server_context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),g=Symbol.for("react.offscreen");function v(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case l:case i:case o:case d:case p:return e;default:switch(e=e&&e.$$typeof){case c:case u:case f:case h:case m:case s:return e;default:return t}}case a:return t}}}n=Symbol.for("react.module.reference"),t.isFragment=function(e){return v(e)===l}},163:(e,t,n)=>{"use strict";e.exports=n(479)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,i={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(i[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),f=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e,t,n,r,a,l,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){g[e]=new h(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];g[t]=new h(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){g[e]=new h(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){g[e]=new h(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){g[e]=new h(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){g[e]=new h(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){g[e]=new h(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){g[e]=new h(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){g[e]=new h(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!f.call(m,e)||!f.call(p,e)&&(d.test(e)?m[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);g[t]=new h(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!1,!1)})),g.xlinkHref=new h("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){g[e]=new h(e,1,!1,e.toLowerCase(),null,!0,!0)}));var A=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),w=Symbol.for("react.portal"),x=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),N=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),L=Symbol.for("react.memo"),I=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var _=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function T(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var F,R=Object.assign;function M(e){if(void 0===F)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return"\n"+F+e}var B=!1;function J(e,t){if(!e||B)return"";B=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),l=r.stack.split("\n"),o=a.length-1,i=l.length-1;1<=o&&0<=i&&a[o]!==l[i];)i--;for(;1<=o&&0<=i;o--,i--)if(a[o]!==l[i]){if(1!==o||1!==i)do{if(o--,0>--i||a[o]!==l[i]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=i);break}}}finally{B=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?M(e):""}function D(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=J(e.type,!1);case 11:return e=J(e.type.render,!1);case 1:return e=J(e.type,!0);default:return""}}function V(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case x:return"Fragment";case w:return"Portal";case S:return"Profiler";case C:return"StrictMode";case j:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case N:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case L:return null!==(t=e.displayName||null)?t:V(e.type)||"Memo";case I:t=e._payload,e=e._init;try{return V(e(t))}catch(n){}}return null}function X(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return V(t);case 8:return t===C?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function W(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function U(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Z(e){e._valueTracker||(e._valueTracker=function(e){var t=U(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,l.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function H(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=U(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Q(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return R({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=W(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function G(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function K(e,t){G(e,t);var n=W(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,W(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function $(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Q(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+W(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(l(91));return R({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(l(92));if(te(n)){if(1<n.length)throw Error(l(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:W(n)}}function le(e,t){var n=W(t.value),r=W(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function ie(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?ie(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,fe=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function de(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},me=["Webkit","ms","Moz","O"];function he(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=he(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach((function(e){me.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]}))}));var ve=R({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(l(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(l(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(l(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function ke(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var we=null,xe=null,Ce=null;function Se(e){if(e=ba(e)){if("function"!==typeof we)throw Error(l(280));var t=e.stateNode;t&&(t=ka(t),we(e.stateNode,e.type,t))}}function Ee(e){xe?Ce?Ce.push(e):Ce=[e]:xe=e}function Ne(){if(xe){var e=xe,t=Ce;if(Ce=xe=null,Se(e),t)for(e=0;e<t.length;e++)Se(t[e])}}function Pe(e,t){return e(t)}function je(){}var ze=!1;function Le(e,t,n){if(ze)return e(t,n);ze=!0;try{return Pe(e,t,n)}finally{ze=!1,(null!==xe||null!==Ce)&&(je(),Ne())}}function Ie(e,t){var n=e.stateNode;if(null===n)return null;var r=ka(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(l(231,t,typeof n));return n}var _e=!1;if(c)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){_e=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ce){_e=!1}function Te(e,t,n,r,a,l,o,i,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Fe=!1,Re=null,Me=!1,Be=null,Je={onError:function(e){Fe=!0,Re=e}};function De(e,t,n,r,a,l,o,i,s){Fe=!1,Re=null,Te.apply(Je,arguments)}function Ve(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Xe(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function We(e){if(Ve(e)!==e)throw Error(l(188))}function Ue(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=Ve(e)))throw Error(l(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return We(a),e;if(o===r)return We(a),t;o=o.sibling}throw Error(l(188))}if(n.return!==r.return)n=a,r=o;else{for(var i=!1,s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i){for(s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i)throw Error(l(189))}}if(n.alternate!==r)throw Error(l(190))}if(3!==n.tag)throw Error(l(188));return n.stateNode.current===n?e:t}(e))?Ze(e):null}function Ze(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ze(e);if(null!==t)return t;e=e.sibling}return null}var He=a.unstable_scheduleCallback,Qe=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,qe=a.unstable_requestPaint,Ge=a.unstable_now,Ke=a.unstable_getCurrentPriorityLevel,$e=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,lt=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(it(e)/st|0)|0},it=Math.log,st=Math.LN2;var ut=64,ct=4194304;function ft(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,l=e.pingedLanes,o=268435455&n;if(0!==o){var i=o&~a;0!==i?r=ft(i):0!==(l&=o)&&(r=ft(l))}else 0!==(o=n&~a)?r=ft(o):0!==l&&(r=ft(l));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(l=t&-t)||16===a&&0!==(4194240&l)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function mt(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function ht(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function At(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var kt,wt,xt,Ct,St,Et=!1,Nt=[],Pt=null,jt=null,zt=null,Lt=new Map,It=new Map,_t=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tt(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Lt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":It.delete(t.pointerId)}}function Ft(e,t,n,r,a,l){return null===e||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&wt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Rt(e){var t=ya(e.target);if(null!==t){var n=Ve(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Xe(n)))return e.blockedOn=t,void St(e.priority,(function(){xt(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Mt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&wt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);Ae=r,n.target.dispatchEvent(r),Ae=null,t.shift()}return!0}function Bt(e,t,n){Mt(e)&&n.delete(t)}function Jt(){Et=!1,null!==Pt&&Mt(Pt)&&(Pt=null),null!==jt&&Mt(jt)&&(jt=null),null!==zt&&Mt(zt)&&(zt=null),Lt.forEach(Bt),It.forEach(Bt)}function Dt(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Jt)))}function Vt(e){function t(t){return Dt(t,e)}if(0<Nt.length){Dt(Nt[0],e);for(var n=1;n<Nt.length;n++){var r=Nt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&Dt(Pt,e),null!==jt&&Dt(jt,e),null!==zt&&Dt(zt,e),Lt.forEach(t),It.forEach(t),n=0;n<_t.length;n++)(r=_t[n]).blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&null===(n=_t[0]).blockedOn;)Rt(n),null===n.blockedOn&&_t.shift()}var Xt=A.ReactCurrentBatchConfig,Wt=!0;function Ut(e,t,n,r){var a=bt,l=Xt.transition;Xt.transition=null;try{bt=1,Ht(e,t,n,r)}finally{bt=a,Xt.transition=l}}function Zt(e,t,n,r){var a=bt,l=Xt.transition;Xt.transition=null;try{bt=4,Ht(e,t,n,r)}finally{bt=a,Xt.transition=l}}function Ht(e,t,n,r){if(Wt){var a=Yt(e,t,n,r);if(null===a)Wr(e,t,r,Qt,n),Tt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Ft(Pt,e,t,n,r,a),!0;case"dragenter":return jt=Ft(jt,e,t,n,r,a),!0;case"mouseover":return zt=Ft(zt,e,t,n,r,a),!0;case"pointerover":var l=a.pointerId;return Lt.set(l,Ft(Lt.get(l)||null,e,t,n,r,a)),!0;case"gotpointercapture":return l=a.pointerId,It.set(l,Ft(It.get(l)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Tt(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==a;){var l=ba(a);if(null!==l&&kt(l),null===(l=Yt(e,t,n,r))&&Wr(e,t,r,Qt,n),l===a)break;a=l}null!==a&&r.stopPropagation()}else Wr(e,t,r,null,n)}}var Qt=null;function Yt(e,t,n,r){if(Qt=null,null!==(e=ya(e=ke(r))))if(null===(t=Ve(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Xe(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Qt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ke()){case $e:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Gt=null,Kt=null,$t=null;function en(){if($t)return $t;var e,t,n=Kt,r=n.length,a="value"in Gt?Gt.value:Gt.textContent,l=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[l-t];t++);return $t=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,l){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=l,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return R(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var ln,on,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),fn=R({},un,{view:0,detail:0}),dn=an(fn),pn=R({},fn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(ln=e.screenX-sn.screenX,on=e.screenY-sn.screenY):on=ln=0,sn=e),ln)},movementY:function(e){return"movementY"in e?e.movementY:on}}),mn=an(pn),hn=an(R({},pn,{dataTransfer:0})),gn=an(R({},fn,{relatedTarget:0})),vn=an(R({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=R({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(yn),An=an(R({},un,{data:0})),kn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Cn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=xn[e])&&!!t[e]}function Sn(){return Cn}var En=R({},fn,{key:function(e){if(e.key){var t=kn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?wn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Nn=an(En),Pn=an(R({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=an(R({},fn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sn})),zn=an(R({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Ln=R({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),In=an(Ln),_n=[9,13,27,32],On=c&&"CompositionEvent"in window,Tn=null;c&&"documentMode"in document&&(Tn=document.documentMode);var Fn=c&&"TextEvent"in window&&!Tn,Rn=c&&(!On||Tn&&8<Tn&&11>=Tn),Mn=String.fromCharCode(32),Bn=!1;function Jn(e,t){switch(e){case"keyup":return-1!==_n.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Vn=!1;var Xn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Xn[e.type]:"textarea"===t}function Un(e,t,n,r){Ee(r),0<(t=Zr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Zn=null,Hn=null;function Qn(e){Mr(e,0)}function Yn(e){if(H(Aa(e)))return e}function qn(e,t){if("change"===e)return t}var Gn=!1;if(c){var Kn;if(c){var $n="oninput"in document;if(!$n){var er=document.createElement("div");er.setAttribute("oninput","return;"),$n="function"===typeof er.oninput}Kn=$n}else Kn=!1;Gn=Kn&&(!document.documentMode||9<document.documentMode)}function tr(){Zn&&(Zn.detachEvent("onpropertychange",nr),Hn=Zn=null)}function nr(e){if("value"===e.propertyName&&Yn(Hn)){var t=[];Un(t,Hn,e,ke(e)),Le(Qn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Hn=n,(Zn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Hn)}function lr(e,t){if("click"===e)return Yn(t)}function or(e,t){if("input"===e||"change"===e)return Yn(t)}var ir="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(ir(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!f.call(t,a)||!ir(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function fr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?fr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function dr(){for(var e=window,t=Q();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Q((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function mr(e){var t=dr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&fr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,l=Math.min(r.start,a);r=void 0===r.end?l:Math.min(r.end,a),!e.extend&&l>r&&(a=r,r=l,l=a),a=cr(n,l);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,vr=null,yr=null,br=!1;function Ar(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==Q(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Zr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function kr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var wr={animationend:kr("Animation","AnimationEnd"),animationiteration:kr("Animation","AnimationIteration"),animationstart:kr("Animation","AnimationStart"),transitionend:kr("Transition","TransitionEnd")},xr={},Cr={};function Sr(e){if(xr[e])return xr[e];if(!wr[e])return e;var t,n=wr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Cr)return xr[e]=n[t];return e}c&&(Cr=document.createElement("div").style,"AnimationEvent"in window||(delete wr.animationend.animation,delete wr.animationiteration.animation,delete wr.animationstart.animation),"TransitionEvent"in window||delete wr.transitionend.transition);var Er=Sr("animationend"),Nr=Sr("animationiteration"),Pr=Sr("animationstart"),jr=Sr("transitionend"),zr=new Map,Lr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ir(e,t){zr.set(e,t),s(t,[e])}for(var _r=0;_r<Lr.length;_r++){var Or=Lr[_r];Ir(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}Ir(Er,"onAnimationEnd"),Ir(Nr,"onAnimationIteration"),Ir(Pr,"onAnimationStart"),Ir("dblclick","onDoubleClick"),Ir("focusin","onFocus"),Ir("focusout","onBlur"),Ir(jr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Tr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));function Rr(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,i,s,u){if(De.apply(this,arguments),Fe){if(!Fe)throw Error(l(198));var c=Re;Fe=!1,Re=null,Me||(Me=!0,Be=c)}}(r,t,void 0,e),e.currentTarget=null}function Mr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var o=r.length-1;0<=o;o--){var i=r[o],s=i.instance,u=i.currentTarget;if(i=i.listener,s!==l&&a.isPropagationStopped())break e;Rr(a,i,u),l=s}else for(o=0;o<r.length;o++){if(s=(i=r[o]).instance,u=i.currentTarget,i=i.listener,s!==l&&a.isPropagationStopped())break e;Rr(a,i,u),l=s}}}if(Me)throw e=Be,Me=!1,Be=null,e}function Br(e,t){var n=t[ha];void 0===n&&(n=t[ha]=new Set);var r=e+"__bubble";n.has(r)||(Xr(t,e,2,!1),n.add(r))}function Jr(e,t,n){var r=0;t&&(r|=4),Xr(n,e,r,t)}var Dr="_reactListening"+Math.random().toString(36).slice(2);function Vr(e){if(!e[Dr]){e[Dr]=!0,o.forEach((function(t){"selectionchange"!==t&&(Fr.has(t)||Jr(t,!1,e),Jr(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Dr]||(t[Dr]=!0,Jr("selectionchange",!1,t))}}function Xr(e,t,n,r){switch(qt(t)){case 1:var a=Ut;break;case 4:a=Zt;break;default:a=Ht}n=a.bind(null,t,n,e),a=void 0,!_e||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wr(e,t,n,r,a){var l=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var i=r.stateNode.containerInfo;if(i===a||8===i.nodeType&&i.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==i;){if(null===(o=ya(i)))return;if(5===(s=o.tag)||6===s){r=l=o;continue e}i=i.parentNode}}r=r.return}Le((function(){var r=l,a=ke(n),o=[];e:{var i=zr.get(e);if(void 0!==i){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Nn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=hn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=jn;break;case Er:case Nr:case Pr:s=vn;break;case jr:s=zn;break;case"scroll":s=dn;break;case"wheel":s=In;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),f=!c&&"scroll"===e,d=c?null!==i?i+"Capture":null:i;c=[];for(var p,m=r;null!==m;){var h=(p=m).stateNode;if(5===p.tag&&null!==h&&(p=h,null!==d&&(null!=(h=Ie(m,d))&&c.push(Ur(m,h,p)))),f)break;m=m.return}0<c.length&&(i=new s(i,u,null,n,a),o.push({event:i,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(i="mouseover"===e||"pointerover"===e)||n===Ae||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ma])&&(s||i)&&(i=a.window===a?a:(i=a.ownerDocument)?i.defaultView||i.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(f=Ve(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=mn,h="onMouseLeave",d="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,h="onPointerLeave",d="onPointerEnter",m="pointer"),f=null==s?i:Aa(s),p=null==u?i:Aa(u),(i=new c(h,m+"leave",s,n,a)).target=f,i.relatedTarget=p,h=null,ya(a)===r&&((c=new c(d,m+"enter",u,n,a)).target=p,c.relatedTarget=f,h=c),f=h,s&&u)e:{for(d=u,m=0,p=c=s;p;p=Hr(p))m++;for(p=0,h=d;h;h=Hr(h))p++;for(;0<m-p;)c=Hr(c),m--;for(;0<p-m;)d=Hr(d),p--;for(;m--;){if(c===d||null!==d&&c===d.alternate)break e;c=Hr(c),d=Hr(d)}c=null}else c=null;null!==s&&Qr(o,i,s,c,!1),null!==u&&null!==f&&Qr(o,f,u,c,!0)}if("select"===(s=(i=r?Aa(r):window).nodeName&&i.nodeName.toLowerCase())||"input"===s&&"file"===i.type)var g=qn;else if(Wn(i))if(Gn)g=or;else{g=ar;var v=rr}else(s=i.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===i.type||"radio"===i.type)&&(g=lr);switch(g&&(g=g(e,r))?Un(o,g,n,a):(v&&v(e,i,r),"focusout"===e&&(v=i._wrapperState)&&v.controlled&&"number"===i.type&&ee(i,"number",i.value)),v=r?Aa(r):window,e){case"focusin":(Wn(v)||"true"===v.contentEditable)&&(gr=v,vr=r,yr=null);break;case"focusout":yr=vr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,Ar(o,n,a);break;case"selectionchange":if(hr)break;case"keydown":case"keyup":Ar(o,n,a)}var y;if(On)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Vn?Jn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(Rn&&"ko"!==n.locale&&(Vn||"onCompositionStart"!==b?"onCompositionEnd"===b&&Vn&&(y=en()):(Kt="value"in(Gt=a)?Gt.value:Gt.textContent,Vn=!0)),0<(v=Zr(r,b)).length&&(b=new An(b,e,null,n,a),o.push({event:b,listeners:v}),y?b.data=y:null!==(y=Dn(n))&&(b.data=y))),(y=Fn?function(e,t){switch(e){case"compositionend":return Dn(t);case"keypress":return 32!==t.which?null:(Bn=!0,Mn);case"textInput":return(e=t.data)===Mn&&Bn?null:e;default:return null}}(e,n):function(e,t){if(Vn)return"compositionend"===e||!On&&Jn(e,t)?(e=en(),$t=Kt=Gt=null,Vn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Rn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Zr(r,"onBeforeInput")).length&&(a=new An("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=y))}Mr(o,t)}))}function Ur(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,l=a.stateNode;5===a.tag&&null!==l&&(a=l,null!=(l=Ie(e,n))&&r.unshift(Ur(e,l,a)),null!=(l=Ie(e,t))&&r.push(Ur(e,l,a))),e=e.return}return r}function Hr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Qr(e,t,n,r,a){for(var l=t._reactName,o=[];null!==n&&n!==r;){var i=n,s=i.alternate,u=i.stateNode;if(null!==s&&s===r)break;5===i.tag&&null!==u&&(i=u,a?null!=(s=Ie(n,l))&&o.unshift(Ur(n,s,i)):a||null!=(s=Ie(n,l))&&o.push(Ur(n,s,i))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Gr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(qr,"")}function Kr(e,t,n){if(t=Gr(t),Gr(e)!==t&&n)throw Error(l(425))}function $r(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,la="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof la?function(e){return la.resolve(null).then(e).catch(ia)}:ra;function ia(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Vt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Vt(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var fa=Math.random().toString(36).slice(2),da="__reactFiber$"+fa,pa="__reactProps$"+fa,ma="__reactContainer$"+fa,ha="__reactEvents$"+fa,ga="__reactListeners$"+fa,va="__reactHandles$"+fa;function ya(e){var t=e[da];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ma]||n[da]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[da])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[da]||e[ma])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function Aa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(l(33))}function ka(e){return e[pa]||null}var wa=[],xa=-1;function Ca(e){return{current:e}}function Sa(e){0>xa||(e.current=wa[xa],wa[xa]=null,xa--)}function Ea(e,t){xa++,wa[xa]=e.current,e.current=t}var Na={},Pa=Ca(Na),ja=Ca(!1),za=Na;function La(e,t){var n=e.type.contextTypes;if(!n)return Na;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,l={};for(a in n)l[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function Ia(e){return null!==(e=e.childContextTypes)&&void 0!==e}function _a(){Sa(ja),Sa(Pa)}function Oa(e,t,n){if(Pa.current!==Na)throw Error(l(168));Ea(Pa,t),Ea(ja,n)}function Ta(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(l(108,X(e)||"Unknown",a));return R({},n,r)}function Fa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Na,za=Pa.current,Ea(Pa,e),Ea(ja,ja.current),!0}function Ra(e,t,n){var r=e.stateNode;if(!r)throw Error(l(169));n?(e=Ta(e,t,za),r.__reactInternalMemoizedMergedChildContext=e,Sa(ja),Sa(Pa),Ea(Pa,e)):Sa(ja),Ea(ja,n)}var Ma=null,Ba=!1,Ja=!1;function Da(e){null===Ma?Ma=[e]:Ma.push(e)}function Va(){if(!Ja&&null!==Ma){Ja=!0;var e=0,t=bt;try{var n=Ma;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ma=null,Ba=!1}catch(a){throw null!==Ma&&(Ma=Ma.slice(e+1)),He($e,Va),a}finally{bt=t,Ja=!1}}return null}var Xa=[],Wa=0,Ua=null,Za=0,Ha=[],Qa=0,Ya=null,qa=1,Ga="";function Ka(e,t){Xa[Wa++]=Za,Xa[Wa++]=Ua,Ua=e,Za=t}function $a(e,t,n){Ha[Qa++]=qa,Ha[Qa++]=Ga,Ha[Qa++]=Ya,Ya=e;var r=qa;e=Ga;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var l=32-ot(t)+a;if(30<l){var o=a-a%5;l=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qa=1<<32-ot(t)+a|n<<a|r,Ga=l+e}else qa=1<<l|n<<a|r,Ga=e}function el(e){null!==e.return&&(Ka(e,1),$a(e,1,0))}function tl(e){for(;e===Ua;)Ua=Xa[--Wa],Xa[Wa]=null,Za=Xa[--Wa],Xa[Wa]=null;for(;e===Ya;)Ya=Ha[--Qa],Ha[Qa]=null,Ga=Ha[--Qa],Ha[Qa]=null,qa=Ha[--Qa],Ha[Qa]=null}var nl=null,rl=null,al=!1,ll=null;function ol(e,t){var n=Lu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function il(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,nl=e,rl=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,nl=e,rl=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ya?{id:qa,overflow:Ga}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Lu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,nl=e,rl=null,!0);default:return!1}}function sl(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ul(e){if(al){var t=rl;if(t){var n=t;if(!il(e,t)){if(sl(e))throw Error(l(418));t=ua(n.nextSibling);var r=nl;t&&il(e,t)?ol(r,n):(e.flags=-4097&e.flags|2,al=!1,nl=e)}}else{if(sl(e))throw Error(l(418));e.flags=-4097&e.flags|2,al=!1,nl=e}}}function cl(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;nl=e}function fl(e){if(e!==nl)return!1;if(!al)return cl(e),al=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=rl)){if(sl(e))throw dl(),Error(l(418));for(;t;)ol(e,t),t=ua(t.nextSibling)}if(cl(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){rl=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}rl=null}}else rl=nl?ua(e.stateNode.nextSibling):null;return!0}function dl(){for(var e=rl;e;)e=ua(e.nextSibling)}function pl(){rl=nl=null,al=!1}function ml(e){null===ll?ll=[e]:ll.push(e)}var hl=A.ReactCurrentBatchConfig;function gl(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(l(309));var r=n.stateNode}if(!r)throw Error(l(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(l(284));if(!n._owner)throw Error(l(290,e))}return e}function vl(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yl(e){return(0,e._init)(e._payload)}function bl(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=_u(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ru(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var l=n.type;return l===x?f(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===l||"object"===typeof l&&null!==l&&l.$$typeof===I&&yl(l)===t.type)?((r=a(t,n.props)).ref=gl(e,t,n),r.return=e,r):((r=Ou(n.type,n.key,n.props,null,e.mode,r)).ref=gl(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function f(e,t,n,r,l){return null===t||7!==t.tag?((t=Tu(n,e.mode,r,l)).return=e,t):((t=a(t,n)).return=e,t)}function d(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ru(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case k:return(n=Ou(t.type,t.key,t.props,null,e.mode,n)).ref=gl(e,null,t),n.return=e,n;case w:return(t=Mu(t,e.mode,n)).return=e,t;case I:return d(e,(0,t._init)(t._payload),n)}if(te(t)||T(t))return(t=Tu(t,e.mode,n,null)).return=e,t;vl(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case k:return n.key===a?u(e,t,n,r):null;case w:return n.key===a?c(e,t,n,r):null;case I:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||T(n))return null!==a?null:f(e,t,n,r,null);vl(e,n)}return null}function m(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case k:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case w:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case I:return m(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||T(r))return f(t,e=e.get(n)||null,r,a,null);vl(t,r)}return null}function h(a,l,i,s){for(var u=null,c=null,f=l,h=l=0,g=null;null!==f&&h<i.length;h++){f.index>h?(g=f,f=null):g=f.sibling;var v=p(a,f,i[h],s);if(null===v){null===f&&(f=g);break}e&&f&&null===v.alternate&&t(a,f),l=o(v,l,h),null===c?u=v:c.sibling=v,c=v,f=g}if(h===i.length)return n(a,f),al&&Ka(a,h),u;if(null===f){for(;h<i.length;h++)null!==(f=d(a,i[h],s))&&(l=o(f,l,h),null===c?u=f:c.sibling=f,c=f);return al&&Ka(a,h),u}for(f=r(a,f);h<i.length;h++)null!==(g=m(f,a,h,i[h],s))&&(e&&null!==g.alternate&&f.delete(null===g.key?h:g.key),l=o(g,l,h),null===c?u=g:c.sibling=g,c=g);return e&&f.forEach((function(e){return t(a,e)})),al&&Ka(a,h),u}function g(a,i,s,u){var c=T(s);if("function"!==typeof c)throw Error(l(150));if(null==(s=c.call(s)))throw Error(l(151));for(var f=c=null,h=i,g=i=0,v=null,y=s.next();null!==h&&!y.done;g++,y=s.next()){h.index>g?(v=h,h=null):v=h.sibling;var b=p(a,h,y.value,u);if(null===b){null===h&&(h=v);break}e&&h&&null===b.alternate&&t(a,h),i=o(b,i,g),null===f?c=b:f.sibling=b,f=b,h=v}if(y.done)return n(a,h),al&&Ka(a,g),c;if(null===h){for(;!y.done;g++,y=s.next())null!==(y=d(a,y.value,u))&&(i=o(y,i,g),null===f?c=y:f.sibling=y,f=y);return al&&Ka(a,g),c}for(h=r(a,h);!y.done;g++,y=s.next())null!==(y=m(h,a,g,y.value,u))&&(e&&null!==y.alternate&&h.delete(null===y.key?g:y.key),i=o(y,i,g),null===f?c=y:f.sibling=y,f=y);return e&&h.forEach((function(e){return t(a,e)})),al&&Ka(a,g),c}return function e(r,l,o,s){if("object"===typeof o&&null!==o&&o.type===x&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case k:e:{for(var u=o.key,c=l;null!==c;){if(c.key===u){if((u=o.type)===x){if(7===c.tag){n(r,c.sibling),(l=a(c,o.props.children)).return=r,r=l;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===I&&yl(u)===c.type){n(r,c.sibling),(l=a(c,o.props)).ref=gl(r,c,o),l.return=r,r=l;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===x?((l=Tu(o.props.children,r.mode,s,o.key)).return=r,r=l):((s=Ou(o.type,o.key,o.props,null,r.mode,s)).ref=gl(r,l,o),s.return=r,r=s)}return i(r);case w:e:{for(c=o.key;null!==l;){if(l.key===c){if(4===l.tag&&l.stateNode.containerInfo===o.containerInfo&&l.stateNode.implementation===o.implementation){n(r,l.sibling),(l=a(l,o.children||[])).return=r,r=l;break e}n(r,l);break}t(r,l),l=l.sibling}(l=Mu(o,r.mode,s)).return=r,r=l}return i(r);case I:return e(r,l,(c=o._init)(o._payload),s)}if(te(o))return h(r,l,o,s);if(T(o))return g(r,l,o,s);vl(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==l&&6===l.tag?(n(r,l.sibling),(l=a(l,o)).return=r,r=l):(n(r,l),(l=Ru(o,r.mode,s)).return=r,r=l),i(r)):n(r,l)}}var Al=bl(!0),kl=bl(!1),wl=Ca(null),xl=null,Cl=null,Sl=null;function El(){Sl=Cl=xl=null}function Nl(e){var t=wl.current;Sa(wl),e._currentValue=t}function Pl(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function jl(e,t){xl=e,Sl=Cl=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bi=!0),e.firstContext=null)}function zl(e){var t=e._currentValue;if(Sl!==e)if(e={context:e,memoizedValue:t,next:null},null===Cl){if(null===xl)throw Error(l(308));Cl=e,xl.dependencies={lanes:0,firstContext:e}}else Cl=Cl.next=e;return t}var Ll=null;function Il(e){null===Ll?Ll=[e]:Ll.push(e)}function _l(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,Il(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ol(e,r)}function Ol(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Tl=!1;function Fl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rl(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ml(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Bl(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ol(e,n)}return null===(a=r.interleaved)?(t.next=t,Il(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ol(e,n)}function Jl(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Dl(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,l=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===l?a=l=o:l=l.next=o,n=n.next}while(null!==n);null===l?a=l=t:l=l.next=t}else a=l=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:l,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Vl(e,t,n,r){var a=e.updateQueue;Tl=!1;var l=a.firstBaseUpdate,o=a.lastBaseUpdate,i=a.shared.pending;if(null!==i){a.shared.pending=null;var s=i,u=s.next;s.next=null,null===o?l=u:o.next=u,o=s;var c=e.alternate;null!==c&&((i=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===i?c.firstBaseUpdate=u:i.next=u,c.lastBaseUpdate=s))}if(null!==l){var f=a.baseState;for(o=0,c=u=s=null,i=l;;){var d=i.lane,p=i.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:p,lane:0,tag:i.tag,payload:i.payload,callback:i.callback,next:null});e:{var m=e,h=i;switch(d=t,p=n,h.tag){case 1:if("function"===typeof(m=h.payload)){f=m.call(p,f,d);break e}f=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(d="function"===typeof(m=h.payload)?m.call(p,f,d):m)||void 0===d)break e;f=R({},f,d);break e;case 2:Tl=!0}}null!==i.callback&&0!==i.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[i]:d.push(i))}else p={eventTime:p,lane:d,tag:i.tag,payload:i.payload,callback:i.callback,next:null},null===c?(u=c=p,s=f):c=c.next=p,o|=d;if(null===(i=i.next)){if(null===(i=a.shared.pending))break;i=(d=i).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(s=f),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===l&&(a.shared.lanes=0);Fs|=o,e.lanes=o,e.memoizedState=f}}function Xl(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(l(191,a));a.call(r)}}}var Wl={},Ul=Ca(Wl),Zl=Ca(Wl),Hl=Ca(Wl);function Ql(e){if(e===Wl)throw Error(l(174));return e}function Yl(e,t){switch(Ea(Hl,t),Ea(Zl,e),Ea(Ul,Wl),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Sa(Ul),Ea(Ul,t)}function ql(){Sa(Ul),Sa(Zl),Sa(Hl)}function Gl(e){Ql(Hl.current);var t=Ql(Ul.current),n=se(t,e.type);t!==n&&(Ea(Zl,e),Ea(Ul,n))}function Kl(e){Zl.current===e&&(Sa(Ul),Sa(Zl))}var $l=Ca(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=A.ReactCurrentDispatcher,ao=A.ReactCurrentBatchConfig,lo=0,oo=null,io=null,so=null,uo=!1,co=!1,fo=0,po=0;function mo(){throw Error(l(321))}function ho(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ir(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(lo=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?$o:ei,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(l(301));o+=1,so=io=null,t.updateQueue=null,ro.current=ti,e=n(r,a)}while(co)}if(ro.current=Ko,t=null!==io&&null!==io.next,lo=0,so=io=oo=null,uo=!1,t)throw Error(l(300));return e}function vo(){var e=0!==fo;return fo=0,e}function yo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function bo(){if(null===io){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=io.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,io=e;else{if(null===e)throw Error(l(310));e={memoizedState:(io=e).memoizedState,baseState:io.baseState,baseQueue:io.baseQueue,queue:io.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function Ao(e,t){return"function"===typeof t?t(e):t}function ko(e){var t=bo(),n=t.queue;if(null===n)throw Error(l(311));n.lastRenderedReducer=e;var r=io,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var i=a.next;a.next=o.next,o.next=i}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=i=null,u=null,c=o;do{var f=c.lane;if((lo&f)===f)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=d,i=r):u=u.next=d,oo.lanes|=f,Fs|=f}c=c.next}while(null!==c&&c!==o);null===u?i=r:u.next=s,ir(r,t.memoizedState)||(bi=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Fs|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function wo(e){var t=bo(),n=t.queue;if(null===n)throw Error(l(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var i=a=a.next;do{o=e(o,i.action),i=i.next}while(i!==a);ir(o,t.memoizedState)||(bi=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function xo(){}function Co(e,t){var n=oo,r=bo(),a=t(),o=!ir(r.memoizedState,a);if(o&&(r.memoizedState=a,bi=!0),r=r.queue,Fo(No.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,Lo(9,Eo.bind(null,n,r,a,t),void 0,null),null===js)throw Error(l(349));0!==(30&lo)||So(n,t,a)}return a}function So(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,Po(t)&&jo(e)}function No(e,t,n){return n((function(){Po(t)&&jo(e)}))}function Po(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ir(e,n)}catch(r){return!0}}function jo(e){var t=Ol(e,1);null!==t&&nu(t,e,1,-1)}function zo(e){var t=yo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ao,lastRenderedState:e},t.queue=e,e=e.dispatch=Qo.bind(null,oo,e),[t.memoizedState,e]}function Lo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Io(){return bo().memoizedState}function _o(e,t,n,r){var a=yo();oo.flags|=e,a.memoizedState=Lo(1|t,n,void 0,void 0===r?null:r)}function Oo(e,t,n,r){var a=bo();r=void 0===r?null:r;var l=void 0;if(null!==io){var o=io.memoizedState;if(l=o.destroy,null!==r&&ho(r,o.deps))return void(a.memoizedState=Lo(t,n,l,r))}oo.flags|=e,a.memoizedState=Lo(1|t,n,l,r)}function To(e,t){return _o(8390656,8,e,t)}function Fo(e,t){return Oo(2048,8,e,t)}function Ro(e,t){return Oo(4,2,e,t)}function Mo(e,t){return Oo(4,4,e,t)}function Bo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Jo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oo(4,4,Bo.bind(null,t,e),n)}function Do(){}function Vo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Xo(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Wo(e,t,n){return 0===(21&lo)?(e.baseState&&(e.baseState=!1,bi=!0),e.memoizedState=n):(ir(n,t)||(n=ht(),oo.lanes|=n,Fs|=n,e.baseState=!0),t)}function Uo(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{bt=n,ao.transition=r}}function Zo(){return bo().memoizedState}function Ho(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e))qo(t,n);else if(null!==(n=_l(e,t,n,r))){nu(n,e,r,eu()),Go(n,t,r)}}function Qo(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))qo(t,a);else{var l=e.alternate;if(0===e.lanes&&(null===l||0===l.lanes)&&null!==(l=t.lastRenderedReducer))try{var o=t.lastRenderedState,i=l(o,n);if(a.hasEagerState=!0,a.eagerState=i,ir(i,o)){var s=t.interleaved;return null===s?(a.next=a,Il(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=_l(e,t,a,r))&&(nu(n,e,r,a=eu()),Go(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function qo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Go(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Ko={readContext:zl,useCallback:mo,useContext:mo,useEffect:mo,useImperativeHandle:mo,useInsertionEffect:mo,useLayoutEffect:mo,useMemo:mo,useReducer:mo,useRef:mo,useState:mo,useDebugValue:mo,useDeferredValue:mo,useTransition:mo,useMutableSource:mo,useSyncExternalStore:mo,useId:mo,unstable_isNewReconciler:!1},$o={readContext:zl,useCallback:function(e,t){return yo().memoizedState=[e,void 0===t?null:t],e},useContext:zl,useEffect:To,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,_o(4194308,4,Bo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _o(4194308,4,e,t)},useInsertionEffect:function(e,t){return _o(4,2,e,t)},useMemo:function(e,t){var n=yo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ho.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yo().memoizedState=e},useState:zo,useDebugValue:Do,useDeferredValue:function(e){return yo().memoizedState=e},useTransition:function(){var e=zo(!1),t=e[0];return e=Uo.bind(null,e[1]),yo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=yo();if(al){if(void 0===n)throw Error(l(407));n=n()}else{if(n=t(),null===js)throw Error(l(349));0!==(30&lo)||So(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,To(No.bind(null,r,o,e),[e]),r.flags|=2048,Lo(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=yo(),t=js.identifierPrefix;if(al){var n=Ga;t=":"+t+"R"+(n=(qa&~(1<<32-ot(qa)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ei={readContext:zl,useCallback:Vo,useContext:zl,useEffect:Fo,useImperativeHandle:Jo,useInsertionEffect:Ro,useLayoutEffect:Mo,useMemo:Xo,useReducer:ko,useRef:Io,useState:function(){return ko(Ao)},useDebugValue:Do,useDeferredValue:function(e){return Wo(bo(),io.memoizedState,e)},useTransition:function(){return[ko(Ao)[0],bo().memoizedState]},useMutableSource:xo,useSyncExternalStore:Co,useId:Zo,unstable_isNewReconciler:!1},ti={readContext:zl,useCallback:Vo,useContext:zl,useEffect:Fo,useImperativeHandle:Jo,useInsertionEffect:Ro,useLayoutEffect:Mo,useMemo:Xo,useReducer:wo,useRef:Io,useState:function(){return wo(Ao)},useDebugValue:Do,useDeferredValue:function(e){var t=bo();return null===io?t.memoizedState=e:Wo(t,io.memoizedState,e)},useTransition:function(){return[wo(Ao)[0],bo().memoizedState]},useMutableSource:xo,useSyncExternalStore:Co,useId:Zo,unstable_isNewReconciler:!1};function ni(e,t){if(e&&e.defaultProps){for(var n in t=R({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function ri(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:R({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ai={isMounted:function(e){return!!(e=e._reactInternals)&&Ve(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),l=Ml(r,a);l.payload=t,void 0!==n&&null!==n&&(l.callback=n),null!==(t=Bl(e,l,a))&&(nu(t,e,a,r),Jl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),l=Ml(r,a);l.tag=1,l.payload=t,void 0!==n&&null!==n&&(l.callback=n),null!==(t=Bl(e,l,a))&&(nu(t,e,a,r),Jl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Ml(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Bl(e,a,r))&&(nu(t,e,r,n),Jl(t,e,r))}};function li(e,t,n,r,a,l,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,l,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,l))}function oi(e,t,n){var r=!1,a=Na,l=t.contextType;return"object"===typeof l&&null!==l?l=zl(l):(a=Ia(t)?za:Pa.current,l=(r=null!==(r=t.contextTypes)&&void 0!==r)?La(e,a):Na),t=new t(n,l),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ai,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=l),t}function ii(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ai.enqueueReplaceState(t,t.state,null)}function si(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Fl(e);var l=t.contextType;"object"===typeof l&&null!==l?a.context=zl(l):(l=Ia(t)?za:Pa.current,a.context=La(e,l)),a.state=e.memoizedState,"function"===typeof(l=t.getDerivedStateFromProps)&&(ri(e,t,l,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&ai.enqueueReplaceState(a,a.state,null),Vl(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ui(e,t){try{var n="",r=t;do{n+=D(r),r=r.return}while(r);var a=n}catch(l){a="\nError generating stack: "+l.message+"\n"+l.stack}return{value:e,source:t,stack:a,digest:null}}function ci(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function fi(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var di="function"===typeof WeakMap?WeakMap:Map;function pi(e,t,n){(n=Ml(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ws||(Ws=!0,Us=r),fi(0,t)},n}function mi(e,t,n){(n=Ml(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){fi(0,t)}}var l=e.stateNode;return null!==l&&"function"===typeof l.componentDidCatch&&(n.callback=function(){fi(0,t),"function"!==typeof r&&(null===Zs?Zs=new Set([this]):Zs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function hi(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new di;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Su.bind(null,e,t,n),t.then(e,e))}function gi(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vi(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ml(-1,1)).tag=2,Bl(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yi=A.ReactCurrentOwner,bi=!1;function Ai(e,t,n,r){t.child=null===e?kl(t,null,n,r):Al(t,e.child,n,r)}function ki(e,t,n,r,a){n=n.render;var l=t.ref;return jl(t,a),r=go(e,t,n,r,l,a),n=vo(),null===e||bi?(al&&n&&el(t),t.flags|=1,Ai(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wi(e,t,a))}function wi(e,t,n,r,a){if(null===e){var l=n.type;return"function"!==typeof l||Iu(l)||void 0!==l.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ou(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=l,xi(e,t,l,r,a))}if(l=e.child,0===(e.lanes&a)){var o=l.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Wi(e,t,a)}return t.flags|=1,(e=_u(l,r)).ref=t.ref,e.return=t,t.child=e}function xi(e,t,n,r,a){if(null!==e){var l=e.memoizedProps;if(sr(l,r)&&e.ref===t.ref){if(bi=!1,t.pendingProps=r=l,0===(e.lanes&a))return t.lanes=e.lanes,Wi(e,t,a);0!==(131072&e.flags)&&(bi=!0)}}return Ei(e,t,n,r,a)}function Ci(e,t,n){var r=t.pendingProps,a=r.children,l=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ea(_s,Is),Is|=n;else{if(0===(1073741824&n))return e=null!==l?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ea(_s,Is),Is|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==l?l.baseLanes:n,Ea(_s,Is),Is|=r}else null!==l?(r=l.baseLanes|n,t.memoizedState=null):r=n,Ea(_s,Is),Is|=r;return Ai(e,t,a,n),t.child}function Si(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ei(e,t,n,r,a){var l=Ia(n)?za:Pa.current;return l=La(t,l),jl(t,a),n=go(e,t,n,r,l,a),r=vo(),null===e||bi?(al&&r&&el(t),t.flags|=1,Ai(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Wi(e,t,a))}function Ni(e,t,n,r,a){if(Ia(n)){var l=!0;Fa(t)}else l=!1;if(jl(t,a),null===t.stateNode)Xi(e,t),oi(t,n,r),si(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,i=t.memoizedProps;o.props=i;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=zl(u):u=La(t,u=Ia(n)?za:Pa.current);var c=n.getDerivedStateFromProps,f="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;f||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==r||s!==u)&&ii(t,o,r,u),Tl=!1;var d=t.memoizedState;o.state=d,Vl(t,r,o,a),s=t.memoizedState,i!==r||d!==s||ja.current||Tl?("function"===typeof c&&(ri(t,n,c,r),s=t.memoizedState),(i=Tl||li(t,n,i,r,d,s,u))?(f||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=i):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Rl(e,t),i=t.memoizedProps,u=t.type===t.elementType?i:ni(t.type,i),o.props=u,f=t.pendingProps,d=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=zl(s):s=La(t,s=Ia(n)?za:Pa.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(i!==f||d!==s)&&ii(t,o,r,s),Tl=!1,d=t.memoizedState,o.state=d,Vl(t,r,o,a);var m=t.memoizedState;i!==f||d!==m||ja.current||Tl?("function"===typeof p&&(ri(t,n,p,r),m=t.memoizedState),(u=Tl||li(t,n,u,r,d,m,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,m,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,m,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||i===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Pi(e,t,n,r,l,a)}function Pi(e,t,n,r,a,l){Si(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Ra(t,n,!1),Wi(e,t,l);r=t.stateNode,yi.current=t;var i=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=Al(t,e.child,null,l),t.child=Al(t,null,i,l)):Ai(e,t,i,l),t.memoizedState=r.state,a&&Ra(t,n,!0),t.child}function ji(e){var t=e.stateNode;t.pendingContext?Oa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(0,t.context,!1),Yl(e,t.containerInfo)}function zi(e,t,n,r,a){return pl(),ml(a),t.flags|=256,Ai(e,t,n,r),t.child}var Li,Ii,_i,Oi,Ti={dehydrated:null,treeContext:null,retryLane:0};function Fi(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ri(e,t,n){var r,a=t.pendingProps,o=$l.current,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(i=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ea($l,1&o),null===e)return ul(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,i?(a=t.mode,i=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==i?(i.childLanes=0,i.pendingProps=s):i=Fu(s,a,0,null),e=Tu(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Fi(n),t.memoizedState=Ti,e):Mi(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,i){if(n)return 256&t.flags?(t.flags&=-257,Bi(e,t,i,r=ci(Error(l(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Fu({mode:"visible",children:r.children},a,0,null),(o=Tu(o,a,i,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&Al(t,e.child,null,i),t.child.memoizedState=Fi(i),t.memoizedState=Ti,o);if(0===(1&t.mode))return Bi(e,t,i,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Bi(e,t,i,r=ci(o=Error(l(419)),r,void 0))}if(s=0!==(i&e.childLanes),bi||s){if(null!==(r=js)){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|i))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Ol(e,a),nu(r,e,a,-1))}return hu(),Bi(e,t,i,r=ci(Error(l(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Nu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,rl=ua(a.nextSibling),nl=t,al=!0,ll=null,null!==e&&(Ha[Qa++]=qa,Ha[Qa++]=Ga,Ha[Qa++]=Ya,qa=e.id,Ga=e.overflow,Ya=t),t=Mi(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(i){i=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=_u(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?i=_u(r,i):(i=Tu(i,s,n,null)).flags|=2,i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,s=null===(s=e.child.memoizedState)?Fi(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ti,a}return e=(i=e.child).sibling,a=_u(i,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Mi(e,t){return(t=Fu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Bi(e,t,n,r){return null!==r&&ml(r),Al(t,e.child,null,n),(e=Mi(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ji(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Pl(e.return,t,n)}function Di(e,t,n,r,a){var l=e.memoizedState;null===l?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=a)}function Vi(e,t,n){var r=t.pendingProps,a=r.revealOrder,l=r.tail;if(Ai(e,t,r.children,n),0!==(2&(r=$l.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ji(e,n,t);else if(19===e.tag)Ji(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ea($l,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Di(t,!1,a,n,l);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Di(t,!0,n,null,l);break;case"together":Di(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xi(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Wi(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Fs|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(l(153));if(null!==t.child){for(n=_u(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=_u(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Ui(e,t){if(!al)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Zi(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hi(e,t,n){var r=t.pendingProps;switch(tl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zi(t),null;case 1:case 17:return Ia(t.type)&&_a(),Zi(t),null;case 3:return r=t.stateNode,ql(),Sa(ja),Sa(Pa),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(fl(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ll&&(ou(ll),ll=null))),Ii(e,t),Zi(t),null;case 5:Kl(t);var a=Ql(Hl.current);if(n=t.type,null!==e&&null!=t.stateNode)_i(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(l(166));return Zi(t),null}if(e=Ql(Ul.current),fl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[da]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Br("cancel",r),Br("close",r);break;case"iframe":case"object":case"embed":Br("load",r);break;case"video":case"audio":for(a=0;a<Tr.length;a++)Br(Tr[a],r);break;case"source":Br("error",r);break;case"img":case"image":case"link":Br("error",r),Br("load",r);break;case"details":Br("toggle",r);break;case"input":q(r,o),Br("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Br("invalid",r);break;case"textarea":ae(r,o),Br("invalid",r)}for(var s in ye(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Kr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Kr(r.textContent,u,e),a=["children",""+u]):i.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Br("scroll",r)}switch(n){case"input":Z(r),$(r,o,!0);break;case"textarea":Z(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=$r)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=ie(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[da]=t,e[pa]=r,Li(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Br("cancel",e),Br("close",e),a=r;break;case"iframe":case"object":case"embed":Br("load",e),a=r;break;case"video":case"audio":for(a=0;a<Tr.length;a++)Br(Tr[a],e);a=r;break;case"source":Br("error",e),a=r;break;case"img":case"image":case"link":Br("error",e),Br("load",e),a=r;break;case"details":Br("toggle",e),a=r;break;case"input":q(e,r),a=Y(e,r),Br("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=R({},r,{value:void 0}),Br("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Br("invalid",e)}for(o in ye(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?ge(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&fe(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&de(e,c):"number"===typeof c&&de(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(i.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Br("scroll",e):null!=c&&b(e,o,c,s))}switch(n){case"input":Z(e),$(e,r,!1);break;case"textarea":Z(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+W(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=$r)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Zi(t),null;case 6:if(e&&null!=t.stateNode)Oi(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(l(166));if(n=Ql(Hl.current),Ql(Ul.current),fl(t)){if(r=t.stateNode,n=t.memoizedProps,r[da]=t,(o=r.nodeValue!==n)&&null!==(e=nl))switch(e.tag){case 3:Kr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Kr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[da]=t,t.stateNode=r}return Zi(t),null;case 13:if(Sa($l),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(al&&null!==rl&&0!==(1&t.mode)&&0===(128&t.flags))dl(),pl(),t.flags|=98560,o=!1;else if(o=fl(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(l(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(l(317));o[da]=t}else pl(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Zi(t),o=!1}else null!==ll&&(ou(ll),ll=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&$l.current)?0===Os&&(Os=3):hu())),null!==t.updateQueue&&(t.flags|=4),Zi(t),null);case 4:return ql(),Ii(e,t),null===e&&Vr(t.stateNode.containerInfo),Zi(t),null;case 10:return Nl(t.type._context),Zi(t),null;case 19:if(Sa($l),null===(o=t.memoizedState))return Zi(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Ui(o,!1);else{if(0!==Os||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Ui(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ea($l,1&$l.current|2),t.child}e=e.sibling}null!==o.tail&&Ge()>Vs&&(t.flags|=128,r=!0,Ui(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Ui(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!al)return Zi(t),null}else 2*Ge()-o.renderingStartTime>Vs&&1073741824!==n&&(t.flags|=128,r=!0,Ui(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Ge(),t.sibling=null,n=$l.current,Ea($l,r?1&n|2:1&n),t):(Zi(t),null);case 22:case 23:return fu(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Is)&&(Zi(t),6&t.subtreeFlags&&(t.flags|=8192)):Zi(t),null;case 24:case 25:return null}throw Error(l(156,t.tag))}function Qi(e,t){switch(tl(t),t.tag){case 1:return Ia(t.type)&&_a(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return ql(),Sa(ja),Sa(Pa),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Kl(t),null;case 13:if(Sa($l),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(l(340));pl()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Sa($l),null;case 4:return ql(),null;case 10:return Nl(t.type._context),null;case 22:case 23:return fu(),null;default:return null}}Li=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Ii=function(){},_i=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Ql(Ul.current);var l,o=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),o=[];break;case"select":a=R({},a,{value:void 0}),r=R({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=$r)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(i.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(l in s)!s.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&s[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(i.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Br("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Oi=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yi=!1,qi=!1,Gi="function"===typeof WeakSet?WeakSet:Set,Ki=null;function $i(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Cu(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Cu(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var l=a.destroy;a.destroy=void 0,void 0!==l&&es(t,n,l)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function ls(e){var t=e.alternate;null!==t&&(e.alternate=null,ls(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[da],delete t[pa],delete t[ha],delete t[ga],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function is(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=$r));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,fs=!1;function ds(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(lt&&"function"===typeof lt.onCommitFiberUnmount)try{lt.onCommitFiberUnmount(at,n)}catch(i){}switch(n.tag){case 5:qi||$i(n,t);case 6:var r=cs,a=fs;cs=null,ds(e,t,n),fs=a,null!==(cs=r)&&(fs?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(fs?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Vt(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=fs,cs=n.stateNode.containerInfo,fs=!0,ds(e,t,n),cs=r,fs=a;break;case 0:case 11:case 14:case 15:if(!qi&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var l=a,o=l.destroy;l=l.tag,void 0!==o&&(0!==(2&l)||0!==(4&l))&&es(n,t,o),a=a.next}while(a!==r)}ds(e,t,n);break;case 1:if(!qi&&($i(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(i){Cu(n,t,i)}ds(e,t,n);break;case 21:ds(e,t,n);break;case 22:1&n.mode?(qi=(r=qi)||null!==n.memoizedState,ds(e,t,n),qi=r):ds(e,t,n);break;default:ds(e,t,n)}}function ms(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Gi),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function hs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,i=t,s=i;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,fs=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,fs=!0;break e}s=s.return}if(null===cs)throw Error(l(160));ps(o,i,a),cs=null,fs=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Cu(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(hs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Cu(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Cu(e,e.return,g)}}break;case 1:hs(t,e),vs(e),512&r&&null!==n&&$i(n,n.return);break;case 5:if(hs(t,e),vs(e),512&r&&null!==n&&$i(n,n.return),32&e.flags){var a=e.stateNode;try{de(a,"")}catch(g){Cu(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,i=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&G(a,o),be(s,i);var c=be(s,o);for(i=0;i<u.length;i+=2){var f=u[i],d=u[i+1];"style"===f?ge(a,d):"dangerouslySetInnerHTML"===f?fe(a,d):"children"===f?de(a,d):b(a,f,d,c)}switch(s){case"input":K(a,o);break;case"textarea":le(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;null!=m?ne(a,!!o.multiple,m,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(g){Cu(e,e.return,g)}}break;case 6:if(hs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(l(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Cu(e,e.return,g)}}break;case 3:if(hs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Vt(t.containerInfo)}catch(g){Cu(e,e.return,g)}break;case 4:default:hs(t,e),vs(e);break;case 13:hs(t,e),vs(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Ds=Ge())),4&r&&ms(e);break;case 22:if(f=null!==n&&null!==n.memoizedState,1&e.mode?(qi=(c=qi)||f,hs(t,e),qi=c):hs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!f&&0!==(1&e.mode))for(Ki=e,f=e.child;null!==f;){for(d=Ki=f;null!==Ki;){switch(m=(p=Ki).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:$i(p,p.return);var h=p.stateNode;if("function"===typeof h.componentWillUnmount){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(g){Cu(r,n,g)}}break;case 5:$i(p,p.return);break;case 22:if(null!==p.memoizedState){ks(d);continue}}null!==m?(m.return=p,Ki=m):ks(d)}f=f.sibling}e:for(f=null,d=e;;){if(5===d.tag){if(null===f){f=d;try{a=d.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=d.stateNode,i=void 0!==(u=d.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=he("display",i))}catch(g){Cu(e,e.return,g)}}}else if(6===d.tag){if(null===f)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(g){Cu(e,e.return,g)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:hs(t,e),vs(e),4&r&&ms(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(l(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(de(a,""),r.flags&=-33),us(e,is(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,is(e),o);break;default:throw Error(l(161))}}catch(i){Cu(e,e.return,i)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Ki=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Ki;){var a=Ki,l=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Yi;if(!o){var i=a.alternate,s=null!==i&&null!==i.memoizedState||qi;i=Yi;var u=qi;if(Yi=o,(qi=s)&&!u)for(Ki=a;null!==Ki;)s=(o=Ki).child,22===o.tag&&null!==o.memoizedState?ws(a):null!==s?(s.return=o,Ki=s):ws(a);for(;null!==l;)Ki=l,bs(l,t,n),l=l.sibling;Ki=a,Yi=i,qi=u}As(e)}else 0!==(8772&a.subtreeFlags)&&null!==l?(l.return=a,Ki=l):As(e)}}function As(e){for(;null!==Ki;){var t=Ki;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:qi||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!qi)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:ni(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Xl(t,o,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Xl(t,i,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var f=c.memoizedState;if(null!==f){var d=f.dehydrated;null!==d&&Vt(d)}}}break;default:throw Error(l(163))}qi||512&t.flags&&as(t)}catch(p){Cu(t,t.return,p)}}if(t===e){Ki=null;break}if(null!==(n=t.sibling)){n.return=t.return,Ki=n;break}Ki=t.return}}function ks(e){for(;null!==Ki;){var t=Ki;if(t===e){Ki=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Ki=n;break}Ki=t.return}}function ws(e){for(;null!==Ki;){var t=Ki;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Cu(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Cu(t,a,s)}}var l=t.return;try{as(t)}catch(s){Cu(t,l,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Cu(t,o,s)}}}catch(s){Cu(t,t.return,s)}if(t===e){Ki=null;break}var i=t.sibling;if(null!==i){i.return=t.return,Ki=i;break}Ki=t.return}}var xs,Cs=Math.ceil,Ss=A.ReactCurrentDispatcher,Es=A.ReactCurrentOwner,Ns=A.ReactCurrentBatchConfig,Ps=0,js=null,zs=null,Ls=0,Is=0,_s=Ca(0),Os=0,Ts=null,Fs=0,Rs=0,Ms=0,Bs=null,Js=null,Ds=0,Vs=1/0,Xs=null,Ws=!1,Us=null,Zs=null,Hs=!1,Qs=null,Ys=0,qs=0,Gs=null,Ks=-1,$s=0;function eu(){return 0!==(6&Ps)?Ge():-1!==Ks?Ks:Ks=Ge()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ls?Ls&-Ls:null!==hl.transition?(0===$s&&($s=ht()),$s):0!==(e=bt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<qs)throw qs=0,Gs=null,Error(l(185));vt(e,n,r),0!==(2&Ps)&&e===js||(e===js&&(0===(2&Ps)&&(Rs|=n),4===Os&&iu(e,Ls)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Vs=Ge()+500,Ba&&Va()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ot(l),i=1<<o,s=a[o];-1===s?0!==(i&n)&&0===(i&r)||(a[o]=pt(i,t)):s<=t&&(e.expiredLanes|=i),l&=~i}}(e,t);var r=dt(e,e===js?Ls:0);if(0===r)null!==n&&Qe(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Qe(n),1===t)0===e.tag?function(e){Ba=!0,Da(e)}(su.bind(null,e)):Da(su.bind(null,e)),oa((function(){0===(6&Ps)&&Va()})),n=null;else{switch(At(r)){case 1:n=$e;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=ju(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Ks=-1,$s=0,0!==(6&Ps))throw Error(l(327));var n=e.callbackNode;if(wu()&&e.callbackNode!==n)return null;var r=dt(e,e===js?Ls:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=Ps;Ps|=2;var o=mu();for(js===e&&Ls===t||(Xs=null,Vs=Ge()+500,du(e,t));;)try{yu();break}catch(s){pu(e,s)}El(),Ss.current=o,Ps=a,null!==zs?t=0:(js=null,Ls=0,t=Os)}if(0!==t){if(2===t&&(0!==(a=mt(e))&&(r=a,t=lu(e,a))),1===t)throw n=Ts,du(e,0),iu(e,r),ru(e,Ge()),n;if(6===t)iu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],l=a.getSnapshot;a=a.value;try{if(!ir(l(),a))return!1}catch(i){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(o=mt(e))&&(r=o,t=lu(e,o))),1===t))throw n=Ts,du(e,0),iu(e,r),ru(e,Ge()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(l(345));case 2:case 5:ku(e,Js,Xs);break;case 3:if(iu(e,r),(130023424&r)===r&&10<(t=Ds+500-Ge())){if(0!==dt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(ku.bind(null,e,Js,Xs),t);break}ku(e,Js,Xs);break;case 4:if(iu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var i=31-ot(r);o=1<<i,(i=t[i])>a&&(a=i),r&=~o}if(r=a,10<(r=(120>(r=Ge()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Cs(r/1960))-r)){e.timeoutHandle=ra(ku.bind(null,e,Js,Xs),r);break}ku(e,Js,Xs);break;default:throw Error(l(329))}}}return ru(e,Ge()),e.callbackNode===n?au.bind(null,e):null}function lu(e,t){var n=Bs;return e.current.memoizedState.isDehydrated&&(du(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Js,Js=n,null!==t&&ou(t)),e}function ou(e){null===Js?Js=e:Js.push.apply(Js,e)}function iu(e,t){for(t&=~Ms,t&=~Rs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(l(327));wu();var t=dt(e,0);if(0===(1&t))return ru(e,Ge()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=mt(e);0!==r&&(t=r,n=lu(e,r))}if(1===n)throw n=Ts,du(e,0),iu(e,t),ru(e,Ge()),n;if(6===n)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ku(e,Js,Xs),ru(e,Ge()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Vs=Ge()+500,Ba&&Va())}}function cu(e){null!==Qs&&0===Qs.tag&&0===(6&Ps)&&wu();var t=Ps;Ps|=1;var n=Ns.transition,r=bt;try{if(Ns.transition=null,bt=1,e)return e()}finally{bt=r,Ns.transition=n,0===(6&(Ps=t))&&Va()}}function fu(){Is=_s.current,Sa(_s)}function du(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(tl(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&_a();break;case 3:ql(),Sa(ja),Sa(Pa),no();break;case 5:Kl(r);break;case 4:ql();break;case 13:case 19:Sa($l);break;case 10:Nl(r.type._context);break;case 22:case 23:fu()}n=n.return}if(js=e,zs=e=_u(e.current,null),Ls=Is=t,Os=0,Ts=null,Ms=Rs=Fs=0,Js=Bs=null,null!==Ll){for(t=0;t<Ll.length;t++)if(null!==(r=(n=Ll[t]).interleaved)){n.interleaved=null;var a=r.next,l=n.pending;if(null!==l){var o=l.next;l.next=a,r.next=o}n.pending=r}Ll=null}return e}function pu(e,t){for(;;){var n=zs;try{if(El(),ro.current=Ko,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(lo=0,so=io=oo=null,co=!1,fo=0,Es.current=null,null===n||null===n.return){Os=1,Ts=t,zs=null;break}e:{var o=e,i=n.return,s=n,u=t;if(t=Ls,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,f=s,d=f.tag;if(0===(1&f.mode)&&(0===d||11===d||15===d)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=gi(i);if(null!==m){m.flags&=-257,vi(m,i,s,0,t),1&m.mode&&hi(o,c,t),u=c;var h=(t=m).updateQueue;if(null===h){var g=new Set;g.add(u),t.updateQueue=g}else h.add(u);break e}if(0===(1&t)){hi(o,c,t),hu();break e}u=Error(l(426))}else if(al&&1&s.mode){var v=gi(i);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vi(v,i,s,0,t),ml(ui(u,s));break e}}o=u=ui(u,s),4!==Os&&(Os=2),null===Bs?Bs=[o]:Bs.push(o),o=i;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Dl(o,pi(0,u,t));break e;case 1:s=u;var y=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof y.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Zs||!Zs.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Dl(o,mi(o,s,t));break e}}o=o.return}while(null!==o)}Au(n)}catch(A){t=A,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function mu(){var e=Ss.current;return Ss.current=Ko,null===e?Ko:e}function hu(){0!==Os&&3!==Os&&2!==Os||(Os=4),null===js||0===(268435455&Fs)&&0===(268435455&Rs)||iu(js,Ls)}function gu(e,t){var n=Ps;Ps|=2;var r=mu();for(js===e&&Ls===t||(Xs=null,du(e,t));;)try{vu();break}catch(a){pu(e,a)}if(El(),Ps=n,Ss.current=r,null!==zs)throw Error(l(261));return js=null,Ls=0,Os}function vu(){for(;null!==zs;)bu(zs)}function yu(){for(;null!==zs&&!Ye();)bu(zs)}function bu(e){var t=xs(e.alternate,e,Is);e.memoizedProps=e.pendingProps,null===t?Au(e):zs=t,Es.current=null}function Au(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Hi(n,t,Is)))return void(zs=n)}else{if(null!==(n=Qi(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Os=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Os&&(Os=5)}function ku(e,t,n){var r=bt,a=Ns.transition;try{Ns.transition=null,bt=1,function(e,t,n,r){do{wu()}while(null!==Qs);if(0!==(6&Ps))throw Error(l(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),l=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~l}}(e,o),e===js&&(zs=js=null,Ls=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Hs||(Hs=!0,ju(tt,(function(){return wu(),null}))),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ns.transition,Ns.transition=null;var i=bt;bt=1;var s=Ps;Ps|=4,Es.current=null,function(e,t){if(ea=Wt,pr(e=dr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(k){n=null;break e}var i=0,s=-1,u=-1,c=0,f=0,d=e,p=null;t:for(;;){for(var m;d!==n||0!==a&&3!==d.nodeType||(s=i+a),d!==o||0!==r&&3!==d.nodeType||(u=i+r),3===d.nodeType&&(i+=d.nodeValue.length),null!==(m=d.firstChild);)p=d,d=m;for(;;){if(d===e)break t;if(p===n&&++c===a&&(s=i),p===o&&++f===r&&(u=i),null!==(m=d.nextSibling))break;p=(d=p).parentNode}d=m}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Wt=!1,Ki=t;null!==Ki;)if(e=(t=Ki).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Ki=e;else for(;null!==Ki;){t=Ki;try{var h=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==h){var g=h.memoizedProps,v=h.memoizedState,y=t.stateNode,b=y.getSnapshotBeforeUpdate(t.elementType===t.type?g:ni(t.type,g),v);y.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var A=t.stateNode.containerInfo;1===A.nodeType?A.textContent="":9===A.nodeType&&A.documentElement&&A.removeChild(A.documentElement);break;default:throw Error(l(163))}}catch(k){Cu(t,t.return,k)}if(null!==(e=t.sibling)){e.return=t.return,Ki=e;break}Ki=t.return}h=ts,ts=!1}(e,n),gs(n,e),mr(ta),Wt=!!ea,ta=ea=null,e.current=n,ys(n,e,a),qe(),Ps=s,bt=i,Ns.transition=o}else e.current=n;if(Hs&&(Hs=!1,Qs=e,Ys=a),o=e.pendingLanes,0===o&&(Zs=null),function(e){if(lt&&"function"===typeof lt.onCommitFiberRoot)try{lt.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Ge()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ws)throw Ws=!1,e=Us,Us=null,e;0!==(1&Ys)&&0!==e.tag&&wu(),o=e.pendingLanes,0!==(1&o)?e===Gs?qs++:(qs=0,Gs=e):qs=0,Va()}(e,t,n,r)}finally{Ns.transition=a,bt=r}return null}function wu(){if(null!==Qs){var e=At(Ys),t=Ns.transition,n=bt;try{if(Ns.transition=null,bt=16>e?16:e,null===Qs)var r=!1;else{if(e=Qs,Qs=null,Ys=0,0!==(6&Ps))throw Error(l(331));var a=Ps;for(Ps|=4,Ki=e.current;null!==Ki;){var o=Ki,i=o.child;if(0!==(16&Ki.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Ki=c;null!==Ki;){var f=Ki;switch(f.tag){case 0:case 11:case 15:ns(8,f,o)}var d=f.child;if(null!==d)d.return=f,Ki=d;else for(;null!==Ki;){var p=(f=Ki).sibling,m=f.return;if(ls(f),f===c){Ki=null;break}if(null!==p){p.return=m,Ki=p;break}Ki=m}}}var h=o.alternate;if(null!==h){var g=h.child;if(null!==g){h.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(null!==g)}}Ki=o}}if(0!==(2064&o.subtreeFlags)&&null!==i)i.return=o,Ki=i;else e:for(;null!==Ki;){if(0!==(2048&(o=Ki).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var y=o.sibling;if(null!==y){y.return=o.return,Ki=y;break e}Ki=o.return}}var b=e.current;for(Ki=b;null!==Ki;){var A=(i=Ki).child;if(0!==(2064&i.subtreeFlags)&&null!==A)A.return=i,Ki=A;else e:for(i=b;null!==Ki;){if(0!==(2048&(s=Ki).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(w){Cu(s,s.return,w)}if(s===i){Ki=null;break e}var k=s.sibling;if(null!==k){k.return=s.return,Ki=k;break e}Ki=s.return}}if(Ps=a,Va(),lt&&"function"===typeof lt.onPostCommitFiberRoot)try{lt.onPostCommitFiberRoot(at,e)}catch(w){}r=!0}return r}finally{bt=n,Ns.transition=t}}return!1}function xu(e,t,n){e=Bl(e,t=pi(0,t=ui(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function Cu(e,t,n){if(3===e.tag)xu(e,e,n);else for(;null!==t;){if(3===t.tag){xu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Zs||!Zs.has(r))){t=Bl(t,e=mi(t,e=ui(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Su(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,js===e&&(Ls&n)===n&&(4===Os||3===Os&&(130023424&Ls)===Ls&&500>Ge()-Ds?du(e,0):Ms|=n),ru(e,t)}function Eu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Ol(e,t))&&(vt(e,t,n),ru(e,n))}function Nu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(l(314))}null!==r&&r.delete(t),Eu(e,n)}function ju(e,t){return He(e,t)}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Lu(e,t,n,r){return new zu(e,t,n,r)}function Iu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function _u(e,t){var n=e.alternate;return null===n?((n=Lu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,a,o){var i=2;if(r=e,"function"===typeof e)Iu(e)&&(i=1);else if("string"===typeof e)i=5;else e:switch(e){case x:return Tu(n.children,a,o,t);case C:i=8,a|=8;break;case S:return(e=Lu(12,n,t,2|a)).elementType=S,e.lanes=o,e;case j:return(e=Lu(13,n,t,a)).elementType=j,e.lanes=o,e;case z:return(e=Lu(19,n,t,a)).elementType=z,e.lanes=o,e;case _:return Fu(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:i=10;break e;case N:i=9;break e;case P:i=11;break e;case L:i=14;break e;case I:i=16,r=null;break e}throw Error(l(130,null==e?e:typeof e,""))}return(t=Lu(i,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Tu(e,t,n,r){return(e=Lu(7,e,r,t)).lanes=n,e}function Fu(e,t,n,r){return(e=Lu(22,e,r,t)).elementType=_,e.lanes=n,e.stateNode={isHidden:!1},e}function Ru(e,t,n){return(e=Lu(6,e,null,t)).lanes=n,e}function Mu(e,t,n){return(t=Lu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Bu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Ju(e,t,n,r,a,l,o,i,s){return e=new Bu(e,t,n,i,s),1===t?(t=1,!0===l&&(t|=8)):t=0,l=Lu(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fl(l),e}function Du(e){if(!e)return Na;e:{if(Ve(e=e._reactInternals)!==e||1!==e.tag)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ia(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(l(171))}if(1===e.tag){var n=e.type;if(Ia(n))return Ta(e,n,t)}return t}function Vu(e,t,n,r,a,l,o,i,s){return(e=Ju(n,r,!0,e,0,l,0,i,s)).context=Du(null),n=e.current,(l=Ml(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Bl(n,l,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Xu(e,t,n,r){var a=t.current,l=eu(),o=tu(a);return n=Du(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ml(l,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Bl(a,t,o))&&(nu(e,a,o,l),Jl(e,a,o)),o}function Wu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Uu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Zu(e,t){Uu(e,t),(e=e.alternate)&&Uu(e,t)}xs=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ja.current)bi=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bi=!1,function(e,t,n){switch(t.tag){case 3:ji(t),pl();break;case 5:Gl(t);break;case 1:Ia(t.type)&&Fa(t);break;case 4:Yl(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ea(wl,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ea($l,1&$l.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ri(e,t,n):(Ea($l,1&$l.current),null!==(e=Wi(e,t,n))?e.sibling:null);Ea($l,1&$l.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Vi(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ea($l,$l.current),r)break;return null;case 22:case 23:return t.lanes=0,Ci(e,t,n)}return Wi(e,t,n)}(e,t,n);bi=0!==(131072&e.flags)}else bi=!1,al&&0!==(1048576&t.flags)&&$a(t,Za,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Xi(e,t),e=t.pendingProps;var a=La(t,Pa.current);jl(t,n),a=go(null,t,r,e,a,n);var o=vo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ia(r)?(o=!0,Fa(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Fl(t),a.updater=ai,t.stateNode=a,a._reactInternals=t,si(t,r,e,n),t=Pi(null,t,r,!0,o,n)):(t.tag=0,al&&o&&el(t),Ai(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Xi(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Iu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===L)return 14}return 2}(r),e=ni(r,e),a){case 0:t=Ei(null,t,r,e,n);break e;case 1:t=Ni(null,t,r,e,n);break e;case 11:t=ki(null,t,r,e,n);break e;case 14:t=wi(null,t,r,ni(r.type,e),n);break e}throw Error(l(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,Ei(e,t,r,a=t.elementType===r?a:ni(r,a),n);case 1:return r=t.type,a=t.pendingProps,Ni(e,t,r,a=t.elementType===r?a:ni(r,a),n);case 3:e:{if(ji(t),null===e)throw Error(l(387));r=t.pendingProps,a=(o=t.memoizedState).element,Rl(e,t),Vl(t,r,null,n);var i=t.memoizedState;if(r=i.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=zi(e,t,r,n,a=ui(Error(l(423)),t));break e}if(r!==a){t=zi(e,t,r,n,a=ui(Error(l(424)),t));break e}for(rl=ua(t.stateNode.containerInfo.firstChild),nl=t,al=!0,ll=null,n=kl(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pl(),r===a){t=Wi(e,t,n);break e}Ai(e,t,r,n)}t=t.child}return t;case 5:return Gl(t),null===e&&ul(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,i=a.children,na(r,a)?i=null:null!==o&&na(r,o)&&(t.flags|=32),Si(e,t),Ai(e,t,i,n),t.child;case 6:return null===e&&ul(t),null;case 13:return Ri(e,t,n);case 4:return Yl(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=Al(t,null,r,n):Ai(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,ki(e,t,r,a=t.elementType===r?a:ni(r,a),n);case 7:return Ai(e,t,t.pendingProps,n),t.child;case 8:case 12:return Ai(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,i=a.value,Ea(wl,r._currentValue),r._currentValue=i,null!==o)if(ir(o.value,i)){if(o.children===a.children&&!ja.current){t=Wi(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){i=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Ml(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var f=(c=c.shared).pending;null===f?u.next=u:(u.next=f.next,f.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),Pl(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)i=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(i=o.return))throw Error(l(341));i.lanes|=n,null!==(s=i.alternate)&&(s.lanes|=n),Pl(i,n,t),i=o.sibling}else i=o.child;if(null!==i)i.return=o;else for(i=o;null!==i;){if(i===t){i=null;break}if(null!==(o=i.sibling)){o.return=i.return,i=o;break}i=i.return}o=i}Ai(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,jl(t,n),r=r(a=zl(a)),t.flags|=1,Ai(e,t,r,n),t.child;case 14:return a=ni(r=t.type,t.pendingProps),wi(e,t,r,a=ni(r.type,a),n);case 15:return xi(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:ni(r,a),Xi(e,t),t.tag=1,Ia(r)?(e=!0,Fa(t)):e=!1,jl(t,n),oi(t,r,a),si(t,r,a,n),Pi(null,t,r,!0,e,n);case 19:return Vi(e,t,n);case 22:return Ci(e,t,n)}throw Error(l(156,t.tag))};var Hu="function"===typeof reportError?reportError:function(e){console.error(e)};function Qu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Ku(){}function $u(e,t,n,r,a){var l=n._reactRootContainer;if(l){var o=l;if("function"===typeof a){var i=a;a=function(){var e=Wu(o);i.call(e)}}Xu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var l=r;r=function(){var e=Wu(o);l.call(e)}}var o=Vu(t,r,e,0,null,!1,0,"",Ku);return e._reactRootContainer=o,e[ma]=o.current,Vr(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var i=r;r=function(){var e=Wu(s);i.call(e)}}var s=Ju(e,0,!1,null,0,!1,0,"",Ku);return e._reactRootContainer=s,e[ma]=s.current,Vr(8===e.nodeType?e.parentNode:e),cu((function(){Xu(t,s,n,r)})),s}(n,t,e,a,r);return Wu(o)}Yu.prototype.render=Qu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(l(409));Xu(e,t,null,null)},Yu.prototype.unmount=Qu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Xu(null,e,null,null)})),t[ma]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ct();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&0!==t&&t<_t[n].priority;n++);_t.splice(n,0,e),0===n&&Rt(e)}},kt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ft(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Ge()),0===(6&Ps)&&(Vs=Ge()+500,Va()))}break;case 13:cu((function(){var t=Ol(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Zu(e,1)}},wt=function(e){if(13===e.tag){var t=Ol(e,134217728);if(null!==t)nu(t,e,134217728,eu());Zu(e,134217728)}},xt=function(e){if(13===e.tag){var t=tu(e),n=Ol(e,t);if(null!==n)nu(n,e,t,eu());Zu(e,t)}},Ct=function(){return bt},St=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},we=function(e,t,n){switch(t){case"input":if(K(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ka(r);if(!a)throw Error(l(90));H(r),K(r,a)}}}break;case"textarea":le(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,je=cu;var ec={usingClientEntryPoint:!1,Events:[ba,Aa,ka,Ee,Ne,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ue(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),lt=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(l(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:w,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(l(299));var n=!1,r="",a=Hu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Ju(e,1,!1,null,0,n,0,r,a),e[ma]=t.current,Vr(8===e.nodeType?e.parentNode:e),new Qu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(l(188));throw e=Object.keys(e).join(","),Error(l(268,e))}return e=null===(e=Ue(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Gu(t))throw Error(l(200));return $u(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(l(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",i=Hu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=Vu(t,null,e,1,null!=n?n:null,a,0,o,i),e[ma]=t.current,Vr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yu(t)},t.render=function(e,t,n){if(!Gu(t))throw Error(l(200));return $u(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Gu(e))throw Error(l(40));return!!e._reactRootContainer&&(cu((function(){$u(null,null,e,!1,(function(){e._reactRootContainer=null,e[ma]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Gu(n))throw Error(l(200));if(null==e||void 0===e._reactInternals)throw Error(l(38));return $u(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},82:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,l=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,i=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,f=n?Symbol.for("react.concurrent_mode"):60111,d=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,m=n?Symbol.for("react.suspense_list"):60120,h=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,v=n?Symbol.for("react.block"):60121,y=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,A=n?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case f:case l:case i:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case d:case g:case h:case s:return e;default:return t}}case a:return t}}}function w(e){return k(e)===f}t.AsyncMode=c,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=d,t.Fragment=l,t.Lazy=g,t.Memo=h,t.Portal=a,t.Profiler=i,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return w(e)||k(e)===c},t.isConcurrentMode=w,t.isContextConsumer=function(e){return k(e)===u},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===l},t.isLazy=function(e){return k(e)===g},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===a},t.isProfiler=function(e){return k(e)===i},t.isStrictMode=function(e){return k(e)===o},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===l||e===f||e===i||e===o||e===p||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===h||e.$$typeof===s||e.$$typeof===u||e.$$typeof===d||e.$$typeof===y||e.$$typeof===b||e.$$typeof===A||e.$$typeof===v)},t.typeOf=k},86:(e,t,n)=>{"use strict";e.exports=n(82)},171:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(43),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},575:(e,t,n)=>{"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(43),o=d(l),i=d(n(139)),s=d(n(173)),u=d(n(171)),c=d(n(19)),f=n(671);function d(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,f.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,f.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,f.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),l=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return o.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},o.default.createElement("div",{className:"react-toggle-track"},o.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),o.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),o.default.createElement("div",{className:"react-toggle-thumb"}),o.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.A=p,p.displayName="Toggle",p.defaultProps={icons:{checked:o.default.createElement(u.default,null),unchecked:o.default.createElement(c.default,null)}},p.propTypes={checked:s.default.bool,disabled:s.default.bool,defaultChecked:s.default.bool,onChange:s.default.func,onFocus:s.default.func,onBlur:s.default.func,className:s.default.string,name:s.default.string,value:s.default.string,id:s.default.string,"aria-labelledby":s.default.string,"aria-label":s.default.string,icons:s.default.oneOfType([s.default.bool,s.default.shape({checked:s.default.node,unchecked:s.default.node})])}},671:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},19:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(43),l=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,l={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:l,_owner:i.current}}t.Fragment=l,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),p=Symbol.iterator;var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var A=b.prototype=new y;A.constructor=b,h(A,v.prototype),A.isPureReactComponent=!0;var k=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var a,l={},o=null,i=null;if(null!=t)for(a in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(o=""+t.key),t)w.call(t,a)&&!C.hasOwnProperty(a)&&(l[a]=t[a]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];l.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===l[a]&&(l[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:i,props:l,_owner:x.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var N=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(e,t,a,l,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===l?"."+P(s,0):l,k(o)?(a="",null!=e&&(a=e.replace(N,"$&/")+"/"),j(o,t,a,"",(function(e){return e}))):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(N,"$&/")+"/")+e)),t.push(o)),1;if(s=0,l=""===l?".":l+":",k(e))for(var u=0;u<e.length;u++){var c=l+P(i=e[u],u);s+=j(i,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(i=e.next()).done;)s+=j(i=i.value,t,a,c=l+P(i,u++),o);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var I={current:null},_={transition:null},O={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:_,ReactCurrentOwner:x};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=l,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=T,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=h({},e.props),l=e.key,o=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,i=x.current),void 0!==t.key&&(l=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)w.call(t,u)&&!C.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:l,ref:o,props:a,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=_.transition;_.transition={};try{e()}finally{_.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return I.current.useCallback(e,t)},t.useContext=function(e){return I.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return I.current.useDeferredValue(e)},t.useEffect=function(e,t){return I.current.useEffect(e,t)},t.useId=function(){return I.current.useId()},t.useImperativeHandle=function(e,t,n){return I.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return I.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return I.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return I.current.useMemo(e,t)},t.useReducer=function(e,t,n){return I.current.useReducer(e,t,n)},t.useRef=function(e){return I.current.useRef(e)},t.useState=function(e){return I.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return I.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return I.current.useTransition()},t.version="18.3.1"},43:(e,t,n)=>{"use strict";e.exports=n(202)},579:(e,t,n)=>{"use strict";e.exports=n(153)},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<l(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var i=2*(r+1)-1,s=e[i],u=i+1,c=e[u];if(0>l(s,n))u<a&&0>l(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[i]=n,r=i);else{if(!(u<a&&0>l(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function l(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var i=Date,s=i.now();t.unstable_now=function(){return i.now()-s}}var u=[],c=[],f=1,d=null,p=3,m=!1,h=!1,g=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function A(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function k(e){if(g=!1,A(e),!h)if(null!==r(u))h=!0,_(w);else{var t=r(c);null!==t&&O(k,t.startTime-e)}}function w(e,n){h=!1,g&&(g=!1,y(E),E=-1),m=!0;var l=p;try{for(A(n),d=r(u);null!==d&&(!(d.expirationTime>n)||e&&!j());){var o=d.callback;if("function"===typeof o){d.callback=null,p=d.priorityLevel;var i=o(d.expirationTime<=n);n=t.unstable_now(),"function"===typeof i?d.callback=i:d===r(u)&&a(u),A(n)}else a(u);d=r(u)}if(null!==d)var s=!0;else{var f=r(c);null!==f&&O(k,f.startTime-n),s=!1}return s}finally{d=null,p=l,m=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var x,C=!1,S=null,E=-1,N=5,P=-1;function j(){return!(t.unstable_now()-P<N)}function z(){if(null!==S){var e=t.unstable_now();P=e;var n=!0;try{n=S(!0,e)}finally{n?x():(C=!1,S=null)}}else C=!1}if("function"===typeof b)x=function(){b(z)};else if("undefined"!==typeof MessageChannel){var L=new MessageChannel,I=L.port2;L.port1.onmessage=z,x=function(){I.postMessage(null)}}else x=function(){v(z,0)};function _(e){S=e,C||(C=!0,x())}function O(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){h||m||(h=!0,_(w))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,l){var o=t.unstable_now();switch("object"===typeof l&&null!==l?l="number"===typeof(l=l.delay)&&0<l?o+l:o:l=o,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return e={id:f++,callback:a,priorityLevel:e,startTime:l,expirationTime:i=l+i,sortIndex:-1},l>o?(e.sortIndex=l,n(c,e),null===r(u)&&e===r(c)&&(g?(y(E),E=-1):g=!0,O(k,l-o))):(e.sortIndex=i,n(u,e),h||m||(h=!0,_(w))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},853:(e,t,n)=>{"use strict";e.exports=n(234)},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,l(n)))}return e}function l(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.m=e,(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var l=Object.create(null);n.r(l);var o={};e=e||[null,t({}),t([]),t(t)];for(var i=2&a&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>o[e]=()=>r[e]));return o.default=()=>r,n.d(l,o),l}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".c5c89586.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="about-me:";n.l=(r,a,l,o)=>{if(e[r])e[r].push(a);else{var i,s;if(void 0!==l)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var f=u[c];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+l){i=f;break}}i||(s=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,n.nc&&i.setAttribute("nonce",n.nc),i.setAttribute("data-webpack",t+l),i.src=r),e[r]=[a];var d=(t,n)=>{i.onerror=i.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((e=>e(n))),t)return t(n)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=d.bind(null,i.onerror),i.onload=d.bind(null,i.onload),s&&document.head.appendChild(i)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/about-me/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var l=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=l);var o=n.p+n.u(t),i=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var l=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;i.message="Loading chunk "+t+" failed.\n("+l+": "+o+")",i.name="ChunkLoadError",i.type=l,i.request=o,a[1](i)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,l,o=r[0],i=r[1],s=r[2],u=0;if(o.some((t=>0!==e[t]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)s(n)}for(t&&t(r);u<o.length;u++)l=o[u],n.o(e,l)&&e[l]&&e[l][0](),e[l]=0},r=self.webpackChunkabout_me=self.webpackChunkabout_me||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),(()=>{"use strict";var e=n(43),t=n.t(e,2),r=n(950),a=n(575),l=n(579);const o=[{key:"#home",value:"Home"},{key:"#about",value:"About"},{key:"#skills",value:"Skills"},{key:"#work",value:"Work"},{key:"#projects",value:"Projects"}],i=()=>{const[t,n]=(0,e.useState)(window.location.hash||"#home"),[r,i]=(0,e.useState)(!1);(0,e.useEffect)((()=>{const e="dark"===localStorage.getItem("selected-theme");i(e),document.body.classList[e?"add":"remove"]("dark__theme")}),[]);const s=e=>e===t?"nav__link active":"nav__link";return(0,l.jsxs)("ul",{className:"nav__list",children:[o.map((e=>(0,l.jsx)("li",{className:"nav__item",children:(0,l.jsx)("a",{href:e.key,className:s(e.key),onClick:()=>n(e.key),children:e.value})},e.key))),(0,l.jsx)("li",{className:"toggle__item",children:(0,l.jsx)(a.A,{checked:r,className:"toggle__theme",icons:{checked:(0,l.jsx)("i",{className:"bx bxs-moon toggle__icon"}),unchecked:(0,l.jsx)("i",{className:"bx bxs-sun toggle__icon"})},onChange:()=>{return i(e=!r),document.body.classList.toggle("dark__theme",e),void localStorage.setItem("selected-theme",e?"dark":"light");var e}})})]})},s=e=>{const t=e.isMenuOpen?"nav__menu show":"nav__menu";return(0,l.jsxs)("nav",{className:"nav bd-container bd-grid","data-testid":"nav-bar",children:[(0,l.jsx)("div",{children:(0,l.jsx)("a",{href:".",className:"nav__logo",children:"Khang Le"})}),(0,l.jsx)("div",{className:t,"data-testid":"nav-list",children:(0,l.jsx)(i,{})}),(0,l.jsx)("div",{className:"nav__toggle",id:"nav-toggle","data-testid":"nav-toggle",onClick:()=>e.setIsMenuOpen(!e.isMenuOpen),children:(0,l.jsx)("i",{className:"bx bx-menu"})})]})};var u=function(){function e(e){var t=this;this._insertTag=function(e){var n;n=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,n),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var n=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{n.insertRule(e,n.cssRules.length)}catch(r){}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)})),this.tags=[],this.ctr=0},e}(),c=Math.abs,f=String.fromCharCode,d=Object.assign;function p(e){return e.trim()}function m(e,t,n){return e.replace(t,n)}function h(e,t){return e.indexOf(t)}function g(e,t){return 0|e.charCodeAt(t)}function v(e,t,n){return e.slice(t,n)}function y(e){return e.length}function b(e){return e.length}function A(e,t){return t.push(e),e}var k=1,w=1,x=0,C=0,S=0,E="";function N(e,t,n,r,a,l,o){return{value:e,root:t,parent:n,type:r,props:a,children:l,line:k,column:w,length:o,return:""}}function P(e,t){return d(N("",null,null,"",null,null,0),e,{length:-e.length},t)}function j(){return S=C>0?g(E,--C):0,w--,10===S&&(w=1,k--),S}function z(){return S=C<x?g(E,C++):0,w++,10===S&&(w=1,k++),S}function L(){return g(E,C)}function I(){return C}function _(e,t){return v(E,e,t)}function O(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(e){return k=w=1,x=y(E=e),C=0,[]}function F(e){return E="",e}function R(e){return p(_(C-1,J(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(S=L())&&S<33;)z();return O(e)>2||O(S)>3?"":" "}function B(e,t){for(;--t&&z()&&!(S<48||S>102||S>57&&S<65||S>70&&S<97););return _(e,I()+(t<6&&32==L()&&32==z()))}function J(e){for(;z();)switch(S){case e:return C;case 34:case 39:34!==e&&39!==e&&J(S);break;case 40:41===e&&J(e);break;case 92:z()}return C}function D(e,t){for(;z()&&e+S!==57&&(e+S!==84||47!==L()););return"/*"+_(t,C-1)+"*"+f(47===e?e:z())}function V(e){for(;!O(L());)z();return _(e,C)}var X="-ms-",W="-moz-",U="-webkit-",Z="comm",H="rule",Q="decl",Y="@keyframes";function q(e,t){for(var n="",r=b(e),a=0;a<r;a++)n+=t(e[a],a,e,t)||"";return n}function G(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Q:return e.return=e.return||e.value;case Z:return"";case Y:return e.return=e.value+"{"+q(e.children,r)+"}";case H:e.value=e.props.join(",")}return y(n=q(e.children,r))?e.return=e.value+"{"+n+"}":""}function K(e){return F($("",null,null,null,[""],e=T(e),0,[0],e))}function $(e,t,n,r,a,l,o,i,s){for(var u=0,c=0,d=o,p=0,v=0,b=0,k=1,w=1,x=1,C=0,S="",E=a,N=l,P=r,_=S;w;)switch(b=C,C=z()){case 40:if(108!=b&&58==g(_,d-1)){-1!=h(_+=m(R(C),"&","&\f"),"&\f")&&(x=-1);break}case 34:case 39:case 91:_+=R(C);break;case 9:case 10:case 13:case 32:_+=M(b);break;case 92:_+=B(I()-1,7);continue;case 47:switch(L()){case 42:case 47:A(te(D(z(),I()),t,n),s);break;default:_+="/"}break;case 123*k:i[u++]=y(_)*x;case 125*k:case 59:case 0:switch(C){case 0:case 125:w=0;case 59+c:-1==x&&(_=m(_,/\f/g,"")),v>0&&y(_)-d&&A(v>32?ne(_+";",r,n,d-1):ne(m(_," ","")+";",r,n,d-2),s);break;case 59:_+=";";default:if(A(P=ee(_,t,n,u,c,a,i,S,E=[],N=[],d),l),123===C)if(0===c)$(_,t,P,P,E,l,d,i,N);else switch(99===p&&110===g(_,3)?100:p){case 100:case 108:case 109:case 115:$(e,P,P,r&&A(ee(e,P,P,0,0,a,i,S,a,E=[],d),N),a,N,d,i,r?E:N);break;default:$(_,P,P,P,[""],N,0,i,N)}}u=c=v=0,k=x=1,S=_="",d=o;break;case 58:d=1+y(_),v=b;default:if(k<1)if(123==C)--k;else if(125==C&&0==k++&&125==j())continue;switch(_+=f(C),C*k){case 38:x=c>0?1:(_+="\f",-1);break;case 44:i[u++]=(y(_)-1)*x,x=1;break;case 64:45===L()&&(_+=R(z())),p=L(),c=d=y(S=_+=V(I())),C++;break;case 45:45===b&&2==y(_)&&(k=0)}}return l}function ee(e,t,n,r,a,l,o,i,s,u,f){for(var d=a-1,h=0===a?l:[""],g=b(h),y=0,A=0,k=0;y<r;++y)for(var w=0,x=v(e,d+1,d=c(A=o[y])),C=e;w<g;++w)(C=p(A>0?h[w]+" "+x:m(x,/&\f/g,h[w])))&&(s[k++]=C);return N(e,t,n,0===a?H:i,s,u,f)}function te(e,t,n){return N(e,t,n,Z,f(S),v(e,2,-2),0)}function ne(e,t,n,r){return N(e,t,n,Q,v(e,0,r),v(e,r+1,-1),r)}var re=function(e,t,n){for(var r=0,a=0;r=a,a=L(),38===r&&12===a&&(t[n]=1),!O(a);)z();return _(e,C)},ae=function(e,t){return F(function(e,t){var n=-1,r=44;do{switch(O(r)){case 0:38===r&&12===L()&&(t[n]=1),e[n]+=re(C-1,t,n);break;case 2:e[n]+=R(r);break;case 4:if(44===r){e[++n]=58===L()?"&\f":"",t[n]=e[n].length;break}default:e[n]+=f(r)}}while(r=z());return e}(T(e),t))},le=new WeakMap,oe=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,n=e.parent,r=e.column===n.column&&e.line===n.line;"rule"!==n.type;)if(!(n=n.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||le.get(n))&&!r){le.set(e,!0);for(var a=[],l=ae(t,a),o=n.props,i=0,s=0;i<l.length;i++)for(var u=0;u<o.length;u++,s++)e.props[s]=a[i]?l[i].replace(/&\f/g,o[u]):o[u]+" "+l[i]}}},ie=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}};function se(e,t){switch(function(e,t){return 45^g(e,0)?(((t<<2^g(e,0))<<2^g(e,1))<<2^g(e,2))<<2^g(e,3):0}(e,t)){case 5103:return U+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return U+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return U+e+W+e+X+e+e;case 6828:case 4268:return U+e+X+e+e;case 6165:return U+e+X+"flex-"+e+e;case 5187:return U+e+m(e,/(\w+).+(:[^]+)/,U+"box-$1$2"+X+"flex-$1$2")+e;case 5443:return U+e+X+"flex-item-"+m(e,/flex-|-self/,"")+e;case 4675:return U+e+X+"flex-line-pack"+m(e,/align-content|flex-|-self/,"")+e;case 5548:return U+e+X+m(e,"shrink","negative")+e;case 5292:return U+e+X+m(e,"basis","preferred-size")+e;case 6060:return U+"box-"+m(e,"-grow","")+U+e+X+m(e,"grow","positive")+e;case 4554:return U+m(e,/([^-])(transform)/g,"$1"+U+"$2")+e;case 6187:return m(m(m(e,/(zoom-|grab)/,U+"$1"),/(image-set)/,U+"$1"),e,"")+e;case 5495:case 3959:return m(e,/(image-set\([^]*)/,U+"$1$`$1");case 4968:return m(m(e,/(.+:)(flex-)?(.*)/,U+"box-pack:$3"+X+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+U+e+e;case 4095:case 3583:case 4068:case 2532:return m(e,/(.+)-inline(.+)/,U+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(y(e)-1-t>6)switch(g(e,t+1)){case 109:if(45!==g(e,t+4))break;case 102:return m(e,/(.+:)(.+)-([^]+)/,"$1"+U+"$2-$3$1"+W+(108==g(e,t+3)?"$3":"$2-$3"))+e;case 115:return~h(e,"stretch")?se(m(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==g(e,t+1))break;case 6444:switch(g(e,y(e)-3-(~h(e,"!important")&&10))){case 107:return m(e,":",":"+U)+e;case 101:return m(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+U+(45===g(e,14)?"inline-":"")+"box$3$1"+U+"$2$3$1"+X+"$2box$3")+e}break;case 5936:switch(g(e,t+11)){case 114:return U+e+X+m(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return U+e+X+m(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return U+e+X+m(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return U+e+X+e+e}return e}var ue=[function(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Q:e.return=se(e.value,e.length);break;case Y:return q([P(e,{value:m(e.value,"@","@"+U)})],r);case H:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return q([P(e,{props:[m(t,/:(read-\w+)/,":-moz-$1")]})],r);case"::placeholder":return q([P(e,{props:[m(t,/:(plac\w+)/,":"+U+"input-$1")]}),P(e,{props:[m(t,/:(plac\w+)/,":-moz-$1")]}),P(e,{props:[m(t,/:(plac\w+)/,X+"input-$1")]})],r)}return""}))}}],ce=function(e){var t=e.key;if("css"===t){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var r,a,l=e.stylisPlugins||ue,o={},i=[];r=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),n=1;n<t.length;n++)o[t[n]]=!0;i.push(e)}));var s,c,f=[G,(c=function(e){s.insert(e)},function(e){e.root||(e=e.return)&&c(e)})],d=function(e){var t=b(e);return function(n,r,a,l){for(var o="",i=0;i<t;i++)o+=e[i](n,r,a,l)||"";return o}}([oe,ie].concat(l,f));a=function(e,t,n,r){s=n,function(e){q(K(e),d)}(e?e+"{"+t.styles+"}":t.styles),r&&(p.inserted[t.name]=!0)};var p={key:t,sheet:new u({key:t,container:r,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:o,registered:{},insert:a};return p.sheet.hydrate(i),p};function fe(e,t,n){var r="";return n.split(" ").forEach((function(n){void 0!==e[n]?t.push(e[n]+";"):n&&(r+=n+" ")})),r}var de=function(e,t,n){var r=e.key+"-"+t.name;!1===n&&void 0===e.registered[r]&&(e.registered[r]=t.styles)},pe=function(e,t,n){de(e,t,n);var r=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var a=t;do{e.insert(t===a?"."+r:"",a,e.sheet,!0),a=a.next}while(void 0!==a)}};var me={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function he(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var ge=/[A-Z]|^ms/g,ve=/_EMO_([^_]+?)_([^]*?)_EMO_/g,ye=function(e){return 45===e.charCodeAt(1)},be=function(e){return null!=e&&"boolean"!==typeof e},Ae=he((function(e){return ye(e)?e:e.replace(ge,"-$&").toLowerCase()})),ke=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(ve,(function(e,t,n){return xe={name:t,styles:n,next:xe},t}))}return 1===me[e]||ye(e)||"number"!==typeof t||0===t?t:t+"px"};function we(e,t,n){if(null==n)return"";var r=n;if(void 0!==r.__emotion_styles)return r;switch(typeof n){case"boolean":return"";case"object":var a=n;if(1===a.anim)return xe={name:a.name,styles:a.styles,next:xe},a.name;var l=n;if(void 0!==l.styles){var o=l.next;if(void 0!==o)for(;void 0!==o;)xe={name:o.name,styles:o.styles,next:xe},o=o.next;return l.styles+";"}return function(e,t,n){var r="";if(Array.isArray(n))for(var a=0;a<n.length;a++)r+=we(e,t,n[a])+";";else for(var l in n){var o=n[l];if("object"!==typeof o){var i=o;null!=t&&void 0!==t[i]?r+=l+"{"+t[i]+"}":be(i)&&(r+=Ae(l)+":"+ke(l,i)+";")}else if(!Array.isArray(o)||"string"!==typeof o[0]||null!=t&&void 0!==t[o[0]]){var s=we(e,t,o);switch(l){case"animation":case"animationName":r+=Ae(l)+":"+s+";";break;default:r+=l+"{"+s+"}"}}else for(var u=0;u<o.length;u++)be(o[u])&&(r+=Ae(l)+":"+ke(l,o[u])+";")}return r}(e,t,n);case"function":if(void 0!==e){var i=xe,s=n(e);return xe=i,we(e,t,s)}}var u=n;if(null==t)return u;var c=t[u];return void 0!==c?c:u}var xe,Ce=/label:\s*([^\s;{]+)\s*(;|$)/g;function Se(e,t,n){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var r=!0,a="";xe=void 0;var l=e[0];null==l||void 0===l.raw?(r=!1,a+=we(n,t,l)):a+=l[0];for(var o=1;o<e.length;o++){if(a+=we(n,t,e[o]),r)a+=l[o]}Ce.lastIndex=0;for(var i,s="";null!==(i=Ce.exec(a));)s+="-"+i[1];var u=function(e){for(var t,n=0,r=0,a=e.length;a>=4;++r,a-=4)t=1540483477*(65535&(t=255&e.charCodeAt(r)|(255&e.charCodeAt(++r))<<8|(255&e.charCodeAt(++r))<<16|(255&e.charCodeAt(++r))<<24))+(59797*(t>>>16)<<16),n=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&n)+(59797*(n>>>16)<<16);switch(a){case 3:n^=(255&e.charCodeAt(r+2))<<16;case 2:n^=(255&e.charCodeAt(r+1))<<8;case 1:n=1540483477*(65535&(n^=255&e.charCodeAt(r)))+(59797*(n>>>16)<<16)}return(((n=1540483477*(65535&(n^=n>>>13))+(59797*(n>>>16)<<16))^n>>>15)>>>0).toString(36)}(a)+s;return{name:u,styles:a,next:xe}}var Ee=!!t.useInsertionEffect&&t.useInsertionEffect,Ne=Ee||function(e){return e()},Pe=(Ee||e.useLayoutEffect,e.createContext("undefined"!==typeof HTMLElement?ce({key:"css"}):null)),je=(Pe.Provider,function(t){return(0,e.forwardRef)((function(n,r){var a=(0,e.useContext)(Pe);return t(n,a,r)}))}),ze=e.createContext({});var Le={}.hasOwnProperty,Ie="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",_e=function(e){var t=e.cache,n=e.serialized,r=e.isStringTag;return de(t,n,r),Ne((function(){return pe(t,n,r)})),null},Oe=je((function(t,n,r){var a=t.css;"string"===typeof a&&void 0!==n.registered[a]&&(a=n.registered[a]);var l=t[Ie],o=[a],i="";"string"===typeof t.className?i=fe(n.registered,o,t.className):null!=t.className&&(i=t.className+" ");var s=Se(o,void 0,e.useContext(ze));i+=n.key+"-"+s.name;var u={};for(var c in t)Le.call(t,c)&&"css"!==c&&c!==Ie&&(u[c]=t[c]);return u.className=i,r&&(u.ref=r),e.createElement(e.Fragment,null,e.createElement(_e,{cache:n,serialized:s,isStringTag:"string"===typeof l}),e.createElement(l,u))})),Te=(n(219),l.Fragment);function Fe(e,t,n){return Le.call(t,"css")?l.jsx(Oe,function(e,t){var n={};for(var r in t)Le.call(t,r)&&(n[r]=t[r]);return n[Ie]=e,n}(e,t),n):l.jsx(e,t,n)}function Re(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Se(t)}var Me=function(){var e=Re.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Be=function e(t){for(var n=t.length,r=0,a="";r<n;r++){var l=t[r];if(null!=l){var o=void 0;switch(typeof l){case"boolean":break;case"object":if(Array.isArray(l))o=e(l);else for(var i in o="",l)l[i]&&i&&(o&&(o+=" "),o+=i);break;default:o=l}o&&(a&&(a+=" "),a+=o)}}return a};var Je=function(e){var t=e.cache,n=e.serializedArr;return Ne((function(){for(var e=0;e<n.length;e++)pe(t,n[e],!1)})),null},De=je((function(t,n){var r=[],a=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];var l=Se(t,n.registered);return r.push(l),de(n,l,!1),n.key+"-"+l.name},l={css:a,cx:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e,t,n){var r=[],a=fe(e,r,n);return r.length<2?n:a+t(r)}(n.registered,a,Be(t))},theme:e.useContext(ze)},o=t.children(l);return e.createElement(e.Fragment,null,e.createElement(Je,{cache:n,serializedArr:r}),o)})),Ve=Object.defineProperty,Xe=(e,t,n)=>((e,t,n)=>t in e?Ve(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n)(e,"symbol"!==typeof t?t+"":t,n),We=new Map,Ue=new WeakMap,Ze=0,He=void 0;function Qe(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(n=e.root,n?(Ue.has(n)||(Ze+=1,Ue.set(n,Ze.toString())),Ue.get(n)):"0"):e[t]}`;var n})).toString()}function Ye(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:He;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const a=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof n.threshold?n.threshold:0,time:0,boundingClientRect:a,intersectionRect:a,rootBounds:a}),()=>{}}const{id:a,observer:l,elements:o}=function(e){const t=Qe(e);let n=We.get(t);if(!n){const r=new Map;let a;const l=new IntersectionObserver((t=>{t.forEach((t=>{var n;const l=t.isIntersecting&&a.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=l),null==(n=r.get(t.target))||n.forEach((e=>{e(l,t)}))}))}),e);a=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},We.set(t,n)}return n}(n),i=o.get(e)||[];return o.has(e)||o.set(e,i),i.push(t),l.observe(e),function(){i.splice(i.indexOf(t),1),0===i.length&&(o.delete(e),l.unobserve(e)),0===o.size&&(l.disconnect(),We.delete(a))}}var qe=class extends e.Component{constructor(e){super(e),Xe(this,"node",null),Xe(this,"_unobserveCb",null),Xe(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),Xe(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a,fallbackInView:l}=this.props;this._unobserveCb=Ye(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:a},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:t}=this.props;if("function"===typeof t){const{inView:e,entry:n}=this.state;return t({inView:e,entry:n,ref:this.handleNode})}const{as:n,triggerOnce:r,threshold:a,root:l,rootMargin:o,onChange:i,skip:s,trackVisibility:u,delay:c,initialInView:f,fallbackInView:d,...p}=this.props;return e.createElement(n||"div",{ref:this.handleNode,...p},t)}};function Ge(){let{threshold:t,delay:n,trackVisibility:r,rootMargin:a,root:l,triggerOnce:o,skip:i,initialInView:s,fallbackInView:u,onChange:c}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};var f;const[d,p]=e.useState(null),m=e.useRef(c),[h,g]=e.useState({inView:!!s,entry:void 0});m.current=c,e.useEffect((()=>{if(i||!d)return;let e;return e=Ye(d,((t,n)=>{g({inView:t,entry:n}),m.current&&m.current(t,n),n.isIntersecting&&o&&e&&(e(),e=void 0)}),{root:l,rootMargin:a,threshold:t,trackVisibility:r,delay:n},u),()=>{e&&e()}}),[Array.isArray(t)?t.toString():t,d,l,a,o,i,r,u,n]);const v=null==(f=h.entry)?void 0:f.target,y=e.useRef(void 0);d||!v||o||i||y.current===v||(y.current=v,g({inView:!!s,entry:void 0}));const b=[p,h.inView,h.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var Ke=n(163);Me`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,Me`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Me`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,Me`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Me`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Me`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Me`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Me`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Me`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Me`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,Me`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,Me`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const $e=Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;Me`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function et(e,t){return n=>n?e():t()}function tt(e){return et(e,(()=>null))}function nt(e){return tt((()=>({opacity:0})))(e)}const rt=t=>{const{cascade:n=!1,damping:r=.5,delay:a=0,duration:l=1e3,fraction:o=0,keyframes:i=$e,triggerOnce:s=!1,className:u,style:c,childClassName:f,childStyle:d,children:p,onVisibilityChange:m}=t,h=(0,e.useMemo)((()=>function(e){let{duration:t=1e3,delay:n=0,timingFunction:r="ease",keyframes:a=$e,iterationCount:l=1}=e;return Re`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${n}ms;
    animation-name: ${a};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${l};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}({keyframes:i,duration:l})),[l,i]);return void 0==p?null:"string"===typeof(g=p)||"number"===typeof g||"boolean"===typeof g?Fe(lt,{...t,animationStyles:h,children:String(p)}):(0,Ke.isFragment)(p)?Fe(ot,{...t,animationStyles:h}):Fe(Te,{children:e.Children.map(p,((i,p)=>{if(!(0,e.isValidElement)(i))return null;const g=a+(n?p*l*r:0);switch(i.type){case"ol":case"ul":return Fe(De,{children:e=>{let{cx:n}=e;return Fe(i.type,{...i.props,className:n(u,i.props.className),style:Object.assign({},c,i.props.style),children:Fe(rt,{...t,children:i.props.children})})}});case"li":return Fe(qe,{threshold:o,triggerOnce:s,onChange:m,children:e=>{let{inView:t,ref:n}=e;return Fe(De,{children:e=>{let{cx:r}=e;return Fe(i.type,{...i.props,ref:n,className:r(f,i.props.className),css:tt((()=>h))(t),style:Object.assign({},d,i.props.style,nt(!t),{animationDelay:g+"ms"})})}})}});default:return Fe(qe,{threshold:o,triggerOnce:s,onChange:m,children:e=>{let{inView:t,ref:n}=e;return Fe("div",{ref:n,className:u,css:tt((()=>h))(t),style:Object.assign({},c,nt(!t),{animationDelay:g+"ms"}),children:Fe(De,{children:e=>{let{cx:t}=e;return Fe(i.type,{...i.props,className:t(f,i.props.className),style:Object.assign({},d,i.props.style)})}})})}})}}))});var g},at={display:"inline-block",whiteSpace:"pre"},lt=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:a=0,duration:l=1e3,fraction:o=0,triggerOnce:i=!1,className:s,style:u,children:c,onVisibilityChange:f}=e,{ref:d,inView:p}=Ge({triggerOnce:i,threshold:o,onChange:f});return et((()=>Fe("div",{ref:d,className:s,style:Object.assign({},u,at),children:c.split("").map(((e,n)=>Fe("span",{css:tt((()=>t))(p),style:{animationDelay:a+n*l*r+"ms"},children:e},n)))})),(()=>Fe(ot,{...e,children:c})))(n)},ot=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:a,style:l,children:o,onVisibilityChange:i}=e,{ref:s,inView:u}=Ge({triggerOnce:r,threshold:n,onChange:i});return Fe("div",{ref:s,className:a,css:tt((()=>t))(u),style:Object.assign({},l,nt(!u)),children:o})};Me`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Me`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,Me`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,Me`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,Me`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,Me`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,Me`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;Me`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,Me`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Me`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,Me`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,Me`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;Me`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,Me`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,Me`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;Me`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Me`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Me`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Me`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Me`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,Me`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const it=Me`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,st=Me`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ut=Me`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ct=Me`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,ft=Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,dt=Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,pt=Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,mt=Me`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;const ht=t=>{const{direction:n,reverse:r=!1,...a}=t,l=(0,e.useMemo)((()=>function(e,t){switch(t){case"down":return e?ft:it;case"right":return e?pt:ut;case"up":return e?mt:ct;default:return e?dt:st}}(r,n)),[n,r]);return Fe(rt,{keyframes:l,...a})};Me`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Me`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Me`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Me`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const gt=n.p+"static/media/home.c54f1134fa4e336fd6ce.png",vt=()=>(0,l.jsxs)("section",{className:"home bd-container bd-grid",id:"home","data-testid":"home",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:"home__data",children:(0,l.jsxs)(ht,{direction:"down",cascade:!0,triggerOnce:!0,children:[(0,l.jsx)("div",{className:"home__intro",children:(0,l.jsxs)(ht,{direction:"down",cascade:!0,triggerOnce:!0,children:[(0,l.jsxs)("h1",{className:"home__title",children:["Hi, I'm ",(0,l.jsx)("span",{className:"home__title-color",children:"Khang"})]}),(0,l.jsx)("p",{className:"home__content",children:"A Computer Science Enthusiast"})]})}),(0,l.jsx)("a",{href:"mailto:tkhang1999@gmail.com",className:"home__button",children:"Contact"})]})}),(0,l.jsx)("div",{className:"home__social",children:(0,l.jsxs)(ht,{direction:"down",cascade:!0,triggerOnce:!0,children:[(0,l.jsx)("a",{href:"https://www.linkedin.com/in/tan-khang-le/",className:"home__social-icon",children:(0,l.jsx)("i",{className:"bx bxl-linkedin"})}),(0,l.jsx)("a",{href:"https://github.com/tkhang1999",className:"home__social-icon",children:(0,l.jsx)("i",{className:"bx bxl-github"})})]})})]}),(0,l.jsx)("div",{className:"home__img",children:(0,l.jsx)("img",{src:gt,alt:""})})]}),yt=n.p+"static/media/about.02da6e71fa69c0273ef3.png",bt=()=>(0,l.jsxs)("section",{className:"about section",id:"about","data-testid":"about",children:[(0,l.jsx)("h2",{className:"section-title",children:"About"}),(0,l.jsxs)("div",{className:"about__container bd-container bd-grid",children:[(0,l.jsx)("div",{className:"about__img",children:(0,l.jsx)("img",{src:yt,alt:"about"})}),(0,l.jsxs)("div",{children:[(0,l.jsx)("h2",{className:"about__subtitle",children:"Hi there!"}),(0,l.jsxs)("p",{className:"about__text",children:["My name is Khang Le, and I am currently working as a Research Assistant at Simon Fraser University (SFU), focusing on projects related to software engineering, machine learning, and program verification.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),"Previously, I graduated from Nanyang Technological University (NTU) with a Bachelor's degree in Computer Science, followed by several professional working experiences as a software engineer. In my free time, I enjoy cooking, jogging, and playing table tennis and badminton."]})]})]})]}),At=()=>(0,l.jsxs)("section",{className:"skills section",id:"skills","data-testid":"skills",children:[(0,l.jsx)("h2",{className:"section-title",children:"Skills"}),(0,l.jsxs)("div",{className:"skills__container bd-container bd-grid",children:[(0,l.jsx)("h2",{className:"skills__subtitle",children:"Profesional Skills"}),(0,l.jsx)("p",{className:"skills__text",children:"The technology stack that I'm currently working on includes, but not limited to, Java, Python, TypeScript, React, and Docker."}),(0,l.jsxs)("div",{className:"skills__list",children:[(0,l.jsx)("div",{className:"skills__data",children:(0,l.jsxs)("div",{className:"skills__names",children:[(0,l.jsx)("i",{className:"bx bx-code skills__icon"}),(0,l.jsx)("span",{className:"skills__name",children:"Python"})]})}),(0,l.jsx)("div",{className:"skills__data",children:(0,l.jsxs)("div",{className:"skills__names",children:[(0,l.jsx)("i",{className:"bx bx-code skills__icon"}),(0,l.jsx)("span",{className:"skills__name",children:"Java"})]})}),(0,l.jsx)("div",{className:"skills__data",children:(0,l.jsxs)("div",{className:"skills__names",children:[(0,l.jsx)("i",{className:"bx bx-code skills__icon"}),(0,l.jsx)("span",{className:"skills__name",children:"JavaScript/TypeScript"})]})})]}),(0,l.jsxs)("div",{className:"skills__list",children:[(0,l.jsx)("div",{className:"skills__data",children:(0,l.jsxs)("div",{className:"skills__names",children:[(0,l.jsx)("i",{className:"bx bx-code skills__icon"}),(0,l.jsx)("span",{className:"skills__name",children:"Machine Learning/Deep Learning"})]})}),(0,l.jsx)("div",{className:"skills__data",children:(0,l.jsxs)("div",{className:"skills__names",children:[(0,l.jsx)("i",{className:"bx bx-code skills__icon"}),(0,l.jsx)("span",{className:"skills__name",children:"Full-stack Development"})]})}),(0,l.jsx)("div",{className:"skills__data",children:(0,l.jsxs)("div",{className:"skills__names",children:[(0,l.jsx)("i",{className:"bx bx-code skills__icon"}),(0,l.jsx)("span",{className:"skills__name",children:"DevOps"})]})})]})]})]}),kt=n.p+"static/media/goldman-sachs.1d802e406a8c2f6fa41f.png",wt=n.p+"static/media/paypal.04b3edb65b438fe60d98.png",xt=()=>(0,l.jsxs)("section",{className:"work section",id:"work","data-testid":"work",children:[(0,l.jsx)("h2",{className:"section-title",children:"Work Experience"}),(0,l.jsxs)("div",{className:"work__list bd-container",children:[(0,l.jsxs)("div",{className:"work__container",children:[(0,l.jsxs)("div",{className:"work__grid",children:[(0,l.jsx)("img",{className:"work__img",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAAC4jAAAuIwF4pT92AAAgAElEQVR4nO3dT2xW573g8d8dFW8MDt44gtgL2LwRJnck6jTBml4pkChmA1LTGo2aTUKRwuoSoWR1Q5Vklw4qXSUSl3TDvSPcphLe4CgFpMkMJI0HaRSM4g0s7IDijanBG1jcWRBzyV8M/M5ffz7SVXoT5ZwHYt73e57znOf8w7+v+8f/CAAA0vyXqgcAANA2AgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsAIJnAAgBIJrAAAJIJLACAZAILACCZwAIASCawAACSCSwAgGQCCwAgmcACAEgmsAAAkgksAIBkAgsA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",alt:"sfu-logo"}),(0,l.jsxs)("p",{className:"work__title",children:["Research Assistant @"," ",(0,l.jsx)("a",{className:"external__link",href:"https://www.sfu.ca/",children:"SFU"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Sep 2023 - Present"})]})]}),(0,l.jsxs)("p",{className:"work__text",children:["Conduct research on concolic/symbolic execution for Rust, formal verification of the L2CAP layer in Bluetooth, and automated program repair using LLMs.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Tech stack: Rust, Dafny, C++, Linux"})]})]}),(0,l.jsxs)("div",{className:"work__container ",children:[(0,l.jsxs)("div",{className:"work__grid",children:[(0,l.jsx)("img",{className:"work__img",src:kt,alt:"goldman-sachs-logo"}),(0,l.jsxs)("p",{className:"work__title",children:["Software Engineer @"," ",(0,l.jsx)("a",{className:"external__link",href:"https://www.goldmansachs.com/",children:"Goldman Sachs"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Jul 2021 - Aug 2023"})]})]}),(0,l.jsxs)("p",{className:"work__text",children:["Developed full-stack web applications and microservices to streamline the post-trade lifecycle in the derivatives clearing business.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Tech stack: Java, TypeScript, Spring Boot, React, SQL, Kafka, Docker"})]})]}),(0,l.jsxs)("div",{className:"work__container",children:[(0,l.jsxs)("div",{className:"work__grid",children:[(0,l.jsx)("img",{className:"work__img",src:kt,alt:"Goldman Sachs"}),(0,l.jsxs)("p",{className:"work__title",children:["Summer Analyst @"," ",(0,l.jsx)("a",{className:"external__link",href:"https://www.goldmansachs.com/",children:"Goldman Sachs"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Jul 2020 - Aug 2020"})]})]}),(0,l.jsxs)("p",{className:"work__text",children:["Built a full-stack web dashboard for memory usage monitoring of multiple applications and concurrent processes running in the firm.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Tech stack: Java, TypeScript, Spring Boot, React, Kafka"})]})]}),(0,l.jsxs)("div",{className:"work__container",children:[(0,l.jsxs)("div",{className:"work__grid",children:[(0,l.jsx)("img",{className:"work__img",src:wt,alt:"paypal-logo"}),(0,l.jsxs)("p",{className:"work__title",children:["Software Engineering Intern @"," ",(0,l.jsx)("a",{className:"external__link",href:"https://www.paypal.com/",children:"PayPal"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Aug 2019 - Dec 2019"})]})]}),(0,l.jsxs)("p",{className:"work__text",children:["Developed multiple RESTful web services in the Compliance platform and built machine learning models to detect regulatory breaches.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Tech stack: Java, Python, Spring Boot, SQL"})]})]}),(0,l.jsxs)("div",{className:"work__container",children:[(0,l.jsxs)("div",{className:"work__grid",children:[(0,l.jsx)("img",{className:"work__img",src:"data:image/png;base64,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",alt:"noviscient-logo"}),(0,l.jsxs)("p",{className:"work__title",children:["Junior Engineer @"," ",(0,l.jsx)("a",{className:"external__link",href:"https://noviscient.com/",children:"Noviscient"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"May 2019 - Aug 2019"})]})]}),(0,l.jsxs)("p",{className:"work__text",children:["Built a full-stack web application that gives investors and alpha partners access to portfolio creation and investment management tools.",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Tech stack: Python, Django, jQuery, Docker"})]})]}),(0,l.jsxs)("div",{className:"work__container",children:[(0,l.jsxs)("div",{className:"work__grid",children:[(0,l.jsx)("img",{className:"work__img",src:"data:image/png;base64,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",alt:"ackcio-logo"}),(0,l.jsxs)("p",{className:"work__title",children:["Intern Software Engineer @"," ",(0,l.jsx)("a",{className:"external__link",href:"https://www.ackcio.com/",children:"Ackcio"})," ",(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"May 2018 - Aug 2018"})]})]}),(0,l.jsxs)("p",{className:"work__text",children:["Developed a multi-threaded software running on Raspberry Pi to concurrently read and transmit serial data for real-time construction monitoring. ",(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("i",{children:"Tech stack: Python, SQL, Linux"})]})]})]})]}),Ct=()=>(0,l.jsxs)("section",{className:"projects section",id:"projects","data-testid":"projects",children:[(0,l.jsx)("h2",{className:"section-title",children:"Projects"}),(0,l.jsxs)("div",{className:"project__list",children:[(0,l.jsxs)("div",{className:"project__container bd-container",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h3",{children:"A Study of Vulnerability Repair in JavaScript Programs with Large Language Models"})}),(0,l.jsxs)("p",{className:"project__text",children:[(0,l.jsx)("u",{children:"Tan Khang Le"}),", Saba Alimadadi, and Steven Y. Ko; in"," ",(0,l.jsx)("i",{children:"Companion Proceedings of the ACM Web Conference 2024 (WWW '24 Companion)"}),", Singapore, 2024. [",(0,l.jsx)("a",{className:"external__link",href:"https://arxiv.org/abs/2403.13193",children:"paper"}),"]"]})]}),(0,l.jsxs)("div",{className:"project__container bd-container",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h3",{children:"Concolic Execution for Mid-level Intermediate Representation of Rust Programs"})}),(0,l.jsxs)("p",{className:"project__text",children:["Mohammad Omidvar Tehrani, ",(0,l.jsx)("u",{children:"Tan Khang Le"}),", Fr\xe9d\xe9ric Tuong, Marco Gaboardi, and Steven Y. Ko; in"," ",(0,l.jsx)("i",{children:"Fourth Rust Verification Workshop (RW2024)"}),", Luxembourg, 2024. [",(0,l.jsx)("a",{className:"external__link",href:"https://sites.google.com/view/rustverify2024",children:"link"}),"]"]})]}),(0,l.jsxs)("div",{className:"project__container bd-container",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h3",{children:"Machine Learning for Food Review and Recommendation"})}),(0,l.jsxs)("p",{className:"project__text",children:[(0,l.jsx)("u",{children:"Tan Khang Le"})," and Siu Cheung Hui; in"," ",(0,l.jsx)("i",{children:"International Student Conference on Artificial Intelligence (STCAI)"}),", Singapore, 2021. [",(0,l.jsx)("a",{className:"external__link",href:"https://arxiv.org/abs/2201.10978",children:"paper"}),"] [",(0,l.jsx)("a",{className:"external__link",href:"https://github.com/tkhang1999/Solr-SBERT-semantic-search",children:"demo"}),"]"]})]})]})]}),St=()=>(0,l.jsxs)("footer",{className:"footer","data-testid":"footer",children:[(0,l.jsx)("p",{className:"footer__title",children:"Khang Le"}),(0,l.jsxs)("div",{className:"footer__social",children:[(0,l.jsx)("a",{href:"mailto:tkhang1999@gmail.com",className:"footer__icon",children:(0,l.jsx)("i",{className:"bx bxs-envelope"})}),(0,l.jsx)("a",{href:"https://www.linkedin.com/in/tan-khang-le/",className:"footer__icon",children:(0,l.jsx)("i",{className:"bx bxl-linkedin"})}),(0,l.jsx)("a",{href:"https://github.com/tkhang1999",className:"footer__icon",children:(0,l.jsx)("i",{className:"bx bxl-github"})})]}),(0,l.jsx)("p",{children:"\xa9 2021 handcrafted by Khang Le"})]}),Et=()=>{const[t,n]=(0,e.useState)(!1);return(0,l.jsxs)("div",{children:[(0,l.jsx)("header",{className:"l-header",children:(0,l.jsx)(s,{isMenuOpen:t,setIsMenuOpen:n})}),(0,l.jsxs)("main",{className:"l-main",onClick:()=>{t&&n(!1)},children:[(0,l.jsx)(vt,{}),(0,l.jsx)(bt,{}),(0,l.jsx)(At,{}),(0,l.jsx)(xt,{}),(0,l.jsx)(Ct,{})]}),(0,l.jsx)(St,{})]})},Nt=e=>{e&&e instanceof Function&&n.e(488).then(n.bind(n,488)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:l,getTTFB:o}=t;n(e),r(e),a(e),l(e),o(e)}))};r.render((0,l.jsx)(e.StrictMode,{children:(0,l.jsx)(Et,{})}),document.getElementById("root")),Nt()})()})();
//# sourceMappingURL=main.636a115a.js.map