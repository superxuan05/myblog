/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Np(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const At={},Ci=[],gs=()=>{},Pm=()=>!1,Xr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Up=t=>t.startsWith("onUpdate:"),$t=Object.assign,Op=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},a_=Object.prototype.hasOwnProperty,ft=(t,e)=>a_.call(t,e),Ge=Array.isArray,Ri=t=>El(t)==="[object Map]",Lm=t=>El(t)==="[object Set]",$e=t=>typeof t=="function",kt=t=>typeof t=="string",Ea=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",Dm=t=>(St(t)||$e(t))&&$e(t.then)&&$e(t.catch),Im=Object.prototype.toString,El=t=>Im.call(t),i_=t=>El(t).slice(8,-1),Nm=t=>El(t)==="[object Object]",wl=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Pi=Np(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Tl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},r_=/-\w/g,xn=Tl(t=>t.replace(r_,e=>e.slice(1).toUpperCase())),o_=/\B([A-Z])/g,ei=Tl(t=>t.replace(o_,"-$1").toLowerCase()),qr=Tl(t=>t.charAt(0).toUpperCase()+t.slice(1)),ec=Tl(t=>t?`on${qr(t)}`:""),ya=(t,e)=>!Object.is(t,e),tc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Um=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},l_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},c_=t=>{const e=kt(t)?Number(t):NaN;return isNaN(e)?t:e};let Qh;const Al=()=>Qh||(Qh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],a=kt(s)?f_(s):Cl(s);if(a)for(const i in a)e[i]=a[i]}return e}else if(kt(t)||St(t))return t}const u_=/;(?![^(]*\))/g,p_=/:([^]+)/,h_=/\/\*[^]*?\*\//g;function f_(t){const e={};return t.replace(h_,"").split(u_).forEach(n=>{if(n){const s=n.split(p_);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Rl(t){let e="";if(kt(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const s=Rl(t[n]);s&&(e+=s+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function d_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!kt(e)&&(t.class=Rl(e)),n&&(t.style=Cl(n)),t}const m_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g_=Np(m_);function Om(t){return!!t||t===""}const Fm=t=>!!(t&&t.__v_isRef===!0),v_=t=>kt(t)?t:t==null?"":Ge(t)||St(t)&&(t.toString===Im||!$e(t.toString))?Fm(t)?v_(t.value):JSON.stringify(t,Bm,2):String(t),Bm=(t,e)=>Fm(e)?Bm(t,e.value):Ri(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,a],i)=>(n[nc(s,i)+" =>"]=a,n),{})}:Lm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:Ea(e)?nc(e):St(e)&&!Ge(e)&&!Nm(e)?String(e):e,nc=(t,e="")=>{var n;return Ea(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class __{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Fp(){return nn}function x_(t,e=!1){nn&&nn.cleanups.push(t)}let Tt;const sc=new WeakSet;class km{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,sc.has(this)&&(sc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Vm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ef(this),Hm(this);const e=Tt,n=Zn;Tt=this,Zn=!0;try{return this.fn()}finally{Gm(this),Tt=e,Zn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zp(e);this.deps=this.depsTail=void 0,ef(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?sc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cu(this)&&this.run()}get dirty(){return cu(this)}}let zm=0,Sr,Mr;function Vm(t,e=!1){if(t.flags|=8,e){t.next=Mr,Mr=t;return}t.next=Sr,Sr=t}function Bp(){zm++}function kp(){if(--zm>0)return;if(Mr){let e=Mr;for(Mr=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sr;){let e=Sr;for(Sr=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Hm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gm(t){let e,n=t.depsTail,s=n;for(;s;){const a=s.prevDep;s.version===-1?(s===n&&(n=a),zp(s),y_(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=a}t.deps=e,t.depsTail=n}function cu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Lr)||(t.globalVersion=Lr,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!cu(t))))return;t.flags|=2;const e=t.dep,n=Tt,s=Zn;Tt=t,Zn=!0;try{Hm(t);const a=t.fn(t._value);(e.version===0||ya(a,t._value))&&(t.flags|=128,t._value=a,e.version++)}catch(a){throw e.version++,a}finally{Tt=n,Zn=s,Gm(t),t.flags&=-3}}function zp(t,e=!1){const{dep:n,prevSub:s,nextSub:a}=t;if(s&&(s.nextSub=a,t.prevSub=void 0),a&&(a.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)zp(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function y_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zn=!0;const $m=[];function Gs(){$m.push(Zn),Zn=!1}function Ws(){const t=$m.pop();Zn=t===void 0?!0:t}function ef(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Tt;Tt=void 0;try{e()}finally{Tt=n}}}let Lr=0;class b_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Tt||!Zn||Tt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Tt)n=this.activeLink=new b_(Tt,this),Tt.deps?(n.prevDep=Tt.depsTail,Tt.depsTail.nextDep=n,Tt.depsTail=n):Tt.deps=Tt.depsTail=n,Xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Tt.depsTail,n.nextDep=void 0,Tt.depsTail.nextDep=n,Tt.depsTail=n,Tt.deps===n&&(Tt.deps=s)}return n}trigger(e){this.version++,Lr++,this.notify(e)}notify(e){Bp();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{kp()}}}function Xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Xm(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ll=new WeakMap,ja=Symbol(""),uu=Symbol(""),Dr=Symbol("");function sn(t,e,n){if(Zn&&Tt){let s=ll.get(t);s||ll.set(t,s=new Map);let a=s.get(n);a||(s.set(n,a=new Pl),a.map=s,a.key=n),a.track()}}function Bs(t,e,n,s,a,i){const r=ll.get(t);if(!r){Lr++;return}const o=l=>{l&&l.trigger()};if(Bp(),e==="clear")r.forEach(o);else{const l=Ge(t),u=l&&wl(n);if(l&&n==="length"){const c=Number(s);r.forEach((p,h)=>{(h==="length"||h===Dr||!Ea(h)&&h>=c)&&o(p)})}else switch((n!==void 0||r.has(void 0))&&o(r.get(n)),u&&o(r.get(Dr)),e){case"add":l?u&&o(r.get("length")):(o(r.get(ja)),Ri(t)&&o(r.get(uu)));break;case"delete":l||(o(r.get(ja)),Ri(t)&&o(r.get(uu)));break;case"set":Ri(t)&&o(r.get(ja));break}}kp()}function S_(t,e){const n=ll.get(t);return n&&n.get(e)}function ai(t){const e=st(t);return e===t?e:(sn(e,"iterate",Dr),Ln(t)?e:e.map(es))}function Ll(t){return sn(t=st(t),"iterate",Dr),t}function fa(t,e){return Xs(t)?ba(t)?zi(es(e)):zi(e):es(e)}const M_={__proto__:null,[Symbol.iterator](){return ac(this,Symbol.iterator,t=>fa(this,t))},concat(...t){return ai(this).concat(...t.map(e=>Ge(e)?ai(e):e))},entries(){return ac(this,"entries",t=>(t[1]=fa(this,t[1]),t))},every(t,e){return As(this,"every",t,e,void 0,arguments)},filter(t,e){return As(this,"filter",t,e,n=>n.map(s=>fa(this,s)),arguments)},find(t,e){return As(this,"find",t,e,n=>fa(this,n),arguments)},findIndex(t,e){return As(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return As(this,"findLast",t,e,n=>fa(this,n),arguments)},findLastIndex(t,e){return As(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return As(this,"forEach",t,e,void 0,arguments)},includes(...t){return ic(this,"includes",t)},indexOf(...t){return ic(this,"indexOf",t)},join(t){return ai(this).join(t)},lastIndexOf(...t){return ic(this,"lastIndexOf",t)},map(t,e){return As(this,"map",t,e,void 0,arguments)},pop(){return cr(this,"pop")},push(...t){return cr(this,"push",t)},reduce(t,...e){return tf(this,"reduce",t,e)},reduceRight(t,...e){return tf(this,"reduceRight",t,e)},shift(){return cr(this,"shift")},some(t,e){return As(this,"some",t,e,void 0,arguments)},splice(...t){return cr(this,"splice",t)},toReversed(){return ai(this).toReversed()},toSorted(t){return ai(this).toSorted(t)},toSpliced(...t){return ai(this).toSpliced(...t)},unshift(...t){return cr(this,"unshift",t)},values(){return ac(this,"values",t=>fa(this,t))}};function ac(t,e,n){const s=Ll(t),a=s[e]();return s!==t&&!Ln(t)&&(a._next=a.next,a.next=()=>{const i=a._next();return i.done||(i.value=n(i.value)),i}),a}const E_=Array.prototype;function As(t,e,n,s,a,i){const r=Ll(t),o=r!==t&&!Ln(t),l=r[e];if(l!==E_[e]){const p=l.apply(t,i);return o?es(p):p}let u=n;r!==t&&(o?u=function(p,h){return n.call(this,fa(t,p),h,t)}:n.length>2&&(u=function(p,h){return n.call(this,p,h,t)}));const c=l.call(r,u,s);return o&&a?a(c):c}function tf(t,e,n,s){const a=Ll(t);let i=n;return a!==t&&(Ln(t)?n.length>3&&(i=function(r,o,l){return n.call(this,r,o,l,t)}):i=function(r,o,l){return n.call(this,r,fa(t,o),l,t)}),a[e](i,...s)}function ic(t,e,n){const s=st(t);sn(s,"iterate",Dr);const a=s[e](...n);return(a===-1||a===!1)&&Nl(n[0])?(n[0]=st(n[0]),s[e](...n)):a}function cr(t,e,n=[]){Gs(),Bp();const s=st(t)[e].apply(t,n);return kp(),Ws(),s}const w_=Np("__proto__,__v_isRef,__isVue"),qm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Ea));function T_(t){Ea(t)||(t=String(t));const e=st(this);return sn(e,"has",t),e.hasOwnProperty(t)}class jm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const a=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(a?i?eg:Qm:i?Jm:Zm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const r=Ge(e);if(!a){let l;if(r&&(l=M_[n]))return l;if(n==="hasOwnProperty")return T_}const o=Reflect.get(e,n,zt(e)?e:s);if((Ea(n)?qm.has(n):w_(n))||(a||sn(e,"get",n),i))return o;if(zt(o)){const l=r&&wl(n)?o:o.value;return a&&St(l)?$s(l):l}return St(o)?a?$s(o):Za(o):o}}class Ym extends jm{constructor(e=!1){super(!1,e)}set(e,n,s,a){let i=e[n];const r=Ge(e)&&wl(n);if(!this._isShallow){const u=Xs(i);if(!Ln(s)&&!Xs(s)&&(i=st(i),s=st(s)),!r&&zt(i)&&!zt(s))return u||(i.value=s),!0}const o=r?Number(n)<e.length:ft(e,n),l=Reflect.set(e,n,s,zt(e)?e:a);return e===st(a)&&(o?ya(s,i)&&Bs(e,"set",n,s):Bs(e,"add",n,s)),l}deleteProperty(e,n){const s=ft(e,n);e[n];const a=Reflect.deleteProperty(e,n);return a&&s&&Bs(e,"delete",n,void 0),a}has(e,n){const s=Reflect.has(e,n);return(!Ea(n)||!qm.has(n))&&sn(e,"has",n),s}ownKeys(e){return sn(e,"iterate",Ge(e)?"length":ja),Reflect.ownKeys(e)}}class Km extends jm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const A_=new Ym,C_=new Km,R_=new Ym(!0),P_=new Km(!0),pu=t=>t,mo=t=>Reflect.getPrototypeOf(t);function L_(t,e,n){return function(...s){const a=this.__v_raw,i=st(a),r=Ri(i),o=t==="entries"||t===Symbol.iterator&&r,l=t==="keys"&&r,u=a[t](...s),c=n?pu:e?zi:es;return!e&&sn(i,"iterate",l?uu:ja),{next(){const{value:p,done:h}=u.next();return h?{value:p,done:h}:{value:o?[c(p[0]),c(p[1])]:c(p),done:h}},[Symbol.iterator](){return this}}}}function go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function D_(t,e){const n={get(a){const i=this.__v_raw,r=st(i),o=st(a);t||(ya(a,o)&&sn(r,"get",a),sn(r,"get",o));const{has:l}=mo(r),u=e?pu:t?zi:es;if(l.call(r,a))return u(i.get(a));if(l.call(r,o))return u(i.get(o));i!==r&&i.get(a)},get size(){const a=this.__v_raw;return!t&&sn(st(a),"iterate",ja),a.size},has(a){const i=this.__v_raw,r=st(i),o=st(a);return t||(ya(a,o)&&sn(r,"has",a),sn(r,"has",o)),a===o?i.has(a):i.has(a)||i.has(o)},forEach(a,i){const r=this,o=r.__v_raw,l=st(o),u=e?pu:t?zi:es;return!t&&sn(l,"iterate",ja),o.forEach((c,p)=>a.call(i,u(c),u(p),r))}};return $t(n,t?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(a){!e&&!Ln(a)&&!Xs(a)&&(a=st(a));const i=st(this);return mo(i).has.call(i,a)||(i.add(a),Bs(i,"add",a,a)),this},set(a,i){!e&&!Ln(i)&&!Xs(i)&&(i=st(i));const r=st(this),{has:o,get:l}=mo(r);let u=o.call(r,a);u||(a=st(a),u=o.call(r,a));const c=l.call(r,a);return r.set(a,i),u?ya(i,c)&&Bs(r,"set",a,i):Bs(r,"add",a,i),this},delete(a){const i=st(this),{has:r,get:o}=mo(i);let l=r.call(i,a);l||(a=st(a),l=r.call(i,a)),o&&o.call(i,a);const u=i.delete(a);return l&&Bs(i,"delete",a,void 0),u},clear(){const a=st(this),i=a.size!==0,r=a.clear();return i&&Bs(a,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(a=>{n[a]=L_(a,t,e)}),n}function Dl(t,e){const n=D_(t,e);return(s,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?s:Reflect.get(ft(n,a)&&a in s?n:s,a,i)}const I_={get:Dl(!1,!1)},N_={get:Dl(!1,!0)},U_={get:Dl(!0,!1)},O_={get:Dl(!0,!0)},Zm=new WeakMap,Jm=new WeakMap,Qm=new WeakMap,eg=new WeakMap;function F_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:F_(i_(t))}function Za(t){return Xs(t)?t:Il(t,!1,A_,I_,Zm)}function tg(t){return Il(t,!1,R_,N_,Jm)}function $s(t){return Il(t,!0,C_,U_,Qm)}function k_(t){return Il(t,!0,P_,O_,eg)}function Il(t,e,n,s,a){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=B_(t);if(i===0)return t;const r=a.get(t);if(r)return r;const o=new Proxy(t,i===2?s:n);return a.set(t,o),o}function ba(t){return Xs(t)?ba(t.__v_raw):!!(t&&t.__v_isReactive)}function Xs(t){return!!(t&&t.__v_isReadonly)}function Ln(t){return!!(t&&t.__v_isShallow)}function Nl(t){return t?!!t.__v_raw:!1}function st(t){const e=t&&t.__v_raw;return e?st(e):t}function z_(t){return!ft(t,"__v_skip")&&Object.isExtensible(t)&&Um(t,"__v_skip",!0),t}const es=t=>St(t)?Za(t):t,zi=t=>St(t)?$s(t):t;function zt(t){return t?t.__v_isRef===!0:!1}function je(t){return ng(t,!1)}function Ye(t){return ng(t,!0)}function ng(t,e){return zt(t)?t:new V_(t,e)}class V_{constructor(e,n){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:st(e),this._value=n?e:es(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||Ln(e)||Xs(e);e=s?e:st(e),ya(e,n)&&(this._rawValue=e,this._value=s?e:es(e),this.dep.trigger())}}function Jn(t){return zt(t)?t.value:t}function at(t){return $e(t)?t():Jn(t)}const H_={get:(t,e,n)=>e==="__v_raw"?t:Jn(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const a=t[e];return zt(a)&&!zt(n)?(a.value=n,!0):Reflect.set(t,e,n,s)}};function sg(t){return ba(t)?t:new Proxy(t,H_)}class G_{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Pl,{get:s,set:a}=e(n.track.bind(n),n.trigger.bind(n));this._get=s,this._set=a}get value(){return this._value=this._get()}set value(e){this._set(e)}}function ag(t){return new G_(t)}class W_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0,this._raw=st(e);let a=!0,i=e;if(!Ge(e)||!wl(String(n)))do a=!Nl(i)||Ln(i);while(a&&(i=i.__v_raw));this._shallow=a}get value(){let e=this._object[this._key];return this._shallow&&(e=Jn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&zt(this._raw[this._key])){const n=this._object[this._key];if(zt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return S_(this._raw,this._key)}}class $_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Zi(t,e,n){return zt(t)?t:$e(t)?new $_(t):St(t)&&arguments.length>1?X_(t,e,n):je(t)}function X_(t,e,n){return new W_(t,e,n)}class q_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Lr-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Tt!==this)return Vm(this,!0),!0}get value(){const e=this.dep.track();return Wm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function j_(t,e,n=!1){let s,a;return $e(t)?s=t:(s=t.get,a=t.set),new q_(s,a,n)}const vo={},cl=new WeakMap;let ka;function Y_(t,e=!1,n=ka){if(n){let s=cl.get(n);s||cl.set(n,s=[]),s.push(t)}}function K_(t,e,n=At){const{immediate:s,deep:a,once:i,scheduler:r,augmentJob:o,call:l}=n,u=S=>a?S:Ln(S)||a===!1||a===0?va(S,1):va(S);let c,p,h,f,v=!1,_=!1;if(zt(t)?(p=()=>t.value,v=Ln(t)):ba(t)?(p=()=>u(t),v=!0):Ge(t)?(_=!0,v=t.some(S=>ba(S)||Ln(S)),p=()=>t.map(S=>{if(zt(S))return S.value;if(ba(S))return u(S);if($e(S))return l?l(S,2):S()})):$e(t)?e?p=l?()=>l(t,2):t:p=()=>{if(h){Gs();try{h()}finally{Ws()}}const S=ka;ka=c;try{return l?l(t,3,[f]):t(f)}finally{ka=S}}:p=gs,e&&a){const S=p,T=a===!0?1/0:a;p=()=>va(S(),T)}const g=Fp(),m=()=>{c.stop(),g&&g.active&&Op(g.effects,c)};if(i&&e){const S=e;e=(...T)=>{S(...T),m()}}let M=_?new Array(t.length).fill(vo):vo;const x=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(e){const T=c.run();if(a||v||(_?T.some((P,L)=>ya(P,M[L])):ya(T,M))){h&&h();const P=ka;ka=c;try{const L=[T,M===vo?void 0:_&&M[0]===vo?[]:M,f];M=T,l?l(e,3,L):e(...L)}finally{ka=P}}}else c.run()};return o&&o(x),c=new km(p),c.scheduler=r?()=>r(x,!1):x,f=S=>Y_(S,!1,c),h=c.onStop=()=>{const S=cl.get(c);if(S){if(l)l(S,4);else for(const T of S)T();cl.delete(c)}},e?s?x(!0):M=c.run():r?r(x.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function va(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,zt(t))va(t.value,e,n);else if(Ge(t))for(let s=0;s<t.length;s++)va(t[s],e,n);else if(Lm(t)||Ri(t))t.forEach(s=>{va(s,e,n)});else if(Nm(t)){for(const s in t)va(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&va(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(t,e,n,s){try{return s?t(...s):t()}catch(a){Yr(a,e,n)}}function ts(t,e,n,s){if($e(t)){const a=jr(t,e,n,s);return a&&Dm(a)&&a.catch(i=>{Yr(i,e,n)}),a}if(Ge(t)){const a=[];for(let i=0;i<t.length;i++)a.push(ts(t[i],e,n,s));return a}}function Yr(t,e,n,s=!0){const a=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:r}=e&&e.appContext.config||At;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let p=0;p<c.length;p++)if(c[p](t,l,u)===!1)return}o=o.parent}if(i){Gs(),jr(i,null,10,[t,l,u]),Ws();return}}Z_(t,n,a,s,r)}function Z_(t,e,n,s=!0,a=!1){if(a)throw t;console.error(t)}const pn=[];let ps=-1;const Li=[];let da=null,Si=0;const ig=Promise.resolve();let ul=null;function Ms(t){const e=ul||ig;return t?e.then(this?t.bind(this):t):e}function J_(t){let e=ps+1,n=pn.length;for(;e<n;){const s=e+n>>>1,a=pn[s],i=Ir(a);i<t||i===t&&a.flags&2?e=s+1:n=s}return e}function Vp(t){if(!(t.flags&1)){const e=Ir(t),n=pn[pn.length-1];!n||!(t.flags&2)&&e>=Ir(n)?pn.push(t):pn.splice(J_(e),0,t),t.flags|=1,rg()}}function rg(){ul||(ul=ig.then(og))}function Q_(t){Ge(t)?Li.push(...t):da&&t.id===-1?da.splice(Si+1,0,t):t.flags&1||(Li.push(t),t.flags|=1),rg()}function nf(t,e,n=ps+1){for(;n<pn.length;n++){const s=pn[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;pn.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function pl(t){if(Li.length){const e=[...new Set(Li)].sort((n,s)=>Ir(n)-Ir(s));if(Li.length=0,da){da.push(...e);return}for(da=e,Si=0;Si<da.length;Si++){const n=da[Si];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}da=null,Si=0}}const Ir=t=>t.id==null?t.flags&2?-1:1/0:t.id;function og(t){try{for(ps=0;ps<pn.length;ps++){const e=pn[ps];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),jr(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;ps<pn.length;ps++){const e=pn[ps];e&&(e.flags&=-2)}ps=-1,pn.length=0,pl(),ul=null,(pn.length||Li.length)&&og()}}let Yn=null,lg=null;function hl(t){const e=Yn;return Yn=t,lg=t&&t.type.__scopeId||null,e}function cg(t,e=Yn,n){if(!e||t._n)return t;const s=(...a)=>{s._d&&ml(-1);const i=hl(e);let r;try{r=t(...a)}finally{hl(i),s._d&&ml(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function hs(t,e,n,s){const a=t.dirs,i=e&&e.dirs;for(let r=0;r<a.length;r++){const o=a[r];i&&(o.oldValue=i[r].value);let l=o.dir[s];l&&(Gs(),ts(l,n,8,[t.el,o,t,e]),Ws())}}function Qn(t,e){if(Kt){let n=Kt.provides;const s=Kt.parent&&Kt.parent.provides;s===n&&(n=Kt.provides=Object.create(s)),n[t]=e}}function Rt(t,e,n=!1){const s=Qs();if(s||Ya){let a=Ya?Ya._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(a&&t in a)return a[t];if(arguments.length>1)return n&&$e(e)?e.call(s&&s.proxy):e}}function ug(){return!!(Qs()||Ya)}const e2=Symbol.for("v-scx"),t2=()=>Rt(e2);function Hp(t,e){return Gp(t,null,e)}function Lt(t,e,n){return Gp(t,e,n)}function Gp(t,e,n=At){const{immediate:s,deep:a,flush:i,once:r}=n,o=$t({},n),l=e&&s||!e&&i!=="post";let u;if(Vi){if(i==="sync"){const f=t2();u=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=gs,f.resume=gs,f.pause=gs,f}}const c=Kt;o.call=(f,v,_)=>ts(f,c,v,_);let p=!1;i==="post"?o.scheduler=f=>{Tn(f,c&&c.suspense)}:i!=="sync"&&(p=!0,o.scheduler=(f,v)=>{v?f():Vp(f)}),o.augmentJob=f=>{e&&(f.flags|=4),p&&(f.flags|=2,c&&(f.id=c.uid,f.i=c))};const h=K_(t,e,o);return Vi&&(u?u.push(h):l&&h()),h}function n2(t,e,n){const s=this.proxy,a=kt(t)?t.includes(".")?pg(s,t):()=>s[t]:t.bind(s,s);let i;$e(e)?i=e:(i=e.handler,n=e);const r=Zr(this),o=Gp(a,i.bind(s),n);return r(),o}function pg(t,e){const n=e.split(".");return()=>{let s=t;for(let a=0;a<n.length&&s;a++)s=s[n[a]];return s}}const s2=Symbol("_vte"),hg=t=>t.__isTeleport,Fs=Symbol("_leaveCb"),_o=Symbol("_enterCb");function fg(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vt(()=>{t.isMounted=!0}),Xp(()=>{t.isUnmounting=!0}),t}const Nn=[Function,Array],dg={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nn,onEnter:Nn,onAfterEnter:Nn,onEnterCancelled:Nn,onBeforeLeave:Nn,onLeave:Nn,onAfterLeave:Nn,onLeaveCancelled:Nn,onBeforeAppear:Nn,onAppear:Nn,onAfterAppear:Nn,onAppearCancelled:Nn},mg=t=>{const e=t.subTree;return e.component?mg(e.component):e},a2={name:"BaseTransition",props:dg,setup(t,{slots:e}){const n=Qs(),s=fg();return()=>{const a=e.default&&Wp(e.default(),!0);if(!a||!a.length)return;const i=gg(a),r=st(t),{mode:o}=r;if(s.isLeaving)return rc(i);const l=sf(i);if(!l)return rc(i);let u=Nr(l,r,s,n,p=>u=p);l.type!==Yt&&Ja(l,u);let c=n.subTree&&sf(n.subTree);if(c&&c.type!==Yt&&!Va(c,l)&&mg(n).type!==Yt){let p=Nr(c,r,s,n);if(Ja(c,p),o==="out-in"&&l.type!==Yt)return s.isLeaving=!0,p.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete p.afterLeave,c=void 0},rc(i);o==="in-out"&&l.type!==Yt?p.delayLeave=(h,f,v)=>{const _=vg(s,c);_[String(c.key)]=c,h[Fs]=()=>{f(),h[Fs]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return i}}};function gg(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Yt){e=n;break}}return e}const i2=a2;function vg(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Nr(t,e,n,s,a){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:p,onBeforeLeave:h,onLeave:f,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:M,onAppearCancelled:x}=e,S=String(t.key),T=vg(n,t),P=(b,E)=>{b&&ts(b,s,9,E)},L=(b,E)=>{const D=E[1];P(b,E),Ge(b)?b.every(U=>U.length<=1)&&D():b.length<=1&&D()},O={mode:r,persisted:o,beforeEnter(b){let E=l;if(!n.isMounted)if(i)E=g||l;else return;b[Fs]&&b[Fs](!0);const D=T[S];D&&Va(t,D)&&D.el[Fs]&&D.el[Fs](),P(E,[b])},enter(b){let E=u,D=c,U=p;if(!n.isMounted)if(i)E=m||u,D=M||c,U=x||p;else return;let k=!1;const V=b[_o]=X=>{k||(k=!0,X?P(U,[b]):P(D,[b]),O.delayedLeave&&O.delayedLeave(),b[_o]=void 0)};E?L(E,[b,V]):V()},leave(b,E){const D=String(t.key);if(b[_o]&&b[_o](!0),n.isUnmounting)return E();P(h,[b]);let U=!1;const k=b[Fs]=V=>{U||(U=!0,E(),V?P(_,[b]):P(v,[b]),b[Fs]=void 0,T[D]===t&&delete T[D])};T[D]=t,f?L(f,[b,k]):k()},clone(b){const E=Nr(b,e,n,s,a);return a&&a(E),E}};return O}function rc(t){if(Kr(t))return t=Sa(t),t.children=null,t}function sf(t){if(!Kr(t))return hg(t.type)&&t.children?gg(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&$e(n.default))return n.default()}}function Ja(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ja(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Wp(t,e=!1,n){let s=[],a=0;for(let i=0;i<t.length;i++){let r=t[i];const o=n==null?r.key:String(n)+String(r.key!=null?r.key:i);r.type===hn?(r.patchFlag&128&&a++,s=s.concat(Wp(r.children,e,o))):(e||r.type!==Yt)&&s.push(o!=null?Sa(r,{key:o}):r)}if(a>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}function xe(t,e){return $e(t)?$t({name:t.name},e,{setup:t}):t}function _g(){const t=Qs();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function $p(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const fl=new WeakMap;function Di(t,e,n,s,a=!1){if(Ge(t)){t.forEach((v,_)=>Di(v,e&&(Ge(e)?e[_]:e),n,s,a));return}if(Ii(s)&&!a){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Di(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Zp(s.component):s.el,r=a?null:i,{i:o,r:l}=t,u=e&&e.r,c=o.refs===At?o.refs={}:o.refs,p=o.setupState,h=st(p),f=p===At?Pm:v=>ft(h,v);if(u!=null&&u!==l){if(af(e),kt(u))c[u]=null,f(u)&&(p[u]=null);else if(zt(u)){u.value=null;const v=e;v.k&&(c[v.k]=null)}}if($e(l))jr(l,o,12,[r,c]);else{const v=kt(l),_=zt(l);if(v||_){const g=()=>{if(t.f){const m=v?f(l)?p[l]:c[l]:l.value;if(a)Ge(m)&&Op(m,i);else if(Ge(m))m.includes(i)||m.push(i);else if(v)c[l]=[i],f(l)&&(p[l]=c[l]);else{const M=[i];l.value=M,t.k&&(c[t.k]=M)}}else v?(c[l]=r,f(l)&&(p[l]=r)):_&&(l.value=r,t.k&&(c[t.k]=r))};if(r){const m=()=>{g(),fl.delete(t)};m.id=-1,fl.set(t,m),Tn(m,n)}else af(t),g()}}}function af(t){const e=fl.get(t);e&&(e.flags|=8,fl.delete(t))}let rf=!1;const ii=()=>{rf||(console.error("Hydration completed but contains mismatches."),rf=!0)},r2=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",o2=t=>t.namespaceURI.includes("MathML"),xo=t=>{if(t.nodeType===1){if(r2(t))return"svg";if(o2(t))return"mathml"}},Ti=t=>t.nodeType===8;function l2(t){const{mt:e,p:n,o:{patchProp:s,createText:a,nextSibling:i,parentNode:r,remove:o,insert:l,createComment:u}}=t,c=(x,S)=>{if(!S.hasChildNodes()){n(null,x,S),pl(),S._vnode=x;return}p(S.firstChild,x,null,null,null),pl(),S._vnode=x},p=(x,S,T,P,L,O=!1)=>{O=O||!!S.dynamicChildren;const b=Ti(x)&&x.data==="[",E=()=>_(x,S,T,P,L,b),{type:D,ref:U,shapeFlag:k,patchFlag:V}=S;let X=x.nodeType;S.el=x,V===-2&&(O=!1,S.dynamicChildren=null);let B=null;switch(D){case Ka:X!==3?S.children===""?(l(S.el=a(""),r(x),x),B=x):B=E():(x.data!==S.children&&(ii(),x.data=S.children),B=i(x));break;case Yt:M(x)?(B=i(x),m(S.el=x.content.firstChild,x,T)):X!==8||b?B=E():B=i(x);break;case wr:if(b&&(x=i(x),X=x.nodeType),X===1||X===3){B=x;const G=!S.children.length;for(let q=0;q<S.staticCount;q++)G&&(S.children+=B.nodeType===1?B.outerHTML:B.data),q===S.staticCount-1&&(S.anchor=B),B=i(B);return b?i(B):B}else E();break;case hn:b?B=v(x,S,T,P,L,O):B=E();break;default:if(k&1)(X!==1||S.type.toLowerCase()!==x.tagName.toLowerCase())&&!M(x)?B=E():B=h(x,S,T,P,L,O);else if(k&6){S.slotScopeIds=L;const G=r(x);if(b?B=g(x):Ti(x)&&x.data==="teleport start"?B=g(x,x.data,"teleport end"):B=i(x),e(S,G,null,T,P,xo(G),O),Ii(S)&&!S.type.__asyncResolved){let q;b?(q=Dt(hn),q.anchor=B?B.previousSibling:G.lastChild):q=x.nodeType===3?$g(""):Dt("div"),q.el=x,S.component.subTree=q}}else k&64?X!==8?B=E():B=S.type.hydrate(x,S,T,P,L,O,t,f):k&128&&(B=S.type.hydrate(x,S,T,P,xo(r(x)),L,O,t,p))}return U!=null&&Di(U,null,P,S),B},h=(x,S,T,P,L,O)=>{O=O||!!S.dynamicChildren;const{type:b,props:E,patchFlag:D,shapeFlag:U,dirs:k,transition:V}=S,X=b==="input"||b==="option";if(X||D!==-1){k&&hs(S,null,T,"created");let B=!1;if(M(x)){B=Ng(null,V)&&T&&T.vnode.props&&T.vnode.props.appear;const q=x.content.firstChild;if(B){const le=q.getAttribute("class");le&&(q.$cls=le),V.beforeEnter(q)}m(q,x,T),S.el=x=q}if(U&16&&!(E&&(E.innerHTML||E.textContent))){let q=f(x.firstChild,S,x,T,P,L,O);for(;q;){yo(x,1)||ii();const le=q;q=q.nextSibling,o(le)}}else if(U&8){let q=S.children;q[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(q=q.slice(1));const{textContent:le}=x;le!==q&&le!==q.replace(/\r\n|\r/g,`
`)&&(yo(x,0)||ii(),x.textContent=S.children)}if(E){if(X||!O||D&48){const q=x.tagName.includes("-");for(const le in E)(X&&(le.endsWith("value")||le==="indeterminate")||Xr(le)&&!Pi(le)||le[0]==="."||q)&&s(x,le,null,E[le],void 0,T)}else if(E.onClick)s(x,"onClick",null,E.onClick,void 0,T);else if(D&4&&ba(E.style))for(const q in E.style)E.style[q]}let G;(G=E&&E.onVnodeBeforeMount)&&On(G,T,S),k&&hs(S,null,T,"beforeMount"),((G=E&&E.onVnodeMounted)||k||B)&&kg(()=>{G&&On(G,T,S),B&&V.enter(x),k&&hs(S,null,T,"mounted")},P)}return x.nextSibling},f=(x,S,T,P,L,O,b)=>{b=b||!!S.dynamicChildren;const E=S.children,D=E.length;for(let U=0;U<D;U++){const k=b?E[U]:E[U]=kn(E[U]),V=k.type===Ka;x?(V&&!b&&U+1<D&&kn(E[U+1]).type===Ka&&(l(a(x.data.slice(k.children.length)),T,i(x)),x.data=k.children),x=p(x,k,P,L,O,b)):V&&!k.children?l(k.el=a(""),T):(yo(T,1)||ii(),n(null,k,T,null,P,L,xo(T),O))}return x},v=(x,S,T,P,L,O)=>{const{slotScopeIds:b}=S;b&&(L=L?L.concat(b):b);const E=r(x),D=f(i(x),S,E,T,P,L,O);return D&&Ti(D)&&D.data==="]"?i(S.anchor=D):(ii(),l(S.anchor=u("]"),E,D),D)},_=(x,S,T,P,L,O)=>{if(yo(x.parentElement,1)||ii(),S.el=null,O){const D=g(x);for(;;){const U=i(x);if(U&&U!==D)o(U);else break}}const b=i(x),E=r(x);return o(x),n(null,S,E,b,T,P,xo(E),L),T&&(T.vnode.el=S.el,wg(T,S.el)),b},g=(x,S="[",T="]")=>{let P=0;for(;x;)if(x=i(x),x&&Ti(x)&&(x.data===S&&P++,x.data===T)){if(P===0)return i(x);P--}return x},m=(x,S,T)=>{const P=S.parentNode;P&&P.replaceChild(x,S);let L=T;for(;L;)L.vnode.el===S&&(L.vnode.el=L.subTree.el=x),L=L.parent},M=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[c,p]}const of="data-allow-mismatch",c2={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function yo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(of);)t=t.parentElement;const n=t&&t.getAttribute(of);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:s.includes(c2[e])}}Al().requestIdleCallback;Al().cancelIdleCallback;function u2(t,e){if(Ti(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(Ti(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const Ii=t=>!!t.type.__asyncLoader;function p2(t){$e(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:a=200,hydrate:i,timeout:r,suspensible:o=!0,onError:l}=t;let u=null,c,p=0;const h=()=>(p++,u=null,f()),f=()=>{let v;return u||(v=u=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,m)=>{l(_,()=>g(h()),()=>m(_),p+1)});throw _}).then(_=>v!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return xe({name:"AsyncComponentWrapper",__asyncLoader:f,__asyncHydrate(v,_,g){let m=!1;(_.bu||(_.bu=[])).push(()=>m=!0);const M=()=>{m||g()},x=i?()=>{const S=i(M,T=>u2(v,T));S&&(_.bum||(_.bum=[])).push(S)}:M;c?x():f().then(()=>!_.isUnmounted&&x())},get __asyncResolved(){return c},setup(){const v=Kt;if($p(v),c)return()=>bo(c,v);const _=x=>{u=null,Yr(x,v,13,!s)};if(o&&v.suspense||Vi)return f().then(x=>()=>bo(x,v)).catch(x=>(_(x),()=>s?Dt(s,{error:x}):null));const g=je(!1),m=je(),M=je(!!a);return a&&setTimeout(()=>{M.value=!1},a),r!=null&&setTimeout(()=>{if(!g.value&&!m.value){const x=new Error(`Async component timed out after ${r}ms.`);_(x),m.value=x}},r),f().then(()=>{g.value=!0,v.parent&&Kr(v.parent.vnode)&&v.parent.update()}).catch(x=>{_(x),m.value=x}),()=>{if(g.value&&c)return bo(c,v);if(m.value&&s)return Dt(s,{error:m.value});if(n&&!M.value)return bo(n,v)}}})}function bo(t,e){const{ref:n,props:s,children:a,ce:i}=e.vnode,r=Dt(t,s,a);return r.ref=n,r.ce=i,delete e.vnode.ce,r}const Kr=t=>t.type.__isKeepAlive;function h2(t,e){xg(t,"a",e)}function f2(t,e){xg(t,"da",e)}function xg(t,e,n=Kt){const s=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Ul(e,s,n),n){let a=n.parent;for(;a&&a.parent;)Kr(a.parent.vnode)&&d2(s,e,n,a),a=a.parent}}function d2(t,e,n,s){const a=Ul(e,t,s,!0);Js(()=>{Op(s[e],a)},n)}function Ul(t,e,n=Kt,s=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...r)=>{Gs();const o=Zr(n),l=ts(e,n,t,r);return o(),Ws(),l});return s?a.unshift(i):a.push(i),i}}const Zs=t=>(e,n=Kt)=>{(!Vi||t==="sp")&&Ul(t,(...s)=>e(...s),n)},m2=Zs("bm"),vt=Zs("m"),g2=Zs("bu"),yg=Zs("u"),Xp=Zs("bum"),Js=Zs("um"),v2=Zs("sp"),_2=Zs("rtg"),x2=Zs("rtc");function y2(t,e=Kt){Ul("ec",t,e)}const b2="components";function Pt(t,e){return M2(b2,t,!0,e)||t}const S2=Symbol.for("v-ndc");function M2(t,e,n=!0,s=!1){const a=Yn||Kt;if(a){const i=a.type;{const o=a3(i,!1);if(o&&(o===e||o===xn(e)||o===qr(xn(e))))return i}const r=lf(a[t]||i[t],e)||lf(a.appContext[t],e);return!r&&s?i:r}}function lf(t,e){return t&&(t[e]||t[xn(e)]||t[qr(xn(e))])}function vC(t,e,n,s){let a;const i=n,r=Ge(t);if(r||kt(t)){const o=r&&ba(t);let l=!1,u=!1;o&&(l=!Ln(t),u=Xs(t),t=Ll(t)),a=new Array(t.length);for(let c=0,p=t.length;c<p;c++)a[c]=e(l?u?zi(es(t[c])):es(t[c]):t[c],c,void 0,i)}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i)}else if(St(t))if(t[Symbol.iterator])a=Array.from(t,(o,l)=>e(o,l,void 0,i));else{const o=Object.keys(t);a=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];a[l]=e(t[c],c,l,i)}}else a=[];return a}const hu=t=>t?Xg(t)?Zp(t):hu(t.parent):null,Er=$t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>hu(t.parent),$root:t=>hu(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Sg(t),$forceUpdate:t=>t.f||(t.f=()=>{Vp(t.update)}),$nextTick:t=>t.n||(t.n=Ms.bind(t.proxy)),$watch:t=>n2.bind(t)}),oc=(t,e)=>t!==At&&!t.__isScriptSetup&&ft(t,e),E2={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:a,props:i,accessCache:r,type:o,appContext:l}=t;if(e[0]!=="$"){const h=r[e];if(h!==void 0)switch(h){case 1:return s[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(oc(s,e))return r[e]=1,s[e];if(a!==At&&ft(a,e))return r[e]=2,a[e];if(ft(i,e))return r[e]=3,i[e];if(n!==At&&ft(n,e))return r[e]=4,n[e];fu&&(r[e]=0)}}const u=Er[e];let c,p;if(u)return e==="$attrs"&&sn(t.attrs,"get",""),u(t);if((c=o.__cssModules)&&(c=c[e]))return c;if(n!==At&&ft(n,e))return r[e]=4,n[e];if(p=l.config.globalProperties,ft(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:a,ctx:i}=t;return oc(a,e)?(a[e]=n,!0):s!==At&&ft(s,e)?(s[e]=n,!0):ft(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:a,props:i,type:r}},o){let l;return!!(n[o]||t!==At&&o[0]!=="$"&&ft(t,o)||oc(e,o)||ft(i,o)||ft(s,o)||ft(Er,o)||ft(a.config.globalProperties,o)||(l=r.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ft(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function cf(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let fu=!0;function w2(t){const e=Sg(t),n=t.proxy,s=t.ctx;fu=!1,e.beforeCreate&&uf(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:r,watch:o,provide:l,inject:u,created:c,beforeMount:p,mounted:h,beforeUpdate:f,updated:v,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:M,destroyed:x,unmounted:S,render:T,renderTracked:P,renderTriggered:L,errorCaptured:O,serverPrefetch:b,expose:E,inheritAttrs:D,components:U,directives:k,filters:V}=e;if(u&&T2(u,s,null),r)for(const G in r){const q=r[G];$e(q)&&(s[G]=q.bind(n))}if(a){const G=a.call(n,n);St(G)&&(t.data=Za(G))}if(fu=!0,i)for(const G in i){const q=i[G],le=$e(q)?q.bind(n,n):$e(q.get)?q.get.bind(n,n):gs,ge=!$e(q)&&$e(q.set)?q.set.bind(n):gs,be=$({get:le,set:ge});Object.defineProperty(s,G,{enumerable:!0,configurable:!0,get:()=>be.value,set:Oe=>be.value=Oe})}if(o)for(const G in o)bg(o[G],s,n,G);if(l){const G=$e(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{Qn(q,G[q])})}c&&uf(c,t,"c");function B(G,q){Ge(q)?q.forEach(le=>G(le.bind(n))):q&&G(q.bind(n))}if(B(m2,p),B(vt,h),B(g2,f),B(yg,v),B(h2,_),B(f2,g),B(y2,O),B(x2,P),B(_2,L),B(Xp,M),B(Js,S),B(v2,b),Ge(E))if(E.length){const G=t.exposed||(t.exposed={});E.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:le=>n[q]=le,enumerable:!0})})}else t.exposed||(t.exposed={});T&&t.render===gs&&(t.render=T),D!=null&&(t.inheritAttrs=D),U&&(t.components=U),k&&(t.directives=k),b&&$p(t)}function T2(t,e,n=gs){Ge(t)&&(t=du(t));for(const s in t){const a=t[s];let i;St(a)?"default"in a?i=Rt(a.from||s,a.default,!0):i=Rt(a.from||s):i=Rt(a),zt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:r=>i.value=r}):e[s]=i}}function uf(t,e,n){ts(Ge(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function bg(t,e,n,s){let a=s.includes(".")?pg(n,s):()=>n[s];if(kt(t)){const i=e[t];$e(i)&&Lt(a,i)}else if($e(t))Lt(a,t.bind(n));else if(St(t))if(Ge(t))t.forEach(i=>bg(i,e,n,s));else{const i=$e(t.handler)?t.handler.bind(n):e[t.handler];$e(i)&&Lt(a,i,t)}}function Sg(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:r}}=t.appContext,o=i.get(e);let l;return o?l=o:!a.length&&!n&&!s?l=e:(l={},a.length&&a.forEach(u=>dl(l,u,r,!0)),dl(l,e,r)),St(e)&&i.set(e,l),l}function dl(t,e,n,s=!1){const{mixins:a,extends:i}=e;i&&dl(t,i,n,!0),a&&a.forEach(r=>dl(t,r,n,!0));for(const r in e)if(!(s&&r==="expose")){const o=A2[r]||n&&n[r];t[r]=o?o(t[r],e[r]):e[r]}return t}const A2={data:pf,props:hf,emits:hf,methods:xr,computed:xr,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:xr,directives:xr,watch:R2,provide:pf,inject:C2};function pf(t,e){return e?t?function(){return $t($e(t)?t.call(this,this):t,$e(e)?e.call(this,this):e)}:e:t}function C2(t,e){return xr(du(t),du(e))}function du(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function xr(t,e){return t?$t(Object.create(null),t,e):e}function hf(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:$t(Object.create(null),cf(t),cf(e??{})):e}function R2(t,e){if(!t)return e;if(!e)return t;const n=$t(Object.create(null),t);for(const s in e)n[s]=ln(t[s],e[s]);return n}function Mg(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P2=0;function L2(t,e){return function(s,a=null){$e(s)||(s=$t({},s)),a!=null&&!St(a)&&(a=null);const i=Mg(),r=new WeakSet,o=[];let l=!1;const u=i.app={_uid:P2++,_component:s,_props:a,_container:null,_context:i,_instance:null,version:r3,get config(){return i.config},set config(c){},use(c,...p){return r.has(c)||(c&&$e(c.install)?(r.add(c),c.install(u,...p)):$e(c)&&(r.add(c),c(u,...p))),u},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),u},component(c,p){return p?(i.components[c]=p,u):i.components[c]},directive(c,p){return p?(i.directives[c]=p,u):i.directives[c]},mount(c,p,h){if(!l){const f=u._ceVNode||Dt(s,a);return f.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),p&&e?e(f,c):t(f,c,h),l=!0,u._container=c,c.__vue_app__=u,Zp(f.component)}},onUnmount(c){o.push(c)},unmount(){l&&(ts(o,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,p){return i.provides[c]=p,u},runWithContext(c){const p=Ya;Ya=u;try{return c()}finally{Ya=p}}};return u}}let Ya=null;const D2=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${ei(e)}Modifiers`];function I2(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||At;let a=n;const i=e.startsWith("update:"),r=i&&D2(s,e.slice(7));r&&(r.trim&&(a=n.map(c=>kt(c)?c.trim():c)),r.number&&(a=n.map(l_)));let o,l=s[o=ec(e)]||s[o=ec(xn(e))];!l&&i&&(l=s[o=ec(ei(e))]),l&&ts(l,t,6,a);const u=s[o+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,ts(u,t,6,a)}}const N2=new WeakMap;function Eg(t,e,n=!1){const s=n?N2:e.emitsCache,a=s.get(t);if(a!==void 0)return a;const i=t.emits;let r={},o=!1;if(!$e(t)){const l=u=>{const c=Eg(u,e,!0);c&&(o=!0,$t(r,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!o?(St(t)&&s.set(t,null),null):(Ge(i)?i.forEach(l=>r[l]=null):$t(r,i),St(t)&&s.set(t,r),r)}function Ol(t,e){return!t||!Xr(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(t,e[0].toLowerCase()+e.slice(1))||ft(t,ei(e))||ft(t,e))}function lc(t){const{type:e,vnode:n,proxy:s,withProxy:a,propsOptions:[i],slots:r,attrs:o,emit:l,render:u,renderCache:c,props:p,data:h,setupState:f,ctx:v,inheritAttrs:_}=t,g=hl(t);let m,M;try{if(n.shapeFlag&4){const S=a||s,T=S;m=kn(u.call(T,S,c,p,f,h,v)),M=o}else{const S=e;m=kn(S.length>1?S(p,{attrs:o,slots:r,emit:l}):S(p,null)),M=e.props?o:U2(o)}}catch(S){Tr.length=0,Yr(S,t,1),m=Dt(Yt)}let x=m;if(M&&_!==!1){const S=Object.keys(M),{shapeFlag:T}=x;S.length&&T&7&&(i&&S.some(Up)&&(M=O2(M,i)),x=Sa(x,M,!1,!0))}return n.dirs&&(x=Sa(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Ja(x,n.transition),m=x,hl(g),m}const U2=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xr(n))&&((e||(e={}))[n]=t[n]);return e},O2=(t,e)=>{const n={};for(const s in t)(!Up(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function F2(t,e,n){const{props:s,children:a,component:i}=t,{props:r,children:o,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?ff(s,r,u):!!r;if(l&8){const c=e.dynamicProps;for(let p=0;p<c.length;p++){const h=c[p];if(r[h]!==s[h]&&!Ol(u,h))return!0}}}else return(a||o)&&(!o||!o.$stable)?!0:s===r?!1:s?r?ff(s,r,u):!0:!!r;return!1}function ff(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let a=0;a<s.length;a++){const i=s[a];if(e[i]!==t[i]&&!Ol(n,i))return!0}return!1}function wg({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Tg={},Ag=()=>Object.create(Tg),Cg=t=>Object.getPrototypeOf(t)===Tg;function B2(t,e,n,s=!1){const a={},i=Ag();t.propsDefaults=Object.create(null),Rg(t,e,a,i);for(const r in t.propsOptions[0])r in a||(a[r]=void 0);n?t.props=s?a:tg(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function k2(t,e,n,s){const{props:a,attrs:i,vnode:{patchFlag:r}}=t,o=st(a),[l]=t.propsOptions;let u=!1;if((s||r>0)&&!(r&16)){if(r&8){const c=t.vnode.dynamicProps;for(let p=0;p<c.length;p++){let h=c[p];if(Ol(t.emitsOptions,h))continue;const f=e[h];if(l)if(ft(i,h))f!==i[h]&&(i[h]=f,u=!0);else{const v=xn(h);a[v]=mu(l,o,v,f,t,!1)}else f!==i[h]&&(i[h]=f,u=!0)}}}else{Rg(t,e,a,i)&&(u=!0);let c;for(const p in o)(!e||!ft(e,p)&&((c=ei(p))===p||!ft(e,c)))&&(l?n&&(n[p]!==void 0||n[c]!==void 0)&&(a[p]=mu(l,o,p,void 0,t,!0)):delete a[p]);if(i!==o)for(const p in i)(!e||!ft(e,p))&&(delete i[p],u=!0)}u&&Bs(t.attrs,"set","")}function Rg(t,e,n,s){const[a,i]=t.propsOptions;let r=!1,o;if(e)for(let l in e){if(Pi(l))continue;const u=e[l];let c;a&&ft(a,c=xn(l))?!i||!i.includes(c)?n[c]=u:(o||(o={}))[c]=u:Ol(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,r=!0)}if(i){const l=st(n),u=o||At;for(let c=0;c<i.length;c++){const p=i[c];n[p]=mu(a,l,p,u[p],t,!ft(u,p))}}return r}function mu(t,e,n,s,a,i){const r=t[n];if(r!=null){const o=ft(r,"default");if(o&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&$e(l)){const{propsDefaults:u}=a;if(n in u)s=u[n];else{const c=Zr(a);s=u[n]=l.call(null,e),c()}}else s=l;a.ce&&a.ce._setProp(n,s)}r[0]&&(i&&!o?s=!1:r[1]&&(s===""||s===ei(n))&&(s=!0))}return s}const z2=new WeakMap;function Pg(t,e,n=!1){const s=n?z2:e.propsCache,a=s.get(t);if(a)return a;const i=t.props,r={},o=[];let l=!1;if(!$e(t)){const c=p=>{l=!0;const[h,f]=Pg(p,e,!0);$t(r,h),f&&o.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!i&&!l)return St(t)&&s.set(t,Ci),Ci;if(Ge(i))for(let c=0;c<i.length;c++){const p=xn(i[c]);df(p)&&(r[p]=At)}else if(i)for(const c in i){const p=xn(c);if(df(p)){const h=i[c],f=r[p]=Ge(h)||$e(h)?{type:h}:$t({},h),v=f.type;let _=!1,g=!0;if(Ge(v))for(let m=0;m<v.length;++m){const M=v[m],x=$e(M)&&M.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(g=!1)}else _=$e(v)&&v.name==="Boolean";f[0]=_,f[1]=g,(_||ft(f,"default"))&&o.push(p)}}const u=[r,o];return St(t)&&s.set(t,u),u}function df(t){return t[0]!=="$"&&!Pi(t)}const qp=t=>t==="_"||t==="_ctx"||t==="$stable",jp=t=>Ge(t)?t.map(kn):[kn(t)],V2=(t,e,n)=>{if(e._n)return e;const s=cg((...a)=>jp(e(...a)),n);return s._c=!1,s},Lg=(t,e,n)=>{const s=t._ctx;for(const a in t){if(qp(a))continue;const i=t[a];if($e(i))e[a]=V2(a,i,s);else if(i!=null){const r=jp(i);e[a]=()=>r}}},Dg=(t,e)=>{const n=jp(e);t.slots.default=()=>n},Ig=(t,e,n)=>{for(const s in e)(n||!qp(s))&&(t[s]=e[s])},H2=(t,e,n)=>{const s=t.slots=Ag();if(t.vnode.shapeFlag&32){const a=e._;a?(Ig(s,e,n),n&&Um(s,"_",a,!0)):Lg(e,s)}else e&&Dg(t,e)},G2=(t,e,n)=>{const{vnode:s,slots:a}=t;let i=!0,r=At;if(s.shapeFlag&32){const o=e._;o?n&&o===1?i=!1:Ig(a,e,n):(i=!e.$stable,Lg(e,a)),r=e}else e&&(Dg(t,e),r={default:1});if(i)for(const o in a)!qp(o)&&r[o]==null&&delete a[o]},Tn=kg;function W2(t){return $2(t,l2)}function $2(t,e){const n=Al();n.__VUE__=!0;const{insert:s,remove:a,patchProp:i,createElement:r,createText:o,createComment:l,setText:u,setElementText:c,parentNode:p,nextSibling:h,setScopeId:f=gs,insertStaticContent:v}=t,_=(R,I,W,ee=null,se=null,C=null,fe=void 0,ce=null,ue=!!I.dynamicChildren)=>{if(R===I)return;R&&!Va(R,I)&&(ee=F(R),Oe(R,se,C,!0),R=null),I.patchFlag===-2&&(ue=!1,I.dynamicChildren=null);const{type:K,ref:A,shapeFlag:y}=I;switch(K){case Ka:g(R,I,W,ee);break;case Yt:m(R,I,W,ee);break;case wr:R==null&&M(I,W,ee,fe);break;case hn:U(R,I,W,ee,se,C,fe,ce,ue);break;default:y&1?T(R,I,W,ee,se,C,fe,ce,ue):y&6?k(R,I,W,ee,se,C,fe,ce,ue):(y&64||y&128)&&K.process(R,I,W,ee,se,C,fe,ce,ue,re)}A!=null&&se?Di(A,R&&R.ref,C,I||R,!I):A==null&&R&&R.ref!=null&&Di(R.ref,null,C,R,!0)},g=(R,I,W,ee)=>{if(R==null)s(I.el=o(I.children),W,ee);else{const se=I.el=R.el;I.children!==R.children&&u(se,I.children)}},m=(R,I,W,ee)=>{R==null?s(I.el=l(I.children||""),W,ee):I.el=R.el},M=(R,I,W,ee)=>{[R.el,R.anchor]=v(R.children,I,W,ee,R.el,R.anchor)},x=({el:R,anchor:I},W,ee)=>{let se;for(;R&&R!==I;)se=h(R),s(R,W,ee),R=se;s(I,W,ee)},S=({el:R,anchor:I})=>{let W;for(;R&&R!==I;)W=h(R),a(R),R=W;a(I)},T=(R,I,W,ee,se,C,fe,ce,ue)=>{if(I.type==="svg"?fe="svg":I.type==="math"&&(fe="mathml"),R==null)P(I,W,ee,se,C,fe,ce,ue);else{const K=R.el&&R.el._isVueCE?R.el:null;try{K&&K._beginPatch(),b(R,I,se,C,fe,ce,ue)}finally{K&&K._endPatch()}}},P=(R,I,W,ee,se,C,fe,ce)=>{let ue,K;const{props:A,shapeFlag:y,transition:N,dirs:j}=R;if(ue=R.el=r(R.type,C,A&&A.is,A),y&8?c(ue,R.children):y&16&&O(R.children,ue,null,ee,se,cc(R,C),fe,ce),j&&hs(R,null,ee,"created"),L(ue,R,R.scopeId,fe,ee),A){for(const Z in A)Z!=="value"&&!Pi(Z)&&i(ue,Z,null,A[Z],C,ee);"value"in A&&i(ue,"value",null,A.value,C),(K=A.onVnodeBeforeMount)&&On(K,ee,R)}j&&hs(R,null,ee,"beforeMount");const te=Ng(se,N);te&&N.beforeEnter(ue),s(ue,I,W),((K=A&&A.onVnodeMounted)||te||j)&&Tn(()=>{K&&On(K,ee,R),te&&N.enter(ue),j&&hs(R,null,ee,"mounted")},se)},L=(R,I,W,ee,se)=>{if(W&&f(R,W),ee)for(let C=0;C<ee.length;C++)f(R,ee[C]);if(se){let C=se.subTree;if(I===C||Bg(C.type)&&(C.ssContent===I||C.ssFallback===I)){const fe=se.vnode;L(R,fe,fe.scopeId,fe.slotScopeIds,se.parent)}}},O=(R,I,W,ee,se,C,fe,ce,ue=0)=>{for(let K=ue;K<R.length;K++){const A=R[K]=ce?ma(R[K]):kn(R[K]);_(null,A,I,W,ee,se,C,fe,ce)}},b=(R,I,W,ee,se,C,fe)=>{const ce=I.el=R.el;let{patchFlag:ue,dynamicChildren:K,dirs:A}=I;ue|=R.patchFlag&16;const y=R.props||At,N=I.props||At;let j;if(W&&Pa(W,!1),(j=N.onVnodeBeforeUpdate)&&On(j,W,I,R),A&&hs(I,R,W,"beforeUpdate"),W&&Pa(W,!0),(y.innerHTML&&N.innerHTML==null||y.textContent&&N.textContent==null)&&c(ce,""),K?E(R.dynamicChildren,K,ce,W,ee,cc(I,se),C):fe||q(R,I,ce,null,W,ee,cc(I,se),C,!1),ue>0){if(ue&16)D(ce,y,N,W,se);else if(ue&2&&y.class!==N.class&&i(ce,"class",null,N.class,se),ue&4&&i(ce,"style",y.style,N.style,se),ue&8){const te=I.dynamicProps;for(let Z=0;Z<te.length;Z++){const _e=te[Z],de=y[_e],Ee=N[_e];(Ee!==de||_e==="value")&&i(ce,_e,de,Ee,se,W)}}ue&1&&R.children!==I.children&&c(ce,I.children)}else!fe&&K==null&&D(ce,y,N,W,se);((j=N.onVnodeUpdated)||A)&&Tn(()=>{j&&On(j,W,I,R),A&&hs(I,R,W,"updated")},ee)},E=(R,I,W,ee,se,C,fe)=>{for(let ce=0;ce<I.length;ce++){const ue=R[ce],K=I[ce],A=ue.el&&(ue.type===hn||!Va(ue,K)||ue.shapeFlag&198)?p(ue.el):W;_(ue,K,A,null,ee,se,C,fe,!0)}},D=(R,I,W,ee,se)=>{if(I!==W){if(I!==At)for(const C in I)!Pi(C)&&!(C in W)&&i(R,C,I[C],null,se,ee);for(const C in W){if(Pi(C))continue;const fe=W[C],ce=I[C];fe!==ce&&C!=="value"&&i(R,C,ce,fe,se,ee)}"value"in W&&i(R,"value",I.value,W.value,se)}},U=(R,I,W,ee,se,C,fe,ce,ue)=>{const K=I.el=R?R.el:o(""),A=I.anchor=R?R.anchor:o("");let{patchFlag:y,dynamicChildren:N,slotScopeIds:j}=I;j&&(ce=ce?ce.concat(j):j),R==null?(s(K,W,ee),s(A,W,ee),O(I.children||[],W,A,se,C,fe,ce,ue)):y>0&&y&64&&N&&R.dynamicChildren&&R.dynamicChildren.length===N.length?(E(R.dynamicChildren,N,W,se,C,fe,ce),(I.key!=null||se&&I===se.subTree)&&Ug(R,I,!0)):q(R,I,W,A,se,C,fe,ce,ue)},k=(R,I,W,ee,se,C,fe,ce,ue)=>{I.slotScopeIds=ce,R==null?I.shapeFlag&512?se.ctx.activate(I,W,ee,fe,ue):V(I,W,ee,se,C,fe,ue):X(R,I,ue)},V=(R,I,W,ee,se,C,fe)=>{const ce=R.component=Q2(R,ee,se);if(Kr(R)&&(ce.ctx.renderer=re),e3(ce,!1,fe),ce.asyncDep){if(se&&se.registerDep(ce,B,fe),!R.el){const ue=ce.subTree=Dt(Yt);m(null,ue,I,W),R.placeholder=ue.el}}else B(ce,R,I,W,se,C,fe)},X=(R,I,W)=>{const ee=I.component=R.component;if(F2(R,I,W))if(ee.asyncDep&&!ee.asyncResolved){G(ee,I,W);return}else ee.next=I,ee.update();else I.el=R.el,ee.vnode=I},B=(R,I,W,ee,se,C,fe)=>{const ce=()=>{if(R.isMounted){let{next:y,bu:N,u:j,parent:te,vnode:Z}=R;{const he=Og(R);if(he){y&&(y.el=Z.el,G(R,y,fe)),he.asyncDep.then(()=>{R.isUnmounted||ce()});return}}let _e=y,de;Pa(R,!1),y?(y.el=Z.el,G(R,y,fe)):y=Z,N&&tc(N),(de=y.props&&y.props.onVnodeBeforeUpdate)&&On(de,te,y,Z),Pa(R,!0);const Ee=lc(R),Ue=R.subTree;R.subTree=Ee,_(Ue,Ee,p(Ue.el),F(Ue),R,se,C),y.el=Ee.el,_e===null&&wg(R,Ee.el),j&&Tn(j,se),(de=y.props&&y.props.onVnodeUpdated)&&Tn(()=>On(de,te,y,Z),se)}else{let y;const{el:N,props:j}=I,{bm:te,m:Z,parent:_e,root:de,type:Ee}=R,Ue=Ii(I);if(Pa(R,!1),te&&tc(te),!Ue&&(y=j&&j.onVnodeBeforeMount)&&On(y,_e,I),Pa(R,!0),N&&We){const he=()=>{R.subTree=lc(R),We(N,R.subTree,R,se,null)};Ue&&Ee.__asyncHydrate?Ee.__asyncHydrate(N,R,he):he()}else{de.ce&&de.ce._def.shadowRoot!==!1&&de.ce._injectChildStyle(Ee);const he=R.subTree=lc(R);_(null,he,W,ee,R,se,C),I.el=he.el}if(Z&&Tn(Z,se),!Ue&&(y=j&&j.onVnodeMounted)){const he=I;Tn(()=>On(y,_e,he),se)}(I.shapeFlag&256||_e&&Ii(_e.vnode)&&_e.vnode.shapeFlag&256)&&R.a&&Tn(R.a,se),R.isMounted=!0,I=W=ee=null}};R.scope.on();const ue=R.effect=new km(ce);R.scope.off();const K=R.update=ue.run.bind(ue),A=R.job=ue.runIfDirty.bind(ue);A.i=R,A.id=R.uid,ue.scheduler=()=>Vp(A),Pa(R,!0),K()},G=(R,I,W)=>{I.component=R;const ee=R.vnode.props;R.vnode=I,R.next=null,k2(R,I.props,ee,W),G2(R,I.children,W),Gs(),nf(R),Ws()},q=(R,I,W,ee,se,C,fe,ce,ue=!1)=>{const K=R&&R.children,A=R?R.shapeFlag:0,y=I.children,{patchFlag:N,shapeFlag:j}=I;if(N>0){if(N&128){ge(K,y,W,ee,se,C,fe,ce,ue);return}else if(N&256){le(K,y,W,ee,se,C,fe,ce,ue);return}}j&8?(A&16&&ie(K,se,C),y!==K&&c(W,y)):A&16?j&16?ge(K,y,W,ee,se,C,fe,ce,ue):ie(K,se,C,!0):(A&8&&c(W,""),j&16&&O(y,W,ee,se,C,fe,ce,ue))},le=(R,I,W,ee,se,C,fe,ce,ue)=>{R=R||Ci,I=I||Ci;const K=R.length,A=I.length,y=Math.min(K,A);let N;for(N=0;N<y;N++){const j=I[N]=ue?ma(I[N]):kn(I[N]);_(R[N],j,W,null,se,C,fe,ce,ue)}K>A?ie(R,se,C,!0,!1,y):O(I,W,ee,se,C,fe,ce,ue,y)},ge=(R,I,W,ee,se,C,fe,ce,ue)=>{let K=0;const A=I.length;let y=R.length-1,N=A-1;for(;K<=y&&K<=N;){const j=R[K],te=I[K]=ue?ma(I[K]):kn(I[K]);if(Va(j,te))_(j,te,W,null,se,C,fe,ce,ue);else break;K++}for(;K<=y&&K<=N;){const j=R[y],te=I[N]=ue?ma(I[N]):kn(I[N]);if(Va(j,te))_(j,te,W,null,se,C,fe,ce,ue);else break;y--,N--}if(K>y){if(K<=N){const j=N+1,te=j<A?I[j].el:ee;for(;K<=N;)_(null,I[K]=ue?ma(I[K]):kn(I[K]),W,te,se,C,fe,ce,ue),K++}}else if(K>N)for(;K<=y;)Oe(R[K],se,C,!0),K++;else{const j=K,te=K,Z=new Map;for(K=te;K<=N;K++){const Ce=I[K]=ue?ma(I[K]):kn(I[K]);Ce.key!=null&&Z.set(Ce.key,K)}let _e,de=0;const Ee=N-te+1;let Ue=!1,he=0;const Se=new Array(Ee);for(K=0;K<Ee;K++)Se[K]=0;for(K=j;K<=y;K++){const Ce=R[K];if(de>=Ee){Oe(Ce,se,C,!0);continue}let ve;if(Ce.key!=null)ve=Z.get(Ce.key);else for(_e=te;_e<=N;_e++)if(Se[_e-te]===0&&Va(Ce,I[_e])){ve=_e;break}ve===void 0?Oe(Ce,se,C,!0):(Se[ve-te]=K+1,ve>=he?he=ve:Ue=!0,_(Ce,I[ve],W,null,se,C,fe,ce,ue),de++)}const Ie=Ue?X2(Se):Ci;for(_e=Ie.length-1,K=Ee-1;K>=0;K--){const Ce=te+K,ve=I[Ce],Ke=I[Ce+1],z=Ce+1<A?Ke.el||Fg(Ke):ee;Se[K]===0?_(null,ve,W,z,se,C,fe,ce,ue):Ue&&(_e<0||K!==Ie[_e]?be(ve,W,z,2):_e--)}}},be=(R,I,W,ee,se=null)=>{const{el:C,type:fe,transition:ce,children:ue,shapeFlag:K}=R;if(K&6){be(R.component.subTree,I,W,ee);return}if(K&128){R.suspense.move(I,W,ee);return}if(K&64){fe.move(R,I,W,re);return}if(fe===hn){s(C,I,W);for(let y=0;y<ue.length;y++)be(ue[y],I,W,ee);s(R.anchor,I,W);return}if(fe===wr){x(R,I,W);return}if(ee!==2&&K&1&&ce)if(ee===0)ce.beforeEnter(C),s(C,I,W),Tn(()=>ce.enter(C),se);else{const{leave:y,delayLeave:N,afterLeave:j}=ce,te=()=>{R.ctx.isUnmounted?a(C):s(C,I,W)},Z=()=>{C._isLeaving&&C[Fs](!0),y(C,()=>{te(),j&&j()})};N?N(C,te,Z):Z()}else s(C,I,W)},Oe=(R,I,W,ee=!1,se=!1)=>{const{type:C,props:fe,ref:ce,children:ue,dynamicChildren:K,shapeFlag:A,patchFlag:y,dirs:N,cacheIndex:j}=R;if(y===-2&&(se=!1),ce!=null&&(Gs(),Di(ce,null,W,R,!0),Ws()),j!=null&&(I.renderCache[j]=void 0),A&256){I.ctx.deactivate(R);return}const te=A&1&&N,Z=!Ii(R);let _e;if(Z&&(_e=fe&&fe.onVnodeBeforeUnmount)&&On(_e,I,R),A&6)et(R.component,W,ee);else{if(A&128){R.suspense.unmount(W,ee);return}te&&hs(R,null,I,"beforeUnmount"),A&64?R.type.remove(R,I,W,re,ee):K&&!K.hasOnce&&(C!==hn||y>0&&y&64)?ie(K,I,W,!1,!0):(C===hn&&y&384||!se&&A&16)&&ie(ue,I,W),ee&&Be(R)}(Z&&(_e=fe&&fe.onVnodeUnmounted)||te)&&Tn(()=>{_e&&On(_e,I,R),te&&hs(R,null,I,"unmounted")},W)},Be=R=>{const{type:I,el:W,anchor:ee,transition:se}=R;if(I===hn){rt(W,ee);return}if(I===wr){S(R);return}const C=()=>{a(W),se&&!se.persisted&&se.afterLeave&&se.afterLeave()};if(R.shapeFlag&1&&se&&!se.persisted){const{leave:fe,delayLeave:ce}=se,ue=()=>fe(W,C);ce?ce(R.el,C,ue):ue()}else C()},rt=(R,I)=>{let W;for(;R!==I;)W=h(R),a(R),R=W;a(I)},et=(R,I,W)=>{const{bum:ee,scope:se,job:C,subTree:fe,um:ce,m:ue,a:K}=R;mf(ue),mf(K),ee&&tc(ee),se.stop(),C&&(C.flags|=8,Oe(fe,R,I,W)),ce&&Tn(ce,I),Tn(()=>{R.isUnmounted=!0},I)},ie=(R,I,W,ee=!1,se=!1,C=0)=>{for(let fe=C;fe<R.length;fe++)Oe(R[fe],I,W,ee,se)},F=R=>{if(R.shapeFlag&6)return F(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=h(R.anchor||R.el),W=I&&I[s2];return W?h(W):I};let ae=!1;const oe=(R,I,W)=>{let ee;R==null?I._vnode&&(Oe(I._vnode,null,null,!0),ee=I._vnode.component):_(I._vnode||null,R,I,null,null,null,W),I._vnode=R,ae||(ae=!0,nf(ee),pl(),ae=!1)},re={p:_,um:Oe,m:be,r:Be,mt:V,mc:O,pc:q,pbc:E,n:F,o:t};let Ae,We;return e&&([Ae,We]=e(re)),{render:oe,hydrate:Ae,createApp:L2(oe,Ae)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pa({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ng(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Ug(t,e,n=!1){const s=t.children,a=e.children;if(Ge(s)&&Ge(a))for(let i=0;i<s.length;i++){const r=s[i];let o=a[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=a[i]=ma(a[i]),o.el=r.el),!n&&o.patchFlag!==-2&&Ug(r,o)),o.type===Ka&&(o.patchFlag!==-1?o.el=r.el:o.__elIndex=i+(t.type===hn?1:0)),o.type===Yt&&!o.el&&(o.el=r.el)}}function X2(t){const e=t.slice(),n=[0];let s,a,i,r,o;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(a=n[n.length-1],t[a]<u){e[s]=a,n.push(s);continue}for(i=0,r=n.length-1;i<r;)o=i+r>>1,t[n[o]]<u?i=o+1:r=o;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,r=n[i-1];i-- >0;)n[i]=r,r=e[r];return n}function Og(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Og(e)}function mf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Fg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Fg(e.subTree):null}const Bg=t=>t.__isSuspense;function kg(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):Q_(t)}const hn=Symbol.for("v-fgt"),Ka=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),Tr=[];let Rn=null;function Yp(t=!1){Tr.push(Rn=t?null:[])}function q2(){Tr.pop(),Rn=Tr[Tr.length-1]||null}let Ur=1;function ml(t,e=!1){Ur+=t,t<0&&Rn&&e&&(Rn.hasOnce=!0)}function zg(t){return t.dynamicChildren=Ur>0?Rn||Ci:null,q2(),Ur>0&&Rn&&Rn.push(t),t}function j2(t,e,n,s,a,i){return zg(Gg(t,e,n,s,a,i,!0))}function Vg(t,e,n,s,a){return zg(Dt(t,e,n,s,a,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function Va(t,e){return t.type===e.type&&t.key===e.key}const Hg=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?kt(t)||zt(t)||$e(t)?{i:Yn,r:t,k:e,f:!!n}:t:null);function Gg(t,e=null,n=null,s=0,a=null,i=t===hn?0:1,r=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hg(e),ref:e&&Jo(e),scopeId:lg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Yn};return o?(Kp(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=kt(n)?8:16),Ur>0&&!r&&Rn&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Rn.push(l),l}const Dt=Y2;function Y2(t,e=null,n=null,s=0,a=null,i=!1){if((!t||t===S2)&&(t=Yt),gl(t)){const o=Sa(t,e,!0);return n&&Kp(o,n),Ur>0&&!i&&Rn&&(o.shapeFlag&6?Rn[Rn.indexOf(t)]=o:Rn.push(o)),o.patchFlag=-2,o}if(i3(t)&&(t=t.__vccOpts),e){e=Wg(e);let{class:o,style:l}=e;o&&!kt(o)&&(e.class=Rl(o)),St(l)&&(Nl(l)&&!Ge(l)&&(l=$t({},l)),e.style=Cl(l))}const r=kt(t)?1:Bg(t)?128:hg(t)?64:St(t)?4:$e(t)?2:0;return Gg(t,e,n,s,a,r,i,!0)}function Wg(t){return t?Nl(t)||Cg(t)?$t({},t):t:null}function Sa(t,e,n=!1,s=!1){const{props:a,ref:i,patchFlag:r,children:o,transition:l}=t,u=e?K2(a||{},e):a,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Hg(u),ref:e&&e.ref?n&&i?Ge(i)?i.concat(Jo(e)):[i,Jo(e)]:Jo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==hn?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sa(t.ssContent),ssFallback:t.ssFallback&&Sa(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ja(c,l.clone(c)),c}function $g(t=" ",e=0){return Dt(Ka,null,t,e)}function _C(t,e){const n=Dt(wr,null,t);return n.staticCount=e,n}function gf(t="",e=!1){return e?(Yp(),Vg(Yt,null,t)):Dt(Yt,null,t)}function kn(t){return t==null||typeof t=="boolean"?Dt(Yt):Ge(t)?Dt(hn,null,t.slice()):gl(t)?ma(t):Dt(Ka,null,String(t))}function ma(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sa(t)}function Kp(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(s&65){const a=e.default;a&&(a._c&&(a._d=!1),Kp(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!Cg(e)?e._ctx=Yn:a===3&&Yn&&(Yn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Yn},n=32):(e=String(e),s&64?(n=16,e=[$g(e)]):n=8);t.children=e,t.shapeFlag|=n}function K2(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const a in s)if(a==="class")e.class!==s.class&&(e.class=Rl([e.class,s.class]));else if(a==="style")e.style=Cl([e.style,s.style]);else if(Xr(a)){const i=e[a],r=s[a];r&&i!==r&&!(Ge(i)&&i.includes(r))&&(e[a]=i?[].concat(i,r):r)}else a!==""&&(e[a]=s[a])}return e}function On(t,e,n,s=null){ts(t,e,7,[n,s])}const Z2=Mg();let J2=0;function Q2(t,e,n){const s=t.type,a=(e?e.appContext:t.appContext)||Z2,i={uid:J2++,vnode:t,type:s,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new __(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pg(s,a),emitsOptions:Eg(s,a),emit:null,emitted:null,propsDefaults:At,inheritAttrs:s.inheritAttrs,ctx:At,data:At,props:At,attrs:At,slots:At,refs:At,setupState:At,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=I2.bind(null,i),t.ce&&t.ce(i),i}let Kt=null;const Qs=()=>Kt||Yn;let vl,gu;{const t=Al(),e=(n,s)=>{let a;return(a=t[n])||(a=t[n]=[]),a.push(s),i=>{a.length>1?a.forEach(r=>r(i)):a[0](i)}};vl=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),gu=e("__VUE_SSR_SETTERS__",n=>Vi=n)}const Zr=t=>{const e=Kt;return vl(t),t.scope.on(),()=>{t.scope.off(),vl(e)}},vf=()=>{Kt&&Kt.scope.off(),vl(null)};function Xg(t){return t.vnode.shapeFlag&4}let Vi=!1;function e3(t,e=!1,n=!1){e&&gu(e);const{props:s,children:a}=t.vnode,i=Xg(t);B2(t,s,i,e),H2(t,a,n||e);const r=i?t3(t,e):void 0;return e&&gu(!1),r}function t3(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,E2);const{setup:s}=n;if(s){Gs();const a=t.setupContext=s.length>1?s3(t):null,i=Zr(t),r=jr(s,t,0,[t.props,a]),o=Dm(r);if(Ws(),i(),(o||t.sp)&&!Ii(t)&&$p(t),o){if(r.then(vf,vf),e)return r.then(l=>{_f(t,l)}).catch(l=>{Yr(l,t,0)});t.asyncDep=r}else _f(t,r)}else qg(t)}function _f(t,e,n){$e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=sg(e)),qg(t)}function qg(t,e,n){const s=t.type;t.render||(t.render=s.render||gs);{const a=Zr(t);Gs();try{w2(t)}finally{Ws(),a()}}}const n3={get(t,e){return sn(t,"get",""),t[e]}};function s3(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,n3),slots:t.slots,emit:t.emit,expose:e}}function Zp(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sg(z_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Er)return Er[n](t)},has(e,n){return n in e||n in Er}})):t.proxy}function a3(t,e=!0){return $e(t)?t.displayName||t.name:t.name||e&&t.__name}function i3(t){return $e(t)&&"__vccOpts"in t}const $=(t,e)=>j_(t,e,Vi);function d(t,e,n){try{ml(-1);const s=arguments.length;return s===2?St(e)&&!Ge(e)?gl(e)?Dt(t,null,[e]):Dt(t,e):Dt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&gl(n)&&(n=[n]),Dt(t,e,n))}finally{ml(1)}}const r3="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vu;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{vu=xf.createPolicy("vue",{createHTML:t=>t})}catch{}const jg=vu?t=>vu.createHTML(t):t=>t,o3="http://www.w3.org/2000/svg",l3="http://www.w3.org/1998/Math/MathML",Os=typeof document<"u"?document:null,yf=Os&&Os.createElement("template"),c3={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const a=e==="svg"?Os.createElementNS(o3,t):e==="mathml"?Os.createElementNS(l3,t):n?Os.createElement(t,{is:n}):Os.createElement(t);return t==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:t=>Os.createTextNode(t),createComment:t=>Os.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Os.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,a,i){const r=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{yf.innerHTML=jg(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const o=yf.content;if(s==="svg"||s==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[r?r.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},sa="transition",ur="animation",Hi=Symbol("_vtc"),Yg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Kg=$t({},dg,Yg),u3=t=>(t.displayName="Transition",t.props=Kg,t),Gi=u3((t,{slots:e})=>d(i2,Zg(t),e)),La=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},bf=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function Zg(t){const e={};for(const U in t)U in Yg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:s,duration:a,enterFromClass:i=`${n}-enter-from`,enterActiveClass:r=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=r,appearToClass:c=o,leaveFromClass:p=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,v=p3(a),_=v&&v[0],g=v&&v[1],{onBeforeEnter:m,onEnter:M,onEnterCancelled:x,onLeave:S,onLeaveCancelled:T,onBeforeAppear:P=m,onAppear:L=M,onAppearCancelled:O=x}=e,b=(U,k,V,X)=>{U._enterCancelled=X,ha(U,k?c:o),ha(U,k?u:r),V&&V()},E=(U,k)=>{U._isLeaving=!1,ha(U,p),ha(U,f),ha(U,h),k&&k()},D=U=>(k,V)=>{const X=U?L:M,B=()=>b(k,U,V);La(X,[k,B]),Sf(()=>{ha(k,U?l:i),us(k,U?c:o),bf(X)||Mf(k,s,_,B)})};return $t(e,{onBeforeEnter(U){La(m,[U]),us(U,i),us(U,r)},onBeforeAppear(U){La(P,[U]),us(U,l),us(U,u)},onEnter:D(!1),onAppear:D(!0),onLeave(U,k){U._isLeaving=!0;const V=()=>E(U,k);us(U,p),U._enterCancelled?(us(U,h),_u(U)):(_u(U),us(U,h)),Sf(()=>{U._isLeaving&&(ha(U,p),us(U,f),bf(S)||Mf(U,s,g,V))}),La(S,[U,V])},onEnterCancelled(U){b(U,!1,void 0,!0),La(x,[U])},onAppearCancelled(U){b(U,!0,void 0,!0),La(O,[U])},onLeaveCancelled(U){E(U),La(T,[U])}})}function p3(t){if(t==null)return null;if(St(t))return[uc(t.enter),uc(t.leave)];{const e=uc(t);return[e,e]}}function uc(t){return c_(t)}function us(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Hi]||(t[Hi]=new Set)).add(e)}function ha(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Hi];n&&(n.delete(e),n.size||(t[Hi]=void 0))}function Sf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let h3=0;function Mf(t,e,n,s){const a=t._endId=++h3,i=()=>{a===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:r,timeout:o,propCount:l}=Jg(t,e);if(!r)return s();const u=r+"end";let c=0;const p=()=>{t.removeEventListener(u,h),i()},h=f=>{f.target===t&&++c>=l&&p()};setTimeout(()=>{c<l&&p()},o+1),t.addEventListener(u,h)}function Jg(t,e){const n=window.getComputedStyle(t),s=v=>(n[v]||"").split(", "),a=s(`${sa}Delay`),i=s(`${sa}Duration`),r=Ef(a,i),o=s(`${ur}Delay`),l=s(`${ur}Duration`),u=Ef(o,l);let c=null,p=0,h=0;e===sa?r>0&&(c=sa,p=r,h=i.length):e===ur?u>0&&(c=ur,p=u,h=l.length):(p=Math.max(r,u),c=p>0?r>u?sa:ur:null,h=c?c===sa?i.length:l.length:0);const f=c===sa&&/\b(?:transform|all)(?:,|$)/.test(s(`${sa}Property`).toString());return{type:c,timeout:p,propCount:h,hasTransform:f}}function Ef(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>wf(n)+wf(t[s])))}function wf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _u(t){return(t?t.ownerDocument:document).body.offsetHeight}function f3(t,e,n){const s=t[Hi];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Tf=Symbol("_vod"),d3=Symbol("_vsh"),m3=Symbol(""),g3=/(?:^|;)\s*display\s*:/;function v3(t,e,n){const s=t.style,a=kt(n);let i=!1;if(n&&!a){if(e)if(kt(e))for(const r of e.split(";")){const o=r.slice(0,r.indexOf(":")).trim();n[o]==null&&Qo(s,o,"")}else for(const r in e)n[r]==null&&Qo(s,r,"");for(const r in n)r==="display"&&(i=!0),Qo(s,r,n[r])}else if(a){if(e!==n){const r=s[m3];r&&(n+=";"+r),s.cssText=n,i=g3.test(n)}}else e&&t.removeAttribute("style");Tf in t&&(t[Tf]=i?s.display:"",t[d3]&&(s.display="none"))}const Af=/\s*!important$/;function Qo(t,e,n){if(Ge(n))n.forEach(s=>Qo(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=_3(t,e);Af.test(n)?t.setProperty(ei(s),n.replace(Af,""),"important"):t[s]=n}}const Cf=["Webkit","Moz","ms"],pc={};function _3(t,e){const n=pc[e];if(n)return n;let s=xn(e);if(s!=="filter"&&s in t)return pc[e]=s;s=qr(s);for(let a=0;a<Cf.length;a++){const i=Cf[a]+s;if(i in t)return pc[e]=i}return e}const Rf="http://www.w3.org/1999/xlink";function Pf(t,e,n,s,a,i=g_(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rf,e.slice(6,e.length)):t.setAttributeNS(Rf,e,n):n==null||i&&!Om(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Ea(n)?String(n):n)}function Lf(t,e,n,s,a){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?jg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let r=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Om(n):n==null&&o==="string"?(n="",r=!0):o==="number"&&(n=0,r=!0)}try{t[e]=n}catch{}r&&t.removeAttribute(a||e)}function x3(t,e,n,s){t.addEventListener(e,n,s)}function y3(t,e,n,s){t.removeEventListener(e,n,s)}const Df=Symbol("_vei");function b3(t,e,n,s,a=null){const i=t[Df]||(t[Df]={}),r=i[e];if(s&&r)r.value=s;else{const[o,l]=S3(e);if(s){const u=i[e]=w3(s,a);x3(t,o,u,l)}else r&&(y3(t,o,r,l),i[e]=void 0)}}const If=/(?:Once|Passive|Capture)$/;function S3(t){let e;if(If.test(t)){e={};let s;for(;s=t.match(If);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ei(t.slice(2)),e]}let hc=0;const M3=Promise.resolve(),E3=()=>hc||(M3.then(()=>hc=0),hc=Date.now());function w3(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;ts(T3(s,n.value),e,5,[s])};return n.value=t,n.attached=E3(),n}function T3(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>a=>!a._stopped&&s&&s(a))}else return e}const Nf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,A3=(t,e,n,s,a,i)=>{const r=a==="svg";e==="class"?f3(t,s,r):e==="style"?v3(t,n,s):Xr(e)?Up(e)||b3(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):C3(t,e,s,r))?(Lf(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Pf(t,e,s,r,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!kt(s))?Lf(t,xn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Pf(t,e,s,r))};function C3(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nf(e)&&$e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const a=t.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Nf(e)&&kt(n)?!1:e in t}const Qg=new WeakMap,e0=new WeakMap,_l=Symbol("_moveCb"),Uf=Symbol("_enterCb"),R3=t=>(delete t.props.mode,t),P3=R3({name:"TransitionGroup",props:$t({},Kg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Qs(),s=fg();let a,i;return yg(()=>{if(!a.length)return;const r=t.moveClass||`${t.name||"v"}-move`;if(!N3(a[0].el,n.vnode.el,r)){a=[];return}a.forEach(L3),a.forEach(D3);const o=a.filter(I3);_u(n.vnode.el),o.forEach(l=>{const u=l.el,c=u.style;us(u,r),c.transform=c.webkitTransform=c.transitionDuration="";const p=u[_l]=h=>{h&&h.target!==u||(!h||h.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",p),u[_l]=null,ha(u,r))};u.addEventListener("transitionend",p)}),a=[]}),()=>{const r=st(t),o=Zg(r);let l=r.tag||hn;if(a=[],i)for(let u=0;u<i.length;u++){const c=i[u];c.el&&c.el instanceof Element&&(a.push(c),Ja(c,Nr(c,o,s,n)),Qg.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}i=e.default?Wp(e.default()):[];for(let u=0;u<i.length;u++){const c=i[u];c.key!=null&&Ja(c,Nr(c,o,s,n))}return Dt(l,null,i)}}}),t0=P3;function L3(t){const e=t.el;e[_l]&&e[_l](),e[Uf]&&e[Uf]()}function D3(t){e0.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function I3(t){const e=Qg.get(t),n=e0.get(t),s=e.left-n.left,a=e.top-n.top;if(s||a){const i=t.el.style;return i.transform=i.webkitTransform=`translate(${s}px,${a}px)`,i.transitionDuration="0s",t}}function N3(t,e,n){const s=t.cloneNode(),a=t[Hi];a&&a.forEach(o=>{o.split(/\s+/).forEach(l=>l&&s.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&s.classList.add(o)),s.style.display="none";const i=e.nodeType===1?e:e.parentNode;i.appendChild(s);const{hasTransform:r}=Jg(s);return i.removeChild(s),r}const U3=$t({patchProp:A3},c3);let fc,Of=!1;function O3(){return fc=Of?fc:W2(U3),Of=!0,fc}const F3=((...t)=>{const e=O3().createApp(...t),{mount:n}=e;return e.mount=s=>{const a=k3(s);if(a)return n(a,!0,B3(a))},e});function B3(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function k3(t){return kt(t)?document.querySelector(t):t}var Jr=t=>/^[a-z][a-z0-9+.-]*:/.test(t)||t.startsWith("//"),z3=/.md((\?|#).*)?$/,Fl=(t,e="/")=>Jr(t)||t.startsWith("/")&&!t.startsWith(e)&&!z3.test(t),Ji=t=>/^(https?:)?\/\//.test(t),Ff=t=>{if(!t||t.endsWith("/"))return t;let e=t.replace(/(^|\/)README.md$/i,"$1index.html");return e.endsWith(".md")?e=`${e.substring(0,e.length-3)}.html`:e.endsWith(".html")||(e=`${e}.html`),e.endsWith("/index.html")&&(e=e.substring(0,e.length-10)),e},V3="http://.",H3=(t,e)=>{if(!t.startsWith("/")&&e){const n=e.slice(0,e.lastIndexOf("/"));return Ff(new URL(`${n}/${t}`,V3).pathname)}return Ff(t)},G3=(t,e)=>{const n=Object.keys(t).sort((s,a)=>{const i=a.split("/").length-s.split("/").length;return i!==0?i:a.length-s.length});for(const s of n)if(e.startsWith(s))return s;return"/"},W3=/(#|\?)/,n0=t=>{const[e,...n]=t.split(W3);return{pathname:e,hashAndQueries:n.join("")}},$3=["link","meta","script","style","noscript","template"],X3=["title","base"],q3=([t,e,n])=>X3.includes(t)?t:$3.includes(t)?t==="meta"&&e.name?`${t}.${e.name}`:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,Object.entries(e).map(([s,a])=>typeof a=="boolean"?a?[s,""]:null:[s,a]).filter(s=>s!=null).sort(([s],[a])=>s.localeCompare(a)),n]):null,j3=t=>{const e=new Set,n=[];return t.forEach(s=>{const a=q3(s);a&&!e.has(a)&&(e.add(a),n.push(s))}),n},Y3=t=>t.startsWith("/")?t:`/${t}`,s0=t=>t.endsWith("/")||t.endsWith(".html")?t:`${t}/`,Jp=t=>t.endsWith("/")?t.slice(0,-1):t,a0=t=>t.startsWith("/")?t.slice(1):t,wa=t=>Object.prototype.toString.call(t)==="[object Object]",xt=t=>typeof t=="string";const K3="modulepreload",Z3=function(t){return"/myblog/"+t},Bf={},He=function(e,n,s){let a=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=r?.nonce||r?.getAttribute("nonce");a=l(n.map(u=>{if(u=Z3(u),u in Bf)return;Bf[u]=!0;const c=u.endsWith(".css"),p=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":K3,c||(h.as="script"),h.crossOrigin="",h.href=u,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((f,v)=>{h.addEventListener("load",f),h.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(r){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r}return a.then(r=>{for(const o of r||[])o.status==="rejected"&&i(o.reason);return e().catch(i)})},J3=JSON.parse("{}"),Q3=Object.fromEntries([["/",{loader:()=>He(()=>import("./index.html-DLw9qu_V.js"),[]),meta:{title:"个人博客",icon:"house"}}],["/intro.html",{loader:()=>He(()=>import("./intro.html-DRpACdIM.js"),[]),meta:{date:1766391785e3,cover:"/assets/images/cover3.jpg",excerpt:`
<p>将你的个人介绍和档案放置在此处。</p>
`,readingTime:{minutes:.08,words:23},title:"介绍页",icon:"circle-info",type:"article"}}],["/demo/",{loader:()=>He(()=>import("./index.html-B-zbllNm.js"),[]),meta:{date:1766391785e3,category:["使用指南"],readingTime:{minutes:.07,words:22},title:"主要功能与配置演示",icon:"laptop-code",type:"article"}}],["/demo/disable.html",{loader:()=>He(()=>import("./disable.html-D1MjDfLm.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["禁用"],excerpt:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,readingTime:{minutes:.43,words:128},title:"布局与功能禁用",icon:"gears",order:4,type:"article"}}],["/demo/encrypt.html",{loader:()=>He(()=>import("./encrypt.html-DAVMWIyK.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["加密"],isEncrypted:!0,readingTime:{minutes:.51,words:154},title:"密码加密的文章",icon:"lock",type:"article"}}],["/demo/layout.html",{loader:()=>He(()=>import("./layout.html-BwBSI2ed.js"),[]),meta:{date:1766391785e3,category:["指南"],tag:["布局"],excerpt:`<p>布局包括:</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚</a></li>
</ul>`,readingTime:{minutes:.53,words:159},title:"布局",icon:"object-group",order:2,type:"article"}}],["/demo/markdown.html",{loader:()=>He(()=>import("./markdown.html-CQD87PGf.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["Markdown"],excerpt:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,readingTime:{minutes:3.13,words:938},title:"Markdown 展示",icon:"fa6-brands:markdown",order:2,type:"article"}}],["/demo/page.html",{loader:()=>He(()=>import("./page.html-D-1y4iem.js"),[]),meta:{author:"superxuan",date:15778368e5,category:["使用指南"],tag:["页面配置","使用指南"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,readingTime:{minutes:1.76,words:529},title:"页面配置",icon:"file",order:3,type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/1sjk.html",{loader:()=>He(()=>import("./1sjk.html-CvwHHEIm.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`
<hr>
<p><strong>数据(Data)</strong></p>
<ul>
<li>概念：是数据库中存储的<strong>基本对象</strong>，是描述事物的符号记录</li>
<li>种类：文本、图形、图像、音频、视频、学生的档案记录、货物的运输情况等</li>
<li>特点：数据与其语义是不可分的</li>
</ul>
<p><strong>数据库(DataBase,DB)</strong></p>
<ul>
<li>概念：是永久存储在计算机内，有组织、可共享的大量数据的集合</li>
<li>特征：
<ul>
<li><strong>数据按一定的数据模型组织、描述和储存</strong></li>
<li><strong>可为各种用户共享</strong></li>
<li><strong>冗余度较小</strong></li>
<li><strong>数据独立性较高</strong></li>
<li><strong>易扩展</strong></li>
</ul>
</li>
</ul>`,readingTime:{minutes:10.13,words:3039},title:"数据库概览1",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/2sjk.html",{loader:()=>He(()=>import("./2sjk.html-6qJa862V.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover2.jpg",excerpt:`
<h2>2.1 关系数据结构及形式化定义</h2>
<p>二维表![[Pasted image 20250420205946.png]]<br>
![[Pasted image 20250420211720.png]]</p>
<h3>2.1.1 关系的相关概念</h3>
<p>关系一般对应规范化的二维表</p>
<ul>
<li>
<p>关系的组成：</p>
<ul>
<li>关系名--&gt;表名</li>
<li>关系模式--&gt;表头</li>
<li>关系实例--&gt;数据</li>
</ul>
</li>
<li>
<p>域：一组具有相同数据类型的值的集合</p>
</li>
<li>
<p>笛卡儿积：域上的一种集合运算<br>
![[Pasted image 20250420213138.png]]</p>
</li>
<li>
<p>元组：一个元组（Tuple）指二维表中的一行。</p>
</li>
<li>
<p>关系：R（D1，D2 … Dn）<br>
R为关系名；n为关系度<br>
关系是笛卡尔积的有限子集。</p>
</li>
<li>
<p>1、码=超键：能够唯一标识一条记录的属性或属性集。<br>
标识性：一个数据表的所有记录都具有不同的超键<br>
非空性：不能为空<br>
有些时候也把码称作“键”</p>
</li>
<li>
<p>2、候选键=候选码：能够唯一标识一条记录的最小属性集<br>
设关系R(A1，A2，…，An)，其属性为A1，A2，…，An，属性集K为R的子集，K=(Ai，Aj，…，Ak)，1≤i，j，…，k≤n。当且仅当满足下列两个条件时，K被称为<strong>候选码</strong>：</p>
<ul>
<li>标识性：一个数据表的所有记录都具有不同的候选键</li>
<li>最小性：任一候选键的任何真子集都不能唯一标识一个记录（比如在成绩表中（学号,课程号）是一个候选键，单独的学号，课程号都不能决定一条记录）</li>
<li>非空性：不能为空</li>
<li>候选键是没有多余属性的超键<br>
举例：学生ID是候选码，那么含有候选码的都是码。</li>
</ul>
</li>
<li>
<p>3、主键=主码：某个能够唯一标识一条记录的最小属性集（是从候选码里人为挑选的一条）<br>
唯一性：一个数据表只能有一个主键<br>
标识性：一个数据表的所有记录都具有不同的主键取值<br>
非空性：不能为空</p>
</li>
<li>
<p>4.如果关系的R1的属性或属性组K不是R1主码，而是另一关系R2的主码，则称K为关系R1的外码（Foreign Key）.<br>
并称关系R1为参照关系（Referencing Relation）<br>
关系R2为被参照关系（Referenced Relation）</p>
</li>
<li>
<p>基数![[Pasted image 20250420213233.png]]</p>
</li>
</ul>`,readingTime:{minutes:17.33,words:5200},title:"数据库概览2",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/3.sjk.html",{loader:()=>He(()=>import("./3.sjk.html-BSiuSB2z.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h2>数据库定义语言（DDL）</h2>
<h3>数据库操作</h3>
<p>我们可以通过<code>create database</code>来创建一个数据库：</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="background-color:#2e3440ff;color:#d8dee9ff"><pre class="shiki nord vp-code"><code class="language-sql"><span class="line"><span style="color:#81A1C1">create</span><span style="color:#81A1C1"> database</span><span style="color:#88C0D0"> 数据库名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:20.58,words:6174},title:"数据库概览3",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/glx.html",{loader:()=>He(()=>import("./glx.html-D5PueNLX.js"),[]),meta:{author:"superxuan",date:17666208e5,category:["医院管理学"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h3>医院管理学单选题</h3>
<ol>
<li>不属于医院组织原则的是（ ）<br>
A. 专业化分工原则 B. 统一指挥原则 C. 适应社会需求原则 D. 职责与权限一致原则<br>
<strong>答案：C</strong></li>
<li>领导的共同特征是（ ）<br>
A. 责、权、利三位一体 B. 具有丰富的理论知识 C. 具有冒险精神 D. 领导艺术<br>
<strong>答案：A</strong></li>
<li>以下哪种语言方式不会破坏医患之间的关系（ ）<br>
A. 模糊信息 B. 专业术语信息 C. 错误信息 D. 保护性信息 E. 欺骗信息<br>
<strong>答案：D</strong></li>
<li>以下哪位患者应该在医院急诊科得到最优先的治疗（ ）<br>
A. 雪天滑倒造成骨折的患者 B. 交通事故多发性创伤的患者<br>
C. 发热38℃的患者 D. 血压为170/110的高血压患者 E. 过敏性皮疹患者<br>
<strong>答案：B</strong></li>
<li>医院开展本科与专科临床教学的主要目标是（ ）<br>
A. 培养做医师从事医疗工作的基本技能<br>
B. 培养做医师从事医疗工作的基本知识<br>
C. 培养做医师从事医疗工作的基础理论<br>
D. 以上均有<br>
<strong>答案：D</strong></li>
<li>不属于业务管理机构的职能部门是（ ）<br>
A. 保卫处 B. 医务处 C. 护理部 D. 门诊部<br>
<strong>答案：A</strong></li>
<li>以下哪个医生工作方式只在医院住院服务出现，而不在门诊中出现（ ）<br>
A. 主治医师诊治病人 B. 三级医生等级管理制度<br>
C. 主任医师诊治病人 D. 一个医生接诊多个病员，多科医生会诊<br>
<strong>答案：B</strong></li>
<li>以下哪种信息来源不可以作为药品合理使用的依据（ ）<br>
A. 药典 B. 教科书 C. 循证医学研究结果 D. 个案文献报道 E. 药品说明书<br>
<strong>答案：D</strong></li>
<li>对医疗事故争议的处理，以下哪种途径是错误的（ ）<br>
A. 医患双方协商解决 B. 省、市医学会调解解决 C. 卫生行政部门调解处理 D. 向人民法院提起诉讼<br>
<strong>答案：B</strong></li>
<li>医院病床编设的效益与动态管理原则是（ ）<br>
A. 调整低效率病床 B. 不为无需求科室设立病床 C. 两者都是 D. 两者都不是<br>
<strong>答案：C</strong></li>
<li>关于病历书写及保管制度，以下错误的是（ ）<br>
A. 医疗机构应建立病历管理制度，设置专门部门或专(兼)职人员，具体负责病案的保管工作<br>
B. 患者住院期间，病历由所在病区负责集中统一保管<br>
C. 住院病历因复印、复制等需要带离病区时，可由病人家属在得到医师同意后带出，但须及时带回<br>
D. 禁止任何人涂改、伪造、销毁、抢夺、窃取病历<br>
<strong>答案：C</strong></li>
<li>医院的工作是以什么为中心（ ）<br>
A. 教育 B. 医疗 C. 科研 D. 社区卫生服务<br>
<strong>答案：B</strong></li>
<li>关于医院出入口设计，下列哪项描述是正确的（ ）<br>
A. 大型医院主要出入口的人、车辆流量都相当大，应尽量接近主干道<br>
B. 大型医院主要出入口的人、车辆流量都相当大，应尽量避开主干道<br>
C. 位置在城市十字路口附近，院区的出入口开口位置设置应尽可能接近城市交叉口<br>
D. 较大型的医院出入口越多越好<br>
<strong>答案：B</strong></li>
<li>住院诊疗管理中属于医疗业务管理的规章制度不包括以下哪项（ ）<br>
A. 会诊制度 B. 三级查房制度 C. 病例讨论制度 D. 主任查房制度 E. 总值班制度<br>
<strong>答案：E</strong></li>
<li>有关医疗纠纷的概念，其正确答案是（ ）<br>
A. 医护人员有医疗过失则有医疗纠纷 B. 医护人员无医疗过失可有医疗纠纷<br>
C. 医护人员无医疗过失则无医疗纠纷 D. 医护人员有医疗过失可无医疗纠纷<br>
<strong>答案：C</strong></li>
<li>单间分离适用于（ ）<br>
A. 晚期肿瘤病人 B. 肠道传染病病人 C. 呼吸道传染病病人 D. 烈性传染病病人 E. 烧伤病人<br>
<strong>答案：C</strong></li>
<li>以下哪项不是医患关系的基本特征（ ）<br>
A. 医生和患者分别处于主动和被动地位 B. 服务的提供与利用<br>
C. 以医务人员的职业行为为基础 D. 以密切的人身接触为手段 E. 以生命和健康的维护为纽带<br>
<strong>答案：A</strong></li>
<li>我国对从事医疗服务的医生进行准入管理的法律是（ ）<br>
A. 临床医师管理办法 B. 中华人民共和国执业医师法<br>
C. 执业医师考试制度 D. 人事管理制度 E. 护士管理办法<br>
<strong>答案：B</strong></li>
<li>下列不属于行政后勤部的机构为（ ）<br>
A. 消毒器材供应室 B. 保卫处 C. 医务处 D. 设备处<br>
<strong>答案：C</strong></li>
<li>下列不属于PDCA循环的是（ ）<br>
A. 计划 B. 实施 C. 协调 D. 处理<br>
<strong>答案：C</strong></li>
<li>诊疗组织机构就职能分类，可划分为（ ）<br>
A. 医疗诊疗组织和护理诊疗组织 B. 长期性医疗组织和临时性医疗组织<br>
C. 管理机构和业务科室 D. 专系、专病诊疗组织和医技科室<br>
<strong>答案：C</strong></li>
<li>以下哪项不是医院文化的视觉识别内容（ ）<br>
A. 院容院貌 B. 工作人员的胸牌 C. 门诊大厅张贴的标语 D. 医院建筑色调 E. 医院地理位置<br>
<strong>答案：E</strong></li>
<li>不属于医院整体管理的职能部门是（ ）<br>
A. 院长办公室 B. 医务处 C. 人事处 D. 科教处<br>
<strong>答案：B</strong></li>
<li>新药进入临床使用之前必须经过（ ）<br>
A. 药品使用登记 B. 药品临床试验 C. 药品进货登记 D. 药品抽样检验 E. 药品使用监测<br>
<strong>答案：B</strong></li>
<li>以下哪一项不是医院统计指标中的工作效率分析指标（ ）<br>
A. 同一疾病反复住院率 B. 床位周转次数 C. 手术前平均占用病床 D. 平均住院日<br>
<strong>答案：A</strong></li>
<li>医院后勤管理基本原则不包括（ ）<br>
A. 以病人为中心 B. 服务性原则 C. 效益原则 D. 依从性原则<br>
<strong>答案：B</strong></li>
<li>下列不属于领导艺术的内容的是（ ）<br>
A. 运筹帷幄 B. 推陈出新 C. 事必躬亲 D. 协力合作<br>
<strong>答案：C</strong></li>
<li>不属于专业性参谋职能部门的是（ ）<br>
A. 人事处 B. 医务处 C. 财务科 D. 设备科<br>
<strong>答案：B</strong></li>
<li>以下有关医院抗感染药物的使用原则，错误的是（ ）<br>
A. 严格掌握抗感染药物联合应用的指征，严格控制大处方<br>
B. 提倡预防应用药物，提前从源头上预防感染的发生<br>
C. 制定个体化的给药方案，密切观察病人有无菌群失调，及时调整药物<br>
D. 注意降低病人抗感染药物费用支出，为病人经济着想<br>
<strong>答案：B</strong></li>
<li>容易带来混乱的组织结构形式是（ ）<br>
A. 直线组织结构 B. 直线职能组织结构 C. 矩阵组织结构 D. 以上皆是<br>
<strong>答案：B</strong></li>
<li>下列哪项不属于医院的福利性质（ ）<br>
A. 政府给予医院财政补贴 B. 医疗活动中人、财、物的投入<br>
C. 政府免收医院税款 D. 医院获得的定额补助<br>
<strong>答案：B</strong></li>
<li>下列选项中不属于医院主要功能的是（ ）<br>
A. 医疗 B. 科学研究 C. 社区服务 D. 固定资产投资<br>
<strong>答案：D</strong></li>
<li>下列属于诊疗部门的是（ ）<br>
A. 临床护理 B. 科教科 C. 预防保健科 D. 设备科<br>
<strong>答案：C</strong></li>
<li>下列不属于医院工作的特点的是（ ）<br>
A. 重视医疗质量，关心病人安危 B. 医院要重视经济效益，保障职工的切身利益<br>
C. 一切工作要以医疗工作为中心，发扬救死扶伤的精神 D. 科学技术密集<br>
<strong>答案：B</strong></li>
<li>哪一种工作是面向社会的重要窗口，是医院接触病人时间最早、人数最多、范围最广的部门（ ）<br>
A. 门诊 B. 急诊 C. 住院病房 D. 财务科<br>
<strong>答案：A</strong></li>
<li>下面对ICU的描述正确的是（ ）<br>
A. 是加强脏器监护治疗 B. 不是针对病因治疗 C. 阻止序贯性脏器功能衰竭现象 D. 是针对重症外伤病人<br>
<strong>答案：A</strong></li>
<li>《医疗事故处理条例》中将医疗事故划分为（ ）<br>
A. 一级 B. 二级 C. 三级 D. 四级 E. 五级<br>
<strong>答案：D</strong></li>
<li>下列选项中不属于医院的发展趋势的是（ ）<br>
A. 医院管理职业化、信息化、系统化 B. 医院环境向家庭化、艺术化发展<br>
C. 分工精细与多种综合的新型医疗技术结构 D. 医院趋于医疗型，一切将以医疗工作为中心<br>
<strong>答案：D</strong></li>
<li>设计医院文化的理念时，最好选用以下哪种风格的文字（ ）<br>
A. 常用成语 B. 卫生行政部门提出的口号<br>
C. 医院员工自己提出的口号 D. 大众媒体提出的宣传口号 E. 其他行业成功使用的口号<br>
<strong>答案：C</strong></li>
<li>下面哪种医疗服务项目不属于细分市场服务项目（ ）<br>
A. 街道医院提供的社区卫生服务 B. 心血管病专科医院提供的先天性心脏病服务<br>
C. 综合医院提供的冠心病门诊服务 D. 康复医院提供的脑血管病后遗症治疗<br>
<strong>答案：C</strong></li>
<li>以下哪一项不是医院统计指标中的工作质量分析指标（ ）<br>
A. 病人入院到确诊的平均时间 B. 治愈率 C. 抢救危重病人成功率 D. 平均住院日<br>
<strong>答案：D</strong></li>
<li>医院临床科室划分中内科、外科的依据（ ）<br>
A. 治疗手段 B. 治疗费用 C. 病种 D. 器官系统 E. 以上皆不是<br>
<strong>答案：A</strong></li>
<li>对医疗事故争议的处理，下列说法错误的是（ ）<br>
A. 当事人可以任意选择解决医疗事故争议的三种途径<br>
B. 三种途径解决只是赔偿问题<br>
C. 赔偿都应按《医疗事故处理条例》规定标准，但医患双方协商解决赔偿数额一般较大<br>
D. 人民法院的判决，法律效力最强<br>
<strong>答案：C</strong></li>
<li>病案首页上出院诊断的主要诊断填写原则正确的选项是（ ）<br>
A. 他科疾病在前，本科疾病在后 B. 次要疾病在前，主要疾病在后<br>
C. 花费医疗时间多的在前，少的在后 D. 继发疾病在前，原发疾病在后<br>
<strong>答案：C</strong></li>
<li>计划诊疗内容的拟订一般是（ ）<br>
A. 住院医师 B. 主治医师 C. 主任医师 D. 科主任<br>
<strong>答案：A</strong></li>
<li>下列对医院建筑的描述，哪项不正确（ ）<br>
A. 医院建筑必须满足医院的基本功能需求，符合各项卫生标准<br>
B. 医院建筑尽可能园林化，营造一个良好的自然环境<br>
C. 医院建筑不应有壁画、油画等装饰及点缀，否则显得不够严肃、宁静<br>
D. 医院建筑应人性化，尽可能满足不同层次病人的生活需求<br>
<strong>答案：C</strong></li>
<li>以下哪项医疗服务的战略活动的设计不符合差异化战略（ ）<br>
A. 开设新的独一无二的心血管疾病治疗项目 B. 维护和发扬百年医院的声誉<br>
C. 建立面向所在社区居民的健康档案 D. 开设低收费的方便门诊 E. 建立家庭医生和私人医生服务制度<br>
<strong>答案：D</strong></li>
<li>医院的规章制度与工作制度属于（ ）<br>
A. 硬件设施 B. 软件设施 C. 两者都是 D. 两者均不<br>
<strong>答案：B</strong></li>
<li>矩阵组织是在（ ）的基础上再设立横向的机构系统<br>
A. 曲线参谋组织 B. 直线参谋组织 C. 抛物线参谋组织 D. 平行线参谋组织<br>
<strong>答案：B</strong></li>
<li>下列关于科学管理的叙述，正确的是（ ）<br>
A. 科学的工作程序，即PDCA循环，又称泰罗环，因科学管理之父泰罗开创而命名<br>
B. 全面质量管理是现代管理的一种模式，它是使用以质量反馈为主的现代管理方法综合应用的管理<br>
C. PDCA循环分为四阶段八个步骤，四个阶段分别是计划(Plan)、发现(Discover)、检查(Check)、处理(Action)<br>
D. PDCA循环第四阶段，处理(Action)的步骤为巩固成绩，提出尚未解决的问题，转入下一循环<br>
<strong>答案：D</strong></li>
<li>下列描述不完整的是（ ）<br>
A. 手术前平均占用病床日越短越好 B. 病人入院到确诊的平均时间越短越好<br>
C. 手术前后诊断符合率越高越好 D. 平均病床工作日越高越好<br>
<strong>答案：D</strong></li>
<li>质量管理发展过程中，属于事后检验的阶段为（ ）<br>
A. 质量检验阶段 B. 统计质量管理阶段 C. 全面质量管理阶段 D. 以上皆是 E. 以上皆不是<br>
<strong>答案：A</strong></li>
<li>下列不属于医院文化隐性内容的是（ ）<br>
A. 医院哲学 B. 规章制度 C. 道德规范 D. 医院精神<br>
<strong>答案：B</strong></li>
<li>根据医院建筑整体规划要求，在医院改造调整时下列哪项布局是符合医院建筑管理原则的（ ）<br>
A. 院门诊全面调整时，将妇产科门诊搬至一独立的医疗小区的二、三楼，一楼是传染科、肠道门诊<br>
B. 骨科诊室调整至三楼，儿科诊室调整至一楼<br>
C. 科室与门诊量少的科室在楼层的分布上无需多作考虑，只考虑有足够的面积就可以了<br>
D. 门诊划价、交费、取药应取最小流程<br>
<strong>答案：D</strong></li>
<li>根据重点患者管理制度，以下哪类患者最应该得到特别的照顾（ ）<br>
A. 26岁的急性阑尾炎患者 B. 50岁的胆结石手术患者 C. 80岁的发热患者 D. 45岁的产妇<br>
<strong>答案：C</strong></li>
<li>组织的根本原则是（ ）<br>
A. 专业化分工 B. 统一指挥 C. 职责与权限一致 D. 有效管理范围<br>
<strong>答案：C</strong></li>
<li>以下哪个门诊服务环节是门诊流程中应该得到改善的不合理逆流环节（ ）<br>
A. X线检查后病人再次到诊室让医生看阳性结果<br>
B. 血常规检查后病人再次到诊室让医生看阴性结果<br>
C. 划价员发现缺药，病人再次到诊室让医生更改处方<br>
D. 就诊后医生要求病人到挂号处改挂另一个科的号<br>
E. 病人到CT室预约时间再次来到医院<br>
<strong>答案：C</strong></li>
<li>住院医师应保证每天至少查房多少次（ ）<br>
A. 1次 B. 2次 C. 3次 D. 4次<br>
<strong>答案：B</strong></li>
<li>下面哪项服务项目属于按社会人口学特征细分的医疗服务机构或科室（ ）<br>
A. 临终关怀医院服务 B. 肿瘤医院 C. 男科疾病专科医院 D. 特需病房 E. 传染病医院<br>
<strong>答案：A</strong></li>
<li>下列哪一项不是责任制护理所提供的服务（ ）<br>
A. 功能性护理 B. 全面性护理 C. 协调性护理 D. 个体化护理<br>
<strong>答案：A</strong></li>
<li>下面哪一个不是医院消毒灭菌的原则（ ）<br>
A. 使用合格的器材与药剂 B. 选择适宜的方法<br>
C. 保证消毒灭菌的剂量 D. 医院各场所达到灭菌标准 E. 加强效果的检测<br>
<strong>答案：D</strong></li>
<li>三级查房是指（ ）<br>
A. 主任医师、主治医师、住院医师三级查房<br>
B. 医师、护理、行政三级查房<br>
C. 科主任、临床医师、护理人员三级查房<br>
D. 准备、查房、讨论三个阶段<br>
<strong>答案：A</strong></li>
<li>是谁开创了消毒灭菌管理制度（ ）<br>
A. 南丁格尔 B. 弗来明 C. 李斯特 D. 巴斯德 E. 塞麦尔韦斯<br>
<strong>答案：C</strong></li>
<li>以下哪项不是医院文化的表达方式（ ）<br>
A. 医院诊疗科目 B. 医院规章制度 C. 医务人员的着装 D. 工作人员的语言 E. 医院的院训<br>
<strong>答案：A</strong></li>
<li>医院领导必须具备的首要素质是（ ）<br>
A. 品德素质 B. 政治素质 C. 才能素质 D. 知识素质<br>
<strong>答案：B</strong></li>
<li>临床信息系统的核心是（ ）<br>
A. 电子病历 B. 医生工作站 C. 护士工作站 D. 影像传输系统<br>
<strong>答案：A</strong></li>
<li>下列不属于医院文化显性内容的是（ ）<br>
A. 医院环境 B. 文化仪式 C. 价值观念 D. 文化网络<br>
<strong>答案：C</strong></li>
<li>以下哪项活动是门诊流程中的核心环节（ ）<br>
A. 挂号 B. 划价 C. 取药 D. 就诊 E. 实验室检查<br>
<strong>答案：D</strong></li>
<li>直线组织的优点不包括（ ）<br>
A. 机构简单 B. 责任与权限明确 C. 指挥统一 D. 适用范围较广<br>
<strong>答案：D</strong></li>
<li>通常情况下，医院病床编制不能反映（ ）<br>
A. 医院规模的大小 B. 收治病人能力的大小 C. 医院业务水平高低 D. 三者皆是<br>
<strong>答案：C</strong></li>
<li>我国医院护理管理体制为（ ）<br>
A. 护理部主任--科护士长--护士长<br>
B. 护理部主任--总护士长--护士长<br>
C. 总护士长--护士长<br>
D. 护理部主任-护士长<br>
<strong>答案：B</strong></li>
<li>医院的性质是（ ）<br>
A. 具有一定公益性的福利性事业单位 B. 福利性事业单位<br>
C. 具有一定福利性的公益性事业单位 D. 公益性事业单位<br>
<strong>答案：C</strong></li>
<li>医院管理总体系中，影响整个医院管理水平的中心环节是（ ）<br>
A. 人员管理 B. 组织管理 C. 质量管理 D. 医疗管理<br>
<strong>答案：D</strong></li>
<li>为发挥最佳指挥效能，诊疗组织结构宜设置为（ ）<br>
A. 一层 B. 二层 C. 三层 D. 四层<br>
<strong>答案：B</strong></li>
<li>根据《综合医院组织编制原则试行草案》规定，医院病床数与门诊、急诊人次（日）的比例为（ ）<br>
A. 1:3 B. 1:4 C. 1:5 D. 1:6<br>
<strong>答案：A</strong></li>
<li>为保证病人能就近获得迅速有效的救治，应实行（ ）<br>
A. 院前急救 B. 院内急救 C. 区域急救 D. 现场急救<br>
<strong>答案：C</strong></li>
<li>医疗机构住院病历的保存期不得少于（ ）<br>
A. 5年 B. 10年 C. 15年 D. 20年 E. 30年<br>
<strong>答案：E</strong></li>
<li>评价医院信息系统的首要标准是（ ）<br>
A. 可持续发展 B. 安全性 C. 实用性 D. 先进性<br>
<strong>答案：B</strong></li>
<li>电子病历是以什么为中心的信息集成与相关服务（ ）<br>
A. 医师工作站 B. 医疗信息系统 C. 病人 D. 以上都是<br>
<strong>答案：C</strong></li>
<li>反映医院床位周转速度快慢的指标是（ ）<br>
A. 床位周转间隔 B. 术前平均占用病床日 C. 床位周转次数实际 D. 平均占用病床日<br>
<strong>答案：C</strong></li>
<li>以下表示电子病历的英文缩写是（ ）<br>
A. EPR B. CPE C. HIS D. EMR<br>
<strong>答案：D</strong></li>
<li>医院门诊噪声不能高于（ ）<br>
A. 65分贝 B. 55分贝 C. 45分贝 D. 35分贝<br>
<strong>答案：C</strong></li>
<li>医院建筑总平面布置规划的依据，不正确的是（ ）<br>
A. 医院出入口 B. 各部门的功能联系 C. 当地气候条件(主导风向) D. 医院周围的交通环境<br>
<strong>答案：D</strong></li>
<li>下列不属于门诊教育的形式是（ ）<br>
A. 随诊教育 B. 咨询 C. 专题讲座 D. 随访教育 E. 候诊教育<br>
<strong>答案：D</strong></li>
<li>医院制定业务层战略和职能战略的依据是（ ）<br>
A. 竞争战略 B. 组织目标 C. 医院层战略 D. 组织内部资源<br>
<strong>答案：C</strong></li>
<li>衡量医疗服务质量的四项核心要求是（ ）<br>
A. 安全性、有效性、效益性、舒适性<br>
B. 有效性、便捷性、舒适性、价廉性<br>
C. 便捷性、安全性、效益性、价廉性<br>
D. 安全性、有效性、价廉性、便捷性<br>
<strong>答案：D</strong></li>
<li>未住院率的计算公式是（ ）<br>
A. 需住院而未住院患者数/调查人数×100%<br>
B. 需住院而未住院患者数/调查患者人数×100%<br>
C. 需住院而未住院患者数/需住院患者数×100%<br>
D. 需住院而未住院患者数/需就诊患者数×100%<br>
<strong>答案：C</strong></li>
<li>以下哪种不是医疗过失行为在医疗事故中的责任程度（ ）<br>
A. 完全责任 B. 不负责任 C. 次要责任 D. 轻微责任<br>
<strong>答案：B</strong></li>
<li>对于门诊服务质量和门诊医疗质量都会产生重要影响的是（ ）<br>
A. 门诊收费结账 B. 门诊药房工作 C. 门诊放射工作 D. 门诊护理工作<br>
<strong>答案：D</strong></li>
<li>科研计划与成果管理制度不包括（ ）<br>
A. 立项论证制度 B. 筛选制度 C. 定期检查制度 D. 科技成果管理制度<br>
<strong>答案：B</strong></li>
<li>下列哪项不属于医院绩效评价的功能（ ）<br>
A. 主导功能 B. 考核和引导功能 C. 挖掘潜力功能 D. 信息反馈功能<br>
<strong>答案：A</strong></li>
<li>医院科研课题按科研活动分类不包括（ ）<br>
A. 自由选题 B. 基础研究 C. 应用研究 D. 发展研究<br>
<strong>答案：A</strong></li>
<li>以下哪项不是医疗事故等级判定的依据（ ）<br>
A. 器官形态、缺损或畸形 B. 器官功能和代偿状况 C. 心理的伤害程度 D. 生活是否自理<br>
<strong>答案：C</strong></li>
<li>医院人员编制的比例定员法适用于制定哪一类人员的编制（ ）<br>
A. 医院各级、各类人员 B. 医院卫生技术人员、工程技术人员、工勤人员<br>
C. 住院部医疗技术人员 D. 适用于医疗技术科室的操作人员<br>
<strong>答案：A</strong></li>
<li>较大型的医院最好设有几个出入口（ ）<br>
A. 4 B. 3 C. 2 D. 1<br>
<strong>答案：B</strong></li>
<li>病房教育中，与病人共同拟定行为目标的应该是（ ）<br>
A. 护理员 B. 护士 C. 医生 D. 护理师 E. 护士长<br>
<strong>答案：C</strong></li>
<li>以下哪一项不是病案技术管理系统中一级的任务（ ）<br>
A. 挂号 B. 编号 C. 供应借阅 D. 索引<br>
<strong>答案：C</strong></li>
<li>进行质量控制，首先应该掌握（ ）<br>
A. 成本收益分析法 B. 供应链管理方法 C. 全面质量管理方法 D. 预算控制<br>
<strong>答案：C</strong></li>
<li>医疗事故的鉴定机构是（ ）<br>
A. 卫生行政部门 B. 法学会 C. 医学会 D. 法院<br>
<strong>答案：C</strong></li>
<li>下列情形属于医疗事故的是（ ）<br>
A. 手术开错部位造成较大创伤<br>
B. 诊疗护理中违反了规章制度，尚未给病员造成不良影响和损害<br>
C. 因体质特殊发生难以预料的后果<br>
D. 由于一种疾病合并发生另一种疾病<br>
<strong>答案：A</strong></li>
<li>关于医院感染病例监测，以下正确的选项是（ ）<br>
A. 医院每年应开展医院感染的漏报调查，调查样本量应不少于年监测病人数的15%<br>
B. 医院感染的漏报率应低于20%<br>
C. 100~500张病床的医院，医院感染发病率应低于7%<br>
D. 100~500张病床的医院，一类切口手术部位感染率应低于1%<br>
<strong>答案：B</strong></li>
<li>不得申请设置医疗机构的条件不包括（ ）<br>
A. 不具有完全民事行为能力的个人 B. 医疗机构停薪留职的医务人员<br>
C. 受到卫生行政处罚人员 D. 近期发生过二级以上医疗事故的人员<br>
<strong>答案：C</strong></li>
<li>某医院某日门诊病人数1000人，其中内科病人400人，求得40%，这40%是（ ）<br>
A. 率 B. 构成比 C. 相对比 D. 绝对数 E. 标化率<br>
<strong>答案：B</strong></li>
<li>医院质量管理体系分为三级，以下哪项是不正确的（ ）<br>
A. 院级质量管理 B. 医务部(处)级质量管理 C. 科室管理 D. 医务人员个人管理<br>
<strong>答案：B</strong></li>
<li>按照医学装备分类方法，下列不属于治疗设备类的是（ ）<br>
A. 手术治疗设备 B. 核医学治疗设备 C. 病室护理设备 D. 中心供氧系统<br>
<strong>答案：D</strong></li>
<li>以下哪个方面是医院门诊与住院服务的区别（ ）<br>
A. 整洁的环境 B. 心理疏导和治疗 C. 整洁的卫生间 D. 送餐服务 E. 病历书写<br>
<strong>答案：D</strong></li>
<li>医疗事故的构成要件中不包括（ ）<br>
A. 客观损害 B. 主观损害 C. 一过性损害 D. 轻微损害<br>
<strong>答案：B</strong></li>
<li>以下不属于医院感染监测之列的是（ ）<br>
A. 医院感染病例监测 B. 消毒灭菌效果监测 C. 抗生素合理使用监测 D. 环境卫生学监测<br>
<strong>答案：C</strong></li>
<li>以下属于病案管理工作中的差错的为（ ）<br>
A. 处理病案资料内容张冠李戴 B. 病案找错或送错科室 C. 写错或计算机录错病案号 D. 建重号病案<br>
<strong>答案：A</strong></li>
<li>下列关于医院感染的叙述，正确的是（ ）<br>
A. 住院病人在入院前已开始或入院时已处于潜伏期的感染也属于医院感染<br>
B. 住院病人在医院内获得而出院后发生的感染不属于医院感染<br>
C. 在医院内因各种原因感染艾滋病也属医院感染<br>
D. 医院工作人员在医院内获得的感染也属医院感染<br>
<strong>答案：D</strong></li>
<li>医院院区的出入口位置应与城市道路交叉口保持的最佳距离是（ ）<br>
A. 大于40米 B. 大于50米 C. 大于60米 D. 大于70米<br>
<strong>答案：D</strong></li>
<li>门诊综合楼设计的关键在于（ ）<br>
A. 合理的功能分区、良好的流线组织、优美的空间环境<br>
B. 合理的功能分区、良好的流线组织、方便的导医询问<br>
C. 合理的功能分区、平面化的就医环境、方便的导医询问<br>
D. 良好的流线组织、平面化的就医环境、优美的空间环境<br>
<strong>答案：A</strong></li>
</ol>`,readingTime:{minutes:25.8,words:7740},title:"医院管理学",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/javaweb.html",{loader:()=>He(()=>import("./javaweb.html-C_bDOIBK.js"),[]),meta:{author:"superxuan",date:1767355436e3,category:["java web"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h2>java web大题</h2>
<h3>1. JSP引擎是怎么处理JSP页面中的HTML标记的？</h3>
<ul>
<li>JSP引擎将JSP页面中的HTML标记直接交给客户端浏览器执行显示。</li>
</ul>
<h3>2. JSP页面由哪几种主要元素组成？</h3>
<ul>
<li>一个JSP页面通常由4种基本元素组成：<br>
(1）普通的HTML标记。<br>
(2） JSP 注释。<br>
(3）Java脚本元素，包括声明、Java程序片和Java表达式。<br>
(4）JSP标记，如指令标记、动作标记和自定义标记等。</li>
</ul>
<h3>3. "&lt;%!"和"%&gt;"之间声明的变量和"&lt;%"和"%&gt;之间声明的变量有什么不同？</h3>`,readingTime:{minutes:9.86,words:2959},title:"JavaWeb 学习笔记",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/linux.html",{loader:()=>He(()=>import("./linux.html-C2yGM9Lp.js"),[]),meta:{author:"superxuan",date:17665344e5,category:["linux"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<p>以下是修改后的<strong>实验三</strong>详细实现步骤，以及实验一、二、四的原有内容（保持不变），所有命令均基于<strong>Bash环境</strong>和<strong>Vim编辑器</strong>编写，确保操作可复现。</p>
<hr>
<h1>实验一：Linux基础文件操作（无修改，保留原内容）</h1>
<h3>（1）显示当前用户所在位置</h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#2e3440ff;color:#d8dee9ff"><pre class="shiki nord vp-code"><code class="language-bash"><span class="line"><span style="color:#88C0D0">pwd</span><span style="color:#616E88">  # 打印当前工作目录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:7.75,words:2325},title:"linux基础文件操作",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/signal.html",{loader:()=>He(()=>import("./signal.html-2Hkcuz-Y.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["信号与系统"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`
<h2>第一章 信号与系统</h2>
<h3>一、信号相关概念</h3>
<ol>
<li><strong>基本定义</strong>
<ul>
<li><strong>消息</strong>：来自外界的各种报道。</li>
<li><strong>信息</strong>：消息中有意义的内容，课程中与“消息”不加严格区分。</li>
<li><strong>信号</strong>：信息的载体，可分为电信号与非电信号，本课程主要讨论电信号，常用时间函数或波形描述。</li>
</ul>
</li>
<li><strong>信号分类</strong>
<ul>
<li><strong>按确定性划分</strong>：
<ul>
<li><strong>确定信号</strong>：可用确定时间函数表示，如正弦信号。</li>
<li><strong>随机信号</strong>：取值具有不确定性，如电子系统中的起伏热噪声；<strong>伪随机信号</strong>：貌似随机却遵循严格规律，如伪随机码。</li>
</ul>
</li>
<li><strong>按时间连续性划分</strong>：
<ul>
<li><strong>连续时间信号</strong>：在连续时间范围内，任意时间值都有对应函数值，定义域连续，值域可连续或含间断点。</li>
<li><strong>离散时间信号</strong>：仅在离散瞬间有定义，定义域离散，离散点间隔可等可不等，等间隔时称为序列，记为<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(kT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>为间隔），简写为<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(k)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span></span>。</li>
<li><strong>模拟信号</strong>：时间和幅值均连续的信号；<strong>抽样信号</strong>：时间离散、幅值连续的信号；<strong>数字信号</strong>：时间和幅值均离散的信号。</li>
</ul>
</li>
<li><strong>按周期性划分</strong>：
<ul>
<li><strong>连续周期信号</strong>：满足<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo>+</mo><mi>m</mi><mi>T</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t) = f(t + mT)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>=</mo><mn>0</mn><mo separator="true">,</mo><mo>±</mo><mn>1</mn><mo separator="true">,</mo><mo>±</mo><mn>2</mn><mo separator="true">,</mo><mo>…</mo></mrow><annotation encoding="application/x-tex">m = 0,\\pm1,\\pm2,\\dots</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">±</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">±</span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span></span></span></span>），<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi></mrow><annotation encoding="application/x-tex">T</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span></span></span></span>为周期，如<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>sin</mi><mo>⁡</mo><mn>2</mn><mi>t</mi></mrow><annotation encoding="application/x-tex">\\sin2t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6679em;"></span><span class="mop">sin</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">2</span><span class="mord mathnormal">t</span></span></span></span>。两连续周期信号之和为周期信号的充要条件是周期比为有理数。</li>
<li><strong>离散周期信号</strong>：满足<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><mo>=</mo><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo>+</mo><mi>m</mi><mi>N</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(k) = f(k + mN)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">m</span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>m</mi><mo>=</mo><mn>0</mn><mo separator="true">,</mo><mo>±</mo><mn>1</mn><mo separator="true">,</mo><mo>±</mo><mn>2</mn><mo separator="true">,</mo><mo>…</mo></mrow><annotation encoding="application/x-tex">m = 0,\\pm1,\\pm2,\\dots</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">m</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8389em;vertical-align:-0.1944em;"></span><span class="mord">0</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">±</span><span class="mord">1</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">±</span><span class="mord">2</span><span class="mpunct">,</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="minner">…</span></span></span></span>），<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>为周期。正弦序列<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>sin</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>β</mi><mi>k</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\sin(\\beta k)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span></span>为周期序列的条件是<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>2</mn><mi>π</mi><mi mathvariant="normal">/</mi><mi>β</mi></mrow><annotation encoding="application/x-tex">2\\pi/\\beta</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span></span></span></span>为有理数，周期为使<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi><mo>=</mo><mi>M</mi><mo stretchy="false">(</mo><mn>2</mn><mi>π</mi><mi mathvariant="normal">/</mi><mi>β</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">N = M(2\\pi/\\beta)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span><span class="mopen">(</span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.05278em;">β</span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>M</mi></mrow><annotation encoding="application/x-tex">M</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">M</span></span></span></span>为整数）的最小<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>N</mi></mrow><annotation encoding="application/x-tex">N</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.10903em;">N</span></span></span></span>。</li>
</ul>
</li>
<li><strong>按能量功率划分</strong>：
<ul>
<li><strong>能量信号</strong>：能量<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>&lt;</mo><mi mathvariant="normal">∞</mi></mrow><annotation encoding="application/x-tex">E&lt;\\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord">∞</span></span></span></span>、功率<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">P = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>，如时限非周期信号。连续信号能量<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mi mathvariant="normal">∣</mi><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">E=\\int_{-\\infty}^{\\infty}|f(t)|^2dt</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2734em;vertical-align:-0.4142em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8593em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4142em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span></span></span></span>，离散信号能量<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mi mathvariant="normal">∣</mi><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">E=\\sum_{k=-\\infty}^{\\infty}|f(k)|^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.1721em;vertical-align:-0.358em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8043em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.358em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>。</li>
<li><strong>功率信号</strong>：功率<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo>&lt;</mo><mi mathvariant="normal">∞</mi></mrow><annotation encoding="application/x-tex">P&lt;\\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7224em;vertical-align:-0.0391em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord">∞</span></span></span></span>、能量<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>E</mi><mo>=</mo><mi mathvariant="normal">∞</mi></mrow><annotation encoding="application/x-tex">E=\\infty</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">E</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord">∞</span></span></span></span>，如周期信号。连续信号功率<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>T</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></msub><mfrac><mn>1</mn><mrow><mn>2</mn><mi>T</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mo>−</mo><mi>T</mi></mrow><mi>T</mi></msubsup><mi mathvariant="normal">∣</mi><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi></mrow><annotation encoding="application/x-tex">P=\\lim_{T\\rightarrow\\infty}\\frac{1}{2T}\\int_{-T}^{T}|f(t)|^2dt</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.4504em;vertical-align:-0.4142em;"></span><span class="mop"><span class="mop">lim</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0362em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.13889em;">T</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4142em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span></span></span></span>，离散信号功率<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi>N</mi><mo>→</mo><mi mathvariant="normal">∞</mi></mrow></msub><mfrac><mn>1</mn><mrow><mn>2</mn><mi>N</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mo>−</mo><mi>N</mi></mrow><mi>N</mi></msubsup><mi mathvariant="normal">∣</mi><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><msup><mi mathvariant="normal">∣</mi><mn>2</mn></msup></mrow><annotation encoding="application/x-tex">P=\\lim_{N\\rightarrow\\infty}\\frac{1}{2N + 1}\\sum_{k=-N}^{N}|f(k)|^2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">P</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.3846em;vertical-align:-0.4033em;"></span><span class="mop"><span class="mop">lim</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span><span class="mrel mtight">→</span><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop"><span class="mop op-symbol small-op" style="position:relative;top:0em;">∑</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9812em;"><span style="top:-2.4003em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03148em;">k</span><span class="mrel mtight">=</span><span class="mord mtight">−</span><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span><span style="top:-3.2029em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10903em;">N</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.358em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord">∣</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mord"><span class="mord">∣</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8141em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span></span></span></span></span></span></span></span>。</li>
<li><strong>非能量非功率信号</strong>：如<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mi>ε</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">t\\varepsilon(t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">tε</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>、<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mi>t</mi></msup></mrow><annotation encoding="application/x-tex">e^t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7936em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span></span></span>。</li>
</ul>
</li>
<li><strong>其他分类</strong>：
<ul>
<li><strong>一维/多维信号</strong>：一维信号仅含一个自变量（如语音信号），多维信号含多个自变量（如图像信号）。</li>
<li><strong>实/复信号</strong>：实信号取值为实数，复信号取值为复数（如<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>e</mi><mrow><mi>j</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow><annotation encoding="application/x-tex">e^{j\\omega t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8247em;"></span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.8247em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">jω</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span></span></span></span>）。</li>
<li><strong>因果/反因果信号</strong>：因果信号<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">t&lt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时为0（如<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ε</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\varepsilon(t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">ε</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>），反因果信号<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">t&gt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6542em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时为0。</li>
</ul>
</li>
</ul>
</li>
<li><strong>典型确定性信号</strong>
<ul>
<li><strong>指数信号</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>K</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow><annotation encoding="application/x-tex">f(t)=Ke^{at}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7936em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span></span></span></span>，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi></mrow><annotation encoding="application/x-tex">a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span></span></span></span>为实常数。<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">a&lt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时指数衰减，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">a = 0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时为直流信号，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">a&gt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时指数增长。单边指数信号<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>K</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi>ε</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)=Ke^{at}\\varepsilon(t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0436em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span><span class="mord mathnormal">ε</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>，时间常数<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>τ</mi><mo>=</mo><mo>−</mo><mn>1</mn><mi mathvariant="normal">/</mi><mi>a</mi></mrow><annotation encoding="application/x-tex">\\tau=-1/a</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">−</span><span class="mord">1/</span><span class="mord mathnormal">a</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">a&lt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>时），反映衰减速度。</li>
<li><strong>正弦信号</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>K</mi><mi>sin</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)=K\\sin(\\omega t+\\varphi)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mclose">)</span></span></span></span>，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>K</mi></mrow><annotation encoding="application/x-tex">K</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span></span></span></span>为振幅，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi></mrow><annotation encoding="application/x-tex">\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>为角频率（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>f</mi></mrow><annotation encoding="application/x-tex">\\omega = 2\\pi f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi></mrow><annotation encoding="application/x-tex">f</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8889em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span></span></span></span>为频率），<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>φ</mi></mrow><annotation encoding="application/x-tex">\\varphi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.625em;vertical-align:-0.1944em;"></span><span class="mord mathnormal">φ</span></span></span></span>为初相，周期<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi mathvariant="normal">/</mi><mi>ω</mi></mrow><annotation encoding="application/x-tex">T = 2\\pi/\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6833em;"></span><span class="mord mathnormal" style="margin-right:0.13889em;">T</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord">2</span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span><span class="mord">/</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span></span></span></span>。衰减正弦信号<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>K</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi>sin</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy="false">)</mo><mi>ε</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)=Ke^{at}\\sin(\\omega t+\\varphi)\\varepsilon(t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.0436em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">a</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">φ</span><span class="mclose">)</span><span class="mord mathnormal">ε</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">a&lt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>）。</li>
<li><strong>复指数信号</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mi>K</mi><msup><mi>e</mi><mrow><mi>s</mi><mi>t</mi></mrow></msup></mrow><annotation encoding="application/x-tex">f(t)=Ke^{st}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.7936em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">s</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>s</mi><mo>=</mo><mi>σ</mi><mo>+</mo><mi>j</mi><mi>ω</mi></mrow><annotation encoding="application/x-tex">s=\\sigma + j\\omega</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">s</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6667em;vertical-align:-0.0833em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">σ</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.854em;vertical-align:-0.1944em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">jω</span></span></span></span>为复频率），可分解为<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>K</mi><msup><mi>e</mi><mrow><mi>σ</mi><mi>t</mi></mrow></msup><mi>cos</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>ω</mi><mi>t</mi><mo stretchy="false">)</mo><mo>+</mo><mi>j</mi><mi>K</mi><msup><mi>e</mi><mrow><mi>σ</mi><mi>t</mi></mrow></msup><mi>sin</mi><mo>⁡</mo><mo stretchy="false">(</mo><mi>ω</mi><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">K e^{\\sigma t}\\cos(\\omega t)+jK e^{\\sigma t}\\sin(\\omega t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0436em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">σ</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">cos</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1.0436em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05724em;">j</span><span class="mord mathnormal" style="margin-right:0.07153em;">K</span><span class="mord"><span class="mord mathnormal">e</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7936em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.03588em;">σ</span><span class="mord mathnormal mtight">t</span></span></span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mop">sin</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03588em;">ω</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>，便于信号分析运算。</li>
<li><strong>抽样信号</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mi>a</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><mfrac><mrow><mi>sin</mi><mo>⁡</mo><mi>t</mi></mrow><mi>t</mi></mfrac></mrow><annotation encoding="application/x-tex">Sa(t)=\\frac{\\sin t}{t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">a</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.2065em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8615em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mop mtight"><span class="mtight">s</span><span class="mtight">i</span><span class="mtight">n</span></span><span class="mspace mtight" style="margin-right:0.1952em;"></span><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>，性质包括<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mi>a</mi><mo stretchy="false">(</mo><mn>0</mn><mo stretchy="false">)</mo><mo>=</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">Sa(0)=1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">a</span><span class="mopen">(</span><span class="mord">0</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>、<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>S</mi><mi>a</mi><mo stretchy="false">(</mo><mo>±</mo><mi>n</mi><mi>π</mi><mo stretchy="false">)</mo><mo>=</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">Sa(\\pm n\\pi)=0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">a</span><span class="mopen">(</span><span class="mord">±</span><span class="mord mathnormal" style="margin-right:0.03588em;">nπ</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>为整数）、<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi mathvariant="normal">∞</mi></msubsup><mi>S</mi><mi>a</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><mi>π</mi></mrow><annotation encoding="application/x-tex">\\int_{-\\infty}^{\\infty}Sa(t)dt=\\pi</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.2734em;vertical-align:-0.4142em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8593em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">∞</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4142em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.05764em;">S</span><span class="mord mathnormal">a</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.03588em;">π</span></span></span></span>等。</li>
</ul>
</li>
<li><strong>信号基本运算</strong>
<ul>
<li><strong>加减与相乘</strong>：同一时刻信号值对应运算，如<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>+</mo><msub><mi>f</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)=f_1(t)+f_2(t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>、<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><msub><mi>f</mi><mn>2</mn></msub><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(k)=f_1(k)f_2(k)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">1</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.1076em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">2</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span></span>。</li>
<li><strong>时间变换</strong>：
<ul>
<li><strong>反转</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>→</mo><mi>f</mi><mo stretchy="false">(</mo><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)\\rightarrow f(-t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">−</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>、<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>f</mi><mo stretchy="false">(</mo><mo>−</mo><mi>k</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(k)\\rightarrow f(-k)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">−</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span></span></span></span>，图形以纵轴反转180°。</li>
<li><strong>平移</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>→</mo><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)\\rightarrow f(t - t_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">t_0&gt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7651em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>右移，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">t_0&lt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.7651em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">t</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>左移）、<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo stretchy="false">)</mo><mo>→</mo><mi>f</mi><mo stretchy="false">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(k)\\rightarrow f(k - k_0)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0315em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">k_0&gt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0315em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>右移，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>&lt;</mo><mn>0</mn></mrow><annotation encoding="application/x-tex">k_0&lt;0</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.8444em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.03148em;">k</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3011em;"><span style="top:-2.55em;margin-left:-0.0315em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight">0</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">0</span></span></span></span>左移）。</li>
<li><strong>尺度变换</strong>：<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>→</mo><mi>f</mi><mo stretchy="false">(</mo><mi>a</mi><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(t)\\rightarrow f(at)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>（<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>a</mi><mo>&gt;</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">a&gt;1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&gt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>压缩，<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mn>0</mn><mo>&lt;</mo><mi>a</mi><mo>&lt;</mo><mn>1</mn></mrow><annotation encoding="application/x-tex">0&lt;a&lt;1</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6835em;vertical-align:-0.0391em;"></span><span class="mord">0</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.5782em;vertical-align:-0.0391em;"></span><span class="mord mathnormal">a</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">&lt;</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">1</span></span></span></span>扩展），离散信号因易丢失信息，一般不做尺度变换。</li>
<li><strong>混合运算</strong>：需注意变换相对<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi></mrow><annotation encoding="application/x-tex">t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span></span></span></span>（或<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>k</mi></mrow><annotation encoding="application/x-tex">k</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6944em;"></span><span class="mord mathnormal" style="margin-right:0.03148em;">k</span></span></span></span>）进行，正向运算先平移后反转/展缩，逆运算反之，如<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>f</mi><mo stretchy="false">(</mo><mn>2</mn><mo>−</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">f(2 - t)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord">2</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">−</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal">t</span><span class="mclose">)</span></span></span></span>可先<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>→</mo><mi>t</mi><mo>+</mo><mn>2</mn></mrow><annotation encoding="application/x-tex">t\\rightarrow t + 2</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6984em;vertical-align:-0.0833em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:0.6444em;"></span><span class="mord">2</span></span></span></span>左移，再<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>t</mi><mo>→</mo><mo>−</mo><mi>t</mi></mrow><annotation encoding="application/x-tex">t\\rightarrow -t</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.6151em;"></span><span class="mord mathnormal">t</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">→</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:0.6984em;vertical-align:-0.0833em;"></span><span class="mord">−</span><span class="mord mathnormal">t</span></span></span></span>反转。</li>
</ul>
</li>
<li><strong>微分与积分</strong>：连续信号微分<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msup><mi>f</mi><mo mathvariant="normal" lspace="0em" rspace="0em">′</mo></msup><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo><mo>=</mo><msub><mrow><mi>lim</mi><mo>⁡</mo></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi><mo>→</mo><mn>0</mn></mrow></msub><mfrac><mrow><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo>+</mo><mi mathvariant="normal">Δ</mi><mi>t</mi><mo stretchy="false">)</mo><mo>−</mo><mi>f</mi><mo stretchy="false">(</mo><mi>t</mi><mo stretchy="false">)</mo></mrow><mrow><mi mathvariant="normal">Δ</mi><mi>t</mi></mrow></mfrac></mrow><annotation encoding="application/x-tex">f'(t)=\\lim_{\\Delta t\\rightarrow0}\\frac{f(t+\\Delta t)-f(t)}{\\Delta t}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.0019em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="height:0.7519em;"><span style="top:-3.063em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">′</span></span></span></span></span></span></span></span></span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1.355em;vertical-align:-0.345em;"></span><span class="mop"><span class="mop">lim</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.3283em;"><span style="top:-2.55em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">Δ</span><span class="mord mathnormal mtight">t</span><span class="mrel mtight">→</span><span class="mord mtight">0</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.01em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">Δ</span><span class="mord mathnormal mtight">t</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.485em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">t</span><span class="mbin mtight">+</span><span class="mord mtight">Δ</span><span class="mord mathnormal mtight">t</span><span class="mclose mtight">)</span><span class="mbin mtight">−</span><span class="mord mathnormal mtight" style="margin-right:0.10764em;">f</span><span class="mopen mtight">(</span><span class="mord mathnormal mtight">t</span><span class="mclose mtight">)</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>，积分<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msubsup><mo>∫</mo><mrow><mo>−</mo><mi mathvariant="normal">∞</mi></mrow><mi>t</mi></msubsup><mi>f</mi><mo stretchy="false">(</mo><mi>τ</mi><mo stretchy="false">)</mo><mi>d</mi><mi>τ</mi></mrow><annotation encoding="application/x-tex">\\int_{-\\infty}^{t}f(\\tau)d\\tau</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4026em;vertical-align:-0.4142em;"></span><span class="mop"><span class="mop op-symbol small-op" style="margin-right:0.19445em;position:relative;top:-0.0006em;">∫</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.9885em;"><span style="top:-2.3442em;margin-left:-0.1945em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">−</span><span class="mord mtight">∞</span></span></span></span><span style="top:-3.2579em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">t</span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4142em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.1667em;"></span><span class="mord mathnormal" style="margin-right:0.10764em;">f</span><span class="mopen">(</span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span><span class="mclose">)</span><span class="mord mathnormal">d</span><span class="mord mathnormal" style="margin-right:0.1132em;">τ</span></span></span></span>；离散信号差分（类似微分）、求和（类似积分）。</li>
</ul>
</li>
</ol>`,readingTime:{minutes:31.37,words:9412},title:"信号与线性系统",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/web.html",{loader:()=>He(()=>import("./web.html-Alh6K6uh.js"),[]),meta:{author:"superxuan",date:17663616e5,category:["网络"],sticky:!0,cover:"/assets/images/cover2.jpg",excerpt:`
<h3>1. 路由器配置模式及切换</h3>
<ul>
<li><strong>用户模式</strong>：提示符<code>&gt;</code>，基础查看权限</li>
<li><strong>特权模式</strong>：输入<code>enable</code>从用户模式进入，提示符<code>#</code>，可查看设备完整配置</li>
<li><strong>全局配置模式</strong>：特权模式输入<code>configure terminal</code>进入，提示符<code>(config)#</code>，可进行全局参数配置</li>
</ul>
<h3>2. show命令</h3>`,readingTime:{minutes:5.86,words:1758},title:"网络路由与交换技术",icon:"pen-to-square",type:"article"}}],["/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stack.html",{loader:()=>He(()=>import("./stack.html-BUIyBfYc.js"),[]),meta:{date:1766448e6,category:["数据结构"],tag:["栈","算法"],excerpt:`<p>在408计算机学科专业基础综合考试中，栈的考点主要包括基本概念、存储结构、基本操作、应用等方面，以下是详细介绍：</p>
<ul>
<li><strong>基本概念</strong>
<ul>
<li><strong>定义</strong>：栈是一种特殊的线性表，只允许在表的一端进行插入和删除操作，这一端被称为栈顶，另一端称为栈底。栈遵循“后进先出”（Last In, First Out, LIFO）的原则。</li>
<li><strong>相关特性</strong>：当<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>n</mi></mrow><annotation encoding="application/x-tex">n</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal">n</span></span></span></span>个不同元素进栈时，出栈元素不同排列的个数为(<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><msubsup><mi>C</mi><mrow><mn>2</mn><mi>n</mi></mrow><mi>n</mi></msubsup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow><annotation encoding="application/x-tex">\\frac{C_{2n}^n}{n+1}</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.4305em;vertical-align:-0.4033em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:1.0272em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">n</span><span class="mbin mtight">+</span><span class="mord mtight">1</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.5102em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="margin-right:0.07153em;">C</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.7385em;"><span style="top:-2.214em;margin-left:-0.0715em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mtight"><span class="mord mtight">2</span><span class="mord mathnormal mtight">n</span></span></span></span><span style="top:-2.931em;margin-right:0.0714em;"><span class="pstrut" style="height:2.5em;"></span><span class="sizing reset-size3 size1 mtight"><span class="mord mathnormal mtight">n</span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.286em;"><span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">​</span></span><span class="vlist-r"><span class="vlist" style="height:0.4033em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span></span></span></span>)，即卡特兰数。</li>
</ul>
</li>
<li><strong>存储结构</strong>
<ul>
<li><strong>顺序存储</strong>：通常借助数组来实现，通过定义一个固定大小的数组来容纳栈元素，并使用一个变量<span v-pre="" class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi>t</mi><mi>o</mi><mi>p</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">(top)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mopen">(</span><span class="mord mathnormal">t</span><span class="mord mathnormal">o</span><span class="mord mathnormal">p</span><span class="mclose">)</span></span></span></span>来指示栈顶元素的位置。顺序栈的优点是访问元素速度快，但存在栈溢出的风险，且在栈元素频繁进出时，可能需要进行大量的数据移动操作。</li>
<li><strong>链式存储</strong>：通过链表来构建，每个节点包含数据域和指向下一个节点的指针域，栈顶即为链表的头节点。链式存储的栈不存在固定大小的限制，能够根据需要动态分配内存空间，但空间开销相对较大，访问栈中特定位置元素时时间复杂度相对较高。</li>
</ul>
</li>
<li><strong>基本操作</strong>
<ul>
<li><strong>初始化栈</strong>：构造一个空栈，分配内存空间。</li>
<li><strong>入栈</strong>：若栈未满，则将元素加入使之成为新栈顶。</li>
<li><strong>出栈</strong>：若栈非空，则弹出栈顶元素。</li>
<li><strong>读栈顶元素</strong>：若栈非空，则返回栈顶元素，但不删除该元素。</li>
<li><strong>判断栈空</strong>：判断一个栈是否为空，若为空，则返回 true，否则返回 false。</li>
</ul>
</li>
<li><strong>应用</strong>
<ul>
<li><strong>括号匹配</strong>：读取一个字符串，依次扫描所有字符，遇到左括号入栈，遇到右括号则弹出栈顶元素检查是否匹配。若扫描结束后栈为空，则括号匹配；否则，括号不匹配。</li>
<li><strong>表达式求值</strong>：在中缀表达式转换为后缀表达式和后缀表达式求值中，栈被广泛使用。中缀转后缀时，遇到操作数直接加入后缀表达式，遇到运算符则根据其优先级与栈顶运算符比较，依次弹出栈中优先级高于或等于当前运算符的所有运算符并加入后缀表达式，最后将栈中剩余运算符依次弹出加入后缀表达式。后缀表达式求值时，从左往右扫描元素，若为操作数则压入栈，若为运算符则弹出两个栈顶元素进行相应运算，运算结果压回栈顶。</li>
<li><strong>递归的非递归实现</strong>：递归算法可以通过栈这一数据结构转换为非递归算法，借助栈来保存函数调用的返回地址和局部变量等信息，从而实现递归功能。</li>
</ul>
</li>
</ul>`,readingTime:{minutes:2.6,words:780},title:"栈",icon:"stack",type:"article"}}],["/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/1.html",{loader:()=>He(()=>import("./1.html-CRNazyZm.js"),[]),meta:{date:1766495627e3,title:"",type:"article"}}],["/404.html",{loader:()=>He(()=>import("./404.html-Dnmx1_E5.js"),[]),meta:{title:""}}],["/posts/%E5%85%B6%E4%BB%96/",{loader:()=>He(()=>import("./index.html-DPuZnFx_.js"),[]),meta:{title:"其他"}}],["/posts/",{loader:()=>He(()=>import("./index.html-B-cMuNj_.js"),[]),meta:{title:"Posts"}}],["/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>He(()=>import("./index.html-CXrEQxgx.js"),[]),meta:{title:"数据结构"}}],["/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/",{loader:()=>He(()=>import("./index.html-BuP7rOBY.js"),[]),meta:{title:"考研数学"}}],["/category/",{loader:()=>He(()=>import("./index.html-ChhXBgSu.js"),[]),meta:{title:"分类",index:!1}}],["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>He(()=>import("./index.html-sb1U__ZI.js"),[]),meta:{title:"使用指南 分类",index:!1}}],["/category/%E6%8C%87%E5%8D%97/",{loader:()=>He(()=>import("./index.html-D-MthXhn.js"),[]),meta:{title:"指南 分类",index:!1}}],["/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{loader:()=>He(()=>import("./index.html-CHrhT1S2.js"),[]),meta:{title:"数据库 分类",index:!1}}],["/category/%E5%8C%BB%E9%99%A2%E7%AE%A1%E7%90%86%E5%AD%A6/",{loader:()=>He(()=>import("./index.html-DBU4QbAZ.js"),[]),meta:{title:"医院管理学 分类",index:!1}}],["/category/java-web/",{loader:()=>He(()=>import("./index.html-B_HqOb0O.js"),[]),meta:{title:"java web 分类",index:!1}}],["/category/linux/",{loader:()=>He(()=>import("./index.html-Blh1fqID.js"),[]),meta:{title:"linux 分类",index:!1}}],["/category/%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F/",{loader:()=>He(()=>import("./index.html-DFH8tJXV.js"),[]),meta:{title:"信号与系统 分类",index:!1}}],["/category/%E7%BD%91%E7%BB%9C/",{loader:()=>He(()=>import("./index.html-CjbVA7y5.js"),[]),meta:{title:"网络 分类",index:!1}}],["/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>He(()=>import("./index.html-Ba2GEm16.js"),[]),meta:{title:"数据结构 分类",index:!1}}],["/tag/",{loader:()=>He(()=>import("./index.html-CpHRnbOB.js"),[]),meta:{title:"标签",index:!1}}],["/tag/%E7%A6%81%E7%94%A8/",{loader:()=>He(()=>import("./index.html-D46HcjTp.js"),[]),meta:{title:"标签: 禁用",index:!1}}],["/tag/%E5%8A%A0%E5%AF%86/",{loader:()=>He(()=>import("./index.html-BUJTp0f2.js"),[]),meta:{title:"标签: 加密",index:!1}}],["/tag/%E5%B8%83%E5%B1%80/",{loader:()=>He(()=>import("./index.html-D5QRqRfo.js"),[]),meta:{title:"标签: 布局",index:!1}}],["/tag/markdown/",{loader:()=>He(()=>import("./index.html-zPD-D_Vu.js"),[]),meta:{title:"标签: Markdown",index:!1}}],["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{loader:()=>He(()=>import("./index.html-FgjxODhA.js"),[]),meta:{title:"标签: 页面配置",index:!1}}],["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>He(()=>import("./index.html-ACqlruko.js"),[]),meta:{title:"标签: 使用指南",index:!1}}],["/tag/%E6%A0%88/",{loader:()=>He(()=>import("./index.html-DL9M-fNv.js"),[]),meta:{title:"标签: 栈",index:!1}}],["/tag/%E7%AE%97%E6%B3%95/",{loader:()=>He(()=>import("./index.html-DV8POW3K.js"),[]),meta:{title:"标签: 算法",index:!1}}],["/article/",{loader:()=>He(()=>import("./index.html-DoO54X1t.js"),[]),meta:{title:"文章",index:!1}}],["/star/",{loader:()=>He(()=>import("./index.html-BhdYN-hy.js"),[]),meta:{title:"星标",index:!1}}],["/timeline/",{loader:()=>He(()=>import("./index.html-DnUyyqQ1.js"),[]),meta:{title:"时间轴",index:!1}}]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Mi=typeof document<"u";function i0(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ex(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&i0(t.default)}const ht=Object.assign;function dc(t,e){const n={};for(const s in e){const a=e[s];n[s]=ns(a)?a.map(t):t(a)}return n}const Ar=()=>{},ns=Array.isArray;function kf(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}const r0=/#/g,tx=/&/g,nx=/\//g,sx=/=/g,ax=/\?/g,o0=/\+/g,ix=/%5B/g,rx=/%5D/g,l0=/%5E/g,ox=/%60/g,c0=/%7B/g,lx=/%7C/g,u0=/%7D/g,cx=/%20/g;function Qp(t){return t==null?"":encodeURI(""+t).replace(lx,"|").replace(ix,"[").replace(rx,"]")}function ux(t){return Qp(t).replace(c0,"{").replace(u0,"}").replace(l0,"^")}function xu(t){return Qp(t).replace(o0,"%2B").replace(cx,"+").replace(r0,"%23").replace(tx,"%26").replace(ox,"`").replace(c0,"{").replace(u0,"}").replace(l0,"^")}function px(t){return xu(t).replace(sx,"%3D")}function hx(t){return Qp(t).replace(r0,"%23").replace(ax,"%3F")}function fx(t){return hx(t).replace(nx,"%2F")}function Or(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const dx=/\/$/,mx=t=>t.replace(dx,"");function mc(t,e,n="/"){let s,a={},i="",r="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(s=e.slice(0,l),i=e.slice(l,o>0?o:e.length),a=t(i.slice(1))),o>=0&&(s=s||e.slice(0,o),r=e.slice(o,e.length)),s=xx(s??e,n),{fullPath:s+i+r,path:s,query:a,hash:Or(r)}}function gx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function zf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vx(t,e,n){const s=e.matched.length-1,a=n.matched.length-1;return s>-1&&s===a&&Wi(e.matched[s],n.matched[a])&&p0(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function p0(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!_x(t[n],e[n]))return!1;return!0}function _x(t,e){return ns(t)?Vf(t,e):ns(e)?Vf(e,t):t?.valueOf()===e?.valueOf()}function Vf(t,e){return ns(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function xx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let i=n.length-1,r,o;for(r=0;r<s.length;r++)if(o=s[r],o!==".")if(o==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(r).join("/")}const Us={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let yu=(function(t){return t.pop="pop",t.push="push",t})({}),gc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function yx(t){if(!t)if(Mi){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mx(t)}const bx=/^[^#]+#/;function Sx(t,e){return t.replace(bx,"#")+e}function Mx(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Bl=()=>({left:window.scrollX,top:window.scrollY});function Ex(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),a=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!a)return;e=Mx(a,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hf(t,e){return(history.state?history.state.position-e:-1)+t}const bu=new Map;function wx(t,e){bu.set(t,e)}function Tx(t){const e=bu.get(t);return bu.delete(t),e}function Ax(t){return typeof t=="string"||t&&typeof t=="object"}function h0(t){return typeof t=="string"||typeof t=="symbol"}let Ft=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const f0=Symbol("");Ft.MATCHER_NOT_FOUND+"",Ft.NAVIGATION_GUARD_REDIRECT+"",Ft.NAVIGATION_ABORTED+"",Ft.NAVIGATION_CANCELLED+"",Ft.NAVIGATION_DUPLICATED+"";function $i(t,e){return ht(new Error,{type:t,[f0]:!0},e)}function Cs(t,e){return t instanceof Error&&f0 in t&&(e==null||!!(t.type&e))}const Cx=["params","query","hash"];function Rx(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Cx)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Px(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<n.length;++s){const a=n[s].replace(o0," "),i=a.indexOf("="),r=Or(i<0?a:a.slice(0,i)),o=i<0?null:Or(a.slice(i+1));if(r in e){let l=e[r];ns(l)||(l=e[r]=[l]),l.push(o)}else e[r]=o}return e}function Gf(t){let e="";for(let n in t){const s=t[n];if(n=px(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(ns(s)?s.map(a=>a&&xu(a)):[s&&xu(s)]).forEach(a=>{a!==void 0&&(e+=(e.length?"&":"")+n,a!=null&&(e+="="+a))})}return e}function Lx(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=ns(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return e}const Dx=Symbol(""),Wf=Symbol(""),kl=Symbol(""),eh=Symbol(""),Su=Symbol("");function pr(){let t=[];function e(s){return t.push(s),()=>{const a=t.indexOf(s);a>-1&&t.splice(a,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function ga(t,e,n,s,a,i=r=>r()){const r=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((o,l)=>{const u=h=>{h===!1?l($i(Ft.NAVIGATION_ABORTED,{from:n,to:e})):h instanceof Error?l(h):Ax(h)?l($i(Ft.NAVIGATION_GUARD_REDIRECT,{from:e,to:h})):(r&&s.enterCallbacks[a]===r&&typeof h=="function"&&r.push(h),o())},c=i(()=>t.call(s&&s.instances[a],e,n,u));let p=Promise.resolve(c);t.length<3&&(p=p.then(u)),p.catch(h=>l(h))})}function vc(t,e,n,s,a=i=>i()){const i=[];for(const r of t)for(const o in r.components){let l=r.components[o];if(!(e!=="beforeRouteEnter"&&!r.instances[o]))if(i0(l)){const u=(l.__vccOpts||l)[e];u&&i.push(ga(u,n,s,r,o,a))}else{let u=l();i.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${r.path}"`);const p=ex(c)?c.default:c;r.mods[o]=c,r.components[o]=p;const h=(p.__vccOpts||p)[e];return h&&ga(h,n,s,r,o,a)()}))}}return i}function Ix(t,e){const n=[],s=[],a=[],i=Math.max(e.matched.length,t.matched.length);for(let r=0;r<i;r++){const o=e.matched[r];o&&(t.matched.find(u=>Wi(u,o))?s.push(o):n.push(o));const l=t.matched[r];l&&(e.matched.find(u=>Wi(u,l))||a.push(l))}return[n,s,a]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Nx=()=>location.protocol+"//"+location.host;function d0(t,e){const{pathname:n,search:s,hash:a}=e,i=t.indexOf("#");if(i>-1){let r=a.includes(t.slice(i))?t.slice(i).length:1,o=a.slice(r);return o[0]!=="/"&&(o="/"+o),zf(o,"")}return zf(n,t)+s+a}function Ux(t,e,n,s){let a=[],i=[],r=null;const o=({state:h})=>{const f=d0(t,location),v=n.value,_=e.value;let g=0;if(h){if(n.value=f,e.value=h,r&&r===v){r=null;return}g=_?h.position-_.position:0}else s(f);a.forEach(m=>{m(n.value,v,{delta:g,type:yu.pop,direction:g?g>0?gc.forward:gc.back:gc.unknown})})};function l(){r=n.value}function u(h){a.push(h);const f=()=>{const v=a.indexOf(h);v>-1&&a.splice(v,1)};return i.push(f),f}function c(){if(document.visibilityState==="hidden"){const{history:h}=window;if(!h.state)return;h.replaceState(ht({},h.state,{scroll:Bl()}),"")}}function p(){for(const h of i)h();i=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:p}}function $f(t,e,n,s=!1,a=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:a?Bl():null}}function Ox(t){const{history:e,location:n}=window,s={value:d0(t,n)},a={value:e.state};a.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,c){const p=t.indexOf("#"),h=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:Nx()+t+l;try{e[c?"replaceState":"pushState"](u,"",h),a.value=u}catch(f){console.error(f),n[c?"replace":"assign"](h)}}function r(l,u){i(l,ht({},e.state,$f(a.value.back,l,a.value.forward,!0),u,{position:a.value.position}),!0),s.value=l}function o(l,u){const c=ht({},a.value,e.state,{forward:l,scroll:Bl()});i(c.current,c,!0),i(l,ht({},$f(s.value,l,null),{position:c.position+1},u),!1),s.value=l}return{location:s,state:a,push:o,replace:r}}function Fx(t){t=yx(t);const e=Ox(t),n=Ux(t,e.state,e.location,e.replace);function s(i,r=!0){r||n.pauseListeners(),history.go(i)}const a=ht({location:"",base:t,go:s,createHref:Sx.bind(null,t)},e,n);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>e.state.value}),a}let Wa=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Wt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Wt||{});const Bx={type:Wa.Static,value:""},kx=/[a-zA-Z0-9_]/;function zx(t){if(!t)return[[]];if(t==="/")return[[Bx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${u}": ${f}`)}let n=Wt.Static,s=n;const a=[];let i;function r(){i&&a.push(i),i=[]}let o=0,l,u="",c="";function p(){u&&(n===Wt.Static?i.push({type:Wa.Static,value:u}):n===Wt.Param||n===Wt.ParamRegExp||n===Wt.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Wa.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function h(){u+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==Wt.ParamRegExp){s=n,n=Wt.EscapeNext;continue}switch(n){case Wt.Static:l==="/"?(u&&p(),r()):l===":"?(p(),n=Wt.Param):h();break;case Wt.EscapeNext:h(),n=s;break;case Wt.Param:l==="("?n=Wt.ParamRegExp:kx.test(l)?h():(p(),n=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Wt.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Wt.ParamRegExpEnd:c+=l;break;case Wt.ParamRegExpEnd:p(),n=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return n===Wt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),r(),a}const Xf="[^/]+?",Vx={sensitive:!1,strict:!1,start:!0,end:!0};var un=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(un||{});const Hx=/[.+*?^${}()[\]/\\]/g;function Gx(t,e){const n=ht({},Vx,e),s=[];let a=n.start?"^":"";const i=[];for(const u of t){const c=u.length?[]:[un.Root];n.strict&&!u.length&&(a+="/");for(let p=0;p<u.length;p++){const h=u[p];let f=un.Segment+(n.sensitive?un.BonusCaseSensitive:0);if(h.type===Wa.Static)p||(a+="/"),a+=h.value.replace(Hx,"\\$&"),f+=un.Static;else if(h.type===Wa.Param){const{value:v,repeatable:_,optional:g,regexp:m}=h;i.push({name:v,repeatable:_,optional:g});const M=m||Xf;if(M!==Xf){f+=un.BonusCustomRegExp;try{`${M}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+S.message)}}let x=_?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;p||(x=g&&u.length<2?`(?:/${x})`:"/"+x),g&&(x+="?"),a+=x,f+=un.Dynamic,g&&(f+=un.BonusOptional),_&&(f+=un.BonusRepeatable),M===".*"&&(f+=un.BonusWildcard)}c.push(f)}s.push(c)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=un.BonusStrict}n.strict||(a+="/?"),n.end?a+="$":n.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const r=new RegExp(a,n.sensitive?"":"i");function o(u){const c=u.match(r),p={};if(!c)return null;for(let h=1;h<c.length;h++){const f=c[h]||"",v=i[h-1];p[v.name]=f&&v.repeatable?f.split("/"):f}return p}function l(u){let c="",p=!1;for(const h of t){(!p||!c.endsWith("/"))&&(c+="/"),p=!1;for(const f of h)if(f.type===Wa.Static)c+=f.value;else if(f.type===Wa.Param){const{value:v,repeatable:_,optional:g}=f,m=v in u?u[v]:"";if(ns(m)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=ns(m)?m.join("/"):m;if(!M)if(g)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):p=!0);else throw new Error(`Missing required param "${v}"`);c+=M}}return c||"/"}return{re:r,score:s,keys:i,parse:o,stringify:l}}function Wx(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===un.Static+un.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===un.Static+un.Segment?1:-1:0}function m0(t,e){let n=0;const s=t.score,a=e.score;for(;n<s.length&&n<a.length;){const i=Wx(s[n],a[n]);if(i)return i;n++}if(Math.abs(a.length-s.length)===1){if(qf(s))return 1;if(qf(a))return-1}return a.length-s.length}function qf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $x={strict:!1,end:!0,sensitive:!1};function Xx(t,e,n){const s=Gx(zx(t.path),n),a=ht(s,{record:t,parent:e,children:[],alias:[]});return e&&!a.record.aliasOf==!e.record.aliasOf&&e.children.push(a),a}function qx(t,e){const n=[],s=new Map;e=kf($x,e);function a(p){return s.get(p)}function i(p,h,f){const v=!f,_=Yf(p);_.aliasOf=f&&f.record;const g=kf(e,p),m=[_];if("alias"in p){const S=typeof p.alias=="string"?[p.alias]:p.alias;for(const T of S)m.push(Yf(ht({},_,{components:f?f.record.components:_.components,path:T,aliasOf:f?f.record:_})))}let M,x;for(const S of m){const{path:T}=S;if(h&&T[0]!=="/"){const P=h.record.path,L=P[P.length-1]==="/"?"":"/";S.path=h.record.path+(T&&L+T)}if(M=Xx(S,h,g),f?f.alias.push(M):(x=x||M,x!==M&&x.alias.push(M),v&&p.name&&!Kf(M)&&r(p.name)),g0(M)&&l(M),_.children){const P=_.children;for(let L=0;L<P.length;L++)i(P[L],M,f&&f.children[L])}f=f||M}return x?()=>{r(x)}:Ar}function r(p){if(h0(p)){const h=s.get(p);h&&(s.delete(p),n.splice(n.indexOf(h),1),h.children.forEach(r),h.alias.forEach(r))}else{const h=n.indexOf(p);h>-1&&(n.splice(h,1),p.record.name&&s.delete(p.record.name),p.children.forEach(r),p.alias.forEach(r))}}function o(){return n}function l(p){const h=Kx(p,n);n.splice(h,0,p),p.record.name&&!Kf(p)&&s.set(p.record.name,p)}function u(p,h){let f,v={},_,g;if("name"in p&&p.name){if(f=s.get(p.name),!f)throw $i(Ft.MATCHER_NOT_FOUND,{location:p});g=f.record.name,v=ht(jf(h.params,f.keys.filter(x=>!x.optional).concat(f.parent?f.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),p.params&&jf(p.params,f.keys.map(x=>x.name))),_=f.stringify(v)}else if(p.path!=null)_=p.path,f=n.find(x=>x.re.test(_)),f&&(v=f.parse(_),g=f.record.name);else{if(f=h.name?s.get(h.name):n.find(x=>x.re.test(h.path)),!f)throw $i(Ft.MATCHER_NOT_FOUND,{location:p,currentLocation:h});g=f.record.name,v=ht({},h.params,p.params),_=f.stringify(v)}const m=[];let M=f;for(;M;)m.unshift(M.record),M=M.parent;return{name:g,path:_,params:v,matched:m,meta:Yx(m)}}t.forEach(p=>i(p));function c(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:r,clearRoutes:c,getRoutes:o,getRecordMatcher:a}}function jf(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Yf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Kf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yx(t){return t.reduce((e,n)=>ht(e,n.meta),{})}function Kx(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;m0(t,e[i])<0?s=i:n=i+1}const a=Zx(t);return a&&(s=e.lastIndexOf(a,s-1)),s}function Zx(t){let e=t;for(;e=e.parent;)if(g0(e)&&m0(t,e)===0)return e}function g0({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zf(t){const e=Rt(kl),n=Rt(eh),s=$(()=>{const l=Jn(t.to);return e.resolve(l)}),a=$(()=>{const{matched:l}=s.value,{length:u}=l,c=l[u-1],p=n.matched;if(!c||!p.length)return-1;const h=p.findIndex(Wi.bind(null,c));if(h>-1)return h;const f=Jf(l[u-2]);return u>1&&Jf(c)===f&&p[p.length-1].path!==f?p.findIndex(Wi.bind(null,l[u-2])):h}),i=$(()=>a.value>-1&&ny(n.params,s.value.params)),r=$(()=>a.value>-1&&a.value===n.matched.length-1&&p0(n.params,s.value.params));function o(l={}){if(ty(l)){const u=e[Jn(t.replace)?"replace":"push"](Jn(t.to)).catch(Ar);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:$(()=>s.value.href),isActive:i,isExactActive:r,navigate:o}}function Jx(t){return t.length===1?t[0]:t}const Qx=xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zf,setup(t,{slots:e}){const n=Za(Zf(t)),{options:s}=Rt(kl),a=$(()=>({[Qf(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Qf(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Jx(e.default(n));return t.custom?i:d("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:a.value},i)}}}),ey=Qx;function ty(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ny(t,e){for(const n in e){const s=e[n],a=t[n];if(typeof s=="string"){if(s!==a)return!1}else if(!ns(a)||a.length!==s.length||s.some((i,r)=>i.valueOf()!==a[r].valueOf()))return!1}return!0}function Jf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qf=(t,e,n)=>t??e??n,sy=xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Rt(Su),a=$(()=>t.route||s.value),i=Rt(Wf,0),r=$(()=>{let u=Jn(i);const{matched:c}=a.value;let p;for(;(p=c[u])&&!p.components;)u++;return u}),o=$(()=>a.value.matched[r.value]);Qn(Wf,$(()=>r.value+1)),Qn(Dx,o),Qn(Su,a);const l=je();return Lt(()=>[l.value,o.value,t.name],([u,c,p],[h,f,v])=>{c&&(c.instances[p]=u,f&&f!==c&&u&&u===h&&(c.leaveGuards.size||(c.leaveGuards=f.leaveGuards),c.updateGuards.size||(c.updateGuards=f.updateGuards))),u&&c&&(!f||!Wi(c,f)||!h)&&(c.enterCallbacks[p]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=a.value,c=t.name,p=o.value,h=p&&p.components[c];if(!h)return ed(n.default,{Component:h,route:u});const f=p.props[c],v=f?f===!0?u.params:typeof f=="function"?f(u):f:null,g=d(h,ht({},v,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(p.instances[c]=null)},ref:l}));return ed(n.default,{Component:g,route:u})||g}}});function ed(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const ay=sy;function iy(t){const e=qx(t.routes,t),n=t.parseQuery||Px,s=t.stringifyQuery||Gf,a=t.history,i=pr(),r=pr(),o=pr(),l=Ye(Us);let u=Us;Mi&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=dc.bind(null,F=>""+F),p=dc.bind(null,fx),h=dc.bind(null,Or);function f(F,ae){let oe,re;return h0(F)?(oe=e.getRecordMatcher(F),re=ae):re=F,e.addRoute(re,oe)}function v(F){const ae=e.getRecordMatcher(F);ae&&e.removeRoute(ae)}function _(){return e.getRoutes().map(F=>F.record)}function g(F){return!!e.getRecordMatcher(F)}function m(F,ae){if(ae=ht({},ae||l.value),typeof F=="string"){const I=mc(n,F,ae.path),W=e.resolve({path:I.path},ae),ee=a.createHref(I.fullPath);return ht(I,W,{params:h(W.params),hash:Or(I.hash),redirectedFrom:void 0,href:ee})}let oe;if(F.path!=null)oe=ht({},F,{path:mc(n,F.path,ae.path).path});else{const I=ht({},F.params);for(const W in I)I[W]==null&&delete I[W];oe=ht({},F,{params:p(I)}),ae.params=p(ae.params)}const re=e.resolve(oe,ae),Ae=F.hash||"";re.params=c(h(re.params));const We=gx(s,ht({},F,{hash:ux(Ae),path:re.path})),R=a.createHref(We);return ht({fullPath:We,hash:Ae,query:s===Gf?Lx(F.query):F.query||{}},re,{redirectedFrom:void 0,href:R})}function M(F){return typeof F=="string"?mc(n,F,l.value.path):ht({},F)}function x(F,ae){if(u!==F)return $i(Ft.NAVIGATION_CANCELLED,{from:ae,to:F})}function S(F){return L(F)}function T(F){return S(ht(M(F),{replace:!0}))}function P(F,ae){const oe=F.matched[F.matched.length-1];if(oe&&oe.redirect){const{redirect:re}=oe;let Ae=typeof re=="function"?re(F,ae):re;return typeof Ae=="string"&&(Ae=Ae.includes("?")||Ae.includes("#")?Ae=M(Ae):{path:Ae},Ae.params={}),ht({query:F.query,hash:F.hash,params:Ae.path!=null?{}:F.params},Ae)}}function L(F,ae){const oe=u=m(F),re=l.value,Ae=F.state,We=F.force,R=F.replace===!0,I=P(oe,re);if(I)return L(ht(M(I),{state:typeof I=="object"?ht({},Ae,I.state):Ae,force:We,replace:R}),ae||oe);const W=oe;W.redirectedFrom=ae;let ee;return!We&&vx(s,re,oe)&&(ee=$i(Ft.NAVIGATION_DUPLICATED,{to:W,from:re}),be(re,re,!0,!1)),(ee?Promise.resolve(ee):E(W,re)).catch(se=>Cs(se)?Cs(se,Ft.NAVIGATION_GUARD_REDIRECT)?se:ge(se):q(se,W,re)).then(se=>{if(se){if(Cs(se,Ft.NAVIGATION_GUARD_REDIRECT))return L(ht({replace:R},M(se.to),{state:typeof se.to=="object"?ht({},Ae,se.to.state):Ae,force:We}),ae||W)}else se=U(W,re,!0,R,Ae);return D(W,re,se),se})}function O(F,ae){const oe=x(F,ae);return oe?Promise.reject(oe):Promise.resolve()}function b(F){const ae=rt.values().next().value;return ae&&typeof ae.runWithContext=="function"?ae.runWithContext(F):F()}function E(F,ae){let oe;const[re,Ae,We]=Ix(F,ae);oe=vc(re.reverse(),"beforeRouteLeave",F,ae);for(const I of re)I.leaveGuards.forEach(W=>{oe.push(ga(W,F,ae))});const R=O.bind(null,F,ae);return oe.push(R),ie(oe).then(()=>{oe=[];for(const I of i.list())oe.push(ga(I,F,ae));return oe.push(R),ie(oe)}).then(()=>{oe=vc(Ae,"beforeRouteUpdate",F,ae);for(const I of Ae)I.updateGuards.forEach(W=>{oe.push(ga(W,F,ae))});return oe.push(R),ie(oe)}).then(()=>{oe=[];for(const I of We)if(I.beforeEnter)if(ns(I.beforeEnter))for(const W of I.beforeEnter)oe.push(ga(W,F,ae));else oe.push(ga(I.beforeEnter,F,ae));return oe.push(R),ie(oe)}).then(()=>(F.matched.forEach(I=>I.enterCallbacks={}),oe=vc(We,"beforeRouteEnter",F,ae,b),oe.push(R),ie(oe))).then(()=>{oe=[];for(const I of r.list())oe.push(ga(I,F,ae));return oe.push(R),ie(oe)}).catch(I=>Cs(I,Ft.NAVIGATION_CANCELLED)?I:Promise.reject(I))}function D(F,ae,oe){o.list().forEach(re=>b(()=>re(F,ae,oe)))}function U(F,ae,oe,re,Ae){const We=x(F,ae);if(We)return We;const R=ae===Us,I=Mi?history.state:{};oe&&(re||R?a.replace(F.fullPath,ht({scroll:R&&I&&I.scroll},Ae)):a.push(F.fullPath,Ae)),l.value=F,be(F,ae,oe,R),ge()}let k;function V(){k||(k=a.listen((F,ae,oe)=>{if(!et.listening)return;const re=m(F),Ae=P(re,et.currentRoute.value);if(Ae){L(ht(Ae,{replace:!0,force:!0}),re).catch(Ar);return}u=re;const We=l.value;Mi&&wx(Hf(We.fullPath,oe.delta),Bl()),E(re,We).catch(R=>Cs(R,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_CANCELLED)?R:Cs(R,Ft.NAVIGATION_GUARD_REDIRECT)?(L(ht(M(R.to),{force:!0}),re).then(I=>{Cs(I,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===yu.pop&&a.go(-1,!1)}).catch(Ar),Promise.reject()):(oe.delta&&a.go(-oe.delta,!1),q(R,re,We))).then(R=>{R=R||U(re,We,!1),R&&(oe.delta&&!Cs(R,Ft.NAVIGATION_CANCELLED)?a.go(-oe.delta,!1):oe.type===yu.pop&&Cs(R,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),D(re,We,R)}).catch(Ar)}))}let X=pr(),B=pr(),G;function q(F,ae,oe){ge(F);const re=B.list();return re.length?re.forEach(Ae=>Ae(F,ae,oe)):console.error(F),Promise.reject(F)}function le(){return G&&l.value!==Us?Promise.resolve():new Promise((F,ae)=>{X.add([F,ae])})}function ge(F){return G||(G=!F,V(),X.list().forEach(([ae,oe])=>F?oe(F):ae()),X.reset()),F}function be(F,ae,oe,re){const{scrollBehavior:Ae}=t;if(!Mi||!Ae)return Promise.resolve();const We=!oe&&Tx(Hf(F.fullPath,0))||(re||!oe)&&history.state&&history.state.scroll||null;return Ms().then(()=>Ae(F,ae,We)).then(R=>R&&Ex(R)).catch(R=>q(R,F,ae))}const Oe=F=>a.go(F);let Be;const rt=new Set,et={currentRoute:l,listening:!0,addRoute:f,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:_,resolve:m,options:t,push:S,replace:T,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:i.add,beforeResolve:r.add,afterEach:o.add,onError:B.add,isReady:le,install(F){F.component("RouterLink",ey),F.component("RouterView",ay),F.config.globalProperties.$router=et,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Jn(l)}),Mi&&!Be&&l.value===Us&&(Be=!0,S(a.location).catch(re=>{}));const ae={};for(const re in Us)Object.defineProperty(ae,re,{get:()=>l.value[re],enumerable:!0});F.provide(kl,et),F.provide(eh,tg(ae)),F.provide(Su,l);const oe=F.unmount;rt.add(F),F.unmount=function(){rt.delete(F),rt.size<1&&(u=Us,k&&k(),k=null,l.value=Us,Be=!1,G=!1),oe()}}};function ie(F){return F.reduce((ae,oe)=>ae.then(()=>b(oe)),Promise.resolve())}return et}function Ta(){return Rt(kl)}function Es(t){return Rt(eh)}var th=Symbol(""),ws=()=>{const t=Rt(th);if(!t)throw new Error("useClientData() is called without provider.");return t},ry=()=>ws().pageComponent,oy=()=>ws().pageData,v0=()=>ws().pageFrontmatter,ly=()=>ws().pageHead,_0=()=>ws().pageLang,cy=()=>ws().pageLayout,x0=()=>ws().routeLocale,uy=()=>ws().routePath,py=()=>ws().siteData,ti=ws,Dn=v0,y0=_0,Qr=oy,Mu=new Set,ea=t=>{Mu.add(t),Js(()=>{Mu.delete(t)})},hy=Symbol(""),Eu=Ye(J3),Ni=Ye(Q3),b0=(t,e)=>{const n=H3(t,e);if(Ni.value[n])return n;const s=encodeURI(n);if(Ni.value[s])return s;const a=Eu.value[n]||Eu.value[s];return a||n},Vn=(t,e)=>{const{pathname:n,hashAndQueries:s}=n0(t),a=b0(n,e),i=a+s;return Ni.value[a]?{...Ni.value[a],path:i,notFound:!1}:{...Ni.value["/404.html"],path:i,notFound:!0}},fy=(t,e)=>{const{pathname:n,hashAndQueries:s}=n0(t);return b0(n,e)+s},dy=t=>{if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)&&!(t.currentTarget&&t.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)))return t.preventDefault(),!0},Gt=xe({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(t,{slots:e}){const n=Ta(),s=Es(),a=$(()=>t.to.startsWith("#")||t.to.startsWith("?")?t.to:`/myblog/${fy(t.to,s.path).substring(1)}`);return()=>d("a",{class:["route-link",{[t.activeClass]:t.active}],href:a.value,onClick:(i={})=>{dy(i)&&n.push(t.to).catch()}},e.default())}}),my=xe({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=Zi(t,"config"),s=Es(),a=py(),i=$(()=>Jr(n.value.link)),r=$(()=>n.value.target||(i.value?"_blank":void 0)),o=$(()=>r.value==="_blank"),l=$(()=>!i.value&&!o.value),u=$(()=>n.value.rel||(o.value?"noopener noreferrer":null)),c=$(()=>n.value.ariaLabel??n.value.text),p=$(()=>{if(n.value.exact)return!1;const f=Object.keys(a.value.locales);return f.length?f.every(v=>v!==n.value.link):n.value.link!=="/"}),h=$(()=>l.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(s.path):p.value?s.path.startsWith(n.value.link):s.path===n.value.link:!1);return()=>{const{before:f,after:v,default:_}=e,g=_?.(n.value)??[f?.(n.value),n.value.text,v?.(n.value)];return l.value?d(Gt,{class:"auto-link",to:n.value.link,active:h.value,"aria-label":c.value},()=>g):d("a",{class:"auto-link external-link",href:n.value.link,"aria-label":c.value,rel:u.value,target:r.value},g)}}}),nh=xe({name:"ClientOnly",setup(t,e){const n=je(!1);return vt(()=>{n.value=!0}),()=>n.value?e.slots.default?.():null}}),So=t=>{Mu.forEach(e=>e(t))},S0=xe({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(t){const e=ry(),n=$(()=>{if(!t.path)return e.value;const a=Vn(t.path);return p2(async()=>a.loader().then(({comp:i})=>i))}),s=v0();return Lt(s,()=>{So("updated")},{deep:!0,flush:"post"}),()=>d(n.value,{onVnodeMounted:()=>{So("mounted")},onVnodeUpdated:()=>{So("updated")},onVnodeBeforeUnmount:()=>{So("beforeUnmount")}})}}),gy="Layout",vy="en-US",Da=Za({resolveLayouts:t=>t.reduce((e,n)=>({...e,...n.layouts}),{}),resolvePageHead:(t,e,n)=>{const s=xt(e.description)?e.description:n.description,a=[...Array.isArray(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:s}]];return j3(a)},resolvePageHeadTitle:(t,e)=>[t.title,e.title].filter(n=>!!n).join(" | "),resolvePageLang:(t,e)=>t.lang||e.lang||vy,resolvePageLayout:(t,e)=>{const n=xt(t.frontmatter.layout)?t.frontmatter.layout:gy;if(!e[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return e[n]},resolveRouteLocale:(t,e)=>G3(t,decodeURI(e)),resolveSiteLocaleData:({base:t,locales:e,...n},s)=>({...n,...e[s],head:[...e[s]?.head??[],...n.head]})}),rs=(t={})=>t,bt=t=>Ji(t)?t:`/myblog/${a0(t)}`,_y=Object.defineProperty,xy=(t,e)=>{for(var n in e)_y(t,n,{get:e[n],enumerable:!0})},yy={};xy(yy,{COMPONENT_STATE_TYPE:()=>by,INSPECTOR_ID:()=>Sy,INSPECTOR_LABEL:()=>My,INSPECTOR_NODES:()=>Ey,INSPECTOR_STATE_SECTION_NAME:()=>wy,PLUGIN_ID:()=>M0,PLUGIN_LABEL:()=>sh});var M0="org.vuejs.vuepress",sh="VuePress",by=sh,Sy=M0,My=sh,td={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},nd={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},sd={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},ad={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},Ey={[td.id]:td,[nd.id]:nd,[sd.id]:sd,[ad.id]:ad},wy="State";const id=t=>typeof t=="number"?`${t}px`:t,E0=({size:t=48,stroke:e=4,wrapper:n=!0,height:s=2*t})=>{const a=d("span",{style:`--loading-icon: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='25 25 50 50'%3E%3CanimateTransform attributeName='transform' type='rotate' dur='2s' keyTimes='0;1' repeatCount='indefinite' values='0;360'%3E%3C/animateTransform%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='currentColor' stroke-width='${e}' stroke-linecap='round'%3E%3Canimate attributeName='stroke-dasharray' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='1,200;90,200;1,200'%3E%3C/animate%3E%3Canimate attributeName='stroke-dashoffset' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='0;-35px;-125px'%3E%3C/animate%3E%3C/circle%3E%3C/svg%3E");--icon-size: ${id(t)};display: inline-block;width: var(--icon-size);height: var(--icon-size);background-color: currentcolor;-webkit-mask-image: var(--loading-icon);mask-image: var(--loading-icon)`});return n?d("div",{style:`display: flex;align-items: center;justify-content: center;height: ${id(s)}`},a):a};E0.displayName="LoadingIcon";const ah=(t,{slots:e})=>e.default();var An=Uint8Array,Ai=Uint16Array,Ty=Int32Array,w0=new An([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),T0=new An([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Ay=new An([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),A0=function(t,e){for(var n=new Ai(31),s=0;s<31;++s)n[s]=e+=1<<t[s-1];for(var a=new Ty(n[30]),s=1;s<30;++s)for(var i=n[s];i<n[s+1];++i)a[i]=i-n[s]<<5|s;return{b:n,r:a}},C0=A0(w0,2),R0=C0.b,Cy=C0.r;R0[28]=258,Cy[258]=28;var Ry=A0(T0,0),Py=Ry.b,wu=new Ai(32768);for(var Ct=0;Ct<32768;++Ct){var aa=(Ct&43690)>>1|(Ct&21845)<<1;aa=(aa&52428)>>2|(aa&13107)<<2,aa=(aa&61680)>>4|(aa&3855)<<4,wu[Ct]=((aa&65280)>>8|(aa&255)<<8)>>1}var Cr=(function(t,e,n){for(var s=t.length,a=0,i=new Ai(e);a<s;++a)t[a]&&++i[t[a]-1];var r=new Ai(e);for(a=1;a<e;++a)r[a]=r[a-1]+i[a-1]<<1;var o;if(n){o=new Ai(1<<e);var l=15-e;for(a=0;a<s;++a)if(t[a])for(var u=a<<4|t[a],c=e-t[a],p=r[t[a]-1]++<<c,h=p|(1<<c)-1;p<=h;++p)o[wu[p]>>l]=u}else for(o=new Ai(s),a=0;a<s;++a)t[a]&&(o[a]=wu[r[t[a]-1]++]>>15-t[a]);return o}),eo=new An(288);for(var Ct=0;Ct<144;++Ct)eo[Ct]=8;for(var Ct=144;Ct<256;++Ct)eo[Ct]=9;for(var Ct=256;Ct<280;++Ct)eo[Ct]=7;for(var Ct=280;Ct<288;++Ct)eo[Ct]=8;var P0=new An(32);for(var Ct=0;Ct<32;++Ct)P0[Ct]=5;var Ly=Cr(eo,9,1),Dy=Cr(P0,5,1),_c=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},Wn=function(t,e,n){var s=e/8|0;return(t[s]|t[s+1]<<8)>>(e&7)&n},xc=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Iy=function(t){return(t+7)/8|0},L0=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new An(t.subarray(e,n))},Ny=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fn=function(t,e,n){var s=new Error(e||Ny[t]);if(s.code=t,Error.captureStackTrace&&Error.captureStackTrace(s,Fn),!n)throw s;return s},Uy=function(t,e,n,s){var a=t.length,i=0;if(!a||e.f&&!e.l)return n||new An(0);var r=!n,o=r||e.i!=2,l=e.i;r&&(n=new An(a*3));var u=function(Ae){var We=n.length;if(Ae>We){var R=new An(Math.max(We*2,Ae));R.set(n),n=R}},c=e.f||0,p=e.p||0,h=e.b||0,f=e.l,v=e.d,_=e.m,g=e.n,m=a*8;do{if(!f){c=Wn(t,p,1);var M=Wn(t,p+1,3);if(p+=3,M)if(M==1)f=Ly,v=Dy,_=9,g=5;else if(M==2){var P=Wn(t,p,31)+257,L=Wn(t,p+10,15)+4,O=P+Wn(t,p+5,31)+1;p+=14;for(var b=new An(O),E=new An(19),D=0;D<L;++D)E[Ay[D]]=Wn(t,p+D*3,7);p+=L*3;for(var U=_c(E),k=(1<<U)-1,V=Cr(E,U,1),D=0;D<O;){var X=V[Wn(t,p,k)];p+=X&15;var x=X>>4;if(x<16)b[D++]=x;else{var B=0,G=0;for(x==16?(G=3+Wn(t,p,3),p+=2,B=b[D-1]):x==17?(G=3+Wn(t,p,7),p+=3):x==18&&(G=11+Wn(t,p,127),p+=7);G--;)b[D++]=B}}var q=b.subarray(0,P),le=b.subarray(P);_=_c(q),g=_c(le),f=Cr(q,_,1),v=Cr(le,g,1)}else Fn(1);else{var x=Iy(p)+4,S=t[x-4]|t[x-3]<<8,T=x+S;if(T>a){l&&Fn(0);break}o&&u(h+S),n.set(t.subarray(x,T),h),e.b=h+=S,e.p=p=T*8,e.f=c;continue}if(p>m){l&&Fn(0);break}}o&&u(h+131072);for(var ge=(1<<_)-1,be=(1<<g)-1,Oe=p;;Oe=p){var B=f[xc(t,p)&ge],Be=B>>4;if(p+=B&15,p>m){l&&Fn(0);break}if(B||Fn(2),Be<256)n[h++]=Be;else if(Be==256){Oe=p,f=null;break}else{var rt=Be-254;if(Be>264){var D=Be-257,et=w0[D];rt=Wn(t,p,(1<<et)-1)+R0[D],p+=et}var ie=v[xc(t,p)&be],F=ie>>4;ie||Fn(3),p+=ie&15;var le=Py[F];if(F>3){var et=T0[F];le+=xc(t,p)&(1<<et)-1,p+=et}if(p>m){l&&Fn(0);break}o&&u(h+131072);var ae=h+rt;if(h<le){var oe=i-le,re=Math.min(le,ae);for(oe+h<0&&Fn(3);h<re;++h)n[h]=s[oe+h]}for(;h<ae;++h)n[h]=n[h-le]}}e.l=f,e.p=Oe,e.b=h,e.f=c,f&&(c=1,e.m=_,e.d=v,e.n=g)}while(!c);return h!=n.length&&r?L0(n,0,h):n.subarray(0,h)},Oy=new An(0),Fy=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Fn(6,"invalid zlib data"),(t[1]>>5&1)==1&&Fn(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function By(t,e){return Uy(t.subarray(Fy(t),-4),{i:2},e,e)}var Tu=typeof TextDecoder<"u"&&new TextDecoder,ky=0;try{Tu.decode(Oy,{stream:!0}),ky=1}catch{}var zy=function(t){for(var e="",n=0;;){var s=t[n++],a=(s>127)+(s>223)+(s>239);if(n+a>t.length)return{s:e,r:L0(t,n-1)};a?a==3?(s=((s&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|s>>10,56320|s&1023)):a&1?e+=String.fromCharCode((s&31)<<6|t[n++]&63):e+=String.fromCharCode((s&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(s)}};function Vy(t,e){{for(var n=new An(t.length),s=0;s<t.length;++s)n[s]=t.charCodeAt(s);return n}for(var a=t.length,s=0;s<a;++s);}function Hy(t,e){var n;if(Tu)return Tu.decode(t);var s=zy(t),a=s.s,n=s.r;return n.length&&Fn(8),a}const rd=t=>{const e=atob(t);return Hy(By(Vy(e)))},ih=t=>typeof t<"u",el=t=>typeof t=="number",{isArray:qs}=Array,Fr=(t,e)=>xt(t)&&t.startsWith(e),Gy=(t,e)=>xt(t)&&t.endsWith(e),{entries:Qi}=Object,{keys:ss}=Object,rh=t=>{if(t){if(typeof t=="number")return new Date(t);const e=Date.parse(t.toString());if(!Number.isNaN(e))return new Date(e)}return null},zl=t=>Fr(t,"/")&&t[1]!=="/",D0=[...new Array(6)].map((t,e)=>`[vp-content] h${e+1}`).join(","),Wy=(t,e=2)=>{if(e===!1)return[];const[n,s]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e,a=t.filter(r=>r.level>=n&&r.level<=s),i=[];e:for(let r=0;r<a.length;r++){const o=a[r];if(r===0)i.push(o);else{for(let l=r-1;l>=0;l--){const u=a[l];if(u.level<o.level){u.children.push(o);continue e}}i.push(o)}}return i},$y=(t,e=[])=>{let n;if(e.length){const s=t.cloneNode(!0);s.querySelectorAll(e.join(",")).forEach(a=>{a.remove()}),n=s.textContent||""}else n=t.textContent||"";return n.trim()},Xy=(t=D0,e=[])=>Array.from(document.querySelectorAll(t)).filter(n=>n.id&&n.hasChildNodes()).map(n=>({element:n,title:$y(n,e),link:`#${n.id}`,slug:n.id,level:Number(n.tagName[1]),children:[]})),qy=({selector:t=D0,levels:e=2,ignore:n=[]}={})=>Wy(Xy(t,n),e),I0=t=>t.every(e=>e.type===Yt?!0:e.type===hn?e.children==null||qs(e.children)&&I0(e.children):!1),Ui=t=>t==null?!0:qs(t)?I0(t):!1,yn=(t,e)=>{const n=(e?._instance??Qs())?.appContext.components;return n?t in n||xn(t)in n||qr(xn(t))in n:!1},yc="message-container";class oh{elements;constructor(){this.elements={}}static get containerElement(){let e=document.getElementById(yc);return e||(e=document.createElement("div"),e.id=yc,document.body.appendChild(e),e)}getElement(e){return this.elements[e]}pop(e,n=2e3,s=!0){const a=Date.now(),i=document.createElement("div");return i.className="message-item move-in",i.innerHTML=e,oh.containerElement.appendChild(i),this.elements[a]=i,s&&i.addEventListener("click",()=>{this.close(a)}),n>0&&setTimeout(()=>{this.close(a)},n),a}close(e){if(e){const n=this.elements[e];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.elements[e]})}else ss(this.elements).forEach(n=>{this.close(Number(n))})}destroy(){const e=document.getElementById(yc);e&&document.body.removeChild(e),this.elements={}}}const jy=(t={})=>{const e=je([]);return ea(n=>{e.value=n==="beforeUnmount"?[]:qy(at(t))}),e},Yy=t=>{const e=x0();return $(()=>at(t)[e.value]??{})},er=Yy;function tr(t,e){return Fp()?(x_(t,e),!0):!1}const bc=new WeakMap,Ky=(...t)=>{var e;const n=t[0],s=(e=Qs())===null||e===void 0?void 0:e.proxy,a=s??Fp();if(a==null&&!ug())throw new Error("injectLocal must be called in setup");return a&&bc.has(a)&&n in bc.get(a)?bc.get(a)[n]:Rt(...t)},Vl=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Zy=t=>t!=null,Jy=Object.prototype.toString,Qy=t=>Jy.call(t)==="[object Object]",js=()=>{};function N0(...t){if(t.length!==1)return Zi(...t);const e=t[0];return typeof e=="function"?$s(ag(()=>({get:e,set:js}))):je(e)}function lh(t,e){function n(...s){return new Promise((a,i)=>{Promise.resolve(t(()=>e.apply(this,s),{fn:e,thisArg:this,args:s})).then(a).catch(i)})}return n}const U0=t=>t();function eb(t,e={}){let n,s,a=js;const i=l=>{clearTimeout(l),a(),a=js};let r;return l=>{const u=at(t),c=at(e.maxWait);return n&&i(n),u<=0||c!==void 0&&c<=0?(s&&(i(s),s=void 0),Promise.resolve(l())):new Promise((p,h)=>{a=e.rejectOnCancel?h:p,r=l,c&&!s&&(s=setTimeout(()=>{n&&i(n),s=void 0,p(r())},c)),n=setTimeout(()=>{s&&i(s),s=void 0,p(l())},u)})}}function tb(...t){let e=0,n,s=!0,a=js,i,r,o,l,u;!zt(t[0])&&typeof t[0]=="object"?{delay:r,trailing:o=!0,leading:l=!0,rejectOnCancel:u=!1}=t[0]:[r,o=!0,l=!0,u=!1]=t;const c=()=>{n&&(clearTimeout(n),n=void 0,a(),a=js)};return h=>{const f=at(r),v=Date.now()-e,_=()=>i=h();return c(),f<=0?(e=Date.now(),_()):(v>f?(e=Date.now(),(l||!s)&&_()):o&&(i=new Promise((g,m)=>{a=u?m:g,n=setTimeout(()=>{e=Date.now(),s=!0,g(_()),c()},Math.max(0,f-v))})),!l&&!n&&(n=setTimeout(()=>s=!0,f)),s=!1,i)}}function nb(t=U0,e={}){const{initialState:n="active"}=e,s=N0(n==="active");function a(){s.value=!1}function i(){s.value=!0}const r=(...o)=>{s.value&&t(...o)};return{isActive:$s(s),pause:a,resume:i,eventFilter:r}}function sb(t){let e;function n(){return e||(e=t()),e}return n.reset=async()=>{const s=e;e=void 0,s&&await s},n}function od(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function Rr(t){return Array.isArray(t)?t:[t]}function O0(t){return Qs()}function F0(t,e=200,n={}){return lh(eb(e,n),t)}function B0(t,e=200,n=!1,s=!0,a=!1){return lh(tb(e,n,s,a),t)}function ab(t,e,n={}){const{eventFilter:s=U0,...a}=n;return Lt(t,lh(s,e),a)}function ib(t,e,n={}){const{eventFilter:s,initialState:a="active",...i}=n,{eventFilter:r,pause:o,resume:l,isActive:u}=nb(s,{initialState:a});return{stop:ab(t,e,{...i,eventFilter:r}),pause:o,resume:l,isActive:u}}const rb=ib;function nr(t,e=!0,n){O0()?vt(t,n):e?t():Ms(t)}function ob(t,e){O0()&&Js(t,e)}function lb(t,e,n={}){const{immediate:s=!0,immediateCallback:a=!1}=n,i=Ye(!1);let r;function o(){r&&(clearTimeout(r),r=void 0)}function l(){i.value=!1,o()}function u(...c){a&&t(),o(),i.value=!0,r=setTimeout(()=>{i.value=!1,r=void 0,t(...c)},at(e))}return s&&(i.value=!0,Vl&&u()),tr(l),{isPending:k_(i),start:u,stop:l}}function Br(t=!1,e={}){const{truthyValue:n=!0,falsyValue:s=!1}=e,a=zt(t),i=Ye(t);function r(o){if(arguments.length)return i.value=o,i.value;{const l=at(n);return i.value=i.value===l?at(s):l,i.value}}return a?r:[i,r]}function ys(t,e,n){return Lt(t,e,{...n,immediate:!0})}const Zt=Vl?window:void 0,k0=Vl?window.document:void 0,z0=Vl?window.navigator:void 0;function Pn(t){var e;const n=at(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function lt(...t){const e=(s,a,i,r)=>(s.addEventListener(a,i,r),()=>s.removeEventListener(a,i,r)),n=$(()=>{const s=Rr(at(t[0])).filter(a=>a!=null);return s.every(a=>typeof a!="string")?s:void 0});return ys(()=>{var s,a;return[(s=(a=n.value)===null||a===void 0?void 0:a.map(i=>Pn(i)))!==null&&s!==void 0?s:[Zt].filter(i=>i!=null),Rr(at(n.value?t[1]:t[0])),Rr(Jn(n.value?t[2]:t[1])),at(n.value?t[3]:t[2])]},([s,a,i,r],o,l)=>{if(!s?.length||!a?.length||!i?.length)return;const u=Qy(r)?{...r}:r,c=s.flatMap(p=>a.flatMap(h=>i.map(f=>e(p,h,f,u))));l(()=>{c.forEach(p=>p())})},{flush:"post"})}function cb(){const t=Ye(!1),e=Qs();return e&&vt(()=>{t.value=!0},e),t}function sr(t){const e=cb();return $(()=>(e.value,!!t()))}function V0(t,e,n={}){const{window:s=Zt,...a}=n;let i;const r=sr(()=>s&&"MutationObserver"in s),o=()=>{i&&(i.disconnect(),i=void 0)},l=Lt($(()=>{const p=Rr(at(t)).map(Pn).filter(Zy);return new Set(p)}),p=>{o(),r.value&&p.size&&(i=new MutationObserver(e),p.forEach(h=>i.observe(h,a)))},{immediate:!0,flush:"post"}),u=()=>i?.takeRecords(),c=()=>{l(),o()};return tr(c),{isSupported:r,stop:c,takeRecords:u}}function ub(t,e,n={}){const{window:s=Zt,document:a=s?.document,flush:i="sync"}=n;if(!s||!a)return js;let r;const o=c=>{r?.(),r=c},l=Hp(()=>{const c=Pn(t);if(c){const{stop:p}=V0(a,h=>{h.map(f=>[...f.removedNodes]).flat().some(f=>f===c||f.contains(c))&&e(h)},{window:s,childList:!0,subtree:!0});o(p)}},{flush:i}),u=()=>{l(),o()};return tr(u),u}const pb=Symbol("vueuse-ssr-width");function hb(){const t=ug()?Ky(pb,null):null;return typeof t=="number"?t:void 0}function ch(t,e={}){const{window:n=Zt,ssrWidth:s=hb()}=e,a=sr(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),i=Ye(typeof s=="number"),r=Ye(),o=Ye(!1),l=u=>{o.value=u.matches};return Hp(()=>{if(i.value){i.value=!a.value,o.value=at(t).split(",").some(u=>{const c=u.includes("not all"),p=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),h=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let f=!!(p||h);return p&&f&&(f=s>=od(p[1])),h&&f&&(f=s<=od(h[1])),c?!f:f});return}a.value&&(r.value=n.matchMedia(at(t)),o.value=r.value.matches)}),lt(r,"change",l,{passive:!0}),$(()=>o.value)}function ld(t,e={}){const{controls:n=!1,navigator:s=z0}=e,a=sr(()=>s&&"permissions"in s),i=Ye(),r=typeof t=="string"?{name:t}:t,o=Ye(),l=()=>{var c,p;o.value=(c=(p=i.value)===null||p===void 0?void 0:p.state)!==null&&c!==void 0?c:"prompt"};lt(i,"change",l,{passive:!0});const u=sb(async()=>{if(a.value){if(!i.value)try{i.value=await s.permissions.query(r)}catch{i.value=void 0}finally{l()}if(n)return st(i.value)}});return u(),n?{state:o,isSupported:a,query:u}:o}function fb(t={}){const{navigator:e=z0,read:n=!1,source:s,copiedDuring:a=1500,legacy:i=!1}=t,r=sr(()=>e&&"clipboard"in e),o=ld("clipboard-read"),l=ld("clipboard-write"),u=$(()=>r.value||i),c=Ye(""),p=Ye(!1),h=lb(()=>p.value=!1,a,{immediate:!1});async function f(){let M=!(r.value&&m(o.value));if(!M)try{c.value=await e.clipboard.readText()}catch{M=!0}M&&(c.value=g())}u.value&&n&&lt(["copy","cut"],f,{passive:!0});async function v(M=at(s)){if(u.value&&M!=null){let x=!(r.value&&m(l.value));if(!x)try{await e.clipboard.writeText(M)}catch{x=!0}x&&_(M),c.value=M,p.value=!0,h.start()}}function _(M){const x=document.createElement("textarea");x.value=M,x.style.position="absolute",x.style.opacity="0",x.setAttribute("readonly",""),document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function g(){var M,x,S;return(M=(x=document)===null||x===void 0||(S=x.getSelection)===null||S===void 0||(S=S.call(x))===null||S===void 0?void 0:S.toString())!==null&&M!==void 0?M:""}function m(M){return M==="granted"||M==="prompt"}return{isSupported:u,text:$s(c),copied:$s(p),copy:v}}const Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Eo="__vueuse_ssr_handlers__",db=mb();function mb(){return Eo in Mo||(Mo[Eo]=Mo[Eo]||{}),Mo[Eo]}function gb(t,e){return db[t]||e}function vb(t){return ch("(prefers-color-scheme: dark)",t)}function _b(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const xb={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},cd="vueuse-storage";function ni(t,e,n,s={}){var a;const{flush:i="pre",deep:r=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:p=Zt,eventFilter:h,onError:f=V=>{console.error(V)},initOnMounted:v}=s,_=(c?Ye:je)(typeof e=="function"?e():e),g=$(()=>at(t));if(!n)try{n=gb("getDefaultStorage",()=>Zt?.localStorage)()}catch(V){f(V)}if(!n)return _;const m=at(e),M=_b(m),x=(a=s.serializer)!==null&&a!==void 0?a:xb[M],{pause:S,resume:T}=rb(_,V=>E(V),{flush:i,deep:r,eventFilter:h});Lt(g,()=>U(),{flush:i});let P=!1;const L=V=>{v&&!P||U(V)},O=V=>{v&&!P||k(V)};p&&o&&(n instanceof Storage?lt(p,"storage",L,{passive:!0}):lt(p,cd,O)),v?nr(()=>{P=!0,U()}):U();function b(V,X){if(p){const B={key:g.value,oldValue:V,newValue:X,storageArea:n};p.dispatchEvent(n instanceof Storage?new StorageEvent("storage",B):new CustomEvent(cd,{detail:B}))}}function E(V){try{const X=n.getItem(g.value);if(V==null)b(X,null),n.removeItem(g.value);else{const B=x.write(V);X!==B&&(n.setItem(g.value,B),b(X,B))}}catch(X){f(X)}}function D(V){const X=V?V.newValue:n.getItem(g.value);if(X==null)return l&&m!=null&&n.setItem(g.value,x.write(m)),m;if(!V&&u){const B=x.read(X);return typeof u=="function"?u(B,m):M==="object"&&!Array.isArray(B)?{...m,...B}:B}else return typeof X!="string"?X:x.read(X)}function U(V){if(!(V&&V.storageArea!==n)){if(V&&V.key==null){_.value=m;return}if(!(V&&V.key!==g.value)){S();try{const X=x.write(_.value);(V===void 0||V?.newValue!==X)&&(_.value=D(V))}catch(X){f(X)}finally{V?Ms(T):T()}}}}function k(V){U(V.detail)}return _}function uh(t,e,n={}){const{window:s=Zt,...a}=n;let i;const r=sr(()=>s&&"ResizeObserver"in s),o=()=>{i&&(i.disconnect(),i=void 0)},l=Lt($(()=>{const c=at(t);return Array.isArray(c)?c.map(p=>Pn(p)):[Pn(c)]}),c=>{if(o(),r.value&&s){i=new ResizeObserver(e);for(const p of c)p&&i.observe(p,a)}},{immediate:!0,flush:"post"}),u=()=>{o(),l()};return tr(u),{isSupported:r,stop:u}}function yb(t,e={}){const{delayEnter:n=0,delayLeave:s=0,triggerOnRemoval:a=!1,window:i=Zt}=e,r=Ye(!1);let o;const l=u=>{const c=u?n:s;o&&(clearTimeout(o),o=void 0),c?o=setTimeout(()=>r.value=u,c):r.value=u};return i&&(lt(t,"mouseenter",()=>l(!0),{passive:!0}),lt(t,"mouseleave",()=>l(!1),{passive:!0}),a&&ub($(()=>Pn(t)),()=>l(!1))),r}function bb(t,e={width:0,height:0},n={}){const{window:s=Zt,box:a="content-box"}=n,i=$(()=>{var p;return(p=Pn(t))===null||p===void 0||(p=p.namespaceURI)===null||p===void 0?void 0:p.includes("svg")}),r=Ye(e.width),o=Ye(e.height),{stop:l}=uh(t,([p])=>{const h=a==="border-box"?p.borderBoxSize:a==="content-box"?p.contentBoxSize:p.devicePixelContentBoxSize;if(s&&i.value){const f=Pn(t);if(f){const v=f.getBoundingClientRect();r.value=v.width,o.value=v.height}}else if(h){const f=Rr(h);r.value=f.reduce((v,{inlineSize:_})=>v+_,0),o.value=f.reduce((v,{blockSize:_})=>v+_,0)}else r.value=p.contentRect.width,o.value=p.contentRect.height},n);nr(()=>{const p=Pn(t);p&&(r.value="offsetWidth"in p?p.offsetWidth:e.width,o.value="offsetHeight"in p?p.offsetHeight:e.height)});const u=Lt(()=>Pn(t),p=>{r.value=p?e.width:0,o.value=p?e.height:0});function c(){l(),u()}return{width:r,height:o,stop:c}}const ud=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Hl(t,e={}){const{document:n=k0,autoExit:s=!1}=e,a=$(()=>{var M;return(M=Pn(t))!==null&&M!==void 0?M:n?.documentElement}),i=Ye(!1),r=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(M=>n&&M in n||a.value&&M in a.value)),o=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(M=>n&&M in n||a.value&&M in a.value)),l=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(M=>n&&M in n||a.value&&M in a.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(M=>n&&M in n),c=sr(()=>a.value&&n&&r.value!==void 0&&o.value!==void 0&&l.value!==void 0),p=()=>u?n?.[u]===a.value:!1,h=()=>{if(l.value){if(n&&n[l.value]!=null)return n[l.value];{const M=a.value;if(M?.[l.value]!=null)return!!M[l.value]}}return!1};async function f(){if(!(!c.value||!i.value)){if(o.value)if(n?.[o.value]!=null)await n[o.value]();else{const M=a.value;M?.[o.value]!=null&&await M[o.value]()}i.value=!1}}async function v(){if(!c.value||i.value)return;h()&&await f();const M=a.value;r.value&&M?.[r.value]!=null&&(await M[r.value](),i.value=!0)}async function _(){await(i.value?f():v())}const g=()=>{const M=h();(!M||M&&p())&&(i.value=M)},m={capture:!1,passive:!0};return lt(n,ud,g,m),lt(()=>Pn(a),ud,g,m),nr(g,!1),s&&tr(f),{isSupported:c,isFullscreen:i,enter:v,exit:f,toggle:_}}function Sc(t){return typeof Window<"u"&&t instanceof Window?t.document.documentElement:typeof Document<"u"&&t instanceof Document?t.documentElement:t}const pd=1;function Sb(t,e={}){const{throttle:n=0,idle:s=200,onStop:a=js,onScroll:i=js,offset:r={left:0,right:0,top:0,bottom:0},observe:o={mutation:!1},eventListenerOptions:l={capture:!1,passive:!0},behavior:u="auto",window:c=Zt,onError:p=b=>{console.error(b)}}=e,h=typeof o=="boolean"?{mutation:o}:o,f=Ye(0),v=Ye(0),_=$({get(){return f.value},set(b){m(b,void 0)}}),g=$({get(){return v.value},set(b){m(void 0,b)}});function m(b,E){var D,U,k,V;if(!c)return;const X=at(t);if(!X)return;(D=X instanceof Document?c.document.body:X)===null||D===void 0||D.scrollTo({top:(U=at(E))!==null&&U!==void 0?U:g.value,left:(k=at(b))!==null&&k!==void 0?k:_.value,behavior:at(u)});const B=(X==null||(V=X.document)===null||V===void 0?void 0:V.documentElement)||X?.documentElement||X;_!=null&&(f.value=B.scrollLeft),g!=null&&(v.value=B.scrollTop)}const M=Ye(!1),x=Za({left:!0,right:!1,top:!0,bottom:!1}),S=Za({left:!1,right:!1,top:!1,bottom:!1}),T=b=>{M.value&&(M.value=!1,S.left=!1,S.right=!1,S.top=!1,S.bottom=!1,a(b))},P=F0(T,n+s),L=b=>{var E;if(!c)return;const D=(b==null||(E=b.document)===null||E===void 0?void 0:E.documentElement)||b?.documentElement||Pn(b),{display:U,flexDirection:k,direction:V}=c.getComputedStyle(D),X=V==="rtl"?-1:1,B=D.scrollLeft;S.left=B<f.value,S.right=B>f.value;const G=Math.abs(B*X)<=(r.left||0),q=Math.abs(B*X)+D.clientWidth>=D.scrollWidth-(r.right||0)-pd;U==="flex"&&k==="row-reverse"?(x.left=q,x.right=G):(x.left=G,x.right=q),f.value=B;let le=D.scrollTop;b===c.document&&!le&&(le=c.document.body.scrollTop),S.top=le<v.value,S.bottom=le>v.value;const ge=Math.abs(le)<=(r.top||0),be=Math.abs(le)+D.clientHeight>=D.scrollHeight-(r.bottom||0)-pd;U==="flex"&&k==="column-reverse"?(x.top=be,x.bottom=ge):(x.top=ge,x.bottom=be),v.value=le},O=b=>{var E;c&&(L((E=b.target.documentElement)!==null&&E!==void 0?E:b.target),M.value=!0,P(b),i(b))};return lt(t,"scroll",n?B0(O,n,!0,!1):O,l),nr(()=>{try{const b=at(t);if(!b)return;L(b)}catch(b){p(b)}}),h?.mutation&&t!=null&&t!==c&&t!==document&&V0(t,()=>{const b=at(t);b&&L(b)},{attributes:!0,childList:!0,subtree:!0}),lt(t,"scrollend",T,l),{x:_,y:g,isScrolling:M,arrivedState:x,directions:S,measure(){const b=at(t);c&&b&&L(b)}}}function Mb(t,e,n={}){const{window:s=Zt}=n;return ni(t,e,s?.localStorage,n)}function Eb(t={}){const{window:e=Zt}=t;if(!e)return Ye(["en"]);const n=e.navigator,s=Ye(n.languages);return lt(e,"languagechange",()=>{s.value=n.languages},{passive:!0}),s}function wb(t,e=js,n={}){const{immediate:s=!0,manual:a=!1,type:i="text/javascript",async:r=!0,crossOrigin:o,referrerPolicy:l,noModule:u,defer:c,document:p=k0,attrs:h={},nonce:f=void 0}=n,v=Ye(null);let _=null;const g=x=>new Promise((S,T)=>{const P=E=>(v.value=E,S(E),E);if(!p){S(!1);return}let L=!1,O=p.querySelector(`script[src="${at(t)}"]`);O?O.hasAttribute("data-loaded")&&P(O):(O=p.createElement("script"),O.type=i,O.async=r,O.src=at(t),c&&(O.defer=c),o&&(O.crossOrigin=o),u&&(O.noModule=u),l&&(O.referrerPolicy=l),f&&(O.nonce=f),Object.entries(h).forEach(([E,D])=>O?.setAttribute(E,D)),L=!0);const b={passive:!0};lt(O,"error",E=>T(E),b),lt(O,"abort",E=>T(E),b),lt(O,"load",()=>{O.setAttribute("data-loaded","true"),e(O),P(O)},b),L&&(O=p.head.appendChild(O)),x||P(O)}),m=(x=!0)=>(_||(_=g(x)),_),M=()=>{if(!p)return;_=null,v.value&&(v.value=null);const x=p.querySelector(`script[src="${at(t)}"]`);x&&p.head.removeChild(x)};return s&&!a&&nr(m),a||ob(M),{scriptTag:v,load:m,unload:M}}const Mc=new WeakMap;function ph(t,e=!1){const n=Ye(e);let s="";Lt(N0(t),r=>{const o=Sc(at(r));if(o){const l=o;if(Mc.get(l)||Mc.set(l,l.style.overflow),l.style.overflow!=="hidden"&&(s=l.style.overflow),l.style.overflow==="hidden")return n.value=!0;if(n.value)return l.style.overflow="hidden"}},{immediate:!0});const a=()=>{const r=Sc(at(t));!r||n.value||(r.style.overflow="hidden",n.value=!0)},i=()=>{const r=Sc(at(t));!r||!n.value||(r.style.overflow=s,Mc.delete(r),n.value=!1)};return tr(i),$({get(){return n.value},set(r){r?a():i()}})}function hh(t,e,n={}){const{window:s=Zt}=n;return ni(t,e,s?.sessionStorage,n)}function Tb(t={}){const{window:e=Zt,...n}=t;return Sb(e,n)}function Ab(t={}){const{window:e=Zt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:s=Number.POSITIVE_INFINITY,listenOrientation:a=!0,includeScrollbar:i=!0,type:r="inner"}=t,o=Ye(n),l=Ye(s),u=()=>{if(e)if(r==="outer")o.value=e.outerWidth,l.value=e.outerHeight;else if(r==="visual"&&e.visualViewport){const{width:p,height:h,scale:f}=e.visualViewport;o.value=Math.round(p*f),l.value=Math.round(h*f)}else i?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};u(),nr(u);const c={passive:!0};return lt("resize",u,c),e&&r==="visual"&&e.visualViewport&&lt(e.visualViewport,"resize",u,c),a&&Lt(ch("(orientation: portrait)"),()=>u()),{width:o,height:l}}const H0=(t=!0)=>{const{frontmatter:e,page:n}=ti();return $(()=>e.value.contributors===!1||!at(t)?[]:n.value.git.contributors??[])};var hd={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新"}};const Cb=typeof hd>"u"?{}:hd,G0=()=>er(Cb),Rb=(t=!0)=>{const{lang:e,page:n}=ti(),s=G0();return $(()=>{if(!at(t))return null;const a=n.value.git?.updatedTime??n.value.git?.changelog?.[0].time;if(!a)return null;const i=new Date(a),r=new Intl.DateTimeFormat(e.value,{dateStyle:"short",timeStyle:"short"}).format(a);return{date:i,text:r,iso:i.toISOString(),locale:s.value.latestUpdateAt}})},Pb=({level:t=2,text:e,anchor:n})=>d(`h${t||2}`,{id:n,tabindex:"-1"},d("a",{href:`#${n}`,class:"header-anchor"},d("span",e))),Lb=({name:t,url:e,avatar:n})=>d(e?"a":"span",{href:e,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[n?d("img",{src:n,alt:"",class:"vp-contributor-avatar"}):null,d("span",{class:"vp-contributor-name"},t)]),Db=xe({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(t){const e=H0(),n=G0();return()=>e.value.length?[d(Pb,{level:t.headerLevel,anchor:"doc-contributors",text:t.title||n.value.contributors}),d("div",{class:"vp-contributors"},e.value.map(s=>d(Lb,s)))]:null}}),Ib={enhance:({app:t})=>{t.component("GitContributors",Db)}},Nb=Object.freeze(Object.defineProperty({__proto__:null,default:Ib},Symbol.toStringTag,{value:"Module"})),Ub=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Ob=rs({enhance:({app:t})=>{}}),Fb=Object.freeze(Object.defineProperty({__proto__:null,default:Ob},Symbol.toStringTag,{value:"Module"})),Bb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),kb=rs({setup(){lt("beforeprint",()=>{document.querySelectorAll("details").forEach(t=>{t.open=!0})},{passive:!0})}}),zb=Object.freeze(Object.defineProperty({__proto__:null,default:kb},Symbol.toStringTag,{value:"Module"})),Vb="VUEPRESS_CODE_TAB_STORE",wo=ni(Vb,{}),Hb=xe({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(t,{slots:e}){let n=t.data.map(()=>_g());const s=je(t.active),a=Ye([]),i=()=>{t.tabId&&(wo.value[t.tabId]=t.data[s.value].id)},r=(c=s.value)=>{s.value=c<a.value.length-1?c+1:0,a.value[s.value].focus()},o=(c=s.value)=>{s.value=c>0?c-1:a.value.length-1,a.value[s.value].focus()},l=(c,p)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),s.value=p):c.key==="ArrowRight"?(c.preventDefault(),r()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),t.tabId&&(wo.value[t.tabId]=t.data[s.value].id)},u=()=>{if(t.tabId){const c=t.data.findIndex(({id:p})=>wo.value[t.tabId]===p);if(c!==-1)return c}return t.active};return vt(()=>{s.value=u(),Lt(()=>t.tabId&&wo.value[t.tabId],(c,p)=>{if(t.tabId&&c!==p){const h=t.data.findIndex(({id:f})=>f===c);h!==-1&&(s.value=h)}})}),()=>t.data.length?d("div",{class:"vp-code-tabs"},[d("div",{class:"vp-code-tabs-nav",role:"tablist"},t.data.map(({id:c},p)=>{const h=p===s.value;return d("button",{type:"button",ref:f=>{f&&(a.value[p]=f)},class:["vp-code-tab-nav",{active:h}],role:"tab","aria-controls":n[p],"aria-selected":h,onClick:()=>{s.value=p,i()},onKeydown:f=>{l(f,p)}},e[`title${p}`]({value:c,isActive:h}))})),t.data.map(({id:c},p)=>{const h=p===s.value;return d("div",{class:["vp-code-tab",{active:h}],id:n[p],role:"tabpanel","aria-expanded":h},[d("div",{class:"vp-code-tab-title"},e[`title${p}`]({value:c,isActive:h})),e[`tab${p}`]({value:c,isActive:h})])})]):null}}),Gb="VUEPRESS_TAB_STORE",Ec=ni(Gb,{}),Wb=xe({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(t,{slots:e}){let n=t.data.map(()=>_g());const s=je(t.active),a=Ye([]),i=()=>{t.tabId&&(Ec.value[t.tabId]=t.data[s.value].id)},r=(c=s.value)=>{s.value=c<a.value.length-1?c+1:0,a.value[s.value].focus()},o=(c=s.value)=>{s.value=c>0?c-1:a.value.length-1,a.value[s.value].focus()},l=(c,p)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),s.value=p):c.key==="ArrowRight"?(c.preventDefault(),r()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),i()},u=()=>{if(t.tabId){const c=t.data.findIndex(({id:p})=>Ec.value[t.tabId]===p);if(c!==-1)return c}return t.active};return vt(()=>{s.value=u(),Lt(()=>t.tabId&&Ec.value[t.tabId],(c,p)=>{if(t.tabId&&c!==p){const h=t.data.findIndex(({id:f})=>f===c);h!==-1&&(s.value=h)}})}),()=>t.data.length?d("div",{class:"vp-tabs"},[d("div",{class:"vp-tabs-nav",role:"tablist"},t.data.map(({id:c},p)=>{const h=p===s.value;return d("button",{type:"button",ref:f=>{f&&(a.value[p]=f)},class:["vp-tab-nav",{active:h}],role:"tab","aria-controls":n[p],"aria-selected":h,onClick:()=>{s.value=p,i()},onKeydown:f=>{l(f,p)}},e[`title${p}`]({value:c,isActive:h}))})),t.data.map(({id:c},p)=>{const h=p===s.value;return d("div",{class:["vp-tab",{active:h}],id:n[p],role:"tabpanel","aria-expanded":h},[d("div",{class:"vp-tab-title"},e[`title${p}`]({value:c,isActive:h})),e[`tab${p}`]({value:c,isActive:h})])})]):null}}),$b={enhance:({app:t})=>{t.component("CodeTabs",Hb),t.component("Tabs",Wb)}},Xb=Object.freeze(Object.defineProperty({__proto__:null,default:$b},Symbol.toStringTag,{value:"Module"})),qb='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',jb='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var Yb={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const wc=Yb,fd={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},Kb=(t,e,n)=>{const s=document.createElement(t);return wa(e)&&ss(e).forEach(a=>{if(a.indexOf("data"))s[a]=e[a];else{const i=a.replace("data","");s.dataset[i]=e[a]}}),s},fh=t=>({...wc,...t,jsLib:[...new Set([wc.jsLib,t.jsLib??[]].flat())],cssLib:[...new Set([wc.cssLib,t.cssLib??[]].flat())]}),Oi=(t,e)=>{if(ih(t[e]))return t[e];const n=new Promise(s=>{const a=document.createElement("script");a.src=e,document.querySelector("body")?.append(a),a.addEventListener("load",()=>{s()})});return t[e]=n,n},Zb=(t,e)=>{if(e.css&&[...t.childNodes].every(n=>n.nodeName!=="STYLE")){const n=Kb("style",{innerHTML:e.css});t.append(n)}},Jb=(t,e,n)=>{const s=n.getScript();if(s&&[...e.childNodes].every(a=>a.nodeName!=="SCRIPT")){const a=document.createElement("script");a.append(document.createTextNode(`{const document=window.document.querySelector('#${t} .vp-code-demo-display').shadowRoot;
${s}}`)),e.append(a)}},Qb=["html","js","css"],eS=t=>{const e=ss(t),n={html:[],js:[],css:[],isLegal:!1};return Qb.forEach(s=>{const a=e.filter(i=>fd[s].types.includes(i));if(a.length>0){const[i]=a;n[s]=[t[i].replaceAll(/^\n|\n$/g,""),fd[s].map[i]??i]}}),n.isLegal=(n.html.length===0||n.html[1]==="none")&&(n.js.length===0||n.js[1]==="none")&&(n.css.length===0||n.css[1]==="none"),n},W0=t=>t.replaceAll(String.raw`<br \/>`,"<br>").replaceAll(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),$0=t=>`<div id="app">
${W0(t)}
</div>`,tS=t=>`${t.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,nS=t=>t.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),X0=t=>`(function(exports){var module={};module.exports=exports;${t};return module.exports.__esModule?exports.default:module.exports;})({})`,sS=(t,e)=>{const n=fh(e),s=t.js[0]??"";return{...n,html:W0(t.html[0]??""),js:s,css:t.css[0]??"",isLegal:t.isLegal,getScript:()=>n.useBabel?window.Babel?.transform(s,{presets:["es2015"]})?.code??"":s}},aS=/<template>([\s\S]+)<\/template>/u,iS=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,rS=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,oS=(t,e)=>{const n=fh(e),s=t.html[0]??"",a=aS.exec(s),i=iS.exec(s),r=rS.exec(s),o=a?.[1].replaceAll(/^\n|\n$/g,"")??"",[l="",u=""]=i?[i[4].replaceAll(/^\n|\n$/g,""),i[3]]:[],[c="",p=""]=r?[r[4].replaceAll(/^\n|\n$/g,""),r[3]]:[],h=u===""&&(p===""||p==="css");return{...n,html:$0(o),js:nS(l),css:c,isLegal:h,jsLib:[n.vue,...n.jsLib],getScript:()=>{const f=e.useBabel?window.Babel?.transform(l,{presets:["es2015"]})?.code??"":l.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${X0(f)};appOptions.template=\`${o.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},lS=(t,e)=>{const n=fh(e),s=t.js[0]??"";return{...n,html:$0(""),js:tS(s),css:t.css[0]??t.js[0]?.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim()??"",isLegal:t.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{const a=window.Babel?.transform(s,{presets:["es2015","react"]})?.code??"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${X0(a)}))`}}},Fi={},cS=async t=>{await Promise.all([Oi(Fi,t.babel),Oi(Fi,t.react),Oi(Fi,t.reactDOM)])},uS=async t=>{const e=[Oi(Fi,t.vue)];t.useBabel&&e.push(Oi(Fi,t.babel)),await Promise.all(e)},pS=t=>t.useBabel?Oi(Fi,t.babel):Promise.resolve();var hS=xe({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:String,config:String,code:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const[n,s]=Br(!1),a=Ye(),i=Ye(),r=je("0"),o=je(!1),l=$(()=>JSON.parse(t.config?rd(t.config):"{}")),u=$(()=>{const _=JSON.parse(rd(t.code));return eS(_)}),c=$(()=>t.type==="react"?lS(u.value,l.value):t.type==="vue"?oS(u.value,l.value):sS(u.value,l.value)),p=$(()=>c.value.isLegal),h=(_=!1)=>{const g=a.value.attachShadow({mode:"open"}),m=document.createElement("div");m.classList.add("code-demo-app"),g.append(m),p.value?(_&&(m.innerHTML=c.value.html),Zb(g,c.value),Jb(t.id,g,c.value),r.value="0"):r.value="auto",o.value=!0},f=async()=>{switch(t.type){case"react":{await cS(c.value),h();break}case"vue":{await uS(c.value),h();break}default:await pS(c.value),h(!0)}};let v=null;return lt("beforeprint",()=>{s(!0)}),lt("afterprint",()=>{v!==null&&s(v),v=null}),uh(i,()=>{n.value&&(r.value=`${i.value.clientHeight+14}px`)}),vt(async()=>{await f()}),()=>d("div",{class:"vp-container vp-code-demo",id:t.id},[d("div",{class:"vp-container-header"},[c.value.isLegal?d("button",{type:"button",title:"toggle",class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{r.value=n.value?"0":`${i.value.clientHeight+14}px`,s()}}):null,t.title?d("span",{class:"vp-container-title"},decodeURIComponent(t.title)):null,c.value.isLegal&&(c.value.jsfiddle??!0)?d("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[d("input",{type:"hidden",name:"html",value:c.value.html}),d("input",{type:"hidden",name:"js",value:c.value.js}),d("input",{type:"hidden",name:"css",value:c.value.css}),d("input",{type:"hidden",name:"wrap",value:"1"}),d("input",{type:"hidden",name:"panel_js",value:"3"}),d("input",{type:"hidden",name:"resources",value:[...c.value.cssLib,...c.value.jsLib].join(",")}),d("button",{type:"submit",class:"jsfiddle-button",innerHTML:jb,"aria-label":"JSFiddle","data-balloon-pos":"down"})]):null,!c.value.isLegal||(c.value.codepen??!0)?d("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[d("input",{type:"hidden",name:"data",value:JSON.stringify({html:c.value.html,js:c.value.js,css:c.value.css,js_external:c.value.jsLib.join(";"),css_external:c.value.cssLib.join(";"),layout:c.value.codepenLayout,html_pre_processor:u.value.html[1]??"none",js_pre_processor:u.value.js[1]??(c.value.jsx?"babel":"none"),css_pre_processor:u.value.css[1]??"none",editors:c.value.codepenEditors})}),d("button",{type:"submit",innerHTML:qb,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"down"})]):null]),o.value?null:d(E0,{class:"vp-code-demo-loading"}),d("div",{ref:a,class:"vp-code-demo-display",style:{display:p.value&&o.value?"block":"none"}}),d("div",{class:"vp-code-demo-code-wrapper",style:{height:r.value}},d("div",{ref:i,class:"vp-code-demo-codes"},e.default()))])}}),fS=xe({name:"MdDemo",props:{id:{type:String,required:!0},title:String},slots:Object,setup(t,{slots:e}){const[n,s]=Br(!1),a=Ye(),i=je("0");let r=null;return lt("beforeprint",()=>{s(!0)}),lt("afterprint",()=>{r!==null&&s(r),r=null}),uh(a,()=>{n.value&&(i.value=`${a.value.clientHeight+14}px`)}),()=>d("div",{class:"vp-container vp-md-demo",id:t.id},[d("div",{class:"vp-container-header"},[d("button",{type:"button",title:"toggle",class:["vp-md-demo-toggle-button",n.value?"down":"end"],onClick:()=>{i.value=n.value?"0":`${a.value.clientHeight+14}px`,s()}}),t.title?d("div",{class:"vp-container-title"},decodeURIComponent(t.title)):null]),d("div",{class:"vp-md-demo-display"},e.default()),d("div",{class:"vp-md-demo-code-wrapper",style:{height:i.value}},d("div",{ref:a,class:"vp-md-demo-codes"},e.code()))])}});const dS={enhance:({app:t})=>{t.component("CodeDemo",hS),t.component("MdDemo",fS)}},mS=Object.freeze(Object.defineProperty({__proto__:null,default:dS},Symbol.toStringTag,{value:"Module"})),gS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),vS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),_S=JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":{"tokens":["$2b$10$Oxce1OXyUtoMZPBRgFLF.e82WINNV60d02/g6awfDbor4h5XMF2FS"],"hint":"Password: 1234"}}},"author":{"name":"superxuan","url":"https://superxuan05.github.io"},"logo":"https://i.bobopic.com/tx_bobopic/89013784_bobopic.jpg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"src","footer":"默认页脚","displayFooter":true,"blog":{"description":"superxuan05的个人博客","intro":"/intro.html","medias":{"BiliBili":"https://space.bilibili.com/396245561","Email":"2758157702@qq.com","Github":"https://github.com/superxuan05","QQ":"2758157702"}},"fullscreen":true,"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routerLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":["/",{"text":"408","icon":"book","prefix":"/posts/","children":[{"text":"数据结构","icon":"pen-to-square","prefix":"/posts/数据结构/","children":[{"text":"栈","icon":"pen-to-square","link":"stack"},{"text":"队列","icon":"pen-to-square","link":"queue"},{"text":"链表","icon":"pen-to-square","link":"linked-list"},{"text":"树","icon":"pen-to-square","link":"tree"},{"text":"图","icon":"pen-to-square","link":"graph"}]},{"text":"计算机组成原理","icon":"pen-to-square","prefix":"/posts/计算机组成原理/","children":[{"text":"CPU","icon":"pen-to-square","link":"cpu"},{"text":"内存","icon":"pen-to-square","link":"memory"},{"text":"输入输出","icon":"pen-to-square","link":"input-output"}]},{"text":"操作系统","icon":"pen-to-square","prefix":"operating-system/","children":[{"text":"进程","icon":"pen-to-square","link":"process"},{"text":"线程","icon":"pen-to-square","link":"thread"},{"text":"内存管理","icon":"pen-to-square","link":"memory-management"},{"text":"文件系统","icon":"pen-to-square","link":"file-system"}]},{"text":"计算机网络","icon":"pen-to-square","prefix":"computer-network/","children":[{"text":"协议","icon":"pen-to-square","link":"protocol"},{"text":"路由","icon":"pen-to-square","link":"routing"},{"text":"传输","icon":"pen-to-square","link":"transport"}]}]},{"text":"数学","icon":"book","prefix":"/posts/","children":[{"text":"概率论","icon":"book","link":"probability-theory"},{"text":"线性代数","icon":"book","link":"linear-algebra"},{"text":"微积分","icon":"book","link":"calculus"},{"text":"数值分析","icon":"book","link":"numerical-analysis"},{"text":"概率论","icon":"book","link":"probability-theory"}]},{"text":"其他","icon":"book","prefix":"/posts/","children":[{"text":"其他","icon":"book","link":"other"}]}],"sidebar":{"/":["",{"text":"如何使用","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"文章","icon":"book","prefix":"posts/","children":"structure"},"intro"]}}}}'),xS=je(_S),q0=()=>xS,j0=Symbol(""),yS=()=>{const t=Rt(j0);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},bS=(t,e)=>{const{locales:n,...s}=t;return{...s,...n?.[e]}},SS=rs({enhance({app:t}){const e=q0(),n=t._context.provides[th],s=$(()=>bS(e.value,n.routeLocale.value));t.provide(j0,s),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return s.value}}})}}),MS=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"}));var ES={"/":{backToTop:"返回顶部"}};const wS=xe({name:"BackToTop",setup(){const t=Dn(),e=er(ES),n=Ye(),{height:s}=bb(n),{height:a}=Ab(),{y:i}=Tb(),r=$(()=>(t.value.backToTop??!0)&&i.value>100),o=$(()=>i.value/(s.value-a.value)*100);return vt(()=>{n.value=document.body}),()=>d(Gi,{name:"fade-in"},()=>r.value?d("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[d("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":o.value},d("svg",d("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*o.value*.48} ${Math.PI*(100-o.value)*.48}`}))),d("div",{class:"back-to-top-icon"})]):null)}}),TS=rs({rootComponents:[wS]}),AS=Object.freeze(Object.defineProperty({__proto__:null,default:TS},Symbol.toStringTag,{value:"Module"})),CS=/language-(shellscript|shell|bash|sh|zsh)/,RS=({selector:t,ignoreSelector:e,inlineSelector:n,duration:s=2e3,locales:a,showInMobile:i,transform:r})=>{const o=ch("(max-width: 419px)"),l=$(()=>!o.value||i),u=er(a),c=_=>{if(_.hasAttribute("copy-code"))return;const g=document.createElement("button");g.type="button",g.classList.add("vp-copy-code-button"),g.setAttribute("aria-label",u.value.copy),g.setAttribute("data-copied",u.value.copied),_.parentElement?.insertBefore(g,_),_.setAttribute("copy-code","")},p=()=>{document.body.classList.toggle("no-copy-code",!l.value),l.value&&document.querySelectorAll(t).forEach(c)};ys(l,()=>Ms(p),{flush:"post"}),ea(_=>{_!=="beforeUnmount"&&p()});const{copy:h}=fb({legacy:!0}),f=new WeakMap,v=async(_,g,m)=>{const M=g.cloneNode(!0);r&&r(M);let x=M.textContent||"";if(CS.test(_.className)&&(x=x.replace(/^ *(\$|>) /gm,"")),await h(x),s<=0)return;m.classList.add("copied"),clearTimeout(f.get(m));const S=setTimeout(()=>{m.classList.remove("copied"),m.blur(),f.delete(m)},s);f.set(m,S)};lt("click",_=>{const g=_.target;if(l.value&&g.matches('div[class*="language-"] > button.vp-copy-code-button')){const m=g.parentElement,M=g.nextElementSibling;if(!m||!M)return;v(m,M,g)}},{passive:!0})};var PS={"/":{copy:"复制代码",copied:"已复制"}};const LS=rs({setup:()=>{RS({selector:'[vp-content] div[class*="language-"] pre',ignoreSelector:"",inlineSelector:"",locales:PS,duration:2e3,showInMobile:!1})}}),DS=Object.freeze(Object.defineProperty({__proto__:null,default:LS},Symbol.toStringTag,{value:"Module"})),IS=xe({name:"VPIcon",props:{type:{type:String,default:"unknown"},prefix:String,icon:String,color:String,size:[String,Number],verticalAlign:String,sizing:{type:String,default:"height"}},setup(t){const e=$(()=>t.icon?Ji(t.icon)?t.icon:zl(t.icon)?bt(t.icon):null:null),n=$(()=>{const a={},{type:i,verticalAlign:r,size:o,sizing:l}=t,u={sizing:l};return t.color&&(a.color=t.color),o&&(a["--icon-size"]=Number.isNaN(Number(o))?o:`${o}px`),r&&(a["--icon-vertical-align"]=r),i==="iconify"&&(l!=="height"&&(u.width=t.size||"1em"),l!=="width"&&(u.height=t.size||"1em")),ss(a).length&&(u.style=a),u}),s=a=>a.includes("fa-")||/^fa.$/.test(a)?a:`fa-${a}`;return()=>{const{type:a,icon:i,prefix:r="",sizing:o}=t;if(!i)return null;if(e.value)return d("img",{class:"vp-icon",src:e.value,alt:"","aria-hidden":"","no-view":"",...n.value});if(a==="iconify")return d("iconify-icon",{key:i,class:"vp-icon",icon:i.includes(":")?i:`${r}${i}`,...n.value});if(a==="fontawesome"){const[l,u]=i.includes(":")?i.split(":",2):["fas",i];return d("i",{key:i,class:["vp-icon",l.length===1?`fa${l}`:s(l),...u.split(" ").map(s),o==="height"?"":"fa-fw"],...n.value})}return d("i",{key:i,class:["vp-icon",i.includes(" ")?i:`${r}${i}`],...n.value})}}}),NS={enhance:({app:t})=>{yn("VPIcon")||t.component("VPIcon",e=>d(IS,{type:"iconify",prefix:"fa6-solid:",...e}))},setup:()=>{wb("https://cdn.jsdelivr.net/npm/iconify-icon@2")}},US=Object.freeze(Object.defineProperty({__proto__:null,default:NS},Symbol.toStringTag,{value:"Module"})),OS=je({}),Y0=Symbol(""),FS=()=>Rt(Y0),BS=t=>{t.provide(Y0,OS)},K0=t=>new Promise((e,n)=>{t.complete?e({type:"image",element:t,src:t.src,width:t.naturalWidth,height:t.naturalHeight,alt:t.alt,msrc:t.src}):(t.onload=()=>{e(K0(t))},t.onerror=()=>{n()})}),kS='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',zS=(t,{download:e=!0,fullscreen:n=!0}={})=>{t.on("uiRegister",()=>{if(t.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:s=>{const a=[];let i=-1;for(let r=0;r<t.getNumItems();r++){const o=document.createElement("div");o.className="photo-swipe-bullet",o.onclick=l=>{t.goTo(a.indexOf(l.target))},a.push(o),s.appendChild(o)}t.on("change",()=>{i>=0&&a[i].classList.remove("active"),a[t.currIndex].classList.add("active"),i=t.currIndex})}}),n){const{isSupported:s,toggle:a}=Hl();s.value&&t.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{a()}})}e&&t.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:s=>{s.setAttribute("download",""),s.setAttribute("target","_blank"),s.setAttribute("rel","noopener"),t.on("change",()=>{s.setAttribute("href",t.currSlide.data.src)})}})})},VS=({selector:t,locales:e,download:n=!0,fullscreen:s=!0,scrollToClose:a=!0})=>{const i=FS(),r=er(e),o=Dn(),l=$(()=>{const{photoSwipe:f}=o.value;return f===!1?null:xt(f)?f:qs(t)?t.join(", "):t}),u=$(()=>({...i.value,...r.value,download:n,fullscreen:s,scrollToClose:a}));let c=null,p=0,h=null;lt("click",async f=>{const v=f.target;if(!l.value||!c||!v.matches(l.value))return;p!==0&&h.destroy();const _=Date.now(),g=await c,m=Array.from(document.querySelectorAll(l.value)),M=m.map(S=>({html:kS,element:S,msrc:S.src})),x=m.findIndex(S=>S===v);h=new g({preloaderDelay:0,showHideAnimationType:"zoom",...u.value,dataSource:M,index:x,...a?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),p=_,zS(h,{download:n,fullscreen:s}),h.init(),h.on("destroy",()=>{h=null,p=0}),m.map((S,T)=>K0(S).then(P=>{p===_&&(M.splice(T,1,P),h?.refreshSlideContent(T))}))},{passive:!0}),lt("wheel",()=>{u.value.scrollToClose&&h?.close()}),vt(()=>{("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{c=He(async()=>{const{default:f}=await import("./photoswipe.esm-CKV1Bsxh.js");return{default:f}},[]).then(({default:f})=>f)})}),Js(()=>{h?.destroy()})};var HS={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const GS="[vp-content] :not(a) > img:not([no-view])",WS=HS,$S=!0,XS=!0,qS=!0;var jS=rs({enhance:({app:t})=>{BS(t)},setup:()=>{VS({selector:GS,locales:WS,download:$S,fullscreen:XS,scrollToClose:qS})}});const YS=Object.freeze(Object.defineProperty({__proto__:null,default:jS},Symbol.toStringTag,{value:"Module"})),Z0=({type:t="info",text:e="",vertical:n,color:s,bgColor:a},{slots:i})=>d("span",{class:["vp-badge",t,{diy:!!(s||a)}],style:{backgroundColor:a??!1,color:s??!1,verticalAlign:n??!1}},i.default?.()??e);Z0.displayName="Badge";const J0=({title:t,desc:e="",logo:n,background:s,color:a,link:i})=>{const r=[n?d("img",{class:"vp-card-logo",src:bt(n),loading:"lazy","no-view":""}):null,d("div",{class:"vp-card-content"},[d("div",{class:"vp-card-title",innerHTML:t}),d("hr"),d("div",{class:"vp-card-desc",innerHTML:e})])],o={};return s&&(o.background=s),a&&(o.color=a),i?Fl(i)?d("a",{class:"vp-card",href:i,target:"_blank",style:o},r):d(Gt,{to:i,class:"vp-card",style:o},()=>r):d("div",{class:"vp-card",style:o},r)};J0.displayName="VPCard";const KS={enhance:({app:t})=>{yn("Badge")||t.component("Badge",Z0),yn("VPCard")||t.component("VPCard",J0)},setup:()=>{},rootComponents:[]},ZS=Object.freeze(Object.defineProperty({__proto__:null,default:KS},Symbol.toStringTag,{value:"Module"})),dd=async(t,e)=>{const{path:n,query:s}=t.currentRoute.value,{scrollBehavior:a}=t.options;t.options.scrollBehavior=void 0,await t.replace({path:n,query:s,hash:e}),t.options.scrollBehavior=a},JS=({headerLinkSelector:t,headerAnchorSelector:e,delay:n,offset:s=5})=>{const a=Ta();lt("scroll",F0(()=>{const r=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(r)<s){dd(a,"");return}const l=window.innerHeight+r,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.abs(u-l)<s,p=Array.from(document.querySelectorAll(t)),f=Array.from(document.querySelectorAll(e)).filter(v=>p.some(_=>_.hash===v.hash));for(let v=0;v<f.length;v++){const _=f[v],g=f[v+1],m=r>=(_.parentElement?.offsetTop??0)-s,M=!g||r<(g.parentElement?.offsetTop??0)-s;if(!(m&&M))continue;const S=decodeURIComponent(a.currentRoute.value.hash),T=decodeURIComponent(_.hash);if(S===T)return;if(c){for(let P=v+1;P<f.length;P++)if(S===decodeURIComponent(f[P].hash))return}dd(a,T);return}},n))},QS=".vp-sidebar-link, .vp-toc-link",eM=".header-anchor",tM=200,nM=5,sM=rs({setup(){JS({headerLinkSelector:QS,headerAnchorSelector:eM,delay:tM,offset:nM})}}),aM=Object.freeze(Object.defineProperty({__proto__:null,default:sM},Symbol.toStringTag,{value:"Module"}));let Q0=t=>xt(t.title)?{title:t.title}:null;const ev=Symbol(""),iM=t=>{Q0=t},rM=()=>Rt(ev),oM=t=>{t.provide(ev,Q0)};var lM={"/":{title:"目录",empty:"暂无目录"}},cM=xe({name:"Catalog",props:{base:String,level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(t){const{page:e,routes:n,site:s}=ti(),a=rM(),i=er(lM),r=Ye(Qi(n.value).map(([l,{meta:u}])=>{const c=a(u);if(!c)return null;const p=l.split("/").length;return{level:Gy(l,"/")?p-2:p-1,base:l.replace(/\/[^/]+\/?$/,"/"),path:l,...c}}).filter(l=>wa(l)&&xt(l.title))),o=$(()=>{const l=t.base?Y3(s0(t.base)):e.value.path.replace(/\/[^/]+$/,"/"),u=l.split("/").length-2,c=[];return r.value.filter(({level:p,path:h})=>{if(!Fr(h,l)||h===l)return!1;if(l==="/"){const f=ss(s.value.locales).filter(v=>v!=="/");if(h==="/404.html"||f.some(v=>Fr(h,v)))return!1}return p-u<=t.level}).sort(({title:p,level:h,order:f},{title:v,level:_,order:g})=>h-_||(el(f)?el(g)?f>0?g>0?f-g:-1:g<0?f-g:1:f:el(g)?g:p.localeCompare(v))).forEach(p=>{const{base:h,level:f}=p;switch(f-u){case 1:{c.push(p);break}case 2:{const v=c.find(_=>_.path===h);v&&(v.children??=[]).push(p);break}default:{const v=c.find(_=>_.path===h.replace(/\/[^/]+\/$/,"/"));if(v){const _=v.children?.find(g=>g.path===h);_&&(_.children??=[]).push(p)}}}}),c});return()=>{const l=o.value.some(u=>u.children);return d("div",{class:["vp-catalog",{index:t.index}]},[t.hideHeading?null:d("h2",{class:"vp-catalog-main-title"},i.value.title),o.value.length?d(t.index?"ol":"ul",{class:["vp-catalog-list",{deep:l}]},o.value.map(({children:u=[],title:c,path:p,content:h})=>{const f=d(Gt,{class:"vp-catalog-title",to:p},()=>h?d(h):c);return d("li",{class:"vp-catalog-item"},l?[d("h3",{id:c,class:["vp-catalog-child-title",{"has-children":u.length}]},[d("a",{href:`#${c}`,class:"vp-catalog-header-anchor","aria-hidden":!0}),f]),u.length?d(t.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:v=[],content:_,path:g,title:m})=>d("li",{class:"vp-child-catalog"},[d("div",{class:["vp-catalog-sub-title",{"has-children":v.length}]},[d("a",{href:`#${m}`,class:"vp-catalog-header-anchor"}),d(Gt,{class:"vp-catalog-title",to:g},()=>_?d(_):m)]),v.length?d(t.index?"ol":"div",{class:t.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},v.map(({content:M,path:x,title:S})=>t.index?d("li",{class:"vp-sub-catalog"},d(Gt,{to:x},()=>M?d(M):S)):d(Gt,{class:"vp-sub-catalog-link",to:x},()=>M?d(M):S))):null]))):null]:d("div",{class:"vp-catalog-child-title"},f))})):d("p",{class:"vp-empty-catalog"},i.value.empty)])}}}),uM=rs({enhance:({app:t})=>{oM(t),yn("Catalog",t)||t.component("Catalog",cM)}});const pM=Object.freeze(Object.defineProperty({__proto__:null,default:uM},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const md=(t,e)=>{t.classList.add(e)},gd=(t,e)=>{t.classList.remove(e)},hM=t=>{t?.parentNode?.removeChild(t)},Tc=(t,e,n)=>t<e?e:t>n?n:t,vd=t=>(-1+t)*100,fM=(()=>{const t=[],e=()=>{const n=t.shift();n&&n(e)};return n=>{t.push(n),t.length===1&&e()}})(),dM=t=>t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(e,n)=>n.toUpperCase()),To=(()=>{const t=["Webkit","O","Moz","ms"],e={},n=i=>{const{style:r}=document.body;if(i in r)return i;const o=i.charAt(0).toUpperCase()+i.slice(1);let l=t.length;for(;l--;){const u=`${t[l]}${o}`;if(u in r)return u}return i},s=i=>{const r=dM(i);return e[r]??=n(r)},a=(i,r,o)=>{i.style[s(r)]=o};return(i,r)=>{for(const o in r){const l=r[o];Object.hasOwn(r,o)&&ih(l)&&a(i,o,l)}}})(),Rs={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Ot={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:t=>{const{speed:e,easing:n}=Rs,s=Ot.isStarted(),a=Tc(t,Rs.minimum,1);Ot.percent=a===1?null:a;const i=Ot.render(!s),r=i.querySelector(Rs.barSelector);return i.offsetWidth,fM(o=>{To(r,{transform:`translate3d(${vd(a)}%,0,0)`,transition:`all ${e}ms ${n}`}),a===1?(To(i,{transition:"none",opacity:"1"}),i.offsetWidth,setTimeout(()=>{To(i,{transition:`all ${e}ms linear`,opacity:"0"}),setTimeout(()=>{Ot.remove(),o()},e)},e)):setTimeout(()=>{o()},e)}),Ot},isStarted:()=>typeof Ot.percent=="number",start:()=>{Ot.percent||Ot.set(0);const t=()=>{setTimeout(()=>{Ot.percent&&(Ot.trickle(),t())},Rs.trickleSpeed)};return t(),Ot},done:t=>!t&&!Ot.percent?Ot:Ot.increase(.3+.5*Math.random()).set(1),increase:t=>{let{percent:e}=Ot;return e?(e=Tc(e+(typeof t=="number"?t:(1-e)*Tc(Math.random()*e,.1,.95)),0,.994),Ot.set(e)):Ot.start()},trickle:()=>Ot.increase(Math.random()*Rs.trickleRate),render:t=>{if(Ot.isRendered())return document.getElementById("nprogress");md(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=Rs.template;const n=e.querySelector(Rs.barSelector),s=document.querySelector(Rs.parent),a=t?"-100":vd(Ot.percent??0);return To(n,{transition:"all 0 linear",transform:`translate3d(${a}%,0,0)`}),s&&(s!==document.body&&md(s,"nprogress-custom-parent"),s.appendChild(e)),e},remove:()=>{gd(document.documentElement,"nprogress-busy"),gd(document.querySelector(Rs.parent),"nprogress-custom-parent"),hM(document.getElementById("nprogress"))}},mM=()=>{vt(()=>{const t=Ta(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(n=>{e.has(n.path)||Ot.start()}),t.afterEach(n=>{e.add(n.path),Ot.done()})})},gM=rs({setup(){mM()}}),vM=Object.freeze(Object.defineProperty({__proto__:null,default:gM},Symbol.toStringTag,{value:"Module"})),tv="VUEPRESS_REDIRECT_STATUS",_d=Mb(tv,{}),xd=hh(tv,{}),_M=t=>{const e=Eb(),n=x0(),s=Qi(t.config);return $(()=>{if(s.some(([a])=>n.value===a)){for(const a of e.value)for(const[i,r]of s)if(r.includes(a))return i===n.value?null:{lang:a,localePath:i}}return null})};var xM=xe({name:"RedirectModal",props:{config:{type:Object,required:!0},locales:{type:Object,required:!0}},setup(t){const e=Ta(),{routeLocale:n,routePath:s}=ti(),a=_M(t.config),i=je(),r=ph(i),o=je(!1),l=$(()=>{if(!a.value)return null;const{lang:c,localePath:p}=a.value,h=[t.locales[p],t.locales[n.value]];return{hint:h.map(({hint:f})=>f.replace("$1",c)),switch:h.map(({switch:f})=>f.replace("$1",c)).join(" / "),cancel:h.map(({cancel:f})=>f).join(" / "),remember:h.map(({remember:f})=>f).join(" / ")}}),u=()=>{xd.value[n.value]=!0,o.value&&(_d.value[n.value]=!0),r.value=!1};return Lt(s,()=>{r.value=!1}),vt(async()=>{i.value=document.body,await Ms(),a.value&&!xd.value[n.value]&&!_d.value[n.value]&&(r.value=!0)}),Xp(()=>{r.value=!1}),()=>d(t0,{name:"fade-in-scale-up"},()=>r.value?d("div",{key:"mask",class:"redirect-modal-mask"},d("div",{key:"popup",class:"redirect-modal-wrapper"},[d("div",{class:"redirect-modal-content"},l.value?.hint.map(c=>d("p",c))),d("div",{class:"redirect-modal-hint"},[d("input",{id:"remember-redirect",type:"checkbox",value:o.value,onChange:()=>{o.value=!o.value}}),d("label",{for:"remember-redirect"},l.value?.remember)]),d("button",{type:"button",class:"redirect-modal-action primary",onClick:()=>{u(),e.replace(s.value.replace(n.value,a.value.localePath))}},l.value?.switch),d("button",{type:"button",class:"redirect-modal-action",onClick:()=>{u()}},l.value?.cancel)])):null)}}),yM={config:{},autoLocale:!1,localeFallback:!0,defaultBehavior:"defaultLocale"},bM={"/":{name:"简体中文",hint:"你的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"}};const nv=yM;var SM=rs({setup(){},rootComponents:[()=>d(xM,{config:nv,locales:bM})]});const MM=Object.freeze(Object.defineProperty({__proto__:null,config:nv,default:SM},Symbol.toStringTag,{value:"Module"}));var yd={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const sv=()=>{const t=Qr();return $(()=>t.value.readingTime??null)},av=(t,e)=>{const{minutes:n,words:s}=t,{less1Minute:a,word:i,time:r}=e;return{time:n<1?a:r.replace("$time",Math.round(n).toString()),words:i.replace("$word",s.toString())}},bd={words:"",time:""},Au=typeof yd>"u"?null:yd,iv=()=>Au?er(Au):$(()=>null),EM=()=>{if(Au===null)return $(()=>bd);const t=sv(),e=iv();return $(()=>t.value&&e.value?av(t.value,e.value):bd)},tl=()=>null,Mt=({name:t="",color:e="currentColor",ariaLabel:n},{attrs:s,slots:a})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${t}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":n??`${t} icon`,...s},a.default());Mt.displayName="IconBase";const wM=t=>Ji(t)?t:`https://github.com/${t}`,dh=(t="")=>!Ji(t)||t.includes("github.com")?"GitHub":t.includes("bitbucket.org")?"Bitbucket":t.includes("gitlab.com")?"GitLab":t.includes("gitee.com")?"Gitee":null,rv=()=>d(Mt,{name:"github"},()=>d("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));rv.displayName="GitHubIcon";const ov=()=>d(Mt,{name:"gitee"},()=>d("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));ov.displayName="GiteeIcon";const lv=()=>d(Mt,{name:"bitbucket"},()=>d("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));lv.displayName="BitbucketIcon";const cv=()=>d(Mt,{name:"source"},()=>d("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));cv.displayName="SourceIcon";const TM=({link:t,type:e=dh(t??"")})=>{if(!e)return null;const n=e.toLowerCase();return d(n==="bitbucket"?lv:n==="github"?rv:n==="gitlab"?"GitLab":n==="gitee"?ov:cv)},AM=(t,e=0)=>{let n=3735928559^e,s=1103547991^e;for(let a=0;a<t.length;a++){const i=t.charCodeAt(a);n=Math.imul(n^i,2654435761),s=Math.imul(s^i,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(s^s>>>13,3266489909),s=Math.imul(s^s>>>16,2246822507),s^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&s)+(n>>>0)},to=(t,e)=>AM(t)%e,uv=/#.*$/u,CM=t=>{const e=uv.exec(t);return e?e[0]:""},Sd=t=>decodeURI(t).replace(uv,"").replace(/\/index\.html$/iu,"/").replace(/\/(README|index)\.md$/iu,"/").replace(/\.(?:html|md)$/iu,""),pv=(t,e)=>{if(!ih(e))return!1;const n=Sd(t.path),s=Sd(e),a=CM(e);return a?a===t.hash&&(!s||n===s):n===s},RM="719px",PM="1440px",LM="9",ar={mobileBreakPoint:RM,pcBreakPoint:PM,colorNumber:LM},Aa=()=>q0(),os=()=>yS(),Vt=()=>({...ti(),theme:Aa(),themeLocale:os()}),bn=()=>{const t=Aa();return $(()=>!!t.value.pure)},hv=()=>{const t=os();return $(()=>t.value.author)},Md=t=>wa(t)&&xt(t.name),kr=(t,e=!1)=>t?qs(t)?t.map(n=>xt(n)?{name:n}:Md(n)?n:null).filter(n=>n!==null):xt(t)?[{name:t}]:Md(t)?[t]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,t),[]):[],fv=(t,e)=>{if(t){if(qs(t)&&t.every(n=>xt(n)))return t;if(xt(t))return[t];console.error(`Expect ${e} to be \`string[] | string | undefined\`, but got`,t)}return[]},dv=t=>fv(t,"category"),mv=t=>fv(t,"tag"),gv=()=>{const t=Dn(),e=hv();return $(()=>{const{author:n}=t.value;return n?kr(n):n===!1?[]:kr(e.value,!1)})},DM=()=>{const t=Dn(),e=Rt(Symbol.for("categoryMap"),null);return $(()=>dv(t.value.category??t.value.categories).map(n=>({name:n,path:e?.value.map[n]?.path??""})))},IM=()=>{const t=Dn(),e=Rt(Symbol.for("tagMap"),null);return $(()=>mv(t.value.tag??t.value.tags).map(n=>({name:n,path:e?.value.map[n]?.path??""})))},NM=()=>{const{frontmatter:t,page:e}=Vt();return $(()=>{const n=rh(t.value.date);if(n)return n;const{createdTime:s}=e.value.git??{};return s?new Date(s):null})},UM=()=>{const{frontmatter:t,themeLocale:e}=Vt(),n=gv(),s=DM(),a=IM(),i=NM(),r=sv(),o=EM(),l=$(()=>({author:n.value,category:s.value,date:i.value,tag:a.value,isOriginal:t.value.isOriginal??!1,readingTime:r.value,readingTimeLocale:o.value,pageview:t.value.pageview??!0})),u=$(()=>t.value.pageInfo??e.value.pageInfo??null);return{info:l,items:u}},Hn=()=>{const t=os();return $(()=>t.value.metaLocales)},OM="http://.",ta=()=>{const t=Ta(),e=Es();return n=>{if(!n)return;if(Jr(n))return window.open(n);if(zl(n))return e.fullPath===n?void 0:void t.push(n);const s=e.path.slice(0,e.path.lastIndexOf("/"));return void t.push(new URL(`${s}/${encodeURI(n)}`,OM).pathname)}},vv=()=>d(Mt,{name:"author"},()=>d("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));vv.displayName="AuthorIcon";const _v=()=>d(Mt,{name:"calendar"},()=>d("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));_v.displayName="CalendarIcon";const xv=()=>d(Mt,{name:"category"},()=>d("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));xv.displayName="CategoryIcon";const yv=()=>d(Mt,{name:"print"},()=>d("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));yv.displayName="PrintIcon";const bv=()=>d(Mt,{name:"tag"},()=>d("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));bv.displayName="TagIcon";const Sv=()=>d(Mt,{name:"timer"},()=>d("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Sv.displayName="TimerIcon";const Mv=()=>d(Mt,{name:"word"},()=>[d("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),d("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Mv.displayName="WordIcon";var FM=xe({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(t){const e=Hn(),n=bn();return()=>t.author.length>0?d("span",{class:"page-author-info","aria-label":`${e.value.author}${n.value?"":"🖊"}`,...n.value?{}:{"data-balloon-pos":"up"}},[d(vv),d("span",t.author.map(s=>s.url?d("a",{class:"page-author-item",href:s.url,target:"_blank",rel:"noopener noreferrer"},s.name):d("span",{class:"page-author-item"},s.name))),d("span",{property:"author",content:t.author.map(s=>s.name).join(", ")})]):null}}),BM=xe({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(t){const e=Hn(),n=ta(),s=bn();return()=>t.category.length>0?d("span",{class:"page-category-info","aria-label":`${e.value.category}${s.value?"":"🌈"}`,...s.value?{}:{"data-balloon-pos":"up"}},[d(xv),t.category.map(({name:a,path:i})=>d("span",{class:["page-category-item",{[`color${to(a,Number(ar.colorNumber))}`]:!s.value,clickable:i}],role:i?"navigation":"",onClick:()=>{i&&n(i)}},a)),d("meta",{property:"articleSection",content:t.category.map(({name:a})=>a).join(",")})]):null}}),kM=xe({name:"DateInfo",inheritAttrs:!1,props:{date:Object},setup(t){const e=y0(),n=Hn(),s=bn(),a=$(()=>new Intl.DateTimeFormat(e.value,{dateStyle:"short"})),i=$(()=>t.date?a.value.format(t.date):null);return()=>t.date?d("span",{class:"page-date-info","aria-label":`${n.value.date}${s.value?"":"📅"}`,...s.value?{}:{"data-balloon-pos":"up"}},[d(_v),d("span",{"data-allow-mismatch":"text"},i.value),d("meta",{property:"datePublished",content:t.date.toISOString()||""})]):null}}),zM=xe({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(t){const e=Hn();return()=>t.isOriginal?d("span",{class:"page-original-info"},e.value.origin):null}}),VM=xe({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(t){const e=Hn(),n=bn(),s=$(()=>{if(!t.readingTime)return null;const{minutes:a}=t.readingTime;return a<1?"PT1M":`PT${Math.round(a)}M`});return()=>t.readingTimeLocale?.time?d("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.value?"":"⌛"}`,...n.value?{}:{"data-balloon-pos":"up"}},[d(Sv),d("span",t.readingTimeLocale.time),d("meta",{property:"timeRequired",content:s.value})]):null}}),HM=xe({name:"TagInfo",inheritAttrs:!1,props:{tag:Array},setup(t){const e=Hn(),n=ta(),s=bn();return()=>t.tag?.length?d("span",{class:"page-tag-info","aria-label":`${e.value.tag}${s.value?"":"🏷"}`,...s.value?{}:{"data-balloon-pos":"up"}},[d(bv),t.tag.map(({name:a,path:i})=>d("span",{class:["page-tag-item",{[`color${to(a,Number(ar.colorNumber))}`]:!s.value,clickable:i}],role:i?"navigation":"",onClick:()=>{i&&n(i)}},a)),d("meta",{property:"keywords",content:t.tag.map(({name:a})=>a).join(",")})]):null}}),GM=xe({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(t){const e=Hn(),n=bn();return()=>t.readingTimeLocale?.words?d("span",{class:"page-word-info","aria-label":`${e.value.words}${n.value?"":"🔠"}`,...n.value?{}:{"data-balloon-pos":"up"}},[d(Mv),d("span",t.readingTimeLocale.words),d("meta",{property:"wordCount",content:t.readingTime?.words})]):null}}),Ev=xe({name:"PageInfo",components:{AuthorInfo:FM,CategoryInfo:BM,DateInfo:kM,OriginalInfo:zM,PageViewInfo:tl,ReadingTimeInfo:VM,TagInfo:HM,WordInfo:GM},props:{items:[Boolean,Array],info:{type:Object,required:!0}},setup(t){const e=bn();return()=>{const n=t.items??["Author","Original","Date","PageView","ReadingTime","Category","Tag"];return n?d("div",{class:"page-info"},n.map(s=>d(Pt(`${s}Info`),{...t.info,isPure:e.value}))):null}}});const mh={"/demo/":["markdown","layout","page","disable","encrypt"],"/posts/":[{text:"其他",prefix:"其他/",collapsible:!0,children:["javaweb","linux","signal","glx","1sjk","2sjk","3.sjk","web"]},{text:"数据结构",prefix:"数据结构/",collapsible:!0,children:["stack"]},{text:"考研数学",prefix:"考研数学/",collapsible:!0,children:["1"]}]},wv=Symbol(""),no=()=>{const t=Rt(wv);if(!t)throw new Error("useDarkMode() is called without provider.");return t},WM=t=>{const e=vb(),n=Aa(),s=$(()=>n.value.darkmode??"switch"),a=ni("vuepress-theme-hope-scheme","auto"),i=$(()=>{const o=s.value;return o==="disable"?!1:o==="enable"?!0:o==="auto"?e.value:o==="toggle"?a.value==="dark":a.value==="dark"||a.value==="auto"&&e.value}),r=$(()=>{const o=s.value;return o==="switch"||o==="toggle"});t.provide(wv,{canToggle:r,config:s,isDarkMode:i,status:a}),Object.defineProperties(t.config.globalProperties,{$isDarkMode:{get:()=>i.value}})},$M=()=>{const{config:t,isDarkMode:e,status:n}=no();Hp(()=>{t.value==="disable"?n.value="light":t.value==="enable"?n.value="dark":t.value==="toggle"&&n.value==="auto"&&(n.value="light")}),lt("beforeprint",()=>{e.value&&(document.documentElement.dataset.theme="light")}),lt("afterprint",()=>{e.value&&(document.documentElement.dataset.theme="dark")}),vt(()=>{ys(e,s=>{document.documentElement.dataset.theme=s?"dark":"light"})})},Cu=t=>!Jr(t)&&!Fl(t),xl=(t,e=!1,n)=>{const{meta:s,path:a,notFound:i}=Vn(t,n);return i?{text:a,link:a}:{text:!e&&s.shortTitle?s.shortTitle:s.title||a,link:a,icon:s.icon}},$a=(t="",e="")=>Jr(e)||zl(e)?e:`${s0(t)}${e}`,Tv=(t,e)=>{const n=xt(t)?xl($a(e,t)):xt(t.link)?{...t,link:Cu(t.link)?Vn($a(e,t.link)).path:t.link}:t;if("children"in n){const s=$a(e,n.prefix),a=n.children==="structure"?mh[s]:n.children;return{...n,prefix:s,children:a.map(i=>Tv(i,s))}}return{...n}},Ru=({config:t,prefix:e=""})=>t.map(n=>Tv(n,e)),XM=({config:t,routePath:e})=>{const n=ss(t).sort((s,a)=>a.length-s.length);for(const s of n)if(Fr(decodeURI(e),s)){const a=t[s];return Ru({config:a==="structure"?mh[s]:a||[],prefix:s})}return console.warn(`${decodeURI(e)} is missing it's sidebar config.`),[]},qM=({config:t,routeLocale:e,routePath:n})=>t==="structure"?Ru({config:mh[e],prefix:e}):qs(t)?Ru({config:t}):wa(t)?XM({config:t,routePath:n}):[],Av=Symbol(""),jM=()=>{const{frontmatter:t,routeLocale:e,routePath:n,themeLocale:s}=Vt(),a=$(()=>t.value.home?!1:t.value.sidebar??s.value.sidebar??"structure"),i=$(()=>qM({config:a.value,routeLocale:e.value,routePath:n.value}));Qn(Av,i)},gh=()=>{const t=Rt(Av);if(!t)throw new Error("useSidebarItems() is called without provider.");return t};var YM=xe({name:"PageFooter",setup(){const{frontmatter:t,theme:e,themeLocale:n}=Vt(),s=gv(),a=$(()=>{const{copyright:u,footer:c}=t.value;return c!==!1&&!!(u||c||n.value.displayFooter)}),i=$(()=>{const{footer:u}=t.value;return xt(u)?u:n.value.footer??""}),r=$(()=>s.value.map(({name:u})=>u).join(", ")),o=u=>`Copyright © ${new Date().getFullYear()} ${r.value} ${u?`${u} Licensed`:""}`,l=$(()=>{const{copyright:u,license:c=""}=t.value,{license:p}=e.value,{copyright:h}=n.value;return u??(c?o(c):h??(r.value||p?o(p):!1))});return()=>a.value?d("footer",{class:"vp-footer-wrapper","vp-footer":""},[i.value?d("div",{class:"vp-footer",innerHTML:i.value}):null,l.value?d("div",{class:"vp-copyright",innerHTML:l.value}):null]):null}});const Cv=()=>d(Mt,{name:"outlook"},()=>[d("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Cv.displayName="AppearanceIcon";const Rv=()=>d(Mt,{name:"auto"},()=>d("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Rv.displayName="AutoColorModeIcon";const Pv=()=>d(Mt,{name:"light"},()=>d("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Pv.displayName="LightColorModeIcon";const Lv=()=>d(Mt,{name:"dark"},()=>d("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Lv.displayName="DarkColorModeIcon";var Dv=xe({name:"ColorModeSwitch",setup(){const{config:t,isDarkMode:e,status:n}=no(),s=bn(),a=()=>{t.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},i=async r=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!s.value)){a();return}const o=r.clientX,l=r.clientY,u=Math.hypot(Math.max(o,innerWidth-o),Math.max(l,innerHeight-l)),c=e.value;await document.startViewTransition(async()=>{a(),await Ms()}).ready,e.value!==c&&document.documentElement.animate({clipPath:e.value?[`circle(${u}px at ${o}px ${l}px)`,`circle(0px at ${o}px ${l}px)`]:[`circle(0px at ${o}px ${l}px)`,`circle(${u}px at ${o}px ${l}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>d("button",{type:"button",class:"vp-color-mode-switch",id:"color-mode-switch",onClick:i},[d(Rv,{style:{display:n.value==="auto"?"block":"none"}}),d(Lv,{style:{display:n.value==="dark"?"block":"none"}}),d(Pv,{style:{display:n.value==="light"?"block":"none"}})])}});const Iv=()=>{const t=os();return $(()=>t.value.outlookLocales)};var KM=xe({name:"ColorMode",setup(){const t=Iv(),{canToggle:e}=no();return()=>e.value?d("div",{class:"vp-color-mode"},[d("label",{class:"vp-color-mode-title",for:"color-mode-switch"},t.value.darkmode),d(Dv)]):null}});const Nv=()=>d(Mt,{name:"cancel-fullscreen"},()=>d("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Nv.displayName="CancelFullScreenIcon";const Uv=()=>d(Mt,{name:"enter-fullscreen"},()=>d("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Uv.displayName="EnterFullScreenIcon";var Ov=xe({name:"ToggleFullScreenButton",setup(){const{isSupported:t,isFullscreen:e,toggle:n}=Hl();return()=>t.value?d("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:e.value,onClick:()=>n()},e.value?d(Nv):d(Uv)):null}}),ZM=xe({name:"ToggleFullScreenButton",setup(){const t=Iv(),{isSupported:e}=Hl();return()=>e.value?d("div",{class:"full-screen-wrapper"},[d("label",{class:"full-screen-title",for:"full-screen-switch"},t.value.fullscreen),d(Ov)]):null}}),Fv=xe({name:"AppearanceSettings",setup(){const t=Aa(),e=bn(),n=$(()=>!e.value&&t.value.fullscreen);return()=>d(nh,()=>[null,d(KM),n.value?d(ZM):null])}}),JM=xe({name:"AppearanceButton",setup(){const t=Aa(),{canToggle:e}=no(),{isSupported:n}=Hl(),s=bn(),a=je(!1),i=$(()=>!s.value&&t.value.fullscreen&&n),r=$(()=>e.value||i.value);return ea(()=>{a.value=!1}),()=>r.value?d("div",{class:"vp-nav-item hide-in-mobile"},e.value&&!i.value?d(Dv):i.value&&!e.value?d(Ov):d("button",{type:"button",class:["vp-appearance-button",{open:a.value}],tabindex:"-1","aria-hidden":!0},[d(Cv),d("div",{class:"vp-appearance-dropdown"},d(Fv))])):null}});const fn=({config:t,iconSizing:e="both"},{emit:n,slots:s})=>{const{icon:a}=t;return d(my,{config:t,onFocusout:()=>{n("focusout")}},{...s,before:s.before??(a?()=>d(Pt("VPIcon"),{icon:a,sizing:e}):null)})};fn.displayName="AutoLink";var QM=xe({name:"NavbarDropdown",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=Zi(t,"config"),s=$(()=>n.value.ariaLabel??n.value.text),a=je(!1),i=r=>{r.detail===0&&(a.value=!a.value)};return ea(()=>{a.value=!1}),()=>d("div",{class:["vp-dropdown-wrapper",{open:a.value}]},[d("button",{type:"button",class:"vp-dropdown-title","aria-label":s.value,onClick:i},[e.title?.()??[d(Pt("VPIcon"),{icon:n.value.icon}),t.config.text],d("span",{class:"arrow"}),d("ul",{class:"vp-dropdown"},n.value.children.map((r,o)=>{const l=o===n.value.children.length-1;return d("li",{class:"vp-dropdown-item"},"children"in r?[d("h4",{class:"vp-dropdown-subtitle"},r.link?d(fn,{config:r,onFocusout:()=>{r.children.length===0&&l&&(a.value=!1)}}):r.text),d("ul",{class:"vp-dropdown-subitems"},r.children.map((u,c)=>d("li",{class:"vp-dropdown-subitem"},d(fn,{config:u,onFocusout:()=>{c===r.children.length-1&&l&&(a.value=!1)}}))))]:d(fn,{config:r,onFocusout:()=>{l&&(a.value=!1)}}))}))])])}});const Ao=(t,e)=>e[e.length-1]===t;var eE=xe({name:"NavScreenMenu",props:{config:{type:Object,required:!0}},setup(t){const e=Zi(t,"config"),n=Es(),s=$(()=>e.value.ariaLabel??e.value.text),a=je(!1);return ea(()=>{a.value=!1}),Lt(()=>n.fullPath,()=>{a.value=!1}),()=>[d("button",{type:"button",class:["vp-nav-screen-menu-title",{active:a.value}],"aria-label":s.value,onClick:()=>{a.value=!a.value}},[d("span",{class:"text"},[d(Pt("VPIcon"),{icon:e.value.icon,sizing:"both"}),t.config.text]),d("span",{class:["arrow",a.value?"down":"end"]})]),d("ul",{class:["vp-nav-screen-menu",{hide:!a.value}]},e.value.children.map(i=>d("li",{class:"vp-nav-screen-menu-item"},"children"in i?[d("h4",{class:"vp-nav-screen-menu-subtitle"},i.link?d(fn,{config:i,onFocusout:()=>{Ao(i,e.value.children)&&i.children.length===0&&(a.value=!1)}}):i.text),d("ul",{class:"vp-nav-screen-menu-subitems"},i.children.map(r=>d("li",{class:"vp-nav-screen-menu-subitem"},d(fn,{config:r,onFocusout:()=>{Ao(r,i.children)&&Ao(i,e.value.children)&&(a.value=!1)}}))))]:d(fn,{config:i,onFocusout:()=>{Ao(i,e.value.children)&&(a.value=!1)}}))))]}});const Bv=(t,e="")=>xt(t)?xl($a(e,t)):"children"in t?{...t,...t.link&&Cu(t.link)?{link:Vn($a(e,t.link)).path}:{},children:t.children.map(n=>Bv(n,$a(e,t.prefix)))}:{...t,link:Cu(t.link)?Vn($a(e,t.link)).path:t.link},kv=()=>{const t=os();return $(()=>(t.value.navbar||[]).map(e=>Bv(e)))};var tE=xe({name:"NavScreenLinks",setup(){const t=kv();return()=>t.value.length>0?d("nav",{class:"nav-screen-links"},t.value.map(e=>d("div",{class:"navbar-links-item"},"children"in e?d(eE,{config:e}):d(fn,{config:e})))):null}});const{mobileBreakPoint:nE,pcBreakPoint:sE}=ar,Ed=t=>t.endsWith("px")?Number(t.slice(0,-2)):null,Gl=()=>{const t=je(!1),e=je(!1),n=()=>{t.value=window.innerWidth<=(Ed(nE)??719),e.value=window.innerWidth>=(Ed(sE)??1440)};return lt("resize",n,!1),lt("orientationchange",n,!1),vt(()=>{n()}),{isMobile:t,isPC:e}};var aE=xe({name:"NavScreen",props:{show:Boolean},slots:Object,setup(t,{slots:e}){const{isMobile:n}=Gl(),s=Ye(),a=ph(s);return ea(()=>{a.value=!1}),Lt(n,i=>{!i&&t.show&&(a.value=!1)}),vt(()=>{s.value=document.body}),Js(()=>{a.value=!1}),()=>d(Gi,{name:"fade-in-down",onEnter:()=>{a.value=!0},onAfterLeave:()=>{a.value=!1}},()=>t.show?d("div",{id:"nav-screen",class:"vp-nav-screen"},d("div",{class:"vp-nav-screen-container"},[e.navScreenTop?.(),d(tE),d("div",{class:"vp-appearance-wrapper"},d(Fv)),e.navScreenBottom?.()])):null)}}),iE=xe({name:"NavbarBrand",setup(){const{routeLocale:t,siteLocale:e,themeLocale:n}=Vt(),s=$(()=>n.value.home??t.value),a=$(()=>e.value.title),i=$(()=>n.value.navbarTitle??a.value),r=$(()=>n.value.logo?bt(n.value.logo):null),o=$(()=>n.value.logoDark?bt(n.value.logoDark):null);return()=>d(Gt,{to:s.value,class:"vp-brand","aria-label":n.value.routerLocales.home},()=>[r.value?d("img",{class:["vp-nav-logo",{light:!!o.value}],src:r.value,alt:""}):null,o.value?d("img",{class:["vp-nav-logo dark"],src:o.value,alt:""}):null,i.value?d("span",{class:["vp-site-name",{"hide-in-pad":r.value&&(n.value.hideSiteNameOnMobile??!0)}]},i.value):null])}}),rE=xe({name:"NavbarLinks",setup(){const t=kv();return()=>t.value.length>0?d("nav",{class:"vp-nav-links"},t.value.map(e=>d("div",{class:"vp-nav-item hide-in-mobile"},"children"in e?d(QM,{config:e}):d(fn,{config:e,iconSizing:"height"})))):null}});const oE=()=>{const t=os(),e=$(()=>t.value.repo),n=$(()=>e.value?wM(e.value):null),s=$(()=>e.value?dh(e.value):null),a=$(()=>n.value?t.value.repoLabel??s.value??"Source":null);return $(()=>!n.value||!a.value||t.value.repoDisplay===!1?null:{type:s.value??"Source",label:a.value,link:n.value})};var lE=xe({name:"RepoLink",setup(){const t=oE();return()=>t.value?d("div",{class:"vp-nav-item vp-action"},d("a",{class:"vp-action-link",href:t.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":t.value.label},d(TM,{type:t.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const zv=({active:t=!1},{emit:e})=>d("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":t}],"aria-label":"Toggle Navbar","aria-expanded":t,"aria-controls":"nav-screen",onClick:()=>{e("toggle")}},d("span",[d("span",{class:"vp-top"}),d("span",{class:"vp-middle"}),d("span",{class:"vp-bottom"})]));zv.displayName="ToggleNavbarButton";const Pu=(t,{emit:e})=>d("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>{e("toggle")}},d("span",{class:"icon"}));Pu.displayName="ToggleSidebarButton",Pu.emits=["toggle"];var cE=xe({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(t,{emit:e,slots:n}){const s=os(),{isMobile:a}=Gl(),i=je(!1),r=$(()=>{const{navbarAutoHide:c="mobile"}=s.value;return c!=="none"&&(c==="always"||a.value)}),o=$(()=>s.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),l={Brand:iE,Language:tl,Links:rE,Repo:lE,Outlook:JM,Search:yn("SearchBox")?Pt("SearchBox"):tl},u=c=>l[c]??(yn(c)?Pt(c):tl);return ea(()=>{i.value=!1}),Lt(a,c=>{c||(i.value=!1)}),()=>[d("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":r.value}],"vp-navbar":""},[d("div",{class:"vp-navbar-start"},[d(Pu,{onToggle:()=>{i.value&&(i.value=!1),e("toggleSidebar")}}),o.value.start?.map(c=>d(u(c)))]),d("div",{class:"vp-navbar-center"},[o.value.center?.map(c=>d(u(c)))]),d("div",{class:"vp-navbar-end"},[o.value.end?.map(c=>d(u(c))),d(zv,{active:i.value,onToggle:()=>{i.value=!i.value}})])]),d(aE,{show:i.value},n)]}});const vh=(t,e)=>e.activeMatch?new RegExp(e.activeMatch,"u").test(t.path):pv(t,e.link);var uE=xe({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(t){const e=Es();return()=>xt(t.config.link)?d(fn,{class:["vp-sidebar-link",{active:vh(e,t.config)}],config:{...t.config,exact:!0}}):d("p",t,[d(Pt("VPIcon"),{icon:t.config.icon,sizing:"both"}),t.config.text])}});const _h=(t,e)=>"children"in e?!!e.prefix&&pv(t,e.prefix)||e.children.some(n=>_h(t,n)):vh(t,e);var pE=xe({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(t,{emit:e}){const n=Es(),s=je(!1),a=$(()=>_h(n,t.config)),i=$(()=>vh(n,t.config)),r=$(()=>t.open||t.config.expanded&&!s.value);return()=>{const{collapsible:o,children:l=[],icon:u,prefix:c,link:p,text:h}=t.config;return d("section",{class:"vp-sidebar-group"},[d(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||p,exact:i.value,active:a.value}],...o?{type:"button",onClick:()=>{s.value=!0,e("toggle")}}:{}},[d(Pt("VPIcon"),{icon:u,sizing:"both"}),p?d(fn,{class:"vp-sidebar-title no-external-link-icon",config:{text:h,link:p}}):d("span",{class:"vp-sidebar-title"},h),o?d("span",{class:["vp-arrow",r.value?"down":"end"]}):null]),r.value||!o?d(Vv,{key:c,config:l}):null])}}}),Vv=xe({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(t){const e=Es(),n=uy(),s=je(-1),a=i=>{s.value=i===s.value?-1:i};return ys(n,()=>{const i=t.config.findIndex(r=>_h(e,r));s.value=i},{flush:"post"}),()=>d("ul",{class:"vp-sidebar-links"},t.config.map((i,r)=>d("li","children"in i?d(pE,{config:i,open:r===s.value,onToggle:()=>{a(r)}}):d(uE,{config:i}))))}}),hE=xe({name:"SideBar",slots:Object,setup(t,{slots:e}){const n=Es(),s=gh(),a=Ye();return vt(()=>{ys(()=>n.hash,i=>{const r=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${i}"]`);if(!r)return;const{top:o,height:l}=a.value.getBoundingClientRect(),{top:u,height:c}=r.getBoundingClientRect();u<o?r.scrollIntoView(!0):u+c>o+l&&r.scrollIntoView(!1)})}),()=>d("aside",{ref:a,key:"sidebar",id:"sidebar",class:"vp-sidebar","vp-sidebar":""},[e.sidebarTop?.(),e.sidebarItems?.(s.value)??d(Vv,{config:s.value}),e.sidebarBottom?.()])}}),xh=xe({name:"MainLayout",props:{containerClass:String,noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(t,{slots:e}){const{frontmatter:n,theme:s,themeLocale:a}=Vt(),{isMobile:i,isPC:r}=Gl(),o=bn(),[l,u]=Br(!1),[c,p]=Br(!1),h=gh(),f=Ye(),v=ph(f),_=je(!1),g=$(()=>t.noNavbar||n.value.navbar===!1||a.value.navbar===!1?!1:!!(a.value.logo??a.value.repo??a.value.navbar)),m=$(()=>n.value.externalLinkIcon??s.value.externalLinkIcon??!0),M=$(()=>!t.noToc&&!n.value.home&&!!(n.value.toc??a.value.toc??!0)),x={x:0,y:0},S=L=>{x.x=L.changedTouches[0].clientX,x.y=L.changedTouches[0].clientY},T=L=>{const O=L.changedTouches[0].clientX-x.x,b=L.changedTouches[0].clientY-x.y;Math.abs(O)>Math.abs(b)*1.5&&Math.abs(O)>40&&(O>0&&x.x<=80?u(!0):u(!1))};let P=0;return lt("scroll",B0(()=>{const L=window.scrollY;L<=58||L<P?_.value=!1:P+200<L&&!l.value&&(_.value=!0),P=L},300,!0)),Lt(i,L=>{L||u(!1)}),Lt(l,L=>{v.value=L}),ea(()=>{u(!1)}),vt(()=>{f.value=document.body}),Js(()=>{v.value=!1}),()=>{const L=e.sidebarTop?.(),O=e.sidebarItems?.(h.value),b=e.sidebarBottom?.(),E=Ui(L)&&Ui(O)&&Ui(b),D=t.noSidebar||n.value.sidebar===!1||(n.value.home||h.value.length===0)&&E;return d(yn("GlobalEncrypt")?Pt("GlobalEncrypt"):ah,()=>d("div",{class:["theme-container",{"hide-navbar":_.value,"no-navbar":!g.value,"sidebar-collapsed":!i.value&&!r.value&&c.value,"sidebar-open":i.value&&l.value,"no-sidebar":D,"external-link-icon":m.value,pure:o.value,"has-toc":M.value},t.containerClass??"",n.value.containerClass??""],"vp-container":"",onTouchStart:S,onTouchEnd:T},[g.value?d(cE,{onToggleSidebar:()=>u()},e):null,d(Gi,{name:"fade-in"},()=>l.value?d("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),d(Gi,{name:"fade-in"},()=>i.value?null:d("div",{class:"toggle-sidebar-wrapper",onClick:()=>p()},d("span",{class:["arrow",c.value?"end":"start"]}))),D?null:d(hE,null,e),e.default(),d(YM)]))}}});const Hv=()=>{const{frontmatter:t,themeLocale:e}=Vt(),n=$(()=>t.value.changelog??((e.value.changelog??!1)&&!t.value.home)),s=$(()=>{const{contributors:i,home:r}=t.value;return qs(i)?r?!1:e.value.contributors??!0:i??(r?!1:e.value.contributors??!0)}),a=$(()=>t.value.lastUpdated??e.value.lastUpdated??!0);return{changelog:n,contributors:s,lastUpdated:a}};var Wl=xe({name:"MarkdownContent",props:{custom:Boolean},slots:Object,setup(t,{slots:e}){const n=Aa(),{changelog:s,contributors:a}=Hv(),i=je(),r=yb(i,{delayEnter:el(n.value.focus)?n.value.focus:1500,delayLeave:0}),o=$(()=>!!(n.value.focus??n.value.pure)&&r.value);return vt(()=>{const l=document.documentElement;ys(o,u=>{l.classList.toggle("is-focusing",u)})}),()=>d("div",{class:{custom:t.custom},"vp-content":""},[e.contentBefore?.(),d(S0,{ref:i,id:"markdown-content"}),e.contentAfter?.(),s.value&&yn("GitChangelog")?d(Pt("GitChangelog")):null,a.value==="content"&&yn("GitContributors")?d(Pt("GitContributors")):null])}});const fE=({target:t})=>{const e=document.querySelector(t.hash);if(e){const n=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",n)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",n),e.focus(),window.scrollTo(0,0)}};var yh=xe({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=os(),n=Ye();return ea(()=>{n.value?.focus()}),()=>[d("span",{ref:n,tabindex:"-1"}),d("a",{href:`#${t.content}`,class:"vp-skip-link sr-only",onClick:fE},e.value.routerLocales.skipToContent)]}});const Lu=()=>d(Mt,{name:"slide-down"},()=>d("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Lu.displayName="SlideDownIcon";const bh=(t,{emit:e})=>d("button",{type:"button",class:"vp-hero-slide-down-button",onClick:()=>{e("click")}},[d(Lu),d(Lu)]);bh.displayName="HeroSlideDownButton";const wd=t=>{t.style.transform="translateY(0)",t.style.opacity="1"};var Qe=xe({name:"DropTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},group:Boolean,appear:Boolean},slots:Object,setup(t,{slots:e}){const n=s=>{s.style.transition=`transform ${t.duration}s ease-in-out ${t.delay}s, opacity ${t.duration}s ease-in-out ${t.delay}s`,s.style.transform="translateY(-20px)",s.style.opacity="0"};return()=>{const s={name:"drop",appear:t.appear,onAppear:n,onAfterAppear:wd,onEnter:n,onAfterEnter:wd,onBeforeLeave:n};return t.group?d(t0,s,e.default):d(Gi,s,e.default)}}});let Ac=null,Cc=null;const Du={wait:()=>Ac,pending:()=>{Ac=new Promise(t=>{Cc=t})},resolve:()=>{Cc?.(),Ac=null,Cc=null}};var Gv=xe({name:"MainFadeInUpTransition",slots:Object,setup(t,{slots:e}){const n=bn();return()=>n.value?d(ah,e.default):d(Gi,{name:"fade-in-up",mode:"out-in",onBeforeEnter:Du.resolve,onBeforeLeave:Du.pending},e.default)}}),Wv=xe({name:"PageTitle",setup(){const{frontmatter:t,page:e,themeLocale:n}=Vt(),{info:s,items:a}=UM();return()=>d("div",{class:"vp-page-title"},[d("h1",[n.value.titleIcon===!1?null:d(Pt("VPIcon"),{icon:t.value.icon}),e.value.title]),d(Ev,{info:s.value,items:a.value}),d("hr")])}});const dE=(t,e)=>{const n=t.replace(e,"/").split("/"),s=[];let a=Jp(e);return n.forEach((i,r)=>{r!==n.length-1?(a+=`${i}/`,s.push({link:a,name:i||"Home"})):i!==""&&(a+=i,s.push({link:a,name:i}))}),s};var mE=xe({name:"BreadCrumb",setup(){const{frontmatter:t,page:e,routeLocale:n,routePath:s,themeLocale:a}=Vt(),i=Ye([]),r=$(()=>(t.value.breadcrumb??a.value.breadcrumb??!0)&&i.value.length>1),o=$(()=>t.value.breadcrumbIcon??a.value.breadcrumbIcon??!0),l=()=>{const u=dE(e.value.path,n.value).map(({link:c,name:p})=>{const{path:h,meta:f,notFound:v}=Vn(c);return v||f.breadcrumbExclude?null:{title:f.shortTitle||f.title||p,icon:f.icon,path:h}}).filter(c=>c!==null);u.length>1&&(i.value=u)};return vt(()=>{ys(s,l)}),()=>d("nav",{class:["vp-breadcrumb",{disable:!r.value}]},r.value?d("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},i.value.map((u,c)=>d("li",{class:{"is-active":i.value.length-1===c},property:"itemListElement",typeof:"ListItem"},[d(Gt,{to:u.path,property:"item",typeof:"WebPage"},()=>[o.value?d(Pt("VPIcon"),{icon:u.icon}):null,d("span",{property:"name"},u.title||"Unknown")]),d("meta",{property:"position",content:c+1})]))):[])}});const Td=(t,e)=>t===!1?t:wa(t)?{...t,link:xl(t.link,!0,e).link}:xt(t)?xl(t,!0,e):null,Iu=(t,e,n)=>{const s=t.findIndex(i=>i.link===e);if(s!==-1){if(!t[s+n])return null;const i=t[s+n];return i.link?i:"prefix"in i&&!Vn(i.prefix).notFound?{...i,link:i.prefix}:null}for(const i of t)if("children"in i){const r=Iu(i.children,e,n);if(r)return r}const a=t.findIndex(i=>"prefix"in i&&i.prefix===e);if(a!==-1){if(!t[a+n])return null;const i=t[a+n];return i.link?i:"prefix"in i&&!Vn(i.prefix).notFound?{...i,link:i.prefix}:null}return null},gE=()=>{const{frontmatter:t,routePath:e,themeLocale:n}=Vt(),s=gh(),a=$(()=>{const r=Td(t.value.prev,e.value);return r===!1?null:r??(n.value.prevLink===!1?null:Iu(s.value,e.value,-1))}),i=$(()=>{const r=Td(t.value.next,e.value);return r===!1?null:r??(n.value.nextLink===!1?null:Iu(s.value,e.value,1))});return{prevLink:a,nextLink:i}};var vE=xe({name:"PageNav",setup(){const t=Hn(),e=ta(),{prevLink:n,nextLink:s}=gE();return lt("keydown",a=>{if(a.altKey)switch(a.key){case"ArrowRight":{s.value&&(e(s.value.link),a.preventDefault());break}case"ArrowLeft":{n.value&&(e(n.value.link),a.preventDefault());break}}}),()=>n.value||s.value?d("nav",{class:"vp-page-nav"},[n.value?d(fn,{class:"prev",config:n.value},()=>[d("div",{class:"hint"},[d("span",{class:"arrow start"}),t.value.prev]),d("div",{class:"link"},[d(Pt("VPIcon"),{icon:n.value?.icon}),n.value?.text])]):null,s.value?d(fn,{class:"next",config:s.value},()=>[d("div",{class:"hint"},[t.value.next,d("span",{class:"arrow end"})]),d("div",{class:"link"},[s.value?.text,d(Pt("VPIcon"),{icon:s.value?.icon})])]):null]):null}}),_E=xe({name:"PrintButton",setup(){const t=Hn(),e=Aa();return()=>e.value.print===!1?null:d("button",{type:"button",class:"print-button",title:t.value.print,onClick:()=>{window.print()}},d(yv))}});const Ad={selector:[...Array.from({length:6}).map((t,e)=>`#markdown-content > h${e+1}`),"[vp-content] > h2"].join(", "),levels:"deep",ignore:[".vp-badge",".vp-icon"]};var xE=xe({name:"TOC",props:{items:Array},slots:Object,setup(t,{slots:e}){const{frontmatter:n,themeLocale:s}=Vt(),a=$(()=>{const g=n.value.toc??s.value.toc;return wa(g)?{...Ad,...g}:g??!0?Ad:void 0}),i=jy(a),r=Es(),o=Hn(),[l,u]=Br(),c=Ye(),p=je("-2rem"),h=g=>{c.value?.scrollTo({top:g,behavior:"smooth"})},f=()=>{if(c.value){const g=document.querySelector(".vp-toc-item.active");g?p.value=`${g.getBoundingClientRect().top-c.value.getBoundingClientRect().top+c.value.scrollTop}px`:p.value="-2rem"}else p.value="-2rem"};vt(()=>{ys(()=>r.hash,g=>{if(c.value){const m=document.querySelector(`#toc a.vp-toc-link[href$="${g}"]`);if(!m)return;const{top:M,height:x}=c.value.getBoundingClientRect(),{top:S,height:T}=m.getBoundingClientRect();S<M?h(c.value.scrollTop+S-M):S+T>M+x&&h(c.value.scrollTop+S+T-M-x)}},{flush:"post"}),ys(()=>r.fullPath,f,{flush:"post"})});const v=({title:g,level:m,slug:M})=>d(Gt,{to:`#${M}`,class:["vp-toc-link",`level${m}`],onClick:()=>{u()}},()=>g),_=g=>g.length>0?d("ul",{class:"vp-toc-list"},g.map(m=>{const M=_(m.children);return[d("li",{class:["vp-toc-item",{active:r.hash===`#${m.slug}`}]},v(m)),M?d("li",M):null]})):null;return()=>a.value||t.items?.length?d(nh,()=>{const g=t.items?.length?_(t.items):_(i.value),m=e.toc?.(i.value)??(g?[d("div",{class:"vp-toc-header",onClick:()=>{u()}},[o.value.toc,d(_E),d("div",{class:["arrow",l.value?"down":"end"]})]),d("div",{class:["vp-toc-wrapper",l.value?"open":""],ref:c},[g,d("div",{class:"vp-toc-marker",style:{top:p.value}})])]:null),M=e.tocBefore?.(),x=e.tocAfter?.();return Ui(m)&&Ui(M)&&Ui(x)?null:d("div",{class:"vp-toc-placeholder"},[d("aside",{id:"toc","vp-toc":""},[M,m,x])])}):null}});const $v=()=>d(Mt,{name:"edit"},()=>[d("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),d("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);$v.displayName="EditIcon";const yE={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},bE=({docsRepo:t,docsBranch:e,docsDir:n,filePathRelative:s,editLinkPattern:a})=>{if(!s)return null;const i=dh(t);let r="";return a?r=a:i!==null&&(r=yE[i]),r?r.replace(/:repo/u,Ji(t)?t:`https://github.com/${t}`).replace(/:branch/u,e).replace(/:path/u,a0(`${Jp(n)}/${s}`)):null},SE=()=>{const{frontmatter:t,page:e,themeLocale:n}=Vt(),s=Hn();return $(()=>{const{repo:a,docsRepo:i=a,docsBranch:r="main",docsDir:o="",editLink:l,editLinkPattern:u=""}=n.value;if(!(t.value.editLink??l??!0)||!i)return null;const c=bE({docsRepo:i,docsBranch:r,docsDir:o,editLinkPattern:u,filePathRelative:e.value.filePathRelative});return c?{text:s.value.editLink,link:c}:null})};var ME=xe({name:"PageMeta",setup(){const t=Hv(),e=H0(),n=SE(),s=Rb(t.lastUpdated),a=Hn();return()=>d("footer",{class:"vp-page-meta"},[n.value?d("div",{class:"vp-meta-item edit-link"},d(fn,{class:"vp-meta-label",config:n.value},{before:()=>d($v)})):null,d("div",{class:"vp-meta-item git-info"},[(!t.changelog.value||!yn("GitChangelog"))&&s.value?d("div",{class:"update-time"},[d("span",{class:"vp-meta-label"},`${s.value.locale}: `),d("time",{class:"vp-meta-info",datetime:s.value.iso,"data-allow-mismatch":""},s.value.text)]):null,t.contributors.value&&t.contributors.value!=="content"&&e.value.length>0?d("div",{class:"contributors"},[d("span",{class:"vp-meta-label"},`${a.value.contributors}: `),e.value.map(({email:i,name:r},o,l)=>[d("span",{class:"vp-meta-info",title:`email: ${i}`},r),o===l.length-1?"":","])]):null])])}}),EE=xe({name:"PageContent",slots:Object,setup(t,{slots:e}){const{frontmatter:n}=Vt(),{isDarkMode:s}=no();return()=>d("main",{id:"main-content",class:"vp-page"},d(yn("LocalEncrypt")?Pt("LocalEncrypt"):ah,()=>[e.pageTop?.(),n.value.cover?d("div",{class:"page-cover"},d("img",{src:bt(n.value.cover),alt:"","no-view":""})):null,d(mE),d(Wv),d(xE,null,e),e.content?.()??d(Wl,null,e),d(ME),d(vE),yn("CommentService")?d(Pt("CommentService"),{darkmode:s.value}):null,e.pageBottom?.()]))}});const Nu=(t,{slots:e})=>{const{bgImage:n,bgImageDark:s,bgImageStyle:a,color:i,description:r,image:o,imageDark:l,header:u,features:c=[]}=t;return d("div",{class:"vp-feature-wrapper"},[n?d("div",{class:["vp-feature-bg",{light:s}],style:[{"background-image":`url(${n})`},a]}):null,s?d("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${s})`},a]}):null,d("div",{class:"vp-feature",style:i?{color:i}:{}},[e.image?.(t)??[o?d("img",{class:["vp-feature-image",{light:l}],src:bt(o),alt:""}):null,l?d("img",{class:"vp-feature-image dark",src:bt(l),alt:""}):null],e.info?.(t)??[u?d("h2",{class:"vp-feature-header"},u):null,r?d("div",{class:"vp-feature-description",innerHTML:r}):null],c.length>0?d("div",{class:"vp-features"},c.map(({icon:p,title:h,details:f,link:v})=>{const _=[d("h3",{class:"vp-feature-title"},[d(Pt("VPIcon"),{icon:p}),d("span",{innerHTML:h})]),d("div",{class:"vp-feature-details",innerHTML:f})];return v?Fl(v)?d("a",{class:"vp-feature-item link",href:v,"aria-label":h,target:"_blank"},_):d(Gt,{class:"vp-feature-item link",to:v,"aria-label":h},()=>_):d("div",{class:"vp-feature-item"},_)})):null])])};Nu.displayName="FeaturePanel";var wE=xe({name:"HeroInfo",slots:Object,setup(t,{slots:e}){const{frontmatter:n,siteLocale:s}=Vt(),a=$(()=>{const{heroText:l,tagline:u,heroStyle:c,heroFullScreen:p=!1}=n.value;return{text:l??(s.value.title||"Hello"),tagline:u??s.value.description,style:c??null,isFullScreen:p}}),i=$(()=>{const{heroImage:l,heroImageDark:u,heroAlt:c,heroImageStyle:p}=n.value;return{image:l?bt(l):null,imageDark:u?bt(u):null,style:p??null,alt:c??""}}),r=$(()=>{const{bgImage:l,bgImageDark:u,bgImageStyle:c}=n.value;return{image:xt(l)?bt(l):null,imageDark:xt(u)?bt(u):null,style:c??null}}),o=$(()=>n.value.actions??[]);return()=>d("header",{class:["vp-hero-info-wrapper",{"hero-fullscreen":a.value.isFullScreen}],style:a.value.style},[e.heroBg?.(r.value)??[r.value.image?d("div",{class:["vp-hero-mask",{light:r.value.imageDark}],style:[{"background-image":`url(${r.value.image})`},r.value.style]}):null,r.value.imageDark?d("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${r.value.imageDark})`},r.value.style]}):null],d("div",{class:"vp-hero-info"},[e.heroLogo?.(i.value)??d(Qe,{appear:!0,group:!0},()=>{const{image:l,imageDark:u,style:c,alt:p}=i.value;return[l?d("img",{key:"light",class:["vp-hero-image",{light:u}],style:c,src:l,alt:p}):null,u?d("img",{key:"dark",class:"vp-hero-image dark",style:c,src:u,alt:p}):null]}),e.heroInfo?.(a.value)??d("div",{class:"vp-hero-infos"},[a.value.text?d(Qe,{appear:!0,delay:.04},()=>d("h1",{id:"main-title",class:"vp-hero-title"},a.value.text)):null,a.value.tagline?d(Qe,{appear:!0,delay:.08},()=>d("div",{id:"main-description",innerHTML:a.value.tagline})):null,o.value.length>0?d(Qe,{appear:!0,delay:.12},()=>d("p",{class:"vp-hero-actions"},o.value.map(l=>d(fn,{class:["vp-hero-action",l.type??"default","no-external-link-icon"],config:l})))):null])]),a.value.isFullScreen?d(bh,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}}):null])}});const Xv=(t,{slots:e})=>{const{bgImage:n,bgImageDark:s,bgImageStyle:a,color:i,description:r,image:o,imageDark:l,header:u,highlights:c=[],type:p="un-order"}=t;return d("div",{class:"vp-highlight-wrapper",style:i?{color:i}:{}},[n?d("div",{class:["vp-highlight-bg",{light:s}],style:[{"background-image":`url(${n})`},a]}):null,s?d("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${s})`},a]}):null,d("div",{class:"vp-highlight"},[e.image?.(t)??[o?d("img",{class:["vp-highlight-image",{light:l}],src:bt(o),alt:""}):null,l?d("img",{class:"vp-highlight-image dark",src:bt(l),alt:""}):null],e.info?.(t)??[d("div",{class:"vp-highlight-info-wrapper"},d("div",{class:"vp-highlight-info"},[u?d("h2",{class:"vp-highlight-header",innerHTML:u}):null,r?d("div",{class:"vp-highlight-description",innerHTML:r}):null,e.highlights?.(c)??d(p==="order"?"ol":p==="no-order"?"dl":"ul",{class:"vp-highlights"},c.map(({icon:h,title:f,details:v,link:_})=>{const g=[d(p==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[h?d(Pt("VPIcon"),{class:"vp-highlight-icon",icon:h}):null,d("span",{innerHTML:f})]),v?d(p==="no-order"?"dd":"div",{class:"vp-highlight-details",innerHTML:v}):null];return d(p==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:_}]},_?Fl(_)?d("a",{class:"vp-highlight-item link",href:_,"aria-label":f,target:"_blank"},g):d(Gt,{class:"vp-highlight-item link",to:_,"aria-label":f},()=>g):d("div",{class:"vp-highlight-item"},g))}))]))]])])};Xv.displayName="HighlightSection";var TE=xe({name:"HomePage",slots:Object,setup(t,{slots:e}){const n=Dn();return()=>{const{features:s,highlights:a}=n.value;return d("main",{id:"main-content",class:"vp-page vp-project-home","aria-labelledby":n.value.heroText===""?"":"main-title"},[e.heroBefore?.(),d(wE,null,e),e.heroAfter?.(),qs(a)?a.map(i=>"features"in i?d(Nu,i):d(Xv,i)):qs(s)?d(Qe,{appear:!0,delay:.24},()=>d(Nu,{features:s})):null,e.content?.()??d(Qe,{appear:!0,delay:.32},()=>d(Wl,null,e))])}}}),AE=xe({name:"PortfolioHero",slots:Object,setup(t,{slots:e}){const n=hv(),s=Dn(),a=je(0),i=$(()=>s.value.titles?.[a.value]??""),r=je(""),o=$(()=>{const{name:h,avatar:f,avatarDark:v,avatarAlt:_,avatarStyle:g}=s.value;return{name:h??n.value.name,avatar:f?bt(f):null,avatarDark:v?bt(v):null,alt:(_||h)??"",style:g??null}}),l=$(()=>{const{bgImage:h,bgImageDark:f,bgImageStyle:v}=s.value;return{image:xt(h)?bt(h):null,imageDark:xt(f)?bt(f):null,style:v??null}}),u=$(()=>{const{welcome:h,name:f,titles:v=[],medias:_}=s.value;return{name:f??n.value.name,welcome:h??"👋 Hi There, I'm",title:r.value,titles:v,medias:_??null}}),c=()=>{r.value="";let h=0,f=!1;const v=async()=>{if(!f)if(r.value+=i.value[h],h+=1,await Ms(),h<i.value.length)setTimeout(()=>{v()},150);else{const{length:_}=u.value.titles;setTimeout(()=>{a.value=_<=1||a.value===u.value.titles.length-1?0:a.value+1},1e3)}};return v(),()=>{f=!0}};let p;return vt(()=>{ys(i,()=>{p?.(),p=c()})}),()=>d("section",{id:"portfolio",class:["vp-portfolio",{bg:l.value.image}]},[e.portfolioBg?.(l.value)??[l.value.image?d("div",{class:["vp-portfolio-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.style]}):null,l.value.imageDark?d("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.style]}):null],e.portfolioAvatar?.(o.value)??d("div",{class:"vp-portfolio-avatar"},[d(Qe,{delay:.04},()=>{const{avatar:h,avatarDark:f,name:v,alt:_,style:g}=o.value;return[h?d("img",{key:"light",class:{light:f},src:h,title:v,alt:_,style:g}):null,f?d("img",{key:"dark",class:"dark",src:f,title:v,alt:_,style:g}):null]})]),d("div",{class:"vp-portfolio-container"},e.portfolioInfo?.(u.value)??d("div",{class:"vp-portfolio-info"},[d(Qe,{appear:!0,delay:.08},()=>d("h6",{class:"vp-portfolio-welcome"},u.value.welcome)),d(Qe,{appear:!0,delay:.12},()=>d("h1",{class:"vp-portfolio-name",id:"main-title"},u.value.name)),d(Qe,{appear:!0,delay:.16},()=>d("h2",{class:"vp-portfolio-title"},r.value)),d(Qe,{appear:!0,delay:.2},()=>u.value.medias?d("div",{class:"vp-portfolio-medias"},u.value.medias.map(({name:h,url:f,icon:v})=>d("a",{class:"vp-portfolio-media",href:f,rel:"noopener noreferrer",target:"_blank",title:h},d(Pt("VPIcon"),{icon:v,sizing:"both"})))):yn("SocialMedias")?d(Pt("SocialMedias")):null)]))])}}),CE=xe({name:"PortfolioHome",slots:Object,setup(t,{slots:e}){const n=Dn();return()=>{const s=n.value.content??"portfolio";return d("main",{id:"main-content",class:"vp-page vp-portfolio-home","aria-labelledby":"main-title"},[d(AE,null,e),s==="none"?null:e.content?.()??d("div",d(Qe,{appear:!0,delay:.24},()=>d(Wl,{class:{"vp-portfolio-content":s==="portfolio"}},e)))])}}}),RE=xe({name:"Layout",slots:Object,setup(t,{slots:e}){const{frontmatter:n,page:s}=Vt();return()=>[d(yh),d(xh,null,{...e,default:e.default??(()=>n.value.portfolio?d(CE,null,e):n.value.home?d(TE,null,e):d(Gv,()=>d(EE,{key:s.value.path},e))),navScreenBottom:e.navScreenBottom??(yn("BloggerInfo")?()=>d(Pt("BloggerInfo")):null)})]}}),PE=xe({name:"NotFound",slots:Object,setup(t,{slots:e}){const{routeLocale:n,theme:s,themeLocale:a}=Vt(),i=Ta(),r=je(!1),o=$(()=>s.value.locales[r.value?n.value:"/"].routerLocales),l=()=>{if(!r.value)return o.value.notFoundMsg[0];const u=o.value.notFoundMsg;return u[Math.floor(Math.random()*u.length)]};return vt(()=>{r.value=!0}),()=>[d(yh),d(xh,{noSidebar:!0},{...e,default:()=>d("main",{id:"main-content",class:"vp-page not-found"},e.default?.()??[d("div",{class:"not-found-hint"},[d("p",{class:"error-code"},"404"),d("h1",{class:"error-title"},o.value.notFoundTitle),d("p",{class:"error-hint"},l())]),d("div",{class:"actions"},[d("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},o.value.back),d("button",{type:"button",class:"action-button",onClick:()=>{i.push(a.value.home??n.value)}},o.value.home)])])})]}});const Sh=()=>d(Mt,{name:"lock"},()=>d("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Sh.displayName="LockIcon";const LE=JSON.parse('{"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[0,1,2,3,4]},"指南":{"path":"/category/%E6%8C%87%E5%8D%97/","indexes":[5]},"数据库":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","indexes":[6,7,8]},"医院管理学":{"path":"/category/%E5%8C%BB%E9%99%A2%E7%AE%A1%E7%90%86%E5%AD%A6/","indexes":[9]},"java web":{"path":"/category/java-web/","indexes":[10]},"linux":{"path":"/category/linux/","indexes":[11]},"信号与系统":{"path":"/category/%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F/","indexes":[12]},"网络":{"path":"/category/%E7%BD%91%E7%BB%9C/","indexes":[13]},"数据结构":{"path":"/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/","indexes":[14]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","indexes":[2]},"加密":{"path":"/tag/%E5%8A%A0%E5%AF%86/","indexes":[3]},"布局":{"path":"/tag/%E5%B8%83%E5%B1%80/","indexes":[5]},"Markdown":{"path":"/tag/markdown/","indexes":[4]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","indexes":[0]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[0]},"栈":{"path":"/tag/%E6%A0%88/","indexes":[14]},"算法":{"path":"/tag/%E7%AE%97%E6%B3%95/","indexes":[14]}}}}}'),qv=JSON.parse('["/demo/page.html","/demo/","/demo/disable.html","/demo/encrypt.html","/demo/markdown.html","/demo/layout.html","/posts/%E5%85%B6%E4%BB%96/1sjk.html","/posts/%E5%85%B6%E4%BB%96/2sjk.html","/posts/%E5%85%B6%E4%BB%96/3.sjk.html","/posts/%E5%85%B6%E4%BB%96/glx.html","/posts/%E5%85%B6%E4%BB%96/javaweb.html","/posts/%E5%85%B6%E4%BB%96/linux.html","/posts/%E5%85%B6%E4%BB%96/signal.html","/posts/%E5%85%B6%E4%BB%96/web.html","/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stack.html","/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/1.html","/intro.html"]'),DE=JSON.parse('{"article":{"/":{"path":"/article/","indexes":[10,9,11,6,7,8,12,13,0,15,14,16,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[10,9,11,6,7,8,12,13,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[10,9,11,15,6,7,8,12,14,16,1,2,3,5,4,13,0]}}}'),Uu=Ye(LE);$s(Uu);const jv=t=>{const{frontmatter:e,page:n,routeLocale:s}=ti();return $(()=>{const a=t??e.value.blog?.key??"";if(!a)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!(a in Uu.value))throw new Error(`useBlogCategory: key ${a} is invalid`);const i=Uu.value[a][s.value],r={path:i.path,map:{}};for(const o in i.map){const l=i.map[o];r.map[o]={path:l.path,items:[]};for(const u of l.indexes){const{path:c,meta:p}=Vn(qv[u]);r.map[o].items.push({path:c,info:p})}n.value.path===l.path&&(r.currentItems=r.map[o].items)}return r})},Ou=Ye(DE);$s(Ou);const $l=t=>{const{frontmatter:e,routeLocale:n}=ti();return $(()=>{const s=t??e.value.blog?.key??"";if(!s)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!(s in Ou.value))throw new Error(`useBlogType: key ${t} is invalid`);const a=Ou.value[s][n.value],i={path:a.path,items:[]};for(const r of a.indexes){const{path:o,meta:l}=Vn(qv[r]);i.items.push({path:o,info:l})}return i})},IE={BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>'};var NE=[];const so=()=>{const{theme:t,themeLocale:e}=Vt();return $(()=>({...t.value.blog,...e.value.blog}))};var Yv=xe({name:"SocialMedias",setup(){const t=so(),e=bn(),n=$(()=>Qi(t.value.medias??{}).map(([s,a])=>typeof a=="string"?{name:s,icon:IE[s],link:a}:{name:s,...a}));return()=>n.value.length>0?d("div",{class:"vp-social-medias"},n.value.map(({name:s,icon:a,link:i})=>d("a",{class:"vp-social-media",href:i,rel:"noopener noreferrer",target:"_blank","aria-label":s||"",...e.value?{}:{"data-balloon-pos":"up"},innerHTML:Ji(a)?`<img class="vp-social-media-icon ${s}-icon" src="${a}">`:a}))):null}});const Kv=Symbol(""),ao=()=>{const t=Rt(Kv);if(!t)throw new Error("useArticles() is called without provider.");return t},UE=()=>{const t=$l("article");Qn(Kv,t)},na=()=>{const t=os();return $(()=>t.value.blogLocales)},Zv=Symbol.for("categoryMap"),io=()=>{const t=Rt(Zv);if(!t)throw new Error("useCategoryMap() is called without provider.");return t},OE=()=>{const t=jv("category");Qn(Zv,t)},Jv=Symbol.for("tagMap"),ro=()=>{const t=Rt(Jv);if(!t)throw new Error("useTagMap() is called without provider.");return t},FE=()=>{const t=jv("tag");Qn(Jv,t)},Qv=Symbol(""),Mh=()=>{const t=Rt(Qv);if(!t)throw new Error("useTimeline() is called without provider.");return t},BE=()=>{const t=$l("timeline"),e=y0(),n=$(()=>{const s=[];return t.value.items.forEach(({info:a,path:i})=>{const r=rh(a.date);if(r){const o=r.getFullYear();s[0]?.year!==o&&s.unshift({year:o,items:[]}),s[0].items.push({date:r.toLocaleDateString(e.value,{month:"numeric",day:"numeric"}),info:a,path:i})}}),{...t.value,config:s.reverse()}});Qn(Qv,n)};var Eh=xe({name:"BloggerInfo",slots:Object,setup(t,{slots:e}){const n=na(),s=so(),{siteLocale:a,themeLocale:i}=Vt(),r=ao(),o=io(),l=ro(),u=Mh(),c=ta(),p=$(()=>({name:s.value.name??kr(i.value.author)[0]?.name??a.value.title,avatar:s.value.avatar??i.value.logo??null,description:s.value.description??null})),h=$(()=>s.value.intro);return()=>{const{article:f,category:v,tag:_,timeline:g}=n.value,m=[[r.value.path,r.value.items.length,f],[o.value.path,ss(o.value.map).length,v],[l.value.path,ss(l.value.map).length,_],[u.value.path,u.value.items.length,g]];return d("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},e.bloggerInfo?.(p.value)??[d("div",{class:"vp-blogger",...h.value?{"aria-label":n.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>{c(h.value)}}:{}},[p.value.avatar?d("img",{class:"vp-blogger-avatar",src:bt(p.value.avatar),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,p.value.name?d("div",{class:"vp-blogger-name",property:"name"},p.value.name):null,p.value.description?d("div",{class:"vp-blogger-description",innerHTML:p.value.description}):null,h.value?d("meta",{property:"url",content:bt(h.value)}):null]),d("div",{class:"vp-blog-counts"},m.map(([M,x,S])=>d(Gt,{class:"vp-blog-count",to:M},()=>[d("div",{class:"count"},x),d("div",S)]))),d(Yv)])}}});const e1=Symbol(""),wh=()=>{const t=Rt(e1);if(!t)throw new Error("useStars() is called without provider.");return t},kE=()=>{const t=$l("star");Qn(e1,t)},Th=()=>d(Mt,{name:"category"},()=>d("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));Th.displayName="CategoryIcon";const Ah=()=>d(Mt,{name:"tag"},()=>d("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Ah.displayName="TagIcon";const Ch=()=>d(Mt,{name:"timeline"},()=>d("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Ch.displayName="TimelineIcon";const t1=()=>d(Mt,{name:"slides"},()=>d("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));t1.displayName="SlideIcon";const n1=()=>d(Mt,{name:"sticky"},()=>[d("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);n1.displayName="StickyIcon";const Rh=()=>d(Mt,{name:"article"},()=>d("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Rh.displayName="ArticleIcon";const zE=t=>{const e=os();return $(()=>{const{author:n}=t.value;return n?kr(n):n===!1?[]:kr(e.value.author,!1)})},VE=t=>{const e=io();return $(()=>dv(t.value.category).map(n=>({name:n,path:e.value.map[n].path})))},HE=t=>{const e=ro();return $(()=>mv(t.value.tag).map(n=>({name:n,path:e.value.map[n].path})))},GE=t=>$(()=>rh(t.value.date)),WE=t=>{const e=Zi(t,"info"),n=so(),s=zE(e),a=VE(e),i=HE(e),r=GE(e),o=iv(),l=$(()=>({author:s.value,category:a.value,date:r.value,tag:i.value,isOriginal:e.value.isOriginal??!1,readingTime:e.value.readingTime??null,readingTimeLocale:e.value.readingTime&&o.value?av(e.value.readingTime,o.value):null,pageview:t.path})),u=$(()=>n.value.articleInfo??null);return{info:l,items:u}};var $E=xe({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const n=Zi(t,"info"),{info:s,items:a}=WE(t),i=Ta();return()=>{const{title:r,type:o,isEncrypted:l=!1,cover:u=null,excerpt:c=null,sticky:p}=n.value,h=s.value;return d("div",{class:"vp-article-wrapper",onClick:f=>{f.target?.matches("summary")||(f.preventDefault(),i.push(t.path))}},d("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[e.articleCover?.({cover:u})??(u?[d("img",{class:"vp-article-cover",src:bt(u),alt:"",loading:"lazy"}),d("meta",{property:"image",content:bt(u)})]:[]),p?d(n1):null,d(Gt,{to:t.path},()=>e.articleTitle?.({title:r,isEncrypted:l,type:o})??d("header",{class:"vp-article-title"},[l?d(Sh):null,o==="slide"?d(t1):null,d("span",{property:"headline"},r)])),e.articleExcerpt?.({excerpt:c})??(c?d("div",{class:"vp-article-excerpt",innerHTML:c}):null),d("hr",{class:"vp-article-hr"}),e.articleInfo?.(h)??d(Ev,{info:h,items:a.value,onClick:f=>{f.stopPropagation()}})]))}}});const XE='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>';var qE=xe({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(t,{emit:e}){const n=new oh,s=os(),a=je(""),i=$(()=>s.value.paginationLocales),r=$(()=>Math.ceil(t.total/t.perPage)),o=$(()=>!!r.value&&r.value!==1),l=$(()=>r.value<7?!1:t.current>4),u=$(()=>r.value<7?!1:t.current<r.value-3),c=$(()=>{const{current:f}=t;let v=1,_=r.value;const g=[];r.value>=7&&(f<=4&&f<r.value-3?(v=1,_=5):f>4&&f>=r.value-3?(_=r.value,v=r.value-4):r.value>7&&(v=f-2,_=f+2));for(let m=v;m<=_;m++)g.push(m);return g}),p=f=>{e("updateCurrentPage",f)},h=f=>{const v=parseInt(f,10);v<=r.value&&v>0?p(v):n.pop(`${XE}${i.value.errorText.replaceAll(String.raw`\$page`,r.value.toString())}`)};return()=>d("div",{class:"vp-pagination"},o.value?d("nav",{class:"vp-pagination-list"},[d("div",{class:"vp-pagination-number "},[t.current>1?d("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>{p(t.current-1)}},i.value.prev):null,l.value?[d("div",{role:"navigation",onClick:()=>{p(1)}},1),d("div",{class:"ellipsis"},"...")]:null,c.value.map(f=>d("div",{key:f,class:{active:t.current===f},role:"navigation",onClick:()=>{p(f)}},f)),u.value?[d("div",{class:"ellipsis"},"..."),d("div",{role:"navigation",onClick:()=>{p(r.value)}},r.value)]:null,t.current<r.value?d("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>{p(t.current+1)}},i.value.next):null]),d("div",{class:"vp-pagination-nav"},[d("label",{for:"navigation-text"},`${i.value.navigate}: `),d("input",{id:"navigation-text",value:a.value,onInput:({target:f})=>{a.value=f.value},onKeydown:f=>{f.key==="Enter"&&(f.preventDefault(),h(a.value))}}),d("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:i.value.action,onClick:()=>{h(a.value)}},i.value.action)])]):[])}}),Ph=xe({name:"ArticleList",props:{items:{type:Array,required:!0}},slots:Object,setup(t,{slots:e}){const n=Es(),s=Ta(),a=na(),i=so(),r=je(1),o=$(()=>i.value.articlePerPage??10),l=$(()=>t.items.slice((r.value-1)*o.value,r.value*o.value)),u=async c=>{r.value=c;const p={...n.query};!(p.page===c.toString()||c===1&&!p.page)&&(c===1?delete p.page:p.page=c.toString(),await s.push({path:n.path,query:p}))};return vt(()=>{const{page:c}=n.query;u(c?Number(c):1),Lt(r,()=>{const p=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,p)},100)})}),()=>d("div",{id:"article-list",class:"vp-article-list",role:"feed"},l.value.length>0?[...l.value.map(({info:c,path:p},h)=>d(Qe,{appear:!0,delay:h*.04},()=>d($E,{key:p,info:c,path:p},e))),d(qE,{current:r.value,perPage:o.value,total:t.items.length,onUpdateCurrentPage:u})]:d("h2",{class:"vp-empty-hint"},a.value.empty.replace("$text",a.value.article.toLocaleLowerCase())))}});const jE="//theme-hope-assets.vuejs.press/hero/default.jpg";var YE=xe({name:"BlogHero",slots:Object,setup(t,{slots:e}){const{frontmatter:n,siteLocale:s}=Vt(),a=$(()=>{const{heroText:o,heroStyle:l,tagline:u,heroFullScreen:c=!1}=n.value;return{text:o??(s.value.title||"Hello"),tagline:u??"",style:l??null,isFullScreen:c}}),i=$(()=>{const{heroImage:o,heroImageDark:l,heroAlt:u,heroImageStyle:c}=n.value;return{image:o?bt(o):null,imageDark:l?bt(l):null,style:c??null,alt:u??""}}),r=$(()=>{const{bgImage:o,bgImageDark:l,bgImageStyle:u}=n.value;return{image:xt(o)?bt(o):o===!1?null:jE,imageDark:xt(l)?bt(l):null,style:u??null}});return()=>n.value.hero===!1?null:d("div",{class:["vp-blog-hero",{"hero-fullscreen":n.value.heroFullScreen,"no-bg":!r.value.image}]},[e.heroBg?.(r.value)??[r.value.image?d("div",{class:["vp-blog-mask",{light:r.value.imageDark}],style:[{background:`url(${r.value.image}) center/cover no-repeat`},r.value.style]}):null,r.value.imageDark?d("div",{class:"vp-blog-mask dark",style:[{background:`url(${r.value.imageDark}) center/cover no-repeat`},r.value.style]}):null],e.heroLogo?.(i.value)??d(Qe,{appear:!0,group:!0,delay:.04},()=>{const{image:o,imageDark:l,style:u,alt:c}=i.value;return[o?d("img",{key:"light",class:["vp-blog-hero-image",{light:l}],style:u,src:o,alt:c}):null,l?d("img",{key:"dark",class:"vp-blog-hero-image dark",style:u,src:l,alt:c}):null]}),e.heroInfo?.(a.value)??d("div",{class:"vp-blog-hero-info"},[d(Qe,{appear:!0,delay:.08},()=>a.value.text?d("h1",{class:"vp-blog-hero-title"},a.value.text):null),d(Qe,{appear:!0,delay:.12},()=>a.value.tagline?d("div",{class:"vp-blog-hero-description",innerHTML:a.value.tagline}):null)]),n.value.heroFullScreen?d(bh,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}}):null])}}),KE=xe({name:"ArticlesInfo",setup(){const t=ao(),e=na(),n=wh(),s=ta(),a=$(()=>t.value.items.length),i=$(()=>n.value.items);return()=>d(Qe,()=>d("div",{class:"vp-star-article-wrapper"},[d("div",{class:"title",onClick:()=>{s(t.value.path)}},[d(Rh),d("span",{class:"num"},a.value),e.value.article]),d("hr"),i.value.length>0?d("ul",{class:"vp-star-articles"},i.value.map(({info:r,path:o},l)=>d(Qe,{appear:!0,delay:.08*(l+1)},()=>d("li",{class:"vp-star-article"},d(Gt,{to:o},()=>r.title))))):d("div",{class:"vp-star-article-empty"},e.value.empty.replace("$text",e.value.star))]))}}),s1=xe({name:"CategoryList",setup(){const t=Qr(),e=io();return()=>d("ul",{class:"vp-category-list"},Qi(e.value.map).sort(([,n],[,s])=>s.items.length-n.items.length).map(([n,{path:s,items:a}])=>d("li",{class:"vp-category-item"},d(Gt,{class:["vp-category",`color${to(n,Number(ar.colorNumber))}`,{active:s===t.value.path}],to:s},()=>[n,d("span",{class:"vp-category-count"},a.length)]))))}}),ZE=xe({name:"CategoriesInfo",setup(){const t=na(),e=io(),n=ta(),s=$(()=>ss(e.value.map).length);return()=>d("div",{class:"vp-category-wrapper"},[s.value?[d("div",{class:"title",onClick:()=>{n(e.value.path)}},[d(Th),d("span",{class:"num"},s.value),t.value.category]),d("hr"),d(Qe,{delay:.04},()=>d(s1))]:d("div",{class:"vp-category-empty"},t.value.empty.replace("$text",t.value.category))])}}),a1=xe({name:"TagList",setup(){const t=Dn(),e=ro(),n=s=>s===t.value.blog?.name;return()=>d("ul",{class:"vp-tag-list"},Qi(e.value.map).sort(([,s],[,a])=>a.items.length-s.items.length).map(([s,{path:a,items:i}])=>d("li",{class:"vp-tag-item"},d(Gt,{class:["vp-tag",`color${to(s,Number(ar.colorNumber))}`,{active:n(s)}],to:a},()=>[s,d("span",{class:"vp-tag-count"},i.length)]))))}}),JE=xe({name:"TagsInfo",setup(){const t=na(),e=ro(),n=ta(),s=$(()=>ss(e.value.map).length);return()=>d("div",{class:"vp-tag-wrapper"},[s.value?[d("div",{class:"title",onClick:()=>{n(e.value.path)}},[d(Ah),d("span",{class:"num"},s.value),t.value.tag]),d("hr"),d(Qe,{delay:.04},()=>d(a1))]:d("div",{class:"vp-tag-empty"},t.value.empty.replace("$text",t.value.tag))])}}),QE=xe({name:"TimelineList",setup(){const t=na(),e=Mh(),n=ta();return()=>d("div",{class:"timeline-list-wrapper"},[d("div",{class:"title",onClick:()=>{n(e.value.path)}},[d(Ch),d("span",{class:"num"},e.value.items.length),t.value.timeline]),d("hr"),d("div",{class:"timeline-content"},d("ul",{class:"timeline-list"},e.value.config.map(({year:s,items:a},i)=>d(Qe,{appear:!0,delay:.08*(i+1)},()=>d("li",[d("h3",{class:"timeline-year"},s),d("ul",{class:"timeline-year-wrapper"},a.map(({date:r,info:o,path:l})=>d("li",{class:"timeline-item"},[d("span",{class:"timeline-date"},r),d(Gt,{class:"timeline-title",to:l},()=>o.title)])))])))))])}});const e4={article:Rh,category:Th,tag:Ah,timeline:Ch};var i1=xe({name:"InfoList",setup(){const t=na(),e=je("article");return()=>d("div",{class:"vp-blog-infos"},[d("div",{class:"vp-blog-type-switcher"},Qi(e4).map(([n,s])=>d("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{e.value=n}},d("div",{class:["vp-blog-type-icon-wrapper",{active:e.value===n}],"aria-label":t.value[n],"data-balloon-pos":"down"},d(s))))),d(Qe,()=>e.value==="article"?d(KE):e.value==="category"?d(ZE):e.value==="tag"?d(JE):d(QE))])}});const oo=(t,{slots:e})=>d("aside",{class:"vp-blog-info-wrapper"},[e.infoBefore?.(),d(Qe,()=>d(Eh,{},e)),d(Qe,{delay:.04},()=>d(i1)),e.infoAfter?.()]);oo.displayName="InfoPanel";var t4=xe({name:"ProjectPanel",props:{items:{type:Array,required:!0}},setup(t){const e=bn(),n=ta();return()=>d("div",{class:"vp-project-panel"},t.items.map(({icon:s,link:a,name:i,desc:r,background:o})=>d("a",{class:["vp-project-card",{[`color${to(i,Number(ar.colorNumber))}`]:!e.value&&!o}],...o?{style:o}:{},href:zl(a)?bt(a):a,onClick:l=>{n(a),l.preventDefault()}},[s?d(Pt("VPIcon"),{class:"vp-project-icon",icon:s}):null,d("div",{class:"vp-project-name"},i),d("div",{class:"vp-project-desc"},r)])))}}),n4=xe({name:"BlogHome",slots:Object,setup(t,{slots:e}){const n=ao(),s=Dn(),a=$(()=>s.value.projects??[]);return()=>d("div",{class:"vp-page vp-blog-home"},[e.heroBefore?.(),d(YE,{},e),e.heroAfter?.(),d("div",{class:"blog-page-wrapper"},[d("main",{id:"main-content",class:"vp-blog-main"},[e.articlesBefore?.()??(a.value.length>0?d(Qe,{appear:!0,delay:.16},()=>d(t4,{items:a.value})):null),d(Qe,{appear:!0,delay:.24},()=>d(Ph,{items:n.value.items},e)),e.articlesAfter?.()]),d(Qe,{appear:!0,delay:.16},()=>d(oo,{key:"blog"},e))]),e.content?.()??d(Qe,{appear:!0,delay:.28},()=>d(Wl,{},e))])}}),s4=xe({name:"BlogMainLayout",slots:Object,setup(t,{slots:e}){const{isMobile:n}=Gl();return()=>[d(yh),d(xh,{noSidebar:!n.value,noToc:!0},{...e,navScreenBottom:()=>e.navScreenBottom?.()??d(Eh,{},e),sidebarItems:s=>e.sidebarItems?.(s)??(n.value?d(i1):null)})]}}),a4=xe({name:"CategoryPage",slots:Object,setup(t,{slots:e}){const n=Qr(),s=Dn(),a=io(),i=ro(),r=$(()=>{const o=s.value.blog;if(o?.type!=="category")return null;const{name:l,key:u}=o;return u==="category"?{component:s1,items:l?a.value.map[l].items:null}:u==="tag"?{component:a1,items:l?i.value.map[l].items:null}:null});return()=>d("div",{class:"vp-page vp-blog"},d("div",{class:"blog-page-wrapper"},[d("main",{id:"main-content",class:"vp-blog-main"},e.default?.()??[d(Qe,{appear:!0},()=>r.value?d(r.value.component):null),e.articlesBefore?.(),r.value?.items?d(Qe,{appear:!0,delay:.08},()=>[d(Ph,{key:n.value.path,items:r.value.items},e)]):null,e.articlesAfter?.()]),d(Qe,{delay:.16},()=>d(oo,{key:"blog"},e))]))}}),i4=xe({name:"TimelineItems",setup(){const t=so(),e=na(),n=Mh(),s=$(()=>t.value.timeline??e.value.timelineTitle);return()=>d("div",{class:"timeline-wrapper"},d("ul",{class:"timeline-content"},[d(Qe,()=>d("li",{class:"motto"},s.value)),n.value.config.map(({year:a,items:i},r)=>d(Qe,{appear:!0,delay:.08*(r+1),group:!0},()=>[d("h3",{key:"title",id:a,class:"timeline-year-title"},d("span",a)),d("li",{key:"content",class:"timeline-year-list"},[d("ul",{class:"timeline-year-wrapper"},i.map(({date:o,info:l,path:u})=>d("li",{class:"timeline-item"},[d("span",{class:"timeline-date"},o),d(Gt,{class:"timeline-title",to:u},()=>l.title)])))])]))]))}});const r1=(t,{slots:e})=>d("div",{class:"vp-page vp-blog"},d("div",{class:"blog-page-wrapper"},[d("main",{id:"main-content",class:"vp-blog-main"},[e.articlesBefore?.(),d(Qe,{appear:!0},()=>d(i4)),e.articlesAfter?.()]),d(Qe,{appear:!0},()=>d(oo,{key:"blog"},e))]));r1.displayName="TimelinePage";var r4=xe({name:"ArticleType",setup(){const{page:t,routeLocale:e}=Vt(),n=ao(),s=wh(),a=na(),i=$(()=>[{text:a.value.all,path:n.value.path},{text:a.value.star,path:s.value.path},...NE.map(({key:r,path:o})=>{const l=o.replace(/^\//,e.value);return{text:a.value[r]??Vn(l).meta.title??r,path:l}})]);return()=>d("ul",{class:"vp-article-type-wrapper"},i.value.map(r=>d("li",{class:["vp-article-type",{active:r.path===t.value.path}]},d(Gt,{to:r.path},()=>r.text))))}}),o4=xe({name:"TypePage",slots:Object,setup(t,{slots:e}){const n=$l(),s=Dn(),a=Qr(),i=ao(),r=wh(),o=$(()=>{const l=s.value.blog;return l?.type!=="type"||!l.key?i.value.items:l.key==="star"?r.value.items:n.value.items});return()=>d("div",{class:"vp-page vp-blog"},d("div",{class:"blog-page-wrapper"},[d("main",{id:"main-content",class:"vp-blog-main"},e.default?.()??[d(Qe,()=>d(r4)),e.articlesBefore?.(),d(Qe,{appear:!0,delay:.08},()=>d(Ph,{key:a.value.path,items:o.value})),e.articlesAfter?.()]),d(Qe,{appear:!0,delay:.08},()=>d(oo,{key:"blog"},e))]))}}),o1=xe({name:"Blog",slots:Object,setup(t,{slots:e}){const n=Dn();return()=>{const{type:s,key:a}=n.value.blog??{};return d(s4,null,{...e,default:()=>e.default?.()??d(s==="category"?a4:s==="type"?a==="timeline"?r1:o4:n4,null,e)})}}});const l4=()=>{UE(),OE(),kE(),FE(),BE()},c4=setTimeout,Pr=16,l1=10,u4=16,p4=100,ri="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),ia=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],h4=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],f4=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],c1=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Fu=(t,e)=>{if(e<=0||e>t.length)throw Error(`Illegal length: ${e}`);let n=0,s,a;const i=[];for(;n<e;){if(s=t[n++]&255,i.push(ri[s>>2&63]),s=(s&3)<<4,n>=e){i.push(ri[s&63]);break}if(a=t[n++]&255,s|=a>>4&15,i.push(ri[s&63]),s=(a&15)<<2,n>=e){i.push(ri[s&63]);break}a=t[n++]&255,s|=a>>6&3,i.push(ri[s&63]),i.push(ri[a&63])}return i.join("")},d4=(t,e)=>{const n=t.length;let s=0,a=0,i,r,o,l,u,c;const p=[];for(;s<n-1&&a<e&&(c=t.charCodeAt(s++),i=c<ia.length?ia[c]:-1,c=t.charCodeAt(s++),r=c<ia.length?ia[c]:-1,!(i===-1||r===-1||(u=i<<2>>>0,u|=(r&48)>>4,p.push(String.fromCharCode(u)),++a>=e||s>=n)||(c=t.charCodeAt(s++),o=c<ia.length?ia[c]:-1,o===-1)||(u=(r&15)<<4>>>0,u|=(o&60)>>2,p.push(String.fromCharCode(u)),++a>=e||s>=n)));)c=t.charCodeAt(s++),l=c<ia.length?ia[c]:-1,u=(o&3)<<6>>>0,u|=l,p.push(String.fromCharCode(u)),++a;return p.map(h=>h.charCodeAt(0))},zr=(t,e,n,s)=>{let a,i=t[e],r=t[e+1];return i^=n[0],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[1],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[2],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[3],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[4],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[5],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[6],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[7],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[8],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[9],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[10],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[11],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[12],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[13],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[14],a=s[i>>>24],a+=s[256|i>>16&255],a^=s[512|i>>8&255],a+=s[768|i&255],r^=a^n[15],a=s[r>>>24],a+=s[256|r>>16&255],a^=s[512|r>>8&255],a+=s[768|r&255],i^=a^n[16],t[e]=r^n[u4+1],t[e+1]=i,t},Ei=(t,e)=>{let n=0;for(let s=0;s<4;++s)n=n<<8|t[e]&255,e=(e+1)%t.length;return{key:n,offp:e}},Cd=(t,e,n)=>{const s=e.length,a=n.length;let i=0,r=new Int32Array([0,0]),o;for(let l=0;l<s;l++)o=Ei(t,i),i=o.offp,e[l]^=o.key;for(let l=0;l<s;l+=2)r=zr(r,0,e,n),e[l]=r[0],e[l+1]=r[1];for(let l=0;l<a;l+=2)r=zr(r,0,e,n),n[l]=r[0],n[l+1]=r[1]},m4=(t,e,n,s)=>{const a=n.length,i=s.length;let r=0,o=new Int32Array([0,0]),l;for(let u=0;u<a;u++)l=Ei(e,r),r=l.offp,n[u]^=l.key;r=0;for(let u=0;u<a;u+=2)l=Ei(t,r),r=l.offp,o[0]^=l.key,l=Ei(t,r),r=l.offp,o[1]^=l.key,o=zr(o,0,n,s),n[u]=o[0],n[u+1]=o[1];for(let u=0;u<i;u+=2)l=Ei(t,r),r=l.offp,o[0]^=l.key,l=Ei(t,r),r=l.offp,o[1]^=l.key,o=zr(o,0,n,s),s[u]=o[0],s[u+1]=o[1]},Rd=(t,e,n,s,a)=>{const i=new Int32Array(c1),r=i.length;n=1<<n>>>0;const o=new Int32Array(h4),l=new Int32Array(f4);m4(e,t,o,l);let u=0;const c=()=>{if(u<n){const h=Date.now();for(;u<n&&(u+=1,Cd(t,o,l),Cd(e,o,l),!(Date.now()-h>p4)););}else{for(let f=0;f<64;f++)for(let v=0;v<r>>1;v++)zr(i,v<<1,o,l);const h=[];for(let f=0;f<r;f++)h.push(i[f]>>24&255),h.push(i[f]>>16&255),h.push(i[f]>>8&255),h.push(i[f]&255);return s?h:Promise.resolve(h)}if(!s)return new Promise(h=>c4(()=>{c().then(h)}))};if(!s)return c();let p;do p=c();while(!p);return p},g4=t=>{try{const e=new Uint32Array(t);return globalThis.crypto.getRandomValues(e),Array.from(e)}catch{throw Error("WebCryptoAPI / globalThis is not available")}},u1=(...t)=>new Error(`Illegal arguments: ${t.map(e=>typeof e).join(", ")}`),v4=(t=l1)=>{if(typeof t!="number")throw u1(t);return t=t<4?4:t>31?31:t,`$2b$${t<10?"0":""}${t}$${Fu(g4(Pr),Pr)}`},_4=t=>{let e=0,n=0;for(let s=0;s<t.length;++s)n=t.charCodeAt(s),n<128?e+=1:n<2048?e+=2:(n&64512)===55296&&(t.charCodeAt(s+1)&64512)===56320?(s++,e+=4):e+=3;return e},x4=t=>{let e=0,n,s;const a=new Array(_4(t));for(let i=0,r=t.length;i<r;++i)n=t.charCodeAt(i),n<128?a[e++]=n:n<2048?(a[e++]=n>>6|192,a[e++]=n&63|128):(n&64512)===55296&&((s=t.charCodeAt(i+1))&64512)===56320?(n=65536+((n&1023)<<10)+(s&1023),++i,a[e++]=n>>18|240,a[e++]=n>>12&63|128,a[e++]=n>>6&63|128,a[e++]=n&63|128):(a[e++]=n>>12|224,a[e++]=n>>6&63|128,a[e++]=n&63|128);return a},y4=(t,e,n,s)=>{if(typeof t!="string"||typeof e!="string")throw new Error("Invalid content / salt: not a string");let a,i;if(e.charAt(0)!=="$"||e.charAt(1)!=="2")throw new Error("Invalid salt version: "+e.substring(0,2));if(e.charAt(2)==="$")a="\0",i=3;else{if(a=e.charAt(2),a!=="a"&&a!=="b"&&a!=="y"||e.charAt(3)!=="$")throw Error("Invalid salt revision: "+e.substring(2,4));i=4}const r=e.substring(i,i+2),o=/\d\d/.test(r)?Number(r):null;if(o===null)throw new Error("Missing salt rounds");if(o<4||o>31)throw new Error(`Illegal number of rounds (4-31): ${o}`);const l=e.substring(i+3,i+25);t+=a>="a"?"\0":"";const u=x4(t),c=d4(l,Pr);if(c.length!==Pr)throw new Error(`Illegal salt: ${l}`);const p=h=>`$2${a>="a"?a:""}$${o<10?"0":""}${o}$${Fu(c,Pr)}${Fu(h,c1.length*4-1)}`;return n?p(Rd(u,c,o,!0)):Rd(u,c,o,!1).then(h=>p(h))},b4=(t,e=l1)=>y4(t,typeof e=="number"?v4(e):e,!0),Bu=(t,e)=>{if(typeof t!="string"||typeof e!="string")throw u1(t,e);return e.length!==60?!1:b4(t,e.substring(0,29))===e};var p1=xe({name:"PasswordModal",props:{hint:String,full:Boolean,showTitle:Boolean},emits:["verify"],setup(t,{emit:e}){const{frontmatter:n,themeLocale:s}=Vt(),a=je(""),i=je(!1),r=je(!1),o=$(()=>s.value.encryptLocales);let l=null;const u=()=>{l&&clearTimeout(l),i.value=!1,e("verify",a.value,r.value),Ms().then(()=>{i.value=!0,l=setTimeout(()=>{i.value=!1},1e3)})};return()=>d("div",{class:["vp-decrypt-layer",{expand:t.full||n.value.home}]},[t.showTitle?d(Wv):null,d("div",{class:"vp-decrypt-modal"},[d("div",{class:["vp-decrypt-hint",{tried:i.value}]},i.value?o.value.errorHint:d(Sh,{"aria-label":o.value.iconLabel})),t.hint?d("div",{class:"vp-decrypt-hint"},t.hint):null,d("div",{class:"vp-decrypt-input"},[d("input",{type:"password",value:a.value,placeholder:o.value.placeholder,onInput:({target:c})=>{a.value=c.value},onKeydown:({key:c})=>{c==="Enter"&&u()}})]),d("div",{class:"vp-remember-password"},[d("input",{id:"remember-password",type:"checkbox",value:r.value,onChange:()=>{r.value=!r.value}}),d("label",{for:"remember-password"},o.value.remember)]),d("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>{u()}},"OK")])])}});const h1=()=>{const t=Aa();return $(()=>t.value.encrypt)},Pd="VUEPRESS_HOPE_GLOBAL_TOKEN",S4=()=>{const t=h1(),e=ni(Pd,""),n=hh(Pd,"");return{status:$(()=>{const{global:s=!1,admin:a}=t.value,i=s&&!!a?.tokens.length,r=i?e.value?t.value.admin.tokens.every(o=>!Bu(e.value,o)):t.value.admin.tokens.every(o=>!Bu(n.value,o)):!1;return{isEncrypted:i,isLocked:r,hint:a?.hint??""}}),validate:(s,a=!1)=>{(a?e:n).value=s}}};var M4=xe({name:"GlobalEncrypt",slots:Object,setup(t,{slots:e}){const{status:n,validate:s}=S4(),a=je(!1);return vt(()=>{a.value=!0}),()=>{const{isEncrypted:i,isLocked:r,hint:o}=n.value;return d(Gv,()=>i?a.value?r?d(p1,{full:!0,hint:o,onVerify:s}):e.default():null:e.default())}}});const Rc=(t,e)=>!!e&&Bu(e,t),Ld="VUEPRESS_HOPE_PATH_TOKEN",E4=()=>{const t=Qr(),e=h1(),n=ni(Ld,{}),s=hh(Ld,{}),a=r=>wa(e.value.config)?ss(e.value.config).filter(o=>Fr(decodeURI(r),o)).sort((o,l)=>l.length-o.length):[],i=r=>{const{config:o={}}=e.value,l=a(r);if(l.length>0){const u=l.find(c=>o[c].hint);return{isEncrypted:!0,isLocked:l.some(c=>(n.value[c]?o[c].tokens.every(p=>!Rc(p,n.value[c])):!0)&&(s.value[c]?o[c].tokens.every(p=>!Rc(p,s.value[c])):!0)),hint:u?o[u].hint:""}}return{isEncrypted:!1,isLocked:!1,hint:""}};return{status:$(()=>i(t.value.path)),getStatus:i,validate:(r,o=!1)=>{const{config:l={}}=e.value,u=a(t.value.path);for(const c of u)if(l[c].tokens.some(p=>Rc(p,r))){(o?n:s).value[c]=r;break}}}};var w4=xe({name:"LocalEncrypt",slots:Object,setup(t,{slots:e}){const{status:n,validate:s}=E4(),a=je(!1);return vt(()=>{a.value=!0}),()=>{const{isEncrypted:i,isLocked:r,hint:o}=n.value;return i?a.value?r?d(p1,{showTitle:!0,full:!0,hint:o,onVerify:s}):e.default():null:e.default()}}});iM(t=>{const e=t.title,n=t.index??!0,s=t.icon;return n?{title:e,content:s?()=>[d(Pt("VPIcon"),{icon:s,sizing:"both"}),e]:null,order:t.order,index:t.index}:null});const T4={enhance:({app:t,router:e})=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=async(...s)=>(await Du.wait(),n(...s)),WM(t),t.component("BloggerInfo",Eh),t.component("SocialMedias",Yv),t.component("GlobalEncrypt",M4),t.component("LocalEncrypt",w4)},setup:()=>{$M(),jM(),l4()},layouts:{Layout:RE,NotFound:PE,Blog:o1}},A4=Object.freeze(Object.defineProperty({__proto__:null,default:T4},Symbol.toStringTag,{value:"Module"})),C4=()=>{vt(async()=>{await He(()=>import("./copy-tex.min-DiW6421u.js").then(t=>t.c),[])})},R4={setup:()=>{C4()}},P4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),L4=({selector:t='div[class*="language-"].has-collapsed-lines > .collapsed-lines'}={})=>{lt("click",e=>{const n=e.target;if(n.matches(t)){const s=n.parentElement;s?.classList.toggle("collapsed")&&s.scrollIntoView({block:"center",behavior:"instant"})}},{passive:!0})},D4={setup(){L4()}},I4=Object.freeze(Object.defineProperty({__proto__:null,default:D4},Symbol.toStringTag,{value:"Module"})),N4=xe({name:"HitokotoBlogHero",inheritAttrs:!1,props:{text:{type:String,required:!0},image:[String,null],imageDark:[String,null],alt:String,imageStyle:[String,Object]},setup(t){const e=je(""),n=je(""),s=je("");let a=!1;const i=()=>fetch("https://v1.hitokoto.cn").then(r=>r.json()).then(({from:r,hitokoto:o})=>{e.value=o,s.value=r});return vt(()=>{a=!0,Lt(e,()=>{n.value="";let r=0;const o=()=>(n.value+=e.value[r],r+=1,Ms().then(()=>{r<e.value.length?setTimeout(()=>{o()},150):a&&setTimeout(()=>{i()},3e3)}));o()}),i()}),Js(()=>{a=!1}),()=>[d(Qe,{appear:!0,group:!0,delay:.04},()=>[t.image?d("img",{key:"light",class:["vp-blog-hero-image",{light:t.imageDark}],style:t.imageStyle,src:t.image,alt:t.alt??t.text}):null,t.imageDark?d("img",{key:"dark",class:"vp-blog-hero-image dark",style:t.imageStyle,src:t.imageDark,alt:t.alt??t.text}):null]),d(Qe,{appear:!0,delay:.08},()=>t.text?d("h1",{class:"vp-blog-hero-title"},t.text):null),d("div",{class:"hitokoto"},[d("p",{class:"hitokoto-text"},d("span",n.value)),d("p",{class:"hitokoto-author",style:{opacity:n.value.length>4?1:0}},`——「${s.value}」`)])]}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="182",U4=0,Dd=1,O4=2,nl=1,F4=2,yr=3,Ma=0,dn=1,ks=2,Vs=0,Bi=1,yl=2,Id=3,Nd=4,B4=5,Ha=100,k4=101,z4=102,V4=103,H4=104,G4=200,W4=201,$4=202,X4=203,ku=204,zu=205,q4=206,j4=207,Y4=208,K4=209,Z4=210,J4=211,Q4=212,ew=213,tw=214,Vu=0,Hu=1,Gu=2,Xi=3,Wu=4,$u=5,Xu=6,qu=7,f1=0,nw=1,sw=2,vs=0,d1=1,m1=2,g1=3,Dh=4,v1=5,_1=6,x1=7,y1=300,Qa=301,qi=302,ju=303,Yu=304,Xl=306,Ku=1e3,zs=1001,Zu=1002,Jt=1003,aw=1004,Co=1005,an=1006,Pc=1007,Xa=1008,Cn=1009,b1=1010,S1=1011,Vr=1012,Ih=1013,bs=1014,ds=1015,Ys=1016,Nh=1017,Uh=1018,Hr=1020,M1=35902,E1=35899,w1=1021,T1=1022,Kn=1023,Ks=1026,qa=1027,A1=1028,Oh=1029,ji=1030,Fh=1031,Bh=1033,sl=33776,al=33777,il=33778,rl=33779,Ju=35840,Qu=35841,ep=35842,tp=35843,np=36196,sp=37492,ap=37496,ip=37488,rp=37489,op=37490,lp=37491,cp=37808,up=37809,pp=37810,hp=37811,fp=37812,dp=37813,mp=37814,gp=37815,vp=37816,_p=37817,xp=37818,yp=37819,bp=37820,Sp=37821,Mp=36492,Ep=36494,wp=36495,Tp=36283,Ap=36284,Cp=36285,Rp=36286,iw=3200,C1=0,rw=1,_a="",Bn="srgb",Yi="srgb-linear",bl="linear",gt="srgb",oi=7680,Ud=519,ow=512,lw=513,cw=514,kh=515,uw=516,pw=517,zh=518,hw=519,Od=35044,Fd="300 es",ms=2e3,Sl=2001;function R1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Gr(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function fw(){const t=Gr("canvas");return t.style.display="block",t}const Bd={};function kd(...t){const e="THREE."+t.shift();console.log(e,...t)}function qe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ut(...t){const e="THREE."+t.shift();console.error(e,...t)}function Wr(...t){const e=t.join(" ");e in Bd||(Bd[e]=!0,qe(...t))}function dw(t,e,n){return new Promise(function(s,a){function i(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:a();break;case t.TIMEOUT_EXPIRED:setTimeout(i,n);break;default:s()}}setTimeout(i,n)})}class ir{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const s=n[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let i=0,r=a.length;i<r;i++)a[i].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,Pp=180/Math.PI;function lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[s&255]+en[s>>8&255]+en[s>>16&255]+en[s>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function mw(t,e){return(t%e+e)%e}function Dc(t,e,n){return(1-n)*t+n*e}function hr(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,a=e.elements;return this.x=a[0]*n+a[3]*s+a[6],this.y=a[1]*n+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(nt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),a=Math.sin(n),i=this.x-e.x,r=this.y-e.y;return this.x=i*s-r*a+e.x,this.y=i*a+r*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class co{constructor(e=0,n=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=a}static slerpFlat(e,n,s,a,i,r,o){let l=s[a+0],u=s[a+1],c=s[a+2],p=s[a+3],h=i[r+0],f=i[r+1],v=i[r+2],_=i[r+3];if(o<=0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=p;return}if(o>=1){e[n+0]=h,e[n+1]=f,e[n+2]=v,e[n+3]=_;return}if(p!==_||l!==h||u!==f||c!==v){let g=l*h+u*f+c*v+p*_;g<0&&(h=-h,f=-f,v=-v,_=-_,g=-g);let m=1-o;if(g<.9995){const M=Math.acos(g),x=Math.sin(M);m=Math.sin(m*M)/x,o=Math.sin(o*M)/x,l=l*m+h*o,u=u*m+f*o,c=c*m+v*o,p=p*m+_*o}else{l=l*m+h*o,u=u*m+f*o,c=c*m+v*o,p=p*m+_*o;const M=1/Math.sqrt(l*l+u*u+c*c+p*p);l*=M,u*=M,c*=M,p*=M}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=p}static multiplyQuaternionsFlat(e,n,s,a,i,r){const o=s[a],l=s[a+1],u=s[a+2],c=s[a+3],p=i[r],h=i[r+1],f=i[r+2],v=i[r+3];return e[n]=o*v+c*p+l*f-u*h,e[n+1]=l*v+c*h+u*p-o*f,e[n+2]=u*v+c*f+o*h-l*p,e[n+3]=c*v-o*p-l*h-u*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,a){return this._x=e,this._y=n,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,a=e._y,i=e._z,r=e._order,o=Math.cos,l=Math.sin,u=o(s/2),c=o(a/2),p=o(i/2),h=l(s/2),f=l(a/2),v=l(i/2);switch(r){case"XYZ":this._x=h*c*p+u*f*v,this._y=u*f*p-h*c*v,this._z=u*c*v+h*f*p,this._w=u*c*p-h*f*v;break;case"YXZ":this._x=h*c*p+u*f*v,this._y=u*f*p-h*c*v,this._z=u*c*v-h*f*p,this._w=u*c*p+h*f*v;break;case"ZXY":this._x=h*c*p-u*f*v,this._y=u*f*p+h*c*v,this._z=u*c*v+h*f*p,this._w=u*c*p-h*f*v;break;case"ZYX":this._x=h*c*p-u*f*v,this._y=u*f*p+h*c*v,this._z=u*c*v-h*f*p,this._w=u*c*p+h*f*v;break;case"YZX":this._x=h*c*p+u*f*v,this._y=u*f*p+h*c*v,this._z=u*c*v-h*f*p,this._w=u*c*p-h*f*v;break;case"XZY":this._x=h*c*p-u*f*v,this._y=u*f*p-h*c*v,this._z=u*c*v+h*f*p,this._w=u*c*p+h*f*v;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+r)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],a=n[4],i=n[8],r=n[1],o=n[5],l=n[9],u=n[2],c=n[6],p=n[10],h=s+o+p;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(c-l)*f,this._y=(i-u)*f,this._z=(r-a)*f}else if(s>o&&s>p){const f=2*Math.sqrt(1+s-o-p);this._w=(c-l)/f,this._x=.25*f,this._y=(a+r)/f,this._z=(i+u)/f}else if(o>p){const f=2*Math.sqrt(1+o-s-p);this._w=(i-u)/f,this._x=(a+r)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+p-s-o);this._w=(r-a)/f,this._x=(i+u)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,n/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,a=e._y,i=e._z,r=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=s*c+r*o+a*u-i*l,this._y=a*c+r*l+i*o-s*u,this._z=i*c+r*u+s*l-a*o,this._w=r*c-s*o-a*l-i*u,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let s=e._x,a=e._y,i=e._z,r=e._w,o=this.dot(e);o<0&&(s=-s,a=-a,i=-i,r=-r,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+s*n,this._y=this._y*l+a*n,this._z=this._z*l+i*n,this._w=this._w*l+r*n,this._onChangeCallback()}else this._x=this._x*l+s*n,this._y=this._y*l+a*n,this._z=this._z*l+i*n,this._w=this._w*l+r*n,this.normalize();return this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),i=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),i*Math.sin(n),i*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,s=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,a=this.z,i=e.elements;return this.x=i[0]*n+i[3]*s+i[6]*a,this.y=i[1]*n+i[4]*s+i[7]*a,this.z=i[2]*n+i[5]*s+i[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,i=e.elements,r=1/(i[3]*n+i[7]*s+i[11]*a+i[15]);return this.x=(i[0]*n+i[4]*s+i[8]*a+i[12])*r,this.y=(i[1]*n+i[5]*s+i[9]*a+i[13])*r,this.z=(i[2]*n+i[6]*s+i[10]*a+i[14])*r,this}applyQuaternion(e){const n=this.x,s=this.y,a=this.z,i=e.x,r=e.y,o=e.z,l=e.w,u=2*(r*a-o*s),c=2*(o*n-i*a),p=2*(i*s-r*n);return this.x=n+l*u+r*p-o*c,this.y=s+l*c+o*u-i*p,this.z=a+l*p+i*c-r*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,a=this.z,i=e.elements;return this.x=i[0]*n+i[4]*s+i[8]*a,this.y=i[1]*n+i[5]*s+i[9]*a,this.z=i[2]*n+i[6]*s+i[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(nt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,a=e.y,i=e.z,r=n.x,o=n.y,l=n.z;return this.x=a*l-i*o,this.y=i*r-s*l,this.z=s*o-a*r,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(nt(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return n*n+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const a=Math.sin(n)*e;return this.x=a*Math.sin(s),this.y=Math.cos(n)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=a,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new J,zd=new co;class Ze{constructor(e,n,s,a,i,r,o,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,a,i,r,o,l,u)}set(e,n,s,a,i,r,o,l,u){const c=this.elements;return c[0]=e,c[1]=a,c[2]=o,c[3]=n,c[4]=i,c[5]=l,c[6]=s,c[7]=r,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,i=this.elements,r=s[0],o=s[3],l=s[6],u=s[1],c=s[4],p=s[7],h=s[2],f=s[5],v=s[8],_=a[0],g=a[3],m=a[6],M=a[1],x=a[4],S=a[7],T=a[2],P=a[5],L=a[8];return i[0]=r*_+o*M+l*T,i[3]=r*g+o*x+l*P,i[6]=r*m+o*S+l*L,i[1]=u*_+c*M+p*T,i[4]=u*g+c*x+p*P,i[7]=u*m+c*S+p*L,i[2]=h*_+f*M+v*T,i[5]=h*g+f*x+v*P,i[8]=h*m+f*S+v*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],a=e[2],i=e[3],r=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*r*c-n*o*u-s*i*c+s*o*l+a*i*u-a*r*l}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],i=e[3],r=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=c*r-o*u,h=o*l-c*i,f=u*i-r*l,v=n*p+s*h+a*f;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=p*_,e[1]=(a*u-c*s)*_,e[2]=(o*s-a*r)*_,e[3]=h*_,e[4]=(c*n-a*l)*_,e[5]=(a*i-o*n)*_,e[6]=f*_,e[7]=(s*l-u*n)*_,e[8]=(r*n-s*i)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,a,i,r,o){const l=Math.cos(i),u=Math.sin(i);return this.set(s*l,s*u,-s*(l*r+u*o)+r+e,-a*u,a*l,-a*(-u*r+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<9;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new Ze,Vd=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hd=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gw(){const t={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(a,i,r){return this.enabled===!1||i===r||!i||!r||(this.spaces[i].transfer===gt&&(a.r=Hs(a.r),a.g=Hs(a.g),a.b=Hs(a.b)),this.spaces[i].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[i].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===gt&&(a.r=ki(a.r),a.g=ki(a.g),a.b=ki(a.b))),a},workingToColorSpace:function(a,i){return this.convert(a,this.workingColorSpace,i)},colorSpaceToWorking:function(a,i){return this.convert(a,i,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_a?bl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,i=this.workingColorSpace){return a.fromArray(this.spaces[i].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,i,r){return a.copy(this.spaces[i].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,i){return Wr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(a,i)},toWorkingColorSpace:function(a,i){return Wr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(a,i)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],s=[.3127,.329];return t.define({[Yi]:{primaries:e,whitePoint:s,transfer:bl,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:s,transfer:gt,toXYZ:Vd,fromXYZ:Hd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const ot=gw();function Hs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ki(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let li;class vw{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{li===void 0&&(li=Gr("canvas")),li.width=e.width,li.height=e.height;const a=li.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=li}return s.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gr("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),i=a.data;for(let r=0;r<i.length;r++)i[r]=Hs(i[r]/255)*255;return s.putImageData(a,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Hs(n[s]/255)*255):n[s]=Hs(n[s]);return{data:n,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _w=0;class Vh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_w++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let i;if(Array.isArray(a)){i=[];for(let r=0,o=a.length;r<o;r++)a[r].isDataTexture?i.push(Uc(a[r].image)):i.push(Uc(a[r]))}else i=Uc(a);s.url=i}return n||(e.images[this.uuid]=s),s}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let xw=0;const Oc=new J;class rn extends ir{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,s=zs,a=zs,i=an,r=Xa,o=Kn,l=Cn,u=rn.DEFAULT_ANISOTROPY,c=_a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xw++}),this.uuid=lo(),this.name="",this.source=new Vh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=i,this.minFilter=r,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const s=e[n];if(s===void 0){qe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){qe(`Texture.setValues(): property '${n}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ku:e.x=e.x-Math.floor(e.x);break;case zs:e.x=e.x<0?0:1;break;case Zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ku:e.y=e.y-Math.floor(e.y);break;case zs:e.y=e.y<0?0:1;break;case Zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=y1;rn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,s=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,a){return this.x=e,this.y=n,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,a=this.z,i=this.w,r=e.elements;return this.x=r[0]*n+r[4]*s+r[8]*a+r[12]*i,this.y=r[1]*n+r[5]*s+r[9]*a+r[13]*i,this.z=r[2]*n+r[6]*s+r[10]*a+r[14]*i,this.w=r[3]*n+r[7]*s+r[11]*a+r[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,a,i;const l=e.elements,u=l[0],c=l[4],p=l[8],h=l[1],f=l[5],v=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(c-h)<.01&&Math.abs(p-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(p+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+f+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(f+1)/2,T=(m+1)/2,P=(c+h)/4,L=(p+_)/4,O=(v+g)/4;return x>S&&x>T?x<.01?(s=0,a=.707106781,i=.707106781):(s=Math.sqrt(x),a=P/s,i=L/s):S>T?S<.01?(s=.707106781,a=0,i=.707106781):(a=Math.sqrt(S),s=P/a,i=O/a):T<.01?(s=.707106781,a=.707106781,i=0):(i=Math.sqrt(T),s=L/i,a=O/i),this.set(s,a,i,n),this}let M=Math.sqrt((g-v)*(g-v)+(p-_)*(p-_)+(h-c)*(h-c));return Math.abs(M)<.001&&(M=1),this.x=(g-v)/M,this.y=(p-_)/M,this.z=(h-c)/M,this.w=Math.acos((u+f+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(nt(s,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class yw extends ir{constructor(e=1,n=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=s.depth,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const a={width:e,height:n,depth:s.depth},i=new rn(a);this.textures=[];const r=s.count;for(let o=0;o<r;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const n={minFilter:an,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let a=0,i=this.textures.length;a<i;a++)this.textures[a].image.width=e,this.textures[a].image.height=n,this.textures[a].image.depth=s,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const a=Object.assign({},e.textures[n].image);this.textures[n].source=new Vh(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _s extends yw{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class P1 extends rn{constructor(e=null,n=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bw extends rn{constructor(e=null,n=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:a},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const i=s.getAttribute("position");if(n===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=i.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,$n):$n.fromBufferAttribute(i,r),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ro.copy(s.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const a=e.children;for(let i=0,r=a.length;i<r;i++)this.expandByObject(a[i],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),Po.subVectors(this.max,fr),ci.subVectors(e.a,fr),ui.subVectors(e.b,fr),pi.subVectors(e.c,fr),ra.subVectors(ui,ci),oa.subVectors(pi,ui),Ia.subVectors(ci,pi);let n=[0,-ra.z,ra.y,0,-oa.z,oa.y,0,-Ia.z,Ia.y,ra.z,0,-ra.x,oa.z,0,-oa.x,Ia.z,0,-Ia.x,-ra.y,ra.x,0,-oa.y,oa.x,0,-Ia.y,Ia.x,0];return!Fc(n,ci,ui,pi,Po)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,ci,ui,pi,Po))?!1:(Lo.crossVectors(ra,oa),n=[Lo.x,Lo.y,Lo.z],Fc(n,ci,ui,pi,Po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ps[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ps[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ps[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ps[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ps[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ps[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ps[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ps[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ps),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ps=[new J,new J,new J,new J,new J,new J,new J,new J],$n=new J,Ro=new uo,ci=new J,ui=new J,pi=new J,ra=new J,oa=new J,Ia=new J,fr=new J,Po=new J,Lo=new J,Na=new J;function Fc(t,e,n,s,a){for(let i=0,r=t.length-3;i<=r;i+=3){Na.fromArray(t,i);const o=a.x*Math.abs(Na.x)+a.y*Math.abs(Na.y)+a.z*Math.abs(Na.z),l=e.dot(Na),u=n.dot(Na),c=s.dot(Na);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const Sw=new uo,dr=new J,Bc=new J;class ql{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):Sw.setFromPoints(e).getCenter(s);let a=0;for(let i=0,r=e.length;i<r;i++)a=Math.max(a,s.distanceToSquared(e[i]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const n=dr.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),a=(s-this.radius)*.5;this.center.addScaledVector(dr,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(Bc)),this.expandByPoint(dr.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ls=new J,kc=new J,Do=new J,la=new J,zc=new J,Io=new J,Vc=new J;class L1{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ls)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ls.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ls.copy(this.origin).addScaledVector(this.direction,n),Ls.distanceToSquared(e))}distanceSqToSegment(e,n,s,a){kc.copy(e).add(n).multiplyScalar(.5),Do.copy(n).sub(e).normalize(),la.copy(this.origin).sub(kc);const i=e.distanceTo(n)*.5,r=-this.direction.dot(Do),o=la.dot(this.direction),l=-la.dot(Do),u=la.lengthSq(),c=Math.abs(1-r*r);let p,h,f,v;if(c>0)if(p=r*l-o,h=r*o-l,v=i*c,p>=0)if(h>=-v)if(h<=v){const _=1/c;p*=_,h*=_,f=p*(p+r*h+2*o)+h*(r*p+h+2*l)+u}else h=i,p=Math.max(0,-(r*h+o)),f=-p*p+h*(h+2*l)+u;else h=-i,p=Math.max(0,-(r*h+o)),f=-p*p+h*(h+2*l)+u;else h<=-v?(p=Math.max(0,-(-r*i+o)),h=p>0?-i:Math.min(Math.max(-i,-l),i),f=-p*p+h*(h+2*l)+u):h<=v?(p=0,h=Math.min(Math.max(-i,-l),i),f=h*(h+2*l)+u):(p=Math.max(0,-(r*i+o)),h=p>0?i:Math.min(Math.max(-i,-l),i),f=-p*p+h*(h+2*l)+u);else h=r>0?-i:i,p=Math.max(0,-(r*h+o)),f=-p*p+h*(h+2*l)+u;return s&&s.copy(this.origin).addScaledVector(this.direction,p),a&&a.copy(kc).addScaledVector(Do,h),f}intersectSphere(e,n){Ls.subVectors(e.center,this.origin);const s=Ls.dot(this.direction),a=Ls.dot(Ls)-s*s,i=e.radius*e.radius;if(a>i)return null;const r=Math.sqrt(i-a),o=s-r,l=s+r;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,a,i,r,o,l;const u=1/this.direction.x,c=1/this.direction.y,p=1/this.direction.z,h=this.origin;return u>=0?(s=(e.min.x-h.x)*u,a=(e.max.x-h.x)*u):(s=(e.max.x-h.x)*u,a=(e.min.x-h.x)*u),c>=0?(i=(e.min.y-h.y)*c,r=(e.max.y-h.y)*c):(i=(e.max.y-h.y)*c,r=(e.min.y-h.y)*c),s>r||i>a||((i>s||isNaN(s))&&(s=i),(r<a||isNaN(a))&&(a=r),p>=0?(o=(e.min.z-h.z)*p,l=(e.max.z-h.z)*p):(o=(e.max.z-h.z)*p,l=(e.min.z-h.z)*p),s>l||o>a)||((o>s||s!==s)&&(s=o),(l<a||a!==a)&&(a=l),a<0)?null:this.at(s>=0?s:a,n)}intersectsBox(e){return this.intersectBox(e,Ls)!==null}intersectTriangle(e,n,s,a,i){zc.subVectors(n,e),Io.subVectors(s,e),Vc.crossVectors(zc,Io);let r=this.direction.dot(Vc),o;if(r>0){if(a)return null;o=1}else if(r<0)o=-1,r=-r;else return null;la.subVectors(this.origin,e);const l=o*this.direction.dot(Io.crossVectors(la,Io));if(l<0)return null;const u=o*this.direction.dot(zc.cross(la));if(u<0||l+u>r)return null;const c=-o*la.dot(Vc);return c<0?null:this.at(c/r,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,s,a,i,r,o,l,u,c,p,h,f,v,_,g){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,a,i,r,o,l,u,c,p,h,f,v,_,g)}set(e,n,s,a,i,r,o,l,u,c,p,h,f,v,_,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=s,m[12]=a,m[1]=i,m[5]=r,m[9]=o,m[13]=l,m[2]=u,m[6]=c,m[10]=p,m[14]=h,m[3]=f,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,s=e.elements,a=1/hi.setFromMatrixColumn(e,0).length(),i=1/hi.setFromMatrixColumn(e,1).length(),r=1/hi.setFromMatrixColumn(e,2).length();return n[0]=s[0]*a,n[1]=s[1]*a,n[2]=s[2]*a,n[3]=0,n[4]=s[4]*i,n[5]=s[5]*i,n[6]=s[6]*i,n[7]=0,n[8]=s[8]*r,n[9]=s[9]*r,n[10]=s[10]*r,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,a=e.y,i=e.z,r=Math.cos(s),o=Math.sin(s),l=Math.cos(a),u=Math.sin(a),c=Math.cos(i),p=Math.sin(i);if(e.order==="XYZ"){const h=r*c,f=r*p,v=o*c,_=o*p;n[0]=l*c,n[4]=-l*p,n[8]=u,n[1]=f+v*u,n[5]=h-_*u,n[9]=-o*l,n[2]=_-h*u,n[6]=v+f*u,n[10]=r*l}else if(e.order==="YXZ"){const h=l*c,f=l*p,v=u*c,_=u*p;n[0]=h+_*o,n[4]=v*o-f,n[8]=r*u,n[1]=r*p,n[5]=r*c,n[9]=-o,n[2]=f*o-v,n[6]=_+h*o,n[10]=r*l}else if(e.order==="ZXY"){const h=l*c,f=l*p,v=u*c,_=u*p;n[0]=h-_*o,n[4]=-r*p,n[8]=v+f*o,n[1]=f+v*o,n[5]=r*c,n[9]=_-h*o,n[2]=-r*u,n[6]=o,n[10]=r*l}else if(e.order==="ZYX"){const h=r*c,f=r*p,v=o*c,_=o*p;n[0]=l*c,n[4]=v*u-f,n[8]=h*u+_,n[1]=l*p,n[5]=_*u+h,n[9]=f*u-v,n[2]=-u,n[6]=o*l,n[10]=r*l}else if(e.order==="YZX"){const h=r*l,f=r*u,v=o*l,_=o*u;n[0]=l*c,n[4]=_-h*p,n[8]=v*p+f,n[1]=p,n[5]=r*c,n[9]=-o*c,n[2]=-u*c,n[6]=f*p+v,n[10]=h-_*p}else if(e.order==="XZY"){const h=r*l,f=r*u,v=o*l,_=o*u;n[0]=l*c,n[4]=-p,n[8]=u*c,n[1]=h*p+_,n[5]=r*c,n[9]=f*p-v,n[2]=v*p-f,n[6]=o*c,n[10]=_*p+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Mw,e,Ew)}lookAt(e,n,s){const a=this.elements;return En.subVectors(e,n),En.lengthSq()===0&&(En.z=1),En.normalize(),ca.crossVectors(s,En),ca.lengthSq()===0&&(Math.abs(s.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ca.crossVectors(s,En)),ca.normalize(),No.crossVectors(En,ca),a[0]=ca.x,a[4]=No.x,a[8]=En.x,a[1]=ca.y,a[5]=No.y,a[9]=En.y,a[2]=ca.z,a[6]=No.z,a[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,a=n.elements,i=this.elements,r=s[0],o=s[4],l=s[8],u=s[12],c=s[1],p=s[5],h=s[9],f=s[13],v=s[2],_=s[6],g=s[10],m=s[14],M=s[3],x=s[7],S=s[11],T=s[15],P=a[0],L=a[4],O=a[8],b=a[12],E=a[1],D=a[5],U=a[9],k=a[13],V=a[2],X=a[6],B=a[10],G=a[14],q=a[3],le=a[7],ge=a[11],be=a[15];return i[0]=r*P+o*E+l*V+u*q,i[4]=r*L+o*D+l*X+u*le,i[8]=r*O+o*U+l*B+u*ge,i[12]=r*b+o*k+l*G+u*be,i[1]=c*P+p*E+h*V+f*q,i[5]=c*L+p*D+h*X+f*le,i[9]=c*O+p*U+h*B+f*ge,i[13]=c*b+p*k+h*G+f*be,i[2]=v*P+_*E+g*V+m*q,i[6]=v*L+_*D+g*X+m*le,i[10]=v*O+_*U+g*B+m*ge,i[14]=v*b+_*k+g*G+m*be,i[3]=M*P+x*E+S*V+T*q,i[7]=M*L+x*D+S*X+T*le,i[11]=M*O+x*U+S*B+T*ge,i[15]=M*b+x*k+S*G+T*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],a=e[8],i=e[12],r=e[1],o=e[5],l=e[9],u=e[13],c=e[2],p=e[6],h=e[10],f=e[14],v=e[3],_=e[7],g=e[11],m=e[15],M=l*f-u*h,x=o*f-u*p,S=o*h-l*p,T=r*f-u*c,P=r*h-l*c,L=r*p-o*c;return n*(_*M-g*x+m*S)-s*(v*M-g*T+m*P)+a*(v*x-_*T+m*L)-i*(v*S-_*P+g*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=n,a[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],a=e[2],i=e[3],r=e[4],o=e[5],l=e[6],u=e[7],c=e[8],p=e[9],h=e[10],f=e[11],v=e[12],_=e[13],g=e[14],m=e[15],M=p*g*u-_*h*u+_*l*f-o*g*f-p*l*m+o*h*m,x=v*h*u-c*g*u-v*l*f+r*g*f+c*l*m-r*h*m,S=c*_*u-v*p*u+v*o*f-r*_*f-c*o*m+r*p*m,T=v*p*l-c*_*l-v*o*h+r*_*h+c*o*g-r*p*g,P=n*M+s*x+a*S+i*T;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=M*L,e[1]=(_*h*i-p*g*i-_*a*f+s*g*f+p*a*m-s*h*m)*L,e[2]=(o*g*i-_*l*i+_*a*u-s*g*u-o*a*m+s*l*m)*L,e[3]=(p*l*i-o*h*i-p*a*u+s*h*u+o*a*f-s*l*f)*L,e[4]=x*L,e[5]=(c*g*i-v*h*i+v*a*f-n*g*f-c*a*m+n*h*m)*L,e[6]=(v*l*i-r*g*i-v*a*u+n*g*u+r*a*m-n*l*m)*L,e[7]=(r*h*i-c*l*i+c*a*u-n*h*u-r*a*f+n*l*f)*L,e[8]=S*L,e[9]=(v*p*i-c*_*i-v*s*f+n*_*f+c*s*m-n*p*m)*L,e[10]=(r*_*i-v*o*i+v*s*u-n*_*u-r*s*m+n*o*m)*L,e[11]=(c*o*i-r*p*i-c*s*u+n*p*u+r*s*f-n*o*f)*L,e[12]=T*L,e[13]=(c*_*a-v*p*a+v*s*h-n*_*h-c*s*g+n*p*g)*L,e[14]=(v*o*a-r*_*a-v*s*l+n*_*l+r*s*g-n*o*g)*L,e[15]=(r*p*a-c*o*a+c*s*l-n*p*l-r*s*h+n*o*h)*L,this}scale(e){const n=this.elements,s=e.x,a=e.y,i=e.z;return n[0]*=s,n[4]*=a,n[8]*=i,n[1]*=s,n[5]*=a,n[9]*=i,n[2]*=s,n[6]*=a,n[10]*=i,n[3]*=s,n[7]*=a,n[11]*=i,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,a))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),a=Math.sin(n),i=1-s,r=e.x,o=e.y,l=e.z,u=i*r,c=i*o;return this.set(u*r+s,u*o-a*l,u*l+a*o,0,u*o+a*l,c*o+s,c*l-a*r,0,u*l-a*o,c*l+a*r,i*l*l+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,a,i,r){return this.set(1,s,i,0,e,1,r,0,n,a,1,0,0,0,0,1),this}compose(e,n,s){const a=this.elements,i=n._x,r=n._y,o=n._z,l=n._w,u=i+i,c=r+r,p=o+o,h=i*u,f=i*c,v=i*p,_=r*c,g=r*p,m=o*p,M=l*u,x=l*c,S=l*p,T=s.x,P=s.y,L=s.z;return a[0]=(1-(_+m))*T,a[1]=(f+S)*T,a[2]=(v-x)*T,a[3]=0,a[4]=(f-S)*P,a[5]=(1-(h+m))*P,a[6]=(g+M)*P,a[7]=0,a[8]=(v+x)*L,a[9]=(g-M)*L,a[10]=(1-(h+_))*L,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,n,s){const a=this.elements;if(e.x=a[12],e.y=a[13],e.z=a[14],this.determinant()===0)return s.set(1,1,1),n.identity(),this;let i=hi.set(a[0],a[1],a[2]).length();const r=hi.set(a[4],a[5],a[6]).length(),o=hi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(i=-i),Xn.copy(this);const u=1/i,c=1/r,p=1/o;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=p,Xn.elements[9]*=p,Xn.elements[10]*=p,n.setFromRotationMatrix(Xn),s.x=i,s.y=r,s.z=o,this}makePerspective(e,n,s,a,i,r,o=ms,l=!1){const u=this.elements,c=2*i/(n-e),p=2*i/(s-a),h=(n+e)/(n-e),f=(s+a)/(s-a);let v,_;if(l)v=i/(r-i),_=r*i/(r-i);else if(o===ms)v=-(r+i)/(r-i),_=-2*r*i/(r-i);else if(o===Sl)v=-r/(r-i),_=-r*i/(r-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=p,u[9]=f,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,s,a,i,r,o=ms,l=!1){const u=this.elements,c=2/(n-e),p=2/(s-a),h=-(n+e)/(n-e),f=-(s+a)/(s-a);let v,_;if(l)v=1/(r-i),_=r/(r-i);else if(o===ms)v=-2/(r-i),_=-(r+i)/(r-i);else if(o===Sl)v=-1/(r-i),_=-i/(r-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=p,u[9]=0,u[13]=f,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let a=0;a<16;a++)if(n[a]!==s[a])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const hi=new J,Xn=new It,Mw=new J(0,0,0),Ew=new J(1,1,1),ca=new J,No=new J,En=new J,Gd=new It,Wd=new co;class Ss{constructor(e=0,n=0,s=0,a=Ss.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,a=this._order){return this._x=e,this._y=n,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const a=e.elements,i=a[0],r=a[4],o=a[8],l=a[1],u=a[5],c=a[9],p=a[2],h=a[6],f=a[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-r,i)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-p,i),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-r,u)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-r,u));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-p,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-c,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return Gd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gd,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wd.setFromEuler(this),this.setFromQuaternion(Wd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ss.DEFAULT_ORDER="XYZ";class D1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ww=0;const $d=new J,fi=new co,Ds=new It,Uo=new J,mr=new J,Tw=new J,Aw=new co,Xd=new J(1,0,0),qd=new J(0,1,0),jd=new J(0,0,1),Yd={type:"added"},Cw={type:"removed"},di={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Qt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ww++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new J,n=new Ss,s=new co,a=new J(1,1,1);function i(){s.setFromEuler(n,!1)}function r(){n.setFromQuaternion(s,void 0,!1)}n._onChange(i),s._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new It},normalMatrix:{value:new Ze}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new D1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fi.setFromAxisAngle(e,n),this.quaternion.multiply(fi),this}rotateOnWorldAxis(e,n){return fi.setFromAxisAngle(e,n),this.quaternion.premultiply(fi),this}rotateX(e){return this.rotateOnAxis(Xd,e)}rotateY(e){return this.rotateOnAxis(qd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,n){return $d.copy(e).applyQuaternion(this.quaternion),this.position.add($d.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xd,e)}translateY(e){return this.translateOnAxis(qd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ds.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?Uo.copy(e):Uo.set(e,n,s);const a=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ds.lookAt(mr,Uo,this.up):Ds.lookAt(Uo,mr,this.up),this.quaternion.setFromRotationMatrix(Ds),a&&(Ds.extractRotation(a.matrixWorld),fi.setFromRotationMatrix(Ds),this.quaternion.premultiply(fi.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yd),di.child=e,this.dispatchEvent(di),di.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Cw),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ds.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ds.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ds),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yd),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,a=this.children.length;s<a;s++){const r=this.children[s].getObjectByProperty(e,n);if(r!==void 0)return r}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const a=this.children;for(let i=0,r=a.length;i<r;i++)a[i].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Tw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Aw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,a=n.length;s<a;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const a=this.children;for(let i=0,r=a.length;i<r;i++)a[i].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=i(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const p=l[u];i(e.shapes,p)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(i(e.materials,this.material[l]));a.material=o}else a.material=i(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];a.animations.push(i(e.animations,l))}}if(n){const o=r(e.geometries),l=r(e.materials),u=r(e.textures),c=r(e.images),p=r(e.shapes),h=r(e.skeletons),f=r(e.animations),v=r(e.nodes);o.length>0&&(s.geometries=o),l.length>0&&(s.materials=l),u.length>0&&(s.textures=u),c.length>0&&(s.images=c),p.length>0&&(s.shapes=p),h.length>0&&(s.skeletons=h),f.length>0&&(s.animations=f),v.length>0&&(s.nodes=v)}return s.object=a,s;function r(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Qt.DEFAULT_UP=new J(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new J,Is=new J,Gc=new J,Ns=new J,mi=new J,gi=new J,Kd=new J,Wc=new J,$c=new J,Xc=new J,qc=new Bt,jc=new Bt,Yc=new Bt;class jn{constructor(e=new J,n=new J,s=new J){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,a){a.subVectors(s,n),qn.subVectors(e,n),a.cross(qn);const i=a.lengthSq();return i>0?a.multiplyScalar(1/Math.sqrt(i)):a.set(0,0,0)}static getBarycoord(e,n,s,a,i){qn.subVectors(a,n),Is.subVectors(s,n),Gc.subVectors(e,n);const r=qn.dot(qn),o=qn.dot(Is),l=qn.dot(Gc),u=Is.dot(Is),c=Is.dot(Gc),p=r*u-o*o;if(p===0)return i.set(0,0,0),null;const h=1/p,f=(u*l-o*c)*h,v=(r*c-o*l)*h;return i.set(1-f-v,v,f)}static containsPoint(e,n,s,a){return this.getBarycoord(e,n,s,a,Ns)===null?!1:Ns.x>=0&&Ns.y>=0&&Ns.x+Ns.y<=1}static getInterpolation(e,n,s,a,i,r,o,l){return this.getBarycoord(e,n,s,a,Ns)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,Ns.x),l.addScaledVector(r,Ns.y),l.addScaledVector(o,Ns.z),l)}static getInterpolatedAttribute(e,n,s,a,i,r){return qc.setScalar(0),jc.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,s),Yc.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(qc,i.x),r.addScaledVector(jc,i.y),r.addScaledVector(Yc,i.z),r}static isFrontFacing(e,n,s,a){return qn.subVectors(s,n),Is.subVectors(e,n),qn.cross(Is).dot(a)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,a){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,n,s,a){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Is.subVectors(this.a,this.b),qn.cross(Is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,a,i){return jn.getInterpolation(e,this.a,this.b,this.c,n,s,a,i)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,a=this.b,i=this.c;let r,o;mi.subVectors(a,s),gi.subVectors(i,s),Wc.subVectors(e,s);const l=mi.dot(Wc),u=gi.dot(Wc);if(l<=0&&u<=0)return n.copy(s);$c.subVectors(e,a);const c=mi.dot($c),p=gi.dot($c);if(c>=0&&p<=c)return n.copy(a);const h=l*p-c*u;if(h<=0&&l>=0&&c<=0)return r=l/(l-c),n.copy(s).addScaledVector(mi,r);Xc.subVectors(e,i);const f=mi.dot(Xc),v=gi.dot(Xc);if(v>=0&&f<=v)return n.copy(i);const _=f*u-l*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(s).addScaledVector(gi,o);const g=c*v-f*p;if(g<=0&&p-c>=0&&f-v>=0)return Kd.subVectors(i,a),o=(p-c)/(p-c+(f-v)),n.copy(a).addScaledVector(Kd,o);const m=1/(g+_+h);return r=_*m,o=h*m,n.copy(s).addScaledVector(mi,r).addScaledVector(gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ua={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class it{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,s,a=ot.workingColorSpace){return this.r=e,this.g=n,this.b=s,ot.colorSpaceToWorking(this,a),this}setHSL(e,n,s,a=ot.workingColorSpace){if(e=mw(e,1),n=nt(n,0,1),s=nt(s,0,1),n===0)this.r=this.g=this.b=s;else{const i=s<=.5?s*(1+n):s+n-s*n,r=2*s-i;this.r=Kc(r,i,e+1/3),this.g=Kc(r,i,e),this.b=Kc(r,i,e-1/3)}return ot.colorSpaceToWorking(this,a),this}setStyle(e,n=Bn){function s(i){i!==void 0&&parseFloat(i)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let i;const r=a[1],o=a[2];switch(r){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,n);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,n);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return s(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,n);break;default:qe("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const i=a[1],r=i.length;if(r===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,n);if(r===6)return this.setHex(parseInt(i,16),n);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const s=I1[e.toLowerCase()];return s!==void 0?this.setHex(s,n):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hs(e.r),this.g=Hs(e.g),this.b=Hs(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return ot.workingToColorSpace(tn.copy(this),e),Math.round(nt(tn.r*255,0,255))*65536+Math.round(nt(tn.g*255,0,255))*256+Math.round(nt(tn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(tn.copy(this),n);const s=tn.r,a=tn.g,i=tn.b,r=Math.max(s,a,i),o=Math.min(s,a,i);let l,u;const c=(o+r)/2;if(o===r)l=0,u=0;else{const p=r-o;switch(u=c<=.5?p/(r+o):p/(2-r-o),r){case s:l=(a-i)/p+(a<i?6:0);break;case a:l=(i-s)/p+2;break;case i:l=(s-a)/p+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Bn){ot.workingToColorSpace(tn.copy(this),e);const n=tn.r,s=tn.g,a=tn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,n,s){return this.getHSL(ua),this.setHSL(ua.h+e,ua.s+n,ua.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(ua),e.getHSL(Oo);const s=Dc(ua.h,Oo.h,n),a=Dc(ua.s,Oo.s,n),i=Dc(ua.l,Oo.l,n);return this.setHSL(s,a,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,a=this.b,i=e.elements;return this.r=i[0]*n+i[3]*s+i[6]*a,this.g=i[1]*n+i[4]*s+i[7]*a,this.b=i[2]*n+i[5]*s+i[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new it;it.NAMES=I1;let Rw=0;class rr extends ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rw++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Bi,this.side=Ma,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=zu,this.blendEquation=Ha,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=Xi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oi,this.stencilZFail=oi,this.stencilZPass=oi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){qe(`Material: parameter '${n}' has value of undefined.`);continue}const a=this[n];if(a===void 0){qe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(s.blending=this.blending),this.side!==Ma&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ku&&(s.blendSrc=this.blendSrc),this.blendDst!==zu&&(s.blendDst=this.blendDst),this.blendEquation!==Ha&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Xi&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ud&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==oi&&(s.stencilFail=this.stencilFail),this.stencilZFail!==oi&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==oi&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(i){const r=[];for(const o in i){const l=i[o];delete l.metadata,r.push(l)}return r}if(n){const i=a(e.textures),r=a(e.images);i.length>0&&(s.textures=i),r.length>0&&(s.images=r)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const a=n.length;s=new Array(a);for(let i=0;i!==a;++i)s[i]=n[i].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class N1 extends rr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.combine=f1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new J,Fo=new pt;let Pw=0;class xs{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pw++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=Od,this.updateRanges=[],this.gpuType=ds,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let a=0,i=this.itemSize;a<i;a++)this.array[e+a]=n.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Fo.fromBufferAttribute(this,n),Fo.applyMatrix3(e),this.setXY(n,Fo.x,Fo.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=hr(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=vn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=hr(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=hr(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=hr(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=hr(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,a){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),s=vn(s,this.array),a=vn(a,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,n,s,a,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),s=vn(s,this.array),a=vn(a,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Od&&(e.usage=this.usage),e}}class U1 extends xs{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class O1 extends xs{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class _n extends xs{constructor(e,n,s){super(new Float32Array(e),n,s)}}let Lw=0;const Un=new It,Zc=new Qt,vi=new J,wn=new uo,gr=new uo,jt=new J;class Gn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lw++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R1(e)?O1:U1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const i=new Ze().getNormalMatrix(e);s.applyNormalMatrix(i),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,s){return Un.makeTranslation(e,n,s),this.applyMatrix4(Un),this}scale(e,n,s){return Un.makeScale(e,n,s),this.applyMatrix4(Un),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let a=0,i=e.length;a<i;a++){const r=e[a];s.push(r.x,r.y,r.z||0)}this.setAttribute("position",new _n(s,3))}else{const s=Math.min(e.length,n.count);for(let a=0;a<s;a++){const i=e[a];n.setXYZ(a,i.x,i.y,i.z||0)}e.length>n.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const i=n[s];wn.setFromBufferAttribute(i),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const s=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];gr.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(wn.min,gr.min),wn.expandByPoint(jt),jt.addVectors(wn.max,gr.max),wn.expandByPoint(jt)):(wn.expandByPoint(gr.min),wn.expandByPoint(gr.max))}wn.getCenter(s);let a=0;for(let i=0,r=e.count;i<r;i++)jt.fromBufferAttribute(e,i),a=Math.max(a,s.distanceToSquared(jt));if(n)for(let i=0,r=n.length;i<r;i++){const o=n[i],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)jt.fromBufferAttribute(o,u),l&&(vi.fromBufferAttribute(e,u),jt.add(vi)),a=Math.max(a,s.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,a=n.normal,i=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xs(new Float32Array(4*s.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<s.count;O++)o[O]=new J,l[O]=new J;const u=new J,c=new J,p=new J,h=new pt,f=new pt,v=new pt,_=new J,g=new J;function m(O,b,E){u.fromBufferAttribute(s,O),c.fromBufferAttribute(s,b),p.fromBufferAttribute(s,E),h.fromBufferAttribute(i,O),f.fromBufferAttribute(i,b),v.fromBufferAttribute(i,E),c.sub(u),p.sub(u),f.sub(h),v.sub(h);const D=1/(f.x*v.y-v.x*f.y);isFinite(D)&&(_.copy(c).multiplyScalar(v.y).addScaledVector(p,-f.y).multiplyScalar(D),g.copy(p).multiplyScalar(f.x).addScaledVector(c,-v.x).multiplyScalar(D),o[O].add(_),o[b].add(_),o[E].add(_),l[O].add(g),l[b].add(g),l[E].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,b=M.length;O<b;++O){const E=M[O],D=E.start,U=E.count;for(let k=D,V=D+U;k<V;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new J,S=new J,T=new J,P=new J;function L(O){T.fromBufferAttribute(a,O),P.copy(T);const b=o[O];x.copy(b),x.sub(T.multiplyScalar(T.dot(b))).normalize(),S.crossVectors(P,b);const D=S.dot(l[O])<0?-1:1;r.setXYZW(O,x.x,x.y,x.z,D)}for(let O=0,b=M.length;O<b;++O){const E=M[O],D=E.start,U=E.count;for(let k=D,V=D+U;k<V;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new xs(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let h=0,f=s.count;h<f;h++)s.setXYZ(h,0,0,0);const a=new J,i=new J,r=new J,o=new J,l=new J,u=new J,c=new J,p=new J;if(e)for(let h=0,f=e.count;h<f;h+=3){const v=e.getX(h+0),_=e.getX(h+1),g=e.getX(h+2);a.fromBufferAttribute(n,v),i.fromBufferAttribute(n,_),r.fromBufferAttribute(n,g),c.subVectors(r,i),p.subVectors(a,i),c.cross(p),o.fromBufferAttribute(s,v),l.fromBufferAttribute(s,_),u.fromBufferAttribute(s,g),o.add(c),l.add(c),u.add(c),s.setXYZ(v,o.x,o.y,o.z),s.setXYZ(_,l.x,l.y,l.z),s.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,f=n.count;h<f;h+=3)a.fromBufferAttribute(n,h+0),i.fromBufferAttribute(n,h+1),r.fromBufferAttribute(n,h+2),c.subVectors(r,i),p.subVectors(a,i),c.cross(p),s.setXYZ(h+0,c.x,c.y,c.z),s.setXYZ(h+1,c.x,c.y,c.z),s.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,p=o.normalized,h=new u.constructor(l.length*c);let f=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*c;for(let m=0;m<c;m++)h[v++]=u[f++]}return new xs(h,c,p)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,s=this.index.array,a=this.attributes;for(const o in a){const l=a[o],u=e(l,s);n.setAttribute(o,u)}const i=this.morphAttributes;for(const o in i){const l=[],u=i[o];for(let c=0,p=u.length;c<p;c++){const h=u[c],f=e(h,s);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const u=r[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const l in s){const u=s[l];e.data.attributes[l]=u.toJSON(e.data)}const a={};let i=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let p=0,h=u.length;p<h;p++){const f=u[p];c.push(f.toJSON(e.data))}c.length>0&&(a[l]=c,i=!0)}i&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const u in a){const c=a[u];this.setAttribute(u,c.clone(n))}const i=e.morphAttributes;for(const u in i){const c=[],p=i[u];for(let h=0,f=p.length;h<f;h++)c.push(p[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let u=0,c=r.length;u<c;u++){const p=r[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zd=new It,Ua=new L1,Bo=new ql,Jd=new J,ko=new J,zo=new J,Vo=new J,Jc=new J,Ho=new J,Qd=new J,Go=new J;class as extends Qt{constructor(e=new Gn,n=new N1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=a.length;i<r;i++){const o=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,n){const s=this.geometry,a=s.attributes.position,i=s.morphAttributes.position,r=s.morphTargetsRelative;n.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(i&&o){Ho.set(0,0,0);for(let l=0,u=i.length;l<u;l++){const c=o[l],p=i[l];c!==0&&(Jc.fromBufferAttribute(p,e),r?Ho.addScaledVector(Jc,c):Ho.addScaledVector(Jc.sub(n),c))}n.add(Ho)}return n}raycast(e,n){const s=this.geometry,a=this.material,i=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Bo.copy(s.boundingSphere),Bo.applyMatrix4(i),Ua.copy(e.ray).recast(e.near),!(Bo.containsPoint(Ua.origin)===!1&&(Ua.intersectSphere(Bo,Jd)===null||Ua.origin.distanceToSquared(Jd)>(e.far-e.near)**2))&&(Zd.copy(i).invert(),Ua.copy(e.ray).applyMatrix4(Zd),!(s.boundingBox!==null&&Ua.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Ua)))}_computeIntersections(e,n,s){let a;const i=this.geometry,r=this.material,o=i.index,l=i.attributes.position,u=i.attributes.uv,c=i.attributes.uv1,p=i.attributes.normal,h=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(r))for(let v=0,_=h.length;v<_;v++){const g=h[v],m=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,T=x;S<T;S+=3){const P=o.getX(S),L=o.getX(S+1),O=o.getX(S+2);a=Wo(this,m,e,s,u,c,p,P,L,O),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let g=v,m=_;g<m;g+=3){const M=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);a=Wo(this,r,e,s,u,c,p,M,x,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let v=0,_=h.length;v<_;v++){const g=h[v],m=r[g.materialIndex],M=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=M,T=x;S<T;S+=3){const P=S,L=S+1,O=S+2;a=Wo(this,m,e,s,u,c,p,P,L,O),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=g.materialIndex,n.push(a))}}else{const v=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=v,m=_;g<m;g+=3){const M=g,x=g+1,S=g+2;a=Wo(this,r,e,s,u,c,p,M,x,S),a&&(a.faceIndex=Math.floor(g/3),n.push(a))}}}}function Dw(t,e,n,s,a,i,r,o){let l;if(e.side===dn?l=s.intersectTriangle(r,i,a,!0,o):l=s.intersectTriangle(a,i,r,e.side===Ma,o),l===null)return null;Go.copy(o),Go.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Go);return u<n.near||u>n.far?null:{distance:u,point:Go.clone(),object:t}}function Wo(t,e,n,s,a,i,r,o,l,u){t.getVertexPosition(o,ko),t.getVertexPosition(l,zo),t.getVertexPosition(u,Vo);const c=Dw(t,e,n,s,ko,zo,Vo,Qd);if(c){const p=new J;jn.getBarycoord(Qd,ko,zo,Vo,p),a&&(c.uv=jn.getInterpolatedAttribute(a,o,l,u,p,new pt)),i&&(c.uv1=jn.getInterpolatedAttribute(i,o,l,u,p,new pt)),r&&(c.normal=jn.getInterpolatedAttribute(r,o,l,u,p,new J),c.normal.dot(s.direction)>0&&c.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new J,materialIndex:0};jn.getNormal(ko,zo,Vo,h.normal),c.face=h,c.barycoord=p}return c}class po extends Gn{constructor(e=1,n=1,s=1,a=1,i=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:a,heightSegments:i,depthSegments:r};const o=this;a=Math.floor(a),i=Math.floor(i),r=Math.floor(r);const l=[],u=[],c=[],p=[];let h=0,f=0;v("z","y","x",-1,-1,s,n,e,r,i,0),v("z","y","x",1,-1,s,n,-e,r,i,1),v("x","z","y",1,1,e,s,n,a,r,2),v("x","z","y",1,-1,e,s,-n,a,r,3),v("x","y","z",1,-1,e,n,s,a,i,4),v("x","y","z",-1,-1,e,n,-s,a,i,5),this.setIndex(l),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(c,3)),this.setAttribute("uv",new _n(p,2));function v(_,g,m,M,x,S,T,P,L,O,b){const E=S/L,D=T/O,U=S/2,k=T/2,V=P/2,X=L+1,B=O+1;let G=0,q=0;const le=new J;for(let ge=0;ge<B;ge++){const be=ge*D-k;for(let Oe=0;Oe<X;Oe++){const Be=Oe*E-U;le[_]=Be*M,le[g]=be*x,le[m]=V,u.push(le.x,le.y,le.z),le[_]=0,le[g]=0,le[m]=P>0?1:-1,c.push(le.x,le.y,le.z),p.push(Oe/L),p.push(1-ge/O),G+=1}}for(let ge=0;ge<O;ge++)for(let be=0;be<L;be++){const Oe=h+be+X*ge,Be=h+be+X*(ge+1),rt=h+(be+1)+X*(ge+1),et=h+(be+1)+X*ge;l.push(Oe,Be,et),l.push(Be,rt,et),q+=6}o.addGroup(f,q,b),f+=q,h+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new po(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ki(t){const e={};for(const n in t){e[n]={};for(const s in t[n]){const a=t[n][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=a.clone():Array.isArray(a)?e[n][s]=a.slice():e[n][s]=a}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const s=Ki(t[n]);for(const a in s)e[a]=s[a]}return e}function Iw(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function F1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Nw={clone:Ki,merge:cn};var Uw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ow=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class is extends rr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Uw,this.fragmentShader=Ow,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=Iw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?n.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?n.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?n.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?n.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?n.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?n.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?n.uniforms[a]={type:"m4",value:r.toArray()}:n.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class B1 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=ms,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pa=new J,em=new pt,tm=new pt;class zn extends B1{constructor(e=50,n=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pp*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pp*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){pa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pa.x,pa.y).multiplyScalar(-e/pa.z),pa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(pa.x,pa.y).multiplyScalar(-e/pa.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,s,a,i,r){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lc*.5*this.fov)/this.zoom,s=2*n,a=this.aspect*s,i=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,u=r.fullHeight;i+=r.offsetX*a/l,n-=r.offsetY*s/u,a*=r.width/l,s*=r.height/u}const o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+a,n,n-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _i=-90,xi=1;class Fw extends Qt{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new zn(_i,xi,e,n);a.layers=this.layers,this.add(a);const i=new zn(_i,xi,e,n);i.layers=this.layers,this.add(i);const r=new zn(_i,xi,e,n);r.layers=this.layers,this.add(r);const o=new zn(_i,xi,e,n);o.layers=this.layers,this.add(o);const l=new zn(_i,xi,e,n);l.layers=this.layers,this.add(l);const u=new zn(_i,xi,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,a,i,r,o,l]=n;for(const u of n)this.remove(u);if(e===ms)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[i,r,o,l,u,c]=this.children,p=e.getRenderTarget(),h=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(n,i),e.setRenderTarget(s,1,a),e.render(n,r),e.setRenderTarget(s,2,a),e.render(n,o),e.setRenderTarget(s,3,a),e.render(n,l),e.setRenderTarget(s,4,a),e.render(n,u),s.texture.generateMipmaps=_,e.setRenderTarget(s,5,a),e.render(n,c),e.setRenderTarget(p,h,f),e.xr.enabled=v,s.texture.needsPMREMUpdate=!0}}class k1 extends rn{constructor(e=[],n=Qa,s,a,i,r,o,l,u,c){super(e,n,s,a,i,r,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class z1 extends _s{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new k1(a),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new po(5,5,5),i=new is({name:"CubemapFromEquirect",uniforms:Ki(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:dn,blending:Vs});i.uniforms.tEquirect.value=n;const r=new as(a,i),o=n.minFilter;return n.minFilter===Xa&&(n.minFilter=an),new Fw(1,10,this).update(e,r),n.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,n=!0,s=!0,a=!0){const i=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(n,s,a);e.setRenderTarget(i)}}class $o extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bw={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let a=null,i=null,r=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){r=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,s),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const c=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],h=c.position.distanceTo(p.position),f=.02,v=.005;u.inputState.pinching&&h>f+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=f-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=n.getPose(e.gripSpace,s),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(a=n.getPose(e.targetRaySpace,s),a===null&&i!==null&&(a=i),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bw)))}return o!==null&&(o.visible=a!==null),l!==null&&(l.visible=i!==null),u!==null&&(u.visible=r!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new $o;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}class kw extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ss,this.environmentIntensity=1,this.environmentRotation=new Ss,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class zw extends rn{constructor(e=null,n=1,s=1,a,i,r,o,l,u=Jt,c=Jt,p,h){super(null,r,o,l,u,c,a,i,p,h),this.isDataTexture=!0,this.image={data:e,width:n,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new J,Vw=new J,Hw=new Ze;class za{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,a){return this.normal.set(e,n,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const a=eu.subVectors(s,n).cross(Vw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(eu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const i=-(e.start.dot(this.normal)+this.constant)/a;return i<0||i>1?null:n.copy(e.start).addScaledVector(s,i)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Hw.getNormalMatrix(e),a=this.coplanarPoint(eu).applyMatrix4(e),i=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Oa=new ql,Gw=new pt(.5,.5),Xo=new J;class Hh{constructor(e=new za,n=new za,s=new za,a=new za,i=new za,r=new za){this.planes=[e,n,s,a,i,r]}set(e,n,s,a,i,r){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(s),o[3].copy(a),o[4].copy(i),o[5].copy(r),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=ms,s=!1){const a=this.planes,i=e.elements,r=i[0],o=i[1],l=i[2],u=i[3],c=i[4],p=i[5],h=i[6],f=i[7],v=i[8],_=i[9],g=i[10],m=i[11],M=i[12],x=i[13],S=i[14],T=i[15];if(a[0].setComponents(u-r,f-c,m-v,T-M).normalize(),a[1].setComponents(u+r,f+c,m+v,T+M).normalize(),a[2].setComponents(u+o,f+p,m+_,T+x).normalize(),a[3].setComponents(u-o,f-p,m-_,T-x).normalize(),s)a[4].setComponents(l,h,g,S).normalize(),a[5].setComponents(u-l,f-h,m-g,T-S).normalize();else if(a[4].setComponents(u-l,f-h,m-g,T-S).normalize(),n===ms)a[5].setComponents(u+l,f+h,m+g,T+S).normalize();else if(n===Sl)a[5].setComponents(l,h,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Oa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Oa.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Oa)}intersectsSprite(e){Oa.center.set(0,0,0);const n=Gw.distanceTo(e.center);return Oa.radius=.7071067811865476+n,Oa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Oa)}intersectsSphere(e){const n=this.planes,s=e.center,a=-e.radius;for(let i=0;i<6;i++)if(n[i].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const a=n[s];if(Xo.x=a.normal.x>0?e.max.x:e.min.x,Xo.y=a.normal.y>0?e.max.y:e.min.y,Xo.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class V1 extends rr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nm=new It,Lp=new L1,qo=new ql,jo=new J;class Ww extends Qt{constructor(e=new Gn,n=new V1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const s=this.geometry,a=this.matrixWorld,i=e.params.Points.threshold,r=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),qo.copy(s.boundingSphere),qo.applyMatrix4(a),qo.radius+=i,e.ray.intersectsSphere(qo)===!1)return;nm.copy(a).invert(),Lp.copy(e.ray).applyMatrix4(nm);const o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=s.index,p=s.attributes.position;if(u!==null){const h=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let v=h,_=f;v<_;v++){const g=u.getX(v);jo.fromBufferAttribute(p,g),sm(jo,g,l,a,e,n,this)}}else{const h=Math.max(0,r.start),f=Math.min(p.count,r.start+r.count);for(let v=h,_=f;v<_;v++)jo.fromBufferAttribute(p,v),sm(jo,v,l,a,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const a=n[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,r=a.length;i<r;i++){const o=a[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}}function sm(t,e,n,s,a,i,r){const o=Lp.distanceSqToPoint(t);if(o<n){const l=new J;Lp.closestPointToPoint(t,l),l.applyMatrix4(s);const u=a.ray.origin.distanceTo(l);if(u<a.near||u>a.far)return;i.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class $r extends rn{constructor(e,n,s=bs,a,i,r,o=Jt,l=Jt,u,c=Ks,p=1){if(c!==Ks&&c!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:p};super(h,a,i,r,o,l,c,s,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Vh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $w extends $r{constructor(e,n=bs,s=Qa,a,i,r=Jt,o=Jt,l,u=Ks){const c={width:e,height:e,depth:1},p=[c,c,c,c,c,c];super(e,e,n,s,a,i,r,o,l,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class H1 extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jl extends Gn{constructor(e=1,n=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:a};const i=e/2,r=n/2,o=Math.floor(s),l=Math.floor(a),u=o+1,c=l+1,p=e/o,h=n/l,f=[],v=[],_=[],g=[];for(let m=0;m<c;m++){const M=m*h-r;for(let x=0;x<u;x++){const S=x*p-i;v.push(S,-M,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<o;M++){const x=M+u*m,S=M+u*(m+1),T=M+1+u*(m+1),P=M+1+u*m;f.push(x,S,P),f.push(S,T,P)}this.setIndex(f),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ml extends Gn{constructor(e=1,n=32,s=16,a=0,i=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:a,phiLength:i,thetaStart:r,thetaLength:o},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const l=Math.min(r+o,Math.PI);let u=0;const c=[],p=new J,h=new J,f=[],v=[],_=[],g=[];for(let m=0;m<=s;m++){const M=[],x=m/s;let S=0;m===0&&r===0?S=.5/n:m===s&&l===Math.PI&&(S=-.5/n);for(let T=0;T<=n;T++){const P=T/n;p.x=-e*Math.cos(a+P*i)*Math.sin(r+x*o),p.y=e*Math.cos(r+x*o),p.z=e*Math.sin(a+P*i)*Math.sin(r+x*o),v.push(p.x,p.y,p.z),h.copy(p).normalize(),_.push(h.x,h.y,h.z),g.push(P+S,1-x),M.push(u++)}c.push(M)}for(let m=0;m<s;m++)for(let M=0;M<n;M++){const x=c[m][M+1],S=c[m][M],T=c[m+1][M],P=c[m+1][M+1];(m!==0||r>0)&&f.push(x,S,P),(m!==s-1||l<Math.PI)&&f.push(S,T,P)}this.setIndex(f),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xw extends is{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qw extends rr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C1,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ss,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jw extends rr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=iw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Yw extends rr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class Kw{constructor(e,n,s){const a=this;let i=!1,r=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=s,this._abortController=null,this.itemStart=function(c){o++,i===!1&&a.onStart!==void 0&&a.onStart(c,r,o),i=!0},this.itemEnd=function(c){r++,a.onProgress!==void 0&&a.onProgress(c,r,o),r===o&&(i=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(c){a.onError!==void 0&&a.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,p){return u.push(c,p),this},this.removeHandler=function(c){const p=u.indexOf(c);return p!==-1&&u.splice(p,2),this},this.getHandler=function(c){for(let p=0,h=u.length;p<h;p+=2){const f=u[p],v=u[p+1];if(f.global&&(f.lastIndex=0),f.test(c))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Zw=new Kw;class Gh{constructor(e){this.manager=e!==void 0?e:Zw,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const s=this;return new Promise(function(a,i){s.load(e,a,n,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gh.DEFAULT_MATERIAL_NAME="__DEFAULT";const yi=new WeakMap;class Jw extends Gh{constructor(e){super(e)}load(e,n,s,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const i=this,r=tu.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)i.manager.itemStart(e),setTimeout(function(){n&&n(r),i.manager.itemEnd(e)},0);else{let p=yi.get(r);p===void 0&&(p=[],yi.set(r,p)),p.push({onLoad:n,onError:a})}return r}const o=Gr("img");function l(){c(),n&&n(this);const p=yi.get(this)||[];for(let h=0;h<p.length;h++){const f=p[h];f.onLoad&&f.onLoad(this)}yi.delete(this),i.manager.itemEnd(e)}function u(p){c(),a&&a(p),tu.remove(`image:${e}`);const h=yi.get(this)||[];for(let f=0;f<h.length;f++){const v=h[f];v.onError&&v.onError(p)}yi.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),tu.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}}class Qw extends Gh{constructor(e){super(e)}load(e,n,s,a){const i=new rn,r=new Jw(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){i.image=o,i.needsUpdate=!0,n!==void 0&&n(i)},s,a),i}}class G1 extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const nu=new It,am=new J,im=new J;class eT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hh,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,s=this.matrix;am.setFromMatrixPosition(e.matrixWorld),n.position.copy(am),im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(im),n.updateMatrixWorld(),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wh extends B1{constructor(e=-1,n=1,s=1,a=-1,i=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=a,this.near=i,this.far=r,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,a,i,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=a,this.view.width=i,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let i=s-e,r=s+e,o=a+n,l=a-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=u*this.view.offsetX,r=i+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(i,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tT extends eT{constructor(){super(new Wh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nT extends G1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new tT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class sT extends G1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class aT extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function rm(t,e,n,s){const a=iT(s);switch(n){case w1:return t*e;case A1:return t*e/a.components*a.byteLength;case Oh:return t*e/a.components*a.byteLength;case ji:return t*e*2/a.components*a.byteLength;case Fh:return t*e*2/a.components*a.byteLength;case T1:return t*e*3/a.components*a.byteLength;case Kn:return t*e*4/a.components*a.byteLength;case Bh:return t*e*4/a.components*a.byteLength;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qu:case tp:return Math.max(t,16)*Math.max(e,8)/4;case Ju:case ep:return Math.max(t,8)*Math.max(e,8)/2;case np:case sp:case ip:case rp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ap:case op:case lp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cp:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case pp:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hp:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case fp:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case dp:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mp:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gp:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case vp:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _p:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xp:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yp:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bp:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sp:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mp:case Ep:case wp:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Tp:case Ap:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Cp:case Rp:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function iT(t){switch(t){case Cn:case b1:return{byteLength:1,components:1};case Vr:case S1:case Ys:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case bs:case Ih:case ds:return{byteLength:4,components:1};case M1:case E1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W1(){let t=null,e=!1,n=null,s=null;function a(i,r){n(i,r),s=t.requestAnimationFrame(a)}return{start:function(){e!==!0&&n!==null&&(s=t.requestAnimationFrame(a),e=!0)},stop:function(){t.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(i){n=i},setContext:function(i){t=i}}}function rT(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,p=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),o.onUploadCallback();let f;if(u instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)f=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)f=t.SHORT;else if(u instanceof Uint32Array)f=t.UNSIGNED_INT;else if(u instanceof Int32Array)f=t.INT;else if(u instanceof Int8Array)f=t.BYTE;else if(u instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:f,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function s(o,l,u){const c=l.array,p=l.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,c);else{p.sort((f,v)=>f.start-v.start);let h=0;for(let f=1;f<p.length;f++){const v=p[h],_=p[f];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++h,p[h]=_)}p.length=h+1;for(let f=0,v=p.length;f<v;f++){const _=p[f];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(u.buffer,o,l),u.version=o.version}}return{get:a,remove:i,update:r}}var oT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lT=`#ifdef USE_ALPHAHASH
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
#endif`,cT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,hT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fT=`#ifdef USE_AOMAP
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
#endif`,dT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_T=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yT=`#ifdef USE_IRIDESCENCE
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
#endif`,bT=`#ifdef USE_BUMPMAP
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
#endif`,ST=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,PT=`#define PI 3.141592653589793
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
} // validated`,LT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,DT=`vec3 transformedNormal = objectNormal;
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
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FT="gl_FragColor = linearToOutputTexel( gl_FragColor );",BT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,zT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
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
#endif`,HT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
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
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$T=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jT=`#ifdef USE_GRADIENTMAP
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
}`,YT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,QT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
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
#endif`,eA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,aA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,iA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,oA=`#if defined( RE_IndirectDiffuse )
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
#endif`,lA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gA=`#if defined( USE_POINTS_UV )
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
#endif`,vA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,EA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,TA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,RA=`#ifdef USE_NORMALMAP
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
#endif`,PA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,LA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,UA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,OA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,GA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,WA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$A=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qA=`#ifdef USE_SKINNING
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
#endif`,jA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,YA=`#ifdef USE_SKINNING
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
#endif`,KA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,e5=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,t5=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,n5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,a5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const r5=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,o5=`uniform sampler2D t2D;
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
}`,l5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,c5=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h5=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,f5=`#if DEPTH_PACKING == 3200
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
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,d5=`#define DISTANCE
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
	#include <morphinstance_vertex>
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
}`,m5=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,g5=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,v5=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_5=`uniform float scale;
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,x5=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,y5=`#include <common>
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
	#include <morphinstance_vertex>
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
}`,b5=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,S5=`#define LAMBERT
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
	#include <morphinstance_vertex>
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
}`,M5=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,E5=`#define MATCAP
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
	#include <morphinstance_vertex>
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
}`,w5=`#define MATCAP
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,T5=`#define NORMAL
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
	#include <morphinstance_vertex>
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
}`,A5=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,C5=`#define PHONG
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
	#include <morphinstance_vertex>
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
}`,R5=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,P5=`#define STANDARD
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
	#include <morphinstance_vertex>
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
}`,L5=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,D5=`#define TOON
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
	#include <morphinstance_vertex>
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
}`,I5=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
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
}`,N5=`uniform float size;
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
	#include <morphinstance_vertex>
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
}`,U5=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,O5=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,F5=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,B5=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,k5=`uniform vec3 diffuse;
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
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
}`,Je={alphahash_fragment:oT,alphahash_pars_fragment:lT,alphamap_fragment:cT,alphamap_pars_fragment:uT,alphatest_fragment:pT,alphatest_pars_fragment:hT,aomap_fragment:fT,aomap_pars_fragment:dT,batching_pars_vertex:mT,batching_vertex:gT,begin_vertex:vT,beginnormal_vertex:_T,bsdfs:xT,iridescence_fragment:yT,bumpmap_pars_fragment:bT,clipping_planes_fragment:ST,clipping_planes_pars_fragment:MT,clipping_planes_pars_vertex:ET,clipping_planes_vertex:wT,color_fragment:TT,color_pars_fragment:AT,color_pars_vertex:CT,color_vertex:RT,common:PT,cube_uv_reflection_fragment:LT,defaultnormal_vertex:DT,displacementmap_pars_vertex:IT,displacementmap_vertex:NT,emissivemap_fragment:UT,emissivemap_pars_fragment:OT,colorspace_fragment:FT,colorspace_pars_fragment:BT,envmap_fragment:kT,envmap_common_pars_fragment:zT,envmap_pars_fragment:VT,envmap_pars_vertex:HT,envmap_physical_pars_fragment:QT,envmap_vertex:GT,fog_vertex:WT,fog_pars_vertex:$T,fog_fragment:XT,fog_pars_fragment:qT,gradientmap_pars_fragment:jT,lightmap_pars_fragment:YT,lights_lambert_fragment:KT,lights_lambert_pars_fragment:ZT,lights_pars_begin:JT,lights_toon_fragment:eA,lights_toon_pars_fragment:tA,lights_phong_fragment:nA,lights_phong_pars_fragment:sA,lights_physical_fragment:aA,lights_physical_pars_fragment:iA,lights_fragment_begin:rA,lights_fragment_maps:oA,lights_fragment_end:lA,logdepthbuf_fragment:cA,logdepthbuf_pars_fragment:uA,logdepthbuf_pars_vertex:pA,logdepthbuf_vertex:hA,map_fragment:fA,map_pars_fragment:dA,map_particle_fragment:mA,map_particle_pars_fragment:gA,metalnessmap_fragment:vA,metalnessmap_pars_fragment:_A,morphinstance_vertex:xA,morphcolor_vertex:yA,morphnormal_vertex:bA,morphtarget_pars_vertex:SA,morphtarget_vertex:MA,normal_fragment_begin:EA,normal_fragment_maps:wA,normal_pars_fragment:TA,normal_pars_vertex:AA,normal_vertex:CA,normalmap_pars_fragment:RA,clearcoat_normal_fragment_begin:PA,clearcoat_normal_fragment_maps:LA,clearcoat_pars_fragment:DA,iridescence_pars_fragment:IA,opaque_fragment:NA,packing:UA,premultiplied_alpha_fragment:OA,project_vertex:FA,dithering_fragment:BA,dithering_pars_fragment:kA,roughnessmap_fragment:zA,roughnessmap_pars_fragment:VA,shadowmap_pars_fragment:HA,shadowmap_pars_vertex:GA,shadowmap_vertex:WA,shadowmask_pars_fragment:$A,skinbase_vertex:XA,skinning_pars_vertex:qA,skinning_vertex:jA,skinnormal_vertex:YA,specularmap_fragment:KA,specularmap_pars_fragment:ZA,tonemapping_fragment:JA,tonemapping_pars_fragment:QA,transmission_fragment:e5,transmission_pars_fragment:t5,uv_pars_fragment:n5,uv_pars_vertex:s5,uv_vertex:a5,worldpos_vertex:i5,background_vert:r5,background_frag:o5,backgroundCube_vert:l5,backgroundCube_frag:c5,cube_vert:u5,cube_frag:p5,depth_vert:h5,depth_frag:f5,distance_vert:d5,distance_frag:m5,equirect_vert:g5,equirect_frag:v5,linedashed_vert:_5,linedashed_frag:x5,meshbasic_vert:y5,meshbasic_frag:b5,meshlambert_vert:S5,meshlambert_frag:M5,meshmatcap_vert:E5,meshmatcap_frag:w5,meshnormal_vert:T5,meshnormal_frag:A5,meshphong_vert:C5,meshphong_frag:R5,meshphysical_vert:P5,meshphysical_frag:L5,meshtoon_vert:D5,meshtoon_frag:I5,points_vert:N5,points_frag:U5,shadow_vert:O5,shadow_frag:F5,sprite_vert:B5,sprite_frag:k5},Te={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},fs={basic:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new it(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:cn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:cn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:cn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new it(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:cn([Te.points,Te.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:cn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:cn([Te.common,Te.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:cn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:cn([Te.sprite,Te.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:cn([Te.common,Te.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:cn([Te.lights,Te.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};fs.physical={uniforms:cn([fs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yo={r:0,b:0,g:0},Fa=new Ss,z5=new It;function V5(t,e,n,s,a,i,r){const o=new it(0);let l=i===!0?0:1,u,c,p=null,h=0,f=null;function v(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function _(x){let S=!1;const T=v(x);T===null?m(o,l):T&&T.isColor&&(m(T,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?s.buffers.color.setClear(0,0,0,1,r):P==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,r),(t.autoClear||S)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,S){const T=v(S);T&&(T.isCubeTexture||T.mapping===Xl)?(c===void 0&&(c=new as(new po(1,1,1),new is({name:"BackgroundCubeMaterial",uniforms:Ki(fs.backgroundCube.uniforms),vertexShader:fs.backgroundCube.vertexShader,fragmentShader:fs.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,L,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(c)),Fa.copy(S.backgroundRotation),Fa.x*=-1,Fa.y*=-1,Fa.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Fa.y*=-1,Fa.z*=-1),c.material.uniforms.envMap.value=T,c.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(z5.makeRotationFromEuler(Fa)),c.material.toneMapped=ot.getTransfer(T.colorSpace)!==gt,(p!==T||h!==T.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=T,h=T.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new as(new jl(2,2),new is({name:"BackgroundMaterial",uniforms:Ki(fs.background.uniforms),vertexShader:fs.background.vertexShader,fragmentShader:fs.background.fragmentShader,side:Ma,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=ot.getTransfer(T.colorSpace)!==gt,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||h!==T.version||f!==t.toneMapping)&&(u.material.needsUpdate=!0,p=T,h=T.version,f=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,S){x.getRGB(Yo,F1(t)),s.buffers.color.setClear(Yo.r,Yo.g,Yo.b,S,r)}function M(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:g,dispose:M}}function H5(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),s={},a=h(null);let i=a,r=!1;function o(E,D,U,k,V){let X=!1;const B=p(k,U,D);i!==B&&(i=B,u(i.object)),X=f(E,k,U,V),X&&v(E,k,U,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(X||r)&&(r=!1,S(E,D,U,k),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function u(E){return t.bindVertexArray(E)}function c(E){return t.deleteVertexArray(E)}function p(E,D,U){const k=U.wireframe===!0;let V=s[E.id];V===void 0&&(V={},s[E.id]=V);let X=V[D.id];X===void 0&&(X={},V[D.id]=X);let B=X[k];return B===void 0&&(B=h(l()),X[k]=B),B}function h(E){const D=[],U=[],k=[];for(let V=0;V<n;V++)D[V]=0,U[V]=0,k[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:k,object:E,attributes:{},index:null}}function f(E,D,U,k){const V=i.attributes,X=D.attributes;let B=0;const G=U.getAttributes();for(const q in G)if(G[q].location>=0){const ge=V[q];let be=X[q];if(be===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),ge===void 0||ge.attribute!==be||be&&ge.data!==be.data)return!0;B++}return i.attributesNum!==B||i.index!==k}function v(E,D,U,k){const V={},X=D.attributes;let B=0;const G=U.getAttributes();for(const q in G)if(G[q].location>=0){let ge=X[q];ge===void 0&&(q==="instanceMatrix"&&E.instanceMatrix&&(ge=E.instanceMatrix),q==="instanceColor"&&E.instanceColor&&(ge=E.instanceColor));const be={};be.attribute=ge,ge&&ge.data&&(be.data=ge.data),V[q]=be,B++}i.attributes=V,i.attributesNum=B,i.index=k}function _(){const E=i.newAttributes;for(let D=0,U=E.length;D<U;D++)E[D]=0}function g(E){m(E,0)}function m(E,D){const U=i.newAttributes,k=i.enabledAttributes,V=i.attributeDivisors;U[E]=1,k[E]===0&&(t.enableVertexAttribArray(E),k[E]=1),V[E]!==D&&(t.vertexAttribDivisor(E,D),V[E]=D)}function M(){const E=i.newAttributes,D=i.enabledAttributes;for(let U=0,k=D.length;U<k;U++)D[U]!==E[U]&&(t.disableVertexAttribArray(U),D[U]=0)}function x(E,D,U,k,V,X,B){B===!0?t.vertexAttribIPointer(E,D,U,V,X):t.vertexAttribPointer(E,D,U,k,V,X)}function S(E,D,U,k){_();const V=k.attributes,X=U.getAttributes(),B=D.defaultAttributeValues;for(const G in X){const q=X[G];if(q.location>=0){let le=V[G];if(le===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const ge=le.normalized,be=le.itemSize,Oe=e.get(le);if(Oe===void 0)continue;const Be=Oe.buffer,rt=Oe.type,et=Oe.bytesPerElement,ie=rt===t.INT||rt===t.UNSIGNED_INT||le.gpuType===Ih;if(le.isInterleavedBufferAttribute){const F=le.data,ae=F.stride,oe=le.offset;if(F.isInstancedInterleavedBuffer){for(let re=0;re<q.locationSize;re++)m(q.location+re,F.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let re=0;re<q.locationSize;re++)g(q.location+re);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let re=0;re<q.locationSize;re++)x(q.location+re,be/q.locationSize,rt,ge,ae*et,(oe+be/q.locationSize*re)*et,ie)}else{if(le.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)m(q.location+F,le.meshPerAttribute);E.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let F=0;F<q.locationSize;F++)g(q.location+F);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let F=0;F<q.locationSize;F++)x(q.location+F,be/q.locationSize,rt,ge,be*et,be/q.locationSize*F*et,ie)}}else if(B!==void 0){const ge=B[G];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(q.location,ge);break;case 3:t.vertexAttrib3fv(q.location,ge);break;case 4:t.vertexAttrib4fv(q.location,ge);break;default:t.vertexAttrib1fv(q.location,ge)}}}}M()}function T(){O();for(const E in s){const D=s[E];for(const U in D){const k=D[U];for(const V in k)c(k[V].object),delete k[V];delete D[U]}delete s[E]}}function P(E){if(s[E.id]===void 0)return;const D=s[E.id];for(const U in D){const k=D[U];for(const V in k)c(k[V].object),delete k[V];delete D[U]}delete s[E.id]}function L(E){for(const D in s){const U=s[D];if(U[E.id]===void 0)continue;const k=U[E.id];for(const V in k)c(k[V].object),delete k[V];delete U[E.id]}}function O(){b(),r=!0,i!==a&&(i=a,u(i.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:O,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:g,disableUnusedAttributes:M}}function G5(t,e,n){let s;function a(u){s=u}function i(u,c){t.drawArrays(s,u,c),n.update(c,s,1)}function r(u,c,p){p!==0&&(t.drawArraysInstanced(s,u,c,p),n.update(c,s,p))}function o(u,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,u,0,c,0,p);let f=0;for(let v=0;v<p;v++)f+=c[v];n.update(f,s,1)}function l(u,c,p,h){if(p===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let v=0;v<u.length;v++)r(u[v],c[v],h[v]);else{f.multiDrawArraysInstancedWEBGL(s,u,0,c,0,h,0,p);let v=0;for(let _=0;_<p;_++)v+=c[_]*h[_];n.update(v,s,1)}}this.setMode=a,this.render=i,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function W5(t,e,n,s){let a;function i(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");a=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(L){return!(L!==Kn&&s.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const O=L===Ys&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Cn&&s.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ds&&!O)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(qe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const p=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),P=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:S,maxSamples:T,samples:P}}function $5(t){const e=this;let n=null,s=0,a=!1,i=!1;const r=new za,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(p,h){const f=p.length!==0||h||s!==0||a;return a=h,s=p.length,f},this.beginShadows=function(){i=!0,c(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(p,h){n=c(p,h,0)},this.setState=function(p,h,f){const v=p.clippingPlanes,_=p.clipIntersection,g=p.clipShadows,m=t.get(p);if(!a||v===null||v.length===0||i&&!g)i?c(null):u();else{const M=i?0:s,x=M*4;let S=m.clippingState||null;l.value=S,S=c(v,h,x,f);for(let T=0;T!==x;++T)S[T]=n[T];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function c(p,h,f,v){const _=p!==null?p.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const m=f+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,S=f;x!==_;++x,S+=4)r.copy(p[x]).applyMatrix4(M,o),r.normal.toArray(g,S),g[S+3]=r.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function X5(t){let e=new WeakMap;function n(r,o){return o===ju?r.mapping=Qa:o===Yu&&(r.mapping=qi),r}function s(r){if(r&&r.isTexture){const o=r.mapping;if(o===ju||o===Yu)if(e.has(r)){const l=e.get(r).texture;return n(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const u=new z1(l.height);return u.fromEquirectangularTexture(t,r),e.set(r,u),r.addEventListener("dispose",a),n(u.texture,r.mapping)}else return null}}return r}function a(r){const o=r.target;o.removeEventListener("dispose",a);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function i(){e=new WeakMap}return{get:s,dispose:i}}const xa=4,om=[.125,.215,.35,.446,.526,.582],Ga=20,q5=256,vr=new Wh,lm=new it;let su=null,au=0,iu=0,ru=!1;const j5=new J;class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,s=.1,a=100,i={}){const{size:r=256,position:o=j5}=i;su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,a,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(su,au,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,bi(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qa||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),au=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:an,minFilter:an,generateMipmaps:!1,type:Ys,format:Kn,colorSpace:Yi,depthBuffer:!1},a=um(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,n,s);const{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Y5(i)),this._blurMaterial=Z5(i,e,n),this._ggxMaterial=K5(i,e,n)}return a}_compileMaterial(e){const n=new as(new Gn,e);this._renderer.compile(n,vr)}_sceneToCubeUV(e,n,s,a,i){const l=new zn(90,1,n,s),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],p=this._renderer,h=p.autoClear,f=p.toneMapping;p.getClearColor(lm),p.toneMapping=vs,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(a),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new as(new po,new N1({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const M=e.background;M?M.isColor&&(g.color.copy(M),e.background=null,m=!0):(g.color.copy(lm),m=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+c[x],i.y,i.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+c[x],i.z)):(l.up.set(0,u[x],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+c[x]));const T=this._cubeSize;bi(a,S*T,x>2?T:0,T,T),p.setRenderTarget(a),m&&p.render(_,l),p.render(e,l)}p.toneMapping=f,p.autoClear=h,e.background=M}_textureToCubeUV(e,n){const s=this._renderer,a=e.mapping===Qa||e.mapping===qi;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const i=a?this._cubemapMaterial:this._equirectMaterial,r=this._lodMeshes[0];r.material=i;const o=i.uniforms;o.envMap.value=e;const l=this._cubeSize;bi(n,0,0,3*l,2*l),s.setRenderTarget(n),s.render(r,vr)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const a=this._lodMeshes.length;for(let i=1;i<a;i++)this._applyGGXFilter(e,i-1,i);n.autoClear=s}_applyGGXFilter(e,n,s){const a=this._renderer,i=this._pingPongRenderTarget,r=this._ggxMaterial,o=this._lodMeshes[s];o.material=r;const l=r.uniforms,u=s/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-c*c),h=0+u*1.25,f=p*h,{_lodMax:v}=this,_=this._sizeLods[s],g=3*_*(s>v-xa?s-v+xa:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=v-n,bi(i,g,m,3*_,2*_),a.setRenderTarget(i),a.render(o,vr),l.envMap.value=i.texture,l.roughness.value=0,l.mipInt.value=v-s,bi(e,g,m,3*_,2*_),a.setRenderTarget(e),a.render(o,vr)}_blur(e,n,s,a,i){const r=this._pingPongRenderTarget;this._halfBlur(e,r,n,s,a,"latitudinal",i),this._halfBlur(r,e,s,s,a,"longitudinal",i)}_halfBlur(e,n,s,a,i,r,o){const l=this._renderer,u=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const c=3,p=this._lodMeshes[a];p.material=u;const h=u.uniforms,f=this._sizeLods[s]-1,v=isFinite(i)?Math.PI/(2*f):2*Math.PI/(2*Ga-1),_=i/v,g=isFinite(i)?1+Math.floor(c*_):Ga;g>Ga&&qe(`sigmaRadians, ${i}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ga}`);const m=[];let M=0;for(let L=0;L<Ga;++L){const O=L/_,b=Math.exp(-O*O/2);m.push(b),L===0?M+=b:L<g&&(M+=2*b)}for(let L=0;L<m.length;L++)m[L]=m[L]/M;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=m,h.latitudinal.value=r==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-s;const S=this._sizeLods[a],T=3*S*(a>x-xa?a-x+xa:0),P=4*(this._cubeSize-S);bi(n,T,P,3*S,2*S),l.setRenderTarget(n),l.render(p,vr)}}function Y5(t){const e=[],n=[],s=[];let a=t;const i=t-xa+1+om.length;for(let r=0;r<i;r++){const o=Math.pow(2,a);e.push(o);let l=1/o;r>t-xa?l=om[r-t+xa-1]:r===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,p=1+u,h=[c,c,p,c,p,p,c,c,p,p,c,p],f=6,v=6,_=3,g=2,m=1,M=new Float32Array(_*v*f),x=new Float32Array(g*v*f),S=new Float32Array(m*v*f);for(let P=0;P<f;P++){const L=P%3*2/3-1,O=P>2?0:-1,b=[L,O,0,L+2/3,O,0,L+2/3,O+1,0,L,O,0,L+2/3,O+1,0,L,O+1,0];M.set(b,_*v*P),x.set(h,g*v*P);const E=[P,P,P,P,P,P];S.set(E,m*v*P)}const T=new Gn;T.setAttribute("position",new xs(M,_)),T.setAttribute("uv",new xs(x,g)),T.setAttribute("faceIndex",new xs(S,m)),s.push(new as(T,null)),a>xa&&a--}return{lodMeshes:s,sizeLods:e,sigmas:n}}function um(t,e,n){const s=new _s(t,e,n);return s.texture.mapping=Xl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function bi(t,e,n,s,a){t.viewport.set(e,n,s,a),t.scissor.set(e,n,s,a)}function K5(t,e,n){return new is({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q5,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function Z5(t,e,n){const s=new Float32Array(Ga),a=new J(0,1,0);return new is({name:"SphericalGaussianBlur",defines:{n:Ga,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function pm(){return new is({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function hm(){return new is({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vs,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function J5(t){let e=new WeakMap,n=null;function s(o){if(o&&o.isTexture){const l=o.mapping,u=l===ju||l===Yu,c=l===Qa||l===qi;if(u||c){let p=e.get(o);const h=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return n===null&&(n=new cm(t)),p=u?n.fromEquirectangular(o,p):n.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const f=o.image;return u&&f&&f.height>0||c&&f&&a(f)?(n===null&&(n=new cm(t)),p=u?n.fromEquirectangular(o):n.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",i),p.texture):null}}}return o}function a(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function i(o){const l=o.target;l.removeEventListener("dispose",i);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function r(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:r}}function Q5(t){const e={};function n(s){if(e[s]!==void 0)return e[s];const a=t.getExtension(s);return e[s]=a,a}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const a=n(s);return a===null&&Wr("WebGLRenderer: "+s+" extension not supported."),a}}}function e6(t,e,n,s){const a={},i=new WeakMap;function r(p){const h=p.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);h.removeEventListener("dispose",r),delete a[h.id];const f=i.get(h);f&&(e.remove(f),i.delete(h)),s.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function o(p,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,n.memory.geometries++),h}function l(p){const h=p.attributes;for(const f in h)e.update(h[f],t.ARRAY_BUFFER)}function u(p){const h=[],f=p.index,v=p.attributes.position;let _=0;if(f!==null){const M=f.array;_=f.version;for(let x=0,S=M.length;x<S;x+=3){const T=M[x+0],P=M[x+1],L=M[x+2];h.push(T,P,P,L,L,T)}}else if(v!==void 0){const M=v.array;_=v.version;for(let x=0,S=M.length/3-1;x<S;x+=3){const T=x+0,P=x+1,L=x+2;h.push(T,P,P,L,L,T)}}else return;const g=new(R1(h)?O1:U1)(h,1);g.version=_;const m=i.get(p);m&&e.remove(m),i.set(p,g)}function c(p){const h=i.get(p);if(h){const f=p.index;f!==null&&h.version<f.version&&u(p)}else u(p);return i.get(p)}return{get:o,update:l,getWireframeAttribute:c}}function t6(t,e,n){let s;function a(h){s=h}let i,r;function o(h){i=h.type,r=h.bytesPerElement}function l(h,f){t.drawElements(s,f,i,h*r),n.update(f,s,1)}function u(h,f,v){v!==0&&(t.drawElementsInstanced(s,f,i,h*r,v),n.update(f,s,v))}function c(h,f,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,f,0,i,h,0,v);let g=0;for(let m=0;m<v;m++)g+=f[m];n.update(g,s,1)}function p(h,f,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<h.length;m++)u(h[m]/r,f[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(s,f,0,i,h,0,_,0,v);let m=0;for(let M=0;M<v;M++)m+=f[M]*_[M];n.update(m,s,1)}}this.setMode=a,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=p}function n6(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(i,r,o){switch(n.calls++,r){case t.TRIANGLES:n.triangles+=o*(i/3);break;case t.LINES:n.lines+=o*(i/2);break;case t.LINE_STRIP:n.lines+=o*(i-1);break;case t.LINE_LOOP:n.lines+=o*i;break;case t.POINTS:n.points+=o*i;break;default:ut("WebGLInfo: Unknown draw mode:",r);break}}function a(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:a,update:s}}function s6(t,e,n){const s=new WeakMap,a=new Bt;function i(r,o,l){const u=r.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=c!==void 0?c.length:0;let h=s.get(o);if(h===void 0||h.count!==p){let b=function(){L.dispose(),s.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const f=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),v===!0&&(x=2),_===!0&&(x=3);let S=o.attributes.position.count*x,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*T*4*p),L=new P1(P,S,T,p);L.type=ds,L.needsUpdate=!0;const O=x*4;for(let E=0;E<p;E++){const D=g[E],U=m[E],k=M[E],V=S*T*4*E;for(let X=0;X<D.count;X++){const B=X*O;f===!0&&(a.fromBufferAttribute(D,X),P[V+B+0]=a.x,P[V+B+1]=a.y,P[V+B+2]=a.z,P[V+B+3]=0),v===!0&&(a.fromBufferAttribute(U,X),P[V+B+4]=a.x,P[V+B+5]=a.y,P[V+B+6]=a.z,P[V+B+7]=0),_===!0&&(a.fromBufferAttribute(k,X),P[V+B+8]=a.x,P[V+B+9]=a.y,P[V+B+10]=a.z,P[V+B+11]=k.itemSize===4?a.w:1)}}h={count:p,texture:L,size:new pt(S,T)},s.set(o,h),o.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",r.morphTexture,n);else{let f=0;for(let _=0;_<u.length;_++)f+=u[_];const v=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:i}}function a6(t,e,n,s){let a=new WeakMap;function i(l){const u=s.render.frame,c=l.geometry,p=e.get(l,c);if(a.get(p)!==u&&(e.update(p),a.set(p,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),a.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),a.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==u&&(h.update(),a.set(h,u))}return p}function r(){a=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:i,dispose:r}}const i6={[d1]:"LINEAR_TONE_MAPPING",[m1]:"REINHARD_TONE_MAPPING",[g1]:"CINEON_TONE_MAPPING",[Dh]:"ACES_FILMIC_TONE_MAPPING",[_1]:"AGX_TONE_MAPPING",[x1]:"NEUTRAL_TONE_MAPPING",[v1]:"CUSTOM_TONE_MAPPING"};function r6(t,e,n,s,a){const i=new _s(e,n,{type:t,depthBuffer:s,stencilBuffer:a}),r=new _s(e,n,{type:Ys,depthBuffer:!1,stencilBuffer:!1}),o=new Gn;o.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _n([0,2,0,0,2,0],2));const l=new Xw({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new as(o,l),c=new Wh(-1,1,1,-1,0,1);let p=null,h=null,f=!1,v,_=null,g=[],m=!1;this.setSize=function(M,x){i.setSize(M,x),r.setSize(M,x);for(let S=0;S<g.length;S++){const T=g[S];T.setSize&&T.setSize(M,x)}},this.setEffects=function(M){g=M,m=g.length>0&&g[0].isRenderPass===!0;const x=i.width,S=i.height;for(let T=0;T<g.length;T++){const P=g[T];P.setSize&&P.setSize(x,S)}},this.begin=function(M,x){if(f||M.toneMapping===vs&&g.length===0)return!1;if(_=x,x!==null){const S=x.width,T=x.height;(i.width!==S||i.height!==T)&&this.setSize(S,T)}return m===!1&&M.setRenderTarget(i),v=M.toneMapping,M.toneMapping=vs,!0},this.hasRenderPass=function(){return m},this.end=function(M,x){M.toneMapping=v,f=!0;let S=i,T=r;for(let P=0;P<g.length;P++){const L=g[P];if(L.enabled!==!1&&(L.render(M,T,S,x),L.needsSwap!==!1)){const O=S;S=T,T=O}}if(p!==M.outputColorSpace||h!==M.toneMapping){p=M.outputColorSpace,h=M.toneMapping,l.defines={},ot.getTransfer(p)===gt&&(l.defines.SRGB_TRANSFER="");const P=i6[h];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(_),M.render(u,c),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){i.dispose(),r.dispose(),o.dispose(),l.dispose()}}const $1=new rn,Dp=new $r(1,1),X1=new P1,q1=new bw,j1=new k1,fm=[],dm=[],mm=new Float32Array(16),gm=new Float32Array(9),vm=new Float32Array(4);function or(t,e,n){const s=t[0];if(s<=0||s>0)return t;const a=e*n;let i=fm[a];if(i===void 0&&(i=new Float32Array(a),fm[a]=i),e!==0){s.toArray(i,0);for(let r=1,o=0;r!==e;++r)o+=n,t[r].toArray(i,o)}return i}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,s=t.length;n<s;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,s=e.length;n<s;n++)t[n]=e[n]}function Kl(t,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let s=0;s!==e;++s)n[s]=t.allocateTextureUnit();return n}function o6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function l6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function c6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function u6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function p6(t,e){const n=this.cache,s=e.elements;if(s===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,s))return;vm.set(s),t.uniformMatrix2fv(this.addr,!1,vm),qt(n,s)}}function h6(t,e){const n=this.cache,s=e.elements;if(s===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,s))return;gm.set(s),t.uniformMatrix3fv(this.addr,!1,gm),qt(n,s)}}function f6(t,e){const n=this.cache,s=e.elements;if(s===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,s))return;mm.set(s),t.uniformMatrix4fv(this.addr,!1,mm),qt(n,s)}}function d6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function m6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function g6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function v6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function _6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function y6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function b6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function S6(t,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(t.uniform1i(this.addr,a),s[0]=a);let i;this.type===t.SAMPLER_2D_SHADOW?(Dp.compareFunction=n.isReversedDepthBuffer()?zh:kh,i=Dp):i=$1,n.setTexture2D(e||i,a)}function M6(t,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(t.uniform1i(this.addr,a),s[0]=a),n.setTexture3D(e||q1,a)}function E6(t,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(t.uniform1i(this.addr,a),s[0]=a),n.setTextureCube(e||j1,a)}function w6(t,e,n){const s=this.cache,a=n.allocateTextureUnit();s[0]!==a&&(t.uniform1i(this.addr,a),s[0]=a),n.setTexture2DArray(e||X1,a)}function T6(t){switch(t){case 5126:return o6;case 35664:return l6;case 35665:return c6;case 35666:return u6;case 35674:return p6;case 35675:return h6;case 35676:return f6;case 5124:case 35670:return d6;case 35667:case 35671:return m6;case 35668:case 35672:return g6;case 35669:case 35673:return v6;case 5125:return _6;case 36294:return x6;case 36295:return y6;case 36296:return b6;case 35678:case 36198:case 36298:case 36306:case 35682:return S6;case 35679:case 36299:case 36307:return M6;case 35680:case 36300:case 36308:case 36293:return E6;case 36289:case 36303:case 36311:case 36292:return w6}}function A6(t,e){t.uniform1fv(this.addr,e)}function C6(t,e){const n=or(e,this.size,2);t.uniform2fv(this.addr,n)}function R6(t,e){const n=or(e,this.size,3);t.uniform3fv(this.addr,n)}function P6(t,e){const n=or(e,this.size,4);t.uniform4fv(this.addr,n)}function L6(t,e){const n=or(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function D6(t,e){const n=or(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function I6(t,e){const n=or(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function N6(t,e){t.uniform1iv(this.addr,e)}function U6(t,e){t.uniform2iv(this.addr,e)}function O6(t,e){t.uniform3iv(this.addr,e)}function F6(t,e){t.uniform4iv(this.addr,e)}function B6(t,e){t.uniform1uiv(this.addr,e)}function k6(t,e){t.uniform2uiv(this.addr,e)}function z6(t,e){t.uniform3uiv(this.addr,e)}function V6(t,e){t.uniform4uiv(this.addr,e)}function H6(t,e,n){const s=this.cache,a=e.length,i=Kl(n,a);Xt(s,i)||(t.uniform1iv(this.addr,i),qt(s,i));let r;this.type===t.SAMPLER_2D_SHADOW?r=Dp:r=$1;for(let o=0;o!==a;++o)n.setTexture2D(e[o]||r,i[o])}function G6(t,e,n){const s=this.cache,a=e.length,i=Kl(n,a);Xt(s,i)||(t.uniform1iv(this.addr,i),qt(s,i));for(let r=0;r!==a;++r)n.setTexture3D(e[r]||q1,i[r])}function W6(t,e,n){const s=this.cache,a=e.length,i=Kl(n,a);Xt(s,i)||(t.uniform1iv(this.addr,i),qt(s,i));for(let r=0;r!==a;++r)n.setTextureCube(e[r]||j1,i[r])}function $6(t,e,n){const s=this.cache,a=e.length,i=Kl(n,a);Xt(s,i)||(t.uniform1iv(this.addr,i),qt(s,i));for(let r=0;r!==a;++r)n.setTexture2DArray(e[r]||X1,i[r])}function X6(t){switch(t){case 5126:return A6;case 35664:return C6;case 35665:return R6;case 35666:return P6;case 35674:return L6;case 35675:return D6;case 35676:return I6;case 5124:case 35670:return N6;case 35667:case 35671:return U6;case 35668:case 35672:return O6;case 35669:case 35673:return F6;case 5125:return B6;case 36294:return k6;case 36295:return z6;case 36296:return V6;case 35678:case 36198:case 36298:case 36306:case 35682:return H6;case 35679:case 36299:case 36307:return G6;case 35680:case 36300:case 36308:case 36293:return W6;case 36289:case 36303:case 36311:case 36292:return $6}}class q6{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=T6(n.type)}}class j6{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=X6(n.type)}}class Y6{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const a=this.seq;for(let i=0,r=a.length;i!==r;++i){const o=a[i];o.setValue(e,n[o.id],s)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function K6(t,e,n){const s=t.name,a=s.length;for(ou.lastIndex=0;;){const i=ou.exec(s),r=ou.lastIndex;let o=i[1];const l=i[2]==="]",u=i[3];if(l&&(o=o|0),u===void 0||u==="["&&r+2===a){_m(n,u===void 0?new q6(o,t,e):new j6(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Y6(o),_m(n,p)),n=p}}}class ol{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<s;++r){const o=e.getActiveUniform(n,r),l=e.getUniformLocation(n,o.name);K6(o,l,this)}const a=[],i=[];for(const r of this.seq)r.type===e.SAMPLER_2D_SHADOW||r.type===e.SAMPLER_CUBE_SHADOW||r.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(r):i.push(r);a.length>0&&(this.seq=a.concat(i))}setValue(e,n,s,a){const i=this.map[n];i!==void 0&&i.setValue(e,s,a)}setOptional(e,n,s){const a=n[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,n,s,a){for(let i=0,r=n.length;i!==r;++i){const o=n[i],l=s[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,a)}}static seqWithValue(e,n){const s=[];for(let a=0,i=e.length;a!==i;++a){const r=e[a];r.id in n&&s.push(r)}return s}}function xm(t,e,n){const s=t.createShader(e);return t.shaderSource(s,n),t.compileShader(s),s}const Z6=37297;let J6=0;function Q6(t,e){const n=t.split(`
`),s=[],a=Math.max(e-6,0),i=Math.min(e+6,n.length);for(let r=a;r<i;r++){const o=r+1;s.push(`${o===e?">":" "} ${o}: ${n[r]}`)}return s.join(`
`)}const ym=new Ze;function e8(t){ot._getMatrix(ym,ot.workingColorSpace,t);const e=`mat3( ${ym.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case bl:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function bm(t,e,n){const s=t.getShaderParameter(e,t.COMPILE_STATUS),i=(t.getShaderInfoLog(e)||"").trim();if(s&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return n.toUpperCase()+`

`+i+`

`+Q6(t.getShaderSource(e),o)}else return i}function t8(t,e){const n=e8(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const n8={[d1]:"Linear",[m1]:"Reinhard",[g1]:"Cineon",[Dh]:"ACESFilmic",[_1]:"AgX",[x1]:"Neutral",[v1]:"Custom"};function s8(t,e){const n=n8[e];return n===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ko=new J;function a8(){ot.getLuminanceCoefficients(Ko);const t=Ko.x.toFixed(4),e=Ko.y.toFixed(4),n=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i8(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function r8(t){const e=[];for(const n in t){const s=t[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function o8(t,e){const n={},s=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const i=t.getActiveAttrib(e,a),r=i.name;let o=1;i.type===t.FLOAT_MAT2&&(o=2),i.type===t.FLOAT_MAT3&&(o=3),i.type===t.FLOAT_MAT4&&(o=4),n[r]={type:i.type,location:t.getAttribLocation(e,r),locationSize:o}}return n}function br(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Mm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const l8=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ip(t){return t.replace(l8,u8)}const c8=new Map;function u8(t,e){let n=Je[e];if(n===void 0){const s=c8.get(e);if(s!==void 0)n=Je[s],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ip(n)}const p8=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Em(t){return t.replace(p8,h8)}function h8(t,e,n,s){let a="";for(let i=parseInt(e);i<parseInt(n);i++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return a}function wm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const f8={[nl]:"SHADOWMAP_TYPE_PCF",[yr]:"SHADOWMAP_TYPE_VSM"};function d8(t){return f8[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const m8={[Qa]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};function g8(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":m8[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const v8={[qi]:"ENVMAP_MODE_REFRACTION"};function _8(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":v8[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const x8={[f1]:"ENVMAP_BLENDING_MULTIPLY",[nw]:"ENVMAP_BLENDING_MIX",[sw]:"ENVMAP_BLENDING_ADD"};function y8(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":x8[t.combine]||"ENVMAP_BLENDING_NONE"}function b8(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:s,maxMip:n}}function S8(t,e,n,s){const a=t.getContext(),i=n.defines;let r=n.vertexShader,o=n.fragmentShader;const l=d8(n),u=g8(n),c=_8(n),p=y8(n),h=b8(n),f=i8(n),v=r8(i),_=a.createProgram();let g,m,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(br).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(br).join(`
`),m.length>0&&(m+=`
`)):(g=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),m=[wm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vs?"#define TONE_MAPPING":"",n.toneMapping!==vs?Je.tonemapping_pars_fragment:"",n.toneMapping!==vs?s8("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,t8("linearToOutputTexel",n.outputColorSpace),a8(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(br).join(`
`)),r=Ip(r),r=Sm(r,n),r=Mm(r,n),o=Ip(o),o=Sm(o,n),o=Mm(o,n),r=Em(r),o=Em(o),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Fd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=M+g+r,S=M+m+o,T=xm(a,a.VERTEX_SHADER,x),P=xm(a,a.FRAGMENT_SHADER,S);a.attachShader(_,T),a.attachShader(_,P),n.index0AttributeName!==void 0?a.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&a.bindAttribLocation(_,0,"position"),a.linkProgram(_);function L(D){if(t.debug.checkShaderErrors){const U=a.getProgramInfoLog(_)||"",k=a.getShaderInfoLog(T)||"",V=a.getShaderInfoLog(P)||"",X=U.trim(),B=k.trim(),G=V.trim();let q=!0,le=!0;if(a.getProgramParameter(_,a.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(a,_,T,P);else{const ge=bm(a,T,"vertex"),be=bm(a,P,"fragment");ut("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(_,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+X+`
`+ge+`
`+be)}else X!==""?qe("WebGLProgram: Program Info Log:",X):(B===""||G==="")&&(le=!1);le&&(D.diagnostics={runnable:q,programLog:X,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:m}})}a.deleteShader(T),a.deleteShader(P),O=new ol(a,_),b=o8(a,_)}let O;this.getUniforms=function(){return O===void 0&&L(this),O};let b;this.getAttributes=function(){return b===void 0&&L(this),b};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=a.getProgramParameter(_,Z6)),E},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J6++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=P,this}let M8=0;class E8{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(n),i=this._getShaderStage(s),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new w8(e),n.set(e,s)),s}}class w8{constructor(e){this.id=M8++,this.code=e,this.usedTimes=0}}function T8(t,e,n,s,a,i,r){const o=new D1,l=new E8,u=new Set,c=[],p=new Map,h=a.logarithmicDepthBuffer;let f=a.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return u.add(b),b===0?"uv":`uv${b}`}function g(b,E,D,U,k){const V=U.fog,X=k.geometry,B=b.isMeshStandardMaterial?U.environment:null,G=(b.isMeshStandardMaterial?n:e).get(b.envMap||B),q=G&&G.mapping===Xl?G.image.height:null,le=v[b.type];b.precision!==null&&(f=a.getMaxPrecision(b.precision),f!==b.precision&&qe("WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=ge!==void 0?ge.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let Be,rt,et,ie;if(le){const dt=fs[le];Be=dt.vertexShader,rt=dt.fragmentShader}else Be=b.vertexShader,rt=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),ie=l.getFragmentShaderID(b);const F=t.getRenderTarget(),ae=t.state.buffers.depth.getReversed(),oe=k.isInstancedMesh===!0,re=k.isBatchedMesh===!0,Ae=!!b.map,We=!!b.matcap,R=!!G,I=!!b.aoMap,W=!!b.lightMap,ee=!!b.bumpMap,se=!!b.normalMap,C=!!b.displacementMap,fe=!!b.emissiveMap,ce=!!b.metalnessMap,ue=!!b.roughnessMap,K=b.anisotropy>0,A=b.clearcoat>0,y=b.dispersion>0,N=b.iridescence>0,j=b.sheen>0,te=b.transmission>0,Z=K&&!!b.anisotropyMap,_e=A&&!!b.clearcoatMap,de=A&&!!b.clearcoatNormalMap,Ee=A&&!!b.clearcoatRoughnessMap,Ue=N&&!!b.iridescenceMap,he=N&&!!b.iridescenceThicknessMap,Se=j&&!!b.sheenColorMap,Ie=j&&!!b.sheenRoughnessMap,Ce=!!b.specularMap,ve=!!b.specularColorMap,Ke=!!b.specularIntensityMap,z=te&&!!b.transmissionMap,Pe=te&&!!b.thicknessMap,ye=!!b.gradientMap,Le=!!b.alphaMap,me=b.alphaTest>0,pe=!!b.alphaHash,Me=!!b.extensions;let Xe=vs;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Xe=t.toneMapping);const Et={shaderID:le,shaderType:b.type,shaderName:b.name,vertexShader:Be,fragmentShader:rt,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:re,batchingColor:re&&k._colorsTexture!==null,instancing:oe,instancingColor:oe&&k.instanceColor!==null,instancingMorph:oe&&k.morphTexture!==null,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Yi,alphaToCoverage:!!b.alphaToCoverage,map:Ae,matcap:We,envMap:R,envMapMode:R&&G.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:W,bumpMap:ee,normalMap:se,displacementMap:C,emissiveMap:fe,normalMapObjectSpace:se&&b.normalMapType===rw,normalMapTangentSpace:se&&b.normalMapType===C1,metalnessMap:ce,roughnessMap:ue,anisotropy:K,anisotropyMap:Z,clearcoat:A,clearcoatMap:_e,clearcoatNormalMap:de,clearcoatRoughnessMap:Ee,dispersion:y,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:he,sheen:j,sheenColorMap:Se,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:ve,specularIntensityMap:Ke,transmission:te,transmissionMap:z,thicknessMap:Pe,gradientMap:ye,opaque:b.transparent===!1&&b.blending===Bi&&b.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:pe,combine:b.combine,mapUv:Ae&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:W&&_(b.lightMap.channel),bumpMapUv:ee&&_(b.bumpMap.channel),normalMapUv:se&&_(b.normalMap.channel),displacementMapUv:C&&_(b.displacementMap.channel),emissiveMapUv:fe&&_(b.emissiveMap.channel),metalnessMapUv:ce&&_(b.metalnessMap.channel),roughnessMapUv:ue&&_(b.roughnessMap.channel),anisotropyMapUv:Z&&_(b.anisotropyMap.channel),clearcoatMapUv:_e&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:he&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(b.sheenRoughnessMap.channel),specularMapUv:Ce&&_(b.specularMap.channel),specularColorMapUv:ve&&_(b.specularColorMap.channel),specularIntensityMapUv:Ke&&_(b.specularIntensityMap.channel),transmissionMapUv:z&&_(b.transmissionMap.channel),thicknessMapUv:Pe&&_(b.thicknessMap.channel),alphaMapUv:Le&&_(b.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(se||K),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(Ae||Le),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ae,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Xe,decodeVideoTexture:Ae&&b.map.isVideoTexture===!0&&ot.getTransfer(b.map.colorSpace)===gt,decodeVideoTextureEmissive:fe&&b.emissiveMap.isVideoTexture===!0&&ot.getTransfer(b.emissiveMap.colorSpace)===gt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===ks,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Me&&b.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&b.extensions.multiDraw===!0||re)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Et.vertexUv1s=u.has(1),Et.vertexUv2s=u.has(2),Et.vertexUv3s=u.has(3),u.clear(),Et}function m(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)E.push(D),E.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(M(E,b),x(E,b),E.push(t.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function M(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),b.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),b.push(o.mask)}function S(b){const E=v[b.type];let D;if(E){const U=fs[E];D=Nw.clone(U.uniforms)}else D=b.uniforms;return D}function T(b,E){let D=p.get(E);return D!==void 0?++D.usedTimes:(D=new S8(t,E,b,i),c.push(D),p.set(E,D)),D}function P(b){if(--b.usedTimes===0){const E=c.indexOf(b);c[E]=c[c.length-1],c.pop(),p.delete(b.cacheKey),b.destroy()}}function L(b){l.remove(b)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:T,releaseProgram:P,releaseShaderCache:L,programs:c,dispose:O}}function A8(){let t=new WeakMap;function e(r){return t.has(r)}function n(r){let o=t.get(r);return o===void 0&&(o={},t.set(r,o)),o}function s(r){t.delete(r)}function a(r,o,l){t.get(r)[o]=l}function i(){t=new WeakMap}return{has:e,get:n,remove:s,update:a,dispose:i}}function C8(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Tm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],s=[],a=[];function i(){e=0,n.length=0,s.length=0,a.length=0}function r(p,h,f,v,_,g){let m=t[e];return m===void 0?(m={id:p.id,object:p,geometry:h,material:f,groupOrder:v,renderOrder:p.renderOrder,z:_,group:g},t[e]=m):(m.id=p.id,m.object=p,m.geometry=h,m.material=f,m.groupOrder=v,m.renderOrder=p.renderOrder,m.z=_,m.group=g),e++,m}function o(p,h,f,v,_,g){const m=r(p,h,f,v,_,g);f.transmission>0?s.push(m):f.transparent===!0?a.push(m):n.push(m)}function l(p,h,f,v,_,g){const m=r(p,h,f,v,_,g);f.transmission>0?s.unshift(m):f.transparent===!0?a.unshift(m):n.unshift(m)}function u(p,h){n.length>1&&n.sort(p||C8),s.length>1&&s.sort(h||Tm),a.length>1&&a.sort(h||Tm)}function c(){for(let p=e,h=t.length;p<h;p++){const f=t[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:n,transmissive:s,transparent:a,init:i,push:o,unshift:l,finish:c,sort:u}}function R8(){let t=new WeakMap;function e(s,a){const i=t.get(s);let r;return i===void 0?(r=new Am,t.set(s,[r])):a>=i.length?(r=new Am,i.push(r)):r=i[a],r}function n(){t=new WeakMap}return{get:e,dispose:n}}function P8(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new it};break;case"SpotLight":n={position:new J,direction:new J,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new it,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new it,groundColor:new it};break;case"RectAreaLight":n={color:new it,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function L8(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let D8=0;function I8(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function N8(t){const e=new P8,n=L8(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new J);const a=new J,i=new It,r=new It;function o(u){let c=0,p=0,h=0;for(let b=0;b<9;b++)s.probe[b].set(0,0,0);let f=0,v=0,_=0,g=0,m=0,M=0,x=0,S=0,T=0,P=0,L=0;u.sort(I8);for(let b=0,E=u.length;b<E;b++){const D=u[b],U=D.color,k=D.intensity,V=D.distance;let X=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ji?X=D.shadow.map.texture:X=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)c+=U.r*k,p+=U.g*k,h+=U.b*k;else if(D.isLightProbe){for(let B=0;B<9;B++)s.probe[B].addScaledVector(D.sh.coefficients[B],k);L++}else if(D.isDirectionalLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const G=D.shadow,q=n.get(D);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,s.directionalShadow[f]=q,s.directionalShadowMap[f]=X,s.directionalShadowMatrix[f]=D.shadow.matrix,M++}s.directional[f]=B,f++}else if(D.isSpotLight){const B=e.get(D);B.position.setFromMatrixPosition(D.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=V,B.coneCos=Math.cos(D.angle),B.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),B.decay=D.decay,s.spot[_]=B;const G=D.shadow;if(D.map&&(s.spotLightMap[T]=D.map,T++,G.updateMatrices(D),D.castShadow&&P++),s.spotLightMatrix[_]=G.matrix,D.castShadow){const q=n.get(D);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,s.spotShadow[_]=q,s.spotShadowMap[_]=X,S++}_++}else if(D.isRectAreaLight){const B=e.get(D);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(D.width*.5,0,0),B.halfHeight.set(0,D.height*.5,0),s.rectArea[g]=B,g++}else if(D.isPointLight){const B=e.get(D);if(B.color.copy(D.color).multiplyScalar(D.intensity),B.distance=D.distance,B.decay=D.decay,D.castShadow){const G=D.shadow,q=n.get(D);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,s.pointShadow[v]=q,s.pointShadowMap[v]=X,s.pointShadowMatrix[v]=D.shadow.matrix,x++}s.point[v]=B,v++}else if(D.isHemisphereLight){const B=e.get(D);B.skyColor.copy(D.color).multiplyScalar(k),B.groundColor.copy(D.groundColor).multiplyScalar(k),s.hemi[m]=B,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Te.LTC_FLOAT_1,s.rectAreaLTC2=Te.LTC_FLOAT_2):(s.rectAreaLTC1=Te.LTC_HALF_1,s.rectAreaLTC2=Te.LTC_HALF_2)),s.ambient[0]=c,s.ambient[1]=p,s.ambient[2]=h;const O=s.hash;(O.directionalLength!==f||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==g||O.hemiLength!==m||O.numDirectionalShadows!==M||O.numPointShadows!==x||O.numSpotShadows!==S||O.numSpotMaps!==T||O.numLightProbes!==L)&&(s.directional.length=f,s.spot.length=_,s.rectArea.length=g,s.point.length=v,s.hemi.length=m,s.directionalShadow.length=M,s.directionalShadowMap.length=M,s.pointShadow.length=x,s.pointShadowMap.length=x,s.spotShadow.length=S,s.spotShadowMap.length=S,s.directionalShadowMatrix.length=M,s.pointShadowMatrix.length=x,s.spotLightMatrix.length=S+T-P,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=P,s.numLightProbes=L,O.directionalLength=f,O.pointLength=v,O.spotLength=_,O.rectAreaLength=g,O.hemiLength=m,O.numDirectionalShadows=M,O.numPointShadows=x,O.numSpotShadows=S,O.numSpotMaps=T,O.numLightProbes=L,s.version=D8++)}function l(u,c){let p=0,h=0,f=0,v=0,_=0;const g=c.matrixWorldInverse;for(let m=0,M=u.length;m<M;m++){const x=u[m];if(x.isDirectionalLight){const S=s.directional[p];S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),p++}else if(x.isSpotLight){const S=s.spot[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const S=s.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),r.identity(),i.copy(x.matrixWorld),i.premultiply(g),r.extractRotation(i),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),v++}else if(x.isPointLight){const S=s.point[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),h++}else if(x.isHemisphereLight){const S=s.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:s}}function Cm(t){const e=new N8(t),n=[],s=[];function a(c){u.camera=c,n.length=0,s.length=0}function i(c){n.push(c)}function r(c){s.push(c)}function o(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:u,setupLights:o,setupLightsView:l,pushLight:i,pushShadow:r}}function U8(t){let e=new WeakMap;function n(a,i=0){const r=e.get(a);let o;return r===void 0?(o=new Cm(t),e.set(a,[o])):i>=r.length?(o=new Cm(t),r.push(o)):o=r[i],o}function s(){e=new WeakMap}return{get:n,dispose:s}}const O8=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F8=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,B8=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],k8=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Rm=new It,_r=new J,lu=new J;function z8(t,e,n){let s=new Hh;const a=new pt,i=new pt,r=new Bt,o=new jw,l=new Yw,u={},c=n.maxTextureSize,p={[Ma]:dn,[dn]:Ma,[ks]:ks},h=new is({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:O8,fragmentShader:F8}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const v=new Gn;v.setAttribute("position",new xs(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new as(v,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let m=this.type;this.render=function(P,L,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;P.type===F4&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=nl);const b=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Vs),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==this.type;k&&L.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(X=>X.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,X=P.length;V<X;V++){const B=P[V],G=B.shadow;if(G===void 0){qe("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;a.copy(G.mapSize);const q=G.getFrameExtents();if(a.multiply(q),i.copy(G.mapSize),(a.x>c||a.y>c)&&(a.x>c&&(i.x=Math.floor(c/q.x),a.x=i.x*q.x,G.mapSize.x=i.x),a.y>c&&(i.y=Math.floor(c/q.y),a.y=i.y*q.y,G.mapSize.y=i.y)),G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===yr){if(B.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new _s(a.x,a.y,{format:ji,type:Ys,minFilter:an,magFilter:an,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new $r(a.x,a.y,ds),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ks,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt}else{B.isPointLight?(G.map=new z1(a.x),G.map.depthTexture=new $w(a.x,bs)):(G.map=new _s(a.x,a.y),G.map.depthTexture=new $r(a.x,a.y,bs)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ks;const ge=t.state.buffers.depth.getReversed();this.type===nl?(G.map.depthTexture.compareFunction=ge?zh:kh,G.map.depthTexture.minFilter=an,G.map.depthTexture.magFilter=an):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt)}G.camera.updateProjectionMatrix()}const le=G.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<le;ge++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(G.map),t.clear());const be=G.getViewport(ge);r.set(i.x*be.x,i.y*be.y,i.x*be.z,i.y*be.w),U.viewport(r)}if(B.isPointLight){const be=G.camera,Oe=G.matrix,Be=B.distance||be.far;Be!==be.far&&(be.far=Be,be.updateProjectionMatrix()),_r.setFromMatrixPosition(B.matrixWorld),be.position.copy(_r),lu.copy(be.position),lu.add(B8[ge]),be.up.copy(k8[ge]),be.lookAt(lu),be.updateMatrixWorld(),Oe.makeTranslation(-_r.x,-_r.y,-_r.z),Rm.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Rm,be.coordinateSystem,be.reversedDepth)}else G.updateMatrices(B);s=G.getFrustum(),S(L,O,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===yr&&M(G,O),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(b,E,D)};function M(P,L){const O=e.update(_);h.defines.VSM_SAMPLES!==P.blurSamples&&(h.defines.VSM_SAMPLES=P.blurSamples,f.defines.VSM_SAMPLES=P.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _s(a.x,a.y,{format:ji,type:Ys})),h.uniforms.shadow_pass.value=P.map.depthTexture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,O,h,_,null),f.uniforms.shadow_pass.value=P.mapPass.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,O,f,_,null)}function x(P,L,O,b){let E=null;const D=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(D!==void 0)E=D;else if(E=O.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=E.uuid,k=L.uuid;let V=u[U];V===void 0&&(V={},u[U]=V);let X=V[k];X===void 0&&(X=E.clone(),V[k]=X,L.addEventListener("dispose",T)),E=X}if(E.visible=L.visible,E.wireframe=L.wireframe,b===yr?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:p[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=t.properties.get(E);U.light=O}return E}function S(P,L,O,b,E){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===yr)&&(!P.frustumCulled||s.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const k=e.update(P),V=P.material;if(Array.isArray(V)){const X=k.groups;for(let B=0,G=X.length;B<G;B++){const q=X[B],le=V[q.materialIndex];if(le&&le.visible){const ge=x(P,le,b,E);P.onBeforeShadow(t,P,L,O,k,ge,q),t.renderBufferDirect(O,null,k,ge,P,q),P.onAfterShadow(t,P,L,O,k,ge,q)}}}else if(V.visible){const X=x(P,V,b,E);P.onBeforeShadow(t,P,L,O,k,X,null),t.renderBufferDirect(O,null,k,X,P,null),P.onAfterShadow(t,P,L,O,k,X,null)}}const U=P.children;for(let k=0,V=U.length;k<V;k++)S(U[k],L,O,b,E)}function T(P){P.target.removeEventListener("dispose",T);for(const O in u){const b=u[O],E=P.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const V8={[Vu]:Hu,[Gu]:Xu,[Wu]:qu,[Xi]:$u,[Hu]:Vu,[Xu]:Gu,[qu]:Wu,[$u]:Xi};function H8(t,e){function n(){let z=!1;const Pe=new Bt;let ye=null;const Le=new Bt(0,0,0,0);return{setMask:function(me){ye!==me&&!z&&(t.colorMask(me,me,me,me),ye=me)},setLocked:function(me){z=me},setClear:function(me,pe,Me,Xe,Et){Et===!0&&(me*=Xe,pe*=Xe,Me*=Xe),Pe.set(me,pe,Me,Xe),Le.equals(Pe)===!1&&(t.clearColor(me,pe,Me,Xe),Le.copy(Pe))},reset:function(){z=!1,ye=null,Le.set(-1,0,0,0)}}}function s(){let z=!1,Pe=!1,ye=null,Le=null,me=null;return{setReversed:function(pe){if(Pe!==pe){const Me=e.get("EXT_clip_control");pe?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),Pe=pe;const Xe=me;me=null,this.setClear(Xe)}},getReversed:function(){return Pe},setTest:function(pe){pe?F(t.DEPTH_TEST):ae(t.DEPTH_TEST)},setMask:function(pe){ye!==pe&&!z&&(t.depthMask(pe),ye=pe)},setFunc:function(pe){if(Pe&&(pe=V8[pe]),Le!==pe){switch(pe){case Vu:t.depthFunc(t.NEVER);break;case Hu:t.depthFunc(t.ALWAYS);break;case Gu:t.depthFunc(t.LESS);break;case Xi:t.depthFunc(t.LEQUAL);break;case Wu:t.depthFunc(t.EQUAL);break;case $u:t.depthFunc(t.GEQUAL);break;case Xu:t.depthFunc(t.GREATER);break;case qu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=pe}},setLocked:function(pe){z=pe},setClear:function(pe){me!==pe&&(Pe&&(pe=1-pe),t.clearDepth(pe),me=pe)},reset:function(){z=!1,ye=null,Le=null,me=null,Pe=!1}}}function a(){let z=!1,Pe=null,ye=null,Le=null,me=null,pe=null,Me=null,Xe=null,Et=null;return{setTest:function(dt){z||(dt?F(t.STENCIL_TEST):ae(t.STENCIL_TEST))},setMask:function(dt){Pe!==dt&&!z&&(t.stencilMask(dt),Pe=dt)},setFunc:function(dt,ls,Ts){(ye!==dt||Le!==ls||me!==Ts)&&(t.stencilFunc(dt,ls,Ts),ye=dt,Le=ls,me=Ts)},setOp:function(dt,ls,Ts){(pe!==dt||Me!==ls||Xe!==Ts)&&(t.stencilOp(dt,ls,Ts),pe=dt,Me=ls,Xe=Ts)},setLocked:function(dt){z=dt},setClear:function(dt){Et!==dt&&(t.clearStencil(dt),Et=dt)},reset:function(){z=!1,Pe=null,ye=null,Le=null,me=null,pe=null,Me=null,Xe=null,Et=null}}}const i=new n,r=new s,o=new a,l=new WeakMap,u=new WeakMap;let c={},p={},h=new WeakMap,f=[],v=null,_=!1,g=null,m=null,M=null,x=null,S=null,T=null,P=null,L=new it(0,0,0),O=0,b=!1,E=null,D=null,U=null,k=null,V=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=G>=2);let le=null,ge={};const be=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),Be=new Bt().fromArray(be),rt=new Bt().fromArray(Oe);function et(z,Pe,ye,Le){const me=new Uint8Array(4),pe=t.createTexture();t.bindTexture(z,pe),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<ye;Me++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(Pe+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return pe}const ie={};ie[t.TEXTURE_2D]=et(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=et(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=et(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=et(t.TEXTURE_3D,t.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),F(t.DEPTH_TEST),r.setFunc(Xi),ee(!1),se(Dd),F(t.CULL_FACE),I(Vs);function F(z){c[z]!==!0&&(t.enable(z),c[z]=!0)}function ae(z){c[z]!==!1&&(t.disable(z),c[z]=!1)}function oe(z,Pe){return p[z]!==Pe?(t.bindFramebuffer(z,Pe),p[z]=Pe,z===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=Pe),z===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function re(z,Pe){let ye=f,Le=!1;if(z){ye=h.get(Pe),ye===void 0&&(ye=[],h.set(Pe,ye));const me=z.textures;if(ye.length!==me.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let pe=0,Me=me.length;pe<Me;pe++)ye[pe]=t.COLOR_ATTACHMENT0+pe;ye.length=me.length,Le=!0}}else ye[0]!==t.BACK&&(ye[0]=t.BACK,Le=!0);Le&&t.drawBuffers(ye)}function Ae(z){return v!==z?(t.useProgram(z),v=z,!0):!1}const We={[Ha]:t.FUNC_ADD,[k4]:t.FUNC_SUBTRACT,[z4]:t.FUNC_REVERSE_SUBTRACT};We[V4]=t.MIN,We[H4]=t.MAX;const R={[G4]:t.ZERO,[W4]:t.ONE,[$4]:t.SRC_COLOR,[ku]:t.SRC_ALPHA,[Z4]:t.SRC_ALPHA_SATURATE,[Y4]:t.DST_COLOR,[q4]:t.DST_ALPHA,[X4]:t.ONE_MINUS_SRC_COLOR,[zu]:t.ONE_MINUS_SRC_ALPHA,[K4]:t.ONE_MINUS_DST_COLOR,[j4]:t.ONE_MINUS_DST_ALPHA,[J4]:t.CONSTANT_COLOR,[Q4]:t.ONE_MINUS_CONSTANT_COLOR,[ew]:t.CONSTANT_ALPHA,[tw]:t.ONE_MINUS_CONSTANT_ALPHA};function I(z,Pe,ye,Le,me,pe,Me,Xe,Et,dt){if(z===Vs){_===!0&&(ae(t.BLEND),_=!1);return}if(_===!1&&(F(t.BLEND),_=!0),z!==B4){if(z!==g||dt!==b){if((m!==Ha||S!==Ha)&&(t.blendEquation(t.FUNC_ADD),m=Ha,S=Ha),dt)switch(z){case Bi:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yl:t.blendFunc(t.ONE,t.ONE);break;case Id:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Nd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",z);break}else switch(z){case Bi:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Id:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nd:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",z);break}M=null,x=null,T=null,P=null,L.set(0,0,0),O=0,g=z,b=dt}return}me=me||Pe,pe=pe||ye,Me=Me||Le,(Pe!==m||me!==S)&&(t.blendEquationSeparate(We[Pe],We[me]),m=Pe,S=me),(ye!==M||Le!==x||pe!==T||Me!==P)&&(t.blendFuncSeparate(R[ye],R[Le],R[pe],R[Me]),M=ye,x=Le,T=pe,P=Me),(Xe.equals(L)===!1||Et!==O)&&(t.blendColor(Xe.r,Xe.g,Xe.b,Et),L.copy(Xe),O=Et),g=z,b=!1}function W(z,Pe){z.side===ks?ae(t.CULL_FACE):F(t.CULL_FACE);let ye=z.side===dn;Pe&&(ye=!ye),ee(ye),z.blending===Bi&&z.transparent===!1?I(Vs):I(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),i.setMask(z.colorWrite);const Le=z.stencilWrite;o.setTest(Le),Le&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),fe(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):ae(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(z){E!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),E=z)}function se(z){z!==U4?(F(t.CULL_FACE),z!==D&&(z===Dd?t.cullFace(t.BACK):z===O4?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ae(t.CULL_FACE),D=z}function C(z){z!==U&&(B&&t.lineWidth(z),U=z)}function fe(z,Pe,ye){z?(F(t.POLYGON_OFFSET_FILL),(k!==Pe||V!==ye)&&(t.polygonOffset(Pe,ye),k=Pe,V=ye)):ae(t.POLYGON_OFFSET_FILL)}function ce(z){z?F(t.SCISSOR_TEST):ae(t.SCISSOR_TEST)}function ue(z){z===void 0&&(z=t.TEXTURE0+X-1),le!==z&&(t.activeTexture(z),le=z)}function K(z,Pe,ye){ye===void 0&&(le===null?ye=t.TEXTURE0+X-1:ye=le);let Le=ge[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ge[ye]=Le),(Le.type!==z||Le.texture!==Pe)&&(le!==ye&&(t.activeTexture(ye),le=ye),t.bindTexture(z,Pe||ie[z]),Le.type=z,Le.texture=Pe)}function A(){const z=ge[le];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function j(){try{t.texSubImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function te(){try{t.texSubImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function de(){try{t.texStorage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function Ee(){try{t.texStorage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function Ue(){try{t.texImage2D(...arguments)}catch(z){ut("WebGLState:",z)}}function he(){try{t.texImage3D(...arguments)}catch(z){ut("WebGLState:",z)}}function Se(z){Be.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),Be.copy(z))}function Ie(z){rt.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),rt.copy(z))}function Ce(z,Pe){let ye=u.get(Pe);ye===void 0&&(ye=new WeakMap,u.set(Pe,ye));let Le=ye.get(z);Le===void 0&&(Le=t.getUniformBlockIndex(Pe,z.name),ye.set(z,Le))}function ve(z,Pe){const Le=u.get(Pe).get(z);l.get(Pe)!==Le&&(t.uniformBlockBinding(Pe,Le,z.__bindingPointIndex),l.set(Pe,Le))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),r.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},le=null,ge={},p={},h=new WeakMap,f=[],v=null,_=!1,g=null,m=null,M=null,x=null,S=null,T=null,P=null,L=new it(0,0,0),O=0,b=!1,E=null,D=null,U=null,k=null,V=null,Be.set(0,0,t.canvas.width,t.canvas.height),rt.set(0,0,t.canvas.width,t.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:F,disable:ae,bindFramebuffer:oe,drawBuffers:re,useProgram:Ae,setBlending:I,setMaterial:W,setFlipSided:ee,setCullFace:se,setLineWidth:C,setPolygonOffset:fe,setScissorTest:ce,activeTexture:ue,bindTexture:K,unbindTexture:A,compressedTexImage2D:y,compressedTexImage3D:N,texImage2D:Ue,texImage3D:he,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:de,texStorage3D:Ee,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:_e,scissor:Se,viewport:Ie,reset:Ke}}function G8(t,e,n,s,a,i,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new pt,c=new WeakMap;let p;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,y){return f?new OffscreenCanvas(A,y):Gr("canvas")}function _(A,y,N){let j=1;const te=K(A);if((te.width>N||te.height>N)&&(j=N/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(j*te.width),_e=Math.floor(j*te.height);p===void 0&&(p=v(Z,_e));const de=y?v(Z,_e):p;return de.width=Z,de.height=_e,de.getContext("2d").drawImage(A,0,0,Z,_e),qe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+_e+")."),de}else return"data"in A&&qe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(A,y,N,j,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=y;if(y===t.RED&&(N===t.FLOAT&&(Z=t.R32F),N===t.HALF_FLOAT&&(Z=t.R16F),N===t.UNSIGNED_BYTE&&(Z=t.R8)),y===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.R8UI),N===t.UNSIGNED_SHORT&&(Z=t.R16UI),N===t.UNSIGNED_INT&&(Z=t.R32UI),N===t.BYTE&&(Z=t.R8I),N===t.SHORT&&(Z=t.R16I),N===t.INT&&(Z=t.R32I)),y===t.RG&&(N===t.FLOAT&&(Z=t.RG32F),N===t.HALF_FLOAT&&(Z=t.RG16F),N===t.UNSIGNED_BYTE&&(Z=t.RG8)),y===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RG8UI),N===t.UNSIGNED_SHORT&&(Z=t.RG16UI),N===t.UNSIGNED_INT&&(Z=t.RG32UI),N===t.BYTE&&(Z=t.RG8I),N===t.SHORT&&(Z=t.RG16I),N===t.INT&&(Z=t.RG32I)),y===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),N===t.UNSIGNED_INT&&(Z=t.RGB32UI),N===t.BYTE&&(Z=t.RGB8I),N===t.SHORT&&(Z=t.RGB16I),N===t.INT&&(Z=t.RGB32I)),y===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),N===t.UNSIGNED_INT&&(Z=t.RGBA32UI),N===t.BYTE&&(Z=t.RGBA8I),N===t.SHORT&&(Z=t.RGBA16I),N===t.INT&&(Z=t.RGBA32I)),y===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),y===t.RGBA){const _e=te?bl:ot.getTransfer(j);N===t.FLOAT&&(Z=t.RGBA32F),N===t.HALF_FLOAT&&(Z=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Z=_e===gt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(A,y){let N;return A?y===null||y===bs||y===Hr?N=t.DEPTH24_STENCIL8:y===ds?N=t.DEPTH32F_STENCIL8:y===Vr&&(N=t.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===bs||y===Hr?N=t.DEPTH_COMPONENT24:y===ds?N=t.DEPTH_COMPONENT32F:y===Vr&&(N=t.DEPTH_COMPONENT16),N}function T(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Jt&&A.minFilter!==an?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function P(A){const y=A.target;y.removeEventListener("dispose",P),O(y),y.isVideoTexture&&c.delete(y)}function L(A){const y=A.target;y.removeEventListener("dispose",L),E(y)}function O(A){const y=s.get(A);if(y.__webglInit===void 0)return;const N=A.source,j=h.get(N);if(j){const te=j[y.__cacheKey];te.usedTimes--,te.usedTimes===0&&b(A),Object.keys(j).length===0&&h.delete(N)}s.remove(A)}function b(A){const y=s.get(A);t.deleteTexture(y.__webglTexture);const N=A.source,j=h.get(N);delete j[y.__cacheKey],r.memory.textures--}function E(A){const y=s.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),s.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let te=0;te<y.__webglFramebuffer[j].length;te++)t.deleteFramebuffer(y.__webglFramebuffer[j][te]);else t.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)t.deleteFramebuffer(y.__webglFramebuffer[j]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=A.textures;for(let j=0,te=N.length;j<te;j++){const Z=s.get(N[j]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),r.memory.textures--),s.remove(N[j])}s.remove(A)}let D=0;function U(){D=0}function k(){const A=D;return A>=a.maxTextures&&qe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+a.maxTextures),D+=1,A}function V(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){const N=s.get(A);if(A.isVideoTexture&&ce(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const j=A.image;if(j===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(N,A,y);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+y)}function B(A,y){const N=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){ie(N,A,y);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+y)}function G(A,y){const N=s.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){ie(N,A,y);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+y)}function q(A,y){const N=s.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){F(N,A,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+y)}const le={[Ku]:t.REPEAT,[zs]:t.CLAMP_TO_EDGE,[Zu]:t.MIRRORED_REPEAT},ge={[Jt]:t.NEAREST,[aw]:t.NEAREST_MIPMAP_NEAREST,[Co]:t.NEAREST_MIPMAP_LINEAR,[an]:t.LINEAR,[Pc]:t.LINEAR_MIPMAP_NEAREST,[Xa]:t.LINEAR_MIPMAP_LINEAR},be={[ow]:t.NEVER,[hw]:t.ALWAYS,[lw]:t.LESS,[kh]:t.LEQUAL,[cw]:t.EQUAL,[zh]:t.GEQUAL,[uw]:t.GREATER,[pw]:t.NOTEQUAL};function Oe(A,y){if(y.type===ds&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===an||y.magFilter===Pc||y.magFilter===Co||y.magFilter===Xa||y.minFilter===an||y.minFilter===Pc||y.minFilter===Co||y.minFilter===Xa)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,le[y.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,le[y.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,le[y.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,ge[y.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,be[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Jt||y.minFilter!==Co&&y.minFilter!==Xa||y.type===ds&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||s.get(y).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),s.get(y).__currentAnisotropy=y.anisotropy}}}function Be(A,y){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",P));const j=y.source;let te=h.get(j);te===void 0&&(te={},h.set(j,te));const Z=V(y);if(Z!==A.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},r.memory.textures++,N=!0),te[Z].usedTimes++;const _e=te[A.__cacheKey];_e!==void 0&&(te[A.__cacheKey].usedTimes--,_e.usedTimes===0&&b(y)),A.__cacheKey=Z,A.__webglTexture=te[Z].texture}return N}function rt(A,y,N){return Math.floor(Math.floor(A/N)/y)}function et(A,y,N,j){const Z=A.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,N,j,y.data);else{Z.sort((he,Se)=>he.start-Se.start);let _e=0;for(let he=1;he<Z.length;he++){const Se=Z[_e],Ie=Z[he],Ce=Se.start+Se.count,ve=rt(Ie.start,y.width,4),Ke=rt(Se.start,y.width,4);Ie.start<=Ce+1&&ve===Ke&&rt(Ie.start+Ie.count-1,y.width,4)===ve?Se.count=Math.max(Se.count,Ie.start+Ie.count-Se.start):(++_e,Z[_e]=Ie)}Z.length=_e+1;const de=t.getParameter(t.UNPACK_ROW_LENGTH),Ee=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let he=0,Se=Z.length;he<Se;he++){const Ie=Z[he],Ce=Math.floor(Ie.start/4),ve=Math.ceil(Ie.count/4),Ke=Ce%y.width,z=Math.floor(Ce/y.width),Pe=ve,ye=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,Ke,z,Pe,ye,N,j,y.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,de),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ee),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function ie(A,y,N){let j=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=t.TEXTURE_3D);const te=Be(A,y),Z=y.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+N);const _e=s.get(Z);if(Z.version!==_e.__version||te===!0){n.activeTexture(t.TEXTURE0+N);const de=ot.getPrimaries(ot.workingColorSpace),Ee=y.colorSpace===_a?null:ot.getPrimaries(y.colorSpace),Ue=y.colorSpace===_a||de===Ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let he=_(y.image,!1,a.maxTextureSize);he=ue(y,he);const Se=i.convert(y.format,y.colorSpace),Ie=i.convert(y.type);let Ce=x(y.internalFormat,Se,Ie,y.colorSpace,y.isVideoTexture);Oe(j,y);let ve;const Ke=y.mipmaps,z=y.isVideoTexture!==!0,Pe=_e.__version===void 0||te===!0,ye=Z.dataReady,Le=T(y,he);if(y.isDepthTexture)Ce=S(y.format===qa,y.type),Pe&&(z?n.texStorage2D(t.TEXTURE_2D,1,Ce,he.width,he.height):n.texImage2D(t.TEXTURE_2D,0,Ce,he.width,he.height,0,Se,Ie,null));else if(y.isDataTexture)if(Ke.length>0){z&&Pe&&n.texStorage2D(t.TEXTURE_2D,Le,Ce,Ke[0].width,Ke[0].height);for(let me=0,pe=Ke.length;me<pe;me++)ve=Ke[me],z?ye&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,me,Ce,ve.width,ve.height,0,Se,Ie,ve.data);y.generateMipmaps=!1}else z?(Pe&&n.texStorage2D(t.TEXTURE_2D,Le,Ce,he.width,he.height),ye&&et(y,he,Se,Ie)):n.texImage2D(t.TEXTURE_2D,0,Ce,he.width,he.height,0,Se,Ie,he.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){z&&Pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Ce,Ke[0].width,Ke[0].height,he.depth);for(let me=0,pe=Ke.length;me<pe;me++)if(ve=Ke[me],y.format!==Kn)if(Se!==null)if(z){if(ye)if(y.layerUpdates.size>0){const Me=rm(ve.width,ve.height,y.format,y.type);for(const Xe of y.layerUpdates){const Et=ve.data.subarray(Xe*Me/ve.data.BYTES_PER_ELEMENT,(Xe+1)*Me/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,Xe,ve.width,ve.height,1,Se,Et)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,he.depth,Se,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,Ce,ve.width,ve.height,he.depth,0,ve.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,he.depth,Se,Ie,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,Ce,ve.width,ve.height,he.depth,0,Se,Ie,ve.data)}else{z&&Pe&&n.texStorage2D(t.TEXTURE_2D,Le,Ce,Ke[0].width,Ke[0].height);for(let me=0,pe=Ke.length;me<pe;me++)ve=Ke[me],y.format!==Kn?Se!==null?z?ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,me,Ce,ve.width,ve.height,0,ve.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?ye&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,me,Ce,ve.width,ve.height,0,Se,Ie,ve.data)}else if(y.isDataArrayTexture)if(z){if(Pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Ce,he.width,he.height,he.depth),ye)if(y.layerUpdates.size>0){const me=rm(he.width,he.height,y.format,y.type);for(const pe of y.layerUpdates){const Me=he.data.subarray(pe*me/he.data.BYTES_PER_ELEMENT,(pe+1)*me/he.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,pe,he.width,he.height,1,Se,Ie,Me)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,he.width,he.height,he.depth,Se,Ie,he.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,he.width,he.height,he.depth,0,Se,Ie,he.data);else if(y.isData3DTexture)z?(Pe&&n.texStorage3D(t.TEXTURE_3D,Le,Ce,he.width,he.height,he.depth),ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,he.width,he.height,he.depth,Se,Ie,he.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,he.width,he.height,he.depth,0,Se,Ie,he.data);else if(y.isFramebufferTexture){if(Pe)if(z)n.texStorage2D(t.TEXTURE_2D,Le,Ce,he.width,he.height);else{let me=he.width,pe=he.height;for(let Me=0;Me<Le;Me++)n.texImage2D(t.TEXTURE_2D,Me,Ce,me,pe,0,Se,Ie,null),me>>=1,pe>>=1}}else if(Ke.length>0){if(z&&Pe){const me=K(Ke[0]);n.texStorage2D(t.TEXTURE_2D,Le,Ce,me.width,me.height)}for(let me=0,pe=Ke.length;me<pe;me++)ve=Ke[me],z?ye&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Se,Ie,ve):n.texImage2D(t.TEXTURE_2D,me,Ce,Se,Ie,ve);y.generateMipmaps=!1}else if(z){if(Pe){const me=K(he);n.texStorage2D(t.TEXTURE_2D,Le,Ce,me.width,me.height)}ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ie,he)}else n.texImage2D(t.TEXTURE_2D,0,Ce,Se,Ie,he);g(y)&&m(j),_e.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function F(A,y,N){if(y.image.length!==6)return;const j=Be(A,y),te=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+N);const Z=s.get(te);if(te.version!==Z.__version||j===!0){n.activeTexture(t.TEXTURE0+N);const _e=ot.getPrimaries(ot.workingColorSpace),de=y.colorSpace===_a?null:ot.getPrimaries(y.colorSpace),Ee=y.colorSpace===_a||_e===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Ue=y.isCompressedTexture||y.image[0].isCompressedTexture,he=y.image[0]&&y.image[0].isDataTexture,Se=[];for(let pe=0;pe<6;pe++)!Ue&&!he?Se[pe]=_(y.image[pe],!0,a.maxCubemapSize):Se[pe]=he?y.image[pe].image:y.image[pe],Se[pe]=ue(y,Se[pe]);const Ie=Se[0],Ce=i.convert(y.format,y.colorSpace),ve=i.convert(y.type),Ke=x(y.internalFormat,Ce,ve,y.colorSpace),z=y.isVideoTexture!==!0,Pe=Z.__version===void 0||j===!0,ye=te.dataReady;let Le=T(y,Ie);Oe(t.TEXTURE_CUBE_MAP,y);let me;if(Ue){z&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Ke,Ie.width,Ie.height);for(let pe=0;pe<6;pe++){me=Se[pe].mipmaps;for(let Me=0;Me<me.length;Me++){const Xe=me[Me];y.format!==Kn?Ce!==null?z?ye&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me,0,0,Xe.width,Xe.height,Ce,Xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me,Ke,Xe.width,Xe.height,0,Xe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me,0,0,Xe.width,Xe.height,Ce,ve,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me,Ke,Xe.width,Xe.height,0,Ce,ve,Xe.data)}}}else{if(me=y.mipmaps,z&&Pe){me.length>0&&Le++;const pe=K(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,Ke,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(he){z?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Se[pe].width,Se[pe].height,Ce,ve,Se[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ke,Se[pe].width,Se[pe].height,0,Ce,ve,Se[pe].data);for(let Me=0;Me<me.length;Me++){const Et=me[Me].image[pe].image;z?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me+1,0,0,Et.width,Et.height,Ce,ve,Et.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me+1,Ke,Et.width,Et.height,0,Ce,ve,Et.data)}}else{z?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Ce,ve,Se[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,Ke,Ce,ve,Se[pe]);for(let Me=0;Me<me.length;Me++){const Xe=me[Me];z?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me+1,0,0,Ce,ve,Xe.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me+1,Ke,Ce,ve,Xe.image[pe])}}}g(y)&&m(t.TEXTURE_CUBE_MAP),Z.__version=te.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ae(A,y,N,j,te,Z){const _e=i.convert(N.format,N.colorSpace),de=i.convert(N.type),Ee=x(N.internalFormat,_e,de,N.colorSpace),Ue=s.get(y),he=s.get(N);if(he.__renderTarget=y,!Ue.__hasExternalTextures){const Se=Math.max(1,y.width>>Z),Ie=Math.max(1,y.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,Ee,Se,Ie,y.depth,0,_e,de,null):n.texImage2D(te,Z,Ee,Se,Ie,0,_e,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),fe(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,te,he.__webglTexture,0,C(y)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,te,he.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(A,y,N){if(t.bindRenderbuffer(t.RENDERBUFFER,A),y.depthBuffer){const j=y.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=S(y.stencilBuffer,te),_e=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;fe(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(y),Z,y.width,y.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(y),Z,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Z,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,A)}else{const j=y.textures;for(let te=0;te<j.length;te++){const Z=j[te],_e=i.convert(Z.format,Z.colorSpace),de=i.convert(Z.type),Ee=x(Z.internalFormat,_e,de,Z.colorSpace);fe(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(y),Ee,y.width,y.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(y),Ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function re(A,y,N){const j=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=s.get(y.depthTexture);if(te.__renderTarget=y,(!te.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,y.depthTexture.addEventListener("dispose",P)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,y.depthTexture);const Ue=i.convert(y.depthTexture.format),he=i.convert(y.depthTexture.type);let Se;y.depthTexture.format===Ks?Se=t.DEPTH_COMPONENT24:y.depthTexture.format===qa&&(Se=t.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Se,y.width,y.height,0,Ue,he,null)}}else X(y.depthTexture,0);const Z=te.__webglTexture,_e=C(y),de=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Ee=y.depthTexture.format===qa?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ks)fe(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ee,de,Z,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Ee,de,Z,0);else if(y.depthTexture.format===qa)fe(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Ee,de,Z,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Ee,de,Z,0);else throw new Error("Unknown depthTexture format")}function Ae(A){const y=s.get(A),N=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const te=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),y.__depthDisposeCallback=te}y.__boundDepthTexture=j}if(A.depthTexture&&!y.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)re(y.__webglFramebuffer[j],A,j);else{const j=A.texture.mipmaps;j&&j.length>0?re(y.__webglFramebuffer[0],A,0):re(y.__webglFramebuffer,A,0)}else if(N){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=t.createRenderbuffer(),oe(y.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else{const j=A.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),oe(y.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(A,y,N){const j=s.get(A);y!==void 0&&ae(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Ae(A)}function R(A){const y=A.texture,N=s.get(A),j=s.get(y);A.addEventListener("dispose",L);const te=A.textures,Z=A.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=y.version,r.memory.textures++),Z){N.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[de]=[];for(let Ee=0;Ee<y.mipmaps.length;Ee++)N.__webglFramebuffer[de][Ee]=t.createFramebuffer()}else N.__webglFramebuffer[de]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)N.__webglFramebuffer[de]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(_e)for(let de=0,Ee=te.length;de<Ee;de++){const Ue=s.get(te[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),r.memory.textures++)}if(A.samples>0&&fe(A)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const Ee=te[de];N.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[de]);const Ue=i.convert(Ee.format,Ee.colorSpace),he=i.convert(Ee.type),Se=x(Ee.internalFormat,Ue,he,Ee.colorSpace,A.isXRRenderTarget===!0),Ie=C(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Se,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,N.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)ae(N.__webglFramebuffer[de][Ee],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ee);else ae(N.__webglFramebuffer[de],A,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(y)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let de=0,Ee=te.length;de<Ee;de++){const Ue=te[de],he=s.get(Ue);let Se=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Se=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,he.__webglTexture),Oe(Se,Ue),ae(N.__webglFramebuffer,A,Ue,t.COLOR_ATTACHMENT0+de,Se,0),g(Ue)&&m(Se)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,j.__webglTexture),Oe(de,y),y.mipmaps&&y.mipmaps.length>0)for(let Ee=0;Ee<y.mipmaps.length;Ee++)ae(N.__webglFramebuffer[Ee],A,y,t.COLOR_ATTACHMENT0,de,Ee);else ae(N.__webglFramebuffer,A,y,t.COLOR_ATTACHMENT0,de,0);g(y)&&m(de),n.unbindTexture()}A.depthBuffer&&Ae(A)}function I(A){const y=A.textures;for(let N=0,j=y.length;N<j;N++){const te=y[N];if(g(te)){const Z=M(A),_e=s.get(te).__webglTexture;n.bindTexture(Z,_e),m(Z),n.unbindTexture()}}}const W=[],ee=[];function se(A){if(A.samples>0){if(fe(A)===!1){const y=A.textures,N=A.width,j=A.height;let te=t.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=s.get(A),de=y.length>1;if(de)for(let Ue=0;Ue<y.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Ee=A.texture.mipmaps;Ee&&Ee.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ue=0;Ue<y.length;Ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const he=s.get(y[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,he,0)}t.blitFramebuffer(0,0,N,j,0,0,N,j,te,t.NEAREST),l===!0&&(W.length=0,ee.length=0,W.push(t.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&A.resolveDepthBuffer===!1&&(W.push(Z),ee.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,W))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ue=0;Ue<y.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const he=s.get(y[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,he,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const y=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function C(A){return Math.min(a.maxSamples,A.samples)}function fe(A){const y=s.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ce(A){const y=r.render.frame;c.get(A)!==y&&(c.set(A,y),A.update())}function ue(A,y){const N=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Yi&&N!==_a&&(ot.getTransfer(N)===gt?(j!==Kn||te!==Cn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",N)),y}function K(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=We,this.setupRenderTarget=R,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=se,this.setupDepthRenderbuffer=Ae,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=fe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function W8(t,e){function n(s,a=_a){let i;const r=ot.getTransfer(a);if(s===Cn)return t.UNSIGNED_BYTE;if(s===Nh)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Uh)return t.UNSIGNED_SHORT_5_5_5_1;if(s===M1)return t.UNSIGNED_INT_5_9_9_9_REV;if(s===E1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(s===b1)return t.BYTE;if(s===S1)return t.SHORT;if(s===Vr)return t.UNSIGNED_SHORT;if(s===Ih)return t.INT;if(s===bs)return t.UNSIGNED_INT;if(s===ds)return t.FLOAT;if(s===Ys)return t.HALF_FLOAT;if(s===w1)return t.ALPHA;if(s===T1)return t.RGB;if(s===Kn)return t.RGBA;if(s===Ks)return t.DEPTH_COMPONENT;if(s===qa)return t.DEPTH_STENCIL;if(s===A1)return t.RED;if(s===Oh)return t.RED_INTEGER;if(s===ji)return t.RG;if(s===Fh)return t.RG_INTEGER;if(s===Bh)return t.RGBA_INTEGER;if(s===sl||s===al||s===il||s===rl)if(r===gt)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(s===sl)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===al)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===il)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===rl)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(s===sl)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===al)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===il)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===rl)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ju||s===Qu||s===ep||s===tp)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(s===Ju)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qu)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ep)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===tp)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===np||s===sp||s===ap||s===ip||s===rp||s===op||s===lp)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(s===np||s===sp)return r===gt?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(s===ap)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(s===ip)return i.COMPRESSED_R11_EAC;if(s===rp)return i.COMPRESSED_SIGNED_R11_EAC;if(s===op)return i.COMPRESSED_RG11_EAC;if(s===lp)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===cp||s===up||s===pp||s===hp||s===fp||s===dp||s===mp||s===gp||s===vp||s===_p||s===xp||s===yp||s===bp||s===Sp)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(s===cp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===up)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===pp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===fp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===dp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===mp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===gp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===_p)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===xp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===yp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===bp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Sp)return r===gt?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mp||s===Ep||s===wp)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(s===Mp)return r===gt?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ep)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===wp)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Tp||s===Ap||s===Cp||s===Rp)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(s===Tp)return i.COMPRESSED_RED_RGTC1_EXT;if(s===Ap)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Cp)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Rp)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hr?t.UNSIGNED_INT_24_8:t[s]!==void 0?t[s]:null}return{convert:n}}const $8=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,X8=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class q8{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const s=new H1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new is({vertexShader:$8,fragmentShader:X8,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new as(new jl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j8 extends ir{constructor(e,n){super();const s=this;let a=null,i=1,r=null,o="local-floor",l=1,u=null,c=null,p=null,h=null,f=null,v=null;const _=typeof XRWebGLBinding<"u",g=new q8,m={},M=n.getContextAttributes();let x=null,S=null;const T=[],P=[],L=new pt;let O=null;const b=new zn;b.viewport=new Bt;const E=new zn;E.viewport=new Bt;const D=[b,E],U=new aT;let k=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let F=T[ie];return F===void 0&&(F=new Qc,T[ie]=F),F.getTargetRaySpace()},this.getControllerGrip=function(ie){let F=T[ie];return F===void 0&&(F=new Qc,T[ie]=F),F.getGripSpace()},this.getHand=function(ie){let F=T[ie];return F===void 0&&(F=new Qc,T[ie]=F),F.getHandSpace()};function X(ie){const F=P.indexOf(ie.inputSource);if(F===-1)return;const ae=T[F];ae!==void 0&&(ae.update(ie.inputSource,ie.frame,u||r),ae.dispatchEvent({type:ie.type,data:ie.inputSource}))}function B(){a.removeEventListener("select",X),a.removeEventListener("selectstart",X),a.removeEventListener("selectend",X),a.removeEventListener("squeeze",X),a.removeEventListener("squeezestart",X),a.removeEventListener("squeezeend",X),a.removeEventListener("end",B),a.removeEventListener("inputsourceschange",G);for(let ie=0;ie<T.length;ie++){const F=P[ie];F!==null&&(P[ie]=null,T[ie].disconnect(F))}k=null,V=null,g.reset();for(const ie in m)delete m[ie];e.setRenderTarget(x),f=null,h=null,p=null,a=null,S=null,et.stop(),s.isPresenting=!1,e.setPixelRatio(O),e.setSize(L.width,L.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){i=ie,s.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,s.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||r},this.setReferenceSpace=function(ie){u=ie},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return p===null&&_&&(p=new XRWebGLBinding(a,n)),p},this.getFrame=function(){return v},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",X),a.addEventListener("selectstart",X),a.addEventListener("selectend",X),a.addEventListener("squeeze",X),a.addEventListener("squeezestart",X),a.addEventListener("squeezeend",X),a.addEventListener("end",B),a.addEventListener("inputsourceschange",G),M.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ae=null,oe=null,re=null;M.depth&&(re=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ae=M.stencil?qa:Ks,oe=M.stencil?Hr:bs);const Ae={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:i};p=this.getBinding(),h=p.createProjectionLayer(Ae),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new _s(h.textureWidth,h.textureHeight,{format:Kn,type:Cn,depthTexture:new $r(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ae={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(a,n,ae),a.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new _s(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,r=await a.requestReferenceSpace(o),et.setContext(a),et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(ie){for(let F=0;F<ie.removed.length;F++){const ae=ie.removed[F],oe=P.indexOf(ae);oe>=0&&(P[oe]=null,T[oe].disconnect(ae))}for(let F=0;F<ie.added.length;F++){const ae=ie.added[F];let oe=P.indexOf(ae);if(oe===-1){for(let Ae=0;Ae<T.length;Ae++)if(Ae>=P.length){P.push(ae),oe=Ae;break}else if(P[Ae]===null){P[Ae]=ae,oe=Ae;break}if(oe===-1)break}const re=T[oe];re&&re.connect(ae)}}const q=new J,le=new J;function ge(ie,F,ae){q.setFromMatrixPosition(F.matrixWorld),le.setFromMatrixPosition(ae.matrixWorld);const oe=q.distanceTo(le),re=F.projectionMatrix.elements,Ae=ae.projectionMatrix.elements,We=re[14]/(re[10]-1),R=re[14]/(re[10]+1),I=(re[9]+1)/re[5],W=(re[9]-1)/re[5],ee=(re[8]-1)/re[0],se=(Ae[8]+1)/Ae[0],C=We*ee,fe=We*se,ce=oe/(-ee+se),ue=ce*-ee;if(F.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(ue),ie.translateZ(ce),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),re[10]===-1)ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const K=We+ce,A=R+ce,y=C-ue,N=fe+(oe-ue),j=I*R/A*K,te=W*R/A*K;ie.projectionMatrix.makePerspective(y,N,j,te,K,A),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function be(ie,F){F===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(F.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let F=ie.near,ae=ie.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(ae=g.depthFar)),U.near=E.near=b.near=F,U.far=E.far=b.far=ae,(k!==U.near||V!==U.far)&&(a.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,V=U.far),U.layers.mask=ie.layers.mask|6,b.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const oe=ie.parent,re=U.cameras;be(U,oe);for(let Ae=0;Ae<re.length;Ae++)be(re[Ae],oe);re.length===2?ge(U,b,E):U.projectionMatrix.copy(b.projectionMatrix),Oe(ie,U,oe)};function Oe(ie,F,ae){ae===null?ie.matrix.copy(F.matrixWorld):(ie.matrix.copy(ae.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(F.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(F.projectionMatrix),ie.projectionMatrixInverse.copy(F.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Pp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(ie){l=ie,h!==null&&(h.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(ie){return m[ie]};let Be=null;function rt(ie,F){if(c=F.getViewerPose(u||r),v=F,c!==null){const ae=c.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let oe=!1;ae.length!==U.cameras.length&&(U.cameras.length=0,oe=!0);for(let R=0;R<ae.length;R++){const I=ae[R];let W=null;if(f!==null)W=f.getViewport(I);else{const se=p.getViewSubImage(h,I);W=se.viewport,R===0&&(e.setRenderTargetTextures(S,se.colorTexture,se.depthStencilTexture),e.setRenderTarget(S))}let ee=D[R];ee===void 0&&(ee=new zn,ee.layers.enable(R),ee.viewport=new Bt,D[R]=ee),ee.matrix.fromArray(I.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(I.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(W.x,W.y,W.width,W.height),R===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),oe===!0&&U.cameras.push(ee)}const re=a.enabledFeatures;if(re&&re.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&_){p=s.getBinding();const R=p.getDepthInformation(ae[0]);R&&R.isValid&&R.texture&&g.init(R,a.renderState)}if(re&&re.includes("camera-access")&&_){e.state.unbindTexture(),p=s.getBinding();for(let R=0;R<ae.length;R++){const I=ae[R].camera;if(I){let W=m[I];W||(W=new H1,m[I]=W);const ee=p.getCameraImage(I);W.sourceTexture=ee}}}}for(let ae=0;ae<T.length;ae++){const oe=P[ae],re=T[ae];oe!==null&&re!==void 0&&re.update(oe,F,u||r)}Be&&Be(ie,F),F.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:F}),v=null}const et=new W1;et.setAnimationLoop(rt),this.setAnimationLoop=function(ie){Be=ie},this.dispose=function(){}}}const Ba=new Ss,Y8=new It;function K8(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function s(g,m){m.color.getRGB(g.fogColor.value,F1(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function a(g,m,M,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?i(g,m):m.isMeshToonMaterial?(i(g,m),p(g,m)):m.isMeshPhongMaterial?(i(g,m),c(g,m)):m.isMeshStandardMaterial?(i(g,m),h(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(i(g,m),v(g,m)):m.isMeshDepthMaterial?i(g,m):m.isMeshDistanceMaterial?(i(g,m),_(g,m)):m.isMeshNormalMaterial?i(g,m):m.isLineBasicMaterial?(r(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,M,x):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===dn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===dn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const M=e.get(m),x=M.envMap,S=M.envMapRotation;x&&(g.envMap.value=x,Ba.copy(S),Ba.x*=-1,Ba.y*=-1,Ba.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Ba.y*=-1,Ba.z*=-1),g.envMapRotation.value.setFromMatrix4(Y8.makeRotationFromEuler(Ba)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function r(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,M,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*M,g.scale.value=x*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function p(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function h(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,M){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===dn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const M=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function Z8(t,e,n,s){let a={},i={},r=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,x){const S=x.program;s.uniformBlockBinding(M,S)}function u(M,x){let S=a[M.id];S===void 0&&(v(M),S=c(M),a[M.id]=S,M.addEventListener("dispose",g));const T=x.program;s.updateUBOMapping(M,T);const P=e.render.frame;i[M.id]!==P&&(h(M),i[M.id]=P)}function c(M){const x=p();M.__bindingPointIndex=x;const S=t.createBuffer(),T=M.__size,P=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,T,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function p(){for(let M=0;M<o;M++)if(r.indexOf(M)===-1)return r.push(M),M;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const x=a[M.id],S=M.uniforms,T=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,L=S.length;P<L;P++){const O=Array.isArray(S[P])?S[P]:[S[P]];for(let b=0,E=O.length;b<E;b++){const D=O[b];if(f(D,P,b,T)===!0){const U=D.__offset,k=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let X=0;X<k.length;X++){const B=k[X],G=_(B);typeof B=="number"||typeof B=="boolean"?(D.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,U+V,D.__data)):B.isMatrix3?(D.__data[0]=B.elements[0],D.__data[1]=B.elements[1],D.__data[2]=B.elements[2],D.__data[3]=0,D.__data[4]=B.elements[3],D.__data[5]=B.elements[4],D.__data[6]=B.elements[5],D.__data[7]=0,D.__data[8]=B.elements[6],D.__data[9]=B.elements[7],D.__data[10]=B.elements[8],D.__data[11]=0):(B.toArray(D.__data,V),V+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(M,x,S,T){const P=M.value,L=x+"_"+S;if(T[L]===void 0)return typeof P=="number"||typeof P=="boolean"?T[L]=P:T[L]=P.clone(),!0;{const O=T[L];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return T[L]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function v(M){const x=M.uniforms;let S=0;const T=16;for(let L=0,O=x.length;L<O;L++){const b=Array.isArray(x[L])?x[L]:[x[L]];for(let E=0,D=b.length;E<D;E++){const U=b[E],k=Array.isArray(U.value)?U.value:[U.value];for(let V=0,X=k.length;V<X;V++){const B=k[V],G=_(B),q=S%T,le=q%G.boundary,ge=q+le;S+=le,ge!==0&&T-ge<G.storage&&(S+=T-ge),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=G.storage}}}const P=S%T;return P>0&&(S+=T-P),M.__size=S,M.__cache={},this}function _(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",M),x}function g(M){const x=M.target;x.removeEventListener("dispose",g);const S=r.indexOf(x.__bindingPointIndex);r.splice(S,1),t.deleteBuffer(a[x.id]),delete a[x.id],delete i[x.id]}function m(){for(const M in a)t.deleteBuffer(a[M]);r=[],a={},i={}}return{bind:l,update:u,dispose:m}}const J8=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cs=null;function Q8(){return cs===null&&(cs=new zw(J8,16,16,ji,Ys),cs.name="DFG_LUT",cs.minFilter=an,cs.magFilter=an,cs.wrapS=zs,cs.wrapT=zs,cs.generateMipmaps=!1,cs.needsUpdate=!0),cs}class eC{constructor(e={}){const{canvas:n=fw(),context:s=null,depth:a=!0,stencil:i=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Cn}=e;this.isWebGLRenderer=!0;let v;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=s.getContextAttributes().alpha}else v=r;const _=f,g=new Set([Bh,Fh,Oh]),m=new Set([Cn,bs,Vr,Hr,Nh,Uh]),M=new Uint32Array(4),x=new Int32Array(4);let S=null,T=null;const P=[],L=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let E=!1;this._outputColorSpace=Bn;let D=0,U=0,k=null,V=-1,X=null;const B=new Bt,G=new Bt;let q=null;const le=new it(0);let ge=0,be=n.width,Oe=n.height,Be=1,rt=null,et=null;const ie=new Bt(0,0,be,Oe),F=new Bt(0,0,be,Oe);let ae=!1;const oe=new Hh;let re=!1,Ae=!1;const We=new It,R=new J,I=new Bt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function se(){return k===null?Be:1}let C=s;function fe(w,H){return n.getContext(w,H)}try{const w={alpha:!0,depth:a,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Lh}`),n.addEventListener("webglcontextlost",Xe,!1),n.addEventListener("webglcontextrestored",Et,!1),n.addEventListener("webglcontextcreationerror",dt,!1),C===null){const H="webgl2";if(C=fe(H,w),C===null)throw fe(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw ut("WebGLRenderer: "+w.message),w}let ce,ue,K,A,y,N,j,te,Z,_e,de,Ee,Ue,he,Se,Ie,Ce,ve,Ke,z,Pe,ye,Le,me;function pe(){ce=new Q5(C),ce.init(),ye=new W8(C,ce),ue=new W5(C,ce,e,ye),K=new H8(C,ce),ue.reversedDepthBuffer&&h&&K.buffers.depth.setReversed(!0),A=new n6(C),y=new A8,N=new G8(C,ce,K,y,ue,ye,A),j=new X5(b),te=new J5(b),Z=new rT(C),Le=new H5(C,Z),_e=new e6(C,Z,A,Le),de=new a6(C,_e,Z,A),Ke=new s6(C,ue,N),Ie=new $5(y),Ee=new T8(b,j,te,ce,ue,Le,Ie),Ue=new K8(b,y),he=new R8,Se=new U8(ce),ve=new V5(b,j,te,K,de,v,l),Ce=new z8(b,de,ue),me=new Z8(C,A,ue,K),z=new G5(C,ce,A),Pe=new t6(C,ce,A),A.programs=Ee.programs,b.capabilities=ue,b.extensions=ce,b.properties=y,b.renderLists=he,b.shadowMap=Ce,b.state=K,b.info=A}pe(),_!==Cn&&(O=new r6(_,n.width,n.height,a,i));const Me=new j8(b,C);this.xr=Me,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=ce.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ce.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(w){w!==void 0&&(Be=w,this.setSize(be,Oe,!1))},this.getSize=function(w){return w.set(be,Oe)},this.setSize=function(w,H,ne=!0){if(Me.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}be=w,Oe=H,n.width=Math.floor(w*Be),n.height=Math.floor(H*Be),ne===!0&&(n.style.width=w+"px",n.style.height=H+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,w,H)},this.getDrawingBufferSize=function(w){return w.set(be*Be,Oe*Be).floor()},this.setDrawingBufferSize=function(w,H,ne){be=w,Oe=H,Be=ne,n.width=Math.floor(w*ne),n.height=Math.floor(H*ne),this.setViewport(0,0,w,H)},this.setEffects=function(w){if(_===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let H=0;H<w.length;H++)if(w[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy(ie)},this.setViewport=function(w,H,ne,Q){w.isVector4?ie.set(w.x,w.y,w.z,w.w):ie.set(w,H,ne,Q),K.viewport(B.copy(ie).multiplyScalar(Be).round())},this.getScissor=function(w){return w.copy(F)},this.setScissor=function(w,H,ne,Q){w.isVector4?F.set(w.x,w.y,w.z,w.w):F.set(w,H,ne,Q),K.scissor(G.copy(F).multiplyScalar(Be).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(w){K.setScissorTest(ae=w)},this.setOpaqueSort=function(w){rt=w},this.setTransparentSort=function(w){et=w},this.getClearColor=function(w){return w.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(w=!0,H=!0,ne=!0){let Q=0;if(w){let Y=!1;if(k!==null){const we=k.texture.format;Y=g.has(we)}if(Y){const we=k.texture.type,De=m.has(we),Re=ve.getClearColor(),Ne=ve.getClearAlpha(),Fe=Re.r,Ve=Re.g,ke=Re.b;De?(M[0]=Fe,M[1]=Ve,M[2]=ke,M[3]=Ne,C.clearBufferuiv(C.COLOR,0,M)):(x[0]=Fe,x[1]=Ve,x[2]=ke,x[3]=Ne,C.clearBufferiv(C.COLOR,0,x))}else Q|=C.COLOR_BUFFER_BIT}H&&(Q|=C.DEPTH_BUFFER_BIT),ne&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Xe,!1),n.removeEventListener("webglcontextrestored",Et,!1),n.removeEventListener("webglcontextcreationerror",dt,!1),ve.dispose(),he.dispose(),Se.dispose(),y.dispose(),j.dispose(),te.dispose(),de.dispose(),Le.dispose(),me.dispose(),Ee.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",Xh),Me.removeEventListener("sessionend",qh),Ca.stop()};function Xe(w){w.preventDefault(),kd("WebGLRenderer: Context Lost."),E=!0}function Et(){kd("WebGLRenderer: Context Restored."),E=!1;const w=A.autoReset,H=Ce.enabled,ne=Ce.autoUpdate,Q=Ce.needsUpdate,Y=Ce.type;pe(),A.autoReset=w,Ce.enabled=H,Ce.autoUpdate=ne,Ce.needsUpdate=Q,Ce.type=Y}function dt(w){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ls(w){const H=w.target;H.removeEventListener("dispose",ls),Ts(H)}function Ts(w){K1(w),y.remove(w)}function K1(w){const H=y.get(w).programs;H!==void 0&&(H.forEach(function(ne){Ee.releaseProgram(ne)}),w.isShaderMaterial&&Ee.releaseShaderCache(w))}this.renderBufferDirect=function(w,H,ne,Q,Y,we){H===null&&(H=W);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,Re=J1(w,H,ne,Q,Y);K.setMaterial(Q,De);let Ne=ne.index,Fe=1;if(Q.wireframe===!0){if(Ne=_e.getWireframeAttribute(ne),Ne===void 0)return;Fe=2}const Ve=ne.drawRange,ke=ne.attributes.position;let tt=Ve.start*Fe,_t=(Ve.start+Ve.count)*Fe;we!==null&&(tt=Math.max(tt,we.start*Fe),_t=Math.min(_t,(we.start+we.count)*Fe)),Ne!==null?(tt=Math.max(tt,0),_t=Math.min(_t,Ne.count)):ke!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,ke.count));const Nt=_t-tt;if(Nt<0||Nt===1/0)return;Le.setup(Y,Q,Re,ne,Ne);let Ut,yt=z;if(Ne!==null&&(Ut=Z.get(Ne),yt=Pe,yt.setIndex(Ut)),Y.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*se()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if(Y.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),K.setLineWidth(ze*se()),Y.isLineSegments?yt.setMode(C.LINES):Y.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else Y.isPoints?yt.setMode(C.POINTS):Y.isSprite&&yt.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Wr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ze=Y._multiDrawStarts,mt=Y._multiDrawCounts,ct=Y._multiDrawCount,Sn=Ne?Z.get(Ne).bytesPerElement:1,si=y.get(Q).currentProgram.getUniforms();for(let Mn=0;Mn<ct;Mn++)si.setValue(C,"_gl_DrawID",Mn),yt.render(ze[Mn]/Sn,mt[Mn])}else if(Y.isInstancedMesh)yt.renderInstances(tt,Nt,Y.count);else if(ne.isInstancedBufferGeometry){const ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,mt=Math.min(ne.instanceCount,ze);yt.renderInstances(tt,Nt,mt)}else yt.render(tt,Nt)};function $h(w,H,ne){w.transparent===!0&&w.side===ks&&w.forceSinglePass===!1?(w.side=dn,w.needsUpdate=!0,fo(w,H,ne),w.side=Ma,w.needsUpdate=!0,fo(w,H,ne),w.side=ks):fo(w,H,ne)}this.compile=function(w,H,ne=null){ne===null&&(ne=w),T=Se.get(ne),T.init(H),L.push(T),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),w!==ne&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights();const Q=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let De=0;De<we.length;De++){const Re=we[De];$h(Re,ne,Y),Q.add(Re)}else $h(we,ne,Y),Q.add(we)}),T=L.pop(),Q},this.compileAsync=function(w,H,ne=null){const Q=this.compile(w,H,ne);return new Promise(Y=>{function we(){if(Q.forEach(function(De){y.get(De).currentProgram.isReady()&&Q.delete(De)}),Q.size===0){Y(w);return}setTimeout(we,10)}ce.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Zl=null;function Z1(w){Zl&&Zl(w)}function Xh(){Ca.stop()}function qh(){Ca.start()}const Ca=new W1;Ca.setAnimationLoop(Z1),typeof self<"u"&&Ca.setContext(self),this.setAnimationLoop=function(w){Zl=w,Me.setAnimationLoop(w),w===null?Ca.stop():Ca.start()},Me.addEventListener("sessionstart",Xh),Me.addEventListener("sessionend",qh),this.render=function(w,H){if(H!==void 0&&H.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;const ne=Me.enabled===!0&&Me.isPresenting===!0,Q=O!==null&&(k===null||ne)&&O.begin(b,k);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(H),H=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(b,w,H,k),T=Se.get(w,L.length),T.init(H),L.push(T),We.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),oe.setFromProjectionMatrix(We,ms,H.reversedDepth),Ae=this.localClippingEnabled,re=Ie.init(this.clippingPlanes,Ae),S=he.get(w,P.length),S.init(),P.push(S),Me.enabled===!0&&Me.isPresenting===!0){const De=b.xr.getDepthSensingMesh();De!==null&&Jl(De,H,-1/0,b.sortObjects)}Jl(w,H,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort(rt,et),ee=Me.enabled===!1||Me.isPresenting===!1||Me.hasDepthSensing()===!1,ee&&ve.addToRenderList(S,w),this.info.render.frame++,re===!0&&Ie.beginShadows();const Y=T.state.shadowsArray;if(Ce.render(Y,w,H),re===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&O.hasRenderPass())===!1){const De=S.opaque,Re=S.transmissive;if(T.setupLights(),H.isArrayCamera){const Ne=H.cameras;if(Re.length>0)for(let Fe=0,Ve=Ne.length;Fe<Ve;Fe++){const ke=Ne[Fe];Yh(De,Re,w,ke)}ee&&ve.render(w);for(let Fe=0,Ve=Ne.length;Fe<Ve;Fe++){const ke=Ne[Fe];jh(S,w,ke,ke.viewport)}}else Re.length>0&&Yh(De,Re,w,H),ee&&ve.render(w),jh(S,w,H)}k!==null&&U===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),Q&&O.end(b),w.isScene===!0&&w.onAfterRender(b,w,H),Le.resetDefaultState(),V=-1,X=null,L.pop(),L.length>0?(T=L[L.length-1],re===!0&&Ie.setGlobalState(b.clippingPlanes,T.state.camera)):T=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Jl(w,H,ne,Q){if(w.visible===!1)return;if(w.layers.test(H.layers)){if(w.isGroup)ne=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(H);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||oe.intersectsSprite(w)){Q&&I.setFromMatrixPosition(w.matrixWorld).applyMatrix4(We);const De=de.update(w),Re=w.material;Re.visible&&S.push(w,De,Re,ne,I.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||oe.intersectsObject(w))){const De=de.update(w),Re=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),I.copy(w.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),I.copy(De.boundingSphere.center)),I.applyMatrix4(w.matrixWorld).applyMatrix4(We)),Array.isArray(Re)){const Ne=De.groups;for(let Fe=0,Ve=Ne.length;Fe<Ve;Fe++){const ke=Ne[Fe],tt=Re[ke.materialIndex];tt&&tt.visible&&S.push(w,De,tt,ne,I.z,ke)}}else Re.visible&&S.push(w,De,Re,ne,I.z,null)}}const we=w.children;for(let De=0,Re=we.length;De<Re;De++)Jl(we[De],H,ne,Q)}function jh(w,H,ne,Q){const{opaque:Y,transmissive:we,transparent:De}=w;T.setupLightsView(ne),re===!0&&Ie.setGlobalState(b.clippingPlanes,ne),Q&&K.viewport(B.copy(Q)),Y.length>0&&ho(Y,H,ne),we.length>0&&ho(we,H,ne),De.length>0&&ho(De,H,ne),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Yh(w,H,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Q.id]===void 0){const tt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Q.id]=new _s(1,1,{generateMipmaps:!0,type:tt?Ys:Cn,minFilter:Xa,samples:ue.samples,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const we=T.state.transmissionRenderTarget[Q.id],De=Q.viewport||B;we.setSize(De.z*b.transmissionResolutionScale,De.w*b.transmissionResolutionScale);const Re=b.getRenderTarget(),Ne=b.getActiveCubeFace(),Fe=b.getActiveMipmapLevel();b.setRenderTarget(we),b.getClearColor(le),ge=b.getClearAlpha(),ge<1&&b.setClearColor(16777215,.5),b.clear(),ee&&ve.render(ne);const Ve=b.toneMapping;b.toneMapping=vs;const ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),T.setupLightsView(Q),re===!0&&Ie.setGlobalState(b.clippingPlanes,Q),ho(w,ne,Q),N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we),ce.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let _t=0,Nt=H.length;_t<Nt;_t++){const Ut=H[_t],{object:yt,geometry:ze,material:mt,group:ct}=Ut;if(mt.side===ks&&yt.layers.test(Q.layers)){const Sn=mt.side;mt.side=dn,mt.needsUpdate=!0,Kh(yt,ne,Q,ze,mt,ct),mt.side=Sn,mt.needsUpdate=!0,tt=!0}}tt===!0&&(N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we))}b.setRenderTarget(Re,Ne,Fe),b.setClearColor(le,ge),ke!==void 0&&(Q.viewport=ke),b.toneMapping=Ve}function ho(w,H,ne){const Q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,we=w.length;Y<we;Y++){const De=w[Y],{object:Re,geometry:Ne,group:Fe}=De;let Ve=De.material;Ve.allowOverride===!0&&Q!==null&&(Ve=Q),Re.layers.test(ne.layers)&&Kh(Re,H,ne,Ne,Ve,Fe)}}function Kh(w,H,ne,Q,Y,we){w.onBeforeRender(b,H,ne,Q,Y,we),w.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(b,H,ne,Q,w,we),Y.transparent===!0&&Y.side===ks&&Y.forceSinglePass===!1?(Y.side=dn,Y.needsUpdate=!0,b.renderBufferDirect(ne,H,Q,Y,w,we),Y.side=Ma,Y.needsUpdate=!0,b.renderBufferDirect(ne,H,Q,Y,w,we),Y.side=ks):b.renderBufferDirect(ne,H,Q,Y,w,we),w.onAfterRender(b,H,ne,Q,Y,we)}function fo(w,H,ne){H.isScene!==!0&&(H=W);const Q=y.get(w),Y=T.state.lights,we=T.state.shadowsArray,De=Y.state.version,Re=Ee.getParameters(w,Y.state,we,H,ne),Ne=Ee.getProgramCacheKey(Re);let Fe=Q.programs;Q.environment=w.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(w.isMeshStandardMaterial?te:j).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?H.environmentRotation:w.envMapRotation,Fe===void 0&&(w.addEventListener("dispose",ls),Fe=new Map,Q.programs=Fe);let Ve=Fe.get(Ne);if(Ve!==void 0){if(Q.currentProgram===Ve&&Q.lightsStateVersion===De)return Jh(w,Re),Ve}else Re.uniforms=Ee.getUniforms(w),w.onBeforeCompile(Re,b),Ve=Ee.acquireProgram(Re,Ne),Fe.set(Ne,Ve),Q.uniforms=Re.uniforms;const ke=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),Jh(w,Re),Q.needsLights=e_(w),Q.lightsStateVersion=De,Q.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=Ve,Q.uniformsList=null,Ve}function Zh(w){if(w.uniformsList===null){const H=w.currentProgram.getUniforms();w.uniformsList=ol.seqWithValue(H.seq,w.uniforms)}return w.uniformsList}function Jh(w,H){const ne=y.get(w);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function J1(w,H,ne,Q,Y){H.isScene!==!0&&(H=W),N.resetTextureUnits();const we=H.fog,De=Q.isMeshStandardMaterial?H.environment:null,Re=k===null?b.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Yi,Ne=(Q.isMeshStandardMaterial?te:j).get(Q.envMap||De),Fe=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,Ve=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!ne.morphAttributes.position,tt=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color;let Nt=vs;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Nt=b.toneMapping);const Ut=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=Ut!==void 0?Ut.length:0,ze=y.get(Q),mt=T.state.lights;if(re===!0&&(Ae===!0||w!==X)){const on=w===X&&Q.id===V;Ie.setState(Q,w,on)}let ct=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mt.state.version||ze.outputColorSpace!==Re||Y.isBatchedMesh&&ze.batching===!1||!Y.isBatchedMesh&&ze.batching===!0||Y.isBatchedMesh&&ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ze.instancing===!1||!Y.isInstancedMesh&&ze.instancing===!0||Y.isSkinnedMesh&&ze.skinning===!1||!Y.isSkinnedMesh&&ze.skinning===!0||Y.isInstancedMesh&&ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ze.instancingMorph===!1&&Y.morphTexture!==null||ze.envMap!==Ne||Q.fog===!0&&ze.fog!==we||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Ie.numPlanes||ze.numIntersection!==Ie.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Ve||ze.morphTargets!==ke||ze.morphNormals!==tt||ze.morphColors!==_t||ze.toneMapping!==Nt||ze.morphTargetsCount!==yt)&&(ct=!0):(ct=!0,ze.__version=Q.version);let Sn=ze.currentProgram;ct===!0&&(Sn=fo(Q,H,Y));let si=!1,Mn=!1,lr=!1;const wt=Sn.getUniforms(),mn=ze.uniforms;if(K.useProgram(Sn.program)&&(si=!0,Mn=!0,lr=!0),Q.id!==V&&(V=Q.id,Mn=!0),si||X!==w){K.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),wt.setValue(C,"projectionMatrix",w.projectionMatrix),wt.setValue(C,"viewMatrix",w.matrixWorldInverse);const gn=wt.map.cameraPosition;gn!==void 0&&gn.setValue(C,R.setFromMatrixPosition(w.matrixWorld)),ue.logarithmicDepthBuffer&&wt.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&wt.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),X!==w&&(X=w,Mn=!0,lr=!0)}if(ze.needsLights&&(mt.state.directionalShadowMap.length>0&&wt.setValue(C,"directionalShadowMap",mt.state.directionalShadowMap,N),mt.state.spotShadowMap.length>0&&wt.setValue(C,"spotShadowMap",mt.state.spotShadowMap,N),mt.state.pointShadowMap.length>0&&wt.setValue(C,"pointShadowMap",mt.state.pointShadowMap,N)),Y.isSkinnedMesh){wt.setOptional(C,Y,"bindMatrix"),wt.setOptional(C,Y,"bindMatrixInverse");const on=Y.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),wt.setValue(C,"boneTexture",on.boneTexture,N))}Y.isBatchedMesh&&(wt.setOptional(C,Y,"batchingTexture"),wt.setValue(C,"batchingTexture",Y._matricesTexture,N),wt.setOptional(C,Y,"batchingIdTexture"),wt.setValue(C,"batchingIdTexture",Y._indirectTexture,N),wt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&wt.setValue(C,"batchingColorTexture",Y._colorsTexture,N));const In=ne.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Ke.update(Y,ne,Sn),(Mn||ze.receiveShadow!==Y.receiveShadow)&&(ze.receiveShadow=Y.receiveShadow,wt.setValue(C,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(mn.envMap.value=Ne,mn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=Q8()),Mn&&(wt.setValue(C,"toneMappingExposure",b.toneMappingExposure),ze.needsLights&&Q1(mn,lr),we&&Q.fog===!0&&Ue.refreshFogUniforms(mn,we),Ue.refreshMaterialUniforms(mn,Q,Be,Oe,T.state.transmissionRenderTarget[w.id]),ol.upload(C,Zh(ze),mn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ol.upload(C,Zh(ze),mn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&wt.setValue(C,"center",Y.center),wt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),wt.setValue(C,"normalMatrix",Y.normalMatrix),wt.setValue(C,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const on=Q.uniformsGroups;for(let gn=0,Ql=on.length;gn<Ql;gn++){const Ra=on[gn];me.update(Ra,Sn),me.bind(Ra,Sn)}}return Sn}function Q1(w,H){w.ambientLightColor.needsUpdate=H,w.lightProbe.needsUpdate=H,w.directionalLights.needsUpdate=H,w.directionalLightShadows.needsUpdate=H,w.pointLights.needsUpdate=H,w.pointLightShadows.needsUpdate=H,w.spotLights.needsUpdate=H,w.spotLightShadows.needsUpdate=H,w.rectAreaLights.needsUpdate=H,w.hemisphereLights.needsUpdate=H}function e_(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(w,H,ne){const Q=y.get(w);Q.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=H,y.get(w.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,H){const ne=y.get(w);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0};const t_=C.createFramebuffer();this.setRenderTarget=function(w,H=0,ne=0){k=w,D=H,U=ne;let Q=null,Y=!1,we=!1;if(w){const Re=y.get(w);if(Re.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(C.FRAMEBUFFER,Re.__webglFramebuffer),B.copy(w.viewport),G.copy(w.scissor),q=w.scissorTest,K.viewport(B),K.scissor(G),K.setScissorTest(q),V=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(w);else if(Re.__hasExternalTextures)N.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ve=w.depthTexture;if(Re.__boundDepthTexture!==Ve){if(Ve!==null&&y.has(Ve)&&(w.width!==Ve.image.width||w.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(w)}}const Ne=w.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(we=!0);const Fe=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?Q=Fe[H][ne]:Q=Fe[H],Y=!0):w.samples>0&&N.useMultisampledRTT(w)===!1?Q=y.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?Q=Fe[ne]:Q=Fe,B.copy(w.viewport),G.copy(w.scissor),q=w.scissorTest}else B.copy(ie).multiplyScalar(Be).floor(),G.copy(F).multiplyScalar(Be).floor(),q=ae;if(ne!==0&&(Q=t_),K.bindFramebuffer(C.FRAMEBUFFER,Q)&&K.drawBuffers(w,Q),K.viewport(B),K.scissor(G),K.setScissorTest(q),Y){const Re=y.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,ne)}else if(we){const Re=H;for(let Ne=0;Ne<w.textures.length;Ne++){const Fe=y.get(w.textures[Ne]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,ne,Re)}}else if(w!==null&&ne!==0){const Re=y.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,ne)}V=-1},this.readRenderTargetPixels=function(w,H,ne,Q,Y,we,De,Re=0){if(!(w&&w.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){K.bindFramebuffer(C.FRAMEBUFFER,Ne);try{const Fe=w.textures[Re],Ve=Fe.format,ke=Fe.type;if(!ue.textureFormatReadable(Ve)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ke)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=w.width-Q&&ne>=0&&ne<=w.height-Y&&(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),C.readPixels(H,ne,Q,Y,ye.convert(Ve),ye.convert(ke),we))}finally{const Fe=k!==null?y.get(k).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(w,H,ne,Q,Y,we,De,Re=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(H>=0&&H<=w.width-Q&&ne>=0&&ne<=w.height-Y){K.bindFramebuffer(C.FRAMEBUFFER,Ne);const Fe=w.textures[Re],Ve=Fe.format,ke=Fe.type;if(!ue.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,tt),C.bufferData(C.PIXEL_PACK_BUFFER,we.byteLength,C.STREAM_READ),w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),C.readPixels(H,ne,Q,Y,ye.convert(Ve),ye.convert(ke),0);const _t=k!==null?y.get(k).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,_t);const Nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await dw(C,Nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,tt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,we),C.deleteBuffer(tt),C.deleteSync(Nt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,H=null,ne=0){const Q=Math.pow(2,-ne),Y=Math.floor(w.image.width*Q),we=Math.floor(w.image.height*Q),De=H!==null?H.x:0,Re=H!==null?H.y:0;N.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,De,Re,Y,we),K.unbindTexture()};const n_=C.createFramebuffer(),s_=C.createFramebuffer();this.copyTextureToTexture=function(w,H,ne=null,Q=null,Y=0,we=null){we===null&&(Y!==0?(Wr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let De,Re,Ne,Fe,Ve,ke,tt,_t,Nt;const Ut=w.isCompressedTexture?w.mipmaps[we]:w.image;if(ne!==null)De=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Ne=ne.isBox3?ne.max.z-ne.min.z:1,Fe=ne.min.x,Ve=ne.min.y,ke=ne.isBox3?ne.min.z:0;else{const In=Math.pow(2,-Y);De=Math.floor(Ut.width*In),Re=Math.floor(Ut.height*In),w.isDataArrayTexture?Ne=Ut.depth:w.isData3DTexture?Ne=Math.floor(Ut.depth*In):Ne=1,Fe=0,Ve=0,ke=0}Q!==null?(tt=Q.x,_t=Q.y,Nt=Q.z):(tt=0,_t=0,Nt=0);const yt=ye.convert(H.format),ze=ye.convert(H.type);let mt;H.isData3DTexture?(N.setTexture3D(H,0),mt=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),mt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const ct=C.getParameter(C.UNPACK_ROW_LENGTH),Sn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),si=C.getParameter(C.UNPACK_SKIP_PIXELS),Mn=C.getParameter(C.UNPACK_SKIP_ROWS),lr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ve),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ke);const wt=w.isDataArrayTexture||w.isData3DTexture,mn=H.isDataArrayTexture||H.isData3DTexture;if(w.isDepthTexture){const In=y.get(w),on=y.get(H),gn=y.get(In.__renderTarget),Ql=y.get(on.__renderTarget);K.bindFramebuffer(C.READ_FRAMEBUFFER,gn.__webglFramebuffer),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Ra=0;Ra<Ne;Ra++)wt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(w).__webglTexture,Y,ke+Ra),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,y.get(H).__webglTexture,we,Nt+Ra)),C.blitFramebuffer(Fe,Ve,De,Re,tt,_t,De,Re,C.DEPTH_BUFFER_BIT,C.NEAREST);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||y.has(w)){const In=y.get(w),on=y.get(H);K.bindFramebuffer(C.READ_FRAMEBUFFER,n_),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,s_);for(let gn=0;gn<Ne;gn++)wt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,In.__webglTexture,Y,ke+gn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,In.__webglTexture,Y),mn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,on.__webglTexture,we,Nt+gn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,on.__webglTexture,we),Y!==0?C.blitFramebuffer(Fe,Ve,De,Re,tt,_t,De,Re,C.COLOR_BUFFER_BIT,C.NEAREST):mn?C.copyTexSubImage3D(mt,we,tt,_t,Nt+gn,Fe,Ve,De,Re):C.copyTexSubImage2D(mt,we,tt,_t,Fe,Ve,De,Re);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mn?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(mt,we,tt,_t,Nt,De,Re,Ne,yt,ze,Ut.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,we,tt,_t,Nt,De,Re,Ne,yt,Ut.data):C.texSubImage3D(mt,we,tt,_t,Nt,De,Re,Ne,yt,ze,Ut):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,we,tt,_t,De,Re,yt,ze,Ut.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,we,tt,_t,Ut.width,Ut.height,yt,Ut.data):C.texSubImage2D(C.TEXTURE_2D,we,tt,_t,De,Re,yt,ze,Ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Sn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,si),C.pixelStorei(C.UNPACK_SKIP_ROWS,Mn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,lr),we===0&&H.generateMipmaps&&C.generateMipmap(mt),K.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&N.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?N.setTextureCube(w,0):w.isData3DTexture?N.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?N.setTexture2DArray(w,0):N.setTexture2D(w,0),K.unbindTexture()},this.resetState=function(){D=0,U=0,k=null,K.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const Y1=(t,e)=>{const n=t.__vccOpts||t;for(const[s,a]of e)n[s]=a;return n},tC={__name:"EarthGlobe",setup(t){const e=je(null);let n;return vt(()=>{const s=e.value.clientWidth||600,a=e.value.clientHeight||400,i=new kw;i.background=new it(2068);const r=new zn(45,s/a,.1,1e3);r.position.z=2.5;const o=new eC({alpha:!0,antialias:!0});o.setSize(s,a),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0,o.toneMapping=Dh,o.toneMappingExposure=.5,e.value.appendChild(o.domElement);const l=new Gn,u=[],c=[];for(let O=0;O<5e3;O++){const b=(Math.random()-.5)*2e3,E=(Math.random()-.5)*2e3,D=(Math.random()-.5)*2e3;u.push(b,E,D);const U=new it,k=Math.random();k>.8?U.setHSL(.6,.2,Math.random()*.5+.5):k>.5?U.setHSL(.1,.1,Math.random()*.5+.5):U.setHSL(0,0,Math.random()*.5+.5),c.push(U.r,U.g,U.b)}l.setAttribute("position",new _n(u,3)),l.setAttribute("color",new _n(c,3));const p=new V1({size:1.5,vertexColors:!0,transparent:!0,opacity:.8,blending:yl}),h=new Ww(l,p);i.add(h);const f=new Ml(.9,64,64),v=new Qw().load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),_=new qw({map:v,emissive:4491519,emissiveIntensity:.35,roughness:.8}),g=new as(f,_);i.add(g);const m=new Ml(1.05,64,64),M=new is({vertexShader:`
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        vPosition = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      varying vec3 vNormal;
      varying vec3 vPosition;
      void main() {
        float intensity = pow(0.7 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
        gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
      }
    `,blending:yl,side:dn,transparent:!0,depthWrite:!1}),x=new as(m,M);g.add(x);const S=new sT(4210752,1.5);i.add(S);const T=new nT(16777215,1.5);T.position.set(5,3,5),T.castShadow=!0,i.add(T);const P=()=>{n=requestAnimationFrame(P),g.rotation.y+=.01,h.rotation.y+=2e-4,o.render(i,r)};P();const L=()=>{const O=e.value.clientWidth,b=e.value.clientHeight;r.aspect=O/b,r.updateProjectionMatrix(),o.setSize(O,b)};window.addEventListener("resize",L),Js(()=>{cancelAnimationFrame(n),window.removeEventListener("resize",L),e.value&&o.domElement&&e.value.removeChild(o.domElement)})}),(s,a)=>(Yp(),j2("div",{ref_key:"mountPoint",ref:e,class:"earth-globe"},null,512))}},nC=Y1(tC,[["__scopeId","data-v-deb8df03"]]),sC=xe({__name:"Blog",setup(t){return(e,n)=>{const s=Pt("BingHeroBackground");return Yp(),Vg(Jn(o1),null,{heroInfo:cg(a=>[gf(" 1. 地球底层 "),Dt(nC,{class:"hero-earth"}),gf(" 2. 原来的标语/背景 "),Dt(s),Dt(Jn(N4),d_(Wg(a)),null,16)]),_:1})}}}),aC=Y1(sC,[["__scopeId","data-v-bad2b6ed"]]),iC=rs({layouts:{Blog:aC}}),rC=Object.freeze(Object.defineProperty({__proto__:null,default:iC},Symbol.toStringTag,{value:"Module"})),Zo=[Nb,Ub,Fb,Bb,zb,Xb,mS,gS,vS,MS,AS,DS,US,YS,ZS,aM,pM,vM,MM,A4,P4,I4,rC].map(t=>t.default).filter(Boolean),oC=JSON.parse('{"base":"/myblog/","lang":"zh-CN","title":"superxuan的个人博客","description":"superxuan05的个人博客","head":[],"locales":{}}');var wi=Ye(oC),lC=Fx,cC=()=>{const t=iy({history:lC(Jp("/myblog/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,n,s)=>s||(e.hash?{el:e.hash}:{top:0})});return t.beforeResolve(async(e,n)=>{if(e.path!==n.path||n===Us){const s=Vn(e.fullPath);if(s.path!==e.fullPath)return s.path;const a=await s.loader();e.meta={...s.meta,_pageChunk:a}}else e.path===n.path&&(e.meta=n.meta)}),t},uC=t=>{t.component("ClientOnly",nh),t.component("Content",S0),t.component("RouteLink",Gt)},pC=(t,e,n)=>{const s=$(()=>e.currentRoute.value.path),a=ag((g,m)=>({get(){return g(),e.currentRoute.value.meta._pageChunk},set(M){e.currentRoute.value.meta._pageChunk=M,m()}})),i=$(()=>Da.resolveLayouts(n)),r=$(()=>Da.resolveRouteLocale(wi.value.locales,s.value)),o=$(()=>Da.resolveSiteLocaleData(wi.value,r.value)),l=$(()=>a.value.comp),u=$(()=>a.value.data),c=$(()=>u.value.frontmatter),p=$(()=>Da.resolvePageHeadTitle(u.value,o.value)),h=$(()=>Da.resolvePageHead(p.value,c.value,o.value)),f=$(()=>Da.resolvePageLang(u.value,o.value)),v=$(()=>Da.resolvePageLayout(u.value,i.value)),_={layouts:i,pageData:u,pageComponent:l,pageFrontmatter:c,pageHead:h,pageHeadTitle:p,pageLang:f,pageLayout:v,redirects:Eu,routeLocale:r,routePath:s,routes:Ni,siteData:wi,siteLocaleData:o,frontmatter:c,head:h,headTitle:p,lang:f,page:u,site:wi,siteLocale:o};return t.provide(th,_),Object.defineProperties(t.config.globalProperties,{$pageFrontmatter:{get:()=>c.value},$pageHead:{get:()=>h.value},$pageHeadTitle:{get:()=>p.value},$pageLang:{get:()=>f.value},$pageData:{get:()=>u.value},$routeLocale:{get:()=>r.value},$withBase:{get:()=>bt},$frontmatter:{get:()=>c.value},$head:{get:()=>h.value},$headTitle:{get:()=>p.value},$lang:{get:()=>f.value},$page:{get:()=>u.value},$site:{get:()=>wi.value},$siteLocale:{get:()=>o.value}}),_},hC=([t,e,n=""])=>{const s=Object.entries(e).map(([o,l])=>xt(l)?`[${o}=${JSON.stringify(l)}]`:l?`[${o}]`:"").join(""),a=`head > ${t}${s}`;return Array.from(document.querySelectorAll(a)).find(o=>o.innerText===n)??null},fC=([t,e,n])=>{if(!xt(t))return null;const s=document.createElement(t);return wa(e)&&Object.entries(e).forEach(([a,i])=>{xt(i)?s.setAttribute(a,i):i&&s.setAttribute(a,"")}),xt(n)&&s.appendChild(document.createTextNode(n)),s},dC=()=>{const t=ly(),e=_0();let n=[];const s=()=>{t.value.forEach(r=>{const o=hC(r);o&&n.push(o)})},a=()=>{const r=[];return t.value.forEach(o=>{const l=fC(o);l&&r.push(l)}),r},i=()=>{document.documentElement.lang=e.value;const r=a();n.forEach((o,l)=>{const u=r.findIndex(c=>o.isEqualNode(c));u===-1?(o.remove(),delete n[l]):r.splice(u,1)}),r.forEach(o=>document.head.appendChild(o)),n=[...n.filter(o=>!!o),...r]};Qn(hy,i),vt(()=>{s(),Lt(t,i,{immediate:!1})})},mC=F3,gC=async()=>{const t=mC({name:"Vuepress",setup(){dC();for(const a of Zo)a.setup?.();const n=Zo.flatMap(({rootComponents:a=[]})=>a.map(i=>d(i))),s=cy();return()=>[d(s.value),n]}}),e=cC();uC(t),pC(t,e,Zo);for(const n of Zo)await n.enhance?.({app:t,router:e,siteData:wi});return t.use(e),{app:t,router:e}};gC().then(({app:t,router:e})=>{e.isReady().then(()=>{t.mount("#app")})});export{hn as F,Y1 as _,Gg as a,$g as b,j2 as c,gC as createVueApp,Dt as d,gf as e,_C as f,Wg as g,vC as h,xe as i,je as j,d as k,d_ as n,Yp as o,Pt as r,v_ as t,Jn as u,cg as w};
