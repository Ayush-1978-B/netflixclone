function Ww(n,t){for(var r=0;r<t.length;r++){const s=t[r];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in n)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(n,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=r(l);fetch(l.href,u)}})();function Zw(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ad={exports:{}},_s={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cv;function Jw(){if(Cv)return _s;Cv=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function r(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:n,type:s,key:f,ref:l!==void 0?l:null,props:u}}return _s.Fragment=t,_s.jsx=r,_s.jsxs=r,_s}var Rv;function e_(){return Rv||(Rv=1,ad.exports=Jw()),ad.exports}var y=e_(),sd={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dv;function t_(){if(Dv)return ce;Dv=1;var n=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),b=Symbol.iterator;function x(_){return _===null||typeof _!="object"?null:(_=b&&_[b]||_["@@iterator"],typeof _=="function"?_:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,j={};function k(_,q,Q){this.props=_,this.context=q,this.refs=j,this.updater=Q||w}k.prototype.isReactComponent={},k.prototype.setState=function(_,q){if(typeof _!="object"&&typeof _!="function"&&_!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,_,q,"setState")},k.prototype.forceUpdate=function(_){this.updater.enqueueForceUpdate(this,_,"forceUpdate")};function z(){}z.prototype=k.prototype;function N(_,q,Q){this.props=_,this.context=q,this.refs=j,this.updater=Q||w}var P=N.prototype=new z;P.constructor=N,D(P,k.prototype),P.isPureReactComponent=!0;var Y=Array.isArray,I={H:null,A:null,T:null,S:null,V:null},K=Object.prototype.hasOwnProperty;function X(_,q,Q,$,te,me){return Q=me.ref,{$$typeof:n,type:_,key:q,ref:Q!==void 0?Q:null,props:me}}function W(_,q){return X(_.type,q,void 0,void 0,void 0,_.props)}function he(_){return typeof _=="object"&&_!==null&&_.$$typeof===n}function ke(_){var q={"=":"=0",":":"=2"};return"$"+_.replace(/[=:]/g,function(Q){return q[Q]})}var Xe=/\/+/g;function ue(_,q){return typeof _=="object"&&_!==null&&_.key!=null?ke(""+_.key):q.toString(36)}function Te(){}function Ue(_){switch(_.status){case"fulfilled":return _.value;case"rejected":throw _.reason;default:switch(typeof _.status=="string"?_.then(Te,Te):(_.status="pending",_.then(function(q){_.status==="pending"&&(_.status="fulfilled",_.value=q)},function(q){_.status==="pending"&&(_.status="rejected",_.reason=q)})),_.status){case"fulfilled":return _.value;case"rejected":throw _.reason}}throw _}function Ve(_,q,Q,$,te){var me=typeof _;(me==="undefined"||me==="boolean")&&(_=null);var ie=!1;if(_===null)ie=!0;else switch(me){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(_.$$typeof){case n:case t:ie=!0;break;case v:return ie=_._init,Ve(ie(_._payload),q,Q,$,te)}}if(ie)return te=te(_),ie=$===""?"."+ue(_,0):$,Y(te)?(Q="",ie!=null&&(Q=ie.replace(Xe,"$&/")+"/"),Ve(te,q,Q,"",function(dt){return dt})):te!=null&&(he(te)&&(te=W(te,Q+(te.key==null||_&&_.key===te.key?"":(""+te.key).replace(Xe,"$&/")+"/")+ie)),q.push(te)),1;ie=0;var tt=$===""?".":$+":";if(Y(_))for(var we=0;we<_.length;we++)$=_[we],me=tt+ue($,we),ie+=Ve($,q,Q,me,te);else if(we=x(_),typeof we=="function")for(_=we.call(_),we=0;!($=_.next()).done;)$=$.value,me=tt+ue($,we++),ie+=Ve($,q,Q,me,te);else if(me==="object"){if(typeof _.then=="function")return Ve(Ue(_),q,Q,$,te);throw q=String(_),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(_).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return ie}function B(_,q,Q){if(_==null)return _;var $=[],te=0;return Ve(_,$,"","",function(me){return q.call(Q,me,te++)}),$}function F(_){if(_._status===-1){var q=_._result;q=q(),q.then(function(Q){(_._status===0||_._status===-1)&&(_._status=1,_._result=Q)},function(Q){(_._status===0||_._status===-1)&&(_._status=2,_._result=Q)}),_._status===-1&&(_._status=0,_._result=q)}if(_._status===1)return _._result.default;throw _._result}var J=typeof reportError=="function"?reportError:function(_){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof _=="object"&&_!==null&&typeof _.message=="string"?String(_.message):String(_),error:_});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",_);return}console.error(_)};function le(){}return ce.Children={map:B,forEach:function(_,q,Q){B(_,function(){q.apply(this,arguments)},Q)},count:function(_){var q=0;return B(_,function(){q++}),q},toArray:function(_){return B(_,function(q){return q})||[]},only:function(_){if(!he(_))throw Error("React.Children.only expected to receive a single React element child.");return _}},ce.Component=k,ce.Fragment=r,ce.Profiler=l,ce.PureComponent=N,ce.StrictMode=s,ce.Suspense=h,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ce.__COMPILER_RUNTIME={__proto__:null,c:function(_){return I.H.useMemoCache(_)}},ce.cache=function(_){return function(){return _.apply(null,arguments)}},ce.cloneElement=function(_,q,Q){if(_==null)throw Error("The argument must be a React element, but you passed "+_+".");var $=D({},_.props),te=_.key,me=void 0;if(q!=null)for(ie in q.ref!==void 0&&(me=void 0),q.key!==void 0&&(te=""+q.key),q)!K.call(q,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&q.ref===void 0||($[ie]=q[ie]);var ie=arguments.length-2;if(ie===1)$.children=Q;else if(1<ie){for(var tt=Array(ie),we=0;we<ie;we++)tt[we]=arguments[we+2];$.children=tt}return X(_.type,te,void 0,void 0,me,$)},ce.createContext=function(_){return _={$$typeof:f,_currentValue:_,_currentValue2:_,_threadCount:0,Provider:null,Consumer:null},_.Provider=_,_.Consumer={$$typeof:u,_context:_},_},ce.createElement=function(_,q,Q){var $,te={},me=null;if(q!=null)for($ in q.key!==void 0&&(me=""+q.key),q)K.call(q,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(te[$]=q[$]);var ie=arguments.length-2;if(ie===1)te.children=Q;else if(1<ie){for(var tt=Array(ie),we=0;we<ie;we++)tt[we]=arguments[we+2];te.children=tt}if(_&&_.defaultProps)for($ in ie=_.defaultProps,ie)te[$]===void 0&&(te[$]=ie[$]);return X(_,me,void 0,void 0,null,te)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(_){return{$$typeof:p,render:_}},ce.isValidElement=he,ce.lazy=function(_){return{$$typeof:v,_payload:{_status:-1,_result:_},_init:F}},ce.memo=function(_,q){return{$$typeof:m,type:_,compare:q===void 0?null:q}},ce.startTransition=function(_){var q=I.T,Q={};I.T=Q;try{var $=_(),te=I.S;te!==null&&te(Q,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(le,J)}catch(me){J(me)}finally{I.T=q}},ce.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ce.use=function(_){return I.H.use(_)},ce.useActionState=function(_,q,Q){return I.H.useActionState(_,q,Q)},ce.useCallback=function(_,q){return I.H.useCallback(_,q)},ce.useContext=function(_){return I.H.useContext(_)},ce.useDebugValue=function(){},ce.useDeferredValue=function(_,q){return I.H.useDeferredValue(_,q)},ce.useEffect=function(_,q,Q){var $=I.H;if(typeof Q=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return $.useEffect(_,q)},ce.useId=function(){return I.H.useId()},ce.useImperativeHandle=function(_,q,Q){return I.H.useImperativeHandle(_,q,Q)},ce.useInsertionEffect=function(_,q){return I.H.useInsertionEffect(_,q)},ce.useLayoutEffect=function(_,q){return I.H.useLayoutEffect(_,q)},ce.useMemo=function(_,q){return I.H.useMemo(_,q)},ce.useOptimistic=function(_,q){return I.H.useOptimistic(_,q)},ce.useReducer=function(_,q,Q){return I.H.useReducer(_,q,Q)},ce.useRef=function(_){return I.H.useRef(_)},ce.useState=function(_){return I.H.useState(_)},ce.useSyncExternalStore=function(_,q,Q){return I.H.useSyncExternalStore(_,q,Q)},ce.useTransition=function(){return I.H.useTransition()},ce.version="19.1.0",ce}var Mv;function jh(){return Mv||(Mv=1,sd.exports=t_()),sd.exports}var A=jh();const ft=Zw(A),n_=Ww({__proto__:null,default:ft},[A]);var od={exports:{}},Es={},ld={exports:{}},cd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function i_(){return Ov||(Ov=1,function(n){function t(B,F){var J=B.length;B.push(F);e:for(;0<J;){var le=J-1>>>1,_=B[le];if(0<l(_,F))B[le]=F,B[J]=_,J=le;else break e}}function r(B){return B.length===0?null:B[0]}function s(B){if(B.length===0)return null;var F=B[0],J=B.pop();if(J!==F){B[0]=J;e:for(var le=0,_=B.length,q=_>>>1;le<q;){var Q=2*(le+1)-1,$=B[Q],te=Q+1,me=B[te];if(0>l($,J))te<_&&0>l(me,$)?(B[le]=me,B[te]=J,le=te):(B[le]=$,B[Q]=J,le=Q);else if(te<_&&0>l(me,J))B[le]=me,B[te]=J,le=te;else break e}}return F}function l(B,F){var J=B.sortIndex-F.sortIndex;return J!==0?J:B.id-F.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;n.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();n.unstable_now=function(){return f.now()-p}}var h=[],m=[],v=1,b=null,x=3,w=!1,D=!1,j=!1,k=!1,z=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function Y(B){for(var F=r(m);F!==null;){if(F.callback===null)s(m);else if(F.startTime<=B)s(m),F.sortIndex=F.expirationTime,t(h,F);else break;F=r(m)}}function I(B){if(j=!1,Y(B),!D)if(r(h)!==null)D=!0,K||(K=!0,ue());else{var F=r(m);F!==null&&Ve(I,F.startTime-B)}}var K=!1,X=-1,W=5,he=-1;function ke(){return k?!0:!(n.unstable_now()-he<W)}function Xe(){if(k=!1,K){var B=n.unstable_now();he=B;var F=!0;try{e:{D=!1,j&&(j=!1,N(X),X=-1),w=!0;var J=x;try{t:{for(Y(B),b=r(h);b!==null&&!(b.expirationTime>B&&ke());){var le=b.callback;if(typeof le=="function"){b.callback=null,x=b.priorityLevel;var _=le(b.expirationTime<=B);if(B=n.unstable_now(),typeof _=="function"){b.callback=_,Y(B),F=!0;break t}b===r(h)&&s(h),Y(B)}else s(h);b=r(h)}if(b!==null)F=!0;else{var q=r(m);q!==null&&Ve(I,q.startTime-B),F=!1}}break e}finally{b=null,x=J,w=!1}F=void 0}}finally{F?ue():K=!1}}}var ue;if(typeof P=="function")ue=function(){P(Xe)};else if(typeof MessageChannel<"u"){var Te=new MessageChannel,Ue=Te.port2;Te.port1.onmessage=Xe,ue=function(){Ue.postMessage(null)}}else ue=function(){z(Xe,0)};function Ve(B,F){X=z(function(){B(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return x},n.unstable_next=function(B){switch(x){case 1:case 2:case 3:var F=3;break;default:F=x}var J=x;x=F;try{return B()}finally{x=J}},n.unstable_requestPaint=function(){k=!0},n.unstable_runWithPriority=function(B,F){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var J=x;x=B;try{return F()}finally{x=J}},n.unstable_scheduleCallback=function(B,F,J){var le=n.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,B){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=J+_,B={id:v++,callback:F,priorityLevel:B,startTime:J,expirationTime:_,sortIndex:-1},J>le?(B.sortIndex=J,t(m,B),r(h)===null&&B===r(m)&&(j?(N(X),X=-1):j=!0,Ve(I,J-le))):(B.sortIndex=_,t(h,B),D||w||(D=!0,K||(K=!0,ue()))),B},n.unstable_shouldYield=ke,n.unstable_wrapCallback=function(B){var F=x;return function(){var J=x;x=F;try{return B.apply(this,arguments)}finally{x=J}}}}(cd)),cd}var jv;function r_(){return jv||(jv=1,ld.exports=i_()),ld.exports}var ud={exports:{}},mt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv;function a_(){if(kv)return mt;kv=1;var n=jh();function t(h){var m="https://react.dev/errors/"+h;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)m+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+h+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var s={d:{f:r,r:function(){throw Error(t(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(h,m,v){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:""+b,children:h,containerInfo:m,implementation:v}}var f=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(h,m){if(h==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,mt.createPortal=function(h,m){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return u(h,m,null,v)},mt.flushSync=function(h){var m=f.T,v=s.p;try{if(f.T=null,s.p=2,h)return h()}finally{f.T=m,s.p=v,s.d.f()}},mt.preconnect=function(h,m){typeof h=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(h,m))},mt.prefetchDNS=function(h){typeof h=="string"&&s.d.D(h)},mt.preinit=function(h,m){if(typeof h=="string"&&m&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,w=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;v==="style"?s.d.S(h,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:b,integrity:x,fetchPriority:w}):v==="script"&&s.d.X(h,{crossOrigin:b,integrity:x,fetchPriority:w,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},mt.preinitModule=function(h,m){if(typeof h=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var v=p(m.as,m.crossOrigin);s.d.M(h,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(h)},mt.preload=function(h,m){if(typeof h=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var v=m.as,b=p(v,m.crossOrigin);s.d.L(h,v,{crossOrigin:b,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},mt.preloadModule=function(h,m){if(typeof h=="string")if(m){var v=p(m.as,m.crossOrigin);s.d.m(h,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(h)},mt.requestFormReset=function(h){s.d.r(h)},mt.unstable_batchedUpdates=function(h,m){return h(m)},mt.useFormState=function(h,m,v){return f.H.useFormState(h,m,v)},mt.useFormStatus=function(){return f.H.useHostTransitionStatus()},mt.version="19.1.0",mt}var Nv;function vb(){if(Nv)return ud.exports;Nv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),ud.exports=a_(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lv;function s_(){if(Lv)return Es;Lv=1;var n=r_(),t=jh(),r=vb();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function h(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var c=a.return;if(c===null)break;var d=c.alternate;if(d===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===d.child){for(d=c.child;d;){if(d===a)return p(c),e;if(d===o)return p(c),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=d;else{for(var g=!1,S=c.child;S;){if(S===a){g=!0,a=c,o=d;break}if(S===o){g=!0,o=c,a=d;break}S=S.sibling}if(!g){for(S=d.child;S;){if(S===a){g=!0,a=d,o=c;break}if(S===o){g=!0,o=d,a=c;break}S=S.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function m(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=m(e),i!==null)return i;e=e.sibling}return null}var v=Object.assign,b=Symbol.for("react.element"),x=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),k=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),N=Symbol.for("react.consumer"),P=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),he=Symbol.for("react.activity"),ke=Symbol.for("react.memo_cache_sentinel"),Xe=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=Xe&&e[Xe]||e["@@iterator"],typeof e=="function"?e:null)}var Te=Symbol.for("react.client.reference");function Ue(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case D:return"Fragment";case k:return"Profiler";case j:return"StrictMode";case I:return"Suspense";case K:return"SuspenseList";case he:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case w:return"Portal";case P:return(e.displayName||"Context")+".Provider";case N:return(e._context.displayName||"Context")+".Consumer";case Y:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return i=e.displayName||null,i!==null?i:Ue(e.type)||"Memo";case W:i=e._payload,e=e._init;try{return Ue(e(i))}catch{}}return null}var Ve=Array.isArray,B=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},le=[],_=-1;function q(e){return{current:e}}function Q(e){0>_||(e.current=le[_],le[_]=null,_--)}function $(e,i){_++,le[_]=e.current,e.current=i}var te=q(null),me=q(null),ie=q(null),tt=q(null);function we(e,i){switch($(ie,i),$(me,e),$(te,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?tv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=tv(i),e=nv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(te),$(te,e)}function dt(){Q(te),Q(me),Q(ie)}function ki(e){e.memoizedState!==null&&$(tt,e);var i=te.current,a=nv(i,e.type);i!==a&&($(me,e),$(te,a))}function yn(e){me.current===e&&(Q(te),Q(me)),tt.current===e&&(Q(tt),bs._currentValue=J)}var It=Object.prototype.hasOwnProperty,Yc=n.unstable_scheduleCallback,Fc=n.unstable_cancelCallback,Dx=n.unstable_shouldYield,Mx=n.unstable_requestPaint,an=n.unstable_now,Ox=n.unstable_getCurrentPriorityLevel,Lp=n.unstable_ImmediatePriority,zp=n.unstable_UserBlockingPriority,vo=n.unstable_NormalPriority,jx=n.unstable_LowPriority,Up=n.unstable_IdlePriority,kx=n.log,Nx=n.unstable_setDisableYieldValue,Ca=null,Ct=null;function Yn(e){if(typeof kx=="function"&&Nx(e),Ct&&typeof Ct.setStrictMode=="function")try{Ct.setStrictMode(Ca,e)}catch{}}var Rt=Math.clz32?Math.clz32:Ux,Lx=Math.log,zx=Math.LN2;function Ux(e){return e>>>=0,e===0?32:31-(Lx(e)/zx|0)|0}var yo=256,bo=4194304;function Ni(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function So(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,d=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var S=o&134217727;return S!==0?(o=S&~d,o!==0?c=Ni(o):(g&=S,g!==0?c=Ni(g):a||(a=S&~e,a!==0&&(c=Ni(a))))):(S=o&~d,S!==0?c=Ni(S):g!==0?c=Ni(g):a||(a=o&~e,a!==0&&(c=Ni(a)))),c===0?0:i!==0&&i!==c&&(i&d)===0&&(d=c&-c,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:c}function Ra(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Px(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pp(){var e=yo;return yo<<=1,(yo&4194048)===0&&(yo=256),e}function Ip(){var e=bo;return bo<<=1,(bo&62914560)===0&&(bo=4194304),e}function Kc(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function Da(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ix(e,i,a,o,c,d){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var S=e.entanglements,T=e.expirationTimes,O=e.hiddenUpdates;for(a=g&~a;0<a;){var V=31-Rt(a),G=1<<V;S[V]=0,T[V]=-1;var L=O[V];if(L!==null)for(O[V]=null,V=0;V<L.length;V++){var U=L[V];U!==null&&(U.lane&=-536870913)}a&=~G}o!==0&&Bp(e,o,0),d!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=d&~(g&~i))}function Bp(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-Rt(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&4194090}function Vp(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-Rt(a),c=1<<o;c&i|e[o]&i&&(e[o]|=i),a&=~c}}function Xc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qc(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Hp(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:xv(e.type))}function Bx(e,i){var a=F.p;try{return F.p=e,i()}finally{F.p=a}}var Fn=Math.random().toString(36).slice(2),ht="__reactFiber$"+Fn,Tt="__reactProps$"+Fn,hr="__reactContainer$"+Fn,$c="__reactEvents$"+Fn,Vx="__reactListeners$"+Fn,Hx="__reactHandles$"+Fn,Gp="__reactResources$"+Fn,Ma="__reactMarker$"+Fn;function Wc(e){delete e[ht],delete e[Tt],delete e[$c],delete e[Vx],delete e[Hx]}function pr(e){var i=e[ht];if(i)return i;for(var a=e.parentNode;a;){if(i=a[hr]||a[ht]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=sv(e);e!==null;){if(a=e[ht])return a;e=sv(e)}return i}e=a,a=e.parentNode}return null}function mr(e){if(e=e[ht]||e[hr]){var i=e.tag;if(i===5||i===6||i===13||i===26||i===27||i===3)return e}return null}function Oa(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function gr(e){var i=e[Gp];return i||(i=e[Gp]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function nt(e){e[Ma]=!0}var qp=new Set,Yp={};function Li(e,i){vr(e,i),vr(e+"Capture",i)}function vr(e,i){for(Yp[e]=i,e=0;e<i.length;e++)qp.add(i[e])}var Gx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fp={},Kp={};function qx(e){return It.call(Kp,e)?!0:It.call(Fp,e)?!1:Gx.test(e)?Kp[e]=!0:(Fp[e]=!0,!1)}function xo(e,i,a){if(qx(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function To(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function bn(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}var Zc,Xp;function yr(e){if(Zc===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);Zc=i&&i[1]||"",Xp=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zc+e+Xp}var Jc=!1;function eu(e,i){if(!e||Jc)return"";Jc=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(U){var L=U}Reflect.construct(e,[],G)}else{try{G.call()}catch(U){L=U}e.call(G.prototype)}}else{try{throw Error()}catch(U){L=U}(G=e())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(U){if(U&&L&&typeof U.stack=="string")return[U.stack,L.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),g=d[0],S=d[1];if(g&&S){var T=g.split(`
`),O=S.split(`
`);for(c=o=0;o<T.length&&!T[o].includes("DetermineComponentFrameRoot");)o++;for(;c<O.length&&!O[c].includes("DetermineComponentFrameRoot");)c++;if(o===T.length||c===O.length)for(o=T.length-1,c=O.length-1;1<=o&&0<=c&&T[o]!==O[c];)c--;for(;1<=o&&0<=c;o--,c--)if(T[o]!==O[c]){if(o!==1||c!==1)do if(o--,c--,0>c||T[o]!==O[c]){var V=`
`+T[o].replace(" at new "," at ");return e.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",e.displayName)),V}while(1<=o&&0<=c);break}}}finally{Jc=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?yr(a):""}function Yx(e){switch(e.tag){case 26:case 27:case 5:return yr(e.type);case 16:return yr("Lazy");case 13:return yr("Suspense");case 19:return yr("SuspenseList");case 0:case 15:return eu(e.type,!1);case 11:return eu(e.type.render,!1);case 1:return eu(e.type,!0);case 31:return yr("Activity");default:return""}}function Qp(e){try{var i="";do i+=Yx(e),e=e.return;while(e);return i}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Bt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $p(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Fx(e){var i=$p(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,i),o=""+e[i];if(!e.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,d=a.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return c.call(this)},set:function(g){o=""+g,d.call(this,g)}}),Object.defineProperty(e,i,{enumerable:a.enumerable}),{getValue:function(){return o},setValue:function(g){o=""+g},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function wo(e){e._valueTracker||(e._valueTracker=Fx(e))}function Wp(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=$p(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function _o(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Kx=/[\n"\\]/g;function Vt(e){return e.replace(Kx,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function tu(e,i,a,o,c,d,g,S){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),i!=null?g==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Bt(i)):e.value!==""+Bt(i)&&(e.value=""+Bt(i)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),i!=null?nu(e,g,Bt(i)):a!=null?nu(e,g,Bt(a)):o!=null&&e.removeAttribute("value"),c==null&&d!=null&&(e.defaultChecked=!!d),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.name=""+Bt(S):e.removeAttribute("name")}function Zp(e,i,a,o,c,d,g,S){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null))return;a=a!=null?""+Bt(a):"",i=i!=null?""+Bt(i):a,S||i===e.value||(e.value=i),e.defaultValue=i}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=S?e.checked:!!o,e.defaultChecked=!!o,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g)}function nu(e,i,a){i==="number"&&_o(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function br(e,i,a,o){if(e=e.options,i){i={};for(var c=0;c<a.length;c++)i["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=i.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Bt(a),i=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}i!==null||e[c].disabled||(i=e[c])}i!==null&&(i.selected=!0)}}function Jp(e,i,a){if(i!=null&&(i=""+Bt(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Bt(a):""}function em(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(Ve(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Bt(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o)}function Sr(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tm(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Xx.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function nm(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in i)o=i[c],i.hasOwnProperty(c)&&a[c]!==o&&tm(e,c,o)}else for(var d in i)i.hasOwnProperty(d)&&tm(e,d,i[d])}function iu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),$x=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Eo(e){return $x.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var ru=null;function au(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xr=null,Tr=null;function im(e){var i=mr(e);if(i&&(e=i.stateNode)){var a=e[Tt]||null;e:switch(e=i.stateNode,i.type){case"input":if(tu(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Vt(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var c=o[Tt]||null;if(!c)throw Error(s(90));tu(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Wp(o)}break e;case"textarea":Jp(e,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&br(e,!!a.multiple,i,!1)}}}var su=!1;function rm(e,i,a){if(su)return e(i,a);su=!0;try{var o=e(i);return o}finally{if(su=!1,(xr!==null||Tr!==null)&&(ul(),xr&&(i=xr,e=Tr,Tr=xr=null,im(i),e)))for(i=0;i<e.length;i++)im(e[i])}}function ja(e,i){var a=e.stateNode;if(a===null)return null;var o=a[Tt]||null;if(o===null)return null;a=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ou=!1;if(Sn)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){ou=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{ou=!1}var Kn=null,lu=null,Ao=null;function am(){if(Ao)return Ao;var e,i=lu,a=i.length,o,c="value"in Kn?Kn.value:Kn.textContent,d=c.length;for(e=0;e<a&&i[e]===c[e];e++);var g=a-e;for(o=1;o<=g&&i[a-o]===c[d-o];o++);return Ao=c.slice(e,1<o?1-o:void 0)}function Co(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Ro(){return!0}function sm(){return!1}function wt(e){function i(a,o,c,d,g){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=d,this.target=g,this.currentTarget=null;for(var S in e)e.hasOwnProperty(S)&&(a=e[S],this[S]=a?a(d):d[S]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ro:sm,this.isPropagationStopped=sm,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var zi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Do=wt(zi),Na=v({},zi,{view:0,detail:0}),Wx=wt(Na),cu,uu,La,Mo=v({},Na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:du,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==La&&(La&&e.type==="mousemove"?(cu=e.screenX-La.screenX,uu=e.screenY-La.screenY):uu=cu=0,La=e),cu)},movementY:function(e){return"movementY"in e?e.movementY:uu}}),om=wt(Mo),Zx=v({},Mo,{dataTransfer:0}),Jx=wt(Zx),eT=v({},Na,{relatedTarget:0}),fu=wt(eT),tT=v({},zi,{animationName:0,elapsedTime:0,pseudoElement:0}),nT=wt(tT),iT=v({},zi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),rT=wt(iT),aT=v({},zi,{data:0}),lm=wt(aT),sT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},oT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function cT(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=lT[e])?!!i[e]:!1}function du(){return cT}var uT=v({},Na,{key:function(e){if(e.key){var i=sT[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?oT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:du,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fT=wt(uT),dT=v({},Mo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cm=wt(dT),hT=v({},Na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:du}),pT=wt(hT),mT=v({},zi,{propertyName:0,elapsedTime:0,pseudoElement:0}),gT=wt(mT),vT=v({},Mo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yT=wt(vT),bT=v({},zi,{newState:0,oldState:0}),ST=wt(bT),xT=[9,13,27,32],hu=Sn&&"CompositionEvent"in window,za=null;Sn&&"documentMode"in document&&(za=document.documentMode);var TT=Sn&&"TextEvent"in window&&!za,um=Sn&&(!hu||za&&8<za&&11>=za),fm=" ",dm=!1;function hm(e,i){switch(e){case"keyup":return xT.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wr=!1;function wT(e,i){switch(e){case"compositionend":return pm(i);case"keypress":return i.which!==32?null:(dm=!0,fm);case"textInput":return e=i.data,e===fm&&dm?null:e;default:return null}}function _T(e,i){if(wr)return e==="compositionend"||!hu&&hm(e,i)?(e=am(),Ao=lu=Kn=null,wr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return um&&i.locale!=="ko"?null:i.data;default:return null}}var ET={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mm(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!ET[e.type]:i==="textarea"}function gm(e,i,a,o){xr?Tr?Tr.push(o):Tr=[o]:xr=o,i=gl(i,"onChange"),0<i.length&&(a=new Do("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Ua=null,Pa=null;function AT(e){$0(e,0)}function Oo(e){var i=Oa(e);if(Wp(i))return e}function vm(e,i){if(e==="change")return i}var ym=!1;if(Sn){var pu;if(Sn){var mu="oninput"in document;if(!mu){var bm=document.createElement("div");bm.setAttribute("oninput","return;"),mu=typeof bm.oninput=="function"}pu=mu}else pu=!1;ym=pu&&(!document.documentMode||9<document.documentMode)}function Sm(){Ua&&(Ua.detachEvent("onpropertychange",xm),Pa=Ua=null)}function xm(e){if(e.propertyName==="value"&&Oo(Pa)){var i=[];gm(i,Pa,e,au(e)),rm(AT,i)}}function CT(e,i,a){e==="focusin"?(Sm(),Ua=i,Pa=a,Ua.attachEvent("onpropertychange",xm)):e==="focusout"&&Sm()}function RT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Oo(Pa)}function DT(e,i){if(e==="click")return Oo(i)}function MT(e,i){if(e==="input"||e==="change")return Oo(i)}function OT(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var Dt=typeof Object.is=="function"?Object.is:OT;function Ia(e,i){if(Dt(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!It.call(i,c)||!Dt(e[c],i[c]))return!1}return!0}function Tm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wm(e,i){var a=Tm(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tm(a)}}function _m(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?_m(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Em(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=_o(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=_o(e.document)}return i}function gu(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var jT=Sn&&"documentMode"in document&&11>=document.documentMode,_r=null,vu=null,Ba=null,yu=!1;function Am(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;yu||_r==null||_r!==_o(o)||(o=_r,"selectionStart"in o&&gu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ba&&Ia(Ba,o)||(Ba=o,o=gl(vu,"onSelect"),0<o.length&&(i=new Do("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=_r)))}function Ui(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Er={animationend:Ui("Animation","AnimationEnd"),animationiteration:Ui("Animation","AnimationIteration"),animationstart:Ui("Animation","AnimationStart"),transitionrun:Ui("Transition","TransitionRun"),transitionstart:Ui("Transition","TransitionStart"),transitioncancel:Ui("Transition","TransitionCancel"),transitionend:Ui("Transition","TransitionEnd")},bu={},Cm={};Sn&&(Cm=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function Pi(e){if(bu[e])return bu[e];if(!Er[e])return e;var i=Er[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in Cm)return bu[e]=i[a];return e}var Rm=Pi("animationend"),Dm=Pi("animationiteration"),Mm=Pi("animationstart"),kT=Pi("transitionrun"),NT=Pi("transitionstart"),LT=Pi("transitioncancel"),Om=Pi("transitionend"),jm=new Map,Su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Su.push("scrollEnd");function Zt(e,i){jm.set(e,i),Li(i,[e])}var km=new WeakMap;function Ht(e,i){if(typeof e=="object"&&e!==null){var a=km.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Qp(i)},km.set(e,i),i)}return{value:e,source:i,stack:Qp(i)}}var Gt=[],Ar=0,xu=0;function jo(){for(var e=Ar,i=xu=Ar=0;i<e;){var a=Gt[i];Gt[i++]=null;var o=Gt[i];Gt[i++]=null;var c=Gt[i];Gt[i++]=null;var d=Gt[i];if(Gt[i++]=null,o!==null&&c!==null){var g=o.pending;g===null?c.next=c:(c.next=g.next,g.next=c),o.pending=c}d!==0&&Nm(a,c,d)}}function ko(e,i,a,o){Gt[Ar++]=e,Gt[Ar++]=i,Gt[Ar++]=a,Gt[Ar++]=o,xu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Tu(e,i,a,o){return ko(e,i,a,o),No(e)}function Cr(e,i){return ko(e,null,null,i),No(e)}function Nm(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(c=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,c&&i!==null&&(c=31-Rt(a),e=d.hiddenUpdates,o=e[c],o===null?e[c]=[i]:o.push(i),i.lane=a|536870912),d):null}function No(e){if(50<fs)throw fs=0,Df=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Rr={};function zT(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Mt(e,i,a,o){return new zT(e,i,a,o)}function wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function xn(e,i){var a=e.alternate;return a===null?(a=Mt(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lm(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Lo(e,i,a,o,c,d){var g=0;if(o=e,typeof e=="function")wu(e)&&(g=1);else if(typeof e=="string")g=Pw(e,a,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case he:return e=Mt(31,a,i,c),e.elementType=he,e.lanes=d,e;case D:return Ii(a.children,c,d,i);case j:g=8,c|=24;break;case k:return e=Mt(12,a,i,c|2),e.elementType=k,e.lanes=d,e;case I:return e=Mt(13,a,i,c),e.elementType=I,e.lanes=d,e;case K:return e=Mt(19,a,i,c),e.elementType=K,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case z:case P:g=10;break e;case N:g=9;break e;case Y:g=11;break e;case X:g=14;break e;case W:g=16,o=null;break e}g=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=Mt(g,a,i,c),i.elementType=e,i.type=o,i.lanes=d,i}function Ii(e,i,a,o){return e=Mt(7,e,o,i),e.lanes=a,e}function _u(e,i,a){return e=Mt(6,e,null,i),e.lanes=a,e}function Eu(e,i,a){return i=Mt(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Dr=[],Mr=0,zo=null,Uo=0,qt=[],Yt=0,Bi=null,Tn=1,wn="";function Vi(e,i){Dr[Mr++]=Uo,Dr[Mr++]=zo,zo=e,Uo=i}function zm(e,i,a){qt[Yt++]=Tn,qt[Yt++]=wn,qt[Yt++]=Bi,Bi=e;var o=Tn;e=wn;var c=32-Rt(o)-1;o&=~(1<<c),a+=1;var d=32-Rt(i)+c;if(30<d){var g=c-c%5;d=(o&(1<<g)-1).toString(32),o>>=g,c-=g,Tn=1<<32-Rt(i)+c|a<<c|o,wn=d+e}else Tn=1<<d|a<<c|o,wn=e}function Au(e){e.return!==null&&(Vi(e,1),zm(e,1,0))}function Cu(e){for(;e===zo;)zo=Dr[--Mr],Dr[Mr]=null,Uo=Dr[--Mr],Dr[Mr]=null;for(;e===Bi;)Bi=qt[--Yt],qt[Yt]=null,wn=qt[--Yt],qt[Yt]=null,Tn=qt[--Yt],qt[Yt]=null}var bt=null,He=null,Se=!1,Hi=null,sn=!1,Ru=Error(s(519));function Gi(e){var i=Error(s(418,""));throw Ga(Ht(i,e)),Ru}function Um(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[ht]=e,i[Tt]=o,a){case"dialog":ve("cancel",i),ve("close",i);break;case"iframe":case"object":case"embed":ve("load",i);break;case"video":case"audio":for(a=0;a<hs.length;a++)ve(hs[a],i);break;case"source":ve("error",i);break;case"img":case"image":case"link":ve("error",i),ve("load",i);break;case"details":ve("toggle",i);break;case"input":ve("invalid",i),Zp(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0),wo(i);break;case"select":ve("invalid",i);break;case"textarea":ve("invalid",i),em(i,o.value,o.defaultValue,o.children),wo(i)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||ev(i.textContent,a)?(o.popover!=null&&(ve("beforetoggle",i),ve("toggle",i)),o.onScroll!=null&&ve("scroll",i),o.onScrollEnd!=null&&ve("scrollend",i),o.onClick!=null&&(i.onclick=vl),i=!0):i=!1,i||Gi(e)}function Pm(e){for(bt=e.return;bt;)switch(bt.tag){case 5:case 13:sn=!1;return;case 27:case 3:sn=!0;return;default:bt=bt.return}}function Va(e){if(e!==bt)return!1;if(!Se)return Pm(e),Se=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Yf(e.type,e.memoizedProps)),a=!a),a&&He&&Gi(e),Pm(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,i=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(i===0){He=en(e.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++;e=e.nextSibling}He=null}}else i===27?(i=He,ci(e.type)?(e=Qf,Qf=null,He=e):He=i):He=bt?en(e.stateNode.nextSibling):null;return!0}function Ha(){He=bt=null,Se=!1}function Im(){var e=Hi;return e!==null&&(At===null?At=e:At.push.apply(At,e),Hi=null),e}function Ga(e){Hi===null?Hi=[e]:Hi.push(e)}var Du=q(null),qi=null,_n=null;function Xn(e,i,a){$(Du,i._currentValue),i._currentValue=a}function En(e){e._currentValue=Du.current,Q(Du)}function Mu(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function Ou(e,i,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var d=c.dependencies;if(d!==null){var g=c.child;d=d.firstContext;e:for(;d!==null;){var S=d;d=c;for(var T=0;T<i.length;T++)if(S.context===i[T]){d.lanes|=a,S=d.alternate,S!==null&&(S.lanes|=a),Mu(d.return,a,e),o||(g=null);break e}d=S.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(s(341));g.lanes|=a,d=g.alternate,d!==null&&(d.lanes|=a),Mu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function qa(e,i,a,o){e=null;for(var c=i,d=!1;c!==null;){if(!d){if((c.flags&524288)!==0)d=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var S=c.type;Dt(c.pendingProps.value,g.value)||(e!==null?e.push(S):e=[S])}}else if(c===tt.current){if(g=c.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(bs):e=[bs])}c=c.return}e!==null&&Ou(i,e,a,o),i.flags|=262144}function Po(e){for(e=e.firstContext;e!==null;){if(!Dt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yi(e){qi=e,_n=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function pt(e){return Bm(qi,e)}function Io(e,i){return qi===null&&Yi(e),Bm(e,i)}function Bm(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},_n===null){if(e===null)throw Error(s(308));_n=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else _n=_n.next=i;return a}var UT=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},PT=n.unstable_scheduleCallback,IT=n.unstable_NormalPriority,Je={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ju(){return{controller:new UT,data:new Map,refCount:0}}function Ya(e){e.refCount--,e.refCount===0&&PT(IT,function(){e.controller.abort()})}var Fa=null,ku=0,Or=0,jr=null;function BT(e,i){if(Fa===null){var a=Fa=[];ku=0,Or=zf(),jr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ku++,i.then(Vm,Vm),i}function Vm(){if(--ku===0&&Fa!==null){jr!==null&&(jr.status="fulfilled");var e=Fa;Fa=null,Or=0,jr=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function VT(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var c=0;c<a.length;c++)(0,a[c])(i)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var Hm=B.S;B.S=function(e,i){typeof i=="object"&&i!==null&&typeof i.then=="function"&&BT(e,i),Hm!==null&&Hm(e,i)};var Fi=q(null);function Nu(){var e=Fi.current;return e!==null?e:je.pooledCache}function Bo(e,i){i===null?$(Fi,Fi.current):$(Fi,i.pool)}function Gm(){var e=Nu();return e===null?null:{parent:Je._currentValue,pool:e}}var Ka=Error(s(460)),qm=Error(s(474)),Vo=Error(s(542)),Lu={then:function(){}};function Ym(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ho(){}function Fm(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Ho,Ho),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Xm(e),e;default:if(typeof i.status=="string")i.then(Ho,Ho);else{if(e=je,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var c=i;c.status="fulfilled",c.value=o}},function(o){if(i.status==="pending"){var c=i;c.status="rejected",c.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Xm(e),e}throw Xa=i,Ka}}var Xa=null;function Km(){if(Xa===null)throw Error(s(459));var e=Xa;return Xa=null,e}function Xm(e){if(e===Ka||e===Vo)throw Error(s(483))}var Qn=!1;function zu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Uu(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wn(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ee&2)!==0){var c=o.pending;return c===null?i.next=i:(i.next=c.next,c.next=i),o.pending=i,i=No(e),Nm(e,null,a),i}return ko(e,o,i,a),No(e)}function Qa(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Vp(e,a)}}function Pu(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?c=d=g:d=d.next=g,a=a.next}while(a!==null);d===null?c=d=i:d=d.next=i}else c=d=i;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var Iu=!1;function $a(){if(Iu){var e=jr;if(e!==null)throw e}}function Wa(e,i,a,o){Iu=!1;var c=e.updateQueue;Qn=!1;var d=c.firstBaseUpdate,g=c.lastBaseUpdate,S=c.shared.pending;if(S!==null){c.shared.pending=null;var T=S,O=T.next;T.next=null,g===null?d=O:g.next=O,g=T;var V=e.alternate;V!==null&&(V=V.updateQueue,S=V.lastBaseUpdate,S!==g&&(S===null?V.firstBaseUpdate=O:S.next=O,V.lastBaseUpdate=T))}if(d!==null){var G=c.baseState;g=0,V=O=T=null,S=d;do{var L=S.lane&-536870913,U=L!==S.lane;if(U?(ye&L)===L:(o&L)===L){L!==0&&L===Or&&(Iu=!0),V!==null&&(V=V.next={lane:0,tag:S.tag,payload:S.payload,callback:null,next:null});e:{var se=e,ne=S;L=i;var De=a;switch(ne.tag){case 1:if(se=ne.payload,typeof se=="function"){G=se.call(De,G,L);break e}G=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ne.payload,L=typeof se=="function"?se.call(De,G,L):se,L==null)break e;G=v({},G,L);break e;case 2:Qn=!0}}L=S.callback,L!==null&&(e.flags|=64,U&&(e.flags|=8192),U=c.callbacks,U===null?c.callbacks=[L]:U.push(L))}else U={lane:L,tag:S.tag,payload:S.payload,callback:S.callback,next:null},V===null?(O=V=U,T=G):V=V.next=U,g|=L;if(S=S.next,S===null){if(S=c.shared.pending,S===null)break;U=S,S=U.next,U.next=null,c.lastBaseUpdate=U,c.shared.pending=null}}while(!0);V===null&&(T=G),c.baseState=T,c.firstBaseUpdate=O,c.lastBaseUpdate=V,d===null&&(c.shared.lanes=0),ai|=g,e.lanes=g,e.memoizedState=G}}function Qm(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function $m(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Qm(a[e],i)}var kr=q(null),Go=q(0);function Wm(e,i){e=jn,$(Go,e),$(kr,i),jn=e|i.baseLanes}function Bu(){$(Go,jn),$(kr,kr.current)}function Vu(){jn=Go.current,Q(kr),Q(Go)}var Zn=0,de=null,Ce=null,Qe=null,qo=!1,Nr=!1,Ki=!1,Yo=0,Za=0,Lr=null,HT=0;function Ye(){throw Error(s(321))}function Hu(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!Dt(e[a],i[a]))return!1;return!0}function Gu(e,i,a,o,c,d){return Zn=d,de=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,B.H=e===null||e.memoizedState===null?Ng:Lg,Ki=!1,d=a(o,c),Ki=!1,Nr&&(d=Jm(i,a,o,c)),Zm(e),d}function Zm(e){B.H=Wo;var i=Ce!==null&&Ce.next!==null;if(Zn=0,Qe=Ce=de=null,qo=!1,Za=0,Lr=null,i)throw Error(s(300));e===null||it||(e=e.dependencies,e!==null&&Po(e)&&(it=!0))}function Jm(e,i,a,o){de=e;var c=0;do{if(Nr&&(Lr=null),Za=0,Nr=!1,25<=c)throw Error(s(301));if(c+=1,Qe=Ce=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=QT,d=i(a,o)}while(Nr);return d}function GT(){var e=B.H,i=e.useState()[0];return i=typeof i.then=="function"?Ja(i):i,e=e.useState()[0],(Ce!==null?Ce.memoizedState:null)!==e&&(de.flags|=1024),i}function qu(){var e=Yo!==0;return Yo=0,e}function Yu(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Fu(e){if(qo){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}qo=!1}Zn=0,Qe=Ce=de=null,Nr=!1,Za=Yo=0,Lr=null}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qe===null?de.memoizedState=Qe=e:Qe=Qe.next=e,Qe}function $e(){if(Ce===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var i=Qe===null?de.memoizedState:Qe.next;if(i!==null)Qe=i,Ce=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Qe===null?de.memoizedState=Qe=e:Qe=Qe.next=e}return Qe}function Ku(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ja(e){var i=Za;return Za+=1,Lr===null&&(Lr=[]),e=Fm(Lr,e,i),i=de,(Qe===null?i.memoizedState:Qe.next)===null&&(i=i.alternate,B.H=i===null||i.memoizedState===null?Ng:Lg),e}function Fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ja(e);if(e.$$typeof===P)return pt(e)}throw Error(s(438,String(e)))}function Xu(e){var i=null,a=de.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=de.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(c){return c.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Ku(),de.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=ke;return i.index++,a}function An(e,i){return typeof i=="function"?i(e):i}function Ko(e){var i=$e();return Qu(i,Ce,e)}function Qu(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,d=o.pending;if(d!==null){if(c!==null){var g=c.next;c.next=d.next,d.next=g}i.baseQueue=c=d,o.pending=null}if(d=e.baseState,c===null)e.memoizedState=d;else{i=c.next;var S=g=null,T=null,O=i,V=!1;do{var G=O.lane&-536870913;if(G!==O.lane?(ye&G)===G:(Zn&G)===G){var L=O.revertLane;if(L===0)T!==null&&(T=T.next={lane:0,revertLane:0,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null}),G===Or&&(V=!0);else if((Zn&L)===L){O=O.next,L===Or&&(V=!0);continue}else G={lane:0,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(S=T=G,g=d):T=T.next=G,de.lanes|=L,ai|=L;G=O.action,Ki&&a(d,G),d=O.hasEagerState?O.eagerState:a(d,G)}else L={lane:G,revertLane:O.revertLane,action:O.action,hasEagerState:O.hasEagerState,eagerState:O.eagerState,next:null},T===null?(S=T=L,g=d):T=T.next=L,de.lanes|=G,ai|=G;O=O.next}while(O!==null&&O!==i);if(T===null?g=d:T.next=S,!Dt(d,e.memoizedState)&&(it=!0,V&&(a=jr,a!==null)))throw a;e.memoizedState=d,e.baseState=g,e.baseQueue=T,o.lastRenderedState=d}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function $u(e){var i=$e(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,d=i.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do d=e(d,g.action),g=g.next;while(g!==c);Dt(d,i.memoizedState)||(it=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function eg(e,i,a){var o=de,c=$e(),d=Se;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var g=!Dt((Ce||c).memoizedState,a);g&&(c.memoizedState=a,it=!0),c=c.queue;var S=ig.bind(null,o,c,e);if(es(2048,8,S,[e]),c.getSnapshot!==i||g||Qe!==null&&Qe.memoizedState.tag&1){if(o.flags|=2048,zr(9,Xo(),ng.bind(null,o,c,a,i),null),je===null)throw Error(s(349));d||(Zn&124)!==0||tg(o,i,a)}return a}function tg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=de.updateQueue,i===null?(i=Ku(),de.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function ng(e,i,a,o){i.value=a,i.getSnapshot=o,rg(i)&&ag(e)}function ig(e,i,a){return a(function(){rg(i)&&ag(e)})}function rg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!Dt(e,a)}catch{return!0}}function ag(e){var i=Cr(e,2);i!==null&&Lt(i,e,2)}function Wu(e){var i=_t();if(typeof e=="function"){var a=e;if(e=a(),Ki){Yn(!0);try{a()}finally{Yn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:e},i}function sg(e,i,a,o){return e.baseState=a,Qu(e,Ce,typeof o=="function"?o:An)}function qT(e,i,a,o,c){if($o(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){d.listeners.push(g)}};B.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,og(i,d)):(d.next=a.next,i.pending=a.next=d)}}function og(e,i){var a=i.action,o=i.payload,c=e.state;if(i.isTransition){var d=B.T,g={};B.T=g;try{var S=a(c,o),T=B.S;T!==null&&T(g,S),lg(e,i,S)}catch(O){Zu(e,i,O)}finally{B.T=d}}else try{d=a(c,o),lg(e,i,d)}catch(O){Zu(e,i,O)}}function lg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(e,i,o)},function(o){return Zu(e,i,o)}):cg(e,i,a)}function cg(e,i,a){i.status="fulfilled",i.value=a,ug(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,og(e,a)))}function Zu(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,ug(i),i=i.next;while(i!==o)}e.action=null}function ug(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function fg(e,i){return i}function dg(e,i){if(Se){var a=je.formState;if(a!==null){e:{var o=de;if(Se){if(He){t:{for(var c=He,d=sn;c.nodeType!==8;){if(!d){c=null;break t}if(c=en(c.nextSibling),c===null){c=null;break t}}d=c.data,c=d==="F!"||d==="F"?c:null}if(c){He=en(c.nextSibling),o=c.data==="F!";break e}}Gi(o)}o=!1}o&&(i=a[0])}}return a=_t(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:i},a.queue=o,a=Og.bind(null,de,o),o.dispatch=a,o=Wu(!1),d=rf.bind(null,de,!1,o.queue),o=_t(),c={state:i,dispatch:null,action:e,pending:null},o.queue=c,a=qT.bind(null,de,c,d,a),c.dispatch=a,o.memoizedState=e,[i,a,!1]}function hg(e){var i=$e();return pg(i,Ce,e)}function pg(e,i,a){if(i=Qu(e,i,fg)[0],e=Ko(An)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=Ja(i)}catch(g){throw g===Ka?Vo:g}else o=i;i=$e();var c=i.queue,d=c.dispatch;return a!==i.memoizedState&&(de.flags|=2048,zr(9,Xo(),YT.bind(null,c,a),null)),[o,d,e]}function YT(e,i){e.action=i}function mg(e){var i=$e(),a=Ce;if(a!==null)return pg(i,a,e);$e(),i=i.memoizedState,a=$e();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function zr(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=de.updateQueue,i===null&&(i=Ku(),de.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function Xo(){return{destroy:void 0,resource:void 0}}function gg(){return $e().memoizedState}function Qo(e,i,a,o){var c=_t();o=o===void 0?null:o,de.flags|=e,c.memoizedState=zr(1|i,Xo(),a,o)}function es(e,i,a,o){var c=$e();o=o===void 0?null:o;var d=c.memoizedState.inst;Ce!==null&&o!==null&&Hu(o,Ce.memoizedState.deps)?c.memoizedState=zr(i,d,a,o):(de.flags|=e,c.memoizedState=zr(1|i,d,a,o))}function vg(e,i){Qo(8390656,8,e,i)}function yg(e,i){es(2048,8,e,i)}function bg(e,i){return es(4,2,e,i)}function Sg(e,i){return es(4,4,e,i)}function xg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Tg(e,i,a){a=a!=null?a.concat([e]):null,es(4,4,xg.bind(null,i,e),a)}function Ju(){}function wg(e,i){var a=$e();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Hu(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function _g(e,i){var a=$e();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Hu(i,o[1]))return o[0];if(o=e(),Ki){Yn(!0);try{e()}finally{Yn(!1)}}return a.memoizedState=[o,i],o}function ef(e,i,a){return a===void 0||(Zn&1073741824)!==0?e.memoizedState=i:(e.memoizedState=a,e=C0(),de.lanes|=e,ai|=e,a)}function Eg(e,i,a,o){return Dt(a,i)?a:kr.current!==null?(e=ef(e,a,o),Dt(e,i)||(it=!0),e):(Zn&42)===0?(it=!0,e.memoizedState=a):(e=C0(),de.lanes|=e,ai|=e,i)}function Ag(e,i,a,o,c){var d=F.p;F.p=d!==0&&8>d?d:8;var g=B.T,S={};B.T=S,rf(e,!1,i,a);try{var T=c(),O=B.S;if(O!==null&&O(S,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var V=VT(T,o);ts(e,i,V,Nt(e))}else ts(e,i,o,Nt(e))}catch(G){ts(e,i,{then:function(){},status:"rejected",reason:G},Nt())}finally{F.p=d,B.T=g}}function FT(){}function tf(e,i,a,o){if(e.tag!==5)throw Error(s(476));var c=Cg(e).queue;Ag(e,c,i,J,a===null?FT:function(){return Rg(e),a(o)})}function Cg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:J},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:An,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Rg(e){var i=Cg(e).next.queue;ts(e,i,{},Nt())}function nf(){return pt(bs)}function Dg(){return $e().memoizedState}function Mg(){return $e().memoizedState}function KT(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Nt();e=$n(a);var o=Wn(i,e,a);o!==null&&(Lt(o,i,a),Qa(o,i,a)),i={cache:ju()},e.payload=i;return}i=i.return}}function XT(e,i,a){var o=Nt();a={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},$o(e)?jg(i,a):(a=Tu(e,i,a,o),a!==null&&(Lt(a,e,o),kg(a,i,o)))}function Og(e,i,a){var o=Nt();ts(e,i,a,o)}function ts(e,i,a,o){var c={lane:o,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if($o(e))jg(i,c);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var g=i.lastRenderedState,S=d(g,a);if(c.hasEagerState=!0,c.eagerState=S,Dt(S,g))return ko(e,i,c,0),je===null&&jo(),!1}catch{}finally{}if(a=Tu(e,i,c,o),a!==null)return Lt(a,e,o),kg(a,i,o),!0}return!1}function rf(e,i,a,o){if(o={lane:2,revertLane:zf(),action:o,hasEagerState:!1,eagerState:null,next:null},$o(e)){if(i)throw Error(s(479))}else i=Tu(e,a,o,2),i!==null&&Lt(i,e,2)}function $o(e){var i=e.alternate;return e===de||i!==null&&i===de}function jg(e,i){Nr=qo=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function kg(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,Vp(e,a)}}var Wo={readContext:pt,use:Fo,useCallback:Ye,useContext:Ye,useEffect:Ye,useImperativeHandle:Ye,useLayoutEffect:Ye,useInsertionEffect:Ye,useMemo:Ye,useReducer:Ye,useRef:Ye,useState:Ye,useDebugValue:Ye,useDeferredValue:Ye,useTransition:Ye,useSyncExternalStore:Ye,useId:Ye,useHostTransitionStatus:Ye,useFormState:Ye,useActionState:Ye,useOptimistic:Ye,useMemoCache:Ye,useCacheRefresh:Ye},Ng={readContext:pt,use:Fo,useCallback:function(e,i){return _t().memoizedState=[e,i===void 0?null:i],e},useContext:pt,useEffect:vg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Qo(4194308,4,xg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Qo(4194308,4,e,i)},useInsertionEffect:function(e,i){Qo(4,2,e,i)},useMemo:function(e,i){var a=_t();i=i===void 0?null:i;var o=e();if(Ki){Yn(!0);try{e()}finally{Yn(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=_t();if(a!==void 0){var c=a(i);if(Ki){Yn(!0);try{a(i)}finally{Yn(!1)}}}else c=i;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=XT.bind(null,de,e),[o.memoizedState,e]},useRef:function(e){var i=_t();return e={current:e},i.memoizedState=e},useState:function(e){e=Wu(e);var i=e.queue,a=Og.bind(null,de,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Ju,useDeferredValue:function(e,i){var a=_t();return ef(a,e,i)},useTransition:function(){var e=Wu(!1);return e=Ag.bind(null,de,e.queue,!0,!1),_t().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=de,c=_t();if(Se){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),je===null)throw Error(s(349));(ye&124)!==0||tg(o,i,a)}c.memoizedState=a;var d={value:a,getSnapshot:i};return c.queue=d,vg(ig.bind(null,o,d,e),[e]),o.flags|=2048,zr(9,Xo(),ng.bind(null,o,d,a,i),null),a},useId:function(){var e=_t(),i=je.identifierPrefix;if(Se){var a=wn,o=Tn;a=(o&~(1<<32-Rt(o)-1)).toString(32)+a,i="«"+i+"R"+a,a=Yo++,0<a&&(i+="H"+a.toString(32)),i+="»"}else a=HT++,i="«"+i+"r"+a.toString(32)+"»";return e.memoizedState=i},useHostTransitionStatus:nf,useFormState:dg,useActionState:dg,useOptimistic:function(e){var i=_t();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=rf.bind(null,de,!0,a),a.dispatch=i,[e,i]},useMemoCache:Xu,useCacheRefresh:function(){return _t().memoizedState=KT.bind(null,de)}},Lg={readContext:pt,use:Fo,useCallback:wg,useContext:pt,useEffect:yg,useImperativeHandle:Tg,useInsertionEffect:bg,useLayoutEffect:Sg,useMemo:_g,useReducer:Ko,useRef:gg,useState:function(){return Ko(An)},useDebugValue:Ju,useDeferredValue:function(e,i){var a=$e();return Eg(a,Ce.memoizedState,e,i)},useTransition:function(){var e=Ko(An)[0],i=$e().memoizedState;return[typeof e=="boolean"?e:Ja(e),i]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:nf,useFormState:hg,useActionState:hg,useOptimistic:function(e,i){var a=$e();return sg(a,Ce,e,i)},useMemoCache:Xu,useCacheRefresh:Mg},QT={readContext:pt,use:Fo,useCallback:wg,useContext:pt,useEffect:yg,useImperativeHandle:Tg,useInsertionEffect:bg,useLayoutEffect:Sg,useMemo:_g,useReducer:$u,useRef:gg,useState:function(){return $u(An)},useDebugValue:Ju,useDeferredValue:function(e,i){var a=$e();return Ce===null?ef(a,e,i):Eg(a,Ce.memoizedState,e,i)},useTransition:function(){var e=$u(An)[0],i=$e().memoizedState;return[typeof e=="boolean"?e:Ja(e),i]},useSyncExternalStore:eg,useId:Dg,useHostTransitionStatus:nf,useFormState:mg,useActionState:mg,useOptimistic:function(e,i){var a=$e();return Ce!==null?sg(a,Ce,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Xu,useCacheRefresh:Mg},Ur=null,ns=0;function Zo(e){var i=ns;return ns+=1,Ur===null&&(Ur=[]),Fm(Ur,e,i)}function is(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Jo(e,i){throw i.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function zg(e){var i=e._init;return i(e._payload)}function Ug(e){function i(R,E){if(e){var M=R.deletions;M===null?(R.deletions=[E],R.flags|=16):M.push(E)}}function a(R,E){if(!e)return null;for(;E!==null;)i(R,E),E=E.sibling;return null}function o(R){for(var E=new Map;R!==null;)R.key!==null?E.set(R.key,R):E.set(R.index,R),R=R.sibling;return E}function c(R,E){return R=xn(R,E),R.index=0,R.sibling=null,R}function d(R,E,M){return R.index=M,e?(M=R.alternate,M!==null?(M=M.index,M<E?(R.flags|=67108866,E):M):(R.flags|=67108866,E)):(R.flags|=1048576,E)}function g(R){return e&&R.alternate===null&&(R.flags|=67108866),R}function S(R,E,M,H){return E===null||E.tag!==6?(E=_u(M,R.mode,H),E.return=R,E):(E=c(E,M),E.return=R,E)}function T(R,E,M,H){var Z=M.type;return Z===D?V(R,E,M.props.children,H,M.key):E!==null&&(E.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&zg(Z)===E.type)?(E=c(E,M.props),is(E,M),E.return=R,E):(E=Lo(M.type,M.key,M.props,null,R.mode,H),is(E,M),E.return=R,E)}function O(R,E,M,H){return E===null||E.tag!==4||E.stateNode.containerInfo!==M.containerInfo||E.stateNode.implementation!==M.implementation?(E=Eu(M,R.mode,H),E.return=R,E):(E=c(E,M.children||[]),E.return=R,E)}function V(R,E,M,H,Z){return E===null||E.tag!==7?(E=Ii(M,R.mode,H,Z),E.return=R,E):(E=c(E,M),E.return=R,E)}function G(R,E,M){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=_u(""+E,R.mode,M),E.return=R,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case x:return M=Lo(E.type,E.key,E.props,null,R.mode,M),is(M,E),M.return=R,M;case w:return E=Eu(E,R.mode,M),E.return=R,E;case W:var H=E._init;return E=H(E._payload),G(R,E,M)}if(Ve(E)||ue(E))return E=Ii(E,R.mode,M,null),E.return=R,E;if(typeof E.then=="function")return G(R,Zo(E),M);if(E.$$typeof===P)return G(R,Io(R,E),M);Jo(R,E)}return null}function L(R,E,M,H){var Z=E!==null?E.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return Z!==null?null:S(R,E,""+M,H);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case x:return M.key===Z?T(R,E,M,H):null;case w:return M.key===Z?O(R,E,M,H):null;case W:return Z=M._init,M=Z(M._payload),L(R,E,M,H)}if(Ve(M)||ue(M))return Z!==null?null:V(R,E,M,H,null);if(typeof M.then=="function")return L(R,E,Zo(M),H);if(M.$$typeof===P)return L(R,E,Io(R,M),H);Jo(R,M)}return null}function U(R,E,M,H,Z){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return R=R.get(M)||null,S(E,R,""+H,Z);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case x:return R=R.get(H.key===null?M:H.key)||null,T(E,R,H,Z);case w:return R=R.get(H.key===null?M:H.key)||null,O(E,R,H,Z);case W:var pe=H._init;return H=pe(H._payload),U(R,E,M,H,Z)}if(Ve(H)||ue(H))return R=R.get(M)||null,V(E,R,H,Z,null);if(typeof H.then=="function")return U(R,E,M,Zo(H),Z);if(H.$$typeof===P)return U(R,E,M,Io(E,H),Z);Jo(E,H)}return null}function se(R,E,M,H){for(var Z=null,pe=null,ee=E,re=E=0,at=null;ee!==null&&re<M.length;re++){ee.index>re?(at=ee,ee=null):at=ee.sibling;var be=L(R,ee,M[re],H);if(be===null){ee===null&&(ee=at);break}e&&ee&&be.alternate===null&&i(R,ee),E=d(be,E,re),pe===null?Z=be:pe.sibling=be,pe=be,ee=at}if(re===M.length)return a(R,ee),Se&&Vi(R,re),Z;if(ee===null){for(;re<M.length;re++)ee=G(R,M[re],H),ee!==null&&(E=d(ee,E,re),pe===null?Z=ee:pe.sibling=ee,pe=ee);return Se&&Vi(R,re),Z}for(ee=o(ee);re<M.length;re++)at=U(ee,R,re,M[re],H),at!==null&&(e&&at.alternate!==null&&ee.delete(at.key===null?re:at.key),E=d(at,E,re),pe===null?Z=at:pe.sibling=at,pe=at);return e&&ee.forEach(function(pi){return i(R,pi)}),Se&&Vi(R,re),Z}function ne(R,E,M,H){if(M==null)throw Error(s(151));for(var Z=null,pe=null,ee=E,re=E=0,at=null,be=M.next();ee!==null&&!be.done;re++,be=M.next()){ee.index>re?(at=ee,ee=null):at=ee.sibling;var pi=L(R,ee,be.value,H);if(pi===null){ee===null&&(ee=at);break}e&&ee&&pi.alternate===null&&i(R,ee),E=d(pi,E,re),pe===null?Z=pi:pe.sibling=pi,pe=pi,ee=at}if(be.done)return a(R,ee),Se&&Vi(R,re),Z;if(ee===null){for(;!be.done;re++,be=M.next())be=G(R,be.value,H),be!==null&&(E=d(be,E,re),pe===null?Z=be:pe.sibling=be,pe=be);return Se&&Vi(R,re),Z}for(ee=o(ee);!be.done;re++,be=M.next())be=U(ee,R,re,be.value,H),be!==null&&(e&&be.alternate!==null&&ee.delete(be.key===null?re:be.key),E=d(be,E,re),pe===null?Z=be:pe.sibling=be,pe=be);return e&&ee.forEach(function($w){return i(R,$w)}),Se&&Vi(R,re),Z}function De(R,E,M,H){if(typeof M=="object"&&M!==null&&M.type===D&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case x:e:{for(var Z=M.key;E!==null;){if(E.key===Z){if(Z=M.type,Z===D){if(E.tag===7){a(R,E.sibling),H=c(E,M.props.children),H.return=R,R=H;break e}}else if(E.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===W&&zg(Z)===E.type){a(R,E.sibling),H=c(E,M.props),is(H,M),H.return=R,R=H;break e}a(R,E);break}else i(R,E);E=E.sibling}M.type===D?(H=Ii(M.props.children,R.mode,H,M.key),H.return=R,R=H):(H=Lo(M.type,M.key,M.props,null,R.mode,H),is(H,M),H.return=R,R=H)}return g(R);case w:e:{for(Z=M.key;E!==null;){if(E.key===Z)if(E.tag===4&&E.stateNode.containerInfo===M.containerInfo&&E.stateNode.implementation===M.implementation){a(R,E.sibling),H=c(E,M.children||[]),H.return=R,R=H;break e}else{a(R,E);break}else i(R,E);E=E.sibling}H=Eu(M,R.mode,H),H.return=R,R=H}return g(R);case W:return Z=M._init,M=Z(M._payload),De(R,E,M,H)}if(Ve(M))return se(R,E,M,H);if(ue(M)){if(Z=ue(M),typeof Z!="function")throw Error(s(150));return M=Z.call(M),ne(R,E,M,H)}if(typeof M.then=="function")return De(R,E,Zo(M),H);if(M.$$typeof===P)return De(R,E,Io(R,M),H);Jo(R,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,E!==null&&E.tag===6?(a(R,E.sibling),H=c(E,M),H.return=R,R=H):(a(R,E),H=_u(M,R.mode,H),H.return=R,R=H),g(R)):a(R,E)}return function(R,E,M,H){try{ns=0;var Z=De(R,E,M,H);return Ur=null,Z}catch(ee){if(ee===Ka||ee===Vo)throw ee;var pe=Mt(29,ee,null,R.mode);return pe.lanes=H,pe.return=R,pe}finally{}}}var Pr=Ug(!0),Pg=Ug(!1),Ft=q(null),on=null;function Jn(e){var i=e.alternate;$(et,et.current&1),$(Ft,e),on===null&&(i===null||kr.current!==null||i.memoizedState!==null)&&(on=e)}function Ig(e){if(e.tag===22){if($(et,et.current),$(Ft,e),on===null){var i=e.alternate;i!==null&&i.memoizedState!==null&&(on=e)}}else ei()}function ei(){$(et,et.current),$(Ft,Ft.current)}function Cn(e){Q(Ft),on===e&&(on=null),Q(et)}var et=q(0);function el(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||Xf(a)))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}function af(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:v({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Nt(),c=$n(o);c.payload=i,a!=null&&(c.callback=a),i=Wn(e,c,o),i!==null&&(Lt(i,e,o),Qa(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Nt(),c=$n(o);c.tag=1,c.payload=i,a!=null&&(c.callback=a),i=Wn(e,c,o),i!==null&&(Lt(i,e,o),Qa(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Nt(),o=$n(a);o.tag=2,i!=null&&(o.callback=i),i=Wn(e,o,a),i!==null&&(Lt(i,e,a),Qa(i,e,a))}};function Bg(e,i,a,o,c,d,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,g):i.prototype&&i.prototype.isPureReactComponent?!Ia(a,o)||!Ia(c,d):!0}function Vg(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&sf.enqueueReplaceState(i,i.state,null)}function Xi(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=v({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function Hg(e){tl(e)}function Gg(e){console.error(e)}function qg(e){tl(e)}function nl(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Yg(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function of(e,i,a){return a=$n(a),a.tag=3,a.payload={element:null},a.callback=function(){nl(e,i)},a}function Fg(e){return e=$n(e),e.tag=3,e}function Kg(e,i,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var d=o.value;e.payload=function(){return c(d)},e.callback=function(){Yg(i,a,o)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){Yg(i,a,o),typeof c!="function"&&(si===null?si=new Set([this]):si.add(this));var S=o.stack;this.componentDidCatch(o.value,{componentStack:S!==null?S:""})})}function $T(e,i,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&qa(i,a,c,!0),a=Ft.current,a!==null){switch(a.tag){case 13:return on===null?Of():a.alternate===null&&Ge===0&&(Ge=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Lu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),kf(e,o,c)),!1;case 22:return a.flags|=65536,o===Lu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),kf(e,o,c)),!1}throw Error(s(435,a.tag))}return kf(e,o,c),Of(),!1}if(Se)return i=Ft.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=c,o!==Ru&&(e=Error(s(422),{cause:o}),Ga(Ht(e,a)))):(o!==Ru&&(i=Error(s(423),{cause:o}),Ga(Ht(i,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Ht(o,a),c=of(e.stateNode,o,c),Pu(e,c),Ge!==4&&(Ge=2)),!1;var d=Error(s(520),{cause:o});if(d=Ht(d,a),us===null?us=[d]:us.push(d),Ge!==4&&(Ge=2),i===null)return!0;o=Ht(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=of(a.stateNode,o,e),Pu(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(si===null||!si.has(d))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Fg(c),Kg(c,e,a,o),Pu(a,c),!1}a=a.return}while(a!==null);return!1}var Xg=Error(s(461)),it=!1;function ot(e,i,a,o){i.child=e===null?Pg(i,null,a,o):Pr(i,e.child,a,o)}function Qg(e,i,a,o,c){a=a.render;var d=i.ref;if("ref"in o){var g={};for(var S in o)S!=="ref"&&(g[S]=o[S])}else g=o;return Yi(i),o=Gu(e,i,a,g,d,c),S=qu(),e!==null&&!it?(Yu(e,i,c),Rn(e,i,c)):(Se&&S&&Au(i),i.flags|=1,ot(e,i,o,c),i.child)}function $g(e,i,a,o,c){if(e===null){var d=a.type;return typeof d=="function"&&!wu(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,Wg(e,i,d,o,c)):(e=Lo(a.type,null,o,i,i.mode,c),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!mf(e,c)){var g=d.memoizedProps;if(a=a.compare,a=a!==null?a:Ia,a(g,o)&&e.ref===i.ref)return Rn(e,i,c)}return i.flags|=1,e=xn(d,o),e.ref=i.ref,e.return=i,i.child=e}function Wg(e,i,a,o,c){if(e!==null){var d=e.memoizedProps;if(Ia(d,o)&&e.ref===i.ref)if(it=!1,i.pendingProps=o=d,mf(e,c))(e.flags&131072)!==0&&(it=!0);else return i.lanes=e.lanes,Rn(e,i,c)}return lf(e,i,a,o,c)}function Zg(e,i,a){var o=i.pendingProps,c=o.children,d=e!==null?e.memoizedState:null;if(o.mode==="hidden"){if((i.flags&128)!==0){if(o=d!==null?d.baseLanes|a:a,e!==null){for(c=i.child=e.child,d=0;c!==null;)d=d|c.lanes|c.childLanes,c=c.sibling;i.childLanes=d&~o}else i.childLanes=0,i.child=null;return Jg(e,i,o,a)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Bo(i,d!==null?d.cachePool:null),d!==null?Wm(i,d):Bu(),Ig(i);else return i.lanes=i.childLanes=536870912,Jg(e,i,d!==null?d.baseLanes|a:a,a)}else d!==null?(Bo(i,d.cachePool),Wm(i,d),ei(),i.memoizedState=null):(e!==null&&Bo(i,null),Bu(),ei());return ot(e,i,c,a),i.child}function Jg(e,i,a,o){var c=Nu();return c=c===null?null:{parent:Je._currentValue,pool:c},i.memoizedState={baseLanes:a,cachePool:c},e!==null&&Bo(i,null),Bu(),Ig(i),e!==null&&qa(e,i,o,!0),null}function il(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function lf(e,i,a,o,c){return Yi(i),a=Gu(e,i,a,o,void 0,c),o=qu(),e!==null&&!it?(Yu(e,i,c),Rn(e,i,c)):(Se&&o&&Au(i),i.flags|=1,ot(e,i,a,c),i.child)}function e0(e,i,a,o,c,d){return Yi(i),i.updateQueue=null,a=Jm(i,o,a,c),Zm(e),o=qu(),e!==null&&!it?(Yu(e,i,d),Rn(e,i,d)):(Se&&o&&Au(i),i.flags|=1,ot(e,i,a,d),i.child)}function t0(e,i,a,o,c){if(Yi(i),i.stateNode===null){var d=Rr,g=a.contextType;typeof g=="object"&&g!==null&&(d=pt(g)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=sf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},zu(i),g=a.contextType,d.context=typeof g=="object"&&g!==null?pt(g):Rr,d.state=i.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(af(i,a,g,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(g=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),g!==d.state&&sf.enqueueReplaceState(d,d.state,null),Wa(i,o,d,c),$a(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var S=i.memoizedProps,T=Xi(a,S);d.props=T;var O=d.context,V=a.contextType;g=Rr,typeof V=="object"&&V!==null&&(g=pt(V));var G=a.getDerivedStateFromProps;V=typeof G=="function"||typeof d.getSnapshotBeforeUpdate=="function",S=i.pendingProps!==S,V||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(S||O!==g)&&Vg(i,d,o,g),Qn=!1;var L=i.memoizedState;d.state=L,Wa(i,o,d,c),$a(),O=i.memoizedState,S||L!==O||Qn?(typeof G=="function"&&(af(i,a,G,o),O=i.memoizedState),(T=Qn||Bg(i,a,T,o,L,O,g))?(V||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=O),d.props=o,d.state=O,d.context=g,o=T):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Uu(e,i),g=i.memoizedProps,V=Xi(a,g),d.props=V,G=i.pendingProps,L=d.context,O=a.contextType,T=Rr,typeof O=="object"&&O!==null&&(T=pt(O)),S=a.getDerivedStateFromProps,(O=typeof S=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(g!==G||L!==T)&&Vg(i,d,o,T),Qn=!1,L=i.memoizedState,d.state=L,Wa(i,o,d,c),$a();var U=i.memoizedState;g!==G||L!==U||Qn||e!==null&&e.dependencies!==null&&Po(e.dependencies)?(typeof S=="function"&&(af(i,a,S,o),U=i.memoizedState),(V=Qn||Bg(i,a,V,o,L,U,T)||e!==null&&e.dependencies!==null&&Po(e.dependencies))?(O||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,U,T),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,U,T)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&L===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&L===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=U),d.props=o,d.state=U,d.context=T,o=V):(typeof d.componentDidUpdate!="function"||g===e.memoizedProps&&L===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&L===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,il(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=Pr(i,e.child,null,c),i.child=Pr(i,null,a,c)):ot(e,i,a,c),i.memoizedState=d.state,e=i.child):e=Rn(e,i,c),e}function n0(e,i,a,o){return Ha(),i.flags|=256,ot(e,i,a,o),i.child}var cf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function uf(e){return{baseLanes:e,cachePool:Gm()}}function ff(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Kt),e}function i0(e,i,a){var o=i.pendingProps,c=!1,d=(i.flags&128)!==0,g;if((g=d)||(g=e!==null&&e.memoizedState===null?!1:(et.current&2)!==0),g&&(c=!0,i.flags&=-129),g=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(c?Jn(i):ei(),Se){var S=He,T;if(T=S){e:{for(T=S,S=sn;T.nodeType!==8;){if(!S){S=null;break e}if(T=en(T.nextSibling),T===null){S=null;break e}}S=T}S!==null?(i.memoizedState={dehydrated:S,treeContext:Bi!==null?{id:Tn,overflow:wn}:null,retryLane:536870912,hydrationErrors:null},T=Mt(18,null,null,0),T.stateNode=S,T.return=i,i.child=T,bt=i,He=null,T=!0):T=!1}T||Gi(i)}if(S=i.memoizedState,S!==null&&(S=S.dehydrated,S!==null))return Xf(S)?i.lanes=32:i.lanes=536870912,null;Cn(i)}return S=o.children,o=o.fallback,c?(ei(),c=i.mode,S=rl({mode:"hidden",children:S},c),o=Ii(o,c,a,null),S.return=i,o.return=i,S.sibling=o,i.child=S,c=i.child,c.memoizedState=uf(a),c.childLanes=ff(e,g,a),i.memoizedState=cf,o):(Jn(i),df(i,S))}if(T=e.memoizedState,T!==null&&(S=T.dehydrated,S!==null)){if(d)i.flags&256?(Jn(i),i.flags&=-257,i=hf(e,i,a)):i.memoizedState!==null?(ei(),i.child=e.child,i.flags|=128,i=null):(ei(),c=o.fallback,S=i.mode,o=rl({mode:"visible",children:o.children},S),c=Ii(c,S,a,null),c.flags|=2,o.return=i,c.return=i,o.sibling=c,i.child=o,Pr(i,e.child,null,a),o=i.child,o.memoizedState=uf(a),o.childLanes=ff(e,g,a),i.memoizedState=cf,i=c);else if(Jn(i),Xf(S)){if(g=S.nextSibling&&S.nextSibling.dataset,g)var O=g.dgst;g=O,o=Error(s(419)),o.stack="",o.digest=g,Ga({value:o,source:null,stack:null}),i=hf(e,i,a)}else if(it||qa(e,i,a,!1),g=(a&e.childLanes)!==0,it||g){if(g=je,g!==null&&(o=a&-a,o=(o&42)!==0?1:Xc(o),o=(o&(g.suspendedLanes|a))!==0?0:o,o!==0&&o!==T.retryLane))throw T.retryLane=o,Cr(e,o),Lt(g,e,o),Xg;S.data==="$?"||Of(),i=hf(e,i,a)}else S.data==="$?"?(i.flags|=192,i.child=e.child,i=null):(e=T.treeContext,He=en(S.nextSibling),bt=i,Se=!0,Hi=null,sn=!1,e!==null&&(qt[Yt++]=Tn,qt[Yt++]=wn,qt[Yt++]=Bi,Tn=e.id,wn=e.overflow,Bi=i),i=df(i,o.children),i.flags|=4096);return i}return c?(ei(),c=o.fallback,S=i.mode,T=e.child,O=T.sibling,o=xn(T,{mode:"hidden",children:o.children}),o.subtreeFlags=T.subtreeFlags&65011712,O!==null?c=xn(O,c):(c=Ii(c,S,a,null),c.flags|=2),c.return=i,o.return=i,o.sibling=c,i.child=o,o=c,c=i.child,S=e.child.memoizedState,S===null?S=uf(a):(T=S.cachePool,T!==null?(O=Je._currentValue,T=T.parent!==O?{parent:O,pool:O}:T):T=Gm(),S={baseLanes:S.baseLanes|a,cachePool:T}),c.memoizedState=S,c.childLanes=ff(e,g,a),i.memoizedState=cf,o):(Jn(i),a=e.child,e=a.sibling,a=xn(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(g=i.deletions,g===null?(i.deletions=[e],i.flags|=16):g.push(e)),i.child=a,i.memoizedState=null,a)}function df(e,i){return i=rl({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function rl(e,i){return e=Mt(22,e,null,i),e.lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function hf(e,i,a){return Pr(i,e.child,null,a),e=df(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function r0(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),Mu(e.return,i,a)}function pf(e,i,a,o,c){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c}:(d.isBackwards=i,d.rendering=null,d.renderingStartTime=0,d.last=o,d.tail=a,d.tailMode=c)}function a0(e,i,a){var o=i.pendingProps,c=o.revealOrder,d=o.tail;if(ot(e,i,o.children,a),o=et.current,(o&2)!==0)o=o&1|2,i.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r0(e,a,i);else if(e.tag===19)r0(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break e;for(;e.sibling===null;){if(e.return===null||e.return===i)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}switch($(et,o),c){case"forwards":for(a=i.child,c=null;a!==null;)e=a.alternate,e!==null&&el(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=i.child,i.child=null):(c=a.sibling,a.sibling=null),pf(i,!1,c,a,d);break;case"backwards":for(a=null,c=i.child,i.child=null;c!==null;){if(e=c.alternate,e!==null&&el(e)===null){i.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}pf(i,!0,a,null,d);break;case"together":pf(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Rn(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),ai|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(qa(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=xn(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=xn(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function mf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Po(e)))}function WT(e,i,a){switch(i.tag){case 3:we(i,i.stateNode.containerInfo),Xn(i,Je,e.memoizedState.cache),Ha();break;case 27:case 5:ki(i);break;case 4:we(i,i.stateNode.containerInfo);break;case 10:Xn(i,i.type,i.memoizedProps.value);break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Jn(i),i.flags|=128,null):(a&i.child.childLanes)!==0?i0(e,i,a):(Jn(i),e=Rn(e,i,a),e!==null?e.sibling:null);Jn(i);break;case 19:var c=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(qa(e,i,a,!1),o=(a&i.childLanes)!==0),c){if(o)return a0(e,i,a);i.flags|=128}if(c=i.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),$(et,et.current),o)break;return null;case 22:case 23:return i.lanes=0,Zg(e,i,a);case 24:Xn(i,Je,e.memoizedState.cache)}return Rn(e,i,a)}function s0(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)it=!0;else{if(!mf(e,a)&&(i.flags&128)===0)return it=!1,WT(e,i,a);it=(e.flags&131072)!==0}else it=!1,Se&&(i.flags&1048576)!==0&&zm(i,Uo,i.index);switch(i.lanes=0,i.tag){case 16:e:{e=i.pendingProps;var o=i.elementType,c=o._init;if(o=c(o._payload),i.type=o,typeof o=="function")wu(o)?(e=Xi(o,e),i.tag=1,i=t0(null,i,o,e,a)):(i.tag=0,i=lf(null,i,o,e,a));else{if(o!=null){if(c=o.$$typeof,c===Y){i.tag=11,i=Qg(null,i,o,e,a);break e}else if(c===X){i.tag=14,i=$g(null,i,o,e,a);break e}}throw i=Ue(o)||o,Error(s(306,i,""))}}return i;case 0:return lf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,c=Xi(o,i.pendingProps),t0(e,i,o,c,a);case 3:e:{if(we(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;c=d.element,Uu(e,i),Wa(i,o,null,a);var g=i.memoizedState;if(o=g.cache,Xn(i,Je,o),o!==d.cache&&Ou(i,[Je],a,!0),$a(),o=g.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:g.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=n0(e,i,o,a);break e}else if(o!==c){c=Ht(Error(s(424)),i),Ga(c),i=n0(e,i,o,a);break e}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(He=en(e.firstChild),bt=i,Se=!0,Hi=null,sn=!0,a=Pg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ha(),o===c){i=Rn(e,i,a);break e}ot(e,i,o,a)}i=i.child}return i;case 26:return il(e,i),e===null?(a=uv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Se||(a=i.type,e=i.pendingProps,o=yl(ie.current).createElement(a),o[ht]=i,o[Tt]=e,ct(o,a,e),nt(o),i.stateNode=o):i.memoizedState=uv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ki(i),e===null&&Se&&(o=i.stateNode=ov(i.type,i.pendingProps,ie.current),bt=i,sn=!0,c=He,ci(i.type)?(Qf=c,He=en(o.firstChild)):He=c),ot(e,i,i.pendingProps.children,a),il(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((c=o=He)&&(o=Ew(o,i.type,i.pendingProps,sn),o!==null?(i.stateNode=o,bt=i,He=en(o.firstChild),sn=!1,c=!0):c=!1),c||Gi(i)),ki(i),c=i.type,d=i.pendingProps,g=e!==null?e.memoizedProps:null,o=d.children,Yf(c,d)?o=null:g!==null&&Yf(c,g)&&(i.flags|=32),i.memoizedState!==null&&(c=Gu(e,i,GT,null,null,a),bs._currentValue=c),il(e,i),ot(e,i,o,a),i.child;case 6:return e===null&&Se&&((e=a=He)&&(a=Aw(a,i.pendingProps,sn),a!==null?(i.stateNode=a,bt=i,He=null,e=!0):e=!1),e||Gi(i)),null;case 13:return i0(e,i,a);case 4:return we(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=Pr(i,null,o,a):ot(e,i,o,a),i.child;case 11:return Qg(e,i,i.type,i.pendingProps,a);case 7:return ot(e,i,i.pendingProps,a),i.child;case 8:return ot(e,i,i.pendingProps.children,a),i.child;case 12:return ot(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Xn(i,i.type,o.value),ot(e,i,o.children,a),i.child;case 9:return c=i.type._context,o=i.pendingProps.children,Yi(i),c=pt(c),o=o(c),i.flags|=1,ot(e,i,o,a),i.child;case 14:return $g(e,i,i.type,i.pendingProps,a);case 15:return Wg(e,i,i.type,i.pendingProps,a);case 19:return a0(e,i,a);case 31:return o=i.pendingProps,a=i.mode,o={mode:o.mode,children:o.children},e===null?(a=rl(o,a),a.ref=i.ref,i.child=a,a.return=i,i=a):(a=xn(e.child,o),a.ref=i.ref,i.child=a,a.return=i,i=a),i;case 22:return Zg(e,i,a);case 24:return Yi(i),o=pt(Je),e===null?(c=Nu(),c===null&&(c=je,d=ju(),c.pooledCache=d,d.refCount++,d!==null&&(c.pooledCacheLanes|=a),c=d),i.memoizedState={parent:o,cache:c},zu(i),Xn(i,Je,c)):((e.lanes&a)!==0&&(Uu(e,i),Wa(i,null,null,a),$a()),c=e.memoizedState,d=i.memoizedState,c.parent!==o?(c={parent:o,cache:o},i.memoizedState=c,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=c),Xn(i,Je,o)):(o=d.cache,Xn(i,Je,o),o!==c.cache&&Ou(i,[Je],a,!0))),ot(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Dn(e){e.flags|=4}function o0(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!mv(i)){if(i=Ft.current,i!==null&&((ye&4194048)===ye?on!==null:(ye&62914560)!==ye&&(ye&536870912)===0||i!==on))throw Xa=Lu,qm;e.flags|=8192}}function al(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Ip():536870912,e.lanes|=i,Hr|=i)}function rs(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function ZT(e,i,a){var o=i.pendingProps;switch(Cu(i),i.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(i),null;case 1:return Pe(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),En(Je),dt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Va(i)?Dn(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Im())),Pe(i),null;case 26:return a=i.memoizedState,e===null?(Dn(i),a!==null?(Pe(i),o0(i,a)):(Pe(i),i.flags&=-16777217)):a?a!==e.memoizedState?(Dn(i),Pe(i),o0(i,a)):(Pe(i),i.flags&=-16777217):(e.memoizedProps!==o&&Dn(i),Pe(i),i.flags&=-16777217),null;case 27:yn(i),a=ie.current;var c=i.type;if(e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Dn(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Pe(i),null}e=te.current,Va(i)?Um(i):(e=ov(c,o,a),i.stateNode=e,Dn(i))}return Pe(i),null;case 5:if(yn(i),a=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Dn(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return Pe(i),null}if(e=te.current,Va(i))Um(i);else{switch(c=yl(ie.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof o.is=="string"?c.createElement("select",{is:o.is}):c.createElement("select"),o.multiple?e.multiple=!0:o.size&&(e.size=o.size);break;default:e=typeof o.is=="string"?c.createElement(a,{is:o.is}):c.createElement(a)}}e[ht]=i,e[Tt]=o;e:for(c=i.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===i)break e;for(;c.sibling===null;){if(c.return===null||c.return===i)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}i.stateNode=e;e:switch(ct(e,a,o),a){case"button":case"input":case"select":case"textarea":e=!!o.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Dn(i)}}return Pe(i),i.flags&=-16777217,null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Dn(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=ie.current,Va(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,c=bt,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[ht]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ev(e.nodeValue,a)),e||Gi(i)}else e=yl(e).createTextNode(o),e[ht]=i,i.stateNode=e}return Pe(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Va(i),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=i.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[ht]=i}else Ha(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Pe(i),c=!1}else c=Im(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return i.flags&256?(Cn(i),i):(Cn(i),null)}if(Cn(i),(i.flags&128)!==0)return i.lanes=a,i;if(a=o!==null,e=e!==null&&e.memoizedState!==null,a){o=i.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool);var d=null;o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==c&&(o.flags|=2048)}return a!==e&&a&&(i.child.flags|=8192),al(i,i.updateQueue),Pe(i),null;case 4:return dt(),e===null&&Bf(i.stateNode.containerInfo),Pe(i),null;case 10:return En(i.type),Pe(i),null;case 19:if(Q(et),c=i.memoizedState,c===null)return Pe(i),null;if(o=(i.flags&128)!==0,d=c.rendering,d===null)if(o)rs(c,!1);else{if(Ge!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=el(e),d!==null){for(i.flags|=128,rs(c,!1),e=d.updateQueue,i.updateQueue=e,al(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Lm(a,e),a=a.sibling;return $(et,et.current&1|2),i.child}e=e.sibling}c.tail!==null&&an()>ll&&(i.flags|=128,o=!0,rs(c,!1),i.lanes=4194304)}else{if(!o)if(e=el(d),e!==null){if(i.flags|=128,o=!0,e=e.updateQueue,i.updateQueue=e,al(i,e),rs(c,!0),c.tail===null&&c.tailMode==="hidden"&&!d.alternate&&!Se)return Pe(i),null}else 2*an()-c.renderingStartTime>ll&&a!==536870912&&(i.flags|=128,o=!0,rs(c,!1),i.lanes=4194304);c.isBackwards?(d.sibling=i.child,i.child=d):(e=c.last,e!==null?e.sibling=d:i.child=d,c.last=d)}return c.tail!==null?(i=c.tail,c.rendering=i,c.tail=i.sibling,c.renderingStartTime=an(),i.sibling=null,e=et.current,$(et,o?e&1|2:e&1),i):(Pe(i),null);case 22:case 23:return Cn(i),Vu(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(Pe(i),i.subtreeFlags&6&&(i.flags|=8192)):Pe(i),a=i.updateQueue,a!==null&&al(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&Q(Fi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),En(Je),Pe(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function JT(e,i){switch(Cu(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return En(Je),dt(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return yn(i),null;case 13:if(Cn(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ha()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Q(et),null;case 4:return dt(),null;case 10:return En(i.type),null;case 22:case 23:return Cn(i),Vu(),e!==null&&Q(Fi),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return En(Je),null;case 25:return null;default:return null}}function l0(e,i){switch(Cu(i),i.tag){case 3:En(Je),dt();break;case 26:case 27:case 5:yn(i);break;case 4:dt();break;case 13:Cn(i);break;case 19:Q(et);break;case 10:En(i.type);break;case 22:case 23:Cn(i),Vu(),e!==null&&Q(Fi);break;case 24:En(Je)}}function as(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var d=a.create,g=a.inst;o=d(),g.destroy=o}a=a.next}while(a!==c)}}catch(S){Me(i,i.return,S)}}function ti(e,i,a){try{var o=i.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var d=c.next;o=d;do{if((o.tag&e)===e){var g=o.inst,S=g.destroy;if(S!==void 0){g.destroy=void 0,c=i;var T=a,O=S;try{O()}catch(V){Me(c,T,V)}}}o=o.next}while(o!==d)}}catch(V){Me(i,i.return,V)}}function c0(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{$m(i,a)}catch(o){Me(e,e.return,o)}}}function u0(e,i,a){a.props=Xi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Me(e,i,o)}}function ss(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Me(e,i,c)}}function ln(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Me(e,i,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Me(e,i,c)}else a.current=null}function f0(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Me(e,e.return,c)}}function gf(e,i,a){try{var o=e.stateNode;Sw(o,e.type,a,i),o[Tt]=i}catch(c){Me(e,e.return,c)}}function d0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ci(e.type)||e.tag===4}function vf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||d0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ci(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yf(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=vl));else if(o!==4&&(o===27&&ci(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(yf(e,i,a),e=e.sibling;e!==null;)yf(e,i,a),e=e.sibling}function sl(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&ci(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(sl(e,i,a),e=e.sibling;e!==null;)sl(e,i,a),e=e.sibling}function h0(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=i.attributes;c.length;)i.removeAttributeNode(c[0]);ct(i,o,a),i[ht]=e,i[Tt]=a}catch(d){Me(e,e.return,d)}}var Mn=!1,Fe=!1,bf=!1,p0=typeof WeakSet=="function"?WeakSet:Set,rt=null;function ew(e,i){if(e=e.containerInfo,Gf=_l,e=Em(e),gu(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var g=0,S=-1,T=-1,O=0,V=0,G=e,L=null;t:for(;;){for(var U;G!==a||c!==0&&G.nodeType!==3||(S=g+c),G!==d||o!==0&&G.nodeType!==3||(T=g+o),G.nodeType===3&&(g+=G.nodeValue.length),(U=G.firstChild)!==null;)L=G,G=U;for(;;){if(G===e)break t;if(L===a&&++O===c&&(S=g),L===d&&++V===o&&(T=g),(U=G.nextSibling)!==null)break;G=L,L=G.parentNode}G=U}a=S===-1||T===-1?null:{start:S,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(qf={focusedElem:e,selectionRange:a},_l=!1,rt=i;rt!==null;)if(i=rt,e=i.child,(i.subtreeFlags&1024)!==0&&e!==null)e.return=i,rt=e;else for(;rt!==null;){switch(i=rt,d=i.alternate,e=i.flags,i.tag){case 0:break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,c=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var se=Xi(a.type,c,a.elementType===a.type);e=o.getSnapshotBeforeUpdate(se,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ne){Me(a,a.return,ne)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Kf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,rt=e;break}rt=i.return}}function m0(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ni(e,a),o&4&&as(5,a);break;case 1:if(ni(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(g){Me(a,a.return,g)}else{var c=Xi(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(c,i,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Me(a,a.return,g)}}o&64&&c0(a),o&512&&ss(a,a.return);break;case 3:if(ni(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{$m(e,i)}catch(g){Me(a,a.return,g)}}break;case 27:i===null&&o&4&&h0(a);case 26:case 5:ni(e,a),i===null&&o&4&&f0(a),o&512&&ss(a,a.return);break;case 12:ni(e,a);break;case 13:ni(e,a),o&4&&y0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=cw.bind(null,a),Cw(e,a))));break;case 22:if(o=a.memoizedState!==null||Mn,!o){i=i!==null&&i.memoizedState!==null||Fe,c=Mn;var d=Fe;Mn=o,(Fe=i)&&!d?ii(e,a,(a.subtreeFlags&8772)!==0):ni(e,a),Mn=c,Fe=d}break;case 30:break;default:ni(e,a)}}function g0(e){var i=e.alternate;i!==null&&(e.alternate=null,g0(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&Wc(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ze=null,Et=!1;function On(e,i,a){for(a=a.child;a!==null;)v0(e,i,a),a=a.sibling}function v0(e,i,a){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Ca,a)}catch{}switch(a.tag){case 26:Fe||ln(a,i),On(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Fe||ln(a,i);var o=ze,c=Et;ci(a.type)&&(ze=a.stateNode,Et=!1),On(e,i,a),ms(a.stateNode),ze=o,Et=c;break;case 5:Fe||ln(a,i);case 6:if(o=ze,c=Et,ze=null,On(e,i,a),ze=o,Et=c,ze!==null)if(Et)try{(ze.nodeType===9?ze.body:ze.nodeName==="HTML"?ze.ownerDocument.body:ze).removeChild(a.stateNode)}catch(d){Me(a,i,d)}else try{ze.removeChild(a.stateNode)}catch(d){Me(a,i,d)}break;case 18:ze!==null&&(Et?(e=ze,av(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ws(e)):av(ze,a.stateNode));break;case 4:o=ze,c=Et,ze=a.stateNode.containerInfo,Et=!0,On(e,i,a),ze=o,Et=c;break;case 0:case 11:case 14:case 15:Fe||ti(2,a,i),Fe||ti(4,a,i),On(e,i,a);break;case 1:Fe||(ln(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&u0(a,i,o)),On(e,i,a);break;case 21:On(e,i,a);break;case 22:Fe=(o=Fe)||a.memoizedState!==null,On(e,i,a),Fe=o;break;default:On(e,i,a)}}function y0(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ws(e)}catch(a){Me(i,i.return,a)}}function tw(e){switch(e.tag){case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new p0),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new p0),i;default:throw Error(s(435,e.tag))}}function Sf(e,i){var a=tw(e);i.forEach(function(o){var c=uw.bind(null,e,o);a.has(o)||(a.add(o),o.then(c,c))})}function Ot(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],d=e,g=i,S=g;e:for(;S!==null;){switch(S.tag){case 27:if(ci(S.type)){ze=S.stateNode,Et=!1;break e}break;case 5:ze=S.stateNode,Et=!1;break e;case 3:case 4:ze=S.stateNode.containerInfo,Et=!0;break e}S=S.return}if(ze===null)throw Error(s(160));v0(d,g,c),ze=null,Et=!1,d=c.alternate,d!==null&&(d.return=null),c.return=null}if(i.subtreeFlags&13878)for(i=i.child;i!==null;)b0(i,e),i=i.sibling}var Jt=null;function b0(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ot(i,e),jt(e),o&4&&(ti(3,e,e.return),as(3,e),ti(5,e,e.return));break;case 1:Ot(i,e),jt(e),o&512&&(Fe||a===null||ln(a,a.return)),o&64&&Mn&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=Jt;if(Ot(i,e),jt(e),o&512&&(Fe||a===null||ln(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){e:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(o){case"title":d=c.getElementsByTagName("title")[0],(!d||d[Ma]||d[ht]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=c.createElement(o),c.head.insertBefore(d,c.querySelector("head > title"))),ct(d,o,a),d[ht]=e,nt(d),o=d;break e;case"link":var g=hv("link","href",c).get(o+(a.href||""));if(g){for(var S=0;S<g.length;S++)if(d=g[S],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(S,1);break t}}d=c.createElement(o),ct(d,o,a),c.head.appendChild(d);break;case"meta":if(g=hv("meta","content",c).get(o+(a.content||""))){for(S=0;S<g.length;S++)if(d=g[S],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(S,1);break t}}d=c.createElement(o),ct(d,o,a),c.head.appendChild(d);break;default:throw Error(s(468,o))}d[ht]=e,nt(d),o=d}e.stateNode=o}else pv(c,e.type,e.stateNode);else e.stateNode=dv(c,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?pv(c,e.type,e.stateNode):dv(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&gf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Ot(i,e),jt(e),o&512&&(Fe||a===null||ln(a,a.return)),a!==null&&o&4&&gf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Ot(i,e),jt(e),o&512&&(Fe||a===null||ln(a,a.return)),e.flags&32){c=e.stateNode;try{Sr(c,"")}catch(U){Me(e,e.return,U)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,gf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(bf=!0);break;case 6:if(Ot(i,e),jt(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(U){Me(e,e.return,U)}}break;case 3:if(xl=null,c=Jt,Jt=bl(i.containerInfo),Ot(i,e),Jt=c,jt(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{ws(i.containerInfo)}catch(U){Me(e,e.return,U)}bf&&(bf=!1,S0(e));break;case 4:o=Jt,Jt=bl(e.stateNode.containerInfo),Ot(i,e),jt(e),Jt=o;break;case 12:Ot(i,e),jt(e);break;case 13:Ot(i,e),jt(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Af=an()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 22:c=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,O=Mn,V=Fe;if(Mn=O||c,Fe=V||T,Ot(i,e),Fe=V,Mn=O,jt(e),o&8192)e:for(i=e.stateNode,i._visibility=c?i._visibility&-2:i._visibility|1,c&&(a===null||T||Mn||Fe||Qi(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){T=a=i;try{if(d=T.stateNode,c)g=d.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{S=T.stateNode;var G=T.memoizedProps.style,L=G!=null&&G.hasOwnProperty("display")?G.display:null;S.style.display=L==null||typeof L=="boolean"?"":(""+L).trim()}}catch(U){Me(T,T.return,U)}}}else if(i.tag===6){if(a===null){T=i;try{T.stateNode.nodeValue=c?"":T.memoizedProps}catch(U){Me(T,T.return,U)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break e;for(;i.sibling===null;){if(i.return===null||i.return===e)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,Sf(e,a))));break;case 19:Ot(i,e),jt(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,Sf(e,o)));break;case 30:break;case 21:break;default:Ot(i,e),jt(e)}}function jt(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(d0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,d=vf(e);sl(e,d,c);break;case 5:var g=a.stateNode;a.flags&32&&(Sr(g,""),a.flags&=-33);var S=vf(e);sl(e,S,g);break;case 3:case 4:var T=a.stateNode.containerInfo,O=vf(e);yf(e,O,T);break;default:throw Error(s(161))}}catch(V){Me(e,e.return,V)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function S0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;S0(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function ni(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)m0(e,i.alternate,i),i=i.sibling}function Qi(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:ti(4,i,i.return),Qi(i);break;case 1:ln(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&u0(i,i.return,a),Qi(i);break;case 27:ms(i.stateNode);case 26:case 5:ln(i,i.return),Qi(i);break;case 22:i.memoizedState===null&&Qi(i);break;case 30:Qi(i);break;default:Qi(i)}e=e.sibling}}function ii(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,c=e,d=i,g=d.flags;switch(d.tag){case 0:case 11:case 15:ii(c,d,a),as(4,d);break;case 1:if(ii(c,d,a),o=d,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(O){Me(o,o.return,O)}if(o=d,c=o.updateQueue,c!==null){var S=o.stateNode;try{var T=c.shared.hiddenCallbacks;if(T!==null)for(c.shared.hiddenCallbacks=null,c=0;c<T.length;c++)Qm(T[c],S)}catch(O){Me(o,o.return,O)}}a&&g&64&&c0(d),ss(d,d.return);break;case 27:h0(d);case 26:case 5:ii(c,d,a),a&&o===null&&g&4&&f0(d),ss(d,d.return);break;case 12:ii(c,d,a);break;case 13:ii(c,d,a),a&&g&4&&y0(c,d);break;case 22:d.memoizedState===null&&ii(c,d,a),ss(d,d.return);break;case 30:break;default:ii(c,d,a)}i=i.sibling}}function xf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ya(a))}function Tf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ya(e))}function cn(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)x0(e,i,a,o),i=i.sibling}function x0(e,i,a,o){var c=i.flags;switch(i.tag){case 0:case 11:case 15:cn(e,i,a,o),c&2048&&as(9,i);break;case 1:cn(e,i,a,o);break;case 3:cn(e,i,a,o),c&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Ya(e)));break;case 12:if(c&2048){cn(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,g=d.id,S=d.onPostCommit;typeof S=="function"&&S(g,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){Me(i,i.return,T)}}else cn(e,i,a,o);break;case 13:cn(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,g=i.alternate,i.memoizedState!==null?d._visibility&2?cn(e,i,a,o):os(e,i):d._visibility&2?cn(e,i,a,o):(d._visibility|=2,Ir(e,i,a,o,(i.subtreeFlags&10256)!==0)),c&2048&&xf(g,i);break;case 24:cn(e,i,a,o),c&2048&&Tf(i.alternate,i);break;default:cn(e,i,a,o)}}function Ir(e,i,a,o,c){for(c=c&&(i.subtreeFlags&10256)!==0,i=i.child;i!==null;){var d=e,g=i,S=a,T=o,O=g.flags;switch(g.tag){case 0:case 11:case 15:Ir(d,g,S,T,c),as(8,g);break;case 23:break;case 22:var V=g.stateNode;g.memoizedState!==null?V._visibility&2?Ir(d,g,S,T,c):os(d,g):(V._visibility|=2,Ir(d,g,S,T,c)),c&&O&2048&&xf(g.alternate,g);break;case 24:Ir(d,g,S,T,c),c&&O&2048&&Tf(g.alternate,g);break;default:Ir(d,g,S,T,c)}i=i.sibling}}function os(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,c=o.flags;switch(o.tag){case 22:os(a,o),c&2048&&xf(o.alternate,o);break;case 24:os(a,o),c&2048&&Tf(o.alternate,o);break;default:os(a,o)}i=i.sibling}}var ls=8192;function Br(e){if(e.subtreeFlags&ls)for(e=e.child;e!==null;)T0(e),e=e.sibling}function T0(e){switch(e.tag){case 26:Br(e),e.flags&ls&&e.memoizedState!==null&&Bw(Jt,e.memoizedState,e.memoizedProps);break;case 5:Br(e);break;case 3:case 4:var i=Jt;Jt=bl(e.stateNode.containerInfo),Br(e),Jt=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ls,ls=16777216,Br(e),ls=i):Br(e));break;default:Br(e)}}function w0(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function cs(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];rt=o,E0(o,e)}w0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_0(e),e=e.sibling}function _0(e){switch(e.tag){case 0:case 11:case 15:cs(e),e.flags&2048&&ti(9,e,e.return);break;case 3:cs(e);break;case 12:cs(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,ol(e)):cs(e);break;default:cs(e)}}function ol(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];rt=o,E0(o,e)}w0(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:ti(8,i,i.return),ol(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,ol(i));break;default:ol(i)}e=e.sibling}}function E0(e,i){for(;rt!==null;){var a=rt;switch(a.tag){case 0:case 11:case 15:ti(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Ya(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,rt=o;else e:for(a=e;rt!==null;){o=rt;var c=o.sibling,d=o.return;if(g0(o),o===a){rt=null;break e}if(c!==null){c.return=d,rt=c;break e}rt=d}}}var nw={getCacheForType:function(e){var i=pt(Je),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a}},iw=typeof WeakMap=="function"?WeakMap:Map,Ee=0,je=null,ge=null,ye=0,Ae=0,kt=null,ri=!1,Vr=!1,wf=!1,jn=0,Ge=0,ai=0,$i=0,_f=0,Kt=0,Hr=0,us=null,At=null,Ef=!1,Af=0,ll=1/0,cl=null,si=null,lt=0,oi=null,Gr=null,qr=0,Cf=0,Rf=null,A0=null,fs=0,Df=null;function Nt(){if((Ee&2)!==0&&ye!==0)return ye&-ye;if(B.T!==null){var e=Or;return e!==0?e:zf()}return Hp()}function C0(){Kt===0&&(Kt=(ye&536870912)===0||Se?Pp():536870912);var e=Ft.current;return e!==null&&(e.flags|=32),Kt}function Lt(e,i,a){(e===je&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)&&(Yr(e,0),li(e,ye,Kt,!1)),Da(e,a),((Ee&2)===0||e!==je)&&(e===je&&((Ee&2)===0&&($i|=a),Ge===4&&li(e,ye,Kt,!1)),un(e))}function R0(e,i,a){if((Ee&6)!==0)throw Error(s(327));var o=!a&&(i&124)===0&&(i&e.expiredLanes)===0||Ra(e,i),c=o?sw(e,i):jf(e,i,!0),d=o;do{if(c===0){Vr&&!o&&li(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!rw(a)){c=jf(e,i,!1),d=!1;continue}if(c===2){if(d=i,e.errorRecoveryDisabledLanes&d)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){i=g;e:{var S=e;c=us;var T=S.current.memoizedState.isDehydrated;if(T&&(Yr(S,g).flags|=256),g=jf(S,g,!1),g!==2){if(wf&&!T){S.errorRecoveryDisabledLanes|=d,$i|=d,c=4;break e}d=At,At=c,d!==null&&(At===null?At=d:At.push.apply(At,d))}c=g}if(d=!1,c!==2)continue}}if(c===1){Yr(e,0),li(e,i,0,!0);break}e:{switch(o=e,d=c,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:li(o,i,Kt,!ri);break e;case 2:At=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(c=Af+300-an(),10<c)){if(li(o,i,Kt,!ri),So(o,0,!0)!==0)break e;o.timeoutHandle=iv(D0.bind(null,o,a,At,cl,Ef,i,Kt,$i,Hr,ri,d,2,-0,0),c);break e}D0(o,a,At,cl,Ef,i,Kt,$i,Hr,ri,d,0,-0,0)}}break}while(!0);un(e)}function D0(e,i,a,o,c,d,g,S,T,O,V,G,L,U){if(e.timeoutHandle=-1,G=i.subtreeFlags,(G&8192||(G&16785408)===16785408)&&(ys={stylesheets:null,count:0,unsuspend:Iw},T0(i),G=Vw(),G!==null)){e.cancelPendingCommit=G(z0.bind(null,e,i,d,a,o,c,g,S,T,V,1,L,U)),li(e,d,g,!O);return}z0(e,i,d,a,o,c,g,S,T)}function rw(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],d=c.getSnapshot;c=c.value;try{if(!Dt(d(),c))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function li(e,i,a,o){i&=~_f,i&=~$i,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var c=i;0<c;){var d=31-Rt(c),g=1<<d;o[d]=-1,c&=~g}a!==0&&Bp(e,a,i)}function ul(){return(Ee&6)===0?(ds(0),!1):!0}function Mf(){if(ge!==null){if(Ae===0)var e=ge.return;else e=ge,_n=qi=null,Fu(e),Ur=null,ns=0,e=ge;for(;e!==null;)l0(e.alternate,e),e=e.return;ge=null}}function Yr(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Tw(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Mf(),je=e,ge=a=xn(e.current,null),ye=i,Ae=0,kt=null,ri=!1,Vr=Ra(e,i),wf=!1,Hr=Kt=_f=$i=ai=Ge=0,At=us=null,Ef=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var c=31-Rt(o),d=1<<c;i|=e[c],o&=~d}return jn=i,jo(),a}function M0(e,i){de=null,B.H=Wo,i===Ka||i===Vo?(i=Km(),Ae=3):i===qm?(i=Km(),Ae=4):Ae=i===Xg?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,kt=i,ge===null&&(Ge=1,nl(e,Ht(i,e.current)))}function O0(){var e=B.H;return B.H=Wo,e===null?Wo:e}function j0(){var e=B.A;return B.A=nw,e}function Of(){Ge=4,ri||(ye&4194048)!==ye&&Ft.current!==null||(Vr=!0),(ai&134217727)===0&&($i&134217727)===0||je===null||li(je,ye,Kt,!1)}function jf(e,i,a){var o=Ee;Ee|=2;var c=O0(),d=j0();(je!==e||ye!==i)&&(cl=null,Yr(e,i)),i=!1;var g=Ge;e:do try{if(Ae!==0&&ge!==null){var S=ge,T=kt;switch(Ae){case 8:Mf(),g=6;break e;case 3:case 2:case 9:case 6:Ft.current===null&&(i=!0);var O=Ae;if(Ae=0,kt=null,Fr(e,S,T,O),a&&Vr){g=0;break e}break;default:O=Ae,Ae=0,kt=null,Fr(e,S,T,O)}}aw(),g=Ge;break}catch(V){M0(e,V)}while(!0);return i&&e.shellSuspendCounter++,_n=qi=null,Ee=o,B.H=c,B.A=d,ge===null&&(je=null,ye=0,jo()),g}function aw(){for(;ge!==null;)k0(ge)}function sw(e,i){var a=Ee;Ee|=2;var o=O0(),c=j0();je!==e||ye!==i?(cl=null,ll=an()+500,Yr(e,i)):Vr=Ra(e,i);e:do try{if(Ae!==0&&ge!==null){i=ge;var d=kt;t:switch(Ae){case 1:Ae=0,kt=null,Fr(e,i,d,1);break;case 2:case 9:if(Ym(d)){Ae=0,kt=null,N0(i);break}i=function(){Ae!==2&&Ae!==9||je!==e||(Ae=7),un(e)},d.then(i,i);break e;case 3:Ae=7;break e;case 4:Ae=5;break e;case 7:Ym(d)?(Ae=0,kt=null,N0(i)):(Ae=0,kt=null,Fr(e,i,d,7));break;case 5:var g=null;switch(ge.tag){case 26:g=ge.memoizedState;case 5:case 27:var S=ge;if(!g||mv(g)){Ae=0,kt=null;var T=S.sibling;if(T!==null)ge=T;else{var O=S.return;O!==null?(ge=O,fl(O)):ge=null}break t}}Ae=0,kt=null,Fr(e,i,d,5);break;case 6:Ae=0,kt=null,Fr(e,i,d,6);break;case 8:Mf(),Ge=6;break e;default:throw Error(s(462))}}ow();break}catch(V){M0(e,V)}while(!0);return _n=qi=null,B.H=o,B.A=c,Ee=a,ge!==null?0:(je=null,ye=0,jo(),Ge)}function ow(){for(;ge!==null&&!Dx();)k0(ge)}function k0(e){var i=s0(e.alternate,e,jn);e.memoizedProps=e.pendingProps,i===null?fl(e):ge=i}function N0(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=e0(a,i,i.pendingProps,i.type,void 0,ye);break;case 11:i=e0(a,i,i.pendingProps,i.type.render,i.ref,ye);break;case 5:Fu(i);default:l0(a,i),i=ge=Lm(i,jn),i=s0(a,i,jn)}e.memoizedProps=e.pendingProps,i===null?fl(e):ge=i}function Fr(e,i,a,o){_n=qi=null,Fu(i),Ur=null,ns=0;var c=i.return;try{if($T(e,c,i,a,ye)){Ge=1,nl(e,Ht(a,e.current)),ge=null;return}}catch(d){if(c!==null)throw ge=c,d;Ge=1,nl(e,Ht(a,e.current)),ge=null;return}i.flags&32768?(Se||o===1?e=!0:Vr||(ye&536870912)!==0?e=!1:(ri=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ft.current,o!==null&&o.tag===13&&(o.flags|=16384))),L0(i,e)):fl(i)}function fl(e){var i=e;do{if((i.flags&32768)!==0){L0(i,ri);return}e=i.return;var a=ZT(i.alternate,i,jn);if(a!==null){ge=a;return}if(i=i.sibling,i!==null){ge=i;return}ge=i=e}while(i!==null);Ge===0&&(Ge=5)}function L0(e,i){do{var a=JT(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);Ge=6,ge=null}function z0(e,i,a,o,c,d,g,S,T){e.cancelPendingCommit=null;do dl();while(lt!==0);if((Ee&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=xu,Ix(e,a,d,g,S,T),e===je&&(ge=je=null,ye=0),Gr=i,oi=e,qr=a,Cf=d,Rf=c,A0=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,fw(vo,function(){return V0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,c=F.p,F.p=2,g=Ee,Ee|=4;try{ew(e,i,a)}finally{Ee=g,F.p=c,B.T=o}}lt=1,U0(),P0(),I0()}}function U0(){if(lt===1){lt=0;var e=oi,i=Gr,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=B.T,B.T=null;var o=F.p;F.p=2;var c=Ee;Ee|=4;try{b0(i,e);var d=qf,g=Em(e.containerInfo),S=d.focusedElem,T=d.selectionRange;if(g!==S&&S&&S.ownerDocument&&_m(S.ownerDocument.documentElement,S)){if(T!==null&&gu(S)){var O=T.start,V=T.end;if(V===void 0&&(V=O),"selectionStart"in S)S.selectionStart=O,S.selectionEnd=Math.min(V,S.value.length);else{var G=S.ownerDocument||document,L=G&&G.defaultView||window;if(L.getSelection){var U=L.getSelection(),se=S.textContent.length,ne=Math.min(T.start,se),De=T.end===void 0?ne:Math.min(T.end,se);!U.extend&&ne>De&&(g=De,De=ne,ne=g);var R=wm(S,ne),E=wm(S,De);if(R&&E&&(U.rangeCount!==1||U.anchorNode!==R.node||U.anchorOffset!==R.offset||U.focusNode!==E.node||U.focusOffset!==E.offset)){var M=G.createRange();M.setStart(R.node,R.offset),U.removeAllRanges(),ne>De?(U.addRange(M),U.extend(E.node,E.offset)):(M.setEnd(E.node,E.offset),U.addRange(M))}}}}for(G=[],U=S;U=U.parentNode;)U.nodeType===1&&G.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof S.focus=="function"&&S.focus(),S=0;S<G.length;S++){var H=G[S];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}_l=!!Gf,qf=Gf=null}finally{Ee=c,F.p=o,B.T=a}}e.current=i,lt=2}}function P0(){if(lt===2){lt=0;var e=oi,i=Gr,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=B.T,B.T=null;var o=F.p;F.p=2;var c=Ee;Ee|=4;try{m0(e,i.alternate,i)}finally{Ee=c,F.p=o,B.T=a}}lt=3}}function I0(){if(lt===4||lt===3){lt=0,Mx();var e=oi,i=Gr,a=qr,o=A0;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?lt=5:(lt=0,Gr=oi=null,B0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(si=null),Qc(a),i=i.stateNode,Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Ca,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=B.T,c=F.p,F.p=2,B.T=null;try{for(var d=e.onRecoverableError,g=0;g<o.length;g++){var S=o[g];d(S.value,{componentStack:S.stack})}}finally{B.T=i,F.p=c}}(qr&3)!==0&&dl(),un(e),c=e.pendingLanes,(a&4194090)!==0&&(c&42)!==0?e===Df?fs++:(fs=0,Df=e):fs=0,ds(0)}}function B0(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Ya(i)))}function dl(e){return U0(),P0(),I0(),V0()}function V0(){if(lt!==5)return!1;var e=oi,i=Cf;Cf=0;var a=Qc(qr),o=B.T,c=F.p;try{F.p=32>a?32:a,B.T=null,a=Rf,Rf=null;var d=oi,g=qr;if(lt=0,Gr=oi=null,qr=0,(Ee&6)!==0)throw Error(s(331));var S=Ee;if(Ee|=4,_0(d.current),x0(d,d.current,g,a),Ee=S,ds(0,!1),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Ca,d)}catch{}return!0}finally{F.p=c,B.T=o,B0(e,i)}}function H0(e,i,a){i=Ht(a,i),i=of(e.stateNode,i,2),e=Wn(e,i,2),e!==null&&(Da(e,2),un(e))}function Me(e,i,a){if(e.tag===3)H0(e,e,a);else for(;i!==null;){if(i.tag===3){H0(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(si===null||!si.has(o))){e=Ht(a,e),a=Fg(2),o=Wn(i,a,2),o!==null&&(Kg(a,o,i,e),Da(o,2),un(o));break}}i=i.return}}function kf(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new iw;var c=new Set;o.set(i,c)}else c=o.get(i),c===void 0&&(c=new Set,o.set(i,c));c.has(a)||(wf=!0,c.add(a),e=lw.bind(null,e,i,a),i.then(e,e))}function lw(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,je===e&&(ye&a)===a&&(Ge===4||Ge===3&&(ye&62914560)===ye&&300>an()-Af?(Ee&2)===0&&Yr(e,0):_f|=a,Hr===ye&&(Hr=0)),un(e)}function G0(e,i){i===0&&(i=Ip()),e=Cr(e,i),e!==null&&(Da(e,i),un(e))}function cw(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),G0(e,a)}function uw(e,i){var a=0;switch(e.tag){case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),G0(e,a)}function fw(e,i){return Yc(e,i)}var hl=null,Kr=null,Nf=!1,pl=!1,Lf=!1,Wi=0;function un(e){e!==Kr&&e.next===null&&(Kr===null?hl=Kr=e:Kr=Kr.next=e),pl=!0,Nf||(Nf=!0,hw())}function ds(e,i){if(!Lf&&pl){Lf=!0;do for(var a=!1,o=hl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var d=0;else{var g=o.suspendedLanes,S=o.pingedLanes;d=(1<<31-Rt(42|e)+1)-1,d&=c&~(g&~S),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,K0(o,d))}else d=ye,d=So(o,o===je?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Ra(o,d)||(a=!0,K0(o,d));o=o.next}while(a);Lf=!1}}function dw(){q0()}function q0(){pl=Nf=!1;var e=0;Wi!==0&&(xw()&&(e=Wi),Wi=0);for(var i=an(),a=null,o=hl;o!==null;){var c=o.next,d=Y0(o,i);d===0?(o.next=null,a===null?hl=c:a.next=c,c===null&&(Kr=a)):(a=o,(e!==0||(d&3)!==0)&&(pl=!0)),o=c}ds(e)}function Y0(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var g=31-Rt(d),S=1<<g,T=c[g];T===-1?((S&a)===0||(S&o)!==0)&&(c[g]=Px(S,i)):T<=i&&(e.expiredLanes|=S),d&=~S}if(i=je,a=ye,a=So(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Ae===2||Ae===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Fc(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ra(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&Fc(o),Qc(a)){case 2:case 8:a=zp;break;case 32:a=vo;break;case 268435456:a=Up;break;default:a=vo}return o=F0.bind(null,e),a=Yc(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&Fc(o),e.callbackPriority=2,e.callbackNode=null,2}function F0(e,i){if(lt!==0&&lt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(dl()&&e.callbackNode!==a)return null;var o=ye;return o=So(e,e===je?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(R0(e,o,i),Y0(e,an()),e.callbackNode!=null&&e.callbackNode===a?F0.bind(null,e):null)}function K0(e,i){if(dl())return null;R0(e,i,!0)}function hw(){ww(function(){(Ee&6)!==0?Yc(Lp,dw):q0()})}function zf(){return Wi===0&&(Wi=Pp()),Wi}function X0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Eo(""+e)}function Q0(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function pw(e,i,a,o,c){if(i==="submit"&&a&&a.stateNode===c){var d=X0((c[Tt]||null).action),g=o.submitter;g&&(i=(i=g[Tt]||null)?X0(i.formAction):g.getAttribute("formAction"),i!==null&&(d=i,g=null));var S=new Do("action","action",null,o,c);e.push({event:S,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wi!==0){var T=g?Q0(c,g):new FormData(c);tf(a,{pending:!0,data:T,method:c.method,action:d},null,T)}}else typeof d=="function"&&(S.preventDefault(),T=g?Q0(c,g):new FormData(c),tf(a,{pending:!0,data:T,method:c.method,action:d},d,T))},currentTarget:c}]})}}for(var Uf=0;Uf<Su.length;Uf++){var Pf=Su[Uf],mw=Pf.toLowerCase(),gw=Pf[0].toUpperCase()+Pf.slice(1);Zt(mw,"on"+gw)}Zt(Rm,"onAnimationEnd"),Zt(Dm,"onAnimationIteration"),Zt(Mm,"onAnimationStart"),Zt("dblclick","onDoubleClick"),Zt("focusin","onFocus"),Zt("focusout","onBlur"),Zt(kT,"onTransitionRun"),Zt(NT,"onTransitionStart"),Zt(LT,"onTransitionCancel"),Zt(Om,"onTransitionEnd"),vr("onMouseEnter",["mouseout","mouseover"]),vr("onMouseLeave",["mouseout","mouseover"]),vr("onPointerEnter",["pointerout","pointerover"]),vr("onPointerLeave",["pointerout","pointerover"]),Li("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Li("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Li("onBeforeInput",["compositionend","keypress","textInput","paste"]),Li("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Li("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var hs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vw=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(hs));function $0(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var g=o.length-1;0<=g;g--){var S=o[g],T=S.instance,O=S.currentTarget;if(S=S.listener,T!==d&&c.isPropagationStopped())break e;d=S,c.currentTarget=O;try{d(c)}catch(V){tl(V)}c.currentTarget=null,d=T}else for(g=0;g<o.length;g++){if(S=o[g],T=S.instance,O=S.currentTarget,S=S.listener,T!==d&&c.isPropagationStopped())break e;d=S,c.currentTarget=O;try{d(c)}catch(V){tl(V)}c.currentTarget=null,d=T}}}}function ve(e,i){var a=i[$c];a===void 0&&(a=i[$c]=new Set);var o=e+"__bubble";a.has(o)||(W0(i,e,2,!1),a.add(o))}function If(e,i,a){var o=0;i&&(o|=4),W0(a,e,o,i)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Bf(e){if(!e[ml]){e[ml]=!0,qp.forEach(function(a){a!=="selectionchange"&&(vw.has(a)||If(a,!1,e),If(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[ml]||(i[ml]=!0,If("selectionchange",!1,i))}}function W0(e,i,a,o){switch(xv(i)){case 2:var c=qw;break;case 8:c=Yw;break;default:c=ed}a=c.bind(null,i,a,e),c=void 0,!ou||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(i,a,{capture:!0,passive:c}):e.addEventListener(i,a,!0):c!==void 0?e.addEventListener(i,a,{passive:c}):e.addEventListener(i,a,!1)}function Vf(e,i,a,o,c){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var g=o.tag;if(g===3||g===4){var S=o.stateNode.containerInfo;if(S===c)break;if(g===4)for(g=o.return;g!==null;){var T=g.tag;if((T===3||T===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;S!==null;){if(g=pr(S),g===null)return;if(T=g.tag,T===5||T===6||T===26||T===27){o=d=g;continue e}S=S.parentNode}}o=o.return}rm(function(){var O=d,V=au(a),G=[];e:{var L=jm.get(e);if(L!==void 0){var U=Do,se=e;switch(e){case"keypress":if(Co(a)===0)break e;case"keydown":case"keyup":U=fT;break;case"focusin":se="focus",U=fu;break;case"focusout":se="blur",U=fu;break;case"beforeblur":case"afterblur":U=fu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=om;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=pT;break;case Rm:case Dm:case Mm:U=nT;break;case Om:U=gT;break;case"scroll":case"scrollend":U=Wx;break;case"wheel":U=yT;break;case"copy":case"cut":case"paste":U=rT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=cm;break;case"toggle":case"beforetoggle":U=ST}var ne=(i&4)!==0,De=!ne&&(e==="scroll"||e==="scrollend"),R=ne?L!==null?L+"Capture":null:L;ne=[];for(var E=O,M;E!==null;){var H=E;if(M=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||M===null||R===null||(H=ja(E,R),H!=null&&ne.push(ps(E,H,M))),De)break;E=E.return}0<ne.length&&(L=new U(L,se,null,a,V),G.push({event:L,listeners:ne}))}}if((i&7)===0){e:{if(L=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",L&&a!==ru&&(se=a.relatedTarget||a.fromElement)&&(pr(se)||se[hr]))break e;if((U||L)&&(L=V.window===V?V:(L=V.ownerDocument)?L.defaultView||L.parentWindow:window,U?(se=a.relatedTarget||a.toElement,U=O,se=se?pr(se):null,se!==null&&(De=u(se),ne=se.tag,se!==De||ne!==5&&ne!==27&&ne!==6)&&(se=null)):(U=null,se=O),U!==se)){if(ne=om,H="onMouseLeave",R="onMouseEnter",E="mouse",(e==="pointerout"||e==="pointerover")&&(ne=cm,H="onPointerLeave",R="onPointerEnter",E="pointer"),De=U==null?L:Oa(U),M=se==null?L:Oa(se),L=new ne(H,E+"leave",U,a,V),L.target=De,L.relatedTarget=M,H=null,pr(V)===O&&(ne=new ne(R,E+"enter",se,a,V),ne.target=M,ne.relatedTarget=De,H=ne),De=H,U&&se)t:{for(ne=U,R=se,E=0,M=ne;M;M=Xr(M))E++;for(M=0,H=R;H;H=Xr(H))M++;for(;0<E-M;)ne=Xr(ne),E--;for(;0<M-E;)R=Xr(R),M--;for(;E--;){if(ne===R||R!==null&&ne===R.alternate)break t;ne=Xr(ne),R=Xr(R)}ne=null}else ne=null;U!==null&&Z0(G,L,U,ne,!1),se!==null&&De!==null&&Z0(G,De,se,ne,!0)}}e:{if(L=O?Oa(O):window,U=L.nodeName&&L.nodeName.toLowerCase(),U==="select"||U==="input"&&L.type==="file")var Z=vm;else if(mm(L))if(ym)Z=MT;else{Z=RT;var pe=CT}else U=L.nodeName,!U||U.toLowerCase()!=="input"||L.type!=="checkbox"&&L.type!=="radio"?O&&iu(O.elementType)&&(Z=vm):Z=DT;if(Z&&(Z=Z(e,O))){gm(G,Z,a,V);break e}pe&&pe(e,L,O),e==="focusout"&&O&&L.type==="number"&&O.memoizedProps.value!=null&&nu(L,"number",L.value)}switch(pe=O?Oa(O):window,e){case"focusin":(mm(pe)||pe.contentEditable==="true")&&(_r=pe,vu=O,Ba=null);break;case"focusout":Ba=vu=_r=null;break;case"mousedown":yu=!0;break;case"contextmenu":case"mouseup":case"dragend":yu=!1,Am(G,a,V);break;case"selectionchange":if(jT)break;case"keydown":case"keyup":Am(G,a,V)}var ee;if(hu)e:{switch(e){case"compositionstart":var re="onCompositionStart";break e;case"compositionend":re="onCompositionEnd";break e;case"compositionupdate":re="onCompositionUpdate";break e}re=void 0}else wr?hm(e,a)&&(re="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(re="onCompositionStart");re&&(um&&a.locale!=="ko"&&(wr||re!=="onCompositionStart"?re==="onCompositionEnd"&&wr&&(ee=am()):(Kn=V,lu="value"in Kn?Kn.value:Kn.textContent,wr=!0)),pe=gl(O,re),0<pe.length&&(re=new lm(re,e,null,a,V),G.push({event:re,listeners:pe}),ee?re.data=ee:(ee=pm(a),ee!==null&&(re.data=ee)))),(ee=TT?wT(e,a):_T(e,a))&&(re=gl(O,"onBeforeInput"),0<re.length&&(pe=new lm("onBeforeInput","beforeinput",null,a,V),G.push({event:pe,listeners:re}),pe.data=ee)),pw(G,e,O,a,V)}$0(G,i)})}function ps(e,i,a){return{instance:e,listener:i,currentTarget:a}}function gl(e,i){for(var a=i+"Capture",o=[];e!==null;){var c=e,d=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||d===null||(c=ja(e,a),c!=null&&o.unshift(ps(e,c,d)),c=ja(e,i),c!=null&&o.push(ps(e,c,d))),e.tag===3)return o;e=e.return}return[]}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Z0(e,i,a,o,c){for(var d=i._reactName,g=[];a!==null&&a!==o;){var S=a,T=S.alternate,O=S.stateNode;if(S=S.tag,T!==null&&T===o)break;S!==5&&S!==26&&S!==27||O===null||(T=O,c?(O=ja(a,d),O!=null&&g.unshift(ps(a,O,T))):c||(O=ja(a,d),O!=null&&g.push(ps(a,O,T)))),a=a.return}g.length!==0&&e.push({event:i,listeners:g})}var yw=/\r\n?/g,bw=/\u0000|\uFFFD/g;function J0(e){return(typeof e=="string"?e:""+e).replace(yw,`
`).replace(bw,"")}function ev(e,i){return i=J0(i),J0(e)===i}function vl(){}function Re(e,i,a,o,c,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||Sr(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&Sr(e,""+o);break;case"className":To(e,"class",o);break;case"tabIndex":To(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":To(e,a,o);break;case"style":nm(e,o,d);break;case"data":if(i!=="object"){To(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Eo(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Re(e,i,"name",c.name,c,null),Re(e,i,"formEncType",c.formEncType,c,null),Re(e,i,"formMethod",c.formMethod,c,null),Re(e,i,"formTarget",c.formTarget,c,null)):(Re(e,i,"encType",c.encType,c,null),Re(e,i,"method",c.method,c,null),Re(e,i,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=Eo(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=vl);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=Eo(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),xo(e,"popover",o);break;case"xlinkActuate":bn(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":bn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":bn(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":bn(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":bn(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":bn(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":bn(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":bn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":bn(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":xo(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qx.get(a)||a,xo(e,a,o))}}function Hf(e,i,a,o,c,d){switch(a){case"style":nm(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?Sr(e,o):(typeof o=="number"||typeof o=="bigint")&&Sr(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=vl);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Yp.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),i=a.slice(2,c?a.length-7:void 0),d=e[Tt]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,c),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,c);break e}a in e?e[a]=o:o===!0?e.setAttribute(a,""):xo(e,a,o)}}}function ct(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,d;for(d in a)if(a.hasOwnProperty(d)){var g=a[d];if(g!=null)switch(d){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Re(e,i,d,g,a,null)}}c&&Re(e,i,"srcSet",a.srcSet,a,null),o&&Re(e,i,"src",a.src,a,null);return;case"input":ve("invalid",e);var S=d=g=c=null,T=null,O=null;for(o in a)if(a.hasOwnProperty(o)){var V=a[o];if(V!=null)switch(o){case"name":c=V;break;case"type":g=V;break;case"checked":T=V;break;case"defaultChecked":O=V;break;case"value":d=V;break;case"defaultValue":S=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(s(137,i));break;default:Re(e,i,o,V,a,null)}}Zp(e,d,S,T,O,g,c,!1),wo(e);return;case"select":ve("invalid",e),o=g=d=null;for(c in a)if(a.hasOwnProperty(c)&&(S=a[c],S!=null))switch(c){case"value":d=S;break;case"defaultValue":g=S;break;case"multiple":o=S;default:Re(e,i,c,S,a,null)}i=d,a=g,e.multiple=!!o,i!=null?br(e,!!o,i,!1):a!=null&&br(e,!!o,a,!0);return;case"textarea":ve("invalid",e),d=c=o=null;for(g in a)if(a.hasOwnProperty(g)&&(S=a[g],S!=null))switch(g){case"value":o=S;break;case"defaultValue":c=S;break;case"children":d=S;break;case"dangerouslySetInnerHTML":if(S!=null)throw Error(s(91));break;default:Re(e,i,g,S,a,null)}em(e,o,c,d),wo(e);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(o=a[T],o!=null))switch(T){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Re(e,i,T,o,a,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<hs.length;o++)ve(hs[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(O in a)if(a.hasOwnProperty(O)&&(o=a[O],o!=null))switch(O){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Re(e,i,O,o,a,null)}return;default:if(iu(i)){for(V in a)a.hasOwnProperty(V)&&(o=a[V],o!==void 0&&Hf(e,i,V,o,a,void 0));return}}for(S in a)a.hasOwnProperty(S)&&(o=a[S],o!=null&&Re(e,i,S,o,a,null))}function Sw(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,d=null,g=null,S=null,T=null,O=null,V=null;for(U in a){var G=a[U];if(a.hasOwnProperty(U)&&G!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":T=G;default:o.hasOwnProperty(U)||Re(e,i,U,null,o,G)}}for(var L in o){var U=o[L];if(G=a[L],o.hasOwnProperty(L)&&(U!=null||G!=null))switch(L){case"type":d=U;break;case"name":c=U;break;case"checked":O=U;break;case"defaultChecked":V=U;break;case"value":g=U;break;case"defaultValue":S=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(s(137,i));break;default:U!==G&&Re(e,i,L,U,o,G)}}tu(e,g,S,T,O,V,d,c);return;case"select":U=g=S=L=null;for(d in a)if(T=a[d],a.hasOwnProperty(d)&&T!=null)switch(d){case"value":break;case"multiple":U=T;default:o.hasOwnProperty(d)||Re(e,i,d,null,o,T)}for(c in o)if(d=o[c],T=a[c],o.hasOwnProperty(c)&&(d!=null||T!=null))switch(c){case"value":L=d;break;case"defaultValue":S=d;break;case"multiple":g=d;default:d!==T&&Re(e,i,c,d,o,T)}i=S,a=g,o=U,L!=null?br(e,!!a,L,!1):!!o!=!!a&&(i!=null?br(e,!!a,i,!0):br(e,!!a,a?[]:"",!1));return;case"textarea":U=L=null;for(S in a)if(c=a[S],a.hasOwnProperty(S)&&c!=null&&!o.hasOwnProperty(S))switch(S){case"value":break;case"children":break;default:Re(e,i,S,null,o,c)}for(g in o)if(c=o[g],d=a[g],o.hasOwnProperty(g)&&(c!=null||d!=null))switch(g){case"value":L=c;break;case"defaultValue":U=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==d&&Re(e,i,g,c,o,d)}Jp(e,L,U);return;case"option":for(var se in a)if(L=a[se],a.hasOwnProperty(se)&&L!=null&&!o.hasOwnProperty(se))switch(se){case"selected":e.selected=!1;break;default:Re(e,i,se,null,o,L)}for(T in o)if(L=o[T],U=a[T],o.hasOwnProperty(T)&&L!==U&&(L!=null||U!=null))switch(T){case"selected":e.selected=L&&typeof L!="function"&&typeof L!="symbol";break;default:Re(e,i,T,L,o,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)L=a[ne],a.hasOwnProperty(ne)&&L!=null&&!o.hasOwnProperty(ne)&&Re(e,i,ne,null,o,L);for(O in o)if(L=o[O],U=a[O],o.hasOwnProperty(O)&&L!==U&&(L!=null||U!=null))switch(O){case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,i));break;default:Re(e,i,O,L,o,U)}return;default:if(iu(i)){for(var De in a)L=a[De],a.hasOwnProperty(De)&&L!==void 0&&!o.hasOwnProperty(De)&&Hf(e,i,De,void 0,o,L);for(V in o)L=o[V],U=a[V],!o.hasOwnProperty(V)||L===U||L===void 0&&U===void 0||Hf(e,i,V,L,o,U);return}}for(var R in a)L=a[R],a.hasOwnProperty(R)&&L!=null&&!o.hasOwnProperty(R)&&Re(e,i,R,null,o,L);for(G in o)L=o[G],U=a[G],!o.hasOwnProperty(G)||L===U||L==null&&U==null||Re(e,i,G,L,o,U)}var Gf=null,qf=null;function yl(e){return e.nodeType===9?e:e.ownerDocument}function tv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Yf(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ff=null;function xw(){var e=window.event;return e&&e.type==="popstate"?e===Ff?!1:(Ff=e,!0):(Ff=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,Tw=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,ww=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(e){return rv.resolve(null).then(e).catch(_w)}:iv;function _w(e){setTimeout(function(){throw e})}function ci(e){return e==="head"}function av(e,i){var a=i,o=0,c=0;do{var d=a.nextSibling;if(e.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(0<o&&8>o){a=o;var g=e.ownerDocument;if(a&1&&ms(g.documentElement),a&2&&ms(g.body),a&4)for(a=g.head,ms(a),g=a.firstChild;g;){var S=g.nextSibling,T=g.nodeName;g[Ma]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&g.rel.toLowerCase()==="stylesheet"||a.removeChild(g),g=S}}if(c===0){e.removeChild(d),ws(i);return}c--}else a==="$"||a==="$?"||a==="$!"?c++:o=a.charCodeAt(0)-48;else o=0;a=d}while(a);ws(i)}function Kf(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kf(a),Wc(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ew(e,i,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ma])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=en(e.nextSibling),e===null)break}return null}function Aw(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=en(e.nextSibling),e===null))return null;return e}function Xf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState==="complete"}function Cw(e,i){var a=e.ownerDocument;if(e.data!=="$?"||a.readyState==="complete")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function en(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="F!"||i==="F")break;if(i==="/$")return null}}return e}var Qf=null;function sv(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return e;i--}else a==="/$"&&i++}e=e.previousSibling}return null}function ov(e,i,a){switch(i=yl(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function ms(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);Wc(e)}var Xt=new Map,lv=new Set;function bl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var kn=F.d;F.d={f:Rw,r:Dw,D:Mw,C:Ow,L:jw,m:kw,X:Lw,S:Nw,M:zw};function Rw(){var e=kn.f(),i=ul();return e||i}function Dw(e){var i=mr(e);i!==null&&i.tag===5&&i.type==="form"?Rg(i):kn.r(e)}var Qr=typeof document>"u"?null:document;function cv(e,i,a){var o=Qr;if(o&&typeof i=="string"&&i){var c=Vt(i);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),lv.has(c)||(lv.add(c),e={rel:e,crossOrigin:a,href:i},o.querySelector(c)===null&&(i=o.createElement("link"),ct(i,"link",e),nt(i),o.head.appendChild(i)))}}function Mw(e){kn.D(e),cv("dns-prefetch",e,null)}function Ow(e,i){kn.C(e,i),cv("preconnect",e,i)}function jw(e,i,a){kn.L(e,i,a);var o=Qr;if(o&&e&&i){var c='link[rel="preload"][as="'+Vt(i)+'"]';i==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Vt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Vt(a.imageSizes)+'"]')):c+='[href="'+Vt(e)+'"]';var d=c;switch(i){case"style":d=$r(e);break;case"script":d=Wr(e)}Xt.has(d)||(e=v({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Xt.set(d,e),o.querySelector(c)!==null||i==="style"&&o.querySelector(gs(d))||i==="script"&&o.querySelector(vs(d))||(i=o.createElement("link"),ct(i,"link",e),nt(i),o.head.appendChild(i)))}}function kw(e,i){kn.m(e,i);var a=Qr;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",c='link[rel="modulepreload"][as="'+Vt(o)+'"][href="'+Vt(e)+'"]',d=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Wr(e)}if(!Xt.has(d)&&(e=v({rel:"modulepreload",href:e},i),Xt.set(d,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vs(d)))return}o=a.createElement("link"),ct(o,"link",e),nt(o),a.head.appendChild(o)}}}function Nw(e,i,a){kn.S(e,i,a);var o=Qr;if(o&&e){var c=gr(o).hoistableStyles,d=$r(e);i=i||"default";var g=c.get(d);if(!g){var S={loading:0,preload:null};if(g=o.querySelector(gs(d)))S.loading=5;else{e=v({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Xt.get(d))&&$f(e,a);var T=g=o.createElement("link");nt(T),ct(T,"link",e),T._p=new Promise(function(O,V){T.onload=O,T.onerror=V}),T.addEventListener("load",function(){S.loading|=1}),T.addEventListener("error",function(){S.loading|=2}),S.loading|=4,Sl(g,i,o)}g={type:"stylesheet",instance:g,count:1,state:S},c.set(d,g)}}}function Lw(e,i){kn.X(e,i);var a=Qr;if(a&&e){var o=gr(a).hoistableScripts,c=Wr(e),d=o.get(c);d||(d=a.querySelector(vs(c)),d||(e=v({src:e,async:!0},i),(i=Xt.get(c))&&Wf(e,i),d=a.createElement("script"),nt(d),ct(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function zw(e,i){kn.M(e,i);var a=Qr;if(a&&e){var o=gr(a).hoistableScripts,c=Wr(e),d=o.get(c);d||(d=a.querySelector(vs(c)),d||(e=v({src:e,async:!0,type:"module"},i),(i=Xt.get(c))&&Wf(e,i),d=a.createElement("script"),nt(d),ct(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(c,d))}}function uv(e,i,a,o){var c=(c=ie.current)?bl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=$r(a.href),a=gr(c).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$r(a.href);var d=gr(c).hoistableStyles,g=d.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,g),(d=c.querySelector(gs(e)))&&!d._p&&(g.instance=d,g.state.loading=5),Xt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xt.set(e,a),d||Uw(c,e,a,g.state))),i&&o===null)throw Error(s(528,""));return g}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Wr(a),a=gr(c).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $r(e){return'href="'+Vt(e)+'"'}function gs(e){return'link[rel="stylesheet"]['+e+"]"}function fv(e){return v({},e,{"data-precedence":e.precedence,precedence:null})}function Uw(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),ct(i,"link",a),nt(i),e.head.appendChild(i))}function Wr(e){return'[src="'+Vt(e)+'"]'}function vs(e){return"script[async]"+e}function dv(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+Vt(a.href)+'"]');if(o)return i.instance=o,nt(o),o;var c=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),nt(o),ct(o,"style",c),Sl(o,a.precedence,e),i.instance=o;case"stylesheet":c=$r(a.href);var d=e.querySelector(gs(c));if(d)return i.state.loading|=4,i.instance=d,nt(d),d;o=fv(a),(c=Xt.get(c))&&$f(o,c),d=(e.ownerDocument||e).createElement("link"),nt(d);var g=d;return g._p=new Promise(function(S,T){g.onload=S,g.onerror=T}),ct(d,"link",o),i.state.loading|=4,Sl(d,a.precedence,e),i.instance=d;case"script":return d=Wr(a.src),(c=e.querySelector(vs(d)))?(i.instance=c,nt(c),c):(o=a,(c=Xt.get(d))&&(o=v({},a),Wf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),nt(c),ct(c,"link",o),e.head.appendChild(c),i.instance=c);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Sl(o,a.precedence,e));return i.instance}function Sl(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,d=c,g=0;g<o.length;g++){var S=o[g];if(S.dataset.precedence===i)d=S;else if(d!==c)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function $f(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Wf(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var xl=null;function hv(e,i,a){if(xl===null){var o=new Map,c=xl=new Map;c.set(a,o)}else c=xl,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var d=a[c];if(!(d[Ma]||d[ht]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var g=d.getAttribute(i)||"";g=e+g;var S=o.get(g);S?S.push(d):o.set(g,[d])}}return o}function pv(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Pw(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function mv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}var ys=null;function Iw(){}function Bw(e,i,a){if(ys===null)throw Error(s(475));var o=ys;if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var c=$r(a.href),d=e.querySelector(gs(c));if(d){e=d._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(o.count++,o=Tl.bind(o),e.then(o,o)),i.state.loading|=4,i.instance=d,nt(d);return}d=e.ownerDocument||e,a=fv(a),(c=Xt.get(c))&&$f(a,c),d=d.createElement("link"),nt(d);var g=d;g._p=new Promise(function(S,T){g.onload=S,g.onerror=T}),ct(d,"link",a),i.instance=d}o.stylesheets===null&&(o.stylesheets=new Map),o.stylesheets.set(i,e),(e=i.state.preload)&&(i.state.loading&3)===0&&(o.count++,i=Tl.bind(o),e.addEventListener("load",i),e.addEventListener("error",i))}}function Vw(){if(ys===null)throw Error(s(475));var e=ys;return e.stylesheets&&e.count===0&&Zf(e,e.stylesheets),0<e.count?function(i){var a=setTimeout(function(){if(e.stylesheets&&Zf(e,e.stylesheets),e.unsuspend){var o=e.unsuspend;e.unsuspend=null,o()}},6e4);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a)}}:null}function Tl(){if(this.count--,this.count===0){if(this.stylesheets)Zf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wl=null;function Zf(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wl=new Map,i.forEach(Hw,e),wl=null,Tl.call(e))}function Hw(e,i){if(!(i.state.loading&4)){var a=wl.get(e);if(a)var o=a.get(null);else{a=new Map,wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<c.length;d++){var g=c[d];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),o=g)}o&&a.set(null,o)}c=i.instance,g=c.getAttribute("data-precedence"),d=a.get(g)||o,d===o&&a.set(null,c),a.set(g,c),this.count++,o=Tl.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),d?d.parentNode.insertBefore(c,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),i.state.loading|=4}}var bs={$$typeof:P,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Gw(e,i,a,o,c,d,g,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Kc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kc(0),this.hiddenUpdates=Kc(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=d,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function gv(e,i,a,o,c,d,g,S,T,O,V,G){return e=new Gw(e,i,a,g,S,T,O,G),i=1,d===!0&&(i|=24),d=Mt(3,null,null,i),e.current=d,d.stateNode=e,i=ju(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},zu(d),e}function vv(e){return e?(e=Rr,e):Rr}function yv(e,i,a,o,c,d){c=vv(c),o.context===null?o.context=c:o.pendingContext=c,o=$n(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Wn(e,o,i),a!==null&&(Lt(a,e,i),Qa(a,e,i))}function bv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Jf(e,i){bv(e,i),(e=e.alternate)&&bv(e,i)}function Sv(e){if(e.tag===13){var i=Cr(e,67108864);i!==null&&Lt(i,e,67108864),Jf(e,67108864)}}var _l=!0;function qw(e,i,a,o){var c=B.T;B.T=null;var d=F.p;try{F.p=2,ed(e,i,a,o)}finally{F.p=d,B.T=c}}function Yw(e,i,a,o){var c=B.T;B.T=null;var d=F.p;try{F.p=8,ed(e,i,a,o)}finally{F.p=d,B.T=c}}function ed(e,i,a,o){if(_l){var c=td(o);if(c===null)Vf(e,i,o,El,a),Tv(e,o);else if(Kw(c,e,i,a,o))o.stopPropagation();else if(Tv(e,o),i&4&&-1<Fw.indexOf(e)){for(;c!==null;){var d=mr(c);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var g=Ni(d.pendingLanes);if(g!==0){var S=d;for(S.pendingLanes|=2,S.entangledLanes|=2;g;){var T=1<<31-Rt(g);S.entanglements[1]|=T,g&=~T}un(d),(Ee&6)===0&&(ll=an()+500,ds(0))}}break;case 13:S=Cr(d,2),S!==null&&Lt(S,d,2),ul(),Jf(d,2)}if(d=td(o),d===null&&Vf(e,i,o,El,a),d===c)break;c=d}c!==null&&o.stopPropagation()}else Vf(e,i,o,null,a)}}function td(e){return e=au(e),nd(e)}var El=null;function nd(e){if(El=null,e=pr(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return El=e,null}function xv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ox()){case Lp:return 2;case zp:return 8;case vo:case jx:return 32;case Up:return 268435456;default:return 32}default:return 32}}var id=!1,ui=null,fi=null,di=null,Ss=new Map,xs=new Map,hi=[],Fw="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Tv(e,i){switch(e){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":fi=null;break;case"mouseover":case"mouseout":di=null;break;case"pointerover":case"pointerout":Ss.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(i.pointerId)}}function Ts(e,i,a,o,c,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[c]},i!==null&&(i=mr(i),i!==null&&Sv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,c!==null&&i.indexOf(c)===-1&&i.push(c),e)}function Kw(e,i,a,o,c){switch(i){case"focusin":return ui=Ts(ui,e,i,a,o,c),!0;case"dragenter":return fi=Ts(fi,e,i,a,o,c),!0;case"mouseover":return di=Ts(di,e,i,a,o,c),!0;case"pointerover":var d=c.pointerId;return Ss.set(d,Ts(Ss.get(d)||null,e,i,a,o,c)),!0;case"gotpointercapture":return d=c.pointerId,xs.set(d,Ts(xs.get(d)||null,e,i,a,o,c)),!0}return!1}function wv(e){var i=pr(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Bx(e.priority,function(){if(a.tag===13){var o=Nt();o=Xc(o);var c=Cr(a,o);c!==null&&Lt(c,a,o),Jf(a,o)}});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Al(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=td(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);ru=o,a.target.dispatchEvent(o),ru=null}else return i=mr(a),i!==null&&Sv(i),e.blockedOn=a,!1;i.shift()}return!0}function _v(e,i,a){Al(e)&&a.delete(i)}function Xw(){id=!1,ui!==null&&Al(ui)&&(ui=null),fi!==null&&Al(fi)&&(fi=null),di!==null&&Al(di)&&(di=null),Ss.forEach(_v),xs.forEach(_v)}function Cl(e,i){e.blockedOn===i&&(e.blockedOn=null,id||(id=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,Xw)))}var Rl=null;function Ev(e){Rl!==e&&(Rl=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Rl===e&&(Rl=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],c=e[i+2];if(typeof o!="function"){if(nd(o||a)===null)continue;break}var d=mr(a);d!==null&&(e.splice(i,3),i-=3,tf(d,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function ws(e){function i(T){return Cl(T,e)}ui!==null&&Cl(ui,e),fi!==null&&Cl(fi,e),di!==null&&Cl(di,e),Ss.forEach(i),xs.forEach(i);for(var a=0;a<hi.length;a++){var o=hi[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<hi.length&&(a=hi[0],a.blockedOn===null);)wv(a),a.blockedOn===null&&hi.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],d=a[o+1],g=c[Tt]||null;if(typeof d=="function")g||Ev(a);else if(g){var S=null;if(d&&d.hasAttribute("formAction")){if(c=d,g=d[Tt]||null)S=g.formAction;else if(nd(c)!==null)continue}else S=g.action;typeof S=="function"?a[o+1]=S:(a.splice(o,3),o-=3),Ev(a)}}}function rd(e){this._internalRoot=e}Dl.prototype.render=rd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Nt();yv(a,o,e,i,null,null)},Dl.prototype.unmount=rd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;yv(e.current,2,null,e,null,null),ul(),i[hr]=null}};function Dl(e){this._internalRoot=e}Dl.prototype.unstable_scheduleHydration=function(e){if(e){var i=Hp();e={blockedOn:null,target:e,priority:i};for(var a=0;a<hi.length&&i!==0&&i<hi[a].priority;a++);hi.splice(a,0,e),a===0&&wv(e)}};var Av=t.version;if(Av!=="19.1.0")throw Error(s(527,Av,"19.1.0"));F.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(i),e=e!==null?m(e):null,e=e===null?null:e.stateNode,e};var Qw={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Ca=Ml.inject(Qw),Ct=Ml}catch{}}return Es.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",c=Hg,d=Gg,g=qg,S=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(g=i.onRecoverableError),i.unstable_transitionCallbacks!==void 0&&(S=i.unstable_transitionCallbacks)),i=gv(e,1,!1,null,null,a,o,c,d,g,S,null),e[hr]=i.current,Bf(e),new rd(i)},Es.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,c="",d=Hg,g=Gg,S=qg,T=null,O=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(S=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(T=a.unstable_transitionCallbacks),a.formState!==void 0&&(O=a.formState)),i=gv(e,1,!0,i,a??null,o,c,d,g,S,T,O),i.context=vv(null),a=i.current,o=Nt(),o=Xc(o),c=$n(o),c.callback=null,Wn(a,c,o),a=o,i.current.lanes=a,Da(i,a),un(i),e[hr]=i.current,Bf(e),new Dl(i)},Es.version="19.1.0",Es}var zv;function o_(){if(zv)return od.exports;zv=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(t){console.error(t)}}return n(),od.exports=s_(),od.exports}var l_=o_();vb();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hs(){return Hs=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Hs.apply(this,arguments)}var Ti;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(Ti||(Ti={}));const Uv="popstate";function c_(n){n===void 0&&(n={});function t(l,u){let{pathname:f="/",search:p="",hash:h=""}=cr(l.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Fd("",{pathname:f,search:p,hash:h},u.state&&u.state.usr||null,u.state&&u.state.key||"default")}function r(l,u){let f=l.document.querySelector("base"),p="";if(f&&f.getAttribute("href")){let h=l.location.href,m=h.indexOf("#");p=m===-1?h:h.slice(0,m)}return p+"#"+(typeof u=="string"?u:sc(u))}function s(l,u){kh(l.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(u)+")")}return f_(t,r,s,n)}function Ze(n,t){if(n===!1||n===null||typeof n>"u")throw new Error(t)}function kh(n,t){if(!n){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function u_(){return Math.random().toString(36).substr(2,8)}function Pv(n,t){return{usr:n.state,key:n.key,idx:t}}function Fd(n,t,r,s){return r===void 0&&(r=null),Hs({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof t=="string"?cr(t):t,{state:r,key:t&&t.key||s||u_()})}function sc(n){let{pathname:t="/",search:r="",hash:s=""}=n;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),s&&s!=="#"&&(t+=s.charAt(0)==="#"?s:"#"+s),t}function cr(n){let t={};if(n){let r=n.indexOf("#");r>=0&&(t.hash=n.substr(r),n=n.substr(0,r));let s=n.indexOf("?");s>=0&&(t.search=n.substr(s),n=n.substr(0,s)),n&&(t.pathname=n)}return t}function f_(n,t,r,s){s===void 0&&(s={});let{window:l=document.defaultView,v5Compat:u=!1}=s,f=l.history,p=Ti.Pop,h=null,m=v();m==null&&(m=0,f.replaceState(Hs({},f.state,{idx:m}),""));function v(){return(f.state||{idx:null}).idx}function b(){p=Ti.Pop;let k=v(),z=k==null?null:k-m;m=k,h&&h({action:p,location:j.location,delta:z})}function x(k,z){p=Ti.Push;let N=Fd(j.location,k,z);r&&r(N,k),m=v()+1;let P=Pv(N,m),Y=j.createHref(N);try{f.pushState(P,"",Y)}catch(I){if(I instanceof DOMException&&I.name==="DataCloneError")throw I;l.location.assign(Y)}u&&h&&h({action:p,location:j.location,delta:1})}function w(k,z){p=Ti.Replace;let N=Fd(j.location,k,z);r&&r(N,k),m=v();let P=Pv(N,m),Y=j.createHref(N);f.replaceState(P,"",Y),u&&h&&h({action:p,location:j.location,delta:0})}function D(k){let z=l.location.origin!=="null"?l.location.origin:l.location.href,N=typeof k=="string"?k:sc(k);return N=N.replace(/ $/,"%20"),Ze(z,"No window.location.(origin|href) available to create URL for href: "+N),new URL(N,z)}let j={get action(){return p},get location(){return n(l,f)},listen(k){if(h)throw new Error("A history only accepts one active listener");return l.addEventListener(Uv,b),h=k,()=>{l.removeEventListener(Uv,b),h=null}},createHref(k){return t(l,k)},createURL:D,encodeLocation(k){let z=D(k);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:x,replace:w,go(k){return f.go(k)}};return j}var Iv;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Iv||(Iv={}));function d_(n,t,r){return r===void 0&&(r="/"),h_(n,t,r)}function h_(n,t,r,s){let l=typeof t=="string"?cr(t):t,u=Nh(l.pathname||"/",r);if(u==null)return null;let f=yb(n);p_(f);let p=null;for(let h=0;p==null&&h<f.length;++h){let m=A_(u);p=w_(f[h],m)}return p}function yb(n,t,r,s){t===void 0&&(t=[]),r===void 0&&(r=[]),s===void 0&&(s="");let l=(u,f,p)=>{let h={relativePath:p===void 0?u.path||"":p,caseSensitive:u.caseSensitive===!0,childrenIndex:f,route:u};h.relativePath.startsWith("/")&&(Ze(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let m=wi([s,h.relativePath]),v=r.concat(h);u.children&&u.children.length>0&&(Ze(u.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),yb(u.children,t,v,m)),!(u.path==null&&!u.index)&&t.push({path:m,score:x_(m,u.index),routesMeta:v})};return n.forEach((u,f)=>{var p;if(u.path===""||!((p=u.path)!=null&&p.includes("?")))l(u,f);else for(let h of bb(u.path))l(u,f,h)}),t}function bb(n){let t=n.split("/");if(t.length===0)return[];let[r,...s]=t,l=r.endsWith("?"),u=r.replace(/\?$/,"");if(s.length===0)return l?[u,""]:[u];let f=bb(s.join("/")),p=[];return p.push(...f.map(h=>h===""?u:[u,h].join("/"))),l&&p.push(...f),p.map(h=>n.startsWith("/")&&h===""?"/":h)}function p_(n){n.sort((t,r)=>t.score!==r.score?r.score-t.score:T_(t.routesMeta.map(s=>s.childrenIndex),r.routesMeta.map(s=>s.childrenIndex)))}const m_=/^:[\w-]+$/,g_=3,v_=2,y_=1,b_=10,S_=-2,Bv=n=>n==="*";function x_(n,t){let r=n.split("/"),s=r.length;return r.some(Bv)&&(s+=S_),t&&(s+=v_),r.filter(l=>!Bv(l)).reduce((l,u)=>l+(m_.test(u)?g_:u===""?y_:b_),s)}function T_(n,t){return n.length===t.length&&n.slice(0,-1).every((s,l)=>s===t[l])?n[n.length-1]-t[t.length-1]:0}function w_(n,t,r){let{routesMeta:s}=n,l={},u="/",f=[];for(let p=0;p<s.length;++p){let h=s[p],m=p===s.length-1,v=u==="/"?t:t.slice(u.length)||"/",b=__({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},v),x=h.route;if(!b)return null;Object.assign(l,b.params),f.push({params:l,pathname:wi([u,b.pathname]),pathnameBase:M_(wi([u,b.pathnameBase])),route:x}),b.pathnameBase!=="/"&&(u=wi([u,b.pathnameBase]))}return f}function __(n,t){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,s]=E_(n.path,n.caseSensitive,n.end),l=t.match(r);if(!l)return null;let u=l[0],f=u.replace(/(.)\/+$/,"$1"),p=l.slice(1);return{params:s.reduce((m,v,b)=>{let{paramName:x,isOptional:w}=v;if(x==="*"){let j=p[b]||"";f=u.slice(0,u.length-j.length).replace(/(.)\/+$/,"$1")}const D=p[b];return w&&!D?m[x]=void 0:m[x]=(D||"").replace(/%2F/g,"/"),m},{}),pathname:u,pathnameBase:f,pattern:n}}function E_(n,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),kh(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let s=[],l="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,p,h)=>(s.push({paramName:p,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(s.push({paramName:"*"}),l+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?l+="\\/*$":n!==""&&n!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),s]}function A_(n){try{return n.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return kh(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),n}}function Nh(n,t){if(t==="/")return n;if(!n.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,s=n.charAt(r);return s&&s!=="/"?null:n.slice(r)||"/"}function C_(n,t){t===void 0&&(t="/");let{pathname:r,search:s="",hash:l=""}=typeof n=="string"?cr(n):n;return{pathname:r?r.startsWith("/")?r:R_(r,t):t,search:O_(s),hash:j_(l)}}function R_(n,t){let r=t.replace(/\/+$/,"").split("/");return n.split("/").forEach(l=>{l===".."?r.length>1&&r.pop():l!=="."&&r.push(l)}),r.length>1?r.join("/"):"/"}function fd(n,t,r,s){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D_(n){return n.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Sb(n,t){let r=D_(n);return t?r.map((s,l)=>l===r.length-1?s.pathname:s.pathnameBase):r.map(s=>s.pathnameBase)}function xb(n,t,r,s){s===void 0&&(s=!1);let l;typeof n=="string"?l=cr(n):(l=Hs({},n),Ze(!l.pathname||!l.pathname.includes("?"),fd("?","pathname","search",l)),Ze(!l.pathname||!l.pathname.includes("#"),fd("#","pathname","hash",l)),Ze(!l.search||!l.search.includes("#"),fd("#","search","hash",l)));let u=n===""||l.pathname==="",f=u?"/":l.pathname,p;if(f==null)p=r;else{let b=t.length-1;if(!s&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),b-=1;l.pathname=x.join("/")}p=b>=0?t[b]:"/"}let h=C_(l,p),m=f&&f!=="/"&&f.endsWith("/"),v=(u||f===".")&&r.endsWith("/");return!h.pathname.endsWith("/")&&(m||v)&&(h.pathname+="/"),h}const wi=n=>n.join("/").replace(/\/\/+/g,"/"),M_=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),O_=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,j_=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function k_(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Tb=["post","put","patch","delete"];new Set(Tb);const N_=["get",...Tb];new Set(N_);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gs(){return Gs=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Gs.apply(this,arguments)}const Lh=A.createContext(null),L_=A.createContext(null),ur=A.createContext(null),Cc=A.createContext(null),Di=A.createContext({outlet:null,matches:[],isDataRoute:!1}),wb=A.createContext(null);function z_(n,t){let{relative:r}=t===void 0?{}:t;no()||Ze(!1);let{basename:s,navigator:l}=A.useContext(ur),{hash:u,pathname:f,search:p}=Eb(n,{relative:r}),h=f;return s!=="/"&&(h=f==="/"?s:wi([s,f])),l.createHref({pathname:h,search:p,hash:u})}function no(){return A.useContext(Cc)!=null}function Ta(){return no()||Ze(!1),A.useContext(Cc).location}function _b(n){A.useContext(ur).static||A.useLayoutEffect(n)}function Rc(){let{isDataRoute:n}=A.useContext(Di);return n?$_():U_()}function U_(){no()||Ze(!1);let n=A.useContext(Lh),{basename:t,future:r,navigator:s}=A.useContext(ur),{matches:l}=A.useContext(Di),{pathname:u}=Ta(),f=JSON.stringify(Sb(l,r.v7_relativeSplatPath)),p=A.useRef(!1);return _b(()=>{p.current=!0}),A.useCallback(function(m,v){if(v===void 0&&(v={}),!p.current)return;if(typeof m=="number"){s.go(m);return}let b=xb(m,JSON.parse(f),u,v.relative==="path");n==null&&t!=="/"&&(b.pathname=b.pathname==="/"?t:wi([t,b.pathname])),(v.replace?s.replace:s.push)(b,v.state,v)},[t,s,f,u,n])}function P_(){let{matches:n}=A.useContext(Di),t=n[n.length-1];return t?t.params:{}}function Eb(n,t){let{relative:r}=t===void 0?{}:t,{future:s}=A.useContext(ur),{matches:l}=A.useContext(Di),{pathname:u}=Ta(),f=JSON.stringify(Sb(l,s.v7_relativeSplatPath));return A.useMemo(()=>xb(n,JSON.parse(f),u,r==="path"),[n,f,u,r])}function I_(n,t){return B_(n,t)}function B_(n,t,r,s){no()||Ze(!1);let{navigator:l}=A.useContext(ur),{matches:u}=A.useContext(Di),f=u[u.length-1],p=f?f.params:{};f&&f.pathname;let h=f?f.pathnameBase:"/";f&&f.route;let m=Ta(),v;if(t){var b;let k=typeof t=="string"?cr(t):t;h==="/"||(b=k.pathname)!=null&&b.startsWith(h)||Ze(!1),v=k}else v=m;let x=v.pathname||"/",w=x;if(h!=="/"){let k=h.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(k.length).join("/")}let D=d_(n,{pathname:w}),j=Y_(D&&D.map(k=>Object.assign({},k,{params:Object.assign({},p,k.params),pathname:wi([h,l.encodeLocation?l.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?h:wi([h,l.encodeLocation?l.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),u,r,s);return t&&j?A.createElement(Cc.Provider,{value:{location:Gs({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Ti.Pop}},j):j}function V_(){let n=Q_(),t=k_(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return A.createElement(A.Fragment,null,A.createElement("h2",null,"Unexpected Application Error!"),A.createElement("h3",{style:{fontStyle:"italic"}},t),r?A.createElement("pre",{style:l},r):null,null)}const H_=A.createElement(V_,null);class G_ extends A.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?A.createElement(Di.Provider,{value:this.props.routeContext},A.createElement(wb.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function q_(n){let{routeContext:t,match:r,children:s}=n,l=A.useContext(Lh);return l&&l.static&&l.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=r.route.id),A.createElement(Di.Provider,{value:t},s)}function Y_(n,t,r,s){var l;if(t===void 0&&(t=[]),r===void 0&&(r=null),s===void 0&&(s=null),n==null){var u;if(!r)return null;if(r.errors)n=r.matches;else if((u=s)!=null&&u.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)n=r.matches;else return null}let f=n,p=(l=r)==null?void 0:l.errors;if(p!=null){let v=f.findIndex(b=>b.route.id&&p?.[b.route.id]!==void 0);v>=0||Ze(!1),f=f.slice(0,Math.min(f.length,v+1))}let h=!1,m=-1;if(r&&s&&s.v7_partialHydration)for(let v=0;v<f.length;v++){let b=f[v];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=v),b.route.id){let{loaderData:x,errors:w}=r,D=b.route.loader&&x[b.route.id]===void 0&&(!w||w[b.route.id]===void 0);if(b.route.lazy||D){h=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}return f.reduceRight((v,b,x)=>{let w,D=!1,j=null,k=null;r&&(w=p&&b.route.id?p[b.route.id]:void 0,j=b.route.errorElement||H_,h&&(m<0&&x===0?(W_("route-fallback"),D=!0,k=null):m===x&&(D=!0,k=b.route.hydrateFallbackElement||null)));let z=t.concat(f.slice(0,x+1)),N=()=>{let P;return w?P=j:D?P=k:b.route.Component?P=A.createElement(b.route.Component,null):b.route.element?P=b.route.element:P=v,A.createElement(q_,{match:b,routeContext:{outlet:v,matches:z,isDataRoute:r!=null},children:P})};return r&&(b.route.ErrorBoundary||b.route.errorElement||x===0)?A.createElement(G_,{location:r.location,revalidation:r.revalidation,component:j,error:w,children:N(),routeContext:{outlet:null,matches:z,isDataRoute:!0}}):N()},null)}var Ab=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(Ab||{}),Cb=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Cb||{});function F_(n){let t=A.useContext(Lh);return t||Ze(!1),t}function K_(n){let t=A.useContext(L_);return t||Ze(!1),t}function X_(n){let t=A.useContext(Di);return t||Ze(!1),t}function Rb(n){let t=X_(),r=t.matches[t.matches.length-1];return r.route.id||Ze(!1),r.route.id}function Q_(){var n;let t=A.useContext(wb),r=K_(),s=Rb();return t!==void 0?t:(n=r.errors)==null?void 0:n[s]}function $_(){let{router:n}=F_(Ab.UseNavigateStable),t=Rb(Cb.UseNavigateStable),r=A.useRef(!1);return _b(()=>{r.current=!0}),A.useCallback(function(l,u){u===void 0&&(u={}),r.current&&(typeof l=="number"?n.navigate(l):n.navigate(l,Gs({fromRouteId:t},u)))},[n,t])}const Vv={};function W_(n,t,r){Vv[n]||(Vv[n]=!0)}function Z_(n,t){n?.v7_startTransition,n?.v7_relativeSplatPath}function Ji(n){Ze(!1)}function J_(n){let{basename:t="/",children:r=null,location:s,navigationType:l=Ti.Pop,navigator:u,static:f=!1,future:p}=n;no()&&Ze(!1);let h=t.replace(/^\/*/,"/"),m=A.useMemo(()=>({basename:h,navigator:u,static:f,future:Gs({v7_relativeSplatPath:!1},p)}),[h,p,u,f]);typeof s=="string"&&(s=cr(s));let{pathname:v="/",search:b="",hash:x="",state:w=null,key:D="default"}=s,j=A.useMemo(()=>{let k=Nh(v,h);return k==null?null:{location:{pathname:k,search:b,hash:x,state:w,key:D},navigationType:l}},[h,v,b,x,w,D,l]);return j==null?null:A.createElement(ur.Provider,{value:m},A.createElement(Cc.Provider,{children:r,value:j}))}function eE(n){let{children:t,location:r}=n;return I_(Kd(t),r)}new Promise(()=>{});function Kd(n,t){t===void 0&&(t=[]);let r=[];return A.Children.forEach(n,(s,l)=>{if(!A.isValidElement(s))return;let u=[...t,l];if(s.type===A.Fragment){r.push.apply(r,Kd(s.props.children,u));return}s.type!==Ji&&Ze(!1),!s.props.index||!s.props.children||Ze(!1);let f={id:s.props.id||u.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(f.children=Kd(s.props.children,u)),r.push(f)}),r}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xd(){return Xd=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},Xd.apply(this,arguments)}function tE(n,t){if(n==null)return{};var r={},s=Object.keys(n),l,u;for(u=0;u<s.length;u++)l=s[u],!(t.indexOf(l)>=0)&&(r[l]=n[l]);return r}function nE(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function iE(n,t){return n.button===0&&(!t||t==="_self")&&!nE(n)}const rE=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],aE="6";try{window.__reactRouterVersion=aE}catch{}const sE="startTransition",Hv=n_[sE];function oE(n){let{basename:t,children:r,future:s,window:l}=n,u=A.useRef();u.current==null&&(u.current=c_({window:l,v5Compat:!0}));let f=u.current,[p,h]=A.useState({action:f.action,location:f.location}),{v7_startTransition:m}=s||{},v=A.useCallback(b=>{m&&Hv?Hv(()=>h(b)):h(b)},[h,m]);return A.useLayoutEffect(()=>f.listen(v),[f,v]),A.useEffect(()=>Z_(s),[s]),A.createElement(J_,{basename:t,children:r,location:p.location,navigationType:p.action,navigator:f,future:s})}const lE=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cE=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xt=A.forwardRef(function(t,r){let{onClick:s,relative:l,reloadDocument:u,replace:f,state:p,target:h,to:m,preventScrollReset:v,viewTransition:b}=t,x=tE(t,rE),{basename:w}=A.useContext(ur),D,j=!1;if(typeof m=="string"&&cE.test(m)&&(D=m,lE))try{let P=new URL(window.location.href),Y=m.startsWith("//")?new URL(P.protocol+m):new URL(m),I=Nh(Y.pathname,w);Y.origin===P.origin&&I!=null?m=I+Y.search+Y.hash:j=!0}catch{}let k=z_(m,{relative:l}),z=uE(m,{replace:f,state:p,target:h,preventScrollReset:v,relative:l,viewTransition:b});function N(P){s&&s(P),P.defaultPrevented||z(P)}return A.createElement("a",Xd({},x,{href:D||k,onClick:j||u?s:N,ref:r,target:h}))});var Gv;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(Gv||(Gv={}));var qv;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(qv||(qv={}));function uE(n,t){let{target:r,replace:s,state:l,preventScrollReset:u,relative:f,viewTransition:p}=t===void 0?{}:t,h=Rc(),m=Ta(),v=Eb(n,{relative:f});return A.useCallback(b=>{if(iE(b,r)){b.preventDefault();let x=s!==void 0?s:sc(m)===sc(v);h(n,{replace:x,state:l,preventScrollReset:u,relative:f,viewTransition:p})}},[m,h,v,s,l,r,n,u,f,p])}var Yv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Db=function(n){const t=[];let r=0;for(let s=0;s<n.length;s++){let l=n.charCodeAt(s);l<128?t[r++]=l:l<2048?(t[r++]=l>>6|192,t[r++]=l&63|128):(l&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(n.charCodeAt(++s)&1023),t[r++]=l>>18|240,t[r++]=l>>12&63|128,t[r++]=l>>6&63|128,t[r++]=l&63|128):(t[r++]=l>>12|224,t[r++]=l>>6&63|128,t[r++]=l&63|128)}return t},fE=function(n){const t=[];let r=0,s=0;for(;r<n.length;){const l=n[r++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=n[r++];t[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=n[r++],f=n[r++],p=n[r++],h=((l&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[s++]=String.fromCharCode(55296+(h>>10)),t[s++]=String.fromCharCode(56320+(h&1023))}else{const u=n[r++],f=n[r++];t[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return t.join("")},Mb={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<n.length;l+=3){const u=n[l],f=l+1<n.length,p=f?n[l+1]:0,h=l+2<n.length,m=h?n[l+2]:0,v=u>>2,b=(u&3)<<4|p>>4;let x=(p&15)<<2|m>>6,w=m&63;h||(w=64,f||(x=64)),s.push(r[v],r[b],r[x],r[w])}return s.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(Db(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):fE(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const r=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<n.length;){const u=r[n.charAt(l++)],p=l<n.length?r[n.charAt(l)]:0;++l;const m=l<n.length?r[n.charAt(l)]:64;++l;const b=l<n.length?r[n.charAt(l)]:64;if(++l,u==null||p==null||m==null||b==null)throw new dE;const x=u<<2|p>>4;if(s.push(x),m!==64){const w=p<<4&240|m>>2;if(s.push(w),b!==64){const D=m<<6&192|b;s.push(D)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class dE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hE=function(n){const t=Db(n);return Mb.encodeByteArray(t,!0)},Ob=function(n){return hE(n).replace(/\./g,"")},jb=function(n){try{return Mb.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=()=>pE().__FIREBASE_DEFAULTS__,gE=()=>{if(typeof process>"u"||typeof Yv>"u")return;const n=Yv.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},vE=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&jb(n[1]);return t&&JSON.parse(t)},zh=()=>{try{return mE()||gE()||vE()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},yE=n=>{var t,r;return(r=(t=zh())===null||t===void 0?void 0:t.emulatorHosts)===null||r===void 0?void 0:r[n]},kb=()=>{var n;return(n=zh())===null||n===void 0?void 0:n.config},Nb=n=>{var t;return(t=zh())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,r)=>{this.resolve=t,this.reject=r})}wrapCallback(t){return(r,s)=>{r?this.reject(r):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(r):t(r,s))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function SE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function xE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function TE(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function wE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _E(){const n=St();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function EE(){try{return typeof indexedDB=="object"}catch{return!1}}function AE(){return new Promise((n,t)=>{try{let r=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),r||self.indexedDB.deleteDatabase(s),n(!0)},l.onupgradeneeded=()=>{r=!1},l.onerror=()=>{var u;t(((u=l.error)===null||u===void 0?void 0:u.message)||"")}}catch(r){t(r)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CE="FirebaseError";class Mi extends Error{constructor(t,r,s){super(r),this.code=t,this.customData=s,this.name=CE,Object.setPrototypeOf(this,Mi.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(t,r,s){this.service=t,this.serviceName=r,this.errors=s}create(t,...r){const s=r[0]||{},l=`${this.service}/${t}`,u=this.errors[t],f=u?RE(u,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new Mi(l,p,s)}}function RE(n,t){return n.replace(DE,(r,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const DE=/\{\$([^}]+)}/g;function ME(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function oc(n,t){if(n===t)return!0;const r=Object.keys(n),s=Object.keys(t);for(const l of r){if(!s.includes(l))return!1;const u=n[l],f=t[l];if(Fv(u)&&Fv(f)){if(!oc(u,f))return!1}else if(u!==f)return!1}for(const l of s)if(!r.includes(l))return!1;return!0}function Fv(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(n){const t=[];for(const[r,s]of Object.entries(n))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(r)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(r)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ms(n){const t={};return n.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(u)}}),t}function Os(n){const t=n.indexOf("?");if(!t)return"";const r=n.indexOf("#",t);return n.substring(t,r>0?r:void 0)}function OE(n,t){const r=new jE(n,t);return r.subscribe.bind(r)}class jE{constructor(t,r){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=r,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(r=>{r.next(t)})}error(t){this.forEachObserver(r=>{r.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,r,s){let l;if(t===void 0&&r===void 0&&s===void 0)throw new Error("Missing Observer.");kE(t,["next","error","complete"])?l=t:l={next:t,error:r,complete:s},l.next===void 0&&(l.next=dd),l.error===void 0&&(l.error=dd),l.complete===void 0&&(l.complete=dd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let r=0;r<this.observers.length;r++)this.sendOne(r,t)}sendOne(t,r){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{r(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function kE(n,t){if(typeof n!="object"||n===null)return!1;for(const r of t)if(r in n&&typeof n[r]=="function")return!0;return!1}function dd(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(n){return n&&n._delegate?n._delegate:n}class da{constructor(t,r,s){this.name=t,this.instanceFactory=r,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(t,r){this.name=t,this.container=r,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const r=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(r)){const s=new bE;if(this.instancesDeferred.set(r,s),this.isInitialized(r)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:r});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(r).promise}getImmediate(t){var r;const s=this.normalizeInstanceIdentifier(t?.identifier),l=(r=t?.optional)!==null&&r!==void 0?r:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(u){if(l)return null;throw u}else{if(l)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(zE(t))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[r,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(t=er){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(r=>"INTERNAL"in r).map(r=>r.INTERNAL.delete()),...t.filter(r=>"_delete"in r).map(r=>r._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=er){return this.instances.has(t)}getOptions(t=er){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:r={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:r});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(l)}return l}onInit(t,r){var s;const l=this.normalizeInstanceIdentifier(r),u=(s=this.onInitCallbacks.get(l))!==null&&s!==void 0?s:new Set;u.add(t),this.onInitCallbacks.set(l,u);const f=this.instances.get(l);return f&&t(f,l),()=>{u.delete(t)}}invokeOnInitCallbacks(t,r){const s=this.onInitCallbacks.get(r);if(s)for(const l of s)try{l(t,r)}catch{}}getOrInitializeService({instanceIdentifier:t,options:r={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:LE(t),options:r}),this.instances.set(t,s),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=er){return this.component?this.component.multipleInstances?t:er:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function LE(n){return n===er?void 0:n}function zE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const r=this.getProvider(t.name);if(r.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);r.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const r=new NE(t,this);return this.providers.set(t,r),r}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Oe||(Oe={}));const PE={debug:Oe.DEBUG,verbose:Oe.VERBOSE,info:Oe.INFO,warn:Oe.WARN,error:Oe.ERROR,silent:Oe.SILENT},IE=Oe.INFO,BE={[Oe.DEBUG]:"log",[Oe.VERBOSE]:"log",[Oe.INFO]:"info",[Oe.WARN]:"warn",[Oe.ERROR]:"error"},VE=(n,t,...r)=>{if(t<n.logLevel)return;const s=new Date().toISOString(),l=BE[t];if(l)console[l](`[${s}]  ${n.name}:`,...r);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Lb{constructor(t){this.name=t,this._logLevel=IE,this._logHandler=VE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Oe))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?PE[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Oe.DEBUG,...t),this._logHandler(this,Oe.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Oe.VERBOSE,...t),this._logHandler(this,Oe.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Oe.INFO,...t),this._logHandler(this,Oe.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Oe.WARN,...t),this._logHandler(this,Oe.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Oe.ERROR,...t),this._logHandler(this,Oe.ERROR,...t)}}const HE=(n,t)=>t.some(r=>n instanceof r);let Kv,Xv;function GE(){return Kv||(Kv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function qE(){return Xv||(Xv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zb=new WeakMap,Qd=new WeakMap,Ub=new WeakMap,hd=new WeakMap,Uh=new WeakMap;function YE(n){const t=new Promise((r,s)=>{const l=()=>{n.removeEventListener("success",u),n.removeEventListener("error",f)},u=()=>{r(_i(n.result)),l()},f=()=>{s(n.error),l()};n.addEventListener("success",u),n.addEventListener("error",f)});return t.then(r=>{r instanceof IDBCursor&&zb.set(r,n)}).catch(()=>{}),Uh.set(t,n),t}function FE(n){if(Qd.has(n))return;const t=new Promise((r,s)=>{const l=()=>{n.removeEventListener("complete",u),n.removeEventListener("error",f),n.removeEventListener("abort",f)},u=()=>{r(),l()},f=()=>{s(n.error||new DOMException("AbortError","AbortError")),l()};n.addEventListener("complete",u),n.addEventListener("error",f),n.addEventListener("abort",f)});Qd.set(n,t)}let $d={get(n,t,r){if(n instanceof IDBTransaction){if(t==="done")return Qd.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ub.get(n);if(t==="store")return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return _i(n[t])},set(n,t,r){return n[t]=r,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function KE(n){$d=n($d)}function XE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...r){const s=n.call(pd(this),t,...r);return Ub.set(s,t.sort?t.sort():[t]),_i(s)}:qE().includes(n)?function(...t){return n.apply(pd(this),t),_i(zb.get(this))}:function(...t){return _i(n.apply(pd(this),t))}}function QE(n){return typeof n=="function"?XE(n):(n instanceof IDBTransaction&&FE(n),HE(n,GE())?new Proxy(n,$d):n)}function _i(n){if(n instanceof IDBRequest)return YE(n);if(hd.has(n))return hd.get(n);const t=QE(n);return t!==n&&(hd.set(n,t),Uh.set(t,n)),t}const pd=n=>Uh.get(n);function $E(n,t,{blocked:r,upgrade:s,blocking:l,terminated:u}={}){const f=indexedDB.open(n,t),p=_i(f);return s&&f.addEventListener("upgradeneeded",h=>{s(_i(f.result),h.oldVersion,h.newVersion,_i(f.transaction),h)}),r&&f.addEventListener("blocked",h=>r(h.oldVersion,h.newVersion,h)),p.then(h=>{u&&h.addEventListener("close",()=>u()),l&&h.addEventListener("versionchange",m=>l(m.oldVersion,m.newVersion,m))}).catch(()=>{}),p}const WE=["get","getKey","getAll","getAllKeys","count"],ZE=["put","add","delete","clear"],md=new Map;function Qv(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(md.get(t))return md.get(t);const r=t.replace(/FromIndex$/,""),s=t!==r,l=ZE.includes(r);if(!(r in(s?IDBIndex:IDBObjectStore).prototype)||!(l||WE.includes(r)))return;const u=async function(f,...p){const h=this.transaction(f,l?"readwrite":"readonly");let m=h.store;return s&&(m=m.index(p.shift())),(await Promise.all([m[r](...p),l&&h.done]))[0]};return md.set(t,u),u}KE(n=>({...n,get:(t,r,s)=>Qv(t,r)||n.get(t,r,s),has:(t,r)=>!!Qv(t,r)||n.has(t,r)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(r=>{if(e3(r)){const s=r.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(r=>r).join(" ")}}function e3(n){const t=n.getComponent();return t?.type==="VERSION"}const Wd="@firebase/app",$v="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn=new Lb("@firebase/app"),t3="@firebase/app-compat",n3="@firebase/analytics-compat",i3="@firebase/analytics",r3="@firebase/app-check-compat",a3="@firebase/app-check",s3="@firebase/auth",o3="@firebase/auth-compat",l3="@firebase/database",c3="@firebase/data-connect",u3="@firebase/database-compat",f3="@firebase/functions",d3="@firebase/functions-compat",h3="@firebase/installations",p3="@firebase/installations-compat",m3="@firebase/messaging",g3="@firebase/messaging-compat",v3="@firebase/performance",y3="@firebase/performance-compat",b3="@firebase/remote-config",S3="@firebase/remote-config-compat",x3="@firebase/storage",T3="@firebase/storage-compat",w3="@firebase/firestore",_3="@firebase/vertexai-preview",E3="@firebase/firestore-compat",A3="firebase",C3="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="[DEFAULT]",R3={[Wd]:"fire-core",[t3]:"fire-core-compat",[i3]:"fire-analytics",[n3]:"fire-analytics-compat",[a3]:"fire-app-check",[r3]:"fire-app-check-compat",[s3]:"fire-auth",[o3]:"fire-auth-compat",[l3]:"fire-rtdb",[c3]:"fire-data-connect",[u3]:"fire-rtdb-compat",[f3]:"fire-fn",[d3]:"fire-fn-compat",[h3]:"fire-iid",[p3]:"fire-iid-compat",[m3]:"fire-fcm",[g3]:"fire-fcm-compat",[v3]:"fire-perf",[y3]:"fire-perf-compat",[b3]:"fire-rc",[S3]:"fire-rc-compat",[x3]:"fire-gcs",[T3]:"fire-gcs-compat",[w3]:"fire-fst",[E3]:"fire-fst-compat",[_3]:"fire-vertex","fire-js":"fire-js",[A3]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map,D3=new Map,Jd=new Map;function Wv(n,t){try{n.container.addComponent(t)}catch(r){Vn.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,r)}}function qs(n){const t=n.name;if(Jd.has(t))return Vn.debug(`There were multiple attempts to register component ${t}.`),!1;Jd.set(t,n);for(const r of lc.values())Wv(r,n);for(const r of D3.values())Wv(r,n);return!0}function Pb(n,t){const r=n.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),n.container.getProvider(t)}function dn(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M3={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ei=new io("app","Firebase",M3);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O3{constructor(t,r,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},r),this._name=r.name,this._automaticDataCollectionEnabled=r.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new da("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ei.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=C3;function Ib(n,t={}){let r=n;typeof t!="object"&&(t={name:t});const s=Object.assign({name:Zd,automaticDataCollectionEnabled:!1},t),l=s.name;if(typeof l!="string"||!l)throw Ei.create("bad-app-name",{appName:String(l)});if(r||(r=kb()),!r)throw Ei.create("no-options");const u=lc.get(l);if(u){if(oc(r,u.options)&&oc(s,u.config))return u;throw Ei.create("duplicate-app",{appName:l})}const f=new UE(l);for(const h of Jd.values())f.addComponent(h);const p=new O3(r,s,f);return lc.set(l,p),p}function j3(n=Zd){const t=lc.get(n);if(!t&&n===Zd&&kb())return Ib();if(!t)throw Ei.create("no-app",{appName:n});return t}function oa(n,t,r){var s;let l=(s=R3[n])!==null&&s!==void 0?s:n;r&&(l+=`-${r}`);const u=l.match(/\s|\//),f=t.match(/\s|\//);if(u||f){const p=[`Unable to register library "${l}" with version "${t}":`];u&&p.push(`library name "${l}" contains illegal characters (whitespace or "/")`),u&&f&&p.push("and"),f&&p.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Vn.warn(p.join(" "));return}qs(new da(`${l}-version`,()=>({library:l,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k3="firebase-heartbeat-database",N3=1,Ys="firebase-heartbeat-store";let gd=null;function Bb(){return gd||(gd=$E(k3,N3,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(Ys)}catch(r){console.warn(r)}}}}).catch(n=>{throw Ei.create("idb-open",{originalErrorMessage:n.message})})),gd}async function L3(n){try{const r=(await Bb()).transaction(Ys),s=await r.objectStore(Ys).get(Vb(n));return await r.done,s}catch(t){if(t instanceof Mi)Vn.warn(t.message);else{const r=Ei.create("idb-get",{originalErrorMessage:t?.message});Vn.warn(r.message)}}}async function Zv(n,t){try{const s=(await Bb()).transaction(Ys,"readwrite");await s.objectStore(Ys).put(t,Vb(n)),await s.done}catch(r){if(r instanceof Mi)Vn.warn(r.message);else{const s=Ei.create("idb-set",{originalErrorMessage:r?.message});Vn.warn(s.message)}}}function Vb(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z3=1024,U3=30*24*60*60*1e3;class P3{constructor(t){this.container=t,this._heartbeatsCache=null;const r=this.container.getProvider("app").getImmediate();this._storage=new B3(r),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,r;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Jv();return((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((r=this._heartbeatsCache)===null||r===void 0?void 0:r.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u)?void 0:(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(f=>{const p=new Date(f.date).valueOf();return Date.now()-p<=U3}),this._storage.overwrite(this._heartbeatsCache))}catch(s){Vn.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const r=Jv(),{heartbeatsToSend:s,unsentEntries:l}=I3(this._heartbeatsCache.heartbeats),u=Ob(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=r,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(r){return Vn.warn(r),""}}}function Jv(){return new Date().toISOString().substring(0,10)}function I3(n,t=z3){const r=[];let s=n.slice();for(const l of n){const u=r.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),ey(r)>t){u.dates.pop();break}}else if(r.push({agent:l.agent,dates:[l.date]}),ey(r)>t){r.pop();break}s=s.slice(1)}return{heartbeatsToSend:r,unsentEntries:s}}class B3{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return EE()?AE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const r=await L3(this.app);return r?.heartbeats?r:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var r;if(await this._canUseIndexedDBPromise){const l=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:l.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var r;if(await this._canUseIndexedDBPromise){const l=await this.read();return Zv(this.app,{lastSentHeartbeatDate:(r=t.lastSentHeartbeatDate)!==null&&r!==void 0?r:l.lastSentHeartbeatDate,heartbeats:[...l.heartbeats,...t.heartbeats]})}else return}}function ey(n){return Ob(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V3(n){qs(new da("platform-logger",t=>new JE(t),"PRIVATE")),qs(new da("heartbeat",t=>new P3(t),"PRIVATE")),oa(Wd,$v,n),oa(Wd,$v,"esm2017"),oa("fire-js","")}V3("");function Ph(n,t){var r={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&t.indexOf(s)<0&&(r[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,s=Object.getOwnPropertySymbols(n);l<s.length;l++)t.indexOf(s[l])<0&&Object.prototype.propertyIsEnumerable.call(n,s[l])&&(r[s[l]]=n[s[l]]);return r}function Hb(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const H3=Hb,Gb=new io("auth","Firebase",Hb());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cc=new Lb("@firebase/auth");function G3(n,...t){cc.logLevel<=Oe.WARN&&cc.warn(`Auth (${ao}): ${n}`,...t)}function Xl(n,...t){cc.logLevel<=Oe.ERROR&&cc.error(`Auth (${ao}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n,...t){throw Ih(n,...t)}function hn(n,...t){return Ih(n,...t)}function qb(n,t,r){const s=Object.assign(Object.assign({},H3()),{[t]:r});return new io("auth","Firebase",s).create(t,{appName:n.name})}function Pn(n){return qb(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ih(n,...t){if(typeof n!="string"){const r=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(r,...s)}return Gb.create(n,...t)}function oe(n,t,...r){if(!n)throw Ih(t,...r)}function Ln(n){const t="INTERNAL ASSERTION FAILED: "+n;throw Xl(t),new Error(t)}function Hn(n,t){n||Ln(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function q3(){return ty()==="http:"||ty()==="https:"}function ty(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y3(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(q3()||TE()||"connection"in navigator)?navigator.onLine:!0}function F3(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(t,r){this.shortDelay=t,this.longDelay=r,Hn(r>t,"Short delay should be less than long delay!"),this.isMobile=SE()||wE()}get(){return Y3()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bh(n,t){Hn(n.emulator,"Emulator should always be set here");const{url:r}=n.emulator;return t?`${r}${t.startsWith("/")?t.slice(1):t}`:r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{static initialize(t,r,s){this.fetchImpl=t,r&&(this.headersImpl=r),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ln("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ln("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ln("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K3={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X3=new so(3e4,6e4);function Oi(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function qn(n,t,r,s,l={}){return Fb(n,l,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const p=ro(Object.assign({key:n.config.apiKey},f)).slice(1),h=await n._getAdditionalHeaders();h["Content-Type"]="application/json",n.languageCode&&(h["X-Firebase-Locale"]=n.languageCode);const m=Object.assign({method:t,headers:h},u);return xE()||(m.referrerPolicy="no-referrer"),Yb.fetch()(Kb(n,n.config.apiHost,r,p),m)})}async function Fb(n,t,r){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},K3),t);try{const l=new $3(n),u=await Promise.race([r(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Ol(n,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[h,m]=p.split(" : ");if(h==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ol(n,"credential-already-in-use",f);if(h==="EMAIL_EXISTS")throw Ol(n,"email-already-in-use",f);if(h==="USER_DISABLED")throw Ol(n,"user-disabled",f);const v=s[h]||h.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw qb(n,v,m);rn(n,v)}}catch(l){if(l instanceof Mi)throw l;rn(n,"network-request-failed",{message:String(l)})}}async function oo(n,t,r,s,l={}){const u=await qn(n,t,r,s,l);return"mfaPendingCredential"in u&&rn(n,"multi-factor-auth-required",{_serverResponse:u}),u}function Kb(n,t,r,s){const l=`${t}${r}?${s}`;return n.config.emulator?Bh(n.config,l):`${n.config.apiScheme}://${l}`}function Q3(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $3{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((r,s)=>{this.timer=setTimeout(()=>s(hn(this.auth,"network-request-failed")),X3.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ol(n,t,r){const s={appName:n.name};r.email&&(s.email=r.email),r.phoneNumber&&(s.phoneNumber=r.phoneNumber);const l=hn(n,t,s);return l.customData._tokenResponse=r,l}function ny(n){return n!==void 0&&n.enterprise!==void 0}class W3{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const r of this.recaptchaEnforcementState)if(r.provider&&r.provider===t)return Q3(r.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}}async function Z3(n,t){return qn(n,"GET","/v2/recaptchaConfig",Oi(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J3(n,t){return qn(n,"POST","/v1/accounts:delete",t)}async function Xb(n,t){return qn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function e4(n,t=!1){const r=vn(n),s=await r.getIdToken(t),l=Vh(s);oe(l&&l.exp&&l.auth_time&&l.iat,r.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u?.sign_in_provider;return{claims:l,token:s,authTime:zs(vd(l.auth_time)),issuedAtTime:zs(vd(l.iat)),expirationTime:zs(vd(l.exp)),signInProvider:f||null,signInSecondFactor:u?.sign_in_second_factor||null}}function vd(n){return Number(n)*1e3}function Vh(n){const[t,r,s]=n.split(".");if(t===void 0||r===void 0||s===void 0)return Xl("JWT malformed, contained fewer than 3 sections"),null;try{const l=jb(r);return l?JSON.parse(l):(Xl("Failed to decode base64 JWT payload"),null)}catch(l){return Xl("Caught error parsing JWT payload as JSON",l?.toString()),null}}function iy(n){const t=Vh(n);return oe(t,"internal-error"),oe(typeof t.exp<"u","internal-error"),oe(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n,t,r=!1){if(r)return t;try{return await t}catch(s){throw s instanceof Mi&&t4(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function t4({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n4{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var r;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const l=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,l)}}schedule(t=!1){if(!this.isRunning)return;const r=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(t,r){this.createdAt=t,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uc(n){var t;const r=n.auth,s=await n.getIdToken(),l=await ha(n,Xb(r,{idToken:s}));oe(l?.users.length,r,"internal-error");const u=l.users[0];n._notifyReloadListener(u);const f=!((t=u.providerUserInfo)===null||t===void 0)&&t.length?Qb(u.providerUserInfo):[],p=r4(n.providerData,f),h=n.isAnonymous,m=!(n.email&&u.passwordHash)&&!p?.length,v=h?m:!1,b={uid:u.localId,displayName:u.displayName||null,photoURL:u.photoUrl||null,email:u.email||null,emailVerified:u.emailVerified||!1,phoneNumber:u.phoneNumber||null,tenantId:u.tenantId||null,providerData:p,metadata:new th(u.createdAt,u.lastLoginAt),isAnonymous:v};Object.assign(n,b)}async function i4(n){const t=vn(n);await uc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function r4(n,t){return[...n.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function Qb(n){return n.map(t=>{var{providerId:r}=t,s=Ph(t,["providerId"]);return{providerId:r,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a4(n,t){const r=await Fb(n,{},async()=>{const s=ro({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:u}=n.config,f=Kb(n,l,"/v1/token",`key=${u}`),p=await n._getAdditionalHeaders();return p["Content-Type"]="application/x-www-form-urlencoded",Yb.fetch()(f,{method:"POST",headers:p,body:s})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}async function s4(n,t){return qn(n,"POST","/v2/accounts:revokeToken",Oi(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){oe(t.idToken,"internal-error"),oe(typeof t.idToken<"u","internal-error"),oe(typeof t.refreshToken<"u","internal-error");const r="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):iy(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,r)}updateFromIdToken(t){oe(t.length!==0,"internal-error");const r=iy(t);this.updateTokensAndExpiration(t,null,r)}async getToken(t,r=!1){return!r&&this.accessToken&&!this.isExpired?this.accessToken:(oe(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,r){const{accessToken:s,refreshToken:l,expiresIn:u}=await a4(t,r);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(t,r,s){this.refreshToken=r||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,r){const{refreshToken:s,accessToken:l,expirationTime:u}=r,f=new la;return s&&(oe(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(oe(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),u&&(oe(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new la,this.toJSON())}_performRefresh(){return Ln("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(n,t){oe(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class zn{constructor(t){var{uid:r,auth:s,stsTokenManager:l}=t,u=Ph(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n4(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=s,this.stsTokenManager=l,this.accessToken=l.accessToken,this.displayName=u.displayName||null,this.email=u.email||null,this.emailVerified=u.emailVerified||!1,this.phoneNumber=u.phoneNumber||null,this.photoURL=u.photoURL||null,this.isAnonymous=u.isAnonymous||!1,this.tenantId=u.tenantId||null,this.providerData=u.providerData?[...u.providerData]:[],this.metadata=new th(u.createdAt||void 0,u.lastLoginAt||void 0)}async getIdToken(t){const r=await ha(this,this.stsTokenManager.getToken(this.auth,t));return oe(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(t){return e4(this,t)}reload(){return i4(this)}_assign(t){this!==t&&(oe(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(r=>Object.assign({},r)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const r=new zn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(t){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,r=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),r&&await uc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(dn(this.auth.app))return Promise.reject(Pn(this.auth));const t=await this.getIdToken();return await ha(this,J3(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,r){var s,l,u,f,p,h,m,v;const b=(s=r.displayName)!==null&&s!==void 0?s:void 0,x=(l=r.email)!==null&&l!==void 0?l:void 0,w=(u=r.phoneNumber)!==null&&u!==void 0?u:void 0,D=(f=r.photoURL)!==null&&f!==void 0?f:void 0,j=(p=r.tenantId)!==null&&p!==void 0?p:void 0,k=(h=r._redirectEventId)!==null&&h!==void 0?h:void 0,z=(m=r.createdAt)!==null&&m!==void 0?m:void 0,N=(v=r.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:P,emailVerified:Y,isAnonymous:I,providerData:K,stsTokenManager:X}=r;oe(P&&X,t,"internal-error");const W=la.fromJSON(this.name,X);oe(typeof P=="string",t,"internal-error"),mi(b,t.name),mi(x,t.name),oe(typeof Y=="boolean",t,"internal-error"),oe(typeof I=="boolean",t,"internal-error"),mi(w,t.name),mi(D,t.name),mi(j,t.name),mi(k,t.name),mi(z,t.name),mi(N,t.name);const he=new zn({uid:P,auth:t,email:x,emailVerified:Y,displayName:b,isAnonymous:I,photoURL:D,phoneNumber:w,tenantId:j,stsTokenManager:W,createdAt:z,lastLoginAt:N});return K&&Array.isArray(K)&&(he.providerData=K.map(ke=>Object.assign({},ke))),k&&(he._redirectEventId=k),he}static async _fromIdTokenResponse(t,r,s=!1){const l=new la;l.updateFromServerResponse(r);const u=new zn({uid:r.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await uc(u),u}static async _fromGetAccountInfoResponse(t,r,s){const l=r.users[0];oe(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Qb(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!u?.length,p=new la;p.updateFromIdToken(s);const h=new zn({uid:l.localId,auth:t,stsTokenManager:p,isAnonymous:f}),m={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new th(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!u?.length};return Object.assign(h,m),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ry=new Map;function Un(n){Hn(n instanceof Function,"Expected a class definition");let t=ry.get(n);return t?(Hn(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,ry.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,r){this.storage[t]=r}async _get(t){const r=this.storage[t];return r===void 0?null:r}async _remove(t){delete this.storage[t]}_addListener(t,r){}_removeListener(t,r){}}$b.type="NONE";const ay=$b;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ql(n,t,r){return`firebase:${n}:${t}:${r}`}class ca{constructor(t,r,s){this.persistence=t,this.auth=r,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Ql(this.userKey,l.apiKey,u),this.fullPersistenceKey=Ql("persistence",l.apiKey,u),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?zn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,r,s="authUser"){if(!r.length)return new ca(Un(ay),t,s);const l=(await Promise.all(r.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let u=l[0]||Un(ay);const f=Ql(s,t.config.apiKey,t.name);let p=null;for(const m of r)try{const v=await m._get(f);if(v){const b=zn._fromJSON(t,v);m!==u&&(p=b),u=m;break}}catch{}const h=l.filter(m=>m._shouldAllowMigration);return!u._shouldAllowMigration||!h.length?new ca(u,t,s):(u=h[0],p&&await u._set(f,p.toJSON()),await Promise.all(r.map(async m=>{if(m!==u)try{await m._remove(f)}catch{}})),new ca(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(eS(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Wb(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(nS(t))return"Blackberry";if(iS(t))return"Webos";if(Zb(t))return"Safari";if((t.includes("chrome/")||Jb(t))&&!t.includes("edge/"))return"Chrome";if(tS(t))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(r);if(s?.length===2)return s[1]}return"Other"}function Wb(n=St()){return/firefox\//i.test(n)}function Zb(n=St()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Jb(n=St()){return/crios\//i.test(n)}function eS(n=St()){return/iemobile/i.test(n)}function tS(n=St()){return/android/i.test(n)}function nS(n=St()){return/blackberry/i.test(n)}function iS(n=St()){return/webos/i.test(n)}function Hh(n=St()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function o4(n=St()){var t;return Hh(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function l4(){return _E()&&document.documentMode===10}function rS(n=St()){return Hh(n)||tS(n)||iS(n)||nS(n)||/windows phone/i.test(n)||eS(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aS(n,t=[]){let r;switch(n){case"Browser":r=sy(St());break;case"Worker":r=`${sy(St())}-${n}`;break;default:r=n}const s=t.length?t.join(","):"FirebaseCore-web";return`${r}/JsCore/${ao}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c4{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,r){const s=u=>new Promise((f,p)=>{try{const h=t(u);f(h)}catch(h){p(h)}});s.onAbort=r,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const r=[];try{for(const s of this.queue)await s(t),s.onAbort&&r.push(s.onAbort)}catch(s){r.reverse();for(const l of r)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u4(n,t={}){return qn(n,"GET","/v2/passwordPolicy",Oi(n,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f4=6;class d4{constructor(t){var r,s,l,u;const f=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(r=f.minPasswordLength)!==null&&r!==void 0?r:f4,f.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=f.maxPasswordLength),f.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=f.containsLowercaseCharacter),f.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=f.containsUppercaseCharacter),f.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=f.containsNumericCharacter),f.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=f.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(l=(s=t.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&l!==void 0?l:"",this.forceUpgradeOnSignin=(u=t.forceUpgradeOnSignin)!==null&&u!==void 0?u:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var r,s,l,u,f,p;const h={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,h),this.validatePasswordCharacterOptions(t,h),h.isValid&&(h.isValid=(r=h.meetsMinPasswordLength)!==null&&r!==void 0?r:!0),h.isValid&&(h.isValid=(s=h.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),h.isValid&&(h.isValid=(l=h.containsLowercaseLetter)!==null&&l!==void 0?l:!0),h.isValid&&(h.isValid=(u=h.containsUppercaseLetter)!==null&&u!==void 0?u:!0),h.isValid&&(h.isValid=(f=h.containsNumericCharacter)!==null&&f!==void 0?f:!0),h.isValid&&(h.isValid=(p=h.containsNonAlphanumericCharacter)!==null&&p!==void 0?p:!0),h}validatePasswordLengthOptions(t,r){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(r.meetsMinPasswordLength=t.length>=s),l&&(r.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,r){this.updatePasswordCharacterOptionsStatuses(r,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(r,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,r,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=r)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h4{constructor(t,r,s,l){this.app=t,this.heartbeatServiceProvider=r,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new oy(this),this.idTokenSubscription=new oy(this),this.beforeStateQueue=new c4(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Gb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion}_initializeWithPersistence(t,r){return r&&(this._popupRedirectResolver=Un(r)),this._initializationPromise=this.queue(async()=>{var s,l;if(!this._deleted&&(this.persistenceManager=await ca.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const r=await Xb(this,{idToken:t}),s=await zn._fromGetAccountInfoResponse(this,r,t);await this.directlySetCurrentUser(s)}catch(r){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",r),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var r;if(dn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let l=s,u=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,p=l?._redirectEventId,h=await this.tryRedirectSignIn(t);(!f||f===p)&&h?.user&&(l=h.user,u=!0)}if(!l)return this.directlySetCurrentUser(null);if(!l._redirectEventId){if(u)try{await this.beforeStateQueue.runMiddleware(l)}catch(f){l=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return l?this.reloadAndSetCurrentUserOrClear(l):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===l._redirectEventId?this.directlySetCurrentUser(l):this.reloadAndSetCurrentUserOrClear(l)}async tryRedirectSignIn(t){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(t){try{await uc(t)}catch(r){if(r?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=F3()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(dn(this.app))return Promise.reject(Pn(this));const r=t?vn(t):null;return r&&oe(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(t,r=!1){if(!this._deleted)return t&&oe(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return dn(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return dn(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Un(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const r=this._getPasswordPolicyInternal();return r.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):r.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await u4(this),r=new d4(t);this.tenantId===null?this._projectPasswordPolicy=r:this._tenantPasswordPolicies[this.tenantId]=r}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new io("auth","Firebase",t())}onAuthStateChanged(t,r,s){return this.registerStateListener(this.authStateSubscription,t,r,s)}beforeAuthStateChanged(t,r){return this.beforeStateQueue.pushCallback(t,r)}onIdTokenChanged(t,r,s){return this.registerStateListener(this.idTokenSubscription,t,r,s)}authStateReady(){return new Promise((t,r)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},r)}})}async revokeAccessToken(t){if(this.currentUser){const r=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:r};this.tenantId!=null&&(s.tenantId=this.tenantId),await s4(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,r){const s=await this.getOrInitRedirectPersistenceManager(r);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const r=t&&Un(t)||this._popupRedirectResolver;oe(r,this,"argument-error"),this.redirectPersistenceManager=await ca.create(this,[Un(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var r,s;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(r=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,r,s,l){if(this._deleted)return()=>{};const u=typeof r=="function"?r:r.next.bind(r);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(oe(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof r=="function"){const h=t.addObserver(r,s,l);return()=>{f=!0,h()}}else{const h=t.addObserver(r);return()=>{f=!0,h()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=aS(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const r={"X-Client-Version":this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(r["X-Firebase-Client"]=s);const l=await this._getAppCheckToken();return l&&(r["X-Firebase-AppCheck"]=l),r}async _getAppCheckToken(){var t;const r=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return r?.error&&G3(`Error while retrieving App Check token: ${r.error}`),r?.token}}function fr(n){return vn(n)}class oy{constructor(t){this.auth=t,this.observer=null,this.addObserver=OE(r=>this.observer=r)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p4(n){Dc=n}function sS(n){return Dc.loadJS(n)}function m4(){return Dc.recaptchaEnterpriseScript}function g4(){return Dc.gapiScript}function v4(n){return`__${n}${Math.floor(Math.random()*1e6)}`}const y4="recaptcha-enterprise",b4="NO_RECAPTCHA";class S4{constructor(t){this.type=y4,this.auth=fr(t)}async verify(t="verify",r=!1){async function s(u){if(!r){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{Z3(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const m=new W3(h);return u.tenantId==null?u._agentRecaptchaConfig=m:u._tenantRecaptchaConfigs[u.tenantId]=m,f(m.siteKey)}}).catch(h=>{p(h)})})}function l(u,f,p){const h=window.grecaptcha;ny(h)?h.enterprise.ready(()=>{h.enterprise.execute(u,{action:t}).then(m=>{f(m)}).catch(()=>{f(b4)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((u,f)=>{s(this.auth).then(p=>{if(!r&&ny(window.grecaptcha))l(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let h=m4();h.length!==0&&(h+=p),sS(h).then(()=>{l(p,u,f)}).catch(m=>{f(m)})}}).catch(p=>{f(p)})})}}async function ly(n,t,r,s=!1){const l=new S4(n);let u;try{u=await l.verify(r)}catch{u=await l.verify(r,!0)}const f=Object.assign({},t);return s?Object.assign(f,{captchaResp:u}):Object.assign(f,{captchaResponse:u}),Object.assign(f,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(f,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),f}async function nh(n,t,r,s){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await ly(n,t,r,r==="getOobCode");return s(n,u)}else return s(n,t).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${r} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const f=await ly(n,t,r,r==="getOobCode");return s(n,f)}else return Promise.reject(u)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x4(n,t){const r=Pb(n,"auth");if(r.isInitialized()){const l=r.getImmediate(),u=r.getOptions();if(oc(u,t??{}))return l;rn(l,"already-initialized")}return r.initialize({options:t})}function T4(n,t){const r=t?.persistence||[],s=(Array.isArray(r)?r:[r]).map(Un);t?.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(s,t?.popupRedirectResolver)}function w4(n,t,r){const s=fr(n);oe(s._canInitEmulator,s,"emulator-config-failed"),oe(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,u=oS(t),{host:f,port:p}=_4(t),h=p===null?"":`:${p}`;s.config.emulator={url:`${u}//${f}${h}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})}),E4()}function oS(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function _4(n){const t=oS(n),r=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!r)return{host:"",port:null};const s=r[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:cy(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:cy(f)}}}function cy(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function E4(){function n(){const t=document.createElement("p"),r=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(t,r){this.providerId=t,this.signInMethod=r}toJSON(){return Ln("not implemented")}_getIdTokenResponse(t){return Ln("not implemented")}_linkToIdToken(t,r){return Ln("not implemented")}_getReauthenticationResolver(t){return Ln("not implemented")}}async function A4(n,t){return qn(n,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C4(n,t){return oo(n,"POST","/v1/accounts:signInWithPassword",Oi(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function R4(n,t){return oo(n,"POST","/v1/accounts:signInWithEmailLink",Oi(n,t))}async function D4(n,t){return oo(n,"POST","/v1/accounts:signInWithEmailLink",Oi(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Gh{constructor(t,r,s,l=null){super("password",s),this._email=t,this._password=r,this._tenantId=l}static _fromEmailAndPassword(t,r){return new Fs(t,r,"password")}static _fromEmailAndCode(t,r,s=null){return new Fs(t,r,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t;if(r?.email&&r?.password){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nh(t,r,"signInWithPassword",C4);case"emailLink":return R4(t,{email:this._email,oobCode:this._password});default:rn(t,"internal-error")}}async _linkToIdToken(t,r){switch(this.signInMethod){case"password":const s={idToken:r,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return nh(t,s,"signUpPassword",A4);case"emailLink":return D4(t,{idToken:r,email:this._email,oobCode:this._password});default:rn(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ua(n,t){return oo(n,"POST","/v1/accounts:signInWithIdp",Oi(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M4="http://localhost";class or extends Gh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const r=new or(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(r.idToken=t.idToken),t.accessToken&&(r.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(r.nonce=t.nonce),t.pendingToken&&(r.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(r.accessToken=t.oauthToken,r.secret=t.oauthTokenSecret):rn("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const r=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l}=r,u=Ph(r,["providerId","signInMethod"]);if(!s||!l)return null;const f=new or(s,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const r=this.buildRequest();return ua(t,r)}_linkToIdToken(t,r){const s=this.buildRequest();return s.idToken=r,ua(t,s)}_getReauthenticationResolver(t){const r=this.buildRequest();return r.autoCreate=!1,ua(t,r)}buildRequest(){const t={requestUri:M4,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),t.postBody=ro(r)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O4(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function j4(n){const t=Ms(Os(n)).link,r=t?Ms(Os(t)).deep_link_id:null,s=Ms(Os(n)).deep_link_id;return(s?Ms(Os(s)).link:null)||s||r||t||n}class qh{constructor(t){var r,s,l,u,f,p;const h=Ms(Os(t)),m=(r=h.apiKey)!==null&&r!==void 0?r:null,v=(s=h.oobCode)!==null&&s!==void 0?s:null,b=O4((l=h.mode)!==null&&l!==void 0?l:null);oe(m&&v&&b,"argument-error"),this.apiKey=m,this.operation=b,this.code=v,this.continueUrl=(u=h.continueUrl)!==null&&u!==void 0?u:null,this.languageCode=(f=h.languageCode)!==null&&f!==void 0?f:null,this.tenantId=(p=h.tenantId)!==null&&p!==void 0?p:null}static parseLink(t){const r=j4(t);try{return new qh(r)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this.providerId=wa.PROVIDER_ID}static credential(t,r){return Fs._fromEmailAndPassword(t,r)}static credentialWithLink(t,r){const s=qh.parseLink(r);return oe(s,"argument-error"),Fs._fromEmailAndCode(t,s.code,s.tenantId)}}wa.PROVIDER_ID="password";wa.EMAIL_PASSWORD_SIGN_IN_METHOD="password";wa.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lS{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo extends lS{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi extends lo{constructor(){super("facebook.com")}static credential(t){return or._fromParams({providerId:yi.PROVIDER_ID,signInMethod:yi.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return yi.credentialFromTaggedObject(t)}static credentialFromError(t){return yi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return yi.credential(t.oauthAccessToken)}catch{return null}}}yi.FACEBOOK_SIGN_IN_METHOD="facebook.com";yi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi extends lo{constructor(){super("google.com"),this.addScope("profile")}static credential(t,r){return or._fromParams({providerId:bi.PROVIDER_ID,signInMethod:bi.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:r})}static credentialFromResult(t){return bi.credentialFromTaggedObject(t)}static credentialFromError(t){return bi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:r,oauthAccessToken:s}=t;if(!r&&!s)return null;try{return bi.credential(r,s)}catch{return null}}}bi.GOOGLE_SIGN_IN_METHOD="google.com";bi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si extends lo{constructor(){super("github.com")}static credential(t){return or._fromParams({providerId:Si.PROVIDER_ID,signInMethod:Si.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Si.credentialFromTaggedObject(t)}static credentialFromError(t){return Si.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Si.credential(t.oauthAccessToken)}catch{return null}}}Si.GITHUB_SIGN_IN_METHOD="github.com";Si.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi extends lo{constructor(){super("twitter.com")}static credential(t,r){return or._fromParams({providerId:xi.PROVIDER_ID,signInMethod:xi.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:r})}static credentialFromResult(t){return xi.credentialFromTaggedObject(t)}static credentialFromError(t){return xi.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:r,oauthTokenSecret:s}=t;if(!r||!s)return null;try{return xi.credential(r,s)}catch{return null}}}xi.TWITTER_SIGN_IN_METHOD="twitter.com";xi.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function k4(n,t){return oo(n,"POST","/v1/accounts:signUp",Oi(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,r,s,l=!1){const u=await zn._fromIdTokenResponse(t,s,l),f=uy(s);return new lr({user:u,providerId:f,_tokenResponse:s,operationType:r})}static async _forOperation(t,r,s){await t._updateTokensIfNecessary(s,!0);const l=uy(s);return new lr({user:t,providerId:l,_tokenResponse:s,operationType:r})}}function uy(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc extends Mi{constructor(t,r,s,l){var u;super(r.code,r.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,fc.prototype),this.customData={appName:t.name,tenantId:(u=t.tenantId)!==null&&u!==void 0?u:void 0,_serverResponse:r.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,r,s,l){return new fc(t,r,s,l)}}function cS(n,t,r,s){return(t==="reauthenticate"?r._getReauthenticationResolver(n):r._getIdTokenResponse(n)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?fc._fromErrorAndOperation(n,u,t,s):u})}async function N4(n,t,r=!1){const s=await ha(n,t._linkToIdToken(n.auth,await n.getIdToken()),r);return lr._forOperation(n,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L4(n,t,r=!1){const{auth:s}=n;if(dn(s.app))return Promise.reject(Pn(s));const l="reauthenticate";try{const u=await ha(n,cS(s,l,t,n),r);oe(u.idToken,s,"internal-error");const f=Vh(u.idToken);oe(f,s,"internal-error");const{sub:p}=f;return oe(n.uid===p,s,"user-mismatch"),lr._forOperation(n,l,u)}catch(u){throw u?.code==="auth/user-not-found"&&rn(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uS(n,t,r=!1){if(dn(n.app))return Promise.reject(Pn(n));const s="signIn",l=await cS(n,s,t),u=await lr._fromIdTokenResponse(n,s,l);return r||await n._updateCurrentUser(u.user),u}async function z4(n,t){return uS(fr(n),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fS(n){const t=fr(n);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function U4(n,t,r){if(dn(n.app))return Promise.reject(Pn(n));const s=fr(n),f=await nh(s,{returnSecureToken:!0,email:t,password:r,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",k4).catch(h=>{throw h.code==="auth/password-does-not-meet-requirements"&&fS(n),h}),p=await lr._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function P4(n,t,r){return dn(n.app)?Promise.reject(Pn(n)):z4(vn(n),wa.credential(t,r)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&fS(n),s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I4(n,t){return qn(n,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B4(n,{displayName:t,photoURL:r}){if(t===void 0&&r===void 0)return;const s=vn(n),u={idToken:await s.getIdToken(),displayName:t,photoUrl:r,returnSecureToken:!0},f=await ha(s,I4(s.auth,u));s.displayName=f.displayName||null,s.photoURL=f.photoUrl||null;const p=s.providerData.find(({providerId:h})=>h==="password");p&&(p.displayName=s.displayName,p.photoURL=s.photoURL),await s._updateTokensIfNecessary(f)}function V4(n,t,r,s){return vn(n).onIdTokenChanged(t,r,s)}function H4(n,t,r){return vn(n).beforeAuthStateChanged(t,r)}function G4(n,t,r,s){return vn(n).onAuthStateChanged(t,r,s)}function q4(n){return vn(n).signOut()}const dc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS{constructor(t,r){this.storageRetriever=t,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(dc,"1"),this.storage.removeItem(dc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,r){return this.storage.setItem(t,JSON.stringify(r)),Promise.resolve()}_get(t){const r=this.storage.getItem(t);return Promise.resolve(r?JSON.parse(r):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y4=1e3,F4=10;class hS extends dS{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,r)=>this.onStorageEvent(t,r),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=rS(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const r of Object.keys(this.listeners)){const s=this.storage.getItem(r),l=this.localCache[r];s!==l&&t(r,l,s)}}onStorageEvent(t,r=!1){if(!t.key){this.forAllChangedKeys((f,p,h)=>{this.notifyListeners(f,h)});return}const s=t.key;r?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!r&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);l4()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,F4):l()}notifyListeners(t,r){this.localCache[t]=r;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,r,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:r,newValue:s}),!0)})},Y4)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,r){await super._set(t,r),this.localCache[t]=JSON.stringify(r)}async _get(t){const r=await super._get(t);return this.localCache[t]=JSON.stringify(r),r}async _remove(t){await super._remove(t),delete this.localCache[t]}}hS.type="LOCAL";const K4=hS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS extends dS{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,r){}_removeListener(t,r){}}pS.type="SESSION";const mS=pS;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X4(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const r=this.receivers.find(l=>l.isListeningto(t));if(r)return r;const s=new Mc(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const r=t,{eventId:s,eventType:l,data:u}=r.data,f=this.handlersMap[l];if(!f?.size)return;r.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(f).map(async m=>m(r.origin,u)),h=await X4(p);r.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:h})}_subscribe(t,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(r)}_unsubscribe(t,r){this.handlersMap[t]&&r&&this.handlersMap[t].delete(r),(!r||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(n="",t=10){let r="";for(let s=0;s<t;s++)r+=Math.floor(Math.random()*10);return n+r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q4{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,r,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((p,h)=>{const m=Yh("",20);l.port1.start();const v=setTimeout(()=>{h(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(b){const x=b;if(x.data.eventId===m)switch(x.data.status){case"ack":clearTimeout(v),u=setTimeout(()=>{h(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(x.data.response);break;default:clearTimeout(v),clearTimeout(u),h(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:m,data:r},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(){return window}function $4(n){pn().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gS(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function W4(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Z4(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function J4(){return gS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="firebaseLocalStorageDb",eA=1,hc="firebaseLocalStorage",yS="fbase_key";class co{constructor(t){this.request=t}toPromise(){return new Promise((t,r)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function Oc(n,t){return n.transaction([hc],t?"readwrite":"readonly").objectStore(hc)}function tA(){const n=indexedDB.deleteDatabase(vS);return new co(n).toPromise()}function ih(){const n=indexedDB.open(vS,eA);return new Promise((t,r)=>{n.addEventListener("error",()=>{r(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(hc,{keyPath:yS})}catch(l){r(l)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(hc)?t(s):(s.close(),await tA(),t(await ih()))})})}async function fy(n,t,r){const s=Oc(n,!0).put({[yS]:t,value:r});return new co(s).toPromise()}async function nA(n,t){const r=Oc(n,!1).get(t),s=await new co(r).toPromise();return s===void 0?null:s.value}function dy(n,t){const r=Oc(n,!0).delete(t);return new co(r).toPromise()}const iA=800,rA=3;class bS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ih(),this.db)}async _withRetries(t){let r=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(r++>rA)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mc._getInstance(J4()),this.receiver._subscribe("keyChanged",async(t,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(t,r)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await W4(),!this.activeServiceWorker)return;this.sender=new Q4(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((t=s[0])===null||t===void 0)&&t.fulfilled&&!((r=s[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Z4()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ih();return await fy(t,dc,"1"),await dy(t,dc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,r){return this._withPendingWrite(async()=>(await this._withRetries(s=>fy(s,t,r)),this.localCache[t]=r,this.notifyServiceWorker(t)))}async _get(t){const r=await this._withRetries(s=>nA(s,t));return this.localCache[t]=r,r}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(r=>dy(r,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const u=Oc(l,!1).getAll();return new co(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const r=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:u}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),r.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),r.push(l));return r}notifyListeners(t,r){this.localCache[t]=r;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),iA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(r)}_removeListener(t,r){this.listeners[t]&&(this.listeners[t].delete(r),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bS.type="LOCAL";const aA=bS;new so(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(n,t){return t?Un(t):(oe(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh extends Gh{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ua(t,this._buildIdpRequest())}_linkToIdToken(t,r){return ua(t,this._buildIdpRequest(r))}_getReauthenticationResolver(t){return ua(t,this._buildIdpRequest())}_buildIdpRequest(t){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(r.idToken=t),r}}function oA(n){return uS(n.auth,new Fh(n),n.bypassAuthState)}function lA(n){const{auth:t,user:r}=n;return oe(r,t,"internal-error"),L4(r,new Fh(n),n.bypassAuthState)}async function cA(n){const{auth:t,user:r}=n;return oe(r,t,"internal-error"),N4(r,new Fh(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SS{constructor(t,r,s,l,u=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(t,r)=>{this.pendingPromise={resolve:t,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:r,sessionId:s,postBody:l,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const h={auth:this.auth,requestUri:r,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(h))}catch(m){this.reject(m)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return oA;case"linkViaPopup":case"linkViaRedirect":return cA;case"reauthViaPopup":case"reauthViaRedirect":return lA;default:rn(this.auth,"internal-error")}}resolve(t){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new so(2e3,1e4);class ea extends SS{constructor(t,r,s,l,u){super(t,r,l,u),this.provider=s,this.authWindow=null,this.pollId=null,ea.currentPopupAction&&ea.currentPopupAction.cancel(),ea.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return oe(t,this.auth,"internal-error"),t}async onExecution(){Hn(this.filter.length===1,"Popup operations only handle one event");const t=Yh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(hn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(hn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ea.currentPopupAction=null}pollUserCancellation(){const t=()=>{var r,s;if(!((s=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(hn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,uA.get())};t()}}ea.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA="pendingRedirect",$l=new Map;class dA extends SS{constructor(t,r,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,s),this.eventId=null}async execute(){let t=$l.get(this.auth._key());if(!t){try{const s=await hA(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(r){t=()=>Promise.reject(r)}$l.set(this.auth._key(),t)}return this.bypassAuthState||$l.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const r=await this.auth._redirectUserForId(t.eventId);if(r)return this.user=r,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hA(n,t){const r=gA(t),s=mA(n);if(!await s._isAvailable())return!1;const l=await s._get(r)==="true";return await s._remove(r),l}function pA(n,t){$l.set(n._key(),t)}function mA(n){return Un(n._redirectPersistence)}function gA(n){return Ql(fA,n.config.apiKey,n.name)}async function vA(n,t,r=!1){if(dn(n.app))return Promise.reject(Pn(n));const s=fr(n),l=sA(s,t),f=await new dA(s,l,r).execute();return f&&!r&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yA=10*60*1e3;class bA{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let r=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(r=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!SA(t)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=t,r=!0)),r}sendToConsumer(t,r){var s;if(t.error&&!xS(t)){const l=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";r.onError(hn(this.auth,l))}else r.onAuthEvent(t)}isEventForConsumer(t,r){const s=r.eventId===null||!!t.eventId&&t.eventId===r.eventId;return r.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=yA&&this.cachedEventUids.clear(),this.cachedEventUids.has(hy(t))}saveEventToCache(t){this.cachedEventUids.add(hy(t)),this.lastProcessedEventTime=Date.now()}}function hy(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function xS({type:n,error:t}){return n==="unknown"&&t?.code==="auth/no-auth-event"}function SA(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xS(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xA(n,t={}){return qn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wA=/^https?/;async function _A(n){if(n.config.emulator)return;const{authorizedDomains:t}=await xA(n);for(const r of t)try{if(EA(r))return}catch{}rn(n,"unauthorized-domain")}function EA(n){const t=eh(),{protocol:r,hostname:s}=new URL(t);if(n.startsWith("chrome-extension://")){const f=new URL(n);return f.hostname===""&&s===""?r==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):r==="chrome-extension:"&&f.hostname===s}if(!wA.test(r))return!1;if(TA.test(n))return s===n;const l=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA=new so(3e4,6e4);function py(){const n=pn().___jsl;if(n?.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let r=0;r<n.CP.length;r++)n.CP[r]=null}}function CA(n){return new Promise((t,r)=>{var s,l,u;function f(){py(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{py(),r(hn(n,"network-request-failed"))},timeout:AA.get()})}if(!((l=(s=pn().gapi)===null||s===void 0?void 0:s.iframes)===null||l===void 0)&&l.Iframe)t(gapi.iframes.getContext());else if(!((u=pn().gapi)===null||u===void 0)&&u.load)f();else{const p=v4("iframefcb");return pn()[p]=()=>{gapi.load?f():r(hn(n,"network-request-failed"))},sS(`${g4()}?onload=${p}`).catch(h=>r(h))}}).catch(t=>{throw Wl=null,t})}let Wl=null;function RA(n){return Wl=Wl||CA(n),Wl}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=new so(5e3,15e3),MA="__/auth/iframe",OA="emulator/auth/iframe",jA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function NA(n){const t=n.config;oe(t.authDomain,n,"auth-domain-config-required");const r=t.emulator?Bh(t,OA):`https://${n.config.authDomain}/${MA}`,s={apiKey:t.apiKey,appName:n.name,v:ao},l=kA.get(n.config.apiHost);l&&(s.eid=l);const u=n._getFrameworks();return u.length&&(s.fw=u.join(",")),`${r}?${ro(s).slice(1)}`}async function LA(n){const t=await RA(n),r=pn().gapi;return oe(r,n,"internal-error"),t.open({where:document.body,url:NA(n),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jA,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const f=hn(n,"network-request-failed"),p=pn().setTimeout(()=>{u(f)},DA.get());function h(){pn().clearTimeout(p),l(s)}s.ping(h).then(h,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},UA=500,PA=600,IA="_blank",BA="http://localhost";class my{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VA(n,t,r,s=UA,l=PA){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const h=Object.assign(Object.assign({},zA),{width:s.toString(),height:l.toString(),top:u,left:f}),m=St().toLowerCase();r&&(p=Jb(m)?IA:r),Wb(m)&&(t=t||BA,h.scrollbars="yes");const v=Object.entries(h).reduce((x,[w,D])=>`${x}${w}=${D},`,"");if(o4(m)&&p!=="_self")return HA(t||"",p),new my(null);const b=window.open(t||"",p,v);oe(b,n,"popup-blocked");try{b.focus()}catch{}return new my(b)}function HA(n,t){const r=document.createElement("a");r.href=n,r.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GA="__/auth/handler",qA="emulator/auth/handler",YA=encodeURIComponent("fac");async function gy(n,t,r,s,l,u){oe(n.config.authDomain,n,"auth-domain-config-required"),oe(n.config.apiKey,n,"invalid-api-key");const f={apiKey:n.config.apiKey,appName:n.name,authType:r,redirectUrl:s,v:ao,eventId:l};if(t instanceof lS){t.setDefaultLanguage(n.languageCode),f.providerId=t.providerId||"",ME(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[v,b]of Object.entries({}))f[v]=b}if(t instanceof lo){const v=t.getScopes().filter(b=>b!=="");v.length>0&&(f.scopes=v.join(","))}n.tenantId&&(f.tid=n.tenantId);const p=f;for(const v of Object.keys(p))p[v]===void 0&&delete p[v];const h=await n._getAppCheckToken(),m=h?`#${YA}=${encodeURIComponent(h)}`:"";return`${FA(n)}?${ro(p).slice(1)}${m}`}function FA({config:n}){return n.emulator?Bh(n,qA):`https://${n.authDomain}/${GA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yd="webStorageSupport";class KA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mS,this._completeRedirectFn=vA,this._overrideRedirectResult=pA}async _openPopup(t,r,s,l){var u;Hn((u=this.eventManagers[t._key()])===null||u===void 0?void 0:u.manager,"_initialize() not called before _openPopup()");const f=await gy(t,r,s,eh(),l);return VA(t,f,Yh())}async _openRedirect(t,r,s,l){await this._originValidation(t);const u=await gy(t,r,s,eh(),l);return $4(u),new Promise(()=>{})}_initialize(t){const r=t._key();if(this.eventManagers[r]){const{manager:l,promise:u}=this.eventManagers[r];return l?Promise.resolve(l):(Hn(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[r]={promise:s},s.catch(()=>{delete this.eventManagers[r]}),s}async initAndGetManager(t){const r=await LA(t),s=new bA(t);return r.register("authEvent",l=>(oe(l?.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=r,s}_isIframeWebStorageSupported(t,r){this.iframes[t._key()].send(yd,{type:yd},l=>{var u;const f=(u=l?.[0])===null||u===void 0?void 0:u[yd];f!==void 0&&r(!!f),rn(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const r=t._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=_A(t)),this.originValidationPromises[r]}get _shouldInitProactively(){return rS()||Zb()||Hh()}}const XA=KA;var vy="@firebase/auth",yy="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const r=this.auth.onIdTokenChanged(s=>{t(s?.stsTokenManager.accessToken||null)});this.internalListeners.set(t,r),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const r=this.internalListeners.get(t);r&&(this.internalListeners.delete(t),r(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function WA(n){qs(new da("auth",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;oe(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const h={apiKey:f,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:aS(n)},m=new h4(s,l,u,h);return T4(m,r),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,r,s)=>{t.getProvider("auth-internal").initialize()})),qs(new da("auth-internal",t=>{const r=fr(t.getProvider("auth").getImmediate());return(s=>new QA(s))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),oa(vy,yy,$A(n)),oa(vy,yy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=5*60,JA=Nb("authIdTokenMaxAge")||ZA;let by=null;const e5=n=>async t=>{const r=t&&await t.getIdTokenResult(),s=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(s&&s>JA)return;const l=r?.token;by!==l&&(by=l,await fetch(n,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function t5(n=j3()){const t=Pb(n,"auth");if(t.isInitialized())return t.getImmediate();const r=x4(n,{popupRedirectResolver:XA,persistence:[aA,K4,mS]}),s=Nb("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=e5(u.toString());H4(r,f,()=>f(r.currentUser)),V4(r,p=>f(p))}}const l=yE("auth");return l&&w4(r,`http://${l}`),r}function n5(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}p4({loadJS(n){return new Promise((t,r)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=t,s.onerror=l=>{const u=hn("internal-error");u.customData=l,r(u)},s.type="text/javascript",s.charset="UTF-8",n5().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});WA("Browser");var i5="firebase",r5="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oa(i5,r5,"app");const a5={apiKey:"AIzaSyBsPvfLxDws_1CmV13uPOqYCLJkGje6Uc8",authDomain:"netflix-clone-1978.firebaseapp.com",projectId:"netflix-clone-1978",storageBucket:"netflix-clone-1978.firebasestorage.app",messagingSenderId:"18256798685",appId:"1:18256798685:web:d83ff7a9f3f9bb3e15cc34",measurementId:"G-FSXPR6D3XZ"},s5=Ib(a5),As=t5(s5),TS=A.createContext();function jc(){return A.useContext(TS)}function o5({children:n}){const[t,r]=A.useState(null),[s,l]=A.useState(!0);function u(v,b){return U4(As,v,b)}function f(v,b){return P4(As,v,b)}function p(){return q4(As)}function h(v){return B4(As.currentUser,{displayName:v})}A.useEffect(()=>G4(As,b=>{r(b),l(!1)}),[]);const m={currentUser:t,signup:u,login:f,logout:p,updateUserProfile:h};return y.jsx(TS.Provider,{value:m,children:!s&&n})}const wS=A.createContext(),uo=()=>A.useContext(wS),l5=({children:n})=>{const[t,r]=A.useState([]),[s,l]=A.useState([]),[u,f]=A.useState([]),[p,h]=A.useState([]),[m,v]=A.useState(!0),[b,x]=A.useState(null),[w,D]=A.useState(!1),j="AIzaSyDdEyqZdm8iqHG17tM9XYqP_95Mm-gYsH4",k="https://www.googleapis.com/youtube/v3",z=[{id:1,title:"Inception",year:2010,overview:"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",poster_path:"https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",vote_average:8.8,release_date:"2010-07-16",runtime:148,genres:["Sci-Fi","Action","Thriller"],director:"Christopher Nolan",cast:["Leonardo DiCaprio","Joseph Gordon-Levitt","Ellen Page"],type:"movie"},{id:2,title:"The Dark Knight",year:2008,overview:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",poster_path:"https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/hkBaDkMWbLaf8B1lsWsKX7Ew3Xq.jpg",vote_average:9,release_date:"2008-07-18",runtime:152,genres:["Action","Crime","Drama"],director:"Christopher Nolan",cast:["Christian Bale","Heath Ledger","Aaron Eckhart"],type:"movie"},{id:3,title:"Interstellar",year:2014,overview:"A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",poster_path:"https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/nCbkOyOMTEwlEV0LtCOvCnwEONA.jpg",vote_average:8.6,release_date:"2014-11-07",runtime:169,genres:["Adventure","Drama","Sci-Fi"],director:"Christopher Nolan",cast:["Matthew McConaughey","Anne Hathaway","Jessica Chastain"],type:"movie"},{id:4,title:"Breaking Bad",year:2008,overview:"A high school chemistry teacher turned methamphetamine manufacturer partners with a former student to secure his family's financial future as a terminal lung cancer diagnosis pushes him to become a criminal.",poster_path:"https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",vote_average:9.5,release_date:"2008-01-20",runtime:45,genres:["Crime","Drama","Thriller"],director:"Vince Gilligan",cast:["Bryan Cranston","Aaron Paul","Anna Gunn"],type:"tv"},{id:5,title:"Stranger Things",year:2016,overview:"When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",poster_path:"https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",vote_average:8.7,release_date:"2016-07-15",runtime:50,genres:["Drama","Fantasy","Horror"],director:"The Duffer Brothers",cast:["Millie Bobby Brown","Finn Wolfhard","Winona Ryder"],type:"tv"},{id:6,title:"The Crown",year:2016,overview:"The story of Queen Elizabeth II and the events that shaped the second half of the twentieth century.",poster_path:"https://image.tmdb.org/t/p/w500/7k7oKJUyJmUu1Jz3JT5HkqQyE2Q.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/7k7oKJUyJmUu1Jz3JT5HkqQyE2Q.jpg",vote_average:8.7,release_date:"2016-11-04",runtime:60,genres:["Biography","Drama","History"],director:"Peter Morgan",cast:["Olivia Colman","Emma Corrin","Josh O'Connor"],type:"tv"},{id:7,title:"Avengers: Endgame",year:2019,overview:"After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more to reverse Thanos' actions and restore balance.",poster_path:"https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",vote_average:8.4,release_date:"2019-04-26",runtime:181,genres:["Action","Adventure","Sci-Fi"],director:"Anthony Russo, Joe Russo",cast:["Robert Downey Jr.","Chris Evans","Mark Ruffalo"],type:"movie"},{id:8,title:"Game of Thrones",year:2011,overview:"Nine noble families wage war against each other in order to gain control over the mythical land of Westeros.",poster_path:"https://image.tmdb.org/t/p/w500/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg",vote_average:9.3,release_date:"2011-04-17",runtime:57,genres:["Action","Adventure","Drama"],director:"David Benioff, D.B. Weiss",cast:["Emilia Clarke","Kit Harington","Peter Dinklage"],type:"tv"},{id:9,title:"The Matrix",year:1999,overview:"A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",poster_path:"https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/7u3pxc0K1wx32IleAkLv78MKgrw.jpg",vote_average:8.7,release_date:"1999-03-31",runtime:136,genres:["Action","Sci-Fi"],director:"Lana Wachowski, Lilly Wachowski",cast:["Keanu Reeves","Laurence Fishburne","Carrie-Anne Moss"],type:"movie"},{id:10,title:"Money Heist",year:2017,overview:"An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history.",poster_path:"https://image.tmdb.org/t/p/w500/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/9Rj8l6gElLpRL7KArBJN6wW2QZy.jpg",vote_average:8.3,release_date:"2017-05-02",runtime:70,genres:["Action","Crime","Mystery"],director:"Álex Pina",cast:["Úrsula Corberó","Álvaro Morte","Itziar Ituño"],type:"tv"},{id:11,title:"The Shawshank Redemption",year:1994,overview:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",poster_path:"https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",vote_average:9.3,release_date:"1994-09-23",runtime:142,genres:["Drama"],director:"Frank Darabont",cast:["Tim Robbins","Morgan Freeman","Bob Gunton"],type:"movie"},{id:12,title:"Friends",year:1994,overview:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",poster_path:"https://image.tmdb.org/t/p/w500/f496cm9enuEsZkSPzCwnTEGKp15.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/2u7zbn8EfnHY2f2W5GFy5YK1q1C.jpg",vote_average:8.9,release_date:"1994-09-22",runtime:22,genres:["Comedy","Drama","Romance"],director:"David Crane, Marta Kauffman",cast:["Jennifer Aniston","Courteney Cox","Lisa Kudrow"],type:"tv"},{id:13,title:"Pulp Fiction",year:1994,overview:"The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",poster_path:"https://image.tmdb.org/t/p/w500/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2QM528GluxMcE.jpg",vote_average:8.9,release_date:"1994-10-14",runtime:154,genres:["Crime","Drama"],director:"Quentin Tarantino",cast:["John Travolta","Uma Thurman","Samuel L. Jackson"],type:"movie"},{id:14,title:"The Office",year:2005,overview:"A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",poster_path:"https://image.tmdb.org/t/p/w500/qWnJzyZhyy74gjpSjIXWmuk0ifX.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",vote_average:8.9,release_date:"2005-03-24",runtime:22,genres:["Comedy"],director:"Greg Daniels",cast:["Steve Carell","Rainn Wilson","John Krasinski"],type:"tv"},{id:15,title:"Fight Club",year:1999,overview:"An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",poster_path:"https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/52AfXWuXCHn3UjD17rBruA9f5qb.jpg",vote_average:8.8,release_date:"1999-10-15",runtime:139,genres:["Drama"],director:"David Fincher",cast:["Brad Pitt","Edward Norton","Helena Bonham Carter"],type:"movie"},{id:16,title:"The Witcher",year:2019,overview:"Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",poster_path:"https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",vote_average:8.2,release_date:"2019-12-20",runtime:60,genres:["Action","Adventure","Drama"],director:"Lauren Schmidt Hissrich",cast:["Henry Cavill","Anya Chalotra","Freya Allan"],type:"tv"},{id:17,title:"Forrest Gump",year:1994,overview:"The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",poster_path:"https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",vote_average:8.8,release_date:"1994-07-06",runtime:142,genres:["Comedy","Drama","Romance"],director:"Robert Zemeckis",cast:["Tom Hanks","Robin Wright","Gary Sinise"],type:"movie"},{id:18,title:"The Mandalorian",year:2019,overview:"The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",poster_path:"https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/9yBVqNruk6YfxthWQNstnJJfIqQ.jpg",vote_average:8.8,release_date:"2019-11-12",runtime:40,genres:["Action","Adventure","Sci-Fi"],director:"Jon Favreau",cast:["Pedro Pascal","Gina Carano","Carl Weathers"],type:"tv"},{id:19,title:"Goodfellas",year:1990,overview:"The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",poster_path:"https://image.tmdb.org/t/p/w500/aKuFiU82suyIS7pUZfp3YIrqpgb.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/6POBWybSBDBKjSs1VAQcnQC1qyt.jpg",vote_average:8.7,release_date:"1990-09-19",runtime:146,genres:["Crime","Drama"],director:"Martin Scorsese",cast:["Robert De Niro","Ray Liotta","Joe Pesci"],type:"movie"},{id:20,title:"The Boys",year:2019,overview:"A group of vigilantes known informally as 'The Boys' set out to take down corrupt superheroes with no more than blue-collar grit and a willingness to fight dirty.",poster_path:"https://image.tmdb.org/t/p/w500/stTEycfG992cHYGEUEBFKkR1k01.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/9TVD6BwT64aG8Uw5Mkr7dmpqLJt.jpg",vote_average:8.7,release_date:"2019-07-26",runtime:60,genres:["Action","Comedy","Crime"],director:"Eric Kripke",cast:["Karl Urban","Jack Quaid","Antony Starr"],type:"tv"},{id:21,title:"The Godfather",year:1972,overview:"Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family.",poster_path:"https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",vote_average:9.2,release_date:"1972-03-24",runtime:175,genres:["Crime","Drama"],director:"Francis Ford Coppola",cast:["Marlon Brando","Al Pacino","James Caan"],type:"movie"},{id:22,title:"Rick and Morty",year:2013,overview:"An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",poster_path:"https://image.tmdb.org/t/p/w500/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/8kOWDBK6XlPUzckuHDo3wwVRFwt.jpg",vote_average:8.7,release_date:"2013-12-02",runtime:23,genres:["Animation","Comedy","Sci-Fi"],director:"Justin Roiland, Dan Harmon",cast:["Justin Roiland","Chris Parnell","Spencer Grammer"],type:"tv"},{id:23,title:"Schindler's List",year:1993,overview:"In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",poster_path:"https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIFyrH.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/1Zf6wkxGc1mo3ZR7rJGmcmqS1qX.jpg",vote_average:8.9,release_date:"1993-12-15",runtime:195,genres:["Biography","Drama","History"],director:"Steven Spielberg",cast:["Liam Neeson","Ralph Fiennes","Ben Kingsley"],type:"movie"},{id:24,title:"The Walking Dead",year:2010,overview:"Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",poster_path:"https://image.tmdb.org/t/p/w500/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/wA2WojvSfQOib0JzWt4gE6Tn2Rp.jpg",vote_average:8.2,release_date:"2010-10-31",runtime:44,genres:["Drama","Horror","Thriller"],director:"Frank Darabont",cast:["Andrew Lincoln","Norman Reedus","Melissa McBride"],type:"tv"},{id:25,title:"The Silence of the Lambs",year:1991,overview:"A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",poster_path:"https://image.tmdb.org/t/p/w500/rplLJ2hPcOQmkFhTqUte0MkEaO2.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/mfwq2nMBzArzQ7Y9RKE8SKeeoQz.jpg",vote_average:8.6,release_date:"1991-02-14",runtime:118,genres:["Crime","Drama","Thriller"],director:"Jonathan Demme",cast:["Jodie Foster","Anthony Hopkins","Lawrence A. Bonney"],type:"movie"},{id:26,title:"Black Mirror",year:2011,overview:"An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",poster_path:"https://image.tmdb.org/t/p/w500/7PRqCdBQfVp36NUv9Ic5wPqsTv9.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/5a4JdoYwFZ6Q79zVSgoVRlLV1y.jpg",vote_average:8.8,release_date:"2011-12-04",runtime:60,genres:["Drama","Sci-Fi","Thriller"],director:"Charlie Brooker",cast:["Daniel Lapaine","Hannah John-Kamen","Michaela Coel"],type:"tv"},{id:27,title:"The Lion King",year:1994,overview:"Simba idolizes his father, King Mufasa, and takes to heart his own royal destiny. But not everyone in the kingdom celebrates the new cub's arrival.",poster_path:"https://image.tmdb.org/t/p/w500/bKPtXn9n4M4s8vvZrbw40mYsefB.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg",vote_average:8.5,release_date:"1994-06-24",runtime:88,genres:["Animation","Adventure","Drama"],director:"Roger Allers, Rob Minkoff",cast:["Matthew Broderick","Jeremy Irons","James Earl Jones"],type:"movie"},{id:28,title:"The Big Bang Theory",year:2007,overview:"The sitcom is centered on five characters living in Pasadena, California: roommates Leonard Hofstadter and Sheldon Cooper, both physicists; Penny, a waitress and aspiring actress who lives across the hall.",poster_path:"https://image.tmdb.org/t/p/w500/ooBGRQBdbGzBxAVfExiO8rTkTOZ.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/ooBGRQBdbGzBxAVfExiO8rTkTOZ.jpg",vote_average:7.9,release_date:"2007-09-24",runtime:22,genres:["Comedy","Romance"],director:"Chuck Lorre, Bill Prady",cast:["Johnny Galecki","Jim Parsons","Kaley Cuoco"],type:"tv"},{id:29,title:"The Green Mile",year:1999,overview:"The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",poster_path:"https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/8XDJvUWd29Sn3Gjqmlr2npgHm8d.jpg",vote_average:8.6,release_date:"1999-12-10",runtime:189,genres:["Crime","Drama","Fantasy"],director:"Frank Darabont",cast:["Tom Hanks","Michael Clarke Duncan","David Morse"],type:"movie"},{id:30,title:"Narcos",year:2015,overview:"A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",poster_path:"https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",vote_average:8.8,release_date:"2015-08-28",runtime:50,genres:["Biography","Crime","Drama"],director:"Carlo Bernard, Chris Brancato",cast:["Wagner Moura","Boyd Holbrook","Pedro Pascal"],type:"tv"},{id:31,title:"The Lord of the Rings: The Fellowship of the Ring",year:2001,overview:"Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator.",poster_path:"https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/1stdJBvhhGVBqr6hJIyqAg88Cnv.jpg",vote_average:8.8,release_date:"2001-12-19",runtime:178,genres:["Action","Adventure","Drama"],director:"Peter Jackson",cast:["Elijah Wood","Ian McKellen","Viggo Mortensen"],type:"movie"},{id:32,title:"The Simpsons",year:1989,overview:"Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family.",poster_path:"https://image.tmdb.org/t/p/w500/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",vote_average:8.7,release_date:"1989-12-17",runtime:22,genres:["Animation","Comedy"],director:"Matt Groening",cast:["Dan Castellaneta","Julie Kavner","Nancy Cartwright"],type:"tv"},{id:33,title:"The Shining",year:1980,overview:"Jack Torrance accepts a caretaker job at the Overlook Hotel, where he, along with his wife Wendy and their son Danny, must live isolated from the rest of the world for the winter.",poster_path:"https://image.tmdb.org/t/p/w500/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/5E9SD9MgUT8ag3CVd6cjYghvqhs.jpg",vote_average:8.4,release_date:"1980-05-23",runtime:146,genres:["Horror"],director:"Stanley Kubrick",cast:["Jack Nicholson","Shelley Duvall","Danny Lloyd"],type:"movie"},{id:34,title:"Westworld",year:2016,overview:"A dark odyssey about the dawn of artificial consciousness and the evolution of sin. Set at the intersection of the near future and the reimagined past.",poster_path:"https://image.tmdb.org/t/p/w500/6aj09UTMQNyfSfk0ZX8r2mXKnte.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/6aj09UTMQNyfSfk0ZX8r2mXKnte.jpg",vote_average:8.6,release_date:"2016-10-02",runtime:60,genres:["Drama","Mystery","Sci-Fi"],director:"Jonathan Nolan, Lisa Joy",cast:["Evan Rachel Wood","Thandie Newton","Jeffrey Wright"],type:"tv"},{id:35,title:"The Departed",year:2006,overview:"To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise.",poster_path:"https://image.tmdb.org/t/p/w500/n4H2vuvuIbM761s9zG4NQ6bb0p9.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/7k9y58XD1tD1L5VZ6JDh0PqGEV5.jpg",vote_average:8.5,release_date:"2006-10-06",runtime:151,genres:["Crime","Drama","Thriller"],director:"Martin Scorsese",cast:["Leonardo DiCaprio","Matt Damon","Jack Nicholson"],type:"movie"},{id:36,title:"The Handmaid's Tale",year:2017,overview:"Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",poster_path:"https://image.tmdb.org/t/p/w500/oAtxsn3pICDfKf5Ogya1wE0b5kK.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/oAtxsn3pICDfKf5Ogya1wE0b5kK.jpg",vote_average:8.4,release_date:"2017-04-26",runtime:60,genres:["Drama","Sci-Fi","Thriller"],director:"Bruce Miller",cast:["Elisabeth Moss","Joseph Fiennes","Yvonne Strahovski"],type:"tv"},{id:37,title:"Gladiator",year:2e3,overview:"A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",poster_path:"https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",vote_average:8.5,release_date:"2000-05-05",runtime:155,genres:["Action","Adventure","Drama"],director:"Ridley Scott",cast:["Russell Crowe","Joaquin Phoenix","Connie Nielsen"],type:"movie"},{id:38,title:"The Expanse",year:2015,overview:"A thriller set two hundred years in the future following the case of a missing young woman who brings a hardened detective and a rogue ship's captain together in a race across the solar system.",poster_path:"https://image.tmdb.org/t/p/w500/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/6WBIzCgmDCYrqh64yDREGeDk9d3.jpg",vote_average:8.5,release_date:"2015-12-14",runtime:60,genres:["Drama","Mystery","Sci-Fi"],director:"Mark Fergus, Hawk Ostby",cast:["Steven Strait","Cas Anvar","Dominique Tipper"],type:"tv"},{id:39,title:"The Good, the Bad and the Ugly",year:1966,overview:"A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",poster_path:"https://image.tmdb.org/t/p/w500/WOJDEPGQJkMZRBjVC41m9tNSWr1.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/WOJDEPGQJkMZRBjVC41m9tNSWr1.jpg",vote_average:8.8,release_date:"1966-12-23",runtime:161,genres:["Western"],director:"Sergio Leone",cast:["Clint Eastwood","Lee Van Cleef","Eli Wallach"],type:"movie"},{id:40,title:"The Queen's Gambit",year:2020,overview:"Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA.",poster_path:"https://image.tmdb.org/t/p/w500/34OGJFEqHX2Yl2NPCm5C9AxlgaQ.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/34OGJFEqHX2Yl2NPCm5C9AxlgaQ.jpg",vote_average:8.6,release_date:"2020-10-23",runtime:60,genres:["Drama"],director:"Scott Frank, Allan Scott",cast:["Anya Taylor-Joy","Chloe Pirrie","Bill Camp"],type:"tv"},{id:41,title:"The Terminator",year:1984,overview:"In the post-apocalyptic future, reigning tyrannical supercomputers teleport a cyborg assassin known as the 'Terminator' back to 1984 to kill Sarah Connor.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8,release_date:"1984-10-26",runtime:107,genres:["Action","Sci-Fi"],director:"James Cameron",cast:["Arnold Schwarzenegger","Linda Hamilton","Michael Biehn"],type:"movie"},{id:42,title:"Mindhunter",year:2017,overview:"In the late 1970s two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8.6,release_date:"2017-10-13",runtime:60,genres:["Crime","Drama","Thriller"],director:"Joe Penhall",cast:["Jonathan Groff","Holt McCallany","Anna Torv"],type:"tv"},{id:43,title:"The Princess Bride",year:1987,overview:"While home sick in bed, a young boy's grandfather reads him the story of a farmboy-turned-pirate who encounters numerous obstacles.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8.1,release_date:"1987-09-25",runtime:98,genres:["Adventure","Comedy","Family"],director:"Rob Reiner",cast:["Cary Elwes","Mandy Patinkin","Robin Wright"],type:"movie"},{id:44,title:"The Umbrella Academy",year:2019,overview:"A family of former child heroes, now grown apart, must reunite to continue to protect the world.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8,release_date:"2019-02-15",runtime:60,genres:["Action","Adventure","Comedy"],director:"Steve Blackman",cast:["Ellen Page","Tom Hopper","David Castañeda"],type:"tv"},{id:45,title:"The Grand Budapest Hotel",year:2014,overview:"A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8.1,release_date:"2014-03-07",runtime:99,genres:["Comedy","Drama"],director:"Wes Anderson",cast:["Ralph Fiennes","Tony Revolori","F. Murray Abraham"],type:"movie"},{id:46,title:"The Haunting of Hill House",year:2018,overview:"Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8.5,release_date:"2018-10-12",runtime:60,genres:["Drama","Horror","Mystery"],director:"Mike Flanagan",cast:["Michiel Huisman","Carla Gugino","Henry Thomas"],type:"tv"},{id:47,title:"The Martian",year:2015,overview:"An astronaut becomes stranded on Mars after his team assume him dead, and must rely on his ingenuity to find a way to signal to Earth that he is alive.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8,release_date:"2015-10-02",runtime:144,genres:["Adventure","Drama","Sci-Fi"],director:"Ridley Scott",cast:["Matt Damon","Jessica Chastain","Kristen Wiig"],type:"movie"},{id:48,title:"The Good Place",year:2016,overview:"Four people and their otherworldly friar struggle in the afterlife to define what it means to be good.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8.2,release_date:"2016-09-19",runtime:22,genres:["Comedy","Drama","Fantasy"],director:"Michael Schur",cast:["Kristen Bell","William Jackson Harper","Jameela Jamil"],type:"tv"},{id:49,title:"The Revenant",year:2015,overview:"A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.",poster_path:"https://image.tmdb.org/t/p/w500/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/qvktm0BHcnmDpul4Hz01GIazWPr.jpg",vote_average:8,release_date:"2015-12-25",runtime:156,genres:["Action","Adventure","Drama"],director:"Alejandro G. Iñárritu",cast:["Leonardo DiCaprio","Tom Hardy","Domhnall Gleeson"],type:"movie"},{id:50,title:"The Mandalorian",year:2019,overview:"The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",poster_path:"https://image.tmdb.org/t/p/w500/sWgBv7LV2PRoQgkxwlibdGXKz1S.jpg",backdrop_path:"https://image.tmdb.org/t/p/original/9yBVqNruk6YfxthWQNstnJJfIqQ.jpg",vote_average:8.8,release_date:"2019-11-12",runtime:40,genres:["Action","Adventure","Sci-Fi"],director:"Jon Favreau",cast:["Pedro Pascal","Gina Carano","Carl Weathers"],type:"tv"}],N=async()=>(await new Promise(ue=>setTimeout(ue,500)),z.slice(0,12)),P=async()=>(await new Promise(ue=>setTimeout(ue,500)),z.slice(0,15)),Y=async()=>(await new Promise(ue=>setTimeout(ue,500)),z.slice(0,12)),I=async()=>(await new Promise(ue=>setTimeout(ue,500)),z.slice(0,12)),K=async ue=>(await new Promise(Te=>setTimeout(Te,300)),z.find(Te=>Te.id===parseInt(ue))||null),X=async ue=>{await new Promise(Ue=>setTimeout(Ue,500));const Te=ue.toLowerCase();return z.filter(Ue=>Ue.title.toLowerCase().includes(Te)||Ue.overview.toLowerCase().includes(Te))},W=async(ue,Te=null)=>{try{const Ue=Te?`${ue} ${Te} official trailer`:`${ue} official trailer`,B=await(await fetch(`${k}/search?part=snippet&q=${encodeURIComponent(Ue)}&type=video&videoDuration=medium&maxResults=1&key=${j}`)).json();if(B.items&&B.items.length>0){const F=B.items[0];return{id:F.id.videoId,title:F.snippet.title,thumbnail:F.snippet.thumbnails.high.url,url:`https://www.youtube.com/watch?v=${F.id.videoId}`}}return null}catch(Ue){return console.error("Error searching trailer:",Ue),null}},he=async ue=>{try{const Te=await W(ue.title,ue.year);Te&&(x(Te),D(!0))}catch(Te){console.error("Error loading trailer:",Te)}},ke=()=>{D(!1),x(null)};A.useEffect(()=>{(async()=>{v(!0);try{const[Te,Ue,Ve,B]=await Promise.all([N(),P(),Y(),I()]);r(Te),f(Ue),l(Ve),h(B)}catch(Te){console.error("Error loading movies:",Te)}finally{v(!1)}})()},[]);const Xe={trending:t,topRated:s,popular:u,upcoming:p,loading:m,fetchMovieDetails:K,searchMovies:X,playTrailer:he,selectedTrailer:b,showTrailerPopup:w,closeTrailerPopup:ke};return y.jsx(wS.Provider,{value:Xe,children:n})};var vt=function(){return vt=Object.assign||function(t){for(var r,s=1,l=arguments.length;s<l;s++){r=arguments[s];for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&(t[u]=r[u])}return t},vt.apply(this,arguments)};function Ks(n,t,r){if(r||arguments.length===2)for(var s=0,l=t.length,u;s<l;s++)(u||!(s in t))&&(u||(u=Array.prototype.slice.call(t,0,s)),u[s]=t[s]);return n.concat(u||Array.prototype.slice.call(t))}var Ne="-ms-",Us="-moz-",_e="-webkit-",_S="comm",kc="rule",Kh="decl",c5="@import",ES="@keyframes",u5="@layer",AS=Math.abs,Xh=String.fromCharCode,rh=Object.assign;function f5(n,t){return st(n,0)^45?(((t<<2^st(n,0))<<2^st(n,1))<<2^st(n,2))<<2^st(n,3):0}function CS(n){return n.trim()}function Nn(n,t){return(n=t.exec(n))?n[0]:n}function fe(n,t,r){return n.replace(t,r)}function Zl(n,t,r){return n.indexOf(t,r)}function st(n,t){return n.charCodeAt(t)|0}function pa(n,t,r){return n.slice(t,r)}function fn(n){return n.length}function RS(n){return n.length}function js(n,t){return t.push(n),n}function d5(n,t){return n.map(t).join("")}function Sy(n,t){return n.filter(function(r){return!Nn(r,t)})}var Nc=1,ma=1,DS=0,Wt=0,We=0,_a="";function Lc(n,t,r,s,l,u,f,p){return{value:n,root:t,parent:r,type:s,props:l,children:u,line:Nc,column:ma,length:f,return:"",siblings:p}}function gi(n,t){return rh(Lc("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},t)}function Zr(n){for(;n.root;)n=gi(n.root,{children:[n]});js(n,n.siblings)}function h5(){return We}function p5(){return We=Wt>0?st(_a,--Wt):0,ma--,We===10&&(ma=1,Nc--),We}function nn(){return We=Wt<DS?st(_a,Wt++):0,ma++,We===10&&(ma=1,Nc++),We}function ar(){return st(_a,Wt)}function Jl(){return Wt}function zc(n,t){return pa(_a,n,t)}function ah(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function m5(n){return Nc=ma=1,DS=fn(_a=n),Wt=0,[]}function g5(n){return _a="",n}function bd(n){return CS(zc(Wt-1,sh(n===91?n+2:n===40?n+1:n)))}function v5(n){for(;(We=ar())&&We<33;)nn();return ah(n)>2||ah(We)>3?"":" "}function y5(n,t){for(;--t&&nn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return zc(n,Jl()+(t<6&&ar()==32&&nn()==32))}function sh(n){for(;nn();)switch(We){case n:return Wt;case 34:case 39:n!==34&&n!==39&&sh(We);break;case 40:n===41&&sh(n);break;case 92:nn();break}return Wt}function b5(n,t){for(;nn()&&n+We!==57;)if(n+We===84&&ar()===47)break;return"/*"+zc(t,Wt-1)+"*"+Xh(n===47?n:nn())}function S5(n){for(;!ah(ar());)nn();return zc(n,Wt)}function x5(n){return g5(ec("",null,null,null,[""],n=m5(n),0,[0],n))}function ec(n,t,r,s,l,u,f,p,h){for(var m=0,v=0,b=f,x=0,w=0,D=0,j=1,k=1,z=1,N=0,P="",Y=l,I=u,K=s,X=P;k;)switch(D=N,N=nn()){case 40:if(D!=108&&st(X,b-1)==58){Zl(X+=fe(bd(N),"&","&\f"),"&\f",AS(m?p[m-1]:0))!=-1&&(z=-1);break}case 34:case 39:case 91:X+=bd(N);break;case 9:case 10:case 13:case 32:X+=v5(D);break;case 92:X+=y5(Jl()-1,7);continue;case 47:switch(ar()){case 42:case 47:js(T5(b5(nn(),Jl()),t,r,h),h);break;default:X+="/"}break;case 123*j:p[m++]=fn(X)*z;case 125*j:case 59:case 0:switch(N){case 0:case 125:k=0;case 59+v:z==-1&&(X=fe(X,/\f/g,"")),w>0&&fn(X)-b&&js(w>32?Ty(X+";",s,r,b-1,h):Ty(fe(X," ","")+";",s,r,b-2,h),h);break;case 59:X+=";";default:if(js(K=xy(X,t,r,m,v,l,p,P,Y=[],I=[],b,u),u),N===123)if(v===0)ec(X,t,K,K,Y,u,b,p,I);else switch(x===99&&st(X,3)===110?100:x){case 100:case 108:case 109:case 115:ec(n,K,K,s&&js(xy(n,K,K,0,0,l,p,P,l,Y=[],b,I),I),l,I,b,p,s?Y:I);break;default:ec(X,K,K,K,[""],I,0,p,I)}}m=v=w=0,j=z=1,P=X="",b=f;break;case 58:b=1+fn(X),w=D;default:if(j<1){if(N==123)--j;else if(N==125&&j++==0&&p5()==125)continue}switch(X+=Xh(N),N*j){case 38:z=v>0?1:(X+="\f",-1);break;case 44:p[m++]=(fn(X)-1)*z,z=1;break;case 64:ar()===45&&(X+=bd(nn())),x=ar(),v=b=fn(P=X+=S5(Jl())),N++;break;case 45:D===45&&fn(X)==2&&(j=0)}}return u}function xy(n,t,r,s,l,u,f,p,h,m,v,b){for(var x=l-1,w=l===0?u:[""],D=RS(w),j=0,k=0,z=0;j<s;++j)for(var N=0,P=pa(n,x+1,x=AS(k=f[j])),Y=n;N<D;++N)(Y=CS(k>0?w[N]+" "+P:fe(P,/&\f/g,w[N])))&&(h[z++]=Y);return Lc(n,t,r,l===0?kc:p,h,m,v,b)}function T5(n,t,r,s){return Lc(n,t,r,_S,Xh(h5()),pa(n,2,-2),0,s)}function Ty(n,t,r,s,l){return Lc(n,t,r,Kh,pa(n,0,s),pa(n,s+1,-1),s,l)}function MS(n,t,r){switch(f5(n,t)){case 5103:return _e+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return _e+n+n;case 4789:return Us+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return _e+n+Us+n+Ne+n+n;case 5936:switch(st(n,t+11)){case 114:return _e+n+Ne+fe(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return _e+n+Ne+fe(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return _e+n+Ne+fe(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return _e+n+Ne+n+n;case 6165:return _e+n+Ne+"flex-"+n+n;case 5187:return _e+n+fe(n,/(\w+).+(:[^]+)/,_e+"box-$1$2"+Ne+"flex-$1$2")+n;case 5443:return _e+n+Ne+"flex-item-"+fe(n,/flex-|-self/g,"")+(Nn(n,/flex-|baseline/)?"":Ne+"grid-row-"+fe(n,/flex-|-self/g,""))+n;case 4675:return _e+n+Ne+"flex-line-pack"+fe(n,/align-content|flex-|-self/g,"")+n;case 5548:return _e+n+Ne+fe(n,"shrink","negative")+n;case 5292:return _e+n+Ne+fe(n,"basis","preferred-size")+n;case 6060:return _e+"box-"+fe(n,"-grow","")+_e+n+Ne+fe(n,"grow","positive")+n;case 4554:return _e+fe(n,/([^-])(transform)/g,"$1"+_e+"$2")+n;case 6187:return fe(fe(fe(n,/(zoom-|grab)/,_e+"$1"),/(image-set)/,_e+"$1"),n,"")+n;case 5495:case 3959:return fe(n,/(image-set\([^]*)/,_e+"$1$`$1");case 4968:return fe(fe(n,/(.+:)(flex-)?(.*)/,_e+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+_e+n+n;case 4200:if(!Nn(n,/flex-|baseline/))return Ne+"grid-column-align"+pa(n,t)+n;break;case 2592:case 3360:return Ne+fe(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(s,l){return t=l,Nn(s.props,/grid-\w+-end/)})?~Zl(n+(r=r[t].value),"span",0)?n:Ne+fe(n,"-start","")+n+Ne+"grid-row-span:"+(~Zl(r,"span",0)?Nn(r,/\d+/):+Nn(r,/\d+/)-+Nn(n,/\d+/))+";":Ne+fe(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(s){return Nn(s.props,/grid-\w+-start/)})?n:Ne+fe(fe(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return fe(n,/(.+)-inline(.+)/,_e+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(fn(n)-1-t>6)switch(st(n,t+1)){case 109:if(st(n,t+4)!==45)break;case 102:return fe(n,/(.+:)(.+)-([^]+)/,"$1"+_e+"$2-$3$1"+Us+(st(n,t+3)==108?"$3":"$2-$3"))+n;case 115:return~Zl(n,"stretch",0)?MS(fe(n,"stretch","fill-available"),t,r)+n:n}break;case 5152:case 5920:return fe(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(s,l,u,f,p,h,m){return Ne+l+":"+u+m+(f?Ne+l+"-span:"+(p?h:+h-+u)+m:"")+n});case 4949:if(st(n,t+6)===121)return fe(n,":",":"+_e)+n;break;case 6444:switch(st(n,st(n,14)===45?18:11)){case 120:return fe(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+_e+(st(n,14)===45?"inline-":"")+"box$3$1"+_e+"$2$3$1"+Ne+"$2box$3")+n;case 100:return fe(n,":",":"+Ne)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return fe(n,"scroll-","scroll-snap-")+n}return n}function pc(n,t){for(var r="",s=0;s<n.length;s++)r+=t(n[s],s,n,t)||"";return r}function w5(n,t,r,s){switch(n.type){case u5:if(n.children.length)break;case c5:case Kh:return n.return=n.return||n.value;case _S:return"";case ES:return n.return=n.value+"{"+pc(n.children,s)+"}";case kc:if(!fn(n.value=n.props.join(",")))return""}return fn(r=pc(n.children,s))?n.return=n.value+"{"+r+"}":""}function _5(n){var t=RS(n);return function(r,s,l,u){for(var f="",p=0;p<t;p++)f+=n[p](r,s,l,u)||"";return f}}function E5(n){return function(t){t.root||(t=t.return)&&n(t)}}function A5(n,t,r,s){if(n.length>-1&&!n.return)switch(n.type){case Kh:n.return=MS(n.value,n.length,r);return;case ES:return pc([gi(n,{value:fe(n.value,"@","@"+_e)})],s);case kc:if(n.length)return d5(r=n.props,function(l){switch(Nn(l,s=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Zr(gi(n,{props:[fe(l,/:(read-\w+)/,":"+Us+"$1")]})),Zr(gi(n,{props:[l]})),rh(n,{props:Sy(r,s)});break;case"::placeholder":Zr(gi(n,{props:[fe(l,/:(plac\w+)/,":"+_e+"input-$1")]})),Zr(gi(n,{props:[fe(l,/:(plac\w+)/,":"+Us+"$1")]})),Zr(gi(n,{props:[fe(l,/:(plac\w+)/,Ne+"input-$1")]})),Zr(gi(n,{props:[l]})),rh(n,{props:Sy(r,s)});break}return""})}}var C5={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},zt={},ga=typeof process<"u"&&zt!==void 0&&(zt.REACT_APP_SC_ATTR||zt.SC_ATTR)||"data-styled",OS="active",jS="data-styled-version",Uc="6.1.19",Qh=`/*!sc*/
`,mc=typeof window<"u"&&typeof document<"u",R5=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&zt!==void 0&&zt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&zt.REACT_APP_SC_DISABLE_SPEEDY!==""?zt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&zt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&zt!==void 0&&zt.SC_DISABLE_SPEEDY!==void 0&&zt.SC_DISABLE_SPEEDY!==""&&zt.SC_DISABLE_SPEEDY!=="false"&&zt.SC_DISABLE_SPEEDY),D5={},Pc=Object.freeze([]),va=Object.freeze({});function kS(n,t,r){return r===void 0&&(r=va),n.theme!==r.theme&&n.theme||t||r.theme}var NS=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),M5=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,O5=/(^-|-$)/g;function wy(n){return n.replace(M5,"-").replace(O5,"")}var j5=/(a)(d)/gi,jl=52,_y=function(n){return String.fromCharCode(n+(n>25?39:97))};function oh(n){var t,r="";for(t=Math.abs(n);t>jl;t=t/jl|0)r=_y(t%jl)+r;return(_y(t%jl)+r).replace(j5,"$1-$2")}var Sd,LS=5381,ta=function(n,t){for(var r=t.length;r;)n=33*n^t.charCodeAt(--r);return n},zS=function(n){return ta(LS,n)};function US(n){return oh(zS(n)>>>0)}function k5(n){return n.displayName||n.name||"Component"}function xd(n){return typeof n=="string"&&!0}var PS=typeof Symbol=="function"&&Symbol.for,IS=PS?Symbol.for("react.memo"):60115,N5=PS?Symbol.for("react.forward_ref"):60112,L5={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},z5={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},BS={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},U5=((Sd={})[N5]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Sd[IS]=BS,Sd);function Ey(n){return("type"in(t=n)&&t.type.$$typeof)===IS?BS:"$$typeof"in n?U5[n.$$typeof]:L5;var t}var P5=Object.defineProperty,I5=Object.getOwnPropertyNames,Ay=Object.getOwnPropertySymbols,B5=Object.getOwnPropertyDescriptor,V5=Object.getPrototypeOf,Cy=Object.prototype;function VS(n,t,r){if(typeof t!="string"){if(Cy){var s=V5(t);s&&s!==Cy&&VS(n,s,r)}var l=I5(t);Ay&&(l=l.concat(Ay(t)));for(var u=Ey(n),f=Ey(t),p=0;p<l.length;++p){var h=l[p];if(!(h in z5||r&&r[h]||f&&h in f||u&&h in u)){var m=B5(t,h);try{P5(n,h,m)}catch{}}}}return n}function ya(n){return typeof n=="function"}function $h(n){return typeof n=="object"&&"styledComponentId"in n}function ir(n,t){return n&&t?"".concat(n," ").concat(t):n||t||""}function lh(n,t){if(n.length===0)return"";for(var r=n[0],s=1;s<n.length;s++)r+=n[s];return r}function Xs(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function ch(n,t,r){if(r===void 0&&(r=!1),!r&&!Xs(n)&&!Array.isArray(n))return t;if(Array.isArray(t))for(var s=0;s<t.length;s++)n[s]=ch(n[s],t[s]);else if(Xs(t))for(var s in t)n[s]=ch(n[s],t[s]);return n}function Wh(n,t){Object.defineProperty(n,"toString",{value:t})}function fo(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var H5=function(){function n(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return n.prototype.indexOfGroup=function(t){for(var r=0,s=0;s<t;s++)r+=this.groupSizes[s];return r},n.prototype.insertRules=function(t,r){if(t>=this.groupSizes.length){for(var s=this.groupSizes,l=s.length,u=l;t>=u;)if((u<<=1)<0)throw fo(16,"".concat(t));this.groupSizes=new Uint32Array(u),this.groupSizes.set(s),this.length=u;for(var f=l;f<u;f++)this.groupSizes[f]=0}for(var p=this.indexOfGroup(t+1),h=(f=0,r.length);f<h;f++)this.tag.insertRule(p,r[f])&&(this.groupSizes[t]++,p++)},n.prototype.clearGroup=function(t){if(t<this.length){var r=this.groupSizes[t],s=this.indexOfGroup(t),l=s+r;this.groupSizes[t]=0;for(var u=s;u<l;u++)this.tag.deleteRule(s)}},n.prototype.getGroup=function(t){var r="";if(t>=this.length||this.groupSizes[t]===0)return r;for(var s=this.groupSizes[t],l=this.indexOfGroup(t),u=l+s,f=l;f<u;f++)r+="".concat(this.tag.getRule(f)).concat(Qh);return r},n}(),tc=new Map,gc=new Map,nc=1,kl=function(n){if(tc.has(n))return tc.get(n);for(;gc.has(nc);)nc++;var t=nc++;return tc.set(n,t),gc.set(t,n),t},G5=function(n,t){nc=t+1,tc.set(n,t),gc.set(t,n)},q5="style[".concat(ga,"][").concat(jS,'="').concat(Uc,'"]'),Y5=new RegExp("^".concat(ga,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),F5=function(n,t,r){for(var s,l=r.split(","),u=0,f=l.length;u<f;u++)(s=l[u])&&n.registerName(t,s)},K5=function(n,t){for(var r,s=((r=t.textContent)!==null&&r!==void 0?r:"").split(Qh),l=[],u=0,f=s.length;u<f;u++){var p=s[u].trim();if(p){var h=p.match(Y5);if(h){var m=0|parseInt(h[1],10),v=h[2];m!==0&&(G5(v,m),F5(n,v,h[3]),n.getTag().insertRules(m,l)),l.length=0}else l.push(p)}}},Ry=function(n){for(var t=document.querySelectorAll(q5),r=0,s=t.length;r<s;r++){var l=t[r];l&&l.getAttribute(ga)!==OS&&(K5(n,l),l.parentNode&&l.parentNode.removeChild(l))}};function X5(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var HS=function(n){var t=document.head,r=n||t,s=document.createElement("style"),l=function(p){var h=Array.from(p.querySelectorAll("style[".concat(ga,"]")));return h[h.length-1]}(r),u=l!==void 0?l.nextSibling:null;s.setAttribute(ga,OS),s.setAttribute(jS,Uc);var f=X5();return f&&s.setAttribute("nonce",f),r.insertBefore(s,u),s},Q5=function(){function n(t){this.element=HS(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(r){if(r.sheet)return r.sheet;for(var s=document.styleSheets,l=0,u=s.length;l<u;l++){var f=s[l];if(f.ownerNode===r)return f}throw fo(17)}(this.element),this.length=0}return n.prototype.insertRule=function(t,r){try{return this.sheet.insertRule(r,t),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},n.prototype.getRule=function(t){var r=this.sheet.cssRules[t];return r&&r.cssText?r.cssText:""},n}(),$5=function(){function n(t){this.element=HS(t),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(t,r){if(t<=this.length&&t>=0){var s=document.createTextNode(r);return this.element.insertBefore(s,this.nodes[t]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},n.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},n}(),W5=function(){function n(t){this.rules=[],this.length=0}return n.prototype.insertRule=function(t,r){return t<=this.length&&(this.rules.splice(t,0,r),this.length++,!0)},n.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},n.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},n}(),Dy=mc,Z5={isServer:!mc,useCSSOMInjection:!R5},vc=function(){function n(t,r,s){t===void 0&&(t=va),r===void 0&&(r={});var l=this;this.options=vt(vt({},Z5),t),this.gs=r,this.names=new Map(s),this.server=!!t.isServer,!this.server&&mc&&Dy&&(Dy=!1,Ry(this)),Wh(this,function(){return function(u){for(var f=u.getTag(),p=f.length,h="",m=function(b){var x=function(z){return gc.get(z)}(b);if(x===void 0)return"continue";var w=u.names.get(x),D=f.getGroup(b);if(w===void 0||!w.size||D.length===0)return"continue";var j="".concat(ga,".g").concat(b,'[id="').concat(x,'"]'),k="";w!==void 0&&w.forEach(function(z){z.length>0&&(k+="".concat(z,","))}),h+="".concat(D).concat(j,'{content:"').concat(k,'"}').concat(Qh)},v=0;v<p;v++)m(v);return h}(l)})}return n.registerId=function(t){return kl(t)},n.prototype.rehydrate=function(){!this.server&&mc&&Ry(this)},n.prototype.reconstructWithOptions=function(t,r){return r===void 0&&(r=!0),new n(vt(vt({},this.options),t),this.gs,r&&this.names||void 0)},n.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(t=function(r){var s=r.useCSSOMInjection,l=r.target;return r.isServer?new W5(l):s?new Q5(l):new $5(l)}(this.options),new H5(t)));var t},n.prototype.hasNameForId=function(t,r){return this.names.has(t)&&this.names.get(t).has(r)},n.prototype.registerName=function(t,r){if(kl(t),this.names.has(t))this.names.get(t).add(r);else{var s=new Set;s.add(r),this.names.set(t,s)}},n.prototype.insertRules=function(t,r,s){this.registerName(t,r),this.getTag().insertRules(kl(t),s)},n.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},n.prototype.clearRules=function(t){this.getTag().clearGroup(kl(t)),this.clearNames(t)},n.prototype.clearTag=function(){this.tag=void 0},n}(),J5=/&/g,eC=/^\s*\/\/.*$/gm;function GS(n,t){return n.map(function(r){return r.type==="rule"&&(r.value="".concat(t," ").concat(r.value),r.value=r.value.replaceAll(",",",".concat(t," ")),r.props=r.props.map(function(s){return"".concat(t," ").concat(s)})),Array.isArray(r.children)&&r.type!=="@keyframes"&&(r.children=GS(r.children,t)),r})}function tC(n){var t,r,s,l=va,u=l.options,f=u===void 0?va:u,p=l.plugins,h=p===void 0?Pc:p,m=function(x,w,D){return D.startsWith(r)&&D.endsWith(r)&&D.replaceAll(r,"").length>0?".".concat(t):x},v=h.slice();v.push(function(x){x.type===kc&&x.value.includes("&")&&(x.props[0]=x.props[0].replace(J5,r).replace(s,m))}),f.prefix&&v.push(A5),v.push(w5);var b=function(x,w,D,j){w===void 0&&(w=""),D===void 0&&(D=""),j===void 0&&(j="&"),t=j,r=w,s=new RegExp("\\".concat(r,"\\b"),"g");var k=x.replace(eC,""),z=x5(D||w?"".concat(D," ").concat(w," { ").concat(k," }"):k);f.namespace&&(z=GS(z,f.namespace));var N=[];return pc(z,_5(v.concat(E5(function(P){return N.push(P)})))),N};return b.hash=h.length?h.reduce(function(x,w){return w.name||fo(15),ta(x,w.name)},LS).toString():"",b}var nC=new vc,uh=tC(),qS=ft.createContext({shouldForwardProp:void 0,styleSheet:nC,stylis:uh});qS.Consumer;ft.createContext(void 0);function fh(){return A.useContext(qS)}var iC=function(){function n(t,r){var s=this;this.inject=function(l,u){u===void 0&&(u=uh);var f=s.name+u.hash;l.hasNameForId(s.id,f)||l.insertRules(s.id,f,u(s.rules,f,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=r,Wh(this,function(){throw fo(12,String(s.name))})}return n.prototype.getName=function(t){return t===void 0&&(t=uh),this.name+t.hash},n}(),rC=function(n){return n>="A"&&n<="Z"};function My(n){for(var t="",r=0;r<n.length;r++){var s=n[r];if(r===1&&s==="-"&&n[0]==="-")return n;rC(s)?t+="-"+s.toLowerCase():t+=s}return t.startsWith("ms-")?"-"+t:t}var YS=function(n){return n==null||n===!1||n===""},FS=function(n){var t,r,s=[];for(var l in n){var u=n[l];n.hasOwnProperty(l)&&!YS(u)&&(Array.isArray(u)&&u.isCss||ya(u)?s.push("".concat(My(l),":"),u,";"):Xs(u)?s.push.apply(s,Ks(Ks(["".concat(l," {")],FS(u),!1),["}"],!1)):s.push("".concat(My(l),": ").concat((t=l,(r=u)==null||typeof r=="boolean"||r===""?"":typeof r!="number"||r===0||t in C5||t.startsWith("--")?String(r).trim():"".concat(r,"px")),";")))}return s};function Ai(n,t,r,s){if(YS(n))return[];if($h(n))return[".".concat(n.styledComponentId)];if(ya(n)){if(!ya(u=n)||u.prototype&&u.prototype.isReactComponent||!t)return[n];var l=n(t);return Ai(l,t,r,s)}var u;return n instanceof iC?r?(n.inject(r,s),[n.getName(s)]):[n]:Xs(n)?FS(n):Array.isArray(n)?Array.prototype.concat.apply(Pc,n.map(function(f){return Ai(f,t,r,s)})):[n.toString()]}function KS(n){for(var t=0;t<n.length;t+=1){var r=n[t];if(ya(r)&&!$h(r))return!1}return!0}var aC=zS(Uc),sC=function(){function n(t,r,s){this.rules=t,this.staticRulesId="",this.isStatic=(s===void 0||s.isStatic)&&KS(t),this.componentId=r,this.baseHash=ta(aC,r),this.baseStyle=s,vc.registerId(r)}return n.prototype.generateAndInjectStyles=function(t,r,s){var l=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,r,s):"";if(this.isStatic&&!s.hash)if(this.staticRulesId&&r.hasNameForId(this.componentId,this.staticRulesId))l=ir(l,this.staticRulesId);else{var u=lh(Ai(this.rules,t,r,s)),f=oh(ta(this.baseHash,u)>>>0);if(!r.hasNameForId(this.componentId,f)){var p=s(u,".".concat(f),void 0,this.componentId);r.insertRules(this.componentId,f,p)}l=ir(l,f),this.staticRulesId=f}else{for(var h=ta(this.baseHash,s.hash),m="",v=0;v<this.rules.length;v++){var b=this.rules[v];if(typeof b=="string")m+=b;else if(b){var x=lh(Ai(b,t,r,s));h=ta(h,x+v),m+=x}}if(m){var w=oh(h>>>0);r.hasNameForId(this.componentId,w)||r.insertRules(this.componentId,w,s(m,".".concat(w),void 0,this.componentId)),l=ir(l,w)}}return l},n}(),Zh=ft.createContext(void 0);Zh.Consumer;var Td={};function oC(n,t,r){var s=$h(n),l=n,u=!xd(n),f=t.attrs,p=f===void 0?Pc:f,h=t.componentId,m=h===void 0?function(Y,I){var K=typeof Y!="string"?"sc":wy(Y);Td[K]=(Td[K]||0)+1;var X="".concat(K,"-").concat(US(Uc+K+Td[K]));return I?"".concat(I,"-").concat(X):X}(t.displayName,t.parentComponentId):h,v=t.displayName,b=v===void 0?function(Y){return xd(Y)?"styled.".concat(Y):"Styled(".concat(k5(Y),")")}(n):v,x=t.displayName&&t.componentId?"".concat(wy(t.displayName),"-").concat(t.componentId):t.componentId||m,w=s&&l.attrs?l.attrs.concat(p).filter(Boolean):p,D=t.shouldForwardProp;if(s&&l.shouldForwardProp){var j=l.shouldForwardProp;if(t.shouldForwardProp){var k=t.shouldForwardProp;D=function(Y,I){return j(Y,I)&&k(Y,I)}}else D=j}var z=new sC(r,x,s?l.componentStyle:void 0);function N(Y,I){return function(K,X,W){var he=K.attrs,ke=K.componentStyle,Xe=K.defaultProps,ue=K.foldedComponentIds,Te=K.styledComponentId,Ue=K.target,Ve=ft.useContext(Zh),B=fh(),F=K.shouldForwardProp||B.shouldForwardProp,J=kS(X,Ve,Xe)||va,le=function(me,ie,tt){for(var we,dt=vt(vt({},ie),{className:void 0,theme:tt}),ki=0;ki<me.length;ki+=1){var yn=ya(we=me[ki])?we(dt):we;for(var It in yn)dt[It]=It==="className"?ir(dt[It],yn[It]):It==="style"?vt(vt({},dt[It]),yn[It]):yn[It]}return ie.className&&(dt.className=ir(dt.className,ie.className)),dt}(he,X,J),_=le.as||Ue,q={};for(var Q in le)le[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&le.theme===J||(Q==="forwardedAs"?q.as=le.forwardedAs:F&&!F(Q,_)||(q[Q]=le[Q]));var $=function(me,ie){var tt=fh(),we=me.generateAndInjectStyles(ie,tt.styleSheet,tt.stylis);return we}(ke,le),te=ir(ue,Te);return $&&(te+=" "+$),le.className&&(te+=" "+le.className),q[xd(_)&&!NS.has(_)?"class":"className"]=te,W&&(q.ref=W),A.createElement(_,q)}(P,Y,I)}N.displayName=b;var P=ft.forwardRef(N);return P.attrs=w,P.componentStyle=z,P.displayName=b,P.shouldForwardProp=D,P.foldedComponentIds=s?ir(l.foldedComponentIds,l.styledComponentId):"",P.styledComponentId=x,P.target=s?l.target:n,Object.defineProperty(P,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Y){this._foldedDefaultProps=s?function(I){for(var K=[],X=1;X<arguments.length;X++)K[X-1]=arguments[X];for(var W=0,he=K;W<he.length;W++)ch(I,he[W],!0);return I}({},l.defaultProps,Y):Y}}),Wh(P,function(){return".".concat(P.styledComponentId)}),u&&VS(P,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),P}function Oy(n,t){for(var r=[n[0]],s=0,l=t.length;s<l;s+=1)r.push(t[s],n[s+1]);return r}var jy=function(n){return Object.assign(n,{isCss:!0})};function XS(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];if(ya(n)||Xs(n))return jy(Ai(Oy(Pc,Ks([n],t,!0))));var s=n;return t.length===0&&s.length===1&&typeof s[0]=="string"?Ai(s):jy(Ai(Oy(s,t)))}function dh(n,t,r){if(r===void 0&&(r=va),!t)throw fo(1,t);var s=function(l){for(var u=[],f=1;f<arguments.length;f++)u[f-1]=arguments[f];return n(t,r,XS.apply(void 0,Ks([l],u,!1)))};return s.attrs=function(l){return dh(n,t,vt(vt({},r),{attrs:Array.prototype.concat(r.attrs,l).filter(Boolean)}))},s.withConfig=function(l){return dh(n,t,vt(vt({},r),l))},s}var QS=function(n){return dh(oC,n)},C=QS;NS.forEach(function(n){C[n]=QS(n)});var lC=function(){function n(t,r){this.rules=t,this.componentId=r,this.isStatic=KS(t),vc.registerId(this.componentId+1)}return n.prototype.createStyles=function(t,r,s,l){var u=l(lh(Ai(this.rules,r,s,l)),""),f=this.componentId+t;s.insertRules(f,f,u)},n.prototype.removeStyles=function(t,r){r.clearRules(this.componentId+t)},n.prototype.renderStyles=function(t,r,s,l){t>2&&vc.registerId(this.componentId+t),this.removeStyles(t,s),this.createStyles(t,r,s,l)},n}();function cC(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var s=XS.apply(void 0,Ks([n],t,!1)),l="sc-global-".concat(US(JSON.stringify(s))),u=new lC(s,l),f=function(h){var m=fh(),v=ft.useContext(Zh),b=ft.useRef(m.styleSheet.allocateGSInstance(l)).current;return m.styleSheet.server&&p(b,h,m.styleSheet,v,m.stylis),ft.useLayoutEffect(function(){if(!m.styleSheet.server)return p(b,h,m.styleSheet,v,m.stylis),function(){return u.removeStyles(b,m.styleSheet)}},[b,h,m.styleSheet,v,m.stylis]),null};function p(h,m,v,b,x){if(u.isStatic)u.renderStyles(h,D5,v,x);else{var w=vt(vt({},m),{theme:kS(m,b,f.defaultProps)});u.renderStyles(h,w,v,x)}}return ft.memo(f)}var $S={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},ky=ft.createContext&&ft.createContext($S),uC=["attr","size","title"];function fC(n,t){if(n==null)return{};var r=dC(n,t),s,l;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(n);for(l=0;l<u.length;l++)s=u[l],!(t.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(n,s)&&(r[s]=n[s])}return r}function dC(n,t){if(n==null)return{};var r={};for(var s in n)if(Object.prototype.hasOwnProperty.call(n,s)){if(t.indexOf(s)>=0)continue;r[s]=n[s]}return r}function yc(){return yc=Object.assign?Object.assign.bind():function(n){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])}return n},yc.apply(this,arguments)}function Ny(n,t){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(l){return Object.getOwnPropertyDescriptor(n,l).enumerable})),r.push.apply(r,s)}return r}function bc(n){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ny(Object(r),!0).forEach(function(s){hC(n,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Ny(Object(r)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(r,s))})}return n}function hC(n,t,r){return t=pC(t),t in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}function pC(n){var t=mC(n,"string");return typeof t=="symbol"?t:t+""}function mC(n,t){if(typeof n!="object"||!n)return n;var r=n[Symbol.toPrimitive];if(r!==void 0){var s=r.call(n,t);if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(n)}function WS(n){return n&&n.map((t,r)=>ft.createElement(t.tag,bc({key:r},t.attr),WS(t.child)))}function Be(n){return t=>ft.createElement(gC,yc({attr:bc({},n.attr)},t),WS(n.child))}function gC(n){var t=r=>{var{attr:s,size:l,title:u}=n,f=fC(n,uC),p=l||r.size||"1em",h;return r.className&&(h=r.className),n.className&&(h=(h?h+" ":"")+n.className),ft.createElement("svg",yc({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,s,f,{className:h,style:bc(bc({color:n.color||r.color},r.style),n.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),u&&ft.createElement("title",null,u),n.children)};return ky!==void 0?ft.createElement(ky.Consumer,null,r=>t(r)):t($S)}function vC(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"},child:[]}]})(n)}function yC(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function bC(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"},child:[]}]})(n)}function SC(n){return Be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},child:[]}]})(n)}function xC(n){return Be({attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},child:[]}]})(n)}function TC(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z"},child:[]}]})(n)}function Jr(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"},child:[]}]})(n)}function wC(n){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"},child:[]}]})(n)}function Jh(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(n)}function hh(n){return Be({attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z"},child:[]}]})(n)}function ph(n){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(n)}function Qs(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},child:[]}]})(n)}function mh(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"},child:[]}]})(n)}function fa(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"},child:[]}]})(n)}function ZS(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"},child:[]}]})(n)}function _C(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941zM224 416c-35.346 0-64-28.654-64-64 0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64zm96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48z"},child:[]}]})(n)}function EC(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"},child:[]}]})(n)}function AC(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"},child:[]}]})(n)}function CC(n){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"},child:[]}]})(n)}function JS(n){return Be({attr:{viewBox:"0 0 352 512"},child:[{tag:"path",attr:{d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"},child:[]}]})(n)}function $s(n){return Be({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"},child:[]}]})(n)}function RC(n){return Be({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zM461.64 256l45.64-45.64c6.3-6.3 6.3-16.52 0-22.82l-22.82-22.82c-6.3-6.3-16.52-6.3-22.82 0L416 210.36l-45.64-45.64c-6.3-6.3-16.52-6.3-22.82 0l-22.82 22.82c-6.3 6.3-6.3 16.52 0 22.82L370.36 256l-45.63 45.63c-6.3 6.3-6.3 16.52 0 22.82l22.82 22.82c6.3 6.3 16.52 6.3 22.82 0L416 301.64l45.64 45.64c6.3 6.3 16.52 6.3 22.82 0l22.82-22.82c6.3-6.3 6.3-16.52 0-22.82L461.64 256z"},child:[]}]})(n)}function DC(n){return Be({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M215.03 71.05L126.06 160H24c-13.26 0-24 10.74-24 24v144c0 13.25 10.74 24 24 24h102.06l88.97 88.95c15.03 15.03 40.97 4.47 40.97-16.97V88.02c0-21.46-25.96-31.98-40.97-16.97zm233.32-51.08c-11.17-7.33-26.18-4.24-33.51 6.95-7.34 11.17-4.22 26.18 6.95 33.51 66.27 43.49 105.82 116.6 105.82 195.58 0 78.98-39.55 152.09-105.82 195.58-11.17 7.32-14.29 22.34-6.95 33.5 7.04 10.71 21.93 14.56 33.51 6.95C528.27 439.58 576 351.33 576 256S528.27 72.43 448.35 19.97zM480 256c0-63.53-32.06-121.94-85.77-156.24-11.19-7.14-26.03-3.82-33.12 7.46s-3.78 26.21 7.41 33.36C408.27 165.97 432 209.11 432 256s-23.73 90.03-63.48 115.42c-11.19 7.14-14.5 22.07-7.41 33.36 6.51 10.36 21.12 15.14 33.12 7.46C447.94 377.94 480 319.54 480 256zm-141.77-76.87c-11.58-6.33-26.19-2.16-32.61 9.45-6.39 11.61-2.16 26.2 9.45 32.61C327.98 228.28 336 241.63 336 256c0 14.38-8.02 27.72-20.92 34.81-11.61 6.41-15.84 21-9.45 32.61 6.43 11.66 21.05 15.8 32.61 9.45 28.23-15.55 45.77-45 45.77-76.88s-17.54-61.32-45.78-76.86z"},child:[]}]})(n)}const MC=C.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: ${n=>n.$scrolled?"#000":"transparent"};
  padding: 1rem 4%;
`,OC=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
`,jC=C.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`,kC=C(xt)`
  color: #e50914;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
`,NC=C.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`,Cs=C(xt)`
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: #b3b3b3;
  }
`,LC=C.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`,zC=C.div`
  position: relative;
  display: flex;
  align-items: center;
`,UC=C.input`
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  width: ${n=>n.$isOpen?"200px":"0"};
  opacity: ${n=>n.$isOpen?"1":"0"};
  transition: all 0.3s ease;
  
  &::placeholder {
    color: #b3b3b3;
  }
`,PC=C.button`
  color: #fff;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: 0.5rem;
`,IC=C.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
`,BC=C.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: #e50914;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: bold;
`,VC=C.div`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  border: 1px solid #333;
  border-radius: 4px;
  padding: 0.5rem 0;
  min-width: 150px;
  display: ${n=>n.$isOpen?"block":"none"};
`,Nl=C(xt)`
  display: block;
  padding: 0.5rem 1rem;
  color: #fff;
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    background-color: #333;
  }
`,HC=C.button`
  display: none;
  color: #fff;
  background: none;
  border: none;
  font-size: 1.2rem;
  
  @media (max-width: 768px) {
    display: block;
  }
`;C.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;C(xt)`
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 600;
  
  &.signin {
    color: #fff;
  }
  
  &.signup {
    background-color: #e50914;
    color: #fff;
    
    &:hover {
      background-color: #f40612;
    }
  }
`;const GC=C(xt)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #222;
  color: #fff;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
  margin-left: 0.5rem;
  text-decoration: none;
  &:hover, &:focus {
    background: #e50914;
    color: #fff;
  }
`;function qC(){const{currentUser:n,logout:t}=jc(),r=Ta(),[s,l]=A.useState(!1),[u,f]=A.useState(!1),[p,h]=A.useState(!1),[m,v]=A.useState("");A.useEffect(()=>{const w=()=>{l(window.scrollY>50)};return window.addEventListener("scroll",w),()=>window.removeEventListener("scroll",w)},[]);const b=async()=>{try{await t(),h(!1)}catch(w){console.error("Failed to log out:",w)}},x=r.pathname==="/";return y.jsx(MC,{$scrolled:s||!x,children:y.jsxs(OC,{children:[y.jsxs(jC,{children:[y.jsx(kC,{to:"/",children:"NETFLIX"}),n&&y.jsxs(NC,{children:[y.jsx(Cs,{to:"/browse",children:"Home"}),y.jsx(Cs,{to:"/browse",children:"TV Shows"}),y.jsx(Cs,{to:"/browse",children:"Movies"}),y.jsx(Cs,{to:"/browse",children:"New & Popular"}),y.jsx(Cs,{to:"/browse",children:"My List"})]})]}),y.jsxs(LC,{children:[n?y.jsxs(y.Fragment,{children:[y.jsxs(zC,{children:[y.jsx(UC,{type:"text",placeholder:"Search...",value:m,onChange:w=>v(w.target.value),$isOpen:u}),y.jsx(PC,{onClick:()=>f(!u),children:y.jsx(EC,{})})]}),y.jsxs(IC,{onClick:()=>h(!p),children:[y.jsx($s,{}),y.jsx(BC,{children:n.displayName?n.displayName[0].toUpperCase():"U"}),y.jsxs(VC,{$isOpen:p,children:[y.jsx(Nl,{to:"/profile",children:"Profile"}),y.jsx(Nl,{to:"/browse",children:"Account"}),y.jsx(Nl,{to:"/browse",children:"Help Center"}),y.jsx(Nl,{as:"button",onClick:b,children:"Sign Out"})]})]})]}):y.jsx(y.Fragment,{children:y.jsx(GC,{to:"/login",title:"Sign In",children:y.jsx($s,{})})}),y.jsx(HC,{children:y.jsx(vC,{})})]})]})})}const ep=A.createContext({});function tp(n){const t=A.useRef(null);return t.current===null&&(t.current=n()),t.current}const Ic=A.createContext(null),np=A.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});class YC extends A.Component{getSnapshotBeforeUpdate(t){const r=this.props.childRef.current;if(r&&t.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=r.offsetHeight||0,s.width=r.offsetWidth||0,s.top=r.offsetTop,s.left=r.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function FC({children:n,isPresent:t}){const r=A.useId(),s=A.useRef(null),l=A.useRef({width:0,height:0,top:0,left:0}),{nonce:u}=A.useContext(np);return A.useInsertionEffect(()=>{const{width:f,height:p,top:h,left:m}=l.current;if(t||!s.current||!f||!p)return;s.current.dataset.motionPopId=r;const v=document.createElement("style");return u&&(v.nonce=u),document.head.appendChild(v),v.sheet&&v.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${f}px !important;
            height: ${p}px !important;
            top: ${h}px !important;
            left: ${m}px !important;
          }
        `),()=>{document.head.removeChild(v)}},[t]),y.jsx(YC,{isPresent:t,childRef:s,sizeRef:l,children:A.cloneElement(n,{ref:s})})}const KC=({children:n,initial:t,isPresent:r,onExitComplete:s,custom:l,presenceAffectsLayout:u,mode:f})=>{const p=tp(XC),h=A.useId(),m=A.useCallback(b=>{p.set(b,!0);for(const x of p.values())if(!x)return;s&&s()},[p,s]),v=A.useMemo(()=>({id:h,initial:t,isPresent:r,custom:l,onExitComplete:m,register:b=>(p.set(b,!1),()=>p.delete(b))}),u?[Math.random(),m]:[r,m]);return A.useMemo(()=>{p.forEach((b,x)=>p.set(x,!1))},[r]),A.useEffect(()=>{!r&&!p.size&&s&&s()},[r]),f==="popLayout"&&(n=y.jsx(FC,{isPresent:r,children:n})),y.jsx(Ic.Provider,{value:v,children:n})};function XC(){return new Map}function e2(n=!0){const t=A.useContext(Ic);if(t===null)return[!0,null];const{isPresent:r,onExitComplete:s,register:l}=t,u=A.useId();A.useEffect(()=>{n&&l(u)},[n]);const f=A.useCallback(()=>n&&s&&s(u),[u,s,n]);return!r&&s?[!1,f]:[!0]}const Ll=n=>n.key||"";function Ly(n){const t=[];return A.Children.forEach(n,r=>{A.isValidElement(r)&&t.push(r)}),t}const ip=typeof window<"u",t2=ip?A.useLayoutEffect:A.useEffect,QC=({children:n,custom:t,initial:r=!0,onExitComplete:s,presenceAffectsLayout:l=!0,mode:u="sync",propagate:f=!1})=>{const[p,h]=e2(f),m=A.useMemo(()=>Ly(n),[n]),v=f&&!p?[]:m.map(Ll),b=A.useRef(!0),x=A.useRef(m),w=tp(()=>new Map),[D,j]=A.useState(m),[k,z]=A.useState(m);t2(()=>{b.current=!1,x.current=m;for(let Y=0;Y<k.length;Y++){const I=Ll(k[Y]);v.includes(I)?w.delete(I):w.get(I)!==!0&&w.set(I,!1)}},[k,v.length,v.join("-")]);const N=[];if(m!==D){let Y=[...m];for(let I=0;I<k.length;I++){const K=k[I],X=Ll(K);v.includes(X)||(Y.splice(I,0,K),N.push(K))}u==="wait"&&N.length&&(Y=N),z(Ly(Y)),j(m);return}const{forceRender:P}=A.useContext(ep);return y.jsx(y.Fragment,{children:k.map(Y=>{const I=Ll(Y),K=f&&!p?!1:m===k||v.includes(I),X=()=>{if(w.has(I))w.set(I,!0);else return;let W=!0;w.forEach(he=>{he||(W=!1)}),W&&(P?.(),z(x.current),f&&h?.(),s&&s())};return y.jsx(KC,{isPresent:K,initial:!b.current||r?void 0:!1,custom:K?void 0:t,presenceAffectsLayout:l,mode:u,onExitComplete:K?void 0:X,children:Y},I)})})},Ut=n=>n;let n2=Ut;function rp(n){let t;return()=>(t===void 0&&(t=n()),t)}const ba=(n,t,r)=>{const s=t-n;return s===0?1:(r-n)/s},In=n=>n*1e3,Bn=n=>n/1e3,$C={useManualTiming:!1};function WC(n){let t=new Set,r=new Set,s=!1,l=!1;const u=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(m){u.has(m)&&(h.schedule(m),n()),m(f)}const h={schedule:(m,v=!1,b=!1)=>{const w=b&&s?t:r;return v&&u.add(m),w.has(m)||w.add(m),m},cancel:m=>{r.delete(m),u.delete(m)},process:m=>{if(f=m,s){l=!0;return}s=!0,[t,r]=[r,t],t.forEach(p),t.clear(),s=!1,l&&(l=!1,h.process(m))}};return h}const zl=["read","resolveKeyframes","update","preRender","render","postRender"],ZC=40;function i2(n,t){let r=!1,s=!0;const l={delta:0,timestamp:0,isProcessing:!1},u=()=>r=!0,f=zl.reduce((z,N)=>(z[N]=WC(u),z),{}),{read:p,resolveKeyframes:h,update:m,preRender:v,render:b,postRender:x}=f,w=()=>{const z=performance.now();r=!1,l.delta=s?1e3/60:Math.max(Math.min(z-l.timestamp,ZC),1),l.timestamp=z,l.isProcessing=!0,p.process(l),h.process(l),m.process(l),v.process(l),b.process(l),x.process(l),l.isProcessing=!1,r&&t&&(s=!1,n(w))},D=()=>{r=!0,s=!0,l.isProcessing||n(w)};return{schedule:zl.reduce((z,N)=>{const P=f[N];return z[N]=(Y,I=!1,K=!1)=>(r||D(),P.schedule(Y,I,K)),z},{}),cancel:z=>{for(let N=0;N<zl.length;N++)f[zl[N]].cancel(z)},state:l,steps:f}}const{schedule:Le,cancel:Ci,state:ut,steps:wd}=i2(typeof requestAnimationFrame<"u"?requestAnimationFrame:Ut,!0),r2=A.createContext({strict:!1}),zy={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Sa={};for(const n in zy)Sa[n]={isEnabled:t=>zy[n].some(r=>!!t[r])};function JC(n){for(const t in n)Sa[t]={...Sa[t],...n[t]}}const e6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Sc(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||e6.has(n)}let a2=n=>!Sc(n);function t6(n){n&&(a2=t=>t.startsWith("on")?!Sc(t):n(t))}try{t6(require("@emotion/is-prop-valid").default)}catch{}function n6(n,t,r){const s={};for(const l in n)l==="values"&&typeof n.values=="object"||(a2(l)||r===!0&&Sc(l)||!t&&!Sc(l)||n.draggable&&l.startsWith("onDrag"))&&(s[l]=n[l]);return s}function i6(n){if(typeof Proxy>"u")return n;const t=new Map,r=(...s)=>n(...s);return new Proxy(r,{get:(s,l)=>l==="create"?n:(t.has(l)||t.set(l,n(l)),t.get(l))})}const Bc=A.createContext({});function Ws(n){return typeof n=="string"||Array.isArray(n)}function Vc(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const ap=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],sp=["initial",...ap];function Hc(n){return Vc(n.animate)||sp.some(t=>Ws(n[t]))}function s2(n){return!!(Hc(n)||n.variants)}function r6(n,t){if(Hc(n)){const{initial:r,animate:s}=n;return{initial:r===!1||Ws(r)?r:void 0,animate:Ws(s)?s:void 0}}return n.inherit!==!1?t:{}}function a6(n){const{initial:t,animate:r}=r6(n,A.useContext(Bc));return A.useMemo(()=>({initial:t,animate:r}),[Uy(t),Uy(r)])}function Uy(n){return Array.isArray(n)?n.join(" "):n}const s6=Symbol.for("motionComponentSymbol");function na(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function o6(n,t,r){return A.useCallback(s=>{s&&n.onMount&&n.onMount(s),t&&(s?t.mount(s):t.unmount()),r&&(typeof r=="function"?r(s):na(r)&&(r.current=s))},[t])}const op=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),l6="framerAppearId",o2="data-"+op(l6),{schedule:lp}=i2(queueMicrotask,!1),l2=A.createContext({});function c6(n,t,r,s,l){var u,f;const{visualElement:p}=A.useContext(Bc),h=A.useContext(r2),m=A.useContext(Ic),v=A.useContext(np).reducedMotion,b=A.useRef(null);s=s||h.renderer,!b.current&&s&&(b.current=s(n,{visualState:t,parent:p,props:r,presenceContext:m,blockInitialAnimation:m?m.initial===!1:!1,reducedMotionConfig:v}));const x=b.current,w=A.useContext(l2);x&&!x.projection&&l&&(x.type==="html"||x.type==="svg")&&u6(b.current,r,l,w);const D=A.useRef(!1);A.useInsertionEffect(()=>{x&&D.current&&x.update(r,m)});const j=r[o2],k=A.useRef(!!j&&!(!((u=window.MotionHandoffIsComplete)===null||u===void 0)&&u.call(window,j))&&((f=window.MotionHasOptimisedAnimation)===null||f===void 0?void 0:f.call(window,j)));return t2(()=>{x&&(D.current=!0,window.MotionIsMounted=!0,x.updateFeatures(),lp.render(x.render),k.current&&x.animationState&&x.animationState.animateChanges())}),A.useEffect(()=>{x&&(!k.current&&x.animationState&&x.animationState.animateChanges(),k.current&&(queueMicrotask(()=>{var z;(z=window.MotionHandoffMarkAsComplete)===null||z===void 0||z.call(window,j)}),k.current=!1))}),x}function u6(n,t,r,s){const{layoutId:l,layout:u,drag:f,dragConstraints:p,layoutScroll:h,layoutRoot:m}=t;n.projection=new r(n.latestValues,t["data-framer-portal-id"]?void 0:c2(n.parent)),n.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:!!f||p&&na(p),visualElement:n,animationType:typeof u=="string"?u:"both",initialPromotionConfig:s,layoutScroll:h,layoutRoot:m})}function c2(n){if(n)return n.options.allowProjection!==!1?n.projection:c2(n.parent)}function f6({preloadedFeatures:n,createVisualElement:t,useRender:r,useVisualState:s,Component:l}){var u,f;n&&JC(n);function p(m,v){let b;const x={...A.useContext(np),...m,layoutId:d6(m)},{isStatic:w}=x,D=a6(m),j=s(m,w);if(!w&&ip){h6();const k=p6(x);b=k.MeasureLayout,D.visualElement=c6(l,j,x,t,k.ProjectionNode)}return y.jsxs(Bc.Provider,{value:D,children:[b&&D.visualElement?y.jsx(b,{visualElement:D.visualElement,...x}):null,r(l,m,o6(j,D.visualElement,v),j,w,D.visualElement)]})}p.displayName=`motion.${typeof l=="string"?l:`create(${(f=(u=l.displayName)!==null&&u!==void 0?u:l.name)!==null&&f!==void 0?f:""})`}`;const h=A.forwardRef(p);return h[s6]=l,h}function d6({layoutId:n}){const t=A.useContext(ep).id;return t&&n!==void 0?t+"-"+n:n}function h6(n,t){A.useContext(r2).strict}function p6(n){const{drag:t,layout:r}=Sa;if(!t&&!r)return{};const s={...t,...r};return{MeasureLayout:t?.isEnabled(n)||r?.isEnabled(n)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}const m6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function cp(n){return typeof n!="string"||n.includes("-")?!1:!!(m6.indexOf(n)>-1||/[A-Z]/u.test(n))}function Py(n){const t=[{},{}];return n?.values.forEach((r,s)=>{t[0][s]=r.get(),t[1][s]=r.getVelocity()}),t}function up(n,t,r,s){if(typeof t=="function"){const[l,u]=Py(s);t=t(r!==void 0?r:n.custom,l,u)}if(typeof t=="string"&&(t=n.variants&&n.variants[t]),typeof t=="function"){const[l,u]=Py(s);t=t(r!==void 0?r:n.custom,l,u)}return t}const gh=n=>Array.isArray(n),g6=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),v6=n=>gh(n)?n[n.length-1]||0:n,yt=n=>!!(n&&n.getVelocity);function ic(n){const t=yt(n)?n.get():n;return g6(t)?t.toValue():t}function y6({scrapeMotionValuesFromProps:n,createRenderState:t,onUpdate:r},s,l,u){const f={latestValues:b6(s,l,u,n),renderState:t()};return r&&(f.onMount=p=>r({props:s,current:p,...f}),f.onUpdate=p=>r(p)),f}const u2=n=>(t,r)=>{const s=A.useContext(Bc),l=A.useContext(Ic),u=()=>y6(n,t,s,l);return r?u():tp(u)};function b6(n,t,r,s){const l={},u=s(n,{});for(const x in u)l[x]=ic(u[x]);let{initial:f,animate:p}=n;const h=Hc(n),m=s2(n);t&&m&&!h&&n.inherit!==!1&&(f===void 0&&(f=t.initial),p===void 0&&(p=t.animate));let v=r?r.initial===!1:!1;v=v||f===!1;const b=v?p:f;if(b&&typeof b!="boolean"&&!Vc(b)){const x=Array.isArray(b)?b:[b];for(let w=0;w<x.length;w++){const D=up(n,x[w]);if(D){const{transitionEnd:j,transition:k,...z}=D;for(const N in z){let P=z[N];if(Array.isArray(P)){const Y=v?P.length-1:0;P=P[Y]}P!==null&&(l[N]=P)}for(const N in j)l[N]=j[N]}}}return l}const Ea=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],dr=new Set(Ea),f2=n=>t=>typeof t=="string"&&t.startsWith(n),d2=f2("--"),S6=f2("var(--"),fp=n=>S6(n)?x6.test(n.split("/*")[0].trim()):!1,x6=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,h2=(n,t)=>t&&typeof n=="number"?t.transform(n):n,Gn=(n,t,r)=>r>t?t:r<n?n:r,Aa={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Zs={...Aa,transform:n=>Gn(0,1,n)},Ul={...Aa,default:1},ho=n=>({test:t=>typeof t=="string"&&t.endsWith(n)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${n}`}),vi=ho("deg"),mn=ho("%"),ae=ho("px"),T6=ho("vh"),w6=ho("vw"),Iy={...mn,parse:n=>mn.parse(n)/100,transform:n=>mn.transform(n*100)},_6={borderWidth:ae,borderTopWidth:ae,borderRightWidth:ae,borderBottomWidth:ae,borderLeftWidth:ae,borderRadius:ae,radius:ae,borderTopLeftRadius:ae,borderTopRightRadius:ae,borderBottomRightRadius:ae,borderBottomLeftRadius:ae,width:ae,maxWidth:ae,height:ae,maxHeight:ae,top:ae,right:ae,bottom:ae,left:ae,padding:ae,paddingTop:ae,paddingRight:ae,paddingBottom:ae,paddingLeft:ae,margin:ae,marginTop:ae,marginRight:ae,marginBottom:ae,marginLeft:ae,backgroundPositionX:ae,backgroundPositionY:ae},E6={rotate:vi,rotateX:vi,rotateY:vi,rotateZ:vi,scale:Ul,scaleX:Ul,scaleY:Ul,scaleZ:Ul,skew:vi,skewX:vi,skewY:vi,distance:ae,translateX:ae,translateY:ae,translateZ:ae,x:ae,y:ae,z:ae,perspective:ae,transformPerspective:ae,opacity:Zs,originX:Iy,originY:Iy,originZ:ae},By={...Aa,transform:Math.round},dp={..._6,...E6,zIndex:By,size:ae,fillOpacity:Zs,strokeOpacity:Zs,numOctaves:By},A6={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},C6=Ea.length;function R6(n,t,r){let s="",l=!0;for(let u=0;u<C6;u++){const f=Ea[u],p=n[f];if(p===void 0)continue;let h=!0;if(typeof p=="number"?h=p===(f.startsWith("scale")?1:0):h=parseFloat(p)===0,!h||r){const m=h2(p,dp[f]);if(!h){l=!1;const v=A6[f]||f;s+=`${v}(${m}) `}r&&(t[f]=m)}}return s=s.trim(),r?s=r(t,l?"":s):l&&(s="none"),s}function hp(n,t,r){const{style:s,vars:l,transformOrigin:u}=n;let f=!1,p=!1;for(const h in t){const m=t[h];if(dr.has(h)){f=!0;continue}else if(d2(h)){l[h]=m;continue}else{const v=h2(m,dp[h]);h.startsWith("origin")?(p=!0,u[h]=v):s[h]=v}}if(t.transform||(f||r?s.transform=R6(t,n.transform,r):s.transform&&(s.transform="none")),p){const{originX:h="50%",originY:m="50%",originZ:v=0}=u;s.transformOrigin=`${h} ${m} ${v}`}}const D6={offset:"stroke-dashoffset",array:"stroke-dasharray"},M6={offset:"strokeDashoffset",array:"strokeDasharray"};function O6(n,t,r=1,s=0,l=!0){n.pathLength=1;const u=l?D6:M6;n[u.offset]=ae.transform(-s);const f=ae.transform(t),p=ae.transform(r);n[u.array]=`${f} ${p}`}function Vy(n,t,r){return typeof n=="string"?n:ae.transform(t+r*n)}function j6(n,t,r){const s=Vy(t,n.x,n.width),l=Vy(r,n.y,n.height);return`${s} ${l}`}function pp(n,{attrX:t,attrY:r,attrScale:s,originX:l,originY:u,pathLength:f,pathSpacing:p=1,pathOffset:h=0,...m},v,b){if(hp(n,m,b),v){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:x,style:w,dimensions:D}=n;x.transform&&(D&&(w.transform=x.transform),delete x.transform),D&&(l!==void 0||u!==void 0||w.transform)&&(w.transformOrigin=j6(D,l!==void 0?l:.5,u!==void 0?u:.5)),t!==void 0&&(x.x=t),r!==void 0&&(x.y=r),s!==void 0&&(x.scale=s),f!==void 0&&O6(x,f,p,h,!1)}const mp=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),p2=()=>({...mp(),attrs:{}}),gp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function m2(n,{style:t,vars:r},s,l){Object.assign(n.style,t,l&&l.getProjectionStyles(s));for(const u in r)n.style.setProperty(u,r[u])}const g2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function v2(n,t,r,s){m2(n,t,void 0,s);for(const l in t.attrs)n.setAttribute(g2.has(l)?l:op(l),t.attrs[l])}const xc={};function k6(n){Object.assign(xc,n)}function y2(n,{layout:t,layoutId:r}){return dr.has(n)||n.startsWith("origin")||(t||r!==void 0)&&(!!xc[n]||n==="opacity")}function vp(n,t,r){var s;const{style:l}=n,u={};for(const f in l)(yt(l[f])||t.style&&yt(t.style[f])||y2(f,n)||((s=r?.getValue(f))===null||s===void 0?void 0:s.liveStyle)!==void 0)&&(u[f]=l[f]);return u}function b2(n,t,r){const s=vp(n,t,r);for(const l in n)if(yt(n[l])||yt(t[l])){const u=Ea.indexOf(l)!==-1?"attr"+l.charAt(0).toUpperCase()+l.substring(1):l;s[u]=n[l]}return s}function N6(n,t){try{t.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{t.dimensions={x:0,y:0,width:0,height:0}}}const Hy=["x","y","width","height","cx","cy","r"],L6={useVisualState:u2({scrapeMotionValuesFromProps:b2,createRenderState:p2,onUpdate:({props:n,prevProps:t,current:r,renderState:s,latestValues:l})=>{if(!r)return;let u=!!n.drag;if(!u){for(const p in l)if(dr.has(p)){u=!0;break}}if(!u)return;let f=!t;if(t)for(let p=0;p<Hy.length;p++){const h=Hy[p];n[h]!==t[h]&&(f=!0)}f&&Le.read(()=>{N6(r,s),Le.render(()=>{pp(s,l,gp(r.tagName),n.transformTemplate),v2(r,s)})})}})},z6={useVisualState:u2({scrapeMotionValuesFromProps:vp,createRenderState:mp})};function S2(n,t,r){for(const s in t)!yt(t[s])&&!y2(s,r)&&(n[s]=t[s])}function U6({transformTemplate:n},t){return A.useMemo(()=>{const r=mp();return hp(r,t,n),Object.assign({},r.vars,r.style)},[t])}function P6(n,t){const r=n.style||{},s={};return S2(s,r,n),Object.assign(s,U6(n,t)),s}function I6(n,t){const r={},s=P6(n,t);return n.drag&&n.dragListener!==!1&&(r.draggable=!1,s.userSelect=s.WebkitUserSelect=s.WebkitTouchCallout="none",s.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(r.tabIndex=0),r.style=s,r}function B6(n,t,r,s){const l=A.useMemo(()=>{const u=p2();return pp(u,t,gp(s),n.transformTemplate),{...u.attrs,style:{...u.style}}},[t]);if(n.style){const u={};S2(u,n.style,n),l.style={...u,...l.style}}return l}function V6(n=!1){return(r,s,l,{latestValues:u},f)=>{const h=(cp(r)?B6:I6)(s,u,f,r),m=n6(s,typeof r=="string",n),v=r!==A.Fragment?{...m,...h,ref:l}:{},{children:b}=s,x=A.useMemo(()=>yt(b)?b.get():b,[b]);return A.createElement(r,{...v,children:x})}}function H6(n,t){return function(s,{forwardMotionProps:l}={forwardMotionProps:!1}){const f={...cp(s)?L6:z6,preloadedFeatures:n,useRender:V6(l),createVisualElement:t,Component:s};return f6(f)}}function x2(n,t){if(!Array.isArray(t))return!1;const r=t.length;if(r!==n.length)return!1;for(let s=0;s<r;s++)if(t[s]!==n[s])return!1;return!0}function Gc(n,t,r){const s=n.getProps();return up(s,t,r!==void 0?r:s.custom,n)}const G6=rp(()=>window.ScrollTimeline!==void 0);class q6{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}get finished(){return Promise.all(this.animations.map(t=>"finished"in t?t.finished:t))}getAll(t){return this.animations[0][t]}setAll(t,r){for(let s=0;s<this.animations.length;s++)this.animations[s][t]=r}attachTimeline(t,r){const s=this.animations.map(l=>{if(G6()&&l.attachTimeline)return l.attachTimeline(t);if(typeof r=="function")return r(l)});return()=>{s.forEach((l,u)=>{l&&l(),this.animations[u].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get startTime(){return this.getAll("startTime")}get duration(){let t=0;for(let r=0;r<this.animations.length;r++)t=Math.max(t,this.animations[r].duration);return t}runAll(t){this.animations.forEach(r=>r[t]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Y6 extends q6{then(t,r){return Promise.all(this.animations).then(t).catch(r)}}function yp(n,t){return n?n[t]||n.default||n:void 0}const vh=2e4;function T2(n){let t=0;const r=50;let s=n.next(t);for(;!s.done&&t<vh;)t+=r,s=n.next(t);return t>=vh?1/0:t}function bp(n){return typeof n=="function"}function Gy(n,t){n.timeline=t,n.onfinish=null}const Sp=n=>Array.isArray(n)&&typeof n[0]=="number",F6={linearEasing:void 0};function K6(n,t){const r=rp(n);return()=>{var s;return(s=F6[t])!==null&&s!==void 0?s:r()}}const Tc=K6(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),w2=(n,t,r=10)=>{let s="";const l=Math.max(Math.round(t/r),2);for(let u=0;u<l;u++)s+=n(ba(0,l-1,u))+", ";return`linear(${s.substring(0,s.length-2)})`};function _2(n){return!!(typeof n=="function"&&Tc()||!n||typeof n=="string"&&(n in yh||Tc())||Sp(n)||Array.isArray(n)&&n.every(_2))}const ks=([n,t,r,s])=>`cubic-bezier(${n}, ${t}, ${r}, ${s})`,yh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ks([0,.65,.55,1]),circOut:ks([.55,0,1,.45]),backIn:ks([.31,.01,.66,-.59]),backOut:ks([.33,1.53,.69,.99])};function E2(n,t){if(n)return typeof n=="function"&&Tc()?w2(n,t):Sp(n)?ks(n):Array.isArray(n)?n.map(r=>E2(r,t)||yh.easeOut):yh[n]}const tn={x:!1,y:!1};function A2(){return tn.x||tn.y}function X6(n,t,r){var s;if(n instanceof Element)return[n];if(typeof n=="string"){let l=document;const u=(s=void 0)!==null&&s!==void 0?s:l.querySelectorAll(n);return u?Array.from(u):[]}return Array.from(n)}function C2(n,t){const r=X6(n),s=new AbortController,l={passive:!0,...t,signal:s.signal};return[r,l,()=>s.abort()]}function qy(n){return t=>{t.pointerType==="touch"||A2()||n(t)}}function Q6(n,t,r={}){const[s,l,u]=C2(n,r),f=qy(p=>{const{target:h}=p,m=t(p);if(typeof m!="function"||!h)return;const v=qy(b=>{m(b),h.removeEventListener("pointerleave",v)});h.addEventListener("pointerleave",v,l)});return s.forEach(p=>{p.addEventListener("pointerenter",f,l)}),u}const R2=(n,t)=>t?n===t?!0:R2(n,t.parentElement):!1,xp=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,$6=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function W6(n){return $6.has(n.tagName)||n.tabIndex!==-1}const Ns=new WeakSet;function Yy(n){return t=>{t.key==="Enter"&&n(t)}}function _d(n,t){n.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const Z6=(n,t)=>{const r=n.currentTarget;if(!r)return;const s=Yy(()=>{if(Ns.has(r))return;_d(r,"down");const l=Yy(()=>{_d(r,"up")}),u=()=>_d(r,"cancel");r.addEventListener("keyup",l,t),r.addEventListener("blur",u,t)});r.addEventListener("keydown",s,t),r.addEventListener("blur",()=>r.removeEventListener("keydown",s),t)};function Fy(n){return xp(n)&&!A2()}function J6(n,t,r={}){const[s,l,u]=C2(n,r),f=p=>{const h=p.currentTarget;if(!Fy(p)||Ns.has(h))return;Ns.add(h);const m=t(p),v=(w,D)=>{window.removeEventListener("pointerup",b),window.removeEventListener("pointercancel",x),!(!Fy(w)||!Ns.has(h))&&(Ns.delete(h),typeof m=="function"&&m(w,{success:D}))},b=w=>{v(w,r.useGlobalTarget||R2(h,w.target))},x=w=>{v(w,!1)};window.addEventListener("pointerup",b,l),window.addEventListener("pointercancel",x,l)};return s.forEach(p=>{!W6(p)&&p.getAttribute("tabindex")===null&&(p.tabIndex=0),(r.useGlobalTarget?window:p).addEventListener("pointerdown",f,l),p.addEventListener("focus",m=>Z6(m,l),l)}),u}function eR(n){return n==="x"||n==="y"?tn[n]?null:(tn[n]=!0,()=>{tn[n]=!1}):tn.x||tn.y?null:(tn.x=tn.y=!0,()=>{tn.x=tn.y=!1})}const D2=new Set(["width","height","top","left","right","bottom",...Ea]);let rc;function tR(){rc=void 0}const gn={now:()=>(rc===void 0&&gn.set(ut.isProcessing||$C.useManualTiming?ut.timestamp:performance.now()),rc),set:n=>{rc=n,queueMicrotask(tR)}};function Tp(n,t){n.indexOf(t)===-1&&n.push(t)}function wp(n,t){const r=n.indexOf(t);r>-1&&n.splice(r,1)}class _p{constructor(){this.subscriptions=[]}add(t){return Tp(this.subscriptions,t),()=>wp(this.subscriptions,t)}notify(t,r,s){const l=this.subscriptions.length;if(l)if(l===1)this.subscriptions[0](t,r,s);else for(let u=0;u<l;u++){const f=this.subscriptions[u];f&&f(t,r,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function M2(n,t){return t?n*(1e3/t):0}const Ky=30,nR=n=>!isNaN(parseFloat(n));class iR{constructor(t,r={}){this.version="11.18.2",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(s,l=!0)=>{const u=gn.now();this.updatedAt!==u&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(s),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),l&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=r.owner}setCurrent(t){this.current=t,this.updatedAt=gn.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=nR(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,r){this.events[t]||(this.events[t]=new _p);const s=this.events[t].add(r);return t==="change"?()=>{s(),Le.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,r){this.passiveEffect=t,this.stopPassiveEffect=r}set(t,r=!0){!r||!this.passiveEffect?this.updateAndNotify(t,r):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,r,s){this.set(r),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-s}jump(t,r=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,r&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=gn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ky)return 0;const r=Math.min(this.updatedAt-this.prevUpdatedAt,Ky);return M2(parseFloat(this.current)-parseFloat(this.prevFrameValue),r)}start(t){return this.stop(),new Promise(r=>{this.hasAnimated=!0,this.animation=t(r),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Js(n,t){return new iR(n,t)}function rR(n,t,r){n.hasValue(t)?n.getValue(t).set(r):n.addValue(t,Js(r))}function aR(n,t){const r=Gc(n,t);let{transitionEnd:s={},transition:l={},...u}=r||{};u={...u,...s};for(const f in u){const p=v6(u[f]);rR(n,f,p)}}function sR(n){return!!(yt(n)&&n.add)}function bh(n,t){const r=n.getValue("willChange");if(sR(r))return r.add(t)}function O2(n){return n.props[o2]}const j2=(n,t,r)=>(((1-3*r+3*t)*n+(3*r-6*t))*n+3*t)*n,oR=1e-7,lR=12;function cR(n,t,r,s,l){let u,f,p=0;do f=t+(r-t)/2,u=j2(f,s,l)-n,u>0?r=f:t=f;while(Math.abs(u)>oR&&++p<lR);return f}function po(n,t,r,s){if(n===t&&r===s)return Ut;const l=u=>cR(u,0,1,n,r);return u=>u===0||u===1?u:j2(l(u),t,s)}const k2=n=>t=>t<=.5?n(2*t)/2:(2-n(2*(1-t)))/2,N2=n=>t=>1-n(1-t),L2=po(.33,1.53,.69,.99),Ep=N2(L2),z2=k2(Ep),U2=n=>(n*=2)<1?.5*Ep(n):.5*(2-Math.pow(2,-10*(n-1))),Ap=n=>1-Math.sin(Math.acos(n)),P2=N2(Ap),I2=k2(Ap),B2=n=>/^0[^.\s]+$/u.test(n);function uR(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||B2(n):!0}const Ps=n=>Math.round(n*1e5)/1e5,Cp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function fR(n){return n==null}const dR=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Rp=(n,t)=>r=>!!(typeof r=="string"&&dR.test(r)&&r.startsWith(n)||t&&!fR(r)&&Object.prototype.hasOwnProperty.call(r,t)),V2=(n,t,r)=>s=>{if(typeof s!="string")return s;const[l,u,f,p]=s.match(Cp);return{[n]:parseFloat(l),[t]:parseFloat(u),[r]:parseFloat(f),alpha:p!==void 0?parseFloat(p):1}},hR=n=>Gn(0,255,n),Ed={...Aa,transform:n=>Math.round(hR(n))},rr={test:Rp("rgb","red"),parse:V2("red","green","blue"),transform:({red:n,green:t,blue:r,alpha:s=1})=>"rgba("+Ed.transform(n)+", "+Ed.transform(t)+", "+Ed.transform(r)+", "+Ps(Zs.transform(s))+")"};function pR(n){let t="",r="",s="",l="";return n.length>5?(t=n.substring(1,3),r=n.substring(3,5),s=n.substring(5,7),l=n.substring(7,9)):(t=n.substring(1,2),r=n.substring(2,3),s=n.substring(3,4),l=n.substring(4,5),t+=t,r+=r,s+=s,l+=l),{red:parseInt(t,16),green:parseInt(r,16),blue:parseInt(s,16),alpha:l?parseInt(l,16)/255:1}}const Sh={test:Rp("#"),parse:pR,transform:rr.transform},ia={test:Rp("hsl","hue"),parse:V2("hue","saturation","lightness"),transform:({hue:n,saturation:t,lightness:r,alpha:s=1})=>"hsla("+Math.round(n)+", "+mn.transform(Ps(t))+", "+mn.transform(Ps(r))+", "+Ps(Zs.transform(s))+")"},gt={test:n=>rr.test(n)||Sh.test(n)||ia.test(n),parse:n=>rr.test(n)?rr.parse(n):ia.test(n)?ia.parse(n):Sh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?rr.transform(n):ia.transform(n)},mR=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gR(n){var t,r;return isNaN(n)&&typeof n=="string"&&(((t=n.match(Cp))===null||t===void 0?void 0:t.length)||0)+(((r=n.match(mR))===null||r===void 0?void 0:r.length)||0)>0}const H2="number",G2="color",vR="var",yR="var(",Xy="${}",bR=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function eo(n){const t=n.toString(),r=[],s={color:[],number:[],var:[]},l=[];let u=0;const p=t.replace(bR,h=>(gt.test(h)?(s.color.push(u),l.push(G2),r.push(gt.parse(h))):h.startsWith(yR)?(s.var.push(u),l.push(vR),r.push(h)):(s.number.push(u),l.push(H2),r.push(parseFloat(h))),++u,Xy)).split(Xy);return{values:r,split:p,indexes:s,types:l}}function q2(n){return eo(n).values}function Y2(n){const{split:t,types:r}=eo(n),s=t.length;return l=>{let u="";for(let f=0;f<s;f++)if(u+=t[f],l[f]!==void 0){const p=r[f];p===H2?u+=Ps(l[f]):p===G2?u+=gt.transform(l[f]):u+=l[f]}return u}}const SR=n=>typeof n=="number"?0:n;function xR(n){const t=q2(n);return Y2(n)(t.map(SR))}const Ri={test:gR,parse:q2,createTransformer:Y2,getAnimatableNone:xR},TR=new Set(["brightness","contrast","saturate","opacity"]);function wR(n){const[t,r]=n.slice(0,-1).split("(");if(t==="drop-shadow")return n;const[s]=r.match(Cp)||[];if(!s)return n;const l=r.replace(s,"");let u=TR.has(t)?1:0;return s!==r&&(u*=100),t+"("+u+l+")"}const _R=/\b([a-z-]*)\(.*?\)/gu,xh={...Ri,getAnimatableNone:n=>{const t=n.match(_R);return t?t.map(wR).join(" "):n}},ER={...dp,color:gt,backgroundColor:gt,outlineColor:gt,fill:gt,stroke:gt,borderColor:gt,borderTopColor:gt,borderRightColor:gt,borderBottomColor:gt,borderLeftColor:gt,filter:xh,WebkitFilter:xh},Dp=n=>ER[n];function F2(n,t){let r=Dp(n);return r!==xh&&(r=Ri),r.getAnimatableNone?r.getAnimatableNone(t):void 0}const AR=new Set(["auto","none","0"]);function CR(n,t,r){let s=0,l;for(;s<n.length&&!l;){const u=n[s];typeof u=="string"&&!AR.has(u)&&eo(u).values.length&&(l=n[s]),s++}if(l&&r)for(const u of t)n[u]=F2(r,l)}const Qy=n=>n===Aa||n===ae,$y=(n,t)=>parseFloat(n.split(", ")[t]),Wy=(n,t)=>(r,{transform:s})=>{if(s==="none"||!s)return 0;const l=s.match(/^matrix3d\((.+)\)$/u);if(l)return $y(l[1],t);{const u=s.match(/^matrix\((.+)\)$/u);return u?$y(u[1],n):0}},RR=new Set(["x","y","z"]),DR=Ea.filter(n=>!RR.has(n));function MR(n){const t=[];return DR.forEach(r=>{const s=n.getValue(r);s!==void 0&&(t.push([r,s.get()]),s.set(r.startsWith("scale")?1:0))}),t}const xa={width:({x:n},{paddingLeft:t="0",paddingRight:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),height:({y:n},{paddingTop:t="0",paddingBottom:r="0"})=>n.max-n.min-parseFloat(t)-parseFloat(r),top:(n,{top:t})=>parseFloat(t),left:(n,{left:t})=>parseFloat(t),bottom:({y:n},{top:t})=>parseFloat(t)+(n.max-n.min),right:({x:n},{left:t})=>parseFloat(t)+(n.max-n.min),x:Wy(4,13),y:Wy(5,14)};xa.translateX=xa.x;xa.translateY=xa.y;const sr=new Set;let Th=!1,wh=!1;function K2(){if(wh){const n=Array.from(sr).filter(s=>s.needsMeasurement),t=new Set(n.map(s=>s.element)),r=new Map;t.forEach(s=>{const l=MR(s);l.length&&(r.set(s,l),s.render())}),n.forEach(s=>s.measureInitialState()),t.forEach(s=>{s.render();const l=r.get(s);l&&l.forEach(([u,f])=>{var p;(p=s.getValue(u))===null||p===void 0||p.set(f)})}),n.forEach(s=>s.measureEndState()),n.forEach(s=>{s.suspendedScrollY!==void 0&&window.scrollTo(0,s.suspendedScrollY)})}wh=!1,Th=!1,sr.forEach(n=>n.complete()),sr.clear()}function X2(){sr.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(wh=!0)})}function OR(){X2(),K2()}class Mp{constructor(t,r,s,l,u,f=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=r,this.name=s,this.motionValue=l,this.element=u,this.isAsync=f}scheduleResolve(){this.isScheduled=!0,this.isAsync?(sr.add(this),Th||(Th=!0,Le.read(X2),Le.resolveKeyframes(K2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:r,element:s,motionValue:l}=this;for(let u=0;u<t.length;u++)if(t[u]===null)if(u===0){const f=l?.get(),p=t[t.length-1];if(f!==void 0)t[0]=f;else if(s&&r){const h=s.readValue(r,p);h!=null&&(t[0]=h)}t[0]===void 0&&(t[0]=p),l&&f===void 0&&l.set(t[0])}else t[u]=t[u-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),sr.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,sr.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Q2=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),jR=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function kR(n){const t=jR.exec(n);if(!t)return[,];const[,r,s,l]=t;return[`--${r??s}`,l]}function $2(n,t,r=1){const[s,l]=kR(n);if(!s)return;const u=window.getComputedStyle(t).getPropertyValue(s);if(u){const f=u.trim();return Q2(f)?parseFloat(f):f}return fp(l)?$2(l,t,r+1):l}const W2=n=>t=>t.test(n),NR={test:n=>n==="auto",parse:n=>n},Z2=[Aa,ae,mn,vi,w6,T6,NR],Zy=n=>Z2.find(W2(n));class J2 extends Mp{constructor(t,r,s,l,u){super(t,r,s,l,u,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:r,name:s}=this;if(!r||!r.current)return;super.readKeyframes();for(let h=0;h<t.length;h++){let m=t[h];if(typeof m=="string"&&(m=m.trim(),fp(m))){const v=$2(m,r.current);v!==void 0&&(t[h]=v),h===t.length-1&&(this.finalKeyframe=m)}}if(this.resolveNoneKeyframes(),!D2.has(s)||t.length!==2)return;const[l,u]=t,f=Zy(l),p=Zy(u);if(f!==p)if(Qy(f)&&Qy(p))for(let h=0;h<t.length;h++){const m=t[h];typeof m=="string"&&(t[h]=parseFloat(m))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:r}=this,s=[];for(let l=0;l<t.length;l++)uR(t[l])&&s.push(l);s.length&&CR(t,s,r)}measureInitialState(){const{element:t,unresolvedKeyframes:r,name:s}=this;if(!t||!t.current)return;s==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xa[s](t.measureViewportBox(),window.getComputedStyle(t.current)),r[0]=this.measuredOrigin;const l=r[r.length-1];l!==void 0&&t.getValue(s,l).jump(l,!1)}measureEndState(){var t;const{element:r,name:s,unresolvedKeyframes:l}=this;if(!r||!r.current)return;const u=r.getValue(s);u&&u.jump(this.measuredOrigin,!1);const f=l.length-1,p=l[f];l[f]=xa[s](r.measureViewportBox(),window.getComputedStyle(r.current)),p!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=p),!((t=this.removedTransforms)===null||t===void 0)&&t.length&&this.removedTransforms.forEach(([h,m])=>{r.getValue(h).set(m)}),this.resolveNoneKeyframes()}}const Jy=(n,t)=>t==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ri.test(n)||n==="0")&&!n.startsWith("url("));function LR(n){const t=n[0];if(n.length===1)return!0;for(let r=0;r<n.length;r++)if(n[r]!==t)return!0}function zR(n,t,r,s){const l=n[0];if(l===null)return!1;if(t==="display"||t==="visibility")return!0;const u=n[n.length-1],f=Jy(l,t),p=Jy(u,t);return!f||!p?!1:LR(n)||(r==="spring"||bp(r))&&s}const UR=n=>n!==null;function qc(n,{repeat:t,repeatType:r="loop"},s){const l=n.filter(UR),u=t&&r!=="loop"&&t%2===1?0:l.length-1;return!u||s===void 0?l[u]:s}const PR=40;class ex{constructor({autoplay:t=!0,delay:r=0,type:s="keyframes",repeat:l=0,repeatDelay:u=0,repeatType:f="loop",...p}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=gn.now(),this.options={autoplay:t,delay:r,type:s,repeat:l,repeatDelay:u,repeatType:f,...p},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>PR?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&OR(),this._resolved}onKeyframesResolved(t,r){this.resolvedAt=gn.now(),this.hasAttemptedResolve=!0;const{name:s,type:l,velocity:u,delay:f,onComplete:p,onUpdate:h,isGenerator:m}=this.options;if(!m&&!zR(t,s,l,u))if(f)this.options.duration=0;else{h&&h(qc(t,this.options,r)),p&&p(),this.resolveFinishedPromise();return}const v=this.initPlayback(t,r);v!==!1&&(this._resolved={keyframes:t,finalKeyframe:r,...v},this.onPostResolved())}onPostResolved(){}then(t,r){return this.currentFinishedPromise.then(t,r)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}const Ie=(n,t,r)=>n+(t-n)*r;function Ad(n,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+(t-n)*6*r:r<1/2?t:r<2/3?n+(t-n)*(2/3-r)*6:n}function IR({hue:n,saturation:t,lightness:r,alpha:s}){n/=360,t/=100,r/=100;let l=0,u=0,f=0;if(!t)l=u=f=r;else{const p=r<.5?r*(1+t):r+t-r*t,h=2*r-p;l=Ad(h,p,n+1/3),u=Ad(h,p,n),f=Ad(h,p,n-1/3)}return{red:Math.round(l*255),green:Math.round(u*255),blue:Math.round(f*255),alpha:s}}function wc(n,t){return r=>r>0?t:n}const Cd=(n,t,r)=>{const s=n*n,l=r*(t*t-s)+s;return l<0?0:Math.sqrt(l)},BR=[Sh,rr,ia],VR=n=>BR.find(t=>t.test(n));function e1(n){const t=VR(n);if(!t)return!1;let r=t.parse(n);return t===ia&&(r=IR(r)),r}const t1=(n,t)=>{const r=e1(n),s=e1(t);if(!r||!s)return wc(n,t);const l={...r};return u=>(l.red=Cd(r.red,s.red,u),l.green=Cd(r.green,s.green,u),l.blue=Cd(r.blue,s.blue,u),l.alpha=Ie(r.alpha,s.alpha,u),rr.transform(l))},HR=(n,t)=>r=>t(n(r)),mo=(...n)=>n.reduce(HR),_h=new Set(["none","hidden"]);function GR(n,t){return _h.has(n)?r=>r<=0?n:t:r=>r>=1?t:n}function qR(n,t){return r=>Ie(n,t,r)}function Op(n){return typeof n=="number"?qR:typeof n=="string"?fp(n)?wc:gt.test(n)?t1:KR:Array.isArray(n)?tx:typeof n=="object"?gt.test(n)?t1:YR:wc}function tx(n,t){const r=[...n],s=r.length,l=n.map((u,f)=>Op(u)(u,t[f]));return u=>{for(let f=0;f<s;f++)r[f]=l[f](u);return r}}function YR(n,t){const r={...n,...t},s={};for(const l in r)n[l]!==void 0&&t[l]!==void 0&&(s[l]=Op(n[l])(n[l],t[l]));return l=>{for(const u in s)r[u]=s[u](l);return r}}function FR(n,t){var r;const s=[],l={color:0,var:0,number:0};for(let u=0;u<t.values.length;u++){const f=t.types[u],p=n.indexes[f][l[f]],h=(r=n.values[p])!==null&&r!==void 0?r:0;s[u]=h,l[f]++}return s}const KR=(n,t)=>{const r=Ri.createTransformer(t),s=eo(n),l=eo(t);return s.indexes.var.length===l.indexes.var.length&&s.indexes.color.length===l.indexes.color.length&&s.indexes.number.length>=l.indexes.number.length?_h.has(n)&&!l.values.length||_h.has(t)&&!s.values.length?GR(n,t):mo(tx(FR(s,l),l.values),r):wc(n,t)};function nx(n,t,r){return typeof n=="number"&&typeof t=="number"&&typeof r=="number"?Ie(n,t,r):Op(n)(n,t)}const XR=5;function ix(n,t,r){const s=Math.max(t-XR,0);return M2(r-n(s),t-s)}const qe={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},Rd=.001;function QR({duration:n=qe.duration,bounce:t=qe.bounce,velocity:r=qe.velocity,mass:s=qe.mass}){let l,u,f=1-t;f=Gn(qe.minDamping,qe.maxDamping,f),n=Gn(qe.minDuration,qe.maxDuration,Bn(n)),f<1?(l=m=>{const v=m*f,b=v*n,x=v-r,w=Eh(m,f),D=Math.exp(-b);return Rd-x/w*D},u=m=>{const b=m*f*n,x=b*r+r,w=Math.pow(f,2)*Math.pow(m,2)*n,D=Math.exp(-b),j=Eh(Math.pow(m,2),f);return(-l(m)+Rd>0?-1:1)*((x-w)*D)/j}):(l=m=>{const v=Math.exp(-m*n),b=(m-r)*n+1;return-Rd+v*b},u=m=>{const v=Math.exp(-m*n),b=(r-m)*(n*n);return v*b});const p=5/n,h=WR(l,u,p);if(n=In(n),isNaN(h))return{stiffness:qe.stiffness,damping:qe.damping,duration:n};{const m=Math.pow(h,2)*s;return{stiffness:m,damping:f*2*Math.sqrt(s*m),duration:n}}}const $R=12;function WR(n,t,r){let s=r;for(let l=1;l<$R;l++)s=s-n(s)/t(s);return s}function Eh(n,t){return n*Math.sqrt(1-t*t)}const ZR=["duration","bounce"],JR=["stiffness","damping","mass"];function n1(n,t){return t.some(r=>n[r]!==void 0)}function eD(n){let t={velocity:qe.velocity,stiffness:qe.stiffness,damping:qe.damping,mass:qe.mass,isResolvedFromDuration:!1,...n};if(!n1(n,JR)&&n1(n,ZR))if(n.visualDuration){const r=n.visualDuration,s=2*Math.PI/(r*1.2),l=s*s,u=2*Gn(.05,1,1-(n.bounce||0))*Math.sqrt(l);t={...t,mass:qe.mass,stiffness:l,damping:u}}else{const r=QR(n);t={...t,...r,mass:qe.mass},t.isResolvedFromDuration=!0}return t}function rx(n=qe.visualDuration,t=qe.bounce){const r=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:t}:n;let{restSpeed:s,restDelta:l}=r;const u=r.keyframes[0],f=r.keyframes[r.keyframes.length-1],p={done:!1,value:u},{stiffness:h,damping:m,mass:v,duration:b,velocity:x,isResolvedFromDuration:w}=eD({...r,velocity:-Bn(r.velocity||0)}),D=x||0,j=m/(2*Math.sqrt(h*v)),k=f-u,z=Bn(Math.sqrt(h/v)),N=Math.abs(k)<5;s||(s=N?qe.restSpeed.granular:qe.restSpeed.default),l||(l=N?qe.restDelta.granular:qe.restDelta.default);let P;if(j<1){const I=Eh(z,j);P=K=>{const X=Math.exp(-j*z*K);return f-X*((D+j*z*k)/I*Math.sin(I*K)+k*Math.cos(I*K))}}else if(j===1)P=I=>f-Math.exp(-z*I)*(k+(D+z*k)*I);else{const I=z*Math.sqrt(j*j-1);P=K=>{const X=Math.exp(-j*z*K),W=Math.min(I*K,300);return f-X*((D+j*z*k)*Math.sinh(W)+I*k*Math.cosh(W))/I}}const Y={calculatedDuration:w&&b||null,next:I=>{const K=P(I);if(w)p.done=I>=b;else{let X=0;j<1&&(X=I===0?In(D):ix(P,I,K));const W=Math.abs(X)<=s,he=Math.abs(f-K)<=l;p.done=W&&he}return p.value=p.done?f:K,p},toString:()=>{const I=Math.min(T2(Y),vh),K=w2(X=>Y.next(I*X).value,I,30);return I+"ms "+K}};return Y}function i1({keyframes:n,velocity:t=0,power:r=.8,timeConstant:s=325,bounceDamping:l=10,bounceStiffness:u=500,modifyTarget:f,min:p,max:h,restDelta:m=.5,restSpeed:v}){const b=n[0],x={done:!1,value:b},w=W=>p!==void 0&&W<p||h!==void 0&&W>h,D=W=>p===void 0?h:h===void 0||Math.abs(p-W)<Math.abs(h-W)?p:h;let j=r*t;const k=b+j,z=f===void 0?k:f(k);z!==k&&(j=z-b);const N=W=>-j*Math.exp(-W/s),P=W=>z+N(W),Y=W=>{const he=N(W),ke=P(W);x.done=Math.abs(he)<=m,x.value=x.done?z:ke};let I,K;const X=W=>{w(x.value)&&(I=W,K=rx({keyframes:[x.value,D(x.value)],velocity:ix(P,W,x.value),damping:l,stiffness:u,restDelta:m,restSpeed:v}))};return X(0),{calculatedDuration:null,next:W=>{let he=!1;return!K&&I===void 0&&(he=!0,Y(W),X(W)),I!==void 0&&W>=I?K.next(W-I):(!he&&Y(W),x)}}}const tD=po(.42,0,1,1),nD=po(0,0,.58,1),ax=po(.42,0,.58,1),iD=n=>Array.isArray(n)&&typeof n[0]!="number",rD={linear:Ut,easeIn:tD,easeInOut:ax,easeOut:nD,circIn:Ap,circInOut:I2,circOut:P2,backIn:Ep,backInOut:z2,backOut:L2,anticipate:U2},r1=n=>{if(Sp(n)){n2(n.length===4);const[t,r,s,l]=n;return po(t,r,s,l)}else if(typeof n=="string")return rD[n];return n};function aD(n,t,r){const s=[],l=r||nx,u=n.length-1;for(let f=0;f<u;f++){let p=l(n[f],n[f+1]);if(t){const h=Array.isArray(t)?t[f]||Ut:t;p=mo(h,p)}s.push(p)}return s}function sD(n,t,{clamp:r=!0,ease:s,mixer:l}={}){const u=n.length;if(n2(u===t.length),u===1)return()=>t[0];if(u===2&&t[0]===t[1])return()=>t[1];const f=n[0]===n[1];n[0]>n[u-1]&&(n=[...n].reverse(),t=[...t].reverse());const p=aD(t,s,l),h=p.length,m=v=>{if(f&&v<n[0])return t[0];let b=0;if(h>1)for(;b<n.length-2&&!(v<n[b+1]);b++);const x=ba(n[b],n[b+1],v);return p[b](x)};return r?v=>m(Gn(n[0],n[u-1],v)):m}function oD(n,t){const r=n[n.length-1];for(let s=1;s<=t;s++){const l=ba(0,t,s);n.push(Ie(r,1,l))}}function lD(n){const t=[0];return oD(t,n.length-1),t}function cD(n,t){return n.map(r=>r*t)}function uD(n,t){return n.map(()=>t||ax).splice(0,n.length-1)}function _c({duration:n=300,keyframes:t,times:r,ease:s="easeInOut"}){const l=iD(s)?s.map(r1):r1(s),u={done:!1,value:t[0]},f=cD(r&&r.length===t.length?r:lD(t),n),p=sD(f,t,{ease:Array.isArray(l)?l:uD(t,l)});return{calculatedDuration:n,next:h=>(u.value=p(h),u.done=h>=n,u)}}const fD=n=>{const t=({timestamp:r})=>n(r);return{start:()=>Le.update(t,!0),stop:()=>Ci(t),now:()=>ut.isProcessing?ut.timestamp:gn.now()}},dD={decay:i1,inertia:i1,tween:_c,keyframes:_c,spring:rx},hD=n=>n/100;class jp extends ex{constructor(t){super(t),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:h}=this.options;h&&h()};const{name:r,motionValue:s,element:l,keyframes:u}=this.options,f=l?.KeyframeResolver||Mp,p=(h,m)=>this.onKeyframesResolved(h,m);this.resolver=new f(u,p,r,s,l),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(t){const{type:r="keyframes",repeat:s=0,repeatDelay:l=0,repeatType:u,velocity:f=0}=this.options,p=bp(r)?r:dD[r]||_c;let h,m;p!==_c&&typeof t[0]!="number"&&(h=mo(hD,nx(t[0],t[1])),t=[0,100]);const v=p({...this.options,keyframes:t});u==="mirror"&&(m=p({...this.options,keyframes:[...t].reverse(),velocity:-f})),v.calculatedDuration===null&&(v.calculatedDuration=T2(v));const{calculatedDuration:b}=v,x=b+l,w=x*(s+1)-l;return{generator:v,mirroredGenerator:m,mapPercentToKeyframes:h,calculatedDuration:b,resolvedDuration:x,totalDuration:w}}onPostResolved(){const{autoplay:t=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!t?this.pause():this.state=this.pendingPlayState}tick(t,r=!1){const{resolved:s}=this;if(!s){const{keyframes:W}=this.options;return{done:!0,value:W[W.length-1]}}const{finalKeyframe:l,generator:u,mirroredGenerator:f,mapPercentToKeyframes:p,keyframes:h,calculatedDuration:m,totalDuration:v,resolvedDuration:b}=s;if(this.startTime===null)return u.next(0);const{delay:x,repeat:w,repeatType:D,repeatDelay:j,onUpdate:k}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-v/this.speed,this.startTime)),r?this.currentTime=t:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;const z=this.currentTime-x*(this.speed>=0?1:-1),N=this.speed>=0?z<0:z>v;this.currentTime=Math.max(z,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=v);let P=this.currentTime,Y=u;if(w){const W=Math.min(this.currentTime,v)/b;let he=Math.floor(W),ke=W%1;!ke&&W>=1&&(ke=1),ke===1&&he--,he=Math.min(he,w+1),!!(he%2)&&(D==="reverse"?(ke=1-ke,j&&(ke-=j/b)):D==="mirror"&&(Y=f)),P=Gn(0,1,ke)*b}const I=N?{done:!1,value:h[0]}:Y.next(P);p&&(I.value=p(I.value));let{done:K}=I;!N&&m!==null&&(K=this.speed>=0?this.currentTime>=v:this.currentTime<=0);const X=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&K);return X&&l!==void 0&&(I.value=qc(h,this.options,l)),k&&k(I.value),X&&this.finish(),I}get duration(){const{resolved:t}=this;return t?Bn(t.calculatedDuration):0}get time(){return Bn(this.currentTime)}set time(t){t=In(t),this.currentTime=t,this.holdTime!==null||this.speed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){const r=this.playbackSpeed!==t;this.playbackSpeed=t,r&&(this.time=Bn(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:t=fD,onPlay:r,startTime:s}=this.options;this.driver||(this.driver=t(u=>this.tick(u))),r&&r();const l=this.driver.now();this.holdTime!==null?this.startTime=l-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=l):this.startTime=s??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(t=this.currentTime)!==null&&t!==void 0?t:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:t}=this.options;t&&t()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}const pD=new Set(["opacity","clipPath","filter","transform"]);function mD(n,t,r,{delay:s=0,duration:l=300,repeat:u=0,repeatType:f="loop",ease:p="easeInOut",times:h}={}){const m={[t]:r};h&&(m.offset=h);const v=E2(p,l);return Array.isArray(v)&&(m.easing=v),n.animate(m,{delay:s,duration:l,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:u+1,direction:f==="reverse"?"alternate":"normal"})}const gD=rp(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Ec=10,vD=2e4;function yD(n){return bp(n.type)||n.type==="spring"||!_2(n.ease)}function bD(n,t){const r=new jp({...t,keyframes:n,repeat:0,delay:0,isGenerator:!0});let s={done:!1,value:n[0]};const l=[];let u=0;for(;!s.done&&u<vD;)s=r.sample(u),l.push(s.value),u+=Ec;return{times:void 0,keyframes:l,duration:u-Ec,ease:"linear"}}const sx={anticipate:U2,backInOut:z2,circInOut:I2};function SD(n){return n in sx}class a1 extends ex{constructor(t){super(t);const{name:r,motionValue:s,element:l,keyframes:u}=this.options;this.resolver=new J2(u,(f,p)=>this.onKeyframesResolved(f,p),r,s,l),this.resolver.scheduleResolve()}initPlayback(t,r){let{duration:s=300,times:l,ease:u,type:f,motionValue:p,name:h,startTime:m}=this.options;if(!p.owner||!p.owner.current)return!1;if(typeof u=="string"&&Tc()&&SD(u)&&(u=sx[u]),yD(this.options)){const{onComplete:b,onUpdate:x,motionValue:w,element:D,...j}=this.options,k=bD(t,j);t=k.keyframes,t.length===1&&(t[1]=t[0]),s=k.duration,l=k.times,u=k.ease,f="keyframes"}const v=mD(p.owner.current,h,t,{...this.options,duration:s,times:l,ease:u});return v.startTime=m??this.calcStartTime(),this.pendingTimeline?(Gy(v,this.pendingTimeline),this.pendingTimeline=void 0):v.onfinish=()=>{const{onComplete:b}=this.options;p.set(qc(t,this.options,r)),b&&b(),this.cancel(),this.resolveFinishedPromise()},{animation:v,duration:s,times:l,type:f,ease:u,keyframes:t}}get duration(){const{resolved:t}=this;if(!t)return 0;const{duration:r}=t;return Bn(r)}get time(){const{resolved:t}=this;if(!t)return 0;const{animation:r}=t;return Bn(r.currentTime||0)}set time(t){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.currentTime=In(t)}get speed(){const{resolved:t}=this;if(!t)return 1;const{animation:r}=t;return r.playbackRate}set speed(t){const{resolved:r}=this;if(!r)return;const{animation:s}=r;s.playbackRate=t}get state(){const{resolved:t}=this;if(!t)return"idle";const{animation:r}=t;return r.playState}get startTime(){const{resolved:t}=this;if(!t)return null;const{animation:r}=t;return r.startTime}attachTimeline(t){if(!this._resolved)this.pendingTimeline=t;else{const{resolved:r}=this;if(!r)return Ut;const{animation:s}=r;Gy(s,t)}return Ut}play(){if(this.isStopped)return;const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playState==="finished"&&this.updateFinishedPromise(),r.play()}pause(){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:t}=this;if(!t)return;const{animation:r,keyframes:s,duration:l,type:u,ease:f,times:p}=t;if(r.playState==="idle"||r.playState==="finished")return;if(this.time){const{motionValue:m,onUpdate:v,onComplete:b,element:x,...w}=this.options,D=new jp({...w,keyframes:s,duration:l,type:u,ease:f,times:p,isGenerator:!0}),j=In(this.time);m.setWithVelocity(D.sample(j-Ec).value,D.sample(j).value,Ec)}const{onStop:h}=this.options;h&&h(),this.cancel()}complete(){const{resolved:t}=this;t&&t.animation.finish()}cancel(){const{resolved:t}=this;t&&t.animation.cancel()}static supports(t){const{motionValue:r,name:s,repeatDelay:l,repeatType:u,damping:f,type:p}=t;if(!r||!r.owner||!(r.owner.current instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:m}=r.owner.getProps();return gD()&&s&&pD.has(s)&&!h&&!m&&!l&&u!=="mirror"&&f!==0&&p!=="inertia"}}const xD={type:"spring",stiffness:500,damping:25,restSpeed:10},TD=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),wD={type:"keyframes",duration:.8},_D={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ED=(n,{keyframes:t})=>t.length>2?wD:dr.has(n)?n.startsWith("scale")?TD(t[1]):xD:_D;function AD({when:n,delay:t,delayChildren:r,staggerChildren:s,staggerDirection:l,repeat:u,repeatType:f,repeatDelay:p,from:h,elapsed:m,...v}){return!!Object.keys(v).length}const kp=(n,t,r,s={},l,u)=>f=>{const p=yp(s,n)||{},h=p.delay||s.delay||0;let{elapsed:m=0}=s;m=m-In(h);let v={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:t.getVelocity(),...p,delay:-m,onUpdate:x=>{t.set(x),p.onUpdate&&p.onUpdate(x)},onComplete:()=>{f(),p.onComplete&&p.onComplete()},name:n,motionValue:t,element:u?void 0:l};AD(p)||(v={...v,...ED(n,v)}),v.duration&&(v.duration=In(v.duration)),v.repeatDelay&&(v.repeatDelay=In(v.repeatDelay)),v.from!==void 0&&(v.keyframes[0]=v.from);let b=!1;if((v.type===!1||v.duration===0&&!v.repeatDelay)&&(v.duration=0,v.delay===0&&(b=!0)),b&&!u&&t.get()!==void 0){const x=qc(v.keyframes,p);if(x!==void 0)return Le.update(()=>{v.onUpdate(x),v.onComplete()}),new Y6([])}return!u&&a1.supports(v)?new a1(v):new jp(v)};function CD({protectedKeys:n,needsAnimating:t},r){const s=n.hasOwnProperty(r)&&t[r]!==!0;return t[r]=!1,s}function ox(n,t,{delay:r=0,transitionOverride:s,type:l}={}){var u;let{transition:f=n.getDefaultTransition(),transitionEnd:p,...h}=t;s&&(f=s);const m=[],v=l&&n.animationState&&n.animationState.getState()[l];for(const b in h){const x=n.getValue(b,(u=n.latestValues[b])!==null&&u!==void 0?u:null),w=h[b];if(w===void 0||v&&CD(v,b))continue;const D={delay:r,...yp(f||{},b)};let j=!1;if(window.MotionHandoffAnimation){const z=O2(n);if(z){const N=window.MotionHandoffAnimation(z,b,Le);N!==null&&(D.startTime=N,j=!0)}}bh(n,b),x.start(kp(b,x,w,n.shouldReduceMotion&&D2.has(b)?{type:!1}:D,n,j));const k=x.animation;k&&m.push(k)}return p&&Promise.all(m).then(()=>{Le.update(()=>{p&&aR(n,p)})}),m}function Ah(n,t,r={}){var s;const l=Gc(n,t,r.type==="exit"?(s=n.presenceContext)===null||s===void 0?void 0:s.custom:void 0);let{transition:u=n.getDefaultTransition()||{}}=l||{};r.transitionOverride&&(u=r.transitionOverride);const f=l?()=>Promise.all(ox(n,l,r)):()=>Promise.resolve(),p=n.variantChildren&&n.variantChildren.size?(m=0)=>{const{delayChildren:v=0,staggerChildren:b,staggerDirection:x}=u;return RD(n,t,v+m,b,x,r)}:()=>Promise.resolve(),{when:h}=u;if(h){const[m,v]=h==="beforeChildren"?[f,p]:[p,f];return m().then(()=>v())}else return Promise.all([f(),p(r.delay)])}function RD(n,t,r=0,s=0,l=1,u){const f=[],p=(n.variantChildren.size-1)*s,h=l===1?(m=0)=>m*s:(m=0)=>p-m*s;return Array.from(n.variantChildren).sort(DD).forEach((m,v)=>{m.notify("AnimationStart",t),f.push(Ah(m,t,{...u,delay:r+h(v)}).then(()=>m.notify("AnimationComplete",t)))}),Promise.all(f)}function DD(n,t){return n.sortNodePosition(t)}function MD(n,t,r={}){n.notify("AnimationStart",t);let s;if(Array.isArray(t)){const l=t.map(u=>Ah(n,u,r));s=Promise.all(l)}else if(typeof t=="string")s=Ah(n,t,r);else{const l=typeof t=="function"?Gc(n,t,r.custom):t;s=Promise.all(ox(n,l,r))}return s.then(()=>{n.notify("AnimationComplete",t)})}const OD=sp.length;function lx(n){if(!n)return;if(!n.isControllingVariants){const r=n.parent?lx(n.parent)||{}:{};return n.props.initial!==void 0&&(r.initial=n.props.initial),r}const t={};for(let r=0;r<OD;r++){const s=sp[r],l=n.props[s];(Ws(l)||l===!1)&&(t[s]=l)}return t}const jD=[...ap].reverse(),kD=ap.length;function ND(n){return t=>Promise.all(t.map(({animation:r,options:s})=>MD(n,r,s)))}function LD(n){let t=ND(n),r=s1(),s=!0;const l=h=>(m,v)=>{var b;const x=Gc(n,v,h==="exit"?(b=n.presenceContext)===null||b===void 0?void 0:b.custom:void 0);if(x){const{transition:w,transitionEnd:D,...j}=x;m={...m,...j,...D}}return m};function u(h){t=h(n)}function f(h){const{props:m}=n,v=lx(n.parent)||{},b=[],x=new Set;let w={},D=1/0;for(let k=0;k<kD;k++){const z=jD[k],N=r[z],P=m[z]!==void 0?m[z]:v[z],Y=Ws(P),I=z===h?N.isActive:null;I===!1&&(D=k);let K=P===v[z]&&P!==m[z]&&Y;if(K&&s&&n.manuallyAnimateOnMount&&(K=!1),N.protectedKeys={...w},!N.isActive&&I===null||!P&&!N.prevProp||Vc(P)||typeof P=="boolean")continue;const X=zD(N.prevProp,P);let W=X||z===h&&N.isActive&&!K&&Y||k>D&&Y,he=!1;const ke=Array.isArray(P)?P:[P];let Xe=ke.reduce(l(z),{});I===!1&&(Xe={});const{prevResolvedValues:ue={}}=N,Te={...ue,...Xe},Ue=F=>{W=!0,x.has(F)&&(he=!0,x.delete(F)),N.needsAnimating[F]=!0;const J=n.getValue(F);J&&(J.liveStyle=!1)};for(const F in Te){const J=Xe[F],le=ue[F];if(w.hasOwnProperty(F))continue;let _=!1;gh(J)&&gh(le)?_=!x2(J,le):_=J!==le,_?J!=null?Ue(F):x.add(F):J!==void 0&&x.has(F)?Ue(F):N.protectedKeys[F]=!0}N.prevProp=P,N.prevResolvedValues=Xe,N.isActive&&(w={...w,...Xe}),s&&n.blockInitialAnimation&&(W=!1),W&&(!(K&&X)||he)&&b.push(...ke.map(F=>({animation:F,options:{type:z}})))}if(x.size){const k={};x.forEach(z=>{const N=n.getBaseTarget(z),P=n.getValue(z);P&&(P.liveStyle=!0),k[z]=N??null}),b.push({animation:k})}let j=!!b.length;return s&&(m.initial===!1||m.initial===m.animate)&&!n.manuallyAnimateOnMount&&(j=!1),s=!1,j?t(b):Promise.resolve()}function p(h,m){var v;if(r[h].isActive===m)return Promise.resolve();(v=n.variantChildren)===null||v===void 0||v.forEach(x=>{var w;return(w=x.animationState)===null||w===void 0?void 0:w.setActive(h,m)}),r[h].isActive=m;const b=f(h);for(const x in r)r[x].protectedKeys={};return b}return{animateChanges:f,setActive:p,setAnimateFunction:u,getState:()=>r,reset:()=>{r=s1(),s=!0}}}function zD(n,t){return typeof t=="string"?t!==n:Array.isArray(t)?!x2(t,n):!1}function Zi(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function s1(){return{animate:Zi(!0),whileInView:Zi(),whileHover:Zi(),whileTap:Zi(),whileDrag:Zi(),whileFocus:Zi(),exit:Zi()}}class ji{constructor(t){this.isMounted=!1,this.node=t}update(){}}class UD extends ji{constructor(t){super(t),t.animationState||(t.animationState=LD(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();Vc(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:r}=this.node.prevProps||{};t!==r&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)===null||t===void 0||t.call(this)}}let PD=0;class ID extends ji{constructor(){super(...arguments),this.id=PD++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:r}=this.node.presenceContext,{isPresent:s}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===s)return;const l=this.node.animationState.setActive("exit",!t);r&&!t&&l.then(()=>r(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const BD={animation:{Feature:UD},exit:{Feature:ID}};function to(n,t,r,s={passive:!0}){return n.addEventListener(t,r,s),()=>n.removeEventListener(t,r)}function go(n){return{point:{x:n.pageX,y:n.pageY}}}const VD=n=>t=>xp(t)&&n(t,go(t));function Is(n,t,r,s){return to(n,t,VD(r),s)}const o1=(n,t)=>Math.abs(n-t);function HD(n,t){const r=o1(n.x,t.x),s=o1(n.y,t.y);return Math.sqrt(r**2+s**2)}class cx{constructor(t,r,{transformPagePoint:s,contextWindow:l,dragSnapToOrigin:u=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const b=Md(this.lastMoveEventInfo,this.history),x=this.startEvent!==null,w=HD(b.offset,{x:0,y:0})>=3;if(!x&&!w)return;const{point:D}=b,{timestamp:j}=ut;this.history.push({...D,timestamp:j});const{onStart:k,onMove:z}=this.handlers;x||(k&&k(this.lastMoveEvent,b),this.startEvent=this.lastMoveEvent),z&&z(this.lastMoveEvent,b)},this.handlePointerMove=(b,x)=>{this.lastMoveEvent=b,this.lastMoveEventInfo=Dd(x,this.transformPagePoint),Le.update(this.updatePoint,!0)},this.handlePointerUp=(b,x)=>{this.end();const{onEnd:w,onSessionEnd:D,resumeAnimation:j}=this.handlers;if(this.dragSnapToOrigin&&j&&j(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const k=Md(b.type==="pointercancel"?this.lastMoveEventInfo:Dd(x,this.transformPagePoint),this.history);this.startEvent&&w&&w(b,k),D&&D(b,k)},!xp(t))return;this.dragSnapToOrigin=u,this.handlers=r,this.transformPagePoint=s,this.contextWindow=l||window;const f=go(t),p=Dd(f,this.transformPagePoint),{point:h}=p,{timestamp:m}=ut;this.history=[{...h,timestamp:m}];const{onSessionStart:v}=r;v&&v(t,Md(p,this.history)),this.removeListeners=mo(Is(this.contextWindow,"pointermove",this.handlePointerMove),Is(this.contextWindow,"pointerup",this.handlePointerUp),Is(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),Ci(this.updatePoint)}}function Dd(n,t){return t?{point:t(n.point)}:n}function l1(n,t){return{x:n.x-t.x,y:n.y-t.y}}function Md({point:n},t){return{point:n,delta:l1(n,ux(t)),offset:l1(n,GD(t)),velocity:qD(t,.1)}}function GD(n){return n[0]}function ux(n){return n[n.length-1]}function qD(n,t){if(n.length<2)return{x:0,y:0};let r=n.length-1,s=null;const l=ux(n);for(;r>=0&&(s=n[r],!(l.timestamp-s.timestamp>In(t)));)r--;if(!s)return{x:0,y:0};const u=Bn(l.timestamp-s.timestamp);if(u===0)return{x:0,y:0};const f={x:(l.x-s.x)/u,y:(l.y-s.y)/u};return f.x===1/0&&(f.x=0),f.y===1/0&&(f.y=0),f}const fx=1e-4,YD=1-fx,FD=1+fx,dx=.01,KD=0-dx,XD=0+dx;function Pt(n){return n.max-n.min}function QD(n,t,r){return Math.abs(n-t)<=r}function c1(n,t,r,s=.5){n.origin=s,n.originPoint=Ie(t.min,t.max,n.origin),n.scale=Pt(r)/Pt(t),n.translate=Ie(r.min,r.max,n.origin)-n.originPoint,(n.scale>=YD&&n.scale<=FD||isNaN(n.scale))&&(n.scale=1),(n.translate>=KD&&n.translate<=XD||isNaN(n.translate))&&(n.translate=0)}function Bs(n,t,r,s){c1(n.x,t.x,r.x,s?s.originX:void 0),c1(n.y,t.y,r.y,s?s.originY:void 0)}function u1(n,t,r){n.min=r.min+t.min,n.max=n.min+Pt(t)}function $D(n,t,r){u1(n.x,t.x,r.x),u1(n.y,t.y,r.y)}function f1(n,t,r){n.min=t.min-r.min,n.max=n.min+Pt(t)}function Vs(n,t,r){f1(n.x,t.x,r.x),f1(n.y,t.y,r.y)}function WD(n,{min:t,max:r},s){return t!==void 0&&n<t?n=s?Ie(t,n,s.min):Math.max(n,t):r!==void 0&&n>r&&(n=s?Ie(r,n,s.max):Math.min(n,r)),n}function d1(n,t,r){return{min:t!==void 0?n.min+t:void 0,max:r!==void 0?n.max+r-(n.max-n.min):void 0}}function ZD(n,{top:t,left:r,bottom:s,right:l}){return{x:d1(n.x,r,l),y:d1(n.y,t,s)}}function h1(n,t){let r=t.min-n.min,s=t.max-n.max;return t.max-t.min<n.max-n.min&&([r,s]=[s,r]),{min:r,max:s}}function JD(n,t){return{x:h1(n.x,t.x),y:h1(n.y,t.y)}}function e8(n,t){let r=.5;const s=Pt(n),l=Pt(t);return l>s?r=ba(t.min,t.max-s,n.min):s>l&&(r=ba(n.min,n.max-l,t.min)),Gn(0,1,r)}function t8(n,t){const r={};return t.min!==void 0&&(r.min=t.min-n.min),t.max!==void 0&&(r.max=t.max-n.min),r}const Ch=.35;function n8(n=Ch){return n===!1?n=0:n===!0&&(n=Ch),{x:p1(n,"left","right"),y:p1(n,"top","bottom")}}function p1(n,t,r){return{min:m1(n,t),max:m1(n,r)}}function m1(n,t){return typeof n=="number"?n:n[t]||0}const g1=()=>({translate:0,scale:1,origin:0,originPoint:0}),ra=()=>({x:g1(),y:g1()}),v1=()=>({min:0,max:0}),Ke=()=>({x:v1(),y:v1()});function $t(n){return[n("x"),n("y")]}function hx({top:n,left:t,right:r,bottom:s}){return{x:{min:t,max:r},y:{min:n,max:s}}}function i8({x:n,y:t}){return{top:t.min,right:n.max,bottom:t.max,left:n.min}}function r8(n,t){if(!t)return n;const r=t({x:n.left,y:n.top}),s=t({x:n.right,y:n.bottom});return{top:r.y,left:r.x,bottom:s.y,right:s.x}}function Od(n){return n===void 0||n===1}function Rh({scale:n,scaleX:t,scaleY:r}){return!Od(n)||!Od(t)||!Od(r)}function tr(n){return Rh(n)||px(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function px(n){return y1(n.x)||y1(n.y)}function y1(n){return n&&n!=="0%"}function Ac(n,t,r){const s=n-r,l=t*s;return r+l}function b1(n,t,r,s,l){return l!==void 0&&(n=Ac(n,l,s)),Ac(n,r,s)+t}function Dh(n,t=0,r=1,s,l){n.min=b1(n.min,t,r,s,l),n.max=b1(n.max,t,r,s,l)}function mx(n,{x:t,y:r}){Dh(n.x,t.translate,t.scale,t.originPoint),Dh(n.y,r.translate,r.scale,r.originPoint)}const S1=.999999999999,x1=1.0000000000001;function a8(n,t,r,s=!1){const l=r.length;if(!l)return;t.x=t.y=1;let u,f;for(let p=0;p<l;p++){u=r[p],f=u.projectionDelta;const{visualElement:h}=u.options;h&&h.props.style&&h.props.style.display==="contents"||(s&&u.options.layoutScroll&&u.scroll&&u!==u.root&&sa(n,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),f&&(t.x*=f.x.scale,t.y*=f.y.scale,mx(n,f)),s&&tr(u.latestValues)&&sa(n,u.latestValues))}t.x<x1&&t.x>S1&&(t.x=1),t.y<x1&&t.y>S1&&(t.y=1)}function aa(n,t){n.min=n.min+t,n.max=n.max+t}function T1(n,t,r,s,l=.5){const u=Ie(n.min,n.max,l);Dh(n,t,r,u,s)}function sa(n,t){T1(n.x,t.x,t.scaleX,t.scale,t.originX),T1(n.y,t.y,t.scaleY,t.scale,t.originY)}function gx(n,t){return hx(r8(n.getBoundingClientRect(),t))}function s8(n,t,r){const s=gx(n,r),{scroll:l}=t;return l&&(aa(s.x,l.offset.x),aa(s.y,l.offset.y)),s}const vx=({current:n})=>n?n.ownerDocument.defaultView:null,o8=new WeakMap;class l8{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Ke(),this.visualElement=t}start(t,{snapToCursor:r=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const l=v=>{const{dragSnapToOrigin:b}=this.getProps();b?this.pauseAnimation():this.stopAnimation(),r&&this.snapToCursor(go(v).point)},u=(v,b)=>{const{drag:x,dragPropagation:w,onDragStart:D}=this.getProps();if(x&&!w&&(this.openDragLock&&this.openDragLock(),this.openDragLock=eR(x),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),$t(k=>{let z=this.getAxisMotionValue(k).get()||0;if(mn.test(z)){const{projection:N}=this.visualElement;if(N&&N.layout){const P=N.layout.layoutBox[k];P&&(z=Pt(P)*(parseFloat(z)/100))}}this.originPoint[k]=z}),D&&Le.postRender(()=>D(v,b)),bh(this.visualElement,"transform");const{animationState:j}=this.visualElement;j&&j.setActive("whileDrag",!0)},f=(v,b)=>{const{dragPropagation:x,dragDirectionLock:w,onDirectionLock:D,onDrag:j}=this.getProps();if(!x&&!this.openDragLock)return;const{offset:k}=b;if(w&&this.currentDirection===null){this.currentDirection=c8(k),this.currentDirection!==null&&D&&D(this.currentDirection);return}this.updateAxis("x",b.point,k),this.updateAxis("y",b.point,k),this.visualElement.render(),j&&j(v,b)},p=(v,b)=>this.stop(v,b),h=()=>$t(v=>{var b;return this.getAnimationState(v)==="paused"&&((b=this.getAxisMotionValue(v).animation)===null||b===void 0?void 0:b.play())}),{dragSnapToOrigin:m}=this.getProps();this.panSession=new cx(t,{onSessionStart:l,onStart:u,onMove:f,onSessionEnd:p,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:m,contextWindow:vx(this.visualElement)})}stop(t,r){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:l}=r;this.startAnimation(l);const{onDragEnd:u}=this.getProps();u&&Le.postRender(()=>u(t,r))}cancel(){this.isDragging=!1;const{projection:t,animationState:r}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),r&&r.setActive("whileDrag",!1)}updateAxis(t,r,s){const{drag:l}=this.getProps();if(!s||!Pl(t,l,this.currentDirection))return;const u=this.getAxisMotionValue(t);let f=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(f=WD(f,this.constraints[t],this.elastic[t])),u.set(f)}resolveConstraints(){var t;const{dragConstraints:r,dragElastic:s}=this.getProps(),l=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,u=this.constraints;r&&na(r)?this.constraints||(this.constraints=this.resolveRefConstraints()):r&&l?this.constraints=ZD(l.layoutBox,r):this.constraints=!1,this.elastic=n8(s),u!==this.constraints&&l&&this.constraints&&!this.hasMutatedConstraints&&$t(f=>{this.constraints!==!1&&this.getAxisMotionValue(f)&&(this.constraints[f]=t8(l.layoutBox[f],this.constraints[f]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:r}=this.getProps();if(!t||!na(t))return!1;const s=t.current,{projection:l}=this.visualElement;if(!l||!l.layout)return!1;const u=s8(s,l.root,this.visualElement.getTransformPagePoint());let f=JD(l.layout.layoutBox,u);if(r){const p=r(i8(f));this.hasMutatedConstraints=!!p,p&&(f=hx(p))}return f}startAnimation(t){const{drag:r,dragMomentum:s,dragElastic:l,dragTransition:u,dragSnapToOrigin:f,onDragTransitionEnd:p}=this.getProps(),h=this.constraints||{},m=$t(v=>{if(!Pl(v,r,this.currentDirection))return;let b=h&&h[v]||{};f&&(b={min:0,max:0});const x=l?200:1e6,w=l?40:1e7,D={type:"inertia",velocity:s?t[v]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...u,...b};return this.startAxisValueAnimation(v,D)});return Promise.all(m).then(p)}startAxisValueAnimation(t,r){const s=this.getAxisMotionValue(t);return bh(this.visualElement,t),s.start(kp(t,s,0,r,this.visualElement,!1))}stopAnimation(){$t(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){$t(t=>{var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.pause()})}getAnimationState(t){var r;return(r=this.getAxisMotionValue(t).animation)===null||r===void 0?void 0:r.state}getAxisMotionValue(t){const r=`_drag${t.toUpperCase()}`,s=this.visualElement.getProps(),l=s[r];return l||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){$t(r=>{const{drag:s}=this.getProps();if(!Pl(r,s,this.currentDirection))return;const{projection:l}=this.visualElement,u=this.getAxisMotionValue(r);if(l&&l.layout){const{min:f,max:p}=l.layout.layoutBox[r];u.set(t[r]-Ie(f,p,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:r}=this.getProps(),{projection:s}=this.visualElement;if(!na(r)||!s||!this.constraints)return;this.stopAnimation();const l={x:0,y:0};$t(f=>{const p=this.getAxisMotionValue(f);if(p&&this.constraints!==!1){const h=p.get();l[f]=e8({min:h,max:h},this.constraints[f])}});const{transformTemplate:u}=this.visualElement.getProps();this.visualElement.current.style.transform=u?u({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),$t(f=>{if(!Pl(f,t,null))return;const p=this.getAxisMotionValue(f),{min:h,max:m}=this.constraints[f];p.set(Ie(h,m,l[f]))})}addListeners(){if(!this.visualElement.current)return;o8.set(this.visualElement,this);const t=this.visualElement.current,r=Is(t,"pointerdown",h=>{const{drag:m,dragListener:v=!0}=this.getProps();m&&v&&this.start(h)}),s=()=>{const{dragConstraints:h}=this.getProps();na(h)&&h.current&&(this.constraints=this.resolveRefConstraints())},{projection:l}=this.visualElement,u=l.addEventListener("measure",s);l&&!l.layout&&(l.root&&l.root.updateScroll(),l.updateLayout()),Le.read(s);const f=to(window,"resize",()=>this.scalePositionWithinConstraints()),p=l.addEventListener("didUpdate",({delta:h,hasLayoutChanged:m})=>{this.isDragging&&m&&($t(v=>{const b=this.getAxisMotionValue(v);b&&(this.originPoint[v]+=h[v].translate,b.set(b.get()+h[v].translate))}),this.visualElement.render())});return()=>{f(),r(),u(),p&&p()}}getProps(){const t=this.visualElement.getProps(),{drag:r=!1,dragDirectionLock:s=!1,dragPropagation:l=!1,dragConstraints:u=!1,dragElastic:f=Ch,dragMomentum:p=!0}=t;return{...t,drag:r,dragDirectionLock:s,dragPropagation:l,dragConstraints:u,dragElastic:f,dragMomentum:p}}}function Pl(n,t,r){return(t===!0||t===n)&&(r===null||r===n)}function c8(n,t=10){let r=null;return Math.abs(n.y)>t?r="y":Math.abs(n.x)>t&&(r="x"),r}class u8 extends ji{constructor(t){super(t),this.removeGroupControls=Ut,this.removeListeners=Ut,this.controls=new l8(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Ut}unmount(){this.removeGroupControls(),this.removeListeners()}}const w1=n=>(t,r)=>{n&&Le.postRender(()=>n(t,r))};class f8 extends ji{constructor(){super(...arguments),this.removePointerDownListener=Ut}onPointerDown(t){this.session=new cx(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:vx(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:r,onPan:s,onPanEnd:l}=this.node.getProps();return{onSessionStart:w1(t),onStart:w1(r),onMove:s,onEnd:(u,f)=>{delete this.session,l&&Le.postRender(()=>l(u,f))}}}mount(){this.removePointerDownListener=Is(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ac={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function _1(n,t){return t.max===t.min?0:n/(t.max-t.min)*100}const Rs={correct:(n,t)=>{if(!t.target)return n;if(typeof n=="string")if(ae.test(n))n=parseFloat(n);else return n;const r=_1(n,t.target.x),s=_1(n,t.target.y);return`${r}% ${s}%`}},d8={correct:(n,{treeScale:t,projectionDelta:r})=>{const s=n,l=Ri.parse(n);if(l.length>5)return s;const u=Ri.createTransformer(n),f=typeof l[0]!="number"?1:0,p=r.x.scale*t.x,h=r.y.scale*t.y;l[0+f]/=p,l[1+f]/=h;const m=Ie(p,h,.5);return typeof l[2+f]=="number"&&(l[2+f]/=m),typeof l[3+f]=="number"&&(l[3+f]/=m),u(l)}};class h8 extends A.Component{componentDidMount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s,layoutId:l}=this.props,{projection:u}=t;k6(p8),u&&(r.group&&r.group.add(u),s&&s.register&&l&&s.register(u),u.root.didUpdate(),u.addEventListener("animationComplete",()=>{this.safeToRemove()}),u.setOptions({...u.options,onExitComplete:()=>this.safeToRemove()})),ac.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:r,visualElement:s,drag:l,isPresent:u}=this.props,f=s.projection;return f&&(f.isPresent=u,l||t.layoutDependency!==r||r===void 0?f.willUpdate():this.safeToRemove(),t.isPresent!==u&&(u?f.promote():f.relegate()||Le.postRender(()=>{const p=f.getStack();(!p||!p.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),lp.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:r,switchLayoutGroup:s}=this.props,{projection:l}=t;l&&(l.scheduleCheckAfterUnmount(),r&&r.group&&r.group.remove(l),s&&s.deregister&&s.deregister(l))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function yx(n){const[t,r]=e2(),s=A.useContext(ep);return y.jsx(h8,{...n,layoutGroup:s,switchLayoutGroup:A.useContext(l2),isPresent:t,safeToRemove:r})}const p8={borderRadius:{...Rs,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Rs,borderTopRightRadius:Rs,borderBottomLeftRadius:Rs,borderBottomRightRadius:Rs,boxShadow:d8};function m8(n,t,r){const s=yt(n)?n:Js(n);return s.start(kp("",s,t,r)),s.animation}function g8(n){return n instanceof SVGElement&&n.tagName!=="svg"}const v8=(n,t)=>n.depth-t.depth;class y8{constructor(){this.children=[],this.isDirty=!1}add(t){Tp(this.children,t),this.isDirty=!0}remove(t){wp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(v8),this.isDirty=!1,this.children.forEach(t)}}function b8(n,t){const r=gn.now(),s=({timestamp:l})=>{const u=l-r;u>=t&&(Ci(s),n(u-t))};return Le.read(s,!0),()=>Ci(s)}const bx=["TopLeft","TopRight","BottomLeft","BottomRight"],S8=bx.length,E1=n=>typeof n=="string"?parseFloat(n):n,A1=n=>typeof n=="number"||ae.test(n);function x8(n,t,r,s,l,u){l?(n.opacity=Ie(0,r.opacity!==void 0?r.opacity:1,T8(s)),n.opacityExit=Ie(t.opacity!==void 0?t.opacity:1,0,w8(s))):u&&(n.opacity=Ie(t.opacity!==void 0?t.opacity:1,r.opacity!==void 0?r.opacity:1,s));for(let f=0;f<S8;f++){const p=`border${bx[f]}Radius`;let h=C1(t,p),m=C1(r,p);if(h===void 0&&m===void 0)continue;h||(h=0),m||(m=0),h===0||m===0||A1(h)===A1(m)?(n[p]=Math.max(Ie(E1(h),E1(m),s),0),(mn.test(m)||mn.test(h))&&(n[p]+="%")):n[p]=m}(t.rotate||r.rotate)&&(n.rotate=Ie(t.rotate||0,r.rotate||0,s))}function C1(n,t){return n[t]!==void 0?n[t]:n.borderRadius}const T8=Sx(0,.5,P2),w8=Sx(.5,.95,Ut);function Sx(n,t,r){return s=>s<n?0:s>t?1:r(ba(n,t,s))}function R1(n,t){n.min=t.min,n.max=t.max}function Qt(n,t){R1(n.x,t.x),R1(n.y,t.y)}function D1(n,t){n.translate=t.translate,n.scale=t.scale,n.originPoint=t.originPoint,n.origin=t.origin}function M1(n,t,r,s,l){return n-=t,n=Ac(n,1/r,s),l!==void 0&&(n=Ac(n,1/l,s)),n}function _8(n,t=0,r=1,s=.5,l,u=n,f=n){if(mn.test(t)&&(t=parseFloat(t),t=Ie(f.min,f.max,t/100)-f.min),typeof t!="number")return;let p=Ie(u.min,u.max,s);n===u&&(p-=t),n.min=M1(n.min,t,r,p,l),n.max=M1(n.max,t,r,p,l)}function O1(n,t,[r,s,l],u,f){_8(n,t[r],t[s],t[l],t.scale,u,f)}const E8=["x","scaleX","originX"],A8=["y","scaleY","originY"];function j1(n,t,r,s){O1(n.x,t,E8,r?r.x:void 0,s?s.x:void 0),O1(n.y,t,A8,r?r.y:void 0,s?s.y:void 0)}function k1(n){return n.translate===0&&n.scale===1}function xx(n){return k1(n.x)&&k1(n.y)}function N1(n,t){return n.min===t.min&&n.max===t.max}function C8(n,t){return N1(n.x,t.x)&&N1(n.y,t.y)}function L1(n,t){return Math.round(n.min)===Math.round(t.min)&&Math.round(n.max)===Math.round(t.max)}function Tx(n,t){return L1(n.x,t.x)&&L1(n.y,t.y)}function z1(n){return Pt(n.x)/Pt(n.y)}function U1(n,t){return n.translate===t.translate&&n.scale===t.scale&&n.originPoint===t.originPoint}class R8{constructor(){this.members=[]}add(t){Tp(this.members,t),t.scheduleRender()}remove(t){if(wp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const r=this.members[this.members.length-1];r&&this.promote(r)}}relegate(t){const r=this.members.findIndex(l=>t===l);if(r===0)return!1;let s;for(let l=r;l>=0;l--){const u=this.members[l];if(u.isPresent!==!1){s=u;break}}return s?(this.promote(s),!0):!1}promote(t,r){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,r&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:l}=t.options;l===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:r,resumingFrom:s}=t;r.onExitComplete&&r.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function D8(n,t,r){let s="";const l=n.x.translate/t.x,u=n.y.translate/t.y,f=r?.z||0;if((l||u||f)&&(s=`translate3d(${l}px, ${u}px, ${f}px) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),r){const{transformPerspective:m,rotate:v,rotateX:b,rotateY:x,skewX:w,skewY:D}=r;m&&(s=`perspective(${m}px) ${s}`),v&&(s+=`rotate(${v}deg) `),b&&(s+=`rotateX(${b}deg) `),x&&(s+=`rotateY(${x}deg) `),w&&(s+=`skewX(${w}deg) `),D&&(s+=`skewY(${D}deg) `)}const p=n.x.scale*t.x,h=n.y.scale*t.y;return(p!==1||h!==1)&&(s+=`scale(${p}, ${h})`),s||"none"}const nr={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Ls=typeof window<"u"&&window.MotionDebug!==void 0,jd=["","X","Y","Z"],M8={visibility:"hidden"},P1=1e3;let O8=0;function kd(n,t,r,s){const{latestValues:l}=t;l[n]&&(r[n]=l[n],t.setStaticValue(n,0),s&&(s[n]=0))}function wx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:t}=n.options;if(!t)return;const r=O2(t);if(window.MotionHasOptimisedAnimation(r,"transform")){const{layout:l,layoutId:u}=n.options;window.MotionCancelOptimisedAnimation(r,"transform",Le,!(l||u))}const{parent:s}=n;s&&!s.hasCheckedOptimisedAppear&&wx(s)}function _x({attachResizeListener:n,defaultParent:t,measureScroll:r,checkIsScrollRoot:s,resetTransform:l}){return class{constructor(f={},p=t?.()){this.id=O8++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Ls&&(nr.totalNodes=nr.resolvedTargetDeltas=nr.recalculatedProjection=0),this.nodes.forEach(N8),this.nodes.forEach(I8),this.nodes.forEach(B8),this.nodes.forEach(L8),Ls&&window.MotionDebug.record(nr)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=f,this.root=p?p.root||p:this,this.path=p?[...p.path,p]:[],this.parent=p,this.depth=p?p.depth+1:0;for(let h=0;h<this.path.length;h++)this.path[h].shouldResetTransform=!0;this.root===this&&(this.nodes=new y8)}addEventListener(f,p){return this.eventHandlers.has(f)||this.eventHandlers.set(f,new _p),this.eventHandlers.get(f).add(p)}notifyListeners(f,...p){const h=this.eventHandlers.get(f);h&&h.notify(...p)}hasListeners(f){return this.eventHandlers.has(f)}mount(f,p=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=g8(f),this.instance=f;const{layoutId:h,layout:m,visualElement:v}=this.options;if(v&&!v.current&&v.mount(f),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),p&&(m||h)&&(this.isLayoutDirty=!0),n){let b;const x=()=>this.root.updateBlockedByResize=!1;n(f,()=>{this.root.updateBlockedByResize=!0,b&&b(),b=b8(x,250),ac.hasAnimatedSinceResize&&(ac.hasAnimatedSinceResize=!1,this.nodes.forEach(B1))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&v&&(h||m)&&this.addEventListener("didUpdate",({delta:b,hasLayoutChanged:x,hasRelativeTargetChanged:w,layout:D})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const j=this.options.transition||v.getDefaultTransition()||Y8,{onLayoutAnimationStart:k,onLayoutAnimationComplete:z}=v.getProps(),N=!this.targetLayout||!Tx(this.targetLayout,D)||w,P=!x&&w;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||P||x&&(N||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(b,P);const Y={...yp(j,"layout"),onPlay:k,onComplete:z};(v.shouldReduceMotion||this.options.layoutRoot)&&(Y.delay=0,Y.type=!1),this.startAnimation(Y)}else x||B1(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=D})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const f=this.getStack();f&&f.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Ci(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(V8),this.animationId++)}getTransformTemplate(){const{visualElement:f}=this.options;return f&&f.getProps().transformTemplate}willUpdate(f=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&wx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let v=0;v<this.path.length;v++){const b=this.path[v];b.shouldResetTransform=!0,b.updateScroll("snapshot"),b.options.layoutRoot&&b.willUpdate(!1)}const{layoutId:p,layout:h}=this.options;if(p===void 0&&!h)return;const m=this.getTransformTemplate();this.prevTransformTemplateValue=m?m(this.latestValues,""):void 0,this.updateSnapshot(),f&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(I1);return}this.isUpdating||this.nodes.forEach(U8),this.isUpdating=!1,this.nodes.forEach(P8),this.nodes.forEach(j8),this.nodes.forEach(k8),this.clearAllSnapshots();const p=gn.now();ut.delta=Gn(0,1e3/60,p-ut.timestamp),ut.timestamp=p,ut.isProcessing=!0,wd.update.process(ut),wd.preRender.process(ut),wd.render.process(ut),ut.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,lp.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(z8),this.sharedNodes.forEach(H8)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Le.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Le.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let h=0;h<this.path.length;h++)this.path[h].updateScroll();const f=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Ke(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:p}=this.options;p&&p.notify("LayoutMeasure",this.layout.layoutBox,f?f.layoutBox:void 0)}updateScroll(f="measure"){let p=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===f&&(p=!1),p){const h=s(this.instance);this.scroll={animationId:this.root.animationId,phase:f,isRoot:h,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:h}}}resetTransform(){if(!l)return;const f=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,p=this.projectionDelta&&!xx(this.projectionDelta),h=this.getTransformTemplate(),m=h?h(this.latestValues,""):void 0,v=m!==this.prevTransformTemplateValue;f&&(p||tr(this.latestValues)||v)&&(l(this.instance,m),this.shouldResetTransform=!1,this.scheduleRender())}measure(f=!0){const p=this.measurePageBox();let h=this.removeElementScroll(p);return f&&(h=this.removeTransform(h)),F8(h),{animationId:this.root.animationId,measuredBox:p,layoutBox:h,latestValues:{},source:this.id}}measurePageBox(){var f;const{visualElement:p}=this.options;if(!p)return Ke();const h=p.measureViewportBox();if(!(((f=this.scroll)===null||f===void 0?void 0:f.wasRoot)||this.path.some(K8))){const{scroll:v}=this.root;v&&(aa(h.x,v.offset.x),aa(h.y,v.offset.y))}return h}removeElementScroll(f){var p;const h=Ke();if(Qt(h,f),!((p=this.scroll)===null||p===void 0)&&p.wasRoot)return h;for(let m=0;m<this.path.length;m++){const v=this.path[m],{scroll:b,options:x}=v;v!==this.root&&b&&x.layoutScroll&&(b.wasRoot&&Qt(h,f),aa(h.x,b.offset.x),aa(h.y,b.offset.y))}return h}applyTransform(f,p=!1){const h=Ke();Qt(h,f);for(let m=0;m<this.path.length;m++){const v=this.path[m];!p&&v.options.layoutScroll&&v.scroll&&v!==v.root&&sa(h,{x:-v.scroll.offset.x,y:-v.scroll.offset.y}),tr(v.latestValues)&&sa(h,v.latestValues)}return tr(this.latestValues)&&sa(h,this.latestValues),h}removeTransform(f){const p=Ke();Qt(p,f);for(let h=0;h<this.path.length;h++){const m=this.path[h];if(!m.instance||!tr(m.latestValues))continue;Rh(m.latestValues)&&m.updateSnapshot();const v=Ke(),b=m.measurePageBox();Qt(v,b),j1(p,m.latestValues,m.snapshot?m.snapshot.layoutBox:void 0,v)}return tr(this.latestValues)&&j1(p,this.latestValues),p}setTargetDelta(f){this.targetDelta=f,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(f){this.options={...this.options,...f,crossfade:f.crossfade!==void 0?f.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ut.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(f=!1){var p;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const m=!!this.resumingFrom||this!==h;if(!(f||m&&this.isSharedProjectionDirty||this.isProjectionDirty||!((p=this.parent)===null||p===void 0)&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:b,layoutId:x}=this.options;if(!(!this.layout||!(b||x))){if(this.resolvedRelativeTargetAt=ut.timestamp,!this.targetDelta&&!this.relativeTarget){const w=this.getClosestProjectingParent();w&&w.layout&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),Vs(this.relativeTargetOrigin,this.layout.layoutBox,w.layout.layoutBox),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Ke(),this.targetWithTransforms=Ke()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$D(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Qt(this.target,this.layout.layoutBox),mx(this.target,this.targetDelta)):Qt(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const w=this.getClosestProjectingParent();w&&!!w.resumingFrom==!!this.resumingFrom&&!w.options.layoutScroll&&w.target&&this.animationProgress!==1?(this.relativeParent=w,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Ke(),this.relativeTargetOrigin=Ke(),Vs(this.relativeTargetOrigin,this.target,w.target),Qt(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Ls&&nr.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Rh(this.parent.latestValues)||px(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var f;const p=this.getLead(),h=!!this.resumingFrom||this!==p;let m=!0;if((this.isProjectionDirty||!((f=this.parent)===null||f===void 0)&&f.isProjectionDirty)&&(m=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(m=!1),this.resolvedRelativeTargetAt===ut.timestamp&&(m=!1),m)return;const{layout:v,layoutId:b}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(v||b))return;Qt(this.layoutCorrected,this.layout.layoutBox);const x=this.treeScale.x,w=this.treeScale.y;a8(this.layoutCorrected,this.treeScale,this.path,h),p.layout&&!p.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(p.target=p.layout.layoutBox,p.targetWithTransforms=Ke());const{target:D}=p;if(!D){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(D1(this.prevProjectionDelta.x,this.projectionDelta.x),D1(this.prevProjectionDelta.y,this.projectionDelta.y)),Bs(this.projectionDelta,this.layoutCorrected,D,this.latestValues),(this.treeScale.x!==x||this.treeScale.y!==w||!U1(this.projectionDelta.x,this.prevProjectionDelta.x)||!U1(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",D)),Ls&&nr.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(f=!0){var p;if((p=this.options.visualElement)===null||p===void 0||p.scheduleRender(),f){const h=this.getStack();h&&h.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=ra(),this.projectionDelta=ra(),this.projectionDeltaWithTransform=ra()}setAnimationOrigin(f,p=!1){const h=this.snapshot,m=h?h.latestValues:{},v={...this.latestValues},b=ra();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!p;const x=Ke(),w=h?h.source:void 0,D=this.layout?this.layout.source:void 0,j=w!==D,k=this.getStack(),z=!k||k.members.length<=1,N=!!(j&&!z&&this.options.crossfade===!0&&!this.path.some(q8));this.animationProgress=0;let P;this.mixTargetDelta=Y=>{const I=Y/1e3;V1(b.x,f.x,I),V1(b.y,f.y,I),this.setTargetDelta(b),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Vs(x,this.layout.layoutBox,this.relativeParent.layout.layoutBox),G8(this.relativeTarget,this.relativeTargetOrigin,x,I),P&&C8(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=Ke()),Qt(P,this.relativeTarget)),j&&(this.animationValues=v,x8(v,m,this.latestValues,I,N,z)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(f){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Ci(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Le.update(()=>{ac.hasAnimatedSinceResize=!0,this.currentAnimation=m8(0,P1,{...f,onUpdate:p=>{this.mixTargetDelta(p),f.onUpdate&&f.onUpdate(p)},onComplete:()=>{f.onComplete&&f.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const f=this.getStack();f&&f.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(P1),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const f=this.getLead();let{targetWithTransforms:p,target:h,layout:m,latestValues:v}=f;if(!(!p||!h||!m)){if(this!==f&&this.layout&&m&&Ex(this.options.animationType,this.layout.layoutBox,m.layoutBox)){h=this.target||Ke();const b=Pt(this.layout.layoutBox.x);h.x.min=f.target.x.min,h.x.max=h.x.min+b;const x=Pt(this.layout.layoutBox.y);h.y.min=f.target.y.min,h.y.max=h.y.min+x}Qt(p,h),sa(p,v),Bs(this.projectionDeltaWithTransform,this.layoutCorrected,p,v)}}registerSharedNode(f,p){this.sharedNodes.has(f)||this.sharedNodes.set(f,new R8),this.sharedNodes.get(f).add(p);const m=p.options.initialPromotionConfig;p.promote({transition:m?m.transition:void 0,preserveFollowOpacity:m&&m.shouldPreserveFollowOpacity?m.shouldPreserveFollowOpacity(p):void 0})}isLead(){const f=this.getStack();return f?f.lead===this:!0}getLead(){var f;const{layoutId:p}=this.options;return p?((f=this.getStack())===null||f===void 0?void 0:f.lead)||this:this}getPrevLead(){var f;const{layoutId:p}=this.options;return p?(f=this.getStack())===null||f===void 0?void 0:f.prevLead:void 0}getStack(){const{layoutId:f}=this.options;if(f)return this.root.sharedNodes.get(f)}promote({needsReset:f,transition:p,preserveFollowOpacity:h}={}){const m=this.getStack();m&&m.promote(this,h),f&&(this.projectionDelta=void 0,this.needsReset=!0),p&&this.setOptions({transition:p})}relegate(){const f=this.getStack();return f?f.relegate(this):!1}resetSkewAndRotation(){const{visualElement:f}=this.options;if(!f)return;let p=!1;const{latestValues:h}=f;if((h.z||h.rotate||h.rotateX||h.rotateY||h.rotateZ||h.skewX||h.skewY)&&(p=!0),!p)return;const m={};h.z&&kd("z",f,m,this.animationValues);for(let v=0;v<jd.length;v++)kd(`rotate${jd[v]}`,f,m,this.animationValues),kd(`skew${jd[v]}`,f,m,this.animationValues);f.render();for(const v in m)f.setStaticValue(v,m[v]),this.animationValues&&(this.animationValues[v]=m[v]);f.scheduleRender()}getProjectionStyles(f){var p,h;if(!this.instance||this.isSVG)return;if(!this.isVisible)return M8;const m={visibility:""},v=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,m.opacity="",m.pointerEvents=ic(f?.pointerEvents)||"",m.transform=v?v(this.latestValues,""):"none",m;const b=this.getLead();if(!this.projectionDelta||!this.layout||!b.target){const j={};return this.options.layoutId&&(j.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,j.pointerEvents=ic(f?.pointerEvents)||""),this.hasProjected&&!tr(this.latestValues)&&(j.transform=v?v({},""):"none",this.hasProjected=!1),j}const x=b.animationValues||b.latestValues;this.applyTransformsToTarget(),m.transform=D8(this.projectionDeltaWithTransform,this.treeScale,x),v&&(m.transform=v(x,m.transform));const{x:w,y:D}=this.projectionDelta;m.transformOrigin=`${w.origin*100}% ${D.origin*100}% 0`,b.animationValues?m.opacity=b===this?(h=(p=x.opacity)!==null&&p!==void 0?p:this.latestValues.opacity)!==null&&h!==void 0?h:1:this.preserveOpacity?this.latestValues.opacity:x.opacityExit:m.opacity=b===this?x.opacity!==void 0?x.opacity:"":x.opacityExit!==void 0?x.opacityExit:0;for(const j in xc){if(x[j]===void 0)continue;const{correct:k,applyTo:z}=xc[j],N=m.transform==="none"?x[j]:k(x[j],b);if(z){const P=z.length;for(let Y=0;Y<P;Y++)m[z[Y]]=N}else m[j]=N}return this.options.layoutId&&(m.pointerEvents=b===this?ic(f?.pointerEvents)||"":"none"),m}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(f=>{var p;return(p=f.currentAnimation)===null||p===void 0?void 0:p.stop()}),this.root.nodes.forEach(I1),this.root.sharedNodes.clear()}}}function j8(n){n.updateLayout()}function k8(n){var t;const r=((t=n.resumeFrom)===null||t===void 0?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&r&&n.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:l}=n.layout,{animationType:u}=n.options,f=r.source!==n.layout.source;u==="size"?$t(b=>{const x=f?r.measuredBox[b]:r.layoutBox[b],w=Pt(x);x.min=s[b].min,x.max=x.min+w}):Ex(u,r.layoutBox,s)&&$t(b=>{const x=f?r.measuredBox[b]:r.layoutBox[b],w=Pt(s[b]);x.max=x.min+w,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[b].max=n.relativeTarget[b].min+w)});const p=ra();Bs(p,s,r.layoutBox);const h=ra();f?Bs(h,n.applyTransform(l,!0),r.measuredBox):Bs(h,s,r.layoutBox);const m=!xx(p);let v=!1;if(!n.resumeFrom){const b=n.getClosestProjectingParent();if(b&&!b.resumeFrom){const{snapshot:x,layout:w}=b;if(x&&w){const D=Ke();Vs(D,r.layoutBox,x.layoutBox);const j=Ke();Vs(j,s,w.layoutBox),Tx(D,j)||(v=!0),b.options.layoutRoot&&(n.relativeTarget=j,n.relativeTargetOrigin=D,n.relativeParent=b)}}}n.notifyListeners("didUpdate",{layout:s,snapshot:r,delta:h,layoutDelta:p,hasLayoutChanged:m,hasRelativeTargetChanged:v})}else if(n.isLead()){const{onExitComplete:s}=n.options;s&&s()}n.options.transition=void 0}function N8(n){Ls&&nr.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function L8(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function z8(n){n.clearSnapshot()}function I1(n){n.clearMeasurements()}function U8(n){n.isLayoutDirty=!1}function P8(n){const{visualElement:t}=n.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),n.resetTransform()}function B1(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function I8(n){n.resolveTargetDelta()}function B8(n){n.calcProjection()}function V8(n){n.resetSkewAndRotation()}function H8(n){n.removeLeadSnapshot()}function V1(n,t,r){n.translate=Ie(t.translate,0,r),n.scale=Ie(t.scale,1,r),n.origin=t.origin,n.originPoint=t.originPoint}function H1(n,t,r,s){n.min=Ie(t.min,r.min,s),n.max=Ie(t.max,r.max,s)}function G8(n,t,r,s){H1(n.x,t.x,r.x,s),H1(n.y,t.y,r.y,s)}function q8(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Y8={duration:.45,ease:[.4,0,.1,1]},G1=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),q1=G1("applewebkit/")&&!G1("chrome/")?Math.round:Ut;function Y1(n){n.min=q1(n.min),n.max=q1(n.max)}function F8(n){Y1(n.x),Y1(n.y)}function Ex(n,t,r){return n==="position"||n==="preserve-aspect"&&!QD(z1(t),z1(r),.2)}function K8(n){var t;return n!==n.root&&((t=n.scroll)===null||t===void 0?void 0:t.wasRoot)}const X8=_x({attachResizeListener:(n,t)=>to(n,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nd={current:void 0},Ax=_x({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Nd.current){const n=new X8({});n.mount(window),n.setOptions({layoutScroll:!0}),Nd.current=n}return Nd.current},resetTransform:(n,t)=>{n.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),Q8={pan:{Feature:f8},drag:{Feature:u8,ProjectionNode:Ax,MeasureLayout:yx}};function F1(n,t,r){const{props:s}=n;n.animationState&&s.whileHover&&n.animationState.setActive("whileHover",r==="Start");const l="onHover"+r,u=s[l];u&&Le.postRender(()=>u(t,go(t)))}class $8 extends ji{mount(){const{current:t}=this.node;t&&(this.unmount=Q6(t,r=>(F1(this.node,r,"Start"),s=>F1(this.node,s,"End"))))}unmount(){}}class W8 extends ji{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=mo(to(this.node.current,"focus",()=>this.onFocus()),to(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function K1(n,t,r){const{props:s}=n;n.animationState&&s.whileTap&&n.animationState.setActive("whileTap",r==="Start");const l="onTap"+(r==="End"?"":r),u=s[l];u&&Le.postRender(()=>u(t,go(t)))}class Z8 extends ji{mount(){const{current:t}=this.node;t&&(this.unmount=J6(t,r=>(K1(this.node,r,"Start"),(s,{success:l})=>K1(this.node,s,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const Mh=new WeakMap,Ld=new WeakMap,J8=n=>{const t=Mh.get(n.target);t&&t(n)},eM=n=>{n.forEach(J8)};function tM({root:n,...t}){const r=n||document;Ld.has(r)||Ld.set(r,{});const s=Ld.get(r),l=JSON.stringify(t);return s[l]||(s[l]=new IntersectionObserver(eM,{root:n,...t})),s[l]}function nM(n,t,r){const s=tM(t);return Mh.set(n,r),s.observe(n),()=>{Mh.delete(n),s.unobserve(n)}}const iM={some:0,all:1};class rM extends ji{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:r,margin:s,amount:l="some",once:u}=t,f={root:r?r.current:void 0,rootMargin:s,threshold:typeof l=="number"?l:iM[l]},p=h=>{const{isIntersecting:m}=h;if(this.isInView===m||(this.isInView=m,u&&!m&&this.hasEnteredView))return;m&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",m);const{onViewportEnter:v,onViewportLeave:b}=this.node.getProps(),x=m?v:b;x&&x(h)};return nM(this.node.current,f,p)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:r}=this.node;["amount","margin","root"].some(aM(t,r))&&this.startObserver()}unmount(){}}function aM({viewport:n={}},{viewport:t={}}={}){return r=>n[r]!==t[r]}const sM={inView:{Feature:rM},tap:{Feature:Z8},focus:{Feature:W8},hover:{Feature:$8}},oM={layout:{ProjectionNode:Ax,MeasureLayout:yx}},Oh={current:null},Cx={current:!1};function lM(){if(Cx.current=!0,!!ip)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),t=()=>Oh.current=n.matches;n.addListener(t),t()}else Oh.current=!1}const cM=[...Z2,gt,Ri],uM=n=>cM.find(W2(n)),X1=new WeakMap;function fM(n,t,r){for(const s in t){const l=t[s],u=r[s];if(yt(l))n.addValue(s,l);else if(yt(u))n.addValue(s,Js(l,{owner:n}));else if(u!==l)if(n.hasValue(s)){const f=n.getValue(s);f.liveStyle===!0?f.jump(l):f.hasAnimated||f.set(l)}else{const f=n.getStaticValue(s);n.addValue(s,Js(f!==void 0?f:l,{owner:n}))}}for(const s in r)t[s]===void 0&&n.removeValue(s);return t}const Q1=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class dM{scrapeMotionValuesFromProps(t,r,s){return{}}constructor({parent:t,props:r,presenceContext:s,reducedMotionConfig:l,blockInitialAnimation:u,visualState:f},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Mp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=gn.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Le.render(this.render,!1,!0))};const{latestValues:h,renderState:m,onUpdate:v}=f;this.onUpdate=v,this.latestValues=h,this.baseTarget={...h},this.initialValues=r.initial?{...h}:{},this.renderState=m,this.parent=t,this.props=r,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=l,this.options=p,this.blockInitialAnimation=!!u,this.isControllingVariants=Hc(r),this.isVariantNode=s2(r),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:b,...x}=this.scrapeMotionValuesFromProps(r,{},this);for(const w in x){const D=x[w];h[w]!==void 0&&yt(D)&&D.set(h[w],!1)}}mount(t){this.current=t,X1.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),Cx.current||lM(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Oh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){X1.delete(this.current),this.projection&&this.projection.unmount(),Ci(this.notifyUpdate),Ci(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}bindToMotionValue(t,r){this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)();const s=dr.has(t),l=r.on("change",p=>{this.latestValues[t]=p,this.props.onUpdate&&Le.preRender(this.notifyUpdate),s&&this.projection&&(this.projection.isTransformDirty=!0)}),u=r.on("renderRequest",this.scheduleRender);let f;window.MotionCheckAppearSync&&(f=window.MotionCheckAppearSync(this,t,r)),this.valueSubscriptions.set(t,()=>{l(),u(),f&&f(),r.owner&&r.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in Sa){const r=Sa[t];if(!r)continue;const{isEnabled:s,Feature:l}=r;if(!this.features[t]&&l&&s(this.props)&&(this.features[t]=new l(this)),this.features[t]){const u=this.features[t];u.isMounted?u.update():(u.mount(),u.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Ke()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,r){this.latestValues[t]=r}update(t,r){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=r;for(let s=0;s<Q1.length;s++){const l=Q1[s];this.propEventSubscriptions[l]&&(this.propEventSubscriptions[l](),delete this.propEventSubscriptions[l]);const u="on"+l,f=t[u];f&&(this.propEventSubscriptions[l]=this.on(l,f))}this.prevMotionValues=fM(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const r=this.getClosestVariantNode();if(r)return r.variantChildren&&r.variantChildren.add(t),()=>r.variantChildren.delete(t)}addValue(t,r){const s=this.values.get(t);r!==s&&(s&&this.removeValue(t),this.bindToMotionValue(t,r),this.values.set(t,r),this.latestValues[t]=r.get())}removeValue(t){this.values.delete(t);const r=this.valueSubscriptions.get(t);r&&(r(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,r){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&r!==void 0&&(s=Js(r===null?void 0:r,{owner:this}),this.addValue(t,s)),s}readValue(t,r){var s;let l=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(s=this.getBaseTargetFromProps(this.props,t))!==null&&s!==void 0?s:this.readValueFromInstance(this.current,t,this.options);return l!=null&&(typeof l=="string"&&(Q2(l)||B2(l))?l=parseFloat(l):!uM(l)&&Ri.test(r)&&(l=F2(t,r)),this.setBaseTarget(t,yt(l)?l.get():l)),yt(l)?l.get():l}setBaseTarget(t,r){this.baseTarget[t]=r}getBaseTarget(t){var r;const{initial:s}=this.props;let l;if(typeof s=="string"||typeof s=="object"){const f=up(this.props,s,(r=this.presenceContext)===null||r===void 0?void 0:r.custom);f&&(l=f[t])}if(s&&l!==void 0)return l;const u=this.getBaseTargetFromProps(this.props,t);return u!==void 0&&!yt(u)?u:this.initialValues[t]!==void 0&&l===void 0?void 0:this.baseTarget[t]}on(t,r){return this.events[t]||(this.events[t]=new _p),this.events[t].add(r)}notify(t,...r){this.events[t]&&this.events[t].notify(...r)}}class Rx extends dM{constructor(){super(...arguments),this.KeyframeResolver=J2}sortInstanceNodePosition(t,r){return t.compareDocumentPosition(r)&2?1:-1}getBaseTargetFromProps(t,r){return t.style?t.style[r]:void 0}removeValueFromRenderState(t,{vars:r,style:s}){delete r[t],delete s[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;yt(t)&&(this.childSubscription=t.on("change",r=>{this.current&&(this.current.textContent=`${r}`)}))}}function hM(n){return window.getComputedStyle(n)}class pM extends Rx{constructor(){super(...arguments),this.type="html",this.renderInstance=m2}readValueFromInstance(t,r){if(dr.has(r)){const s=Dp(r);return s&&s.default||0}else{const s=hM(t),l=(d2(r)?s.getPropertyValue(r):s[r])||0;return typeof l=="string"?l.trim():l}}measureInstanceViewportBox(t,{transformPagePoint:r}){return gx(t,r)}build(t,r,s){hp(t,r,s.transformTemplate)}scrapeMotionValuesFromProps(t,r,s){return vp(t,r,s)}}class mM extends Rx{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Ke}getBaseTargetFromProps(t,r){return t[r]}readValueFromInstance(t,r){if(dr.has(r)){const s=Dp(r);return s&&s.default||0}return r=g2.has(r)?r:op(r),t.getAttribute(r)}scrapeMotionValuesFromProps(t,r,s){return b2(t,r,s)}build(t,r,s){pp(t,r,this.isSVGTag,s.transformTemplate)}renderInstance(t,r,s,l){v2(t,r,s,l)}mount(t){this.isSVGTag=gp(t.tagName),super.mount(t)}}const gM=(n,t)=>cp(n)?new mM(t):new pM(t,{allowProjection:n!==A.Fragment}),vM=H6({...BD,...sM,...Q8,...oM},gM),xe=i6(vM),yM=C.section`
  height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ),
  url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
`,bM=C.div`
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
`,SM=C(xe.h1)`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,xM=C(xe.p)`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`,TM=C(xe.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #fff;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,wM=C(xe.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
`,$1=C.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
  
  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
`,_M=C.section`
  padding: 4rem 0;
  background-color: #000;
`,EM=C.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`,AM=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
`,Il=C(xe.div)`
  text-align: center;
  padding: 2rem;
  background-color: #111;
  border-radius: 8px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,Bl=C.div`
  font-size: 3rem;
  color: #e50914;
  margin-bottom: 1rem;
`,Vl=C.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
`,Hl=C.p`
  color: #b3b3b3;
  line-height: 1.6;
`,CM=C(xt)`
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 2rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
`,RM=C.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #fff;
`,DM=C.p`
  text-align: center;
  font-size: 1.2rem;
  color: #b3b3b3;
  max-width: 600px;
  margin: 0 auto;
`;function MM(){return y.jsxs(y.Fragment,{children:[y.jsx(yM,{children:y.jsxs(bM,{children:[y.jsx(SM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:"Unlimited movies, TV shows, and more"}),y.jsx(xM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"Watch anywhere. Cancel anytime."}),y.jsx(TM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:"Ready to watch? Enter your email to create or restart your membership."}),y.jsxs(wM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[y.jsxs($1,{className:"play",children:[y.jsx(fa,{})," Play"]}),y.jsxs($1,{className:"info",children:[y.jsx(Qs,{})," More Info"]})]})]})}),y.jsx(_M,{children:y.jsxs(EM,{children:[y.jsx(RM,{children:"Why Choose Netflix?"}),y.jsx(DM,{children:"Discover why millions of people choose Netflix for their entertainment needs"}),y.jsxs(AM,{children:[y.jsxs(Il,{whileHover:{scale:1.05},transition:{duration:.3},children:[y.jsx(Bl,{children:"🎬"}),y.jsx(Vl,{children:"Unlimited Entertainment"}),y.jsx(Hl,{children:"Stream thousands of movies and TV shows, including Netflix originals, award-winning films, and popular series."})]}),y.jsxs(Il,{whileHover:{scale:1.05},transition:{duration:.3},children:[y.jsx(Bl,{children:"📱"}),y.jsx(Vl,{children:"Watch Anywhere"}),y.jsx(Hl,{children:"Watch on your TV, computer, tablet, or phone. Download shows to watch offline on the go."})]}),y.jsxs(Il,{whileHover:{scale:1.05},transition:{duration:.3},children:[y.jsx(Bl,{children:"👥"}),y.jsx(Vl,{children:"Multiple Profiles"}),y.jsx(Hl,{children:"Create up to 5 profiles for different family members. Each profile gets personalized recommendations."})]}),y.jsxs(Il,{whileHover:{scale:1.05},transition:{duration:.3},children:[y.jsx(Bl,{children:"🚫"}),y.jsx(Vl,{children:"Cancel Anytime"}),y.jsx(Hl,{children:"No commitments, no contracts. Cancel your subscription anytime with just a few clicks."})]})]}),y.jsx("div",{style:{textAlign:"center",marginTop:"3rem"},children:y.jsx(CM,{to:"/signup",children:"Get Started"})})]})})]})}const Np=C(xe.div)`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  background-color: #2f2f2f;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
    z-index: 10;
  }
`,OM=C.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  
  @media (max-width: 768px) {
    height: 225px;
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
`,jM=C.div`
  width: 100%;
  height: 300px;
  background: linear-gradient(45deg, #2f2f2f, #404040);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #b3b3b3;
  font-size: 3rem;
  
  @media (max-width: 768px) {
    height: 225px;
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    height: 180px;
    font-size: 1.5rem;
  }
`,kM=C(xe.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${Np}:hover & {
    opacity: 1;
  }
`,NM=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,W1=C.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
`,LM=C.div`
  color: #fff;
`,zM=C.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  line-height: 1.2;
`,UM=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #b3b3b3;
  margin-bottom: 0.5rem;
`,PM=C.span`
  color: #46d369;
  font-weight: 600;
`;C.span`
  color: #b3b3b3;
`;const IM=C.span`
  color: #b3b3b3;
`,BM=C.div`
  display: flex;
  gap: 0.5rem;
`,Z1=C.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.8);
    }
  }
  
  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
`,VM=C.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #fff;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0;
  
  ${Np}:hover & {
    opacity: 1;
  }
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
  &.added {
    background-color: #46d369;
    border-color: #46d369;
  }
`;function HM({movie:n,isSearchResult:t=!1}){const{playTrailer:r,searchTrailer:s}=uo(),[l,u]=A.useState(!1),[f,p]=A.useState(!1),[h,m]=A.useState(null),[v,b]=A.useState(!1),x=n.poster_path||null;A.useEffect(()=>{const N=()=>{b(window.innerWidth<=768)};return N(),window.addEventListener("resize",N),()=>window.removeEventListener("resize",N)},[]),A.useEffect(()=>{v&&!h&&(async()=>{const N=await s(n.title,n.year);m(N?N.url:null)})()},[v,n.title,n.year]);const w=N=>{N.stopPropagation(),u(!l)},D=async N=>{if(N.stopPropagation(),!f){p(!0);try{await r(n)}catch(P){console.error("Error loading trailer:",P)}finally{p(!1)}}},j=N=>{N.preventDefault(),N.stopPropagation(),h&&window.open(h,"_blank","noopener,noreferrer")},k=N=>{const P=Math.floor(N/60),Y=N%60;return P>0?`${P}h ${Y}m`:`${Y}m`},z=N=>N>=8?"#46d369":N>=6?"#f5c518":"#e50914";return y.jsxs(Np,{whileHover:{scale:1.05},transition:{duration:.3},children:[y.jsxs(xt,{to:`/movie/${n.id}`,style:{position:"relative",display:"block"},children:[x?y.jsx(OM,{src:x,alt:n.title,style:{filter:v&&h?"brightness(0.7)":void 0}}):y.jsx(jM,{children:y.jsxs("div",{style:{textAlign:"center",padding:"1rem"},children:[y.jsx("div",{style:{fontSize:"2rem",marginBottom:"0.5rem"},children:"🎬"}),y.jsx("div",{style:{fontSize:"0.9rem",color:"#b3b3b3"},children:n.title})]})}),v&&h&&y.jsx("div",{onClick:j,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",zIndex:2,cursor:"pointer",background:"rgba(0,0,0,0.15)"},children:y.jsx(fa,{style:{fontSize:"2.5rem",color:"#fff",background:"rgba(0,0,0,0.5)",borderRadius:"50%",padding:"0.7rem",boxShadow:"0 2px 8px rgba(0,0,0,0.2)"}})})]}),y.jsx(VM,{onClick:w,className:l?"added":"",title:l?"Remove from list":"Add to list",style:v?{opacity:1,zIndex:3}:{},children:l?y.jsx(bC,{}):y.jsx(ZS,{})}),!v&&y.jsxs(kM,{initial:{opacity:0},whileHover:{opacity:1},transition:{duration:.3},children:[y.jsxs(NM,{children:[y.jsx(W1,{className:"play",title:"Play Trailer",onClick:D,disabled:f,children:y.jsx(fa,{})}),y.jsx(W1,{title:"More info",children:y.jsx(Qs,{})})]}),y.jsxs(LM,{children:[y.jsx(zM,{children:n.title}),y.jsxs(UM,{children:[y.jsxs(PM,{style:{color:z(n.vote_average)},children:[n.vote_average.toFixed(1)," ★"]}),n.release_date&&y.jsx("span",{children:new Date(n.release_date).getFullYear()}),n.runtime&&y.jsx(IM,{children:k(n.runtime)})]}),n.overview&&y.jsx("p",{style:{fontSize:"0.8rem",lineHeight:"1.3",color:"#b3b3b3"},children:n.overview.length>100?`${n.overview.substring(0,100)}...`:n.overview})]}),y.jsxs(BM,{children:[y.jsxs(Z1,{className:"play",onClick:D,disabled:f,children:[y.jsx(fa,{})," ",f?"Loading...":"Play"]}),y.jsxs(Z1,{className:"info",onClick:D,disabled:f,children:[y.jsx(Qs,{})," ",f?"Loading...":"Trailer"]})]})]})]})}const J1=C.div`
  margin-bottom: 3rem;
  position: relative;
`,GM=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`,eb=C.h3`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
`,qM=C.div`
  display: flex;
  gap: 0.5rem;
`,tb=C.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: ${n=>n.disabled?.3:1};
  
  &:hover:not(:disabled) {
    background-color: #fff;
    color: #000;
  }
  
  &:disabled {
    cursor: not-allowed;
  }
`,YM=C.div`
  position: relative;
  overflow: hidden;
`,FM=C(xe.div)`
  display: flex;
  gap: 0.5rem;
  transition: transform 0.3s ease;
  padding: 0.5rem 0;
`,KM=C(xe.div)`
  flex-shrink: 0;
  width: 200px;
  
  @media (max-width: 768px) {
    width: 150px;
  }
  
  @media (max-width: 480px) {
    width: 120px;
  }
`,XM=C.div`
  text-align: center;
  padding: 2rem;
  color: #b3b3b3;
`;function Ds({title:n,movies:t,isSearchResults:r=!1}){const[s,l]=A.useState(0),[u,f]=A.useState(!1),p=A.useRef(null),h=Math.floor((window.innerWidth-80)/220),m=Math.max(0,t.length-h),v=()=>{l(w=>Math.max(0,w-1))},b=()=>{l(w=>Math.min(m,w+1))},x=w=>{w.deltaY>0?b():v()};return!t||t.length===0?y.jsxs(J1,{children:[y.jsx(eb,{children:n}),y.jsx(XM,{children:"No movies available in this category."})]}):y.jsxs(J1,{onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),onWheel:x,children:[y.jsxs(GM,{children:[y.jsx(eb,{children:n}),t.length>h&&y.jsxs(qM,{children:[y.jsx(tb,{onClick:v,disabled:s===0,"aria-label":"Scroll left",children:y.jsx(SC,{})}),y.jsx(tb,{onClick:b,disabled:s>=m,"aria-label":"Scroll right",children:y.jsx(xC,{})})]})]}),y.jsx(YM,{children:y.jsx(FM,{ref:p,style:{transform:`translateX(-${s*220}px)`},initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:t.map((w,D)=>y.jsx(KM,{initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3,delay:D*.1},whileHover:{scale:1.05},children:y.jsx(HM,{movie:w,isSearchResult:r})},w.id))})})]})}const QM=C.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1) 0%,
    rgba(0, 0, 0, 0.8) 100%
  );
  display: flex;
  align-items: center;
  padding: 0 4%;
  
  @media (max-width: 768px) {
    height: 60vh;
    min-height: 400px;
  }
`,$M=C.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${n=>n.$imageUrl?`url(${n.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  z-index: -1;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`,WM=C.div`
  max-width: 600px;
  z-index: 2;
`,ZM=C(xe.h1)`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #fff;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`,JM=C(xe.p)`
  font-size: 1.1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: #e5e5e5;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,eO=C(xe.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  color: #b3b3b3;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;C.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;const tO=C.span`
  color: #46d369;
  font-weight: 600;
`,nO=C.span`
  color: #b3b3b3;
`,iO=C.span`
  color: #b3b3b3;
`,rO=C.span`
  color: #b3b3b3;
`,aO=C(xe.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,nb=C.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
  
  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`,sO=C.button`
  position: absolute;
  top: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.7);
  border: 1px solid #fff;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 3;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
  
  @media (max-width: 768px) {
    top: 1rem;
    right: 1rem;
    width: 35px;
    height: 35px;
  }
`,oO=C.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 3;
  
  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    font-size: 0.7rem;
  }
`;function lO({movie:n}){const[t,r]=A.useState(!1),[s,l]=A.useState(!1),{playTrailer:u}=uo();if(!n)return null;const f=n.backdrop_path||null,p=b=>{if(!b)return"";const x=Math.floor(b/60),w=b%60;return x>0?`${x}h ${w}m`:`${w}m`},h=b=>b>=8?"#46d369":b>=6?"#f5c518":"#e50914",m=()=>"TV-MA",v=async()=>{if(!s&&n){l(!0);try{await u(n)}catch(b){console.error("Error loading trailer:",b)}finally{l(!1)}}};return y.jsxs(QM,{children:[y.jsx($M,{$imageUrl:f}),y.jsx(oO,{children:m()}),y.jsx(sO,{onClick:()=>r(!t),children:t?y.jsx(RC,{}):y.jsx(DC,{})}),y.jsxs(WM,{children:[y.jsx(ZM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:n.title}),y.jsxs(eO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[y.jsxs(tO,{style:{color:h(n.vote_average)},children:[n.vote_average.toFixed(1)," ★"]}),n.release_date&&y.jsx(nO,{children:new Date(n.release_date).getFullYear()}),n.runtime&&y.jsx(iO,{children:p(n.runtime)}),n.genre_ids&&y.jsx(rO,{children:"Action"})]}),y.jsx(JM,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:n.overview&&n.overview.length>200?`${n.overview.substring(0,200)}...`:n.overview}),y.jsxs(aO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[y.jsxs(nb,{className:"play",onClick:v,disabled:s,children:[y.jsx(fa,{})," ",s?"Loading...":"Play"]}),y.jsx(xt,{to:`/movie/${n.id}`,children:y.jsxs(nb,{className:"info",children:[y.jsx(Qs,{})," More Info"]})})]})]})]})}const zd=C.div`
  min-height: 100vh;
  background-color: #000;
  padding-top: 70px;
`,ib=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 1.2rem;
`,cO=C.div`
  margin-top: -100px;
  position: relative;
  z-index: 2;
`,uO=C.div`
  padding: 0 4%;
`,Gl=C.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`,rb=C.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #b3b3b3;
`,ab=C.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`,sb=C.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`,fO=C.button`
  background-color: #e50914;
  color: #fff;
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
`,dO=C.div`
  padding: 2rem 4%;
`,hO=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`,pO=C.h2`
  color: #fff;
  font-size: 1.8rem;
`,mO=C.button`
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #fff;
    color: #000;
  }
`;function gO(){const{trending:n,topRated:t,popular:r,upcoming:s,loading:l,searchMovies:u}=uo(),[f,p]=A.useState(""),[h,m]=A.useState([]),[v,b]=A.useState(!1),x=async D=>{if(!D.trim()){m([]),b(!1);return}b(!0);try{const j=await u(D);m(j)}catch(j){console.error("Search error:",j),m([])}finally{b(!1)}};return A.useEffect(()=>{const D=setTimeout(()=>{x(f)},500);return()=>clearTimeout(D)},[f]),l?y.jsx(zd,{children:y.jsxs(ib,{children:[y.jsx(xe.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},style:{marginRight:"1rem"},children:"⏳"}),"Loading amazing content..."]})}):n.length>0||t.length>0||r.length>0||s.length>0?y.jsx(zd,{children:f?y.jsxs(dO,{children:[y.jsxs(hO,{children:[y.jsxs(pO,{children:['Search Results for "',f,'"']}),y.jsx(mO,{onClick:()=>p(""),children:"Clear Search"})]}),v?y.jsxs(ib,{children:[y.jsx(xe.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},style:{marginRight:"1rem"},children:"🔍"}),"Searching..."]}):h.length>0?y.jsx(Ds,{title:"Search Results",movies:h,isSearchResults:!0}):y.jsxs(rb,{children:[y.jsx(ab,{children:"No Results Found"}),y.jsxs(sb,{children:[`We couldn't find any movies matching "`,f,'". Try a different search term.']})]})]}):y.jsxs(y.Fragment,{children:[n.length>0&&y.jsx(lO,{movie:n[0]}),y.jsx(cO,{children:y.jsxs(uO,{children:[n.length>0&&y.jsxs(xe.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6},children:[y.jsx(Gl,{children:"Trending Now"}),y.jsx(Ds,{title:"Trending Now",movies:n})]}),r.length>0&&y.jsxs(xe.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.1},children:[y.jsx(Gl,{children:"Popular on Netflix"}),y.jsx(Ds,{title:"Popular on Netflix",movies:r})]}),t.length>0&&y.jsxs(xe.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.2},children:[y.jsx(Gl,{children:"Top Rated"}),y.jsx(Ds,{title:"Top Rated",movies:t})]}),s.length>0&&y.jsxs(xe.div,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.6,delay:.3},children:[y.jsx(Gl,{children:"Coming Soon"}),y.jsx(Ds,{title:"Coming Soon",movies:s})]})]})})]})}):y.jsx(zd,{children:y.jsxs(rb,{children:[y.jsx(ab,{children:"No Content Available"}),y.jsx(sb,{children:"We're having trouble loading your content. Please check your internet connection and try again."}),y.jsx(fO,{onClick:()=>window.location.reload(),children:"Try Again"})]})})}const vO=()=>{const n=Ta();A.useEffect(()=>{const r=(s=>{switch(s){case"/":return"Netflix Clone - Watch Movies & TV Shows";case"/browse":return"Browse - Netflix Clone";case"/login":return"Sign In - Netflix Clone";case"/signup":return"Sign Up - Netflix Clone";case"/profile":return"Profile - Netflix Clone";default:return s.startsWith("/movie/")?null:"Netflix Clone"}})(n.pathname);r&&(document.title=r)},[n.pathname])},yO=n=>{A.useEffect(()=>{n&&(document.title=n)},[n])},Ud=C.div`
  min-height: 100vh;
  background-color: #000;
  padding-top: 70px;
`,bO=C.div`
  position: relative;
  height: 80vh;
  min-height: 500px;
  display: flex;
  align-items: center;
  padding: 0 4%;
  
  @media (max-width: 768px) {
    height: 60vh;
    min-height: 400px;
  }
`,SO=C.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${n=>n.$imageUrl?`url(${n.$imageUrl})`:"none"};
  background-size: cover;
  background-position: center;
  z-index: -2;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`,xO=C.div`
  max-width: 800px;
  z-index: 2;
`,TO=C(xe.h1)`
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 1rem;
  color: #fff;
  line-height: 1.1;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`,wO=C(xe.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #b3b3b3;
  flex-wrap: wrap;
`,_O=C.span`
  color: #46d369;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,EO=C.span`
  color: #b3b3b3;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,AO=C.span`
  color: #b3b3b3;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`,CO=C.span`
  background-color: rgba(51, 51, 51, 0.9);
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: 2px;
  font-size: 0.8rem;
  font-weight: 600;
`,RO=C(xe.p)`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #e5e5e5;
  max-width: 600px;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,DO=C(xe.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`,Pd=C.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  &.play {
    background-color: #fff;
    color: #000;
    
    &:hover {
      background-color: rgba(255, 255, 255, 0.75);
    }
  }
  
  &.info {
    background-color: rgba(109, 109, 110, 0.7);
    color: #fff;
    
    &:hover {
      background-color: rgba(109, 109, 110, 0.4);
    }
  }
  
  &.add {
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    border: 1px solid #fff;
    
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
  }
`,MO=C.div`
  padding: 3rem 4%;
  max-width: 1200px;
  margin: 0 auto;
`,OO=C.h2`
  color: #fff;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
`,jO=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
  margin-bottom: 3rem;
`,kO=C(xe.div)`
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`,NO=C.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,LO=C.div`
  padding: 1rem;
`,zO=C.h4`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`,UO=C.p`
  color: #b3b3b3;
  font-size: 0.9rem;
`;C.div`
  margin-bottom: 3rem;
`;C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
`;C(xe.div)`
  background-color: #111;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;C.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;C.div`
  padding: 1rem;
`;C.h4`
  color: #fff;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.8rem;
  color: #b3b3b3;
`;const PO=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  color: #fff;
  font-size: 1.2rem;
`,IO=C.div`
  text-align: center;
  padding: 4rem 2rem;
  color: #b3b3b3;
`,BO=C.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #fff;
`,VO=C.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
`,HO=C(xt)`
  display: inline-block;
  background-color: #e50914;
  color: #fff;
  padding: 0.8rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
`;function GO(){const{id:n}=P_(),{fetchMovieDetails:t,playTrailer:r}=uo(),[s,l]=A.useState(null),[u,f]=A.useState(!0),[p,h]=A.useState(null),[m,v]=A.useState(!1),[b,x]=A.useState("Loading... - Netflix Clone");if(yO(b),A.useEffect(()=>{n&&(async()=>{try{f(!0),h(null);const N=await t(n);N?(l(N),x(`${N.title} (${N.year}) - Netflix Clone`)):(h("Movie not found"),x("Movie Not Found - Netflix Clone"))}catch(N){console.error("Error loading movie:",N),h("Failed to load movie details"),x("Error - Netflix Clone")}finally{f(!1)}})()},[n,t]),u)return y.jsx(Ud,{children:y.jsxs(PO,{children:[y.jsx(xe.div,{animate:{rotate:360},transition:{duration:1,repeat:1/0,ease:"linear"},style:{marginRight:"1rem"},children:"⏳"}),"Loading movie details..."]})});if(p||!s)return y.jsx(Ud,{children:y.jsxs(IO,{children:[y.jsx(BO,{children:"Oops!"}),y.jsx(VO,{children:p||"We couldn't find the movie you're looking for."}),y.jsx(HO,{to:"/browse",children:"Back to Browse"})]})});const w=s.backdrop_path||null,D=z=>{if(!z)return"";const N=Math.floor(z/60),P=z%60;return N>0?`${N}h ${P}m`:`${P}m`},j=z=>z>=8?"#46d369":z>=6?"#f5c518":"#e50914",k=async()=>{if(!m&&s){v(!0);try{await r(s)}catch(z){console.error("Error loading trailer:",z)}finally{v(!1)}}};return y.jsxs(Ud,{children:[y.jsxs(bO,{children:[y.jsx(SO,{$imageUrl:w}),y.jsxs(xO,{children:[y.jsx(TO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:s.title}),y.jsxs(wO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:[y.jsxs(_O,{style:{color:j(s.vote_average)},children:[y.jsx(CC,{})," ",s.vote_average.toFixed(1)]}),s.release_date&&y.jsxs(EO,{children:[y.jsx(yC,{})," ",new Date(s.release_date).getFullYear()]}),s.runtime&&y.jsxs(AO,{children:[y.jsx(TC,{})," ",D(s.runtime)]}),y.jsx(CO,{children:"TV-MA"})]}),y.jsx(RO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:s.overview}),y.jsxs(DO,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:[y.jsxs(Pd,{className:"play",onClick:k,disabled:m,children:[y.jsx(fa,{})," ",m?"Loading...":"Play"]}),y.jsxs(Pd,{className:"info",onClick:k,disabled:m,children:[y.jsx(Qs,{})," ",m?"Loading...":"Watch Trailer"]}),y.jsxs(Pd,{className:"add",children:[y.jsx(ZS,{})," My List"]})]})]})]}),y.jsx(MO,{children:s.cast&&s.cast.length>0&&y.jsxs("div",{children:[y.jsx(OO,{children:"Cast"}),y.jsx(jO,{children:s.cast.slice(0,8).map((z,N)=>y.jsxs(kO,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5,delay:N*.1},children:[y.jsx(NO,{src:"https://via.placeholder.com/200x300/333/666?text=No+Image",alt:z.person?.name||"Unknown"}),y.jsxs(LO,{children:[y.jsx(zO,{children:z.person?.name||"Unknown"}),y.jsx(UO,{children:z.character||"Unknown"})]})]},N))})]})})]})}const qO=C.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ),
  url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,YO=C(xe.div)`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
`,FO=C(xt)`
  display: block;
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  text-decoration: none;
`,KO=C.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,XO=C.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ob=C.div`
  position: relative;
`,lb=C.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;
  
  &::placeholder {
    color: #8c8c8c;
  }
  
  &:focus {
    outline: none;
    background-color: #454545;
  }
  
  &.error {
    border-bottom: 2px solid #e87c03;
  }
`,cb=C.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8c8c8c;
  z-index: 1;
`,QO=C.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8c8c8c;
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    color: #fff;
  }
`,$O=C.div`
  color: #e87c03;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,WO=C.button`
  background-color: #e50914;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`,ZO=C.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #8c8c8c;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #333;
  }
  
  span {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`;C.button`
  width: 100%;
  padding: 1rem;
  background-color: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #333;
  }
`;const JO=C.div`
  text-align: center;
  margin-top: 2rem;
  color: #8c8c8c;
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,e9=C(xt)`
  display: block;
  text-align: center;
  color: #8c8c8c;
  text-decoration: none;
  font-size: 0.9rem;
  margin-top: 1rem;
  
  &:hover {
    text-decoration: underline;
  }
`,t9=C.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;function n9(){const[n,t]=A.useState(""),[r,s]=A.useState(""),[l,u]=A.useState(!1),[f,p]=A.useState(""),[h,m]=A.useState(!1),{login:v}=jc(),b=Rc(),x=async w=>{if(w.preventDefault(),!n||!r){p("Please fill in all fields");return}try{p(""),m(!0),await v(n,r),b("/browse")}catch(D){console.error("Login error:",D),p("Failed to log in. Please check your credentials.")}finally{m(!1)}};return y.jsx(qO,{children:y.jsxs(YO,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:[y.jsx(FO,{to:"/",children:"NETFLIX"}),y.jsx(KO,{children:"Sign In"}),y.jsxs(XO,{onSubmit:x,children:[y.jsxs(ob,{children:[y.jsx(cb,{children:y.jsx(Jh,{})}),y.jsx(lb,{type:"email",placeholder:"Email or phone number",value:n,onChange:w=>t(w.target.value),className:f&&!n?"error":"",required:!0})]}),y.jsxs(ob,{children:[y.jsx(cb,{children:y.jsx(mh,{})}),y.jsx(lb,{type:l?"text":"password",placeholder:"Password",value:r,onChange:w=>s(w.target.value),className:f&&!r?"error":"",required:!0}),y.jsx(QO,{type:"button",onClick:()=>u(!l),children:l?y.jsx(hh,{}):y.jsx(ph,{})})]}),f&&y.jsx($O,{children:f}),y.jsx(WO,{type:"submit",disabled:h,children:h?y.jsxs(y.Fragment,{children:[y.jsx(t9,{})," Signing In..."]}):"Sign In"})]}),y.jsx(e9,{to:"/forgot-password",children:"Need help?"}),y.jsx(ZO,{children:y.jsx("span",{children:"New to Netflix?"})}),y.jsx(JO,{children:y.jsx(xt,{to:"/signup",children:"Sign up now"})}),y.jsx("div",{style:{marginTop:"1rem",fontSize:"0.8rem",color:"#8c8c8c"},children:"This page is protected by Google reCAPTCHA to ensure you're not a bot."})]})})}const i9=C.div`
  min-height: 100vh;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    rgba(0, 0, 0, 0.8) 100%
  ),
  url('https://assets.nflxext.com/ffe/siteui/vlv3/9c5457b8-9ab0-4a04-9fc1-e608d5670f1a/710d74e0-7158-408e-8d9b-23c219dee5df/IN-en-20210719-popsignuptwoweeks-perspective_alpha_website_small.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`,r9=C(xe.div)`
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 4px;
  padding: 3rem;
  width: 100%;
  max-width: 450px;
  box-sizing: border-box;
`,a9=C(xt)`
  display: block;
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
  text-decoration: none;
`,s9=C.h1`
  color: #fff;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
`,o9=C.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`,ql=C.div`
  position: relative;
`,Yl=C.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background-color: #333;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  box-sizing: border-box;
  
  &::placeholder {
    color: #8c8c8c;
  }
  
  &:focus {
    outline: none;
    background-color: #454545;
  }
  
  &.error {
    border-bottom: 2px solid #e87c03;
  }
`,Fl=C.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #8c8c8c;
  z-index: 1;
`,ub=C.button`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #8c8c8c;
  cursor: pointer;
  z-index: 1;
  
  &:hover {
    color: #fff;
  }
`,l9=C.div`
  color: #e87c03;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,c9=C.div`
  color: #46d369;
  font-size: 0.9rem;
  margin-top: 0.5rem;
`,u9=C.button`
  background-color: #e50914;
  color: #fff;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 1rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f40612;
  }
  
  &:disabled {
    background-color: #666;
    cursor: not-allowed;
  }
`,f9=C.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #8c8c8c;
  
  &::before,
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: #333;
  }
  
  span {
    padding: 0 1rem;
    font-size: 0.9rem;
  }
`,d9=C.div`
  text-align: center;
  margin-top: 2rem;
  color: #8c8c8c;
  
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    
    &:hover {
      text-decoration: underline;
    }
  }
`,h9=C.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`,p9=C.div`
  margin-top: 0.5rem;
  font-size: 0.8rem;
`,m9=C.div`
  height: 4px;
  background-color: #333;
  border-radius: 2px;
  margin-top: 0.25rem;
  overflow: hidden;
`,g9=C.div`
  height: 100%;
  background-color: ${n=>n.strength==="weak"?"#e50914":n.strength==="medium"?"#f5c518":n.strength==="strong"?"#46d369":"#333"};
  width: ${n=>n.strength==="weak"?"33%":n.strength==="medium"?"66%":n.strength==="strong"?"100%":"0%"};
  transition: all 0.3s ease;
`;function v9(){const[n,t]=A.useState({name:"",email:"",password:"",confirmPassword:""}),[r,s]=A.useState(!1),[l,u]=A.useState(!1),[f,p]=A.useState(""),[h,m]=A.useState(""),[v,b]=A.useState(!1),{signup:x,updateUserProfile:w}=jc(),D=Rc(),j=Y=>Y?Y.length<6?"weak":Y.length<10?"medium":"strong":"none",k=()=>!n.name||!n.email||!n.password||!n.confirmPassword?(p("Please fill in all fields"),!1):n.password!==n.confirmPassword?(p("Passwords do not match"),!1):n.password.length<6?(p("Password must be at least 6 characters long"),!1):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n.email)?!0:(p("Please enter a valid email address"),!1),z=async Y=>{if(Y.preventDefault(),!!k())try{p(""),m(""),b(!0),await x(n.email,n.password),await w(n.name),m("Account created successfully! Redirecting..."),setTimeout(()=>{D("/browse")},2e3)}catch(I){console.error("Signup error:",I),I.code==="auth/email-already-in-use"?p("An account with this email already exists"):I.code==="auth/weak-password"?p("Password is too weak"):p("Failed to create account. Please try again.")}finally{b(!1)}},N=Y=>{const{name:I,value:K}=Y.target;t(X=>({...X,[I]:K})),p("")},P=j(n.password);return y.jsx(i9,{children:y.jsxs(r9,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:[y.jsx(a9,{to:"/",children:"NETFLIX"}),y.jsx(s9,{children:"Sign Up"}),y.jsxs(o9,{onSubmit:z,children:[y.jsxs(ql,{children:[y.jsx(Fl,{children:y.jsx($s,{})}),y.jsx(Yl,{type:"text",name:"name",placeholder:"Full name",value:n.name,onChange:N,className:f&&!n.name?"error":"",required:!0})]}),y.jsxs(ql,{children:[y.jsx(Fl,{children:y.jsx(Jh,{})}),y.jsx(Yl,{type:"email",name:"email",placeholder:"Email address",value:n.email,onChange:N,className:f&&!n.email?"error":"",required:!0})]}),y.jsxs(ql,{children:[y.jsx(Fl,{children:y.jsx(mh,{})}),y.jsx(Yl,{type:r?"text":"password",name:"password",placeholder:"Password",value:n.password,onChange:N,className:f&&!n.password?"error":"",required:!0}),y.jsx(ub,{type:"button",onClick:()=>s(!r),children:r?y.jsx(hh,{}):y.jsx(ph,{})})]}),n.password&&y.jsxs(p9,{children:[y.jsxs("div",{style:{color:"#8c8c8c"},children:["Password strength: ",P]}),y.jsx(m9,{children:y.jsx(g9,{strength:P})})]}),y.jsxs(ql,{children:[y.jsx(Fl,{children:y.jsx(mh,{})}),y.jsx(Yl,{type:l?"text":"password",name:"confirmPassword",placeholder:"Confirm password",value:n.confirmPassword,onChange:N,className:f&&!n.confirmPassword?"error":"",required:!0}),y.jsx(ub,{type:"button",onClick:()=>u(!l),children:l?y.jsx(hh,{}):y.jsx(ph,{})})]}),f&&y.jsx(l9,{children:f}),h&&y.jsx(c9,{children:h}),y.jsx(u9,{type:"submit",disabled:v,children:v?y.jsxs(y.Fragment,{children:[y.jsx(h9,{})," Creating Account..."]}):"Sign Up"})]}),y.jsx(f9,{children:y.jsx("span",{children:"Already have an account?"})}),y.jsx(d9,{children:y.jsx(xt,{to:"/login",children:"Sign in now"})}),y.jsx("div",{style:{marginTop:"1rem",fontSize:"0.8rem",color:"#8c8c8c"},children:"By signing up, you agree to our Terms of Service and Privacy Policy."})]})})}const fb=C.div`
  min-height: 100vh;
  background-color: #000;
  padding-top: 70px;
  padding-bottom: 2rem;
`,db=C(xe.div)`
  max-width: 800px;
  margin: 2rem auto;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 8px;
  padding: 3rem;
  
  @media (max-width: 768px) {
    margin: 1rem;
    padding: 2rem;
  }
`,hb=C.div`
  text-align: center;
  margin-bottom: 3rem;
`,pb=C.h1`
  color: #fff;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 600;
`,mb=C.p`
  color: #b3b3b3;
  font-size: 1.1rem;
`,y9=C.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #e50914;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  margin: 0 auto 2rem;
  border: 4px solid #333;
`,gb=C.div`
  margin-bottom: 2rem;
`,Id=C.h2`
  color: #fff;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,b9=C.div`
  display: grid;
  gap: 1.5rem;
`,Bd=C.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #111;
  border-radius: 4px;
  border: 1px solid #333;
`,Vd=C.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #b3b3b3;
  font-size: 0.9rem;
  font-weight: 600;
`,Hd=C.div`
  color: #fff;
  font-size: 1rem;
`,S9=C.button`
  background: none;
  border: none;
  color: #e50914;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(229, 9, 20, 0.1);
  }
`,x9=C.input`
  background-color: #333;
  border: 1px solid #555;
  border-radius: 4px;
  color: #fff;
  padding: 0.5rem;
  font-size: 1rem;
  width: 200px;
  
  &:focus {
    outline: none;
    border-color: #e50914;
  }
`,T9=C.div`
  display: flex;
  gap: 0.5rem;
`,w9=C.button`
  background-color: #46d369;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #3db85a;
  }
`,_9=C.button`
  background-color: #666;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #555;
  }
`,E9=C.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid #333;
`,Kl=C.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  padding: 1rem;
  background-color: #111;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 1rem;
  
  &:hover {
    background-color: #333;
  }
  
  &.danger {
    color: #e50914;
    border-color: #e50914;
    
    &:hover {
      background-color: rgba(229, 9, 20, 0.1);
    }
  }
`,A9=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`,Gd=C.div`
  background-color: #111;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  border: 1px solid #333;
`,qd=C.div`
  color: #e50914;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`,Yd=C.div`
  color: #b3b3b3;
  font-size: 0.9rem;
`,C9=C.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;function R9(){const{currentUser:n,logout:t,updateUserProfile:r}=jc(),s=Rc(),[l,u]=A.useState(!1),[f,p]=A.useState(n?.displayName||""),[h,m]=A.useState(!1),[v,b]=A.useState(""),x=async()=>{try{await t(),s("/")}catch(j){console.error("Failed to log out:",j)}},w=async()=>{if(!f.trim()){b("Name cannot be empty");return}try{m(!0),b(""),await r(f.trim()),u(!1)}catch(j){console.error("Failed to update profile:",j),b("Failed to update profile")}finally{m(!1)}},D=()=>{p(n?.displayName||""),u(!1),b("")};return n?y.jsx(fb,{children:y.jsxs(db,{initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.5},children:[y.jsxs(hb,{children:[y.jsx(y9,{children:n.displayName?n.displayName[0].toUpperCase():"U"}),y.jsx(pb,{children:"My Profile"}),y.jsx(mb,{children:"Manage your account settings and preferences"})]}),y.jsxs(gb,{children:[y.jsxs(Id,{children:[y.jsx($s,{})," Account Information"]}),y.jsxs(b9,{children:[y.jsxs(Bd,{children:[y.jsxs(Vd,{children:[y.jsx($s,{})," Display Name"]}),l?y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[y.jsx(x9,{value:f,onChange:j=>p(j.target.value),placeholder:"Enter your name"}),y.jsxs(T9,{children:[y.jsx(w9,{onClick:w,disabled:h,children:h?y.jsx(C9,{}):y.jsx(_C,{})}),y.jsx(_9,{onClick:D,children:y.jsx(JS,{})})]})]}):y.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1rem"},children:[y.jsx(Hd,{children:n.displayName||"Not set"}),y.jsx(S9,{onClick:()=>u(!0),children:y.jsx(wC,{})})]})]}),y.jsxs(Bd,{children:[y.jsxs(Vd,{children:[y.jsx(Jh,{})," Email Address"]}),y.jsx(Hd,{children:n.email})]}),y.jsxs(Bd,{children:[y.jsxs(Vd,{children:[y.jsx(Jr,{})," Account Created"]}),y.jsx(Hd,{children:n.metadata?.creationTime?new Date(n.metadata.creationTime).toLocaleDateString():"Unknown"})]})]}),v&&y.jsx("div",{style:{color:"#e87c03",marginTop:"1rem",fontSize:"0.9rem"},children:v})]}),y.jsxs(gb,{children:[y.jsxs(Id,{children:[y.jsx(Jr,{})," Account Statistics"]}),y.jsxs(A9,{children:[y.jsxs(Gd,{children:[y.jsx(qd,{children:"0"}),y.jsx(Yd,{children:"Movies in My List"})]}),y.jsxs(Gd,{children:[y.jsx(qd,{children:"0"}),y.jsx(Yd,{children:"Watch History"})]}),y.jsxs(Gd,{children:[y.jsx(qd,{children:"0"}),y.jsx(Yd,{children:"Favorites"})]})]})]}),y.jsxs(E9,{children:[y.jsxs(Id,{children:[y.jsx(Jr,{})," Account Actions"]}),y.jsxs(Kl,{onClick:()=>s("/browse"),children:[y.jsx(Jr,{})," Browse Movies"]}),y.jsxs(Kl,{onClick:()=>s("/browse"),children:[y.jsx(Jr,{})," Account Settings"]}),y.jsxs(Kl,{onClick:()=>s("/browse"),children:[y.jsx(Jr,{})," Help & Support"]}),y.jsxs(Kl,{className:"danger",onClick:x,children:[y.jsx(AC,{})," Sign Out"]})]})]})}):y.jsx(fb,{children:y.jsx(db,{children:y.jsxs(hb,{children:[y.jsx(pb,{children:"Access Denied"}),y.jsx(mb,{children:"Please sign in to view your profile."}),y.jsx(xt,{to:"/login",style:{color:"#e50914",textDecoration:"none"},children:"Sign In"})]})})})}const D9=C(xe.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`,M9=C(xe.div)`
  position: relative;
  max-width: 700px;
  max-height: 60vh;
  width: 100%;
  background-color: #000;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
`,O9=C.button`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`,j9=C.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
`,k9=C.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`,N9=C.h3`
  color: #fff;
  margin: 0;
  padding: 20px;
  font-size: 1.2rem;
  font-weight: 600;
  background-color: #000;
  border-top: 1px solid #333;
`,L9=({isOpen:n,trailer:t,onClose:r})=>(A.useEffect(()=>{const s=l=>{l.key==="Escape"&&r()};return n&&(document.addEventListener("keydown",s),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",s),document.body.style.overflow="unset"}},[n,r]),!n||!t?null:y.jsx(QC,{children:y.jsx(D9,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:r,children:y.jsxs(M9,{initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.8,opacity:0},transition:{duration:.3},onClick:s=>s.stopPropagation(),children:[y.jsx(O9,{onClick:r,children:y.jsx(JS,{})}),y.jsx(j9,{children:y.jsx(k9,{src:`https://www.youtube.com/embed/${t.id}?autoplay=1&rel=0&modestbranding=1`,title:t.title,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})}),y.jsx(N9,{children:t.title})]})})})),z9=cC`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Netflix Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #000;
    color: #fff;
    line-height: 1.4;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-family: inherit;
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .btn {
    padding: 12px 24px;
    border-radius: 4px;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    
    &.btn-primary {
      background-color: #e50914;
      color: #fff;
      
      &:hover {
        background-color: #f40612;
      }
    }
    
    &.btn-secondary {
      background-color: rgba(109, 109, 110, 0.7);
      color: #fff;
      
      &:hover {
        background-color: rgba(109, 109, 110, 0.4);
      }
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .slide-in {
    animation: slideIn 0.5s ease-out;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`,U9=()=>{const{showTrailerPopup:n,selectedTrailer:t,closeTrailerPopup:r}=uo();return y.jsx(L9,{isOpen:n,trailer:t,onClose:r})},P9=()=>(vO(),y.jsxs(y.Fragment,{children:[y.jsx(z9,{}),y.jsxs("div",{className:"App",children:[y.jsx(qC,{}),y.jsxs(eE,{children:[y.jsx(Ji,{path:"/",element:y.jsx(MM,{})}),y.jsx(Ji,{path:"/browse",element:y.jsx(gO,{})}),y.jsx(Ji,{path:"/movie/:id",element:y.jsx(GO,{})}),y.jsx(Ji,{path:"/login",element:y.jsx(n9,{})}),y.jsx(Ji,{path:"/signup",element:y.jsx(v9,{})}),y.jsx(Ji,{path:"/profile",element:y.jsx(R9,{})})]}),y.jsx(U9,{}),y.jsxs("div",{style:{position:"fixed",bottom:0,left:0,width:"100%",background:"rgba(0,0,0,0.85)",color:"#e50914",fontWeight:700,fontSize:"1.1rem",zIndex:2e3,overflow:"hidden",height:"36px",display:"flex",alignItems:"center"},children:[y.jsx("div",{style:{whiteSpace:"nowrap",display:"inline-block",animation:"marquee 12s linear infinite",paddingLeft:"100%"},children:"NetflixClone is designed by Ayush Yadav   •   This NetflixClone is designed by Ayush Yadav   •   This NetflixClone is designed by Ayush Yadav NetflixClone is designed by Ayush Yadav   •   NetflixClone is designed by Ayush Yadav   •  "}),y.jsx("style",{children:`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-100%); }
            }
          `})]})]})]}));function I9(){return y.jsx(o5,{children:y.jsx(l5,{children:y.jsx(oE,{children:y.jsx(P9,{})})})})}l_.createRoot(document.getElementById("root")).render(y.jsx(A.StrictMode,{children:y.jsx(I9,{})}));
