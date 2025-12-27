/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Uf(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const wt={},Cs=[],gi=()=>{},Pm=()=>!1,Xa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Of=t=>t.startsWith("onUpdate:"),$t=Object.assign,Ff=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},r_=Object.prototype.hasOwnProperty,ht=(t,e)=>r_.call(t,e),He=Array.isArray,Rs=t=>Ml(t)==="[object Map]",Dm=t=>Ml(t)==="[object Set]",We=t=>typeof t=="function",kt=t=>typeof t=="string",Mr=t=>typeof t=="symbol",St=t=>t!==null&&typeof t=="object",Lm=t=>(St(t)||We(t))&&We(t.then)&&We(t.catch),Im=Object.prototype.toString,Ml=t=>Im.call(t),s_=t=>Ml(t).slice(8,-1),Nm=t=>Ml(t)==="[object Object]",Tl=t=>kt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ps=Uf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Al=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},a_=/-\w/g,xn=Al(t=>t.replace(a_,e=>e.slice(1).toUpperCase())),o_=/\B([A-Z])/g,es=Al(t=>t.replace(o_,"-$1").toLowerCase()),qa=Al(t=>t.charAt(0).toUpperCase()+t.slice(1)),ec=Al(t=>t?`on${qa(t)}`:""),br=(t,e)=>!Object.is(t,e),tc=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Um=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},l_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},c_=t=>{const e=kt(t)?Number(t):NaN;return isNaN(e)?t:e};let eh;const wl=()=>eh||(eh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Cl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=kt(i)?h_(i):Cl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(kt(t)||St(t))return t}const u_=/;(?![^(]*\))/g,f_=/:([^]+)/,d_=/\/\*[^]*?\*\//g;function h_(t){const e={};return t.replace(d_,"").split(u_).forEach(n=>{if(n){const i=n.split(f_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Rl(t){let e="";if(kt(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=Rl(t[n]);i&&(e+=i+" ")}else if(St(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function p_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!kt(e)&&(t.class=Rl(e)),n&&(t.style=Cl(n)),t}const m_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",g_=Uf(m_);function Om(t){return!!t||t===""}const Fm=t=>!!(t&&t.__v_isRef===!0),v_=t=>kt(t)?t:t==null?"":He(t)||St(t)&&(t.toString===Im||!We(t.toString))?Fm(t)?v_(t.value):JSON.stringify(t,Bm,2):String(t),Bm=(t,e)=>Fm(e)?Bm(t,e.value):Rs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[nc(i,s)+" =>"]=r,n),{})}:Dm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>nc(n))}:Mr(e)?nc(e):St(e)&&!He(e)&&!Nm(e)?String(e):e,nc=(t,e="")=>{var n;return Mr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nn;class __{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=nn,!e&&nn&&(this.index=(nn.scopes||(nn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=nn;try{return nn=this,e()}finally{nn=n}}}on(){++this._on===1&&(this.prevScope=nn,nn=this)}off(){this._on>0&&--this._on===0&&(nn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Bf(){return nn}function x_(t,e=!1){nn&&nn.cleanups.push(t)}let At;const ic=new WeakSet;class km{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nn&&nn.active&&nn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ic.has(this)&&(ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,th(this),Hm(this);const e=At,n=Zn;At=this,Zn=!0;try{return this.fn()}finally{Gm(this),At=e,Zn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)zf(e);this.deps=this.depsTail=void 0,th(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){cu(this)&&this.run()}get dirty(){return cu(this)}}let Vm=0,Sa,Ea;function zm(t,e=!1){if(t.flags|=8,e){t.next=Ea,Ea=t;return}t.next=Sa,Sa=t}function kf(){Vm++}function Vf(){if(--Vm>0)return;if(Ea){let e=Ea;for(Ea=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Sa;){let e=Sa;for(Sa=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Hm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gm(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),zf(i),b_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function cu(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Da)||(t.globalVersion=Da,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!cu(t))))return;t.flags|=2;const e=t.dep,n=At,i=Zn;At=t,Zn=!0;try{Hm(t);const r=t.fn(t._value);(e.version===0||br(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{At=n,Zn=i,Gm(t),t.flags&=-3}}function zf(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)zf(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function b_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Zn=!0;const $m=[];function Gi(){$m.push(Zn),Zn=!1}function Wi(){const t=$m.pop();Zn=t===void 0?!0:t}function th(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=At;At=void 0;try{e()}finally{At=n}}}let Da=0;class y_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!At||!Zn||At===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==At)n=this.activeLink=new y_(At,this),At.deps?(n.prevDep=At.depsTail,At.depsTail.nextDep=n,At.depsTail=n):At.deps=At.depsTail=n,Xm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=At.depsTail,n.nextDep=void 0,At.depsTail.nextDep=n,At.depsTail=n,At.deps===n&&(At.deps=i)}return n}trigger(e){this.version++,Da++,this.notify(e)}notify(e){kf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Vf()}}}function Xm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Xm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ll=new WeakMap,jr=Symbol(""),uu=Symbol(""),La=Symbol("");function rn(t,e,n){if(Zn&&At){let i=ll.get(t);i||ll.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Pl),r.map=i,r.key=n),r.track()}}function Bi(t,e,n,i,r,s){const a=ll.get(t);if(!a){Da++;return}const o=l=>{l&&l.trigger()};if(kf(),e==="clear")a.forEach(o);else{const l=He(t),u=l&&Tl(n);if(l&&n==="length"){const c=Number(i);a.forEach((f,d)=>{(d==="length"||d===La||!Mr(d)&&d>=c)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),u&&o(a.get(La)),e){case"add":l?u&&o(a.get("length")):(o(a.get(jr)),Rs(t)&&o(a.get(uu)));break;case"delete":l||(o(a.get(jr)),Rs(t)&&o(a.get(uu)));break;case"set":Rs(t)&&o(a.get(jr));break}}Vf()}function S_(t,e){const n=ll.get(t);return n&&n.get(e)}function rs(t){const e=it(t);return e===t?e:(rn(e,"iterate",La),Dn(t)?e:e.map(ei))}function Dl(t){return rn(t=it(t),"iterate",La),t}function hr(t,e){return Xi(t)?yr(t)?Vs(ei(e)):Vs(e):ei(e)}const E_={__proto__:null,[Symbol.iterator](){return rc(this,Symbol.iterator,t=>hr(this,t))},concat(...t){return rs(this).concat(...t.map(e=>He(e)?rs(e):e))},entries(){return rc(this,"entries",t=>(t[1]=hr(this,t[1]),t))},every(t,e){return wi(this,"every",t,e,void 0,arguments)},filter(t,e){return wi(this,"filter",t,e,n=>n.map(i=>hr(this,i)),arguments)},find(t,e){return wi(this,"find",t,e,n=>hr(this,n),arguments)},findIndex(t,e){return wi(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return wi(this,"findLast",t,e,n=>hr(this,n),arguments)},findLastIndex(t,e){return wi(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return wi(this,"forEach",t,e,void 0,arguments)},includes(...t){return sc(this,"includes",t)},indexOf(...t){return sc(this,"indexOf",t)},join(t){return rs(this).join(t)},lastIndexOf(...t){return sc(this,"lastIndexOf",t)},map(t,e){return wi(this,"map",t,e,void 0,arguments)},pop(){return ca(this,"pop")},push(...t){return ca(this,"push",t)},reduce(t,...e){return nh(this,"reduce",t,e)},reduceRight(t,...e){return nh(this,"reduceRight",t,e)},shift(){return ca(this,"shift")},some(t,e){return wi(this,"some",t,e,void 0,arguments)},splice(...t){return ca(this,"splice",t)},toReversed(){return rs(this).toReversed()},toSorted(t){return rs(this).toSorted(t)},toSpliced(...t){return rs(this).toSpliced(...t)},unshift(...t){return ca(this,"unshift",t)},values(){return rc(this,"values",t=>hr(this,t))}};function rc(t,e,n){const i=Dl(t),r=i[e]();return i!==t&&!Dn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const M_=Array.prototype;function wi(t,e,n,i,r,s){const a=Dl(t),o=a!==t&&!Dn(t),l=a[e];if(l!==M_[e]){const f=l.apply(t,s);return o?ei(f):f}let u=n;a!==t&&(o?u=function(f,d){return n.call(this,hr(t,f),d,t)}:n.length>2&&(u=function(f,d){return n.call(this,f,d,t)}));const c=l.call(a,u,i);return o&&r?r(c):c}function nh(t,e,n,i){const r=Dl(t);let s=n;return r!==t&&(Dn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,hr(t,o),l,t)}),r[e](s,...i)}function sc(t,e,n){const i=it(t);rn(i,"iterate",La);const r=i[e](...n);return(r===-1||r===!1)&&Nl(n[0])?(n[0]=it(n[0]),i[e](...n)):r}function ca(t,e,n=[]){Gi(),kf();const i=it(t)[e].apply(t,n);return Vf(),Wi(),i}const T_=Uf("__proto__,__v_isRef,__isVue"),qm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Mr));function A_(t){Mr(t)||(t=String(t));const e=it(this);return rn(e,"has",t),e.hasOwnProperty(t)}class jm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?e0:Qm:s?Jm:Zm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=He(e);if(!r){let l;if(a&&(l=E_[n]))return l;if(n==="hasOwnProperty")return A_}const o=Reflect.get(e,n,Vt(e)?e:i);if((Mr(n)?qm.has(n):T_(n))||(r||rn(e,"get",n),s))return o;if(Vt(o)){const l=a&&Tl(n)?o:o.value;return r&&St(l)?$i(l):l}return St(o)?r?$i(o):Zr(o):o}}class Ym extends jm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=He(e)&&Tl(n);if(!this._isShallow){const u=Xi(s);if(!Dn(i)&&!Xi(i)&&(s=it(s),i=it(i)),!a&&Vt(s)&&!Vt(i))return u||(s.value=i),!0}const o=a?Number(n)<e.length:ht(e,n),l=Reflect.set(e,n,i,Vt(e)?e:r);return e===it(r)&&(o?br(i,s)&&Bi(e,"set",n,i):Bi(e,"add",n,i)),l}deleteProperty(e,n){const i=ht(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Bi(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Mr(n)||!qm.has(n))&&rn(e,"has",n),i}ownKeys(e){return rn(e,"iterate",He(e)?"length":jr),Reflect.ownKeys(e)}}class Km extends jm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const w_=new Ym,C_=new Km,R_=new Ym(!0),P_=new Km(!0),fu=t=>t,mo=t=>Reflect.getPrototypeOf(t);function D_(t,e,n){return function(...i){const r=this.__v_raw,s=it(r),a=Rs(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,u=r[t](...i),c=n?fu:e?Vs:ei;return!e&&rn(s,"iterate",l?uu:jr),{next(){const{value:f,done:d}=u.next();return d?{value:f,done:d}:{value:o?[c(f[0]),c(f[1])]:c(f),done:d}},[Symbol.iterator](){return this}}}}function go(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function L_(t,e){const n={get(r){const s=this.__v_raw,a=it(s),o=it(r);t||(br(r,o)&&rn(a,"get",r),rn(a,"get",o));const{has:l}=mo(a),u=e?fu:t?Vs:ei;if(l.call(a,r))return u(s.get(r));if(l.call(a,o))return u(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&rn(it(r),"iterate",jr),r.size},has(r){const s=this.__v_raw,a=it(s),o=it(r);return t||(br(r,o)&&rn(a,"has",r),rn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=it(o),u=e?fu:t?Vs:ei;return!t&&rn(l,"iterate",jr),o.forEach((c,f)=>r.call(s,u(c),u(f),a))}};return $t(n,t?{add:go("add"),set:go("set"),delete:go("delete"),clear:go("clear")}:{add(r){!e&&!Dn(r)&&!Xi(r)&&(r=it(r));const s=it(this);return mo(s).has.call(s,r)||(s.add(r),Bi(s,"add",r,r)),this},set(r,s){!e&&!Dn(s)&&!Xi(s)&&(s=it(s));const a=it(this),{has:o,get:l}=mo(a);let u=o.call(a,r);u||(r=it(r),u=o.call(a,r));const c=l.call(a,r);return a.set(r,s),u?br(s,c)&&Bi(a,"set",r,s):Bi(a,"add",r,s),this},delete(r){const s=it(this),{has:a,get:o}=mo(s);let l=a.call(s,r);l||(r=it(r),l=a.call(s,r)),o&&o.call(s,r);const u=s.delete(r);return l&&Bi(s,"delete",r,void 0),u},clear(){const r=it(this),s=r.size!==0,a=r.clear();return s&&Bi(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=D_(r,t,e)}),n}function Ll(t,e){const n=L_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ht(n,r)&&r in i?n:i,r,s)}const I_={get:Ll(!1,!1)},N_={get:Ll(!1,!0)},U_={get:Ll(!0,!1)},O_={get:Ll(!0,!0)},Zm=new WeakMap,Jm=new WeakMap,Qm=new WeakMap,e0=new WeakMap;function F_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function B_(t){return t.__v_skip||!Object.isExtensible(t)?0:F_(s_(t))}function Zr(t){return Xi(t)?t:Il(t,!1,w_,I_,Zm)}function t0(t){return Il(t,!1,R_,N_,Jm)}function $i(t){return Il(t,!0,C_,U_,Qm)}function k_(t){return Il(t,!0,P_,O_,e0)}function Il(t,e,n,i,r){if(!St(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=B_(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function yr(t){return Xi(t)?yr(t.__v_raw):!!(t&&t.__v_isReactive)}function Xi(t){return!!(t&&t.__v_isReadonly)}function Dn(t){return!!(t&&t.__v_isShallow)}function Nl(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function V_(t){return!ht(t,"__v_skip")&&Object.isExtensible(t)&&Um(t,"__v_skip",!0),t}const ei=t=>St(t)?Zr(t):t,Vs=t=>St(t)?$i(t):t;function Vt(t){return t?t.__v_isRef===!0:!1}function qe(t){return n0(t,!1)}function Ye(t){return n0(t,!0)}function n0(t,e){return Vt(t)?t:new z_(t,e)}class z_{constructor(e,n){this.dep=new Pl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:ei(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Dn(e)||Xi(e);e=i?e:it(e),br(e,n)&&(this._rawValue=e,this._value=i?e:ei(e),this.dep.trigger())}}function Jn(t){return Vt(t)?t.value:t}function rt(t){return We(t)?t():Jn(t)}const H_={get:(t,e,n)=>e==="__v_raw"?t:Jn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Vt(r)&&!Vt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function i0(t){return yr(t)?t:new Proxy(t,H_)}class G_{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new Pl,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function r0(t){return new G_(t)}class W_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=it(e);let r=!0,s=e;if(!He(e)||!Tl(String(n)))do r=!Nl(s)||Dn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Jn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Vt(this._raw[this._key])){const n=this._object[this._key];if(Vt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return S_(this._raw,this._key)}}class $_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Zs(t,e,n){return Vt(t)?t:We(t)?new $_(t):St(t)&&arguments.length>1?X_(t,e,n):qe(t)}function X_(t,e,n){return new W_(t,e,n)}class q_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Pl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Da-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&At!==this)return zm(this,!0),!0}get value(){const e=this.dep.track();return Wm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function j_(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new q_(i,r,n)}const vo={},cl=new WeakMap;let kr;function Y_(t,e=!1,n=kr){if(n){let i=cl.get(n);i||cl.set(n,i=[]),i.push(t)}}function K_(t,e,n=wt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,u=S=>r?S:Dn(S)||r===!1||r===0?vr(S,1):vr(S);let c,f,d,h,v=!1,_=!1;if(Vt(t)?(f=()=>t.value,v=Dn(t)):yr(t)?(f=()=>u(t),v=!0):He(t)?(_=!0,v=t.some(S=>yr(S)||Dn(S)),f=()=>t.map(S=>{if(Vt(S))return S.value;if(yr(S))return u(S);if(We(S))return l?l(S,2):S()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){Gi();try{d()}finally{Wi()}}const S=kr;kr=c;try{return l?l(t,3,[h]):t(h)}finally{kr=S}}:f=gi,e&&r){const S=f,A=r===!0?1/0:r;f=()=>vr(S(),A)}const g=Bf(),m=()=>{c.stop(),g&&g.active&&Ff(g.effects,c)};if(s&&e){const S=e;e=(...A)=>{S(...A),m()}}let E=_?new Array(t.length).fill(vo):vo;const x=S=>{if(!(!(c.flags&1)||!c.dirty&&!S))if(e){const A=c.run();if(r||v||(_?A.some((P,D)=>br(P,E[D])):br(A,E))){d&&d();const P=kr;kr=c;try{const D=[A,E===vo?void 0:_&&E[0]===vo?[]:E,h];E=A,l?l(e,3,D):e(...D)}finally{kr=P}}}else c.run()};return o&&o(x),c=new km(f),c.scheduler=a?()=>a(x,!1):x,h=S=>Y_(S,!1,c),d=c.onStop=()=>{const S=cl.get(c);if(S){if(l)l(S,4);else for(const A of S)A();cl.delete(c)}},e?i?x(!0):E=c.run():a?a(x.bind(null,!0),!0):c.run(),m.pause=c.pause.bind(c),m.resume=c.resume.bind(c),m.stop=m,m}function vr(t,e=1/0,n){if(e<=0||!St(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Vt(t))vr(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)vr(t[i],e,n);else if(Dm(t)||Rs(t))t.forEach(i=>{vr(i,e,n)});else if(Nm(t)){for(const i in t)vr(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&vr(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ja(t,e,n,i){try{return i?t(...i):t()}catch(r){Ya(r,e,n)}}function ti(t,e,n,i){if(We(t)){const r=ja(t,e,n,i);return r&&Lm(r)&&r.catch(s=>{Ya(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(ti(t[s],e,n,i));return r}}function Ya(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||wt;if(e){let o=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const c=o.ec;if(c){for(let f=0;f<c.length;f++)if(c[f](t,l,u)===!1)return}o=o.parent}if(s){Gi(),ja(s,null,10,[t,l,u]),Wi();return}}Z_(t,n,r,i,a)}function Z_(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const fn=[];let fi=-1;const Ds=[];let pr=null,Ss=0;const s0=Promise.resolve();let ul=null;function Ei(t){const e=ul||s0;return t?e.then(this?t.bind(this):t):e}function J_(t){let e=fi+1,n=fn.length;for(;e<n;){const i=e+n>>>1,r=fn[i],s=Ia(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Hf(t){if(!(t.flags&1)){const e=Ia(t),n=fn[fn.length-1];!n||!(t.flags&2)&&e>=Ia(n)?fn.push(t):fn.splice(J_(e),0,t),t.flags|=1,a0()}}function a0(){ul||(ul=s0.then(o0))}function Q_(t){He(t)?Ds.push(...t):pr&&t.id===-1?pr.splice(Ss+1,0,t):t.flags&1||(Ds.push(t),t.flags|=1),a0()}function ih(t,e,n=fi+1){for(;n<fn.length;n++){const i=fn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;fn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function fl(t){if(Ds.length){const e=[...new Set(Ds)].sort((n,i)=>Ia(n)-Ia(i));if(Ds.length=0,pr){pr.push(...e);return}for(pr=e,Ss=0;Ss<pr.length;Ss++){const n=pr[Ss];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}pr=null,Ss=0}}const Ia=t=>t.id==null?t.flags&2?-1:1/0:t.id;function o0(t){try{for(fi=0;fi<fn.length;fi++){const e=fn[fi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ja(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;fi<fn.length;fi++){const e=fn[fi];e&&(e.flags&=-2)}fi=-1,fn.length=0,fl(),ul=null,(fn.length||Ds.length)&&o0()}}let Yn=null,l0=null;function dl(t){const e=Yn;return Yn=t,l0=t&&t.type.__scopeId||null,e}function c0(t,e=Yn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ml(-1);const s=dl(e);let a;try{a=t(...r)}finally{dl(s),i._d&&ml(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function di(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Gi(),ti(l,n,8,[t.el,o,t,e]),Wi())}}function Qn(t,e){if(Kt){let n=Kt.provides;const i=Kt.parent&&Kt.parent.provides;i===n&&(n=Kt.provides=Object.create(i)),n[t]=e}}function Rt(t,e,n=!1){const i=Qi();if(i||Yr){let r=Yr?Yr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}function u0(){return!!(Qi()||Yr)}const e2=Symbol.for("v-scx"),t2=()=>Rt(e2);function Gf(t,e){return Wf(t,null,e)}function Dt(t,e,n){return Wf(t,e,n)}function Wf(t,e,n=wt){const{immediate:i,deep:r,flush:s,once:a}=n,o=$t({},n),l=e&&i||!e&&s!=="post";let u;if(zs){if(s==="sync"){const h=t2();u=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=gi,h.resume=gi,h.pause=gi,h}}const c=Kt;o.call=(h,v,_)=>ti(h,c,v,_);let f=!1;s==="post"?o.scheduler=h=>{An(h,c&&c.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(h,v)=>{v?h():Hf(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,c&&(h.id=c.uid,h.i=c))};const d=K_(t,e,o);return zs&&(u?u.push(d):l&&d()),d}function n2(t,e,n){const i=this.proxy,r=kt(t)?t.includes(".")?f0(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const a=Za(this),o=Wf(r,s.bind(i),n);return a(),o}function f0(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const i2=Symbol("_vte"),d0=t=>t.__isTeleport,Fi=Symbol("_leaveCb"),_o=Symbol("_enterCb");function h0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return vt(()=>{t.isMounted=!0}),qf(()=>{t.isUnmounting=!0}),t}const Nn=[Function,Array],p0={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Nn,onEnter:Nn,onAfterEnter:Nn,onEnterCancelled:Nn,onBeforeLeave:Nn,onLeave:Nn,onAfterLeave:Nn,onLeaveCancelled:Nn,onBeforeAppear:Nn,onAppear:Nn,onAfterAppear:Nn,onAppearCancelled:Nn},m0=t=>{const e=t.subTree;return e.component?m0(e.component):e},r2={name:"BaseTransition",props:p0,setup(t,{slots:e}){const n=Qi(),i=h0();return()=>{const r=e.default&&$f(e.default(),!0);if(!r||!r.length)return;const s=g0(r),a=it(t),{mode:o}=a;if(i.isLeaving)return ac(s);const l=rh(s);if(!l)return ac(s);let u=Na(l,a,i,n,f=>u=f);l.type!==Yt&&Jr(l,u);let c=n.subTree&&rh(n.subTree);if(c&&c.type!==Yt&&!zr(c,l)&&m0(n).type!==Yt){let f=Na(c,a,i,n);if(Jr(c,f),o==="out-in"&&l.type!==Yt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,c=void 0},ac(s);o==="in-out"&&l.type!==Yt?f.delayLeave=(d,h,v)=>{const _=v0(i,c);_[String(c.key)]=c,d[Fi]=()=>{h(),d[Fi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function g0(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Yt){e=n;break}}return e}const s2=r2;function v0(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Na(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:E,onAppearCancelled:x}=e,S=String(t.key),A=v0(n,t),P=(y,M)=>{y&&ti(y,i,9,M)},D=(y,M)=>{const L=M[1];P(y,M),He(y)?y.every(U=>U.length<=1)&&L():y.length<=1&&L()},O={mode:a,persisted:o,beforeEnter(y){let M=l;if(!n.isMounted)if(s)M=g||l;else return;y[Fi]&&y[Fi](!0);const L=A[S];L&&zr(t,L)&&L.el[Fi]&&L.el[Fi](),P(M,[y])},enter(y){let M=u,L=c,U=f;if(!n.isMounted)if(s)M=m||u,L=E||c,U=x||f;else return;let k=!1;const z=y[_o]=X=>{k||(k=!0,X?P(U,[y]):P(L,[y]),O.delayedLeave&&O.delayedLeave(),y[_o]=void 0)};M?D(M,[y,z]):z()},leave(y,M){const L=String(t.key);if(y[_o]&&y[_o](!0),n.isUnmounting)return M();P(d,[y]);let U=!1;const k=y[Fi]=z=>{U||(U=!0,M(),z?P(_,[y]):P(v,[y]),y[Fi]=void 0,A[L]===t&&delete A[L])};A[L]=t,h?D(h,[y,k]):k()},clone(y){const M=Na(y,e,n,i,r);return r&&r(M),M}};return O}function ac(t){if(Ka(t))return t=Sr(t),t.children=null,t}function rh(t){if(!Ka(t))return d0(t.type)&&t.children?g0(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function Jr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Jr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function $f(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===dn?(a.patchFlag&128&&r++,i=i.concat($f(a.children,e,o))):(e||a.type!==Yt)&&i.push(o!=null?Sr(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function xe(t,e){return We(t)?$t({name:t.name},e,{setup:t}):t}function _0(){const t=Qi();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function Xf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const hl=new WeakMap;function Ls(t,e,n,i,r=!1){if(He(t)){t.forEach((v,_)=>Ls(v,e&&(He(e)?e[_]:e),n,i,r));return}if(Is(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ls(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Jf(i.component):i.el,a=r?null:s,{i:o,r:l}=t,u=e&&e.r,c=o.refs===wt?o.refs={}:o.refs,f=o.setupState,d=it(f),h=f===wt?Pm:v=>ht(d,v);if(u!=null&&u!==l){if(sh(e),kt(u))c[u]=null,h(u)&&(f[u]=null);else if(Vt(u)){u.value=null;const v=e;v.k&&(c[v.k]=null)}}if(We(l))ja(l,o,12,[a,c]);else{const v=kt(l),_=Vt(l);if(v||_){const g=()=>{if(t.f){const m=v?h(l)?f[l]:c[l]:l.value;if(r)He(m)&&Ff(m,s);else if(He(m))m.includes(s)||m.push(s);else if(v)c[l]=[s],h(l)&&(f[l]=c[l]);else{const E=[s];l.value=E,t.k&&(c[t.k]=E)}}else v?(c[l]=a,h(l)&&(f[l]=a)):_&&(l.value=a,t.k&&(c[t.k]=a))};if(a){const m=()=>{g(),hl.delete(t)};m.id=-1,hl.set(t,m),An(m,n)}else sh(t),g()}}}function sh(t){const e=hl.get(t);e&&(e.flags|=8,hl.delete(t))}let ah=!1;const ss=()=>{ah||(console.error("Hydration completed but contains mismatches."),ah=!0)},a2=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",o2=t=>t.namespaceURI.includes("MathML"),xo=t=>{if(t.nodeType===1){if(a2(t))return"svg";if(o2(t))return"mathml"}},As=t=>t.nodeType===8;function l2(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:u}}=t,c=(x,S)=>{if(!S.hasChildNodes()){n(null,x,S),fl(),S._vnode=x;return}f(S.firstChild,x,null,null,null),fl(),S._vnode=x},f=(x,S,A,P,D,O=!1)=>{O=O||!!S.dynamicChildren;const y=As(x)&&x.data==="[",M=()=>_(x,S,A,P,D,y),{type:L,ref:U,shapeFlag:k,patchFlag:z}=S;let X=x.nodeType;S.el=x,z===-2&&(O=!1,S.dynamicChildren=null);let B=null;switch(L){case Kr:X!==3?S.children===""?(l(S.el=r(""),a(x),x),B=x):B=M():(x.data!==S.children&&(ss(),x.data=S.children),B=s(x));break;case Yt:E(x)?(B=s(x),m(S.el=x.content.firstChild,x,A)):X!==8||y?B=M():B=s(x);break;case Ta:if(y&&(x=s(x),X=x.nodeType),X===1||X===3){B=x;const G=!S.children.length;for(let q=0;q<S.staticCount;q++)G&&(S.children+=B.nodeType===1?B.outerHTML:B.data),q===S.staticCount-1&&(S.anchor=B),B=s(B);return y?s(B):B}else M();break;case dn:y?B=v(x,S,A,P,D,O):B=M();break;default:if(k&1)(X!==1||S.type.toLowerCase()!==x.tagName.toLowerCase())&&!E(x)?B=M():B=d(x,S,A,P,D,O);else if(k&6){S.slotScopeIds=D;const G=a(x);if(y?B=g(x):As(x)&&x.data==="teleport start"?B=g(x,x.data,"teleport end"):B=s(x),e(S,G,null,A,P,xo(G),O),Is(S)&&!S.type.__asyncResolved){let q;y?(q=Lt(dn),q.anchor=B?B.previousSibling:G.lastChild):q=x.nodeType===3?$0(""):Lt("div"),q.el=x,S.component.subTree=q}}else k&64?X!==8?B=M():B=S.type.hydrate(x,S,A,P,D,O,t,h):k&128&&(B=S.type.hydrate(x,S,A,P,xo(a(x)),D,O,t,f))}return U!=null&&Ls(U,null,P,S),B},d=(x,S,A,P,D,O)=>{O=O||!!S.dynamicChildren;const{type:y,props:M,patchFlag:L,shapeFlag:U,dirs:k,transition:z}=S,X=y==="input"||y==="option";if(X||L!==-1){k&&di(S,null,A,"created");let B=!1;if(E(x)){B=N0(null,z)&&A&&A.vnode.props&&A.vnode.props.appear;const q=x.content.firstChild;if(B){const le=q.getAttribute("class");le&&(q.$cls=le),z.beforeEnter(q)}m(q,x,A),S.el=x=q}if(U&16&&!(M&&(M.innerHTML||M.textContent))){let q=h(x.firstChild,S,x,A,P,D,O);for(;q;){bo(x,1)||ss();const le=q;q=q.nextSibling,o(le)}}else if(U&8){let q=S.children;q[0]===`
`&&(x.tagName==="PRE"||x.tagName==="TEXTAREA")&&(q=q.slice(1));const{textContent:le}=x;le!==q&&le!==q.replace(/\r\n|\r/g,`
`)&&(bo(x,0)||ss(),x.textContent=S.children)}if(M){if(X||!O||L&48){const q=x.tagName.includes("-");for(const le in M)(X&&(le.endsWith("value")||le==="indeterminate")||Xa(le)&&!Ps(le)||le[0]==="."||q)&&i(x,le,null,M[le],void 0,A)}else if(M.onClick)i(x,"onClick",null,M.onClick,void 0,A);else if(L&4&&yr(M.style))for(const q in M.style)M.style[q]}let G;(G=M&&M.onVnodeBeforeMount)&&On(G,A,S),k&&di(S,null,A,"beforeMount"),((G=M&&M.onVnodeMounted)||k||B)&&k0(()=>{G&&On(G,A,S),B&&z.enter(x),k&&di(S,null,A,"mounted")},P)}return x.nextSibling},h=(x,S,A,P,D,O,y)=>{y=y||!!S.dynamicChildren;const M=S.children,L=M.length;for(let U=0;U<L;U++){const k=y?M[U]:M[U]=kn(M[U]),z=k.type===Kr;x?(z&&!y&&U+1<L&&kn(M[U+1]).type===Kr&&(l(r(x.data.slice(k.children.length)),A,s(x)),x.data=k.children),x=f(x,k,P,D,O,y)):z&&!k.children?l(k.el=r(""),A):(bo(A,1)||ss(),n(null,k,A,null,P,D,xo(A),O))}return x},v=(x,S,A,P,D,O)=>{const{slotScopeIds:y}=S;y&&(D=D?D.concat(y):y);const M=a(x),L=h(s(x),S,M,A,P,D,O);return L&&As(L)&&L.data==="]"?s(S.anchor=L):(ss(),l(S.anchor=u("]"),M,L),L)},_=(x,S,A,P,D,O)=>{if(bo(x.parentElement,1)||ss(),S.el=null,O){const L=g(x);for(;;){const U=s(x);if(U&&U!==L)o(U);else break}}const y=s(x),M=a(x);return o(x),n(null,S,M,y,A,P,xo(M),D),A&&(A.vnode.el=S.el,T0(A,S.el)),y},g=(x,S="[",A="]")=>{let P=0;for(;x;)if(x=s(x),x&&As(x)&&(x.data===S&&P++,x.data===A)){if(P===0)return s(x);P--}return x},m=(x,S,A)=>{const P=S.parentNode;P&&P.replaceChild(x,S);let D=A;for(;D;)D.vnode.el===S&&(D.vnode.el=D.subTree.el=x),D=D.parent},E=x=>x.nodeType===1&&x.tagName==="TEMPLATE";return[c,f]}const oh="data-allow-mismatch",c2={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function bo(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(oh);)t=t.parentElement;const n=t&&t.getAttribute(oh);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(c2[e])}}wl().requestIdleCallback;wl().cancelIdleCallback;function u2(t,e){if(As(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(As(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Is=t=>!!t.type.__asyncLoader;function f2(t){We(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:a,suspensible:o=!0,onError:l}=t;let u=null,c,f=0;const d=()=>(f++,u=null,h()),h=()=>{let v;return u||(v=u=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,m)=>{l(_,()=>g(d()),()=>m(_),f+1)});throw _}).then(_=>v!==u&&u?u:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),c=_,_)))};return xe({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(v,_,g){let m=!1;(_.bu||(_.bu=[])).push(()=>m=!0);const E=()=>{m||g()},x=s?()=>{const S=s(E,A=>u2(v,A));S&&(_.bum||(_.bum=[])).push(S)}:E;c?x():h().then(()=>!_.isUnmounted&&x())},get __asyncResolved(){return c},setup(){const v=Kt;if(Xf(v),c)return()=>yo(c,v);const _=x=>{u=null,Ya(x,v,13,!i)};if(o&&v.suspense||zs)return h().then(x=>()=>yo(x,v)).catch(x=>(_(x),()=>i?Lt(i,{error:x}):null));const g=qe(!1),m=qe(),E=qe(!!r);return r&&setTimeout(()=>{E.value=!1},r),a!=null&&setTimeout(()=>{if(!g.value&&!m.value){const x=new Error(`Async component timed out after ${a}ms.`);_(x),m.value=x}},a),h().then(()=>{g.value=!0,v.parent&&Ka(v.parent.vnode)&&v.parent.update()}).catch(x=>{_(x),m.value=x}),()=>{if(g.value&&c)return yo(c,v);if(m.value&&i)return Lt(i,{error:m.value});if(n&&!E.value)return yo(n,v)}}})}function yo(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,a=Lt(t,i,r);return a.ref=n,a.ce=s,delete e.vnode.ce,a}const Ka=t=>t.type.__isKeepAlive;function d2(t,e){x0(t,"a",e)}function h2(t,e){x0(t,"da",e)}function x0(t,e,n=Kt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Ul(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ka(r.parent.vnode)&&p2(i,e,n,r),r=r.parent}}function p2(t,e,n,i){const r=Ul(e,t,i,!0);Ji(()=>{Ff(i[e],r)},n)}function Ul(t,e,n=Kt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{Gi();const o=Za(n),l=ti(e,n,t,a);return o(),Wi(),l});return i?r.unshift(s):r.push(s),s}}const Zi=t=>(e,n=Kt)=>{(!zs||t==="sp")&&Ul(t,(...i)=>e(...i),n)},m2=Zi("bm"),vt=Zi("m"),g2=Zi("bu"),b0=Zi("u"),qf=Zi("bum"),Ji=Zi("um"),v2=Zi("sp"),_2=Zi("rtg"),x2=Zi("rtc");function b2(t,e=Kt){Ul("ec",t,e)}const y2="components";function Pt(t,e){return E2(y2,t,!0,e)||t}const S2=Symbol.for("v-ndc");function E2(t,e,n=!0,i=!1){const r=Yn||Kt;if(r){const s=r.type;{const o=r3(s,!1);if(o&&(o===e||o===xn(e)||o===qa(xn(e))))return s}const a=lh(r[t]||s[t],e)||lh(r.appContext[t],e);return!a&&i?s:a}}function lh(t,e){return t&&(t[e]||t[xn(e)]||t[qa(xn(e))])}function v8(t,e,n,i){let r;const s=n,a=He(t);if(a||kt(t)){const o=a&&yr(t);let l=!1,u=!1;o&&(l=!Dn(t),u=Xi(t),t=Dl(t)),r=new Array(t.length);for(let c=0,f=t.length;c<f;c++)r[c]=e(l?u?Vs(ei(t[c])):ei(t[c]):t[c],c,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(St(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,u=o.length;l<u;l++){const c=o[l];r[l]=e(t[c],c,l,s)}}else r=[];return r}const du=t=>t?X0(t)?Jf(t):du(t.parent):null,Ma=$t(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>du(t.parent),$root:t=>du(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>S0(t),$forceUpdate:t=>t.f||(t.f=()=>{Hf(t.update)}),$nextTick:t=>t.n||(t.n=Ei.bind(t.proxy)),$watch:t=>n2.bind(t)}),oc=(t,e)=>t!==wt&&!t.__isScriptSetup&&ht(t,e),M2={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(oc(i,e))return a[e]=1,i[e];if(r!==wt&&ht(r,e))return a[e]=2,r[e];if(ht(s,e))return a[e]=3,s[e];if(n!==wt&&ht(n,e))return a[e]=4,n[e];hu&&(a[e]=0)}}const u=Ma[e];let c,f;if(u)return e==="$attrs"&&rn(t.attrs,"get",""),u(t);if((c=o.__cssModules)&&(c=c[e]))return c;if(n!==wt&&ht(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,ht(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return oc(r,e)?(r[e]=n,!0):i!==wt&&ht(i,e)?(i[e]=n,!0):ht(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==wt&&o[0]!=="$"&&ht(t,o)||oc(e,o)||ht(s,o)||ht(i,o)||ht(Ma,o)||ht(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ht(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ch(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let hu=!0;function T2(t){const e=S0(t),n=t.proxy,i=t.ctx;hu=!1,e.beforeCreate&&uh(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:u,created:c,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:E,destroyed:x,unmounted:S,render:A,renderTracked:P,renderTriggered:D,errorCaptured:O,serverPrefetch:y,expose:M,inheritAttrs:L,components:U,directives:k,filters:z}=e;if(u&&A2(u,i,null),a)for(const G in a){const q=a[G];We(q)&&(i[G]=q.bind(n))}if(r){const G=r.call(n,n);St(G)&&(t.data=Zr(G))}if(hu=!0,s)for(const G in s){const q=s[G],le=We(q)?q.bind(n,n):We(q.get)?q.get.bind(n,n):gi,ge=!We(q)&&We(q.set)?q.set.bind(n):gi,ye=$({get:le,set:ge});Object.defineProperty(i,G,{enumerable:!0,configurable:!0,get:()=>ye.value,set:Oe=>ye.value=Oe})}if(o)for(const G in o)y0(o[G],i,n,G);if(l){const G=We(l)?l.call(n):l;Reflect.ownKeys(G).forEach(q=>{Qn(q,G[q])})}c&&uh(c,t,"c");function B(G,q){He(q)?q.forEach(le=>G(le.bind(n))):q&&G(q.bind(n))}if(B(m2,f),B(vt,d),B(g2,h),B(b0,v),B(d2,_),B(h2,g),B(b2,O),B(x2,P),B(_2,D),B(qf,E),B(Ji,S),B(v2,y),He(M))if(M.length){const G=t.exposed||(t.exposed={});M.forEach(q=>{Object.defineProperty(G,q,{get:()=>n[q],set:le=>n[q]=le,enumerable:!0})})}else t.exposed||(t.exposed={});A&&t.render===gi&&(t.render=A),L!=null&&(t.inheritAttrs=L),U&&(t.components=U),k&&(t.directives=k),y&&Xf(t)}function A2(t,e,n=gi){He(t)&&(t=pu(t));for(const i in t){const r=t[i];let s;St(r)?"default"in r?s=Rt(r.from||i,r.default,!0):s=Rt(r.from||i):s=Rt(r),Vt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function uh(t,e,n){ti(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function y0(t,e,n,i){let r=i.includes(".")?f0(n,i):()=>n[i];if(kt(t)){const s=e[t];We(s)&&Dt(r,s)}else if(We(t))Dt(r,t.bind(n));else if(St(t))if(He(t))t.forEach(s=>y0(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&Dt(r,s,t)}}function S0(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(u=>pl(l,u,a,!0)),pl(l,e,a)),St(e)&&s.set(e,l),l}function pl(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&pl(t,s,n,!0),r&&r.forEach(a=>pl(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=w2[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const w2={data:fh,props:dh,emits:dh,methods:xa,computed:xa,beforeCreate:ln,created:ln,beforeMount:ln,mounted:ln,beforeUpdate:ln,updated:ln,beforeDestroy:ln,beforeUnmount:ln,destroyed:ln,unmounted:ln,activated:ln,deactivated:ln,errorCaptured:ln,serverPrefetch:ln,components:xa,directives:xa,watch:R2,provide:fh,inject:C2};function fh(t,e){return e?t?function(){return $t(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function C2(t,e){return xa(pu(t),pu(e))}function pu(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ln(t,e){return t?[...new Set([].concat(t,e))]:e}function xa(t,e){return t?$t(Object.create(null),t,e):e}function dh(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:$t(Object.create(null),ch(t),ch(e??{})):e}function R2(t,e){if(!t)return e;if(!e)return t;const n=$t(Object.create(null),t);for(const i in e)n[i]=ln(t[i],e[i]);return n}function E0(){return{app:null,config:{isNativeTag:Pm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let P2=0;function D2(t,e){return function(i,r=null){We(i)||(i=$t({},i)),r!=null&&!St(r)&&(r=null);const s=E0(),a=new WeakSet,o=[];let l=!1;const u=s.app={_uid:P2++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:a3,get config(){return s.config},set config(c){},use(c,...f){return a.has(c)||(c&&We(c.install)?(a.add(c),c.install(u,...f)):We(c)&&(a.add(c),c(u,...f))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,f){return f?(s.components[c]=f,u):s.components[c]},directive(c,f){return f?(s.directives[c]=f,u):s.directives[c]},mount(c,f,d){if(!l){const h=u._ceVNode||Lt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,c):t(h,c,d),l=!0,u._container=c,c.__vue_app__=u,Jf(h.component)}},onUnmount(c){o.push(c)},unmount(){l&&(ti(o,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(c,f){return s.provides[c]=f,u},runWithContext(c){const f=Yr;Yr=u;try{return c()}finally{Yr=f}}};return u}}let Yr=null;const L2=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xn(e)}Modifiers`]||t[`${es(e)}Modifiers`];function I2(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||wt;let r=n;const s=e.startsWith("update:"),a=s&&L2(i,e.slice(7));a&&(a.trim&&(r=n.map(c=>kt(c)?c.trim():c)),a.number&&(r=n.map(l_)));let o,l=i[o=ec(e)]||i[o=ec(xn(e))];!l&&s&&(l=i[o=ec(es(e))]),l&&ti(l,t,6,r);const u=i[o+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,ti(u,t,6,r)}}const N2=new WeakMap;function M0(t,e,n=!1){const i=n?N2:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!We(t)){const l=u=>{const c=M0(u,e,!0);c&&(o=!0,$t(a,c))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(St(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>a[l]=null):$t(a,s),St(t)&&i.set(t,a),a)}function Ol(t,e){return!t||!Xa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ht(t,e[0].toLowerCase()+e.slice(1))||ht(t,es(e))||ht(t,e))}function lc(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:u,renderCache:c,props:f,data:d,setupState:h,ctx:v,inheritAttrs:_}=t,g=dl(t);let m,E;try{if(n.shapeFlag&4){const S=r||i,A=S;m=kn(u.call(A,S,c,f,h,d,v)),E=o}else{const S=e;m=kn(S.length>1?S(f,{attrs:o,slots:a,emit:l}):S(f,null)),E=e.props?o:U2(o)}}catch(S){Aa.length=0,Ya(S,t,1),m=Lt(Yt)}let x=m;if(E&&_!==!1){const S=Object.keys(E),{shapeFlag:A}=x;S.length&&A&7&&(s&&S.some(Of)&&(E=O2(E,s)),x=Sr(x,E,!1,!0))}return n.dirs&&(x=Sr(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(n.dirs):n.dirs),n.transition&&Jr(x,n.transition),m=x,dl(g),m}const U2=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xa(n))&&((e||(e={}))[n]=t[n]);return e},O2=(t,e)=>{const n={};for(const i in t)(!Of(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function F2(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?hh(i,a,u):!!a;if(l&8){const c=e.dynamicProps;for(let f=0;f<c.length;f++){const d=c[f];if(a[d]!==i[d]&&!Ol(u,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?hh(i,a,u):!0:!!a;return!1}function hh(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Ol(n,s))return!0}return!1}function T0({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const A0={},w0=()=>Object.create(A0),C0=t=>Object.getPrototypeOf(t)===A0;function B2(t,e,n,i=!1){const r={},s=w0();t.propsDefaults=Object.create(null),R0(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:t0(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function k2(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=it(r),[l]=t.propsOptions;let u=!1;if((i||a>0)&&!(a&16)){if(a&8){const c=t.vnode.dynamicProps;for(let f=0;f<c.length;f++){let d=c[f];if(Ol(t.emitsOptions,d))continue;const h=e[d];if(l)if(ht(s,d))h!==s[d]&&(s[d]=h,u=!0);else{const v=xn(d);r[v]=mu(l,o,v,h,t,!1)}else h!==s[d]&&(s[d]=h,u=!0)}}}else{R0(t,e,r,s)&&(u=!0);let c;for(const f in o)(!e||!ht(e,f)&&((c=es(f))===f||!ht(e,c)))&&(l?n&&(n[f]!==void 0||n[c]!==void 0)&&(r[f]=mu(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!ht(e,f))&&(delete s[f],u=!0)}u&&Bi(t.attrs,"set","")}function R0(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(Ps(l))continue;const u=e[l];let c;r&&ht(r,c=xn(l))?!s||!s.includes(c)?n[c]=u:(o||(o={}))[c]=u:Ol(t.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,a=!0)}if(s){const l=it(n),u=o||wt;for(let c=0;c<s.length;c++){const f=s[c];n[f]=mu(r,l,f,u[f],t,!ht(u,f))}}return a}function mu(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=ht(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Za(r);i=u[n]=l.call(null,e),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===es(n))&&(i=!0))}return i}const V2=new WeakMap;function P0(t,e,n=!1){const i=n?V2:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!We(t)){const c=f=>{l=!0;const[d,h]=P0(f,e,!0);$t(a,d),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}if(!s&&!l)return St(t)&&i.set(t,Cs),Cs;if(He(s))for(let c=0;c<s.length;c++){const f=xn(s[c]);ph(f)&&(a[f]=wt)}else if(s)for(const c in s){const f=xn(c);if(ph(f)){const d=s[c],h=a[f]=He(d)||We(d)?{type:d}:$t({},d),v=h.type;let _=!1,g=!0;if(He(v))for(let m=0;m<v.length;++m){const E=v[m],x=We(E)&&E.name;if(x==="Boolean"){_=!0;break}else x==="String"&&(g=!1)}else _=We(v)&&v.name==="Boolean";h[0]=_,h[1]=g,(_||ht(h,"default"))&&o.push(f)}}const u=[a,o];return St(t)&&i.set(t,u),u}function ph(t){return t[0]!=="$"&&!Ps(t)}const jf=t=>t==="_"||t==="_ctx"||t==="$stable",Yf=t=>He(t)?t.map(kn):[kn(t)],z2=(t,e,n)=>{if(e._n)return e;const i=c0((...r)=>Yf(e(...r)),n);return i._c=!1,i},D0=(t,e,n)=>{const i=t._ctx;for(const r in t){if(jf(r))continue;const s=t[r];if(We(s))e[r]=z2(r,s,i);else if(s!=null){const a=Yf(s);e[r]=()=>a}}},L0=(t,e)=>{const n=Yf(e);t.slots.default=()=>n},I0=(t,e,n)=>{for(const i in e)(n||!jf(i))&&(t[i]=e[i])},H2=(t,e,n)=>{const i=t.slots=w0();if(t.vnode.shapeFlag&32){const r=e._;r?(I0(i,e,n),n&&Um(i,"_",r,!0)):D0(e,i)}else e&&L0(t,e)},G2=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=wt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:I0(r,e,n):(s=!e.$stable,D0(e,r)),a=e}else e&&(L0(t,e),a={default:1});if(s)for(const o in r)!jf(o)&&a[o]==null&&delete r[o]},An=k0;function W2(t){return $2(t,l2)}function $2(t,e){const n=wl();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:u,setElementText:c,parentNode:f,nextSibling:d,setScopeId:h=gi,insertStaticContent:v}=t,_=(R,I,W,ee=null,ie=null,C=null,he=void 0,ce=null,ue=!!I.dynamicChildren)=>{if(R===I)return;R&&!zr(R,I)&&(ee=F(R),Oe(R,ie,C,!0),R=null),I.patchFlag===-2&&(ue=!1,I.dynamicChildren=null);const{type:K,ref:w,shapeFlag:b}=I;switch(K){case Kr:g(R,I,W,ee);break;case Yt:m(R,I,W,ee);break;case Ta:R==null&&E(I,W,ee,he);break;case dn:U(R,I,W,ee,ie,C,he,ce,ue);break;default:b&1?A(R,I,W,ee,ie,C,he,ce,ue):b&6?k(R,I,W,ee,ie,C,he,ce,ue):(b&64||b&128)&&K.process(R,I,W,ee,ie,C,he,ce,ue,ae)}w!=null&&ie?Ls(w,R&&R.ref,C,I||R,!I):w==null&&R&&R.ref!=null&&Ls(R.ref,null,C,R,!0)},g=(R,I,W,ee)=>{if(R==null)i(I.el=o(I.children),W,ee);else{const ie=I.el=R.el;I.children!==R.children&&u(ie,I.children)}},m=(R,I,W,ee)=>{R==null?i(I.el=l(I.children||""),W,ee):I.el=R.el},E=(R,I,W,ee)=>{[R.el,R.anchor]=v(R.children,I,W,ee,R.el,R.anchor)},x=({el:R,anchor:I},W,ee)=>{let ie;for(;R&&R!==I;)ie=d(R),i(R,W,ee),R=ie;i(I,W,ee)},S=({el:R,anchor:I})=>{let W;for(;R&&R!==I;)W=d(R),r(R),R=W;r(I)},A=(R,I,W,ee,ie,C,he,ce,ue)=>{if(I.type==="svg"?he="svg":I.type==="math"&&(he="mathml"),R==null)P(I,W,ee,ie,C,he,ce,ue);else{const K=R.el&&R.el._isVueCE?R.el:null;try{K&&K._beginPatch(),y(R,I,ie,C,he,ce,ue)}finally{K&&K._endPatch()}}},P=(R,I,W,ee,ie,C,he,ce)=>{let ue,K;const{props:w,shapeFlag:b,transition:N,dirs:j}=R;if(ue=R.el=a(R.type,C,w&&w.is,w),b&8?c(ue,R.children):b&16&&O(R.children,ue,null,ee,ie,cc(R,C),he,ce),j&&di(R,null,ee,"created"),D(ue,R,R.scopeId,he,ee),w){for(const Z in w)Z!=="value"&&!Ps(Z)&&s(ue,Z,null,w[Z],C,ee);"value"in w&&s(ue,"value",null,w.value,C),(K=w.onVnodeBeforeMount)&&On(K,ee,R)}j&&di(R,null,ee,"beforeMount");const te=N0(ie,N);te&&N.beforeEnter(ue),i(ue,I,W),((K=w&&w.onVnodeMounted)||te||j)&&An(()=>{K&&On(K,ee,R),te&&N.enter(ue),j&&di(R,null,ee,"mounted")},ie)},D=(R,I,W,ee,ie)=>{if(W&&h(R,W),ee)for(let C=0;C<ee.length;C++)h(R,ee[C]);if(ie){let C=ie.subTree;if(I===C||B0(C.type)&&(C.ssContent===I||C.ssFallback===I)){const he=ie.vnode;D(R,he,he.scopeId,he.slotScopeIds,ie.parent)}}},O=(R,I,W,ee,ie,C,he,ce,ue=0)=>{for(let K=ue;K<R.length;K++){const w=R[K]=ce?mr(R[K]):kn(R[K]);_(null,w,I,W,ee,ie,C,he,ce)}},y=(R,I,W,ee,ie,C,he)=>{const ce=I.el=R.el;let{patchFlag:ue,dynamicChildren:K,dirs:w}=I;ue|=R.patchFlag&16;const b=R.props||wt,N=I.props||wt;let j;if(W&&Pr(W,!1),(j=N.onVnodeBeforeUpdate)&&On(j,W,I,R),w&&di(I,R,W,"beforeUpdate"),W&&Pr(W,!0),(b.innerHTML&&N.innerHTML==null||b.textContent&&N.textContent==null)&&c(ce,""),K?M(R.dynamicChildren,K,ce,W,ee,cc(I,ie),C):he||q(R,I,ce,null,W,ee,cc(I,ie),C,!1),ue>0){if(ue&16)L(ce,b,N,W,ie);else if(ue&2&&b.class!==N.class&&s(ce,"class",null,N.class,ie),ue&4&&s(ce,"style",b.style,N.style,ie),ue&8){const te=I.dynamicProps;for(let Z=0;Z<te.length;Z++){const _e=te[Z],pe=b[_e],Me=N[_e];(Me!==pe||_e==="value")&&s(ce,_e,pe,Me,ie,W)}}ue&1&&R.children!==I.children&&c(ce,I.children)}else!he&&K==null&&L(ce,b,N,W,ie);((j=N.onVnodeUpdated)||w)&&An(()=>{j&&On(j,W,I,R),w&&di(I,R,W,"updated")},ee)},M=(R,I,W,ee,ie,C,he)=>{for(let ce=0;ce<I.length;ce++){const ue=R[ce],K=I[ce],w=ue.el&&(ue.type===dn||!zr(ue,K)||ue.shapeFlag&198)?f(ue.el):W;_(ue,K,w,null,ee,ie,C,he,!0)}},L=(R,I,W,ee,ie)=>{if(I!==W){if(I!==wt)for(const C in I)!Ps(C)&&!(C in W)&&s(R,C,I[C],null,ie,ee);for(const C in W){if(Ps(C))continue;const he=W[C],ce=I[C];he!==ce&&C!=="value"&&s(R,C,ce,he,ie,ee)}"value"in W&&s(R,"value",I.value,W.value,ie)}},U=(R,I,W,ee,ie,C,he,ce,ue)=>{const K=I.el=R?R.el:o(""),w=I.anchor=R?R.anchor:o("");let{patchFlag:b,dynamicChildren:N,slotScopeIds:j}=I;j&&(ce=ce?ce.concat(j):j),R==null?(i(K,W,ee),i(w,W,ee),O(I.children||[],W,w,ie,C,he,ce,ue)):b>0&&b&64&&N&&R.dynamicChildren&&R.dynamicChildren.length===N.length?(M(R.dynamicChildren,N,W,ie,C,he,ce),(I.key!=null||ie&&I===ie.subTree)&&U0(R,I,!0)):q(R,I,W,w,ie,C,he,ce,ue)},k=(R,I,W,ee,ie,C,he,ce,ue)=>{I.slotScopeIds=ce,R==null?I.shapeFlag&512?ie.ctx.activate(I,W,ee,he,ue):z(I,W,ee,ie,C,he,ue):X(R,I,ue)},z=(R,I,W,ee,ie,C,he)=>{const ce=R.component=Q2(R,ee,ie);if(Ka(R)&&(ce.ctx.renderer=ae),e3(ce,!1,he),ce.asyncDep){if(ie&&ie.registerDep(ce,B,he),!R.el){const ue=ce.subTree=Lt(Yt);m(null,ue,I,W),R.placeholder=ue.el}}else B(ce,R,I,W,ie,C,he)},X=(R,I,W)=>{const ee=I.component=R.component;if(F2(R,I,W))if(ee.asyncDep&&!ee.asyncResolved){G(ee,I,W);return}else ee.next=I,ee.update();else I.el=R.el,ee.vnode=I},B=(R,I,W,ee,ie,C,he)=>{const ce=()=>{if(R.isMounted){let{next:b,bu:N,u:j,parent:te,vnode:Z}=R;{const de=O0(R);if(de){b&&(b.el=Z.el,G(R,b,he)),de.asyncDep.then(()=>{R.isUnmounted||ce()});return}}let _e=b,pe;Pr(R,!1),b?(b.el=Z.el,G(R,b,he)):b=Z,N&&tc(N),(pe=b.props&&b.props.onVnodeBeforeUpdate)&&On(pe,te,b,Z),Pr(R,!0);const Me=lc(R),Ue=R.subTree;R.subTree=Me,_(Ue,Me,f(Ue.el),F(Ue),R,ie,C),b.el=Me.el,_e===null&&T0(R,Me.el),j&&An(j,ie),(pe=b.props&&b.props.onVnodeUpdated)&&An(()=>On(pe,te,b,Z),ie)}else{let b;const{el:N,props:j}=I,{bm:te,m:Z,parent:_e,root:pe,type:Me}=R,Ue=Is(I);if(Pr(R,!1),te&&tc(te),!Ue&&(b=j&&j.onVnodeBeforeMount)&&On(b,_e,I),Pr(R,!0),N&&Ge){const de=()=>{R.subTree=lc(R),Ge(N,R.subTree,R,ie,null)};Ue&&Me.__asyncHydrate?Me.__asyncHydrate(N,R,de):de()}else{pe.ce&&pe.ce._def.shadowRoot!==!1&&pe.ce._injectChildStyle(Me);const de=R.subTree=lc(R);_(null,de,W,ee,R,ie,C),I.el=de.el}if(Z&&An(Z,ie),!Ue&&(b=j&&j.onVnodeMounted)){const de=I;An(()=>On(b,_e,de),ie)}(I.shapeFlag&256||_e&&Is(_e.vnode)&&_e.vnode.shapeFlag&256)&&R.a&&An(R.a,ie),R.isMounted=!0,I=W=ee=null}};R.scope.on();const ue=R.effect=new km(ce);R.scope.off();const K=R.update=ue.run.bind(ue),w=R.job=ue.runIfDirty.bind(ue);w.i=R,w.id=R.uid,ue.scheduler=()=>Hf(w),Pr(R,!0),K()},G=(R,I,W)=>{I.component=R;const ee=R.vnode.props;R.vnode=I,R.next=null,k2(R,I.props,ee,W),G2(R,I.children,W),Gi(),ih(R),Wi()},q=(R,I,W,ee,ie,C,he,ce,ue=!1)=>{const K=R&&R.children,w=R?R.shapeFlag:0,b=I.children,{patchFlag:N,shapeFlag:j}=I;if(N>0){if(N&128){ge(K,b,W,ee,ie,C,he,ce,ue);return}else if(N&256){le(K,b,W,ee,ie,C,he,ce,ue);return}}j&8?(w&16&&se(K,ie,C),b!==K&&c(W,b)):w&16?j&16?ge(K,b,W,ee,ie,C,he,ce,ue):se(K,ie,C,!0):(w&8&&c(W,""),j&16&&O(b,W,ee,ie,C,he,ce,ue))},le=(R,I,W,ee,ie,C,he,ce,ue)=>{R=R||Cs,I=I||Cs;const K=R.length,w=I.length,b=Math.min(K,w);let N;for(N=0;N<b;N++){const j=I[N]=ue?mr(I[N]):kn(I[N]);_(R[N],j,W,null,ie,C,he,ce,ue)}K>w?se(R,ie,C,!0,!1,b):O(I,W,ee,ie,C,he,ce,ue,b)},ge=(R,I,W,ee,ie,C,he,ce,ue)=>{let K=0;const w=I.length;let b=R.length-1,N=w-1;for(;K<=b&&K<=N;){const j=R[K],te=I[K]=ue?mr(I[K]):kn(I[K]);if(zr(j,te))_(j,te,W,null,ie,C,he,ce,ue);else break;K++}for(;K<=b&&K<=N;){const j=R[b],te=I[N]=ue?mr(I[N]):kn(I[N]);if(zr(j,te))_(j,te,W,null,ie,C,he,ce,ue);else break;b--,N--}if(K>b){if(K<=N){const j=N+1,te=j<w?I[j].el:ee;for(;K<=N;)_(null,I[K]=ue?mr(I[K]):kn(I[K]),W,te,ie,C,he,ce,ue),K++}}else if(K>N)for(;K<=b;)Oe(R[K],ie,C,!0),K++;else{const j=K,te=K,Z=new Map;for(K=te;K<=N;K++){const Ce=I[K]=ue?mr(I[K]):kn(I[K]);Ce.key!=null&&Z.set(Ce.key,K)}let _e,pe=0;const Me=N-te+1;let Ue=!1,de=0;const Se=new Array(Me);for(K=0;K<Me;K++)Se[K]=0;for(K=j;K<=b;K++){const Ce=R[K];if(pe>=Me){Oe(Ce,ie,C,!0);continue}let ve;if(Ce.key!=null)ve=Z.get(Ce.key);else for(_e=te;_e<=N;_e++)if(Se[_e-te]===0&&zr(Ce,I[_e])){ve=_e;break}ve===void 0?Oe(Ce,ie,C,!0):(Se[ve-te]=K+1,ve>=de?de=ve:Ue=!0,_(Ce,I[ve],W,null,ie,C,he,ce,ue),pe++)}const Ie=Ue?X2(Se):Cs;for(_e=Ie.length-1,K=Me-1;K>=0;K--){const Ce=te+K,ve=I[Ce],Ke=I[Ce+1],V=Ce+1<w?Ke.el||F0(Ke):ee;Se[K]===0?_(null,ve,W,V,ie,C,he,ce,ue):Ue&&(_e<0||K!==Ie[_e]?ye(ve,W,V,2):_e--)}}},ye=(R,I,W,ee,ie=null)=>{const{el:C,type:he,transition:ce,children:ue,shapeFlag:K}=R;if(K&6){ye(R.component.subTree,I,W,ee);return}if(K&128){R.suspense.move(I,W,ee);return}if(K&64){he.move(R,I,W,ae);return}if(he===dn){i(C,I,W);for(let b=0;b<ue.length;b++)ye(ue[b],I,W,ee);i(R.anchor,I,W);return}if(he===Ta){x(R,I,W);return}if(ee!==2&&K&1&&ce)if(ee===0)ce.beforeEnter(C),i(C,I,W),An(()=>ce.enter(C),ie);else{const{leave:b,delayLeave:N,afterLeave:j}=ce,te=()=>{R.ctx.isUnmounted?r(C):i(C,I,W)},Z=()=>{C._isLeaving&&C[Fi](!0),b(C,()=>{te(),j&&j()})};N?N(C,te,Z):Z()}else i(C,I,W)},Oe=(R,I,W,ee=!1,ie=!1)=>{const{type:C,props:he,ref:ce,children:ue,dynamicChildren:K,shapeFlag:w,patchFlag:b,dirs:N,cacheIndex:j}=R;if(b===-2&&(ie=!1),ce!=null&&(Gi(),Ls(ce,null,W,R,!0),Wi()),j!=null&&(I.renderCache[j]=void 0),w&256){I.ctx.deactivate(R);return}const te=w&1&&N,Z=!Is(R);let _e;if(Z&&(_e=he&&he.onVnodeBeforeUnmount)&&On(_e,I,R),w&6)et(R.component,W,ee);else{if(w&128){R.suspense.unmount(W,ee);return}te&&di(R,null,I,"beforeUnmount"),w&64?R.type.remove(R,I,W,ae,ee):K&&!K.hasOnce&&(C!==dn||b>0&&b&64)?se(K,I,W,!1,!0):(C===dn&&b&384||!ie&&w&16)&&se(ue,I,W),ee&&Be(R)}(Z&&(_e=he&&he.onVnodeUnmounted)||te)&&An(()=>{_e&&On(_e,I,R),te&&di(R,null,I,"unmounted")},W)},Be=R=>{const{type:I,el:W,anchor:ee,transition:ie}=R;if(I===dn){at(W,ee);return}if(I===Ta){S(R);return}const C=()=>{r(W),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(R.shapeFlag&1&&ie&&!ie.persisted){const{leave:he,delayLeave:ce}=ie,ue=()=>he(W,C);ce?ce(R.el,C,ue):ue()}else C()},at=(R,I)=>{let W;for(;R!==I;)W=d(R),r(R),R=W;r(I)},et=(R,I,W)=>{const{bum:ee,scope:ie,job:C,subTree:he,um:ce,m:ue,a:K}=R;mh(ue),mh(K),ee&&tc(ee),ie.stop(),C&&(C.flags|=8,Oe(he,R,I,W)),ce&&An(ce,I),An(()=>{R.isUnmounted=!0},I)},se=(R,I,W,ee=!1,ie=!1,C=0)=>{for(let he=C;he<R.length;he++)Oe(R[he],I,W,ee,ie)},F=R=>{if(R.shapeFlag&6)return F(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const I=d(R.anchor||R.el),W=I&&I[i2];return W?d(W):I};let re=!1;const oe=(R,I,W)=>{let ee;R==null?I._vnode&&(Oe(I._vnode,null,null,!0),ee=I._vnode.component):_(I._vnode||null,R,I,null,null,null,W),I._vnode=R,re||(re=!0,ih(ee),fl(),re=!1)},ae={p:_,um:Oe,m:ye,r:Be,mt:z,mc:O,pc:q,pbc:M,n:F,o:t};let we,Ge;return e&&([we,Ge]=e(ae)),{render:oe,hydrate:we,createApp:D2(oe,we)}}function cc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function N0(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function U0(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=mr(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&U0(a,o)),o.type===Kr&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(t.type===dn?1:0)),o.type===Yt&&!o.el&&(o.el=a.el)}}function X2(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const u=t[i];if(u!==0){if(r=n[n.length-1],t[r]<u){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<u?s=o+1:a=o;u<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function O0(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:O0(e)}function mh(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function F0(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?F0(e.subTree):null}const B0=t=>t.__isSuspense;function k0(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Q_(t)}const dn=Symbol.for("v-fgt"),Kr=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Ta=Symbol.for("v-stc"),Aa=[];let Rn=null;function Kf(t=!1){Aa.push(Rn=t?null:[])}function q2(){Aa.pop(),Rn=Aa[Aa.length-1]||null}let Ua=1;function ml(t,e=!1){Ua+=t,t<0&&Rn&&e&&(Rn.hasOnce=!0)}function V0(t){return t.dynamicChildren=Ua>0?Rn||Cs:null,q2(),Ua>0&&Rn&&Rn.push(t),t}function j2(t,e,n,i,r,s){return V0(G0(t,e,n,i,r,s,!0))}function z0(t,e,n,i,r){return V0(Lt(t,e,n,i,r,!0))}function gl(t){return t?t.__v_isVNode===!0:!1}function zr(t,e){return t.type===e.type&&t.key===e.key}const H0=({key:t})=>t??null,Jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?kt(t)||Vt(t)||We(t)?{i:Yn,r:t,k:e,f:!!n}:t:null);function G0(t,e=null,n=null,i=0,r=null,s=t===dn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&H0(e),ref:e&&Jo(e),scopeId:l0,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Yn};return o?(Zf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=kt(n)?8:16),Ua>0&&!a&&Rn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&Rn.push(l),l}const Lt=Y2;function Y2(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===S2)&&(t=Yt),gl(t)){const o=Sr(t,e,!0);return n&&Zf(o,n),Ua>0&&!s&&Rn&&(o.shapeFlag&6?Rn[Rn.indexOf(t)]=o:Rn.push(o)),o.patchFlag=-2,o}if(s3(t)&&(t=t.__vccOpts),e){e=W0(e);let{class:o,style:l}=e;o&&!kt(o)&&(e.class=Rl(o)),St(l)&&(Nl(l)&&!He(l)&&(l=$t({},l)),e.style=Cl(l))}const a=kt(t)?1:B0(t)?128:d0(t)?64:St(t)?4:We(t)?2:0;return G0(t,e,n,i,r,a,s,!0)}function W0(t){return t?Nl(t)||C0(t)?$t({},t):t:null}function Sr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,u=e?K2(r||{},e):r,c={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&H0(u),ref:e&&e.ref?n&&s?He(s)?s.concat(Jo(e)):[s,Jo(e)]:Jo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Sr(t.ssContent),ssFallback:t.ssFallback&&Sr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Jr(c,l.clone(c)),c}function $0(t=" ",e=0){return Lt(Kr,null,t,e)}function _8(t,e){const n=Lt(Ta,null,t);return n.staticCount=e,n}function gh(t="",e=!1){return e?(Kf(),z0(Yt,null,t)):Lt(Yt,null,t)}function kn(t){return t==null||typeof t=="boolean"?Lt(Yt):He(t)?Lt(dn,null,t.slice()):gl(t)?mr(t):Lt(Kr,null,String(t))}function mr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Sr(t)}function Zf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Zf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!C0(e)?e._ctx=Yn:r===3&&Yn&&(Yn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Yn},n=32):(e=String(e),i&64?(n=16,e=[$0(e)]):n=8);t.children=e,t.shapeFlag|=n}function K2(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Rl([e.class,i.class]));else if(r==="style")e.style=Cl([e.style,i.style]);else if(Xa(r)){const s=e[r],a=i[r];a&&s!==a&&!(He(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function On(t,e,n,i=null){ti(t,e,7,[n,i])}const Z2=E0();let J2=0;function Q2(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Z2,s={uid:J2++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new __(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:P0(i,r),emitsOptions:M0(i,r),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=I2.bind(null,s),t.ce&&t.ce(s),s}let Kt=null;const Qi=()=>Kt||Yn;let vl,gu;{const t=wl(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};vl=e("__VUE_INSTANCE_SETTERS__",n=>Kt=n),gu=e("__VUE_SSR_SETTERS__",n=>zs=n)}const Za=t=>{const e=Kt;return vl(t),t.scope.on(),()=>{t.scope.off(),vl(e)}},vh=()=>{Kt&&Kt.scope.off(),vl(null)};function X0(t){return t.vnode.shapeFlag&4}let zs=!1;function e3(t,e=!1,n=!1){e&&gu(e);const{props:i,children:r}=t.vnode,s=X0(t);B2(t,i,s,e),H2(t,r,n||e);const a=s?t3(t,e):void 0;return e&&gu(!1),a}function t3(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,M2);const{setup:i}=n;if(i){Gi();const r=t.setupContext=i.length>1?i3(t):null,s=Za(t),a=ja(i,t,0,[t.props,r]),o=Lm(a);if(Wi(),s(),(o||t.sp)&&!Is(t)&&Xf(t),o){if(a.then(vh,vh),e)return a.then(l=>{_h(t,l)}).catch(l=>{Ya(l,t,0)});t.asyncDep=a}else _h(t,a)}else q0(t)}function _h(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:St(e)&&(t.setupState=i0(e)),q0(t)}function q0(t,e,n){const i=t.type;t.render||(t.render=i.render||gi);{const r=Za(t);Gi();try{T2(t)}finally{Wi(),r()}}}const n3={get(t,e){return rn(t,"get",""),t[e]}};function i3(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,n3),slots:t.slots,emit:t.emit,expose:e}}function Jf(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(i0(V_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ma)return Ma[n](t)},has(e,n){return n in e||n in Ma}})):t.proxy}function r3(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function s3(t){return We(t)&&"__vccOpts"in t}const $=(t,e)=>j_(t,e,zs);function p(t,e,n){try{ml(-1);const i=arguments.length;return i===2?St(e)&&!He(e)?gl(e)?Lt(t,null,[e]):Lt(t,e):Lt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&gl(n)&&(n=[n]),Lt(t,e,n))}finally{ml(1)}}const a3="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let vu;const xh=typeof window<"u"&&window.trustedTypes;if(xh)try{vu=xh.createPolicy("vue",{createHTML:t=>t})}catch{}const j0=vu?t=>vu.createHTML(t):t=>t,o3="http://www.w3.org/2000/svg",l3="http://www.w3.org/1998/Math/MathML",Oi=typeof document<"u"?document:null,bh=Oi&&Oi.createElement("template"),c3={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Oi.createElementNS(o3,t):e==="mathml"?Oi.createElementNS(l3,t):n?Oi.createElement(t,{is:n}):Oi.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Oi.createTextNode(t),createComment:t=>Oi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Oi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{bh.innerHTML=j0(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=bh.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ir="transition",ua="animation",Hs=Symbol("_vtc"),Y0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},K0=$t({},p0,Y0),u3=t=>(t.displayName="Transition",t.props=K0,t),Gs=u3((t,{slots:e})=>p(s2,Z0(t),e)),Dr=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},yh=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function Z0(t){const e={};for(const U in t)U in Y0||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=a,appearToClass:c=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,v=f3(r),_=v&&v[0],g=v&&v[1],{onBeforeEnter:m,onEnter:E,onEnterCancelled:x,onLeave:S,onLeaveCancelled:A,onBeforeAppear:P=m,onAppear:D=E,onAppearCancelled:O=x}=e,y=(U,k,z,X)=>{U._enterCancelled=X,dr(U,k?c:o),dr(U,k?u:a),z&&z()},M=(U,k)=>{U._isLeaving=!1,dr(U,f),dr(U,h),dr(U,d),k&&k()},L=U=>(k,z)=>{const X=U?D:E,B=()=>y(k,U,z);Dr(X,[k,B]),Sh(()=>{dr(k,U?l:s),ui(k,U?c:o),yh(X)||Eh(k,i,_,B)})};return $t(e,{onBeforeEnter(U){Dr(m,[U]),ui(U,s),ui(U,a)},onBeforeAppear(U){Dr(P,[U]),ui(U,l),ui(U,u)},onEnter:L(!1),onAppear:L(!0),onLeave(U,k){U._isLeaving=!0;const z=()=>M(U,k);ui(U,f),U._enterCancelled?(ui(U,d),_u(U)):(_u(U),ui(U,d)),Sh(()=>{U._isLeaving&&(dr(U,f),ui(U,h),yh(S)||Eh(U,i,g,z))}),Dr(S,[U,z])},onEnterCancelled(U){y(U,!1,void 0,!0),Dr(x,[U])},onAppearCancelled(U){y(U,!0,void 0,!0),Dr(O,[U])},onLeaveCancelled(U){M(U),Dr(A,[U])}})}function f3(t){if(t==null)return null;if(St(t))return[uc(t.enter),uc(t.leave)];{const e=uc(t);return[e,e]}}function uc(t){return c_(t)}function ui(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Hs]||(t[Hs]=new Set)).add(e)}function dr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Hs];n&&(n.delete(e),n.size||(t[Hs]=void 0))}function Sh(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let d3=0;function Eh(t,e,n,i){const r=t._endId=++d3,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=J0(t,e);if(!a)return i();const u=a+"end";let c=0;const f=()=>{t.removeEventListener(u,d),s()},d=h=>{h.target===t&&++c>=l&&f()};setTimeout(()=>{c<l&&f()},o+1),t.addEventListener(u,d)}function J0(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${ir}Delay`),s=i(`${ir}Duration`),a=Mh(r,s),o=i(`${ua}Delay`),l=i(`${ua}Duration`),u=Mh(o,l);let c=null,f=0,d=0;e===ir?a>0&&(c=ir,f=a,d=s.length):e===ua?u>0&&(c=ua,f=u,d=l.length):(f=Math.max(a,u),c=f>0?a>u?ir:ua:null,d=c?c===ir?s.length:l.length:0);const h=c===ir&&/\b(?:transform|all)(?:,|$)/.test(i(`${ir}Property`).toString());return{type:c,timeout:f,propCount:d,hasTransform:h}}function Mh(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Th(n)+Th(t[i])))}function Th(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function _u(t){return(t?t.ownerDocument:document).body.offsetHeight}function h3(t,e,n){const i=t[Hs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ah=Symbol("_vod"),p3=Symbol("_vsh"),m3=Symbol(""),g3=/(?:^|;)\s*display\s*:/;function v3(t,e,n){const i=t.style,r=kt(n);let s=!1;if(n&&!r){if(e)if(kt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Qo(i,o,"")}else for(const a in e)n[a]==null&&Qo(i,a,"");for(const a in n)a==="display"&&(s=!0),Qo(i,a,n[a])}else if(r){if(e!==n){const a=i[m3];a&&(n+=";"+a),i.cssText=n,s=g3.test(n)}}else e&&t.removeAttribute("style");Ah in t&&(t[Ah]=s?i.display:"",t[p3]&&(i.display="none"))}const wh=/\s*!important$/;function Qo(t,e,n){if(He(n))n.forEach(i=>Qo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=_3(t,e);wh.test(n)?t.setProperty(es(i),n.replace(wh,""),"important"):t[i]=n}}const Ch=["Webkit","Moz","ms"],fc={};function _3(t,e){const n=fc[e];if(n)return n;let i=xn(e);if(i!=="filter"&&i in t)return fc[e]=i;i=qa(i);for(let r=0;r<Ch.length;r++){const s=Ch[r]+i;if(s in t)return fc[e]=s}return e}const Rh="http://www.w3.org/1999/xlink";function Ph(t,e,n,i,r,s=g_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Rh,e.slice(6,e.length)):t.setAttributeNS(Rh,e,n):n==null||s&&!Om(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Mr(n)?String(n):n)}function Dh(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?j0(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=Om(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function x3(t,e,n,i){t.addEventListener(e,n,i)}function b3(t,e,n,i){t.removeEventListener(e,n,i)}const Lh=Symbol("_vei");function y3(t,e,n,i,r=null){const s=t[Lh]||(t[Lh]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=S3(e);if(i){const u=s[e]=T3(i,r);x3(t,o,u,l)}else a&&(b3(t,o,a,l),s[e]=void 0)}}const Ih=/(?:Once|Passive|Capture)$/;function S3(t){let e;if(Ih.test(t)){e={};let i;for(;i=t.match(Ih);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let dc=0;const E3=Promise.resolve(),M3=()=>dc||(E3.then(()=>dc=0),dc=Date.now());function T3(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;ti(A3(i,n.value),e,5,[i])};return n.value=t,n.attached=M3(),n}function A3(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Nh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,w3=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?h3(t,i,a):e==="style"?v3(t,n,i):Xa(e)?Of(e)||y3(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):C3(t,e,i,a))?(Dh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ph(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!kt(i))?Dh(t,xn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Ph(t,e,i,a))};function C3(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Nh(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nh(e)&&kt(n)?!1:e in t}const Q0=new WeakMap,eg=new WeakMap,_l=Symbol("_moveCb"),Uh=Symbol("_enterCb"),R3=t=>(delete t.props.mode,t),P3=R3({name:"TransitionGroup",props:$t({},K0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Qi(),i=h0();let r,s;return b0(()=>{if(!r.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!N3(r[0].el,n.vnode.el,a)){r=[];return}r.forEach(D3),r.forEach(L3);const o=r.filter(I3);_u(n.vnode.el),o.forEach(l=>{const u=l.el,c=u.style;ui(u,a),c.transform=c.webkitTransform=c.transitionDuration="";const f=u[_l]=d=>{d&&d.target!==u||(!d||d.propertyName.endsWith("transform"))&&(u.removeEventListener("transitionend",f),u[_l]=null,dr(u,a))};u.addEventListener("transitionend",f)}),r=[]}),()=>{const a=it(t),o=Z0(a);let l=a.tag||dn;if(r=[],s)for(let u=0;u<s.length;u++){const c=s[u];c.el&&c.el instanceof Element&&(r.push(c),Jr(c,Na(c,o,i,n)),Q0.set(c,{left:c.el.offsetLeft,top:c.el.offsetTop}))}s=e.default?$f(e.default()):[];for(let u=0;u<s.length;u++){const c=s[u];c.key!=null&&Jr(c,Na(c,o,i,n))}return Lt(l,null,s)}}}),tg=P3;function D3(t){const e=t.el;e[_l]&&e[_l](),e[Uh]&&e[Uh]()}function L3(t){eg.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function I3(t){const e=Q0.get(t),n=eg.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function N3(t,e,n){const i=t.cloneNode(),r=t[Hs];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:a}=J0(i);return s.removeChild(i),a}const U3=$t({patchProp:w3},c3);let hc,Oh=!1;function O3(){return hc=Oh?hc:W2(U3),Oh=!0,hc}const F3=((...t)=>{const e=O3().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=k3(i);if(r)return n(r,!0,B3(r))},e});function B3(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function k3(t){return kt(t)?document.querySelector(t):t}var Ja=t=>/^[a-z][a-z0-9+.-]*:/.test(t)||t.startsWith("//"),V3=/.md((\?|#).*)?$/,Fl=(t,e="/")=>Ja(t)||t.startsWith("/")&&!t.startsWith(e)&&!V3.test(t),Js=t=>/^(https?:)?\/\//.test(t),Fh=t=>{if(!t||t.endsWith("/"))return t;let e=t.replace(/(^|\/)README.md$/i,"$1index.html");return e.endsWith(".md")?e=`${e.substring(0,e.length-3)}.html`:e.endsWith(".html")||(e=`${e}.html`),e.endsWith("/index.html")&&(e=e.substring(0,e.length-10)),e},z3="http://.",H3=(t,e)=>{if(!t.startsWith("/")&&e){const n=e.slice(0,e.lastIndexOf("/"));return Fh(new URL(`${n}/${t}`,z3).pathname)}return Fh(t)},G3=(t,e)=>{const n=Object.keys(t).sort((i,r)=>{const s=r.split("/").length-i.split("/").length;return s!==0?s:r.length-i.length});for(const i of n)if(e.startsWith(i))return i;return"/"},W3=/(#|\?)/,ng=t=>{const[e,...n]=t.split(W3);return{pathname:e,hashAndQueries:n.join("")}},$3=["link","meta","script","style","noscript","template"],X3=["title","base"],q3=([t,e,n])=>X3.includes(t)?t:$3.includes(t)?t==="meta"&&e.name?`${t}.${e.name}`:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,Object.entries(e).map(([i,r])=>typeof r=="boolean"?r?[i,""]:null:[i,r]).filter(i=>i!=null).sort(([i],[r])=>i.localeCompare(r)),n]):null,j3=t=>{const e=new Set,n=[];return t.forEach(i=>{const r=q3(i);r&&!e.has(r)&&(e.add(r),n.push(i))}),n},Y3=t=>t.startsWith("/")?t:`/${t}`,ig=t=>t.endsWith("/")||t.endsWith(".html")?t:`${t}/`,Qf=t=>t.endsWith("/")?t.slice(0,-1):t,rg=t=>t.startsWith("/")?t.slice(1):t,Tr=t=>Object.prototype.toString.call(t)==="[object Object]",xt=t=>typeof t=="string";const K3="modulepreload",Z3=function(t){return"/myblog/"+t},Bh={},je=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(u){return Promise.all(u.map(c=>Promise.resolve(c).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=l(n.map(u=>{if(u=Z3(u),u in Bh)return;Bh[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":K3,c||(d.as="script"),d.crossOrigin="",d.href=u,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((h,v)=>{d.addEventListener("load",h),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},J3=JSON.parse("{}"),Q3=Object.fromEntries([["/",{loader:()=>je(()=>import("./index.html-Bi-sBeeq.js"),[]),meta:{title:"个人博客",icon:"house"}}],["/intro.html",{loader:()=>je(()=>import("./intro.html-CTeuCGq5.js"),[]),meta:{date:1766391785e3,cover:"/assets/images/cover3.jpg",excerpt:`
<p>将你的个人介绍和档案放置在此处。</p>
`,readingTime:{minutes:.08,words:23},title:"介绍页",icon:"circle-info",type:"article"}}],["/demo/",{loader:()=>je(()=>import("./index.html-DAMEPKjZ.js"),[]),meta:{date:1766391785e3,category:["使用指南"],readingTime:{minutes:.07,words:22},title:"主要功能与配置演示",icon:"laptop-code",type:"article"}}],["/demo/disable.html",{loader:()=>je(()=>import("./disable.html-BfR2c_Xb.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["禁用"],excerpt:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,readingTime:{minutes:.43,words:128},title:"布局与功能禁用",icon:"gears",order:4,type:"article"}}],["/demo/encrypt.html",{loader:()=>je(()=>import("./encrypt.html-DWp5kIrt.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["加密"],isEncrypted:!0,readingTime:{minutes:.51,words:154},title:"密码加密的文章",icon:"lock",type:"article"}}],["/demo/layout.html",{loader:()=>je(()=>import("./layout.html-DchKStoo.js"),[]),meta:{date:1766391785e3,category:["指南"],tag:["布局"],excerpt:`<p>布局包括:</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚</a></li>
</ul>`,readingTime:{minutes:.53,words:159},title:"布局",icon:"object-group",order:2,type:"article"}}],["/demo/markdown.html",{loader:()=>je(()=>import("./markdown.html-DwoeGWNZ.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["Markdown"],excerpt:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,readingTime:{minutes:3.13,words:938},title:"Markdown 展示",icon:"fa6-brands:markdown",order:2,type:"article"}}],["/demo/page.html",{loader:()=>je(()=>import("./page.html-Bds3VExT.js"),[]),meta:{author:"superxuan",date:15778368e5,category:["使用指南"],tag:["页面配置","使用指南"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,readingTime:{minutes:1.76,words:529},title:"页面配置",icon:"file",order:3,type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/1sjk.html",{loader:()=>je(()=>import("./1sjk.html-BdxoL2i2.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`
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
</ul>`,readingTime:{minutes:10.13,words:3039},title:"数据库概览1",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/2sjk.html",{loader:()=>je(()=>import("./2sjk.html-BMVUIXPi.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover2.jpg",excerpt:`
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
</ul>`,readingTime:{minutes:17.33,words:5200},title:"数据库概览2",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/3.sjk.html",{loader:()=>je(()=>import("./3.sjk.html-9Nzkwvic.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h2>数据库定义语言（DDL）</h2>
<h3>数据库操作</h3>
<p>我们可以通过<code>create database</code>来创建一个数据库：</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="background-color:#2e3440ff;color:#d8dee9ff"><pre class="shiki nord vp-code"><code class="language-sql"><span class="line"><span style="color:#81A1C1">create</span><span style="color:#81A1C1"> database</span><span style="color:#88C0D0"> 数据库名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:20.58,words:6174},title:"数据库概览3",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/glx.html",{loader:()=>je(()=>import("./glx.html-B2A8XDVG.js"),[]),meta:{author:"superxuan",date:17666208e5,category:["医院管理学"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h3>医院管理学单选题</h3>
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
</ol>`,readingTime:{minutes:25.8,words:7740},title:"医院管理学",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/linux.html",{loader:()=>je(()=>import("./linux.html-ClfthRe1.js"),[]),meta:{author:"superxuan",date:17665344e5,category:["linux"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<p>以下是修改后的<strong>实验三</strong>详细实现步骤，以及实验一、二、四的原有内容（保持不变），所有命令均基于<strong>Bash环境</strong>和<strong>Vim编辑器</strong>编写，确保操作可复现。</p>
<hr>
<h1>实验一：Linux基础文件操作（无修改，保留原内容）</h1>
<h3>（1）显示当前用户所在位置</h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="background-color:#2e3440ff;color:#d8dee9ff"><pre class="shiki nord vp-code"><code class="language-bash"><span class="line"><span style="color:#88C0D0">pwd</span><span style="color:#616E88">  # 打印当前工作目录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:7.75,words:2325},title:"linux基础文件操作",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/web.html",{loader:()=>je(()=>import("./web.html-DJPS4L8S.js"),[]),meta:{author:"superxuan",date:17663616e5,category:["网络"],sticky:!0,cover:"/assets/images/cover2.jpg",excerpt:`
<h3>1. 路由器配置模式及切换</h3>
<ul>
<li><strong>用户模式</strong>：提示符<code>&gt;</code>，基础查看权限</li>
<li><strong>特权模式</strong>：输入<code>enable</code>从用户模式进入，提示符<code>#</code>，可查看设备完整配置</li>
<li><strong>全局配置模式</strong>：特权模式输入<code>configure terminal</code>进入，提示符<code>(config)#</code>，可进行全局参数配置</li>
</ul>
<h3>2. show命令</h3>`,readingTime:{minutes:5.86,words:1758},title:"网络路由与交换技术",icon:"pen-to-square",type:"article"}}],["/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stack.html",{loader:()=>je(()=>import("./stack.html-C-0YVPRD.js"),[]),meta:{date:1766448e6,category:["数据结构"],tag:["栈","算法"],excerpt:`<p>在408计算机学科专业基础综合考试中，栈的考点主要包括基本概念、存储结构、基本操作、应用等方面，以下是详细介绍：</p>
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
</ul>`,readingTime:{minutes:2.6,words:780},title:"栈",icon:"stack",type:"article"}}],["/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/1.html",{loader:()=>je(()=>import("./1.html-0htcikgg.js"),[]),meta:{date:1766495627e3,title:"",type:"article"}}],["/404.html",{loader:()=>je(()=>import("./404.html-9Z5UZmM2.js"),[]),meta:{title:""}}],["/posts/%E5%85%B6%E4%BB%96/",{loader:()=>je(()=>import("./index.html-Cc9SJouL.js"),[]),meta:{title:"其他"}}],["/posts/",{loader:()=>je(()=>import("./index.html-ChHVtTmF.js"),[]),meta:{title:"Posts"}}],["/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>je(()=>import("./index.html-BGBaYJ3N.js"),[]),meta:{title:"数据结构"}}],["/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/",{loader:()=>je(()=>import("./index.html-DYMY3BR8.js"),[]),meta:{title:"考研数学"}}],["/category/",{loader:()=>je(()=>import("./index.html-D1Cz4Krn.js"),[]),meta:{title:"分类",index:!1}}],["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>je(()=>import("./index.html-BoE--vbx.js"),[]),meta:{title:"使用指南 分类",index:!1}}],["/category/%E6%8C%87%E5%8D%97/",{loader:()=>je(()=>import("./index.html-BN0EgeXT.js"),[]),meta:{title:"指南 分类",index:!1}}],["/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{loader:()=>je(()=>import("./index.html-B40A4lXE.js"),[]),meta:{title:"数据库 分类",index:!1}}],["/category/%E5%8C%BB%E9%99%A2%E7%AE%A1%E7%90%86%E5%AD%A6/",{loader:()=>je(()=>import("./index.html-BomCJw3T.js"),[]),meta:{title:"医院管理学 分类",index:!1}}],["/category/linux/",{loader:()=>je(()=>import("./index.html-UK9kAa_5.js"),[]),meta:{title:"linux 分类",index:!1}}],["/category/%E7%BD%91%E7%BB%9C/",{loader:()=>je(()=>import("./index.html-BhkhUWwu.js"),[]),meta:{title:"网络 分类",index:!1}}],["/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>je(()=>import("./index.html-eUvUxFFh.js"),[]),meta:{title:"数据结构 分类",index:!1}}],["/tag/",{loader:()=>je(()=>import("./index.html-D6xtpr_1.js"),[]),meta:{title:"标签",index:!1}}],["/tag/%E7%A6%81%E7%94%A8/",{loader:()=>je(()=>import("./index.html-BzRtWCHN.js"),[]),meta:{title:"标签: 禁用",index:!1}}],["/tag/%E5%8A%A0%E5%AF%86/",{loader:()=>je(()=>import("./index.html-B3-EKT0C.js"),[]),meta:{title:"标签: 加密",index:!1}}],["/tag/%E5%B8%83%E5%B1%80/",{loader:()=>je(()=>import("./index.html-BnX4WIND.js"),[]),meta:{title:"标签: 布局",index:!1}}],["/tag/markdown/",{loader:()=>je(()=>import("./index.html-CWDm-4uv.js"),[]),meta:{title:"标签: Markdown",index:!1}}],["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{loader:()=>je(()=>import("./index.html-BgUbRjFx.js"),[]),meta:{title:"标签: 页面配置",index:!1}}],["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>je(()=>import("./index.html-y19Kfw1t.js"),[]),meta:{title:"标签: 使用指南",index:!1}}],["/tag/%E6%A0%88/",{loader:()=>je(()=>import("./index.html-B5ZMI-PD.js"),[]),meta:{title:"标签: 栈",index:!1}}],["/tag/%E7%AE%97%E6%B3%95/",{loader:()=>je(()=>import("./index.html-CTMfdykh.js"),[]),meta:{title:"标签: 算法",index:!1}}],["/article/",{loader:()=>je(()=>import("./index.html-DspNQOnS.js"),[]),meta:{title:"文章",index:!1}}],["/star/",{loader:()=>je(()=>import("./index.html-B-6v5Bwo.js"),[]),meta:{title:"星标",index:!1}}],["/timeline/",{loader:()=>je(()=>import("./index.html-B71j4DWH.js"),[]),meta:{title:"时间轴",index:!1}}]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Es=typeof document<"u";function sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ex(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sg(t.default)}const dt=Object.assign;function pc(t,e){const n={};for(const i in e){const r=e[i];n[i]=ni(r)?r.map(t):t(r)}return n}const wa=()=>{},ni=Array.isArray;function kh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const ag=/#/g,tx=/&/g,nx=/\//g,ix=/=/g,rx=/\?/g,og=/\+/g,sx=/%5B/g,ax=/%5D/g,lg=/%5E/g,ox=/%60/g,cg=/%7B/g,lx=/%7C/g,ug=/%7D/g,cx=/%20/g;function ed(t){return t==null?"":encodeURI(""+t).replace(lx,"|").replace(sx,"[").replace(ax,"]")}function ux(t){return ed(t).replace(cg,"{").replace(ug,"}").replace(lg,"^")}function xu(t){return ed(t).replace(og,"%2B").replace(cx,"+").replace(ag,"%23").replace(tx,"%26").replace(ox,"`").replace(cg,"{").replace(ug,"}").replace(lg,"^")}function fx(t){return xu(t).replace(ix,"%3D")}function dx(t){return ed(t).replace(ag,"%23").replace(rx,"%3F")}function hx(t){return dx(t).replace(nx,"%2F")}function Oa(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const px=/\/$/,mx=t=>t.replace(px,"");function mc(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=t(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=xx(i??e,n),{fullPath:i+s+a,path:i,query:r,hash:Oa(a)}}function gx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Vh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ws(e.matched[i],n.matched[r])&&fg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ws(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function fg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!_x(t[n],e[n]))return!1;return!0}function _x(t,e){return ni(t)?zh(t,e):ni(e)?zh(e,t):t?.valueOf()===e?.valueOf()}function zh(t,e){return ni(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function xx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Ui={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let bu=(function(t){return t.pop="pop",t.push="push",t})({}),gc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function bx(t){if(!t)if(Es){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),mx(t)}const yx=/^[^#]+#/;function Sx(t,e){return t.replace(yx,"#")+e}function Ex(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Bl=()=>({left:window.scrollX,top:window.scrollY});function Mx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ex(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Hh(t,e){return(history.state?history.state.position-e:-1)+t}const yu=new Map;function Tx(t,e){yu.set(t,e)}function Ax(t){const e=yu.get(t);return yu.delete(t),e}function wx(t){return typeof t=="string"||t&&typeof t=="object"}function dg(t){return typeof t=="string"||typeof t=="symbol"}let Ft=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const hg=Symbol("");Ft.MATCHER_NOT_FOUND+"",Ft.NAVIGATION_GUARD_REDIRECT+"",Ft.NAVIGATION_ABORTED+"",Ft.NAVIGATION_CANCELLED+"",Ft.NAVIGATION_DUPLICATED+"";function $s(t,e){return dt(new Error,{type:t,[hg]:!0},e)}function Ci(t,e){return t instanceof Error&&hg in t&&(e==null||!!(t.type&e))}const Cx=["params","query","hash"];function Rx(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Cx)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Px(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(og," "),s=r.indexOf("="),a=Oa(s<0?r:r.slice(0,s)),o=s<0?null:Oa(r.slice(s+1));if(a in e){let l=e[a];ni(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function Gh(t){let e="";for(let n in t){const i=t[n];if(n=fx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(ni(i)?i.map(r=>r&&xu(r)):[i&&xu(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Dx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=ni(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Lx=Symbol(""),Wh=Symbol(""),kl=Symbol(""),td=Symbol(""),Su=Symbol("");function fa(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function gr(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const u=d=>{d===!1?l($s(Ft.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):wx(d)?l($s(Ft.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},c=s(()=>t.call(i&&i.instances[r],e,n,u));let f=Promise.resolve(c);t.length<3&&(f=f.then(u)),f.catch(d=>l(d))})}function vc(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(sg(l)){const u=(l.__vccOpts||l)[e];u&&s.push(gr(u,n,i,a,o,r))}else{let u=l();s.push(()=>u.then(c=>{if(!c)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=ex(c)?c.default:c;a.mods[o]=c,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&gr(d,n,i,a,o,r)()}))}}return s}function Ix(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(u=>Ws(u,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(u=>Ws(u,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Nx=()=>location.protocol+"//"+location.host;function pg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),Vh(o,"")}return Vh(n,t)+i+r}function Ux(t,e,n,i){let r=[],s=[],a=null;const o=({state:d})=>{const h=pg(t,location),v=n.value,_=e.value;let g=0;if(d){if(n.value=h,e.value=d,a&&a===v){a=null;return}g=_?d.position-_.position:0}else i(h);r.forEach(m=>{m(n.value,v,{delta:g,type:bu.pop,direction:g?g>0?gc.forward:gc.back:gc.unknown})})};function l(){a=n.value}function u(d){r.push(d);const h=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(h),h}function c(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(dt({},d.state,{scroll:Bl()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",c),document.removeEventListener("visibilitychange",c)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",c),document.addEventListener("visibilitychange",c),{pauseListeners:l,listen:u,destroy:f}}function $h(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Bl():null}}function Ox(t){const{history:e,location:n}=window,i={value:pg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,u,c){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Nx()+t+l;try{e[c?"replaceState":"pushState"](u,"",d),r.value=u}catch(h){console.error(h),n[c?"replace":"assign"](d)}}function a(l,u){s(l,dt({},e.state,$h(r.value.back,l,r.value.forward,!0),u,{position:r.value.position}),!0),i.value=l}function o(l,u){const c=dt({},r.value,e.state,{forward:l,scroll:Bl()});s(c.current,c,!0),s(l,dt({},$h(i.value,l,null),{position:c.position+1},u),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Fx(t){t=bx(t);const e=Ox(t),n=Ux(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=dt({location:"",base:t,go:i,createHref:Sx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Wr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Wt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Wt||{});const Bx={type:Wr.Static,value:""},kx=/[a-zA-Z0-9_]/;function Vx(t){if(!t)return[[]];if(t==="/")return[[Bx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${u}": ${h}`)}let n=Wt.Static,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,u="",c="";function f(){u&&(n===Wt.Static?s.push({type:Wr.Static,value:u}):n===Wt.Param||n===Wt.ParamRegExp||n===Wt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Wr.Param,value:u,regexp:c,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==Wt.ParamRegExp){i=n,n=Wt.EscapeNext;continue}switch(n){case Wt.Static:l==="/"?(u&&f(),a()):l===":"?(f(),n=Wt.Param):d();break;case Wt.EscapeNext:d(),n=i;break;case Wt.Param:l==="("?n=Wt.ParamRegExp:kx.test(l)?d():(f(),n=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case Wt.ParamRegExp:l===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+l:n=Wt.ParamRegExpEnd:c+=l;break;case Wt.ParamRegExpEnd:f(),n=Wt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,c="";break;default:e("Unknown state");break}}return n===Wt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),f(),a(),r}const Xh="[^/]+?",zx={sensitive:!1,strict:!1,start:!0,end:!0};var un=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(un||{});const Hx=/[.+*?^${}()[\]/\\]/g;function Gx(t,e){const n=dt({},zx,e),i=[];let r=n.start?"^":"";const s=[];for(const u of t){const c=u.length?[]:[un.Root];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const d=u[f];let h=un.Segment+(n.sensitive?un.BonusCaseSensitive:0);if(d.type===Wr.Static)f||(r+="/"),r+=d.value.replace(Hx,"\\$&"),h+=un.Static;else if(d.type===Wr.Param){const{value:v,repeatable:_,optional:g,regexp:m}=d;s.push({name:v,repeatable:_,optional:g});const E=m||Xh;if(E!==Xh){h+=un.BonusCustomRegExp;try{`${E}`}catch(S){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+S.message)}}let x=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(x=g&&u.length<2?`(?:/${x})`:"/"+x),g&&(x+="?"),r+=x,h+=un.Dynamic,g&&(h+=un.BonusOptional),_&&(h+=un.BonusRepeatable),E===".*"&&(h+=un.BonusWildcard)}c.push(h)}i.push(c)}if(n.strict&&n.end){const u=i.length-1;i[u][i[u].length-1]+=un.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(u){const c=u.match(a),f={};if(!c)return null;for(let d=1;d<c.length;d++){const h=c[d]||"",v=s[d-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(u){let c="",f=!1;for(const d of t){(!f||!c.endsWith("/"))&&(c+="/"),f=!1;for(const h of d)if(h.type===Wr.Static)c+=h.value;else if(h.type===Wr.Param){const{value:v,repeatable:_,optional:g}=h,m=v in u?u[v]:"";if(ni(m)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=ni(m)?m.join("/"):m;if(!E)if(g)d.length<2&&(c.endsWith("/")?c=c.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);c+=E}}return c||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Wx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===un.Static+un.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===un.Static+un.Segment?1:-1:0}function mg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Wx(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(qh(i))return 1;if(qh(r))return-1}return r.length-i.length}function qh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $x={strict:!1,end:!0,sensitive:!1};function Xx(t,e,n){const i=Gx(Vx(t.path),n),r=dt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function qx(t,e){const n=[],i=new Map;e=kh($x,e);function r(f){return i.get(f)}function s(f,d,h){const v=!h,_=Yh(f);_.aliasOf=h&&h.record;const g=kh(e,f),m=[_];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const A of S)m.push(Yh(dt({},_,{components:h?h.record.components:_.components,path:A,aliasOf:h?h.record:_})))}let E,x;for(const S of m){const{path:A}=S;if(d&&A[0]!=="/"){const P=d.record.path,D=P[P.length-1]==="/"?"":"/";S.path=d.record.path+(A&&D+A)}if(E=Xx(S,d,g),h?h.alias.push(E):(x=x||E,x!==E&&x.alias.push(E),v&&f.name&&!Kh(E)&&a(f.name)),gg(E)&&l(E),_.children){const P=_.children;for(let D=0;D<P.length;D++)s(P[D],E,h&&h.children[D])}h=h||E}return x?()=>{a(x)}:wa}function a(f){if(dg(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const d=Kx(f,n);n.splice(d,0,f),f.record.name&&!Kh(f)&&i.set(f.record.name,f)}function u(f,d){let h,v={},_,g;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw $s(Ft.MATCHER_NOT_FOUND,{location:f});g=h.record.name,v=dt(jh(d.params,h.keys.filter(x=>!x.optional).concat(h.parent?h.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),f.params&&jh(f.params,h.keys.map(x=>x.name))),_=h.stringify(v)}else if(f.path!=null)_=f.path,h=n.find(x=>x.re.test(_)),h&&(v=h.parse(_),g=h.record.name);else{if(h=d.name?i.get(d.name):n.find(x=>x.re.test(d.path)),!h)throw $s(Ft.MATCHER_NOT_FOUND,{location:f,currentLocation:d});g=h.record.name,v=dt({},d.params,f.params),_=h.stringify(v)}const m=[];let E=h;for(;E;)m.unshift(E.record),E=E.parent;return{name:g,path:_,params:v,matched:m,meta:Yx(m)}}t.forEach(f=>s(f));function c(){n.length=0,i.clear()}return{addRoute:s,resolve:u,removeRoute:a,clearRoutes:c,getRoutes:o,getRecordMatcher:r}}function jh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Yh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:jx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function jx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Kh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Yx(t){return t.reduce((e,n)=>dt(e,n.meta),{})}function Kx(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;mg(t,e[s])<0?i=s:n=s+1}const r=Zx(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Zx(t){let e=t;for(;e=e.parent;)if(gg(e)&&mg(t,e)===0)return e}function gg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Zh(t){const e=Rt(kl),n=Rt(td),i=$(()=>{const l=Jn(t.to);return e.resolve(l)}),r=$(()=>{const{matched:l}=i.value,{length:u}=l,c=l[u-1],f=n.matched;if(!c||!f.length)return-1;const d=f.findIndex(Ws.bind(null,c));if(d>-1)return d;const h=Jh(l[u-2]);return u>1&&Jh(c)===h&&f[f.length-1].path!==h?f.findIndex(Ws.bind(null,l[u-2])):d}),s=$(()=>r.value>-1&&nb(n.params,i.value.params)),a=$(()=>r.value>-1&&r.value===n.matched.length-1&&fg(n.params,i.value.params));function o(l={}){if(tb(l)){const u=e[Jn(t.replace)?"replace":"push"](Jn(t.to)).catch(wa);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:i,href:$(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function Jx(t){return t.length===1?t[0]:t}const Qx=xe({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Zh,setup(t,{slots:e}){const n=Zr(Zh(t)),{options:i}=Rt(kl),r=$(()=>({[Qh(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Qh(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&Jx(e.default(n));return t.custom?s:p("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),eb=Qx;function tb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function nb(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!ni(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Jh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Qh=(t,e,n)=>t??e??n,ib=xe({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Rt(Su),r=$(()=>t.route||i.value),s=Rt(Wh,0),a=$(()=>{let u=Jn(s);const{matched:c}=r.value;let f;for(;(f=c[u])&&!f.components;)u++;return u}),o=$(()=>r.value.matched[a.value]);Qn(Wh,$(()=>a.value+1)),Qn(Lx,o),Qn(Su,r);const l=qe();return Dt(()=>[l.value,o.value,t.name],([u,c,f],[d,h,v])=>{c&&(c.instances[f]=u,h&&h!==c&&u&&u===d&&(c.leaveGuards.size||(c.leaveGuards=h.leaveGuards),c.updateGuards.size||(c.updateGuards=h.updateGuards))),u&&c&&(!h||!Ws(c,h)||!d)&&(c.enterCallbacks[f]||[]).forEach(_=>_(u))},{flush:"post"}),()=>{const u=r.value,c=t.name,f=o.value,d=f&&f.components[c];if(!d)return ep(n.default,{Component:d,route:u});const h=f.props[c],v=h?h===!0?u.params:typeof h=="function"?h(u):h:null,g=p(d,dt({},v,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(f.instances[c]=null)},ref:l}));return ep(n.default,{Component:g,route:u})||g}}});function ep(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const rb=ib;function sb(t){const e=qx(t.routes,t),n=t.parseQuery||Px,i=t.stringifyQuery||Gh,r=t.history,s=fa(),a=fa(),o=fa(),l=Ye(Ui);let u=Ui;Es&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=pc.bind(null,F=>""+F),f=pc.bind(null,hx),d=pc.bind(null,Oa);function h(F,re){let oe,ae;return dg(F)?(oe=e.getRecordMatcher(F),ae=re):ae=F,e.addRoute(ae,oe)}function v(F){const re=e.getRecordMatcher(F);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(F=>F.record)}function g(F){return!!e.getRecordMatcher(F)}function m(F,re){if(re=dt({},re||l.value),typeof F=="string"){const I=mc(n,F,re.path),W=e.resolve({path:I.path},re),ee=r.createHref(I.fullPath);return dt(I,W,{params:d(W.params),hash:Oa(I.hash),redirectedFrom:void 0,href:ee})}let oe;if(F.path!=null)oe=dt({},F,{path:mc(n,F.path,re.path).path});else{const I=dt({},F.params);for(const W in I)I[W]==null&&delete I[W];oe=dt({},F,{params:f(I)}),re.params=f(re.params)}const ae=e.resolve(oe,re),we=F.hash||"";ae.params=c(d(ae.params));const Ge=gx(i,dt({},F,{hash:ux(we),path:ae.path})),R=r.createHref(Ge);return dt({fullPath:Ge,hash:we,query:i===Gh?Dx(F.query):F.query||{}},ae,{redirectedFrom:void 0,href:R})}function E(F){return typeof F=="string"?mc(n,F,l.value.path):dt({},F)}function x(F,re){if(u!==F)return $s(Ft.NAVIGATION_CANCELLED,{from:re,to:F})}function S(F){return D(F)}function A(F){return S(dt(E(F),{replace:!0}))}function P(F,re){const oe=F.matched[F.matched.length-1];if(oe&&oe.redirect){const{redirect:ae}=oe;let we=typeof ae=="function"?ae(F,re):ae;return typeof we=="string"&&(we=we.includes("?")||we.includes("#")?we=E(we):{path:we},we.params={}),dt({query:F.query,hash:F.hash,params:we.path!=null?{}:F.params},we)}}function D(F,re){const oe=u=m(F),ae=l.value,we=F.state,Ge=F.force,R=F.replace===!0,I=P(oe,ae);if(I)return D(dt(E(I),{state:typeof I=="object"?dt({},we,I.state):we,force:Ge,replace:R}),re||oe);const W=oe;W.redirectedFrom=re;let ee;return!Ge&&vx(i,ae,oe)&&(ee=$s(Ft.NAVIGATION_DUPLICATED,{to:W,from:ae}),ye(ae,ae,!0,!1)),(ee?Promise.resolve(ee):M(W,ae)).catch(ie=>Ci(ie)?Ci(ie,Ft.NAVIGATION_GUARD_REDIRECT)?ie:ge(ie):q(ie,W,ae)).then(ie=>{if(ie){if(Ci(ie,Ft.NAVIGATION_GUARD_REDIRECT))return D(dt({replace:R},E(ie.to),{state:typeof ie.to=="object"?dt({},we,ie.to.state):we,force:Ge}),re||W)}else ie=U(W,ae,!0,R,we);return L(W,ae,ie),ie})}function O(F,re){const oe=x(F,re);return oe?Promise.reject(oe):Promise.resolve()}function y(F){const re=at.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(F):F()}function M(F,re){let oe;const[ae,we,Ge]=Ix(F,re);oe=vc(ae.reverse(),"beforeRouteLeave",F,re);for(const I of ae)I.leaveGuards.forEach(W=>{oe.push(gr(W,F,re))});const R=O.bind(null,F,re);return oe.push(R),se(oe).then(()=>{oe=[];for(const I of s.list())oe.push(gr(I,F,re));return oe.push(R),se(oe)}).then(()=>{oe=vc(we,"beforeRouteUpdate",F,re);for(const I of we)I.updateGuards.forEach(W=>{oe.push(gr(W,F,re))});return oe.push(R),se(oe)}).then(()=>{oe=[];for(const I of Ge)if(I.beforeEnter)if(ni(I.beforeEnter))for(const W of I.beforeEnter)oe.push(gr(W,F,re));else oe.push(gr(I.beforeEnter,F,re));return oe.push(R),se(oe)}).then(()=>(F.matched.forEach(I=>I.enterCallbacks={}),oe=vc(Ge,"beforeRouteEnter",F,re,y),oe.push(R),se(oe))).then(()=>{oe=[];for(const I of a.list())oe.push(gr(I,F,re));return oe.push(R),se(oe)}).catch(I=>Ci(I,Ft.NAVIGATION_CANCELLED)?I:Promise.reject(I))}function L(F,re,oe){o.list().forEach(ae=>y(()=>ae(F,re,oe)))}function U(F,re,oe,ae,we){const Ge=x(F,re);if(Ge)return Ge;const R=re===Ui,I=Es?history.state:{};oe&&(ae||R?r.replace(F.fullPath,dt({scroll:R&&I&&I.scroll},we)):r.push(F.fullPath,we)),l.value=F,ye(F,re,oe,R),ge()}let k;function z(){k||(k=r.listen((F,re,oe)=>{if(!et.listening)return;const ae=m(F),we=P(ae,et.currentRoute.value);if(we){D(dt(we,{replace:!0,force:!0}),ae).catch(wa);return}u=ae;const Ge=l.value;Es&&Tx(Hh(Ge.fullPath,oe.delta),Bl()),M(ae,Ge).catch(R=>Ci(R,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_CANCELLED)?R:Ci(R,Ft.NAVIGATION_GUARD_REDIRECT)?(D(dt(E(R.to),{force:!0}),ae).then(I=>{Ci(I,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===bu.pop&&r.go(-1,!1)}).catch(wa),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),q(R,ae,Ge))).then(R=>{R=R||U(ae,Ge,!1),R&&(oe.delta&&!Ci(R,Ft.NAVIGATION_CANCELLED)?r.go(-oe.delta,!1):oe.type===bu.pop&&Ci(R,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),L(ae,Ge,R)}).catch(wa)}))}let X=fa(),B=fa(),G;function q(F,re,oe){ge(F);const ae=B.list();return ae.length?ae.forEach(we=>we(F,re,oe)):console.error(F),Promise.reject(F)}function le(){return G&&l.value!==Ui?Promise.resolve():new Promise((F,re)=>{X.add([F,re])})}function ge(F){return G||(G=!F,z(),X.list().forEach(([re,oe])=>F?oe(F):re()),X.reset()),F}function ye(F,re,oe,ae){const{scrollBehavior:we}=t;if(!Es||!we)return Promise.resolve();const Ge=!oe&&Ax(Hh(F.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return Ei().then(()=>we(F,re,Ge)).then(R=>R&&Mx(R)).catch(R=>q(R,F,re))}const Oe=F=>r.go(F);let Be;const at=new Set,et={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:_,resolve:m,options:t,push:S,replace:A,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:B.add,isReady:le,install(F){F.component("RouterLink",eb),F.component("RouterView",rb),F.config.globalProperties.$router=et,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Jn(l)}),Es&&!Be&&l.value===Ui&&(Be=!0,S(r.location).catch(ae=>{}));const re={};for(const ae in Ui)Object.defineProperty(re,ae,{get:()=>l.value[ae],enumerable:!0});F.provide(kl,et),F.provide(td,t0(re)),F.provide(Su,l);const oe=F.unmount;at.add(F),F.unmount=function(){at.delete(F),at.size<1&&(u=Ui,k&&k(),k=null,l.value=Ui,Be=!1,G=!1),oe()}}};function se(F){return F.reduce((re,oe)=>re.then(()=>y(oe)),Promise.resolve())}return et}function Ar(){return Rt(kl)}function Mi(t){return Rt(td)}var nd=Symbol(""),Ti=()=>{const t=Rt(nd);if(!t)throw new Error("useClientData() is called without provider.");return t},ab=()=>Ti().pageComponent,ob=()=>Ti().pageData,vg=()=>Ti().pageFrontmatter,lb=()=>Ti().pageHead,_g=()=>Ti().pageLang,cb=()=>Ti().pageLayout,xg=()=>Ti().routeLocale,ub=()=>Ti().routePath,fb=()=>Ti().siteData,ts=Ti,Ln=vg,bg=_g,Qa=ob,Eu=new Set,er=t=>{Eu.add(t),Ji(()=>{Eu.delete(t)})},db=Symbol(""),Mu=Ye(J3),Ns=Ye(Q3),yg=(t,e)=>{const n=H3(t,e);if(Ns.value[n])return n;const i=encodeURI(n);if(Ns.value[i])return i;const r=Mu.value[n]||Mu.value[i];return r||n},zn=(t,e)=>{const{pathname:n,hashAndQueries:i}=ng(t),r=yg(n,e),s=r+i;return Ns.value[r]?{...Ns.value[r],path:s,notFound:!1}:{...Ns.value["/404.html"],path:s,notFound:!0}},hb=(t,e)=>{const{pathname:n,hashAndQueries:i}=ng(t);return yg(n,e)+i},pb=t=>{if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)&&!(t.currentTarget&&t.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)))return t.preventDefault(),!0},Gt=xe({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(t,{slots:e}){const n=Ar(),i=Mi(),r=$(()=>t.to.startsWith("#")||t.to.startsWith("?")?t.to:`/myblog/${hb(t.to,i.path).substring(1)}`);return()=>p("a",{class:["route-link",{[t.activeClass]:t.active}],href:r.value,onClick:(s={})=>{pb(s)&&n.push(t.to).catch()}},e.default())}}),mb=xe({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=Zs(t,"config"),i=Mi(),r=fb(),s=$(()=>Ja(n.value.link)),a=$(()=>n.value.target||(s.value?"_blank":void 0)),o=$(()=>a.value==="_blank"),l=$(()=>!s.value&&!o.value),u=$(()=>n.value.rel||(o.value?"noopener noreferrer":null)),c=$(()=>n.value.ariaLabel??n.value.text),f=$(()=>{if(n.value.exact)return!1;const h=Object.keys(r.value.locales);return h.length?h.every(v=>v!==n.value.link):n.value.link!=="/"}),d=$(()=>l.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(i.path):f.value?i.path.startsWith(n.value.link):i.path===n.value.link:!1);return()=>{const{before:h,after:v,default:_}=e,g=_?.(n.value)??[h?.(n.value),n.value.text,v?.(n.value)];return l.value?p(Gt,{class:"auto-link",to:n.value.link,active:d.value,"aria-label":c.value},()=>g):p("a",{class:"auto-link external-link",href:n.value.link,"aria-label":c.value,rel:u.value,target:a.value},g)}}}),id=xe({name:"ClientOnly",setup(t,e){const n=qe(!1);return vt(()=>{n.value=!0}),()=>n.value?e.slots.default?.():null}}),So=t=>{Eu.forEach(e=>e(t))},Sg=xe({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(t){const e=ab(),n=$(()=>{if(!t.path)return e.value;const r=zn(t.path);return f2(async()=>r.loader().then(({comp:s})=>s))}),i=vg();return Dt(i,()=>{So("updated")},{deep:!0,flush:"post"}),()=>p(n.value,{onVnodeMounted:()=>{So("mounted")},onVnodeUpdated:()=>{So("updated")},onVnodeBeforeUnmount:()=>{So("beforeUnmount")}})}}),gb="Layout",vb="en-US",Lr=Zr({resolveLayouts:t=>t.reduce((e,n)=>({...e,...n.layouts}),{}),resolvePageHead:(t,e,n)=>{const i=xt(e.description)?e.description:n.description,r=[...Array.isArray(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:i}]];return j3(r)},resolvePageHeadTitle:(t,e)=>[t.title,e.title].filter(n=>!!n).join(" | "),resolvePageLang:(t,e)=>t.lang||e.lang||vb,resolvePageLayout:(t,e)=>{const n=xt(t.frontmatter.layout)?t.frontmatter.layout:gb;if(!e[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return e[n]},resolveRouteLocale:(t,e)=>G3(t,decodeURI(e)),resolveSiteLocaleData:({base:t,locales:e,...n},i)=>({...n,...e[i],head:[...e[i]?.head??[],...n.head]})}),ai=(t={})=>t,yt=t=>Js(t)?t:`/myblog/${rg(t)}`,_b=Object.defineProperty,xb=(t,e)=>{for(var n in e)_b(t,n,{get:e[n],enumerable:!0})},bb={};xb(bb,{COMPONENT_STATE_TYPE:()=>yb,INSPECTOR_ID:()=>Sb,INSPECTOR_LABEL:()=>Eb,INSPECTOR_NODES:()=>Mb,INSPECTOR_STATE_SECTION_NAME:()=>Tb,PLUGIN_ID:()=>Eg,PLUGIN_LABEL:()=>rd});var Eg="org.vuejs.vuepress",rd="VuePress",yb=rd,Sb=Eg,Eb=rd,tp={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},np={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},ip={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},rp={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},Mb={[tp.id]:tp,[np.id]:np,[ip.id]:ip,[rp.id]:rp},Tb="State";const sp=t=>typeof t=="number"?`${t}px`:t,Mg=({size:t=48,stroke:e=4,wrapper:n=!0,height:i=2*t})=>{const r=p("span",{style:`--loading-icon: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='25 25 50 50'%3E%3CanimateTransform attributeName='transform' type='rotate' dur='2s' keyTimes='0;1' repeatCount='indefinite' values='0;360'%3E%3C/animateTransform%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='currentColor' stroke-width='${e}' stroke-linecap='round'%3E%3Canimate attributeName='stroke-dasharray' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='1,200;90,200;1,200'%3E%3C/animate%3E%3Canimate attributeName='stroke-dashoffset' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='0;-35px;-125px'%3E%3C/animate%3E%3C/circle%3E%3C/svg%3E");--icon-size: ${sp(t)};display: inline-block;width: var(--icon-size);height: var(--icon-size);background-color: currentcolor;-webkit-mask-image: var(--loading-icon);mask-image: var(--loading-icon)`});return n?p("div",{style:`display: flex;align-items: center;justify-content: center;height: ${sp(i)}`},r):r};Mg.displayName="LoadingIcon";const sd=(t,{slots:e})=>e.default();var wn=Uint8Array,ws=Uint16Array,Ab=Int32Array,Tg=new wn([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Ag=new wn([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),wb=new wn([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),wg=function(t,e){for(var n=new ws(31),i=0;i<31;++i)n[i]=e+=1<<t[i-1];for(var r=new Ab(n[30]),i=1;i<30;++i)for(var s=n[i];s<n[i+1];++s)r[s]=s-n[i]<<5|i;return{b:n,r}},Cg=wg(Tg,2),Rg=Cg.b,Cb=Cg.r;Rg[28]=258,Cb[258]=28;var Rb=wg(Ag,0),Pb=Rb.b,Tu=new ws(32768);for(var Ct=0;Ct<32768;++Ct){var rr=(Ct&43690)>>1|(Ct&21845)<<1;rr=(rr&52428)>>2|(rr&13107)<<2,rr=(rr&61680)>>4|(rr&3855)<<4,Tu[Ct]=((rr&65280)>>8|(rr&255)<<8)>>1}var Ca=(function(t,e,n){for(var i=t.length,r=0,s=new ws(e);r<i;++r)t[r]&&++s[t[r]-1];var a=new ws(e);for(r=1;r<e;++r)a[r]=a[r-1]+s[r-1]<<1;var o;if(n){o=new ws(1<<e);var l=15-e;for(r=0;r<i;++r)if(t[r])for(var u=r<<4|t[r],c=e-t[r],f=a[t[r]-1]++<<c,d=f|(1<<c)-1;f<=d;++f)o[Tu[f]>>l]=u}else for(o=new ws(i),r=0;r<i;++r)t[r]&&(o[r]=Tu[a[t[r]-1]++]>>15-t[r]);return o}),eo=new wn(288);for(var Ct=0;Ct<144;++Ct)eo[Ct]=8;for(var Ct=144;Ct<256;++Ct)eo[Ct]=9;for(var Ct=256;Ct<280;++Ct)eo[Ct]=7;for(var Ct=280;Ct<288;++Ct)eo[Ct]=8;var Pg=new wn(32);for(var Ct=0;Ct<32;++Ct)Pg[Ct]=5;var Db=Ca(eo,9,1),Lb=Ca(Pg,5,1),_c=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},Wn=function(t,e,n){var i=e/8|0;return(t[i]|t[i+1]<<8)>>(e&7)&n},xc=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Ib=function(t){return(t+7)/8|0},Dg=function(t,e,n){return(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length),new wn(t.subarray(e,n))},Nb=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Fn=function(t,e,n){var i=new Error(e||Nb[t]);if(i.code=t,Error.captureStackTrace&&Error.captureStackTrace(i,Fn),!n)throw i;return i},Ub=function(t,e,n,i){var r=t.length,s=0;if(!r||e.f&&!e.l)return n||new wn(0);var a=!n,o=a||e.i!=2,l=e.i;a&&(n=new wn(r*3));var u=function(we){var Ge=n.length;if(we>Ge){var R=new wn(Math.max(Ge*2,we));R.set(n),n=R}},c=e.f||0,f=e.p||0,d=e.b||0,h=e.l,v=e.d,_=e.m,g=e.n,m=r*8;do{if(!h){c=Wn(t,f,1);var E=Wn(t,f+1,3);if(f+=3,E)if(E==1)h=Db,v=Lb,_=9,g=5;else if(E==2){var P=Wn(t,f,31)+257,D=Wn(t,f+10,15)+4,O=P+Wn(t,f+5,31)+1;f+=14;for(var y=new wn(O),M=new wn(19),L=0;L<D;++L)M[wb[L]]=Wn(t,f+L*3,7);f+=D*3;for(var U=_c(M),k=(1<<U)-1,z=Ca(M,U,1),L=0;L<O;){var X=z[Wn(t,f,k)];f+=X&15;var x=X>>4;if(x<16)y[L++]=x;else{var B=0,G=0;for(x==16?(G=3+Wn(t,f,3),f+=2,B=y[L-1]):x==17?(G=3+Wn(t,f,7),f+=3):x==18&&(G=11+Wn(t,f,127),f+=7);G--;)y[L++]=B}}var q=y.subarray(0,P),le=y.subarray(P);_=_c(q),g=_c(le),h=Ca(q,_,1),v=Ca(le,g,1)}else Fn(1);else{var x=Ib(f)+4,S=t[x-4]|t[x-3]<<8,A=x+S;if(A>r){l&&Fn(0);break}o&&u(d+S),n.set(t.subarray(x,A),d),e.b=d+=S,e.p=f=A*8,e.f=c;continue}if(f>m){l&&Fn(0);break}}o&&u(d+131072);for(var ge=(1<<_)-1,ye=(1<<g)-1,Oe=f;;Oe=f){var B=h[xc(t,f)&ge],Be=B>>4;if(f+=B&15,f>m){l&&Fn(0);break}if(B||Fn(2),Be<256)n[d++]=Be;else if(Be==256){Oe=f,h=null;break}else{var at=Be-254;if(Be>264){var L=Be-257,et=Tg[L];at=Wn(t,f,(1<<et)-1)+Rg[L],f+=et}var se=v[xc(t,f)&ye],F=se>>4;se||Fn(3),f+=se&15;var le=Pb[F];if(F>3){var et=Ag[F];le+=xc(t,f)&(1<<et)-1,f+=et}if(f>m){l&&Fn(0);break}o&&u(d+131072);var re=d+at;if(d<le){var oe=s-le,ae=Math.min(le,re);for(oe+d<0&&Fn(3);d<ae;++d)n[d]=i[oe+d]}for(;d<re;++d)n[d]=n[d-le]}}e.l=h,e.p=Oe,e.b=d,e.f=c,h&&(c=1,e.m=_,e.d=v,e.n=g)}while(!c);return d!=n.length&&a?Dg(n,0,d):n.subarray(0,d)},Ob=new wn(0),Fb=function(t,e){return((t[0]&15)!=8||t[0]>>4>7||(t[0]<<8|t[1])%31)&&Fn(6,"invalid zlib data"),(t[1]>>5&1)==1&&Fn(6,"invalid zlib data: "+(t[1]&32?"need":"unexpected")+" dictionary"),(t[1]>>3&4)+2};function Bb(t,e){return Ub(t.subarray(Fb(t),-4),{i:2},e,e)}var Au=typeof TextDecoder<"u"&&new TextDecoder,kb=0;try{Au.decode(Ob,{stream:!0}),kb=1}catch{}var Vb=function(t){for(var e="",n=0;;){var i=t[n++],r=(i>127)+(i>223)+(i>239);if(n+r>t.length)return{s:e,r:Dg(t,n-1)};r?r==3?(i=((i&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|i>>10,56320|i&1023)):r&1?e+=String.fromCharCode((i&31)<<6|t[n++]&63):e+=String.fromCharCode((i&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(i)}};function zb(t,e){{for(var n=new wn(t.length),i=0;i<t.length;++i)n[i]=t.charCodeAt(i);return n}for(var r=t.length,i=0;i<r;++i);}function Hb(t,e){var n;if(Au)return Au.decode(t);var i=Vb(t),r=i.s,n=i.r;return n.length&&Fn(8),r}const ap=t=>{const e=atob(t);return Hb(Bb(zb(e)))},ad=t=>typeof t<"u",el=t=>typeof t=="number",{isArray:qi}=Array,Fa=(t,e)=>xt(t)&&t.startsWith(e),Gb=(t,e)=>xt(t)&&t.endsWith(e),{entries:Qs}=Object,{keys:ii}=Object,od=t=>{if(t){if(typeof t=="number")return new Date(t);const e=Date.parse(t.toString());if(!Number.isNaN(e))return new Date(e)}return null},Vl=t=>Fa(t,"/")&&t[1]!=="/",Lg=[...new Array(6)].map((t,e)=>`[vp-content] h${e+1}`).join(","),Wb=(t,e=2)=>{if(e===!1)return[];const[n,i]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e,r=t.filter(a=>a.level>=n&&a.level<=i),s=[];e:for(let a=0;a<r.length;a++){const o=r[a];if(a===0)s.push(o);else{for(let l=a-1;l>=0;l--){const u=r[l];if(u.level<o.level){u.children.push(o);continue e}}s.push(o)}}return s},$b=(t,e=[])=>{let n;if(e.length){const i=t.cloneNode(!0);i.querySelectorAll(e.join(",")).forEach(r=>{r.remove()}),n=i.textContent||""}else n=t.textContent||"";return n.trim()},Xb=(t=Lg,e=[])=>Array.from(document.querySelectorAll(t)).filter(n=>n.id&&n.hasChildNodes()).map(n=>({element:n,title:$b(n,e),link:`#${n.id}`,slug:n.id,level:Number(n.tagName[1]),children:[]})),qb=({selector:t=Lg,levels:e=2,ignore:n=[]}={})=>Wb(Xb(t,n),e),Ig=t=>t.every(e=>e.type===Yt?!0:e.type===dn?e.children==null||qi(e.children)&&Ig(e.children):!1),Us=t=>t==null?!0:qi(t)?Ig(t):!1,bn=(t,e)=>{const n=(e?._instance??Qi())?.appContext.components;return n?t in n||xn(t)in n||qa(xn(t))in n:!1},bc="message-container";class ld{elements;constructor(){this.elements={}}static get containerElement(){let e=document.getElementById(bc);return e||(e=document.createElement("div"),e.id=bc,document.body.appendChild(e),e)}getElement(e){return this.elements[e]}pop(e,n=2e3,i=!0){const r=Date.now(),s=document.createElement("div");return s.className="message-item move-in",s.innerHTML=e,ld.containerElement.appendChild(s),this.elements[r]=s,i&&s.addEventListener("click",()=>{this.close(r)}),n>0&&setTimeout(()=>{this.close(r)},n),r}close(e){if(e){const n=this.elements[e];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.elements[e]})}else ii(this.elements).forEach(n=>{this.close(Number(n))})}destroy(){const e=document.getElementById(bc);e&&document.body.removeChild(e),this.elements={}}}const jb=(t={})=>{const e=qe([]);return er(n=>{e.value=n==="beforeUnmount"?[]:qb(rt(t))}),e},Yb=t=>{const e=xg();return $(()=>rt(t)[e.value]??{})},ea=Yb;function ta(t,e){return Bf()?(x_(t,e),!0):!1}const yc=new WeakMap,Kb=(...t)=>{var e;const n=t[0],i=(e=Qi())===null||e===void 0?void 0:e.proxy,r=i??Bf();if(r==null&&!u0())throw new Error("injectLocal must be called in setup");return r&&yc.has(r)&&n in yc.get(r)?yc.get(r)[n]:Rt(...t)},zl=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Zb=t=>t!=null,Jb=Object.prototype.toString,Qb=t=>Jb.call(t)==="[object Object]",ji=()=>{};function Ng(...t){if(t.length!==1)return Zs(...t);const e=t[0];return typeof e=="function"?$i(r0(()=>({get:e,set:ji}))):qe(e)}function cd(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const Ug=t=>t();function ey(t,e={}){let n,i,r=ji;const s=l=>{clearTimeout(l),r(),r=ji};let a;return l=>{const u=rt(t),c=rt(e.maxWait);return n&&s(n),u<=0||c!==void 0&&c<=0?(i&&(s(i),i=void 0),Promise.resolve(l())):new Promise((f,d)=>{r=e.rejectOnCancel?d:f,a=l,c&&!i&&(i=setTimeout(()=>{n&&s(n),i=void 0,f(a())},c)),n=setTimeout(()=>{i&&s(i),i=void 0,f(l())},u)})}}function ty(...t){let e=0,n,i=!0,r=ji,s,a,o,l,u;!Vt(t[0])&&typeof t[0]=="object"?{delay:a,trailing:o=!0,leading:l=!0,rejectOnCancel:u=!1}=t[0]:[a,o=!0,l=!0,u=!1]=t;const c=()=>{n&&(clearTimeout(n),n=void 0,r(),r=ji)};return d=>{const h=rt(a),v=Date.now()-e,_=()=>s=d();return c(),h<=0?(e=Date.now(),_()):(v>h?(e=Date.now(),(l||!i)&&_()):o&&(s=new Promise((g,m)=>{r=u?m:g,n=setTimeout(()=>{e=Date.now(),i=!0,g(_()),c()},Math.max(0,h-v))})),!l&&!n&&(n=setTimeout(()=>i=!0,h)),i=!1,s)}}function ny(t=Ug,e={}){const{initialState:n="active"}=e,i=Ng(n==="active");function r(){i.value=!1}function s(){i.value=!0}const a=(...o)=>{i.value&&t(...o)};return{isActive:$i(i),pause:r,resume:s,eventFilter:a}}function iy(t){let e;function n(){return e||(e=t()),e}return n.reset=async()=>{const i=e;e=void 0,i&&await i},n}function op(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function Ra(t){return Array.isArray(t)?t:[t]}function Og(t){return Qi()}function Fg(t,e=200,n={}){return cd(ey(e,n),t)}function Bg(t,e=200,n=!1,i=!0,r=!1){return cd(ty(e,n,i,r),t)}function ry(t,e,n={}){const{eventFilter:i=Ug,...r}=n;return Dt(t,cd(i,e),r)}function sy(t,e,n={}){const{eventFilter:i,initialState:r="active",...s}=n,{eventFilter:a,pause:o,resume:l,isActive:u}=ny(i,{initialState:r});return{stop:ry(t,e,{...s,eventFilter:a}),pause:o,resume:l,isActive:u}}const ay=sy;function na(t,e=!0,n){Og()?vt(t,n):e?t():Ei(t)}function oy(t,e){Og()&&Ji(t,e)}function ly(t,e,n={}){const{immediate:i=!0,immediateCallback:r=!1}=n,s=Ye(!1);let a;function o(){a&&(clearTimeout(a),a=void 0)}function l(){s.value=!1,o()}function u(...c){r&&t(),o(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=void 0,t(...c)},rt(e))}return i&&(s.value=!0,zl&&u()),ta(l),{isPending:k_(s),start:u,stop:l}}function Ba(t=!1,e={}){const{truthyValue:n=!0,falsyValue:i=!1}=e,r=Vt(t),s=Ye(t);function a(o){if(arguments.length)return s.value=o,s.value;{const l=rt(n);return s.value=s.value===l?rt(i):l,s.value}}return r?a:[s,a]}function bi(t,e,n){return Dt(t,e,{...n,immediate:!0})}const Zt=zl?window:void 0,kg=zl?window.document:void 0,Vg=zl?window.navigator:void 0;function Pn(t){var e;const n=rt(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function lt(...t){const e=(i,r,s,a)=>(i.addEventListener(r,s,a),()=>i.removeEventListener(r,s,a)),n=$(()=>{const i=Ra(rt(t[0])).filter(r=>r!=null);return i.every(r=>typeof r!="string")?i:void 0});return bi(()=>{var i,r;return[(i=(r=n.value)===null||r===void 0?void 0:r.map(s=>Pn(s)))!==null&&i!==void 0?i:[Zt].filter(s=>s!=null),Ra(rt(n.value?t[1]:t[0])),Ra(Jn(n.value?t[2]:t[1])),rt(n.value?t[3]:t[2])]},([i,r,s,a],o,l)=>{if(!i?.length||!r?.length||!s?.length)return;const u=Qb(a)?{...a}:a,c=i.flatMap(f=>r.flatMap(d=>s.map(h=>e(f,d,h,u))));l(()=>{c.forEach(f=>f())})},{flush:"post"})}function cy(){const t=Ye(!1),e=Qi();return e&&vt(()=>{t.value=!0},e),t}function ia(t){const e=cy();return $(()=>(e.value,!!t()))}function zg(t,e,n={}){const{window:i=Zt,...r}=n;let s;const a=ia(()=>i&&"MutationObserver"in i),o=()=>{s&&(s.disconnect(),s=void 0)},l=Dt($(()=>{const f=Ra(rt(t)).map(Pn).filter(Zb);return new Set(f)}),f=>{o(),a.value&&f.size&&(s=new MutationObserver(e),f.forEach(d=>s.observe(d,r)))},{immediate:!0,flush:"post"}),u=()=>s?.takeRecords(),c=()=>{l(),o()};return ta(c),{isSupported:a,stop:c,takeRecords:u}}function uy(t,e,n={}){const{window:i=Zt,document:r=i?.document,flush:s="sync"}=n;if(!i||!r)return ji;let a;const o=c=>{a?.(),a=c},l=Gf(()=>{const c=Pn(t);if(c){const{stop:f}=zg(r,d=>{d.map(h=>[...h.removedNodes]).flat().some(h=>h===c||h.contains(c))&&e(d)},{window:i,childList:!0,subtree:!0});o(f)}},{flush:s}),u=()=>{l(),o()};return ta(u),u}const fy=Symbol("vueuse-ssr-width");function dy(){const t=u0()?Kb(fy,null):null;return typeof t=="number"?t:void 0}function ud(t,e={}){const{window:n=Zt,ssrWidth:i=dy()}=e,r=ia(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),s=Ye(typeof i=="number"),a=Ye(),o=Ye(!1),l=u=>{o.value=u.matches};return Gf(()=>{if(s.value){s.value=!r.value,o.value=rt(t).split(",").some(u=>{const c=u.includes("not all"),f=u.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=u.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let h=!!(f||d);return f&&h&&(h=i>=op(f[1])),d&&h&&(h=i<=op(d[1])),c?!h:h});return}r.value&&(a.value=n.matchMedia(rt(t)),o.value=a.value.matches)}),lt(a,"change",l,{passive:!0}),$(()=>o.value)}function lp(t,e={}){const{controls:n=!1,navigator:i=Vg}=e,r=ia(()=>i&&"permissions"in i),s=Ye(),a=typeof t=="string"?{name:t}:t,o=Ye(),l=()=>{var c,f;o.value=(c=(f=s.value)===null||f===void 0?void 0:f.state)!==null&&c!==void 0?c:"prompt"};lt(s,"change",l,{passive:!0});const u=iy(async()=>{if(r.value){if(!s.value)try{s.value=await i.permissions.query(a)}catch{s.value=void 0}finally{l()}if(n)return it(s.value)}});return u(),n?{state:o,isSupported:r,query:u}:o}function hy(t={}){const{navigator:e=Vg,read:n=!1,source:i,copiedDuring:r=1500,legacy:s=!1}=t,a=ia(()=>e&&"clipboard"in e),o=lp("clipboard-read"),l=lp("clipboard-write"),u=$(()=>a.value||s),c=Ye(""),f=Ye(!1),d=ly(()=>f.value=!1,r,{immediate:!1});async function h(){let E=!(a.value&&m(o.value));if(!E)try{c.value=await e.clipboard.readText()}catch{E=!0}E&&(c.value=g())}u.value&&n&&lt(["copy","cut"],h,{passive:!0});async function v(E=rt(i)){if(u.value&&E!=null){let x=!(a.value&&m(l.value));if(!x)try{await e.clipboard.writeText(E)}catch{x=!0}x&&_(E),c.value=E,f.value=!0,d.start()}}function _(E){const x=document.createElement("textarea");x.value=E,x.style.position="absolute",x.style.opacity="0",x.setAttribute("readonly",""),document.body.appendChild(x),x.select(),document.execCommand("copy"),x.remove()}function g(){var E,x,S;return(E=(x=document)===null||x===void 0||(S=x.getSelection)===null||S===void 0||(S=S.call(x))===null||S===void 0?void 0:S.toString())!==null&&E!==void 0?E:""}function m(E){return E==="granted"||E==="prompt"}return{isSupported:u,text:$i(c),copied:$i(f),copy:v}}const Eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mo="__vueuse_ssr_handlers__",py=my();function my(){return Mo in Eo||(Eo[Mo]=Eo[Mo]||{}),Eo[Mo]}function gy(t,e){return py[t]||e}function vy(t){return ud("(prefers-color-scheme: dark)",t)}function _y(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const xy={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},cp="vueuse-storage";function ns(t,e,n,i={}){var r;const{flush:s="pre",deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:u=!1,shallow:c,window:f=Zt,eventFilter:d,onError:h=z=>{console.error(z)},initOnMounted:v}=i,_=(c?Ye:qe)(typeof e=="function"?e():e),g=$(()=>rt(t));if(!n)try{n=gy("getDefaultStorage",()=>Zt?.localStorage)()}catch(z){h(z)}if(!n)return _;const m=rt(e),E=_y(m),x=(r=i.serializer)!==null&&r!==void 0?r:xy[E],{pause:S,resume:A}=ay(_,z=>M(z),{flush:s,deep:a,eventFilter:d});Dt(g,()=>U(),{flush:s});let P=!1;const D=z=>{v&&!P||U(z)},O=z=>{v&&!P||k(z)};f&&o&&(n instanceof Storage?lt(f,"storage",D,{passive:!0}):lt(f,cp,O)),v?na(()=>{P=!0,U()}):U();function y(z,X){if(f){const B={key:g.value,oldValue:z,newValue:X,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",B):new CustomEvent(cp,{detail:B}))}}function M(z){try{const X=n.getItem(g.value);if(z==null)y(X,null),n.removeItem(g.value);else{const B=x.write(z);X!==B&&(n.setItem(g.value,B),y(X,B))}}catch(X){h(X)}}function L(z){const X=z?z.newValue:n.getItem(g.value);if(X==null)return l&&m!=null&&n.setItem(g.value,x.write(m)),m;if(!z&&u){const B=x.read(X);return typeof u=="function"?u(B,m):E==="object"&&!Array.isArray(B)?{...m,...B}:B}else return typeof X!="string"?X:x.read(X)}function U(z){if(!(z&&z.storageArea!==n)){if(z&&z.key==null){_.value=m;return}if(!(z&&z.key!==g.value)){S();try{const X=x.write(_.value);(z===void 0||z?.newValue!==X)&&(_.value=L(z))}catch(X){h(X)}finally{z?Ei(A):A()}}}}function k(z){U(z.detail)}return _}function fd(t,e,n={}){const{window:i=Zt,...r}=n;let s;const a=ia(()=>i&&"ResizeObserver"in i),o=()=>{s&&(s.disconnect(),s=void 0)},l=Dt($(()=>{const c=rt(t);return Array.isArray(c)?c.map(f=>Pn(f)):[Pn(c)]}),c=>{if(o(),a.value&&i){s=new ResizeObserver(e);for(const f of c)f&&s.observe(f,r)}},{immediate:!0,flush:"post"}),u=()=>{o(),l()};return ta(u),{isSupported:a,stop:u}}function by(t,e={}){const{delayEnter:n=0,delayLeave:i=0,triggerOnRemoval:r=!1,window:s=Zt}=e,a=Ye(!1);let o;const l=u=>{const c=u?n:i;o&&(clearTimeout(o),o=void 0),c?o=setTimeout(()=>a.value=u,c):a.value=u};return s&&(lt(t,"mouseenter",()=>l(!0),{passive:!0}),lt(t,"mouseleave",()=>l(!1),{passive:!0}),r&&uy($(()=>Pn(t)),()=>l(!1))),a}function yy(t,e={width:0,height:0},n={}){const{window:i=Zt,box:r="content-box"}=n,s=$(()=>{var f;return(f=Pn(t))===null||f===void 0||(f=f.namespaceURI)===null||f===void 0?void 0:f.includes("svg")}),a=Ye(e.width),o=Ye(e.height),{stop:l}=fd(t,([f])=>{const d=r==="border-box"?f.borderBoxSize:r==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(i&&s.value){const h=Pn(t);if(h){const v=h.getBoundingClientRect();a.value=v.width,o.value=v.height}}else if(d){const h=Ra(d);a.value=h.reduce((v,{inlineSize:_})=>v+_,0),o.value=h.reduce((v,{blockSize:_})=>v+_,0)}else a.value=f.contentRect.width,o.value=f.contentRect.height},n);na(()=>{const f=Pn(t);f&&(a.value="offsetWidth"in f?f.offsetWidth:e.width,o.value="offsetHeight"in f?f.offsetHeight:e.height)});const u=Dt(()=>Pn(t),f=>{a.value=f?e.width:0,o.value=f?e.height:0});function c(){l(),u()}return{width:a,height:o,stop:c}}const up=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Hl(t,e={}){const{document:n=kg,autoExit:i=!1}=e,r=$(()=>{var E;return(E=Pn(t))!==null&&E!==void 0?E:n?.documentElement}),s=Ye(!1),a=$(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(E=>n&&E in n||r.value&&E in r.value)),o=$(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(E=>n&&E in n||r.value&&E in r.value)),l=$(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(E=>n&&E in n||r.value&&E in r.value)),u=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(E=>n&&E in n),c=ia(()=>r.value&&n&&a.value!==void 0&&o.value!==void 0&&l.value!==void 0),f=()=>u?n?.[u]===r.value:!1,d=()=>{if(l.value){if(n&&n[l.value]!=null)return n[l.value];{const E=r.value;if(E?.[l.value]!=null)return!!E[l.value]}}return!1};async function h(){if(!(!c.value||!s.value)){if(o.value)if(n?.[o.value]!=null)await n[o.value]();else{const E=r.value;E?.[o.value]!=null&&await E[o.value]()}s.value=!1}}async function v(){if(!c.value||s.value)return;d()&&await h();const E=r.value;a.value&&E?.[a.value]!=null&&(await E[a.value](),s.value=!0)}async function _(){await(s.value?h():v())}const g=()=>{const E=d();(!E||E&&f())&&(s.value=E)},m={capture:!1,passive:!0};return lt(n,up,g,m),lt(()=>Pn(r),up,g,m),na(g,!1),i&&ta(h),{isSupported:c,isFullscreen:s,enter:v,exit:h,toggle:_}}function Sc(t){return typeof Window<"u"&&t instanceof Window?t.document.documentElement:typeof Document<"u"&&t instanceof Document?t.documentElement:t}const fp=1;function Sy(t,e={}){const{throttle:n=0,idle:i=200,onStop:r=ji,onScroll:s=ji,offset:a={left:0,right:0,top:0,bottom:0},observe:o={mutation:!1},eventListenerOptions:l={capture:!1,passive:!0},behavior:u="auto",window:c=Zt,onError:f=y=>{console.error(y)}}=e,d=typeof o=="boolean"?{mutation:o}:o,h=Ye(0),v=Ye(0),_=$({get(){return h.value},set(y){m(y,void 0)}}),g=$({get(){return v.value},set(y){m(void 0,y)}});function m(y,M){var L,U,k,z;if(!c)return;const X=rt(t);if(!X)return;(L=X instanceof Document?c.document.body:X)===null||L===void 0||L.scrollTo({top:(U=rt(M))!==null&&U!==void 0?U:g.value,left:(k=rt(y))!==null&&k!==void 0?k:_.value,behavior:rt(u)});const B=(X==null||(z=X.document)===null||z===void 0?void 0:z.documentElement)||X?.documentElement||X;_!=null&&(h.value=B.scrollLeft),g!=null&&(v.value=B.scrollTop)}const E=Ye(!1),x=Zr({left:!0,right:!1,top:!0,bottom:!1}),S=Zr({left:!1,right:!1,top:!1,bottom:!1}),A=y=>{E.value&&(E.value=!1,S.left=!1,S.right=!1,S.top=!1,S.bottom=!1,r(y))},P=Fg(A,n+i),D=y=>{var M;if(!c)return;const L=(y==null||(M=y.document)===null||M===void 0?void 0:M.documentElement)||y?.documentElement||Pn(y),{display:U,flexDirection:k,direction:z}=c.getComputedStyle(L),X=z==="rtl"?-1:1,B=L.scrollLeft;S.left=B<h.value,S.right=B>h.value;const G=Math.abs(B*X)<=(a.left||0),q=Math.abs(B*X)+L.clientWidth>=L.scrollWidth-(a.right||0)-fp;U==="flex"&&k==="row-reverse"?(x.left=q,x.right=G):(x.left=G,x.right=q),h.value=B;let le=L.scrollTop;y===c.document&&!le&&(le=c.document.body.scrollTop),S.top=le<v.value,S.bottom=le>v.value;const ge=Math.abs(le)<=(a.top||0),ye=Math.abs(le)+L.clientHeight>=L.scrollHeight-(a.bottom||0)-fp;U==="flex"&&k==="column-reverse"?(x.top=ye,x.bottom=ge):(x.top=ge,x.bottom=ye),v.value=le},O=y=>{var M;c&&(D((M=y.target.documentElement)!==null&&M!==void 0?M:y.target),E.value=!0,P(y),s(y))};return lt(t,"scroll",n?Bg(O,n,!0,!1):O,l),na(()=>{try{const y=rt(t);if(!y)return;D(y)}catch(y){f(y)}}),d?.mutation&&t!=null&&t!==c&&t!==document&&zg(t,()=>{const y=rt(t);y&&D(y)},{attributes:!0,childList:!0,subtree:!0}),lt(t,"scrollend",A,l),{x:_,y:g,isScrolling:E,arrivedState:x,directions:S,measure(){const y=rt(t);c&&y&&D(y)}}}function Ey(t,e,n={}){const{window:i=Zt}=n;return ns(t,e,i?.localStorage,n)}function My(t={}){const{window:e=Zt}=t;if(!e)return Ye(["en"]);const n=e.navigator,i=Ye(n.languages);return lt(e,"languagechange",()=>{i.value=n.languages},{passive:!0}),i}function Ty(t,e=ji,n={}){const{immediate:i=!0,manual:r=!1,type:s="text/javascript",async:a=!0,crossOrigin:o,referrerPolicy:l,noModule:u,defer:c,document:f=kg,attrs:d={},nonce:h=void 0}=n,v=Ye(null);let _=null;const g=x=>new Promise((S,A)=>{const P=M=>(v.value=M,S(M),M);if(!f){S(!1);return}let D=!1,O=f.querySelector(`script[src="${rt(t)}"]`);O?O.hasAttribute("data-loaded")&&P(O):(O=f.createElement("script"),O.type=s,O.async=a,O.src=rt(t),c&&(O.defer=c),o&&(O.crossOrigin=o),u&&(O.noModule=u),l&&(O.referrerPolicy=l),h&&(O.nonce=h),Object.entries(d).forEach(([M,L])=>O?.setAttribute(M,L)),D=!0);const y={passive:!0};lt(O,"error",M=>A(M),y),lt(O,"abort",M=>A(M),y),lt(O,"load",()=>{O.setAttribute("data-loaded","true"),e(O),P(O)},y),D&&(O=f.head.appendChild(O)),x||P(O)}),m=(x=!0)=>(_||(_=g(x)),_),E=()=>{if(!f)return;_=null,v.value&&(v.value=null);const x=f.querySelector(`script[src="${rt(t)}"]`);x&&f.head.removeChild(x)};return i&&!r&&na(m),r||oy(E),{scriptTag:v,load:m,unload:E}}const Ec=new WeakMap;function dd(t,e=!1){const n=Ye(e);let i="";Dt(Ng(t),a=>{const o=Sc(rt(a));if(o){const l=o;if(Ec.get(l)||Ec.set(l,l.style.overflow),l.style.overflow!=="hidden"&&(i=l.style.overflow),l.style.overflow==="hidden")return n.value=!0;if(n.value)return l.style.overflow="hidden"}},{immediate:!0});const r=()=>{const a=Sc(rt(t));!a||n.value||(a.style.overflow="hidden",n.value=!0)},s=()=>{const a=Sc(rt(t));!a||!n.value||(a.style.overflow=i,Ec.delete(a),n.value=!1)};return ta(s),$({get(){return n.value},set(a){a?r():s()}})}function hd(t,e,n={}){const{window:i=Zt}=n;return ns(t,e,i?.sessionStorage,n)}function Ay(t={}){const{window:e=Zt,...n}=t;return Sy(e,n)}function wy(t={}){const{window:e=Zt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:a="inner"}=t,o=Ye(n),l=Ye(i),u=()=>{if(e)if(a==="outer")o.value=e.outerWidth,l.value=e.outerHeight;else if(a==="visual"&&e.visualViewport){const{width:f,height:d,scale:h}=e.visualViewport;o.value=Math.round(f*h),l.value=Math.round(d*h)}else s?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};u(),na(u);const c={passive:!0};return lt("resize",u,c),e&&a==="visual"&&e.visualViewport&&lt(e.visualViewport,"resize",u,c),r&&Dt(ud("(orientation: portrait)"),()=>u()),{width:o,height:l}}const Hg=(t=!0)=>{const{frontmatter:e,page:n}=ts();return $(()=>e.value.contributors===!1||!rt(t)?[]:n.value.git.contributors??[])};var dp={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新"}};const Cy=typeof dp>"u"?{}:dp,Gg=()=>ea(Cy),Ry=(t=!0)=>{const{lang:e,page:n}=ts(),i=Gg();return $(()=>{if(!rt(t))return null;const r=n.value.git?.updatedTime??n.value.git?.changelog?.[0].time;if(!r)return null;const s=new Date(r),a=new Intl.DateTimeFormat(e.value,{dateStyle:"short",timeStyle:"short"}).format(r);return{date:s,text:a,iso:s.toISOString(),locale:i.value.latestUpdateAt}})},Py=({level:t=2,text:e,anchor:n})=>p(`h${t||2}`,{id:n,tabindex:"-1"},p("a",{href:`#${n}`,class:"header-anchor"},p("span",e))),Dy=({name:t,url:e,avatar:n})=>p(e?"a":"span",{href:e,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[n?p("img",{src:n,alt:"",class:"vp-contributor-avatar"}):null,p("span",{class:"vp-contributor-name"},t)]),Ly=xe({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(t){const e=Hg(),n=Gg();return()=>e.value.length?[p(Py,{level:t.headerLevel,anchor:"doc-contributors",text:t.title||n.value.contributors}),p("div",{class:"vp-contributors"},e.value.map(i=>p(Dy,i)))]:null}}),Iy={enhance:({app:t})=>{t.component("GitContributors",Ly)}},Ny=Object.freeze(Object.defineProperty({__proto__:null,default:Iy},Symbol.toStringTag,{value:"Module"})),Uy=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Oy=ai({enhance:({app:t})=>{}}),Fy=Object.freeze(Object.defineProperty({__proto__:null,default:Oy},Symbol.toStringTag,{value:"Module"})),By=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),ky=ai({setup(){lt("beforeprint",()=>{document.querySelectorAll("details").forEach(t=>{t.open=!0})},{passive:!0})}}),Vy=Object.freeze(Object.defineProperty({__proto__:null,default:ky},Symbol.toStringTag,{value:"Module"})),zy="VUEPRESS_CODE_TAB_STORE",To=ns(zy,{}),Hy=xe({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(t,{slots:e}){let n=t.data.map(()=>_0());const i=qe(t.active),r=Ye([]),s=()=>{t.tabId&&(To.value[t.tabId]=t.data[i.value].id)},a=(c=i.value)=>{i.value=c<r.value.length-1?c+1:0,r.value[i.value].focus()},o=(c=i.value)=>{i.value=c>0?c-1:r.value.length-1,r.value[i.value].focus()},l=(c,f)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),i.value=f):c.key==="ArrowRight"?(c.preventDefault(),a()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),t.tabId&&(To.value[t.tabId]=t.data[i.value].id)},u=()=>{if(t.tabId){const c=t.data.findIndex(({id:f})=>To.value[t.tabId]===f);if(c!==-1)return c}return t.active};return vt(()=>{i.value=u(),Dt(()=>t.tabId&&To.value[t.tabId],(c,f)=>{if(t.tabId&&c!==f){const d=t.data.findIndex(({id:h})=>h===c);d!==-1&&(i.value=d)}})}),()=>t.data.length?p("div",{class:"vp-code-tabs"},[p("div",{class:"vp-code-tabs-nav",role:"tablist"},t.data.map(({id:c},f)=>{const d=f===i.value;return p("button",{type:"button",ref:h=>{h&&(r.value[f]=h)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":n[f],"aria-selected":d,onClick:()=>{i.value=f,s()},onKeydown:h=>{l(h,f)}},e[`title${f}`]({value:c,isActive:d}))})),t.data.map(({id:c},f)=>{const d=f===i.value;return p("div",{class:["vp-code-tab",{active:d}],id:n[f],role:"tabpanel","aria-expanded":d},[p("div",{class:"vp-code-tab-title"},e[`title${f}`]({value:c,isActive:d})),e[`tab${f}`]({value:c,isActive:d})])})]):null}}),Gy="VUEPRESS_TAB_STORE",Mc=ns(Gy,{}),Wy=xe({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(t,{slots:e}){let n=t.data.map(()=>_0());const i=qe(t.active),r=Ye([]),s=()=>{t.tabId&&(Mc.value[t.tabId]=t.data[i.value].id)},a=(c=i.value)=>{i.value=c<r.value.length-1?c+1:0,r.value[i.value].focus()},o=(c=i.value)=>{i.value=c>0?c-1:r.value.length-1,r.value[i.value].focus()},l=(c,f)=>{c.key===" "||c.key==="Enter"?(c.preventDefault(),i.value=f):c.key==="ArrowRight"?(c.preventDefault(),a()):c.key==="ArrowLeft"&&(c.preventDefault(),o()),s()},u=()=>{if(t.tabId){const c=t.data.findIndex(({id:f})=>Mc.value[t.tabId]===f);if(c!==-1)return c}return t.active};return vt(()=>{i.value=u(),Dt(()=>t.tabId&&Mc.value[t.tabId],(c,f)=>{if(t.tabId&&c!==f){const d=t.data.findIndex(({id:h})=>h===c);d!==-1&&(i.value=d)}})}),()=>t.data.length?p("div",{class:"vp-tabs"},[p("div",{class:"vp-tabs-nav",role:"tablist"},t.data.map(({id:c},f)=>{const d=f===i.value;return p("button",{type:"button",ref:h=>{h&&(r.value[f]=h)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":n[f],"aria-selected":d,onClick:()=>{i.value=f,s()},onKeydown:h=>{l(h,f)}},e[`title${f}`]({value:c,isActive:d}))})),t.data.map(({id:c},f)=>{const d=f===i.value;return p("div",{class:["vp-tab",{active:d}],id:n[f],role:"tabpanel","aria-expanded":d},[p("div",{class:"vp-tab-title"},e[`title${f}`]({value:c,isActive:d})),e[`tab${f}`]({value:c,isActive:d})])})]):null}}),$y={enhance:({app:t})=>{t.component("CodeTabs",Hy),t.component("Tabs",Wy)}},Xy=Object.freeze(Object.defineProperty({__proto__:null,default:$y},Symbol.toStringTag,{value:"Module"})),qy='<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>',jy='<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>';var Yy={useBabel:!1,jsLib:[],cssLib:[],codepenLayout:"left",codepenEditors:"101",babel:"https://unpkg.com/@babel/standalone/babel.min.js",vue:"https://unpkg.com/vue/dist/vue.global.prod.js",react:"https://unpkg.com/react/umd/react.production.min.js",reactDOM:"https://unpkg.com/react-dom/umd/react-dom.production.min.js"};const Tc=Yy,hp={html:{types:["html","slim","haml","md","markdown","vue"],map:{html:"none",vue:"none",md:"markdown"}},js:{types:["js","javascript","coffee","coffeescript","ts","typescript","ls","livescript"],map:{js:"none",javascript:"none",coffee:"coffeescript",ls:"livescript",ts:"typescript"}},css:{types:["css","less","sass","scss","stylus","styl"],map:{css:"none",styl:"stylus"}}},Ky=(t,e,n)=>{const i=document.createElement(t);return Tr(e)&&ii(e).forEach(r=>{if(r.indexOf("data"))i[r]=e[r];else{const s=r.replace("data","");i.dataset[s]=e[r]}}),i},pd=t=>({...Tc,...t,jsLib:[...new Set([Tc.jsLib,t.jsLib??[]].flat())],cssLib:[...new Set([Tc.cssLib,t.cssLib??[]].flat())]}),Os=(t,e)=>{if(ad(t[e]))return t[e];const n=new Promise(i=>{const r=document.createElement("script");r.src=e,document.querySelector("body")?.append(r),r.addEventListener("load",()=>{i()})});return t[e]=n,n},Zy=(t,e)=>{if(e.css&&[...t.childNodes].every(n=>n.nodeName!=="STYLE")){const n=Ky("style",{innerHTML:e.css});t.append(n)}},Jy=(t,e,n)=>{const i=n.getScript();if(i&&[...e.childNodes].every(r=>r.nodeName!=="SCRIPT")){const r=document.createElement("script");r.append(document.createTextNode(`{const document=window.document.querySelector('#${t} .vp-code-demo-display').shadowRoot;
${i}}`)),e.append(r)}},Qy=["html","js","css"],eS=t=>{const e=ii(t),n={html:[],js:[],css:[],isLegal:!1};return Qy.forEach(i=>{const r=e.filter(s=>hp[i].types.includes(s));if(r.length>0){const[s]=r;n[i]=[t[s].replaceAll(/^\n|\n$/g,""),hp[i].map[s]??s]}}),n.isLegal=(n.html.length===0||n.html[1]==="none")&&(n.js.length===0||n.js[1]==="none")&&(n.css.length===0||n.css[1]==="none"),n},Wg=t=>t.replaceAll(String.raw`<br \/>`,"<br>").replaceAll(/<((\S+)[^<]*?)\s+\/>/g,"<$1></$2>"),$g=t=>`<div id="app">
${Wg(t)}
</div>`,tS=t=>`${t.replace("export default ","const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/,"")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`,nS=t=>t.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u,"Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u,"Vue.createApp({$1}).mount('#app')").trim(),Xg=t=>`(function(exports){var module={};module.exports=exports;${t};return module.exports.__esModule?exports.default:module.exports;})({})`,iS=(t,e)=>{const n=pd(e),i=t.js[0]??"";return{...n,html:Wg(t.html[0]??""),js:i,css:t.css[0]??"",isLegal:t.isLegal,getScript:()=>n.useBabel?window.Babel?.transform(i,{presets:["es2015"]})?.code??"":i}},rS=/<template>([\s\S]+)<\/template>/u,sS=/<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u,aS=/<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u,oS=(t,e)=>{const n=pd(e),i=t.html[0]??"",r=rS.exec(i),s=sS.exec(i),a=aS.exec(i),o=r?.[1].replaceAll(/^\n|\n$/g,"")??"",[l="",u=""]=s?[s[4].replaceAll(/^\n|\n$/g,""),s[3]]:[],[c="",f=""]=a?[a[4].replaceAll(/^\n|\n$/g,""),a[3]]:[],d=u===""&&(f===""||f==="css");return{...n,html:$g(o),js:nS(l),css:c,isLegal:d,jsLib:[n.vue,...n.jsLib],getScript:()=>{const h=e.useBabel?window.Babel?.transform(l,{presets:["es2015"]})?.code??"":l.replace(/export\s+default/u,"return");return`const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${Xg(h)};appOptions.template=\`${o.replace("`",'\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`}}},lS=(t,e)=>{const n=pd(e),i=t.js[0]??"";return{...n,html:$g(""),js:tS(i),css:t.css[0]??t.js[0]?.replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/,"$1").trim()??"",isLegal:t.isLegal,jsLib:[n.react,n.reactDOM,...n.jsLib],jsx:!0,getScript:()=>{const r=window.Babel?.transform(i,{presets:["es2015","react"]})?.code??"";return`window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${Xg(r)}))`}}},Fs={},cS=async t=>{await Promise.all([Os(Fs,t.babel),Os(Fs,t.react),Os(Fs,t.reactDOM)])},uS=async t=>{const e=[Os(Fs,t.vue)];t.useBabel&&e.push(Os(Fs,t.babel)),await Promise.all(e)},fS=t=>t.useBabel?Os(Fs,t.babel):Promise.resolve();var dS=xe({name:"CodeDemo",props:{id:{type:String,required:!0},type:{type:String,default:"normal"},title:String,config:String,code:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const[n,i]=Ba(!1),r=Ye(),s=Ye(),a=qe("0"),o=qe(!1),l=$(()=>JSON.parse(t.config?ap(t.config):"{}")),u=$(()=>{const _=JSON.parse(ap(t.code));return eS(_)}),c=$(()=>t.type==="react"?lS(u.value,l.value):t.type==="vue"?oS(u.value,l.value):iS(u.value,l.value)),f=$(()=>c.value.isLegal),d=(_=!1)=>{const g=r.value.attachShadow({mode:"open"}),m=document.createElement("div");m.classList.add("code-demo-app"),g.append(m),f.value?(_&&(m.innerHTML=c.value.html),Zy(g,c.value),Jy(t.id,g,c.value),a.value="0"):a.value="auto",o.value=!0},h=async()=>{switch(t.type){case"react":{await cS(c.value),d();break}case"vue":{await uS(c.value),d();break}default:await fS(c.value),d(!0)}};let v=null;return lt("beforeprint",()=>{i(!0)}),lt("afterprint",()=>{v!==null&&i(v),v=null}),fd(s,()=>{n.value&&(a.value=`${s.value.clientHeight+14}px`)}),vt(async()=>{await h()}),()=>p("div",{class:"vp-container vp-code-demo",id:t.id},[p("div",{class:"vp-container-header"},[c.value.isLegal?p("button",{type:"button",title:"toggle",class:["vp-code-demo-toggle-button",n.value?"down":"end"],onClick:()=>{a.value=n.value?"0":`${s.value.clientHeight+14}px`,i()}}):null,t.title?p("span",{class:"vp-container-title"},decodeURIComponent(t.title)):null,c.value.isLegal&&(c.value.jsfiddle??!0)?p("form",{class:"code-demo-jsfiddle",target:"_blank",action:"https://jsfiddle.net/api/post/library/pure/",method:"post"},[p("input",{type:"hidden",name:"html",value:c.value.html}),p("input",{type:"hidden",name:"js",value:c.value.js}),p("input",{type:"hidden",name:"css",value:c.value.css}),p("input",{type:"hidden",name:"wrap",value:"1"}),p("input",{type:"hidden",name:"panel_js",value:"3"}),p("input",{type:"hidden",name:"resources",value:[...c.value.cssLib,...c.value.jsLib].join(",")}),p("button",{type:"submit",class:"jsfiddle-button",innerHTML:jy,"aria-label":"JSFiddle","data-balloon-pos":"down"})]):null,!c.value.isLegal||(c.value.codepen??!0)?p("form",{class:"code-demo-codepen",target:"_blank",action:"https://codepen.io/pen/define",method:"post"},[p("input",{type:"hidden",name:"data",value:JSON.stringify({html:c.value.html,js:c.value.js,css:c.value.css,js_external:c.value.jsLib.join(";"),css_external:c.value.cssLib.join(";"),layout:c.value.codepenLayout,html_pre_processor:u.value.html[1]??"none",js_pre_processor:u.value.js[1]??(c.value.jsx?"babel":"none"),css_pre_processor:u.value.css[1]??"none",editors:c.value.codepenEditors})}),p("button",{type:"submit",innerHTML:qy,class:"codepen-button","aria-label":"Codepen","data-balloon-pos":"down"})]):null]),o.value?null:p(Mg,{class:"vp-code-demo-loading"}),p("div",{ref:r,class:"vp-code-demo-display",style:{display:f.value&&o.value?"block":"none"}}),p("div",{class:"vp-code-demo-code-wrapper",style:{height:a.value}},p("div",{ref:s,class:"vp-code-demo-codes"},e.default()))])}}),hS=xe({name:"MdDemo",props:{id:{type:String,required:!0},title:String},slots:Object,setup(t,{slots:e}){const[n,i]=Ba(!1),r=Ye(),s=qe("0");let a=null;return lt("beforeprint",()=>{i(!0)}),lt("afterprint",()=>{a!==null&&i(a),a=null}),fd(r,()=>{n.value&&(s.value=`${r.value.clientHeight+14}px`)}),()=>p("div",{class:"vp-container vp-md-demo",id:t.id},[p("div",{class:"vp-container-header"},[p("button",{type:"button",title:"toggle",class:["vp-md-demo-toggle-button",n.value?"down":"end"],onClick:()=>{s.value=n.value?"0":`${r.value.clientHeight+14}px`,i()}}),t.title?p("div",{class:"vp-container-title"},decodeURIComponent(t.title)):null]),p("div",{class:"vp-md-demo-display"},e.default()),p("div",{class:"vp-md-demo-code-wrapper",style:{height:s.value}},p("div",{ref:r,class:"vp-md-demo-codes"},e.code()))])}});const pS={enhance:({app:t})=>{t.component("CodeDemo",dS),t.component("MdDemo",hS)}},mS=Object.freeze(Object.defineProperty({__proto__:null,default:pS},Symbol.toStringTag,{value:"Module"})),gS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),vS=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),_S=JSON.parse('{"encrypt":{"config":{"/demo/encrypt.html":{"tokens":["$2b$10$oZDt3wQPDtasHc3cXYqjX.ZLtsITmgrRoUGZoP2olW6YkgR./lWyK"],"hint":"Password: 1234"}}},"author":{"name":"superxuan","url":"https://superxuan05.github.io"},"logo":"https://i.bobopic.com/tx_bobopic/89013784_bobopic.jpg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"src","footer":"默认页脚","displayFooter":true,"blog":{"description":"superxuan05的个人博客","intro":"/intro.html","medias":{"BiliBili":"https://space.bilibili.com/396245561","Email":"2758157702@qq.com","Github":"https://github.com/superxuan05","QQ":"2758157702"}},"fullscreen":true,"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"encryptLocales":{"iconLabel":"文章已加密","placeholder":"输入密码","remember":"记住密码","errorHint":"请输入正确的密码"},"routerLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":["/",{"text":"408","icon":"book","prefix":"/posts/","children":[{"text":"数据结构","icon":"pen-to-square","prefix":"/posts/数据结构/","children":[{"text":"栈","icon":"pen-to-square","link":"stack"},{"text":"队列","icon":"pen-to-square","link":"queue"},{"text":"链表","icon":"pen-to-square","link":"linked-list"},{"text":"树","icon":"pen-to-square","link":"tree"},{"text":"图","icon":"pen-to-square","link":"graph"}]},{"text":"计算机组成原理","icon":"pen-to-square","prefix":"/posts/计算机组成原理/","children":[{"text":"CPU","icon":"pen-to-square","link":"cpu"},{"text":"内存","icon":"pen-to-square","link":"memory"},{"text":"输入输出","icon":"pen-to-square","link":"input-output"}]},{"text":"操作系统","icon":"pen-to-square","prefix":"operating-system/","children":[{"text":"进程","icon":"pen-to-square","link":"process"},{"text":"线程","icon":"pen-to-square","link":"thread"},{"text":"内存管理","icon":"pen-to-square","link":"memory-management"},{"text":"文件系统","icon":"pen-to-square","link":"file-system"}]},{"text":"计算机网络","icon":"pen-to-square","prefix":"computer-network/","children":[{"text":"协议","icon":"pen-to-square","link":"protocol"},{"text":"路由","icon":"pen-to-square","link":"routing"},{"text":"传输","icon":"pen-to-square","link":"transport"}]}]},{"text":"数学","icon":"book","prefix":"/posts/","children":[{"text":"概率论","icon":"book","link":"probability-theory"},{"text":"线性代数","icon":"book","link":"linear-algebra"},{"text":"微积分","icon":"book","link":"calculus"},{"text":"数值分析","icon":"book","link":"numerical-analysis"},{"text":"概率论","icon":"book","link":"probability-theory"}]},{"text":"其他","icon":"book","prefix":"/posts/","children":[{"text":"其他","icon":"book","link":"other"}]}],"sidebar":{"/":["",{"text":"如何使用","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"文章","icon":"book","prefix":"posts/","children":"structure"},"intro"]}}}}'),xS=qe(_S),qg=()=>xS,jg=Symbol(""),bS=()=>{const t=Rt(jg);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},yS=(t,e)=>{const{locales:n,...i}=t;return{...i,...n?.[e]}},SS=ai({enhance({app:t}){const e=qg(),n=t._context.provides[nd],i=$(()=>yS(e.value,n.routeLocale.value));t.provide(jg,i),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return i.value}}})}}),ES=Object.freeze(Object.defineProperty({__proto__:null,default:SS},Symbol.toStringTag,{value:"Module"}));var MS={"/":{backToTop:"返回顶部"}};const TS=xe({name:"BackToTop",setup(){const t=Ln(),e=ea(MS),n=Ye(),{height:i}=yy(n),{height:r}=wy(),{y:s}=Ay(),a=$(()=>(t.value.backToTop??!0)&&s.value>100),o=$(()=>s.value/(i.value-r.value)*100);return vt(()=>{n.value=document.body}),()=>p(Gs,{name:"fade-in"},()=>a.value?p("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[p("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":o.value},p("svg",p("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*o.value*.48} ${Math.PI*(100-o.value)*.48}`}))),p("div",{class:"back-to-top-icon"})]):null)}}),AS=ai({rootComponents:[TS]}),wS=Object.freeze(Object.defineProperty({__proto__:null,default:AS},Symbol.toStringTag,{value:"Module"})),CS=/language-(shellscript|shell|bash|sh|zsh)/,RS=({selector:t,ignoreSelector:e,inlineSelector:n,duration:i=2e3,locales:r,showInMobile:s,transform:a})=>{const o=ud("(max-width: 419px)"),l=$(()=>!o.value||s),u=ea(r),c=_=>{if(_.hasAttribute("copy-code"))return;const g=document.createElement("button");g.type="button",g.classList.add("vp-copy-code-button"),g.setAttribute("aria-label",u.value.copy),g.setAttribute("data-copied",u.value.copied),_.parentElement?.insertBefore(g,_),_.setAttribute("copy-code","")},f=()=>{document.body.classList.toggle("no-copy-code",!l.value),l.value&&document.querySelectorAll(t).forEach(c)};bi(l,()=>Ei(f),{flush:"post"}),er(_=>{_!=="beforeUnmount"&&f()});const{copy:d}=hy({legacy:!0}),h=new WeakMap,v=async(_,g,m)=>{const E=g.cloneNode(!0);a&&a(E);let x=E.textContent||"";if(CS.test(_.className)&&(x=x.replace(/^ *(\$|>) /gm,"")),await d(x),i<=0)return;m.classList.add("copied"),clearTimeout(h.get(m));const S=setTimeout(()=>{m.classList.remove("copied"),m.blur(),h.delete(m)},i);h.set(m,S)};lt("click",_=>{const g=_.target;if(l.value&&g.matches('div[class*="language-"] > button.vp-copy-code-button')){const m=g.parentElement,E=g.nextElementSibling;if(!m||!E)return;v(m,E,g)}},{passive:!0})};var PS={"/":{copy:"复制代码",copied:"已复制"}};const DS=ai({setup:()=>{RS({selector:'[vp-content] div[class*="language-"] pre',ignoreSelector:"",inlineSelector:"",locales:PS,duration:2e3,showInMobile:!1})}}),LS=Object.freeze(Object.defineProperty({__proto__:null,default:DS},Symbol.toStringTag,{value:"Module"})),IS=xe({name:"VPIcon",props:{type:{type:String,default:"unknown"},prefix:String,icon:String,color:String,size:[String,Number],verticalAlign:String,sizing:{type:String,default:"height"}},setup(t){const e=$(()=>t.icon?Js(t.icon)?t.icon:Vl(t.icon)?yt(t.icon):null:null),n=$(()=>{const r={},{type:s,verticalAlign:a,size:o,sizing:l}=t,u={sizing:l};return t.color&&(r.color=t.color),o&&(r["--icon-size"]=Number.isNaN(Number(o))?o:`${o}px`),a&&(r["--icon-vertical-align"]=a),s==="iconify"&&(l!=="height"&&(u.width=t.size||"1em"),l!=="width"&&(u.height=t.size||"1em")),ii(r).length&&(u.style=r),u}),i=r=>r.includes("fa-")||/^fa.$/.test(r)?r:`fa-${r}`;return()=>{const{type:r,icon:s,prefix:a="",sizing:o}=t;if(!s)return null;if(e.value)return p("img",{class:"vp-icon",src:e.value,alt:"","aria-hidden":"","no-view":"",...n.value});if(r==="iconify")return p("iconify-icon",{key:s,class:"vp-icon",icon:s.includes(":")?s:`${a}${s}`,...n.value});if(r==="fontawesome"){const[l,u]=s.includes(":")?s.split(":",2):["fas",s];return p("i",{key:s,class:["vp-icon",l.length===1?`fa${l}`:i(l),...u.split(" ").map(i),o==="height"?"":"fa-fw"],...n.value})}return p("i",{key:s,class:["vp-icon",s.includes(" ")?s:`${a}${s}`],...n.value})}}}),NS={enhance:({app:t})=>{bn("VPIcon")||t.component("VPIcon",e=>p(IS,{type:"iconify",prefix:"fa6-solid:",...e}))},setup:()=>{Ty("https://cdn.jsdelivr.net/npm/iconify-icon@2")}},US=Object.freeze(Object.defineProperty({__proto__:null,default:NS},Symbol.toStringTag,{value:"Module"})),OS=qe({}),Yg=Symbol(""),FS=()=>Rt(Yg),BS=t=>{t.provide(Yg,OS)},Kg=t=>new Promise((e,n)=>{t.complete?e({type:"image",element:t,src:t.src,width:t.naturalWidth,height:t.naturalHeight,alt:t.alt,msrc:t.src}):(t.onload=()=>{e(Kg(t))},t.onerror=()=>{n()})}),kS='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',VS=(t,{download:e=!0,fullscreen:n=!0}={})=>{t.on("uiRegister",()=>{if(t.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:i=>{const r=[];let s=-1;for(let a=0;a<t.getNumItems();a++){const o=document.createElement("div");o.className="photo-swipe-bullet",o.onclick=l=>{t.goTo(r.indexOf(l.target))},r.push(o),i.appendChild(o)}t.on("change",()=>{s>=0&&r[s].classList.remove("active"),r[t.currIndex].classList.add("active"),s=t.currIndex})}}),n){const{isSupported:i,toggle:r}=Hl();i.value&&t.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{r()}})}e&&t.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:i=>{i.setAttribute("download",""),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener"),t.on("change",()=>{i.setAttribute("href",t.currSlide.data.src)})}})})},zS=({selector:t,locales:e,download:n=!0,fullscreen:i=!0,scrollToClose:r=!0})=>{const s=FS(),a=ea(e),o=Ln(),l=$(()=>{const{photoSwipe:h}=o.value;return h===!1?null:xt(h)?h:qi(t)?t.join(", "):t}),u=$(()=>({...s.value,...a.value,download:n,fullscreen:i,scrollToClose:r}));let c=null,f=0,d=null;lt("click",async h=>{const v=h.target;if(!l.value||!c||!v.matches(l.value))return;f!==0&&d.destroy();const _=Date.now(),g=await c,m=Array.from(document.querySelectorAll(l.value)),E=m.map(S=>({html:kS,element:S,msrc:S.src})),x=m.findIndex(S=>S===v);d=new g({preloaderDelay:0,showHideAnimationType:"zoom",...u.value,dataSource:E,index:x,...r?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),f=_,VS(d,{download:n,fullscreen:i}),d.init(),d.on("destroy",()=>{d=null,f=0}),m.map((S,A)=>Kg(S).then(P=>{f===_&&(E.splice(A,1,P),d?.refreshSlideContent(A))}))},{passive:!0}),lt("wheel",()=>{u.value.scrollToClose&&d?.close()}),vt(()=>{("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{c=je(async()=>{const{default:h}=await import("./photoswipe.esm-CKV1Bsxh.js");return{default:h}},[]).then(({default:h})=>h)})}),Ji(()=>{d?.destroy()})};var HS={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const GS="[vp-content] :not(a) > img:not([no-view])",WS=HS,$S=!0,XS=!0,qS=!0;var jS=ai({enhance:({app:t})=>{BS(t)},setup:()=>{zS({selector:GS,locales:WS,download:$S,fullscreen:XS,scrollToClose:qS})}});const YS=Object.freeze(Object.defineProperty({__proto__:null,default:jS},Symbol.toStringTag,{value:"Module"})),Zg=({type:t="info",text:e="",vertical:n,color:i,bgColor:r},{slots:s})=>p("span",{class:["vp-badge",t,{diy:!!(i||r)}],style:{backgroundColor:r??!1,color:i??!1,verticalAlign:n??!1}},s.default?.()??e);Zg.displayName="Badge";const Jg=({title:t,desc:e="",logo:n,background:i,color:r,link:s})=>{const a=[n?p("img",{class:"vp-card-logo",src:yt(n),loading:"lazy","no-view":""}):null,p("div",{class:"vp-card-content"},[p("div",{class:"vp-card-title",innerHTML:t}),p("hr"),p("div",{class:"vp-card-desc",innerHTML:e})])],o={};return i&&(o.background=i),r&&(o.color=r),s?Fl(s)?p("a",{class:"vp-card",href:s,target:"_blank",style:o},a):p(Gt,{to:s,class:"vp-card",style:o},()=>a):p("div",{class:"vp-card",style:o},a)};Jg.displayName="VPCard";const KS={enhance:({app:t})=>{bn("Badge")||t.component("Badge",Zg),bn("VPCard")||t.component("VPCard",Jg)},setup:()=>{},rootComponents:[]},ZS=Object.freeze(Object.defineProperty({__proto__:null,default:KS},Symbol.toStringTag,{value:"Module"})),pp=async(t,e)=>{const{path:n,query:i}=t.currentRoute.value,{scrollBehavior:r}=t.options;t.options.scrollBehavior=void 0,await t.replace({path:n,query:i,hash:e}),t.options.scrollBehavior=r},JS=({headerLinkSelector:t,headerAnchorSelector:e,delay:n,offset:i=5})=>{const r=Ar();lt("scroll",Fg(()=>{const a=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(a)<i){pp(r,"");return}const l=window.innerHeight+a,u=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),c=Math.abs(u-l)<i,f=Array.from(document.querySelectorAll(t)),h=Array.from(document.querySelectorAll(e)).filter(v=>f.some(_=>_.hash===v.hash));for(let v=0;v<h.length;v++){const _=h[v],g=h[v+1],m=a>=(_.parentElement?.offsetTop??0)-i,E=!g||a<(g.parentElement?.offsetTop??0)-i;if(!(m&&E))continue;const S=decodeURIComponent(r.currentRoute.value.hash),A=decodeURIComponent(_.hash);if(S===A)return;if(c){for(let P=v+1;P<h.length;P++)if(S===decodeURIComponent(h[P].hash))return}pp(r,A);return}},n))},QS=".vp-sidebar-link, .vp-toc-link",eE=".header-anchor",tE=200,nE=5,iE=ai({setup(){JS({headerLinkSelector:QS,headerAnchorSelector:eE,delay:tE,offset:nE})}}),rE=Object.freeze(Object.defineProperty({__proto__:null,default:iE},Symbol.toStringTag,{value:"Module"}));let Qg=t=>xt(t.title)?{title:t.title}:null;const ev=Symbol(""),sE=t=>{Qg=t},aE=()=>Rt(ev),oE=t=>{t.provide(ev,Qg)};var lE={"/":{title:"目录",empty:"暂无目录"}},cE=xe({name:"Catalog",props:{base:String,level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(t){const{page:e,routes:n,site:i}=ts(),r=aE(),s=ea(lE),a=Ye(Qs(n.value).map(([l,{meta:u}])=>{const c=r(u);if(!c)return null;const f=l.split("/").length;return{level:Gb(l,"/")?f-2:f-1,base:l.replace(/\/[^/]+\/?$/,"/"),path:l,...c}}).filter(l=>Tr(l)&&xt(l.title))),o=$(()=>{const l=t.base?Y3(ig(t.base)):e.value.path.replace(/\/[^/]+$/,"/"),u=l.split("/").length-2,c=[];return a.value.filter(({level:f,path:d})=>{if(!Fa(d,l)||d===l)return!1;if(l==="/"){const h=ii(i.value.locales).filter(v=>v!=="/");if(d==="/404.html"||h.some(v=>Fa(d,v)))return!1}return f-u<=t.level}).sort(({title:f,level:d,order:h},{title:v,level:_,order:g})=>d-_||(el(h)?el(g)?h>0?g>0?h-g:-1:g<0?h-g:1:h:el(g)?g:f.localeCompare(v))).forEach(f=>{const{base:d,level:h}=f;switch(h-u){case 1:{c.push(f);break}case 2:{const v=c.find(_=>_.path===d);v&&(v.children??=[]).push(f);break}default:{const v=c.find(_=>_.path===d.replace(/\/[^/]+\/$/,"/"));if(v){const _=v.children?.find(g=>g.path===d);_&&(_.children??=[]).push(f)}}}}),c});return()=>{const l=o.value.some(u=>u.children);return p("div",{class:["vp-catalog",{index:t.index}]},[t.hideHeading?null:p("h2",{class:"vp-catalog-main-title"},s.value.title),o.value.length?p(t.index?"ol":"ul",{class:["vp-catalog-list",{deep:l}]},o.value.map(({children:u=[],title:c,path:f,content:d})=>{const h=p(Gt,{class:"vp-catalog-title",to:f},()=>d?p(d):c);return p("li",{class:"vp-catalog-item"},l?[p("h3",{id:c,class:["vp-catalog-child-title",{"has-children":u.length}]},[p("a",{href:`#${c}`,class:"vp-catalog-header-anchor","aria-hidden":!0}),h]),u.length?p(t.index?"ol":"ul",{class:"vp-child-catalogs"},u.map(({children:v=[],content:_,path:g,title:m})=>p("li",{class:"vp-child-catalog"},[p("div",{class:["vp-catalog-sub-title",{"has-children":v.length}]},[p("a",{href:`#${m}`,class:"vp-catalog-header-anchor"}),p(Gt,{class:"vp-catalog-title",to:g},()=>_?p(_):m)]),v.length?p(t.index?"ol":"div",{class:t.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},v.map(({content:E,path:x,title:S})=>t.index?p("li",{class:"vp-sub-catalog"},p(Gt,{to:x},()=>E?p(E):S)):p(Gt,{class:"vp-sub-catalog-link",to:x},()=>E?p(E):S))):null]))):null]:p("div",{class:"vp-catalog-child-title"},h))})):p("p",{class:"vp-empty-catalog"},s.value.empty)])}}}),uE=ai({enhance:({app:t})=>{oE(t),bn("Catalog",t)||t.component("Catalog",cE)}});const fE=Object.freeze(Object.defineProperty({__proto__:null,default:uE},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const mp=(t,e)=>{t.classList.add(e)},gp=(t,e)=>{t.classList.remove(e)},dE=t=>{t?.parentNode?.removeChild(t)},Ac=(t,e,n)=>t<e?e:t>n?n:t,vp=t=>(-1+t)*100,hE=(()=>{const t=[],e=()=>{const n=t.shift();n&&n(e)};return n=>{t.push(n),t.length===1&&e()}})(),pE=t=>t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(e,n)=>n.toUpperCase()),Ao=(()=>{const t=["Webkit","O","Moz","ms"],e={},n=s=>{const{style:a}=document.body;if(s in a)return s;const o=s.charAt(0).toUpperCase()+s.slice(1);let l=t.length;for(;l--;){const u=`${t[l]}${o}`;if(u in a)return u}return s},i=s=>{const a=pE(s);return e[a]??=n(a)},r=(s,a,o)=>{s.style[i(a)]=o};return(s,a)=>{for(const o in a){const l=a[o];Object.hasOwn(a,o)&&ad(l)&&r(s,o,l)}}})(),Ri={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Ot={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:t=>{const{speed:e,easing:n}=Ri,i=Ot.isStarted(),r=Ac(t,Ri.minimum,1);Ot.percent=r===1?null:r;const s=Ot.render(!i),a=s.querySelector(Ri.barSelector);return s.offsetWidth,hE(o=>{Ao(a,{transform:`translate3d(${vp(r)}%,0,0)`,transition:`all ${e}ms ${n}`}),r===1?(Ao(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(()=>{Ao(s,{transition:`all ${e}ms linear`,opacity:"0"}),setTimeout(()=>{Ot.remove(),o()},e)},e)):setTimeout(()=>{o()},e)}),Ot},isStarted:()=>typeof Ot.percent=="number",start:()=>{Ot.percent||Ot.set(0);const t=()=>{setTimeout(()=>{Ot.percent&&(Ot.trickle(),t())},Ri.trickleSpeed)};return t(),Ot},done:t=>!t&&!Ot.percent?Ot:Ot.increase(.3+.5*Math.random()).set(1),increase:t=>{let{percent:e}=Ot;return e?(e=Ac(e+(typeof t=="number"?t:(1-e)*Ac(Math.random()*e,.1,.95)),0,.994),Ot.set(e)):Ot.start()},trickle:()=>Ot.increase(Math.random()*Ri.trickleRate),render:t=>{if(Ot.isRendered())return document.getElementById("nprogress");mp(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=Ri.template;const n=e.querySelector(Ri.barSelector),i=document.querySelector(Ri.parent),r=t?"-100":vp(Ot.percent??0);return Ao(n,{transition:"all 0 linear",transform:`translate3d(${r}%,0,0)`}),i&&(i!==document.body&&mp(i,"nprogress-custom-parent"),i.appendChild(e)),e},remove:()=>{gp(document.documentElement,"nprogress-busy"),gp(document.querySelector(Ri.parent),"nprogress-custom-parent"),dE(document.getElementById("nprogress"))}},mE=()=>{vt(()=>{const t=Ar(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(n=>{e.has(n.path)||Ot.start()}),t.afterEach(n=>{e.add(n.path),Ot.done()})})},gE=ai({setup(){mE()}}),vE=Object.freeze(Object.defineProperty({__proto__:null,default:gE},Symbol.toStringTag,{value:"Module"})),tv="VUEPRESS_REDIRECT_STATUS",_p=Ey(tv,{}),xp=hd(tv,{}),_E=t=>{const e=My(),n=xg(),i=Qs(t.config);return $(()=>{if(i.some(([r])=>n.value===r)){for(const r of e.value)for(const[s,a]of i)if(a.includes(r))return s===n.value?null:{lang:r,localePath:s}}return null})};var xE=xe({name:"RedirectModal",props:{config:{type:Object,required:!0},locales:{type:Object,required:!0}},setup(t){const e=Ar(),{routeLocale:n,routePath:i}=ts(),r=_E(t.config),s=qe(),a=dd(s),o=qe(!1),l=$(()=>{if(!r.value)return null;const{lang:c,localePath:f}=r.value,d=[t.locales[f],t.locales[n.value]];return{hint:d.map(({hint:h})=>h.replace("$1",c)),switch:d.map(({switch:h})=>h.replace("$1",c)).join(" / "),cancel:d.map(({cancel:h})=>h).join(" / "),remember:d.map(({remember:h})=>h).join(" / ")}}),u=()=>{xp.value[n.value]=!0,o.value&&(_p.value[n.value]=!0),a.value=!1};return Dt(i,()=>{a.value=!1}),vt(async()=>{s.value=document.body,await Ei(),r.value&&!xp.value[n.value]&&!_p.value[n.value]&&(a.value=!0)}),qf(()=>{a.value=!1}),()=>p(tg,{name:"fade-in-scale-up"},()=>a.value?p("div",{key:"mask",class:"redirect-modal-mask"},p("div",{key:"popup",class:"redirect-modal-wrapper"},[p("div",{class:"redirect-modal-content"},l.value?.hint.map(c=>p("p",c))),p("div",{class:"redirect-modal-hint"},[p("input",{id:"remember-redirect",type:"checkbox",value:o.value,onChange:()=>{o.value=!o.value}}),p("label",{for:"remember-redirect"},l.value?.remember)]),p("button",{type:"button",class:"redirect-modal-action primary",onClick:()=>{u(),e.replace(i.value.replace(n.value,r.value.localePath))}},l.value?.switch),p("button",{type:"button",class:"redirect-modal-action",onClick:()=>{u()}},l.value?.cancel)])):null)}}),bE={config:{},autoLocale:!1,localeFallback:!0,defaultBehavior:"defaultLocale"},yE={"/":{name:"简体中文",hint:"你的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"}};const nv=bE;var SE=ai({setup(){},rootComponents:[()=>p(xE,{config:nv,locales:yE})]});const EE=Object.freeze(Object.defineProperty({__proto__:null,config:nv,default:SE},Symbol.toStringTag,{value:"Module"}));var bp={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const iv=()=>{const t=Qa();return $(()=>t.value.readingTime??null)},rv=(t,e)=>{const{minutes:n,words:i}=t,{less1Minute:r,word:s,time:a}=e;return{time:n<1?r:a.replace("$time",Math.round(n).toString()),words:s.replace("$word",i.toString())}},yp={words:"",time:""},wu=typeof bp>"u"?null:bp,sv=()=>wu?ea(wu):$(()=>null),ME=()=>{if(wu===null)return $(()=>yp);const t=iv(),e=sv();return $(()=>t.value&&e.value?rv(t.value,e.value):yp)},tl=()=>null,Et=({name:t="",color:e="currentColor",ariaLabel:n},{attrs:i,slots:r})=>p("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${t}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":n??`${t} icon`,...i},r.default());Et.displayName="IconBase";const TE=t=>Js(t)?t:`https://github.com/${t}`,md=(t="")=>!Js(t)||t.includes("github.com")?"GitHub":t.includes("bitbucket.org")?"Bitbucket":t.includes("gitlab.com")?"GitLab":t.includes("gitee.com")?"Gitee":null,av=()=>p(Et,{name:"github"},()=>p("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));av.displayName="GitHubIcon";const ov=()=>p(Et,{name:"gitee"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));ov.displayName="GiteeIcon";const lv=()=>p(Et,{name:"bitbucket"},()=>p("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));lv.displayName="BitbucketIcon";const cv=()=>p(Et,{name:"source"},()=>p("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));cv.displayName="SourceIcon";const AE=({link:t,type:e=md(t??"")})=>{if(!e)return null;const n=e.toLowerCase();return p(n==="bitbucket"?lv:n==="github"?av:n==="gitlab"?"GitLab":n==="gitee"?ov:cv)},wE=(t,e=0)=>{let n=3735928559^e,i=1103547991^e;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);n=Math.imul(n^s,2654435761),i=Math.imul(i^s,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507),i^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&i)+(n>>>0)},to=(t,e)=>wE(t)%e,uv=/#.*$/u,CE=t=>{const e=uv.exec(t);return e?e[0]:""},Sp=t=>decodeURI(t).replace(uv,"").replace(/\/index\.html$/iu,"/").replace(/\/(README|index)\.md$/iu,"/").replace(/\.(?:html|md)$/iu,""),fv=(t,e)=>{if(!ad(e))return!1;const n=Sp(t.path),i=Sp(e),r=CE(e);return r?r===t.hash&&(!i||n===i):n===i},RE="719px",PE="1440px",DE="9",ra={mobileBreakPoint:RE,pcBreakPoint:PE,colorNumber:DE},wr=()=>qg(),oi=()=>bS(),zt=()=>({...ts(),theme:wr(),themeLocale:oi()}),yn=()=>{const t=wr();return $(()=>!!t.value.pure)},dv=()=>{const t=oi();return $(()=>t.value.author)},Ep=t=>Tr(t)&&xt(t.name),ka=(t,e=!1)=>t?qi(t)?t.map(n=>xt(n)?{name:n}:Ep(n)?n:null).filter(n=>n!==null):xt(t)?[{name:t}]:Ep(t)?[t]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,t),[]):[],hv=(t,e)=>{if(t){if(qi(t)&&t.every(n=>xt(n)))return t;if(xt(t))return[t];console.error(`Expect ${e} to be \`string[] | string | undefined\`, but got`,t)}return[]},pv=t=>hv(t,"category"),mv=t=>hv(t,"tag"),gv=()=>{const t=Ln(),e=dv();return $(()=>{const{author:n}=t.value;return n?ka(n):n===!1?[]:ka(e.value,!1)})},LE=()=>{const t=Ln(),e=Rt(Symbol.for("categoryMap"),null);return $(()=>pv(t.value.category??t.value.categories).map(n=>({name:n,path:e?.value.map[n]?.path??""})))},IE=()=>{const t=Ln(),e=Rt(Symbol.for("tagMap"),null);return $(()=>mv(t.value.tag??t.value.tags).map(n=>({name:n,path:e?.value.map[n]?.path??""})))},NE=()=>{const{frontmatter:t,page:e}=zt();return $(()=>{const n=od(t.value.date);if(n)return n;const{createdTime:i}=e.value.git??{};return i?new Date(i):null})},UE=()=>{const{frontmatter:t,themeLocale:e}=zt(),n=gv(),i=LE(),r=IE(),s=NE(),a=iv(),o=ME(),l=$(()=>({author:n.value,category:i.value,date:s.value,tag:r.value,isOriginal:t.value.isOriginal??!1,readingTime:a.value,readingTimeLocale:o.value,pageview:t.value.pageview??!0})),u=$(()=>t.value.pageInfo??e.value.pageInfo??null);return{info:l,items:u}},Hn=()=>{const t=oi();return $(()=>t.value.metaLocales)},OE="http://.",tr=()=>{const t=Ar(),e=Mi();return n=>{if(!n)return;if(Ja(n))return window.open(n);if(Vl(n))return e.fullPath===n?void 0:void t.push(n);const i=e.path.slice(0,e.path.lastIndexOf("/"));return void t.push(new URL(`${i}/${encodeURI(n)}`,OE).pathname)}},vv=()=>p(Et,{name:"author"},()=>p("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));vv.displayName="AuthorIcon";const _v=()=>p(Et,{name:"calendar"},()=>p("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));_v.displayName="CalendarIcon";const xv=()=>p(Et,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));xv.displayName="CategoryIcon";const bv=()=>p(Et,{name:"print"},()=>p("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));bv.displayName="PrintIcon";const yv=()=>p(Et,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));yv.displayName="TagIcon";const Sv=()=>p(Et,{name:"timer"},()=>p("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));Sv.displayName="TimerIcon";const Ev=()=>p(Et,{name:"word"},()=>[p("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),p("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);Ev.displayName="WordIcon";var FE=xe({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(t){const e=Hn(),n=yn();return()=>t.author.length>0?p("span",{class:"page-author-info","aria-label":`${e.value.author}${n.value?"":"🖊"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(vv),p("span",t.author.map(i=>i.url?p("a",{class:"page-author-item",href:i.url,target:"_blank",rel:"noopener noreferrer"},i.name):p("span",{class:"page-author-item"},i.name))),p("span",{property:"author",content:t.author.map(i=>i.name).join(", ")})]):null}}),BE=xe({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(t){const e=Hn(),n=tr(),i=yn();return()=>t.category.length>0?p("span",{class:"page-category-info","aria-label":`${e.value.category}${i.value?"":"🌈"}`,...i.value?{}:{"data-balloon-pos":"up"}},[p(xv),t.category.map(({name:r,path:s})=>p("span",{class:["page-category-item",{[`color${to(r,Number(ra.colorNumber))}`]:!i.value,clickable:s}],role:s?"navigation":"",onClick:()=>{s&&n(s)}},r)),p("meta",{property:"articleSection",content:t.category.map(({name:r})=>r).join(",")})]):null}}),kE=xe({name:"DateInfo",inheritAttrs:!1,props:{date:Object},setup(t){const e=bg(),n=Hn(),i=yn(),r=$(()=>new Intl.DateTimeFormat(e.value,{dateStyle:"short"})),s=$(()=>t.date?r.value.format(t.date):null);return()=>t.date?p("span",{class:"page-date-info","aria-label":`${n.value.date}${i.value?"":"📅"}`,...i.value?{}:{"data-balloon-pos":"up"}},[p(_v),p("span",{"data-allow-mismatch":"text"},s.value),p("meta",{property:"datePublished",content:t.date.toISOString()||""})]):null}}),VE=xe({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(t){const e=Hn();return()=>t.isOriginal?p("span",{class:"page-original-info"},e.value.origin):null}}),zE=xe({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(t){const e=Hn(),n=yn(),i=$(()=>{if(!t.readingTime)return null;const{minutes:r}=t.readingTime;return r<1?"PT1M":`PT${Math.round(r)}M`});return()=>t.readingTimeLocale?.time?p("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.value?"":"⌛"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(Sv),p("span",t.readingTimeLocale.time),p("meta",{property:"timeRequired",content:i.value})]):null}}),HE=xe({name:"TagInfo",inheritAttrs:!1,props:{tag:Array},setup(t){const e=Hn(),n=tr(),i=yn();return()=>t.tag?.length?p("span",{class:"page-tag-info","aria-label":`${e.value.tag}${i.value?"":"🏷"}`,...i.value?{}:{"data-balloon-pos":"up"}},[p(yv),t.tag.map(({name:r,path:s})=>p("span",{class:["page-tag-item",{[`color${to(r,Number(ra.colorNumber))}`]:!i.value,clickable:s}],role:s?"navigation":"",onClick:()=>{s&&n(s)}},r)),p("meta",{property:"keywords",content:t.tag.map(({name:r})=>r).join(",")})]):null}}),GE=xe({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(t){const e=Hn(),n=yn();return()=>t.readingTimeLocale?.words?p("span",{class:"page-word-info","aria-label":`${e.value.words}${n.value?"":"🔠"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(Ev),p("span",t.readingTimeLocale.words),p("meta",{property:"wordCount",content:t.readingTime?.words})]):null}}),Mv=xe({name:"PageInfo",components:{AuthorInfo:FE,CategoryInfo:BE,DateInfo:kE,OriginalInfo:VE,PageViewInfo:tl,ReadingTimeInfo:zE,TagInfo:HE,WordInfo:GE},props:{items:[Boolean,Array],info:{type:Object,required:!0}},setup(t){const e=yn();return()=>{const n=t.items??["Author","Original","Date","PageView","ReadingTime","Category","Tag"];return n?p("div",{class:"page-info"},n.map(i=>p(Pt(`${i}Info`),{...t.info,isPure:e.value}))):null}}});const gd={"/demo/":["markdown","layout","page","disable","encrypt"],"/posts/":[{text:"其他",prefix:"其他/",collapsible:!0,children:["linux","glx","1sjk","2sjk","3.sjk","web"]},{text:"数据结构",prefix:"数据结构/",collapsible:!0,children:["stack"]},{text:"考研数学",prefix:"考研数学/",collapsible:!0,children:["1"]}]},Tv=Symbol(""),no=()=>{const t=Rt(Tv);if(!t)throw new Error("useDarkMode() is called without provider.");return t},WE=t=>{const e=vy(),n=wr(),i=$(()=>n.value.darkmode??"switch"),r=ns("vuepress-theme-hope-scheme","auto"),s=$(()=>{const o=i.value;return o==="disable"?!1:o==="enable"?!0:o==="auto"?e.value:o==="toggle"?r.value==="dark":r.value==="dark"||r.value==="auto"&&e.value}),a=$(()=>{const o=i.value;return o==="switch"||o==="toggle"});t.provide(Tv,{canToggle:a,config:i,isDarkMode:s,status:r}),Object.defineProperties(t.config.globalProperties,{$isDarkMode:{get:()=>s.value}})},$E=()=>{const{config:t,isDarkMode:e,status:n}=no();Gf(()=>{t.value==="disable"?n.value="light":t.value==="enable"?n.value="dark":t.value==="toggle"&&n.value==="auto"&&(n.value="light")}),lt("beforeprint",()=>{e.value&&(document.documentElement.dataset.theme="light")}),lt("afterprint",()=>{e.value&&(document.documentElement.dataset.theme="dark")}),vt(()=>{bi(e,i=>{document.documentElement.dataset.theme=i?"dark":"light"})})},Cu=t=>!Ja(t)&&!Fl(t),xl=(t,e=!1,n)=>{const{meta:i,path:r,notFound:s}=zn(t,n);return s?{text:r,link:r}:{text:!e&&i.shortTitle?i.shortTitle:i.title||r,link:r,icon:i.icon}},$r=(t="",e="")=>Ja(e)||Vl(e)?e:`${ig(t)}${e}`,Av=(t,e)=>{const n=xt(t)?xl($r(e,t)):xt(t.link)?{...t,link:Cu(t.link)?zn($r(e,t.link)).path:t.link}:t;if("children"in n){const i=$r(e,n.prefix),r=n.children==="structure"?gd[i]:n.children;return{...n,prefix:i,children:r.map(s=>Av(s,i))}}return{...n}},Ru=({config:t,prefix:e=""})=>t.map(n=>Av(n,e)),XE=({config:t,routePath:e})=>{const n=ii(t).sort((i,r)=>r.length-i.length);for(const i of n)if(Fa(decodeURI(e),i)){const r=t[i];return Ru({config:r==="structure"?gd[i]:r||[],prefix:i})}return console.warn(`${decodeURI(e)} is missing it's sidebar config.`),[]},qE=({config:t,routeLocale:e,routePath:n})=>t==="structure"?Ru({config:gd[e],prefix:e}):qi(t)?Ru({config:t}):Tr(t)?XE({config:t,routePath:n}):[],wv=Symbol(""),jE=()=>{const{frontmatter:t,routeLocale:e,routePath:n,themeLocale:i}=zt(),r=$(()=>t.value.home?!1:t.value.sidebar??i.value.sidebar??"structure"),s=$(()=>qE({config:r.value,routeLocale:e.value,routePath:n.value}));Qn(wv,s)},vd=()=>{const t=Rt(wv);if(!t)throw new Error("useSidebarItems() is called without provider.");return t};var YE=xe({name:"PageFooter",setup(){const{frontmatter:t,theme:e,themeLocale:n}=zt(),i=gv(),r=$(()=>{const{copyright:u,footer:c}=t.value;return c!==!1&&!!(u||c||n.value.displayFooter)}),s=$(()=>{const{footer:u}=t.value;return xt(u)?u:n.value.footer??""}),a=$(()=>i.value.map(({name:u})=>u).join(", ")),o=u=>`Copyright © ${new Date().getFullYear()} ${a.value} ${u?`${u} Licensed`:""}`,l=$(()=>{const{copyright:u,license:c=""}=t.value,{license:f}=e.value,{copyright:d}=n.value;return u??(c?o(c):d??(a.value||f?o(f):!1))});return()=>r.value?p("footer",{class:"vp-footer-wrapper","vp-footer":""},[s.value?p("div",{class:"vp-footer",innerHTML:s.value}):null,l.value?p("div",{class:"vp-copyright",innerHTML:l.value}):null]):null}});const Cv=()=>p(Et,{name:"outlook"},()=>[p("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);Cv.displayName="AppearanceIcon";const Rv=()=>p(Et,{name:"auto"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));Rv.displayName="AutoColorModeIcon";const Pv=()=>p(Et,{name:"light"},()=>p("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));Pv.displayName="LightColorModeIcon";const Dv=()=>p(Et,{name:"dark"},()=>p("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));Dv.displayName="DarkColorModeIcon";var Lv=xe({name:"ColorModeSwitch",setup(){const{config:t,isDarkMode:e,status:n}=no(),i=yn(),r=()=>{t.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},s=async a=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!i.value)){r();return}const o=a.clientX,l=a.clientY,u=Math.hypot(Math.max(o,innerWidth-o),Math.max(l,innerHeight-l)),c=e.value;await document.startViewTransition(async()=>{r(),await Ei()}).ready,e.value!==c&&document.documentElement.animate({clipPath:e.value?[`circle(${u}px at ${o}px ${l}px)`,`circle(0px at ${o}px ${l}px)`]:[`circle(0px at ${o}px ${l}px)`,`circle(${u}px at ${o}px ${l}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>p("button",{type:"button",class:"vp-color-mode-switch",id:"color-mode-switch",onClick:s},[p(Rv,{style:{display:n.value==="auto"?"block":"none"}}),p(Dv,{style:{display:n.value==="dark"?"block":"none"}}),p(Pv,{style:{display:n.value==="light"?"block":"none"}})])}});const Iv=()=>{const t=oi();return $(()=>t.value.outlookLocales)};var KE=xe({name:"ColorMode",setup(){const t=Iv(),{canToggle:e}=no();return()=>e.value?p("div",{class:"vp-color-mode"},[p("label",{class:"vp-color-mode-title",for:"color-mode-switch"},t.value.darkmode),p(Lv)]):null}});const Nv=()=>p(Et,{name:"cancel-fullscreen"},()=>p("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));Nv.displayName="CancelFullScreenIcon";const Uv=()=>p(Et,{name:"enter-fullscreen"},()=>p("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));Uv.displayName="EnterFullScreenIcon";var Ov=xe({name:"ToggleFullScreenButton",setup(){const{isSupported:t,isFullscreen:e,toggle:n}=Hl();return()=>t.value?p("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:e.value,onClick:()=>n()},e.value?p(Nv):p(Uv)):null}}),ZE=xe({name:"ToggleFullScreenButton",setup(){const t=Iv(),{isSupported:e}=Hl();return()=>e.value?p("div",{class:"full-screen-wrapper"},[p("label",{class:"full-screen-title",for:"full-screen-switch"},t.value.fullscreen),p(Ov)]):null}}),Fv=xe({name:"AppearanceSettings",setup(){const t=wr(),e=yn(),n=$(()=>!e.value&&t.value.fullscreen);return()=>p(id,()=>[null,p(KE),n.value?p(ZE):null])}}),JE=xe({name:"AppearanceButton",setup(){const t=wr(),{canToggle:e}=no(),{isSupported:n}=Hl(),i=yn(),r=qe(!1),s=$(()=>!i.value&&t.value.fullscreen&&n),a=$(()=>e.value||s.value);return er(()=>{r.value=!1}),()=>a.value?p("div",{class:"vp-nav-item hide-in-mobile"},e.value&&!s.value?p(Lv):s.value&&!e.value?p(Ov):p("button",{type:"button",class:["vp-appearance-button",{open:r.value}],tabindex:"-1","aria-hidden":!0},[p(Cv),p("div",{class:"vp-appearance-dropdown"},p(Fv))])):null}});const hn=({config:t,iconSizing:e="both"},{emit:n,slots:i})=>{const{icon:r}=t;return p(mb,{config:t,onFocusout:()=>{n("focusout")}},{...i,before:i.before??(r?()=>p(Pt("VPIcon"),{icon:r,sizing:e}):null)})};hn.displayName="AutoLink";var QE=xe({name:"NavbarDropdown",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=Zs(t,"config"),i=$(()=>n.value.ariaLabel??n.value.text),r=qe(!1),s=a=>{a.detail===0&&(r.value=!r.value)};return er(()=>{r.value=!1}),()=>p("div",{class:["vp-dropdown-wrapper",{open:r.value}]},[p("button",{type:"button",class:"vp-dropdown-title","aria-label":i.value,onClick:s},[e.title?.()??[p(Pt("VPIcon"),{icon:n.value.icon}),t.config.text],p("span",{class:"arrow"}),p("ul",{class:"vp-dropdown"},n.value.children.map((a,o)=>{const l=o===n.value.children.length-1;return p("li",{class:"vp-dropdown-item"},"children"in a?[p("h4",{class:"vp-dropdown-subtitle"},a.link?p(hn,{config:a,onFocusout:()=>{a.children.length===0&&l&&(r.value=!1)}}):a.text),p("ul",{class:"vp-dropdown-subitems"},a.children.map((u,c)=>p("li",{class:"vp-dropdown-subitem"},p(hn,{config:u,onFocusout:()=>{c===a.children.length-1&&l&&(r.value=!1)}}))))]:p(hn,{config:a,onFocusout:()=>{l&&(r.value=!1)}}))}))])])}});const wo=(t,e)=>e[e.length-1]===t;var eM=xe({name:"NavScreenMenu",props:{config:{type:Object,required:!0}},setup(t){const e=Zs(t,"config"),n=Mi(),i=$(()=>e.value.ariaLabel??e.value.text),r=qe(!1);return er(()=>{r.value=!1}),Dt(()=>n.fullPath,()=>{r.value=!1}),()=>[p("button",{type:"button",class:["vp-nav-screen-menu-title",{active:r.value}],"aria-label":i.value,onClick:()=>{r.value=!r.value}},[p("span",{class:"text"},[p(Pt("VPIcon"),{icon:e.value.icon,sizing:"both"}),t.config.text]),p("span",{class:["arrow",r.value?"down":"end"]})]),p("ul",{class:["vp-nav-screen-menu",{hide:!r.value}]},e.value.children.map(s=>p("li",{class:"vp-nav-screen-menu-item"},"children"in s?[p("h4",{class:"vp-nav-screen-menu-subtitle"},s.link?p(hn,{config:s,onFocusout:()=>{wo(s,e.value.children)&&s.children.length===0&&(r.value=!1)}}):s.text),p("ul",{class:"vp-nav-screen-menu-subitems"},s.children.map(a=>p("li",{class:"vp-nav-screen-menu-subitem"},p(hn,{config:a,onFocusout:()=>{wo(a,s.children)&&wo(s,e.value.children)&&(r.value=!1)}}))))]:p(hn,{config:s,onFocusout:()=>{wo(s,e.value.children)&&(r.value=!1)}}))))]}});const Bv=(t,e="")=>xt(t)?xl($r(e,t)):"children"in t?{...t,...t.link&&Cu(t.link)?{link:zn($r(e,t.link)).path}:{},children:t.children.map(n=>Bv(n,$r(e,t.prefix)))}:{...t,link:Cu(t.link)?zn($r(e,t.link)).path:t.link},kv=()=>{const t=oi();return $(()=>(t.value.navbar||[]).map(e=>Bv(e)))};var tM=xe({name:"NavScreenLinks",setup(){const t=kv();return()=>t.value.length>0?p("nav",{class:"nav-screen-links"},t.value.map(e=>p("div",{class:"navbar-links-item"},"children"in e?p(eM,{config:e}):p(hn,{config:e})))):null}});const{mobileBreakPoint:nM,pcBreakPoint:iM}=ra,Mp=t=>t.endsWith("px")?Number(t.slice(0,-2)):null,Gl=()=>{const t=qe(!1),e=qe(!1),n=()=>{t.value=window.innerWidth<=(Mp(nM)??719),e.value=window.innerWidth>=(Mp(iM)??1440)};return lt("resize",n,!1),lt("orientationchange",n,!1),vt(()=>{n()}),{isMobile:t,isPC:e}};var rM=xe({name:"NavScreen",props:{show:Boolean},slots:Object,setup(t,{slots:e}){const{isMobile:n}=Gl(),i=Ye(),r=dd(i);return er(()=>{r.value=!1}),Dt(n,s=>{!s&&t.show&&(r.value=!1)}),vt(()=>{i.value=document.body}),Ji(()=>{r.value=!1}),()=>p(Gs,{name:"fade-in-down",onEnter:()=>{r.value=!0},onAfterLeave:()=>{r.value=!1}},()=>t.show?p("div",{id:"nav-screen",class:"vp-nav-screen"},p("div",{class:"vp-nav-screen-container"},[e.navScreenTop?.(),p(tM),p("div",{class:"vp-appearance-wrapper"},p(Fv)),e.navScreenBottom?.()])):null)}}),sM=xe({name:"NavbarBrand",setup(){const{routeLocale:t,siteLocale:e,themeLocale:n}=zt(),i=$(()=>n.value.home??t.value),r=$(()=>e.value.title),s=$(()=>n.value.navbarTitle??r.value),a=$(()=>n.value.logo?yt(n.value.logo):null),o=$(()=>n.value.logoDark?yt(n.value.logoDark):null);return()=>p(Gt,{to:i.value,class:"vp-brand","aria-label":n.value.routerLocales.home},()=>[a.value?p("img",{class:["vp-nav-logo",{light:!!o.value}],src:a.value,alt:""}):null,o.value?p("img",{class:["vp-nav-logo dark"],src:o.value,alt:""}):null,s.value?p("span",{class:["vp-site-name",{"hide-in-pad":a.value&&(n.value.hideSiteNameOnMobile??!0)}]},s.value):null])}}),aM=xe({name:"NavbarLinks",setup(){const t=kv();return()=>t.value.length>0?p("nav",{class:"vp-nav-links"},t.value.map(e=>p("div",{class:"vp-nav-item hide-in-mobile"},"children"in e?p(QE,{config:e}):p(hn,{config:e,iconSizing:"height"})))):null}});const oM=()=>{const t=oi(),e=$(()=>t.value.repo),n=$(()=>e.value?TE(e.value):null),i=$(()=>e.value?md(e.value):null),r=$(()=>n.value?t.value.repoLabel??i.value??"Source":null);return $(()=>!n.value||!r.value||t.value.repoDisplay===!1?null:{type:i.value??"Source",label:r.value,link:n.value})};var lM=xe({name:"RepoLink",setup(){const t=oM();return()=>t.value?p("div",{class:"vp-nav-item vp-action"},p("a",{class:"vp-action-link",href:t.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":t.value.label},p(AE,{type:t.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const Vv=({active:t=!1},{emit:e})=>p("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":t}],"aria-label":"Toggle Navbar","aria-expanded":t,"aria-controls":"nav-screen",onClick:()=>{e("toggle")}},p("span",[p("span",{class:"vp-top"}),p("span",{class:"vp-middle"}),p("span",{class:"vp-bottom"})]));Vv.displayName="ToggleNavbarButton";const Pu=(t,{emit:e})=>p("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>{e("toggle")}},p("span",{class:"icon"}));Pu.displayName="ToggleSidebarButton",Pu.emits=["toggle"];var cM=xe({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(t,{emit:e,slots:n}){const i=oi(),{isMobile:r}=Gl(),s=qe(!1),a=$(()=>{const{navbarAutoHide:c="mobile"}=i.value;return c!=="none"&&(c==="always"||r.value)}),o=$(()=>i.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),l={Brand:sM,Language:tl,Links:aM,Repo:lM,Outlook:JE,Search:bn("SearchBox")?Pt("SearchBox"):tl},u=c=>l[c]??(bn(c)?Pt(c):tl);return er(()=>{s.value=!1}),Dt(r,c=>{c||(s.value=!1)}),()=>[p("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":a.value}],"vp-navbar":""},[p("div",{class:"vp-navbar-start"},[p(Pu,{onToggle:()=>{s.value&&(s.value=!1),e("toggleSidebar")}}),o.value.start?.map(c=>p(u(c)))]),p("div",{class:"vp-navbar-center"},[o.value.center?.map(c=>p(u(c)))]),p("div",{class:"vp-navbar-end"},[o.value.end?.map(c=>p(u(c))),p(Vv,{active:s.value,onToggle:()=>{s.value=!s.value}})])]),p(rM,{show:s.value},n)]}});const _d=(t,e)=>e.activeMatch?new RegExp(e.activeMatch,"u").test(t.path):fv(t,e.link);var uM=xe({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(t){const e=Mi();return()=>xt(t.config.link)?p(hn,{class:["vp-sidebar-link",{active:_d(e,t.config)}],config:{...t.config,exact:!0}}):p("p",t,[p(Pt("VPIcon"),{icon:t.config.icon,sizing:"both"}),t.config.text])}});const xd=(t,e)=>"children"in e?!!e.prefix&&fv(t,e.prefix)||e.children.some(n=>xd(t,n)):_d(t,e);var fM=xe({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(t,{emit:e}){const n=Mi(),i=qe(!1),r=$(()=>xd(n,t.config)),s=$(()=>_d(n,t.config)),a=$(()=>t.open||t.config.expanded&&!i.value);return()=>{const{collapsible:o,children:l=[],icon:u,prefix:c,link:f,text:d}=t.config;return p("section",{class:"vp-sidebar-group"},[p(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||f,exact:s.value,active:r.value}],...o?{type:"button",onClick:()=>{i.value=!0,e("toggle")}}:{}},[p(Pt("VPIcon"),{icon:u,sizing:"both"}),f?p(hn,{class:"vp-sidebar-title no-external-link-icon",config:{text:d,link:f}}):p("span",{class:"vp-sidebar-title"},d),o?p("span",{class:["vp-arrow",a.value?"down":"end"]}):null]),a.value||!o?p(zv,{key:c,config:l}):null])}}}),zv=xe({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(t){const e=Mi(),n=ub(),i=qe(-1),r=s=>{i.value=s===i.value?-1:s};return bi(n,()=>{const s=t.config.findIndex(a=>xd(e,a));i.value=s},{flush:"post"}),()=>p("ul",{class:"vp-sidebar-links"},t.config.map((s,a)=>p("li","children"in s?p(fM,{config:s,open:a===i.value,onToggle:()=>{r(a)}}):p(uM,{config:s}))))}}),dM=xe({name:"SideBar",slots:Object,setup(t,{slots:e}){const n=Mi(),i=vd(),r=Ye();return vt(()=>{bi(()=>n.hash,s=>{const a=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${s}"]`);if(!a)return;const{top:o,height:l}=r.value.getBoundingClientRect(),{top:u,height:c}=a.getBoundingClientRect();u<o?a.scrollIntoView(!0):u+c>o+l&&a.scrollIntoView(!1)})}),()=>p("aside",{ref:r,key:"sidebar",id:"sidebar",class:"vp-sidebar","vp-sidebar":""},[e.sidebarTop?.(),e.sidebarItems?.(i.value)??p(zv,{config:i.value}),e.sidebarBottom?.()])}}),bd=xe({name:"MainLayout",props:{containerClass:String,noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(t,{slots:e}){const{frontmatter:n,theme:i,themeLocale:r}=zt(),{isMobile:s,isPC:a}=Gl(),o=yn(),[l,u]=Ba(!1),[c,f]=Ba(!1),d=vd(),h=Ye(),v=dd(h),_=qe(!1),g=$(()=>t.noNavbar||n.value.navbar===!1||r.value.navbar===!1?!1:!!(r.value.logo??r.value.repo??r.value.navbar)),m=$(()=>n.value.externalLinkIcon??i.value.externalLinkIcon??!0),E=$(()=>!t.noToc&&!n.value.home&&!!(n.value.toc??r.value.toc??!0)),x={x:0,y:0},S=D=>{x.x=D.changedTouches[0].clientX,x.y=D.changedTouches[0].clientY},A=D=>{const O=D.changedTouches[0].clientX-x.x,y=D.changedTouches[0].clientY-x.y;Math.abs(O)>Math.abs(y)*1.5&&Math.abs(O)>40&&(O>0&&x.x<=80?u(!0):u(!1))};let P=0;return lt("scroll",Bg(()=>{const D=window.scrollY;D<=58||D<P?_.value=!1:P+200<D&&!l.value&&(_.value=!0),P=D},300,!0)),Dt(s,D=>{D||u(!1)}),Dt(l,D=>{v.value=D}),er(()=>{u(!1)}),vt(()=>{h.value=document.body}),Ji(()=>{v.value=!1}),()=>{const D=e.sidebarTop?.(),O=e.sidebarItems?.(d.value),y=e.sidebarBottom?.(),M=Us(D)&&Us(O)&&Us(y),L=t.noSidebar||n.value.sidebar===!1||(n.value.home||d.value.length===0)&&M;return p(bn("GlobalEncrypt")?Pt("GlobalEncrypt"):sd,()=>p("div",{class:["theme-container",{"hide-navbar":_.value,"no-navbar":!g.value,"sidebar-collapsed":!s.value&&!a.value&&c.value,"sidebar-open":s.value&&l.value,"no-sidebar":L,"external-link-icon":m.value,pure:o.value,"has-toc":E.value},t.containerClass??"",n.value.containerClass??""],"vp-container":"",onTouchStart:S,onTouchEnd:A},[g.value?p(cM,{onToggleSidebar:()=>u()},e):null,p(Gs,{name:"fade-in"},()=>l.value?p("div",{class:"vp-sidebar-mask",onClick:()=>u(!1)}):null),p(Gs,{name:"fade-in"},()=>s.value?null:p("div",{class:"toggle-sidebar-wrapper",onClick:()=>f()},p("span",{class:["arrow",c.value?"end":"start"]}))),L?null:p(dM,null,e),e.default(),p(YE)]))}}});const Hv=()=>{const{frontmatter:t,themeLocale:e}=zt(),n=$(()=>t.value.changelog??((e.value.changelog??!1)&&!t.value.home)),i=$(()=>{const{contributors:s,home:a}=t.value;return qi(s)?a?!1:e.value.contributors??!0:s??(a?!1:e.value.contributors??!0)}),r=$(()=>t.value.lastUpdated??e.value.lastUpdated??!0);return{changelog:n,contributors:i,lastUpdated:r}};var Wl=xe({name:"MarkdownContent",props:{custom:Boolean},slots:Object,setup(t,{slots:e}){const n=wr(),{changelog:i,contributors:r}=Hv(),s=qe(),a=by(s,{delayEnter:el(n.value.focus)?n.value.focus:1500,delayLeave:0}),o=$(()=>!!(n.value.focus??n.value.pure)&&a.value);return vt(()=>{const l=document.documentElement;bi(o,u=>{l.classList.toggle("is-focusing",u)})}),()=>p("div",{class:{custom:t.custom},"vp-content":""},[e.contentBefore?.(),p(Sg,{ref:s,id:"markdown-content"}),e.contentAfter?.(),i.value&&bn("GitChangelog")?p(Pt("GitChangelog")):null,r.value==="content"&&bn("GitContributors")?p(Pt("GitContributors")):null])}});const hM=({target:t})=>{const e=document.querySelector(t.hash);if(e){const n=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",n)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",n),e.focus(),window.scrollTo(0,0)}};var yd=xe({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=oi(),n=Ye();return er(()=>{n.value?.focus()}),()=>[p("span",{ref:n,tabindex:"-1"}),p("a",{href:`#${t.content}`,class:"vp-skip-link sr-only",onClick:hM},e.value.routerLocales.skipToContent)]}});const Du=()=>p(Et,{name:"slide-down"},()=>p("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));Du.displayName="SlideDownIcon";const Sd=(t,{emit:e})=>p("button",{type:"button",class:"vp-hero-slide-down-button",onClick:()=>{e("click")}},[p(Du),p(Du)]);Sd.displayName="HeroSlideDownButton";const Tp=t=>{t.style.transform="translateY(0)",t.style.opacity="1"};var Qe=xe({name:"DropTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},group:Boolean,appear:Boolean},slots:Object,setup(t,{slots:e}){const n=i=>{i.style.transition=`transform ${t.duration}s ease-in-out ${t.delay}s, opacity ${t.duration}s ease-in-out ${t.delay}s`,i.style.transform="translateY(-20px)",i.style.opacity="0"};return()=>{const i={name:"drop",appear:t.appear,onAppear:n,onAfterAppear:Tp,onEnter:n,onAfterEnter:Tp,onBeforeLeave:n};return t.group?p(tg,i,e.default):p(Gs,i,e.default)}}});let wc=null,Cc=null;const Lu={wait:()=>wc,pending:()=>{wc=new Promise(t=>{Cc=t})},resolve:()=>{Cc?.(),wc=null,Cc=null}};var Gv=xe({name:"MainFadeInUpTransition",slots:Object,setup(t,{slots:e}){const n=yn();return()=>n.value?p(sd,e.default):p(Gs,{name:"fade-in-up",mode:"out-in",onBeforeEnter:Lu.resolve,onBeforeLeave:Lu.pending},e.default)}}),Wv=xe({name:"PageTitle",setup(){const{frontmatter:t,page:e,themeLocale:n}=zt(),{info:i,items:r}=UE();return()=>p("div",{class:"vp-page-title"},[p("h1",[n.value.titleIcon===!1?null:p(Pt("VPIcon"),{icon:t.value.icon}),e.value.title]),p(Mv,{info:i.value,items:r.value}),p("hr")])}});const pM=(t,e)=>{const n=t.replace(e,"/").split("/"),i=[];let r=Qf(e);return n.forEach((s,a)=>{a!==n.length-1?(r+=`${s}/`,i.push({link:r,name:s||"Home"})):s!==""&&(r+=s,i.push({link:r,name:s}))}),i};var mM=xe({name:"BreadCrumb",setup(){const{frontmatter:t,page:e,routeLocale:n,routePath:i,themeLocale:r}=zt(),s=Ye([]),a=$(()=>(t.value.breadcrumb??r.value.breadcrumb??!0)&&s.value.length>1),o=$(()=>t.value.breadcrumbIcon??r.value.breadcrumbIcon??!0),l=()=>{const u=pM(e.value.path,n.value).map(({link:c,name:f})=>{const{path:d,meta:h,notFound:v}=zn(c);return v||h.breadcrumbExclude?null:{title:h.shortTitle||h.title||f,icon:h.icon,path:d}}).filter(c=>c!==null);u.length>1&&(s.value=u)};return vt(()=>{bi(i,l)}),()=>p("nav",{class:["vp-breadcrumb",{disable:!a.value}]},a.value?p("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},s.value.map((u,c)=>p("li",{class:{"is-active":s.value.length-1===c},property:"itemListElement",typeof:"ListItem"},[p(Gt,{to:u.path,property:"item",typeof:"WebPage"},()=>[o.value?p(Pt("VPIcon"),{icon:u.icon}):null,p("span",{property:"name"},u.title||"Unknown")]),p("meta",{property:"position",content:c+1})]))):[])}});const Ap=(t,e)=>t===!1?t:Tr(t)?{...t,link:xl(t.link,!0,e).link}:xt(t)?xl(t,!0,e):null,Iu=(t,e,n)=>{const i=t.findIndex(s=>s.link===e);if(i!==-1){if(!t[i+n])return null;const s=t[i+n];return s.link?s:"prefix"in s&&!zn(s.prefix).notFound?{...s,link:s.prefix}:null}for(const s of t)if("children"in s){const a=Iu(s.children,e,n);if(a)return a}const r=t.findIndex(s=>"prefix"in s&&s.prefix===e);if(r!==-1){if(!t[r+n])return null;const s=t[r+n];return s.link?s:"prefix"in s&&!zn(s.prefix).notFound?{...s,link:s.prefix}:null}return null},gM=()=>{const{frontmatter:t,routePath:e,themeLocale:n}=zt(),i=vd(),r=$(()=>{const a=Ap(t.value.prev,e.value);return a===!1?null:a??(n.value.prevLink===!1?null:Iu(i.value,e.value,-1))}),s=$(()=>{const a=Ap(t.value.next,e.value);return a===!1?null:a??(n.value.nextLink===!1?null:Iu(i.value,e.value,1))});return{prevLink:r,nextLink:s}};var vM=xe({name:"PageNav",setup(){const t=Hn(),e=tr(),{prevLink:n,nextLink:i}=gM();return lt("keydown",r=>{if(r.altKey)switch(r.key){case"ArrowRight":{i.value&&(e(i.value.link),r.preventDefault());break}case"ArrowLeft":{n.value&&(e(n.value.link),r.preventDefault());break}}}),()=>n.value||i.value?p("nav",{class:"vp-page-nav"},[n.value?p(hn,{class:"prev",config:n.value},()=>[p("div",{class:"hint"},[p("span",{class:"arrow start"}),t.value.prev]),p("div",{class:"link"},[p(Pt("VPIcon"),{icon:n.value?.icon}),n.value?.text])]):null,i.value?p(hn,{class:"next",config:i.value},()=>[p("div",{class:"hint"},[t.value.next,p("span",{class:"arrow end"})]),p("div",{class:"link"},[i.value?.text,p(Pt("VPIcon"),{icon:i.value?.icon})])]):null]):null}}),_M=xe({name:"PrintButton",setup(){const t=Hn(),e=wr();return()=>e.value.print===!1?null:p("button",{type:"button",class:"print-button",title:t.value.print,onClick:()=>{window.print()}},p(bv))}});const wp={selector:[...Array.from({length:6}).map((t,e)=>`#markdown-content > h${e+1}`),"[vp-content] > h2"].join(", "),levels:"deep",ignore:[".vp-badge",".vp-icon"]};var xM=xe({name:"TOC",props:{items:Array},slots:Object,setup(t,{slots:e}){const{frontmatter:n,themeLocale:i}=zt(),r=$(()=>{const g=n.value.toc??i.value.toc;return Tr(g)?{...wp,...g}:g??!0?wp:void 0}),s=jb(r),a=Mi(),o=Hn(),[l,u]=Ba(),c=Ye(),f=qe("-2rem"),d=g=>{c.value?.scrollTo({top:g,behavior:"smooth"})},h=()=>{if(c.value){const g=document.querySelector(".vp-toc-item.active");g?f.value=`${g.getBoundingClientRect().top-c.value.getBoundingClientRect().top+c.value.scrollTop}px`:f.value="-2rem"}else f.value="-2rem"};vt(()=>{bi(()=>a.hash,g=>{if(c.value){const m=document.querySelector(`#toc a.vp-toc-link[href$="${g}"]`);if(!m)return;const{top:E,height:x}=c.value.getBoundingClientRect(),{top:S,height:A}=m.getBoundingClientRect();S<E?d(c.value.scrollTop+S-E):S+A>E+x&&d(c.value.scrollTop+S+A-E-x)}},{flush:"post"}),bi(()=>a.fullPath,h,{flush:"post"})});const v=({title:g,level:m,slug:E})=>p(Gt,{to:`#${E}`,class:["vp-toc-link",`level${m}`],onClick:()=>{u()}},()=>g),_=g=>g.length>0?p("ul",{class:"vp-toc-list"},g.map(m=>{const E=_(m.children);return[p("li",{class:["vp-toc-item",{active:a.hash===`#${m.slug}`}]},v(m)),E?p("li",E):null]})):null;return()=>r.value||t.items?.length?p(id,()=>{const g=t.items?.length?_(t.items):_(s.value),m=e.toc?.(s.value)??(g?[p("div",{class:"vp-toc-header",onClick:()=>{u()}},[o.value.toc,p(_M),p("div",{class:["arrow",l.value?"down":"end"]})]),p("div",{class:["vp-toc-wrapper",l.value?"open":""],ref:c},[g,p("div",{class:"vp-toc-marker",style:{top:f.value}})])]:null),E=e.tocBefore?.(),x=e.tocAfter?.();return Us(m)&&Us(E)&&Us(x)?null:p("div",{class:"vp-toc-placeholder"},[p("aside",{id:"toc","vp-toc":""},[E,m,x])])}):null}});const $v=()=>p(Et,{name:"edit"},()=>[p("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),p("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);$v.displayName="EditIcon";const bM={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},yM=({docsRepo:t,docsBranch:e,docsDir:n,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const s=md(t);let a="";return r?a=r:s!==null&&(a=bM[s]),a?a.replace(/:repo/u,Js(t)?t:`https://github.com/${t}`).replace(/:branch/u,e).replace(/:path/u,rg(`${Qf(n)}/${i}`)):null},SM=()=>{const{frontmatter:t,page:e,themeLocale:n}=zt(),i=Hn();return $(()=>{const{repo:r,docsRepo:s=r,docsBranch:a="main",docsDir:o="",editLink:l,editLinkPattern:u=""}=n.value;if(!(t.value.editLink??l??!0)||!s)return null;const c=yM({docsRepo:s,docsBranch:a,docsDir:o,editLinkPattern:u,filePathRelative:e.value.filePathRelative});return c?{text:i.value.editLink,link:c}:null})};var EM=xe({name:"PageMeta",setup(){const t=Hv(),e=Hg(),n=SM(),i=Ry(t.lastUpdated),r=Hn();return()=>p("footer",{class:"vp-page-meta"},[n.value?p("div",{class:"vp-meta-item edit-link"},p(hn,{class:"vp-meta-label",config:n.value},{before:()=>p($v)})):null,p("div",{class:"vp-meta-item git-info"},[(!t.changelog.value||!bn("GitChangelog"))&&i.value?p("div",{class:"update-time"},[p("span",{class:"vp-meta-label"},`${i.value.locale}: `),p("time",{class:"vp-meta-info",datetime:i.value.iso,"data-allow-mismatch":""},i.value.text)]):null,t.contributors.value&&t.contributors.value!=="content"&&e.value.length>0?p("div",{class:"contributors"},[p("span",{class:"vp-meta-label"},`${r.value.contributors}: `),e.value.map(({email:s,name:a},o,l)=>[p("span",{class:"vp-meta-info",title:`email: ${s}`},a),o===l.length-1?"":","])]):null])])}}),MM=xe({name:"PageContent",slots:Object,setup(t,{slots:e}){const{frontmatter:n}=zt(),{isDarkMode:i}=no();return()=>p("main",{id:"main-content",class:"vp-page"},p(bn("LocalEncrypt")?Pt("LocalEncrypt"):sd,()=>[e.pageTop?.(),n.value.cover?p("div",{class:"page-cover"},p("img",{src:yt(n.value.cover),alt:"","no-view":""})):null,p(mM),p(Wv),p(xM,null,e),e.content?.()??p(Wl,null,e),p(EM),p(vM),bn("CommentService")?p(Pt("CommentService"),{darkmode:i.value}):null,e.pageBottom?.()]))}});const Nu=(t,{slots:e})=>{const{bgImage:n,bgImageDark:i,bgImageStyle:r,color:s,description:a,image:o,imageDark:l,header:u,features:c=[]}=t;return p("div",{class:"vp-feature-wrapper"},[n?p("div",{class:["vp-feature-bg",{light:i}],style:[{"background-image":`url(${n})`},r]}):null,i?p("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${i})`},r]}):null,p("div",{class:"vp-feature",style:s?{color:s}:{}},[e.image?.(t)??[o?p("img",{class:["vp-feature-image",{light:l}],src:yt(o),alt:""}):null,l?p("img",{class:"vp-feature-image dark",src:yt(l),alt:""}):null],e.info?.(t)??[u?p("h2",{class:"vp-feature-header"},u):null,a?p("div",{class:"vp-feature-description",innerHTML:a}):null],c.length>0?p("div",{class:"vp-features"},c.map(({icon:f,title:d,details:h,link:v})=>{const _=[p("h3",{class:"vp-feature-title"},[p(Pt("VPIcon"),{icon:f}),p("span",{innerHTML:d})]),p("div",{class:"vp-feature-details",innerHTML:h})];return v?Fl(v)?p("a",{class:"vp-feature-item link",href:v,"aria-label":d,target:"_blank"},_):p(Gt,{class:"vp-feature-item link",to:v,"aria-label":d},()=>_):p("div",{class:"vp-feature-item"},_)})):null])])};Nu.displayName="FeaturePanel";var TM=xe({name:"HeroInfo",slots:Object,setup(t,{slots:e}){const{frontmatter:n,siteLocale:i}=zt(),r=$(()=>{const{heroText:l,tagline:u,heroStyle:c,heroFullScreen:f=!1}=n.value;return{text:l??(i.value.title||"Hello"),tagline:u??i.value.description,style:c??null,isFullScreen:f}}),s=$(()=>{const{heroImage:l,heroImageDark:u,heroAlt:c,heroImageStyle:f}=n.value;return{image:l?yt(l):null,imageDark:u?yt(u):null,style:f??null,alt:c??""}}),a=$(()=>{const{bgImage:l,bgImageDark:u,bgImageStyle:c}=n.value;return{image:xt(l)?yt(l):null,imageDark:xt(u)?yt(u):null,style:c??null}}),o=$(()=>n.value.actions??[]);return()=>p("header",{class:["vp-hero-info-wrapper",{"hero-fullscreen":r.value.isFullScreen}],style:r.value.style},[e.heroBg?.(a.value)??[a.value.image?p("div",{class:["vp-hero-mask",{light:a.value.imageDark}],style:[{"background-image":`url(${a.value.image})`},a.value.style]}):null,a.value.imageDark?p("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${a.value.imageDark})`},a.value.style]}):null],p("div",{class:"vp-hero-info"},[e.heroLogo?.(s.value)??p(Qe,{appear:!0,group:!0},()=>{const{image:l,imageDark:u,style:c,alt:f}=s.value;return[l?p("img",{key:"light",class:["vp-hero-image",{light:u}],style:c,src:l,alt:f}):null,u?p("img",{key:"dark",class:"vp-hero-image dark",style:c,src:u,alt:f}):null]}),e.heroInfo?.(r.value)??p("div",{class:"vp-hero-infos"},[r.value.text?p(Qe,{appear:!0,delay:.04},()=>p("h1",{id:"main-title",class:"vp-hero-title"},r.value.text)):null,r.value.tagline?p(Qe,{appear:!0,delay:.08},()=>p("div",{id:"main-description",innerHTML:r.value.tagline})):null,o.value.length>0?p(Qe,{appear:!0,delay:.12},()=>p("p",{class:"vp-hero-actions"},o.value.map(l=>p(hn,{class:["vp-hero-action",l.type??"default","no-external-link-icon"],config:l})))):null])]),r.value.isFullScreen?p(Sd,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}}):null])}});const Xv=(t,{slots:e})=>{const{bgImage:n,bgImageDark:i,bgImageStyle:r,color:s,description:a,image:o,imageDark:l,header:u,highlights:c=[],type:f="un-order"}=t;return p("div",{class:"vp-highlight-wrapper",style:s?{color:s}:{}},[n?p("div",{class:["vp-highlight-bg",{light:i}],style:[{"background-image":`url(${n})`},r]}):null,i?p("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${i})`},r]}):null,p("div",{class:"vp-highlight"},[e.image?.(t)??[o?p("img",{class:["vp-highlight-image",{light:l}],src:yt(o),alt:""}):null,l?p("img",{class:"vp-highlight-image dark",src:yt(l),alt:""}):null],e.info?.(t)??[p("div",{class:"vp-highlight-info-wrapper"},p("div",{class:"vp-highlight-info"},[u?p("h2",{class:"vp-highlight-header",innerHTML:u}):null,a?p("div",{class:"vp-highlight-description",innerHTML:a}):null,e.highlights?.(c)??p(f==="order"?"ol":f==="no-order"?"dl":"ul",{class:"vp-highlights"},c.map(({icon:d,title:h,details:v,link:_})=>{const g=[p(f==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[d?p(Pt("VPIcon"),{class:"vp-highlight-icon",icon:d}):null,p("span",{innerHTML:h})]),v?p(f==="no-order"?"dd":"div",{class:"vp-highlight-details",innerHTML:v}):null];return p(f==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:_}]},_?Fl(_)?p("a",{class:"vp-highlight-item link",href:_,"aria-label":h,target:"_blank"},g):p(Gt,{class:"vp-highlight-item link",to:_,"aria-label":h},()=>g):p("div",{class:"vp-highlight-item"},g))}))]))]])])};Xv.displayName="HighlightSection";var AM=xe({name:"HomePage",slots:Object,setup(t,{slots:e}){const n=Ln();return()=>{const{features:i,highlights:r}=n.value;return p("main",{id:"main-content",class:"vp-page vp-project-home","aria-labelledby":n.value.heroText===""?"":"main-title"},[e.heroBefore?.(),p(TM,null,e),e.heroAfter?.(),qi(r)?r.map(s=>"features"in s?p(Nu,s):p(Xv,s)):qi(i)?p(Qe,{appear:!0,delay:.24},()=>p(Nu,{features:i})):null,e.content?.()??p(Qe,{appear:!0,delay:.32},()=>p(Wl,null,e))])}}}),wM=xe({name:"PortfolioHero",slots:Object,setup(t,{slots:e}){const n=dv(),i=Ln(),r=qe(0),s=$(()=>i.value.titles?.[r.value]??""),a=qe(""),o=$(()=>{const{name:d,avatar:h,avatarDark:v,avatarAlt:_,avatarStyle:g}=i.value;return{name:d??n.value.name,avatar:h?yt(h):null,avatarDark:v?yt(v):null,alt:(_||d)??"",style:g??null}}),l=$(()=>{const{bgImage:d,bgImageDark:h,bgImageStyle:v}=i.value;return{image:xt(d)?yt(d):null,imageDark:xt(h)?yt(h):null,style:v??null}}),u=$(()=>{const{welcome:d,name:h,titles:v=[],medias:_}=i.value;return{name:h??n.value.name,welcome:d??"👋 Hi There, I'm",title:a.value,titles:v,medias:_??null}}),c=()=>{a.value="";let d=0,h=!1;const v=async()=>{if(!h)if(a.value+=s.value[d],d+=1,await Ei(),d<s.value.length)setTimeout(()=>{v()},150);else{const{length:_}=u.value.titles;setTimeout(()=>{r.value=_<=1||r.value===u.value.titles.length-1?0:r.value+1},1e3)}};return v(),()=>{h=!0}};let f;return vt(()=>{bi(s,()=>{f?.(),f=c()})}),()=>p("section",{id:"portfolio",class:["vp-portfolio",{bg:l.value.image}]},[e.portfolioBg?.(l.value)??[l.value.image?p("div",{class:["vp-portfolio-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.style]}):null,l.value.imageDark?p("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.style]}):null],e.portfolioAvatar?.(o.value)??p("div",{class:"vp-portfolio-avatar"},[p(Qe,{delay:.04},()=>{const{avatar:d,avatarDark:h,name:v,alt:_,style:g}=o.value;return[d?p("img",{key:"light",class:{light:h},src:d,title:v,alt:_,style:g}):null,h?p("img",{key:"dark",class:"dark",src:h,title:v,alt:_,style:g}):null]})]),p("div",{class:"vp-portfolio-container"},e.portfolioInfo?.(u.value)??p("div",{class:"vp-portfolio-info"},[p(Qe,{appear:!0,delay:.08},()=>p("h6",{class:"vp-portfolio-welcome"},u.value.welcome)),p(Qe,{appear:!0,delay:.12},()=>p("h1",{class:"vp-portfolio-name",id:"main-title"},u.value.name)),p(Qe,{appear:!0,delay:.16},()=>p("h2",{class:"vp-portfolio-title"},a.value)),p(Qe,{appear:!0,delay:.2},()=>u.value.medias?p("div",{class:"vp-portfolio-medias"},u.value.medias.map(({name:d,url:h,icon:v})=>p("a",{class:"vp-portfolio-media",href:h,rel:"noopener noreferrer",target:"_blank",title:d},p(Pt("VPIcon"),{icon:v,sizing:"both"})))):bn("SocialMedias")?p(Pt("SocialMedias")):null)]))])}}),CM=xe({name:"PortfolioHome",slots:Object,setup(t,{slots:e}){const n=Ln();return()=>{const i=n.value.content??"portfolio";return p("main",{id:"main-content",class:"vp-page vp-portfolio-home","aria-labelledby":"main-title"},[p(wM,null,e),i==="none"?null:e.content?.()??p("div",p(Qe,{appear:!0,delay:.24},()=>p(Wl,{class:{"vp-portfolio-content":i==="portfolio"}},e)))])}}}),RM=xe({name:"Layout",slots:Object,setup(t,{slots:e}){const{frontmatter:n,page:i}=zt();return()=>[p(yd),p(bd,null,{...e,default:e.default??(()=>n.value.portfolio?p(CM,null,e):n.value.home?p(AM,null,e):p(Gv,()=>p(MM,{key:i.value.path},e))),navScreenBottom:e.navScreenBottom??(bn("BloggerInfo")?()=>p(Pt("BloggerInfo")):null)})]}}),PM=xe({name:"NotFound",slots:Object,setup(t,{slots:e}){const{routeLocale:n,theme:i,themeLocale:r}=zt(),s=Ar(),a=qe(!1),o=$(()=>i.value.locales[a.value?n.value:"/"].routerLocales),l=()=>{if(!a.value)return o.value.notFoundMsg[0];const u=o.value.notFoundMsg;return u[Math.floor(Math.random()*u.length)]};return vt(()=>{a.value=!0}),()=>[p(yd),p(bd,{noSidebar:!0},{...e,default:()=>p("main",{id:"main-content",class:"vp-page not-found"},e.default?.()??[p("div",{class:"not-found-hint"},[p("p",{class:"error-code"},"404"),p("h1",{class:"error-title"},o.value.notFoundTitle),p("p",{class:"error-hint"},l())]),p("div",{class:"actions"},[p("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},o.value.back),p("button",{type:"button",class:"action-button",onClick:()=>{s.push(r.value.home??n.value)}},o.value.home)])])})]}});const Ed=()=>p(Et,{name:"lock"},()=>p("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));Ed.displayName="LockIcon";const DM=JSON.parse('{"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[0,1,2,3,4]},"指南":{"path":"/category/%E6%8C%87%E5%8D%97/","indexes":[5]},"数据库":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","indexes":[6,7,8]},"医院管理学":{"path":"/category/%E5%8C%BB%E9%99%A2%E7%AE%A1%E7%90%86%E5%AD%A6/","indexes":[9]},"linux":{"path":"/category/linux/","indexes":[10]},"网络":{"path":"/category/%E7%BD%91%E7%BB%9C/","indexes":[11]},"数据结构":{"path":"/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/","indexes":[12]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","indexes":[2]},"加密":{"path":"/tag/%E5%8A%A0%E5%AF%86/","indexes":[3]},"布局":{"path":"/tag/%E5%B8%83%E5%B1%80/","indexes":[5]},"Markdown":{"path":"/tag/markdown/","indexes":[4]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","indexes":[0]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[0]},"栈":{"path":"/tag/%E6%A0%88/","indexes":[12]},"算法":{"path":"/tag/%E7%AE%97%E6%B3%95/","indexes":[12]}}}}}'),qv=JSON.parse('["/demo/page.html","/demo/","/demo/disable.html","/demo/encrypt.html","/demo/markdown.html","/demo/layout.html","/posts/%E5%85%B6%E4%BB%96/1sjk.html","/posts/%E5%85%B6%E4%BB%96/2sjk.html","/posts/%E5%85%B6%E4%BB%96/3.sjk.html","/posts/%E5%85%B6%E4%BB%96/glx.html","/posts/%E5%85%B6%E4%BB%96/linux.html","/posts/%E5%85%B6%E4%BB%96/web.html","/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stack.html","/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/1.html","/intro.html"]'),LM=JSON.parse('{"article":{"/":{"path":"/article/","indexes":[9,10,6,7,8,11,0,13,12,14,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,10,6,7,8,11,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[9,10,13,6,7,8,12,14,1,2,3,5,4,11,0]}}}'),Uu=Ye(DM);$i(Uu);const jv=t=>{const{frontmatter:e,page:n,routeLocale:i}=ts();return $(()=>{const r=t??e.value.blog?.key??"";if(!r)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!(r in Uu.value))throw new Error(`useBlogCategory: key ${r} is invalid`);const s=Uu.value[r][i.value],a={path:s.path,map:{}};for(const o in s.map){const l=s.map[o];a.map[o]={path:l.path,items:[]};for(const u of l.indexes){const{path:c,meta:f}=zn(qv[u]);a.map[o].items.push({path:c,info:f})}n.value.path===l.path&&(a.currentItems=a.map[o].items)}return a})},Ou=Ye(LM);$i(Ou);const $l=t=>{const{frontmatter:e,routeLocale:n}=ts();return $(()=>{const i=t??e.value.blog?.key??"";if(!i)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!(i in Ou.value))throw new Error(`useBlogType: key ${t} is invalid`);const r=Ou.value[i][n.value],s={path:r.path,items:[]};for(const a of r.indexes){const{path:o,meta:l}=zn(qv[a]);s.items.push({path:o,info:l})}return s})},IM={BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>'};var NM=[];const io=()=>{const{theme:t,themeLocale:e}=zt();return $(()=>({...t.value.blog,...e.value.blog}))};var Yv=xe({name:"SocialMedias",setup(){const t=io(),e=yn(),n=$(()=>Qs(t.value.medias??{}).map(([i,r])=>typeof r=="string"?{name:i,icon:IM[i],link:r}:{name:i,...r}));return()=>n.value.length>0?p("div",{class:"vp-social-medias"},n.value.map(({name:i,icon:r,link:s})=>p("a",{class:"vp-social-media",href:s,rel:"noopener noreferrer",target:"_blank","aria-label":i||"",...e.value?{}:{"data-balloon-pos":"up"},innerHTML:Js(r)?`<img class="vp-social-media-icon ${i}-icon" src="${r}">`:r}))):null}});const Kv=Symbol(""),ro=()=>{const t=Rt(Kv);if(!t)throw new Error("useArticles() is called without provider.");return t},UM=()=>{const t=$l("article");Qn(Kv,t)},nr=()=>{const t=oi();return $(()=>t.value.blogLocales)},Zv=Symbol.for("categoryMap"),so=()=>{const t=Rt(Zv);if(!t)throw new Error("useCategoryMap() is called without provider.");return t},OM=()=>{const t=jv("category");Qn(Zv,t)},Jv=Symbol.for("tagMap"),ao=()=>{const t=Rt(Jv);if(!t)throw new Error("useTagMap() is called without provider.");return t},FM=()=>{const t=jv("tag");Qn(Jv,t)},Qv=Symbol(""),Md=()=>{const t=Rt(Qv);if(!t)throw new Error("useTimeline() is called without provider.");return t},BM=()=>{const t=$l("timeline"),e=bg(),n=$(()=>{const i=[];return t.value.items.forEach(({info:r,path:s})=>{const a=od(r.date);if(a){const o=a.getFullYear();i[0]?.year!==o&&i.unshift({year:o,items:[]}),i[0].items.push({date:a.toLocaleDateString(e.value,{month:"numeric",day:"numeric"}),info:r,path:s})}}),{...t.value,config:i.reverse()}});Qn(Qv,n)};var Td=xe({name:"BloggerInfo",slots:Object,setup(t,{slots:e}){const n=nr(),i=io(),{siteLocale:r,themeLocale:s}=zt(),a=ro(),o=so(),l=ao(),u=Md(),c=tr(),f=$(()=>({name:i.value.name??ka(s.value.author)[0]?.name??r.value.title,avatar:i.value.avatar??s.value.logo??null,description:i.value.description??null})),d=$(()=>i.value.intro);return()=>{const{article:h,category:v,tag:_,timeline:g}=n.value,m=[[a.value.path,a.value.items.length,h],[o.value.path,ii(o.value.map).length,v],[l.value.path,ii(l.value.map).length,_],[u.value.path,u.value.items.length,g]];return p("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},e.bloggerInfo?.(f.value)??[p("div",{class:"vp-blogger",...d.value?{"aria-label":n.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>{c(d.value)}}:{}},[f.value.avatar?p("img",{class:"vp-blogger-avatar",src:yt(f.value.avatar),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,f.value.name?p("div",{class:"vp-blogger-name",property:"name"},f.value.name):null,f.value.description?p("div",{class:"vp-blogger-description",innerHTML:f.value.description}):null,d.value?p("meta",{property:"url",content:yt(d.value)}):null]),p("div",{class:"vp-blog-counts"},m.map(([E,x,S])=>p(Gt,{class:"vp-blog-count",to:E},()=>[p("div",{class:"count"},x),p("div",S)]))),p(Yv)])}}});const e1=Symbol(""),Ad=()=>{const t=Rt(e1);if(!t)throw new Error("useStars() is called without provider.");return t},kM=()=>{const t=$l("star");Qn(e1,t)},wd=()=>p(Et,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));wd.displayName="CategoryIcon";const Cd=()=>p(Et,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));Cd.displayName="TagIcon";const Rd=()=>p(Et,{name:"timeline"},()=>p("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));Rd.displayName="TimelineIcon";const t1=()=>p(Et,{name:"slides"},()=>p("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));t1.displayName="SlideIcon";const n1=()=>p(Et,{name:"sticky"},()=>[p("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);n1.displayName="StickyIcon";const Pd=()=>p(Et,{name:"article"},()=>p("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));Pd.displayName="ArticleIcon";const VM=t=>{const e=oi();return $(()=>{const{author:n}=t.value;return n?ka(n):n===!1?[]:ka(e.value.author,!1)})},zM=t=>{const e=so();return $(()=>pv(t.value.category).map(n=>({name:n,path:e.value.map[n].path})))},HM=t=>{const e=ao();return $(()=>mv(t.value.tag).map(n=>({name:n,path:e.value.map[n].path})))},GM=t=>$(()=>od(t.value.date)),WM=t=>{const e=Zs(t,"info"),n=io(),i=VM(e),r=zM(e),s=HM(e),a=GM(e),o=sv(),l=$(()=>({author:i.value,category:r.value,date:a.value,tag:s.value,isOriginal:e.value.isOriginal??!1,readingTime:e.value.readingTime??null,readingTimeLocale:e.value.readingTime&&o.value?rv(e.value.readingTime,o.value):null,pageview:t.path})),u=$(()=>n.value.articleInfo??null);return{info:l,items:u}};var $M=xe({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const n=Zs(t,"info"),{info:i,items:r}=WM(t),s=Ar();return()=>{const{title:a,type:o,isEncrypted:l=!1,cover:u=null,excerpt:c=null,sticky:f}=n.value,d=i.value;return p("div",{class:"vp-article-wrapper",onClick:h=>{h.target?.matches("summary")||(h.preventDefault(),s.push(t.path))}},p("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[e.articleCover?.({cover:u})??(u?[p("img",{class:"vp-article-cover",src:yt(u),alt:"",loading:"lazy"}),p("meta",{property:"image",content:yt(u)})]:[]),f?p(n1):null,p(Gt,{to:t.path},()=>e.articleTitle?.({title:a,isEncrypted:l,type:o})??p("header",{class:"vp-article-title"},[l?p(Ed):null,o==="slide"?p(t1):null,p("span",{property:"headline"},a)])),e.articleExcerpt?.({excerpt:c})??(c?p("div",{class:"vp-article-excerpt",innerHTML:c}):null),p("hr",{class:"vp-article-hr"}),e.articleInfo?.(d)??p(Mv,{info:d,items:r.value,onClick:h=>{h.stopPropagation()}})]))}}});const XM='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>';var qM=xe({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(t,{emit:e}){const n=new ld,i=oi(),r=qe(""),s=$(()=>i.value.paginationLocales),a=$(()=>Math.ceil(t.total/t.perPage)),o=$(()=>!!a.value&&a.value!==1),l=$(()=>a.value<7?!1:t.current>4),u=$(()=>a.value<7?!1:t.current<a.value-3),c=$(()=>{const{current:h}=t;let v=1,_=a.value;const g=[];a.value>=7&&(h<=4&&h<a.value-3?(v=1,_=5):h>4&&h>=a.value-3?(_=a.value,v=a.value-4):a.value>7&&(v=h-2,_=h+2));for(let m=v;m<=_;m++)g.push(m);return g}),f=h=>{e("updateCurrentPage",h)},d=h=>{const v=parseInt(h,10);v<=a.value&&v>0?f(v):n.pop(`${XM}${s.value.errorText.replaceAll(String.raw`\$page`,a.value.toString())}`)};return()=>p("div",{class:"vp-pagination"},o.value?p("nav",{class:"vp-pagination-list"},[p("div",{class:"vp-pagination-number "},[t.current>1?p("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>{f(t.current-1)}},s.value.prev):null,l.value?[p("div",{role:"navigation",onClick:()=>{f(1)}},1),p("div",{class:"ellipsis"},"...")]:null,c.value.map(h=>p("div",{key:h,class:{active:t.current===h},role:"navigation",onClick:()=>{f(h)}},h)),u.value?[p("div",{class:"ellipsis"},"..."),p("div",{role:"navigation",onClick:()=>{f(a.value)}},a.value)]:null,t.current<a.value?p("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>{f(t.current+1)}},s.value.next):null]),p("div",{class:"vp-pagination-nav"},[p("label",{for:"navigation-text"},`${s.value.navigate}: `),p("input",{id:"navigation-text",value:r.value,onInput:({target:h})=>{r.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),d(r.value))}}),p("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:s.value.action,onClick:()=>{d(r.value)}},s.value.action)])]):[])}}),Dd=xe({name:"ArticleList",props:{items:{type:Array,required:!0}},slots:Object,setup(t,{slots:e}){const n=Mi(),i=Ar(),r=nr(),s=io(),a=qe(1),o=$(()=>s.value.articlePerPage??10),l=$(()=>t.items.slice((a.value-1)*o.value,a.value*o.value)),u=async c=>{a.value=c;const f={...n.query};!(f.page===c.toString()||c===1&&!f.page)&&(c===1?delete f.page:f.page=c.toString(),await i.push({path:n.path,query:f}))};return vt(()=>{const{page:c}=n.query;u(c?Number(c):1),Dt(a,()=>{const f=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,f)},100)})}),()=>p("div",{id:"article-list",class:"vp-article-list",role:"feed"},l.value.length>0?[...l.value.map(({info:c,path:f},d)=>p(Qe,{appear:!0,delay:d*.04},()=>p($M,{key:f,info:c,path:f},e))),p(qM,{current:a.value,perPage:o.value,total:t.items.length,onUpdateCurrentPage:u})]:p("h2",{class:"vp-empty-hint"},r.value.empty.replace("$text",r.value.article.toLocaleLowerCase())))}});const jM="//theme-hope-assets.vuejs.press/hero/default.jpg";var YM=xe({name:"BlogHero",slots:Object,setup(t,{slots:e}){const{frontmatter:n,siteLocale:i}=zt(),r=$(()=>{const{heroText:o,heroStyle:l,tagline:u,heroFullScreen:c=!1}=n.value;return{text:o??(i.value.title||"Hello"),tagline:u??"",style:l??null,isFullScreen:c}}),s=$(()=>{const{heroImage:o,heroImageDark:l,heroAlt:u,heroImageStyle:c}=n.value;return{image:o?yt(o):null,imageDark:l?yt(l):null,style:c??null,alt:u??""}}),a=$(()=>{const{bgImage:o,bgImageDark:l,bgImageStyle:u}=n.value;return{image:xt(o)?yt(o):o===!1?null:jM,imageDark:xt(l)?yt(l):null,style:u??null}});return()=>n.value.hero===!1?null:p("div",{class:["vp-blog-hero",{"hero-fullscreen":n.value.heroFullScreen,"no-bg":!a.value.image}]},[e.heroBg?.(a.value)??[a.value.image?p("div",{class:["vp-blog-mask",{light:a.value.imageDark}],style:[{background:`url(${a.value.image}) center/cover no-repeat`},a.value.style]}):null,a.value.imageDark?p("div",{class:"vp-blog-mask dark",style:[{background:`url(${a.value.imageDark}) center/cover no-repeat`},a.value.style]}):null],e.heroLogo?.(s.value)??p(Qe,{appear:!0,group:!0,delay:.04},()=>{const{image:o,imageDark:l,style:u,alt:c}=s.value;return[o?p("img",{key:"light",class:["vp-blog-hero-image",{light:l}],style:u,src:o,alt:c}):null,l?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:u,src:l,alt:c}):null]}),e.heroInfo?.(r.value)??p("div",{class:"vp-blog-hero-info"},[p(Qe,{appear:!0,delay:.08},()=>r.value.text?p("h1",{class:"vp-blog-hero-title"},r.value.text):null),p(Qe,{appear:!0,delay:.12},()=>r.value.tagline?p("div",{class:"vp-blog-hero-description",innerHTML:r.value.tagline}):null)]),n.value.heroFullScreen?p(Sd,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}}):null])}}),KM=xe({name:"ArticlesInfo",setup(){const t=ro(),e=nr(),n=Ad(),i=tr(),r=$(()=>t.value.items.length),s=$(()=>n.value.items);return()=>p(Qe,()=>p("div",{class:"vp-star-article-wrapper"},[p("div",{class:"title",onClick:()=>{i(t.value.path)}},[p(Pd),p("span",{class:"num"},r.value),e.value.article]),p("hr"),s.value.length>0?p("ul",{class:"vp-star-articles"},s.value.map(({info:a,path:o},l)=>p(Qe,{appear:!0,delay:.08*(l+1)},()=>p("li",{class:"vp-star-article"},p(Gt,{to:o},()=>a.title))))):p("div",{class:"vp-star-article-empty"},e.value.empty.replace("$text",e.value.star))]))}}),i1=xe({name:"CategoryList",setup(){const t=Qa(),e=so();return()=>p("ul",{class:"vp-category-list"},Qs(e.value.map).sort(([,n],[,i])=>i.items.length-n.items.length).map(([n,{path:i,items:r}])=>p("li",{class:"vp-category-item"},p(Gt,{class:["vp-category",`color${to(n,Number(ra.colorNumber))}`,{active:i===t.value.path}],to:i},()=>[n,p("span",{class:"vp-category-count"},r.length)]))))}}),ZM=xe({name:"CategoriesInfo",setup(){const t=nr(),e=so(),n=tr(),i=$(()=>ii(e.value.map).length);return()=>p("div",{class:"vp-category-wrapper"},[i.value?[p("div",{class:"title",onClick:()=>{n(e.value.path)}},[p(wd),p("span",{class:"num"},i.value),t.value.category]),p("hr"),p(Qe,{delay:.04},()=>p(i1))]:p("div",{class:"vp-category-empty"},t.value.empty.replace("$text",t.value.category))])}}),r1=xe({name:"TagList",setup(){const t=Ln(),e=ao(),n=i=>i===t.value.blog?.name;return()=>p("ul",{class:"vp-tag-list"},Qs(e.value.map).sort(([,i],[,r])=>r.items.length-i.items.length).map(([i,{path:r,items:s}])=>p("li",{class:"vp-tag-item"},p(Gt,{class:["vp-tag",`color${to(i,Number(ra.colorNumber))}`,{active:n(i)}],to:r},()=>[i,p("span",{class:"vp-tag-count"},s.length)]))))}}),JM=xe({name:"TagsInfo",setup(){const t=nr(),e=ao(),n=tr(),i=$(()=>ii(e.value.map).length);return()=>p("div",{class:"vp-tag-wrapper"},[i.value?[p("div",{class:"title",onClick:()=>{n(e.value.path)}},[p(Cd),p("span",{class:"num"},i.value),t.value.tag]),p("hr"),p(Qe,{delay:.04},()=>p(r1))]:p("div",{class:"vp-tag-empty"},t.value.empty.replace("$text",t.value.tag))])}}),QM=xe({name:"TimelineList",setup(){const t=nr(),e=Md(),n=tr();return()=>p("div",{class:"timeline-list-wrapper"},[p("div",{class:"title",onClick:()=>{n(e.value.path)}},[p(Rd),p("span",{class:"num"},e.value.items.length),t.value.timeline]),p("hr"),p("div",{class:"timeline-content"},p("ul",{class:"timeline-list"},e.value.config.map(({year:i,items:r},s)=>p(Qe,{appear:!0,delay:.08*(s+1)},()=>p("li",[p("h3",{class:"timeline-year"},i),p("ul",{class:"timeline-year-wrapper"},r.map(({date:a,info:o,path:l})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},a),p(Gt,{class:"timeline-title",to:l},()=>o.title)])))])))))])}});const e4={article:Pd,category:wd,tag:Cd,timeline:Rd};var s1=xe({name:"InfoList",setup(){const t=nr(),e=qe("article");return()=>p("div",{class:"vp-blog-infos"},[p("div",{class:"vp-blog-type-switcher"},Qs(e4).map(([n,i])=>p("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{e.value=n}},p("div",{class:["vp-blog-type-icon-wrapper",{active:e.value===n}],"aria-label":t.value[n],"data-balloon-pos":"down"},p(i))))),p(Qe,()=>e.value==="article"?p(KM):e.value==="category"?p(ZM):e.value==="tag"?p(JM):p(QM))])}});const oo=(t,{slots:e})=>p("aside",{class:"vp-blog-info-wrapper"},[e.infoBefore?.(),p(Qe,()=>p(Td,{},e)),p(Qe,{delay:.04},()=>p(s1)),e.infoAfter?.()]);oo.displayName="InfoPanel";var t4=xe({name:"ProjectPanel",props:{items:{type:Array,required:!0}},setup(t){const e=yn(),n=tr();return()=>p("div",{class:"vp-project-panel"},t.items.map(({icon:i,link:r,name:s,desc:a,background:o})=>p("a",{class:["vp-project-card",{[`color${to(s,Number(ra.colorNumber))}`]:!e.value&&!o}],...o?{style:o}:{},href:Vl(r)?yt(r):r,onClick:l=>{n(r),l.preventDefault()}},[i?p(Pt("VPIcon"),{class:"vp-project-icon",icon:i}):null,p("div",{class:"vp-project-name"},s),p("div",{class:"vp-project-desc"},a)])))}}),n4=xe({name:"BlogHome",slots:Object,setup(t,{slots:e}){const n=ro(),i=Ln(),r=$(()=>i.value.projects??[]);return()=>p("div",{class:"vp-page vp-blog-home"},[e.heroBefore?.(),p(YM,{},e),e.heroAfter?.(),p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[e.articlesBefore?.()??(r.value.length>0?p(Qe,{appear:!0,delay:.16},()=>p(t4,{items:r.value})):null),p(Qe,{appear:!0,delay:.24},()=>p(Dd,{items:n.value.items},e)),e.articlesAfter?.()]),p(Qe,{appear:!0,delay:.16},()=>p(oo,{key:"blog"},e))]),e.content?.()??p(Qe,{appear:!0,delay:.28},()=>p(Wl,{},e))])}}),i4=xe({name:"BlogMainLayout",slots:Object,setup(t,{slots:e}){const{isMobile:n}=Gl();return()=>[p(yd),p(bd,{noSidebar:!n.value,noToc:!0},{...e,navScreenBottom:()=>e.navScreenBottom?.()??p(Td,{},e),sidebarItems:i=>e.sidebarItems?.(i)??(n.value?p(s1):null)})]}}),r4=xe({name:"CategoryPage",slots:Object,setup(t,{slots:e}){const n=Qa(),i=Ln(),r=so(),s=ao(),a=$(()=>{const o=i.value.blog;if(o?.type!=="category")return null;const{name:l,key:u}=o;return u==="category"?{component:i1,items:l?r.value.map[l].items:null}:u==="tag"?{component:r1,items:l?s.value.map[l].items:null}:null});return()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},e.default?.()??[p(Qe,{appear:!0},()=>a.value?p(a.value.component):null),e.articlesBefore?.(),a.value?.items?p(Qe,{appear:!0,delay:.08},()=>[p(Dd,{key:n.value.path,items:a.value.items},e)]):null,e.articlesAfter?.()]),p(Qe,{delay:.16},()=>p(oo,{key:"blog"},e))]))}}),s4=xe({name:"TimelineItems",setup(){const t=io(),e=nr(),n=Md(),i=$(()=>t.value.timeline??e.value.timelineTitle);return()=>p("div",{class:"timeline-wrapper"},p("ul",{class:"timeline-content"},[p(Qe,()=>p("li",{class:"motto"},i.value)),n.value.config.map(({year:r,items:s},a)=>p(Qe,{appear:!0,delay:.08*(a+1),group:!0},()=>[p("h3",{key:"title",id:r,class:"timeline-year-title"},p("span",r)),p("li",{key:"content",class:"timeline-year-list"},[p("ul",{class:"timeline-year-wrapper"},s.map(({date:o,info:l,path:u})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},o),p(Gt,{class:"timeline-title",to:u},()=>l.title)])))])]))]))}});const a1=(t,{slots:e})=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[e.articlesBefore?.(),p(Qe,{appear:!0},()=>p(s4)),e.articlesAfter?.()]),p(Qe,{appear:!0},()=>p(oo,{key:"blog"},e))]));a1.displayName="TimelinePage";var a4=xe({name:"ArticleType",setup(){const{page:t,routeLocale:e}=zt(),n=ro(),i=Ad(),r=nr(),s=$(()=>[{text:r.value.all,path:n.value.path},{text:r.value.star,path:i.value.path},...NM.map(({key:a,path:o})=>{const l=o.replace(/^\//,e.value);return{text:r.value[a]??zn(l).meta.title??a,path:l}})]);return()=>p("ul",{class:"vp-article-type-wrapper"},s.value.map(a=>p("li",{class:["vp-article-type",{active:a.path===t.value.path}]},p(Gt,{to:a.path},()=>a.text))))}}),o4=xe({name:"TypePage",slots:Object,setup(t,{slots:e}){const n=$l(),i=Ln(),r=Qa(),s=ro(),a=Ad(),o=$(()=>{const l=i.value.blog;return l?.type!=="type"||!l.key?s.value.items:l.key==="star"?a.value.items:n.value.items});return()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},e.default?.()??[p(Qe,()=>p(a4)),e.articlesBefore?.(),p(Qe,{appear:!0,delay:.08},()=>p(Dd,{key:r.value.path,items:o.value})),e.articlesAfter?.()]),p(Qe,{appear:!0,delay:.08},()=>p(oo,{key:"blog"},e))]))}}),o1=xe({name:"Blog",slots:Object,setup(t,{slots:e}){const n=Ln();return()=>{const{type:i,key:r}=n.value.blog??{};return p(i4,null,{...e,default:()=>e.default?.()??p(i==="category"?r4:i==="type"?r==="timeline"?a1:o4:n4,null,e)})}}});const l4=()=>{UM(),OM(),kM(),FM(),BM()},c4=setTimeout,Pa=16,l1=10,u4=16,f4=100,as="./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),sr=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,0,1,54,55,56,57,58,59,60,61,62,63,-1,-1,-1,-1,-1,-1,-1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,-1,-1,-1,-1,-1,-1,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,-1,-1,-1,-1,-1],d4=[608135816,2242054355,320440878,57701188,2752067618,698298832,137296536,3964562569,1160258022,953160567,3193202383,887688300,3232508343,3380367581,1065670069,3041331479,2450970073,2306472731],h4=[3509652390,2564797868,805139163,3491422135,3101798381,1780907670,3128725573,4046225305,614570311,3012652279,134345442,2240740374,1667834072,1901547113,2757295779,4103290238,227898511,1921955416,1904987480,2182433518,2069144605,3260701109,2620446009,720527379,3318853667,677414384,3393288472,3101374703,2390351024,1614419982,1822297739,2954791486,3608508353,3174124327,2024746970,1432378464,3864339955,2857741204,1464375394,1676153920,1439316330,715854006,3033291828,289532110,2706671279,2087905683,3018724369,1668267050,732546397,1947742710,3462151702,2609353502,2950085171,1814351708,2050118529,680887927,999245976,1800124847,3300911131,1713906067,1641548236,4213287313,1216130144,1575780402,4018429277,3917837745,3693486850,3949271944,596196993,3549867205,258830323,2213823033,772490370,2760122372,1774776394,2652871518,566650946,4142492826,1728879713,2882767088,1783734482,3629395816,2517608232,2874225571,1861159788,326777828,3124490320,2130389656,2716951837,967770486,1724537150,2185432712,2364442137,1164943284,2105845187,998989502,3765401048,2244026483,1075463327,1455516326,1322494562,910128902,469688178,1117454909,936433444,3490320968,3675253459,1240580251,122909385,2157517691,634681816,4142456567,3825094682,3061402683,2540495037,79693498,3249098678,1084186820,1583128258,426386531,1761308591,1047286709,322548459,995290223,1845252383,2603652396,3431023940,2942221577,3202600964,3727903485,1712269319,422464435,3234572375,1170764815,3523960633,3117677531,1434042557,442511882,3600875718,1076654713,1738483198,4213154764,2393238008,3677496056,1014306527,4251020053,793779912,2902807211,842905082,4246964064,1395751752,1040244610,2656851899,3396308128,445077038,3742853595,3577915638,679411651,2892444358,2354009459,1767581616,3150600392,3791627101,3102740896,284835224,4246832056,1258075500,768725851,2589189241,3069724005,3532540348,1274779536,3789419226,2764799539,1660621633,3471099624,4011903706,913787905,3497959166,737222580,2514213453,2928710040,3937242737,1804850592,3499020752,2949064160,2386320175,2390070455,2415321851,4061277028,2290661394,2416832540,1336762016,1754252060,3520065937,3014181293,791618072,3188594551,3933548030,2332172193,3852520463,3043980520,413987798,3465142937,3030929376,4245938359,2093235073,3534596313,375366246,2157278981,2479649556,555357303,3870105701,2008414854,3344188149,4221384143,3956125452,2067696032,3594591187,2921233993,2428461,544322398,577241275,1471733935,610547355,4027169054,1432588573,1507829418,2025931657,3646575487,545086370,48609733,2200306550,1653985193,298326376,1316178497,3007786442,2064951626,458293330,2589141269,3591329599,3164325604,727753846,2179363840,146436021,1461446943,4069977195,705550613,3059967265,3887724982,4281599278,3313849956,1404054877,2845806497,146425753,1854211946,1266315497,3048417604,3681880366,3289982499,290971e4,1235738493,2632868024,2414719590,3970600049,1771706367,1449415276,3266420449,422970021,1963543593,2690192192,3826793022,1062508698,1531092325,1804592342,2583117782,2714934279,4024971509,1294809318,4028980673,1289560198,2221992742,1669523910,35572830,157838143,1052438473,1016535060,1802137761,1753167236,1386275462,3080475397,2857371447,1040679964,2145300060,2390574316,1461121720,2956646967,4031777805,4028374788,33600511,2920084762,1018524850,629373528,3691585981,3515945977,2091462646,2486323059,586499841,988145025,935516892,3367335476,2599673255,2839830854,265290510,3972581182,2759138881,3795373465,1005194799,847297441,406762289,1314163512,1332590856,1866599683,4127851711,750260880,613907577,1450815602,3165620655,3734664991,3650291728,3012275730,3704569646,1427272223,778793252,1343938022,2676280711,2052605720,1946737175,3164576444,3914038668,3967478842,3682934266,1661551462,3294938066,4011595847,840292616,3712170807,616741398,312560963,711312465,1351876610,322626781,1910503582,271666773,2175563734,1594956187,70604529,3617834859,1007753275,1495573769,4069517037,2549218298,2663038764,504708206,2263041392,3941167025,2249088522,1514023603,1998579484,1312622330,694541497,2582060303,2151582166,1382467621,776784248,2618340202,3323268794,2497899128,2784771155,503983604,4076293799,907881277,423175695,432175456,1378068232,4145222326,3954048622,3938656102,3820766613,2793130115,2977904593,26017576,3274890735,3194772133,1700274565,1756076034,4006520079,3677328699,720338349,1533947780,354530856,688349552,3973924725,1637815568,332179504,3949051286,53804574,2852348879,3044236432,1282449977,3583942155,3416972820,4006381244,1617046695,2628476075,3002303598,1686838959,431878346,2686675385,1700445008,1080580658,1009431731,832498133,3223435511,2605976345,2271191193,2516031870,1648197032,4164389018,2548247927,300782431,375919233,238389289,3353747414,2531188641,2019080857,1475708069,455242339,2609103871,448939670,3451063019,1395535956,2413381860,1841049896,1491858159,885456874,4264095073,4001119347,1565136089,3898914787,1108368660,540939232,1173283510,2745871338,3681308437,4207628240,3343053890,4016749493,1699691293,1103962373,3625875870,2256883143,3830138730,1031889488,3479347698,1535977030,4236805024,3251091107,2132092099,1774941330,1199868427,1452454533,157007616,2904115357,342012276,595725824,1480756522,206960106,497939518,591360097,863170706,2375253569,3596610801,1814182875,2094937945,3421402208,1082520231,3463918190,2785509508,435703966,3908032597,1641649973,2842273706,3305899714,1510255612,2148256476,2655287854,3276092548,4258621189,236887753,3681803219,274041037,1734335097,3815195456,3317970021,1899903192,1026095262,4050517792,356393447,2410691914,3873677099,3682840055,3913112168,2491498743,4132185628,2489919796,1091903735,1979897079,3170134830,3567386728,3557303409,857797738,1136121015,1342202287,507115054,2535736646,337727348,3213592640,1301675037,2528481711,1895095763,1721773893,3216771564,62756741,2142006736,835421444,2531993523,1442658625,3659876326,2882144922,676362277,1392781812,170690266,3921047035,1759253602,3611846912,1745797284,664899054,1329594018,3901205900,3045908486,2062866102,2865634940,3543621612,3464012697,1080764994,553557557,3656615353,3996768171,991055499,499776247,1265440854,648242737,3940784050,980351604,3713745714,1749149687,3396870395,4211799374,3640570775,1161844396,3125318951,1431517754,545492359,4268468663,3499529547,1437099964,2702547544,3433638243,2581715763,2787789398,1060185593,1593081372,2418618748,4260947970,69676912,2159744348,86519011,2512459080,3838209314,1220612927,3339683548,133810670,1090789135,1078426020,1569222167,845107691,3583754449,4072456591,1091646820,628848692,1613405280,3757631651,526609435,236106946,48312990,2942717905,3402727701,1797494240,859738849,992217954,4005476642,2243076622,3870952857,3732016268,765654824,3490871365,2511836413,1685915746,3888969200,1414112111,2273134842,3281911079,4080962846,172450625,2569994100,980381355,4109958455,2819808352,2716589560,2568741196,3681446669,3329971472,1835478071,660984891,3704678404,4045999559,3422617507,3040415634,1762651403,1719377915,3470491036,2693910283,3642056355,3138596744,1364962596,2073328063,1983633131,926494387,3423689081,2150032023,4096667949,1749200295,3328846651,309677260,2016342300,1779581495,3079819751,111262694,1274766160,443224088,298511866,1025883608,3806446537,1145181785,168956806,3641502830,3584813610,1689216846,3666258015,3200248200,1692713982,2646376535,4042768518,1618508792,1610833997,3523052358,4130873264,2001055236,3610705100,2202168115,4028541809,2961195399,1006657119,2006996926,3186142756,1430667929,3210227297,1314452623,4074634658,4101304120,2273951170,1399257539,3367210612,3027628629,1190975929,2062231137,2333990788,2221543033,2438960610,1181637006,548689776,2362791313,3372408396,3104550113,3145860560,296247880,1970579870,3078560182,3769228297,1714227617,3291629107,3898220290,166772364,1251581989,493813264,448347421,195405023,2709975567,677966185,3703036547,1463355134,2715995803,1338867538,1343315457,2802222074,2684532164,233230375,2599980071,2000651841,3277868038,1638401717,4028070440,3237316320,6314154,819756386,300326615,590932579,1405279636,3267499572,3150704214,2428286686,3959192993,3461946742,1862657033,1266418056,963775037,2089974820,2263052895,1917689273,448879540,3550394620,3981727096,150775221,3627908307,1303187396,508620638,2975983352,2726630617,1817252668,1876281319,1457606340,908771278,3720792119,3617206836,2455994898,1729034894,1080033504,976866871,3556439503,2881648439,1522871579,1555064734,1336096578,3548522304,2579274686,3574697629,3205460757,3593280638,3338716283,3079412587,564236357,2993598910,1781952180,1464380207,3163844217,3332601554,1699332808,1393555694,1183702653,3581086237,1288719814,691649499,2847557200,2895455976,3193889540,2717570544,1781354906,1676643554,2592534050,3230253752,1126444790,2770207658,2633158820,2210423226,2615765581,2414155088,3127139286,673620729,2805611233,1269405062,4015350505,3341807571,4149409754,1057255273,2012875353,2162469141,2276492801,2601117357,993977747,3918593370,2654263191,753973209,36408145,2530585658,25011837,3520020182,2088578344,530523599,2918365339,1524020338,1518925132,3760827505,3759777254,1202760957,3985898139,3906192525,674977740,4174734889,2031300136,2019492241,3983892565,4153806404,3822280332,352677332,2297720250,60907813,90501309,3286998549,1016092578,2535922412,2839152426,457141659,509813237,4120667899,652014361,1966332200,2975202805,55981186,2327461051,676427537,3255491064,2882294119,3433927263,1307055953,942726286,933058658,2468411793,3933900994,4215176142,1361170020,2001714738,2830558078,3274259782,1222529897,1679025792,2729314320,3714953764,1770335741,151462246,3013232138,1682292957,1483529935,471910574,1539241949,458788160,3436315007,1807016891,3718408830,978976581,1043663428,3165965781,1927990952,4200891579,2372276910,3208408903,3533431907,1412390302,2931980059,4132332400,1947078029,3881505623,4168226417,2941484381,1077988104,1320477388,886195818,18198404,3786409e3,2509781533,112762804,3463356488,1866414978,891333506,18488651,661792760,1628790961,3885187036,3141171499,876946877,2693282273,1372485963,791857591,2686433993,3759982718,3167212022,3472953795,2716379847,445679433,3561995674,3504004811,3574258232,54117162,3331405415,2381918588,3769707343,4154350007,1140177722,4074052095,668550556,3214352940,367459370,261225585,2610173221,4209349473,3468074219,3265815641,314222801,3066103646,3808782860,282218597,3406013506,3773591054,379116347,1285071038,846784868,2669647154,3771962079,3550491691,2305946142,453669953,1268987020,3317592352,3279303384,3744833421,2610507566,3859509063,266596637,3847019092,517658769,3462560207,3443424879,370717030,4247526661,2224018117,4143653529,4112773975,2788324899,2477274417,1456262402,2901442914,1517677493,1846949527,2295493580,3734397586,2176403920,1280348187,1908823572,3871786941,846861322,1172426758,3287448474,3383383037,1655181056,3139813346,901632758,1897031941,2986607138,3066810236,3447102507,1393639104,373351379,950779232,625454576,3124240540,4148612726,2007998917,544563296,2244738638,2330496472,2058025392,1291430526,424198748,50039436,29584100,3605783033,2429876329,2791104160,1057563949,3255363231,3075367218,3463963227,1469046755,985887462],c1=[1332899944,1700884034,1701343084,1684370003,1668446532,1869963892],Fu=(t,e)=>{if(e<=0||e>t.length)throw Error(`Illegal length: ${e}`);let n=0,i,r;const s=[];for(;n<e;){if(i=t[n++]&255,s.push(as[i>>2&63]),i=(i&3)<<4,n>=e){s.push(as[i&63]);break}if(r=t[n++]&255,i|=r>>4&15,s.push(as[i&63]),i=(r&15)<<2,n>=e){s.push(as[i&63]);break}r=t[n++]&255,i|=r>>6&3,s.push(as[i&63]),s.push(as[r&63])}return s.join("")},p4=(t,e)=>{const n=t.length;let i=0,r=0,s,a,o,l,u,c;const f=[];for(;i<n-1&&r<e&&(c=t.charCodeAt(i++),s=c<sr.length?sr[c]:-1,c=t.charCodeAt(i++),a=c<sr.length?sr[c]:-1,!(s===-1||a===-1||(u=s<<2>>>0,u|=(a&48)>>4,f.push(String.fromCharCode(u)),++r>=e||i>=n)||(c=t.charCodeAt(i++),o=c<sr.length?sr[c]:-1,o===-1)||(u=(a&15)<<4>>>0,u|=(o&60)>>2,f.push(String.fromCharCode(u)),++r>=e||i>=n)));)c=t.charCodeAt(i++),l=c<sr.length?sr[c]:-1,u=(o&3)<<6>>>0,u|=l,f.push(String.fromCharCode(u)),++r;return f.map(d=>d.charCodeAt(0))},Va=(t,e,n,i)=>{let r,s=t[e],a=t[e+1];return s^=n[0],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[1],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[2],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[3],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[4],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[5],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[6],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[7],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[8],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[9],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[10],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[11],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[12],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[13],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[14],r=i[s>>>24],r+=i[256|s>>16&255],r^=i[512|s>>8&255],r+=i[768|s&255],a^=r^n[15],r=i[a>>>24],r+=i[256|a>>16&255],r^=i[512|a>>8&255],r+=i[768|a&255],s^=r^n[16],t[e]=a^n[u4+1],t[e+1]=s,t},Ms=(t,e)=>{let n=0;for(let i=0;i<4;++i)n=n<<8|t[e]&255,e=(e+1)%t.length;return{key:n,offp:e}},Cp=(t,e,n)=>{const i=e.length,r=n.length;let s=0,a=new Int32Array([0,0]),o;for(let l=0;l<i;l++)o=Ms(t,s),s=o.offp,e[l]^=o.key;for(let l=0;l<i;l+=2)a=Va(a,0,e,n),e[l]=a[0],e[l+1]=a[1];for(let l=0;l<r;l+=2)a=Va(a,0,e,n),n[l]=a[0],n[l+1]=a[1]},m4=(t,e,n,i)=>{const r=n.length,s=i.length;let a=0,o=new Int32Array([0,0]),l;for(let u=0;u<r;u++)l=Ms(e,a),a=l.offp,n[u]^=l.key;a=0;for(let u=0;u<r;u+=2)l=Ms(t,a),a=l.offp,o[0]^=l.key,l=Ms(t,a),a=l.offp,o[1]^=l.key,o=Va(o,0,n,i),n[u]=o[0],n[u+1]=o[1];for(let u=0;u<s;u+=2)l=Ms(t,a),a=l.offp,o[0]^=l.key,l=Ms(t,a),a=l.offp,o[1]^=l.key,o=Va(o,0,n,i),i[u]=o[0],i[u+1]=o[1]},Rp=(t,e,n,i,r)=>{const s=new Int32Array(c1),a=s.length;n=1<<n>>>0;const o=new Int32Array(d4),l=new Int32Array(h4);m4(e,t,o,l);let u=0;const c=()=>{if(u<n){const d=Date.now();for(;u<n&&(u+=1,Cp(t,o,l),Cp(e,o,l),!(Date.now()-d>f4)););}else{for(let h=0;h<64;h++)for(let v=0;v<a>>1;v++)Va(s,v<<1,o,l);const d=[];for(let h=0;h<a;h++)d.push(s[h]>>24&255),d.push(s[h]>>16&255),d.push(s[h]>>8&255),d.push(s[h]&255);return i?d:Promise.resolve(d)}if(!i)return new Promise(d=>c4(()=>{c().then(d)}))};if(!i)return c();let f;do f=c();while(!f);return f},g4=t=>{try{const e=new Uint32Array(t);return globalThis.crypto.getRandomValues(e),Array.from(e)}catch{throw Error("WebCryptoAPI / globalThis is not available")}},u1=(...t)=>new Error(`Illegal arguments: ${t.map(e=>typeof e).join(", ")}`),v4=(t=l1)=>{if(typeof t!="number")throw u1(t);return t=t<4?4:t>31?31:t,`$2b$${t<10?"0":""}${t}$${Fu(g4(Pa),Pa)}`},_4=t=>{let e=0,n=0;for(let i=0;i<t.length;++i)n=t.charCodeAt(i),n<128?e+=1:n<2048?e+=2:(n&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320?(i++,e+=4):e+=3;return e},x4=t=>{let e=0,n,i;const r=new Array(_4(t));for(let s=0,a=t.length;s<a;++s)n=t.charCodeAt(s),n<128?r[e++]=n:n<2048?(r[e++]=n>>6|192,r[e++]=n&63|128):(n&64512)===55296&&((i=t.charCodeAt(s+1))&64512)===56320?(n=65536+((n&1023)<<10)+(i&1023),++s,r[e++]=n>>18|240,r[e++]=n>>12&63|128,r[e++]=n>>6&63|128,r[e++]=n&63|128):(r[e++]=n>>12|224,r[e++]=n>>6&63|128,r[e++]=n&63|128);return r},b4=(t,e,n,i)=>{if(typeof t!="string"||typeof e!="string")throw new Error("Invalid content / salt: not a string");let r,s;if(e.charAt(0)!=="$"||e.charAt(1)!=="2")throw new Error("Invalid salt version: "+e.substring(0,2));if(e.charAt(2)==="$")r="\0",s=3;else{if(r=e.charAt(2),r!=="a"&&r!=="b"&&r!=="y"||e.charAt(3)!=="$")throw Error("Invalid salt revision: "+e.substring(2,4));s=4}const a=e.substring(s,s+2),o=/\d\d/.test(a)?Number(a):null;if(o===null)throw new Error("Missing salt rounds");if(o<4||o>31)throw new Error(`Illegal number of rounds (4-31): ${o}`);const l=e.substring(s+3,s+25);t+=r>="a"?"\0":"";const u=x4(t),c=p4(l,Pa);if(c.length!==Pa)throw new Error(`Illegal salt: ${l}`);const f=d=>`$2${r>="a"?r:""}$${o<10?"0":""}${o}$${Fu(c,Pa)}${Fu(d,c1.length*4-1)}`;return n?f(Rp(u,c,o,!0)):Rp(u,c,o,!1).then(d=>f(d))},y4=(t,e=l1)=>b4(t,typeof e=="number"?v4(e):e,!0),Bu=(t,e)=>{if(typeof t!="string"||typeof e!="string")throw u1(t,e);return e.length!==60?!1:y4(t,e.substring(0,29))===e};var f1=xe({name:"PasswordModal",props:{hint:String,full:Boolean,showTitle:Boolean},emits:["verify"],setup(t,{emit:e}){const{frontmatter:n,themeLocale:i}=zt(),r=qe(""),s=qe(!1),a=qe(!1),o=$(()=>i.value.encryptLocales);let l=null;const u=()=>{l&&clearTimeout(l),s.value=!1,e("verify",r.value,a.value),Ei().then(()=>{s.value=!0,l=setTimeout(()=>{s.value=!1},1e3)})};return()=>p("div",{class:["vp-decrypt-layer",{expand:t.full||n.value.home}]},[t.showTitle?p(Wv):null,p("div",{class:"vp-decrypt-modal"},[p("div",{class:["vp-decrypt-hint",{tried:s.value}]},s.value?o.value.errorHint:p(Ed,{"aria-label":o.value.iconLabel})),t.hint?p("div",{class:"vp-decrypt-hint"},t.hint):null,p("div",{class:"vp-decrypt-input"},[p("input",{type:"password",value:r.value,placeholder:o.value.placeholder,onInput:({target:c})=>{r.value=c.value},onKeydown:({key:c})=>{c==="Enter"&&u()}})]),p("div",{class:"vp-remember-password"},[p("input",{id:"remember-password",type:"checkbox",value:a.value,onChange:()=>{a.value=!a.value}}),p("label",{for:"remember-password"},o.value.remember)]),p("button",{type:"button",class:"vp-decrypt-submit",onClick:()=>{u()}},"OK")])])}});const d1=()=>{const t=wr();return $(()=>t.value.encrypt)},Pp="VUEPRESS_HOPE_GLOBAL_TOKEN",S4=()=>{const t=d1(),e=ns(Pp,""),n=hd(Pp,"");return{status:$(()=>{const{global:i=!1,admin:r}=t.value,s=i&&!!r?.tokens.length,a=s?e.value?t.value.admin.tokens.every(o=>!Bu(e.value,o)):t.value.admin.tokens.every(o=>!Bu(n.value,o)):!1;return{isEncrypted:s,isLocked:a,hint:r?.hint??""}}),validate:(i,r=!1)=>{(r?e:n).value=i}}};var E4=xe({name:"GlobalEncrypt",slots:Object,setup(t,{slots:e}){const{status:n,validate:i}=S4(),r=qe(!1);return vt(()=>{r.value=!0}),()=>{const{isEncrypted:s,isLocked:a,hint:o}=n.value;return p(Gv,()=>s?r.value?a?p(f1,{full:!0,hint:o,onVerify:i}):e.default():null:e.default())}}});const Rc=(t,e)=>!!e&&Bu(e,t),Dp="VUEPRESS_HOPE_PATH_TOKEN",M4=()=>{const t=Qa(),e=d1(),n=ns(Dp,{}),i=hd(Dp,{}),r=a=>Tr(e.value.config)?ii(e.value.config).filter(o=>Fa(decodeURI(a),o)).sort((o,l)=>l.length-o.length):[],s=a=>{const{config:o={}}=e.value,l=r(a);if(l.length>0){const u=l.find(c=>o[c].hint);return{isEncrypted:!0,isLocked:l.some(c=>(n.value[c]?o[c].tokens.every(f=>!Rc(f,n.value[c])):!0)&&(i.value[c]?o[c].tokens.every(f=>!Rc(f,i.value[c])):!0)),hint:u?o[u].hint:""}}return{isEncrypted:!1,isLocked:!1,hint:""}};return{status:$(()=>s(t.value.path)),getStatus:s,validate:(a,o=!1)=>{const{config:l={}}=e.value,u=r(t.value.path);for(const c of u)if(l[c].tokens.some(f=>Rc(f,a))){(o?n:i).value[c]=a;break}}}};var T4=xe({name:"LocalEncrypt",slots:Object,setup(t,{slots:e}){const{status:n,validate:i}=M4(),r=qe(!1);return vt(()=>{r.value=!0}),()=>{const{isEncrypted:s,isLocked:a,hint:o}=n.value;return s?r.value?a?p(f1,{showTitle:!0,full:!0,hint:o,onVerify:i}):e.default():null:e.default()}}});sE(t=>{const e=t.title,n=t.index??!0,i=t.icon;return n?{title:e,content:i?()=>[p(Pt("VPIcon"),{icon:i,sizing:"both"}),e]:null,order:t.order,index:t.index}:null});const A4={enhance:({app:t,router:e})=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=async(...i)=>(await Lu.wait(),n(...i)),WE(t),t.component("BloggerInfo",Td),t.component("SocialMedias",Yv),t.component("GlobalEncrypt",E4),t.component("LocalEncrypt",T4)},setup:()=>{$E(),jE(),l4()},layouts:{Layout:RM,NotFound:PM,Blog:o1}},w4=Object.freeze(Object.defineProperty({__proto__:null,default:A4},Symbol.toStringTag,{value:"Module"})),C4=()=>{vt(async()=>{await je(()=>import("./copy-tex.min-DiW6421u.js").then(t=>t.c),[])})},R4={setup:()=>{C4()}},P4=Object.freeze(Object.defineProperty({__proto__:null,default:R4},Symbol.toStringTag,{value:"Module"})),D4=({selector:t='div[class*="language-"].has-collapsed-lines > .collapsed-lines'}={})=>{lt("click",e=>{const n=e.target;if(n.matches(t)){const i=n.parentElement;i?.classList.toggle("collapsed")&&i.scrollIntoView({block:"center",behavior:"instant"})}},{passive:!0})},L4={setup(){D4()}},I4=Object.freeze(Object.defineProperty({__proto__:null,default:L4},Symbol.toStringTag,{value:"Module"})),N4=xe({name:"HitokotoBlogHero",inheritAttrs:!1,props:{text:{type:String,required:!0},image:[String,null],imageDark:[String,null],alt:String,imageStyle:[String,Object]},setup(t){const e=qe(""),n=qe(""),i=qe("");let r=!1;const s=()=>fetch("https://v1.hitokoto.cn").then(a=>a.json()).then(({from:a,hitokoto:o})=>{e.value=o,i.value=a});return vt(()=>{r=!0,Dt(e,()=>{n.value="";let a=0;const o=()=>(n.value+=e.value[a],a+=1,Ei().then(()=>{a<e.value.length?setTimeout(()=>{o()},150):r&&setTimeout(()=>{s()},3e3)}));o()}),s()}),Ji(()=>{r=!1}),()=>[p(Qe,{appear:!0,group:!0,delay:.04},()=>[t.image?p("img",{key:"light",class:["vp-blog-hero-image",{light:t.imageDark}],style:t.imageStyle,src:t.image,alt:t.alt??t.text}):null,t.imageDark?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:t.imageStyle,src:t.imageDark,alt:t.alt??t.text}):null]),p(Qe,{appear:!0,delay:.08},()=>t.text?p("h1",{class:"vp-blog-hero-title"},t.text):null),p("div",{class:"hitokoto"},[p("p",{class:"hitokoto-text"},p("span",n.value)),p("p",{class:"hitokoto-author",style:{opacity:n.value.length>4?1:0}},`——「${i.value}」`)])]}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ld="182",U4=0,Lp=1,O4=2,nl=1,F4=2,ba=3,Er=0,pn=1,ki=2,zi=0,Bs=1,bl=2,Ip=3,Np=4,B4=5,Hr=100,k4=101,V4=102,z4=103,H4=104,G4=200,W4=201,$4=202,X4=203,ku=204,Vu=205,q4=206,j4=207,Y4=208,K4=209,Z4=210,J4=211,Q4=212,eT=213,tT=214,zu=0,Hu=1,Gu=2,Xs=3,Wu=4,$u=5,Xu=6,qu=7,h1=0,nT=1,iT=2,vi=0,p1=1,m1=2,g1=3,Id=4,v1=5,_1=6,x1=7,b1=300,Qr=301,qs=302,ju=303,Yu=304,Xl=306,Ku=1e3,Vi=1001,Zu=1002,Jt=1003,rT=1004,Co=1005,sn=1006,Pc=1007,Xr=1008,Cn=1009,y1=1010,S1=1011,za=1012,Nd=1013,yi=1014,pi=1015,Yi=1016,Ud=1017,Od=1018,Ha=1020,E1=35902,M1=35899,T1=1021,A1=1022,Kn=1023,Ki=1026,qr=1027,w1=1028,Fd=1029,js=1030,Bd=1031,kd=1033,il=33776,rl=33777,sl=33778,al=33779,Ju=35840,Qu=35841,ef=35842,tf=35843,nf=36196,rf=37492,sf=37496,af=37488,of=37489,lf=37490,cf=37491,uf=37808,ff=37809,df=37810,hf=37811,pf=37812,mf=37813,gf=37814,vf=37815,_f=37816,xf=37817,bf=37818,yf=37819,Sf=37820,Ef=37821,Mf=36492,Tf=36494,Af=36495,wf=36283,Cf=36284,Rf=36285,Pf=36286,sT=3200,C1=0,aT=1,_r="",Bn="srgb",Ys="srgb-linear",yl="linear",gt="srgb",os=7680,Up=519,oT=512,lT=513,cT=514,Vd=515,uT=516,fT=517,zd=518,dT=519,Op=35044,Fp="300 es",mi=2e3,Sl=2001;function R1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function hT(){const t=Ga("canvas");return t.style.display="block",t}const Bp={};function kp(...t){const e="THREE."+t.shift();console.log(e,...t)}function Xe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function ut(...t){const e="THREE."+t.shift();console.error(e,...t)}function Wa(...t){const e=t.join(" ");e in Bp||(Bp[e]=!0,Xe(...t))}function pT(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class sa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dc=Math.PI/180,Df=180/Math.PI;function lo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(en[t&255]+en[t>>8&255]+en[t>>16&255]+en[t>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[n&63|128]+en[n>>8&255]+"-"+en[n>>16&255]+en[n>>24&255]+en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function mT(t,e){return(t%e+e)%e}function Lc(t,e,n){return(1-n)*t+n*e}function da(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,n=0){ft.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class co{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(o>=1){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==d||u!==h||c!==v){let g=l*d+u*h+c*v+f*_;g<0&&(d=-d,h=-h,v=-v,_=-_,g=-g);let m=1-o;if(g<.9995){const E=Math.acos(g),x=Math.sin(E);m=Math.sin(m*E)/x,o=Math.sin(o*E)/x,l=l*m+d*o,u=u*m+h*o,c=c*m+v*o,f=f*m+_*o}else{l=l*m+d*o,u=u*m+h*o,c=c*m+v*o,f=f*m+_*o;const E=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=E,u*=E,c*=E,f*=E}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[a],d=s[a+1],h=s[a+2],v=s[a+3];return e[n]=o*v+c*f+l*h-u*d,e[n+1]=l*v+c*d+u*f-o*h,e[n+2]=u*v+c*h+o*d-l*f,e[n+3]=c*v-o*f-l*d-u*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),c=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*c*f+u*h*v,this._y=u*h*f-d*c*v,this._z=u*c*v+d*h*f,this._w=u*c*f-d*h*v;break;case"YXZ":this._x=d*c*f+u*h*v,this._y=u*h*f-d*c*v,this._z=u*c*v-d*h*f,this._w=u*c*f+d*h*v;break;case"ZXY":this._x=d*c*f-u*h*v,this._y=u*h*f+d*c*v,this._z=u*c*v+d*h*f,this._w=u*c*f-d*h*v;break;case"ZYX":this._x=d*c*f-u*h*v,this._y=u*h*f+d*c*v,this._z=u*c*v-d*h*f,this._w=u*c*f+d*h*v;break;case"YZX":this._x=d*c*f+u*h*v,this._y=u*h*f+d*c*v,this._z=u*c*v-d*h*f,this._w=u*c*f-d*h*v;break;case"XZY":this._x=d*c*f-u*h*v,this._y=u*h*f-d*c*v,this._z=u*c*v+d*h*f,this._w=u*c*f+d*h*v;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],c=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(c-l)*h,this._y=(s-u)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(c-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+u)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-u)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+c)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+u)/h,this._y=(l+c)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*o+r*u-s*l,this._y=r*c+a*l+s*o-i*u,this._z=s*c+a*u+i*l-r*o,this._w=a*c-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const u=Math.acos(o),c=Math.sin(u);l=Math.sin(l*u)/c,n=Math.sin(n*u)/c,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),c=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*u+a*f-o*c,this.y=i+l*c+o*u-s*f,this.z=r+l*f+s*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ic.copy(this).projectOnVector(e),this.sub(Ic)}reflect(e){return this.sub(Ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ic=new J,Vp=new co;class Ze{constructor(e,n,i,r,s,a,o,l,u){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=o,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],h=i[5],v=i[8],_=r[0],g=r[3],m=r[6],E=r[1],x=r[4],S=r[7],A=r[2],P=r[5],D=r[8];return s[0]=a*_+o*E+l*A,s[3]=a*g+o*x+l*P,s[6]=a*m+o*S+l*D,s[1]=u*_+c*E+f*A,s[4]=u*g+c*x+f*P,s[7]=u*m+c*S+f*D,s[2]=d*_+h*E+v*A,s[5]=d*g+h*x+v*P,s[8]=d*m+h*S+v*D,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*o*u-i*s*c+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=c*a-o*u,d=o*l-c*s,h=u*s-a*l,v=n*f+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(c*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=h*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Nc.makeScale(e,n)),this}rotate(e){return this.premultiply(Nc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Nc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nc=new Ze,zp=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hp=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function gT(){const t={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===gt&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===gt&&(r.r=ks(r.r),r.g=ks(r.g),r.b=ks(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===_r?yl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ys]:{primaries:e,whitePoint:i,transfer:yl,toXYZ:zp,fromXYZ:Hp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Bn},outputColorSpaceConfig:{drawingBufferColorSpace:Bn}},[Bn]:{primaries:e,whitePoint:i,transfer:gt,toXYZ:zp,fromXYZ:Hp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Bn}}}),t}const ot=gT();function Hi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ks(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class vT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Ga("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ga("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Hi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Hi(n[i]/255)*255):n[i]=Hi(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _T=0;class Hd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=lo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uc(r[a].image)):s.push(Uc(r[a]))}else s=Uc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let xT=0;const Oc=new J;class an extends sa{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Vi,r=Vi,s=sn,a=Xr,o=Kn,l=Cn,u=an.DEFAULT_ANISOTROPY,c=_r){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xT++}),this.uuid=lo(),this.name="",this.source=new Hd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Oc).x}get height(){return this.source.getSize(Oc).y}get depth(){return this.source.getSize(Oc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==b1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ku:e.x=e.x-Math.floor(e.x);break;case Vi:e.x=e.x<0?0:1;break;case Zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ku:e.y=e.y-Math.floor(e.y);break;case Vi:e.y=e.y<0?0:1;break;case Zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=b1;an.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,n=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],h=l[5],v=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+g)<.1&&Math.abs(u+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,S=(h+1)/2,A=(m+1)/2,P=(c+d)/4,D=(f+_)/4,O=(v+g)/4;return x>S&&x>A?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=P/i,s=D/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=O/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=D/s,r=O/s),this.set(i,r,s,n),this}let E=Math.sqrt((g-v)*(g-v)+(f-_)*(f-_)+(d-c)*(d-c));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(f-_)/E,this.z=(d-c)/E,this.w=Math.acos((u+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bT extends sa{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Bt(0,0,e,n),this.scissorTest=!1,this.viewport=new Bt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new an(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Hd(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _i extends bT{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class P1 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yT extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class uo{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint($n.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint($n.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=$n.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(s,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ro.copy(i.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ha),Po.subVectors(this.max,ha),cs.subVectors(e.a,ha),us.subVectors(e.b,ha),fs.subVectors(e.c,ha),ar.subVectors(us,cs),or.subVectors(fs,us),Ir.subVectors(cs,fs);let n=[0,-ar.z,ar.y,0,-or.z,or.y,0,-Ir.z,Ir.y,ar.z,0,-ar.x,or.z,0,-or.x,Ir.z,0,-Ir.x,-ar.y,ar.x,0,-or.y,or.x,0,-Ir.y,Ir.x,0];return!Fc(n,cs,us,fs,Po)||(n=[1,0,0,0,1,0,0,0,1],!Fc(n,cs,us,fs,Po))?!1:(Do.crossVectors(ar,or),n=[Do.x,Do.y,Do.z],Fc(n,cs,us,fs,Po))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pi=[new J,new J,new J,new J,new J,new J,new J,new J],$n=new J,Ro=new uo,cs=new J,us=new J,fs=new J,ar=new J,or=new J,Ir=new J,ha=new J,Po=new J,Do=new J,Nr=new J;function Fc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Nr.fromArray(t,s);const o=r.x*Math.abs(Nr.x)+r.y*Math.abs(Nr.y)+r.z*Math.abs(Nr.z),l=e.dot(Nr),u=n.dot(Nr),c=i.dot(Nr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>o)return!1}return!0}const ST=new uo,pa=new J,Bc=new J;class ql{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ST.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pa.subVectors(e,this.center);const n=pa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(pa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pa.copy(e.center).add(Bc)),this.expandByPoint(pa.copy(e.center).sub(Bc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Di=new J,kc=new J,Lo=new J,lr=new J,Vc=new J,Io=new J,zc=new J;class D1{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,n),Di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){kc.copy(e).add(n).multiplyScalar(.5),Lo.copy(n).sub(e).normalize(),lr.copy(this.origin).sub(kc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Lo),o=lr.dot(this.direction),l=-lr.dot(Lo),u=lr.lengthSq(),c=Math.abs(1-a*a);let f,d,h,v;if(c>0)if(f=a*l-o,d=a*o-l,v=s*c,f>=0)if(d>=-v)if(d<=v){const _=1/c;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+u}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+u):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+u);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(kc).addScaledVector(Lo,d),h}intersectSphere(e,n){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),r=Di.dot(Di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,a=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,a=(e.min.y-d.y)*c),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,n,i,r,s){Vc.subVectors(n,e),Io.subVectors(i,e),zc.crossVectors(Vc,Io);let a=this.direction.dot(zc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;lr.subVectors(this.origin,e);const l=o*this.direction.dot(Io.crossVectors(lr,Io));if(l<0)return null;const u=o*this.direction.dot(Vc.cross(lr));if(u<0||l+u>a)return null;const c=-o*lr.dot(zc);return c<0?null:this.at(c/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class It{constructor(e,n,i,r,s,a,o,l,u,c,f,d,h,v,_,g){It.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,c,f,d,h,v,_,g)}set(e,n,i,r,s,a,o,l,u,c,f,d,h,v,_,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=u,m[6]=c,m[10]=f,m[14]=d,m[3]=h,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new It().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/ds.setFromMatrixColumn(e,0).length(),s=1/ds.setFromMatrixColumn(e,1).length(),a=1/ds.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*c,h=a*f,v=o*c,_=o*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=h+v*u,n[5]=d-_*u,n[9]=-o*l,n[2]=_-d*u,n[6]=v+h*u,n[10]=a*l}else if(e.order==="YXZ"){const d=l*c,h=l*f,v=u*c,_=u*f;n[0]=d+_*o,n[4]=v*o-h,n[8]=a*u,n[1]=a*f,n[5]=a*c,n[9]=-o,n[2]=h*o-v,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*c,h=l*f,v=u*c,_=u*f;n[0]=d-_*o,n[4]=-a*f,n[8]=v+h*o,n[1]=h+v*o,n[5]=a*c,n[9]=_-d*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*c,h=a*f,v=o*c,_=o*f;n[0]=l*c,n[4]=v*u-h,n[8]=d*u+_,n[1]=l*f,n[5]=_*u+d,n[9]=h*u-v,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*u,v=o*l,_=o*u;n[0]=l*c,n[4]=_-d*f,n[8]=v*f+h,n[1]=f,n[5]=a*c,n[9]=-o*c,n[2]=-u*c,n[6]=h*f+v,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*u,v=o*l,_=o*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=d*f+_,n[5]=a*c,n[9]=h*f-v,n[2]=v*f-h,n[6]=o*c,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ET,e,MT)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),cr.crossVectors(i,Mn),cr.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),cr.crossVectors(i,Mn)),cr.normalize(),No.crossVectors(Mn,cr),r[0]=cr.x,r[4]=No.x,r[8]=Mn.x,r[1]=cr.y,r[5]=No.y,r[9]=Mn.y,r[2]=cr.z,r[6]=No.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],h=i[13],v=i[2],_=i[6],g=i[10],m=i[14],E=i[3],x=i[7],S=i[11],A=i[15],P=r[0],D=r[4],O=r[8],y=r[12],M=r[1],L=r[5],U=r[9],k=r[13],z=r[2],X=r[6],B=r[10],G=r[14],q=r[3],le=r[7],ge=r[11],ye=r[15];return s[0]=a*P+o*M+l*z+u*q,s[4]=a*D+o*L+l*X+u*le,s[8]=a*O+o*U+l*B+u*ge,s[12]=a*y+o*k+l*G+u*ye,s[1]=c*P+f*M+d*z+h*q,s[5]=c*D+f*L+d*X+h*le,s[9]=c*O+f*U+d*B+h*ge,s[13]=c*y+f*k+d*G+h*ye,s[2]=v*P+_*M+g*z+m*q,s[6]=v*D+_*L+g*X+m*le,s[10]=v*O+_*U+g*B+m*ge,s[14]=v*y+_*k+g*G+m*ye,s[3]=E*P+x*M+S*z+A*q,s[7]=E*D+x*L+S*X+A*le,s[11]=E*O+x*U+S*B+A*ge,s[15]=E*y+x*k+S*G+A*ye,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],h=e[14],v=e[3],_=e[7],g=e[11],m=e[15],E=l*h-u*d,x=o*h-u*f,S=o*d-l*f,A=a*h-u*c,P=a*d-l*c,D=a*f-o*c;return n*(_*E-g*x+m*S)-i*(v*E-g*A+m*P)+r*(v*x-_*A+m*D)-s*(v*S-_*P+g*D)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],h=e[11],v=e[12],_=e[13],g=e[14],m=e[15],E=f*g*u-_*d*u+_*l*h-o*g*h-f*l*m+o*d*m,x=v*d*u-c*g*u-v*l*h+a*g*h+c*l*m-a*d*m,S=c*_*u-v*f*u+v*o*h-a*_*h-c*o*m+a*f*m,A=v*f*l-c*_*l-v*o*d+a*_*d+c*o*g-a*f*g,P=n*E+i*x+r*S+s*A;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/P;return e[0]=E*D,e[1]=(_*d*s-f*g*s-_*r*h+i*g*h+f*r*m-i*d*m)*D,e[2]=(o*g*s-_*l*s+_*r*u-i*g*u-o*r*m+i*l*m)*D,e[3]=(f*l*s-o*d*s-f*r*u+i*d*u+o*r*h-i*l*h)*D,e[4]=x*D,e[5]=(c*g*s-v*d*s+v*r*h-n*g*h-c*r*m+n*d*m)*D,e[6]=(v*l*s-a*g*s-v*r*u+n*g*u+a*r*m-n*l*m)*D,e[7]=(a*d*s-c*l*s+c*r*u-n*d*u-a*r*h+n*l*h)*D,e[8]=S*D,e[9]=(v*f*s-c*_*s-v*i*h+n*_*h+c*i*m-n*f*m)*D,e[10]=(a*_*s-v*o*s+v*i*u-n*_*u-a*i*m+n*o*m)*D,e[11]=(c*o*s-a*f*s-c*i*u+n*f*u+a*i*h-n*o*h)*D,e[12]=A*D,e[13]=(c*_*r-v*f*r+v*i*d-n*_*d-c*i*g+n*f*g)*D,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*g-n*o*g)*D,e[15]=(a*f*r-c*o*r+c*i*l-n*f*l-a*i*d+n*o*d)*D,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,c=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,c*o+i,c*l-r*a,0,u*l-r*o,c*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,c=a+a,f=o+o,d=s*u,h=s*c,v=s*f,_=a*c,g=a*f,m=o*f,E=l*u,x=l*c,S=l*f,A=i.x,P=i.y,D=i.z;return r[0]=(1-(_+m))*A,r[1]=(h+S)*A,r[2]=(v-x)*A,r[3]=0,r[4]=(h-S)*P,r[5]=(1-(d+m))*P,r[6]=(g+E)*P,r[7]=0,r[8]=(v+x)*D,r[9]=(g-E)*D,r[10]=(1-(d+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=ds.set(r[0],r[1],r[2]).length();const a=ds.set(r[4],r[5],r[6]).length(),o=ds.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Xn.copy(this);const u=1/s,c=1/a,f=1/o;return Xn.elements[0]*=u,Xn.elements[1]*=u,Xn.elements[2]*=u,Xn.elements[4]*=c,Xn.elements[5]*=c,Xn.elements[6]*=c,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=mi,l=!1){const u=this.elements,c=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===mi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Sl)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=f,u[9]=h,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=mi,l=!1){const u=this.elements,c=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===mi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===Sl)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=c,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=f,u[9]=0,u[13]=h,u[2]=0,u[6]=0,u[10]=v,u[14]=_,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ds=new J,Xn=new It,ET=new J(0,0,0),MT=new J(1,1,1),cr=new J,No=new J,Mn=new J,Gp=new It,Wp=new co;class Si{constructor(e=0,n=0,i=0,r=Si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-c,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Gp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Wp.setFromEuler(this),this.setFromQuaternion(Wp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Si.DEFAULT_ORDER="XYZ";class L1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TT=0;const $p=new J,hs=new co,Li=new It,Uo=new J,ma=new J,AT=new J,wT=new co,Xp=new J(1,0,0),qp=new J(0,1,0),jp=new J(0,0,1),Yp={type:"added"},CT={type:"removed"},ps={type:"childadded",child:null},Hc={type:"childremoved",child:null};class Qt extends sa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=lo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new J,n=new Si,i=new co,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new It},normalMatrix:{value:new Ze}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.multiply(hs),this}rotateOnWorldAxis(e,n){return hs.setFromAxisAngle(e,n),this.quaternion.premultiply(hs),this}rotateX(e){return this.rotateOnAxis(Xp,e)}rotateY(e){return this.rotateOnAxis(qp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return $p.copy(e).applyQuaternion(this.quaternion),this.position.add($p.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xp,e)}translateY(e){return this.translateOnAxis(qp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Uo.copy(e):Uo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ma,Uo,this.up):Li.lookAt(Uo,ma,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),hs.setFromRotationMatrix(Li),this.quaternion.premultiply(hs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),ps.child=e,this.dispatchEvent(ps),ps.child=null):ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(CT),Hc.child=e,this.dispatchEvent(Hc),Hc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,e,AT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ma,wT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const u in o){const c=o[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new J(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const qn=new J,Ii=new J,Gc=new J,Ni=new J,ms=new J,gs=new J,Kp=new J,Wc=new J,$c=new J,Xc=new J,qc=new Bt,jc=new Bt,Yc=new Bt;class jn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),qn.subVectors(e,n),r.cross(qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){qn.subVectors(r,n),Ii.subVectors(i,n),Gc.subVectors(e,n);const a=qn.dot(qn),o=qn.dot(Ii),l=qn.dot(Gc),u=Ii.dot(Ii),c=Ii.dot(Gc),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(u*l-o*c)*d,v=(a*c-o*l)*d;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(a,Ni.y),l.addScaledVector(o,Ni.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return qc.setScalar(0),jc.setScalar(0),Yc.setScalar(0),qc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(qc,s.x),a.addScaledVector(jc,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return qn.subVectors(i,n),Ii.subVectors(e,n),qn.cross(Ii).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),qn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return jn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return jn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return jn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return jn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return jn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;ms.subVectors(r,i),gs.subVectors(s,i),Wc.subVectors(e,i);const l=ms.dot(Wc),u=gs.dot(Wc);if(l<=0&&u<=0)return n.copy(i);$c.subVectors(e,r);const c=ms.dot($c),f=gs.dot($c);if(c>=0&&f<=c)return n.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(ms,a);Xc.subVectors(e,s);const h=ms.dot(Xc),v=gs.dot(Xc);if(v>=0&&h<=v)return n.copy(s);const _=h*u-l*v;if(_<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(gs,o);const g=c*v-h*f;if(g<=0&&f-c>=0&&h-v>=0)return Kp.subVectors(s,r),o=(f-c)/(f-c+(h-v)),n.copy(r).addScaledVector(Kp,o);const m=1/(g+_+d);return a=_*m,o=d*m,n.copy(i).addScaledVector(ms,a).addScaledVector(gs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const I1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ur={h:0,s:0,l:0},Oo={h:0,s:0,l:0};function Kc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=mT(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Kc(a,s,e+1/3),this.g=Kc(a,s,e),this.b=Kc(a,s,e-1/3)}return ot.colorSpaceToWorking(this,r),this}setStyle(e,n=Bn){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Bn){const i=I1[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hi(e.r),this.g=Hi(e.g),this.b=Hi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bn){return ot.workingToColorSpace(tn.copy(this),e),Math.round(nt(tn.r*255,0,255))*65536+Math.round(nt(tn.g*255,0,255))*256+Math.round(nt(tn.b*255,0,255))}getHexString(e=Bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.workingToColorSpace(tn.copy(this),n);const i=tn.r,r=tn.g,s=tn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const c=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=c<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=ot.workingColorSpace){return ot.workingToColorSpace(tn.copy(this),n),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=Bn){ot.workingToColorSpace(tn.copy(this),e);const n=tn.r,i=tn.g,r=tn.b;return e!==Bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ur),this.setHSL(ur.h+e,ur.s+n,ur.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ur),e.getHSL(Oo);const i=Lc(ur.h,Oo.h,n),r=Lc(ur.s,Oo.s,n),s=Lc(ur.l,Oo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new st;st.NAMES=I1;let RT=0;class aa extends sa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=lo(),this.name="",this.type="Material",this.blending=Bs,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ku,this.blendDst=Vu,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=os,this.stencilZFail=os,this.stencilZPass=os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Bs&&(i.blending=this.blending),this.side!==Er&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Vu&&(i.blendDst=this.blendDst),this.blendEquation!==Hr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class N1 extends aa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.combine=h1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new J,Fo=new ft;let PT=0;class xi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Op,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Fo.fromBufferAttribute(this,n),Fo.applyMatrix3(e),this.setXY(n,Fo.x,Fo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix3(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyMatrix4(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.applyNormalMatrix(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ht.fromBufferAttribute(this,n),Ht.transformDirection(e),this.setXYZ(n,Ht.x,Ht.y,Ht.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=da(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=vn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=da(n,this.array)),n}setX(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=da(n,this.array)),n}setY(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=da(n,this.array)),n}setZ(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=da(n,this.array)),n}setW(e,n){return this.normalized&&(n=vn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=vn(n,this.array),i=vn(i,this.array),r=vn(r,this.array),s=vn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Op&&(e.usage=this.usage),e}}class U1 extends xi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class O1 extends xi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class _n extends xi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let DT=0;const Un=new It,Zc=new Qt,vs=new J,Tn=new uo,ga=new uo,jt=new J;class Gn extends sa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=lo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R1(e)?O1:U1)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _n(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ql);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ga.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Tn.min,ga.min),Tn.expandByPoint(jt),jt.addVectors(Tn.max,ga.max),Tn.expandByPoint(jt)):(Tn.expandByPoint(ga.min),Tn.expandByPoint(ga.max))}Tn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,c=o.count;u<c;u++)jt.fromBufferAttribute(o,u),l&&(vs.fromBufferAttribute(e,u),jt.add(vs)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let O=0;O<i.count;O++)o[O]=new J,l[O]=new J;const u=new J,c=new J,f=new J,d=new ft,h=new ft,v=new ft,_=new J,g=new J;function m(O,y,M){u.fromBufferAttribute(i,O),c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,O),h.fromBufferAttribute(s,y),v.fromBufferAttribute(s,M),c.sub(u),f.sub(u),h.sub(d),v.sub(d);const L=1/(h.x*v.y-v.x*h.y);isFinite(L)&&(_.copy(c).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(L),g.copy(f).multiplyScalar(h.x).addScaledVector(c,-v.x).multiplyScalar(L),o[O].add(_),o[y].add(_),o[M].add(_),l[O].add(g),l[y].add(g),l[M].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let O=0,y=E.length;O<y;++O){const M=E[O],L=M.start,U=M.count;for(let k=L,z=L+U;k<z;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const x=new J,S=new J,A=new J,P=new J;function D(O){A.fromBufferAttribute(r,O),P.copy(A);const y=o[O];x.copy(y),x.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(P,y);const L=S.dot(l[O])<0?-1:1;a.setXYZW(O,x.x,x.y,x.z,L)}for(let O=0,y=E.length;O<y;++O){const M=E[O],L=M.start,U=M.count;for(let k=L,z=L+U;k<z;k+=3)D(e.getX(k+0)),D(e.getX(k+1)),D(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,a=new J,o=new J,l=new J,u=new J,c=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,g),o.add(c),l.add(c),u.add(c),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),c.subVectors(a,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const u=o.array,c=o.itemSize,f=o.normalized,d=new u.constructor(l.length*c);let h=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*c;for(let m=0;m<c;m++)d[v++]=u[h++]}return new xi(d,c,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let c=0,f=u.length;c<f;c++){const d=u[c],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const h=u[f];c.push(h.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,h=f.length;d<h;d++)c.push(f[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zp=new It,Ur=new D1,Bo=new ql,Jp=new J,ko=new J,Vo=new J,zo=new J,Jc=new J,Ho=new J,Qp=new J,Go=new J;class ri extends Qt{constructor(e=new Gn,n=new N1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ho.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=o[l],f=s[l];c!==0&&(Jc.fromBufferAttribute(f,e),a?Ho.addScaledVector(Jc,c):Ho.addScaledVector(Jc.sub(n),c))}n.add(Ho)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bo.copy(i.boundingSphere),Bo.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(Bo.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(Bo,Jp)===null||Ur.origin.distanceToSquared(Jp)>(e.far-e.near)**2))&&(Zp.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(Zp),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const g=d[v],m=a[g.materialIndex],E=Math.max(g.start,h.start),x=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let S=E,A=x;S<A;S+=3){const P=o.getX(S),D=o.getX(S+1),O=o.getX(S+2);r=Wo(this,m,e,i,u,c,f,P,D,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=v,m=_;g<m;g+=3){const E=o.getX(g),x=o.getX(g+1),S=o.getX(g+2);r=Wo(this,a,e,i,u,c,f,E,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const g=d[v],m=a[g.materialIndex],E=Math.max(g.start,h.start),x=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let S=E,A=x;S<A;S+=3){const P=S,D=S+1,O=S+2;r=Wo(this,m,e,i,u,c,f,P,D,O),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=v,m=_;g<m;g+=3){const E=g,x=g+1,S=g+2;r=Wo(this,a,e,i,u,c,f,E,x,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function LT(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Er,o),l===null)return null;Go.copy(o),Go.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Go);return u<n.near||u>n.far?null:{distance:u,point:Go.clone(),object:t}}function Wo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,ko),t.getVertexPosition(l,Vo),t.getVertexPosition(u,zo);const c=LT(t,e,n,i,ko,Vo,zo,Qp);if(c){const f=new J;jn.getBarycoord(Qp,ko,Vo,zo,f),r&&(c.uv=jn.getInterpolatedAttribute(r,o,l,u,f,new ft)),s&&(c.uv1=jn.getInterpolatedAttribute(s,o,l,u,f,new ft)),a&&(c.normal=jn.getInterpolatedAttribute(a,o,l,u,f,new J),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:o,b:l,c:u,normal:new J,materialIndex:0};jn.getNormal(ko,Vo,zo,d.normal),c.face=d,c.barycoord=f}return c}class fo extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],c=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new _n(u,3)),this.setAttribute("normal",new _n(c,3)),this.setAttribute("uv",new _n(f,2));function v(_,g,m,E,x,S,A,P,D,O,y){const M=S/D,L=A/O,U=S/2,k=A/2,z=P/2,X=D+1,B=O+1;let G=0,q=0;const le=new J;for(let ge=0;ge<B;ge++){const ye=ge*L-k;for(let Oe=0;Oe<X;Oe++){const Be=Oe*M-U;le[_]=Be*E,le[g]=ye*x,le[m]=z,u.push(le.x,le.y,le.z),le[_]=0,le[g]=0,le[m]=P>0?1:-1,c.push(le.x,le.y,le.z),f.push(Oe/D),f.push(1-ge/O),G+=1}}for(let ge=0;ge<O;ge++)for(let ye=0;ye<D;ye++){const Oe=d+ye+X*ge,Be=d+ye+X*(ge+1),at=d+(ye+1)+X*(ge+1),et=d+(ye+1)+X*ge;l.push(Oe,Be,et),l.push(Be,at,et),q+=6}o.addGroup(h,q,y),h+=q,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function cn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function IT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function F1(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const NT={clone:Ks,merge:cn};var UT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends aa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UT,this.fragmentShader=OT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=IT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class B1 extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=mi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fr=new J,em=new ft,tm=new ft;class Vn extends B1{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Df*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Df*2*Math.atan(Math.tan(Dc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fr.x,fr.y).multiplyScalar(-e/fr.z),fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fr.x,fr.y).multiplyScalar(-e/fr.z)}getViewSize(e,n){return this.getViewBounds(e,em,tm),n.subVectors(tm,em)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Dc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const _s=-90,xs=1;class FT extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Vn(_s,xs,e,n);r.layers=this.layers,this.add(r);const s=new Vn(_s,xs,e,n);s.layers=this.layers,this.add(s);const a=new Vn(_s,xs,e,n);a.layers=this.layers,this.add(a);const o=new Vn(_s,xs,e,n);o.layers=this.layers,this.add(o);const l=new Vn(_s,xs,e,n);l.layers=this.layers,this.add(l);const u=new Vn(_s,xs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class k1 extends an{constructor(e=[],n=Qr,i,r,s,a,o,l,u,c){super(e,n,i,r,s,a,o,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class V1 extends _i{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k1(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new fo(5,5,5),s=new si({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:zi});s.uniforms.tEquirect.value=n;const a=new ri(r,s),o=n.minFilter;return n.minFilter===Xr&&(n.minFilter=sn),new FT(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class $o extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const BT={type:"move"};class Qc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $o,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $o,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $o,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),m=this._getHandJoint(u,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),h=.02,v=.005;u.inputState.pinching&&d>h+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=h-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(BT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $o;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class kT extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Si,this.environmentIntensity=1,this.environmentRotation=new Si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class VT extends an{constructor(e=null,n=1,i=1,r,s,a,o,l,u=Jt,c=Jt,f,d){super(null,a,o,l,u,c,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const eu=new J,zT=new J,HT=new Ze;class Vr{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=eu.subVectors(i,n).cross(zT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(eu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||HT.getNormalMatrix(e),r=this.coplanarPoint(eu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new ql,GT=new ft(.5,.5),Xo=new J;class Gd{constructor(e=new Vr,n=new Vr,i=new Vr,r=new Vr,s=new Vr,a=new Vr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=mi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],u=s[3],c=s[4],f=s[5],d=s[6],h=s[7],v=s[8],_=s[9],g=s[10],m=s[11],E=s[12],x=s[13],S=s[14],A=s[15];if(r[0].setComponents(u-a,h-c,m-v,A-E).normalize(),r[1].setComponents(u+a,h+c,m+v,A+E).normalize(),r[2].setComponents(u+o,h+f,m+_,A+x).normalize(),r[3].setComponents(u-o,h-f,m-_,A-x).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(u-l,h-d,m-g,A-S).normalize();else if(r[4].setComponents(u-l,h-d,m-g,A-S).normalize(),n===mi)r[5].setComponents(u+l,h+d,m+g,A+S).normalize();else if(n===Sl)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=GT.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xo.x=r.normal.x>0?e.max.x:e.min.x,Xo.y=r.normal.y>0?e.max.y:e.min.y,Xo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class z1 extends aa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const nm=new It,Lf=new D1,qo=new ql,jo=new J;class WT extends Qt{constructor(e=new Gn,n=new z1){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),qo.radius+=s,e.ray.intersectsSphere(qo)===!1)return;nm.copy(r).invert(),Lf.copy(e.ray).applyMatrix4(nm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,f=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),h=Math.min(u.count,a.start+a.count);for(let v=d,_=h;v<_;v++){const g=u.getX(v);jo.fromBufferAttribute(f,g),im(jo,g,l,r,e,n,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let v=d,_=h;v<_;v++)jo.fromBufferAttribute(f,v),im(jo,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function im(t,e,n,i,r,s,a){const o=Lf.distanceSqToPoint(t);if(o<n){const l=new J;Lf.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $a extends an{constructor(e,n,i=yi,r,s,a,o=Jt,l=Jt,u,c=Ki,f=1){if(c!==Ki&&c!==qr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,c,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Hd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class $T extends $a{constructor(e,n=yi,i=Qr,r,s,a=Jt,o=Jt,l,u=Ki){const c={width:e,height:e,depth:1},f=[c,c,c,c,c,c];super(e,e,n,i,r,s,a,o,l,u),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class H1 extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jl extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,c=l+1,f=e/o,d=n/l,h=[],v=[],_=[],g=[];for(let m=0;m<c;m++){const E=m*d-a;for(let x=0;x<u;x++){const S=x*f-s;v.push(S,-E,0),_.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const x=E+u*m,S=E+u*(m+1),A=E+1+u*(m+1),P=E+1+u*m;h.push(x,S,P),h.push(S,A,P)}this.setIndex(h),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.width,e.height,e.widthSegments,e.heightSegments)}}class El extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const c=[],f=new J,d=new J,h=[],v=[],_=[],g=[];for(let m=0;m<=i;m++){const E=[],x=m/i;let S=0;m===0&&a===0?S=.5/n:m===i&&l===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const P=A/n;f.x=-e*Math.cos(r+P*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+x*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(P+S,1-x),E.push(u++)}c.push(E)}for(let m=0;m<i;m++)for(let E=0;E<n;E++){const x=c[m][E+1],S=c[m][E],A=c[m+1][E],P=c[m+1][E+1];(m!==0||a>0)&&h.push(x,S,P),(m!==i-1||l<Math.PI)&&h.push(S,A,P)}this.setIndex(h),this.setAttribute("position",new _n(v,3)),this.setAttribute("normal",new _n(_,3)),this.setAttribute("uv",new _n(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new El(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class XT extends si{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qT extends aa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=C1,this.normalScale=new ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class jT extends aa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class YT extends aa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tu={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class KT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(c){o++,s===!1&&r.onStart!==void 0&&r.onStart(c,a,o),s=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,d=u.length;f<d;f+=2){const h=u[f],v=u[f+1];if(h.global&&(h.lastIndex=0),h.test(c))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const ZT=new KT;class Wd{constructor(e){this.manager=e!==void 0?e:ZT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Wd.DEFAULT_MATERIAL_NAME="__DEFAULT";const bs=new WeakMap;class JT extends Wd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=tu.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let f=bs.get(a);f===void 0&&(f=[],bs.set(a,f)),f.push({onLoad:n,onError:r})}return a}const o=Ga("img");function l(){c(),n&&n(this);const f=bs.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}bs.delete(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),tu.remove(`image:${e}`);const d=bs.get(this)||[];for(let h=0;h<d.length;h++){const v=d[h];v.onError&&v.onError(f)}bs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){o.removeEventListener("load",l,!1),o.removeEventListener("error",u,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),tu.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class QT extends Wd{constructor(e){super(e)}load(e,n,i,r){const s=new an,a=new JT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class G1 extends Qt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const nu=new It,rm=new J,sm=new J;class eA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ft(512,512),this.mapType=Cn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new ft(1,1),this._viewportCount=1,this._viewports=[new Bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;rm.setFromMatrixPosition(e.matrixWorld),n.position.copy(rm),sm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(sm),n.updateMatrixWorld(),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class $d extends B1{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=c*this.view.offsetY,l=o-c*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class tA extends eA{constructor(){super(new $d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nA extends G1{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new tA}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class iA extends G1{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class rA extends Vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function am(t,e,n,i){const r=sA(i);switch(n){case T1:return t*e;case w1:return t*e/r.components*r.byteLength;case Fd:return t*e/r.components*r.byteLength;case js:return t*e*2/r.components*r.byteLength;case Bd:return t*e*2/r.components*r.byteLength;case A1:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case kd:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qu:case tf:return Math.max(t,16)*Math.max(e,8)/4;case Ju:case ef:return Math.max(t,8)*Math.max(e,8)/2;case nf:case rf:case af:case of:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sf:case lf:case cf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ff:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case df:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case pf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case mf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case vf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _f:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case xf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ef:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mf:case Tf:case Af:return Math.ceil(t/4)*Math.ceil(e/4)*16;case wf:case Cf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rf:case Pf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function sA(t){switch(t){case Cn:case y1:return{byteLength:1,components:1};case za:case S1:case Yi:return{byteLength:2,components:1};case Ud:case Od:return{byteLength:2,components:4};case yi:case Nd:case pi:return{byteLength:4,components:1};case E1:case M1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ld}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ld);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W1(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function aA(t){const e=new WeakMap;function n(o,l){const u=o.array,c=o.usage,f=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),o.onUploadCallback();let h;if(u instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)h=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)h=t.SHORT;else if(u instanceof Uint32Array)h=t.UNSIGNED_INT;else if(u instanceof Int32Array)h=t.INT;else if(u instanceof Int8Array)h=t.BYTE;else if(u instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:h,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,c);else{f.sort((h,v)=>h.start-v.start);let d=0;for(let h=1;h<f.length;h++){const v=f[d],_=f[h];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,v=f.length;h<v;h++){const _=f[h];t.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=e.get(o);(!c||c.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var oA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lA=`#ifdef USE_ALPHAHASH
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
#endif`,cA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,uA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hA=`#ifdef USE_AOMAP
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
#endif`,pA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mA=`#ifdef USE_BATCHING
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
#endif`,gA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_A=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bA=`#ifdef USE_IRIDESCENCE
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
#endif`,yA=`#ifdef USE_BUMPMAP
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
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,EA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,CA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,PA=`#define PI 3.141592653589793
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
} // validated`,DA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,LA=`vec3 transformedNormal = objectNormal;
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
#endif`,IA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FA="gl_FragColor = linearToOutputTexel( gl_FragColor );",BA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kA=`#ifdef USE_ENVMAP
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
#endif`,VA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zA=`#ifdef USE_ENVMAP
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
#endif`,HA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GA=`#ifdef USE_ENVMAP
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
#endif`,WA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$A=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,XA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jA=`#ifdef USE_GRADIENTMAP
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
}`,YA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,JA=`uniform bool receiveShadow;
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
#endif`,QA=`#ifdef USE_ENVMAP
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
#endif`,ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rw=`PhysicalMaterial material;
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
#endif`,sw=`uniform sampler2D dfgLUT;
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
}`,aw=`
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
#endif`,ow=`#if defined( RE_IndirectDiffuse )
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
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uw=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gw=`#if defined( USE_POINTS_UV )
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
#endif`,vw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_w=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sw=`#ifdef USE_MORPHTARGETS
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
#endif`,Ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rw=`#ifdef USE_NORMALMAP
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
#endif`,Pw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Dw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Iw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$w=`float getShadowMask() {
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
}`,Xw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qw=`#ifdef USE_SKINNING
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
#endif`,jw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yw=`#ifdef USE_SKINNING
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
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qw=`#ifndef saturate
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
#endif`,i5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r5=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,s5=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const a5=`varying vec2 vUv;
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
}`,f5=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d5=`#include <common>
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
}`,h5=`#if DEPTH_PACKING == 3200
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
}`,p5=`#define DISTANCE
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
}`,b5=`#include <common>
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
}`,y5=`uniform vec3 diffuse;
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
}`,E5=`#define LAMBERT
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
}`,M5=`#define MATCAP
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
}`,T5=`#define MATCAP
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
}`,A5=`#define NORMAL
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
}`,w5=`#define NORMAL
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
}`,D5=`#define STANDARD
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
}`,L5=`#define TOON
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
}`,Je={alphahash_fragment:oA,alphahash_pars_fragment:lA,alphamap_fragment:cA,alphamap_pars_fragment:uA,alphatest_fragment:fA,alphatest_pars_fragment:dA,aomap_fragment:hA,aomap_pars_fragment:pA,batching_pars_vertex:mA,batching_vertex:gA,begin_vertex:vA,beginnormal_vertex:_A,bsdfs:xA,iridescence_fragment:bA,bumpmap_pars_fragment:yA,clipping_planes_fragment:SA,clipping_planes_pars_fragment:EA,clipping_planes_pars_vertex:MA,clipping_planes_vertex:TA,color_fragment:AA,color_pars_fragment:wA,color_pars_vertex:CA,color_vertex:RA,common:PA,cube_uv_reflection_fragment:DA,defaultnormal_vertex:LA,displacementmap_pars_vertex:IA,displacementmap_vertex:NA,emissivemap_fragment:UA,emissivemap_pars_fragment:OA,colorspace_fragment:FA,colorspace_pars_fragment:BA,envmap_fragment:kA,envmap_common_pars_fragment:VA,envmap_pars_fragment:zA,envmap_pars_vertex:HA,envmap_physical_pars_fragment:QA,envmap_vertex:GA,fog_vertex:WA,fog_pars_vertex:$A,fog_fragment:XA,fog_pars_fragment:qA,gradientmap_pars_fragment:jA,lightmap_pars_fragment:YA,lights_lambert_fragment:KA,lights_lambert_pars_fragment:ZA,lights_pars_begin:JA,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:nw,lights_phong_pars_fragment:iw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:aw,lights_fragment_maps:ow,lights_fragment_end:lw,logdepthbuf_fragment:cw,logdepthbuf_pars_fragment:uw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:dw,map_fragment:hw,map_pars_fragment:pw,map_particle_fragment:mw,map_particle_pars_fragment:gw,metalnessmap_fragment:vw,metalnessmap_pars_fragment:_w,morphinstance_vertex:xw,morphcolor_vertex:bw,morphnormal_vertex:yw,morphtarget_pars_vertex:Sw,morphtarget_vertex:Ew,normal_fragment_begin:Mw,normal_fragment_maps:Tw,normal_pars_fragment:Aw,normal_pars_vertex:ww,normal_vertex:Cw,normalmap_pars_fragment:Rw,clearcoat_normal_fragment_begin:Pw,clearcoat_normal_fragment_maps:Dw,clearcoat_pars_fragment:Lw,iridescence_pars_fragment:Iw,opaque_fragment:Nw,packing:Uw,premultiplied_alpha_fragment:Ow,project_vertex:Fw,dithering_fragment:Bw,dithering_pars_fragment:kw,roughnessmap_fragment:Vw,roughnessmap_pars_fragment:zw,shadowmap_pars_fragment:Hw,shadowmap_pars_vertex:Gw,shadowmap_vertex:Ww,shadowmask_pars_fragment:$w,skinbase_vertex:Xw,skinning_pars_vertex:qw,skinning_vertex:jw,skinnormal_vertex:Yw,specularmap_fragment:Kw,specularmap_pars_fragment:Zw,tonemapping_fragment:Jw,tonemapping_pars_fragment:Qw,transmission_fragment:e5,transmission_pars_fragment:t5,uv_pars_fragment:n5,uv_pars_vertex:i5,uv_vertex:r5,worldpos_vertex:s5,background_vert:a5,background_frag:o5,backgroundCube_vert:l5,backgroundCube_frag:c5,cube_vert:u5,cube_frag:f5,depth_vert:d5,depth_frag:h5,distance_vert:p5,distance_frag:m5,equirect_vert:g5,equirect_frag:v5,linedashed_vert:_5,linedashed_frag:x5,meshbasic_vert:b5,meshbasic_frag:y5,meshlambert_vert:S5,meshlambert_frag:E5,meshmatcap_vert:M5,meshmatcap_frag:T5,meshnormal_vert:A5,meshnormal_frag:w5,meshphong_vert:C5,meshphong_frag:R5,meshphysical_vert:P5,meshphysical_frag:D5,meshtoon_vert:L5,meshtoon_frag:I5,points_vert:N5,points_frag:U5,shadow_vert:O5,shadow_frag:F5,sprite_vert:B5,sprite_frag:k5},Ae={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},hi={basic:{uniforms:cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Je.meshbasic_vert,fragmentShader:Je.meshbasic_frag},lambert:{uniforms:cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshlambert_vert,fragmentShader:Je.meshlambert_frag},phong:{uniforms:cn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:Je.meshphong_vert,fragmentShader:Je.meshphong_frag},standard:{uniforms:cn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag},toon:{uniforms:cn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new st(0)}}]),vertexShader:Je.meshtoon_vert,fragmentShader:Je.meshtoon_frag},matcap:{uniforms:cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Je.meshmatcap_vert,fragmentShader:Je.meshmatcap_frag},points:{uniforms:cn([Ae.points,Ae.fog]),vertexShader:Je.points_vert,fragmentShader:Je.points_frag},dashed:{uniforms:cn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Je.linedashed_vert,fragmentShader:Je.linedashed_frag},depth:{uniforms:cn([Ae.common,Ae.displacementmap]),vertexShader:Je.depth_vert,fragmentShader:Je.depth_frag},normal:{uniforms:cn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Je.meshnormal_vert,fragmentShader:Je.meshnormal_frag},sprite:{uniforms:cn([Ae.sprite,Ae.fog]),vertexShader:Je.sprite_vert,fragmentShader:Je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Je.background_vert,fragmentShader:Je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Je.backgroundCube_vert,fragmentShader:Je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Je.cube_vert,fragmentShader:Je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Je.equirect_vert,fragmentShader:Je.equirect_frag},distance:{uniforms:cn([Ae.common,Ae.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Je.distance_vert,fragmentShader:Je.distance_frag},shadow:{uniforms:cn([Ae.lights,Ae.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Je.shadow_vert,fragmentShader:Je.shadow_frag}};hi.physical={uniforms:cn([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Je.meshphysical_vert,fragmentShader:Je.meshphysical_frag};const Yo={r:0,b:0,g:0},Fr=new Si,V5=new It;function z5(t,e,n,i,r,s,a){const o=new st(0);let l=s===!0?0:1,u,c,f=null,d=0,h=null;function v(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?n:e).get(S)),S}function _(x){let S=!1;const A=v(x);A===null?m(o,l):A&&A.isColor&&(m(A,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(x,S){const A=v(S);A&&(A.isCubeTexture||A.mapping===Xl)?(c===void 0&&(c=new ri(new fo(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:Ks(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(P,D,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Fr.copy(S.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(V5.makeRotationFromEuler(Fr)),c.material.toneMapped=ot.getTransfer(A.colorSpace)!==gt,(f!==A||d!==A.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=A,d=A.version,h=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(u===void 0&&(u=new ri(new jl(2,2),new si({name:"BackgroundMaterial",uniforms:Ks(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=A,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.toneMapped=ot.getTransfer(A.colorSpace)!==gt,A.matrixAutoUpdate===!0&&A.updateMatrix(),u.material.uniforms.uvTransform.value.copy(A.matrix),(f!==A||d!==A.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=A,d=A.version,h=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null))}function m(x,S){x.getRGB(Yo,F1(t)),i.buffers.color.setClear(Yo.r,Yo.g,Yo.b,S,a)}function E(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,S=1){o.set(x),l=S,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(o,l)},render:_,addToRenderList:g,dispose:E}}function H5(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,L,U,k,z){let X=!1;const B=f(k,U,L);s!==B&&(s=B,u(s.object)),X=h(M,k,U,z),X&&v(M,k,U,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(M,L,U,k),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function u(M){return t.bindVertexArray(M)}function c(M){return t.deleteVertexArray(M)}function f(M,L,U){const k=U.wireframe===!0;let z=i[M.id];z===void 0&&(z={},i[M.id]=z);let X=z[L.id];X===void 0&&(X={},z[L.id]=X);let B=X[k];return B===void 0&&(B=d(l()),X[k]=B),B}function d(M){const L=[],U=[],k=[];for(let z=0;z<n;z++)L[z]=0,U[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function h(M,L,U,k){const z=s.attributes,X=L.attributes;let B=0;const G=U.getAttributes();for(const q in G)if(G[q].location>=0){const ge=z[q];let ye=X[q];if(ye===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ge===void 0||ge.attribute!==ye||ye&&ge.data!==ye.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function v(M,L,U,k){const z={},X=L.attributes;let B=0;const G=U.getAttributes();for(const q in G)if(G[q].location>=0){let ge=X[q];ge===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(ge=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(ge=M.instanceColor));const ye={};ye.attribute=ge,ge&&ge.data&&(ye.data=ge.data),z[q]=ye,B++}s.attributes=z,s.attributesNum=B,s.index=k}function _(){const M=s.newAttributes;for(let L=0,U=M.length;L<U;L++)M[L]=0}function g(M){m(M,0)}function m(M,L){const U=s.newAttributes,k=s.enabledAttributes,z=s.attributeDivisors;U[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),z[M]!==L&&(t.vertexAttribDivisor(M,L),z[M]=L)}function E(){const M=s.newAttributes,L=s.enabledAttributes;for(let U=0,k=L.length;U<k;U++)L[U]!==M[U]&&(t.disableVertexAttribArray(U),L[U]=0)}function x(M,L,U,k,z,X,B){B===!0?t.vertexAttribIPointer(M,L,U,z,X):t.vertexAttribPointer(M,L,U,k,z,X)}function S(M,L,U,k){_();const z=k.attributes,X=U.getAttributes(),B=L.defaultAttributeValues;for(const G in X){const q=X[G];if(q.location>=0){let le=z[G];if(le===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(le=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(le=M.instanceColor)),le!==void 0){const ge=le.normalized,ye=le.itemSize,Oe=e.get(le);if(Oe===void 0)continue;const Be=Oe.buffer,at=Oe.type,et=Oe.bytesPerElement,se=at===t.INT||at===t.UNSIGNED_INT||le.gpuType===Nd;if(le.isInterleavedBufferAttribute){const F=le.data,re=F.stride,oe=le.offset;if(F.isInstancedInterleavedBuffer){for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae,F.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let ae=0;ae<q.locationSize;ae++)g(q.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let ae=0;ae<q.locationSize;ae++)x(q.location+ae,ye/q.locationSize,at,ge,re*et,(oe+ye/q.locationSize*ae)*et,se)}else{if(le.isInstancedBufferAttribute){for(let F=0;F<q.locationSize;F++)m(q.location+F,le.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let F=0;F<q.locationSize;F++)g(q.location+F);t.bindBuffer(t.ARRAY_BUFFER,Be);for(let F=0;F<q.locationSize;F++)x(q.location+F,ye/q.locationSize,at,ge,ye*et,ye/q.locationSize*F*et,se)}}else if(B!==void 0){const ge=B[G];if(ge!==void 0)switch(ge.length){case 2:t.vertexAttrib2fv(q.location,ge);break;case 3:t.vertexAttrib3fv(q.location,ge);break;case 4:t.vertexAttrib4fv(q.location,ge);break;default:t.vertexAttrib1fv(q.location,ge)}}}}E()}function A(){O();for(const M in i){const L=i[M];for(const U in L){const k=L[U];for(const z in k)c(k[z].object),delete k[z];delete L[U]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const L=i[M.id];for(const U in L){const k=L[U];for(const z in k)c(k[z].object),delete k[z];delete L[U]}delete i[M.id]}function D(M){for(const L in i){const U=i[L];if(U[M.id]===void 0)continue;const k=U[M.id];for(const z in k)c(k[z].object),delete k[z];delete U[M.id]}}function O(){y(),a=!0,s!==r&&(s=r,u(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:P,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function G5(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function o(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let h=0;for(let v=0;v<f;v++)h+=c[v];n.update(h,i,1)}function l(u,c,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<u.length;v++)a(u[v],c[v],d[v]);else{h.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=c[_]*d[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function W5(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==Kn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const O=D===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Cn&&i.convert(D)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==pi&&!O)}function l(D){if(D==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(Xe("WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),P=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:x,maxFragmentUniforms:S,maxSamples:A,samples:P}}function $5(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Vr,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=c(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?c(null):u();else{const E=s?0:i,x=E*4;let S=m.clippingState||null;l.value=S,S=c(v,d,x,h);for(let A=0;A!==x;++A)S[A]=n[A];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,h,v){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const m=h+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,S=h;x!==_;++x,S+=4)a.copy(f[x]).applyMatrix4(E,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function X5(t){let e=new WeakMap;function n(a,o){return o===ju?a.mapping=Qr:o===Yu&&(a.mapping=qs),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===ju||o===Yu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new V1(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const xr=4,om=[.125,.215,.35,.446,.526,.582],Gr=20,q5=256,va=new $d,lm=new st;let iu=null,ru=0,su=0,au=!1;const j5=new J;class cm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=j5}=s;iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(iu,ru,su),this._renderer.xr.enabled=au,e.scissorTest=!1,ys(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Qr||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),iu=this._renderer.getRenderTarget(),ru=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:Yi,format:Kn,colorSpace:Ys,depthBuffer:!1},r=um(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=um(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Y5(s)),this._blurMaterial=Z5(s,e,n),this._ggxMaterial=K5(s,e,n)}return r}_compileMaterial(e){const n=new ri(new Gn,e);this._renderer.compile(n,va)}_sceneToCubeUV(e,n,i,r,s){const l=new Vn(90,1,n,i),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(lm),f.toneMapping=vi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ri(new fo,new N1({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,m=!0):(g.color.copy(lm),m=!0);for(let x=0;x<6;x++){const S=x%3;S===0?(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+c[x],s.y,s.z)):S===1?(l.up.set(0,0,u[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+c[x],s.z)):(l.up.set(0,u[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+c[x]));const A=this._cubeSize;ys(r,S*A,x>2?A:0,A,A),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Qr||e.mapping===qs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ys(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,va)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,u=i/(this._lodMeshes.length-1),c=n/(this._lodMeshes.length-1),f=Math.sqrt(u*u-c*c),d=0+u*1.25,h=f*d,{_lodMax:v}=this,_=this._sizeLods[i],g=3*_*(i>v-xr?i-v+xr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-n,ys(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,va),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ys(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,va)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&ut("blur direction must be either latitudinal or longitudinal!");const c=3,f=this._lodMeshes[r];f.material=u;const d=u.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Gr-1),_=s/v,g=isFinite(s)?1+Math.floor(c*_):Gr;g>Gr&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Gr}`);const m=[];let E=0;for(let D=0;D<Gr;++D){const O=D/_,y=Math.exp(-O*O/2);m.push(y),D===0?E+=y:D<g&&(E+=2*y)}for(let D=0;D<m.length;D++)m[D]=m[D]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=v,d.mipInt.value=x-i;const S=this._sizeLods[r],A=3*S*(r>x-xr?r-x+xr:0),P=4*(this._cubeSize-S);ys(n,A,P,3*S,2*S),l.setRenderTarget(n),l.render(f,va)}}function Y5(t){const e=[],n=[],i=[];let r=t;const s=t-xr+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-xr?l=om[a-t+xr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],h=6,v=6,_=3,g=2,m=1,E=new Float32Array(_*v*h),x=new Float32Array(g*v*h),S=new Float32Array(m*v*h);for(let P=0;P<h;P++){const D=P%3*2/3-1,O=P>2?0:-1,y=[D,O,0,D+2/3,O,0,D+2/3,O+1,0,D,O,0,D+2/3,O+1,0,D,O+1,0];E.set(y,_*v*P),x.set(d,g*v*P);const M=[P,P,P,P,P,P];S.set(M,m*v*P)}const A=new Gn;A.setAttribute("position",new xi(E,_)),A.setAttribute("uv",new xi(x,g)),A.setAttribute("faceIndex",new xi(S,m)),i.push(new ri(A,null)),r>xr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function um(t,e,n){const i=new _i(t,e,n);return i.texture.mapping=Xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ys(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function K5(t,e,n){return new si({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:q5,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Z5(t,e,n){const i=new Float32Array(Gr),r=new J(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:Gr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function fm(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Yl(),fragmentShader:`

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
		`,blending:zi,depthTest:!1,depthWrite:!1})}function dm(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Yl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Yl(){return`

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
	`}function J5(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===ju||l===Yu,c=l===Qr||l===qs;if(u||c){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new cm(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return u&&h&&h.height>0||c&&h&&r(h)?(n===null&&(n=new cm(t)),f=u?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const u=6;for(let c=0;c<u;c++)o[c]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Q5(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Wa("WebGLRenderer: "+i+" extension not supported."),r}}}function e6(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function u(f){const d=[],h=f.index,v=f.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let x=0,S=E.length;x<S;x+=3){const A=E[x+0],P=E[x+1],D=E[x+2];d.push(A,P,P,D,D,A)}}else if(v!==void 0){const E=v.array;_=v.version;for(let x=0,S=E.length/3-1;x<S;x+=3){const A=x+0,P=x+1,D=x+2;d.push(A,P,P,D,D,A)}}else return;const g=new(R1(d)?O1:U1)(d,1);g.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,g)}function c(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:c}}function t6(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function u(d,h,v){v!==0&&(t.drawElementsInstanced(i,h,s,d*a,v),n.update(h,i,v))}function c(d,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,v);let g=0;for(let m=0;m<v;m++)g+=h[m];n.update(g,i,1)}function f(d,h,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)u(d[m]/a,h[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,v);let m=0;for(let E=0;E<v;E++)m+=h[E]*_[E];n.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function n6(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ut("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function i6(t,e,n){const i=new WeakMap,r=new Bt;function s(a,o,l){const u=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=c!==void 0?c.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let y=function(){D.dispose(),i.delete(o),o.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let x=0;h===!0&&(x=1),v===!0&&(x=2),_===!0&&(x=3);let S=o.attributes.position.count*x,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*A*4*f),D=new P1(P,S,A,f);D.type=pi,D.needsUpdate=!0;const O=x*4;for(let M=0;M<f;M++){const L=g[M],U=m[M],k=E[M],z=S*A*4*M;for(let X=0;X<L.count;X++){const B=X*O;h===!0&&(r.fromBufferAttribute(L,X),P[z+B+0]=r.x,P[z+B+1]=r.y,P[z+B+2]=r.z,P[z+B+3]=0),v===!0&&(r.fromBufferAttribute(U,X),P[z+B+4]=r.x,P[z+B+5]=r.y,P[z+B+6]=r.z,P[z+B+7]=0),_===!0&&(r.fromBufferAttribute(k,X),P[z+B+8]=r.x,P[z+B+9]=r.y,P[z+B+10]=r.z,P[z+B+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new ft(S,A)},i.set(o,d),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let h=0;for(let _=0;_<u.length;_++)h+=u[_];const v=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function r6(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}const s6={[p1]:"LINEAR_TONE_MAPPING",[m1]:"REINHARD_TONE_MAPPING",[g1]:"CINEON_TONE_MAPPING",[Id]:"ACES_FILMIC_TONE_MAPPING",[_1]:"AGX_TONE_MAPPING",[x1]:"NEUTRAL_TONE_MAPPING",[v1]:"CUSTOM_TONE_MAPPING"};function a6(t,e,n,i,r){const s=new _i(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new _i(e,n,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),o=new Gn;o.setAttribute("position",new _n([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _n([0,2,0,0,2,0],2));const l=new XT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),u=new ri(o,l),c=new $d(-1,1,1,-1,0,1);let f=null,d=null,h=!1,v,_=null,g=[],m=!1;this.setSize=function(E,x){s.setSize(E,x),a.setSize(E,x);for(let S=0;S<g.length;S++){const A=g[S];A.setSize&&A.setSize(E,x)}},this.setEffects=function(E){g=E,m=g.length>0&&g[0].isRenderPass===!0;const x=s.width,S=s.height;for(let A=0;A<g.length;A++){const P=g[A];P.setSize&&P.setSize(x,S)}},this.begin=function(E,x){if(h||E.toneMapping===vi&&g.length===0)return!1;if(_=x,x!==null){const S=x.width,A=x.height;(s.width!==S||s.height!==A)&&this.setSize(S,A)}return m===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=vi,!0},this.hasRenderPass=function(){return m},this.end=function(E,x){E.toneMapping=v,h=!0;let S=s,A=a;for(let P=0;P<g.length;P++){const D=g[P];if(D.enabled!==!1&&(D.render(E,A,S,x),D.needsSwap!==!1)){const O=S;S=A,A=O}}if(f!==E.outputColorSpace||d!==E.toneMapping){f=E.outputColorSpace,d=E.toneMapping,l.defines={},ot.getTransfer(f)===gt&&(l.defines.SRGB_TRANSFER="");const P=s6[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,E.setRenderTarget(_),E.render(u,c),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const $1=new an,If=new $a(1,1),X1=new P1,q1=new yT,j1=new k1,hm=[],pm=[],mm=new Float32Array(16),gm=new Float32Array(9),vm=new Float32Array(4);function oa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hm[r];if(s===void 0&&(s=new Float32Array(r),hm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function qt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kl(t,e){let n=pm[e];n===void 0&&(n=new Int32Array(e),pm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function o6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function l6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),qt(n,e)}}function c6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),qt(n,e)}}function u6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),qt(n,e)}}function f6(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),qt(n,i)}}function d6(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;gm.set(i),t.uniformMatrix3fv(this.addr,!1,gm),qt(n,i)}}function h6(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),qt(n,e)}else{if(Xt(n,i))return;mm.set(i),t.uniformMatrix4fv(this.addr,!1,mm),qt(n,i)}}function p6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function m6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),qt(n,e)}}function g6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),qt(n,e)}}function v6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),qt(n,e)}}function _6(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function x6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),qt(n,e)}}function b6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),qt(n,e)}}function y6(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),qt(n,e)}}function S6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(If.compareFunction=n.isReversedDepthBuffer()?zd:Vd,s=If):s=$1,n.setTexture2D(e||s,r)}function E6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||q1,r)}function M6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||j1,r)}function T6(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||X1,r)}function A6(t){switch(t){case 5126:return o6;case 35664:return l6;case 35665:return c6;case 35666:return u6;case 35674:return f6;case 35675:return d6;case 35676:return h6;case 5124:case 35670:return p6;case 35667:case 35671:return m6;case 35668:case 35672:return g6;case 35669:case 35673:return v6;case 5125:return _6;case 36294:return x6;case 36295:return b6;case 36296:return y6;case 35678:case 36198:case 36298:case 36306:case 35682:return S6;case 35679:case 36299:case 36307:return E6;case 35680:case 36300:case 36308:case 36293:return M6;case 36289:case 36303:case 36311:case 36292:return T6}}function w6(t,e){t.uniform1fv(this.addr,e)}function C6(t,e){const n=oa(e,this.size,2);t.uniform2fv(this.addr,n)}function R6(t,e){const n=oa(e,this.size,3);t.uniform3fv(this.addr,n)}function P6(t,e){const n=oa(e,this.size,4);t.uniform4fv(this.addr,n)}function D6(t,e){const n=oa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function L6(t,e){const n=oa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function I6(t,e){const n=oa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function N6(t,e){t.uniform1iv(this.addr,e)}function U6(t,e){t.uniform2iv(this.addr,e)}function O6(t,e){t.uniform3iv(this.addr,e)}function F6(t,e){t.uniform4iv(this.addr,e)}function B6(t,e){t.uniform1uiv(this.addr,e)}function k6(t,e){t.uniform2uiv(this.addr,e)}function V6(t,e){t.uniform3uiv(this.addr,e)}function z6(t,e){t.uniform4uiv(this.addr,e)}function H6(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=If:a=$1;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function G6(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||q1,s[a])}function W6(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||j1,s[a])}function $6(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),qt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||X1,s[a])}function X6(t){switch(t){case 5126:return w6;case 35664:return C6;case 35665:return R6;case 35666:return P6;case 35674:return D6;case 35675:return L6;case 35676:return I6;case 5124:case 35670:return N6;case 35667:case 35671:return U6;case 35668:case 35672:return O6;case 35669:case 35673:return F6;case 5125:return B6;case 36294:return k6;case 36295:return V6;case 36296:return z6;case 35678:case 36198:case 36298:case 36306:case 35682:return H6;case 35679:case 36299:case 36307:return G6;case 35680:case 36300:case 36308:case 36293:return W6;case 36289:case 36303:case 36311:case 36292:return $6}}class q6{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=A6(n.type)}}class j6{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=X6(n.type)}}class Y6{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function K6(t,e,n){const i=t.name,r=i.length;for(ou.lastIndex=0;;){const s=ou.exec(i),a=ou.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){_m(n,u===void 0?new q6(o,t,e):new j6(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Y6(o),_m(n,f)),n=f}}}class ol{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);K6(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function xm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Z6=37297;let J6=0;function Q6(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const bm=new Ze;function eC(t){ot._getMatrix(bm,ot.workingColorSpace,t);const e=`mat3( ${bm.elements.map(n=>n.toFixed(4))} )`;switch(ot.getTransfer(t)){case yl:return[e,"LinearTransferOETF"];case gt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ym(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Q6(t.getShaderSource(e),o)}else return s}function tC(t,e){const n=eC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const nC={[p1]:"Linear",[m1]:"Reinhard",[g1]:"Cineon",[Id]:"ACESFilmic",[_1]:"AgX",[x1]:"Neutral",[v1]:"Custom"};function iC(t,e){const n=nC[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ko=new J;function rC(){ot.getLuminanceCoefficients(Ko);const t=Ko.x.toFixed(4),e=Ko.y.toFixed(4),n=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function aC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ya(t){return t!==""}function Sm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nf(t){return t.replace(lC,uC)}const cC=new Map;function uC(t,e){let n=Je[e];if(n===void 0){const i=cC.get(e);if(i!==void 0)n=Je[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Nf(n)}const fC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mm(t){return t.replace(fC,dC)}function dC(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const hC={[nl]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function pC(t){return hC[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const mC={[Qr]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Xl]:"ENVMAP_TYPE_CUBE_UV"};function gC(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":mC[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const vC={[qs]:"ENVMAP_MODE_REFRACTION"};function _C(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":vC[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xC={[h1]:"ENVMAP_BLENDING_MULTIPLY",[nT]:"ENVMAP_BLENDING_MIX",[iT]:"ENVMAP_BLENDING_ADD"};function bC(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":xC[t.combine]||"ENVMAP_BLENDING_NONE"}function yC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function SC(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=pC(n),u=gC(n),c=_C(n),f=bC(n),d=yC(n),h=sC(n),v=aC(s),_=r.createProgram();let g,m,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ya).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ya).join(`
`),m.length>0&&(m+=`
`)):(g=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),m=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==vi?"#define TONE_MAPPING":"",n.toneMapping!==vi?Je.tonemapping_pars_fragment:"",n.toneMapping!==vi?iC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Je.colorspace_pars_fragment,tC("linearToOutputTexel",n.outputColorSpace),rC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ya).join(`
`)),a=Nf(a),a=Sm(a,n),a=Em(a,n),o=Nf(o),o=Sm(o,n),o=Em(o,n),a=Mm(a),o=Mm(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Fp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Fp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=E+g+a,S=E+m+o,A=xm(r,r.VERTEX_SHADER,x),P=xm(r,r.FRAGMENT_SHADER,S);r.attachShader(_,A),r.attachShader(_,P),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(L){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(A)||"",z=r.getShaderInfoLog(P)||"",X=U.trim(),B=k.trim(),G=z.trim();let q=!0,le=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,A,P);else{const ge=ym(r,A,"vertex"),ye=ym(r,P,"fragment");ut("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+ge+`
`+ye)}else X!==""?Xe("WebGLProgram: Program Info Log:",X):(B===""||G==="")&&(le=!1);le&&(L.diagnostics={runnable:q,programLog:X,vertexShader:{log:B,prefix:g},fragmentShader:{log:G,prefix:m}})}r.deleteShader(A),r.deleteShader(P),O=new ol(r,_),y=oC(r,_)}let O;this.getUniforms=function(){return O===void 0&&D(this),O};let y;this.getAttributes=function(){return y===void 0&&D(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,Z6)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=J6++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=P,this}let EC=0;class MC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new TC(e),n.set(e,i)),i}}class TC{constructor(e){this.id=EC++,this.code=e,this.usedTimes=0}}function AC(t,e,n,i,r,s,a){const o=new L1,l=new MC,u=new Set,c=[],f=new Map,d=r.logarithmicDepthBuffer;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return u.add(y),y===0?"uv":`uv${y}`}function g(y,M,L,U,k){const z=U.fog,X=k.geometry,B=y.isMeshStandardMaterial?U.environment:null,G=(y.isMeshStandardMaterial?n:e).get(y.envMap||B),q=G&&G.mapping===Xl?G.image.height:null,le=v[y.type];y.precision!==null&&(h=r.getMaxPrecision(y.precision),h!==y.precision&&Xe("WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ge=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ye=ge!==void 0?ge.length:0;let Oe=0;X.morphAttributes.position!==void 0&&(Oe=1),X.morphAttributes.normal!==void 0&&(Oe=2),X.morphAttributes.color!==void 0&&(Oe=3);let Be,at,et,se;if(le){const pt=hi[le];Be=pt.vertexShader,at=pt.fragmentShader}else Be=y.vertexShader,at=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),se=l.getFragmentShaderID(y);const F=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),oe=k.isInstancedMesh===!0,ae=k.isBatchedMesh===!0,we=!!y.map,Ge=!!y.matcap,R=!!G,I=!!y.aoMap,W=!!y.lightMap,ee=!!y.bumpMap,ie=!!y.normalMap,C=!!y.displacementMap,he=!!y.emissiveMap,ce=!!y.metalnessMap,ue=!!y.roughnessMap,K=y.anisotropy>0,w=y.clearcoat>0,b=y.dispersion>0,N=y.iridescence>0,j=y.sheen>0,te=y.transmission>0,Z=K&&!!y.anisotropyMap,_e=w&&!!y.clearcoatMap,pe=w&&!!y.clearcoatNormalMap,Me=w&&!!y.clearcoatRoughnessMap,Ue=N&&!!y.iridescenceMap,de=N&&!!y.iridescenceThicknessMap,Se=j&&!!y.sheenColorMap,Ie=j&&!!y.sheenRoughnessMap,Ce=!!y.specularMap,ve=!!y.specularColorMap,Ke=!!y.specularIntensityMap,V=te&&!!y.transmissionMap,Pe=te&&!!y.thicknessMap,be=!!y.gradientMap,De=!!y.alphaMap,me=y.alphaTest>0,fe=!!y.alphaHash,Ee=!!y.extensions;let $e=vi;y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&($e=t.toneMapping);const Mt={shaderID:le,shaderType:y.type,shaderName:y.name,vertexShader:Be,fragmentShader:at,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:se,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:ae,batchingColor:ae&&k._colorsTexture!==null,instancing:oe,instancingColor:oe&&k.instanceColor!==null,instancingMorph:oe&&k.morphTexture!==null,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ys,alphaToCoverage:!!y.alphaToCoverage,map:we,matcap:Ge,envMap:R,envMapMode:R&&G.mapping,envMapCubeUVHeight:q,aoMap:I,lightMap:W,bumpMap:ee,normalMap:ie,displacementMap:C,emissiveMap:he,normalMapObjectSpace:ie&&y.normalMapType===aT,normalMapTangentSpace:ie&&y.normalMapType===C1,metalnessMap:ce,roughnessMap:ue,anisotropy:K,anisotropyMap:Z,clearcoat:w,clearcoatMap:_e,clearcoatNormalMap:pe,clearcoatRoughnessMap:Me,dispersion:b,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:de,sheen:j,sheenColorMap:Se,sheenRoughnessMap:Ie,specularMap:Ce,specularColorMap:ve,specularIntensityMap:Ke,transmission:te,transmissionMap:V,thicknessMap:Pe,gradientMap:be,opaque:y.transparent===!1&&y.blending===Bs&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:me,alphaHash:fe,combine:y.combine,mapUv:we&&_(y.map.channel),aoMapUv:I&&_(y.aoMap.channel),lightMapUv:W&&_(y.lightMap.channel),bumpMapUv:ee&&_(y.bumpMap.channel),normalMapUv:ie&&_(y.normalMap.channel),displacementMapUv:C&&_(y.displacementMap.channel),emissiveMapUv:he&&_(y.emissiveMap.channel),metalnessMapUv:ce&&_(y.metalnessMap.channel),roughnessMapUv:ue&&_(y.roughnessMap.channel),anisotropyMapUv:Z&&_(y.anisotropyMap.channel),clearcoatMapUv:_e&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:de&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(y.sheenRoughnessMap.channel),specularMapUv:Ce&&_(y.specularMap.channel),specularColorMapUv:ve&&_(y.specularColorMap.channel),specularIntensityMapUv:Ke&&_(y.specularIntensityMap.channel),transmissionMapUv:V&&_(y.transmissionMap.channel),thicknessMapUv:Pe&&_(y.thicknessMap.channel),alphaMapUv:De&&_(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(ie||K),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!X.attributes.uv&&(we||De),fog:!!z,useFog:y.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:k.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ye,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:we&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===gt,decodeVideoTextureEmissive:he&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===gt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ki,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ee&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&y.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=u.has(1),Mt.vertexUv2s=u.has(2),Mt.vertexUv3s=u.has(3),u.clear(),Mt}function m(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)M.push(L),M.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(E(M,y),x(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function E(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function x(y,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),y.push(o.mask)}function S(y){const M=v[y.type];let L;if(M){const U=hi[M];L=NT.clone(U.uniforms)}else L=y.uniforms;return L}function A(y,M){let L=f.get(M);return L!==void 0?++L.usedTimes:(L=new SC(t,M,y,s),c.push(L),f.set(M,L)),L}function P(y){if(--y.usedTimes===0){const M=c.indexOf(y);c[M]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function D(y){l.remove(y)}function O(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:S,acquireProgram:A,releaseProgram:P,releaseShaderCache:D,programs:c,dispose:O}}function wC(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function CC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Am(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,h,v,_,g){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:v,renderOrder:f.renderOrder,z:_,group:g},t[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=_,m.group=g),e++,m}function o(f,d,h,v,_,g){const m=a(f,d,h,v,_,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):n.push(m)}function l(f,d,h,v,_,g){const m=a(f,d,h,v,_,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):n.unshift(m)}function u(f,d){n.length>1&&n.sort(f||CC),i.length>1&&i.sort(d||Am),r.length>1&&r.sort(d||Am)}function c(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:c,sort:u}}function RC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new wm,t.set(i,[a])):r>=s.length?(a=new wm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function PC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new st};break;case"SpotLight":n={position:new J,direction:new J,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function DC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LC=0;function IC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function NC(t){const e=new PC,n=DC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new J);const r=new J,s=new It,a=new It;function o(u){let c=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,v=0,_=0,g=0,m=0,E=0,x=0,S=0,A=0,P=0,D=0;u.sort(IC);for(let y=0,M=u.length;y<M;y++){const L=u[y],U=L.color,k=L.intensity,z=L.distance;let X=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===js?X=L.shadow.map.texture:X=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)c+=U.r*k,f+=U.g*k,d+=U.b*k;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],k);D++}else if(L.isDirectionalLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const G=L.shadow,q=n.get(L);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,i.directionalShadow[h]=q,i.directionalShadowMap[h]=X,i.directionalShadowMatrix[h]=L.shadow.matrix,E++}i.directional[h]=B,h++}else if(L.isSpotLight){const B=e.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=z,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[_]=B;const G=L.shadow;if(L.map&&(i.spotLightMap[A]=L.map,A++,G.updateMatrices(L),L.castShadow&&P++),i.spotLightMatrix[_]=G.matrix,L.castShadow){const q=n.get(L);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,i.spotShadow[_]=q,i.spotShadowMap[_]=X,S++}_++}else if(L.isRectAreaLight){const B=e.get(L);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[g]=B,g++}else if(L.isPointLight){const B=e.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){const G=L.shadow,q=n.get(L);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,i.pointShadow[v]=q,i.pointShadowMap[v]=X,i.pointShadowMatrix[v]=L.shadow.matrix,x++}i.point[v]=B,v++}else if(L.isHemisphereLight){const B=e.get(L);B.skyColor.copy(L.color).multiplyScalar(k),B.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[m]=B,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.directionalLength!==h||O.pointLength!==v||O.spotLength!==_||O.rectAreaLength!==g||O.hemiLength!==m||O.numDirectionalShadows!==E||O.numPointShadows!==x||O.numSpotShadows!==S||O.numSpotMaps!==A||O.numLightProbes!==D)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+A-P,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=D,O.directionalLength=h,O.pointLength=v,O.spotLength=_,O.rectAreaLength=g,O.hemiLength=m,O.numDirectionalShadows=E,O.numPointShadows=x,O.numSpotShadows=S,O.numSpotMaps=A,O.numLightProbes=D,i.version=LC++)}function l(u,c){let f=0,d=0,h=0,v=0,_=0;const g=c.matrixWorldInverse;for(let m=0,E=u.length;m<E;m++){const x=u[m];if(x.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),f++}else if(x.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(x.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),v++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Cm(t){const e=new NC(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function a(c){i.push(c)}function o(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function UC(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Cm(t),e.set(r,[o])):s>=a.length?(o=new Cm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const OC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FC=`uniform sampler2D shadow_pass;
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
}`,BC=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],kC=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Rm=new It,_a=new J,lu=new J;function VC(t,e,n){let i=new Gd;const r=new ft,s=new ft,a=new Bt,o=new jT,l=new YT,u={},c=n.maxTextureSize,f={[Er]:pn,[pn]:Er,[ki]:ki},d=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:OC,fragmentShader:FC}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new Gn;v.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ri(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let m=this.type;this.render=function(P,D,O){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;P.type===F4&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=nl);const y=t.getRenderTarget(),M=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),U=t.state;U.setBlending(zi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==this.type;k&&D.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(X=>X.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,X=P.length;z<X;z++){const B=P[z],G=B.shadow;if(G===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const q=G.getFrameExtents();if(r.multiply(q),s.copy(G.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/q.x),r.x=s.x*q.x,G.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/q.y),r.y=s.y*q.y,G.mapSize.y=s.y)),G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===ba){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new _i(r.x,r.y,{format:js,type:Yi,minFilter:sn,magFilter:sn,generateMipmaps:!1}),G.map.texture.name=B.name+".shadowMap",G.map.depthTexture=new $a(r.x,r.y,pi),G.map.depthTexture.name=B.name+".shadowMapDepth",G.map.depthTexture.format=Ki,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt}else{B.isPointLight?(G.map=new V1(r.x),G.map.depthTexture=new $T(r.x,yi)):(G.map=new _i(r.x,r.y),G.map.depthTexture=new $a(r.x,r.y,yi)),G.map.depthTexture.name=B.name+".shadowMap",G.map.depthTexture.format=Ki;const ge=t.state.buffers.depth.getReversed();this.type===nl?(G.map.depthTexture.compareFunction=ge?zd:Vd,G.map.depthTexture.minFilter=sn,G.map.depthTexture.magFilter=sn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Jt,G.map.depthTexture.magFilter=Jt)}G.camera.updateProjectionMatrix()}const le=G.map.isWebGLCubeRenderTarget?6:1;for(let ge=0;ge<le;ge++){if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,ge),t.clear();else{ge===0&&(t.setRenderTarget(G.map),t.clear());const ye=G.getViewport(ge);a.set(s.x*ye.x,s.y*ye.y,s.x*ye.z,s.y*ye.w),U.viewport(a)}if(B.isPointLight){const ye=G.camera,Oe=G.matrix,Be=B.distance||ye.far;Be!==ye.far&&(ye.far=Be,ye.updateProjectionMatrix()),_a.setFromMatrixPosition(B.matrixWorld),ye.position.copy(_a),lu.copy(ye.position),lu.add(BC[ge]),ye.up.copy(kC[ge]),ye.lookAt(lu),ye.updateMatrixWorld(),Oe.makeTranslation(-_a.x,-_a.y,-_a.z),Rm.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Rm,ye.coordinateSystem,ye.reversedDepth)}else G.updateMatrices(B);i=G.getFrustum(),S(D,O,G.camera,B,this.type)}G.isPointLightShadow!==!0&&this.type===ba&&E(G,O),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(y,M,L)};function E(P,D){const O=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new _i(r.x,r.y,{format:js,type:Yi})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(D,null,O,d,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(D,null,O,h,_,null)}function x(P,D,O,y){let M=null;const L=O.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?l:o,t.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const U=M.uuid,k=D.uuid;let z=u[U];z===void 0&&(z={},u[U]=z);let X=z[k];X===void 0&&(X=M.clone(),z[k]=X,D.addEventListener("dispose",A)),M=X}if(M.visible=D.visible,M.wireframe=D.wireframe,y===ba?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=t.properties.get(M);U.light=O}return M}function S(P,D,O,y,M){if(P.visible===!1)return;if(P.layers.test(D.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===ba)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,P.matrixWorld);const k=e.update(P),z=P.material;if(Array.isArray(z)){const X=k.groups;for(let B=0,G=X.length;B<G;B++){const q=X[B],le=z[q.materialIndex];if(le&&le.visible){const ge=x(P,le,y,M);P.onBeforeShadow(t,P,D,O,k,ge,q),t.renderBufferDirect(O,null,k,ge,P,q),P.onAfterShadow(t,P,D,O,k,ge,q)}}}else if(z.visible){const X=x(P,z,y,M);P.onBeforeShadow(t,P,D,O,k,X,null),t.renderBufferDirect(O,null,k,X,P,null),P.onAfterShadow(t,P,D,O,k,X,null)}}const U=P.children;for(let k=0,z=U.length;k<z;k++)S(U[k],D,O,y,M)}function A(P){P.target.removeEventListener("dispose",A);for(const O in u){const y=u[O],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const zC={[zu]:Hu,[Gu]:Xu,[Wu]:qu,[Xs]:$u,[Hu]:zu,[Xu]:Gu,[qu]:Wu,[$u]:Xs};function HC(t,e){function n(){let V=!1;const Pe=new Bt;let be=null;const De=new Bt(0,0,0,0);return{setMask:function(me){be!==me&&!V&&(t.colorMask(me,me,me,me),be=me)},setLocked:function(me){V=me},setClear:function(me,fe,Ee,$e,Mt){Mt===!0&&(me*=$e,fe*=$e,Ee*=$e),Pe.set(me,fe,Ee,$e),De.equals(Pe)===!1&&(t.clearColor(me,fe,Ee,$e),De.copy(Pe))},reset:function(){V=!1,be=null,De.set(-1,0,0,0)}}}function i(){let V=!1,Pe=!1,be=null,De=null,me=null;return{setReversed:function(fe){if(Pe!==fe){const Ee=e.get("EXT_clip_control");fe?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Pe=fe;const $e=me;me=null,this.setClear($e)}},getReversed:function(){return Pe},setTest:function(fe){fe?F(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(fe){be!==fe&&!V&&(t.depthMask(fe),be=fe)},setFunc:function(fe){if(Pe&&(fe=zC[fe]),De!==fe){switch(fe){case zu:t.depthFunc(t.NEVER);break;case Hu:t.depthFunc(t.ALWAYS);break;case Gu:t.depthFunc(t.LESS);break;case Xs:t.depthFunc(t.LEQUAL);break;case Wu:t.depthFunc(t.EQUAL);break;case $u:t.depthFunc(t.GEQUAL);break;case Xu:t.depthFunc(t.GREATER);break;case qu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=fe}},setLocked:function(fe){V=fe},setClear:function(fe){me!==fe&&(Pe&&(fe=1-fe),t.clearDepth(fe),me=fe)},reset:function(){V=!1,be=null,De=null,me=null,Pe=!1}}}function r(){let V=!1,Pe=null,be=null,De=null,me=null,fe=null,Ee=null,$e=null,Mt=null;return{setTest:function(pt){V||(pt?F(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(pt){Pe!==pt&&!V&&(t.stencilMask(pt),Pe=pt)},setFunc:function(pt,li,Ai){(be!==pt||De!==li||me!==Ai)&&(t.stencilFunc(pt,li,Ai),be=pt,De=li,me=Ai)},setOp:function(pt,li,Ai){(fe!==pt||Ee!==li||$e!==Ai)&&(t.stencilOp(pt,li,Ai),fe=pt,Ee=li,$e=Ai)},setLocked:function(pt){V=pt},setClear:function(pt){Mt!==pt&&(t.clearStencil(pt),Mt=pt)},reset:function(){V=!1,Pe=null,be=null,De=null,me=null,fe=null,Ee=null,$e=null,Mt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,u=new WeakMap;let c={},f={},d=new WeakMap,h=[],v=null,_=!1,g=null,m=null,E=null,x=null,S=null,A=null,P=null,D=new st(0,0,0),O=0,y=!1,M=null,L=null,U=null,k=null,z=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,G=0;const q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(q)[1]),B=G>=1):q.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),B=G>=2);let le=null,ge={};const ye=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),Be=new Bt().fromArray(ye),at=new Bt().fromArray(Oe);function et(V,Pe,be,De){const me=new Uint8Array(4),fe=t.createTexture();t.bindTexture(V,fe),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<be;Ee++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(Pe+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return fe}const se={};se[t.TEXTURE_2D]=et(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=et(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=et(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=et(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),F(t.DEPTH_TEST),a.setFunc(Xs),ee(!1),ie(Lp),F(t.CULL_FACE),I(zi);function F(V){c[V]!==!0&&(t.enable(V),c[V]=!0)}function re(V){c[V]!==!1&&(t.disable(V),c[V]=!1)}function oe(V,Pe){return f[V]!==Pe?(t.bindFramebuffer(V,Pe),f[V]=Pe,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Pe),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function ae(V,Pe){let be=h,De=!1;if(V){be=d.get(Pe),be===void 0&&(be=[],d.set(Pe,be));const me=V.textures;if(be.length!==me.length||be[0]!==t.COLOR_ATTACHMENT0){for(let fe=0,Ee=me.length;fe<Ee;fe++)be[fe]=t.COLOR_ATTACHMENT0+fe;be.length=me.length,De=!0}}else be[0]!==t.BACK&&(be[0]=t.BACK,De=!0);De&&t.drawBuffers(be)}function we(V){return v!==V?(t.useProgram(V),v=V,!0):!1}const Ge={[Hr]:t.FUNC_ADD,[k4]:t.FUNC_SUBTRACT,[V4]:t.FUNC_REVERSE_SUBTRACT};Ge[z4]=t.MIN,Ge[H4]=t.MAX;const R={[G4]:t.ZERO,[W4]:t.ONE,[$4]:t.SRC_COLOR,[ku]:t.SRC_ALPHA,[Z4]:t.SRC_ALPHA_SATURATE,[Y4]:t.DST_COLOR,[q4]:t.DST_ALPHA,[X4]:t.ONE_MINUS_SRC_COLOR,[Vu]:t.ONE_MINUS_SRC_ALPHA,[K4]:t.ONE_MINUS_DST_COLOR,[j4]:t.ONE_MINUS_DST_ALPHA,[J4]:t.CONSTANT_COLOR,[Q4]:t.ONE_MINUS_CONSTANT_COLOR,[eT]:t.CONSTANT_ALPHA,[tT]:t.ONE_MINUS_CONSTANT_ALPHA};function I(V,Pe,be,De,me,fe,Ee,$e,Mt,pt){if(V===zi){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(F(t.BLEND),_=!0),V!==B4){if(V!==g||pt!==y){if((m!==Hr||S!==Hr)&&(t.blendEquation(t.FUNC_ADD),m=Hr,S=Hr),pt)switch(V){case Bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bl:t.blendFunc(t.ONE,t.ONE);break;case Ip:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Np:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ut("WebGLState: Invalid blending: ",V);break}else switch(V){case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bl:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ip:ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Np:ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ut("WebGLState: Invalid blending: ",V);break}E=null,x=null,A=null,P=null,D.set(0,0,0),O=0,g=V,y=pt}return}me=me||Pe,fe=fe||be,Ee=Ee||De,(Pe!==m||me!==S)&&(t.blendEquationSeparate(Ge[Pe],Ge[me]),m=Pe,S=me),(be!==E||De!==x||fe!==A||Ee!==P)&&(t.blendFuncSeparate(R[be],R[De],R[fe],R[Ee]),E=be,x=De,A=fe,P=Ee),($e.equals(D)===!1||Mt!==O)&&(t.blendColor($e.r,$e.g,$e.b,Mt),D.copy($e),O=Mt),g=V,y=!1}function W(V,Pe){V.side===ki?re(t.CULL_FACE):F(t.CULL_FACE);let be=V.side===pn;Pe&&(be=!be),ee(be),V.blending===Bs&&V.transparent===!1?I(zi):I(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const De=V.stencilWrite;o.setTest(De),De&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),he(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){M!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),M=V)}function ie(V){V!==U4?(F(t.CULL_FACE),V!==L&&(V===Lp?t.cullFace(t.BACK):V===O4?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),L=V}function C(V){V!==U&&(B&&t.lineWidth(V),U=V)}function he(V,Pe,be){V?(F(t.POLYGON_OFFSET_FILL),(k!==Pe||z!==be)&&(t.polygonOffset(Pe,be),k=Pe,z=be)):re(t.POLYGON_OFFSET_FILL)}function ce(V){V?F(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function ue(V){V===void 0&&(V=t.TEXTURE0+X-1),le!==V&&(t.activeTexture(V),le=V)}function K(V,Pe,be){be===void 0&&(le===null?be=t.TEXTURE0+X-1:be=le);let De=ge[be];De===void 0&&(De={type:void 0,texture:void 0},ge[be]=De),(De.type!==V||De.texture!==Pe)&&(le!==be&&(t.activeTexture(be),le=be),t.bindTexture(V,Pe||se[V]),De.type=V,De.texture=Pe)}function w(){const V=ge[le];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function b(){try{t.compressedTexImage2D(...arguments)}catch(V){ut("WebGLState:",V)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(V){ut("WebGLState:",V)}}function j(){try{t.texSubImage2D(...arguments)}catch(V){ut("WebGLState:",V)}}function te(){try{t.texSubImage3D(...arguments)}catch(V){ut("WebGLState:",V)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(V){ut("WebGLState:",V)}}function _e(){try{t.compressedTexSubImage3D(...arguments)}catch(V){ut("WebGLState:",V)}}function pe(){try{t.texStorage2D(...arguments)}catch(V){ut("WebGLState:",V)}}function Me(){try{t.texStorage3D(...arguments)}catch(V){ut("WebGLState:",V)}}function Ue(){try{t.texImage2D(...arguments)}catch(V){ut("WebGLState:",V)}}function de(){try{t.texImage3D(...arguments)}catch(V){ut("WebGLState:",V)}}function Se(V){Be.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Be.copy(V))}function Ie(V){at.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),at.copy(V))}function Ce(V,Pe){let be=u.get(Pe);be===void 0&&(be=new WeakMap,u.set(Pe,be));let De=be.get(V);De===void 0&&(De=t.getUniformBlockIndex(Pe,V.name),be.set(V,De))}function ve(V,Pe){const De=u.get(Pe).get(V);l.get(Pe)!==De&&(t.uniformBlockBinding(Pe,De,V.__bindingPointIndex),l.set(Pe,De))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},le=null,ge={},f={},d=new WeakMap,h=[],v=null,_=!1,g=null,m=null,E=null,x=null,S=null,A=null,P=null,D=new st(0,0,0),O=0,y=!1,M=null,L=null,U=null,k=null,z=null,Be.set(0,0,t.canvas.width,t.canvas.height),at.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:F,disable:re,bindFramebuffer:oe,drawBuffers:ae,useProgram:we,setBlending:I,setMaterial:W,setFlipSided:ee,setCullFace:ie,setLineWidth:C,setPolygonOffset:he,setScissorTest:ce,activeTexture:ue,bindTexture:K,unbindTexture:w,compressedTexImage2D:b,compressedTexImage3D:N,texImage2D:Ue,texImage3D:de,updateUBOMapping:Ce,uniformBlockBinding:ve,texStorage2D:pe,texStorage3D:Me,texSubImage2D:j,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:_e,scissor:Se,viewport:Ie,reset:Ke}}function GC(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ft,c=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,b){return h?new OffscreenCanvas(w,b):Ga("canvas")}function _(w,b,N){let j=1;const te=K(w);if((te.width>N||te.height>N)&&(j=N/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(j*te.width),_e=Math.floor(j*te.height);f===void 0&&(f=v(Z,_e));const pe=b?v(Z,_e):f;return pe.width=Z,pe.height=_e,pe.getContext("2d").drawImage(w,0,0,Z,_e),Xe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+_e+")."),pe}else return"data"in w&&Xe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),w;return w}function g(w){return w.generateMipmaps}function m(w){t.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function x(w,b,N,j,te=!1){if(w!==null){if(t[w]!==void 0)return t[w];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=b;if(b===t.RED&&(N===t.FLOAT&&(Z=t.R32F),N===t.HALF_FLOAT&&(Z=t.R16F),N===t.UNSIGNED_BYTE&&(Z=t.R8)),b===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.R8UI),N===t.UNSIGNED_SHORT&&(Z=t.R16UI),N===t.UNSIGNED_INT&&(Z=t.R32UI),N===t.BYTE&&(Z=t.R8I),N===t.SHORT&&(Z=t.R16I),N===t.INT&&(Z=t.R32I)),b===t.RG&&(N===t.FLOAT&&(Z=t.RG32F),N===t.HALF_FLOAT&&(Z=t.RG16F),N===t.UNSIGNED_BYTE&&(Z=t.RG8)),b===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RG8UI),N===t.UNSIGNED_SHORT&&(Z=t.RG16UI),N===t.UNSIGNED_INT&&(Z=t.RG32UI),N===t.BYTE&&(Z=t.RG8I),N===t.SHORT&&(Z=t.RG16I),N===t.INT&&(Z=t.RG32I)),b===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),N===t.UNSIGNED_INT&&(Z=t.RGB32UI),N===t.BYTE&&(Z=t.RGB8I),N===t.SHORT&&(Z=t.RGB16I),N===t.INT&&(Z=t.RGB32I)),b===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),N===t.UNSIGNED_INT&&(Z=t.RGBA32UI),N===t.BYTE&&(Z=t.RGBA8I),N===t.SHORT&&(Z=t.RGBA16I),N===t.INT&&(Z=t.RGBA32I)),b===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),b===t.RGBA){const _e=te?yl:ot.getTransfer(j);N===t.FLOAT&&(Z=t.RGBA32F),N===t.HALF_FLOAT&&(Z=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Z=_e===gt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(w,b){let N;return w?b===null||b===yi||b===Ha?N=t.DEPTH24_STENCIL8:b===pi?N=t.DEPTH32F_STENCIL8:b===za&&(N=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===yi||b===Ha?N=t.DEPTH_COMPONENT24:b===pi?N=t.DEPTH_COMPONENT32F:b===za&&(N=t.DEPTH_COMPONENT16),N}function A(w,b){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Jt&&w.minFilter!==sn?Math.log2(Math.max(b.width,b.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?b.mipmaps.length:1}function P(w){const b=w.target;b.removeEventListener("dispose",P),O(b),b.isVideoTexture&&c.delete(b)}function D(w){const b=w.target;b.removeEventListener("dispose",D),M(b)}function O(w){const b=i.get(w);if(b.__webglInit===void 0)return;const N=w.source,j=d.get(N);if(j){const te=j[b.__cacheKey];te.usedTimes--,te.usedTimes===0&&y(w),Object.keys(j).length===0&&d.delete(N)}i.remove(w)}function y(w){const b=i.get(w);t.deleteTexture(b.__webglTexture);const N=w.source,j=d.get(N);delete j[b.__cacheKey],a.memory.textures--}function M(w){const b=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let te=0;te<b.__webglFramebuffer[j].length;te++)t.deleteFramebuffer(b.__webglFramebuffer[j][te]);else t.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)t.deleteFramebuffer(b.__webglFramebuffer[j]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const N=w.textures;for(let j=0,te=N.length;j<te;j++){const Z=i.get(N[j]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(N[j])}i.remove(w)}let L=0;function U(){L=0}function k(){const w=L;return w>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+r.maxTextures),L+=1,w}function z(w){const b=[];return b.push(w.wrapS),b.push(w.wrapT),b.push(w.wrapR||0),b.push(w.magFilter),b.push(w.minFilter),b.push(w.anisotropy),b.push(w.internalFormat),b.push(w.format),b.push(w.type),b.push(w.generateMipmaps),b.push(w.premultiplyAlpha),b.push(w.flipY),b.push(w.unpackAlignment),b.push(w.colorSpace),b.join()}function X(w,b){const N=i.get(w);if(w.isVideoTexture&&ce(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&N.__version!==w.version){const j=w.image;if(j===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,w,b);return}}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+b)}function B(w,b){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){se(N,w,b);return}else w.isExternalTexture&&(N.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+b)}function G(w,b){const N=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&N.__version!==w.version){se(N,w,b);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+b)}function q(w,b){const N=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&N.__version!==w.version){F(N,w,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+b)}const le={[Ku]:t.REPEAT,[Vi]:t.CLAMP_TO_EDGE,[Zu]:t.MIRRORED_REPEAT},ge={[Jt]:t.NEAREST,[rT]:t.NEAREST_MIPMAP_NEAREST,[Co]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[Pc]:t.LINEAR_MIPMAP_NEAREST,[Xr]:t.LINEAR_MIPMAP_LINEAR},ye={[oT]:t.NEVER,[dT]:t.ALWAYS,[lT]:t.LESS,[Vd]:t.LEQUAL,[cT]:t.EQUAL,[zd]:t.GEQUAL,[uT]:t.GREATER,[fT]:t.NOTEQUAL};function Oe(w,b){if(b.type===pi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===sn||b.magFilter===Pc||b.magFilter===Co||b.magFilter===Xr||b.minFilter===sn||b.minFilter===Pc||b.minFilter===Co||b.minFilter===Xr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,le[b.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,le[b.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,le[b.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,ge[b.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Jt||b.minFilter!==Co&&b.minFilter!==Xr||b.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function Be(w,b){let N=!1;w.__webglInit===void 0&&(w.__webglInit=!0,b.addEventListener("dispose",P));const j=b.source;let te=d.get(j);te===void 0&&(te={},d.set(j,te));const Z=z(b);if(Z!==w.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),te[Z].usedTimes++;const _e=te[w.__cacheKey];_e!==void 0&&(te[w.__cacheKey].usedTimes--,_e.usedTimes===0&&y(b)),w.__cacheKey=Z,w.__webglTexture=te[Z].texture}return N}function at(w,b,N){return Math.floor(Math.floor(w/N)/b)}function et(w,b,N,j){const Z=w.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,b.width,b.height,N,j,b.data);else{Z.sort((de,Se)=>de.start-Se.start);let _e=0;for(let de=1;de<Z.length;de++){const Se=Z[_e],Ie=Z[de],Ce=Se.start+Se.count,ve=at(Ie.start,b.width,4),Ke=at(Se.start,b.width,4);Ie.start<=Ce+1&&ve===Ke&&at(Ie.start+Ie.count-1,b.width,4)===ve?Se.count=Math.max(Se.count,Ie.start+Ie.count-Se.start):(++_e,Z[_e]=Ie)}Z.length=_e+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,b.width);for(let de=0,Se=Z.length;de<Se;de++){const Ie=Z[de],Ce=Math.floor(Ie.start/4),ve=Math.ceil(Ie.count/4),Ke=Ce%b.width,V=Math.floor(Ce/b.width),Pe=ve,be=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(t.UNPACK_SKIP_ROWS,V),n.texSubImage2D(t.TEXTURE_2D,0,Ke,V,Pe,be,N,j,b.data)}w.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function se(w,b,N){let j=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=t.TEXTURE_3D);const te=Be(w,b),Z=b.source;n.bindTexture(j,w.__webglTexture,t.TEXTURE0+N);const _e=i.get(Z);if(Z.version!==_e.__version||te===!0){n.activeTexture(t.TEXTURE0+N);const pe=ot.getPrimaries(ot.workingColorSpace),Me=b.colorSpace===_r?null:ot.getPrimaries(b.colorSpace),Ue=b.colorSpace===_r||pe===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let de=_(b.image,!1,r.maxTextureSize);de=ue(b,de);const Se=s.convert(b.format,b.colorSpace),Ie=s.convert(b.type);let Ce=x(b.internalFormat,Se,Ie,b.colorSpace,b.isVideoTexture);Oe(j,b);let ve;const Ke=b.mipmaps,V=b.isVideoTexture!==!0,Pe=_e.__version===void 0||te===!0,be=Z.dataReady,De=A(b,de);if(b.isDepthTexture)Ce=S(b.format===qr,b.type),Pe&&(V?n.texStorage2D(t.TEXTURE_2D,1,Ce,de.width,de.height):n.texImage2D(t.TEXTURE_2D,0,Ce,de.width,de.height,0,Se,Ie,null));else if(b.isDataTexture)if(Ke.length>0){V&&Pe&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Ke[0].width,Ke[0].height);for(let me=0,fe=Ke.length;me<fe;me++)ve=Ke[me],V?be&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,me,Ce,ve.width,ve.height,0,Se,Ie,ve.data);b.generateMipmaps=!1}else V?(Pe&&n.texStorage2D(t.TEXTURE_2D,De,Ce,de.width,de.height),be&&et(b,de,Se,Ie)):n.texImage2D(t.TEXTURE_2D,0,Ce,de.width,de.height,0,Se,Ie,de.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){V&&Pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,Ke[0].width,Ke[0].height,de.depth);for(let me=0,fe=Ke.length;me<fe;me++)if(ve=Ke[me],b.format!==Kn)if(Se!==null)if(V){if(be)if(b.layerUpdates.size>0){const Ee=am(ve.width,ve.height,b.format,b.type);for(const $e of b.layerUpdates){const Mt=ve.data.subarray($e*Ee/ve.data.BYTES_PER_ELEMENT,($e+1)*Ee/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,$e,ve.width,ve.height,1,Se,Mt)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,de.depth,Se,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,Ce,ve.width,ve.height,de.depth,0,ve.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,ve.width,ve.height,de.depth,Se,Ie,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,Ce,ve.width,ve.height,de.depth,0,Se,Ie,ve.data)}else{V&&Pe&&n.texStorage2D(t.TEXTURE_2D,De,Ce,Ke[0].width,Ke[0].height);for(let me=0,fe=Ke.length;me<fe;me++)ve=Ke[me],b.format!==Kn?Se!==null?V?be&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,me,Ce,ve.width,ve.height,0,ve.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?be&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,ve.width,ve.height,Se,Ie,ve.data):n.texImage2D(t.TEXTURE_2D,me,Ce,ve.width,ve.height,0,Se,Ie,ve.data)}else if(b.isDataArrayTexture)if(V){if(Pe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Ce,de.width,de.height,de.depth),be)if(b.layerUpdates.size>0){const me=am(de.width,de.height,b.format,b.type);for(const fe of b.layerUpdates){const Ee=de.data.subarray(fe*me/de.data.BYTES_PER_ELEMENT,(fe+1)*me/de.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,de.width,de.height,1,Se,Ie,Ee)}b.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Se,Ie,de.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ce,de.width,de.height,de.depth,0,Se,Ie,de.data);else if(b.isData3DTexture)V?(Pe&&n.texStorage3D(t.TEXTURE_3D,De,Ce,de.width,de.height,de.depth),be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Se,Ie,de.data)):n.texImage3D(t.TEXTURE_3D,0,Ce,de.width,de.height,de.depth,0,Se,Ie,de.data);else if(b.isFramebufferTexture){if(Pe)if(V)n.texStorage2D(t.TEXTURE_2D,De,Ce,de.width,de.height);else{let me=de.width,fe=de.height;for(let Ee=0;Ee<De;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Ce,me,fe,0,Se,Ie,null),me>>=1,fe>>=1}}else if(Ke.length>0){if(V&&Pe){const me=K(Ke[0]);n.texStorage2D(t.TEXTURE_2D,De,Ce,me.width,me.height)}for(let me=0,fe=Ke.length;me<fe;me++)ve=Ke[me],V?be&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Se,Ie,ve):n.texImage2D(t.TEXTURE_2D,me,Ce,Se,Ie,ve);b.generateMipmaps=!1}else if(V){if(Pe){const me=K(de);n.texStorage2D(t.TEXTURE_2D,De,Ce,me.width,me.height)}be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ie,de)}else n.texImage2D(t.TEXTURE_2D,0,Ce,Se,Ie,de);g(b)&&m(j),_e.__version=Z.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function F(w,b,N){if(b.image.length!==6)return;const j=Be(w,b),te=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+N);const Z=i.get(te);if(te.version!==Z.__version||j===!0){n.activeTexture(t.TEXTURE0+N);const _e=ot.getPrimaries(ot.workingColorSpace),pe=b.colorSpace===_r?null:ot.getPrimaries(b.colorSpace),Me=b.colorSpace===_r||_e===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=b.isCompressedTexture||b.image[0].isCompressedTexture,de=b.image[0]&&b.image[0].isDataTexture,Se=[];for(let fe=0;fe<6;fe++)!Ue&&!de?Se[fe]=_(b.image[fe],!0,r.maxCubemapSize):Se[fe]=de?b.image[fe].image:b.image[fe],Se[fe]=ue(b,Se[fe]);const Ie=Se[0],Ce=s.convert(b.format,b.colorSpace),ve=s.convert(b.type),Ke=x(b.internalFormat,Ce,ve,b.colorSpace),V=b.isVideoTexture!==!0,Pe=Z.__version===void 0||j===!0,be=te.dataReady;let De=A(b,Ie);Oe(t.TEXTURE_CUBE_MAP,b);let me;if(Ue){V&&Pe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Ke,Ie.width,Ie.height);for(let fe=0;fe<6;fe++){me=Se[fe].mipmaps;for(let Ee=0;Ee<me.length;Ee++){const $e=me[Ee];b.format!==Kn?Ce!==null?V?be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,0,0,$e.width,$e.height,Ce,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,Ke,$e.width,$e.height,0,$e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,0,0,$e.width,$e.height,Ce,ve,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee,Ke,$e.width,$e.height,0,Ce,ve,$e.data)}}}else{if(me=b.mipmaps,V&&Pe){me.length>0&&De++;const fe=K(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Ke,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(de){V?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Se[fe].width,Se[fe].height,Ce,ve,Se[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ke,Se[fe].width,Se[fe].height,0,Ce,ve,Se[fe].data);for(let Ee=0;Ee<me.length;Ee++){const Mt=me[Ee].image[fe].image;V?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,0,0,Mt.width,Mt.height,Ce,ve,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,Ke,Mt.width,Mt.height,0,Ce,ve,Mt.data)}}else{V?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ce,ve,Se[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Ke,Ce,ve,Se[fe]);for(let Ee=0;Ee<me.length;Ee++){const $e=me[Ee];V?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,0,0,Ce,ve,$e.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ee+1,Ke,Ce,ve,$e.image[fe])}}}g(b)&&m(t.TEXTURE_CUBE_MAP),Z.__version=te.version,b.onUpdate&&b.onUpdate(b)}w.__version=b.version}function re(w,b,N,j,te,Z){const _e=s.convert(N.format,N.colorSpace),pe=s.convert(N.type),Me=x(N.internalFormat,_e,pe,N.colorSpace),Ue=i.get(b),de=i.get(N);if(de.__renderTarget=b,!Ue.__hasExternalTextures){const Se=Math.max(1,b.width>>Z),Ie=Math.max(1,b.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,Me,Se,Ie,b.depth,0,_e,pe,null):n.texImage2D(te,Z,Me,Se,Ie,0,_e,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),he(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,te,de.__webglTexture,0,C(b)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,te,de.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(w,b,N){if(t.bindRenderbuffer(t.RENDERBUFFER,w),b.depthBuffer){const j=b.depthTexture,te=j&&j.isDepthTexture?j.type:null,Z=S(b.stencilBuffer,te),_e=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;he(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(b),Z,b.width,b.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(b),Z,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Z,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,_e,t.RENDERBUFFER,w)}else{const j=b.textures;for(let te=0;te<j.length;te++){const Z=j[te],_e=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),Me=x(Z.internalFormat,_e,pe,Z.colorSpace);he(b)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(b),Me,b.width,b.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(b),Me,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,Me,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(w,b,N){const j=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(b.depthTexture);if(te.__renderTarget=b,(!te.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j){if(te.__webglInit===void 0&&(te.__webglInit=!0,b.depthTexture.addEventListener("dispose",P)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,b.depthTexture);const Ue=s.convert(b.depthTexture.format),de=s.convert(b.depthTexture.type);let Se;b.depthTexture.format===Ki?Se=t.DEPTH_COMPONENT24:b.depthTexture.format===qr&&(Se=t.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Se,b.width,b.height,0,Ue,de,null)}}else X(b.depthTexture,0);const Z=te.__webglTexture,_e=C(b),pe=j?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Me=b.depthTexture.format===qr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ki)he(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,pe,Z,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Me,pe,Z,0);else if(b.depthTexture.format===qr)he(b)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,pe,Z,0,_e):t.framebufferTexture2D(t.FRAMEBUFFER,Me,pe,Z,0);else throw new Error("Unknown depthTexture format")}function we(w){const b=i.get(w),N=w.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==w.depthTexture){const j=w.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){const te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),b.__depthDisposeCallback=te}b.__boundDepthTexture=j}if(w.depthTexture&&!b.__autoAllocateDepthBuffer)if(N)for(let j=0;j<6;j++)ae(b.__webglFramebuffer[j],w,j);else{const j=w.texture.mipmaps;j&&j.length>0?ae(b.__webglFramebuffer[0],w,0):ae(b.__webglFramebuffer,w,0)}else if(N){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=t.createRenderbuffer(),oe(b.__webglDepthbuffer[j],w,!1);else{const te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else{const j=w.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=t.createRenderbuffer(),oe(b.__webglDepthbuffer,w,!1);else{const te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ge(w,b,N){const j=i.get(w);b!==void 0&&re(j.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&we(w)}function R(w){const b=w.texture,N=i.get(w),j=i.get(b);w.addEventListener("dispose",D);const te=w.textures,Z=w.isWebGLCubeRenderTarget===!0,_e=te.length>1;if(_e||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=b.version,a.memory.textures++),Z){N.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer[pe]=[];for(let Me=0;Me<b.mipmaps.length;Me++)N.__webglFramebuffer[pe][Me]=t.createFramebuffer()}else N.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){N.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)N.__webglFramebuffer[pe]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(_e)for(let pe=0,Me=te.length;pe<Me;pe++){const Ue=i.get(te[pe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&he(w)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const Me=te[pe];N.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[pe]);const Ue=s.convert(Me.format,Me.colorSpace),de=s.convert(Me.type),Se=x(Me.internalFormat,Ue,de,Me.colorSpace,w.isXRRenderTarget===!0),Ie=C(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Se,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,N.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)re(N.__webglFramebuffer[pe][Me],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else re(N.__webglFramebuffer[pe],w,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(b)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(_e){for(let pe=0,Me=te.length;pe<Me;pe++){const Ue=te[pe],de=i.get(Ue);let Se=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Se=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,de.__webglTexture),Oe(Se,Ue),re(N.__webglFramebuffer,w,Ue,t.COLOR_ATTACHMENT0+pe,Se,0),g(Ue)&&m(Se)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,j.__webglTexture),Oe(pe,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)re(N.__webglFramebuffer[Me],w,b,t.COLOR_ATTACHMENT0,pe,Me);else re(N.__webglFramebuffer,w,b,t.COLOR_ATTACHMENT0,pe,0);g(b)&&m(pe),n.unbindTexture()}w.depthBuffer&&we(w)}function I(w){const b=w.textures;for(let N=0,j=b.length;N<j;N++){const te=b[N];if(g(te)){const Z=E(w),_e=i.get(te).__webglTexture;n.bindTexture(Z,_e),m(Z),n.unbindTexture()}}}const W=[],ee=[];function ie(w){if(w.samples>0){if(he(w)===!1){const b=w.textures,N=w.width,j=w.height;let te=t.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,_e=i.get(w),pe=b.length>1;if(pe)for(let Ue=0;Ue<b.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer);const Me=w.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let Ue=0;Ue<b.length;Ue++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const de=i.get(b[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,de,0)}t.blitFramebuffer(0,0,N,j,0,0,N,j,te,t.NEAREST),l===!0&&(W.length=0,ee.length=0,W.push(t.COLOR_ATTACHMENT0+Ue),w.depthBuffer&&w.resolveDepthBuffer===!1&&(W.push(Z),ee.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,W))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ue=0;Ue<b.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,_e.__webglColorRenderbuffer[Ue]);const de=i.get(b[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,_e.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,de,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const b=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[b])}}}function C(w){return Math.min(r.maxSamples,w.samples)}function he(w){const b=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ce(w){const b=a.render.frame;c.get(w)!==b&&(c.set(w,b),w.update())}function ue(w,b){const N=w.colorSpace,j=w.format,te=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||N!==Ys&&N!==_r&&(ot.getTransfer(N)===gt?(j!==Kn||te!==Cn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ut("WebGLTextures: Unsupported texture color space:",N)),b}function K(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(u.width=w.naturalWidth||w.width,u.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(u.width=w.displayWidth,u.height=w.displayHeight):(u.width=w.width,u.height=w.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=q,this.rebindTextures=Ge,this.setupRenderTarget=R,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=re,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function WC(t,e){function n(i,r=_r){let s;const a=ot.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===Ud)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Od)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E1)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===M1)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===y1)return t.BYTE;if(i===S1)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===Nd)return t.INT;if(i===yi)return t.UNSIGNED_INT;if(i===pi)return t.FLOAT;if(i===Yi)return t.HALF_FLOAT;if(i===T1)return t.ALPHA;if(i===A1)return t.RGB;if(i===Kn)return t.RGBA;if(i===Ki)return t.DEPTH_COMPONENT;if(i===qr)return t.DEPTH_STENCIL;if(i===w1)return t.RED;if(i===Fd)return t.RED_INTEGER;if(i===js)return t.RG;if(i===Bd)return t.RG_INTEGER;if(i===kd)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===al)if(a===gt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ju||i===Qu||i===ef||i===tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ju)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===nf||i===rf||i===sf||i===af||i===of||i===lf||i===cf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===nf||i===rf)return a===gt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===af)return s.COMPRESSED_R11_EAC;if(i===of)return s.COMPRESSED_SIGNED_R11_EAC;if(i===lf)return s.COMPRESSED_RG11_EAC;if(i===cf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===uf||i===ff||i===df||i===hf||i===pf||i===mf||i===gf||i===vf||i===_f||i===xf||i===bf||i===yf||i===Sf||i===Ef)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ff)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===df)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===vf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_f)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===xf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sf)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ef)return a===gt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mf||i===Tf||i===Af)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mf)return a===gt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Tf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Af)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===wf||i===Cf||i===Rf||i===Pf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Cf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Pf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ha?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const $C=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XC=`
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

}`;class qC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new H1(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new si({vertexShader:$C,fragmentShader:XC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ri(new jl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class jC extends sa{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,c=null,f=null,d=null,h=null,v=null;const _=typeof XRWebGLBinding<"u",g=new qC,m={},E=n.getContextAttributes();let x=null,S=null;const A=[],P=[],D=new ft;let O=null;const y=new Vn;y.viewport=new Bt;const M=new Vn;M.viewport=new Bt;const L=[y,M],U=new rA;let k=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let F=A[se];return F===void 0&&(F=new Qc,A[se]=F),F.getTargetRaySpace()},this.getControllerGrip=function(se){let F=A[se];return F===void 0&&(F=new Qc,A[se]=F),F.getGripSpace()},this.getHand=function(se){let F=A[se];return F===void 0&&(F=new Qc,A[se]=F),F.getHandSpace()};function X(se){const F=P.indexOf(se.inputSource);if(F===-1)return;const re=A[F];re!==void 0&&(re.update(se.inputSource,se.frame,u||a),re.dispatchEvent({type:se.type,data:se.inputSource}))}function B(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let se=0;se<A.length;se++){const F=P[se];F!==null&&(P[se]=null,A[se].disconnect(F))}k=null,z=null,g.reset();for(const se in m)delete m[se];e.setRenderTarget(x),h=null,d=null,f=null,r=null,S=null,et.stop(),i.isPresenting=!1,e.setPixelRatio(O),e.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(se){u=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(x=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),E.xrCompatible!==!0&&await n.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,oe=null,ae=null;E.depth&&(ae=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=E.stencil?qr:Ki,oe=E.stencil?Ha:yi);const we={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(we),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new _i(d.textureWidth,d.textureHeight,{format:Kn,type:Cn,depthTexture:new $a(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new _i(h.framebufferWidth,h.framebufferHeight,{format:Kn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),et.setContext(r),et.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(se){for(let F=0;F<se.removed.length;F++){const re=se.removed[F],oe=P.indexOf(re);oe>=0&&(P[oe]=null,A[oe].disconnect(re))}for(let F=0;F<se.added.length;F++){const re=se.added[F];let oe=P.indexOf(re);if(oe===-1){for(let we=0;we<A.length;we++)if(we>=P.length){P.push(re),oe=we;break}else if(P[we]===null){P[we]=re,oe=we;break}if(oe===-1)break}const ae=A[oe];ae&&ae.connect(re)}}const q=new J,le=new J;function ge(se,F,re){q.setFromMatrixPosition(F.matrixWorld),le.setFromMatrixPosition(re.matrixWorld);const oe=q.distanceTo(le),ae=F.projectionMatrix.elements,we=re.projectionMatrix.elements,Ge=ae[14]/(ae[10]-1),R=ae[14]/(ae[10]+1),I=(ae[9]+1)/ae[5],W=(ae[9]-1)/ae[5],ee=(ae[8]-1)/ae[0],ie=(we[8]+1)/we[0],C=Ge*ee,he=Ge*ie,ce=oe/(-ee+ie),ue=ce*-ee;if(F.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ue),se.translateZ(ce),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ae[10]===-1)se.projectionMatrix.copy(F.projectionMatrix),se.projectionMatrixInverse.copy(F.projectionMatrixInverse);else{const K=Ge+ce,w=R+ce,b=C-ue,N=he+(oe-ue),j=I*R/w*K,te=W*R/w*K;se.projectionMatrix.makePerspective(b,N,j,te,K,w),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function ye(se,F){F===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(F.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let F=se.near,re=se.far;g.texture!==null&&(g.depthNear>0&&(F=g.depthNear),g.depthFar>0&&(re=g.depthFar)),U.near=M.near=y.near=F,U.far=M.far=y.far=re,(k!==U.near||z!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,z=U.far),U.layers.mask=se.layers.mask|6,y.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const oe=se.parent,ae=U.cameras;ye(U,oe);for(let we=0;we<ae.length;we++)ye(ae[we],oe);ae.length===2?ge(U,y,M):U.projectionMatrix.copy(y.projectionMatrix),Oe(se,U,oe)};function Oe(se,F,re){re===null?se.matrix.copy(F.matrixWorld):(se.matrix.copy(re.matrixWorld),se.matrix.invert(),se.matrix.multiply(F.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(F.projectionMatrix),se.projectionMatrixInverse.copy(F.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Df*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(se){return m[se]};let Be=null;function at(se,F){if(c=F.getViewerPose(u||a),v=F,c!==null){const re=c.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let oe=!1;re.length!==U.cameras.length&&(U.cameras.length=0,oe=!0);for(let R=0;R<re.length;R++){const I=re[R];let W=null;if(h!==null)W=h.getViewport(I);else{const ie=f.getViewSubImage(d,I);W=ie.viewport,R===0&&(e.setRenderTargetTextures(S,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(S))}let ee=L[R];ee===void 0&&(ee=new Vn,ee.layers.enable(R),ee.viewport=new Bt,L[R]=ee),ee.matrix.fromArray(I.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(I.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(W.x,W.y,W.width,W.height),R===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),oe===!0&&U.cameras.push(ee)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const R=f.getDepthInformation(re[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<re.length;R++){const I=re[R].camera;if(I){let W=m[I];W||(W=new H1,m[I]=W);const ee=f.getCameraImage(I);W.sourceTexture=ee}}}}for(let re=0;re<A.length;re++){const oe=P[re],ae=A[re];oe!==null&&ae!==void 0&&ae.update(oe,F,u||a)}Be&&Be(se,F),F.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:F}),v=null}const et=new W1;et.setAnimationLoop(at),this.setAnimationLoop=function(se){Be=se},this.dispose=function(){}}}const Br=new Si,YC=new It;function KC(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,F1(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,E,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),c(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,S)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,E,x):m.isSpriteMaterial?u(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const E=e.get(m),x=E.envMap,S=E.envMapRotation;x&&(g.envMap.value=x,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),g.envMapRotation.value.setFromMatrix4(YC.makeRotationFromEuler(Br)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=x*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZC(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,x){const S=x.program;i.uniformBlockBinding(E,S)}function u(E,x){let S=r[E.id];S===void 0&&(v(E),S=c(E),r[E.id]=S,E.addEventListener("dispose",g));const A=x.program;i.updateUBOMapping(E,A);const P=e.render.frame;s[E.id]!==P&&(d(E),s[E.id]=P)}function c(E){const x=f();E.__bindingPointIndex=x;const S=t.createBuffer(),A=E.__size,P=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const x=r[E.id],S=E.uniforms,A=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let P=0,D=S.length;P<D;P++){const O=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,M=O.length;y<M;y++){const L=O[y];if(h(L,P,y,A)===!0){const U=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let z=0;for(let X=0;X<k.length;X++){const B=k[X],G=_(B);typeof B=="number"||typeof B=="boolean"?(L.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,U+z,L.__data)):B.isMatrix3?(L.__data[0]=B.elements[0],L.__data[1]=B.elements[1],L.__data[2]=B.elements[2],L.__data[3]=0,L.__data[4]=B.elements[3],L.__data[5]=B.elements[4],L.__data[6]=B.elements[5],L.__data[7]=0,L.__data[8]=B.elements[6],L.__data[9]=B.elements[7],L.__data[10]=B.elements[8],L.__data[11]=0):(B.toArray(L.__data,z),z+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,x,S,A){const P=E.value,D=x+"_"+S;if(A[D]===void 0)return typeof P=="number"||typeof P=="boolean"?A[D]=P:A[D]=P.clone(),!0;{const O=A[D];if(typeof P=="number"||typeof P=="boolean"){if(O!==P)return A[D]=P,!0}else if(O.equals(P)===!1)return O.copy(P),!0}return!1}function v(E){const x=E.uniforms;let S=0;const A=16;for(let D=0,O=x.length;D<O;D++){const y=Array.isArray(x[D])?x[D]:[x[D]];for(let M=0,L=y.length;M<L;M++){const U=y[M],k=Array.isArray(U.value)?U.value:[U.value];for(let z=0,X=k.length;z<X;z++){const B=k[z],G=_(B),q=S%A,le=q%G.boundary,ge=q+le;S+=le,ge!==0&&A-ge<G.storage&&(S+=A-ge),U.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=G.storage}}}const P=S%A;return P>0&&(S+=A-P),E.__size=S,E.__cache={},this}function _(E){const x={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(x.boundary=4,x.storage=4):E.isVector2?(x.boundary=8,x.storage=8):E.isVector3||E.isColor?(x.boundary=16,x.storage=12):E.isVector4?(x.boundary=16,x.storage=16):E.isMatrix3?(x.boundary=48,x.storage=48):E.isMatrix4?(x.boundary=64,x.storage=64):E.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",E),x}function g(E){const x=E.target;x.removeEventListener("dispose",g);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:u,dispose:m}}const JC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ci=null;function QC(){return ci===null&&(ci=new VT(JC,16,16,js,Yi),ci.name="DFG_LUT",ci.minFilter=sn,ci.magFilter=sn,ci.wrapS=Vi,ci.wrapT=Vi,ci.generateMipmaps=!1,ci.needsUpdate=!0),ci}class e8{constructor(e={}){const{canvas:n=hT(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Cn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=h,g=new Set([kd,Bd,Fd]),m=new Set([Cn,yi,za,Ha,Ud,Od]),E=new Uint32Array(4),x=new Int32Array(4);let S=null,A=null;const P=[],D=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let M=!1;this._outputColorSpace=Bn;let L=0,U=0,k=null,z=-1,X=null;const B=new Bt,G=new Bt;let q=null;const le=new st(0);let ge=0,ye=n.width,Oe=n.height,Be=1,at=null,et=null;const se=new Bt(0,0,ye,Oe),F=new Bt(0,0,ye,Oe);let re=!1;const oe=new Gd;let ae=!1,we=!1;const Ge=new It,R=new J,I=new Bt,W={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ie(){return k===null?Be:1}let C=i;function he(T,H){return n.getContext(T,H)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ld}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",Mt,!1),n.addEventListener("webglcontextcreationerror",pt,!1),C===null){const H="webgl2";if(C=he(H,T),C===null)throw he(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw ut("WebGLRenderer: "+T.message),T}let ce,ue,K,w,b,N,j,te,Z,_e,pe,Me,Ue,de,Se,Ie,Ce,ve,Ke,V,Pe,be,De,me;function fe(){ce=new Q5(C),ce.init(),be=new WC(C,ce),ue=new W5(C,ce,e,be),K=new HC(C,ce),ue.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),w=new n6(C),b=new wC,N=new GC(C,ce,K,b,ue,be,w),j=new X5(y),te=new J5(y),Z=new aA(C),De=new H5(C,Z),_e=new e6(C,Z,w,De),pe=new r6(C,_e,Z,w),Ke=new i6(C,ue,N),Ie=new $5(b),Me=new AC(y,j,te,ce,ue,De,Ie),Ue=new KC(y,b),de=new RC,Se=new UC(ce),ve=new z5(y,j,te,K,pe,v,l),Ce=new VC(y,pe,ue),me=new ZC(C,w,ue,K),V=new G5(C,ce,w),Pe=new t6(C,ce,w),w.programs=Me.programs,y.capabilities=ue,y.extensions=ce,y.properties=b,y.renderLists=de,y.shadowMap=Ce,y.state=K,y.info=w}fe(),_!==Cn&&(O=new a6(_,n.width,n.height,r,s));const Ee=new jC(y,C);this.xr=Ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=ce.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ce.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Be},this.setPixelRatio=function(T){T!==void 0&&(Be=T,this.setSize(ye,Oe,!1))},this.getSize=function(T){return T.set(ye,Oe)},this.setSize=function(T,H,ne=!0){if(Ee.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=T,Oe=H,n.width=Math.floor(T*Be),n.height=Math.floor(H*Be),ne===!0&&(n.style.width=T+"px",n.style.height=H+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(ye*Be,Oe*Be).floor()},this.setDrawingBufferSize=function(T,H,ne){ye=T,Oe=H,Be=ne,n.width=Math.floor(T*ne),n.height=Math.floor(H*ne),this.setViewport(0,0,T,H)},this.setEffects=function(T){if(_===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let H=0;H<T.length;H++)if(T[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,H,ne,Q){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,H,ne,Q),K.viewport(B.copy(se).multiplyScalar(Be).round())},this.getScissor=function(T){return T.copy(F)},this.setScissor=function(T,H,ne,Q){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,ne,Q),K.scissor(G.copy(F).multiplyScalar(Be).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){K.setScissorTest(re=T)},this.setOpaqueSort=function(T){at=T},this.setTransparentSort=function(T){et=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor(...arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha(...arguments)},this.clear=function(T=!0,H=!0,ne=!0){let Q=0;if(T){let Y=!1;if(k!==null){const Te=k.texture.format;Y=g.has(Te)}if(Y){const Te=k.texture.type,Le=m.has(Te),Re=ve.getClearColor(),Ne=ve.getClearAlpha(),Fe=Re.r,ze=Re.g,ke=Re.b;Le?(E[0]=Fe,E[1]=ze,E[2]=ke,E[3]=Ne,C.clearBufferuiv(C.COLOR,0,E)):(x[0]=Fe,x[1]=ze,x[2]=ke,x[3]=Ne,C.clearBufferiv(C.COLOR,0,x))}else Q|=C.COLOR_BUFFER_BIT}H&&(Q|=C.DEPTH_BUFFER_BIT),ne&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",Mt,!1),n.removeEventListener("webglcontextcreationerror",pt,!1),ve.dispose(),de.dispose(),Se.dispose(),b.dispose(),j.dispose(),te.dispose(),pe.dispose(),De.dispose(),me.dispose(),Me.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",qd),Ee.removeEventListener("sessionend",jd),Cr.stop()};function $e(T){T.preventDefault(),kp("WebGLRenderer: Context Lost."),M=!0}function Mt(){kp("WebGLRenderer: Context Restored."),M=!1;const T=w.autoReset,H=Ce.enabled,ne=Ce.autoUpdate,Q=Ce.needsUpdate,Y=Ce.type;fe(),w.autoReset=T,Ce.enabled=H,Ce.autoUpdate=ne,Ce.needsUpdate=Q,Ce.type=Y}function pt(T){ut("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function li(T){const H=T.target;H.removeEventListener("dispose",li),Ai(H)}function Ai(T){K1(T),b.remove(T)}function K1(T){const H=b.get(T).programs;H!==void 0&&(H.forEach(function(ne){Me.releaseProgram(ne)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,ne,Q,Y,Te){H===null&&(H=W);const Le=Y.isMesh&&Y.matrixWorld.determinant()<0,Re=J1(T,H,ne,Q,Y);K.setMaterial(Q,Le);let Ne=ne.index,Fe=1;if(Q.wireframe===!0){if(Ne=_e.getWireframeAttribute(ne),Ne===void 0)return;Fe=2}const ze=ne.drawRange,ke=ne.attributes.position;let tt=ze.start*Fe,_t=(ze.start+ze.count)*Fe;Te!==null&&(tt=Math.max(tt,Te.start*Fe),_t=Math.min(_t,(Te.start+Te.count)*Fe)),Ne!==null?(tt=Math.max(tt,0),_t=Math.min(_t,Ne.count)):ke!=null&&(tt=Math.max(tt,0),_t=Math.min(_t,ke.count));const Nt=_t-tt;if(Nt<0||Nt===1/0)return;De.setup(Y,Q,Re,ne,Ne);let Ut,bt=V;if(Ne!==null&&(Ut=Z.get(Ne),bt=Pe,bt.setIndex(Ut)),Y.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*ie()),bt.setMode(C.LINES)):bt.setMode(C.TRIANGLES);else if(Y.isLine){let Ve=Q.linewidth;Ve===void 0&&(Ve=1),K.setLineWidth(Ve*ie()),Y.isLineSegments?bt.setMode(C.LINES):Y.isLineLoop?bt.setMode(C.LINE_LOOP):bt.setMode(C.LINE_STRIP)}else Y.isPoints?bt.setMode(C.POINTS):Y.isSprite&&bt.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))bt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ve=Y._multiDrawStarts,mt=Y._multiDrawCounts,ct=Y._multiDrawCount,Sn=Ne?Z.get(Ne).bytesPerElement:1,is=b.get(Q).currentProgram.getUniforms();for(let En=0;En<ct;En++)is.setValue(C,"_gl_DrawID",En),bt.render(Ve[En]/Sn,mt[En])}else if(Y.isInstancedMesh)bt.renderInstances(tt,Nt,Y.count);else if(ne.isInstancedBufferGeometry){const Ve=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,mt=Math.min(ne.instanceCount,Ve);bt.renderInstances(tt,Nt,mt)}else bt.render(tt,Nt)};function Xd(T,H,ne){T.transparent===!0&&T.side===ki&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,po(T,H,ne),T.side=Er,T.needsUpdate=!0,po(T,H,ne),T.side=ki):po(T,H,ne)}this.compile=function(T,H,ne=null){ne===null&&(ne=T),A=Se.get(ne),A.init(H),D.push(A),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),T!==ne&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(H.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights();const Q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let Le=0;Le<Te.length;Le++){const Re=Te[Le];Xd(Re,ne,Y),Q.add(Re)}else Xd(Te,ne,Y),Q.add(Te)}),A=D.pop(),Q},this.compileAsync=function(T,H,ne=null){const Q=this.compile(T,H,ne);return new Promise(Y=>{function Te(){if(Q.forEach(function(Le){b.get(Le).currentProgram.isReady()&&Q.delete(Le)}),Q.size===0){Y(T);return}setTimeout(Te,10)}ce.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Zl=null;function Z1(T){Zl&&Zl(T)}function qd(){Cr.stop()}function jd(){Cr.start()}const Cr=new W1;Cr.setAnimationLoop(Z1),typeof self<"u"&&Cr.setContext(self),this.setAnimationLoop=function(T){Zl=T,Ee.setAnimationLoop(T),T===null?Cr.stop():Cr.start()},Ee.addEventListener("sessionstart",qd),Ee.addEventListener("sessionend",jd),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const ne=Ee.enabled===!0&&Ee.isPresenting===!0,Q=O!==null&&(k===null||ne)&&O.begin(y,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(H),H=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,H,k),A=Se.get(T,D.length),A.init(H),D.push(A),Ge.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),oe.setFromProjectionMatrix(Ge,mi,H.reversedDepth),we=this.localClippingEnabled,ae=Ie.init(this.clippingPlanes,we),S=de.get(T,P.length),S.init(),P.push(S),Ee.enabled===!0&&Ee.isPresenting===!0){const Le=y.xr.getDepthSensingMesh();Le!==null&&Jl(Le,H,-1/0,y.sortObjects)}Jl(T,H,0,y.sortObjects),S.finish(),y.sortObjects===!0&&S.sort(at,et),ee=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ee&&ve.addToRenderList(S,T),this.info.render.frame++,ae===!0&&Ie.beginShadows();const Y=A.state.shadowsArray;if(Ce.render(Y,T,H),ae===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&O.hasRenderPass())===!1){const Le=S.opaque,Re=S.transmissive;if(A.setupLights(),H.isArrayCamera){const Ne=H.cameras;if(Re.length>0)for(let Fe=0,ze=Ne.length;Fe<ze;Fe++){const ke=Ne[Fe];Kd(Le,Re,T,ke)}ee&&ve.render(T);for(let Fe=0,ze=Ne.length;Fe<ze;Fe++){const ke=Ne[Fe];Yd(S,T,ke,ke.viewport)}}else Re.length>0&&Kd(Le,Re,T,H),ee&&ve.render(T),Yd(S,T,H)}k!==null&&U===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),Q&&O.end(y),T.isScene===!0&&T.onAfterRender(y,T,H),De.resetDefaultState(),z=-1,X=null,D.pop(),D.length>0?(A=D[D.length-1],ae===!0&&Ie.setGlobalState(y.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?S=P[P.length-1]:S=null};function Jl(T,H,ne,Q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)A.pushLight(T),T.castShadow&&A.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||oe.intersectsSprite(T)){Q&&I.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ge);const Le=pe.update(T),Re=T.material;Re.visible&&S.push(T,Le,Re,ne,I.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||oe.intersectsObject(T))){const Le=pe.update(T),Re=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),I.copy(T.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),I.copy(Le.boundingSphere.center)),I.applyMatrix4(T.matrixWorld).applyMatrix4(Ge)),Array.isArray(Re)){const Ne=Le.groups;for(let Fe=0,ze=Ne.length;Fe<ze;Fe++){const ke=Ne[Fe],tt=Re[ke.materialIndex];tt&&tt.visible&&S.push(T,Le,tt,ne,I.z,ke)}}else Re.visible&&S.push(T,Le,Re,ne,I.z,null)}}const Te=T.children;for(let Le=0,Re=Te.length;Le<Re;Le++)Jl(Te[Le],H,ne,Q)}function Yd(T,H,ne,Q){const{opaque:Y,transmissive:Te,transparent:Le}=T;A.setupLightsView(ne),ae===!0&&Ie.setGlobalState(y.clippingPlanes,ne),Q&&K.viewport(B.copy(Q)),Y.length>0&&ho(Y,H,ne),Te.length>0&&ho(Te,H,ne),Le.length>0&&ho(Le,H,ne),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Kd(T,H,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Q.id]===void 0){const tt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Q.id]=new _i(1,1,{generateMipmaps:!0,type:tt?Yi:Cn,minFilter:Xr,samples:ue.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}const Te=A.state.transmissionRenderTarget[Q.id],Le=Q.viewport||B;Te.setSize(Le.z*y.transmissionResolutionScale,Le.w*y.transmissionResolutionScale);const Re=y.getRenderTarget(),Ne=y.getActiveCubeFace(),Fe=y.getActiveMipmapLevel();y.setRenderTarget(Te),y.getClearColor(le),ge=y.getClearAlpha(),ge<1&&y.setClearColor(16777215,.5),y.clear(),ee&&ve.render(ne);const ze=y.toneMapping;y.toneMapping=vi;const ke=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),A.setupLightsView(Q),ae===!0&&Ie.setGlobalState(y.clippingPlanes,Q),ho(T,ne,Q),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),ce.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let _t=0,Nt=H.length;_t<Nt;_t++){const Ut=H[_t],{object:bt,geometry:Ve,material:mt,group:ct}=Ut;if(mt.side===ki&&bt.layers.test(Q.layers)){const Sn=mt.side;mt.side=pn,mt.needsUpdate=!0,Zd(bt,ne,Q,Ve,mt,ct),mt.side=Sn,mt.needsUpdate=!0,tt=!0}}tt===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}y.setRenderTarget(Re,Ne,Fe),y.setClearColor(le,ge),ke!==void 0&&(Q.viewport=ke),y.toneMapping=ze}function ho(T,H,ne){const Q=H.isScene===!0?H.overrideMaterial:null;for(let Y=0,Te=T.length;Y<Te;Y++){const Le=T[Y],{object:Re,geometry:Ne,group:Fe}=Le;let ze=Le.material;ze.allowOverride===!0&&Q!==null&&(ze=Q),Re.layers.test(ne.layers)&&Zd(Re,H,ne,Ne,ze,Fe)}}function Zd(T,H,ne,Q,Y,Te){T.onBeforeRender(y,H,ne,Q,Y,Te),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(y,H,ne,Q,T,Te),Y.transparent===!0&&Y.side===ki&&Y.forceSinglePass===!1?(Y.side=pn,Y.needsUpdate=!0,y.renderBufferDirect(ne,H,Q,Y,T,Te),Y.side=Er,Y.needsUpdate=!0,y.renderBufferDirect(ne,H,Q,Y,T,Te),Y.side=ki):y.renderBufferDirect(ne,H,Q,Y,T,Te),T.onAfterRender(y,H,ne,Q,Y,Te)}function po(T,H,ne){H.isScene!==!0&&(H=W);const Q=b.get(T),Y=A.state.lights,Te=A.state.shadowsArray,Le=Y.state.version,Re=Me.getParameters(T,Y.state,Te,H,ne),Ne=Me.getProgramCacheKey(Re);let Fe=Q.programs;Q.environment=T.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(T.isMeshStandardMaterial?te:j).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",li),Fe=new Map,Q.programs=Fe);let ze=Fe.get(Ne);if(ze!==void 0){if(Q.currentProgram===ze&&Q.lightsStateVersion===Le)return Qd(T,Re),ze}else Re.uniforms=Me.getUniforms(T),T.onBeforeCompile(Re,y),ze=Me.acquireProgram(Re,Ne),Fe.set(Ne,ze),Q.uniforms=Re.uniforms;const ke=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(ke.clippingPlanes=Ie.uniform),Qd(T,Re),Q.needsLights=e_(T),Q.lightsStateVersion=Le,Q.needsLights&&(ke.ambientLightColor.value=Y.state.ambient,ke.lightProbe.value=Y.state.probe,ke.directionalLights.value=Y.state.directional,ke.directionalLightShadows.value=Y.state.directionalShadow,ke.spotLights.value=Y.state.spot,ke.spotLightShadows.value=Y.state.spotShadow,ke.rectAreaLights.value=Y.state.rectArea,ke.ltc_1.value=Y.state.rectAreaLTC1,ke.ltc_2.value=Y.state.rectAreaLTC2,ke.pointLights.value=Y.state.point,ke.pointLightShadows.value=Y.state.pointShadow,ke.hemisphereLights.value=Y.state.hemi,ke.directionalShadowMap.value=Y.state.directionalShadowMap,ke.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,ke.spotShadowMap.value=Y.state.spotShadowMap,ke.spotLightMatrix.value=Y.state.spotLightMatrix,ke.spotLightMap.value=Y.state.spotLightMap,ke.pointShadowMap.value=Y.state.pointShadowMap,ke.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=ze,Q.uniformsList=null,ze}function Jd(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ol.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Qd(T,H){const ne=b.get(T);ne.outputColorSpace=H.outputColorSpace,ne.batching=H.batching,ne.batchingColor=H.batchingColor,ne.instancing=H.instancing,ne.instancingColor=H.instancingColor,ne.instancingMorph=H.instancingMorph,ne.skinning=H.skinning,ne.morphTargets=H.morphTargets,ne.morphNormals=H.morphNormals,ne.morphColors=H.morphColors,ne.morphTargetsCount=H.morphTargetsCount,ne.numClippingPlanes=H.numClippingPlanes,ne.numIntersection=H.numClipIntersection,ne.vertexAlphas=H.vertexAlphas,ne.vertexTangents=H.vertexTangents,ne.toneMapping=H.toneMapping}function J1(T,H,ne,Q,Y){H.isScene!==!0&&(H=W),N.resetTextureUnits();const Te=H.fog,Le=Q.isMeshStandardMaterial?H.environment:null,Re=k===null?y.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ys,Ne=(Q.isMeshStandardMaterial?te:j).get(Q.envMap||Le),Fe=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,ze=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!ne.morphAttributes.position,tt=!!ne.morphAttributes.normal,_t=!!ne.morphAttributes.color;let Nt=vi;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Nt=y.toneMapping);const Ut=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,bt=Ut!==void 0?Ut.length:0,Ve=b.get(Q),mt=A.state.lights;if(ae===!0&&(we===!0||T!==X)){const on=T===X&&Q.id===z;Ie.setState(Q,T,on)}let ct=!1;Q.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==mt.state.version||Ve.outputColorSpace!==Re||Y.isBatchedMesh&&Ve.batching===!1||!Y.isBatchedMesh&&Ve.batching===!0||Y.isBatchedMesh&&Ve.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ve.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ve.instancing===!1||!Y.isInstancedMesh&&Ve.instancing===!0||Y.isSkinnedMesh&&Ve.skinning===!1||!Y.isSkinnedMesh&&Ve.skinning===!0||Y.isInstancedMesh&&Ve.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ve.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ve.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ve.instancingMorph===!1&&Y.morphTexture!==null||Ve.envMap!==Ne||Q.fog===!0&&Ve.fog!==Te||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ie.numPlanes||Ve.numIntersection!==Ie.numIntersection)||Ve.vertexAlphas!==Fe||Ve.vertexTangents!==ze||Ve.morphTargets!==ke||Ve.morphNormals!==tt||Ve.morphColors!==_t||Ve.toneMapping!==Nt||Ve.morphTargetsCount!==bt)&&(ct=!0):(ct=!0,Ve.__version=Q.version);let Sn=Ve.currentProgram;ct===!0&&(Sn=po(Q,H,Y));let is=!1,En=!1,la=!1;const Tt=Sn.getUniforms(),mn=Ve.uniforms;if(K.useProgram(Sn.program)&&(is=!0,En=!0,la=!0),Q.id!==z&&(z=Q.id,En=!0),is||X!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Tt.setValue(C,"projectionMatrix",T.projectionMatrix),Tt.setValue(C,"viewMatrix",T.matrixWorldInverse);const gn=Tt.map.cameraPosition;gn!==void 0&&gn.setValue(C,R.setFromMatrixPosition(T.matrixWorld)),ue.logarithmicDepthBuffer&&Tt.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Tt.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,En=!0,la=!0)}if(Ve.needsLights&&(mt.state.directionalShadowMap.length>0&&Tt.setValue(C,"directionalShadowMap",mt.state.directionalShadowMap,N),mt.state.spotShadowMap.length>0&&Tt.setValue(C,"spotShadowMap",mt.state.spotShadowMap,N),mt.state.pointShadowMap.length>0&&Tt.setValue(C,"pointShadowMap",mt.state.pointShadowMap,N)),Y.isSkinnedMesh){Tt.setOptional(C,Y,"bindMatrix"),Tt.setOptional(C,Y,"bindMatrixInverse");const on=Y.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Tt.setValue(C,"boneTexture",on.boneTexture,N))}Y.isBatchedMesh&&(Tt.setOptional(C,Y,"batchingTexture"),Tt.setValue(C,"batchingTexture",Y._matricesTexture,N),Tt.setOptional(C,Y,"batchingIdTexture"),Tt.setValue(C,"batchingIdTexture",Y._indirectTexture,N),Tt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Tt.setValue(C,"batchingColorTexture",Y._colorsTexture,N));const In=ne.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Ke.update(Y,ne,Sn),(En||Ve.receiveShadow!==Y.receiveShadow)&&(Ve.receiveShadow=Y.receiveShadow,Tt.setValue(C,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(mn.envMap.value=Ne,mn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&H.environment!==null&&(mn.envMapIntensity.value=H.environmentIntensity),mn.dfgLUT!==void 0&&(mn.dfgLUT.value=QC()),En&&(Tt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&Q1(mn,la),Te&&Q.fog===!0&&Ue.refreshFogUniforms(mn,Te),Ue.refreshMaterialUniforms(mn,Q,Be,Oe,A.state.transmissionRenderTarget[T.id]),ol.upload(C,Jd(Ve),mn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ol.upload(C,Jd(Ve),mn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Tt.setValue(C,"center",Y.center),Tt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),Tt.setValue(C,"normalMatrix",Y.normalMatrix),Tt.setValue(C,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const on=Q.uniformsGroups;for(let gn=0,Ql=on.length;gn<Ql;gn++){const Rr=on[gn];me.update(Rr,Sn),me.bind(Rr,Sn)}}return Sn}function Q1(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function e_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,H,ne){const Q=b.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),b.get(T.texture).__webglTexture=H,b.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,H){const ne=b.get(T);ne.__webglFramebuffer=H,ne.__useDefaultFramebuffer=H===void 0};const t_=C.createFramebuffer();this.setRenderTarget=function(T,H=0,ne=0){k=T,L=H,U=ne;let Q=null,Y=!1,Te=!1;if(T){const Re=b.get(T);if(Re.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(C.FRAMEBUFFER,Re.__webglFramebuffer),B.copy(T.viewport),G.copy(T.scissor),q=T.scissorTest,K.viewport(B),K.scissor(G),K.setScissorTest(q),z=-1;return}else if(Re.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Re.__hasExternalTextures)N.rebindTextures(T,b.get(T.texture).__webglTexture,b.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(Re.__boundDepthTexture!==ze){if(ze!==null&&b.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Fe=b.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?Q=Fe[H][ne]:Q=Fe[H],Y=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?Q=b.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?Q=Fe[ne]:Q=Fe,B.copy(T.viewport),G.copy(T.scissor),q=T.scissorTest}else B.copy(se).multiplyScalar(Be).floor(),G.copy(F).multiplyScalar(Be).floor(),q=re;if(ne!==0&&(Q=t_),K.bindFramebuffer(C.FRAMEBUFFER,Q)&&K.drawBuffers(T,Q),K.viewport(B),K.scissor(G),K.setScissorTest(q),Y){const Re=b.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+H,Re.__webglTexture,ne)}else if(Te){const Re=H;for(let Ne=0;Ne<T.textures.length;Ne++){const Fe=b.get(T.textures[Ne]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,ne,Re)}}else if(T!==null&&ne!==0){const Re=b.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Re.__webglTexture,ne)}z=-1},this.readRenderTargetPixels=function(T,H,ne,Q,Y,Te,Le,Re=0){if(!(T&&T.isWebGLRenderTarget)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne){K.bindFramebuffer(C.FRAMEBUFFER,Ne);try{const Fe=T.textures[Re],ze=Fe.format,ke=Fe.type;if(!ue.textureFormatReadable(ze)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(ke)){ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Q&&ne>=0&&ne<=T.height-Y&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),C.readPixels(H,ne,Q,Y,be.convert(ze),be.convert(ke),Te))}finally{const Fe=k!==null?b.get(k).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,H,ne,Q,Y,Te,Le,Re=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=b.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Le!==void 0&&(Ne=Ne[Le]),Ne)if(H>=0&&H<=T.width-Q&&ne>=0&&ne<=T.height-Y){K.bindFramebuffer(C.FRAMEBUFFER,Ne);const Fe=T.textures[Re],ze=Fe.format,ke=Fe.type;if(!ue.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,tt),C.bufferData(C.PIXEL_PACK_BUFFER,Te.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Re),C.readPixels(H,ne,Q,Y,be.convert(ze),be.convert(ke),0);const _t=k!==null?b.get(k).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,_t);const Nt=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await pT(C,Nt,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,tt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Te),C.deleteBuffer(tt),C.deleteSync(Nt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,H=null,ne=0){const Q=Math.pow(2,-ne),Y=Math.floor(T.image.width*Q),Te=Math.floor(T.image.height*Q),Le=H!==null?H.x:0,Re=H!==null?H.y:0;N.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,Le,Re,Y,Te),K.unbindTexture()};const n_=C.createFramebuffer(),i_=C.createFramebuffer();this.copyTextureToTexture=function(T,H,ne=null,Q=null,Y=0,Te=null){Te===null&&(Y!==0?(Wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let Le,Re,Ne,Fe,ze,ke,tt,_t,Nt;const Ut=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(ne!==null)Le=ne.max.x-ne.min.x,Re=ne.max.y-ne.min.y,Ne=ne.isBox3?ne.max.z-ne.min.z:1,Fe=ne.min.x,ze=ne.min.y,ke=ne.isBox3?ne.min.z:0;else{const In=Math.pow(2,-Y);Le=Math.floor(Ut.width*In),Re=Math.floor(Ut.height*In),T.isDataArrayTexture?Ne=Ut.depth:T.isData3DTexture?Ne=Math.floor(Ut.depth*In):Ne=1,Fe=0,ze=0,ke=0}Q!==null?(tt=Q.x,_t=Q.y,Nt=Q.z):(tt=0,_t=0,Nt=0);const bt=be.convert(H.format),Ve=be.convert(H.type);let mt;H.isData3DTexture?(N.setTexture3D(H,0),mt=C.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(N.setTexture2DArray(H,0),mt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(H,0),mt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,H.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,H.unpackAlignment);const ct=C.getParameter(C.UNPACK_ROW_LENGTH),Sn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),is=C.getParameter(C.UNPACK_SKIP_PIXELS),En=C.getParameter(C.UNPACK_SKIP_ROWS),la=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Ut.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ut.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,ze),C.pixelStorei(C.UNPACK_SKIP_IMAGES,ke);const Tt=T.isDataArrayTexture||T.isData3DTexture,mn=H.isDataArrayTexture||H.isData3DTexture;if(T.isDepthTexture){const In=b.get(T),on=b.get(H),gn=b.get(In.__renderTarget),Ql=b.get(on.__renderTarget);K.bindFramebuffer(C.READ_FRAMEBUFFER,gn.__webglFramebuffer),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ql.__webglFramebuffer);for(let Rr=0;Rr<Ne;Rr++)Tt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(T).__webglTexture,Y,ke+Rr),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,b.get(H).__webglTexture,Te,Nt+Rr)),C.blitFramebuffer(Fe,ze,Le,Re,tt,_t,Le,Re,C.DEPTH_BUFFER_BIT,C.NEAREST);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||b.has(T)){const In=b.get(T),on=b.get(H);K.bindFramebuffer(C.READ_FRAMEBUFFER,n_),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,i_);for(let gn=0;gn<Ne;gn++)Tt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,In.__webglTexture,Y,ke+gn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,In.__webglTexture,Y),mn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,on.__webglTexture,Te,Nt+gn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,on.__webglTexture,Te),Y!==0?C.blitFramebuffer(Fe,ze,Le,Re,tt,_t,Le,Re,C.COLOR_BUFFER_BIT,C.NEAREST):mn?C.copyTexSubImage3D(mt,Te,tt,_t,Nt+gn,Fe,ze,Le,Re):C.copyTexSubImage2D(mt,Te,tt,_t,Fe,ze,Le,Re);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else mn?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(mt,Te,tt,_t,Nt,Le,Re,Ne,bt,Ve,Ut.data):H.isCompressedArrayTexture?C.compressedTexSubImage3D(mt,Te,tt,_t,Nt,Le,Re,Ne,bt,Ut.data):C.texSubImage3D(mt,Te,tt,_t,Nt,Le,Re,Ne,bt,Ve,Ut):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Te,tt,_t,Le,Re,bt,Ve,Ut.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Te,tt,_t,Ut.width,Ut.height,bt,Ut.data):C.texSubImage2D(C.TEXTURE_2D,Te,tt,_t,Le,Re,bt,Ve,Ut);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Sn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,is),C.pixelStorei(C.UNPACK_SKIP_ROWS,En),C.pixelStorei(C.UNPACK_SKIP_IMAGES,la),Te===0&&H.generateMipmaps&&C.generateMipmap(mt),K.unbindTexture()},this.initRenderTarget=function(T){b.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){L=0,U=0,k=null,K.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),n.unpackColorSpace=ot._getUnpackColorSpace()}}const Y1=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},t8={__name:"EarthGlobe",setup(t){const e=qe(null);let n;return vt(()=>{const i=e.value.clientWidth||600,r=e.value.clientHeight||400,s=new kT;s.background=new st(2068);const a=new Vn(45,i/r,.1,1e3);a.position.z=2.5;const o=new e8({alpha:!0,antialias:!0});o.setSize(i,r),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0,o.toneMapping=Id,o.toneMappingExposure=.5,e.value.appendChild(o.domElement);const l=new Gn,u=[],c=[];for(let O=0;O<5e3;O++){const y=(Math.random()-.5)*2e3,M=(Math.random()-.5)*2e3,L=(Math.random()-.5)*2e3;u.push(y,M,L);const U=new st,k=Math.random();k>.8?U.setHSL(.6,.2,Math.random()*.5+.5):k>.5?U.setHSL(.1,.1,Math.random()*.5+.5):U.setHSL(0,0,Math.random()*.5+.5),c.push(U.r,U.g,U.b)}l.setAttribute("position",new _n(u,3)),l.setAttribute("color",new _n(c,3));const f=new z1({size:1.5,vertexColors:!0,transparent:!0,opacity:.8,blending:bl}),d=new WT(l,f);s.add(d);const h=new El(.9,64,64),v=new QT().load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),_=new qT({map:v,emissive:4491519,emissiveIntensity:.35,roughness:.8}),g=new ri(h,_);s.add(g);const m=new El(1.05,64,64),E=new si({vertexShader:`
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
    `,blending:bl,side:pn,transparent:!0,depthWrite:!1}),x=new ri(m,E);g.add(x);const S=new iA(4210752,1.5);s.add(S);const A=new nA(16777215,1.5);A.position.set(5,3,5),A.castShadow=!0,s.add(A);const P=()=>{n=requestAnimationFrame(P),g.rotation.y+=.01,d.rotation.y+=2e-4,o.render(s,a)};P();const D=()=>{const O=e.value.clientWidth,y=e.value.clientHeight;a.aspect=O/y,a.updateProjectionMatrix(),o.setSize(O,y)};window.addEventListener("resize",D),Ji(()=>{cancelAnimationFrame(n),window.removeEventListener("resize",D),e.value&&o.domElement&&e.value.removeChild(o.domElement)})}),(i,r)=>(Kf(),j2("div",{ref_key:"mountPoint",ref:e,class:"earth-globe"},null,512))}},n8=Y1(t8,[["__scopeId","data-v-deb8df03"]]),i8=xe({__name:"Blog",setup(t){return(e,n)=>{const i=Pt("BingHeroBackground");return Kf(),z0(Jn(o1),null,{heroInfo:c0(r=>[gh(" 1. 地球底层 "),Lt(n8,{class:"hero-earth"}),gh(" 2. 原来的标语/背景 "),Lt(i),Lt(Jn(N4),p_(W0(r)),null,16)]),_:1})}}}),r8=Y1(i8,[["__scopeId","data-v-bad2b6ed"]]),s8=ai({layouts:{Blog:r8}}),a8=Object.freeze(Object.defineProperty({__proto__:null,default:s8},Symbol.toStringTag,{value:"Module"})),Zo=[Ny,Uy,Fy,By,Vy,Xy,mS,gS,vS,ES,wS,LS,US,YS,ZS,rE,fE,vE,EE,w4,P4,I4,a8].map(t=>t.default).filter(Boolean),o8=JSON.parse('{"base":"/myblog/","lang":"zh-CN","title":"superxuan的个人博客","description":"superxuan05的个人博客","head":[],"locales":{}}');var Ts=Ye(o8),l8=Fx,c8=()=>{const t=sb({history:l8(Qf("/myblog/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,n,i)=>i||(e.hash?{el:e.hash}:{top:0})});return t.beforeResolve(async(e,n)=>{if(e.path!==n.path||n===Ui){const i=zn(e.fullPath);if(i.path!==e.fullPath)return i.path;const r=await i.loader();e.meta={...i.meta,_pageChunk:r}}else e.path===n.path&&(e.meta=n.meta)}),t},u8=t=>{t.component("ClientOnly",id),t.component("Content",Sg),t.component("RouteLink",Gt)},f8=(t,e,n)=>{const i=$(()=>e.currentRoute.value.path),r=r0((g,m)=>({get(){return g(),e.currentRoute.value.meta._pageChunk},set(E){e.currentRoute.value.meta._pageChunk=E,m()}})),s=$(()=>Lr.resolveLayouts(n)),a=$(()=>Lr.resolveRouteLocale(Ts.value.locales,i.value)),o=$(()=>Lr.resolveSiteLocaleData(Ts.value,a.value)),l=$(()=>r.value.comp),u=$(()=>r.value.data),c=$(()=>u.value.frontmatter),f=$(()=>Lr.resolvePageHeadTitle(u.value,o.value)),d=$(()=>Lr.resolvePageHead(f.value,c.value,o.value)),h=$(()=>Lr.resolvePageLang(u.value,o.value)),v=$(()=>Lr.resolvePageLayout(u.value,s.value)),_={layouts:s,pageData:u,pageComponent:l,pageFrontmatter:c,pageHead:d,pageHeadTitle:f,pageLang:h,pageLayout:v,redirects:Mu,routeLocale:a,routePath:i,routes:Ns,siteData:Ts,siteLocaleData:o,frontmatter:c,head:d,headTitle:f,lang:h,page:u,site:Ts,siteLocale:o};return t.provide(nd,_),Object.defineProperties(t.config.globalProperties,{$pageFrontmatter:{get:()=>c.value},$pageHead:{get:()=>d.value},$pageHeadTitle:{get:()=>f.value},$pageLang:{get:()=>h.value},$pageData:{get:()=>u.value},$routeLocale:{get:()=>a.value},$withBase:{get:()=>yt},$frontmatter:{get:()=>c.value},$head:{get:()=>d.value},$headTitle:{get:()=>f.value},$lang:{get:()=>h.value},$page:{get:()=>u.value},$site:{get:()=>Ts.value},$siteLocale:{get:()=>o.value}}),_},d8=([t,e,n=""])=>{const i=Object.entries(e).map(([o,l])=>xt(l)?`[${o}=${JSON.stringify(l)}]`:l?`[${o}]`:"").join(""),r=`head > ${t}${i}`;return Array.from(document.querySelectorAll(r)).find(o=>o.innerText===n)??null},h8=([t,e,n])=>{if(!xt(t))return null;const i=document.createElement(t);return Tr(e)&&Object.entries(e).forEach(([r,s])=>{xt(s)?i.setAttribute(r,s):s&&i.setAttribute(r,"")}),xt(n)&&i.appendChild(document.createTextNode(n)),i},p8=()=>{const t=lb(),e=_g();let n=[];const i=()=>{t.value.forEach(a=>{const o=d8(a);o&&n.push(o)})},r=()=>{const a=[];return t.value.forEach(o=>{const l=h8(o);l&&a.push(l)}),a},s=()=>{document.documentElement.lang=e.value;const a=r();n.forEach((o,l)=>{const u=a.findIndex(c=>o.isEqualNode(c));u===-1?(o.remove(),delete n[l]):a.splice(u,1)}),a.forEach(o=>document.head.appendChild(o)),n=[...n.filter(o=>!!o),...a]};Qn(db,s),vt(()=>{i(),Dt(t,s,{immediate:!1})})},m8=F3,g8=async()=>{const t=m8({name:"Vuepress",setup(){p8();for(const r of Zo)r.setup?.();const n=Zo.flatMap(({rootComponents:r=[]})=>r.map(s=>p(s))),i=cb();return()=>[p(i.value),n]}}),e=c8();u8(t),f8(t,e,Zo);for(const n of Zo)await n.enhance?.({app:t,router:e,siteData:Ts});return t.use(e),{app:t,router:e}};g8().then(({app:t,router:e})=>{e.isReady().then(()=>{t.mount("#app")})});export{dn as F,Y1 as _,G0 as a,$0 as b,j2 as c,g8 as createVueApp,Lt as d,gh as e,_8 as f,W0 as g,v8 as h,xe as i,qe as j,p as k,p_ as n,Kf as o,Pt as r,v_ as t,Jn as u,c0 as w};
