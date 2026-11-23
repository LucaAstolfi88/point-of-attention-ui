(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function nc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const ut={},Ki=[],Hn=()=>{},wf=()=>!1,ia=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),sa=n=>n.startsWith("onUpdate:"),At=Object.assign,ic=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Pp=Object.prototype.hasOwnProperty,nt=(n,e)=>Pp.call(n,e),ze=Array.isArray,Ai=n=>Zs(n)==="[object Map]",ko=n=>Zs(n)==="[object Set]",kc=n=>Zs(n)==="[object Date]",Ge=n=>typeof n=="function",gt=n=>typeof n=="string",kn=n=>typeof n=="symbol",ct=n=>n!==null&&typeof n=="object",Rf=n=>(ct(n)||Ge(n))&&Ge(n.then)&&Ge(n.catch),Cf=Object.prototype.toString,Zs=n=>Cf.call(n),Dp=n=>Zs(n).slice(8,-1),Lf=n=>Zs(n)==="[object Object]",sc=n=>gt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Sr=nc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ip=1e4,ra=n=>{let e=Object.create(null),t=0;return i=>{const s=e[i];return s!==void 0?s:(++t>Ip&&(e=Object.create(null),t=1),e[i]=n(i))}},Up=/-\w/g,En=ra(n=>n.replace(Up,e=>e.slice(1).toUpperCase())),Np=/\B([A-Z])/g,os=ra(n=>n.replace(Np,"-$1").toLowerCase()),Pf=ra(n=>n.charAt(0).toUpperCase()+n.slice(1)),ba=ra(n=>n?`on${Pf(n)}`:""),On=(n,e)=>!Object.is(n,e),Ta=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},Df=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Op=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Gc;const oa=()=>Gc||(Gc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ur(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],s=gt(i)?zp(i):Ur(i);if(s)for(const r in s)e[r]=s[r]}return e}else if(gt(n)||ct(n))return n}const Fp=/;(?![^(]*\))/g,Bp=/:([^]+)/,Hp=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function zp(n){const e={};return n.replace(Hp,t=>t.startsWith("/*")?"":t).split(Fp).forEach(t=>{if(t){const i=t.split(Bp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Pn(n){let e="";if(gt(n))e=n;else if(ze(n))for(let t=0;t<n.length;t++){const i=Pn(n[t]);i&&(e+=i+" ")}else if(ct(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const kp="itemscope,allowfullscreen,disablepictureinpicture,disableremoteplayback,formnovalidate,ismap,nomodule,novalidate,playsinline,readonly",Gp=nc(kp);function If(n){return!!n||n===""}function Vp(n,e,t){if(n.length!==e.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=aa(n[s],e[s],t);return i}function Vc(n,e,t){if(n.size!==e.size)return!1;const i=Array.from(e),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&aa(r,i[a],t)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Wp(n,e,t){let i=Ai(n),s=Ai(e);if(i||s||(i=ko(n),s=ko(e),i||s))return i&&s?Vc(n,e,t):!1;const r=Object.keys(n).length,o=Object.keys(e).length;if(r!==o)return!1;for(const a in n){const l=nt(n,a),c=nt(e,a);if(l&&!c||!l&&c||!aa(n[a],e[a],t))return!1}return Xc(n)===Xc(e)}function Wc(n,e,t,i){t||(t=[new Map,new Map]);const[s,r]=t;if(s.has(n)||r.has(e))return s.get(n)===e&&r.get(e)===n;s.set(n,e),r.set(e,n);const o=i(n,e,t);return s.delete(n),r.delete(e),o}function aa(n,e,t){if(n===e)return!0;let i=kc(n),s=kc(e);return i||s?i&&s?n.getTime()===e.getTime():!1:(i=kn(n),s=kn(e),i||s?n===e:(i=ze(n),s=ze(e),i||s?i&&s?Wc(n,e,t,Vp):!1:(i=ct(n),s=ct(e),i||s?!i||!s?!1:Wc(n,e,t,Wp):String(n)===String(e))))}function Xc(n){return Object.getPrototypeOf(n)===null&&n[Symbol.toPrimitive]==null&&typeof n.toString!="function"&&typeof n.valueOf!="function"?Zs(n):String(n)}const Uf=n=>!!(n&&n.__v_isRef===!0),st=n=>gt(n)?n:n==null?"":ze(n)||ct(n)&&(n.toString===Cf||!Ge(n.toString))?Uf(n)?st(n.value):JSON.stringify(n,Nf,2):String(n),Nf=(n,e)=>Uf(e)?Nf(n,e.value):Ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,s],r)=>(t[Aa(i,r)+" =>"]=s,t),{})}:ko(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Aa(t))}:kn(e)?Aa(e):ct(e)&&!ze(e)&&!Lf(e)?String(e):e,Aa=(n,e="")=>{var t;return kn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Nt;class Xp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&Nt&&(Nt.active?(this.parent=Nt,this.index=(Nt.scopes||(Nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes){const i=this.scopes.slice();for(e=0,t=i.length;e<t;e++)i[e].pause()}for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes){const s=this.scopes.slice();for(e=0,t=s.length;e<t;e++)s[e].resume()}const i=this.effects.slice();for(e=0,t=i.length;e<t;e++)i[e].resume()}}run(e){if(this._active){const t=Nt;try{return Nt=this,e()}finally{Nt=t}}}on(){++this._on===1&&(this.prevScope=Nt,Nt=this)}off(){if(this._on>0&&--this._on===0){if(Nt===this)Nt=this.prevScope;else{let e=Nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(t=0,i=s.length;t<i;t++)s[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function jp(){return Nt}let ft;const wa=new WeakSet;class Of{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Nt&&(Nt.active?Nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,wa.has(this)&&(wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,jc(this),Hf(this);const e=ft,t=bn;ft=this,bn=!0;try{return this.fn()}finally{zf(this),ft=e,bn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ac(e);this.deps=this.depsTail=void 0,jc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Ff=0,Er,br;function Bf(n,e=!1){if(n.flags|=8,e){n.next=br,br=n;return}n.next=Er,Er=n}function rc(){Ff++}function oc(){if(--Ff>0)return;if(br){let e=br;for(br=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Er;){let e=Er;for(Er=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Hf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zf(n){let e,t=n.depsTail,i=t;for(;i;){const s=i.prevDep;i.version===-1?(i===t&&(t=s),ac(i),qp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=e,n.depsTail=t}function bl(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(kf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function kf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Nr)||(n.globalVersion=Nr,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!bl(n))))return;n.flags|=2;const e=n.dep,t=ft,i=bn;ft=n,bn=!0;try{Hf(n);const s=n.fn(n._value);(e.version===0||On(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ft=t,bn=i,zf(n),n.flags&=-3}}function ac(n,e=!1){const{dep:t,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let r=t.computed.deps;r;r=r.nextDep)ac(r,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function qp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bn=!0;const Gf=[];function Gn(){Gf.push(bn),bn=!1}function Vn(){const n=Gf.pop();bn=n===void 0?!0:n}function jc(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ft;ft=void 0;try{e()}finally{ft=t}}}let Nr=0;class Yp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class lc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ft||!bn||ft===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ft)t=this.activeLink=new Yp(ft,this),ft.deps?(t.prevDep=ft.depsTail,ft.depsTail.nextDep=t,ft.depsTail=t):ft.deps=ft.depsTail=t,Vf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=ft.depsTail,t.nextDep=void 0,ft.depsTail.nextDep=t,ft.depsTail=t,ft.deps===t&&(ft.deps=i)}return t}trigger(e){this.version++,Nr++,this.notify(e)}notify(e){rc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{oc()}}}function Vf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Vf(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Tl=new WeakMap,Zi=Symbol(""),Al=Symbol(""),Or=Symbol("");function kt(n,e,t){if(bn&&ft){let i=Tl.get(n);i||Tl.set(n,i=new Map);let s=i.get(t);s||(i.set(t,s=new lc),s.map=i,s.key=t),s.track()}}function ri(n,e,t,i,s,r){const o=Tl.get(n);if(!o){Nr++;return}const a=l=>{l&&l.trigger()};if(rc(),e==="clear")o.forEach(a);else{const l=ze(n),c=l&&sc(t);if(l&&t==="length"){const u=Number(i);o.forEach((h,f)=>{(f==="length"||f===Or||!kn(f)&&f>=u)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),c&&a(o.get(Or)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Zi)),Ai(n)&&a(o.get(Al)));break;case"delete":l||(a(o.get(Zi)),Ai(n)&&a(o.get(Al)));break;case"set":Ai(n)&&a(o.get(Zi));break}}oc()}function ls(n){const e=rt(n);return e===n||(kt(e,"iterate",Or),gn(n))?e:Wn(n)?wi(n)?e.map(t=>Di(xn(t))):e.map(Di):e.map(xn)}function la(n){return kt(n=rt(n),"iterate",Or),n}function Dn(n,e){return Wn(n)?Di(wi(n)?xn(e):e):xn(e)}const Kp={__proto__:null,[Symbol.iterator](){return Ra(this,Symbol.iterator,n=>Dn(this,n))},concat(...n){return ls(this).concat(...n.map(e=>ze(e)?ls(e):e))},entries(){return Ra(this,"entries",n=>(n[1]=Dn(this,n[1]),n))},every(n,e){return Kn(this,"every",n,e,void 0,arguments)},filter(n,e){return Kn(this,"filter",n,e,t=>t.map(i=>Dn(this,i)),arguments)},find(n,e){return Kn(this,"find",n,e,t=>Dn(this,t),arguments)},findIndex(n,e){return Kn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Kn(this,"findLast",n,e,t=>Dn(this,t),arguments)},findLastIndex(n,e){return Kn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Kn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Ca(this,"includes",n)},indexOf(...n){return Ca(this,"indexOf",n)},join(n){return ls(this).join(n)},lastIndexOf(...n){return Ca(this,"lastIndexOf",n)},map(n,e){return Kn(this,"map",n,e,void 0,arguments)},pop(){return rr(this,"pop")},push(...n){return rr(this,"push",n)},reduce(n,...e){return Yc(this,"reduce",n,e)},reduceRight(n,...e){return Yc(this,"reduceRight",n,e)},shift(){return rr(this,"shift")},some(n,e){return Kn(this,"some",n,e,void 0,arguments)},splice(...n){return rr(this,"splice",n)},toReversed(){return ls(this).toReversed()},toSorted(n){return ls(this).toSorted(n)},toSpliced(...n){return ls(this).toSpliced(...n)},unshift(...n){return rr(this,"unshift",n)},values(){return Ra(this,"values",n=>Dn(this,n))}};function Ra(n,e,t){const i=la(n),s=i[e],r=s.call(i);if(i!==n&&!gn(n)){if(r[Symbol.toStringTag]==="Array Iterator"){const o=Object.create(Object.getPrototypeOf(r));return o.next=()=>qc(r.next(),t),s!==Wf[e]&&Object.defineProperties(o,{return:{get(){const a=r.return;return typeof a=="function"?a.bind(r):a}},throw:{get(){const a=r.throw;return typeof a=="function"?a.bind(r):a}}}),o}r._next=r.next,r.next=()=>qc(r._next(),t)}return r}function qc(n,e){return n.done||(n.value=e(n.value)),n}const Wf=Array.prototype;function Kn(n,e,t,i,s,r){const o=la(n),a=o!==n&&!gn(n),l=o[e];if(l!==Wf[e]){const h=l.apply(n,r);return a?xn(h):h}let c=t;o!==n&&(a?c=function(h,f){return t.call(this,Dn(n,h),f,n)}:t.length>2&&(c=function(h,f){return t.call(this,h,f,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function Yc(n,e,t,i){const s=la(n),r=s!==n&&!gn(n);let o=t,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=Dn(n,c)),t.call(this,c,Dn(n,u),h,n)}):t.length>3&&(o=function(c,u,h){return t.call(this,c,u,h,n)}));const l=s[e](o,...i);return a?Dn(n,l):l}function Ca(n,e,t){const i=rt(n);kt(i,"iterate",Or);const s=i[e](...t);return(s===-1||s===!1)&&fc(t[0])?(t[0]=rt(t[0]),i[e](...t)):s}function rr(n,e,t=[]){Gn(),rc();const i=rt(n)[e].apply(n,t);return oc(),Vn(),i}const $p=nc("__proto__,__v_isRef,__isVue"),Xf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(kn));function Zp(n){kn(n)||(n=String(n));const e=rt(this);return kt(e,"has",n),e.hasOwnProperty(n)}class jf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return i===(s?r?am:$f:r?Kf:Yf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!s){let l;if(o&&(l=Kp[t]))return l;if(t==="hasOwnProperty")return Zp}const a=Reflect.get(e,t,Wt(e)?e:i);if((kn(t)?Xf.has(t):$p(t))||(s||kt(e,"get",t),r))return a;if(Wt(a)){const l=o&&sc(t)?a:a.value;return s&&ct(l)?Rl(l):l}return ct(a)?s?Rl(a):uc(a):a}}class qf extends jf{constructor(e=!1){super(!1,e)}set(e,t,i,s){let r=e[t];const o=ze(e)&&sc(t);if(!this._isShallow){const c=Wn(r);if(!gn(i)&&!Wn(i)&&(r=rt(r),i=rt(i)),!o&&Wt(r)&&!Wt(i))return c||(r.value=i),!0}const a=o?Number(t)<e.length:nt(e,t),l=Reflect.set(e,t,i,Wt(e)?e:s);return e===rt(s)&&l&&(a?On(i,r)&&ri(e,"set",t,i):ri(e,"add",t,i)),l}deleteProperty(e,t){const i=nt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&i&&ri(e,"delete",t,void 0),s}has(e,t){const i=Reflect.has(e,t);return(!kn(t)||!Xf.has(t))&&kt(e,"has",t),i}ownKeys(e){return kt(e,"iterate",ze(e)?"length":Zi),Reflect.ownKeys(e)}}class Jp extends jf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Qp=new qf,em=new Jp,tm=new qf(!0);const wl=n=>n,Zr=n=>Reflect.getPrototypeOf(n);function nm(n,e,t){return function(...i){const s=this.__v_raw,r=rt(s),o=Ai(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=t?wl:e?Di:xn;return!e&&kt(r,"iterate",l?Al:Zi),At(Object.create(c),{next(){const{value:h,done:f}=c.next();return f?{value:h,done:f}:{value:a?[u(h[0]),u(h[1])]:u(h),done:f}}})}}function Jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function im(n,e){const t={get(s){const r=this.__v_raw,o=rt(r),a=rt(s);n||(On(s,a)&&kt(o,"get",s),kt(o,"get",a));const{has:l}=Zr(o),c=e?wl:n?Di:xn;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&kt(rt(s),"iterate",Zi),s.size},has(s){const r=this.__v_raw,o=rt(r),a=rt(s);return n||(On(s,a)&&kt(o,"has",s),kt(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=rt(a),c=e?wl:n?Di:xn;return!n&&kt(l,"iterate",Zi),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return At(t,n?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(s){const r=rt(this),o=Zr(r),a=rt(s),l=!e&&!gn(s)&&!Wn(s)?a:s;return o.has.call(r,l)||On(s,l)&&o.has.call(r,s)||On(a,l)&&o.has.call(r,a)||(r.add(l),ri(r,"add",l,l)),this},set(s,r){!e&&!gn(r)&&!Wn(r)&&(r=rt(r));const o=rt(this),{has:a,get:l}=Zr(o);let c=a.call(o,s);c||(s=rt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?On(r,u)&&ri(o,"set",s,r):ri(o,"add",s,r),this},delete(s){const r=rt(this),{has:o,get:a}=Zr(r);let l=o.call(r,s);l||(s=rt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&ri(r,"delete",s,void 0),c},clear(){const s=rt(this),r=s.size!==0,o=s.clear();return r&&ri(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=nm(s,n,e)}),t}function cc(n,e){const t=im(n,e);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_isShallow"?e:s==="__v_raw"?i:Reflect.get(nt(t,s)&&s in i?t:i,s,r)}const sm={get:cc(!1,!1)},rm={get:cc(!1,!0)},om={get:cc(!0,!1)};const Yf=new WeakMap,Kf=new WeakMap,$f=new WeakMap,am=new WeakMap;function lm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function uc(n){return Wn(n)?n:hc(n,!1,Qp,sm,Yf)}function cm(n){return hc(n,!1,tm,rm,Kf)}function Rl(n){return hc(n,!0,em,om,$f)}function hc(n,e,t,i,s){if(!ct(n)||n.__v_raw&&!(e&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=lm(Dp(n));if(o===0)return n;const a=new Proxy(n,o===2?i:t);return s.set(n,a),a}function wi(n){return Wn(n)?wi(n.__v_raw):!!(n&&n.__v_isReactive)}function Wn(n){return!!(n&&n.__v_isReadonly)}function gn(n){return!!(n&&n.__v_isShallow)}function fc(n){return n?!!n.__v_raw:!1}function rt(n){const e=n&&n.__v_raw;return e?rt(e):n}function um(n){return!nt(n,"__v_skip")&&Object.isExtensible(n)&&Df(n,"__v_skip",!0),n}const xn=n=>ct(n)?uc(n):n,Di=n=>ct(n)?Rl(n):n;function Wt(n){return n?n.__v_isRef===!0:!1}function Pt(n){return hm(n,!1)}function hm(n,e){return Wt(n)?n:new fm(n,e)}class fm{constructor(e,t){this.dep=new lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:rt(e),this._value=t?e:xn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||gn(e)||Wn(e);e=i?e:rt(e),On(e,t)&&(this._rawValue=e,this._value=i?e:xn(e),this.dep.trigger())}}function Cl(n){return Wt(n)?n.value:n}const dm={get:(n,e,t)=>e==="__v_raw"?n:Cl(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const s=n[e];return Wt(s)&&!Wt(t)?(s.value=t,!0):Reflect.set(n,e,t,i)}};function Zf(n){return wi(n)?n:new Proxy(n,dm)}class pm{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Nr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ft!==this)return Bf(this,!0),!0}get value(){const e=this.dep.track();return kf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function mm(n,e,t=!1){let i,s;return Ge(n)?i=n:(i=n.get,s=n.set),new pm(i,s,t)}const Qr={},Go=new WeakMap;let Vi;function gm(n,e=!1,t=Vi){if(t){let i=Go.get(t);i||Go.set(t,i=[]),i.push(n)}}function _m(n,e,t=ut){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=t,c=E=>s?E:gn(E)||s===!1||s===0?oi(E,1):oi(E);let u,h,f,m,_=!1,g=!1;if(Wt(n)?(h=()=>n.value,_=gn(n)):wi(n)?(h=()=>c(n),_=!0):ze(n)?(g=!0,_=n.some(E=>wi(E)||gn(E)),h=()=>n.map(E=>{if(Wt(E))return E.value;if(wi(E))return c(E);if(Ge(E))return l?l(E,2):E()})):Ge(n)?e?h=l?()=>l(n,2):n:h=()=>{if(f){Gn();try{f()}finally{Vn()}}const E=Vi;Vi=u;try{return l?l(n,3,[m]):n(m)}finally{Vi=E}}:h=Hn,e&&s){const E=h,L=s===!0?1/0:s;h=()=>oi(E(),L)}const p=jp(),d=()=>{u.stop(),p&&p.active&&ic(p.effects,u)};if(r&&e){const E=e;e=(...L)=>{try{return E(...L)}finally{d()}}}let M=g?new Array(n.length).fill(Qr):Qr;const v=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const L=u.run();if(E||s||_||(g?L.some((C,w)=>On(C,M[w])):On(L,M))){const C=Vi;Gn();try{f&&f(),Vi=u;const w=[L,M===Qr?void 0:g&&M[0]===Qr?[]:M,m];M=L,l?l(e,3,w):e(...w)}finally{Vi=C,Vn()}}}else u.run()};return a&&a(v),u=new Of(h),u.scheduler=o?()=>o(v,!1):v,m=E=>gm(E,!1,u),f=u.onStop=()=>{const E=Go.get(u);if(E){if(l)l(E,4);else for(const L of E)L();Go.delete(u)}},e?i?v(!0):M=u.run():o?o(v.bind(null,!0),!0):u.run(),d.pause=u.pause.bind(u),d.resume=u.resume.bind(u),d.stop=d,d}function oi(n,e=1/0,t){if(e<=0||!ct(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,Wt(n))oi(n.value,e,t);else if(ze(n))for(let i=0;i<n.length;i++)oi(n[i],e,t);else if(ko(n)||Ai(n))n.forEach(i=>{oi(i,e,t)});else if(Lf(n)){for(const i in n)oi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&oi(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(n,e,t,i){try{return i?n(...i):n()}catch(s){ca(s,e,t)}}function An(n,e,t,i){if(Ge(n)){const s=jr(n,e,t,i);return s&&Rf(s)&&s.catch(r=>{ca(r,e,t,void 0,!0)}),s}if(ze(n)){const s=[];for(let r=0;r<n.length;r++)s.push(An(n[r],e,t,i));return s}}function ca(n,e,t,i=!0,s=!1){const r=e?e.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||ut;if(e){let l=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const h=l.ec;if(h&&!l.isUnmounted&&(!s||l.scope.active)){for(let f=0;f<h.length;f++)if(h[f](n,c,u)===!1)return}l=l.parent}if(o){Gn(),jr(o,null,10,[n,c,u]),Vn();return}}xm(n,t,r,i,a)}function xm(n,e,t,i=!0,s=!1){if(s)throw n;console.error(n)}const Yt=[];let Sn=-1;const In=[];let yi=null,Ds=0;const Jf=Promise.resolve();let Vo=null;function vm(n){const e=Vo||Jf;return n?e.then(this?n.bind(this):n):e}function ym(n){let e=Sn+1,t=Yt.length;for(;e<t;){const i=e+t>>>1,s=Yt[i],r=Fr(s);r<n||r===n&&s.flags&2?e=i+1:t=i}return e}function dc(n){if(!(n.flags&1)){const e=Fr(n),t=Yt[Yt.length-1];!t||!(n.flags&2)&&e>=Fr(t)?Yt.push(n):Yt.splice(ym(e),0,n),n.flags|=1,Qf()}}function Qf(){Vo||(Vo=Jf.then(nd))}function Mm(n){if(!ze(n))yi&&n.id===-1?yi.splice(Ds+1,0,n):n.flags&1||(In.push(n),n.flags|=1);else for(let e=0;e<n.length;e++)In.push(n[e]);Qf()}function ed(n,e,t,i=Sn+1){for(;i<Yt.length;i++){const s=Yt[i];if(s&&s.flags&2){if(n&&s.id!==n.uid||e!==void 0&&!(s.id>=e))continue;Yt.splice(i,1),i=n?i-1:Sn,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function td(n,e,t=0){if(In.length){let i=In,s=0;if(e){i=[];for(let o=0;o<In.length;o++){const a=In[o];(a.i!==void 0?!a.i||a.i.uid<t:e.has(a))?In[s++]=a:i.push(a)}}const r=[...new Set(i)].sort((o,a)=>Fr(o)-Fr(a));if(In.length=s,yi){for(let o=0;o<r.length;o++)yi.push(r[o]);return}for(yi=r,Ds=0;Ds<yi.length;Ds++){const o=yi[Ds];o.flags&4&&(o.flags&=-2),o.flags&8||o(),o.flags&=-2}yi=null,Ds=0}}let La=!1;function Sm(n,e){if(La){n();return}const t=e===void 0?void 0:new Set(In);n(),La=!0;try{ed(void 0,e),td(void 0,t,e)}finally{La=!1}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function nd(n){try{for(Sn=0;Sn<Yt.length;Sn++){const e=Yt[Sn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Sn<Yt.length;Sn++){const e=Yt[Sn];e&&(e.flags&=-2)}Sn=-1,Yt.length=0,td(),Vo=null,(Yt.length||In.length)&&nd()}}let mn=null,id=null;function Wo(n){const e=mn;return mn=n,id=n&&n.type.__scopeId||null,e}function Em(n,e=mn,t){if(!e||n._n)return n;const i=(...s)=>{i._d&&au(-1);const r=Wo(e),o=Ji.length;let a;try{a=n(...s)}finally{for(let l=Ji.length;l>o;l--)Rd();Wo(r),i._d&&au(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function bm(n,e){if(mn===null)return n;const t=da(mn),i=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[r,o,a,l=ut]=e[s];r&&(Ge(r)&&(r={mounted:r,updated:r}),r.deep&&oi(o),i.push({dir:r,instance:t,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function Ni(n,e,t,i){let s=n;if(i==="beforeMount")n._mount=n;else if(i==="beforeUpdate"){const a=e&&e._mount;a&&(a._latest=n,n._mount=a)}else if(i==="mounted"){const a=n._latest;n._mount=n._latest=void 0,a&&(s=a,a._mount=void 0)}const r=s.dirs,o=e&&e.dirs;for(let a=0;a<r.length;a++){let l=r[a];o?l.oldValue=o[a].value:i==="mounted"&&l.oldValue!==void 0&&(l=At({},l,{oldValue:void 0}));let c=l.dir[i];c&&(Gn(),An(c,t,8,[n.el,l,s,e]),Vn())}}function Tm(n,e){if(Kt){let t=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===t&&(t=Kt.provides=Object.create(i)),t[n]=e}}function Fo(n,e,t=!1){const i=bg();if(i||Os){let s=Os?Os._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&Ge(e)?e.call(i&&i.proxy):e}}const Am=Symbol.for("v-scx"),wm=()=>Fo(Am);function Ri(n,e,t){return sd(n,e,t)}function sd(n,e,t=ut){const{immediate:i,deep:s,flush:r,once:o}=t,a=At({},t),l=e&&i||!e&&r!=="post";let c;if(kr){if(r==="sync"){const m=wm();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Hn,m.resume=Hn,m.pause=Hn,m}}const u=Kt;a.call=(m,_,g)=>An(m,u,_,g);let h=!1;r==="post"?a.scheduler=m=>{m.i=u,zt(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,_)=>{_?m():dc(m)}),a.augmentJob=m=>{e&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const f=_m(n,e,a);return kr&&(c?c.push(f):l&&f()),f}function Rm(n,e,t){const i=this.proxy,s=gt(n)?n.includes(".")?rd(i,n):()=>i[n]:n.bind(i,i);let r;Ge(e)?r=e:(r=e.handler,t=e);const o=qr(this),a=sd(s,r.bind(i),t);return o(),a}function rd(n,e){const t=e.split(".");return()=>{let i=n;for(let s=0;s<t.length&&i;s++)i=i[t[s]];return i}}const vi=new WeakMap,od=Symbol("_vte"),ua=n=>n.__isTeleport,Xi=n=>n&&(n.disabled||n.disabled===""),Cm=n=>n&&(n.defer||n.defer===""),Kc=n=>typeof SVGElement<"u"&&n instanceof SVGElement,$c=n=>typeof MathMLElement=="function"&&n instanceof MathMLElement,Ll=(n,e)=>{const t=n&&n.to;return gt(t)?e?e(t):null:t},Lm={name:"Teleport",__isTeleport:!0,process(n,e,t,i,s,r,o,a,l,c){const{mc:u,pc:h,pbc:f,o:{insert:m,querySelector:_,createText:g,createComment:p,parentNode:d}}=c,M=Xi(e.props);let{dynamicChildren:v}=e;const E=(w,q,b)=>{w.shapeFlag&16&&u(w.children,q,b,s,r,o,a,l)},L=(w=e)=>{const q=Xi(w.props),b=w.target=Ll(w.props,_),R=Pl(b,w,g,m);b&&(o!=="svg"&&Kc(b)?o="svg":o!=="mathml"&&$c(b)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(b),q||(E(w,b,R),vr(w,!1)))},C=w=>{const q=()=>{if(vi.get(w)===q){if(vi.delete(w),Xi(w.props)){const b=d(w.el)||t;E(w,b,w.anchor),vr(w,!0)}L(w)}};vi.set(w,q),zt(q,r)};if(n==null){const w=e.el=g(""),q=e.anchor=g("");if(m(w,t,i),m(q,t,i),Cm(e.props)||r&&r.pendingBranch){C(e);return}M&&(E(e,t,q),vr(e,!0)),L()}else{e.el=n.el;const w=e.anchor=n.anchor,q=vi.get(n);if(q){q.flags|=8,vi.delete(n),C(e);return}e.targetStart=n.targetStart;const b=e.target=n.target,R=e.targetAnchor=n.targetAnchor,Z=Xi(n.props),ie=Z?t:b,he=Z?w:R;if(o==="svg"||Kc(b)?o="svg":(o==="mathml"||$c(b))&&(o="mathml"),v?(f(n.dynamicChildren,v,ie,s,r,o,a),xc(n,e,!0)):l||h(n,e,ie,he,s,r,o,a,!1),M)Z?e.props&&n.props&&e.props.to!==n.props.to&&(e.props.to=n.props.to):eo(e,t,w,c,1);else if((e.props&&e.props.to)!==(n.props&&n.props.to)){const N=Ll(e.props,_);N&&(e.target=N,eo(e,N,null,c,0))}else Z&&eo(e,b,R,c,1);vr(e,M)}},remove(n,e,t,{um:i,o:{remove:s}},r){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:h,props:f}=n,m=Xi(f),_=r||!m,g=vi.get(n);if(g&&(g.flags|=8,vi.delete(n)),h&&(s(c),s(u)),r&&s(l),!g&&(m||h)&&o&16)for(let p=0;p<a.length;p++){const d=a[p];i(d,e,t,_,!!d.dynamicChildren)}},move:eo,hydrate:Pm};function eo(n,e,t,{o:{insert:i},m:s},r=2){r===0&&(n.targetStart&&i(n.targetStart,e,t),i(n.targetAnchor,e,t),t=n.targetAnchor);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=n,h=r===2;if(h&&i(o,e,t),!vi.has(n)&&(!h||Xi(u))&&l&16)for(let f=0;f<c.length;f++)s(c[f],e,t,2);h&&i(a,e,t)}function Pm(n,e,t,i,s,r,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},h){function f(p,d){let M=d;for(;M;){if(M&&M.nodeType===8){if(M.data==="teleport start anchor")e.targetStart=M;else if(M.data==="teleport anchor"){e.targetAnchor=M,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}M=o(M)}}function m(p,d){d.anchor=h(o(p),d,a(p),t,i,s,r)}const _=e.target=Ll(e.props,l),g=Xi(e.props);if(_){const p=_._lpa||_.firstChild;e.shapeFlag&16&&(g?(f(_,p),m(n,e),e.targetAnchor||Pl(_,e,u,c,a(n)===_?n:null)):(e.anchor=o(n),f(_,p),e.targetAnchor||Pl(_,e,u,c),h(p&&o(p),e,_,t,i,s,r))),vr(e,g)}else g&&e.shapeFlag&16&&(m(n,e),e.targetStart=n,e.targetAnchor=o(n));return e.anchor&&o(e.anchor)}const Dm=Lm;function vr(n,e){const t=n.ctx;t&&t.ut&&(e?t.ut(n.el,n.anchor):t.ut(n.targetStart,n.targetAnchor))}function Pl(n,e,t,i,s=null){const r=e.targetStart=t(""),o=e.targetAnchor=t("");return r[od]=o,n&&(i(r,n,s),i(o,n,s)),o}const Pa=Symbol("_leaveCb");function Im(n){let e=n[0];if(n.length>1){for(const t of n)if(t.type!==wn){e=t;break}}return e}function ad(n){if(!pc(n))return ua(n.type)&&n.children?Im(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:e,children:t}=n;if(t){if(e&16)return t[0];if(e&32&&Ge(t.default))return t.default()}}function Tr(n,e){if(n.shapeFlag&6&&n.component){n.transition=e;const t=n.component.subTree;Tr(ua(t.type)&&ad(t)||t,e)}else if(n.shapeFlag&128){const t=n.suspense;if(t){const i=t.isHydrating?t.pendingBranch:t.activeBranch;i&&Tr(i,e.clone(i))}else n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)}else if(n.transition=e,n.type===vt&&ze(n.children)){const t=gd(n.children,!1);t&&Tr(t,e)}}function Dl(n){if(n.component)return Dl(n.component.subTree);if(n.type===vt){const e=ze(n.children)&&gd(n.children,!1);return e?Dl(e):void 0}if(n.type!==wn)return n}function ld(n,e){return Ge(n)?At({name:n.name},e,{setup:n}):n}function cd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Zc(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const Xo=new WeakMap;function Ar(n,e,t,i,s=!1){if(ze(n)){n.forEach((g,p)=>Ar(g,e&&(ze(e)?e[p]:e),t,i,s));return}if(wr(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ar(n,e,t,i.component.subTree);return}const r=i.shapeFlag&4?da(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=e&&e.r,u=a.refs===ut?a.refs={}:a.refs,h=a.setupState,f=rt(h),m=h===ut?wf:g=>Zc(u,g)?!1:nt(f,g),_=(g,p)=>!(p&&Zc(u,p));if(c!=null&&c!==l){if(Jc(e),gt(c))u[c]=null,m(c)&&(h[c]=null);else if(Wt(c)){const g=e;_(c,g.k)&&(c.value=null),g.k&&(u[g.k]=null)}}if(Ge(l))jr(l,a,12,[o,u]);else{const g=gt(l),p=Wt(l);if(g||p){const d=()=>{if(n.f){const M=g?m(l)?h[l]:u[l]:_()||!n.k?l.value:u[n.k];if(s)ze(M)&&ic(M,r);else if(ze(M))M.includes(r)||M.push(r);else if(g)u[l]=[r],m(l)&&(h[l]=u[l]);else{const v=[r];_(l,n.k)&&(l.value=v),n.k&&(u[n.k]=v)}}else g?(u[l]=o,m(l)&&(h[l]=o)):p&&(_(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const M=()=>{d(),Xo.delete(n)};M.id=-1,Xo.set(n,M),zt(M,t)}else Jc(n),d()}}}function Jc(n){const e=Xo.get(n);e&&(e.flags|=8,Xo.delete(n))}oa().requestIdleCallback;oa().cancelIdleCallback;const wr=n=>!!n.type.__asyncLoader,pc=n=>n.type.__isKeepAlive;function Um(n,e){ud(n,"a",e)}function Nm(n,e){ud(n,"da",e)}function ud(n,e,t=Kt){const i=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Br(e,i,t),t){let s=t.parent;for(;s&&s.parent;)pc(s.parent.vnode)&&Om(i,e,t,s),s=s.parent}}function Om(n,e,t,i){const s=Br(e,n,i,!0),r=Br("um",()=>ic(i[e],s),t);r.flags=16}function Br(n,e,t=Kt,i=!1){if(t){const s=t[n]||(t[n]=[]),r=e.__weh||(e.__weh=(...o)=>{Gn();const a=qr(t),l=An(e,t,n,o);return a(),Vn(),l});return i?s.unshift(r):s.push(r),r}}const hi=n=>(e,t=Kt)=>{(!kr||n==="sp")&&Br(n,(...i)=>e(...i),t)},Fm=hi("bm"),hd=hi("m"),Bm=hi("bu"),Hm=hi("u"),mc=hi("bum"),zm=hi("um"),km=hi("sp"),Gm=hi("rtg"),Vm=hi("rtc");function Wm(n,e=Kt){Br("ec",n,e)}const Xm=Symbol.for("v-ndc");function Ln(n,e,t,i){let s;const r=t,o=ze(n);if(o||gt(n)){const a=o&&wi(n);let l=!1,c=!1;a&&(l=!gn(n),c=Wn(n),n=la(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=e(l?c?Di(xn(n[u])):xn(n[u]):n[u],u,void 0,r)}else if(typeof n=="number")if(!Number.isInteger(n)||n<0)s=[];else{s=new Array(n);for(let a=0;a<n;a++)s[a]=e(a+1,a,void 0,r)}else if(ct(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=e(n[u],u,l,r)}}else s=[];return s}const Il=n=>n?Ud(n)?da(n):Il(n.parent):null,Rr=At(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Il(n.parent),$root:n=>Il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>dd(n),$forceUpdate:n=>n.f||(n.f=()=>{dc(n.update)}),$nextTick:n=>n.n||(n.n=vm.bind(n.proxy)),$watch:n=>Rm.bind(n)}),Da=(n,e)=>n!==ut&&!n.__isScriptSetup&&nt(n,e),jm={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(Da(i,e))return o[e]=1,i[e];if(s!==ut&&nt(s,e))return o[e]=2,s[e];if(nt(r,e))return o[e]=3,r[e];if(t!==ut&&nt(t,e))return o[e]=4,t[e];Ul&&(o[e]=0)}}const c=Rr[e];let u,h;if(c)return e==="$attrs"&&kt(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==ut&&nt(t,e))return o[e]=4,t[e];if(h=l.config.globalProperties,nt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:s,ctx:r}=n;return Da(s,e)?(s[e]=t,!0):i!==ut&&nt(i,e)?(i[e]=t,!0):nt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(r[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(t[a]||n!==ut&&a[0]!=="$"&&nt(n,a)||Da(e,a)||nt(r,a)||nt(i,a)||nt(Rr,a)||nt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:nt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Qc(n){return ze(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Ul=!0;function qm(n){const e=dd(n),t=n.proxy,i=n.ctx;Ul=!1,e.beforeCreate&&eu(e.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:f,beforeUpdate:m,updated:_,activated:g,deactivated:p,beforeDestroy:d,beforeUnmount:M,destroyed:v,unmounted:E,render:L,renderTracked:C,renderTriggered:w,errorCaptured:q,serverPrefetch:b,expose:R,inheritAttrs:Z,components:ie,directives:he,filters:N}=e;if(c&&Ym(c,i,null),o)for(const ee in o){const $=o[ee];Ge($)&&(i[ee]=$.bind(t))}if(s){const ee=s.call(t,t);ct(ee)&&(n.data=uc(ee))}if(Ul=!0,r)for(const ee in r){const $=r[ee],re=Ge($)?$.bind(t,t):Ge($.get)?$.get.bind(t,t):Hn,oe=!Ge($)&&Ge($.set)?$.set.bind(t):Hn,pe=ji({get:re,set:oe});Object.defineProperty(i,ee,{enumerable:!0,configurable:!0,get:()=>pe.value,set:fe=>pe.value=fe})}if(a)for(const ee in a)fd(a[ee],i,t,ee);if(l){const ee=Ge(l)?l.call(t):l;Reflect.ownKeys(ee).forEach($=>{Tm($,ee[$])})}u&&eu(u,n,"c");function W(ee,$){ze($)?$.forEach(re=>ee(re.bind(t))):$&&ee($.bind(t))}if(W(Fm,h),W(hd,f),W(Bm,m),W(Hm,_),W(Um,g),W(Nm,p),W(Wm,q),W(Vm,C),W(Gm,w),W(mc,M),W(zm,E),W(km,b),ze(R))if(R.length){const ee=n.exposed||(n.exposed={});R.forEach($=>{Object.defineProperty(ee,$,{get:()=>t[$],set:re=>t[$]=re,enumerable:!0})})}else n.exposed||(n.exposed={});L&&n.render===Hn&&(n.render=L),Z!=null&&(n.inheritAttrs=Z),ie&&(n.components=ie),he&&(n.directives=he),b&&cd(n)}function Ym(n,e,t=Hn){ze(n)&&(n=Nl(n));for(const i in n){const s=n[i];let r;ct(s)?"default"in s?r=Fo(s.from||i,s.default,!0):r=Fo(s.from||i):r=Fo(s),Wt(r)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[i]=r}}function eu(n,e,t){An(ze(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function fd(n,e,t,i){let s=i.includes(".")?rd(t,i):()=>t[i];if(gt(n)){const r=e[n];Ge(r)&&Ri(s,r)}else if(Ge(n))Ri(s,n.bind(t));else if(ct(n))if(ze(n))n.forEach(r=>fd(r,e,t,i));else{const r=Ge(n.handler)?n.handler.bind(t):e[n.handler];Ge(r)&&Ri(s,r,n)}}function dd(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!i?l=e:(l={},s.length&&s.forEach(c=>jo(l,c,o,!0)),jo(l,e,o)),ct(e)&&r.set(e,l),l}function jo(n,e,t,i=!1){const{mixins:s,extends:r}=e;r&&jo(n,r,t,!0),s&&s.forEach(o=>jo(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=Km[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const Km={data:tu,props:nu,emits:nu,methods:yr,computed:yr,beforeCreate:jt,created:jt,beforeMount:jt,mounted:jt,beforeUpdate:jt,updated:jt,beforeDestroy:jt,beforeUnmount:jt,destroyed:jt,unmounted:jt,activated:jt,deactivated:jt,errorCaptured:jt,serverPrefetch:jt,components:yr,directives:yr,watch:Zm,provide:tu,inject:$m};function tu(n,e){return e?n?function(){return At(Ge(n)?n.call(this,this):n,Ge(e)?e.call(this,this):e)}:e:n}function $m(n,e){return yr(Nl(n),Nl(e))}function Nl(n){if(ze(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function jt(n,e){return n?[...new Set([].concat(n,e))]:e}function yr(n,e){return n?At(Object.create(null),n,e):e}function nu(n,e){return n?ze(n)&&ze(e)?[...new Set([...n,...e])]:At(Object.create(null),Qc(n),Qc(e??{})):e}function Zm(n,e){if(!n)return e;if(!e)return n;const t=At(Object.create(null),n);for(const i in e)t[i]=jt(n[i],e[i]);return t}function pd(){return{app:null,config:{isNativeTag:wf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Jm=0;function Qm(n,e){return function(i,s=null){Ge(i)||(i=At({},i)),s!=null&&!ct(s)&&(s=null);const r=pd(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:Jm++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Lg,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ge(u.install)?(o.add(u),u.install(c,...h)):Ge(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,f){if(!l){const m=c._ceVNode||zn(i,s);return m.appContext=r,f===!0?f="svg":f===!1&&(f=void 0),n(m,u,f),l=!0,c._container=u,u.__vue_app__=c,da(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(An(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=Os;Os=c;try{return u()}finally{Os=h}}};return c}}let Os=null;const eg=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${En(e)}Modifiers`]||n[`${os(e)}Modifiers`];function tg(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||ut;let s=t;const r=e.startsWith("update:"),o=r&&eg(i,e.slice(7));o&&(o.trim&&(s=t.map(u=>gt(u)?u.trim():u)),o.number&&(s=s.map(Op)));let a,l=i[a=ba(e)]||i[a=ba(En(e))];!l&&r&&(l=i[a=ba(os(e))]),l&&An(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,An(c,n,6,s)}}const ng=new WeakMap;function md(n,e,t=!1){const i=t?ng:e.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ge(n)){const l=c=>{const u=md(c,e,!0);u&&(a=!0,At(o,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(ct(n)&&i.set(n,null),null):(ze(r)?r.forEach(l=>o[l]=null):At(o,r),ct(n)&&i.set(n,o),o)}function ha(n,e){return!n||!ia(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),nt(n,e[0].toLowerCase()+e.slice(1))||nt(n,os(e))||nt(n,e))}function iu(n){const{type:e,vnode:t,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:f,setupState:m,ctx:_,inheritAttrs:g}=n,p=Wo(n);let d,M;try{if(t.shapeFlag&4){const E=s||i,L=E;d=Un(c.call(L,E,u,h,m,f,_)),M=a}else{const E=e;d=Un(E.length>1?E(h,{attrs:a,slots:o,emit:l}):E(h,null)),M=e.props?a:ig(a)}}catch(E){Ji.length=0,ca(E,n,1),d=zn(wn)}let v=d;if(M&&g!==!1){const E=Object.keys(M),{shapeFlag:L}=v;E.length&&L&7&&(r&&E.some(sa)&&(M=sg(M,r)),v=ks(v,M,!1,!0))}if(t.dirs&&(v=ks(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition){const E=ua(v.type)&&ad(v)||v;Tr(E,t.transition)}return d=v,Wo(p),d}function gd(n,e=!0){let t;for(let i=0;i<n.length;i++){const s=n[i];if(vc(s)){if(s.type!==wn||s.children==="v-if"){if(t)return;t=s}}else return}return t}const ig=n=>{let e;for(const t in n)(t==="class"||t==="style"||ia(t))&&((e||(e={}))[t]=n[t]);return e},sg=(n,e)=>{const t={};for(const i in n)(!sa(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function rg(n,e,t){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?su(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const f=u[h];if(_d(o,i,f)&&!ha(c,f))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?su(i,o,c):!0:!!o;return!1}function su(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(!nt(n,r)||_d(e,n,r)&&!ha(t,r))return!0}return!1}function _d(n,e,t){const i=n[t],s=e[t];return t==="style"&&ct(i)&&ct(s)?!aa(i,s):i!==s}function og({vnode:n,parent:e,suspense:t},i){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=e.vnode).el=i,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=i)}const xd={},vd=()=>Object.create(xd),yd=n=>Object.getPrototypeOf(n)===xd;function ag(n,e,t,i=!1){const s={},r=vd();n.propsDefaults=Object.create(null),Md(n,e,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=i?s:cm(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function lg(n,e,t,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=rt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let f=u[h];if(ha(n.emitsOptions,f))continue;const m=e[f];if(l)if(nt(r,f))m!==r[f]&&(r[f]=m,c=!0);else{const _=En(f);s[_]=Ol(l,a,_,m,n,!1)}else m!==r[f]&&(r[f]=m,c=!0)}}}else{Md(n,e,s,r)&&(c=!0);let u;for(const h in a)(!e||!nt(e,h)&&((u=os(h))===h||!nt(e,u)))&&(l?t&&(t[h]!==void 0||t[u]!==void 0)&&(s[h]=Ol(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!e||!nt(e,h))&&(delete r[h],c=!0)}c&&ri(n.attrs,"set","")}function Md(n,e,t,i){const[s,r]=n.propsOptions;let o=!1,a;if(e)for(let l in e){if(Sr(l))continue;const c=e[l];let u;s&&nt(s,u=En(l))?!r||!r.includes(u)?t[u]=c:(a||(a={}))[u]=c:ha(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=rt(t),c=a||ut;for(let u=0;u<r.length;u++){const h=r[u];t[h]=Ol(s,l,h,c[h],n,!nt(c,h))}}return o}function Ol(n,e,t,i,s,r){const o=n[t];if(o!=null){const a=nt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ge(l)){const{propsDefaults:c}=s;if(t in c)i=c[t];else{const u=qr(s);i=c[t]=l.call(null,e),u()}}else i=l;s.ce&&s.ce._setProp(t,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===os(t))&&(i=!0))}return i}const cg=new WeakMap;function Sd(n,e,t=!1){const i=t?cg:e.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ge(n)){const u=h=>{l=!0;const[f,m]=Sd(h,e,!0);At(o,f),m&&a.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return ct(n)&&i.set(n,Ki),Ki;if(ze(r))for(let u=0;u<r.length;u++){const h=En(r[u]);ru(h)&&(o[h]=ut)}else if(r)for(const u in r){const h=En(u);if(ru(h)){const f=r[u],m=o[h]=ze(f)||Ge(f)?{type:f}:At({},f),_=m.type;let g=!1,p=!0;if(ze(_))for(let d=0;d<_.length;++d){const M=_[d],v=Ge(M)&&M.name;if(v==="Boolean"){g=!0;break}else v==="String"&&(p=!1)}else g=Ge(_)&&_.name==="Boolean";m[0]=g,m[1]=p,(g||nt(m,"default"))&&a.push(h)}}const c=[o,a];return ct(n)&&i.set(n,c),c}function ru(n){return n[0]!=="$"&&!Sr(n)}const gc=n=>n==="_"||n==="_ctx"||n==="$stable",_c=n=>ze(n)?n.map(Un):[Un(n)],ug=(n,e,t)=>{if(e._n)return e;const i=Em((...s)=>_c(e(...s)),t);return i._c=!1,i},Ed=(n,e,t)=>{const i=n._ctx;for(const s in n){if(gc(s))continue;const r=n[s];if(Ge(r))e[s]=ug(s,r,i);else if(r!=null){const o=_c(r);e[s]=()=>o}}},bd=(n,e)=>{const t=_c(e);n.slots.default=()=>t},Td=(n,e,t)=>{for(const i in e)(t||!gc(i))&&(n[i]=e[i])},hg=(n,e,t)=>{const i=n.slots=vd();if(n.vnode.shapeFlag&32){const s=e._;s?(Td(i,e,t),t&&Df(i,"_",s,!0)):Ed(e,i)}else e&&bd(n,e)},fg=(n,e,t)=>{const{vnode:i,slots:s}=n;let r=!0,o=ut;if(i.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:Td(s,e,t):(r=!e.$stable,Ed(e,s)),o=e}else e&&(bd(n,e),o={default:1});if(r)for(const a in s)!gc(a)&&o[a]==null&&delete s[a]},zt=xg;function dg(n){return pg(n)}function pg(n,e){const t=oa();t.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:f,setScopeId:m=Hn,insertStaticContent:_}=n,g=(A,S,z,k=null,H=null,F=null,le=void 0,se=null,y=!!S.dynamicChildren)=>{if(A===S)return;A&&!or(A,S)&&(k=te(A),fe(A,H,F,!0),A=null),S.patchFlag===-2&&(y=!1,S.dynamicChildren=null),S.dynamicChildren&&A&&A.dynamicChildren&&A.dynamicChildren.hasOnce&&(S.dynamicChildren===Ki&&(S.dynamicChildren=[]),S.dynamicChildren.hasOnce=!0);const{type:x,ref:U,shapeFlag:O}=S;switch(x){case fa:p(A,S,z,k);break;case wn:d(A,S,z,k);break;case Ua:A==null&&M(S,z,k,le);break;case vt:ie(A,S,z,k,H,F,le,se,y);break;default:O&1?L(A,S,z,k,H,F,le,se,y):O&6?he(A,S,z,k,H,F,le,se,y):(O&64||O&128)&&x.process(A,S,z,k,H,F,le,se,y,Re)}U!=null&&H?Ar(U,A&&A.ref,F,S||A,!S):U==null&&A&&A.ref!=null&&Ar(A.ref,null,F,A,!0)},p=(A,S,z,k)=>{if(A==null)i(S.el=a(S.children),z,k);else{const H=S.el=A.el;S.children!==A.children&&c(H,S.children)}},d=(A,S,z,k)=>{A==null?i(S.el=l(S.children||""),z,k):S.el=A.el},M=(A,S,z,k)=>{[A.el,A.anchor]=_(A.children,S,z,k,A.el,A.anchor)},v=({el:A,anchor:S},z,k)=>{let H;for(;A&&A!==S;)H=f(A),i(A,z,k),A=H;i(S,z,k)},E=({el:A,anchor:S})=>{let z;for(;A&&A!==S;)z=f(A),s(A),A=z;s(S)},L=(A,S,z,k,H,F,le,se,y)=>{if(S.type==="svg"?le="svg":S.type==="math"&&(le="mathml"),A==null)C(S,z,k,H,F,le,se,y);else{const x=A.el&&A.el._isVueCE?A.el:null;try{x&&x._beginPatch(),b(A,S,H,F,le,se,y)}finally{x&&x._endPatch()}}},C=(A,S,z,k,H,F,le,se)=>{let y,x;const{props:U,shapeFlag:O,transition:G,dirs:Y}=A;if(y=A.el=o(A.type,F,U&&U.is,U),O&8?u(y,A.children):O&16&&q(A.children,y,null,k,H,Ia(A,F),le,se),Y&&Ni(A,null,k,"created"),w(y,A,A.scopeId,le,k),U){for(const ue in U)ue!=="value"&&!Sr(ue)&&r(y,ue,null,U[ue],F,k);"value"in U&&r(y,"value",null,U.value,F),(x=U.onVnodeBeforeMount)&&Cn(x,k,A)}Y&&Ni(A,null,k,"beforeMount");const ge=mg(H,G);ge?G.beforeEnter(y):G&&!G.persisted&&(y[_g]=!0),i(y,S,z),((x=U&&U.onVnodeMounted)||ge||Y)&&zt(()=>{try{x&&Cn(x,k,A),ge&&G.enter(y),Y&&Ni(A,null,k,"mounted")}finally{}},H)},w=(A,S,z,k,H)=>{if(z&&m(A,z),k)for(let F=0;F<k.length;F++)m(A,k[F]);if(H){let F=H.subTree;if(S===F||wd(F.type)&&(F.ssContent===S||F.ssFallback===S)){const le=H.vnode;w(A,le,le.scopeId,le.slotScopeIds,H.parent)}}},q=(A,S,z,k,H,F,le,se,y=0)=>{for(let x=y;x<A.length;x++){const U=A[x]=se?si(A[x]):Un(A[x]);g(null,U,S,z,k,H,F,le,se)}},b=(A,S,z,k,H,F,le)=>{const se=S.el=A.el;let{patchFlag:y,dynamicChildren:x,dirs:U}=S;y|=A.patchFlag&16;const O=A.props||ut,G=S.props||ut;let Y;if(z&&Oi(z,!1),(Y=G.onVnodeBeforeUpdate)&&Cn(Y,z,S,A),U&&Ni(S,A,z,"beforeUpdate"),z&&Oi(z,!0),x&&(!A.dynamicChildren||A.dynamicChildren.length!==x.length)&&(y=0,le=!1,x=null),(O.innerHTML&&G.innerHTML==null||O.textContent&&G.textContent==null)&&u(se,""),x?R(A.dynamicChildren,x,se,z,k,Ia(S,H),F):le||$(A,S,se,null,z,k,Ia(S,H),F,!1),y>0){if(y&16)Z(se,O,G,z,H);else if(y&2&&O.class!==G.class&&r(se,"class",null,G.class,H),y&4&&r(se,"style",O.style,G.style,H),y&8){const ge=S.dynamicProps;for(let ue=0;ue<ge.length;ue++){const me=ge[ue],be=O[me],Le=G[me];(Le!==be||me==="value")&&r(se,me,be,Le,H,z)}}y&1&&A.children!==S.children&&u(se,S.children)}else!le&&x==null&&Z(se,O,G,z,H);((Y=G.onVnodeUpdated)||U)&&zt(()=>{Y&&Cn(Y,z,S,A),U&&Ni(S,A,z,"updated")},k)},R=(A,S,z,k,H,F,le)=>{for(let se=0;se<S.length;se++){const y=A[se],x=S[se],U=y.el||Cr(y),O=U&&(y.type===vt||!or(y,x)||y.shapeFlag&198)?h(U):z;g(y,x,O,null,k,H,F,le,!0)}},Z=(A,S,z,k,H)=>{if(S!==z){if(S!==ut)for(const F in S)!Sr(F)&&!(F in z)&&r(A,F,S[F],null,H,k);for(const F in z){if(Sr(F))continue;const le=z[F],se=S[F];le!==se&&F!=="value"&&r(A,F,se,le,H,k)}"value"in z&&r(A,"value",S.value,z.value,H)}},ie=(A,S,z,k,H,F,le,se,y)=>{const x=S.el=A?A.el:a(""),U=S.anchor=A?A.anchor:a("");let{patchFlag:O,dynamicChildren:G,slotScopeIds:Y}=S;Y&&(se=se?se.concat(Y):Y),A==null?(i(x,z,k),i(U,z,k),q(S.children||[],z,U,H,F,le,se,y)):O>0&&O&64&&G&&A.dynamicChildren&&A.dynamicChildren.length===G.length?(R(A.dynamicChildren,G,z,H,F,le,se),(S.key!=null||H&&S===H.subTree)&&xc(A,S,!0)):$(A,S,z,U,H,F,le,se,y)},he=(A,S,z,k,H,F,le,se,y)=>{S.slotScopeIds=se,A==null?S.shapeFlag&512?H.ctx.activate(S,z,k,le,y):N(S,z,k,H,F,le,y):j(A,S,y)},N=(A,S,z,k,H,F,le)=>{const se=A.component=Eg(A,k,H);if(pc(A)&&(se.ctx.renderer=Re),Tg(se,!1,le),se.asyncDep){if(H&&H.registerDep(se,W,le,F),!A.el){const y=se.subTree=zn(wn);d(null,y,S,z),A.placeholder=y.el}}else W(se,A,S,z,H,F,le)},j=(A,S,z)=>{const k=S.component=A.component;if(rg(A,S,z))if(k.asyncDep&&!k.asyncResolved){S.el=A.el,S.placeholder=A.placeholder,ee(k,S,z);return}else k.next=S,k.update();else S.el=A.el,S.placeholder=A.placeholder,k.vnode=S},W=(A,S,z,k,H,F,le)=>{const se=()=>{if(A.isMounted){let{next:O,bu:G,u:Y,parent:ge,vnode:ue}=A;{const Ve=Ad(A);if(Ve){O&&(O.el=ue.el,ee(A,O,le)),Ve.asyncDep.then(()=>{const Ne=()=>{A.job.flags&8||(H&&H.pendingBranch?zt(Ne,H):x())};Ne.flags=48,zt(Ne,H)});return}}let me=O,be;Oi(A,!1),O?(O.el=ue.el,ee(A,O,le)):O=ue,G&&Ta(G),(be=O.props&&O.props.onVnodeBeforeUpdate)&&Cn(be,ge,O,ue),Oi(A,!0);const Le=iu(A),ae=A.subTree;A.subTree=Le,g(ae,Le,h(ae.el||Cr(ae)),te(ae),A,H,F),O.el=Le.el,me===null&&og(A,Le.el),Y&&zt(Y,H),(be=O.props&&O.props.onVnodeUpdated)&&zt(()=>Cn(be,ge,O,ue),H)}else{let O;const{el:G,props:Y}=S,{bm:ge,m:ue,parent:me,root:be,type:Le}=A,ae=wr(S);Oi(A,!1),ge&&Ta(ge),!ae&&(O=Y&&Y.onVnodeBeforeMount)&&Cn(O,me,S),Oi(A,!0);{be.ce&&be.ce._hasShadowRoot()&&be.ce._injectChildStyle(Le,A.parent?A.parent.type:void 0);const Ve=A.subTree=iu(A);g(null,Ve,z,k,A,H,F),S.el=Ve.el}if(ue&&zt(ue,H),!ae&&(O=Y&&Y.onVnodeMounted)){const Ve=S;zt(()=>Cn(O,me,Ve),H)}(S.shapeFlag&256||me&&wr(me.vnode)&&me.vnode.shapeFlag&256)&&A.a&&zt(A.a,H),A.isMounted=!0,S=z=k=null}};A.scope.on();const y=A.effect=new Of(se);A.scope.off();const x=A.update=y.run.bind(y),U=A.job=y.runIfDirty.bind(y);U.i=A,U.id=A.uid,y.scheduler=()=>dc(U),Oi(A,!0),x()},ee=(A,S,z)=>{S.component=A;const k=A.vnode.props;A.vnode=S,A.next=null,lg(A,S.props,k,z),fg(A,S.children,z),Gn(),ed(A),Vn()},$=(A,S,z,k,H,F,le,se,y=!1)=>{const x=A&&A.children,U=A?A.shapeFlag:0,O=S.children,{patchFlag:G,shapeFlag:Y}=S;if(G>0){if(G&128){oe(x,O,z,k,H,F,le,se,y);return}else if(G&256){re(x,O,z,k,H,F,le,se,y);return}}Y&8?(U&16&&V(x,H,F),O!==x&&u(z,O)):U&16?Y&16?oe(x,O,z,k,H,F,le,se,y):V(x,H,F,!0):(U&8&&u(z,""),Y&16&&q(O,z,k,H,F,le,se,y))},re=(A,S,z,k,H,F,le,se,y)=>{A=A||Ki,S=S||Ki;const x=A.length,U=S.length,O=Math.min(x,U);let G;for(G=0;G<O;G++){const Y=S[G]=y?si(S[G]):Un(S[G]);g(A[G],Y,z,null,H,F,le,se,y)}x>U?V(A,H,F,!0,!1,O):q(S,z,k,H,F,le,se,y,O)},oe=(A,S,z,k,H,F,le,se,y)=>{let x=0;const U=S.length;let O=A.length-1,G=U-1;for(;x<=O&&x<=G;){const Y=A[x],ge=S[x]=y?si(S[x]):Un(S[x]);if(or(Y,ge))g(Y,ge,z,null,H,F,le,se,y);else break;x++}for(;x<=O&&x<=G;){const Y=A[O],ge=S[G]=y?si(S[G]):Un(S[G]);if(or(Y,ge))g(Y,ge,z,null,H,F,le,se,y);else break;O--,G--}if(x>O){if(x<=G){const Y=G+1,ge=Y<U?S[Y].el:k;for(;x<=G;)g(null,S[x]=y?si(S[x]):Un(S[x]),z,ge,H,F,le,se,y),x++}}else if(x>G)for(;x<=O;)fe(A[x],H,F,!0),x++;else{const Y=x,ge=x,ue=new Map;for(x=ge;x<=G;x++){const Te=S[x]=y?si(S[x]):Un(S[x]);Te.key!=null&&ue.set(Te.key,x)}let me,be=0;const Le=G-ge+1;let ae=!1,Ve=0;const Ne=new Array(Le);for(x=0;x<Le;x++)Ne[x]=0;for(x=Y;x<=O;x++){const Te=A[x];if(be>=Le){fe(Te,H,F,!0);continue}let Me;if(Te.key!=null)Me=ue.get(Te.key);else for(me=ge;me<=G;me++)if(Ne[me-ge]===0&&or(Te,S[me])){Me=me;break}Me===void 0?fe(Te,H,F,!0):(Ne[Me-ge]=x+1,Me>=Ve?Ve=Me:ae=!0,g(Te,S[Me],z,null,H,F,le,se,y),be++)}const Oe=ae?gg(Ne):Ki;for(me=Oe.length-1,x=Le-1;x>=0;x--){const Te=ge+x,Me=S[Te],P=S[Te+1],_e=Te+1<U?P.el||Cr(P):k;Ne[x]===0?g(null,Me,z,_e,H,F,le,se,y):ae&&(me<0||x!==Oe[me]?pe(Me,z,_e,2):me--)}}},pe=(A,S,z,k,H=null)=>{const{el:F,type:le,transition:se,children:y,shapeFlag:x}=A;if(x&6){pe(A.component.subTree,S,z,k);return}if(x&128){A.suspense.move(S,z,k);return}if(x&64){le.move(A,S,z,Re);return}if(le===vt){i(F,S,z);for(let O=0;O<y.length;O++)pe(y[O],S,z,k);i(A.anchor,S,z);return}if(le===Ua){v(A,S,z);return}if(k!==2&&x&1&&se)if(k===0)se.persisted&&!F[Pa]?i(F,S,z):(se.beforeEnter(F),i(F,S,z),zt(()=>se.enter(F),H));else{const{leave:O,delayLeave:G,afterLeave:Y}=se,ge=()=>{A.ctx.isUnmounted?s(F):i(F,S,z)},ue=()=>{const me=F._isLeaving||!!F[Pa];F._isLeaving&&F[Pa](!0),se.persisted&&!me?ge():O(F,()=>{ge(),Y&&Y()})};G?G(F,ge,ue):ue()}else i(F,S,z)},fe=(A,S,z,k=!1,H=!1)=>{const{type:F,props:le,ref:se,children:y,dynamicChildren:x,shapeFlag:U,patchFlag:O,dirs:G,cacheIndex:Y,memo:ge}=A;if((O===-2||x&&x.hasOnce)&&(H=!1),se!=null&&(Gn(),Ar(se,null,z,A,!0),Vn()),Y!=null&&(!A.ctx||A.ctx===S)&&(S.renderCache[Y]=void 0),U&256&&S.ctx.deactivate(A))return;const ue=U&1&&G,me=!wr(A);let be;if(me&&(be=le&&le.onVnodeBeforeUnmount)&&Cn(be,S,A),U&6)ne(A.component,z,k);else{if(U&128){A.suspense.unmount(z,k);return}ue&&Ni(A,null,S,"beforeUnmount"),U&64?A.type.remove(A,S,z,Re,k):x&&!x.hasOnce&&(F!==vt||O>0&&O&64)?V(x,S,z,!1,!0):(F===vt&&O&384||!H&&U&16)&&V(y,S,z),k&&Q(A)}const Le=ge!=null&&Y==null;(me&&(be=le&&le.onVnodeUnmounted)||ue||Le)&&zt(()=>{be&&Cn(be,S,A),ue&&Ni(A,null,S,"unmounted"),Le&&(A.el=null)},z)},Q=A=>{const{type:S,el:z,anchor:k,transition:H}=A,F=S===vt;if(F&&!H){ce(z,k);return}if(S===Ua){E(A),H&&!H.persisted&&H.afterLeave&&H.afterLeave();return}const le=F?Dl(A):A,se=()=>{F?h(z)&&ce(z,k):s(z),H&&!H.persisted&&H.afterLeave&&H.afterLeave()};if(le&&le.shapeFlag&1&&H&&!H.persisted){const{leave:y,delayLeave:x}=H,U=le.el,O=()=>y(U,se);x?x(U,se,O):O()}else se()},ce=(A,S)=>{let z;for(;A!==S;)z=f(A),s(A),A=z;s(S)},ne=(A,S,z)=>{const{bum:k,scope:H,job:F,subTree:le,um:se,m:y,a:x}=A;ou(y),ou(x),k&&Ta(k),H.stop(),F?(F.flags|=8,fe(le,A,S,z)):le&&(le.transition=A.vnode.transition,fe(le,A,S,z)),se&&zt(se,S);const U=()=>{A.isUnmounted=!0};U.flags=16,zt(U,S)},V=(A,S,z,k=!1,H=!1,F=0)=>{for(let le=F;le<A.length;le++)fe(A[le],S,z,k,H)},te=A=>{if(A.shapeFlag&6)return te(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const S=f(A.anchor||A.el),z=S&&S[od];return z?f(z):S},ye=(A,S,z)=>{const k=A&&S._vnode?void 0:A&&A.component?A.component.uid:Sg();Sm(()=>{A==null?S._vnode&&fe(S._vnode,null,null,!0):g(S._vnode||null,A,S,null,null,null,z),S._vnode=A},k)},Re={p:g,um:fe,m:pe,r:Q,mt:N,mc:q,pc:$,pbc:R,n:te,o:n};return{render:ye,hydrate:void 0,createApp:Qm(ye)}}function Ia({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Oi({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function mg(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function xc(n,e,t=!1){const i=n.children,s=e.children;if(ze(i)&&ze(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=si(s[r]),a.el=o.el),!t&&a.patchFlag!==-2&&xc(o,a)),a.type===fa&&(a.patchFlag===-1&&(a=s[r]=si(a)),a.el=o.el),a.type===wn&&!a.el&&(a.el=o.el)}}function gg(n){const e=n.slice(),t=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=t[t.length-1],n[s]<c){e[i]=s,t.push(i);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,n[t[a]]<c?r=a+1:o=a;c<n[t[r]]&&(r>0&&(e[i]=t[r-1]),t[r]=i)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function Ad(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ad(e)}function ou(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Cr(n){if(n.placeholder)return n.placeholder;const e=n.component;if(e)return Cr(e.subTree);const t=n.suspense;return t&&t.activeBranch?Cr(t.activeBranch):null}const wd=n=>n.__isSuspense,_g=Symbol("_deferredEnter");function xg(n,e){e&&e.pendingBranch?ze(n)?e.effects.push(...n):e.effects.push(n):Mm(n)}const vt=Symbol.for("v-fgt"),fa=Symbol.for("v-txt"),wn=Symbol.for("v-cmt"),Ua=Symbol.for("v-stc"),Ji=[];let sn=null;function je(n=!1){Ji.push(sn=n?null:[])}function Rd(){Ji.pop(),sn=Ji[Ji.length-1]||null}let Hr=1;function au(n,e=!1){Hr+=n,n<0&&sn&&e&&(sn.hasOnce=!0)}function Cd(n){return n.dynamicChildren=Hr>0?sn||Ki:null,Rd(),Hr>0&&sn&&sn.push(n),n}function $e(n,e,t,i,s,r){return Cd(xe(n,e,t,i,s,r,!0))}function Ld(n,e,t,i,s){return Cd(zn(n,e,t,i,s,!0))}function vc(n){return n?n.__v_isVNode===!0:!1}function or(n,e){return n.type===e.type&&n.key===e.key}const Pd=({key:n})=>n??null,Bo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?gt(n)||Wt(n)||Ge(n)?{i:mn,r:n,k:e,f:!!t}:n:null);function xe(n,e=null,t=null,i=0,s=null,r=n===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Pd(e),ref:e&&Bo(e),scopeId:id,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mn};return a?(qo(l,t),r&128&&n.normalize(l)):t&&(l.shapeFlag|=gt(t)?8:16),Hr>0&&!o&&sn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&sn.push(l),l}const zn=vg;function vg(n,e=null,t=null,i=0,s=null,r=!1){if((!n||n===Xm)&&(n=wn),vc(n)){const a=ks(n,e,!0);return t&&qo(a,t),Hr>0&&!r&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag=-2,a}if(Cg(n)&&(n=n.__vccOpts),e){e=yg(e);let{class:a,style:l}=e;a&&!gt(a)&&(e.class=Pn(a)),ct(l)&&(fc(l)&&!ze(l)&&(l=At({},l)),e.style=Ur(l))}const o=gt(n)?1:wd(n)?128:ua(n)?64:ct(n)?4:Ge(n)?2:0;return xe(n,e,t,i,s,o,r,!0)}function yg(n){return n?fc(n)?At({},n):yd(n)?At({},n[Od]||n):n:null}function ks(n,e,t=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=e?Dd(s||{},e):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Pd(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(Bo(e)):[r,Bo(e)]:Bo(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==vt?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ks(n.ssContent),ssFallback:n.ssFallback&&ks(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Tr(u,l.clone(u)),u}function Is(n=" ",e=0){return zn(fa,null,n,e)}function Ut(n="",e=!1){return e?(je(),Ld(wn,null,n)):zn(wn,null,n)}function Un(n){return n==null||typeof n=="boolean"?zn(wn):ze(n)?zn(vt,null,n.slice()):vc(n)?si(n):zn(fa,null,String(n))}function si(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ks(n)}function qo(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(i&65){const s=e.default;s&&(s._c&&(s._d=!1),qo(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!yd(e)?e._ctx=mn:s===3&&mn&&(mn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else if(Ge(e)){if(i&65){qo(n,{default:e});return}e={default:e,_ctx:mn},t=32}else e=String(e),i&64?(t=16,e=[Is(e)]):t=8;n.children=e,n.shapeFlag|=t}function Dd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const s in i)if(s==="class")e.class!==i.class&&(e.class=Pn([e.class,i.class]));else if(s==="style")e.style=Ur([e.style,i.style]);else if(ia(s)){const r=e[s],o=i[s];o&&r!==o&&!(ze(r)&&r.includes(o))?e[s]=r?[].concat(r,o):o:o==null&&r==null&&!sa(s)&&(e[s]=o)}else s!==""&&(e[s]=i[s])}return e}function Cn(n,e,t,i=null){An(n,e,7,[t,i])}const Mg=pd();let Id=0;function Sg(){return Id}function Eg(n,e,t){const i=n.type,s=(e?e.appContext:n.appContext)||Mg,r={uid:Id++,vnode:n,type:i,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Sd(i,s),emitsOptions:md(i,s),emit:null,emitted:null,propsDefaults:ut,inheritAttrs:i.inheritAttrs,ctx:ut,data:ut,props:ut,attrs:ut,slots:ut,refs:ut,setupState:ut,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=tg.bind(null,r),n.ce&&n.ce(r),r}let Kt=null;const bg=()=>Kt||mn;let Yo,zr;{const n=oa(),e=(t,i)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Yo=e("__VUE_INSTANCE_SETTERS__",t=>Kt=t),zr=e("__VUE_SSR_SETTERS__",t=>kr=t)}const qr=n=>{const e=Kt;return Yo(n),n.scope.on(),()=>{n.scope.off(),Yo(e)}},lu=()=>{Kt&&Kt.scope.off(),Yo(null)};function Ud(n){return n.vnode.shapeFlag&4}let kr=!1;function Tg(n,e=!1,t=!1){e&&zr(e);const{props:i,children:s}=n.vnode,r=Ud(n);ag(n,i,r,e),hg(n,s,t||e);const o=r?Ag(n,e):void 0;return e&&zr(!1),o}function Ag(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,jm);const{setup:i}=t;if(i){Gn();const s=n.setupContext=i.length>1?Rg(n):null,r=qr(n),o=jr(i,n,0,[n.props,s]),a=Rf(o);if(Vn(),r(),(a||n.sp)&&!wr(n)&&cd(n),a){if(o.then(lu,lu),e)return o.then(l=>{zr(!0);try{cu(n,l,e)}finally{zr(!1)}}).catch(l=>{ca(l,n,0,void 0,!0),n.ssrRender=(c,u)=>u("<!---->")});n.asyncDep=o}else cu(n,o)}else Nd(n)}function cu(n,e,t){Ge(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ct(e)&&(n.setupState=Zf(e)),Nd(n)}function Nd(n,e,t){const i=n.type;n.render||(n.render=i.render||Hn);{const s=qr(n);Gn();try{qm(n)}finally{Vn(),s()}}}const Od=Symbol(),wg={get(n,e){return kt(n,"get",""),e===Od?n:n[e]}};function Rg(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wg),slots:n.slots,emit:n.emit,expose:e}}function da(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Zf(um(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Rr)return Rr[t](n)},has(e,t){return t in e||t in Rr}})):n.proxy}function Cg(n){return Ge(n)&&"__vccOpts"in n}const ji=(n,e)=>mm(n,e,kr),Lg="3.5.46";/**
* @vue/runtime-dom v3.5.46
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fl;const uu=typeof window<"u"&&window.trustedTypes;if(uu)try{Fl=uu.createPolicy("vue",{createHTML:n=>n})}catch{}const Fd=Fl?n=>Fl.createHTML(n):n=>n,Pg="http://www.w3.org/2000/svg",Dg="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,hu=ii&&ii.createElement("template"),Ig={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const s=e==="svg"?ii.createElementNS(Pg,n):e==="mathml"?ii.createElementNS(Dg,n):t?ii.createElement(n,{is:t}):ii.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>ii.createTextNode(n),createComment:n=>ii.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ii.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{hu.innerHTML=Fd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=hu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Ug=Symbol("_vtc");function Ng(n,e,t){const i=n[Ug];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Ko=Symbol("_vod"),Bd=Symbol("_vsh"),Og={name:"show",beforeMount(n,{value:e},{transition:t}){n[Ko]=n.style.display==="none"?"":n.style.display,t&&e?t.beforeEnter(n):ar(n,e)},mounted(n,{value:e},{transition:t}){t&&e&&t.enter(n)},updated(n,{value:e,oldValue:t},{transition:i}){!e!=!t&&(i?e?(i.beforeEnter(n),ar(n,!0),i.enter(n)):i.leave(n,()=>{ar(n,!1)}):ar(n,e))},beforeUnmount(n,{value:e}){ar(n,e)}};function ar(n,e){n.style.display=e?n[Ko]:"none",n[Bd]=!e}const Fg=Symbol(""),Bg=/(?:^|;)\s*display\s*:/;function Hg(n,e,t){const i=n.style,s=gt(t);let r=!1;if(t&&!s){if(e)if(gt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Mr(i,a,"")}else for(const o in e)t[o]==null&&Mr(i,o,"");for(const o in t){o==="display"&&(r=!0);const a=t[o];a!=null?kg(n,o,!gt(e)&&e?e[o]:void 0,a)||Mr(i,o,a):Mr(i,o,"")}}else if(s){if(e!==t){const o=i[Fg];o&&(t+=";"+o),i.cssText=t,r=Bg.test(t)}}else e&&n.removeAttribute("style");Ko in n&&((!s||e!==t)&&(n[Ko]=r?i.display:""),n[Bd]&&(i.display="none"))}const to=/\s*!important$/;function Mr(n,e,t){if(ze(t))t.forEach(i=>Mr(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))to.test(t)?n.setProperty(e,t.replace(to,""),"important"):n.setProperty(e,t);else{const i=zg(n,e);to.test(t)?n.setProperty(os(i),t.replace(to,""),"important"):n[i]=t}}const fu=["Webkit","Moz","ms"],Na={};function zg(n,e){const t=Na[e];if(t)return t;let i=En(e);if(i!=="filter"&&i in n)return Na[e]=i;i=Pf(i);for(let s=0;s<fu.length;s++){const r=fu[s]+i;if(r in n)return Na[e]=r}return e}function kg(n,e,t,i){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&gt(i)&&t===i}const du="http://www.w3.org/1999/xlink";function pu(n,e,t,i,s,r=Gp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(du,e.slice(6,e.length)):n.setAttributeNS(du,e,t):t==null||r&&!If(t)?n.removeAttribute(e):n.setAttribute(e,r?"":kn(t)?String(t):t)}function mu(n,e,t,i,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?Fd(t):t);return}const r=n.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(a!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=If(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(s||e)}function Gg(n,e,t,i){n.addEventListener(e,t,i)}function Vg(n,e,t,i){n.removeEventListener(e,t,i)}const gu=Symbol("_vei");function Wg(n,e,t,i,s=null){const r=n[gu]||(n[gu]={}),o=r[e];if(i&&o)o.value=i;else{const[a,l]=qg(e);if(i){const c=r[e]=$g(i,s);Gg(n,a,c,l)}else o&&(Vg(n,a,o,l),r[e]=void 0)}}const Xg=/(Once|Passive|Capture)$/,jg=/^on:?(?:Once|Passive|Capture)$/;function qg(n){let e,t;for(;(t=n.match(Xg))&&!jg.test(n);)e||(e={}),n=n.slice(0,n.length-t[1].length),e[t[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):os(n.slice(2)),e]}let Oa=0;const Yg=Promise.resolve(),Kg=()=>Oa||(Yg.then(()=>Oa=0),Oa=Date.now());function $g(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;const s=t.value;if(ze(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&An(c,e,5,a)}}else An(s,e,5,[i])};return t.value=n,t.attached=Kg(),t}const _u=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Zg=(n,e,t,i,s,r)=>{const o=s==="svg";e==="class"?Ng(n,i,o):e==="style"?Hg(n,t,i):ia(e)?sa(e)||Wg(n,e,t,i,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Jg(n,e,i,o))?(mu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pu(n,e,i,o,r,e!=="value")):n._isVueCE&&(Qg(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!gt(i)))?mu(n,En(e),i,r,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),pu(n,e,i,o))};function Jg(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&_u(e)&&Ge(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _u(e)&&gt(t)?!1:e in n}function Qg(n,e){const t=n._def.props;if(!t)return!1;const i=En(e);return Array.isArray(t)?t.some(s=>En(s)===i):Object.keys(t).some(s=>En(s)===i)}const e_=["ctrl","shift","alt","meta"],t_={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>e_.some(t=>n[`${t}Key`]&&!e.includes(t))},xu=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(s,...r)=>{for(let o=0;o<e.length;o++){const a=t_[e[o]];if(a&&a(s,e))return}return n(s,...r)})},n_=At({patchProp:Zg},Ig);let vu;function i_(){return vu||(vu=dg(n_))}const s_=(...n)=>{const e=i_().createApp(...n),{mount:t}=e;return e.mount=i=>{const s=o_(i);if(!s)return;const r=e._component;!Ge(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=t(s,!1,r_(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function r_(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function o_(n){return gt(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const yc="160",cs={ROTATE:0,DOLLY:1,PAN:2},us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},a_=0,yu=1,l_=2,Hd=1,c_=2,ni=3,ui=0,Qt=1,Fn=2,Ci=0,Fs=1,Bl=2,Mu=3,Su=4,u_=5,qi=100,h_=101,f_=102,Eu=103,bu=104,d_=200,p_=201,m_=202,g_=203,Hl=204,zl=205,__=206,x_=207,v_=208,y_=209,M_=210,S_=211,E_=212,b_=213,T_=214,A_=0,w_=1,R_=2,$o=3,C_=4,L_=5,P_=6,D_=7,Mc=0,I_=1,U_=2,Li=0,N_=1,O_=2,F_=3,B_=4,H_=5,z_=6,Tu="attached",k_="detached",zd=300,Gs=301,Vs=302,kl=303,Gl=304,pa=306,Ws=1e3,fn=1001,Zo=1002,Dt=1003,Vl=1004,Ho=1005,Jt=1006,kd=1007,ns=1008,Pi=1009,G_=1010,V_=1011,Sc=1012,Gd=1013,Ei=1014,li=1015,Gr=1016,Vd=1017,Wd=1018,Qi=1020,W_=1021,dn=1023,X_=1024,j_=1025,es=1026,Xs=1027,q_=1028,Xd=1029,Y_=1030,jd=1031,qd=1033,Fa=33776,Ba=33777,Ha=33778,za=33779,Au=35840,wu=35841,Ru=35842,Cu=35843,Yd=36196,Lu=37492,Pu=37496,Du=37808,Iu=37809,Uu=37810,Nu=37811,Ou=37812,Fu=37813,Bu=37814,Hu=37815,zu=37816,ku=37817,Gu=37818,Vu=37819,Wu=37820,Xu=37821,ka=36492,ju=36494,qu=36495,K_=36283,Yu=36284,Ku=36285,$u=36286,Vr=2300,js=2301,Ga=2302,Zu=2400,Ju=2401,Qu=2402,$_=2500,Z_=0,Kd=1,Wl=2,$d=3e3,ts=3001,J_=3200,Q_=3201,ma=0,e0=1,pn="",yt="srgb",It="srgb-linear",Ec="display-p3",ga="display-p3-linear",Jo="linear",dt="srgb",Qo="rec709",ea="p3",hs=7680,eh=519,t0=512,n0=513,i0=514,Zd=515,s0=516,r0=517,o0=518,a0=519,Xl=35044,th="300 es",jl=1035,ci=2e3,ta=2001;class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nh=1234567;const Lr=Math.PI/180,qs=180/Math.PI;function Tn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Bt[n&255]+Bt[n>>8&255]+Bt[n>>16&255]+Bt[n>>24&255]+"-"+Bt[e&255]+Bt[e>>8&255]+"-"+Bt[e>>16&15|64]+Bt[e>>24&255]+"-"+Bt[t&63|128]+Bt[t>>8&255]+"-"+Bt[t>>16&255]+Bt[t>>24&255]+Bt[i&255]+Bt[i>>8&255]+Bt[i>>16&255]+Bt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function bc(n,e){return(n%e+e)%e}function l0(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function c0(n,e,t){return n!==e?(t-n)/(e-n):0}function Pr(n,e,t){return(1-t)*n+t*e}function u0(n,e,t,i){return Pr(n,e,1-Math.exp(-t*i))}function h0(n,e=1){return e-Math.abs(bc(n,e*2)-e)}function f0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function d0(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function p0(n,e){return n+Math.floor(Math.random()*(e-n+1))}function m0(n,e){return n+Math.random()*(e-n)}function g0(n){return n*(.5-Math.random())}function _0(n){n!==void 0&&(nh=n);let e=nh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function x0(n){return n*Lr}function v0(n){return n*qs}function ql(n){return(n&n-1)===0&&n!==0}function y0(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function na(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function M0(n,e,t,i,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+i)/2),u=o((e+i)/2),h=r((e-i)/2),f=o((e-i)/2),m=r((i-e)/2),_=o((i-e)/2);switch(s){case"XYX":n.set(a*u,l*h,l*f,a*c);break;case"YZY":n.set(l*f,a*u,l*h,a*c);break;case"ZXZ":n.set(l*h,l*f,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*m,a*c);break;case"YXY":n.set(l*m,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*m,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Jd={DEG2RAD:Lr,RAD2DEG:qs,generateUUID:Tn,clamp:Ot,euclideanModulo:bc,mapLinear:l0,inverseLerp:c0,lerp:Pr,damp:u0,pingpong:h0,smoothstep:f0,smootherstep:d0,randInt:p0,randFloat:m0,randFloatSpread:g0,seededRandom:_0,degToRad:x0,radToDeg:v0,isPowerOfTwo:ql,ceilPowerOfTwo:y0,floorPowerOfTwo:na,setQuaternionFromProperEuler:M0,normalize:lt,denormalize:Bn};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*i-o*s+e.x,this.y=r*s+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,s,r,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c)}set(e,t,i,s,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],d=s[6],M=s[1],v=s[4],E=s[7],L=s[2],C=s[5],w=s[8];return r[0]=o*g+a*M+l*L,r[3]=o*p+a*v+l*C,r[6]=o*d+a*E+l*w,r[1]=c*g+u*M+h*L,r[4]=c*p+u*v+h*C,r[7]=c*d+u*E+h*w,r[2]=f*g+m*M+_*L,r[5]=f*p+m*v+_*C,r[8]=f*d+m*E+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,f=a*l-u*r,m=c*r-o*l,_=t*h+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=h*g,e[1]=(s*c-u*i)*g,e[2]=(a*i-s*o)*g,e[3]=f*g,e[4]=(u*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=m*g,e[7]=(i*l-c*t)*g,e[8]=(o*t-i*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new Je;function Qd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function S0(){const n=Wr("canvas");return n.style.display="block",n}const ih={};function Dr(n){n in ih||(ih[n]=!0,console.warn(n))}const sh=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),rh=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),no={[It]:{transfer:Jo,primaries:Qo,toReference:n=>n,fromReference:n=>n},[yt]:{transfer:dt,primaries:Qo,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ga]:{transfer:Jo,primaries:ea,toReference:n=>n.applyMatrix3(rh),fromReference:n=>n.applyMatrix3(sh)},[Ec]:{transfer:dt,primaries:ea,toReference:n=>n.convertSRGBToLinear().applyMatrix3(rh),fromReference:n=>n.applyMatrix3(sh).convertLinearToSRGB()}},E0=new Set([It,ga]),ot={enabled:!0,_workingColorSpace:It,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!E0.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=no[e].toReference,s=no[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return no[n].primaries},getTransfer:function(n){return n===pn?Jo:no[n].transfer}};function Bs(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wa(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class ep{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{fs===void 0&&(fs=Wr("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Bs(r[o]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Bs(t[i]/255)*255):t[i]=Bs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let b0=0;class tp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Tn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Xa(s[o].image)):r.push(Xa(s[o]))}else r=Xa(s);i.url=r}return t||(e.images[this.uuid]=i),i}}function Xa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ep.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let T0=0;class Tt extends as{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=fn,s=fn,r=Jt,o=ns,a=dn,l=Pi,c=Tt.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Tn(),this.name="",this.source=new tp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ts?yt:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ws:e.x=e.x-Math.floor(e.x);break;case fn:e.x=e.x<0?0:1;break;case Zo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ws:e.y=e.y-Math.floor(e.y);break;case fn:e.y=e.y<0?0:1;break;case Zo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?ts:$d}set encoding(e){Dr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ts?yt:pn}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=zd;Tt.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,i=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,E=(m+1)/2,L=(d+1)/2,C=(u+f)/4,w=(h+g)/4,q=(_+p)/4;return v>E&&v>L?v<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(v),s=C/i,r=w/i):E>L?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=C/s,r=q/s):L<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),i=w/r,s=q/r),this.set(i,s,r,t),this}let M=Math.sqrt((p-_)*(p-_)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(h-g)/M,this.z=(f-u)/M,this.w=Math.acos((c+m+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class A0 extends as{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};i.encoding!==void 0&&(Dr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ts?yt:pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Tt(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new tp(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class is extends A0{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class np extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class w0 extends Tt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Dt,this.minFilter=Dt,this.wrapR=fn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(h!==g||l!==f||c!==m||u!==_){let p=1-a;const d=l*f+c*m+u*_+h*g,M=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const L=Math.sqrt(v),C=Math.atan2(L,d*M);p=Math.sin(p*C)/L,a=Math.sin(a*C)/L}const E=a*M;if(l=l*p+f*E,c=c*p+m*E,u=u*p+_*E,h=h*p+g*E,p===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+u*h+l*m-c*f,e[t+1]=l*_+u*f+c*h-a*m,e[t+2]=c*_+u*m+a*f-l*h,e[t+3]=u*_-a*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"YXZ":this._x=f*u*h+c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"ZXY":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h-f*m*_;break;case"ZYX":this._x=f*u*h-c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h+f*m*_;break;case"YZX":this._x=f*u*h+c*m*_,this._y=c*m*h+f*u*_,this._z=c*u*_-f*m*h,this._w=c*u*h-f*m*_;break;case"XZY":this._x=f*u*h-c*m*_,this._y=c*m*h-f*u*_,this._z=c*u*_+f*m*h,this._w=c*u*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=i+a+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+i*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*i+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),i*Math.sin(r),i*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,i=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(oh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(oh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*i),u=2*(a*t-r*s),h=2*(r*i-o*t);return this.x=t+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ja.copy(this).projectOnVector(e),this.sub(ja)}reflect(e){return this.sub(ja.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ja=new D,oh=new rn;class Xn{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),io.copy(i.boundingBox)),io.applyMatrix4(e.matrixWorld),this.union(io)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(lr),so.subVectors(this.max,lr),ds.subVectors(e.a,lr),ps.subVectors(e.b,lr),ms.subVectors(e.c,lr),di.subVectors(ps,ds),pi.subVectors(ms,ps),Fi.subVectors(ds,ms);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Fi.z,Fi.y,di.z,0,-di.x,pi.z,0,-pi.x,Fi.z,0,-Fi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Fi.y,Fi.x,0];return!qa(t,ds,ps,ms,so)||(t=[1,0,0,0,1,0,0,0,1],!qa(t,ds,ps,ms,so))?!1:(ro.crossVectors(di,pi),t=[ro.x,ro.y,ro.z],qa(t,ds,ps,ms,so))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const $n=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,io=new Xn,ds=new D,ps=new D,ms=new D,di=new D,pi=new D,Fi=new D,lr=new D,so=new D,ro=new D,Bi=new D;function qa(n,e,t,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){Bi.fromArray(n,r);const a=s.x*Math.abs(Bi.x)+s.y*Math.abs(Bi.y)+s.z*Math.abs(Bi.z),l=e.dot(Bi),c=t.dot(Bi),u=i.dot(Bi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const R0=new Xn,cr=new D,Ya=new D;class jn{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):R0.setFromPoints(e).getCenter(i);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cr.subVectors(e,this.center);const t=cr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(cr,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ya.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cr.copy(e.center).add(Ya)),this.expandByPoint(cr.copy(e.center).sub(Ya))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zn=new D,Ka=new D,oo=new D,mi=new D,$a=new D,ao=new D,Za=new D;class Js{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Zn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Zn.copy(this.origin).addScaledVector(this.direction,t),Zn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ka.copy(e).add(t).multiplyScalar(.5),oo.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(Ka);const r=e.distanceTo(t)*.5,o=-this.direction.dot(oo),a=mi.dot(this.direction),l=-mi.dot(oo),c=mi.lengthSq(),u=Math.abs(1-o*o);let h,f,m,_;if(u>0)if(h=o*l-a,f=o*a-l,_=r*u,h>=0)if(f>=-_)if(f<=_){const g=1/u;h*=g,f*=g,m=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f=-r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+f*(f+2*l)+c);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ka).addScaledVector(oo,f),m}intersectSphere(e,t){Zn.subVectors(e.center,this.origin);const i=Zn.dot(this.direction),s=Zn.dot(Zn)-i*i,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Zn)!==null}intersectTriangle(e,t,i,s,r){$a.subVectors(t,e),ao.subVectors(i,e),Za.crossVectors($a,ao);let o=this.direction.dot(Za),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,e);const l=a*this.direction.dot(ao.crossVectors(mi,ao));if(l<0)return null;const c=a*this.direction.dot($a.cross(mi));if(c<0||l+c>o)return null;const u=-a*mi.dot(Za);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,t,i,s,r,o,a,l,c,u,h,f,m,_,g,p){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,o,a,l,c,u,h,f,m,_,g,p)}set(e,t,i,s,r,o,a,l,c,u,h,f,m,_,g,p){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/gs.setFromMatrixColumn(e,0).length(),r=1/gs.setFromMatrixColumn(e,1).length(),o=1/gs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,r=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=m+_*c,t[5]=f-g*c,t[9]=-a*l,t[2]=g-f*c,t[6]=_+m*c,t[10]=o*l}else if(e.order==="YXZ"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f+g*a,t[4]=_*a-m,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-_,t[6]=g+f*a,t[10]=o*l}else if(e.order==="ZXY"){const f=l*u,m=l*h,_=c*u,g=c*h;t[0]=f-g*a,t[4]=-o*h,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*u,t[9]=g-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const f=o*u,m=o*h,_=a*u,g=a*h;t[0]=l*u,t[4]=_*c-m,t[8]=f*c+g,t[1]=l*h,t[5]=g*c+f,t[9]=m*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=g-f*h,t[8]=_*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=m*h+_,t[10]=f-g*h}else if(e.order==="XZY"){const f=o*l,m=o*c,_=a*l,g=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+g,t[5]=o*u,t[9]=m*h-_,t[2]=_*h-m,t[6]=a*u,t[10]=g*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(C0,e,L0)}lookAt(e,t,i){const s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),gi.crossVectors(i,tn),gi.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),gi.crossVectors(i,tn)),gi.normalize(),lo.crossVectors(tn,gi),s[0]=gi.x,s[4]=lo.x,s[8]=tn.x,s[1]=gi.y,s[5]=lo.y,s[9]=tn.y,s[2]=gi.z,s[6]=lo.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],M=i[3],v=i[7],E=i[11],L=i[15],C=s[0],w=s[4],q=s[8],b=s[12],R=s[1],Z=s[5],ie=s[9],he=s[13],N=s[2],j=s[6],W=s[10],ee=s[14],$=s[3],re=s[7],oe=s[11],pe=s[15];return r[0]=o*C+a*R+l*N+c*$,r[4]=o*w+a*Z+l*j+c*re,r[8]=o*q+a*ie+l*W+c*oe,r[12]=o*b+a*he+l*ee+c*pe,r[1]=u*C+h*R+f*N+m*$,r[5]=u*w+h*Z+f*j+m*re,r[9]=u*q+h*ie+f*W+m*oe,r[13]=u*b+h*he+f*ee+m*pe,r[2]=_*C+g*R+p*N+d*$,r[6]=_*w+g*Z+p*j+d*re,r[10]=_*q+g*ie+p*W+d*oe,r[14]=_*b+g*he+p*ee+d*pe,r[3]=M*C+v*R+E*N+L*$,r[7]=M*w+v*Z+E*j+L*re,r[11]=M*q+v*ie+E*W+L*oe,r[15]=M*b+v*he+E*ee+L*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],m=e[14],_=e[3],g=e[7],p=e[11],d=e[15];return _*(+r*l*h-s*c*h-r*a*f+i*c*f+s*a*m-i*l*m)+g*(+t*l*m-t*c*f+r*o*f-s*o*m+s*c*u-r*l*u)+p*(+t*c*h-t*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+d*(-s*a*u-t*l*h+t*a*f+s*o*h-i*o*f+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],m=e[11],_=e[12],g=e[13],p=e[14],d=e[15],M=h*p*c-g*f*c+g*l*m-a*p*m-h*l*d+a*f*d,v=_*f*c-u*p*c-_*l*m+o*p*m+u*l*d-o*f*d,E=u*g*c-_*h*c+_*a*m-o*g*m-u*a*d+o*h*d,L=_*h*l-u*g*l-_*a*f+o*g*f+u*a*p-o*h*p,C=t*M+i*v+s*E+r*L;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=M*w,e[1]=(g*f*r-h*p*r-g*s*m+i*p*m+h*s*d-i*f*d)*w,e[2]=(a*p*r-g*l*r+g*s*c-i*p*c-a*s*d+i*l*d)*w,e[3]=(h*l*r-a*f*r-h*s*c+i*f*c+a*s*m-i*l*m)*w,e[4]=v*w,e[5]=(u*p*r-_*f*r+_*s*m-t*p*m-u*s*d+t*f*d)*w,e[6]=(_*l*r-o*p*r-_*s*c+t*p*c+o*s*d-t*l*d)*w,e[7]=(o*f*r-u*l*r+u*s*c-t*f*c-o*s*m+t*l*m)*w,e[8]=E*w,e[9]=(_*h*r-u*g*r-_*i*m+t*g*m+u*i*d-t*h*d)*w,e[10]=(o*g*r-_*a*r+_*i*c-t*g*c-o*i*d+t*a*d)*w,e[11]=(u*a*r-o*h*r-u*i*c+t*h*c+o*i*m-t*a*m)*w,e[12]=L*w,e[13]=(u*g*s-_*h*s+_*i*f-t*g*f-u*i*p+t*h*p)*w,e[14]=(_*a*s-o*g*s-_*i*l+t*g*l+o*i*p-t*a*p)*w,e[15]=(o*h*s-u*a*s+u*i*l-t*h*l-o*i*f+t*a*f)*w,this}scale(e){const t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),r=1-i,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,o){return this.set(1,i,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,f=r*c,m=r*u,_=r*h,g=o*u,p=o*h,d=a*h,M=l*c,v=l*u,E=l*h,L=i.x,C=i.y,w=i.z;return s[0]=(1-(g+d))*L,s[1]=(m+E)*L,s[2]=(_-v)*L,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(f+d))*C,s[6]=(p+M)*C,s[7]=0,s[8]=(_+v)*w,s[9]=(p-M)*w,s[10]=(1-(f+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let r=gs.set(s[0],s[1],s[2]).length();const o=gs.set(s[4],s[5],s[6]).length(),a=gs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const c=1/r,u=1/o,h=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=u,yn.elements[5]*=u,yn.elements[6]*=u,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,t.setFromRotationMatrix(yn),i.x=r,i.y=o,i.z=a,this}makePerspective(e,t,i,s,r,o,a=ci){const l=this.elements,c=2*r/(t-e),u=2*r/(i-s),h=(t+e)/(t-e),f=(i+s)/(i-s);let m,_;if(a===ci)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===ta)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,o,a=ci){const l=this.elements,c=1/(t-e),u=1/(i-s),h=1/(o-r),f=(t+e)*c,m=(i+s)*u;let _,g;if(a===ci)_=(o+r)*h,g=-2*h;else if(a===ta)_=r*h,g=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const gs=new D,yn=new qe,C0=new D(0,0,0),L0=new D(1,1,1),gi=new D,lo=new D,tn=new D,ah=new qe,lh=new rn;class ai{constructor(e=0,t=0,i=0,s=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ah.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ah,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lh.setFromEuler(this),this.setFromQuaternion(lh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Tc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let P0=0;const ch=new D,_s=new rn,Jn=new qe,co=new D,ur=new D,D0=new D,I0=new rn,uh=new D(1,0,0),hh=new D(0,1,0),fh=new D(0,0,1),U0={type:"added"},N0={type:"removed"};class pt extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:P0++}),this.uuid=Tn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pt.DEFAULT_UP.clone();const e=new D,t=new ai,i=new rn,s=new D(1,1,1);function r(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new qe},normalMatrix:{value:new Je}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=pt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.multiply(_s),this}rotateOnWorldAxis(e,t){return _s.setFromAxisAngle(e,t),this.quaternion.premultiply(_s),this}rotateX(e){return this.rotateOnAxis(uh,e)}rotateY(e){return this.rotateOnAxis(hh,e)}rotateZ(e){return this.rotateOnAxis(fh,e)}translateOnAxis(e,t){return ch.copy(e).applyQuaternion(this.quaternion),this.position.add(ch.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uh,e)}translateY(e){return this.translateOnAxis(hh,e)}translateZ(e){return this.translateOnAxis(fh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Jn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?co.copy(e):co.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Jn.lookAt(ur,co,this.up):Jn.lookAt(co,ur,this.up),this.quaternion.setFromRotationMatrix(Jn),s&&(Jn.extractRotation(s.matrixWorld),_s.setFromRotationMatrix(Jn),this.quaternion.premultiply(_s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(U0)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(N0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Jn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Jn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Jn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,e,D0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,I0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++){const r=t[i];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}pt.DEFAULT_UP=new D(0,1,0);pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mn=new D,Qn=new D,Ja=new D,ei=new D,xs=new D,vs=new D,dh=new D,Qa=new D,el=new D,tl=new D;let uo=!1;class hn{constructor(e=new D,t=new D,i=new D){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Mn.subVectors(e,t),s.cross(Mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Mn.subVectors(s,t),Qn.subVectors(i,t),Ja.subVectors(e,t);const o=Mn.dot(Mn),a=Mn.dot(Qn),l=Mn.dot(Ja),c=Qn.dot(Qn),u=Qn.dot(Ja),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const f=1/h,m=(c*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getUV(e,t,i,s,r,o,a,l){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),this.getInterpolation(e,t,i,s,r,o,a,l)}static getInterpolation(e,t,i,s,r,o,a,l){return this.getBarycoord(e,t,i,s,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ei.x),l.addScaledVector(o,ei.y),l.addScaledVector(a,ei.z),l)}static isFrontFacing(e,t,i,s){return Mn.subVectors(i,t),Qn.subVectors(e,t),Mn.cross(Qn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),Mn.cross(Qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,s,r){return uo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),uo=!0),hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}getInterpolation(e,t,i,s,r){return hn.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,r=this.c;let o,a;xs.subVectors(s,i),vs.subVectors(r,i),Qa.subVectors(e,i);const l=xs.dot(Qa),c=vs.dot(Qa);if(l<=0&&c<=0)return t.copy(i);el.subVectors(e,s);const u=xs.dot(el),h=vs.dot(el);if(u>=0&&h<=u)return t.copy(s);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(xs,o);tl.subVectors(e,r);const m=xs.dot(tl),_=vs.dot(tl);if(_>=0&&m<=_)return t.copy(r);const g=m*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(vs,a);const p=u*_-m*h;if(p<=0&&h-u>=0&&m-_>=0)return dh.subVectors(r,s),a=(h-u)/(h-u+(m-_)),t.copy(s).addScaledVector(dh,a);const d=1/(p+g+f);return o=g*d,a=f*d,t.copy(i).addScaledVector(xs,o).addScaledVector(vs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ip={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},ho={h:0,s:0,l:0};function nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class He{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=bc(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+t):i+t-i*t,o=2*i-r;this.r=nl(o,r,e+1/3),this.g=nl(o,r,e),this.b=nl(o,r,e-1/3)}return ot.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=ip[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bs(e.r),this.g=Bs(e.g),this.b=Bs(e.b),this}copyLinearToSRGB(e){return this.r=Wa(e.r),this.g=Wa(e.g),this.b=Wa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return ot.fromWorkingColorSpace(Ht.copy(this),e),Math.round(Ot(Ht.r*255,0,255))*65536+Math.round(Ot(Ht.g*255,0,255))*256+Math.round(Ot(Ht.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.fromWorkingColorSpace(Ht.copy(this),t);const i=Ht.r,s=Ht.g,r=Ht.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ot.workingColorSpace){return ot.fromWorkingColorSpace(Ht.copy(this),t),e.r=Ht.r,e.g=Ht.g,e.b=Ht.b,e}getStyle(e=yt){ot.fromWorkingColorSpace(Ht.copy(this),e);const t=Ht.r,i=Ht.g,s=Ht.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(ho);const i=Pr(_i.h,ho.h,t),s=Pr(_i.s,ho.s,t),r=Pr(_i.l,ho.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ht=new He;He.NAMES=ip;let O0=0;class on extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Tn(),this.name="",this.type="Material",this.blending=Fs,this.side=ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hl,this.blendDst=zl,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=$o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Hl&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==qi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$o&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bi extends on{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new D,fo=new De;class $t{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)fo.fromBufferAttribute(this,t),fo.applyMatrix3(e),this.setXY(t,fo.x,fo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xl&&(e.usage=this.usage),e}}class sp extends $t{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class rp extends $t{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _n extends $t{constructor(e,t,i){super(new Float32Array(e),t,i)}}let F0=0;const ln=new qe,il=new pt,ys=new D,nn=new Xn,hr=new Xn,Lt=new D;class Zt extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:F0++}),this.uuid=Tn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qd(e)?rp:sp)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Je().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=[];for(let i=0,s=e.length;i<s;i++){const r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new _n(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];hr.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(nn.min,hr.min),nn.expandByPoint(Lt),Lt.addVectors(nn.max,hr.max),nn.expandByPoint(Lt)):(nn.expandByPoint(hr.min),nn.expandByPoint(hr.max))}nn.getCenter(i);let s=0;for(let r=0,o=e.count;r<o;r++)Lt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Lt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(ys.fromBufferAttribute(e,c),Lt.add(ys)),s=Math.max(s,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,s=t.position.array,r=t.normal.array,o=t.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $t(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new D,u[R]=new D;const h=new D,f=new D,m=new D,_=new De,g=new De,p=new De,d=new D,M=new D;function v(R,Z,ie){h.fromArray(s,R*3),f.fromArray(s,Z*3),m.fromArray(s,ie*3),_.fromArray(o,R*2),g.fromArray(o,Z*2),p.fromArray(o,ie*2),f.sub(h),m.sub(h),g.sub(_),p.sub(_);const he=1/(g.x*p.y-p.x*g.y);isFinite(he)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(he),M.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(he),c[R].add(d),c[Z].add(d),c[ie].add(d),u[R].add(M),u[Z].add(M),u[ie].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let R=0,Z=E.length;R<Z;++R){const ie=E[R],he=ie.start,N=ie.count;for(let j=he,W=he+N;j<W;j+=3)v(i[j+0],i[j+1],i[j+2])}const L=new D,C=new D,w=new D,q=new D;function b(R){w.fromArray(r,R*3),q.copy(w);const Z=c[R];L.copy(Z),L.sub(w.multiplyScalar(w.dot(Z))).normalize(),C.crossVectors(q,Z);const he=C.dot(u[R])<0?-1:1;l[R*4]=L.x,l[R*4+1]=L.y,l[R*4+2]=L.z,l[R*4+3]=he}for(let R=0,Z=E.length;R<Z;++R){const ie=E[R],he=ie.start,N=ie.count;for(let j=he,W=he+N;j<W;j+=3)b(i[j+0]),b(i[j+1]),b(i[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $t(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),g=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)f[_++]=c[m++]}return new $t(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Zt,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,i);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const f=c[u],m=e(f,i);l.push(m)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,m=h.length;f<m;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ph=new qe,Hi=new Js,po=new jn,mh=new D,Ms=new D,Ss=new D,Es=new D,sl=new D,mo=new D,go=new De,_o=new De,xo=new De,gh=new D,_h=new D,xh=new D,vo=new D,yo=new D;class Vt extends pt{constructor(e=new Zt,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){mo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(sl.fromBufferAttribute(h,e),o?mo.addScaledVector(sl,u):mo.addScaledVector(sl.sub(t),u))}t.add(mo)}return t}raycast(e,t){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),po.copy(i.boundingSphere),po.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(po.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(po,mh)===null||Hi.origin.distanceToSquared(mh)>(e.far-e.near)**2))&&(ph.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(ph),!(i.boundingBox!==null&&Hi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,L=v;E<L;E+=3){const C=a.getX(E),w=a.getX(E+1),q=a.getX(E+2);s=Mo(this,d,e,i,c,u,h,C,w,q),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const M=a.getX(p),v=a.getX(p+1),E=a.getX(p+2);s=Mo(this,o,e,i,c,u,h,M,v,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],M=Math.max(p.start,m.start),v=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=M,L=v;E<L;E+=3){const C=E,w=E+1,q=E+2;s=Mo(this,d,e,i,c,u,h,C,w,q),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const M=p,v=p+1,E=p+2;s=Mo(this,o,e,i,c,u,h,M,v,E),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function B0(n,e,t,i,s,r,o,a){let l;if(e.side===Qt?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,e.side===ui,a),l===null)return null;yo.copy(a),yo.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(yo);return c<t.near||c>t.far?null:{distance:c,point:yo.clone(),object:n}}function Mo(n,e,t,i,s,r,o,a,l,c){n.getVertexPosition(a,Ms),n.getVertexPosition(l,Ss),n.getVertexPosition(c,Es);const u=B0(n,e,t,i,Ms,Ss,Es,vo);if(u){s&&(go.fromBufferAttribute(s,a),_o.fromBufferAttribute(s,l),xo.fromBufferAttribute(s,c),u.uv=hn.getInterpolation(vo,Ms,Ss,Es,go,_o,xo,new De)),r&&(go.fromBufferAttribute(r,a),_o.fromBufferAttribute(r,l),xo.fromBufferAttribute(r,c),u.uv1=hn.getInterpolation(vo,Ms,Ss,Es,go,_o,xo,new De),u.uv2=u.uv1),o&&(gh.fromBufferAttribute(o,a),_h.fromBufferAttribute(o,l),xh.fromBufferAttribute(o,c),u.normal=hn.getInterpolation(vo,Ms,Ss,Es,gh,_h,xh,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new D,materialIndex:0};hn.getNormal(Ms,Ss,Es,h.normal),u.face=h}return u}class Qs extends Zt{constructor(e=1,t=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,t,e,o,r,0),_("z","y","x",1,-1,i,t,-e,o,r,1),_("x","z","y",1,1,e,i,t,s,o,2),_("x","z","y",1,-1,e,i,-t,s,o,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new _n(c,3)),this.setAttribute("normal",new _n(u,3)),this.setAttribute("uv",new _n(h,2));function _(g,p,d,M,v,E,L,C,w,q,b){const R=E/w,Z=L/q,ie=E/2,he=L/2,N=C/2,j=w+1,W=q+1;let ee=0,$=0;const re=new D;for(let oe=0;oe<W;oe++){const pe=oe*Z-he;for(let fe=0;fe<j;fe++){const Q=fe*R-ie;re[g]=Q*M,re[p]=pe*v,re[d]=N,c.push(re.x,re.y,re.z),re[g]=0,re[p]=0,re[d]=C>0?1:-1,u.push(re.x,re.y,re.z),h.push(fe/w),h.push(1-oe/q),ee+=1}}for(let oe=0;oe<q;oe++)for(let pe=0;pe<w;pe++){const fe=f+pe+j*oe,Q=f+pe+j*(oe+1),ce=f+(pe+1)+j*(oe+1),ne=f+(pe+1)+j*oe;l.push(fe,Q,ne),l.push(Q,ce,ne),$+=6}a.addGroup(m,$,b),m+=$,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ys(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function qt(n){const e={};for(let t=0;t<n.length;t++){const i=Ys(n[t]);for(const s in i)e[s]=i[s]}return e}function H0(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function op(n){return n.getRenderTarget()===null?n.outputColorSpace:ot.workingColorSpace}const z0={clone:Ys,merge:qt};var k0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ss extends on{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=k0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ys(e.uniforms),this.uniformsGroups=H0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ap extends pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=ci}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Gt extends ap{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const bs=-90,Ts=1;class V0 extends pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(bs,Ts,e,t);s.layers=this.layers,this.add(s);const r=new Gt(bs,Ts,e,t);r.layers=this.layers,this.add(r);const o=new Gt(bs,Ts,e,t);o.layers=this.layers,this.add(o);const a=new Gt(bs,Ts,e,t);a.layers=this.layers,this.add(a);const l=new Gt(bs,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Gt(bs,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===ci)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ta)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,o),e.setRenderTarget(i,2,s),e.render(t,a),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,s),e.render(t,u),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class lp extends Tt{constructor(e,t,i,s,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Gs,super(e,t,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class W0 extends is{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];t.encoding!==void 0&&(Dr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ts?yt:pn),this.texture=new lp(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Jt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Qs(5,5,5),r=new ss({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qt,blending:Ci});r.uniforms.tEquirect.value=t;const o=new Vt(s,r),a=t.minFilter;return t.minFilter===ns&&(t.minFilter=Jt),new V0(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,s);e.setRenderTarget(r)}}const rl=new D,X0=new D,j0=new Je;class Mi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=rl.subVectors(i,t).cross(X0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(rl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||j0.getNormalMatrix(e),s=this.coplanarPoint(rl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new jn,So=new D;class Ac{constructor(e=new Mi,t=new Mi,i=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,i,s,r,o]}set(e,t,i,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ci){const i=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],d=s[12],M=s[13],v=s[14],E=s[15];if(i[0].setComponents(l-r,f-c,p-m,E-d).normalize(),i[1].setComponents(l+r,f+c,p+m,E+d).normalize(),i[2].setComponents(l+o,f+u,p+_,E+M).normalize(),i[3].setComponents(l-o,f-u,p-_,E-M).normalize(),i[4].setComponents(l-a,f-h,p-g,E-v).normalize(),t===ci)i[5].setComponents(l+a,f+h,p+g,E+v).normalize();else if(t===ta)i[5].setComponents(a,h,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(So.x=s.normal.x>0?e.max.x:e.min.x,So.y=s.normal.y>0?e.max.y:e.min.y,So.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(So)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cp(){let n=null,e=!1,t=null,i=null;function s(r,o){t(r,o),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function q0(n,e){const t=e.isWebGL2,i=new WeakMap;function s(c,u){const h=c.array,f=c.usage,m=h.byteLength,_=n.createBuffer();n.bindBuffer(u,_),n.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=n.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=n.SHORT;else if(h instanceof Uint32Array)g=n.UNSIGNED_INT;else if(h instanceof Int32Array)g=n.INT;else if(h instanceof Int8Array)g=n.BYTE;else if(h instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,h){const f=u.array,m=u._updateRange,_=u.updateRanges;if(n.bindBuffer(h,c),m.count===-1&&_.length===0&&n.bufferSubData(h,0,f),_.length!==0){for(let g=0,p=_.length;g<p;g++){const d=_[g];t?n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(h,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}u.clearUpdateRanges()}m.count!==-1&&(t?n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,s(c,u));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,u),h.version=c.version}}return{get:o,remove:a,update:l}}class wc extends Zt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=e/a,f=t/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const M=d*f-o;for(let v=0;v<c;v++){const E=v*h-r;_.push(E,-M,0),g.push(0,0,1),p.push(v/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let M=0;M<a;M++){const v=M+c*d,E=M+c*(d+1),L=M+1+c*(d+1),C=M+1+c*d;m.push(v,E,C),m.push(E,L,C)}this.setIndex(m),this.setAttribute("position",new _n(_,3)),this.setAttribute("normal",new _n(g,3)),this.setAttribute("uv",new _n(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wc(e.width,e.height,e.widthSegments,e.heightSegments)}}var Y0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,K0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,$0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Z0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,J0=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ox=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ax=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,lx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ux=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,_x=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,vx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,yx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ex=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ax=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,wx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Rx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Px=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ix=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ux=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Ox=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Fx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Hx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,kx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Gx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,qx=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Yx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Kx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$x=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jx=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ev=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,tv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ov=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,cv=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,hv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,_v=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Cv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Lv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Dv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Iv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uv=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Nv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ov=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Fv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Hv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kv=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Gv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,jv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$v=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ey=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ty=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ny=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,oy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ay=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hy=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,my=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_y=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,xy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,My=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ey=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,by=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ty=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ay=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ye={alphahash_fragment:Y0,alphahash_pars_fragment:K0,alphamap_fragment:$0,alphamap_pars_fragment:Z0,alphatest_fragment:J0,alphatest_pars_fragment:Q0,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ox,iridescence_fragment:ax,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:ux,clipping_planes_pars_vertex:hx,clipping_planes_vertex:fx,color_fragment:dx,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:_x,cube_uv_reflection_fragment:xx,defaultnormal_vertex:vx,displacementmap_pars_vertex:yx,displacementmap_vertex:Mx,emissivemap_fragment:Sx,emissivemap_pars_fragment:Ex,colorspace_fragment:bx,colorspace_pars_fragment:Tx,envmap_fragment:Ax,envmap_common_pars_fragment:wx,envmap_pars_fragment:Rx,envmap_pars_vertex:Cx,envmap_physical_pars_fragment:kx,envmap_vertex:Lx,fog_vertex:Px,fog_pars_vertex:Dx,fog_fragment:Ix,fog_pars_fragment:Ux,gradientmap_pars_fragment:Nx,lightmap_fragment:Ox,lightmap_pars_fragment:Fx,lights_lambert_fragment:Bx,lights_lambert_pars_fragment:Hx,lights_pars_begin:zx,lights_toon_fragment:Gx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Wx,lights_phong_pars_fragment:Xx,lights_physical_fragment:jx,lights_physical_pars_fragment:qx,lights_fragment_begin:Yx,lights_fragment_maps:Kx,lights_fragment_end:$x,logdepthbuf_fragment:Zx,logdepthbuf_pars_fragment:Jx,logdepthbuf_pars_vertex:Qx,logdepthbuf_vertex:ev,map_fragment:tv,map_pars_fragment:nv,map_particle_fragment:iv,map_particle_pars_fragment:sv,metalnessmap_fragment:rv,metalnessmap_pars_fragment:ov,morphcolor_vertex:av,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:uv,normal_fragment_begin:hv,normal_fragment_maps:fv,normal_pars_fragment:dv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:_v,clearcoat_normal_fragment_maps:xv,clearcoat_pars_fragment:vv,iridescence_pars_fragment:yv,opaque_fragment:Mv,packing:Sv,premultiplied_alpha_fragment:Ev,project_vertex:bv,dithering_fragment:Tv,dithering_pars_fragment:Av,roughnessmap_fragment:wv,roughnessmap_pars_fragment:Rv,shadowmap_pars_fragment:Cv,shadowmap_pars_vertex:Lv,shadowmap_vertex:Pv,shadowmask_pars_fragment:Dv,skinbase_vertex:Iv,skinning_pars_vertex:Uv,skinning_vertex:Nv,skinnormal_vertex:Ov,specularmap_fragment:Fv,specularmap_pars_fragment:Bv,tonemapping_fragment:Hv,tonemapping_pars_fragment:zv,transmission_fragment:kv,transmission_pars_fragment:Gv,uv_pars_fragment:Vv,uv_pars_vertex:Wv,uv_vertex:Xv,worldpos_vertex:jv,background_vert:qv,background_frag:Yv,backgroundCube_vert:Kv,backgroundCube_frag:$v,cube_vert:Zv,cube_frag:Jv,depth_vert:Qv,depth_frag:ey,distanceRGBA_vert:ty,distanceRGBA_frag:ny,equirect_vert:iy,equirect_frag:sy,linedashed_vert:ry,linedashed_frag:oy,meshbasic_vert:ay,meshbasic_frag:ly,meshlambert_vert:cy,meshlambert_frag:uy,meshmatcap_vert:hy,meshmatcap_frag:fy,meshnormal_vert:dy,meshnormal_frag:py,meshphong_vert:my,meshphong_frag:gy,meshphysical_vert:_y,meshphysical_frag:xy,meshtoon_vert:vy,meshtoon_frag:yy,points_vert:My,points_frag:Sy,shadow_vert:Ey,shadow_frag:by,sprite_vert:Ty,sprite_frag:Ay},Se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},Nn={basic:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:qt([Se.common,Se.specularmap,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,Se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:qt([Se.common,Se.envmap,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.roughnessmap,Se.metalnessmap,Se.fog,Se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:qt([Se.common,Se.aomap,Se.lightmap,Se.emissivemap,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.gradientmap,Se.fog,Se.lights,{emissive:{value:new He(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,Se.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:qt([Se.points,Se.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:qt([Se.common,Se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:qt([Se.common,Se.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:qt([Se.common,Se.bumpmap,Se.normalmap,Se.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:qt([Se.sprite,Se.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:qt([Se.common,Se.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:qt([Se.lights,Se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Nn.physical={uniforms:qt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Eo={r:0,b:0,g:0};function wy(n,e,t,i,s,r,o){const a=new He(0);let l=r===!0?0:1,c,u,h=null,f=0,m=null;function _(p,d){let M=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?g(a,l):v&&v.isColor&&(g(v,1),M=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===pa)?(u===void 0&&(u=new Vt(new Qs(1,1,1),new ss({name:"BackgroundCubeMaterial",uniforms:Ys(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=ot.getTransfer(v.colorSpace)!==dt,(h!==v||f!==v.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Vt(new wc(2,2),new ss({name:"BackgroundMaterial",uniforms:Ys(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:ui,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ot.getTransfer(v.colorSpace)!==dt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function g(p,d){p.getRGB(Eo,op(n)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function Ry(n,e,t,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let c=l,u=!1;function h(N,j,W,ee,$){let re=!1;if(o){const oe=g(ee,W,j);c!==oe&&(c=oe,m(c.object)),re=d(N,ee,W,$),re&&M(N,ee,W,$)}else{const oe=j.wireframe===!0;(c.geometry!==ee.id||c.program!==W.id||c.wireframe!==oe)&&(c.geometry=ee.id,c.program=W.id,c.wireframe=oe,re=!0)}$!==null&&t.update($,n.ELEMENT_ARRAY_BUFFER),(re||u)&&(u=!1,q(N,j,W,ee),$!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get($).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):r.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):r.deleteVertexArrayOES(N)}function g(N,j,W){const ee=W.wireframe===!0;let $=a[N.id];$===void 0&&($={},a[N.id]=$);let re=$[j.id];re===void 0&&(re={},$[j.id]=re);let oe=re[ee];return oe===void 0&&(oe=p(f()),re[ee]=oe),oe}function p(N){const j=[],W=[],ee=[];for(let $=0;$<s;$++)j[$]=0,W[$]=0,ee[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:W,attributeDivisors:ee,object:N,attributes:{},index:null}}function d(N,j,W,ee){const $=c.attributes,re=j.attributes;let oe=0;const pe=W.getAttributes();for(const fe in pe)if(pe[fe].location>=0){const ce=$[fe];let ne=re[fe];if(ne===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),ce===void 0||ce.attribute!==ne||ne&&ce.data!==ne.data)return!0;oe++}return c.attributesNum!==oe||c.index!==ee}function M(N,j,W,ee){const $={},re=j.attributes;let oe=0;const pe=W.getAttributes();for(const fe in pe)if(pe[fe].location>=0){let ce=re[fe];ce===void 0&&(fe==="instanceMatrix"&&N.instanceMatrix&&(ce=N.instanceMatrix),fe==="instanceColor"&&N.instanceColor&&(ce=N.instanceColor));const ne={};ne.attribute=ce,ce&&ce.data&&(ne.data=ce.data),$[fe]=ne,oe++}c.attributes=$,c.attributesNum=oe,c.index=ee}function v(){const N=c.newAttributes;for(let j=0,W=N.length;j<W;j++)N[j]=0}function E(N){L(N,0)}function L(N,j){const W=c.newAttributes,ee=c.enabledAttributes,$=c.attributeDivisors;W[N]=1,ee[N]===0&&(n.enableVertexAttribArray(N),ee[N]=1),$[N]!==j&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,j),$[N]=j)}function C(){const N=c.newAttributes,j=c.enabledAttributes;for(let W=0,ee=j.length;W<ee;W++)j[W]!==N[W]&&(n.disableVertexAttribArray(W),j[W]=0)}function w(N,j,W,ee,$,re,oe){oe===!0?n.vertexAttribIPointer(N,j,W,$,re):n.vertexAttribPointer(N,j,W,ee,$,re)}function q(N,j,W,ee){if(i.isWebGL2===!1&&(N.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const $=ee.attributes,re=W.getAttributes(),oe=j.defaultAttributeValues;for(const pe in re){const fe=re[pe];if(fe.location>=0){let Q=$[pe];if(Q===void 0&&(pe==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),pe==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){const ce=Q.normalized,ne=Q.itemSize,V=t.get(Q);if(V===void 0)continue;const te=V.buffer,ye=V.type,Re=V.bytesPerElement,Ce=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||Q.gpuType===Gd);if(Q.isInterleavedBufferAttribute){const A=Q.data,S=A.stride,z=Q.offset;if(A.isInstancedInterleavedBuffer){for(let k=0;k<fe.locationSize;k++)L(fe.location+k,A.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let k=0;k<fe.locationSize;k++)E(fe.location+k);n.bindBuffer(n.ARRAY_BUFFER,te);for(let k=0;k<fe.locationSize;k++)w(fe.location+k,ne/fe.locationSize,ye,ce,S*Re,(z+ne/fe.locationSize*k)*Re,Ce)}else{if(Q.isInstancedBufferAttribute){for(let A=0;A<fe.locationSize;A++)L(fe.location+A,Q.meshPerAttribute);N.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let A=0;A<fe.locationSize;A++)E(fe.location+A);n.bindBuffer(n.ARRAY_BUFFER,te);for(let A=0;A<fe.locationSize;A++)w(fe.location+A,ne/fe.locationSize,ye,ce,ne*Re,ne/fe.locationSize*A*Re,Ce)}}else if(oe!==void 0){const ce=oe[pe];if(ce!==void 0)switch(ce.length){case 2:n.vertexAttrib2fv(fe.location,ce);break;case 3:n.vertexAttrib3fv(fe.location,ce);break;case 4:n.vertexAttrib4fv(fe.location,ce);break;default:n.vertexAttrib1fv(fe.location,ce)}}}}C()}function b(){ie();for(const N in a){const j=a[N];for(const W in j){const ee=j[W];for(const $ in ee)_(ee[$].object),delete ee[$];delete j[W]}delete a[N]}}function R(N){if(a[N.id]===void 0)return;const j=a[N.id];for(const W in j){const ee=j[W];for(const $ in ee)_(ee[$].object),delete ee[$];delete j[W]}delete a[N.id]}function Z(N){for(const j in a){const W=a[j];if(W[N.id]===void 0)continue;const ee=W[N.id];for(const $ in ee)_(ee[$].object),delete ee[$];delete W[N.id]}}function ie(){he(),u=!0,c!==l&&(c=l,m(c.object))}function he(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ie,resetDefaultState:he,dispose:b,releaseStatesOfGeometry:R,releaseStatesOfProgram:Z,initAttributes:v,enableAttribute:E,disableUnusedAttributes:C}}function Cy(n,e,t,i){const s=i.isWebGL2;let r;function o(u){r=u}function a(u,h){n.drawArrays(r,u,h),t.update(h,r,1)}function l(u,h,f){if(f===0)return;let m,_;if(s)m=n,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,h,f),t.update(h,r,f)}function c(u,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(u[_],h[_]);else{m.multiDrawArraysWEBGL(r,u,0,h,0,f);let _=0;for(let g=0;g<f;g++)_+=h[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Ly(n,e,t){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,E=o||e.has("OES_texture_float"),L=v&&E,C=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:E,floatVertexTextures:L,maxSamples:C}}function Py(n){const e=this;let t=null,i=0,s=!1,r=!1;const o=new Mi,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||s;return s=f,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,g=h.clipIntersection,p=h.clipShadows,d=n.get(h);if(!s||_===null||_.length===0||r&&!p)r?u(null):c();else{const M=r?0:i,v=M*4;let E=d.clippingState||null;l.value=E,E=u(_,f,v,m);for(let L=0;L!==v;++L)E[L]=t[L];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,m,_){const g=h!==null?h.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,E=m;v!==g;++v,E+=4)o.copy(h[v]).applyMatrix4(M,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Dy(n){let e=new WeakMap;function t(o,a){return a===kl?o.mapping=Gs:a===Gl&&(o.mapping=Vs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===kl||a===Gl)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new W0(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}class Rc extends ap{constructor(e=-1,t=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-e,o=i+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Us=4,vh=[.125,.215,.35,.446,.526,.582],Yi=20,ol=new Rc,yh=new He;let al=null,ll=0,cl=0;const Wi=(1+Math.sqrt(5))/2,As=1/Wi,Mh=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Wi,As),new D(0,Wi,-As),new D(As,0,Wi),new D(-As,0,Wi),new D(Wi,As,0),new D(-Wi,As,0)];class Sh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Th(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(al,ll,cl),e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Gr,format:dn,colorSpace:It,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Iy(r)),this._blurMaterial=Uy(r,e,t)}return s}_compileMaterial(e){const t=new Vt(this._lodPlanes[0],e);this._renderer.compile(t,ol)}_sceneToCubeUV(e,t,i,s){const a=new Gt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(yh),u.toneMapping=Li,u.autoClear=!1;const m=new bi({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1}),_=new Vt(new Qs,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(yh),g=!0);for(let d=0;d<6;d++){const M=d%3;M===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):M===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const v=this._cubeSize;bo(s,M*v,d>2?v:0,v,v),u.setRenderTarget(s),g&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===Gs||e.mapping===Vs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Th()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bh());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;bo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,ol)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Mh[(s-1)%Mh.length];this._blur(e,s-1,s,r,o)}t.autoClear=i}_blur(e,t,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,s,"latitudinal",r),this._halfBlur(o,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Vt(this._lodPlanes[s],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Yi-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Yi;p>Yi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Yi}`);const d=[];let M=0;for(let w=0;w<Yi;++w){const q=w/g,b=Math.exp(-q*q/2);d.push(b),w===0?M+=b:w<p&&(M+=2*b)}for(let w=0;w<d.length;w++)d[w]=d[w]/M;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const E=this._sizeLods[s],L=3*E*(s>v-Us?s-v+Us:0),C=4*(this._cubeSize-E);bo(t,L,C,3*E,2*E),l.setRenderTarget(t),l.render(h,ol)}}function Iy(n){const e=[],t=[],i=[];let s=n;const r=n-Us+1+vh.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>n-Us?l=vh[o-n+Us-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,_=6,g=3,p=2,d=1,M=new Float32Array(g*_*m),v=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let C=0;C<m;C++){const w=C%3*2/3-1,q=C>2?0:-1,b=[w,q,0,w+2/3,q,0,w+2/3,q+1,0,w,q,0,w+2/3,q+1,0,w,q+1,0];M.set(b,g*_*C),v.set(f,p*_*C);const R=[C,C,C,C,C,C];E.set(R,d*_*C)}const L=new Zt;L.setAttribute("position",new $t(M,g)),L.setAttribute("uv",new $t(v,p)),L.setAttribute("faceIndex",new $t(E,d)),e.push(L),s>Us&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Eh(n,e,t){const i=new is(n,e,t);return i.texture.mapping=pa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function bo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Uy(n,e,t){const i=new Float32Array(Yi),s=new D(0,1,0);return new ss({name:"SphericalGaussianBlur",defines:{n:Yi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function bh(){return new ss({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Th(){return new ss({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ny(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===kl||l===Gl,u=l===Gs||l===Vs;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new Sh(n)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{const h=a.image;if(c&&h&&h.height>0||u&&h&&s(h)){t===null&&(t=new Sh(n));const f=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function Oy(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const s=t(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Fy(n,e,t,i){const s={},r=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)e.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(e.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)e.update(g[p],n.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let g=0;if(m!==null){const M=m.array;g=m.version;for(let v=0,E=M.length;v<E;v+=3){const L=M[v+0],C=M[v+1],w=M[v+2];f.push(L,C,C,w,w,L)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,E=M.length/3-1;v<E;v+=3){const L=v+0,C=v+1,w=v+2;f.push(L,C,C,w,w,L)}}else return;const p=new(Qd(f)?rp:sp)(f,1);p.version=g;const d=r.get(h);d&&e.remove(d),r.set(h,p)}function u(h){const f=r.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function By(n,e,t,i){const s=i.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function u(m,_){n.drawElements(r,_,a,m*l),t.update(_,r,1)}function h(m,_,g){if(g===0)return;let p,d;if(s)p=n,d="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,_,a,m*l,g),t.update(_,r,g)}function f(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<g;d++)this.render(m[d]/l,_[d]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let d=0;for(let M=0;M<g;M++)d+=_[M];t.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Hy(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(r/3);break;case n.LINES:t.lines+=a*(r/2);break;case n.LINE_STRIP:t.lines+=a*(r-1);break;case n.LINE_LOOP:t.lines+=a*r;break;case n.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function zy(n,e){return n[0]-e[0]}function ky(n,e){return Math.abs(e[1])-Math.abs(n[1])}function Gy(n,e,t){const i={},s=new Float32Array(8),r=new WeakMap,o=new ht,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let j=function(){he.dispose(),r.delete(u),u.removeEventListener("dispose",j)};var m=j;p!==void 0&&p.texture.dispose();const v=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,L=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],q=u.morphAttributes.color||[];let b=0;v===!0&&(b=1),E===!0&&(b=2),L===!0&&(b=3);let R=u.attributes.position.count*b,Z=1;R>e.maxTextureSize&&(Z=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const ie=new Float32Array(R*Z*4*g),he=new np(ie,R,Z,g);he.type=li,he.needsUpdate=!0;const N=b*4;for(let W=0;W<g;W++){const ee=C[W],$=w[W],re=q[W],oe=R*Z*4*W;for(let pe=0;pe<ee.count;pe++){const fe=pe*N;v===!0&&(o.fromBufferAttribute(ee,pe),ie[oe+fe+0]=o.x,ie[oe+fe+1]=o.y,ie[oe+fe+2]=o.z,ie[oe+fe+3]=0),E===!0&&(o.fromBufferAttribute($,pe),ie[oe+fe+4]=o.x,ie[oe+fe+5]=o.y,ie[oe+fe+6]=o.z,ie[oe+fe+7]=0),L===!0&&(o.fromBufferAttribute(re,pe),ie[oe+fe+8]=o.x,ie[oe+fe+9]=o.y,ie[oe+fe+10]=o.z,ie[oe+fe+11]=re.itemSize===4?o.w:1)}}p={count:g,texture:he,size:new De(R,Z)},r.set(u,p),u.addEventListener("dispose",j)}let d=0;for(let v=0;v<f.length;v++)d+=f[v];const M=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(n,"morphTargetBaseInfluence",M),h.getUniforms().setValue(n,"morphTargetInfluences",f),h.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];i[u.id]=g}for(let E=0;E<_;E++){const L=g[E];L[0]=E,L[1]=f[E]}g.sort(ky);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(zy);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const L=a[E],C=L[0],w=L[1];C!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+E)!==p[C]&&u.setAttribute("morphTarget"+E,p[C]),d&&u.getAttribute("morphNormal"+E)!==d[C]&&u.setAttribute("morphNormal"+E,d[C]),s[E]=w,M+=w):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const v=u.morphTargetsRelative?1:1-M;h.getUniforms().setValue(n,"morphTargetBaseInfluence",v),h.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Vy(n,e,t,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(s.get(h)!==c&&(e.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class up extends Tt{constructor(e,t,i,s,r,o,a,l,c,u){if(u=u!==void 0?u:es,u!==es&&u!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===es&&(i=Ei),i===void 0&&u===Xs&&(i=Qi),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Dt,this.minFilter=l!==void 0?l:Dt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hp=new Tt,fp=new up(1,1);fp.compareFunction=Zd;const dp=new np,pp=new w0,mp=new lp,Ah=[],wh=[],Rh=new Float32Array(16),Ch=new Float32Array(9),Lh=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let r=Ah[s];if(r===void 0&&(r=new Float32Array(s),Ah[s]=r),e!==0){i.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(r,a)}return r}function wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Rt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function _a(n,e){let t=wh[e];t===void 0&&(t=new Int32Array(e),wh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Wy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Xy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2fv(this.addr,e),Rt(t,e)}}function jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;n.uniform3fv(this.addr,e),Rt(t,e)}}function qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4fv(this.addr,e),Rt(t,e)}}function Yy(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Lh.set(i),n.uniformMatrix2fv(this.addr,!1,Lh),Rt(t,i)}}function Ky(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Ch.set(i),n.uniformMatrix3fv(this.addr,!1,Ch),Rt(t,i)}}function $y(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(wt(t,i))return;Rh.set(i),n.uniformMatrix4fv(this.addr,!1,Rh),Rt(t,i)}}function Zy(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Jy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2iv(this.addr,e),Rt(t,e)}}function Qy(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3iv(this.addr,e),Rt(t,e)}}function eM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4iv(this.addr,e),Rt(t,e)}}function tM(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function nM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;n.uniform2uiv(this.addr,e),Rt(t,e)}}function iM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;n.uniform3uiv(this.addr,e),Rt(t,e)}}function sM(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;n.uniform4uiv(this.addr,e),Rt(t,e)}}function rM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);const r=this.type===n.SAMPLER_2D_SHADOW?fp:hp;t.setTexture2D(e||r,s)}function oM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||pp,s)}function aM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||mp,s)}function lM(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dp,s)}function cM(n){switch(n){case 5126:return Wy;case 35664:return Xy;case 35665:return jy;case 35666:return qy;case 35674:return Yy;case 35675:return Ky;case 35676:return $y;case 5124:case 35670:return Zy;case 35667:case 35671:return Jy;case 35668:case 35672:return Qy;case 35669:case 35673:return eM;case 5125:return tM;case 36294:return nM;case 36295:return iM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return rM;case 35679:case 36299:case 36307:return oM;case 35680:case 36300:case 36308:case 36293:return aM;case 36289:case 36303:case 36311:case 36292:return lM}}function uM(n,e){n.uniform1fv(this.addr,e)}function hM(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function fM(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function dM(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function pM(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function mM(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function gM(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function _M(n,e){n.uniform1iv(this.addr,e)}function xM(n,e){n.uniform2iv(this.addr,e)}function vM(n,e){n.uniform3iv(this.addr,e)}function yM(n,e){n.uniform4iv(this.addr,e)}function MM(n,e){n.uniform1uiv(this.addr,e)}function SM(n,e){n.uniform2uiv(this.addr,e)}function EM(n,e){n.uniform3uiv(this.addr,e)}function bM(n,e){n.uniform4uiv(this.addr,e)}function TM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hp,r[o])}function AM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||pp,r[o])}function wM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||mp,r[o])}function RM(n,e,t){const i=this.cache,s=e.length,r=_a(t,s);wt(i,r)||(n.uniform1iv(this.addr,r),Rt(i,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dp,r[o])}function CM(n){switch(n){case 5126:return uM;case 35664:return hM;case 35665:return fM;case 35666:return dM;case 35674:return pM;case 35675:return mM;case 35676:return gM;case 5124:case 35670:return _M;case 35667:case 35671:return xM;case 35668:case 35672:return vM;case 35669:case 35673:return yM;case 5125:return MM;case 36294:return SM;case 36295:return EM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return TM;case 35679:case 36299:case 36307:return AM;case 35680:case 36300:case 36308:case 36293:return wM;case 36289:case 36303:case 36311:case 36292:return RM}}class LM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=cM(t.type)}}class PM{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=CM(t.type)}}class DM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],i)}}}const ul=/(\w+)(\])?(\[|\.)?/g;function Ph(n,e){n.seq.push(e),n.map[e.id]=e}function IM(n,e,t){const i=n.name,s=i.length;for(ul.lastIndex=0;;){const r=ul.exec(i),o=ul.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Ph(t,c===void 0?new LM(a,n,e):new PM(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new DM(a),Ph(t,h)),t=h}}}class zo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);IM(r,o,this)}}setValue(e,t,i,s){const r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&i.push(o)}return i}}function Dh(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const UM=37297;let NM=0;function OM(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function FM(n){const e=ot.getPrimaries(ot.workingColorSpace),t=ot.getPrimaries(n);let i;switch(e===t?i="":e===ea&&t===Qo?i="LinearDisplayP3ToLinearSRGB":e===Qo&&t===ea&&(i="LinearSRGBToLinearDisplayP3"),n){case It:case ga:return[i,"LinearTransferOETF"];case yt:case Ec:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ih(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+OM(n.getShaderSource(e),o)}else return s}function BM(n,e){const t=FM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function HM(n,e){let t;switch(e){case N_:t="Linear";break;case O_:t="Reinhard";break;case F_:t="OptimizedCineon";break;case B_:t="ACESFilmic";break;case z_:t="AgX";break;case H_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zM(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ns).join(`
`)}function kM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ns).join(`
`)}function GM(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function VM(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(e,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ns(n){return n!==""}function Uh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const WM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yl(n){return n.replace(WM,jM)}const XM=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function jM(n,e){let t=Ye[e];if(t===void 0){const i=XM.get(e);if(i!==void 0)t=Ye[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Yl(t)}const qM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Oh(n){return n.replace(qM,YM)}function YM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function KM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Hd?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===c_?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function $M(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case pa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ZM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function JM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Mc:e="ENVMAP_BLENDING_MULTIPLY";break;case I_:e="ENVMAP_BLENDING_MIX";break;case U_:e="ENVMAP_BLENDING_ADD";break}return e}function QM(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function eS(n,e,t,i){const s=n.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=KM(t),c=$M(t),u=ZM(t),h=JM(t),f=QM(t),m=t.isWebGL2?"":zM(t),_=kM(t),g=GM(r),p=s.createProgram();let d,M,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),d.length>0&&(d+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ns).join(`
`),M.length>0&&(M+=`
`)):(d=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),M=[m,Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Li?"#define TONE_MAPPING":"",t.toneMapping!==Li?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Li?HM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,BM("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),o=Yl(o),o=Uh(o,t),o=Nh(o,t),a=Yl(a),a=Uh(a,t),a=Nh(a,t),o=Oh(o),a=Oh(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===th?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===th?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=v+d+o,L=v+M+a,C=Dh(s,s.VERTEX_SHADER,E),w=Dh(s,s.FRAGMENT_SHADER,L);s.attachShader(p,C),s.attachShader(p,w),t.index0AttributeName!==void 0?s.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function q(ie){if(n.debug.checkShaderErrors){const he=s.getProgramInfoLog(p).trim(),N=s.getShaderInfoLog(C).trim(),j=s.getShaderInfoLog(w).trim();let W=!0,ee=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(W=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,C,w);else{const $=Ih(s,C,"vertex"),re=Ih(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+he+`
`+$+`
`+re)}else he!==""?console.warn("THREE.WebGLProgram: Program Info Log:",he):(N===""||j==="")&&(ee=!1);ee&&(ie.diagnostics={runnable:W,programLog:he,vertexShader:{log:N,prefix:d},fragmentShader:{log:j,prefix:M}})}s.deleteShader(C),s.deleteShader(w),b=new zo(s,p),R=VM(s,p)}let b;this.getUniforms=function(){return b===void 0&&q(this),b};let R;this.getAttributes=function(){return R===void 0&&q(this),R};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=s.getProgramParameter(p,UM)),Z},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=NM++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=C,this.fragmentShader=w,this}let tS=0;class nS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new iS(e),t.set(e,i)),i}}class iS{constructor(e){this.id=tS++,this.code=e,this.usedTimes=0}}function sS(n,e,t,i,s,r,o){const a=new Tc,l=new nS,c=[],u=s.isWebGL2,h=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b){return b===0?"uv":`uv${b}`}function p(b,R,Z,ie,he){const N=ie.fog,j=he.geometry,W=b.isMeshStandardMaterial?ie.environment:null,ee=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),$=ee&&ee.mapping===pa?ee.image.height:null,re=_[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const oe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,pe=oe!==void 0?oe.length:0;let fe=0;j.morphAttributes.position!==void 0&&(fe=1),j.morphAttributes.normal!==void 0&&(fe=2),j.morphAttributes.color!==void 0&&(fe=3);let Q,ce,ne,V;if(re){const Mt=Nn[re];Q=Mt.vertexShader,ce=Mt.fragmentShader}else Q=b.vertexShader,ce=b.fragmentShader,l.update(b),ne=l.getVertexShaderID(b),V=l.getFragmentShaderID(b);const te=n.getRenderTarget(),ye=he.isInstancedMesh===!0,Re=he.isBatchedMesh===!0,Ce=!!b.map,A=!!b.matcap,S=!!ee,z=!!b.aoMap,k=!!b.lightMap,H=!!b.bumpMap,F=!!b.normalMap,le=!!b.displacementMap,se=!!b.emissiveMap,y=!!b.metalnessMap,x=!!b.roughnessMap,U=b.anisotropy>0,O=b.clearcoat>0,G=b.iridescence>0,Y=b.sheen>0,ge=b.transmission>0,ue=U&&!!b.anisotropyMap,me=O&&!!b.clearcoatMap,be=O&&!!b.clearcoatNormalMap,Le=O&&!!b.clearcoatRoughnessMap,ae=G&&!!b.iridescenceMap,Ve=G&&!!b.iridescenceThicknessMap,Ne=Y&&!!b.sheenColorMap,Oe=Y&&!!b.sheenRoughnessMap,Te=!!b.specularMap,Me=!!b.specularColorMap,P=!!b.specularIntensityMap,_e=ge&&!!b.transmissionMap,Pe=ge&&!!b.thicknessMap,we=!!b.gradientMap,de=!!b.alphaMap,I=b.alphaTest>0,ve=!!b.alphaHash,Ee=!!b.extensions,Fe=!!j.attributes.uv1,Ue=!!j.attributes.uv2,Qe=!!j.attributes.uv3;let et=Li;return b.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(et=n.toneMapping),{isWebGL2:u,shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Q,fragmentShader:ce,defines:b.defines,customVertexShaderID:ne,customFragmentShaderID:V,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Re,instancing:ye,instancingColor:ye&&he.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:It,map:Ce,matcap:A,envMap:S,envMapMode:S&&ee.mapping,envMapCubeUVHeight:$,aoMap:z,lightMap:k,bumpMap:H,normalMap:F,displacementMap:f&&le,emissiveMap:se,normalMapObjectSpace:F&&b.normalMapType===e0,normalMapTangentSpace:F&&b.normalMapType===ma,metalnessMap:y,roughnessMap:x,anisotropy:U,anisotropyMap:ue,clearcoat:O,clearcoatMap:me,clearcoatNormalMap:be,clearcoatRoughnessMap:Le,iridescence:G,iridescenceMap:ae,iridescenceThicknessMap:Ve,sheen:Y,sheenColorMap:Ne,sheenRoughnessMap:Oe,specularMap:Te,specularColorMap:Me,specularIntensityMap:P,transmission:ge,transmissionMap:_e,thicknessMap:Pe,gradientMap:we,opaque:b.transparent===!1&&b.blending===Fs,alphaMap:de,alphaTest:I,alphaHash:ve,combine:b.combine,mapUv:Ce&&g(b.map.channel),aoMapUv:z&&g(b.aoMap.channel),lightMapUv:k&&g(b.lightMap.channel),bumpMapUv:H&&g(b.bumpMap.channel),normalMapUv:F&&g(b.normalMap.channel),displacementMapUv:le&&g(b.displacementMap.channel),emissiveMapUv:se&&g(b.emissiveMap.channel),metalnessMapUv:y&&g(b.metalnessMap.channel),roughnessMapUv:x&&g(b.roughnessMap.channel),anisotropyMapUv:ue&&g(b.anisotropyMap.channel),clearcoatMapUv:me&&g(b.clearcoatMap.channel),clearcoatNormalMapUv:be&&g(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&g(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ae&&g(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ve&&g(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&g(b.sheenRoughnessMap.channel),specularMapUv:Te&&g(b.specularMap.channel),specularColorMapUv:Me&&g(b.specularColorMap.channel),specularIntensityMapUv:P&&g(b.specularIntensityMap.channel),transmissionMapUv:_e&&g(b.transmissionMap.channel),thicknessMapUv:Pe&&g(b.thicknessMap.channel),alphaMapUv:de&&g(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(F||U),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:Fe,vertexUv2s:Ue,vertexUv3s:Qe,pointsUvs:he.isPoints===!0&&!!j.attributes.uv&&(Ce||de),fog:!!N,useFog:b.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:he.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:fe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&Z.length>0,shadowMapType:n.shadowMap.type,toneMapping:et,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===dt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===Qt,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:Ee&&b.extensions.derivatives===!0,extensionFragDepth:Ee&&b.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&b.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&b.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Ee&&b.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()}}function d(b){const R=[];if(b.shaderID?R.push(b.shaderID):(R.push(b.customVertexShaderID),R.push(b.customFragmentShaderID)),b.defines!==void 0)for(const Z in b.defines)R.push(Z),R.push(b.defines[Z]);return b.isRawShaderMaterial===!1&&(M(R,b),v(R,b),R.push(n.outputColorSpace)),R.push(b.customProgramCacheKey),R.join()}function M(b,R){b.push(R.precision),b.push(R.outputColorSpace),b.push(R.envMapMode),b.push(R.envMapCubeUVHeight),b.push(R.mapUv),b.push(R.alphaMapUv),b.push(R.lightMapUv),b.push(R.aoMapUv),b.push(R.bumpMapUv),b.push(R.normalMapUv),b.push(R.displacementMapUv),b.push(R.emissiveMapUv),b.push(R.metalnessMapUv),b.push(R.roughnessMapUv),b.push(R.anisotropyMapUv),b.push(R.clearcoatMapUv),b.push(R.clearcoatNormalMapUv),b.push(R.clearcoatRoughnessMapUv),b.push(R.iridescenceMapUv),b.push(R.iridescenceThicknessMapUv),b.push(R.sheenColorMapUv),b.push(R.sheenRoughnessMapUv),b.push(R.specularMapUv),b.push(R.specularColorMapUv),b.push(R.specularIntensityMapUv),b.push(R.transmissionMapUv),b.push(R.thicknessMapUv),b.push(R.combine),b.push(R.fogExp2),b.push(R.sizeAttenuation),b.push(R.morphTargetsCount),b.push(R.morphAttributeCount),b.push(R.numDirLights),b.push(R.numPointLights),b.push(R.numSpotLights),b.push(R.numSpotLightMaps),b.push(R.numHemiLights),b.push(R.numRectAreaLights),b.push(R.numDirLightShadows),b.push(R.numPointLightShadows),b.push(R.numSpotLightShadows),b.push(R.numSpotLightShadowsWithMaps),b.push(R.numLightProbes),b.push(R.shadowMapType),b.push(R.toneMapping),b.push(R.numClippingPlanes),b.push(R.numClipIntersection),b.push(R.depthPacking)}function v(b,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),R.batching&&a.enable(19),b.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),b.push(a.mask)}function E(b){const R=_[b.type];let Z;if(R){const ie=Nn[R];Z=z0.clone(ie.uniforms)}else Z=b.uniforms;return Z}function L(b,R){let Z;for(let ie=0,he=c.length;ie<he;ie++){const N=c[ie];if(N.cacheKey===R){Z=N,++Z.usedTimes;break}}return Z===void 0&&(Z=new eS(n,R,b,r),c.push(Z)),Z}function C(b){if(--b.usedTimes===0){const R=c.indexOf(b);c[R]=c[c.length-1],c.pop(),b.destroy()}}function w(b){l.remove(b)}function q(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:L,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:q}}function rS(){let n=new WeakMap;function e(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function t(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:s}}function oS(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Bh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){const n=[];let e=0;const t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function o(h,f,m,_,g,p){let d=n[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:g,group:p},n[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=h.renderOrder,d.z=g,d.group=p),e++,d}function a(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):t.push(d)}function l(h,f,m,_,g,p){const d=o(h,f,m,_,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||oS),i.length>1&&i.sort(f||Bh),s.length>1&&s.sort(f||Bh)}function u(){for(let h=e,f=n.length;h<f;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function aS(){let n=new WeakMap;function e(i,s){const r=n.get(i);let o;return r===void 0?(o=new Hh,n.set(i,[o])):s>=r.length?(o=new Hh,r.push(o)):o=r[s],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function lS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new He};break;case"SpotLight":t={position:new D,direction:new D,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new D,halfWidth:new D,halfHeight:new D};break}return n[e.id]=t,t}}}function cS(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let uS=0;function hS(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fS(n,e){const t=new lS,i=cS(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new qe,a=new qe;function l(u,h){let f=0,m=0,_=0;for(let ie=0;ie<9;ie++)s.probe[ie].set(0,0,0);let g=0,p=0,d=0,M=0,v=0,E=0,L=0,C=0,w=0,q=0,b=0;u.sort(hS);const R=h===!0?Math.PI:1;for(let ie=0,he=u.length;ie<he;ie++){const N=u[ie],j=N.color,W=N.intensity,ee=N.distance,$=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=j.r*W*R,m+=j.g*W*R,_+=j.b*W*R;else if(N.isLightProbe){for(let re=0;re<9;re++)s.probe[re].addScaledVector(N.sh.coefficients[re],W);b++}else if(N.isDirectionalLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*R),N.castShadow){const oe=N.shadow,pe=i.get(N);pe.shadowBias=oe.bias,pe.shadowNormalBias=oe.normalBias,pe.shadowRadius=oe.radius,pe.shadowMapSize=oe.mapSize,s.directionalShadow[g]=pe,s.directionalShadowMap[g]=$,s.directionalShadowMatrix[g]=N.shadow.matrix,E++}s.directional[g]=re,g++}else if(N.isSpotLight){const re=t.get(N);re.position.setFromMatrixPosition(N.matrixWorld),re.color.copy(j).multiplyScalar(W*R),re.distance=ee,re.coneCos=Math.cos(N.angle),re.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),re.decay=N.decay,s.spot[d]=re;const oe=N.shadow;if(N.map&&(s.spotLightMap[w]=N.map,w++,oe.updateMatrices(N),N.castShadow&&q++),s.spotLightMatrix[d]=oe.matrix,N.castShadow){const pe=i.get(N);pe.shadowBias=oe.bias,pe.shadowNormalBias=oe.normalBias,pe.shadowRadius=oe.radius,pe.shadowMapSize=oe.mapSize,s.spotShadow[d]=pe,s.spotShadowMap[d]=$,C++}d++}else if(N.isRectAreaLight){const re=t.get(N);re.color.copy(j).multiplyScalar(W),re.halfWidth.set(N.width*.5,0,0),re.halfHeight.set(0,N.height*.5,0),s.rectArea[M]=re,M++}else if(N.isPointLight){const re=t.get(N);if(re.color.copy(N.color).multiplyScalar(N.intensity*R),re.distance=N.distance,re.decay=N.decay,N.castShadow){const oe=N.shadow,pe=i.get(N);pe.shadowBias=oe.bias,pe.shadowNormalBias=oe.normalBias,pe.shadowRadius=oe.radius,pe.shadowMapSize=oe.mapSize,pe.shadowCameraNear=oe.camera.near,pe.shadowCameraFar=oe.camera.far,s.pointShadow[p]=pe,s.pointShadowMap[p]=$,s.pointShadowMatrix[p]=N.shadow.matrix,L++}s.point[p]=re,p++}else if(N.isHemisphereLight){const re=t.get(N);re.skyColor.copy(N.color).multiplyScalar(W*R),re.groundColor.copy(N.groundColor).multiplyScalar(W*R),s.hemi[v]=re,v++}}M>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_FLOAT_1,s.rectAreaLTC2=Se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=Se.LTC_HALF_1,s.rectAreaLTC2=Se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const Z=s.hash;(Z.directionalLength!==g||Z.pointLength!==p||Z.spotLength!==d||Z.rectAreaLength!==M||Z.hemiLength!==v||Z.numDirectionalShadows!==E||Z.numPointShadows!==L||Z.numSpotShadows!==C||Z.numSpotMaps!==w||Z.numLightProbes!==b)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=M,s.point.length=p,s.hemi.length=v,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=C+w-q,s.spotLightMap.length=w,s.numSpotLightShadowsWithMaps=q,s.numLightProbes=b,Z.directionalLength=g,Z.pointLength=p,Z.spotLength=d,Z.rectAreaLength=M,Z.hemiLength=v,Z.numDirectionalShadows=E,Z.numPointShadows=L,Z.numSpotShadows=C,Z.numSpotMaps=w,Z.numLightProbes=b,s.version=uS++)}function c(u,h){let f=0,m=0,_=0,g=0,p=0;const d=h.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const E=u[M];if(E.isDirectionalLight){const L=s.directional[f];L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),f++}else if(E.isSpotLight){const L=s.spot[_];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),L.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),L.direction.sub(r),L.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const L=s.rectArea[g];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),L.halfWidth.set(E.width*.5,0,0),L.halfHeight.set(0,E.height*.5,0),L.halfWidth.applyMatrix4(a),L.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const L=s.point[m];L.position.setFromMatrixPosition(E.matrixWorld),L.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const L=s.hemi[p];L.direction.setFromMatrixPosition(E.matrixWorld),L.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:s}}function zh(n,e){const t=new fS(n,e),i=[],s=[];function r(){i.length=0,s.length=0}function o(h){i.push(h)}function a(h){s.push(h)}function l(h){t.setup(i,h)}function c(h){t.setupView(i,h)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function dS(n,e){let t=new WeakMap;function i(r,o=0){const a=t.get(r);let l;return a===void 0?(l=new zh(n,e),t.set(r,[l])):o>=a.length?(l=new zh(n,e),a.push(l)):l=a[o],l}function s(){t=new WeakMap}return{get:i,dispose:s}}class pS extends on{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=J_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mS extends on{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xS(n,e,t){let i=new Ac;const s=new De,r=new De,o=new ht,a=new pS({depthPacking:Q_}),l=new mS,c={},u=t.maxTextureSize,h={[ui]:Qt,[Qt]:ui,[Fn]:Fn},f=new ss({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new Zt;_.setAttribute("position",new $t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Vt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hd;let d=this.type;this.render=function(C,w,q){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const b=n.getRenderTarget(),R=n.getActiveCubeFace(),Z=n.getActiveMipmapLevel(),ie=n.state;ie.setBlending(Ci),ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const he=d!==ni&&this.type===ni,N=d===ni&&this.type!==ni;for(let j=0,W=C.length;j<W;j++){const ee=C[j],$=ee.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const re=$.getFrameExtents();if(s.multiply(re),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/re.x),s.x=r.x*re.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/re.y),s.y=r.y*re.y,$.mapSize.y=r.y)),$.map===null||he===!0||N===!0){const pe=this.type!==ni?{minFilter:Dt,magFilter:Dt}:{};$.map!==null&&$.map.dispose(),$.map=new is(s.x,s.y,pe),$.map.texture.name=ee.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const oe=$.getViewportCount();for(let pe=0;pe<oe;pe++){const fe=$.getViewport(pe);o.set(r.x*fe.x,r.y*fe.y,r.x*fe.z,r.y*fe.w),ie.viewport(o),$.updateMatrices(ee,pe),i=$.getFrustum(),E(w,q,$.camera,ee,this.type)}$.isPointLightShadow!==!0&&this.type===ni&&M($,q),$.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(b,R,Z)};function M(C,w){const q=e.update(g);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new is(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(w,null,q,f,g,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(w,null,q,m,g,null)}function v(C,w,q,b){let R=null;const Z=q.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(Z!==void 0)R=Z;else if(R=q.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const ie=R.uuid,he=w.uuid;let N=c[ie];N===void 0&&(N={},c[ie]=N);let j=N[he];j===void 0&&(j=R.clone(),N[he]=j,w.addEventListener("dispose",L)),R=j}if(R.visible=w.visible,R.wireframe=w.wireframe,b===ni?R.side=w.shadowSide!==null?w.shadowSide:w.side:R.side=w.shadowSide!==null?w.shadowSide:h[w.side],R.alphaMap=w.alphaMap,R.alphaTest=w.alphaTest,R.map=w.map,R.clipShadows=w.clipShadows,R.clippingPlanes=w.clippingPlanes,R.clipIntersection=w.clipIntersection,R.displacementMap=w.displacementMap,R.displacementScale=w.displacementScale,R.displacementBias=w.displacementBias,R.wireframeLinewidth=w.wireframeLinewidth,R.linewidth=w.linewidth,q.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ie=n.properties.get(R);ie.light=q}return R}function E(C,w,q,b,R){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&R===ni)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,C.matrixWorld);const he=e.update(C),N=C.material;if(Array.isArray(N)){const j=he.groups;for(let W=0,ee=j.length;W<ee;W++){const $=j[W],re=N[$.materialIndex];if(re&&re.visible){const oe=v(C,re,b,R);C.onBeforeShadow(n,C,w,q,he,oe,$),n.renderBufferDirect(q,null,he,oe,C,$),C.onAfterShadow(n,C,w,q,he,oe,$)}}}else if(N.visible){const j=v(C,N,b,R);C.onBeforeShadow(n,C,w,q,he,j,null),n.renderBufferDirect(q,null,he,j,C,null),C.onAfterShadow(n,C,w,q,he,j,null)}}const ie=C.children;for(let he=0,N=ie.length;he<N;he++)E(ie[he],w,q,b,R)}function L(C){C.target.removeEventListener("dispose",L);for(const q in c){const b=c[q],R=C.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function vS(n,e,t){const i=t.isWebGL2;function s(){let I=!1;const ve=new ht;let Ee=null;const Fe=new ht(0,0,0,0);return{setMask:function(Ue){Ee!==Ue&&!I&&(n.colorMask(Ue,Ue,Ue,Ue),Ee=Ue)},setLocked:function(Ue){I=Ue},setClear:function(Ue,Qe,et,_t,Mt){Mt===!0&&(Ue*=_t,Qe*=_t,et*=_t),ve.set(Ue,Qe,et,_t),Fe.equals(ve)===!1&&(n.clearColor(Ue,Qe,et,_t),Fe.copy(ve))},reset:function(){I=!1,Ee=null,Fe.set(-1,0,0,0)}}}function r(){let I=!1,ve=null,Ee=null,Fe=null;return{setTest:function(Ue){Ue?Re(n.DEPTH_TEST):Ce(n.DEPTH_TEST)},setMask:function(Ue){ve!==Ue&&!I&&(n.depthMask(Ue),ve=Ue)},setFunc:function(Ue){if(Ee!==Ue){switch(Ue){case A_:n.depthFunc(n.NEVER);break;case w_:n.depthFunc(n.ALWAYS);break;case R_:n.depthFunc(n.LESS);break;case $o:n.depthFunc(n.LEQUAL);break;case C_:n.depthFunc(n.EQUAL);break;case L_:n.depthFunc(n.GEQUAL);break;case P_:n.depthFunc(n.GREATER);break;case D_:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ee=Ue}},setLocked:function(Ue){I=Ue},setClear:function(Ue){Fe!==Ue&&(n.clearDepth(Ue),Fe=Ue)},reset:function(){I=!1,ve=null,Ee=null,Fe=null}}}function o(){let I=!1,ve=null,Ee=null,Fe=null,Ue=null,Qe=null,et=null,_t=null,Mt=null;return{setTest:function(it){I||(it?Re(n.STENCIL_TEST):Ce(n.STENCIL_TEST))},setMask:function(it){ve!==it&&!I&&(n.stencilMask(it),ve=it)},setFunc:function(it,Et,Rn){(Ee!==it||Fe!==Et||Ue!==Rn)&&(n.stencilFunc(it,Et,Rn),Ee=it,Fe=Et,Ue=Rn)},setOp:function(it,Et,Rn){(Qe!==it||et!==Et||_t!==Rn)&&(n.stencilOp(it,Et,Rn),Qe=it,et=Et,_t=Rn)},setLocked:function(it){I=it},setClear:function(it){Mt!==it&&(n.clearStencil(it),Mt=it)},reset:function(){I=!1,ve=null,Ee=null,Fe=null,Ue=null,Qe=null,et=null,_t=null,Mt=null}}}const a=new s,l=new r,c=new o,u=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,d=!1,M=null,v=null,E=null,L=null,C=null,w=null,q=null,b=new He(0,0,0),R=0,Z=!1,ie=null,he=null,N=null,j=null,W=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const oe=n.getParameter(n.VERSION);oe.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(oe)[1]),$=re>=1):oe.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),$=re>=2);let pe=null,fe={};const Q=n.getParameter(n.SCISSOR_BOX),ce=n.getParameter(n.VIEWPORT),ne=new ht().fromArray(Q),V=new ht().fromArray(ce);function te(I,ve,Ee,Fe){const Ue=new Uint8Array(4),Qe=n.createTexture();n.bindTexture(I,Qe),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let et=0;et<Ee;et++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ve,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Ue):n.texImage2D(ve+et,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ue);return Qe}const ye={};ye[n.TEXTURE_2D]=te(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=te(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[n.TEXTURE_2D_ARRAY]=te(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=te(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Re(n.DEPTH_TEST),l.setFunc($o),se(!1),y(yu),Re(n.CULL_FACE),F(Ci);function Re(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function Ce(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function A(I,ve){return m[I]!==ve?(n.bindFramebuffer(I,ve),m[I]=ve,i&&(I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ve),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ve)),!0):!1}function S(I,ve){let Ee=g,Fe=!1;if(I)if(Ee=_.get(ve),Ee===void 0&&(Ee=[],_.set(ve,Ee)),I.isWebGLMultipleRenderTargets){const Ue=I.texture;if(Ee.length!==Ue.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let Qe=0,et=Ue.length;Qe<et;Qe++)Ee[Qe]=n.COLOR_ATTACHMENT0+Qe;Ee.length=Ue.length,Fe=!0}}else Ee[0]!==n.COLOR_ATTACHMENT0&&(Ee[0]=n.COLOR_ATTACHMENT0,Fe=!0);else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Fe=!0);Fe&&(t.isWebGL2?n.drawBuffers(Ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Ee))}function z(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const k={[qi]:n.FUNC_ADD,[h_]:n.FUNC_SUBTRACT,[f_]:n.FUNC_REVERSE_SUBTRACT};if(i)k[Eu]=n.MIN,k[bu]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(k[Eu]=I.MIN_EXT,k[bu]=I.MAX_EXT)}const H={[d_]:n.ZERO,[p_]:n.ONE,[m_]:n.SRC_COLOR,[Hl]:n.SRC_ALPHA,[M_]:n.SRC_ALPHA_SATURATE,[v_]:n.DST_COLOR,[__]:n.DST_ALPHA,[g_]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[y_]:n.ONE_MINUS_DST_COLOR,[x_]:n.ONE_MINUS_DST_ALPHA,[S_]:n.CONSTANT_COLOR,[E_]:n.ONE_MINUS_CONSTANT_COLOR,[b_]:n.CONSTANT_ALPHA,[T_]:n.ONE_MINUS_CONSTANT_ALPHA};function F(I,ve,Ee,Fe,Ue,Qe,et,_t,Mt,it){if(I===Ci){d===!0&&(Ce(n.BLEND),d=!1);return}if(d===!1&&(Re(n.BLEND),d=!0),I!==u_){if(I!==M||it!==Z){if((v!==qi||C!==qi)&&(n.blendEquation(n.FUNC_ADD),v=qi,C=qi),it)switch(I){case Fs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFunc(n.ONE,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Fs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Bl:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Mu:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Su:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}E=null,L=null,w=null,q=null,b.set(0,0,0),R=0,M=I,Z=it}return}Ue=Ue||ve,Qe=Qe||Ee,et=et||Fe,(ve!==v||Ue!==C)&&(n.blendEquationSeparate(k[ve],k[Ue]),v=ve,C=Ue),(Ee!==E||Fe!==L||Qe!==w||et!==q)&&(n.blendFuncSeparate(H[Ee],H[Fe],H[Qe],H[et]),E=Ee,L=Fe,w=Qe,q=et),(_t.equals(b)===!1||Mt!==R)&&(n.blendColor(_t.r,_t.g,_t.b,Mt),b.copy(_t),R=Mt),M=I,Z=!1}function le(I,ve){I.side===Fn?Ce(n.CULL_FACE):Re(n.CULL_FACE);let Ee=I.side===Qt;ve&&(Ee=!Ee),se(Ee),I.blending===Fs&&I.transparent===!1?F(Ci):F(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Fe=I.stencilWrite;c.setTest(Fe),Fe&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),U(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Re(n.SAMPLE_ALPHA_TO_COVERAGE):Ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function se(I){ie!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),ie=I)}function y(I){I!==a_?(Re(n.CULL_FACE),I!==he&&(I===yu?n.cullFace(n.BACK):I===l_?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ce(n.CULL_FACE),he=I}function x(I){I!==N&&($&&n.lineWidth(I),N=I)}function U(I,ve,Ee){I?(Re(n.POLYGON_OFFSET_FILL),(j!==ve||W!==Ee)&&(n.polygonOffset(ve,Ee),j=ve,W=Ee)):Ce(n.POLYGON_OFFSET_FILL)}function O(I){I?Re(n.SCISSOR_TEST):Ce(n.SCISSOR_TEST)}function G(I){I===void 0&&(I=n.TEXTURE0+ee-1),pe!==I&&(n.activeTexture(I),pe=I)}function Y(I,ve,Ee){Ee===void 0&&(pe===null?Ee=n.TEXTURE0+ee-1:Ee=pe);let Fe=fe[Ee];Fe===void 0&&(Fe={type:void 0,texture:void 0},fe[Ee]=Fe),(Fe.type!==I||Fe.texture!==ve)&&(pe!==Ee&&(n.activeTexture(Ee),pe=Ee),n.bindTexture(I,ve||ye[I]),Fe.type=I,Fe.texture=ve)}function ge(){const I=fe[pe];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function me(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function be(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Le(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ne(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Oe(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(I){ne.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function _e(I){V.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),V.copy(I))}function Pe(I,ve){let Ee=h.get(ve);Ee===void 0&&(Ee=new WeakMap,h.set(ve,Ee));let Fe=Ee.get(I);Fe===void 0&&(Fe=n.getUniformBlockIndex(ve,I.name),Ee.set(I,Fe))}function we(I,ve){const Fe=h.get(ve).get(I);u.get(ve)!==Fe&&(n.uniformBlockBinding(ve,Fe,I.__bindingPointIndex),u.set(ve,Fe))}function de(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},pe=null,fe={},m={},_=new WeakMap,g=[],p=null,d=!1,M=null,v=null,E=null,L=null,C=null,w=null,q=null,b=new He(0,0,0),R=0,Z=!1,ie=null,he=null,N=null,j=null,W=null,ne.set(0,0,n.canvas.width,n.canvas.height),V.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Re,disable:Ce,bindFramebuffer:A,drawBuffers:S,useProgram:z,setBlending:F,setMaterial:le,setFlipSided:se,setCullFace:y,setLineWidth:x,setPolygonOffset:U,setScissorTest:O,activeTexture:G,bindTexture:Y,unbindTexture:ge,compressedTexImage2D:ue,compressedTexImage3D:me,texImage2D:Te,texImage3D:Me,updateUBOMapping:Pe,uniformBlockBinding:we,texStorage2D:Ne,texStorage3D:Oe,texSubImage2D:be,texSubImage3D:Le,compressedTexSubImage2D:ae,compressedTexSubImage3D:Ve,scissor:P,viewport:_e,reset:de}}function yS(n,e,t,i,s,r,o){const a=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let h;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(y,x){return m?new OffscreenCanvas(y,x):Wr("canvas")}function g(y,x,U,O){let G=1;if((y.width>O||y.height>O)&&(G=O/Math.max(y.width,y.height)),G<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const Y=x?na:Math.floor,ge=Y(G*y.width),ue=Y(G*y.height);h===void 0&&(h=_(ge,ue));const me=U?_(ge,ue):h;return me.width=ge,me.height=ue,me.getContext("2d").drawImage(y,0,0,ge,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+ge+"x"+ue+")."),me}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function p(y){return ql(y.width)&&ql(y.height)}function d(y){return a?!1:y.wrapS!==fn||y.wrapT!==fn||y.minFilter!==Dt&&y.minFilter!==Jt}function M(y,x){return y.generateMipmaps&&x&&y.minFilter!==Dt&&y.minFilter!==Jt}function v(y){n.generateMipmap(y)}function E(y,x,U,O,G=!1){if(a===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let Y=x;if(x===n.RED&&(U===n.FLOAT&&(Y=n.R32F),U===n.HALF_FLOAT&&(Y=n.R16F),U===n.UNSIGNED_BYTE&&(Y=n.R8)),x===n.RED_INTEGER&&(U===n.UNSIGNED_BYTE&&(Y=n.R8UI),U===n.UNSIGNED_SHORT&&(Y=n.R16UI),U===n.UNSIGNED_INT&&(Y=n.R32UI),U===n.BYTE&&(Y=n.R8I),U===n.SHORT&&(Y=n.R16I),U===n.INT&&(Y=n.R32I)),x===n.RG&&(U===n.FLOAT&&(Y=n.RG32F),U===n.HALF_FLOAT&&(Y=n.RG16F),U===n.UNSIGNED_BYTE&&(Y=n.RG8)),x===n.RGBA){const ge=G?Jo:ot.getTransfer(O);U===n.FLOAT&&(Y=n.RGBA32F),U===n.HALF_FLOAT&&(Y=n.RGBA16F),U===n.UNSIGNED_BYTE&&(Y=ge===dt?n.SRGB8_ALPHA8:n.RGBA8),U===n.UNSIGNED_SHORT_4_4_4_4&&(Y=n.RGBA4),U===n.UNSIGNED_SHORT_5_5_5_1&&(Y=n.RGB5_A1)}return(Y===n.R16F||Y===n.R32F||Y===n.RG16F||Y===n.RG32F||Y===n.RGBA16F||Y===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function L(y,x,U){return M(y,U)===!0||y.isFramebufferTexture&&y.minFilter!==Dt&&y.minFilter!==Jt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function C(y){return y===Dt||y===Vl||y===Ho?n.NEAREST:n.LINEAR}function w(y){const x=y.target;x.removeEventListener("dispose",w),b(x),x.isVideoTexture&&u.delete(x)}function q(y){const x=y.target;x.removeEventListener("dispose",q),Z(x)}function b(y){const x=i.get(y);if(x.__webglInit===void 0)return;const U=y.source,O=f.get(U);if(O){const G=O[x.__cacheKey];G.usedTimes--,G.usedTimes===0&&R(y),Object.keys(O).length===0&&f.delete(U)}i.remove(y)}function R(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const U=y.source,O=f.get(U);delete O[x.__cacheKey],o.memory.textures--}function Z(y){const x=y.texture,U=i.get(y),O=i.get(x);if(O.__webglTexture!==void 0&&(n.deleteTexture(O.__webglTexture),o.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(U.__webglFramebuffer[G]))for(let Y=0;Y<U.__webglFramebuffer[G].length;Y++)n.deleteFramebuffer(U.__webglFramebuffer[G][Y]);else n.deleteFramebuffer(U.__webglFramebuffer[G]);U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer[G])}else{if(Array.isArray(U.__webglFramebuffer))for(let G=0;G<U.__webglFramebuffer.length;G++)n.deleteFramebuffer(U.__webglFramebuffer[G]);else n.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&n.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&n.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let G=0;G<U.__webglColorRenderbuffer.length;G++)U.__webglColorRenderbuffer[G]&&n.deleteRenderbuffer(U.__webglColorRenderbuffer[G]);U.__webglDepthRenderbuffer&&n.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let G=0,Y=x.length;G<Y;G++){const ge=i.get(x[G]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(x[G])}i.remove(x),i.remove(y)}let ie=0;function he(){ie=0}function N(){const y=ie;return y>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+s.maxTextures),ie+=1,y}function j(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.colorSpace),x.join()}function W(y,x){const U=i.get(y);if(y.isVideoTexture&&le(y),y.isRenderTargetTexture===!1&&y.version>0&&U.__version!==y.version){const O=y.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(U,y,x);return}}t.bindTexture(n.TEXTURE_2D,U.__webglTexture,n.TEXTURE0+x)}function ee(y,x){const U=i.get(y);if(y.version>0&&U.__version!==y.version){ne(U,y,x);return}t.bindTexture(n.TEXTURE_2D_ARRAY,U.__webglTexture,n.TEXTURE0+x)}function $(y,x){const U=i.get(y);if(y.version>0&&U.__version!==y.version){ne(U,y,x);return}t.bindTexture(n.TEXTURE_3D,U.__webglTexture,n.TEXTURE0+x)}function re(y,x){const U=i.get(y);if(y.version>0&&U.__version!==y.version){V(U,y,x);return}t.bindTexture(n.TEXTURE_CUBE_MAP,U.__webglTexture,n.TEXTURE0+x)}const oe={[Ws]:n.REPEAT,[fn]:n.CLAMP_TO_EDGE,[Zo]:n.MIRRORED_REPEAT},pe={[Dt]:n.NEAREST,[Vl]:n.NEAREST_MIPMAP_NEAREST,[Ho]:n.NEAREST_MIPMAP_LINEAR,[Jt]:n.LINEAR,[kd]:n.LINEAR_MIPMAP_NEAREST,[ns]:n.LINEAR_MIPMAP_LINEAR},fe={[t0]:n.NEVER,[a0]:n.ALWAYS,[n0]:n.LESS,[Zd]:n.LEQUAL,[i0]:n.EQUAL,[o0]:n.GEQUAL,[s0]:n.GREATER,[r0]:n.NOTEQUAL};function Q(y,x,U){if(U?(n.texParameteri(y,n.TEXTURE_WRAP_S,oe[x.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,oe[x.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,oe[x.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,pe[x.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,pe[x.minFilter])):(n.texParameteri(y,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(y,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(x.wrapS!==fn||x.wrapT!==fn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,n.TEXTURE_MAG_FILTER,C(x.magFilter)),n.texParameteri(y,n.TEXTURE_MIN_FILTER,C(x.minFilter)),x.minFilter!==Dt&&x.minFilter!==Jt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),x.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,fe[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Dt||x.minFilter!==Ho&&x.minFilter!==ns||x.type===li&&e.has("OES_texture_float_linear")===!1||a===!1&&x.type===Gr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(y,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function ce(y,x){let U=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",w));const O=x.source;let G=f.get(O);G===void 0&&(G={},f.set(O,G));const Y=j(x);if(Y!==y.__cacheKey){G[Y]===void 0&&(G[Y]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,U=!0),G[Y].usedTimes++;const ge=G[y.__cacheKey];ge!==void 0&&(G[y.__cacheKey].usedTimes--,ge.usedTimes===0&&R(x)),y.__cacheKey=Y,y.__webglTexture=G[Y].texture}return U}function ne(y,x,U){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);const G=ce(y,x),Y=x.source;t.bindTexture(O,y.__webglTexture,n.TEXTURE0+U);const ge=i.get(Y);if(Y.version!==ge.__version||G===!0){t.activeTexture(n.TEXTURE0+U);const ue=ot.getPrimaries(ot.workingColorSpace),me=x.colorSpace===pn?null:ot.getPrimaries(x.colorSpace),be=x.colorSpace===pn||ue===me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);const Le=d(x)&&p(x.image)===!1;let ae=g(x.image,Le,!1,s.maxTextureSize);ae=se(x,ae);const Ve=p(ae)||a,Ne=r.convert(x.format,x.colorSpace);let Oe=r.convert(x.type),Te=E(x.internalFormat,Ne,Oe,x.colorSpace,x.isVideoTexture);Q(O,x,Ve);let Me;const P=x.mipmaps,_e=a&&x.isVideoTexture!==!0&&Te!==Yd,Pe=ge.__version===void 0||G===!0,we=L(x,ae,Ve);if(x.isDepthTexture)Te=n.DEPTH_COMPONENT,a?x.type===li?Te=n.DEPTH_COMPONENT32F:x.type===Ei?Te=n.DEPTH_COMPONENT24:x.type===Qi?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:x.type===li&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===es&&Te===n.DEPTH_COMPONENT&&x.type!==Sc&&x.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=Ei,Oe=r.convert(x.type)),x.format===Xs&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,x.type!==Qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Qi,Oe=r.convert(x.type))),Pe&&(_e?t.texStorage2D(n.TEXTURE_2D,1,Te,ae.width,ae.height):t.texImage2D(n.TEXTURE_2D,0,Te,ae.width,ae.height,0,Ne,Oe,null));else if(x.isDataTexture)if(P.length>0&&Ve){_e&&Pe&&t.texStorage2D(n.TEXTURE_2D,we,Te,P[0].width,P[0].height);for(let de=0,I=P.length;de<I;de++)Me=P[de],_e?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Ne,Oe,Me.data):t.texImage2D(n.TEXTURE_2D,de,Te,Me.width,Me.height,0,Ne,Oe,Me.data);x.generateMipmaps=!1}else _e?(Pe&&t.texStorage2D(n.TEXTURE_2D,we,Te,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ae.width,ae.height,Ne,Oe,ae.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ae.width,ae.height,0,Ne,Oe,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){_e&&Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Te,P[0].width,P[0].height,ae.depth);for(let de=0,I=P.length;de<I;de++)Me=P[de],x.format!==dn?Ne!==null?_e?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,ae.depth,Ne,Me.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,de,Te,Me.width,Me.height,ae.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage3D(n.TEXTURE_2D_ARRAY,de,0,0,0,Me.width,Me.height,ae.depth,Ne,Oe,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,de,Te,Me.width,Me.height,ae.depth,0,Ne,Oe,Me.data)}else{_e&&Pe&&t.texStorage2D(n.TEXTURE_2D,we,Te,P[0].width,P[0].height);for(let de=0,I=P.length;de<I;de++)Me=P[de],x.format!==dn?Ne!==null?_e?t.compressedTexSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Ne,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,de,Te,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_e?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Me.width,Me.height,Ne,Oe,Me.data):t.texImage2D(n.TEXTURE_2D,de,Te,Me.width,Me.height,0,Ne,Oe,Me.data)}else if(x.isDataArrayTexture)_e?(Pe&&t.texStorage3D(n.TEXTURE_2D_ARRAY,we,Te,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,Ne,Oe,ae.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ae.width,ae.height,ae.depth,0,Ne,Oe,ae.data);else if(x.isData3DTexture)_e?(Pe&&t.texStorage3D(n.TEXTURE_3D,we,Te,ae.width,ae.height,ae.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,Ne,Oe,ae.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ae.width,ae.height,ae.depth,0,Ne,Oe,ae.data);else if(x.isFramebufferTexture){if(Pe)if(_e)t.texStorage2D(n.TEXTURE_2D,we,Te,ae.width,ae.height);else{let de=ae.width,I=ae.height;for(let ve=0;ve<we;ve++)t.texImage2D(n.TEXTURE_2D,ve,Te,de,I,0,Ne,Oe,null),de>>=1,I>>=1}}else if(P.length>0&&Ve){_e&&Pe&&t.texStorage2D(n.TEXTURE_2D,we,Te,P[0].width,P[0].height);for(let de=0,I=P.length;de<I;de++)Me=P[de],_e?t.texSubImage2D(n.TEXTURE_2D,de,0,0,Ne,Oe,Me):t.texImage2D(n.TEXTURE_2D,de,Te,Ne,Oe,Me);x.generateMipmaps=!1}else _e?(Pe&&t.texStorage2D(n.TEXTURE_2D,we,Te,ae.width,ae.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ne,Oe,ae)):t.texImage2D(n.TEXTURE_2D,0,Te,Ne,Oe,ae);M(x,Ve)&&v(O),ge.__version=Y.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function V(y,x,U){if(x.image.length!==6)return;const O=ce(y,x),G=x.source;t.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+U);const Y=i.get(G);if(G.version!==Y.__version||O===!0){t.activeTexture(n.TEXTURE0+U);const ge=ot.getPrimaries(ot.workingColorSpace),ue=x.colorSpace===pn?null:ot.getPrimaries(x.colorSpace),me=x.colorSpace===pn||ge===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const be=x.isCompressedTexture||x.image[0].isCompressedTexture,Le=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let de=0;de<6;de++)!be&&!Le?ae[de]=g(x.image[de],!1,!0,s.maxCubemapSize):ae[de]=Le?x.image[de].image:x.image[de],ae[de]=se(x,ae[de]);const Ve=ae[0],Ne=p(Ve)||a,Oe=r.convert(x.format,x.colorSpace),Te=r.convert(x.type),Me=E(x.internalFormat,Oe,Te,x.colorSpace),P=a&&x.isVideoTexture!==!0,_e=Y.__version===void 0||O===!0;let Pe=L(x,Ve,Ne);Q(n.TEXTURE_CUBE_MAP,x,Ne);let we;if(be){P&&_e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Me,Ve.width,Ve.height);for(let de=0;de<6;de++){we=ae[de].mipmaps;for(let I=0;I<we.length;I++){const ve=we[I];x.format!==dn?Oe!==null?P?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,ve.width,ve.height,Oe,ve.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,Me,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,0,0,ve.width,ve.height,Oe,Te,ve.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I,Me,ve.width,ve.height,0,Oe,Te,ve.data)}}}else{we=x.mipmaps,P&&_e&&(we.length>0&&Pe++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Me,ae[0].width,ae[0].height));for(let de=0;de<6;de++)if(Le){P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,ae[de].width,ae[de].height,Oe,Te,ae[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Me,ae[de].width,ae[de].height,0,Oe,Te,ae[de].data);for(let I=0;I<we.length;I++){const Ee=we[I].image[de].image;P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,Ee.width,Ee.height,Oe,Te,Ee.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,Me,Ee.width,Ee.height,0,Oe,Te,Ee.data)}}else{P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Oe,Te,ae[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Me,Oe,Te,ae[de]);for(let I=0;I<we.length;I++){const ve=we[I];P?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,0,0,Oe,Te,ve.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,I+1,Me,Oe,Te,ve.image[de])}}}M(x,Ne)&&v(n.TEXTURE_CUBE_MAP),Y.__version=G.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function te(y,x,U,O,G,Y){const ge=r.convert(U.format,U.colorSpace),ue=r.convert(U.type),me=E(U.internalFormat,ge,ue,U.colorSpace);if(!i.get(x).__hasExternalTextures){const Le=Math.max(1,x.width>>Y),ae=Math.max(1,x.height>>Y);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?t.texImage3D(G,Y,me,Le,ae,x.depth,0,ge,ue,null):t.texImage2D(G,Y,me,Le,ae,0,ge,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,y),F(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,G,i.get(U).__webglTexture,0,H(x)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,G,i.get(U).__webglTexture,Y),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(y,x,U){if(n.bindRenderbuffer(n.RENDERBUFFER,y),x.depthBuffer&&!x.stencilBuffer){let O=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(U||F(x)){const G=x.depthTexture;G&&G.isDepthTexture&&(G.type===li?O=n.DEPTH_COMPONENT32F:G.type===Ei&&(O=n.DEPTH_COMPONENT24));const Y=H(x);F(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Y,O,x.width,x.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,Y,O,x.width,x.height)}else n.renderbufferStorage(n.RENDERBUFFER,O,x.width,x.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,y)}else if(x.depthBuffer&&x.stencilBuffer){const O=H(x);U&&F(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,O,n.DEPTH24_STENCIL8,x.width,x.height):F(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,O,n.DEPTH24_STENCIL8,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,y)}else{const O=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let G=0;G<O.length;G++){const Y=O[G],ge=r.convert(Y.format,Y.colorSpace),ue=r.convert(Y.type),me=E(Y.internalFormat,ge,ue,Y.colorSpace),be=H(x);U&&F(x)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,be,me,x.width,x.height):F(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,be,me,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,me,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Re(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const O=i.get(x.depthTexture).__webglTexture,G=H(x);if(x.depthTexture.format===es)F(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,O,0);else if(x.depthTexture.format===Xs)F(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,O,0);else throw new Error("Unknown depthTexture format")}function Ce(y){const x=i.get(y),U=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Re(x.__webglFramebuffer,y)}else if(U){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]=n.createRenderbuffer(),ye(x.__webglDepthbuffer[O],y,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),ye(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function A(y,x,U){const O=i.get(y);x!==void 0&&te(O.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),U!==void 0&&Ce(y)}function S(y){const x=y.texture,U=i.get(y),O=i.get(x);y.addEventListener("dispose",q),y.isWebGLMultipleRenderTargets!==!0&&(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,o.memory.textures++);const G=y.isWebGLCubeRenderTarget===!0,Y=y.isWebGLMultipleRenderTargets===!0,ge=p(y)||a;if(G){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let me=0;me<x.mipmaps.length;me++)U.__webglFramebuffer[ue][me]=n.createFramebuffer()}else U.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<x.mipmaps.length;ue++)U.__webglFramebuffer[ue]=n.createFramebuffer()}else U.__webglFramebuffer=n.createFramebuffer();if(Y)if(s.drawBuffers){const ue=y.texture;for(let me=0,be=ue.length;me<be;me++){const Le=i.get(ue[me]);Le.__webglTexture===void 0&&(Le.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&y.samples>0&&F(y)===!1){const ue=Y?x:[x];U.__webglMultisampledFramebuffer=n.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let me=0;me<ue.length;me++){const be=ue[me];U.__webglColorRenderbuffer[me]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,U.__webglColorRenderbuffer[me]);const Le=r.convert(be.format,be.colorSpace),ae=r.convert(be.type),Ve=E(be.internalFormat,Le,ae,be.colorSpace,y.isXRRenderTarget===!0),Ne=H(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,Ve,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+me,n.RENDERBUFFER,U.__webglColorRenderbuffer[me])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(U.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(U.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Q(n.TEXTURE_CUBE_MAP,x,ge);for(let ue=0;ue<6;ue++)if(a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)te(U.__webglFramebuffer[ue][me],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,me);else te(U.__webglFramebuffer[ue],y,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);M(x,ge)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Y){const ue=y.texture;for(let me=0,be=ue.length;me<be;me++){const Le=ue[me],ae=i.get(Le);t.bindTexture(n.TEXTURE_2D,ae.__webglTexture),Q(n.TEXTURE_2D,Le,ge),te(U.__webglFramebuffer,y,Le,n.COLOR_ATTACHMENT0+me,n.TEXTURE_2D,0),M(Le,ge)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(a?ue=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,O.__webglTexture),Q(ue,x,ge),a&&x.mipmaps&&x.mipmaps.length>0)for(let me=0;me<x.mipmaps.length;me++)te(U.__webglFramebuffer[me],y,x,n.COLOR_ATTACHMENT0,ue,me);else te(U.__webglFramebuffer,y,x,n.COLOR_ATTACHMENT0,ue,0);M(x,ge)&&v(ue),t.unbindTexture()}y.depthBuffer&&Ce(y)}function z(y){const x=p(y)||a,U=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let O=0,G=U.length;O<G;O++){const Y=U[O];if(M(Y,x)){const ge=y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(Y).__webglTexture;t.bindTexture(ge,ue),v(ge),t.unbindTexture()}}}function k(y){if(a&&y.samples>0&&F(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],U=y.width,O=y.height;let G=n.COLOR_BUFFER_BIT;const Y=[],ge=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(y),me=y.isWebGLMultipleRenderTargets===!0;if(me)for(let be=0;be<x.length;be++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let be=0;be<x.length;be++){Y.push(n.COLOR_ATTACHMENT0+be),y.depthBuffer&&Y.push(ge);const Le=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Le===!1&&(y.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),me&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[be]),Le===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),me){const ae=i.get(x[be]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ae,0)}n.blitFramebuffer(0,0,U,O,0,0,U,O,G,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Y)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),me)for(let be=0;be<x.length;be++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.RENDERBUFFER,ue.__webglColorRenderbuffer[be]);const Le=i.get(x[be]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+be,n.TEXTURE_2D,Le,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function H(y){return Math.min(s.maxSamples,y.samples)}function F(y){const x=i.get(y);return a&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(y){const x=o.render.frame;u.get(y)!==x&&(u.set(y,x),y.update())}function se(y,x){const U=y.colorSpace,O=y.format,G=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===jl||U!==It&&U!==pn&&(ot.getTransfer(U)===dt?a===!1?e.has("EXT_sRGB")===!0&&O===dn?(y.format=jl,y.minFilter=Jt,y.generateMipmaps=!1):x=ep.sRGBToLinear(x):(O!==dn||G!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}this.allocateTextureUnit=N,this.resetTextureUnits=he,this.setTexture2D=W,this.setTexture2DArray=ee,this.setTexture3D=$,this.setTextureCube=re,this.rebindTextures=A,this.setupRenderTarget=S,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=k,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=F}function MS(n,e,t){const i=t.isWebGL2;function s(r,o=pn){let a;const l=ot.getTransfer(o);if(r===Pi)return n.UNSIGNED_BYTE;if(r===Vd)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Wd)return n.UNSIGNED_SHORT_5_5_5_1;if(r===G_)return n.BYTE;if(r===V_)return n.SHORT;if(r===Sc)return n.UNSIGNED_SHORT;if(r===Gd)return n.INT;if(r===Ei)return n.UNSIGNED_INT;if(r===li)return n.FLOAT;if(r===Gr)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===W_)return n.ALPHA;if(r===dn)return n.RGBA;if(r===X_)return n.LUMINANCE;if(r===j_)return n.LUMINANCE_ALPHA;if(r===es)return n.DEPTH_COMPONENT;if(r===Xs)return n.DEPTH_STENCIL;if(r===jl)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===q_)return n.RED;if(r===Xd)return n.RED_INTEGER;if(r===Y_)return n.RG;if(r===jd)return n.RG_INTEGER;if(r===qd)return n.RGBA_INTEGER;if(r===Fa||r===Ba||r===Ha||r===za)if(l===dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Fa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ha)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===za)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Fa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ha)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===za)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Au||r===wu||r===Ru||r===Cu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Au)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Ru)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yd)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lu||r===Pu)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lu)return l===dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Pu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Du||r===Iu||r===Uu||r===Nu||r===Ou||r===Fu||r===Bu||r===Hu||r===zu||r===ku||r===Gu||r===Vu||r===Wu||r===Xu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Du)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Iu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Uu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Nu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ou)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Fu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Bu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ku)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Gu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xu)return l===dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ka||r===ju||r===qu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===ka)return l===dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ju)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===qu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===K_||r===Yu||r===Ku||r===$u)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===ka)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Yu)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ku)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$u)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qi?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class SS extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $i extends pt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ES={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $i,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $i,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $i,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,i),d=this._getHandJoint(c,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ES)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new $i;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class bS extends as{constructor(e,t){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,m=null,_=null;const g=t.getContextAttributes();let p=null,d=null;const M=[],v=[],E=new De;let L=null;const C=new Gt;C.layers.enable(1),C.viewport=new ht;const w=new Gt;w.layers.enable(2),w.viewport=new ht;const q=[C,w],b=new SS;b.layers.enable(1),b.layers.enable(2);let R=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ce=M[Q];return ce===void 0&&(ce=new hl,M[Q]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(Q){let ce=M[Q];return ce===void 0&&(ce=new hl,M[Q]=ce),ce.getGripSpace()},this.getHand=function(Q){let ce=M[Q];return ce===void 0&&(ce=new hl,M[Q]=ce),ce.getHandSpace()};function ie(Q){const ce=v.indexOf(Q.inputSource);if(ce===-1)return;const ne=M[ce];ne!==void 0&&(ne.update(Q.inputSource,Q.frame,c||o),ne.dispatchEvent({type:Q.type,data:Q.inputSource}))}function he(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",he),s.removeEventListener("inputsourceschange",N);for(let Q=0;Q<M.length;Q++){const ce=v[Q];ce!==null&&(v[Q]=null,M[Q].disconnect(ce))}R=null,Z=null,e.setRenderTarget(p),m=null,f=null,h=null,s=null,d=null,fe.stop(),i.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",he),s.addEventListener("inputsourceschange",N),g.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ce),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new is(m.framebufferWidth,m.framebufferHeight,{format:dn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ce=null,ne=null,V=null;g.depth&&(V=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=g.stencil?Xs:es,ne=g.stencil?Qi:Ei);const te={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};h=new XRWebGLBinding(s,t),f=h.createProjectionLayer(te),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),d=new is(f.textureWidth,f.textureHeight,{format:dn,type:Pi,depthTexture:new up(f.textureWidth,f.textureHeight,ne,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function N(Q){for(let ce=0;ce<Q.removed.length;ce++){const ne=Q.removed[ce],V=v.indexOf(ne);V>=0&&(v[V]=null,M[V].disconnect(ne))}for(let ce=0;ce<Q.added.length;ce++){const ne=Q.added[ce];let V=v.indexOf(ne);if(V===-1){for(let ye=0;ye<M.length;ye++)if(ye>=v.length){v.push(ne),V=ye;break}else if(v[ye]===null){v[ye]=ne,V=ye;break}if(V===-1)break}const te=M[V];te&&te.connect(ne)}}const j=new D,W=new D;function ee(Q,ce,ne){j.setFromMatrixPosition(ce.matrixWorld),W.setFromMatrixPosition(ne.matrixWorld);const V=j.distanceTo(W),te=ce.projectionMatrix.elements,ye=ne.projectionMatrix.elements,Re=te[14]/(te[10]-1),Ce=te[14]/(te[10]+1),A=(te[9]+1)/te[5],S=(te[9]-1)/te[5],z=(te[8]-1)/te[0],k=(ye[8]+1)/ye[0],H=Re*z,F=Re*k,le=V/(-z+k),se=le*-z;ce.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(se),Q.translateZ(le),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert();const y=Re+le,x=Ce+le,U=H-se,O=F+(V-se),G=A*Ce/x*y,Y=S*Ce/x*y;Q.projectionMatrix.makePerspective(U,O,G,Y,y,x),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}function $(Q,ce){ce===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ce.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;b.near=w.near=C.near=Q.near,b.far=w.far=C.far=Q.far,(R!==b.near||Z!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),R=b.near,Z=b.far);const ce=Q.parent,ne=b.cameras;$(b,ce);for(let V=0;V<ne.length;V++)$(ne[V],ce);ne.length===2?ee(b,C,w):b.projectionMatrix.copy(C.projectionMatrix),re(Q,b,ce)};function re(Q,ce,ne){ne===null?Q.matrix.copy(ce.matrixWorld):(Q.matrix.copy(ne.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ce.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ce.projectionMatrix),Q.projectionMatrixInverse.copy(ce.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=qs*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)};let oe=null;function pe(Q,ce){if(u=ce.getViewerPose(c||o),_=ce,u!==null){const ne=u.views;m!==null&&(e.setRenderTargetFramebuffer(d,m.framebuffer),e.setRenderTarget(d));let V=!1;ne.length!==b.cameras.length&&(b.cameras.length=0,V=!0);for(let te=0;te<ne.length;te++){const ye=ne[te];let Re=null;if(m!==null)Re=m.getViewport(ye);else{const A=h.getViewSubImage(f,ye);Re=A.viewport,te===0&&(e.setRenderTargetTextures(d,A.colorTexture,f.ignoreDepthValues?void 0:A.depthStencilTexture),e.setRenderTarget(d))}let Ce=q[te];Ce===void 0&&(Ce=new Gt,Ce.layers.enable(te),Ce.viewport=new ht,q[te]=Ce),Ce.matrix.fromArray(ye.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(ye.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Re.x,Re.y,Re.width,Re.height),te===0&&(b.matrix.copy(Ce.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),V===!0&&b.cameras.push(Ce)}}for(let ne=0;ne<M.length;ne++){const V=v[ne],te=M[ne];V!==null&&te!==void 0&&te.update(V,ce,c||o)}oe&&oe(Q,ce),ce.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ce}),_=null}const fe=new cp;fe.setAnimationLoop(pe),this.setAnimationLoop=function(Q){oe=Q},this.dispose=function(){}}}function TS(n,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,op(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,M,v,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),h(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,M,v):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Qt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Qt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const M=e.get(d).envMap;if(M&&(p.envMap.value=M,p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,M,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*M,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function h(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),e.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,M){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Qt&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const M=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function AS(n,e,t,i){let s={},r={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,v){const E=v.program;i.uniformBlockBinding(M,E)}function c(M,v){let E=s[M.id];E===void 0&&(_(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",p));const L=v.program;i.updateUBOMapping(M,L);const C=e.render.frame;r[M.id]!==C&&(f(M),r[M.id]=C)}function u(M){const v=h();M.__bindingPointIndex=v;const E=n.createBuffer(),L=M.__size,C=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,L,C),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,E),E}function h(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){const v=s[M.id],E=M.uniforms,L=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let C=0,w=E.length;C<w;C++){const q=Array.isArray(E[C])?E[C]:[E[C]];for(let b=0,R=q.length;b<R;b++){const Z=q[b];if(m(Z,C,b,L)===!0){const ie=Z.__offset,he=Array.isArray(Z.value)?Z.value:[Z.value];let N=0;for(let j=0;j<he.length;j++){const W=he[j],ee=g(W);typeof W=="number"||typeof W=="boolean"?(Z.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,ie+N,Z.__data)):W.isMatrix3?(Z.__data[0]=W.elements[0],Z.__data[1]=W.elements[1],Z.__data[2]=W.elements[2],Z.__data[3]=0,Z.__data[4]=W.elements[3],Z.__data[5]=W.elements[4],Z.__data[6]=W.elements[5],Z.__data[7]=0,Z.__data[8]=W.elements[6],Z.__data[9]=W.elements[7],Z.__data[10]=W.elements[8],Z.__data[11]=0):(W.toArray(Z.__data,N),N+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ie,Z.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(M,v,E,L){const C=M.value,w=v+"_"+E;if(L[w]===void 0)return typeof C=="number"||typeof C=="boolean"?L[w]=C:L[w]=C.clone(),!0;{const q=L[w];if(typeof C=="number"||typeof C=="boolean"){if(q!==C)return L[w]=C,!0}else if(q.equals(C)===!1)return q.copy(C),!0}return!1}function _(M){const v=M.uniforms;let E=0;const L=16;for(let w=0,q=v.length;w<q;w++){const b=Array.isArray(v[w])?v[w]:[v[w]];for(let R=0,Z=b.length;R<Z;R++){const ie=b[R],he=Array.isArray(ie.value)?ie.value:[ie.value];for(let N=0,j=he.length;N<j;N++){const W=he[N],ee=g(W),$=E%L;$!==0&&L-$<ee.boundary&&(E+=L-$),ie.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),ie.__offset=E,E+=ee.storage}}}const C=E%L;return C>0&&(E+=L-C),M.__size=E,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const E=o.indexOf(v.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(const M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Kl{constructor(e={}){const{canvas:t=S0(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Li,this.toneMappingExposure=1;const v=this;let E=!1,L=0,C=0,w=null,q=-1,b=null;const R=new ht,Z=new ht;let ie=null;const he=new He(0);let N=0,j=t.width,W=t.height,ee=1,$=null,re=null;const oe=new ht(0,0,j,W),pe=new ht(0,0,j,W);let fe=!1;const Q=new Ac;let ce=!1,ne=!1,V=null;const te=new qe,ye=new De,Re=new D,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function A(){return w===null?ee:1}let S=i;function z(T,B){for(let K=0;K<T.length;K++){const J=T[K],X=t.getContext(J,B);if(X!==null)return X}return null}try{const T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${yc}`),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",ve,!1),S===null){const B=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&B.shift(),S=z(B,T),S===null)throw z(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&S instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),S.getShaderPrecisionFormat===void 0&&(S.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let k,H,F,le,se,y,x,U,O,G,Y,ge,ue,me,be,Le,ae,Ve,Ne,Oe,Te,Me,P,_e;function Pe(){k=new Oy(S),H=new Ly(S,k,e),k.init(H),Me=new MS(S,k,H),F=new vS(S,k,H),le=new Hy(S),se=new rS,y=new yS(S,k,F,se,H,Me,le),x=new Dy(v),U=new Ny(v),O=new q0(S,H),P=new Ry(S,k,O,H),G=new Fy(S,O,le,P),Y=new Vy(S,G,O,le),Ne=new Gy(S,H,y),Le=new Py(se),ge=new sS(v,x,U,k,H,P,Le),ue=new TS(v,se),me=new aS,be=new dS(k,H),Ve=new wy(v,x,U,F,Y,f,l),ae=new xS(v,Y,H),_e=new AS(S,le,H,F),Oe=new Cy(S,k,le,H),Te=new By(S,k,le,H),le.programs=ge.programs,v.capabilities=H,v.extensions=k,v.properties=se,v.renderLists=me,v.shadowMap=ae,v.state=F,v.info=le}Pe();const we=new bS(v,S);this.xr=we,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){const T=k.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=k.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(j,W,!1))},this.getSize=function(T){return T.set(j,W)},this.setSize=function(T,B,K=!0){if(we.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}j=T,W=B,t.width=Math.floor(T*ee),t.height=Math.floor(B*ee),K===!0&&(t.style.width=T+"px",t.style.height=B+"px"),this.setViewport(0,0,T,B)},this.getDrawingBufferSize=function(T){return T.set(j*ee,W*ee).floor()},this.setDrawingBufferSize=function(T,B,K){j=T,W=B,ee=K,t.width=Math.floor(T*K),t.height=Math.floor(B*K),this.setViewport(0,0,T,B)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(oe)},this.setViewport=function(T,B,K,J){T.isVector4?oe.set(T.x,T.y,T.z,T.w):oe.set(T,B,K,J),F.viewport(R.copy(oe).multiplyScalar(ee).floor())},this.getScissor=function(T){return T.copy(pe)},this.setScissor=function(T,B,K,J){T.isVector4?pe.set(T.x,T.y,T.z,T.w):pe.set(T,B,K,J),F.scissor(Z.copy(pe).multiplyScalar(ee).floor())},this.getScissorTest=function(){return fe},this.setScissorTest=function(T){F.setScissorTest(fe=T)},this.setOpaqueSort=function(T){$=T},this.setTransparentSort=function(T){re=T},this.getClearColor=function(T){return T.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(T=!0,B=!0,K=!0){let J=0;if(T){let X=!1;if(w!==null){const Ae=w.texture.format;X=Ae===qd||Ae===jd||Ae===Xd}if(X){const Ae=w.texture.type,Ie=Ae===Pi||Ae===Ei||Ae===Sc||Ae===Qi||Ae===Vd||Ae===Wd,Be=Ve.getClearColor(),ke=Ve.getClearAlpha(),Ke=Be.r,We=Be.g,Xe=Be.b;Ie?(m[0]=Ke,m[1]=We,m[2]=Xe,m[3]=ke,S.clearBufferuiv(S.COLOR,0,m)):(_[0]=Ke,_[1]=We,_[2]=Xe,_[3]=ke,S.clearBufferiv(S.COLOR,0,_))}else J|=S.COLOR_BUFFER_BIT}B&&(J|=S.DEPTH_BUFFER_BIT),K&&(J|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),S.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),me.dispose(),be.dispose(),se.dispose(),x.dispose(),U.dispose(),Y.dispose(),P.dispose(),_e.dispose(),ge.dispose(),we.dispose(),we.removeEventListener("sessionstart",Mt),we.removeEventListener("sessionend",it),V&&(V.dispose(),V=null),Et.stop()};function de(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=le.autoReset,B=ae.enabled,K=ae.autoUpdate,J=ae.needsUpdate,X=ae.type;Pe(),le.autoReset=T,ae.enabled=B,ae.autoUpdate=K,ae.needsUpdate=J,ae.type=X}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ee(T){const B=T.target;B.removeEventListener("dispose",Ee),Fe(B)}function Fe(T){Ue(T),se.remove(T)}function Ue(T){const B=se.get(T).programs;B!==void 0&&(B.forEach(function(K){ge.releaseProgram(K)}),T.isShaderMaterial&&ge.releaseShaderCache(T))}this.renderBufferDirect=function(T,B,K,J,X,Ae){B===null&&(B=Ce);const Ie=X.isMesh&&X.matrixWorld.determinant()<0,Be=wp(T,B,K,J,X);F.setMaterial(J,Ie);let ke=K.index,Ke=1;if(J.wireframe===!0){if(ke=G.getWireframeAttribute(K),ke===void 0)return;Ke=2}const We=K.drawRange,Xe=K.attributes.position;let St=We.start*Ke,en=(We.start+We.count)*Ke;Ae!==null&&(St=Math.max(St,Ae.start*Ke),en=Math.min(en,(Ae.start+Ae.count)*Ke)),ke!==null?(St=Math.max(St,0),en=Math.min(en,ke.count)):Xe!=null&&(St=Math.max(St,0),en=Math.min(en,Xe.count));const Ct=en-St;if(Ct<0||Ct===1/0)return;P.setup(X,J,Be,K,ke);let Yn,mt=Oe;if(ke!==null&&(Yn=O.get(ke),mt=Te,mt.setIndex(Yn)),X.isMesh)J.wireframe===!0?(F.setLineWidth(J.wireframeLinewidth*A()),mt.setMode(S.LINES)):mt.setMode(S.TRIANGLES);else if(X.isLine){let Ze=J.linewidth;Ze===void 0&&(Ze=1),F.setLineWidth(Ze*A()),X.isLineSegments?mt.setMode(S.LINES):X.isLineLoop?mt.setMode(S.LINE_LOOP):mt.setMode(S.LINE_STRIP)}else X.isPoints?mt.setMode(S.POINTS):X.isSprite&&mt.setMode(S.TRIANGLES);if(X.isBatchedMesh)mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else if(X.isInstancedMesh)mt.renderInstances(St,Ct,X.count);else if(K.isInstancedBufferGeometry){const Ze=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,ya=Math.min(K.instanceCount,Ze);mt.renderInstances(St,Ct,ya)}else mt.render(St,Ct)};function Qe(T,B,K){T.transparent===!0&&T.side===Fn&&T.forceSinglePass===!1?(T.side=Qt,T.needsUpdate=!0,$r(T,B,K),T.side=ui,T.needsUpdate=!0,$r(T,B,K),T.side=Fn):$r(T,B,K)}this.compile=function(T,B,K=null){K===null&&(K=T),p=be.get(K),p.init(),M.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==K&&T.traverseVisible(function(X){X.isLight&&X.layers.test(B.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(v._useLegacyLights);const J=new Set;return T.traverse(function(X){const Ae=X.material;if(Ae)if(Array.isArray(Ae))for(let Ie=0;Ie<Ae.length;Ie++){const Be=Ae[Ie];Qe(Be,K,X),J.add(Be)}else Qe(Ae,K,X),J.add(Ae)}),M.pop(),p=null,J},this.compileAsync=function(T,B,K=null){const J=this.compile(T,B,K);return new Promise(X=>{function Ae(){if(J.forEach(function(Ie){se.get(Ie).currentProgram.isReady()&&J.delete(Ie)}),J.size===0){X(T);return}setTimeout(Ae,10)}k.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let et=null;function _t(T){et&&et(T)}function Mt(){Et.stop()}function it(){Et.start()}const Et=new cp;Et.setAnimationLoop(_t),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(T){et=T,we.setAnimationLoop(T),T===null?Et.stop():Et.start()},we.addEventListener("sessionstart",Mt),we.addEventListener("sessionend",it),this.render=function(T,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(B),B=we.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,B,w),p=be.get(T,M.length),p.init(),M.push(p),te.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(te),ne=this.localClippingEnabled,ce=Le.init(this.clippingPlanes,ne),g=me.get(T,d.length),g.init(),d.push(g),Rn(T,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort($,re),this.info.render.frame++,ce===!0&&Le.beginShadows();const K=p.state.shadowsArray;if(ae.render(K,T,B),ce===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ve.render(g,T),p.setupLights(v._useLegacyLights),B.isArrayCamera){const J=B.cameras;for(let X=0,Ae=J.length;X<Ae;X++){const Ie=J[X];Nc(g,T,Ie,Ie.viewport)}}else Nc(g,T,B);w!==null&&(y.updateMultisampleRenderTarget(w),y.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(v,T,B),P.resetDefaultState(),q=-1,b=null,M.pop(),M.length>0?p=M[M.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function Rn(T,B,K,J){if(T.visible===!1)return;if(T.layers.test(B.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(B);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Q.intersectsSprite(T)){J&&Re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(te);const Ie=Y.update(T),Be=T.material;Be.visible&&g.push(T,Ie,Be,K,Re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Q.intersectsObject(T))){const Ie=Y.update(T),Be=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Re.copy(T.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Re.copy(Ie.boundingSphere.center)),Re.applyMatrix4(T.matrixWorld).applyMatrix4(te)),Array.isArray(Be)){const ke=Ie.groups;for(let Ke=0,We=ke.length;Ke<We;Ke++){const Xe=ke[Ke],St=Be[Xe.materialIndex];St&&St.visible&&g.push(T,Ie,St,K,Re.z,Xe)}}else Be.visible&&g.push(T,Ie,Be,K,Re.z,null)}}const Ae=T.children;for(let Ie=0,Be=Ae.length;Ie<Be;Ie++)Rn(Ae[Ie],B,K,J)}function Nc(T,B,K,J){const X=T.opaque,Ae=T.transmissive,Ie=T.transparent;p.setupLightsView(K),ce===!0&&Le.setGlobalState(v.clippingPlanes,K),Ae.length>0&&Ap(X,Ae,B,K),J&&F.viewport(R.copy(J)),X.length>0&&Kr(X,B,K),Ae.length>0&&Kr(Ae,B,K),Ie.length>0&&Kr(Ie,B,K),F.buffers.depth.setTest(!0),F.buffers.depth.setMask(!0),F.buffers.color.setMask(!0),F.setPolygonOffset(!1)}function Ap(T,B,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const Ae=H.isWebGL2;V===null&&(V=new is(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")?Gr:Pi,minFilter:ns,samples:Ae?4:0})),v.getDrawingBufferSize(ye),Ae?V.setSize(ye.x,ye.y):V.setSize(na(ye.x),na(ye.y));const Ie=v.getRenderTarget();v.setRenderTarget(V),v.getClearColor(he),N=v.getClearAlpha(),N<1&&v.setClearColor(16777215,.5),v.clear();const Be=v.toneMapping;v.toneMapping=Li,Kr(T,K,J),y.updateMultisampleRenderTarget(V),y.updateRenderTargetMipmap(V);let ke=!1;for(let Ke=0,We=B.length;Ke<We;Ke++){const Xe=B[Ke],St=Xe.object,en=Xe.geometry,Ct=Xe.material,Yn=Xe.group;if(Ct.side===Fn&&St.layers.test(J.layers)){const mt=Ct.side;Ct.side=Qt,Ct.needsUpdate=!0,Oc(St,K,J,en,Ct,Yn),Ct.side=mt,Ct.needsUpdate=!0,ke=!0}}ke===!0&&(y.updateMultisampleRenderTarget(V),y.updateRenderTargetMipmap(V)),v.setRenderTarget(Ie),v.setClearColor(he,N),v.toneMapping=Be}function Kr(T,B,K){const J=B.isScene===!0?B.overrideMaterial:null;for(let X=0,Ae=T.length;X<Ae;X++){const Ie=T[X],Be=Ie.object,ke=Ie.geometry,Ke=J===null?Ie.material:J,We=Ie.group;Be.layers.test(K.layers)&&Oc(Be,B,K,ke,Ke,We)}}function Oc(T,B,K,J,X,Ae){T.onBeforeRender(v,B,K,J,X,Ae),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(v,B,K,J,T,Ae),X.transparent===!0&&X.side===Fn&&X.forceSinglePass===!1?(X.side=Qt,X.needsUpdate=!0,v.renderBufferDirect(K,B,J,X,T,Ae),X.side=ui,X.needsUpdate=!0,v.renderBufferDirect(K,B,J,X,T,Ae),X.side=Fn):v.renderBufferDirect(K,B,J,X,T,Ae),T.onAfterRender(v,B,K,J,X,Ae)}function $r(T,B,K){B.isScene!==!0&&(B=Ce);const J=se.get(T),X=p.state.lights,Ae=p.state.shadowsArray,Ie=X.state.version,Be=ge.getParameters(T,X.state,Ae,B,K),ke=ge.getProgramCacheKey(Be);let Ke=J.programs;J.environment=T.isMeshStandardMaterial?B.environment:null,J.fog=B.fog,J.envMap=(T.isMeshStandardMaterial?U:x).get(T.envMap||J.environment),Ke===void 0&&(T.addEventListener("dispose",Ee),Ke=new Map,J.programs=Ke);let We=Ke.get(ke);if(We!==void 0){if(J.currentProgram===We&&J.lightsStateVersion===Ie)return Bc(T,Be),We}else Be.uniforms=ge.getUniforms(T),T.onBuild(K,Be,v),T.onBeforeCompile(Be,v),We=ge.acquireProgram(Be,ke),Ke.set(ke,We),J.uniforms=Be.uniforms;const Xe=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Xe.clippingPlanes=Le.uniform),Bc(T,Be),J.needsLights=Cp(T),J.lightsStateVersion=Ie,J.needsLights&&(Xe.ambientLightColor.value=X.state.ambient,Xe.lightProbe.value=X.state.probe,Xe.directionalLights.value=X.state.directional,Xe.directionalLightShadows.value=X.state.directionalShadow,Xe.spotLights.value=X.state.spot,Xe.spotLightShadows.value=X.state.spotShadow,Xe.rectAreaLights.value=X.state.rectArea,Xe.ltc_1.value=X.state.rectAreaLTC1,Xe.ltc_2.value=X.state.rectAreaLTC2,Xe.pointLights.value=X.state.point,Xe.pointLightShadows.value=X.state.pointShadow,Xe.hemisphereLights.value=X.state.hemi,Xe.directionalShadowMap.value=X.state.directionalShadowMap,Xe.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xe.spotShadowMap.value=X.state.spotShadowMap,Xe.spotLightMatrix.value=X.state.spotLightMatrix,Xe.spotLightMap.value=X.state.spotLightMap,Xe.pointShadowMap.value=X.state.pointShadowMap,Xe.pointShadowMatrix.value=X.state.pointShadowMatrix),J.currentProgram=We,J.uniformsList=null,We}function Fc(T){if(T.uniformsList===null){const B=T.currentProgram.getUniforms();T.uniformsList=zo.seqWithValue(B.seq,T.uniforms)}return T.uniformsList}function Bc(T,B){const K=se.get(T);K.outputColorSpace=B.outputColorSpace,K.batching=B.batching,K.instancing=B.instancing,K.instancingColor=B.instancingColor,K.skinning=B.skinning,K.morphTargets=B.morphTargets,K.morphNormals=B.morphNormals,K.morphColors=B.morphColors,K.morphTargetsCount=B.morphTargetsCount,K.numClippingPlanes=B.numClippingPlanes,K.numIntersection=B.numClipIntersection,K.vertexAlphas=B.vertexAlphas,K.vertexTangents=B.vertexTangents,K.toneMapping=B.toneMapping}function wp(T,B,K,J,X){B.isScene!==!0&&(B=Ce),y.resetTextureUnits();const Ae=B.fog,Ie=J.isMeshStandardMaterial?B.environment:null,Be=w===null?v.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:It,ke=(J.isMeshStandardMaterial?U:x).get(J.envMap||Ie),Ke=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,We=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Xe=!!K.morphAttributes.position,St=!!K.morphAttributes.normal,en=!!K.morphAttributes.color;let Ct=Li;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Ct=v.toneMapping);const Yn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=Yn!==void 0?Yn.length:0,Ze=se.get(J),ya=p.state.lights;if(ce===!0&&(ne===!0||T!==b)){const an=T===b&&J.id===q;Le.setState(J,T,an)}let xt=!1;J.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==ya.state.version||Ze.outputColorSpace!==Be||X.isBatchedMesh&&Ze.batching===!1||!X.isBatchedMesh&&Ze.batching===!0||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||Ze.envMap!==ke||J.fog===!0&&Ze.fog!==Ae||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Le.numPlanes||Ze.numIntersection!==Le.numIntersection)||Ze.vertexAlphas!==Ke||Ze.vertexTangents!==We||Ze.morphTargets!==Xe||Ze.morphNormals!==St||Ze.morphColors!==en||Ze.toneMapping!==Ct||H.isWebGL2===!0&&Ze.morphTargetsCount!==mt)&&(xt=!0):(xt=!0,Ze.__version=J.version);let Ii=Ze.currentProgram;xt===!0&&(Ii=$r(J,B,X));let Hc=!1,sr=!1,Ma=!1;const Ft=Ii.getUniforms(),Ui=Ze.uniforms;if(F.useProgram(Ii.program)&&(Hc=!0,sr=!0,Ma=!0),J.id!==q&&(q=J.id,sr=!0),Hc||b!==T){Ft.setValue(S,"projectionMatrix",T.projectionMatrix),Ft.setValue(S,"viewMatrix",T.matrixWorldInverse);const an=Ft.map.cameraPosition;an!==void 0&&an.setValue(S,Re.setFromMatrixPosition(T.matrixWorld)),H.logarithmicDepthBuffer&&Ft.setValue(S,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ft.setValue(S,"isOrthographic",T.isOrthographicCamera===!0),b!==T&&(b=T,sr=!0,Ma=!0)}if(X.isSkinnedMesh){Ft.setOptional(S,X,"bindMatrix"),Ft.setOptional(S,X,"bindMatrixInverse");const an=X.skeleton;an&&(H.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Ft.setValue(S,"boneTexture",an.boneTexture,y)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}X.isBatchedMesh&&(Ft.setOptional(S,X,"batchingTexture"),Ft.setValue(S,"batchingTexture",X._matricesTexture,y));const Sa=K.morphAttributes;if((Sa.position!==void 0||Sa.normal!==void 0||Sa.color!==void 0&&H.isWebGL2===!0)&&Ne.update(X,K,Ii),(sr||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,Ft.setValue(S,"receiveShadow",X.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Ui.envMap.value=ke,Ui.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),sr&&(Ft.setValue(S,"toneMappingExposure",v.toneMappingExposure),Ze.needsLights&&Rp(Ui,Ma),Ae&&J.fog===!0&&ue.refreshFogUniforms(Ui,Ae),ue.refreshMaterialUniforms(Ui,J,ee,W,V),zo.upload(S,Fc(Ze),Ui,y)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(zo.upload(S,Fc(Ze),Ui,y),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ft.setValue(S,"center",X.center),Ft.setValue(S,"modelViewMatrix",X.modelViewMatrix),Ft.setValue(S,"normalMatrix",X.normalMatrix),Ft.setValue(S,"modelMatrix",X.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const an=J.uniformsGroups;for(let Ea=0,Lp=an.length;Ea<Lp;Ea++)if(H.isWebGL2){const zc=an[Ea];_e.update(zc,Ii),_e.bind(zc,Ii)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ii}function Rp(T,B){T.ambientLightColor.needsUpdate=B,T.lightProbe.needsUpdate=B,T.directionalLights.needsUpdate=B,T.directionalLightShadows.needsUpdate=B,T.pointLights.needsUpdate=B,T.pointLightShadows.needsUpdate=B,T.spotLights.needsUpdate=B,T.spotLightShadows.needsUpdate=B,T.rectAreaLights.needsUpdate=B,T.hemisphereLights.needsUpdate=B}function Cp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,B,K){se.get(T.texture).__webglTexture=B,se.get(T.depthTexture).__webglTexture=K;const J=se.get(T);J.__hasExternalTextures=!0,J.__hasExternalTextures&&(J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,B){const K=se.get(T);K.__webglFramebuffer=B,K.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(T,B=0,K=0){w=T,L=B,C=K;let J=!0,X=null,Ae=!1,Ie=!1;if(T){const ke=se.get(T);ke.__useDefaultFramebuffer!==void 0?(F.bindFramebuffer(S.FRAMEBUFFER,null),J=!1):ke.__webglFramebuffer===void 0?y.setupRenderTarget(T):ke.__hasExternalTextures&&y.rebindTextures(T,se.get(T.texture).__webglTexture,se.get(T.depthTexture).__webglTexture);const Ke=T.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ie=!0);const We=se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(We[B])?X=We[B][K]:X=We[B],Ae=!0):H.isWebGL2&&T.samples>0&&y.useMultisampledRTT(T)===!1?X=se.get(T).__webglMultisampledFramebuffer:Array.isArray(We)?X=We[K]:X=We,R.copy(T.viewport),Z.copy(T.scissor),ie=T.scissorTest}else R.copy(oe).multiplyScalar(ee).floor(),Z.copy(pe).multiplyScalar(ee).floor(),ie=fe;if(F.bindFramebuffer(S.FRAMEBUFFER,X)&&H.drawBuffers&&J&&F.drawBuffers(T,X),F.viewport(R),F.scissor(Z),F.setScissorTest(ie),Ae){const ke=se.get(T.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+B,ke.__webglTexture,K)}else if(Ie){const ke=se.get(T.texture),Ke=B||0;S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,ke.__webglTexture,K||0,Ke)}q=-1},this.readRenderTargetPixels=function(T,B,K,J,X,Ae,Ie){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ie!==void 0&&(Be=Be[Ie]),Be){F.bindFramebuffer(S.FRAMEBUFFER,Be);try{const ke=T.texture,Ke=ke.format,We=ke.type;if(Ke!==dn&&Me.convert(Ke)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Gr&&(k.has("EXT_color_buffer_half_float")||H.isWebGL2&&k.has("EXT_color_buffer_float"));if(We!==Pi&&Me.convert(We)!==S.getParameter(S.IMPLEMENTATION_COLOR_READ_TYPE)&&!(We===li&&(H.isWebGL2||k.has("OES_texture_float")||k.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=T.width-J&&K>=0&&K<=T.height-X&&S.readPixels(B,K,J,X,Me.convert(Ke),Me.convert(We),Ae)}finally{const ke=w!==null?se.get(w).__webglFramebuffer:null;F.bindFramebuffer(S.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(T,B,K=0){const J=Math.pow(2,-K),X=Math.floor(B.image.width*J),Ae=Math.floor(B.image.height*J);y.setTexture2D(B,0),S.copyTexSubImage2D(S.TEXTURE_2D,K,0,0,T.x,T.y,X,Ae),F.unbindTexture()},this.copyTextureToTexture=function(T,B,K,J=0){const X=B.image.width,Ae=B.image.height,Ie=Me.convert(K.format),Be=Me.convert(K.type);y.setTexture2D(K,0),S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,K.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,K.unpackAlignment),B.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,J,T.x,T.y,X,Ae,Ie,Be,B.image.data):B.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,J,T.x,T.y,B.mipmaps[0].width,B.mipmaps[0].height,Ie,B.mipmaps[0].data):S.texSubImage2D(S.TEXTURE_2D,J,T.x,T.y,Ie,Be,B.image),J===0&&K.generateMipmaps&&S.generateMipmap(S.TEXTURE_2D),F.unbindTexture()},this.copyTextureToTexture3D=function(T,B,K,J,X=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ae=T.max.x-T.min.x+1,Ie=T.max.y-T.min.y+1,Be=T.max.z-T.min.z+1,ke=Me.convert(J.format),Ke=Me.convert(J.type);let We;if(J.isData3DTexture)y.setTexture3D(J,0),We=S.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)y.setTexture2DArray(J,0),We=S.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}S.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,J.flipY),S.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),S.pixelStorei(S.UNPACK_ALIGNMENT,J.unpackAlignment);const Xe=S.getParameter(S.UNPACK_ROW_LENGTH),St=S.getParameter(S.UNPACK_IMAGE_HEIGHT),en=S.getParameter(S.UNPACK_SKIP_PIXELS),Ct=S.getParameter(S.UNPACK_SKIP_ROWS),Yn=S.getParameter(S.UNPACK_SKIP_IMAGES),mt=K.isCompressedTexture?K.mipmaps[X]:K.image;S.pixelStorei(S.UNPACK_ROW_LENGTH,mt.width),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,mt.height),S.pixelStorei(S.UNPACK_SKIP_PIXELS,T.min.x),S.pixelStorei(S.UNPACK_SKIP_ROWS,T.min.y),S.pixelStorei(S.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?S.texSubImage3D(We,X,B.x,B.y,B.z,Ae,Ie,Be,ke,Ke,mt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),S.compressedTexSubImage3D(We,X,B.x,B.y,B.z,Ae,Ie,Be,ke,mt.data)):S.texSubImage3D(We,X,B.x,B.y,B.z,Ae,Ie,Be,ke,Ke,mt),S.pixelStorei(S.UNPACK_ROW_LENGTH,Xe),S.pixelStorei(S.UNPACK_IMAGE_HEIGHT,St),S.pixelStorei(S.UNPACK_SKIP_PIXELS,en),S.pixelStorei(S.UNPACK_SKIP_ROWS,Ct),S.pixelStorei(S.UNPACK_SKIP_IMAGES,Yn),X===0&&J.generateMipmaps&&S.generateMipmap(We),F.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?y.setTextureCube(T,0):T.isData3DTexture?y.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?y.setTexture2DArray(T,0):y.setTexture2D(T,0),F.unbindTexture()},this.resetState=function(){L=0,C=0,w=null,F.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ec?"display-p3":"srgb",t.unpackColorSpace=ot.workingColorSpace===ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?ts:$d}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ts?yt:It}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class wS extends Kl{}wS.prototype.isWebGL1Renderer=!0;class RS extends pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class gp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Xl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Tn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Tn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new D;class Xr{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Bn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Bn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Bn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Bn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new $t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _p extends on{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ws;const fr=new D,Rs=new D,Cs=new D,Ls=new De,dr=new De,xp=new qe,To=new D,pr=new D,Ao=new D,kh=new De,fl=new De,Gh=new De;class Vh extends pt{constructor(e=new _p){if(super(),this.isSprite=!0,this.type="Sprite",ws===void 0){ws=new Zt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new gp(t,5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute("position",new Xr(i,3,0,!1)),ws.setAttribute("uv",new Xr(i,2,3,!1))}this.geometry=ws,this.material=e,this.center=new De(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),xp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const o=this.center;wo(To.set(-.5,-.5,0),Cs,o,Rs,s,r),wo(pr.set(.5,-.5,0),Cs,o,Rs,s,r),wo(Ao.set(.5,.5,0),Cs,o,Rs,s,r),kh.set(0,0),fl.set(1,0),Gh.set(1,1);let a=e.ray.intersectTriangle(To,pr,Ao,!1,fr);if(a===null&&(wo(pr.set(-.5,.5,0),Cs,o,Rs,s,r),fl.set(0,1),a=e.ray.intersectTriangle(To,Ao,pr,!1,fr),a===null))return;const l=e.ray.origin.distanceTo(fr);l<e.near||l>e.far||t.push({distance:l,point:fr.clone(),uv:hn.getInterpolation(fr,To,pr,Ao,kh,fl,Gh,new De),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wo(n,e,t,i,s,r){Ls.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(dr.x=r*Ls.x-s*Ls.y,dr.y=s*Ls.x+r*Ls.y):dr.copy(Ls),n.copy(e),n.x+=dr.x,n.y+=dr.y,n.applyMatrix4(xp)}const Wh=new D,Xh=new ht,jh=new ht,CS=new D,qh=new qe,Ro=new D,dl=new jn,Yh=new qe,pl=new Js;class LS extends Vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new qe,this.bindMatrixInverse=new qe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ro),this.boundingBox.expandByPoint(Ro)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ro),this.boundingSphere.expandByPoint(Ro)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dl.copy(this.boundingSphere),dl.applyMatrix4(s),e.ray.intersectsSphere(dl)!==!1&&(Yh.copy(s).invert(),pl.copy(e.ray).applyMatrix4(Yh),!(this.boundingBox!==null&&pl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let i=0,s=t.count;i<s;i++){e.fromBufferAttribute(t,i);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===k_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,s=this.geometry;Xh.fromBufferAttribute(s.attributes.skinIndex,e),jh.fromBufferAttribute(s.attributes.skinWeight,e),Wh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=jh.getComponent(r);if(o!==0){const a=Xh.getComponent(r);qh.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(CS.copy(Wh).applyMatrix4(qh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class vp extends pt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class PS extends Tt{constructor(e=null,t=1,i=1,s,r,o,a,l,c=Dt,u=Dt,h,f){super(null,o,a,l,c,u,s,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Kh=new qe,DS=new qe;class Lc{constructor(e=[],t=[]){this.uuid=Tn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new qe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new qe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:DS;Kh.multiplyMatrices(a,t[r]),Kh.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Lc(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new PS(t,e,e,dn,li);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){const r=e.bones[i];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new vp),this.bones.push(o),this.boneInverses.push(new qe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=i[s];e.boneInverses.push(a.toArray())}return e}}class $l extends $t{constructor(e,t,i,s=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new qe,$h=new qe,Co=[],Zh=new Xn,IS=new qe,mr=new Vt,gr=new jn;class US extends Vt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $l(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,IS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),Zh.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(Zh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,Ps),gr.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,s=this.count;if(mr.geometry=this.geometry,mr.material=this.material,mr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),gr.copy(this.boundingSphere),gr.applyMatrix4(i),e.ray.intersectsSphere(gr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ps),$h.multiplyMatrices(i,Ps),mr.matrixWorld=$h,mr.raycast(e,Co);for(let o=0,a=Co.length;o<a;o++){const l=Co[o];l.instanceId=r,l.object=this,t.push(l)}Co.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new $l(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class xa extends on{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jh=new D,Qh=new D,ef=new qe,ml=new Js,Lo=new jn;class Hs extends pt{constructor(e=new Zt,t=new xa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,r=t.count;s<r;s++)Jh.fromBufferAttribute(t,s-1),Qh.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Jh.distanceTo(Qh);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Lo.copy(i.boundingSphere),Lo.applyMatrix4(s),Lo.radius+=r,e.ray.intersectsSphere(Lo)===!1)return;ef.copy(s).invert(),ml.copy(e.ray).applyMatrix4(ef);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new D,u=new D,h=new D,f=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),M=Math.min(_.count,o.start+o.count);for(let v=d,E=M-1;v<E;v+=m){const L=_.getX(v),C=_.getX(v+1);if(c.fromBufferAttribute(p,L),u.fromBufferAttribute(p,C),ml.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const q=e.ray.origin.distanceTo(f);q<e.near||q>e.far||t.push({distance:q,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),M=Math.min(p.count,o.start+o.count);for(let v=d,E=M-1;v<E;v+=m){if(c.fromBufferAttribute(p,v),u.fromBufferAttribute(p,v+1),ml.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(f);C<e.near||C>e.far||t.push({distance:C,point:h.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const tf=new D,nf=new D;class NS extends Hs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,r=t.count;s<r;s+=2)tf.fromBufferAttribute(t,s),nf.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+tf.distanceTo(nf);e.setAttribute("lineDistance",new _n(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class OS extends Hs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class yp extends on{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sf=new qe,Zl=new Js,Po=new jn,Do=new D;class FS extends pt{constructor(e=new Zt,t=new yp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(s),Po.radius+=r,e.ray.intersectsSphere(Po)===!1)return;sf.copy(s).invert(),Zl.copy(e.ray).applyMatrix4(sf);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let _=f,g=m;_<g;_++){const p=c.getX(_);Do.fromBufferAttribute(h,p),rf(Do,p,l,s,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m;_<g;_++)Do.fromBufferAttribute(h,_),rf(Do,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rf(n,e,t,i,s,r,o){const a=Zl.distanceSqToPoint(n);if(a<t){const l=new D;Zl.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class of extends Tt{constructor(e,t,i,s,r,o,a,l,c){super(e,t,i,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pc extends on{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fi extends Pc{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class af extends on{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new He(16777215),this.specular=new He(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class BS extends on{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ma,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class lf extends xa{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Io(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function HS(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function zS(n){function e(s,r){return n[s]-n[r]}const t=n.length,i=new Array(t);for(let s=0;s!==t;++s)i[s]=s;return i.sort(e),i}function cf(n,e,t){const i=n.length,s=new n.constructor(i);for(let r=0,o=0;o!==i;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=n[a+l]}return s}function Mp(n,e,t,i){let s=1,r=n[0];for(;r!==void 0&&r[i]===void 0;)r=n[s++];if(r===void 0)return;let o=r[i];if(o!==void 0)if(Array.isArray(o))do o=r[i],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=n[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[i],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=n[s++];while(r!==void 0);else do o=r[i],o!==void 0&&(e.push(r.time),t.push(o)),r=n[s++];while(r!==void 0)}class Yr{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=t[++i],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}o=i,i=0;break t}break n}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=i[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kS extends Yr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zu,endingEnd:Zu}}intervalChanged_(e,t,i){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ju:r=e,a=2*t-i;break;case Qu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ju:o=e,l=2*i-t;break;case Qu:o=1,l=i+s[1]-s[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,m=this._weightNext,_=(i-t)/(s-t),g=_*_,p=g*_,d=-f*p+2*f*g-f*_,M=(1+f)*p+(-1.5-2*f)*g+(-.5+f)*_+1,v=(-1-m)*p+(1.5+m)*g+.5*_,E=m*p-m*g;for(let L=0;L!==a;++L)r[L]=d*o[u+L]+M*o[c+L]+v*o[l+L]+E*o[h+L];return r}}class GS extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(s-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[c+f]*h+o[l+f]*u;return r}}class VS extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class qn{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(t,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new VS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new GS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vr:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case Ga:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vr;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return Ga}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){const i=this.times,s=i.length;let r=0,o=s-1;for(;r!==s&&i[r]<e;)++r;for(;o!==-1&&i[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&HS(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Ga,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(s)l=!0;else{const h=a*i,f=h-i,m=h+i;for(let _=0;_!==i;++_){const g=t[h+_];if(g!==t[f+_]||g!==t[m+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*i,f=o*i;for(let m=0;m!==i;++m)t[f+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}qn.prototype.TimeBufferType=Float32Array;qn.prototype.ValueBufferType=Float32Array;qn.prototype.DefaultInterpolation=js;class tr extends qn{}tr.prototype.ValueTypeName="bool";tr.prototype.ValueBufferType=Array;tr.prototype.DefaultInterpolation=Vr;tr.prototype.InterpolantFactoryMethodLinear=void 0;tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Sp extends qn{}Sp.prototype.ValueTypeName="color";class Ks extends qn{}Ks.prototype.ValueTypeName="number";class WS extends Yr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(s-t);let c=e*a;for(let u=c+a;c!==u;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class rs extends qn{InterpolantFactoryMethodLinear(e){return new WS(this.times,this.values,this.getValueSize(),e)}}rs.prototype.ValueTypeName="quaternion";rs.prototype.DefaultInterpolation=js;rs.prototype.InterpolantFactoryMethodSmooth=void 0;class nr extends qn{}nr.prototype.ValueTypeName="string";nr.prototype.ValueBufferType=Array;nr.prototype.DefaultInterpolation=Vr;nr.prototype.InterpolantFactoryMethodLinear=void 0;nr.prototype.InterpolantFactoryMethodSmooth=void 0;class $s extends qn{}$s.prototype.ValueTypeName="vector";class XS{constructor(e,t=-1,i,s=$_){this.name=e,this.tracks=i,this.duration=t,this.blendMode=s,this.uuid=Tn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,s=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(qS(i[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=i.length;r!==o;++r)t.push(qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,t,i,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=zS(l);l=cf(l,1,u),c=cf(c,1,u),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ks(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===t)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let f=s[h];f||(s[h]=f=[]),f.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(h,f,m,_,g){if(m.length!==0){const p=[],d=[];Mp(m,p,d,_),p.length!==0&&g.push(new h(f,p,d))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let g=0;g<f[_].morphTargets.length;g++)m[f[_].morphTargets[g]]=-1;for(const g in m){const p=[],d=[];for(let M=0;M!==f[_].morphTargets.length;++M){const v=f[_];p.push(v.time),d.push(v.morphTarget===g?1:0)}s.push(new Ks(".morphTargetInfluence["+g+"]",p,d))}l=m.length*o}else{const m=".bones["+t[h].name+"]";i($s,m+".position",f,"pos",s),i(rs,m+".quaternion",f,"rot",s),i($s,m+".scale",f,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,s=e.length;i!==s;++i){const r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function jS(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ks;case"vector":case"vector2":case"vector3":case"vector4":return $s;case"color":return Sp;case"quaternion":return rs;case"bool":case"boolean":return tr;case"string":return nr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function qS(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=jS(n.type);if(n.times===void 0){const t=[],i=[];Mp(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Ti={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class YS{constructor(e,t,i){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,r===!1&&s.onStart!==void 0&&s.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,s.onProgress!==void 0&&s.onProgress(u,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const m=c[h],_=c[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const KS=new YS;class ir{constructor(e){this.manager=e!==void 0?e:KS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ir.DEFAULT_MATERIAL_NAME="__DEFAULT";const ti={};class $S extends Error{constructor(e,t){super(e),this.response=t}}class Ep extends ir{constructor(e){super(e)}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Ti.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ti[e]!==void 0){ti[e].push({onLoad:t,onProgress:i,onError:s});return}ti[e]=[],ti[e].push({onLoad:t,onProgress:i,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ti[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,_=m!==0;let g=0;const p=new ReadableStream({start(d){M();function M(){h.read().then(({done:v,value:E})=>{if(v)d.close();else{g+=E.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:m});for(let C=0,w=u.length;C<w;C++){const q=u[C];q.onProgress&&q.onProgress(L)}d.enqueue(E),M()}})}}});return new Response(p)}else throw new $S(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(_=>m.decode(_))}}}).then(c=>{Ti.add(e,c);const u=ti[e];delete ti[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onLoad&&m.onLoad(c)}}).catch(c=>{const u=ti[e];if(u===void 0)throw this.manager.itemError(e),c;delete ti[e];for(let h=0,f=u.length;h<f;h++){const m=u[h];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class ZS extends ir{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Wr("img");function l(){u(),Ti.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),s&&s(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class JS extends ir{constructor(e){super(e)}load(e,t,i,s){const r=new Tt,o=new ZS(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},i,s),r}}class va extends pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const gl=new qe,uf=new D,hf=new D;class Dc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ac,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;uf.setFromMatrixPosition(e.matrixWorld),t.position.copy(uf),hf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hf),t.updateMatrixWorld(),gl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class QS extends Dc{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=qs*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class eE extends va{constructor(e,t,i=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new QS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ff=new qe,_r=new D,_l=new D;class tE extends Dc{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,s=this.matrix,r=e.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),_r.setFromMatrixPosition(e.matrixWorld),i.position.copy(_r),_l.copy(i.position),_l.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(_l),i.updateMatrixWorld(),s.makeTranslation(-_r.x,-_r.y,-_r.z),ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}}class nE extends va{constructor(e,t,i=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class iE extends Dc{constructor(){super(new Rc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jl extends va{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(pt.DEFAULT_UP),this.updateMatrix(),this.target=new pt,this.shadow=new iE}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class sE extends va{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ir{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,s=e.length;i<s;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class rE extends ir{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=Ti.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ti.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ti.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Ti.add(e,l),r.manager.itemStart(e)}}const Ic="\\[\\]\\.:\\/",oE=new RegExp("["+Ic+"]","g"),Uc="[^"+Ic+"]",aE="[^"+Ic.replace("\\.","")+"]",lE=/((?:WC+[\/:])*)/.source.replace("WC",Uc),cE=/(WCOD+)?/.source.replace("WCOD",aE),uE=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Uc),hE=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Uc),fE=new RegExp("^"+lE+cE+uE+hE+"$"),dE=["material","materials","bones","map"];class pE{constructor(e,t,i){const s=i||at.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class at{constructor(e,t,i){this.path=t,this.parsedPath=i||at.parseTrackName(t),this.node=at.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new at.Composite(e,t,i):new at(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(oE,"")}static parseTrackName(e){const t=fE.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=i.nodeName.substring(s+1);dE.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=at.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}at.Composite=pE;at.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};at.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};at.prototype.GetterByBindingType=[at.prototype._getValue_direct,at.prototype._getValue_array,at.prototype._getValue_arrayElement,at.prototype._getValue_toArray];at.prototype.SetterByBindingTypeAndVersioning=[[at.prototype._setValue_direct,at.prototype._setValue_direct_setNeedsUpdate,at.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[at.prototype._setValue_array,at.prototype._setValue_array_setNeedsUpdate,at.prototype._setValue_array_setMatrixWorldNeedsUpdate],[at.prototype._setValue_arrayElement,at.prototype._setValue_arrayElement_setNeedsUpdate,at.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[at.prototype._setValue_fromArray,at.prototype._setValue_fromArray_setNeedsUpdate,at.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class mE{constructor(e,t,i=0,s=1/0){this.ray=new Js(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new Tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ql(e,this,i,t),i.sort(df),i}intersectObjects(e,t=!0,i=[]){for(let s=0,r=e.length;s<r;s++)Ql(e[s],this,i,t);return i.sort(df),i}}function df(n,e){return n.distance-e.distance}function Ql(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const s=n.children;for(let r=0,o=s.length;r<o;r++)Ql(s[r],e,t,!0)}}class pf{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yc);const mf={type:"change"},xl={type:"start"},gf={type:"end"},Uo=new Js,_f=new Mi,gE=Math.cos(70*Jd.DEG2RAD);class _E extends as{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:cs.ROTATE,MIDDLE:cs.DOLLY,RIGHT:cs.PAN},this.touches={ONE:us.ROTATE,TWO:us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",be),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",be),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(mf),i.update(),r=s.NONE},this.update=function(){const P=new D,_e=new rn().setFromUnitVectors(e.up,new D(0,1,0)),Pe=_e.clone().invert(),we=new D,de=new rn,I=new D,ve=2*Math.PI;return function(Fe=null){const Ue=i.object.position;P.copy(Ue).sub(i.target),P.applyQuaternion(_e),a.setFromVector3(P),i.autoRotate&&r===s.NONE&&ie(R(Fe)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Qe=i.minAzimuthAngle,et=i.maxAzimuthAngle;isFinite(Qe)&&isFinite(et)&&(Qe<-Math.PI?Qe+=ve:Qe>Math.PI&&(Qe-=ve),et<-Math.PI?et+=ve:et>Math.PI&&(et-=ve),Qe<=et?a.theta=Math.max(Qe,Math.min(et,a.theta)):a.theta=a.theta>(Qe+et)/2?Math.max(Qe,a.theta):Math.min(et,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&C||i.object.isOrthographicCamera?a.radius=oe(a.radius):a.radius=oe(a.radius*c),P.setFromSpherical(a),P.applyQuaternion(Pe),Ue.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let _t=!1;if(i.zoomToCursor&&C){let Mt=null;if(i.object.isPerspectiveCamera){const it=P.length();Mt=oe(it*c);const Et=it-Mt;i.object.position.addScaledVector(E,Et),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const it=new D(L.x,L.y,0);it.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0;const Et=new D(L.x,L.y,0);Et.unproject(i.object),i.object.position.sub(Et).add(it),i.object.updateMatrixWorld(),Mt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Mt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Mt).add(i.object.position):(Uo.origin.copy(i.object.position),Uo.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Uo.direction))<gE?e.lookAt(i.target):(_f.setFromNormalAndCoplanarPoint(i.object.up,i.target),Uo.intersectPlane(_f,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),_t=!0);return c=1,C=!1,_t||we.distanceToSquared(i.object.position)>o||8*(1-de.dot(i.object.quaternion))>o||I.distanceToSquared(i.target)>0?(i.dispatchEvent(mf),we.copy(i.object.position),de.copy(i.object.quaternion),I.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Ve),i.domElement.removeEventListener("pointerdown",y),i.domElement.removeEventListener("pointercancel",U),i.domElement.removeEventListener("wheel",Y),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",U),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",be),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new pf,l=new pf;let c=1;const u=new D,h=new De,f=new De,m=new De,_=new De,g=new De,p=new De,d=new De,M=new De,v=new De,E=new D,L=new De;let C=!1;const w=[],q={};let b=!1;function R(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function Z(P){const _e=Math.abs(P*.01);return Math.pow(.95,i.zoomSpeed*_e)}function ie(P){l.theta-=P}function he(P){l.phi-=P}const N=function(){const P=new D;return function(Pe,we){P.setFromMatrixColumn(we,0),P.multiplyScalar(-Pe),u.add(P)}}(),j=function(){const P=new D;return function(Pe,we){i.screenSpacePanning===!0?P.setFromMatrixColumn(we,1):(P.setFromMatrixColumn(we,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Pe),u.add(P)}}(),W=function(){const P=new D;return function(Pe,we){const de=i.domElement;if(i.object.isPerspectiveCamera){const I=i.object.position;P.copy(I).sub(i.target);let ve=P.length();ve*=Math.tan(i.object.fov/2*Math.PI/180),N(2*Pe*ve/de.clientHeight,i.object.matrix),j(2*we*ve/de.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(Pe*(i.object.right-i.object.left)/i.object.zoom/de.clientWidth,i.object.matrix),j(we*(i.object.top-i.object.bottom)/i.object.zoom/de.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ee(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(P,_e){if(!i.zoomToCursor)return;C=!0;const Pe=i.domElement.getBoundingClientRect(),we=P-Pe.left,de=_e-Pe.top,I=Pe.width,ve=Pe.height;L.x=we/I*2-1,L.y=-(de/ve)*2+1,E.set(L.x,L.y,1).unproject(i.object).sub(i.object.position).normalize()}function oe(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function pe(P){h.set(P.clientX,P.clientY)}function fe(P){re(P.clientX,P.clientX),d.set(P.clientX,P.clientY)}function Q(P){_.set(P.clientX,P.clientY)}function ce(P){f.set(P.clientX,P.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const _e=i.domElement;ie(2*Math.PI*m.x/_e.clientHeight),he(2*Math.PI*m.y/_e.clientHeight),h.copy(f),i.update()}function ne(P){M.set(P.clientX,P.clientY),v.subVectors(M,d),v.y>0?ee(Z(v.y)):v.y<0&&$(Z(v.y)),d.copy(M),i.update()}function V(P){g.set(P.clientX,P.clientY),p.subVectors(g,_).multiplyScalar(i.panSpeed),W(p.x,p.y),_.copy(g),i.update()}function te(P){re(P.clientX,P.clientY),P.deltaY<0?$(Z(P.deltaY)):P.deltaY>0&&ee(Z(P.deltaY)),i.update()}function ye(P){let _e=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?he(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,i.keyPanSpeed),_e=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?he(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(0,-i.keyPanSpeed),_e=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?ie(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(i.keyPanSpeed,0),_e=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?ie(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):W(-i.keyPanSpeed,0),_e=!0;break}_e&&(P.preventDefault(),i.update())}function Re(P){if(w.length===1)h.set(P.pageX,P.pageY);else{const _e=Me(P),Pe=.5*(P.pageX+_e.x),we=.5*(P.pageY+_e.y);h.set(Pe,we)}}function Ce(P){if(w.length===1)_.set(P.pageX,P.pageY);else{const _e=Me(P),Pe=.5*(P.pageX+_e.x),we=.5*(P.pageY+_e.y);_.set(Pe,we)}}function A(P){const _e=Me(P),Pe=P.pageX-_e.x,we=P.pageY-_e.y,de=Math.sqrt(Pe*Pe+we*we);d.set(0,de)}function S(P){i.enableZoom&&A(P),i.enablePan&&Ce(P)}function z(P){i.enableZoom&&A(P),i.enableRotate&&Re(P)}function k(P){if(w.length==1)f.set(P.pageX,P.pageY);else{const Pe=Me(P),we=.5*(P.pageX+Pe.x),de=.5*(P.pageY+Pe.y);f.set(we,de)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const _e=i.domElement;ie(2*Math.PI*m.x/_e.clientHeight),he(2*Math.PI*m.y/_e.clientHeight),h.copy(f)}function H(P){if(w.length===1)g.set(P.pageX,P.pageY);else{const _e=Me(P),Pe=.5*(P.pageX+_e.x),we=.5*(P.pageY+_e.y);g.set(Pe,we)}p.subVectors(g,_).multiplyScalar(i.panSpeed),W(p.x,p.y),_.copy(g)}function F(P){const _e=Me(P),Pe=P.pageX-_e.x,we=P.pageY-_e.y,de=Math.sqrt(Pe*Pe+we*we);M.set(0,de),v.set(0,Math.pow(M.y/d.y,i.zoomSpeed)),ee(v.y),d.copy(M);const I=(P.pageX+_e.x)*.5,ve=(P.pageY+_e.y)*.5;re(I,ve)}function le(P){i.enableZoom&&F(P),i.enablePan&&H(P)}function se(P){i.enableZoom&&F(P),i.enableRotate&&k(P)}function y(P){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",x),i.domElement.addEventListener("pointerup",U)),Ne(P),P.pointerType==="touch"?Le(P):O(P))}function x(P){i.enabled!==!1&&(P.pointerType==="touch"?ae(P):G(P))}function U(P){Oe(P),w.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",x),i.domElement.removeEventListener("pointerup",U)),i.dispatchEvent(gf),r=s.NONE}function O(P){let _e;switch(P.button){case 0:_e=i.mouseButtons.LEFT;break;case 1:_e=i.mouseButtons.MIDDLE;break;case 2:_e=i.mouseButtons.RIGHT;break;default:_e=-1}switch(_e){case cs.DOLLY:if(i.enableZoom===!1)return;fe(P),r=s.DOLLY;break;case cs.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;Q(P),r=s.PAN}else{if(i.enableRotate===!1)return;pe(P),r=s.ROTATE}break;case cs.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;pe(P),r=s.ROTATE}else{if(i.enablePan===!1)return;Q(P),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(xl)}function G(P){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ce(P);break;case s.DOLLY:if(i.enableZoom===!1)return;ne(P);break;case s.PAN:if(i.enablePan===!1)return;V(P);break}}function Y(P){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(P.preventDefault(),i.dispatchEvent(xl),te(ge(P)),i.dispatchEvent(gf))}function ge(P){const _e=P.deltaMode,Pe={clientX:P.clientX,clientY:P.clientY,deltaY:P.deltaY};switch(_e){case 1:Pe.deltaY*=16;break;case 2:Pe.deltaY*=100;break}return P.ctrlKey&&!b&&(Pe.deltaY*=10),Pe}function ue(P){P.key==="Control"&&(b=!0,document.addEventListener("keyup",me,{passive:!0,capture:!0}))}function me(P){P.key==="Control"&&(b=!1,document.removeEventListener("keyup",me,{passive:!0,capture:!0}))}function be(P){i.enabled===!1||i.enablePan===!1||ye(P)}function Le(P){switch(Te(P),w.length){case 1:switch(i.touches.ONE){case us.ROTATE:if(i.enableRotate===!1)return;Re(P),r=s.TOUCH_ROTATE;break;case us.PAN:if(i.enablePan===!1)return;Ce(P),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case us.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;S(P),r=s.TOUCH_DOLLY_PAN;break;case us.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(P),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(xl)}function ae(P){switch(Te(P),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;k(P),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;H(P),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;le(P),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;se(P),i.update();break;default:r=s.NONE}}function Ve(P){i.enabled!==!1&&P.preventDefault()}function Ne(P){w.push(P.pointerId)}function Oe(P){delete q[P.pointerId];for(let _e=0;_e<w.length;_e++)if(w[_e]==P.pointerId){w.splice(_e,1);return}}function Te(P){let _e=q[P.pointerId];_e===void 0&&(_e=new De,q[P.pointerId]=_e),_e.set(P.pageX,P.pageY)}function Me(P){const _e=P.pointerId===w[0]?w[1]:w[0];return q[_e]}i.domElement.addEventListener("contextmenu",Ve),i.domElement.addEventListener("pointerdown",y),i.domElement.addEventListener("pointercancel",U),i.domElement.addEventListener("wheel",Y,{passive:!1}),document.addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}function xf(n,e){if(e===Z_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===Wl||e===Kd){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,s=[];if(e===Wl)for(let o=1;o<=i;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=n.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class xE extends ir{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new EE(t)}),this.register(function(t){return new DE(t)}),this.register(function(t){return new IE(t)}),this.register(function(t){return new UE(t)}),this.register(function(t){return new TE(t)}),this.register(function(t){return new AE(t)}),this.register(function(t){return new wE(t)}),this.register(function(t){return new RE(t)}),this.register(function(t){return new SE(t)}),this.register(function(t){return new CE(t)}),this.register(function(t){return new bE(t)}),this.register(function(t){return new PE(t)}),this.register(function(t){return new LE(t)}),this.register(function(t){return new yE(t)}),this.register(function(t){return new NE(t)}),this.register(function(t){return new OE(t)})}load(e,t,i,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Ir.extractUrlBase(e);o=Ir.resolveURL(c,this.path)}else o=Ir.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Ep(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===bp){try{o[tt.KHR_BINARY_GLTF]=new FE(e)}catch(h){s&&s(h);return}r=JSON.parse(o[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new $E(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case tt.KHR_MATERIALS_UNLIT:o[h]=new ME;break;case tt.KHR_DRACO_MESH_COMPRESSION:o[h]=new BE(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:o[h]=new HE;break;case tt.KHR_MESH_QUANTIZATION:o[h]=new zE;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,s)}parseAsync(e,t){const i=this;return new Promise(function(s,r){i.parse(e,t,s,r)})}}function vE(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class yE{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,s=t.length;i<s;i++){const r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let s=t.cache.get(i);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new He(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],It);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Jl(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new nE(u),c.distance=h;break;case"spot":c=new eE(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Si(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(i,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,r=i.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class ME{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return bi}extendParams(e,t,i){const s=[];e.color=new He(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],It),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,yt))}return Promise.all(s)}}class SE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class EE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(a,a)}return Promise.all(r)}}class bE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class TE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new He(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],It)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&r.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class AE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class wE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new He().setRGB(a[0],a[1],a[2],It),Promise.all(r)}}class RE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class CE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new He().setRGB(a[0],a[1],a[2],It),o.specularColorTexture!==void 0&&r.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(r)}}class LE{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(i.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class PE{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:fi}extendMaterialParams(e,t){const i=this.parser,s=i.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class DE{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class IE{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class UE{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NE{constructor(e){this.name=tt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,u=s.count,h=s.byteStride,f=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,s.mode,s.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,f,s.mode,s.filter),m})})}else return null}}class OE{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=t.meshes[i.mesh];for(const c of s.primitives)if(c.mode!==un.TRIANGLES&&c.mode!==un.TRIANGLE_STRIP&&c.mode!==un.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,m=[];for(const _ of h){const g=new qe,p=new D,d=new rn,M=new D(1,1,1),v=new US(_.geometry,_.material,f);for(let E=0;E<f;E++)l.TRANSLATION&&p.fromBufferAttribute(l.TRANSLATION,E),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,E),l.SCALE&&M.fromBufferAttribute(l.SCALE,E),v.setMatrixAt(E,g.compose(p,d,M));for(const E in l)if(E==="_COLOR_0"){const L=l[E];v.instanceColor=new $l(L.array,L.itemSize,L.normalized)}else E!=="TRANSLATION"&&E!=="ROTATION"&&E!=="SCALE"&&_.geometry.setAttribute(E,l[E]);pt.prototype.copy.call(v,_),this.parser.assignFinalMaterial(v),m.push(v)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const bp="glTF",xr=12,vf={JSON:1313821514,BIN:5130562};class FE{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,xr),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==bp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-xr,r=new DataView(e,xr);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===vf.JSON){const c=new Uint8Array(e,xr+o,a);this.content=i.decode(c)}else if(l===vf.BIN){const c=xr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BE{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=ec[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=ec[u]||u.toLowerCase();if(o[u]!==void 0){const f=i.accessors[e.attributes[u]],m=zs[f.componentType];c[h]=m.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){s.decodeDracoFile(u,function(m){for(const _ in m.attributes){const g=m.attributes[_],p=l[_];p!==void 0&&(g.normalized=p)}h(m)},a,c,It,f)})})}}class HE{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class zE{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}}class Tp extends Yr{constructor(e,t,i,s){super(e,t,i,s)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=i[r+o];return t}interpolate_(e,t,i,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=s-t,h=(i-t)/u,f=h*h,m=f*h,_=e*c,g=_-c,p=-2*m+3*f,d=m-f,M=1-p,v=d-f+h;for(let E=0;E!==a;E++){const L=o[g+E+a],C=o[g+E+l]*u,w=o[_+E+a],q=o[_+E]*u;r[E]=M*L+v*C+p*w+d*q}return r}}const kE=new rn;class GE extends Tp{interpolate_(e,t,i,s){const r=super.interpolate_(e,t,i,s);return kE.fromArray(r).normalize().toArray(r),r}}const un={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},zs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},yf={9728:Dt,9729:Jt,9984:Vl,9985:kd,9986:Ho,9987:ns},Mf={33071:fn,33648:Zo,10497:Ws},vl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ec={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},xi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},VE={CUBICSPLINE:void 0,LINEAR:js,STEP:Vr},yl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function WE(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Pc({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ui})),n.DefaultMaterial}function ki(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Si(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function XE(n,e,t){let i=!1,s=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(i=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(i){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):n.attributes.position;o.push(f)}if(s){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):n.attributes.normal;a.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):n.attributes.color;l.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return i&&(n.morphAttributes.position=u),s&&(n.morphAttributes.normal=h),r&&(n.morphAttributes.color=f),n.morphTargetsRelative=!0,n})}function jE(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,s=t.length;i<s;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function qE(n){let e;const t=n.extensions&&n.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ml(t.attributes):e=n.indices+":"+Ml(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,s=n.targets.length;i<s;i++)e+=":"+Ml(n.targets[i]);return e}function Ml(n){let e="";const t=Object.keys(n).sort();for(let i=0,s=t.length;i<s;i++)e+=t[i]+":"+n[t[i]]+";";return e}function tc(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function YE(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const KE=new qe;class $E{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=!1,r=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||s&&r<98?this.textureLoader=new JS(this.options.manager):this.textureLoader=new rE(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ep(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:i,userData:{}};return ki(r,a,s),Si(a,s),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const s=i.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(i,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const s=e(t[i]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&i.push(r)}return i}getDependency(e,t){const i=e+":"+t;let s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){i.load(Ir.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const s=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){const t=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=vl[s.type],a=zs[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new $t(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=vl[s.type],c=zs[s.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=s.byteOffset||0,m=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,_=s.normalized===!0;let g,p;if(m&&m!==h){const d=Math.floor(f/m),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+d+":"+s.count;let v=t.cache.get(M);v||(g=new c(a,d*m,s.count*m/u),v=new gp(g,m/u),t.cache.add(M,v)),p=new Xr(v,l,f%m/u,_)}else a===null?g=new c(s.count*l):g=new c(a,f,s.count*l),p=new $t(g,l,_);if(s.sparse!==void 0){const d=vl.SCALAR,M=zs[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,E=s.sparse.values.byteOffset||0,L=new M(o[1],v,s.sparse.count*d),C=new c(o[2],E,s.sparse.count*l);a!==null&&(p=new $t(p.array.slice(),p.itemSize,p.normalized));for(let w=0,q=L.length;w<q;w++){const b=L[w];if(p.setX(b,C[w*l]),l>=2&&p.setY(b,C[w*l+1]),l>=3&&p.setZ(b,C[w*l+2]),l>=4&&p.setW(b,C[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,i=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,i){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const f=(r.samplers||{})[o.sampler]||{};return u.magFilter=yf[f.magFilter]||Jt,u.minFilter=yf[f.minFilter]||ns,u.wrapS=Mf[f.wrapS]||Ws,u.wrapT=Mf[f.wrapT]||Ws,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(f),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,m){let _=f;t.isImageBitmapLoader===!0&&(_=function(g){const p=new Tt(g);p.needsUpdate=!0,f(p)}),t.load(Ir.resolveURL(h,r.path),_,void 0,m)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),h.userData.mimeType=o.mimeType||YE(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,i,s){const r=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new yp,on.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new xa,on.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(s||r||o){let a="ClonedMaterial:"+i.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Pc}loadMaterial(e){const t=this,i=this.json,s=this.extensions,r=i.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[tt.KHR_MATERIALS_UNLIT]){const h=s[tt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new He(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],It),a.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,yt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Fn);const u=r.alphaMode||yl.OPAQUE;if(u===yl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===yl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new De(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==bi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==bi){const h=r.emissiveFactor;a.emissive=new He().setRGB(h[0],h[1],h[2],It)}return r.emissiveTexture!==void 0&&o!==bi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,yt)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Si(h,r),t.associations.set(h,{materials:e}),r.extensions&&ki(s,h,r),h})}createUniqueName(e){const t=at.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,s=this.primitiveCache;function r(a){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Sf(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=qE(c),h=s[u];if(h)o.push(h.promise);else{let f;c.extensions&&c.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?f=r(c):f=Sf(new Zt,c,t),s[u]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,s=this.extensions,r=i.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?WE(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let m=0,_=u.length;m<_;m++){const g=u[m],p=o[m];let d;const M=c[m];if(p.mode===un.TRIANGLES||p.mode===un.TRIANGLE_STRIP||p.mode===un.TRIANGLE_FAN||p.mode===void 0)d=r.isSkinnedMesh===!0?new LS(g,M):new Vt(g,M),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),p.mode===un.TRIANGLE_STRIP?d.geometry=xf(d.geometry,Kd):p.mode===un.TRIANGLE_FAN&&(d.geometry=xf(d.geometry,Wl));else if(p.mode===un.LINES)d=new NS(g,M);else if(p.mode===un.LINE_STRIP)d=new Hs(g,M);else if(p.mode===un.LINE_LOOP)d=new OS(g,M);else if(p.mode===un.POINTS)d=new FS(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(d.geometry.morphAttributes).length>0&&jE(d,r),d.name=t.createUniqueName(r.name||"mesh_"+e),Si(d,r),p.extensions&&ki(s,d,p),t.assignFinalMaterial(d),h.push(d)}for(let m=0,_=h.length;m<_;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&ki(s,h[0],r),h[0];const f=new $i;r.extensions&&ki(s,f,r),t.associations.set(f,{meshes:e});for(let m=0,_=h.length;m<_;m++)f.add(h[m]);return f})}loadCamera(e){let t;const i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Gt(Jd.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(t=new Rc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Si(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let s=0,r=t.joints.length;s<r;s++)i.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const f=new qe;r!==null&&f.fromArray(r.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Lc(a,l)})}loadAnimation(e){const t=this.json,i=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,f=s.channels.length;h<f;h++){const m=s.channels[h],_=s.samplers[m.sampler],g=m.target,p=g.node,d=s.parameters!==void 0?s.parameters[_.input]:_.input,M=s.parameters!==void 0?s.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",M)),c.push(_),u.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],m=h[1],_=h[2],g=h[3],p=h[4],d=[];for(let M=0,v=f.length;M<v;M++){const E=f[M],L=m[M],C=_[M],w=g[M],q=p[M];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const b=i._createAnimationTracks(E,L,C,w,q);if(b)for(let R=0;R<b.length;R++)d.push(b[R])}return new XS(r,void 0,d)})}createNodeMesh(e){const t=this.json,i=this,s=t.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){const o=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,i=this,s=t.nodes[e],r=i._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(f,KE)});for(let m=0,_=h.length;m<_;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new vp:c.length>1?u=new $i:c.length===1?u=c[0]:u=new pt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Si(u,r),r.extensions&&ki(i,u,r),r.matrix!==void 0){const h=new qe;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return s.associations.has(u)||s.associations.set(u,{}),s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],s=this,r=new $i;i.name&&(r.name=s.createUniqueName(i.name)),Si(r,i),i.extensions&&ki(t,r,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[f,m]of s.associations)(f instanceof on||f instanceof Tt)&&h.set(f,m);return u.traverse(f=>{const m=s.associations.get(f);m!=null&&h.set(f,m)}),h};return s.associations=c(r),r})}_createAnimationTracks(e,t,i,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];xi[r.path]===xi.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(a);let c;switch(xi[r.path]){case xi.weights:c=Ks;break;case xi.rotation:c=rs;break;case xi.position:case xi.scale:c=$s;break;default:switch(i.itemSize){case 1:c=Ks;break;case 2:case 3:default:c=$s;break}break}const u=s.interpolation!==void 0?VE[s.interpolation]:js,h=this._getArrayFromAccessor(i);for(let f=0,m=l.length;f<m;f++){const _=new c(l[f]+"."+xi[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=tc(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*i;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const s=this instanceof rs?GE:Tp;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function ZE(n,e,t){const i=e.attributes,s=new Xn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new D(l[0],l[1],l[2]),new D(c[0],c[1],c[2])),a.normalized){const u=tc(zs[a.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new D,l=new D;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],m=f.min,_=f.max;if(m!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(m[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(m[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(m[2]),Math.abs(_[2]))),f.normalized){const g=tc(zs[f.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}n.boundingBox=s;const o=new jn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,n.boundingSphere=o}function Sf(n,e,t){const i=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=ec[o]||o.toLowerCase();a in n.attributes||s.push(r(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});s.push(o)}return ot.workingColorSpace!==It&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Si(n,e),ZE(n,e,t),Promise.all(s).then(function(){return e.targets!==void 0?XE(n,e.targets,t):n})}class Sl extends Zt{constructor(e,t,i,s){super();const r=[],o=[],a=[],l=new D,c=new qe;c.makeRotationFromEuler(i),c.setPosition(t);const u=new qe;u.copy(c).invert(),h(),this.setAttribute("position",new _n(r,3)),this.setAttribute("normal",new _n(o,3)),this.setAttribute("uv",new _n(a,2));function h(){let g=[];const p=new D,d=new D,M=e.geometry,v=M.attributes.position,E=M.attributes.normal;if(M.index!==null){const L=M.index;for(let C=0;C<L.count;C++)p.fromBufferAttribute(v,L.getX(C)),d.fromBufferAttribute(E,L.getX(C)),f(g,p,d)}else for(let L=0;L<v.count;L++)p.fromBufferAttribute(v,L),d.fromBufferAttribute(E,L),f(g,p,d);g=m(g,l.set(1,0,0)),g=m(g,l.set(-1,0,0)),g=m(g,l.set(0,1,0)),g=m(g,l.set(0,-1,0)),g=m(g,l.set(0,0,1)),g=m(g,l.set(0,0,-1));for(let L=0;L<g.length;L++){const C=g[L];a.push(.5+C.position.x/s.x,.5+C.position.y/s.y),C.position.applyMatrix4(c),r.push(C.position.x,C.position.y,C.position.z),o.push(C.normal.x,C.normal.y,C.normal.z)}}function f(g,p,d){p.applyMatrix4(e.matrixWorld),p.applyMatrix4(u),d.transformDirection(e.matrixWorld),g.push(new Ef(p.clone(),d.clone()))}function m(g,p){const d=[],M=.5*Math.abs(s.dot(p));for(let v=0;v<g.length;v+=3){let E=0,L,C,w,q;const b=g[v+0].position.dot(p)-M,R=g[v+1].position.dot(p)-M,Z=g[v+2].position.dot(p)-M,ie=b>0,he=R>0,N=Z>0;switch(E=(ie?1:0)+(he?1:0)+(N?1:0),E){case 0:{d.push(g[v]),d.push(g[v+1]),d.push(g[v+2]);break}case 1:{if(ie&&(L=g[v+1],C=g[v+2],w=_(g[v],L,p,M),q=_(g[v],C,p,M)),he){L=g[v],C=g[v+2],w=_(g[v+1],L,p,M),q=_(g[v+1],C,p,M),d.push(w),d.push(C.clone()),d.push(L.clone()),d.push(C.clone()),d.push(w.clone()),d.push(q);break}N&&(L=g[v],C=g[v+1],w=_(g[v+2],L,p,M),q=_(g[v+2],C,p,M)),d.push(L.clone()),d.push(C.clone()),d.push(w),d.push(q),d.push(w.clone()),d.push(C.clone());break}case 2:{ie||(L=g[v].clone(),C=_(L,g[v+1],p,M),w=_(L,g[v+2],p,M),d.push(L),d.push(C),d.push(w)),he||(L=g[v+1].clone(),C=_(L,g[v+2],p,M),w=_(L,g[v],p,M),d.push(L),d.push(C),d.push(w)),N||(L=g[v+2].clone(),C=_(L,g[v],p,M),w=_(L,g[v+1],p,M),d.push(L),d.push(C),d.push(w));break}}}return d}function _(g,p,d,M){const v=g.position.dot(d)-M,E=p.position.dot(d)-M,L=v/(v-E);return new Ef(new D(g.position.x+L*(p.position.x-g.position.x),g.position.y+L*(p.position.y-g.position.y),g.position.z+L*(p.position.z-g.position.z)),new D(g.normal.x+L*(p.normal.x-g.normal.x),g.normal.y+L*(p.normal.y-g.normal.y),g.normal.z+L*(p.normal.z-g.normal.z)))}}}class Ef{constructor(e,t){this.position=e,this.normal=t}clone(){return new this.constructor(this.position.clone(),this.normal.clone())}}const No={info:"#2196f3",warning:"#ff9800",error:"#f44336",default:"#f44336"},JE=64;function bf(n){let e="",t=n+1;for(;t>0;)t--,e=String.fromCharCode(65+t%26)+e,t=Math.floor(t/26);return e}function Tf(n,e){switch(n){case"info":return e.info??No.info;case"warning":return e.warning??No.warning;case"error":return e.error??No.error;default:return e.default??No.default}}function QE(n,e,t){const i=t/2,s=t/2,r=t/2;switch(n.beginPath(),e){case"square":n.rect(0,0,t,t);break;case"diamond":n.moveTo(i,0),n.lineTo(t,s),n.lineTo(i,t),n.lineTo(0,s);break;case"triangle":n.moveTo(i,0),n.lineTo(t,t),n.lineTo(0,t);break;case"hexagon":for(let o=0;o<6;o++){const a=Math.PI/3*o-Math.PI/6,l=i+r*Math.cos(a),c=s+r*Math.sin(a);o===0?n.moveTo(l,c):n.lineTo(l,c)}break;case"circle":default:n.arc(i,s,r,0,2*Math.PI,!1);break}n.closePath()}function cn(n){return n.map(e=>({...e,position:e.position?{...e.position}:void 0,orientation:e.orientation?{...e.orientation}:void 0,cameraPosition:e.cameraPosition?{...e.cameraPosition}:void 0,cameraQuaternion:e.cameraQuaternion?{...e.cameraQuaternion}:void 0,metadata:e.metadata?{...e.metadata}:void 0}))}function eb(n,e){return JSON.stringify(n)===JSON.stringify(e)}function Oo(){return`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,9)}`}function Gi(n){return{x:n.x,y:n.y,z:n.z}}function El(n){return{x:n.x,y:n.y,z:n.z,w:n.w}}class tb{constructor(e,t){this.snapshotCanvas=null,this.snapshotRenderer=null,this.raycaster=new mE,this.mouse=new De,this.componentGroup=null,this.modelCenter=new D,this.modelSize=100,this.defects=[],this.renderedDefects=[],this.warningCount=0,this.isLoading=!1,this.isDragging=!1,this.pointerDownPos=null,this.activePointerId=null,this.disposed=!1,this.rafId=0,this.resizeObserver=null,this.pendingSelection=null,this.readOnly=!1,this.highlightMode=!1,this.highlightedMesh=null,this.heatMapMode=!1,this.heatMapDecals=[],this.undoStack=[],this.redoStack=[],this.onPointerDown=s=>{!s.isPrimary||this.activePointerId!==null||(this.activePointerId=s.pointerId,this.isDragging=!1,this.pointerDownPos={x:s.clientX,y:s.clientY})},this.onPointerMove=s=>{if(!s.isPrimary||s.pointerId!==this.activePointerId||!this.pointerDownPos)return;const r=s.clientX-this.pointerDownPos.x,o=s.clientY-this.pointerDownPos.y;r*r+o*o>JE&&(this.isDragging=!0)},this.onPointerUp=s=>{if(!s.isPrimary||s.pointerId!==this.activePointerId)return;const r=this.isDragging;this.pointerDownPos=null,this.activePointerId=null,this.isDragging=!1,r||this.handleTap(s.clientX,s.clientY)},this.onPointerCancel=s=>{s.pointerId===this.activePointerId&&(this.pointerDownPos=null,this.activePointerId=null,this.isDragging=!1)},this.onResize=()=>{const{clientWidth:s,clientHeight:r}=this.container;this.camera.aspect=(s||1)/(r||1),this.camera.updateProjectionMatrix(),this.renderer.setSize(s||1,r||1)},this.container=e,this.options={...t,defects:t.defects??[],partsVisibility:t.partsVisibility??[],backgroundColor:t.backgroundColor??14803682,markerShape:t.markerShape??"circle",palette:t.palette??{},rayLength:t.rayLength??.7,pulseOnSelect:t.pulseOnSelect??!0},this.defects=this.options.defects.slice(),this.warningCount=this.defects.length,this.canvas=document.createElement("canvas"),this.canvas.style.width="100%",this.canvas.style.height="100%",this.canvas.style.display="block",e.appendChild(this.canvas),this.renderer=new Kl({canvas:this.canvas,antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),this.scene=new RS,this.camera=new Gt(45,1,1,1e3),this.renderCamera=new Gt(45,1,1,1e3),this.mouseHelper=new Vt(new Qs(1,1,10),new BS),this.mouseHelper.visible=!1,this.scene.add(this.mouseHelper);const i=new Zt;i.setFromPoints([new D,new D]),this.line=new Hs(i,new xa),this.isLoading=!0,this.initThree(),this.bindEvents(),this.startResizeObserver(),this.loadModel(this.options.modelUrl),this.animate()}get isModelLoading(){return this.isLoading}get isModelLoaded(){return!!this.componentGroup}hasWarning(){return this.defects.length>0}setDefects(e){const t=e??[];eb(this.defects,t)||(this.saveUndoState(),this.defects=cn(t),this.warningCount=this.defects.length,this.rerenderDefects(),this.generateSnapshotReport())}getDefects(){return cn(this.defects)}getDefectById(e){return this.defects.find(t=>t.id===e)}removeDefect(e){var i,s;const t=this.defects.findIndex(r=>r.id===e);return t===-1?!1:(this.saveUndoState(),this.defects.splice(t,1),this.rerenderDefects(),(s=(i=this.options).onDefectsChanged)==null||s.call(i,this.defects.slice()),this.generateSnapshotReport(),!0)}updateDefect(e,t){var s,r;const i=this.defects.find(o=>o.id===e);return i?(this.saveUndoState(),Object.assign(i,t),this.rerenderDefects(),(r=(s=this.options).onDefectsChanged)==null||r.call(s,this.defects.slice()),this.generateSnapshotReport(),!0):!1}clearAllDefects(){var e,t;this.defects.length!==0&&(this.saveUndoState(),this.defects=[],this.warningCount=0,this.rerenderDefects(),(t=(e=this.options).onDefectsChanged)==null||t.call(e,this.defects.slice()),this.generateSnapshotReport())}addWarning(e){var E,L;if(this.readOnly||!this.pendingSelection||!this.componentGroup)return null;this.saveUndoState(),this.warningCount++;const t=this.warningCount,i=bf(t-1),{point:s,normal:r,mesh:o,meshName:a}=this.pendingSelection,l=this.mouseHelper.rotation.clone(),c=new D().setScalar(this.modelSize*.05),u=Tf(e.severity,this.options.palette),h=this.createDecalTexture(i,u,this.options.markerShape),f=new af({map:h,transparent:!0,depthTest:!0,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-5}),m=new Vt(new Sl(o,s,l,c),f);m.userData={meshParent:o},this.scene.add(m);const _=this.computeSurfacePoint(s),g=new Zt().setFromPoints([s,_]),p=new lf({color:0,dashSize:3,gapSize:1}),d=new Hs(g,p);d.computeLineDistances(),this.scene.add(d);const M=this.createLabel(i,_);M.userData={cameraPosition:this.camera.position.clone(),cameraQuaternion:this.camera.quaternion.clone()},this.scene.add(M);const v={id:`defect-${Oo()}`,label:i,meshName:a,position:Gi(s),orientation:{x:l.x,y:l.y,z:l.z},cameraPosition:Gi(this.camera.position),cameraQuaternion:El(this.camera.quaternion),severity:e.severity??"error",metadata:{optionId:e.id,optionLabel:e.label}};return this.renderedDefects.push({defect:v,decal:m,line:d,label:M}),this.defects.push(v),this.pendingSelection=null,(L=(E=this.options).onDefectsChanged)==null||L.call(E,this.defects.slice()),this.generateSnapshotReport(),v}cancelSelection(){this.pendingSelection=null}setPartsVisibility(e){this.options.partsVisibility=e??[],this.applyPartsVisibility()}setPartVisible(e,t){this.componentGroup&&this.componentGroup.traverse(i=>{i.isMesh&&i.name===e&&(i.visible=t,this.renderedDefects.filter(s=>s.defect.meshName===e).forEach(s=>{s.decal.visible=t,s.line.visible=t,s.label.visible=t}))})}getParts(){if(!this.componentGroup)return[];const e=[];return this.componentGroup.traverse(t=>{t.isMesh&&e.push({name:t.name,visible:t.visible})}),e}setModelUrl(e){this.options.modelUrl=e,this.loadModel(e)}setCameraView(e){const t=this.modelSize*2,i=this.modelCenter;switch(e){case"Front":this.camera.position.copy(i).add(new D(0,0,t));break;case"Back":this.camera.position.copy(i).add(new D(0,0,-t));break;case"Left":this.camera.position.copy(i).add(new D(-t,0,0));break;case"Right":this.camera.position.copy(i).add(new D(t,0,0));break;case"Top":this.camera.position.copy(i).add(new D(0,t,0));break;case"Bottom":this.camera.position.copy(i).add(new D(0,-t,0));break;default:return}this.controls.target.copy(i),this.camera.lookAt(i),this.camera.zoom=1,this.camera.updateProjectionMatrix(),this.controls.update()}flyToDefect(e){const t=this.defects.find(r=>r.id===e);if(!(t!=null&&t.cameraPosition)||!(t!=null&&t.cameraQuaternion))return;const i=new D(t.cameraPosition.x,t.cameraPosition.y,t.cameraPosition.z),s=new rn(t.cameraQuaternion.x,t.cameraQuaternion.y,t.cameraQuaternion.z,t.cameraQuaternion.w);this.animateCameraToTarget(this.camera,i,s,1e3)}zoomToFit(){if(!this.componentGroup)return;const e=this.modelSize*2;this.controls.target.copy(this.modelCenter),this.camera.position.copy(this.modelCenter).add(new D(e*.5,e*.3,e)),this.camera.zoom=1,this.camera.lookAt(this.modelCenter),this.camera.updateProjectionMatrix(),this.controls.update()}undo(){var e,t;return this.undoStack.length===0?!1:(this.redoStack.push(cn(this.defects)),this.defects=cn(this.undoStack.pop()),this.warningCount=this.defects.length,this.rerenderDefects(),(t=(e=this.options).onDefectsChanged)==null||t.call(e,cn(this.defects)),this.generateSnapshotReport(),!0)}redo(){var e,t;return this.redoStack.length===0?!1:(this.undoStack.push(cn(this.defects)),this.defects=cn(this.redoStack.pop()),this.warningCount=this.defects.length,this.rerenderDefects(),(t=(e=this.options).onDefectsChanged)==null||t.call(e,cn(this.defects)),this.generateSnapshotReport(),!0)}setReadOnly(e){this.readOnly=e}setHighlightMode(e){this.highlightMode=e,!e&&this.highlightedMesh&&(this.resetMeshHighlight(this.highlightedMesh),this.highlightedMesh=null)}setHeatMap(e){this.heatMapMode=e,this.applyHeatMap()}addDistributedWarnings(e){var r,o,a,l;if(!this.componentGroup||e<=0)return[];const t=[];this.componentGroup.traverse(c=>{c.isMesh&&c.visible&&t.push(c)});const i=((o=(r=this.options).getSelectionOptions)==null?void 0:o.call(r))??[];if(t.length===0||i.length===0)return[];this.saveUndoState();const s=[];for(let c=0;c<e;c++){const u=t[c%t.length],h=u.geometry.getAttribute("position"),f=u.geometry.getAttribute("normal");if(!h||h.count===0)continue;const m=(c*37+11)%h.count,_=new D().fromBufferAttribute(h,m).applyMatrix4(u.matrixWorld),g=f?new D().fromBufferAttribute(f,m).transformDirection(u.matrixWorld).normalize():_.clone().sub(this.modelCenter).normalize(),p=new rn().setFromUnitVectors(new D(0,0,1),g),d=i[c%i.length],M=++this.warningCount,v=bf(M-1),E=new ai().setFromQuaternion(p);s.push({id:`defect-${Oo()}`,label:v,meshName:u.name||"Unnamed mesh",position:Gi(_),orientation:{x:E.x,y:E.y,z:E.z},cameraPosition:Gi(this.camera.position),cameraQuaternion:El(this.camera.quaternion),severity:d.severity??"warning",metadata:{optionId:d.id,optionLabel:d.label,generated:!0}})}return this.defects.push(...s),this.rerenderDefects(),(l=(a=this.options).onDefectsChanged)==null||l.call(a,cn(this.defects)),this.generateSnapshotReport(),cn(s)}generateCameraImages(){if(!this.componentGroup)return[];const e=1024,t=768,i=[[84.33,76.3,97.79],[-57.5,-33.95,-37.94]],{canvas:s,renderer:r}=this.getSnapshotRenderer(e,t),o=[];try{i.forEach(a=>{this.renderCamera.copy(this.camera),this.renderCamera.position.set(a[0],a[1],a[2]),this.renderCamera.lookAt(new D(0,0,0)),this.renderCamera.zoom=.6,this.renderCamera.updateProjectionMatrix(),r.setClearColor(14803682,.6),r.render(this.scene,this.renderCamera),o.push(s.toDataURL())})}finally{this.renderCamera.copy(this.camera)}return o}captureSnapshot(e){return this.captureSnapshotInternal(e)}generateSnapshotReport(){if(!this.options.onSnapshotReport||!this.componentGroup)return;const e=["top","front","isometric","left","right","back"],t=new Date().toISOString(),i=e.map(r=>({view:r,dataUri:this.captureSnapshotInternal(r),capturedAt:t})),s={id:`report-${Oo()}`,defects:cn(this.defects),images:i,generatedAt:t};this.options.onSnapshotReport(s)}dispose(){var e,t;this.clearHeatMapDecals(),this.disposed=!0,cancelAnimationFrame(this.rafId),this.stopResizeObserver(),this.unbindEvents(),this.controls.dispose(),this.scene.traverse(i=>{var r,o,a;const s=i;if(s.isMesh||i.isSprite){(o=(r=s.geometry)==null?void 0:r.dispose)==null||o.call(r);const l=s.material;Array.isArray(l)?l.forEach(c=>c.dispose()):(a=l==null?void 0:l.dispose)==null||a.call(l)}}),(e=this.snapshotRenderer)==null||e.dispose(),(t=this.snapshotRenderer)==null||t.forceContextLoss(),this.snapshotRenderer=null,this.snapshotCanvas=null,this.renderer.dispose(),this.renderer.forceContextLoss(),this.canvas.remove()}captureSnapshotInternal(e){if(!this.componentGroup)return"";const t=1024,i=768,{canvas:s,renderer:r}=this.getSnapshotRenderer(t,i),o=this.camera.position.clone(),a=this.camera.quaternion.clone(),l=this.camera.zoom;try{const c=this.modelSize*2,u=this.modelCenter;switch(e){case"top":this.camera.position.set(0,c,0);break;case"front":this.camera.position.set(0,0,c);break;case"back":this.camera.position.set(0,0,-c);break;case"left":this.camera.position.set(-c,0,0);break;case"right":this.camera.position.set(c,0,0);break;case"isometric":this.camera.position.set(c,c,c);break}return this.camera.position.add(u),this.camera.lookAt(u),this.camera.zoom=1,this.camera.updateProjectionMatrix(),r.setClearColor(this.options.backgroundColor,.6),r.render(this.scene,this.camera),s.toDataURL("image/png")}finally{this.camera.position.copy(o),this.camera.quaternion.copy(a),this.camera.zoom=l,this.camera.updateProjectionMatrix()}}getSnapshotRenderer(e,t){return(!this.snapshotCanvas||!this.snapshotRenderer)&&(this.snapshotCanvas=document.createElement("canvas"),this.snapshotRenderer=new Kl({canvas:this.snapshotCanvas,antialias:!0,preserveDrawingBuffer:!0})),this.snapshotRenderer.setSize(e,t),{canvas:this.snapshotCanvas,renderer:this.snapshotRenderer}}saveUndoState(){this.undoStack.push(cn(this.defects)),this.redoStack=[],this.undoStack.length>50&&this.undoStack.shift()}initThree(){const{clientWidth:e,clientHeight:t}=this.container;this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(e||1,t||1),this.renderer.setClearColor(this.options.backgroundColor,.6),this.camera.position.z=150,this.renderCamera.position.setZ(150),this.controls=new _E(this.camera,this.renderer.domElement),this.controls.minDistance=50,this.controls.maxDistance=150,this.scene.add(new sE(4210752));const i=new Jl(16768460,3);i.position.set(1,.75,.5),this.scene.add(i);const s=new Jl(13421823,3);s.position.set(-1,.75,-.5),this.scene.add(s)}loadModel(e){this.isLoading=!0,new xE().load(e,i=>{var o,a;this.clearHeatMapDecals(),this.componentGroup&&(this.componentGroup.traverse(l=>{var c,u,h;if(l.isMesh){(u=(c=l.geometry)==null?void 0:c.dispose)==null||u.call(c);const f=l.material;Array.isArray(f)?f.forEach(m=>m.dispose()):(h=f==null?void 0:f.dispose)==null||h.call(f)}}),this.scene.remove(this.componentGroup)),this.componentGroup=i.scene,this.componentGroup.scale.set(6,6,6),this.scene.add(this.componentGroup),this.componentGroup.updateMatrixWorld(!0);const s=new Xn().setFromObject(this.componentGroup);s.getCenter(this.modelCenter);const r=s.getSize(new D);this.modelSize=Math.max(r.x,r.y,r.z)||1,this.camera.near=this.modelSize/1e3,this.camera.far=this.modelSize*100,this.controls.minDistance=this.modelSize*.1,this.controls.maxDistance=this.modelSize*20,this.zoomToFit(),this.isLoading=!1,this.applyPartsVisibility(),this.rerenderDefects(),(a=(o=this.options).onModelLoaded)==null||a.call(o,this.getParts()),this.applyHeatMap(),this.generateSnapshotReport()},void 0,i=>{var s,r;this.isLoading=!1,(r=(s=this.options).onModelLoadError)==null||r.call(s,i)})}applyPartsVisibility(){if(!this.componentGroup)return;const e=new Map(this.options.partsVisibility.map(t=>[t.meshName,t.visible]));this.componentGroup.traverse(t=>{t.isMesh&&e.has(t.name)&&(t.visible=e.get(t.name))})}findMeshByName(e){if(!e||!this.componentGroup)return null;let t=null;return this.componentGroup.traverse(i=>{!t&&i.isMesh&&i.name===e&&(t=i)}),t}rerenderDefects(){this.renderedDefects.forEach(e=>{this.scene.remove(e.decal),this.scene.remove(e.line),this.scene.remove(e.label)}),this.renderedDefects=[],this.defects.forEach(e=>this.renderDefect(e)),this.applyHeatMap()}clearHeatMapDecals(){this.heatMapDecals.forEach(e=>{var i;this.scene.remove(e),e.geometry.dispose();const t=e.material;(i=t.map)==null||i.dispose(),t.dispose()}),this.heatMapDecals=[]}applyHeatMap(){this.clearHeatMapDecals(),this.heatMapMode&&this.componentGroup&&this.defects.forEach(e=>{const t=this.findMeshByName(e.meshName);if(!t||!e.position)return;const i=new D(e.position.x,e.position.y,e.position.z),s=e.orientation?new ai(e.orientation.x,e.orientation.y,e.orientation.z):new ai,r=new D().setScalar(this.modelSize*.16),o=new bi({map:this.createHeatMapTexture(),transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,blending:Bl}),a=new Vt(new Sl(t,i,s,r),o);a.renderOrder=2,this.scene.add(a),this.heatMapDecals.push(a)})}createHeatMapTexture(){const t=document.createElement("canvas");t.width=128,t.height=128;const i=t.getContext("2d"),s=i.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);s.addColorStop(0,"rgba(255, 45, 45, 0.9)"),s.addColorStop(.32,"rgba(255, 120, 30, 0.65)"),s.addColorStop(.68,"rgba(255, 220, 30, 0.2)"),s.addColorStop(1,"rgba(255, 220, 30, 0)"),i.fillStyle=s,i.fillRect(0,0,128,128);const r=new of(t);return r.needsUpdate=!0,r}renderDefect(e){if(!this.componentGroup)return;const t=this.findMeshByName(e.meshName);if(!t||!e.position)return;const i=new D(e.position.x,e.position.y,e.position.z),s=e.orientation?new ai(e.orientation.x,e.orientation.y,e.orientation.z):new ai,r=new D().setScalar(this.modelSize*.05),o=Tf(e.severity,this.options.palette),a=this.createDecalTexture(e.label??"",o,this.options.markerShape),l=new af({map:a,transparent:!0,depthTest:!0,depthWrite:!0,polygonOffset:!0,polygonOffsetFactor:-5}),c=new Vt(new Sl(t,i,s,r),l);c.userData={meshParent:t},this.scene.add(c);const u=this.computeSurfacePoint(i),h=new Zt().setFromPoints([i,u]),f=new lf({color:0,dashSize:3,gapSize:1}),m=new Hs(h,f);m.computeLineDistances(),this.scene.add(m);const _=this.createLabel(e.label??"",u);_.userData={cameraPosition:e.cameraPosition?new D(e.cameraPosition.x,e.cameraPosition.y,e.cameraPosition.z):this.camera.position.clone(),cameraQuaternion:e.cameraQuaternion?new rn(e.cameraQuaternion.x,e.cameraQuaternion.y,e.cameraQuaternion.z,e.cameraQuaternion.w):this.camera.quaternion.clone()},this.scene.add(_),this.renderedDefects.push({defect:e,decal:c,line:m,label:_})}computeSurfacePoint(e){return e.clone().sub(this.modelCenter).normalize().multiplyScalar(this.modelSize*this.options.rayLength).add(this.modelCenter)}createDecalTexture(e,t,i){const r=document.createElement("canvas");r.width=256,r.height=256;const o=r.getContext("2d");QE(o,i,256),o.fillStyle=t,o.fill();const a=e.length>1?256*55/100:256*80/100;o.font=a+"px Arial",o.fillStyle="white",o.textAlign="center",o.textBaseline="middle",o.fillText(e,256/2,256/2);const l=new Tt(r);return l.needsUpdate=!0,l}createLabel(e,t){const i=document.createElement("canvas"),s=i.getContext("2d"),r=1e3;s.font=r+"px Arial";const o=100,a=s.measureText(e).width,l=a+o*2,c=r+o*2;s.canvas.width=l,s.canvas.height=c,s.fillStyle="rgba(0, 0, 0, 0.5)",s.fillRect(0,0,l,c),s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.font=r+"px Arial",s.fillText(e,l/2,c/2,a);const u=new of(i),h=new _p({map:u}),f=new Vh(h);return f.position.copy(t),f.scale.set(this.modelSize*.15,this.modelSize*.08,1),f}resetMeshHighlight(e){var i;const t=e.material;Array.isArray(t)?t.forEach(s=>{var r;(r=s.emissive)==null||r.setHex(0)}):(i=t.emissive)==null||i.setHex(0)}highlightMesh(e){const t=e.material;Array.isArray(t)?t.forEach(i=>{i.emissive&&i.emissive.setHex(3355443)}):t.emissive&&t.emissive.setHex(3355443)}pulseDefect(e){if(!this.options.pulseOnSelect)return;const t=e.decal,i=Date.now(),s=600,r=()=>{if(this.disposed)return;const a=(Date.now()-i)/s;if(a>=1){t.scale.set(1,1,1);return}const l=1+Math.sin(a*Math.PI)*.6;t.scale.set(l,l,l),requestAnimationFrame(r)};r()}bindEvents(){window.addEventListener("resize",this.onResize),this.canvas.addEventListener("pointerdown",this.onPointerDown),this.canvas.addEventListener("pointerup",this.onPointerUp),this.canvas.addEventListener("pointermove",this.onPointerMove),this.canvas.addEventListener("pointercancel",this.onPointerCancel)}unbindEvents(){window.removeEventListener("resize",this.onResize),this.canvas.removeEventListener("pointerdown",this.onPointerDown),this.canvas.removeEventListener("pointerup",this.onPointerUp),this.canvas.removeEventListener("pointermove",this.onPointerMove),this.canvas.removeEventListener("pointercancel",this.onPointerCancel)}handleTap(e,t){var h,f,m,_;if(this.readOnly)return;const i=this.checkIntersection(e,t);if(!i){this.pendingSelection=null;return}if(i instanceof Vh){const g=this.renderedDefects.find(M=>M.label===i);g&&this.pulseDefect(g);const p=i.userData.cameraPosition,d=i.userData.cameraQuaternion;p&&d&&this.animateCameraToTarget(this.camera,p,d,1e3);return}const s=this.pendingSelection,r=i,o=s==null?void 0:s.point,a=s==null?void 0:s.normal;if(!s||!o||!a||s.mesh!==r)return;const l=a.clone().multiplyScalar(10).add(o),c=this.line.geometry.attributes.position;c.setXYZ(0,o.x,o.y,o.z),c.setXYZ(1,l.x,l.y,l.z),c.needsUpdate=!0;const u=((f=(h=this.options).getSelectionOptions)==null?void 0:f.call(h))??[];(_=(m=this.options).onSelectionRequest)==null||_.call(m,{id:Oo(),meshName:r.name,point:Gi(o),normal:Gi(a),cameraPosition:Gi(this.camera.position),cameraQuaternion:El(this.camera.quaternion),options:u})}checkIntersection(e,t){if(!this.componentGroup)return null;const i=[];if(this.componentGroup.traverse(h=>{h.isMesh&&h.visible&&i.push(h)}),this.renderedDefects.forEach(h=>i.push(h.label)),i.length===0)return null;const s=this.renderer.domElement.getBoundingClientRect();this.mouse.x=(e-s.left)/s.width*2-1,this.mouse.y=-((t-s.top)/s.height)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const r=this.raycaster.intersectObjects(i,!0);if(r.length===0)return this.highlightMode&&this.highlightedMesh&&(this.resetMeshHighlight(this.highlightedMesh),this.highlightedMesh=null),this.pendingSelection=null,null;const o=r[0],a=o.object;if(a.isSprite)return this.pendingSelection=null,a;const l=a;this.highlightMode&&l!==this.highlightedMesh&&(this.highlightedMesh&&this.resetMeshHighlight(this.highlightedMesh),this.highlightMesh(l),this.highlightedMesh=l);const c=o.point;this.mouseHelper.position.copy(c);const u=o.face?o.face.normal.clone().transformDirection(l.matrixWorld):new D;return u.normalize(),this.mouseHelper.lookAt(u.clone().add(c)),this.pendingSelection={point:c,normal:u,mesh:l,meshName:l.name},l}animateCameraToTarget(e,t,i,s){const r=Date.now(),o=e.position.clone(),a=e.quaternion.clone(),l=(u,h,f)=>u+(h-u)*f,c=()=>{if(this.disposed)return;const u=Date.now()-r,h=Math.min(u/s,1);e.position.x=l(o.x,t.x,h),e.position.y=l(o.y,t.y,h),e.position.z=l(o.z,t.z,h),e.quaternion.copy(a).slerp(i,h),e.lookAt(new D(0,0,0)),e.updateProjectionMatrix(),h<1&&requestAnimationFrame(c)};c()}animate(){this.disposed||(this.rafId=requestAnimationFrame(()=>this.animate()),this.renderer.render(this.scene,this.camera))}startResizeObserver(){typeof ResizeObserver>"u"||(this.resizeObserver=new ResizeObserver(()=>{const{clientWidth:e,clientHeight:t}=this.container;e===0||t===0||(this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t))}),this.resizeObserver.observe(this.container))}stopResizeObserver(){var e;(e=this.resizeObserver)==null||e.disconnect(),this.resizeObserver=null}}const Af={it:{modal:{title:"Seleziona difetto",partLabel:"Parte:",cancel:"Annulla"}},en:{modal:{title:"Select defect",partLabel:"Part:",cancel:"Cancel"}}};function nb(n){return typeof n=="object"&&n!==null?n:Af[n??"it"]??Af.it}const ib={class:"warning-modal-title"},sb={key:0,class:"warning-modal-subtitle"},rb={class:"warning-modal-options"},ob=["onClick"],ab=ld({inheritAttrs:!1,__name:"WarningViewer",props:{modelUrl:{},defects:{},partsVisibility:{},selectionOptions:{},backgroundColor:{},locale:{}},emits:["defects-change","model-loaded","model-load-error","snapshot-report"],setup(n,{expose:e,emit:t}){const i=n,s=t,r=ji(()=>nb(i.locale)),o=Pt(null);let a=null;const l=Pt(null);function c(h){a==null||a.addWarning(h),l.value=null}function u(){a==null||a.cancelSelection(),l.value=null}return hd(()=>{o.value&&(a=new tb(o.value,{modelUrl:i.modelUrl,defects:i.defects,partsVisibility:i.partsVisibility,backgroundColor:i.backgroundColor,getSelectionOptions:()=>i.selectionOptions??[],onSelectionRequest:h=>{l.value=h},onDefectsChanged:h=>s("defects-change",h),onModelLoaded:h=>s("model-loaded",h),onModelLoadError:h=>s("model-load-error",h),onSnapshotReport:h=>s("snapshot-report",h)}))}),mc(()=>{a==null||a.dispose(),a=null}),Ri(()=>i.defects,h=>a==null?void 0:a.setDefects(h??[])),Ri(()=>i.partsVisibility,h=>a==null?void 0:a.setPartsVisibility(h??[])),Ri(()=>i.modelUrl,h=>{h&&(a==null||a.setModelUrl(h))}),e({engine:()=>a}),(h,f)=>(je(),$e(vt,null,[xe("div",Dd({ref_key:"containerRef",ref:o},h.$attrs,{class:"warning-viewer",style:{width:"100%",height:"100%",position:"relative"}}),null,16),(je(),Ld(Dm,{to:"body"},[l.value?(je(),$e("div",{key:0,class:"warning-modal-backdrop",role:"dialog","aria-modal":"true",onClick:xu(u,["self"])},[xe("div",{class:"warning-modal",onClick:f[0]||(f[0]=xu(()=>{},["stop"]))},[xe("h3",ib,st(r.value.modal.title),1),l.value.meshName?(je(),$e("small",sb,st(r.value.modal.partLabel)+" "+st(l.value.meshName),1)):Ut("",!0),xe("ul",rb,[(je(!0),$e(vt,null,Ln(l.value.options,m=>(je(),$e("li",{key:m.id,class:"warning-modal-option"},[xe("button",{class:"warning-modal-option-btn",onClick:_=>c(m)},[m.severity?(je(),$e("span",{key:0,class:Pn(`warning-modal-severity-dot warning-modal-severity-dot--${m.severity}`)},null,2)):Ut("",!0),Is(" "+st(m.label),1)],8,ob)]))),128))]),xe("button",{class:"warning-modal-cancel",onClick:u},st(r.value.modal.cancel),1)])])):Ut("",!0)]))],64))}}),lb=[{id:"MUSCLE_CAR",label:"Muscle Car",hasPreset:!1,scenarios:[{id:"empty",label:"Start empty"},{id:"high-poly",label:"High polygon model",badge:"High poly"},{id:"high-warnings",label:"High number of warnings",badge:"75 warnings",warningCount:75}]},{id:"Van",label:"Van",hasPreset:!1,scenarios:[{id:"empty",label:"Start empty"},{id:"preset",label:"Preset inspection",badge:"8 warnings",warningCount:8}]},{id:"apple_iphone_18_pro_max_black",label:"iPhone 18 Pro Max",hasPreset:!1,scenarios:[{id:"empty",label:"Start empty"}]},{id:"watch",label:"Watch",hasPreset:!1,scenarios:[{id:"empty",label:"Start empty"}]}],cb={class:"app-shell"},ub={class:"app-header"},hb={class:"app-title"},fb={class:"app-header-actions"},db=["aria-pressed"],pb={class:"workspace"},mb=["aria-label","aria-expanded"],gb={"aria-hidden":"true"},_b={class:"scenario-menu","aria-label":"Demo scenarios"},xb=["onClick"],vb={key:0},yb={class:"scenario-model",open:""},Mb={class:"upload-button"},Sb={key:0,role:"alert",class:"scenario-error"},Eb={key:0,class:"workspace-content"},bb={class:"page-tabs",role:"tablist","aria-label":"Viewer pages"},Tb={class:"app-toolbar"},Ab={class:"toolbar-group"},wb=["onClick"],Rb={class:"toolbar-group"},Cb={class:"toolbar-stat"},Lb={class:"toolbar-stat"},Pb={class:"app-main"},Db={class:"app-viewer"},Ib={key:0,class:"app-overlay"},Ub={key:1,class:"app-overlay app-overlay--error"},Nb={key:0,class:"app-sidebar"},Ob={class:"sidebar-section"},Fb={key:0,class:"sidebar-empty"},Bb={class:"part-list"},Hb={class:"part-label"},zb=["checked","onChange"],kb={class:"sidebar-section"},Gb={class:"sidebar-title"},Vb={key:0,class:"sidebar-empty"},Wb={class:"defect-list"},Xb={class:"defect-label"},jb={class:"defect-part"},qb=["onClick"],Yb={class:"sidebar-section"},Kb={class:"sidebar-title"},$b={key:0,class:"sidebar-empty"},Zb={class:"report-time"},Jb={class:"report-images"},Qb=["src","alt"],eT={key:1,class:"app-sidebar analytics-panel"},tT={class:"analytics-summary"},nT={class:"sidebar-section"},iT={key:0,class:"sidebar-empty"},sT={class:"stat-track"},rT={class:"sidebar-section"},oT={key:1,class:"demo-setup"},aT=ld({__name:"App",setup(n){function e(ne,V,te=!1){return`${ne}${te?"assets/models":"models"}/${V}.glb`}const t=[{id:"scratch",label:"Scratch",severity:"warning"},{id:"dent",label:"Dent",severity:"error"},{id:"rust",label:"Rust",severity:"error"},{id:"crack",label:"Crack",severity:"error"},{id:"misalignment",label:"Misalignment",severity:"info"}],i=["Front","Back","Left","Right","Top","Bottom"],s=lb,r=Pt(null),o=Pt([]),a=Pt([]),l=Pt([]),c=Pt([]),u=Pt(!1),h=Pt(!0),f=Pt(!0),m=Pt(!0),_=Pt(null),g=Pt(null),p=Pt(null),d=Pt(null),M=Pt("Demo"),v=Pt("viewer"),E=Pt(0);Ri(p,(ne,V)=>{V!=null&&V.startsWith("blob:")&&URL.revokeObjectURL(V)}),mc(()=>{var ne;(ne=p.value)!=null&&ne.startsWith("blob:")&&URL.revokeObjectURL(p.value)});async function L(ne,V){var te,ye,Re,Ce,A,S;_.value=null;try{let z=[];if(V.id==="preset"){const H=await fetch("/point-of-attention-ui/vue/scenarios.json");if(!H.ok)throw new Error(`Could not load scenarios (${H.status})`);z=(await H.json())[ne.id]??[]}E.value=z.length===0?V.warningCount??0:0;const k=e("/point-of-attention-ui/vue/",ne.id);c.value=[],k===p.value&&((ye=(te=r.value)==null?void 0:te.engine())==null||ye.setDefects(z),E.value>0&&((Ce=(Re=r.value)==null?void 0:Re.engine())==null||Ce.addDistributedWarnings(E.value),E.value=0)),o.value=k===p.value?((S=(A=r.value)==null?void 0:A.engine())==null?void 0:S.getDefects())??z:z,k!==p.value&&(l.value=[],a.value=[]),k!==p.value&&(m.value=!0),v.value="viewer",d.value=ne,M.value=`${ne.label} — ${V.label}`,p.value=k}catch(z){_.value=String(z)}}function C(){if(!g.value){_.value="Choose a GLB file first.";return}E.value=0,_.value=null,o.value=[],l.value=[],a.value=[],c.value=[],m.value=!0,v.value="viewer",d.value=null,M.value=`${g.value.name} — Uploaded model`,p.value=URL.createObjectURL(g.value)}function w(){p.value=null,d.value=null,_.value=null,v.value="viewer"}const q=ji(()=>c.value),b=ji(()=>he("type")),R=ji(()=>[...he("component")].sort((ne,V)=>V.count-ne.count)),Z=ji(()=>Math.max(1,...b.value.map(ne=>ne.count))),ie=ji(()=>Math.max(1,...R.value.map(ne=>ne.count)));function he(ne){const V=new Map;return o.value.forEach(te=>{var Re;const ye=ne==="type"?String(((Re=te.metadata)==null?void 0:Re.optionLabel)??te.label??"Unclassified"):te.meshName??"Unassigned";V.set(ye,(V.get(ye)??0)+1)}),[...V].map(([te,ye])=>({label:te,count:ye}))}function N(ne){o.value=ne}function j(ne){var V,te;l.value=ne,a.value=ne.map(ye=>({meshName:ye.name,visible:!0})),m.value=!1,E.value>0&&((te=(V=r.value)==null?void 0:V.engine())==null||te.addDistributedWarnings(E.value),E.value=0)}function W(ne){if(d.value){const V=e("/point-of-attention-ui/vue/",d.value.id);if(p.value===V){_.value=null,m.value=!0,p.value=e("/point-of-attention-ui/vue/",d.value.id,!0);return}}_.value=String(ne),m.value=!1}function ee(ne){c.value=[ne]}function $(ne,V){var te,ye;a.value=a.value.map(Re=>Re.meshName===ne?{...Re,visible:V}:Re),(ye=(te=r.value)==null?void 0:te.engine())==null||ye.setPartVisible(ne,V)}function re(ne){var V,te;(te=(V=r.value)==null?void 0:V.engine())==null||te.setCameraView(ne)}function oe(){var ne,V;(V=(ne=r.value)==null?void 0:ne.engine())==null||V.clearAllDefects()}function pe(){var ne,V;(V=(ne=r.value)==null?void 0:ne.engine())==null||V.undo()}function fe(){var ne,V;(V=(ne=r.value)==null?void 0:ne.engine())==null||V.redo()}function Q(){var ne,V;(V=(ne=r.value)==null?void 0:ne.engine())==null||V.zoomToFit()}function ce(ne){var V,te;(te=(V=r.value)==null?void 0:V.engine())==null||te.removeDefect(ne)}return Ri([v,p],()=>{var ne,V;(V=(ne=r.value)==null?void 0:ne.engine())==null||V.setHeatMap(v.value==="analytics")}),(ne,V)=>(je(),$e("div",cb,[xe("header",ub,[xe("h1",hb,[Is(" Point of Attention — "+st(p.value?M.value:"Demo")+" ",1),V[6]||(V[6]=xe("span",{class:"app-badge"},"Vue",-1))]),xe("div",fb,[p.value?(je(),$e("button",{key:0,class:"toolbar-btn",onClick:V[0]||(V[0]=te=>h.value=!h.value),"aria-pressed":h.value},st(h.value?"Hide details":"Show details"),9,db)):Ut("",!0),p.value?(je(),$e("button",{key:1,class:"toolbar-btn",onClick:w},"Close demo")):Ut("",!0),V[7]||(V[7]=xe("a",{class:"app-link",href:"https://github.com/LucaAstolfi88/point-of-attention-ui",target:"_blank",rel:"noopener"}," GitHub ↗ ",-1))])]),xe("div",pb,[xe("aside",{class:Pn(["scenario-sidebar",{"scenario-sidebar--collapsed":!f.value}])},[xe("button",{class:"menu-collapse-btn",type:"button","aria-label":f.value?"Collapse scenario menu":"Expand scenario menu","aria-expanded":f.value,onClick:V[1]||(V[1]=te=>f.value=!f.value)},[xe("span",gb,st(f.value?"‹":"›"),1)],8,mb),bm(xe("nav",_b,[V[10]||(V[10]=xe("div",{class:"menu-heading"},[xe("h2",{class:"sidebar-title"},"Demo scenarios")],-1)),(je(!0),$e(vt,null,Ln(Cl(s),te=>(je(),$e("details",{key:te.id,class:"scenario-model",open:""},[xe("summary",null,st(te.label),1),(je(!0),$e(vt,null,Ln(te.scenarios,ye=>(je(),$e("button",{key:`${te.id}-${ye.id}`,class:Pn(["scenario-button",{"scenario-button--active":M.value===`${te.label} — ${ye.label}`}]),onClick:Re=>L(te,ye)},[xe("span",null,st(ye.label),1),ye.badge?(je(),$e("small",vb,st(ye.badge),1)):Ut("",!0)],10,xb))),128))]))),128)),xe("details",yb,[V[9]||(V[9]=xe("summary",null,"Custom model",-1)),xe("label",Mb,[V[8]||(V[8]=Is(" Upload new model ",-1)),xe("input",{type:"file",accept:".glb,.gltf",onChange:V[2]||(V[2]=te=>{var ye;return g.value=((ye=te.target.files)==null?void 0:ye[0])??null})},null,32)]),g.value?(je(),$e("button",{key:0,class:"scenario-button",onClick:C},"Open "+st(g.value.name),1)):Ut("",!0)])],512),[[Og,f.value]]),_.value&&!p.value?(je(),$e("p",Sb,st(_.value),1)):Ut("",!0)],2),p.value?(je(),$e("div",Eb,[xe("div",bb,[xe("button",{class:Pn({active:v.value==="viewer"}),onClick:V[3]||(V[3]=te=>v.value="viewer")},"Inspection",2),xe("button",{class:Pn({active:v.value==="analytics"}),onClick:V[4]||(V[4]=te=>v.value="analytics")},"Analytics",2)]),xe("div",Tb,[xe("div",Ab,[V[11]||(V[11]=xe("span",{class:"toolbar-label"},"Camera:",-1)),(je(),$e(vt,null,Ln(i,te=>xe("button",{key:te,class:"toolbar-btn",onClick:ye=>re(te)},st(te),9,wb)),64)),xe("button",{class:"toolbar-btn toolbar-btn--accent",onClick:Q}," Zoom Fit ")]),xe("div",{class:"toolbar-group"},[xe("button",{class:"toolbar-btn",onClick:pe,title:"Undo"},"↩ Undo"),xe("button",{class:"toolbar-btn",onClick:fe,title:"Redo"},"↪ Redo"),xe("button",{class:"toolbar-btn toolbar-btn--danger",onClick:oe}," ✕ Clear All ")]),xe("div",Rb,[xe("span",Cb,[V[12]||(V[12]=Is("Defects: ",-1)),xe("strong",null,st(o.value.length),1)]),xe("span",Lb,[V[13]||(V[13]=Is("Parts: ",-1)),xe("strong",null,st(l.value.length),1)])])]),xe("div",Pb,[xe("div",Db,[m.value?(je(),$e("div",Ib,[...V[14]||(V[14]=[xe("div",{class:"spinner"},null,-1),xe("p",null,"Loading model…",-1)])])):Ut("",!0),_.value?(je(),$e("div",Ub,[xe("p",null,"⚠️ Failed to load model: "+st(_.value),1)])):Ut("",!0),zn(Cl(ab),{ref_key:"viewerRef",ref:r,modelUrl:p.value,defects:o.value,partsVisibility:a.value,selectionOptions:t,locale:"en",onDefectsChange:N,onModelLoaded:j,onModelLoadError:W,onSnapshotReport:ee,style:{width:"100%",height:"100%"}},null,8,["modelUrl","defects","partsVisibility"])]),h.value&&v.value==="viewer"?(je(),$e("aside",Nb,[xe("section",Ob,[V[15]||(V[15]=xe("h2",{class:"sidebar-title"},"Parts Visibility",-1)),l.value.length===0?(je(),$e("p",Fb,"Loading parts…")):Ut("",!0),xe("ul",Bb,[(je(!0),$e(vt,null,Ln(l.value,te=>{var ye,Re;return je(),$e("li",{key:te.name,class:"part-item"},[xe("label",Hb,[xe("input",{type:"checkbox",checked:((ye=a.value.find(Ce=>Ce.meshName===te.name))==null?void 0:ye.visible)??!0,onChange:Ce=>$(te.name,Ce.target.checked)},null,40,zb),xe("span",{class:Pn({"part-label--hidden":!(((Re=a.value.find(Ce=>Ce.meshName===te.name))==null?void 0:Re.visible)??!0)})},st(te.name),3)])])}),128))])]),xe("section",kb,[xe("h2",Gb,"Defects ("+st(o.value.length)+")",1),o.value.length===0?(je(),$e("p",Vb," Click on the model to add defects. ")):Ut("",!0),xe("ul",Wb,[(je(!0),$e(vt,null,Ln(o.value,te=>{var ye;return je(),$e("li",{key:te.id,class:"defect-item"},[xe("span",{class:Pn(`defect-severity defect-severity--${te.severity??"error"}`)},null,2),xe("span",Xb,st(((ye=te.metadata)==null?void 0:ye.optionLabel)??te.label),1),xe("span",jb,st(te.meshName),1),xe("button",{class:"defect-remove",onClick:Re=>ce(te.id),title:"Remove"},"✕",8,qb)])}),128))])]),xe("section",Yb,[xe("h2",Kb,[xe("button",{class:"sidebar-toggle",onClick:V[5]||(V[5]=te=>u.value=!u.value)}," Snapshots ("+st(c.value.length)+") "+st(u.value?"▾":"▸"),1)]),u.value&&c.value.length===0?(je(),$e("p",$b," Add a defect to generate the first snapshot report. ")):Ut("",!0),u.value?(je(!0),$e(vt,{key:1},Ln(q.value,te=>(je(),$e("div",{key:te.id,class:"report-card"},[xe("time",Zb,st(new Date(te.generatedAt).toLocaleTimeString()),1),xe("div",Jb,[(je(!0),$e(vt,null,Ln(te.images,ye=>(je(),$e("figure",{key:ye.view,class:"report-figure"},[xe("img",{src:ye.dataUri,alt:`${ye.view} view`,class:"report-thumb"},null,8,Qb),xe("figcaption",null,st(ye.view),1)]))),128))])]))),128)):Ut("",!0)])])):Ut("",!0),v.value==="analytics"?(je(),$e("aside",eT,[xe("section",tT,[V[16]||(V[16]=xe("span",null,"Total warnings",-1)),xe("strong",null,st(o.value.length),1),xe("small",null,st(R.value.length)+" affected components",1)]),xe("section",nT,[V[17]||(V[17]=xe("h2",{class:"sidebar-title"},"Warnings by type",-1)),b.value.length===0?(je(),$e("p",iT,"No warnings recorded.")):Ut("",!0),(je(!0),$e(vt,null,Ln(b.value,te=>(je(),$e("div",{key:te.label,class:"stat-row"},[xe("div",null,[xe("span",null,st(te.label),1),xe("strong",null,st(te.count),1)]),xe("div",sT,[xe("span",{style:Ur({width:`${te.count/Z.value*100}%`})},null,4)])]))),128))]),xe("section",rT,[V[18]||(V[18]=xe("h2",{class:"sidebar-title"},"Surface heat map",-1)),V[19]||(V[19]=xe("div",{class:"heat-legend"},[xe("span",null,"Low"),xe("i"),xe("span",null,"High")],-1)),(je(!0),$e(vt,null,Ln(R.value,te=>(je(),$e("div",{key:te.label,class:"heat-row"},[xe("span",null,st(te.label||"Unnamed surface"),1),xe("strong",{style:Ur({opacity:.35+te.count/ie.value*.65})},st(te.count),5)]))),128))])])):Ut("",!0)])])):(je(),$e("main",oT,[...V[20]||(V[20]=[xe("h2",null,"Inspection workspace",-1),xe("p",null,"Select a preset scenario from the left menu or upload a GLB model.",-1)])]))])]))}});s_(aT).mount("#app");
//# sourceMappingURL=index-CJBoftKn.js.map
