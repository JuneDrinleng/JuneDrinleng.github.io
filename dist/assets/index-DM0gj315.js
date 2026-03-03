function H3(e,n){for(var t=0;t<n.length;t++){const i=n[t];if(typeof i!="string"&&!Array.isArray(i)){for(const l in i)if(l!=="default"&&!(l in e)){const o=Object.getOwnPropertyDescriptor(i,l);o&&Object.defineProperty(e,l,o.get?o:{enumerable:!0,get:()=>i[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const o of l)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(l){const o={};return l.integrity&&(o.integrity=l.integrity),l.referrerPolicy&&(o.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?o.credentials="include":l.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(l){if(l.ep)return;l.ep=!0;const o=t(l);fetch(l.href,o)}})();function M1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var uc={exports:{}},Ul={},cc={exports:{}},rn={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function q3(){if(Yp)return rn;Yp=1;var e=Symbol.for("react.element"),n=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),s=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),d=Symbol.iterator;function w(F){return F===null||typeof F!="object"?null:(F=d&&F[d]||F["@@iterator"],typeof F=="function"?F:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,_={};function T(F,Q,A){this.props=F,this.context=Q,this.refs=_,this.updater=A||b}T.prototype.isReactComponent={},T.prototype.setState=function(F,Q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,Q,"setState")},T.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function E(){}E.prototype=T.prototype;function z(F,Q,A){this.props=F,this.context=Q,this.refs=_,this.updater=A||b}var O=z.prototype=new E;O.constructor=z,D(O,T.prototype),O.isPureReactComponent=!0;var ne=Array.isArray,K=Object.prototype.hasOwnProperty,H={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function re(F,Q,A){var Te,ze={},Ae=null,Ke=null;if(Q!=null)for(Te in Q.ref!==void 0&&(Ke=Q.ref),Q.key!==void 0&&(Ae=""+Q.key),Q)K.call(Q,Te)&&!I.hasOwnProperty(Te)&&(ze[Te]=Q[Te]);var Ve=arguments.length-2;if(Ve===1)ze.children=A;else if(1<Ve){for(var tn=Array(Ve),bn=0;bn<Ve;bn++)tn[bn]=arguments[bn+2];ze.children=tn}if(F&&F.defaultProps)for(Te in Ve=F.defaultProps,Ve)ze[Te]===void 0&&(ze[Te]=Ve[Te]);return{$$typeof:e,type:F,key:Ae,ref:Ke,props:ze,_owner:H.current}}function ee(F,Q){return{$$typeof:e,type:F.type,key:Q,ref:F.ref,props:F.props,_owner:F._owner}}function U(F){return typeof F=="object"&&F!==null&&F.$$typeof===e}function ie(F){var Q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(A){return Q[A]})}var le=/\/+/g;function Le(F,Q){return typeof F=="object"&&F!==null&&F.key!=null?ie(""+F.key):Q.toString(36)}function me(F,Q,A,Te,ze){var Ae=typeof F;(Ae==="undefined"||Ae==="boolean")&&(F=null);var Ke=!1;if(F===null)Ke=!0;else switch(Ae){case"string":case"number":Ke=!0;break;case"object":switch(F.$$typeof){case e:case n:Ke=!0}}if(Ke)return Ke=F,ze=ze(Ke),F=Te===""?"."+Le(Ke,0):Te,ne(ze)?(A="",F!=null&&(A=F.replace(le,"$&/")+"/"),me(ze,Q,A,"",function(bn){return bn})):ze!=null&&(U(ze)&&(ze=ee(ze,A+(!ze.key||Ke&&Ke.key===ze.key?"":(""+ze.key).replace(le,"$&/")+"/")+F)),Q.push(ze)),1;if(Ke=0,Te=Te===""?".":Te+":",ne(F))for(var Ve=0;Ve<F.length;Ve++){Ae=F[Ve];var tn=Te+Le(Ae,Ve);Ke+=me(Ae,Q,A,tn,ze)}else if(tn=w(F),typeof tn=="function")for(F=tn.call(F),Ve=0;!(Ae=F.next()).done;)Ae=Ae.value,tn=Te+Le(Ae,Ve++),Ke+=me(Ae,Q,A,tn,ze);else if(Ae==="object")throw Q=String(F),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.");return Ke}function ae(F,Q,A){if(F==null)return F;var Te=[],ze=0;return me(F,Te,"","",function(Ae){return Q.call(A,Ae,ze++)}),Te}function xe(F){if(F._status===-1){var Q=F._result;Q=Q(),Q.then(function(A){(F._status===0||F._status===-1)&&(F._status=1,F._result=A)},function(A){(F._status===0||F._status===-1)&&(F._status=2,F._result=A)}),F._status===-1&&(F._status=0,F._result=Q)}if(F._status===1)return F._result.default;throw F._result}var De={current:null},te={transition:null},ke={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:te,ReactCurrentOwner:H};function M(){throw Error("act(...) is not supported in production builds of React.")}return rn.Children={map:ae,forEach:function(F,Q,A){ae(F,function(){Q.apply(this,arguments)},A)},count:function(F){var Q=0;return ae(F,function(){Q++}),Q},toArray:function(F){return ae(F,function(Q){return Q})||[]},only:function(F){if(!U(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},rn.Component=T,rn.Fragment=t,rn.Profiler=l,rn.PureComponent=z,rn.StrictMode=i,rn.Suspense=h,rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ke,rn.act=M,rn.cloneElement=function(F,Q,A){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Te=D({},F.props),ze=F.key,Ae=F.ref,Ke=F._owner;if(Q!=null){if(Q.ref!==void 0&&(Ae=Q.ref,Ke=H.current),Q.key!==void 0&&(ze=""+Q.key),F.type&&F.type.defaultProps)var Ve=F.type.defaultProps;for(tn in Q)K.call(Q,tn)&&!I.hasOwnProperty(tn)&&(Te[tn]=Q[tn]===void 0&&Ve!==void 0?Ve[tn]:Q[tn])}var tn=arguments.length-2;if(tn===1)Te.children=A;else if(1<tn){Ve=Array(tn);for(var bn=0;bn<tn;bn++)Ve[bn]=arguments[bn+2];Te.children=Ve}return{$$typeof:e,type:F.type,key:ze,ref:Ae,props:Te,_owner:Ke}},rn.createContext=function(F){return F={$$typeof:s,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},rn.createElement=re,rn.createFactory=function(F){var Q=re.bind(null,F);return Q.type=F,Q},rn.createRef=function(){return{current:null}},rn.forwardRef=function(F){return{$$typeof:c,render:F}},rn.isValidElement=U,rn.lazy=function(F){return{$$typeof:f,_payload:{_status:-1,_result:F},_init:xe}},rn.memo=function(F,Q){return{$$typeof:p,type:F,compare:Q===void 0?null:Q}},rn.startTransition=function(F){var Q=te.transition;te.transition={};try{F()}finally{te.transition=Q}},rn.unstable_act=M,rn.useCallback=function(F,Q){return De.current.useCallback(F,Q)},rn.useContext=function(F){return De.current.useContext(F)},rn.useDebugValue=function(){},rn.useDeferredValue=function(F){return De.current.useDeferredValue(F)},rn.useEffect=function(F,Q){return De.current.useEffect(F,Q)},rn.useId=function(){return De.current.useId()},rn.useImperativeHandle=function(F,Q,A){return De.current.useImperativeHandle(F,Q,A)},rn.useInsertionEffect=function(F,Q){return De.current.useInsertionEffect(F,Q)},rn.useLayoutEffect=function(F,Q){return De.current.useLayoutEffect(F,Q)},rn.useMemo=function(F,Q){return De.current.useMemo(F,Q)},rn.useReducer=function(F,Q,A){return De.current.useReducer(F,Q,A)},rn.useRef=function(F){return De.current.useRef(F)},rn.useState=function(F){return De.current.useState(F)},rn.useSyncExternalStore=function(F,Q,A){return De.current.useSyncExternalStore(F,Q,A)},rn.useTransition=function(){return De.current.useTransition()},rn.version="18.3.1",rn}var Qp;function E1(){return Qp||(Qp=1,cc.exports=q3()),cc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function U3(){if(Kp)return Ul;Kp=1;var e=E1(),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(c,h,p){var f,d={},w=null,b=null;p!==void 0&&(w=""+p),h.key!==void 0&&(w=""+h.key),h.ref!==void 0&&(b=h.ref);for(f in h)i.call(h,f)&&!o.hasOwnProperty(f)&&(d[f]=h[f]);if(c&&c.defaultProps)for(f in h=c.defaultProps,h)d[f]===void 0&&(d[f]=h[f]);return{$$typeof:n,type:c,key:w,ref:b,props:d,_owner:l.current}}return Ul.Fragment=t,Ul.jsx=s,Ul.jsxs=s,Ul}var Zp;function V3(){return Zp||(Zp=1,uc.exports=U3()),uc.exports}var R=V3(),Ns={},hc={exports:{}},Lt={},mc={exports:{}},pc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ed;function W3(){return ed||(ed=1,(function(e){function n(te,ke){var M=te.length;te.push(ke);e:for(;0<M;){var F=M-1>>>1,Q=te[F];if(0<l(Q,ke))te[F]=ke,te[M]=Q,M=F;else break e}}function t(te){return te.length===0?null:te[0]}function i(te){if(te.length===0)return null;var ke=te[0],M=te.pop();if(M!==ke){te[0]=M;e:for(var F=0,Q=te.length,A=Q>>>1;F<A;){var Te=2*(F+1)-1,ze=te[Te],Ae=Te+1,Ke=te[Ae];if(0>l(ze,M))Ae<Q&&0>l(Ke,ze)?(te[F]=Ke,te[Ae]=M,F=Ae):(te[F]=ze,te[Te]=M,F=Te);else if(Ae<Q&&0>l(Ke,M))te[F]=Ke,te[Ae]=M,F=Ae;else break e}}return ke}function l(te,ke){var M=te.sortIndex-ke.sortIndex;return M!==0?M:te.id-ke.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,c=s.now();e.unstable_now=function(){return s.now()-c}}var h=[],p=[],f=1,d=null,w=3,b=!1,D=!1,_=!1,T=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,z=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function O(te){for(var ke=t(p);ke!==null;){if(ke.callback===null)i(p);else if(ke.startTime<=te)i(p),ke.sortIndex=ke.expirationTime,n(h,ke);else break;ke=t(p)}}function ne(te){if(_=!1,O(te),!D)if(t(h)!==null)D=!0,xe(K);else{var ke=t(p);ke!==null&&De(ne,ke.startTime-te)}}function K(te,ke){D=!1,_&&(_=!1,E(re),re=-1),b=!0;var M=w;try{for(O(ke),d=t(h);d!==null&&(!(d.expirationTime>ke)||te&&!ie());){var F=d.callback;if(typeof F=="function"){d.callback=null,w=d.priorityLevel;var Q=F(d.expirationTime<=ke);ke=e.unstable_now(),typeof Q=="function"?d.callback=Q:d===t(h)&&i(h),O(ke)}else i(h);d=t(h)}if(d!==null)var A=!0;else{var Te=t(p);Te!==null&&De(ne,Te.startTime-ke),A=!1}return A}finally{d=null,w=M,b=!1}}var H=!1,I=null,re=-1,ee=5,U=-1;function ie(){return!(e.unstable_now()-U<ee)}function le(){if(I!==null){var te=e.unstable_now();U=te;var ke=!0;try{ke=I(!0,te)}finally{ke?Le():(H=!1,I=null)}}else H=!1}var Le;if(typeof z=="function")Le=function(){z(le)};else if(typeof MessageChannel<"u"){var me=new MessageChannel,ae=me.port2;me.port1.onmessage=le,Le=function(){ae.postMessage(null)}}else Le=function(){T(le,0)};function xe(te){I=te,H||(H=!0,Le())}function De(te,ke){re=T(function(){te(e.unstable_now())},ke)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(te){te.callback=null},e.unstable_continueExecution=function(){D||b||(D=!0,xe(K))},e.unstable_forceFrameRate=function(te){0>te||125<te?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<te?Math.floor(1e3/te):5},e.unstable_getCurrentPriorityLevel=function(){return w},e.unstable_getFirstCallbackNode=function(){return t(h)},e.unstable_next=function(te){switch(w){case 1:case 2:case 3:var ke=3;break;default:ke=w}var M=w;w=ke;try{return te()}finally{w=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(te,ke){switch(te){case 1:case 2:case 3:case 4:case 5:break;default:te=3}var M=w;w=te;try{return ke()}finally{w=M}},e.unstable_scheduleCallback=function(te,ke,M){var F=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?F+M:F):M=F,te){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=M+Q,te={id:f++,callback:ke,priorityLevel:te,startTime:M,expirationTime:Q,sortIndex:-1},M>F?(te.sortIndex=M,n(p,te),t(h)===null&&te===t(p)&&(_?(E(re),re=-1):_=!0,De(ne,M-F))):(te.sortIndex=Q,n(h,te),D||b||(D=!0,xe(K))),te},e.unstable_shouldYield=ie,e.unstable_wrapCallback=function(te){var ke=w;return function(){var M=w;w=ke;try{return te.apply(this,arguments)}finally{w=M}}}})(pc)),pc}var nd;function G3(){return nd||(nd=1,mc.exports=W3()),mc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var td;function X3(){if(td)return Lt;td=1;var e=E1(),n=G3();function t(r){for(var a="https://reactjs.org/docs/error-decoder.html?invariant="+r,u=1;u<arguments.length;u++)a+="&args[]="+encodeURIComponent(arguments[u]);return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function o(r,a){s(r,a),s(r+"Capture",a)}function s(r,a){for(l[r]=a,r=0;r<a.length;r++)i.add(a[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},d={};function w(r){return h.call(d,r)?!0:h.call(f,r)?!1:p.test(r)?d[r]=!0:(f[r]=!0,!1)}function b(r,a,u,m){if(u!==null&&u.type===0)return!1;switch(typeof a){case"function":case"symbol":return!0;case"boolean":return m?!1:u!==null?!u.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function D(r,a,u,m){if(a===null||typeof a>"u"||b(r,a,u,m))return!0;if(m)return!1;if(u!==null)switch(u.type){case 3:return!a;case 4:return a===!1;case 5:return isNaN(a);case 6:return isNaN(a)||1>a}return!1}function _(r,a,u,m,g,y,S){this.acceptsBooleans=a===2||a===3||a===4,this.attributeName=m,this.attributeNamespace=g,this.mustUseProperty=u,this.propertyName=r,this.type=a,this.sanitizeURL=y,this.removeEmptyString=S}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){T[r]=new _(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var a=r[0];T[a]=new _(a,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){T[r]=new _(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){T[r]=new _(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){T[r]=new _(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){T[r]=new _(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){T[r]=new _(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){T[r]=new _(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){T[r]=new _(r,5,!1,r.toLowerCase(),null,!1,!1)});var E=/[\-:]([a-z])/g;function z(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var a=r.replace(E,z);T[a]=new _(a,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var a=r.replace(E,z);T[a]=new _(a,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var a=r.replace(E,z);T[a]=new _(a,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){T[r]=new _(r,1,!1,r.toLowerCase(),null,!1,!1)}),T.xlinkHref=new _("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){T[r]=new _(r,1,!1,r.toLowerCase(),null,!0,!0)});function O(r,a,u,m){var g=T.hasOwnProperty(a)?T[a]:null;(g!==null?g.type!==0:m||!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(D(a,u,g,m)&&(u=null),m||g===null?w(a)&&(u===null?r.removeAttribute(a):r.setAttribute(a,""+u)):g.mustUseProperty?r[g.propertyName]=u===null?g.type===3?!1:"":u:(a=g.attributeName,m=g.attributeNamespace,u===null?r.removeAttribute(a):(g=g.type,u=g===3||g===4&&u===!0?"":""+u,m?r.setAttributeNS(m,a,u):r.setAttribute(a,u))))}var ne=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,K=Symbol.for("react.element"),H=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),re=Symbol.for("react.strict_mode"),ee=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),ie=Symbol.for("react.context"),le=Symbol.for("react.forward_ref"),Le=Symbol.for("react.suspense"),me=Symbol.for("react.suspense_list"),ae=Symbol.for("react.memo"),xe=Symbol.for("react.lazy"),De=Symbol.for("react.offscreen"),te=Symbol.iterator;function ke(r){return r===null||typeof r!="object"?null:(r=te&&r[te]||r["@@iterator"],typeof r=="function"?r:null)}var M=Object.assign,F;function Q(r){if(F===void 0)try{throw Error()}catch(u){var a=u.stack.trim().match(/\n( *(at )?)/);F=a&&a[1]||""}return`
`+F+r}var A=!1;function Te(r,a){if(!r||A)return"";A=!0;var u=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(a)if(a=function(){throw Error()},Object.defineProperty(a.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(a,[])}catch(X){var m=X}Reflect.construct(r,[],a)}else{try{a.call()}catch(X){m=X}r.call(a.prototype)}else{try{throw Error()}catch(X){m=X}r()}}catch(X){if(X&&m&&typeof X.stack=="string"){for(var g=X.stack.split(`
`),y=m.stack.split(`
`),S=g.length-1,P=y.length-1;1<=S&&0<=P&&g[S]!==y[P];)P--;for(;1<=S&&0<=P;S--,P--)if(g[S]!==y[P]){if(S!==1||P!==1)do if(S--,P--,0>P||g[S]!==y[P]){var j=`
`+g[S].replace(" at new "," at ");return r.displayName&&j.includes("<anonymous>")&&(j=j.replace("<anonymous>",r.displayName)),j}while(1<=S&&0<=P);break}}}finally{A=!1,Error.prepareStackTrace=u}return(r=r?r.displayName||r.name:"")?Q(r):""}function ze(r){switch(r.tag){case 5:return Q(r.type);case 16:return Q("Lazy");case 13:return Q("Suspense");case 19:return Q("SuspenseList");case 0:case 2:case 15:return r=Te(r.type,!1),r;case 11:return r=Te(r.type.render,!1),r;case 1:return r=Te(r.type,!0),r;default:return""}}function Ae(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case I:return"Fragment";case H:return"Portal";case ee:return"Profiler";case re:return"StrictMode";case Le:return"Suspense";case me:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case ie:return(r.displayName||"Context")+".Consumer";case U:return(r._context.displayName||"Context")+".Provider";case le:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case ae:return a=r.displayName||null,a!==null?a:Ae(r.type)||"Memo";case xe:a=r._payload,r=r._init;try{return Ae(r(a))}catch{}}return null}function Ke(r){var a=r.type;switch(r.tag){case 24:return"Cache";case 9:return(a.displayName||"Context")+".Consumer";case 10:return(a._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=a.render,r=r.displayName||r.name||"",a.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return a;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ae(a);case 8:return a===re?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof a=="function")return a.displayName||a.name||null;if(typeof a=="string")return a}return null}function Ve(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function tn(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function bn(r){var a=tn(r)?"checked":"value",u=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),m=""+r[a];if(!r.hasOwnProperty(a)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var g=u.get,y=u.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return g.call(this)},set:function(S){m=""+S,y.call(this,S)}}),Object.defineProperty(r,a,{enumerable:u.enumerable}),{getValue:function(){return m},setValue:function(S){m=""+S},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function at(r){r._valueTracker||(r._valueTracker=bn(r))}function zn(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var u=a.getValue(),m="";return r&&(m=tn(r)?r.checked?"true":"false":r.value),r=m,r!==u?(a.setValue(r),!0):!1}function lt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function kr(r,a){var u=a.checked;return M({},a,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:u??r._wrapperState.initialChecked})}function Br(r,a){var u=a.defaultValue==null?"":a.defaultValue,m=a.checked!=null?a.checked:a.defaultChecked;u=Ve(a.value!=null?a.value:u),r._wrapperState={initialChecked:m,initialValue:u,controlled:a.type==="checkbox"||a.type==="radio"?a.checked!=null:a.value!=null}}function tt(r,a){a=a.checked,a!=null&&O(r,"checked",a,!1)}function dr(r,a){tt(r,a);var u=Ve(a.value),m=a.type;if(u!=null)m==="number"?(u===0&&r.value===""||r.value!=u)&&(r.value=""+u):r.value!==""+u&&(r.value=""+u);else if(m==="submit"||m==="reset"){r.removeAttribute("value");return}a.hasOwnProperty("value")?Ft(r,a.type,u):a.hasOwnProperty("defaultValue")&&Ft(r,a.type,Ve(a.defaultValue)),a.checked==null&&a.defaultChecked!=null&&(r.defaultChecked=!!a.defaultChecked)}function $r(r,a,u){if(a.hasOwnProperty("value")||a.hasOwnProperty("defaultValue")){var m=a.type;if(!(m!=="submit"&&m!=="reset"||a.value!==void 0&&a.value!==null))return;a=""+r._wrapperState.initialValue,u||a===r.value||(r.value=a),r.defaultValue=a}u=r.name,u!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,u!==""&&(r.name=u)}function Ft(r,a,u){(a!=="number"||lt(r.ownerDocument)!==r)&&(u==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+u&&(r.defaultValue=""+u))}var ft=Array.isArray;function gt(r,a,u,m){if(r=r.options,a){a={};for(var g=0;g<u.length;g++)a["$"+u[g]]=!0;for(u=0;u<r.length;u++)g=a.hasOwnProperty("$"+r[u].value),r[u].selected!==g&&(r[u].selected=g),g&&m&&(r[u].defaultSelected=!0)}else{for(u=""+Ve(u),a=null,g=0;g<r.length;g++){if(r[g].value===u){r[g].selected=!0,m&&(r[g].defaultSelected=!0);return}a!==null||r[g].disabled||(a=r[g])}a!==null&&(a.selected=!0)}}function Wi(r,a){if(a.dangerouslySetInnerHTML!=null)throw Error(t(91));return M({},a,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function ka(r,a){var u=a.value;if(u==null){if(u=a.children,a=a.defaultValue,u!=null){if(a!=null)throw Error(t(92));if(ft(u)){if(1<u.length)throw Error(t(93));u=u[0]}a=u}a==null&&(a=""),u=a}r._wrapperState={initialValue:Ve(u)}}function Kt(r,a){var u=Ve(a.value),m=Ve(a.defaultValue);u!=null&&(u=""+u,u!==r.value&&(r.value=u),a.defaultValue==null&&r.defaultValue!==u&&(r.defaultValue=u)),m!=null&&(r.defaultValue=""+m)}function Sr(r){var a=r.textContent;a===r._wrapperState.initialValue&&a!==""&&a!==null&&(r.value=a)}function Z(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ye(r,a){return r==null||r==="http://www.w3.org/1999/xhtml"?Z(a):r==="http://www.w3.org/2000/svg"&&a==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Be,We=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(a,u,m,g){MSApp.execUnsafeLocalFunction(function(){return r(a,u,m,g)})}:r})(function(r,a){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=a;else{for(Be=Be||document.createElement("div"),Be.innerHTML="<svg>"+a.valueOf().toString()+"</svg>",a=Be.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;a.firstChild;)r.appendChild(a.firstChild)}});function un(r,a){if(a){var u=r.firstChild;if(u&&u===r.lastChild&&u.nodeType===3){u.nodeValue=a;return}}r.textContent=a}var Wn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ot=["Webkit","ms","Moz","O"];Object.keys(Wn).forEach(function(r){Ot.forEach(function(a){a=a+r.charAt(0).toUpperCase()+r.substring(1),Wn[a]=Wn[r]})});function Mt(r,a,u){return a==null||typeof a=="boolean"||a===""?"":u||typeof a!="number"||a===0||Wn.hasOwnProperty(r)&&Wn[r]?(""+a).trim():a+"px"}function Qn(r,a){r=r.style;for(var u in a)if(a.hasOwnProperty(u)){var m=u.indexOf("--")===0,g=Mt(u,a[u],m);u==="float"&&(u="cssFloat"),m?r.setProperty(u,g):r[u]=g}}var Dr=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function On(r,a){if(a){if(Dr[r]&&(a.children!=null||a.dangerouslySetInnerHTML!=null))throw Error(t(137,r));if(a.dangerouslySetInnerHTML!=null){if(a.children!=null)throw Error(t(60));if(typeof a.dangerouslySetInnerHTML!="object"||!("__html"in a.dangerouslySetInnerHTML))throw Error(t(61))}if(a.style!=null&&typeof a.style!="object")throw Error(t(62))}}function Bt(r,a){if(r.indexOf("-")===-1)return typeof a.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function Sa(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ci=null,Hr=null,Cr=null;function zo(r){if(r=zl(r)){if(typeof ci!="function")throw Error(t(280));var a=r.stateNode;a&&(a=Go(a),ci(r.stateNode,r.type,a))}}function ul(r){Hr?Cr?Cr.push(r):Cr=[r]:Hr=r}function Ao(){if(Hr){var r=Hr,a=Cr;if(Cr=Hr=null,zo(r),a)for(r=0;r<a.length;r++)zo(a[r])}}function cl(r,a){return r(a)}function Gi(){}var hi=!1;function hl(r,a,u){if(hi)return r(a,u);hi=!0;try{return cl(r,a,u)}finally{hi=!1,(Hr!==null||Cr!==null)&&(Gi(),Ao())}}function Xi(r,a){var u=r.stateNode;if(u===null)return null;var m=Go(u);if(m===null)return null;u=m[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(m=!m.disabled)||(r=r.type,m=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!m;break e;default:r=!1}if(r)return null;if(u&&typeof u!="function")throw Error(t(231,a,typeof u));return u}var ml=!1;if(c)try{var J={};Object.defineProperty(J,"passive",{get:function(){ml=!0}}),window.addEventListener("test",J,J),window.removeEventListener("test",J,J)}catch{ml=!1}function q(r,a,u,m,g,y,S,P,j){var X=Array.prototype.slice.call(arguments,3);try{a.apply(u,X)}catch(ce){this.onError(ce)}}var G=!1,ue=null,be=!1,Ie=null,$e={onError:function(r){G=!0,ue=r}};function Me(r,a,u,m,g,y,S,P,j){G=!1,ue=null,q.apply($e,arguments)}function Pe(r,a,u,m,g,y,S,P,j){if(Me.apply(this,arguments),G){if(G){var X=ue;G=!1,ue=null}else throw Error(t(198));be||(be=!0,Ie=X)}}function Je(r){var a=r,u=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(u=a.return),r=a.return;while(r)}return a.tag===3?u:null}function Ye(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function Fe(r){if(Je(r)!==r)throw Error(t(188))}function Ze(r){var a=r.alternate;if(!a){if(a=Je(r),a===null)throw Error(t(188));return a!==r?null:r}for(var u=r,m=a;;){var g=u.return;if(g===null)break;var y=g.alternate;if(y===null){if(m=g.return,m!==null){u=m;continue}break}if(g.child===y.child){for(y=g.child;y;){if(y===u)return Fe(g),r;if(y===m)return Fe(g),a;y=y.sibling}throw Error(t(188))}if(u.return!==m.return)u=g,m=y;else{for(var S=!1,P=g.child;P;){if(P===u){S=!0,u=g,m=y;break}if(P===m){S=!0,m=g,u=y;break}P=P.sibling}if(!S){for(P=y.child;P;){if(P===u){S=!0,u=y,m=g;break}if(P===m){S=!0,m=y,u=g;break}P=P.sibling}if(!S)throw Error(t(189))}}if(u.alternate!==m)throw Error(t(190))}if(u.tag!==3)throw Error(t(188));return u.stateNode.current===u?r:a}function on(r){return r=Ze(r),r!==null?Bn(r):null}function Bn(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var a=Bn(r);if(a!==null)return a;r=r.sibling}return null}var In=n.unstable_scheduleCallback,Kn=n.unstable_cancelCallback,fn=n.unstable_shouldYield,Et=n.unstable_requestPaint,gn=n.unstable_now,Yi=n.unstable_getCurrentPriorityLevel,Zt=n.unstable_ImmediatePriority,$t=n.unstable_UserBlockingPriority,mi=n.unstable_NormalPriority,Qi=n.unstable_LowPriority,_r=n.unstable_IdlePriority,qr=null,yt=null;function cn(r){if(yt&&typeof yt.onCommitFiberRoot=="function")try{yt.onCommitFiberRoot(qr,r,void 0,(r.current.flags&128)===128)}catch{}}var yn=Math.clz32?Math.clz32:Mn,pi=Math.log,Ur=Math.LN2;function Mn(r){return r>>>=0,r===0?32:31-(pi(r)/Ur|0)|0}var Vr=64,Ki=4194304;function Zi(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Po(r,a){var u=r.pendingLanes;if(u===0)return 0;var m=0,g=r.suspendedLanes,y=r.pingedLanes,S=u&268435455;if(S!==0){var P=S&~g;P!==0?m=Zi(P):(y&=S,y!==0&&(m=Zi(y)))}else S=u&~g,S!==0?m=Zi(S):y!==0&&(m=Zi(y));if(m===0)return 0;if(a!==0&&a!==m&&(a&g)===0&&(g=m&-m,y=a&-a,g>=y||g===16&&(y&4194240)!==0))return a;if((m&4)!==0&&(m|=u&16),a=r.entangledLanes,a!==0)for(r=r.entanglements,a&=m;0<a;)u=31-yn(a),g=1<<u,m|=r[u],a&=~g;return m}function s5(r,a){switch(r){case 1:case 2:case 4:return a+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function u5(r,a){for(var u=r.suspendedLanes,m=r.pingedLanes,g=r.expirationTimes,y=r.pendingLanes;0<y;){var S=31-yn(y),P=1<<S,j=g[S];j===-1?((P&u)===0||(P&m)!==0)&&(g[S]=s5(P,a)):j<=a&&(r.expiredLanes|=P),y&=~P}}function z0(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Mh(){var r=Vr;return Vr<<=1,(Vr&4194240)===0&&(Vr=64),r}function A0(r){for(var a=[],u=0;31>u;u++)a.push(r);return a}function pl(r,a,u){r.pendingLanes|=a,a!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,a=31-yn(a),r[a]=u}function c5(r,a){var u=r.pendingLanes&~a;r.pendingLanes=a,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=a,r.mutableReadLanes&=a,r.entangledLanes&=a,a=r.entanglements;var m=r.eventTimes;for(r=r.expirationTimes;0<u;){var g=31-yn(u),y=1<<g;a[g]=0,m[g]=-1,r[g]=-1,u&=~y}}function P0(r,a){var u=r.entangledLanes|=a;for(r=r.entanglements;u;){var m=31-yn(u),g=1<<m;g&a|r[m]&a&&(r[m]|=a),u&=~g}}var vn=0;function Eh(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var Th,N0,zh,Ah,Ph,L0=!1,No=[],di=null,fi=null,gi=null,dl=new Map,fl=new Map,vi=[],h5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nh(r,a){switch(r){case"focusin":case"focusout":di=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":gi=null;break;case"pointerover":case"pointerout":dl.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":fl.delete(a.pointerId)}}function gl(r,a,u,m,g,y){return r===null||r.nativeEvent!==y?(r={blockedOn:a,domEventName:u,eventSystemFlags:m,nativeEvent:y,targetContainers:[g]},a!==null&&(a=zl(a),a!==null&&N0(a)),r):(r.eventSystemFlags|=m,a=r.targetContainers,g!==null&&a.indexOf(g)===-1&&a.push(g),r)}function m5(r,a,u,m,g){switch(a){case"focusin":return di=gl(di,r,a,u,m,g),!0;case"dragenter":return fi=gl(fi,r,a,u,m,g),!0;case"mouseover":return gi=gl(gi,r,a,u,m,g),!0;case"pointerover":var y=g.pointerId;return dl.set(y,gl(dl.get(y)||null,r,a,u,m,g)),!0;case"gotpointercapture":return y=g.pointerId,fl.set(y,gl(fl.get(y)||null,r,a,u,m,g)),!0}return!1}function Lh(r){var a=ea(r.target);if(a!==null){var u=Je(a);if(u!==null){if(a=u.tag,a===13){if(a=Ye(u),a!==null){r.blockedOn=a,Ph(r.priority,function(){zh(u)});return}}else if(a===3&&u.stateNode.current.memoizedState.isDehydrated){r.blockedOn=u.tag===3?u.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Lo(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var u=R0(r.domEventName,r.eventSystemFlags,a[0],r.nativeEvent);if(u===null){u=r.nativeEvent;var m=new u.constructor(u.type,u);vt=m,u.target.dispatchEvent(m),vt=null}else return a=zl(u),a!==null&&N0(a),r.blockedOn=u,!1;a.shift()}return!0}function Jh(r,a,u){Lo(r)&&u.delete(a)}function p5(){L0=!1,di!==null&&Lo(di)&&(di=null),fi!==null&&Lo(fi)&&(fi=null),gi!==null&&Lo(gi)&&(gi=null),dl.forEach(Jh),fl.forEach(Jh)}function vl(r,a){r.blockedOn===a&&(r.blockedOn=null,L0||(L0=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,p5)))}function yl(r){function a(g){return vl(g,r)}if(0<No.length){vl(No[0],r);for(var u=1;u<No.length;u++){var m=No[u];m.blockedOn===r&&(m.blockedOn=null)}}for(di!==null&&vl(di,r),fi!==null&&vl(fi,r),gi!==null&&vl(gi,r),dl.forEach(a),fl.forEach(a),u=0;u<vi.length;u++)m=vi[u],m.blockedOn===r&&(m.blockedOn=null);for(;0<vi.length&&(u=vi[0],u.blockedOn===null);)Lh(u),u.blockedOn===null&&vi.shift()}var Da=ne.ReactCurrentBatchConfig,Jo=!0;function d5(r,a,u,m){var g=vn,y=Da.transition;Da.transition=null;try{vn=1,J0(r,a,u,m)}finally{vn=g,Da.transition=y}}function f5(r,a,u,m){var g=vn,y=Da.transition;Da.transition=null;try{vn=4,J0(r,a,u,m)}finally{vn=g,Da.transition=y}}function J0(r,a,u,m){if(Jo){var g=R0(r,a,u,m);if(g===null)Z0(r,a,m,Ro,u),Nh(r,m);else if(m5(g,r,a,u,m))m.stopPropagation();else if(Nh(r,m),a&4&&-1<h5.indexOf(r)){for(;g!==null;){var y=zl(g);if(y!==null&&Th(y),y=R0(r,a,u,m),y===null&&Z0(r,a,m,Ro,u),y===g)break;g=y}g!==null&&m.stopPropagation()}else Z0(r,a,m,null,u)}}var Ro=null;function R0(r,a,u,m){if(Ro=null,r=Sa(m),r=ea(r),r!==null)if(a=Je(r),a===null)r=null;else if(u=a.tag,u===13){if(r=Ye(a),r!==null)return r;r=null}else if(u===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null);return Ro=r,null}function Rh(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yi()){case Zt:return 1;case $t:return 4;case mi:case Qi:return 16;case _r:return 536870912;default:return 16}default:return 16}}var yi=null,I0=null,Io=null;function Ih(){if(Io)return Io;var r,a=I0,u=a.length,m,g="value"in yi?yi.value:yi.textContent,y=g.length;for(r=0;r<u&&a[r]===g[r];r++);var S=u-r;for(m=1;m<=S&&a[u-m]===g[y-m];m++);return Io=g.slice(r,1<m?1-m:void 0)}function jo(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function Fo(){return!0}function jh(){return!1}function Ht(r){function a(u,m,g,y,S){this._reactName=u,this._targetInst=g,this.type=m,this.nativeEvent=y,this.target=S,this.currentTarget=null;for(var P in r)r.hasOwnProperty(P)&&(u=r[P],this[P]=u?u(y):y[P]);return this.isDefaultPrevented=(y.defaultPrevented!=null?y.defaultPrevented:y.returnValue===!1)?Fo:jh,this.isPropagationStopped=jh,this}return M(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var u=this.nativeEvent;u&&(u.preventDefault?u.preventDefault():typeof u.returnValue!="unknown"&&(u.returnValue=!1),this.isDefaultPrevented=Fo)},stopPropagation:function(){var u=this.nativeEvent;u&&(u.stopPropagation?u.stopPropagation():typeof u.cancelBubble!="unknown"&&(u.cancelBubble=!0),this.isPropagationStopped=Fo)},persist:function(){},isPersistent:Fo}),a}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},j0=Ht(Ca),bl=M({},Ca,{view:0,detail:0}),g5=Ht(bl),F0,O0,wl,Oo=M({},bl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$0,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==wl&&(wl&&r.type==="mousemove"?(F0=r.screenX-wl.screenX,O0=r.screenY-wl.screenY):O0=F0=0,wl=r),F0)},movementY:function(r){return"movementY"in r?r.movementY:O0}}),Fh=Ht(Oo),v5=M({},Oo,{dataTransfer:0}),y5=Ht(v5),b5=M({},bl,{relatedTarget:0}),B0=Ht(b5),w5=M({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),x5=Ht(w5),k5=M({},Ca,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),S5=Ht(k5),D5=M({},Ca,{data:0}),Oh=Ht(D5),C5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},M5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function E5(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=M5[r])?!!a[r]:!1}function $0(){return E5}var T5=M({},bl,{key:function(r){if(r.key){var a=C5[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=jo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?_5[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$0,charCode:function(r){return r.type==="keypress"?jo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?jo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),z5=Ht(T5),A5=M({},Oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=Ht(A5),P5=M({},bl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$0}),N5=Ht(P5),L5=M({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),J5=Ht(L5),R5=M({},Oo,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),I5=Ht(R5),j5=[9,13,27,32],H0=c&&"CompositionEvent"in window,xl=null;c&&"documentMode"in document&&(xl=document.documentMode);var F5=c&&"TextEvent"in window&&!xl,$h=c&&(!H0||xl&&8<xl&&11>=xl),Hh=" ",qh=!1;function Uh(r,a){switch(r){case"keyup":return j5.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vh(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var _a=!1;function O5(r,a){switch(r){case"compositionend":return Vh(a);case"keypress":return a.which!==32?null:(qh=!0,Hh);case"textInput":return r=a.data,r===Hh&&qh?null:r;default:return null}}function B5(r,a){if(_a)return r==="compositionend"||!H0&&Uh(r,a)?(r=Ih(),Io=I0=yi=null,_a=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return $h&&a.locale!=="ko"?null:a.data;default:return null}}var $5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wh(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!$5[r.type]:a==="textarea"}function Gh(r,a,u,m){ul(m),a=Uo(a,"onChange"),0<a.length&&(u=new j0("onChange","change",null,u,m),r.push({event:u,listeners:a}))}var kl=null,Sl=null;function H5(r){mm(r,0)}function Bo(r){var a=Aa(r);if(zn(a))return r}function q5(r,a){if(r==="change")return a}var Xh=!1;if(c){var q0;if(c){var U0="oninput"in document;if(!U0){var Yh=document.createElement("div");Yh.setAttribute("oninput","return;"),U0=typeof Yh.oninput=="function"}q0=U0}else q0=!1;Xh=q0&&(!document.documentMode||9<document.documentMode)}function Qh(){kl&&(kl.detachEvent("onpropertychange",Kh),Sl=kl=null)}function Kh(r){if(r.propertyName==="value"&&Bo(Sl)){var a=[];Gh(a,Sl,r,Sa(r)),hl(H5,a)}}function U5(r,a,u){r==="focusin"?(Qh(),kl=a,Sl=u,kl.attachEvent("onpropertychange",Kh)):r==="focusout"&&Qh()}function V5(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Bo(Sl)}function W5(r,a){if(r==="click")return Bo(a)}function G5(r,a){if(r==="input"||r==="change")return Bo(a)}function X5(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var fr=typeof Object.is=="function"?Object.is:X5;function Dl(r,a){if(fr(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var u=Object.keys(r),m=Object.keys(a);if(u.length!==m.length)return!1;for(m=0;m<u.length;m++){var g=u[m];if(!h.call(a,g)||!fr(r[g],a[g]))return!1}return!0}function Zh(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function em(r,a){var u=Zh(r);r=0;for(var m;u;){if(u.nodeType===3){if(m=r+u.textContent.length,r<=a&&m>=a)return{node:u,offset:a-r};r=m}e:{for(;u;){if(u.nextSibling){u=u.nextSibling;break e}u=u.parentNode}u=void 0}u=Zh(u)}}function nm(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?nm(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function tm(){for(var r=window,a=lt();a instanceof r.HTMLIFrameElement;){try{var u=typeof a.contentWindow.location.href=="string"}catch{u=!1}if(u)r=a.contentWindow;else break;a=lt(r.document)}return a}function V0(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}function Y5(r){var a=tm(),u=r.focusedElem,m=r.selectionRange;if(a!==u&&u&&u.ownerDocument&&nm(u.ownerDocument.documentElement,u)){if(m!==null&&V0(u)){if(a=m.start,r=m.end,r===void 0&&(r=a),"selectionStart"in u)u.selectionStart=a,u.selectionEnd=Math.min(r,u.value.length);else if(r=(a=u.ownerDocument||document)&&a.defaultView||window,r.getSelection){r=r.getSelection();var g=u.textContent.length,y=Math.min(m.start,g);m=m.end===void 0?y:Math.min(m.end,g),!r.extend&&y>m&&(g=m,m=y,y=g),g=em(u,y);var S=em(u,m);g&&S&&(r.rangeCount!==1||r.anchorNode!==g.node||r.anchorOffset!==g.offset||r.focusNode!==S.node||r.focusOffset!==S.offset)&&(a=a.createRange(),a.setStart(g.node,g.offset),r.removeAllRanges(),y>m?(r.addRange(a),r.extend(S.node,S.offset)):(a.setEnd(S.node,S.offset),r.addRange(a)))}}for(a=[],r=u;r=r.parentNode;)r.nodeType===1&&a.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<a.length;u++)r=a[u],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var Q5=c&&"documentMode"in document&&11>=document.documentMode,Ma=null,W0=null,Cl=null,G0=!1;function rm(r,a,u){var m=u.window===u?u.document:u.nodeType===9?u:u.ownerDocument;G0||Ma==null||Ma!==lt(m)||(m=Ma,"selectionStart"in m&&V0(m)?m={start:m.selectionStart,end:m.selectionEnd}:(m=(m.ownerDocument&&m.ownerDocument.defaultView||window).getSelection(),m={anchorNode:m.anchorNode,anchorOffset:m.anchorOffset,focusNode:m.focusNode,focusOffset:m.focusOffset}),Cl&&Dl(Cl,m)||(Cl=m,m=Uo(W0,"onSelect"),0<m.length&&(a=new j0("onSelect","select",null,a,u),r.push({event:a,listeners:m}),a.target=Ma)))}function $o(r,a){var u={};return u[r.toLowerCase()]=a.toLowerCase(),u["Webkit"+r]="webkit"+a,u["Moz"+r]="moz"+a,u}var Ea={animationend:$o("Animation","AnimationEnd"),animationiteration:$o("Animation","AnimationIteration"),animationstart:$o("Animation","AnimationStart"),transitionend:$o("Transition","TransitionEnd")},X0={},im={};c&&(im=document.createElement("div").style,"AnimationEvent"in window||(delete Ea.animationend.animation,delete Ea.animationiteration.animation,delete Ea.animationstart.animation),"TransitionEvent"in window||delete Ea.transitionend.transition);function Ho(r){if(X0[r])return X0[r];if(!Ea[r])return r;var a=Ea[r],u;for(u in a)if(a.hasOwnProperty(u)&&u in im)return X0[r]=a[u];return r}var am=Ho("animationend"),lm=Ho("animationiteration"),om=Ho("animationstart"),sm=Ho("transitionend"),um=new Map,cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bi(r,a){um.set(r,a),o(a,[r])}for(var Y0=0;Y0<cm.length;Y0++){var Q0=cm[Y0],K5=Q0.toLowerCase(),Z5=Q0[0].toUpperCase()+Q0.slice(1);bi(K5,"on"+Z5)}bi(am,"onAnimationEnd"),bi(lm,"onAnimationIteration"),bi(om,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(sm,"onTransitionEnd"),s("onMouseEnter",["mouseout","mouseover"]),s("onMouseLeave",["mouseout","mouseover"]),s("onPointerEnter",["pointerout","pointerover"]),s("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e3=new Set("cancel close invalid load scroll toggle".split(" ").concat(_l));function hm(r,a,u){var m=r.type||"unknown-event";r.currentTarget=u,Pe(m,a,void 0,r),r.currentTarget=null}function mm(r,a){a=(a&4)!==0;for(var u=0;u<r.length;u++){var m=r[u],g=m.event;m=m.listeners;e:{var y=void 0;if(a)for(var S=m.length-1;0<=S;S--){var P=m[S],j=P.instance,X=P.currentTarget;if(P=P.listener,j!==y&&g.isPropagationStopped())break e;hm(g,P,X),y=j}else for(S=0;S<m.length;S++){if(P=m[S],j=P.instance,X=P.currentTarget,P=P.listener,j!==y&&g.isPropagationStopped())break e;hm(g,P,X),y=j}}}if(be)throw r=Ie,be=!1,Ie=null,r}function Cn(r,a){var u=a[au];u===void 0&&(u=a[au]=new Set);var m=r+"__bubble";u.has(m)||(pm(a,r,2,!1),u.add(m))}function K0(r,a,u){var m=0;a&&(m|=4),pm(u,r,m,a)}var qo="_reactListening"+Math.random().toString(36).slice(2);function Ml(r){if(!r[qo]){r[qo]=!0,i.forEach(function(u){u!=="selectionchange"&&(e3.has(u)||K0(u,!1,r),K0(u,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[qo]||(a[qo]=!0,K0("selectionchange",!1,a))}}function pm(r,a,u,m){switch(Rh(a)){case 1:var g=d5;break;case 4:g=f5;break;default:g=J0}u=g.bind(null,a,u,r),g=void 0,!ml||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(g=!0),m?g!==void 0?r.addEventListener(a,u,{capture:!0,passive:g}):r.addEventListener(a,u,!0):g!==void 0?r.addEventListener(a,u,{passive:g}):r.addEventListener(a,u,!1)}function Z0(r,a,u,m,g){var y=m;if((a&1)===0&&(a&2)===0&&m!==null)e:for(;;){if(m===null)return;var S=m.tag;if(S===3||S===4){var P=m.stateNode.containerInfo;if(P===g||P.nodeType===8&&P.parentNode===g)break;if(S===4)for(S=m.return;S!==null;){var j=S.tag;if((j===3||j===4)&&(j=S.stateNode.containerInfo,j===g||j.nodeType===8&&j.parentNode===g))return;S=S.return}for(;P!==null;){if(S=ea(P),S===null)return;if(j=S.tag,j===5||j===6){m=y=S;continue e}P=P.parentNode}}m=m.return}hl(function(){var X=y,ce=Sa(u),pe=[];e:{var oe=um.get(r);if(oe!==void 0){var Ce=j0,Ne=r;switch(r){case"keypress":if(jo(u)===0)break e;case"keydown":case"keyup":Ce=z5;break;case"focusin":Ne="focus",Ce=B0;break;case"focusout":Ne="blur",Ce=B0;break;case"beforeblur":case"afterblur":Ce=B0;break;case"click":if(u.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ce=Fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ce=y5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ce=N5;break;case am:case lm:case om:Ce=x5;break;case sm:Ce=J5;break;case"scroll":Ce=g5;break;case"wheel":Ce=I5;break;case"copy":case"cut":case"paste":Ce=S5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ce=Bh}var Re=(a&4)!==0,jn=!Re&&r==="scroll",V=Re?oe!==null?oe+"Capture":null:oe;Re=[];for(var $=X,W;$!==null;){W=$;var ve=W.stateNode;if(W.tag===5&&ve!==null&&(W=ve,V!==null&&(ve=Xi($,V),ve!=null&&Re.push(El($,ve,W)))),jn)break;$=$.return}0<Re.length&&(oe=new Ce(oe,Ne,null,u,ce),pe.push({event:oe,listeners:Re}))}}if((a&7)===0){e:{if(oe=r==="mouseover"||r==="pointerover",Ce=r==="mouseout"||r==="pointerout",oe&&u!==vt&&(Ne=u.relatedTarget||u.fromElement)&&(ea(Ne)||Ne[Wr]))break e;if((Ce||oe)&&(oe=ce.window===ce?ce:(oe=ce.ownerDocument)?oe.defaultView||oe.parentWindow:window,Ce?(Ne=u.relatedTarget||u.toElement,Ce=X,Ne=Ne?ea(Ne):null,Ne!==null&&(jn=Je(Ne),Ne!==jn||Ne.tag!==5&&Ne.tag!==6)&&(Ne=null)):(Ce=null,Ne=X),Ce!==Ne)){if(Re=Fh,ve="onMouseLeave",V="onMouseEnter",$="mouse",(r==="pointerout"||r==="pointerover")&&(Re=Bh,ve="onPointerLeave",V="onPointerEnter",$="pointer"),jn=Ce==null?oe:Aa(Ce),W=Ne==null?oe:Aa(Ne),oe=new Re(ve,$+"leave",Ce,u,ce),oe.target=jn,oe.relatedTarget=W,ve=null,ea(ce)===X&&(Re=new Re(V,$+"enter",Ne,u,ce),Re.target=W,Re.relatedTarget=jn,ve=Re),jn=ve,Ce&&Ne)n:{for(Re=Ce,V=Ne,$=0,W=Re;W;W=Ta(W))$++;for(W=0,ve=V;ve;ve=Ta(ve))W++;for(;0<$-W;)Re=Ta(Re),$--;for(;0<W-$;)V=Ta(V),W--;for(;$--;){if(Re===V||V!==null&&Re===V.alternate)break n;Re=Ta(Re),V=Ta(V)}Re=null}else Re=null;Ce!==null&&dm(pe,oe,Ce,Re,!1),Ne!==null&&jn!==null&&dm(pe,jn,Ne,Re,!0)}}e:{if(oe=X?Aa(X):window,Ce=oe.nodeName&&oe.nodeName.toLowerCase(),Ce==="select"||Ce==="input"&&oe.type==="file")var je=q5;else if(Wh(oe))if(Xh)je=G5;else{je=V5;var He=U5}else(Ce=oe.nodeName)&&Ce.toLowerCase()==="input"&&(oe.type==="checkbox"||oe.type==="radio")&&(je=W5);if(je&&(je=je(r,X))){Gh(pe,je,u,ce);break e}He&&He(r,oe,X),r==="focusout"&&(He=oe._wrapperState)&&He.controlled&&oe.type==="number"&&Ft(oe,"number",oe.value)}switch(He=X?Aa(X):window,r){case"focusin":(Wh(He)||He.contentEditable==="true")&&(Ma=He,W0=X,Cl=null);break;case"focusout":Cl=W0=Ma=null;break;case"mousedown":G0=!0;break;case"contextmenu":case"mouseup":case"dragend":G0=!1,rm(pe,u,ce);break;case"selectionchange":if(Q5)break;case"keydown":case"keyup":rm(pe,u,ce)}var qe;if(H0)e:{switch(r){case"compositionstart":var Xe="onCompositionStart";break e;case"compositionend":Xe="onCompositionEnd";break e;case"compositionupdate":Xe="onCompositionUpdate";break e}Xe=void 0}else _a?Uh(r,u)&&(Xe="onCompositionEnd"):r==="keydown"&&u.keyCode===229&&(Xe="onCompositionStart");Xe&&($h&&u.locale!=="ko"&&(_a||Xe!=="onCompositionStart"?Xe==="onCompositionEnd"&&_a&&(qe=Ih()):(yi=ce,I0="value"in yi?yi.value:yi.textContent,_a=!0)),He=Uo(X,Xe),0<He.length&&(Xe=new Oh(Xe,r,null,u,ce),pe.push({event:Xe,listeners:He}),qe?Xe.data=qe:(qe=Vh(u),qe!==null&&(Xe.data=qe)))),(qe=F5?O5(r,u):B5(r,u))&&(X=Uo(X,"onBeforeInput"),0<X.length&&(ce=new Oh("onBeforeInput","beforeinput",null,u,ce),pe.push({event:ce,listeners:X}),ce.data=qe))}mm(pe,a)})}function El(r,a,u){return{instance:r,listener:a,currentTarget:u}}function Uo(r,a){for(var u=a+"Capture",m=[];r!==null;){var g=r,y=g.stateNode;g.tag===5&&y!==null&&(g=y,y=Xi(r,u),y!=null&&m.unshift(El(r,y,g)),y=Xi(r,a),y!=null&&m.push(El(r,y,g))),r=r.return}return m}function Ta(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function dm(r,a,u,m,g){for(var y=a._reactName,S=[];u!==null&&u!==m;){var P=u,j=P.alternate,X=P.stateNode;if(j!==null&&j===m)break;P.tag===5&&X!==null&&(P=X,g?(j=Xi(u,y),j!=null&&S.unshift(El(u,j,P))):g||(j=Xi(u,y),j!=null&&S.push(El(u,j,P)))),u=u.return}S.length!==0&&r.push({event:a,listeners:S})}var n3=/\r\n?/g,t3=/\u0000|\uFFFD/g;function fm(r){return(typeof r=="string"?r:""+r).replace(n3,`
`).replace(t3,"")}function Vo(r,a,u){if(a=fm(a),fm(r)!==a&&u)throw Error(t(425))}function Wo(){}var eu=null,nu=null;function tu(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ru=typeof setTimeout=="function"?setTimeout:void 0,r3=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,i3=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(r){return gm.resolve(null).then(r).catch(a3)}:ru;function a3(r){setTimeout(function(){throw r})}function iu(r,a){var u=a,m=0;do{var g=u.nextSibling;if(r.removeChild(u),g&&g.nodeType===8)if(u=g.data,u==="/$"){if(m===0){r.removeChild(g),yl(a);return}m--}else u!=="$"&&u!=="$?"&&u!=="$!"||m++;u=g}while(u);yl(a)}function wi(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?")break;if(a==="/$")return null}}return r}function vm(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var u=r.data;if(u==="$"||u==="$!"||u==="$?"){if(a===0)return r;a--}else u==="/$"&&a++}r=r.previousSibling}return null}var za=Math.random().toString(36).slice(2),Mr="__reactFiber$"+za,Tl="__reactProps$"+za,Wr="__reactContainer$"+za,au="__reactEvents$"+za,l3="__reactListeners$"+za,o3="__reactHandles$"+za;function ea(r){var a=r[Mr];if(a)return a;for(var u=r.parentNode;u;){if(a=u[Wr]||u[Mr]){if(u=a.alternate,a.child!==null||u!==null&&u.child!==null)for(r=vm(r);r!==null;){if(u=r[Mr])return u;r=vm(r)}return a}r=u,u=r.parentNode}return null}function zl(r){return r=r[Mr]||r[Wr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Aa(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(t(33))}function Go(r){return r[Tl]||null}var lu=[],Pa=-1;function xi(r){return{current:r}}function _n(r){0>Pa||(r.current=lu[Pa],lu[Pa]=null,Pa--)}function kn(r,a){Pa++,lu[Pa]=r.current,r.current=a}var ki={},ot=xi(ki),Tt=xi(!1),na=ki;function Na(r,a){var u=r.type.contextTypes;if(!u)return ki;var m=r.stateNode;if(m&&m.__reactInternalMemoizedUnmaskedChildContext===a)return m.__reactInternalMemoizedMaskedChildContext;var g={},y;for(y in u)g[y]=a[y];return m&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=a,r.__reactInternalMemoizedMaskedChildContext=g),g}function zt(r){return r=r.childContextTypes,r!=null}function Xo(){_n(Tt),_n(ot)}function ym(r,a,u){if(ot.current!==ki)throw Error(t(168));kn(ot,a),kn(Tt,u)}function bm(r,a,u){var m=r.stateNode;if(a=a.childContextTypes,typeof m.getChildContext!="function")return u;m=m.getChildContext();for(var g in m)if(!(g in a))throw Error(t(108,Ke(r)||"Unknown",g));return M({},u,m)}function Yo(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||ki,na=ot.current,kn(ot,r),kn(Tt,Tt.current),!0}function wm(r,a,u){var m=r.stateNode;if(!m)throw Error(t(169));u?(r=bm(r,a,na),m.__reactInternalMemoizedMergedChildContext=r,_n(Tt),_n(ot),kn(ot,r)):_n(Tt),kn(Tt,u)}var Gr=null,Qo=!1,ou=!1;function xm(r){Gr===null?Gr=[r]:Gr.push(r)}function s3(r){Qo=!0,xm(r)}function Si(){if(!ou&&Gr!==null){ou=!0;var r=0,a=vn;try{var u=Gr;for(vn=1;r<u.length;r++){var m=u[r];do m=m(!0);while(m!==null)}Gr=null,Qo=!1}catch(g){throw Gr!==null&&(Gr=Gr.slice(r+1)),In(Zt,Si),g}finally{vn=a,ou=!1}}return null}var La=[],Ja=0,Ko=null,Zo=0,er=[],nr=0,ta=null,Xr=1,Yr="";function ra(r,a){La[Ja++]=Zo,La[Ja++]=Ko,Ko=r,Zo=a}function km(r,a,u){er[nr++]=Xr,er[nr++]=Yr,er[nr++]=ta,ta=r;var m=Xr;r=Yr;var g=32-yn(m)-1;m&=~(1<<g),u+=1;var y=32-yn(a)+g;if(30<y){var S=g-g%5;y=(m&(1<<S)-1).toString(32),m>>=S,g-=S,Xr=1<<32-yn(a)+g|u<<g|m,Yr=y+r}else Xr=1<<y|u<<g|m,Yr=r}function su(r){r.return!==null&&(ra(r,1),km(r,1,0))}function uu(r){for(;r===Ko;)Ko=La[--Ja],La[Ja]=null,Zo=La[--Ja],La[Ja]=null;for(;r===ta;)ta=er[--nr],er[nr]=null,Yr=er[--nr],er[nr]=null,Xr=er[--nr],er[nr]=null}var qt=null,Ut=null,En=!1,gr=null;function Sm(r,a){var u=ar(5,null,null,0);u.elementType="DELETED",u.stateNode=a,u.return=r,a=r.deletions,a===null?(r.deletions=[u],r.flags|=16):a.push(u)}function Dm(r,a){switch(r.tag){case 5:var u=r.type;return a=a.nodeType!==1||u.toLowerCase()!==a.nodeName.toLowerCase()?null:a,a!==null?(r.stateNode=a,qt=r,Ut=wi(a.firstChild),!0):!1;case 6:return a=r.pendingProps===""||a.nodeType!==3?null:a,a!==null?(r.stateNode=a,qt=r,Ut=null,!0):!1;case 13:return a=a.nodeType!==8?null:a,a!==null?(u=ta!==null?{id:Xr,overflow:Yr}:null,r.memoizedState={dehydrated:a,treeContext:u,retryLane:1073741824},u=ar(18,null,null,0),u.stateNode=a,u.return=r,r.child=u,qt=r,Ut=null,!0):!1;default:return!1}}function cu(r){return(r.mode&1)!==0&&(r.flags&128)===0}function hu(r){if(En){var a=Ut;if(a){var u=a;if(!Dm(r,a)){if(cu(r))throw Error(t(418));a=wi(u.nextSibling);var m=qt;a&&Dm(r,a)?Sm(m,u):(r.flags=r.flags&-4097|2,En=!1,qt=r)}}else{if(cu(r))throw Error(t(418));r.flags=r.flags&-4097|2,En=!1,qt=r}}}function Cm(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;qt=r}function es(r){if(r!==qt)return!1;if(!En)return Cm(r),En=!0,!1;var a;if((a=r.tag!==3)&&!(a=r.tag!==5)&&(a=r.type,a=a!=="head"&&a!=="body"&&!tu(r.type,r.memoizedProps)),a&&(a=Ut)){if(cu(r))throw _m(),Error(t(418));for(;a;)Sm(r,a),a=wi(a.nextSibling)}if(Cm(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(t(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8){var u=r.data;if(u==="/$"){if(a===0){Ut=wi(r.nextSibling);break e}a--}else u!=="$"&&u!=="$!"&&u!=="$?"||a++}r=r.nextSibling}Ut=null}}else Ut=qt?wi(r.stateNode.nextSibling):null;return!0}function _m(){for(var r=Ut;r;)r=wi(r.nextSibling)}function Ra(){Ut=qt=null,En=!1}function mu(r){gr===null?gr=[r]:gr.push(r)}var u3=ne.ReactCurrentBatchConfig;function Al(r,a,u){if(r=u.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(u._owner){if(u=u._owner,u){if(u.tag!==1)throw Error(t(309));var m=u.stateNode}if(!m)throw Error(t(147,r));var g=m,y=""+r;return a!==null&&a.ref!==null&&typeof a.ref=="function"&&a.ref._stringRef===y?a.ref:(a=function(S){var P=g.refs;S===null?delete P[y]:P[y]=S},a._stringRef=y,a)}if(typeof r!="string")throw Error(t(284));if(!u._owner)throw Error(t(290,r))}return r}function ns(r,a){throw r=Object.prototype.toString.call(a),Error(t(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r))}function Mm(r){var a=r._init;return a(r._payload)}function Em(r){function a(V,$){if(r){var W=V.deletions;W===null?(V.deletions=[$],V.flags|=16):W.push($)}}function u(V,$){if(!r)return null;for(;$!==null;)a(V,$),$=$.sibling;return null}function m(V,$){for(V=new Map;$!==null;)$.key!==null?V.set($.key,$):V.set($.index,$),$=$.sibling;return V}function g(V,$){return V=Ai(V,$),V.index=0,V.sibling=null,V}function y(V,$,W){return V.index=W,r?(W=V.alternate,W!==null?(W=W.index,W<$?(V.flags|=2,$):W):(V.flags|=2,$)):(V.flags|=1048576,$)}function S(V){return r&&V.alternate===null&&(V.flags|=2),V}function P(V,$,W,ve){return $===null||$.tag!==6?($=rc(W,V.mode,ve),$.return=V,$):($=g($,W),$.return=V,$)}function j(V,$,W,ve){var je=W.type;return je===I?ce(V,$,W.props.children,ve,W.key):$!==null&&($.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===xe&&Mm(je)===$.type)?(ve=g($,W.props),ve.ref=Al(V,$,W),ve.return=V,ve):(ve=Cs(W.type,W.key,W.props,null,V.mode,ve),ve.ref=Al(V,$,W),ve.return=V,ve)}function X(V,$,W,ve){return $===null||$.tag!==4||$.stateNode.containerInfo!==W.containerInfo||$.stateNode.implementation!==W.implementation?($=ic(W,V.mode,ve),$.return=V,$):($=g($,W.children||[]),$.return=V,$)}function ce(V,$,W,ve,je){return $===null||$.tag!==7?($=ha(W,V.mode,ve,je),$.return=V,$):($=g($,W),$.return=V,$)}function pe(V,$,W){if(typeof $=="string"&&$!==""||typeof $=="number")return $=rc(""+$,V.mode,W),$.return=V,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case K:return W=Cs($.type,$.key,$.props,null,V.mode,W),W.ref=Al(V,null,$),W.return=V,W;case H:return $=ic($,V.mode,W),$.return=V,$;case xe:var ve=$._init;return pe(V,ve($._payload),W)}if(ft($)||ke($))return $=ha($,V.mode,W,null),$.return=V,$;ns(V,$)}return null}function oe(V,$,W,ve){var je=$!==null?$.key:null;if(typeof W=="string"&&W!==""||typeof W=="number")return je!==null?null:P(V,$,""+W,ve);if(typeof W=="object"&&W!==null){switch(W.$$typeof){case K:return W.key===je?j(V,$,W,ve):null;case H:return W.key===je?X(V,$,W,ve):null;case xe:return je=W._init,oe(V,$,je(W._payload),ve)}if(ft(W)||ke(W))return je!==null?null:ce(V,$,W,ve,null);ns(V,W)}return null}function Ce(V,$,W,ve,je){if(typeof ve=="string"&&ve!==""||typeof ve=="number")return V=V.get(W)||null,P($,V,""+ve,je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case K:return V=V.get(ve.key===null?W:ve.key)||null,j($,V,ve,je);case H:return V=V.get(ve.key===null?W:ve.key)||null,X($,V,ve,je);case xe:var He=ve._init;return Ce(V,$,W,He(ve._payload),je)}if(ft(ve)||ke(ve))return V=V.get(W)||null,ce($,V,ve,je,null);ns($,ve)}return null}function Ne(V,$,W,ve){for(var je=null,He=null,qe=$,Xe=$=0,nt=null;qe!==null&&Xe<W.length;Xe++){qe.index>Xe?(nt=qe,qe=null):nt=qe.sibling;var pn=oe(V,qe,W[Xe],ve);if(pn===null){qe===null&&(qe=nt);break}r&&qe&&pn.alternate===null&&a(V,qe),$=y(pn,$,Xe),He===null?je=pn:He.sibling=pn,He=pn,qe=nt}if(Xe===W.length)return u(V,qe),En&&ra(V,Xe),je;if(qe===null){for(;Xe<W.length;Xe++)qe=pe(V,W[Xe],ve),qe!==null&&($=y(qe,$,Xe),He===null?je=qe:He.sibling=qe,He=qe);return En&&ra(V,Xe),je}for(qe=m(V,qe);Xe<W.length;Xe++)nt=Ce(qe,V,Xe,W[Xe],ve),nt!==null&&(r&&nt.alternate!==null&&qe.delete(nt.key===null?Xe:nt.key),$=y(nt,$,Xe),He===null?je=nt:He.sibling=nt,He=nt);return r&&qe.forEach(function(Pi){return a(V,Pi)}),En&&ra(V,Xe),je}function Re(V,$,W,ve){var je=ke(W);if(typeof je!="function")throw Error(t(150));if(W=je.call(W),W==null)throw Error(t(151));for(var He=je=null,qe=$,Xe=$=0,nt=null,pn=W.next();qe!==null&&!pn.done;Xe++,pn=W.next()){qe.index>Xe?(nt=qe,qe=null):nt=qe.sibling;var Pi=oe(V,qe,pn.value,ve);if(Pi===null){qe===null&&(qe=nt);break}r&&qe&&Pi.alternate===null&&a(V,qe),$=y(Pi,$,Xe),He===null?je=Pi:He.sibling=Pi,He=Pi,qe=nt}if(pn.done)return u(V,qe),En&&ra(V,Xe),je;if(qe===null){for(;!pn.done;Xe++,pn=W.next())pn=pe(V,pn.value,ve),pn!==null&&($=y(pn,$,Xe),He===null?je=pn:He.sibling=pn,He=pn);return En&&ra(V,Xe),je}for(qe=m(V,qe);!pn.done;Xe++,pn=W.next())pn=Ce(qe,V,Xe,pn.value,ve),pn!==null&&(r&&pn.alternate!==null&&qe.delete(pn.key===null?Xe:pn.key),$=y(pn,$,Xe),He===null?je=pn:He.sibling=pn,He=pn);return r&&qe.forEach(function($3){return a(V,$3)}),En&&ra(V,Xe),je}function jn(V,$,W,ve){if(typeof W=="object"&&W!==null&&W.type===I&&W.key===null&&(W=W.props.children),typeof W=="object"&&W!==null){switch(W.$$typeof){case K:e:{for(var je=W.key,He=$;He!==null;){if(He.key===je){if(je=W.type,je===I){if(He.tag===7){u(V,He.sibling),$=g(He,W.props.children),$.return=V,V=$;break e}}else if(He.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===xe&&Mm(je)===He.type){u(V,He.sibling),$=g(He,W.props),$.ref=Al(V,He,W),$.return=V,V=$;break e}u(V,He);break}else a(V,He);He=He.sibling}W.type===I?($=ha(W.props.children,V.mode,ve,W.key),$.return=V,V=$):(ve=Cs(W.type,W.key,W.props,null,V.mode,ve),ve.ref=Al(V,$,W),ve.return=V,V=ve)}return S(V);case H:e:{for(He=W.key;$!==null;){if($.key===He)if($.tag===4&&$.stateNode.containerInfo===W.containerInfo&&$.stateNode.implementation===W.implementation){u(V,$.sibling),$=g($,W.children||[]),$.return=V,V=$;break e}else{u(V,$);break}else a(V,$);$=$.sibling}$=ic(W,V.mode,ve),$.return=V,V=$}return S(V);case xe:return He=W._init,jn(V,$,He(W._payload),ve)}if(ft(W))return Ne(V,$,W,ve);if(ke(W))return Re(V,$,W,ve);ns(V,W)}return typeof W=="string"&&W!==""||typeof W=="number"?(W=""+W,$!==null&&$.tag===6?(u(V,$.sibling),$=g($,W),$.return=V,V=$):(u(V,$),$=rc(W,V.mode,ve),$.return=V,V=$),S(V)):u(V,$)}return jn}var Ia=Em(!0),Tm=Em(!1),ts=xi(null),rs=null,ja=null,pu=null;function du(){pu=ja=rs=null}function fu(r){var a=ts.current;_n(ts),r._currentValue=a}function gu(r,a,u){for(;r!==null;){var m=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,m!==null&&(m.childLanes|=a)):m!==null&&(m.childLanes&a)!==a&&(m.childLanes|=a),r===u)break;r=r.return}}function Fa(r,a){rs=r,pu=ja=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&a)!==0&&(At=!0),r.firstContext=null)}function tr(r){var a=r._currentValue;if(pu!==r)if(r={context:r,memoizedValue:a,next:null},ja===null){if(rs===null)throw Error(t(308));ja=r,rs.dependencies={lanes:0,firstContext:r}}else ja=ja.next=r;return a}var ia=null;function vu(r){ia===null?ia=[r]:ia.push(r)}function zm(r,a,u,m){var g=a.interleaved;return g===null?(u.next=u,vu(a)):(u.next=g.next,g.next=u),a.interleaved=u,Qr(r,m)}function Qr(r,a){r.lanes|=a;var u=r.alternate;for(u!==null&&(u.lanes|=a),u=r,r=r.return;r!==null;)r.childLanes|=a,u=r.alternate,u!==null&&(u.childLanes|=a),u=r,r=r.return;return u.tag===3?u.stateNode:null}var Di=!1;function yu(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Am(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function Kr(r,a){return{eventTime:r,lane:a,tag:0,payload:null,callback:null,next:null}}function Ci(r,a,u){var m=r.updateQueue;if(m===null)return null;if(m=m.shared,(hn&2)!==0){var g=m.pending;return g===null?a.next=a:(a.next=g.next,g.next=a),m.pending=a,Qr(r,u)}return g=m.interleaved,g===null?(a.next=a,vu(m)):(a.next=g.next,g.next=a),m.interleaved=a,Qr(r,u)}function is(r,a,u){if(a=a.updateQueue,a!==null&&(a=a.shared,(u&4194240)!==0)){var m=a.lanes;m&=r.pendingLanes,u|=m,a.lanes=u,P0(r,u)}}function Pm(r,a){var u=r.updateQueue,m=r.alternate;if(m!==null&&(m=m.updateQueue,u===m)){var g=null,y=null;if(u=u.firstBaseUpdate,u!==null){do{var S={eventTime:u.eventTime,lane:u.lane,tag:u.tag,payload:u.payload,callback:u.callback,next:null};y===null?g=y=S:y=y.next=S,u=u.next}while(u!==null);y===null?g=y=a:y=y.next=a}else g=y=a;u={baseState:m.baseState,firstBaseUpdate:g,lastBaseUpdate:y,shared:m.shared,effects:m.effects},r.updateQueue=u;return}r=u.lastBaseUpdate,r===null?u.firstBaseUpdate=a:r.next=a,u.lastBaseUpdate=a}function as(r,a,u,m){var g=r.updateQueue;Di=!1;var y=g.firstBaseUpdate,S=g.lastBaseUpdate,P=g.shared.pending;if(P!==null){g.shared.pending=null;var j=P,X=j.next;j.next=null,S===null?y=X:S.next=X,S=j;var ce=r.alternate;ce!==null&&(ce=ce.updateQueue,P=ce.lastBaseUpdate,P!==S&&(P===null?ce.firstBaseUpdate=X:P.next=X,ce.lastBaseUpdate=j))}if(y!==null){var pe=g.baseState;S=0,ce=X=j=null,P=y;do{var oe=P.lane,Ce=P.eventTime;if((m&oe)===oe){ce!==null&&(ce=ce.next={eventTime:Ce,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Ne=r,Re=P;switch(oe=a,Ce=u,Re.tag){case 1:if(Ne=Re.payload,typeof Ne=="function"){pe=Ne.call(Ce,pe,oe);break e}pe=Ne;break e;case 3:Ne.flags=Ne.flags&-65537|128;case 0:if(Ne=Re.payload,oe=typeof Ne=="function"?Ne.call(Ce,pe,oe):Ne,oe==null)break e;pe=M({},pe,oe);break e;case 2:Di=!0}}P.callback!==null&&P.lane!==0&&(r.flags|=64,oe=g.effects,oe===null?g.effects=[P]:oe.push(P))}else Ce={eventTime:Ce,lane:oe,tag:P.tag,payload:P.payload,callback:P.callback,next:null},ce===null?(X=ce=Ce,j=pe):ce=ce.next=Ce,S|=oe;if(P=P.next,P===null){if(P=g.shared.pending,P===null)break;oe=P,P=oe.next,oe.next=null,g.lastBaseUpdate=oe,g.shared.pending=null}}while(!0);if(ce===null&&(j=pe),g.baseState=j,g.firstBaseUpdate=X,g.lastBaseUpdate=ce,a=g.shared.interleaved,a!==null){g=a;do S|=g.lane,g=g.next;while(g!==a)}else y===null&&(g.shared.lanes=0);oa|=S,r.lanes=S,r.memoizedState=pe}}function Nm(r,a,u){if(r=a.effects,a.effects=null,r!==null)for(a=0;a<r.length;a++){var m=r[a],g=m.callback;if(g!==null){if(m.callback=null,m=u,typeof g!="function")throw Error(t(191,g));g.call(m)}}}var Pl={},Er=xi(Pl),Nl=xi(Pl),Ll=xi(Pl);function aa(r){if(r===Pl)throw Error(t(174));return r}function bu(r,a){switch(kn(Ll,a),kn(Nl,r),kn(Er,Pl),r=a.nodeType,r){case 9:case 11:a=(a=a.documentElement)?a.namespaceURI:ye(null,"");break;default:r=r===8?a.parentNode:a,a=r.namespaceURI||null,r=r.tagName,a=ye(a,r)}_n(Er),kn(Er,a)}function Oa(){_n(Er),_n(Nl),_n(Ll)}function Lm(r){aa(Ll.current);var a=aa(Er.current),u=ye(a,r.type);a!==u&&(kn(Nl,r),kn(Er,u))}function wu(r){Nl.current===r&&(_n(Er),_n(Nl))}var An=xi(0);function ls(r){for(var a=r;a!==null;){if(a.tag===13){var u=a.memoizedState;if(u!==null&&(u=u.dehydrated,u===null||u.data==="$?"||u.data==="$!"))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var xu=[];function ku(){for(var r=0;r<xu.length;r++)xu[r]._workInProgressVersionPrimary=null;xu.length=0}var os=ne.ReactCurrentDispatcher,Su=ne.ReactCurrentBatchConfig,la=0,Pn=null,Gn=null,Zn=null,ss=!1,Jl=!1,Rl=0,c3=0;function st(){throw Error(t(321))}function Du(r,a){if(a===null)return!1;for(var u=0;u<a.length&&u<r.length;u++)if(!fr(r[u],a[u]))return!1;return!0}function Cu(r,a,u,m,g,y){if(la=y,Pn=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,os.current=r===null||r.memoizedState===null?d3:f3,r=u(m,g),Jl){y=0;do{if(Jl=!1,Rl=0,25<=y)throw Error(t(301));y+=1,Zn=Gn=null,a.updateQueue=null,os.current=g3,r=u(m,g)}while(Jl)}if(os.current=hs,a=Gn!==null&&Gn.next!==null,la=0,Zn=Gn=Pn=null,ss=!1,a)throw Error(t(300));return r}function _u(){var r=Rl!==0;return Rl=0,r}function Tr(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Zn===null?Pn.memoizedState=Zn=r:Zn=Zn.next=r,Zn}function rr(){if(Gn===null){var r=Pn.alternate;r=r!==null?r.memoizedState:null}else r=Gn.next;var a=Zn===null?Pn.memoizedState:Zn.next;if(a!==null)Zn=a,Gn=r;else{if(r===null)throw Error(t(310));Gn=r,r={memoizedState:Gn.memoizedState,baseState:Gn.baseState,baseQueue:Gn.baseQueue,queue:Gn.queue,next:null},Zn===null?Pn.memoizedState=Zn=r:Zn=Zn.next=r}return Zn}function Il(r,a){return typeof a=="function"?a(r):a}function Mu(r){var a=rr(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var m=Gn,g=m.baseQueue,y=u.pending;if(y!==null){if(g!==null){var S=g.next;g.next=y.next,y.next=S}m.baseQueue=g=y,u.pending=null}if(g!==null){y=g.next,m=m.baseState;var P=S=null,j=null,X=y;do{var ce=X.lane;if((la&ce)===ce)j!==null&&(j=j.next={lane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),m=X.hasEagerState?X.eagerState:r(m,X.action);else{var pe={lane:ce,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null};j===null?(P=j=pe,S=m):j=j.next=pe,Pn.lanes|=ce,oa|=ce}X=X.next}while(X!==null&&X!==y);j===null?S=m:j.next=P,fr(m,a.memoizedState)||(At=!0),a.memoizedState=m,a.baseState=S,a.baseQueue=j,u.lastRenderedState=m}if(r=u.interleaved,r!==null){g=r;do y=g.lane,Pn.lanes|=y,oa|=y,g=g.next;while(g!==r)}else g===null&&(u.lanes=0);return[a.memoizedState,u.dispatch]}function Eu(r){var a=rr(),u=a.queue;if(u===null)throw Error(t(311));u.lastRenderedReducer=r;var m=u.dispatch,g=u.pending,y=a.memoizedState;if(g!==null){u.pending=null;var S=g=g.next;do y=r(y,S.action),S=S.next;while(S!==g);fr(y,a.memoizedState)||(At=!0),a.memoizedState=y,a.baseQueue===null&&(a.baseState=y),u.lastRenderedState=y}return[y,m]}function Jm(){}function Rm(r,a){var u=Pn,m=rr(),g=a(),y=!fr(m.memoizedState,g);if(y&&(m.memoizedState=g,At=!0),m=m.queue,Tu(Fm.bind(null,u,m,r),[r]),m.getSnapshot!==a||y||Zn!==null&&Zn.memoizedState.tag&1){if(u.flags|=2048,jl(9,jm.bind(null,u,m,g,a),void 0,null),et===null)throw Error(t(349));(la&30)!==0||Im(u,a,g)}return g}function Im(r,a,u){r.flags|=16384,r={getSnapshot:a,value:u},a=Pn.updateQueue,a===null?(a={lastEffect:null,stores:null},Pn.updateQueue=a,a.stores=[r]):(u=a.stores,u===null?a.stores=[r]:u.push(r))}function jm(r,a,u,m){a.value=u,a.getSnapshot=m,Om(a)&&Bm(r)}function Fm(r,a,u){return u(function(){Om(a)&&Bm(r)})}function Om(r){var a=r.getSnapshot;r=r.value;try{var u=a();return!fr(r,u)}catch{return!0}}function Bm(r){var a=Qr(r,1);a!==null&&wr(a,r,1,-1)}function $m(r){var a=Tr();return typeof r=="function"&&(r=r()),a.memoizedState=a.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Il,lastRenderedState:r},a.queue=r,r=r.dispatch=p3.bind(null,Pn,r),[a.memoizedState,r]}function jl(r,a,u,m){return r={tag:r,create:a,destroy:u,deps:m,next:null},a=Pn.updateQueue,a===null?(a={lastEffect:null,stores:null},Pn.updateQueue=a,a.lastEffect=r.next=r):(u=a.lastEffect,u===null?a.lastEffect=r.next=r:(m=u.next,u.next=r,r.next=m,a.lastEffect=r)),r}function Hm(){return rr().memoizedState}function us(r,a,u,m){var g=Tr();Pn.flags|=r,g.memoizedState=jl(1|a,u,void 0,m===void 0?null:m)}function cs(r,a,u,m){var g=rr();m=m===void 0?null:m;var y=void 0;if(Gn!==null){var S=Gn.memoizedState;if(y=S.destroy,m!==null&&Du(m,S.deps)){g.memoizedState=jl(a,u,y,m);return}}Pn.flags|=r,g.memoizedState=jl(1|a,u,y,m)}function qm(r,a){return us(8390656,8,r,a)}function Tu(r,a){return cs(2048,8,r,a)}function Um(r,a){return cs(4,2,r,a)}function Vm(r,a){return cs(4,4,r,a)}function Wm(r,a){if(typeof a=="function")return r=r(),a(r),function(){a(null)};if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function Gm(r,a,u){return u=u!=null?u.concat([r]):null,cs(4,4,Wm.bind(null,a,r),u)}function zu(){}function Xm(r,a){var u=rr();a=a===void 0?null:a;var m=u.memoizedState;return m!==null&&a!==null&&Du(a,m[1])?m[0]:(u.memoizedState=[r,a],r)}function Ym(r,a){var u=rr();a=a===void 0?null:a;var m=u.memoizedState;return m!==null&&a!==null&&Du(a,m[1])?m[0]:(r=r(),u.memoizedState=[r,a],r)}function Qm(r,a,u){return(la&21)===0?(r.baseState&&(r.baseState=!1,At=!0),r.memoizedState=u):(fr(u,a)||(u=Mh(),Pn.lanes|=u,oa|=u,r.baseState=!0),a)}function h3(r,a){var u=vn;vn=u!==0&&4>u?u:4,r(!0);var m=Su.transition;Su.transition={};try{r(!1),a()}finally{vn=u,Su.transition=m}}function Km(){return rr().memoizedState}function m3(r,a,u){var m=Ti(r);if(u={lane:m,action:u,hasEagerState:!1,eagerState:null,next:null},Zm(r))ep(a,u);else if(u=zm(r,a,u,m),u!==null){var g=wt();wr(u,r,m,g),np(u,a,m)}}function p3(r,a,u){var m=Ti(r),g={lane:m,action:u,hasEagerState:!1,eagerState:null,next:null};if(Zm(r))ep(a,g);else{var y=r.alternate;if(r.lanes===0&&(y===null||y.lanes===0)&&(y=a.lastRenderedReducer,y!==null))try{var S=a.lastRenderedState,P=y(S,u);if(g.hasEagerState=!0,g.eagerState=P,fr(P,S)){var j=a.interleaved;j===null?(g.next=g,vu(a)):(g.next=j.next,j.next=g),a.interleaved=g;return}}catch{}finally{}u=zm(r,a,g,m),u!==null&&(g=wt(),wr(u,r,m,g),np(u,a,m))}}function Zm(r){var a=r.alternate;return r===Pn||a!==null&&a===Pn}function ep(r,a){Jl=ss=!0;var u=r.pending;u===null?a.next=a:(a.next=u.next,u.next=a),r.pending=a}function np(r,a,u){if((u&4194240)!==0){var m=a.lanes;m&=r.pendingLanes,u|=m,a.lanes=u,P0(r,u)}}var hs={readContext:tr,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},d3={readContext:tr,useCallback:function(r,a){return Tr().memoizedState=[r,a===void 0?null:a],r},useContext:tr,useEffect:qm,useImperativeHandle:function(r,a,u){return u=u!=null?u.concat([r]):null,us(4194308,4,Wm.bind(null,a,r),u)},useLayoutEffect:function(r,a){return us(4194308,4,r,a)},useInsertionEffect:function(r,a){return us(4,2,r,a)},useMemo:function(r,a){var u=Tr();return a=a===void 0?null:a,r=r(),u.memoizedState=[r,a],r},useReducer:function(r,a,u){var m=Tr();return a=u!==void 0?u(a):a,m.memoizedState=m.baseState=a,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:a},m.queue=r,r=r.dispatch=m3.bind(null,Pn,r),[m.memoizedState,r]},useRef:function(r){var a=Tr();return r={current:r},a.memoizedState=r},useState:$m,useDebugValue:zu,useDeferredValue:function(r){return Tr().memoizedState=r},useTransition:function(){var r=$m(!1),a=r[0];return r=h3.bind(null,r[1]),Tr().memoizedState=r,[a,r]},useMutableSource:function(){},useSyncExternalStore:function(r,a,u){var m=Pn,g=Tr();if(En){if(u===void 0)throw Error(t(407));u=u()}else{if(u=a(),et===null)throw Error(t(349));(la&30)!==0||Im(m,a,u)}g.memoizedState=u;var y={value:u,getSnapshot:a};return g.queue=y,qm(Fm.bind(null,m,y,r),[r]),m.flags|=2048,jl(9,jm.bind(null,m,y,u,a),void 0,null),u},useId:function(){var r=Tr(),a=et.identifierPrefix;if(En){var u=Yr,m=Xr;u=(m&~(1<<32-yn(m)-1)).toString(32)+u,a=":"+a+"R"+u,u=Rl++,0<u&&(a+="H"+u.toString(32)),a+=":"}else u=c3++,a=":"+a+"r"+u.toString(32)+":";return r.memoizedState=a},unstable_isNewReconciler:!1},f3={readContext:tr,useCallback:Xm,useContext:tr,useEffect:Tu,useImperativeHandle:Gm,useInsertionEffect:Um,useLayoutEffect:Vm,useMemo:Ym,useReducer:Mu,useRef:Hm,useState:function(){return Mu(Il)},useDebugValue:zu,useDeferredValue:function(r){var a=rr();return Qm(a,Gn.memoizedState,r)},useTransition:function(){var r=Mu(Il)[0],a=rr().memoizedState;return[r,a]},useMutableSource:Jm,useSyncExternalStore:Rm,useId:Km,unstable_isNewReconciler:!1},g3={readContext:tr,useCallback:Xm,useContext:tr,useEffect:Tu,useImperativeHandle:Gm,useInsertionEffect:Um,useLayoutEffect:Vm,useMemo:Ym,useReducer:Eu,useRef:Hm,useState:function(){return Eu(Il)},useDebugValue:zu,useDeferredValue:function(r){var a=rr();return Gn===null?a.memoizedState=r:Qm(a,Gn.memoizedState,r)},useTransition:function(){var r=Eu(Il)[0],a=rr().memoizedState;return[r,a]},useMutableSource:Jm,useSyncExternalStore:Rm,useId:Km,unstable_isNewReconciler:!1};function vr(r,a){if(r&&r.defaultProps){a=M({},a),r=r.defaultProps;for(var u in r)a[u]===void 0&&(a[u]=r[u]);return a}return a}function Au(r,a,u,m){a=r.memoizedState,u=u(m,a),u=u==null?a:M({},a,u),r.memoizedState=u,r.lanes===0&&(r.updateQueue.baseState=u)}var ms={isMounted:function(r){return(r=r._reactInternals)?Je(r)===r:!1},enqueueSetState:function(r,a,u){r=r._reactInternals;var m=wt(),g=Ti(r),y=Kr(m,g);y.payload=a,u!=null&&(y.callback=u),a=Ci(r,y,g),a!==null&&(wr(a,r,g,m),is(a,r,g))},enqueueReplaceState:function(r,a,u){r=r._reactInternals;var m=wt(),g=Ti(r),y=Kr(m,g);y.tag=1,y.payload=a,u!=null&&(y.callback=u),a=Ci(r,y,g),a!==null&&(wr(a,r,g,m),is(a,r,g))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var u=wt(),m=Ti(r),g=Kr(u,m);g.tag=2,a!=null&&(g.callback=a),a=Ci(r,g,m),a!==null&&(wr(a,r,m,u),is(a,r,m))}};function tp(r,a,u,m,g,y,S){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(m,y,S):a.prototype&&a.prototype.isPureReactComponent?!Dl(u,m)||!Dl(g,y):!0}function rp(r,a,u){var m=!1,g=ki,y=a.contextType;return typeof y=="object"&&y!==null?y=tr(y):(g=zt(a)?na:ot.current,m=a.contextTypes,y=(m=m!=null)?Na(r,g):ki),a=new a(u,y),r.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=ms,r.stateNode=a,a._reactInternals=r,m&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=g,r.__reactInternalMemoizedMaskedChildContext=y),a}function ip(r,a,u,m){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(u,m),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(u,m),a.state!==r&&ms.enqueueReplaceState(a,a.state,null)}function Pu(r,a,u,m){var g=r.stateNode;g.props=u,g.state=r.memoizedState,g.refs={},yu(r);var y=a.contextType;typeof y=="object"&&y!==null?g.context=tr(y):(y=zt(a)?na:ot.current,g.context=Na(r,y)),g.state=r.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Au(r,a,y,u),g.state=r.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof g.getSnapshotBeforeUpdate=="function"||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(a=g.state,typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount(),a!==g.state&&ms.enqueueReplaceState(g,g.state,null),as(r,u,g,m),g.state=r.memoizedState),typeof g.componentDidMount=="function"&&(r.flags|=4194308)}function Ba(r,a){try{var u="",m=a;do u+=ze(m),m=m.return;while(m);var g=u}catch(y){g=`
Error generating stack: `+y.message+`
`+y.stack}return{value:r,source:a,stack:g,digest:null}}function Nu(r,a,u){return{value:r,source:null,stack:u??null,digest:a??null}}function Lu(r,a){try{console.error(a.value)}catch(u){setTimeout(function(){throw u})}}var v3=typeof WeakMap=="function"?WeakMap:Map;function ap(r,a,u){u=Kr(-1,u),u.tag=3,u.payload={element:null};var m=a.value;return u.callback=function(){bs||(bs=!0,Xu=m),Lu(r,a)},u}function lp(r,a,u){u=Kr(-1,u),u.tag=3;var m=r.type.getDerivedStateFromError;if(typeof m=="function"){var g=a.value;u.payload=function(){return m(g)},u.callback=function(){Lu(r,a)}}var y=r.stateNode;return y!==null&&typeof y.componentDidCatch=="function"&&(u.callback=function(){Lu(r,a),typeof m!="function"&&(Mi===null?Mi=new Set([this]):Mi.add(this));var S=a.stack;this.componentDidCatch(a.value,{componentStack:S!==null?S:""})}),u}function op(r,a,u){var m=r.pingCache;if(m===null){m=r.pingCache=new v3;var g=new Set;m.set(a,g)}else g=m.get(a),g===void 0&&(g=new Set,m.set(a,g));g.has(u)||(g.add(u),r=A3.bind(null,r,a,u),a.then(r,r))}function sp(r){do{var a;if((a=r.tag===13)&&(a=r.memoizedState,a=a!==null?a.dehydrated!==null:!0),a)return r;r=r.return}while(r!==null);return null}function up(r,a,u,m,g){return(r.mode&1)===0?(r===a?r.flags|=65536:(r.flags|=128,u.flags|=131072,u.flags&=-52805,u.tag===1&&(u.alternate===null?u.tag=17:(a=Kr(-1,1),a.tag=2,Ci(u,a,1))),u.lanes|=1),r):(r.flags|=65536,r.lanes=g,r)}var y3=ne.ReactCurrentOwner,At=!1;function bt(r,a,u,m){a.child=r===null?Tm(a,null,u,m):Ia(a,r.child,u,m)}function cp(r,a,u,m,g){u=u.render;var y=a.ref;return Fa(a,g),m=Cu(r,a,u,m,y,g),u=_u(),r!==null&&!At?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~g,Zr(r,a,g)):(En&&u&&su(a),a.flags|=1,bt(r,a,m,g),a.child)}function hp(r,a,u,m,g){if(r===null){var y=u.type;return typeof y=="function"&&!tc(y)&&y.defaultProps===void 0&&u.compare===null&&u.defaultProps===void 0?(a.tag=15,a.type=y,mp(r,a,y,m,g)):(r=Cs(u.type,null,m,a,a.mode,g),r.ref=a.ref,r.return=a,a.child=r)}if(y=r.child,(r.lanes&g)===0){var S=y.memoizedProps;if(u=u.compare,u=u!==null?u:Dl,u(S,m)&&r.ref===a.ref)return Zr(r,a,g)}return a.flags|=1,r=Ai(y,m),r.ref=a.ref,r.return=a,a.child=r}function mp(r,a,u,m,g){if(r!==null){var y=r.memoizedProps;if(Dl(y,m)&&r.ref===a.ref)if(At=!1,a.pendingProps=m=y,(r.lanes&g)!==0)(r.flags&131072)!==0&&(At=!0);else return a.lanes=r.lanes,Zr(r,a,g)}return Ju(r,a,u,m,g)}function pp(r,a,u){var m=a.pendingProps,g=m.children,y=r!==null?r.memoizedState:null;if(m.mode==="hidden")if((a.mode&1)===0)a.memoizedState={baseLanes:0,cachePool:null,transitions:null},kn(Ha,Vt),Vt|=u;else{if((u&1073741824)===0)return r=y!==null?y.baseLanes|u:u,a.lanes=a.childLanes=1073741824,a.memoizedState={baseLanes:r,cachePool:null,transitions:null},a.updateQueue=null,kn(Ha,Vt),Vt|=r,null;a.memoizedState={baseLanes:0,cachePool:null,transitions:null},m=y!==null?y.baseLanes:u,kn(Ha,Vt),Vt|=m}else y!==null?(m=y.baseLanes|u,a.memoizedState=null):m=u,kn(Ha,Vt),Vt|=m;return bt(r,a,g,u),a.child}function dp(r,a){var u=a.ref;(r===null&&u!==null||r!==null&&r.ref!==u)&&(a.flags|=512,a.flags|=2097152)}function Ju(r,a,u,m,g){var y=zt(u)?na:ot.current;return y=Na(a,y),Fa(a,g),u=Cu(r,a,u,m,y,g),m=_u(),r!==null&&!At?(a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~g,Zr(r,a,g)):(En&&m&&su(a),a.flags|=1,bt(r,a,u,g),a.child)}function fp(r,a,u,m,g){if(zt(u)){var y=!0;Yo(a)}else y=!1;if(Fa(a,g),a.stateNode===null)ds(r,a),rp(a,u,m),Pu(a,u,m,g),m=!0;else if(r===null){var S=a.stateNode,P=a.memoizedProps;S.props=P;var j=S.context,X=u.contextType;typeof X=="object"&&X!==null?X=tr(X):(X=zt(u)?na:ot.current,X=Na(a,X));var ce=u.getDerivedStateFromProps,pe=typeof ce=="function"||typeof S.getSnapshotBeforeUpdate=="function";pe||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(P!==m||j!==X)&&ip(a,S,m,X),Di=!1;var oe=a.memoizedState;S.state=oe,as(a,m,S,g),j=a.memoizedState,P!==m||oe!==j||Tt.current||Di?(typeof ce=="function"&&(Au(a,u,ce,m),j=a.memoizedState),(P=Di||tp(a,u,P,m,oe,j,X))?(pe||typeof S.UNSAFE_componentWillMount!="function"&&typeof S.componentWillMount!="function"||(typeof S.componentWillMount=="function"&&S.componentWillMount(),typeof S.UNSAFE_componentWillMount=="function"&&S.UNSAFE_componentWillMount()),typeof S.componentDidMount=="function"&&(a.flags|=4194308)):(typeof S.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=m,a.memoizedState=j),S.props=m,S.state=j,S.context=X,m=P):(typeof S.componentDidMount=="function"&&(a.flags|=4194308),m=!1)}else{S=a.stateNode,Am(r,a),P=a.memoizedProps,X=a.type===a.elementType?P:vr(a.type,P),S.props=X,pe=a.pendingProps,oe=S.context,j=u.contextType,typeof j=="object"&&j!==null?j=tr(j):(j=zt(u)?na:ot.current,j=Na(a,j));var Ce=u.getDerivedStateFromProps;(ce=typeof Ce=="function"||typeof S.getSnapshotBeforeUpdate=="function")||typeof S.UNSAFE_componentWillReceiveProps!="function"&&typeof S.componentWillReceiveProps!="function"||(P!==pe||oe!==j)&&ip(a,S,m,j),Di=!1,oe=a.memoizedState,S.state=oe,as(a,m,S,g);var Ne=a.memoizedState;P!==pe||oe!==Ne||Tt.current||Di?(typeof Ce=="function"&&(Au(a,u,Ce,m),Ne=a.memoizedState),(X=Di||tp(a,u,X,m,oe,Ne,j)||!1)?(ce||typeof S.UNSAFE_componentWillUpdate!="function"&&typeof S.componentWillUpdate!="function"||(typeof S.componentWillUpdate=="function"&&S.componentWillUpdate(m,Ne,j),typeof S.UNSAFE_componentWillUpdate=="function"&&S.UNSAFE_componentWillUpdate(m,Ne,j)),typeof S.componentDidUpdate=="function"&&(a.flags|=4),typeof S.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof S.componentDidUpdate!="function"||P===r.memoizedProps&&oe===r.memoizedState||(a.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&oe===r.memoizedState||(a.flags|=1024),a.memoizedProps=m,a.memoizedState=Ne),S.props=m,S.state=Ne,S.context=j,m=X):(typeof S.componentDidUpdate!="function"||P===r.memoizedProps&&oe===r.memoizedState||(a.flags|=4),typeof S.getSnapshotBeforeUpdate!="function"||P===r.memoizedProps&&oe===r.memoizedState||(a.flags|=1024),m=!1)}return Ru(r,a,u,m,y,g)}function Ru(r,a,u,m,g,y){dp(r,a);var S=(a.flags&128)!==0;if(!m&&!S)return g&&wm(a,u,!1),Zr(r,a,y);m=a.stateNode,y3.current=a;var P=S&&typeof u.getDerivedStateFromError!="function"?null:m.render();return a.flags|=1,r!==null&&S?(a.child=Ia(a,r.child,null,y),a.child=Ia(a,null,P,y)):bt(r,a,P,y),a.memoizedState=m.state,g&&wm(a,u,!0),a.child}function gp(r){var a=r.stateNode;a.pendingContext?ym(r,a.pendingContext,a.pendingContext!==a.context):a.context&&ym(r,a.context,!1),bu(r,a.containerInfo)}function vp(r,a,u,m,g){return Ra(),mu(g),a.flags|=256,bt(r,a,u,m),a.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function ju(r){return{baseLanes:r,cachePool:null,transitions:null}}function yp(r,a,u){var m=a.pendingProps,g=An.current,y=!1,S=(a.flags&128)!==0,P;if((P=S)||(P=r!==null&&r.memoizedState===null?!1:(g&2)!==0),P?(y=!0,a.flags&=-129):(r===null||r.memoizedState!==null)&&(g|=1),kn(An,g&1),r===null)return hu(a),r=a.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((a.mode&1)===0?a.lanes=1:r.data==="$!"?a.lanes=8:a.lanes=1073741824,null):(S=m.children,r=m.fallback,y?(m=a.mode,y=a.child,S={mode:"hidden",children:S},(m&1)===0&&y!==null?(y.childLanes=0,y.pendingProps=S):y=_s(S,m,0,null),r=ha(r,m,u,null),y.return=a,r.return=a,y.sibling=r,a.child=y,a.child.memoizedState=ju(u),a.memoizedState=Iu,r):Fu(a,S));if(g=r.memoizedState,g!==null&&(P=g.dehydrated,P!==null))return b3(r,a,S,m,P,g,u);if(y){y=m.fallback,S=a.mode,g=r.child,P=g.sibling;var j={mode:"hidden",children:m.children};return(S&1)===0&&a.child!==g?(m=a.child,m.childLanes=0,m.pendingProps=j,a.deletions=null):(m=Ai(g,j),m.subtreeFlags=g.subtreeFlags&14680064),P!==null?y=Ai(P,y):(y=ha(y,S,u,null),y.flags|=2),y.return=a,m.return=a,m.sibling=y,a.child=m,m=y,y=a.child,S=r.child.memoizedState,S=S===null?ju(u):{baseLanes:S.baseLanes|u,cachePool:null,transitions:S.transitions},y.memoizedState=S,y.childLanes=r.childLanes&~u,a.memoizedState=Iu,m}return y=r.child,r=y.sibling,m=Ai(y,{mode:"visible",children:m.children}),(a.mode&1)===0&&(m.lanes=u),m.return=a,m.sibling=null,r!==null&&(u=a.deletions,u===null?(a.deletions=[r],a.flags|=16):u.push(r)),a.child=m,a.memoizedState=null,m}function Fu(r,a){return a=_s({mode:"visible",children:a},r.mode,0,null),a.return=r,r.child=a}function ps(r,a,u,m){return m!==null&&mu(m),Ia(a,r.child,null,u),r=Fu(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function b3(r,a,u,m,g,y,S){if(u)return a.flags&256?(a.flags&=-257,m=Nu(Error(t(422))),ps(r,a,S,m)):a.memoizedState!==null?(a.child=r.child,a.flags|=128,null):(y=m.fallback,g=a.mode,m=_s({mode:"visible",children:m.children},g,0,null),y=ha(y,g,S,null),y.flags|=2,m.return=a,y.return=a,m.sibling=y,a.child=m,(a.mode&1)!==0&&Ia(a,r.child,null,S),a.child.memoizedState=ju(S),a.memoizedState=Iu,y);if((a.mode&1)===0)return ps(r,a,S,null);if(g.data==="$!"){if(m=g.nextSibling&&g.nextSibling.dataset,m)var P=m.dgst;return m=P,y=Error(t(419)),m=Nu(y,m,void 0),ps(r,a,S,m)}if(P=(S&r.childLanes)!==0,At||P){if(m=et,m!==null){switch(S&-S){case 4:g=2;break;case 16:g=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:g=32;break;case 536870912:g=268435456;break;default:g=0}g=(g&(m.suspendedLanes|S))!==0?0:g,g!==0&&g!==y.retryLane&&(y.retryLane=g,Qr(r,g),wr(m,r,g,-1))}return nc(),m=Nu(Error(t(421))),ps(r,a,S,m)}return g.data==="$?"?(a.flags|=128,a.child=r.child,a=P3.bind(null,r),g._reactRetry=a,null):(r=y.treeContext,Ut=wi(g.nextSibling),qt=a,En=!0,gr=null,r!==null&&(er[nr++]=Xr,er[nr++]=Yr,er[nr++]=ta,Xr=r.id,Yr=r.overflow,ta=a),a=Fu(a,m.children),a.flags|=4096,a)}function bp(r,a,u){r.lanes|=a;var m=r.alternate;m!==null&&(m.lanes|=a),gu(r.return,a,u)}function Ou(r,a,u,m,g){var y=r.memoizedState;y===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:m,tail:u,tailMode:g}:(y.isBackwards=a,y.rendering=null,y.renderingStartTime=0,y.last=m,y.tail=u,y.tailMode=g)}function wp(r,a,u){var m=a.pendingProps,g=m.revealOrder,y=m.tail;if(bt(r,a,m.children,u),m=An.current,(m&2)!==0)m=m&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&bp(r,u,a);else if(r.tag===19)bp(r,u,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}m&=1}if(kn(An,m),(a.mode&1)===0)a.memoizedState=null;else switch(g){case"forwards":for(u=a.child,g=null;u!==null;)r=u.alternate,r!==null&&ls(r)===null&&(g=u),u=u.sibling;u=g,u===null?(g=a.child,a.child=null):(g=u.sibling,u.sibling=null),Ou(a,!1,g,u,y);break;case"backwards":for(u=null,g=a.child,a.child=null;g!==null;){if(r=g.alternate,r!==null&&ls(r)===null){a.child=g;break}r=g.sibling,g.sibling=u,u=g,g=r}Ou(a,!0,u,null,y);break;case"together":Ou(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function ds(r,a){(a.mode&1)===0&&r!==null&&(r.alternate=null,a.alternate=null,a.flags|=2)}function Zr(r,a,u){if(r!==null&&(a.dependencies=r.dependencies),oa|=a.lanes,(u&a.childLanes)===0)return null;if(r!==null&&a.child!==r.child)throw Error(t(153));if(a.child!==null){for(r=a.child,u=Ai(r,r.pendingProps),a.child=u,u.return=a;r.sibling!==null;)r=r.sibling,u=u.sibling=Ai(r,r.pendingProps),u.return=a;u.sibling=null}return a.child}function w3(r,a,u){switch(a.tag){case 3:gp(a),Ra();break;case 5:Lm(a);break;case 1:zt(a.type)&&Yo(a);break;case 4:bu(a,a.stateNode.containerInfo);break;case 10:var m=a.type._context,g=a.memoizedProps.value;kn(ts,m._currentValue),m._currentValue=g;break;case 13:if(m=a.memoizedState,m!==null)return m.dehydrated!==null?(kn(An,An.current&1),a.flags|=128,null):(u&a.child.childLanes)!==0?yp(r,a,u):(kn(An,An.current&1),r=Zr(r,a,u),r!==null?r.sibling:null);kn(An,An.current&1);break;case 19:if(m=(u&a.childLanes)!==0,(r.flags&128)!==0){if(m)return wp(r,a,u);a.flags|=128}if(g=a.memoizedState,g!==null&&(g.rendering=null,g.tail=null,g.lastEffect=null),kn(An,An.current),m)break;return null;case 22:case 23:return a.lanes=0,pp(r,a,u)}return Zr(r,a,u)}var xp,Bu,kp,Sp;xp=function(r,a){for(var u=a.child;u!==null;){if(u.tag===5||u.tag===6)r.appendChild(u.stateNode);else if(u.tag!==4&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break;for(;u.sibling===null;){if(u.return===null||u.return===a)return;u=u.return}u.sibling.return=u.return,u=u.sibling}},Bu=function(){},kp=function(r,a,u,m){var g=r.memoizedProps;if(g!==m){r=a.stateNode,aa(Er.current);var y=null;switch(u){case"input":g=kr(r,g),m=kr(r,m),y=[];break;case"select":g=M({},g,{value:void 0}),m=M({},m,{value:void 0}),y=[];break;case"textarea":g=Wi(r,g),m=Wi(r,m),y=[];break;default:typeof g.onClick!="function"&&typeof m.onClick=="function"&&(r.onclick=Wo)}On(u,m);var S;u=null;for(X in g)if(!m.hasOwnProperty(X)&&g.hasOwnProperty(X)&&g[X]!=null)if(X==="style"){var P=g[X];for(S in P)P.hasOwnProperty(S)&&(u||(u={}),u[S]="")}else X!=="dangerouslySetInnerHTML"&&X!=="children"&&X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&X!=="autoFocus"&&(l.hasOwnProperty(X)?y||(y=[]):(y=y||[]).push(X,null));for(X in m){var j=m[X];if(P=g!=null?g[X]:void 0,m.hasOwnProperty(X)&&j!==P&&(j!=null||P!=null))if(X==="style")if(P){for(S in P)!P.hasOwnProperty(S)||j&&j.hasOwnProperty(S)||(u||(u={}),u[S]="");for(S in j)j.hasOwnProperty(S)&&P[S]!==j[S]&&(u||(u={}),u[S]=j[S])}else u||(y||(y=[]),y.push(X,u)),u=j;else X==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,P=P?P.__html:void 0,j!=null&&P!==j&&(y=y||[]).push(X,j)):X==="children"?typeof j!="string"&&typeof j!="number"||(y=y||[]).push(X,""+j):X!=="suppressContentEditableWarning"&&X!=="suppressHydrationWarning"&&(l.hasOwnProperty(X)?(j!=null&&X==="onScroll"&&Cn("scroll",r),y||P===j||(y=[])):(y=y||[]).push(X,j))}u&&(y=y||[]).push("style",u);var X=y;(a.updateQueue=X)&&(a.flags|=4)}},Sp=function(r,a,u,m){u!==m&&(a.flags|=4)};function Fl(r,a){if(!En)switch(r.tailMode){case"hidden":a=r.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?r.tail=null:u.sibling=null;break;case"collapsed":u=r.tail;for(var m=null;u!==null;)u.alternate!==null&&(m=u),u=u.sibling;m===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:m.sibling=null}}function ut(r){var a=r.alternate!==null&&r.alternate.child===r.child,u=0,m=0;if(a)for(var g=r.child;g!==null;)u|=g.lanes|g.childLanes,m|=g.subtreeFlags&14680064,m|=g.flags&14680064,g.return=r,g=g.sibling;else for(g=r.child;g!==null;)u|=g.lanes|g.childLanes,m|=g.subtreeFlags,m|=g.flags,g.return=r,g=g.sibling;return r.subtreeFlags|=m,r.childLanes=u,a}function x3(r,a,u){var m=a.pendingProps;switch(uu(a),a.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(a),null;case 1:return zt(a.type)&&Xo(),ut(a),null;case 3:return m=a.stateNode,Oa(),_n(Tt),_n(ot),ku(),m.pendingContext&&(m.context=m.pendingContext,m.pendingContext=null),(r===null||r.child===null)&&(es(a)?a.flags|=4:r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,gr!==null&&(Ku(gr),gr=null))),Bu(r,a),ut(a),null;case 5:wu(a);var g=aa(Ll.current);if(u=a.type,r!==null&&a.stateNode!=null)kp(r,a,u,m,g),r.ref!==a.ref&&(a.flags|=512,a.flags|=2097152);else{if(!m){if(a.stateNode===null)throw Error(t(166));return ut(a),null}if(r=aa(Er.current),es(a)){m=a.stateNode,u=a.type;var y=a.memoizedProps;switch(m[Mr]=a,m[Tl]=y,r=(a.mode&1)!==0,u){case"dialog":Cn("cancel",m),Cn("close",m);break;case"iframe":case"object":case"embed":Cn("load",m);break;case"video":case"audio":for(g=0;g<_l.length;g++)Cn(_l[g],m);break;case"source":Cn("error",m);break;case"img":case"image":case"link":Cn("error",m),Cn("load",m);break;case"details":Cn("toggle",m);break;case"input":Br(m,y),Cn("invalid",m);break;case"select":m._wrapperState={wasMultiple:!!y.multiple},Cn("invalid",m);break;case"textarea":ka(m,y),Cn("invalid",m)}On(u,y),g=null;for(var S in y)if(y.hasOwnProperty(S)){var P=y[S];S==="children"?typeof P=="string"?m.textContent!==P&&(y.suppressHydrationWarning!==!0&&Vo(m.textContent,P,r),g=["children",P]):typeof P=="number"&&m.textContent!==""+P&&(y.suppressHydrationWarning!==!0&&Vo(m.textContent,P,r),g=["children",""+P]):l.hasOwnProperty(S)&&P!=null&&S==="onScroll"&&Cn("scroll",m)}switch(u){case"input":at(m),$r(m,y,!0);break;case"textarea":at(m),Sr(m);break;case"select":case"option":break;default:typeof y.onClick=="function"&&(m.onclick=Wo)}m=g,a.updateQueue=m,m!==null&&(a.flags|=4)}else{S=g.nodeType===9?g:g.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Z(u)),r==="http://www.w3.org/1999/xhtml"?u==="script"?(r=S.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof m.is=="string"?r=S.createElement(u,{is:m.is}):(r=S.createElement(u),u==="select"&&(S=r,m.multiple?S.multiple=!0:m.size&&(S.size=m.size))):r=S.createElementNS(r,u),r[Mr]=a,r[Tl]=m,xp(r,a,!1,!1),a.stateNode=r;e:{switch(S=Bt(u,m),u){case"dialog":Cn("cancel",r),Cn("close",r),g=m;break;case"iframe":case"object":case"embed":Cn("load",r),g=m;break;case"video":case"audio":for(g=0;g<_l.length;g++)Cn(_l[g],r);g=m;break;case"source":Cn("error",r),g=m;break;case"img":case"image":case"link":Cn("error",r),Cn("load",r),g=m;break;case"details":Cn("toggle",r),g=m;break;case"input":Br(r,m),g=kr(r,m),Cn("invalid",r);break;case"option":g=m;break;case"select":r._wrapperState={wasMultiple:!!m.multiple},g=M({},m,{value:void 0}),Cn("invalid",r);break;case"textarea":ka(r,m),g=Wi(r,m),Cn("invalid",r);break;default:g=m}On(u,g),P=g;for(y in P)if(P.hasOwnProperty(y)){var j=P[y];y==="style"?Qn(r,j):y==="dangerouslySetInnerHTML"?(j=j?j.__html:void 0,j!=null&&We(r,j)):y==="children"?typeof j=="string"?(u!=="textarea"||j!=="")&&un(r,j):typeof j=="number"&&un(r,""+j):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(l.hasOwnProperty(y)?j!=null&&y==="onScroll"&&Cn("scroll",r):j!=null&&O(r,y,j,S))}switch(u){case"input":at(r),$r(r,m,!1);break;case"textarea":at(r),Sr(r);break;case"option":m.value!=null&&r.setAttribute("value",""+Ve(m.value));break;case"select":r.multiple=!!m.multiple,y=m.value,y!=null?gt(r,!!m.multiple,y,!1):m.defaultValue!=null&&gt(r,!!m.multiple,m.defaultValue,!0);break;default:typeof g.onClick=="function"&&(r.onclick=Wo)}switch(u){case"button":case"input":case"select":case"textarea":m=!!m.autoFocus;break e;case"img":m=!0;break e;default:m=!1}}m&&(a.flags|=4)}a.ref!==null&&(a.flags|=512,a.flags|=2097152)}return ut(a),null;case 6:if(r&&a.stateNode!=null)Sp(r,a,r.memoizedProps,m);else{if(typeof m!="string"&&a.stateNode===null)throw Error(t(166));if(u=aa(Ll.current),aa(Er.current),es(a)){if(m=a.stateNode,u=a.memoizedProps,m[Mr]=a,(y=m.nodeValue!==u)&&(r=qt,r!==null))switch(r.tag){case 3:Vo(m.nodeValue,u,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Vo(m.nodeValue,u,(r.mode&1)!==0)}y&&(a.flags|=4)}else m=(u.nodeType===9?u:u.ownerDocument).createTextNode(m),m[Mr]=a,a.stateNode=m}return ut(a),null;case 13:if(_n(An),m=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(En&&Ut!==null&&(a.mode&1)!==0&&(a.flags&128)===0)_m(),Ra(),a.flags|=98560,y=!1;else if(y=es(a),m!==null&&m.dehydrated!==null){if(r===null){if(!y)throw Error(t(318));if(y=a.memoizedState,y=y!==null?y.dehydrated:null,!y)throw Error(t(317));y[Mr]=a}else Ra(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ut(a),y=!1}else gr!==null&&(Ku(gr),gr=null),y=!0;if(!y)return a.flags&65536?a:null}return(a.flags&128)!==0?(a.lanes=u,a):(m=m!==null,m!==(r!==null&&r.memoizedState!==null)&&m&&(a.child.flags|=8192,(a.mode&1)!==0&&(r===null||(An.current&1)!==0?Xn===0&&(Xn=3):nc())),a.updateQueue!==null&&(a.flags|=4),ut(a),null);case 4:return Oa(),Bu(r,a),r===null&&Ml(a.stateNode.containerInfo),ut(a),null;case 10:return fu(a.type._context),ut(a),null;case 17:return zt(a.type)&&Xo(),ut(a),null;case 19:if(_n(An),y=a.memoizedState,y===null)return ut(a),null;if(m=(a.flags&128)!==0,S=y.rendering,S===null)if(m)Fl(y,!1);else{if(Xn!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(S=ls(r),S!==null){for(a.flags|=128,Fl(y,!1),m=S.updateQueue,m!==null&&(a.updateQueue=m,a.flags|=4),a.subtreeFlags=0,m=u,u=a.child;u!==null;)y=u,r=m,y.flags&=14680066,S=y.alternate,S===null?(y.childLanes=0,y.lanes=r,y.child=null,y.subtreeFlags=0,y.memoizedProps=null,y.memoizedState=null,y.updateQueue=null,y.dependencies=null,y.stateNode=null):(y.childLanes=S.childLanes,y.lanes=S.lanes,y.child=S.child,y.subtreeFlags=0,y.deletions=null,y.memoizedProps=S.memoizedProps,y.memoizedState=S.memoizedState,y.updateQueue=S.updateQueue,y.type=S.type,r=S.dependencies,y.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),u=u.sibling;return kn(An,An.current&1|2),a.child}r=r.sibling}y.tail!==null&&gn()>qa&&(a.flags|=128,m=!0,Fl(y,!1),a.lanes=4194304)}else{if(!m)if(r=ls(S),r!==null){if(a.flags|=128,m=!0,u=r.updateQueue,u!==null&&(a.updateQueue=u,a.flags|=4),Fl(y,!0),y.tail===null&&y.tailMode==="hidden"&&!S.alternate&&!En)return ut(a),null}else 2*gn()-y.renderingStartTime>qa&&u!==1073741824&&(a.flags|=128,m=!0,Fl(y,!1),a.lanes=4194304);y.isBackwards?(S.sibling=a.child,a.child=S):(u=y.last,u!==null?u.sibling=S:a.child=S,y.last=S)}return y.tail!==null?(a=y.tail,y.rendering=a,y.tail=a.sibling,y.renderingStartTime=gn(),a.sibling=null,u=An.current,kn(An,m?u&1|2:u&1),a):(ut(a),null);case 22:case 23:return ec(),m=a.memoizedState!==null,r!==null&&r.memoizedState!==null!==m&&(a.flags|=8192),m&&(a.mode&1)!==0?(Vt&1073741824)!==0&&(ut(a),a.subtreeFlags&6&&(a.flags|=8192)):ut(a),null;case 24:return null;case 25:return null}throw Error(t(156,a.tag))}function k3(r,a){switch(uu(a),a.tag){case 1:return zt(a.type)&&Xo(),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return Oa(),_n(Tt),_n(ot),ku(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 5:return wu(a),null;case 13:if(_n(An),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(t(340));Ra()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return _n(An),null;case 4:return Oa(),null;case 10:return fu(a.type._context),null;case 22:case 23:return ec(),null;case 24:return null;default:return null}}var fs=!1,ct=!1,S3=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function $a(r,a){var u=r.ref;if(u!==null)if(typeof u=="function")try{u(null)}catch(m){Jn(r,a,m)}else u.current=null}function $u(r,a,u){try{u()}catch(m){Jn(r,a,m)}}var Dp=!1;function D3(r,a){if(eu=Jo,r=tm(),V0(r)){if("selectionStart"in r)var u={start:r.selectionStart,end:r.selectionEnd};else e:{u=(u=r.ownerDocument)&&u.defaultView||window;var m=u.getSelection&&u.getSelection();if(m&&m.rangeCount!==0){u=m.anchorNode;var g=m.anchorOffset,y=m.focusNode;m=m.focusOffset;try{u.nodeType,y.nodeType}catch{u=null;break e}var S=0,P=-1,j=-1,X=0,ce=0,pe=r,oe=null;n:for(;;){for(var Ce;pe!==u||g!==0&&pe.nodeType!==3||(P=S+g),pe!==y||m!==0&&pe.nodeType!==3||(j=S+m),pe.nodeType===3&&(S+=pe.nodeValue.length),(Ce=pe.firstChild)!==null;)oe=pe,pe=Ce;for(;;){if(pe===r)break n;if(oe===u&&++X===g&&(P=S),oe===y&&++ce===m&&(j=S),(Ce=pe.nextSibling)!==null)break;pe=oe,oe=pe.parentNode}pe=Ce}u=P===-1||j===-1?null:{start:P,end:j}}else u=null}u=u||{start:0,end:0}}else u=null;for(nu={focusedElem:r,selectionRange:u},Jo=!1,Ee=a;Ee!==null;)if(a=Ee,r=a.child,(a.subtreeFlags&1028)!==0&&r!==null)r.return=a,Ee=r;else for(;Ee!==null;){a=Ee;try{var Ne=a.alternate;if((a.flags&1024)!==0)switch(a.tag){case 0:case 11:case 15:break;case 1:if(Ne!==null){var Re=Ne.memoizedProps,jn=Ne.memoizedState,V=a.stateNode,$=V.getSnapshotBeforeUpdate(a.elementType===a.type?Re:vr(a.type,Re),jn);V.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var W=a.stateNode.containerInfo;W.nodeType===1?W.textContent="":W.nodeType===9&&W.documentElement&&W.removeChild(W.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(ve){Jn(a,a.return,ve)}if(r=a.sibling,r!==null){r.return=a.return,Ee=r;break}Ee=a.return}return Ne=Dp,Dp=!1,Ne}function Ol(r,a,u){var m=a.updateQueue;if(m=m!==null?m.lastEffect:null,m!==null){var g=m=m.next;do{if((g.tag&r)===r){var y=g.destroy;g.destroy=void 0,y!==void 0&&$u(a,u,y)}g=g.next}while(g!==m)}}function gs(r,a){if(a=a.updateQueue,a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&r)===r){var m=u.create;u.destroy=m()}u=u.next}while(u!==a)}}function Hu(r){var a=r.ref;if(a!==null){var u=r.stateNode;switch(r.tag){case 5:r=u;break;default:r=u}typeof a=="function"?a(r):a.current=r}}function Cp(r){var a=r.alternate;a!==null&&(r.alternate=null,Cp(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&(delete a[Mr],delete a[Tl],delete a[au],delete a[l3],delete a[o3])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function _p(r){return r.tag===5||r.tag===3||r.tag===4}function Mp(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||_p(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function qu(r,a,u){var m=r.tag;if(m===5||m===6)r=r.stateNode,a?u.nodeType===8?u.parentNode.insertBefore(r,a):u.insertBefore(r,a):(u.nodeType===8?(a=u.parentNode,a.insertBefore(r,u)):(a=u,a.appendChild(r)),u=u._reactRootContainer,u!=null||a.onclick!==null||(a.onclick=Wo));else if(m!==4&&(r=r.child,r!==null))for(qu(r,a,u),r=r.sibling;r!==null;)qu(r,a,u),r=r.sibling}function Uu(r,a,u){var m=r.tag;if(m===5||m===6)r=r.stateNode,a?u.insertBefore(r,a):u.appendChild(r);else if(m!==4&&(r=r.child,r!==null))for(Uu(r,a,u),r=r.sibling;r!==null;)Uu(r,a,u),r=r.sibling}var rt=null,yr=!1;function _i(r,a,u){for(u=u.child;u!==null;)Ep(r,a,u),u=u.sibling}function Ep(r,a,u){if(yt&&typeof yt.onCommitFiberUnmount=="function")try{yt.onCommitFiberUnmount(qr,u)}catch{}switch(u.tag){case 5:ct||$a(u,a);case 6:var m=rt,g=yr;rt=null,_i(r,a,u),rt=m,yr=g,rt!==null&&(yr?(r=rt,u=u.stateNode,r.nodeType===8?r.parentNode.removeChild(u):r.removeChild(u)):rt.removeChild(u.stateNode));break;case 18:rt!==null&&(yr?(r=rt,u=u.stateNode,r.nodeType===8?iu(r.parentNode,u):r.nodeType===1&&iu(r,u),yl(r)):iu(rt,u.stateNode));break;case 4:m=rt,g=yr,rt=u.stateNode.containerInfo,yr=!0,_i(r,a,u),rt=m,yr=g;break;case 0:case 11:case 14:case 15:if(!ct&&(m=u.updateQueue,m!==null&&(m=m.lastEffect,m!==null))){g=m=m.next;do{var y=g,S=y.destroy;y=y.tag,S!==void 0&&((y&2)!==0||(y&4)!==0)&&$u(u,a,S),g=g.next}while(g!==m)}_i(r,a,u);break;case 1:if(!ct&&($a(u,a),m=u.stateNode,typeof m.componentWillUnmount=="function"))try{m.props=u.memoizedProps,m.state=u.memoizedState,m.componentWillUnmount()}catch(P){Jn(u,a,P)}_i(r,a,u);break;case 21:_i(r,a,u);break;case 22:u.mode&1?(ct=(m=ct)||u.memoizedState!==null,_i(r,a,u),ct=m):_i(r,a,u);break;default:_i(r,a,u)}}function Tp(r){var a=r.updateQueue;if(a!==null){r.updateQueue=null;var u=r.stateNode;u===null&&(u=r.stateNode=new S3),a.forEach(function(m){var g=N3.bind(null,r,m);u.has(m)||(u.add(m),m.then(g,g))})}}function br(r,a){var u=a.deletions;if(u!==null)for(var m=0;m<u.length;m++){var g=u[m];try{var y=r,S=a,P=S;e:for(;P!==null;){switch(P.tag){case 5:rt=P.stateNode,yr=!1;break e;case 3:rt=P.stateNode.containerInfo,yr=!0;break e;case 4:rt=P.stateNode.containerInfo,yr=!0;break e}P=P.return}if(rt===null)throw Error(t(160));Ep(y,S,g),rt=null,yr=!1;var j=g.alternate;j!==null&&(j.return=null),g.return=null}catch(X){Jn(g,a,X)}}if(a.subtreeFlags&12854)for(a=a.child;a!==null;)zp(a,r),a=a.sibling}function zp(r,a){var u=r.alternate,m=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(br(a,r),zr(r),m&4){try{Ol(3,r,r.return),gs(3,r)}catch(Re){Jn(r,r.return,Re)}try{Ol(5,r,r.return)}catch(Re){Jn(r,r.return,Re)}}break;case 1:br(a,r),zr(r),m&512&&u!==null&&$a(u,u.return);break;case 5:if(br(a,r),zr(r),m&512&&u!==null&&$a(u,u.return),r.flags&32){var g=r.stateNode;try{un(g,"")}catch(Re){Jn(r,r.return,Re)}}if(m&4&&(g=r.stateNode,g!=null)){var y=r.memoizedProps,S=u!==null?u.memoizedProps:y,P=r.type,j=r.updateQueue;if(r.updateQueue=null,j!==null)try{P==="input"&&y.type==="radio"&&y.name!=null&&tt(g,y),Bt(P,S);var X=Bt(P,y);for(S=0;S<j.length;S+=2){var ce=j[S],pe=j[S+1];ce==="style"?Qn(g,pe):ce==="dangerouslySetInnerHTML"?We(g,pe):ce==="children"?un(g,pe):O(g,ce,pe,X)}switch(P){case"input":dr(g,y);break;case"textarea":Kt(g,y);break;case"select":var oe=g._wrapperState.wasMultiple;g._wrapperState.wasMultiple=!!y.multiple;var Ce=y.value;Ce!=null?gt(g,!!y.multiple,Ce,!1):oe!==!!y.multiple&&(y.defaultValue!=null?gt(g,!!y.multiple,y.defaultValue,!0):gt(g,!!y.multiple,y.multiple?[]:"",!1))}g[Tl]=y}catch(Re){Jn(r,r.return,Re)}}break;case 6:if(br(a,r),zr(r),m&4){if(r.stateNode===null)throw Error(t(162));g=r.stateNode,y=r.memoizedProps;try{g.nodeValue=y}catch(Re){Jn(r,r.return,Re)}}break;case 3:if(br(a,r),zr(r),m&4&&u!==null&&u.memoizedState.isDehydrated)try{yl(a.containerInfo)}catch(Re){Jn(r,r.return,Re)}break;case 4:br(a,r),zr(r);break;case 13:br(a,r),zr(r),g=r.child,g.flags&8192&&(y=g.memoizedState!==null,g.stateNode.isHidden=y,!y||g.alternate!==null&&g.alternate.memoizedState!==null||(Gu=gn())),m&4&&Tp(r);break;case 22:if(ce=u!==null&&u.memoizedState!==null,r.mode&1?(ct=(X=ct)||ce,br(a,r),ct=X):br(a,r),zr(r),m&8192){if(X=r.memoizedState!==null,(r.stateNode.isHidden=X)&&!ce&&(r.mode&1)!==0)for(Ee=r,ce=r.child;ce!==null;){for(pe=Ee=ce;Ee!==null;){switch(oe=Ee,Ce=oe.child,oe.tag){case 0:case 11:case 14:case 15:Ol(4,oe,oe.return);break;case 1:$a(oe,oe.return);var Ne=oe.stateNode;if(typeof Ne.componentWillUnmount=="function"){m=oe,u=oe.return;try{a=m,Ne.props=a.memoizedProps,Ne.state=a.memoizedState,Ne.componentWillUnmount()}catch(Re){Jn(m,u,Re)}}break;case 5:$a(oe,oe.return);break;case 22:if(oe.memoizedState!==null){Np(pe);continue}}Ce!==null?(Ce.return=oe,Ee=Ce):Np(pe)}ce=ce.sibling}e:for(ce=null,pe=r;;){if(pe.tag===5){if(ce===null){ce=pe;try{g=pe.stateNode,X?(y=g.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none"):(P=pe.stateNode,j=pe.memoizedProps.style,S=j!=null&&j.hasOwnProperty("display")?j.display:null,P.style.display=Mt("display",S))}catch(Re){Jn(r,r.return,Re)}}}else if(pe.tag===6){if(ce===null)try{pe.stateNode.nodeValue=X?"":pe.memoizedProps}catch(Re){Jn(r,r.return,Re)}}else if((pe.tag!==22&&pe.tag!==23||pe.memoizedState===null||pe===r)&&pe.child!==null){pe.child.return=pe,pe=pe.child;continue}if(pe===r)break e;for(;pe.sibling===null;){if(pe.return===null||pe.return===r)break e;ce===pe&&(ce=null),pe=pe.return}ce===pe&&(ce=null),pe.sibling.return=pe.return,pe=pe.sibling}}break;case 19:br(a,r),zr(r),m&4&&Tp(r);break;case 21:break;default:br(a,r),zr(r)}}function zr(r){var a=r.flags;if(a&2){try{e:{for(var u=r.return;u!==null;){if(_p(u)){var m=u;break e}u=u.return}throw Error(t(160))}switch(m.tag){case 5:var g=m.stateNode;m.flags&32&&(un(g,""),m.flags&=-33);var y=Mp(r);Uu(r,y,g);break;case 3:case 4:var S=m.stateNode.containerInfo,P=Mp(r);qu(r,P,S);break;default:throw Error(t(161))}}catch(j){Jn(r,r.return,j)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function C3(r,a,u){Ee=r,Ap(r)}function Ap(r,a,u){for(var m=(r.mode&1)!==0;Ee!==null;){var g=Ee,y=g.child;if(g.tag===22&&m){var S=g.memoizedState!==null||fs;if(!S){var P=g.alternate,j=P!==null&&P.memoizedState!==null||ct;P=fs;var X=ct;if(fs=S,(ct=j)&&!X)for(Ee=g;Ee!==null;)S=Ee,j=S.child,S.tag===22&&S.memoizedState!==null?Lp(g):j!==null?(j.return=S,Ee=j):Lp(g);for(;y!==null;)Ee=y,Ap(y),y=y.sibling;Ee=g,fs=P,ct=X}Pp(r)}else(g.subtreeFlags&8772)!==0&&y!==null?(y.return=g,Ee=y):Pp(r)}}function Pp(r){for(;Ee!==null;){var a=Ee;if((a.flags&8772)!==0){var u=a.alternate;try{if((a.flags&8772)!==0)switch(a.tag){case 0:case 11:case 15:ct||gs(5,a);break;case 1:var m=a.stateNode;if(a.flags&4&&!ct)if(u===null)m.componentDidMount();else{var g=a.elementType===a.type?u.memoizedProps:vr(a.type,u.memoizedProps);m.componentDidUpdate(g,u.memoizedState,m.__reactInternalSnapshotBeforeUpdate)}var y=a.updateQueue;y!==null&&Nm(a,y,m);break;case 3:var S=a.updateQueue;if(S!==null){if(u=null,a.child!==null)switch(a.child.tag){case 5:u=a.child.stateNode;break;case 1:u=a.child.stateNode}Nm(a,S,u)}break;case 5:var P=a.stateNode;if(u===null&&a.flags&4){u=P;var j=a.memoizedProps;switch(a.type){case"button":case"input":case"select":case"textarea":j.autoFocus&&u.focus();break;case"img":j.src&&(u.src=j.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(a.memoizedState===null){var X=a.alternate;if(X!==null){var ce=X.memoizedState;if(ce!==null){var pe=ce.dehydrated;pe!==null&&yl(pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ct||a.flags&512&&Hu(a)}catch(oe){Jn(a,a.return,oe)}}if(a===r){Ee=null;break}if(u=a.sibling,u!==null){u.return=a.return,Ee=u;break}Ee=a.return}}function Np(r){for(;Ee!==null;){var a=Ee;if(a===r){Ee=null;break}var u=a.sibling;if(u!==null){u.return=a.return,Ee=u;break}Ee=a.return}}function Lp(r){for(;Ee!==null;){var a=Ee;try{switch(a.tag){case 0:case 11:case 15:var u=a.return;try{gs(4,a)}catch(j){Jn(a,u,j)}break;case 1:var m=a.stateNode;if(typeof m.componentDidMount=="function"){var g=a.return;try{m.componentDidMount()}catch(j){Jn(a,g,j)}}var y=a.return;try{Hu(a)}catch(j){Jn(a,y,j)}break;case 5:var S=a.return;try{Hu(a)}catch(j){Jn(a,S,j)}}}catch(j){Jn(a,a.return,j)}if(a===r){Ee=null;break}var P=a.sibling;if(P!==null){P.return=a.return,Ee=P;break}Ee=a.return}}var _3=Math.ceil,vs=ne.ReactCurrentDispatcher,Vu=ne.ReactCurrentOwner,ir=ne.ReactCurrentBatchConfig,hn=0,et=null,$n=null,it=0,Vt=0,Ha=xi(0),Xn=0,Bl=null,oa=0,ys=0,Wu=0,$l=null,Pt=null,Gu=0,qa=1/0,ei=null,bs=!1,Xu=null,Mi=null,ws=!1,Ei=null,xs=0,Hl=0,Yu=null,ks=-1,Ss=0;function wt(){return(hn&6)!==0?gn():ks!==-1?ks:ks=gn()}function Ti(r){return(r.mode&1)===0?1:(hn&2)!==0&&it!==0?it&-it:u3.transition!==null?(Ss===0&&(Ss=Mh()),Ss):(r=vn,r!==0||(r=window.event,r=r===void 0?16:Rh(r.type)),r)}function wr(r,a,u,m){if(50<Hl)throw Hl=0,Yu=null,Error(t(185));pl(r,u,m),((hn&2)===0||r!==et)&&(r===et&&((hn&2)===0&&(ys|=u),Xn===4&&zi(r,it)),Nt(r,m),u===1&&hn===0&&(a.mode&1)===0&&(qa=gn()+500,Qo&&Si()))}function Nt(r,a){var u=r.callbackNode;u5(r,a);var m=Po(r,r===et?it:0);if(m===0)u!==null&&Kn(u),r.callbackNode=null,r.callbackPriority=0;else if(a=m&-m,r.callbackPriority!==a){if(u!=null&&Kn(u),a===1)r.tag===0?s3(Rp.bind(null,r)):xm(Rp.bind(null,r)),i3(function(){(hn&6)===0&&Si()}),u=null;else{switch(Eh(m)){case 1:u=Zt;break;case 4:u=$t;break;case 16:u=mi;break;case 536870912:u=_r;break;default:u=mi}u=qp(u,Jp.bind(null,r))}r.callbackPriority=a,r.callbackNode=u}}function Jp(r,a){if(ks=-1,Ss=0,(hn&6)!==0)throw Error(t(327));var u=r.callbackNode;if(Ua()&&r.callbackNode!==u)return null;var m=Po(r,r===et?it:0);if(m===0)return null;if((m&30)!==0||(m&r.expiredLanes)!==0||a)a=Ds(r,m);else{a=m;var g=hn;hn|=2;var y=jp();(et!==r||it!==a)&&(ei=null,qa=gn()+500,ua(r,a));do try{T3();break}catch(P){Ip(r,P)}while(!0);du(),vs.current=y,hn=g,$n!==null?a=0:(et=null,it=0,a=Xn)}if(a!==0){if(a===2&&(g=z0(r),g!==0&&(m=g,a=Qu(r,g))),a===1)throw u=Bl,ua(r,0),zi(r,m),Nt(r,gn()),u;if(a===6)zi(r,m);else{if(g=r.current.alternate,(m&30)===0&&!M3(g)&&(a=Ds(r,m),a===2&&(y=z0(r),y!==0&&(m=y,a=Qu(r,y))),a===1))throw u=Bl,ua(r,0),zi(r,m),Nt(r,gn()),u;switch(r.finishedWork=g,r.finishedLanes=m,a){case 0:case 1:throw Error(t(345));case 2:ca(r,Pt,ei);break;case 3:if(zi(r,m),(m&130023424)===m&&(a=Gu+500-gn(),10<a)){if(Po(r,0)!==0)break;if(g=r.suspendedLanes,(g&m)!==m){wt(),r.pingedLanes|=r.suspendedLanes&g;break}r.timeoutHandle=ru(ca.bind(null,r,Pt,ei),a);break}ca(r,Pt,ei);break;case 4:if(zi(r,m),(m&4194240)===m)break;for(a=r.eventTimes,g=-1;0<m;){var S=31-yn(m);y=1<<S,S=a[S],S>g&&(g=S),m&=~y}if(m=g,m=gn()-m,m=(120>m?120:480>m?480:1080>m?1080:1920>m?1920:3e3>m?3e3:4320>m?4320:1960*_3(m/1960))-m,10<m){r.timeoutHandle=ru(ca.bind(null,r,Pt,ei),m);break}ca(r,Pt,ei);break;case 5:ca(r,Pt,ei);break;default:throw Error(t(329))}}}return Nt(r,gn()),r.callbackNode===u?Jp.bind(null,r):null}function Qu(r,a){var u=$l;return r.current.memoizedState.isDehydrated&&(ua(r,a).flags|=256),r=Ds(r,a),r!==2&&(a=Pt,Pt=u,a!==null&&Ku(a)),r}function Ku(r){Pt===null?Pt=r:Pt.push.apply(Pt,r)}function M3(r){for(var a=r;;){if(a.flags&16384){var u=a.updateQueue;if(u!==null&&(u=u.stores,u!==null))for(var m=0;m<u.length;m++){var g=u[m],y=g.getSnapshot;g=g.value;try{if(!fr(y(),g))return!1}catch{return!1}}}if(u=a.child,a.subtreeFlags&16384&&u!==null)u.return=a,a=u;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function zi(r,a){for(a&=~Wu,a&=~ys,r.suspendedLanes|=a,r.pingedLanes&=~a,r=r.expirationTimes;0<a;){var u=31-yn(a),m=1<<u;r[u]=-1,a&=~m}}function Rp(r){if((hn&6)!==0)throw Error(t(327));Ua();var a=Po(r,0);if((a&1)===0)return Nt(r,gn()),null;var u=Ds(r,a);if(r.tag!==0&&u===2){var m=z0(r);m!==0&&(a=m,u=Qu(r,m))}if(u===1)throw u=Bl,ua(r,0),zi(r,a),Nt(r,gn()),u;if(u===6)throw Error(t(345));return r.finishedWork=r.current.alternate,r.finishedLanes=a,ca(r,Pt,ei),Nt(r,gn()),null}function Zu(r,a){var u=hn;hn|=1;try{return r(a)}finally{hn=u,hn===0&&(qa=gn()+500,Qo&&Si())}}function sa(r){Ei!==null&&Ei.tag===0&&(hn&6)===0&&Ua();var a=hn;hn|=1;var u=ir.transition,m=vn;try{if(ir.transition=null,vn=1,r)return r()}finally{vn=m,ir.transition=u,hn=a,(hn&6)===0&&Si()}}function ec(){Vt=Ha.current,_n(Ha)}function ua(r,a){r.finishedWork=null,r.finishedLanes=0;var u=r.timeoutHandle;if(u!==-1&&(r.timeoutHandle=-1,r3(u)),$n!==null)for(u=$n.return;u!==null;){var m=u;switch(uu(m),m.tag){case 1:m=m.type.childContextTypes,m!=null&&Xo();break;case 3:Oa(),_n(Tt),_n(ot),ku();break;case 5:wu(m);break;case 4:Oa();break;case 13:_n(An);break;case 19:_n(An);break;case 10:fu(m.type._context);break;case 22:case 23:ec()}u=u.return}if(et=r,$n=r=Ai(r.current,null),it=Vt=a,Xn=0,Bl=null,Wu=ys=oa=0,Pt=$l=null,ia!==null){for(a=0;a<ia.length;a++)if(u=ia[a],m=u.interleaved,m!==null){u.interleaved=null;var g=m.next,y=u.pending;if(y!==null){var S=y.next;y.next=g,m.next=S}u.pending=m}ia=null}return r}function Ip(r,a){do{var u=$n;try{if(du(),os.current=hs,ss){for(var m=Pn.memoizedState;m!==null;){var g=m.queue;g!==null&&(g.pending=null),m=m.next}ss=!1}if(la=0,Zn=Gn=Pn=null,Jl=!1,Rl=0,Vu.current=null,u===null||u.return===null){Xn=1,Bl=a,$n=null;break}e:{var y=r,S=u.return,P=u,j=a;if(a=it,P.flags|=32768,j!==null&&typeof j=="object"&&typeof j.then=="function"){var X=j,ce=P,pe=ce.tag;if((ce.mode&1)===0&&(pe===0||pe===11||pe===15)){var oe=ce.alternate;oe?(ce.updateQueue=oe.updateQueue,ce.memoizedState=oe.memoizedState,ce.lanes=oe.lanes):(ce.updateQueue=null,ce.memoizedState=null)}var Ce=sp(S);if(Ce!==null){Ce.flags&=-257,up(Ce,S,P,y,a),Ce.mode&1&&op(y,X,a),a=Ce,j=X;var Ne=a.updateQueue;if(Ne===null){var Re=new Set;Re.add(j),a.updateQueue=Re}else Ne.add(j);break e}else{if((a&1)===0){op(y,X,a),nc();break e}j=Error(t(426))}}else if(En&&P.mode&1){var jn=sp(S);if(jn!==null){(jn.flags&65536)===0&&(jn.flags|=256),up(jn,S,P,y,a),mu(Ba(j,P));break e}}y=j=Ba(j,P),Xn!==4&&(Xn=2),$l===null?$l=[y]:$l.push(y),y=S;do{switch(y.tag){case 3:y.flags|=65536,a&=-a,y.lanes|=a;var V=ap(y,j,a);Pm(y,V);break e;case 1:P=j;var $=y.type,W=y.stateNode;if((y.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||W!==null&&typeof W.componentDidCatch=="function"&&(Mi===null||!Mi.has(W)))){y.flags|=65536,a&=-a,y.lanes|=a;var ve=lp(y,P,a);Pm(y,ve);break e}}y=y.return}while(y!==null)}Op(u)}catch(je){a=je,$n===u&&u!==null&&($n=u=u.return);continue}break}while(!0)}function jp(){var r=vs.current;return vs.current=hs,r===null?hs:r}function nc(){(Xn===0||Xn===3||Xn===2)&&(Xn=4),et===null||(oa&268435455)===0&&(ys&268435455)===0||zi(et,it)}function Ds(r,a){var u=hn;hn|=2;var m=jp();(et!==r||it!==a)&&(ei=null,ua(r,a));do try{E3();break}catch(g){Ip(r,g)}while(!0);if(du(),hn=u,vs.current=m,$n!==null)throw Error(t(261));return et=null,it=0,Xn}function E3(){for(;$n!==null;)Fp($n)}function T3(){for(;$n!==null&&!fn();)Fp($n)}function Fp(r){var a=Hp(r.alternate,r,Vt);r.memoizedProps=r.pendingProps,a===null?Op(r):$n=a,Vu.current=null}function Op(r){var a=r;do{var u=a.alternate;if(r=a.return,(a.flags&32768)===0){if(u=x3(u,a,Vt),u!==null){$n=u;return}}else{if(u=k3(u,a),u!==null){u.flags&=32767,$n=u;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Xn=6,$n=null;return}}if(a=a.sibling,a!==null){$n=a;return}$n=a=r}while(a!==null);Xn===0&&(Xn=5)}function ca(r,a,u){var m=vn,g=ir.transition;try{ir.transition=null,vn=1,z3(r,a,u,m)}finally{ir.transition=g,vn=m}return null}function z3(r,a,u,m){do Ua();while(Ei!==null);if((hn&6)!==0)throw Error(t(327));u=r.finishedWork;var g=r.finishedLanes;if(u===null)return null;if(r.finishedWork=null,r.finishedLanes=0,u===r.current)throw Error(t(177));r.callbackNode=null,r.callbackPriority=0;var y=u.lanes|u.childLanes;if(c5(r,y),r===et&&($n=et=null,it=0),(u.subtreeFlags&2064)===0&&(u.flags&2064)===0||ws||(ws=!0,qp(mi,function(){return Ua(),null})),y=(u.flags&15990)!==0,(u.subtreeFlags&15990)!==0||y){y=ir.transition,ir.transition=null;var S=vn;vn=1;var P=hn;hn|=4,Vu.current=null,D3(r,u),zp(u,r),Y5(nu),Jo=!!eu,nu=eu=null,r.current=u,C3(u),Et(),hn=P,vn=S,ir.transition=y}else r.current=u;if(ws&&(ws=!1,Ei=r,xs=g),y=r.pendingLanes,y===0&&(Mi=null),cn(u.stateNode),Nt(r,gn()),a!==null)for(m=r.onRecoverableError,u=0;u<a.length;u++)g=a[u],m(g.value,{componentStack:g.stack,digest:g.digest});if(bs)throw bs=!1,r=Xu,Xu=null,r;return(xs&1)!==0&&r.tag!==0&&Ua(),y=r.pendingLanes,(y&1)!==0?r===Yu?Hl++:(Hl=0,Yu=r):Hl=0,Si(),null}function Ua(){if(Ei!==null){var r=Eh(xs),a=ir.transition,u=vn;try{if(ir.transition=null,vn=16>r?16:r,Ei===null)var m=!1;else{if(r=Ei,Ei=null,xs=0,(hn&6)!==0)throw Error(t(331));var g=hn;for(hn|=4,Ee=r.current;Ee!==null;){var y=Ee,S=y.child;if((Ee.flags&16)!==0){var P=y.deletions;if(P!==null){for(var j=0;j<P.length;j++){var X=P[j];for(Ee=X;Ee!==null;){var ce=Ee;switch(ce.tag){case 0:case 11:case 15:Ol(8,ce,y)}var pe=ce.child;if(pe!==null)pe.return=ce,Ee=pe;else for(;Ee!==null;){ce=Ee;var oe=ce.sibling,Ce=ce.return;if(Cp(ce),ce===X){Ee=null;break}if(oe!==null){oe.return=Ce,Ee=oe;break}Ee=Ce}}}var Ne=y.alternate;if(Ne!==null){var Re=Ne.child;if(Re!==null){Ne.child=null;do{var jn=Re.sibling;Re.sibling=null,Re=jn}while(Re!==null)}}Ee=y}}if((y.subtreeFlags&2064)!==0&&S!==null)S.return=y,Ee=S;else e:for(;Ee!==null;){if(y=Ee,(y.flags&2048)!==0)switch(y.tag){case 0:case 11:case 15:Ol(9,y,y.return)}var V=y.sibling;if(V!==null){V.return=y.return,Ee=V;break e}Ee=y.return}}var $=r.current;for(Ee=$;Ee!==null;){S=Ee;var W=S.child;if((S.subtreeFlags&2064)!==0&&W!==null)W.return=S,Ee=W;else e:for(S=$;Ee!==null;){if(P=Ee,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:gs(9,P)}}catch(je){Jn(P,P.return,je)}if(P===S){Ee=null;break e}var ve=P.sibling;if(ve!==null){ve.return=P.return,Ee=ve;break e}Ee=P.return}}if(hn=g,Si(),yt&&typeof yt.onPostCommitFiberRoot=="function")try{yt.onPostCommitFiberRoot(qr,r)}catch{}m=!0}return m}finally{vn=u,ir.transition=a}}return!1}function Bp(r,a,u){a=Ba(u,a),a=ap(r,a,1),r=Ci(r,a,1),a=wt(),r!==null&&(pl(r,1,a),Nt(r,a))}function Jn(r,a,u){if(r.tag===3)Bp(r,r,u);else for(;a!==null;){if(a.tag===3){Bp(a,r,u);break}else if(a.tag===1){var m=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof m.componentDidCatch=="function"&&(Mi===null||!Mi.has(m))){r=Ba(u,r),r=lp(a,r,1),a=Ci(a,r,1),r=wt(),a!==null&&(pl(a,1,r),Nt(a,r));break}}a=a.return}}function A3(r,a,u){var m=r.pingCache;m!==null&&m.delete(a),a=wt(),r.pingedLanes|=r.suspendedLanes&u,et===r&&(it&u)===u&&(Xn===4||Xn===3&&(it&130023424)===it&&500>gn()-Gu?ua(r,0):Wu|=u),Nt(r,a)}function $p(r,a){a===0&&((r.mode&1)===0?a=1:(a=Ki,Ki<<=1,(Ki&130023424)===0&&(Ki=4194304)));var u=wt();r=Qr(r,a),r!==null&&(pl(r,a,u),Nt(r,u))}function P3(r){var a=r.memoizedState,u=0;a!==null&&(u=a.retryLane),$p(r,u)}function N3(r,a){var u=0;switch(r.tag){case 13:var m=r.stateNode,g=r.memoizedState;g!==null&&(u=g.retryLane);break;case 19:m=r.stateNode;break;default:throw Error(t(314))}m!==null&&m.delete(a),$p(r,u)}var Hp;Hp=function(r,a,u){if(r!==null)if(r.memoizedProps!==a.pendingProps||Tt.current)At=!0;else{if((r.lanes&u)===0&&(a.flags&128)===0)return At=!1,w3(r,a,u);At=(r.flags&131072)!==0}else At=!1,En&&(a.flags&1048576)!==0&&km(a,Zo,a.index);switch(a.lanes=0,a.tag){case 2:var m=a.type;ds(r,a),r=a.pendingProps;var g=Na(a,ot.current);Fa(a,u),g=Cu(null,a,m,r,g,u);var y=_u();return a.flags|=1,typeof g=="object"&&g!==null&&typeof g.render=="function"&&g.$$typeof===void 0?(a.tag=1,a.memoizedState=null,a.updateQueue=null,zt(m)?(y=!0,Yo(a)):y=!1,a.memoizedState=g.state!==null&&g.state!==void 0?g.state:null,yu(a),g.updater=ms,a.stateNode=g,g._reactInternals=a,Pu(a,m,r,u),a=Ru(null,a,m,!0,y,u)):(a.tag=0,En&&y&&su(a),bt(null,a,g,u),a=a.child),a;case 16:m=a.elementType;e:{switch(ds(r,a),r=a.pendingProps,g=m._init,m=g(m._payload),a.type=m,g=a.tag=J3(m),r=vr(m,r),g){case 0:a=Ju(null,a,m,r,u);break e;case 1:a=fp(null,a,m,r,u);break e;case 11:a=cp(null,a,m,r,u);break e;case 14:a=hp(null,a,m,vr(m.type,r),u);break e}throw Error(t(306,m,""))}return a;case 0:return m=a.type,g=a.pendingProps,g=a.elementType===m?g:vr(m,g),Ju(r,a,m,g,u);case 1:return m=a.type,g=a.pendingProps,g=a.elementType===m?g:vr(m,g),fp(r,a,m,g,u);case 3:e:{if(gp(a),r===null)throw Error(t(387));m=a.pendingProps,y=a.memoizedState,g=y.element,Am(r,a),as(a,m,null,u);var S=a.memoizedState;if(m=S.element,y.isDehydrated)if(y={element:m,isDehydrated:!1,cache:S.cache,pendingSuspenseBoundaries:S.pendingSuspenseBoundaries,transitions:S.transitions},a.updateQueue.baseState=y,a.memoizedState=y,a.flags&256){g=Ba(Error(t(423)),a),a=vp(r,a,m,u,g);break e}else if(m!==g){g=Ba(Error(t(424)),a),a=vp(r,a,m,u,g);break e}else for(Ut=wi(a.stateNode.containerInfo.firstChild),qt=a,En=!0,gr=null,u=Tm(a,null,m,u),a.child=u;u;)u.flags=u.flags&-3|4096,u=u.sibling;else{if(Ra(),m===g){a=Zr(r,a,u);break e}bt(r,a,m,u)}a=a.child}return a;case 5:return Lm(a),r===null&&hu(a),m=a.type,g=a.pendingProps,y=r!==null?r.memoizedProps:null,S=g.children,tu(m,g)?S=null:y!==null&&tu(m,y)&&(a.flags|=32),dp(r,a),bt(r,a,S,u),a.child;case 6:return r===null&&hu(a),null;case 13:return yp(r,a,u);case 4:return bu(a,a.stateNode.containerInfo),m=a.pendingProps,r===null?a.child=Ia(a,null,m,u):bt(r,a,m,u),a.child;case 11:return m=a.type,g=a.pendingProps,g=a.elementType===m?g:vr(m,g),cp(r,a,m,g,u);case 7:return bt(r,a,a.pendingProps,u),a.child;case 8:return bt(r,a,a.pendingProps.children,u),a.child;case 12:return bt(r,a,a.pendingProps.children,u),a.child;case 10:e:{if(m=a.type._context,g=a.pendingProps,y=a.memoizedProps,S=g.value,kn(ts,m._currentValue),m._currentValue=S,y!==null)if(fr(y.value,S)){if(y.children===g.children&&!Tt.current){a=Zr(r,a,u);break e}}else for(y=a.child,y!==null&&(y.return=a);y!==null;){var P=y.dependencies;if(P!==null){S=y.child;for(var j=P.firstContext;j!==null;){if(j.context===m){if(y.tag===1){j=Kr(-1,u&-u),j.tag=2;var X=y.updateQueue;if(X!==null){X=X.shared;var ce=X.pending;ce===null?j.next=j:(j.next=ce.next,ce.next=j),X.pending=j}}y.lanes|=u,j=y.alternate,j!==null&&(j.lanes|=u),gu(y.return,u,a),P.lanes|=u;break}j=j.next}}else if(y.tag===10)S=y.type===a.type?null:y.child;else if(y.tag===18){if(S=y.return,S===null)throw Error(t(341));S.lanes|=u,P=S.alternate,P!==null&&(P.lanes|=u),gu(S,u,a),S=y.sibling}else S=y.child;if(S!==null)S.return=y;else for(S=y;S!==null;){if(S===a){S=null;break}if(y=S.sibling,y!==null){y.return=S.return,S=y;break}S=S.return}y=S}bt(r,a,g.children,u),a=a.child}return a;case 9:return g=a.type,m=a.pendingProps.children,Fa(a,u),g=tr(g),m=m(g),a.flags|=1,bt(r,a,m,u),a.child;case 14:return m=a.type,g=vr(m,a.pendingProps),g=vr(m.type,g),hp(r,a,m,g,u);case 15:return mp(r,a,a.type,a.pendingProps,u);case 17:return m=a.type,g=a.pendingProps,g=a.elementType===m?g:vr(m,g),ds(r,a),a.tag=1,zt(m)?(r=!0,Yo(a)):r=!1,Fa(a,u),rp(a,m,g),Pu(a,m,g,u),Ru(null,a,m,!0,r,u);case 19:return wp(r,a,u);case 22:return pp(r,a,u)}throw Error(t(156,a.tag))};function qp(r,a){return In(r,a)}function L3(r,a,u,m){this.tag=r,this.key=u,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=m,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ar(r,a,u,m){return new L3(r,a,u,m)}function tc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function J3(r){if(typeof r=="function")return tc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===le)return 11;if(r===ae)return 14}return 2}function Ai(r,a){var u=r.alternate;return u===null?(u=ar(r.tag,a,r.key,r.mode),u.elementType=r.elementType,u.type=r.type,u.stateNode=r.stateNode,u.alternate=r,r.alternate=u):(u.pendingProps=a,u.type=r.type,u.flags=0,u.subtreeFlags=0,u.deletions=null),u.flags=r.flags&14680064,u.childLanes=r.childLanes,u.lanes=r.lanes,u.child=r.child,u.memoizedProps=r.memoizedProps,u.memoizedState=r.memoizedState,u.updateQueue=r.updateQueue,a=r.dependencies,u.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},u.sibling=r.sibling,u.index=r.index,u.ref=r.ref,u}function Cs(r,a,u,m,g,y){var S=2;if(m=r,typeof r=="function")tc(r)&&(S=1);else if(typeof r=="string")S=5;else e:switch(r){case I:return ha(u.children,g,y,a);case re:S=8,g|=8;break;case ee:return r=ar(12,u,a,g|2),r.elementType=ee,r.lanes=y,r;case Le:return r=ar(13,u,a,g),r.elementType=Le,r.lanes=y,r;case me:return r=ar(19,u,a,g),r.elementType=me,r.lanes=y,r;case De:return _s(u,g,y,a);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case U:S=10;break e;case ie:S=9;break e;case le:S=11;break e;case ae:S=14;break e;case xe:S=16,m=null;break e}throw Error(t(130,r==null?r:typeof r,""))}return a=ar(S,u,a,g),a.elementType=r,a.type=m,a.lanes=y,a}function ha(r,a,u,m){return r=ar(7,r,m,a),r.lanes=u,r}function _s(r,a,u,m){return r=ar(22,r,m,a),r.elementType=De,r.lanes=u,r.stateNode={isHidden:!1},r}function rc(r,a,u){return r=ar(6,r,null,a),r.lanes=u,r}function ic(r,a,u){return a=ar(4,r.children!==null?r.children:[],r.key,a),a.lanes=u,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}function R3(r,a,u,m,g){this.tag=a,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=A0(0),this.expirationTimes=A0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=A0(0),this.identifierPrefix=m,this.onRecoverableError=g,this.mutableSourceEagerHydrationData=null}function ac(r,a,u,m,g,y,S,P,j){return r=new R3(r,a,u,P,j),a===1?(a=1,y===!0&&(a|=8)):a=0,y=ar(3,null,null,a),r.current=y,y.stateNode=r,y.memoizedState={element:m,isDehydrated:u,cache:null,transitions:null,pendingSuspenseBoundaries:null},yu(y),r}function I3(r,a,u){var m=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:H,key:m==null?null:""+m,children:r,containerInfo:a,implementation:u}}function Up(r){if(!r)return ki;r=r._reactInternals;e:{if(Je(r)!==r||r.tag!==1)throw Error(t(170));var a=r;do{switch(a.tag){case 3:a=a.stateNode.context;break e;case 1:if(zt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break e}}a=a.return}while(a!==null);throw Error(t(171))}if(r.tag===1){var u=r.type;if(zt(u))return bm(r,u,a)}return a}function Vp(r,a,u,m,g,y,S,P,j){return r=ac(u,m,!0,r,g,y,S,P,j),r.context=Up(null),u=r.current,m=wt(),g=Ti(u),y=Kr(m,g),y.callback=a??null,Ci(u,y,g),r.current.lanes=g,pl(r,g,m),Nt(r,m),r}function Ms(r,a,u,m){var g=a.current,y=wt(),S=Ti(g);return u=Up(u),a.context===null?a.context=u:a.pendingContext=u,a=Kr(y,S),a.payload={element:r},m=m===void 0?null:m,m!==null&&(a.callback=m),r=Ci(g,a,S),r!==null&&(wr(r,g,S,y),is(r,g,S)),S}function Es(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Wp(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var u=r.retryLane;r.retryLane=u!==0&&u<a?u:a}}function lc(r,a){Wp(r,a),(r=r.alternate)&&Wp(r,a)}function j3(){return null}var Gp=typeof reportError=="function"?reportError:function(r){console.error(r)};function oc(r){this._internalRoot=r}Ts.prototype.render=oc.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(t(409));Ms(r,a,null,null)},Ts.prototype.unmount=oc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;sa(function(){Ms(null,r,null,null)}),a[Wr]=null}};function Ts(r){this._internalRoot=r}Ts.prototype.unstable_scheduleHydration=function(r){if(r){var a=Ah();r={blockedOn:null,target:r,priority:a};for(var u=0;u<vi.length&&a!==0&&a<vi[u].priority;u++);vi.splice(u,0,r),u===0&&Lh(r)}};function sc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function zs(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Xp(){}function F3(r,a,u,m,g){if(g){if(typeof m=="function"){var y=m;m=function(){var X=Es(S);y.call(X)}}var S=Vp(a,m,r,0,null,!1,!1,"",Xp);return r._reactRootContainer=S,r[Wr]=S.current,Ml(r.nodeType===8?r.parentNode:r),sa(),S}for(;g=r.lastChild;)r.removeChild(g);if(typeof m=="function"){var P=m;m=function(){var X=Es(j);P.call(X)}}var j=ac(r,0,!1,null,null,!1,!1,"",Xp);return r._reactRootContainer=j,r[Wr]=j.current,Ml(r.nodeType===8?r.parentNode:r),sa(function(){Ms(a,j,u,m)}),j}function As(r,a,u,m,g){var y=u._reactRootContainer;if(y){var S=y;if(typeof g=="function"){var P=g;g=function(){var j=Es(S);P.call(j)}}Ms(a,S,r,g)}else S=F3(u,a,r,g,m);return Es(S)}Th=function(r){switch(r.tag){case 3:var a=r.stateNode;if(a.current.memoizedState.isDehydrated){var u=Zi(a.pendingLanes);u!==0&&(P0(a,u|1),Nt(a,gn()),(hn&6)===0&&(qa=gn()+500,Si()))}break;case 13:sa(function(){var m=Qr(r,1);if(m!==null){var g=wt();wr(m,r,1,g)}}),lc(r,1)}},N0=function(r){if(r.tag===13){var a=Qr(r,134217728);if(a!==null){var u=wt();wr(a,r,134217728,u)}lc(r,134217728)}},zh=function(r){if(r.tag===13){var a=Ti(r),u=Qr(r,a);if(u!==null){var m=wt();wr(u,r,a,m)}lc(r,a)}},Ah=function(){return vn},Ph=function(r,a){var u=vn;try{return vn=r,a()}finally{vn=u}},ci=function(r,a,u){switch(a){case"input":if(dr(r,u),a=u.name,u.type==="radio"&&a!=null){for(u=r;u.parentNode;)u=u.parentNode;for(u=u.querySelectorAll("input[name="+JSON.stringify(""+a)+'][type="radio"]'),a=0;a<u.length;a++){var m=u[a];if(m!==r&&m.form===r.form){var g=Go(m);if(!g)throw Error(t(90));zn(m),dr(m,g)}}}break;case"textarea":Kt(r,u);break;case"select":a=u.value,a!=null&&gt(r,!!u.multiple,a,!1)}},cl=Zu,Gi=sa;var O3={usingClientEntryPoint:!1,Events:[zl,Aa,Go,ul,Ao,Zu]},ql={findFiberByHostInstance:ea,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B3={bundleType:ql.bundleType,version:ql.version,rendererPackageName:ql.rendererPackageName,rendererConfig:ql.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ne.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=on(r),r===null?null:r.stateNode},findFiberByHostInstance:ql.findFiberByHostInstance||j3,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ps=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ps.isDisabled&&Ps.supportsFiber)try{qr=Ps.inject(B3),yt=Ps}catch{}}return Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O3,Lt.createPortal=function(r,a){var u=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!sc(a))throw Error(t(200));return I3(r,a,null,u)},Lt.createRoot=function(r,a){if(!sc(r))throw Error(t(299));var u=!1,m="",g=Gp;return a!=null&&(a.unstable_strictMode===!0&&(u=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),a=ac(r,1,!1,null,null,u,!1,m,g),r[Wr]=a.current,Ml(r.nodeType===8?r.parentNode:r),new oc(a)},Lt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(t(188)):(r=Object.keys(r).join(","),Error(t(268,r)));return r=on(a),r=r===null?null:r.stateNode,r},Lt.flushSync=function(r){return sa(r)},Lt.hydrate=function(r,a,u){if(!zs(a))throw Error(t(200));return As(null,r,a,!0,u)},Lt.hydrateRoot=function(r,a,u){if(!sc(r))throw Error(t(405));var m=u!=null&&u.hydratedSources||null,g=!1,y="",S=Gp;if(u!=null&&(u.unstable_strictMode===!0&&(g=!0),u.identifierPrefix!==void 0&&(y=u.identifierPrefix),u.onRecoverableError!==void 0&&(S=u.onRecoverableError)),a=Vp(a,null,r,1,u??null,g,!1,y,S),r[Wr]=a.current,Ml(r),m)for(r=0;r<m.length;r++)u=m[r],g=u._getVersion,g=g(u._source),a.mutableSourceEagerHydrationData==null?a.mutableSourceEagerHydrationData=[u,g]:a.mutableSourceEagerHydrationData.push(u,g);return new Ts(a)},Lt.render=function(r,a,u){if(!zs(a))throw Error(t(200));return As(null,r,a,!1,u)},Lt.unmountComponentAtNode=function(r){if(!zs(r))throw Error(t(40));return r._reactRootContainer?(sa(function(){As(null,null,r,!1,function(){r._reactRootContainer=null,r[Wr]=null})}),!0):!1},Lt.unstable_batchedUpdates=Zu,Lt.unstable_renderSubtreeIntoContainer=function(r,a,u,m){if(!zs(u))throw Error(t(200));if(r==null||r._reactInternals===void 0)throw Error(t(38));return As(r,a,u,!1,m)},Lt.version="18.3.1-next-f1338f8080-20240426",Lt}var rd;function Y3(){if(rd)return hc.exports;rd=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}return e(),hc.exports=X3(),hc.exports}var id;function Q3(){if(id)return Ns;id=1;var e=Y3();return Ns.createRoot=e.createRoot,Ns.hydrateRoot=e.hydrateRoot,Ns}var K3=Q3(),Y=E1();const Z3=M1(Y),e6=H3({__proto__:null,default:Z3},[Y]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gg=e=>{throw TypeError(e)},n6=(e,n,t)=>n.has(e)||gg("Cannot "+t),dc=(e,n,t)=>(n6(e,n,"read from private field"),t?t.call(e):n.get(e)),t6=(e,n,t)=>n.has(e)?gg("Cannot add the same private member more than once"):n instanceof WeakSet?n.add(e):n.set(e,t),ad="popstate";function r6(e={}){function n(i,l){let{pathname:o,search:s,hash:c}=i.location;return uo("",{pathname:o,search:s,hash:c},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function t(i,l){return typeof l=="string"?l:Jr(l)}return a6(n,t,null,e)}function an(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Un(e,n){if(!e){typeof console<"u"&&console.warn(n);try{throw new Error(n)}catch{}}}function i6(){return Math.random().toString(36).substring(2,10)}function ld(e,n){return{usr:e.state,key:e.key,idx:n}}function uo(e,n,t=null,i){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof n=="string"?qi(n):n,state:t,key:n&&n.key||i||i6()}}function Jr({pathname:e="/",search:n="",hash:t=""}){return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function qi(e){let n={};if(e){let t=e.indexOf("#");t>=0&&(n.hash=e.substring(t),e=e.substring(0,t));let i=e.indexOf("?");i>=0&&(n.search=e.substring(i),e=e.substring(0,i)),e&&(n.pathname=e)}return n}function a6(e,n,t,i={}){let{window:l=document.defaultView,v5Compat:o=!1}=i,s=l.history,c="POP",h=null,p=f();p==null&&(p=0,s.replaceState({...s.state,idx:p},""));function f(){return(s.state||{idx:null}).idx}function d(){c="POP";let T=f(),E=T==null?null:T-p;p=T,h&&h({action:c,location:_.location,delta:E})}function w(T,E){c="PUSH";let z=uo(_.location,T,E);p=f()+1;let O=ld(z,p),ne=_.createHref(z);try{s.pushState(O,"",ne)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;l.location.assign(ne)}o&&h&&h({action:c,location:_.location,delta:1})}function b(T,E){c="REPLACE";let z=uo(_.location,T,E);p=f();let O=ld(z,p),ne=_.createHref(z);s.replaceState(O,"",ne),o&&h&&h({action:c,location:_.location,delta:0})}function D(T){return vg(T)}let _={get action(){return c},get location(){return e(l,s)},listen(T){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(ad,d),h=T,()=>{l.removeEventListener(ad,d),h=null}},createHref(T){return n(l,T)},createURL:D,encodeLocation(T){let E=D(T);return{pathname:E.pathname,search:E.search,hash:E.hash}},push:w,replace:b,go(T){return s.go(T)}};return _}function vg(e,n=!1){let t="http://localhost";typeof window<"u"&&(t=window.location.origin!=="null"?window.location.origin:window.location.href),an(t,"No window.location.(origin|href) available to create URL");let i=typeof e=="string"?e:Jr(e);return i=i.replace(/ $/,"%20"),!n&&i.startsWith("//")&&(i=t+i),new URL(i,t)}var Zl,od=class{constructor(e){if(t6(this,Zl,new Map),e)for(let[n,t]of e)this.set(n,t)}get(e){if(dc(this,Zl).has(e))return dc(this,Zl).get(e);if(e.defaultValue!==void 0)return e.defaultValue;throw new Error("No value found for context")}set(e,n){dc(this,Zl).set(e,n)}};Zl=new WeakMap;var l6=new Set(["lazy","caseSensitive","path","id","index","children"]);function o6(e){return l6.has(e)}var s6=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function u6(e){return s6.has(e)}function c6(e){return e.index===!0}function co(e,n,t=[],i={},l=!1){return e.map((o,s)=>{let c=[...t,String(s)],h=typeof o.id=="string"?o.id:c.join("-");if(an(o.index!==!0||!o.children,"Cannot specify children on an index route"),an(l||!i[h],`Found a route id collision on id "${h}".  Route id's must be globally unique within Data Router usages`),c6(o)){let p={...o,id:h};return i[h]=sd(p,n(p)),p}else{let p={...o,id:h,children:void 0};return i[h]=sd(p,n(p)),o.children&&(p.children=co(o.children,n,c,i,l)),p}})}function sd(e,n){return Object.assign(e,{...n,...typeof n.lazy=="object"&&n.lazy!=null?{lazy:{...e.lazy,...n.lazy}}:{}})}function Ri(e,n,t="/"){return eo(e,n,t,!1)}function eo(e,n,t,i){let l=typeof n=="string"?qi(n):n,o=cr(l.pathname||"/",t);if(o==null)return null;let s=yg(e);m6(s);let c=null;for(let h=0;c==null&&h<s.length;++h){let p=S6(o);c=x6(s[h],p,i)}return c}function h6(e,n){let{route:t,pathname:i,params:l}=e;return{id:t.id,pathname:i,params:l,data:n[t.id],loaderData:n[t.id],handle:t.handle}}function yg(e,n=[],t=[],i="",l=!1){let o=(s,c,h=l,p)=>{let f={relativePath:p===void 0?s.path||"":p,caseSensitive:s.caseSensitive===!0,childrenIndex:c,route:s};if(f.relativePath.startsWith("/")){if(!f.relativePath.startsWith(i)&&h)return;an(f.relativePath.startsWith(i),`Absolute route path "${f.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),f.relativePath=f.relativePath.slice(i.length)}let d=Lr([i,f.relativePath]),w=t.concat(f);s.children&&s.children.length>0&&(an(s.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${d}".`),yg(s.children,n,w,d,h)),!(s.path==null&&!s.index)&&n.push({path:d,score:b6(d,s.index),routesMeta:w})};return e.forEach((s,c)=>{var h;if(s.path===""||!((h=s.path)!=null&&h.includes("?")))o(s,c);else for(let p of bg(s.path))o(s,c,!0,p)}),n}function bg(e){let n=e.split("/");if(n.length===0)return[];let[t,...i]=n,l=t.endsWith("?"),o=t.replace(/\?$/,"");if(i.length===0)return l?[o,""]:[o];let s=bg(i.join("/")),c=[];return c.push(...s.map(h=>h===""?o:[o,h].join("/"))),l&&c.push(...s),c.map(h=>e.startsWith("/")&&h===""?"/":h)}function m6(e){e.sort((n,t)=>n.score!==t.score?t.score-n.score:w6(n.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var p6=/^:[\w-]+$/,d6=3,f6=2,g6=1,v6=10,y6=-2,ud=e=>e==="*";function b6(e,n){let t=e.split("/"),i=t.length;return t.some(ud)&&(i+=y6),n&&(i+=f6),t.filter(l=>!ud(l)).reduce((l,o)=>l+(p6.test(o)?d6:o===""?g6:v6),i)}function w6(e,n){return e.length===n.length&&e.slice(0,-1).every((i,l)=>i===n[l])?e[e.length-1]-n[n.length-1]:0}function x6(e,n,t=!1){let{routesMeta:i}=e,l={},o="/",s=[];for(let c=0;c<i.length;++c){let h=i[c],p=c===i.length-1,f=o==="/"?n:n.slice(o.length)||"/",d=t0({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},f),w=h.route;if(!d&&p&&t&&!i[i.length-1].route.index&&(d=t0({path:h.relativePath,caseSensitive:h.caseSensitive,end:!1},f)),!d)return null;Object.assign(l,d.params),s.push({params:l,pathname:Lr([o,d.pathname]),pathnameBase:_6(Lr([o,d.pathnameBase])),route:w}),d.pathnameBase!=="/"&&(o=Lr([o,d.pathnameBase]))}return s}function t0(e,n){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[t,i]=k6(e.path,e.caseSensitive,e.end),l=n.match(t);if(!l)return null;let o=l[0],s=o.replace(/(.)\/+$/,"$1"),c=l.slice(1);return{params:i.reduce((p,{paramName:f,isOptional:d},w)=>{if(f==="*"){let D=c[w]||"";s=o.slice(0,o.length-D.length).replace(/(.)\/+$/,"$1")}const b=c[w];return d&&!b?p[f]=void 0:p[f]=(b||"").replace(/%2F/g,"/"),p},{}),pathname:o,pathnameBase:s,pattern:e}}function k6(e,n=!1,t=!0){Un(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let i=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,c,h)=>(i.push({paramName:c,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return e.endsWith("*")?(i.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,n?void 0:"i"),i]}function S6(e){try{return e.split("/").map(n=>decodeURIComponent(n).replace(/\//g,"%2F")).join("/")}catch(n){return Un(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${n}).`),e}}function cr(e,n){if(n==="/")return e;if(!e.toLowerCase().startsWith(n.toLowerCase()))return null;let t=n.endsWith("/")?n.length-1:n.length,i=e.charAt(t);return i&&i!=="/"?null:e.slice(t)||"/"}function D6({basename:e,pathname:n}){return n==="/"?e:Lr([e,n])}var wg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,T1=e=>wg.test(e);function C6(e,n="/"){let{pathname:t,search:i="",hash:l=""}=typeof e=="string"?qi(e):e,o;return t?(t=t.replace(/\/\/+/g,"/"),t.startsWith("/")?o=cd(t.substring(1),"/"):o=cd(t,n)):o=n,{pathname:o,search:M6(i),hash:E6(l)}}function cd(e,n){let t=n.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?t.length>1&&t.pop():l!=="."&&t.push(l)}),t.length>1?t.join("/"):"/"}function fc(e,n,t,i){return`Cannot include a '${e}' character in a manually specified \`to.${n}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xg(e){return e.filter((n,t)=>t===0||n.route.path&&n.route.path.length>0)}function z1(e){let n=xg(e);return n.map((t,i)=>i===n.length-1?t.pathname:t.pathnameBase)}function A1(e,n,t,i=!1){let l;typeof e=="string"?l=qi(e):(l={...e},an(!l.pathname||!l.pathname.includes("?"),fc("?","pathname","search",l)),an(!l.pathname||!l.pathname.includes("#"),fc("#","pathname","hash",l)),an(!l.search||!l.search.includes("#"),fc("#","search","hash",l)));let o=e===""||l.pathname==="",s=o?"/":l.pathname,c;if(s==null)c=t;else{let d=n.length-1;if(!i&&s.startsWith("..")){let w=s.split("/");for(;w[0]==="..";)w.shift(),d-=1;l.pathname=w.join("/")}c=d>=0?n[d]:"/"}let h=C6(l,c),p=s&&s!=="/"&&s.endsWith("/"),f=(o||s===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||f)&&(h.pathname+="/"),h}var Lr=e=>e.join("/").replace(/\/\/+/g,"/"),_6=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),M6=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,E6=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,yo=class{constructor(e,n,t,i=!1){this.status=e,this.statusText=n||"",this.internal=i,t instanceof Error?(this.data=t.toString(),this.error=t):this.data=t}};function ho(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}function bo(e){return e.map(n=>n.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var kg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Sg(e,n){let t=e;if(typeof t!="string"||!wg.test(t))return{absoluteURL:void 0,isExternal:!1,to:t};let i=t,l=!1;if(kg)try{let o=new URL(window.location.href),s=t.startsWith("//")?new URL(o.protocol+t):new URL(t),c=cr(s.pathname,n);s.origin===o.origin&&c!=null?t=c+s.search+s.hash:l=!0}catch{Un(!1,`<Link to="${t}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:l,to:t}}var ji=Symbol("Uninstrumented");function T6(e,n){let t={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};e.forEach(l=>l({id:n.id,index:n.index,path:n.path,instrument(o){let s=Object.keys(t);for(let c of s)o[c]&&t[c].push(o[c])}}));let i={};if(typeof n.lazy=="function"&&t.lazy.length>0){let l=Qa(t.lazy,n.lazy,()=>{});l&&(i.lazy=l)}if(typeof n.lazy=="object"){let l=n.lazy;["middleware","loader","action"].forEach(o=>{let s=l[o],c=t[`lazy.${o}`];if(typeof s=="function"&&c.length>0){let h=Qa(c,s,()=>{});h&&(i.lazy=Object.assign(i.lazy||{},{[o]:h}))}})}return["loader","action"].forEach(l=>{let o=n[l];if(typeof o=="function"&&t[l].length>0){let s=o[ji]??o,c=Qa(t[l],s,(...h)=>hd(h[0]));c&&(l==="loader"&&s.hydrate===!0&&(c.hydrate=!0),c[ji]=s,i[l]=c)}}),n.middleware&&n.middleware.length>0&&t.middleware.length>0&&(i.middleware=n.middleware.map(l=>{let o=l[ji]??l,s=Qa(t.middleware,o,(...c)=>hd(c[0]));return s?(s[ji]=o,s):l})),i}function z6(e,n){let t={navigate:[],fetch:[]};if(n.forEach(i=>i({instrument(l){let o=Object.keys(l);for(let s of o)l[s]&&t[s].push(l[s])}})),t.navigate.length>0){let i=e.navigate[ji]??e.navigate,l=Qa(t.navigate,i,(...o)=>{let[s,c]=o;return{to:typeof s=="number"||typeof s=="string"?s:s?Jr(s):".",...md(e,c??{})}});l&&(l[ji]=i,e.navigate=l)}if(t.fetch.length>0){let i=e.fetch[ji]??e.fetch,l=Qa(t.fetch,i,(...o)=>{let[s,,c,h]=o;return{href:c??".",fetcherKey:s,...md(e,h??{})}});l&&(l[ji]=i,e.fetch=l)}return e}function Qa(e,n,t){return e.length===0?null:async(...i)=>{let l=await Dg(e,t(...i),()=>n(...i),e.length-1);if(l.type==="error")throw l.value;return l.value}}async function Dg(e,n,t,i){let l=e[i],o;if(l){let s,c=async()=>(s?console.error("You cannot call instrumented handlers more than once"):s=Dg(e,n,t,i-1),o=await s,an(o,"Expected a result"),o.type==="error"&&o.value instanceof Error?{status:"error",error:o.value}:{status:"success",error:void 0});try{await l(c,n)}catch(h){console.error("An instrumentation function threw an error:",h)}s||await c(),await s}else try{o={type:"success",value:await t()}}catch(s){o={type:"error",value:s}}return o||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function hd(e){let{request:n,context:t,params:i,unstable_pattern:l}=e;return{request:A6(n),params:{...i},unstable_pattern:l,context:P6(t)}}function md(e,n){return{currentUrl:Jr(e.state.location),..."formMethod"in n?{formMethod:n.formMethod}:{},..."formEncType"in n?{formEncType:n.formEncType}:{},..."formData"in n?{formData:n.formData}:{},..."body"in n?{body:n.body}:{}}}function A6(e){return{method:e.method,url:e.url,headers:{get:(...n)=>e.headers.get(...n)}}}function P6(e){if(L6(e)){let n={...e};return Object.freeze(n),n}else return{get:n=>e.get(n)}}var N6=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function L6(e){if(e===null||typeof e!="object")return!1;const n=Object.getPrototypeOf(e);return n===Object.prototype||n===null||Object.getOwnPropertyNames(n).sort().join("\0")===N6}var Cg=["POST","PUT","PATCH","DELETE"],J6=new Set(Cg),R6=["GET",...Cg],I6=new Set(R6),_g=new Set([301,302,303,307,308]),j6=new Set([307,308]),gc={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},F6={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Vl={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},O6=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),Mg="remix-router-transitions",Eg=Symbol("ResetLoaderData");function B6(e){const n=e.window?e.window:typeof window<"u"?window:void 0,t=typeof n<"u"&&typeof n.document<"u"&&typeof n.document.createElement<"u";an(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let i=e.hydrationRouteProperties||[],l=e.mapRouteProperties||O6,o=l;if(e.unstable_instrumentations){let J=e.unstable_instrumentations;o=q=>({...l(q),...T6(J.map(G=>G.route).filter(Boolean),q)})}let s={},c=co(e.routes,o,void 0,s),h,p=e.basename||"/";p.startsWith("/")||(p=`/${p}`);let f=e.dataStrategy||V6,d={...e.future},w=null,b=new Set,D=null,_=null,T=null,E=e.hydrationData!=null,z=Ri(c,e.history.location,p),O=!1,ne=null,K;if(z==null&&!e.patchRoutesOnNavigation){let J=lr(404,{pathname:e.history.location.pathname}),{matches:q,route:G}=Ls(c);K=!0,z=q,ne={[G.id]:J}}else if(z&&!e.hydrationData&&Gi(z,c,e.history.location.pathname).active&&(z=null),z)if(z.some(J=>J.route.lazy))K=!1;else if(!z.some(J=>P1(J.route)))K=!0;else{let J=e.hydrationData?e.hydrationData.loaderData:null,q=e.hydrationData?e.hydrationData.errors:null;if(q){let G=z.findIndex(ue=>q[ue.route.id]!==void 0);K=z.slice(0,G+1).every(ue=>!n1(ue.route,J,q))}else K=z.every(G=>!n1(G.route,J,q))}else{K=!1,z=[];let J=Gi(null,c,e.history.location.pathname);J.active&&J.matches&&(O=!0,z=J.matches)}let H,I={historyAction:e.history.action,location:e.history.location,matches:z,initialized:K,navigation:gc,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||ne,fetchers:new Map,blockers:new Map},re="POP",ee=null,U=!1,ie,le=!1,Le=new Map,me=null,ae=!1,xe=!1,De=new Set,te=new Map,ke=0,M=-1,F=new Map,Q=new Set,A=new Map,Te=new Map,ze=new Set,Ae=new Map,Ke,Ve=null;function tn(){if(w=e.history.listen(({action:J,location:q,delta:G})=>{if(Ke){Ke(),Ke=void 0;return}Un(Ae.size===0||G!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let ue=Hr({currentLocation:I.location,nextLocation:q,historyAction:J});if(ue&&G!=null){let be=new Promise(Ie=>{Ke=Ie});e.history.go(G*-1),ci(ue,{state:"blocked",location:q,proceed(){ci(ue,{state:"proceeding",proceed:void 0,reset:void 0,location:q}),be.then(()=>e.history.go(G))},reset(){let Ie=new Map(I.blockers);Ie.set(ue,Vl),zn({blockers:Ie})}}),ee==null||ee.resolve(),ee=null;return}return tt(J,q)}),t){c7(n,Le);let J=()=>h7(n,Le);n.addEventListener("pagehide",J),me=()=>n.removeEventListener("pagehide",J)}return I.initialized||tt("POP",I.location,{initialHydration:!0}),H}function bn(){w&&w(),me&&me(),b.clear(),ie&&ie.abort(),I.fetchers.forEach((J,q)=>Ot(q)),I.blockers.forEach((J,q)=>Sa(q))}function at(J){return b.add(J),()=>b.delete(J)}function zn(J,q={}){J.matches&&(J.matches=J.matches.map(be=>{let Ie=s[be.route.id],$e=be.route;return $e.element!==Ie.element||$e.errorElement!==Ie.errorElement||$e.hydrateFallbackElement!==Ie.hydrateFallbackElement?{...be,route:Ie}:be})),I={...I,...J};let G=[],ue=[];I.fetchers.forEach((be,Ie)=>{be.state==="idle"&&(ze.has(Ie)?G.push(Ie):ue.push(Ie))}),ze.forEach(be=>{!I.fetchers.has(be)&&!te.has(be)&&G.push(be)}),[...b].forEach(be=>be(I,{deletedFetchers:G,newErrors:J.errors??null,viewTransitionOpts:q.viewTransitionOpts,flushSync:q.flushSync===!0})),G.forEach(be=>Ot(be)),ue.forEach(be=>I.fetchers.delete(be))}function lt(J,q,{flushSync:G}={}){var Ye,Fe;let ue=I.actionData!=null&&I.navigation.formMethod!=null&&ht(I.navigation.formMethod)&&I.navigation.state==="loading"&&((Ye=J.state)==null?void 0:Ye._isRedirect)!==!0,be;q.actionData?Object.keys(q.actionData).length>0?be=q.actionData:be=null:ue?be=I.actionData:be=null;let Ie=q.loaderData?kd(I.loaderData,q.loaderData,q.matches||[],q.errors):I.loaderData,$e=I.blockers;$e.size>0&&($e=new Map($e),$e.forEach((Ze,on)=>$e.set(on,Vl)));let Me=ae?!1:cl(J,q.matches||I.matches),Pe=U===!0||I.navigation.formMethod!=null&&ht(I.navigation.formMethod)&&((Fe=J.state)==null?void 0:Fe._isRedirect)!==!0;h&&(c=h,h=void 0),ae||re==="POP"||(re==="PUSH"?e.history.push(J,J.state):re==="REPLACE"&&e.history.replace(J,J.state));let Je;if(re==="POP"){let Ze=Le.get(I.location.pathname);Ze&&Ze.has(J.pathname)?Je={currentLocation:I.location,nextLocation:J}:Le.has(J.pathname)&&(Je={currentLocation:J,nextLocation:I.location})}else if(le){let Ze=Le.get(I.location.pathname);Ze?Ze.add(J.pathname):(Ze=new Set([J.pathname]),Le.set(I.location.pathname,Ze)),Je={currentLocation:I.location,nextLocation:J}}zn({...q,actionData:be,loaderData:Ie,historyAction:re,location:J,initialized:!0,navigation:gc,revalidation:"idle",restoreScrollPosition:Me,preventScrollReset:Pe,blockers:$e},{viewTransitionOpts:Je,flushSync:G===!0}),re="POP",U=!1,le=!1,ae=!1,xe=!1,ee==null||ee.resolve(),ee=null,Ve==null||Ve.resolve(),Ve=null}async function kr(J,q){if(ee==null||ee.resolve(),ee=null,typeof J=="number"){ee||(ee=_d());let on=ee.promise;return e.history.go(J),on}let G=e1(I.location,I.matches,p,J,q==null?void 0:q.fromRouteId,q==null?void 0:q.relative),{path:ue,submission:be,error:Ie}=pd(!1,G,q),$e=I.location,Me=uo(I.location,ue,q&&q.state);Me={...Me,...e.history.encodeLocation(Me)};let Pe=q&&q.replace!=null?q.replace:void 0,Je="PUSH";Pe===!0?Je="REPLACE":Pe===!1||be!=null&&ht(be.formMethod)&&be.formAction===I.location.pathname+I.location.search&&(Je="REPLACE");let Ye=q&&"preventScrollReset"in q?q.preventScrollReset===!0:void 0,Fe=(q&&q.flushSync)===!0,Ze=Hr({currentLocation:$e,nextLocation:Me,historyAction:Je});if(Ze){ci(Ze,{state:"blocked",location:Me,proceed(){ci(Ze,{state:"proceeding",proceed:void 0,reset:void 0,location:Me}),kr(J,q)},reset(){let on=new Map(I.blockers);on.set(Ze,Vl),zn({blockers:on})}});return}await tt(Je,Me,{submission:be,pendingError:Ie,preventScrollReset:Ye,replace:q&&q.replace,enableViewTransition:q&&q.viewTransition,flushSync:Fe,callSiteDefaultShouldRevalidate:q&&q.unstable_defaultShouldRevalidate})}function Br(){Ve||(Ve=_d()),ye(),zn({revalidation:"loading"});let J=Ve.promise;return I.navigation.state==="submitting"?J:I.navigation.state==="idle"?(tt(I.historyAction,I.location,{startUninterruptedRevalidation:!0}),J):(tt(re||I.historyAction,I.navigation.location,{overrideNavigation:I.navigation,enableViewTransition:le===!0}),J)}async function tt(J,q,G){ie&&ie.abort(),ie=null,re=J,ae=(G&&G.startUninterruptedRevalidation)===!0,Ao(I.location,I.matches),U=(G&&G.preventScrollReset)===!0,le=(G&&G.enableViewTransition)===!0;let ue=h||c,be=G&&G.overrideNavigation,Ie=G!=null&&G.initialHydration&&I.matches&&I.matches.length>0&&!O?I.matches:Ri(ue,q,p),$e=(G&&G.flushSync)===!0;if(Ie&&I.initialized&&!xe&&e7(I.location,q)&&!(G&&G.submission&&ht(G.submission.formMethod))){lt(q,{matches:Ie},{flushSync:$e});return}let Me=Gi(Ie,ue,q.pathname);if(Me.active&&Me.matches&&(Ie=Me.matches),!Ie){let{error:In,notFoundMatches:Kn,route:fn}=Cr(q.pathname);lt(q,{matches:Kn,loaderData:{},errors:{[fn.id]:In}},{flushSync:$e});return}ie=new AbortController;let Pe=Xa(e.history,q,ie.signal,G&&G.submission),Je=e.getContext?await e.getContext():new od,Ye;if(G&&G.pendingError)Ye=[Ii(Ie).route.id,{type:"error",error:G.pendingError}];else if(G&&G.submission&&ht(G.submission.formMethod)){let In=await dr(Pe,q,G.submission,Ie,Je,Me.active,G&&G.initialHydration===!0,{replace:G.replace,flushSync:$e});if(In.shortCircuited)return;if(In.pendingActionResult){let[Kn,fn]=In.pendingActionResult;if(Gt(fn)&&ho(fn.error)&&fn.error.status===404){ie=null,lt(q,{matches:In.matches,loaderData:{},errors:{[Kn]:fn.error}});return}}Ie=In.matches||Ie,Ye=In.pendingActionResult,be=vc(q,G.submission),$e=!1,Me.active=!1,Pe=Xa(e.history,Pe.url,Pe.signal)}let{shortCircuited:Fe,matches:Ze,loaderData:on,errors:Bn}=await $r(Pe,q,Ie,Je,Me.active,be,G&&G.submission,G&&G.fetcherSubmission,G&&G.replace,G&&G.initialHydration===!0,$e,Ye,G&&G.callSiteDefaultShouldRevalidate);Fe||(ie=null,lt(q,{matches:Ze||Ie,...Sd(Ye),loaderData:on,errors:Bn}))}async function dr(J,q,G,ue,be,Ie,$e,Me={}){ye();let Pe=s7(q,G);if(zn({navigation:Pe},{flushSync:Me.flushSync===!0}),Ie){let Fe=await hi(ue,q.pathname,J.signal);if(Fe.type==="aborted")return{shortCircuited:!0};if(Fe.type==="error"){if(Fe.partialMatches.length===0){let{matches:on,route:Bn}=Ls(c);return{matches:on,pendingActionResult:[Bn.id,{type:"error",error:Fe.error}]}}let Ze=Ii(Fe.partialMatches).route.id;return{matches:Fe.partialMatches,pendingActionResult:[Ze,{type:"error",error:Fe.error}]}}else if(Fe.matches)ue=Fe.matches;else{let{notFoundMatches:Ze,error:on,route:Bn}=Cr(q.pathname);return{matches:Ze,pendingActionResult:[Bn.id,{type:"error",error:on}]}}}let Je,Ye=Ys(ue,q);if(!Ye.route.action&&!Ye.route.lazy)Je={type:"error",error:lr(405,{method:J.method,pathname:q.pathname,routeId:Ye.route.id})};else{let Fe=Ka(o,s,J,ue,Ye,$e?[]:i,be),Ze=await Sr(J,Fe,be,null);if(Je=Ze[Ye.route.id],!Je){for(let on of ue)if(Ze[on.route.id]){Je=Ze[on.route.id];break}}if(J.signal.aborted)return{shortCircuited:!0}}if(fa(Je)){let Fe;return Me&&Me.replace!=null?Fe=Me.replace:Fe=bd(Je.response.headers.get("Location"),new URL(J.url),p,e.history)===I.location.pathname+I.location.search,await Kt(J,Je,!0,{submission:G,replace:Fe}),{shortCircuited:!0}}if(Gt(Je)){let Fe=Ii(ue,Ye.route.id);return(Me&&Me.replace)!==!0&&(re="PUSH"),{matches:ue,pendingActionResult:[Fe.route.id,Je,Ye.route.id]}}return{matches:ue,pendingActionResult:[Ye.route.id,Je]}}async function $r(J,q,G,ue,be,Ie,$e,Me,Pe,Je,Ye,Fe,Ze){let on=Ie||vc(q,$e),Bn=$e||Me||Cd(on),In=!ae&&!Je;if(be){if(In){let yn=Ft(Fe);zn({navigation:on,...yn!==void 0?{actionData:yn}:{}},{flushSync:Ye})}let cn=await hi(G,q.pathname,J.signal);if(cn.type==="aborted")return{shortCircuited:!0};if(cn.type==="error"){if(cn.partialMatches.length===0){let{matches:pi,route:Ur}=Ls(c);return{matches:pi,loaderData:{},errors:{[Ur.id]:cn.error}}}let yn=Ii(cn.partialMatches).route.id;return{matches:cn.partialMatches,loaderData:{},errors:{[yn]:cn.error}}}else if(cn.matches)G=cn.matches;else{let{error:yn,notFoundMatches:pi,route:Ur}=Cr(q.pathname);return{matches:pi,loaderData:{},errors:{[Ur.id]:yn}}}}let Kn=h||c,{dsMatches:fn,revalidatingFetchers:Et}=dd(J,ue,o,s,e.history,I,G,Bn,q,Je?[]:i,Je===!0,xe,De,ze,A,Q,Kn,p,e.patchRoutesOnNavigation!=null,Fe,Ze);if(M=++ke,!e.dataStrategy&&!fn.some(cn=>cn.shouldLoad)&&!fn.some(cn=>cn.route.middleware&&cn.route.middleware.length>0)&&Et.length===0){let cn=On();return lt(q,{matches:G,loaderData:{},errors:Fe&&Gt(Fe[1])?{[Fe[0]]:Fe[1].error}:null,...Sd(Fe),...cn?{fetchers:new Map(I.fetchers)}:{}},{flushSync:Ye}),{shortCircuited:!0}}if(In){let cn={};if(!be){cn.navigation=on;let yn=Ft(Fe);yn!==void 0&&(cn.actionData=yn)}Et.length>0&&(cn.fetchers=ft(Et)),zn(cn,{flushSync:Ye})}Et.forEach(cn=>{Qn(cn.key),cn.controller&&te.set(cn.key,cn.controller)});let gn=()=>Et.forEach(cn=>Qn(cn.key));ie&&ie.signal.addEventListener("abort",gn);let{loaderResults:Yi,fetcherResults:Zt}=await Z(fn,Et,J,ue);if(J.signal.aborted)return{shortCircuited:!0};ie&&ie.signal.removeEventListener("abort",gn),Et.forEach(cn=>te.delete(cn.key));let $t=Js(Yi);if($t)return await Kt(J,$t.result,!0,{replace:Pe}),{shortCircuited:!0};if($t=Js(Zt),$t)return Q.add($t.key),await Kt(J,$t.result,!0,{replace:Pe}),{shortCircuited:!0};let{loaderData:mi,errors:Qi}=xd(I,G,Yi,Fe,Et,Zt);Je&&I.errors&&(Qi={...I.errors,...Qi});let _r=On(),qr=Bt(M),yt=_r||qr||Et.length>0;return{matches:G,loaderData:mi,errors:Qi,...yt?{fetchers:new Map(I.fetchers)}:{}}}function Ft(J){if(J&&!Gt(J[1]))return{[J[0]]:J[1].data};if(I.actionData)return Object.keys(I.actionData).length===0?null:I.actionData}function ft(J){return J.forEach(q=>{let G=I.fetchers.get(q.key),ue=Wl(void 0,G?G.data:void 0);I.fetchers.set(q.key,ue)}),new Map(I.fetchers)}async function gt(J,q,G,ue){Qn(J);let be=(ue&&ue.flushSync)===!0,Ie=h||c,$e=e1(I.location,I.matches,p,G,q,ue==null?void 0:ue.relative),Me=Ri(Ie,$e,p),Pe=Gi(Me,Ie,$e);if(Pe.active&&Pe.matches&&(Me=Pe.matches),!Me){We(J,q,lr(404,{pathname:$e}),{flushSync:be});return}let{path:Je,submission:Ye,error:Fe}=pd(!0,$e,ue);if(Fe){We(J,q,Fe,{flushSync:be});return}let Ze=e.getContext?await e.getContext():new od,on=(ue&&ue.preventScrollReset)===!0;if(Ye&&ht(Ye.formMethod)){await Wi(J,q,Je,Me,Ze,Pe.active,be,on,Ye,ue&&ue.unstable_defaultShouldRevalidate);return}A.set(J,{routeId:q,path:Je}),await ka(J,q,Je,Me,Ze,Pe.active,be,on,Ye)}async function Wi(J,q,G,ue,be,Ie,$e,Me,Pe,Je){ye(),A.delete(J);let Ye=I.fetchers.get(J);Be(J,u7(Pe,Ye),{flushSync:$e});let Fe=new AbortController,Ze=Xa(e.history,G,Fe.signal,Pe);if(Ie){let Mn=await hi(ue,new URL(Ze.url).pathname,Ze.signal,J);if(Mn.type==="aborted")return;if(Mn.type==="error"){We(J,q,Mn.error,{flushSync:$e});return}else if(Mn.matches)ue=Mn.matches;else{We(J,q,lr(404,{pathname:G}),{flushSync:$e});return}}let on=Ys(ue,G);if(!on.route.action&&!on.route.lazy){let Mn=lr(405,{method:Pe.formMethod,pathname:G,routeId:q});We(J,q,Mn,{flushSync:$e});return}te.set(J,Fe);let Bn=ke,In=Ka(o,s,Ze,ue,on,i,be),Kn=await Sr(Ze,In,be,J),fn=Kn[on.route.id];if(!fn){for(let Mn of In)if(Kn[Mn.route.id]){fn=Kn[Mn.route.id];break}}if(Ze.signal.aborted){te.get(J)===Fe&&te.delete(J);return}if(ze.has(J)){if(fa(fn)||Gt(fn)){Be(J,ti(void 0));return}}else{if(fa(fn))if(te.delete(J),M>Bn){Be(J,ti(void 0));return}else return Q.add(J),Be(J,Wl(Pe)),Kt(Ze,fn,!1,{fetcherSubmission:Pe,preventScrollReset:Me});if(Gt(fn)){We(J,q,fn.error);return}}let Et=I.navigation.location||I.location,gn=Xa(e.history,Et,Fe.signal),Yi=h||c,Zt=I.navigation.state!=="idle"?Ri(Yi,I.navigation.location,p):I.matches;an(Zt,"Didn't find any matches after fetcher action");let $t=++ke;F.set(J,$t);let mi=Wl(Pe,fn.data);I.fetchers.set(J,mi);let{dsMatches:Qi,revalidatingFetchers:_r}=dd(gn,be,o,s,e.history,I,Zt,Pe,Et,i,!1,xe,De,ze,A,Q,Yi,p,e.patchRoutesOnNavigation!=null,[on.route.id,fn],Je);_r.filter(Mn=>Mn.key!==J).forEach(Mn=>{let Vr=Mn.key,Ki=I.fetchers.get(Vr),Zi=Wl(void 0,Ki?Ki.data:void 0);I.fetchers.set(Vr,Zi),Qn(Vr),Mn.controller&&te.set(Vr,Mn.controller)}),zn({fetchers:new Map(I.fetchers)});let qr=()=>_r.forEach(Mn=>Qn(Mn.key));Fe.signal.addEventListener("abort",qr);let{loaderResults:yt,fetcherResults:cn}=await Z(Qi,_r,gn,be);if(Fe.signal.aborted)return;if(Fe.signal.removeEventListener("abort",qr),F.delete(J),te.delete(J),_r.forEach(Mn=>te.delete(Mn.key)),I.fetchers.has(J)){let Mn=ti(fn.data);I.fetchers.set(J,Mn)}let yn=Js(yt);if(yn)return Kt(gn,yn.result,!1,{preventScrollReset:Me});if(yn=Js(cn),yn)return Q.add(yn.key),Kt(gn,yn.result,!1,{preventScrollReset:Me});let{loaderData:pi,errors:Ur}=xd(I,Zt,yt,void 0,_r,cn);Bt($t),I.navigation.state==="loading"&&$t>M?(an(re,"Expected pending action"),ie&&ie.abort(),lt(I.navigation.location,{matches:Zt,loaderData:pi,errors:Ur,fetchers:new Map(I.fetchers)})):(zn({errors:Ur,loaderData:kd(I.loaderData,pi,Zt,Ur),fetchers:new Map(I.fetchers)}),xe=!1)}async function ka(J,q,G,ue,be,Ie,$e,Me,Pe){let Je=I.fetchers.get(J);Be(J,Wl(Pe,Je?Je.data:void 0),{flushSync:$e});let Ye=new AbortController,Fe=Xa(e.history,G,Ye.signal);if(Ie){let fn=await hi(ue,new URL(Fe.url).pathname,Fe.signal,J);if(fn.type==="aborted")return;if(fn.type==="error"){We(J,q,fn.error,{flushSync:$e});return}else if(fn.matches)ue=fn.matches;else{We(J,q,lr(404,{pathname:G}),{flushSync:$e});return}}let Ze=Ys(ue,G);te.set(J,Ye);let on=ke,Bn=Ka(o,s,Fe,ue,Ze,i,be),Kn=(await Sr(Fe,Bn,be,J))[Ze.route.id];if(te.get(J)===Ye&&te.delete(J),!Fe.signal.aborted){if(ze.has(J)){Be(J,ti(void 0));return}if(fa(Kn))if(M>on){Be(J,ti(void 0));return}else{Q.add(J),await Kt(Fe,Kn,!1,{preventScrollReset:Me});return}if(Gt(Kn)){We(J,q,Kn.error);return}Be(J,ti(Kn.data))}}async function Kt(J,q,G,{submission:ue,fetcherSubmission:be,preventScrollReset:Ie,replace:$e}={}){G||(ee==null||ee.resolve(),ee=null),q.response.headers.has("X-Remix-Revalidate")&&(xe=!0);let Me=q.response.headers.get("Location");an(Me,"Expected a Location header on the redirect Response"),Me=bd(Me,new URL(J.url),p,e.history);let Pe=uo(I.location,Me,{_isRedirect:!0});if(t){let Bn=!1;if(q.response.headers.has("X-Remix-Reload-Document"))Bn=!0;else if(T1(Me)){const In=vg(Me,!0);Bn=In.origin!==n.location.origin||cr(In.pathname,p)==null}if(Bn){$e?n.location.replace(Me):n.location.assign(Me);return}}ie=null;let Je=$e===!0||q.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:Ye,formAction:Fe,formEncType:Ze}=I.navigation;!ue&&!be&&Ye&&Fe&&Ze&&(ue=Cd(I.navigation));let on=ue||be;if(j6.has(q.response.status)&&on&&ht(on.formMethod))await tt(Je,Pe,{submission:{...on,formAction:Me},preventScrollReset:Ie||U,enableViewTransition:G?le:void 0});else{let Bn=vc(Pe,ue);await tt(Je,Pe,{overrideNavigation:Bn,fetcherSubmission:be,preventScrollReset:Ie||U,enableViewTransition:G?le:void 0})}}async function Sr(J,q,G,ue){var $e;let be,Ie={};try{be=await G6(f,J,q,ue,G,!1)}catch(Me){return q.filter(Pe=>Pe.shouldLoad).forEach(Pe=>{Ie[Pe.route.id]={type:"error",error:Me}}),Ie}if(J.signal.aborted)return Ie;if(!ht(J.method))for(let Me of q){if((($e=be[Me.route.id])==null?void 0:$e.type)==="error")break;!be.hasOwnProperty(Me.route.id)&&!I.loaderData.hasOwnProperty(Me.route.id)&&(!I.errors||!I.errors.hasOwnProperty(Me.route.id))&&Me.shouldCallHandler()&&(be[Me.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${Me.route.id}`)})}for(let[Me,Pe]of Object.entries(be))if(i7(Pe)){let Je=Pe.result;Ie[Me]={type:"redirect",response:K6(Je,J,Me,q,p)}}else Ie[Me]=await Q6(Pe);return Ie}async function Z(J,q,G,ue){let be=Sr(G,J,ue,null),Ie=Promise.all(q.map(async Pe=>{if(Pe.matches&&Pe.match&&Pe.request&&Pe.controller){let Ye=(await Sr(Pe.request,Pe.matches,ue,Pe.key))[Pe.match.route.id];return{[Pe.key]:Ye}}else return Promise.resolve({[Pe.key]:{type:"error",error:lr(404,{pathname:Pe.path})}})})),$e=await be,Me=(await Ie).reduce((Pe,Je)=>Object.assign(Pe,Je),{});return{loaderResults:$e,fetcherResults:Me}}function ye(){xe=!0,A.forEach((J,q)=>{te.has(q)&&De.add(q),Qn(q)})}function Be(J,q,G={}){I.fetchers.set(J,q),zn({fetchers:new Map(I.fetchers)},{flushSync:(G&&G.flushSync)===!0})}function We(J,q,G,ue={}){let be=Ii(I.matches,q);Ot(J),zn({errors:{[be.route.id]:G},fetchers:new Map(I.fetchers)},{flushSync:(ue&&ue.flushSync)===!0})}function un(J){return Te.set(J,(Te.get(J)||0)+1),ze.has(J)&&ze.delete(J),I.fetchers.get(J)||F6}function Wn(J,q){Qn(J,q==null?void 0:q.reason),Be(J,ti(null))}function Ot(J){let q=I.fetchers.get(J);te.has(J)&&!(q&&q.state==="loading"&&F.has(J))&&Qn(J),A.delete(J),F.delete(J),Q.delete(J),ze.delete(J),De.delete(J),I.fetchers.delete(J)}function Mt(J){let q=(Te.get(J)||0)-1;q<=0?(Te.delete(J),ze.add(J)):Te.set(J,q),zn({fetchers:new Map(I.fetchers)})}function Qn(J,q){let G=te.get(J);G&&(G.abort(q),te.delete(J))}function Dr(J){for(let q of J){let G=un(q),ue=ti(G.data);I.fetchers.set(q,ue)}}function On(){let J=[],q=!1;for(let G of Q){let ue=I.fetchers.get(G);an(ue,`Expected fetcher: ${G}`),ue.state==="loading"&&(Q.delete(G),J.push(G),q=!0)}return Dr(J),q}function Bt(J){let q=[];for(let[G,ue]of F)if(ue<J){let be=I.fetchers.get(G);an(be,`Expected fetcher: ${G}`),be.state==="loading"&&(Qn(G),F.delete(G),q.push(G))}return Dr(q),q.length>0}function vt(J,q){let G=I.blockers.get(J)||Vl;return Ae.get(J)!==q&&Ae.set(J,q),G}function Sa(J){I.blockers.delete(J),Ae.delete(J)}function ci(J,q){let G=I.blockers.get(J)||Vl;an(G.state==="unblocked"&&q.state==="blocked"||G.state==="blocked"&&q.state==="blocked"||G.state==="blocked"&&q.state==="proceeding"||G.state==="blocked"&&q.state==="unblocked"||G.state==="proceeding"&&q.state==="unblocked",`Invalid blocker state transition: ${G.state} -> ${q.state}`);let ue=new Map(I.blockers);ue.set(J,q),zn({blockers:ue})}function Hr({currentLocation:J,nextLocation:q,historyAction:G}){if(Ae.size===0)return;Ae.size>1&&Un(!1,"A router only supports one blocker at a time");let ue=Array.from(Ae.entries()),[be,Ie]=ue[ue.length-1],$e=I.blockers.get(be);if(!($e&&$e.state==="proceeding")&&Ie({currentLocation:J,nextLocation:q,historyAction:G}))return be}function Cr(J){let q=lr(404,{pathname:J}),G=h||c,{matches:ue,route:be}=Ls(G);return{notFoundMatches:ue,route:be,error:q}}function zo(J,q,G){if(D=J,T=q,_=G||null,!E&&I.navigation===gc){E=!0;let ue=cl(I.location,I.matches);ue!=null&&zn({restoreScrollPosition:ue})}return()=>{D=null,T=null,_=null}}function ul(J,q){return _&&_(J,q.map(ue=>h6(ue,I.loaderData)))||J.key}function Ao(J,q){if(D&&T){let G=ul(J,q);D[G]=T()}}function cl(J,q){if(D){let G=ul(J,q),ue=D[G];if(typeof ue=="number")return ue}return null}function Gi(J,q,G){if(e.patchRoutesOnNavigation)if(J){if(Object.keys(J[0].params).length>0)return{active:!0,matches:eo(q,G,p,!0)}}else return{active:!0,matches:eo(q,G,p,!0)||[]};return{active:!1,matches:null}}async function hi(J,q,G,ue){if(!e.patchRoutesOnNavigation)return{type:"success",matches:J};let be=J;for(;;){let Ie=h==null,$e=h||c,Me=s;try{await e.patchRoutesOnNavigation({signal:G,path:q,matches:be,fetcherKey:ue,patch:(Ye,Fe)=>{G.aborted||fd(Ye,Fe,$e,Me,o,!1)}})}catch(Ye){return{type:"error",error:Ye,partialMatches:be}}finally{Ie&&!G.aborted&&(c=[...c])}if(G.aborted)return{type:"aborted"};let Pe=Ri($e,q,p),Je=null;if(Pe){if(Object.keys(Pe[0].params).length===0)return{type:"success",matches:Pe};if(Je=eo($e,q,p,!0),!(Je&&be.length<Je.length&&hl(be,Je.slice(0,be.length))))return{type:"success",matches:Pe}}if(Je||(Je=eo($e,q,p,!0)),!Je||hl(be,Je))return{type:"success",matches:null};be=Je}}function hl(J,q){return J.length===q.length&&J.every((G,ue)=>G.route.id===q[ue].route.id)}function Xi(J){s={},h=co(J,o,void 0,s)}function ml(J,q,G=!1){let ue=h==null;fd(J,q,h||c,s,o,G),ue&&(c=[...c],zn({}))}return H={get basename(){return p},get future(){return d},get state(){return I},get routes(){return c},get window(){return n},initialize:tn,subscribe:at,enableScrollRestoration:zo,navigate:kr,fetch:gt,revalidate:Br,createHref:J=>e.history.createHref(J),encodeLocation:J=>e.history.encodeLocation(J),getFetcher:un,resetFetcher:Wn,deleteFetcher:Mt,dispose:bn,getBlocker:vt,deleteBlocker:Sa,patchRoutes:ml,_internalFetchControllers:te,_internalSetRoutes:Xi,_internalSetStateDoNotUseOrYouWillBreakYourApp(J){zn(J)}},e.unstable_instrumentations&&(H=z6(H,e.unstable_instrumentations.map(J=>J.router).filter(Boolean))),H}function $6(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function e1(e,n,t,i,l,o){let s,c;if(l){s=[];for(let p of n)if(s.push(p),p.route.id===l){c=p;break}}else s=n,c=n[n.length-1];let h=A1(i||".",z1(s),cr(e.pathname,t)||e.pathname,o==="path");if(i==null&&(h.search=e.search,h.hash=e.hash),(i==null||i===""||i===".")&&c){let p=L1(h.search);if(c.route.index&&!p)h.search=h.search?h.search.replace(/^\?/,"?index&"):"?index";else if(!c.route.index&&p){let f=new URLSearchParams(h.search),d=f.getAll("index");f.delete("index"),d.filter(b=>b).forEach(b=>f.append("index",b));let w=f.toString();h.search=w?`?${w}`:""}}return t!=="/"&&(h.pathname=D6({basename:t,pathname:h.pathname})),Jr(h)}function pd(e,n,t){if(!t||!$6(t))return{path:n};if(t.formMethod&&!o7(t.formMethod))return{path:n,error:lr(405,{method:t.formMethod})};let i=()=>({path:n,error:lr(400,{type:"invalid-body"})}),o=(t.formMethod||"get").toUpperCase(),s=Lg(n);if(t.body!==void 0){if(t.formEncType==="text/plain"){if(!ht(o))return i();let d=typeof t.body=="string"?t.body:t.body instanceof FormData||t.body instanceof URLSearchParams?Array.from(t.body.entries()).reduce((w,[b,D])=>`${w}${b}=${D}
`,""):String(t.body);return{path:n,submission:{formMethod:o,formAction:s,formEncType:t.formEncType,formData:void 0,json:void 0,text:d}}}else if(t.formEncType==="application/json"){if(!ht(o))return i();try{let d=typeof t.body=="string"?JSON.parse(t.body):t.body;return{path:n,submission:{formMethod:o,formAction:s,formEncType:t.formEncType,formData:void 0,json:d,text:void 0}}}catch{return i()}}}an(typeof FormData=="function","FormData is not available in this environment");let c,h;if(t.formData)c=r1(t.formData),h=t.formData;else if(t.body instanceof FormData)c=r1(t.body),h=t.body;else if(t.body instanceof URLSearchParams)c=t.body,h=wd(c);else if(t.body==null)c=new URLSearchParams,h=new FormData;else try{c=new URLSearchParams(t.body),h=wd(c)}catch{return i()}let p={formMethod:o,formAction:s,formEncType:t&&t.formEncType||"application/x-www-form-urlencoded",formData:h,json:void 0,text:void 0};if(ht(p.formMethod))return{path:n,submission:p};let f=qi(n);return e&&f.search&&L1(f.search)&&c.append("index",""),f.search=`?${c}`,{path:Jr(f),submission:p}}function dd(e,n,t,i,l,o,s,c,h,p,f,d,w,b,D,_,T,E,z,O,ne){var ae;let K=O?Gt(O[1])?O[1].error:O[1].data:void 0,H=l.createURL(o.location),I=l.createURL(h),re;if(f&&o.errors){let xe=Object.keys(o.errors)[0];re=s.findIndex(De=>De.route.id===xe)}else if(O&&Gt(O[1])){let xe=O[0];re=s.findIndex(De=>De.route.id===xe)-1}let ee=O?O[1].statusCode:void 0,U=ee&&ee>=400,ie={currentUrl:H,currentParams:((ae=o.matches[0])==null?void 0:ae.params)||{},nextUrl:I,nextParams:s[0].params,...c,actionResult:K,actionStatus:ee},le=bo(s),Le=s.map((xe,De)=>{let{route:te}=xe,ke=null;if(re!=null&&De>re?ke=!1:te.lazy?ke=!0:P1(te)?f?ke=n1(te,o.loaderData,o.errors):H6(o.loaderData,o.matches[De],xe)&&(ke=!0):ke=!1,ke!==null)return t1(t,i,e,le,xe,p,n,ke);let M=!1;typeof ne=="boolean"?M=ne:U?M=!1:(d||H.pathname+H.search===I.pathname+I.search||H.search!==I.search||q6(o.matches[De],xe))&&(M=!0);let F={...ie,defaultShouldRevalidate:M},Q=to(xe,F);return t1(t,i,e,le,xe,p,n,Q,F,ne)}),me=[];return D.forEach((xe,De)=>{if(f||!s.some(ze=>ze.route.id===xe.routeId)||b.has(De))return;let te=o.fetchers.get(De),ke=te&&te.state!=="idle"&&te.data===void 0,M=Ri(T,xe.path,E);if(!M){if(z&&ke)return;me.push({key:De,routeId:xe.routeId,path:xe.path,matches:null,match:null,request:null,controller:null});return}if(_.has(De))return;let F=Ys(M,xe.path),Q=new AbortController,A=Xa(l,xe.path,Q.signal),Te=null;if(w.has(De))w.delete(De),Te=Ka(t,i,A,M,F,p,n);else if(ke)d&&(Te=Ka(t,i,A,M,F,p,n));else{let ze;typeof ne=="boolean"?ze=ne:U?ze=!1:ze=d;let Ae={...ie,defaultShouldRevalidate:ze};to(F,Ae)&&(Te=Ka(t,i,A,M,F,p,n,Ae))}Te&&me.push({key:De,routeId:xe.routeId,path:xe.path,matches:Te,match:F,request:A,controller:Q})}),{dsMatches:Le,revalidatingFetchers:me}}function P1(e){return e.loader!=null||e.middleware!=null&&e.middleware.length>0}function n1(e,n,t){if(e.lazy)return!0;if(!P1(e))return!1;let i=n!=null&&e.id in n,l=t!=null&&t[e.id]!==void 0;return!i&&l?!1:typeof e.loader=="function"&&e.loader.hydrate===!0?!0:!i&&!l}function H6(e,n,t){let i=!n||t.route.id!==n.route.id,l=!e.hasOwnProperty(t.route.id);return i||l}function q6(e,n){let t=e.route.path;return e.pathname!==n.pathname||t!=null&&t.endsWith("*")&&e.params["*"]!==n.params["*"]}function to(e,n){if(e.route.shouldRevalidate){let t=e.route.shouldRevalidate(n);if(typeof t=="boolean")return t}return n.defaultShouldRevalidate}function fd(e,n,t,i,l,o){let s;if(e){let p=i[e];an(p,`No route found to patch children into: routeId = ${e}`),p.children||(p.children=[]),s=p.children}else s=t;let c=[],h=[];if(n.forEach(p=>{let f=s.find(d=>Tg(p,d));f?h.push({existingRoute:f,newRoute:p}):c.push(p)}),c.length>0){let p=co(c,l,[e||"_","patch",String((s==null?void 0:s.length)||"0")],i);s.push(...p)}if(o&&h.length>0)for(let p=0;p<h.length;p++){let{existingRoute:f,newRoute:d}=h[p],w=f,[b]=co([d],l,[],{},!0);Object.assign(w,{element:b.element?b.element:w.element,errorElement:b.errorElement?b.errorElement:w.errorElement,hydrateFallbackElement:b.hydrateFallbackElement?b.hydrateFallbackElement:w.hydrateFallbackElement})}}function Tg(e,n){return"id"in e&&"id"in n&&e.id===n.id?!0:e.index===n.index&&e.path===n.path&&e.caseSensitive===n.caseSensitive?(!e.children||e.children.length===0)&&(!n.children||n.children.length===0)?!0:e.children.every((t,i)=>{var l;return(l=n.children)==null?void 0:l.some(o=>Tg(t,o))}):!1}var gd=new WeakMap,zg=({key:e,route:n,manifest:t,mapRouteProperties:i})=>{let l=t[n.id];if(an(l,"No route found in manifest"),!l.lazy||typeof l.lazy!="object")return;let o=l.lazy[e];if(!o)return;let s=gd.get(l);s||(s={},gd.set(l,s));let c=s[e];if(c)return c;let h=(async()=>{let p=o6(e),d=l[e]!==void 0&&e!=="hasErrorBoundary";if(p)Un(!p,"Route property "+e+" is not a supported lazy route property. This property will be ignored."),s[e]=Promise.resolve();else if(d)Un(!1,`Route "${l.id}" has a static property "${e}" defined. The lazy property will be ignored.`);else{let w=await o();w!=null&&(Object.assign(l,{[e]:w}),Object.assign(l,i(l)))}typeof l.lazy=="object"&&(l.lazy[e]=void 0,Object.values(l.lazy).every(w=>w===void 0)&&(l.lazy=void 0))})();return s[e]=h,h},vd=new WeakMap;function U6(e,n,t,i,l){let o=t[e.id];if(an(o,"No route found in manifest"),!e.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof e.lazy=="function"){let f=vd.get(o);if(f)return{lazyRoutePromise:f,lazyHandlerPromise:f};let d=(async()=>{an(typeof e.lazy=="function","No lazy route function found");let w=await e.lazy(),b={};for(let D in w){let _=w[D];if(_===void 0)continue;let T=u6(D),z=o[D]!==void 0&&D!=="hasErrorBoundary";T?Un(!T,"Route property "+D+" is not a supported property to be returned from a lazy route function. This property will be ignored."):z?Un(!z,`Route "${o.id}" has a static property "${D}" defined but its lazy function is also returning a value for this property. The lazy route property "${D}" will be ignored.`):b[D]=_}Object.assign(o,b),Object.assign(o,{...i(o),lazy:void 0})})();return vd.set(o,d),d.catch(()=>{}),{lazyRoutePromise:d,lazyHandlerPromise:d}}let s=Object.keys(e.lazy),c=[],h;for(let f of s){if(l&&l.includes(f))continue;let d=zg({key:f,route:e,manifest:t,mapRouteProperties:i});d&&(c.push(d),f===n&&(h=d))}let p=c.length>0?Promise.all(c).then(()=>{}):void 0;return p==null||p.catch(()=>{}),h==null||h.catch(()=>{}),{lazyRoutePromise:p,lazyHandlerPromise:h}}async function yd(e){let n=e.matches.filter(l=>l.shouldLoad),t={};return(await Promise.all(n.map(l=>l.resolve()))).forEach((l,o)=>{t[n[o].route.id]=l}),t}async function V6(e){return e.matches.some(n=>n.route.middleware)?Ag(e,()=>yd(e)):yd(e)}function Ag(e,n){return W6(e,n,i=>{if(l7(i))throw i;return i},t7,t);function t(i,l,o){if(o)return Promise.resolve(Object.assign(o.value,{[l]:{type:"error",result:i}}));{let{matches:s}=e,c=Math.min(Math.max(s.findIndex(p=>p.route.id===l),0),Math.max(s.findIndex(p=>p.shouldCallHandler()),0)),h=Ii(s,s[c].route.id).route.id;return Promise.resolve({[h]:{type:"error",result:i}})}}}async function W6(e,n,t,i,l){let{matches:o,request:s,params:c,context:h,unstable_pattern:p}=e,f=o.flatMap(w=>w.route.middleware?w.route.middleware.map(b=>[w.route.id,b]):[]);return await Pg({request:s,params:c,context:h,unstable_pattern:p},f,n,t,i,l)}async function Pg(e,n,t,i,l,o,s=0){let{request:c}=e;if(c.signal.aborted)throw c.signal.reason??new Error(`Request aborted: ${c.method} ${c.url}`);let h=n[s];if(!h)return await t();let[p,f]=h,d,w=async()=>{if(d)throw new Error("You may only call `next()` once per middleware");try{return d={value:await Pg(e,n,t,i,l,o,s+1)},d.value}catch(b){return d={value:await o(b,p,d)},d.value}};try{let b=await f(e,w),D=b!=null?i(b):void 0;return l(D)?D:d?D??d.value:(d={value:await w()},d.value)}catch(b){return await o(b,p,d)}}function Ng(e,n,t,i,l){let o=zg({key:"middleware",route:i.route,manifest:n,mapRouteProperties:e}),s=U6(i.route,ht(t.method)?"action":"loader",n,e,l);return{middleware:o,route:s.lazyRoutePromise,handler:s.lazyHandlerPromise}}function t1(e,n,t,i,l,o,s,c,h=null,p){let f=!1,d=Ng(e,n,t,l,o);return{...l,_lazyPromises:d,shouldLoad:c,shouldRevalidateArgs:h,shouldCallHandler(w){return f=!0,h?typeof p=="boolean"?to(l,{...h,defaultShouldRevalidate:p}):typeof w=="boolean"?to(l,{...h,defaultShouldRevalidate:w}):to(l,h):c},resolve(w){let{lazy:b,loader:D,middleware:_}=l.route,T=f||c||w&&!ht(t.method)&&(b||D),E=_&&_.length>0&&!D&&!b;return T&&(ht(t.method)||!E)?X6({request:t,unstable_pattern:i,match:l,lazyHandlerPromise:d==null?void 0:d.handler,lazyRoutePromise:d==null?void 0:d.route,handlerOverride:w,scopedContext:s}):Promise.resolve({type:"data",result:void 0})}}}function Ka(e,n,t,i,l,o,s,c=null){return i.map(h=>h.route.id!==l.route.id?{...h,shouldLoad:!1,shouldRevalidateArgs:c,shouldCallHandler:()=>!1,_lazyPromises:Ng(e,n,t,h,o),resolve:()=>Promise.resolve({type:"data",result:void 0})}:t1(e,n,t,bo(i),h,o,s,!0,c))}async function G6(e,n,t,i,l,o){t.some(p=>{var f;return(f=p._lazyPromises)==null?void 0:f.middleware})&&await Promise.all(t.map(p=>{var f;return(f=p._lazyPromises)==null?void 0:f.middleware}));let s={request:n,unstable_pattern:bo(t),params:t[0].params,context:l,matches:t},h=await e({...s,fetcherKey:i,runClientMiddleware:p=>{let f=s;return Ag(f,()=>p({...f,fetcherKey:i,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(t.flatMap(p=>{var f,d;return[(f=p._lazyPromises)==null?void 0:f.handler,(d=p._lazyPromises)==null?void 0:d.route]}))}catch{}return h}async function X6({request:e,unstable_pattern:n,match:t,lazyHandlerPromise:i,lazyRoutePromise:l,handlerOverride:o,scopedContext:s}){let c,h,p=ht(e.method),f=p?"action":"loader",d=w=>{let b,D=new Promise((E,z)=>b=z);h=()=>b(),e.signal.addEventListener("abort",h);let _=E=>typeof w!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${f}" [routeId: ${t.route.id}]`)):w({request:e,unstable_pattern:n,params:t.params,context:s},...E!==void 0?[E]:[]),T=(async()=>{try{return{type:"data",result:await(o?o(z=>_(z)):_())}}catch(E){return{type:"error",result:E}}})();return Promise.race([T,D])};try{let w=p?t.route.action:t.route.loader;if(i||l)if(w){let b,[D]=await Promise.all([d(w).catch(_=>{b=_}),i,l]);if(b!==void 0)throw b;c=D}else{await i;let b=p?t.route.action:t.route.loader;if(b)[c]=await Promise.all([d(b),l]);else if(f==="action"){let D=new URL(e.url),_=D.pathname+D.search;throw lr(405,{method:e.method,pathname:_,routeId:t.route.id})}else return{type:"data",result:void 0}}else if(w)c=await d(w);else{let b=new URL(e.url),D=b.pathname+b.search;throw lr(404,{pathname:D})}}catch(w){return{type:"error",result:w}}finally{h&&e.signal.removeEventListener("abort",h)}return c}async function Y6(e){let n=e.headers.get("Content-Type");return n&&/\bapplication\/json\b/.test(n)?e.body==null?null:e.json():e.text()}async function Q6(e){var i,l,o,s,c;let{result:n,type:t}=e;if(N1(n)){let h;try{h=await Y6(n)}catch(p){return{type:"error",error:p}}return t==="error"?{type:"error",error:new yo(n.status,n.statusText,h),statusCode:n.status,headers:n.headers}:{type:"data",data:h,statusCode:n.status,headers:n.headers}}return t==="error"?Dd(n)?n.data instanceof Error?{type:"error",error:n.data,statusCode:(i=n.init)==null?void 0:i.status,headers:(l=n.init)!=null&&l.headers?new Headers(n.init.headers):void 0}:{type:"error",error:n7(n),statusCode:ho(n)?n.status:void 0,headers:(o=n.init)!=null&&o.headers?new Headers(n.init.headers):void 0}:{type:"error",error:n,statusCode:ho(n)?n.status:void 0}:Dd(n)?{type:"data",data:n.data,statusCode:(s=n.init)==null?void 0:s.status,headers:(c=n.init)!=null&&c.headers?new Headers(n.init.headers):void 0}:{type:"data",data:n}}function K6(e,n,t,i,l){let o=e.headers.get("Location");if(an(o,"Redirects returned/thrown from loaders/actions must have a Location header"),!T1(o)){let s=i.slice(0,i.findIndex(c=>c.route.id===t)+1);o=e1(new URL(n.url),s,l,o),e.headers.set("Location",o)}return e}function bd(e,n,t,i){let l=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(T1(e)){let o=e,s=o.startsWith("//")?new URL(n.protocol+o):new URL(o);if(l.includes(s.protocol))throw new Error("Invalid redirect location");let c=cr(s.pathname,t)!=null;if(s.origin===n.origin&&c)return s.pathname+s.search+s.hash}try{let o=i.createURL(e);if(l.includes(o.protocol))throw new Error("Invalid redirect location")}catch{}return e}function Xa(e,n,t,i){let l=e.createURL(Lg(n)).toString(),o={signal:t};if(i&&ht(i.formMethod)){let{formMethod:s,formEncType:c}=i;o.method=s.toUpperCase(),c==="application/json"?(o.headers=new Headers({"Content-Type":c}),o.body=JSON.stringify(i.json)):c==="text/plain"?o.body=i.text:c==="application/x-www-form-urlencoded"&&i.formData?o.body=r1(i.formData):o.body=i.formData}return new Request(l,o)}function r1(e){let n=new URLSearchParams;for(let[t,i]of e.entries())n.append(t,typeof i=="string"?i:i.name);return n}function wd(e){let n=new FormData;for(let[t,i]of e.entries())n.append(t,i);return n}function Z6(e,n,t,i=!1,l=!1){let o={},s=null,c,h=!1,p={},f=t&&Gt(t[1])?t[1].error:void 0;return e.forEach(d=>{if(!(d.route.id in n))return;let w=d.route.id,b=n[w];if(an(!fa(b),"Cannot handle redirect results in processLoaderData"),Gt(b)){let D=b.error;if(f!==void 0&&(D=f,f=void 0),s=s||{},l)s[w]=D;else{let _=Ii(e,w);s[_.route.id]==null&&(s[_.route.id]=D)}i||(o[w]=Eg),h||(h=!0,c=ho(b.error)?b.error.status:500),b.headers&&(p[w]=b.headers)}else o[w]=b.data,b.statusCode&&b.statusCode!==200&&!h&&(c=b.statusCode),b.headers&&(p[w]=b.headers)}),f!==void 0&&t&&(s={[t[0]]:f},t[2]&&(o[t[2]]=void 0)),{loaderData:o,errors:s,statusCode:c||200,loaderHeaders:p}}function xd(e,n,t,i,l,o){let{loaderData:s,errors:c}=Z6(n,t,i);return l.filter(h=>!h.matches||h.matches.some(p=>p.shouldLoad)).forEach(h=>{let{key:p,match:f,controller:d}=h;if(d&&d.signal.aborted)return;let w=o[p];if(an(w,"Did not find corresponding fetcher result"),Gt(w)){let b=Ii(e.matches,f==null?void 0:f.route.id);c&&c[b.route.id]||(c={...c,[b.route.id]:w.error}),e.fetchers.delete(p)}else if(fa(w))an(!1,"Unhandled fetcher revalidation redirect");else{let b=ti(w.data);e.fetchers.set(p,b)}}),{loaderData:s,errors:c}}function kd(e,n,t,i){let l=Object.entries(n).filter(([,o])=>o!==Eg).reduce((o,[s,c])=>(o[s]=c,o),{});for(let o of t){let s=o.route.id;if(!n.hasOwnProperty(s)&&e.hasOwnProperty(s)&&o.route.loader&&(l[s]=e[s]),i&&i.hasOwnProperty(s))break}return l}function Sd(e){return e?Gt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Ii(e,n){return(n?e.slice(0,e.findIndex(i=>i.route.id===n)+1):[...e]).reverse().find(i=>i.route.hasErrorBoundary===!0)||e[0]}function Ls(e){let n=e.length===1?e[0]:e.find(t=>t.index||!t.path||t.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:n}],route:n}}function lr(e,{pathname:n,routeId:t,method:i,type:l,message:o}={}){let s="Unknown Server Error",c="Unknown @remix-run/router error";return e===400?(s="Bad Request",i&&n&&t?c=`You made a ${i} request to "${n}" but did not provide a \`loader\` for route "${t}", so there is no way to handle the request.`:l==="invalid-body"&&(c="Unable to encode submission body")):e===403?(s="Forbidden",c=`Route "${t}" does not match URL "${n}"`):e===404?(s="Not Found",c=`No route matches URL "${n}"`):e===405&&(s="Method Not Allowed",i&&n&&t?c=`You made a ${i.toUpperCase()} request to "${n}" but did not provide an \`action\` for route "${t}", so there is no way to handle the request.`:i&&(c=`Invalid request method "${i.toUpperCase()}"`)),new yo(e||500,s,new Error(c),!0)}function Js(e){let n=Object.entries(e);for(let t=n.length-1;t>=0;t--){let[i,l]=n[t];if(fa(l))return{key:i,result:l}}}function Lg(e){let n=typeof e=="string"?qi(e):e;return Jr({...n,hash:""})}function e7(e,n){return e.pathname!==n.pathname||e.search!==n.search?!1:e.hash===""?n.hash!=="":e.hash===n.hash?!0:n.hash!==""}function n7(e){var n,t;return new yo(((n=e.init)==null?void 0:n.status)??500,((t=e.init)==null?void 0:t.statusText)??"Internal Server Error",e.data)}function t7(e){return e!=null&&typeof e=="object"&&Object.entries(e).every(([n,t])=>typeof n=="string"&&r7(t))}function r7(e){return e!=null&&typeof e=="object"&&"type"in e&&"result"in e&&(e.type==="data"||e.type==="error")}function i7(e){return N1(e.result)&&_g.has(e.result.status)}function Gt(e){return e.type==="error"}function fa(e){return(e&&e.type)==="redirect"}function Dd(e){return typeof e=="object"&&e!=null&&"type"in e&&"data"in e&&"init"in e&&e.type==="DataWithResponseInit"}function N1(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function a7(e){return _g.has(e)}function l7(e){return N1(e)&&a7(e.status)&&e.headers.has("Location")}function o7(e){return I6.has(e.toUpperCase())}function ht(e){return J6.has(e.toUpperCase())}function L1(e){return new URLSearchParams(e).getAll("index").some(n=>n==="")}function Ys(e,n){let t=typeof n=="string"?qi(n).search:n.search;if(e[e.length-1].route.index&&L1(t||""))return e[e.length-1];let i=xg(e);return i[i.length-1]}function Cd(e){let{formMethod:n,formAction:t,formEncType:i,text:l,formData:o,json:s}=e;if(!(!n||!t||!i)){if(l!=null)return{formMethod:n,formAction:t,formEncType:i,formData:void 0,json:void 0,text:l};if(o!=null)return{formMethod:n,formAction:t,formEncType:i,formData:o,json:void 0,text:void 0};if(s!==void 0)return{formMethod:n,formAction:t,formEncType:i,formData:void 0,json:s,text:void 0}}}function vc(e,n){return n?{state:"loading",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function s7(e,n){return{state:"submitting",location:e,formMethod:n.formMethod,formAction:n.formAction,formEncType:n.formEncType,formData:n.formData,json:n.json,text:n.text}}function Wl(e,n){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:n}}function u7(e,n){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:n?n.data:void 0}}function ti(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function c7(e,n){try{let t=e.sessionStorage.getItem(Mg);if(t){let i=JSON.parse(t);for(let[l,o]of Object.entries(i||{}))o&&Array.isArray(o)&&n.set(l,new Set(o||[]))}}catch{}}function h7(e,n){if(n.size>0){let t={};for(let[i,l]of n)t[i]=[...l];try{e.sessionStorage.setItem(Mg,JSON.stringify(t))}catch(i){Un(!1,`Failed to save applied view transitions in sessionStorage (${i}).`)}}}function _d(){let e,n,t=new Promise((i,l)=>{e=async o=>{i(o);try{await t}catch{}},n=async o=>{l(o);try{await t}catch{}}});return{promise:t,resolve:e,reject:n}}var va=Y.createContext(null);va.displayName="DataRouter";var wo=Y.createContext(null);wo.displayName="DataRouterState";var Jg=Y.createContext(!1);function m7(){return Y.useContext(Jg)}var J1=Y.createContext({isTransitioning:!1});J1.displayName="ViewTransition";var Rg=Y.createContext(new Map);Rg.displayName="Fetchers";var p7=Y.createContext(null);p7.displayName="Await";var pr=Y.createContext(null);pr.displayName="Navigation";var m0=Y.createContext(null);m0.displayName="Location";var Rr=Y.createContext({outlet:null,matches:[],isDataRoute:!1});Rr.displayName="Route";var R1=Y.createContext(null);R1.displayName="RouteError";var Ig="REACT_ROUTER_ERROR",d7="REDIRECT",f7="ROUTE_ERROR_RESPONSE";function g7(e){if(e.startsWith(`${Ig}:${d7}:{`))try{let n=JSON.parse(e.slice(28));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.location=="string"&&typeof n.reloadDocument=="boolean"&&typeof n.replace=="boolean")return n}catch{}}function v7(e){if(e.startsWith(`${Ig}:${f7}:{`))try{let n=JSON.parse(e.slice(40));if(typeof n=="object"&&n&&typeof n.status=="number"&&typeof n.statusText=="string")return new yo(n.status,n.statusText,n.data)}catch{}}function y7(e,{relative:n}={}){an(xo(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=Y.useContext(pr),{hash:l,pathname:o,search:s}=ko(e,{relative:n}),c=o;return t!=="/"&&(c=o==="/"?t:Lr([t,o])),i.createHref({pathname:c,search:s,hash:l})}function xo(){return Y.useContext(m0)!=null}function ya(){return an(xo(),"useLocation() may be used only in the context of a <Router> component."),Y.useContext(m0).location}var jg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Fg(e){Y.useContext(pr).static||Y.useLayoutEffect(e)}function Og(){let{isDataRoute:e}=Y.useContext(Rr);return e?P7():b7()}function b7(){an(xo(),"useNavigate() may be used only in the context of a <Router> component.");let e=Y.useContext(va),{basename:n,navigator:t}=Y.useContext(pr),{matches:i}=Y.useContext(Rr),{pathname:l}=ya(),o=JSON.stringify(z1(i)),s=Y.useRef(!1);return Fg(()=>{s.current=!0}),Y.useCallback((h,p={})=>{if(Un(s.current,jg),!s.current)return;if(typeof h=="number"){t.go(h);return}let f=A1(h,JSON.parse(o),l,p.relative==="path");e==null&&n!=="/"&&(f.pathname=f.pathname==="/"?n:Lr([n,f.pathname])),(p.replace?t.replace:t.push)(f,p.state,p)},[n,t,o,l,e])}Y.createContext(null);function w7(){let{matches:e}=Y.useContext(Rr),n=e[e.length-1];return n?n.params:{}}function ko(e,{relative:n}={}){let{matches:t}=Y.useContext(Rr),{pathname:i}=ya(),l=JSON.stringify(z1(t));return Y.useMemo(()=>A1(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function x7(e,n,t,i,l){an(xo(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=Y.useContext(pr),{matches:s}=Y.useContext(Rr),c=s[s.length-1],h=c?c.params:{},p=c?c.pathname:"/",f=c?c.pathnameBase:"/",d=c&&c.route;{let z=d&&d.path||"";$g(p,!d||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let w=ya(),b;b=w;let D=b.pathname||"/",_=D;if(f!=="/"){let z=f.replace(/^\//,"").split("/");_="/"+D.replace(/^\//,"").split("/").slice(z.length).join("/")}let T=Ri(e,{pathname:_});return Un(d||T!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Un(T==null||T[T.length-1].route.element!==void 0||T[T.length-1].route.Component!==void 0||T[T.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),_7(T&&T.map(z=>Object.assign({},z,{params:Object.assign({},h,z.params),pathname:Lr([f,o.encodeLocation?o.encodeLocation(z.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?f:Lr([f,o.encodeLocation?o.encodeLocation(z.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),s,t,i,l)}function k7(){let e=A7(),n=ho(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),t=e instanceof Error?e.stack:null,i="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",e),s=Y.createElement(Y.Fragment,null,Y.createElement("p",null,"💿 Hey developer 👋"),Y.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Y.createElement("code",{style:o},"ErrorBoundary")," or"," ",Y.createElement("code",{style:o},"errorElement")," prop on your route.")),Y.createElement(Y.Fragment,null,Y.createElement("h2",null,"Unexpected Application Error!"),Y.createElement("h3",{style:{fontStyle:"italic"}},n),t?Y.createElement("pre",{style:l},t):null,s)}var S7=Y.createElement(k7,null),Bg=class extends Y.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){this.props.onError?this.props.onError(e,n):console.error("React Router caught the following error during render",e)}render(){let e=this.state.error;if(this.context&&typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){const t=v7(e.digest);t&&(e=t)}let n=e!==void 0?Y.createElement(Rr.Provider,{value:this.props.routeContext},Y.createElement(R1.Provider,{value:e,children:this.props.component})):this.props.children;return this.context?Y.createElement(D7,{error:e},n):n}};Bg.contextType=Jg;var yc=new WeakMap;function D7({children:e,error:n}){let{basename:t}=Y.useContext(pr);if(typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){let i=g7(n.digest);if(i){let l=yc.get(n);if(l)throw l;let o=Sg(i.location,t);if(kg&&!yc.get(n))if(o.isExternal||i.reloadDocument)window.location.href=o.absoluteURL||o.to;else{const s=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(o.to,{replace:i.replace}));throw yc.set(n,s),s}return Y.createElement("meta",{httpEquiv:"refresh",content:`0;url=${o.absoluteURL||o.to}`})}}return e}function C7({routeContext:e,match:n,children:t}){let i=Y.useContext(va);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),Y.createElement(Rr.Provider,{value:e},t)}function _7(e,n=[],t=null,i=null,l=null){if(e==null){if(!t)return null;if(t.errors)e=t.matches;else if(n.length===0&&!t.initialized&&t.matches.length>0)e=t.matches;else return null}let o=e,s=t==null?void 0:t.errors;if(s!=null){let f=o.findIndex(d=>d.route.id&&(s==null?void 0:s[d.route.id])!==void 0);an(f>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,h=-1;if(t)for(let f=0;f<o.length;f++){let d=o[f];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(h=f),d.route.id){let{loaderData:w,errors:b}=t,D=d.route.loader&&!w.hasOwnProperty(d.route.id)&&(!b||b[d.route.id]===void 0);if(d.route.lazy||D){c=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}let p=t&&i?(f,d)=>{var w,b;i(f,{location:t.location,params:((b=(w=t.matches)==null?void 0:w[0])==null?void 0:b.params)??{},unstable_pattern:bo(t.matches),errorInfo:d})}:void 0;return o.reduceRight((f,d,w)=>{let b,D=!1,_=null,T=null;t&&(b=s&&d.route.id?s[d.route.id]:void 0,_=d.route.errorElement||S7,c&&(h<0&&w===0?($g("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,T=null):h===w&&(D=!0,T=d.route.hydrateFallbackElement||null)));let E=n.concat(o.slice(0,w+1)),z=()=>{let O;return b?O=_:D?O=T:d.route.Component?O=Y.createElement(d.route.Component,null):d.route.element?O=d.route.element:O=f,Y.createElement(C7,{match:d,routeContext:{outlet:f,matches:E,isDataRoute:t!=null},children:O})};return t&&(d.route.ErrorBoundary||d.route.errorElement||w===0)?Y.createElement(Bg,{location:t.location,revalidation:t.revalidation,component:_,error:b,children:z(),routeContext:{outlet:null,matches:E,isDataRoute:!0},onError:p}):z()},null)}function I1(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M7(e){let n=Y.useContext(va);return an(n,I1(e)),n}function E7(e){let n=Y.useContext(wo);return an(n,I1(e)),n}function T7(e){let n=Y.useContext(Rr);return an(n,I1(e)),n}function j1(e){let n=T7(e),t=n.matches[n.matches.length-1];return an(t.route.id,`${e} can only be used on routes that contain a unique "id"`),t.route.id}function z7(){return j1("useRouteId")}function A7(){var i;let e=Y.useContext(R1),n=E7("useRouteError"),t=j1("useRouteError");return e!==void 0?e:(i=n.errors)==null?void 0:i[t]}function P7(){let{router:e}=M7("useNavigate"),n=j1("useNavigate"),t=Y.useRef(!1);return Fg(()=>{t.current=!0}),Y.useCallback(async(l,o={})=>{Un(t.current,jg),t.current&&(typeof l=="number"?await e.navigate(l):await e.navigate(l,{fromRouteId:n,...o}))},[e,n])}var Md={};function $g(e,n,t){!n&&!Md[e]&&(Md[e]=!0,Un(!1,t))}var Ed={};function Td(e,n){!e&&!Ed[n]&&(Ed[n]=!0,console.warn(n))}var N7="useOptimistic",zd=e6[N7],L7=()=>{};function J7(e){return zd?zd(e):[e,L7]}function R7(e){let n={hasErrorBoundary:e.hasErrorBoundary||e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&(e.element&&Un(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(n,{element:Y.createElement(e.Component),Component:void 0})),e.HydrateFallback&&(e.hydrateFallbackElement&&Un(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(n,{hydrateFallbackElement:Y.createElement(e.HydrateFallback),HydrateFallback:void 0})),e.ErrorBoundary&&(e.errorElement&&Un(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(n,{errorElement:Y.createElement(e.ErrorBoundary),ErrorBoundary:void 0})),n}var I7=["HydrateFallback","hydrateFallbackElement"],j7=class{constructor(){this.status="pending",this.promise=new Promise((e,n)=>{this.resolve=t=>{this.status==="pending"&&(this.status="resolved",e(t))},this.reject=t=>{this.status==="pending"&&(this.status="rejected",n(t))}})}};function F7({router:e,flushSync:n,onError:t,unstable_useTransitions:i}){i=m7()||i;let[o,s]=Y.useState(e.state),[c,h]=J7(o),[p,f]=Y.useState(),[d,w]=Y.useState({isTransitioning:!1}),[b,D]=Y.useState(),[_,T]=Y.useState(),[E,z]=Y.useState(),O=Y.useRef(new Map),ne=Y.useCallback((re,{deletedFetchers:ee,newErrors:U,flushSync:ie,viewTransitionOpts:le})=>{U&&t&&Object.values(U).forEach(me=>{var ae;return t(me,{location:re.location,params:((ae=re.matches[0])==null?void 0:ae.params)??{},unstable_pattern:bo(re.matches)})}),re.fetchers.forEach((me,ae)=>{me.data!==void 0&&O.current.set(ae,me.data)}),ee.forEach(me=>O.current.delete(me)),Td(ie===!1||n!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Le=e.window!=null&&e.window.document!=null&&typeof e.window.document.startViewTransition=="function";if(Td(le==null||Le,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!le||!Le){n&&ie?n(()=>s(re)):i===!1?s(re):Y.startTransition(()=>{i===!0&&h(me=>Ad(me,re)),s(re)});return}if(n&&ie){n(()=>{_&&(b==null||b.resolve(),_.skipTransition()),w({isTransitioning:!0,flushSync:!0,currentLocation:le.currentLocation,nextLocation:le.nextLocation})});let me=e.window.document.startViewTransition(()=>{n(()=>s(re))});me.finished.finally(()=>{n(()=>{D(void 0),T(void 0),f(void 0),w({isTransitioning:!1})})}),n(()=>T(me));return}_?(b==null||b.resolve(),_.skipTransition(),z({state:re,currentLocation:le.currentLocation,nextLocation:le.nextLocation})):(f(re),w({isTransitioning:!0,flushSync:!1,currentLocation:le.currentLocation,nextLocation:le.nextLocation}))},[e.window,n,_,b,i,h,t]);Y.useLayoutEffect(()=>e.subscribe(ne),[e,ne]),Y.useEffect(()=>{d.isTransitioning&&!d.flushSync&&D(new j7)},[d]),Y.useEffect(()=>{if(b&&p&&e.window){let re=p,ee=b.promise,U=e.window.document.startViewTransition(async()=>{i===!1?s(re):Y.startTransition(()=>{i===!0&&h(ie=>Ad(ie,re)),s(re)}),await ee});U.finished.finally(()=>{D(void 0),T(void 0),f(void 0),w({isTransitioning:!1})}),T(U)}},[p,b,e.window,i,h]),Y.useEffect(()=>{b&&p&&c.location.key===p.location.key&&b.resolve()},[b,_,c.location,p]),Y.useEffect(()=>{!d.isTransitioning&&E&&(f(E.state),w({isTransitioning:!0,flushSync:!1,currentLocation:E.currentLocation,nextLocation:E.nextLocation}),z(void 0))},[d.isTransitioning,E]);let K=Y.useMemo(()=>({createHref:e.createHref,encodeLocation:e.encodeLocation,go:re=>e.navigate(re),push:(re,ee,U)=>e.navigate(re,{state:ee,preventScrollReset:U==null?void 0:U.preventScrollReset}),replace:(re,ee,U)=>e.navigate(re,{replace:!0,state:ee,preventScrollReset:U==null?void 0:U.preventScrollReset})}),[e]),H=e.basename||"/",I=Y.useMemo(()=>({router:e,navigator:K,static:!1,basename:H,onError:t}),[e,K,H,t]);return Y.createElement(Y.Fragment,null,Y.createElement(va.Provider,{value:I},Y.createElement(wo.Provider,{value:c},Y.createElement(Rg.Provider,{value:O.current},Y.createElement(J1.Provider,{value:d},Y.createElement($7,{basename:H,location:c.location,navigationType:c.historyAction,navigator:K,unstable_useTransitions:i},Y.createElement(O7,{routes:e.routes,future:e.future,state:c,onError:t})))))),null)}function Ad(e,n){return{...e,navigation:n.navigation.state!=="idle"?n.navigation:e.navigation,revalidation:n.revalidation!=="idle"?n.revalidation:e.revalidation,actionData:n.navigation.state!=="submitting"?n.actionData:e.actionData,fetchers:n.fetchers}}var O7=Y.memo(B7);function B7({routes:e,future:n,state:t,onError:i}){return x7(e,void 0,t,i,n)}function $7({basename:e="/",children:n=null,location:t,navigationType:i="POP",navigator:l,static:o=!1,unstable_useTransitions:s}){an(!xo(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=e.replace(/^\/*/,"/"),h=Y.useMemo(()=>({basename:c,navigator:l,static:o,unstable_useTransitions:s,future:{}}),[c,l,o,s]);typeof t=="string"&&(t=qi(t));let{pathname:p="/",search:f="",hash:d="",state:w=null,key:b="default"}=t,D=Y.useMemo(()=>{let _=cr(p,c);return _==null?null:{location:{pathname:_,search:f,hash:d,state:w,key:b},navigationType:i}},[c,p,f,d,w,b,i]);return Un(D!=null,`<Router basename="${c}"> is not able to match the URL "${p}${f}${d}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:Y.createElement(pr.Provider,{value:h},Y.createElement(m0.Provider,{children:n,value:D}))}var Qs="get",Ks="application/x-www-form-urlencoded";function p0(e){return typeof HTMLElement<"u"&&e instanceof HTMLElement}function H7(e){return p0(e)&&e.tagName.toLowerCase()==="button"}function q7(e){return p0(e)&&e.tagName.toLowerCase()==="form"}function U7(e){return p0(e)&&e.tagName.toLowerCase()==="input"}function V7(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function W7(e,n){return e.button===0&&(!n||n==="_self")&&!V7(e)}var Rs=null;function G7(){if(Rs===null)try{new FormData(document.createElement("form"),0),Rs=!1}catch{Rs=!0}return Rs}var X7=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function bc(e){return e!=null&&!X7.has(e)?(Un(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ks}"`),null):e}function Y7(e,n){let t,i,l,o,s;if(q7(e)){let c=e.getAttribute("action");i=c?cr(c,n):null,t=e.getAttribute("method")||Qs,l=bc(e.getAttribute("enctype"))||Ks,o=new FormData(e)}else if(H7(e)||U7(e)&&(e.type==="submit"||e.type==="image")){let c=e.form;if(c==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let h=e.getAttribute("formaction")||c.getAttribute("action");if(i=h?cr(h,n):null,t=e.getAttribute("formmethod")||c.getAttribute("method")||Qs,l=bc(e.getAttribute("formenctype"))||bc(c.getAttribute("enctype"))||Ks,o=new FormData(c,e),!G7()){let{name:p,type:f,value:d}=e;if(f==="image"){let w=p?`${p}.`:"";o.append(`${w}x`,"0"),o.append(`${w}y`,"0")}else p&&o.append(p,d)}}else{if(p0(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Qs,i=null,l=Ks,s=e}return o&&l==="text/plain"&&(s=o,o=void 0),{action:i,method:t.toLowerCase(),encType:l,formData:o,body:s}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function F1(e,n){if(e===!1||e===null||typeof e>"u")throw new Error(n)}function Q7(e,n,t,i){let l=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return t?l.pathname.endsWith("/")?l.pathname=`${l.pathname}_.${i}`:l.pathname=`${l.pathname}.${i}`:l.pathname==="/"?l.pathname=`_root.${i}`:n&&cr(l.pathname,n)==="/"?l.pathname=`${n.replace(/\/$/,"")}/_root.${i}`:l.pathname=`${l.pathname.replace(/\/$/,"")}.${i}`,l}async function K7(e,n){if(e.id in n)return n[e.id];try{let t=await import(e.module);return n[e.id]=t,t}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Z7(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function ev(e,n,t){let i=await Promise.all(e.map(async l=>{let o=n.routes[l.route.id];if(o){let s=await K7(o,t);return s.links?s.links():[]}return[]}));return iv(i.flat(1).filter(Z7).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function Pd(e,n,t,i,l,o){let s=(h,p)=>t[p]?h.route.id!==t[p].route.id:!0,c=(h,p)=>{var f;return t[p].pathname!==h.pathname||((f=t[p].route.path)==null?void 0:f.endsWith("*"))&&t[p].params["*"]!==h.params["*"]};return o==="assets"?n.filter((h,p)=>s(h,p)||c(h,p)):o==="data"?n.filter((h,p)=>{var d;let f=i.routes[h.route.id];if(!f||!f.hasLoader)return!1;if(s(h,p)||c(h,p))return!0;if(h.route.shouldRevalidate){let w=h.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:((d=t[0])==null?void 0:d.params)||{},nextUrl:new URL(e,window.origin),nextParams:h.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function nv(e,n,{includeHydrateFallback:t}={}){return tv(e.map(i=>{let l=n.routes[i.route.id];if(!l)return[];let o=[l.module];return l.clientActionModule&&(o=o.concat(l.clientActionModule)),l.clientLoaderModule&&(o=o.concat(l.clientLoaderModule)),t&&l.hydrateFallbackModule&&(o=o.concat(l.hydrateFallbackModule)),l.imports&&(o=o.concat(l.imports)),o}).flat(1))}function tv(e){return[...new Set(e)]}function rv(e){let n={},t=Object.keys(e).sort();for(let i of t)n[i]=e[i];return n}function iv(e,n){let t=new Set;return new Set(n),e.reduce((i,l)=>{let o=JSON.stringify(rv(l));return t.has(o)||(t.add(o),i.push({key:o,link:l})),i},[])}function Hg(){let e=Y.useContext(va);return F1(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function av(){let e=Y.useContext(wo);return F1(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var O1=Y.createContext(void 0);O1.displayName="FrameworkContext";function qg(){let e=Y.useContext(O1);return F1(e,"You must render this element inside a <HydratedRouter> element"),e}function lv(e,n){let t=Y.useContext(O1),[i,l]=Y.useState(!1),[o,s]=Y.useState(!1),{onFocus:c,onBlur:h,onMouseEnter:p,onMouseLeave:f,onTouchStart:d}=n,w=Y.useRef(null);Y.useEffect(()=>{if(e==="render"&&s(!0),e==="viewport"){let _=E=>{E.forEach(z=>{s(z.isIntersecting)})},T=new IntersectionObserver(_,{threshold:.5});return w.current&&T.observe(w.current),()=>{T.disconnect()}}},[e]),Y.useEffect(()=>{if(i){let _=setTimeout(()=>{s(!0)},100);return()=>{clearTimeout(_)}}},[i]);let b=()=>{l(!0)},D=()=>{l(!1),s(!1)};return t?e!=="intent"?[o,w,{}]:[o,w,{onFocus:Gl(c,b),onBlur:Gl(h,D),onMouseEnter:Gl(p,b),onMouseLeave:Gl(f,D),onTouchStart:Gl(d,b)}]:[!1,w,{}]}function Gl(e,n){return t=>{e&&e(t),t.defaultPrevented||n(t)}}function ov({page:e,...n}){let{router:t}=Hg(),i=Y.useMemo(()=>Ri(t.routes,e,t.basename),[t.routes,e,t.basename]);return i?Y.createElement(uv,{page:e,matches:i,...n}):null}function sv(e){let{manifest:n,routeModules:t}=qg(),[i,l]=Y.useState([]);return Y.useEffect(()=>{let o=!1;return ev(e,n,t).then(s=>{o||l(s)}),()=>{o=!0}},[e,n,t]),i}function uv({page:e,matches:n,...t}){let i=ya(),{future:l,manifest:o,routeModules:s}=qg(),{basename:c}=Hg(),{loaderData:h,matches:p}=av(),f=Y.useMemo(()=>Pd(e,n,p,o,i,"data"),[e,n,p,o,i]),d=Y.useMemo(()=>Pd(e,n,p,o,i,"assets"),[e,n,p,o,i]),w=Y.useMemo(()=>{if(e===i.pathname+i.search+i.hash)return[];let _=new Set,T=!1;if(n.forEach(z=>{var ne;let O=o.routes[z.route.id];!O||!O.hasLoader||(!f.some(K=>K.route.id===z.route.id)&&z.route.id in h&&((ne=s[z.route.id])!=null&&ne.shouldRevalidate)||O.hasClientLoader?T=!0:_.add(z.route.id))}),_.size===0)return[];let E=Q7(e,c,l.unstable_trailingSlashAwareDataRequests,"data");return T&&_.size>0&&E.searchParams.set("_routes",n.filter(z=>_.has(z.route.id)).map(z=>z.route.id).join(",")),[E.pathname+E.search]},[c,l.unstable_trailingSlashAwareDataRequests,h,i,o,f,n,e,s]),b=Y.useMemo(()=>nv(d,o),[d,o]),D=sv(d);return Y.createElement(Y.Fragment,null,w.map(_=>Y.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...t})),b.map(_=>Y.createElement("link",{key:_,rel:"modulepreload",href:_,...t})),D.map(({key:_,link:T})=>Y.createElement("link",{key:_,nonce:t.nonce,...T,crossOrigin:T.crossOrigin??t.crossOrigin})))}function cv(...e){return n=>{e.forEach(t=>{typeof t=="function"?t(n):t!=null&&(t.current=n)})}}var hv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{hv&&(window.__reactRouterVersion="7.13.0")}catch{}function mv(e,n){return B6({basename:n==null?void 0:n.basename,getContext:n==null?void 0:n.getContext,future:n==null?void 0:n.future,history:r6({window:n==null?void 0:n.window}),hydrationData:(n==null?void 0:n.hydrationData)||pv(),routes:e,mapRouteProperties:R7,hydrationRouteProperties:I7,dataStrategy:n==null?void 0:n.dataStrategy,patchRoutesOnNavigation:n==null?void 0:n.patchRoutesOnNavigation,window:n==null?void 0:n.window,unstable_instrumentations:n==null?void 0:n.unstable_instrumentations}).initialize()}function pv(){let e=window==null?void 0:window.__staticRouterHydrationData;return e&&e.errors&&(e={...e,errors:dv(e.errors)}),e}function dv(e){if(!e)return null;let n=Object.entries(e),t={};for(let[i,l]of n)if(l&&l.__type==="RouteErrorResponse")t[i]=new yo(l.status,l.statusText,l.data,l.internal===!0);else if(l&&l.__type==="Error"){if(l.__subType){let o=window[l.__subType];if(typeof o=="function")try{let s=new o(l.message);s.stack="",t[i]=s}catch{}}if(t[i]==null){let o=new Error(l.message);o.stack="",t[i]=o}}else t[i]=l;return t}var Ug=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ur=Y.forwardRef(function({onClick:n,discover:t="render",prefetch:i="none",relative:l,reloadDocument:o,replace:s,state:c,target:h,to:p,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:w,...b},D){let{basename:_,unstable_useTransitions:T}=Y.useContext(pr),E=typeof p=="string"&&Ug.test(p),z=Sg(p,_);p=z.to;let O=y7(p,{relative:l}),[ne,K,H]=lv(i,b),I=yv(p,{replace:s,state:c,target:h,preventScrollReset:f,relative:l,viewTransition:d,unstable_defaultShouldRevalidate:w,unstable_useTransitions:T});function re(U){n&&n(U),U.defaultPrevented||I(U)}let ee=Y.createElement("a",{...b,...H,href:z.absoluteURL||O,onClick:z.isExternal||o?n:re,ref:cv(D,K),target:h,"data-discover":!E&&t==="render"?"true":void 0});return ne&&!E?Y.createElement(Y.Fragment,null,ee,Y.createElement(ov,{page:O})):ee});ur.displayName="Link";var fv=Y.forwardRef(function({"aria-current":n="page",caseSensitive:t=!1,className:i="",end:l=!1,style:o,to:s,viewTransition:c,children:h,...p},f){let d=ko(s,{relative:p.relative}),w=ya(),b=Y.useContext(wo),{navigator:D,basename:_}=Y.useContext(pr),T=b!=null&&Sv(d)&&c===!0,E=D.encodeLocation?D.encodeLocation(d).pathname:d.pathname,z=w.pathname,O=b&&b.navigation&&b.navigation.location?b.navigation.location.pathname:null;t||(z=z.toLowerCase(),O=O?O.toLowerCase():null,E=E.toLowerCase()),O&&_&&(O=cr(O,_)||O);const ne=E!=="/"&&E.endsWith("/")?E.length-1:E.length;let K=z===E||!l&&z.startsWith(E)&&z.charAt(ne)==="/",H=O!=null&&(O===E||!l&&O.startsWith(E)&&O.charAt(E.length)==="/"),I={isActive:K,isPending:H,isTransitioning:T},re=K?n:void 0,ee;typeof i=="function"?ee=i(I):ee=[i,K?"active":null,H?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let U=typeof o=="function"?o(I):o;return Y.createElement(ur,{...p,"aria-current":re,className:ee,ref:f,style:U,to:s,viewTransition:c},typeof h=="function"?h(I):h)});fv.displayName="NavLink";var gv=Y.forwardRef(({discover:e="render",fetcherKey:n,navigate:t,reloadDocument:i,replace:l,state:o,method:s=Qs,action:c,onSubmit:h,relative:p,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:w,...b},D)=>{let{unstable_useTransitions:_}=Y.useContext(pr),T=xv(),E=kv(c,{relative:p}),z=s.toLowerCase()==="get"?"get":"post",O=typeof c=="string"&&Ug.test(c),ne=K=>{if(h&&h(K),K.defaultPrevented)return;K.preventDefault();let H=K.nativeEvent.submitter,I=(H==null?void 0:H.getAttribute("formmethod"))||s,re=()=>T(H||K.currentTarget,{fetcherKey:n,method:I,navigate:t,replace:l,state:o,relative:p,preventScrollReset:f,viewTransition:d,unstable_defaultShouldRevalidate:w});_&&t!==!1?Y.startTransition(()=>re()):re()};return Y.createElement("form",{ref:D,method:z,action:E,onSubmit:i?h:ne,...b,"data-discover":!O&&e==="render"?"true":void 0})});gv.displayName="Form";function vv(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vg(e){let n=Y.useContext(va);return an(n,vv(e)),n}function yv(e,{target:n,replace:t,state:i,preventScrollReset:l,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:h}={}){let p=Og(),f=ya(),d=ko(e,{relative:o});return Y.useCallback(w=>{if(W7(w,n)){w.preventDefault();let b=t!==void 0?t:Jr(f)===Jr(d),D=()=>p(e,{replace:b,state:i,preventScrollReset:l,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});h?Y.startTransition(()=>D()):D()}},[f,p,d,t,i,n,e,l,o,s,c,h])}var bv=0,wv=()=>`__${String(++bv)}__`;function xv(){let{router:e}=Vg("useSubmit"),{basename:n}=Y.useContext(pr),t=z7(),i=e.fetch,l=e.navigate;return Y.useCallback(async(o,s={})=>{let{action:c,method:h,encType:p,formData:f,body:d}=Y7(o,n);if(s.navigate===!1){let w=s.fetcherKey||wv();await i(w,t,s.action||c,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:f,body:d,formMethod:s.method||h,formEncType:s.encType||p,flushSync:s.flushSync})}else await l(s.action||c,{unstable_defaultShouldRevalidate:s.unstable_defaultShouldRevalidate,preventScrollReset:s.preventScrollReset,formData:f,body:d,formMethod:s.method||h,formEncType:s.encType||p,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[i,l,n,t])}function kv(e,{relative:n}={}){let{basename:t}=Y.useContext(pr),i=Y.useContext(Rr);an(i,"useFormAction must be used inside a RouteContext");let[l]=i.matches.slice(-1),o={...ko(e||".",{relative:n})},s=ya();if(e==null){o.search=s.search;let c=new URLSearchParams(o.search),h=c.getAll("index");if(h.some(f=>f==="")){c.delete("index"),h.filter(d=>d).forEach(d=>c.append("index",d));let f=c.toString();o.search=f?`?${f}`:""}}return(!e||e===".")&&l.route.index&&(o.search=o.search?o.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(o.pathname=o.pathname==="/"?t:Lr([t,o.pathname])),Jr(o)}function Sv(e,{relative:n}={}){let t=Y.useContext(J1);an(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Vg("useViewTransitionState"),l=ko(e,{relative:n});if(!t.isTransitioning)return!1;let o=cr(t.currentLocation.pathname,i)||t.currentLocation.pathname,s=cr(t.nextLocation.pathname,i)||t.nextLocation.pathname;return t0(l.pathname,s)!=null||t0(l.pathname,o)!=null}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cv=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(n,t,i)=>i?i.toUpperCase():t.toLowerCase()),Nd=e=>{const n=Cv(e);return n.charAt(0).toUpperCase()+n.slice(1)},Wg=(...e)=>e.filter((n,t,i)=>!!n&&n.trim()!==""&&i.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var _v={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=Y.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:i,className:l="",children:o,iconNode:s,...c},h)=>Y.createElement("svg",{ref:h,..._v,width:n,height:n,stroke:e,strokeWidth:i?Number(t)*24/Number(n):t,className:Wg("lucide",l),...c},[...s.map(([p,f])=>Y.createElement(p,f)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=(e,n)=>{const t=Y.forwardRef(({className:i,...l},o)=>Y.createElement(Mv,{ref:o,iconNode:n,className:Wg(`lucide-${Dv(Nd(e))}`,`lucide-${e}`,i),...l}));return t.displayName=Nd(e),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],d0=Ct("arrow-left",Ev);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Gg=Ct("calendar",Tv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],ro=Ct("download",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Pv=Ct("globe",Av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]],Lv=Ct("monitor-down",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Rv=Ct("monitor",Jv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],jv=Ct("search",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Ov=Ct("shield",Fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],$v=Ct("smartphone",Bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Xg=Ct("tag",Hv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]],Uv=Ct("timer",qv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],Wv=Ct("trending-up",Vv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],Xv=Ct("user",Gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Qv=Ct("x",Yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Zv=Ct("zap",Kv),ey=`---
layout: post
title: "单颗粒示踪成像基础知识"
date:   2023-05-26
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍单颗粒示踪技术的基础知识，包括成像系统和示踪颗粒中的金纳米颗粒的相关性质
<!-- more -->

## 1 基础知识

### 1.1 正置显微镜与倒置显微镜

#### 1.1.1 概述

光学显微镜是由两组透镜组成的光学折射系统，其中焦距较短、靠近观察物、成实像的透镜组称为物镜，焦距较长、靠近眼瞳、成虚像的透镜组则称为目镜。位于物镜前方的观察物体由物镜作放大后成倒立的实像。光学显微镜分为正置显微镜和**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**

 <img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-a48b48682b57c084c4237d3402128727_1440w.webp" alt="img" style="zoom:50%;" />



然后，该实像再被目镜作二级放大，在位于人眼的明视距离处，得到放大效果的倒立虚像。通过显微镜机械调焦系统，可以调整并满足相对于物镜的成像条件以及观察者明视距离的二次成像条件。

#### 1.1.2 两者的区别

1. 正置显微镜物镜转换盘朝向是向下的，载物台在物镜下方；**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**的物镜是向上的，载物台在物镜上方。

2. 正置显微镜物镜适合观察切片等；**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**适合观察到培养皿里面的活体细胞

3. 正置显微镜物镜工作距离比较短；**[倒置显微镜](http://www.mshot.com/ProSort/dzxwj.html)**工作距离长

4. 正置显微镜可以选择100X物镜，搭配10X目镜实现1000X高放大倍率；倒置显微镜的物镜最大放大倍率只有60X，这是因为在100X时物镜几乎是贴着样品的，这个工作距离已经小于容器底部厚度，也就是说在对焦成功前物镜就已经撞上容器底部了，根本不可能对焦。

### 1.2 光片
光片显微镜与传统显微镜的不同在于激发光的照明方式。它的照明光是一张与成像面平行的薄薄的“光片”，只有焦平面的样品被照亮，而其上下的样品不受影响

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-d1e59721f0fbdfd354dd9c0943dd3a56_1440w.jpeg)

#### 1.2.1 光片的优势

1. ***提高了图像和背景的反差(Signal-to-Background Ratio) 和轴向分辨率**：光片照明技术保证了焦平面上下的样品不会被激发，具备和共聚焦显微镜类似的**光学切片功能**；*
2. ***减少了光漂白和光毒性**：与传统的荧光照明技术相比，光毒性可以被降低**20-100**倍，这样，我们就能在更接近生理状态的条件下，对活体生物样品进行长时间的三维成像；*
3. *与激光共聚焦和双光子显微镜使用低QE的PMT的**点扫描成像**相比，光片显微镜使用高QE的CCD或sCMOS相机进行**面成像**，大大提高了成像速度和图像的信噪比。共聚焦需要**几分钟甚至几小时**才能拍完的样品，用光片显微镜只需要**几秒到几分钟**。因此，光片显微镜也特别适合用于大样品成像。*
#### 1.2.2 光片的实现

产生光片最简单的方法是在光路中引入一个**圆柱形透镜**。通过该透镜的光，宽度维持不变，但在高度上被压缩成平面 ，然后通过照明物镜，在焦面上形成“光片”。成像物镜垂直于照明物镜放置，并聚焦在光片上获取荧光信号。

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-b1988dea4dbeff3bf2c7e6bff02e2e35_1440w.jpeg)

使用这种方法生成的光片，其宽度和厚度由照明物镜的NA值决定。如图5所示，照明光束的实际形状是一个两头宽，中间细的“沙漏”形。ω0为光束腰厚度，也就是光片厚度，b为均匀照明宽度，也就是有效视野。

NA值：光学系统的数值孔径（NA）是一个无量纲的数，用以衡量该系统能够收集的光的角度范围。

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/v2-e530c36ae7abe917edce78e3adcc157c_1440w.jpeg)

因此，使用NA较小的照明物镜，能够实现较宽范围的均匀照明，即视野更大；但是相应的，光片的厚度也越大，导致轴向分辨率降低。而高NA物镜产生的光片视野会比较小，但轴向分辨率较好。

>***要注意的是**，如果成像物镜的NA值很高，使得其景深小于光片的厚度，那么系统的轴向分辨率主要是由成像物镜的景深决定。但这时会产生普通荧光照明时具有的问题，即焦面上下的部分样品会被照亮，不必要的光毒性和杂散光会对成像效果产生负面影响。*
>*如果成像物镜的NA值较低，光片厚度比它的景深要小，那么系统的轴向分辨率就由光片的厚薄来决定。*

详细参考：

> 前沿显微成像技术专题之：光片荧光显微镜 (1) - Photometrics的文章 - 知乎 https://zhuanlan.zhihu.com/p/60772855

## 2 金纳米颗粒散射
为什么可以看到尺度极小的金纳米颗粒：

仅仅依靠光的反射数量级不够

贵金属纳米离子颗粒局域表面的等离激元共振（LSPR）

在电磁场作用下，贵金属表面自由电子的极化方向交替改变使得自由电子产生往复运动

电磁场变化频率与纳米颗粒表面自由电子固有运动频率相同时产生局域表面激元共振

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526095049905.png" alt="image-20230526095049905" style="zoom:33%;" />

金纳米棒有两个等离子共振峰， 分别代表不同的轴棒: 长轴和短轴。在两个不同轴向运动的自由电子表现出不同的性质。（可以简单理解为长轴短轴的尺寸不同，共振的路程不同）

## 3关于常见的显微成像技术

### 3.1 微分干涉相差成像技术（DIC）

微分干涉相差显微成像系统的光路结构如下图所示⬇️

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526095749600.png" alt="image-20230526095749600" style="zoom:50%;" />

condenser：聚光器

Wollaston Prism：沃拉斯顿棱镜 可操纵[偏振光](https://en.wikipedia.org/wiki/Polarization_(waves)) 。它将光分成两个独立的线性[偏振](https://en.wikipedia.org/wiki/Polarizer)出射光束

激光源发出激光，经过起偏器得到特定偏振方向的偏振光

这些棱镜将入射光 在到达样品前进行光束分光，在经过样品后进行光束的重新整合。经历过这个过 程后，从镜头Normaski棱镜收集的椭圆偏振和圆形偏振光经过检偏器，相互干涉 形成DIC图片。

### 3.2 偏光成像技术

偏光成像系统有两块偏振片，一块是起偏器，一块是检偏器。

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526101810120.png" alt="image-20230526101810120" style="zoom:50%;" />

传统偏振成像系统如下⬇️：

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526103351183.png" alt="image-20230526103351183" style="zoom:50%;" />

当被测 物体为各向同性物质如球型纳米粒子时，无论怎样旋转样品角度，视野都为黑色， 这是由于各向同性物体的去偏振化能力较弱，无法改变起偏器形成的线性偏振光的振动方向，依然与检偏器的振动方向相互垂直的缘故。若被测物体为各向异 性的物体(如纳米金纳米棒)，其存在两个离子共振带，金纳米棒长轴与入射 偏振光的夹角决定了两个等离子共振的方向与强度的大小，一部分散射光可以通 过检偏器被收集到。

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/1576979426758310-5068659-5068661.jpg" alt="不同波长的可见光所对应的不同颜色" style="zoom:50%;" />

长轴吸收峰在650nm的纳米金棒响应效果好，因为彩色 CCD 红色通道的响应曲线的最大值在650nm左右，一般金纳米棒长轴的衍射光成红色

对于单个纳米金纳米棒而言，其等离子共振模式通常被认为是 其长轴偏振主要是沿着长轴方向震动，而其他轴的方向是沿着横轴方面震动。当 单个纳米金纳米棒在这次研究中可以近似的被认为是简单偶极子

**样品为什么会改变偏振方向？**

单个纳米金纳米棒在这次研究中可以近似的被认为是简单偶极子,它的强度可以 表述为:
$$
I\\propto K*Pa*Ps
$$
\\propto 是正比于的latex代码

光强是电磁场强度的二次方

Pa 描述的是入射电场方向与偶极子的振动方向之间的相互关系，代表激发效率。Ps 描述的是能够被收集到的金纳米棒的散射信号，表示散射光的检测效率。

由下图的分解关系可以知道：

![image-20230526111144032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526111144032.png)
$$
Pa=(sin \\theta*cos\\varphi)^2=sin^2\\theta*cos^2\\varphi \\\\
Ps=(sin \\theta*sin\\varphi)^2=sin^2\\theta*sin^2\\varphi
$$
那么可以得到：
$$
I\\propto sin^2\\theta*cos^2\\varphi*sin^2\\theta*sin^2\\varphi=sin^4(\\theta)sin^2(2\\varphi)
$$

### 3.3 暗场显微成像

光通过聚光镜（顶部透镜通常是凹球形的，这使得从各个方向照射过来的光 形成类似空心锥的照明模式）汇聚经过样品后散开，使得背景光并不能进入目镜，只有当光被样品中的物质散射后改变光路方向得到的光才会进入目镜，进而保证进入目镜（检测器）的光都是经过目标样品散射的。

示意图如下⬇️

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20230526102220795.png" alt="image-20230526102220795" style="zoom:50%;" />

`,ny=`---
layout: post
title: "python打包成exe指南"
date:   2023-12-27
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍python程序打包成exe的过程问题，并列举了几个较为常见的例子
<!-- more -->

# python打包成exe指南

## 0 前言

之所以用这个指南是因为发现直接打包混乱且庞大，因此写了这个指南方便后续的使用

## 1 环境

最开始尝试在python的conda环境下打包，然后发现打包出的exe特别大，包含了很多不需要的包，因此研究了一番pip env，最终研究明白了，此处建议对每一个项目新建一个虚拟环境（使用pip env），当然平时写的时候可以用conda环境，最后打包的时候只需要把使用了的包安装在pip env里就行了。这样可以最大程度的减小exe的大小

如何创建pip env虚拟环境参见[pip env 使用指南](./pip_env_how_to_use.md)

## 2 安装打包所需的包

先激活你的环境，然后输入下列：

~~~
pip3 install pyinstaller
~~~

安装好后，cd在源代码所在的文件夹，如果有logo的话也可以放在这个文件夹里

## 3 打包

输入（三选一，根据情况来）：

~~~
Pyinstaller -F py_word.py # 打包exe

Pyinstaller -F -w py_word.py #不带控制台的打包

Pyinstaller -F -w -i chengzi.ico py_word.py #打包指定exe图标打包
~~~

这里的-w是不保留命令行窗口，改成-c即可保留命令行窗口。

这里的chengzi.ico是exe的图标所需的文件，可以改成你的logo的文件名

这里的py_word.py是他的源代码，换成你的源代码名字即可

要命名生成的exe，请加-n 你的名字，例如我希望名字是exo，则可以输入

~~~python
Pyinstaller -F -c -i chengzi.ico py_word.py -n exo
~~~

## 4 形成压缩包

把dist文件夹里的exe拿出来，和build，.spec文件，以及可能的示例数据example、readme都打包到一个zip，就形成了release

## 5 参考

[别再问我Python打包成exe了（最适合小白的终极解答）！](https://zhuanlan.zhihu.com/p/370914926)
`,ty=`---
layout: post
title: "python中的面向对象编程"
date:   2023-12-28
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---


该笔记主要学习python中的面向对象编程，主要包括类的创建、对象的创建、类的改进、定义对象的方法、面向对象的继承等内容。
学习来源主要是[3小时快速入门Python](https://www.bilibili.com/video/BV1944y1x7SW?p=29&vd_source=86b2402290f7b7dee927bba58a141a81)，并且在学习过程中加入了一些自己的理解和总结。

<!-- more -->

# Object-Oriented Programming

## 1 面向对象的原理与概念

面向过程是把要实现的事情按照实现顺序依次定义步骤，然后按步骤编程——随着程序需要解决的复杂度增加代码复杂性降低

面向对象编程：关注属性和功能

定义类——类中有实例

**关注属性：**

例如可以假设一个类叫做atm

![1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20231228153119085.png)

那么atme类里可以有很多的对象，比如atm1是招商银行南园支行的atm，而atm2是中国银行北园支行。这样使得数据的流动更加清晰

**关注功能：**

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241115181847.png)

定义好洗衣机的功能之后，可以直接调用洗衣机的功能

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182037.png)

除此之外面向对象还有封装继承多态等好处

封装比较容易理解，举个简单的例子就是，定义好洗衣机类之后，只需要调用其中的功能即可，不需要再研究洗衣机类具体的功能是怎么实现的

继承则是由于可能不同的类有大量重复属性，比如小学生类和大学生类都是学生，都得考试和做作业，那么我们不妨定义一个大类“学生”，学生大类下有小学生，有大学生

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182100.png)

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182125.png)多态则是指同样的接口可能实现方法不同，比如定义学生类，都得写作业，但是对大学生写作业的方法和小学生写作业方法可能不同，也就是说，写作业这个功能有多个实现模式——小学生写作业模式、大学生写作业模式，我们在定义好后，只要确定我的学生是小学生还是大学生然后直接调用写作业就行了——此时由于学生所属的类不同就会自己调用不同的做作业方法

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182151.png)

## 2 类的创建

### 2.1 类的命名

类不能含有下划线，格式为：
~~~
class 类名:
# 类名建议采用驼峰命名法，不带任何的下划线等特殊字符
~~~

例如：

~~~
class CuteCat:
	#接下来是定义类的代码
~~~

### 2.2 类的创建

对于类有一个特殊方法是构造函数，用于定义实例对象的属性，必须被命名为\\__init__ ,形如：

~~~python
class CuteCat
	def __init__(self)
    	#接下来是构造函数的代码
~~~

对于\\__init__,第一个参数必须是self——约定俗称的，表示第一个参数被占用，表示对象自身。self的作用就是把属性的值绑定在实例对象上

例如

~~~python
class CuteCat
	def __init__(self)
    	self.name="大黄"
~~~

这表示猫猫的名字属性是大黄（也就是这只猫叫做大黄），那么通过 \`self.name="大黄"\`就把猫叫大黄的名字绑在这只猫上了。

如果写成\`name="大黄"\`则python认为只是给变量name赋值罢了

## 3 对象的创建

在创建了猫这个类之后，我们可以创建一只猫猫对象

首先我们复习创建类

~~~python
class CuteCat:
    def __init__(self):
        self.name="大黄"
~~~

创建好类之后，我们开始创建对象

~~~python
cat1=CuteCat()
~~~

此时就创建了一个叫做大黄的猫猫对象

格式上就是：

~~~python
对象=类名（参数）
~~~

这样init方法就会被调用，同时返回一个对象。self参数不需要手动传入，可以自动运行传入

## 4 类的改进

上述创建的类里所有猫都叫大黄，这明显就不合适，所以我们可以把这个类进行一些修改和改进

~~~python
class CuteCat：
	def __init__(self,cat_name):
        self.name=cat_name
~~~

这样，我们创建对象时，就需要在括号里传入参数

例如创建一个叫小黑的猫猫对象

~~~python
cat1=CuteCat("小黑")
~~~

在此基础上添加更多的参数也就很简单了，例如：

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182228.png)

## 5 定义对象的方法——也就是定义功能

刚刚提到的都是对对象类的属性进行定义，所以我们现在来看怎么实现对功能的定义

对于对功能的定义，其实很简单，可以参考函数的定义，只不过需要写在class里，而且第一个参数被self占用

~~~python
class CuteCat：
	def __init__(self,cat_name,cat_age):        
    	self.name=cat_name
        self.age=cat_age
	def speak(self):
        print("喵"*self.age)
~~~

类的功能包含self可以很方便的调用类的属性，比如上述调用的类的年龄属性

那调用功能就很方便了：

~~~python
# 创建对象
cat1=CuteCat('小红'，18)
cat1.speak()
~~~



## 6 面向对象的继承

例如对于下面俩类，我们不难发现有不少重复

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182252.png)

写代码应该尽可能的少重复，因此我们可以创建一个父类来描述共性

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182315.png)

一般来说，子类有调用方法就优先调用自己的方法，如果没有则调用父类

但是这回面临一个问题就是，不同子类可能有不同属性，因此我们需要子类的构造函数来定义子类的属性，但如果用\`def __init__\`的方法的话，那么由于子类有构造函数，就不会调用父类的构造函数了，那写到父类里的共性就调用不了了

如何解决：

在子类下用super

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182348.png)

利用super把父类的属性继承

## 7 习题训练

### 7.1 类的定义

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182412.png)

~~~python
class student:
    def __init__(self,name,id):
    	self.name=name
        self.id=id
        self.grades={"语文",0;"数学",0;"英语",0}
	def set_grade(self,course,grade)
    	if coures in self.grades:
            self.grades[course]=grade
    def print_grade(self)
    	print(self.grades)
        
# 创建对象
xiaochen=student("小陈","12")
xiaochen.set_grade("数学"，95)
~~~

### 7.2 类的继承

![](./2024-11-15-Object_Oriented_Programming.assets/20241115182435.png)

~~~python
class HumanResourcesSystem:
    def __init__(self,name,id):
    	self.name=name
        self.id=id
    def print_info(self):
        print("姓名为",self.name)
        print("id为",self.id)
class FullTimeEmployee(HumanResourcesSystem):
    def __init__(self,name,id,salary):
        super().__init__(name,id)
        self.monthly_salary=salary
	def calculate_monthly_pay(self):
    	#print("月薪为",self.salary)
        return self.salary
class PartTimeEmployee(HumanResourcesSystem):
    def __init__(self,name,id,salary,days):
        super().__init__(name,id)
        self.daily_salary=salary
        self.work_days=days
	def calculate_monthly_pay(self):    
        #print("月薪",self.work_days*self.daily_salary)
        return self.work_days*self.daily_salary
~~~



## 其他：

1. [设计模式目录——23种设计模式](https://refactoringguru.cn/design-patterns/catalog)
2. [3小时快速入门Python](https://www.bilibili.com/video/BV1944y1x7SW?p=29&vd_source=86b2402290f7b7dee927bba58a141a81)
3. [matlab面向对象程序设计]("D:\\Lab\\Books\\matlab面向对象.pdf")

`,ry=`---
layout: post
title: "pip env 使用指南"
date:   2024-01-08
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true

---

该笔记主要介绍python程序打包成exe时的虚拟环境问题，之所以不用conda是因为conda环境生成exe体积很大且会打包很多不必要的包，因此选择pip env实现
<!-- more -->
# pip env 使用指南

pip env主要是在你的项目下新建一个虚拟环境，但是会面临以下几个问题

其一是新建环境位于c盘容易寄，其二是命名随机

因此，为了方便使用，首先先要对环境变量进行添加

## 1 环境变量的添加

### 1.1修改系统环境变量WORKON_HOME

修改系统环境变量 WORKON_HOME，如果没有就新建，其值设置为 **.**

解释：. 代表是对于工作目录来说的当前目录，设置完之后的作用是虚拟环境会安装在项目代码的工作目录下。

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/fbac368be13c4cd49d8a288b87334c05.png)

### 1.2 新建并修改系统环境变量 PIPENV_CUSTOM_VENV_NAME

新建并修改系统环境变量 PIPENV_CUSTOM_VENV_NAME，其值设置后的作用是虚拟环境所在文件夹的命名不是随机生成的了，而是根据这个字符变量。比如我设置成下图中的venv，那么最后我的虚拟环境文件夹名就是venv，当然这个名字你也可以自己改成其他的

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/5014664d3bfc47b795a1869c4dc87166.png)

## 2 创建虚拟环境

### 2.0 安装pipenv

安装python是从官网下载某一版本的python，然后添加到环境变量

如果你的电脑安装python之后没有安装过pipenv，那么需要经过这步

~~~
pip install pipenv
~~~

### 2.1 cd到虚拟环境的位置

首先第一步cd 到你的工作目录，请用cmd实现，因为终端已经添加了conda路径，两个在一起会打架

### 2.2 创建虚拟环境

~~~
pipenv install
~~~

### 2.3 激活新创建的虚拟环境

~~~
pipenv shell
~~~

### 2.4 安装依赖

需要注意的是，这里的requirements和conda生成的是不一样的，不能混淆了

~~~
pipenv install -r requirements.txt
~~~

注：如何生成requirements文件

~~~
pip freeze > requirements.txt
~~~



### 2.5 删除环境

cd 到你的虚拟环境位置，例如venv文件夹是虚拟环境，那就cd到他的上一级

~~~
pipenv --rm
~~~

## 3 参考

[python项目结合pipenv创建requirements.txt实现快速安装依赖包](https://ww4k.com/python/requirements_pipenv.html)

[Python Docs](https://hellogitlab.com/backend/python/)
`,iy=`---
layout: post
title: "概率图模型1 绪论"
date:   2024-09-09
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---


该笔记主要介绍概率图模型最基本的绪论，包括想要解决什么问题，有哪些常见的概率图模型，以及如何建模、推理和学习。
<!-- more -->


# 1 Introduction 
课程主要是用图模型的方式解决复杂的概率问题（不含coding相关）  

**Life is full of uncertainy**  

概率是用于描述不确定性的数学模型  

决策的难度源于现实世界的决策空间太大（维数灾难：简单的系统有太多的决策，指数导致参数过多）、系统的元素太多（复杂性问题）  

eg. 医生的诊断就是一个复杂问题的决策  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240909101452938.png)



当上述的症状数量增加，病因增加之后，决策空间将更加庞大，依赖于医生的经验误判概率将更大，这也是为什么希望通过算法模型来辅助  


中医的五行学说的本质就是隐空间有5个隐变量（无法解释为什么是五维的隐空间）  

# 2 Basics in with Probability
频数概率：  

$$
P(x) \\approx \\frac{n_x}{n_t}
$$
$$
P(x)=lim\\frac{n_x}{n_t}
$$  

贝叶斯概率：   

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240909102407997.png)


X是原因 Y是结果（观测），现在需要的是从结果推出原因  

故而从：  

$$
P(XY)=P(X|Y)P(Y)=P(Y|X)P(X)
$$  

变形后：  

$$
P(X|Y)=\\frac{P(Y|X)P(X)}{P(Y)}
$$  

而：  

$$
P(Y)=\\Sigma_XP(Y|X)P(X) 
$$  

独立性会降低推理的自由度  

如X和Y独立那么：  

$$
P(XY)=P(X)P(Y)
$$  

最常用的公式：  

链式法则：  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240909103303796.png)

全概率公式：   

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240909103444904.png)


# 3 Basics in Graph
图论的经典起源是修桥的七桥问题  

一般性的有向图用G表示，V表示结点，E表示边：  

$$G(V,E)$$  

无向图则用H表示（同一条路径双向可达）  

临界矩阵：  

$$A={a_{ij}}_{n*n}$$    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240909112152821.png)  



polytree是单个节点可以有多个父节点但不能有三角形或者四边形  

chordal graph是图例不能有多于三角形的多边形  


# 4 Probabilistic Graphical Models（PGMs)
PGMs在表述层面的优势：  

相较于直接看公式而言看图可以更加明晰的了解事件之间的关系  

提供通解框架uniform framework for reasoning  


无向图的例如上面的四个白色节点之间的连接是双向可同行  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240909113531985.png)  


无向图在cv nlp和语音识别上广泛应用，例如马尔可夫随机场被广泛应用于图像分割之中  



# Three Steps for PGMs
1. Representation：how to model your problems using probability and graph——即建模
2. Inference：how to calculate the posterior with some given/observed variables (model is known)
3. Learning：how to estimate the parameters of the model when you only have observed data`,ay=`---
layout: post
title: "概率图模型2 贝叶斯网络"
date:   2024-09-21
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---


该笔记主要介绍概率图模型中的贝叶斯网络，包括贝叶斯网络/有向图的定义以及其因子分解定理
<!-- more -->

## 1 独立会减少描述概率空间的参数
独立随机变量会减小概率空间的参数  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100008062.png)

**在建模复杂问题时，独立性的假设是简化问题的主要帮手**  
符号上：given Z时X和Y对立可以记为：
$$
𝐼𝑛𝑑(𝑋; 𝑌 | 𝑍) or (𝑋 ⊥ 𝑌 | 𝑍)
$$
例如：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100436717.png)

这5个变量并非完全相关，也非完全独立，现在来看需要多少个参数来描述这个模型：
对于I→S需要的参数是2^2 -1=3  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100628063.png)  

对于DIG结构：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921100834148.png)

可以发现独立性减少了参数

## 2 朴素贝叶斯模型
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921101101950.png)

未知朴素贝叶斯的情况下需要的参数量是$（2^n -1)*(k-1)$，而在已知朴素贝叶斯之后则是$(k-1)+n*(k-1)$
在通过图之后可以很快的写出：  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921101440545.png)

这暗含了一个很强的假设：**给定父节点后子节点是独立的**，但这在理论上是不完备的，所以第一个问题就是需要解决这个独立性的问题
## 3 贝叶斯网络的独立性问题
### 3.1 独立性定义和证明
对于有向无环图（Directed acyclic graph (DAG) ）G,每一个节点代表一个随机变量，G中蕴含着独立性的假设：
- $𝑋_𝑖$ is independent of its non-descendants given its parents(**直观定义→{P,G}**，但尚未证明P={P，G})
- 公式化：$(𝑋_𝑖 ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋_𝑖) | 𝑃𝑎(𝑋_𝑖))$  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921102105739.png)  

证明P={P，G}先引入一个概念independency Mappings :    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921102719937.png)  

Imap是独立性的集合，当图里的独立性在概率空间里都成立，那么此时图里的操作在概率空间中成立，此时称图G的独立性集合是概率空间的Imap    

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921103042677.png)

也就是说用右边的模型可以建模右边的表格里的模型，但是并不能描述左边的表格里的模型，因为其I(G)并不属于左边的I(P)——即不是左边概率模型的IMAP
### 3.2 因子分解定理
前提公理：If we define the independences in G as 𝑋𝑖 ⊥ 𝑁𝑜𝑛𝐷𝑒𝑠𝑐(𝑋𝑖)| 𝑃𝑎(𝑋𝑖)  
命题：若𝐺 is an I-Map of 𝑃 被证明，那么可以直接写出：  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921103621724.png)  

这是充分条件（看图说话），反推是必要条件（必要条件在结构学习中使用，看数据画图）——皆需要证明  
先证明充分条件：  
- 推理和处理时求解思路都是从父节点沿着图向子节点来推，基于此我们将父节点子节点按父子关系排序：wlog. 𝑋1 , … , 𝑋𝑛 is an ordering consistent with G
- 链式法则：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921104842414.png)  

这是因为当i后面的都是子节点，与父节点无关，那么在链式法则的时候就只需要考虑其父节点  
$$P(X_i | X_1 ,..., X_{i−1} ) = P(X_i | Pa(X_i ))$$
再证明必要性——图里的独立性在概率里都成立即可  
那么还是先有trick：  
- wlog. 𝑋1 , … , 𝑋𝑛 is an ordering consistent with 𝐺
- 那么则有：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105305063.png)  


## 4 贝叶斯网络的定义  

![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105443315.png)  

P可以根据图里的关系进行因子分解  
使用举例：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921105628355.png)  

C是父节点，给定C时X和Y是独立的子节点  
$$P(CXY)→P(X|Y)＝sum_C  \\ P(CX|Y)→ 
P(CX|Y)=P(XY|C)P(C)/sum_C \\ P(XY|C)P(C)$$  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921110156752.png)  


非独立性结构：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921111251210.png)

Case4（V-structure）是有向图复杂性的来源，只有当结果Z知道的时候原因X和Y才是有关系的，当结果不知道时原因X和Y是独立的  
因此对于贝叶斯网络来说，最好的结构就是树状结构，一个父节点若干子节点  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231506.png)  

最不好的结构则是：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231535.png)  

因此前向算法是从原因推结果比较方便，而后向算法是从后面推前面就没那么容易    
只要V结构没变，独立性就没有变化  
最小IMAP就是给出一个图，图里的每条边都不能删了就是minimal Imap  

例题： for P(ABCD)其中A和D独立，在AD条件下B与C独立  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231607.png)  

这是按照ABCD的顺序👆  
那如果按照ADBC的顺序呢：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117231640.png)  

说明顺序不一样会影响结构，这说明根据概率来学图模型是不是那么容易的  
总体来说V-structure越少越好  

## 5 further thinking——因果推断  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240921115340662.png)  

association关联：不涉及V结构时箭头并不代表因果而只是代表独立性  
Intervention干预：涉及干预实验辅助给出一些因果  
Counterfactuals反事实推断：世界的很多事情并不能做重复事件——同一个人不可能既吃药又不吃药，虽然不能这么实验但是人可以基于此推断  

如果是causal edge，那么对子节点进行干预的时候其与父节点的因果关联边就得去除了  
`,ly=`---
layout: post
title: "概率图模型3 贝叶斯网络Local Probabilistic Model"
date:   2024-09-23
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍概率图模型贝叶斯网络的local CPD部分的概率表示
<!-- more -->

## 3.1 review

![image-20241118005807602](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118005807602.png)

这里除了给定AD的情况下BC独立；还有一个其他独立性条件即A本身独立于D  
![image-20240923101014780](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923101014780.png)  

![image-20240923101022066](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923101022066.png)  

对于（2）图的满足条件小于题干的概率条件就是合理的，这里后两个图满足给定AD后B与C独立。左二的图多了一个A和D本身就独立的条件（相较于概率空间）  
ps.除了V结构和因果关系以外，其他的时候贝叶斯网络中的箭头只代表有关联  

## 3.2 局部概率模型——条件概率该如何表示（CPD)

父节点越多的话，需要给出越多的子节点信息以学习父节点  
Rule· CPD：  
![image-20240923102721515](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923102721515.png)  
$\\rho1:<a^0,j^0;0.8>$，$\\rho2:<a^0,j^1;0.2>$代表a=0时有j=0和j=1两个可能分别对应概率0.8和0.2   
相同的图模型可能具体情况不同，节点的local CPD会不一样  

## 3.3 some model

### 3.3.1 Noisy-Or Model

举个例子（Noisy-Or Model）：  
• The failure rate of CPU is f1  

• The failure rate of MEM is f2  

• The failure rate of DISK is f3  

• The failure rate of POWER is f4  

• The failure rate of OS is f5  

• The failure rate of other events is f0  

• Question: the failure rate of your computer?  
所有都正常工作的情况是：  
（1-f0)* (1-f1)* …… （1-f5)  
![image-20240923104318126](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923104318126.png)  
在这个模型下，不同的父节点会导致同一个子节点结果  

### 3.3.2 The Generalized Linear Models

$$
sigmoid(s)=\\frac{e^s}{1+e^s}
$$
Logistic CPD:  
$$
P(Y=y^1 | X_1,……,X_k)=sigmoid(w_0+\\sum w_i X_i)
$$
![image-20240923105124313](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923105124313.png)  

y受影响的是后是由父节点的线性组合+套壳（高斯分布、泊松分布）来实现的  
![image-20240923105640267](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923105640267.png)  
在神经网络里这一套也很不自觉的使用，每一个神经元的input就是上一层父节点的权重和（$w_0+\\sum w_iX_i$)——父节点数+1才是参数量（因为要考虑$w_0$)  
![image-20240923110551476](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923110551476.png)  

第一层没有父节点，所以是3x1个参数  
第二层每个节点有三个父节点权重+w_0权重，所以每个节点都是四个参数，四个节点有4x4个参数  
第三层每个节点有四个父节点权重+一个w_0权重，所以每个节点都是5个参数，共有2x5个参数  
所以共计:3x1+4x4+2x5  

### 3.3.3 Pooling Function

max pooling 具有平移稳定性；median pooling是为了抗噪声  
![image-20240923111056738](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923111056738.png)  

## 3.4 贝叶斯网络图形化示例

eg1.癌症是一个包含许多不同类型疾病的总称。例如，乳腺癌有四种主要亚型：正常型、基底型、Luminal A型和Luminal B型，它们具有不同的临床结果。每种亚型都有不同的基因表达模式。我们需要根据观察到的基因表达来推断亚型。  

**首先确定变量：**  
Variables: subtypes (s), gene expressions (e)  
**第二步需要确定随机变量之间的关系：**  
subtypes define the patterns of expressions  
\`\`\`mermaid
graph TD
s((s))-->e((e))
style e fill:#d3d3d3;
\`\`\`

![image-20240923112217301](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923112217301.png)  

方框代表独立同分布的重复结构，重复N次只需要在右下角写一个N  
现在已经建立了贝叶斯网络。在local CPD之前建议先检查一下贝叶斯网络  
**现在需要确定local CPD**  
![image-20240923112426439](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923112426439.png)   
假定s的local CPD是满足多项式的分布，e在s条件下满足高斯分布，需要注意的是$\\pi$等参数并不是节点，不需要画圈  
此时就可以联合local CPD和bayesian network来写出complete 概率模型  
$$
p\\left(s=k,e\\right)=P\\left(s=k\\right)p\\left(e\\mid s=k\\right)\\\\=\\pi_k\\times\\frac{\\exp\\left(-\\frac12\\left(e-\\mu_k\\right)^T\\Sigma_k^{-1}\\left(e-\\mu_k\\right)\\right)}{\\sqrt{\\left(2\\pi\\right)^k\\left|\\Sigma_k\\right|}}
$$

对于每个单元：  
$$
p(S, E)=\\prod_{n=1}^N p(s[n]=k, \\boldsymbol{e}[n])
$$

eg2.癌症通常是由独立的驱动过程（因素）引起的，例如持续的增殖、抵抗细胞死亡、免疫逃逸和促进血管生长等。  
• 这些驱动过程对基因表达模式有联合影响。  
• 我们希望基于大规模基因表达数据集推断出这些驱动过程。  

首先确定变量：  
driving factors ($z_i$ ), gene expressions ($e_j$ )  
其次确定关系  
z determines the distribution of e  
建模：  
![image-20240923114530349](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923114530349.png)  

eg3. 更复杂化的就是参数也是随机变量由其他参数  ![image-20240923114824016](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240923114824016.png)决定  

## 3.4 conclusion

Three Steps for Representation：  
• Define nodes / variables  
• Consider edges / dependences  
• Choose local CPDs  



`,oy=`---
layout: post
title: "概率图模型4 隐马模型"
date:   2024-09-30
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍概率图模型有向图中的隐马尔可夫模型HMM
<!-- more -->

## 1 review

Factorization Theorem  
1. variable 
2. design the network
3. design local CPD

markov/Memoryless Property  
![image-20240930095925126](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930095925126.png)
对于角标赋予序列的含义之后，马尔可夫链就有时间上的分布意义了——时间上是稳态的  
eg. random walk  
eg2. 人机交互，Y是视频资料；Z是声音信息  
![image-20240930100925249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930100925249.png)建模多一层以便描述噪声的问题——概率图形中经常引入一些在现实中很难检测的变量（比如噪声等)  
这也是本节主要想了解和解释的部分，上述结构假设是时不变系统  
一般就有两类参数，一个是内部时间窗的参数，一个是时间窗口之间的参数  

## 2 Hidden Markov Models

![image-20240930102527632](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930102527632.png)
其实这里的s就是隐变量，因为我们没有S的数据  
满足各态便利性时就可以最后收敛成时间平稳的稳态  
保证个态遍历可以给有些0的地方加一些特别小的数  
其他应用：基因组上的序列（不一定要求是时间轴上的序列)   

### 2.1 Calculations in HMMs

- Problem 1:$ 𝑃(𝑿|𝜽)$ , given the model and the  

observation sequence, infer the probability of  

getting that observation sequence from the model  

- Problem 2: $argmax_𝑌 𝑷(𝑿, 𝒀|𝜽)$, given the model and the observation sequence, infer the hidden labels of the sequence  
- Problem 3: $argmax_𝜃 𝑷(𝑿|𝜽)$, if parameters are unknown, learn them from the observation sequence  

### 2.2 𝑃 (𝑿|𝜽）的计算

如果没有引入隐变量描述马尔可夫模型的话，所有观测变量将不独立的全连接，引入隐变量后就会增加独立性进而简化模型参数数量  
![image-20240930105944273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930105944273.png)
因子分解将父节点参数塞回  

前向/后向算法：  
$\\pi_i$是启动参数,e则是观测的参数   
$$
\\alpha_1(i)=P(Y_1=i)P(x_1|Y_1=i)
$$
![image-20240930110643533](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930110643533.png)
实际上$[\\sum_{j=1}^N \\alpha_t(j)t_{j,i}]$就是$P(Y_{t=i}|Y_{t-1})$  
倒退过程则如下：  
![image-20240930111205625](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930111205625.png)
但实际上正向和倒推最后得到的结果是一样的  

### 2.3  argmax_Y 𝑷(𝑿, 𝒀|𝜽)的计算——算哪个Y使得这个最大概率值可以取到

需要记录每一步的节点概率是怎么来的  
![image-20240930111809755](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930111809755.png)

### 2.4 argmax_𝜽 𝑷(𝑿|𝜽)的求解  

需要求解：  
$$
argmax_\\theta=\\sum_YP(XY|\\theta)
$$
由于是隐变量，所以Y和θ往往是不知道的，一个解决的方法是通过迭代的方法  
$$
\\theta^0-->Y^0-->\\theta^1-->Y^1-->\\cdots
$$
但这一方法不保证每次都收敛，即便收敛也不能保证全局最优  
$$
\\xi_t(i,j)=P(y_t=i,y_{t+1}=j|X,\\theta)
$$
![image-20240930113904060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930113904060.png)

![image-20240930113924494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930113924494.png)
再用上面的参数求解出t和e  
![image-20240930114010930](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930114010930.png)

只需要不断重复迭代即可：  
![image-20240930114030686](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930114030686.png)

口诀：父节点，子节点，子节点的父节点  
![image-20240930115909839](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240930115909839.png)

实际上RNN就是参照马尔可夫链来构建的，LSTM相较于RNN而言由于更有长程相关而变得更有用（RNN的马尔可夫性太强）
`,sy=`---
layout: post
title: "概率图模型5 无向图：马尔可夫随机场"
date:   2024-10-14
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍概率图模型的无向图，其更加常见的名字是马尔可夫随机场
<!-- more -->

## 1 Intro

![image-20241014100722122](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014100722122.png)
左图的独立性，在右边的独立性是不能完全阐释的——或者说在从无向变成有向的时候，节点之间的独立性发生了转化  

在左图中是有ind（A,D|B,C)和ind（B,C|A,D)  

## 2 Markov Networks

对于上述的情景，节点之间的相互作用是没有方向的，所以应该用无向图（也称为马尔可夫网络）来建模  
在无向图中，节点代表随机变量，如果两个节点没有路径才说明这两个节点是独立的  
![image-20241014101500415](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014101500415.png)

在上述这个图中，给定B相当与在BD之间的路径斩断，D就和A与C没有任何路径联通了，也就是此时D与A和C独立  
Markov性就是给定领域之后就和其他节点没有关系了，由于上述的网络具备这个性质，所以称之为**Markov Networks**（在物理里则称之为**Markov random field**）  
无向图的特殊结构就是多边形（大于三个节点），贝叶斯网络的特殊结构则是V-structure  

对于无向图这类相互作用的建模来说，需要给出的状态之间的相互作用，不要求像贝叶斯网络一样和为1给出概率的形式  

Gibbs 分布：用于描述上述的local factors（最开始源自于上述描述分子状态的问题）——需要定义在clique上  
![image-20241014102614627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014102614627.png)

这里的$\\pi[a,b]$就是AB这组factor之间的相互影响情况。  
在求出F之后需要进行归一化  
P(a,b,c,d)就是用于描述这个abcd系统在给定场里的物理状态  

图的基本结构就是cliques，要全联通的  

> 在马尔可夫网络（Markov Network）中，基本单元称为团（cliques）。这是指图中任意两个节点都直接连接的最大完全子图。具体来说：  
> 1. **团的定义**：  
    - 一个团是一个子图，其中每对节点之间都有边连接。  
    - 最大团是图中不能再扩展的完全子图。  
 2. **马尔可夫网络中的角色**：  
    - 团用于定义联合概率分布。  
    - 每个团关联一个势函数，用于表示节点之间的相互作用。  
    - 势函数不直接是概率，但用于计算概率分布。  
>团在马尔可夫网络中用于捕捉局部依赖关系，帮助构建联合概率分布。  

在无向图里，我们需要关注极大完全子图（maximal cliques）——多个大子图  
![image-20241014105924736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014105924736.png)

例如在上述的无向图中，有三个极大子图分别是蓝色绿色和橘色的圈，最大子图是蓝色圈  
在进行因子分解的时候需要用高阶的大子图而不能全用低阶的如边去构成factors  
![image-20241014110201360](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110201360.png)
正推是看图说话，反推是结构学习  

给定一个图H，其中有若干个cliques D1,……Dn，且factors定义在cliques上：  
![image-20241014110416834](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110416834.png)
这里的Z是分布函数（Partition function or so called total energy)  
例如对于下述的网络，只有两种factors，分别时点和边：  
![image-20241014110554444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014110554444.png)
$$
P=\\frac{1}{Z}\\ (\\Pi_i \\ \\pi[X_i] )\\ (\\Pi_i \\ \\pi[X_i,X_j])
$$
乘积在求导的时候不方便，所以往往会变成取对数的方式来实现乘积变成线性（需要结合物理情景来理解里面的负号）  
$$
𝜋[𝑫] = exp( −𝜀[𝑫])\\ where \\ 𝜀[𝑫] = −ln[𝜋[𝑫]]
$$
那么可以把联合概率转化为：  
![image-20241014111137407](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111137407.png)

在无向图中很多情况下不关心绝对值，而关心相对值（这是因为分布函数需要对这么多内容求和，求和是很难求总和的，所以想用其他状态/基态的方式来消除z的求和困难）  
![image-20241014111303311](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111303311.png)
这个定理给出了Π的形式（构造性的解)  
需要满足H是正概率分布的I-Map  
![image-20241014111933452](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014111933452.png)
$$
Q=(α_a a+……+\\alpha_ff)+(\\beta_{ab}ab+……+\\beta_{df}df)
+(\\gamma_{cde}cde+\\gamma_{abc}abc+……+\\gamma{bcd}bcd)
+\\mu_{a,b,c,d}abcd
$$
此时$$P=1/z*exp(-Q)$$  

![image-20241014113232454](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014113232454.png)
![image-20241014114135716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014114135716.png)这里的Z：
$$
Z=\\sum_{A,B,C,D,E}exp(-U)
$$
(U=-Q，用U时为了和能量函数所匹配)

## 3 Continuous Variables

多元高斯分布可以通过对应随机变量的协方差为0来直接得到其完全独立
更常见的情况时协方差矩阵为0的地方，当且仅当x和j之间没有直接的边——也就是可以根据求解信息矩阵一下就可以画出高斯随机场的拓扑结构
![image-20241014120448241](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014120448241.png)
![image-20241014120459828](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241014120459828.png)

`,uy=`---
layout: post
title: "概率图模型6 概率图模型表示部分小结与进阶"
date:   2024-10-21
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要回顾了前一段时间所学习的概率图模型表示部分，同时介绍了一些更加前沿的研究
<!-- more -->
## 1 review

![image-20241021100617654](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021100617654.png)
动态序列模型就是把有向图用于研究序列的问题  
表示部分的举例：  
贝叶斯网络：   

![506008128fa27a903e052f0ad773012](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/506008128fa27a903e052f0ad773012.jpg)
序列模型：  

![d9ff7ce17969f8841642c265b699fab](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/d9ff7ce17969f8841642c265b699fab.jpg)
马尔可夫毯：父节点，子节点，子节点的父节点  
对于从有向图到无向图的转化：I(H)⊂I(G),需要做的是把V structure的父节点连起来，例如对于上述的贝叶斯网络，转换后即变为：  

![db514cfb539a8429bc4e23ab3f1be9d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/db514cfb539a8429bc4e23ab3f1be9d.jpg)

对于有向图，分解完之后还需要对每个local CPD的内容进行设计  
## 2 question solved way
![image-20241021103042384](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021103042384.png)

其中，设计隐变量是很重要的（且ai模型都无法帮助的）  

![image-20241021104124100](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021104124100.png)
z用于降维，C用于混合模型，最终得到x：  
上述的三维分布每一组数据分布在一个平面里，上述S三维分布中有5个平面：  

![e925ce4670f0f6bf1bc314766b925a8](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/e925ce4670f0f6bf1bc314766b925a8.jpg)

   

每次选择一个class label再选择一个z坐标，最后生成了数据x  

## 3 Medel Conditional Information
![image-20241021105644311](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021105644311.png)
两类问题：生成模型/判别问题  
model联合概率往往是生成模型，难度远高于model条件概率的判别模型  
从HMM的生成模型到判别的MEMM(Max Entropy Markov Models):  
![image-20241021105900784](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021105900784.png)

conditional nodes:多了一个超脱于所有的节点的条件节点，相当于在条件的每一项后面都多一个x就行了  
![image-20241021110056582](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021110056582.png)
X是永远观测到的时候，对原图的节点的独立性是没有任何影响的  
![image-20241021110708212](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021110708212.png)

此时，只含X的项就不需要包含，但其他所有和x相关的y的clique都需要保留（全都写出来最后把只含x的去掉即可）  

建模的时候有时候会忽略高阶效应（这时仅剩下边和节点的影响项）——具体是否忽略高阶效应取决于实际的应用    



判别模型的缺点是不能产生新的数据，且受分类边界上的影响较大（位于边界附近的异常值将导致误导性的判别平面）  
判别模型需要的是有label的数据  

## 4 Deep Structures

当初的现状：“Big” unlabeled data and “small” labeled data  
如何建模好大量的非标记数据（抽取特征，传统的使用的是PCA,Hinton & Salakhutdinov. Reducing the dimensionality of data with neural networks. Science 2006 做了一个pretraining的限制性玻尔兹曼积RBM进行降维  
![image-20241021114106199](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021114106199.png)
通过端到端的loss function来学习  
Web resources:  

- Machine intelligence (Nature 521:7553, 435)

![image-20241021120843494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241021120843494.png)

`,cy=`---
layout: post
title: "概率图模型final project介绍"
date:   2024-10-28
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要讲解介绍了一下最终大作业的要求
<!-- more -->

数据：空间转录组，包括病理图像和基因-空间的表达矩阵
任务：贝叶斯网络对表达矩阵聚类、马尔可夫随机场进行图像分割
推荐使用LDA

## 1 聚类任务

理论部分：LDA模型的表示、给出LDA的模型推断和学习算法的流程以及详细的数学推导（例如变分推断或者吉布斯采样公式、参数更新公式）
无需推导概率论中的概率密度函数、确保推导的严谨性、需标出参考的教参、文献或者网页资料
代码部分：使用LDA进行聚类，使用物理坐标进行可视化
可以采用sklearn或者gensim

## 2 图像分割任务
用马尔可夫随机场进行病理图像分割，每个像素点就是一个观测接单，图像分割就是分割隐空间节点z的类
理论部分：完成概率图模型的表示，写出先验概率，局部条件概率，后验概率，给出采用的推断和学习方法、给出参数推导的过程以及表达式
编程：不能掉包，只能用基础的运算库或者图像读取的
`,hy=`---
layout: post
title: "概率图模型7 cluster graph与clique tree"
date:   2024-11-04
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍了推断部分的graph cluster相关理论，以及使用clique tree进行准确推断  
<!-- more -->

全新的章节：整个机器学习的核心就是inference  
inference：模型的所有参数都是已知的，需要根据模型做概率推断  
![image-20241104100148673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104100148673.png)
任务1：求整个y的概率分布  
任务2：求点估计（也就是条件概率y的极大值点)  
显然任务1获得的信息量更多，但是也意味着任务1更难以实现  
![def54b24d4cbf1d93a81ed2b6982e13](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/def54b24d4cbf1d93a81ed2b6982e13.jpg)
**inference的核心就是求后验概率 ** 

## 1 简单的贝叶斯链式网络  

![image-20241104101812293](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104101812293.png)
可以通过从（Σa P(a)P(b|a))消除a，进而可以一步步的把a,b,c等消除掉  
这就是direct variable elimination  

## 2 消元法在隐马模型和马尔可夫随机场  

![image-20241104102115835](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104102115835.png)
初始条件：  
$$
\\alpha_1(i)=\\pi_i e_{i,x_1}
$$
其中的$\\pi_i$是 y1 的初始值，e则是x1的初始值  
那么其递推公式是：  
$$
\\alpha_{t+1}(i)=[\\sum_{j=1}^N \\alpha_t(j)t_{j,i}] e_{i,x_{t+1}}
$$
最终统合：  
$$
P(X|\\theta)=\\sum_{i=1}^N \\alpha_T(i)
$$
对于这些比较简单的例子模型，可以直接通过消元法实现，但是只有消元法是不够的，我们还希望找到更加高效的算法  
## 3 更复杂的贝叶斯网络
![image-20241104102937031](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104102937031.png)
根据这个图可以知道联合概率，但我们想知道P(D) (也就是P(Dyspnea))  
首先因子分解：  
$$
P(V)P(S)P(T |V)P(L | S)P(B | S)P(A|T, L)P(X | A)P(D | A,B)
$$
将条件概率的标记以factors简化书写：  
$$
\\phi V (V) \\phi S (S) \\phi T (T,V)\\phi L (L,S)\\phi B (B,S)\\phi A (A,T.L)\\phi X (X, A)\\phi D (D, A,B)
$$
为了求P(D),需要eliminate: V,S,X,T,L,A,B  
根据上述的因子分解定理：  
先eliminate: V：  
$$
\\tau_1(T)=\\sum_V \\phi_V(V)\\phi_T(T,V)
$$
此处的$\\tau_1(T)=P(T)$ ，那么上述的因子分解可以改写为：  
$$
\\tau_1(T) \\phi S (S) \\phi L (L,S)\\phi B (B,S)\\phi A (A,T.L)\\phi X (X, A)\\phi D (D, A,B)
$$
那么重复上述过程，现状消除S:  
$$
\\tau_2(L,B)=\\sum_V\\phi_S(S)\\phi_L(L,S)\\phi_B(B,S)
$$
那么因子分解定理可以简写成：  
$$
\\tau_1(T) \\tau_2(L,B) \\phi A (A,T.L)\\phi X (X, A)\\phi D (D, A,B)
$$
接下来消除X:  
$$
\\tau_3(A)=\\sum_X \\phi_X(X,A)
$$
需要注意此处的$\\tau_3(A)=1$  
那么因子分解定理可以写出：  
![image-20241104104211296](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104211296.png)

最后在消除T:
![image-20241104104226582](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104226582.png)

然后再消除L:
![image-20241104104250249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104250249.png)

然后再消除A  
![image-20241104104317128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104317128.png)最后只需要消除B:  
![image-20241104104336303](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104104336303.png)
$$
P(D)=\\tau_7(D)
$$

对于有向图，一般是处理V结构后转化成无向图，然后再依次消元  
为了减少计算成本，还可以把大的图的clique算好，以后只需要直接利用clique结果实现推断  
有向图-->处理掉v structure（这里的HGJ也是v-structure,记得三角化——连上GJ） --> 处理掉四边形得到induced graph --> 再把其转换可以得到clique tree  
![image-20241104110519425](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104110519425.png)
需要注意的是，这里的clique tree 是选择最高阶的clique  
每一个factors 的φi都是定义在clique上的  
两边信息发到目标clique  
![image-20241104111156911](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104111156911.png)

目标我们称之为根节点  
例如对于如下的clique tree  
![image-20241104111437601](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104111437601.png)

根节点是C6  
第一个途径，首先1发信息到4，2发信息到3，3发信息到4，此时4都已经有1和3的节点了就可以4发到根节点6了，然后是5发信息到6  
与之相反的就是第三个顺序，3发到4后直接4发信息到6就不合理，因为此时1还没发信息  
clique tree就是为了简化使得让inference的消元法更加容易理解  
![image-20241104112233287](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104112233287.png)
现状已经把5节点的边缘概率算完了，只需要把其信息又发出去，那么就可以得到其他节点的边缘概率了  
![image-20241104112359377](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104112359377.png)
（这一步称为downward pass）  
经过了upward和downward两个步骤之后，整个网络都已经被**校准**了（每个节点都是其边缘概率)，整个模型就成为了稳态，这样变很方便进行query————这就是clique tree的**calibration**  
**选择哪个作为根节点对于其结果没有影响 ** 

由于每条边上的信息被收录到旁边俩节点的边缘概率里，所以算总p的时候重复算了边上的信息，需要除去：  
![image-20241104113732983](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104113732983.png)
例如：  
![image-20241104113820885](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104113820885.png)
还有不再固定根节点的信息传播，而是随便选择就开始发信息，需要保证的就是迭代很多轮之后整个clique tree能够达到稳态  

clique tree就是原先概率图模型的等价表示，他的优势在于可以更好的帮助我们实现算法的设计  
## 4 clique tree设计
![image-20241104114935716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104114935716.png)

一定要先处理v-structure再处理多边形  
## 5 loopy cluster graph
无向图如果不做三角化就会出现环状的情况：  
![image-20241104115555973](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241104115555973.png)
这会使得A转一圈信息又回到了1  
这一cluster graph没有理论基础，只是一个处理的算法，能算就完事  
只需要满足Running Intersection Property即可  
但这里是不能保证结果收敛，也不能保证收敛结果就是正确的边缘概率（在这里的belief propagation)  





`,my=`---
layout: post
title: "概率图模型8 平均场近似"
date:   2024-11-11
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记介绍了变分推断以及平均场近似相关的内容  
<!-- more -->

没办法构建clique tree做精确的分布计算，因此提出了变分推断来做近似推断  
变分法后面是有完备的理论体系的  

## 1 目标转换（从P到Q)
起因：随着网格结构的增加，P(X)的推断变得越来越困难，因此我们想用一个更加简单的Q(X)来进行拟合，从而可以代表P(X)的话，未来做推断的时候只需要在简化后的Q(X)上进行推断就行，而不需要在比较复杂的P(X)上进行了  

![64da2c5b98d2a75a01d5e9658cab534](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/64da2c5b98d2a75a01d5e9658cab534.jpg)

以上就是变分法的基本逻辑  
因此我们需要严格定义一个物理量来计算这个P(X)和Q(X)的相似程度，这里用的是KL散度来描述差距：  
![image-20241111101711115](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111101711115.png)
需要注意的是，Q和P的前后顺序是不对称的，P在前Q在后和Q在前P在后的散度是不一样的  
目标就是在Q的定义域里找一个Q，以达到Q和P的散度最小：  
$$
\\min_Q\\ D_{KL}(Q||P)
$$
然后我们也是尽可能的定义Q(X)在简单的图结构上  
![image-20241111102245416](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111102245416.png)
reverse KL就是至少model一个峰  
forward Kl则要求至少全都覆盖  
在实际操作中我们通常用reverse KL散度：  
$$
D_{KL}(Q||P)=E_{X\\sim Q}(ln \\frac{Q(X)}{P(X|z)})
$$
这里对Q求期房显然是更加方便的，如果用forward散度就得对P求期望了  
![image-20241111102659617](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111102659617.png)
其中$E_{Q}(lnQ)$就是Q分布的熵  
经过上述等价之后我们的目标变成了  
$$
\\max_Q(E_{x \\sim Q}(lnP(X,z))+H(Q(X)))
$$
在物理里面叫做能量函数最大化（$\\max_Q L(Q)$)或者最小化J(Q)=-L(Q)  
![image-20241111103129463](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111103129463.png)

当Q和P像的时候第一项会比较合适，但此时第二项要求Q尽可能平均，这就使得其和第一项的结果背离，通过这两项来实现兼顾两个项
![image-20241111103148767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111103148767.png)
找![image-20241111104729965](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111104729965-1731914123725-8.png)Q的时候:  
需要限定Q的定义域、需要评价Q和P的相似度，在确定了这些之后就将整个问题变成了找Q实现上述的目标的优化任务了  

## 2 平均场模型
希望构造一个没有边的图模型的Q（也就是所谓的平均场 Mean field inference）  
例如：  
![image-20241111105032586](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105032586.png)
现在的Q分布按照概率图模型来说，每一个节点上都有一个自己的边缘分布，而且彼此独立所以连乘起来就是联合分布：  
$$
q(x;\\theta)=\\prod_i q_i(x_i)
$$
![image-20241111105218737](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105218737.png)

最后合起来两项就是L(q)  
![image-20241111105311200](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105311200.png)
优化的时候一次性优化比较难，所以现在我们希望一个q一个q的优化，在优化特定的q的时候，其他的q都固定不动：  
![image-20241111105439685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105439685.png)
最后的结果为：  
![image-20241111105737569](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105737569.png)
当：  
![image-20241111105849401](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111105849401.png)
此时只需要满足上述就可以使得L(q)达到最大  

## 3 平均场模型实例
现在的目标就是找到最优的Q去模拟下述的问题的P:  
![image-20241111110125444](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111110125444.png)
ising模型里没有一阶项（惯例）  
解决了P~(X)之后再去看q分布的设计  
![image-20241111110709223](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111110709223.png)
继续简化P~(X):  
![image-20241111111032384](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111032384.png)
对于网格模型，凡是和j节点没有直接相连的边在求期望之后都变成了常数进而都放入c中不影响结果了  
![image-20241111111537090](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111537090.png)
例如图中的3-6节点项$w_{3,6}x_3x_6$   
而且由于q是二项分布1~θ,-1~(1-θ),所以求期望就是1* θ -1（1-θ)=2θ-1  
![image-20241111111913716](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111111913716.png)
**这里的变量是而止变量是取-1和1的，但是如果是0，1分布的那就不能这么用了，例如限制性玻尔兹曼积的话，那么二值是取1和0的，此时就是$w_{ij}\\theta_i$ ** 

对于例题：  
![image-20241111113559446](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111113559446.png)
$$
ln P(x,y)=\\frac{1}{z}e^{\\alpha_1 x1+\\alpha_2 x2+\\alpha_3 x3+\\beta y+w_{1,2}x_1x_2+w_{1,3}x_1x_3+w_{3,2}x_3x_2+h_1
x_1y+h_2x_2y+h_3x_3y}$$
那么此时
$$
$$
E_{q_1(X)}(h_1x_1y)=h_1\\theta_1y 
$$

$$
E_{q_2(X)}(h_2x_2y)=h_2\\theta_1y
$$


$$
E_{q_3(X)}(h_3x_3y)=h_3\\theta_1y 
$$
平均场/变分推断做去噪的效果很好：  
![image-20241111114429756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111114429756.png)
对于二值问题是可以比较方便的实现求解析解，但有时候并不能直接求解解析解，那么现在可以通过随机梯度来做梯度下降    

当变分都完成了之后，只需要全都用q算就行了，不需要再在p中进行求解了，这就是变分的意义（一切后续的计算都用q来计算）    
## 4 NN for variational inference
在数据特别复杂的时候变分函数很难设计：  
![image-20241111115804371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241111115804371.png)
这两项就可以用神经网络的encode和decode实现  
实际上做的是变分推断  
VAE就相当于是对Variation学比较复杂的q通过神经网络   













`,py=`---
layout: post
title: "如何设置博客被谷歌搜索引擎收录"
date:   2024-11-16
tags: [others]
comments: true
author: junedrinleng
toc: true
---


该笔记主要介绍搭建好的博客网站如何被谷歌搜索引擎收录。
<!-- more -->

## 1. 检查是否能搜索到你的网站
请在谷歌搜索的搜索框输入以下内容  
~~~
site:https://junedrinleng.github.io
~~~
  
如果能搜索到你的网站，那么你的网站已经被谷歌搜索引擎收录了。
如果搜索结果如下：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140630.png)  
说明没有收录，那么需要进行之后的操作  
## 2. 搜索资源的提交
点击[谷歌搜索控制台](https://search.google.com/search-console/welcome)进入搜索资源的提交页面  
界面如下图所示：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140829.png)  
选择右边的填入自己的域名：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116140928.png)  
点击继续后弹出如下的窗口：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141027.png)  
下载html文件，将其放到你的网站根目录下，然后点击验证。  
如果验证成功，会弹出以下的窗口：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141415.png)
## 3. 提交网站地图
站点地图(Site Map)是用来注明网站结构的文件，我们希望搜索引擎的爬虫了解我们的网站结构,以便于高效爬取内容，快速建立索引。  
这里使用的是 XML-Sitemaps.com网站，我们可以点击[https://www.xml-sitemaps.com/](https://www.xml-sitemaps.com/)进入该网站。  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141706.png)  
在上述页面中输入自己的网站域名，点击start。  
搜索完成后呈现如下页面：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141805.png)  
点击view sitemap details，然后点击下载sitemap。  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116141855.png)
下载 SITEMAP 文件sitemap.xml并将其上传到网站的根目录。
**注意一定要记得上传之后再在谷歌提交，不然谷歌找不到站点地图文件就会报错**  
接下来就可以提交你的站点地图了。  
回到刚刚的谷歌搜索控制台，点击站点地图，然后点击提交站点地图。  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116142115.png)  
选择站点地图后填写地图位置：  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241116142204.png)  
之后点击提交
提交之后看下面谷歌抓取的状态
然后点击请求编入索引：
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117205745.png)
点击请求编入索引后看到谷歌已经收录  

然后去google搜索框搜索你的网站，看看是否能搜索到你的网站  
![](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/20241117205904.png)`,dy=`---
layout: post
title: "博客图片的快速管理与上传"
date:   2024-11-17
tags: [others]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍如何管理以及快速的上传图片实现md的迅速博客化
<!-- more -->
## 背景

最近刚刚建立了我的个人网站，为了尽可能快的将自己以往的笔记都搬运上我的博客主页我一直在思考怎么能够提高搬运效率  

其实相对博客的md文件来说，最为重要的是图片的管理

博客的图片一般都是使用图床进行链接，而我在本地则更倾向于使用图片存储在相对路径为文件夹名.assets的文件夹里，为了实现快速转换，我提出了以下的方案。

## md文件编辑插入图片时的注意事项

我最开始发现问题是我的笔记都是用obsidian进行记录的，但是所有的obsidian的文件插入的图片是wiki格式的而不是markdown格式的，以至于我的typora并不能识别，所以如果使用obsidian的话请务必取消勾选图片的Wiki格式

![image-20241118003836633](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118003836633.png)

## 配置typora

这里使用的图床是picgo+github的图床组合，配置typora中的图床上传可以在文件-偏好设置里找到图片的设置：

![image-20241118004233677](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004233677.png)

设置好上传服务设定，选择上传服务中的picgo，然后定位好picgo程序的exe的位置，不放心的可以点击验证图片上传选项

## 更新博客

### 设置picgo图床上传目标

由于我希望我的图床中图所在的文件夹与md文件名保持一致，所以需要设置一下picgo的图床上传位置：

![image-20241118004446321](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004446321.png)

例如在这我设置的图床的仓库就是我的博客所在的仓库，分支选择main就好，token则需要在setting中找到

存储路径则选择的是博客仓库下的img/md文件名，例如我要上传2024-09-23_PGM_1_LocalProbabilisticMode我就设置如图所示的存储路径：img/2024-09-23_PGM_1_LocalProbabilisticMode/

**注意路径以/结尾**

设置好后点击确定即可

### 博文以及其图片上传

我一般会在本地使用typora编辑完所有之后将需要上传的博客以及其图片所在的文件夹复制在博客repo的_post文件夹里，然后用typora打开刚刚复制的md笔记，选择格式-图片-上传所有本地图片

![image-20241118004855933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118004855933.png)

最后把md文件按照博客的命名规则命名，同时删除_post文件夹中之前复制的图片即可`,fy=`---
layout: post
title: "概率图模型9 蒙特卡洛近似"
date:   2024-11-18
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍了蒙特卡洛近似，包括likelihood weighting和importance sampling
<!-- more -->

## 1 Two Strategies for Inference

1. Inference as optimization

   - Belief propagation on cluster (or factor) graph
   - Structured varational inference


2. Back to the frequentist probability
   - Likelihood weighting, importance sampling
   - MCMC: Gibbs sampling, Metropolis-Hastings algorithm, Hamiltonian Monte Carlo, Langevin Monte Carlo (sampling Markov blanket posterior)

变分法是极致上限的，上两周的推断主要介绍的1变分推断，还有一部分的是回归频数概率的推断

蒙特卡洛方法的基本逻辑就是从P中产生一堆高效的独立同分布的样本，然后根据频数来近似概率：
$$
P(X)\\approx \\frac{n_x}{n_{total}}
$$
所以最关键的问题就是如何高效的产生这些样本

## 2 Forward Sampling

根据网络的结构产生样本，然后最后做统计

**需要注意的是，所有参数都是已知的**

下图展示的就是根据概率表进行采样的过程

![image-20241118101150193](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118101150193.png)

先根据D的概率分布表来随机采样一个d，I也同理，再根据i和d的值以及G的概率分布表得到g，以此类推s和l

频数论对于求条件概率也很简单，只需要将分母里的所有样本量，变成满足条件的样本数就行了 P(**Y**|**E**=**e**)

需要注意的是，采样的数目越多，频数越接近真实概率，那么我们应该选取多少采样数才能尽可能的偏差小呢

![image-20241118101710026](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118101710026.png)

但面临产生一堆样本可能会浪费的情况：
$$
P(x_3=1,x_5=0|x_2=0)=\\frac{N(x_3=1,x_5=0)}{N(x_2=0)}
$$
N代表频数

## 3 Likelihood Weighting

如何简化呢，上述频数描述的是 P(**Y**|**E**=**e**)，我们可以直接设定E的数为e而不进行采样，此时得到的整个结果是 P(**Y**，**E**=**e**)，和原先的 P(**Y**|**E**=**e**)相差一个 P(**E**=**e**)

举个例子：

![image-20241118102726350](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118102726350.png)

给定G，S的时候，D和I的后验概率其实已经发生改变，不能够按照原先的方法去使用D和I开始生成了

但上述说了的处理方法：

首先G和I还是根据表格随机采样，然后G时强制G等于2（g2),S也是强制等于，记录一个$weight=P(S=s^1)P(G=g^2)$

对于有向图来说likelihood已经可以很好的解决了

## 4 Importance Sampling

Q的定义域比P大需要，样本在Q中产生而不是P以简化采样，凡是P/Q>1就相当于他的权重增加，小的地方就降权重就行了

公式：

![image-20241118104951506](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118104951506.png)

![811a6acb878b85128410c5aa4403b86](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/811a6acb878b85128410c5aa4403b86.jpg)

如果P和Q接近的时候，近似开销最少，而如果相差很大则需要额外补充采样

![image-20241118105510185](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118105510185.png)

简化操作：凡是有观测的节点，把其和父节点的关联全部删掉，得到multilated network

likelihood weighting是importance sampling的特例（按照上述切割规则设计Q的时候）

关于样本数：

![image-20241118110148433](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118110148433.png)

上面这一套对于无向图来说是不太合适的，因为需要将无向图转化成有向图，同时对于无向图不是很好选择Q

## 5 玻尔兹曼分布与MCMC

![af1fa89625f97ada6b5adb597a30a94](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/af1fa89625f97ada6b5adb597a30a94.jpg)

三个粒子状态可以互相转换，当前状态仅与上一时刻的状态有关（马氏性），那么当时间长了之后粒子处于各个状态的概率服从玻尔兹曼分布

能不能设置一个马尔可夫链，使得马氏链的稳态满足目标分布

需要注意importance sampling和likelihood weighting产生样本时与上一个时刻的样本无关，而Markov Chain Monte Carlo则与上一时刻有关

为了避免无穷大/多个稳态分布，所有的local CPD都加上很小的一个数（使得概率为0变成概率变成一个小量）

### 5.1 最简单的MCMC算法：Gibbs采样

吉布斯采样的转移概率是按照p分布按以下方式设定的：
$$
𝑇(𝑿(𝑡) = 𝒙 → 𝑿(𝑡+1) = 𝒙′)= 𝑃(𝑿(𝑡+1)|𝑿(𝑡), 𝒆)
$$
只有当所有local CPD都是大于零的才能使得所有状态都是常返的

![image-20241118115210860](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115210860.png)

对于常返的条件是：

![image-20241118115432752](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115432752.png)

具体看怎么采样：

### 5.3 贝叶斯网络的吉布斯采样

首先确定马尔可夫blanket

![image-20241118115610670](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115610670.png)

![image-20241118115707870](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115707870.png)

y是x的子节点，上述概率乘积是小于等于1的，不是概率，需要对其进行归一化后才是概率

![image-20241118115833408](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241118115833408.png)

## 6 Metropolis-Hastings Algorithm

怎么根据已有的随机生成器Q设计马尔可夫链

设计了配平函数acceptance probability，将P大于Q的部分引入A来配平，Q大于P的部分则不管`,gy=`---
layout: post
title: "概率图模型10 inference小结"
date:   2024-11-20
tags: [pgm]
comments: true
author: junedrinleng
toc: true
---

该笔记主要对inference部分的理论进行回顾和整理
<!-- more -->

## 1 introduction

之前主要介绍的是**表示部分**，也就是如何根据概率图模型的图结构了解变量之间的独立性以及写出联合概率。  

通过表示部分，我们可以对于一个具体的多变量影响因素的问题快速的根据各个变量之间的相互作用**构建出概率图模型的网络结构**  

但仅有网络结构是不足的，我们还需要利用网络去做以下的两件事：  

- 推断（inference）
- 学习（learning）

其中，推断就是在网络结构和权重已知的情况下，推断出概率分布；而学习则是希望网络在一次次的学习中更新网络权重。  

类比神经网络的话，**推断**做的就是把数据输入到已经训练好的神经网络模型中，做**predict**；而学习做的就是把数据放入网络中，使得网络可以**learning**并更新权重   

今天主要总结的是inference

## 2 Variable Elimination（变分消元） introduction

变分消元法是一种**前向传播**的算法，他通过父节点的信息来进行消元，进而得到子节点的表达式

 例如对于以下的一个贝叶斯网络：

![image-20241120160049195](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120160049195.png)

根据表示部分我们可以很快的利用因子分解定理写出联合分布：  
$$
P(V)P(S)P(T|V)P(L|S)P(B|S)P(A|T, L)P(X|A)P(D|A,B)
$$
  

可以简写一下：  
$$
\\phi_V(V)\\phi_S(S)\\phi_T(T,V)\\phi_L(L,S)\\phi_B(B,S)\\phi_A(A,T.L)\\phi_X(X, A)\\phi_D(D, A,B)
$$



要获得**最末端的子节点D的分布概率$P(D)$**，最好的方法就是从上往下消元（从父节点往子节点，最开始的父节点没有父节点，那么其因子分解定理的式子里的概率表达式就他自己，例如P(V)，P(S)等）  

由于网络来说，**V节点**是最上层的父节点，影响的因素最少，所以我们可以从他开始：  

对于**V节点**：  
$$
\\tau_1(T)=\\sum_V \\phi_V(V)\\phi_T(T,V)=P(T)
$$
那么上述的联合概率（2）就可以代入（3）得到：  
$$
\\tau_1(T)\\phi_S(S)\\phi_L(L,S)\\phi_B(B,S)\\phi_A(A,T.L)\\phi_X(X, A)\\phi_D(D, A,B)
$$
在处理了V之后我们可以同样处理S节点：  
$$
\\tau_2(L,B)=\\sum_S \\phi_S(S) \\phi_L(L,S)\\phi_B(B,S)
$$
将（5）代入（4）可以得到：  
$$
\\tau_1(T)\\tau_2(B,L)\\phi_A(A,T.L)\\phi_X(X, A)\\phi_D(D, A,B)
$$
同理可以进一步消除得到：  
$$
\\tau_3(A)=\\sum_X \\phi_X(X,A)\\\\
\\tau_4(A,L)=\\sum_T \\tau_1(T)\\phi_A(A,T,L)\\\\
\\tau_5(A,B)=\\sum_L\\tau_4(A,L)\\tau_2(B,L)
$$
此时经过这么多步的消除之后原先的联合分布式已经消元成：  
$$
\\tau_5(A,B)\\tau_3(A)\\phi_D(D,A,B)
$$
进一步把A的内容消除得到$\\tau_6$  
$$
\\tau_6(B,D)=\\sum_A \\tau_5(A,B)\\tau_3(A)\\phi_D(D,A,B)
$$
此时因子分解式被代入后变为：$\\tau_6(B,D)$，应用全概率公式消除B即可得到最末端的D的概率$P(D)$  

上述就是最为基本的变分消元的过程  

## 3 induced graph in VE

在给定了部分变量观测值之后，有向图中面临了不少的V-structure：  

![image-20241120162308817](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120162308817.png)

例如上图给定了G的值之后，会导致原先独立的D和I两个变量不再独立，这会增加我们后续处理的难度  

所以想通过induced graph的方法来简化有向图，消除v-structure  

做法就是将所有有向图的→的边用无向图的-代替，同时将v-structure的父节点连起来构成三角形，之后还会进行三角化  

![image-20241120162614911](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120162614911.png)

在进行完上述处理后再进行2.1中的变分消元过程：  

![image-20241120163316566](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120163316566.png)

## 4 clique tree

### 4.1 introduction

上述的变分过程面临一个比较重要的问题就是，我们每次推断都需要从上往下整个网络计算一遍，没有利用好中间变量减少计算量，所以我们希望在这方面进行改进    

而上述的变分过程从图中看是对每一个clique进行处理（消元/传递信息）  

> 在马尔可夫网络（Markov Network）中，基本单元称为团（cliques）。这是指图中任意两个节点都直接连接的最大完全子图。具体来说：
> > 1. **团的定义**：
> >   - 一个团是一个子图，其中每对节点之间都有边连接。
> >   - 最大团是图中不能再扩展的完全子图。

因此，概率图模型的研究者将上述的clique处理过程抽象出来，构建了clique tree和passing message来代表上述的VE过程：

![image-20241120163802048](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120163802048.png)

那么以求P(J)为例

上述的有向图被抽象成：

消除C：clique1(C,D)向clique2(D,I,G)传递信息$\\delta_{1→2}(D)$

消除D：clique2向clique3传递信息$\\delta_{2→3}(G,I)$

需要注意的是：

**团树是模型的等价表示\u2029另一种数据结构\u2029；在团树上进行求和乘积消息传递\u2029“等于”变量消除**

![image-20241120164753471](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120164753471.png)

### 4.2 clique tree校准

仅有clique tree这种相较于概率图的抽象表示并不能解决我们上述提到的VE的困难，为了解决这个问题，利用好VE过程的中间变量来简化计算，我们需要对clique tree 进行校准

所谓校准就是先将上述信息传递都传一遍（VE一遍）使得每个local clique都有全局的信息：

- 对于每一个clique，其都有一个初始的分布函数（或者叫做势函数）：$\\psi=\\Pi (factors*weight)$
- 然后选择一个根节点，从各个节点向根节点传播信息，也就是上面的$\\delta$，此时受到信息的clique其势函数$\\psi$会更新：$\\psi_{new}=\\psi*\\Pi(\\delta)$ 即原先的势函数乘以其受到的所有信息
- 在整个clique tree经过一轮双向信息传递之后就实现了校准，可以用势函数来表示概率了：

![image-20241120170934168](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241120170934168.png)

而且由于校准后所有的势函数都已经有了，所以计算任何节点的概率都只需要利用势函数计算即可了

传递信息的过程也被称之为信度更新（belief updating）

## 5 Variational Inference

变分推断的基本逻辑就是将原有的分布以更为简单的分布去代替，进而获得简化。后续只需要对Q进行推断就可以了而不需要在复杂的P上推断

那么应该怎么才能构造出合适的Q以代替P呢？这里采用了散度+熵的形式

KL散度用以描述Q和P的相似性：
$$
\\min_Q\\ D_{KL}(Q||P)
$$
而Q的熵则用于描述Q的复杂度，因为如果不加这一项的话，为了使得Q和P接近直接就变成Q=P了，并没有起到简化的作用，只有增加一项Q的复杂度的项才能避免上述情况的发生

那么我没需要的就是找到一个Q使得：
$$
L(Q)=\\max_Q(E_{x \\sim Q}(lnP(X,z))+H(Q(X)))\\\\
=lnP(z)-D_{KL}(Q||P)≤lnP(z)
$$

## 6 Mean field Inference

平均场模型的基本死了就是构造一个没有边的模型作为q去代替原先右边的p分布：

![image-20241122142946482](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20241122142946482.png)

由于q对应的平均场模型是没有边的，所以其分布是很好写的（相当于所有节点都是独立的）
$$
q(x;\\theta)=\\prod_i q_i(x_i)
$$
代入到上述的$L(Q)$的式子：
$$
L(q)=\\sum_x[\\prod_i q_i(x_i)][ln p(x,z)-\\sum_k lnq_k(x_k)]
$$
这里的L就是优化函数（类似loss一样），我们要的就是不断迭代Q使得其沿着L的方向接近P
`,vy=`---
layout: post
title: "前端学习笔记1 JavaScript基础"
date:   2024-12-05
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/1-data-types/translations/README.zh-cn.md)
<!-- more -->
## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 变量与常量
在过去的学习中好像并没有涉及到常量的相关知识，而在JavaScript中则既有变量又有常量的概念，在此需要特别的注意  

### 1.1 变量
变量和python等语言一样，创建和声明变量可以使用\`let\`或者\`var\`,感觉更为常见的是\`var\`但是在教案中更为提倡的是\`let\`  
~~~
let a;
~~~
如此就完成了一个变量的声明，除此之外还可以对其进行赋值：
~~~
a=1;
~~~
由于是变量，我们可以对其进行多次的赋值不断改变变量内所存储的值
~~~
a=2;
~~~
也可以在初始化变量的时候就进行赋值：
\`\`\`
let a=2;
\`\`\`
### 1.2 常量
与变量相对的概念是常量，常量只能赋值一次，完成初始化之后就不再改变
~~~
const PI=3.14
~~~
使用const来初始化，在赋值后就不能再改了，对于常量一般采用全大写  
在常量中，对象是会受到保护的，但对象的键值对的值是不受保护的：
~~~
const obj = { a: 3 };
obj = { b: 5 } // 报错
~~~
\`\`\`
const obj = { a: 3 };
obj.a = 5;  // 允许
\`\`\`
## 2 数据类型
JavaScript 有六种基本数据类型：string、number、bigint、boolean、undefined 和 symbol  
在python里好像则是str、int、float、list、dict、bool之类的，感觉对比Javascript而言，JS后四项常见的数据类型都比较陌生需要重新学习  

### 2.1 数值
对于数值好像并不像其他语言一样区分整型和浮点  
| 符号	| 描述	| 例子 |
|---|---|---|
| +	| 加法：计算两个数的和	| 1 + 2 // 结果是 3
| -	| 减法：计算两个数的差	| 1 - 2 // 结果是 -1
| *	| 乘法：计算两个数的积	| 1 * 2 // 结果是 2
| /	| 除法：计算两个数的商	| 1 / 2 // 结果是 0.5
| %	| 取余：计算两个数相除的余数	| 1 % 2 // 结果是 1

### 2.2 字符串
字符串包括单引号和双引号两种（好像json还是yaml对于单双引号的要求是不一样的，记不清了……）

\`"this is a str"\`，\`"this is a str"\`都是字符串  
和python一样，字符串的链接可以用\`+\`实现
example：
~~~
let myString1 = "Hello";
let myString2 = "World";

myString1 + myString2 + "!"; //HelloWorld!
myString1 + " " + myString2 + "!"; //Hello World!
myString1 + ", " + myString2 + "!"; //Hello, World!
~~~
模板化是字符串另外一个比较重要的内容，在python中是以如下形式实现的：
~~~
a='hello'
b='world'
c=f"{a},{b}!"
~~~
最终结果是\`hello,world!\`  
而在JavaScript中，则是用美元符号\`$\`作为格式符：
~~~
let myString1 = "Hello";
let myString2 = "World";

\`\${myString1} \${myString2}!\` //Hello World!
\`\${myString1}, \${myString2}!\` //Hello, World!
~~~
### 2.3 布尔值
和python一样，只有两个值： \`true\` 或 \`false\`  

如果一个变量的计算结果是 true，我们就把它称为“真值（truthy）”。一个有意思的事是，在 JavaScript 中，所有值都是真值，除非它们被定义为假值（falsy）。
## 3.其他
好像后面的几种数据类型教案没有提及，可能因为不是很重要吧哈哈哈`,yy=`---
layout: post
title: "前端学习笔记2 JavaScript中的函数"
date:   2024-12-05
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识中的函数部分，包括显函数和隐函数，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/2-functions-methods/translations/README.zh-cn.md)
<!-- more -->

## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 创建和调用函数
函数的创建在python中是用def实现，在js中主要是通过function来定义：
~~~
function nameOfFunction() { // 函数定义
 // 函数定义 / 函数体
}
~~~
需要注意的是，由于不像python中严格要求缩进，所以在js中需要把函数体用大括号括起来  

例如：
\`\`\`
function displayGreeting() {
  console.log('Hello, world!');
}
\`\`\`
调用的话只需要\`函数名()\`即可：
~~~
// 调用我们的函数
displayGreeting();
~~~

在函数命名的时候，教案建议使用驼峰命名法，描述性命名，同时特定函数干特定的事情
## 2 传参
和python一样，传参都是在函数的括号中加入参数就行了  

在python中：
~~~
def hello_world(param,param2):
    print(f"{param},{param2}!")
    pass
~~~
而在JavaScript中：
~~~
function  HelloWorld(param,param2){
    str_total="\${param},\${param2}!";
    console.log(str_total);
}
~~~
调用函数同理
## 3 默认值与返回值
默认值和python一样，在传参的时候加入赋值就行了   

在python中：
~~~
def hello_world(param='hello',param2='world'):
    print(f"{param},{param2}!")
    pass
~~~
而在JavaScript中：
~~~
function  HelloWorld(param='hello',param2='world'){
    str_total="\${param},\${param2}!";
    console.log(str_total);
}
~~~
调用的时候JavaScript和python一样：
~~~
HelloWorld("Hello","june");
~~~
__记得打分号!!!!!!!!!__

返回也和python基本一致，只需要添加一个return就好啦，不过将返回值赋值的时候记得用\`const\`等方式声明
~~~
function createGreetingMessage(name) {
  const message = \`Hello, \${name}\`;
  return message;
}

const greetingMessage = createGreetingMessage('Christopher');
~~~
##  4 将函数作为参数传入函数
对于 setTimeout，其会开启一个计时器，在倒计时结束时执行代码。我们需要告诉它我们希望它执行什么代码。这听起来正是函数该做到的事！

如果你执行下方的代码，三秒后你就可以看到   \`3 秒过去了\` 这条消息：
\`\`\`
function displayDone() {
  console.log('3 秒过去了');
}
// 计时器的时间单位是毫秒
setTimeout(displayDone, 3000);
\`\`\`
而所谓匿名函数就是在上述定义函数的过程嵌合到传参中以简化代码复杂度：
~~~
setTimeout(function() {
  console.log('3 秒过去了');
}, 3000);
~~~
还可以用箭头\`=>\`来简化掉\`function\`
~~~
setTimeout(() => {
  console.log('3 秒过去了');
}, 3000);
~~~`,by=`---
layout: post
title: "前端学习笔记3 JavaScript中的判断语句"
date:   2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识中的判断语句，包括布尔值、比较运算和if相关的语句，以及逻辑语句，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/3-making-decisions/translations/README.zh-cn.md)
<!-- more -->

## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 布尔值回顾
在第一讲中我们已经学了布尔值相关的知识，只包含\`true\`和\`false\`两种情况，我们可以给变量赋值布尔值
~~~
let a=true;
let b=false;
~~~
## 2 比较运算符
常见的\`>\`,\`<\`,\`>=\`, \`<=\`都很符合直觉，但需要注意的是不等于和严格等于这两种情况，不等于在python中是用\`!=\`表示，而在JavaScript中则是使用\`!==\`，这里有两个等号。  
严格等于在JavaScript中则是以三个等号的形式出现：\`===\`

|符号|	描述	|示例|
|---|---|---|
|<|	小于：比较两个值，如果左边的值小于右边的值则返回true	|5 < 6 // true
|<=	|小于或等于：比较两个值，如果左边的值小于或等于右边的值则返回 true	|5 <= 6 // true
|>|	大于：比较两个值，如果左边的值大于右边的值则返回 true	|5 > 6 // false|
|>=|	大于或等于：比较两个值，如果左边的值大于或等于右边的值则返回 true |	5 >= 6 // false|
|===|	严格等于：比较两个值，如果左边的值等于右边的值且数据类型相同则返回 true |	5 === 6 // false|
|!==	|不等于：比较两个值，返回与“严格等于”运算结果相反的布尔值	|5 !== 6 // true|

## 3 if 语句
### 3.1 基础if语句
和python一样，在JavaScript中判断语句也是由if和else驱动的：  
在python中：
~~~
if a>b:
    print(a)
    pass
~~~
而在JavaScript中：
~~~
if (condition){
    // 如果 condition 为 true，这个块中的代码将会运行。
}
~~~
__记得打分号哦__

example in javascript
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // 如果条件为 true，这个块中的代码将会运行。
    console.log("Getting a new laptop!");
}
~~~
### 3.2 if else语句
if else语句只需要在if后面再加一个表示else的大括号就行了：
~~~
let currentMoney;
let laptopPrice;

if (currentMoney >= laptopPrice){
    // 如果条件为 true，这个块中的代码将会运行。
    console.log("Getting a new laptop!");
}
else{
    // 如果条件为 false，这个块中的代码将会运行。
    console.log("Can't afford a new laptop, yet!");
}
~~~
## 4 逻辑运算
逻辑运算符相较于python的\`and\`.\`or\`等语法而言，可读性没那么接近自然语言，不过只需要记住符号即可，感觉有点类似于C语言中的逻辑运算符号：
|符号	|描述	|示例|
|---|---|---|
|&&|	逻辑与（AND）：比较两个布尔表达式，只有在两边都是真时返回真	|(5 > 6) && (5 < 6 ) // 一边为假，另一边为真，返回假|
| \\|\\|	|逻辑或（OR）：比较两个布尔表达式，在至少一边为真时返回真	|(5 > 6) \\|\\| (5 < 6) // 一边为假，另一边为真，返回真|
|!	|逻辑非（NOT）：返回与一个布尔表达式相反的布尔值|	!(5 > 6) // 5 并不比 6 大，但 "!" 会返回真|

因此我们可以用逻辑运算来进行判断，我感觉本质都是在if(condition)里产生布尔值，至于是基于判断还是基于逻辑运算都没什么关系：
~~~
let currentMoney;
let laptopPrice;
let laptopDiscountPrice = laptopPrice - (laptopPrice * .20) // 打八折后的笔记本电脑价格

if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
    // 如果条件为 true，这个块中的代码将会运行。
    console.log("Getting a new laptop!");
}
else {
    // 如果条件为 false，这个块中的代码将会运行。
    console.log("Can't afford a new laptop, yet!");
}
~~~
布尔值结果取逆可以使用\`!\`来实现：
~~~
if (!condition) {
  // 如果 condition 为 false 则运行
} else {
  // 如果 condition 为 true 则运行
}
~~~
## 5 三元运算
可以在定义变量的时候掺入判断条件，如果为真返回一种情况，如果为假返回另一种情况（这个好像在python中没遇到过）
~~~
let variable = condition ? <若为 true 则返回这个> : <若为 false 则返回这个>
~~~
例如：
~~~
let firstNumber = 20;
let secondNumber = 10
let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
~~~
这玩意的本质就是判断+赋值语句的简写`,wy=`---
layout: post
title: "前端学习笔记4 JavaScript中的数组与循环语句"
date:   2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要学习JavaScript的基础知识中的数组和循环语句，其中循环语句包含for循环和while循环，参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/4-arrays-loops/translations/README.zh-cn.md)
<!-- more -->

## 0 前言
本人在之前学习过一些C，现在使用的稍微熟悉一点的还是python，所以这个教案笔记主要是基于作者已有的python知识进行类别学习的

## 1 数组
感觉相较于python丰富的数据结构，在这仅介绍了数组一种JavaScript的结构，类似于python中的列表，不过肯定有一些细节比如python中是取len而在JavaScript中怎么调试这些教案都没有讲清楚，有待之后的实践来学习了  

数组的定义就是[]方括号，数组中既可以存放数也可以存放字符串：
~~~
let myArray = [];
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
~~~
想提出数组中的特定值，需要使用索引值，和python一样，JavaScript中的数组是从0开始索引的   
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors[2]; // "Vanilla"
~~~
当然也可以使用索引+赋值来改变数组中特定位置的值
~~~
iceCreamFlavors[4] = "Butter Pecan"; // 把 "Rocky Road" 改成 "Butter Pecan"
iceCreamFlavors[5] = "Cookie Dough"; // 加了一项 "Cookie Dough"
~~~
只需要调用length方法就可以和python中的len一样知道数组中有多少个元素了：
~~~
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
iceCreamFlavors.length; // 5
~~~
## 2 循环
for循环语句在迭代时设置计数器i:
~~~
for (let i=0;i<10,i++){
    a=i;
}
~~~
在condition里需要定义计数变量，判断条件和迭代方法   

while循环则是需要在循环外创建计数变量，同时在循环内增加迭代语句以便达到循环条件：
~~~
let i=0;
while (i<=10){
    console.log(i);
    i++;
}
~~~
利用循环我们可以便利数组中的每一个元素来实现对数组所有元素的操作  

当然还有一些其他的语句来实现便利数组比如\`forEach\`、\`for-of\`和\`map\`不过教案没有讲，这里暂时就不拓展学习了😀`,xy=`---
layout: post
title: "前端学习笔记5 html语言简介"
date:   2024-12-06
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记前端知识中的html语言，包括head，body等部分的介绍，具体内容参考自[微软的web-dev项目](https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/3-terrarium/1-intro-to-html/translations/README.zh-cn.md)
<!-- more -->

## 1 HTML的介绍
前端较为常见的几个语言有HTML, CSS和JavaScript，这几个语言的关系是:  
HTML是网页的骨架，CSS负则修饰和点缀HTML，而JavaScript则负则画龙点睛让网页更加生动。  
HTML包括head，footer和body几个部分
## 2 html声明
在HTML一开始就需要声明文件类型是html，同时添加根元素，一般我们只需要将以下的两行加入到新的HTML文件开头就行了：
~~~
<!DOCTYPE html>
<html></html>
~~~
这里第一行是声明，有许多种模式，包括所谓的怪异模式和标准模式，其能够一定程度上支持老旧浏览器
## 3 HTML Head
在HTML的head部分，需要声明网页的名字，编码方式（字符集），浏览器的信息以及视图加载的时候应该如何表示大小缩放信息
一般以<head>开头，以</head>结尾，中间都是我们需要在head中填写的部分
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
经过上述两步之后，html文件变成了以下的样子：
~~~
<!DOCTYPE html>
<html>
    <head>
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
</html>
~~~
## 4 HTML的body部分
在构造了HTML的head之后，接下来就要构造body部分，页面中的元素也是通过body部分添加你想要内容，就像有\`<head>\`和\`</head>\`，\`<body>\`和\`</body>\`一样，几乎大多数标签都既有开始的标签，又有结束的标签，开始和结束之间的则是标签的内容。
只不过有一个不需要结束标签的例外就是\`<img>\`,因为他已经包含了渲染该项所需要的所有信息  

在项目中，我们把所有要渲染的图片都放在目录的image子文件夹里，现在我们更新index.html的body部分：
~~~
<div id="page">
	<div id="left-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
		</div>
	</div>
	<div id="right-container" class="container">
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
		</div>
		<div class="plant-holder">
			<img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
		</div>
	</div>
</div>
~~~
上述的代码包括一个总容器——也就是id="page"的div，这个总容器里包括两个子容器，分别是左容器和右容器，id="left-container" 和 id="right-container"; 每个容器内包含7个植物图片的子容器。植物图片子容器包含img class类名，alt图片渲染不出时的替代文本，id是图片分配id，src是图片所存在的未知    

通过上述几个部分的代码就可以构造一个基本的网页, 用浏览器打开HTML文件就已经可以渲染出内容了  
## 5 语义化标签
使用语义化标签也就是使用 HTML 标签来表示它们所被设计的数据或交互的类型，不同的交互类型用不同的标签，例如核心标题使用
~~~
<h1>My Terrarium</h1>
~~~
除此之外还有：标题使用 \`<h1>\` 、无序列表使用 \`<ul>\` ，这样能帮助屏幕阅读器理解页面的内容。一般来说，按钮需要写作 \`<button>\` 而列表被写作 \`<li>\`。并且我们当然 可以 使用有特殊样式的包含点击处理的 \`<span> \`元素来当作按钮使用，但如果元素以按钮的形式出现，残疾用户可以很方便的使用现有的技术来确定按钮在页面上的位置，并与之交互。因此，尽量使用语义化的标记。
最后还得添加上以下代码：
~~~
<div id="terrarium">
	<div class="jar-top"></div>
	<div class="jar-walls">
		<div class="jar-glossy-long"></div>
		<div class="jar-glossy-short"></div>
	</div>
	<div class="dirt"></div>
	<div class="jar-bottom"></div>
</div>
~~~
以便创造一个玻璃容器，包括jar的顶部，容器壁的光泽长短，泥土，jar底部等内容
## 6 后记
总得来说，由于我个人对html类的语言不是很熟悉，感觉这一节课学习下来主要是跟着教案复习和阅读代码，并没有完全掌握html的精髓，后期还依赖于多多进行实践`,ky=`---
layout: post
title: "WSL使用指南"
date:   2025-01-04
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录本人在使用WSL时遇到的问题以及解决方案，以及一些常用的命令。
<!-- more -->


## 0 前言

最近在进行项目环境测试的时候，遇见了路径的一些问题，开发环境的路径都是基于Linux的，因此在Windows下的路径就会出现一些问题，而本人在调试的时候不打算使用服务器，因此折腾起了wsl

## 1 wsl的安装

在powershell中输入WSL的以下命令：

    wsl --install

安装特定的Linux发行版可以通过微软商店来实现

## 2 git的配置

首先得确认所使用的Linux发行版是否有git

    git --version

如果有的话，那么就会有git的版本信息，没有的话可以用以下命令进行安装：（Ubuntu）

~~~
sudo apt update
sudo apt install git
~~~

接下来就是在命令行中配置git的账户：

~~~
# 配置用户名
git config --global user.name "Your Name"

# 配置邮箱
git config --global user.email "your.email@example.com"
~~~

这里的\`global\`是全局设置账户的意思，如果不想要全局设置的话可以省略。这里的用户名和配置的邮箱如果要在GitHub中使用的话最好和GitHub的注册用户名以及邮箱保持一致

（option）GitHub的ssh配置

生成一个ssh密钥：

~~~
ssh-keygen -t rsa -b 4096 -C "your.email@example.com"
~~~

这里的邮箱就是你的GitHub的邮箱

将上述生成的ssh公私钥匙对中的私钥部署到.ssh文件夹中：（个人倾向于直接在vscode的ssh里手动移动）

~~~
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_rsa
~~~

最后复制公钥内容并在GitHub的settings-->SSH and GPG keys -> New SSH key中创建新的公钥，将复制的公钥粘贴进去

测试是否配置成功：

~~~
ssh -T git@github.com
~~~

之后就可以比较方便的使用ssh进行git的操作后push或者pull到GitHub了

## 3 copilot的配置

    因为使用copilot的时候往往会遇到网络问题而导致无法链接，相对于折腾wsl的网络，更合适的是直接在vscode中配置copilot为ui模式：  
    
    1. 在vscode中安装copilot插件
    2. 在vscode的设置中输入remote.extensionKind，打开设置的json文件，添加以下的内容：
    \`\`\`json
    "remote.extensionKind": {
            "GitHub.copilot-chat": [
        "ui"
    ],
        "GitHub.copilot": [
            "ui"
        ],
    }
    \`\`\`
    然后重启wsl的vscode即可

`,Sy=`---
layout: post
title: "web开发实战-花艺瓶项目"
date:   2025-01-16
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍介绍如何使用html+css+js实现一个花艺瓶的项目，包括网页前端的布局以及实现对于网页中对象的拖动操作
<!-- more -->
## 0 背景
在学习和了解了JS的基本语法之后，我们可以开始着手第一个前端项目，这里参考的是[微软的前端开发学习指南](https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/3-terrarium/3-intro-to-DOM-and-closures)，在这个项目中我们将根据其指导完成制作一个花艺瓶，具有基本的布局以及对每一种植物进行拖动的操作。具体的项目流程由以下的三个操作构成，分别是通过html构造基本的网页元素对象，然后使用css对网页对象的样式，包括颜色和操作属性，最后通过JavaScript来实现对网页对象的拖动等操作。
## 1 html基本布局
首先构造html的基本结构，为了浏览器兼容性的需要，我们采用的是\`<!DOCTYPE html>\`，html的文件格式开局如下：
~~~
<!DOCTYPE html>
<html>
    // details
</html>
~~~
在html文件中，主要包括<head>,<body>和<footer>三个部分，我们依次进行介绍：
### 1.1 head部分
head部分一般包括以下的几个基本的内容，分别是网页的标题<title>，网页的字符集<meta charset>，浏览器的兼容性与渲染方式<meta http-equiv="X-UA-Compatible" content="IE=edge" />，以及网页的视图缩放信息<meta name="viewport" content="width=device-width, initial-scale=1" />，具体的代码如下：
~~~
<head>
    <title>Welcome to my Terrarium</title>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge"  />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
~~~
其中<tilte></title>内的内容是网页的标题，<meta charset="utf-8" />意味着我们选用的网页字符是utf-8以便兼容尽可能多的语言，第三行是保证网页使用最新的浏览器渲染方式，最后一行则是保证网页在不同的设备上能够正常显示。
### 1.2 footer部分
网页的footer部分主要用于放置网页的版权信息，一般是放在网页的最底部，与body部分一样可以插入一些标签对象或者其他的对象来实现信息的展示
### 1.3 body部分
body部分是网页的主要部分，包括了网页的主要内容，一般是通过标签对象来实现的，比如\`<div>\`,\`<img>\`,\`<p>\`等等，这些标签对象可以通过css来进行样式的设计，也可以通过js来实现一些交互操作，比如拖动等操作。  
在花艺瓶项目中，我们仅有12个植物的贴图的素材是需要放置的，我们按照以下的结构来进行构建，分别是左边的容器对象("left-container" div)，右边的容器对象("right-container" div)，以及花艺瓶对象（terrarium div）：  
对于花艺瓶terrarium，有以下的几个子类：  
\`jar-top\`,\`jar-walls\`,\`jar-bottom\`，分别是花艺瓶的顶部，墙壁和底部，除此之外还有尘土\`dirt\`对象
~~~
<div id="terrarium">
    <div class="jar-top"></div>
    <div class="jar-walls">
        <div class="jar-glossy-long"></div>
        <div class="jar-glossy-short"></div>
    </div>
    <div class="dirt"></div>
    <div class="jar-bottom"></div>
</div>
~~~
而对于左右容器来说，每个容器内有7个贴图植物对象，两个容器在同一个page对象之中：
~~~
<div id="page">
    <div id="left-container" class="container">
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant1" src="./images/plant1.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant2" src="./images/plant2.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant3" src="./images/plant3.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant4" src="./images/plant4.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant5" src="./images/plant5.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant6" src="./images/plant6.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant7" src="./images/plant7.png" />
        </div>
    </div>
    <div id="right-container" class="container">
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant8" src="./images/plant8.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant9" src="./images/plant9.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant10" src="./images/plant10.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant11" src="./images/plant11.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant12" src="./images/plant12.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant13" src="./images/plant13.png" />
        </div>
        <div class="plant-holder">
            <img class="plant" alt="plant" id="plant14" src="./images/plant14.png" />
        </div>
    </div>
</div>
~~~
通过上述的操作我们便可以看到网页的基本元素都具备了，接下来需要做的就是美化网页布局，这也就需要我们的css样式设计了。
## 2 css样式设计
为了能够引入设计好的css样式，我们需要在head部分引入css文件，具体的代码如下：
~~~
<head>
    <link rel="stylesheet" href="./style.css" />
    \\\\other contents
</head>
~~~
此时index.html的head部分就变成了：
~~~
    <head>
        <link rel="stylesheet" href="./style.css" />
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
~~~
接下来我们就可以在style.css文件中对于对象进行样式设计了。
首先时标题标签\`h1\`:
~~~
h1 {
	color: #3a241d;
	text-align: center;
}
~~~
其次是对于body标签整体进行字体的设置：
~~~
body {
	font-family: helvetica, arial, sans-serif;
}
~~~
需要注意的是，对于标签、对象和id选择器的css格式是不一样的，标签的话直接就是标签名{}即可，而对象则是 .object{}，id则是#id{}
例如对于左右容器这俩id选择器来说：
~~~
#left-container {
	background-color: #eee;
	width: 15%;
	left: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}

#right-container {
	background-color: #eee;
	width: 15%;
	right: 0px;
	top: 0px;
	position: absolute;
	height: 100%;
	padding: 10px;
}
~~~
而对于花艺瓶terrarium的子对象来说则是：
~~~
.jar-walls {
	height: 80%;
	width: 60%;
	background: #d1e1df;
	border-radius: 1rem;
	position: absolute;
	bottom: 0.5%;
	left: 20%;
	opacity: 0.5;
	z-index: 1;
}

.jar-top {
	width: 50%;
	height: 5%;
	background: #d1e1df;
	position: absolute;
	bottom: 80.5%;
	left: 25%;
	opacity: 0.7;
	z-index: 1;
}

.jar-bottom {
	width: 50%;
	height: 1%;
	background: #d1e1df;
	position: absolute;
	bottom: 0%;
	left: 25%;
	opacity: 0.7;
}

.dirt {
	width: 60%;
	height: 5%;
	background: #3a241d;
	position: absolute;
	border-radius: 0 0 1rem 1rem;
	bottom: 1%;
	left: 20%;
	opacity: 0.7;
	z-index: -1;
}
~~~
除此之外还需要对植物对象进行格式设置，比如：
~~~
.plant-holder {
	position: relative;
	height: 13%;
	left: -10px;
}

.plant {
	position: absolute;
	max-width: 150%;
	max-height: 150%;
	z-index: 2;
}
~~~
## 3 js实现拖动操作
要实现js操作还得把js的相关文件引入到html文件中，具体的代码如下：
~~~
<script src="./script.js" defer><\/script>
~~~
此时index.html的head部分就变成了：
~~~
    <head>
        <link rel="stylesheet" href="./style.css" />
        <script src="./script.js" defer><\/script>
        <title>welcome to my Terrarium</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1">
    </head>
~~~
那么对于我们的目标移动来说，有以下几个问题：
记录鼠标的原始位置，当鼠标按下时，记录鼠标的位置，当鼠标移动时，计算鼠标的移动距离，然后将对象移动到新的位置，当鼠标松开时，停止移动。最后就是如果没有拖动行为，就停止记录。   
将上述操作应用到每一个plant元素中即可。  
要实现上述的步骤，可以使用以下代码：
~~~
function dragElement(terrariumElement) {
    // 初始化四个变量，用于保存指针拖动的位置
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  
    // 当用户按下鼠标或触摸屏幕时触发
    terrariumElement.onpointerdown = pointerDrag;
  
    function pointerDrag(e) {
      e.preventDefault(); // 防止默认行为（如选中文本等）
  
      // 获取指针的初始位置
      pos3 = e.clientX; // 指针的 X 坐标
      pos4 = e.clientY; // 指针的 Y 坐标
  
      // 当指针移动时触发 pointerMove
      document.onpointermove = pointerMove;
  
      // 当指针抬起时停止拖动
      document.onpointerup = stopDrag;
    }
  
    function pointerMove(e) {
      // 计算指针的移动距离
      pos1 = pos3 - e.clientX; // 横向移动距离
      pos2 = pos4 - e.clientY; // 纵向移动距离
      pos3 = e.clientX; // 更新指针的当前 X 坐标
      pos4 = e.clientY; // 更新指针的当前 Y 坐标
  
      // 更新元素的位置（通过 CSS 的 \`top\` 和 \`left\` 属性）
      terrariumElement.style.top = (terrariumElement.offsetTop - pos2) + "px";
      terrariumElement.style.left = (terrariumElement.offsetLeft - pos1) + "px";
    }
  
    function stopDrag() {
      // 解除事件监听器，防止不必要的性能消耗
      document.onpointermove = null;
      document.onpointerup = null;
    }
  }
~~~
通过这样来根据拖动操作更新植物贴图拖动后的位置，进而实现对于植物贴图的拖动操作。在设置好上述方法后，再将其应用于每一个植物贴图对象：
~~~
// 获取所有具有 "plant" 类的元素
const plants = document.querySelectorAll(".plant");

// 为每个 plant 元素启用拖动功能
plants.forEach((plant) => {
  // 确保元素有 position 样式
  plant.style.position = "absolute";
  dragElement(plant);
});
~~~
最后在浏览器中就可以得到上述的花艺瓶了
## 4 DOM
DOM 是 Document Object Model（文档对象模型）的缩写，是 HTML 和 XML 文档的编程接口。它将文档（如 HTML 页面）表示为一个 树状结构，使得开发者可以通过编程语言（如 JavaScript）访问和操作文档的内容、结构和样式。

可以简单理解为：DOM 是浏览器提供的一种方式，让开发者可以用代码操作网页的结构和内容。  

document 是 DOM 的入口点，表示整个 HTML 文档。通过它可以访问页面内容和操作元素。

常用功能：

获取元素：
document.getElementById('id')：通过 ID 获取元素。
document.querySelector('selector')：通过 CSS 选择器获取元素。
document.querySelectorAll('selector')：获取所有匹配的元素。
创建元素：
document.createElement('tagName')：创建一个新元素。
访问属性：
document.title：访问或修改页面标题。
document.body：访问 <body> 元素。

也就是实际上是方便使用js来操作html的元素，比如获取元素，创建元素，访问属性等等。
## 5 闭包
闭包是指函数和函数内部能访问到的变量的组合。在 JavaScript 中，函数是一等公民，可以作为参数传递给其他函数，也可以作为其他函数的返回值。当函数返回时，它的作用域链并不会被销毁，因此内部函数仍然可以访问外部函数的变量。这种机制就是闭包。`,Dy=`---
layout: post
title: "Anomalous Diffusion"
date:   2025-02-13
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---
该笔记主要介绍异常扩散模型以及相关数据集
<!-- more -->
## 0 背景与关键词
在paperwithcode.com等网站搜索关键词\`anomalous diffusion\`可以迅速而准确的找到相关的论文和数据集，其中较为经典的就是andi数据集  

![image-20250213145210653](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145210653.png)

andi数据集可以使用python来生成基于FBM, CTRW, LW, SBM等模型的轨迹数据  

> AnDi: The Anomalous Diffusion Challenge
该数据集是基于上述的模型生成的，且有一个挑战的网站http://www.andi-challenge.org/    
![image-20250213145117627](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145117627.png)

## 1 何为异常扩散

正常的粒子在空间中的运动是服从布朗运动的，其粒子运动轨迹的均方位移与时间t呈现线性：
$$
<r^2(t)> = 4Dt^{\\alpha}
$$
其中，$D$是扩散系数，$t$是时间，$\\alpha=1$。  
而当粒子运动轨迹的均方位移和时间t不在呈现一次方的关系，那么此时我们称之为异常扩散。
异常扩散有两种情况，一种是亚扩散，即$\\alpha<1$，另一种是超扩散，即$\\alpha>1$。一般而言，亚扩散对应与粒子的运动受到了环境的阻碍，而超扩散对应于粒子的运动受到了环境的驱动（或者自驱动比如细菌的运动）。

![image-20250213145310987](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145310987.png)

## 2 异常扩散的轨迹分析
那么在实际运动中，我们可能会遇到一条轨迹并不是全部/时时刻刻都是布朗运动或者服从某一种扩散模型，而是呈现出一定的阶段性，因此在一情况下，异常扩散领域的一个任务就是对轨迹进行segmentation，通过对轨迹在更小的时间范围内的分割与分辨异常扩散模型，进而实现了对轨迹异常扩散动力学分析的时间分辨率的提高。  
当然，除此之外还有其他的挑战，例如根据轨迹确定其可能符合的扩散模型（如FBM, CTRW, LW, SBM等），以及预测估计轨迹的异常扩散参数$D$和$\\alpha$等。   

## 3 Relative Papers

### 3.1 一些常见的方法

基于RNN/LSTM

![image-20250213145620558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145620558.png)

基于贝叶斯推断

![image-20250213145651712](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145651712.png)

基于轨迹的图（我理解的是偏向于用cv的方法来做？）

![image-20250213145724814](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250213145724814.png)

相关reference参见：https://physics.paperswithcode.com/paper/objective-comparison-of-methods-to-decode

### 3.2 本课题组相关工作

1. **Extract latent features of single-particle trajectories with historical experience learning**

![gr1_lrg](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/gr1_lrg-1739430087192-3.jpg)
`,Cy=`---
layout: post
title: "阿米洛VBS108键盘使用notes"
date:   2025-02-18
tags: [others]
comments: true
author: junedrinleng
toc: true
---
该笔记主要介绍varmilo keyboard 的一些常见的键位使用
<!-- more -->
## 0 背景
作者于2024年购置了一个阿米洛花旦娘的红轴机械键盘，在购买的时候就被键盘出色的外观和习惯的红轴所打动，但在近一年的使用过程中却遇到了许多的问题，包括但不限于win键突然没响应（笔记本的win键依然可以使用），整个机械键盘被锁定，不知道在哪播放/暂停/切歌、增加/减小音量、镜音，右上角的四个按键分别对应什么等等的问题，在翻阅互联网后也没有解决其中的一些问题，于是今天又特意询问了客服才解决。  
为了避免之后忘记以及方便网友们使用，故写了一篇notes来记录该键盘的使用   

![7cf93c52392f8410e8ecad16c2c4445](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/7cf93c52392f8410e8ecad16c2c4445.png)

## 1 键盘锁定
与cherry的红轴mx250键盘等键盘不同，阿米洛的键盘音量键调节并不在\`Fn\`+\`F2\`上，因此当作者数次尝试\`Fn\`+\`F2\`的结果都是机械键盘直接锁定无法使用。  

出现键盘锁定的情况时，左上角三个指示灯中的第一个会熄灭，这时要解决这个问题只需按住\`Fn\`+\`Del\`即可  

## 2 win键失灵

作为重度win键使用者，win键失灵为我带来了极大的不便（谁家好人桌面没有app，app全收录到了win键菜单里），触发win键失灵（或者说锁定win键）的方法很简单，按住\`Fn\`和其右边的win键就行：  

![IMG_20250218_150028](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/IMG_20250218_150028.jpg)

当然，一般情况下触发都非常的偶然，所以要解锁也只需要按上图红色框中的两个键即可（先按住\`Fn\`再按住win）  

## 3 音量调节与播放控制

我对于阿米洛花旦娘键盘唯一不满的地方就是这些功能键并没有标注，以至于每次按\`Fn\`都是生死难料，而阿米洛的说明书也很草率：  

![image-20250218150253087](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250218150253087.png)

这上面的播放键这些到底是哪个呢？  

在此，笔者重新编写了上述的表格，以便日常使用：  

| 按键组合   | 结果      |
| ---------- | --------- |
| \`Fn\`+\`F7\`  | 上一首    |
| \`Fn\`+\`F8\`  | 暂停/播放 |
| \`Fn\`+\`F9\`  | 下一首    |
| \`Fn\`+\`F10\` | 静音      |
| \`Fn\`+\`F11\` | 音量降低  |
| \`Fn\`+\`F12\` | 音量增加  |

## 4 功能键使用说明

![IMG_20250218_150757](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/IMG_20250218_150757-1739862454781-2.jpg)

键盘右上角的四个按钮从左到右依次的功能为：

| 按键位置                | 功能           |
| ----------------------- | -------------- |
| \`右上角左数第1个功能键\` | 打开播放器     |
| \`右上角左数第2个功能键\` | 打开浏览器     |
| \`右上角左数第3个功能键\` | 打开计算器     |
| \`右上角左数第4个功能键\` | 打开文件管理器 |

## 5 附录

官网说明书地址：[阿米洛VBS108说明书](https://wds-service-1258344699.file.myqcloud.com/20/18065/pdf/17332758789244eac810e6ad3cdfd282becde094ff070.pdf)
`,_y=`---
layout: post
title: "在阿里云服务器上搭建minecraft服务器"
date:   2025-02-18
tags: [others]
comments: true
author: junedrinleng
toc: true
---
该笔记主要介绍如何在阿里云服务器上搭建我的世界服务器
<!-- more -->

**## mc服务器配置**

### step 1

从官网下载合适的版本，然后解压

\`\`\`
unzip bedrock-server-linux.zip
\`\`\`

配置好\`server.properties\`文件,根据端口在云服务器厂商的端口规则里添加端口（对于我的世界一般是19132端口），**需要注意的是，云服务厂商打开端口到实际可以访问需要一定的时间**

### step 2

检查Ubuntu系统的防火墙是否打开了这个端口，如果没有打开则需要打开

\`\`\`
sudo ufw status
\`\`\`

同时在Ubuntu服务器里添加端口规则(本人配置了半天Ubuntu端口的安全规则都有问题，最后把把Ubuntu的防火墙关闭就解决了）：

\`\`\`
sudo ufw allow 19132/tcp

sudo ufw allow 19132/udp

sudo ufw reload
\`\`\`

### step 3

然后启动mc服务器：（利用pm2）

\`\`\`
LD_LIBRARY_PATH=. ./bedrock_server

pm2 start bedrock_server --name "minecraft-server"

pm2 save
\`\`\`

### others

想与pm2管理的程序进行命令行交互：

\`\`\`
pm2 list

pm2 attach 进程号
\`\`\`

例如：\`pm2 attach 7\`

然后就可以进行命令行的交互了（例如添加管理员）`,My=`---
layout: post
title: "水凝胶粘弹性相关机制"
date:   2025-02-20
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍AFM的Viscoelastic Cell Microenvironment: Hydrogel-Based Strategy for Recapitulating Dynamic ECM Mechanics这篇文章
<!-- more -->

## 1 overview

![image-20250220105451472](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250220105451472.png)

doi is here : https://doi.org/10.1002/adfm.202100848

## 2 abstract

本地细胞外基质（ECM）通常表现出动态的机械性能，并以粘弹性行为（例如，应力松弛和蠕变）表示对变形或机械载荷的时间依赖性响应。 

ECM的粘弹性在发育，稳态和组织再生中起着至关重要的作用，并且最近也认识到其在疾病进展中的影响。具有可调粘弹性特性的水凝胶具有巨大的希望，可以概括本天然ECM中发现的时间依赖性力学，这些力学最近被用于调节细胞行为和指导细胞命运。

在这里，组织粘弹性的重要性首先突出显示，汇总了**水凝胶粘弹性的分子机制**，并**回顾了宏观和微观计算中使用的表征技术**。然后，通过各种交联策略，粘弹性细胞微环境的工程技术及其对细胞行为和命运的实质性影响，并随后讨论了基本的机械生物学机制，从而通过不同的交联策略，粘弹性细胞微环境的工程进行工程进行了可调的粘弹性的最新进展进行了讨论。最后，提出了关于粘弹性水凝胶的设计和调制的持续挑战和未来观点以及对粘弹性细胞微环境的细胞反应的机械生物学机制。

> **comments:** 
>
> Here the importance of tissue viscoelasticity is first highlighted, the molecular mechanisms of hydrogel viscoelasticity are summarized, and characterization techniques used at the macroscale and microscale are reviewed. 
>
> 这里的first用的容易被审稿人怼（风险用词，有点过于吹了）

## 3 details

![adfm202100848-fig-0001-m](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adfm202100848-fig-0001-m-1740020808447-3.jpg)

介绍细胞相互作用的一些常见类型（细胞分化，迁徙etc），以及一些常见的作用力包括离子键，氢键，金属配体相互作用，动态共价键等等

![adfm202100848-fig-0002-m](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adfm202100848-fig-0002-m.jpg)

这里的$\\tan\\ \\delta$是储能模量和损耗模量的比值，做了一个类似于各个组织器官粘弹性的分布图

![adfm202100848-fig-0003-m](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adfm202100848-fig-0003-m.jpg)

这里比较好的就在于这里总结了从macroscale到micro scale的一些表征方式，以及active and passive的方式

关于水凝胶还有一些好玩的：

比如钙离子的调控交联/尿素对水凝胶网络的影响

![adfm202100848-fig-0004-m](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adfm202100848-fig-0004-m.jpg)

![adfm202100848-fig-0006-m](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adfm202100848-fig-0006-m.jpg)`,Ey=`---
layout: post
title: "微流变学笔记1"
date:   2025-02-25
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍Microrheology by Eric M. Furst (Author), Todd M. Squires (Author)一书，本note是该书introduction部分的笔记
<!-- more -->

## Microrheology

微流变学是一类表征材料的流变学的工具，常见的微流变的特征包括弹性和粘性，一般两者的表现呈现出如下图所示的特点：

![image-20250225174219068](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225174219068.png)

可以发现，对于纯viscous fluid来说，粒子经过外界里产生位移之后，如果外界力撤去那么粒子就停留在被力拉扯后的位置了；而对于elastic solid而言，如果外界力撤销，那么粒子则会回到最初的位置。

当然，现实中可能的流体既有viscous又有elastic，所以因此也产生了viscoelastic。

### Active and passive microrheology

微流变早期的测量方式主要呈现出以下特征：测量探针粒子嵌入在材料中，在响应力时的运动，进而推断材料的响应特性

当有外界的例如magnetic或者gravitational or centrifugal 相互作用对粒子产生扰动的时候，这就是active的微流变学; 相反，如果没有，则是被动微流变学。

> 题外话：TG Mason居然是被动微流变的祖师爷级别的存在
>
> The other class, called passive microrheology, is a
> more recent development, and began with the seminal work of Mason
> and Weitz (1995) and Gittes et al. (1997)

被动微流变学采用极小的微流变探针颗粒（通常仅为微米或更小尺寸），其热波动足够强烈，能够驱动探针产生可测量的运动。这种运动源于周围分子持续的热波动轰击，使探针在环境中产生随机运动。由于受到这些随机力的作用，颗粒会在不同方向和强度的作用下运动，且这一过程涵盖了多个时间尺度。随机力的大小以及颗粒对这些力的响应方式取决于材料的特性。在粘性流体中，被随机力驱动的颗粒通常沿着受力方向产生漂移，其运动轨迹表现为带有平均位移的扩散行为。

**可以认为在粘性流体中，颗粒主要被随机力驱动沿着受力方向产生漂移？**
$$
<\\Delta x^2(t)>=2Dt\\\\
$$

$$
\\zeta = 6 \\pi a \\eta
$$

Stokes计算了流体动力抗性ζ，如（2）。

结合爱因斯坦和斯图克斯可以得到：
$$
D = \\frac{k_B T}{6 \\pi a \\eta}
$$

### 局限与优势

**局限：**

微流变学从一开始就存在一些重要的局限性：其核心技术依赖于追踪材料中小颗粒的运动，因此，这种方法仅适用于**相对柔软的材料**，其模量通常不超过**几百pa**（相当于果冻的刚度）或流动性高于蜂蜜的液体。

**优势：** 小样品量，数据获取容易，灵敏，拓展到频域，原位（Local rheology），实验简单

![image-20250225180117014](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225180117014.png)

微流变学适合小批量，低模量的样品，而大量流变学则更适用于高浓度和高模量的材料。

### 线性与非线性微流变

![image-20250225181136123](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225181136123.png)

剪切应力与应变如上图所示，其中$A_y$是作用面积

如果板间材料为弹性固体，则在施加给定应力后，应变会达到稳定值，不再变化。而如果材料是粘性液体，应变会随时间持续增加，表现为材料不断变形，此时板将以剪切速率 **γ = σ / η** 向右移动。两种行为类似于图 1.1 中探针颗粒的运动方式，分别对应于弹性与粘性特性的力学响应。

**线性响应**： 反映的是材料在偏离平衡态下的微响应（类似于处于平衡的体系被微扰后偏离平衡，然后经过线性响应逐渐回到平衡状态）

**非线性响应**：这往往对应着的是材料收到的应力超过了线性响应区域，进一步的应力导致材料内部的结构发生破坏

Cox – Merz规则是与频率相关的复杂粘度有关的经验关系：
$$
\\eta^*(\\omega) = \\frac{G^*(\\omega)}{i\\omega}
$$
线性响应的测量参见书本的1.2.2

![image-20250225182314762](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225182314762.png)

### 复数剪切模量G*

一般可以通过流变仪施加震荡应变：
$$
\\gamma(t) = \\gamma_0 e^{i\\omega t}
$$
那么材料会对震荡应变产生响应，进而产生应力：
$$
\\sigma(t) = \\sigma_0 e^{i(\\omega t + \\delta)}
$$
进而根据应力和应变得到频率依赖的复数剪切模量：
$$
G^*(\\omega) = \\frac{\\sigma(t)}{\\gamma(t)} = \\frac{\\sigma_0 e^{i\\delta}}{\\gamma_0}
$$
一般而言会将复数剪切模量分成实部和虚部：
$$
G^*(\\omega) = G'(\\omega) + iG''(\\omega)
$$
其中，弹性（储能）模量 $G'(\\omega)$；粘性（损耗）模量 $G''(\\omega)$

储能模量描述了材料在特定频率下发生弹性形变所需的（可恢复的）能量。如果 $G'(\\omega)$ 较高，说明材料的弹性行为占主导，类似于固体。

损耗模量描述了材料在特定频率下发生粘性流动时（不可恢复的）能量损耗。如果 $G''(\\omega)$较高，说明材料的粘性行为占主导，类似于液体。

除此之外还有相位角：
$$
\\tan \\delta(\\omega) = \\frac{G''(\\omega)}{G'(\\omega)}
$$
纯弹性材料的$δ= 0$范围，其应力随应变而变化，而粘性流体的$δ=π/2$的变化，其应力为90度，与施加的应变（当然，这意味着，这意味着，这意味着，这意味着$tanδ$的差异为$g'→0$）

## 胶体（Colloidal）粒子

本节主要回顾胶体粒子的物理化学特性

### 作为探针的胶体粒子

胶体粒子作为探针，需要满足以下的三个特征：

- 颗粒尺寸和形状具有均匀性
- 探针要具有稳定性，避免化学降解；同时还需要均匀的分散于介质中反映局部的微流变特性（分散性）
- 表面化学的惰性（避免探针颗粒引入后改变待测介质的原始性质）

`,Ty=`---
layout: post
title: "基于颗粒的粘度检测"
date:   2025-02-25
tags: [SPT]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍基于颗粒的粘度检测，包括基于动态光散射（DLS）技术的和基于粒子图像示踪的（VPT）。本文将从理论和实际计算等部分依次详细介绍和整理。
<!-- more -->

## 基于颗粒实现粘度检测

基于颗粒的粘弹性检测是一种被动微流变技术，通过在待测体系中引入示踪粒子，利用成像或散射检测系统追踪粒子的布朗运动或散射光强变化。随后，通过分析粒子的运动轨迹或自相关函数，计算其扩散系数，并结合斯托克斯-爱因斯坦公式精确推导体系的粘度（viscosity， $\\eta$）。

例如，在动态光散射技术中，通过检测探针粒子散射光强的时间变化，计算其均方位移（Mean Squared Displacement, MSD）：

![3b0e3fdb6bb894dbb9f03d0a477207d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/3b0e3fdb6bb894dbb9f03d0a477207d.jpg)

> B. A. Krajina *et al.*, *Science Advances*. **7**, eabe1969 (2021).

![image-20250225113547131](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250225113547131.png)

> B. A. Krajina *et al.*, *ACS Cent. Sci.* **3**, 1294–1303 (2017).

而在粒子图像示踪中，则直接根据粒子的轨迹信息计算均方位移

通过MSD拟合得到扩散系数D和$\\alpha$:
$$
<r^2(t)>=4Dt^\\alpha
$$
![cedeac4b3c30c76146455339c956476](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cedeac4b3c30c76146455339c956476.png)

> *Journal of Molecular Biology*. **430**, 4443–4455 (2018).

然后根据利用扩散系数得到粘度：
$$
\\eta_t=\\frac{k_B T}{6\\pi r_pD_t}\\\\
\\eta_r=\\frac{k_B T}{8\\pi r_p^3D_r}\\\\
$$
其中的角标r表示旋转，$\\eta_r$是基于旋转扩散系数$D_r$测量的粘度，而$\\eta_t$是基于平移扩散系数$D_t$测量出的粘度：

![08dc1769aec2b4436e826aa4ef64025](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/08dc1769aec2b4436e826aa4ef64025.png)

> M. Unni *et al.*, *Science Advances* (2021), doi:[10.1126/sciadv.abf8467](https://doi.org/10.1126/sciadv.abf8467).



`,zy=`---
layout: post
title: "PINN基础笔记"
date:   2025-03-12
tags: [ML&DL]
comments: true
author: junedrinleng
toc: true
---

该笔记主要介绍物理信息嵌入的神经网络（physics informed neural network），包括基本概念和简单的pytorch实现。
<!-- more -->

## 1 研究背景

以往描述复杂多尺度系统动力学往往采用有限差分、有限元、光谱亦或是无网络方法数值求解偏微分方程

这些传统的研究方法面临着代价高昂、无法解决缺失、间隙或者噪声边界条件等问题

深度学习的有点在于数据特征的自动选取，但由于其黑箱的性质在物理上不一致性或不可信较多（导致较差的泛化能力）

现有的大概有三种匹配形式：

1. 小数据+了解所有的物理知识
2. **数据类型中等，但缺少一些参数值或者偏微分方程的项**
3. 大数据——完全由数据驱动，不包含任何物理知识

## 2 PINN的优点

2.1 应对不完美的模型和噪声数据

2.2 小数据领域上由较强的泛化能力

2.3 更好的阐释深度学习、不确定性的量化

2.4 高位数据的处理

## 3 如何嵌入物理——观测与归纳

1. 足够的数据可以包含学习任务的所有的数据集——理想情况（面临数据收集的成本）
2. 将方程进行求解得到求解表达式，根据表达式来设计输入之后的运算，但这面临着方程求解的难度
3. 将偏微分方程嵌入神经网络的损失函数——控制输入和输出之间的网络参数训练过程、使其和输入变量保持一定的物理关系（利用自动求导）

## 4 pytorch的实现

![image-20240927102511146](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102511146.png)

这里给方程组是随便写的，其中第二个方程是边界条件

首先是二维变成一维：

![image-20240927102835709](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102835709.png)

然后需要设计梯度计算的部分

![image-20240927102934822](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927102934822.png)

order是求几阶导

接下来就是基于上述的两个方程来构建损失函数

 ![image-20240927103448178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927103448178.png)

![image-20240927104444975](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20240927104444975.png)

## 5 PINN的应用及局限性

![image-20250312102627371](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250312102627371.png)`,Ay=`---
layout: post
title: "Java课程学习笔记1"
date:   2025-03-19
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第一小节的基础知识内容
<!-- more -->

## 1 计算机基本概念

计算机的常见的一个方法：枚举法

但枚举法往往很慢，为了加速计算往往设计了许多其他的方法，例如二分法等等，或者更加复杂优化的方法

关于程序的执行：

![image-20250319193546157](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319193546157.png)

解释器每次根据代码进行逐行执行，而编译器则是根据代码将其编译成机器码，然后直接用机器码运行

需要注意的是，语言的解释和编译是没有具体区分的，只是根据习惯往往会选择比如说python是解释器，c用编译器。

在今天，这两种方式没有很明显的区别。
## 2 java编程软件的选择

这里用来编写代码的编辑器是idea（视频里推荐的是eclipse，但考虑到实际使用而言，现在一般用的更多的都是idea）

对于软件的安装首先需要jdk，原视频推荐的是jre，但我在查阅了知乎之后感觉不如直接安装全套的内容：

![image-20250319225354887](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319225354887.png)

from 知乎 ： [JRE 和 JDK 的区别是什么？ - 一直在路上的回答 - 知乎](https://www.zhihu.com/question/20317448/answer/14737358)

这里我选择的是[JDK24](https://www.oracle.com/java/technologies/downloads/#jdk24-windows)：

![image-20250319225517937](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319225517937.png)

选择其中的x64 installer

之后一路安装就可以了，在安装了java运行环境jdk之后，就可以安装编辑器idea了：

[安装链接](https://www.jetbrains.com/idea/download/other.html),这里我选择的是idea2021（其实就是瞎选的）

在安装好并激活好之后，create a new project：

![image-20250319225815681](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319225815681.png)

需要注意的是，需要选择好jdk（类似于pycharm里配置好环境），如果你已经安装了jdk的话，idea会自动检测已有的环境（detecting jdk），下图中显示的就是我们刚刚安装的 jdk 24
![image-20250319225952432](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319225952432.png)

这里之后会显示如下的界面：

![image-20250319230756814](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319230756814.png)

意思是根据模板创建，其中的\`Command Line App\`会自动创建一个带有\`main\`方法的类，对于hello world来说不需要根据模板创建应该

接下来就是这个project的location：

![image-20250319230904675](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319230904675.png)

## 3 hello world

![image-20250319232542960](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319232542960.png)

编写之后可以发现，下面有warning，这是由于自 **Java 17** 及之后的版本，Oracle 对 Java 的原生方法（如 \`System.load\`）引入了更严格的安全限制，导致 IDEA 在运行 Java 代码时会触发警告。

为了解决这个问题，需要在\`Run → Edit Configurations\`中进行配置：

![image-20250319232716051](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319232716051.png)

在add VM 里加上\`--enable-native-access=ALL-UNNAMED\`

再运行就没有warning了：
![image-20250319232813512](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319232813512.png)

> tips: public sraric void 这个内容可以直接psvm快捷键实现添加

需要注意的是，每一句的要以英文的分号结尾（和c一样），没有的话会报错

但输出中文的时候面临乱码：

![image-20250319234710317](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319234710317.png)

应该怎么解决呢，有以下的几步：

按照以下的内容全部变成utf-8

![image-20250319234737940](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319234737940.png)

![image-20250319234905198](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319234905198.png)

然后还要修改启动配置：

![image-20250319235004233](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319235004233.png)

添加最后一行：

![image-20250319235051454](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319235051454.png)

上述的方法仅适用于jdk18以前的内容，jdk18之后内部的字符集已经变成了gbk字符集

现在只需要修改项目启动的参数为gbk编码：

还是在run-edit configuration：

![image-20250319235711753](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319235711753.png)

在这里的add VM  options 里加上\`-Dfile.encoding=GBK\` ,特别需要注意这里要改成**=GBK**

![image-20250319235730540](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250319235730540.png)

需要注意的是刚刚改的idea 启动参数不要修改，就在这修改就行了

> reference: [P00014-基于JDK21中IDEA控制台中文输出乱码](https://www.bilibili.com/video/BV1hM411R7Pd/?share_source=copy_web)

## 4 输入内容

~~~
import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
        System.out.println("你好");
        Scanner in = new Scanner(System.in);
        System.out.println(in.nextLine());
    }
}
~~~

这里的import是自动的

如果要加一些固定字符串，和python类似可以，可以用加号：

~~~
import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
        System.out.println("你好");
        Scanner in = new Scanner(System.in);
        System.out.println("echo:"+in.nextLine());
    }
}
															
~~~

![image-20250320001149761](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320001149761.png)
`,Py=`---
layout: post
title: "Java课程学习笔记2"
date:   2025-03-20
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第一小节的变量、赋值以及浮点数等相关知识
<!-- more -->

## 1 变量

~~~
import java.util.Scanner;

public class Hello {
    public static void main(String[] args) {
//        System.out.println("你好");
        Scanner in = new Scanner(System.in);
        System.out.println("echo:"+in.nextLine());
//        System.out.println("2+3="+2+3);
//        System.out.println("2+3="+(2+3));
        System.out.println(in.nextInt());
    }
}
~~~
这里的\`in.nextLine()\`就是读取用户输入的整数，但是需要注意的是这里有两个\`in.nextLine()\`所以实际运行的时候会要你输入两个数字

![image-20250320103548061](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320103548061.png)

但实际过程中，我们一般希望的是用户输入一次，就可以了，而不是每次调用这个输入的内容就要重新输入

在java中，定义变量以以下的形式来定义：

![image-20250320103734234](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320103734234.png)

需要注意的是，变量在定义之后这个变量的类型就不变了，一开始定义的是int那这个变量之后就只能是int了

## 2 赋值

在计算机中，＝代表赋值动作而非数学中的等于：

a=6 实际上是： a <-- 6

这也就意味着对于计算机的赋值中，赋值并没有交换律

如果在赋值变量前就使用变量，此时就报错了：

![image-20250320104252848](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320104252848.png)

这是因为变量在使用前都需要被初始化，有时候也可以直接在定义的时候就初始化：

![image-20250320104417936](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320104417936.png)

例如上图中的amount

在print的时候，只需要用字符串连接符链接即可：

![image-20250320104718006](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320104718006.png)

如果某个字母对应的变量基本不变，那么我们也可以将其定义为常量，例如将int amount；这个amount变量定义为常量可以用\`final int amount=100;\`

![image-20250320104908064](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320104908064.png)

如果两个变量都需要输入则每个变量都需要把\`in.nextln()\`里的内容赋值，我们要对输入加一些提示词时可以用\`System.out.print\`其相较于println而言没有换行

![image-20250320105348061](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320105348061.png)

## 3 浮点数——身高换算器

刚刚所有的内容都是基于整型的，所以如果直接用整型进行运算只能得到整数：

![image-20250320200144646](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320200144646.png)

只要在运算中有一个浮点数，那么运算就会变为浮点数了，当然也可以直接用double来定义

![image-20250320200926823](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320200926823.png)

需要注意的是，相较于浮点数，整数的运算结果更精确，运算速度也更快

## 4 运算优先级

![image-20250320201056534](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320201056534.png)

实在弄不清优先级，就加括号吧……

需要注意的是，单目运算符都是优先级最高的：

![image-20250320201435411](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320201435411.png)

其实就是正负号，那自然的逻辑里也是如此

## 5 类型的转换

![image-20250320201644901](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320201644901.png)

这里的计算结果往往有许多位的小数，而一般我们都是170cm这种，所以需要将其进行类型转换：

~~~
import java.util.Scanner;

public class inch {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        double inch,foot;
        System.out.print("请输入英尺");
        foot=in.nextDouble();
        System.out.print("请输入英寸");
        inch=in.nextDouble();
        System.out.println((int)(100*0.3046*(foot+inch/12))+"cm");
    }
}

~~~

可以使用\`(int)(float value)\` 将浮点数转化为整数，且这种转化是生成新数，并不会影响原先的数的值
`,Ny=`---
layout: post
title: "Java课程学习笔记3"
date:   2025-03-20
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第2小节的比较、关系运算和判断等相关知识
<!-- more -->

## 1 比较

~~~java
import java.util.Scanner;

public class compare {
    public static void main(String[] args) {
        System.out.print("请投入一定金额的货币:");
        Scanner in = new Scanner(System.in);
        int amount=in.nextInt();
        System.out.println(amount>=10);
    }
}
~~~

上述的比较，print的结果是true/false，这就可以利用其进行比较了

## 2 关系运算

![image-20250320203558300](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320203558300.png)

上述关系运算可以计算两个变量之间的关系，如果关系满足，那么结果就是true，反之则是false。

为了保证关系运算符的优先级和正常结果一致，关系运算符一般优先级都比较低，且判断是否相等的一般比其他关系运算符更低

一些小的tips：

~~~
6>5>4 ❌
6>5的结果是true，无法实现true>4的关系运算

a==b>false ❌
这是因为b不能和false进行比较大小
~~~

判断两个浮点数是否相等一般不能直接用\`==\`，这是因为在java中浮点数的计算是有误差的，一般计算都是用两者之差的绝对值小于1e-6来判断是否合适

~~~java
double a=1.0;
double b=0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1+0.1;
System.out.println(Math.abs(a-b)<1e-6);
~~~

## 3 判断

上述的比较运算符只有判断的结果，但是没有对于不同判断结果没有后续的操作

![image-20250320204827024](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320204827024.png)

需要注意的是，if的格式是：

~~~java
if (condition){
	operation;
}
else{
    operation;
}
~~~

需要注意的是，condition的括号后面是不需要加分号的

## 4 级联和嵌套的判断语句

上述的用于对两个数大小的判断是绰绰有余了，但是对于三个数来说就很难说了：

假设有x，y，z三个数，先判断x ？> y 如果true则判断x？>z， 如果\`false\`则需要则说明y>x，那么需要判断y？>z

对于这种多个\`if\`相嵌套的情况，\`else\`总是和最接近的\`if\`进行匹配，如果要和更远的if匹配的话那么需要用大括号。

所以建议if后面始终有大括号，大括号后面再跟\`else\`



除此之外，还有更多级的判断 else if 语句：

~~~
if (condition){
	operation;
}
else if (condition){
	operation
}
else{
    operation;
}
~~~

对于这种多个情况的时候，单一的出口而不是每个\`if\`下的operate都print相对来说会更加方便后续维护

## 5 多路分支

对于上述的多层的\`else if \`的语句可以将其改造成\`switch\` 语句

~~~
switch(type){
	case 1:
        operation;
        break;
	case 2:
        operation;
        break;
    default:
    	operation;
}
~~~

如果任何的\`case\`都不匹配就会用\`default\`的内容，\`switch\`会不断执行\`case\`后面的内容，直到遇到\`break\`为止。\`break\`实质上做的是跳出\`switch\`这件事，如果没有\`break\`则不会跳出\`switch\`：

![image-20250320215427521](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320215427521.png)

例如上图里就是输入1之后，由于\`case1\`和\`case2\`都没有\`break\`，所以执行完\`case1\`的内容之后不会跳出\`switch\`而是继续执行\`case2\`的内容，直到到了\`default\`里有\`break\`才结束\`switch\`

## 6 常见的错误

### 6.1 未加大括号

![image-20250320215856941](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320215856941.png)

### 6.2 if后面加上了分号

\`if \`后面加上分号意味着如果符合 \`if\`后面的条件之后，分号结束了 \`if\` 的内容

### 6.3 =和==误用

需要注意，判断相等用的是\`==\`，而赋值是\`=\`

## 7 关于代码风格

![image-20250320220141004](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320220141004.png)
`,Ly=`---
layout: post
title: "Java课程学习笔记4"
date:   2025-03-20
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第3小节的循环的内容，包括while、do-while等循环的相关知识
<!-- more -->

## 1 循环

对于之前买票的程序，现有的仅能够购买一张票整个程序就结束了，但是实际上应该在现实中是不停的一次次买票，这就需要利用循环的相关知识了：

原有代码如下：

~~~java
import java.util.Scanner;

public class compare {
    public static void main(String[] args) {
        System.out.print("请投入一定金额的货币:");
        Scanner in = new Scanner(System.in);
        int amount=in.nextInt();
        if (amount>=10){
            System.out.println("找零："+(amount-10));
            System.out.println("************************");
            System.out.println("java 城际铁路车票");
            System.out.println("票价：10元");
            System.out.println("************************");
        }
        else {
            System.out.println("您投入的金额不足");
        }
    }
}

~~~

可以看到，只有一次输出车票之后整个系统就结束了，这是并不适合实际使用的：

![image-20250320221215945](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320221215945.png)

为了应对这个内容，我们需要让上述过程反复的进行，这时就可以使用while的语句：

~~~
import java.util.Scanner;

public class compare {
    public static void main(String[] args) {
        System.out.print("请投入一定金额的货币:");
        while(True){
            Scanner in = new Scanner(System.in);
            int amount=in.nextInt();
            if (amount>=10){
                System.out.println("找零："+(amount-10));
                System.out.println("************************");
                System.out.println("java 城际铁路车票");
                System.out.println("票价：10元");
                System.out.println("************************");
            }
            else {
                System.out.println("您投入的金额不足");
            }
       }
    }
}

~~~

这是运行的结果：

![image-20250320221502422](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320221502422.png)

不难发现，我们的程序面临以下的几个问题，首先是单次金额不足但多次投币后达到金额，却无法购买相应的票，其次是我们的程序永远不会停止

为了应对零钱累计，其实很简单，多增加一个累计的变量就行了：

~~~java
import java.util.Scanner;

public class compare {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int balance=0;
        while (true) {
            System.out.print("请投入一定金额的货币:");
            int amount = in.nextInt();
            balance=balance+amount;
            if (balance >= 10) {
                System.out.println("找零：" + (balance - 10));
                System.out.println("************************");
                System.out.println("java 城际铁路车票");
                System.out.println("票价：10元");
                System.out.println("************************");
                balance=0;
            } else {
                System.out.println("您投入的金额不足");
            }
        }
    }
}

~~~

## 2 数数字

~~~
import java.util.Scanner;

public class CountNumber {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("欢迎来到判断位数");
        System.out.print("请输入需要判断的数: ");
        int amount= in.nextInt();
        int count=0;
        while (amount>0)
        {
            amount=amount/10;
            count=count+1;
        }
        System.out.println(count+"位数");
    }
}

~~~

只需要不停的除以10就可以实现了

这里的\`while\`后面的括号就是while循环成立的条件，如果条件成立那么循环始终是运行着的。需要注意的是，只有当循环体结束一次之后才会回到判断条件的地方进行下一次循环是否进行的判断

## 3 循环验证

![image-20250320223853587](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250320223853587.png)

其实不难发现，上述我们的程序对于0以及负数都是不能work的，这是因为对这种情况，input的数连循环体本身的判断条件都不符合，相当于一次循环都没有进行就直接结束了。

## 4 do-while语句

对于上述的情况，我们可以先做一次循环的内容，再进行判断，这时可以使用do-while语句

~~~
do{
	operation;
}while(condition);
~~~

特别需要注意do-while循环里面的while后面的分号

## 5 计数循环

计数循环用于控制循环执行多少次

![image-20250321104955129](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321104955129.png)

这个实际上跑了101轮，最后的count是输出-1，这与\`count>=0\`这个条件设置有关系，如果我们改成\`count>0\`那么此时只会跑100次，且最后一个输出的是0

同时，先\`print\`还是先\`count-1\`也会影响我们输出的范围，比如说此时就会从100开始\`print\`

有时候拿不准循环轮次的时候，可以选用小的循环轮数测试一下

## 6 task：计算平均数

![image-20250321105721518](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321105721518.png)

~~~
import java.util.Scanner;

public class AverageCalculate {
    public static void main(String[] args) {
        int count=0,sum=0,number;
        Scanner in = new Scanner(System.in);
        do {
            System.out.print("请输入数字：");
            number=in.nextInt();
            count=count+1;
            sum=sum+number;
        } while (number!=-1);
        if (count-1>0) {
            double average=(sum+1)*1.0/(count-1);
            System.out.println("平均值是："+average);
        }

    }
}

~~~

一些小细节：一开始就是-1的时候，那么此时count是0

## 7 task：猜数游戏

任务：让计算机想一个数，然后让用户来猜，用户每输入一个数，就告诉他是大了还是小了，直到用户猜中为止，输出用户猜了多少次

那么问题可以分解成以下部分：

- 计算机随机生成一个数
- 计数变量初始化为0
- 让用户输入一个数字
- 计数器迭代+1
- 判断a和随机数的大小，如果随机数大则输出大，反之则输出小
- 如果a和随机数不相等则程序回到让用户输入数字，反之则输出猜中以及次数，最后结束

~~~
//随机数的生成
Math.random() //这里生成的是[0,1);
~~~

最后的代码如下图所示：

~~~
import java.util.Scanner;

public class GuestingNumber {
    public static void main(String[] args) {
        int number=(int)(Math.random()*100+1);
        Scanner in= new Scanner(System.in);
        int input_num,count=0;
        do {
            System.out.print("请输入一个1-100之间的数：");
            input_num=in.nextInt();
            count=count+1;
            if (input_num>number){
                System.out.println("太大了");
            }
            else if (input_num<number){
                System.out.println("太小了");
            }
        }while(input_num != number);
        System.out.println("猜对了,共猜了"+count+"次");
    }
}

~~~

## 8 task：整数分解

利用%10可以获得个位数，而/10则可以抹掉个位数

~~~
import java.util.Scanner;

public class SplitInt {
    public static void main(String[] args) {
        Scanner in= new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = in.nextInt();
        int mod;
        do{
            mod=num%10;
            num=num/10;
            System.out.print(mod);
        }while (num>0);
    }
}

~~~

这种面临的问题是，当遇到700，他倒着输出得到的是007`,Jy=`---
layout: post
title: "Java课程学习笔记5"
date:   2025-03-21
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第4小节的循环的内容，包括for循环，复合赋值、循环控制、多重循环等相关知识
<!-- more -->

## 1 for 循环

很简单的可以用之前的while语句写出代码：

~~~java
import java.util.Scanner;

public class Factor {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num=in.nextInt();
        int factor=1,i=1;
        while(i<=num){
            factor=factor*i;
            i++;
        }
        System.out.println("阶乘是："+factor);
    }
}

~~~

但输入20的阶乘之后其结果是负数：

![image-20250321145519297](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321145519297.png)

这是因为对于int来说，一个int最大是4个bit，也就是最大是$2^{31}-1$。

类比的，我们可以用for循环实现：

~~~
import java.util.Scanner;

public class Factor {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num=in.nextInt();
        int factor=1;
        for(int i=1;i<=num;i++){
            factor=factor*i;
        }
        System.out.println("factor is："+factor);
    }
}

~~~

这样可以把i定义在for循环内部，出了for循环之后就不用了，这很方便使得外面不会影响。同时，for循环看起来更加简洁一些，实际上for和while是可以接近的相互转换的

![image-20250321150219391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321150219391.png)

> 需要注意的是，for循环后面有分号的时候，会报错，这是因为和while一样，有分号导致for循环什么都不做，直接空循环。
>
> 所以建议，不管是for循环还是while循环，我们都还是很有必要加上大括号的

使用区别：如果有明确的使用次数时，用\`for\`，如果这个循环是必须先做一次再循环，那么就使用\`do while\`， 其他情况则可以使用\`while\`

## 2 复合赋值

~~~java
a=a+6 <==> a+=6
a=a*6 <==> a*=6
a*=b+6 <==>a= a*(b+6)
    
除此之外：
i=i+1 可以改写为 i++，实际上++i也表示i=i+1
~~~

需要注意的是，以下情况有所不同：

~~~java
对于 i=6
a=i++ 此时是先i赋值给a，然后再i++， 所以a=6，i=7
a=++i 此时是i先++ 再赋值给a，所以a=7，i=7
~~~

这种使用最好谨小慎微，建议只有i=i+1的时候单独使用，不要像上面一样和a=++i一样和其他的变量混合在一起

## 3 循环控制

task： 判断质数

对于6，我们在2里面就已经可以知道6可以被2整除了，我们没必要继续后面的循环了，所以需要跳出循环，这里就要使用\`break\`跳出循环：

~~~java
import java.util.Scanner;

public class JudgePrimeNumber {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.print("Enter a number: ");
        int num = in.nextInt();
        if (num<2){
            System.out.println(num + " can not decide whether it is prime number or not");
        }
        else {
            for (int i = 2; i < num; i++) {
                if (num % i == 0) {
                    System.out.println(num + " is not a prime number.");
                    break;
                } else if (i == num - 1) {
                    System.out.println(num + " is a prime number.");
                }
            }
        }
    }
}

~~~

与\`break\`类似的是\`continue\`：

![image-20250321152205726](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321152205726.png)

唯一的区别是，对于循环体，如果遇到\`break\`那么整个循环结束，而遇到\`continue\`则是该循环体位于\`continue\`后面的内容不执行，但是循环依然要继续跑

## 4 多重循环

**task: 输出100以内的素数**

那么相当于是在3的代码外面，还要进行一次循环以实现遍历

~~~
import java.util.Scanner;

public class JudgePrimeRange {
    public static void main(String[] args) {
        for (int j=2;j<=100;j++){
            if (j==2){
                System.out.print(j + " ");
            }
            for (int i = 2; i <j; i++) {
                if (j % i == 0) {
//                    System.out.println(j + " is not a prime number.");
                    break;
                } else if (i == j- 1) {
                    System.out.print(j + " ");
                }
            }
        }
    }
}

~~~

那么如何输出前50个素数呢，由于我们不知道第50个素数是多大，所以我们不适合用for循环，此时适合用while循环了

**task：凑硬币**

已知有1块钱，5块钱，10块钱，20块钱，怎么凑出33块钱，有什么方案，那么可以不停的嵌套循环：

![image-20250321153613669](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321153613669.png)

需要注意的是，如果我们只要一种结果的话，\`break\`只能停止当前所在的这一个循环，有一个方法是，在最外面的循环上，加一个标号，例如我取名为\`OUT\`，那么在\`break\`的时候我们可以\`break\`整个标号的循环：

![image-20250321153956470](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321153956470.png)

## 5 逻辑类型

对于我们需要判断是或者不是的时候，我们可以直接将变量定义为布尔类型：

~~~java
boolean isprime=true
~~~

这样在if的时候可以直接使用：

~~~java
if (isprime){
	operation
}
~~~

逻辑类型之间是存在逻辑运算的：

![image-20250321154351494](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321154351494.png)

这应用于处理区间的问题：

对于$4<x<6$这种情况，java不能直接进行判断，这时我们可以\`x<6&&x>4\`来实现

布尔值的运算是有优先级的：**！>&&>||**

## 6 task: 求和

对于以下函数如何求解呢：
$$
f(n)=1+\\frac{1}{2}+\\frac{1}{3}+\\cdots+\\frac{1}{n}
$$


很容易写出以下代码
~~~Java
import java.util.Scanner;

public class GetSum {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num= in.nextInt();
        double sum=0.0;
        for (int i=1;i<=num;i++){
            sum=sum+1.0/i;
        }
        System.out.printf("The sum is:%.2f ",sum);
    }
}

~~~

需要注意的是，保留若干位的时候，需要用\`printf\`，然后使用\`%.nf \`这里的\`n\`是保留位数

![image-20250321155720294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321155720294.png)

如果要更换成以下的形式呢：
$$
f(n)=1-\\frac{1}{2}+\\frac{1}{3}-\\frac{1}{4}+\\cdots+\\frac{1}{n-1}-\\frac{1}{n}
$$
for的第三个括号里的操作式是可以多项的：

![image-20250321160316780](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321160316780.png)

也可以用乘方的形式：

~~~java
import java.util.Scanner;

public class GetSum2 {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        System.out.print("Enter the number: ");
        int num= in.nextInt();
        double sum=0.0;
        for (int i=1;i<=num;i++){
            sum=sum+(Math.pow(-1.0,i+1))*(1.0/i);
        }
        System.out.printf("The sum is:%.2f ",sum);
    }
}

~~~

## 7 task：求解最大公约数

不难写出：

~~~java
import java.util.Scanner;

public class FineMaxCommonDivisor {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter two numbers: ");
        int a = in.nextInt(), b = in.nextInt();
        int common=1;
        for (int i=2; i<=Math.min(a,b);i++){
            if (a%i==0 && b%i==0){
                common=i;
            }
        }
        System.out.println("The common number is: "+common);
    }
}

~~~

上述的解决方法是一个计算次数比较多的方法，属于比较笨的方法，那么一个简单的方法是辗转相除法：

比如说 a=12，b=18

首先求解 r=a%b=12，此时令a=b=18，b=r=12

然后继续 r=a%b=18%12=6 那么此时a=12，b=6

继续来 r=a%b=12%6=0 那么此时a=6 b=0

这里的最后的a就是最大公约数，考虑到这个情况，我们不知道循环什么时候结束，所以应该使用\`while\`

使用上述的辗转相除法，我们可以迅速的写出代码：

~~~
import java.util.Scanner;

public class FineMaxCommonDivisorAdvance {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        System.out.println("Enter two numbers: ");
        int a = in.nextInt(), b = in.nextInt();
        int r,oa=a,ob=b;
        while(b!=0){
            r=a%b;
            a=b;
            b=r;
        }
        System.out.println("The "+oa+" and"+ob+"'s max common divisor is: "+a);
    }
}

~~~

`,Ry=`---
layout: post
title: "Java课程学习笔记6"
date:   2025-03-21
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第5小节的数组相关的内容，包括数组的创建，数组内的元素，数组变量等相关知识
<!-- more -->

## 1 初识数组

对于有些应用场景，比如说我们需要计算平均数的同时还需要给出大于平均数的数字有哪些，这时候我们输入的数字需要被记录了，这时候设定很多的变量往往是不太合适的（笨办法），如何应对这个情况这就是数组的产生。

~~~java
int[] numbers =new int[100]
~~~

创建一个名为\`numbers\`的能够容纳100个\`int\`的数组

具体而言，往里面填入数字：

~~~
numbers[index]=values_index
~~~

例如：

![image-20250321202336906](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321202336906.png)

## 2 创建数组

数组是一种容器，其特点是一旦创建，不能改变大小；其中所有元素的类型是一样的

例如对于1  中的\`numbers\`数组：

~~~java
int[] numbers =new int[100]
~~~

创建之后，就只能存入int，且只能存100个

创建的格式如下所

~~~java
<类型>[]<数组名称>=new <数组内元素的类型>[数组的元素个数]
~~~

需要注意的是，数组的索引是从0开始的

## 3 数组的元素

访问数组的元素是用索引实现，如我们想调出数组\`numbers\`的第五个元素：

~~~java
numbers[4]
~~~

对其赋值也行：

~~~java
numbers[4]=11
~~~

需要注意的是，即便你的索引超过了数组的索引边界，在写代码的时候编译器是不会检查出是否有效的，只有在运行的时候你才知道你的索引超过了索引边界

因此，在未知用户输入的数字数目的时候就设定数组的数量是危险的，我们应该根据用户读进来的数字的数量来设定数组的大小，这样就避免了溢出索引的问题

数组有一个固有的属性，也就是length：

~~~java
for (int i=0;i<grade.length;i++){
	operation
}
~~~

这里的\`grade\`是数组

## 4 数组变量

除了先初始化后逐个赋值（new的方式）以外，也可以直接在初始化的时候就进行赋值：

~~~java
int[] scores={97,87,97,88,67,22}
~~~

![image-20250321204025975](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321204025975.png)

需要注意的是这是因为普通变量就对应着变量的数值，但是对于数组来说，数组和数据只是一个指针指引：

![image-20250321204144294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321204144294.png)

所以当\`int[]b=a\`的时候，相当于b也建立了和a指向同一个位置的索引：

![image-20250321204231282](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321204231282.png)

那么通过b索引改变数据的第0个位置，那么a索引下同样也会发生改变

总结：

![image-20250321204353164](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321204353164.png)

如果是两个不同的索引，索引的地址也不一样，即便索引的数组的内容是一样的，但两者也是不同的：

![image-20250321204522636](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321204522636.png)

所以判断两个数组的内容是否相等也不能直接用上述\`==\`来判断，而是要经过循环之后逐个元素的比较来判断是否是相等的数组

## 5 task：投票统计

~~~java
import java.util.Scanner;

public class VoteStatistic {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int x;
        int[] numbers =new int[10];
        x=in.nextInt();
        while(x!=-1){
            if(x>=0 && x<=9){
                numbers[x]++;
            }
            x=in.nextInt();
        }
        for(int i=0;i< numbers.length;i++){
            System.out.println(i+" : "+numbers[i]);
        }
    }
}

~~~

直接创建输入[0,9]出现次数的数组

## 6 遍历数组

![image-20250321205734407](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321205734407.png)

一般都使用从0开始遍历到length的for循环来遍历

除此之外还可以：

~~~java
for (int k:data){
	operation
}
~~~

这就是for-each循环，每次循环的k是data内的内容，特别适合遍历数组里的每一个内容，但是不足之处是他并不知道k的索引位置。需要注意的是，这里如果是：

~~~java
for (int k:data){
	k=9;
}
~~~

这里并不能改变数组的内容

## 7 task：素数

之前的算法是从2开始遍历到n-1，要计算n-2次循环

只需要计算到平方根就行：

![image-20250321210406061](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321210406061.png)

还有一个方法就是利用素数表

![image-20250321210756821](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321210756821.png)

相当于是，下一个素数是否是素数，只需要判断其能不能被素数表里的素数整除

另外，也还有其他的方法：

~~~java
boolean[] isprime = new boolean[100];
for (int i=0;i<isprime.length;i++){
	isprime[i]=true;
}
for (int i=2; i<isprime.length;i++){
	if (isprime[i]){
		for (int k=2;i*k<isprime.length;k++){
			isprime[i*k]=false;
		}
	}
}
for (int i=2;i<isprime.length;i++){
    if (isprime[i]){
        System.out.println(i);
    }
}
~~~

也就是素数的倍数都不是素数，剩下的都是素数了

## 8 二维数组

~~~java
int [][] a = new [3][5];
~~~

构造了一个3行5列的矩阵like的数组

二维数组的初始化也可以向一维数组一样：

~~~java
int [][] a={
	{1,2,3,4},
	{1,2,4},
};
~~~

构造了一个2行4列的数组，其中不够的会自动补零

三行棋写了一个比较复杂的代码：
~~~java
import java.util.Scanner;

public class board {
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        final  int Size=3;
        int [][] board= new int[Size][Size];
        for (int i=0;i<Size;i++){
            for (int j=0;j<Size;j++){
                System.out.print("Enter the value of board line"+(i+1)+"  and column"+(j+1)+":");
                board[i][j]=in.nextInt();
            }
        }
        MainLOOP:
        for (int i=0;i<Size;i++){
            int const_num=board[i][0];
            for (int j=0;j<Size;j++){
                if (board[i][j]!=const_num){
                    break;
                }
                else if (board[i][j]==const_num && j==Size-1){
                    System.out.print(const_num+" wins ");
                    break MainLOOP;
                }
            }
        }
        MainLOOP2:
        for (int j=0;j<Size;j++){
            int const_num=board[0][j];
            for (int i=0;i<Size;i++){
                if (board[i][j]!=const_num){
                    break;
                }
                else if (board[i][j]==const_num && i==Size-1){
                    System.out.print(const_num+" wins ");
                    break MainLOOP2;
                }
            }
        }
        int const_num=board[0][0];
        for (int i=0;i<Size;i++){
            if (board[i][i]!=const_num){
                break;
            }
            else if (board[i][i]==const_num && i==Size-1){
                System.out.print(const_num+" wins ");
                break;
            }
        }
        const_num=board[0][Size-1];
        for (int i=0;i<Size;i++){
            if (board[i][Size-1-i]!=const_num){
                break;
            }
            else if (board[i][Size-1-i]==const_num && i==Size-1){
                System.out.print(const_num+" wins ");
                break;
            }
        }
    }
}

~~~

`,Iy=`---
layout: post
title: "Java课程学习笔记7"
date:   2025-03-21
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第6小节的字符相关的内容，包括字符类型，逃逸字符，包裹类型等相关知识
<!-- more -->

## 1 字符类型
单个字符是一种特殊的类型：char
~~~java
char c='a';
char d='汉';
~~~

单个汉字也是一个字符

对于字符进行++ 会得到排在unicode表后的文字，对于字符做加减法运算之后得到的就是数而不是字符了

![image-20250321221207558](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321221207558.png)

也可以给出Unicode的编号，程序也能给出对应的字母

## 2 逃逸字符

反斜杠开头加上另一个字符表示的一些操作：

![image-20250321221454753](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321221454753.png)

其中\`\\b\`的效果如图所示：

![image-20250321221942660](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321221942660.png)

而\`\\t\`在是到下一个制表，类似于表格行对齐一样（只能在一个tab内）：

![image-20250321222137298](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321222137298.png)

## 3 包裹类型

![image-20250321222306555](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321222306555.png)

包裹类型和基础类型一样，都是可以用于定义变量。它可以做基础类型的事情的同时，还可以做一些包裹类型独特的功能：

![image-20250321222457272](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321222457272.png)

这里面的\`.\`就是一个运算符，用于让一个类或者一个对象做什么事情

还有转换大小写的：

~~~java
System.out.println(Character.tolowerCase('I'));
~~~

以及判断大小写的

~~~java
System.out.println(Character.islowerCase('I'));
~~~

## 4 字符串变量

双引号括起来的里面的内容一般是字符串，用于字符串的变量是\`String\`，需要注意的是其是包裹类型，字符串变量是字符串的管理者而不是所有者，创建字符串的变量也得用\`new\`来创建

~~~java
String s = new String ("a string");
~~~

也可以直接初始化：

~~~java
String s="hello string";
~~~

字符串的链接可以用\`+\`实现链接，如果\`+\`的另一边不是字符串，java会自动把不是字符串的内容转化成字符串

~~~java
String s="hello";
System.out.println(s+20+25)
~~~

得到的是hello2025而不是hello45

对于输入而言，也有一些差别：

~~~java
s=in.next();
输入 this is an apple
s只有this

s=in.nextln();则可以读取整行的内容
~~~

![image-20250321223458961](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321223458961.png)

所以比较两个字符串的内容是不是一样的话，需要用\`.equals\` 方法

![image-20250321223527234](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321223527234.png)

## 5 字符串操作

字符串比大小：

~~~java
s1.compareTo(s2);
"abcd".compareTo(s2);
~~~

比较s1和s2两个字符串变量的字符串内容谁大

计算字符串的长度用length，需要注意的是\`length()\`是右括号的

~~~
String s="hello";
s.length()是5
~~~

遍历字符串可以用：

~~~
for (int i=0; i<s1.length();i++){
	System.out.println(s1.charAt(i));
}
~~~

其中\`s1\`是一个字符串变量

截断字符串则可以使用\`substring\`,范围是左闭右开:

![image-20250321224246986](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321224246986.png)

除此之外还有一些有意思的操作：

![image-20250321224325023](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321224325023.png)

找出现多次的某个字符：

![image-20250321224509356](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321224509356.png)

通过一个loc的方式来实现

需要注意的是，刚刚的这些所有操作都不会改变原先的字符串，而是制造了一个新的字符串

当然，\`switch case\`也可以用字符串实现

## 6 Math 类

一些常见的方式：\`abs\`，\`pow\`（pow（2，3）=$2^3$），\`random\`（产生（0，1）之间的随机数），\`round\`(四舍五入)

这些操作也就是函数
`,jy=`---
layout: post
title: "Java课程学习笔记8"
date:   2025-03-21
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)的学习笔记，主要包括第7小节的函数相关的内容，包括函数的定义，函数的参数，函数的调用以及函数的本地变量等相关知识
<!-- more -->

## 1 函数的定义

有些代码的内容会被反复使用，为了避免每次重复，所以选择构造函数的形式，这样每次只需要调用这个函数就行了

例如判断质数里：

![image-20250321230346931](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321230346931.png)

可以设定一个函数的名字叫\`isPrime\`

计算三组求和，分别是1~10，20 ~ 30， 以及35 ~ 45 ，那怎么实现呢？

为了避免代码复制，我们可以构造函数

~~~
public static void sum(int a, int b){
	int i;
	int sum=0;
	for (i=0;i<=b;i++){
		sum=sum+i;
	}
	System.out.println(a+"到"+b+"的和是"+sum);
}
~~~

之后只需要\`sum(1,10)\`,\`sum(20,30)\`,\`sum(35,45)\`就可以了

**那么什么是函数呢？**

函数是一块代码，可以接收若干个参数，然后做一件事情，最后可能会返回0或者1个值

定义函数的时候，\`public static void sum(int a, int b)\`是**函数头**，其中的\`sum\`是**函数名**，\`void\`是**返回类型**，大括号里的是**函数体**，函数名后的小括号的内容是函数的**参数表**

## 2 函数的参数

需要注意的是，函数的参数传入要和函数定义的时候的要求是一致的

![image-20250321231734078](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321231734078-1742570266894-2.png)

![image-20250321231828328](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321231828328.png)

**传入的到底是什么呢？**

需要注意的是，传入函数的是变量的是值，并非传入变量本身

![image-20250321232106566](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321232106566.png)

所以这个函数即便swap里面可以成功，函数结束之后，a还是原先的a，b还是原先的b

## 3 函数的调用

调用函数是用\`函数名(参数值)\`的方式实现的，即便函数没有参数，这个括号也是必要的

有参数的时候，也是要给出参数的正确顺序的，也就是根据定义的参数的顺序来传参

函数总能知道自己是从哪里被调用的，也知道要回到哪

在函数中返回值的话要用到\`return\`

如果要\`return\`的话，那么函数返回什么需要在定义函数的时候，在函数名前把返回类型写上：

![image-20250321233136884](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321233136884.png)

这里传参可以直接\`max(c,23)\`,一个函数有多个出口是不好的设计。

\`void\`函数是不返回值的，如果要return那也只能\`return;\`，用于某些条件下函数走到这就跳出函数了

## 4 函数的本地变量

函数的每一次运行就产生了一个独立的空间，和上次运行时的内部变量是无关的。

函数里面定义的变量就是本地变量

![image-20250321233824415](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250321233824415.png)

一个范围内，定义过一个变量之后就不能再定义一个相同的重名变量了

### **本地变量的规则**

- 本地变量是定义在块内的。

  - 它可以是定义在**函数**的块内。
- 也可以定义在**语句**的块内。
  - 甚至可以随意拉一对**大括号**来定义变量。

- 程序运行进入这个块之前，其中的变量**不存在**，离开这个块后，变量就**消失**了。`,Fy=`---
layout: post
title: "python课程学习笔记1"
date:   2025-03-31
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录Harford的[CS50](https://cs50.harvard.edu/python/2022/)课程笔记，本笔记是lecture0的笔记，其主要介绍的是python作业的入门的变量和函数
<!-- more -->

## 1 hello world

~~~python
code hello.py
~~~

可以打开vscode，创建一个叫\`hello.py\`的文件。

~~~python
print("hello world")
~~~

然后在终端输入

~~~python
python hello.py
~~~

然后终端就会打印\`hello world\`

\`function\`实际上就像\`verb\`一样，是个动词，表示一些动作，比如\`print\`动作，\`input\`动作

\`bug\`则用于描述，人类编程时与标准解释器设置的不一样导致计算机无法正确运行代码，此时解释器会告诉你有些什么问题

~~~python
input("what's your name?")
print("hello world")
~~~

## 2 input and variable

但上述并不能实现对输入的人名打招呼，这是因为我们需要一些存储输入的东西的方式，这就是\`variable\`。 \`varialbe\`可以存储数值、文本等等的信息

~~~python
name=input("what's your name?")
print("hello world")
~~~

ps.对于\`print\`，默认\`print\`以换行结尾，但你也可以设置\`end=\`:

~~~python
print("hello",end="!!!")
# finally print: hello!!!
~~~



需要注意的是，等号在这不表示等于，而是分配或者赋值

我们希望\`print\`出\`name\`内的信息，直接\`print("hello name")\`是不行的，相反应该：

~~~python
name=input("what's your name?")
print(f"hello {name}")
~~~

\`comments\`注释，计算机会忽略你在\`comments\`内的内容

~~~python
# say hello to your code
name=input("what's your name?")
print(f"hello {name}")
~~~

\`Pseudocode\`是伪代码，辅助学你进行代码构思

## 3 string function

当然你也可以使用字符串加法\`"hello,"+name\`实现

> 阅读官方文档总归是了解函数使用的一个重要方式

如果想使用\`“”\`在\`print\`中，可以使用单双引号交替，也可以使用转义：

~~~
print("hello,\\"David\\"")
# or
print('hello,"David"')
~~~

对于字符串，字符串本身有很多函数操作，包括去除空格，大小写等：

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Print the output
print(f"hello, {name}")
~~~

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Capitalize the first letter of sentence
name = name.capitalize()

# Print the output
print(f"hello, {name}")
~~~

~~~python
# Ask the user for their name
name = input("What's your name? ")

# Remove whitespace from the str
name = name.strip()

# Capitalize the first letter of each word
name = name.title()

# Print the output
print(f"hello, {name}")
~~~

当然，去除空格和大写可以在一行内搞定：

~~~python
name = name.strip().title()
~~~

取决于你自己的代码风格

除此之外你还可以使用\`split\`来分割字符串

## 4 int

在Python中，整数称为int。
在数学世界中，我们熟悉 +， - ， *， /和％（取模操作）

我们可以设定一些变量是某些整数：

~~~python
x = 1
y = 2

z = x + y

print(z)
~~~

除此之外我们可以用input的方式来获取输入的数字，需要注意的是input得到的是字符串，我们需要用\`int\`函数将其转化为整数

~~~python
x = input("What's x? ")
y = input("What's y? ")

z = int(x) + int(y)

print(z)
~~~

需要注意的是，一般最好是的自己的代码有一定的可读性（比如说一行流的代码就不是很建议）

## 5 Float type

除了字符串和整数之外，还有浮点数表示许多的小数，这便是我们需要关注的第三个数据类型

~~~
x = float(input("What's x? "))
y = float(input("What's y? "))

print(x + y)
~~~

这样就可以将用户输入的结果转化成浮点by using \`float\`方式

除此之外，还可以使用\`round\`实现四舍五入

~~~
round(number[,ndigits])
~~~

number是你要四舍五入的，逗号后面的是四舍五入的小数点后位数精度

例如：

~~~
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result and round
z = round(x / y, 2)

# Print the result
print(z)
~~~



除此之外，如果数字位数很多，我们可以使用以下方式使得数字呈现每3位数一个逗号\`2,500\`一样的形式：

~~~
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Create a rounded result
z = round(x + y)

# Print the formatted result
print(f"{z:,}")
~~~

控制小数点位数还可以使用：

~~~
# Get the user's input
x = float(input("What's x? "))
y = float(input("What's y? "))

# Calculate the result
z = x / y

# Print the result
print(f"{z:.2f}")

~~~

中的\`fstring\`实现：\`f"{value:.2f}" \`是保留两位小数

## 6 def function

对于多次重复的操作，我们可以定义一个函数，从而避免重复的操作反复的复制代码：

~~~python
def hello():
    print("hello")


name = input("What's your name? ")
hello()
print(name)
~~~

这里，\`def\`后面的\`hello\`是函数名，\`()\`是函数的参数，这里为空，当然我们也可以设置参数：

~~~python
# Create our own function
def hello(to):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)
~~~

这里就是给\`hello\`函数设置了一个参数\`to\`，所以1我们在使用的时候需要传入参数：\`hello(name)\`

我们可以为参数设置初始值，使得即便没有参数传入我们也有一个默认值，设置初始值在\`()\`中通过\`=\`实现:

~~~python
# Create our own function
def hello(to="world"):
    print("hello,", to)


# Output using our own function
name = input("What's your name? ")
hello(name)

# Output without passing the expected arguments
hello()
~~~

这里就是设置参数\`to\`的初始默认值是\`"world"\`，一旦你传入了\`name\`，那么\`to\`的值就不再是默认的\`"world"\`而是\`name\`中的内容

定义函数就像是造工具，那么有了若干工具之后，我们需要定义工作流，一般通过定义\`main\`函数的方式实现：

~~~python
def main():

    # Output using our own function
    name = input("What's your name? ")
    hello(name)

    # Output without passing the expected arguments
    hello()


# Create our own function
def hello(to="world"):
    print("hello,", to)
~~~

但上述的只是定义了main函数，没有执行，所以还需要加上执行语句\`main()\`：

~~~
def main():

    # Output using our own function
    name = input("What's your name? ")
    hello(name)

    # Output without passing the expected arguments
    hello()


# Create our own function
def hello(to="world"):
    print("hello,", to)


main()
~~~

有时候，我们定义函数不仅仅需要进行操作，还需要将我们输入的数据处理后输出，那么这里使用\`return\`的方式，将函数的结果输出返回到主程序中：

~~~python
def main():
    x = int(input("What's x? "))
    print("x squared is", square(x))


def square(n):
    return n * n


main()
~~~

`,Oy=`---
layout: post
title: "Java课程学习进阶笔记 1"
date:   2025-04-01
tags: [cs_basic]
comments: true
author: junedrinleng
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)中的进阶部分的学习笔记，主要包括用类产生对象等内容
<!-- more -->

## 1 用类制造对象

~~~Java
package shapes;

public class MyPicture {
    public static void main(String[] args) {
        Picture pic = new Picture(420, 250);
        Circle c1 = new Circle(320, 40, 40);
        Rectangle r1 = new Rectangle(100, 100, 100, 100);
        Triangle t1 = new Triangle(100, 100, 200, 100, 150, 50);
        Line l1 = new Line(0, 205, 400, 205);

        pic.add(c1);
        pic.add(r1);
        pic.add(t1);
        pic.add(l1);
        pic.draw();

    }
}

~~~

这里采用\`new\`的方式产生对象，例如用new Picture对象产生一个图对象，除此之外可以产生包括Circle类等等。只需要提前定义，那么后续我们就只需要调用这个类，就可以产生这个类相近的对象。

> 直接运行上面的代码是会报错的，因为直接运行的时候这些类都没有定义，原课件是在shapes 这个package里面定义了这些类，包括picture类、circle类等等

根据上述的例子，我们不难发现，对象是实体，需要被创建，可以为我们做事情

类是规范，我们根据类的定义来创建对象

![image-20250401162144294](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162144294.png)

对于每一个对象来说，其具有两种东西，一种是属性，一种是服务：

**对象=属性+服务**

![image-20250401162341341](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162341341.png)

对象的数据是被外部的操作紧密包围的，是由对象本身保护的，外部只能用对象进行操作，这也叫做分装

## 2 定义类

以自动售货机为例，从面向对象的角度来说，他有些什么东西，由哪些东西组成这个场景，这些场景里的东西能够提供什么服务：

![image-20250401162559530](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401162559530.png)

那么根据上述的思想，我们可以抽象自助售货机有以下的属性变量和操作：

属性：\`balance\`、\`price\`、\`total\`

动作：\`print balance\`、\`show prompt\`、\`insert money\`、\`get food\`

~~~java
public class VendingMachine {
    int price=80;
    int balance;
    int total;

    void showPrompt(){
        System.out.println("Welcome! ");
    }

    void insertMoney(int amount){
        balance = balance + amount;
    }

    void showBalance(){
        System.out.println("Balance: " + balance);
    }

    void getFood(){
        if(balance>=price){
            System.out.println("Here is your food!");
            balance = balance - price;
            total = total+price;
        }
    }

    public static void main(String[] args) {
        VendingMachine vm = new VendingMachine();
        vm.showPrompt();
        vm.showBalance();
        vm.insertMoney(100);
        vm.getFood();
        vm.showBalance();
    }
}

~~~

自己基于刚刚创建的\`vendingmachine\`类创建了一个\`vm\`的\`vending machine\`的对象，

我们在类中设计了一些动作，比如\`showprompt\`等，我们需要用的时候只需要\`vm.showBalance();\`就可以调用这些我们定义的操作

当然，同一个类可以创建多个不同的对象，两个对象的内部变量彼此互不干扰（各自有一个不同的对象id）

## 3 成员变量和成员函数

类定义了对象中所具有的变量，这些变量乘坐成员变量

每个对象有自己的成员变量，和其他对象的成员变量是分开的

当我们使用\`vm.showBalance\`的时候，就使得java知道我们是要show的vm内的balance的值——可以将当前调用操作和操作所需成员变量之间产生联系

在类的函数中，可以直接写成员变量的名字来访问成员变量，具体访问哪个对象的成员变量或者成员操作可以通过\`.\`来调用。这时，通过\`this\`这一成员函数的特殊固有的本地变量来实现

![image-20250401165352800](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165352800.png)

![image-20250401165444778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165444778.png)

在一个成员函数里调用另一个成员函数的时候，即便不带this也会自动调用

![image-20250401165650138](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401165650138.png)

类里的成员函数也可以用到类内的这些成员变量

## 4 对象初始化

每次创建一个新的对象的时候，一个很重要的事情是要看对象刚创建出来的时候，所有的成员变量如果没有初始化，会自动给一个初始值\`0\`（Boolean的false，string的none），这是和全局变量不一样的（全局变量如果不初始化是会报错的）

![image-20250401170404646](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401170404646.png)

构造函数是和类名一样的，创建这个类的每一个对象都会调用这个构造函数，且没有返回类型

~~~java
public class VendingMachine {
    int price=80;
    int balance;
    int total;
    VendingMachine() {
        total=0;
    }
    VendingMachine(int price) {
        this.price = price;
    }
    void showPrompt(){
        System.out.println("Welcome! ");
    }

    void insertMoney(int amount){
        balance = balance + amount;
    }

    void showBalance(){
        System.out.println("Balance: " + balance);
    }

    void getFood(){
        if(balance>=price){
            System.out.println("Here is your food!");
            balance = balance - price;
            total = total+price;
        }
    }

    public static void main(String[] args) {
        VendingMachine vm = new VendingMachine();
        vm.showPrompt();
        vm.showBalance();
        vm.insertMoney(100);
        vm.getFood();
        vm.showBalance();
    }
}

~~~

同名但是参数表不同，调用的时候根据给出什么参数来选择调用不同的构造函数

交作业的时候需要两个类放一个文件里，而idea则要求一个类就是一个文件，一定不要拷贝package的内容`,By=`---
layout: post
title: "Java课程学习进阶笔记 2"
date:   2025-04-01
tags: [cs_basic]
comments: true
author: junedrinleng
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)中的进阶部分的学习笔记，主要对象的识别、对象的交互、封闭的访问属性、开发的访问属性、类变量和类函数等内容
<!-- more -->

## 1 对象的识别

如何识别对象呢，比如说一个时钟：

![image-20250401181058703](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401181058703.png)

可以整只钟是一个对象，也可以是每一位数字是一个对象，还可以是：

![image-20250401181133673](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401181133673.png)

因为小时和分钟有一些相似的内容，例如数值现实、数值+1操作、数值加到某一个上限之后归零

~~~java
public class Display {
    private int value=0;
    private int limit=0;

    public Display(int limit) {
        this.limit=limit;
    }
    public void increase() {
        value++;
        if (value==limit) {
            value=0;
        }
    }

    public  int getValue() {
        return value;
    }
    public static void main(String[] args) {
        Display h = new Display(24);
        for(;;){
            h.increase();
            System.out.println(h.getValue());
        }
    }
}

~~~

这就解决了一个小时对象或者分钟对象（构建了display类，只需要设置不一样的初始化就行了）

那么问题在于，对于最后的对象clock，是有hour对象和min对象互动实现的。这种互动我们当然不希望是在display对象内部实现的，因为这就意味着类内会需要对不同的设置来适应不同的对象

那么我们要想实现这种对象，我们只能基于clock这个凌驾于hour和min的对象

~~~java
public class Clock {
    private Display hour=new Display(24);
    private Display minute= new Display(60);

    public void start(){
        while(true) {
            minute.increase();
            if (minute.getValue() == 0) {
                hour.increase();
            }
            System.out.printf("%02d:%02d\\n", hour.getValue(), minute.getValue());
        }
    }
    public static void main(String[] args) {
        Clock clock=new Clock();
        clock.start();
    }
}

~~~



一个类的成员变量，是可以是其他对象的

## 2 封闭的访问属性

对于上述代码中，\`private\`意味着这个成员是私有的，也就是说只有在内部类内部才能访问，类外面的时候这些成员就不能直接使用了，被隐藏了

一个基本原则是，如果没有特殊的要求的话，我们都要使得成员变量是私有的，从而可以使得成员变量的使用能按照类设计者的想法来进行

![image-20250401184404599](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401184404599.png)

这是从代码层面来看的，不是从运行角度来看的，**私有是针对类而不是对象**哦

## 3 开放的访问属性

除开\`private\`以外，还有很多是\`public\`的，一旦定义成public了，那么你可以在所有的地方调用

对于一个成员的前面，如果没有声明是\`public\`还是\`private\`的时候，那么这个成员是\`friendly\`的，和他位于同一个包（package）的所有内容都可以访问

除此之外还有\`protected\`在继承部分进行介绍

需要注意的是，如果是一个\`public\`的类型必须定义在他自己的文件里，比如说一个class是public 的类 clock 那么这个类只能存储在clock.java里。

如果不是public类，那就可行：

![image-20250401185032918](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185032918.png)

**一个编译单元只能存在一个public类**

## 4 包（package）

![image-20250401185202460](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185202460.png)

对于clock项目，有一个包叫做\`clock\`，存于src文件夹内，这个\`src/clock \`下的\`Clock.java\`和\`Display.java\`就是\`clock package\`下的类

我们也可以新建\`package\`：

![image-20250401185352166](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185352166.png)

例如现在我们创建了两个package分别是\`Clock package\`和\`Display package\`，其中是空的，另外两个是我们已经创建好的类 \`Clock.java\`和\`Display.java\`，如果我们要把不同的类放在不同的\`package\`下，只需拖入即可:

![image-20250401185656190](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185656190.png)

此时\`Display.java\`也改变了\`package\`信息：

![image-20250401185744413](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185744413.png)

属于\`Display package\`了

同理，我们把Clock.java拖入Clock package之后，呈现以下的报错：

![image-20250401185858744](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401185858744.png)

这是因为Clock.java和Display.java分属于两个package了，不能互相访问了

此时需要import另一个包才能使用了：

![image-20250401190017699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401190017699.png)

这里的import用法如下：

~~~java
import package_name.class_in_package_name;
~~~

在这个目录下的所有文件都属于一个包，包的名字就是文件夹的名字

这里的\`package_name.class_in_package_name\`是类的全名

当然，如果要import这个package里的所有内容，那么可以通过：

~~~java
import package_name.*;
~~~

引入包里的所有的类

当然包也可以套娃：

![image-20250401190501852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401190501852.png)

包的名字里是可以有点的，每一个点代表一个文件夹层次

## 5 类变量

\`static\`不是一般意义上的静态动态

某一个对象的static变量修改之后会通知其他对象的相关static变量？

\`static\`变量可以直接用类.变量名 直接访问

实际上，\`static\`变量不是成员变量，而叫做类变量，全类只此一份，其他对象改变这个类变量，另外的所有对象的这个类变量也因此改变

![image-20250401192250756](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250401192250756.png)

也就是，\`d1\`知道自己属于\`display\`类，\`d2\`亦然，所以当你要访问类变量\`d1.step\`的时候，\`d1\`会自动找到自己所属的类\`Display\`，然后再获取其类变量\`Display.step\`

## 6 类函数

我们的main函数里是有\`static\`的，这表示函数和对象没关系，是属于类的

\`static\`的函数只能访问\`static\`的函数和\`static\`的变量，通过对象访问的时候并不能获得其对象的信息

static的初始化和对象的创建没有关系

可以理解成以下过程：

创建类—>初始化类变量和类函数—>根据类创建对象—>对象内成员变量初始化
`,$y=`---
layout: post
title: "Java课程学习进阶笔记 3"
date:   2025-04-02
tags: [cs_basic]
comments: true
author: junedrinleng
---

该笔记主要记录浙江大学翁恺的[java入门与进阶课程](https://www.bilibili.com/video/BV1wL411L7A3?p=3)中的进阶部分的学习笔记，主要记事本实例，泛型容器类型，arraylist操作，对象数组，集合容器和hash表等内容
<!-- more -->

## 1 记事本实例

对于记事本，我们需要满足以下的要求：

- 能存储记录
- 不能限制存储记录的梳理
- 能知道已经存储的记录的数量
- 能查看存进去的每一条记录
- 能删除每一条记录
- 能列出所有的记录

> 需要注意，对于较为高级的编写程序，实现软件构造，我们需要将人机交互和业务逻辑进行分离——前后端分离

对于记事本来说，我们需要设计接口。当然对于后端来说，我们不需要考虑数据的输入到底是怎么来到，可以是命令行交互，可以是客户端也可以是网页，这些是前端的事情，我们不需要去管，作为后端我们只需要做好接口就行

根据上述内容，我们先定义类，并设计接口：

~~~java
public class NoteBook {
    public void add(String s){

    }
    public int getSize(){
        return 0;
    }
    public String getNote(int index){
        return "";
    }
    public boolean removeNote(int index){
        return true;
    }

    public String[] list(){
        return new String[10];
    }

    public static void main(String[] args) {

    }
}

~~~

接口的具体内容我们暂时可以先不管，但是我们需要先把这些框架给搭建起来

## 2 泛型容器类

要存放很多东西，在入门课程里我们学习了数组，可以存放很多东西

但问题在于，数组是需要设定一开始的长度，因此并不满足这里我们要一直添加的目的，因此为了解决这个问题我们需要使用容器

~~~java
private ArrayList<String> notes = new ArrayList<String>();
~~~

我们通过\`ArrayList\`的方式创建一个\`ArrayList\`对象，后面的尖括号内容表示是存放什么的\`ArrayList\`，这里是存放\`String\`的，这种类型是泛型类

![image-20250402162016289](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402162016289.png)

~~~java
容器类型<元素类型>
~~~

这里的容器类型是\`ArrayList\`

容器本身是有\`size\`方法来获得容器里的内容\`size\`的

那么通过上述的ArrayList的方式，我们可以把之前的接口内容进行丰富：

~~~java
import java.util.ArrayList;

public class NoteBook {
    private ArrayList<String> notes = new ArrayList<String>();
    public void add(String s){
        notes.add(s);
    }
    public int getSize(){
        return notes.size();
    }
    public String getNote(int index){
        return "";
    }
    public boolean removeNote(int index){
        return true;
    }

    public String[] list(){
        return new String[10];
    }

    public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Java");
        nb.add("Python");
        System.out.println(nb.getSize());
    }
}

~~~

简单测试一下，发现可以正确的实现加string和getSize两个功能

## 3 ArrayList的操作

ArrayList的添加是有顺序的，所以我们可以使用他来根据index获得对应的内容：

~~~java
ArrayList对象.get(index)
~~~

如果要拿到索引范围外的内容，会报错

除此之外，ArrayList还有remove方法，结果是如果出错则报错，否准就给的是删除后的数组

~~~
import java.util.ArrayList;

public class NoteBook {
    private ArrayList<String> notes = new ArrayList<String>();
    public void add(String s){
        notes.add(s);
    }
    public void addLocation(String s, int index){
        notes.add(index,s);
    }
    public int getSize(){
        return notes.size();
    }
    public String getNote(int index){
        return notes.get(index);
    }
    public void removeNote(int index){
        notes.remove(index);
    }

    public String[] list(){
        String[] a=new String[notes.size()];
        for(int i=0;i<notes.size();i++){
            a[i]=notes.get(i);
        }
        return a;
    }

    public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Python");
        nb.addLocation("Java",0);
        System.out.println(nb.getSize());
        System.out.println(nb.getNote(0));
    }
}

~~~

但其实我们可以用\`ArrayList\`的\`toArrary\`来把\`ArrayList\`转化成\`Array\`:

~~~java
import java.util.ArrayList;

public class NoteBook {
    private ArrayList<String> notes = new ArrayList<String>();
    public void add(String s){
        notes.add(s);
    }
    public void addLocation(String s, int index){
        notes.add(index,s);
    }
    public int getSize(){
        return notes.size();
    }
    public String getNote(int index){
        return notes.get(index);
    }
    public void removeNote(int index){
        notes.remove(index);
    }

    public String[] list(){
        String[] a=new String[notes.size()];
        notes.toArray(a);
        return a;
    }

    public static void main(String[] args) {
        NoteBook nb = new NoteBook();
        nb.add("Python");
        nb.addLocation("Java",0);
        System.out.println(nb.getSize());
        System.out.println(nb.getNote(0));
    }
}

~~~

需要注意的是，对于array而言，int array和string array是不一样的：

这是因为，每一个int变量 都存储一个数，而每一个String变量则都存储的是一个指针，指向了字符串所存储的位置。那么对于array自然也就同理了

![image-20250402172332278](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402172332278.png)

所以创建\`String[] a=new string[10]\`创建的是一个全是空索引的array

**对象数组中的每个元素都是对象的管理者，而非对象本身**

## 4 对象数组的for each循环

对于普通数组：

~~~java
int[] ia =new int[10];
for(int i=0;i<ia.length();i++){
	ia[i]=i;
}
for(int k:ia){
	System.out.println(k);
}
~~~

这里的\`k\`是从数组中拿出元素的复制品，即便每次循环进行\`k++\`也不会改变原先数组的内容

那么对于对象数组：

~~~java
class value{
    private int i;
    public void set(int i){
        this.i=i;
    }
    public int get(){
        return i;
    }
}
public static void main(String[] args) {
    Value[] a=new Value[10];
    for(int i=0;i<a.length();i++){
        a[i]=new Value();
        a[i].set(i);
	}
    for (Value v:a){
        System.out,println(v.get());
        v.set(0);
    }
    for (Value v:a){
        System.out,println(v.get());
    }
}
~~~

我们发现第二遍遍历之后，第三次循环遍历发现所有值都是0了

![image-20250402174748083](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402174748083.png)

这是因为此时的for-each是会更新索引的

对于容器类来说，for-each循环也是可以使用的：

![image-20250402175028420](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175028420.png)

## 5 set集合容器

![image-20250402175503995](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175503995.png)

对于同样的\`add\`内容，我们发现\`hashset\`相较于\`arraylist\`而言只有两个内容，这是因为set是数学中的\`set\`，对于数学集合来说每个元素互不相同，所以放了两次也重复的\`"first"\`也就只有最后一次生效

展示容器内容可以直接通过\`System.out.println\`实现：

![image-20250402175750685](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402175750685.png)

这样就不难发现，对于\`set\`而言，\`set\`内部的元素是不排序的

那么为什么我们之前设置的\`value\` 类并不能直接通过

\`System.out.println\`打印呢？

这是因为我们之前的类没有设置以下函数：

~~~java
public String toString() {
	return ""+i;
}
~~~

一旦设置了这个函数，那么我们自己定义的类也可以通过\`toString\`函数来直接\`System.out.println\`

~~~java
class value{
    private int i;
    public void set(int i){
        this.i=i;
    }
    public int get(){
        return i;
    }
    public String toString() {
	return ""+i;
	}
}
~~~

## 6 Hash表

对于美元，不同的美元有不同的单词对应，比如1美分对应cent，那么我们怎么实现美元数值和英文单词的对应呢？

最简单的，\`switch case\`语句：

![image-20250402180619741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402180619741.png)

但这是硬编码，不是很优雅，且迁移到人民币上就得重新全部写，不便于维护

所以我们需要引入一些新的数据结构——\`HashMap\`

在hash表中，所有数据都是成对放入，每一对内容包含一个键和一个值。

~~~java
private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
~~~

**需要注意，k的类型必须是\`Integer\`对象而不能是\`int\`这一基本类型**，这是因为不管hashmap还是什么都是容器，里面全是对象

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
    public Coin(){
        coinname.put(1, "penny");
        coinname.put(10, "dime");
        coinname.put(25, "quarter");
        coinname.put(50, "half-dollar");
    }
    public String getName(int amount) {
        return coinname.get(amount);
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int amount=sc.nextInt();
        Coin coin=new Coin();
        System.out.println(coin.getName(amount));
    }
}

~~~

可以实现查找，存在的话返回value，不存在则返回null，但我们有时候更希望在不存在的时候返回特殊的string比如"not found"，那么此时我们需要修改的是getName 函数

~~~java
import java.util.HashMap;
import java.util.Scanner;

public class Coin {
    private HashMap<Integer,String> coinname=new HashMap<Integer,String>();
    public Coin(){
        coinname.put(1, "penny");
        coinname.put(10, "dime");
        coinname.put(25, "quarter");
        coinname.put(50, "half-dollar");
    }
    public String getName(int amount) {
        if (coinname.containsKey(amount)) {
            return coinname.get(amount);
        }
        else {
            return "not found";
        }
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int amount=sc.nextInt();
        Coin coin=new Coin();
        System.out.println(coin.getName(amount));
    }
}

~~~

通过\`containsKey\`函数判断是否包含key，如果要print哈希表大小则可以通过keySet().size()来print哈希表的大小，也可以直接通过print实现哈希表输出：

![image-20250402182225128](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250402182225128.png)

需要注意的是，哈希表里面的键都是唯一的，如果出现重复的键就会覆盖

要遍历哈希表只能通过for each循环实现：

~~~java
for (Integer k :coinnames.keySet()){
	String s= coinnames.get(k);
	System.out.println(s);
}
~~~

相当于通过遍历keySet里的每一个key，再通过key-value实现全部内容的遍历
`,Hy=`---
layout: post
title: "液液相分离调控机制"
date:   2025-04-03
tags: [paper]
comments: true
author: junedrinleng
---

该笔记主要记录液液相分离的调控机制相关内容，包括crowding的相关理论，NMR表征相分离过程以及BSA相分离过程解析，以及残基相互作用机制
<!-- more -->

## 1 Molecular Crowding: The History and Development of a Scientific Paradigm

reference：Alfano C, Fichou Y, Huber K, et al. Molecular crowding: the history and development of a scientific paradigm[J]. Chemical Reviews, 2024, 124(6): 3186-3219.

相分离中两相的crowding 判断往往与R以及回转半径Rg相关：

![b12addbdb82e3928043ce8dcd1fba44](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/b12addbdb82e3928043ce8dcd1fba44.png)

1. **左上：Colloid Limit (Rg < R)**
   - **大黑球是胶体（colloid）颗粒**，小弯曲线是高分子链。
   - 因为**Rg < R**，即高分子链的尺寸比胶体小，**胶体成为被crowding的对象**，而高分子是**crowder（拥挤者）**。
   - 这就是你提到的：**macromolecules as crowder**。
2. **中上：Rg ∼ R**
   - 高分子链与胶体大小差不多，二者相互作用对空间的竞争变得重要。
   - 在这个比例下，crowding更复杂，不能简单区分谁是crowder。
3. **右上：Protein Limit (Rg > R)**
   - 高分子链很大，胶体变成小点（类似蛋白质粒子）。
   - 胶体（例如蛋白质）成了**crowder**，而高分子链是受限的对象。

相关长度 ξ（correlation length）描述crowding的微观尺度特征

 Wang et al. [(61)](javascript:void(0);) stated that crowding can affect protein stability in two ways: by hard-core repulsions or by soft chemical interactions. ——crowding可以通过两种方式影响蛋白质稳定性：通过硬核排斥或软化学相互作用

> Wang, Yaqiang; Sarkar, Mohona; Smith, Austin E.; Krois, Alexander S.; Pielak, Gary J.
>
> Journal of the American Chemical Society (2012), 134 (40), 16614-16618CODEN: JACSAT; ISSN:0002-7863. (American Chemical Society)

The explicit contraposition of entropy and enthalpy in the effect of crowders on protein stability was accepted also by other authors. For example, Senske et al., [(63)](javascript:void(0);) when studying the thermal unfolding of ubiquitin, observed that addition of other solutes (glucose, dextran, PEG, guanidinium, and urea) led to both enthalpic and entropic destabilization. The authors argued that the classification of cosolute effects based on their excess enthalpic contributions results in a comprehensive thermodynamic model.其他作者也接受了熵和焓对人群稳定性的影响。例如，Senske等人（63）在研究泛素的热展开时，观察到添加其他溶质（葡萄糖、葡聚糖、聚乙二醇、胍和尿素）导致了焓和熵不稳定。作者认为，基于其过剩焓贡献的宇宙效应的分类导致了全面的热力学模型。

> BSA LLPS加尿素之后，LLPS难以形成的原因？

对于crowding的看法，有一种观点认为其就该是惰性的，不与研究目标分子产生相互作用的，所以选取的一般是PEG，DEXTRAN，FICOLL和POLY（4-苯甲酸钠）（PSS）。这些聚合物通常以多分散物种的形式提供，因此具有分子质量的分布——熵焓分离，主要是熵效应主导？

另一种看法是，crowding实际上是会和目标分子有较弱的相互作用的，如Lee 等人研究了PEG与蛋白特定碱基的相互作用——起到还有焓效应的影响

>  Lee, Cheng-Chung; Su, Yu-Cheng; Ko, Tzu-Ping; Lin, Li-Ling; Yang, Chih-Ya; Chang, Stanley Shi-Chung; Roffler, Steve R.; Wang, Andrew H.-J. Journal of Biomedical Science (London, United Kingdom) (2020), 27 (1), 12CODEN: JBCIEA; ISSN:1423-0127. (BioMed Central Ltd.)

一些研究者选取的经典的LLPS蛋白体系：Examples of these proteins are the bovine pancreatic trypsin inhibitor (BPTI), ribonuclease A, lysozyme, β-lactoglobulin, hemoglobin, and bovine serum albumin (BSA)

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cr3c00615_0003.jpeg)

蛋白的紧密折叠会减少其与周围crowder的空间斥力，进而降低自由能

![Figure 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cr3c00615_0005.gif)

氢键结构也会影响热力学稳定性——淀粉样蛋白

小液滴通过聚集和熟化逐渐形成较大的液滴

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cr3c00615_0006.jpeg)

可以参考这个图画图

## 2 A colloidal model for the equilibrium assembly and liquid-liquid phase separation of the reflectin A1 protein

reference: Huang T C, Levenson R, Li Y, et al. A colloidal model for the equilibrium assembly and liquid-liquid phase separation of the reflectin A1 protein[J]. Biophysical Journal, 2024, 123(18): 3065-3079.

![image-20250403170019004](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250403170019004.png)

A1 蛋白由\`evolutionarily conserved domains\` 和 \`linker domains between them\`组成。linker主要响应pH等电性变化，conserved 区域则可能存在非特异性的疏水相互作用

高度折叠的蛋白，如溶菌酶，GG，等可以使用SA-LR模型进行描述

![fa15abf5c5afe1be2e25c28b719336d](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/fa15abf5c5afe1be2e25c28b719336d.png)

对于pH和浓度对相分离的影响，应该不少的蛋白都能够画出相图：

![cf501043f4833857934dd8e48afac6c](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/cf501043f4833857934dd8e48afac6c.jpg)

## 3 Temporal and spatial characterisation of protein liquid-liquid phase separation using NMR spectroscopy

reference： Bramham J E, Golovanov A P. Temporal and spatial characterisation of protein liquid-liquid phase separation using NMR spectroscopy[J]. Nature Communications, 2022, 13(1): 1767.

使用三氟乙醇TFE作为NMR的探针来研究BSA相分离体系

背景reference：

> During liquid-liquid phase separation (LLPS), a homogenous mixture of macromolecules separates into two distinct liquid phases, a ‘dense’ condensed phase enriched with a subset of components, and a ‘lean’ phase depleted of these components. This process is increasingly recognised in biology[1](https://www.nature.com/articles/s41467-022-29408-z#ref-CR1),[2](https://www.nature.com/articles/s41467-022-29408-z#ref-CR2), where it is responsible for the formation of membraneless organelles and condensates, including the nucleolus[3](https://www.nature.com/articles/s41467-022-29408-z#ref-CR3) and stress granules[4](https://www.nature.com/articles/s41467-022-29408-z#ref-CR4), but also implicated in a range of diseases, including neurodegenerative diseases[5](https://www.nature.com/articles/s41467-022-29408-z#ref-CR5),[6](https://www.nature.com/articles/s41467-022-29408-z#ref-CR6),[7](https://www.nature.com/articles/s41467-022-29408-z#ref-CR7), cataracts[8](https://www.nature.com/articles/s41467-022-29408-z#ref-CR8),[9](https://www.nature.com/articles/s41467-022-29408-z#ref-CR9), and sickle cell anaemia[10](https://www.nature.com/articles/s41467-022-29408-z#ref-CR10). LLPS is also an important phenomenon in biotechnology, as a purification and processing technique[11](https://www.nature.com/articles/s41467-022-29408-z#ref-CR11),[12](https://www.nature.com/articles/s41467-022-29408-z#ref-CR12), or as an unwanted physical instability in biopharmaceuticals[13](https://www.nature.com/articles/s41467-022-29408-z#ref-CR13).在液 - 液相分离（LLP）期间，大分子的同质混合物分为两个不同的液相，一个富含一部分成分的“致密”凝结相，而这些成分耗尽的“瘦”相。该过程在生物学1,2中越来越多地认识到，在该过程中，它负责形成无膜细胞器和冷凝物，包括Nucleolus3和应激颗粒4，但也涉及一系列疾病，包括神经退行性疾病，包括神经退行性疾病5,6,7，5,6,7，Cataracts8,9，CatarArcts8,9，和镰状细胞Anaeemia10。 LLP在生物技术中也是一种重要现象，作为一种纯化和处理技术11,12，或者是生物药物中有害的身体不稳定13。
>
> LLPS, sometimes referred to as condensation, manifests itself as the appearance of small dense liquid droplets suspended within a lean phase (microscopic LLPS), which often proceeds to the formation of distinct dense and lean layers in the sample once the droplets become large enough and coalesce (macroscopic LLPS). As the dense and lean phases exist in both scenarios, it is convenient to use the term “layer separation” to refer to this final stage of macroscopic LLPS. The kinetics of these processes, and the effect of different conditions or additives on these kinetics, is of particular interest[14](https://www.nature.com/articles/s41467-022-29408-z#ref-CR14),[15](https://www.nature.com/articles/s41467-022-29408-z#ref-CR15). However, these processes are difficult to study by existing techniques. Light scattering due to the presence of liquid droplets, or fluctuations in density or refractive index often results in opalescent or turbid solutions, rendering quantitative optical approaches challenging[16](https://www.nature.com/articles/s41467-022-29408-z#ref-CR16),[17](https://www.nature.com/articles/s41467-022-29408-z#ref-CR17). Fluorescence microscopy using labelled LLPS components or dyes may report on the radius of droplets, but not the concentration of the two phases[15](https://www.nature.com/articles/s41467-022-29408-z#ref-CR15),[18](https://www.nature.com/articles/s41467-022-29408-z#ref-CR18). Additionally, layer separation adds a complicating spatial component, due to non-uniform distribution of the phases throughout the sample[19](https://www.nature.com/articles/s41467-022-29408-z#ref-CR19). Therefore, the physical and geometrical constraints of biophysical techniques mean each may be limited to studying one aspect of LLPS, and further characterisation techniques are needed to reach a more holistic assessment, particularly regarding the evolution of the concentration and volumes of the two phases.LLP有时被称为凝结，表现为悬浮在瘦相（微观LLP）内的小密集液滴的外观，一旦液滴变得足够大并结合（Macroscopic LLP），通常会在样品中形成不同的密集和瘦的层。由于在两种情况下都存在致密和精益阶段，因此使用术语“图层分离”来引用宏观LLP的最后阶段很方便。这些过程的动力学以及不同条件或添加剂对这些动力学的影响特别感兴趣14,15。但是，这些过程很难通过现有技术研究。由于存在液滴或密度或折射率的波动而引起的光散射通常会导致乳白色或浑浊的溶液，从而使定量光学方法提起质疑16,17。使用标记的LLP成分或染料的荧光显微镜可以报告液滴的半径，但不能报告两个相15,18的浓度。此外，由于整个样品中这些相的分布不均匀，因此层分离增加了复杂的空间成分。因此，生物物理技术的物理和几何约束意味着每种可能仅限于研究LLP的一个方面，需要进一步的表征技术来进行更全面的评估，尤其是关于这两个阶段的浓度和体积的演变。

![Fig. 7](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2022_29408_Fig7_HTML.png)
`,qy=`---
layout: post
title: "python课程学习笔记2"
date:   2025-04-17
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

该笔记主要记录Harford的[CS50](https://cs50.harvard.edu/python/2022/)课程笔记，本笔记是对\`str\`相关用法，lecture3和lecture4的相关课程做的整理，包括\`try\`语句，以及\`random\`，\`statistic\`等package
<!-- more -->

## 1 str 常见用法

对字符串进行的常见操作有很多，比如大小写转化，分割，以及去除空格和输出格式化。具体的说明文档可以参考[here](https://docs.python.org/3/library/stdtypes.html#string-methods)

### 1.1 大小写转化

将字符串中所有的字母小写：

~~~python
str.lower()
~~~

判断是否是小写：

~~~python
str.islower
~~~

标题化（每个词的首字母大写。例如： I Like My Home)

~~~python
str.title()
~~~

判断是否是标题化的：

~~~python
str.istitle()
~~~

句子首字母大写：

~~~python
str.capitalize()
~~~

判断句子首字母是不是大写：

~~~python
str.iscapitalize()
~~~

将字符串的字母全部大写：

~~~python
str.upper()
~~~

同理判断是否是全大写：

~~~python
str.isupper
~~~



### 1.2 以xx开头，以xx结尾

~~~python
str.startswith(symbol_str)
~~~

这里的symbol_str是你要判断的开头的类型，如想知道是不是以\`hello\`开头那么可以用\`str.startswith("hello")\`

结尾同理：

~~~python
str.endswith(symbol_str)
~~~

### 1.3 去除内容

去除空格

~~~python
str.strip()
~~~

去除指定字符串：

![image-20250417110713887](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250417110713887.png)

### 1.4 分割与替换

#### 1.4.1 分割语句\`split\`

需要将字符串分割可以使用\`split\`语法，返回的是一个分割结果的列表，\`maxsplit\`参数控制\`split\`几次:

~~~python
str.split(sep,maxsplit)
~~~

如果sep什么都不填，默认按照空格\` \` 进行分割

![image-20250417111043507](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250417111043507.png)

当然，假如我们知道一个字符串就是yyyy/mm/dd的形式，且我们只需要分割出年份，那么可以：

~~~python
str_date=2020/2/12
year,others_str = str_date.split("/",maxsplit=1)
~~~

不需要再从分隔列表进行赋值操作，直接将分割的结果存入变量：\`year\`是2020，\`others_str\`是2/12

#### 1.4.2 替换语句

~~~python
str.replace(old, new, count=-1)
~~~

这里的old是要被替换的字符串，而new是用来替换的那部分的字符串，替换次数由count控制：

~~~python
str_hello='hello'
str_hello=str_hello.replace("l","",1)
~~~

将\`hello\`里面的\`l\`替换成空，只替换一次，那么经过上述的操作之后\`str_hello\`变成\`helo\`

### 1.5 判断字符串是不是数字

由于有时我们输入比如说月份，有可能是June这种字母，也可能是数字6，所以为了提取信息我们需要判断是不是数字

~~~python
str.isdigit()
~~~

\`isdigit\`函数可以实现上述要去

~~~python
month='June'
if not month.isdigit():
	month=6
~~~

需要注意的是\`  9\` 这种在\`isdigit()\`里面是会判断非数字的，所以判断前最好\`strip\`空格 

## 2 字典按键的字母顺序排序输出值

由于我们往字典里添加键值对往往是无须的，那么为了排序输出，我们可以用以下的方式

~~~python
dict={
"banana":3,
"apple":2
}
for i in sorted(dict.keys()):
	print(dict[i])
~~~

用sorted函数实现

## 3 try 语句

~~~python
try:
	#something we try to do
except ValueError:
	# if ValueError occurs, what we need to do
else:
	# if no error occurs, what we need to do
~~~

我们可以使用break来打破循环while，也可以使用pass使得无事发生继续进行

## 
`,Uy=`---
layout: post
title: "20250425文献日读笔记"
date:   2025-04-25
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理4.25部分的文献，包括主要包括水凝胶网络以及神经网络时间序列相关论文

<!-- more -->




![image-20250425151225393](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250425151225393.png)

一种可逆的水凝胶网络，加入催化剂促进水凝胶网络的转变

> J. Lou, S. Friedowitz, K. Will, J. Qin, Y. Xia, *Advanced Materials*. **33**, 2104460 (2021).

![6fb41b899c065c3447b0fb6e3f56e8c](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/6fb41b899c065c3447b0fb6e3f56e8c.png)

一种水性的相分离，由葡聚糖和PNIPAM产生，粘弹性随温度发生变化：

![6b858421d6b45ed00f514e69e03deb9](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/6b858421d6b45ed00f514e69e03deb9.png)

> H. Cui *et al.*, *Advanced Materials*. **34**, 2205649 (2022).、

日常各自材料中的粘弹性模量范围：

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2024_47969_Fig1_HTML.png)

动态光散射来测量g以及<g^2>

> G. K. Wang, Y. M. Yang, D. Jia, *Nat Commun*. **15**, 3569 (2024).

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2024_45323_Fig1_HTML.png)

利用动态时间序列信息和原始图像进行重建，用的tensorflow

嵌合SDE实现，隐状态数量需要提前设定

> F. Regazzoni, S. Pagani, M. Salvador, L. Dede’, A. Quarteroni, *Nat Commun*. **15**, 1834 (2024).

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_57664_Fig1_HTML.png)

不同区域/特征的时间序列（x_i），构造D(x)矩阵，实现无模型推断各个节点之间的相互作用

julia 语言编写

> R. Delabays, G. De Pasquale, F. Dörfler, Y. Zhang, *Nat Commun*. **16**, 2691 (2025).



![3813cdb3ad235a06f04baee67171035](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/3813cdb3ad235a06f04baee67171035.png)

confocal下捕获无序多态的运动，计算自相关（ zero-mode waveguides (ZMWs)辅助），对应构象变化的阐释（解折叠）

![a1fdaaf670c163df91cac5d6340dea5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/a1fdaaf670c163df91cac5d6340dea5.png)

> M. F. Nüesch *et al.*, *J. Am. Chem. Soc.* **144**, 52–56 (2022).
`,Vy=`---
layout: post
title: "MIT web dev 学习笔记 1"
date:   2025-05-23
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录[MIT Web Development Crash Course](https://weblab.mit.edu/schedule)课程的笔记，本节主要记录的是Monday, january 6, 2025的课程内容，包括kickoff, git basic, HTML/CSS intro 等内容。

<!-- more -->

## 1 Kickoff

一些信息：

- No, the competition is not mandatory. But it doesn’t hurt to submit your website into the competition!
- We’ll have live help during workshops where you can add yourself to the queue on [weblab.is/q](http://weblab.is/q).
- You can find the questions doc at [weblab.is/questions](http://weblab.is/questions), where you can ask questions anonymously during class. 
- You can find the old questions doc at [weblab.is/oldquestions ](http://weblab.is/oldquestions)
- Student hub for shortlinks is at [weblab.is/info](http://weblab.is/info)
- **Don’t have a team yet? Stay after lecture today for a team-finding mixer!**

然而考虑到旁听/非mit的学生，没有对应的邮箱，所以这些内容都无法访问，作业则需要从GitHub上寻找：[Here](https://github.com/weblab-workshops)

关于课程安排可以从[Here](https://weblab.mit.edu/schedule)查看schedule

该课程将从前端到后端教你全过程（全栈）

### 1.1 访问网站

![image-20250523153945968](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523153945968.png)

实际收到的文件包括HTML文件和CSS文件,js文件(前端三件套)

第一周的目标就是构建一个catbook的website，作业内容应该对应于GitHub的[here](https://github.com/weblab-workshops/catbook-react)，实例网页[weblab.is/example](http://weblab.is/example)

### 1.2 课程的要求

- Dynamic website supported by a back-end

- Personalized experience based on user accounts

- Minimum security requirements fulfilled

- Original design and implementation

- Use Git on a web.lab Github repo

一些不能的做的事情：

- Use anything like Drupal, Wordpress or Squarespace

- Use any part of a previous project 

- Outsource your development. Hire minions.

- Evil

### 1.3 评判的标准

|                   |                                              |
| ----------------- | -------------------------------------------- |
| Functionality     | technical components of your core features   |
| Usability         | ease-of-use of the website                   |
| Aesthetics        | look-and-feel of the website                 |
| Concept Execution | applicability of the solution to the problem |

## 2 Git Basics

如何代码的协作在现在是一个密切需要解决的问题

最基本需要考虑的点在于：代码的独立拷贝，修改内容的比较以及解决冲突的问题，版本的控制

这些，正是git试图解决的问题

git通过跟踪修改来实现记录版本

一些命令行的基本操作

| 操作    | 内容               |
| ------- | ------------------ |
| \`ls\`    | 列出文件夹内的内容 |
| \`cd\`    | 进入指定文件夹     |
| \`mkdir\` | 创建文件夹         |

初始化，创建一个git仓库：

~~~
git init
~~~

(需要先cd到对应的文件夹下)

当代码的许多文件发生了改变的时候，当我们想打包这些修改并提交到git的修改记录时，我们可以用\`git add\`实现

![image-20250523161400265](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523161400265.png)

使用\`git status\`则可以检查git的提交记录

当使用\`git add\`之后，修改的内容就被存储到了staging area缓存区，只有我们\`git commit\`之后才会进入仓库的修改

例如： 此处的-m后的内容提交的一些信息

![image-20250523161719063](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523161719063.png)

此时再看\`git log\`:

![image-20250523161839841](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523161839841.png)

注意到上面的commit后面的一长串的东西就是git的commit id，后续我们要用什么的时候，就要用到这个commit id

但还面临一个问题，那就是你现在修改了很多的内容，但工作要求你先修好原始内容上的bug，你需要从你现在的这条工作线条回原先的工作线，这应该如何解决呢？

在git里，用的是branch分支的方式：

![image-20250523162251778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523162251778.png)

其中每一个节点是一个操作，那么看到上面的三个操作都是从last home page这个地方分支出来的，不同的人做不同的修改，git也会记录这些分支。

我们可以使用\`git branch\`查看现在有哪些分支：

![image-20250523162448137](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523162448137.png)

看到目前只有一个master

那么可以通过\`git checkout\`来创建新的分支：

![image-20250523162605995](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523162605995.png)

此时就创造了一个test的branch并从master切换到了test

接下来就可以在这个branch上进行更改

![image-20250523163012392](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523163012392.png)

分支产生并修改之后应该如何把这些修改重新放回主分支呢

先查看分支\`git branch\`，然后切回主分支\`git checkout main/master\`最后再merge：\`git merge + branch name\`

最终的仓库结构就成了：

![image-20250523163511844](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523163511844.png)

但上述的内容都仅仅是在本地实现的，需要多人异地同步那么就需要一个远端的服务，一般是用GitHub，这又该怎么实现呢：

首先，代码是在远程服务器存在一份，每个人都先要获得的是整个仓库的一份copy：

![image-20250523163713325](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523163713325.png)

这一般使用\`git clone\`

然后在本地进行修改和commit：

![image-20250523163750840](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523163750840.png)

最后需要把commit在本地git的内容提交到远程需要使用\`git push\`:

![image-20250523163828835](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523163828835.png)

而其他人想要对比自己的版本和远程服务器上的版本的区别则应该使用\`git fetch\`:

![image-20250523163909460](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523163909460.png)

从远端服务器更新别人的修改到自己本地的git则使用\`git pull\`

\`git reset --hard\` 则会清楚所有未提交的暂存（直接重置所有的add内容）

## 3 HTML 简介

![image-20250523180610023](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523180610023.png)

HTML是超文本文件，他就像一个网页的骨架，而CSS则是股价之上的皮肉和服饰

对于理解HTML的main idea来说，可以把他理解为一堆相邻的盒子/容器

例如这个图片中的每一个红色的框框就是一个容器，这些容器组合而成了整个网页：

![image-20250523180838239](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523180838239.png)

接下来我们看看代码的一个简单示例：

![image-20250523180918897](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523180918897.png)

一般对于html文件来说一般都会包含一个\`<!DOCTYPE html>\`意在告诉浏览器你使用的是最新的html

然后继续看上面的代码我们不难发现一些opening tag 和一些closing tag，一般都是<>和</>的形式，那么这俩者之间的就是整个容器了

那么对于上面的html文件来说，很容易的发现整个html容器里又有两个子容器分别是head容器和body容器

由于html是一堆容器，所以一般而言，以下的容器还没结束又开始一个新容器是不可以的：

![image-20250523181310914](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523181310914.png)

\`<html>\`是整个文件的根容器，是包裹整个html所有内容的容器，而\`<head>\`容器一般存储一些元数据，他们往往不会直接显示在网页，但是会有一些其他的辅助作用，\`<body>\`则包含所有网页里会出现的内容。

一些常用的通用标签如下：

![image-20250523181537888](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523181537888.png)

一般不会直接使用这些tag而是会有一些属性需要赋予：

~~~
<tagname attribute="value">
</tagname>
~~~

例如对于链接来说，其html一般是：

~~~
<a herf="links here" str to print>
</a>
~~~

除此之外还有图像等：

![image-20250523181946162](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523181946162.png)

一般对于图片来说我们不会往图片容器里添加内容，所以出于简化可以：

![image-20250523182045631](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523182045631.png)

这里需要注意相对路径，除此之外是如果图像无法正常显示那么可以添加一些替代的提示文本：

![image-20250523182208863](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523182208863.png)

除此之外还有list相关的tag：

![image-20250523182529947](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523182529947.png)

例如：

![image-20250523182523382](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523182523382.png)

而对于\`<div>\`和\`<span>\`两类标签来说，他们的区别在于是否换行

![image-20250523182712417](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523182712417.png)

为什么要用\`<div>\`呢？

因为这可以帮助我们很好的一次性设置几个tag的格式

对于学习html来说，我们并不需要记住所有的标签，遇到需要的合适的我们可以Google或者看 mdn web docs 网站

一般而言其实不建议滥用div，而是一般选用对应用途下的对应tag

>  So:  Don’t just use \`<div>\`.Use MDN to find the element you need!

## 4 CSS 简介

CSS =a list of description

以下是一个css的基本单元

![image-20250523183514187](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523183514187.png)

这里的div就是我们选择需要装饰的html容器

上述的css作用于html如下所示：

![image-20250523183752605](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523183752605.png)

![image-20250523183801210](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523183801210.png)

有时候我们想对div里面的内容进行更精细的调控，那么我们可以对div添加类：

~~~
<div class="info">Info</div>
~~~

那么CSS在设置的时候只需要：

~~~
.info{
color:red;
font-family:Arial;
font-size:24pt;
}
~~~

就可以只修改对应的div，另一种方式是使用id：

![image-20250523184109557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523184109557.png)

那么这两者有什么区别呢？

1. 一个html的div只能有一个id，但可以有很多类
2. 一个id只能对应一个对应唯一的一个容器

![image-20250523184254929](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523184254929.png)

对于CSS是有一定层级的：

![image-20250523184344672](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250523184344672.png)

对应的从下往上越来越特定

所以即便两个设置不一样，那么也会优先按照更高特定的设置结果来进行设置

那么当我们设置了css后，我们需要在html中引入中国css：

~~~
<head>
    <title>Title!</title>
    <link rel="stylesheet"  
          href="style.css" />
  </head>
~~~

对于一些具体作用的块的css一般以u开头命名：

~~~css
.u-textCenter {
  text-align: center;
}

~~~

8pt system:

padding在8以及其除以2的时候较为和谐

![image-20250524004607477](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250524004607477.png)

关于flex

![image-20250524005402403](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250524005402403.png)
`,Wy=`---
layout: post
title: "MIT web dev 学习笔记 2"
date:   2025-05-28
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录[MIT Web Development Crash Course](https://weblab.mit.edu/schedule)课程的笔记，本节主要记录的是第一节课程的workshop部分的内容，整个workshop参考以下链接[here](https://github.com/weblab-workshops/catbook-react), 基本的文件从其下载即可

<!-- more -->

## 1 workshop 目标
构建如下的一个静态网页：

![image-20250528160733949](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528160733949.png)

其中，字体需要从Google fonts 处获得，图片在文件夹的根目录里。

为了实现这个目标，我们还是从最基本的开始，即先构建html的骨架

## step1 html 网页骨架的构建

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
  </head>

  <body>
      <h1>Catbook</h1>
      <h1 >Buka Buka</h1>
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
  </body>
</html>

~~~

不难得到以下的一个全是标题和文字的最为朴素的网页：

![image-20250528161454165](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528161454165.png)

创建了一个名为catbook的网页(\` <head><title>Catbook</title></head>\`)，这个网页里包含2个大标题：\`<h1>Catbook</h1>\`和\`<h1 >Buka Buka</h1>\`，以及两个小标题\`<h4>About Me</h4>\`，最后是文字部分，通过\`<p>I actually prefer turtles.</p>\`的形式实现

## step2 插入图片

在原本的代码上我们插入一行\`<img src="./cat.png" alt="A cute cat" />\`表示使用这个图像，如果图像加载不出来就用字符串\`A cute cat\`代替

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
  </head>

  <body>
      <h1>Catbook</h1>
      <img src="./cat.png" alt="A cute cat" />
      <h1 >Buka Buka</h1>
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
  </body>
</html>

~~~

以下是图裂了的情况👇：

![image-20250528162302712](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528162302712.png)

以下是图片正常加载的情况👇：

![image-20250528162606026](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528162606026.png)

## step3 将这些简介字体都居中

为了调整这这些简介和标题的字，我们需要使用css的方式来进行美化，一般css文件命名为style.css 存放在和html平行的目录，为了更加方便的对每一个元素进行操控，我们可以通过对标签添加类的方式然后在css中对类的格式进行修改调整来实现美化，需要注意的是，使用css后需要在html中引入css文件：\`<link rel="stylesheet" herf="./styles.css">\`

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <h1>Catbook</h1>
    <img src="./cat.png" alt="A cute cat" />
    <h1 class="u-textCenter">Buka Buka</h1>
    <h4>About Me</h4>
    <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
    <h4>My Favorite Type of Cat</h4>
    <p>I actually prefer turtles.</p>
  </body>
</html>

~~~

然后在styles.css中创建一个类：

~~~css
.u-textCenter {
  text-align: center;
}

~~~

使用text-align来居中对应类

最终结果如下所示：

![image-20250528163502656](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528163502656.png)

下面的字体同理，为了把下面的字体统一调控，我们可以把他们都放置在同一个section之下，然后让这个section也有上述的u-textCenter类

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <h1>Catbook</h1>
    <img src="./cat.png" alt="A cute cat" />
    <h1 class="u-textCenter">Buka Buka</h1>
    <section class="u-textCenter">
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
    </section>
  </body>
</html>

~~~

其效果如下图所示

![image-20250528163702929](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528163702929.png)

## step4 修改字体

修改字体较为简单，在[Google fonts](https://fonts.google.com/)中挑选合适的字体之后，将其对应的代码拷贝后放入header的部分

![image-20250528163927208](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528163927208.png)

![image-20250528163945722](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528163945722.png)

拷贝之后就可以直接在css里设置你想设置的对象的字体，这里我们将整个body的字体都设置成一样的字体：

~~~css
.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}

~~~

然后是html文件：

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <h1>Catbook</h1>
    <img src="./cat.png" alt="A cute cat" />
    <h1 class="u-textCenter">Buka Buka</h1>
    <section class="u-textCenter">
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
    </section>
  </body>
</html>

~~~

可以看到所有的字体都被改变成如下的样子

![image-20250528164340508](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528164340508.png)

## step5 添加navbar 

我们的目标最上面的catbook 标题是有横幅的，在这称之为navbar，我们可以创建一个\`nav\`标签，将catbook标题包含在内，最后再在css中设置navbar的style 即可

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <nav class="navContainer">
      <h1 class="navTitle">Catbook</h1>
    </nav>
    <img src="./cat.png" alt="A cute cat" />
    <h1 class="u-textCenter">Buka Buka</h1>
    <section class="u-textCenter">
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
    </section>
  </body>
</html>

~~~

那么我们只需要调整\`navTitle\`对象的字体就行了，这里可以在css文件中设置

~~~css
.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.navTitle {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: var(--primary);
}
:root {
  --primary: #396dff;
  --grey: #f7f7f7;
  --white: #ffffff;
}

~~~

这里我们在root处设置一些常见的颜色方便其他元素调用，这里的margin则是为了将浏览器的外边距设置为0

这是没设置外边距为0的：

![image-20250528165339559](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528165339559.png)

这是设置后的：

![image-20250528165416117](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528165416117.png)

可以看出整个内容更为紧凑，从而方便对navbar进行调控

## step6 设置调整navbar

注意到我们的目标navbar是一个蓝底白字的，所以我们需要把\`navTitle\`设置成白色，同时还要把\`navContainer\`设置成蓝色，很容易通过设置styles.css实现

~~~css
.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
}
.navTitle {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: var(--white);
}
.navContainer {
  background-color: var(--primary);
}
:root {
  --primary: #396dff;
  --grey: #f7f7f7;
  --white: #ffffff;
}

~~~

但其结果如下：

![image-20250528165813467](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528165813467.png)

可以看到他和浏览器的书签栏有一个明显的白色间隔，这就是\`margin\`，所以我们还需要将\`margin\`设置为0,这里设置的是\`body\`对象的\`margin\`

~~~css
.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 0;
}
.navTitle {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: var(--white);
}
.navContainer {
  background-color: var(--primary);
  padding: 8px 16px;
}
:root {
  --primary: #396dff;
  --grey: #f7f7f7;
  --white: #ffffff;
}

~~~

除此之外，这里还设置了一个padding。设置padding可以使得文字和边框有一定的边距，这里设置的上下边距是8px左右边距是16px

最终的设置结果如下所示：

![image-20250528170405907](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528170405907.png)

发现已经没有了白条

## step7 处理图像

我们为了处理图像，当然也需要对图像所在标签添加一个class然后对这个class的css进行调整：

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <nav class="navContainer">
      <h1 class="navTitle">Catbook</h1>
    </nav>
    <img src="./cat.png" alt="A cute cat" class="avatar" />
    <h1 class="u-textCenter">Buka Buka</h1>
    <section class="u-textCenter">
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
    </section>
  </body>
</html>

~~~

这里将图像的\`class\`命名为\`avatat\`，接下来我们去styles.css 中调整\`avatar\`对象的属性：

为了将图像变圆，我们需要使用\`border-radius\`来调整，一般来说我们还可以在root里设置几个挡位例如16px，8px，4px，2px，32px

~~~css
.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 0;
}
.navTitle {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: var(--white);
}
.navContainer {
  background-color: var(--primary);
  padding: 8px 16px;
}
:root {
  --primary: #396dff;
  --grey: #f7f7f7;
  --white: #ffffff;
  --m: 16px;
  --s: 8px;
  --xs: 4px;
  --l: 24px;
  --xl: 32px;
}
.avatar {
  border-radius: 50%;
}

~~~

这里设置比例为50%，设置结果如下:

![image-20250528171102526](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528171102526.png)

可以看到是个椭圆形，这是因为我们没有设置其长宽相等，而且整个头像也太大了，我们可以通过width和height来缩放，再通过\`aspect-ratio: 1/1;\`设置长宽相等，同时还可以把margin和padding设置好：

~~~css
.avatar {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  margin: auto;
  padding: 8px 16px;
}

~~~

这是设置完之后的结果👇

![image-20250528171348792](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528171348792.png)

这里还需要加入  \`object-fit: cover;\` 和\` display: block;\`，前者控制图像放缩的方式是拉伸还是裁剪，后者则是把对象变成了一个block，其结合\`margin: auto\`实现图像的居中。

~~~css
.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 0;
}
.navTitle {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: var(--white);
}
.navContainer {
  background-color: var(--primary);
  padding: 8px 16px;
}
:root {
  --primary: #396dff;
  --grey: #f7f7f7;
  --white: #ffffff;
  --m: 16px;
  --s: 8px;
  --xs: 4px;
  --l: 24px;
  --xl: 32px;
}
.avatar {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  margin: auto;
  object-fit: cover;
  display: block;
  padding: 8px 16px;
}

~~~

![image-20250528171836400](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528171836400.png)

注意到bukabuka下面还有个分割线，我们在html里用\`<hr/>\`实现

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="./styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <nav class="navContainer">
      <h1 class="navTitle">Catbook</h1>
    </nav>
    <img src="./cat.png" alt="A cute cat" class="avatar" />
    <h1 class="u-textCenter">Buka Buka</h1>
    <hr />
    <section class="u-textCenter">
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
    </section>
  </body>
</html>

~~~

结果如下：

![image-20250528172115321](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528172115321.png)

## step8 处理文字分栏

为了实现布局，这里使用的是一维布局工具flex，我们需要布局的就是以下的部分

~~~html
<section class="u-textCenter">
      <h4>About Me</h4>
      <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      <h4>My Favorite Type of Cat</h4>
      <p>I actually prefer turtles.</p>
</section>
~~~

我们可以把整个部分放在flex容器中，每一个小part是flex的一个子容器，一个子容器存放about me 一个子容器存放My Favorite Type of Cat

~~~html
<div class="u-flex">
    <section class="u-textCenter">
    	<h4>About Me</h4>
        <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
    </section>
    <section class="u-textCenter">
    	<h4>My Favorite Type of Cat</h4>
        <p>I actually prefer turtles.</p>
    </section>    
</div>
~~~

而父容器需要开启flex，对应于css文件中的\`display:flex;\`

而且由于我们的about子容器（子容器1）在favorite子容器（子容器2）之前，我们希望布局是子容器2在左，子容器1在右，而默认的flex布局\`row\`是从左往右布局：【子容器1】 【子容器2】，所以我们布局要反过来\`row-reverse\`

~~~
.u-flex {
  display: flex;
  flex-direction: row-reverse;
}
~~~

经过上述之后得到如下的结果：

![image-20250528173337659](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528173337659.png)

这是因为我们只设置了flex容器内的排序，没有设置两个子容器的格式和布局

我们需要设置子容器的起始位置为0(表示定格)，子容器的尺寸保持一致，都是一样，那么我们只需要对\`.subContainer\`进行设置，那么两个子容器都符合相同的类的约束

~~~css
/* Your Code Here! */

.u-textCenter {
  text-align: center;
}
body {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: 0 0;
}
.navTitle {
  font-family: "Poetsen One", sans-serif;
  font-weight: 400;
  margin: 0;
  font-size: 2rem;
  text-align: center;
  color: var(--white);
}
.navContainer {
  background-color: var(--primary);
  padding: 8px 16px;
}
:root {
  --primary: #396dff;
  --grey: #f7f7f7;
  --white: #ffffff;
  --m: 16px;
  --s: 8px;
  --xs: 4px;
  --l: 24px;
  --xl: 32px;
}
.avatar {
  width: 10%;
  height: 10%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  object-fit: cover;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 16px;
}
.u-flex {
  display: flex;
  flex-direction: row-reverse;
}
.subContainer {
  flex-grow: 1;
  flex-basis: 0;
}

~~~

~~~html
<!DOCTYPE html>
<html>
  <head>
    <title>Catbook</title>
    <link rel="stylesheet" href="styles.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
      rel="stylesheet"
    />
  </head>

  <body>
    <nav class="navContainer">
      <h1 class="navTitle">Catbook</h1>
    </nav>
    <img src="./cat.png" alt="A cute cat" class="avatar" />

    <h1 class="u-textCenter">Buka Buka</h1>
    <hr />
    <div class="u-flex">
      <section class="u-textCenter subContainer">
        <h4>About Me</h4>
        <p>I am more of a turtle person but I'm just trying to fit in and get a catbook.</p>
      </section>
      <section class="u-textCenter subContainer">
        <h4>My Favorite Type of Cat</h4>
        <p>I actually prefer turtles.</p>
      </section>
    </div>
  </body>
</html>

~~~

如果要设置两个子容器的尺寸比例不一致，那就得分别设置两个class，class1的flex-grow是1，class2的flex-grow是2这种。这里的flex-grow绝对数值意义不大，重要的是在父容器中相较于其他子容器的占比，这将决定他的尺寸

最终结果如下图所示👇：

![image-20250528173951289](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250528173951289.png)

当然也可以访问以下网址：[here](https://junedrinleng.com/catbook0/)
`,Gy=`---
layout: post
title: "MIT web dev 学习笔记 3"
date:   2025-05-29
tags: [cs_basic]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录[MIT Web Development Crash Course](https://weblab.mit.edu/schedule)课程的笔记，本节主要记录的是第一节课程的JavaScript的部分，课程链接在[here](https://www.youtube.com/watch?v=OMuYHyBi-Ms&ab_channel=MITWebLab%286.962%29)

<!-- more -->

## 1 js简介

p.s. better for not fresh hand

JavaScript的目的是什么？

![image-20250529154027798](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529154027798.png)

上节课已经学到了，html是网页的骨架，css是网页的装饰，那么js是用来解决什么的呢？

js类似于肌肉和器官来保证整个网页的顺利运行——操纵网页内容的程序语言，让网页富有交互性

运行的环境：浏览器的console，按住\`ctrl+shift+j\`

## 2 js的数据类型

![image-20250529154846871](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529154846871.png)

需要注意的是，js没有float和int之分，所有的这些都被归结在number下

另一个需要考虑的是，js有Null和Undefined的两种tricky的东西

## 3 js的operator

对于\`number\`的加减乘除等操作是很正常的，另外对字符串的相加操作也是如常的，除此之外，对于Boolean的产生也是基本和python一致（不等于和等于是三个符号）。

![image-20250529161259220](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529161259220.png)

**不难发现这里的判断是否相等用的是\`===\`，不相等则是用的\`!==\`**

这里需要讨论一下\`==\`和\`===\`的区别

对于一般的编程语言，一般都用\`==\`来判断这俩变量是否指向同一个内存地址，这个是在js中是通过\`===\`实现的，而一般的\`==\`在js里则进行的首先是type一致化的操作，然后再进行比较，这就会导致很多和直觉相左的结果：

![image-20250529162015499](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529162015499.png)

例如这里的\`2=="2"\`就会先将\`2\`和\`"2"\`转换成相同类型，例如都转化为\`"2"\`然后再比较，这时两者是相等，所以返回的是\`true\`

由于上述机制的存在，所以我们比较时总是使用三重符号，而非双等号这种‘

对于array呢？

![image-20250605212716097](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605212716097.png)

![image-20250605212732291](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605212732291.png)

即便内容一样，但他们是存在两个不同的存储对象的，所以对应的指针也是不一样的，因此\`===\`是\`false\`

因此我们想要copy一个array并不能直接使用等号：

![image-20250605213023050](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605213023050.png)

而是得用spread operator：

![image-20250605213040604](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605213040604.png)

## 4 js 基本语法

需要注意的是，每行语句的结尾都需要一个分号。与python不同的是，js是缩进不敏感的，对于代码块的分辨来源于大括号{}，注释则是通过//实现

对于js的变量定义，需要申明，使用\`let\`语句申明，同时变量的命名需要使用驼峰命名法才行，不建议使用下划线的命名方式

![image-20250529162851460](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529162851460.png)

对于常量的定义则是通过\`const\`语句实现

![image-20250529163149528](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529163149528.png)

为什么要有变量和常量之分？为了安全coding，防止某些常量被修改影响后续程序。如果试图要改变const常量，js回返回错误信息

需要注意的过去对于变量定义还有一个定义方式\`var\`，区别在于var的作用域是仅仅被函数限制的（函数内变量），而let的变量是被大括号所限制的

~~~javascript
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2
}
//setTimeout是异步函数，如果是var的化，循环结束才会执行回调，此时回调是循环结束之后进行的也就说i全都是3了
~~~

~~~javascript
function test() {
  if (true) {
    var a = 123;
  }
  console.log(a); // 123，a 在整个函数内都可见
}

~~~

所以为了更清晰的变量作用域，请不要使用\`var\`

## 5 null和undefined

\`undefined\`表示没有分配内容，例如对于变量可以只声明而没赋值

\`null\`则表示的是没有值 

为了清楚的了解变量的值，我们可以使用\`console.log()\`的方式实现类似于\`print\`的效果

结构化字符串的实现：

~~~javascript
let a=1;
let b=2;
console.log(\`a+b=\${a+b}\`);
~~~

另一种调试的方法是使用\`alert\`函数

## 6 array in js

在js中，array类似于python的list但是其中的元素可以是任何一种数据类型

![image-20250529174906305](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250529174906305.png)

也可以很容易的实现获取，删除，增加，以及替换

~~~javascript
pets.push("rabbit"); //add rabbit in the end
pets.pop(); // delete element from the end
~~~

## 7 conditionals, loop in js

判断语句：

~~~javascript
if (hour<12){
    console.log("Good Morning");
}else if (hour<16){
    console.log("Good Afternoon");
}else{
    console.log("Good night");
}
~~~

循环语句：

![image-20250605212151901](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605212151901.png)

for循环则如下：

![image-20250605212212967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605212212967.png)

被遮挡的部分是\`pets[i]\`

除此之外也可以通过以下的方式实现：

![image-20250605212320533](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605212320533.png)

直接遍历每个元素，而非通过索引再实现

## 8 object properties

\`js\`的\`object properties\`和\`python\`的\`dict\`很接近

![image-20250605212536049](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605212536049.png)

## 9 functions

使用（）=>{}的方式构造，但问题在于并不能called，所以需要加上name

![image-20250605213155916](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605213155916.png)

我们可以变为：

![image-20250605213440721](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605213440721.png)

所以我们如果要call这个函数，只需要：

![image-20250605213532170](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605213532170.png)

除此之外，其实我们可以把function作为another function的输入，这称之为callback

![image-20250605213915709](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605213915709.png)

B是得到function的return结果，而不是function本身

正确答案是A,C

![image-20250605214057786](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250605214057786.png)

除此之外，还有class，不过不太常用于本课程
`,Xy=`---
layout: post
title: "20250606文献日读笔记"
date:   2025-06-06
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月6日阅读的部分文献，包括主要包括钠硫电池及其机理的一篇综述，基于配合物+交联网络实现光谱反映速度场，以及纤维素支架的水凝胶

<!-- more -->

## 1 利用纤维素支架实现坚固且可控的软致动器的异质界面互锁水凝胶

> reference: [Y. Song *et al.*, *Advanced Functional Materials*. **n/a**, 2509712 (2025).](https://advanced.onlinelibrary.wiley.com/doi/10.1002/adfm.202509712)

![65fda325e47fe2bcd9ad57e4cb31a22](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/65fda325e47fe2bcd9ad57e4cb31a22.png)

材料受叶片结构启发，整个水凝胶在纤维素的骨架上进行原位的聚合，并展现其导电性以及应力应变曲线、阻尼效应等力学特性

![de58c3715bbada03ca9617e81544ed9](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/de58c3715bbada03ca9617e81544ed9.png)

材料可以从较为柔软的部分到硬化，并测试了其拉伸应变性能

![93d435a544432b24ffad378121f32eb](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/93d435a544432b24ffad378121f32eb.png)

在不同浓度的三价铁离子里浸泡回逐渐产生弯曲的结果（与盐析效应有关，不同浓度的$Fe^{3+}$环境下，水凝胶内部的含水量不同），同时在盐酸溶液之中则呈现出动态解离的过程

![949ff607dfada406fc2c293afe78dd1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/949ff607dfada406fc2c293afe78dd1.png)

选用不同的粒子也会影响水凝胶材料的弯曲角度，同时相较于对照组，PBCI材料在解交联再重新交联后，其弯曲形变保持的更好，同时材料对压力和循环的稳定性较好（图g,h）

## 2 应力的荧光可视化——借助共价有机组合体

> reference: Y. Ren *et al.*, *J. Am. Chem. Soc.* (2025), doi:[10.1021/jacs.5c05354](https://doi.org/10.1021/jacs.5c05354)

![b3f3efb618ac99f70ea20d57fe5da7b](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/b3f3efb618ac99f70ea20d57fe5da7b.jpg)

通过钌配合物的氨基与TPE-4CHO的醛基发生反应形成亚胺构造交联网络

b图计算的表面电荷分布（DFT）然后测量了其不同浓度的荧光光谱

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/ja5c05354_0002.jpeg)

再加上封端的peg实现peg化，进而会放生形成超结构的二次组装，peg的反应比不同其光谱特性也有所不同

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/ja5c05354_0003.jpeg)

同时材料还能够对应变以及摩擦进行响应，同时其在管道中不同的流速也会呈现出不同的响应：

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/ja5c05354_0004.jpeg)

因此可以用于活体的脑血流速度活体成像

（from 杨振忠课题组 **can have a try?** 先看他的后续引用情况吧）

## 3 操纵可充电金属硫电池中的硫氧化还原动力学： 基本原理和通用方法

一篇基于含硫电池的电池内氧化还原动力学的综述

> reference: X.-L. Huang *et al.*, , doi:[10.1002/adma.202419089](https://doi.org/10.1002/adma.202419089).

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adma202419089-fig-0003-m.jpg)

含硫电极经历多个级别的氧化还原过程，从$S_8$单质到诸多$S_x^{y-}$的链状多硫离子

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adma202419089-fig-0004-m.jpg)

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adma202419089-fig-0006-m.jpg)

图解了一下多硫离子的电子传到机制

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adma202419089-fig-0009-m.jpg)

对于高分子的电解质，阳离子存在类似于bridge的情形，以及形成了一些盐效应，使得紧密离子对解耦，盐浓度高了会形成更加local的离子对，减少导电性

![Details are in the caption following the image](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/adma202419089-fig-0010-m.jpg)

`,Yy=`---
layout: post
title: "Marangoni Effect"
date:   2025-06-09
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月9日阅读的部分文献，主要是介绍电解水情况下，电极附近出现的Marangoni Effect的相关研究

<!-- more -->
## 1 电催化析氢气泡动力学
>reference: [S. Park *et al.*, *Nat. Chem.* **15**, 1532–1540 (2023).](https://www.nature.com/articles/s41557-023-01294-y)

了解电解水过程中的气泡演化能够对电极/电解质/气泡的界面优化起到帮助，研究方向氢气的析出在不同电解的表面呈现处差别——这些差别主要是由于溶质Marangoni 对流影响的

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Figa_HTML.png)

Hofmeister系列阴离子改变表面张力影响电解质的聚集效应，从而影响了气体的生成动力学

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig1_HTML.png)

这里的电流采用的是振荡的电流，拍摄的是大液滴下新生成小液滴，同时根据其进行相关项的计算

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig2_HTML.png)

这里控制阳离子一致，电压一致的情况下研究阴离子效应对气泡生成的影响

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2023_1294_Fig4_HTML.png)

对于marangoni效应，主要影响的就是温度和离子浓度两种情况，温度增加，表面张力降低，而远离电极的地方温度则要低一些，使得那部分的表面张力增加；离子浓度与之相近，靠近电极的地方浓度较低从而使得表面张力较低，而远离电极的地方增加了离子浓度，进而增加了表面张力（存在pos和neg两种影响的方向）

## 2 正常和微重力条件下水电解期间电解质液滴在H2气泡中喷洒

> reference:  [A. Bashkatov *et al.*, *Nat Commun*. **16**, 4580 (2025).](https://www.nature.com/articles/s41467-025-59762-7)

电解工程中的气泡产生会县住的影响到电极的效率，因此理解气泡产生动力学有助于优化电解水系统，本文介绍了一种电解水液滴被射流（Worthington jet）进入氢气气泡内的传输机制

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig1_HTML.png)

图中的黑色圆圈是已经生成的大气泡，后续他和电极pt接触的地方会陆续产生一些小的气泡，这些小的气泡会影响到大气泡的内部，在大气泡的内部形成b图那样的液滴射流

随后，作者将这些射流的速度涡旋给计算表征了出来：
![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig2_HTML.png)

随后，作者团队对液滴的背面进行了观察，竟然观察到了射流之后形成的电解质水坑：

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig3_HTML.png)

图中的a，b，d都是这种气泡内的电解质水坑的拍摄图像，而图c则是介绍的电解质水坑形成的可能的两种途径：

一种是在电极表面生成的邻居气泡逐渐长大后接触了该气泡，从而产生融合，融合过程会将部分的小液滴溅射入大液滴内部，部分小液滴由于重力作用，在一段时间之后就沉降在了底部。

另一种机制则是在隔壁不断的产生小液滴，小液滴不断升起，被大液滴捕获，然后产生射流并在大气泡内部产生喷射的小液滴，由于气泡更小，所以液滴更容易在重力作用下沉降。

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig4_HTML.png)

上图是对这种气泡内部射流及其投影的拍摄，可以看见其基本呈现接触-融合-射流产生-表面修复的过程

本实验通过下图的成像系统实现，图b是marangoni流的机制

![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41467_2025_59762_Fig5_HTML.png)

## 3 总结与思考

即便实验上并没有非常大的工作量，但是拍摄到了这种内部的溅射现象依然是很出彩的；大nc那篇则是着重于研究溶质对marangoni效应的影响，着重于调控机制
`,Qy=`---
layout: post
title: "20250610文献阅读笔记"
date:   2025-06-10
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月10日阅读的部分文献，主要是介绍MOF修饰的仿原生细胞及其催化反应，以及一篇蛋白自组织的文献

<!-- more -->

## 1 MOF修饰类细胞液滴表面，探究类原始细胞液滴之间的相互作用

> Ref: [ Y. Ji, Y. Lin, Y. Qiao, Nat. Chem., 1–11 (2025)](https://www.nature.com/articles/s41557-025-01827-7)

利用无膜液滴仿真细胞组织以及细胞之间的相互作用仍然存在挑战，作者团队开发了一种基于MOF材料修饰无膜液滴表面的方式，借助MOF实现了细胞中细胞膜嵌入蛋白的功能从而能够模仿整个细胞膜的蛋白和膜内蛋白

![img](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Figa_HTML.png)

最后这个多个类细胞液滴之间的相互作用很漂亮！

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Fig1_HTML.png)

对于细胞而言，细胞膜内部有一些嵌入细胞，以及细胞膜的内表面（Peripheral membrane protein 外周膜）也有一些蛋白。这些细胞通过一些相互作用与链接构建了组织。

那么对于这篇文章的原始类细胞来说，同样是原始类细胞液滴，加入嵌入了蛋白的MOF材料，将这些MOF材料包裹在原始类细胞液滴的表面，构成了表面修饰的原始类细胞，最终再通过聚集形成了原始类组织

总的来说，相当于是用这个protocell来实现对上述a图中的细胞功能的仿真

对于MOF而言，也有两种，一种是将GOx和HRP嵌入在MOF内部，另一种是在MOF的表面吸附这些蛋白

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Fig2_HTML.png)

这里对MOF修饰的原始类细胞做了一了一系列的表征，包括表面张力（修饰后很明显的降低了表面张力），核壳结构分布（空间上的分布以及径向扫描，横切面扫描），除此之外还测量了液滴的流动性（FRAP）以及修饰MOF相较于未修饰MOF具备明显的液滴成长能力（FSCA-A,Time）

图j开始探究修饰与未修饰的相容性，可以发现，没修饰的和没修饰的之间可以相容，修饰的和修饰的之间不可以想融，没修饰的和修饰的彼此之间不能相容（i-p，m-p是证据）

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Fig3_HTML.png)

这里探究的是液滴内部掺杂不同分子量/电荷量的分子对液滴的影响，同样大的电荷量，分子量更大的会倾向全部嵌合在MOF膜上，而小的则没有，电荷量和分子量都小的红球(f)则是部分嵌合。通过径向的荧光强度实现验证

![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Fig4_HTML.png)

这里很妙的就是通过这样一个HRP的催化剂，可以将amplex red（一种前体）反映程resorufin（红色），使得液滴逐渐变红，而过量的过氧化氢则会把红色的resorufin氧化掉从而使得红光逐渐变暗

那么在上述的基础上，就可以利用上述的结果构建人工仿生的类原始细胞：
![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Fig5_HTML.png)

最漂亮的是，团队接着把这个仿生细胞用于多细胞之间的相互作用的研究：

![Fig. 6](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41557_2025_1827_Fig6_HTML.png)

可以看到拍到了入图b的这种类原始组织的清醒，除此之外改变protocell的链接策略可以形成不同的组织形状

形成组织后甚至能构成一个多细胞协同的反应通路（f-g）

##  2 可调谐快速组装胶原蛋白元素

> Ref:  [X. Gong *et al.*, *Nat. Mater.*, 1–12 (2025).](https://www.nature.com/articles/s41563-025-02241-7)

这篇文献前面看都属于正常的走向，直到最后一张图原地抬升逼格

胶原蛋白在体外的组装与粘合是存在挑战限制了他作为生物支架以及粘合剂的使用场景，作者团队提出了一种胶原蛋白制造的方法——大分子挤压及时组装，可以实现可调控的生物打印，能被广泛应用于直接打印细胞组织甚至类器官

![Fig. 1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41563_2025_2241_Fig1_HTML.png)

相较于胶原蛋白直接成交，加入PEG8k之后快速成胶。图c的透明度也在一定程度上反映交联度（交联度越高，透明度越高）

在制备的时候通过捶打的方式吸取后喷出——演化为了喷墨打印法，只需要让胶原蛋白(collagen)和PEG接触即可，可以将其使用在图案化中（如o）

![Fig. 2](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41563_2025_2241_Fig2_HTML.png)

基于此可以形成一些微血管，这些微血管还会在不断的生长

而且相较于regular的成胶方式，这种挤出得到的微血管他是均匀的，不会随着重力导致胶原蛋白沉降：

![Fig. 3](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41563_2025_2241_Fig3_HTML.png)

不仅可以将其进行图案化，还可以进行纺丝：
![Fig. 4](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41563_2025_2241_Fig4_HTML.png)

最后这个图牛逼了，他直接打印了一个类心脏器官：
![Fig. 5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/41563_2025_2241_Fig5_HTML.png)

观察到他的节律性的收缩舒张

## 3 总结

现在大家的生物体系都是往组织器官方面卷了吗……看的汗流浃背了，小作坊课题组的前途在哪呢……

找点能做的吧
`,Ky=`---
layout: post
title: "20250617文献阅读笔记"
date:   2025-06-17
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月17日阅读的部分文献，主要是介绍protocell相关文献

<!-- more -->

## 1 渗透压诱导膜化凝聚力的形态转化

> Ref：X. Qiao *et al.*, *Journal of the American Chemical Society* (2025), doi:[10.1021/jacs.5c01581](https://doi.org/10.1021/jacs.5c01581).

这是一篇jacs，通过磷脂为膜，内部是Su-Am和PMEDAB-Chol(应该是一种阳离子和聚合物形成的共同condense)，这俩本身可以形成liquid-liquid phase separation，加入磷脂之后可以形成含膜液滴：

<img src="https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/02182a618f2296bcb4bc68b0ce19765.png" alt="02182a618f2296bcb4bc68b0ce19765" style="zoom: 50%;" />

这种液滴在葡聚糖-水或者是peg外界条件下呈现出不同的变化

首先当然是要对这种液滴进行表征，这里他的膜选用的就是被红色荧光标记的分子，然后内部分子用绿色荧光进行标记：

![8c5940ce9993c34713b4573e121b5a1](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/8c5940ce9993c34713b4573e121b5a1.png)

除此之外就是一些用流式细胞仪测的FSC-A等基本信息



然后作者就对其进行了加水的情况，相当于降低液滴内部的渗透液，发现液滴内部出现了小的液滴：

![1530c46a70a7c5ecf004baada7df1cc](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/1530c46a70a7c5ecf004baada7df1cc.png)

可以看到b图，随着时间的增加，水分子在内部形成了小的液滴，然后时间增加后就逐渐溶解![images_large_ja5c01581_0003](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/images_large_ja5c01581_0003.jpeg)

而现在的很多荧光，感觉更像是液滴内部有催化能力，然后通过催化产生了中间能有荧光的产物

当然这个液滴加入PEG之后，则会面临膜破裂，然后又重新形成的过程：

![02478efdbaa98547baac48e9dc161d7](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/02478efdbaa98547baac48e9dc161d7.png)

![c2627ac2c9fe984ab6098004139fc9c](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/c2627ac2c9fe984ab6098004139fc9c.png)

## 2 氧化还原控制的超分子组件自排序组装

多种超分子混合在一起的时候往往会发生组装之间的彼此干扰，这里通过的是将超分子单体的还原态前体置于膜反应器内，然后根据不同的氧化还原速率，先后得到自组织单体（被氧化的还原态前体），这样就会导致组分A自组装的时候，租房B还没生成，从而避免了两种自组装的掺杂

> Ref: S. Patra, S. Dhiman, S. J. George, *Angew Chem Int Ed*. **64**, e202500456 (2025).

![0f2483f32efa98754519199ba8ceca5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/0f2483f32efa98754519199ba8ceca5.png)![De

这是本文的示意图，可以看到整个反应是由DOPC构成的膜内进行的，其中选用了两对自组装前体，分别是NDI和OEt-NDI，两者都可以经过氧化，得到自组装单体，但是两者的自组装形态不一样，一个是形成自组装液滴，一个是形成纤维状。

![image-20250617121558660](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250617121558660.png)

这里实际上是由于对NDI加上了一个乙氧基，从而改变了电位，整体电位提高了，反应时间也变长了

![image-20250617121800249](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250617121800249.png)

我感觉还真可以这样，以DOPC之类的物质作为反应器膜，内部发生自组装/先后自组装
`,Zy=`---
layout: post
title: "20250619文献阅读笔记"
date:   2025-06-19
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要整理2025年6月19日阅读的部分文献，主要是介绍superamolecular相关的文献

<!-- more -->

## 1 超分子发生长度改变时，其发射光随之变化

> Ref: A. Ryabchun *et al.*, *Angew Chem Int Ed*, e202507358 (2025).

核心机制就是超分子有一个拉绳一样的结构，其分子构象在正常长度的时候是成环的，但一旦外界加之机械应力，其长度缩短，则其构象发生改变，氢键环被打破，改变其发射光的波长

![f6161b7e319f716b39b0bcbbef1d472](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/f6161b7e319f716b39b0bcbbef1d472.png)

当然，其本身也可以发生光转化

![50fea103e025570b8047bd6e71609e5](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/50fea103e025570b8047bd6e71609e5.png)

## 2 $\\pi-\\pi$堆叠构成的单元超分子插件

>  Ref:  Y. J. Lee *et al.*, *J. Am. Chem. Soc.* (2025), doi:[10.1021/jacs.5c03996](https://doi.org/10.1021/jacs.5c03996).

![952e62de432e0868e74412ea61dd373](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/952e62de432e0868e74412ea61dd373.png)

蓝色的分子链是游离出的基团，分子直接的相互作用主要依靠苯环之间的$\\pi-\\pi$堆叠，而且由于$sp^2$C和$sp^3$N的关系，使得最近的两个联苯侧链呈现90°，从而可以用于形成两个方向的积木

![6b0cfc970ec122e727535d60d58007f](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/6b0cfc970ec122e727535d60d58007f.png)

最终超分子组装之后的电子显微镜图片就像这样，像一层层的楼叠在一起

![image-20250619101606423](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250619101606423.png)

除此之外，对于尾部基团修饰上biotin就能够被荧光标记了，在用苯甲酸取代联苯就还能和其他正电性的结构作用染色

## 3 His魔改的Ferritin蛋白产生类过氧化氢酶的催化活性

> Ref： J. Tian, B. Maity, T. Furuta, T. Pan, T. Ueno, *Angewandte Chemie International Edition*. **n/a**, e202504608.

![7fe33e85dd7a0932ebb104b579eaabe](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/7fe33e85dd7a0932ebb104b579eaabe.png)

正常情况下，Ferritin可以形成24体的自组装笼，但本工作对Ferritin进行修饰和突变，使得其有了一些his残基，从而基于his-his相互作用形成了有his相关残基的高密度酸碱/配位位点，从而能够催化过氧化氢氧化其他底物`,e8=`---
layout: post
title: "20250902文献阅读笔记"
date:   2025-09-02
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录一种基于阴阳离子聚合形成的protocell液滴并用于酶催化，以及一篇报道液滴内部弹道扩散行为的文献

<!-- more -->

## 1 多室混合微反应器用于酶催化

> ref: X. Hao *et al.*, *Angew Chem Int Ed*, e202502479 (2025).

![image-20250902171358555](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250902171358555.png)

本文的策略即通过阴阳离子聚合物的电荷相互吸引形成类似于沉淀一样的团聚体，然后添加二氧化硅乳化剂来包裹这群团聚体，从而形成液滴，液滴如图b，c所示。其与之前所做的llps的应该实验接近，应该信号也是聚集于边界为主（也可能是因为外部这层硅氧化合物的壳的缘故）。  

构造完上述的微反应器后，文献又引入了不同的分子反应环境，例如：CLAB，GOx，HRP，NADH等等，对其时空异质性进行了表征，然后展现其反应的选择性：
![image-20250902172427618](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250902172427618.png)

下面是酶催化反应的机理图，同时他还探究了温度对离子聚合物的影响

![image-20250902172452905](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250902172452905.png)

## 2 生物分子凝聚体中的弹道扩散

> ref: W. Chen *et al.*, *Nat. Nanotechnol.*, 1–9 (2025).

整个液滴的形成是这样的，下面是$A_{20}/T_{20}$的共聚形成了外部是蓝色dna段，内部是绿色dna段的液滴。那么首先加入和蓝色dna连段结合的染料647，那么整个液滴的边界就被647染料给标记上了，之后再加入绿色的488染料，可以发现绿色呈现从圆周向圆心的径向向心扩散，直至整个液滴内部的绿色dna链段全部结合上488染料从而成绿色荧光。

![image-20250902173211689](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250902173211689.png)

这里的fickian diffusion就是布朗运动的宏观统计结果，而这里的ballistic wave 扩散则是我们所理解的：
$$
MSD=2D t^2
$$
其扩散指数$\\alpha=2$，宏观上其扩散的表现如下图所示

![image-20250902175547637](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250902175547637.png)

这里的invasion实际上是染料分子的侵入：
![image-20250902175806510](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250902175806510.png)

`,n8=`---
layout: post
title: "20250903文献阅读笔记"
date:   2025-09-03
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录synthetic cells相关关键词的最近文献，包括一篇人工细胞综述，一篇通过磁性驱动dna反应，以及一篇巨型单层囊泡仿生细胞的昼夜节律模拟实验

<!-- more -->

## 1 球形核酸的磁激活可以实现对合成细胞的远程控制

> ref: E. Parkes *et al.*, *Nat. Chem.*, 1–9 (2025).

合成细胞中，能够模仿活细胞的结构和功能的脂质体囊泡正则成为一个较为火热的领域，其可以被用于药物递送等应用场景。

本文构造了一种类似于核壳结构的磁性纳米颗粒，其主要结构如下图所示：

![image-20250904112547557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112547557.png)

这种**纳米颗粒的尺寸感觉很小**，不知道是图片的scale bar错了还是真就这么小。  

内部的球体有磁响应，外部的链段用于接上dna链以实现相关反应：

![image-20250904112826116](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112826116.png)

通过叠氮基的1，3偶极环加成实现。当外界引入交变磁场后，内部磁性颗粒的磁响应会使得颗粒的局部温度产生变化，从而能够改变修饰链段的活性，将dna链段接到底物上：  

![image-20250904112951398](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904112951398.png)

![image-20250904113018741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113018741.png)

实验中可以发现，通过外加磁场，使得本来内部呈现红色荧光的囊泡液滴，发生变化产生绿色的修饰后链段物，从而使得部分液滴呈现绿色

## 2 在合成细胞中重构生物钟揭示了守时的原理

> ref: A. Z. T. Li, A. LiWang, A. B. Subramaniam, *Nat Commun*. **16**, 6686 (2025).

整篇文献主要是从蛋白的翻译表达等生物学机制的角度进行的阐释，这篇文章的体系是：

![image-20250904113618619](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113618619.png)

通过将蛋白KaiA-C三种的溶液扩散进入正在生长的囊泡中，从而形成了囊泡包裹的多组分蛋白液滴，其拍摄的结果则如下图所示：

![image-20250904113800557](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904113800557.png)

可以看到的是，在4天的实验区间内，v1和v2的液滴呈现出一定的周期节律。  

需要注意的是，这里荧光标记后的BSA（FITC-BSA）作为背景来测试syn-cell的膜是否有破洞和渗透的情况：

![image-20250904114021134](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904114021134.png)

一般情况下，膜对于BSA这种其他蛋白应该是没有明显符集的，所以在B图中我们可以看到，空间上BSA几乎在视野中均匀的分布，从切面的荧光强度来看，液滴区域和液滴外的BSA的荧光强度也相差不大



## 3 合成细胞通信的策略与应用

> ref: H. Moghimianavval, C. Newell, P. Parvizian, M. J. Booth, A. P. Liu, *Nat Chem Biol*. **21**, 1317–1329 (2025).

这是一篇讲述仿生细胞间通讯的综述，我认为他在一定程度上也总结了仿生细胞的一些制作流派：

![image-20250904114325446](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250904114325446.png)

比如这张图中，就记录了合成细胞有高分子边界，蛋白形成的液滴边界，凝聚体形成的仿生液滴（例如9.2提到的阴阳离子聚合形成的凝聚体液滴），以及上文提到的脂质体囊泡以及早已为大家做了很多的水凝胶。   

这张图同时也汇总了一些常见的信号诸如小的信号分子（似乎是ATP），大的生物分子比如dna和蛋白，还有一些物理因素光热等等，通过这些信号引发一系列的过程，从而产生荧光/膜孔/生物活性分子的释放等效果。
`,t8=`---
layout: post
title: "20250905文献阅读笔记"
date:   2025-09-05
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录今日的hugging face 推荐的arxiv文章以及alphaXiv上推荐的几篇文章，都是和自监督相关的文章内容。

<!-- more -->

## 1 DINO v3，一种自监督的视觉基础模型

> ref: O. Siméoni *et al.*, DINOv3 (2025), , doi:[10.48550/arXiv.2508.10104](https://doi.org/10.48550/arXiv.2508.10104).

这一模型在计算机视觉的诸多任务上有着不错的表现，其在训练过程中引入了一种新的方法 Gram anchoring，其能够有效的解决训练过程中的dense feature maps degrading（退化）的问题。

首先是线性探测结果，DINO要比传统的WSL算法提示20个点以上：
![image-20250905102727736](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102727736.png)

且相同的计算开销下，DINO网络的准确性更高（功耗低）：

![image-20250905102810666](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102810666.png)

比较震惊的是，DINO网络可以比较好的理解你的标记并找出与你标记接近的图像中的同类，如下图所示：

![image-20250905102913741](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905102913741.png)

不难发现，以左下角的橘子为例，红十字选中的句子，于是在dense feature fig中，DINO将符合橘子形状颜色特征的以绿色标出，其中越接近则颜色越明显。其他水果亦然。

但是，随着迭代次数的增加，一般情况下，dense feature fig会逐渐产生失真：
![image-20250905103507661](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905103507661.png)

该文章引入了一个gram的方式来避免多次迭代导致的特征图失真：

![image-20250905103520519](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905103520519.png)

通过将前面训练的模型作为教师模型，把刚训练完的模型作为学生模型，两者对比学习，类似于知识蒸馏，以便于能够保留住前面模型在dense feature fig上的优良表现。  

DINO网络不仅仅可以用于获得dense feature fig，还能够用于视频的segmentation tracking以及遥感数据分辨的提升

## 2 多视角3D点跟踪

> ref: F. Rajič *et al.*, Multi-view 3D point tracking (2025), , doi:[10.48550/arXiv.2508.21060](https://doi.org/10.48550/arXiv.2508.21060).

据作者说是首个数据驱动的3d多角度点追踪算法，这一算法可以较好的解决传统的单视角点追踪下的遮挡和模糊的问题，同时相较于其他的多角度追踪算法而言，该算法需要的相机数量更少（4个即可）

整个网络的结构如下图所示：

![image-20250905111258906](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905111258906.png)

可以看到，这里的网路输入总共有3个，一个是需要追踪的点（也就是query points），还有就是正常的多角度的视频图像信息（对应图片中的RGBs），最后的内参Instrinsics和外参Extrinsics则是相机的参数以及方位等信息。

对于图像信息可以直接通过特征提取的CNN获取特征图feature maps，然后将图像信息和内外惨信息结合就可以得到深度信息，将特征信息和深度信息结合得到3d的特征点云，再通过KNN想关心学习查询点附近的其余点特征来预测点轨迹

![image-20250905111629409](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905111629409.png)可以看到，该算法相较于其他的追踪算法而言，准确率更为优异

## 3 STOXLSTM: 一种用于时间序列预测的随机扩展长短期记忆网络

> ref: Z. Wang, Y. Li, L. Zan, Z. Gong, M. Zhu, StoxLSTM: A stochastic extended long short-term memory network for time series forecasting (2025), , doi:[10.48550/arXiv.2509.01187](https://doi.org/10.48550/arXiv.2509.01187).

在此之前，我们先回顾一下最平常的lstm模型：

![image-20250905115515243](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905115515243.png)

首先，当前时刻的输入和上一时刻的隐藏状态做sigmoid得到遗忘、输入门、输出门三个，做tanh得到候选记忆备选项。将遗忘门结果和上一时刻的记忆项作用，将输入门和候选记忆备选项作用得到候选记忆，与上一时刻的记忆与遗忘门作用后的结果进行作用，进而得到当下时刻的记忆。顺便在将当下时刻的记忆和输出门作用得到当下时刻的隐状态。

而xlstm则是在此基础上增加了mlstm和slstm两种单元：

![image-20250905120153225](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905120153225.png)

都是引入了指数来取代原先的直接sigmoid，同时引入了协方差矩阵于mlstm来辅助更新隐变量和记忆项

相应的，对xLSTM进行改进的StoxLSTM也是分别对sLSTM和mLSTM进行了改进，引入了随机性：

![image-20250905120420662](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250905120420662.png)

这里的随机性通过隐特征变量$z_t$是一个正态分布来实现
`,r8=`---
layout: post
title: "20250923文献阅读笔记"
date:   2025-09-23
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录超分辨插值帧生成，CNN的3d重建，神经网络动力学建模以及一个通过噬菌体的自组装构造而成的脂质体囊泡。

<!-- more -->
## 1 Topology and kinetic pathways of colloidosome assembly  and disassembly
> ref: R. Adkins et al., Proceedings of the National Academy of Sciences. 122, e2427024122 (2025).

这篇文章聚焦于脂质体微胶囊的自组装和解组装过程中的拓扑结构，但其如果不是基于噬菌体的自组装的话，也许可以进行尝试复现

![image-20250923170524933](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170524933.png)

这里的A图是噬菌体的电子显微镜结构，其构成的流体膜是由这些含孔道的噬菌体自组装而成，其构成的流体膜结构如图B所示

这一流体液滴的形成可以借助重力：

![image-20250923170748084](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170748084.png)

![image-20250923170847234](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923170847234.png)

这里的图A和C是描述的光活化的PEG被这一囊泡封锁/扩散的情况。A和B是1kDa的情况，由于PEG的分子量比较小，所以其可以从囊泡中自由扩散出来，因此B图的荧光显示器是均匀的。

而C和D，是20kDa的PEG，可以看出来在荧光下其呈现出空间异质，说明这一情况下PEG无法自由扩散

## 2 Deep Learning Reaction Framework (DLRN) for kinetic modeling of timeresolved data

> ref: N. Alagna *et al.*, *Commun. Chem.* **8**, 153 (2025).

这一片是基于模型的分析，是相结合实验数据和物理/数学模型来进行动力学建模

![image-20250923172831778](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923172831778.png)

相当于首先将光谱数据输入模型选择的网络，做一个动力学模型的匹配（准确说叫做模型预测），然后将预测的动力学模型转化为速率常数的矩阵，将这个矩阵结合光谱数据来预测tau

## 3 Deep Learning-Assisted Automated Multidimensional Single Particle Tracking in Living Cells

> ref: D. Song *et al.*, *Nano Lett.* **24**, 3082–3088 (2024).

这是方宁老师24年的一篇deep learning辅助单颗粒三维重建的文章，技术挺old了

![image-20250923173959181](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923173959181.png)

一个双路成像系统，focused测量$\\delta y$来确定z的位置，defocused的来推断金棒的旋转角度，网络用的CNN：

![image-20250923174217510](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174217510.png)

## 4 Content-aware frame interpolation (CAFI): deep learning-based temporal super-resolution for fast bioimaging

> ref: M. Priessner *et al.*, *Nat. Methods*. **21**, 322–330 (2024).

![image-20250923174429178](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174429178.png)

![image-20250923174554704](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174554704.png)

本文开发了一种超分辨插帧技术CAFI，甚至支持多次插帧实现更高的分辨率

这里主要学习几个参数：

![image-20250923174841241](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20250923174841241.png)
`,i8=`---
layout: post
title: "20251122文献阅读笔记"
date:   2025-11-22
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录一篇文献是DNA的锁和钥匙超分子组织；另一篇介绍节肢蛋白的LLPS，其只要聚焦于D3域的构象（通过核磁）

<!-- more -->

## 1 柔性四链螺旋通过诱导契合对DNA三联体表现出强烈的结合偏好性

> H. D. Williams, S. J. Dettmer, S. Bajpai, M. J. Hannon, *J. Am. Chem. Soc.* **147**, 40992–41003 (2025).

铂和配体L构成的$[Pt_2L_4]^{4+}$ 可以加入3-way DNA（3WJ）形成右边的结合体，表现出这个四聚螺旋对DNA三联体的结合偏好，但如果加入的是4-way DNA (4WJ)，虽然DNA四联体的形状和 $[Pt_2L_4]^{4+}$ 聚合体的形状是match的，但是其结合能反倒小于三联体的匹配。

![image-20251122102112229](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122102112229.png)

推测可能是因为虽然shape相近，但四联体的空腔比核心要大很多，使得其中的碱基-核心π电子相互作用并不一定能够牢靠；而三联体虽然空腔小shape不match，但是size是match的，三联体空腔和核心大小接近使得π-π相互作用的距离足够近，从而导致结合能很大。

![image-20251122103344833](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122103344833.png)

这个图就是具体的结构和识别示意图，见C图，L是C图右侧的配体，通过吡啶-N和酚-O基对Pt进行配位，具体的配位方式如C图左图所示蓝色是N，红色O，主要是N去配位。

![image-20251122103902400](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122103902400.png)

核心为了挤进DNA三联体，实际上是会将DNA三联体的部分碱基对顶开，如图A所示的粉色部分。进入之后DNA三联体和核心之间有诸多的相互作用，例如Pt配体的吡啶环和临近碱基的Base Stacking效应（1对1的堆叠）；碱基对芳环和Pt配体的吡啶环的一对多堆叠Base Pair stacking效应。除此之外还有Transient的作用，一些瞬时作用，瞬时的π堆叠和瞬时的π-CH相互作用。

这里的kd越低，说明越容易结合，结合越稳定，这里作者就探究了铂和镍的区别，镍相比于铂更容易结合（因为镍的半径小啊，当然核心相对小一些所以破坏dna的力度没那么大）

![image-20251122111553502](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122111553502.png)

扭曲程度过大也是导致四连体没那么好的原因之一：

![image-20251122112453636](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122112453636.png)

## 2 单聚、相分离和交联节肢弹性蛋白生物材料的构象和动力学

![image-20251122114706343](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122114706343.png)

主要是分析这个resilin蛋白（**弹性蛋白LLPS**）的构象变化：研究了D3作为单体、在相分离状态下和作为交联凝胶的构象、动力学和分子间相互作用。在阐明D3 LLPS的作用机制时，我们发现了一组复杂的静电和π -基相互作用，并辅之以疏水效应，从而微调了D3的溶液敏感性及其对LLPS的容量

![image-20251122115458779](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251122115458779.png)

其他的内容都是打核磁看构象
`,a8=`---
layout: post
title: "20251229文献阅读笔记"
date:   2025-12-29
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录精读的一篇Time Series Forecast  assisted by using MMVs, 将time series进行visualize之后利用cv进行time series的学习，粗读的包括：驾驶轨迹的模式识别分类

<!-- more -->

## 1 多模态视图增强了用于长期时间序列预测的大视野模型

过去对时间序列的预测聚焦于直接使用Transformer和LLM进行上下文的分析，最近大视觉模型也逐渐取得了不错的成就，因此也有了一类通过将时间序列数据转换为image-like的representations的方法利用LVM的能力来解析时间序列中的潜在信息，进而实现轨迹预测

目前这一方法的的SOTA是VisionTS Model，本工作是inspired by VisionTS Model 通过自监督MAE的方法来利用LVM的能力重构image进而预测时间序列

![image-20251229122132113](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229122132113.png)具体而言，有两种模型，一个是直接使用moving average的方式将时间序列信息中的trend提取出来，另一种则是模型自适应的时间序列信息提取。

首先来看利用moving average的方法，这里将时间序列输入前处理模块利用moving average得到trend和seasonal component，对于trend部分可以直接使用transformer+linear model的方式来进行trend forecast，而对于seasonal component，则通过visual model的方式来forecast。

而自适应的处理模型则首先将时间序列直接进行image化，将图形输入visual forecaster预测出seasonal部分，然后将其前向的内容补出后反映射回时间序列，就是之前部分的seasonal 部分时间序列，将原时间序列-预测的seasonal component就得到了trend

![image-20251229122850779](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229122850779.png)

具体而言，对于LVM forecaster，往往是将一个大的image对其取若干个patches然后将其遮住，通过$f_{LVM}$预测出被遮住的部分。对于自适应网络来说则是加入了一个更多的mask Backcast，这是模型试图“回溯”或理解的部分

![image-20251229123110551](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229123110551.png)

**步骤 A（左图）：**

- **输入：** 图像的左半部分 $\\tilde{\\mathbf{I}}_{\\text{left}}$（作为 Look-back window）。
- **任务：** 让模型预测被遮挡的右半部分。
- **输出：** 得到右侧的预测图 $\\hat{\\mathbf{I}}*{\\text{right}} = f*{\\text{vis}}(\\tilde{\\mathbf{I}}_{\\text{left}})$。

**步骤 B（右图）：**

- **输入：** 图像的右半部分 $\\tilde{\\mathbf{I}}_{\\text{right}}$。
- **任务：** 让模型预测被遮挡的左半部分。
- **输出：** 得到左侧的预测图 $\\hat{\\mathbf{I}}*{\\text{left}} = f*{\\text{vis}}(\\tilde{\\mathbf{I}}_{\\text{right}})$。

这个重建图像 $\\hat{\\mathbf{I}}^i$ 会**有偏地（biased）** 反映数据中的**周期性模式**。因为视觉模型擅长捕捉纹理和重复结构，而忽略非周期的趋势

## 2 一种驾驶风格自适应的车辆轨迹预测框架

> Wen, D. *et al.* A driving-style-adaptive framework for vehicle trajectory prediction.

汽车的行驶轨迹主要包括以下三种类型，分别是Normal正常形式，Conservative保守行驶，以及Aggressive侵略性行驶，本文通过引入了汽车行驶轨迹模型的先验在其辅助下进行汽车轨迹的预测（Vehicle Trajectory Prediction）

![image-20251229110949273](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229110949273.png)

具体而言，主要流程如下，首先将历史轨迹输入网络，通过门控网络对其进行权重学习，得到的是三种驾驶模式的初步预测分类权重w，除此之外还利用Degree Adaptation部分进行学习程度，例如Aggressive模式的激进度是多少，最终根据w和n来预测最后的汽车运行的轨迹
![image-20251229111254767](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229111254767.png)

## 3 通过联合建模轨迹的GPS和道路视角捕获运动模式TrajMamba：一个高效且语义丰富的车辆轨迹预训练模型

> Liu, Y. *et al.* TrajMamba: An Efficient and Semantic-rich Vehicle Trajectory Pre-training Model. Preprint at https://doi.org/10.48550/arXiv.2510.17545 (2025).

对于车辆的轨迹来说，主要有两个主要的问题，一个是轨迹所途径的兴趣点/具体的目的地点位，另一个是轨迹在现实数据中往往面临着轨迹中间点缺失的情况，如何结合GPS的目的地点位和轨迹对汽车轨迹进行运动模式的捕获的同时保持对缺失轨迹的鲁棒性是一个需要解决的问题

以下图为例，轨迹的点为橘色的菱形块表示，但是除此之外，轨迹周围的路网还有其他point of interest （POI）例如超市，公园等等，结合轨迹在这些点之间的行为以及POI分析轨迹的行为是一件需要解决的事情

![image-20251229113424060](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229113424060.png)

该工作有两个部分，首先是轨迹全量的时候，将POI和轨迹输入POI文本encoder进行对比学习，使得其尽可能的拉近与POI的语义，从而使得模型学习到的轨迹能够包含丰富的POI语义信息。除此之外还需要将轨迹和路网数据输入进行文本encode后对比学习，来借助轨迹学习路网的语义信息。根据上述过程就使得模型可以生成一个包含丰富语义信息的轨迹嵌入向量

![image-20251229113611474](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251229113611474.png)

图片的右边则是对知识进行蒸馏预训练，具体而言是将轨迹进行随机的掩码丢弃，从而模拟轨迹点缺失的情况，对应的就是使用Mask Generator(借助的Mamba Block)。将掩码的轨迹放入全量训练的模型进行embedding，然后再和全量的结果进行损失，从而不断优化对缺失轨迹下的embedding准确性
`,l8=`---
layout: post
title: "20251230文献阅读笔记"
date:   2025-12-30
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记继续记录阅读neurips 2025 Time Series的paper，包括一个切分Time Series的Forecasting New Form 等，以及一篇关于单颗粒示踪的综述的成像部分内容。

<!-- more -->

## 1 Timeperceiver：一种用于广义时间序列预测的Encoder - Decoder框架

> Lee, J. & Lee, H. TIMEPERCEIVER: An encoder-decoder framework for generalized time-series forecasting.

传统的时间序列模型往往聚焦于如何更好的优化encode的input，进而来做预测和训练模型，然而这是将将预测和训练作为单独或次要的关注点。本文作者开发了一种TIMEPERCEIVER的编码-解码 预测框架并紧密结合了一种有效的训练策略，实验结果也显示该架构呈现出SOTA的表现性能。

![image-20251230094826997](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230094826997.png)

标准的时间序列预测范式是签约后的模式，即一段序列总共是10个point的话，用前面6个点的信息来预测后面四个点的信息。但在本框架中，作者采用的是将这10个点拆分成两部分分别是L和J，其中的L是用于预测的数据，J是需要被预测的内容，通过随机split的方式生成，最终训练用L的数据来预测J的数据。

具体而言，将原始的时间序列分成若干个patch，然后对其进行random split得到$X_L$和$X_J$,将$X_L$结合indices的编码后经过序列化之后放入encoding中，同时把J部分的indices也经过TPE+CPE模块和Sequentialize之后输入解码块，结合encoding的结果来做后续的预测，进而能够预测出$\\hat{X_J}$

![image-20251230095211621](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230095211621.png)

Github links: https://github.com/efficient-learning-lab/TimePerceiver

## 2 合成序列- -时间序列基础模型符号数据的生成

> Wang, W., Wu, K., Li, Y. B., Wang, D. & Zhang, X. Synthetic Series-Symbol Data Generation for Time Series Foundation Models. Preprint at https://doi.org/10.48550/arXiv.2510.08445 (2025).

过去对时间序列分析的相关研究已经取得了长足的进步，然而，诸如训练数据稀缺和不平衡等挑战仍然阻碍着它们的发展。本文开发了一种符号化的产生时间序列数据和数学公式的方法，利用对比学习机制。这是因为作者认为，序列符号数据生成和预训练机制在克服数据稀缺性和提高任务性能方面的潜力

![image-20251230103023176](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230103023176.png)

该思路的前提就是，时间序列数据是对复杂系统的低维采样，而复杂系统本质是通过简单的符号动力学通过量化而涌现出的。这样就沟通起了时间序列和符号表示之间的桥梁

![image-20251230103240032](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230103240032.png)

具体而言，本文包含数据生成和符号化学习时间序列两部分，数据生成是通过模型随机采样得到采样后的时间序列数据，然后输入到符号化的网络中得到该时间序列背后对应的数学符号表达，最后在利用符号表达生成相应的时间序列。

而模型上这是通过分别将时间序列和符号表达都输入到模型在做一个对比学习

## 3 单粒子追踪的机器学习综述：方法、挑战和生物物理见解（精读）

> Zhang, C. *et al.* Review of machine learning for single-particle tracking: Methods, challenges, and biophysical insights. *Chem. Biomed. Imaging* https://doi.org/10.1021/cbmi.5c00146 (2025) doi:[10.1021/cbmi.5c00146](https://doi.org/10.1021/cbmi.5c00146).

### 3.1 背景与摘要

SPT已经是一个通过监控单个分子或者颗粒在活细胞或者其他生物系统中的运动的成熟的坚持工具，传统的分析SPT数据的方法有通过MSD进行拟合或者通过HMM来将轨迹分解为简单的参数，这都是需要依赖先验知识的。

相对而言，机器学习能够自动的从轨迹数据中解析出有意义的特征，并且这种解析往往源自算法从充满噪声的高维空间中获得，这是人类分析者常常难以做到的。

目前，机器学习在单颗粒示踪中的应用包括粒子检测、轨迹重建、扩散模式分类、运动状态的分割、二维或三维的高精度定位、噪声抑制和不确定性量化以提高分析可靠性。

### 3.2 单颗粒示踪技术的成像手段

单颗粒示踪技术的成像手段主要有两个流派，分别是二维情况下的成像与三维情况下的成像。

#### 3.2.1 2D-SPT

首先我们来看2D-SPT，最为常见的就是以下的几种显微镜epifluorescence microscopy (荧光显微镜，最常见，EFM), total internal reflection fluorescence microscopy (全内反荧光显微镜，TIRFM), highly inclined and laminated optical sheet (高倾斜和叠层光片显微镜——斜照明，HILO) microscopy, and light sheet fluorescence microscopy (LSFM，光片荧光显微镜).

![image-20251230110444247](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230110444247.png)

最普通的荧光显微镜是被广泛使用的，但其问题在于EFM由于其较大的激发体积，通常具有较低的信噪比( Signal-to-Noise Ratio，SNR )，从而限制了单分子定位精度。

为了克服普通荧光显微镜的低信噪比，TIRFM被开发出来，其是通过在具有不同折射率的介质之间的界面处创建倏逝激发场来实现的。**空间定位精度在几十纳米量级，时间分辨率在毫秒量级。**但其问题在于内在地受限于成像深度。

HILO显微镜则通过使用位于临界角正下方的轻微倾斜的激发光束来规避TIRFM的轴向限制。其使用一个较薄的激发片穿透样品较深处(~10μm )。

在此基础上，光片LSFM则是通过用横向取向的光学片照明样品，进一步增强了成像深度和对比度(图1b )，明显地分离了激发和检测路径。

以上这些都是2D的成像手段，得到的也是2D的单颗粒平动轨迹，但是无法探测轴向运动( z方向)可能导致将三维粒子动力学误解为受限的横向运动或扩散速率降低。

#### 3.2.2 3D-SPT

既然2D-SPT面临着三维粒子运动被投影到2维的问题，那么开发3D的SPT方法现在也被广泛的研究。

最直观的想法但是直接拍摄整个图像堆栈，然后在重建出三维轨迹——基于图像的跟踪。通过将一系列2D图像堆叠生成3D图像，并将粒子位置跨帧链接，获得70个轴向信息。下图a所示，但这会导致时间分辨率不佳因为每次都要将整个图像堆栈拍下。

![image-20251230111351417](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230111351417.png)

为了克服这一难题，基于点扩散函数（PSF）的三维轨迹重建算法被应用了出来，具体而言就是通过类似于图b中的装置，利用柱面透镜引入受控的光学像差，产生形状随轴向位移变化的非对称PSF，然后根据轴线位移变化来重建出三维信息，已经有的相关研究包括DH-PSF，SLMs等等。这种方法可以实现（x-y尺度上25nm的定位进度，z方向上50nm的定位精读）。局限性就是更高亮度照明带来的光学器件复杂性（校准难题）

> Upon insertion of the cylindrical lens, the beam experiences unequal convergence along the two orthogonal axes, causing the PSF to appear as ellipses of different orientations and eccentricities above and below the focal plane. This shape variation enables nanometer-scale inference of the emitter’s axial position, thereby achieving high-precision 3D localization (Figure 2b).

另一种方案是双平面成像（biplane imaging），有分光镜和棱镜（spectroscope or prism）两个通道。当粒子在z方向上移动的时候，图像点的相对位置和强度比例就会发生改变，这样就可以通过这种改变算出z的位置信息（是robust的），在良好的信噪比条件下，毫秒级的空间精度较高。

这些方案的局限性都是成像的光学设计复杂度，以及光子强度和图像深度的trade-off

**除了上述的基于图像信息的三维重建SPT轨迹方法以外**， Closed-loop feedback 3d-spt通过实时调节动态保持粒子在成像体积内，从而提高轴向跟踪范围和时间分辨率。这些方法可以分为图案化激发和改进的检测方法，每一种方法都适用。具体细节参考下图，本文不再过多描述光学系统。	

![image-20251230112646589](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20251230112646589.png)



`,o8=`---
layout: post
title: "20250104文献阅读笔记"
date:   2025-01-04
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记继续记录2025年12月30日精读的关于单颗粒示踪的综述中之前尚未完成的机器学习算法部分内容。

<!-- more -->

## 1 单粒子追踪的机器学习综述：方法、挑战和生物物理见解（精读）

### 1.1 机器学习辅助单颗粒定位

传统的检测方法( e.g. ,强度阈值化和质心寻找)和跟踪方法(例如,通过最近邻或卡尔曼滤波进行帧间链接)往往在噪声、拥挤和低对比度的活细胞成像环境中挣扎。这些算法需要对每个数据集进行仔细的参数调整，并且在低信噪比条件下容易失效，通常需要大量的用户干预。

近些年来机器学习迅猛发展，本节将聚焦于机器学习是如何辅助粒子定位和轨迹链接的

> Unlike traditional algorithms that rely on simple thresholding and centroid calculations, deep learning models can learn to recognize the visual characteristics of particles and distinguish them from noise or background directly from training data.

DNN在粒子定位上并不像传统的比如说阈值设定或者质心计算，而是直接学习粒子的图像特征进而将其从背景和噪音中提取出来。

这一领域最为常见的是CNN的网络层，一个典型的例子是DeepTrack：

![image-20260104102743093](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104102743093.png)

通过卷积层来从图像中学习图像特征，其表现远远优于传统的算法，尤其是在低信噪比和光照不均的情况——纳米级的粒子定位精度。

除此之外，CNN还能够较好的提取二维图像中的z轴偏移信息，进而实现从二维图像中重建出3d的轨迹：

![image-20260104103034852](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104103034852.png)

例如通过检测经理的偏移位移经过CNN-based的NN学习之后就能够获得3D的金纳米颗粒轨迹。

**除了特征提取的更灵活以外，机器学习的另一个有点就是他能够降噪以及增强弱型号。**

网络是一个有利的非线性过滤器来滤掉背景早上并保留粒子信号

![image-20260104103244497](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104103244497.png)

例如图中同样是S/N=1的情况，卷积得到的噪声还是很高，但在conv+FNN的平滑下结果噪声弱化了许多。

对于这些粒子定位任务的算法，一般都是通过CNN来提取待选区域，当然也有用FNN或者U-net来产生对应的mask进而辅助粒子定位的。

### 1.2 机器学习辅助单颗粒轨迹链接

轨迹链接的难点在于但粒子定位点和其他定位点比较接近时，往往会出现错链。传统的轨迹链接算法比如最近老或者最小化间隙的Hungarian算法依赖用户设定的阈值先验。这些算法但粒子运动较快或者没有规律时往往会出现问题。

> Traditional tracking methods (such as nearest-neighbor linking or the Hungarian algorithm for minimizing gaps) depend heavily on predefined motion assumptions or user-specified thresholds (e.g., maximum displacement allowed per frame).

一个解决问题的方法就是参考机器学习的数据驱动思路，利用例如RNN中的LSTM来学习颗粒运动的动态变化，甚至依赖布朗运动模型等运动模型先验，还可以根据轨迹历史训练网络来预测粒子下一时刻最可能出现的位置，利用这些预测来辅助下一步的粒子定位匹配从而实现轨迹链接

![image-20260104104904631](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104104904631.png)

例如如同所示的就是通过CNN首先分析每个粒子所处的小图像patches来解析出图像特征，然后用LSTM去学习粒子的运动表现，最终相较于传统的轨迹链接算法能够很好的实现轨迹的链接。通过学习粒子的运动特征，即便粒子密度很高，该算法也能保证一定的准确度。

### 1.3 机器学习辅助轨迹的分类与状态识别

在获取轨迹后，一个重要的问题就是从轨迹中能够提取出什么信息，最主要的两个任务就是异常扩散模型识别以及动力学状态的分割。

我们首先来看Diffusion-Type Classification：过去的数年，一大堆的随机动力学模型已经被开发来描述与布朗运动的deviation，例如：Brownian motion (normal diffusion), fractional Brownian motion (FBM),continuoustime random walk (CTRW),and Lévy walks (LW). 之前识别这些模型依赖的是TAMSD,VACF以及PSD，还有p-variation  analysis.这些方法在理想条件下表现良好，并且也具有物理可解释性，但是他们依赖轨迹的平稳性和同质性假设，这导致他们vulnerable to noise，轨迹长度，以及动力学异质性。

那么相较于传统的方法而言，机器学习的方法是自动的从轨迹中提取数据的，这是的他们可以比较好的应对复杂的环境。早期的一个做法是，首先从粒子轨迹中手动提取描述特征，然后将这些特征放入NN中做模式识别，一个粒子就是这篇PNAS：

![image-20260104110113135](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104110113135.png)

此外，通过引入"扩散指纹"的概念，作者建立了一个支持跨系统比较的统一特征表示，并对控制粒子运动的物理机制提供了见解。

近些年来，机器学习逐渐强大也使得有用CNN和RNN来从轨迹中提取motion type的方法

![image-20260104110326681](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104110326681.png)

> While classifying entire trajectories into diffusion types provides an initial understanding of molecular motion, diffusion behavior in real biological systems often exhibits pronounced spatiotemporal heterogeneity.

但实际上粒子在不同的时间节点可能呈现出不同的扩散行为，因此准确的识别这些隐藏的扩散行为是十分必要的。

早期的轨迹分析方法依赖黄闯的方式来检测局部的变化，然而滑窗方法的准确性会受到噪音和滑窗尺寸选择的制约。在此基础上，HMM方法提供了一种严格的框架来识别扩散状态，传统的HMM方法依赖状态数的指定，在此基础上研究人员研发了贝叶斯扩展的HMM例如VB-HMM等，减少过拟合增加早上的鲁棒性，以及引入高斯混合模型等等

贝叶斯扩展提供了更大的模型灵活性，但仍然依赖于概率假设，并且在计算上要求很高。一些研究使用两步方法来识别扩散状态：将轨迹数据分割成短片段，提取统计特征，并使用随机森林或支持向量机等方法进行分类。该策略平衡了可解释性和已建立的分类器的能力，并在检测病毒粒子运动模式100或从隐马尔可夫模型中结合特征等任务中有效。

在此基础上，一系列的轨迹分析方法被开发出来解决上述的问题：

![image-20260104111020699](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104111020699.png)

例如RNN-based的DL-MSS用矩尺度谱( Moment Scaling Spectrum，MSS )是一种局部描述符，捕捉粒子轨迹的高阶统计特征，并将其输入到两层LSTM中进行序列分类。

而也有通过切分出快扩散，首先，和慢扩散三种状态进而进行模式识别的NOBIAS，以及用CNN将SPT建模为连续过程进而不施加专题边界的方法，以及deepsees方法等等

![image-20260104111331291](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104111331291.png)

### 1.4推断分子状态和随机动力学

很多的生物过程往往依赖于分子的动力学状态转变，而SPT技术可以很好的捕获这种状态：表征了这些过程中涉及的状态转变，如配体和受体之间的结合和解离，组装成复合物，被主动运输，或发生构象变化。

SPT的一个关键能力就是解决异质性和转换行为这种容易被平均所掩盖的信息。

传统的msd方法的问题在于人工解释的主观性、滞后时间不超过总长的20%依赖更长的轨迹，低信噪比条件下也很差

![image-20260104112258967](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260104112258967.png)`,s8=`---
layout: post
title: "20250119文献阅读笔记-FFssFF专题"
date:   2025-01-19
tags: [paper]
comments: true
author: junedrinleng
toc: true
---

本笔记主要记录FFssFF液滴进行LLPS的文献阅读笔记专题

<!-- more -->

## 1 起源：一种用于液-液相分离的短肽合成子——2021年nature chemistry

> M. Abbas, W. P. Lipiński, K. K. Nakashima, W. T. S. Huck, E. Spruijt, *Nat. Chem.* **13**, 1046–1054 (2021).

过去的液滴主要都是多种生物大分子成分构成，涉及一种能自己凝聚的（self-coacervates）的多肽小分子往往是困难的，这里文中涉及了这样的一类分子，可以自凝聚为micrometre-sized液滴在sub-millimolar的浓度。

除此之外，为了证明该system可以用作原始细胞protocells，作者通过这种二硫键衍生物可以被氧化还原化学控制实现可逆区室化。

![image-20260119111441614](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119111441614.png)

首先这种分子结构是如图a所示，可以简写为FFssFF，其主要的构成就是由两个氨基酸构成的sticker，俩sticker通过spacer相连形成。这里的氨基酸可以是F（苯丙氨酸，Phenylalanine，Phe）也可以是L（亮氨酸，Leucine，Leu）和W（色氨酸，Tryptophan，Trp）。本专题主要聚焦于F构成的sticker

本文主要通过浊度计的方式来判断相分离是否形成（或者说自凝聚是否形成），对应图上就是turbidity@600 nm这个标识。相图f和pH探究图g也是通过浊度计的方式测量得到的。

可以看到，这里的液滴大概就是几个微米左右和BSA的size比较一致，如b图所示，c图展示的则是随着时间变化液滴逐渐凝聚融合的过程，d图则展示的是液滴形成wetting pattern的情况，e图则是在宏观尺度上液滴形成的凝聚bulk

当然了，上述a图构造出了这样的结构就说明他不仅仅探索了氨基酸为F的情况，实际上他也探索了L,W,F的各种组合

![image-20260119112938333](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119112938333.png)

需要注意的是，这里都是sticker的氨基酸组合，spacer两侧的sticker是完全一致的

当然，作者肯定也尝试了不同的spacer，从这里的表格可以看出，普通的二硫键或者烷基链会导致形成Aggregate

![image-20260119113134217](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113134217.png)

二硫键spacer ss则由于其出色的氧化还原性被选为后续的研究的spacer

再研究这里的氧化还原性的时候，可以发现，液滴在pH<6的时候是澄清，在7左右开始出现凝聚体，通过加入DTT还原后会澄清，再加入氧化剂双氧水则又会恢复浊度——如图a所示

![image-20260119113248508](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113248508.png)

图b和c则分别探究了加入还原剂DTT和TCEP后重新加入铁氰化钾氧化后的结果，可以发现此时溶液呈现出浊度的变化，加入还原剂后浊度迅速下降，而加入氧化剂后浊度又逐渐回升，而且DTT的还原更慢，浊度的下降也更慢

后续作者探究了不同客体分子在凝聚体中的分布情况如下图所示：

![image-20260119113733172](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113733172.png)

还引入了两种缩合反应使得液滴变为microreactors：

![image-20260119113818481](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119113818481.png)

前者羟醛缩合反应有一点慢，整个反应需要数十个小时，后者的席夫碱反应快一些，只需要数十分钟就能发生，后续也有很多人继续用该system里的反应

## 2 机制研究：四肽缩合物的氨基酸依赖相平衡和材料特性——分子动力学模拟FFssFF的相分离机制与相互作用

>Y. Zhang, R. Prasad, S. Su, D. Lee, H.-X. Zhou, *Cell Reports Physical Science*. **5**, 102218 (2024).

对于不同的sticker，最终形成的结果也不一样，例如W时会形成一些aggregate，I、V、A时则形成一些gel like的情况。这说明这些多肽材料在相平衡和材料性质上呈现出差异，比如相分离的阈值浓度和粘度范围等等，为了研究这种差异出现的原因，作者对该system做了一个全原子分子动力学模拟，除此之外还揭示了一些临界的行为。

![image-20260119134012717](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134012717.png)

首先我们可以看到，不同的sticker氨基酸形成凝聚体的浓度不同，是成凝聚体还是成为沉淀本身也有一些差异

一般情况下，有以下四种情况：

![image-20260119134131651](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134131651.png)

分别对应于液态的液滴、无定形的稠密液体，无定形的沉淀，和gel-like的形态，这源自sticker的氨基酸选择的区别

在研究这些不同sticker形成相分离的临界浓度和临界Ph时，发现临界浓度往往和分子量是成线性关系：

![image-20260119134419581](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134419581.png)

作者对其液滴融合过程进行了表征，还用光镊测量了液滴的界面张力，在单颗粒示踪中，发现其msd呈现如下的结果，且FFssFF的粘度甚至到了1000的情况

![image-20260119134537946](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134537946.png)

作者在进行分子动力学模拟的时候分析了不同sticker氨基酸下的π平均链邻居数与相分离阈值浓度的相关性情况和氢键形成数，发现由于邻居越多而导致临界浓度越高，氢键数目则截然相反

![image-20260119134902432](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119134902432.png)

## 3 应用1：小分子影响生物分子凝聚体的物理微环境——利用FFssFF构造微反应器

> Y. Pan *et al.*, *J. Am. Chem. Soc.* **147**, 22686–22696 (2025).

西湖大学张鑫等人设计了一种分子粘度探针用以监测液滴中的粘度变化，后续将其用于探究溶剂分子极性对液滴形成的影响中，这里选用了FFssFF体系进行微反应器的构造

![image-20260119135443391](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119135443391.png)

## 4 应用2：阴离子- π相互作用诱导的相分离是一种益生元的氧合途径

> X. Ren *et al.*, *Proceedings of the National Academy of Sciences*. **122**, e2508804122 (2025).

利用磷酸及其多聚体的P轨道和FFssFF的π轨道相互作用形成进而形成相分离，分子内可以发生微反应

![image-20260119135515789](https://raw.githubusercontent.com/JuneDrinleng/JuneDrinleng.github.io/main/assets/img/image-20260119135515789.png)`;function u8(e){const n=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/,t=e.match(n);if(!t)return{data:{},content:e};const[,i,l]=t,o={};return i.split(`
`).forEach(s=>{const c=s.indexOf(":");if(c===-1)return;const h=s.slice(0,c).trim();let p=s.slice(c+1).trim();p.startsWith("[")&&p.endsWith("]")?p=p.slice(1,-1).split(",").map(f=>f.trim().replace(/^["']|["']$/g,"")):p==="true"?p=!0:p==="false"?p=!1:p=p.replace(/^["']|["']$/g,""),o[h]=p}),{data:o,content:l}}const c8=Object.assign({"/src/posts/2023-05-26-Imaging_system.md":ey,"/src/posts/2023-12-27-python_pack_exe_how_to_use.md":ny,"/src/posts/2023-12-28-Object_Oriented_Programming.md":ty,"/src/posts/2024-01-08-pip_env_how_to_use.md":ry,"/src/posts/2024-09-09-PGM_1.md":iy,"/src/posts/2024-09-21-PGM_2_Bayesian_Network.md":ay,"/src/posts/2024-09-23-PGM_3_LocalProbabilisticMode.md":ly,"/src/posts/2024-09-30-PGM_4_Dynamic_Model.md":oy,"/src/posts/2024-10-14-PGM_5_Markov_Nerwork.md":sy,"/src/posts/2024-10-21-PGM_6_Advanced_PGM.md":uy,"/src/posts/2024-10-28-PGM_Final_Project_Requirements.md":cy,"/src/posts/2024-11-04-PGM_7_Inference_as_Optimization.md":hy,"/src/posts/2024-11-11-PGM_8_Variational_Inference.md":my,"/src/posts/2024-11-16-Google_console.md":py,"/src/posts/2024-11-17-blog_update.md":dy,"/src/posts/2024-11-18-PGM_9_MonteCarlo_Approximate_inference.md":fy,"/src/posts/2024-11-20-PGM_10-inference_conclusion.md":gy,"/src/posts/2024-12-05-JS_learning_1.md":vy,"/src/posts/2024-12-05-JS_learning_2.md":yy,"/src/posts/2024-12-06-JS_learning_3.md":by,"/src/posts/2024-12-06-JS_learning_4.md":wy,"/src/posts/2024-12-06-JS_learning_5.md":xy,"/src/posts/2025-01-04-wsl_instruction.md":ky,"/src/posts/2025-01-16-Terrarium_Project.md":Sy,"/src/posts/2025-02-13-anomalous_diffusion.md":Dy,"/src/posts/2025-02-18-Varmilo_notes.md":Cy,"/src/posts/2025-02-18-mc_server_setting.md":_y,"/src/posts/2025-02-20-Viscoelastic_Hydrogel_cell.md":My,"/src/posts/2025-02-25-MICRORHEOLOGY_notes_1.md":Ey,"/src/posts/2025-02-25-Particle_based_viscoelasticity.md":Ty,"/src/posts/2025-03-12-PINN_notes.md":zy,"/src/posts/2025-03-19-java_notes_1.md":Ay,"/src/posts/2025-03-20-java_notes_2.md":Py,"/src/posts/2025-03-20-java_notes_3.md":Ny,"/src/posts/2025-03-20-java_notes_4.md":Ly,"/src/posts/2025-03-21-java_notes_5.md":Jy,"/src/posts/2025-03-21-java_notes_6.md":Ry,"/src/posts/2025-03-21-java_notes_7.md":Iy,"/src/posts/2025-03-21-java_notes_8.md":jy,"/src/posts/2025-03-31-python_notes_0.md":Fy,"/src/posts/2025-04-01-java_notes_advanced_1.md":Oy,"/src/posts/2025-04-01-java_notes_advanced_2.md":By,"/src/posts/2025-04-02-java_notes_advanced_3.md":$y,"/src/posts/2025-04-03-Crowding_in_LLPS.md":Hy,"/src/posts/2025-04-17-python_notes_1.md":qy,"/src/posts/2025-04-25-paper_report_1.md":Uy,"/src/posts/2025-05-23-MIT_Web_Dev_1.md":Vy,"/src/posts/2025-05-28-MIT_Web_Dev_2.md":Wy,"/src/posts/2025-05-29-MIT_Web_Dev_3.md":Gy,"/src/posts/2025-06-06-paper_report_1.md":Xy,"/src/posts/2025-06-09-paper_report_2.md":Yy,"/src/posts/2025-06-10-paper_report_3.md":Qy,"/src/posts/2025-06-17-paper_report_4.md":Ky,"/src/posts/2025-06-19-paper_report_5.md":Zy,"/src/posts/2025-09-02-paper_report_6.md":e8,"/src/posts/2025-09-03-paper_report_7.md":n8,"/src/posts/2025-09-05-paper_report_8.md":t8,"/src/posts/2025-09-23-paper_report_9.md":r8,"/src/posts/2025-11-22-paper_report_10.md":i8,"/src/posts/2025-12-29-paper_report_11.md":a8,"/src/posts/2025-12-30-paper_report_12.md":l8,"/src/posts/2026-01-04-paper_report_13.md":o8,"/src/posts/2026-01-19-paper_report_14.md":s8});function B1(){const e=[];for(const[n,t]of Object.entries(c8)){const i=n.replace("/src/posts/","").replace(".md",""),{data:l,content:o}=u8(t),s=o.split("<!-- more -->"),c=s[0].trim(),h=s.length>1?s[1].trim():o;e.push({slug:i,metadata:l,excerpt:c,content:h})}return e.sort((n,t)=>new Date(t.metadata.date).getTime()-new Date(n.metadata.date).getTime())}function h8(e){return B1().find(t=>t.slug===e)}function m8(){const[e,n]=Y.useState("");Og();const t=B1(),i=[{title:"Blog",url:"/blog",description:"分享技术见解、产品思考与创作心得，记录成长与探索的旅程",imageUrl:"https://images.unsplash.com/photo-1542727365-19732a80dcfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmxvZyUyMHdyaXRpbmd8ZW58MXx8fHwxNzcyNTE2ODc1fDA&ixlib=rb-4.1.0&q=80&w=1080"},{title:"visualSPT",url:"/visualspt",description:"强大的桌面端可视化工具，提升工作效率，优化数据展示体验",imageUrl:"https://images.unsplash.com/photo-1764557222706-a8b967702853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwc29mdHdhcmUlMjBhcHBsaWNhdGlvbnxlbnwxfHx8fDE3NzI1MTY4NzV8MA&ixlib=rb-4.1.0&q=80&w=1080"},{title:"Poop",url:"/focus-timer",description:"专为移动端设计的专注打卡应用，帮助你养成良好习惯，提升专注力",imageUrl:"https://images.unsplash.com/photo-1660810731526-0720827cbd38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb2N1cyUyMHRpbWVyJTIwcHJvZHVjdGl2aXR5JTIwbW9iaWxlfGVufDF8fHx8MTc3MjUxNjg3Nnww&ixlib=rb-4.1.0&q=80&w=1080"}],l=Y.useMemo(()=>{if(!e.trim())return[];const s=e.toLowerCase();return t.filter(c=>{var d;const h=c.metadata.title.toLowerCase().includes(s),p=c.excerpt.toLowerCase().includes(s),f=(d=c.metadata.tags)==null?void 0:d.some(w=>w.toLowerCase().includes(s));return h||p||f})},[e,t]),o=()=>{n("")};return R.jsxs("div",{className:"min-h-screen bg-white text-black",children:[R.jsx("header",{className:"border-b-4 border-black",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-8",children:[R.jsxs(ur,{to:"/",className:"block text-center mb-6",children:[R.jsx("h1",{className:"text-5xl font-bold uppercase tracking-tight mb-2",children:"June's Navigator"}),R.jsx("p",{className:"text-sm uppercase tracking-widest opacity-60",children:"Homepage Navigator"})]}),R.jsxs("div",{className:"max-w-2xl mx-auto relative",children:[R.jsxs("div",{className:"relative",children:[R.jsx(jv,{className:"absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 opacity-40"}),R.jsx("input",{type:"text",placeholder:"searching the blog/tag...",value:e,onChange:s=>n(s.target.value),className:"w-full border-2 border-black px-12 py-3 focus:outline-none focus:bg-gray-50"}),e&&R.jsx("button",{onClick:o,className:"absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-60 transition-opacity",children:R.jsx(Qv,{className:"w-5 h-5"})})]}),e&&R.jsx("div",{className:"absolute top-full left-0 right-0 mt-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-h-96 overflow-y-auto z-50",children:l.length>0?R.jsx("div",{className:"divide-y-2 divide-black",children:l.map(s=>R.jsxs(ur,{to:`/blog/${s.slug}`,className:"block p-4 hover:bg-gray-50 transition-colors",onClick:()=>n(""),children:[R.jsx("h3",{className:"font-bold uppercase tracking-tight mb-1",children:s.metadata.title}),R.jsx("p",{className:"text-sm opacity-60 mb-2 line-clamp-2",children:s.excerpt}),s.metadata.tags&&s.metadata.tags.length>0&&R.jsx("div",{className:"flex gap-2 flex-wrap",children:s.metadata.tags.map(c=>R.jsx("span",{className:"border border-black px-2 py-0.5 text-xs uppercase",children:c},c))})]},s.slug))}):R.jsx("div",{className:"p-8 text-center opacity-60",children:R.jsx("p",{className:"uppercase tracking-wider text-sm",children:"Failed to find"})})})]})]})}),R.jsx("section",{className:"bg-white",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-12",children:[R.jsxs("div",{className:"mb-8",children:[R.jsx("h2",{className:"text-3xl font-bold uppercase tracking-tight mb-2",children:"Featured Products"}),R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"Select Your Need"})]}),R.jsx("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:i.map((s,c)=>R.jsx(ur,{to:s.url,className:"block group",children:R.jsxs("div",{className:"border-2 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 h-full flex flex-col",children:[R.jsx("div",{className:"relative overflow-hidden bg-gray-100 h-64",children:R.jsx("img",{src:s.imageUrl,alt:s.title,className:"w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"})}),R.jsxs("div",{className:"p-6 bg-white flex-1 flex flex-col",children:[R.jsx("h3",{className:"text-2xl font-bold uppercase tracking-tight mb-3",children:s.title}),R.jsx("p",{className:"text-sm leading-relaxed opacity-70 flex-1",children:s.description}),R.jsx("div",{className:"mt-4 pt-4 border-t-2 border-black",children:R.jsx("span",{className:"text-xs uppercase tracking-wider font-bold opacity-60 group-hover:opacity-100 transition-opacity",children:"了解更多 →"})})]})]})},c))})]})}),R.jsx("footer",{className:"border-t-2 border-black mt-12",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8 text-center",children:R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"© 2026 产品导航中心"})})})]})}const p8="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Yg(e){const[n,t]=Y.useState(!1),i=()=>{t(!0)},{src:l,alt:o,style:s,className:c,...h}=e;return n?R.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${c??""}`,style:s,children:R.jsx("div",{className:"flex items-center justify-center w-full h-full",children:R.jsx("img",{src:p8,alt:"Error loading image",...h,"data-original-url":l})})}):R.jsx("img",{src:l,alt:o,className:c,style:s,...h,onError:i})}function d8(){const e=[{icon:Rv,title:"桌面端优化",description:"专为桌面环境设计，充分利用大屏幕优势，提供最佳视觉体验"},{icon:Zv,title:"高效性能",description:"原生应用性能，流畅运行，快速响应，提升工作效率"},{icon:Ov,title:"安全可靠",description:"本地数据处理，保护隐私安全，离线也能正常使用"},{icon:Pv,title:"Windows 平台",description:"专为 Windows 平台优化，与系统深度集成，原生体验"}];return R.jsxs("div",{className:"min-h-screen bg-white text-black",children:[R.jsx("header",{className:"border-b-4 border-black",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-6",children:R.jsxs(ur,{to:"/",className:"inline-flex items-center gap-2 hover:opacity-60 transition-opacity",children:[R.jsx(d0,{className:"w-5 h-5"}),R.jsx("span",{className:"uppercase tracking-wider text-sm font-medium",children:"返回导航"})]})})}),R.jsx("section",{className:"border-b-4 border-black",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-16",children:R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[R.jsxs("div",{children:[R.jsx("div",{className:"inline-block border-2 border-black px-4 py-1 mb-6",children:R.jsx("span",{className:"text-sm uppercase tracking-widest font-bold",children:"Desktop Application"})}),R.jsx("h1",{className:"text-6xl font-bold uppercase tracking-tight mb-6",children:"visualSPT"}),R.jsx("p",{className:"text-xl leading-relaxed mb-8 opacity-80",children:"专业的桌面端可视化工具，为数据分析和展示提供强大支持。简洁的界面设计，强大的功能实现，助力高效工作。"}),R.jsxs("div",{className:"flex flex-wrap gap-4",children:[R.jsxs("a",{href:"#download",className:"inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors border-2 border-black",children:[R.jsx(ro,{className:"w-5 h-5"}),R.jsx("span",{className:"font-bold uppercase tracking-wider",children:"下载应用"})]}),R.jsx("a",{href:"#features",className:"inline-flex items-center gap-2 bg-white text-black px-8 py-4 border-2 border-black hover:bg-gray-50 transition-colors",children:R.jsx("span",{className:"font-bold uppercase tracking-wider",children:"了解更多"})})]})]}),R.jsx("div",{className:"border-4 border-black overflow-hidden",children:R.jsx(Yg,{src:"https://images.unsplash.com/photo-1768827642561-4d06523d0324?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNrdG9wJTIwd29ya3NwYWNlJTIwY29tcHV0ZXIlMjBzY3JlZW58ZW58MXx8fHwxNzcyNTE2ODc2fDA&ixlib=rb-4.1.0&q=80&w=1080",alt:"visualSPT 应用界面",className:"w-full h-auto grayscale"})})]})})}),R.jsx("section",{id:"features",className:"border-b-4 border-black bg-gray-50",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[R.jsxs("div",{className:"mb-12",children:[R.jsx("h2",{className:"text-4xl font-bold uppercase tracking-tight mb-2",children:"核心特性"}),R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"Key Features"})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.map((n,t)=>{const i=n.icon;return R.jsxs("div",{className:"border-2 border-black p-8 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",children:[R.jsx(i,{className:"w-12 h-12 mb-4",strokeWidth:1.5}),R.jsx("h3",{className:"text-xl font-bold uppercase tracking-tight mb-3",children:n.title}),R.jsx("p",{className:"leading-relaxed opacity-70",children:n.description})]},t)})})]})}),R.jsx("section",{id:"download",className:"border-b-4 border-black",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[R.jsxs("div",{className:"mb-12 text-center",children:[R.jsx("h2",{className:"text-4xl font-bold uppercase tracking-tight mb-2",children:"立即下载"}),R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"Available Now"})]}),R.jsx("div",{className:"max-w-md mx-auto",children:R.jsxs("a",{href:"#",className:"block border-2 border-black p-12 text-center hover:bg-black hover:text-white transition-colors group",children:[R.jsx(Lv,{className:"w-16 h-16 mx-auto mb-6",strokeWidth:1.5}),R.jsx("h3",{className:"text-2xl font-bold uppercase tracking-tight mb-2",children:"Windows"}),R.jsx("p",{className:"text-sm opacity-60 mb-6 group-hover:opacity-100",children:"Windows 10/11"}),R.jsxs("div",{className:"inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider",children:[R.jsx(ro,{className:"w-4 h-4"}),R.jsx("span",{children:"下载安装包"})]})]})})]})}),R.jsx("footer",{className:"border-t-2 border-black",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8 text-center",children:R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"© 2026 visualSPT - Desktop Visualization Tool"})})})]})}function f8(){const e=[{icon:Uv,title:"专注计时",description:"番茄工作法计时器，帮助你集中注意力，高效完成任务"},{icon:Wv,title:"习惯打卡",description:"每日打卡记录，追踪进度，养成良好习惯，持续成长"},{icon:$v,title:"移动优先",description:"专为移动端设计，随时随地使用，简洁流畅的交互体验"}];return R.jsxs("div",{className:"min-h-screen bg-white text-black",children:[R.jsx("header",{className:"border-b-4 border-black",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-6",children:R.jsxs(ur,{to:"/",className:"inline-flex items-center gap-2 hover:opacity-60 transition-opacity",children:[R.jsx(d0,{className:"w-5 h-5"}),R.jsx("span",{className:"uppercase tracking-wider text-sm font-medium",children:"返回导航"})]})})}),R.jsx("section",{className:"border-b-4 border-black",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-16",children:R.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",children:[R.jsxs("div",{children:[R.jsx("div",{className:"inline-block border-2 border-black px-4 py-1 mb-6",children:R.jsx("span",{className:"text-sm uppercase tracking-widest font-bold",children:"Mobile Application"})}),R.jsx("h1",{className:"text-6xl font-bold uppercase tracking-tight mb-6",children:"Poop"}),R.jsx("p",{className:"text-xl leading-relaxed mb-8 opacity-80",children:"极简设计的专注打卡应用，帮助你培养专注习惯，提升时间管理能力。随时随地开启专注模式，记录每一次进步。"}),R.jsxs("div",{className:"flex flex-wrap gap-4",children:[R.jsxs("a",{href:"#download",className:"inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-gray-800 transition-colors border-2 border-black",children:[R.jsx(ro,{className:"w-5 h-5"}),R.jsx("span",{className:"font-bold uppercase tracking-wider",children:"下载应用"})]}),R.jsx("a",{href:"#features",className:"inline-flex items-center gap-2 bg-white text-black px-8 py-4 border-2 border-black hover:bg-gray-50 transition-colors",children:R.jsx("span",{className:"font-bold uppercase tracking-wider",children:"了解更多"})})]})]}),R.jsx("div",{className:"border-4 border-black overflow-hidden max-w-md mx-auto",children:R.jsx(Yg,{src:"https://images.unsplash.com/photo-1655970580622-4a547789c850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG9uZSUyMHRpbWVyJTIwbWVkaXRhdGlvbnxlbnwxfHx8fDE3NzI1MTY4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",alt:"专注计时应用界面",className:"w-full h-auto grayscale"})})]})})}),R.jsx("section",{id:"features",className:"border-b-4 border-black bg-gray-50",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[R.jsxs("div",{className:"mb-12",children:[R.jsx("h2",{className:"text-4xl font-bold uppercase tracking-tight mb-2",children:"核心特性"}),R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"Key Features"})]}),R.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:e.map((n,t)=>{const i=n.icon;return R.jsxs("div",{className:"border-2 border-black p-8 bg-white hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",children:[R.jsx(i,{className:"w-12 h-12 mb-4",strokeWidth:1.5}),R.jsx("h3",{className:"text-xl font-bold uppercase tracking-tight mb-3",children:n.title}),R.jsx("p",{className:"leading-relaxed opacity-70",children:n.description})]},t)})})]})}),R.jsx("section",{id:"download",className:"border-b-4 border-black",children:R.jsxs("div",{className:"max-w-7xl mx-auto px-6 py-16",children:[R.jsxs("div",{className:"mb-12 text-center",children:[R.jsx("h2",{className:"text-4xl font-bold uppercase tracking-tight mb-2",children:"立即下载"}),R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"Available Now"})]}),R.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto",children:[R.jsxs("a",{href:"#",className:"block border-2 border-black p-8 text-center hover:bg-black hover:text-white transition-colors group",children:[R.jsx("div",{className:"text-5xl mb-4",children:"📱"}),R.jsx("h3",{className:"text-xl font-bold uppercase tracking-tight mb-2",children:"iOS"}),R.jsx("p",{className:"text-sm opacity-60 mb-4 group-hover:opacity-100",children:"App Store"}),R.jsxs("div",{className:"inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider",children:[R.jsx(ro,{className:"w-4 h-4"}),R.jsx("span",{children:"下载"})]})]}),R.jsxs("a",{href:"#",className:"block border-2 border-black p-8 text-center hover:bg-black hover:text-white transition-colors group",children:[R.jsx("div",{className:"text-5xl mb-4",children:"🤖"}),R.jsx("h3",{className:"text-xl font-bold uppercase tracking-tight mb-2",children:"Android"}),R.jsx("p",{className:"text-sm opacity-60 mb-4 group-hover:opacity-100",children:"Google Play"}),R.jsxs("div",{className:"inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider",children:[R.jsx(ro,{className:"w-4 h-4"}),R.jsx("span",{children:"下载"})]})]})]})]})}),R.jsx("footer",{className:"border-t-2 border-black",children:R.jsx("div",{className:"max-w-7xl mx-auto px-6 py-8 text-center",children:R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"© 2026 Poop - Focus & Productivity Timer"})})})]})}function Ld(e){const n=[],t=String(e||"");let i=t.indexOf(","),l=0,o=!1;for(;!o;){i===-1&&(i=t.length,o=!0);const s=t.slice(l,i).trim();(s||!o)&&n.push(s),l=i+1,i=t.indexOf(",",l)}return n}function g8(e,n){const t={};return(e[e.length-1]===""?[...e,""]:e).join((t.padRight?" ":"")+","+(t.padLeft===!1?"":" ")).trim()}const v8=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,y8=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,b8={};function Jd(e,n){return(b8.jsx?y8:v8).test(e)}const w8=/[ \t\n\f\r]/g;function x8(e){return typeof e=="object"?e.type==="text"?Rd(e.value):!1:Rd(e)}function Rd(e){return e.replace(w8,"")===""}class So{constructor(n,t,i){this.normal=t,this.property=n,i&&(this.space=i)}}So.prototype.normal={};So.prototype.property={};So.prototype.space=void 0;function Qg(e,n){const t={},i={};for(const l of e)Object.assign(t,l.property),Object.assign(i,l.normal);return new So(t,i,n)}function mo(e){return e.toLowerCase()}class It{constructor(n,t){this.attribute=t,this.property=n}}It.prototype.attribute="";It.prototype.booleanish=!1;It.prototype.boolean=!1;It.prototype.commaOrSpaceSeparated=!1;It.prototype.commaSeparated=!1;It.prototype.defined=!1;It.prototype.mustUseProperty=!1;It.prototype.number=!1;It.prototype.overloadedBoolean=!1;It.prototype.property="";It.prototype.spaceSeparated=!1;It.prototype.space=void 0;let k8=0;const en=ba(),Hn=ba(),i1=ba(),ge=ba(),Sn=ba(),Za=ba(),Wt=ba();function ba(){return 2**++k8}const a1=Object.freeze(Object.defineProperty({__proto__:null,boolean:en,booleanish:Hn,commaOrSpaceSeparated:Wt,commaSeparated:Za,number:ge,overloadedBoolean:i1,spaceSeparated:Sn},Symbol.toStringTag,{value:"Module"})),wc=Object.keys(a1);class $1 extends It{constructor(n,t,i,l){let o=-1;if(super(n,t),Id(this,"space",l),typeof i=="number")for(;++o<wc.length;){const s=wc[o];Id(this,wc[o],(i&a1[s])===a1[s])}}}$1.prototype.defined=!0;function Id(e,n,t){t&&(e[n]=t)}function al(e){const n={},t={};for(const[i,l]of Object.entries(e.properties)){const o=new $1(i,e.transform(e.attributes||{},i),l,e.space);e.mustUseProperty&&e.mustUseProperty.includes(i)&&(o.mustUseProperty=!0),n[i]=o,t[mo(i)]=i,t[mo(o.attribute)]=i}return new So(n,t,e.space)}const Kg=al({properties:{ariaActiveDescendant:null,ariaAtomic:Hn,ariaAutoComplete:null,ariaBusy:Hn,ariaChecked:Hn,ariaColCount:ge,ariaColIndex:ge,ariaColSpan:ge,ariaControls:Sn,ariaCurrent:null,ariaDescribedBy:Sn,ariaDetails:null,ariaDisabled:Hn,ariaDropEffect:Sn,ariaErrorMessage:null,ariaExpanded:Hn,ariaFlowTo:Sn,ariaGrabbed:Hn,ariaHasPopup:null,ariaHidden:Hn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Sn,ariaLevel:ge,ariaLive:null,ariaModal:Hn,ariaMultiLine:Hn,ariaMultiSelectable:Hn,ariaOrientation:null,ariaOwns:Sn,ariaPlaceholder:null,ariaPosInSet:ge,ariaPressed:Hn,ariaReadOnly:Hn,ariaRelevant:null,ariaRequired:Hn,ariaRoleDescription:Sn,ariaRowCount:ge,ariaRowIndex:ge,ariaRowSpan:ge,ariaSelected:Hn,ariaSetSize:ge,ariaSort:null,ariaValueMax:ge,ariaValueMin:ge,ariaValueNow:ge,ariaValueText:null,role:null},transform(e,n){return n==="role"?n:"aria-"+n.slice(4).toLowerCase()}});function Zg(e,n){return n in e?e[n]:n}function e2(e,n){return Zg(e,n.toLowerCase())}const S8=al({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Za,acceptCharset:Sn,accessKey:Sn,action:null,allow:null,allowFullScreen:en,allowPaymentRequest:en,allowUserMedia:en,alt:null,as:null,async:en,autoCapitalize:null,autoComplete:Sn,autoFocus:en,autoPlay:en,blocking:Sn,capture:null,charSet:null,checked:en,cite:null,className:Sn,cols:ge,colSpan:null,content:null,contentEditable:Hn,controls:en,controlsList:Sn,coords:ge|Za,crossOrigin:null,data:null,dateTime:null,decoding:null,default:en,defer:en,dir:null,dirName:null,disabled:en,download:i1,draggable:Hn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:en,formTarget:null,headers:Sn,height:ge,hidden:i1,high:ge,href:null,hrefLang:null,htmlFor:Sn,httpEquiv:Sn,id:null,imageSizes:null,imageSrcSet:null,inert:en,inputMode:null,integrity:null,is:null,isMap:en,itemId:null,itemProp:Sn,itemRef:Sn,itemScope:en,itemType:Sn,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:en,low:ge,manifest:null,max:null,maxLength:ge,media:null,method:null,min:null,minLength:ge,multiple:en,muted:en,name:null,nonce:null,noModule:en,noValidate:en,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:en,optimum:ge,pattern:null,ping:Sn,placeholder:null,playsInline:en,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:en,referrerPolicy:null,rel:Sn,required:en,reversed:en,rows:ge,rowSpan:ge,sandbox:Sn,scope:null,scoped:en,seamless:en,selected:en,shadowRootClonable:en,shadowRootDelegatesFocus:en,shadowRootMode:null,shape:null,size:ge,sizes:null,slot:null,span:ge,spellCheck:Hn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:ge,step:null,style:null,tabIndex:ge,target:null,title:null,translate:null,type:null,typeMustMatch:en,useMap:null,value:Hn,width:ge,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Sn,axis:null,background:null,bgColor:null,border:ge,borderColor:null,bottomMargin:ge,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:en,declare:en,event:null,face:null,frame:null,frameBorder:null,hSpace:ge,leftMargin:ge,link:null,longDesc:null,lowSrc:null,marginHeight:ge,marginWidth:ge,noResize:en,noHref:en,noShade:en,noWrap:en,object:null,profile:null,prompt:null,rev:null,rightMargin:ge,rules:null,scheme:null,scrolling:Hn,standby:null,summary:null,text:null,topMargin:ge,valueType:null,version:null,vAlign:null,vLink:null,vSpace:ge,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:en,disableRemotePlayback:en,prefix:null,property:null,results:ge,security:null,unselectable:null},space:"html",transform:e2}),D8=al({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Wt,accentHeight:ge,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:ge,amplitude:ge,arabicForm:null,ascent:ge,attributeName:null,attributeType:null,azimuth:ge,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:ge,by:null,calcMode:null,capHeight:ge,className:Sn,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:ge,diffuseConstant:ge,direction:null,display:null,dur:null,divisor:ge,dominantBaseline:null,download:en,dx:null,dy:null,edgeMode:null,editable:null,elevation:ge,enableBackground:null,end:null,event:null,exponent:ge,externalResourcesRequired:null,fill:null,fillOpacity:ge,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Za,g2:Za,glyphName:Za,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:ge,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:ge,horizOriginX:ge,horizOriginY:ge,id:null,ideographic:ge,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:ge,k:ge,k1:ge,k2:ge,k3:ge,k4:ge,kernelMatrix:Wt,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:ge,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:ge,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:ge,overlineThickness:ge,paintOrder:null,panose1:null,path:null,pathLength:ge,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Sn,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:ge,pointsAtY:ge,pointsAtZ:ge,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Wt,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Wt,rev:Wt,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Wt,requiredFeatures:Wt,requiredFonts:Wt,requiredFormats:Wt,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:ge,specularExponent:ge,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:ge,strikethroughThickness:ge,string:null,stroke:null,strokeDashArray:Wt,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:ge,strokeOpacity:ge,strokeWidth:null,style:null,surfaceScale:ge,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Wt,tabIndex:ge,tableValues:null,target:null,targetX:ge,targetY:ge,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Wt,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:ge,underlineThickness:ge,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:ge,values:null,vAlphabetic:ge,vMathematical:ge,vectorEffect:null,vHanging:ge,vIdeographic:ge,version:null,vertAdvY:ge,vertOriginX:ge,vertOriginY:ge,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:ge,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Zg}),n2=al({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,n){return"xlink:"+n.slice(5).toLowerCase()}}),t2=al({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:e2}),r2=al({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,n){return"xml:"+n.slice(3).toLowerCase()}}),C8={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},_8=/[A-Z]/g,jd=/-[a-z]/g,M8=/^data[-\w.:]+$/i;function i2(e,n){const t=mo(n);let i=n,l=It;if(t in e.normal)return e.property[e.normal[t]];if(t.length>4&&t.slice(0,4)==="data"&&M8.test(n)){if(n.charAt(4)==="-"){const o=n.slice(5).replace(jd,T8);i="data"+o.charAt(0).toUpperCase()+o.slice(1)}else{const o=n.slice(4);if(!jd.test(o)){let s=o.replace(_8,E8);s.charAt(0)!=="-"&&(s="-"+s),n="data"+s}}l=$1}return new l(i,n)}function E8(e){return"-"+e.toLowerCase()}function T8(e){return e.charAt(1).toUpperCase()}const a2=Qg([Kg,S8,n2,t2,r2],"html"),f0=Qg([Kg,D8,n2,t2,r2],"svg");function Fd(e){const n=String(e||"").trim();return n?n.split(/[ \t\n\r\f]+/g):[]}function z8(e){return e.join(" ").trim()}var Va={},xc,Od;function A8(){if(Od)return xc;Od=1;var e=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,n=/\n/g,t=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,l=/^:\s*/,o=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g,h=`
`,p="/",f="*",d="",w="comment",b="declaration";function D(T,E){if(typeof T!="string")throw new TypeError("First argument must be a string");if(!T)return[];E=E||{};var z=1,O=1;function ne(me){var ae=me.match(n);ae&&(z+=ae.length);var xe=me.lastIndexOf(h);O=~xe?me.length-xe:O+me.length}function K(){var me={line:z,column:O};return function(ae){return ae.position=new H(me),ee(),ae}}function H(me){this.start=me,this.end={line:z,column:O},this.source=E.source}H.prototype.content=T;function I(me){var ae=new Error(E.source+":"+z+":"+O+": "+me);if(ae.reason=me,ae.filename=E.source,ae.line=z,ae.column=O,ae.source=T,!E.silent)throw ae}function re(me){var ae=me.exec(T);if(ae){var xe=ae[0];return ne(xe),T=T.slice(xe.length),ae}}function ee(){re(t)}function U(me){var ae;for(me=me||[];ae=ie();)ae!==!1&&me.push(ae);return me}function ie(){var me=K();if(!(p!=T.charAt(0)||f!=T.charAt(1))){for(var ae=2;d!=T.charAt(ae)&&(f!=T.charAt(ae)||p!=T.charAt(ae+1));)++ae;if(ae+=2,d===T.charAt(ae-1))return I("End of comment missing");var xe=T.slice(2,ae-2);return O+=2,ne(xe),T=T.slice(ae),O+=2,me({type:w,comment:xe})}}function le(){var me=K(),ae=re(i);if(ae){if(ie(),!re(l))return I("property missing ':'");var xe=re(o),De=me({type:b,property:_(ae[0].replace(e,d)),value:xe?_(xe[0].replace(e,d)):d});return re(s),De}}function Le(){var me=[];U(me);for(var ae;ae=le();)ae!==!1&&(me.push(ae),U(me));return me}return ee(),Le()}function _(T){return T?T.replace(c,d):d}return xc=D,xc}var Bd;function P8(){if(Bd)return Va;Bd=1;var e=Va&&Va.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Va,"__esModule",{value:!0}),Va.default=t;const n=e(A8());function t(i,l){let o=null;if(!i||typeof i!="string")return o;const s=(0,n.default)(i),c=typeof l=="function";return s.forEach(h=>{if(h.type!=="declaration")return;const{property:p,value:f}=h;c?l(p,f,h):f&&(o=o||{},o[p]=f)}),o}return Va}var Xl={},$d;function N8(){if($d)return Xl;$d=1,Object.defineProperty(Xl,"__esModule",{value:!0}),Xl.camelCase=void 0;var e=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,t=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,l=/^-(ms)-/,o=function(p){return!p||t.test(p)||e.test(p)},s=function(p,f){return f.toUpperCase()},c=function(p,f){return"".concat(f,"-")},h=function(p,f){return f===void 0&&(f={}),o(p)?p:(p=p.toLowerCase(),f.reactCompat?p=p.replace(l,c):p=p.replace(i,c),p.replace(n,s))};return Xl.camelCase=h,Xl}var Yl,Hd;function L8(){if(Hd)return Yl;Hd=1;var e=Yl&&Yl.__importDefault||function(l){return l&&l.__esModule?l:{default:l}},n=e(P8()),t=N8();function i(l,o){var s={};return!l||typeof l!="string"||(0,n.default)(l,function(c,h){c&&h&&(s[(0,t.camelCase)(c,o)]=h)}),s}return i.default=i,Yl=i,Yl}var J8=L8();const R8=M1(J8),l2=o2("end"),H1=o2("start");function o2(e){return n;function n(t){const i=t&&t.position&&t.position[e]||{};if(typeof i.line=="number"&&i.line>0&&typeof i.column=="number"&&i.column>0)return{line:i.line,column:i.column,offset:typeof i.offset=="number"&&i.offset>-1?i.offset:void 0}}}function I8(e){const n=H1(e),t=l2(e);if(n&&t)return{start:n,end:t}}function io(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?qd(e.position):"start"in e||"end"in e?qd(e):"line"in e||"column"in e?l1(e):""}function l1(e){return Ud(e&&e.line)+":"+Ud(e&&e.column)}function qd(e){return l1(e&&e.start)+"-"+l1(e&&e.end)}function Ud(e){return e&&typeof e=="number"?e:1}class dt extends Error{constructor(n,t,i){super(),typeof t=="string"&&(i=t,t=void 0);let l="",o={},s=!1;if(t&&("line"in t&&"column"in t?o={place:t}:"start"in t&&"end"in t?o={place:t}:"type"in t?o={ancestors:[t],place:t.position}:o={...t}),typeof n=="string"?l=n:!o.cause&&n&&(s=!0,l=n.message,o.cause=n),!o.ruleId&&!o.source&&typeof i=="string"){const h=i.indexOf(":");h===-1?o.ruleId=i:(o.source=i.slice(0,h),o.ruleId=i.slice(h+1))}if(!o.place&&o.ancestors&&o.ancestors){const h=o.ancestors[o.ancestors.length-1];h&&(o.place=h.position)}const c=o.place&&"start"in o.place?o.place.start:o.place;this.ancestors=o.ancestors||void 0,this.cause=o.cause||void 0,this.column=c?c.column:void 0,this.fatal=void 0,this.file="",this.message=l,this.line=c?c.line:void 0,this.name=io(o.place)||"1:1",this.place=o.place||void 0,this.reason=this.message,this.ruleId=o.ruleId||void 0,this.source=o.source||void 0,this.stack=s&&o.cause&&typeof o.cause.stack=="string"?o.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}dt.prototype.file="";dt.prototype.name="";dt.prototype.reason="";dt.prototype.message="";dt.prototype.stack="";dt.prototype.column=void 0;dt.prototype.line=void 0;dt.prototype.ancestors=void 0;dt.prototype.cause=void 0;dt.prototype.fatal=void 0;dt.prototype.place=void 0;dt.prototype.ruleId=void 0;dt.prototype.source=void 0;const q1={}.hasOwnProperty,j8=new Map,F8=/[A-Z]/g,O8=new Set(["table","tbody","thead","tfoot","tr"]),B8=new Set(["td","th"]),s2="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function $8(e,n){if(!n||n.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const t=n.filePath||void 0;let i;if(n.development){if(typeof n.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");i=Y8(t,n.jsxDEV)}else{if(typeof n.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof n.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");i=X8(t,n.jsx,n.jsxs)}const l={Fragment:n.Fragment,ancestors:[],components:n.components||{},create:i,elementAttributeNameCase:n.elementAttributeNameCase||"react",evaluater:n.createEvaluater?n.createEvaluater():void 0,filePath:t,ignoreInvalidStyle:n.ignoreInvalidStyle||!1,passKeys:n.passKeys!==!1,passNode:n.passNode||!1,schema:n.space==="svg"?f0:a2,stylePropertyNameCase:n.stylePropertyNameCase||"dom",tableCellAlignToStyle:n.tableCellAlignToStyle!==!1},o=u2(l,e,void 0);return o&&typeof o!="string"?o:l.create(e,l.Fragment,{children:o||void 0},void 0)}function u2(e,n,t){if(n.type==="element")return H8(e,n,t);if(n.type==="mdxFlowExpression"||n.type==="mdxTextExpression")return q8(e,n);if(n.type==="mdxJsxFlowElement"||n.type==="mdxJsxTextElement")return V8(e,n,t);if(n.type==="mdxjsEsm")return U8(e,n);if(n.type==="root")return W8(e,n,t);if(n.type==="text")return G8(e,n)}function H8(e,n,t){const i=e.schema;let l=i;n.tagName.toLowerCase()==="svg"&&i.space==="html"&&(l=f0,e.schema=l),e.ancestors.push(n);const o=h2(e,n.tagName,!1),s=Q8(e,n);let c=V1(e,n);return O8.has(n.tagName)&&(c=c.filter(function(h){return typeof h=="string"?!x8(h):!0})),c2(e,s,o,n),U1(s,c),e.ancestors.pop(),e.schema=i,e.create(n,o,s,t)}function q8(e,n){if(n.data&&n.data.estree&&e.evaluater){const i=n.data.estree.body[0];return i.type,e.evaluater.evaluateExpression(i.expression)}po(e,n.position)}function U8(e,n){if(n.data&&n.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(n.data.estree);po(e,n.position)}function V8(e,n,t){const i=e.schema;let l=i;n.name==="svg"&&i.space==="html"&&(l=f0,e.schema=l),e.ancestors.push(n);const o=n.name===null?e.Fragment:h2(e,n.name,!0),s=K8(e,n),c=V1(e,n);return c2(e,s,o,n),U1(s,c),e.ancestors.pop(),e.schema=i,e.create(n,o,s,t)}function W8(e,n,t){const i={};return U1(i,V1(e,n)),e.create(n,e.Fragment,i,t)}function G8(e,n){return n.value}function c2(e,n,t,i){typeof t!="string"&&t!==e.Fragment&&e.passNode&&(n.node=i)}function U1(e,n){if(n.length>0){const t=n.length>1?n:n[0];t&&(e.children=t)}}function X8(e,n,t){return i;function i(l,o,s,c){const p=Array.isArray(s.children)?t:n;return c?p(o,s,c):p(o,s)}}function Y8(e,n){return t;function t(i,l,o,s){const c=Array.isArray(o.children),h=H1(i);return n(l,o,s,c,{columnNumber:h?h.column-1:void 0,fileName:e,lineNumber:h?h.line:void 0},void 0)}}function Q8(e,n){const t={};let i,l;for(l in n.properties)if(l!=="children"&&q1.call(n.properties,l)){const o=Z8(e,l,n.properties[l]);if(o){const[s,c]=o;e.tableCellAlignToStyle&&s==="align"&&typeof c=="string"&&B8.has(n.tagName)?i=c:t[s]=c}}if(i){const o=t.style||(t.style={});o[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=i}return t}function K8(e,n){const t={};for(const i of n.attributes)if(i.type==="mdxJsxExpressionAttribute")if(i.data&&i.data.estree&&e.evaluater){const o=i.data.estree.body[0];o.type;const s=o.expression;s.type;const c=s.properties[0];c.type,Object.assign(t,e.evaluater.evaluateExpression(c.argument))}else po(e,n.position);else{const l=i.name;let o;if(i.value&&typeof i.value=="object")if(i.value.data&&i.value.data.estree&&e.evaluater){const c=i.value.data.estree.body[0];c.type,o=e.evaluater.evaluateExpression(c.expression)}else po(e,n.position);else o=i.value===null?!0:i.value;t[l]=o}return t}function V1(e,n){const t=[];let i=-1;const l=e.passKeys?new Map:j8;for(;++i<n.children.length;){const o=n.children[i];let s;if(e.passKeys){const h=o.type==="element"?o.tagName:o.type==="mdxJsxFlowElement"||o.type==="mdxJsxTextElement"?o.name:void 0;if(h){const p=l.get(h)||0;s=h+"-"+p,l.set(h,p+1)}}const c=u2(e,o,s);c!==void 0&&t.push(c)}return t}function Z8(e,n,t){const i=i2(e.schema,n);if(!(t==null||typeof t=="number"&&Number.isNaN(t))){if(Array.isArray(t)&&(t=i.commaSeparated?g8(t):z8(t)),i.property==="style"){let l=typeof t=="object"?t:eb(e,String(t));return e.stylePropertyNameCase==="css"&&(l=nb(l)),["style",l]}return[e.elementAttributeNameCase==="react"&&i.space?C8[i.property]||i.property:i.attribute,t]}}function eb(e,n){try{return R8(n,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};const i=t,l=new dt("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:i,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw l.file=e.filePath||void 0,l.url=s2+"#cannot-parse-style-attribute",l}}function h2(e,n,t){let i;if(!t)i={type:"Literal",value:n};else if(n.includes(".")){const l=n.split(".");let o=-1,s;for(;++o<l.length;){const c=Jd(l[o])?{type:"Identifier",name:l[o]}:{type:"Literal",value:l[o]};s=s?{type:"MemberExpression",object:s,property:c,computed:!!(o&&c.type==="Literal"),optional:!1}:c}i=s}else i=Jd(n)&&!/^[a-z]/.test(n)?{type:"Identifier",name:n}:{type:"Literal",value:n};if(i.type==="Literal"){const l=i.value;return q1.call(e.components,l)?e.components[l]:l}if(e.evaluater)return e.evaluater.evaluateExpression(i);po(e)}function po(e,n){const t=new dt("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:n,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw t.file=e.filePath||void 0,t.url=s2+"#cannot-handle-mdx-estrees-without-createevaluater",t}function nb(e){const n={};let t;for(t in e)q1.call(e,t)&&(n[tb(t)]=e[t]);return n}function tb(e){let n=e.replace(F8,rb);return n.slice(0,3)==="ms-"&&(n="-"+n),n}function rb(e){return"-"+e.toLowerCase()}const kc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ib={};function W1(e,n){const t=ib,i=typeof t.includeImageAlt=="boolean"?t.includeImageAlt:!0,l=typeof t.includeHtml=="boolean"?t.includeHtml:!0;return m2(e,i,l)}function m2(e,n,t){if(ab(e)){if("value"in e)return e.type==="html"&&!t?"":e.value;if(n&&"alt"in e&&e.alt)return e.alt;if("children"in e)return Vd(e.children,n,t)}return Array.isArray(e)?Vd(e,n,t):""}function Vd(e,n,t){const i=[];let l=-1;for(;++l<e.length;)i[l]=m2(e[l],n,t);return i.join("")}function ab(e){return!!(e&&typeof e=="object")}const Wd=document.createElement("i");function G1(e){const n="&"+e+";";Wd.innerHTML=n;const t=Wd.textContent;return t.charCodeAt(t.length-1)===59&&e!=="semi"||t===n?!1:t}function Xt(e,n,t,i){const l=e.length;let o=0,s;if(n<0?n=-n>l?0:l+n:n=n>l?l:n,t=t>0?t:0,i.length<1e4)s=Array.from(i),s.unshift(n,t),e.splice(...s);else for(t&&e.splice(n,t);o<i.length;)s=i.slice(o,o+1e4),s.unshift(n,0),e.splice(...s),o+=1e4,n+=1e4}function or(e,n){return e.length>0?(Xt(e,e.length,0,n),e):n}const Gd={}.hasOwnProperty;function p2(e){const n={};let t=-1;for(;++t<e.length;)lb(n,e[t]);return n}function lb(e,n){let t;for(t in n){const l=(Gd.call(e,t)?e[t]:void 0)||(e[t]={}),o=n[t];let s;if(o)for(s in o){Gd.call(l,s)||(l[s]=[]);const c=o[s];ob(l[s],Array.isArray(c)?c:c?[c]:[])}}}function ob(e,n){let t=-1;const i=[];for(;++t<n.length;)(n[t].add==="after"?e:i).push(n[t]);Xt(e,0,0,i)}function d2(e,n){const t=Number.parseInt(e,n);return t<9||t===11||t>13&&t<32||t>126&&t<160||t>55295&&t<57344||t>64975&&t<65008||(t&65535)===65535||(t&65535)===65534||t>1114111?"�":String.fromCodePoint(t)}function xr(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const St=Ui(/[A-Za-z]/),mt=Ui(/[\dA-Za-z]/),sb=Ui(/[#-'*+\--9=?A-Z^-~]/);function r0(e){return e!==null&&(e<32||e===127)}const o1=Ui(/\d/),ub=Ui(/[\dA-Fa-f]/),cb=Ui(/[!-/:-@[-`{-~]/);function Oe(e){return e!==null&&e<-2}function wn(e){return e!==null&&(e<0||e===32)}function sn(e){return e===-2||e===-1||e===32}const g0=Ui(new RegExp("\\p{P}|\\p{S}","u")),ga=Ui(/\s/);function Ui(e){return n;function n(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function ll(e){const n=[];let t=-1,i=0,l=0;for(;++t<e.length;){const o=e.charCodeAt(t);let s="";if(o===37&&mt(e.charCodeAt(t+1))&&mt(e.charCodeAt(t+2)))l=2;else if(o<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(o))||(s=String.fromCharCode(o));else if(o>55295&&o<57344){const c=e.charCodeAt(t+1);o<56320&&c>56319&&c<57344?(s=String.fromCharCode(o,c),l=1):s="�"}else s=String.fromCharCode(o);s&&(n.push(e.slice(i,t),encodeURIComponent(s)),i=t+l+1,s=""),l&&(t+=l,l=0)}return n.join("")+e.slice(i)}function ln(e,n,t,i){const l=i?i-1:Number.POSITIVE_INFINITY;let o=0;return s;function s(h){return sn(h)?(e.enter(t),c(h)):n(h)}function c(h){return sn(h)&&o++<l?(e.consume(h),c):(e.exit(t),n(h))}}const hb={tokenize:mb};function mb(e){const n=e.attempt(this.parser.constructs.contentInitial,i,l);let t;return n;function i(c){if(c===null){e.consume(c);return}return e.enter("lineEnding"),e.consume(c),e.exit("lineEnding"),ln(e,n,"linePrefix")}function l(c){return e.enter("paragraph"),o(c)}function o(c){const h=e.enter("chunkText",{contentType:"text",previous:t});return t&&(t.next=h),t=h,s(c)}function s(c){if(c===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(c);return}return Oe(c)?(e.consume(c),e.exit("chunkText"),o):(e.consume(c),s)}}const pb={tokenize:db},Xd={tokenize:fb};function db(e){const n=this,t=[];let i=0,l,o,s;return c;function c(O){if(i<t.length){const ne=t[i];return n.containerState=ne[1],e.attempt(ne[0].continuation,h,p)(O)}return p(O)}function h(O){if(i++,n.containerState._closeFlow){n.containerState._closeFlow=void 0,l&&z();const ne=n.events.length;let K=ne,H;for(;K--;)if(n.events[K][0]==="exit"&&n.events[K][1].type==="chunkFlow"){H=n.events[K][1].end;break}E(i);let I=ne;for(;I<n.events.length;)n.events[I][1].end={...H},I++;return Xt(n.events,K+1,0,n.events.slice(ne)),n.events.length=I,p(O)}return c(O)}function p(O){if(i===t.length){if(!l)return w(O);if(l.currentConstruct&&l.currentConstruct.concrete)return D(O);n.interrupt=!!(l.currentConstruct&&!l._gfmTableDynamicInterruptHack)}return n.containerState={},e.check(Xd,f,d)(O)}function f(O){return l&&z(),E(i),w(O)}function d(O){return n.parser.lazy[n.now().line]=i!==t.length,s=n.now().offset,D(O)}function w(O){return n.containerState={},e.attempt(Xd,b,D)(O)}function b(O){return i++,t.push([n.currentConstruct,n.containerState]),w(O)}function D(O){if(O===null){l&&z(),E(0),e.consume(O);return}return l=l||n.parser.flow(n.now()),e.enter("chunkFlow",{_tokenizer:l,contentType:"flow",previous:o}),_(O)}function _(O){if(O===null){T(e.exit("chunkFlow"),!0),E(0),e.consume(O);return}return Oe(O)?(e.consume(O),T(e.exit("chunkFlow")),i=0,n.interrupt=void 0,c):(e.consume(O),_)}function T(O,ne){const K=n.sliceStream(O);if(ne&&K.push(null),O.previous=o,o&&(o.next=O),o=O,l.defineSkip(O.start),l.write(K),n.parser.lazy[O.start.line]){let H=l.events.length;for(;H--;)if(l.events[H][1].start.offset<s&&(!l.events[H][1].end||l.events[H][1].end.offset>s))return;const I=n.events.length;let re=I,ee,U;for(;re--;)if(n.events[re][0]==="exit"&&n.events[re][1].type==="chunkFlow"){if(ee){U=n.events[re][1].end;break}ee=!0}for(E(i),H=I;H<n.events.length;)n.events[H][1].end={...U},H++;Xt(n.events,re+1,0,n.events.slice(I)),n.events.length=H}}function E(O){let ne=t.length;for(;ne-- >O;){const K=t[ne];n.containerState=K[1],K[0].exit.call(n,e)}t.length=O}function z(){l.write([null]),o=void 0,l=void 0,n.containerState._closeFlow=void 0}}function fb(e,n,t){return ln(e,e.attempt(this.parser.constructs.document,n,t),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function nl(e){if(e===null||wn(e)||ga(e))return 1;if(g0(e))return 2}function v0(e,n,t){const i=[];let l=-1;for(;++l<e.length;){const o=e[l].resolveAll;o&&!i.includes(o)&&(n=o(n,t),i.push(o))}return n}const s1={name:"attention",resolveAll:gb,tokenize:vb};function gb(e,n){let t=-1,i,l,o,s,c,h,p,f;for(;++t<e.length;)if(e[t][0]==="enter"&&e[t][1].type==="attentionSequence"&&e[t][1]._close){for(i=t;i--;)if(e[i][0]==="exit"&&e[i][1].type==="attentionSequence"&&e[i][1]._open&&n.sliceSerialize(e[i][1]).charCodeAt(0)===n.sliceSerialize(e[t][1]).charCodeAt(0)){if((e[i][1]._close||e[t][1]._open)&&(e[t][1].end.offset-e[t][1].start.offset)%3&&!((e[i][1].end.offset-e[i][1].start.offset+e[t][1].end.offset-e[t][1].start.offset)%3))continue;h=e[i][1].end.offset-e[i][1].start.offset>1&&e[t][1].end.offset-e[t][1].start.offset>1?2:1;const d={...e[i][1].end},w={...e[t][1].start};Yd(d,-h),Yd(w,h),s={type:h>1?"strongSequence":"emphasisSequence",start:d,end:{...e[i][1].end}},c={type:h>1?"strongSequence":"emphasisSequence",start:{...e[t][1].start},end:w},o={type:h>1?"strongText":"emphasisText",start:{...e[i][1].end},end:{...e[t][1].start}},l={type:h>1?"strong":"emphasis",start:{...s.start},end:{...c.end}},e[i][1].end={...s.start},e[t][1].start={...c.end},p=[],e[i][1].end.offset-e[i][1].start.offset&&(p=or(p,[["enter",e[i][1],n],["exit",e[i][1],n]])),p=or(p,[["enter",l,n],["enter",s,n],["exit",s,n],["enter",o,n]]),p=or(p,v0(n.parser.constructs.insideSpan.null,e.slice(i+1,t),n)),p=or(p,[["exit",o,n],["enter",c,n],["exit",c,n],["exit",l,n]]),e[t][1].end.offset-e[t][1].start.offset?(f=2,p=or(p,[["enter",e[t][1],n],["exit",e[t][1],n]])):f=0,Xt(e,i-1,t-i+3,p),t=i+p.length-f-2;break}}for(t=-1;++t<e.length;)e[t][1].type==="attentionSequence"&&(e[t][1].type="data");return e}function vb(e,n){const t=this.parser.constructs.attentionMarkers.null,i=this.previous,l=nl(i);let o;return s;function s(h){return o=h,e.enter("attentionSequence"),c(h)}function c(h){if(h===o)return e.consume(h),c;const p=e.exit("attentionSequence"),f=nl(h),d=!f||f===2&&l||t.includes(h),w=!l||l===2&&f||t.includes(i);return p._open=!!(o===42?d:d&&(l||!w)),p._close=!!(o===42?w:w&&(f||!d)),n(h)}}function Yd(e,n){e.column+=n,e.offset+=n,e._bufferIndex+=n}const yb={name:"autolink",tokenize:bb};function bb(e,n,t){let i=0;return l;function l(b){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(b),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),o}function o(b){return St(b)?(e.consume(b),s):b===64?t(b):p(b)}function s(b){return b===43||b===45||b===46||mt(b)?(i=1,c(b)):p(b)}function c(b){return b===58?(e.consume(b),i=0,h):(b===43||b===45||b===46||mt(b))&&i++<32?(e.consume(b),c):(i=0,p(b))}function h(b){return b===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(b),e.exit("autolinkMarker"),e.exit("autolink"),n):b===null||b===32||b===60||r0(b)?t(b):(e.consume(b),h)}function p(b){return b===64?(e.consume(b),f):sb(b)?(e.consume(b),p):t(b)}function f(b){return mt(b)?d(b):t(b)}function d(b){return b===46?(e.consume(b),i=0,f):b===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(b),e.exit("autolinkMarker"),e.exit("autolink"),n):w(b)}function w(b){if((b===45||mt(b))&&i++<63){const D=b===45?w:d;return e.consume(b),D}return t(b)}}const Do={partial:!0,tokenize:wb};function wb(e,n,t){return i;function i(o){return sn(o)?ln(e,l,"linePrefix")(o):l(o)}function l(o){return o===null||Oe(o)?n(o):t(o)}}const f2={continuation:{tokenize:kb},exit:Sb,name:"blockQuote",tokenize:xb};function xb(e,n,t){const i=this;return l;function l(s){if(s===62){const c=i.containerState;return c.open||(e.enter("blockQuote",{_container:!0}),c.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(s),e.exit("blockQuoteMarker"),o}return t(s)}function o(s){return sn(s)?(e.enter("blockQuotePrefixWhitespace"),e.consume(s),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),n):(e.exit("blockQuotePrefix"),n(s))}}function kb(e,n,t){const i=this;return l;function l(s){return sn(s)?ln(e,o,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(s):o(s)}function o(s){return e.attempt(f2,n,t)(s)}}function Sb(e){e.exit("blockQuote")}const g2={name:"characterEscape",tokenize:Db};function Db(e,n,t){return i;function i(o){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(o),e.exit("escapeMarker"),l}function l(o){return cb(o)?(e.enter("characterEscapeValue"),e.consume(o),e.exit("characterEscapeValue"),e.exit("characterEscape"),n):t(o)}}const v2={name:"characterReference",tokenize:Cb};function Cb(e,n,t){const i=this;let l=0,o,s;return c;function c(d){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),h}function h(d){return d===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(d),e.exit("characterReferenceMarkerNumeric"),p):(e.enter("characterReferenceValue"),o=31,s=mt,f(d))}function p(d){return d===88||d===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(d),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),o=6,s=ub,f):(e.enter("characterReferenceValue"),o=7,s=o1,f(d))}function f(d){if(d===59&&l){const w=e.exit("characterReferenceValue");return s===mt&&!G1(i.sliceSerialize(w))?t(d):(e.enter("characterReferenceMarker"),e.consume(d),e.exit("characterReferenceMarker"),e.exit("characterReference"),n)}return s(d)&&l++<o?(e.consume(d),f):t(d)}}const Qd={partial:!0,tokenize:Mb},Kd={concrete:!0,name:"codeFenced",tokenize:_b};function _b(e,n,t){const i=this,l={partial:!0,tokenize:K};let o=0,s=0,c;return h;function h(H){return p(H)}function p(H){const I=i.events[i.events.length-1];return o=I&&I[1].type==="linePrefix"?I[2].sliceSerialize(I[1],!0).length:0,c=H,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),f(H)}function f(H){return H===c?(s++,e.consume(H),f):s<3?t(H):(e.exit("codeFencedFenceSequence"),sn(H)?ln(e,d,"whitespace")(H):d(H))}function d(H){return H===null||Oe(H)?(e.exit("codeFencedFence"),i.interrupt?n(H):e.check(Qd,_,ne)(H)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),w(H))}function w(H){return H===null||Oe(H)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),d(H)):sn(H)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),ln(e,b,"whitespace")(H)):H===96&&H===c?t(H):(e.consume(H),w)}function b(H){return H===null||Oe(H)?d(H):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),D(H))}function D(H){return H===null||Oe(H)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),d(H)):H===96&&H===c?t(H):(e.consume(H),D)}function _(H){return e.attempt(l,ne,T)(H)}function T(H){return e.enter("lineEnding"),e.consume(H),e.exit("lineEnding"),E}function E(H){return o>0&&sn(H)?ln(e,z,"linePrefix",o+1)(H):z(H)}function z(H){return H===null||Oe(H)?e.check(Qd,_,ne)(H):(e.enter("codeFlowValue"),O(H))}function O(H){return H===null||Oe(H)?(e.exit("codeFlowValue"),z(H)):(e.consume(H),O)}function ne(H){return e.exit("codeFenced"),n(H)}function K(H,I,re){let ee=0;return U;function U(ae){return H.enter("lineEnding"),H.consume(ae),H.exit("lineEnding"),ie}function ie(ae){return H.enter("codeFencedFence"),sn(ae)?ln(H,le,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(ae):le(ae)}function le(ae){return ae===c?(H.enter("codeFencedFenceSequence"),Le(ae)):re(ae)}function Le(ae){return ae===c?(ee++,H.consume(ae),Le):ee>=s?(H.exit("codeFencedFenceSequence"),sn(ae)?ln(H,me,"whitespace")(ae):me(ae)):re(ae)}function me(ae){return ae===null||Oe(ae)?(H.exit("codeFencedFence"),I(ae)):re(ae)}}}function Mb(e,n,t){const i=this;return l;function l(s){return s===null?t(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?t(s):n(s)}}const Sc={name:"codeIndented",tokenize:Tb},Eb={partial:!0,tokenize:zb};function Tb(e,n,t){const i=this;return l;function l(p){return e.enter("codeIndented"),ln(e,o,"linePrefix",5)(p)}function o(p){const f=i.events[i.events.length-1];return f&&f[1].type==="linePrefix"&&f[2].sliceSerialize(f[1],!0).length>=4?s(p):t(p)}function s(p){return p===null?h(p):Oe(p)?e.attempt(Eb,s,h)(p):(e.enter("codeFlowValue"),c(p))}function c(p){return p===null||Oe(p)?(e.exit("codeFlowValue"),s(p)):(e.consume(p),c)}function h(p){return e.exit("codeIndented"),n(p)}}function zb(e,n,t){const i=this;return l;function l(s){return i.parser.lazy[i.now().line]?t(s):Oe(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),l):ln(e,o,"linePrefix",5)(s)}function o(s){const c=i.events[i.events.length-1];return c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(s):Oe(s)?l(s):t(s)}}const Ab={name:"codeText",previous:Nb,resolve:Pb,tokenize:Lb};function Pb(e){let n=e.length-4,t=3,i,l;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="codeTextData"){e[t][1].type="codeTextPadding",e[n][1].type="codeTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)l===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(l=i):(i===n||e[i][1].type==="lineEnding")&&(e[l][1].type="codeTextData",i!==l+2&&(e[l][1].end=e[i-1][1].end,e.splice(l+2,i-l-2),n-=i-l-2,i=l+2),l=void 0);return e}function Nb(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Lb(e,n,t){let i=0,l,o;return s;function s(d){return e.enter("codeText"),e.enter("codeTextSequence"),c(d)}function c(d){return d===96?(e.consume(d),i++,c):(e.exit("codeTextSequence"),h(d))}function h(d){return d===null?t(d):d===32?(e.enter("space"),e.consume(d),e.exit("space"),h):d===96?(o=e.enter("codeTextSequence"),l=0,f(d)):Oe(d)?(e.enter("lineEnding"),e.consume(d),e.exit("lineEnding"),h):(e.enter("codeTextData"),p(d))}function p(d){return d===null||d===32||d===96||Oe(d)?(e.exit("codeTextData"),h(d)):(e.consume(d),p)}function f(d){return d===96?(e.consume(d),l++,f):l===i?(e.exit("codeTextSequence"),e.exit("codeText"),n(d)):(o.type="codeTextData",p(d))}}class Jb{constructor(n){this.left=n?[...n]:[],this.right=[]}get(n){if(n<0||n>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+n+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return n<this.left.length?this.left[n]:this.right[this.right.length-n+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(n,t){const i=t??Number.POSITIVE_INFINITY;return i<this.left.length?this.left.slice(n,i):n>this.left.length?this.right.slice(this.right.length-i+this.left.length,this.right.length-n+this.left.length).reverse():this.left.slice(n).concat(this.right.slice(this.right.length-i+this.left.length).reverse())}splice(n,t,i){const l=t||0;this.setCursor(Math.trunc(n));const o=this.right.splice(this.right.length-l,Number.POSITIVE_INFINITY);return i&&Ql(this.left,i),o.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(n){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(n)}pushMany(n){this.setCursor(Number.POSITIVE_INFINITY),Ql(this.left,n)}unshift(n){this.setCursor(0),this.right.push(n)}unshiftMany(n){this.setCursor(0),Ql(this.right,n.reverse())}setCursor(n){if(!(n===this.left.length||n>this.left.length&&this.right.length===0||n<0&&this.left.length===0))if(n<this.left.length){const t=this.left.splice(n,Number.POSITIVE_INFINITY);Ql(this.right,t.reverse())}else{const t=this.right.splice(this.left.length+this.right.length-n,Number.POSITIVE_INFINITY);Ql(this.left,t.reverse())}}}function Ql(e,n){let t=0;if(n.length<1e4)e.push(...n);else for(;t<n.length;)e.push(...n.slice(t,t+1e4)),t+=1e4}function y2(e){const n={};let t=-1,i,l,o,s,c,h,p;const f=new Jb(e);for(;++t<f.length;){for(;t in n;)t=n[t];if(i=f.get(t),t&&i[1].type==="chunkFlow"&&f.get(t-1)[1].type==="listItemPrefix"&&(h=i[1]._tokenizer.events,o=0,o<h.length&&h[o][1].type==="lineEndingBlank"&&(o+=2),o<h.length&&h[o][1].type==="content"))for(;++o<h.length&&h[o][1].type!=="content";)h[o][1].type==="chunkText"&&(h[o][1]._isInFirstContentOfListItem=!0,o++);if(i[0]==="enter")i[1].contentType&&(Object.assign(n,Rb(f,t)),t=n[t],p=!0);else if(i[1]._container){for(o=t,l=void 0;o--;)if(s=f.get(o),s[1].type==="lineEnding"||s[1].type==="lineEndingBlank")s[0]==="enter"&&(l&&(f.get(l)[1].type="lineEndingBlank"),s[1].type="lineEnding",l=o);else if(!(s[1].type==="linePrefix"||s[1].type==="listItemIndent"))break;l&&(i[1].end={...f.get(l)[1].start},c=f.slice(l,t),c.unshift(i),f.splice(l,t-l+1,c))}}return Xt(e,0,Number.POSITIVE_INFINITY,f.slice(0)),!p}function Rb(e,n){const t=e.get(n)[1],i=e.get(n)[2];let l=n-1;const o=[];let s=t._tokenizer;s||(s=i.parser[t.contentType](t.start),t._contentTypeTextTrailing&&(s._contentTypeTextTrailing=!0));const c=s.events,h=[],p={};let f,d,w=-1,b=t,D=0,_=0;const T=[_];for(;b;){for(;e.get(++l)[1]!==b;);o.push(l),b._tokenizer||(f=i.sliceStream(b),b.next||f.push(null),d&&s.defineSkip(b.start),b._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=!0),s.write(f),b._isInFirstContentOfListItem&&(s._gfmTasklistFirstContentOfListItem=void 0)),d=b,b=b.next}for(b=t;++w<c.length;)c[w][0]==="exit"&&c[w-1][0]==="enter"&&c[w][1].type===c[w-1][1].type&&c[w][1].start.line!==c[w][1].end.line&&(_=w+1,T.push(_),b._tokenizer=void 0,b.previous=void 0,b=b.next);for(s.events=[],b?(b._tokenizer=void 0,b.previous=void 0):T.pop(),w=T.length;w--;){const E=c.slice(T[w],T[w+1]),z=o.pop();h.push([z,z+E.length-1]),e.splice(z,2,E)}for(h.reverse(),w=-1;++w<h.length;)p[D+h[w][0]]=D+h[w][1],D+=h[w][1]-h[w][0]-1;return p}const Ib={resolve:Fb,tokenize:Ob},jb={partial:!0,tokenize:Bb};function Fb(e){return y2(e),e}function Ob(e,n){let t;return i;function i(c){return e.enter("content"),t=e.enter("chunkContent",{contentType:"content"}),l(c)}function l(c){return c===null?o(c):Oe(c)?e.check(jb,s,o)(c):(e.consume(c),l)}function o(c){return e.exit("chunkContent"),e.exit("content"),n(c)}function s(c){return e.consume(c),e.exit("chunkContent"),t.next=e.enter("chunkContent",{contentType:"content",previous:t}),t=t.next,l}}function Bb(e,n,t){const i=this;return l;function l(s){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),ln(e,o,"linePrefix")}function o(s){if(s===null||Oe(s))return t(s);const c=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&c&&c[1].type==="linePrefix"&&c[2].sliceSerialize(c[1],!0).length>=4?n(s):e.interrupt(i.parser.constructs.flow,t,n)(s)}}function b2(e,n,t,i,l,o,s,c,h){const p=h||Number.POSITIVE_INFINITY;let f=0;return d;function d(E){return E===60?(e.enter(i),e.enter(l),e.enter(o),e.consume(E),e.exit(o),w):E===null||E===32||E===41||r0(E)?t(E):(e.enter(i),e.enter(s),e.enter(c),e.enter("chunkString",{contentType:"string"}),_(E))}function w(E){return E===62?(e.enter(o),e.consume(E),e.exit(o),e.exit(l),e.exit(i),n):(e.enter(c),e.enter("chunkString",{contentType:"string"}),b(E))}function b(E){return E===62?(e.exit("chunkString"),e.exit(c),w(E)):E===null||E===60||Oe(E)?t(E):(e.consume(E),E===92?D:b)}function D(E){return E===60||E===62||E===92?(e.consume(E),b):b(E)}function _(E){return!f&&(E===null||E===41||wn(E))?(e.exit("chunkString"),e.exit(c),e.exit(s),e.exit(i),n(E)):f<p&&E===40?(e.consume(E),f++,_):E===41?(e.consume(E),f--,_):E===null||E===32||E===40||r0(E)?t(E):(e.consume(E),E===92?T:_)}function T(E){return E===40||E===41||E===92?(e.consume(E),_):_(E)}}function w2(e,n,t,i,l,o){const s=this;let c=0,h;return p;function p(b){return e.enter(i),e.enter(l),e.consume(b),e.exit(l),e.enter(o),f}function f(b){return c>999||b===null||b===91||b===93&&!h||b===94&&!c&&"_hiddenFootnoteSupport"in s.parser.constructs?t(b):b===93?(e.exit(o),e.enter(l),e.consume(b),e.exit(l),e.exit(i),n):Oe(b)?(e.enter("lineEnding"),e.consume(b),e.exit("lineEnding"),f):(e.enter("chunkString",{contentType:"string"}),d(b))}function d(b){return b===null||b===91||b===93||Oe(b)||c++>999?(e.exit("chunkString"),f(b)):(e.consume(b),h||(h=!sn(b)),b===92?w:d)}function w(b){return b===91||b===92||b===93?(e.consume(b),c++,d):d(b)}}function x2(e,n,t,i,l,o){let s;return c;function c(w){return w===34||w===39||w===40?(e.enter(i),e.enter(l),e.consume(w),e.exit(l),s=w===40?41:w,h):t(w)}function h(w){return w===s?(e.enter(l),e.consume(w),e.exit(l),e.exit(i),n):(e.enter(o),p(w))}function p(w){return w===s?(e.exit(o),h(s)):w===null?t(w):Oe(w)?(e.enter("lineEnding"),e.consume(w),e.exit("lineEnding"),ln(e,p,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),f(w))}function f(w){return w===s||w===null||Oe(w)?(e.exit("chunkString"),p(w)):(e.consume(w),w===92?d:f)}function d(w){return w===s||w===92?(e.consume(w),f):f(w)}}function ao(e,n){let t;return i;function i(l){return Oe(l)?(e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),t=!0,i):sn(l)?ln(e,i,t?"linePrefix":"lineSuffix")(l):n(l)}}const $b={name:"definition",tokenize:qb},Hb={partial:!0,tokenize:Ub};function qb(e,n,t){const i=this;let l;return o;function o(b){return e.enter("definition"),s(b)}function s(b){return w2.call(i,e,c,t,"definitionLabel","definitionLabelMarker","definitionLabelString")(b)}function c(b){return l=xr(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),b===58?(e.enter("definitionMarker"),e.consume(b),e.exit("definitionMarker"),h):t(b)}function h(b){return wn(b)?ao(e,p)(b):p(b)}function p(b){return b2(e,f,t,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(b)}function f(b){return e.attempt(Hb,d,d)(b)}function d(b){return sn(b)?ln(e,w,"whitespace")(b):w(b)}function w(b){return b===null||Oe(b)?(e.exit("definition"),i.parser.defined.push(l),n(b)):t(b)}}function Ub(e,n,t){return i;function i(c){return wn(c)?ao(e,l)(c):t(c)}function l(c){return x2(e,o,t,"definitionTitle","definitionTitleMarker","definitionTitleString")(c)}function o(c){return sn(c)?ln(e,s,"whitespace")(c):s(c)}function s(c){return c===null||Oe(c)?n(c):t(c)}}const Vb={name:"hardBreakEscape",tokenize:Wb};function Wb(e,n,t){return i;function i(o){return e.enter("hardBreakEscape"),e.consume(o),l}function l(o){return Oe(o)?(e.exit("hardBreakEscape"),n(o)):t(o)}}const Gb={name:"headingAtx",resolve:Xb,tokenize:Yb};function Xb(e,n){let t=e.length-2,i=3,l,o;return e[i][1].type==="whitespace"&&(i+=2),t-2>i&&e[t][1].type==="whitespace"&&(t-=2),e[t][1].type==="atxHeadingSequence"&&(i===t-1||t-4>i&&e[t-2][1].type==="whitespace")&&(t-=i+1===t?2:4),t>i&&(l={type:"atxHeadingText",start:e[i][1].start,end:e[t][1].end},o={type:"chunkText",start:e[i][1].start,end:e[t][1].end,contentType:"text"},Xt(e,i,t-i+1,[["enter",l,n],["enter",o,n],["exit",o,n],["exit",l,n]])),e}function Yb(e,n,t){let i=0;return l;function l(f){return e.enter("atxHeading"),o(f)}function o(f){return e.enter("atxHeadingSequence"),s(f)}function s(f){return f===35&&i++<6?(e.consume(f),s):f===null||wn(f)?(e.exit("atxHeadingSequence"),c(f)):t(f)}function c(f){return f===35?(e.enter("atxHeadingSequence"),h(f)):f===null||Oe(f)?(e.exit("atxHeading"),n(f)):sn(f)?ln(e,c,"whitespace")(f):(e.enter("atxHeadingText"),p(f))}function h(f){return f===35?(e.consume(f),h):(e.exit("atxHeadingSequence"),c(f))}function p(f){return f===null||f===35||wn(f)?(e.exit("atxHeadingText"),c(f)):(e.consume(f),p)}}const Qb=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Zd=["pre","script","style","textarea"],Kb={concrete:!0,name:"htmlFlow",resolveTo:n9,tokenize:t9},Zb={partial:!0,tokenize:i9},e9={partial:!0,tokenize:r9};function n9(e){let n=e.length;for(;n--&&!(e[n][0]==="enter"&&e[n][1].type==="htmlFlow"););return n>1&&e[n-2][1].type==="linePrefix"&&(e[n][1].start=e[n-2][1].start,e[n+1][1].start=e[n-2][1].start,e.splice(n-2,2)),e}function t9(e,n,t){const i=this;let l,o,s,c,h;return p;function p(A){return f(A)}function f(A){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(A),d}function d(A){return A===33?(e.consume(A),w):A===47?(e.consume(A),o=!0,_):A===63?(e.consume(A),l=3,i.interrupt?n:M):St(A)?(e.consume(A),s=String.fromCharCode(A),T):t(A)}function w(A){return A===45?(e.consume(A),l=2,b):A===91?(e.consume(A),l=5,c=0,D):St(A)?(e.consume(A),l=4,i.interrupt?n:M):t(A)}function b(A){return A===45?(e.consume(A),i.interrupt?n:M):t(A)}function D(A){const Te="CDATA[";return A===Te.charCodeAt(c++)?(e.consume(A),c===Te.length?i.interrupt?n:le:D):t(A)}function _(A){return St(A)?(e.consume(A),s=String.fromCharCode(A),T):t(A)}function T(A){if(A===null||A===47||A===62||wn(A)){const Te=A===47,ze=s.toLowerCase();return!Te&&!o&&Zd.includes(ze)?(l=1,i.interrupt?n(A):le(A)):Qb.includes(s.toLowerCase())?(l=6,Te?(e.consume(A),E):i.interrupt?n(A):le(A)):(l=7,i.interrupt&&!i.parser.lazy[i.now().line]?t(A):o?z(A):O(A))}return A===45||mt(A)?(e.consume(A),s+=String.fromCharCode(A),T):t(A)}function E(A){return A===62?(e.consume(A),i.interrupt?n:le):t(A)}function z(A){return sn(A)?(e.consume(A),z):U(A)}function O(A){return A===47?(e.consume(A),U):A===58||A===95||St(A)?(e.consume(A),ne):sn(A)?(e.consume(A),O):U(A)}function ne(A){return A===45||A===46||A===58||A===95||mt(A)?(e.consume(A),ne):K(A)}function K(A){return A===61?(e.consume(A),H):sn(A)?(e.consume(A),K):O(A)}function H(A){return A===null||A===60||A===61||A===62||A===96?t(A):A===34||A===39?(e.consume(A),h=A,I):sn(A)?(e.consume(A),H):re(A)}function I(A){return A===h?(e.consume(A),h=null,ee):A===null||Oe(A)?t(A):(e.consume(A),I)}function re(A){return A===null||A===34||A===39||A===47||A===60||A===61||A===62||A===96||wn(A)?K(A):(e.consume(A),re)}function ee(A){return A===47||A===62||sn(A)?O(A):t(A)}function U(A){return A===62?(e.consume(A),ie):t(A)}function ie(A){return A===null||Oe(A)?le(A):sn(A)?(e.consume(A),ie):t(A)}function le(A){return A===45&&l===2?(e.consume(A),xe):A===60&&l===1?(e.consume(A),De):A===62&&l===4?(e.consume(A),F):A===63&&l===3?(e.consume(A),M):A===93&&l===5?(e.consume(A),ke):Oe(A)&&(l===6||l===7)?(e.exit("htmlFlowData"),e.check(Zb,Q,Le)(A)):A===null||Oe(A)?(e.exit("htmlFlowData"),Le(A)):(e.consume(A),le)}function Le(A){return e.check(e9,me,Q)(A)}function me(A){return e.enter("lineEnding"),e.consume(A),e.exit("lineEnding"),ae}function ae(A){return A===null||Oe(A)?Le(A):(e.enter("htmlFlowData"),le(A))}function xe(A){return A===45?(e.consume(A),M):le(A)}function De(A){return A===47?(e.consume(A),s="",te):le(A)}function te(A){if(A===62){const Te=s.toLowerCase();return Zd.includes(Te)?(e.consume(A),F):le(A)}return St(A)&&s.length<8?(e.consume(A),s+=String.fromCharCode(A),te):le(A)}function ke(A){return A===93?(e.consume(A),M):le(A)}function M(A){return A===62?(e.consume(A),F):A===45&&l===2?(e.consume(A),M):le(A)}function F(A){return A===null||Oe(A)?(e.exit("htmlFlowData"),Q(A)):(e.consume(A),F)}function Q(A){return e.exit("htmlFlow"),n(A)}}function r9(e,n,t){const i=this;return l;function l(s){return Oe(s)?(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o):t(s)}function o(s){return i.parser.lazy[i.now().line]?t(s):n(s)}}function i9(e,n,t){return i;function i(l){return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),e.attempt(Do,n,t)}}const a9={name:"htmlText",tokenize:l9};function l9(e,n,t){const i=this;let l,o,s;return c;function c(M){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(M),h}function h(M){return M===33?(e.consume(M),p):M===47?(e.consume(M),K):M===63?(e.consume(M),O):St(M)?(e.consume(M),re):t(M)}function p(M){return M===45?(e.consume(M),f):M===91?(e.consume(M),o=0,D):St(M)?(e.consume(M),z):t(M)}function f(M){return M===45?(e.consume(M),b):t(M)}function d(M){return M===null?t(M):M===45?(e.consume(M),w):Oe(M)?(s=d,De(M)):(e.consume(M),d)}function w(M){return M===45?(e.consume(M),b):d(M)}function b(M){return M===62?xe(M):M===45?w(M):d(M)}function D(M){const F="CDATA[";return M===F.charCodeAt(o++)?(e.consume(M),o===F.length?_:D):t(M)}function _(M){return M===null?t(M):M===93?(e.consume(M),T):Oe(M)?(s=_,De(M)):(e.consume(M),_)}function T(M){return M===93?(e.consume(M),E):_(M)}function E(M){return M===62?xe(M):M===93?(e.consume(M),E):_(M)}function z(M){return M===null||M===62?xe(M):Oe(M)?(s=z,De(M)):(e.consume(M),z)}function O(M){return M===null?t(M):M===63?(e.consume(M),ne):Oe(M)?(s=O,De(M)):(e.consume(M),O)}function ne(M){return M===62?xe(M):O(M)}function K(M){return St(M)?(e.consume(M),H):t(M)}function H(M){return M===45||mt(M)?(e.consume(M),H):I(M)}function I(M){return Oe(M)?(s=I,De(M)):sn(M)?(e.consume(M),I):xe(M)}function re(M){return M===45||mt(M)?(e.consume(M),re):M===47||M===62||wn(M)?ee(M):t(M)}function ee(M){return M===47?(e.consume(M),xe):M===58||M===95||St(M)?(e.consume(M),U):Oe(M)?(s=ee,De(M)):sn(M)?(e.consume(M),ee):xe(M)}function U(M){return M===45||M===46||M===58||M===95||mt(M)?(e.consume(M),U):ie(M)}function ie(M){return M===61?(e.consume(M),le):Oe(M)?(s=ie,De(M)):sn(M)?(e.consume(M),ie):ee(M)}function le(M){return M===null||M===60||M===61||M===62||M===96?t(M):M===34||M===39?(e.consume(M),l=M,Le):Oe(M)?(s=le,De(M)):sn(M)?(e.consume(M),le):(e.consume(M),me)}function Le(M){return M===l?(e.consume(M),l=void 0,ae):M===null?t(M):Oe(M)?(s=Le,De(M)):(e.consume(M),Le)}function me(M){return M===null||M===34||M===39||M===60||M===61||M===96?t(M):M===47||M===62||wn(M)?ee(M):(e.consume(M),me)}function ae(M){return M===47||M===62||wn(M)?ee(M):t(M)}function xe(M){return M===62?(e.consume(M),e.exit("htmlTextData"),e.exit("htmlText"),n):t(M)}function De(M){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(M),e.exit("lineEnding"),te}function te(M){return sn(M)?ln(e,ke,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(M):ke(M)}function ke(M){return e.enter("htmlTextData"),s(M)}}const X1={name:"labelEnd",resolveAll:c9,resolveTo:h9,tokenize:m9},o9={tokenize:p9},s9={tokenize:d9},u9={tokenize:f9};function c9(e){let n=-1;const t=[];for(;++n<e.length;){const i=e[n][1];if(t.push(e[n]),i.type==="labelImage"||i.type==="labelLink"||i.type==="labelEnd"){const l=i.type==="labelImage"?4:2;i.type="data",n+=l}}return e.length!==t.length&&Xt(e,0,e.length,t),e}function h9(e,n){let t=e.length,i=0,l,o,s,c;for(;t--;)if(l=e[t][1],o){if(l.type==="link"||l.type==="labelLink"&&l._inactive)break;e[t][0]==="enter"&&l.type==="labelLink"&&(l._inactive=!0)}else if(s){if(e[t][0]==="enter"&&(l.type==="labelImage"||l.type==="labelLink")&&!l._balanced&&(o=t,l.type!=="labelLink")){i=2;break}}else l.type==="labelEnd"&&(s=t);const h={type:e[o][1].type==="labelLink"?"link":"image",start:{...e[o][1].start},end:{...e[e.length-1][1].end}},p={type:"label",start:{...e[o][1].start},end:{...e[s][1].end}},f={type:"labelText",start:{...e[o+i+2][1].end},end:{...e[s-2][1].start}};return c=[["enter",h,n],["enter",p,n]],c=or(c,e.slice(o+1,o+i+3)),c=or(c,[["enter",f,n]]),c=or(c,v0(n.parser.constructs.insideSpan.null,e.slice(o+i+4,s-3),n)),c=or(c,[["exit",f,n],e[s-2],e[s-1],["exit",p,n]]),c=or(c,e.slice(s+1)),c=or(c,[["exit",h,n]]),Xt(e,o,e.length,c),e}function m9(e,n,t){const i=this;let l=i.events.length,o,s;for(;l--;)if((i.events[l][1].type==="labelImage"||i.events[l][1].type==="labelLink")&&!i.events[l][1]._balanced){o=i.events[l][1];break}return c;function c(w){return o?o._inactive?d(w):(s=i.parser.defined.includes(xr(i.sliceSerialize({start:o.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(w),e.exit("labelMarker"),e.exit("labelEnd"),h):t(w)}function h(w){return w===40?e.attempt(o9,f,s?f:d)(w):w===91?e.attempt(s9,f,s?p:d)(w):s?f(w):d(w)}function p(w){return e.attempt(u9,f,d)(w)}function f(w){return n(w)}function d(w){return o._balanced=!0,t(w)}}function p9(e,n,t){return i;function i(d){return e.enter("resource"),e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),l}function l(d){return wn(d)?ao(e,o)(d):o(d)}function o(d){return d===41?f(d):b2(e,s,c,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(d)}function s(d){return wn(d)?ao(e,h)(d):f(d)}function c(d){return t(d)}function h(d){return d===34||d===39||d===40?x2(e,p,t,"resourceTitle","resourceTitleMarker","resourceTitleString")(d):f(d)}function p(d){return wn(d)?ao(e,f)(d):f(d)}function f(d){return d===41?(e.enter("resourceMarker"),e.consume(d),e.exit("resourceMarker"),e.exit("resource"),n):t(d)}}function d9(e,n,t){const i=this;return l;function l(c){return w2.call(i,e,o,s,"reference","referenceMarker","referenceString")(c)}function o(c){return i.parser.defined.includes(xr(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?n(c):t(c)}function s(c){return t(c)}}function f9(e,n,t){return i;function i(o){return e.enter("reference"),e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),l}function l(o){return o===93?(e.enter("referenceMarker"),e.consume(o),e.exit("referenceMarker"),e.exit("reference"),n):t(o)}}const g9={name:"labelStartImage",resolveAll:X1.resolveAll,tokenize:v9};function v9(e,n,t){const i=this;return l;function l(c){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(c),e.exit("labelImageMarker"),o}function o(c){return c===91?(e.enter("labelMarker"),e.consume(c),e.exit("labelMarker"),e.exit("labelImage"),s):t(c)}function s(c){return c===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(c):n(c)}}const y9={name:"labelStartLink",resolveAll:X1.resolveAll,tokenize:b9};function b9(e,n,t){const i=this;return l;function l(s){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(s),e.exit("labelMarker"),e.exit("labelLink"),o}function o(s){return s===94&&"_hiddenFootnoteSupport"in i.parser.constructs?t(s):n(s)}}const Dc={name:"lineEnding",tokenize:w9};function w9(e,n){return t;function t(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),ln(e,n,"linePrefix")}}const Zs={name:"thematicBreak",tokenize:x9};function x9(e,n,t){let i=0,l;return o;function o(p){return e.enter("thematicBreak"),s(p)}function s(p){return l=p,c(p)}function c(p){return p===l?(e.enter("thematicBreakSequence"),h(p)):i>=3&&(p===null||Oe(p))?(e.exit("thematicBreak"),n(p)):t(p)}function h(p){return p===l?(e.consume(p),i++,h):(e.exit("thematicBreakSequence"),sn(p)?ln(e,c,"whitespace")(p):c(p))}}const Jt={continuation:{tokenize:C9},exit:M9,name:"list",tokenize:D9},k9={partial:!0,tokenize:E9},S9={partial:!0,tokenize:_9};function D9(e,n,t){const i=this,l=i.events[i.events.length-1];let o=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0,s=0;return c;function c(b){const D=i.containerState.type||(b===42||b===43||b===45?"listUnordered":"listOrdered");if(D==="listUnordered"?!i.containerState.marker||b===i.containerState.marker:o1(b)){if(i.containerState.type||(i.containerState.type=D,e.enter(D,{_container:!0})),D==="listUnordered")return e.enter("listItemPrefix"),b===42||b===45?e.check(Zs,t,p)(b):p(b);if(!i.interrupt||b===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),h(b)}return t(b)}function h(b){return o1(b)&&++s<10?(e.consume(b),h):(!i.interrupt||s<2)&&(i.containerState.marker?b===i.containerState.marker:b===41||b===46)?(e.exit("listItemValue"),p(b)):t(b)}function p(b){return e.enter("listItemMarker"),e.consume(b),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||b,e.check(Do,i.interrupt?t:f,e.attempt(k9,w,d))}function f(b){return i.containerState.initialBlankLine=!0,o++,w(b)}function d(b){return sn(b)?(e.enter("listItemPrefixWhitespace"),e.consume(b),e.exit("listItemPrefixWhitespace"),w):t(b)}function w(b){return i.containerState.size=o+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,n(b)}}function C9(e,n,t){const i=this;return i.containerState._closeFlow=void 0,e.check(Do,l,o);function l(c){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,ln(e,n,"listItemIndent",i.containerState.size+1)(c)}function o(c){return i.containerState.furtherBlankLines||!sn(c)?(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,s(c)):(i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(S9,n,s)(c))}function s(c){return i.containerState._closeFlow=!0,i.interrupt=void 0,ln(e,e.attempt(Jt,n,t),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c)}}function _9(e,n,t){const i=this;return ln(e,l,"listItemIndent",i.containerState.size+1);function l(o){const s=i.events[i.events.length-1];return s&&s[1].type==="listItemIndent"&&s[2].sliceSerialize(s[1],!0).length===i.containerState.size?n(o):t(o)}}function M9(e){e.exit(this.containerState.type)}function E9(e,n,t){const i=this;return ln(e,l,"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function l(o){const s=i.events[i.events.length-1];return!sn(o)&&s&&s[1].type==="listItemPrefixWhitespace"?n(o):t(o)}}const ef={name:"setextUnderline",resolveTo:T9,tokenize:z9};function T9(e,n){let t=e.length,i,l,o;for(;t--;)if(e[t][0]==="enter"){if(e[t][1].type==="content"){i=t;break}e[t][1].type==="paragraph"&&(l=t)}else e[t][1].type==="content"&&e.splice(t,1),!o&&e[t][1].type==="definition"&&(o=t);const s={type:"setextHeading",start:{...e[i][1].start},end:{...e[e.length-1][1].end}};return e[l][1].type="setextHeadingText",o?(e.splice(l,0,["enter",s,n]),e.splice(o+1,0,["exit",e[i][1],n]),e[i][1].end={...e[o][1].end}):e[i][1]=s,e.push(["exit",s,n]),e}function z9(e,n,t){const i=this;let l;return o;function o(p){let f=i.events.length,d;for(;f--;)if(i.events[f][1].type!=="lineEnding"&&i.events[f][1].type!=="linePrefix"&&i.events[f][1].type!=="content"){d=i.events[f][1].type==="paragraph";break}return!i.parser.lazy[i.now().line]&&(i.interrupt||d)?(e.enter("setextHeadingLine"),l=p,s(p)):t(p)}function s(p){return e.enter("setextHeadingLineSequence"),c(p)}function c(p){return p===l?(e.consume(p),c):(e.exit("setextHeadingLineSequence"),sn(p)?ln(e,h,"lineSuffix")(p):h(p))}function h(p){return p===null||Oe(p)?(e.exit("setextHeadingLine"),n(p)):t(p)}}const A9={tokenize:P9};function P9(e){const n=this,t=e.attempt(Do,i,e.attempt(this.parser.constructs.flowInitial,l,ln(e,e.attempt(this.parser.constructs.flow,l,e.attempt(Ib,l)),"linePrefix")));return t;function i(o){if(o===null){e.consume(o);return}return e.enter("lineEndingBlank"),e.consume(o),e.exit("lineEndingBlank"),n.currentConstruct=void 0,t}function l(o){if(o===null){e.consume(o);return}return e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),n.currentConstruct=void 0,t}}const N9={resolveAll:S2()},L9=k2("string"),J9=k2("text");function k2(e){return{resolveAll:S2(e==="text"?R9:void 0),tokenize:n};function n(t){const i=this,l=this.parser.constructs[e],o=t.attempt(l,s,c);return s;function s(f){return p(f)?o(f):c(f)}function c(f){if(f===null){t.consume(f);return}return t.enter("data"),t.consume(f),h}function h(f){return p(f)?(t.exit("data"),o(f)):(t.consume(f),h)}function p(f){if(f===null)return!0;const d=l[f];let w=-1;if(d)for(;++w<d.length;){const b=d[w];if(!b.previous||b.previous.call(i,i.previous))return!0}return!1}}}function S2(e){return n;function n(t,i){let l=-1,o;for(;++l<=t.length;)o===void 0?t[l]&&t[l][1].type==="data"&&(o=l,l++):(!t[l]||t[l][1].type!=="data")&&(l!==o+2&&(t[o][1].end=t[l-1][1].end,t.splice(o+2,l-o-2),l=o+2),o=void 0);return e?e(t,i):t}}function R9(e,n){let t=0;for(;++t<=e.length;)if((t===e.length||e[t][1].type==="lineEnding")&&e[t-1][1].type==="data"){const i=e[t-1][1],l=n.sliceStream(i);let o=l.length,s=-1,c=0,h;for(;o--;){const p=l[o];if(typeof p=="string"){for(s=p.length;p.charCodeAt(s-1)===32;)c++,s--;if(s)break;s=-1}else if(p===-2)h=!0,c++;else if(p!==-1){o++;break}}if(n._contentTypeTextTrailing&&t===e.length&&(c=0),c){const p={type:t===e.length||h||c<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:o?s:i.start._bufferIndex+s,_index:i.start._index+o,line:i.end.line,column:i.end.column-c,offset:i.end.offset-c},end:{...i.end}};i.end={...p.start},i.start.offset===i.end.offset?Object.assign(i,p):(e.splice(t,0,["enter",p,n],["exit",p,n]),t+=2)}t++}return e}const I9={42:Jt,43:Jt,45:Jt,48:Jt,49:Jt,50:Jt,51:Jt,52:Jt,53:Jt,54:Jt,55:Jt,56:Jt,57:Jt,62:f2},j9={91:$b},F9={[-2]:Sc,[-1]:Sc,32:Sc},O9={35:Gb,42:Zs,45:[ef,Zs],60:Kb,61:ef,95:Zs,96:Kd,126:Kd},B9={38:v2,92:g2},$9={[-5]:Dc,[-4]:Dc,[-3]:Dc,33:g9,38:v2,42:s1,60:[yb,a9],91:y9,92:[Vb,g2],93:X1,95:s1,96:Ab},H9={null:[s1,N9]},q9={null:[42,95]},U9={null:[]},V9=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:q9,contentInitial:j9,disable:U9,document:I9,flow:O9,flowInitial:F9,insideSpan:H9,string:B9,text:$9},Symbol.toStringTag,{value:"Module"}));function W9(e,n,t){let i={_bufferIndex:-1,_index:0,line:t&&t.line||1,column:t&&t.column||1,offset:t&&t.offset||0};const l={},o=[];let s=[],c=[];const h={attempt:I(K),check:I(H),consume:z,enter:O,exit:ne,interrupt:I(H,{interrupt:!0})},p={code:null,containerState:{},defineSkip:_,events:[],now:D,parser:e,previous:null,sliceSerialize:w,sliceStream:b,write:d};let f=n.tokenize.call(p,h);return n.resolveAll&&o.push(n),p;function d(ie){return s=or(s,ie),T(),s[s.length-1]!==null?[]:(re(n,0),p.events=v0(o,p.events,p),p.events)}function w(ie,le){return X9(b(ie),le)}function b(ie){return G9(s,ie)}function D(){const{_bufferIndex:ie,_index:le,line:Le,column:me,offset:ae}=i;return{_bufferIndex:ie,_index:le,line:Le,column:me,offset:ae}}function _(ie){l[ie.line]=ie.column,U()}function T(){let ie;for(;i._index<s.length;){const le=s[i._index];if(typeof le=="string")for(ie=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===ie&&i._bufferIndex<le.length;)E(le.charCodeAt(i._bufferIndex));else E(le)}}function E(ie){f=f(ie)}function z(ie){Oe(ie)?(i.line++,i.column=1,i.offset+=ie===-3?2:1,U()):ie!==-1&&(i.column++,i.offset++),i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===s[i._index].length&&(i._bufferIndex=-1,i._index++)),p.previous=ie}function O(ie,le){const Le=le||{};return Le.type=ie,Le.start=D(),p.events.push(["enter",Le,p]),c.push(Le),Le}function ne(ie){const le=c.pop();return le.end=D(),p.events.push(["exit",le,p]),le}function K(ie,le){re(ie,le.from)}function H(ie,le){le.restore()}function I(ie,le){return Le;function Le(me,ae,xe){let De,te,ke,M;return Array.isArray(me)?Q(me):"tokenize"in me?Q([me]):F(me);function F(Ae){return Ke;function Ke(Ve){const tn=Ve!==null&&Ae[Ve],bn=Ve!==null&&Ae.null,at=[...Array.isArray(tn)?tn:tn?[tn]:[],...Array.isArray(bn)?bn:bn?[bn]:[]];return Q(at)(Ve)}}function Q(Ae){return De=Ae,te=0,Ae.length===0?xe:A(Ae[te])}function A(Ae){return Ke;function Ke(Ve){return M=ee(),ke=Ae,Ae.partial||(p.currentConstruct=Ae),Ae.name&&p.parser.constructs.disable.null.includes(Ae.name)?ze():Ae.tokenize.call(le?Object.assign(Object.create(p),le):p,h,Te,ze)(Ve)}}function Te(Ae){return ie(ke,M),ae}function ze(Ae){return M.restore(),++te<De.length?A(De[te]):xe}}}function re(ie,le){ie.resolveAll&&!o.includes(ie)&&o.push(ie),ie.resolve&&Xt(p.events,le,p.events.length-le,ie.resolve(p.events.slice(le),p)),ie.resolveTo&&(p.events=ie.resolveTo(p.events,p))}function ee(){const ie=D(),le=p.previous,Le=p.currentConstruct,me=p.events.length,ae=Array.from(c);return{from:me,restore:xe};function xe(){i=ie,p.previous=le,p.currentConstruct=Le,p.events.length=me,c=ae,U()}}function U(){i.line in l&&i.column<2&&(i.column=l[i.line],i.offset+=l[i.line]-1)}}function G9(e,n){const t=n.start._index,i=n.start._bufferIndex,l=n.end._index,o=n.end._bufferIndex;let s;if(t===l)s=[e[t].slice(i,o)];else{if(s=e.slice(t,l),i>-1){const c=s[0];typeof c=="string"?s[0]=c.slice(i):s.shift()}o>0&&s.push(e[l].slice(0,o))}return s}function X9(e,n){let t=-1;const i=[];let l;for(;++t<e.length;){const o=e[t];let s;if(typeof o=="string")s=o;else switch(o){case-5:{s="\r";break}case-4:{s=`
`;break}case-3:{s=`\r
`;break}case-2:{s=n?" ":"	";break}case-1:{if(!n&&l)continue;s=" ";break}default:s=String.fromCharCode(o)}l=o===-2,i.push(s)}return i.join("")}function Y9(e){const i={constructs:p2([V9,...(e||{}).extensions||[]]),content:l(hb),defined:[],document:l(pb),flow:l(A9),lazy:{},string:l(L9),text:l(J9)};return i;function l(o){return s;function s(c){return W9(i,o,c)}}}function Q9(e){for(;!y2(e););return e}const nf=/[\0\t\n\r]/g;function K9(){let e=1,n="",t=!0,i;return l;function l(o,s,c){const h=[];let p,f,d,w,b;for(o=n+(typeof o=="string"?o.toString():new TextDecoder(s||void 0).decode(o)),d=0,n="",t&&(o.charCodeAt(0)===65279&&d++,t=void 0);d<o.length;){if(nf.lastIndex=d,p=nf.exec(o),w=p&&p.index!==void 0?p.index:o.length,b=o.charCodeAt(w),!p){n=o.slice(d);break}if(b===10&&d===w&&i)h.push(-3),i=void 0;else switch(i&&(h.push(-5),i=void 0),d<w&&(h.push(o.slice(d,w)),e+=w-d),b){case 0:{h.push(65533),e++;break}case 9:{for(f=Math.ceil(e/4)*4,h.push(-2);e++<f;)h.push(-1);break}case 10:{h.push(-4),e=1;break}default:i=!0,e=1}d=w+1}return c&&(i&&h.push(-5),n&&h.push(n),h.push(null)),h}}const Z9=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ew(e){return e.replace(Z9,nw)}function nw(e,n,t){if(n)return n;if(t.charCodeAt(0)===35){const l=t.charCodeAt(1),o=l===120||l===88;return d2(t.slice(o?2:1),o?16:10)}return G1(t)||e}const D2={}.hasOwnProperty;function tw(e,n,t){return n&&typeof n=="object"&&(t=n,n=void 0),rw(t)(Q9(Y9(t).document().write(K9()(e,n,!0))))}function rw(e){const n={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:o(Ft),autolinkProtocol:ee,autolinkEmail:ee,atxHeading:o(Br),blockQuote:o(bn),characterEscape:ee,characterReference:ee,codeFenced:o(at),codeFencedFenceInfo:s,codeFencedFenceMeta:s,codeIndented:o(at,s),codeText:o(zn,s),codeTextData:ee,data:ee,codeFlowValue:ee,definition:o(lt),definitionDestinationString:s,definitionLabelString:s,definitionTitleString:s,emphasis:o(kr),hardBreakEscape:o(tt),hardBreakTrailing:o(tt),htmlFlow:o(dr,s),htmlFlowData:ee,htmlText:o(dr,s),htmlTextData:ee,image:o($r),label:s,link:o(Ft),listItem:o(gt),listItemValue:w,listOrdered:o(ft,d),listUnordered:o(ft),paragraph:o(Wi),reference:A,referenceString:s,resourceDestinationString:s,resourceTitleString:s,setextHeading:o(Br),strong:o(ka),thematicBreak:o(Sr)},exit:{atxHeading:h(),atxHeadingSequence:K,autolink:h(),autolinkEmail:tn,autolinkProtocol:Ve,blockQuote:h(),characterEscapeValue:U,characterReferenceMarkerHexadecimal:ze,characterReferenceMarkerNumeric:ze,characterReferenceValue:Ae,characterReference:Ke,codeFenced:h(T),codeFencedFence:_,codeFencedFenceInfo:b,codeFencedFenceMeta:D,codeFlowValue:U,codeIndented:h(E),codeText:h(ae),codeTextData:U,data:U,definition:h(),definitionDestinationString:ne,definitionLabelString:z,definitionTitleString:O,emphasis:h(),hardBreakEscape:h(le),hardBreakTrailing:h(le),htmlFlow:h(Le),htmlFlowData:U,htmlText:h(me),htmlTextData:U,image:h(De),label:ke,labelText:te,lineEnding:ie,link:h(xe),listItem:h(),listOrdered:h(),listUnordered:h(),paragraph:h(),referenceString:Te,resourceDestinationString:M,resourceTitleString:F,resource:Q,setextHeading:h(re),setextHeadingLineSequence:I,setextHeadingText:H,strong:h(),thematicBreak:h()}};C2(n,(e||{}).mdastExtensions||[]);const t={};return i;function i(Z){let ye={type:"root",children:[]};const Be={stack:[ye],tokenStack:[],config:n,enter:c,exit:p,buffer:s,resume:f,data:t},We=[];let un=-1;for(;++un<Z.length;)if(Z[un][1].type==="listOrdered"||Z[un][1].type==="listUnordered")if(Z[un][0]==="enter")We.push(un);else{const Wn=We.pop();un=l(Z,Wn,un)}for(un=-1;++un<Z.length;){const Wn=n[Z[un][0]];D2.call(Wn,Z[un][1].type)&&Wn[Z[un][1].type].call(Object.assign({sliceSerialize:Z[un][2].sliceSerialize},Be),Z[un][1])}if(Be.tokenStack.length>0){const Wn=Be.tokenStack[Be.tokenStack.length-1];(Wn[1]||tf).call(Be,void 0,Wn[0])}for(ye.position={start:Ni(Z.length>0?Z[0][1].start:{line:1,column:1,offset:0}),end:Ni(Z.length>0?Z[Z.length-2][1].end:{line:1,column:1,offset:0})},un=-1;++un<n.transforms.length;)ye=n.transforms[un](ye)||ye;return ye}function l(Z,ye,Be){let We=ye-1,un=-1,Wn=!1,Ot,Mt,Qn,Dr;for(;++We<=Be;){const On=Z[We];switch(On[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{On[0]==="enter"?un++:un--,Dr=void 0;break}case"lineEndingBlank":{On[0]==="enter"&&(Ot&&!Dr&&!un&&!Qn&&(Qn=We),Dr=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:Dr=void 0}if(!un&&On[0]==="enter"&&On[1].type==="listItemPrefix"||un===-1&&On[0]==="exit"&&(On[1].type==="listUnordered"||On[1].type==="listOrdered")){if(Ot){let Bt=We;for(Mt=void 0;Bt--;){const vt=Z[Bt];if(vt[1].type==="lineEnding"||vt[1].type==="lineEndingBlank"){if(vt[0]==="exit")continue;Mt&&(Z[Mt][1].type="lineEndingBlank",Wn=!0),vt[1].type="lineEnding",Mt=Bt}else if(!(vt[1].type==="linePrefix"||vt[1].type==="blockQuotePrefix"||vt[1].type==="blockQuotePrefixWhitespace"||vt[1].type==="blockQuoteMarker"||vt[1].type==="listItemIndent"))break}Qn&&(!Mt||Qn<Mt)&&(Ot._spread=!0),Ot.end=Object.assign({},Mt?Z[Mt][1].start:On[1].end),Z.splice(Mt||We,0,["exit",Ot,On[2]]),We++,Be++}if(On[1].type==="listItemPrefix"){const Bt={type:"listItem",_spread:!1,start:Object.assign({},On[1].start),end:void 0};Ot=Bt,Z.splice(We,0,["enter",Bt,On[2]]),We++,Be++,Qn=void 0,Dr=!0}}}return Z[ye][1]._spread=Wn,Be}function o(Z,ye){return Be;function Be(We){c.call(this,Z(We),We),ye&&ye.call(this,We)}}function s(){this.stack.push({type:"fragment",children:[]})}function c(Z,ye,Be){this.stack[this.stack.length-1].children.push(Z),this.stack.push(Z),this.tokenStack.push([ye,Be||void 0]),Z.position={start:Ni(ye.start),end:void 0}}function h(Z){return ye;function ye(Be){Z&&Z.call(this,Be),p.call(this,Be)}}function p(Z,ye){const Be=this.stack.pop(),We=this.tokenStack.pop();if(We)We[0].type!==Z.type&&(ye?ye.call(this,Z,We[0]):(We[1]||tf).call(this,Z,We[0]));else throw new Error("Cannot close `"+Z.type+"` ("+io({start:Z.start,end:Z.end})+"): it’s not open");Be.position.end=Ni(Z.end)}function f(){return W1(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function w(Z){if(this.data.expectingFirstListItemValue){const ye=this.stack[this.stack.length-2];ye.start=Number.parseInt(this.sliceSerialize(Z),10),this.data.expectingFirstListItemValue=void 0}}function b(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.lang=Z}function D(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.meta=Z}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.value=Z.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function E(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.value=Z.replace(/(\r?\n|\r)$/g,"")}function z(Z){const ye=this.resume(),Be=this.stack[this.stack.length-1];Be.label=ye,Be.identifier=xr(this.sliceSerialize(Z)).toLowerCase()}function O(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.title=Z}function ne(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.url=Z}function K(Z){const ye=this.stack[this.stack.length-1];if(!ye.depth){const Be=this.sliceSerialize(Z).length;ye.depth=Be}}function H(){this.data.setextHeadingSlurpLineEnding=!0}function I(Z){const ye=this.stack[this.stack.length-1];ye.depth=this.sliceSerialize(Z).codePointAt(0)===61?1:2}function re(){this.data.setextHeadingSlurpLineEnding=void 0}function ee(Z){const Be=this.stack[this.stack.length-1].children;let We=Be[Be.length-1];(!We||We.type!=="text")&&(We=Kt(),We.position={start:Ni(Z.start),end:void 0},Be.push(We)),this.stack.push(We)}function U(Z){const ye=this.stack.pop();ye.value+=this.sliceSerialize(Z),ye.position.end=Ni(Z.end)}function ie(Z){const ye=this.stack[this.stack.length-1];if(this.data.atHardBreak){const Be=ye.children[ye.children.length-1];Be.position.end=Ni(Z.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&n.canContainEols.includes(ye.type)&&(ee.call(this,Z),U.call(this,Z))}function le(){this.data.atHardBreak=!0}function Le(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.value=Z}function me(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.value=Z}function ae(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.value=Z}function xe(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ye=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ye,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function De(){const Z=this.stack[this.stack.length-1];if(this.data.inReference){const ye=this.data.referenceType||"shortcut";Z.type+="Reference",Z.referenceType=ye,delete Z.url,delete Z.title}else delete Z.identifier,delete Z.label;this.data.referenceType=void 0}function te(Z){const ye=this.sliceSerialize(Z),Be=this.stack[this.stack.length-2];Be.label=ew(ye),Be.identifier=xr(ye).toLowerCase()}function ke(){const Z=this.stack[this.stack.length-1],ye=this.resume(),Be=this.stack[this.stack.length-1];if(this.data.inReference=!0,Be.type==="link"){const We=Z.children;Be.children=We}else Be.alt=ye}function M(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.url=Z}function F(){const Z=this.resume(),ye=this.stack[this.stack.length-1];ye.title=Z}function Q(){this.data.inReference=void 0}function A(){this.data.referenceType="collapsed"}function Te(Z){const ye=this.resume(),Be=this.stack[this.stack.length-1];Be.label=ye,Be.identifier=xr(this.sliceSerialize(Z)).toLowerCase(),this.data.referenceType="full"}function ze(Z){this.data.characterReferenceType=Z.type}function Ae(Z){const ye=this.sliceSerialize(Z),Be=this.data.characterReferenceType;let We;Be?(We=d2(ye,Be==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):We=G1(ye);const un=this.stack[this.stack.length-1];un.value+=We}function Ke(Z){const ye=this.stack.pop();ye.position.end=Ni(Z.end)}function Ve(Z){U.call(this,Z);const ye=this.stack[this.stack.length-1];ye.url=this.sliceSerialize(Z)}function tn(Z){U.call(this,Z);const ye=this.stack[this.stack.length-1];ye.url="mailto:"+this.sliceSerialize(Z)}function bn(){return{type:"blockquote",children:[]}}function at(){return{type:"code",lang:null,meta:null,value:""}}function zn(){return{type:"inlineCode",value:""}}function lt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function kr(){return{type:"emphasis",children:[]}}function Br(){return{type:"heading",depth:0,children:[]}}function tt(){return{type:"break"}}function dr(){return{type:"html",value:""}}function $r(){return{type:"image",title:null,url:"",alt:null}}function Ft(){return{type:"link",title:null,url:"",children:[]}}function ft(Z){return{type:"list",ordered:Z.type==="listOrdered",start:null,spread:Z._spread,children:[]}}function gt(Z){return{type:"listItem",spread:Z._spread,checked:null,children:[]}}function Wi(){return{type:"paragraph",children:[]}}function ka(){return{type:"strong",children:[]}}function Kt(){return{type:"text",value:""}}function Sr(){return{type:"thematicBreak"}}}function Ni(e){return{line:e.line,column:e.column,offset:e.offset}}function C2(e,n){let t=-1;for(;++t<n.length;){const i=n[t];Array.isArray(i)?C2(e,i):iw(e,i)}}function iw(e,n){let t;for(t in n)if(D2.call(n,t))switch(t){case"canContainEols":{const i=n[t];i&&e[t].push(...i);break}case"transforms":{const i=n[t];i&&e[t].push(...i);break}case"enter":case"exit":{const i=n[t];i&&Object.assign(e[t],i);break}}}function tf(e,n){throw e?new Error("Cannot close `"+e.type+"` ("+io({start:e.start,end:e.end})+"): a different token (`"+n.type+"`, "+io({start:n.start,end:n.end})+") is open"):new Error("Cannot close document, a token (`"+n.type+"`, "+io({start:n.start,end:n.end})+") is still open")}function aw(e){const n=this;n.parser=t;function t(i){return tw(i,{...n.data("settings"),...e,extensions:n.data("micromarkExtensions")||[],mdastExtensions:n.data("fromMarkdownExtensions")||[]})}}function lw(e,n){const t={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(n),!0)};return e.patch(n,t),e.applyData(n,t)}function ow(e,n){const t={type:"element",tagName:"br",properties:{},children:[]};return e.patch(n,t),[e.applyData(n,t),{type:"text",value:`
`}]}function sw(e,n){const t=n.value?n.value+`
`:"",i={},l=n.lang?n.lang.split(/\s+/):[];l.length>0&&(i.className=["language-"+l[0]]);let o={type:"element",tagName:"code",properties:i,children:[{type:"text",value:t}]};return n.meta&&(o.data={meta:n.meta}),e.patch(n,o),o=e.applyData(n,o),o={type:"element",tagName:"pre",properties:{},children:[o]},e.patch(n,o),o}function uw(e,n){const t={type:"element",tagName:"del",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function cw(e,n){const t={type:"element",tagName:"em",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function hw(e,n){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",i=String(n.identifier).toUpperCase(),l=ll(i.toLowerCase()),o=e.footnoteOrder.indexOf(i);let s,c=e.footnoteCounts.get(i);c===void 0?(c=0,e.footnoteOrder.push(i),s=e.footnoteOrder.length):s=o+1,c+=1,e.footnoteCounts.set(i,c);const h={type:"element",tagName:"a",properties:{href:"#"+t+"fn-"+l,id:t+"fnref-"+l+(c>1?"-"+c:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(s)}]};e.patch(n,h);const p={type:"element",tagName:"sup",properties:{},children:[h]};return e.patch(n,p),e.applyData(n,p)}function mw(e,n){const t={type:"element",tagName:"h"+n.depth,properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function pw(e,n){if(e.options.allowDangerousHtml){const t={type:"raw",value:n.value};return e.patch(n,t),e.applyData(n,t)}}function _2(e,n){const t=n.referenceType;let i="]";if(t==="collapsed"?i+="[]":t==="full"&&(i+="["+(n.label||n.identifier)+"]"),n.type==="imageReference")return[{type:"text",value:"!["+n.alt+i}];const l=e.all(n),o=l[0];o&&o.type==="text"?o.value="["+o.value:l.unshift({type:"text",value:"["});const s=l[l.length-1];return s&&s.type==="text"?s.value+=i:l.push({type:"text",value:i}),l}function dw(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return _2(e,n);const l={src:ll(i.url||""),alt:n.alt};i.title!==null&&i.title!==void 0&&(l.title=i.title);const o={type:"element",tagName:"img",properties:l,children:[]};return e.patch(n,o),e.applyData(n,o)}function fw(e,n){const t={src:ll(n.url)};n.alt!==null&&n.alt!==void 0&&(t.alt=n.alt),n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"img",properties:t,children:[]};return e.patch(n,i),e.applyData(n,i)}function gw(e,n){const t={type:"text",value:n.value.replace(/\r?\n|\r/g," ")};e.patch(n,t);const i={type:"element",tagName:"code",properties:{},children:[t]};return e.patch(n,i),e.applyData(n,i)}function vw(e,n){const t=String(n.identifier).toUpperCase(),i=e.definitionById.get(t);if(!i)return _2(e,n);const l={href:ll(i.url||"")};i.title!==null&&i.title!==void 0&&(l.title=i.title);const o={type:"element",tagName:"a",properties:l,children:e.all(n)};return e.patch(n,o),e.applyData(n,o)}function yw(e,n){const t={href:ll(n.url)};n.title!==null&&n.title!==void 0&&(t.title=n.title);const i={type:"element",tagName:"a",properties:t,children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function bw(e,n,t){const i=e.all(n),l=t?ww(t):M2(n),o={},s=[];if(typeof n.checked=="boolean"){const f=i[0];let d;f&&f.type==="element"&&f.tagName==="p"?d=f:(d={type:"element",tagName:"p",properties:{},children:[]},i.unshift(d)),d.children.length>0&&d.children.unshift({type:"text",value:" "}),d.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:n.checked,disabled:!0},children:[]}),o.className=["task-list-item"]}let c=-1;for(;++c<i.length;){const f=i[c];(l||c!==0||f.type!=="element"||f.tagName!=="p")&&s.push({type:"text",value:`
`}),f.type==="element"&&f.tagName==="p"&&!l?s.push(...f.children):s.push(f)}const h=i[i.length-1];h&&(l||h.type!=="element"||h.tagName!=="p")&&s.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:o,children:s};return e.patch(n,p),e.applyData(n,p)}function ww(e){let n=!1;if(e.type==="list"){n=e.spread||!1;const t=e.children;let i=-1;for(;!n&&++i<t.length;)n=M2(t[i])}return n}function M2(e){const n=e.spread;return n??e.children.length>1}function xw(e,n){const t={},i=e.all(n);let l=-1;for(typeof n.start=="number"&&n.start!==1&&(t.start=n.start);++l<i.length;){const s=i[l];if(s.type==="element"&&s.tagName==="li"&&s.properties&&Array.isArray(s.properties.className)&&s.properties.className.includes("task-list-item")){t.className=["contains-task-list"];break}}const o={type:"element",tagName:n.ordered?"ol":"ul",properties:t,children:e.wrap(i,!0)};return e.patch(n,o),e.applyData(n,o)}function kw(e,n){const t={type:"element",tagName:"p",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Sw(e,n){const t={type:"root",children:e.wrap(e.all(n))};return e.patch(n,t),e.applyData(n,t)}function Dw(e,n){const t={type:"element",tagName:"strong",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}function Cw(e,n){const t=e.all(n),i=t.shift(),l=[];if(i){const s={type:"element",tagName:"thead",properties:{},children:e.wrap([i],!0)};e.patch(n.children[0],s),l.push(s)}if(t.length>0){const s={type:"element",tagName:"tbody",properties:{},children:e.wrap(t,!0)},c=H1(n.children[1]),h=l2(n.children[n.children.length-1]);c&&h&&(s.position={start:c,end:h}),l.push(s)}const o={type:"element",tagName:"table",properties:{},children:e.wrap(l,!0)};return e.patch(n,o),e.applyData(n,o)}function _w(e,n,t){const i=t?t.children:void 0,o=(i?i.indexOf(n):1)===0?"th":"td",s=t&&t.type==="table"?t.align:void 0,c=s?s.length:n.children.length;let h=-1;const p=[];for(;++h<c;){const d=n.children[h],w={},b=s?s[h]:void 0;b&&(w.align=b);let D={type:"element",tagName:o,properties:w,children:[]};d&&(D.children=e.all(d),e.patch(d,D),D=e.applyData(d,D)),p.push(D)}const f={type:"element",tagName:"tr",properties:{},children:e.wrap(p,!0)};return e.patch(n,f),e.applyData(n,f)}function Mw(e,n){const t={type:"element",tagName:"td",properties:{},children:e.all(n)};return e.patch(n,t),e.applyData(n,t)}const rf=9,af=32;function Ew(e){const n=String(e),t=/\r?\n|\r/g;let i=t.exec(n),l=0;const o=[];for(;i;)o.push(lf(n.slice(l,i.index),l>0,!0),i[0]),l=i.index+i[0].length,i=t.exec(n);return o.push(lf(n.slice(l),l>0,!1)),o.join("")}function lf(e,n,t){let i=0,l=e.length;if(n){let o=e.codePointAt(i);for(;o===rf||o===af;)i++,o=e.codePointAt(i)}if(t){let o=e.codePointAt(l-1);for(;o===rf||o===af;)l--,o=e.codePointAt(l-1)}return l>i?e.slice(i,l):""}function Tw(e,n){const t={type:"text",value:Ew(String(n.value))};return e.patch(n,t),e.applyData(n,t)}function zw(e,n){const t={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(n,t),e.applyData(n,t)}const Aw={blockquote:lw,break:ow,code:sw,delete:uw,emphasis:cw,footnoteReference:hw,heading:mw,html:pw,imageReference:dw,image:fw,inlineCode:gw,linkReference:vw,link:yw,listItem:bw,list:xw,paragraph:kw,root:Sw,strong:Dw,table:Cw,tableCell:Mw,tableRow:_w,text:Tw,thematicBreak:zw,toml:Is,yaml:Is,definition:Is,footnoteDefinition:Is};function Is(){}const E2=-1,y0=0,lo=1,i0=2,Y1=3,Q1=4,K1=5,Z1=6,T2=7,z2=8,of=typeof self=="object"?self:globalThis,Pw=(e,n)=>{const t=(l,o)=>(e.set(o,l),l),i=l=>{if(e.has(l))return e.get(l);const[o,s]=n[l];switch(o){case y0:case E2:return t(s,l);case lo:{const c=t([],l);for(const h of s)c.push(i(h));return c}case i0:{const c=t({},l);for(const[h,p]of s)c[i(h)]=i(p);return c}case Y1:return t(new Date(s),l);case Q1:{const{source:c,flags:h}=s;return t(new RegExp(c,h),l)}case K1:{const c=t(new Map,l);for(const[h,p]of s)c.set(i(h),i(p));return c}case Z1:{const c=t(new Set,l);for(const h of s)c.add(i(h));return c}case T2:{const{name:c,message:h}=s;return t(new of[c](h),l)}case z2:return t(BigInt(s),l);case"BigInt":return t(Object(BigInt(s)),l);case"ArrayBuffer":return t(new Uint8Array(s).buffer,s);case"DataView":{const{buffer:c}=new Uint8Array(s);return t(new DataView(c),s)}}return t(new of[o](s),l)};return i},sf=e=>Pw(new Map,e)(0),Wa="",{toString:Nw}={},{keys:Lw}=Object,Kl=e=>{const n=typeof e;if(n!=="object"||!e)return[y0,n];const t=Nw.call(e).slice(8,-1);switch(t){case"Array":return[lo,Wa];case"Object":return[i0,Wa];case"Date":return[Y1,Wa];case"RegExp":return[Q1,Wa];case"Map":return[K1,Wa];case"Set":return[Z1,Wa];case"DataView":return[lo,t]}return t.includes("Array")?[lo,t]:t.includes("Error")?[T2,t]:[i0,t]},js=([e,n])=>e===y0&&(n==="function"||n==="symbol"),Jw=(e,n,t,i)=>{const l=(s,c)=>{const h=i.push(s)-1;return t.set(c,h),h},o=s=>{if(t.has(s))return t.get(s);let[c,h]=Kl(s);switch(c){case y0:{let f=s;switch(h){case"bigint":c=z2,f=s.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+h);f=null;break;case"undefined":return l([E2],s)}return l([c,f],s)}case lo:{if(h){let w=s;return h==="DataView"?w=new Uint8Array(s.buffer):h==="ArrayBuffer"&&(w=new Uint8Array(s)),l([h,[...w]],s)}const f=[],d=l([c,f],s);for(const w of s)f.push(o(w));return d}case i0:{if(h)switch(h){case"BigInt":return l([h,s.toString()],s);case"Boolean":case"Number":case"String":return l([h,s.valueOf()],s)}if(n&&"toJSON"in s)return o(s.toJSON());const f=[],d=l([c,f],s);for(const w of Lw(s))(e||!js(Kl(s[w])))&&f.push([o(w),o(s[w])]);return d}case Y1:return l([c,s.toISOString()],s);case Q1:{const{source:f,flags:d}=s;return l([c,{source:f,flags:d}],s)}case K1:{const f=[],d=l([c,f],s);for(const[w,b]of s)(e||!(js(Kl(w))||js(Kl(b))))&&f.push([o(w),o(b)]);return d}case Z1:{const f=[],d=l([c,f],s);for(const w of s)(e||!js(Kl(w)))&&f.push(o(w));return d}}const{message:p}=s;return l([c,{name:h,message:p}],s)};return o},uf=(e,{json:n,lossy:t}={})=>{const i=[];return Jw(!(n||t),!!n,new Map,i)(e),i},a0=typeof structuredClone=="function"?(e,n)=>n&&("json"in n||"lossy"in n)?sf(uf(e,n)):structuredClone(e):(e,n)=>sf(uf(e,n));function Rw(e,n){const t=[{type:"text",value:"↩"}];return n>1&&t.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(n)}]}),t}function Iw(e,n){return"Back to reference "+(e+1)+(n>1?"-"+n:"")}function jw(e){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",t=e.options.footnoteBackContent||Rw,i=e.options.footnoteBackLabel||Iw,l=e.options.footnoteLabel||"Footnotes",o=e.options.footnoteLabelTagName||"h2",s=e.options.footnoteLabelProperties||{className:["sr-only"]},c=[];let h=-1;for(;++h<e.footnoteOrder.length;){const p=e.footnoteById.get(e.footnoteOrder[h]);if(!p)continue;const f=e.all(p),d=String(p.identifier).toUpperCase(),w=ll(d.toLowerCase());let b=0;const D=[],_=e.footnoteCounts.get(d);for(;_!==void 0&&++b<=_;){D.length>0&&D.push({type:"text",value:" "});let z=typeof t=="string"?t:t(h,b);typeof z=="string"&&(z={type:"text",value:z}),D.push({type:"element",tagName:"a",properties:{href:"#"+n+"fnref-"+w+(b>1?"-"+b:""),dataFootnoteBackref:"",ariaLabel:typeof i=="string"?i:i(h,b),className:["data-footnote-backref"]},children:Array.isArray(z)?z:[z]})}const T=f[f.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const z=T.children[T.children.length-1];z&&z.type==="text"?z.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...D)}else f.push(...D);const E={type:"element",tagName:"li",properties:{id:n+"fn-"+w},children:e.wrap(f,!0)};e.patch(p,E),c.push(E)}if(c.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:o,properties:{...a0(s),id:"footnote-label"},children:[{type:"text",value:l}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(c,!0)},{type:"text",value:`
`}]}}const Co=(function(e){if(e==null)return $w;if(typeof e=="function")return b0(e);if(typeof e=="object")return Array.isArray(e)?Fw(e):Ow(e);if(typeof e=="string")return Bw(e);throw new Error("Expected function, string, or object as test")});function Fw(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=Co(e[t]);return b0(i);function i(...l){let o=-1;for(;++o<n.length;)if(n[o].apply(this,l))return!0;return!1}}function Ow(e){const n=e;return b0(t);function t(i){const l=i;let o;for(o in e)if(l[o]!==n[o])return!1;return!0}}function Bw(e){return b0(n);function n(t){return t&&t.type===e}}function b0(e){return n;function n(t,i,l){return!!(Hw(t)&&e.call(this,t,typeof i=="number"?i:void 0,l||void 0))}}function $w(){return!0}function Hw(e){return e!==null&&typeof e=="object"&&"type"in e}const A2=[],qw=!0,u1=!1,P2="skip";function eh(e,n,t,i){let l;typeof n=="function"&&typeof t!="function"?(i=t,t=n):l=n;const o=Co(l),s=i?-1:1;c(e,void 0,[])();function c(h,p,f){const d=h&&typeof h=="object"?h:{};if(typeof d.type=="string"){const b=typeof d.tagName=="string"?d.tagName:typeof d.name=="string"?d.name:void 0;Object.defineProperty(w,"name",{value:"node ("+(h.type+(b?"<"+b+">":""))+")"})}return w;function w(){let b=A2,D,_,T;if((!n||o(h,p,f[f.length-1]||void 0))&&(b=Uw(t(h,f)),b[0]===u1))return b;if("children"in h&&h.children){const E=h;if(E.children&&b[0]!==P2)for(_=(i?E.children.length:-1)+s,T=f.concat(E);_>-1&&_<E.children.length;){const z=E.children[_];if(D=c(z,_,T)(),D[0]===u1)return D;_=typeof D[1]=="number"?D[1]:_+s}}return b}}}function Uw(e){return Array.isArray(e)?e:typeof e=="number"?[qw,e]:e==null?A2:[e]}function nh(e,n,t,i){let l,o,s;typeof n=="function"&&typeof t!="function"?(o=void 0,s=n,l=t):(o=n,s=t,l=i),eh(e,o,c,l);function c(h,p){const f=p[p.length-1],d=f?f.children.indexOf(h):void 0;return s(h,d,f)}}const c1={}.hasOwnProperty,Vw={};function Ww(e,n){const t=n||Vw,i=new Map,l=new Map,o=new Map,s={...Aw,...t.handlers},c={all:p,applyData:Xw,definitionById:i,footnoteById:l,footnoteCounts:o,footnoteOrder:[],handlers:s,one:h,options:t,patch:Gw,wrap:Qw};return nh(e,function(f){if(f.type==="definition"||f.type==="footnoteDefinition"){const d=f.type==="definition"?i:l,w=String(f.identifier).toUpperCase();d.has(w)||d.set(w,f)}}),c;function h(f,d){const w=f.type,b=c.handlers[w];if(c1.call(c.handlers,w)&&b)return b(c,f,d);if(c.options.passThrough&&c.options.passThrough.includes(w)){if("children"in f){const{children:_,...T}=f,E=a0(T);return E.children=c.all(f),E}return a0(f)}return(c.options.unknownHandler||Yw)(c,f,d)}function p(f){const d=[];if("children"in f){const w=f.children;let b=-1;for(;++b<w.length;){const D=c.one(w[b],f);if(D){if(b&&w[b-1].type==="break"&&(!Array.isArray(D)&&D.type==="text"&&(D.value=cf(D.value)),!Array.isArray(D)&&D.type==="element")){const _=D.children[0];_&&_.type==="text"&&(_.value=cf(_.value))}Array.isArray(D)?d.push(...D):d.push(D)}}}return d}}function Gw(e,n){e.position&&(n.position=I8(e))}function Xw(e,n){let t=n;if(e&&e.data){const i=e.data.hName,l=e.data.hChildren,o=e.data.hProperties;if(typeof i=="string")if(t.type==="element")t.tagName=i;else{const s="children"in t?t.children:[t];t={type:"element",tagName:i,properties:{},children:s}}t.type==="element"&&o&&Object.assign(t.properties,a0(o)),"children"in t&&t.children&&l!==null&&l!==void 0&&(t.children=l)}return t}function Yw(e,n){const t=n.data||{},i="value"in n&&!(c1.call(t,"hProperties")||c1.call(t,"hChildren"))?{type:"text",value:n.value}:{type:"element",tagName:"div",properties:{},children:e.all(n)};return e.patch(n,i),e.applyData(n,i)}function Qw(e,n){const t=[];let i=-1;for(n&&t.push({type:"text",value:`
`});++i<e.length;)i&&t.push({type:"text",value:`
`}),t.push(e[i]);return n&&e.length>0&&t.push({type:"text",value:`
`}),t}function cf(e){let n=0,t=e.charCodeAt(n);for(;t===9||t===32;)n++,t=e.charCodeAt(n);return e.slice(n)}function hf(e,n){const t=Ww(e,n),i=t.one(e,void 0),l=jw(t),o=Array.isArray(i)?{type:"root",children:i}:i||{type:"root",children:[]};return l&&o.children.push({type:"text",value:`
`},l),o}function Kw(e,n){return e&&"run"in e?async function(t,i){const l=hf(t,{file:i,...n});await e.run(l,i)}:function(t,i){return hf(t,{file:i,...e||n})}}function mf(e){if(e)throw e}var Cc,pf;function Zw(){if(pf)return Cc;pf=1;var e=Object.prototype.hasOwnProperty,n=Object.prototype.toString,t=Object.defineProperty,i=Object.getOwnPropertyDescriptor,l=function(p){return typeof Array.isArray=="function"?Array.isArray(p):n.call(p)==="[object Array]"},o=function(p){if(!p||n.call(p)!=="[object Object]")return!1;var f=e.call(p,"constructor"),d=p.constructor&&p.constructor.prototype&&e.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!f&&!d)return!1;var w;for(w in p);return typeof w>"u"||e.call(p,w)},s=function(p,f){t&&f.name==="__proto__"?t(p,f.name,{enumerable:!0,configurable:!0,value:f.newValue,writable:!0}):p[f.name]=f.newValue},c=function(p,f){if(f==="__proto__")if(e.call(p,f)){if(i)return i(p,f).value}else return;return p[f]};return Cc=function h(){var p,f,d,w,b,D,_=arguments[0],T=1,E=arguments.length,z=!1;for(typeof _=="boolean"&&(z=_,_=arguments[1]||{},T=2),(_==null||typeof _!="object"&&typeof _!="function")&&(_={});T<E;++T)if(p=arguments[T],p!=null)for(f in p)d=c(_,f),w=c(p,f),_!==w&&(z&&w&&(o(w)||(b=l(w)))?(b?(b=!1,D=d&&l(d)?d:[]):D=d&&o(d)?d:{},s(_,{name:f,newValue:h(z,D,w)})):typeof w<"u"&&s(_,{name:f,newValue:w}));return _},Cc}var ex=Zw();const _c=M1(ex);function h1(e){if(typeof e!="object"||e===null)return!1;const n=Object.getPrototypeOf(e);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function nx(){const e=[],n={run:t,use:i};return n;function t(...l){let o=-1;const s=l.pop();if(typeof s!="function")throw new TypeError("Expected function as last argument, not "+s);c(null,...l);function c(h,...p){const f=e[++o];let d=-1;if(h){s(h);return}for(;++d<l.length;)(p[d]===null||p[d]===void 0)&&(p[d]=l[d]);l=p,f?tx(f,c)(...p):s(null,...p)}}function i(l){if(typeof l!="function")throw new TypeError("Expected `middelware` to be a function, not "+l);return e.push(l),n}}function tx(e,n){let t;return i;function i(...s){const c=e.length>s.length;let h;c&&s.push(l);try{h=e.apply(this,s)}catch(p){const f=p;if(c&&t)throw f;return l(f)}c||(h&&h.then&&typeof h.then=="function"?h.then(o,l):h instanceof Error?l(h):o(h))}function l(s,...c){t||(t=!0,n(s,...c))}function o(s){l(null,s)}}const Ar={basename:rx,dirname:ix,extname:ax,join:lx,sep:"/"};function rx(e,n){if(n!==void 0&&typeof n!="string")throw new TypeError('"ext" argument must be a string');_o(e);let t=0,i=-1,l=e.length,o;if(n===void 0||n.length===0||n.length>e.length){for(;l--;)if(e.codePointAt(l)===47){if(o){t=l+1;break}}else i<0&&(o=!0,i=l+1);return i<0?"":e.slice(t,i)}if(n===e)return"";let s=-1,c=n.length-1;for(;l--;)if(e.codePointAt(l)===47){if(o){t=l+1;break}}else s<0&&(o=!0,s=l+1),c>-1&&(e.codePointAt(l)===n.codePointAt(c--)?c<0&&(i=l):(c=-1,i=s));return t===i?i=s:i<0&&(i=e.length),e.slice(t,i)}function ix(e){if(_o(e),e.length===0)return".";let n=-1,t=e.length,i;for(;--t;)if(e.codePointAt(t)===47){if(i){n=t;break}}else i||(i=!0);return n<0?e.codePointAt(0)===47?"/":".":n===1&&e.codePointAt(0)===47?"//":e.slice(0,n)}function ax(e){_o(e);let n=e.length,t=-1,i=0,l=-1,o=0,s;for(;n--;){const c=e.codePointAt(n);if(c===47){if(s){i=n+1;break}continue}t<0&&(s=!0,t=n+1),c===46?l<0?l=n:o!==1&&(o=1):l>-1&&(o=-1)}return l<0||t<0||o===0||o===1&&l===t-1&&l===i+1?"":e.slice(l,t)}function lx(...e){let n=-1,t;for(;++n<e.length;)_o(e[n]),e[n]&&(t=t===void 0?e[n]:t+"/"+e[n]);return t===void 0?".":ox(t)}function ox(e){_o(e);const n=e.codePointAt(0)===47;let t=sx(e,!n);return t.length===0&&!n&&(t="."),t.length>0&&e.codePointAt(e.length-1)===47&&(t+="/"),n?"/"+t:t}function sx(e,n){let t="",i=0,l=-1,o=0,s=-1,c,h;for(;++s<=e.length;){if(s<e.length)c=e.codePointAt(s);else{if(c===47)break;c=47}if(c===47){if(!(l===s-1||o===1))if(l!==s-1&&o===2){if(t.length<2||i!==2||t.codePointAt(t.length-1)!==46||t.codePointAt(t.length-2)!==46){if(t.length>2){if(h=t.lastIndexOf("/"),h!==t.length-1){h<0?(t="",i=0):(t=t.slice(0,h),i=t.length-1-t.lastIndexOf("/")),l=s,o=0;continue}}else if(t.length>0){t="",i=0,l=s,o=0;continue}}n&&(t=t.length>0?t+"/..":"..",i=2)}else t.length>0?t+="/"+e.slice(l+1,s):t=e.slice(l+1,s),i=s-l-1;l=s,o=0}else c===46&&o>-1?o++:o=-1}return t}function _o(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const ux={cwd:cx};function cx(){return"/"}function m1(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function hx(e){if(typeof e=="string")e=new URL(e);else if(!m1(e)){const n=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw n.code="ERR_INVALID_ARG_TYPE",n}if(e.protocol!=="file:"){const n=new TypeError("The URL must be of scheme file");throw n.code="ERR_INVALID_URL_SCHEME",n}return mx(e)}function mx(e){if(e.hostname!==""){const i=new TypeError('File URL host must be "localhost" or empty on darwin');throw i.code="ERR_INVALID_FILE_URL_HOST",i}const n=e.pathname;let t=-1;for(;++t<n.length;)if(n.codePointAt(t)===37&&n.codePointAt(t+1)===50){const i=n.codePointAt(t+2);if(i===70||i===102){const l=new TypeError("File URL path must not include encoded / characters");throw l.code="ERR_INVALID_FILE_URL_PATH",l}}return decodeURIComponent(n)}const Mc=["history","path","basename","stem","extname","dirname"];class N2{constructor(n){let t;n?m1(n)?t={path:n}:typeof n=="string"||px(n)?t={value:n}:t=n:t={},this.cwd="cwd"in t?"":ux.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let i=-1;for(;++i<Mc.length;){const o=Mc[i];o in t&&t[o]!==void 0&&t[o]!==null&&(this[o]=o==="history"?[...t[o]]:t[o])}let l;for(l in t)Mc.includes(l)||(this[l]=t[l])}get basename(){return typeof this.path=="string"?Ar.basename(this.path):void 0}set basename(n){Tc(n,"basename"),Ec(n,"basename"),this.path=Ar.join(this.dirname||"",n)}get dirname(){return typeof this.path=="string"?Ar.dirname(this.path):void 0}set dirname(n){df(this.basename,"dirname"),this.path=Ar.join(n||"",this.basename)}get extname(){return typeof this.path=="string"?Ar.extname(this.path):void 0}set extname(n){if(Ec(n,"extname"),df(this.dirname,"extname"),n){if(n.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(n.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=Ar.join(this.dirname,this.stem+(n||""))}get path(){return this.history[this.history.length-1]}set path(n){m1(n)&&(n=hx(n)),Tc(n,"path"),this.path!==n&&this.history.push(n)}get stem(){return typeof this.path=="string"?Ar.basename(this.path,this.extname):void 0}set stem(n){Tc(n,"stem"),Ec(n,"stem"),this.path=Ar.join(this.dirname||"",n+(this.extname||""))}fail(n,t,i){const l=this.message(n,t,i);throw l.fatal=!0,l}info(n,t,i){const l=this.message(n,t,i);return l.fatal=void 0,l}message(n,t,i){const l=new dt(n,t,i);return this.path&&(l.name=this.path+":"+l.name,l.file=this.path),l.fatal=!1,this.messages.push(l),l}toString(n){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(n||void 0).decode(this.value)}}function Ec(e,n){if(e&&e.includes(Ar.sep))throw new Error("`"+n+"` cannot be a path: did not expect `"+Ar.sep+"`")}function Tc(e,n){if(!e)throw new Error("`"+n+"` cannot be empty")}function df(e,n){if(!e)throw new Error("Setting `"+n+"` requires `path` to be set too")}function px(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const dx=(function(e){const i=this.constructor.prototype,l=i[e],o=function(){return l.apply(o,arguments)};return Object.setPrototypeOf(o,i),o}),fx={}.hasOwnProperty;class th extends dx{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=nx()}copy(){const n=new th;let t=-1;for(;++t<this.attachers.length;){const i=this.attachers[t];n.use(...i)}return n.data(_c(!0,{},this.namespace)),n}data(n,t){return typeof n=="string"?arguments.length===2?(Pc("data",this.frozen),this.namespace[n]=t,this):fx.call(this.namespace,n)&&this.namespace[n]||void 0:n?(Pc("data",this.frozen),this.namespace=n,this):this.namespace}freeze(){if(this.frozen)return this;const n=this;for(;++this.freezeIndex<this.attachers.length;){const[t,...i]=this.attachers[this.freezeIndex];if(i[0]===!1)continue;i[0]===!0&&(i[0]=void 0);const l=t.call(n,...i);typeof l=="function"&&this.transformers.use(l)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(n){this.freeze();const t=Fs(n),i=this.parser||this.Parser;return zc("parse",i),i(String(t),t)}process(n,t){const i=this;return this.freeze(),zc("process",this.parser||this.Parser),Ac("process",this.compiler||this.Compiler),t?l(void 0,t):new Promise(l);function l(o,s){const c=Fs(n),h=i.parse(c);i.run(h,c,function(f,d,w){if(f||!d||!w)return p(f);const b=d,D=i.stringify(b,w);yx(D)?w.value=D:w.result=D,p(f,w)});function p(f,d){f||!d?s(f):o?o(d):t(void 0,d)}}}processSync(n){let t=!1,i;return this.freeze(),zc("processSync",this.parser||this.Parser),Ac("processSync",this.compiler||this.Compiler),this.process(n,l),gf("processSync","process",t),i;function l(o,s){t=!0,mf(o),i=s}}run(n,t,i){ff(n),this.freeze();const l=this.transformers;return!i&&typeof t=="function"&&(i=t,t=void 0),i?o(void 0,i):new Promise(o);function o(s,c){const h=Fs(t);l.run(n,h,p);function p(f,d,w){const b=d||n;f?c(f):s?s(b):i(void 0,b,w)}}}runSync(n,t){let i=!1,l;return this.run(n,t,o),gf("runSync","run",i),l;function o(s,c){mf(s),l=c,i=!0}}stringify(n,t){this.freeze();const i=Fs(t),l=this.compiler||this.Compiler;return Ac("stringify",l),ff(n),l(n,i)}use(n,...t){const i=this.attachers,l=this.namespace;if(Pc("use",this.frozen),n!=null)if(typeof n=="function")h(n,t);else if(typeof n=="object")Array.isArray(n)?c(n):s(n);else throw new TypeError("Expected usable value, not `"+n+"`");return this;function o(p){if(typeof p=="function")h(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[f,...d]=p;h(f,d)}else s(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function s(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");c(p.plugins),p.settings&&(l.settings=_c(!0,l.settings,p.settings))}function c(p){let f=-1;if(p!=null)if(Array.isArray(p))for(;++f<p.length;){const d=p[f];o(d)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function h(p,f){let d=-1,w=-1;for(;++d<i.length;)if(i[d][0]===p){w=d;break}if(w===-1)i.push([p,...f]);else if(f.length>0){let[b,...D]=f;const _=i[w][1];h1(_)&&h1(b)&&(b=_c(!0,_,b)),i[w]=[p,b,...D]}}}}const gx=new th().freeze();function zc(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function Ac(e,n){if(typeof n!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function Pc(e,n){if(n)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function ff(e){if(!h1(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function gf(e,n,t){if(!t)throw new Error("`"+e+"` finished async. Use `"+n+"` instead")}function Fs(e){return vx(e)?e:new N2(e)}function vx(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function yx(e){return typeof e=="string"||bx(e)}function bx(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const wx="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",vf=[],yf={allowDangerousHtml:!0},xx=/^(https?|ircs?|mailto|xmpp)$/i,kx=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function L2(e){const n=Sx(e),t=Dx(e);return Cx(n.runSync(n.parse(t),t),e)}function Sx(e){const n=e.rehypePlugins||vf,t=e.remarkPlugins||vf,i=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...yf}:yf;return gx().use(aw).use(t).use(Kw,i).use(n)}function Dx(e){const n=e.children||"",t=new N2;return typeof n=="string"&&(t.value=n),t}function Cx(e,n){const t=n.allowedElements,i=n.allowElement,l=n.components,o=n.disallowedElements,s=n.skipHtml,c=n.unwrapDisallowed,h=n.urlTransform||_x;for(const f of kx)Object.hasOwn(n,f.from)&&(""+f.from+(f.to?"use `"+f.to+"` instead":"remove it")+wx+f.id,void 0);return nh(e,p),$8(e,{Fragment:R.Fragment,components:l,ignoreInvalidStyle:!0,jsx:R.jsx,jsxs:R.jsxs,passKeys:!0,passNode:!0});function p(f,d,w){if(f.type==="raw"&&w&&typeof d=="number")return s?w.children.splice(d,1):w.children[d]={type:"text",value:f.value},d;if(f.type==="element"){let b;for(b in kc)if(Object.hasOwn(kc,b)&&Object.hasOwn(f.properties,b)){const D=f.properties[b],_=kc[b];(_===null||_.includes(f.tagName))&&(f.properties[b]=h(String(D||""),b,f))}}if(f.type==="element"){let b=t?!t.includes(f.tagName):o?o.includes(f.tagName):!1;if(!b&&i&&typeof d=="number"&&(b=!i(f,d,w)),b&&w&&typeof d=="number")return c&&f.children?w.children.splice(d,1,...f.children):w.children.splice(d,1),d}}}function _x(e){const n=e.indexOf(":"),t=e.indexOf("?"),i=e.indexOf("#"),l=e.indexOf("/");return n===-1||l!==-1&&n>l||t!==-1&&n>t||i!==-1&&n>i||xx.test(e.slice(0,n))?e:""}function bf(e,n){const t=String(e);if(typeof n!="string")throw new TypeError("Expected character");let i=0,l=t.indexOf(n);for(;l!==-1;)i++,l=t.indexOf(n,l+n.length);return i}function Mx(e){if(typeof e!="string")throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function Ex(e,n,t){const l=Co((t||{}).ignore||[]),o=Tx(n);let s=-1;for(;++s<o.length;)eh(e,"text",c);function c(p,f){let d=-1,w;for(;++d<f.length;){const b=f[d],D=w?w.children:void 0;if(l(b,D?D.indexOf(b):void 0,w))return;w=b}if(w)return h(p,f)}function h(p,f){const d=f[f.length-1],w=o[s][0],b=o[s][1];let D=0;const T=d.children.indexOf(p);let E=!1,z=[];w.lastIndex=0;let O=w.exec(p.value);for(;O;){const ne=O.index,K={index:O.index,input:O.input,stack:[...f,p]};let H=b(...O,K);if(typeof H=="string"&&(H=H.length>0?{type:"text",value:H}:void 0),H===!1?w.lastIndex=ne+1:(D!==ne&&z.push({type:"text",value:p.value.slice(D,ne)}),Array.isArray(H)?z.push(...H):H&&z.push(H),D=ne+O[0].length,E=!0),!w.global)break;O=w.exec(p.value)}return E?(D<p.value.length&&z.push({type:"text",value:p.value.slice(D)}),d.children.splice(T,1,...z)):z=[p],T+z.length}}function Tx(e){const n=[];if(!Array.isArray(e))throw new TypeError("Expected find and replace tuple or list of tuples");const t=!e[0]||Array.isArray(e[0])?e:[e];let i=-1;for(;++i<t.length;){const l=t[i];n.push([zx(l[0]),Ax(l[1])])}return n}function zx(e){return typeof e=="string"?new RegExp(Mx(e),"g"):e}function Ax(e){return typeof e=="function"?e:function(){return e}}const Nc="phrasing",Lc=["autolink","link","image","label"];function Px(){return{transforms:[Fx],enter:{literalAutolink:Lx,literalAutolinkEmail:Jc,literalAutolinkHttp:Jc,literalAutolinkWww:Jc},exit:{literalAutolink:jx,literalAutolinkEmail:Ix,literalAutolinkHttp:Jx,literalAutolinkWww:Rx}}}function Nx(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Nc,notInConstruct:Lc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Nc,notInConstruct:Lc},{character:":",before:"[ps]",after:"\\/",inConstruct:Nc,notInConstruct:Lc}]}}function Lx(e){this.enter({type:"link",title:null,url:"",children:[]},e)}function Jc(e){this.config.enter.autolinkProtocol.call(this,e)}function Jx(e){this.config.exit.autolinkProtocol.call(this,e)}function Rx(e){this.config.exit.data.call(this,e);const n=this.stack[this.stack.length-1];n.type,n.url="http://"+this.sliceSerialize(e)}function Ix(e){this.config.exit.autolinkEmail.call(this,e)}function jx(e){this.exit(e)}function Fx(e){Ex(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,Ox],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Bx]],{ignore:["link","linkReference"]})}function Ox(e,n,t,i,l){let o="";if(!J2(l)||(/^w/i.test(n)&&(t=n+t,n="",o="http://"),!$x(t)))return!1;const s=Hx(t+i);if(!s[0])return!1;const c={type:"link",title:null,url:o+n+s[0],children:[{type:"text",value:n+s[0]}]};return s[1]?[c,{type:"text",value:s[1]}]:c}function Bx(e,n,t,i){return!J2(i,!0)||/[-\d_]$/.test(t)?!1:{type:"link",title:null,url:"mailto:"+n+"@"+t,children:[{type:"text",value:n+"@"+t}]}}function $x(e){const n=e.split(".");return!(n.length<2||n[n.length-1]&&(/_/.test(n[n.length-1])||!/[a-zA-Z\d]/.test(n[n.length-1]))||n[n.length-2]&&(/_/.test(n[n.length-2])||!/[a-zA-Z\d]/.test(n[n.length-2])))}function Hx(e){const n=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!n)return[e,void 0];e=e.slice(0,n.index);let t=n[0],i=t.indexOf(")");const l=bf(e,"(");let o=bf(e,")");for(;i!==-1&&l>o;)e+=t.slice(0,i+1),t=t.slice(i+1),i=t.indexOf(")"),o++;return[e,t]}function J2(e,n){const t=e.input.charCodeAt(e.index-1);return(e.index===0||ga(t)||g0(t))&&(!n||t!==47)}R2.peek=Kx;function qx(){this.buffer()}function Ux(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function Vx(){this.buffer()}function Wx(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function Gx(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=xr(this.sliceSerialize(e)).toLowerCase(),t.label=n}function Xx(e){this.exit(e)}function Yx(e){const n=this.resume(),t=this.stack[this.stack.length-1];t.type,t.identifier=xr(this.sliceSerialize(e)).toLowerCase(),t.label=n}function Qx(e){this.exit(e)}function Kx(){return"["}function R2(e,n,t,i){const l=t.createTracker(i);let o=l.move("[^");const s=t.enter("footnoteReference"),c=t.enter("reference");return o+=l.move(t.safe(t.associationId(e),{after:"]",before:o})),c(),s(),o+=l.move("]"),o}function Zx(){return{enter:{gfmFootnoteCallString:qx,gfmFootnoteCall:Ux,gfmFootnoteDefinitionLabelString:Vx,gfmFootnoteDefinition:Wx},exit:{gfmFootnoteCallString:Gx,gfmFootnoteCall:Xx,gfmFootnoteDefinitionLabelString:Yx,gfmFootnoteDefinition:Qx}}}function ek(e){let n=!1;return e&&e.firstLineBlank&&(n=!0),{handlers:{footnoteDefinition:t,footnoteReference:R2},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function t(i,l,o,s){const c=o.createTracker(s);let h=c.move("[^");const p=o.enter("footnoteDefinition"),f=o.enter("label");return h+=c.move(o.safe(o.associationId(i),{before:h,after:"]"})),f(),h+=c.move("]:"),i.children&&i.children.length>0&&(c.shift(4),h+=c.move((n?`
`:" ")+o.indentLines(o.containerFlow(i,c.current()),n?I2:nk))),p(),h}}function nk(e,n,t){return n===0?e:I2(e,n,t)}function I2(e,n,t){return(t?"":"    ")+e}const tk=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];j2.peek=ok;function rk(){return{canContainEols:["delete"],enter:{strikethrough:ak},exit:{strikethrough:lk}}}function ik(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:tk}],handlers:{delete:j2}}}function ak(e){this.enter({type:"delete",children:[]},e)}function lk(e){this.exit(e)}function j2(e,n,t,i){const l=t.createTracker(i),o=t.enter("strikethrough");let s=l.move("~~");return s+=t.containerPhrasing(e,{...l.current(),before:s,after:"~"}),s+=l.move("~~"),o(),s}function ok(){return"~"}function sk(e){return e.length}function uk(e,n){const t=n||{},i=(t.align||[]).concat(),l=t.stringLength||sk,o=[],s=[],c=[],h=[];let p=0,f=-1;for(;++f<e.length;){const _=[],T=[];let E=-1;for(e[f].length>p&&(p=e[f].length);++E<e[f].length;){const z=ck(e[f][E]);if(t.alignDelimiters!==!1){const O=l(z);T[E]=O,(h[E]===void 0||O>h[E])&&(h[E]=O)}_.push(z)}s[f]=_,c[f]=T}let d=-1;if(typeof i=="object"&&"length"in i)for(;++d<p;)o[d]=wf(i[d]);else{const _=wf(i);for(;++d<p;)o[d]=_}d=-1;const w=[],b=[];for(;++d<p;){const _=o[d];let T="",E="";_===99?(T=":",E=":"):_===108?T=":":_===114&&(E=":");let z=t.alignDelimiters===!1?1:Math.max(1,h[d]-T.length-E.length);const O=T+"-".repeat(z)+E;t.alignDelimiters!==!1&&(z=T.length+z+E.length,z>h[d]&&(h[d]=z),b[d]=z),w[d]=O}s.splice(1,0,w),c.splice(1,0,b),f=-1;const D=[];for(;++f<s.length;){const _=s[f],T=c[f];d=-1;const E=[];for(;++d<p;){const z=_[d]||"";let O="",ne="";if(t.alignDelimiters!==!1){const K=h[d]-(T[d]||0),H=o[d];H===114?O=" ".repeat(K):H===99?K%2?(O=" ".repeat(K/2+.5),ne=" ".repeat(K/2-.5)):(O=" ".repeat(K/2),ne=O):ne=" ".repeat(K)}t.delimiterStart!==!1&&!d&&E.push("|"),t.padding!==!1&&!(t.alignDelimiters===!1&&z==="")&&(t.delimiterStart!==!1||d)&&E.push(" "),t.alignDelimiters!==!1&&E.push(O),E.push(z),t.alignDelimiters!==!1&&E.push(ne),t.padding!==!1&&E.push(" "),(t.delimiterEnd!==!1||d!==p-1)&&E.push("|")}D.push(t.delimiterEnd===!1?E.join("").replace(/ +$/,""):E.join(""))}return D.join(`
`)}function ck(e){return e==null?"":String(e)}function wf(e){const n=typeof e=="string"?e.codePointAt(0):0;return n===67||n===99?99:n===76||n===108?108:n===82||n===114?114:0}function hk(e,n,t,i){const l=t.enter("blockquote"),o=t.createTracker(i);o.move("> "),o.shift(2);const s=t.indentLines(t.containerFlow(e,o.current()),mk);return l(),s}function mk(e,n,t){return">"+(t?"":" ")+e}function pk(e,n){return xf(e,n.inConstruct,!0)&&!xf(e,n.notInConstruct,!1)}function xf(e,n,t){if(typeof n=="string"&&(n=[n]),!n||n.length===0)return t;let i=-1;for(;++i<n.length;)if(e.includes(n[i]))return!0;return!1}function kf(e,n,t,i){let l=-1;for(;++l<t.unsafe.length;)if(t.unsafe[l].character===`
`&&pk(t.stack,t.unsafe[l]))return/[ \t]/.test(i.before)?"":" ";return`\\
`}function F2(e,n){const t=String(e);let i=t.indexOf(n),l=i,o=0,s=0;if(typeof n!="string")throw new TypeError("Expected substring");for(;i!==-1;)i===l?++o>s&&(s=o):o=1,l=i+n.length,i=t.indexOf(n,l);return s}function dk(e,n){return!!(n.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function fk(e){const n=e.options.fence||"`";if(n!=="`"&&n!=="~")throw new Error("Cannot serialize code with `"+n+"` for `options.fence`, expected `` ` `` or `~`");return n}function gk(e,n,t,i){const l=fk(t),o=e.value||"",s=l==="`"?"GraveAccent":"Tilde";if(dk(e,t)){const d=t.enter("codeIndented"),w=t.indentLines(o,vk);return d(),w}const c=t.createTracker(i),h=l.repeat(Math.max(F2(o,l)+1,3)),p=t.enter("codeFenced");let f=c.move(h);if(e.lang){const d=t.enter(`codeFencedLang${s}`);f+=c.move(t.safe(e.lang,{before:f,after:" ",encode:["`"],...c.current()})),d()}if(e.lang&&e.meta){const d=t.enter(`codeFencedMeta${s}`);f+=c.move(" "),f+=c.move(t.safe(e.meta,{before:f,after:`
`,encode:["`"],...c.current()})),d()}return f+=c.move(`
`),o&&(f+=c.move(o+`
`)),f+=c.move(h),p(),f}function vk(e,n,t){return(t?"":"    ")+e}function rh(e){const n=e.options.quote||'"';if(n!=='"'&&n!=="'")throw new Error("Cannot serialize title with `"+n+"` for `options.quote`, expected `\"`, or `'`");return n}function yk(e,n,t,i){const l=rh(t),o=l==='"'?"Quote":"Apostrophe",s=t.enter("definition");let c=t.enter("label");const h=t.createTracker(i);let p=h.move("[");return p+=h.move(t.safe(t.associationId(e),{before:p,after:"]",...h.current()})),p+=h.move("]: "),c(),!e.url||/[\0- \u007F]/.test(e.url)?(c=t.enter("destinationLiteral"),p+=h.move("<"),p+=h.move(t.safe(e.url,{before:p,after:">",...h.current()})),p+=h.move(">")):(c=t.enter("destinationRaw"),p+=h.move(t.safe(e.url,{before:p,after:e.title?" ":`
`,...h.current()}))),c(),e.title&&(c=t.enter(`title${o}`),p+=h.move(" "+l),p+=h.move(t.safe(e.title,{before:p,after:l,...h.current()})),p+=h.move(l),c()),s(),p}function bk(e){const n=e.options.emphasis||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize emphasis with `"+n+"` for `options.emphasis`, expected `*`, or `_`");return n}function fo(e){return"&#x"+e.toString(16).toUpperCase()+";"}function l0(e,n,t){const i=nl(e),l=nl(n);return i===void 0?l===void 0?t==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:l===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:i===1?l===void 0?{inside:!1,outside:!1}:l===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:l===void 0?{inside:!1,outside:!1}:l===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}O2.peek=wk;function O2(e,n,t,i){const l=bk(t),o=t.enter("emphasis"),s=t.createTracker(i),c=s.move(l);let h=s.move(t.containerPhrasing(e,{after:l,before:c,...s.current()}));const p=h.charCodeAt(0),f=l0(i.before.charCodeAt(i.before.length-1),p,l);f.inside&&(h=fo(p)+h.slice(1));const d=h.charCodeAt(h.length-1),w=l0(i.after.charCodeAt(0),d,l);w.inside&&(h=h.slice(0,-1)+fo(d));const b=s.move(l);return o(),t.attentionEncodeSurroundingInfo={after:w.outside,before:f.outside},c+h+b}function wk(e,n,t){return t.options.emphasis||"*"}function xk(e,n){let t=!1;return nh(e,function(i){if("value"in i&&/\r?\n|\r/.test(i.value)||i.type==="break")return t=!0,u1}),!!((!e.depth||e.depth<3)&&W1(e)&&(n.options.setext||t))}function kk(e,n,t,i){const l=Math.max(Math.min(6,e.depth||1),1),o=t.createTracker(i);if(xk(e,t)){const f=t.enter("headingSetext"),d=t.enter("phrasing"),w=t.containerPhrasing(e,{...o.current(),before:`
`,after:`
`});return d(),f(),w+`
`+(l===1?"=":"-").repeat(w.length-(Math.max(w.lastIndexOf("\r"),w.lastIndexOf(`
`))+1))}const s="#".repeat(l),c=t.enter("headingAtx"),h=t.enter("phrasing");o.move(s+" ");let p=t.containerPhrasing(e,{before:"# ",after:`
`,...o.current()});return/^[\t ]/.test(p)&&(p=fo(p.charCodeAt(0))+p.slice(1)),p=p?s+" "+p:s,t.options.closeAtx&&(p+=" "+s),h(),c(),p}B2.peek=Sk;function B2(e){return e.value||""}function Sk(){return"<"}$2.peek=Dk;function $2(e,n,t,i){const l=rh(t),o=l==='"'?"Quote":"Apostrophe",s=t.enter("image");let c=t.enter("label");const h=t.createTracker(i);let p=h.move("![");return p+=h.move(t.safe(e.alt,{before:p,after:"]",...h.current()})),p+=h.move("]("),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=t.enter("destinationLiteral"),p+=h.move("<"),p+=h.move(t.safe(e.url,{before:p,after:">",...h.current()})),p+=h.move(">")):(c=t.enter("destinationRaw"),p+=h.move(t.safe(e.url,{before:p,after:e.title?" ":")",...h.current()}))),c(),e.title&&(c=t.enter(`title${o}`),p+=h.move(" "+l),p+=h.move(t.safe(e.title,{before:p,after:l,...h.current()})),p+=h.move(l),c()),p+=h.move(")"),s(),p}function Dk(){return"!"}H2.peek=Ck;function H2(e,n,t,i){const l=e.referenceType,o=t.enter("imageReference");let s=t.enter("label");const c=t.createTracker(i);let h=c.move("![");const p=t.safe(e.alt,{before:h,after:"]",...c.current()});h+=c.move(p+"]["),s();const f=t.stack;t.stack=[],s=t.enter("reference");const d=t.safe(t.associationId(e),{before:h,after:"]",...c.current()});return s(),t.stack=f,o(),l==="full"||!p||p!==d?h+=c.move(d+"]"):l==="shortcut"?h=h.slice(0,-1):h+=c.move("]"),h}function Ck(){return"!"}q2.peek=_k;function q2(e,n,t){let i=e.value||"",l="`",o=-1;for(;new RegExp("(^|[^`])"+l+"([^`]|$)").test(i);)l+="`";for(/[^ \r\n]/.test(i)&&(/^[ \r\n]/.test(i)&&/[ \r\n]$/.test(i)||/^`|`$/.test(i))&&(i=" "+i+" ");++o<t.unsafe.length;){const s=t.unsafe[o],c=t.compilePattern(s);let h;if(s.atBreak)for(;h=c.exec(i);){let p=h.index;i.charCodeAt(p)===10&&i.charCodeAt(p-1)===13&&p--,i=i.slice(0,p)+" "+i.slice(h.index+1)}}return l+i+l}function _k(){return"`"}function U2(e,n){const t=W1(e);return!!(!n.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type==="text"&&(t===e.url||"mailto:"+t===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}V2.peek=Mk;function V2(e,n,t,i){const l=rh(t),o=l==='"'?"Quote":"Apostrophe",s=t.createTracker(i);let c,h;if(U2(e,t)){const f=t.stack;t.stack=[],c=t.enter("autolink");let d=s.move("<");return d+=s.move(t.containerPhrasing(e,{before:d,after:">",...s.current()})),d+=s.move(">"),c(),t.stack=f,d}c=t.enter("link"),h=t.enter("label");let p=s.move("[");return p+=s.move(t.containerPhrasing(e,{before:p,after:"](",...s.current()})),p+=s.move("]("),h(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(h=t.enter("destinationLiteral"),p+=s.move("<"),p+=s.move(t.safe(e.url,{before:p,after:">",...s.current()})),p+=s.move(">")):(h=t.enter("destinationRaw"),p+=s.move(t.safe(e.url,{before:p,after:e.title?" ":")",...s.current()}))),h(),e.title&&(h=t.enter(`title${o}`),p+=s.move(" "+l),p+=s.move(t.safe(e.title,{before:p,after:l,...s.current()})),p+=s.move(l),h()),p+=s.move(")"),c(),p}function Mk(e,n,t){return U2(e,t)?"<":"["}W2.peek=Ek;function W2(e,n,t,i){const l=e.referenceType,o=t.enter("linkReference");let s=t.enter("label");const c=t.createTracker(i);let h=c.move("[");const p=t.containerPhrasing(e,{before:h,after:"]",...c.current()});h+=c.move(p+"]["),s();const f=t.stack;t.stack=[],s=t.enter("reference");const d=t.safe(t.associationId(e),{before:h,after:"]",...c.current()});return s(),t.stack=f,o(),l==="full"||!p||p!==d?h+=c.move(d+"]"):l==="shortcut"?h=h.slice(0,-1):h+=c.move("]"),h}function Ek(){return"["}function ih(e){const n=e.options.bullet||"*";if(n!=="*"&&n!=="+"&&n!=="-")throw new Error("Cannot serialize items with `"+n+"` for `options.bullet`, expected `*`, `+`, or `-`");return n}function Tk(e){const n=ih(e),t=e.options.bulletOther;if(!t)return n==="*"?"-":"*";if(t!=="*"&&t!=="+"&&t!=="-")throw new Error("Cannot serialize items with `"+t+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(t===n)throw new Error("Expected `bullet` (`"+n+"`) and `bulletOther` (`"+t+"`) to be different");return t}function zk(e){const n=e.options.bulletOrdered||".";if(n!=="."&&n!==")")throw new Error("Cannot serialize items with `"+n+"` for `options.bulletOrdered`, expected `.` or `)`");return n}function G2(e){const n=e.options.rule||"*";if(n!=="*"&&n!=="-"&&n!=="_")throw new Error("Cannot serialize rules with `"+n+"` for `options.rule`, expected `*`, `-`, or `_`");return n}function Ak(e,n,t,i){const l=t.enter("list"),o=t.bulletCurrent;let s=e.ordered?zk(t):ih(t);const c=e.ordered?s==="."?")":".":Tk(t);let h=n&&t.bulletLastUsed?s===t.bulletLastUsed:!1;if(!e.ordered){const f=e.children?e.children[0]:void 0;if((s==="*"||s==="-")&&f&&(!f.children||!f.children[0])&&t.stack[t.stack.length-1]==="list"&&t.stack[t.stack.length-2]==="listItem"&&t.stack[t.stack.length-3]==="list"&&t.stack[t.stack.length-4]==="listItem"&&t.indexStack[t.indexStack.length-1]===0&&t.indexStack[t.indexStack.length-2]===0&&t.indexStack[t.indexStack.length-3]===0&&(h=!0),G2(t)===s&&f){let d=-1;for(;++d<e.children.length;){const w=e.children[d];if(w&&w.type==="listItem"&&w.children&&w.children[0]&&w.children[0].type==="thematicBreak"){h=!0;break}}}}h&&(s=c),t.bulletCurrent=s;const p=t.containerFlow(e,i);return t.bulletLastUsed=s,t.bulletCurrent=o,l(),p}function Pk(e){const n=e.options.listItemIndent||"one";if(n!=="tab"&&n!=="one"&&n!=="mixed")throw new Error("Cannot serialize items with `"+n+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return n}function Nk(e,n,t,i){const l=Pk(t);let o=t.bulletCurrent||ih(t);n&&n.type==="list"&&n.ordered&&(o=(typeof n.start=="number"&&n.start>-1?n.start:1)+(t.options.incrementListMarker===!1?0:n.children.indexOf(e))+o);let s=o.length+1;(l==="tab"||l==="mixed"&&(n&&n.type==="list"&&n.spread||e.spread))&&(s=Math.ceil(s/4)*4);const c=t.createTracker(i);c.move(o+" ".repeat(s-o.length)),c.shift(s);const h=t.enter("listItem"),p=t.indentLines(t.containerFlow(e,c.current()),f);return h(),p;function f(d,w,b){return w?(b?"":" ".repeat(s))+d:(b?o:o+" ".repeat(s-o.length))+d}}function Lk(e,n,t,i){const l=t.enter("paragraph"),o=t.enter("phrasing"),s=t.containerPhrasing(e,i);return o(),l(),s}const Jk=Co(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function Rk(e,n,t,i){return(e.children.some(function(s){return Jk(s)})?t.containerPhrasing:t.containerFlow).call(t,e,i)}function Ik(e){const n=e.options.strong||"*";if(n!=="*"&&n!=="_")throw new Error("Cannot serialize strong with `"+n+"` for `options.strong`, expected `*`, or `_`");return n}X2.peek=jk;function X2(e,n,t,i){const l=Ik(t),o=t.enter("strong"),s=t.createTracker(i),c=s.move(l+l);let h=s.move(t.containerPhrasing(e,{after:l,before:c,...s.current()}));const p=h.charCodeAt(0),f=l0(i.before.charCodeAt(i.before.length-1),p,l);f.inside&&(h=fo(p)+h.slice(1));const d=h.charCodeAt(h.length-1),w=l0(i.after.charCodeAt(0),d,l);w.inside&&(h=h.slice(0,-1)+fo(d));const b=s.move(l+l);return o(),t.attentionEncodeSurroundingInfo={after:w.outside,before:f.outside},c+h+b}function jk(e,n,t){return t.options.strong||"*"}function Fk(e,n,t,i){return t.safe(e.value,i)}function Ok(e){const n=e.options.ruleRepetition||3;if(n<3)throw new Error("Cannot serialize rules with repetition `"+n+"` for `options.ruleRepetition`, expected `3` or more");return n}function Bk(e,n,t){const i=(G2(t)+(t.options.ruleSpaces?" ":"")).repeat(Ok(t));return t.options.ruleSpaces?i.slice(0,-1):i}const Y2={blockquote:hk,break:kf,code:gk,definition:yk,emphasis:O2,hardBreak:kf,heading:kk,html:B2,image:$2,imageReference:H2,inlineCode:q2,link:V2,linkReference:W2,list:Ak,listItem:Nk,paragraph:Lk,root:Rk,strong:X2,text:Fk,thematicBreak:Bk};function $k(){return{enter:{table:Hk,tableData:Sf,tableHeader:Sf,tableRow:Uk},exit:{codeText:Vk,table:qk,tableData:Rc,tableHeader:Rc,tableRow:Rc}}}function Hk(e){const n=e._align;this.enter({type:"table",align:n.map(function(t){return t==="none"?null:t}),children:[]},e),this.data.inTable=!0}function qk(e){this.exit(e),this.data.inTable=void 0}function Uk(e){this.enter({type:"tableRow",children:[]},e)}function Rc(e){this.exit(e)}function Sf(e){this.enter({type:"tableCell",children:[]},e)}function Vk(e){let n=this.resume();this.data.inTable&&(n=n.replace(/\\([\\|])/g,Wk));const t=this.stack[this.stack.length-1];t.type,t.value=n,this.exit(e)}function Wk(e,n){return n==="|"?n:e}function Gk(e){const n=e||{},t=n.tableCellPadding,i=n.tablePipeAlign,l=n.stringLength,o=t?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:w,table:s,tableCell:h,tableRow:c}};function s(b,D,_,T){return p(f(b,_,T),b.align)}function c(b,D,_,T){const E=d(b,_,T),z=p([E]);return z.slice(0,z.indexOf(`
`))}function h(b,D,_,T){const E=_.enter("tableCell"),z=_.enter("phrasing"),O=_.containerPhrasing(b,{...T,before:o,after:o});return z(),E(),O}function p(b,D){return uk(b,{align:D,alignDelimiters:i,padding:t,stringLength:l})}function f(b,D,_){const T=b.children;let E=-1;const z=[],O=D.enter("table");for(;++E<T.length;)z[E]=d(T[E],D,_);return O(),z}function d(b,D,_){const T=b.children;let E=-1;const z=[],O=D.enter("tableRow");for(;++E<T.length;)z[E]=h(T[E],b,D,_);return O(),z}function w(b,D,_){let T=Y2.inlineCode(b,D,_);return _.stack.includes("tableCell")&&(T=T.replace(/\|/g,"\\$&")),T}}function Xk(){return{exit:{taskListCheckValueChecked:Df,taskListCheckValueUnchecked:Df,paragraph:Qk}}}function Yk(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:Kk}}}function Df(e){const n=this.stack[this.stack.length-2];n.type,n.checked=e.type==="taskListCheckValueChecked"}function Qk(e){const n=this.stack[this.stack.length-2];if(n&&n.type==="listItem"&&typeof n.checked=="boolean"){const t=this.stack[this.stack.length-1];t.type;const i=t.children[0];if(i&&i.type==="text"){const l=n.children;let o=-1,s;for(;++o<l.length;){const c=l[o];if(c.type==="paragraph"){s=c;break}}s===t&&(i.value=i.value.slice(1),i.value.length===0?t.children.shift():t.position&&i.position&&typeof i.position.start.offset=="number"&&(i.position.start.column++,i.position.start.offset++,t.position.start=Object.assign({},i.position.start)))}}this.exit(e)}function Kk(e,n,t,i){const l=e.children[0],o=typeof e.checked=="boolean"&&l&&l.type==="paragraph",s="["+(e.checked?"x":" ")+"] ",c=t.createTracker(i);o&&c.move(s);let h=Y2.listItem(e,n,t,{...i,...c.current()});return o&&(h=h.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),h;function p(f){return f+s}}function Zk(){return[Px(),Zx(),rk(),$k(),Xk()]}function eS(e){return{extensions:[Nx(),ek(e),ik(),Gk(e),Yk()]}}const nS={tokenize:oS,partial:!0},Q2={tokenize:sS,partial:!0},K2={tokenize:uS,partial:!0},Z2={tokenize:cS,partial:!0},tS={tokenize:hS,partial:!0},e4={name:"wwwAutolink",tokenize:aS,previous:t4},n4={name:"protocolAutolink",tokenize:lS,previous:r4},li={name:"emailAutolink",tokenize:iS,previous:i4},Ir={};function rS(){return{text:Ir}}let ma=48;for(;ma<123;)Ir[ma]=li,ma++,ma===58?ma=65:ma===91&&(ma=97);Ir[43]=li;Ir[45]=li;Ir[46]=li;Ir[95]=li;Ir[72]=[li,n4];Ir[104]=[li,n4];Ir[87]=[li,e4];Ir[119]=[li,e4];function iS(e,n,t){const i=this;let l,o;return s;function s(d){return!p1(d)||!i4.call(i,i.previous)||ah(i.events)?t(d):(e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),c(d))}function c(d){return p1(d)?(e.consume(d),c):d===64?(e.consume(d),h):t(d)}function h(d){return d===46?e.check(tS,f,p)(d):d===45||d===95||mt(d)?(o=!0,e.consume(d),h):f(d)}function p(d){return e.consume(d),l=!0,h}function f(d){return o&&l&&St(i.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),n(d)):t(d)}}function aS(e,n,t){const i=this;return l;function l(s){return s!==87&&s!==119||!t4.call(i,i.previous)||ah(i.events)?t(s):(e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(nS,e.attempt(Q2,e.attempt(K2,o),t),t)(s))}function o(s){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),n(s)}}function lS(e,n,t){const i=this;let l="",o=!1;return s;function s(d){return(d===72||d===104)&&r4.call(i,i.previous)&&!ah(i.events)?(e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),l+=String.fromCodePoint(d),e.consume(d),c):t(d)}function c(d){if(St(d)&&l.length<5)return l+=String.fromCodePoint(d),e.consume(d),c;if(d===58){const w=l.toLowerCase();if(w==="http"||w==="https")return e.consume(d),h}return t(d)}function h(d){return d===47?(e.consume(d),o?p:(o=!0,h)):t(d)}function p(d){return d===null||r0(d)||wn(d)||ga(d)||g0(d)?t(d):e.attempt(Q2,e.attempt(K2,f),t)(d)}function f(d){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),n(d)}}function oS(e,n,t){let i=0;return l;function l(s){return(s===87||s===119)&&i<3?(i++,e.consume(s),l):s===46&&i===3?(e.consume(s),o):t(s)}function o(s){return s===null?t(s):n(s)}}function sS(e,n,t){let i,l,o;return s;function s(p){return p===46||p===95?e.check(Z2,h,c)(p):p===null||wn(p)||ga(p)||p!==45&&g0(p)?h(p):(o=!0,e.consume(p),s)}function c(p){return p===95?i=!0:(l=i,i=void 0),e.consume(p),s}function h(p){return l||i||!o?t(p):n(p)}}function uS(e,n){let t=0,i=0;return l;function l(s){return s===40?(t++,e.consume(s),l):s===41&&i<t?o(s):s===33||s===34||s===38||s===39||s===41||s===42||s===44||s===46||s===58||s===59||s===60||s===63||s===93||s===95||s===126?e.check(Z2,n,o)(s):s===null||wn(s)||ga(s)?n(s):(e.consume(s),l)}function o(s){return s===41&&i++,e.consume(s),l}}function cS(e,n,t){return i;function i(c){return c===33||c===34||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===63||c===95||c===126?(e.consume(c),i):c===38?(e.consume(c),o):c===93?(e.consume(c),l):c===60||c===null||wn(c)||ga(c)?n(c):t(c)}function l(c){return c===null||c===40||c===91||wn(c)||ga(c)?n(c):i(c)}function o(c){return St(c)?s(c):t(c)}function s(c){return c===59?(e.consume(c),i):St(c)?(e.consume(c),s):t(c)}}function hS(e,n,t){return i;function i(o){return e.consume(o),l}function l(o){return mt(o)?t(o):n(o)}}function t4(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||wn(e)}function r4(e){return!St(e)}function i4(e){return!(e===47||p1(e))}function p1(e){return e===43||e===45||e===46||e===95||mt(e)}function ah(e){let n=e.length,t=!1;for(;n--;){const i=e[n][1];if((i.type==="labelLink"||i.type==="labelImage")&&!i._balanced){t=!0;break}if(i._gfmAutolinkLiteralWalkedInto){t=!1;break}}return e.length>0&&!t&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),t}const mS={tokenize:wS,partial:!0};function pS(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:vS,continuation:{tokenize:yS},exit:bS}},text:{91:{name:"gfmFootnoteCall",tokenize:gS},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:dS,resolveTo:fS}}}}function dS(e,n,t){const i=this;let l=i.events.length;const o=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let s;for(;l--;){const h=i.events[l][1];if(h.type==="labelImage"){s=h;break}if(h.type==="gfmFootnoteCall"||h.type==="labelLink"||h.type==="label"||h.type==="image"||h.type==="link")break}return c;function c(h){if(!s||!s._balanced)return t(h);const p=xr(i.sliceSerialize({start:s.end,end:i.now()}));return p.codePointAt(0)!==94||!o.includes(p.slice(1))?t(h):(e.enter("gfmFootnoteCallLabelMarker"),e.consume(h),e.exit("gfmFootnoteCallLabelMarker"),n(h))}}function fS(e,n){let t=e.length;for(;t--;)if(e[t][1].type==="labelImage"&&e[t][0]==="enter"){e[t][1];break}e[t+1][1].type="data",e[t+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[t+3][1].start),end:Object.assign({},e[e.length-1][1].end)},l={type:"gfmFootnoteCallMarker",start:Object.assign({},e[t+3][1].end),end:Object.assign({},e[t+3][1].end)};l.end.column++,l.end.offset++,l.end._bufferIndex++;const o={type:"gfmFootnoteCallString",start:Object.assign({},l.end),end:Object.assign({},e[e.length-1][1].start)},s={type:"chunkString",contentType:"string",start:Object.assign({},o.start),end:Object.assign({},o.end)},c=[e[t+1],e[t+2],["enter",i,n],e[t+3],e[t+4],["enter",l,n],["exit",l,n],["enter",o,n],["enter",s,n],["exit",s,n],["exit",o,n],e[e.length-2],e[e.length-1],["exit",i,n]];return e.splice(t,e.length-t+1,...c),e}function gS(e,n,t){const i=this,l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o=0,s;return c;function c(d){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),h}function h(d){return d!==94?t(d):(e.enter("gfmFootnoteCallMarker"),e.consume(d),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",p)}function p(d){if(o>999||d===93&&!s||d===null||d===91||wn(d))return t(d);if(d===93){e.exit("chunkString");const w=e.exit("gfmFootnoteCallString");return l.includes(xr(i.sliceSerialize(w)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(d),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),n):t(d)}return wn(d)||(s=!0),o++,e.consume(d),d===92?f:p}function f(d){return d===91||d===92||d===93?(e.consume(d),o++,p):p(d)}}function vS(e,n,t){const i=this,l=i.parser.gfmFootnotes||(i.parser.gfmFootnotes=[]);let o,s=0,c;return h;function h(D){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(D),e.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(D){return D===94?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(D),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",f):t(D)}function f(D){if(s>999||D===93&&!c||D===null||D===91||wn(D))return t(D);if(D===93){e.exit("chunkString");const _=e.exit("gfmFootnoteDefinitionLabelString");return o=xr(i.sliceSerialize(_)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(D),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),w}return wn(D)||(c=!0),s++,e.consume(D),D===92?d:f}function d(D){return D===91||D===92||D===93?(e.consume(D),s++,f):f(D)}function w(D){return D===58?(e.enter("definitionMarker"),e.consume(D),e.exit("definitionMarker"),l.includes(o)||l.push(o),ln(e,b,"gfmFootnoteDefinitionWhitespace")):t(D)}function b(D){return n(D)}}function yS(e,n,t){return e.check(Do,n,e.attempt(mS,n,t))}function bS(e){e.exit("gfmFootnoteDefinition")}function wS(e,n,t){const i=this;return ln(e,l,"gfmFootnoteDefinitionIndent",5);function l(o){const s=i.events[i.events.length-1];return s&&s[1].type==="gfmFootnoteDefinitionIndent"&&s[2].sliceSerialize(s[1],!0).length===4?n(o):t(o)}}function xS(e){let t=(e||{}).singleTilde;const i={name:"strikethrough",tokenize:o,resolveAll:l};return t==null&&(t=!0),{text:{126:i},insideSpan:{null:[i]},attentionMarkers:{null:[126]}};function l(s,c){let h=-1;for(;++h<s.length;)if(s[h][0]==="enter"&&s[h][1].type==="strikethroughSequenceTemporary"&&s[h][1]._close){let p=h;for(;p--;)if(s[p][0]==="exit"&&s[p][1].type==="strikethroughSequenceTemporary"&&s[p][1]._open&&s[h][1].end.offset-s[h][1].start.offset===s[p][1].end.offset-s[p][1].start.offset){s[h][1].type="strikethroughSequence",s[p][1].type="strikethroughSequence";const f={type:"strikethrough",start:Object.assign({},s[p][1].start),end:Object.assign({},s[h][1].end)},d={type:"strikethroughText",start:Object.assign({},s[p][1].end),end:Object.assign({},s[h][1].start)},w=[["enter",f,c],["enter",s[p][1],c],["exit",s[p][1],c],["enter",d,c]],b=c.parser.constructs.insideSpan.null;b&&Xt(w,w.length,0,v0(b,s.slice(p+1,h),c)),Xt(w,w.length,0,[["exit",d,c],["enter",s[h][1],c],["exit",s[h][1],c],["exit",f,c]]),Xt(s,p-1,h-p+3,w),h=p+w.length-2;break}}for(h=-1;++h<s.length;)s[h][1].type==="strikethroughSequenceTemporary"&&(s[h][1].type="data");return s}function o(s,c,h){const p=this.previous,f=this.events;let d=0;return w;function w(D){return p===126&&f[f.length-1][1].type!=="characterEscape"?h(D):(s.enter("strikethroughSequenceTemporary"),b(D))}function b(D){const _=nl(p);if(D===126)return d>1?h(D):(s.consume(D),d++,b);if(d<2&&!t)return h(D);const T=s.exit("strikethroughSequenceTemporary"),E=nl(D);return T._open=!E||E===2&&!!_,T._close=!_||_===2&&!!E,c(D)}}}class kS{constructor(){this.map=[]}add(n,t,i){SS(this,n,t,i)}consume(n){if(this.map.sort(function(o,s){return o[0]-s[0]}),this.map.length===0)return;let t=this.map.length;const i=[];for(;t>0;)t-=1,i.push(n.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),n.length=this.map[t][0];i.push(n.slice()),n.length=0;let l=i.pop();for(;l;){for(const o of l)n.push(o);l=i.pop()}this.map.length=0}}function SS(e,n,t,i){let l=0;if(!(t===0&&i.length===0)){for(;l<e.map.length;){if(e.map[l][0]===n){e.map[l][1]+=t,e.map[l][2].push(...i);return}l+=1}e.map.push([n,t,i])}}function DS(e,n){let t=!1;const i=[];for(;n<e.length;){const l=e[n];if(t){if(l[0]==="enter")l[1].type==="tableContent"&&i.push(e[n+1][1].type==="tableDelimiterMarker"?"left":"none");else if(l[1].type==="tableContent"){if(e[n-1][1].type==="tableDelimiterMarker"){const o=i.length-1;i[o]=i[o]==="left"?"center":"right"}}else if(l[1].type==="tableDelimiterRow")break}else l[0]==="enter"&&l[1].type==="tableDelimiterRow"&&(t=!0);n+=1}return i}function CS(){return{flow:{null:{name:"table",tokenize:_S,resolveAll:MS}}}}function _S(e,n,t){const i=this;let l=0,o=0,s;return c;function c(U){let ie=i.events.length-1;for(;ie>-1;){const me=i.events[ie][1].type;if(me==="lineEnding"||me==="linePrefix")ie--;else break}const le=ie>-1?i.events[ie][1].type:null,Le=le==="tableHead"||le==="tableRow"?H:h;return Le===H&&i.parser.lazy[i.now().line]?t(U):Le(U)}function h(U){return e.enter("tableHead"),e.enter("tableRow"),p(U)}function p(U){return U===124||(s=!0,o+=1),f(U)}function f(U){return U===null?t(U):Oe(U)?o>1?(o=0,i.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(U),e.exit("lineEnding"),b):t(U):sn(U)?ln(e,f,"whitespace")(U):(o+=1,s&&(s=!1,l+=1),U===124?(e.enter("tableCellDivider"),e.consume(U),e.exit("tableCellDivider"),s=!0,f):(e.enter("data"),d(U)))}function d(U){return U===null||U===124||wn(U)?(e.exit("data"),f(U)):(e.consume(U),U===92?w:d)}function w(U){return U===92||U===124?(e.consume(U),d):d(U)}function b(U){return i.interrupt=!1,i.parser.lazy[i.now().line]?t(U):(e.enter("tableDelimiterRow"),s=!1,sn(U)?ln(e,D,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):D(U))}function D(U){return U===45||U===58?T(U):U===124?(s=!0,e.enter("tableCellDivider"),e.consume(U),e.exit("tableCellDivider"),_):K(U)}function _(U){return sn(U)?ln(e,T,"whitespace")(U):T(U)}function T(U){return U===58?(o+=1,s=!0,e.enter("tableDelimiterMarker"),e.consume(U),e.exit("tableDelimiterMarker"),E):U===45?(o+=1,E(U)):U===null||Oe(U)?ne(U):K(U)}function E(U){return U===45?(e.enter("tableDelimiterFiller"),z(U)):K(U)}function z(U){return U===45?(e.consume(U),z):U===58?(s=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(U),e.exit("tableDelimiterMarker"),O):(e.exit("tableDelimiterFiller"),O(U))}function O(U){return sn(U)?ln(e,ne,"whitespace")(U):ne(U)}function ne(U){return U===124?D(U):U===null||Oe(U)?!s||l!==o?K(U):(e.exit("tableDelimiterRow"),e.exit("tableHead"),n(U)):K(U)}function K(U){return t(U)}function H(U){return e.enter("tableRow"),I(U)}function I(U){return U===124?(e.enter("tableCellDivider"),e.consume(U),e.exit("tableCellDivider"),I):U===null||Oe(U)?(e.exit("tableRow"),n(U)):sn(U)?ln(e,I,"whitespace")(U):(e.enter("data"),re(U))}function re(U){return U===null||U===124||wn(U)?(e.exit("data"),I(U)):(e.consume(U),U===92?ee:re)}function ee(U){return U===92||U===124?(e.consume(U),re):re(U)}}function MS(e,n){let t=-1,i=!0,l=0,o=[0,0,0,0],s=[0,0,0,0],c=!1,h=0,p,f,d;const w=new kS;for(;++t<e.length;){const b=e[t],D=b[1];b[0]==="enter"?D.type==="tableHead"?(c=!1,h!==0&&(Cf(w,n,h,p,f),f=void 0,h=0),p={type:"table",start:Object.assign({},D.start),end:Object.assign({},D.end)},w.add(t,0,[["enter",p,n]])):D.type==="tableRow"||D.type==="tableDelimiterRow"?(i=!0,d=void 0,o=[0,0,0,0],s=[0,t+1,0,0],c&&(c=!1,f={type:"tableBody",start:Object.assign({},D.start),end:Object.assign({},D.end)},w.add(t,0,[["enter",f,n]])),l=D.type==="tableDelimiterRow"?2:f?3:1):l&&(D.type==="data"||D.type==="tableDelimiterMarker"||D.type==="tableDelimiterFiller")?(i=!1,s[2]===0&&(o[1]!==0&&(s[0]=s[1],d=Os(w,n,o,l,void 0,d),o=[0,0,0,0]),s[2]=t)):D.type==="tableCellDivider"&&(i?i=!1:(o[1]!==0&&(s[0]=s[1],d=Os(w,n,o,l,void 0,d)),o=s,s=[o[1],t,0,0])):D.type==="tableHead"?(c=!0,h=t):D.type==="tableRow"||D.type==="tableDelimiterRow"?(h=t,o[1]!==0?(s[0]=s[1],d=Os(w,n,o,l,t,d)):s[1]!==0&&(d=Os(w,n,s,l,t,d)),l=0):l&&(D.type==="data"||D.type==="tableDelimiterMarker"||D.type==="tableDelimiterFiller")&&(s[3]=t)}for(h!==0&&Cf(w,n,h,p,f),w.consume(n.events),t=-1;++t<n.events.length;){const b=n.events[t];b[0]==="enter"&&b[1].type==="table"&&(b[1]._align=DS(n.events,t))}return e}function Os(e,n,t,i,l,o){const s=i===1?"tableHeader":i===2?"tableDelimiter":"tableData",c="tableContent";t[0]!==0&&(o.end=Object.assign({},Ya(n.events,t[0])),e.add(t[0],0,[["exit",o,n]]));const h=Ya(n.events,t[1]);if(o={type:s,start:Object.assign({},h),end:Object.assign({},h)},e.add(t[1],0,[["enter",o,n]]),t[2]!==0){const p=Ya(n.events,t[2]),f=Ya(n.events,t[3]),d={type:c,start:Object.assign({},p),end:Object.assign({},f)};if(e.add(t[2],0,[["enter",d,n]]),i!==2){const w=n.events[t[2]],b=n.events[t[3]];if(w[1].end=Object.assign({},b[1].end),w[1].type="chunkText",w[1].contentType="text",t[3]>t[2]+1){const D=t[2]+1,_=t[3]-t[2]-1;e.add(D,_,[])}}e.add(t[3]+1,0,[["exit",d,n]])}return l!==void 0&&(o.end=Object.assign({},Ya(n.events,l)),e.add(l,0,[["exit",o,n]]),o=void 0),o}function Cf(e,n,t,i,l){const o=[],s=Ya(n.events,t);l&&(l.end=Object.assign({},s),o.push(["exit",l,n])),i.end=Object.assign({},s),o.push(["exit",i,n]),e.add(t+1,0,o)}function Ya(e,n){const t=e[n],i=t[0]==="enter"?"start":"end";return t[1][i]}const ES={name:"tasklistCheck",tokenize:zS};function TS(){return{text:{91:ES}}}function zS(e,n,t){const i=this;return l;function l(h){return i.previous!==null||!i._gfmTasklistFirstContentOfListItem?t(h):(e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(h),e.exit("taskListCheckMarker"),o)}function o(h){return wn(h)?(e.enter("taskListCheckValueUnchecked"),e.consume(h),e.exit("taskListCheckValueUnchecked"),s):h===88||h===120?(e.enter("taskListCheckValueChecked"),e.consume(h),e.exit("taskListCheckValueChecked"),s):t(h)}function s(h){return h===93?(e.enter("taskListCheckMarker"),e.consume(h),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),c):t(h)}function c(h){return Oe(h)?n(h):sn(h)?e.check({tokenize:AS},n,t)(h):t(h)}}function AS(e,n,t){return ln(e,i,"whitespace");function i(l){return l===null?t(l):n(l)}}function PS(e){return p2([rS(),pS(),xS(e),CS(),TS()])}const NS={};function a4(e){const n=this,t=e||NS,i=n.data(),l=i.micromarkExtensions||(i.micromarkExtensions=[]),o=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),s=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);l.push(PS(t)),o.push(Zk()),s.push(eS(t))}function LS(){const e=B1();return R.jsxs("div",{className:"min-h-screen bg-white text-black",children:[R.jsx("header",{className:"border-b-4 border-black",children:R.jsxs("div",{className:"max-w-4xl mx-auto px-6 py-6",children:[R.jsxs(ur,{to:"/",className:"inline-flex items-center gap-2 hover:opacity-60 transition-opacity mb-8",children:[R.jsx(d0,{className:"w-5 h-5"}),R.jsx("span",{className:"uppercase tracking-wider text-sm font-medium",children:"返回导航"})]}),R.jsxs("div",{className:"text-center mt-8",children:[R.jsx("h1",{className:"text-5xl font-bold uppercase tracking-tight mb-2",children:"博客"}),R.jsx("p",{className:"text-sm uppercase tracking-widest opacity-60",children:"Technical Writing & Thoughts"})]})]})}),R.jsx("main",{className:"max-w-4xl mx-auto px-6 py-12",children:R.jsx("div",{className:"space-y-8",children:e.map(n=>R.jsxs("article",{className:"border-2 border-black p-8 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",children:[R.jsxs("div",{className:"mb-4",children:[R.jsx(ur,{to:`/blog/${n.slug}`,children:R.jsx("h2",{className:"text-3xl font-bold uppercase tracking-tight mb-3 hover:opacity-60 transition-opacity",children:n.metadata.title})}),R.jsxs("div",{className:"flex flex-wrap items-center gap-4 text-sm opacity-60",children:[R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(Gg,{className:"w-4 h-4"}),R.jsx("time",{dateTime:n.metadata.date,children:new Date(n.metadata.date).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})})]}),n.metadata.tags&&n.metadata.tags.length>0&&R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(Xg,{className:"w-4 h-4"}),R.jsx("div",{className:"flex gap-2",children:n.metadata.tags.map(t=>R.jsx("span",{className:"border border-black px-2 py-0.5 text-xs uppercase",children:t},t))})]})]})]}),R.jsx("div",{className:"prose prose-lg mb-6 opacity-80 leading-relaxed",children:R.jsx(L2,{remarkPlugins:[a4],children:n.excerpt})}),R.jsx(ur,{to:`/blog/${n.slug}`,className:"inline-flex items-center gap-2 border-2 border-black px-6 py-2 hover:bg-black hover:text-white transition-colors uppercase tracking-wider text-sm font-bold",children:"阅读全文 →"})]},n.slug))})}),R.jsx("footer",{className:"border-t-2 border-black mt-12",children:R.jsx("div",{className:"max-w-4xl mx-auto px-6 py-8 text-center",children:R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"© 2026 技术博客"})})})]})}function JS(){return{enter:{mathFlow:e,mathFlowFenceMeta:n,mathText:o},exit:{mathFlow:l,mathFlowFence:i,mathFlowFenceMeta:t,mathFlowValue:c,mathText:s,mathTextData:c}};function e(h){const p={type:"element",tagName:"code",properties:{className:["language-math","math-display"]},children:[]};this.enter({type:"math",meta:null,value:"",data:{hName:"pre",hChildren:[p]}},h)}function n(){this.buffer()}function t(){const h=this.resume(),p=this.stack[this.stack.length-1];p.type,p.meta=h}function i(){this.data.mathFlowInside||(this.buffer(),this.data.mathFlowInside=!0)}function l(h){const p=this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),f=this.stack[this.stack.length-1];f.type,this.exit(h),f.value=p;const d=f.data.hChildren[0];d.type,d.tagName,d.children.push({type:"text",value:p}),this.data.mathFlowInside=void 0}function o(h){this.enter({type:"inlineMath",value:"",data:{hName:"code",hProperties:{className:["language-math","math-inline"]},hChildren:[]}},h),this.buffer()}function s(h){const p=this.resume(),f=this.stack[this.stack.length-1];f.type,this.exit(h),f.value=p,f.data.hChildren.push({type:"text",value:p})}function c(h){this.config.enter.data.call(this,h),this.config.exit.data.call(this,h)}}function RS(e){let n=(e||{}).singleDollarTextMath;return n==null&&(n=!0),i.peek=l,{unsafe:[{character:"\r",inConstruct:"mathFlowMeta"},{character:`
`,inConstruct:"mathFlowMeta"},{character:"$",after:n?void 0:"\\$",inConstruct:"phrasing"},{character:"$",inConstruct:"mathFlowMeta"},{atBreak:!0,character:"$",after:"\\$"}],handlers:{math:t,inlineMath:i}};function t(o,s,c,h){const p=o.value||"",f=c.createTracker(h),d="$".repeat(Math.max(F2(p,"$")+1,2)),w=c.enter("mathFlow");let b=f.move(d);if(o.meta){const D=c.enter("mathFlowMeta");b+=f.move(c.safe(o.meta,{after:`
`,before:b,encode:["$"],...f.current()})),D()}return b+=f.move(`
`),p&&(b+=f.move(p+`
`)),b+=f.move(d),w(),b}function i(o,s,c){let h=o.value||"",p=1;for(n||p++;new RegExp("(^|[^$])"+"\\$".repeat(p)+"([^$]|$)").test(h);)p++;const f="$".repeat(p);/[^ \r\n]/.test(h)&&(/^[ \r\n]/.test(h)&&/[ \r\n]$/.test(h)||/^\$|\$$/.test(h))&&(h=" "+h+" ");let d=-1;for(;++d<c.unsafe.length;){const w=c.unsafe[d];if(!w.atBreak)continue;const b=c.compilePattern(w);let D;for(;D=b.exec(h);){let _=D.index;h.codePointAt(_)===10&&h.codePointAt(_-1)===13&&_--,h=h.slice(0,_)+" "+h.slice(D.index+1)}}return f+h+f}function l(){return"$"}}const IS={tokenize:jS,concrete:!0,name:"mathFlow"},_f={tokenize:FS,partial:!0};function jS(e,n,t){const i=this,l=i.events[i.events.length-1],o=l&&l[1].type==="linePrefix"?l[2].sliceSerialize(l[1],!0).length:0;let s=0;return c;function c(z){return e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),h(z)}function h(z){return z===36?(e.consume(z),s++,h):s<2?t(z):(e.exit("mathFlowFenceSequence"),ln(e,p,"whitespace")(z))}function p(z){return z===null||Oe(z)?d(z):(e.enter("mathFlowFenceMeta"),e.enter("chunkString",{contentType:"string"}),f(z))}function f(z){return z===null||Oe(z)?(e.exit("chunkString"),e.exit("mathFlowFenceMeta"),d(z)):z===36?t(z):(e.consume(z),f)}function d(z){return e.exit("mathFlowFence"),i.interrupt?n(z):e.attempt(_f,w,T)(z)}function w(z){return e.attempt({tokenize:E,partial:!0},T,b)(z)}function b(z){return(o?ln(e,D,"linePrefix",o+1):D)(z)}function D(z){return z===null?T(z):Oe(z)?e.attempt(_f,w,T)(z):(e.enter("mathFlowValue"),_(z))}function _(z){return z===null||Oe(z)?(e.exit("mathFlowValue"),D(z)):(e.consume(z),_)}function T(z){return e.exit("mathFlow"),n(z)}function E(z,O,ne){let K=0;return ln(z,H,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4);function H(ee){return z.enter("mathFlowFence"),z.enter("mathFlowFenceSequence"),I(ee)}function I(ee){return ee===36?(K++,z.consume(ee),I):K<s?ne(ee):(z.exit("mathFlowFenceSequence"),ln(z,re,"whitespace")(ee))}function re(ee){return ee===null||Oe(ee)?(z.exit("mathFlowFence"),O(ee)):ne(ee)}}}function FS(e,n,t){const i=this;return l;function l(s){return s===null?n(s):(e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),o)}function o(s){return i.parser.lazy[i.now().line]?t(s):n(s)}}function OS(e){let t=(e||{}).singleDollarTextMath;return t==null&&(t=!0),{tokenize:i,resolve:BS,previous:$S,name:"mathText"};function i(l,o,s){let c=0,h,p;return f;function f(_){return l.enter("mathText"),l.enter("mathTextSequence"),d(_)}function d(_){return _===36?(l.consume(_),c++,d):c<2&&!t?s(_):(l.exit("mathTextSequence"),w(_))}function w(_){return _===null?s(_):_===36?(p=l.enter("mathTextSequence"),h=0,D(_)):_===32?(l.enter("space"),l.consume(_),l.exit("space"),w):Oe(_)?(l.enter("lineEnding"),l.consume(_),l.exit("lineEnding"),w):(l.enter("mathTextData"),b(_))}function b(_){return _===null||_===32||_===36||Oe(_)?(l.exit("mathTextData"),w(_)):(l.consume(_),b)}function D(_){return _===36?(l.consume(_),h++,D):h===c?(l.exit("mathTextSequence"),l.exit("mathText"),o(_)):(p.type="mathTextData",b(_))}}}function BS(e){let n=e.length-4,t=3,i,l;if((e[t][1].type==="lineEnding"||e[t][1].type==="space")&&(e[n][1].type==="lineEnding"||e[n][1].type==="space")){for(i=t;++i<n;)if(e[i][1].type==="mathTextData"){e[n][1].type="mathTextPadding",e[t][1].type="mathTextPadding",t+=2,n-=2;break}}for(i=t-1,n++;++i<=n;)l===void 0?i!==n&&e[i][1].type!=="lineEnding"&&(l=i):(i===n||e[i][1].type==="lineEnding")&&(e[l][1].type="mathTextData",i!==l+2&&(e[l][1].end=e[i-1][1].end,e.splice(l+2,i-l-2),n-=i-l-2,i=l+2),l=void 0);return e}function $S(e){return e!==36||this.events[this.events.length-1][1].type==="characterEscape"}function HS(e){return{flow:{36:IS},text:{36:OS(e)}}}class Rt{constructor(n,t,i){this.lexer=void 0,this.start=void 0,this.end=void 0,this.lexer=n,this.start=t,this.end=i}static range(n,t){return t?!n||!n.loc||!t.loc||n.loc.lexer!==t.loc.lexer?null:new Rt(n.loc.lexer,n.loc.start,t.loc.end):n&&n.loc}}class Yt{constructor(n,t){this.text=void 0,this.loc=void 0,this.noexpand=void 0,this.treatAsRelax=void 0,this.text=n,this.loc=t}range(n,t){return new Yt(t,Rt.range(this,n))}}class de{constructor(n,t){this.name=void 0,this.position=void 0,this.length=void 0,this.rawMessage=void 0;var i="KaTeX parse error: "+n,l,o,s=t&&t.loc;if(s&&s.start<=s.end){var c=s.lexer.input;l=s.start,o=s.end,l===c.length?i+=" at end of input: ":i+=" at position "+(l+1)+": ";var h=c.slice(l,o).replace(/[^]/g,"$&̲"),p;l>15?p="…"+c.slice(l-15,l):p=c.slice(0,l);var f;o+15<c.length?f=c.slice(o,o+15)+"…":f=c.slice(o),i+=p+h+f}var d=new Error(i);return d.name="ParseError",d.__proto__=de.prototype,d.position=l,l!=null&&o!=null&&(d.length=o-l),d.rawMessage=n,d}}de.prototype.__proto__=Error.prototype;var qS=/([A-Z])/g,lh=e=>e.replace(qS,"-$1").toLowerCase(),US={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},VS=/[&><"']/g,pt=e=>String(e).replace(VS,n=>US[n]),oo=e=>e.type==="ordgroup"||e.type==="color"?e.body.length===1?oo(e.body[0]):e:e.type==="font"?oo(e.body):e,WS=new Set(["mathord","textord","atom"]),oi=e=>WS.has(oo(e).type),GS=e=>{var n=/^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(e);return n?n[2]!==":"||!/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(n[1])?null:n[1].toLowerCase():"_relative"},e0={displayMode:{type:"boolean",description:"Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",cli:"-d, --display-mode"},output:{type:{enum:["htmlAndMathml","html","mathml"]},description:"Determines the markup language of the output.",cli:"-F, --format <type>"},leqno:{type:"boolean",description:"Render display math in leqno style (left-justified tags)."},fleqn:{type:"boolean",description:"Render display math flush left."},throwOnError:{type:"boolean",default:!0,cli:"-t, --no-throw-on-error",cliDescription:"Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."},errorColor:{type:"string",default:"#cc0000",cli:"-c, --error-color <color>",cliDescription:"A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",cliProcessor:e=>"#"+e},macros:{type:"object",cli:"-m, --macro <def>",cliDescription:"Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",cliDefault:[],cliProcessor:(e,n)=>(n.push(e),n)},minRuleThickness:{type:"number",description:"Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",processor:e=>Math.max(0,e),cli:"--min-rule-thickness <size>",cliProcessor:parseFloat},colorIsTextColor:{type:"boolean",description:"Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",cli:"-b, --color-is-text-color"},strict:{type:[{enum:["warn","ignore","error"]},"boolean","function"],description:"Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",cli:"-S, --strict",cliDefault:!1},trust:{type:["boolean","function"],description:"Trust the input, enabling all HTML features such as \\url.",cli:"-T, --trust"},maxSize:{type:"number",default:1/0,description:"If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",processor:e=>Math.max(0,e),cli:"-s, --max-size <n>",cliProcessor:parseInt},maxExpand:{type:"number",default:1e3,description:"Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",processor:e=>Math.max(0,e),cli:"-e, --max-expand <n>",cliProcessor:e=>e==="Infinity"?1/0:parseInt(e)},globalGroup:{type:"boolean",cli:!1}};function XS(e){if(e.default)return e.default;var n=e.type,t=Array.isArray(n)?n[0]:n;if(typeof t!="string")return t.enum[0];switch(t){case"boolean":return!1;case"string":return"";case"number":return 0;case"object":return{}}}class oh{constructor(n){this.displayMode=void 0,this.output=void 0,this.leqno=void 0,this.fleqn=void 0,this.throwOnError=void 0,this.errorColor=void 0,this.macros=void 0,this.minRuleThickness=void 0,this.colorIsTextColor=void 0,this.strict=void 0,this.trust=void 0,this.maxSize=void 0,this.maxExpand=void 0,this.globalGroup=void 0,n=n||{};for(var t in e0)if(e0.hasOwnProperty(t)){var i=e0[t];this[t]=n[t]!==void 0?i.processor?i.processor(n[t]):n[t]:XS(i)}}reportNonstrict(n,t,i){var l=this.strict;if(typeof l=="function"&&(l=l(n,t,i)),!(!l||l==="ignore")){if(l===!0||l==="error")throw new de("LaTeX-incompatible input and strict mode is set to 'error': "+(t+" ["+n+"]"),i);l==="warn"?typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+n+"]")):typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+t+" ["+n+"]"))}}useStrictBehavior(n,t,i){var l=this.strict;if(typeof l=="function")try{l=l(n,t,i)}catch{l="error"}return!l||l==="ignore"?!1:l===!0||l==="error"?!0:l==="warn"?(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to 'warn': "+(t+" ["+n+"]")),!1):(typeof console<"u"&&console.warn("LaTeX-incompatible input and strict mode is set to "+("unrecognized '"+l+"': "+t+" ["+n+"]")),!1)}isTrusted(n){if(n.url&&!n.protocol){var t=GS(n.url);if(t==null)return!1;n.protocol=t}var i=typeof this.trust=="function"?this.trust(n):this.trust;return!!i}}class Li{constructor(n,t,i){this.id=void 0,this.size=void 0,this.cramped=void 0,this.id=n,this.size=t,this.cramped=i}sup(){return Pr[YS[this.id]]}sub(){return Pr[QS[this.id]]}fracNum(){return Pr[KS[this.id]]}fracDen(){return Pr[ZS[this.id]]}cramp(){return Pr[eD[this.id]]}text(){return Pr[nD[this.id]]}isTight(){return this.size>=2}}var sh=0,o0=1,el=2,ii=3,go=4,sr=5,tl=6,Dt=7,Pr=[new Li(sh,0,!1),new Li(o0,0,!0),new Li(el,1,!1),new Li(ii,1,!0),new Li(go,2,!1),new Li(sr,2,!0),new Li(tl,3,!1),new Li(Dt,3,!0)],YS=[go,sr,go,sr,tl,Dt,tl,Dt],QS=[sr,sr,sr,sr,Dt,Dt,Dt,Dt],KS=[el,ii,go,sr,tl,Dt,tl,Dt],ZS=[ii,ii,sr,sr,Dt,Dt,Dt,Dt],eD=[o0,o0,ii,ii,sr,sr,Dt,Dt],nD=[sh,o0,el,ii,el,ii,el,ii],Qe={DISPLAY:Pr[sh],TEXT:Pr[el],SCRIPT:Pr[go],SCRIPTSCRIPT:Pr[tl]},d1=[{name:"latin",blocks:[[256,591],[768,879]]},{name:"cyrillic",blocks:[[1024,1279]]},{name:"armenian",blocks:[[1328,1423]]},{name:"brahmic",blocks:[[2304,4255]]},{name:"georgian",blocks:[[4256,4351]]},{name:"cjk",blocks:[[12288,12543],[19968,40879],[65280,65376]]},{name:"hangul",blocks:[[44032,55215]]}];function tD(e){for(var n=0;n<d1.length;n++)for(var t=d1[n],i=0;i<t.blocks.length;i++){var l=t.blocks[i];if(e>=l[0]&&e<=l[1])return t.name}return null}var n0=[];d1.forEach(e=>e.blocks.forEach(n=>n0.push(...n)));function l4(e){for(var n=0;n<n0.length;n+=2)if(e>=n0[n]&&e<=n0[n+1])return!0;return!1}var Ga=80,rD=function(n,t){return"M95,"+(622+n+t)+`
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l`+n/2.075+" -"+n+`
c5.3,-9.3,12,-14,20,-14
H400000v`+(40+n)+`H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M`+(834+n)+" "+t+"h400000v"+(40+n)+"h-400000z"},iD=function(n,t){return"M263,"+(601+n+t)+`c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l`+n/2.084+" -"+n+`
c4.7,-7.3,11,-11,19,-11
H40000v`+(40+n)+`H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M`+(1001+n)+" "+t+"h400000v"+(40+n)+"h-400000z"},aD=function(n,t){return"M983 "+(10+n+t)+`
l`+n/3.13+" -"+n+`
c4,-6.7,10,-10,18,-10 H400000v`+(40+n)+`
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M`+(1001+n)+" "+t+"h400000v"+(40+n)+"h-400000z"},lD=function(n,t){return"M424,"+(2398+n+t)+`
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l`+n/4.223+" -"+n+`c4,-6.7,10,-10,18,-10 H400000
v`+(40+n)+`H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M`+(1001+n)+" "+t+`
h400000v`+(40+n)+"h-400000z"},oD=function(n,t){return"M473,"+(2713+n+t)+`
c339.3,-1799.3,509.3,-2700,510,-2702 l`+n/5.298+" -"+n+`
c3.3,-7.3,9.3,-11,18,-11 H400000v`+(40+n)+`H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM`+(1001+n)+" "+t+"h400000v"+(40+n)+"H1017.7z"},sD=function(n){var t=n/2;return"M400000 "+n+" H0 L"+t+" 0 l65 45 L145 "+(n-80)+" H400000z"},uD=function(n,t,i){var l=i-54-t-n;return"M702 "+(n+t)+"H400000"+(40+n)+`
H742v`+l+`l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 `+t+"H400000v"+(40+n)+"H742z"},cD=function(n,t,i){t=1e3*t;var l="";switch(n){case"sqrtMain":l=rD(t,Ga);break;case"sqrtSize1":l=iD(t,Ga);break;case"sqrtSize2":l=aD(t,Ga);break;case"sqrtSize3":l=lD(t,Ga);break;case"sqrtSize4":l=oD(t,Ga);break;case"sqrtTall":l=uD(t,Ga,i)}return l},hD=function(n,t){switch(n){case"⎜":return"M291 0 H417 V"+t+" H291z M291 0 H417 V"+t+" H291z";case"∣":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z";case"∥":return"M145 0 H188 V"+t+" H145z M145 0 H188 V"+t+" H145z"+("M367 0 H410 V"+t+" H367z M367 0 H410 V"+t+" H367z");case"⎟":return"M457 0 H583 V"+t+" H457z M457 0 H583 V"+t+" H457z";case"⎢":return"M319 0 H403 V"+t+" H319z M319 0 H403 V"+t+" H319z";case"⎥":return"M263 0 H347 V"+t+" H263z M263 0 H347 V"+t+" H263z";case"⎪":return"M384 0 H504 V"+t+" H384z M384 0 H504 V"+t+" H384z";case"⏐":return"M312 0 H355 V"+t+" H312z M312 0 H355 V"+t+" H312z";case"‖":return"M257 0 H300 V"+t+" H257z M257 0 H300 V"+t+" H257z"+("M478 0 H521 V"+t+" H478z M478 0 H521 V"+t+" H478z");default:return""}},Mf={doubleleftarrow:`M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,doublerightarrow:`M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,leftarrow:`M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,leftbrace:`M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,leftbraceunder:`M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,leftgroup:`M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,leftgroupunder:`M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,leftharpoon:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,leftharpoonplus:`M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,leftharpoondown:`M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,leftharpoondownplus:`M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,lefthook:`M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,leftlinesegment:`M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,leftmapsto:`M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,leftToFrom:`M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,longequal:`M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,midbrace:`M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,midbraceunder:`M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,oiintSize1:`M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,oiintSize2:`M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,oiiintSize1:`M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,oiiintSize2:`M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,rightarrow:`M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,rightbrace:`M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,rightbraceunder:`M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,rightgroup:`M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,rightgroupunder:`M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,rightharpoon:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,rightharpoonplus:`M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,rightharpoondown:`M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,rightharpoondownplus:`M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,righthook:`M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,rightlinesegment:`M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,rightToFrom:`M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,twoheadleftarrow:`M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,twoheadrightarrow:`M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,tilde1:`M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,tilde2:`M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,tilde3:`M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,tilde4:`M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,vec:`M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,widehat1:`M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,widehat2:`M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat3:`M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widehat4:`M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,widecheck1:`M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,widecheck2:`M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck3:`M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,widecheck4:`M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,baraboveleftarrow:`M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,rightarrowabovebar:`M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,baraboveshortleftharpoon:`M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,rightharpoonaboveshortbar:`M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,shortbaraboveleftharpoon:`M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,shortrightharpoonabovebar:`M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`},mD=function(n,t){switch(n){case"lbrack":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v`+t+" v1759 h84z";case"rbrack":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v`+t+" v1759 h84z";case"vert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+" v585 h43z";case"doublevert":return"M145 15 v585 v"+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v`+t+` v585 h43z
M367 15 v585 v`+t+` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v`+-t+` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v`+t+" v585 h43z";case"lfloor":return"M319 602 V0 H403 V602 v"+t+` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"rfloor":return"M319 602 V0 H403 V602 v"+t+` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v`+t+" v1715 H319z";case"lceil":return"M403 1759 V84 H666 V0 H319 V1759 v"+t+` v602 h84z
M403 1759 V0 H319 V1759 v`+t+" v602 h84z";case"rceil":return"M347 1759 V0 H0 V84 H263 V1759 v"+t+` v602 h84z
M347 1759 V0 h-84 V1759 v`+t+" v602 h84z";case"lparen":return`M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,`+(t+84)+`c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-`+(t+92)+`c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;case"rparen":return`M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,`+(t+9)+`
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-`+(t+144)+`c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;default:throw new Error("Unknown stretchy delimiter.")}};class Mo{constructor(n){this.children=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.children=n,this.classes=[],this.height=0,this.depth=0,this.maxFontSize=0,this.style={}}hasClass(n){return this.classes.includes(n)}toNode(){for(var n=document.createDocumentFragment(),t=0;t<this.children.length;t++)n.appendChild(this.children[t].toNode());return n}toMarkup(){for(var n="",t=0;t<this.children.length;t++)n+=this.children[t].toMarkup();return n}toText(){var n=t=>t.toText();return this.children.map(n).join("")}}var Nr={"AMS-Regular":{32:[0,0,0,0,.25],65:[0,.68889,0,0,.72222],66:[0,.68889,0,0,.66667],67:[0,.68889,0,0,.72222],68:[0,.68889,0,0,.72222],69:[0,.68889,0,0,.66667],70:[0,.68889,0,0,.61111],71:[0,.68889,0,0,.77778],72:[0,.68889,0,0,.77778],73:[0,.68889,0,0,.38889],74:[.16667,.68889,0,0,.5],75:[0,.68889,0,0,.77778],76:[0,.68889,0,0,.66667],77:[0,.68889,0,0,.94445],78:[0,.68889,0,0,.72222],79:[.16667,.68889,0,0,.77778],80:[0,.68889,0,0,.61111],81:[.16667,.68889,0,0,.77778],82:[0,.68889,0,0,.72222],83:[0,.68889,0,0,.55556],84:[0,.68889,0,0,.66667],85:[0,.68889,0,0,.72222],86:[0,.68889,0,0,.72222],87:[0,.68889,0,0,1],88:[0,.68889,0,0,.72222],89:[0,.68889,0,0,.72222],90:[0,.68889,0,0,.66667],107:[0,.68889,0,0,.55556],160:[0,0,0,0,.25],165:[0,.675,.025,0,.75],174:[.15559,.69224,0,0,.94666],240:[0,.68889,0,0,.55556],295:[0,.68889,0,0,.54028],710:[0,.825,0,0,2.33334],732:[0,.9,0,0,2.33334],770:[0,.825,0,0,2.33334],771:[0,.9,0,0,2.33334],989:[.08167,.58167,0,0,.77778],1008:[0,.43056,.04028,0,.66667],8245:[0,.54986,0,0,.275],8463:[0,.68889,0,0,.54028],8487:[0,.68889,0,0,.72222],8498:[0,.68889,0,0,.55556],8502:[0,.68889,0,0,.66667],8503:[0,.68889,0,0,.44445],8504:[0,.68889,0,0,.66667],8513:[0,.68889,0,0,.63889],8592:[-.03598,.46402,0,0,.5],8594:[-.03598,.46402,0,0,.5],8602:[-.13313,.36687,0,0,1],8603:[-.13313,.36687,0,0,1],8606:[.01354,.52239,0,0,1],8608:[.01354,.52239,0,0,1],8610:[.01354,.52239,0,0,1.11111],8611:[.01354,.52239,0,0,1.11111],8619:[0,.54986,0,0,1],8620:[0,.54986,0,0,1],8621:[-.13313,.37788,0,0,1.38889],8622:[-.13313,.36687,0,0,1],8624:[0,.69224,0,0,.5],8625:[0,.69224,0,0,.5],8630:[0,.43056,0,0,1],8631:[0,.43056,0,0,1],8634:[.08198,.58198,0,0,.77778],8635:[.08198,.58198,0,0,.77778],8638:[.19444,.69224,0,0,.41667],8639:[.19444,.69224,0,0,.41667],8642:[.19444,.69224,0,0,.41667],8643:[.19444,.69224,0,0,.41667],8644:[.1808,.675,0,0,1],8646:[.1808,.675,0,0,1],8647:[.1808,.675,0,0,1],8648:[.19444,.69224,0,0,.83334],8649:[.1808,.675,0,0,1],8650:[.19444,.69224,0,0,.83334],8651:[.01354,.52239,0,0,1],8652:[.01354,.52239,0,0,1],8653:[-.13313,.36687,0,0,1],8654:[-.13313,.36687,0,0,1],8655:[-.13313,.36687,0,0,1],8666:[.13667,.63667,0,0,1],8667:[.13667,.63667,0,0,1],8669:[-.13313,.37788,0,0,1],8672:[-.064,.437,0,0,1.334],8674:[-.064,.437,0,0,1.334],8705:[0,.825,0,0,.5],8708:[0,.68889,0,0,.55556],8709:[.08167,.58167,0,0,.77778],8717:[0,.43056,0,0,.42917],8722:[-.03598,.46402,0,0,.5],8724:[.08198,.69224,0,0,.77778],8726:[.08167,.58167,0,0,.77778],8733:[0,.69224,0,0,.77778],8736:[0,.69224,0,0,.72222],8737:[0,.69224,0,0,.72222],8738:[.03517,.52239,0,0,.72222],8739:[.08167,.58167,0,0,.22222],8740:[.25142,.74111,0,0,.27778],8741:[.08167,.58167,0,0,.38889],8742:[.25142,.74111,0,0,.5],8756:[0,.69224,0,0,.66667],8757:[0,.69224,0,0,.66667],8764:[-.13313,.36687,0,0,.77778],8765:[-.13313,.37788,0,0,.77778],8769:[-.13313,.36687,0,0,.77778],8770:[-.03625,.46375,0,0,.77778],8774:[.30274,.79383,0,0,.77778],8776:[-.01688,.48312,0,0,.77778],8778:[.08167,.58167,0,0,.77778],8782:[.06062,.54986,0,0,.77778],8783:[.06062,.54986,0,0,.77778],8785:[.08198,.58198,0,0,.77778],8786:[.08198,.58198,0,0,.77778],8787:[.08198,.58198,0,0,.77778],8790:[0,.69224,0,0,.77778],8791:[.22958,.72958,0,0,.77778],8796:[.08198,.91667,0,0,.77778],8806:[.25583,.75583,0,0,.77778],8807:[.25583,.75583,0,0,.77778],8808:[.25142,.75726,0,0,.77778],8809:[.25142,.75726,0,0,.77778],8812:[.25583,.75583,0,0,.5],8814:[.20576,.70576,0,0,.77778],8815:[.20576,.70576,0,0,.77778],8816:[.30274,.79383,0,0,.77778],8817:[.30274,.79383,0,0,.77778],8818:[.22958,.72958,0,0,.77778],8819:[.22958,.72958,0,0,.77778],8822:[.1808,.675,0,0,.77778],8823:[.1808,.675,0,0,.77778],8828:[.13667,.63667,0,0,.77778],8829:[.13667,.63667,0,0,.77778],8830:[.22958,.72958,0,0,.77778],8831:[.22958,.72958,0,0,.77778],8832:[.20576,.70576,0,0,.77778],8833:[.20576,.70576,0,0,.77778],8840:[.30274,.79383,0,0,.77778],8841:[.30274,.79383,0,0,.77778],8842:[.13597,.63597,0,0,.77778],8843:[.13597,.63597,0,0,.77778],8847:[.03517,.54986,0,0,.77778],8848:[.03517,.54986,0,0,.77778],8858:[.08198,.58198,0,0,.77778],8859:[.08198,.58198,0,0,.77778],8861:[.08198,.58198,0,0,.77778],8862:[0,.675,0,0,.77778],8863:[0,.675,0,0,.77778],8864:[0,.675,0,0,.77778],8865:[0,.675,0,0,.77778],8872:[0,.69224,0,0,.61111],8873:[0,.69224,0,0,.72222],8874:[0,.69224,0,0,.88889],8876:[0,.68889,0,0,.61111],8877:[0,.68889,0,0,.61111],8878:[0,.68889,0,0,.72222],8879:[0,.68889,0,0,.72222],8882:[.03517,.54986,0,0,.77778],8883:[.03517,.54986,0,0,.77778],8884:[.13667,.63667,0,0,.77778],8885:[.13667,.63667,0,0,.77778],8888:[0,.54986,0,0,1.11111],8890:[.19444,.43056,0,0,.55556],8891:[.19444,.69224,0,0,.61111],8892:[.19444,.69224,0,0,.61111],8901:[0,.54986,0,0,.27778],8903:[.08167,.58167,0,0,.77778],8905:[.08167,.58167,0,0,.77778],8906:[.08167,.58167,0,0,.77778],8907:[0,.69224,0,0,.77778],8908:[0,.69224,0,0,.77778],8909:[-.03598,.46402,0,0,.77778],8910:[0,.54986,0,0,.76042],8911:[0,.54986,0,0,.76042],8912:[.03517,.54986,0,0,.77778],8913:[.03517,.54986,0,0,.77778],8914:[0,.54986,0,0,.66667],8915:[0,.54986,0,0,.66667],8916:[0,.69224,0,0,.66667],8918:[.0391,.5391,0,0,.77778],8919:[.0391,.5391,0,0,.77778],8920:[.03517,.54986,0,0,1.33334],8921:[.03517,.54986,0,0,1.33334],8922:[.38569,.88569,0,0,.77778],8923:[.38569,.88569,0,0,.77778],8926:[.13667,.63667,0,0,.77778],8927:[.13667,.63667,0,0,.77778],8928:[.30274,.79383,0,0,.77778],8929:[.30274,.79383,0,0,.77778],8934:[.23222,.74111,0,0,.77778],8935:[.23222,.74111,0,0,.77778],8936:[.23222,.74111,0,0,.77778],8937:[.23222,.74111,0,0,.77778],8938:[.20576,.70576,0,0,.77778],8939:[.20576,.70576,0,0,.77778],8940:[.30274,.79383,0,0,.77778],8941:[.30274,.79383,0,0,.77778],8994:[.19444,.69224,0,0,.77778],8995:[.19444,.69224,0,0,.77778],9416:[.15559,.69224,0,0,.90222],9484:[0,.69224,0,0,.5],9488:[0,.69224,0,0,.5],9492:[0,.37788,0,0,.5],9496:[0,.37788,0,0,.5],9585:[.19444,.68889,0,0,.88889],9586:[.19444,.74111,0,0,.88889],9632:[0,.675,0,0,.77778],9633:[0,.675,0,0,.77778],9650:[0,.54986,0,0,.72222],9651:[0,.54986,0,0,.72222],9654:[.03517,.54986,0,0,.77778],9660:[0,.54986,0,0,.72222],9661:[0,.54986,0,0,.72222],9664:[.03517,.54986,0,0,.77778],9674:[.11111,.69224,0,0,.66667],9733:[.19444,.69224,0,0,.94445],10003:[0,.69224,0,0,.83334],10016:[0,.69224,0,0,.83334],10731:[.11111,.69224,0,0,.66667],10846:[.19444,.75583,0,0,.61111],10877:[.13667,.63667,0,0,.77778],10878:[.13667,.63667,0,0,.77778],10885:[.25583,.75583,0,0,.77778],10886:[.25583,.75583,0,0,.77778],10887:[.13597,.63597,0,0,.77778],10888:[.13597,.63597,0,0,.77778],10889:[.26167,.75726,0,0,.77778],10890:[.26167,.75726,0,0,.77778],10891:[.48256,.98256,0,0,.77778],10892:[.48256,.98256,0,0,.77778],10901:[.13667,.63667,0,0,.77778],10902:[.13667,.63667,0,0,.77778],10933:[.25142,.75726,0,0,.77778],10934:[.25142,.75726,0,0,.77778],10935:[.26167,.75726,0,0,.77778],10936:[.26167,.75726,0,0,.77778],10937:[.26167,.75726,0,0,.77778],10938:[.26167,.75726,0,0,.77778],10949:[.25583,.75583,0,0,.77778],10950:[.25583,.75583,0,0,.77778],10955:[.28481,.79383,0,0,.77778],10956:[.28481,.79383,0,0,.77778],57350:[.08167,.58167,0,0,.22222],57351:[.08167,.58167,0,0,.38889],57352:[.08167,.58167,0,0,.77778],57353:[0,.43056,.04028,0,.66667],57356:[.25142,.75726,0,0,.77778],57357:[.25142,.75726,0,0,.77778],57358:[.41951,.91951,0,0,.77778],57359:[.30274,.79383,0,0,.77778],57360:[.30274,.79383,0,0,.77778],57361:[.41951,.91951,0,0,.77778],57366:[.25142,.75726,0,0,.77778],57367:[.25142,.75726,0,0,.77778],57368:[.25142,.75726,0,0,.77778],57369:[.25142,.75726,0,0,.77778],57370:[.13597,.63597,0,0,.77778],57371:[.13597,.63597,0,0,.77778]},"Caligraphic-Regular":{32:[0,0,0,0,.25],65:[0,.68333,0,.19445,.79847],66:[0,.68333,.03041,.13889,.65681],67:[0,.68333,.05834,.13889,.52653],68:[0,.68333,.02778,.08334,.77139],69:[0,.68333,.08944,.11111,.52778],70:[0,.68333,.09931,.11111,.71875],71:[.09722,.68333,.0593,.11111,.59487],72:[0,.68333,.00965,.11111,.84452],73:[0,.68333,.07382,0,.54452],74:[.09722,.68333,.18472,.16667,.67778],75:[0,.68333,.01445,.05556,.76195],76:[0,.68333,0,.13889,.68972],77:[0,.68333,0,.13889,1.2009],78:[0,.68333,.14736,.08334,.82049],79:[0,.68333,.02778,.11111,.79611],80:[0,.68333,.08222,.08334,.69556],81:[.09722,.68333,0,.11111,.81667],82:[0,.68333,0,.08334,.8475],83:[0,.68333,.075,.13889,.60556],84:[0,.68333,.25417,0,.54464],85:[0,.68333,.09931,.08334,.62583],86:[0,.68333,.08222,0,.61278],87:[0,.68333,.08222,.08334,.98778],88:[0,.68333,.14643,.13889,.7133],89:[.09722,.68333,.08222,.08334,.66834],90:[0,.68333,.07944,.13889,.72473],160:[0,0,0,0,.25]},"Fraktur-Regular":{32:[0,0,0,0,.25],33:[0,.69141,0,0,.29574],34:[0,.69141,0,0,.21471],38:[0,.69141,0,0,.73786],39:[0,.69141,0,0,.21201],40:[.24982,.74947,0,0,.38865],41:[.24982,.74947,0,0,.38865],42:[0,.62119,0,0,.27764],43:[.08319,.58283,0,0,.75623],44:[0,.10803,0,0,.27764],45:[.08319,.58283,0,0,.75623],46:[0,.10803,0,0,.27764],47:[.24982,.74947,0,0,.50181],48:[0,.47534,0,0,.50181],49:[0,.47534,0,0,.50181],50:[0,.47534,0,0,.50181],51:[.18906,.47534,0,0,.50181],52:[.18906,.47534,0,0,.50181],53:[.18906,.47534,0,0,.50181],54:[0,.69141,0,0,.50181],55:[.18906,.47534,0,0,.50181],56:[0,.69141,0,0,.50181],57:[.18906,.47534,0,0,.50181],58:[0,.47534,0,0,.21606],59:[.12604,.47534,0,0,.21606],61:[-.13099,.36866,0,0,.75623],63:[0,.69141,0,0,.36245],65:[0,.69141,0,0,.7176],66:[0,.69141,0,0,.88397],67:[0,.69141,0,0,.61254],68:[0,.69141,0,0,.83158],69:[0,.69141,0,0,.66278],70:[.12604,.69141,0,0,.61119],71:[0,.69141,0,0,.78539],72:[.06302,.69141,0,0,.7203],73:[0,.69141,0,0,.55448],74:[.12604,.69141,0,0,.55231],75:[0,.69141,0,0,.66845],76:[0,.69141,0,0,.66602],77:[0,.69141,0,0,1.04953],78:[0,.69141,0,0,.83212],79:[0,.69141,0,0,.82699],80:[.18906,.69141,0,0,.82753],81:[.03781,.69141,0,0,.82699],82:[0,.69141,0,0,.82807],83:[0,.69141,0,0,.82861],84:[0,.69141,0,0,.66899],85:[0,.69141,0,0,.64576],86:[0,.69141,0,0,.83131],87:[0,.69141,0,0,1.04602],88:[0,.69141,0,0,.71922],89:[.18906,.69141,0,0,.83293],90:[.12604,.69141,0,0,.60201],91:[.24982,.74947,0,0,.27764],93:[.24982,.74947,0,0,.27764],94:[0,.69141,0,0,.49965],97:[0,.47534,0,0,.50046],98:[0,.69141,0,0,.51315],99:[0,.47534,0,0,.38946],100:[0,.62119,0,0,.49857],101:[0,.47534,0,0,.40053],102:[.18906,.69141,0,0,.32626],103:[.18906,.47534,0,0,.5037],104:[.18906,.69141,0,0,.52126],105:[0,.69141,0,0,.27899],106:[0,.69141,0,0,.28088],107:[0,.69141,0,0,.38946],108:[0,.69141,0,0,.27953],109:[0,.47534,0,0,.76676],110:[0,.47534,0,0,.52666],111:[0,.47534,0,0,.48885],112:[.18906,.52396,0,0,.50046],113:[.18906,.47534,0,0,.48912],114:[0,.47534,0,0,.38919],115:[0,.47534,0,0,.44266],116:[0,.62119,0,0,.33301],117:[0,.47534,0,0,.5172],118:[0,.52396,0,0,.5118],119:[0,.52396,0,0,.77351],120:[.18906,.47534,0,0,.38865],121:[.18906,.47534,0,0,.49884],122:[.18906,.47534,0,0,.39054],160:[0,0,0,0,.25],8216:[0,.69141,0,0,.21471],8217:[0,.69141,0,0,.21471],58112:[0,.62119,0,0,.49749],58113:[0,.62119,0,0,.4983],58114:[.18906,.69141,0,0,.33328],58115:[.18906,.69141,0,0,.32923],58116:[.18906,.47534,0,0,.50343],58117:[0,.69141,0,0,.33301],58118:[0,.62119,0,0,.33409],58119:[0,.47534,0,0,.50073]},"Main-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.35],34:[0,.69444,0,0,.60278],35:[.19444,.69444,0,0,.95833],36:[.05556,.75,0,0,.575],37:[.05556,.75,0,0,.95833],38:[0,.69444,0,0,.89444],39:[0,.69444,0,0,.31944],40:[.25,.75,0,0,.44722],41:[.25,.75,0,0,.44722],42:[0,.75,0,0,.575],43:[.13333,.63333,0,0,.89444],44:[.19444,.15556,0,0,.31944],45:[0,.44444,0,0,.38333],46:[0,.15556,0,0,.31944],47:[.25,.75,0,0,.575],48:[0,.64444,0,0,.575],49:[0,.64444,0,0,.575],50:[0,.64444,0,0,.575],51:[0,.64444,0,0,.575],52:[0,.64444,0,0,.575],53:[0,.64444,0,0,.575],54:[0,.64444,0,0,.575],55:[0,.64444,0,0,.575],56:[0,.64444,0,0,.575],57:[0,.64444,0,0,.575],58:[0,.44444,0,0,.31944],59:[.19444,.44444,0,0,.31944],60:[.08556,.58556,0,0,.89444],61:[-.10889,.39111,0,0,.89444],62:[.08556,.58556,0,0,.89444],63:[0,.69444,0,0,.54305],64:[0,.69444,0,0,.89444],65:[0,.68611,0,0,.86944],66:[0,.68611,0,0,.81805],67:[0,.68611,0,0,.83055],68:[0,.68611,0,0,.88194],69:[0,.68611,0,0,.75555],70:[0,.68611,0,0,.72361],71:[0,.68611,0,0,.90416],72:[0,.68611,0,0,.9],73:[0,.68611,0,0,.43611],74:[0,.68611,0,0,.59444],75:[0,.68611,0,0,.90138],76:[0,.68611,0,0,.69166],77:[0,.68611,0,0,1.09166],78:[0,.68611,0,0,.9],79:[0,.68611,0,0,.86388],80:[0,.68611,0,0,.78611],81:[.19444,.68611,0,0,.86388],82:[0,.68611,0,0,.8625],83:[0,.68611,0,0,.63889],84:[0,.68611,0,0,.8],85:[0,.68611,0,0,.88472],86:[0,.68611,.01597,0,.86944],87:[0,.68611,.01597,0,1.18888],88:[0,.68611,0,0,.86944],89:[0,.68611,.02875,0,.86944],90:[0,.68611,0,0,.70277],91:[.25,.75,0,0,.31944],92:[.25,.75,0,0,.575],93:[.25,.75,0,0,.31944],94:[0,.69444,0,0,.575],95:[.31,.13444,.03194,0,.575],97:[0,.44444,0,0,.55902],98:[0,.69444,0,0,.63889],99:[0,.44444,0,0,.51111],100:[0,.69444,0,0,.63889],101:[0,.44444,0,0,.52708],102:[0,.69444,.10903,0,.35139],103:[.19444,.44444,.01597,0,.575],104:[0,.69444,0,0,.63889],105:[0,.69444,0,0,.31944],106:[.19444,.69444,0,0,.35139],107:[0,.69444,0,0,.60694],108:[0,.69444,0,0,.31944],109:[0,.44444,0,0,.95833],110:[0,.44444,0,0,.63889],111:[0,.44444,0,0,.575],112:[.19444,.44444,0,0,.63889],113:[.19444,.44444,0,0,.60694],114:[0,.44444,0,0,.47361],115:[0,.44444,0,0,.45361],116:[0,.63492,0,0,.44722],117:[0,.44444,0,0,.63889],118:[0,.44444,.01597,0,.60694],119:[0,.44444,.01597,0,.83055],120:[0,.44444,0,0,.60694],121:[.19444,.44444,.01597,0,.60694],122:[0,.44444,0,0,.51111],123:[.25,.75,0,0,.575],124:[.25,.75,0,0,.31944],125:[.25,.75,0,0,.575],126:[.35,.34444,0,0,.575],160:[0,0,0,0,.25],163:[0,.69444,0,0,.86853],168:[0,.69444,0,0,.575],172:[0,.44444,0,0,.76666],176:[0,.69444,0,0,.86944],177:[.13333,.63333,0,0,.89444],184:[.17014,0,0,0,.51111],198:[0,.68611,0,0,1.04166],215:[.13333,.63333,0,0,.89444],216:[.04861,.73472,0,0,.89444],223:[0,.69444,0,0,.59722],230:[0,.44444,0,0,.83055],247:[.13333,.63333,0,0,.89444],248:[.09722,.54167,0,0,.575],305:[0,.44444,0,0,.31944],338:[0,.68611,0,0,1.16944],339:[0,.44444,0,0,.89444],567:[.19444,.44444,0,0,.35139],710:[0,.69444,0,0,.575],711:[0,.63194,0,0,.575],713:[0,.59611,0,0,.575],714:[0,.69444,0,0,.575],715:[0,.69444,0,0,.575],728:[0,.69444,0,0,.575],729:[0,.69444,0,0,.31944],730:[0,.69444,0,0,.86944],732:[0,.69444,0,0,.575],733:[0,.69444,0,0,.575],915:[0,.68611,0,0,.69166],916:[0,.68611,0,0,.95833],920:[0,.68611,0,0,.89444],923:[0,.68611,0,0,.80555],926:[0,.68611,0,0,.76666],928:[0,.68611,0,0,.9],931:[0,.68611,0,0,.83055],933:[0,.68611,0,0,.89444],934:[0,.68611,0,0,.83055],936:[0,.68611,0,0,.89444],937:[0,.68611,0,0,.83055],8211:[0,.44444,.03194,0,.575],8212:[0,.44444,.03194,0,1.14999],8216:[0,.69444,0,0,.31944],8217:[0,.69444,0,0,.31944],8220:[0,.69444,0,0,.60278],8221:[0,.69444,0,0,.60278],8224:[.19444,.69444,0,0,.51111],8225:[.19444,.69444,0,0,.51111],8242:[0,.55556,0,0,.34444],8407:[0,.72444,.15486,0,.575],8463:[0,.69444,0,0,.66759],8465:[0,.69444,0,0,.83055],8467:[0,.69444,0,0,.47361],8472:[.19444,.44444,0,0,.74027],8476:[0,.69444,0,0,.83055],8501:[0,.69444,0,0,.70277],8592:[-.10889,.39111,0,0,1.14999],8593:[.19444,.69444,0,0,.575],8594:[-.10889,.39111,0,0,1.14999],8595:[.19444,.69444,0,0,.575],8596:[-.10889,.39111,0,0,1.14999],8597:[.25,.75,0,0,.575],8598:[.19444,.69444,0,0,1.14999],8599:[.19444,.69444,0,0,1.14999],8600:[.19444,.69444,0,0,1.14999],8601:[.19444,.69444,0,0,1.14999],8636:[-.10889,.39111,0,0,1.14999],8637:[-.10889,.39111,0,0,1.14999],8640:[-.10889,.39111,0,0,1.14999],8641:[-.10889,.39111,0,0,1.14999],8656:[-.10889,.39111,0,0,1.14999],8657:[.19444,.69444,0,0,.70277],8658:[-.10889,.39111,0,0,1.14999],8659:[.19444,.69444,0,0,.70277],8660:[-.10889,.39111,0,0,1.14999],8661:[.25,.75,0,0,.70277],8704:[0,.69444,0,0,.63889],8706:[0,.69444,.06389,0,.62847],8707:[0,.69444,0,0,.63889],8709:[.05556,.75,0,0,.575],8711:[0,.68611,0,0,.95833],8712:[.08556,.58556,0,0,.76666],8715:[.08556,.58556,0,0,.76666],8722:[.13333,.63333,0,0,.89444],8723:[.13333,.63333,0,0,.89444],8725:[.25,.75,0,0,.575],8726:[.25,.75,0,0,.575],8727:[-.02778,.47222,0,0,.575],8728:[-.02639,.47361,0,0,.575],8729:[-.02639,.47361,0,0,.575],8730:[.18,.82,0,0,.95833],8733:[0,.44444,0,0,.89444],8734:[0,.44444,0,0,1.14999],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.31944],8741:[.25,.75,0,0,.575],8743:[0,.55556,0,0,.76666],8744:[0,.55556,0,0,.76666],8745:[0,.55556,0,0,.76666],8746:[0,.55556,0,0,.76666],8747:[.19444,.69444,.12778,0,.56875],8764:[-.10889,.39111,0,0,.89444],8768:[.19444,.69444,0,0,.31944],8771:[.00222,.50222,0,0,.89444],8773:[.027,.638,0,0,.894],8776:[.02444,.52444,0,0,.89444],8781:[.00222,.50222,0,0,.89444],8801:[.00222,.50222,0,0,.89444],8804:[.19667,.69667,0,0,.89444],8805:[.19667,.69667,0,0,.89444],8810:[.08556,.58556,0,0,1.14999],8811:[.08556,.58556,0,0,1.14999],8826:[.08556,.58556,0,0,.89444],8827:[.08556,.58556,0,0,.89444],8834:[.08556,.58556,0,0,.89444],8835:[.08556,.58556,0,0,.89444],8838:[.19667,.69667,0,0,.89444],8839:[.19667,.69667,0,0,.89444],8846:[0,.55556,0,0,.76666],8849:[.19667,.69667,0,0,.89444],8850:[.19667,.69667,0,0,.89444],8851:[0,.55556,0,0,.76666],8852:[0,.55556,0,0,.76666],8853:[.13333,.63333,0,0,.89444],8854:[.13333,.63333,0,0,.89444],8855:[.13333,.63333,0,0,.89444],8856:[.13333,.63333,0,0,.89444],8857:[.13333,.63333,0,0,.89444],8866:[0,.69444,0,0,.70277],8867:[0,.69444,0,0,.70277],8868:[0,.69444,0,0,.89444],8869:[0,.69444,0,0,.89444],8900:[-.02639,.47361,0,0,.575],8901:[-.02639,.47361,0,0,.31944],8902:[-.02778,.47222,0,0,.575],8968:[.25,.75,0,0,.51111],8969:[.25,.75,0,0,.51111],8970:[.25,.75,0,0,.51111],8971:[.25,.75,0,0,.51111],8994:[-.13889,.36111,0,0,1.14999],8995:[-.13889,.36111,0,0,1.14999],9651:[.19444,.69444,0,0,1.02222],9657:[-.02778,.47222,0,0,.575],9661:[.19444,.69444,0,0,1.02222],9667:[-.02778,.47222,0,0,.575],9711:[.19444,.69444,0,0,1.14999],9824:[.12963,.69444,0,0,.89444],9825:[.12963,.69444,0,0,.89444],9826:[.12963,.69444,0,0,.89444],9827:[.12963,.69444,0,0,.89444],9837:[0,.75,0,0,.44722],9838:[.19444,.69444,0,0,.44722],9839:[.19444,.69444,0,0,.44722],10216:[.25,.75,0,0,.44722],10217:[.25,.75,0,0,.44722],10815:[0,.68611,0,0,.9],10927:[.19667,.69667,0,0,.89444],10928:[.19667,.69667,0,0,.89444],57376:[.19444,.69444,0,0,0]},"Main-BoldItalic":{32:[0,0,0,0,.25],33:[0,.69444,.11417,0,.38611],34:[0,.69444,.07939,0,.62055],35:[.19444,.69444,.06833,0,.94444],37:[.05556,.75,.12861,0,.94444],38:[0,.69444,.08528,0,.88555],39:[0,.69444,.12945,0,.35555],40:[.25,.75,.15806,0,.47333],41:[.25,.75,.03306,0,.47333],42:[0,.75,.14333,0,.59111],43:[.10333,.60333,.03306,0,.88555],44:[.19444,.14722,0,0,.35555],45:[0,.44444,.02611,0,.41444],46:[0,.14722,0,0,.35555],47:[.25,.75,.15806,0,.59111],48:[0,.64444,.13167,0,.59111],49:[0,.64444,.13167,0,.59111],50:[0,.64444,.13167,0,.59111],51:[0,.64444,.13167,0,.59111],52:[.19444,.64444,.13167,0,.59111],53:[0,.64444,.13167,0,.59111],54:[0,.64444,.13167,0,.59111],55:[.19444,.64444,.13167,0,.59111],56:[0,.64444,.13167,0,.59111],57:[0,.64444,.13167,0,.59111],58:[0,.44444,.06695,0,.35555],59:[.19444,.44444,.06695,0,.35555],61:[-.10889,.39111,.06833,0,.88555],63:[0,.69444,.11472,0,.59111],64:[0,.69444,.09208,0,.88555],65:[0,.68611,0,0,.86555],66:[0,.68611,.0992,0,.81666],67:[0,.68611,.14208,0,.82666],68:[0,.68611,.09062,0,.87555],69:[0,.68611,.11431,0,.75666],70:[0,.68611,.12903,0,.72722],71:[0,.68611,.07347,0,.89527],72:[0,.68611,.17208,0,.8961],73:[0,.68611,.15681,0,.47166],74:[0,.68611,.145,0,.61055],75:[0,.68611,.14208,0,.89499],76:[0,.68611,0,0,.69777],77:[0,.68611,.17208,0,1.07277],78:[0,.68611,.17208,0,.8961],79:[0,.68611,.09062,0,.85499],80:[0,.68611,.0992,0,.78721],81:[.19444,.68611,.09062,0,.85499],82:[0,.68611,.02559,0,.85944],83:[0,.68611,.11264,0,.64999],84:[0,.68611,.12903,0,.7961],85:[0,.68611,.17208,0,.88083],86:[0,.68611,.18625,0,.86555],87:[0,.68611,.18625,0,1.15999],88:[0,.68611,.15681,0,.86555],89:[0,.68611,.19803,0,.86555],90:[0,.68611,.14208,0,.70888],91:[.25,.75,.1875,0,.35611],93:[.25,.75,.09972,0,.35611],94:[0,.69444,.06709,0,.59111],95:[.31,.13444,.09811,0,.59111],97:[0,.44444,.09426,0,.59111],98:[0,.69444,.07861,0,.53222],99:[0,.44444,.05222,0,.53222],100:[0,.69444,.10861,0,.59111],101:[0,.44444,.085,0,.53222],102:[.19444,.69444,.21778,0,.4],103:[.19444,.44444,.105,0,.53222],104:[0,.69444,.09426,0,.59111],105:[0,.69326,.11387,0,.35555],106:[.19444,.69326,.1672,0,.35555],107:[0,.69444,.11111,0,.53222],108:[0,.69444,.10861,0,.29666],109:[0,.44444,.09426,0,.94444],110:[0,.44444,.09426,0,.64999],111:[0,.44444,.07861,0,.59111],112:[.19444,.44444,.07861,0,.59111],113:[.19444,.44444,.105,0,.53222],114:[0,.44444,.11111,0,.50167],115:[0,.44444,.08167,0,.48694],116:[0,.63492,.09639,0,.385],117:[0,.44444,.09426,0,.62055],118:[0,.44444,.11111,0,.53222],119:[0,.44444,.11111,0,.76777],120:[0,.44444,.12583,0,.56055],121:[.19444,.44444,.105,0,.56166],122:[0,.44444,.13889,0,.49055],126:[.35,.34444,.11472,0,.59111],160:[0,0,0,0,.25],168:[0,.69444,.11473,0,.59111],176:[0,.69444,0,0,.94888],184:[.17014,0,0,0,.53222],198:[0,.68611,.11431,0,1.02277],216:[.04861,.73472,.09062,0,.88555],223:[.19444,.69444,.09736,0,.665],230:[0,.44444,.085,0,.82666],248:[.09722,.54167,.09458,0,.59111],305:[0,.44444,.09426,0,.35555],338:[0,.68611,.11431,0,1.14054],339:[0,.44444,.085,0,.82666],567:[.19444,.44444,.04611,0,.385],710:[0,.69444,.06709,0,.59111],711:[0,.63194,.08271,0,.59111],713:[0,.59444,.10444,0,.59111],714:[0,.69444,.08528,0,.59111],715:[0,.69444,0,0,.59111],728:[0,.69444,.10333,0,.59111],729:[0,.69444,.12945,0,.35555],730:[0,.69444,0,0,.94888],732:[0,.69444,.11472,0,.59111],733:[0,.69444,.11472,0,.59111],915:[0,.68611,.12903,0,.69777],916:[0,.68611,0,0,.94444],920:[0,.68611,.09062,0,.88555],923:[0,.68611,0,0,.80666],926:[0,.68611,.15092,0,.76777],928:[0,.68611,.17208,0,.8961],931:[0,.68611,.11431,0,.82666],933:[0,.68611,.10778,0,.88555],934:[0,.68611,.05632,0,.82666],936:[0,.68611,.10778,0,.88555],937:[0,.68611,.0992,0,.82666],8211:[0,.44444,.09811,0,.59111],8212:[0,.44444,.09811,0,1.18221],8216:[0,.69444,.12945,0,.35555],8217:[0,.69444,.12945,0,.35555],8220:[0,.69444,.16772,0,.62055],8221:[0,.69444,.07939,0,.62055]},"Main-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.12417,0,.30667],34:[0,.69444,.06961,0,.51444],35:[.19444,.69444,.06616,0,.81777],37:[.05556,.75,.13639,0,.81777],38:[0,.69444,.09694,0,.76666],39:[0,.69444,.12417,0,.30667],40:[.25,.75,.16194,0,.40889],41:[.25,.75,.03694,0,.40889],42:[0,.75,.14917,0,.51111],43:[.05667,.56167,.03694,0,.76666],44:[.19444,.10556,0,0,.30667],45:[0,.43056,.02826,0,.35778],46:[0,.10556,0,0,.30667],47:[.25,.75,.16194,0,.51111],48:[0,.64444,.13556,0,.51111],49:[0,.64444,.13556,0,.51111],50:[0,.64444,.13556,0,.51111],51:[0,.64444,.13556,0,.51111],52:[.19444,.64444,.13556,0,.51111],53:[0,.64444,.13556,0,.51111],54:[0,.64444,.13556,0,.51111],55:[.19444,.64444,.13556,0,.51111],56:[0,.64444,.13556,0,.51111],57:[0,.64444,.13556,0,.51111],58:[0,.43056,.0582,0,.30667],59:[.19444,.43056,.0582,0,.30667],61:[-.13313,.36687,.06616,0,.76666],63:[0,.69444,.1225,0,.51111],64:[0,.69444,.09597,0,.76666],65:[0,.68333,0,0,.74333],66:[0,.68333,.10257,0,.70389],67:[0,.68333,.14528,0,.71555],68:[0,.68333,.09403,0,.755],69:[0,.68333,.12028,0,.67833],70:[0,.68333,.13305,0,.65277],71:[0,.68333,.08722,0,.77361],72:[0,.68333,.16389,0,.74333],73:[0,.68333,.15806,0,.38555],74:[0,.68333,.14028,0,.525],75:[0,.68333,.14528,0,.76888],76:[0,.68333,0,0,.62722],77:[0,.68333,.16389,0,.89666],78:[0,.68333,.16389,0,.74333],79:[0,.68333,.09403,0,.76666],80:[0,.68333,.10257,0,.67833],81:[.19444,.68333,.09403,0,.76666],82:[0,.68333,.03868,0,.72944],83:[0,.68333,.11972,0,.56222],84:[0,.68333,.13305,0,.71555],85:[0,.68333,.16389,0,.74333],86:[0,.68333,.18361,0,.74333],87:[0,.68333,.18361,0,.99888],88:[0,.68333,.15806,0,.74333],89:[0,.68333,.19383,0,.74333],90:[0,.68333,.14528,0,.61333],91:[.25,.75,.1875,0,.30667],93:[.25,.75,.10528,0,.30667],94:[0,.69444,.06646,0,.51111],95:[.31,.12056,.09208,0,.51111],97:[0,.43056,.07671,0,.51111],98:[0,.69444,.06312,0,.46],99:[0,.43056,.05653,0,.46],100:[0,.69444,.10333,0,.51111],101:[0,.43056,.07514,0,.46],102:[.19444,.69444,.21194,0,.30667],103:[.19444,.43056,.08847,0,.46],104:[0,.69444,.07671,0,.51111],105:[0,.65536,.1019,0,.30667],106:[.19444,.65536,.14467,0,.30667],107:[0,.69444,.10764,0,.46],108:[0,.69444,.10333,0,.25555],109:[0,.43056,.07671,0,.81777],110:[0,.43056,.07671,0,.56222],111:[0,.43056,.06312,0,.51111],112:[.19444,.43056,.06312,0,.51111],113:[.19444,.43056,.08847,0,.46],114:[0,.43056,.10764,0,.42166],115:[0,.43056,.08208,0,.40889],116:[0,.61508,.09486,0,.33222],117:[0,.43056,.07671,0,.53666],118:[0,.43056,.10764,0,.46],119:[0,.43056,.10764,0,.66444],120:[0,.43056,.12042,0,.46389],121:[.19444,.43056,.08847,0,.48555],122:[0,.43056,.12292,0,.40889],126:[.35,.31786,.11585,0,.51111],160:[0,0,0,0,.25],168:[0,.66786,.10474,0,.51111],176:[0,.69444,0,0,.83129],184:[.17014,0,0,0,.46],198:[0,.68333,.12028,0,.88277],216:[.04861,.73194,.09403,0,.76666],223:[.19444,.69444,.10514,0,.53666],230:[0,.43056,.07514,0,.71555],248:[.09722,.52778,.09194,0,.51111],338:[0,.68333,.12028,0,.98499],339:[0,.43056,.07514,0,.71555],710:[0,.69444,.06646,0,.51111],711:[0,.62847,.08295,0,.51111],713:[0,.56167,.10333,0,.51111],714:[0,.69444,.09694,0,.51111],715:[0,.69444,0,0,.51111],728:[0,.69444,.10806,0,.51111],729:[0,.66786,.11752,0,.30667],730:[0,.69444,0,0,.83129],732:[0,.66786,.11585,0,.51111],733:[0,.69444,.1225,0,.51111],915:[0,.68333,.13305,0,.62722],916:[0,.68333,0,0,.81777],920:[0,.68333,.09403,0,.76666],923:[0,.68333,0,0,.69222],926:[0,.68333,.15294,0,.66444],928:[0,.68333,.16389,0,.74333],931:[0,.68333,.12028,0,.71555],933:[0,.68333,.11111,0,.76666],934:[0,.68333,.05986,0,.71555],936:[0,.68333,.11111,0,.76666],937:[0,.68333,.10257,0,.71555],8211:[0,.43056,.09208,0,.51111],8212:[0,.43056,.09208,0,1.02222],8216:[0,.69444,.12417,0,.30667],8217:[0,.69444,.12417,0,.30667],8220:[0,.69444,.1685,0,.51444],8221:[0,.69444,.06961,0,.51444],8463:[0,.68889,0,0,.54028]},"Main-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.27778],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.77778],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.19444,.10556,0,0,.27778],45:[0,.43056,0,0,.33333],46:[0,.10556,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.64444,0,0,.5],49:[0,.64444,0,0,.5],50:[0,.64444,0,0,.5],51:[0,.64444,0,0,.5],52:[0,.64444,0,0,.5],53:[0,.64444,0,0,.5],54:[0,.64444,0,0,.5],55:[0,.64444,0,0,.5],56:[0,.64444,0,0,.5],57:[0,.64444,0,0,.5],58:[0,.43056,0,0,.27778],59:[.19444,.43056,0,0,.27778],60:[.0391,.5391,0,0,.77778],61:[-.13313,.36687,0,0,.77778],62:[.0391,.5391,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.77778],65:[0,.68333,0,0,.75],66:[0,.68333,0,0,.70834],67:[0,.68333,0,0,.72222],68:[0,.68333,0,0,.76389],69:[0,.68333,0,0,.68056],70:[0,.68333,0,0,.65278],71:[0,.68333,0,0,.78472],72:[0,.68333,0,0,.75],73:[0,.68333,0,0,.36111],74:[0,.68333,0,0,.51389],75:[0,.68333,0,0,.77778],76:[0,.68333,0,0,.625],77:[0,.68333,0,0,.91667],78:[0,.68333,0,0,.75],79:[0,.68333,0,0,.77778],80:[0,.68333,0,0,.68056],81:[.19444,.68333,0,0,.77778],82:[0,.68333,0,0,.73611],83:[0,.68333,0,0,.55556],84:[0,.68333,0,0,.72222],85:[0,.68333,0,0,.75],86:[0,.68333,.01389,0,.75],87:[0,.68333,.01389,0,1.02778],88:[0,.68333,0,0,.75],89:[0,.68333,.025,0,.75],90:[0,.68333,0,0,.61111],91:[.25,.75,0,0,.27778],92:[.25,.75,0,0,.5],93:[.25,.75,0,0,.27778],94:[0,.69444,0,0,.5],95:[.31,.12056,.02778,0,.5],97:[0,.43056,0,0,.5],98:[0,.69444,0,0,.55556],99:[0,.43056,0,0,.44445],100:[0,.69444,0,0,.55556],101:[0,.43056,0,0,.44445],102:[0,.69444,.07778,0,.30556],103:[.19444,.43056,.01389,0,.5],104:[0,.69444,0,0,.55556],105:[0,.66786,0,0,.27778],106:[.19444,.66786,0,0,.30556],107:[0,.69444,0,0,.52778],108:[0,.69444,0,0,.27778],109:[0,.43056,0,0,.83334],110:[0,.43056,0,0,.55556],111:[0,.43056,0,0,.5],112:[.19444,.43056,0,0,.55556],113:[.19444,.43056,0,0,.52778],114:[0,.43056,0,0,.39167],115:[0,.43056,0,0,.39445],116:[0,.61508,0,0,.38889],117:[0,.43056,0,0,.55556],118:[0,.43056,.01389,0,.52778],119:[0,.43056,.01389,0,.72222],120:[0,.43056,0,0,.52778],121:[.19444,.43056,.01389,0,.52778],122:[0,.43056,0,0,.44445],123:[.25,.75,0,0,.5],124:[.25,.75,0,0,.27778],125:[.25,.75,0,0,.5],126:[.35,.31786,0,0,.5],160:[0,0,0,0,.25],163:[0,.69444,0,0,.76909],167:[.19444,.69444,0,0,.44445],168:[0,.66786,0,0,.5],172:[0,.43056,0,0,.66667],176:[0,.69444,0,0,.75],177:[.08333,.58333,0,0,.77778],182:[.19444,.69444,0,0,.61111],184:[.17014,0,0,0,.44445],198:[0,.68333,0,0,.90278],215:[.08333,.58333,0,0,.77778],216:[.04861,.73194,0,0,.77778],223:[0,.69444,0,0,.5],230:[0,.43056,0,0,.72222],247:[.08333,.58333,0,0,.77778],248:[.09722,.52778,0,0,.5],305:[0,.43056,0,0,.27778],338:[0,.68333,0,0,1.01389],339:[0,.43056,0,0,.77778],567:[.19444,.43056,0,0,.30556],710:[0,.69444,0,0,.5],711:[0,.62847,0,0,.5],713:[0,.56778,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.66786,0,0,.27778],730:[0,.69444,0,0,.75],732:[0,.66786,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.68333,0,0,.625],916:[0,.68333,0,0,.83334],920:[0,.68333,0,0,.77778],923:[0,.68333,0,0,.69445],926:[0,.68333,0,0,.66667],928:[0,.68333,0,0,.75],931:[0,.68333,0,0,.72222],933:[0,.68333,0,0,.77778],934:[0,.68333,0,0,.72222],936:[0,.68333,0,0,.77778],937:[0,.68333,0,0,.72222],8211:[0,.43056,.02778,0,.5],8212:[0,.43056,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5],8224:[.19444,.69444,0,0,.44445],8225:[.19444,.69444,0,0,.44445],8230:[0,.123,0,0,1.172],8242:[0,.55556,0,0,.275],8407:[0,.71444,.15382,0,.5],8463:[0,.68889,0,0,.54028],8465:[0,.69444,0,0,.72222],8467:[0,.69444,0,.11111,.41667],8472:[.19444,.43056,0,.11111,.63646],8476:[0,.69444,0,0,.72222],8501:[0,.69444,0,0,.61111],8592:[-.13313,.36687,0,0,1],8593:[.19444,.69444,0,0,.5],8594:[-.13313,.36687,0,0,1],8595:[.19444,.69444,0,0,.5],8596:[-.13313,.36687,0,0,1],8597:[.25,.75,0,0,.5],8598:[.19444,.69444,0,0,1],8599:[.19444,.69444,0,0,1],8600:[.19444,.69444,0,0,1],8601:[.19444,.69444,0,0,1],8614:[.011,.511,0,0,1],8617:[.011,.511,0,0,1.126],8618:[.011,.511,0,0,1.126],8636:[-.13313,.36687,0,0,1],8637:[-.13313,.36687,0,0,1],8640:[-.13313,.36687,0,0,1],8641:[-.13313,.36687,0,0,1],8652:[.011,.671,0,0,1],8656:[-.13313,.36687,0,0,1],8657:[.19444,.69444,0,0,.61111],8658:[-.13313,.36687,0,0,1],8659:[.19444,.69444,0,0,.61111],8660:[-.13313,.36687,0,0,1],8661:[.25,.75,0,0,.61111],8704:[0,.69444,0,0,.55556],8706:[0,.69444,.05556,.08334,.5309],8707:[0,.69444,0,0,.55556],8709:[.05556,.75,0,0,.5],8711:[0,.68333,0,0,.83334],8712:[.0391,.5391,0,0,.66667],8715:[.0391,.5391,0,0,.66667],8722:[.08333,.58333,0,0,.77778],8723:[.08333,.58333,0,0,.77778],8725:[.25,.75,0,0,.5],8726:[.25,.75,0,0,.5],8727:[-.03472,.46528,0,0,.5],8728:[-.05555,.44445,0,0,.5],8729:[-.05555,.44445,0,0,.5],8730:[.2,.8,0,0,.83334],8733:[0,.43056,0,0,.77778],8734:[0,.43056,0,0,1],8736:[0,.69224,0,0,.72222],8739:[.25,.75,0,0,.27778],8741:[.25,.75,0,0,.5],8743:[0,.55556,0,0,.66667],8744:[0,.55556,0,0,.66667],8745:[0,.55556,0,0,.66667],8746:[0,.55556,0,0,.66667],8747:[.19444,.69444,.11111,0,.41667],8764:[-.13313,.36687,0,0,.77778],8768:[.19444,.69444,0,0,.27778],8771:[-.03625,.46375,0,0,.77778],8773:[-.022,.589,0,0,.778],8776:[-.01688,.48312,0,0,.77778],8781:[-.03625,.46375,0,0,.77778],8784:[-.133,.673,0,0,.778],8801:[-.03625,.46375,0,0,.77778],8804:[.13597,.63597,0,0,.77778],8805:[.13597,.63597,0,0,.77778],8810:[.0391,.5391,0,0,1],8811:[.0391,.5391,0,0,1],8826:[.0391,.5391,0,0,.77778],8827:[.0391,.5391,0,0,.77778],8834:[.0391,.5391,0,0,.77778],8835:[.0391,.5391,0,0,.77778],8838:[.13597,.63597,0,0,.77778],8839:[.13597,.63597,0,0,.77778],8846:[0,.55556,0,0,.66667],8849:[.13597,.63597,0,0,.77778],8850:[.13597,.63597,0,0,.77778],8851:[0,.55556,0,0,.66667],8852:[0,.55556,0,0,.66667],8853:[.08333,.58333,0,0,.77778],8854:[.08333,.58333,0,0,.77778],8855:[.08333,.58333,0,0,.77778],8856:[.08333,.58333,0,0,.77778],8857:[.08333,.58333,0,0,.77778],8866:[0,.69444,0,0,.61111],8867:[0,.69444,0,0,.61111],8868:[0,.69444,0,0,.77778],8869:[0,.69444,0,0,.77778],8872:[.249,.75,0,0,.867],8900:[-.05555,.44445,0,0,.5],8901:[-.05555,.44445,0,0,.27778],8902:[-.03472,.46528,0,0,.5],8904:[.005,.505,0,0,.9],8942:[.03,.903,0,0,.278],8943:[-.19,.313,0,0,1.172],8945:[-.1,.823,0,0,1.282],8968:[.25,.75,0,0,.44445],8969:[.25,.75,0,0,.44445],8970:[.25,.75,0,0,.44445],8971:[.25,.75,0,0,.44445],8994:[-.14236,.35764,0,0,1],8995:[-.14236,.35764,0,0,1],9136:[.244,.744,0,0,.412],9137:[.244,.745,0,0,.412],9651:[.19444,.69444,0,0,.88889],9657:[-.03472,.46528,0,0,.5],9661:[.19444,.69444,0,0,.88889],9667:[-.03472,.46528,0,0,.5],9711:[.19444,.69444,0,0,1],9824:[.12963,.69444,0,0,.77778],9825:[.12963,.69444,0,0,.77778],9826:[.12963,.69444,0,0,.77778],9827:[.12963,.69444,0,0,.77778],9837:[0,.75,0,0,.38889],9838:[.19444,.69444,0,0,.38889],9839:[.19444,.69444,0,0,.38889],10216:[.25,.75,0,0,.38889],10217:[.25,.75,0,0,.38889],10222:[.244,.744,0,0,.412],10223:[.244,.745,0,0,.412],10229:[.011,.511,0,0,1.609],10230:[.011,.511,0,0,1.638],10231:[.011,.511,0,0,1.859],10232:[.024,.525,0,0,1.609],10233:[.024,.525,0,0,1.638],10234:[.024,.525,0,0,1.858],10236:[.011,.511,0,0,1.638],10815:[0,.68333,0,0,.75],10927:[.13597,.63597,0,0,.77778],10928:[.13597,.63597,0,0,.77778],57376:[.19444,.69444,0,0,0]},"Math-BoldItalic":{32:[0,0,0,0,.25],48:[0,.44444,0,0,.575],49:[0,.44444,0,0,.575],50:[0,.44444,0,0,.575],51:[.19444,.44444,0,0,.575],52:[.19444,.44444,0,0,.575],53:[.19444,.44444,0,0,.575],54:[0,.64444,0,0,.575],55:[.19444,.44444,0,0,.575],56:[0,.64444,0,0,.575],57:[.19444,.44444,0,0,.575],65:[0,.68611,0,0,.86944],66:[0,.68611,.04835,0,.8664],67:[0,.68611,.06979,0,.81694],68:[0,.68611,.03194,0,.93812],69:[0,.68611,.05451,0,.81007],70:[0,.68611,.15972,0,.68889],71:[0,.68611,0,0,.88673],72:[0,.68611,.08229,0,.98229],73:[0,.68611,.07778,0,.51111],74:[0,.68611,.10069,0,.63125],75:[0,.68611,.06979,0,.97118],76:[0,.68611,0,0,.75555],77:[0,.68611,.11424,0,1.14201],78:[0,.68611,.11424,0,.95034],79:[0,.68611,.03194,0,.83666],80:[0,.68611,.15972,0,.72309],81:[.19444,.68611,0,0,.86861],82:[0,.68611,.00421,0,.87235],83:[0,.68611,.05382,0,.69271],84:[0,.68611,.15972,0,.63663],85:[0,.68611,.11424,0,.80027],86:[0,.68611,.25555,0,.67778],87:[0,.68611,.15972,0,1.09305],88:[0,.68611,.07778,0,.94722],89:[0,.68611,.25555,0,.67458],90:[0,.68611,.06979,0,.77257],97:[0,.44444,0,0,.63287],98:[0,.69444,0,0,.52083],99:[0,.44444,0,0,.51342],100:[0,.69444,0,0,.60972],101:[0,.44444,0,0,.55361],102:[.19444,.69444,.11042,0,.56806],103:[.19444,.44444,.03704,0,.5449],104:[0,.69444,0,0,.66759],105:[0,.69326,0,0,.4048],106:[.19444,.69326,.0622,0,.47083],107:[0,.69444,.01852,0,.6037],108:[0,.69444,.0088,0,.34815],109:[0,.44444,0,0,1.0324],110:[0,.44444,0,0,.71296],111:[0,.44444,0,0,.58472],112:[.19444,.44444,0,0,.60092],113:[.19444,.44444,.03704,0,.54213],114:[0,.44444,.03194,0,.5287],115:[0,.44444,0,0,.53125],116:[0,.63492,0,0,.41528],117:[0,.44444,0,0,.68102],118:[0,.44444,.03704,0,.56666],119:[0,.44444,.02778,0,.83148],120:[0,.44444,0,0,.65903],121:[.19444,.44444,.03704,0,.59028],122:[0,.44444,.04213,0,.55509],160:[0,0,0,0,.25],915:[0,.68611,.15972,0,.65694],916:[0,.68611,0,0,.95833],920:[0,.68611,.03194,0,.86722],923:[0,.68611,0,0,.80555],926:[0,.68611,.07458,0,.84125],928:[0,.68611,.08229,0,.98229],931:[0,.68611,.05451,0,.88507],933:[0,.68611,.15972,0,.67083],934:[0,.68611,0,0,.76666],936:[0,.68611,.11653,0,.71402],937:[0,.68611,.04835,0,.8789],945:[0,.44444,0,0,.76064],946:[.19444,.69444,.03403,0,.65972],947:[.19444,.44444,.06389,0,.59003],948:[0,.69444,.03819,0,.52222],949:[0,.44444,0,0,.52882],950:[.19444,.69444,.06215,0,.50833],951:[.19444,.44444,.03704,0,.6],952:[0,.69444,.03194,0,.5618],953:[0,.44444,0,0,.41204],954:[0,.44444,0,0,.66759],955:[0,.69444,0,0,.67083],956:[.19444,.44444,0,0,.70787],957:[0,.44444,.06898,0,.57685],958:[.19444,.69444,.03021,0,.50833],959:[0,.44444,0,0,.58472],960:[0,.44444,.03704,0,.68241],961:[.19444,.44444,0,0,.6118],962:[.09722,.44444,.07917,0,.42361],963:[0,.44444,.03704,0,.68588],964:[0,.44444,.13472,0,.52083],965:[0,.44444,.03704,0,.63055],966:[.19444,.44444,0,0,.74722],967:[.19444,.44444,0,0,.71805],968:[.19444,.69444,.03704,0,.75833],969:[0,.44444,.03704,0,.71782],977:[0,.69444,0,0,.69155],981:[.19444,.69444,0,0,.7125],982:[0,.44444,.03194,0,.975],1009:[.19444,.44444,0,0,.6118],1013:[0,.44444,0,0,.48333],57649:[0,.44444,0,0,.39352],57911:[.19444,.44444,0,0,.43889]},"Math-Italic":{32:[0,0,0,0,.25],48:[0,.43056,0,0,.5],49:[0,.43056,0,0,.5],50:[0,.43056,0,0,.5],51:[.19444,.43056,0,0,.5],52:[.19444,.43056,0,0,.5],53:[.19444,.43056,0,0,.5],54:[0,.64444,0,0,.5],55:[.19444,.43056,0,0,.5],56:[0,.64444,0,0,.5],57:[.19444,.43056,0,0,.5],65:[0,.68333,0,.13889,.75],66:[0,.68333,.05017,.08334,.75851],67:[0,.68333,.07153,.08334,.71472],68:[0,.68333,.02778,.05556,.82792],69:[0,.68333,.05764,.08334,.7382],70:[0,.68333,.13889,.08334,.64306],71:[0,.68333,0,.08334,.78625],72:[0,.68333,.08125,.05556,.83125],73:[0,.68333,.07847,.11111,.43958],74:[0,.68333,.09618,.16667,.55451],75:[0,.68333,.07153,.05556,.84931],76:[0,.68333,0,.02778,.68056],77:[0,.68333,.10903,.08334,.97014],78:[0,.68333,.10903,.08334,.80347],79:[0,.68333,.02778,.08334,.76278],80:[0,.68333,.13889,.08334,.64201],81:[.19444,.68333,0,.08334,.79056],82:[0,.68333,.00773,.08334,.75929],83:[0,.68333,.05764,.08334,.6132],84:[0,.68333,.13889,.08334,.58438],85:[0,.68333,.10903,.02778,.68278],86:[0,.68333,.22222,0,.58333],87:[0,.68333,.13889,0,.94445],88:[0,.68333,.07847,.08334,.82847],89:[0,.68333,.22222,0,.58056],90:[0,.68333,.07153,.08334,.68264],97:[0,.43056,0,0,.52859],98:[0,.69444,0,0,.42917],99:[0,.43056,0,.05556,.43276],100:[0,.69444,0,.16667,.52049],101:[0,.43056,0,.05556,.46563],102:[.19444,.69444,.10764,.16667,.48959],103:[.19444,.43056,.03588,.02778,.47697],104:[0,.69444,0,0,.57616],105:[0,.65952,0,0,.34451],106:[.19444,.65952,.05724,0,.41181],107:[0,.69444,.03148,0,.5206],108:[0,.69444,.01968,.08334,.29838],109:[0,.43056,0,0,.87801],110:[0,.43056,0,0,.60023],111:[0,.43056,0,.05556,.48472],112:[.19444,.43056,0,.08334,.50313],113:[.19444,.43056,.03588,.08334,.44641],114:[0,.43056,.02778,.05556,.45116],115:[0,.43056,0,.05556,.46875],116:[0,.61508,0,.08334,.36111],117:[0,.43056,0,.02778,.57246],118:[0,.43056,.03588,.02778,.48472],119:[0,.43056,.02691,.08334,.71592],120:[0,.43056,0,.02778,.57153],121:[.19444,.43056,.03588,.05556,.49028],122:[0,.43056,.04398,.05556,.46505],160:[0,0,0,0,.25],915:[0,.68333,.13889,.08334,.61528],916:[0,.68333,0,.16667,.83334],920:[0,.68333,.02778,.08334,.76278],923:[0,.68333,0,.16667,.69445],926:[0,.68333,.07569,.08334,.74236],928:[0,.68333,.08125,.05556,.83125],931:[0,.68333,.05764,.08334,.77986],933:[0,.68333,.13889,.05556,.58333],934:[0,.68333,0,.08334,.66667],936:[0,.68333,.11,.05556,.61222],937:[0,.68333,.05017,.08334,.7724],945:[0,.43056,.0037,.02778,.6397],946:[.19444,.69444,.05278,.08334,.56563],947:[.19444,.43056,.05556,0,.51773],948:[0,.69444,.03785,.05556,.44444],949:[0,.43056,0,.08334,.46632],950:[.19444,.69444,.07378,.08334,.4375],951:[.19444,.43056,.03588,.05556,.49653],952:[0,.69444,.02778,.08334,.46944],953:[0,.43056,0,.05556,.35394],954:[0,.43056,0,0,.57616],955:[0,.69444,0,0,.58334],956:[.19444,.43056,0,.02778,.60255],957:[0,.43056,.06366,.02778,.49398],958:[.19444,.69444,.04601,.11111,.4375],959:[0,.43056,0,.05556,.48472],960:[0,.43056,.03588,0,.57003],961:[.19444,.43056,0,.08334,.51702],962:[.09722,.43056,.07986,.08334,.36285],963:[0,.43056,.03588,0,.57141],964:[0,.43056,.1132,.02778,.43715],965:[0,.43056,.03588,.02778,.54028],966:[.19444,.43056,0,.08334,.65417],967:[.19444,.43056,0,.05556,.62569],968:[.19444,.69444,.03588,.11111,.65139],969:[0,.43056,.03588,0,.62245],977:[0,.69444,0,.08334,.59144],981:[.19444,.69444,0,.08334,.59583],982:[0,.43056,.02778,0,.82813],1009:[.19444,.43056,0,.08334,.51702],1013:[0,.43056,0,.05556,.4059],57649:[0,.43056,0,.02778,.32246],57911:[.19444,.43056,0,.08334,.38403]},"SansSerif-Bold":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.36667],34:[0,.69444,0,0,.55834],35:[.19444,.69444,0,0,.91667],36:[.05556,.75,0,0,.55],37:[.05556,.75,0,0,1.02912],38:[0,.69444,0,0,.83056],39:[0,.69444,0,0,.30556],40:[.25,.75,0,0,.42778],41:[.25,.75,0,0,.42778],42:[0,.75,0,0,.55],43:[.11667,.61667,0,0,.85556],44:[.10556,.13056,0,0,.30556],45:[0,.45833,0,0,.36667],46:[0,.13056,0,0,.30556],47:[.25,.75,0,0,.55],48:[0,.69444,0,0,.55],49:[0,.69444,0,0,.55],50:[0,.69444,0,0,.55],51:[0,.69444,0,0,.55],52:[0,.69444,0,0,.55],53:[0,.69444,0,0,.55],54:[0,.69444,0,0,.55],55:[0,.69444,0,0,.55],56:[0,.69444,0,0,.55],57:[0,.69444,0,0,.55],58:[0,.45833,0,0,.30556],59:[.10556,.45833,0,0,.30556],61:[-.09375,.40625,0,0,.85556],63:[0,.69444,0,0,.51945],64:[0,.69444,0,0,.73334],65:[0,.69444,0,0,.73334],66:[0,.69444,0,0,.73334],67:[0,.69444,0,0,.70278],68:[0,.69444,0,0,.79445],69:[0,.69444,0,0,.64167],70:[0,.69444,0,0,.61111],71:[0,.69444,0,0,.73334],72:[0,.69444,0,0,.79445],73:[0,.69444,0,0,.33056],74:[0,.69444,0,0,.51945],75:[0,.69444,0,0,.76389],76:[0,.69444,0,0,.58056],77:[0,.69444,0,0,.97778],78:[0,.69444,0,0,.79445],79:[0,.69444,0,0,.79445],80:[0,.69444,0,0,.70278],81:[.10556,.69444,0,0,.79445],82:[0,.69444,0,0,.70278],83:[0,.69444,0,0,.61111],84:[0,.69444,0,0,.73334],85:[0,.69444,0,0,.76389],86:[0,.69444,.01528,0,.73334],87:[0,.69444,.01528,0,1.03889],88:[0,.69444,0,0,.73334],89:[0,.69444,.0275,0,.73334],90:[0,.69444,0,0,.67223],91:[.25,.75,0,0,.34306],93:[.25,.75,0,0,.34306],94:[0,.69444,0,0,.55],95:[.35,.10833,.03056,0,.55],97:[0,.45833,0,0,.525],98:[0,.69444,0,0,.56111],99:[0,.45833,0,0,.48889],100:[0,.69444,0,0,.56111],101:[0,.45833,0,0,.51111],102:[0,.69444,.07639,0,.33611],103:[.19444,.45833,.01528,0,.55],104:[0,.69444,0,0,.56111],105:[0,.69444,0,0,.25556],106:[.19444,.69444,0,0,.28611],107:[0,.69444,0,0,.53056],108:[0,.69444,0,0,.25556],109:[0,.45833,0,0,.86667],110:[0,.45833,0,0,.56111],111:[0,.45833,0,0,.55],112:[.19444,.45833,0,0,.56111],113:[.19444,.45833,0,0,.56111],114:[0,.45833,.01528,0,.37222],115:[0,.45833,0,0,.42167],116:[0,.58929,0,0,.40417],117:[0,.45833,0,0,.56111],118:[0,.45833,.01528,0,.5],119:[0,.45833,.01528,0,.74445],120:[0,.45833,0,0,.5],121:[.19444,.45833,.01528,0,.5],122:[0,.45833,0,0,.47639],126:[.35,.34444,0,0,.55],160:[0,0,0,0,.25],168:[0,.69444,0,0,.55],176:[0,.69444,0,0,.73334],180:[0,.69444,0,0,.55],184:[.17014,0,0,0,.48889],305:[0,.45833,0,0,.25556],567:[.19444,.45833,0,0,.28611],710:[0,.69444,0,0,.55],711:[0,.63542,0,0,.55],713:[0,.63778,0,0,.55],728:[0,.69444,0,0,.55],729:[0,.69444,0,0,.30556],730:[0,.69444,0,0,.73334],732:[0,.69444,0,0,.55],733:[0,.69444,0,0,.55],915:[0,.69444,0,0,.58056],916:[0,.69444,0,0,.91667],920:[0,.69444,0,0,.85556],923:[0,.69444,0,0,.67223],926:[0,.69444,0,0,.73334],928:[0,.69444,0,0,.79445],931:[0,.69444,0,0,.79445],933:[0,.69444,0,0,.85556],934:[0,.69444,0,0,.79445],936:[0,.69444,0,0,.85556],937:[0,.69444,0,0,.79445],8211:[0,.45833,.03056,0,.55],8212:[0,.45833,.03056,0,1.10001],8216:[0,.69444,0,0,.30556],8217:[0,.69444,0,0,.30556],8220:[0,.69444,0,0,.55834],8221:[0,.69444,0,0,.55834]},"SansSerif-Italic":{32:[0,0,0,0,.25],33:[0,.69444,.05733,0,.31945],34:[0,.69444,.00316,0,.5],35:[.19444,.69444,.05087,0,.83334],36:[.05556,.75,.11156,0,.5],37:[.05556,.75,.03126,0,.83334],38:[0,.69444,.03058,0,.75834],39:[0,.69444,.07816,0,.27778],40:[.25,.75,.13164,0,.38889],41:[.25,.75,.02536,0,.38889],42:[0,.75,.11775,0,.5],43:[.08333,.58333,.02536,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,.01946,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,.13164,0,.5],48:[0,.65556,.11156,0,.5],49:[0,.65556,.11156,0,.5],50:[0,.65556,.11156,0,.5],51:[0,.65556,.11156,0,.5],52:[0,.65556,.11156,0,.5],53:[0,.65556,.11156,0,.5],54:[0,.65556,.11156,0,.5],55:[0,.65556,.11156,0,.5],56:[0,.65556,.11156,0,.5],57:[0,.65556,.11156,0,.5],58:[0,.44444,.02502,0,.27778],59:[.125,.44444,.02502,0,.27778],61:[-.13,.37,.05087,0,.77778],63:[0,.69444,.11809,0,.47222],64:[0,.69444,.07555,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,.08293,0,.66667],67:[0,.69444,.11983,0,.63889],68:[0,.69444,.07555,0,.72223],69:[0,.69444,.11983,0,.59722],70:[0,.69444,.13372,0,.56945],71:[0,.69444,.11983,0,.66667],72:[0,.69444,.08094,0,.70834],73:[0,.69444,.13372,0,.27778],74:[0,.69444,.08094,0,.47222],75:[0,.69444,.11983,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,.08094,0,.875],78:[0,.69444,.08094,0,.70834],79:[0,.69444,.07555,0,.73611],80:[0,.69444,.08293,0,.63889],81:[.125,.69444,.07555,0,.73611],82:[0,.69444,.08293,0,.64584],83:[0,.69444,.09205,0,.55556],84:[0,.69444,.13372,0,.68056],85:[0,.69444,.08094,0,.6875],86:[0,.69444,.1615,0,.66667],87:[0,.69444,.1615,0,.94445],88:[0,.69444,.13372,0,.66667],89:[0,.69444,.17261,0,.66667],90:[0,.69444,.11983,0,.61111],91:[.25,.75,.15942,0,.28889],93:[.25,.75,.08719,0,.28889],94:[0,.69444,.0799,0,.5],95:[.35,.09444,.08616,0,.5],97:[0,.44444,.00981,0,.48056],98:[0,.69444,.03057,0,.51667],99:[0,.44444,.08336,0,.44445],100:[0,.69444,.09483,0,.51667],101:[0,.44444,.06778,0,.44445],102:[0,.69444,.21705,0,.30556],103:[.19444,.44444,.10836,0,.5],104:[0,.69444,.01778,0,.51667],105:[0,.67937,.09718,0,.23889],106:[.19444,.67937,.09162,0,.26667],107:[0,.69444,.08336,0,.48889],108:[0,.69444,.09483,0,.23889],109:[0,.44444,.01778,0,.79445],110:[0,.44444,.01778,0,.51667],111:[0,.44444,.06613,0,.5],112:[.19444,.44444,.0389,0,.51667],113:[.19444,.44444,.04169,0,.51667],114:[0,.44444,.10836,0,.34167],115:[0,.44444,.0778,0,.38333],116:[0,.57143,.07225,0,.36111],117:[0,.44444,.04169,0,.51667],118:[0,.44444,.10836,0,.46111],119:[0,.44444,.10836,0,.68334],120:[0,.44444,.09169,0,.46111],121:[.19444,.44444,.10836,0,.46111],122:[0,.44444,.08752,0,.43472],126:[.35,.32659,.08826,0,.5],160:[0,0,0,0,.25],168:[0,.67937,.06385,0,.5],176:[0,.69444,0,0,.73752],184:[.17014,0,0,0,.44445],305:[0,.44444,.04169,0,.23889],567:[.19444,.44444,.04169,0,.26667],710:[0,.69444,.0799,0,.5],711:[0,.63194,.08432,0,.5],713:[0,.60889,.08776,0,.5],714:[0,.69444,.09205,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,.09483,0,.5],729:[0,.67937,.07774,0,.27778],730:[0,.69444,0,0,.73752],732:[0,.67659,.08826,0,.5],733:[0,.69444,.09205,0,.5],915:[0,.69444,.13372,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,.07555,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,.12816,0,.66667],928:[0,.69444,.08094,0,.70834],931:[0,.69444,.11983,0,.72222],933:[0,.69444,.09031,0,.77778],934:[0,.69444,.04603,0,.72222],936:[0,.69444,.09031,0,.77778],937:[0,.69444,.08293,0,.72222],8211:[0,.44444,.08616,0,.5],8212:[0,.44444,.08616,0,1],8216:[0,.69444,.07816,0,.27778],8217:[0,.69444,.07816,0,.27778],8220:[0,.69444,.14205,0,.5],8221:[0,.69444,.00316,0,.5]},"SansSerif-Regular":{32:[0,0,0,0,.25],33:[0,.69444,0,0,.31945],34:[0,.69444,0,0,.5],35:[.19444,.69444,0,0,.83334],36:[.05556,.75,0,0,.5],37:[.05556,.75,0,0,.83334],38:[0,.69444,0,0,.75834],39:[0,.69444,0,0,.27778],40:[.25,.75,0,0,.38889],41:[.25,.75,0,0,.38889],42:[0,.75,0,0,.5],43:[.08333,.58333,0,0,.77778],44:[.125,.08333,0,0,.27778],45:[0,.44444,0,0,.33333],46:[0,.08333,0,0,.27778],47:[.25,.75,0,0,.5],48:[0,.65556,0,0,.5],49:[0,.65556,0,0,.5],50:[0,.65556,0,0,.5],51:[0,.65556,0,0,.5],52:[0,.65556,0,0,.5],53:[0,.65556,0,0,.5],54:[0,.65556,0,0,.5],55:[0,.65556,0,0,.5],56:[0,.65556,0,0,.5],57:[0,.65556,0,0,.5],58:[0,.44444,0,0,.27778],59:[.125,.44444,0,0,.27778],61:[-.13,.37,0,0,.77778],63:[0,.69444,0,0,.47222],64:[0,.69444,0,0,.66667],65:[0,.69444,0,0,.66667],66:[0,.69444,0,0,.66667],67:[0,.69444,0,0,.63889],68:[0,.69444,0,0,.72223],69:[0,.69444,0,0,.59722],70:[0,.69444,0,0,.56945],71:[0,.69444,0,0,.66667],72:[0,.69444,0,0,.70834],73:[0,.69444,0,0,.27778],74:[0,.69444,0,0,.47222],75:[0,.69444,0,0,.69445],76:[0,.69444,0,0,.54167],77:[0,.69444,0,0,.875],78:[0,.69444,0,0,.70834],79:[0,.69444,0,0,.73611],80:[0,.69444,0,0,.63889],81:[.125,.69444,0,0,.73611],82:[0,.69444,0,0,.64584],83:[0,.69444,0,0,.55556],84:[0,.69444,0,0,.68056],85:[0,.69444,0,0,.6875],86:[0,.69444,.01389,0,.66667],87:[0,.69444,.01389,0,.94445],88:[0,.69444,0,0,.66667],89:[0,.69444,.025,0,.66667],90:[0,.69444,0,0,.61111],91:[.25,.75,0,0,.28889],93:[.25,.75,0,0,.28889],94:[0,.69444,0,0,.5],95:[.35,.09444,.02778,0,.5],97:[0,.44444,0,0,.48056],98:[0,.69444,0,0,.51667],99:[0,.44444,0,0,.44445],100:[0,.69444,0,0,.51667],101:[0,.44444,0,0,.44445],102:[0,.69444,.06944,0,.30556],103:[.19444,.44444,.01389,0,.5],104:[0,.69444,0,0,.51667],105:[0,.67937,0,0,.23889],106:[.19444,.67937,0,0,.26667],107:[0,.69444,0,0,.48889],108:[0,.69444,0,0,.23889],109:[0,.44444,0,0,.79445],110:[0,.44444,0,0,.51667],111:[0,.44444,0,0,.5],112:[.19444,.44444,0,0,.51667],113:[.19444,.44444,0,0,.51667],114:[0,.44444,.01389,0,.34167],115:[0,.44444,0,0,.38333],116:[0,.57143,0,0,.36111],117:[0,.44444,0,0,.51667],118:[0,.44444,.01389,0,.46111],119:[0,.44444,.01389,0,.68334],120:[0,.44444,0,0,.46111],121:[.19444,.44444,.01389,0,.46111],122:[0,.44444,0,0,.43472],126:[.35,.32659,0,0,.5],160:[0,0,0,0,.25],168:[0,.67937,0,0,.5],176:[0,.69444,0,0,.66667],184:[.17014,0,0,0,.44445],305:[0,.44444,0,0,.23889],567:[.19444,.44444,0,0,.26667],710:[0,.69444,0,0,.5],711:[0,.63194,0,0,.5],713:[0,.60889,0,0,.5],714:[0,.69444,0,0,.5],715:[0,.69444,0,0,.5],728:[0,.69444,0,0,.5],729:[0,.67937,0,0,.27778],730:[0,.69444,0,0,.66667],732:[0,.67659,0,0,.5],733:[0,.69444,0,0,.5],915:[0,.69444,0,0,.54167],916:[0,.69444,0,0,.83334],920:[0,.69444,0,0,.77778],923:[0,.69444,0,0,.61111],926:[0,.69444,0,0,.66667],928:[0,.69444,0,0,.70834],931:[0,.69444,0,0,.72222],933:[0,.69444,0,0,.77778],934:[0,.69444,0,0,.72222],936:[0,.69444,0,0,.77778],937:[0,.69444,0,0,.72222],8211:[0,.44444,.02778,0,.5],8212:[0,.44444,.02778,0,1],8216:[0,.69444,0,0,.27778],8217:[0,.69444,0,0,.27778],8220:[0,.69444,0,0,.5],8221:[0,.69444,0,0,.5]},"Script-Regular":{32:[0,0,0,0,.25],65:[0,.7,.22925,0,.80253],66:[0,.7,.04087,0,.90757],67:[0,.7,.1689,0,.66619],68:[0,.7,.09371,0,.77443],69:[0,.7,.18583,0,.56162],70:[0,.7,.13634,0,.89544],71:[0,.7,.17322,0,.60961],72:[0,.7,.29694,0,.96919],73:[0,.7,.19189,0,.80907],74:[.27778,.7,.19189,0,1.05159],75:[0,.7,.31259,0,.91364],76:[0,.7,.19189,0,.87373],77:[0,.7,.15981,0,1.08031],78:[0,.7,.3525,0,.9015],79:[0,.7,.08078,0,.73787],80:[0,.7,.08078,0,1.01262],81:[0,.7,.03305,0,.88282],82:[0,.7,.06259,0,.85],83:[0,.7,.19189,0,.86767],84:[0,.7,.29087,0,.74697],85:[0,.7,.25815,0,.79996],86:[0,.7,.27523,0,.62204],87:[0,.7,.27523,0,.80532],88:[0,.7,.26006,0,.94445],89:[0,.7,.2939,0,.70961],90:[0,.7,.24037,0,.8212],160:[0,0,0,0,.25]},"Size1-Regular":{32:[0,0,0,0,.25],40:[.35001,.85,0,0,.45834],41:[.35001,.85,0,0,.45834],47:[.35001,.85,0,0,.57778],91:[.35001,.85,0,0,.41667],92:[.35001,.85,0,0,.57778],93:[.35001,.85,0,0,.41667],123:[.35001,.85,0,0,.58334],125:[.35001,.85,0,0,.58334],160:[0,0,0,0,.25],710:[0,.72222,0,0,.55556],732:[0,.72222,0,0,.55556],770:[0,.72222,0,0,.55556],771:[0,.72222,0,0,.55556],8214:[-99e-5,.601,0,0,.77778],8593:[1e-5,.6,0,0,.66667],8595:[1e-5,.6,0,0,.66667],8657:[1e-5,.6,0,0,.77778],8659:[1e-5,.6,0,0,.77778],8719:[.25001,.75,0,0,.94445],8720:[.25001,.75,0,0,.94445],8721:[.25001,.75,0,0,1.05556],8730:[.35001,.85,0,0,1],8739:[-.00599,.606,0,0,.33333],8741:[-.00599,.606,0,0,.55556],8747:[.30612,.805,.19445,0,.47222],8748:[.306,.805,.19445,0,.47222],8749:[.306,.805,.19445,0,.47222],8750:[.30612,.805,.19445,0,.47222],8896:[.25001,.75,0,0,.83334],8897:[.25001,.75,0,0,.83334],8898:[.25001,.75,0,0,.83334],8899:[.25001,.75,0,0,.83334],8968:[.35001,.85,0,0,.47222],8969:[.35001,.85,0,0,.47222],8970:[.35001,.85,0,0,.47222],8971:[.35001,.85,0,0,.47222],9168:[-99e-5,.601,0,0,.66667],10216:[.35001,.85,0,0,.47222],10217:[.35001,.85,0,0,.47222],10752:[.25001,.75,0,0,1.11111],10753:[.25001,.75,0,0,1.11111],10754:[.25001,.75,0,0,1.11111],10756:[.25001,.75,0,0,.83334],10758:[.25001,.75,0,0,.83334]},"Size2-Regular":{32:[0,0,0,0,.25],40:[.65002,1.15,0,0,.59722],41:[.65002,1.15,0,0,.59722],47:[.65002,1.15,0,0,.81111],91:[.65002,1.15,0,0,.47222],92:[.65002,1.15,0,0,.81111],93:[.65002,1.15,0,0,.47222],123:[.65002,1.15,0,0,.66667],125:[.65002,1.15,0,0,.66667],160:[0,0,0,0,.25],710:[0,.75,0,0,1],732:[0,.75,0,0,1],770:[0,.75,0,0,1],771:[0,.75,0,0,1],8719:[.55001,1.05,0,0,1.27778],8720:[.55001,1.05,0,0,1.27778],8721:[.55001,1.05,0,0,1.44445],8730:[.65002,1.15,0,0,1],8747:[.86225,1.36,.44445,0,.55556],8748:[.862,1.36,.44445,0,.55556],8749:[.862,1.36,.44445,0,.55556],8750:[.86225,1.36,.44445,0,.55556],8896:[.55001,1.05,0,0,1.11111],8897:[.55001,1.05,0,0,1.11111],8898:[.55001,1.05,0,0,1.11111],8899:[.55001,1.05,0,0,1.11111],8968:[.65002,1.15,0,0,.52778],8969:[.65002,1.15,0,0,.52778],8970:[.65002,1.15,0,0,.52778],8971:[.65002,1.15,0,0,.52778],10216:[.65002,1.15,0,0,.61111],10217:[.65002,1.15,0,0,.61111],10752:[.55001,1.05,0,0,1.51112],10753:[.55001,1.05,0,0,1.51112],10754:[.55001,1.05,0,0,1.51112],10756:[.55001,1.05,0,0,1.11111],10758:[.55001,1.05,0,0,1.11111]},"Size3-Regular":{32:[0,0,0,0,.25],40:[.95003,1.45,0,0,.73611],41:[.95003,1.45,0,0,.73611],47:[.95003,1.45,0,0,1.04445],91:[.95003,1.45,0,0,.52778],92:[.95003,1.45,0,0,1.04445],93:[.95003,1.45,0,0,.52778],123:[.95003,1.45,0,0,.75],125:[.95003,1.45,0,0,.75],160:[0,0,0,0,.25],710:[0,.75,0,0,1.44445],732:[0,.75,0,0,1.44445],770:[0,.75,0,0,1.44445],771:[0,.75,0,0,1.44445],8730:[.95003,1.45,0,0,1],8968:[.95003,1.45,0,0,.58334],8969:[.95003,1.45,0,0,.58334],8970:[.95003,1.45,0,0,.58334],8971:[.95003,1.45,0,0,.58334],10216:[.95003,1.45,0,0,.75],10217:[.95003,1.45,0,0,.75]},"Size4-Regular":{32:[0,0,0,0,.25],40:[1.25003,1.75,0,0,.79167],41:[1.25003,1.75,0,0,.79167],47:[1.25003,1.75,0,0,1.27778],91:[1.25003,1.75,0,0,.58334],92:[1.25003,1.75,0,0,1.27778],93:[1.25003,1.75,0,0,.58334],123:[1.25003,1.75,0,0,.80556],125:[1.25003,1.75,0,0,.80556],160:[0,0,0,0,.25],710:[0,.825,0,0,1.8889],732:[0,.825,0,0,1.8889],770:[0,.825,0,0,1.8889],771:[0,.825,0,0,1.8889],8730:[1.25003,1.75,0,0,1],8968:[1.25003,1.75,0,0,.63889],8969:[1.25003,1.75,0,0,.63889],8970:[1.25003,1.75,0,0,.63889],8971:[1.25003,1.75,0,0,.63889],9115:[.64502,1.155,0,0,.875],9116:[1e-5,.6,0,0,.875],9117:[.64502,1.155,0,0,.875],9118:[.64502,1.155,0,0,.875],9119:[1e-5,.6,0,0,.875],9120:[.64502,1.155,0,0,.875],9121:[.64502,1.155,0,0,.66667],9122:[-99e-5,.601,0,0,.66667],9123:[.64502,1.155,0,0,.66667],9124:[.64502,1.155,0,0,.66667],9125:[-99e-5,.601,0,0,.66667],9126:[.64502,1.155,0,0,.66667],9127:[1e-5,.9,0,0,.88889],9128:[.65002,1.15,0,0,.88889],9129:[.90001,0,0,0,.88889],9130:[0,.3,0,0,.88889],9131:[1e-5,.9,0,0,.88889],9132:[.65002,1.15,0,0,.88889],9133:[.90001,0,0,0,.88889],9143:[.88502,.915,0,0,1.05556],10216:[1.25003,1.75,0,0,.80556],10217:[1.25003,1.75,0,0,.80556],57344:[-.00499,.605,0,0,1.05556],57345:[-.00499,.605,0,0,1.05556],57680:[0,.12,0,0,.45],57681:[0,.12,0,0,.45],57682:[0,.12,0,0,.45],57683:[0,.12,0,0,.45]},"Typewriter-Regular":{32:[0,0,0,0,.525],33:[0,.61111,0,0,.525],34:[0,.61111,0,0,.525],35:[0,.61111,0,0,.525],36:[.08333,.69444,0,0,.525],37:[.08333,.69444,0,0,.525],38:[0,.61111,0,0,.525],39:[0,.61111,0,0,.525],40:[.08333,.69444,0,0,.525],41:[.08333,.69444,0,0,.525],42:[0,.52083,0,0,.525],43:[-.08056,.53055,0,0,.525],44:[.13889,.125,0,0,.525],45:[-.08056,.53055,0,0,.525],46:[0,.125,0,0,.525],47:[.08333,.69444,0,0,.525],48:[0,.61111,0,0,.525],49:[0,.61111,0,0,.525],50:[0,.61111,0,0,.525],51:[0,.61111,0,0,.525],52:[0,.61111,0,0,.525],53:[0,.61111,0,0,.525],54:[0,.61111,0,0,.525],55:[0,.61111,0,0,.525],56:[0,.61111,0,0,.525],57:[0,.61111,0,0,.525],58:[0,.43056,0,0,.525],59:[.13889,.43056,0,0,.525],60:[-.05556,.55556,0,0,.525],61:[-.19549,.41562,0,0,.525],62:[-.05556,.55556,0,0,.525],63:[0,.61111,0,0,.525],64:[0,.61111,0,0,.525],65:[0,.61111,0,0,.525],66:[0,.61111,0,0,.525],67:[0,.61111,0,0,.525],68:[0,.61111,0,0,.525],69:[0,.61111,0,0,.525],70:[0,.61111,0,0,.525],71:[0,.61111,0,0,.525],72:[0,.61111,0,0,.525],73:[0,.61111,0,0,.525],74:[0,.61111,0,0,.525],75:[0,.61111,0,0,.525],76:[0,.61111,0,0,.525],77:[0,.61111,0,0,.525],78:[0,.61111,0,0,.525],79:[0,.61111,0,0,.525],80:[0,.61111,0,0,.525],81:[.13889,.61111,0,0,.525],82:[0,.61111,0,0,.525],83:[0,.61111,0,0,.525],84:[0,.61111,0,0,.525],85:[0,.61111,0,0,.525],86:[0,.61111,0,0,.525],87:[0,.61111,0,0,.525],88:[0,.61111,0,0,.525],89:[0,.61111,0,0,.525],90:[0,.61111,0,0,.525],91:[.08333,.69444,0,0,.525],92:[.08333,.69444,0,0,.525],93:[.08333,.69444,0,0,.525],94:[0,.61111,0,0,.525],95:[.09514,0,0,0,.525],96:[0,.61111,0,0,.525],97:[0,.43056,0,0,.525],98:[0,.61111,0,0,.525],99:[0,.43056,0,0,.525],100:[0,.61111,0,0,.525],101:[0,.43056,0,0,.525],102:[0,.61111,0,0,.525],103:[.22222,.43056,0,0,.525],104:[0,.61111,0,0,.525],105:[0,.61111,0,0,.525],106:[.22222,.61111,0,0,.525],107:[0,.61111,0,0,.525],108:[0,.61111,0,0,.525],109:[0,.43056,0,0,.525],110:[0,.43056,0,0,.525],111:[0,.43056,0,0,.525],112:[.22222,.43056,0,0,.525],113:[.22222,.43056,0,0,.525],114:[0,.43056,0,0,.525],115:[0,.43056,0,0,.525],116:[0,.55358,0,0,.525],117:[0,.43056,0,0,.525],118:[0,.43056,0,0,.525],119:[0,.43056,0,0,.525],120:[0,.43056,0,0,.525],121:[.22222,.43056,0,0,.525],122:[0,.43056,0,0,.525],123:[.08333,.69444,0,0,.525],124:[.08333,.69444,0,0,.525],125:[.08333,.69444,0,0,.525],126:[0,.61111,0,0,.525],127:[0,.61111,0,0,.525],160:[0,0,0,0,.525],176:[0,.61111,0,0,.525],184:[.19445,0,0,0,.525],305:[0,.43056,0,0,.525],567:[.22222,.43056,0,0,.525],711:[0,.56597,0,0,.525],713:[0,.56555,0,0,.525],714:[0,.61111,0,0,.525],715:[0,.61111,0,0,.525],728:[0,.61111,0,0,.525],730:[0,.61111,0,0,.525],770:[0,.61111,0,0,.525],771:[0,.61111,0,0,.525],776:[0,.61111,0,0,.525],915:[0,.61111,0,0,.525],916:[0,.61111,0,0,.525],920:[0,.61111,0,0,.525],923:[0,.61111,0,0,.525],926:[0,.61111,0,0,.525],928:[0,.61111,0,0,.525],931:[0,.61111,0,0,.525],933:[0,.61111,0,0,.525],934:[0,.61111,0,0,.525],936:[0,.61111,0,0,.525],937:[0,.61111,0,0,.525],8216:[0,.61111,0,0,.525],8217:[0,.61111,0,0,.525],8242:[0,.61111,0,0,.525],9251:[.11111,.21944,0,0,.525]}},Bs={slant:[.25,.25,.25],space:[0,0,0],stretch:[0,0,0],shrink:[0,0,0],xHeight:[.431,.431,.431],quad:[1,1.171,1.472],extraSpace:[0,0,0],num1:[.677,.732,.925],num2:[.394,.384,.387],num3:[.444,.471,.504],denom1:[.686,.752,1.025],denom2:[.345,.344,.532],sup1:[.413,.503,.504],sup2:[.363,.431,.404],sup3:[.289,.286,.294],sub1:[.15,.143,.2],sub2:[.247,.286,.4],supDrop:[.386,.353,.494],subDrop:[.05,.071,.1],delim1:[2.39,1.7,1.98],delim2:[1.01,1.157,1.42],axisHeight:[.25,.25,.25],defaultRuleThickness:[.04,.049,.049],bigOpSpacing1:[.111,.111,.111],bigOpSpacing2:[.166,.166,.166],bigOpSpacing3:[.2,.2,.2],bigOpSpacing4:[.6,.611,.611],bigOpSpacing5:[.1,.143,.143],sqrtRuleThickness:[.04,.04,.04],ptPerEm:[10,10,10],doubleRuleSep:[.2,.2,.2],arrayRuleWidth:[.04,.04,.04],fboxsep:[.3,.3,.3],fboxrule:[.04,.04,.04]},Ef={Å:"A",Ð:"D",Þ:"o",å:"a",ð:"d",þ:"o",А:"A",Б:"B",В:"B",Г:"F",Д:"A",Е:"E",Ж:"K",З:"3",И:"N",Й:"N",К:"K",Л:"N",М:"M",Н:"H",О:"O",П:"N",Р:"P",С:"C",Т:"T",У:"y",Ф:"O",Х:"X",Ц:"U",Ч:"h",Ш:"W",Щ:"W",Ъ:"B",Ы:"X",Ь:"B",Э:"3",Ю:"X",Я:"R",а:"a",б:"b",в:"a",г:"r",д:"y",е:"e",ж:"m",з:"e",и:"n",й:"n",к:"n",л:"n",м:"m",н:"n",о:"o",п:"n",р:"p",с:"c",т:"o",у:"y",ф:"b",х:"x",ц:"n",ч:"n",ш:"w",щ:"w",ъ:"a",ы:"m",ь:"a",э:"e",ю:"m",я:"r"};function pD(e,n){Nr[e]=n}function uh(e,n,t){if(!Nr[n])throw new Error("Font metrics not found for font: "+n+".");var i=e.charCodeAt(0),l=Nr[n][i];if(!l&&e[0]in Ef&&(i=Ef[e[0]].charCodeAt(0),l=Nr[n][i]),!l&&t==="text"&&l4(i)&&(l=Nr[n][77]),l)return{depth:l[0],height:l[1],italic:l[2],skew:l[3],width:l[4]}}var Ic={};function dD(e){var n;if(e>=5?n=0:e>=3?n=1:n=2,!Ic[n]){var t=Ic[n]={cssEmPerMu:Bs.quad[n]/18};for(var i in Bs)Bs.hasOwnProperty(i)&&(t[i]=Bs[i][n])}return Ic[n]}var fD=[[1,1,1],[2,1,1],[3,1,1],[4,2,1],[5,2,1],[6,3,1],[7,4,2],[8,6,3],[9,7,6],[10,8,7],[11,10,9]],Tf=[.5,.6,.7,.8,.9,1,1.2,1.44,1.728,2.074,2.488],zf=function(n,t){return t.size<2?n:fD[n-1][t.size-1]};class ri{constructor(n){this.style=void 0,this.color=void 0,this.size=void 0,this.textSize=void 0,this.phantom=void 0,this.font=void 0,this.fontFamily=void 0,this.fontWeight=void 0,this.fontShape=void 0,this.sizeMultiplier=void 0,this.maxSize=void 0,this.minRuleThickness=void 0,this._fontMetrics=void 0,this.style=n.style,this.color=n.color,this.size=n.size||ri.BASESIZE,this.textSize=n.textSize||this.size,this.phantom=!!n.phantom,this.font=n.font||"",this.fontFamily=n.fontFamily||"",this.fontWeight=n.fontWeight||"",this.fontShape=n.fontShape||"",this.sizeMultiplier=Tf[this.size-1],this.maxSize=n.maxSize,this.minRuleThickness=n.minRuleThickness,this._fontMetrics=void 0}extend(n){var t={style:this.style,size:this.size,textSize:this.textSize,color:this.color,phantom:this.phantom,font:this.font,fontFamily:this.fontFamily,fontWeight:this.fontWeight,fontShape:this.fontShape,maxSize:this.maxSize,minRuleThickness:this.minRuleThickness};for(var i in n)n.hasOwnProperty(i)&&(t[i]=n[i]);return new ri(t)}havingStyle(n){return this.style===n?this:this.extend({style:n,size:zf(this.textSize,n)})}havingCrampedStyle(){return this.havingStyle(this.style.cramp())}havingSize(n){return this.size===n&&this.textSize===n?this:this.extend({style:this.style.text(),size:n,textSize:n,sizeMultiplier:Tf[n-1]})}havingBaseStyle(n){n=n||this.style.text();var t=zf(ri.BASESIZE,n);return this.size===t&&this.textSize===ri.BASESIZE&&this.style===n?this:this.extend({style:n,size:t})}havingBaseSizing(){var n;switch(this.style.id){case 4:case 5:n=3;break;case 6:case 7:n=1;break;default:n=6}return this.extend({style:this.style.text(),size:n})}withColor(n){return this.extend({color:n})}withPhantom(){return this.extend({phantom:!0})}withFont(n){return this.extend({font:n})}withTextFontFamily(n){return this.extend({fontFamily:n,font:""})}withTextFontWeight(n){return this.extend({fontWeight:n,font:""})}withTextFontShape(n){return this.extend({fontShape:n,font:""})}sizingClasses(n){return n.size!==this.size?["sizing","reset-size"+n.size,"size"+this.size]:[]}baseSizingClasses(){return this.size!==ri.BASESIZE?["sizing","reset-size"+this.size,"size"+ri.BASESIZE]:[]}fontMetrics(){return this._fontMetrics||(this._fontMetrics=dD(this.size)),this._fontMetrics}getColor(){return this.phantom?"transparent":this.color}}ri.BASESIZE=6;var f1={pt:1,mm:7227/2540,cm:7227/254,in:72.27,bp:803/800,pc:12,dd:1238/1157,cc:14856/1157,nd:685/642,nc:1370/107,sp:1/65536,px:803/800},gD={ex:!0,em:!0,mu:!0},o4=function(n){return typeof n!="string"&&(n=n.unit),n in f1||n in gD||n==="ex"},Ln=function(n,t){var i;if(n.unit in f1)i=f1[n.unit]/t.fontMetrics().ptPerEm/t.sizeMultiplier;else if(n.unit==="mu")i=t.fontMetrics().cssEmPerMu;else{var l;if(t.style.isTight()?l=t.havingStyle(t.style.text()):l=t,n.unit==="ex")i=l.fontMetrics().xHeight;else if(n.unit==="em")i=l.fontMetrics().quad;else throw new de("Invalid unit: '"+n.unit+"'");l!==t&&(i*=l.sizeMultiplier/t.sizeMultiplier)}return Math.min(n.number*i,t.maxSize)},we=function(n){return+n.toFixed(4)+"em"},Oi=function(n){return n.filter(t=>t).join(" ")},s4=function(n,t,i){if(this.classes=n||[],this.attributes={},this.height=0,this.depth=0,this.maxFontSize=0,this.style=i||{},t){t.style.isTight()&&this.classes.push("mtight");var l=t.getColor();l&&(this.style.color=l)}},u4=function(n){var t=document.createElement(n);t.className=Oi(this.classes);for(var i in this.style)this.style.hasOwnProperty(i)&&(t.style[i]=this.style[i]);for(var l in this.attributes)this.attributes.hasOwnProperty(l)&&t.setAttribute(l,this.attributes[l]);for(var o=0;o<this.children.length;o++)t.appendChild(this.children[o].toNode());return t},vD=/[\s"'>/=\x00-\x1f]/,c4=function(n){var t="<"+n;this.classes.length&&(t+=' class="'+pt(Oi(this.classes))+'"');var i="";for(var l in this.style)this.style.hasOwnProperty(l)&&(i+=lh(l)+":"+this.style[l]+";");i&&(t+=' style="'+pt(i)+'"');for(var o in this.attributes)if(this.attributes.hasOwnProperty(o)){if(vD.test(o))throw new de("Invalid attribute name '"+o+"'");t+=" "+o+'="'+pt(this.attributes[o])+'"'}t+=">";for(var s=0;s<this.children.length;s++)t+=this.children[s].toMarkup();return t+="</"+n+">",t};class Eo{constructor(n,t,i,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.width=void 0,this.maxFontSize=void 0,this.style=void 0,s4.call(this,n,i,l),this.children=t||[]}setAttribute(n,t){this.attributes[n]=t}hasClass(n){return this.classes.includes(n)}toNode(){return u4.call(this,"span")}toMarkup(){return c4.call(this,"span")}}class ch{constructor(n,t,i,l){this.children=void 0,this.attributes=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,s4.call(this,t,l),this.children=i||[],this.setAttribute("href",n)}setAttribute(n,t){this.attributes[n]=t}hasClass(n){return this.classes.includes(n)}toNode(){return u4.call(this,"a")}toMarkup(){return c4.call(this,"a")}}class yD{constructor(n,t,i){this.src=void 0,this.alt=void 0,this.classes=void 0,this.height=void 0,this.depth=void 0,this.maxFontSize=void 0,this.style=void 0,this.alt=t,this.src=n,this.classes=["mord"],this.style=i}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createElement("img");n.src=this.src,n.alt=this.alt,n.className="mord";for(var t in this.style)this.style.hasOwnProperty(t)&&(n.style[t]=this.style[t]);return n}toMarkup(){var n='<img src="'+pt(this.src)+'"'+(' alt="'+pt(this.alt)+'"'),t="";for(var i in this.style)this.style.hasOwnProperty(i)&&(t+=lh(i)+":"+this.style[i]+";");return t&&(n+=' style="'+pt(t)+'"'),n+="'/>",n}}var bD={î:"ı̂",ï:"ı̈",í:"ı́",ì:"ı̀"};class hr{constructor(n,t,i,l,o,s,c,h){this.text=void 0,this.height=void 0,this.depth=void 0,this.italic=void 0,this.skew=void 0,this.width=void 0,this.maxFontSize=void 0,this.classes=void 0,this.style=void 0,this.text=n,this.height=t||0,this.depth=i||0,this.italic=l||0,this.skew=o||0,this.width=s||0,this.classes=c||[],this.style=h||{},this.maxFontSize=0;var p=tD(this.text.charCodeAt(0));p&&this.classes.push(p+"_fallback"),/[îïíì]/.test(this.text)&&(this.text=bD[this.text])}hasClass(n){return this.classes.includes(n)}toNode(){var n=document.createTextNode(this.text),t=null;this.italic>0&&(t=document.createElement("span"),t.style.marginRight=we(this.italic)),this.classes.length>0&&(t=t||document.createElement("span"),t.className=Oi(this.classes));for(var i in this.style)this.style.hasOwnProperty(i)&&(t=t||document.createElement("span"),t.style[i]=this.style[i]);return t?(t.appendChild(n),t):n}toMarkup(){var n=!1,t="<span";this.classes.length&&(n=!0,t+=' class="',t+=pt(Oi(this.classes)),t+='"');var i="";this.italic>0&&(i+="margin-right:"+this.italic+"em;");for(var l in this.style)this.style.hasOwnProperty(l)&&(i+=lh(l)+":"+this.style[l]+";");i&&(n=!0,t+=' style="'+pt(i)+'"');var o=pt(this.text);return n?(t+=">",t+=o,t+="</span>",t):o}}class ai{constructor(n,t){this.children=void 0,this.attributes=void 0,this.children=n||[],this.attributes=t||{}}toNode(){var n="http://www.w3.org/2000/svg",t=document.createElementNS(n,"svg");for(var i in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,i)&&t.setAttribute(i,this.attributes[i]);for(var l=0;l<this.children.length;l++)t.appendChild(this.children[l].toNode());return t}toMarkup(){var n='<svg xmlns="http://www.w3.org/2000/svg"';for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(n+=" "+t+'="'+pt(this.attributes[t])+'"');n+=">";for(var i=0;i<this.children.length;i++)n+=this.children[i].toMarkup();return n+="</svg>",n}}class Bi{constructor(n,t){this.pathName=void 0,this.alternate=void 0,this.pathName=n,this.alternate=t}toNode(){var n="http://www.w3.org/2000/svg",t=document.createElementNS(n,"path");return this.alternate?t.setAttribute("d",this.alternate):t.setAttribute("d",Mf[this.pathName]),t}toMarkup(){return this.alternate?'<path d="'+pt(this.alternate)+'"/>':'<path d="'+pt(Mf[this.pathName])+'"/>'}}class g1{constructor(n){this.attributes=void 0,this.attributes=n||{}}toNode(){var n="http://www.w3.org/2000/svg",t=document.createElementNS(n,"line");for(var i in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,i)&&t.setAttribute(i,this.attributes[i]);return t}toMarkup(){var n="<line";for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(n+=" "+t+'="'+pt(this.attributes[t])+'"');return n+="/>",n}}function Af(e){if(e instanceof hr)return e;throw new Error("Expected symbolNode but got "+String(e)+".")}function wD(e){if(e instanceof Eo)return e;throw new Error("Expected span<HtmlDomNode> but got "+String(e)+".")}var xD={bin:1,close:1,inner:1,open:1,punct:1,rel:1},kD={"accent-token":1,mathord:1,"op-token":1,spacing:1,textord:1},Dn={math:{},text:{}};function v(e,n,t,i,l,o){Dn[e][l]={font:n,group:t,replace:i},o&&i&&(Dn[e][i]=Dn[e][l])}var x="math",se="text",k="main",N="ams",Tn="accent-token",_e="bin",_t="close",ol="inner",Ue="mathord",Vn="op-token",Qt="open",w0="punct",L="rel",si="spacing",B="textord";v(x,k,L,"≡","\\equiv",!0);v(x,k,L,"≺","\\prec",!0);v(x,k,L,"≻","\\succ",!0);v(x,k,L,"∼","\\sim",!0);v(x,k,L,"⊥","\\perp");v(x,k,L,"⪯","\\preceq",!0);v(x,k,L,"⪰","\\succeq",!0);v(x,k,L,"≃","\\simeq",!0);v(x,k,L,"∣","\\mid",!0);v(x,k,L,"≪","\\ll",!0);v(x,k,L,"≫","\\gg",!0);v(x,k,L,"≍","\\asymp",!0);v(x,k,L,"∥","\\parallel");v(x,k,L,"⋈","\\bowtie",!0);v(x,k,L,"⌣","\\smile",!0);v(x,k,L,"⊑","\\sqsubseteq",!0);v(x,k,L,"⊒","\\sqsupseteq",!0);v(x,k,L,"≐","\\doteq",!0);v(x,k,L,"⌢","\\frown",!0);v(x,k,L,"∋","\\ni",!0);v(x,k,L,"∝","\\propto",!0);v(x,k,L,"⊢","\\vdash",!0);v(x,k,L,"⊣","\\dashv",!0);v(x,k,L,"∋","\\owns");v(x,k,w0,".","\\ldotp");v(x,k,w0,"⋅","\\cdotp");v(x,k,B,"#","\\#");v(se,k,B,"#","\\#");v(x,k,B,"&","\\&");v(se,k,B,"&","\\&");v(x,k,B,"ℵ","\\aleph",!0);v(x,k,B,"∀","\\forall",!0);v(x,k,B,"ℏ","\\hbar",!0);v(x,k,B,"∃","\\exists",!0);v(x,k,B,"∇","\\nabla",!0);v(x,k,B,"♭","\\flat",!0);v(x,k,B,"ℓ","\\ell",!0);v(x,k,B,"♮","\\natural",!0);v(x,k,B,"♣","\\clubsuit",!0);v(x,k,B,"℘","\\wp",!0);v(x,k,B,"♯","\\sharp",!0);v(x,k,B,"♢","\\diamondsuit",!0);v(x,k,B,"ℜ","\\Re",!0);v(x,k,B,"♡","\\heartsuit",!0);v(x,k,B,"ℑ","\\Im",!0);v(x,k,B,"♠","\\spadesuit",!0);v(x,k,B,"§","\\S",!0);v(se,k,B,"§","\\S");v(x,k,B,"¶","\\P",!0);v(se,k,B,"¶","\\P");v(x,k,B,"†","\\dag");v(se,k,B,"†","\\dag");v(se,k,B,"†","\\textdagger");v(x,k,B,"‡","\\ddag");v(se,k,B,"‡","\\ddag");v(se,k,B,"‡","\\textdaggerdbl");v(x,k,_t,"⎱","\\rmoustache",!0);v(x,k,Qt,"⎰","\\lmoustache",!0);v(x,k,_t,"⟯","\\rgroup",!0);v(x,k,Qt,"⟮","\\lgroup",!0);v(x,k,_e,"∓","\\mp",!0);v(x,k,_e,"⊖","\\ominus",!0);v(x,k,_e,"⊎","\\uplus",!0);v(x,k,_e,"⊓","\\sqcap",!0);v(x,k,_e,"∗","\\ast");v(x,k,_e,"⊔","\\sqcup",!0);v(x,k,_e,"◯","\\bigcirc",!0);v(x,k,_e,"∙","\\bullet",!0);v(x,k,_e,"‡","\\ddagger");v(x,k,_e,"≀","\\wr",!0);v(x,k,_e,"⨿","\\amalg");v(x,k,_e,"&","\\And");v(x,k,L,"⟵","\\longleftarrow",!0);v(x,k,L,"⇐","\\Leftarrow",!0);v(x,k,L,"⟸","\\Longleftarrow",!0);v(x,k,L,"⟶","\\longrightarrow",!0);v(x,k,L,"⇒","\\Rightarrow",!0);v(x,k,L,"⟹","\\Longrightarrow",!0);v(x,k,L,"↔","\\leftrightarrow",!0);v(x,k,L,"⟷","\\longleftrightarrow",!0);v(x,k,L,"⇔","\\Leftrightarrow",!0);v(x,k,L,"⟺","\\Longleftrightarrow",!0);v(x,k,L,"↦","\\mapsto",!0);v(x,k,L,"⟼","\\longmapsto",!0);v(x,k,L,"↗","\\nearrow",!0);v(x,k,L,"↩","\\hookleftarrow",!0);v(x,k,L,"↪","\\hookrightarrow",!0);v(x,k,L,"↘","\\searrow",!0);v(x,k,L,"↼","\\leftharpoonup",!0);v(x,k,L,"⇀","\\rightharpoonup",!0);v(x,k,L,"↙","\\swarrow",!0);v(x,k,L,"↽","\\leftharpoondown",!0);v(x,k,L,"⇁","\\rightharpoondown",!0);v(x,k,L,"↖","\\nwarrow",!0);v(x,k,L,"⇌","\\rightleftharpoons",!0);v(x,N,L,"≮","\\nless",!0);v(x,N,L,"","\\@nleqslant");v(x,N,L,"","\\@nleqq");v(x,N,L,"⪇","\\lneq",!0);v(x,N,L,"≨","\\lneqq",!0);v(x,N,L,"","\\@lvertneqq");v(x,N,L,"⋦","\\lnsim",!0);v(x,N,L,"⪉","\\lnapprox",!0);v(x,N,L,"⊀","\\nprec",!0);v(x,N,L,"⋠","\\npreceq",!0);v(x,N,L,"⋨","\\precnsim",!0);v(x,N,L,"⪹","\\precnapprox",!0);v(x,N,L,"≁","\\nsim",!0);v(x,N,L,"","\\@nshortmid");v(x,N,L,"∤","\\nmid",!0);v(x,N,L,"⊬","\\nvdash",!0);v(x,N,L,"⊭","\\nvDash",!0);v(x,N,L,"⋪","\\ntriangleleft");v(x,N,L,"⋬","\\ntrianglelefteq",!0);v(x,N,L,"⊊","\\subsetneq",!0);v(x,N,L,"","\\@varsubsetneq");v(x,N,L,"⫋","\\subsetneqq",!0);v(x,N,L,"","\\@varsubsetneqq");v(x,N,L,"≯","\\ngtr",!0);v(x,N,L,"","\\@ngeqslant");v(x,N,L,"","\\@ngeqq");v(x,N,L,"⪈","\\gneq",!0);v(x,N,L,"≩","\\gneqq",!0);v(x,N,L,"","\\@gvertneqq");v(x,N,L,"⋧","\\gnsim",!0);v(x,N,L,"⪊","\\gnapprox",!0);v(x,N,L,"⊁","\\nsucc",!0);v(x,N,L,"⋡","\\nsucceq",!0);v(x,N,L,"⋩","\\succnsim",!0);v(x,N,L,"⪺","\\succnapprox",!0);v(x,N,L,"≆","\\ncong",!0);v(x,N,L,"","\\@nshortparallel");v(x,N,L,"∦","\\nparallel",!0);v(x,N,L,"⊯","\\nVDash",!0);v(x,N,L,"⋫","\\ntriangleright");v(x,N,L,"⋭","\\ntrianglerighteq",!0);v(x,N,L,"","\\@nsupseteqq");v(x,N,L,"⊋","\\supsetneq",!0);v(x,N,L,"","\\@varsupsetneq");v(x,N,L,"⫌","\\supsetneqq",!0);v(x,N,L,"","\\@varsupsetneqq");v(x,N,L,"⊮","\\nVdash",!0);v(x,N,L,"⪵","\\precneqq",!0);v(x,N,L,"⪶","\\succneqq",!0);v(x,N,L,"","\\@nsubseteqq");v(x,N,_e,"⊴","\\unlhd");v(x,N,_e,"⊵","\\unrhd");v(x,N,L,"↚","\\nleftarrow",!0);v(x,N,L,"↛","\\nrightarrow",!0);v(x,N,L,"⇍","\\nLeftarrow",!0);v(x,N,L,"⇏","\\nRightarrow",!0);v(x,N,L,"↮","\\nleftrightarrow",!0);v(x,N,L,"⇎","\\nLeftrightarrow",!0);v(x,N,L,"△","\\vartriangle");v(x,N,B,"ℏ","\\hslash");v(x,N,B,"▽","\\triangledown");v(x,N,B,"◊","\\lozenge");v(x,N,B,"Ⓢ","\\circledS");v(x,N,B,"®","\\circledR");v(se,N,B,"®","\\circledR");v(x,N,B,"∡","\\measuredangle",!0);v(x,N,B,"∄","\\nexists");v(x,N,B,"℧","\\mho");v(x,N,B,"Ⅎ","\\Finv",!0);v(x,N,B,"⅁","\\Game",!0);v(x,N,B,"‵","\\backprime");v(x,N,B,"▲","\\blacktriangle");v(x,N,B,"▼","\\blacktriangledown");v(x,N,B,"■","\\blacksquare");v(x,N,B,"⧫","\\blacklozenge");v(x,N,B,"★","\\bigstar");v(x,N,B,"∢","\\sphericalangle",!0);v(x,N,B,"∁","\\complement",!0);v(x,N,B,"ð","\\eth",!0);v(se,k,B,"ð","ð");v(x,N,B,"╱","\\diagup");v(x,N,B,"╲","\\diagdown");v(x,N,B,"□","\\square");v(x,N,B,"□","\\Box");v(x,N,B,"◊","\\Diamond");v(x,N,B,"¥","\\yen",!0);v(se,N,B,"¥","\\yen",!0);v(x,N,B,"✓","\\checkmark",!0);v(se,N,B,"✓","\\checkmark");v(x,N,B,"ℶ","\\beth",!0);v(x,N,B,"ℸ","\\daleth",!0);v(x,N,B,"ℷ","\\gimel",!0);v(x,N,B,"ϝ","\\digamma",!0);v(x,N,B,"ϰ","\\varkappa");v(x,N,Qt,"┌","\\@ulcorner",!0);v(x,N,_t,"┐","\\@urcorner",!0);v(x,N,Qt,"└","\\@llcorner",!0);v(x,N,_t,"┘","\\@lrcorner",!0);v(x,N,L,"≦","\\leqq",!0);v(x,N,L,"⩽","\\leqslant",!0);v(x,N,L,"⪕","\\eqslantless",!0);v(x,N,L,"≲","\\lesssim",!0);v(x,N,L,"⪅","\\lessapprox",!0);v(x,N,L,"≊","\\approxeq",!0);v(x,N,_e,"⋖","\\lessdot");v(x,N,L,"⋘","\\lll",!0);v(x,N,L,"≶","\\lessgtr",!0);v(x,N,L,"⋚","\\lesseqgtr",!0);v(x,N,L,"⪋","\\lesseqqgtr",!0);v(x,N,L,"≑","\\doteqdot");v(x,N,L,"≓","\\risingdotseq",!0);v(x,N,L,"≒","\\fallingdotseq",!0);v(x,N,L,"∽","\\backsim",!0);v(x,N,L,"⋍","\\backsimeq",!0);v(x,N,L,"⫅","\\subseteqq",!0);v(x,N,L,"⋐","\\Subset",!0);v(x,N,L,"⊏","\\sqsubset",!0);v(x,N,L,"≼","\\preccurlyeq",!0);v(x,N,L,"⋞","\\curlyeqprec",!0);v(x,N,L,"≾","\\precsim",!0);v(x,N,L,"⪷","\\precapprox",!0);v(x,N,L,"⊲","\\vartriangleleft");v(x,N,L,"⊴","\\trianglelefteq");v(x,N,L,"⊨","\\vDash",!0);v(x,N,L,"⊪","\\Vvdash",!0);v(x,N,L,"⌣","\\smallsmile");v(x,N,L,"⌢","\\smallfrown");v(x,N,L,"≏","\\bumpeq",!0);v(x,N,L,"≎","\\Bumpeq",!0);v(x,N,L,"≧","\\geqq",!0);v(x,N,L,"⩾","\\geqslant",!0);v(x,N,L,"⪖","\\eqslantgtr",!0);v(x,N,L,"≳","\\gtrsim",!0);v(x,N,L,"⪆","\\gtrapprox",!0);v(x,N,_e,"⋗","\\gtrdot");v(x,N,L,"⋙","\\ggg",!0);v(x,N,L,"≷","\\gtrless",!0);v(x,N,L,"⋛","\\gtreqless",!0);v(x,N,L,"⪌","\\gtreqqless",!0);v(x,N,L,"≖","\\eqcirc",!0);v(x,N,L,"≗","\\circeq",!0);v(x,N,L,"≜","\\triangleq",!0);v(x,N,L,"∼","\\thicksim");v(x,N,L,"≈","\\thickapprox");v(x,N,L,"⫆","\\supseteqq",!0);v(x,N,L,"⋑","\\Supset",!0);v(x,N,L,"⊐","\\sqsupset",!0);v(x,N,L,"≽","\\succcurlyeq",!0);v(x,N,L,"⋟","\\curlyeqsucc",!0);v(x,N,L,"≿","\\succsim",!0);v(x,N,L,"⪸","\\succapprox",!0);v(x,N,L,"⊳","\\vartriangleright");v(x,N,L,"⊵","\\trianglerighteq");v(x,N,L,"⊩","\\Vdash",!0);v(x,N,L,"∣","\\shortmid");v(x,N,L,"∥","\\shortparallel");v(x,N,L,"≬","\\between",!0);v(x,N,L,"⋔","\\pitchfork",!0);v(x,N,L,"∝","\\varpropto");v(x,N,L,"◀","\\blacktriangleleft");v(x,N,L,"∴","\\therefore",!0);v(x,N,L,"∍","\\backepsilon");v(x,N,L,"▶","\\blacktriangleright");v(x,N,L,"∵","\\because",!0);v(x,N,L,"⋘","\\llless");v(x,N,L,"⋙","\\gggtr");v(x,N,_e,"⊲","\\lhd");v(x,N,_e,"⊳","\\rhd");v(x,N,L,"≂","\\eqsim",!0);v(x,k,L,"⋈","\\Join");v(x,N,L,"≑","\\Doteq",!0);v(x,N,_e,"∔","\\dotplus",!0);v(x,N,_e,"∖","\\smallsetminus");v(x,N,_e,"⋒","\\Cap",!0);v(x,N,_e,"⋓","\\Cup",!0);v(x,N,_e,"⩞","\\doublebarwedge",!0);v(x,N,_e,"⊟","\\boxminus",!0);v(x,N,_e,"⊞","\\boxplus",!0);v(x,N,_e,"⋇","\\divideontimes",!0);v(x,N,_e,"⋉","\\ltimes",!0);v(x,N,_e,"⋊","\\rtimes",!0);v(x,N,_e,"⋋","\\leftthreetimes",!0);v(x,N,_e,"⋌","\\rightthreetimes",!0);v(x,N,_e,"⋏","\\curlywedge",!0);v(x,N,_e,"⋎","\\curlyvee",!0);v(x,N,_e,"⊝","\\circleddash",!0);v(x,N,_e,"⊛","\\circledast",!0);v(x,N,_e,"⋅","\\centerdot");v(x,N,_e,"⊺","\\intercal",!0);v(x,N,_e,"⋒","\\doublecap");v(x,N,_e,"⋓","\\doublecup");v(x,N,_e,"⊠","\\boxtimes",!0);v(x,N,L,"⇢","\\dashrightarrow",!0);v(x,N,L,"⇠","\\dashleftarrow",!0);v(x,N,L,"⇇","\\leftleftarrows",!0);v(x,N,L,"⇆","\\leftrightarrows",!0);v(x,N,L,"⇚","\\Lleftarrow",!0);v(x,N,L,"↞","\\twoheadleftarrow",!0);v(x,N,L,"↢","\\leftarrowtail",!0);v(x,N,L,"↫","\\looparrowleft",!0);v(x,N,L,"⇋","\\leftrightharpoons",!0);v(x,N,L,"↶","\\curvearrowleft",!0);v(x,N,L,"↺","\\circlearrowleft",!0);v(x,N,L,"↰","\\Lsh",!0);v(x,N,L,"⇈","\\upuparrows",!0);v(x,N,L,"↿","\\upharpoonleft",!0);v(x,N,L,"⇃","\\downharpoonleft",!0);v(x,k,L,"⊶","\\origof",!0);v(x,k,L,"⊷","\\imageof",!0);v(x,N,L,"⊸","\\multimap",!0);v(x,N,L,"↭","\\leftrightsquigarrow",!0);v(x,N,L,"⇉","\\rightrightarrows",!0);v(x,N,L,"⇄","\\rightleftarrows",!0);v(x,N,L,"↠","\\twoheadrightarrow",!0);v(x,N,L,"↣","\\rightarrowtail",!0);v(x,N,L,"↬","\\looparrowright",!0);v(x,N,L,"↷","\\curvearrowright",!0);v(x,N,L,"↻","\\circlearrowright",!0);v(x,N,L,"↱","\\Rsh",!0);v(x,N,L,"⇊","\\downdownarrows",!0);v(x,N,L,"↾","\\upharpoonright",!0);v(x,N,L,"⇂","\\downharpoonright",!0);v(x,N,L,"⇝","\\rightsquigarrow",!0);v(x,N,L,"⇝","\\leadsto");v(x,N,L,"⇛","\\Rrightarrow",!0);v(x,N,L,"↾","\\restriction");v(x,k,B,"‘","`");v(x,k,B,"$","\\$");v(se,k,B,"$","\\$");v(se,k,B,"$","\\textdollar");v(x,k,B,"%","\\%");v(se,k,B,"%","\\%");v(x,k,B,"_","\\_");v(se,k,B,"_","\\_");v(se,k,B,"_","\\textunderscore");v(x,k,B,"∠","\\angle",!0);v(x,k,B,"∞","\\infty",!0);v(x,k,B,"′","\\prime");v(x,k,B,"△","\\triangle");v(x,k,B,"Γ","\\Gamma",!0);v(x,k,B,"Δ","\\Delta",!0);v(x,k,B,"Θ","\\Theta",!0);v(x,k,B,"Λ","\\Lambda",!0);v(x,k,B,"Ξ","\\Xi",!0);v(x,k,B,"Π","\\Pi",!0);v(x,k,B,"Σ","\\Sigma",!0);v(x,k,B,"Υ","\\Upsilon",!0);v(x,k,B,"Φ","\\Phi",!0);v(x,k,B,"Ψ","\\Psi",!0);v(x,k,B,"Ω","\\Omega",!0);v(x,k,B,"A","Α");v(x,k,B,"B","Β");v(x,k,B,"E","Ε");v(x,k,B,"Z","Ζ");v(x,k,B,"H","Η");v(x,k,B,"I","Ι");v(x,k,B,"K","Κ");v(x,k,B,"M","Μ");v(x,k,B,"N","Ν");v(x,k,B,"O","Ο");v(x,k,B,"P","Ρ");v(x,k,B,"T","Τ");v(x,k,B,"X","Χ");v(x,k,B,"¬","\\neg",!0);v(x,k,B,"¬","\\lnot");v(x,k,B,"⊤","\\top");v(x,k,B,"⊥","\\bot");v(x,k,B,"∅","\\emptyset");v(x,N,B,"∅","\\varnothing");v(x,k,Ue,"α","\\alpha",!0);v(x,k,Ue,"β","\\beta",!0);v(x,k,Ue,"γ","\\gamma",!0);v(x,k,Ue,"δ","\\delta",!0);v(x,k,Ue,"ϵ","\\epsilon",!0);v(x,k,Ue,"ζ","\\zeta",!0);v(x,k,Ue,"η","\\eta",!0);v(x,k,Ue,"θ","\\theta",!0);v(x,k,Ue,"ι","\\iota",!0);v(x,k,Ue,"κ","\\kappa",!0);v(x,k,Ue,"λ","\\lambda",!0);v(x,k,Ue,"μ","\\mu",!0);v(x,k,Ue,"ν","\\nu",!0);v(x,k,Ue,"ξ","\\xi",!0);v(x,k,Ue,"ο","\\omicron",!0);v(x,k,Ue,"π","\\pi",!0);v(x,k,Ue,"ρ","\\rho",!0);v(x,k,Ue,"σ","\\sigma",!0);v(x,k,Ue,"τ","\\tau",!0);v(x,k,Ue,"υ","\\upsilon",!0);v(x,k,Ue,"ϕ","\\phi",!0);v(x,k,Ue,"χ","\\chi",!0);v(x,k,Ue,"ψ","\\psi",!0);v(x,k,Ue,"ω","\\omega",!0);v(x,k,Ue,"ε","\\varepsilon",!0);v(x,k,Ue,"ϑ","\\vartheta",!0);v(x,k,Ue,"ϖ","\\varpi",!0);v(x,k,Ue,"ϱ","\\varrho",!0);v(x,k,Ue,"ς","\\varsigma",!0);v(x,k,Ue,"φ","\\varphi",!0);v(x,k,_e,"∗","*",!0);v(x,k,_e,"+","+");v(x,k,_e,"−","-",!0);v(x,k,_e,"⋅","\\cdot",!0);v(x,k,_e,"∘","\\circ",!0);v(x,k,_e,"÷","\\div",!0);v(x,k,_e,"±","\\pm",!0);v(x,k,_e,"×","\\times",!0);v(x,k,_e,"∩","\\cap",!0);v(x,k,_e,"∪","\\cup",!0);v(x,k,_e,"∖","\\setminus",!0);v(x,k,_e,"∧","\\land");v(x,k,_e,"∨","\\lor");v(x,k,_e,"∧","\\wedge",!0);v(x,k,_e,"∨","\\vee",!0);v(x,k,B,"√","\\surd");v(x,k,Qt,"⟨","\\langle",!0);v(x,k,Qt,"∣","\\lvert");v(x,k,Qt,"∥","\\lVert");v(x,k,_t,"?","?");v(x,k,_t,"!","!");v(x,k,_t,"⟩","\\rangle",!0);v(x,k,_t,"∣","\\rvert");v(x,k,_t,"∥","\\rVert");v(x,k,L,"=","=");v(x,k,L,":",":");v(x,k,L,"≈","\\approx",!0);v(x,k,L,"≅","\\cong",!0);v(x,k,L,"≥","\\ge");v(x,k,L,"≥","\\geq",!0);v(x,k,L,"←","\\gets");v(x,k,L,">","\\gt",!0);v(x,k,L,"∈","\\in",!0);v(x,k,L,"","\\@not");v(x,k,L,"⊂","\\subset",!0);v(x,k,L,"⊃","\\supset",!0);v(x,k,L,"⊆","\\subseteq",!0);v(x,k,L,"⊇","\\supseteq",!0);v(x,N,L,"⊈","\\nsubseteq",!0);v(x,N,L,"⊉","\\nsupseteq",!0);v(x,k,L,"⊨","\\models");v(x,k,L,"←","\\leftarrow",!0);v(x,k,L,"≤","\\le");v(x,k,L,"≤","\\leq",!0);v(x,k,L,"<","\\lt",!0);v(x,k,L,"→","\\rightarrow",!0);v(x,k,L,"→","\\to");v(x,N,L,"≱","\\ngeq",!0);v(x,N,L,"≰","\\nleq",!0);v(x,k,si," ","\\ ");v(x,k,si," ","\\space");v(x,k,si," ","\\nobreakspace");v(se,k,si," ","\\ ");v(se,k,si," "," ");v(se,k,si," ","\\space");v(se,k,si," ","\\nobreakspace");v(x,k,si,null,"\\nobreak");v(x,k,si,null,"\\allowbreak");v(x,k,w0,",",",");v(x,k,w0,";",";");v(x,N,_e,"⊼","\\barwedge",!0);v(x,N,_e,"⊻","\\veebar",!0);v(x,k,_e,"⊙","\\odot",!0);v(x,k,_e,"⊕","\\oplus",!0);v(x,k,_e,"⊗","\\otimes",!0);v(x,k,B,"∂","\\partial",!0);v(x,k,_e,"⊘","\\oslash",!0);v(x,N,_e,"⊚","\\circledcirc",!0);v(x,N,_e,"⊡","\\boxdot",!0);v(x,k,_e,"△","\\bigtriangleup");v(x,k,_e,"▽","\\bigtriangledown");v(x,k,_e,"†","\\dagger");v(x,k,_e,"⋄","\\diamond");v(x,k,_e,"⋆","\\star");v(x,k,_e,"◃","\\triangleleft");v(x,k,_e,"▹","\\triangleright");v(x,k,Qt,"{","\\{");v(se,k,B,"{","\\{");v(se,k,B,"{","\\textbraceleft");v(x,k,_t,"}","\\}");v(se,k,B,"}","\\}");v(se,k,B,"}","\\textbraceright");v(x,k,Qt,"{","\\lbrace");v(x,k,_t,"}","\\rbrace");v(x,k,Qt,"[","\\lbrack",!0);v(se,k,B,"[","\\lbrack",!0);v(x,k,_t,"]","\\rbrack",!0);v(se,k,B,"]","\\rbrack",!0);v(x,k,Qt,"(","\\lparen",!0);v(x,k,_t,")","\\rparen",!0);v(se,k,B,"<","\\textless",!0);v(se,k,B,">","\\textgreater",!0);v(x,k,Qt,"⌊","\\lfloor",!0);v(x,k,_t,"⌋","\\rfloor",!0);v(x,k,Qt,"⌈","\\lceil",!0);v(x,k,_t,"⌉","\\rceil",!0);v(x,k,B,"\\","\\backslash");v(x,k,B,"∣","|");v(x,k,B,"∣","\\vert");v(se,k,B,"|","\\textbar",!0);v(x,k,B,"∥","\\|");v(x,k,B,"∥","\\Vert");v(se,k,B,"∥","\\textbardbl");v(se,k,B,"~","\\textasciitilde");v(se,k,B,"\\","\\textbackslash");v(se,k,B,"^","\\textasciicircum");v(x,k,L,"↑","\\uparrow",!0);v(x,k,L,"⇑","\\Uparrow",!0);v(x,k,L,"↓","\\downarrow",!0);v(x,k,L,"⇓","\\Downarrow",!0);v(x,k,L,"↕","\\updownarrow",!0);v(x,k,L,"⇕","\\Updownarrow",!0);v(x,k,Vn,"∐","\\coprod");v(x,k,Vn,"⋁","\\bigvee");v(x,k,Vn,"⋀","\\bigwedge");v(x,k,Vn,"⨄","\\biguplus");v(x,k,Vn,"⋂","\\bigcap");v(x,k,Vn,"⋃","\\bigcup");v(x,k,Vn,"∫","\\int");v(x,k,Vn,"∫","\\intop");v(x,k,Vn,"∬","\\iint");v(x,k,Vn,"∭","\\iiint");v(x,k,Vn,"∏","\\prod");v(x,k,Vn,"∑","\\sum");v(x,k,Vn,"⨂","\\bigotimes");v(x,k,Vn,"⨁","\\bigoplus");v(x,k,Vn,"⨀","\\bigodot");v(x,k,Vn,"∮","\\oint");v(x,k,Vn,"∯","\\oiint");v(x,k,Vn,"∰","\\oiiint");v(x,k,Vn,"⨆","\\bigsqcup");v(x,k,Vn,"∫","\\smallint");v(se,k,ol,"…","\\textellipsis");v(x,k,ol,"…","\\mathellipsis");v(se,k,ol,"…","\\ldots",!0);v(x,k,ol,"…","\\ldots",!0);v(x,k,ol,"⋯","\\@cdots",!0);v(x,k,ol,"⋱","\\ddots",!0);v(x,k,B,"⋮","\\varvdots");v(se,k,B,"⋮","\\varvdots");v(x,k,Tn,"ˊ","\\acute");v(x,k,Tn,"ˋ","\\grave");v(x,k,Tn,"¨","\\ddot");v(x,k,Tn,"~","\\tilde");v(x,k,Tn,"ˉ","\\bar");v(x,k,Tn,"˘","\\breve");v(x,k,Tn,"ˇ","\\check");v(x,k,Tn,"^","\\hat");v(x,k,Tn,"⃗","\\vec");v(x,k,Tn,"˙","\\dot");v(x,k,Tn,"˚","\\mathring");v(x,k,Ue,"","\\@imath");v(x,k,Ue,"","\\@jmath");v(x,k,B,"ı","ı");v(x,k,B,"ȷ","ȷ");v(se,k,B,"ı","\\i",!0);v(se,k,B,"ȷ","\\j",!0);v(se,k,B,"ß","\\ss",!0);v(se,k,B,"æ","\\ae",!0);v(se,k,B,"œ","\\oe",!0);v(se,k,B,"ø","\\o",!0);v(se,k,B,"Æ","\\AE",!0);v(se,k,B,"Œ","\\OE",!0);v(se,k,B,"Ø","\\O",!0);v(se,k,Tn,"ˊ","\\'");v(se,k,Tn,"ˋ","\\`");v(se,k,Tn,"ˆ","\\^");v(se,k,Tn,"˜","\\~");v(se,k,Tn,"ˉ","\\=");v(se,k,Tn,"˘","\\u");v(se,k,Tn,"˙","\\.");v(se,k,Tn,"¸","\\c");v(se,k,Tn,"˚","\\r");v(se,k,Tn,"ˇ","\\v");v(se,k,Tn,"¨",'\\"');v(se,k,Tn,"˝","\\H");v(se,k,Tn,"◯","\\textcircled");var h4={"--":!0,"---":!0,"``":!0,"''":!0};v(se,k,B,"–","--",!0);v(se,k,B,"–","\\textendash");v(se,k,B,"—","---",!0);v(se,k,B,"—","\\textemdash");v(se,k,B,"‘","`",!0);v(se,k,B,"‘","\\textquoteleft");v(se,k,B,"’","'",!0);v(se,k,B,"’","\\textquoteright");v(se,k,B,"“","``",!0);v(se,k,B,"“","\\textquotedblleft");v(se,k,B,"”","''",!0);v(se,k,B,"”","\\textquotedblright");v(x,k,B,"°","\\degree",!0);v(se,k,B,"°","\\degree");v(se,k,B,"°","\\textdegree",!0);v(x,k,B,"£","\\pounds");v(x,k,B,"£","\\mathsterling",!0);v(se,k,B,"£","\\pounds");v(se,k,B,"£","\\textsterling",!0);v(x,N,B,"✠","\\maltese");v(se,N,B,"✠","\\maltese");var Pf='0123456789/@."';for(var jc=0;jc<Pf.length;jc++){var Nf=Pf.charAt(jc);v(x,k,B,Nf,Nf)}var Lf='0123456789!@*()-=+";:?/.,';for(var Fc=0;Fc<Lf.length;Fc++){var Jf=Lf.charAt(Fc);v(se,k,B,Jf,Jf)}var s0="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";for(var Oc=0;Oc<s0.length;Oc++){var $s=s0.charAt(Oc);v(x,k,Ue,$s,$s),v(se,k,B,$s,$s)}v(x,N,B,"C","ℂ");v(se,N,B,"C","ℂ");v(x,N,B,"H","ℍ");v(se,N,B,"H","ℍ");v(x,N,B,"N","ℕ");v(se,N,B,"N","ℕ");v(x,N,B,"P","ℙ");v(se,N,B,"P","ℙ");v(x,N,B,"Q","ℚ");v(se,N,B,"Q","ℚ");v(x,N,B,"R","ℝ");v(se,N,B,"R","ℝ");v(x,N,B,"Z","ℤ");v(se,N,B,"Z","ℤ");v(x,k,Ue,"h","ℎ");v(se,k,Ue,"h","ℎ");var Ge="";for(var xt=0;xt<s0.length;xt++){var Rn=s0.charAt(xt);Ge=String.fromCharCode(55349,56320+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56372+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56424+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56580+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56684+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56736+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56788+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56840+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56944+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),xt<26&&(Ge=String.fromCharCode(55349,56632+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge),Ge=String.fromCharCode(55349,56476+xt),v(x,k,Ue,Rn,Ge),v(se,k,B,Rn,Ge))}Ge="𝕜";v(x,k,Ue,"k",Ge);v(se,k,B,"k",Ge);for(var pa=0;pa<10;pa++){var Ji=pa.toString();Ge=String.fromCharCode(55349,57294+pa),v(x,k,Ue,Ji,Ge),v(se,k,B,Ji,Ge),Ge=String.fromCharCode(55349,57314+pa),v(x,k,Ue,Ji,Ge),v(se,k,B,Ji,Ge),Ge=String.fromCharCode(55349,57324+pa),v(x,k,Ue,Ji,Ge),v(se,k,B,Ji,Ge),Ge=String.fromCharCode(55349,57334+pa),v(x,k,Ue,Ji,Ge),v(se,k,B,Ji,Ge)}var v1="ÐÞþ";for(var Bc=0;Bc<v1.length;Bc++){var Hs=v1.charAt(Bc);v(x,k,Ue,Hs,Hs),v(se,k,B,Hs,Hs)}var qs=[["mathbf","textbf","Main-Bold"],["mathbf","textbf","Main-Bold"],["mathnormal","textit","Math-Italic"],["mathnormal","textit","Math-Italic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["boldsymbol","boldsymbol","Main-BoldItalic"],["mathscr","textscr","Script-Regular"],["","",""],["","",""],["","",""],["mathfrak","textfrak","Fraktur-Regular"],["mathfrak","textfrak","Fraktur-Regular"],["mathbb","textbb","AMS-Regular"],["mathbb","textbb","AMS-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathboldfrak","textboldfrak","Fraktur-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathitsf","textitsf","SansSerif-Italic"],["mathitsf","textitsf","SansSerif-Italic"],["","",""],["","",""],["mathtt","texttt","Typewriter-Regular"],["mathtt","texttt","Typewriter-Regular"]],Rf=[["mathbf","textbf","Main-Bold"],["","",""],["mathsf","textsf","SansSerif-Regular"],["mathboldsf","textboldsf","SansSerif-Bold"],["mathtt","texttt","Typewriter-Regular"]],SD=function(n,t){var i=n.charCodeAt(0),l=n.charCodeAt(1),o=(i-55296)*1024+(l-56320)+65536,s=t==="math"?0:1;if(119808<=o&&o<120484){var c=Math.floor((o-119808)/26);return[qs[c][2],qs[c][s]]}else if(120782<=o&&o<=120831){var h=Math.floor((o-120782)/10);return[Rf[h][2],Rf[h][s]]}else{if(o===120485||o===120486)return[qs[0][2],qs[0][s]];if(120486<o&&o<120782)return["",""];throw new de("Unsupported character: "+n)}},x0=function(n,t,i){return Dn[i][n]&&Dn[i][n].replace&&(n=Dn[i][n].replace),{value:n,metrics:uh(n,t,i)}},kt=function(n,t,i,l,o){var s=x0(n,t,i),c=s.metrics;n=s.value;var h;if(c){var p=c.italic;(i==="text"||l&&l.font==="mathit")&&(p=0),h=new hr(n,c.height,c.depth,p,c.skew,c.width,o)}else typeof console<"u"&&console.warn("No character metrics "+("for '"+n+"' in style '"+t+"' and mode '"+i+"'")),h=new hr(n,0,0,0,0,0,o);if(l){h.maxFontSize=l.sizeMultiplier,l.style.isTight()&&h.classes.push("mtight");var f=l.getColor();f&&(h.style.color=f)}return h},hh=function(n,t,i,l){return l===void 0&&(l=[]),i.font==="boldsymbol"&&x0(n,"Main-Bold",t).metrics?kt(n,"Main-Bold",t,i,l.concat(["mathbf"])):n==="\\"||Dn[t][n].font==="main"?kt(n,"Main-Regular",t,i,l):kt(n,"AMS-Regular",t,i,l.concat(["amsrm"]))},DD=function(n,t,i,l,o){return o!=="textord"&&x0(n,"Math-BoldItalic",t).metrics?{fontName:"Math-BoldItalic",fontClass:"boldsymbol"}:{fontName:"Main-Bold",fontClass:"mathbf"}},k0=function(n,t,i){var l=n.mode,o=n.text,s=["mord"],c=l==="math"||l==="text"&&t.font,h=c?t.font:t.fontFamily,p="",f="";if(o.charCodeAt(0)===55349&&([p,f]=SD(o,l)),p.length>0)return kt(o,p,l,t,s.concat(f));if(h){var d,w;if(h==="boldsymbol"){var b=DD(o,l,t,s,i);d=b.fontName,w=[b.fontClass]}else c?(d=y1[h].fontName,w=[h]):(d=Us(h,t.fontWeight,t.fontShape),w=[h,t.fontWeight,t.fontShape]);if(x0(o,d,l).metrics)return kt(o,d,l,t,s.concat(w));if(h4.hasOwnProperty(o)&&d.slice(0,10)==="Typewriter"){for(var D=[],_=0;_<o.length;_++)D.push(kt(o[_],d,l,t,s.concat(w)));return ui(D)}}if(i==="mathord")return kt(o,"Math-Italic",l,t,s.concat(["mathnormal"]));if(i==="textord"){var T=Dn[l][o]&&Dn[l][o].font;if(T==="ams"){var E=Us("amsrm",t.fontWeight,t.fontShape);return kt(o,E,l,t,s.concat("amsrm",t.fontWeight,t.fontShape))}else if(T==="main"||!T){var z=Us("textrm",t.fontWeight,t.fontShape);return kt(o,z,l,t,s.concat(t.fontWeight,t.fontShape))}else{var O=Us(T,t.fontWeight,t.fontShape);return kt(o,O,l,t,s.concat(O,t.fontWeight,t.fontShape))}}else throw new Error("unexpected type: "+i+" in makeOrd")},CD=(e,n)=>{if(Oi(e.classes)!==Oi(n.classes)||e.skew!==n.skew||e.maxFontSize!==n.maxFontSize||e.italic!==0&&e.hasClass("mathnormal"))return!1;if(e.classes.length===1){var t=e.classes[0];if(t==="mbin"||t==="mord")return!1}for(var i in e.style)if(e.style.hasOwnProperty(i)&&e.style[i]!==n.style[i])return!1;for(var l in n.style)if(n.style.hasOwnProperty(l)&&e.style[l]!==n.style[l])return!1;return!0},m4=e=>{for(var n=0;n<e.length-1;n++){var t=e[n],i=e[n+1];t instanceof hr&&i instanceof hr&&CD(t,i)&&(t.text+=i.text,t.height=Math.max(t.height,i.height),t.depth=Math.max(t.depth,i.depth),t.italic=i.italic,e.splice(n+1,1),n--)}return e},mh=function(n){for(var t=0,i=0,l=0,o=0;o<n.children.length;o++){var s=n.children[o];s.height>t&&(t=s.height),s.depth>i&&(i=s.depth),s.maxFontSize>l&&(l=s.maxFontSize)}n.height=t,n.depth=i,n.maxFontSize=l},he=function(n,t,i,l){var o=new Eo(n,t,i,l);return mh(o),o},$i=(e,n,t,i)=>new Eo(e,n,t,i),rl=function(n,t,i){var l=he([n],[],t);return l.height=Math.max(i||t.fontMetrics().defaultRuleThickness,t.minRuleThickness),l.style.borderBottomWidth=we(l.height),l.maxFontSize=1,l},_D=function(n,t,i,l){var o=new ch(n,t,i,l);return mh(o),o},ui=function(n){var t=new Mo(n);return mh(t),t},il=function(n,t){return n instanceof Mo?he([],[n],t):n},MD=function(n){if(n.positionType==="individualShift"){for(var t=n.children,i=[t[0]],l=-t[0].shift-t[0].elem.depth,o=l,s=1;s<t.length;s++){var c=-t[s].shift-o-t[s].elem.depth,h=c-(t[s-1].elem.height+t[s-1].elem.depth);o=o+c,i.push({type:"kern",size:h}),i.push(t[s])}return{children:i,depth:l}}var p;if(n.positionType==="top"){for(var f=n.positionData,d=0;d<n.children.length;d++){var w=n.children[d];f-=w.type==="kern"?w.size:w.elem.height+w.elem.depth}p=f}else if(n.positionType==="bottom")p=-n.positionData;else{var b=n.children[0];if(b.type!=="elem")throw new Error('First child must have type "elem".');if(n.positionType==="shift")p=-b.elem.depth-n.positionData;else if(n.positionType==="firstBaseline")p=-b.elem.depth;else throw new Error("Invalid positionType "+n.positionType+".")}return{children:n.children,depth:p}},dn=function(n,t){for(var{children:i,depth:l}=MD(n),o=0,s=0;s<i.length;s++){var c=i[s];if(c.type==="elem"){var h=c.elem;o=Math.max(o,h.maxFontSize,h.height)}}o+=2;var p=he(["pstrut"],[]);p.style.height=we(o);for(var f=[],d=l,w=l,b=l,D=0;D<i.length;D++){var _=i[D];if(_.type==="kern")b+=_.size;else{var T=_.elem,E=_.wrapperClasses||[],z=_.wrapperStyle||{},O=he(E,[p,T],void 0,z);O.style.top=we(-o-b-T.depth),_.marginLeft&&(O.style.marginLeft=_.marginLeft),_.marginRight&&(O.style.marginRight=_.marginRight),f.push(O),b+=T.height+T.depth}d=Math.min(d,b),w=Math.max(w,b)}var ne=he(["vlist"],f);ne.style.height=we(w);var K;if(d<0){var H=he([],[]),I=he(["vlist"],[H]);I.style.height=we(-d);var re=he(["vlist-s"],[new hr("​")]);K=[he(["vlist-r"],[ne,re]),he(["vlist-r"],[I])]}else K=[he(["vlist-r"],[ne])];var ee=he(["vlist-t"],K);return K.length===2&&ee.classes.push("vlist-t2"),ee.height=w,ee.depth=-d,ee},p4=(e,n)=>{var t=he(["mspace"],[],n),i=Ln(e,n);return t.style.marginRight=we(i),t},Us=function(n,t,i){var l="";switch(n){case"amsrm":l="AMS";break;case"textrm":l="Main";break;case"textsf":l="SansSerif";break;case"texttt":l="Typewriter";break;default:l=n}var o;return t==="textbf"&&i==="textit"?o="BoldItalic":t==="textbf"?o="Bold":t==="textit"?o="Italic":o="Regular",l+"-"+o},y1={mathbf:{variant:"bold",fontName:"Main-Bold"},mathrm:{variant:"normal",fontName:"Main-Regular"},textit:{variant:"italic",fontName:"Main-Italic"},mathit:{variant:"italic",fontName:"Main-Italic"},mathnormal:{variant:"italic",fontName:"Math-Italic"},mathsfit:{variant:"sans-serif-italic",fontName:"SansSerif-Italic"},mathbb:{variant:"double-struck",fontName:"AMS-Regular"},mathcal:{variant:"script",fontName:"Caligraphic-Regular"},mathfrak:{variant:"fraktur",fontName:"Fraktur-Regular"},mathscr:{variant:"script",fontName:"Script-Regular"},mathsf:{variant:"sans-serif",fontName:"SansSerif-Regular"},mathtt:{variant:"monospace",fontName:"Typewriter-Regular"}},d4={vec:["vec",.471,.714],oiintSize1:["oiintSize1",.957,.499],oiintSize2:["oiintSize2",1.472,.659],oiiintSize1:["oiiintSize1",1.304,.499],oiiintSize2:["oiiintSize2",1.98,.659]},f4=function(n,t){var[i,l,o]=d4[n],s=new Bi(i),c=new ai([s],{width:we(l),height:we(o),style:"width:"+we(l),viewBox:"0 0 "+1e3*l+" "+1e3*o,preserveAspectRatio:"xMinYMin"}),h=$i(["overlay"],[c],t);return h.height=o,h.style.height=we(o),h.style.width=we(l),h},Nn={number:3,unit:"mu"},da={number:4,unit:"mu"},ni={number:5,unit:"mu"},ED={mord:{mop:Nn,mbin:da,mrel:ni,minner:Nn},mop:{mord:Nn,mop:Nn,mrel:ni,minner:Nn},mbin:{mord:da,mop:da,mopen:da,minner:da},mrel:{mord:ni,mop:ni,mopen:ni,minner:ni},mopen:{},mclose:{mop:Nn,mbin:da,mrel:ni,minner:Nn},mpunct:{mord:Nn,mop:Nn,mrel:ni,mopen:Nn,mclose:Nn,mpunct:Nn,minner:Nn},minner:{mord:Nn,mop:Nn,mbin:da,mrel:ni,mopen:Nn,mpunct:Nn,minner:Nn}},TD={mord:{mop:Nn},mop:{mord:Nn,mop:Nn},mbin:{},mrel:{},mopen:{},mclose:{mop:Nn},mpunct:{},minner:{mop:Nn}},g4={},u0={},c0={};function Se(e){for(var{type:n,names:t,props:i,handler:l,htmlBuilder:o,mathmlBuilder:s}=e,c={type:n,numArgs:i.numArgs,argTypes:i.argTypes,allowedInArgument:!!i.allowedInArgument,allowedInText:!!i.allowedInText,allowedInMath:i.allowedInMath===void 0?!0:i.allowedInMath,numOptionalArgs:i.numOptionalArgs||0,infix:!!i.infix,primitive:!!i.primitive,handler:l},h=0;h<t.length;++h)g4[t[h]]=c;n&&(o&&(u0[n]=o),s&&(c0[n]=s))}function wa(e){var{type:n,htmlBuilder:t,mathmlBuilder:i}=e;Se({type:n,names:[],props:{numArgs:0},handler(){throw new Error("Should never be called.")},htmlBuilder:t,mathmlBuilder:i})}var h0=function(n){return n.type==="ordgroup"&&n.body.length===1?n.body[0]:n},Fn=function(n){return n.type==="ordgroup"?n.body:[n]},zD=new Set(["leftmost","mbin","mopen","mrel","mop","mpunct"]),AD=new Set(["rightmost","mrel","mclose","mpunct"]),PD={display:Qe.DISPLAY,text:Qe.TEXT,script:Qe.SCRIPT,scriptscript:Qe.SCRIPTSCRIPT},ND={mord:"mord",mop:"mop",mbin:"mbin",mrel:"mrel",mopen:"mopen",mclose:"mclose",mpunct:"mpunct",minner:"minner"},Yn=function(n,t,i,l){l===void 0&&(l=[null,null]);for(var o=[],s=0;s<n.length;s++){var c=mn(n[s],t);if(c instanceof Mo){var h=c.children;o.push(...h)}else o.push(c)}if(m4(o),!i)return o;var p=t;if(n.length===1){var f=n[0];f.type==="sizing"?p=t.havingSize(f.size):f.type==="styling"&&(p=t.havingStyle(PD[f.style]))}var d=he([l[0]||"leftmost"],[],t),w=he([l[1]||"rightmost"],[],t),b=i==="root";return If(o,(D,_)=>{var T=_.classes[0],E=D.classes[0];T==="mbin"&&AD.has(E)?_.classes[0]="mord":E==="mbin"&&zD.has(T)&&(D.classes[0]="mord")},{node:d},w,b),If(o,(D,_)=>{var T=b1(_),E=b1(D),z=T&&E?D.hasClass("mtight")?TD[T][E]:ED[T][E]:null;if(z)return p4(z,p)},{node:d},w,b),o},If=function e(n,t,i,l,o){l&&n.push(l);for(var s=0;s<n.length;s++){var c=n[s],h=v4(c);if(h){e(h.children,t,i,null,o);continue}var p=!c.hasClass("mspace");if(p){var f=t(c,i.node);f&&(i.insertAfter?i.insertAfter(f):(n.unshift(f),s++))}p?i.node=c:o&&c.hasClass("newline")&&(i.node=he(["leftmost"])),i.insertAfter=(d=>w=>{n.splice(d+1,0,w),s++})(s)}l&&n.pop()},v4=function(n){return n instanceof Mo||n instanceof ch||n instanceof Eo&&n.hasClass("enclosing")?n:null},LD=function e(n,t){var i=v4(n);if(i){var l=i.children;if(l.length){if(t==="right")return e(l[l.length-1],"right");if(t==="left")return e(l[0],"left")}}return n},b1=function(n,t){return n?(t&&(n=LD(n,t)),ND[n.classes[0]]||null):null},vo=function(n,t){var i=["nulldelimiter"].concat(n.baseSizingClasses());return he(t.concat(i))},mn=function(n,t,i){if(!n)return he();if(u0[n.type]){var l=u0[n.type](n,t);if(i&&t.size!==i.size){l=he(t.sizingClasses(i),[l],t);var o=t.sizeMultiplier/i.sizeMultiplier;l.height*=o,l.depth*=o}return l}else throw new de("Got group of unknown type: '"+n.type+"'")};function Vs(e,n){var t=he(["base"],e,n),i=he(["strut"]);return i.style.height=we(t.height+t.depth),t.depth&&(i.style.verticalAlign=we(-t.depth)),t.children.unshift(i),t}function w1(e,n){var t=null;e.length===1&&e[0].type==="tag"&&(t=e[0].tag,e=e[0].body);var i=Yn(e,n,"root"),l;i.length===2&&i[1].hasClass("tag")&&(l=i.pop());for(var o=[],s=[],c=0;c<i.length;c++)if(s.push(i[c]),i[c].hasClass("mbin")||i[c].hasClass("mrel")||i[c].hasClass("allowbreak")){for(var h=!1;c<i.length-1&&i[c+1].hasClass("mspace")&&!i[c+1].hasClass("newline");)c++,s.push(i[c]),i[c].hasClass("nobreak")&&(h=!0);h||(o.push(Vs(s,n)),s=[])}else i[c].hasClass("newline")&&(s.pop(),s.length>0&&(o.push(Vs(s,n)),s=[]),o.push(i[c]));s.length>0&&o.push(Vs(s,n));var p;t?(p=Vs(Yn(t,n,!0)),p.classes=["tag"],o.push(p)):l&&o.push(l);var f=he(["katex-html"],o);if(f.setAttribute("aria-hidden","true"),p){var d=p.children[0];d.style.height=we(f.height+f.depth),f.depth&&(d.style.verticalAlign=we(-f.depth))}return f}function y4(e){return new Mo(e)}class fe{constructor(n,t,i){this.type=void 0,this.attributes=void 0,this.children=void 0,this.classes=void 0,this.type=n,this.attributes={},this.children=t||[],this.classes=i||[]}setAttribute(n,t){this.attributes[n]=t}getAttribute(n){return this.attributes[n]}toNode(){var n=document.createElementNS("http://www.w3.org/1998/Math/MathML",this.type);for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&n.setAttribute(t,this.attributes[t]);this.classes.length>0&&(n.className=Oi(this.classes));for(var i=0;i<this.children.length;i++)if(this.children[i]instanceof qn&&this.children[i+1]instanceof qn){for(var l=this.children[i].toText()+this.children[++i].toText();this.children[i+1]instanceof qn;)l+=this.children[++i].toText();n.appendChild(new qn(l).toNode())}else n.appendChild(this.children[i].toNode());return n}toMarkup(){var n="<"+this.type;for(var t in this.attributes)Object.prototype.hasOwnProperty.call(this.attributes,t)&&(n+=" "+t+'="',n+=pt(this.attributes[t]),n+='"');this.classes.length>0&&(n+=' class ="'+pt(Oi(this.classes))+'"'),n+=">";for(var i=0;i<this.children.length;i++)n+=this.children[i].toMarkup();return n+="</"+this.type+">",n}toText(){return this.children.map(n=>n.toText()).join("")}}class qn{constructor(n){this.text=void 0,this.text=n}toNode(){return document.createTextNode(this.text)}toMarkup(){return pt(this.toText())}toText(){return this.text}}class b4{constructor(n){this.width=void 0,this.character=void 0,this.width=n,n>=.05555&&n<=.05556?this.character=" ":n>=.1666&&n<=.1667?this.character=" ":n>=.2222&&n<=.2223?this.character=" ":n>=.2777&&n<=.2778?this.character="  ":n>=-.05556&&n<=-.05555?this.character=" ⁣":n>=-.1667&&n<=-.1666?this.character=" ⁣":n>=-.2223&&n<=-.2222?this.character=" ⁣":n>=-.2778&&n<=-.2777?this.character=" ⁣":this.character=null}toNode(){if(this.character)return document.createTextNode(this.character);var n=document.createElementNS("http://www.w3.org/1998/Math/MathML","mspace");return n.setAttribute("width",we(this.width)),n}toMarkup(){return this.character?"<mtext>"+this.character+"</mtext>":'<mspace width="'+we(this.width)+'"/>'}toText(){return this.character?this.character:" "}}var JD=new Set(["\\imath","\\jmath"]),RD=new Set(["mrow","mtable"]),mr=function(n,t,i){return Dn[t][n]&&Dn[t][n].replace&&n.charCodeAt(0)!==55349&&!(h4.hasOwnProperty(n)&&i&&(i.fontFamily&&i.fontFamily.slice(4,6)==="tt"||i.font&&i.font.slice(4,6)==="tt"))&&(n=Dn[t][n].replace),new qn(n)},ph=function(n){return n.length===1?n[0]:new fe("mrow",n)},dh=function(n,t){if(t.fontFamily==="texttt")return"monospace";if(t.fontFamily==="textsf")return t.fontShape==="textit"&&t.fontWeight==="textbf"?"sans-serif-bold-italic":t.fontShape==="textit"?"sans-serif-italic":t.fontWeight==="textbf"?"bold-sans-serif":"sans-serif";if(t.fontShape==="textit"&&t.fontWeight==="textbf")return"bold-italic";if(t.fontShape==="textit")return"italic";if(t.fontWeight==="textbf")return"bold";var i=t.font;if(!i||i==="mathnormal")return null;var l=n.mode;if(i==="mathit")return"italic";if(i==="boldsymbol")return n.type==="textord"?"bold":"bold-italic";if(i==="mathbf")return"bold";if(i==="mathbb")return"double-struck";if(i==="mathsfit")return"sans-serif-italic";if(i==="mathfrak")return"fraktur";if(i==="mathscr"||i==="mathcal")return"script";if(i==="mathsf")return"sans-serif";if(i==="mathtt")return"monospace";var o=n.text;if(JD.has(o))return null;Dn[l][o]&&Dn[l][o].replace&&(o=Dn[l][o].replace);var s=y1[i].fontName;return uh(o,s,l)?y1[i].variant:null};function $c(e){if(!e)return!1;if(e.type==="mi"&&e.children.length===1){var n=e.children[0];return n instanceof qn&&n.text==="."}else if(e.type==="mo"&&e.children.length===1&&e.getAttribute("separator")==="true"&&e.getAttribute("lspace")==="0em"&&e.getAttribute("rspace")==="0em"){var t=e.children[0];return t instanceof qn&&t.text===","}else return!1}var jt=function(n,t,i){if(n.length===1){var l=xn(n[0],t);return i&&l instanceof fe&&l.type==="mo"&&(l.setAttribute("lspace","0em"),l.setAttribute("rspace","0em")),[l]}for(var o=[],s,c=0;c<n.length;c++){var h=xn(n[c],t);if(h instanceof fe&&s instanceof fe){if(h.type==="mtext"&&s.type==="mtext"&&h.getAttribute("mathvariant")===s.getAttribute("mathvariant")){s.children.push(...h.children);continue}else if(h.type==="mn"&&s.type==="mn"){s.children.push(...h.children);continue}else if($c(h)&&s.type==="mn"){s.children.push(...h.children);continue}else if(h.type==="mn"&&$c(s))h.children=[...s.children,...h.children],o.pop();else if((h.type==="msup"||h.type==="msub")&&h.children.length>=1&&(s.type==="mn"||$c(s))){var p=h.children[0];p instanceof fe&&p.type==="mn"&&(p.children=[...s.children,...p.children],o.pop())}else if(s.type==="mi"&&s.children.length===1){var f=s.children[0];if(f instanceof qn&&f.text==="̸"&&(h.type==="mo"||h.type==="mi"||h.type==="mn")){var d=h.children[0];d instanceof qn&&d.text.length>0&&(d.text=d.text.slice(0,1)+"̸"+d.text.slice(1),o.pop())}}}o.push(h),s=h}return o},Hi=function(n,t,i){return ph(jt(n,t,i))},xn=function(n,t){if(!n)return new fe("mrow");if(c0[n.type]){var i=c0[n.type](n,t);return i}else throw new de("Got group of unknown type: '"+n.type+"'")};function jf(e,n,t,i,l){var o=jt(e,t),s;o.length===1&&o[0]instanceof fe&&RD.has(o[0].type)?s=o[0]:s=new fe("mrow",o);var c=new fe("annotation",[new qn(n)]);c.setAttribute("encoding","application/x-tex");var h=new fe("semantics",[s,c]),p=new fe("math",[h]);p.setAttribute("xmlns","http://www.w3.org/1998/Math/MathML"),i&&p.setAttribute("display","block");var f=l?"katex":"katex-mathml";return he([f],[p])}var w4=function(n){return new ri({style:n.displayMode?Qe.DISPLAY:Qe.TEXT,maxSize:n.maxSize,minRuleThickness:n.minRuleThickness})},x4=function(n,t){if(t.displayMode){var i=["katex-display"];t.leqno&&i.push("leqno"),t.fleqn&&i.push("fleqn"),n=he(i,[n])}return n},ID=function(n,t,i){var l=w4(i),o;if(i.output==="mathml")return jf(n,t,l,i.displayMode,!0);if(i.output==="html"){var s=w1(n,l);o=he(["katex"],[s])}else{var c=jf(n,t,l,i.displayMode,!1),h=w1(n,l);o=he(["katex"],[c,h])}return x4(o,i)},jD=function(n,t,i){var l=w4(i),o=w1(n,l),s=he(["katex"],[o]);return x4(s,i)},FD={widehat:"^",widecheck:"ˇ",widetilde:"~",utilde:"~",overleftarrow:"←",underleftarrow:"←",xleftarrow:"←",overrightarrow:"→",underrightarrow:"→",xrightarrow:"→",underbrace:"⏟",overbrace:"⏞",overgroup:"⏠",undergroup:"⏡",overleftrightarrow:"↔",underleftrightarrow:"↔",xleftrightarrow:"↔",Overrightarrow:"⇒",xRightarrow:"⇒",overleftharpoon:"↼",xleftharpoonup:"↼",overrightharpoon:"⇀",xrightharpoonup:"⇀",xLeftarrow:"⇐",xLeftrightarrow:"⇔",xhookleftarrow:"↩",xhookrightarrow:"↪",xmapsto:"↦",xrightharpoondown:"⇁",xleftharpoondown:"↽",xrightleftharpoons:"⇌",xleftrightharpoons:"⇋",xtwoheadleftarrow:"↞",xtwoheadrightarrow:"↠",xlongequal:"=",xtofrom:"⇄",xrightleftarrows:"⇄",xrightequilibrium:"⇌",xleftequilibrium:"⇋","\\cdrightarrow":"→","\\cdleftarrow":"←","\\cdlongequal":"="},S0=function(n){var t=new fe("mo",[new qn(FD[n.replace(/^\\/,"")])]);return t.setAttribute("stretchy","true"),t},OD={overrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],overleftarrow:[["leftarrow"],.888,522,"xMinYMin"],underrightarrow:[["rightarrow"],.888,522,"xMaxYMin"],underleftarrow:[["leftarrow"],.888,522,"xMinYMin"],xrightarrow:[["rightarrow"],1.469,522,"xMaxYMin"],"\\cdrightarrow":[["rightarrow"],3,522,"xMaxYMin"],xleftarrow:[["leftarrow"],1.469,522,"xMinYMin"],"\\cdleftarrow":[["leftarrow"],3,522,"xMinYMin"],Overrightarrow:[["doublerightarrow"],.888,560,"xMaxYMin"],xRightarrow:[["doublerightarrow"],1.526,560,"xMaxYMin"],xLeftarrow:[["doubleleftarrow"],1.526,560,"xMinYMin"],overleftharpoon:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoonup:[["leftharpoon"],.888,522,"xMinYMin"],xleftharpoondown:[["leftharpoondown"],.888,522,"xMinYMin"],overrightharpoon:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoonup:[["rightharpoon"],.888,522,"xMaxYMin"],xrightharpoondown:[["rightharpoondown"],.888,522,"xMaxYMin"],xlongequal:[["longequal"],.888,334,"xMinYMin"],"\\cdlongequal":[["longequal"],3,334,"xMinYMin"],xtwoheadleftarrow:[["twoheadleftarrow"],.888,334,"xMinYMin"],xtwoheadrightarrow:[["twoheadrightarrow"],.888,334,"xMaxYMin"],overleftrightarrow:[["leftarrow","rightarrow"],.888,522],overbrace:[["leftbrace","midbrace","rightbrace"],1.6,548],underbrace:[["leftbraceunder","midbraceunder","rightbraceunder"],1.6,548],underleftrightarrow:[["leftarrow","rightarrow"],.888,522],xleftrightarrow:[["leftarrow","rightarrow"],1.75,522],xLeftrightarrow:[["doubleleftarrow","doublerightarrow"],1.75,560],xrightleftharpoons:[["leftharpoondownplus","rightharpoonplus"],1.75,716],xleftrightharpoons:[["leftharpoonplus","rightharpoondownplus"],1.75,716],xhookleftarrow:[["leftarrow","righthook"],1.08,522],xhookrightarrow:[["lefthook","rightarrow"],1.08,522],overlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],underlinesegment:[["leftlinesegment","rightlinesegment"],.888,522],overgroup:[["leftgroup","rightgroup"],.888,342],undergroup:[["leftgroupunder","rightgroupunder"],.888,342],xmapsto:[["leftmapsto","rightarrow"],1.5,522],xtofrom:[["leftToFrom","rightToFrom"],1.75,528],xrightleftarrows:[["baraboveleftarrow","rightarrowabovebar"],1.75,901],xrightequilibrium:[["baraboveshortleftharpoon","rightharpoonaboveshortbar"],1.75,716],xleftequilibrium:[["shortbaraboveleftharpoon","shortrightharpoonabovebar"],1.75,716]},BD=new Set(["widehat","widecheck","widetilde","utilde"]),D0=function(n,t){function i(){var c=4e5,h=n.label.slice(1);if(BD.has(h)){var p=n,f=p.base.type==="ordgroup"?p.base.body.length:1,d,w,b;if(f>5)h==="widehat"||h==="widecheck"?(d=420,c=2364,b=.42,w=h+"4"):(d=312,c=2340,b=.34,w="tilde4");else{var D=[1,1,2,2,3,3][f];h==="widehat"||h==="widecheck"?(c=[0,1062,2364,2364,2364][D],d=[0,239,300,360,420][D],b=[0,.24,.3,.3,.36,.42][D],w=h+D):(c=[0,600,1033,2339,2340][D],d=[0,260,286,306,312][D],b=[0,.26,.286,.3,.306,.34][D],w="tilde"+D)}var _=new Bi(w),T=new ai([_],{width:"100%",height:we(b),viewBox:"0 0 "+c+" "+d,preserveAspectRatio:"none"});return{span:$i([],[T],t),minWidth:0,height:b}}else{var E=[],z=OD[h],[O,ne,K]=z,H=K/1e3,I=O.length,re,ee;if(I===1){var U=z[3];re=["hide-tail"],ee=[U]}else if(I===2)re=["halfarrow-left","halfarrow-right"],ee=["xMinYMin","xMaxYMin"];else if(I===3)re=["brace-left","brace-center","brace-right"],ee=["xMinYMin","xMidYMin","xMaxYMin"];else throw new Error(`Correct katexImagesData or update code here to support
                    `+I+" children.");for(var ie=0;ie<I;ie++){var le=new Bi(O[ie]),Le=new ai([le],{width:"400em",height:we(H),viewBox:"0 0 "+c+" "+K,preserveAspectRatio:ee[ie]+" slice"}),me=$i([re[ie]],[Le],t);if(I===1)return{span:me,minWidth:ne,height:H};me.style.height=we(H),E.push(me)}return{span:he(["stretchy"],E,t),minWidth:ne,height:H}}}var{span:l,minWidth:o,height:s}=i();return l.height=s,l.style.height=we(s),o>0&&(l.style.minWidth=we(o)),l},$D=function(n,t,i,l,o){var s,c=n.height+n.depth+i+l;if(/fbox|color|angl/.test(t)){if(s=he(["stretchy",t],[],o),t==="fbox"){var h=o.color&&o.getColor();h&&(s.style.borderColor=h)}}else{var p=[];/^[bx]cancel$/.test(t)&&p.push(new g1({x1:"0",y1:"0",x2:"100%",y2:"100%","stroke-width":"0.046em"})),/^x?cancel$/.test(t)&&p.push(new g1({x1:"0",y1:"100%",x2:"100%",y2:"0","stroke-width":"0.046em"}));var f=new ai(p,{width:"100%",height:we(c)});s=$i([],[f],o)}return s.height=c,s.style.height=we(c),s};function nn(e,n){if(!e||e.type!==n)throw new Error("Expected node of type "+n+", but got "+(e?"node of type "+e.type:String(e)));return e}function fh(e){var n=C0(e);if(!n)throw new Error("Expected node of symbol group type, but got "+(e?"node of type "+e.type:String(e)));return n}function C0(e){return e&&(e.type==="atom"||kD.hasOwnProperty(e.type))?e:null}var gh=(e,n)=>{var t,i,l;e&&e.type==="supsub"?(i=nn(e.base,"accent"),t=i.base,e.base=t,l=wD(mn(e,n)),e.base=i):(i=nn(e,"accent"),t=i.base);var o=mn(t,n.havingCrampedStyle()),s=i.isShifty&&oi(t),c=0;if(s){var h=oo(t),p=mn(h,n.havingCrampedStyle());c=Af(p).skew}var f=i.label==="\\c",d=f?o.height+o.depth:Math.min(o.height,n.fontMetrics().xHeight),w;if(i.isStretchy)w=D0(i,n),w=dn({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"elem",elem:w,wrapperClasses:["svg-align"],wrapperStyle:c>0?{width:"calc(100% - "+we(2*c)+")",marginLeft:we(2*c)}:void 0}]});else{var b,D;i.label==="\\vec"?(b=f4("vec",n),D=d4.vec[1]):(b=k0({mode:i.mode,text:i.label},n,"textord"),b=Af(b),b.italic=0,D=b.width,f&&(d+=b.depth)),w=he(["accent-body"],[b]);var _=i.label==="\\textcircled";_&&(w.classes.push("accent-full"),d=o.height);var T=c;_||(T-=D/2),w.style.left=we(T),i.label==="\\textcircled"&&(w.style.top=".2em"),w=dn({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"kern",size:-d},{type:"elem",elem:w}]})}var E=he(["mord","accent"],[w],n);return l?(l.children[0]=E,l.height=Math.max(E.height,l.height),l.classes[0]="mord",l):E},k4=(e,n)=>{var t=e.isStretchy?S0(e.label):new fe("mo",[mr(e.label,e.mode)]),i=new fe("mover",[xn(e.base,n),t]);return i.setAttribute("accent","true"),i},HD=new RegExp(["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring"].map(e=>"\\"+e).join("|"));Se({type:"accent",names:["\\acute","\\grave","\\ddot","\\tilde","\\bar","\\breve","\\check","\\hat","\\vec","\\dot","\\mathring","\\widecheck","\\widehat","\\widetilde","\\overrightarrow","\\overleftarrow","\\Overrightarrow","\\overleftrightarrow","\\overgroup","\\overlinesegment","\\overleftharpoon","\\overrightharpoon"],props:{numArgs:1},handler:(e,n)=>{var t=h0(n[0]),i=!HD.test(e.funcName),l=!i||e.funcName==="\\widehat"||e.funcName==="\\widetilde"||e.funcName==="\\widecheck";return{type:"accent",mode:e.parser.mode,label:e.funcName,isStretchy:i,isShifty:l,base:t}},htmlBuilder:gh,mathmlBuilder:k4});Se({type:"accent",names:["\\'","\\`","\\^","\\~","\\=","\\u","\\.",'\\"',"\\c","\\r","\\H","\\v","\\textcircled"],props:{numArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["primitive"]},handler:(e,n)=>{var t=n[0],i=e.parser.mode;return i==="math"&&(e.parser.settings.reportNonstrict("mathVsTextAccents","LaTeX's accent "+e.funcName+" works only in text mode"),i="text"),{type:"accent",mode:i,label:e.funcName,isStretchy:!1,isShifty:!0,base:t}},htmlBuilder:gh,mathmlBuilder:k4});Se({type:"accentUnder",names:["\\underleftarrow","\\underrightarrow","\\underleftrightarrow","\\undergroup","\\underlinesegment","\\utilde"],props:{numArgs:1},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=n[0];return{type:"accentUnder",mode:t.mode,label:i,base:l}},htmlBuilder:(e,n)=>{var t=mn(e.base,n),i=D0(e,n),l=e.label==="\\utilde"?.12:0,o=dn({positionType:"top",positionData:t.height,children:[{type:"elem",elem:i,wrapperClasses:["svg-align"]},{type:"kern",size:l},{type:"elem",elem:t}]});return he(["mord","accentunder"],[o],n)},mathmlBuilder:(e,n)=>{var t=S0(e.label),i=new fe("munder",[xn(e.base,n),t]);return i.setAttribute("accentunder","true"),i}});var Ws=e=>{var n=new fe("mpadded",e?[e]:[]);return n.setAttribute("width","+0.6em"),n.setAttribute("lspace","0.3em"),n};Se({type:"xArrow",names:["\\xleftarrow","\\xrightarrow","\\xLeftarrow","\\xRightarrow","\\xleftrightarrow","\\xLeftrightarrow","\\xhookleftarrow","\\xhookrightarrow","\\xmapsto","\\xrightharpoondown","\\xrightharpoonup","\\xleftharpoondown","\\xleftharpoonup","\\xrightleftharpoons","\\xleftrightharpoons","\\xlongequal","\\xtwoheadrightarrow","\\xtwoheadleftarrow","\\xtofrom","\\xrightleftarrows","\\xrightequilibrium","\\xleftequilibrium","\\\\cdrightarrow","\\\\cdleftarrow","\\\\cdlongequal"],props:{numArgs:1,numOptionalArgs:1},handler(e,n,t){var{parser:i,funcName:l}=e;return{type:"xArrow",mode:i.mode,label:l,body:n[0],below:t[0]}},htmlBuilder(e,n){var t=n.style,i=n.havingStyle(t.sup()),l=il(mn(e.body,i,n),n),o=e.label.slice(0,2)==="\\x"?"x":"cd";l.classes.push(o+"-arrow-pad");var s;e.below&&(i=n.havingStyle(t.sub()),s=il(mn(e.below,i,n),n),s.classes.push(o+"-arrow-pad"));var c=D0(e,n),h=-n.fontMetrics().axisHeight+.5*c.height,p=-n.fontMetrics().axisHeight-.5*c.height-.111;(l.depth>.25||e.label==="\\xleftequilibrium")&&(p-=l.depth);var f;if(s){var d=-n.fontMetrics().axisHeight+s.height+.5*c.height+.111;f=dn({positionType:"individualShift",children:[{type:"elem",elem:l,shift:p},{type:"elem",elem:c,shift:h},{type:"elem",elem:s,shift:d}]})}else f=dn({positionType:"individualShift",children:[{type:"elem",elem:l,shift:p},{type:"elem",elem:c,shift:h}]});return f.children[0].children[0].children[1].classes.push("svg-align"),he(["mrel","x-arrow"],[f],n)},mathmlBuilder(e,n){var t=S0(e.label);t.setAttribute("minsize",e.label.charAt(0)==="x"?"1.75em":"3.0em");var i;if(e.body){var l=Ws(xn(e.body,n));if(e.below){var o=Ws(xn(e.below,n));i=new fe("munderover",[t,o,l])}else i=new fe("mover",[t,l])}else if(e.below){var s=Ws(xn(e.below,n));i=new fe("munder",[t,s])}else i=Ws(),i=new fe("mover",[t,i]);return i}});function S4(e,n){var t=Yn(e.body,n,!0);return he([e.mclass],t,n)}function D4(e,n){var t,i=jt(e.body,n);return e.mclass==="minner"?t=new fe("mpadded",i):e.mclass==="mord"?e.isCharacterBox?(t=i[0],t.type="mi"):t=new fe("mi",i):(e.isCharacterBox?(t=i[0],t.type="mo"):t=new fe("mo",i),e.mclass==="mbin"?(t.attributes.lspace="0.22em",t.attributes.rspace="0.22em"):e.mclass==="mpunct"?(t.attributes.lspace="0em",t.attributes.rspace="0.17em"):e.mclass==="mopen"||e.mclass==="mclose"?(t.attributes.lspace="0em",t.attributes.rspace="0em"):e.mclass==="minner"&&(t.attributes.lspace="0.0556em",t.attributes.width="+0.1111em")),t}Se({type:"mclass",names:["\\mathord","\\mathbin","\\mathrel","\\mathopen","\\mathclose","\\mathpunct","\\mathinner"],props:{numArgs:1,primitive:!0},handler(e,n){var{parser:t,funcName:i}=e,l=n[0];return{type:"mclass",mode:t.mode,mclass:"m"+i.slice(5),body:Fn(l),isCharacterBox:oi(l)}},htmlBuilder:S4,mathmlBuilder:D4});var _0=e=>{var n=e.type==="ordgroup"&&e.body.length?e.body[0]:e;return n.type==="atom"&&(n.family==="bin"||n.family==="rel")?"m"+n.family:"mord"};Se({type:"mclass",names:["\\@binrel"],props:{numArgs:2},handler(e,n){var{parser:t}=e;return{type:"mclass",mode:t.mode,mclass:_0(n[0]),body:Fn(n[1]),isCharacterBox:oi(n[1])}}});Se({type:"mclass",names:["\\stackrel","\\overset","\\underset"],props:{numArgs:2},handler(e,n){var{parser:t,funcName:i}=e,l=n[1],o=n[0],s;i!=="\\stackrel"?s=_0(l):s="mrel";var c={type:"op",mode:l.mode,limits:!0,alwaysHandleSupSub:!0,parentIsSupSub:!1,symbol:!1,suppressBaseShift:i!=="\\stackrel",body:Fn(l)},h={type:"supsub",mode:o.mode,base:c,sup:i==="\\underset"?null:o,sub:i==="\\underset"?o:null};return{type:"mclass",mode:t.mode,mclass:s,body:[h],isCharacterBox:oi(h)}},htmlBuilder:S4,mathmlBuilder:D4});Se({type:"pmb",names:["\\pmb"],props:{numArgs:1,allowedInText:!0},handler(e,n){var{parser:t}=e;return{type:"pmb",mode:t.mode,mclass:_0(n[0]),body:Fn(n[0])}},htmlBuilder(e,n){var t=Yn(e.body,n,!0),i=he([e.mclass],t,n);return i.style.textShadow="0.02em 0.01em 0.04px",i},mathmlBuilder(e,n){var t=jt(e.body,n),i=new fe("mstyle",t);return i.setAttribute("style","text-shadow: 0.02em 0.01em 0.04px"),i}});var qD={">":"\\\\cdrightarrow","<":"\\\\cdleftarrow","=":"\\\\cdlongequal",A:"\\uparrow",V:"\\downarrow","|":"\\Vert",".":"no arrow"},Ff=()=>({type:"styling",body:[],mode:"math",style:"display"}),Of=e=>e.type==="textord"&&e.text==="@",UD=(e,n)=>(e.type==="mathord"||e.type==="atom")&&e.text===n;function VD(e,n,t){var i=qD[e];switch(i){case"\\\\cdrightarrow":case"\\\\cdleftarrow":return t.callFunction(i,[n[0]],[n[1]]);case"\\uparrow":case"\\downarrow":{var l=t.callFunction("\\\\cdleft",[n[0]],[]),o={type:"atom",text:i,mode:"math",family:"rel"},s=t.callFunction("\\Big",[o],[]),c=t.callFunction("\\\\cdright",[n[1]],[]),h={type:"ordgroup",mode:"math",body:[l,s,c]};return t.callFunction("\\\\cdparent",[h],[])}case"\\\\cdlongequal":return t.callFunction("\\\\cdlongequal",[],[]);case"\\Vert":{var p={type:"textord",text:"\\Vert",mode:"math"};return t.callFunction("\\Big",[p],[])}default:return{type:"textord",text:" ",mode:"math"}}}function WD(e){var n=[];for(e.gullet.beginGroup(),e.gullet.macros.set("\\cr","\\\\\\relax"),e.gullet.beginGroup();;){n.push(e.parseExpression(!1,"\\\\")),e.gullet.endGroup(),e.gullet.beginGroup();var t=e.fetch().text;if(t==="&"||t==="\\\\")e.consume();else if(t==="\\end"){n[n.length-1].length===0&&n.pop();break}else throw new de("Expected \\\\ or \\cr or \\end",e.nextToken)}for(var i=[],l=[i],o=0;o<n.length;o++){for(var s=n[o],c=Ff(),h=0;h<s.length;h++)if(!Of(s[h]))c.body.push(s[h]);else{i.push(c),h+=1;var p=fh(s[h]).text,f=new Array(2);if(f[0]={type:"ordgroup",mode:"math",body:[]},f[1]={type:"ordgroup",mode:"math",body:[]},!"=|.".includes(p))if("<>AV".includes(p))for(var d=0;d<2;d++){for(var w=!0,b=h+1;b<s.length;b++){if(UD(s[b],p)){w=!1,h=b;break}if(Of(s[b]))throw new de("Missing a "+p+" character to complete a CD arrow.",s[b]);f[d].body.push(s[b])}if(w)throw new de("Missing a "+p+" character to complete a CD arrow.",s[h])}else throw new de('Expected one of "<>AV=|." after @',s[h]);var D=VD(p,f,e),_={type:"styling",body:[D],mode:"math",style:"display"};i.push(_),c=Ff()}o%2===0?i.push(c):i.shift(),i=[],l.push(i)}e.gullet.endGroup(),e.gullet.endGroup();var T=new Array(l[0].length).fill({type:"align",align:"c",pregap:.25,postgap:.25});return{type:"array",mode:"math",body:l,arraystretch:1,addJot:!0,rowGaps:[null],cols:T,colSeparationType:"CD",hLinesBeforeRow:new Array(l.length+1).fill([])}}Se({type:"cdlabel",names:["\\\\cdleft","\\\\cdright"],props:{numArgs:1},handler(e,n){var{parser:t,funcName:i}=e;return{type:"cdlabel",mode:t.mode,side:i.slice(4),label:n[0]}},htmlBuilder(e,n){var t=n.havingStyle(n.style.sup()),i=il(mn(e.label,t,n),n);return i.classes.push("cd-label-"+e.side),i.style.bottom=we(.8-i.depth),i.height=0,i.depth=0,i},mathmlBuilder(e,n){var t=new fe("mrow",[xn(e.label,n)]);return t=new fe("mpadded",[t]),t.setAttribute("width","0"),e.side==="left"&&t.setAttribute("lspace","-1width"),t.setAttribute("voffset","0.7em"),t=new fe("mstyle",[t]),t.setAttribute("displaystyle","false"),t.setAttribute("scriptlevel","1"),t}});Se({type:"cdlabelparent",names:["\\\\cdparent"],props:{numArgs:1},handler(e,n){var{parser:t}=e;return{type:"cdlabelparent",mode:t.mode,fragment:n[0]}},htmlBuilder(e,n){var t=il(mn(e.fragment,n),n);return t.classes.push("cd-vert-arrow"),t},mathmlBuilder(e,n){return new fe("mrow",[xn(e.fragment,n)])}});Se({type:"textord",names:["\\@char"],props:{numArgs:1,allowedInText:!0},handler(e,n){for(var{parser:t}=e,i=nn(n[0],"ordgroup"),l=i.body,o="",s=0;s<l.length;s++){var c=nn(l[s],"textord");o+=c.text}var h=parseInt(o),p;if(isNaN(h))throw new de("\\@char has non-numeric argument "+o);if(h<0||h>=1114111)throw new de("\\@char with invalid code point "+o);return h<=65535?p=String.fromCharCode(h):(h-=65536,p=String.fromCharCode((h>>10)+55296,(h&1023)+56320)),{type:"textord",mode:t.mode,text:p}}});var C4=(e,n)=>{var t=Yn(e.body,n.withColor(e.color),!1);return ui(t)},_4=(e,n)=>{var t=jt(e.body,n.withColor(e.color)),i=new fe("mstyle",t);return i.setAttribute("mathcolor",e.color),i};Se({type:"color",names:["\\textcolor"],props:{numArgs:2,allowedInText:!0,argTypes:["color","original"]},handler(e,n){var{parser:t}=e,i=nn(n[0],"color-token").color,l=n[1];return{type:"color",mode:t.mode,color:i,body:Fn(l)}},htmlBuilder:C4,mathmlBuilder:_4});Se({type:"color",names:["\\color"],props:{numArgs:1,allowedInText:!0,argTypes:["color"]},handler(e,n){var{parser:t,breakOnTokenText:i}=e,l=nn(n[0],"color-token").color;t.gullet.macros.set("\\current@color",l);var o=t.parseExpression(!0,i);return{type:"color",mode:t.mode,color:l,body:o}},htmlBuilder:C4,mathmlBuilder:_4});Se({type:"cr",names:["\\\\"],props:{numArgs:0,numOptionalArgs:0,allowedInText:!0},handler(e,n,t){var{parser:i}=e,l=i.gullet.future().text==="["?i.parseSizeGroup(!0):null,o=!i.settings.displayMode||!i.settings.useStrictBehavior("newLineInDisplayMode","In LaTeX, \\\\ or \\newline does nothing in display mode");return{type:"cr",mode:i.mode,newLine:o,size:l&&nn(l,"size").value}},htmlBuilder(e,n){var t=he(["mspace"],[],n);return e.newLine&&(t.classes.push("newline"),e.size&&(t.style.marginTop=we(Ln(e.size,n)))),t},mathmlBuilder(e,n){var t=new fe("mspace");return e.newLine&&(t.setAttribute("linebreak","newline"),e.size&&t.setAttribute("height",we(Ln(e.size,n)))),t}});var x1={"\\global":"\\global","\\long":"\\\\globallong","\\\\globallong":"\\\\globallong","\\def":"\\gdef","\\gdef":"\\gdef","\\edef":"\\xdef","\\xdef":"\\xdef","\\let":"\\\\globallet","\\futurelet":"\\\\globalfuture"},M4=e=>{var n=e.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(n))throw new de("Expected a control sequence",e);return n},GD=e=>{var n=e.gullet.popToken();return n.text==="="&&(n=e.gullet.popToken(),n.text===" "&&(n=e.gullet.popToken())),n},E4=(e,n,t,i)=>{var l=e.gullet.macros.get(t.text);l==null&&(t.noexpand=!0,l={tokens:[t],numArgs:0,unexpandable:!e.gullet.isExpandable(t.text)}),e.gullet.macros.set(n,l,i)};Se({type:"internal",names:["\\global","\\long","\\\\globallong"],props:{numArgs:0,allowedInText:!0},handler(e){var{parser:n,funcName:t}=e;n.consumeSpaces();var i=n.fetch();if(x1[i.text])return(t==="\\global"||t==="\\\\globallong")&&(i.text=x1[i.text]),nn(n.parseFunction(),"internal");throw new de("Invalid token after macro prefix",i)}});Se({type:"internal",names:["\\def","\\gdef","\\edef","\\xdef"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:n,funcName:t}=e,i=n.gullet.popToken(),l=i.text;if(/^(?:[\\{}$&#^_]|EOF)$/.test(l))throw new de("Expected a control sequence",i);for(var o=0,s,c=[[]];n.gullet.future().text!=="{";)if(i=n.gullet.popToken(),i.text==="#"){if(n.gullet.future().text==="{"){s=n.gullet.future(),c[o].push("{");break}if(i=n.gullet.popToken(),!/^[1-9]$/.test(i.text))throw new de('Invalid argument number "'+i.text+'"');if(parseInt(i.text)!==o+1)throw new de('Argument number "'+i.text+'" out of order');o++,c.push([])}else{if(i.text==="EOF")throw new de("Expected a macro definition");c[o].push(i.text)}var{tokens:h}=n.gullet.consumeArg();return s&&h.unshift(s),(t==="\\edef"||t==="\\xdef")&&(h=n.gullet.expandTokens(h),h.reverse()),n.gullet.macros.set(l,{tokens:h,numArgs:o,delimiters:c},t===x1[t]),{type:"internal",mode:n.mode}}});Se({type:"internal",names:["\\let","\\\\globallet"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:n,funcName:t}=e,i=M4(n.gullet.popToken());n.gullet.consumeSpaces();var l=GD(n);return E4(n,i,l,t==="\\\\globallet"),{type:"internal",mode:n.mode}}});Se({type:"internal",names:["\\futurelet","\\\\globalfuture"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e){var{parser:n,funcName:t}=e,i=M4(n.gullet.popToken()),l=n.gullet.popToken(),o=n.gullet.popToken();return E4(n,i,o,t==="\\\\globalfuture"),n.gullet.pushToken(o),n.gullet.pushToken(l),{type:"internal",mode:n.mode}}});var no=function(n,t,i){var l=Dn.math[n]&&Dn.math[n].replace,o=uh(l||n,t,i);if(!o)throw new Error("Unsupported symbol "+n+" and font size "+t+".");return o},vh=function(n,t,i,l){var o=i.havingBaseStyle(t),s=he(l.concat(o.sizingClasses(i)),[n],i),c=o.sizeMultiplier/i.sizeMultiplier;return s.height*=c,s.depth*=c,s.maxFontSize=o.sizeMultiplier,s},T4=function(n,t,i){var l=t.havingBaseStyle(i),o=(1-t.sizeMultiplier/l.sizeMultiplier)*t.fontMetrics().axisHeight;n.classes.push("delimcenter"),n.style.top=we(o),n.height-=o,n.depth+=o},XD=function(n,t,i,l,o,s){var c=kt(n,"Main-Regular",o,l),h=vh(c,t,l,s);return T4(h,l,t),h},YD=function(n,t,i,l){return kt(n,"Size"+t+"-Regular",i,l)},z4=function(n,t,i,l,o,s){var c=YD(n,t,o,l),h=vh(he(["delimsizing","size"+t],[c],l),Qe.TEXT,l,s);return i&&T4(h,l,Qe.TEXT),h},Hc=function(n,t,i){var l;t==="Size1-Regular"?l="delim-size1":l="delim-size4";var o=he(["delimsizinginner",l],[he([],[kt(n,t,i)])]);return{type:"elem",elem:o}},qc=function(n,t,i){var l=Nr["Size4-Regular"][n.charCodeAt(0)]?Nr["Size4-Regular"][n.charCodeAt(0)][4]:Nr["Size1-Regular"][n.charCodeAt(0)][4],o=new Bi("inner",hD(n,Math.round(1e3*t))),s=new ai([o],{width:we(l),height:we(t),style:"width:"+we(l),viewBox:"0 0 "+1e3*l+" "+Math.round(1e3*t),preserveAspectRatio:"xMinYMin"}),c=$i([],[s],i);return c.height=t,c.style.height=we(t),c.style.width=we(l),{type:"elem",elem:c}},k1=.008,Gs={type:"kern",size:-1*k1},QD=new Set(["|","\\lvert","\\rvert","\\vert"]),KD=new Set(["\\|","\\lVert","\\rVert","\\Vert"]),A4=function(n,t,i,l,o,s){var c,h,p,f,d="",w=0;c=p=f=n,h=null;var b="Size1-Regular";n==="\\uparrow"?p=f="⏐":n==="\\Uparrow"?p=f="‖":n==="\\downarrow"?c=p="⏐":n==="\\Downarrow"?c=p="‖":n==="\\updownarrow"?(c="\\uparrow",p="⏐",f="\\downarrow"):n==="\\Updownarrow"?(c="\\Uparrow",p="‖",f="\\Downarrow"):QD.has(n)?(p="∣",d="vert",w=333):KD.has(n)?(p="∥",d="doublevert",w=556):n==="["||n==="\\lbrack"?(c="⎡",p="⎢",f="⎣",b="Size4-Regular",d="lbrack",w=667):n==="]"||n==="\\rbrack"?(c="⎤",p="⎥",f="⎦",b="Size4-Regular",d="rbrack",w=667):n==="\\lfloor"||n==="⌊"?(p=c="⎢",f="⎣",b="Size4-Regular",d="lfloor",w=667):n==="\\lceil"||n==="⌈"?(c="⎡",p=f="⎢",b="Size4-Regular",d="lceil",w=667):n==="\\rfloor"||n==="⌋"?(p=c="⎥",f="⎦",b="Size4-Regular",d="rfloor",w=667):n==="\\rceil"||n==="⌉"?(c="⎤",p=f="⎥",b="Size4-Regular",d="rceil",w=667):n==="("||n==="\\lparen"?(c="⎛",p="⎜",f="⎝",b="Size4-Regular",d="lparen",w=875):n===")"||n==="\\rparen"?(c="⎞",p="⎟",f="⎠",b="Size4-Regular",d="rparen",w=875):n==="\\{"||n==="\\lbrace"?(c="⎧",h="⎨",f="⎩",p="⎪",b="Size4-Regular"):n==="\\}"||n==="\\rbrace"?(c="⎫",h="⎬",f="⎭",p="⎪",b="Size4-Regular"):n==="\\lgroup"||n==="⟮"?(c="⎧",f="⎩",p="⎪",b="Size4-Regular"):n==="\\rgroup"||n==="⟯"?(c="⎫",f="⎭",p="⎪",b="Size4-Regular"):n==="\\lmoustache"||n==="⎰"?(c="⎧",f="⎭",p="⎪",b="Size4-Regular"):(n==="\\rmoustache"||n==="⎱")&&(c="⎫",f="⎩",p="⎪",b="Size4-Regular");var D=no(c,b,o),_=D.height+D.depth,T=no(p,b,o),E=T.height+T.depth,z=no(f,b,o),O=z.height+z.depth,ne=0,K=1;if(h!==null){var H=no(h,b,o);ne=H.height+H.depth,K=2}var I=_+O+ne,re=Math.max(0,Math.ceil((t-I)/(K*E))),ee=I+re*K*E,U=l.fontMetrics().axisHeight;i&&(U*=l.sizeMultiplier);var ie=ee/2-U,le=[];if(d.length>0){var Le=ee-_-O,me=Math.round(ee*1e3),ae=mD(d,Math.round(Le*1e3)),xe=new Bi(d,ae),De=(w/1e3).toFixed(3)+"em",te=(me/1e3).toFixed(3)+"em",ke=new ai([xe],{width:De,height:te,viewBox:"0 0 "+w+" "+me}),M=$i([],[ke],l);M.height=me/1e3,M.style.width=De,M.style.height=te,le.push({type:"elem",elem:M})}else{if(le.push(Hc(f,b,o)),le.push(Gs),h===null){var F=ee-_-O+2*k1;le.push(qc(p,F,l))}else{var Q=(ee-_-O-ne)/2+2*k1;le.push(qc(p,Q,l)),le.push(Gs),le.push(Hc(h,b,o)),le.push(Gs),le.push(qc(p,Q,l))}le.push(Gs),le.push(Hc(c,b,o))}var A=l.havingBaseStyle(Qe.TEXT),Te=dn({positionType:"bottom",positionData:ie,children:le});return vh(he(["delimsizing","mult"],[Te],A),Qe.TEXT,l,s)},Uc=80,Vc=.08,Wc=function(n,t,i,l,o){var s=cD(n,l,i),c=new Bi(n,s),h=new ai([c],{width:"400em",height:we(t),viewBox:"0 0 400000 "+i,preserveAspectRatio:"xMinYMin slice"});return $i(["hide-tail"],[h],o)},ZD=function(n,t){var i=t.havingBaseSizing(),l=R4("\\surd",n*i.sizeMultiplier,J4,i),o=i.sizeMultiplier,s=Math.max(0,t.minRuleThickness-t.fontMetrics().sqrtRuleThickness),c,h=0,p=0,f=0,d;return l.type==="small"?(f=1e3+1e3*s+Uc,n<1?o=1:n<1.4&&(o=.7),h=(1+s+Vc)/o,p=(1+s)/o,c=Wc("sqrtMain",h,f,s,t),c.style.minWidth="0.853em",d=.833/o):l.type==="large"?(f=(1e3+Uc)*so[l.size],p=(so[l.size]+s)/o,h=(so[l.size]+s+Vc)/o,c=Wc("sqrtSize"+l.size,h,f,s,t),c.style.minWidth="1.02em",d=1/o):(h=n+s+Vc,p=n+s,f=Math.floor(1e3*n+s)+Uc,c=Wc("sqrtTall",h,f,s,t),c.style.minWidth="0.742em",d=1.056),c.height=p,c.style.height=we(h),{span:c,advanceWidth:d,ruleWidth:(t.fontMetrics().sqrtRuleThickness+s)*o}},P4=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","\\surd"]),eC=new Set(["\\uparrow","\\downarrow","\\updownarrow","\\Uparrow","\\Downarrow","\\Updownarrow","|","\\|","\\vert","\\Vert","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱"]),N4=new Set(["<",">","\\langle","\\rangle","/","\\backslash","\\lt","\\gt"]),so=[0,1.2,1.8,2.4,3],L4=function(n,t,i,l,o){if(n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle"),P4.has(n)||N4.has(n))return z4(n,t,!1,i,l,o);if(eC.has(n))return A4(n,so[t],!1,i,l,o);throw new de("Illegal delimiter: '"+n+"'")},nC=[{type:"small",style:Qe.SCRIPTSCRIPT},{type:"small",style:Qe.SCRIPT},{type:"small",style:Qe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4}],tC=[{type:"small",style:Qe.SCRIPTSCRIPT},{type:"small",style:Qe.SCRIPT},{type:"small",style:Qe.TEXT},{type:"stack"}],J4=[{type:"small",style:Qe.SCRIPTSCRIPT},{type:"small",style:Qe.SCRIPT},{type:"small",style:Qe.TEXT},{type:"large",size:1},{type:"large",size:2},{type:"large",size:3},{type:"large",size:4},{type:"stack"}],rC=function(n){if(n.type==="small")return"Main-Regular";if(n.type==="large")return"Size"+n.size+"-Regular";if(n.type==="stack")return"Size4-Regular";throw new Error("Add support for delim type '"+n.type+"' here.")},R4=function(n,t,i,l){for(var o=Math.min(2,3-l.style.size),s=o;s<i.length&&i[s].type!=="stack";s++){var c=no(n,rC(i[s]),"math"),h=c.height+c.depth;if(i[s].type==="small"){var p=l.havingBaseStyle(i[s].style);h*=p.sizeMultiplier}if(h>t)return i[s]}return i[i.length-1]},S1=function(n,t,i,l,o,s){n==="<"||n==="\\lt"||n==="⟨"?n="\\langle":(n===">"||n==="\\gt"||n==="⟩")&&(n="\\rangle");var c;N4.has(n)?c=nC:P4.has(n)?c=J4:c=tC;var h=R4(n,t,c,l);return h.type==="small"?XD(n,h.style,i,l,o,s):h.type==="large"?z4(n,h.size,i,l,o,s):A4(n,t,i,l,o,s)},Gc=function(n,t,i,l,o,s){var c=l.fontMetrics().axisHeight*l.sizeMultiplier,h=901,p=5/l.fontMetrics().ptPerEm,f=Math.max(t-c,i+c),d=Math.max(f/500*h,2*f-p);return S1(n,d,!0,l,o,s)},Bf={"\\bigl":{mclass:"mopen",size:1},"\\Bigl":{mclass:"mopen",size:2},"\\biggl":{mclass:"mopen",size:3},"\\Biggl":{mclass:"mopen",size:4},"\\bigr":{mclass:"mclose",size:1},"\\Bigr":{mclass:"mclose",size:2},"\\biggr":{mclass:"mclose",size:3},"\\Biggr":{mclass:"mclose",size:4},"\\bigm":{mclass:"mrel",size:1},"\\Bigm":{mclass:"mrel",size:2},"\\biggm":{mclass:"mrel",size:3},"\\Biggm":{mclass:"mrel",size:4},"\\big":{mclass:"mord",size:1},"\\Big":{mclass:"mord",size:2},"\\bigg":{mclass:"mord",size:3},"\\Bigg":{mclass:"mord",size:4}},iC=new Set(["(","\\lparen",")","\\rparen","[","\\lbrack","]","\\rbrack","\\{","\\lbrace","\\}","\\rbrace","\\lfloor","\\rfloor","⌊","⌋","\\lceil","\\rceil","⌈","⌉","<",">","\\langle","⟨","\\rangle","⟩","\\lt","\\gt","\\lvert","\\rvert","\\lVert","\\rVert","\\lgroup","\\rgroup","⟮","⟯","\\lmoustache","\\rmoustache","⎰","⎱","/","\\backslash","|","\\vert","\\|","\\Vert","\\uparrow","\\Uparrow","\\downarrow","\\Downarrow","\\updownarrow","\\Updownarrow","."]);function M0(e,n){var t=C0(e);if(t&&iC.has(t.text))return t;throw t?new de("Invalid delimiter '"+t.text+"' after '"+n.funcName+"'",e):new de("Invalid delimiter type '"+e.type+"'",e)}Se({type:"delimsizing",names:["\\bigl","\\Bigl","\\biggl","\\Biggl","\\bigr","\\Bigr","\\biggr","\\Biggr","\\bigm","\\Bigm","\\biggm","\\Biggm","\\big","\\Big","\\bigg","\\Bigg"],props:{numArgs:1,argTypes:["primitive"]},handler:(e,n)=>{var t=M0(n[0],e);return{type:"delimsizing",mode:e.parser.mode,size:Bf[e.funcName].size,mclass:Bf[e.funcName].mclass,delim:t.text}},htmlBuilder:(e,n)=>e.delim==="."?he([e.mclass]):L4(e.delim,e.size,n,e.mode,[e.mclass]),mathmlBuilder:e=>{var n=[];e.delim!=="."&&n.push(mr(e.delim,e.mode));var t=new fe("mo",n);e.mclass==="mopen"||e.mclass==="mclose"?t.setAttribute("fence","true"):t.setAttribute("fence","false"),t.setAttribute("stretchy","true");var i=we(so[e.size]);return t.setAttribute("minsize",i),t.setAttribute("maxsize",i),t}});function $f(e){if(!e.body)throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")}Se({type:"leftright-right",names:["\\right"],props:{numArgs:1,primitive:!0},handler:(e,n)=>{var t=e.parser.gullet.macros.get("\\current@color");if(t&&typeof t!="string")throw new de("\\current@color set to non-string in \\right");return{type:"leftright-right",mode:e.parser.mode,delim:M0(n[0],e).text,color:t}}});Se({type:"leftright",names:["\\left"],props:{numArgs:1,primitive:!0},handler:(e,n)=>{var t=M0(n[0],e),i=e.parser;++i.leftrightDepth;var l=i.parseExpression(!1);--i.leftrightDepth,i.expect("\\right",!1);var o=nn(i.parseFunction(),"leftright-right");return{type:"leftright",mode:i.mode,body:l,left:t.text,right:o.delim,rightColor:o.color}},htmlBuilder:(e,n)=>{$f(e);for(var t=Yn(e.body,n,!0,["mopen","mclose"]),i=0,l=0,o=!1,s=0;s<t.length;s++)t[s].isMiddle?o=!0:(i=Math.max(t[s].height,i),l=Math.max(t[s].depth,l));i*=n.sizeMultiplier,l*=n.sizeMultiplier;var c;if(e.left==="."?c=vo(n,["mopen"]):c=Gc(e.left,i,l,n,e.mode,["mopen"]),t.unshift(c),o)for(var h=1;h<t.length;h++){var p=t[h],f=p.isMiddle;f&&(t[h]=Gc(f.delim,i,l,f.options,e.mode,[]))}var d;if(e.right===".")d=vo(n,["mclose"]);else{var w=e.rightColor?n.withColor(e.rightColor):n;d=Gc(e.right,i,l,w,e.mode,["mclose"])}return t.push(d),he(["minner"],t,n)},mathmlBuilder:(e,n)=>{$f(e);var t=jt(e.body,n);if(e.left!=="."){var i=new fe("mo",[mr(e.left,e.mode)]);i.setAttribute("fence","true"),t.unshift(i)}if(e.right!=="."){var l=new fe("mo",[mr(e.right,e.mode)]);l.setAttribute("fence","true"),e.rightColor&&l.setAttribute("mathcolor",e.rightColor),t.push(l)}return ph(t)}});Se({type:"middle",names:["\\middle"],props:{numArgs:1,primitive:!0},handler:(e,n)=>{var t=M0(n[0],e);if(!e.parser.leftrightDepth)throw new de("\\middle without preceding \\left",t);return{type:"middle",mode:e.parser.mode,delim:t.text}},htmlBuilder:(e,n)=>{var t;if(e.delim===".")t=vo(n,[]);else{t=L4(e.delim,1,n,e.mode,[]);var i={delim:e.delim,options:n};t.isMiddle=i}return t},mathmlBuilder:(e,n)=>{var t=e.delim==="\\vert"||e.delim==="|"?mr("|","text"):mr(e.delim,e.mode),i=new fe("mo",[t]);return i.setAttribute("fence","true"),i.setAttribute("lspace","0.05em"),i.setAttribute("rspace","0.05em"),i}});var yh=(e,n)=>{var t=il(mn(e.body,n),n),i=e.label.slice(1),l=n.sizeMultiplier,o,s=0,c=oi(e.body);if(i==="sout")o=he(["stretchy","sout"]),o.height=n.fontMetrics().defaultRuleThickness/l,s=-.5*n.fontMetrics().xHeight;else if(i==="phase"){var h=Ln({number:.6,unit:"pt"},n),p=Ln({number:.35,unit:"ex"},n),f=n.havingBaseSizing();l=l/f.sizeMultiplier;var d=t.height+t.depth+h+p;t.style.paddingLeft=we(d/2+h);var w=Math.floor(1e3*d*l),b=sD(w),D=new ai([new Bi("phase",b)],{width:"400em",height:we(w/1e3),viewBox:"0 0 400000 "+w,preserveAspectRatio:"xMinYMin slice"});o=$i(["hide-tail"],[D],n),o.style.height=we(d),s=t.depth+h+p}else{/cancel/.test(i)?c||t.classes.push("cancel-pad"):i==="angl"?t.classes.push("anglpad"):t.classes.push("boxpad");var _=0,T=0,E=0;/box/.test(i)?(E=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness),_=n.fontMetrics().fboxsep+(i==="colorbox"?0:E),T=_):i==="angl"?(E=Math.max(n.fontMetrics().defaultRuleThickness,n.minRuleThickness),_=4*E,T=Math.max(0,.25-t.depth)):(_=c?.2:0,T=_),o=$D(t,i,_,T,n),/fbox|boxed|fcolorbox/.test(i)?(o.style.borderStyle="solid",o.style.borderWidth=we(E)):i==="angl"&&E!==.049&&(o.style.borderTopWidth=we(E),o.style.borderRightWidth=we(E)),s=t.depth+T,e.backgroundColor&&(o.style.backgroundColor=e.backgroundColor,e.borderColor&&(o.style.borderColor=e.borderColor))}var z;if(e.backgroundColor)z=dn({positionType:"individualShift",children:[{type:"elem",elem:o,shift:s},{type:"elem",elem:t,shift:0}]});else{var O=/cancel|phase/.test(i)?["svg-align"]:[];z=dn({positionType:"individualShift",children:[{type:"elem",elem:t,shift:0},{type:"elem",elem:o,shift:s,wrapperClasses:O}]})}return/cancel/.test(i)&&(z.height=t.height,z.depth=t.depth),/cancel/.test(i)&&!c?he(["mord","cancel-lap"],[z],n):he(["mord"],[z],n)},bh=(e,n)=>{var t=0,i=new fe(e.label.includes("colorbox")?"mpadded":"menclose",[xn(e.body,n)]);switch(e.label){case"\\cancel":i.setAttribute("notation","updiagonalstrike");break;case"\\bcancel":i.setAttribute("notation","downdiagonalstrike");break;case"\\phase":i.setAttribute("notation","phasorangle");break;case"\\sout":i.setAttribute("notation","horizontalstrike");break;case"\\fbox":i.setAttribute("notation","box");break;case"\\angl":i.setAttribute("notation","actuarial");break;case"\\fcolorbox":case"\\colorbox":if(t=n.fontMetrics().fboxsep*n.fontMetrics().ptPerEm,i.setAttribute("width","+"+2*t+"pt"),i.setAttribute("height","+"+2*t+"pt"),i.setAttribute("lspace",t+"pt"),i.setAttribute("voffset",t+"pt"),e.label==="\\fcolorbox"){var l=Math.max(n.fontMetrics().fboxrule,n.minRuleThickness);i.setAttribute("style","border: "+l+"em solid "+String(e.borderColor))}break;case"\\xcancel":i.setAttribute("notation","updiagonalstrike downdiagonalstrike");break}return e.backgroundColor&&i.setAttribute("mathbackground",e.backgroundColor),i};Se({type:"enclose",names:["\\colorbox"],props:{numArgs:2,allowedInText:!0,argTypes:["color","text"]},handler(e,n,t){var{parser:i,funcName:l}=e,o=nn(n[0],"color-token").color,s=n[1];return{type:"enclose",mode:i.mode,label:l,backgroundColor:o,body:s}},htmlBuilder:yh,mathmlBuilder:bh});Se({type:"enclose",names:["\\fcolorbox"],props:{numArgs:3,allowedInText:!0,argTypes:["color","color","text"]},handler(e,n,t){var{parser:i,funcName:l}=e,o=nn(n[0],"color-token").color,s=nn(n[1],"color-token").color,c=n[2];return{type:"enclose",mode:i.mode,label:l,backgroundColor:s,borderColor:o,body:c}},htmlBuilder:yh,mathmlBuilder:bh});Se({type:"enclose",names:["\\fbox"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!0},handler(e,n){var{parser:t}=e;return{type:"enclose",mode:t.mode,label:"\\fbox",body:n[0]}}});Se({type:"enclose",names:["\\cancel","\\bcancel","\\xcancel","\\sout","\\phase"],props:{numArgs:1},handler(e,n){var{parser:t,funcName:i}=e,l=n[0];return{type:"enclose",mode:t.mode,label:i,body:l}},htmlBuilder:yh,mathmlBuilder:bh});Se({type:"enclose",names:["\\angl"],props:{numArgs:1,argTypes:["hbox"],allowedInText:!1},handler(e,n){var{parser:t}=e;return{type:"enclose",mode:t.mode,label:"\\angl",body:n[0]}}});var I4={};function jr(e){for(var{type:n,names:t,props:i,handler:l,htmlBuilder:o,mathmlBuilder:s}=e,c={type:n,numArgs:i.numArgs||0,allowedInText:!1,numOptionalArgs:0,handler:l},h=0;h<t.length;++h)I4[t[h]]=c;o&&(u0[n]=o),s&&(c0[n]=s)}var j4={};function C(e,n){j4[e]=n}function Hf(e){var n=[];e.consumeSpaces();var t=e.fetch().text;for(t==="\\relax"&&(e.consume(),e.consumeSpaces(),t=e.fetch().text);t==="\\hline"||t==="\\hdashline";)e.consume(),n.push(t==="\\hdashline"),e.consumeSpaces(),t=e.fetch().text;return n}var E0=e=>{var n=e.parser.settings;if(!n.displayMode)throw new de("{"+e.envName+"} can be used only in display mode.")},aC=new Set(["gather","gather*"]);function wh(e){if(!e.includes("ed"))return!e.includes("*")}function Vi(e,n,t){var{hskipBeforeAndAfter:i,addJot:l,cols:o,arraystretch:s,colSeparationType:c,autoTag:h,singleRow:p,emptySingleRow:f,maxNumCols:d,leqno:w}=n;if(e.gullet.beginGroup(),p||e.gullet.macros.set("\\cr","\\\\\\relax"),!s){var b=e.gullet.expandMacroAsText("\\arraystretch");if(b==null)s=1;else if(s=parseFloat(b),!s||s<0)throw new de("Invalid \\arraystretch: "+b)}e.gullet.beginGroup();var D=[],_=[D],T=[],E=[],z=h!=null?[]:void 0;function O(){h&&e.gullet.macros.set("\\@eqnsw","1",!0)}function ne(){z&&(e.gullet.macros.get("\\df@tag")?(z.push(e.subparse([new Yt("\\df@tag")])),e.gullet.macros.set("\\df@tag",void 0,!0)):z.push(!!h&&e.gullet.macros.get("\\@eqnsw")==="1"))}for(O(),E.push(Hf(e));;){var K=e.parseExpression(!1,p?"\\end":"\\\\");e.gullet.endGroup(),e.gullet.beginGroup(),K={type:"ordgroup",mode:e.mode,body:K},t&&(K={type:"styling",mode:e.mode,style:t,body:[K]}),D.push(K);var H=e.fetch().text;if(H==="&"){if(d&&D.length===d){if(p||c)throw new de("Too many tab characters: &",e.nextToken);e.settings.reportNonstrict("textEnv","Too few columns specified in the {array} column argument.")}e.consume()}else if(H==="\\end"){ne(),D.length===1&&K.type==="styling"&&K.body[0].body.length===0&&(_.length>1||!f)&&_.pop(),E.length<_.length+1&&E.push([]);break}else if(H==="\\\\"){e.consume();var I=void 0;e.gullet.future().text!==" "&&(I=e.parseSizeGroup(!0)),T.push(I?I.value:null),ne(),E.push(Hf(e)),D=[],_.push(D),O()}else throw new de("Expected & or \\\\ or \\cr or \\end",e.nextToken)}return e.gullet.endGroup(),e.gullet.endGroup(),{type:"array",mode:e.mode,addJot:l,arraystretch:s,body:_,cols:o,rowGaps:T,hskipBeforeAndAfter:i,hLinesBeforeRow:E,colSeparationType:c,tags:z,leqno:w}}function xh(e){return e.slice(0,1)==="d"?"display":"text"}var Fr=function(n,t){var i,l,o=n.body.length,s=n.hLinesBeforeRow,c=0,h=new Array(o),p=[],f=Math.max(t.fontMetrics().arrayRuleWidth,t.minRuleThickness),d=1/t.fontMetrics().ptPerEm,w=5*d;if(n.colSeparationType&&n.colSeparationType==="small"){var b=t.havingStyle(Qe.SCRIPT).sizeMultiplier;w=.2778*(b/t.sizeMultiplier)}var D=n.colSeparationType==="CD"?Ln({number:3,unit:"ex"},t):12*d,_=3*d,T=n.arraystretch*D,E=.7*T,z=.3*T,O=0;function ne(ft){for(var gt=0;gt<ft.length;++gt)gt>0&&(O+=.25),p.push({pos:O,isDashed:ft[gt]})}for(ne(s[0]),i=0;i<n.body.length;++i){var K=n.body[i],H=E,I=z;c<K.length&&(c=K.length);var re=new Array(K.length);for(l=0;l<K.length;++l){var ee=mn(K[l],t);I<ee.depth&&(I=ee.depth),H<ee.height&&(H=ee.height),re[l]=ee}var U=n.rowGaps[i],ie=0;U&&(ie=Ln(U,t),ie>0&&(ie+=z,I<ie&&(I=ie),ie=0)),n.addJot&&(I+=_),re.height=H,re.depth=I,O+=H,re.pos=O,O+=I+ie,h[i]=re,ne(s[i+1])}var le=O/2+t.fontMetrics().axisHeight,Le=n.cols||[],me=[],ae,xe,De=[];if(n.tags&&n.tags.some(ft=>ft))for(i=0;i<o;++i){var te=h[i],ke=te.pos-le,M=n.tags[i],F=void 0;M===!0?F=he(["eqn-num"],[],t):M===!1?F=he([],[],t):F=he([],Yn(M,t,!0),t),F.depth=te.depth,F.height=te.height,De.push({type:"elem",elem:F,shift:ke})}for(l=0,xe=0;l<c||xe<Le.length;++l,++xe){for(var Q=Le[xe]||{},A=!0;Q.type==="separator";){if(A||(ae=he(["arraycolsep"],[]),ae.style.width=we(t.fontMetrics().doubleRuleSep),me.push(ae)),Q.separator==="|"||Q.separator===":"){var Te=Q.separator==="|"?"solid":"dashed",ze=he(["vertical-separator"],[],t);ze.style.height=we(O),ze.style.borderRightWidth=we(f),ze.style.borderRightStyle=Te,ze.style.margin="0 "+we(-f/2);var Ae=O-le;Ae&&(ze.style.verticalAlign=we(-Ae)),me.push(ze)}else throw new de("Invalid separator type: "+Q.separator);xe++,Q=Le[xe]||{},A=!1}if(!(l>=c)){var Ke=void 0;if(l>0||n.hskipBeforeAndAfter){var Ve;Ke=(Ve=Q.pregap)!=null?Ve:w,Ke!==0&&(ae=he(["arraycolsep"],[]),ae.style.width=we(Ke),me.push(ae))}var tn=[];for(i=0;i<o;++i){var bn=h[i],at=bn[l];if(at){var zn=bn.pos-le;at.depth=bn.depth,at.height=bn.height,tn.push({type:"elem",elem:at,shift:zn})}}if(tn=dn({positionType:"individualShift",children:tn}),tn=he(["col-align-"+(Q.align||"c")],[tn]),me.push(tn),l<c-1||n.hskipBeforeAndAfter){var lt;Ke=(lt=Q.postgap)!=null?lt:w,Ke!==0&&(ae=he(["arraycolsep"],[]),ae.style.width=we(Ke),me.push(ae))}}}if(h=he(["mtable"],me),p.length>0){for(var kr=rl("hline",t,f),Br=rl("hdashline",t,f),tt=[{type:"elem",elem:h,shift:0}];p.length>0;){var dr=p.pop(),$r=dr.pos-le;dr.isDashed?tt.push({type:"elem",elem:Br,shift:$r}):tt.push({type:"elem",elem:kr,shift:$r})}h=dn({positionType:"individualShift",children:tt})}if(De.length===0)return he(["mord"],[h],t);var Ft=dn({positionType:"individualShift",children:De});return Ft=he(["tag"],[Ft],t),ui([h,Ft])},lC={c:"center ",l:"left ",r:"right "},Or=function(n,t){for(var i=[],l=new fe("mtd",[],["mtr-glue"]),o=new fe("mtd",[],["mml-eqn-num"]),s=0;s<n.body.length;s++){for(var c=n.body[s],h=[],p=0;p<c.length;p++)h.push(new fe("mtd",[xn(c[p],t)]));n.tags&&n.tags[s]&&(h.unshift(l),h.push(l),n.leqno?h.unshift(o):h.push(o)),i.push(new fe("mtr",h))}var f=new fe("mtable",i),d=n.arraystretch===.5?.1:.16+n.arraystretch-1+(n.addJot?.09:0);f.setAttribute("rowspacing",we(d));var w="",b="";if(n.cols&&n.cols.length>0){var D=n.cols,_="",T=!1,E=0,z=D.length;D[0].type==="separator"&&(w+="top ",E=1),D[D.length-1].type==="separator"&&(w+="bottom ",z-=1);for(var O=E;O<z;O++)D[O].type==="align"?(b+=lC[D[O].align],T&&(_+="none "),T=!0):D[O].type==="separator"&&T&&(_+=D[O].separator==="|"?"solid ":"dashed ",T=!1);f.setAttribute("columnalign",b.trim()),/[sd]/.test(_)&&f.setAttribute("columnlines",_.trim())}if(n.colSeparationType==="align"){for(var ne=n.cols||[],K="",H=1;H<ne.length;H++)K+=H%2?"0em ":"1em ";f.setAttribute("columnspacing",K.trim())}else n.colSeparationType==="alignat"||n.colSeparationType==="gather"?f.setAttribute("columnspacing","0em"):n.colSeparationType==="small"?f.setAttribute("columnspacing","0.2778em"):n.colSeparationType==="CD"?f.setAttribute("columnspacing","0.5em"):f.setAttribute("columnspacing","1em");var I="",re=n.hLinesBeforeRow;w+=re[0].length>0?"left ":"",w+=re[re.length-1].length>0?"right ":"";for(var ee=1;ee<re.length-1;ee++)I+=re[ee].length===0?"none ":re[ee][0]?"dashed ":"solid ";return/[sd]/.test(I)&&f.setAttribute("rowlines",I.trim()),w!==""&&(f=new fe("menclose",[f]),f.setAttribute("notation",w.trim())),n.arraystretch&&n.arraystretch<1&&(f=new fe("mstyle",[f]),f.setAttribute("scriptlevel","1")),f},F4=function(n,t){n.envName.includes("ed")||E0(n);var i=[],l=n.envName.includes("at")?"alignat":"align",o=n.envName==="split",s=Vi(n.parser,{cols:i,addJot:!0,autoTag:o?void 0:wh(n.envName),emptySingleRow:!0,colSeparationType:l,maxNumCols:o?2:void 0,leqno:n.parser.settings.leqno},"display"),c,h=0,p={type:"ordgroup",mode:n.mode,body:[]};if(t[0]&&t[0].type==="ordgroup"){for(var f="",d=0;d<t[0].body.length;d++){var w=nn(t[0].body[d],"textord");f+=w.text}c=Number(f),h=c*2}var b=!h;s.body.forEach(function(E){for(var z=1;z<E.length;z+=2){var O=nn(E[z],"styling"),ne=nn(O.body[0],"ordgroup");ne.body.unshift(p)}if(b)h<E.length&&(h=E.length);else{var K=E.length/2;if(c<K)throw new de("Too many math in a row: "+("expected "+c+", but got "+K),E[0])}});for(var D=0;D<h;++D){var _="r",T=0;D%2===1?_="l":D>0&&b&&(T=1),i[D]={type:"align",align:_,pregap:T,postgap:0}}return s.colSeparationType=b?"align":"alignat",s};jr({type:"array",names:["array","darray"],props:{numArgs:1},handler(e,n){var t=C0(n[0]),i=t?[n[0]]:nn(n[0],"ordgroup").body,l=i.map(function(s){var c=fh(s),h=c.text;if("lcr".includes(h))return{type:"align",align:h};if(h==="|")return{type:"separator",separator:"|"};if(h===":")return{type:"separator",separator:":"};throw new de("Unknown column alignment: "+h,s)}),o={cols:l,hskipBeforeAndAfter:!0,maxNumCols:l.length};return Vi(e.parser,o,xh(e.envName))},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["matrix","pmatrix","bmatrix","Bmatrix","vmatrix","Vmatrix","matrix*","pmatrix*","bmatrix*","Bmatrix*","vmatrix*","Vmatrix*"],props:{numArgs:0},handler(e){var n={matrix:null,pmatrix:["(",")"],bmatrix:["[","]"],Bmatrix:["\\{","\\}"],vmatrix:["|","|"],Vmatrix:["\\Vert","\\Vert"]}[e.envName.replace("*","")],t="c",i={hskipBeforeAndAfter:!1,cols:[{type:"align",align:t}]};if(e.envName.charAt(e.envName.length-1)==="*"){var l=e.parser;if(l.consumeSpaces(),l.fetch().text==="["){if(l.consume(),l.consumeSpaces(),t=l.fetch().text,!"lcr".includes(t))throw new de("Expected l or c or r",l.nextToken);l.consume(),l.consumeSpaces(),l.expect("]"),l.consume(),i.cols=[{type:"align",align:t}]}}var o=Vi(e.parser,i,xh(e.envName)),s=Math.max(0,...o.body.map(c=>c.length));return o.cols=new Array(s).fill({type:"align",align:t}),n?{type:"leftright",mode:e.mode,body:[o],left:n[0],right:n[1],rightColor:void 0}:o},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["smallmatrix"],props:{numArgs:0},handler(e){var n={arraystretch:.5},t=Vi(e.parser,n,"script");return t.colSeparationType="small",t},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["subarray"],props:{numArgs:1},handler(e,n){var t=C0(n[0]),i=t?[n[0]]:nn(n[0],"ordgroup").body,l=i.map(function(s){var c=fh(s),h=c.text;if("lc".includes(h))return{type:"align",align:h};throw new de("Unknown column alignment: "+h,s)});if(l.length>1)throw new de("{subarray} can contain only one column");var o={cols:l,hskipBeforeAndAfter:!1,arraystretch:.5};if(o=Vi(e.parser,o,"script"),o.body.length>0&&o.body[0].length>1)throw new de("{subarray} can contain only one column");return o},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["cases","dcases","rcases","drcases"],props:{numArgs:0},handler(e){var n={arraystretch:1.2,cols:[{type:"align",align:"l",pregap:0,postgap:1},{type:"align",align:"l",pregap:0,postgap:0}]},t=Vi(e.parser,n,xh(e.envName));return{type:"leftright",mode:e.mode,body:[t],left:e.envName.includes("r")?".":"\\{",right:e.envName.includes("r")?"\\}":".",rightColor:void 0}},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["align","align*","aligned","split"],props:{numArgs:0},handler:F4,htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["gathered","gather","gather*"],props:{numArgs:0},handler(e){aC.has(e.envName)&&E0(e);var n={cols:[{type:"align",align:"c"}],addJot:!0,colSeparationType:"gather",autoTag:wh(e.envName),emptySingleRow:!0,leqno:e.parser.settings.leqno};return Vi(e.parser,n,"display")},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["alignat","alignat*","alignedat"],props:{numArgs:1},handler:F4,htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["equation","equation*"],props:{numArgs:0},handler(e){E0(e);var n={autoTag:wh(e.envName),emptySingleRow:!0,singleRow:!0,maxNumCols:1,leqno:e.parser.settings.leqno};return Vi(e.parser,n,"display")},htmlBuilder:Fr,mathmlBuilder:Or});jr({type:"array",names:["CD"],props:{numArgs:0},handler(e){return E0(e),WD(e.parser)},htmlBuilder:Fr,mathmlBuilder:Or});C("\\nonumber","\\gdef\\@eqnsw{0}");C("\\notag","\\nonumber");Se({type:"text",names:["\\hline","\\hdashline"],props:{numArgs:0,allowedInText:!0,allowedInMath:!0},handler(e,n){throw new de(e.funcName+" valid only within array environment")}});var qf=I4;Se({type:"environment",names:["\\begin","\\end"],props:{numArgs:1,argTypes:["text"]},handler(e,n){var{parser:t,funcName:i}=e,l=n[0];if(l.type!=="ordgroup")throw new de("Invalid environment name",l);for(var o="",s=0;s<l.body.length;++s)o+=nn(l.body[s],"textord").text;if(i==="\\begin"){if(!qf.hasOwnProperty(o))throw new de("No such environment: "+o,l);var c=qf[o],{args:h,optArgs:p}=t.parseArguments("\\begin{"+o+"}",c),f={mode:t.mode,envName:o,parser:t},d=c.handler(f,h,p);t.expect("\\end",!1);var w=t.nextToken,b=nn(t.parseFunction(),"environment");if(b.name!==o)throw new de("Mismatch: \\begin{"+o+"} matched by \\end{"+b.name+"}",w);return d}return{type:"environment",mode:t.mode,name:o,nameGroup:l}}});var O4=(e,n)=>{var t=e.font,i=n.withFont(t);return mn(e.body,i)},B4=(e,n)=>{var t=e.font,i=n.withFont(t);return xn(e.body,i)},Uf={"\\Bbb":"\\mathbb","\\bold":"\\mathbf","\\frak":"\\mathfrak","\\bm":"\\boldsymbol"};Se({type:"font",names:["\\mathrm","\\mathit","\\mathbf","\\mathnormal","\\mathsfit","\\mathbb","\\mathcal","\\mathfrak","\\mathscr","\\mathsf","\\mathtt","\\Bbb","\\bold","\\frak"],props:{numArgs:1,allowedInArgument:!0},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=h0(n[0]),o=i;return o in Uf&&(o=Uf[o]),{type:"font",mode:t.mode,font:o.slice(1),body:l}},htmlBuilder:O4,mathmlBuilder:B4});Se({type:"mclass",names:["\\boldsymbol","\\bm"],props:{numArgs:1},handler:(e,n)=>{var{parser:t}=e,i=n[0];return{type:"mclass",mode:t.mode,mclass:_0(i),body:[{type:"font",mode:t.mode,font:"boldsymbol",body:i}],isCharacterBox:oi(i)}}});Se({type:"font",names:["\\rm","\\sf","\\tt","\\bf","\\it","\\cal"],props:{numArgs:0,allowedInText:!0},handler:(e,n)=>{var{parser:t,funcName:i,breakOnTokenText:l}=e,{mode:o}=t,s=t.parseExpression(!0,l),c="math"+i.slice(1);return{type:"font",mode:o,font:c,body:{type:"ordgroup",mode:t.mode,body:s}}},htmlBuilder:O4,mathmlBuilder:B4});var oC=(e,n)=>{var t=n.style,i=t.fracNum(),l=t.fracDen(),o;o=n.havingStyle(i);var s=mn(e.numer,o,n);if(e.continued){var c=8.5/n.fontMetrics().ptPerEm,h=3.5/n.fontMetrics().ptPerEm;s.height=s.height<c?c:s.height,s.depth=s.depth<h?h:s.depth}o=n.havingStyle(l);var p=mn(e.denom,o,n),f,d,w;e.hasBarLine?(e.barSize?(d=Ln(e.barSize,n),f=rl("frac-line",n,d)):f=rl("frac-line",n),d=f.height,w=f.height):(f=null,d=0,w=n.fontMetrics().defaultRuleThickness);var b,D,_;t.size===Qe.DISPLAY.size?(b=n.fontMetrics().num1,d>0?D=3*w:D=7*w,_=n.fontMetrics().denom1):(d>0?(b=n.fontMetrics().num2,D=w):(b=n.fontMetrics().num3,D=3*w),_=n.fontMetrics().denom2);var T;if(f){var z=n.fontMetrics().axisHeight;b-s.depth-(z+.5*d)<D&&(b+=D-(b-s.depth-(z+.5*d))),z-.5*d-(p.height-_)<D&&(_+=D-(z-.5*d-(p.height-_)));var O=-(z-.5*d);T=dn({positionType:"individualShift",children:[{type:"elem",elem:p,shift:_},{type:"elem",elem:f,shift:O},{type:"elem",elem:s,shift:-b}]})}else{var E=b-s.depth-(p.height-_);E<D&&(b+=.5*(D-E),_+=.5*(D-E)),T=dn({positionType:"individualShift",children:[{type:"elem",elem:p,shift:_},{type:"elem",elem:s,shift:-b}]})}o=n.havingStyle(t),T.height*=o.sizeMultiplier/n.sizeMultiplier,T.depth*=o.sizeMultiplier/n.sizeMultiplier;var ne;t.size===Qe.DISPLAY.size?ne=n.fontMetrics().delim1:t.size===Qe.SCRIPTSCRIPT.size?ne=n.havingStyle(Qe.SCRIPT).fontMetrics().delim2:ne=n.fontMetrics().delim2;var K,H;return e.leftDelim==null?K=vo(n,["mopen"]):K=S1(e.leftDelim,ne,!0,n.havingStyle(t),e.mode,["mopen"]),e.continued?H=he([]):e.rightDelim==null?H=vo(n,["mclose"]):H=S1(e.rightDelim,ne,!0,n.havingStyle(t),e.mode,["mclose"]),he(["mord"].concat(o.sizingClasses(n)),[K,he(["mfrac"],[T]),H],n)},sC=(e,n)=>{var t=new fe("mfrac",[xn(e.numer,n),xn(e.denom,n)]);if(!e.hasBarLine)t.setAttribute("linethickness","0px");else if(e.barSize){var i=Ln(e.barSize,n);t.setAttribute("linethickness",we(i))}if(e.leftDelim!=null||e.rightDelim!=null){var l=[];if(e.leftDelim!=null){var o=new fe("mo",[new qn(e.leftDelim.replace("\\",""))]);o.setAttribute("fence","true"),l.push(o)}if(l.push(t),e.rightDelim!=null){var s=new fe("mo",[new qn(e.rightDelim.replace("\\",""))]);s.setAttribute("fence","true"),l.push(s)}return ph(l)}return t},$4=(e,n)=>{if(!n)return e;var t={type:"styling",mode:e.mode,style:n,body:[e]};return t};Se({type:"genfrac",names:["\\cfrac","\\dfrac","\\frac","\\tfrac","\\dbinom","\\binom","\\tbinom","\\\\atopfrac","\\\\bracefrac","\\\\brackfrac"],props:{numArgs:2,allowedInArgument:!0},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=n[0],o=n[1],s,c=null,h=null;switch(i){case"\\cfrac":case"\\dfrac":case"\\frac":case"\\tfrac":s=!0;break;case"\\\\atopfrac":s=!1;break;case"\\dbinom":case"\\binom":case"\\tbinom":s=!1,c="(",h=")";break;case"\\\\bracefrac":s=!1,c="\\{",h="\\}";break;case"\\\\brackfrac":s=!1,c="[",h="]";break;default:throw new Error("Unrecognized genfrac command")}var p=i==="\\cfrac",f=null;return p||i.startsWith("\\d")?f="display":i.startsWith("\\t")&&(f="text"),$4({type:"genfrac",mode:t.mode,numer:l,denom:o,continued:p,hasBarLine:s,leftDelim:c,rightDelim:h,barSize:null},f)},htmlBuilder:oC,mathmlBuilder:sC});Se({type:"infix",names:["\\over","\\choose","\\atop","\\brace","\\brack"],props:{numArgs:0,infix:!0},handler(e){var{parser:n,funcName:t,token:i}=e,l;switch(t){case"\\over":l="\\frac";break;case"\\choose":l="\\binom";break;case"\\atop":l="\\\\atopfrac";break;case"\\brace":l="\\\\bracefrac";break;case"\\brack":l="\\\\brackfrac";break;default:throw new Error("Unrecognized infix genfrac command")}return{type:"infix",mode:n.mode,replaceWith:l,token:i}}});var Vf=["display","text","script","scriptscript"],Wf=function(n){var t=null;return n.length>0&&(t=n,t=t==="."?null:t),t};Se({type:"genfrac",names:["\\genfrac"],props:{numArgs:6,allowedInArgument:!0,argTypes:["math","math","size","text","math","math"]},handler(e,n){var{parser:t}=e,i=n[4],l=n[5],o=h0(n[0]),s=o.type==="atom"&&o.family==="open"?Wf(o.text):null,c=h0(n[1]),h=c.type==="atom"&&c.family==="close"?Wf(c.text):null,p=nn(n[2],"size"),f,d=null;p.isBlank?f=!0:(d=p.value,f=d.number>0);var w=null,b=n[3];if(b.type==="ordgroup"){if(b.body.length>0){var D=nn(b.body[0],"textord");w=Vf[Number(D.text)]}}else b=nn(b,"textord"),w=Vf[Number(b.text)];return $4({type:"genfrac",mode:t.mode,numer:i,denom:l,continued:!1,hasBarLine:f,barSize:d,leftDelim:s,rightDelim:h},w)}});Se({type:"infix",names:["\\above"],props:{numArgs:1,argTypes:["size"],infix:!0},handler(e,n){var{parser:t,funcName:i,token:l}=e;return{type:"infix",mode:t.mode,replaceWith:"\\\\abovefrac",size:nn(n[0],"size").value,token:l}}});Se({type:"genfrac",names:["\\\\abovefrac"],props:{numArgs:3,argTypes:["math","size","math"]},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=n[0],o=nn(n[1],"infix").size;if(!o)throw new Error("\\\\abovefrac expected size, but got "+String(o));var s=n[2],c=o.number>0;return{type:"genfrac",mode:t.mode,numer:l,denom:s,continued:!1,hasBarLine:c,barSize:o,leftDelim:null,rightDelim:null}}});var H4=(e,n)=>{var t=n.style,i,l;e.type==="supsub"?(i=e.sup?mn(e.sup,n.havingStyle(t.sup()),n):mn(e.sub,n.havingStyle(t.sub()),n),l=nn(e.base,"horizBrace")):l=nn(e,"horizBrace");var o=mn(l.base,n.havingBaseStyle(Qe.DISPLAY)),s=D0(l,n),c;if(l.isOver?(c=dn({positionType:"firstBaseline",children:[{type:"elem",elem:o},{type:"kern",size:.1},{type:"elem",elem:s}]}),c.children[0].children[0].children[1].classes.push("svg-align")):(c=dn({positionType:"bottom",positionData:o.depth+.1+s.height,children:[{type:"elem",elem:s},{type:"kern",size:.1},{type:"elem",elem:o}]}),c.children[0].children[0].children[0].classes.push("svg-align")),i){var h=he(["mord",l.isOver?"mover":"munder"],[c],n);l.isOver?c=dn({positionType:"firstBaseline",children:[{type:"elem",elem:h},{type:"kern",size:.2},{type:"elem",elem:i}]}):c=dn({positionType:"bottom",positionData:h.depth+.2+i.height+i.depth,children:[{type:"elem",elem:i},{type:"kern",size:.2},{type:"elem",elem:h}]})}return he(["mord",l.isOver?"mover":"munder"],[c],n)},uC=(e,n)=>{var t=S0(e.label);return new fe(e.isOver?"mover":"munder",[xn(e.base,n),t])};Se({type:"horizBrace",names:["\\overbrace","\\underbrace"],props:{numArgs:1},handler(e,n){var{parser:t,funcName:i}=e;return{type:"horizBrace",mode:t.mode,label:i,isOver:/^\\over/.test(i),base:n[0]}},htmlBuilder:H4,mathmlBuilder:uC});Se({type:"href",names:["\\href"],props:{numArgs:2,argTypes:["url","original"],allowedInText:!0},handler:(e,n)=>{var{parser:t}=e,i=n[1],l=nn(n[0],"url").url;return t.settings.isTrusted({command:"\\href",url:l})?{type:"href",mode:t.mode,href:l,body:Fn(i)}:t.formatUnsupportedCmd("\\href")},htmlBuilder:(e,n)=>{var t=Yn(e.body,n,!1);return _D(e.href,[],t,n)},mathmlBuilder:(e,n)=>{var t=Hi(e.body,n);return t instanceof fe||(t=new fe("mrow",[t])),t.setAttribute("href",e.href),t}});Se({type:"href",names:["\\url"],props:{numArgs:1,argTypes:["url"],allowedInText:!0},handler:(e,n)=>{var{parser:t}=e,i=nn(n[0],"url").url;if(!t.settings.isTrusted({command:"\\url",url:i}))return t.formatUnsupportedCmd("\\url");for(var l=[],o=0;o<i.length;o++){var s=i[o];s==="~"&&(s="\\textasciitilde"),l.push({type:"textord",mode:"text",text:s})}var c={type:"text",mode:t.mode,font:"\\texttt",body:l};return{type:"href",mode:t.mode,href:i,body:Fn(c)}}});Se({type:"hbox",names:["\\hbox"],props:{numArgs:1,argTypes:["text"],allowedInText:!0,primitive:!0},handler(e,n){var{parser:t}=e;return{type:"hbox",mode:t.mode,body:Fn(n[0])}},htmlBuilder(e,n){var t=Yn(e.body,n,!1);return ui(t)},mathmlBuilder(e,n){return new fe("mrow",jt(e.body,n))}});Se({type:"html",names:["\\htmlClass","\\htmlId","\\htmlStyle","\\htmlData"],props:{numArgs:2,argTypes:["raw","original"],allowedInText:!0},handler:(e,n)=>{var{parser:t,funcName:i,token:l}=e,o=nn(n[0],"raw").string,s=n[1];t.settings.strict&&t.settings.reportNonstrict("htmlExtension","HTML extension is disabled on strict mode");var c,h={};switch(i){case"\\htmlClass":h.class=o,c={command:"\\htmlClass",class:o};break;case"\\htmlId":h.id=o,c={command:"\\htmlId",id:o};break;case"\\htmlStyle":h.style=o,c={command:"\\htmlStyle",style:o};break;case"\\htmlData":{for(var p=o.split(","),f=0;f<p.length;f++){var d=p[f],w=d.indexOf("=");if(w<0)throw new de("\\htmlData key/value '"+d+"' missing equals sign");var b=d.slice(0,w),D=d.slice(w+1);h["data-"+b.trim()]=D}c={command:"\\htmlData",attributes:h};break}default:throw new Error("Unrecognized html command")}return t.settings.isTrusted(c)?{type:"html",mode:t.mode,attributes:h,body:Fn(s)}:t.formatUnsupportedCmd(i)},htmlBuilder:(e,n)=>{var t=Yn(e.body,n,!1),i=["enclosing"];e.attributes.class&&i.push(...e.attributes.class.trim().split(/\s+/));var l=he(i,t,n);for(var o in e.attributes)o!=="class"&&e.attributes.hasOwnProperty(o)&&l.setAttribute(o,e.attributes[o]);return l},mathmlBuilder:(e,n)=>Hi(e.body,n)});Se({type:"htmlmathml",names:["\\html@mathml"],props:{numArgs:2,allowedInArgument:!0,allowedInText:!0},handler:(e,n)=>{var{parser:t}=e;return{type:"htmlmathml",mode:t.mode,html:Fn(n[0]),mathml:Fn(n[1])}},htmlBuilder:(e,n)=>{var t=Yn(e.html,n,!1);return ui(t)},mathmlBuilder:(e,n)=>Hi(e.mathml,n)});var Xc=function(n){if(/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(n))return{number:+n,unit:"bp"};var t=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(n);if(!t)throw new de("Invalid size: '"+n+"' in \\includegraphics");var i={number:+(t[1]+t[2]),unit:t[3]};if(!o4(i))throw new de("Invalid unit: '"+i.unit+"' in \\includegraphics.");return i};Se({type:"includegraphics",names:["\\includegraphics"],props:{numArgs:1,numOptionalArgs:1,argTypes:["raw","url"],allowedInText:!1},handler:(e,n,t)=>{var{parser:i}=e,l={number:0,unit:"em"},o={number:.9,unit:"em"},s={number:0,unit:"em"},c="";if(t[0])for(var h=nn(t[0],"raw").string,p=h.split(","),f=0;f<p.length;f++){var d=p[f].split("=");if(d.length===2){var w=d[1].trim();switch(d[0].trim()){case"alt":c=w;break;case"width":l=Xc(w);break;case"height":o=Xc(w);break;case"totalheight":s=Xc(w);break;default:throw new de("Invalid key: '"+d[0]+"' in \\includegraphics.")}}}var b=nn(n[0],"url").url;return c===""&&(c=b,c=c.replace(/^.*[\\/]/,""),c=c.substring(0,c.lastIndexOf("."))),i.settings.isTrusted({command:"\\includegraphics",url:b})?{type:"includegraphics",mode:i.mode,alt:c,width:l,height:o,totalheight:s,src:b}:i.formatUnsupportedCmd("\\includegraphics")},htmlBuilder:(e,n)=>{var t=Ln(e.height,n),i=0;e.totalheight.number>0&&(i=Ln(e.totalheight,n)-t);var l=0;e.width.number>0&&(l=Ln(e.width,n));var o={height:we(t+i)};l>0&&(o.width=we(l)),i>0&&(o.verticalAlign=we(-i));var s=new yD(e.src,e.alt,o);return s.height=t,s.depth=i,s},mathmlBuilder:(e,n)=>{var t=new fe("mglyph",[]);t.setAttribute("alt",e.alt);var i=Ln(e.height,n),l=0;if(e.totalheight.number>0&&(l=Ln(e.totalheight,n)-i,t.setAttribute("valign",we(-l))),t.setAttribute("height",we(i+l)),e.width.number>0){var o=Ln(e.width,n);t.setAttribute("width",we(o))}return t.setAttribute("src",e.src),t}});Se({type:"kern",names:["\\kern","\\mkern","\\hskip","\\mskip"],props:{numArgs:1,argTypes:["size"],primitive:!0,allowedInText:!0},handler(e,n){var{parser:t,funcName:i}=e,l=nn(n[0],"size");if(t.settings.strict){var o=i[1]==="m",s=l.value.unit==="mu";o?(s||t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" supports only mu units, "+("not "+l.value.unit+" units")),t.mode!=="math"&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" works only in math mode")):s&&t.settings.reportNonstrict("mathVsTextUnits","LaTeX's "+i+" doesn't support mu units")}return{type:"kern",mode:t.mode,dimension:l.value}},htmlBuilder(e,n){return p4(e.dimension,n)},mathmlBuilder(e,n){var t=Ln(e.dimension,n);return new b4(t)}});Se({type:"lap",names:["\\mathllap","\\mathrlap","\\mathclap"],props:{numArgs:1,allowedInText:!0},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=n[0];return{type:"lap",mode:t.mode,alignment:i.slice(5),body:l}},htmlBuilder:(e,n)=>{var t;e.alignment==="clap"?(t=he([],[mn(e.body,n)]),t=he(["inner"],[t],n)):t=he(["inner"],[mn(e.body,n)]);var i=he(["fix"],[]),l=he([e.alignment],[t,i],n),o=he(["strut"]);return o.style.height=we(l.height+l.depth),l.depth&&(o.style.verticalAlign=we(-l.depth)),l.children.unshift(o),l=he(["thinbox"],[l],n),he(["mord","vbox"],[l],n)},mathmlBuilder:(e,n)=>{var t=new fe("mpadded",[xn(e.body,n)]);if(e.alignment!=="rlap"){var i=e.alignment==="llap"?"-1":"-0.5";t.setAttribute("lspace",i+"width")}return t.setAttribute("width","0px"),t}});Se({type:"styling",names:["\\(","$"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,n){var{funcName:t,parser:i}=e,l=i.mode;i.switchMode("math");var o=t==="\\("?"\\)":"$",s=i.parseExpression(!1,o);return i.expect(o),i.switchMode(l),{type:"styling",mode:i.mode,style:"text",body:s}}});Se({type:"text",names:["\\)","\\]"],props:{numArgs:0,allowedInText:!0,allowedInMath:!1},handler(e,n){throw new de("Mismatched "+e.funcName)}});var Gf=(e,n)=>{switch(n.style.size){case Qe.DISPLAY.size:return e.display;case Qe.TEXT.size:return e.text;case Qe.SCRIPT.size:return e.script;case Qe.SCRIPTSCRIPT.size:return e.scriptscript;default:return e.text}};Se({type:"mathchoice",names:["\\mathchoice"],props:{numArgs:4,primitive:!0},handler:(e,n)=>{var{parser:t}=e;return{type:"mathchoice",mode:t.mode,display:Fn(n[0]),text:Fn(n[1]),script:Fn(n[2]),scriptscript:Fn(n[3])}},htmlBuilder:(e,n)=>{var t=Gf(e,n),i=Yn(t,n,!1);return ui(i)},mathmlBuilder:(e,n)=>{var t=Gf(e,n);return Hi(t,n)}});var q4=(e,n,t,i,l,o,s)=>{e=he([],[e]);var c=t&&oi(t),h,p;if(n){var f=mn(n,i.havingStyle(l.sup()),i);p={elem:f,kern:Math.max(i.fontMetrics().bigOpSpacing1,i.fontMetrics().bigOpSpacing3-f.depth)}}if(t){var d=mn(t,i.havingStyle(l.sub()),i);h={elem:d,kern:Math.max(i.fontMetrics().bigOpSpacing2,i.fontMetrics().bigOpSpacing4-d.height)}}var w;if(p&&h){var b=i.fontMetrics().bigOpSpacing5+h.elem.height+h.elem.depth+h.kern+e.depth+s;w=dn({positionType:"bottom",positionData:b,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:we(-o)},{type:"kern",size:h.kern},{type:"elem",elem:e},{type:"kern",size:p.kern},{type:"elem",elem:p.elem,marginLeft:we(o)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]})}else if(h){var D=e.height-s;w=dn({positionType:"top",positionData:D,children:[{type:"kern",size:i.fontMetrics().bigOpSpacing5},{type:"elem",elem:h.elem,marginLeft:we(-o)},{type:"kern",size:h.kern},{type:"elem",elem:e}]})}else if(p){var _=e.depth+s;w=dn({positionType:"bottom",positionData:_,children:[{type:"elem",elem:e},{type:"kern",size:p.kern},{type:"elem",elem:p.elem,marginLeft:we(o)},{type:"kern",size:i.fontMetrics().bigOpSpacing5}]})}else return e;var T=[w];if(h&&o!==0&&!c){var E=he(["mspace"],[],i);E.style.marginRight=we(o),T.unshift(E)}return he(["mop","op-limits"],T,i)},U4=new Set(["\\smallint"]),sl=(e,n)=>{var t,i,l=!1,o;e.type==="supsub"?(t=e.sup,i=e.sub,o=nn(e.base,"op"),l=!0):o=nn(e,"op");var s=n.style,c=!1;s.size===Qe.DISPLAY.size&&o.symbol&&!U4.has(o.name)&&(c=!0);var h;if(o.symbol){var p=c?"Size2-Regular":"Size1-Regular",f="";if((o.name==="\\oiint"||o.name==="\\oiiint")&&(f=o.name.slice(1),o.name=f==="oiint"?"\\iint":"\\iiint"),h=kt(o.name,p,"math",n,["mop","op-symbol",c?"large-op":"small-op"]),f.length>0){var d=h.italic,w=f4(f+"Size"+(c?"2":"1"),n);h=dn({positionType:"individualShift",children:[{type:"elem",elem:h,shift:0},{type:"elem",elem:w,shift:c?.08:0}]}),o.name="\\"+f,h.classes.unshift("mop"),h.italic=d}}else if(o.body){var b=Yn(o.body,n,!0);b.length===1&&b[0]instanceof hr?(h=b[0],h.classes[0]="mop"):h=he(["mop"],b,n)}else{for(var D=[],_=1;_<o.name.length;_++)D.push(hh(o.name[_],o.mode,n));h=he(["mop"],D,n)}var T=0,E=0;return(h instanceof hr||o.name==="\\oiint"||o.name==="\\oiiint")&&!o.suppressBaseShift&&(T=(h.height-h.depth)/2-n.fontMetrics().axisHeight,E=h.italic),l?q4(h,t,i,n,s,E,T):(T&&(h.style.position="relative",h.style.top=we(T)),h)},To=(e,n)=>{var t;if(e.symbol)t=new fe("mo",[mr(e.name,e.mode)]),U4.has(e.name)&&t.setAttribute("largeop","false");else if(e.body)t=new fe("mo",jt(e.body,n));else{t=new fe("mi",[new qn(e.name.slice(1))]);var i=new fe("mo",[mr("⁡","text")]);e.parentIsSupSub?t=new fe("mrow",[t,i]):t=y4([t,i])}return t},cC={"∏":"\\prod","∐":"\\coprod","∑":"\\sum","⋀":"\\bigwedge","⋁":"\\bigvee","⋂":"\\bigcap","⋃":"\\bigcup","⨀":"\\bigodot","⨁":"\\bigoplus","⨂":"\\bigotimes","⨄":"\\biguplus","⨆":"\\bigsqcup"};Se({type:"op",names:["\\coprod","\\bigvee","\\bigwedge","\\biguplus","\\bigcap","\\bigcup","\\intop","\\prod","\\sum","\\bigotimes","\\bigoplus","\\bigodot","\\bigsqcup","\\smallint","∏","∐","∑","⋀","⋁","⋂","⋃","⨀","⨁","⨂","⨄","⨆"],props:{numArgs:0},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=i;return l.length===1&&(l=cC[l]),{type:"op",mode:t.mode,limits:!0,parentIsSupSub:!1,symbol:!0,name:l}},htmlBuilder:sl,mathmlBuilder:To});Se({type:"op",names:["\\mathop"],props:{numArgs:1,primitive:!0},handler:(e,n)=>{var{parser:t}=e,i=n[0];return{type:"op",mode:t.mode,limits:!1,parentIsSupSub:!1,symbol:!1,body:Fn(i)}},htmlBuilder:sl,mathmlBuilder:To});var hC={"∫":"\\int","∬":"\\iint","∭":"\\iiint","∮":"\\oint","∯":"\\oiint","∰":"\\oiiint"};Se({type:"op",names:["\\arcsin","\\arccos","\\arctan","\\arctg","\\arcctg","\\arg","\\ch","\\cos","\\cosec","\\cosh","\\cot","\\cotg","\\coth","\\csc","\\ctg","\\cth","\\deg","\\dim","\\exp","\\hom","\\ker","\\lg","\\ln","\\log","\\sec","\\sin","\\sinh","\\sh","\\tan","\\tanh","\\tg","\\th"],props:{numArgs:0},handler(e){var{parser:n,funcName:t}=e;return{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:sl,mathmlBuilder:To});Se({type:"op",names:["\\det","\\gcd","\\inf","\\lim","\\max","\\min","\\Pr","\\sup"],props:{numArgs:0},handler(e){var{parser:n,funcName:t}=e;return{type:"op",mode:n.mode,limits:!0,parentIsSupSub:!1,symbol:!1,name:t}},htmlBuilder:sl,mathmlBuilder:To});Se({type:"op",names:["\\int","\\iint","\\iiint","\\oint","\\oiint","\\oiiint","∫","∬","∭","∮","∯","∰"],props:{numArgs:0,allowedInArgument:!0},handler(e){var{parser:n,funcName:t}=e,i=t;return i.length===1&&(i=hC[i]),{type:"op",mode:n.mode,limits:!1,parentIsSupSub:!1,symbol:!0,name:i}},htmlBuilder:sl,mathmlBuilder:To});var V4=(e,n)=>{var t,i,l=!1,o;e.type==="supsub"?(t=e.sup,i=e.sub,o=nn(e.base,"operatorname"),l=!0):o=nn(e,"operatorname");var s;if(o.body.length>0){for(var c=o.body.map(d=>{var w=d.text;return typeof w=="string"?{type:"textord",mode:d.mode,text:w}:d}),h=Yn(c,n.withFont("mathrm"),!0),p=0;p<h.length;p++){var f=h[p];f instanceof hr&&(f.text=f.text.replace(/\u2212/,"-").replace(/\u2217/,"*"))}s=he(["mop"],h,n)}else s=he(["mop"],[],n);return l?q4(s,t,i,n,n.style,0,0):s},mC=(e,n)=>{for(var t=jt(e.body,n.withFont("mathrm")),i=!0,l=0;l<t.length;l++){var o=t[l];if(!(o instanceof b4))if(o instanceof fe)switch(o.type){case"mi":case"mn":case"ms":case"mspace":case"mtext":break;case"mo":{var s=o.children[0];o.children.length===1&&s instanceof qn?s.text=s.text.replace(/\u2212/,"-").replace(/\u2217/,"*"):i=!1;break}default:i=!1}else i=!1}if(i){var c=t.map(f=>f.toText()).join("");t=[new qn(c)]}var h=new fe("mi",t);h.setAttribute("mathvariant","normal");var p=new fe("mo",[mr("⁡","text")]);return e.parentIsSupSub?new fe("mrow",[h,p]):y4([h,p])};Se({type:"operatorname",names:["\\operatorname@","\\operatornamewithlimits"],props:{numArgs:1},handler:(e,n)=>{var{parser:t,funcName:i}=e,l=n[0];return{type:"operatorname",mode:t.mode,body:Fn(l),alwaysHandleSupSub:i==="\\operatornamewithlimits",limits:!1,parentIsSupSub:!1}},htmlBuilder:V4,mathmlBuilder:mC});C("\\operatorname","\\@ifstar\\operatornamewithlimits\\operatorname@");wa({type:"ordgroup",htmlBuilder(e,n){return e.semisimple?ui(Yn(e.body,n,!1)):he(["mord"],Yn(e.body,n,!0),n)},mathmlBuilder(e,n){return Hi(e.body,n,!0)}});Se({type:"overline",names:["\\overline"],props:{numArgs:1},handler(e,n){var{parser:t}=e,i=n[0];return{type:"overline",mode:t.mode,body:i}},htmlBuilder(e,n){var t=mn(e.body,n.havingCrampedStyle()),i=rl("overline-line",n),l=n.fontMetrics().defaultRuleThickness,o=dn({positionType:"firstBaseline",children:[{type:"elem",elem:t},{type:"kern",size:3*l},{type:"elem",elem:i},{type:"kern",size:l}]});return he(["mord","overline"],[o],n)},mathmlBuilder(e,n){var t=new fe("mo",[new qn("‾")]);t.setAttribute("stretchy","true");var i=new fe("mover",[xn(e.body,n),t]);return i.setAttribute("accent","true"),i}});Se({type:"phantom",names:["\\phantom"],props:{numArgs:1,allowedInText:!0},handler:(e,n)=>{var{parser:t}=e,i=n[0];return{type:"phantom",mode:t.mode,body:Fn(i)}},htmlBuilder:(e,n)=>{var t=Yn(e.body,n.withPhantom(),!1);return ui(t)},mathmlBuilder:(e,n)=>{var t=jt(e.body,n);return new fe("mphantom",t)}});Se({type:"hphantom",names:["\\hphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,n)=>{var{parser:t}=e,i=n[0];return{type:"hphantom",mode:t.mode,body:i}},htmlBuilder:(e,n)=>{var t=he([],[mn(e.body,n.withPhantom())]);if(t.height=0,t.depth=0,t.children)for(var i=0;i<t.children.length;i++)t.children[i].height=0,t.children[i].depth=0;return t=dn({positionType:"firstBaseline",children:[{type:"elem",elem:t}]}),he(["mord"],[t],n)},mathmlBuilder:(e,n)=>{var t=jt(Fn(e.body),n),i=new fe("mphantom",t),l=new fe("mpadded",[i]);return l.setAttribute("height","0px"),l.setAttribute("depth","0px"),l}});Se({type:"vphantom",names:["\\vphantom"],props:{numArgs:1,allowedInText:!0},handler:(e,n)=>{var{parser:t}=e,i=n[0];return{type:"vphantom",mode:t.mode,body:i}},htmlBuilder:(e,n)=>{var t=he(["inner"],[mn(e.body,n.withPhantom())]),i=he(["fix"],[]);return he(["mord","rlap"],[t,i],n)},mathmlBuilder:(e,n)=>{var t=jt(Fn(e.body),n),i=new fe("mphantom",t),l=new fe("mpadded",[i]);return l.setAttribute("width","0px"),l}});Se({type:"raisebox",names:["\\raisebox"],props:{numArgs:2,argTypes:["size","hbox"],allowedInText:!0},handler(e,n){var{parser:t}=e,i=nn(n[0],"size").value,l=n[1];return{type:"raisebox",mode:t.mode,dy:i,body:l}},htmlBuilder(e,n){var t=mn(e.body,n),i=Ln(e.dy,n);return dn({positionType:"shift",positionData:-i,children:[{type:"elem",elem:t}]})},mathmlBuilder(e,n){var t=new fe("mpadded",[xn(e.body,n)]),i=e.dy.number+e.dy.unit;return t.setAttribute("voffset",i),t}});Se({type:"internal",names:["\\relax"],props:{numArgs:0,allowedInText:!0,allowedInArgument:!0},handler(e){var{parser:n}=e;return{type:"internal",mode:n.mode}}});Se({type:"rule",names:["\\rule"],props:{numArgs:2,numOptionalArgs:1,allowedInText:!0,allowedInMath:!0,argTypes:["size","size","size"]},handler(e,n,t){var{parser:i}=e,l=t[0],o=nn(n[0],"size"),s=nn(n[1],"size");return{type:"rule",mode:i.mode,shift:l&&nn(l,"size").value,width:o.value,height:s.value}},htmlBuilder(e,n){var t=he(["mord","rule"],[],n),i=Ln(e.width,n),l=Ln(e.height,n),o=e.shift?Ln(e.shift,n):0;return t.style.borderRightWidth=we(i),t.style.borderTopWidth=we(l),t.style.bottom=we(o),t.width=i,t.height=l+o,t.depth=-o,t.maxFontSize=l*1.125*n.sizeMultiplier,t},mathmlBuilder(e,n){var t=Ln(e.width,n),i=Ln(e.height,n),l=e.shift?Ln(e.shift,n):0,o=n.color&&n.getColor()||"black",s=new fe("mspace");s.setAttribute("mathbackground",o),s.setAttribute("width",we(t)),s.setAttribute("height",we(i));var c=new fe("mpadded",[s]);return l>=0?c.setAttribute("height",we(l)):(c.setAttribute("height",we(l)),c.setAttribute("depth",we(-l))),c.setAttribute("voffset",we(l)),c}});function W4(e,n,t){for(var i=Yn(e,n,!1),l=n.sizeMultiplier/t.sizeMultiplier,o=0;o<i.length;o++){var s=i[o].classes.indexOf("sizing");s<0?Array.prototype.push.apply(i[o].classes,n.sizingClasses(t)):i[o].classes[s+1]==="reset-size"+n.size&&(i[o].classes[s+1]="reset-size"+t.size),i[o].height*=l,i[o].depth*=l}return ui(i)}var Xf=["\\tiny","\\sixptsize","\\scriptsize","\\footnotesize","\\small","\\normalsize","\\large","\\Large","\\LARGE","\\huge","\\Huge"],pC=(e,n)=>{var t=n.havingSize(e.size);return W4(e.body,t,n)};Se({type:"sizing",names:Xf,props:{numArgs:0,allowedInText:!0},handler:(e,n)=>{var{breakOnTokenText:t,funcName:i,parser:l}=e,o=l.parseExpression(!1,t);return{type:"sizing",mode:l.mode,size:Xf.indexOf(i)+1,body:o}},htmlBuilder:pC,mathmlBuilder:(e,n)=>{var t=n.havingSize(e.size),i=jt(e.body,t),l=new fe("mstyle",i);return l.setAttribute("mathsize",we(t.sizeMultiplier)),l}});Se({type:"smash",names:["\\smash"],props:{numArgs:1,numOptionalArgs:1,allowedInText:!0},handler:(e,n,t)=>{var{parser:i}=e,l=!1,o=!1,s=t[0]&&nn(t[0],"ordgroup");if(s)for(var c="",h=0;h<s.body.length;++h){var p=s.body[h];if(c=p.text,c==="t")l=!0;else if(c==="b")o=!0;else{l=!1,o=!1;break}}else l=!0,o=!0;var f=n[0];return{type:"smash",mode:i.mode,body:f,smashHeight:l,smashDepth:o}},htmlBuilder:(e,n)=>{var t=he([],[mn(e.body,n)]);if(!e.smashHeight&&!e.smashDepth)return t;if(e.smashHeight&&(t.height=0,t.children))for(var i=0;i<t.children.length;i++)t.children[i].height=0;if(e.smashDepth&&(t.depth=0,t.children))for(var l=0;l<t.children.length;l++)t.children[l].depth=0;var o=dn({positionType:"firstBaseline",children:[{type:"elem",elem:t}]});return he(["mord"],[o],n)},mathmlBuilder:(e,n)=>{var t=new fe("mpadded",[xn(e.body,n)]);return e.smashHeight&&t.setAttribute("height","0px"),e.smashDepth&&t.setAttribute("depth","0px"),t}});Se({type:"sqrt",names:["\\sqrt"],props:{numArgs:1,numOptionalArgs:1},handler(e,n,t){var{parser:i}=e,l=t[0],o=n[0];return{type:"sqrt",mode:i.mode,body:o,index:l}},htmlBuilder(e,n){var t=mn(e.body,n.havingCrampedStyle());t.height===0&&(t.height=n.fontMetrics().xHeight),t=il(t,n);var i=n.fontMetrics(),l=i.defaultRuleThickness,o=l;n.style.id<Qe.TEXT.id&&(o=n.fontMetrics().xHeight);var s=l+o/4,c=t.height+t.depth+s+l,{span:h,ruleWidth:p,advanceWidth:f}=ZD(c,n),d=h.height-p;d>t.height+t.depth+s&&(s=(s+d-t.height-t.depth)/2);var w=h.height-t.height-s-p;t.style.paddingLeft=we(f);var b=dn({positionType:"firstBaseline",children:[{type:"elem",elem:t,wrapperClasses:["svg-align"]},{type:"kern",size:-(t.height+w)},{type:"elem",elem:h},{type:"kern",size:p}]});if(e.index){var D=n.havingStyle(Qe.SCRIPTSCRIPT),_=mn(e.index,D,n),T=.6*(b.height-b.depth),E=dn({positionType:"shift",positionData:-T,children:[{type:"elem",elem:_}]}),z=he(["root"],[E]);return he(["mord","sqrt"],[z,b],n)}else return he(["mord","sqrt"],[b],n)},mathmlBuilder(e,n){var{body:t,index:i}=e;return i?new fe("mroot",[xn(t,n),xn(i,n)]):new fe("msqrt",[xn(t,n)])}});var Yf={display:Qe.DISPLAY,text:Qe.TEXT,script:Qe.SCRIPT,scriptscript:Qe.SCRIPTSCRIPT};Se({type:"styling",names:["\\displaystyle","\\textstyle","\\scriptstyle","\\scriptscriptstyle"],props:{numArgs:0,allowedInText:!0,primitive:!0},handler(e,n){var{breakOnTokenText:t,funcName:i,parser:l}=e,o=l.parseExpression(!0,t),s=i.slice(1,i.length-5);return{type:"styling",mode:l.mode,style:s,body:o}},htmlBuilder(e,n){var t=Yf[e.style],i=n.havingStyle(t).withFont("");return W4(e.body,i,n)},mathmlBuilder(e,n){var t=Yf[e.style],i=n.havingStyle(t),l=jt(e.body,i),o=new fe("mstyle",l),s={display:["0","true"],text:["0","false"],script:["1","false"],scriptscript:["2","false"]},c=s[e.style];return o.setAttribute("scriptlevel",c[0]),o.setAttribute("displaystyle",c[1]),o}});var dC=function(n,t){var i=n.base;if(i)if(i.type==="op"){var l=i.limits&&(t.style.size===Qe.DISPLAY.size||i.alwaysHandleSupSub);return l?sl:null}else if(i.type==="operatorname"){var o=i.alwaysHandleSupSub&&(t.style.size===Qe.DISPLAY.size||i.limits);return o?V4:null}else{if(i.type==="accent")return oi(i.base)?gh:null;if(i.type==="horizBrace"){var s=!n.sub;return s===i.isOver?H4:null}else return null}else return null};wa({type:"supsub",htmlBuilder(e,n){var t=dC(e,n);if(t)return t(e,n);var{base:i,sup:l,sub:o}=e,s=mn(i,n),c,h,p=n.fontMetrics(),f=0,d=0,w=i&&oi(i);if(l){var b=n.havingStyle(n.style.sup());c=mn(l,b,n),w||(f=s.height-b.fontMetrics().supDrop*b.sizeMultiplier/n.sizeMultiplier)}if(o){var D=n.havingStyle(n.style.sub());h=mn(o,D,n),w||(d=s.depth+D.fontMetrics().subDrop*D.sizeMultiplier/n.sizeMultiplier)}var _;n.style===Qe.DISPLAY?_=p.sup1:n.style.cramped?_=p.sup3:_=p.sup2;var T=n.sizeMultiplier,E=we(.5/p.ptPerEm/T),z=null;if(h){var O=e.base&&e.base.type==="op"&&e.base.name&&(e.base.name==="\\oiint"||e.base.name==="\\oiiint");(s instanceof hr||O)&&(z=we(-s.italic))}var ne;if(c&&h){f=Math.max(f,_,c.depth+.25*p.xHeight),d=Math.max(d,p.sub2);var K=p.defaultRuleThickness,H=4*K;if(f-c.depth-(h.height-d)<H){d=H-(f-c.depth)+h.height;var I=.8*p.xHeight-(f-c.depth);I>0&&(f+=I,d-=I)}var re=[{type:"elem",elem:h,shift:d,marginRight:E,marginLeft:z},{type:"elem",elem:c,shift:-f,marginRight:E}];ne=dn({positionType:"individualShift",children:re})}else if(h){d=Math.max(d,p.sub1,h.height-.8*p.xHeight);var ee=[{type:"elem",elem:h,marginLeft:z,marginRight:E}];ne=dn({positionType:"shift",positionData:d,children:ee})}else if(c)f=Math.max(f,_,c.depth+.25*p.xHeight),ne=dn({positionType:"shift",positionData:-f,children:[{type:"elem",elem:c,marginRight:E}]});else throw new Error("supsub must have either sup or sub.");var U=b1(s,"right")||"mord";return he([U],[s,he(["msupsub"],[ne])],n)},mathmlBuilder(e,n){var t=!1,i,l;e.base&&e.base.type==="horizBrace"&&(l=!!e.sup,l===e.base.isOver&&(t=!0,i=e.base.isOver)),e.base&&(e.base.type==="op"||e.base.type==="operatorname")&&(e.base.parentIsSupSub=!0);var o=[xn(e.base,n)];e.sub&&o.push(xn(e.sub,n)),e.sup&&o.push(xn(e.sup,n));var s;if(t)s=i?"mover":"munder";else if(e.sub)if(e.sup){var p=e.base;p&&p.type==="op"&&p.limits&&n.style===Qe.DISPLAY||p&&p.type==="operatorname"&&p.alwaysHandleSupSub&&(n.style===Qe.DISPLAY||p.limits)?s="munderover":s="msubsup"}else{var h=e.base;h&&h.type==="op"&&h.limits&&(n.style===Qe.DISPLAY||h.alwaysHandleSupSub)||h&&h.type==="operatorname"&&h.alwaysHandleSupSub&&(h.limits||n.style===Qe.DISPLAY)?s="munder":s="msub"}else{var c=e.base;c&&c.type==="op"&&c.limits&&(n.style===Qe.DISPLAY||c.alwaysHandleSupSub)||c&&c.type==="operatorname"&&c.alwaysHandleSupSub&&(c.limits||n.style===Qe.DISPLAY)?s="mover":s="msup"}return new fe(s,o)}});wa({type:"atom",htmlBuilder(e,n){return hh(e.text,e.mode,n,["m"+e.family])},mathmlBuilder(e,n){var t=new fe("mo",[mr(e.text,e.mode)]);if(e.family==="bin"){var i=dh(e,n);i==="bold-italic"&&t.setAttribute("mathvariant",i)}else e.family==="punct"?t.setAttribute("separator","true"):(e.family==="open"||e.family==="close")&&t.setAttribute("stretchy","false");return t}});var G4={mi:"italic",mn:"normal",mtext:"normal"};wa({type:"mathord",htmlBuilder(e,n){return k0(e,n,"mathord")},mathmlBuilder(e,n){var t=new fe("mi",[mr(e.text,e.mode,n)]),i=dh(e,n)||"italic";return i!==G4[t.type]&&t.setAttribute("mathvariant",i),t}});wa({type:"textord",htmlBuilder(e,n){return k0(e,n,"textord")},mathmlBuilder(e,n){var t=mr(e.text,e.mode,n),i=dh(e,n)||"normal",l;return e.mode==="text"?l=new fe("mtext",[t]):/[0-9]/.test(e.text)?l=new fe("mn",[t]):e.text==="\\prime"?l=new fe("mo",[t]):l=new fe("mi",[t]),i!==G4[l.type]&&l.setAttribute("mathvariant",i),l}});var Yc={"\\nobreak":"nobreak","\\allowbreak":"allowbreak"},Qc={" ":{},"\\ ":{},"~":{className:"nobreak"},"\\space":{},"\\nobreakspace":{className:"nobreak"}};wa({type:"spacing",htmlBuilder(e,n){if(Qc.hasOwnProperty(e.text)){var t=Qc[e.text].className||"";if(e.mode==="text"){var i=k0(e,n,"textord");return i.classes.push(t),i}else return he(["mspace",t],[hh(e.text,e.mode,n)],n)}else{if(Yc.hasOwnProperty(e.text))return he(["mspace",Yc[e.text]],[],n);throw new de('Unknown type of space "'+e.text+'"')}},mathmlBuilder(e,n){var t;if(Qc.hasOwnProperty(e.text))t=new fe("mtext",[new qn(" ")]);else{if(Yc.hasOwnProperty(e.text))return new fe("mspace");throw new de('Unknown type of space "'+e.text+'"')}return t}});var Qf=()=>{var e=new fe("mtd",[]);return e.setAttribute("width","50%"),e};wa({type:"tag",mathmlBuilder(e,n){var t=new fe("mtable",[new fe("mtr",[Qf(),new fe("mtd",[Hi(e.body,n)]),Qf(),new fe("mtd",[Hi(e.tag,n)])])]);return t.setAttribute("width","100%"),t}});var Kf={"\\text":void 0,"\\textrm":"textrm","\\textsf":"textsf","\\texttt":"texttt","\\textnormal":"textrm"},Zf={"\\textbf":"textbf","\\textmd":"textmd"},fC={"\\textit":"textit","\\textup":"textup"},eg=(e,n)=>{var t=e.font;if(t){if(Kf[t])return n.withTextFontFamily(Kf[t]);if(Zf[t])return n.withTextFontWeight(Zf[t]);if(t==="\\emph")return n.fontShape==="textit"?n.withTextFontShape("textup"):n.withTextFontShape("textit")}else return n;return n.withTextFontShape(fC[t])};Se({type:"text",names:["\\text","\\textrm","\\textsf","\\texttt","\\textnormal","\\textbf","\\textmd","\\textit","\\textup","\\emph"],props:{numArgs:1,argTypes:["text"],allowedInArgument:!0,allowedInText:!0},handler(e,n){var{parser:t,funcName:i}=e,l=n[0];return{type:"text",mode:t.mode,body:Fn(l),font:i}},htmlBuilder(e,n){var t=eg(e,n),i=Yn(e.body,t,!0);return he(["mord","text"],i,t)},mathmlBuilder(e,n){var t=eg(e,n);return Hi(e.body,t)}});Se({type:"underline",names:["\\underline"],props:{numArgs:1,allowedInText:!0},handler(e,n){var{parser:t}=e;return{type:"underline",mode:t.mode,body:n[0]}},htmlBuilder(e,n){var t=mn(e.body,n),i=rl("underline-line",n),l=n.fontMetrics().defaultRuleThickness,o=dn({positionType:"top",positionData:t.height,children:[{type:"kern",size:l},{type:"elem",elem:i},{type:"kern",size:3*l},{type:"elem",elem:t}]});return he(["mord","underline"],[o],n)},mathmlBuilder(e,n){var t=new fe("mo",[new qn("‾")]);t.setAttribute("stretchy","true");var i=new fe("munder",[xn(e.body,n),t]);return i.setAttribute("accentunder","true"),i}});Se({type:"vcenter",names:["\\vcenter"],props:{numArgs:1,argTypes:["original"],allowedInText:!1},handler(e,n){var{parser:t}=e;return{type:"vcenter",mode:t.mode,body:n[0]}},htmlBuilder(e,n){var t=mn(e.body,n),i=n.fontMetrics().axisHeight,l=.5*(t.height-i-(t.depth+i));return dn({positionType:"shift",positionData:l,children:[{type:"elem",elem:t}]})},mathmlBuilder(e,n){return new fe("mpadded",[xn(e.body,n)],["vcenter"])}});Se({type:"verb",names:["\\verb"],props:{numArgs:0,allowedInText:!0},handler(e,n,t){throw new de("\\verb ended by end of line instead of matching delimiter")},htmlBuilder(e,n){for(var t=ng(e),i=[],l=n.havingStyle(n.style.text()),o=0;o<t.length;o++){var s=t[o];s==="~"&&(s="\\textasciitilde"),i.push(kt(s,"Typewriter-Regular",e.mode,l,["mord","texttt"]))}return he(["mord","text"].concat(l.sizingClasses(n)),m4(i),l)},mathmlBuilder(e,n){var t=new qn(ng(e)),i=new fe("mtext",[t]);return i.setAttribute("mathvariant","monospace"),i}});var ng=e=>e.body.replace(/ /g,e.star?"␣":" "),Fi=g4,X4=`[ \r
	]`,gC="\\\\[a-zA-Z@]+",vC="\\\\[^\uD800-\uDFFF]",yC="("+gC+")"+X4+"*",bC=`\\\\(
|[ \r	]+
?)[ \r	]*`,D1="[̀-ͯ]",wC=new RegExp(D1+"+$"),xC="("+X4+"+)|"+(bC+"|")+"([!-\\[\\]-‧‪-퟿豈-￿]"+(D1+"*")+"|[\uD800-\uDBFF][\uDC00-\uDFFF]"+(D1+"*")+"|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5"+("|"+yC)+("|"+vC+")");class tg{constructor(n,t){this.input=void 0,this.settings=void 0,this.tokenRegex=void 0,this.catcodes=void 0,this.input=n,this.settings=t,this.tokenRegex=new RegExp(xC,"g"),this.catcodes={"%":14,"~":13}}setCatcode(n,t){this.catcodes[n]=t}lex(){var n=this.input,t=this.tokenRegex.lastIndex;if(t===n.length)return new Yt("EOF",new Rt(this,t,t));var i=this.tokenRegex.exec(n);if(i===null||i.index!==t)throw new de("Unexpected character: '"+n[t]+"'",new Yt(n[t],new Rt(this,t,t+1)));var l=i[6]||i[3]||(i[2]?"\\ ":" ");if(this.catcodes[l]===14){var o=n.indexOf(`
`,this.tokenRegex.lastIndex);return o===-1?(this.tokenRegex.lastIndex=n.length,this.settings.reportNonstrict("commentAtEnd","% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")):this.tokenRegex.lastIndex=o+1,this.lex()}return new Yt(l,new Rt(this,t,this.tokenRegex.lastIndex))}}class kC{constructor(n,t){n===void 0&&(n={}),t===void 0&&(t={}),this.current=void 0,this.builtins=void 0,this.undefStack=void 0,this.current=t,this.builtins=n,this.undefStack=[]}beginGroup(){this.undefStack.push({})}endGroup(){if(this.undefStack.length===0)throw new de("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");var n=this.undefStack.pop();for(var t in n)n.hasOwnProperty(t)&&(n[t]==null?delete this.current[t]:this.current[t]=n[t])}endGroups(){for(;this.undefStack.length>0;)this.endGroup()}has(n){return this.current.hasOwnProperty(n)||this.builtins.hasOwnProperty(n)}get(n){return this.current.hasOwnProperty(n)?this.current[n]:this.builtins[n]}set(n,t,i){if(i===void 0&&(i=!1),i){for(var l=0;l<this.undefStack.length;l++)delete this.undefStack[l][n];this.undefStack.length>0&&(this.undefStack[this.undefStack.length-1][n]=t)}else{var o=this.undefStack[this.undefStack.length-1];o&&!o.hasOwnProperty(n)&&(o[n]=this.current[n])}t==null?delete this.current[n]:this.current[n]=t}}var SC=j4;C("\\noexpand",function(e){var n=e.popToken();return e.isExpandable(n.text)&&(n.noexpand=!0,n.treatAsRelax=!0),{tokens:[n],numArgs:0}});C("\\expandafter",function(e){var n=e.popToken();return e.expandOnce(!0),{tokens:[n],numArgs:0}});C("\\@firstoftwo",function(e){var n=e.consumeArgs(2);return{tokens:n[0],numArgs:0}});C("\\@secondoftwo",function(e){var n=e.consumeArgs(2);return{tokens:n[1],numArgs:0}});C("\\@ifnextchar",function(e){var n=e.consumeArgs(3);e.consumeSpaces();var t=e.future();return n[0].length===1&&n[0][0].text===t.text?{tokens:n[1],numArgs:0}:{tokens:n[2],numArgs:0}});C("\\@ifstar","\\@ifnextchar *{\\@firstoftwo{#1}}");C("\\TextOrMath",function(e){var n=e.consumeArgs(2);return e.mode==="text"?{tokens:n[0],numArgs:0}:{tokens:n[1],numArgs:0}});var rg={0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,a:10,A:10,b:11,B:11,c:12,C:12,d:13,D:13,e:14,E:14,f:15,F:15};C("\\char",function(e){var n=e.popToken(),t,i="";if(n.text==="'")t=8,n=e.popToken();else if(n.text==='"')t=16,n=e.popToken();else if(n.text==="`")if(n=e.popToken(),n.text[0]==="\\")i=n.text.charCodeAt(1);else{if(n.text==="EOF")throw new de("\\char` missing argument");i=n.text.charCodeAt(0)}else t=10;if(t){if(i=rg[n.text],i==null||i>=t)throw new de("Invalid base-"+t+" digit "+n.text);for(var l;(l=rg[e.future().text])!=null&&l<t;)i*=t,i+=l,e.popToken()}return"\\@char{"+i+"}"});var kh=(e,n,t,i)=>{var l=e.consumeArg().tokens;if(l.length!==1)throw new de("\\newcommand's first argument must be a macro name");var o=l[0].text,s=e.isDefined(o);if(s&&!n)throw new de("\\newcommand{"+o+"} attempting to redefine "+(o+"; use \\renewcommand"));if(!s&&!t)throw new de("\\renewcommand{"+o+"} when command "+o+" does not yet exist; use \\newcommand");var c=0;if(l=e.consumeArg().tokens,l.length===1&&l[0].text==="["){for(var h="",p=e.expandNextToken();p.text!=="]"&&p.text!=="EOF";)h+=p.text,p=e.expandNextToken();if(!h.match(/^\s*[0-9]+\s*$/))throw new de("Invalid number of arguments: "+h);c=parseInt(h),l=e.consumeArg().tokens}return s&&i||e.macros.set(o,{tokens:l,numArgs:c}),""};C("\\newcommand",e=>kh(e,!1,!0,!1));C("\\renewcommand",e=>kh(e,!0,!1,!1));C("\\providecommand",e=>kh(e,!0,!0,!0));C("\\message",e=>{var n=e.consumeArgs(1)[0];return console.log(n.reverse().map(t=>t.text).join("")),""});C("\\errmessage",e=>{var n=e.consumeArgs(1)[0];return console.error(n.reverse().map(t=>t.text).join("")),""});C("\\show",e=>{var n=e.popToken(),t=n.text;return console.log(n,e.macros.get(t),Fi[t],Dn.math[t],Dn.text[t]),""});C("\\bgroup","{");C("\\egroup","}");C("~","\\nobreakspace");C("\\lq","`");C("\\rq","'");C("\\aa","\\r a");C("\\AA","\\r A");C("\\textcopyright","\\html@mathml{\\textcircled{c}}{\\char`©}");C("\\copyright","\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");C("\\textregistered","\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`®}");C("ℬ","\\mathscr{B}");C("ℰ","\\mathscr{E}");C("ℱ","\\mathscr{F}");C("ℋ","\\mathscr{H}");C("ℐ","\\mathscr{I}");C("ℒ","\\mathscr{L}");C("ℳ","\\mathscr{M}");C("ℛ","\\mathscr{R}");C("ℭ","\\mathfrak{C}");C("ℌ","\\mathfrak{H}");C("ℨ","\\mathfrak{Z}");C("\\Bbbk","\\Bbb{k}");C("·","\\cdotp");C("\\llap","\\mathllap{\\textrm{#1}}");C("\\rlap","\\mathrlap{\\textrm{#1}}");C("\\clap","\\mathclap{\\textrm{#1}}");C("\\mathstrut","\\vphantom{(}");C("\\underbar","\\underline{\\text{#1}}");C("\\not",'\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');C("\\neq","\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`≠}}");C("\\ne","\\neq");C("≠","\\neq");C("\\notin","\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`∉}}");C("∉","\\notin");C("≘","\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`≘}}");C("≙","\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`≘}}");C("≚","\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`≚}}");C("≛","\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`≛}}");C("≝","\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`≝}}");C("≞","\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`≞}}");C("≟","\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`≟}}");C("⟂","\\perp");C("‼","\\mathclose{!\\mkern-0.8mu!}");C("∌","\\notni");C("⌜","\\ulcorner");C("⌝","\\urcorner");C("⌞","\\llcorner");C("⌟","\\lrcorner");C("©","\\copyright");C("®","\\textregistered");C("️","\\textregistered");C("\\ulcorner",'\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');C("\\urcorner",'\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');C("\\llcorner",'\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');C("\\lrcorner",'\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');C("\\vdots","{\\varvdots\\rule{0pt}{15pt}}");C("⋮","\\vdots");C("\\varGamma","\\mathit{\\Gamma}");C("\\varDelta","\\mathit{\\Delta}");C("\\varTheta","\\mathit{\\Theta}");C("\\varLambda","\\mathit{\\Lambda}");C("\\varXi","\\mathit{\\Xi}");C("\\varPi","\\mathit{\\Pi}");C("\\varSigma","\\mathit{\\Sigma}");C("\\varUpsilon","\\mathit{\\Upsilon}");C("\\varPhi","\\mathit{\\Phi}");C("\\varPsi","\\mathit{\\Psi}");C("\\varOmega","\\mathit{\\Omega}");C("\\substack","\\begin{subarray}{c}#1\\end{subarray}");C("\\colon","\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");C("\\boxed","\\fbox{$\\displaystyle{#1}$}");C("\\iff","\\DOTSB\\;\\Longleftrightarrow\\;");C("\\implies","\\DOTSB\\;\\Longrightarrow\\;");C("\\impliedby","\\DOTSB\\;\\Longleftarrow\\;");C("\\dddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");C("\\ddddot","{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");var ig={",":"\\dotsc","\\not":"\\dotsb","+":"\\dotsb","=":"\\dotsb","<":"\\dotsb",">":"\\dotsb","-":"\\dotsb","*":"\\dotsb",":":"\\dotsb","\\DOTSB":"\\dotsb","\\coprod":"\\dotsb","\\bigvee":"\\dotsb","\\bigwedge":"\\dotsb","\\biguplus":"\\dotsb","\\bigcap":"\\dotsb","\\bigcup":"\\dotsb","\\prod":"\\dotsb","\\sum":"\\dotsb","\\bigotimes":"\\dotsb","\\bigoplus":"\\dotsb","\\bigodot":"\\dotsb","\\bigsqcup":"\\dotsb","\\And":"\\dotsb","\\longrightarrow":"\\dotsb","\\Longrightarrow":"\\dotsb","\\longleftarrow":"\\dotsb","\\Longleftarrow":"\\dotsb","\\longleftrightarrow":"\\dotsb","\\Longleftrightarrow":"\\dotsb","\\mapsto":"\\dotsb","\\longmapsto":"\\dotsb","\\hookrightarrow":"\\dotsb","\\doteq":"\\dotsb","\\mathbin":"\\dotsb","\\mathrel":"\\dotsb","\\relbar":"\\dotsb","\\Relbar":"\\dotsb","\\xrightarrow":"\\dotsb","\\xleftarrow":"\\dotsb","\\DOTSI":"\\dotsi","\\int":"\\dotsi","\\oint":"\\dotsi","\\iint":"\\dotsi","\\iiint":"\\dotsi","\\iiiint":"\\dotsi","\\idotsint":"\\dotsi","\\DOTSX":"\\dotsx"},DC=new Set(["bin","rel"]);C("\\dots",function(e){var n="\\dotso",t=e.expandAfterFuture().text;return t in ig?n=ig[t]:(t.slice(0,4)==="\\not"||t in Dn.math&&DC.has(Dn.math[t].group))&&(n="\\dotsb"),n});var Sh={")":!0,"]":!0,"\\rbrack":!0,"\\}":!0,"\\rbrace":!0,"\\rangle":!0,"\\rceil":!0,"\\rfloor":!0,"\\rgroup":!0,"\\rmoustache":!0,"\\right":!0,"\\bigr":!0,"\\biggr":!0,"\\Bigr":!0,"\\Biggr":!0,$:!0,";":!0,".":!0,",":!0};C("\\dotso",function(e){var n=e.future().text;return n in Sh?"\\ldots\\,":"\\ldots"});C("\\dotsc",function(e){var n=e.future().text;return n in Sh&&n!==","?"\\ldots\\,":"\\ldots"});C("\\cdots",function(e){var n=e.future().text;return n in Sh?"\\@cdots\\,":"\\@cdots"});C("\\dotsb","\\cdots");C("\\dotsm","\\cdots");C("\\dotsi","\\!\\cdots");C("\\dotsx","\\ldots\\,");C("\\DOTSI","\\relax");C("\\DOTSB","\\relax");C("\\DOTSX","\\relax");C("\\tmspace","\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");C("\\,","\\tmspace+{3mu}{.1667em}");C("\\thinspace","\\,");C("\\>","\\mskip{4mu}");C("\\:","\\tmspace+{4mu}{.2222em}");C("\\medspace","\\:");C("\\;","\\tmspace+{5mu}{.2777em}");C("\\thickspace","\\;");C("\\!","\\tmspace-{3mu}{.1667em}");C("\\negthinspace","\\!");C("\\negmedspace","\\tmspace-{4mu}{.2222em}");C("\\negthickspace","\\tmspace-{5mu}{.277em}");C("\\enspace","\\kern.5em ");C("\\enskip","\\hskip.5em\\relax");C("\\quad","\\hskip1em\\relax");C("\\qquad","\\hskip2em\\relax");C("\\tag","\\@ifstar\\tag@literal\\tag@paren");C("\\tag@paren","\\tag@literal{({#1})}");C("\\tag@literal",e=>{if(e.macros.get("\\df@tag"))throw new de("Multiple \\tag");return"\\gdef\\df@tag{\\text{#1}}"});C("\\bmod","\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");C("\\pod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");C("\\pmod","\\pod{{\\rm mod}\\mkern6mu#1}");C("\\mod","\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");C("\\newline","\\\\\\relax");C("\\TeX","\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");var Y4=we(Nr["Main-Regular"][84][1]-.7*Nr["Main-Regular"][65][1]);C("\\LaTeX","\\textrm{\\html@mathml{"+("L\\kern-.36em\\raisebox{"+Y4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{LaTeX}}");C("\\KaTeX","\\textrm{\\html@mathml{"+("K\\kern-.17em\\raisebox{"+Y4+"}{\\scriptstyle A}")+"\\kern-.15em\\TeX}{KaTeX}}");C("\\hspace","\\@ifstar\\@hspacer\\@hspace");C("\\@hspace","\\hskip #1\\relax");C("\\@hspacer","\\rule{0pt}{0pt}\\hskip #1\\relax");C("\\ordinarycolon",":");C("\\vcentcolon","\\mathrel{\\mathop\\ordinarycolon}");C("\\dblcolon",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');C("\\coloneqq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');C("\\Coloneqq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');C("\\coloneq",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');C("\\Coloneq",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');C("\\eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');C("\\Eqqcolon",'\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');C("\\eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');C("\\Eqcolon",'\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');C("\\colonapprox",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');C("\\Colonapprox",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');C("\\colonsim",'\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');C("\\Colonsim",'\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');C("∷","\\dblcolon");C("∹","\\eqcolon");C("≔","\\coloneqq");C("≕","\\eqqcolon");C("⩴","\\Coloneqq");C("\\ratio","\\vcentcolon");C("\\coloncolon","\\dblcolon");C("\\colonequals","\\coloneqq");C("\\coloncolonequals","\\Coloneqq");C("\\equalscolon","\\eqqcolon");C("\\equalscoloncolon","\\Eqqcolon");C("\\colonminus","\\coloneq");C("\\coloncolonminus","\\Coloneq");C("\\minuscolon","\\eqcolon");C("\\minuscoloncolon","\\Eqcolon");C("\\coloncolonapprox","\\Colonapprox");C("\\coloncolonsim","\\Colonsim");C("\\simcolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");C("\\simcoloncolon","\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");C("\\approxcolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");C("\\approxcoloncolon","\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");C("\\notni","\\html@mathml{\\not\\ni}{\\mathrel{\\char`∌}}");C("\\limsup","\\DOTSB\\operatorname*{lim\\,sup}");C("\\liminf","\\DOTSB\\operatorname*{lim\\,inf}");C("\\injlim","\\DOTSB\\operatorname*{inj\\,lim}");C("\\projlim","\\DOTSB\\operatorname*{proj\\,lim}");C("\\varlimsup","\\DOTSB\\operatorname*{\\overline{lim}}");C("\\varliminf","\\DOTSB\\operatorname*{\\underline{lim}}");C("\\varinjlim","\\DOTSB\\operatorname*{\\underrightarrow{lim}}");C("\\varprojlim","\\DOTSB\\operatorname*{\\underleftarrow{lim}}");C("\\gvertneqq","\\html@mathml{\\@gvertneqq}{≩}");C("\\lvertneqq","\\html@mathml{\\@lvertneqq}{≨}");C("\\ngeqq","\\html@mathml{\\@ngeqq}{≱}");C("\\ngeqslant","\\html@mathml{\\@ngeqslant}{≱}");C("\\nleqq","\\html@mathml{\\@nleqq}{≰}");C("\\nleqslant","\\html@mathml{\\@nleqslant}{≰}");C("\\nshortmid","\\html@mathml{\\@nshortmid}{∤}");C("\\nshortparallel","\\html@mathml{\\@nshortparallel}{∦}");C("\\nsubseteqq","\\html@mathml{\\@nsubseteqq}{⊈}");C("\\nsupseteqq","\\html@mathml{\\@nsupseteqq}{⊉}");C("\\varsubsetneq","\\html@mathml{\\@varsubsetneq}{⊊}");C("\\varsubsetneqq","\\html@mathml{\\@varsubsetneqq}{⫋}");C("\\varsupsetneq","\\html@mathml{\\@varsupsetneq}{⊋}");C("\\varsupsetneqq","\\html@mathml{\\@varsupsetneqq}{⫌}");C("\\imath","\\html@mathml{\\@imath}{ı}");C("\\jmath","\\html@mathml{\\@jmath}{ȷ}");C("\\llbracket","\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`⟦}}");C("\\rrbracket","\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`⟧}}");C("⟦","\\llbracket");C("⟧","\\rrbracket");C("\\lBrace","\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`⦃}}");C("\\rBrace","\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`⦄}}");C("⦃","\\lBrace");C("⦄","\\rBrace");C("\\minuso","\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`⦵}}");C("⦵","\\minuso");C("\\darr","\\downarrow");C("\\dArr","\\Downarrow");C("\\Darr","\\Downarrow");C("\\lang","\\langle");C("\\rang","\\rangle");C("\\uarr","\\uparrow");C("\\uArr","\\Uparrow");C("\\Uarr","\\Uparrow");C("\\N","\\mathbb{N}");C("\\R","\\mathbb{R}");C("\\Z","\\mathbb{Z}");C("\\alef","\\aleph");C("\\alefsym","\\aleph");C("\\Alpha","\\mathrm{A}");C("\\Beta","\\mathrm{B}");C("\\bull","\\bullet");C("\\Chi","\\mathrm{X}");C("\\clubs","\\clubsuit");C("\\cnums","\\mathbb{C}");C("\\Complex","\\mathbb{C}");C("\\Dagger","\\ddagger");C("\\diamonds","\\diamondsuit");C("\\empty","\\emptyset");C("\\Epsilon","\\mathrm{E}");C("\\Eta","\\mathrm{H}");C("\\exist","\\exists");C("\\harr","\\leftrightarrow");C("\\hArr","\\Leftrightarrow");C("\\Harr","\\Leftrightarrow");C("\\hearts","\\heartsuit");C("\\image","\\Im");C("\\infin","\\infty");C("\\Iota","\\mathrm{I}");C("\\isin","\\in");C("\\Kappa","\\mathrm{K}");C("\\larr","\\leftarrow");C("\\lArr","\\Leftarrow");C("\\Larr","\\Leftarrow");C("\\lrarr","\\leftrightarrow");C("\\lrArr","\\Leftrightarrow");C("\\Lrarr","\\Leftrightarrow");C("\\Mu","\\mathrm{M}");C("\\natnums","\\mathbb{N}");C("\\Nu","\\mathrm{N}");C("\\Omicron","\\mathrm{O}");C("\\plusmn","\\pm");C("\\rarr","\\rightarrow");C("\\rArr","\\Rightarrow");C("\\Rarr","\\Rightarrow");C("\\real","\\Re");C("\\reals","\\mathbb{R}");C("\\Reals","\\mathbb{R}");C("\\Rho","\\mathrm{P}");C("\\sdot","\\cdot");C("\\sect","\\S");C("\\spades","\\spadesuit");C("\\sub","\\subset");C("\\sube","\\subseteq");C("\\supe","\\supseteq");C("\\Tau","\\mathrm{T}");C("\\thetasym","\\vartheta");C("\\weierp","\\wp");C("\\Zeta","\\mathrm{Z}");C("\\argmin","\\DOTSB\\operatorname*{arg\\,min}");C("\\argmax","\\DOTSB\\operatorname*{arg\\,max}");C("\\plim","\\DOTSB\\mathop{\\operatorname{plim}}\\limits");C("\\bra","\\mathinner{\\langle{#1}|}");C("\\ket","\\mathinner{|{#1}\\rangle}");C("\\braket","\\mathinner{\\langle{#1}\\rangle}");C("\\Bra","\\left\\langle#1\\right|");C("\\Ket","\\left|#1\\right\\rangle");var Q4=e=>n=>{var t=n.consumeArg().tokens,i=n.consumeArg().tokens,l=n.consumeArg().tokens,o=n.consumeArg().tokens,s=n.macros.get("|"),c=n.macros.get("\\|");n.macros.beginGroup();var h=d=>w=>{e&&(w.macros.set("|",s),l.length&&w.macros.set("\\|",c));var b=d;if(!d&&l.length){var D=w.future();D.text==="|"&&(w.popToken(),b=!0)}return{tokens:b?l:i,numArgs:0}};n.macros.set("|",h(!1)),l.length&&n.macros.set("\\|",h(!0));var p=n.consumeArg().tokens,f=n.expandTokens([...o,...p,...t]);return n.macros.endGroup(),{tokens:f.reverse(),numArgs:0}};C("\\bra@ket",Q4(!1));C("\\bra@set",Q4(!0));C("\\Braket","\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");C("\\Set","\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");C("\\set","\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");C("\\angln","{\\angl n}");C("\\blue","\\textcolor{##6495ed}{#1}");C("\\orange","\\textcolor{##ffa500}{#1}");C("\\pink","\\textcolor{##ff00af}{#1}");C("\\red","\\textcolor{##df0030}{#1}");C("\\green","\\textcolor{##28ae7b}{#1}");C("\\gray","\\textcolor{gray}{#1}");C("\\purple","\\textcolor{##9d38bd}{#1}");C("\\blueA","\\textcolor{##ccfaff}{#1}");C("\\blueB","\\textcolor{##80f6ff}{#1}");C("\\blueC","\\textcolor{##63d9ea}{#1}");C("\\blueD","\\textcolor{##11accd}{#1}");C("\\blueE","\\textcolor{##0c7f99}{#1}");C("\\tealA","\\textcolor{##94fff5}{#1}");C("\\tealB","\\textcolor{##26edd5}{#1}");C("\\tealC","\\textcolor{##01d1c1}{#1}");C("\\tealD","\\textcolor{##01a995}{#1}");C("\\tealE","\\textcolor{##208170}{#1}");C("\\greenA","\\textcolor{##b6ffb0}{#1}");C("\\greenB","\\textcolor{##8af281}{#1}");C("\\greenC","\\textcolor{##74cf70}{#1}");C("\\greenD","\\textcolor{##1fab54}{#1}");C("\\greenE","\\textcolor{##0d923f}{#1}");C("\\goldA","\\textcolor{##ffd0a9}{#1}");C("\\goldB","\\textcolor{##ffbb71}{#1}");C("\\goldC","\\textcolor{##ff9c39}{#1}");C("\\goldD","\\textcolor{##e07d10}{#1}");C("\\goldE","\\textcolor{##a75a05}{#1}");C("\\redA","\\textcolor{##fca9a9}{#1}");C("\\redB","\\textcolor{##ff8482}{#1}");C("\\redC","\\textcolor{##f9685d}{#1}");C("\\redD","\\textcolor{##e84d39}{#1}");C("\\redE","\\textcolor{##bc2612}{#1}");C("\\maroonA","\\textcolor{##ffbde0}{#1}");C("\\maroonB","\\textcolor{##ff92c6}{#1}");C("\\maroonC","\\textcolor{##ed5fa6}{#1}");C("\\maroonD","\\textcolor{##ca337c}{#1}");C("\\maroonE","\\textcolor{##9e034e}{#1}");C("\\purpleA","\\textcolor{##ddd7ff}{#1}");C("\\purpleB","\\textcolor{##c6b9fc}{#1}");C("\\purpleC","\\textcolor{##aa87ff}{#1}");C("\\purpleD","\\textcolor{##7854ab}{#1}");C("\\purpleE","\\textcolor{##543b78}{#1}");C("\\mintA","\\textcolor{##f5f9e8}{#1}");C("\\mintB","\\textcolor{##edf2df}{#1}");C("\\mintC","\\textcolor{##e0e5cc}{#1}");C("\\grayA","\\textcolor{##f6f7f7}{#1}");C("\\grayB","\\textcolor{##f0f1f2}{#1}");C("\\grayC","\\textcolor{##e3e5e6}{#1}");C("\\grayD","\\textcolor{##d6d8da}{#1}");C("\\grayE","\\textcolor{##babec2}{#1}");C("\\grayF","\\textcolor{##888d93}{#1}");C("\\grayG","\\textcolor{##626569}{#1}");C("\\grayH","\\textcolor{##3b3e40}{#1}");C("\\grayI","\\textcolor{##21242c}{#1}");C("\\kaBlue","\\textcolor{##314453}{#1}");C("\\kaGreen","\\textcolor{##71B307}{#1}");var K4={"^":!0,_:!0,"\\limits":!0,"\\nolimits":!0};class CC{constructor(n,t,i){this.settings=void 0,this.expansionCount=void 0,this.lexer=void 0,this.macros=void 0,this.stack=void 0,this.mode=void 0,this.settings=t,this.expansionCount=0,this.feed(n),this.macros=new kC(SC,t.macros),this.mode=i,this.stack=[]}feed(n){this.lexer=new tg(n,this.settings)}switchMode(n){this.mode=n}beginGroup(){this.macros.beginGroup()}endGroup(){this.macros.endGroup()}endGroups(){this.macros.endGroups()}future(){return this.stack.length===0&&this.pushToken(this.lexer.lex()),this.stack[this.stack.length-1]}popToken(){return this.future(),this.stack.pop()}pushToken(n){this.stack.push(n)}pushTokens(n){this.stack.push(...n)}scanArgument(n){var t,i,l;if(n){if(this.consumeSpaces(),this.future().text!=="[")return null;t=this.popToken(),{tokens:l,end:i}=this.consumeArg(["]"])}else({tokens:l,start:t,end:i}=this.consumeArg());return this.pushToken(new Yt("EOF",i.loc)),this.pushTokens(l),new Yt("",Rt.range(t,i))}consumeSpaces(){for(;;){var n=this.future();if(n.text===" ")this.stack.pop();else break}}consumeArg(n){var t=[],i=n&&n.length>0;i||this.consumeSpaces();var l=this.future(),o,s=0,c=0;do{if(o=this.popToken(),t.push(o),o.text==="{")++s;else if(o.text==="}"){if(--s,s===-1)throw new de("Extra }",o)}else if(o.text==="EOF")throw new de("Unexpected end of input in a macro argument, expected '"+(n&&i?n[c]:"}")+"'",o);if(n&&i)if((s===0||s===1&&n[c]==="{")&&o.text===n[c]){if(++c,c===n.length){t.splice(-c,c);break}}else c=0}while(s!==0||i);return l.text==="{"&&t[t.length-1].text==="}"&&(t.pop(),t.shift()),t.reverse(),{tokens:t,start:l,end:o}}consumeArgs(n,t){if(t){if(t.length!==n+1)throw new de("The length of delimiters doesn't match the number of args!");for(var i=t[0],l=0;l<i.length;l++){var o=this.popToken();if(i[l]!==o.text)throw new de("Use of the macro doesn't match its definition",o)}}for(var s=[],c=0;c<n;c++)s.push(this.consumeArg(t&&t[c+1]).tokens);return s}countExpansion(n){if(this.expansionCount+=n,this.expansionCount>this.settings.maxExpand)throw new de("Too many expansions: infinite loop or need to increase maxExpand setting")}expandOnce(n){var t=this.popToken(),i=t.text,l=t.noexpand?null:this._getExpansion(i);if(l==null||n&&l.unexpandable){if(n&&l==null&&i[0]==="\\"&&!this.isDefined(i))throw new de("Undefined control sequence: "+i);return this.pushToken(t),!1}this.countExpansion(1);var o=l.tokens,s=this.consumeArgs(l.numArgs,l.delimiters);if(l.numArgs){o=o.slice();for(var c=o.length-1;c>=0;--c){var h=o[c];if(h.text==="#"){if(c===0)throw new de("Incomplete placeholder at end of macro body",h);if(h=o[--c],h.text==="#")o.splice(c+1,1);else if(/^[1-9]$/.test(h.text))o.splice(c,2,...s[+h.text-1]);else throw new de("Not a valid argument number",h)}}}return this.pushTokens(o),o.length}expandAfterFuture(){return this.expandOnce(),this.future()}expandNextToken(){for(;;)if(this.expandOnce()===!1){var n=this.stack.pop();return n.treatAsRelax&&(n.text="\\relax"),n}throw new Error}expandMacro(n){return this.macros.has(n)?this.expandTokens([new Yt(n)]):void 0}expandTokens(n){var t=[],i=this.stack.length;for(this.pushTokens(n);this.stack.length>i;)if(this.expandOnce(!0)===!1){var l=this.stack.pop();l.treatAsRelax&&(l.noexpand=!1,l.treatAsRelax=!1),t.push(l)}return this.countExpansion(t.length),t}expandMacroAsText(n){var t=this.expandMacro(n);return t&&t.map(i=>i.text).join("")}_getExpansion(n){var t=this.macros.get(n);if(t==null)return t;if(n.length===1){var i=this.lexer.catcodes[n];if(i!=null&&i!==13)return}var l=typeof t=="function"?t(this):t;if(typeof l=="string"){var o=0;if(l.includes("#"))for(var s=l.replace(/##/g,"");s.includes("#"+(o+1));)++o;for(var c=new tg(l,this.settings),h=[],p=c.lex();p.text!=="EOF";)h.push(p),p=c.lex();h.reverse();var f={tokens:h,numArgs:o};return f}return l}isDefined(n){return this.macros.has(n)||Fi.hasOwnProperty(n)||Dn.math.hasOwnProperty(n)||Dn.text.hasOwnProperty(n)||K4.hasOwnProperty(n)}isExpandable(n){var t=this.macros.get(n);return t!=null?typeof t=="string"||typeof t=="function"||!t.unexpandable:Fi.hasOwnProperty(n)&&!Fi[n].primitive}}var ag=/^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/,Xs=Object.freeze({"₊":"+","₋":"-","₌":"=","₍":"(","₎":")","₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ₐ":"a","ₑ":"e","ₕ":"h","ᵢ":"i","ⱼ":"j","ₖ":"k","ₗ":"l","ₘ":"m","ₙ":"n","ₒ":"o","ₚ":"p","ᵣ":"r","ₛ":"s","ₜ":"t","ᵤ":"u","ᵥ":"v","ₓ":"x","ᵦ":"β","ᵧ":"γ","ᵨ":"ρ","ᵩ":"ϕ","ᵪ":"χ","⁺":"+","⁻":"-","⁼":"=","⁽":"(","⁾":")","⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ᴬ":"A","ᴮ":"B","ᴰ":"D","ᴱ":"E","ᴳ":"G","ᴴ":"H","ᴵ":"I","ᴶ":"J","ᴷ":"K","ᴸ":"L","ᴹ":"M","ᴺ":"N","ᴼ":"O","ᴾ":"P","ᴿ":"R","ᵀ":"T","ᵁ":"U","ⱽ":"V","ᵂ":"W","ᵃ":"a","ᵇ":"b","ᶜ":"c","ᵈ":"d","ᵉ":"e","ᶠ":"f","ᵍ":"g",ʰ:"h","ⁱ":"i",ʲ:"j","ᵏ":"k",ˡ:"l","ᵐ":"m",ⁿ:"n","ᵒ":"o","ᵖ":"p",ʳ:"r",ˢ:"s","ᵗ":"t","ᵘ":"u","ᵛ":"v",ʷ:"w",ˣ:"x",ʸ:"y","ᶻ":"z","ᵝ":"β","ᵞ":"γ","ᵟ":"δ","ᵠ":"ϕ","ᵡ":"χ","ᶿ":"θ"}),Kc={"́":{text:"\\'",math:"\\acute"},"̀":{text:"\\`",math:"\\grave"},"̈":{text:'\\"',math:"\\ddot"},"̃":{text:"\\~",math:"\\tilde"},"̄":{text:"\\=",math:"\\bar"},"̆":{text:"\\u",math:"\\breve"},"̌":{text:"\\v",math:"\\check"},"̂":{text:"\\^",math:"\\hat"},"̇":{text:"\\.",math:"\\dot"},"̊":{text:"\\r",math:"\\mathring"},"̋":{text:"\\H"},"̧":{text:"\\c"}},lg={á:"á",à:"à",ä:"ä",ǟ:"ǟ",ã:"ã",ā:"ā",ă:"ă",ắ:"ắ",ằ:"ằ",ẵ:"ẵ",ǎ:"ǎ",â:"â",ấ:"ấ",ầ:"ầ",ẫ:"ẫ",ȧ:"ȧ",ǡ:"ǡ",å:"å",ǻ:"ǻ",ḃ:"ḃ",ć:"ć",ḉ:"ḉ",č:"č",ĉ:"ĉ",ċ:"ċ",ç:"ç",ď:"ď",ḋ:"ḋ",ḑ:"ḑ",é:"é",è:"è",ë:"ë",ẽ:"ẽ",ē:"ē",ḗ:"ḗ",ḕ:"ḕ",ĕ:"ĕ",ḝ:"ḝ",ě:"ě",ê:"ê",ế:"ế",ề:"ề",ễ:"ễ",ė:"ė",ȩ:"ȩ",ḟ:"ḟ",ǵ:"ǵ",ḡ:"ḡ",ğ:"ğ",ǧ:"ǧ",ĝ:"ĝ",ġ:"ġ",ģ:"ģ",ḧ:"ḧ",ȟ:"ȟ",ĥ:"ĥ",ḣ:"ḣ",ḩ:"ḩ",í:"í",ì:"ì",ï:"ï",ḯ:"ḯ",ĩ:"ĩ",ī:"ī",ĭ:"ĭ",ǐ:"ǐ",î:"î",ǰ:"ǰ",ĵ:"ĵ",ḱ:"ḱ",ǩ:"ǩ",ķ:"ķ",ĺ:"ĺ",ľ:"ľ",ļ:"ļ",ḿ:"ḿ",ṁ:"ṁ",ń:"ń",ǹ:"ǹ",ñ:"ñ",ň:"ň",ṅ:"ṅ",ņ:"ņ",ó:"ó",ò:"ò",ö:"ö",ȫ:"ȫ",õ:"õ",ṍ:"ṍ",ṏ:"ṏ",ȭ:"ȭ",ō:"ō",ṓ:"ṓ",ṑ:"ṑ",ŏ:"ŏ",ǒ:"ǒ",ô:"ô",ố:"ố",ồ:"ồ",ỗ:"ỗ",ȯ:"ȯ",ȱ:"ȱ",ő:"ő",ṕ:"ṕ",ṗ:"ṗ",ŕ:"ŕ",ř:"ř",ṙ:"ṙ",ŗ:"ŗ",ś:"ś",ṥ:"ṥ",š:"š",ṧ:"ṧ",ŝ:"ŝ",ṡ:"ṡ",ş:"ş",ẗ:"ẗ",ť:"ť",ṫ:"ṫ",ţ:"ţ",ú:"ú",ù:"ù",ü:"ü",ǘ:"ǘ",ǜ:"ǜ",ǖ:"ǖ",ǚ:"ǚ",ũ:"ũ",ṹ:"ṹ",ū:"ū",ṻ:"ṻ",ŭ:"ŭ",ǔ:"ǔ",û:"û",ů:"ů",ű:"ű",ṽ:"ṽ",ẃ:"ẃ",ẁ:"ẁ",ẅ:"ẅ",ŵ:"ŵ",ẇ:"ẇ",ẘ:"ẘ",ẍ:"ẍ",ẋ:"ẋ",ý:"ý",ỳ:"ỳ",ÿ:"ÿ",ỹ:"ỹ",ȳ:"ȳ",ŷ:"ŷ",ẏ:"ẏ",ẙ:"ẙ",ź:"ź",ž:"ž",ẑ:"ẑ",ż:"ż",Á:"Á",À:"À",Ä:"Ä",Ǟ:"Ǟ",Ã:"Ã",Ā:"Ā",Ă:"Ă",Ắ:"Ắ",Ằ:"Ằ",Ẵ:"Ẵ",Ǎ:"Ǎ",Â:"Â",Ấ:"Ấ",Ầ:"Ầ",Ẫ:"Ẫ",Ȧ:"Ȧ",Ǡ:"Ǡ",Å:"Å",Ǻ:"Ǻ",Ḃ:"Ḃ",Ć:"Ć",Ḉ:"Ḉ",Č:"Č",Ĉ:"Ĉ",Ċ:"Ċ",Ç:"Ç",Ď:"Ď",Ḋ:"Ḋ",Ḑ:"Ḑ",É:"É",È:"È",Ë:"Ë",Ẽ:"Ẽ",Ē:"Ē",Ḗ:"Ḗ",Ḕ:"Ḕ",Ĕ:"Ĕ",Ḝ:"Ḝ",Ě:"Ě",Ê:"Ê",Ế:"Ế",Ề:"Ề",Ễ:"Ễ",Ė:"Ė",Ȩ:"Ȩ",Ḟ:"Ḟ",Ǵ:"Ǵ",Ḡ:"Ḡ",Ğ:"Ğ",Ǧ:"Ǧ",Ĝ:"Ĝ",Ġ:"Ġ",Ģ:"Ģ",Ḧ:"Ḧ",Ȟ:"Ȟ",Ĥ:"Ĥ",Ḣ:"Ḣ",Ḩ:"Ḩ",Í:"Í",Ì:"Ì",Ï:"Ï",Ḯ:"Ḯ",Ĩ:"Ĩ",Ī:"Ī",Ĭ:"Ĭ",Ǐ:"Ǐ",Î:"Î",İ:"İ",Ĵ:"Ĵ",Ḱ:"Ḱ",Ǩ:"Ǩ",Ķ:"Ķ",Ĺ:"Ĺ",Ľ:"Ľ",Ļ:"Ļ",Ḿ:"Ḿ",Ṁ:"Ṁ",Ń:"Ń",Ǹ:"Ǹ",Ñ:"Ñ",Ň:"Ň",Ṅ:"Ṅ",Ņ:"Ņ",Ó:"Ó",Ò:"Ò",Ö:"Ö",Ȫ:"Ȫ",Õ:"Õ",Ṍ:"Ṍ",Ṏ:"Ṏ",Ȭ:"Ȭ",Ō:"Ō",Ṓ:"Ṓ",Ṑ:"Ṑ",Ŏ:"Ŏ",Ǒ:"Ǒ",Ô:"Ô",Ố:"Ố",Ồ:"Ồ",Ỗ:"Ỗ",Ȯ:"Ȯ",Ȱ:"Ȱ",Ő:"Ő",Ṕ:"Ṕ",Ṗ:"Ṗ",Ŕ:"Ŕ",Ř:"Ř",Ṙ:"Ṙ",Ŗ:"Ŗ",Ś:"Ś",Ṥ:"Ṥ",Š:"Š",Ṧ:"Ṧ",Ŝ:"Ŝ",Ṡ:"Ṡ",Ş:"Ş",Ť:"Ť",Ṫ:"Ṫ",Ţ:"Ţ",Ú:"Ú",Ù:"Ù",Ü:"Ü",Ǘ:"Ǘ",Ǜ:"Ǜ",Ǖ:"Ǖ",Ǚ:"Ǚ",Ũ:"Ũ",Ṹ:"Ṹ",Ū:"Ū",Ṻ:"Ṻ",Ŭ:"Ŭ",Ǔ:"Ǔ",Û:"Û",Ů:"Ů",Ű:"Ű",Ṽ:"Ṽ",Ẃ:"Ẃ",Ẁ:"Ẁ",Ẅ:"Ẅ",Ŵ:"Ŵ",Ẇ:"Ẇ",Ẍ:"Ẍ",Ẋ:"Ẋ",Ý:"Ý",Ỳ:"Ỳ",Ÿ:"Ÿ",Ỹ:"Ỹ",Ȳ:"Ȳ",Ŷ:"Ŷ",Ẏ:"Ẏ",Ź:"Ź",Ž:"Ž",Ẑ:"Ẑ",Ż:"Ż",ά:"ά",ὰ:"ὰ",ᾱ:"ᾱ",ᾰ:"ᾰ",έ:"έ",ὲ:"ὲ",ή:"ή",ὴ:"ὴ",ί:"ί",ὶ:"ὶ",ϊ:"ϊ",ΐ:"ΐ",ῒ:"ῒ",ῑ:"ῑ",ῐ:"ῐ",ό:"ό",ὸ:"ὸ",ύ:"ύ",ὺ:"ὺ",ϋ:"ϋ",ΰ:"ΰ",ῢ:"ῢ",ῡ:"ῡ",ῠ:"ῠ",ώ:"ώ",ὼ:"ὼ",Ύ:"Ύ",Ὺ:"Ὺ",Ϋ:"Ϋ",Ῡ:"Ῡ",Ῠ:"Ῠ",Ώ:"Ώ",Ὼ:"Ὼ"};class T0{constructor(n,t){this.mode=void 0,this.gullet=void 0,this.settings=void 0,this.leftrightDepth=void 0,this.nextToken=void 0,this.mode="math",this.gullet=new CC(n,t,this.mode),this.settings=t,this.leftrightDepth=0}expect(n,t){if(t===void 0&&(t=!0),this.fetch().text!==n)throw new de("Expected '"+n+"', got '"+this.fetch().text+"'",this.fetch());t&&this.consume()}consume(){this.nextToken=null}fetch(){return this.nextToken==null&&(this.nextToken=this.gullet.expandNextToken()),this.nextToken}switchMode(n){this.mode=n,this.gullet.switchMode(n)}parse(){this.settings.globalGroup||this.gullet.beginGroup(),this.settings.colorIsTextColor&&this.gullet.macros.set("\\color","\\textcolor");try{var n=this.parseExpression(!1);return this.expect("EOF"),this.settings.globalGroup||this.gullet.endGroup(),n}finally{this.gullet.endGroups()}}subparse(n){var t=this.nextToken;this.consume(),this.gullet.pushToken(new Yt("}")),this.gullet.pushTokens(n);var i=this.parseExpression(!1);return this.expect("}"),this.nextToken=t,i}parseExpression(n,t){for(var i=[];;){this.mode==="math"&&this.consumeSpaces();var l=this.fetch();if(T0.endOfExpression.has(l.text)||t&&l.text===t||n&&Fi[l.text]&&Fi[l.text].infix)break;var o=this.parseAtom(t);if(o){if(o.type==="internal")continue}else break;i.push(o)}return this.mode==="text"&&this.formLigatures(i),this.handleInfixNodes(i)}handleInfixNodes(n){for(var t=-1,i,l=0;l<n.length;l++)if(n[l].type==="infix"){if(t!==-1)throw new de("only one infix operator per group",n[l].token);t=l,i=n[l].replaceWith}if(t!==-1&&i){var o,s,c=n.slice(0,t),h=n.slice(t+1);c.length===1&&c[0].type==="ordgroup"?o=c[0]:o={type:"ordgroup",mode:this.mode,body:c},h.length===1&&h[0].type==="ordgroup"?s=h[0]:s={type:"ordgroup",mode:this.mode,body:h};var p;return i==="\\\\abovefrac"?p=this.callFunction(i,[o,n[t],s],[]):p=this.callFunction(i,[o,s],[]),[p]}else return n}handleSupSubscript(n){var t=this.fetch(),i=t.text;this.consume(),this.consumeSpaces();var l;do{var o;l=this.parseGroup(n)}while(((o=l)==null?void 0:o.type)==="internal");if(!l)throw new de("Expected group after '"+i+"'",t);return l}formatUnsupportedCmd(n){for(var t=[],i=0;i<n.length;i++)t.push({type:"textord",mode:"text",text:n[i]});var l={type:"text",mode:this.mode,body:t},o={type:"color",mode:this.mode,color:this.settings.errorColor,body:[l]};return o}parseAtom(n){var t=this.parseGroup("atom",n);if((t==null?void 0:t.type)==="internal"||this.mode==="text")return t;for(var i,l;;){this.consumeSpaces();var o=this.fetch();if(o.text==="\\limits"||o.text==="\\nolimits"){if(t&&t.type==="op"){var s=o.text==="\\limits";t.limits=s,t.alwaysHandleSupSub=!0}else if(t&&t.type==="operatorname")t.alwaysHandleSupSub&&(t.limits=o.text==="\\limits");else throw new de("Limit controls must follow a math operator",o);this.consume()}else if(o.text==="^"){if(i)throw new de("Double superscript",o);i=this.handleSupSubscript("superscript")}else if(o.text==="_"){if(l)throw new de("Double subscript",o);l=this.handleSupSubscript("subscript")}else if(o.text==="'"){if(i)throw new de("Double superscript",o);var c={type:"textord",mode:this.mode,text:"\\prime"},h=[c];for(this.consume();this.fetch().text==="'";)h.push(c),this.consume();this.fetch().text==="^"&&h.push(this.handleSupSubscript("superscript")),i={type:"ordgroup",mode:this.mode,body:h}}else if(Xs[o.text]){var p=ag.test(o.text),f=[];for(f.push(new Yt(Xs[o.text])),this.consume();;){var d=this.fetch().text;if(!Xs[d]||ag.test(d)!==p)break;f.unshift(new Yt(Xs[d])),this.consume()}var w=this.subparse(f);p?l={type:"ordgroup",mode:"math",body:w}:i={type:"ordgroup",mode:"math",body:w}}else break}return i||l?{type:"supsub",mode:this.mode,base:t,sup:i,sub:l}:t}parseFunction(n,t){var i=this.fetch(),l=i.text,o=Fi[l];if(!o)return null;if(this.consume(),t&&t!=="atom"&&!o.allowedInArgument)throw new de("Got function '"+l+"' with no arguments"+(t?" as "+t:""),i);if(this.mode==="text"&&!o.allowedInText)throw new de("Can't use function '"+l+"' in text mode",i);if(this.mode==="math"&&o.allowedInMath===!1)throw new de("Can't use function '"+l+"' in math mode",i);var{args:s,optArgs:c}=this.parseArguments(l,o);return this.callFunction(l,s,c,i,n)}callFunction(n,t,i,l,o){var s={funcName:n,parser:this,token:l,breakOnTokenText:o},c=Fi[n];if(c&&c.handler)return c.handler(s,t,i);throw new de("No function handler for "+n)}parseArguments(n,t){var i=t.numArgs+t.numOptionalArgs;if(i===0)return{args:[],optArgs:[]};for(var l=[],o=[],s=0;s<i;s++){var c=t.argTypes&&t.argTypes[s],h=s<t.numOptionalArgs;(t.primitive&&c==null||t.type==="sqrt"&&s===1&&o[0]==null)&&(c="primitive");var p=this.parseGroupOfType("argument to '"+n+"'",c,h);if(h)o.push(p);else if(p!=null)l.push(p);else throw new de("Null argument, please report this as a bug")}return{args:l,optArgs:o}}parseGroupOfType(n,t,i){switch(t){case"color":return this.parseColorGroup(i);case"size":return this.parseSizeGroup(i);case"url":return this.parseUrlGroup(i);case"math":case"text":return this.parseArgumentGroup(i,t);case"hbox":{var l=this.parseArgumentGroup(i,"text");return l!=null?{type:"styling",mode:l.mode,body:[l],style:"text"}:null}case"raw":{var o=this.parseStringGroup("raw",i);return o!=null?{type:"raw",mode:"text",string:o.text}:null}case"primitive":{if(i)throw new de("A primitive argument cannot be optional");var s=this.parseGroup(n);if(s==null)throw new de("Expected group as "+n,this.fetch());return s}case"original":case null:case void 0:return this.parseArgumentGroup(i);default:throw new de("Unknown group type as "+n,this.fetch())}}consumeSpaces(){for(;this.fetch().text===" ";)this.consume()}parseStringGroup(n,t){var i=this.gullet.scanArgument(t);if(i==null)return null;for(var l="",o;(o=this.fetch()).text!=="EOF";)l+=o.text,this.consume();return this.consume(),i.text=l,i}parseRegexGroup(n,t){for(var i=this.fetch(),l=i,o="",s;(s=this.fetch()).text!=="EOF"&&n.test(o+s.text);)l=s,o+=l.text,this.consume();if(o==="")throw new de("Invalid "+t+": '"+i.text+"'",i);return i.range(l,o)}parseColorGroup(n){var t=this.parseStringGroup("color",n);if(t==null)return null;var i=/^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);if(!i)throw new de("Invalid color: '"+t.text+"'",t);var l=i[0];return/^[0-9a-f]{6}$/i.test(l)&&(l="#"+l),{type:"color-token",mode:this.mode,color:l}}parseSizeGroup(n){var t,i=!1;if(this.gullet.consumeSpaces(),!n&&this.gullet.future().text!=="{"?t=this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/,"size"):t=this.parseStringGroup("size",n),!t)return null;!n&&t.text.length===0&&(t.text="0pt",i=!0);var l=/([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);if(!l)throw new de("Invalid size: '"+t.text+"'",t);var o={number:+(l[1]+l[2]),unit:l[3]};if(!o4(o))throw new de("Invalid unit: '"+o.unit+"'",t);return{type:"size",mode:this.mode,value:o,isBlank:i}}parseUrlGroup(n){this.gullet.lexer.setCatcode("%",13),this.gullet.lexer.setCatcode("~",12);var t=this.parseStringGroup("url",n);if(this.gullet.lexer.setCatcode("%",14),this.gullet.lexer.setCatcode("~",13),t==null)return null;var i=t.text.replace(/\\([#$%&~_^{}])/g,"$1");return{type:"url",mode:this.mode,url:i}}parseArgumentGroup(n,t){var i=this.gullet.scanArgument(n);if(i==null)return null;var l=this.mode;t&&this.switchMode(t),this.gullet.beginGroup();var o=this.parseExpression(!1,"EOF");this.expect("EOF"),this.gullet.endGroup();var s={type:"ordgroup",mode:this.mode,loc:i.loc,body:o};return t&&this.switchMode(l),s}parseGroup(n,t){var i=this.fetch(),l=i.text,o;if(l==="{"||l==="\\begingroup"){this.consume();var s=l==="{"?"}":"\\endgroup";this.gullet.beginGroup();var c=this.parseExpression(!1,s),h=this.fetch();this.expect(s),this.gullet.endGroup(),o={type:"ordgroup",mode:this.mode,loc:Rt.range(i,h),body:c,semisimple:l==="\\begingroup"||void 0}}else if(o=this.parseFunction(t,n)||this.parseSymbol(),o==null&&l[0]==="\\"&&!K4.hasOwnProperty(l)){if(this.settings.throwOnError)throw new de("Undefined control sequence: "+l,i);o=this.formatUnsupportedCmd(l),this.consume()}return o}formLigatures(n){for(var t=n.length-1,i=0;i<t;++i){var l=n[i],o=l.text;o==="-"&&n[i+1].text==="-"&&(i+1<t&&n[i+2].text==="-"?(n.splice(i,3,{type:"textord",mode:"text",loc:Rt.range(l,n[i+2]),text:"---"}),t-=2):(n.splice(i,2,{type:"textord",mode:"text",loc:Rt.range(l,n[i+1]),text:"--"}),t-=1)),(o==="'"||o==="`")&&n[i+1].text===o&&(n.splice(i,2,{type:"textord",mode:"text",loc:Rt.range(l,n[i+1]),text:o+o}),t-=1)}}parseSymbol(){var n=this.fetch(),t=n.text;if(/^\\verb[^a-zA-Z]/.test(t)){this.consume();var i=t.slice(5),l=i.charAt(0)==="*";if(l&&(i=i.slice(1)),i.length<2||i.charAt(0)!==i.slice(-1))throw new de(`\\verb assertion failed --
                    please report what input caused this bug`);return i=i.slice(1,-1),{type:"verb",mode:"text",body:i,star:l}}lg.hasOwnProperty(t[0])&&!Dn[this.mode][t[0]]&&(this.settings.strict&&this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Accented Unicode text character "'+t[0]+'" used in math mode',n),t=lg[t[0]]+t.slice(1));var o=wC.exec(t);o&&(t=t.substring(0,o.index),t==="i"?t="ı":t==="j"&&(t="ȷ"));var s;if(Dn[this.mode][t]){this.settings.strict&&this.mode==="math"&&v1.includes(t)&&this.settings.reportNonstrict("unicodeTextInMathMode",'Latin-1/Unicode text character "'+t[0]+'" used in math mode',n);var c=Dn[this.mode][t].group,h=Rt.range(n),p;if(xD.hasOwnProperty(c)){var f=c;p={type:"atom",mode:this.mode,family:f,loc:h,text:t}}else p={type:c,mode:this.mode,loc:h,text:t};s=p}else if(t.charCodeAt(0)>=128)this.settings.strict&&(l4(t.charCodeAt(0))?this.mode==="math"&&this.settings.reportNonstrict("unicodeTextInMathMode",'Unicode text character "'+t[0]+'" used in math mode',n):this.settings.reportNonstrict("unknownSymbol",'Unrecognized Unicode character "'+t[0]+'"'+(" ("+t.charCodeAt(0)+")"),n)),s={type:"textord",mode:"text",loc:Rt.range(n),text:t};else return null;if(this.consume(),o)for(var d=0;d<o[0].length;d++){var w=o[0][d];if(!Kc[w])throw new de("Unknown accent ' "+w+"'",n);var b=Kc[w][this.mode]||Kc[w].text;if(!b)throw new de("Accent "+w+" unsupported in "+this.mode+" mode",n);s={type:"accent",mode:this.mode,loc:Rt.range(n),label:b,isStretchy:!1,isShifty:!0,base:s}}return s}}T0.endOfExpression=new Set(["}","\\endgroup","\\end","\\right","&"]);var Dh=function(n,t){if(!(typeof n=="string"||n instanceof String))throw new TypeError("KaTeX can only parse string typed expression");var i=new T0(n,t);delete i.gullet.macros.current["\\df@tag"];var l=i.parse();if(delete i.gullet.macros.current["\\current@color"],delete i.gullet.macros.current["\\color"],i.gullet.macros.get("\\df@tag")){if(!t.displayMode)throw new de("\\tag works only in display equations");l=[{type:"tag",mode:"text",body:l,tag:i.subparse([new Yt("\\df@tag")])}]}return l},Z4=function(n,t,i){t.textContent="";var l=Ch(n,i).toNode();t.appendChild(l)};typeof document<"u"&&document.compatMode!=="CSS1Compat"&&(typeof console<"u"&&console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."),Z4=function(){throw new de("KaTeX doesn't work in quirks mode.")});var _C=function(n,t){var i=Ch(n,t).toMarkup();return i},MC=function(n,t){var i=new oh(t);return Dh(n,i)},e5=function(n,t,i){if(i.throwOnError||!(n instanceof de))throw n;var l=he(["katex-error"],[new hr(t)]);return l.setAttribute("title",n.toString()),l.setAttribute("style","color:"+i.errorColor),l},Ch=function(n,t){var i=new oh(t);try{var l=Dh(n,i);return ID(l,n,i)}catch(o){return e5(o,n,i)}},EC=function(n,t){var i=new oh(t);try{var l=Dh(n,i);return jD(l,n,i)}catch(o){return e5(o,n,i)}},TC="0.16.33",zC={Span:Eo,Anchor:ch,SymbolNode:hr,SvgNode:ai,PathNode:Bi,LineNode:g1},og={version:TC,render:Z4,renderToString:_C,ParseError:de,SETTINGS_SCHEMA:e0,__parse:MC,__renderToDomTree:Ch,__renderToHTMLTree:EC,__setFontMetrics:pD,__defineSymbol:v,__defineFunction:Se,__defineMacro:C,__domTree:zC};const AC={};function PC(e){const n=this,t=e||AC,i=n.data(),l=i.micromarkExtensions||(i.micromarkExtensions=[]),o=i.fromMarkdownExtensions||(i.fromMarkdownExtensions=[]),s=i.toMarkdownExtensions||(i.toMarkdownExtensions=[]);l.push(HS(t)),o.push(JS()),s.push(RS(t))}const sg=/[#.]/g;function NC(e,n){const t=e||"",i={};let l=0,o,s;for(;l<t.length;){sg.lastIndex=l;const c=sg.exec(t),h=t.slice(l,c?c.index:t.length);h&&(o?o==="#"?i.id=h:Array.isArray(i.className)?i.className.push(h):i.className=[h]:s=h,l+=h.length),c&&(o=c[0],l++)}return{type:"element",tagName:s||n||"div",properties:i,children:[]}}function n5(e,n,t){const i=t?IC(t):void 0;function l(o,s,...c){let h;if(o==null){h={type:"root",children:[]};const p=s;c.unshift(p)}else{h=NC(o,n);const p=h.tagName.toLowerCase(),f=i?i.get(p):void 0;if(h.tagName=f||p,LC(s))c.unshift(s);else for(const[d,w]of Object.entries(s))JC(e,h.properties,d,w)}for(const p of c)C1(h.children,p);return h.type==="element"&&h.tagName==="template"&&(h.content={type:"root",children:h.children},h.children=[]),h}return l}function LC(e){if(e===null||typeof e!="object"||Array.isArray(e))return!0;if(typeof e.type!="string")return!1;const n=e,t=Object.keys(e);for(const i of t){const l=n[i];if(l&&typeof l=="object"){if(!Array.isArray(l))return!0;const o=l;for(const s of o)if(typeof s!="number"&&typeof s!="string")return!0}}return!!("children"in e&&Array.isArray(e.children))}function JC(e,n,t,i){const l=i2(e,t);let o;if(i!=null){if(typeof i=="number"){if(Number.isNaN(i))return;o=i}else typeof i=="boolean"?o=i:typeof i=="string"?l.spaceSeparated?o=Fd(i):l.commaSeparated?o=Ld(i):l.commaOrSpaceSeparated?o=Fd(Ld(i).join(" ")):o=ug(l,l.property,i):Array.isArray(i)?o=[...i]:o=l.property==="style"?RC(i):String(i);if(Array.isArray(o)){const s=[];for(const c of o)s.push(ug(l,l.property,c));o=s}l.property==="className"&&Array.isArray(n.className)&&(o=n.className.concat(o)),n[l.property]=o}}function C1(e,n){if(n!=null)if(typeof n=="number"||typeof n=="string")e.push({type:"text",value:String(n)});else if(Array.isArray(n))for(const t of n)C1(e,t);else if(typeof n=="object"&&"type"in n)n.type==="root"?C1(e,n.children):e.push(n);else throw new Error("Expected node, nodes, or string, got `"+n+"`")}function ug(e,n,t){if(typeof t=="string"){if(e.number&&t&&!Number.isNaN(Number(t)))return Number(t);if((e.boolean||e.overloadedBoolean)&&(t===""||mo(t)===mo(n)))return!0}return t}function RC(e){const n=[];for(const[t,i]of Object.entries(e))n.push([t,i].join(": "));return n.join("; ")}function IC(e){const n=new Map;for(const t of e)n.set(t.toLowerCase(),t);return n}const jC=["altGlyph","altGlyphDef","altGlyphItem","animateColor","animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","glyphRef","linearGradient","radialGradient","solidColor","textArea","textPath"],FC=n5(a2,"div"),OC=n5(f0,"g",jC),Zc={html:"http://www.w3.org/1999/xhtml",svg:"http://www.w3.org/2000/svg"};function BC(e,n){return t5(e,{})||{type:"root",children:[]}}function t5(e,n){const t=$C(e,n);return t&&n.afterTransform&&n.afterTransform(e,t),t}function $C(e,n){switch(e.nodeType){case 1:return VC(e,n);case 3:return qC(e);case 8:return UC(e);case 9:return cg(e,n);case 10:return HC();case 11:return cg(e,n);default:return}}function cg(e,n){return{type:"root",children:r5(e,n)}}function HC(){return{type:"doctype"}}function qC(e){return{type:"text",value:e.nodeValue||""}}function UC(e){return{type:"comment",value:e.nodeValue||""}}function VC(e,n){const t=e.namespaceURI,i=t===Zc.svg?OC:FC,l=t===Zc.html?e.tagName.toLowerCase():e.tagName,o=t===Zc.html&&l==="template"?e.content:e,s=e.getAttributeNames(),c={};let h=-1;for(;++h<s.length;)c[s[h]]=e.getAttribute(s[h])||"";return i(l,c,r5(o,n))}function r5(e,n){const t=e.childNodes,i=[];let l=-1;for(;++l<t.length;){const o=t5(t[l],n);o!==void 0&&i.push(o)}return i}new DOMParser;function WC(e,n){const t=GC(e);return BC(t)}function GC(e){const n=document.createElement("template");return n.innerHTML=e,n.content}const hg=(function(e,n,t){const i=Co(t);if(!e||!e.type||!e.children)throw new Error("Expected parent node");if(typeof n=="number"){if(n<0||n===Number.POSITIVE_INFINITY)throw new Error("Expected positive finite number as index")}else if(n=e.children.indexOf(n),n<0)throw new Error("Expected child node or index");for(;++n<e.children.length;)if(i(e.children[n],n,e))return e.children[n]}),xa=(function(e){if(e==null)return QC;if(typeof e=="string")return YC(e);if(typeof e=="object")return XC(e);if(typeof e=="function")return _h(e);throw new Error("Expected function, string, or array as `test`")});function XC(e){const n=[];let t=-1;for(;++t<e.length;)n[t]=xa(e[t]);return _h(i);function i(...l){let o=-1;for(;++o<n.length;)if(n[o].apply(this,l))return!0;return!1}}function YC(e){return _h(n);function n(t){return t.tagName===e}}function _h(e){return n;function n(t,i,l){return!!(KC(t)&&e.call(this,t,typeof i=="number"?i:void 0,l||void 0))}}function QC(e){return!!(e&&typeof e=="object"&&"type"in e&&e.type==="element"&&"tagName"in e&&typeof e.tagName=="string")}function KC(e){return e!==null&&typeof e=="object"&&"type"in e&&"tagName"in e}const mg=/\n/g,pg=/[\t ]+/g,_1=xa("br"),dg=xa(l_),ZC=xa("p"),fg=xa("tr"),e_=xa(["datalist","head","noembed","noframes","noscript","rp","script","style","template","title",a_,o_]),i5=xa(["address","article","aside","blockquote","body","caption","center","dd","dialog","dir","dl","dt","div","figure","figcaption","footer","form,","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","legend","li","listing","main","menu","nav","ol","p","plaintext","pre","section","ul","xmp"]);function n_(e,n){const t=n||{},i="children"in e?e.children:[],l=i5(e),o=o5(e,{whitespace:t.whitespace||"normal"}),s=[];(e.type==="text"||e.type==="comment")&&s.push(...l5(e,{breakBefore:!0,breakAfter:!0}));let c=-1;for(;++c<i.length;)s.push(...a5(i[c],e,{whitespace:o,breakBefore:c?void 0:l,breakAfter:c<i.length-1?_1(i[c+1]):l}));const h=[];let p;for(c=-1;++c<s.length;){const f=s[c];typeof f=="number"?p!==void 0&&f>p&&(p=f):f&&(p!==void 0&&p>-1&&h.push(`
`.repeat(p)||" "),p=-1,h.push(f))}return h.join("")}function a5(e,n,t){return e.type==="element"?t_(e,n,t):e.type==="text"?t.whitespace==="normal"?l5(e,t):r_(e):[]}function t_(e,n,t){const i=o5(e,t),l=e.children||[];let o=-1,s=[];if(e_(e))return s;let c,h;for(_1(e)||fg(e)&&hg(n,e,fg)?h=`
`:ZC(e)?(c=2,h=2):i5(e)&&(c=1,h=1);++o<l.length;)s=s.concat(a5(l[o],e,{whitespace:i,breakBefore:o?void 0:c,breakAfter:o<l.length-1?_1(l[o+1]):h}));return dg(e)&&hg(n,e,dg)&&s.push("	"),c&&s.unshift(c),h&&s.push(h),s}function l5(e,n){const t=String(e.value),i=[],l=[];let o=0;for(;o<=t.length;){mg.lastIndex=o;const h=mg.exec(t),p=h&&"index"in h?h.index:t.length;i.push(i_(t.slice(o,p).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g,""),o===0?n.breakBefore:!0,p===t.length?n.breakAfter:!0)),o=p+1}let s=-1,c;for(;++s<i.length;)i[s].charCodeAt(i[s].length-1)===8203||s<i.length-1&&i[s+1].charCodeAt(0)===8203?(l.push(i[s]),c=void 0):i[s]?(typeof c=="number"&&l.push(c),l.push(i[s]),c=0):(s===0||s===i.length-1)&&l.push(0);return l}function r_(e){return[String(e.value)]}function i_(e,n,t){const i=[];let l=0,o;for(;l<e.length;){pg.lastIndex=l;const s=pg.exec(e);o=s?s.index:e.length,!l&&!o&&s&&!n&&i.push(""),l!==o&&i.push(e.slice(l,o)),l=s?o+s[0].length:o}return l!==o&&!t&&i.push(""),i.join(" ")}function o5(e,n){if(e.type==="element"){const t=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return t.wrap?"pre-wrap":"pre";case"td":case"th":return t.noWrap?"nowrap":n.whitespace;case"textarea":return"pre-wrap"}}return n.whitespace}function a_(e){return!!(e.properties||{}).hidden}function l_(e){return e.tagName==="td"||e.tagName==="th"}function o_(e){return e.tagName==="dialog"&&!(e.properties||{}).open}const s_={},u_=[];function c_(e){const n=e||s_;return function(t,i){eh(t,"element",function(l,o){const s=Array.isArray(l.properties.className)?l.properties.className:u_,c=s.includes("language-math"),h=s.includes("math-display"),p=s.includes("math-inline");let f=h;if(!c&&!h&&!p)return;let d=o[o.length-1],w=l;if(l.tagName==="code"&&c&&d&&d.type==="element"&&d.tagName==="pre"&&(w=d,d=o[o.length-2],f=!0),!d)return;const b=n_(w,{whitespace:"pre"});let D;try{D=og.renderToString(b,{...n,displayMode:f,throwOnError:!0})}catch(T){const E=T,z=E.name.toLowerCase();i.message("Could not render math with KaTeX",{ancestors:[...o,l],cause:E,place:l.position,ruleId:z,source:"rehype-katex"});try{D=og.renderToString(b,{...n,displayMode:f,strict:"ignore",throwOnError:!1})}catch{D=[{type:"element",tagName:"span",properties:{className:["katex-error"],style:"color:"+(n.errorColor||"#cc0000"),title:String(T)},children:[{type:"text",value:b}]}]}}typeof D=="string"&&(D=WC(D).children);const _=d.children.indexOf(w);return d.children.splice(_,1,...D),P2})}}function h_(){const{slug:e}=w7(),n=e?h8(e):void 0;return n?R.jsxs("div",{className:"min-h-screen bg-white text-black",children:[R.jsx("header",{className:"border-b-4 border-black",children:R.jsx("div",{className:"max-w-4xl mx-auto px-6 py-6",children:R.jsxs(ur,{to:"/blog",className:"inline-flex items-center gap-2 hover:opacity-60 transition-opacity",children:[R.jsx(d0,{className:"w-5 h-5"}),R.jsx("span",{className:"uppercase tracking-wider text-sm font-medium",children:"返回博客"})]})})}),R.jsxs("article",{className:"max-w-4xl mx-auto px-6 py-12",children:[R.jsxs("header",{className:"mb-12 pb-8 border-b-2 border-black",children:[R.jsx("h1",{className:"text-5xl font-bold uppercase tracking-tight mb-6",children:n.metadata.title}),R.jsxs("div",{className:"flex flex-wrap items-center gap-6 text-sm",children:[R.jsxs("div",{className:"flex items-center gap-2 opacity-60",children:[R.jsx(Gg,{className:"w-4 h-4"}),R.jsx("time",{dateTime:n.metadata.date,children:new Date(n.metadata.date).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"})})]}),n.metadata.author&&R.jsxs("div",{className:"flex items-center gap-2 opacity-60",children:[R.jsx(Xv,{className:"w-4 h-4"}),R.jsx("span",{children:n.metadata.author})]}),n.metadata.tags&&n.metadata.tags.length>0&&R.jsxs("div",{className:"flex items-center gap-2",children:[R.jsx(Xg,{className:"w-4 h-4 opacity-60"}),R.jsx("div",{className:"flex gap-2",children:n.metadata.tags.map(t=>R.jsx("span",{className:"border border-black px-3 py-1 text-xs uppercase font-medium hover:bg-black hover:text-white transition-colors",children:t},t))})]})]})]}),R.jsx("div",{className:"prose prose-lg max-w-none",children:R.jsx(L2,{remarkPlugins:[a4,PC],rehypePlugins:[c_],components:{h2:({children:t})=>R.jsx("h2",{className:"text-3xl font-bold uppercase tracking-tight mt-12 mb-6 pb-3 border-b-2 border-black",children:t}),h3:({children:t})=>R.jsx("h3",{className:"text-2xl font-bold uppercase tracking-tight mt-8 mb-4",children:t}),h4:({children:t})=>R.jsx("h4",{className:"text-xl font-bold uppercase tracking-tight mt-6 mb-3",children:t}),p:({children:t})=>R.jsx("p",{className:"mb-6 leading-relaxed text-lg opacity-90",children:t}),ul:({children:t})=>R.jsx("ul",{className:"mb-6 space-y-2 list-none",children:t}),ol:({children:t})=>R.jsx("ol",{className:"mb-6 space-y-2 list-decimal list-inside",children:t}),li:({children:t})=>R.jsxs("li",{className:"flex items-start gap-3",children:[R.jsx("span",{className:"inline-block w-2 h-2 bg-black mt-2.5 flex-shrink-0"}),R.jsx("span",{className:"flex-1",children:t})]}),code:({className:t,children:i,...l})=>t?R.jsx("code",{className:t,...l,children:i}):R.jsx("code",{className:"bg-gray-100 border border-black px-2 py-1 text-sm font-mono",...l,children:i}),pre:({children:t})=>R.jsx("pre",{className:"bg-gray-50 border-2 border-black p-6 overflow-x-auto mb-6 font-mono text-sm",children:t}),blockquote:({children:t})=>R.jsx("blockquote",{className:"border-l-4 border-black pl-6 my-6 italic opacity-80",children:t}),a:({href:t,children:i})=>R.jsx("a",{href:t,className:"border-b-2 border-black hover:bg-black hover:text-white transition-colors",children:i})},children:n.content})})]}),R.jsx("footer",{className:"border-t-2 border-black mt-12",children:R.jsx("div",{className:"max-w-4xl mx-auto px-6 py-8 text-center",children:R.jsx("p",{className:"text-sm uppercase tracking-wider opacity-60",children:"© 2026 技术博客"})})})]}):R.jsx("div",{className:"min-h-screen bg-white text-black flex items-center justify-center",children:R.jsxs("div",{className:"text-center",children:[R.jsx("h1",{className:"text-4xl font-bold mb-4",children:"文章未找到"}),R.jsx(ur,{to:"/blog",className:"border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-colors",children:"返回博客列表"})]})})}const m_=mv([{path:"/",Component:m8},{path:"/visualspt",Component:d8},{path:"/focus-timer",Component:f8},{path:"/blog",Component:LS},{path:"/blog/:slug",Component:h_}],{basename:"/"});function p_(){return R.jsx(F7,{router:m_})}K3.createRoot(document.getElementById("root")).render(R.jsx(p_,{}));
