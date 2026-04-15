/**
* @vue/shared v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ff(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Tt={},vs=[],di=()=>{},Zp=()=>!1,Ra=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),df=t=>t.startsWith("onUpdate:"),Wt=Object.assign,hf=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},u_=Object.prototype.hasOwnProperty,dt=(t,e)=>u_.call(t,e),ze=Array.isArray,_s=t=>ol(t)==="[object Map]",Jp=t=>ol(t)==="[object Set]",We=t=>typeof t=="function",Bt=t=>typeof t=="string",_r=t=>typeof t=="symbol",yt=t=>t!==null&&typeof t=="object",Qp=t=>(yt(t)||We(t))&&We(t.then)&&We(t.catch),em=Object.prototype.toString,ol=t=>em.call(t),f_=t=>ol(t).slice(8,-1),tm=t=>ol(t)==="[object Object]",ll=t=>Bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=ff(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cl=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},d_=/-\w/g,_n=cl(t=>t.replace(d_,e=>e.slice(1).toUpperCase())),h_=/\B([A-Z])/g,jr=cl(t=>t.replace(h_,"-$1").toLowerCase()),Pa=cl(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ol=cl(t=>t?`on${Pa(t)}`:""),hr=(t,e)=>!Object.is(t,e),Bl=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},nm=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},p_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},m_=t=>{const e=Bt(t)?Number(t):NaN;return isNaN(e)?t:e};let wd;const ul=()=>wd||(wd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fl(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Bt(i)?x_(i):fl(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Bt(t)||yt(t))return t}const g_=/;(?![^(]*\))/g,v_=/:([^]+)/,__=/\/\*[^]*?\*\//g;function x_(t){const e={};return t.replace(__,"").split(g_).forEach(n=>{if(n){const i=n.split(v_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function dl(t){let e="";if(Bt(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=dl(t[n]);i&&(e+=i+" ")}else if(yt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function y_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Bt(e)&&(t.class=dl(e)),n&&(t.style=fl(n)),t}const S_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",b_=ff(S_);function im(t){return!!t||t===""}const rm=t=>!!(t&&t.__v_isRef===!0),E_=t=>Bt(t)?t:t==null?"":ze(t)||yt(t)&&(t.toString===em||!We(t.toString))?rm(t)?E_(t.value):JSON.stringify(t,sm,2):String(t),sm=(t,e)=>rm(e)?sm(t,e.value):_s(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[kl(i,s)+" =>"]=r,n),{})}:Jp(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>kl(n))}:_r(e)?kl(e):yt(e)&&!ze(e)&&!tm(e)?String(e):e,kl=(t,e="")=>{var n;return _r(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let tn;class M_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=tn;try{return tn=this,e()}finally{tn=n}}}on(){++this._on===1&&(this.prevScope=tn,tn=this)}off(){this._on>0&&--this._on===0&&(tn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function pf(){return tn}function T_(t,e=!1){tn&&tn.cleanups.push(t)}let Mt;const Vl=new WeakSet;class am{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,tn&&tn.active&&tn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Vl.has(this)&&(Vl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||lm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Cd(this),cm(this);const e=Mt,n=qn;Mt=this,qn=!0;try{return this.fn()}finally{um(this),Mt=e,qn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)vf(e);this.deps=this.depsTail=void 0,Cd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Vl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){zc(this)&&this.run()}get dirty(){return zc(this)}}let om=0,ua,fa;function lm(t,e=!1){if(t.flags|=8,e){t.next=fa,fa=t;return}t.next=ua,ua=t}function mf(){om++}function gf(){if(--om>0)return;if(fa){let e=fa;for(fa=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ua;){let e=ua;for(ua=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function cm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function um(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),vf(i),A_(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function zc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===va)||(t.globalVersion=va,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!zc(t))))return;t.flags|=2;const e=t.dep,n=Mt,i=qn;Mt=t,qn=!0;try{cm(t);const r=t.fn(t._value);(e.version===0||hr(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Mt=n,qn=i,um(t),t.flags&=-3}}function vf(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)vf(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function A_(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let qn=!0;const dm=[];function ki(){dm.push(qn),qn=!1}function Vi(){const t=dm.pop();qn=t===void 0?!0:t}function Cd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Mt;Mt=void 0;try{e()}finally{Mt=n}}}let va=0;class w_{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Mt||!qn||Mt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Mt)n=this.activeLink=new w_(Mt,this),Mt.deps?(n.prevDep=Mt.depsTail,Mt.depsTail.nextDep=n,Mt.depsTail=n):Mt.deps=Mt.depsTail=n,hm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=Mt.depsTail,n.nextDep=void 0,Mt.depsTail.nextDep=n,Mt.depsTail=n,Mt.deps===n&&(Mt.deps=i)}return n}trigger(e){this.version++,va++,this.notify(e)}notify(e){mf();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{gf()}}}function hm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)hm(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Wo=new WeakMap,Hr=Symbol(""),Gc=Symbol(""),_a=Symbol("");function nn(t,e,n){if(qn&&Mt){let i=Wo.get(t);i||Wo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new hl),r.map=i,r.key=n),r.track()}}function Ni(t,e,n,i,r,s){const a=Wo.get(t);if(!a){va++;return}const o=l=>{l&&l.trigger()};if(mf(),e==="clear")a.forEach(o);else{const l=ze(t),c=l&&ll(n);if(l&&n==="length"){const u=Number(i);a.forEach((f,d)=>{(d==="length"||d===_a||!_r(d)&&d>=u)&&o(f)})}else switch((n!==void 0||a.has(void 0))&&o(a.get(n)),c&&o(a.get(_a)),e){case"add":l?c&&o(a.get("length")):(o(a.get(Hr)),_s(t)&&o(a.get(Gc)));break;case"delete":l||(o(a.get(Hr)),_s(t)&&o(a.get(Gc)));break;case"set":_s(t)&&o(a.get(Hr));break}}gf()}function C_(t,e){const n=Wo.get(t);return n&&n.get(e)}function Kr(t){const e=nt(t);return e===t?e:(nn(e,"iterate",_a),Cn(t)?e:e.map(Zn))}function pl(t){return nn(t=nt(t),"iterate",_a),t}function ar(t,e){return Hi(t)?pr(t)?ws(Zn(e)):ws(e):Zn(e)}const R_={__proto__:null,[Symbol.iterator](){return Hl(this,Symbol.iterator,t=>ar(this,t))},concat(...t){return Kr(this).concat(...t.map(e=>ze(e)?Kr(e):e))},entries(){return Hl(this,"entries",t=>(t[1]=ar(this,t[1]),t))},every(t,e){return Ei(this,"every",t,e,void 0,arguments)},filter(t,e){return Ei(this,"filter",t,e,n=>n.map(i=>ar(this,i)),arguments)},find(t,e){return Ei(this,"find",t,e,n=>ar(this,n),arguments)},findIndex(t,e){return Ei(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ei(this,"findLast",t,e,n=>ar(this,n),arguments)},findLastIndex(t,e){return Ei(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ei(this,"forEach",t,e,void 0,arguments)},includes(...t){return zl(this,"includes",t)},indexOf(...t){return zl(this,"indexOf",t)},join(t){return Kr(this).join(t)},lastIndexOf(...t){return zl(this,"lastIndexOf",t)},map(t,e){return Ei(this,"map",t,e,void 0,arguments)},pop(){return Zs(this,"pop")},push(...t){return Zs(this,"push",t)},reduce(t,...e){return Rd(this,"reduce",t,e)},reduceRight(t,...e){return Rd(this,"reduceRight",t,e)},shift(){return Zs(this,"shift")},some(t,e){return Ei(this,"some",t,e,void 0,arguments)},splice(...t){return Zs(this,"splice",t)},toReversed(){return Kr(this).toReversed()},toSorted(t){return Kr(this).toSorted(t)},toSpliced(...t){return Kr(this).toSpliced(...t)},unshift(...t){return Zs(this,"unshift",t)},values(){return Hl(this,"values",t=>ar(this,t))}};function Hl(t,e,n){const i=pl(t),r=i[e]();return i!==t&&!Cn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const P_=Array.prototype;function Ei(t,e,n,i,r,s){const a=pl(t),o=a!==t&&!Cn(t),l=a[e];if(l!==P_[e]){const f=l.apply(t,s);return o?Zn(f):f}let c=n;a!==t&&(o?c=function(f,d){return n.call(this,ar(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Rd(t,e,n,i){const r=pl(t);let s=n;return r!==t&&(Cn(t)?n.length>3&&(s=function(a,o,l){return n.call(this,a,o,l,t)}):s=function(a,o,l){return n.call(this,a,ar(t,o),l,t)}),r[e](s,...i)}function zl(t,e,n){const i=nt(t);nn(i,"iterate",_a);const r=i[e](...n);return(r===-1||r===!1)&&vl(n[0])?(n[0]=nt(n[0]),i[e](...n)):r}function Zs(t,e,n=[]){ki(),mf();const i=nt(t)[e].apply(t,n);return gf(),Vi(),i}const L_=ff("__proto__,__v_isRef,__isVue"),pm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(_r));function D_(t){_r(t)||(t=String(t));const e=nt(this);return nn(e,"has",t),e.hasOwnProperty(t)}class mm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Sm:ym:s?xm:_m).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=ze(e);if(!r){let l;if(a&&(l=R_[n]))return l;if(n==="hasOwnProperty")return D_}const o=Reflect.get(e,n,kt(e)?e:i);if((_r(n)?pm.has(n):L_(n))||(r||nn(e,"get",n),s))return o;if(kt(o)){const l=a&&ll(n)?o:o.value;return r&&yt(l)?gi(l):l}return yt(o)?r?gi(o):Wr(o):o}}class gm extends mm{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const a=ze(e)&&ll(n);if(!this._isShallow){const c=Hi(s);if(!Cn(i)&&!Hi(i)&&(s=nt(s),i=nt(i)),!a&&kt(s)&&!kt(i))return c||(s.value=i),!0}const o=a?Number(n)<e.length:dt(e,n),l=Reflect.set(e,n,i,kt(e)?e:r);return e===nt(r)&&(o?hr(i,s)&&Ni(e,"set",n,i):Ni(e,"add",n,i)),l}deleteProperty(e,n){const i=dt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Ni(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!_r(n)||!pm.has(n))&&nn(e,"has",n),i}ownKeys(e){return nn(e,"iterate",ze(e)?"length":Hr),Reflect.ownKeys(e)}}class vm extends mm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const I_=new gm,N_=new vm,U_=new gm(!0),F_=new vm(!0),Wc=t=>t,Ka=t=>Reflect.getPrototypeOf(t);function O_(t,e,n){return function(...i){const r=this.__v_raw,s=nt(r),a=_s(s),o=t==="entries"||t===Symbol.iterator&&a,l=t==="keys"&&a,c=r[t](...i),u=n?Wc:e?ws:Zn;return!e&&nn(s,"iterate",l?Gc:Hr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:o?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function Za(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function B_(t,e){const n={get(r){const s=this.__v_raw,a=nt(s),o=nt(r);t||(hr(r,o)&&nn(a,"get",r),nn(a,"get",o));const{has:l}=Ka(a),c=e?Wc:t?ws:Zn;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!t&&nn(nt(r),"iterate",Hr),r.size},has(r){const s=this.__v_raw,a=nt(s),o=nt(r);return t||(hr(r,o)&&nn(a,"has",r),nn(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=nt(o),c=e?Wc:t?ws:Zn;return!t&&nn(l,"iterate",Hr),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return Wt(n,t?{add:Za("add"),set:Za("set"),delete:Za("delete"),clear:Za("clear")}:{add(r){!e&&!Cn(r)&&!Hi(r)&&(r=nt(r));const s=nt(this);return Ka(s).has.call(s,r)||(s.add(r),Ni(s,"add",r,r)),this},set(r,s){!e&&!Cn(s)&&!Hi(s)&&(s=nt(s));const a=nt(this),{has:o,get:l}=Ka(a);let c=o.call(a,r);c||(r=nt(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?hr(s,u)&&Ni(a,"set",r,s):Ni(a,"add",r,s),this},delete(r){const s=nt(this),{has:a,get:o}=Ka(s);let l=a.call(s,r);l||(r=nt(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Ni(s,"delete",r,void 0),c},clear(){const r=nt(this),s=r.size!==0,a=r.clear();return s&&Ni(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=O_(r,t,e)}),n}function ml(t,e){const n=B_(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(dt(n,r)&&r in i?n:i,r,s)}const k_={get:ml(!1,!1)},V_={get:ml(!1,!0)},H_={get:ml(!0,!1)},z_={get:ml(!0,!0)},_m=new WeakMap,xm=new WeakMap,ym=new WeakMap,Sm=new WeakMap;function G_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function W_(t){return t.__v_skip||!Object.isExtensible(t)?0:G_(f_(t))}function Wr(t){return Hi(t)?t:gl(t,!1,I_,k_,_m)}function bm(t){return gl(t,!1,U_,V_,xm)}function gi(t){return gl(t,!0,N_,H_,ym)}function $_(t){return gl(t,!0,F_,z_,Sm)}function gl(t,e,n,i,r){if(!yt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=W_(t);if(s===0)return t;const a=r.get(t);if(a)return a;const o=new Proxy(t,s===2?i:n);return r.set(t,o),o}function pr(t){return Hi(t)?pr(t.__v_raw):!!(t&&t.__v_isReactive)}function Hi(t){return!!(t&&t.__v_isReadonly)}function Cn(t){return!!(t&&t.__v_isShallow)}function vl(t){return t?!!t.__v_raw:!1}function nt(t){const e=t&&t.__v_raw;return e?nt(e):t}function X_(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&nm(t,"__v_skip",!0),t}const Zn=t=>yt(t)?Wr(t):t,ws=t=>yt(t)?gi(t):t;function kt(t){return t?t.__v_isRef===!0:!1}function et(t){return Em(t,!1)}function Je(t){return Em(t,!0)}function Em(t,e){return kt(t)?t:new j_(t,e)}class j_{constructor(e,n){this.dep=new hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:nt(e),this._value=n?e:Zn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||Cn(e)||Hi(e);e=i?e:nt(e),hr(e,n)&&(this._rawValue=e,this._value=i?e:Zn(e),this.dep.trigger())}}function Yn(t){return kt(t)?t.value:t}function it(t){return We(t)?t():Yn(t)}const q_={get:(t,e,n)=>e==="__v_raw"?t:Yn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return kt(r)&&!kt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Mm(t){return pr(t)?t:new Proxy(t,q_)}class Y_{constructor(e){this.__v_isRef=!0,this._value=void 0;const n=this.dep=new hl,{get:i,set:r}=e(n.track.bind(n),n.trigger.bind(n));this._get=i,this._set=r}get value(){return this._value=this._get()}set value(e){this._set(e)}}function Tm(t){return new Y_(t)}class K_{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=nt(e);let r=!0,s=e;if(!ze(e)||!ll(String(n)))do r=!vl(s)||Cn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Yn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&kt(this._raw[this._key])){const n=this._object[this._key];if(kt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return C_(this._raw,this._key)}}class Z_{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function Bs(t,e,n){return kt(t)?t:We(t)?new Z_(t):yt(t)&&arguments.length>1?J_(t,e,n):et(t)}function J_(t,e,n){return new K_(t,e,n)}class Q_{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=va-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Mt!==this)return lm(this,!0),!0}get value(){const e=this.dep.track();return fm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ex(t,e,n=!1){let i,r;return We(t)?i=t:(i=t.get,r=t.set),new Q_(i,r,n)}const Ja={},$o=new WeakMap;let Dr;function tx(t,e=!1,n=Dr){if(n){let i=$o.get(n);i||$o.set(n,i=[]),i.push(t)}}function nx(t,e,n=Tt){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=n,c=b=>r?b:Cn(b)||r===!1||r===0?ur(b,1):ur(b);let u,f,d,h,v=!1,_=!1;if(kt(t)?(f=()=>t.value,v=Cn(t)):pr(t)?(f=()=>c(t),v=!0):ze(t)?(_=!0,v=t.some(b=>pr(b)||Cn(b)),f=()=>t.map(b=>{if(kt(b))return b.value;if(pr(b))return c(b);if(We(b))return l?l(b,2):b()})):We(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){ki();try{d()}finally{Vi()}}const b=Dr;Dr=u;try{return l?l(t,3,[h]):t(h)}finally{Dr=b}}:f=di,e&&r){const b=f,w=r===!0?1/0:r;f=()=>ur(b(),w)}const g=pf(),m=()=>{u.stop(),g&&g.active&&hf(g.effects,u)};if(s&&e){const b=e;e=(...w)=>{b(...w),m()}}let E=_?new Array(t.length).fill(Ja):Ja;const y=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const w=u.run();if(r||v||(_?w.some((P,L)=>hr(P,E[L])):hr(w,E))){d&&d();const P=Dr;Dr=u;try{const L=[w,E===Ja?void 0:_&&E[0]===Ja?[]:E,h];E=w,l?l(e,3,L):e(...L)}finally{Dr=P}}}else u.run()};return o&&o(y),u=new am(f),u.scheduler=a?()=>a(y,!1):y,h=b=>tx(b,!1,u),d=u.onStop=()=>{const b=$o.get(u);if(b){if(l)l(b,4);else for(const w of b)w();$o.delete(u)}},e?i?y(!0):E=u.run():a?a(y.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function ur(t,e=1/0,n){if(e<=0||!yt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,kt(t))ur(t.value,e,n);else if(ze(t))for(let i=0;i<t.length;i++)ur(t[i],e,n);else if(Jp(t)||_s(t))t.forEach(i=>{ur(i,e,n)});else if(tm(t)){for(const i in t)ur(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ur(t[i],e,n)}return t}/**
* @vue/runtime-core v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function La(t,e,n,i){try{return i?t(...i):t()}catch(r){Da(r,e,n)}}function Jn(t,e,n,i){if(We(t)){const r=La(t,e,n,i);return r&&Qp(r)&&r.catch(s=>{Da(s,e,n)}),r}if(ze(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Jn(t[s],e,n,i));return r}}function Da(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Tt;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}o=o.parent}if(s){ki(),La(s,null,10,[t,l,c]),Vi();return}}ix(t,n,r,i,a)}function ix(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const un=[];let oi=-1;const ys=[];let or=null,hs=0;const Am=Promise.resolve();let Xo=null;function xi(t){const e=Xo||Am;return t?e.then(this?t.bind(this):t):e}function rx(t){let e=oi+1,n=un.length;for(;e<n;){const i=e+n>>>1,r=un[i],s=xa(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function _f(t){if(!(t.flags&1)){const e=xa(t),n=un[un.length-1];!n||!(t.flags&2)&&e>=xa(n)?un.push(t):un.splice(rx(e),0,t),t.flags|=1,wm()}}function wm(){Xo||(Xo=Am.then(Cm))}function sx(t){ze(t)?ys.push(...t):or&&t.id===-1?or.splice(hs+1,0,t):t.flags&1||(ys.push(t),t.flags|=1),wm()}function Pd(t,e,n=oi+1){for(;n<un.length;n++){const i=un[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;un.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function jo(t){if(ys.length){const e=[...new Set(ys)].sort((n,i)=>xa(n)-xa(i));if(ys.length=0,or){or.push(...e);return}for(or=e,hs=0;hs<or.length;hs++){const n=or[hs];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}or=null,hs=0}}const xa=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Cm(t){try{for(oi=0;oi<un.length;oi++){const e=un[oi];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),La(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;oi<un.length;oi++){const e=un[oi];e&&(e.flags&=-2)}oi=-1,un.length=0,jo(),Xo=null,(un.length||ys.length)&&Cm()}}let Xn=null,Rm=null;function qo(t){const e=Xn;return Xn=t,Rm=t&&t.type.__scopeId||null,e}function Pm(t,e=Xn,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Zo(-1);const s=qo(e);let a;try{a=t(...r)}finally{qo(s),i._d&&Zo(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function li(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(ki(),Jn(l,n,8,[t.el,o,t,e]),Vi())}}function Kn(t,e){if(Yt){let n=Yt.provides;const i=Yt.parent&&Yt.parent.provides;i===n&&(n=Yt.provides=Object.create(i)),n[t]=e}}function wt(t,e,n=!1){const i=qi();if(i||zr){let r=zr?zr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&We(e)?e.call(i&&i.proxy):e}}function Lm(){return!!(qi()||zr)}const ax=Symbol.for("v-scx"),ox=()=>wt(ax);function xf(t,e){return yf(t,null,e)}function Pt(t,e,n){return yf(t,e,n)}function yf(t,e,n=Tt){const{immediate:i,deep:r,flush:s,once:a}=n,o=Wt({},n),l=e&&i||!e&&s!=="post";let c;if(Cs){if(s==="sync"){const h=ox();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=di,h.resume=di,h.pause=di,h}}const u=Yt;o.call=(h,v,_)=>Jn(h,u,v,_);let f=!1;s==="post"?o.scheduler=h=>{Mn(h,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(h,v)=>{v?h():_f(h)}),o.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=nx(t,e,o);return Cs&&(c?c.push(d):l&&d()),d}function lx(t,e,n){const i=this.proxy,r=Bt(t)?t.includes(".")?Dm(i,t):()=>i[t]:t.bind(i,i);let s;We(e)?s=e:(s=e.handler,n=e);const a=Na(this),o=yf(r,s.bind(i),n);return a(),o}function Dm(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const cx=Symbol("_vte"),Im=t=>t.__isTeleport,Ii=Symbol("_leaveCb"),Qa=Symbol("_enterCb");function Nm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ct(()=>{t.isMounted=!0}),Ef(()=>{t.isUnmounting=!0}),t}const Dn=[Function,Array],Um={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Dn,onEnter:Dn,onAfterEnter:Dn,onEnterCancelled:Dn,onBeforeLeave:Dn,onLeave:Dn,onAfterLeave:Dn,onLeaveCancelled:Dn,onBeforeAppear:Dn,onAppear:Dn,onAfterAppear:Dn,onAppearCancelled:Dn},Fm=t=>{const e=t.subTree;return e.component?Fm(e.component):e},ux={name:"BaseTransition",props:Um,setup(t,{slots:e}){const n=qi(),i=Nm();return()=>{const r=e.default&&Sf(e.default(),!0);if(!r||!r.length)return;const s=Om(r),a=nt(t),{mode:o}=a;if(i.isLeaving)return Gl(s);const l=Ld(s);if(!l)return Gl(s);let c=ya(l,a,i,n,f=>c=f);l.type!==qt&&$r(l,c);let u=n.subTree&&Ld(n.subTree);if(u&&u.type!==qt&&!Nr(u,l)&&Fm(n).type!==qt){let f=ya(u,a,i,n);if($r(u,f),o==="out-in"&&l.type!==qt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Gl(s);o==="in-out"&&l.type!==qt?f.delayLeave=(d,h,v)=>{const _=Bm(i,u);_[String(u.key)]=u,d[Ii]=()=>{h(),d[Ii]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{v(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Om(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==qt){e=n;break}}return e}const fx=ux;function Bm(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function ya(t,e,n,i,r){const{appear:s,mode:a,persisted:o=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:v,onLeaveCancelled:_,onBeforeAppear:g,onAppear:m,onAfterAppear:E,onAppearCancelled:y}=e,b=String(t.key),w=Bm(n,t),P=(S,M)=>{S&&Jn(S,i,9,M)},L=(S,M)=>{const I=M[1];P(S,M),ze(S)?S.every(U=>U.length<=1)&&I():S.length<=1&&I()},F={mode:a,persisted:o,beforeEnter(S){let M=l;if(!n.isMounted)if(s)M=g||l;else return;S[Ii]&&S[Ii](!0);const I=w[b];I&&Nr(t,I)&&I.el[Ii]&&I.el[Ii](),P(M,[S])},enter(S){let M=c,I=u,U=f;if(!n.isMounted)if(s)M=m||c,I=E||u,U=y||f;else return;let k=!1;const H=S[Qa]=$=>{k||(k=!0,$?P(U,[S]):P(I,[S]),F.delayedLeave&&F.delayedLeave(),S[Qa]=void 0)};M?L(M,[S,H]):H()},leave(S,M){const I=String(t.key);if(S[Qa]&&S[Qa](!0),n.isUnmounting)return M();P(d,[S]);let U=!1;const k=S[Ii]=H=>{U||(U=!0,M(),H?P(_,[S]):P(v,[S]),S[Ii]=void 0,w[I]===t&&delete w[I])};w[I]=t,h?L(h,[S,k]):k()},clone(S){const M=ya(S,e,n,i,r);return r&&r(M),M}};return F}function Gl(t){if(Ia(t))return t=mr(t),t.children=null,t}function Ld(t){if(!Ia(t))return Im(t.type)&&t.children?Om(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&We(n.default))return n.default()}}function $r(t,e){t.shapeFlag&6&&t.component?(t.transition=e,$r(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Sf(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let a=t[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===fn?(a.patchFlag&128&&r++,i=i.concat(Sf(a.children,e,o))):(e||a.type!==qt)&&i.push(o!=null?mr(a,{key:o}):a)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ye(t,e){return We(t)?Wt({name:t.name},e,{setup:t}):t}function km(){const t=qi();return t?(t.appContext.config.idPrefix||"v")+"-"+t.ids[0]+t.ids[1]++:""}function bf(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Yo=new WeakMap;function Ss(t,e,n,i,r=!1){if(ze(t)){t.forEach((v,_)=>Ss(v,e&&(ze(e)?e[_]:e),n,i,r));return}if(bs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ss(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Cf(i.component):i.el,a=r?null:s,{i:o,r:l}=t,c=e&&e.r,u=o.refs===Tt?o.refs={}:o.refs,f=o.setupState,d=nt(f),h=f===Tt?Zp:v=>dt(d,v);if(c!=null&&c!==l){if(Dd(e),Bt(c))u[c]=null,h(c)&&(f[c]=null);else if(kt(c)){c.value=null;const v=e;v.k&&(u[v.k]=null)}}if(We(l))La(l,o,12,[a,u]);else{const v=Bt(l),_=kt(l);if(v||_){const g=()=>{if(t.f){const m=v?h(l)?f[l]:u[l]:l.value;if(r)ze(m)&&hf(m,s);else if(ze(m))m.includes(s)||m.push(s);else if(v)u[l]=[s],h(l)&&(f[l]=u[l]);else{const E=[s];l.value=E,t.k&&(u[t.k]=E)}}else v?(u[l]=a,h(l)&&(f[l]=a)):_&&(l.value=a,t.k&&(u[t.k]=a))};if(a){const m=()=>{g(),Yo.delete(t)};m.id=-1,Yo.set(t,m),Mn(m,n)}else Dd(t),g()}}}function Dd(t){const e=Yo.get(t);e&&(e.flags|=8,Yo.delete(t))}let Id=!1;const Zr=()=>{Id||(console.error("Hydration completed but contains mismatches."),Id=!0)},dx=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",hx=t=>t.namespaceURI.includes("MathML"),eo=t=>{if(t.nodeType===1){if(dx(t))return"svg";if(hx(t))return"mathml"}},gs=t=>t.nodeType===8;function px(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:a,remove:o,insert:l,createComment:c}}=t,u=(y,b)=>{if(!b.hasChildNodes()){n(null,y,b),jo(),b._vnode=y;return}f(b.firstChild,y,null,null,null),jo(),b._vnode=y},f=(y,b,w,P,L,F=!1)=>{F=F||!!b.dynamicChildren;const S=gs(y)&&y.data==="[",M=()=>_(y,b,w,P,L,S),{type:I,ref:U,shapeFlag:k,patchFlag:H}=b;let $=y.nodeType;b.el=y,H===-2&&(F=!1,b.dynamicChildren=null);let B=null;switch(I){case Gr:$!==3?b.children===""?(l(b.el=r(""),a(y),y),B=y):B=M():(y.data!==b.children&&(Zr(),y.data=b.children),B=s(y));break;case qt:E(y)?(B=s(y),m(b.el=y.content.firstChild,y,w)):$!==8||S?B=M():B=s(y);break;case ha:if(S&&(y=s(y),$=y.nodeType),$===1||$===3){B=y;const W=!b.children.length;for(let j=0;j<b.staticCount;j++)W&&(b.children+=B.nodeType===1?B.outerHTML:B.data),j===b.staticCount-1&&(b.anchor=B),B=s(B);return S?s(B):B}else M();break;case fn:S?B=v(y,b,w,P,L,F):B=M();break;default:if(k&1)($!==1||b.type.toLowerCase()!==y.tagName.toLowerCase())&&!E(y)?B=M():B=d(y,b,w,P,L,F);else if(k&6){b.slotScopeIds=L;const W=a(y);if(S?B=g(y):gs(y)&&y.data==="teleport start"?B=g(y,y.data,"teleport end"):B=s(y),e(b,W,null,w,P,eo(W),F),bs(b)&&!b.type.__asyncResolved){let j;S?(j=Lt(fn),j.anchor=B?B.previousSibling:W.lastChild):j=y.nodeType===3?dg(""):Lt("div"),j.el=y,b.component.subTree=j}}else k&64?$!==8?B=M():B=b.type.hydrate(y,b,w,P,L,F,t,h):k&128&&(B=b.type.hydrate(y,b,w,P,eo(a(y)),L,F,t,f))}return U!=null&&Ss(U,null,P,b),B},d=(y,b,w,P,L,F)=>{F=F||!!b.dynamicChildren;const{type:S,props:M,patchFlag:I,shapeFlag:U,dirs:k,transition:H}=b,$=S==="input"||S==="option";if($||I!==-1){k&&li(b,null,w,"created");let B=!1;if(E(y)){B=tg(null,H)&&w&&w.vnode.props&&w.vnode.props.appear;const j=y.content.firstChild;if(B){const de=j.getAttribute("class");de&&(j.$cls=de),H.beforeEnter(j)}m(j,y,w),b.el=y=j}if(U&16&&!(M&&(M.innerHTML||M.textContent))){let j=h(y.firstChild,b,y,w,P,L,F);for(;j;){to(y,1)||Zr();const de=j;j=j.nextSibling,o(de)}}else if(U&8){let j=b.children;j[0]===`
`&&(y.tagName==="PRE"||y.tagName==="TEXTAREA")&&(j=j.slice(1));const{textContent:de}=y;de!==j&&de!==j.replace(/\r\n|\r/g,`
`)&&(to(y,0)||Zr(),y.textContent=b.children)}if(M){if($||!F||I&48){const j=y.tagName.includes("-");for(const de in M)($&&(de.endsWith("value")||de==="indeterminate")||Ra(de)&&!xs(de)||de[0]==="."||j)&&i(y,de,null,M[de],void 0,w)}else if(M.onClick)i(y,"onClick",null,M.onClick,void 0,w);else if(I&4&&pr(M.style))for(const j in M.style)M.style[j]}let W;(W=M&&M.onVnodeBeforeMount)&&Nn(W,w,b),k&&li(b,null,w,"beforeMount"),((W=M&&M.onVnodeMounted)||k||B)&&ag(()=>{W&&Nn(W,w,b),B&&H.enter(y),k&&li(b,null,w,"mounted")},P)}return y.nextSibling},h=(y,b,w,P,L,F,S)=>{S=S||!!b.dynamicChildren;const M=b.children,I=M.length;for(let U=0;U<I;U++){const k=S?M[U]:M[U]=Fn(M[U]),H=k.type===Gr;y?(H&&!S&&U+1<I&&Fn(M[U+1]).type===Gr&&(l(r(y.data.slice(k.children.length)),w,s(y)),y.data=k.children),y=f(y,k,P,L,F,S)):H&&!k.children?l(k.el=r(""),w):(to(w,1)||Zr(),n(null,k,w,null,P,L,eo(w),F))}return y},v=(y,b,w,P,L,F)=>{const{slotScopeIds:S}=b;S&&(L=L?L.concat(S):S);const M=a(y),I=h(s(y),b,M,w,P,L,F);return I&&gs(I)&&I.data==="]"?s(b.anchor=I):(Zr(),l(b.anchor=c("]"),M,I),I)},_=(y,b,w,P,L,F)=>{if(to(y.parentElement,1)||Zr(),b.el=null,F){const I=g(y);for(;;){const U=s(y);if(U&&U!==I)o(U);else break}}const S=s(y),M=a(y);return o(y),n(null,b,M,S,w,P,eo(M),L),w&&(w.vnode.el=b.el,Xm(w,b.el)),S},g=(y,b="[",w="]")=>{let P=0;for(;y;)if(y=s(y),y&&gs(y)&&(y.data===b&&P++,y.data===w)){if(P===0)return s(y);P--}return y},m=(y,b,w)=>{const P=b.parentNode;P&&P.replaceChild(y,b);let L=w;for(;L;)L.vnode.el===b&&(L.vnode.el=L.subTree.el=y),L=L.parent},E=y=>y.nodeType===1&&y.tagName==="TEMPLATE";return[u,f]}const Nd="data-allow-mismatch",mx={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function to(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(Nd);)t=t.parentElement;const n=t&&t.getAttribute(Nd);if(n==null)return!1;if(n==="")return!0;{const i=n.split(",");return e===0&&i.includes("children")?!0:i.includes(mx[e])}}ul().requestIdleCallback;ul().cancelIdleCallback;function gx(t,e){if(gs(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(gs(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const bs=t=>!!t.type.__asyncLoader;function vx(t){We(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:a,suspensible:o=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,h()),h=()=>{let v;return c||(v=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((g,m)=>{l(_,()=>g(d()),()=>m(_),f+1)});throw _}).then(_=>v!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return ye({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(v,_,g){let m=!1;(_.bu||(_.bu=[])).push(()=>m=!0);const E=()=>{m||g()},y=s?()=>{const b=s(E,w=>gx(v,w));b&&(_.bum||(_.bum=[])).push(b)}:E;u?y():h().then(()=>!_.isUnmounted&&y())},get __asyncResolved(){return u},setup(){const v=Yt;if(bf(v),u)return()=>no(u,v);const _=y=>{c=null,Da(y,v,13,!i)};if(o&&v.suspense||Cs)return h().then(y=>()=>no(y,v)).catch(y=>(_(y),()=>i?Lt(i,{error:y}):null));const g=et(!1),m=et(),E=et(!!r);return r&&setTimeout(()=>{E.value=!1},r),a!=null&&setTimeout(()=>{if(!g.value&&!m.value){const y=new Error(`Async component timed out after ${a}ms.`);_(y),m.value=y}},a),h().then(()=>{g.value=!0,v.parent&&Ia(v.parent.vnode)&&v.parent.update()}).catch(y=>{_(y),m.value=y}),()=>{if(g.value&&u)return no(u,v);if(m.value&&i)return Lt(i,{error:m.value});if(n&&!E.value)return no(n,v)}}})}function no(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,a=Lt(t,i,r);return a.ref=n,a.ce=s,delete e.vnode.ce,a}const Ia=t=>t.type.__isKeepAlive;function _x(t,e){Vm(t,"a",e)}function xx(t,e){Vm(t,"da",e)}function Vm(t,e,n=Yt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(_l(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ia(r.parent.vnode)&&yx(i,e,n,r),r=r.parent}}function yx(t,e,n,i){const r=_l(e,t,i,!0);ji(()=>{hf(i[e],r)},n)}function _l(t,e,n=Yt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...a)=>{ki();const o=Na(n),l=Jn(e,n,t,a);return o(),Vi(),l});return i?r.unshift(s):r.push(s),s}}const Xi=t=>(e,n=Yt)=>{(!Cs||t==="sp")&&_l(t,(...i)=>e(...i),n)},Sx=Xi("bm"),Ct=Xi("m"),bx=Xi("bu"),Hm=Xi("u"),Ef=Xi("bum"),ji=Xi("um"),Ex=Xi("sp"),Mx=Xi("rtg"),Tx=Xi("rtc");function Ax(t,e=Yt){_l("ec",t,e)}const wx="components";function Rt(t,e){return Rx(wx,t,!0,e)||t}const Cx=Symbol.for("v-ndc");function Rx(t,e,n=!0,i=!1){const r=Xn||Yt;if(r){const s=r.type;{const o=u1(s,!1);if(o&&(o===e||o===_n(e)||o===Pa(_n(e))))return s}const a=Ud(r[t]||s[t],e)||Ud(r.appContext[t],e);return!a&&i?s:a}}function Ud(t,e){return t&&(t[e]||t[_n(e)]||t[Pa(_n(e))])}function R4(t,e,n,i){let r;const s=n,a=ze(t);if(a||Bt(t)){const o=a&&pr(t);let l=!1,c=!1;o&&(l=!Cn(t),c=Hi(t),t=pl(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?ws(Zn(t[u])):Zn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s)}else if(yt(t))if(t[Symbol.iterator])r=Array.from(t,(o,l)=>e(o,l,void 0,s));else{const o=Object.keys(t);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const $c=t=>t?hg(t)?Cf(t):$c(t.parent):null,da=Wt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>$c(t.parent),$root:t=>$c(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Gm(t),$forceUpdate:t=>t.f||(t.f=()=>{_f(t.update)}),$nextTick:t=>t.n||(t.n=xi.bind(t.proxy)),$watch:t=>lx.bind(t)}),Wl=(t,e)=>t!==Tt&&!t.__isScriptSetup&&dt(t,e),Px={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=t;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Wl(i,e))return a[e]=1,i[e];if(r!==Tt&&dt(r,e))return a[e]=2,r[e];if(dt(s,e))return a[e]=3,s[e];if(n!==Tt&&dt(n,e))return a[e]=4,n[e];Xc&&(a[e]=0)}}const c=da[e];let u,f;if(c)return e==="$attrs"&&nn(t.attrs,"get",""),c(t);if((u=o.__cssModules)&&(u=u[e]))return u;if(n!==Tt&&dt(n,e))return a[e]=4,n[e];if(f=l.config.globalProperties,dt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Wl(r,e)?(r[e]=n,!0):i!==Tt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:a}},o){let l;return!!(n[o]||t!==Tt&&o[0]!=="$"&&dt(t,o)||Wl(e,o)||dt(s,o)||dt(i,o)||dt(da,o)||dt(r.config.globalProperties,o)||(l=a.__cssModules)&&l[o])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Fd(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function Lx(t){const e=Gm(t),n=t.proxy,i=t.ctx;Xc=!1,e.beforeCreate&&Od(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:v,activated:_,deactivated:g,beforeDestroy:m,beforeUnmount:E,destroyed:y,unmounted:b,render:w,renderTracked:P,renderTriggered:L,errorCaptured:F,serverPrefetch:S,expose:M,inheritAttrs:I,components:U,directives:k,filters:H}=e;if(c&&Dx(c,i,null),a)for(const W in a){const j=a[W];We(j)&&(i[W]=j.bind(n))}if(r){const W=r.call(n,n);yt(W)&&(t.data=Wr(W))}if(Xc=!0,s)for(const W in s){const j=s[W],de=We(j)?j.bind(n,n):We(j.get)?j.get.bind(n,n):di,_e=!We(j)&&We(j.set)?j.set.bind(n):di,be=X({get:de,set:_e});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>be.value,set:Oe=>be.value=Oe})}if(o)for(const W in o)zm(o[W],i,n,W);if(l){const W=We(l)?l.call(n):l;Reflect.ownKeys(W).forEach(j=>{Kn(j,W[j])})}u&&Od(u,t,"c");function B(W,j){ze(j)?j.forEach(de=>W(de.bind(n))):j&&W(j.bind(n))}if(B(Sx,f),B(Ct,d),B(bx,h),B(Hm,v),B(_x,_),B(xx,g),B(Ax,F),B(Tx,P),B(Mx,L),B(Ef,E),B(ji,b),B(Ex,S),ze(M))if(M.length){const W=t.exposed||(t.exposed={});M.forEach(j=>{Object.defineProperty(W,j,{get:()=>n[j],set:de=>n[j]=de,enumerable:!0})})}else t.exposed||(t.exposed={});w&&t.render===di&&(t.render=w),I!=null&&(t.inheritAttrs=I),U&&(t.components=U),k&&(t.directives=k),S&&bf(t)}function Dx(t,e,n=di){ze(t)&&(t=jc(t));for(const i in t){const r=t[i];let s;yt(r)?"default"in r?s=wt(r.from||i,r.default,!0):s=wt(r.from||i):s=wt(r),kt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function Od(t,e,n){Jn(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function zm(t,e,n,i){let r=i.includes(".")?Dm(n,i):()=>n[i];if(Bt(t)){const s=e[t];We(s)&&Pt(r,s)}else if(We(t))Pt(r,t.bind(n));else if(yt(t))if(ze(t))t.forEach(s=>zm(s,e,n,i));else{const s=We(t.handler)?t.handler.bind(n):e[t.handler];We(s)&&Pt(r,s,t)}}function Gm(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=t.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ko(l,c,a,!0)),Ko(l,e,a)),yt(e)&&s.set(e,l),l}function Ko(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ko(t,s,n,!0),r&&r.forEach(a=>Ko(t,a,n,!0));for(const a in e)if(!(i&&a==="expose")){const o=Ix[a]||n&&n[a];t[a]=o?o(t[a],e[a]):e[a]}return t}const Ix={data:Bd,props:kd,emits:kd,methods:oa,computed:oa,beforeCreate:on,created:on,beforeMount:on,mounted:on,beforeUpdate:on,updated:on,beforeDestroy:on,beforeUnmount:on,destroyed:on,unmounted:on,activated:on,deactivated:on,errorCaptured:on,serverPrefetch:on,components:oa,directives:oa,watch:Ux,provide:Bd,inject:Nx};function Bd(t,e){return e?t?function(){return Wt(We(t)?t.call(this,this):t,We(e)?e.call(this,this):e)}:e:t}function Nx(t,e){return oa(jc(t),jc(e))}function jc(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function on(t,e){return t?[...new Set([].concat(t,e))]:e}function oa(t,e){return t?Wt(Object.create(null),t,e):e}function kd(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:Wt(Object.create(null),Fd(t),Fd(e??{})):e}function Ux(t,e){if(!t)return e;if(!e)return t;const n=Wt(Object.create(null),t);for(const i in e)n[i]=on(t[i],e[i]);return n}function Wm(){return{app:null,config:{isNativeTag:Zp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Fx=0;function Ox(t,e){return function(i,r=null){We(i)||(i=Wt({},i)),r!=null&&!yt(r)&&(r=null);const s=Wm(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Fx++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:d1,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&We(u.install)?(a.add(u),u.install(c,...f)):We(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Lt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),f&&e?e(h,u):t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,Cf(h.component)}},onUnmount(u){o.push(u)},unmount(){l&&(Jn(o,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=zr;zr=c;try{return u()}finally{zr=f}}};return c}}let zr=null;const Bx=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_n(e)}Modifiers`]||t[`${jr(e)}Modifiers`];function kx(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||Tt;let r=n;const s=e.startsWith("update:"),a=s&&Bx(i,e.slice(7));a&&(a.trim&&(r=n.map(u=>Bt(u)?u.trim():u)),a.number&&(r=n.map(p_)));let o,l=i[o=Ol(e)]||i[o=Ol(_n(e))];!l&&s&&(l=i[o=Ol(jr(e))]),l&&Jn(l,t,6,r);const c=i[o+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[o])return;t.emitted[o]=!0,Jn(c,t,6,r)}}const Vx=new WeakMap;function $m(t,e,n=!1){const i=n?Vx:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let a={},o=!1;if(!We(t)){const l=c=>{const u=$m(c,e,!0);u&&(o=!0,Wt(a,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!o?(yt(t)&&i.set(t,null),null):(ze(s)?s.forEach(l=>a[l]=null):Wt(a,s),yt(t)&&i.set(t,a),a)}function xl(t,e){return!t||!Ra(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,jr(e))||dt(t,e))}function $l(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:v,inheritAttrs:_}=t,g=qo(t);let m,E;try{if(n.shapeFlag&4){const b=r||i,w=b;m=Fn(c.call(w,b,u,f,h,d,v)),E=o}else{const b=e;m=Fn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),E=e.props?o:Hx(o)}}catch(b){pa.length=0,Da(b,t,1),m=Lt(qt)}let y=m;if(E&&_!==!1){const b=Object.keys(E),{shapeFlag:w}=y;b.length&&w&7&&(s&&b.some(df)&&(E=zx(E,s)),y=mr(y,E,!1,!0))}return n.dirs&&(y=mr(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&$r(y,n.transition),m=y,qo(g),m}const Hx=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ra(n))&&((e||(e={}))[n]=t[n]);return e},zx=(t,e)=>{const n={};for(const i in t)(!df(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Gx(t,e,n){const{props:i,children:r,component:s}=t,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Vd(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(a[d]!==i[d]&&!xl(c,d))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?Vd(i,a,c):!0:!!a;return!1}function Vd(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!xl(n,s))return!0}return!1}function Xm({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const jm={},qm=()=>Object.create(jm),Ym=t=>Object.getPrototypeOf(t)===jm;function Wx(t,e,n,i=!1){const r={},s=qm();t.propsDefaults=Object.create(null),Km(t,e,r,s);for(const a in t.propsOptions[0])a in r||(r[a]=void 0);n?t.props=i?r:bm(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function $x(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=t,o=nt(r),[l]=t.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(xl(t.emitsOptions,d))continue;const h=e[d];if(l)if(dt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const v=_n(d);r[v]=qc(l,o,v,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Km(t,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!dt(e,f)&&((u=jr(f))===f||!dt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=qc(l,o,f,void 0,t,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!dt(e,f))&&(delete s[f],c=!0)}c&&Ni(t.attrs,"set","")}function Km(t,e,n,i){const[r,s]=t.propsOptions;let a=!1,o;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&dt(r,u=_n(l))?!s||!s.includes(u)?n[u]=c:(o||(o={}))[u]=c:xl(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=nt(n),c=o||Tt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=qc(r,l,f,c[f],t,!dt(c,f))}}return a}function qc(t,e,n,i,r,s){const a=t[n];if(a!=null){const o=dt(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&We(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Na(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===jr(n))&&(i=!0))}return i}const Xx=new WeakMap;function Zm(t,e,n=!1){const i=n?Xx:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,a={},o=[];let l=!1;if(!We(t)){const u=f=>{l=!0;const[d,h]=Zm(f,e,!0);Wt(a,d),h&&o.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return yt(t)&&i.set(t,vs),vs;if(ze(s))for(let u=0;u<s.length;u++){const f=_n(s[u]);Hd(f)&&(a[f]=Tt)}else if(s)for(const u in s){const f=_n(u);if(Hd(f)){const d=s[u],h=a[f]=ze(d)||We(d)?{type:d}:Wt({},d),v=h.type;let _=!1,g=!0;if(ze(v))for(let m=0;m<v.length;++m){const E=v[m],y=We(E)&&E.name;if(y==="Boolean"){_=!0;break}else y==="String"&&(g=!1)}else _=We(v)&&v.name==="Boolean";h[0]=_,h[1]=g,(_||dt(h,"default"))&&o.push(f)}}const c=[a,o];return yt(t)&&i.set(t,c),c}function Hd(t){return t[0]!=="$"&&!xs(t)}const Mf=t=>t==="_"||t==="_ctx"||t==="$stable",Tf=t=>ze(t)?t.map(Fn):[Fn(t)],jx=(t,e,n)=>{if(e._n)return e;const i=Pm((...r)=>Tf(e(...r)),n);return i._c=!1,i},Jm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Mf(r))continue;const s=t[r];if(We(s))e[r]=jx(r,s,i);else if(s!=null){const a=Tf(s);e[r]=()=>a}}},Qm=(t,e)=>{const n=Tf(e);t.slots.default=()=>n},eg=(t,e,n)=>{for(const i in e)(n||!Mf(i))&&(t[i]=e[i])},qx=(t,e,n)=>{const i=t.slots=qm();if(t.vnode.shapeFlag&32){const r=e._;r?(eg(i,e,n),n&&nm(i,"_",r,!0)):Jm(e,i)}else e&&Qm(t,e)},Yx=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,a=Tt;if(i.shapeFlag&32){const o=e._;o?n&&o===1?s=!1:eg(r,e,n):(s=!e.$stable,Jm(e,r)),a=e}else e&&(Qm(t,e),a={default:1});if(s)for(const o in r)!Mf(o)&&a[o]==null&&delete r[o]},Mn=ag;function Kx(t){return Zx(t,px)}function Zx(t,e){const n=ul();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=di,insertStaticContent:v}=t,_=(R,D,G,ee=null,ie=null,C=null,he=void 0,le=null,ce=!!D.dynamicChildren)=>{if(R===D)return;R&&!Nr(R,D)&&(ee=O(R),Oe(R,ie,C,!0),R=null),D.patchFlag===-2&&(ce=!1,D.dynamicChildren=null);const{type:K,ref:A,shapeFlag:x}=D;switch(K){case Gr:g(R,D,G,ee);break;case qt:m(R,D,G,ee);break;case ha:R==null&&E(D,G,ee,he);break;case fn:U(R,D,G,ee,ie,C,he,le,ce);break;default:x&1?w(R,D,G,ee,ie,C,he,le,ce):x&6?k(R,D,G,ee,ie,C,he,le,ce):(x&64||x&128)&&K.process(R,D,G,ee,ie,C,he,le,ce,ae)}A!=null&&ie?Ss(A,R&&R.ref,C,D||R,!D):A==null&&R&&R.ref!=null&&Ss(R.ref,null,C,R,!0)},g=(R,D,G,ee)=>{if(R==null)i(D.el=o(D.children),G,ee);else{const ie=D.el=R.el;D.children!==R.children&&c(ie,D.children)}},m=(R,D,G,ee)=>{R==null?i(D.el=l(D.children||""),G,ee):D.el=R.el},E=(R,D,G,ee)=>{[R.el,R.anchor]=v(R.children,D,G,ee,R.el,R.anchor)},y=({el:R,anchor:D},G,ee)=>{let ie;for(;R&&R!==D;)ie=d(R),i(R,G,ee),R=ie;i(D,G,ee)},b=({el:R,anchor:D})=>{let G;for(;R&&R!==D;)G=d(R),r(R),R=G;r(D)},w=(R,D,G,ee,ie,C,he,le,ce)=>{if(D.type==="svg"?he="svg":D.type==="math"&&(he="mathml"),R==null)P(D,G,ee,ie,C,he,le,ce);else{const K=R.el&&R.el._isVueCE?R.el:null;try{K&&K._beginPatch(),S(R,D,ie,C,he,le,ce)}finally{K&&K._endPatch()}}},P=(R,D,G,ee,ie,C,he,le)=>{let ce,K;const{props:A,shapeFlag:x,transition:N,dirs:q}=R;if(ce=R.el=a(R.type,C,A&&A.is,A),x&8?u(ce,R.children):x&16&&F(R.children,ce,null,ee,ie,Xl(R,C),he,le),q&&li(R,null,ee,"created"),L(ce,R,R.scopeId,he,ee),A){for(const Z in A)Z!=="value"&&!xs(Z)&&s(ce,Z,null,A[Z],C,ee);"value"in A&&s(ce,"value",null,A.value,C),(K=A.onVnodeBeforeMount)&&Nn(K,ee,R)}q&&li(R,null,ee,"beforeMount");const te=tg(ie,N);te&&N.beforeEnter(ce),i(ce,D,G),((K=A&&A.onVnodeMounted)||te||q)&&Mn(()=>{K&&Nn(K,ee,R),te&&N.enter(ce),q&&li(R,null,ee,"mounted")},ie)},L=(R,D,G,ee,ie)=>{if(G&&h(R,G),ee)for(let C=0;C<ee.length;C++)h(R,ee[C]);if(ie){let C=ie.subTree;if(D===C||sg(C.type)&&(C.ssContent===D||C.ssFallback===D)){const he=ie.vnode;L(R,he,he.scopeId,he.slotScopeIds,ie.parent)}}},F=(R,D,G,ee,ie,C,he,le,ce=0)=>{for(let K=ce;K<R.length;K++){const A=R[K]=le?lr(R[K]):Fn(R[K]);_(null,A,D,G,ee,ie,C,he,le)}},S=(R,D,G,ee,ie,C,he)=>{const le=D.el=R.el;let{patchFlag:ce,dynamicChildren:K,dirs:A}=D;ce|=R.patchFlag&16;const x=R.props||Tt,N=D.props||Tt;let q;if(G&&Er(G,!1),(q=N.onVnodeBeforeUpdate)&&Nn(q,G,D,R),A&&li(D,R,G,"beforeUpdate"),G&&Er(G,!0),(x.innerHTML&&N.innerHTML==null||x.textContent&&N.textContent==null)&&u(le,""),K?M(R.dynamicChildren,K,le,G,ee,Xl(D,ie),C):he||j(R,D,le,null,G,ee,Xl(D,ie),C,!1),ce>0){if(ce&16)I(le,x,N,G,ie);else if(ce&2&&x.class!==N.class&&s(le,"class",null,N.class,ie),ce&4&&s(le,"style",x.style,N.style,ie),ce&8){const te=D.dynamicProps;for(let Z=0;Z<te.length;Z++){const ve=te[Z],pe=x[ve],Me=N[ve];(Me!==pe||ve==="value")&&s(le,ve,pe,Me,ie,G)}}ce&1&&R.children!==D.children&&u(le,D.children)}else!he&&K==null&&I(le,x,N,G,ie);((q=N.onVnodeUpdated)||A)&&Mn(()=>{q&&Nn(q,G,D,R),A&&li(D,R,G,"updated")},ee)},M=(R,D,G,ee,ie,C,he)=>{for(let le=0;le<D.length;le++){const ce=R[le],K=D[le],A=ce.el&&(ce.type===fn||!Nr(ce,K)||ce.shapeFlag&198)?f(ce.el):G;_(ce,K,A,null,ee,ie,C,he,!0)}},I=(R,D,G,ee,ie)=>{if(D!==G){if(D!==Tt)for(const C in D)!xs(C)&&!(C in G)&&s(R,C,D[C],null,ie,ee);for(const C in G){if(xs(C))continue;const he=G[C],le=D[C];he!==le&&C!=="value"&&s(R,C,le,he,ie,ee)}"value"in G&&s(R,"value",D.value,G.value,ie)}},U=(R,D,G,ee,ie,C,he,le,ce)=>{const K=D.el=R?R.el:o(""),A=D.anchor=R?R.anchor:o("");let{patchFlag:x,dynamicChildren:N,slotScopeIds:q}=D;q&&(le=le?le.concat(q):q),R==null?(i(K,G,ee),i(A,G,ee),F(D.children||[],G,A,ie,C,he,le,ce)):x>0&&x&64&&N&&R.dynamicChildren&&R.dynamicChildren.length===N.length?(M(R.dynamicChildren,N,G,ie,C,he,le),(D.key!=null||ie&&D===ie.subTree)&&ng(R,D,!0)):j(R,D,G,A,ie,C,he,le,ce)},k=(R,D,G,ee,ie,C,he,le,ce)=>{D.slotScopeIds=le,R==null?D.shapeFlag&512?ie.ctx.activate(D,G,ee,he,ce):H(D,G,ee,ie,C,he,ce):$(R,D,ce)},H=(R,D,G,ee,ie,C,he)=>{const le=R.component=s1(R,ee,ie);if(Ia(R)&&(le.ctx.renderer=ae),a1(le,!1,he),le.asyncDep){if(ie&&ie.registerDep(le,B,he),!R.el){const ce=le.subTree=Lt(qt);m(null,ce,D,G),R.placeholder=ce.el}}else B(le,R,D,G,ie,C,he)},$=(R,D,G)=>{const ee=D.component=R.component;if(Gx(R,D,G))if(ee.asyncDep&&!ee.asyncResolved){W(ee,D,G);return}else ee.next=D,ee.update();else D.el=R.el,ee.vnode=D},B=(R,D,G,ee,ie,C,he)=>{const le=()=>{if(R.isMounted){let{next:x,bu:N,u:q,parent:te,vnode:Z}=R;{const fe=ig(R);if(fe){x&&(x.el=Z.el,W(R,x,he)),fe.asyncDep.then(()=>{R.isUnmounted||le()});return}}let ve=x,pe;Er(R,!1),x?(x.el=Z.el,W(R,x,he)):x=Z,N&&Bl(N),(pe=x.props&&x.props.onVnodeBeforeUpdate)&&Nn(pe,te,x,Z),Er(R,!0);const Me=$l(R),Ue=R.subTree;R.subTree=Me,_(Ue,Me,f(Ue.el),O(Ue),R,ie,C),x.el=Me.el,ve===null&&Xm(R,Me.el),q&&Mn(q,ie),(pe=x.props&&x.props.onVnodeUpdated)&&Mn(()=>Nn(pe,te,x,Z),ie)}else{let x;const{el:N,props:q}=D,{bm:te,m:Z,parent:ve,root:pe,type:Me}=R,Ue=bs(D);if(Er(R,!1),te&&Bl(te),!Ue&&(x=q&&q.onVnodeBeforeMount)&&Nn(x,ve,D),Er(R,!0),N&&je){const fe=()=>{R.subTree=$l(R),je(N,R.subTree,R,ie,null)};Ue&&Me.__asyncHydrate?Me.__asyncHydrate(N,R,fe):fe()}else{pe.ce&&pe.ce._def.shadowRoot!==!1&&pe.ce._injectChildStyle(Me);const fe=R.subTree=$l(R);_(null,fe,G,ee,R,ie,C),D.el=fe.el}if(Z&&Mn(Z,ie),!Ue&&(x=q&&q.onVnodeMounted)){const fe=D;Mn(()=>Nn(x,ve,fe),ie)}(D.shapeFlag&256||ve&&bs(ve.vnode)&&ve.vnode.shapeFlag&256)&&R.a&&Mn(R.a,ie),R.isMounted=!0,D=G=ee=null}};R.scope.on();const ce=R.effect=new am(le);R.scope.off();const K=R.update=ce.run.bind(ce),A=R.job=ce.runIfDirty.bind(ce);A.i=R,A.id=R.uid,ce.scheduler=()=>_f(A),Er(R,!0),K()},W=(R,D,G)=>{D.component=R;const ee=R.vnode.props;R.vnode=D,R.next=null,$x(R,D.props,ee,G),Yx(R,D.children,G),ki(),Pd(R),Vi()},j=(R,D,G,ee,ie,C,he,le,ce=!1)=>{const K=R&&R.children,A=R?R.shapeFlag:0,x=D.children,{patchFlag:N,shapeFlag:q}=D;if(N>0){if(N&128){_e(K,x,G,ee,ie,C,he,le,ce);return}else if(N&256){de(K,x,G,ee,ie,C,he,le,ce);return}}q&8?(A&16&&se(K,ie,C),x!==K&&u(G,x)):A&16?q&16?_e(K,x,G,ee,ie,C,he,le,ce):se(K,ie,C,!0):(A&8&&u(G,""),q&16&&F(x,G,ee,ie,C,he,le,ce))},de=(R,D,G,ee,ie,C,he,le,ce)=>{R=R||vs,D=D||vs;const K=R.length,A=D.length,x=Math.min(K,A);let N;for(N=0;N<x;N++){const q=D[N]=ce?lr(D[N]):Fn(D[N]);_(R[N],q,G,null,ie,C,he,le,ce)}K>A?se(R,ie,C,!0,!1,x):F(D,G,ee,ie,C,he,le,ce,x)},_e=(R,D,G,ee,ie,C,he,le,ce)=>{let K=0;const A=D.length;let x=R.length-1,N=A-1;for(;K<=x&&K<=N;){const q=R[K],te=D[K]=ce?lr(D[K]):Fn(D[K]);if(Nr(q,te))_(q,te,G,null,ie,C,he,le,ce);else break;K++}for(;K<=x&&K<=N;){const q=R[x],te=D[N]=ce?lr(D[N]):Fn(D[N]);if(Nr(q,te))_(q,te,G,null,ie,C,he,le,ce);else break;x--,N--}if(K>x){if(K<=N){const q=N+1,te=q<A?D[q].el:ee;for(;K<=N;)_(null,D[K]=ce?lr(D[K]):Fn(D[K]),G,te,ie,C,he,le,ce),K++}}else if(K>N)for(;K<=x;)Oe(R[K],ie,C,!0),K++;else{const q=K,te=K,Z=new Map;for(K=te;K<=N;K++){const we=D[K]=ce?lr(D[K]):Fn(D[K]);we.key!=null&&Z.set(we.key,K)}let ve,pe=0;const Me=N-te+1;let Ue=!1,fe=0;const Se=new Array(Me);for(K=0;K<Me;K++)Se[K]=0;for(K=q;K<=x;K++){const we=R[K];if(pe>=Me){Oe(we,ie,C,!0);continue}let ge;if(we.key!=null)ge=Z.get(we.key);else for(ve=te;ve<=N;ve++)if(Se[ve-te]===0&&Nr(we,D[ve])){ge=ve;break}ge===void 0?Oe(we,ie,C,!0):(Se[ge-te]=K+1,ge>=fe?fe=ge:Ue=!0,_(we,D[ge],G,null,ie,C,he,le,ce),pe++)}const Ie=Ue?Jx(Se):vs;for(ve=Ie.length-1,K=Me-1;K>=0;K--){const we=te+K,ge=D[we],qe=D[we+1],V=we+1<A?qe.el||rg(qe):ee;Se[K]===0?_(null,ge,G,V,ie,C,he,le,ce):Ue&&(ve<0||K!==Ie[ve]?be(ge,G,V,2):ve--)}}},be=(R,D,G,ee,ie=null)=>{const{el:C,type:he,transition:le,children:ce,shapeFlag:K}=R;if(K&6){be(R.component.subTree,D,G,ee);return}if(K&128){R.suspense.move(D,G,ee);return}if(K&64){he.move(R,D,G,ae);return}if(he===fn){i(C,D,G);for(let x=0;x<ce.length;x++)be(ce[x],D,G,ee);i(R.anchor,D,G);return}if(he===ha){y(R,D,G);return}if(ee!==2&&K&1&&le)if(ee===0)le.beforeEnter(C),i(C,D,G),Mn(()=>le.enter(C),ie);else{const{leave:x,delayLeave:N,afterLeave:q}=le,te=()=>{R.ctx.isUnmounted?r(C):i(C,D,G)},Z=()=>{C._isLeaving&&C[Ii](!0),x(C,()=>{te(),q&&q()})};N?N(C,te,Z):Z()}else i(C,D,G)},Oe=(R,D,G,ee=!1,ie=!1)=>{const{type:C,props:he,ref:le,children:ce,dynamicChildren:K,shapeFlag:A,patchFlag:x,dirs:N,cacheIndex:q}=R;if(x===-2&&(ie=!1),le!=null&&(ki(),Ss(le,null,G,R,!0),Vi()),q!=null&&(D.renderCache[q]=void 0),A&256){D.ctx.deactivate(R);return}const te=A&1&&N,Z=!bs(R);let ve;if(Z&&(ve=he&&he.onVnodeBeforeUnmount)&&Nn(ve,D,R),A&6)st(R.component,G,ee);else{if(A&128){R.suspense.unmount(G,ee);return}te&&li(R,null,D,"beforeUnmount"),A&64?R.type.remove(R,D,G,ae,ee):K&&!K.hasOnce&&(C!==fn||x>0&&x&64)?se(K,D,G,!1,!0):(C===fn&&x&384||!ie&&A&16)&&se(ce,D,G),ee&&Ge(R)}(Z&&(ve=he&&he.onVnodeUnmounted)||te)&&Mn(()=>{ve&&Nn(ve,D,R),te&&li(R,null,D,"unmounted")},G)},Ge=R=>{const{type:D,el:G,anchor:ee,transition:ie}=R;if(D===fn){ut(G,ee);return}if(D===ha){b(R);return}const C=()=>{r(G),ie&&!ie.persisted&&ie.afterLeave&&ie.afterLeave()};if(R.shapeFlag&1&&ie&&!ie.persisted){const{leave:he,delayLeave:le}=ie,ce=()=>he(G,C);le?le(R.el,C,ce):ce()}else C()},ut=(R,D)=>{let G;for(;R!==D;)G=d(R),r(R),R=G;r(D)},st=(R,D,G)=>{const{bum:ee,scope:ie,job:C,subTree:he,um:le,m:ce,a:K}=R;zd(ce),zd(K),ee&&Bl(ee),ie.stop(),C&&(C.flags|=8,Oe(he,R,D,G)),le&&Mn(le,D),Mn(()=>{R.isUnmounted=!0},D)},se=(R,D,G,ee=!1,ie=!1,C=0)=>{for(let he=C;he<R.length;he++)Oe(R[he],D,G,ee,ie)},O=R=>{if(R.shapeFlag&6)return O(R.component.subTree);if(R.shapeFlag&128)return R.suspense.next();const D=d(R.anchor||R.el),G=D&&D[cx];return G?d(G):D};let re=!1;const oe=(R,D,G)=>{let ee;R==null?D._vnode&&(Oe(D._vnode,null,null,!0),ee=D._vnode.component):_(D._vnode||null,R,D,null,null,null,G),D._vnode=R,re||(re=!0,Pd(ee),jo(),re=!1)},ae={p:_,um:Oe,m:be,r:Ge,mt:H,mc:F,pc:j,pbc:M,n:O,o:t};let Pe,je;return e&&([Pe,je]=e(ae)),{render:oe,hydrate:Pe,createApp:Ox(oe,Pe)}}function Xl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Er({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function tg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ng(t,e,n=!1){const i=t.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=lr(r[s]),o.el=a.el),!n&&o.patchFlag!==-2&&ng(a,o)),o.type===Gr&&(o.patchFlag!==-1?o.el=a.el:o.__elIndex=s+(t.type===fn?1:0)),o.type===qt&&!o.el&&(o.el=a.el)}}function Jx(t){const e=t.slice(),n=[0];let i,r,s,a,o;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,t[n[o]]<c?s=o+1:a=o;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=e[a];return n}function ig(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ig(e)}function zd(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function rg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?rg(e.subTree):null}const sg=t=>t.__isSuspense;function ag(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):sx(t)}const fn=Symbol.for("v-fgt"),Gr=Symbol.for("v-txt"),qt=Symbol.for("v-cmt"),ha=Symbol.for("v-stc"),pa=[];let An=null;function Af(t=!1){pa.push(An=t?null:[])}function Qx(){pa.pop(),An=pa[pa.length-1]||null}let Sa=1;function Zo(t,e=!1){Sa+=t,t<0&&An&&e&&(An.hasOnce=!0)}function og(t){return t.dynamicChildren=Sa>0?An||vs:null,Qx(),Sa>0&&An&&An.push(t),t}function e1(t,e,n,i,r,s){return og(ug(t,e,n,i,r,s,!0))}function lg(t,e,n,i,r){return og(Lt(t,e,n,i,r,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Nr(t,e){return t.type===e.type&&t.key===e.key}const cg=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Bt(t)||kt(t)||We(t)?{i:Xn,r:t,k:e,f:!!n}:t:null);function ug(t,e=null,n=null,i=0,r=null,s=t===fn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&cg(e),ref:e&&No(e),scopeId:Rm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Xn};return o?(wf(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Bt(n)?8:16),Sa>0&&!a&&An&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&An.push(l),l}const Lt=t1;function t1(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Cx)&&(t=qt),Jo(t)){const o=mr(t,e,!0);return n&&wf(o,n),Sa>0&&!s&&An&&(o.shapeFlag&6?An[An.indexOf(t)]=o:An.push(o)),o.patchFlag=-2,o}if(f1(t)&&(t=t.__vccOpts),e){e=fg(e);let{class:o,style:l}=e;o&&!Bt(o)&&(e.class=dl(o)),yt(l)&&(vl(l)&&!ze(l)&&(l=Wt({},l)),e.style=fl(l))}const a=Bt(t)?1:sg(t)?128:Im(t)?64:yt(t)?4:We(t)?2:0;return ug(t,e,n,i,r,a,s,!0)}function fg(t){return t?vl(t)||Ym(t)?Wt({},t):t:null}function mr(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=t,c=e?n1(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&cg(c),ref:e&&e.ref?n&&s?ze(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==fn?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&mr(t.ssContent),ssFallback:t.ssFallback&&mr(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&$r(u,l.clone(u)),u}function dg(t=" ",e=0){return Lt(Gr,null,t,e)}function P4(t,e){const n=Lt(ha,null,t);return n.staticCount=e,n}function Gd(t="",e=!1){return e?(Af(),lg(qt,null,t)):Lt(qt,null,t)}function Fn(t){return t==null||typeof t=="boolean"?Lt(qt):ze(t)?Lt(fn,null,t.slice()):Jo(t)?lr(t):Lt(Gr,null,String(t))}function lr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:mr(t)}function wf(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),wf(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Ym(e)?e._ctx=Xn:r===3&&Xn&&(Xn.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else We(e)?(e={default:e,_ctx:Xn},n=32):(e=String(e),i&64?(n=16,e=[dg(e)]):n=8);t.children=e,t.shapeFlag|=n}function n1(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=dl([e.class,i.class]));else if(r==="style")e.style=fl([e.style,i.style]);else if(Ra(r)){const s=e[r],a=i[r];a&&s!==a&&!(ze(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function Nn(t,e,n,i=null){Jn(t,e,7,[n,i])}const i1=Wm();let r1=0;function s1(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||i1,s={uid:r1++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new M_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Zm(i,r),emitsOptions:$m(i,r),emit:null,emitted:null,propsDefaults:Tt,inheritAttrs:i.inheritAttrs,ctx:Tt,data:Tt,props:Tt,attrs:Tt,slots:Tt,refs:Tt,setupState:Tt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=kx.bind(null,s),t.ce&&t.ce(s),s}let Yt=null;const qi=()=>Yt||Xn;let Qo,Yc;{const t=ul(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Qo=e("__VUE_INSTANCE_SETTERS__",n=>Yt=n),Yc=e("__VUE_SSR_SETTERS__",n=>Cs=n)}const Na=t=>{const e=Yt;return Qo(t),t.scope.on(),()=>{t.scope.off(),Qo(e)}},Wd=()=>{Yt&&Yt.scope.off(),Qo(null)};function hg(t){return t.vnode.shapeFlag&4}let Cs=!1;function a1(t,e=!1,n=!1){e&&Yc(e);const{props:i,children:r}=t.vnode,s=hg(t);Wx(t,i,s,e),qx(t,r,n||e);const a=s?o1(t,e):void 0;return e&&Yc(!1),a}function o1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Px);const{setup:i}=n;if(i){ki();const r=t.setupContext=i.length>1?c1(t):null,s=Na(t),a=La(i,t,0,[t.props,r]),o=Qp(a);if(Vi(),s(),(o||t.sp)&&!bs(t)&&bf(t),o){if(a.then(Wd,Wd),e)return a.then(l=>{$d(t,l)}).catch(l=>{Da(l,t,0)});t.asyncDep=a}else $d(t,a)}else pg(t)}function $d(t,e,n){We(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:yt(e)&&(t.setupState=Mm(e)),pg(t)}function pg(t,e,n){const i=t.type;t.render||(t.render=i.render||di);{const r=Na(t);ki();try{Lx(t)}finally{Vi(),r()}}}const l1={get(t,e){return nn(t,"get",""),t[e]}};function c1(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,l1),slots:t.slots,emit:t.emit,expose:e}}function Cf(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Mm(X_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in da)return da[n](t)},has(e,n){return n in e||n in da}})):t.proxy}function u1(t,e=!0){return We(t)?t.displayName||t.name:t.name||e&&t.__name}function f1(t){return We(t)&&"__vccOpts"in t}const X=(t,e)=>ex(t,e,Cs);function p(t,e,n){try{Zo(-1);const i=arguments.length;return i===2?yt(e)&&!ze(e)?Jo(e)?Lt(t,null,[e]):Lt(t,e):Lt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Jo(n)&&(n=[n]),Lt(t,e,n))}finally{Zo(1)}}const d1="3.5.26";/**
* @vue/runtime-dom v3.5.26
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Kc;const Xd=typeof window<"u"&&window.trustedTypes;if(Xd)try{Kc=Xd.createPolicy("vue",{createHTML:t=>t})}catch{}const mg=Kc?t=>Kc.createHTML(t):t=>t,h1="http://www.w3.org/2000/svg",p1="http://www.w3.org/1998/Math/MathML",Di=typeof document<"u"?document:null,jd=Di&&Di.createElement("template"),m1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Di.createElementNS(h1,t):e==="mathml"?Di.createElementNS(p1,t):n?Di.createElement(t,{is:n}):Di.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Di.createTextNode(t),createComment:t=>Di.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Di.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const a=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{jd.innerHTML=mg(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const o=jd.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,n)}return[a?a.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Ji="transition",Js="animation",Rs=Symbol("_vtc"),gg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},vg=Wt({},Um,gg),g1=t=>(t.displayName="Transition",t.props=vg,t),Ps=g1((t,{slots:e})=>p(fx,_g(t),e)),Mr=(t,e=[])=>{ze(t)?t.forEach(n=>n(...e)):t&&t(...e)},qd=t=>t?ze(t)?t.some(e=>e.length>1):t.length>1:!1;function _g(t){const e={};for(const U in t)U in gg||(e[U]=t[U]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,v=v1(r),_=v&&v[0],g=v&&v[1],{onBeforeEnter:m,onEnter:E,onEnterCancelled:y,onLeave:b,onLeaveCancelled:w,onBeforeAppear:P=m,onAppear:L=E,onAppearCancelled:F=y}=e,S=(U,k,H,$)=>{U._enterCancelled=$,sr(U,k?u:o),sr(U,k?c:a),H&&H()},M=(U,k)=>{U._isLeaving=!1,sr(U,f),sr(U,h),sr(U,d),k&&k()},I=U=>(k,H)=>{const $=U?L:E,B=()=>S(k,U,H);Mr($,[k,B]),Yd(()=>{sr(k,U?l:s),ai(k,U?u:o),qd($)||Kd(k,i,_,B)})};return Wt(e,{onBeforeEnter(U){Mr(m,[U]),ai(U,s),ai(U,a)},onBeforeAppear(U){Mr(P,[U]),ai(U,l),ai(U,c)},onEnter:I(!1),onAppear:I(!0),onLeave(U,k){U._isLeaving=!0;const H=()=>M(U,k);ai(U,f),U._enterCancelled?(ai(U,d),Zc(U)):(Zc(U),ai(U,d)),Yd(()=>{U._isLeaving&&(sr(U,f),ai(U,h),qd(b)||Kd(U,i,g,H))}),Mr(b,[U,H])},onEnterCancelled(U){S(U,!1,void 0,!0),Mr(y,[U])},onAppearCancelled(U){S(U,!0,void 0,!0),Mr(F,[U])},onLeaveCancelled(U){M(U),Mr(w,[U])}})}function v1(t){if(t==null)return null;if(yt(t))return[jl(t.enter),jl(t.leave)];{const e=jl(t);return[e,e]}}function jl(t){return m_(t)}function ai(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Rs]||(t[Rs]=new Set)).add(e)}function sr(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Rs];n&&(n.delete(e),n.size||(t[Rs]=void 0))}function Yd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let _1=0;function Kd(t,e,n,i){const r=t._endId=++_1,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:a,timeout:o,propCount:l}=xg(t,e);if(!a)return i();const c=a+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},o+1),t.addEventListener(c,d)}function xg(t,e){const n=window.getComputedStyle(t),i=v=>(n[v]||"").split(", "),r=i(`${Ji}Delay`),s=i(`${Ji}Duration`),a=Zd(r,s),o=i(`${Js}Delay`),l=i(`${Js}Duration`),c=Zd(o,l);let u=null,f=0,d=0;e===Ji?a>0&&(u=Ji,f=a,d=s.length):e===Js?c>0&&(u=Js,f=c,d=l.length):(f=Math.max(a,c),u=f>0?a>c?Ji:Js:null,d=u?u===Ji?s.length:l.length:0);const h=u===Ji&&/\b(?:transform|all)(?:,|$)/.test(i(`${Ji}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Zd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Jd(n)+Jd(t[i])))}function Jd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Zc(t){return(t?t.ownerDocument:document).body.offsetHeight}function x1(t,e,n){const i=t[Rs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qd=Symbol("_vod"),y1=Symbol("_vsh"),S1=Symbol(""),b1=/(?:^|;)\s*display\s*:/;function E1(t,e,n){const i=t.style,r=Bt(n);let s=!1;if(n&&!r){if(e)if(Bt(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();n[o]==null&&Uo(i,o,"")}else for(const a in e)n[a]==null&&Uo(i,a,"");for(const a in n)a==="display"&&(s=!0),Uo(i,a,n[a])}else if(r){if(e!==n){const a=i[S1];a&&(n+=";"+a),i.cssText=n,s=b1.test(n)}}else e&&t.removeAttribute("style");Qd in t&&(t[Qd]=s?i.display:"",t[y1]&&(i.display="none"))}const eh=/\s*!important$/;function Uo(t,e,n){if(ze(n))n.forEach(i=>Uo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=M1(t,e);eh.test(n)?t.setProperty(jr(i),n.replace(eh,""),"important"):t[i]=n}}const th=["Webkit","Moz","ms"],ql={};function M1(t,e){const n=ql[e];if(n)return n;let i=_n(e);if(i!=="filter"&&i in t)return ql[e]=i;i=Pa(i);for(let r=0;r<th.length;r++){const s=th[r]+i;if(s in t)return ql[e]=s}return e}const nh="http://www.w3.org/1999/xlink";function ih(t,e,n,i,r,s=b_(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(nh,e.slice(6,e.length)):t.setAttributeNS(nh,e,n):n==null||s&&!im(n)?t.removeAttribute(e):t.setAttribute(e,s?"":_r(n)?String(n):n)}function rh(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mg(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(o!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const o=typeof t[e];o==="boolean"?n=im(n):n==null&&o==="string"?(n="",a=!0):o==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(r||e)}function T1(t,e,n,i){t.addEventListener(e,n,i)}function A1(t,e,n,i){t.removeEventListener(e,n,i)}const sh=Symbol("_vei");function w1(t,e,n,i,r=null){const s=t[sh]||(t[sh]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=C1(e);if(i){const c=s[e]=L1(i,r);T1(t,o,c,l)}else a&&(A1(t,o,a,l),s[e]=void 0)}}const ah=/(?:Once|Passive|Capture)$/;function C1(t){let e;if(ah.test(t)){e={};let i;for(;i=t.match(ah);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):jr(t.slice(2)),e]}let Yl=0;const R1=Promise.resolve(),P1=()=>Yl||(R1.then(()=>Yl=0),Yl=Date.now());function L1(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Jn(D1(i,n.value),e,5,[i])};return n.value=t,n.attached=P1(),n}function D1(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const oh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,I1=(t,e,n,i,r,s)=>{const a=r==="svg";e==="class"?x1(t,i,a):e==="style"?E1(t,n,i):Ra(e)?df(e)||w1(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N1(t,e,i,a))?(rh(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ih(t,e,i,a,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Bt(i))?rh(t,_n(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ih(t,e,i,a))};function N1(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&oh(e)&&We(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return oh(e)&&Bt(n)?!1:e in t}const yg=new WeakMap,Sg=new WeakMap,el=Symbol("_moveCb"),lh=Symbol("_enterCb"),U1=t=>(delete t.props.mode,t),F1=U1({name:"TransitionGroup",props:Wt({},vg,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=qi(),i=Nm();let r,s;return Hm(()=>{if(!r.length)return;const a=t.moveClass||`${t.name||"v"}-move`;if(!V1(r[0].el,n.vnode.el,a)){r=[];return}r.forEach(O1),r.forEach(B1);const o=r.filter(k1);Zc(n.vnode.el),o.forEach(l=>{const c=l.el,u=c.style;ai(c,a),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[el]=d=>{d&&d.target!==c||(!d||d.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",f),c[el]=null,sr(c,a))};c.addEventListener("transitionend",f)}),r=[]}),()=>{const a=nt(t),o=_g(a);let l=a.tag||fn;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),$r(u,ya(u,o,i,n)),yg.set(u,{left:u.el.offsetLeft,top:u.el.offsetTop}))}s=e.default?Sf(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&$r(u,ya(u,o,i,n))}return Lt(l,null,s)}}}),bg=F1;function O1(t){const e=t.el;e[el]&&e[el](),e[lh]&&e[lh]()}function B1(t){Sg.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function k1(t){const e=yg.get(t),n=Sg.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function V1(t,e,n){const i=t.cloneNode(),r=t[Rs];r&&r.forEach(o=>{o.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(o=>o&&i.classList.add(o)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:a}=xg(i);return s.removeChild(i),a}const H1=Wt({patchProp:I1},m1);let Kl,ch=!1;function z1(){return Kl=ch?Kl:Kx(H1),ch=!0,Kl}const G1=((...t)=>{const e=z1().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=$1(i);if(r)return n(r,!0,W1(r))},e});function W1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function $1(t){return Bt(t)?document.querySelector(t):t}var Ua=t=>/^[a-z][a-z0-9+.-]*:/.test(t)||t.startsWith("//"),X1=/.md((\?|#).*)?$/,Rf=(t,e="/")=>Ua(t)||t.startsWith("/")&&!t.startsWith(e)&&!X1.test(t),ks=t=>/^(https?:)?\/\//.test(t),uh=t=>{if(!t||t.endsWith("/"))return t;let e=t.replace(/(^|\/)README.md$/i,"$1index.html");return e.endsWith(".md")?e=`${e.substring(0,e.length-3)}.html`:e.endsWith(".html")||(e=`${e}.html`),e.endsWith("/index.html")&&(e=e.substring(0,e.length-10)),e},j1="http://.",q1=(t,e)=>{if(!t.startsWith("/")&&e){const n=e.slice(0,e.lastIndexOf("/"));return uh(new URL(`${n}/${t}`,j1).pathname)}return uh(t)},Y1=(t,e)=>{const n=Object.keys(t).sort((i,r)=>{const s=r.split("/").length-i.split("/").length;return s!==0?s:r.length-i.length});for(const i of n)if(e.startsWith(i))return i;return"/"},K1=/(#|\?)/,Eg=t=>{const[e,...n]=t.split(K1);return{pathname:e,hashAndQueries:n.join("")}},Z1=["link","meta","script","style","noscript","template"],J1=["title","base"],Q1=([t,e,n])=>J1.includes(t)?t:Z1.includes(t)?t==="meta"&&e.name?`${t}.${e.name}`:t==="template"&&e.id?`${t}.${e.id}`:JSON.stringify([t,Object.entries(e).map(([i,r])=>typeof r=="boolean"?r?[i,""]:null:[i,r]).filter(i=>i!=null).sort(([i],[r])=>i.localeCompare(r)),n]):null,ey=t=>{const e=new Set,n=[];return t.forEach(i=>{const r=Q1(i);r&&!e.has(r)&&(e.add(r),n.push(i))}),n},ty=t=>t.startsWith("/")?t:`/${t}`,Mg=t=>t.endsWith("/")||t.endsWith(".html")?t:`${t}/`,Pf=t=>t.endsWith("/")?t.slice(0,-1):t,Tg=t=>t.startsWith("/")?t.slice(1):t,Vs=t=>Object.prototype.toString.call(t)==="[object Object]",vt=t=>typeof t=="string";const ny="modulepreload",iy=function(t){return"/myblog/"+t},fh={},Ve=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");r=l(n.map(c=>{if(c=iy(c),c in fh)return;fh[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":ny,u||(d.as="script"),d.crossOrigin="",d.href=c,o&&d.setAttribute("nonce",o),document.head.appendChild(d),u)return new Promise((h,v)=>{d.addEventListener("load",h),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})},ry=JSON.parse("{}"),sy=Object.fromEntries([["/",{loader:()=>Ve(()=>import("./index.html-D_h-p8lF.js"),[]),meta:{title:"个人博客",icon:"house"}}],["/intro.html",{loader:()=>Ve(()=>import("./intro.html-DbsrphZ9.js"),[]),meta:{date:1766391785e3,cover:"/assets/images/cover3.jpg",excerpt:`
<p>将你的个人介绍和档案放置在此处。</p>
`,readingTime:{minutes:.08,words:23},title:"介绍页",icon:"circle-info",type:"article"}}],["/demo/",{loader:()=>Ve(()=>import("./index.html-l_8J_EFa.js"),[]),meta:{date:1766391785e3,category:["使用指南"],readingTime:{minutes:.07,words:22},title:"主要功能与配置演示",icon:"laptop-code",type:"article"}}],["/demo/disable.html",{loader:()=>Ve(()=>import("./disable.html-B_Ne18h_.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["禁用"],excerpt:`<p>你可以通过设置页面的 Frontmatter，在页面禁用功能与布局。</p>
`,readingTime:{minutes:.43,words:128},title:"布局与功能禁用",icon:"gears",order:4,type:"article"}}],["/demo/encrypt.html",{loader:()=>Ve(()=>import("./encrypt.html-BQsaZq-3.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["加密"],excerpt:`
<p>实际的文章内容。</p>
<p>段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字段落 1 文字。</p>
<p>段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字段落 2 文字。</p>
`,readingTime:{minutes:.51,words:154},title:"密码加密的文章",icon:"lock",type:"article"}}],["/demo/layout.html",{loader:()=>Ve(()=>import("./layout.html-DpAjTYlR.js"),[]),meta:{date:1766391785e3,category:["指南"],tag:["布局"],excerpt:`<p>布局包括:</p>
<ul>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">导航栏</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">侧边栏</a></li>
<li><a href="https://theme-hope.vuejs.press/zh/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">页脚</a></li>
</ul>`,readingTime:{minutes:.53,words:159},title:"布局",icon:"object-group",order:2,type:"article"}}],["/demo/markdown.html",{loader:()=>Ve(()=>import("./markdown.html-B0cZVs6Q.js"),[]),meta:{date:1766391785e3,category:["使用指南"],tag:["Markdown"],excerpt:`<p>VuePress 主要从 Markdown 文件生成页面。因此，你可以使用它轻松生成文档或博客站点。</p>
<p>你需要创建并编写 Markdown，以便 VuePress 可以根据文件结构将它们转换为不同的页面。</p>
`,readingTime:{minutes:3.13,words:938},title:"Markdown 展示",icon:"fa6-brands:markdown",order:2,type:"article"}}],["/demo/page.html",{loader:()=>Ve(()=>import("./page.html-JWAOAT6j.js"),[]),meta:{author:"superxuan",date:15778368e5,category:["使用指南"],tag:["页面配置","使用指南"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`<p><code>more</code> 注释之前的内容被视为文章摘要。</p>
`,readingTime:{minutes:1.76,words:529},title:"页面配置",icon:"file",order:3,type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/1sjk.html",{loader:()=>Ve(()=>import("./1sjk.html-Ce0VLkaM.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`
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
</ul>`,readingTime:{minutes:10.13,words:3039},title:"数据库概览1",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/2sjk.html",{loader:()=>Ve(()=>import("./2sjk.html-YawSNIqS.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover2.jpg",excerpt:`
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
</ul>`,readingTime:{minutes:17.33,words:5200},title:"数据库概览2",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/3.sjk.html",{loader:()=>Ve(()=>import("./3.sjk.html-CBgEO-Zo.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据库"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h2>数据库定义语言（DDL）</h2>
<h3>数据库操作</h3>
<p>我们可以通过<code>create database</code>来创建一个数据库：</p>
<div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-sql"><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">create</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> database</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> 数据库名</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:20.58,words:6174},title:"数据库概览3",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/javaweb.html",{loader:()=>Ve(()=>import("./javaweb.html-B4FyYhr8.js"),[]),meta:{author:"superxuan",date:1767355436e3,category:["java web"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<h2>java web大题</h2>
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
<h3>3. "&lt;%!"和"%&gt;"之间声明的变量和"&lt;%"和"%&gt;之间声明的变量有什么不同？</h3>`,readingTime:{minutes:9.86,words:2959},title:"JavaWeb 学习笔记",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/linux.html",{loader:()=>Ve(()=>import("./linux.html-Drigm_qn.js"),[]),meta:{author:"superxuan",date:17665344e5,category:["linux"],sticky:!0,cover:"/assets/images/cover3.jpg",excerpt:`<p>以下是修改后的<strong>实验三</strong>详细实现步骤，以及实验一、二、四的原有内容（保持不变），所有命令均基于<strong>Bash环境</strong>和<strong>Vim编辑器</strong>编写，确保操作可复现。</p>
<hr>
<h1>实验一：Linux基础文件操作（无修改，保留原内容）</h1>
<h3>（1）显示当前用户所在位置</h3>
<div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code class="language-bash"><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">pwd</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">  # 打印当前工作目录</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div>`,readingTime:{minutes:7.75,words:2325},title:"linux基础文件操作",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/signal.html",{loader:()=>Ve(()=>import("./signal.html-pCQoWave.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["信号与系统"],sticky:!0,cover:"/assets/images/cover1.jpg",excerpt:`
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
<li><strong>离散时间信号</strong>：仅在离散瞬间有定义，定义域离散，离散点间隔可等可不等，等间隔时称为序列，记为$f(kT)$（$T$为间隔），简写为$f(k)$。</li>
<li><strong>模拟信号</strong>：时间和幅值均连续的信号；<strong>抽样信号</strong>：时间离散、幅值连续的信号；<strong>数字信号</strong>：时间和幅值均离散的信号。</li>
</ul>
</li>
<li><strong>按周期性划分</strong>：
<ul>
<li><strong>连续周期信号</strong>：满足$f(t) = f(t + mT)$（$m = 0,\\pm1,\\pm2,\\dots$），$T$为周期，如$\\sin2t$。两连续周期信号之和为周期信号的充要条件是周期比为有理数。</li>
<li><strong>离散周期信号</strong>：满足$f(k) = f(k + mN)$（$m = 0,\\pm1,\\pm2,\\dots$），$N$为周期。正弦序列$\\sin(\\beta k)$为周期序列的条件是$2\\pi/\\beta$为有理数，周期为使$N = M(2\\pi/\\beta)$（$M$为整数）的最小$N$。</li>
</ul>
</li>
<li><strong>按能量功率划分</strong>：
<ul>
<li><strong>能量信号</strong>：能量$E&lt;\\infty$、功率$P = 0$，如时限非周期信号。连续信号能量$E=\\int_{-\\infty}<sup>{\\infty}|f(t)|</sup>2dt$，离散信号能量$E=\\sum_{k=-\\infty}<sup>{\\infty}|f(k)|</sup>2$。</li>
<li><strong>功率信号</strong>：功率$P&lt;\\infty$、能量$E=\\infty$，如周期信号。连续信号功率$P=\\lim_{T\\rightarrow\\infty}\\frac{1}{2T}\\int_{-T}<sup>{T}|f(t)|</sup>2dt$，离散信号功率$P=\\lim_{N\\rightarrow\\infty}\\frac{1}{2N + 1}\\sum_{k=-N}<sup>{N}|f(k)|</sup>2$。</li>
<li><strong>非能量非功率信号</strong>：如$t\\varepsilon(t)$、$e^t$。</li>
</ul>
</li>
<li><strong>其他分类</strong>：
<ul>
<li><strong>一维/多维信号</strong>：一维信号仅含一个自变量（如语音信号），多维信号含多个自变量（如图像信号）。</li>
<li><strong>实/复信号</strong>：实信号取值为实数，复信号取值为复数（如$e^{j\\omega t}$）。</li>
<li><strong>因果/反因果信号</strong>：因果信号$t&lt;0$时为0（如$\\varepsilon(t)$），反因果信号$t&gt;0$时为0。</li>
</ul>
</li>
</ul>
</li>
<li><strong>典型确定性信号</strong>
<ul>
<li><strong>指数信号</strong>：$f(t)=Ke^{at}$，$a$为实常数。$a&lt;0$时指数衰减，$a = 0$时为直流信号，$a&gt;0$时指数增长。单边指数信号$f(t)=Ke^{at}\\varepsilon(t)$，时间常数$\\tau=-1/a$（$a&lt;0$时），反映衰减速度。</li>
<li><strong>正弦信号</strong>：$f(t)=K\\sin(\\omega t+\\varphi)$，$K$为振幅，$\\omega$为角频率（$\\omega = 2\\pi f$，$f$为频率），$\\varphi$为初相，周期$T = 2\\pi/\\omega$。衰减正弦信号$f(t)=Ke^{at}\\sin(\\omega t+\\varphi)\\varepsilon(t)$（$a&lt;0$）。</li>
<li><strong>复指数信号</strong>：$f(t)=Ke^{st}$（$s=\\sigma + j\\omega$为复频率），可分解为$K e^{\\sigma t}\\cos(\\omega t)+jK e^{\\sigma t}\\sin(\\omega t)$，便于信号分析运算。</li>
<li><strong>抽样信号</strong>：$Sa(t)=\\frac{\\sin t}{t}$，性质包括$Sa(0)=1$、$Sa(\\pm n\\pi)=0$（$n$为整数）、$\\int_{-\\infty}^{\\infty}Sa(t)dt=\\pi$等。</li>
</ul>
</li>
<li><strong>信号基本运算</strong>
<ul>
<li><strong>加减与相乘</strong>：同一时刻信号值对应运算，如$f(t)=f_1(t)+f_2(t)$、$f(k)=f_1(k)f_2(k)$。</li>
<li><strong>时间变换</strong>：
<ul>
<li><strong>反转</strong>：$f(t)\\rightarrow f(-t)$、$f(k)\\rightarrow f(-k)$，图形以纵轴反转180°。</li>
<li><strong>平移</strong>：$f(t)\\rightarrow f(t - t_0)$（$t_0&gt;0$右移，$t_0&lt;0$左移）、$f(k)\\rightarrow f(k - k_0)$（$k_0&gt;0$右移，$k_0&lt;0$左移）。</li>
<li><strong>尺度变换</strong>：$f(t)\\rightarrow f(at)$（$a&gt;1$压缩，$0&lt;a&lt;1$扩展），离散信号因易丢失信息，一般不做尺度变换。</li>
<li><strong>混合运算</strong>：需注意变换相对$t$（或$k$）进行，正向运算先平移后反转/展缩，逆运算反之，如$f(2 - t)$可先$t\\rightarrow t + 2$左移，再$t\\rightarrow -t$反转。</li>
</ul>
</li>
<li><strong>微分与积分</strong>：连续信号微分$f'(t)=\\lim_{\\Delta t\\rightarrow0}\\frac{f(t+\\Delta t)-f(t)}{\\Delta t}$，积分$\\int_{-\\infty}^{t}f(\\tau)d\\tau$；离散信号差分（类似微分）、求和（类似积分）。</li>
</ul>
</li>
</ol>`,readingTime:{minutes:31.37,words:9412},title:"信号与线性系统",icon:"pen-to-square",type:"article"}}],["/posts/%E5%85%B6%E4%BB%96/web.html",{loader:()=>Ve(()=>import("./web.html-BvKiBDi_.js"),[]),meta:{author:"superxuan",date:17663616e5,category:["网络"],sticky:!0,cover:"/assets/images/cover2.jpg",excerpt:`
<h3>1. 路由器配置模式及切换</h3>
<ul>
<li><strong>用户模式</strong>：提示符<code>&gt;</code>，基础查看权限</li>
<li><strong>特权模式</strong>：输入<code>enable</code>从用户模式进入，提示符<code>#</code>，可查看设备完整配置</li>
<li><strong>全局配置模式</strong>：特权模式输入<code>configure terminal</code>进入，提示符<code>(config)#</code>，可进行全局参数配置</li>
</ul>
<h3>2. show命令</h3>`,readingTime:{minutes:5.86,words:1758},title:"网络路由与交换技术",icon:"pen-to-square",type:"article"}}],["/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stack.html",{loader:()=>Ve(()=>import("./stack.html-BRVeV95h.js"),[]),meta:{author:"superxuan",date:1766448e6,category:["数据结构"],cover:"/assets/images/cover1.jpg",excerpt:"深入理解栈的基本概念、存储结构、基本操作和应用场景，掌握408考试中的重要考点。",readingTime:{minutes:4.33,words:1299},title:"栈",icon:"stack",type:"article"}}],["/posts/%E7%AE%97%E6%B3%95/%E4%B8%80%E4%BA%9B%E7%AE%97%E6%B3%95%E7%9A%84%E6%A8%A1%E6%9D%BF.html",{loader:()=>Ve(()=>import("./一些算法的模板.html-BFtybh06.js"),[]),meta:{date:177552e7,category:["算法"],tag:["算法","模板","Python","C++","Java"],excerpt:`
<p>本文汇总了常见的算法和语法模板，方便在编程竞赛和日常开发中快速使用。</p>
<h2>目录</h2>
<h3>一、算法部分</h3>
<ol>
<li><a href="#%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE">二分查找</a></li>
<li><a href="#%E7%B4%A0%E6%95%B0%E7%AD%9B%E6%B3%95">素数筛法</a></li>
<li><a href="#%E6%9A%B4%E5%8A%9B%E7%AE%97%E6%B3%95">暴力算法</a></li>
<li><a href="#%E5%B9%B6%E6%9F%A5%E9%9B%86">并查集</a></li>
<li><a href="#%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97">优先队列</a></li>
<li><a href="#%E6%89%93%E8%A1%A8%E6%B3%95">打表法</a></li>
<li><a href="#%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92">动态规划</a></li>
<li><a href="#dp%E4%B9%9D%E8%AE%B2">DP九讲</a></li>
<li><a href="#%E5%9B%BE%E8%AE%BA%E7%AE%97%E6%B3%95">图论算法</a></li>
<li><a href="#%E9%AB%98%E7%BB%B4%E5%87%B8%E5%8C%85">高维凸包</a></li>
<li><a href="#%E6%95%B0%E5%AD%A6%E7%9B%B8%E5%85%B3">数学相关</a></li>
</ol>`,readingTime:{minutes:45.81,words:13744},title:"常用算法与语法模板",type:"article"}}],["/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/1.html",{loader:()=>Ve(()=>import("./1.html-DlIS8AQM.js"),[]),meta:{date:1766495627e3,title:"",type:"article"}}],["/404.html",{loader:()=>Ve(()=>import("./404.html-CuOSuSiQ.js"),[]),meta:{title:""}}],["/posts/%E5%85%B6%E4%BB%96/",{loader:()=>Ve(()=>import("./index.html-CQ2tLbMb.js"),[]),meta:{title:"其他"}}],["/posts/",{loader:()=>Ve(()=>import("./index.html-Bi2_K_Ft.js"),[]),meta:{title:"Posts"}}],["/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>Ve(()=>import("./index.html-D_6aImTK.js"),[]),meta:{title:"数据结构"}}],["/posts/%E7%AE%97%E6%B3%95/",{loader:()=>Ve(()=>import("./index.html-iqZv2F02.js"),[]),meta:{title:"算法"}}],["/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/",{loader:()=>Ve(()=>import("./index.html-BAssu4vu.js"),[]),meta:{title:"考研数学"}}],["/category/",{loader:()=>Ve(()=>import("./index.html-CNdPVMOd.js"),[]),meta:{title:"分类",index:!1}}],["/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>Ve(()=>import("./index.html-Dg9QP7me.js"),[]),meta:{title:"使用指南 分类",index:!1}}],["/category/%E6%8C%87%E5%8D%97/",{loader:()=>Ve(()=>import("./index.html-D00DDxZP.js"),[]),meta:{title:"指南 分类",index:!1}}],["/category/%E6%95%B0%E6%8D%AE%E5%BA%93/",{loader:()=>Ve(()=>import("./index.html-C7L8Z3ky.js"),[]),meta:{title:"数据库 分类",index:!1}}],["/category/java-web/",{loader:()=>Ve(()=>import("./index.html-CmVR2GMI.js"),[]),meta:{title:"java web 分类",index:!1}}],["/category/linux/",{loader:()=>Ve(()=>import("./index.html-CBjNs6st.js"),[]),meta:{title:"linux 分类",index:!1}}],["/category/%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F/",{loader:()=>Ve(()=>import("./index.html-D1VwcLNa.js"),[]),meta:{title:"信号与系统 分类",index:!1}}],["/category/%E7%BD%91%E7%BB%9C/",{loader:()=>Ve(()=>import("./index.html-Dv96XgMX.js"),[]),meta:{title:"网络 分类",index:!1}}],["/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/",{loader:()=>Ve(()=>import("./index.html-CwI3YID7.js"),[]),meta:{title:"数据结构 分类",index:!1}}],["/category/%E7%AE%97%E6%B3%95/",{loader:()=>Ve(()=>import("./index.html-Cu7SoymJ.js"),[]),meta:{title:"算法 分类",index:!1}}],["/tag/",{loader:()=>Ve(()=>import("./index.html-l0_yvLmZ.js"),[]),meta:{title:"标签",index:!1}}],["/tag/%E7%A6%81%E7%94%A8/",{loader:()=>Ve(()=>import("./index.html-DCULQr6S.js"),[]),meta:{title:"标签: 禁用",index:!1}}],["/tag/%E5%8A%A0%E5%AF%86/",{loader:()=>Ve(()=>import("./index.html-LcTCmP_H.js"),[]),meta:{title:"标签: 加密",index:!1}}],["/tag/%E5%B8%83%E5%B1%80/",{loader:()=>Ve(()=>import("./index.html-DOch6g7t.js"),[]),meta:{title:"标签: 布局",index:!1}}],["/tag/markdown/",{loader:()=>Ve(()=>import("./index.html-DZ_ADJjT.js"),[]),meta:{title:"标签: Markdown",index:!1}}],["/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/",{loader:()=>Ve(()=>import("./index.html-8y-QbC51.js"),[]),meta:{title:"标签: 页面配置",index:!1}}],["/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/",{loader:()=>Ve(()=>import("./index.html-BsrAQw4a.js"),[]),meta:{title:"标签: 使用指南",index:!1}}],["/tag/%E7%AE%97%E6%B3%95/",{loader:()=>Ve(()=>import("./index.html-BQLmCAaT.js"),[]),meta:{title:"标签: 算法",index:!1}}],["/tag/%E6%A8%A1%E6%9D%BF/",{loader:()=>Ve(()=>import("./index.html-CJDlQrOo.js"),[]),meta:{title:"标签: 模板",index:!1}}],["/tag/python/",{loader:()=>Ve(()=>import("./index.html-ClxPYP_X.js"),[]),meta:{title:"标签: Python",index:!1}}],["/tag/c__/",{loader:()=>Ve(()=>import("./index.html-BO9hBjK8.js"),[]),meta:{title:"标签: C++",index:!1}}],["/tag/java/",{loader:()=>Ve(()=>import("./index.html-DPBQXMfp.js"),[]),meta:{title:"标签: Java",index:!1}}],["/article/",{loader:()=>Ve(()=>import("./index.html-4H75kujU.js"),[]),meta:{title:"文章",index:!1}}],["/star/",{loader:()=>Ve(()=>import("./index.html-D5XKCtH1.js"),[]),meta:{title:"星标",index:!1}}],["/timeline/",{loader:()=>Ve(()=>import("./index.html-mksk_vu3.js"),[]),meta:{title:"时间轴",index:!1}}]]);/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ps=typeof document<"u";function Ag(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function ay(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ag(t.default)}const ft=Object.assign;function Zl(t,e){const n={};for(const i in e){const r=e[i];n[i]=Qn(r)?r.map(t):t(r)}return n}const ma=()=>{},Qn=Array.isArray;function dh(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const wg=/#/g,oy=/&/g,ly=/\//g,cy=/=/g,uy=/\?/g,Cg=/\+/g,fy=/%5B/g,dy=/%5D/g,Rg=/%5E/g,hy=/%60/g,Pg=/%7B/g,py=/%7C/g,Lg=/%7D/g,my=/%20/g;function Lf(t){return t==null?"":encodeURI(""+t).replace(py,"|").replace(fy,"[").replace(dy,"]")}function gy(t){return Lf(t).replace(Pg,"{").replace(Lg,"}").replace(Rg,"^")}function Jc(t){return Lf(t).replace(Cg,"%2B").replace(my,"+").replace(wg,"%23").replace(oy,"%26").replace(hy,"`").replace(Pg,"{").replace(Lg,"}").replace(Rg,"^")}function vy(t){return Jc(t).replace(cy,"%3D")}function _y(t){return Lf(t).replace(wg,"%23").replace(uy,"%3F")}function xy(t){return _y(t).replace(ly,"%2F")}function ba(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const yy=/\/$/,Sy=t=>t.replace(yy,"");function Jl(t,e,n="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return l=o>=0&&l>o?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,o>0?o:e.length),r=t(s.slice(1))),o>=0&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=Ty(i??e,n),{fullPath:i+s+a,path:i,query:r,hash:ba(a)}}function by(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function hh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Ey(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Ls(e.matched[i],n.matched[r])&&Dg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ls(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Dg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!My(t[n],e[n]))return!1;return!0}function My(t,e){return Qn(t)?ph(t,e):Qn(e)?ph(e,t):t?.valueOf()===e?.valueOf()}function ph(t,e){return Qn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function Ty(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Li={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Qc=(function(t){return t.pop="pop",t.push="push",t})({}),Ql=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Ay(t){if(!t)if(ps){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Sy(t)}const wy=/^[^#]+#/;function Cy(t,e){return t.replace(wy,"#")+e}function Ry(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const yl=()=>({left:window.scrollX,top:window.scrollY});function Py(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Ry(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function mh(t,e){return(history.state?history.state.position-e:-1)+t}const eu=new Map;function Ly(t,e){eu.set(t,e)}function Dy(t){const e=eu.get(t);return eu.delete(t),e}function Iy(t){return typeof t=="string"||t&&typeof t=="object"}function Ig(t){return typeof t=="string"||typeof t=="symbol"}let Ft=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Ng=Symbol("");Ft.MATCHER_NOT_FOUND+"",Ft.NAVIGATION_GUARD_REDIRECT+"",Ft.NAVIGATION_ABORTED+"",Ft.NAVIGATION_CANCELLED+"",Ft.NAVIGATION_DUPLICATED+"";function Ds(t,e){return ft(new Error,{type:t,[Ng]:!0},e)}function Mi(t,e){return t instanceof Error&&Ng in t&&(e==null||!!(t.type&e))}const Ny=["params","query","hash"];function Uy(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Ny)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Fy(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Cg," "),s=r.indexOf("="),a=ba(s<0?r:r.slice(0,s)),o=s<0?null:ba(r.slice(s+1));if(a in e){let l=e[a];Qn(l)||(l=e[a]=[l]),l.push(o)}else e[a]=o}return e}function gh(t){let e="";for(let n in t){const i=t[n];if(n=vy(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Qn(i)?i.map(r=>r&&Jc(r)):[i&&Jc(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Oy(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Qn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const By=Symbol(""),vh=Symbol(""),Sl=Symbol(""),Df=Symbol(""),tu=Symbol("");function Qs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function cr(t,e,n,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=d=>{d===!1?l(Ds(Ft.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):Iy(d)?l(Ds(Ft.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(a&&i.enterCallbacks[r]===a&&typeof d=="function"&&a.push(d),o())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ec(t,e,n,i,r=s=>s()){const s=[];for(const a of t)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(Ag(l)){const c=(l.__vccOpts||l)[e];c&&s.push(cr(c,n,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=ay(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&cr(d,n,i,a,o,r)()}))}}return s}function ky(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(t.matched.find(c=>Ls(c,o))?i.push(o):n.push(o));const l=t.matched[a];l&&(e.matched.find(c=>Ls(c,l))||r.push(l))}return[n,i,r]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Vy=()=>location.protocol+"//"+location.host;function Ug(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,o=r.slice(a);return o[0]!=="/"&&(o="/"+o),hh(o,"")}return hh(n,t)+i+r}function Hy(t,e,n,i){let r=[],s=[],a=null;const o=({state:d})=>{const h=Ug(t,location),v=n.value,_=e.value;let g=0;if(d){if(n.value=h,e.value=d,a&&a===v){a=null;return}g=_?d.position-_.position:0}else i(h);r.forEach(m=>{m(n.value,v,{delta:g,type:Qc.pop,direction:g?g>0?Ql.forward:Ql.back:Ql.unknown})})};function l(){a=n.value}function c(d){r.push(d);const h=()=>{const v=r.indexOf(d);v>-1&&r.splice(v,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(ft({},d.state,{scroll:yl()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",o),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",o),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function _h(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?yl():null}}function zy(t){const{history:e,location:n}=window,i={value:Ug(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:Vy()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function a(l,c){s(l,ft({},e.state,_h(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function o(l,c){const u=ft({},r.value,e.state,{forward:l,scroll:yl()});s(u.current,u,!0),s(l,ft({},_h(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function Gy(t){t=Ay(t);const e=zy(t),n=Hy(t,e.state,e.location,e.replace);function i(s,a=!0){a||n.pauseListeners(),history.go(s)}const r=ft({location:"",base:t,go:i,createHref:Cy.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let Or=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var zt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(zt||{});const Wy={type:Or.Static,value:""},$y=/[a-zA-Z0-9_]/;function Xy(t){if(!t)return[[]];if(t==="/")return[[Wy]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=zt.Static,i=n;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(n===zt.Static?s.push({type:Or.Static,value:c}):n===zt.Param||n===zt.ParamRegExp||n===zt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:Or.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;o<t.length;){if(l=t[o++],l==="\\"&&n!==zt.ParamRegExp){i=n,n=zt.EscapeNext;continue}switch(n){case zt.Static:l==="/"?(c&&f(),a()):l===":"?(f(),n=zt.Param):d();break;case zt.EscapeNext:d(),n=i;break;case zt.Param:l==="("?n=zt.ParamRegExp:$y.test(l)?d():(f(),n=zt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case zt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=zt.ParamRegExpEnd:u+=l;break;case zt.ParamRegExpEnd:f(),n=zt.Static,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return n===zt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}const xh="[^/]+?",jy={sensitive:!1,strict:!1,start:!0,end:!0};var cn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(cn||{});const qy=/[.+*?^${}()[\]/\\]/g;function Yy(t,e){const n=ft({},jy,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[cn.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=cn.Segment+(n.sensitive?cn.BonusCaseSensitive:0);if(d.type===Or.Static)f||(r+="/"),r+=d.value.replace(qy,"\\$&"),h+=cn.Static;else if(d.type===Or.Param){const{value:v,repeatable:_,optional:g,regexp:m}=d;s.push({name:v,repeatable:_,optional:g});const E=m||xh;if(E!==xh){h+=cn.BonusCustomRegExp;try{`${E}`}catch(b){throw new Error(`Invalid custom RegExp for param "${v}" (${E}): `+b.message)}}let y=_?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;f||(y=g&&c.length<2?`(?:/${y})`:"/"+y),g&&(y+="?"),r+=y,h+=cn.Dynamic,g&&(h+=cn.BonusOptional),_&&(h+=cn.BonusRepeatable),E===".*"&&(h+=cn.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=cn.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const a=new RegExp(r,n.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",v=s[d-1];f[v.name]=h&&v.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===Or.Static)u+=h.value;else if(h.type===Or.Param){const{value:v,repeatable:_,optional:g}=h,m=v in c?c[v]:"";if(Qn(m)&&!_)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const E=Qn(m)?m.join("/"):m;if(!E)if(g)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${v}"`);u+=E}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Ky(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===cn.Static+cn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===cn.Static+cn.Segment?1:-1:0}function Fg(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=Ky(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(yh(i))return 1;if(yh(r))return-1}return r.length-i.length}function yh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Zy={strict:!1,end:!0,sensitive:!1};function Jy(t,e,n){const i=Yy(Xy(t.path),n),r=ft(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Qy(t,e){const n=[],i=new Map;e=dh(Zy,e);function r(f){return i.get(f)}function s(f,d,h){const v=!h,_=bh(f);_.aliasOf=h&&h.record;const g=dh(e,f),m=[_];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const w of b)m.push(bh(ft({},_,{components:h?h.record.components:_.components,path:w,aliasOf:h?h.record:_})))}let E,y;for(const b of m){const{path:w}=b;if(d&&w[0]!=="/"){const P=d.record.path,L=P[P.length-1]==="/"?"":"/";b.path=d.record.path+(w&&L+w)}if(E=Jy(b,d,g),h?h.alias.push(E):(y=y||E,y!==E&&y.alias.push(E),v&&f.name&&!Eh(E)&&a(f.name)),Og(E)&&l(E),_.children){const P=_.children;for(let L=0;L<P.length;L++)s(P[L],E,h&&h.children[L])}h=h||E}return y?()=>{a(y)}:ma}function a(f){if(Ig(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(a),d.alias.forEach(a))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return n}function l(f){const d=nS(f,n);n.splice(d,0,f),f.record.name&&!Eh(f)&&i.set(f.record.name,f)}function c(f,d){let h,v={},_,g;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Ds(Ft.MATCHER_NOT_FOUND,{location:f});g=h.record.name,v=ft(Sh(d.params,h.keys.filter(y=>!y.optional).concat(h.parent?h.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),f.params&&Sh(f.params,h.keys.map(y=>y.name))),_=h.stringify(v)}else if(f.path!=null)_=f.path,h=n.find(y=>y.re.test(_)),h&&(v=h.parse(_),g=h.record.name);else{if(h=d.name?i.get(d.name):n.find(y=>y.re.test(d.path)),!h)throw Ds(Ft.MATCHER_NOT_FOUND,{location:f,currentLocation:d});g=h.record.name,v=ft({},d.params,f.params),_=h.stringify(v)}const m=[];let E=h;for(;E;)m.unshift(E.record),E=E.parent;return{name:g,path:_,params:v,matched:m,meta:tS(m)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Sh(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function bh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:eS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function eS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Eh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function tS(t){return t.reduce((e,n)=>ft(e,n.meta),{})}function nS(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Fg(t,e[s])<0?i=s:n=s+1}const r=iS(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function iS(t){let e=t;for(;e=e.parent;)if(Og(e)&&Fg(t,e)===0)return e}function Og({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Mh(t){const e=wt(Sl),n=wt(Df),i=X(()=>{const l=Yn(t.to);return e.resolve(l)}),r=X(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Ls.bind(null,u));if(d>-1)return d;const h=Th(l[c-2]);return c>1&&Th(u)===h&&f[f.length-1].path!==h?f.findIndex(Ls.bind(null,l[c-2])):d}),s=X(()=>r.value>-1&&lS(n.params,i.value.params)),a=X(()=>r.value>-1&&r.value===n.matched.length-1&&Dg(n.params,i.value.params));function o(l={}){if(oS(l)){const c=e[Yn(t.replace)?"replace":"push"](Yn(t.to)).catch(ma);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:X(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}function rS(t){return t.length===1?t[0]:t}const sS=ye({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Mh,setup(t,{slots:e}){const n=Wr(Mh(t)),{options:i}=wt(Sl),r=X(()=>({[Ah(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ah(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&rS(e.default(n));return t.custom?s:p("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),aS=sS;function oS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function lS(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Qn(r)||r.length!==i.length||i.some((s,a)=>s.valueOf()!==r[a].valueOf()))return!1}return!0}function Th(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ah=(t,e,n)=>t??e??n,cS=ye({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=wt(tu),r=X(()=>t.route||i.value),s=wt(vh,0),a=X(()=>{let c=Yn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=X(()=>r.value.matched[a.value]);Kn(vh,X(()=>a.value+1)),Kn(By,o),Kn(tu,r);const l=et();return Pt(()=>[l.value,o.value,t.name],([c,u,f],[d,h,v])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Ls(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=o.value,d=f&&f.components[u];if(!d)return wh(n.default,{Component:d,route:c});const h=f.props[u],v=h?h===!0?c.params:typeof h=="function"?h(c):h:null,g=p(d,ft({},v,e,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return wh(n.default,{Component:g,route:c})||g}}});function wh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const uS=cS;function fS(t){const e=Qy(t.routes,t),n=t.parseQuery||Fy,i=t.stringifyQuery||gh,r=t.history,s=Qs(),a=Qs(),o=Qs(),l=Je(Li);let c=Li;ps&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Zl.bind(null,O=>""+O),f=Zl.bind(null,xy),d=Zl.bind(null,ba);function h(O,re){let oe,ae;return Ig(O)?(oe=e.getRecordMatcher(O),ae=re):ae=O,e.addRoute(ae,oe)}function v(O){const re=e.getRecordMatcher(O);re&&e.removeRoute(re)}function _(){return e.getRoutes().map(O=>O.record)}function g(O){return!!e.getRecordMatcher(O)}function m(O,re){if(re=ft({},re||l.value),typeof O=="string"){const D=Jl(n,O,re.path),G=e.resolve({path:D.path},re),ee=r.createHref(D.fullPath);return ft(D,G,{params:d(G.params),hash:ba(D.hash),redirectedFrom:void 0,href:ee})}let oe;if(O.path!=null)oe=ft({},O,{path:Jl(n,O.path,re.path).path});else{const D=ft({},O.params);for(const G in D)D[G]==null&&delete D[G];oe=ft({},O,{params:f(D)}),re.params=f(re.params)}const ae=e.resolve(oe,re),Pe=O.hash||"";ae.params=u(d(ae.params));const je=by(i,ft({},O,{hash:gy(Pe),path:ae.path})),R=r.createHref(je);return ft({fullPath:je,hash:Pe,query:i===gh?Oy(O.query):O.query||{}},ae,{redirectedFrom:void 0,href:R})}function E(O){return typeof O=="string"?Jl(n,O,l.value.path):ft({},O)}function y(O,re){if(c!==O)return Ds(Ft.NAVIGATION_CANCELLED,{from:re,to:O})}function b(O){return L(O)}function w(O){return b(ft(E(O),{replace:!0}))}function P(O,re){const oe=O.matched[O.matched.length-1];if(oe&&oe.redirect){const{redirect:ae}=oe;let Pe=typeof ae=="function"?ae(O,re):ae;return typeof Pe=="string"&&(Pe=Pe.includes("?")||Pe.includes("#")?Pe=E(Pe):{path:Pe},Pe.params={}),ft({query:O.query,hash:O.hash,params:Pe.path!=null?{}:O.params},Pe)}}function L(O,re){const oe=c=m(O),ae=l.value,Pe=O.state,je=O.force,R=O.replace===!0,D=P(oe,ae);if(D)return L(ft(E(D),{state:typeof D=="object"?ft({},Pe,D.state):Pe,force:je,replace:R}),re||oe);const G=oe;G.redirectedFrom=re;let ee;return!je&&Ey(i,ae,oe)&&(ee=Ds(Ft.NAVIGATION_DUPLICATED,{to:G,from:ae}),be(ae,ae,!0,!1)),(ee?Promise.resolve(ee):M(G,ae)).catch(ie=>Mi(ie)?Mi(ie,Ft.NAVIGATION_GUARD_REDIRECT)?ie:_e(ie):j(ie,G,ae)).then(ie=>{if(ie){if(Mi(ie,Ft.NAVIGATION_GUARD_REDIRECT))return L(ft({replace:R},E(ie.to),{state:typeof ie.to=="object"?ft({},Pe,ie.to.state):Pe,force:je}),re||G)}else ie=U(G,ae,!0,R,Pe);return I(G,ae,ie),ie})}function F(O,re){const oe=y(O,re);return oe?Promise.reject(oe):Promise.resolve()}function S(O){const re=ut.values().next().value;return re&&typeof re.runWithContext=="function"?re.runWithContext(O):O()}function M(O,re){let oe;const[ae,Pe,je]=ky(O,re);oe=ec(ae.reverse(),"beforeRouteLeave",O,re);for(const D of ae)D.leaveGuards.forEach(G=>{oe.push(cr(G,O,re))});const R=F.bind(null,O,re);return oe.push(R),se(oe).then(()=>{oe=[];for(const D of s.list())oe.push(cr(D,O,re));return oe.push(R),se(oe)}).then(()=>{oe=ec(Pe,"beforeRouteUpdate",O,re);for(const D of Pe)D.updateGuards.forEach(G=>{oe.push(cr(G,O,re))});return oe.push(R),se(oe)}).then(()=>{oe=[];for(const D of je)if(D.beforeEnter)if(Qn(D.beforeEnter))for(const G of D.beforeEnter)oe.push(cr(G,O,re));else oe.push(cr(D.beforeEnter,O,re));return oe.push(R),se(oe)}).then(()=>(O.matched.forEach(D=>D.enterCallbacks={}),oe=ec(je,"beforeRouteEnter",O,re,S),oe.push(R),se(oe))).then(()=>{oe=[];for(const D of a.list())oe.push(cr(D,O,re));return oe.push(R),se(oe)}).catch(D=>Mi(D,Ft.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function I(O,re,oe){o.list().forEach(ae=>S(()=>ae(O,re,oe)))}function U(O,re,oe,ae,Pe){const je=y(O,re);if(je)return je;const R=re===Li,D=ps?history.state:{};oe&&(ae||R?r.replace(O.fullPath,ft({scroll:R&&D&&D.scroll},Pe)):r.push(O.fullPath,Pe)),l.value=O,be(O,re,oe,R),_e()}let k;function H(){k||(k=r.listen((O,re,oe)=>{if(!st.listening)return;const ae=m(O),Pe=P(ae,st.currentRoute.value);if(Pe){L(ft(Pe,{replace:!0,force:!0}),ae).catch(ma);return}c=ae;const je=l.value;ps&&Ly(mh(je.fullPath,oe.delta),yl()),M(ae,je).catch(R=>Mi(R,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_CANCELLED)?R:Mi(R,Ft.NAVIGATION_GUARD_REDIRECT)?(L(ft(E(R.to),{force:!0}),ae).then(D=>{Mi(D,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&!oe.delta&&oe.type===Qc.pop&&r.go(-1,!1)}).catch(ma),Promise.reject()):(oe.delta&&r.go(-oe.delta,!1),j(R,ae,je))).then(R=>{R=R||U(ae,je,!1),R&&(oe.delta&&!Mi(R,Ft.NAVIGATION_CANCELLED)?r.go(-oe.delta,!1):oe.type===Qc.pop&&Mi(R,Ft.NAVIGATION_ABORTED|Ft.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(ae,je,R)}).catch(ma)}))}let $=Qs(),B=Qs(),W;function j(O,re,oe){_e(O);const ae=B.list();return ae.length?ae.forEach(Pe=>Pe(O,re,oe)):console.error(O),Promise.reject(O)}function de(){return W&&l.value!==Li?Promise.resolve():new Promise((O,re)=>{$.add([O,re])})}function _e(O){return W||(W=!O,H(),$.list().forEach(([re,oe])=>O?oe(O):re()),$.reset()),O}function be(O,re,oe,ae){const{scrollBehavior:Pe}=t;if(!ps||!Pe)return Promise.resolve();const je=!oe&&Dy(mh(O.fullPath,0))||(ae||!oe)&&history.state&&history.state.scroll||null;return xi().then(()=>Pe(O,re,je)).then(R=>R&&Py(R)).catch(R=>j(R,O,re))}const Oe=O=>r.go(O);let Ge;const ut=new Set,st={currentRoute:l,listening:!0,addRoute:h,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:g,getRoutes:_,resolve:m,options:t,push:b,replace:w,go:Oe,back:()=>Oe(-1),forward:()=>Oe(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:B.add,isReady:de,install(O){O.component("RouterLink",aS),O.component("RouterView",uS),O.config.globalProperties.$router=st,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Yn(l)}),ps&&!Ge&&l.value===Li&&(Ge=!0,b(r.location).catch(ae=>{}));const re={};for(const ae in Li)Object.defineProperty(re,ae,{get:()=>l.value[ae],enumerable:!0});O.provide(Sl,st),O.provide(Df,bm(re)),O.provide(tu,l);const oe=O.unmount;ut.add(O),O.unmount=function(){ut.delete(O),ut.size<1&&(c=Li,k&&k(),k=null,l.value=Li,Ge=!1,W=!1),oe()}}};function se(O){return O.reduce((re,oe)=>re.then(()=>S(oe)),Promise.resolve())}return st}function xr(){return wt(Sl)}function yi(t){return wt(Df)}var If=Symbol(""),Si=()=>{const t=wt(If);if(!t)throw new Error("useClientData() is called without provider.");return t},dS=()=>Si().pageComponent,hS=()=>Si().pageData,Bg=()=>Si().pageFrontmatter,pS=()=>Si().pageHead,kg=()=>Si().pageLang,mS=()=>Si().pageLayout,Vg=()=>Si().routeLocale,gS=()=>Si().routePath,vS=()=>Si().siteData,yr=Si,Pn=Bg,Nf=kg,bl=hS,nu=new Set,Yi=t=>{nu.add(t),ji(()=>{nu.delete(t)})},_S=Symbol(""),iu=Je(ry),Es=Je(sy),Hg=(t,e)=>{const n=q1(t,e);if(Es.value[n])return n;const i=encodeURI(n);if(Es.value[i])return i;const r=iu.value[n]||iu.value[i];return r||n},Bn=(t,e)=>{const{pathname:n,hashAndQueries:i}=Eg(t),r=Hg(n,e),s=r+i;return Es.value[r]?{...Es.value[r],path:s,notFound:!1}:{...Es.value["/404.html"],path:s,notFound:!0}},xS=(t,e)=>{const{pathname:n,hashAndQueries:i}=Eg(t);return Hg(n,e)+i},yS=t=>{if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)&&!(t.currentTarget&&t.currentTarget.getAttribute("target")?.match(/\b_blank\b/i)))return t.preventDefault(),!0},Gt=ye({name:"RouteLink",props:{to:{type:String,required:!0},active:Boolean,activeClass:{type:String,default:"route-link-active"}},slots:Object,setup(t,{slots:e}){const n=xr(),i=yi(),r=X(()=>t.to.startsWith("#")||t.to.startsWith("?")?t.to:`/myblog/${xS(t.to,i.path).substring(1)}`);return()=>p("a",{class:["route-link",{[t.activeClass]:t.active}],href:r.value,onClick:(s={})=>{yS(s)&&n.push(t.to).catch()}},e.default())}}),SS=ye({name:"AutoLink",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=Bs(t,"config"),i=yi(),r=vS(),s=X(()=>Ua(n.value.link)),a=X(()=>n.value.target||(s.value?"_blank":void 0)),o=X(()=>a.value==="_blank"),l=X(()=>!s.value&&!o.value),c=X(()=>n.value.rel||(o.value?"noopener noreferrer":null)),u=X(()=>n.value.ariaLabel??n.value.text),f=X(()=>{if(n.value.exact)return!1;const h=Object.keys(r.value.locales);return h.length?h.every(v=>v!==n.value.link):n.value.link!=="/"}),d=X(()=>l.value?n.value.activeMatch?(n.value.activeMatch instanceof RegExp?n.value.activeMatch:new RegExp(n.value.activeMatch,"u")).test(i.path):f.value?i.path.startsWith(n.value.link):i.path===n.value.link:!1);return()=>{const{before:h,after:v,default:_}=e,g=_?.(n.value)??[h?.(n.value),n.value.text,v?.(n.value)];return l.value?p(Gt,{class:"auto-link",to:n.value.link,active:d.value,"aria-label":u.value},()=>g):p("a",{class:"auto-link external-link",href:n.value.link,"aria-label":u.value,rel:c.value,target:a.value},g)}}}),Uf=ye({name:"ClientOnly",setup(t,e){const n=et(!1);return Ct(()=>{n.value=!0}),()=>n.value?e.slots.default?.():null}}),io=t=>{nu.forEach(e=>e(t))},zg=ye({name:"Content",props:{path:{type:String,required:!1,default:""}},setup(t){const e=dS(),n=X(()=>{if(!t.path)return e.value;const r=Bn(t.path);return vx(async()=>r.loader().then(({comp:s})=>s))}),i=Bg();return Pt(i,()=>{io("updated")},{deep:!0,flush:"post"}),()=>p(n.value,{onVnodeMounted:()=>{io("mounted")},onVnodeUpdated:()=>{io("updated")},onVnodeBeforeUnmount:()=>{io("beforeUnmount")}})}}),bS="Layout",ES="en-US",Tr=Wr({resolveLayouts:t=>t.reduce((e,n)=>({...e,...n.layouts}),{}),resolvePageHead:(t,e,n)=>{const i=vt(e.description)?e.description:n.description,r=[...Array.isArray(e.head)?e.head:[],...n.head,["title",{},t],["meta",{name:"description",content:i}]];return ey(r)},resolvePageHeadTitle:(t,e)=>[t.title,e.title].filter(n=>!!n).join(" | "),resolvePageLang:(t,e)=>t.lang||e.lang||ES,resolvePageLayout:(t,e)=>{const n=vt(t.frontmatter.layout)?t.frontmatter.layout:bS;if(!e[n])throw new Error(`[vuepress] Cannot resolve layout: ${n}`);return e[n]},resolveRouteLocale:(t,e)=>Y1(t,decodeURI(e)),resolveSiteLocaleData:({base:t,locales:e,...n},i)=>({...n,...e[i],head:[...e[i]?.head??[],...n.head]})}),kn=(t={})=>t,At=t=>ks(t)?t:`/myblog/${Tg(t)}`,MS=Object.defineProperty,TS=(t,e)=>{for(var n in e)MS(t,n,{get:e[n],enumerable:!0})},AS={};TS(AS,{COMPONENT_STATE_TYPE:()=>wS,INSPECTOR_ID:()=>CS,INSPECTOR_LABEL:()=>RS,INSPECTOR_NODES:()=>PS,INSPECTOR_STATE_SECTION_NAME:()=>LS,PLUGIN_ID:()=>Gg,PLUGIN_LABEL:()=>Ff});var Gg="org.vuejs.vuepress",Ff="VuePress",wS=Ff,CS=Gg,RS=Ff,Ch={id:"INTERNAL",label:"Internal",keys:["layouts","routes","redirects"]},Rh={id:"SITE",label:"Site",keys:["siteData","siteLocaleData"]},Ph={id:"ROUTE",label:"Route",keys:["routePath","routeLocale"]},Lh={id:"PAGE",label:"Page",keys:["pageData","pageFrontmatter","pageLang","pageHead","pageHeadTitle","pageLayout","pageComponent"]},PS={[Ch.id]:Ch,[Rh.id]:Rh,[Ph.id]:Ph,[Lh.id]:Lh},LS="State";const Dh=t=>typeof t=="number"?`${t}px`:t,Wg=({size:t=48,stroke:e=4,wrapper:n=!0,height:i=2*t})=>{const r=p("span",{style:`--loading-icon: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMidYMid' viewBox='25 25 50 50'%3E%3CanimateTransform attributeName='transform' type='rotate' dur='2s' keyTimes='0;1' repeatCount='indefinite' values='0;360'%3E%3C/animateTransform%3E%3Ccircle cx='50' cy='50' r='20' fill='none' stroke='currentColor' stroke-width='${e}' stroke-linecap='round'%3E%3Canimate attributeName='stroke-dasharray' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='1,200;90,200;1,200'%3E%3C/animate%3E%3Canimate attributeName='stroke-dashoffset' dur='1.5s' keyTimes='0;0.5;1' repeatCount='indefinite' values='0;-35px;-125px'%3E%3C/animate%3E%3C/circle%3E%3C/svg%3E");--icon-size: ${Dh(t)};display: inline-block;width: var(--icon-size);height: var(--icon-size);background-color: currentcolor;-webkit-mask-image: var(--loading-icon);mask-image: var(--loading-icon)`});return n?p("div",{style:`display: flex;align-items: center;justify-content: center;height: ${Dh(i)}`},r):r};Wg.displayName="LoadingIcon";const Of=(t,{slots:e})=>e.default(),$g=t=>typeof t<"u",Fo=t=>typeof t=="number",{isArray:zi}=Array,tl=(t,e)=>vt(t)&&t.startsWith(e),DS=(t,e)=>vt(t)&&t.endsWith(e),{entries:Hs}=Object,{keys:gr}=Object,Bf=t=>{if(t){if(typeof t=="number")return new Date(t);const e=Date.parse(t.toString());if(!Number.isNaN(e))return new Date(e)}return null},El=t=>tl(t,"/")&&t[1]!=="/",Xg=[...new Array(6)].map((t,e)=>`[vp-content] h${e+1}`).join(","),IS=(t,e=2)=>{if(e===!1)return[];const[n,i]=typeof e=="number"?[e,e]:e==="deep"?[2,6]:e,r=t.filter(a=>a.level>=n&&a.level<=i),s=[];e:for(let a=0;a<r.length;a++){const o=r[a];if(a===0)s.push(o);else{for(let l=a-1;l>=0;l--){const c=r[l];if(c.level<o.level){c.children.push(o);continue e}}s.push(o)}}return s},NS=(t,e=[])=>{let n;if(e.length){const i=t.cloneNode(!0);i.querySelectorAll(e.join(",")).forEach(r=>{r.remove()}),n=i.textContent||""}else n=t.textContent||"";return n.trim()},US=(t=Xg,e=[])=>Array.from(document.querySelectorAll(t)).filter(n=>n.id&&n.hasChildNodes()).map(n=>({element:n,title:NS(n,e),link:`#${n.id}`,slug:n.id,level:Number(n.tagName[1]),children:[]})),FS=({selector:t=Xg,levels:e=2,ignore:n=[]}={})=>IS(US(t,n),e),jg=t=>t.every(e=>e.type===qt?!0:e.type===fn?e.children==null||zi(e.children)&&jg(e.children):!1),Ms=t=>t==null?!0:zi(t)?jg(t):!1,Rn=(t,e)=>{const n=(e?._instance??qi())?.appContext.components;return n?t in n||_n(t)in n||Pa(_n(t))in n:!1},tc="message-container";class kf{elements;constructor(){this.elements={}}static get containerElement(){let e=document.getElementById(tc);return e||(e=document.createElement("div"),e.id=tc,document.body.appendChild(e),e)}getElement(e){return this.elements[e]}pop(e,n=2e3,i=!0){const r=Date.now(),s=document.createElement("div");return s.className="message-item move-in",s.innerHTML=e,kf.containerElement.appendChild(s),this.elements[r]=s,i&&s.addEventListener("click",()=>{this.close(r)}),n>0&&setTimeout(()=>{this.close(r)},n),r}close(e){if(e){const n=this.elements[e];n.classList.remove("move-in"),n.classList.add("move-out"),n.addEventListener("animationend",()=>{n.remove(),delete this.elements[e]})}else gr(this.elements).forEach(n=>{this.close(Number(n))})}destroy(){const e=document.getElementById(tc);e&&document.body.removeChild(e),this.elements={}}}const OS=t=>new Promise(e=>{setTimeout(e,t)}),BS=(t={})=>{const e=et([]);return Yi(n=>{e.value=n==="beforeUnmount"?[]:FS(it(t))}),e},kS=t=>{const e=Vg();return X(()=>it(t)[e.value]??{})},zs=kS;function Gs(t,e){return pf()?(T_(t,e),!0):!1}const nc=new WeakMap,VS=(...t)=>{var e;const n=t[0],i=(e=qi())===null||e===void 0?void 0:e.proxy,r=i??pf();if(r==null&&!Lm())throw new Error("injectLocal must be called in setup");return r&&nc.has(r)&&n in nc.get(r)?nc.get(r)[n]:wt(...t)},Ml=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const HS=t=>t!=null,zS=Object.prototype.toString,GS=t=>zS.call(t)==="[object Object]",Gi=()=>{};function qg(...t){if(t.length!==1)return Bs(...t);const e=t[0];return typeof e=="function"?gi(Tm(()=>({get:e,set:Gi}))):et(e)}function Vf(t,e){function n(...i){return new Promise((r,s)=>{Promise.resolve(t(()=>e.apply(this,i),{fn:e,thisArg:this,args:i})).then(r).catch(s)})}return n}const Yg=t=>t();function WS(t,e={}){let n,i,r=Gi;const s=l=>{clearTimeout(l),r(),r=Gi};let a;return l=>{const c=it(t),u=it(e.maxWait);return n&&s(n),c<=0||u!==void 0&&u<=0?(i&&(s(i),i=void 0),Promise.resolve(l())):new Promise((f,d)=>{r=e.rejectOnCancel?d:f,a=l,u&&!i&&(i=setTimeout(()=>{n&&s(n),i=void 0,f(a())},u)),n=setTimeout(()=>{i&&s(i),i=void 0,f(l())},c)})}}function $S(...t){let e=0,n,i=!0,r=Gi,s,a,o,l,c;!kt(t[0])&&typeof t[0]=="object"?{delay:a,trailing:o=!0,leading:l=!0,rejectOnCancel:c=!1}=t[0]:[a,o=!0,l=!0,c=!1]=t;const u=()=>{n&&(clearTimeout(n),n=void 0,r(),r=Gi)};return d=>{const h=it(a),v=Date.now()-e,_=()=>s=d();return u(),h<=0?(e=Date.now(),_()):(v>h?(e=Date.now(),(l||!i)&&_()):o&&(s=new Promise((g,m)=>{r=c?m:g,n=setTimeout(()=>{e=Date.now(),i=!0,g(_()),u()},Math.max(0,h-v))})),!l&&!n&&(n=setTimeout(()=>i=!0,h)),i=!1,s)}}function XS(t=Yg,e={}){const{initialState:n="active"}=e,i=qg(n==="active");function r(){i.value=!1}function s(){i.value=!0}const a=(...o)=>{i.value&&t(...o)};return{isActive:gi(i),pause:r,resume:s,eventFilter:a}}function jS(t){let e;function n(){return e||(e=t()),e}return n.reset=async()=>{const i=e;e=void 0,i&&await i},n}function Ih(t){return t.endsWith("rem")?Number.parseFloat(t)*16:Number.parseFloat(t)}function ga(t){return Array.isArray(t)?t:[t]}function Kg(t){return qi()}function Zg(t,e=200,n={}){return Vf(WS(e,n),t)}function Jg(t,e=200,n=!1,i=!0,r=!1){return Vf($S(e,n,i,r),t)}function qS(t,e,n={}){const{eventFilter:i=Yg,...r}=n;return Pt(t,Vf(i,e),r)}function YS(t,e,n={}){const{eventFilter:i,initialState:r="active",...s}=n,{eventFilter:a,pause:o,resume:l,isActive:c}=XS(i,{initialState:r});return{stop:qS(t,e,{...s,eventFilter:a}),pause:o,resume:l,isActive:c}}const KS=YS;function Ws(t,e=!0,n){Kg()?Ct(t,n):e?t():xi(t)}function ZS(t,e){Kg()&&ji(t,e)}function JS(t,e,n={}){const{immediate:i=!0,immediateCallback:r=!1}=n,s=Je(!1);let a;function o(){a&&(clearTimeout(a),a=void 0)}function l(){s.value=!1,o()}function c(...u){r&&t(),o(),s.value=!0,a=setTimeout(()=>{s.value=!1,a=void 0,t(...u)},it(e))}return i&&(s.value=!0,Ml&&c()),Gs(l),{isPending:$_(s),start:c,stop:l}}function ru(t=!1,e={}){const{truthyValue:n=!0,falsyValue:i=!1}=e,r=kt(t),s=Je(t);function a(o){if(arguments.length)return s.value=o,s.value;{const l=it(n);return s.value=s.value===l?it(i):l,s.value}}return r?a:[s,a]}function ei(t,e,n){return Pt(t,e,{...n,immediate:!0})}const Kt=Ml?window:void 0,Qg=Ml?window.document:void 0,e0=Ml?window.navigator:void 0;function wn(t){var e;const n=it(t);return(e=n?.$el)!==null&&e!==void 0?e:n}function _t(...t){const e=(i,r,s,a)=>(i.addEventListener(r,s,a),()=>i.removeEventListener(r,s,a)),n=X(()=>{const i=ga(it(t[0])).filter(r=>r!=null);return i.every(r=>typeof r!="string")?i:void 0});return ei(()=>{var i,r;return[(i=(r=n.value)===null||r===void 0?void 0:r.map(s=>wn(s)))!==null&&i!==void 0?i:[Kt].filter(s=>s!=null),ga(it(n.value?t[1]:t[0])),ga(Yn(n.value?t[2]:t[1])),it(n.value?t[3]:t[2])]},([i,r,s,a],o,l)=>{if(!i?.length||!r?.length||!s?.length)return;const c=GS(a)?{...a}:a,u=i.flatMap(f=>r.flatMap(d=>s.map(h=>e(f,d,h,c))));l(()=>{u.forEach(f=>f())})},{flush:"post"})}function QS(){const t=Je(!1),e=qi();return e&&Ct(()=>{t.value=!0},e),t}function $s(t){const e=QS();return X(()=>(e.value,!!t()))}function t0(t,e,n={}){const{window:i=Kt,...r}=n;let s;const a=$s(()=>i&&"MutationObserver"in i),o=()=>{s&&(s.disconnect(),s=void 0)},l=Pt(X(()=>{const f=ga(it(t)).map(wn).filter(HS);return new Set(f)}),f=>{o(),a.value&&f.size&&(s=new MutationObserver(e),f.forEach(d=>s.observe(d,r)))},{immediate:!0,flush:"post"}),c=()=>s?.takeRecords(),u=()=>{l(),o()};return Gs(u),{isSupported:a,stop:u,takeRecords:c}}function eb(t,e,n={}){const{window:i=Kt,document:r=i?.document,flush:s="sync"}=n;if(!i||!r)return Gi;let a;const o=u=>{a?.(),a=u},l=xf(()=>{const u=wn(t);if(u){const{stop:f}=t0(r,d=>{d.map(h=>[...h.removedNodes]).flat().some(h=>h===u||h.contains(u))&&e(d)},{window:i,childList:!0,subtree:!0});o(f)}},{flush:s}),c=()=>{l(),o()};return Gs(c),c}const tb=Symbol("vueuse-ssr-width");function nb(){const t=Lm()?VS(tb,null):null;return typeof t=="number"?t:void 0}function Hf(t,e={}){const{window:n=Kt,ssrWidth:i=nb()}=e,r=$s(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function"),s=Je(typeof i=="number"),a=Je(),o=Je(!1),l=c=>{o.value=c.matches};return xf(()=>{if(s.value){s.value=!r.value,o.value=it(t).split(",").some(c=>{const u=c.includes("not all"),f=c.match(/\(\s*min-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/),d=c.match(/\(\s*max-width:\s*(-?\d+(?:\.\d*)?[a-z]+\s*)\)/);let h=!!(f||d);return f&&h&&(h=i>=Ih(f[1])),d&&h&&(h=i<=Ih(d[1])),u?!h:h});return}r.value&&(a.value=n.matchMedia(it(t)),o.value=a.value.matches)}),_t(a,"change",l,{passive:!0}),X(()=>o.value)}function Nh(t,e={}){const{controls:n=!1,navigator:i=e0}=e,r=$s(()=>i&&"permissions"in i),s=Je(),a=typeof t=="string"?{name:t}:t,o=Je(),l=()=>{var u,f;o.value=(u=(f=s.value)===null||f===void 0?void 0:f.state)!==null&&u!==void 0?u:"prompt"};_t(s,"change",l,{passive:!0});const c=jS(async()=>{if(r.value){if(!s.value)try{s.value=await i.permissions.query(a)}catch{s.value=void 0}finally{l()}if(n)return nt(s.value)}});return c(),n?{state:o,isSupported:r,query:c}:o}function ib(t={}){const{navigator:e=e0,read:n=!1,source:i,copiedDuring:r=1500,legacy:s=!1}=t,a=$s(()=>e&&"clipboard"in e),o=Nh("clipboard-read"),l=Nh("clipboard-write"),c=X(()=>a.value||s),u=Je(""),f=Je(!1),d=JS(()=>f.value=!1,r,{immediate:!1});async function h(){let E=!(a.value&&m(o.value));if(!E)try{u.value=await e.clipboard.readText()}catch{E=!0}E&&(u.value=g())}c.value&&n&&_t(["copy","cut"],h,{passive:!0});async function v(E=it(i)){if(c.value&&E!=null){let y=!(a.value&&m(l.value));if(!y)try{await e.clipboard.writeText(E)}catch{y=!0}y&&_(E),u.value=E,f.value=!0,d.start()}}function _(E){const y=document.createElement("textarea");y.value=E,y.style.position="absolute",y.style.opacity="0",y.setAttribute("readonly",""),document.body.appendChild(y),y.select(),document.execCommand("copy"),y.remove()}function g(){var E,y,b;return(E=(y=document)===null||y===void 0||(b=y.getSelection)===null||b===void 0||(b=b.call(y))===null||b===void 0?void 0:b.toString())!==null&&E!==void 0?E:""}function m(E){return E==="granted"||E==="prompt"}return{isSupported:c,text:gi(u),copied:gi(f),copy:v}}const ro=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},so="__vueuse_ssr_handlers__",rb=sb();function sb(){return so in ro||(ro[so]=ro[so]||{}),ro[so]}function ab(t,e){return rb[t]||e}function ob(t){return Hf("(prefers-color-scheme: dark)",t)}function lb(t){return t==null?"any":t instanceof Set?"set":t instanceof Map?"map":t instanceof Date?"date":typeof t=="boolean"?"boolean":typeof t=="string"?"string":typeof t=="object"?"object":Number.isNaN(t)?"any":"number"}const cb={boolean:{read:t=>t==="true",write:t=>String(t)},object:{read:t=>JSON.parse(t),write:t=>JSON.stringify(t)},number:{read:t=>Number.parseFloat(t),write:t=>String(t)},any:{read:t=>t,write:t=>String(t)},string:{read:t=>t,write:t=>String(t)},map:{read:t=>new Map(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t.entries()))},set:{read:t=>new Set(JSON.parse(t)),write:t=>JSON.stringify(Array.from(t))},date:{read:t=>new Date(t),write:t=>t.toISOString()}},Uh="vueuse-storage";function Fa(t,e,n,i={}){var r;const{flush:s="pre",deep:a=!0,listenToStorageChanges:o=!0,writeDefaults:l=!0,mergeDefaults:c=!1,shallow:u,window:f=Kt,eventFilter:d,onError:h=H=>{console.error(H)},initOnMounted:v}=i,_=(u?Je:et)(typeof e=="function"?e():e),g=X(()=>it(t));if(!n)try{n=ab("getDefaultStorage",()=>Kt?.localStorage)()}catch(H){h(H)}if(!n)return _;const m=it(e),E=lb(m),y=(r=i.serializer)!==null&&r!==void 0?r:cb[E],{pause:b,resume:w}=KS(_,H=>M(H),{flush:s,deep:a,eventFilter:d});Pt(g,()=>U(),{flush:s});let P=!1;const L=H=>{v&&!P||U(H)},F=H=>{v&&!P||k(H)};f&&o&&(n instanceof Storage?_t(f,"storage",L,{passive:!0}):_t(f,Uh,F)),v?Ws(()=>{P=!0,U()}):U();function S(H,$){if(f){const B={key:g.value,oldValue:H,newValue:$,storageArea:n};f.dispatchEvent(n instanceof Storage?new StorageEvent("storage",B):new CustomEvent(Uh,{detail:B}))}}function M(H){try{const $=n.getItem(g.value);if(H==null)S($,null),n.removeItem(g.value);else{const B=y.write(H);$!==B&&(n.setItem(g.value,B),S($,B))}}catch($){h($)}}function I(H){const $=H?H.newValue:n.getItem(g.value);if($==null)return l&&m!=null&&n.setItem(g.value,y.write(m)),m;if(!H&&c){const B=y.read($);return typeof c=="function"?c(B,m):E==="object"&&!Array.isArray(B)?{...m,...B}:B}else return typeof $!="string"?$:y.read($)}function U(H){if(!(H&&H.storageArea!==n)){if(H&&H.key==null){_.value=m;return}if(!(H&&H.key!==g.value)){b();try{const $=y.write(_.value);(H===void 0||H?.newValue!==$)&&(_.value=I(H))}catch($){h($)}finally{H?xi(w):w()}}}}function k(H){U(H.detail)}return _}function ub(t,e,n={}){const{window:i=Kt,...r}=n;let s;const a=$s(()=>i&&"ResizeObserver"in i),o=()=>{s&&(s.disconnect(),s=void 0)},l=Pt(X(()=>{const u=it(t);return Array.isArray(u)?u.map(f=>wn(f)):[wn(u)]}),u=>{if(o(),a.value&&i){s=new ResizeObserver(e);for(const f of u)f&&s.observe(f,r)}},{immediate:!0,flush:"post"}),c=()=>{o(),l()};return Gs(c),{isSupported:a,stop:c}}function fb(t,e={}){const{delayEnter:n=0,delayLeave:i=0,triggerOnRemoval:r=!1,window:s=Kt}=e,a=Je(!1);let o;const l=c=>{const u=c?n:i;o&&(clearTimeout(o),o=void 0),u?o=setTimeout(()=>a.value=c,u):a.value=c};return s&&(_t(t,"mouseenter",()=>l(!0),{passive:!0}),_t(t,"mouseleave",()=>l(!1),{passive:!0}),r&&eb(X(()=>wn(t)),()=>l(!1))),a}function db(t,e={width:0,height:0},n={}){const{window:i=Kt,box:r="content-box"}=n,s=X(()=>{var f;return(f=wn(t))===null||f===void 0||(f=f.namespaceURI)===null||f===void 0?void 0:f.includes("svg")}),a=Je(e.width),o=Je(e.height),{stop:l}=ub(t,([f])=>{const d=r==="border-box"?f.borderBoxSize:r==="content-box"?f.contentBoxSize:f.devicePixelContentBoxSize;if(i&&s.value){const h=wn(t);if(h){const v=h.getBoundingClientRect();a.value=v.width,o.value=v.height}}else if(d){const h=ga(d);a.value=h.reduce((v,{inlineSize:_})=>v+_,0),o.value=h.reduce((v,{blockSize:_})=>v+_,0)}else a.value=f.contentRect.width,o.value=f.contentRect.height},n);Ws(()=>{const f=wn(t);f&&(a.value="offsetWidth"in f?f.offsetWidth:e.width,o.value="offsetHeight"in f?f.offsetHeight:e.height)});const c=Pt(()=>wn(t),f=>{a.value=f?e.width:0,o.value=f?e.height:0});function u(){l(),c()}return{width:a,height:o,stop:u}}const Fh=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function Tl(t,e={}){const{document:n=Qg,autoExit:i=!1}=e,r=X(()=>{var E;return(E=wn(t))!==null&&E!==void 0?E:n?.documentElement}),s=Je(!1),a=X(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(E=>n&&E in n||r.value&&E in r.value)),o=X(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(E=>n&&E in n||r.value&&E in r.value)),l=X(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(E=>n&&E in n||r.value&&E in r.value)),c=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(E=>n&&E in n),u=$s(()=>r.value&&n&&a.value!==void 0&&o.value!==void 0&&l.value!==void 0),f=()=>c?n?.[c]===r.value:!1,d=()=>{if(l.value){if(n&&n[l.value]!=null)return n[l.value];{const E=r.value;if(E?.[l.value]!=null)return!!E[l.value]}}return!1};async function h(){if(!(!u.value||!s.value)){if(o.value)if(n?.[o.value]!=null)await n[o.value]();else{const E=r.value;E?.[o.value]!=null&&await E[o.value]()}s.value=!1}}async function v(){if(!u.value||s.value)return;d()&&await h();const E=r.value;a.value&&E?.[a.value]!=null&&(await E[a.value](),s.value=!0)}async function _(){await(s.value?h():v())}const g=()=>{const E=d();(!E||E&&f())&&(s.value=E)},m={capture:!1,passive:!0};return _t(n,Fh,g,m),_t(()=>wn(r),Fh,g,m),Ws(g,!1),i&&Gs(h),{isSupported:u,isFullscreen:s,enter:v,exit:h,toggle:_}}function ic(t){return typeof Window<"u"&&t instanceof Window?t.document.documentElement:typeof Document<"u"&&t instanceof Document?t.documentElement:t}const Oh=1;function hb(t,e={}){const{throttle:n=0,idle:i=200,onStop:r=Gi,onScroll:s=Gi,offset:a={left:0,right:0,top:0,bottom:0},observe:o={mutation:!1},eventListenerOptions:l={capture:!1,passive:!0},behavior:c="auto",window:u=Kt,onError:f=S=>{console.error(S)}}=e,d=typeof o=="boolean"?{mutation:o}:o,h=Je(0),v=Je(0),_=X({get(){return h.value},set(S){m(S,void 0)}}),g=X({get(){return v.value},set(S){m(void 0,S)}});function m(S,M){var I,U,k,H;if(!u)return;const $=it(t);if(!$)return;(I=$ instanceof Document?u.document.body:$)===null||I===void 0||I.scrollTo({top:(U=it(M))!==null&&U!==void 0?U:g.value,left:(k=it(S))!==null&&k!==void 0?k:_.value,behavior:it(c)});const B=($==null||(H=$.document)===null||H===void 0?void 0:H.documentElement)||$?.documentElement||$;_!=null&&(h.value=B.scrollLeft),g!=null&&(v.value=B.scrollTop)}const E=Je(!1),y=Wr({left:!0,right:!1,top:!0,bottom:!1}),b=Wr({left:!1,right:!1,top:!1,bottom:!1}),w=S=>{E.value&&(E.value=!1,b.left=!1,b.right=!1,b.top=!1,b.bottom=!1,r(S))},P=Zg(w,n+i),L=S=>{var M;if(!u)return;const I=(S==null||(M=S.document)===null||M===void 0?void 0:M.documentElement)||S?.documentElement||wn(S),{display:U,flexDirection:k,direction:H}=u.getComputedStyle(I),$=H==="rtl"?-1:1,B=I.scrollLeft;b.left=B<h.value,b.right=B>h.value;const W=Math.abs(B*$)<=(a.left||0),j=Math.abs(B*$)+I.clientWidth>=I.scrollWidth-(a.right||0)-Oh;U==="flex"&&k==="row-reverse"?(y.left=j,y.right=W):(y.left=W,y.right=j),h.value=B;let de=I.scrollTop;S===u.document&&!de&&(de=u.document.body.scrollTop),b.top=de<v.value,b.bottom=de>v.value;const _e=Math.abs(de)<=(a.top||0),be=Math.abs(de)+I.clientHeight>=I.scrollHeight-(a.bottom||0)-Oh;U==="flex"&&k==="column-reverse"?(y.top=be,y.bottom=_e):(y.top=_e,y.bottom=be),v.value=de},F=S=>{var M;u&&(L((M=S.target.documentElement)!==null&&M!==void 0?M:S.target),E.value=!0,P(S),s(S))};return _t(t,"scroll",n?Jg(F,n,!0,!1):F,l),Ws(()=>{try{const S=it(t);if(!S)return;L(S)}catch(S){f(S)}}),d?.mutation&&t!=null&&t!==u&&t!==document&&t0(t,()=>{const S=it(t);S&&L(S)},{attributes:!0,childList:!0,subtree:!0}),_t(t,"scrollend",w,l),{x:_,y:g,isScrolling:E,arrivedState:y,directions:b,measure(){const S=it(t);u&&S&&L(S)}}}function pb(t,e,n={}){const{window:i=Kt}=n;return Fa(t,e,i?.localStorage,n)}function mb(t={}){const{window:e=Kt}=t;if(!e)return Je(["en"]);const n=e.navigator,i=Je(n.languages);return _t(e,"languagechange",()=>{i.value=n.languages},{passive:!0}),i}function gb(t,e=Gi,n={}){const{immediate:i=!0,manual:r=!1,type:s="text/javascript",async:a=!0,crossOrigin:o,referrerPolicy:l,noModule:c,defer:u,document:f=Qg,attrs:d={},nonce:h=void 0}=n,v=Je(null);let _=null;const g=y=>new Promise((b,w)=>{const P=M=>(v.value=M,b(M),M);if(!f){b(!1);return}let L=!1,F=f.querySelector(`script[src="${it(t)}"]`);F?F.hasAttribute("data-loaded")&&P(F):(F=f.createElement("script"),F.type=s,F.async=a,F.src=it(t),u&&(F.defer=u),o&&(F.crossOrigin=o),c&&(F.noModule=c),l&&(F.referrerPolicy=l),h&&(F.nonce=h),Object.entries(d).forEach(([M,I])=>F?.setAttribute(M,I)),L=!0);const S={passive:!0};_t(F,"error",M=>w(M),S),_t(F,"abort",M=>w(M),S),_t(F,"load",()=>{F.setAttribute("data-loaded","true"),e(F),P(F)},S),L&&(F=f.head.appendChild(F)),y||P(F)}),m=(y=!0)=>(_||(_=g(y)),_),E=()=>{if(!f)return;_=null,v.value&&(v.value=null);const y=f.querySelector(`script[src="${it(t)}"]`);y&&f.head.removeChild(y)};return i&&!r&&Ws(m),r||ZS(E),{scriptTag:v,load:m,unload:E}}const rc=new WeakMap;function zf(t,e=!1){const n=Je(e);let i="";Pt(qg(t),a=>{const o=ic(it(a));if(o){const l=o;if(rc.get(l)||rc.set(l,l.style.overflow),l.style.overflow!=="hidden"&&(i=l.style.overflow),l.style.overflow==="hidden")return n.value=!0;if(n.value)return l.style.overflow="hidden"}},{immediate:!0});const r=()=>{const a=ic(it(t));!a||n.value||(a.style.overflow="hidden",n.value=!0)},s=()=>{const a=ic(it(t));!a||!n.value||(a.style.overflow=i,rc.delete(a),n.value=!1)};return Gs(s),X({get(){return n.value},set(a){a?r():s()}})}function vb(t,e,n={}){const{window:i=Kt}=n;return Fa(t,e,i?.sessionStorage,n)}function _b(t={}){const{window:e=Kt,...n}=t;return hb(e,n)}function xb(t={}){const{window:e=Kt,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:s=!0,type:a="inner"}=t,o=Je(n),l=Je(i),c=()=>{if(e)if(a==="outer")o.value=e.outerWidth,l.value=e.outerHeight;else if(a==="visual"&&e.visualViewport){const{width:f,height:d,scale:h}=e.visualViewport;o.value=Math.round(f*h),l.value=Math.round(d*h)}else s?(o.value=e.innerWidth,l.value=e.innerHeight):(o.value=e.document.documentElement.clientWidth,l.value=e.document.documentElement.clientHeight)};c(),Ws(c);const u={passive:!0};return _t("resize",c,u),e&&a==="visual"&&e.visualViewport&&_t(e.visualViewport,"resize",c,u),r&&Pt(Hf("(orientation: portrait)"),()=>c()),{width:o,height:l}}const n0=(t=!0)=>{const{frontmatter:e,page:n}=yr();return X(()=>e.value.contributors===!1||!it(t)?[]:n.value.git.contributors??[])};var Bh={"/":{contributors:"贡献者",changelog:"更新日志",timeOn:"于",viewChangelog:"查看所有更新日志",latestUpdateAt:"最近更新"}};const yb=typeof Bh>"u"?{}:Bh,i0=()=>zs(yb),Sb=(t=!0)=>{const{lang:e,page:n}=yr(),i=i0();return X(()=>{if(!it(t))return null;const r=n.value.git?.updatedTime??n.value.git?.changelog?.[0].time;if(!r)return null;const s=new Date(r),a=new Intl.DateTimeFormat(e.value,{dateStyle:"short",timeStyle:"short"}).format(r);return{date:s,text:a,iso:s.toISOString(),locale:i.value.latestUpdateAt}})},bb=({level:t=2,text:e,anchor:n})=>p(`h${t||2}`,{id:n,tabindex:"-1"},p("a",{href:`#${n}`,class:"header-anchor"},p("span",e))),Eb=({name:t,url:e,avatar:n})=>p(e?"a":"span",{href:e,target:"_blank",rel:"noreferrer",class:"vp-contributor"},[n?p("img",{src:n,alt:"",class:"vp-contributor-avatar"}):null,p("span",{class:"vp-contributor-name"},t)]),Mb=ye({name:"GitContributors",props:{title:String,headerLevel:{type:Number,default:2}},setup(t){const e=n0(),n=i0();return()=>e.value.length?[p(bb,{level:t.headerLevel,anchor:"doc-contributors",text:t.title||n.value.contributors}),p("div",{class:"vp-contributors"},e.value.map(i=>p(Eb,i)))]:null}}),Tb={enhance:({app:t})=>{t.component("GitContributors",Mb)}},Ab=Object.freeze(Object.defineProperty({__proto__:null,default:Tb},Symbol.toStringTag,{value:"Module"})),wb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Cb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Rb=kn({enhance:({app:t})=>{}}),Pb=Object.freeze(Object.defineProperty({__proto__:null,default:Rb},Symbol.toStringTag,{value:"Module"})),Lb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Db=kn({setup(){_t("beforeprint",()=>{document.querySelectorAll("details").forEach(t=>{t.open=!0})},{passive:!0})}}),Ib=Object.freeze(Object.defineProperty({__proto__:null,default:Db},Symbol.toStringTag,{value:"Module"})),Nb="VUEPRESS_CODE_TAB_STORE",ao=Fa(Nb,{}),Ub=ye({name:"CodeTabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(t,{slots:e}){let n=t.data.map(()=>km());const i=et(t.active),r=Je([]),s=()=>{t.tabId&&(ao.value[t.tabId]=t.data[i.value].id)},a=(u=i.value)=>{i.value=u<r.value.length-1?u+1:0,r.value[i.value].focus()},o=(u=i.value)=>{i.value=u>0?u-1:r.value.length-1,r.value[i.value].focus()},l=(u,f)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),i.value=f):u.key==="ArrowRight"?(u.preventDefault(),a()):u.key==="ArrowLeft"&&(u.preventDefault(),o()),t.tabId&&(ao.value[t.tabId]=t.data[i.value].id)},c=()=>{if(t.tabId){const u=t.data.findIndex(({id:f})=>ao.value[t.tabId]===f);if(u!==-1)return u}return t.active};return Ct(()=>{i.value=c(),Pt(()=>t.tabId&&ao.value[t.tabId],(u,f)=>{if(t.tabId&&u!==f){const d=t.data.findIndex(({id:h})=>h===u);d!==-1&&(i.value=d)}})}),()=>t.data.length?p("div",{class:"vp-code-tabs"},[p("div",{class:"vp-code-tabs-nav",role:"tablist"},t.data.map(({id:u},f)=>{const d=f===i.value;return p("button",{type:"button",ref:h=>{h&&(r.value[f]=h)},class:["vp-code-tab-nav",{active:d}],role:"tab","aria-controls":n[f],"aria-selected":d,onClick:()=>{i.value=f,s()},onKeydown:h=>{l(h,f)}},e[`title${f}`]({value:u,isActive:d}))})),t.data.map(({id:u},f)=>{const d=f===i.value;return p("div",{class:["vp-code-tab",{active:d}],id:n[f],role:"tabpanel","aria-expanded":d},[p("div",{class:"vp-code-tab-title"},e[`title${f}`]({value:u,isActive:d})),e[`tab${f}`]({value:u,isActive:d})])})]):null}}),Fb="VUEPRESS_TAB_STORE",sc=Fa(Fb,{}),Ob=ye({name:"Tabs",props:{active:{type:Number,default:0},data:{type:Array,required:!0},tabId:String},slots:Object,setup(t,{slots:e}){let n=t.data.map(()=>km());const i=et(t.active),r=Je([]),s=()=>{t.tabId&&(sc.value[t.tabId]=t.data[i.value].id)},a=(u=i.value)=>{i.value=u<r.value.length-1?u+1:0,r.value[i.value].focus()},o=(u=i.value)=>{i.value=u>0?u-1:r.value.length-1,r.value[i.value].focus()},l=(u,f)=>{u.key===" "||u.key==="Enter"?(u.preventDefault(),i.value=f):u.key==="ArrowRight"?(u.preventDefault(),a()):u.key==="ArrowLeft"&&(u.preventDefault(),o()),s()},c=()=>{if(t.tabId){const u=t.data.findIndex(({id:f})=>sc.value[t.tabId]===f);if(u!==-1)return u}return t.active};return Ct(()=>{i.value=c(),Pt(()=>t.tabId&&sc.value[t.tabId],(u,f)=>{if(t.tabId&&u!==f){const d=t.data.findIndex(({id:h})=>h===u);d!==-1&&(i.value=d)}})}),()=>t.data.length?p("div",{class:"vp-tabs"},[p("div",{class:"vp-tabs-nav",role:"tablist"},t.data.map(({id:u},f)=>{const d=f===i.value;return p("button",{type:"button",ref:h=>{h&&(r.value[f]=h)},class:["vp-tab-nav",{active:d}],role:"tab","aria-controls":n[f],"aria-selected":d,onClick:()=>{i.value=f,s()},onKeydown:h=>{l(h,f)}},e[`title${f}`]({value:u,isActive:d}))})),t.data.map(({id:u},f)=>{const d=f===i.value;return p("div",{class:["vp-tab",{active:d}],id:n[f],role:"tabpanel","aria-expanded":d},[p("div",{class:"vp-tab-title"},e[`title${f}`]({value:u,isActive:d})),e[`tab${f}`]({value:u,isActive:d})])})]):null}}),Bb={enhance:({app:t})=>{t.component("CodeTabs",Ub),t.component("Tabs",Ob)}},kb=Object.freeze(Object.defineProperty({__proto__:null,default:Bb},Symbol.toStringTag,{value:"Module"})),Vb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),Hb=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),zb=JSON.parse('{"encrypt":{},"author":{"name":"superxuan","url":"https://superxuan05.github.io"},"logo":"/logo.svg","head":[["link",{"rel":"stylesheet","href":"https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.css"}],["script",{"src":"https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js","defer":true}],["script",{"type":"text/javascript"},"\\n      // 等待页面加载完成\\n      window.onload = function() {\\n        // 初始化 live2d-widget\\n        L2Dwidget.init({\\n          model: {\\n            jsonPath: \\"https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json\\"\\n          },\\n          display: {\\n            position: \\"right\\",\\n            width: 150,\\n            height: 300,\\n            hOffset: 0,\\n            vOffset: -20\\n          },\\n          mobile: {\\n            show: true,\\n            scale: 0.8\\n          },\\n          react: {\\n            opacityDefault: 0.8,\\n            opacityOnHover: 0.9,\\n            move: true, // 启用鼠标移动跟踪\\n            drag: true // 启用鼠标拖动功能\\n          },\\n          dialog: {\\n            enable: true, // 启用对话框\\n            autoShow: true, // 自动显示对话框\\n            maxMessage: 5, // 最大消息数量\\n            messages: {\\n              welcome: [\\n                \\"你好！欢迎来到我的博客~\\",\\n                \\"嗨，很高兴见到你！\\",\\n                \\"Hello！今天过得怎么样？\\",\\n                \\"欢迎光临，希望你喜欢这里！\\",\\n                \\"你好呀，有什么我可以帮助你的吗？\\"\\n              ],\\n              hover: [\\n                \\"你在看什么呢？\\",\\n                \\"这个地方很有趣吧！\\",\\n                \\"需要我给你介绍一下吗？\\",\\n                \\"你对这个感兴趣吗？\\",\\n                \\"我也很喜欢这个内容！\\"\\n              ],\\n              click: [\\n                \\"哎呀，你戳到我了！\\",\\n                \\"别碰我啦，好痒~\\",\\n                \\"哈哈，你真调皮！\\",\\n                \\"你想和我聊天吗？\\",\\n                \\"我们做好朋友吧！\\"\\n              ]\\n            }\\n          }\\n        });\\n      };\\n    "]],"repo":"superxuan05/myblog","docsDir":"src","footer":"探索科技 · 分享知识","displayFooter":true,"copyright":"© 2026 superxuan. All rights reserved.","blog":{"description":"superxuan05的个人博客，分享技术、生活和思考","intro":"/intro.html","medias":{"BiliBili":"https://space.bilibili.com/396245561","Email":"2758157702@qq.com","Github":"https://github.com/superxuan05","QQ":"2758157702"},"avatar":"/logo.png","roundAvatar":true,"article":{"excerpt":true,"excerptLength":150,"readMore":"阅读更多...","wordCount":true,"readingTime":true,"copyright":{"license":"CC BY-NC-SA 4.0","message":"本文章采用 CC BY-NC-SA 4.0 许可协议"}}},"fullscreen":true,"darkmode":"auto","themeColor":{"blue":"#2196f3","red":"#f26d6d","green":"#3eaf7c","orange":"#fb9b5f"},"locales":{"/":{"lang":"zh-CN","navbarLocales":{"langName":"简体中文","selectLangAriaLabel":"选择语言"},"metaLocales":{"author":"作者","date":"写作日期","origin":"原创","views":"访问量","category":"分类","tag":"标签","readingTime":"阅读时间","words":"字数","toc":"此页内容","prev":"上一页","next":"下一页","contributors":"贡献者","editLink":"在 GitHub 上编辑此页","print":"打印"},"blogLocales":{"article":"文章","articleList":"文章列表","category":"分类","tag":"标签","timeline":"时间轴","timelineTitle":"昨日不在","all":"全部","intro":"个人介绍","star":"星标","empty":"$text 为空"},"paginationLocales":{"prev":"上一页","next":"下一页","navigate":"跳转到","action":"前往","errorText":"请输入 1 到 $page 之前的页码！"},"outlookLocales":{"themeColor":"主题色","darkmode":"外观","fullscreen":"全屏"},"routerLocales":{"skipToContent":"跳至主要內容","notFoundTitle":"页面不存在","notFoundMsg":["这里什么也没有","我们是怎么来到这儿的？","这 是 四 零 四 !","看起来你访问了一个失效的链接"],"back":"返回上一页","home":"带我回家"},"navbar":[{"text":"首页","icon":"home","link":"/"},{"text":"技术学习","icon":"laptop-code","children":[{"text":"数据结构","icon":"database","link":"/posts/数据结构/"},{"text":"算法","icon":"code","link":"/posts/算法/"},{"text":"其他","icon":"ellipsis-h","link":"/posts/其他/"},{"text":"考研数学","icon":"calculator","link":"/posts/考研数学/"}]},{"text":"关于","icon":"user","link":"/intro.html"},{"text":"归档","icon":"archive","link":"/posts/"}],"sidebar":{"/":["",{"text":"示例演示","icon":"laptop-code","prefix":"demo/","link":"demo/","children":"structure"},{"text":"技术学习","icon":"book","prefix":"posts/","children":[{"text":"数据结构","icon":"database","prefix":"数据结构/","children":"structure"},{"text":"其他","icon":"ellipsis-h","prefix":"其他/","children":"structure"},{"text":"考研数学","icon":"calculator","prefix":"考研数学/","children":"structure"}]},"intro"]}}}}'),Gb=et(zb),r0=()=>Gb,s0=Symbol(""),Wb=()=>{const t=wt(s0);if(!t)throw new Error("useThemeLocaleData() is called without provider.");return t},$b=(t,e)=>{const{locales:n,...i}=t;return{...i,...n?.[e]}},Xb=kn({enhance({app:t}){const e=r0(),n=t._context.provides[If],i=X(()=>$b(e.value,n.routeLocale.value));t.provide(s0,i),Object.defineProperties(t.config.globalProperties,{$theme:{get(){return e.value}},$themeLocale:{get(){return i.value}}})}}),jb=Object.freeze(Object.defineProperty({__proto__:null,default:Xb},Symbol.toStringTag,{value:"Module"}));var qb={"/":{backToTop:"返回顶部"}};const Yb=ye({name:"BackToTop",setup(){const t=Pn(),e=zs(qb),n=Je(),{height:i}=db(n),{height:r}=xb(),{y:s}=_b(),a=X(()=>(t.value.backToTop??!0)&&s.value>100),o=X(()=>s.value/(i.value-r.value)*100);return Ct(()=>{n.value=document.body}),()=>p(Ps,{name:"fade-in"},()=>a.value?p("button",{type:"button",class:"vp-back-to-top-button","aria-label":e.value.backToTop,onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},[p("span",{class:"vp-scroll-progress",role:"progressbar","aria-labelledby":"loadinglabel","aria-valuenow":o.value},p("svg",p("circle",{cx:"26",cy:"26",r:"24",fill:"none",stroke:"currentColor","stroke-width":"4","stroke-dasharray":`${Math.PI*o.value*.48} ${Math.PI*(100-o.value)*.48}`}))),p("div",{class:"back-to-top-icon"})]):null)}}),Kb=kn({rootComponents:[Yb]}),Zb=Object.freeze(Object.defineProperty({__proto__:null,default:Kb},Symbol.toStringTag,{value:"Module"})),Jb=/language-(shellscript|shell|bash|sh|zsh)/,Qb=({selector:t,ignoreSelector:e,inlineSelector:n,duration:i=2e3,locales:r,showInMobile:s,transform:a})=>{const o=Hf("(max-width: 419px)"),l=X(()=>!o.value||s),c=zs(r),u=_=>{if(_.hasAttribute("copy-code"))return;const g=document.createElement("button");g.type="button",g.classList.add("vp-copy-code-button"),g.setAttribute("aria-label",c.value.copy),g.setAttribute("data-copied",c.value.copied),_.parentElement?.insertBefore(g,_),_.setAttribute("copy-code","")},f=()=>{document.body.classList.toggle("no-copy-code",!l.value),l.value&&document.querySelectorAll(t).forEach(u)};ei(l,()=>xi(f),{flush:"post"}),Yi(_=>{_!=="beforeUnmount"&&f()});const{copy:d}=ib({legacy:!0}),h=new WeakMap,v=async(_,g,m)=>{const E=g.cloneNode(!0);a&&a(E);let y=E.textContent||"";if(Jb.test(_.className)&&(y=y.replace(/^ *(\$|>) /gm,"")),await d(y),i<=0)return;m.classList.add("copied"),clearTimeout(h.get(m));const b=setTimeout(()=>{m.classList.remove("copied"),m.blur(),h.delete(m)},i);h.set(m,b)};_t("click",_=>{const g=_.target;if(l.value&&g.matches('div[class*="language-"] > button.vp-copy-code-button')){const m=g.parentElement,E=g.nextElementSibling;if(!m||!E)return;v(m,E,g)}},{passive:!0})};var eE={"/":{copy:"复制代码",copied:"已复制"}};const tE=kn({setup:()=>{Qb({selector:'[vp-content] div[class*="language-"] pre',ignoreSelector:"",inlineSelector:"",locales:eE,duration:2e3,showInMobile:!0})}}),nE=Object.freeze(Object.defineProperty({__proto__:null,default:tE},Symbol.toStringTag,{value:"Module"})),iE=ye({name:"VPIcon",props:{type:{type:String,default:"unknown"},prefix:String,icon:String,color:String,size:[String,Number],verticalAlign:String,sizing:{type:String,default:"height"}},setup(t){const e=X(()=>t.icon?ks(t.icon)?t.icon:El(t.icon)?At(t.icon):null:null),n=X(()=>{const r={},{type:s,verticalAlign:a,size:o,sizing:l}=t,c={sizing:l};return t.color&&(r.color=t.color),o&&(r["--icon-size"]=Number.isNaN(Number(o))?o:`${o}px`),a&&(r["--icon-vertical-align"]=a),s==="iconify"&&(l!=="height"&&(c.width=t.size||"1em"),l!=="width"&&(c.height=t.size||"1em")),gr(r).length&&(c.style=r),c}),i=r=>r.includes("fa-")||/^fa.$/.test(r)?r:`fa-${r}`;return()=>{const{type:r,icon:s,prefix:a="",sizing:o}=t;if(!s)return null;if(e.value)return p("img",{class:"vp-icon",src:e.value,alt:"","aria-hidden":"","no-view":"",...n.value});if(r==="iconify")return p("iconify-icon",{key:s,class:"vp-icon",icon:s.includes(":")?s:`${a}${s}`,...n.value});if(r==="fontawesome"){const[l,c]=s.includes(":")?s.split(":",2):["fas",s];return p("i",{key:s,class:["vp-icon",l.length===1?`fa${l}`:i(l),...c.split(" ").map(i),o==="height"?"":"fa-fw"],...n.value})}return p("i",{key:s,class:["vp-icon",s.includes(" ")?s:`${a}${s}`],...n.value})}}}),rE={enhance:({app:t})=>{Rn("VPIcon")||t.component("VPIcon",e=>p(iE,{type:"iconify",prefix:"",...e}))},setup:()=>{gb("https://cdn.jsdelivr.net/npm/iconify-icon@2")}},sE=Object.freeze(Object.defineProperty({__proto__:null,default:rE},Symbol.toStringTag,{value:"Module"})),aE=et({}),a0=Symbol(""),oE=()=>wt(a0),lE=t=>{t.provide(a0,aE)},o0=t=>new Promise((e,n)=>{t.complete?e({type:"image",element:t,src:t.src,width:t.naturalWidth,height:t.naturalHeight,alt:t.alt,msrc:t.src}):(t.onload=()=>{e(o0(t))},t.onerror=()=>{n()})}),cE='<div class="photo-swipe-loading"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid" viewBox="25 25 50 50"><animateTransform attributeName="transform" type="rotate" dur="2s" keyTimes="0;1" repeatCount="indefinite" values="0;360"></animateTransform><circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"><animate attributeName="stroke-dasharray" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1,200;90,200;1,200"></animate><animate attributeName="stroke-dashoffset" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="0;-35px;-125px"></animate></circle></svg></div>',uE=(t,{download:e=!0,fullscreen:n=!0}={})=>{t.on("uiRegister",()=>{if(t.ui.registerElement({name:"bulletsIndicator",className:"photo-swipe-bullets-indicator",appendTo:"wrapper",onInit:i=>{const r=[];let s=-1;for(let a=0;a<t.getNumItems();a++){const o=document.createElement("div");o.className="photo-swipe-bullet",o.onclick=l=>{t.goTo(r.indexOf(l.target))},r.push(o),i.appendChild(o)}t.on("change",()=>{s>=0&&r[s].classList.remove("active"),r[t.currIndex].classList.add("active"),s=t.currIndex})}}),n){const{isSupported:i,toggle:r}=Tl();i.value&&t.ui.registerElement({name:"fullscreen",order:7,isButton:!0,html:'<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>',onClick:()=>{r()}})}e&&t.ui.registerElement({name:"download",order:8,isButton:!0,tagName:"a",html:{isCustomSVG:!0,inner:'<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>',outlineID:"pswp__icn-download"},onInit:i=>{i.setAttribute("download",""),i.setAttribute("target","_blank"),i.setAttribute("rel","noopener"),t.on("change",()=>{i.setAttribute("href",t.currSlide.data.src)})}})})},fE=({selector:t,locales:e,download:n=!0,fullscreen:i=!0,scrollToClose:r=!0})=>{const s=oE(),a=zs(e),o=Pn(),l=X(()=>{const{photoSwipe:h}=o.value;return h===!1?null:vt(h)?h:zi(t)?t.join(", "):t}),c=X(()=>({...s.value,...a.value,download:n,fullscreen:i,scrollToClose:r}));let u=null,f=0,d=null;_t("click",async h=>{const v=h.target;if(!l.value||!u||!v.matches(l.value))return;f!==0&&d.destroy();const _=Date.now(),g=await u,m=Array.from(document.querySelectorAll(l.value)),E=m.map(b=>({html:cE,element:b,msrc:b.src})),y=m.findIndex(b=>b===v);d=new g({preloaderDelay:0,showHideAnimationType:"zoom",...c.value,dataSource:E,index:y,...r?{closeOnVerticalDrag:!0,wheelToZoom:!1}:{}}),f=_,uE(d,{download:n,fullscreen:i}),d.init(),d.on("destroy",()=>{d=null,f=0}),m.map((b,w)=>o0(b).then(P=>{f===_&&(E.splice(w,1,P),d?.refreshSlideContent(w))}))},{passive:!0}),_t("wheel",()=>{c.value.scrollToClose&&d?.close()}),Ct(()=>{("requestIdleCallback"in window?window.requestIdleCallback:setTimeout)(()=>{u=Ve(async()=>{const{default:h}=await import("./photoswipe.esm-CKV1Bsxh.js");return{default:h}},[]).then(({default:h})=>h)})}),ji(()=>{d?.destroy()})};var dE={"/":{closeTitle:"关闭",downloadTitle:"下载图片",fullscreenTitle:"切换全屏",zoomTitle:"缩放",arrowPrevTitle:"上一个 (左箭头)",arrowNextTitle:"下一个 (右箭头)"}};const hE="[vp-content] :not(a) > img:not([no-view])",pE=dE,mE=!0,gE=!0,vE=!0;var _E=kn({enhance:({app:t})=>{lE(t)},setup:()=>{fE({selector:hE,locales:pE,download:mE,fullscreen:gE,scrollToClose:vE})}});const xE=Object.freeze(Object.defineProperty({__proto__:null,default:_E},Symbol.toStringTag,{value:"Module"})),l0=({type:t="info",text:e="",vertical:n,color:i,bgColor:r},{slots:s})=>p("span",{class:["vp-badge",t,{diy:!!(i||r)}],style:{backgroundColor:r??!1,color:i??!1,verticalAlign:n??!1}},s.default?.()??e);l0.displayName="Badge";const yE={enhance:({app:t})=>{Rn("Badge")||t.component("Badge",l0)},setup:()=>{},rootComponents:[]},SE=Object.freeze(Object.defineProperty({__proto__:null,default:yE},Symbol.toStringTag,{value:"Module"})),kh=async(t,e)=>{const{path:n,query:i}=t.currentRoute.value,{scrollBehavior:r}=t.options;t.options.scrollBehavior=void 0,await t.replace({path:n,query:i,hash:e}),t.options.scrollBehavior=r},bE=({headerLinkSelector:t,headerAnchorSelector:e,delay:n,offset:i=5})=>{const r=xr();_t("scroll",Zg(()=>{const a=Math.max(window.scrollY,document.documentElement.scrollTop,document.body.scrollTop);if(Math.abs(a)<i){kh(r,"");return}const l=window.innerHeight+a,c=Math.max(document.documentElement.scrollHeight,document.body.scrollHeight),u=Math.abs(c-l)<i,f=Array.from(document.querySelectorAll(t)),h=Array.from(document.querySelectorAll(e)).filter(v=>f.some(_=>_.hash===v.hash));for(let v=0;v<h.length;v++){const _=h[v],g=h[v+1],m=a>=(_.parentElement?.offsetTop??0)-i,E=!g||a<(g.parentElement?.offsetTop??0)-i;if(!(m&&E))continue;const b=decodeURIComponent(r.currentRoute.value.hash),w=decodeURIComponent(_.hash);if(b===w)return;if(u){for(let P=v+1;P<h.length;P++)if(b===decodeURIComponent(h[P].hash))return}kh(r,w);return}},n))},EE=".vp-sidebar-link, .vp-toc-link",ME=".header-anchor",TE=200,AE=5,wE=kn({setup(){bE({headerLinkSelector:EE,headerAnchorSelector:ME,delay:TE,offset:AE})}}),CE=Object.freeze(Object.defineProperty({__proto__:null,default:wE},Symbol.toStringTag,{value:"Module"}));let c0=t=>vt(t.title)?{title:t.title}:null;const u0=Symbol(""),RE=t=>{c0=t},PE=()=>wt(u0),LE=t=>{t.provide(u0,c0)};var DE={"/":{title:"目录",empty:"暂无目录"}},IE=ye({name:"Catalog",props:{base:String,level:{type:Number,default:3},index:Boolean,hideHeading:Boolean},setup(t){const{page:e,routes:n,site:i}=yr(),r=PE(),s=zs(DE),a=Je(Hs(n.value).map(([l,{meta:c}])=>{const u=r(c);if(!u)return null;const f=l.split("/").length;return{level:DS(l,"/")?f-2:f-1,base:l.replace(/\/[^/]+\/?$/,"/"),path:l,...u}}).filter(l=>Vs(l)&&vt(l.title))),o=X(()=>{const l=t.base?ty(Mg(t.base)):e.value.path.replace(/\/[^/]+$/,"/"),c=l.split("/").length-2,u=[];return a.value.filter(({level:f,path:d})=>{if(!tl(d,l)||d===l)return!1;if(l==="/"){const h=gr(i.value.locales).filter(v=>v!=="/");if(d==="/404.html"||h.some(v=>tl(d,v)))return!1}return f-c<=t.level}).sort(({title:f,level:d,order:h},{title:v,level:_,order:g})=>d-_||(Fo(h)?Fo(g)?h>0?g>0?h-g:-1:g<0?h-g:1:h:Fo(g)?g:f.localeCompare(v))).forEach(f=>{const{base:d,level:h}=f;switch(h-c){case 1:{u.push(f);break}case 2:{const v=u.find(_=>_.path===d);v&&(v.children??=[]).push(f);break}default:{const v=u.find(_=>_.path===d.replace(/\/[^/]+\/$/,"/"));if(v){const _=v.children?.find(g=>g.path===d);_&&(_.children??=[]).push(f)}}}}),u});return()=>{const l=o.value.some(c=>c.children);return p("div",{class:["vp-catalog",{index:t.index}]},[t.hideHeading?null:p("h2",{class:"vp-catalog-main-title"},s.value.title),o.value.length?p(t.index?"ol":"ul",{class:["vp-catalog-list",{deep:l}]},o.value.map(({children:c=[],title:u,path:f,content:d})=>{const h=p(Gt,{class:"vp-catalog-title",to:f},()=>d?p(d):u);return p("li",{class:"vp-catalog-item"},l?[p("h3",{id:u,class:["vp-catalog-child-title",{"has-children":c.length}]},[p("a",{href:`#${u}`,class:"vp-catalog-header-anchor","aria-hidden":!0}),h]),c.length?p(t.index?"ol":"ul",{class:"vp-child-catalogs"},c.map(({children:v=[],content:_,path:g,title:m})=>p("li",{class:"vp-child-catalog"},[p("div",{class:["vp-catalog-sub-title",{"has-children":v.length}]},[p("a",{href:`#${m}`,class:"vp-catalog-header-anchor"}),p(Gt,{class:"vp-catalog-title",to:g},()=>_?p(_):m)]),v.length?p(t.index?"ol":"div",{class:t.index?"vp-sub-catalogs":"vp-sub-catalogs-wrapper"},v.map(({content:E,path:y,title:b})=>t.index?p("li",{class:"vp-sub-catalog"},p(Gt,{to:y},()=>E?p(E):b)):p(Gt,{class:"vp-sub-catalog-link",to:y},()=>E?p(E):b))):null]))):null]:p("div",{class:"vp-catalog-child-title"},h))})):p("p",{class:"vp-empty-catalog"},s.value.empty)])}}}),NE=kn({enhance:({app:t})=>{LE(t),Rn("Catalog",t)||t.component("Catalog",IE)}});const UE=Object.freeze(Object.defineProperty({__proto__:null,default:NE},Symbol.toStringTag,{value:"Module"}));/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */const Vh=(t,e)=>{t.classList.add(e)},Hh=(t,e)=>{t.classList.remove(e)},FE=t=>{t?.parentNode?.removeChild(t)},ac=(t,e,n)=>t<e?e:t>n?n:t,zh=t=>(-1+t)*100,OE=(()=>{const t=[],e=()=>{const n=t.shift();n&&n(e)};return n=>{t.push(n),t.length===1&&e()}})(),BE=t=>t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,(e,n)=>n.toUpperCase()),oo=(()=>{const t=["Webkit","O","Moz","ms"],e={},n=s=>{const{style:a}=document.body;if(s in a)return s;const o=s.charAt(0).toUpperCase()+s.slice(1);let l=t.length;for(;l--;){const c=`${t[l]}${o}`;if(c in a)return c}return s},i=s=>{const a=BE(s);return e[a]??=n(a)},r=(s,a,o)=>{s.style[i(a)]=o};return(s,a)=>{for(const o in a){const l=a[o];Object.hasOwn(a,o)&&$g(l)&&r(s,o,l)}}})(),Ti={minimum:.08,easing:"ease",speed:200,trickleRate:.02,trickleSpeed:800,barSelector:'[role="bar"]',parent:"body",template:'<div class="bar" role="bar"></div>'},Ut={percent:null,isRendered:()=>!!document.getElementById("nprogress"),set:t=>{const{speed:e,easing:n}=Ti,i=Ut.isStarted(),r=ac(t,Ti.minimum,1);Ut.percent=r===1?null:r;const s=Ut.render(!i),a=s.querySelector(Ti.barSelector);return s.offsetWidth,OE(o=>{oo(a,{transform:`translate3d(${zh(r)}%,0,0)`,transition:`all ${e}ms ${n}`}),r===1?(oo(s,{transition:"none",opacity:"1"}),s.offsetWidth,setTimeout(()=>{oo(s,{transition:`all ${e}ms linear`,opacity:"0"}),setTimeout(()=>{Ut.remove(),o()},e)},e)):setTimeout(()=>{o()},e)}),Ut},isStarted:()=>typeof Ut.percent=="number",start:()=>{Ut.percent||Ut.set(0);const t=()=>{setTimeout(()=>{Ut.percent&&(Ut.trickle(),t())},Ti.trickleSpeed)};return t(),Ut},done:t=>!t&&!Ut.percent?Ut:Ut.increase(.3+.5*Math.random()).set(1),increase:t=>{let{percent:e}=Ut;return e?(e=ac(e+(typeof t=="number"?t:(1-e)*ac(Math.random()*e,.1,.95)),0,.994),Ut.set(e)):Ut.start()},trickle:()=>Ut.increase(Math.random()*Ti.trickleRate),render:t=>{if(Ut.isRendered())return document.getElementById("nprogress");Vh(document.documentElement,"nprogress-busy");const e=document.createElement("div");e.id="nprogress",e.innerHTML=Ti.template;const n=e.querySelector(Ti.barSelector),i=document.querySelector(Ti.parent),r=t?"-100":zh(Ut.percent??0);return oo(n,{transition:"all 0 linear",transform:`translate3d(${r}%,0,0)`}),i&&(i!==document.body&&Vh(i,"nprogress-custom-parent"),i.appendChild(e)),e},remove:()=>{Hh(document.documentElement,"nprogress-busy"),Hh(document.querySelector(Ti.parent),"nprogress-custom-parent"),FE(document.getElementById("nprogress"))}},kE=()=>{Ct(()=>{const t=xr(),e=new Set;e.add(t.currentRoute.value.path),t.beforeEach(n=>{e.has(n.path)||Ut.start()}),t.afterEach(n=>{e.add(n.path),Ut.done()})})},VE=kn({setup(){kE()}}),HE=Object.freeze(Object.defineProperty({__proto__:null,default:VE},Symbol.toStringTag,{value:"Module"}));var zE={provider:"Twikoo",envId:"https://twikoo.cc",options:{lang:"zh-CN",dark:"auto",placeholder:"写下你的评论...",avatar:"mp",theme:"auto"}};const GE=zE,WE=et(GE),f0=Symbol(""),d0=()=>wt(f0),$E=d0,XE=t=>{t.provide(f0,gi(WE))};var jE=ye({name:"TwikooComment",props:{identifier:{type:String,required:!0}},setup(t){const e=$E(),n=Nf(),i=et(!1),r=X(()=>!!e.value.envId),s=async()=>{const[{init:a}]=await Promise.all([Ve(()=>import("./twikoo.all.min-vLKBetRB.js").then(o=>o.t),[]),OS(e.value.delay??800)]);i.value=!0,await xi(),await a({lang:n.value==="zh-CN"?"zh-CN":"en",path:t.identifier,...e.value,el:"#twikoo-comment"})};return Ct(()=>{ei(()=>[t.identifier,e.value],()=>s(),{flush:"post"})}),()=>r.value?p("div",{id:"comment",class:"twikoo-wrapper"},[i.value?null:p(Wg),p("div",{id:"twikoo-comment"})]):null}}),qE=ye({name:"CommentService",props:{identifier:String,darkmode:Boolean},setup(t){const{frontmatter:e,page:n}=yr(),i=d0(),r=X(()=>e.value.comment??i.value.comment??!0);return()=>p(jE,{class:"vp-comment","vp-comment":"",identifier:t.identifier??e.value.commentID??n.value.path,darkmode:t.darkmode,style:{display:r.value?"block":"none"}})}}),YE=kn({enhance:({app:t})=>{XE(t),t.component("CommentService",qE)}});const KE=Object.freeze(Object.defineProperty({__proto__:null,default:YE},Symbol.toStringTag,{value:"Module"})),h0="VUEPRESS_REDIRECT_STATUS",Gh=pb(h0,{}),Wh=vb(h0,{}),ZE=t=>{const e=mb(),n=Vg(),i=Hs(t.config);return X(()=>{if(i.some(([r])=>n.value===r)){for(const r of e.value)for(const[s,a]of i)if(a.includes(r))return s===n.value?null:{lang:r,localePath:s}}return null})};var JE=ye({name:"RedirectModal",props:{config:{type:Object,required:!0},locales:{type:Object,required:!0}},setup(t){const e=xr(),{routeLocale:n,routePath:i}=yr(),r=ZE(t.config),s=et(),a=zf(s),o=et(!1),l=X(()=>{if(!r.value)return null;const{lang:u,localePath:f}=r.value,d=[t.locales[f],t.locales[n.value]];return{hint:d.map(({hint:h})=>h.replace("$1",u)),switch:d.map(({switch:h})=>h.replace("$1",u)).join(" / "),cancel:d.map(({cancel:h})=>h).join(" / "),remember:d.map(({remember:h})=>h).join(" / ")}}),c=()=>{Wh.value[n.value]=!0,o.value&&(Gh.value[n.value]=!0),a.value=!1};return Pt(i,()=>{a.value=!1}),Ct(async()=>{s.value=document.body,await xi(),r.value&&!Wh.value[n.value]&&!Gh.value[n.value]&&(a.value=!0)}),Ef(()=>{a.value=!1}),()=>p(bg,{name:"fade-in-scale-up"},()=>a.value?p("div",{key:"mask",class:"redirect-modal-mask"},p("div",{key:"popup",class:"redirect-modal-wrapper"},[p("div",{class:"redirect-modal-content"},l.value?.hint.map(u=>p("p",u))),p("div",{class:"redirect-modal-hint"},[p("input",{id:"remember-redirect",type:"checkbox",value:o.value,onChange:()=>{o.value=!o.value}}),p("label",{for:"remember-redirect"},l.value?.remember)]),p("button",{type:"button",class:"redirect-modal-action primary",onClick:()=>{c(),e.replace(i.value.replace(n.value,r.value.localePath))}},l.value?.switch),p("button",{type:"button",class:"redirect-modal-action",onClick:()=>{c()}},l.value?.cancel)])):null)}}),QE={config:{},autoLocale:!1,localeFallback:!0,defaultBehavior:"defaultLocale"},eM={"/":{name:"简体中文",hint:"你的首选语言是 $1，是否切换到该语言？",switch:"切换到 $1",cancel:"取消",remember:"记住我的选择"}};const p0=QE;var tM=kn({setup(){},rootComponents:[()=>p(JE,{config:p0,locales:eM})]});const nM=Object.freeze(Object.defineProperty({__proto__:null,config:p0,default:tM},Symbol.toStringTag,{value:"Module"}));var $h={"/":{word:"约 $word 字",less1Minute:"小于 1 分钟",time:"大约 $time 分钟"}};const m0=()=>{const t=bl();return X(()=>t.value.readingTime??null)},g0=(t,e)=>{const{minutes:n,words:i}=t,{less1Minute:r,word:s,time:a}=e;return{time:n<1?r:a.replace("$time",Math.round(n).toString()),words:s.replace("$word",i.toString())}},Xh={words:"",time:""},su=typeof $h>"u"?null:$h,v0=()=>su?zs(su):X(()=>null),iM=()=>{if(su===null)return X(()=>Xh);const t=m0(),e=v0();return X(()=>t.value&&e.value?g0(t.value,e.value):Xh)},Oo=()=>null,St=({name:t="",color:e="currentColor",ariaLabel:n},{attrs:i,slots:r})=>p("svg",{xmlns:"http://www.w3.org/2000/svg",class:["icon",`${t}-icon`],viewBox:"0 0 1024 1024",fill:e,"aria-label":n??`${t} icon`,...i},r.default());St.displayName="IconBase";const rM=t=>ks(t)?t:`https://github.com/${t}`,Gf=(t="")=>!ks(t)||t.includes("github.com")?"GitHub":t.includes("bitbucket.org")?"Bitbucket":t.includes("gitlab.com")?"GitLab":t.includes("gitee.com")?"Gitee":null,_0=()=>p(St,{name:"github"},()=>p("path",{d:"M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"}));_0.displayName="GitHubIcon";const x0=()=>p(St,{name:"gitee"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"}));x0.displayName="GiteeIcon";const y0=()=>p(St,{name:"bitbucket"},()=>p("path",{d:"M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"}));y0.displayName="BitbucketIcon";const S0=()=>p(St,{name:"source"},()=>p("path",{d:"M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"}));S0.displayName="SourceIcon";const sM=({link:t,type:e=Gf(t??"")})=>{if(!e)return null;const n=e.toLowerCase();return p(n==="bitbucket"?y0:n==="github"?_0:n==="gitlab"?"GitLab":n==="gitee"?x0:S0)},aM=(t,e=0)=>{let n=3735928559^e,i=1103547991^e;for(let r=0;r<t.length;r++){const s=t.charCodeAt(r);n=Math.imul(n^s,2654435761),i=Math.imul(i^s,1597334677)}return n=Math.imul(n^n>>>16,2246822507),n^=Math.imul(i^i>>>13,3266489909),i=Math.imul(i^i>>>16,2246822507),i^=Math.imul(n^n>>>13,3266489909),4294967296*(2097151&i)+(n>>>0)},Oa=(t,e)=>aM(t)%e,b0=/#.*$/u,oM=t=>{const e=b0.exec(t);return e?e[0]:""},jh=t=>decodeURI(t).replace(b0,"").replace(/\/index\.html$/iu,"/").replace(/\/(README|index)\.md$/iu,"/").replace(/\.(?:html|md)$/iu,""),E0=(t,e)=>{if(!$g(e))return!1;const n=jh(t.path),i=jh(e),r=oM(e);return r?r===t.hash&&(!i||n===i):n===i},lM="719px",cM="1440px",uM="9",Xs={mobileBreakPoint:lM,pcBreakPoint:cM,colorNumber:uM},qr=()=>r0(),ii=()=>Wb(),Ht=()=>({...yr(),theme:qr(),themeLocale:ii()}),xn=()=>{const t=qr();return X(()=>!!t.value.pure)},M0=()=>{const t=ii();return X(()=>t.value.author)},qh=t=>Vs(t)&&vt(t.name),Ea=(t,e=!1)=>t?zi(t)?t.map(n=>vt(n)?{name:n}:qh(n)?n:null).filter(n=>n!==null):vt(t)?[{name:t}]:qh(t)?[t]:(console.error(`Expect "author" to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e?"":"| false"} | undefined\`, but got`,t),[]):[],T0=(t,e)=>{if(t){if(zi(t)&&t.every(n=>vt(n)))return t;if(vt(t))return[t];console.error(`Expect ${e} to be \`string[] | string | undefined\`, but got`,t)}return[]},A0=t=>T0(t,"category"),w0=t=>T0(t,"tag"),C0=()=>{const t=Pn(),e=M0();return X(()=>{const{author:n}=t.value;return n?Ea(n):n===!1?[]:Ea(e.value,!1)})},fM=()=>{const t=Pn(),e=wt(Symbol.for("categoryMap"),null);return X(()=>A0(t.value.category??t.value.categories).map(n=>({name:n,path:e?.value.map[n]?.path??""})))},dM=()=>{const t=Pn(),e=wt(Symbol.for("tagMap"),null);return X(()=>w0(t.value.tag??t.value.tags).map(n=>({name:n,path:e?.value.map[n]?.path??""})))},hM=()=>{const{frontmatter:t,page:e}=Ht();return X(()=>{const n=Bf(t.value.date);if(n)return n;const{createdTime:i}=e.value.git??{};return i?new Date(i):null})},pM=()=>{const{frontmatter:t,themeLocale:e}=Ht(),n=C0(),i=fM(),r=dM(),s=hM(),a=m0(),o=iM(),l=X(()=>({author:n.value,category:i.value,date:s.value,tag:r.value,isOriginal:t.value.isOriginal??!1,readingTime:a.value,readingTimeLocale:o.value,pageview:t.value.pageview??!0})),c=X(()=>t.value.pageInfo??e.value.pageInfo??null);return{info:l,items:c}},Vn=()=>{const t=ii();return X(()=>t.value.metaLocales)},mM="http://.",Ki=()=>{const t=xr(),e=yi();return n=>{if(!n)return;if(Ua(n))return window.open(n);if(El(n))return e.fullPath===n?void 0:void t.push(n);const i=e.path.slice(0,e.path.lastIndexOf("/"));return void t.push(new URL(`${i}/${encodeURI(n)}`,mM).pathname)}},R0=()=>p(St,{name:"author"},()=>p("path",{d:"M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"}));R0.displayName="AuthorIcon";const P0=()=>p(St,{name:"calendar"},()=>p("path",{d:"M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"}));P0.displayName="CalendarIcon";const L0=()=>p(St,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));L0.displayName="CategoryIcon";const D0=()=>p(St,{name:"print"},()=>p("path",{d:"M819.2 364.8h-44.8V128c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v236.8h-44.8C145.067 364.8 96 413.867 96 473.6v192c0 59.733 49.067 108.8 108.8 108.8h44.8V896c0 17.067 14.933 32 32 32h460.8c17.067 0 32-14.933 32-32V774.4h44.8c59.733 0 108.8-49.067 108.8-108.8v-192c0-59.733-49.067-108.8-108.8-108.8zM313.6 160h396.8v204.8H313.6V160zm396.8 704H313.6V620.8h396.8V864zM864 665.6c0 25.6-19.2 44.8-44.8 44.8h-44.8V588.8c0-17.067-14.933-32-32-32H281.6c-17.067 0-32 14.933-32 32v121.6h-44.8c-25.6 0-44.8-19.2-44.8-44.8v-192c0-25.6 19.2-44.8 44.8-44.8h614.4c25.6 0 44.8 19.2 44.8 44.8v192z"}));D0.displayName="PrintIcon";const I0=()=>p(St,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));I0.displayName="TagIcon";const N0=()=>p(St,{name:"timer"},()=>p("path",{d:"M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"}));N0.displayName="TimerIcon";const U0=()=>p(St,{name:"word"},()=>[p("path",{d:"M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"}),p("path",{d:"M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"})]);U0.displayName="WordIcon";var gM=ye({name:"AuthorInfo",inheritAttrs:!1,props:{author:{type:Array,required:!0}},setup(t){const e=Vn(),n=xn();return()=>t.author.length>0?p("span",{class:"page-author-info","aria-label":`${e.value.author}${n.value?"":"🖊"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(R0),p("span",t.author.map(i=>i.url?p("a",{class:"page-author-item",href:i.url,target:"_blank",rel:"noopener noreferrer"},i.name):p("span",{class:"page-author-item"},i.name))),p("span",{property:"author",content:t.author.map(i=>i.name).join(", ")})]):null}}),vM=ye({name:"CategoryInfo",inheritAttrs:!1,props:{category:{type:Array,required:!0}},setup(t){const e=Vn(),n=Ki(),i=xn();return()=>t.category.length>0?p("span",{class:"page-category-info","aria-label":`${e.value.category}${i.value?"":"🌈"}`,...i.value?{}:{"data-balloon-pos":"up"}},[p(L0),t.category.map(({name:r,path:s})=>p("span",{class:["page-category-item",{[`color${Oa(r,Number(Xs.colorNumber))}`]:!i.value,clickable:s}],role:s?"navigation":"",onClick:()=>{s&&n(s)}},r)),p("meta",{property:"articleSection",content:t.category.map(({name:r})=>r).join(",")})]):null}}),_M=ye({name:"DateInfo",inheritAttrs:!1,props:{date:Object},setup(t){const e=Nf(),n=Vn(),i=xn(),r=X(()=>new Intl.DateTimeFormat(e.value,{dateStyle:"short"})),s=X(()=>t.date?r.value.format(t.date):null);return()=>t.date?p("span",{class:"page-date-info","aria-label":`${n.value.date}${i.value?"":"📅"}`,...i.value?{}:{"data-balloon-pos":"up"}},[p(P0),p("span",{"data-allow-mismatch":"text"},s.value),p("meta",{property:"datePublished",content:t.date.toISOString()||""})]):null}}),xM=ye({name:"OriginalInfo",inheritAttrs:!1,props:{isOriginal:Boolean},setup(t){const e=Vn();return()=>t.isOriginal?p("span",{class:"page-original-info"},e.value.origin):null}}),yM=ye({name:"ReadingTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(t){const e=Vn(),n=xn(),i=X(()=>{if(!t.readingTime)return null;const{minutes:r}=t.readingTime;return r<1?"PT1M":`PT${Math.round(r)}M`});return()=>t.readingTimeLocale?.time?p("span",{class:"page-reading-time-info","aria-label":`${e.value.readingTime}${n.value?"":"⌛"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(N0),p("span",t.readingTimeLocale.time),p("meta",{property:"timeRequired",content:i.value})]):null}}),SM=ye({name:"TagInfo",inheritAttrs:!1,props:{tag:Array},setup(t){const e=Vn(),n=Ki(),i=xn();return()=>t.tag?.length?p("span",{class:"page-tag-info","aria-label":`${e.value.tag}${i.value?"":"🏷"}`,...i.value?{}:{"data-balloon-pos":"up"}},[p(I0),t.tag.map(({name:r,path:s})=>p("span",{class:["page-tag-item",{[`color${Oa(r,Number(Xs.colorNumber))}`]:!i.value,clickable:s}],role:s?"navigation":"",onClick:()=>{s&&n(s)}},r)),p("meta",{property:"keywords",content:t.tag.map(({name:r})=>r).join(",")})]):null}}),bM=ye({name:"ReadTimeInfo",inheritAttrs:!1,props:{readingTime:Object,readingTimeLocale:Object},setup(t){const e=Vn(),n=xn();return()=>t.readingTimeLocale?.words?p("span",{class:"page-word-info","aria-label":`${e.value.words}${n.value?"":"🔠"}`,...n.value?{}:{"data-balloon-pos":"up"}},[p(U0),p("span",t.readingTimeLocale.words),p("meta",{property:"wordCount",content:t.readingTime?.words})]):null}}),F0=ye({name:"PageInfo",components:{AuthorInfo:gM,CategoryInfo:vM,DateInfo:_M,OriginalInfo:xM,PageViewInfo:Oo,ReadingTimeInfo:yM,TagInfo:SM,WordInfo:bM},props:{items:[Boolean,Array],info:{type:Object,required:!0}},setup(t){const e=xn();return()=>{const n=t.items??["Author","Original","Date","PageView","ReadingTime","Category","Tag"];return n?p("div",{class:"page-info"},n.map(i=>p(Rt(`${i}Info`),{...t.info,isPure:e.value}))):null}}});const Wf={"/demo/":["markdown","layout","page","disable","encrypt"],"/posts/数据结构/":["stack"],"/posts/其他/":["javaweb","linux","signal","1sjk","2sjk","3.sjk","web"],"/posts/考研数学/":["1"]},O0=Symbol(""),Ba=()=>{const t=wt(O0);if(!t)throw new Error("useDarkMode() is called without provider.");return t},EM=t=>{const e=ob(),n=qr(),i=X(()=>n.value.darkmode??"switch"),r=Fa("vuepress-theme-hope-scheme","auto"),s=X(()=>{const o=i.value;return o==="disable"?!1:o==="enable"?!0:o==="auto"?e.value:o==="toggle"?r.value==="dark":r.value==="dark"||r.value==="auto"&&e.value}),a=X(()=>{const o=i.value;return o==="switch"||o==="toggle"});t.provide(O0,{canToggle:a,config:i,isDarkMode:s,status:r}),Object.defineProperties(t.config.globalProperties,{$isDarkMode:{get:()=>s.value}})},MM=()=>{const{config:t,isDarkMode:e,status:n}=Ba();xf(()=>{t.value==="disable"?n.value="light":t.value==="enable"?n.value="dark":t.value==="toggle"&&n.value==="auto"&&(n.value="light")}),_t("beforeprint",()=>{e.value&&(document.documentElement.dataset.theme="light")}),_t("afterprint",()=>{e.value&&(document.documentElement.dataset.theme="dark")}),Ct(()=>{ei(e,i=>{document.documentElement.dataset.theme=i?"dark":"light"})})},au=t=>!Ua(t)&&!Rf(t),nl=(t,e=!1,n)=>{const{meta:i,path:r,notFound:s}=Bn(t,n);return s?{text:r,link:r}:{text:!e&&i.shortTitle?i.shortTitle:i.title||r,link:r,icon:i.icon}},Br=(t="",e="")=>Ua(e)||El(e)?e:`${Mg(t)}${e}`,B0=(t,e)=>{const n=vt(t)?nl(Br(e,t)):vt(t.link)?{...t,link:au(t.link)?Bn(Br(e,t.link)).path:t.link}:t;if("children"in n){const i=Br(e,n.prefix),r=n.children==="structure"?Wf[i]:n.children;return{...n,prefix:i,children:r.map(s=>B0(s,i))}}return{...n}},ou=({config:t,prefix:e=""})=>t.map(n=>B0(n,e)),TM=({config:t,routePath:e})=>{const n=gr(t).sort((i,r)=>r.length-i.length);for(const i of n)if(tl(decodeURI(e),i)){const r=t[i];return ou({config:r==="structure"?Wf[i]:r||[],prefix:i})}return console.warn(`${decodeURI(e)} is missing it's sidebar config.`),[]},AM=({config:t,routeLocale:e,routePath:n})=>t==="structure"?ou({config:Wf[e],prefix:e}):zi(t)?ou({config:t}):Vs(t)?TM({config:t,routePath:n}):[],k0=Symbol(""),wM=()=>{const{frontmatter:t,routeLocale:e,routePath:n,themeLocale:i}=Ht(),r=X(()=>t.value.home?!1:t.value.sidebar??i.value.sidebar??"structure"),s=X(()=>AM({config:r.value,routeLocale:e.value,routePath:n.value}));Kn(k0,s)},$f=()=>{const t=wt(k0);if(!t)throw new Error("useSidebarItems() is called without provider.");return t};var CM=ye({name:"PageFooter",setup(){const{frontmatter:t,theme:e,themeLocale:n}=Ht(),i=C0(),r=X(()=>{const{copyright:c,footer:u}=t.value;return u!==!1&&!!(c||u||n.value.displayFooter)}),s=X(()=>{const{footer:c}=t.value;return vt(c)?c:n.value.footer??""}),a=X(()=>i.value.map(({name:c})=>c).join(", ")),o=c=>`Copyright © ${new Date().getFullYear()} ${a.value} ${c?`${c} Licensed`:""}`,l=X(()=>{const{copyright:c,license:u=""}=t.value,{license:f}=e.value,{copyright:d}=n.value;return c??(u?o(u):d??(a.value||f?o(f):!1))});return()=>r.value?p("footer",{class:"vp-footer-wrapper","vp-footer":""},[s.value?p("div",{class:"vp-footer",innerHTML:s.value}):null,l.value?p("div",{class:"vp-copyright",innerHTML:l.value}):null]):null}});const V0=()=>p(St,{name:"outlook"},()=>[p("path",{d:"M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"})]);V0.displayName="AppearanceIcon";const H0=()=>p(St,{name:"auto"},()=>p("path",{d:"M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"}));H0.displayName="AutoColorModeIcon";const z0=()=>p(St,{name:"light"},()=>p("path",{d:"M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"}));z0.displayName="LightColorModeIcon";const G0=()=>p(St,{name:"dark"},()=>p("path",{d:"M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"}));G0.displayName="DarkColorModeIcon";var W0=ye({name:"ColorModeSwitch",setup(){const{config:t,isDarkMode:e,status:n}=Ba(),i=xn(),r=()=>{t.value==="switch"?n.value={light:"dark",dark:"auto",auto:"light"}[n.value]:n.value=n.value==="light"?"dark":"light"},s=async a=>{if(!(document.startViewTransition&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&!i.value)){r();return}const o=a.clientX,l=a.clientY,c=Math.hypot(Math.max(o,innerWidth-o),Math.max(l,innerHeight-l)),u=e.value;await document.startViewTransition(async()=>{r(),await xi()}).ready,e.value!==u&&document.documentElement.animate({clipPath:e.value?[`circle(${c}px at ${o}px ${l}px)`,`circle(0px at ${o}px ${l}px)`]:[`circle(0px at ${o}px ${l}px)`,`circle(${c}px at ${o}px ${l}px)`]},{duration:400,pseudoElement:e.value?"::view-transition-old(root)":"::view-transition-new(root)"})};return()=>p("button",{type:"button",class:"vp-color-mode-switch",id:"color-mode-switch",onClick:s},[p(H0,{style:{display:n.value==="auto"?"block":"none"}}),p(G0,{style:{display:n.value==="dark"?"block":"none"}}),p(z0,{style:{display:n.value==="light"?"block":"none"}})])}});const $0=()=>{const t=ii();return X(()=>t.value.outlookLocales)};var RM=ye({name:"ColorMode",setup(){const t=$0(),{canToggle:e}=Ba();return()=>e.value?p("div",{class:"vp-color-mode"},[p("label",{class:"vp-color-mode-title",for:"color-mode-switch"},t.value.darkmode),p(W0)]):null}});const X0=()=>p(St,{name:"cancel-fullscreen"},()=>p("path",{d:"M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"}));X0.displayName="CancelFullScreenIcon";const j0=()=>p(St,{name:"enter-fullscreen"},()=>p("path",{d:"M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"}));j0.displayName="EnterFullScreenIcon";var q0=ye({name:"ToggleFullScreenButton",setup(){const{isSupported:t,isFullscreen:e,toggle:n}=Tl();return()=>t.value?p("button",{type:"button",id:"full-screen-switch",class:"full-screen",ariaPressed:e.value,onClick:()=>n()},e.value?p(X0):p(j0)):null}}),PM=ye({name:"ToggleFullScreenButton",setup(){const t=$0(),{isSupported:e}=Tl();return()=>e.value?p("div",{class:"full-screen-wrapper"},[p("label",{class:"full-screen-title",for:"full-screen-switch"},t.value.fullscreen),p(q0)]):null}}),Y0=ye({name:"AppearanceSettings",setup(){const t=qr(),e=xn(),n=X(()=>!e.value&&t.value.fullscreen);return()=>p(Uf,()=>[null,p(RM),n.value?p(PM):null])}}),LM=ye({name:"AppearanceButton",setup(){const t=qr(),{canToggle:e}=Ba(),{isSupported:n}=Tl(),i=xn(),r=et(!1),s=X(()=>!i.value&&t.value.fullscreen&&n),a=X(()=>e.value||s.value);return Yi(()=>{r.value=!1}),()=>a.value?p("div",{class:"vp-nav-item hide-in-mobile"},e.value&&!s.value?p(W0):s.value&&!e.value?p(q0):p("button",{type:"button",class:["vp-appearance-button",{open:r.value}],tabindex:"-1","aria-hidden":!0},[p(V0),p("div",{class:"vp-appearance-dropdown"},p(Y0))])):null}});const dn=({config:t,iconSizing:e="both"},{emit:n,slots:i})=>{const{icon:r}=t;return p(SS,{config:t,onFocusout:()=>{n("focusout")}},{...i,before:i.before??(r?()=>p(Rt("VPIcon"),{icon:r,sizing:e}):null)})};dn.displayName="AutoLink";var DM=ye({name:"NavbarDropdown",props:{config:{type:Object,required:!0}},slots:Object,setup(t,{slots:e}){const n=Bs(t,"config"),i=X(()=>n.value.ariaLabel??n.value.text),r=et(!1),s=a=>{a.detail===0&&(r.value=!r.value)};return Yi(()=>{r.value=!1}),()=>p("div",{class:["vp-dropdown-wrapper",{open:r.value}]},[p("button",{type:"button",class:"vp-dropdown-title","aria-label":i.value,onClick:s},[e.title?.()??[p(Rt("VPIcon"),{icon:n.value.icon}),t.config.text],p("span",{class:"arrow"}),p("ul",{class:"vp-dropdown"},n.value.children.map((a,o)=>{const l=o===n.value.children.length-1;return p("li",{class:"vp-dropdown-item"},"children"in a?[p("h4",{class:"vp-dropdown-subtitle"},a.link?p(dn,{config:a,onFocusout:()=>{a.children.length===0&&l&&(r.value=!1)}}):a.text),p("ul",{class:"vp-dropdown-subitems"},a.children.map((c,u)=>p("li",{class:"vp-dropdown-subitem"},p(dn,{config:c,onFocusout:()=>{u===a.children.length-1&&l&&(r.value=!1)}}))))]:p(dn,{config:a,onFocusout:()=>{l&&(r.value=!1)}}))}))])])}});const lo=(t,e)=>e[e.length-1]===t;var IM=ye({name:"NavScreenMenu",props:{config:{type:Object,required:!0}},setup(t){const e=Bs(t,"config"),n=yi(),i=X(()=>e.value.ariaLabel??e.value.text),r=et(!1);return Yi(()=>{r.value=!1}),Pt(()=>n.fullPath,()=>{r.value=!1}),()=>[p("button",{type:"button",class:["vp-nav-screen-menu-title",{active:r.value}],"aria-label":i.value,onClick:()=>{r.value=!r.value}},[p("span",{class:"text"},[p(Rt("VPIcon"),{icon:e.value.icon,sizing:"both"}),t.config.text]),p("span",{class:["arrow",r.value?"down":"end"]})]),p("ul",{class:["vp-nav-screen-menu",{hide:!r.value}]},e.value.children.map(s=>p("li",{class:"vp-nav-screen-menu-item"},"children"in s?[p("h4",{class:"vp-nav-screen-menu-subtitle"},s.link?p(dn,{config:s,onFocusout:()=>{lo(s,e.value.children)&&s.children.length===0&&(r.value=!1)}}):s.text),p("ul",{class:"vp-nav-screen-menu-subitems"},s.children.map(a=>p("li",{class:"vp-nav-screen-menu-subitem"},p(dn,{config:a,onFocusout:()=>{lo(a,s.children)&&lo(s,e.value.children)&&(r.value=!1)}}))))]:p(dn,{config:s,onFocusout:()=>{lo(s,e.value.children)&&(r.value=!1)}}))))]}});const K0=(t,e="")=>vt(t)?nl(Br(e,t)):"children"in t?{...t,...t.link&&au(t.link)?{link:Bn(Br(e,t.link)).path}:{},children:t.children.map(n=>K0(n,Br(e,t.prefix)))}:{...t,link:au(t.link)?Bn(Br(e,t.link)).path:t.link},Z0=()=>{const t=ii();return X(()=>(t.value.navbar||[]).map(e=>K0(e)))};var NM=ye({name:"NavScreenLinks",setup(){const t=Z0();return()=>t.value.length>0?p("nav",{class:"nav-screen-links"},t.value.map(e=>p("div",{class:"navbar-links-item"},"children"in e?p(IM,{config:e}):p(dn,{config:e})))):null}});const{mobileBreakPoint:UM,pcBreakPoint:FM}=Xs,Yh=t=>t.endsWith("px")?Number(t.slice(0,-2)):null,Al=()=>{const t=et(!1),e=et(!1),n=()=>{t.value=window.innerWidth<=(Yh(UM)??719),e.value=window.innerWidth>=(Yh(FM)??1440)};return _t("resize",n,!1),_t("orientationchange",n,!1),Ct(()=>{n()}),{isMobile:t,isPC:e}};var OM=ye({name:"NavScreen",props:{show:Boolean},slots:Object,setup(t,{slots:e}){const{isMobile:n}=Al(),i=Je(),r=zf(i);return Yi(()=>{r.value=!1}),Pt(n,s=>{!s&&t.show&&(r.value=!1)}),Ct(()=>{i.value=document.body}),ji(()=>{r.value=!1}),()=>p(Ps,{name:"fade-in-down",onEnter:()=>{r.value=!0},onAfterLeave:()=>{r.value=!1}},()=>t.show?p("div",{id:"nav-screen",class:"vp-nav-screen"},p("div",{class:"vp-nav-screen-container"},[e.navScreenTop?.(),p(NM),p("div",{class:"vp-appearance-wrapper"},p(Y0)),e.navScreenBottom?.()])):null)}}),BM=ye({name:"NavbarBrand",setup(){const{routeLocale:t,siteLocale:e,themeLocale:n}=Ht(),i=X(()=>n.value.home??t.value),r=X(()=>e.value.title),s=X(()=>n.value.navbarTitle??r.value),a=X(()=>n.value.logo?At(n.value.logo):null),o=X(()=>n.value.logoDark?At(n.value.logoDark):null);return()=>p(Gt,{to:i.value,class:"vp-brand","aria-label":n.value.routerLocales.home},()=>[a.value?p("img",{class:["vp-nav-logo",{light:!!o.value}],src:a.value,alt:""}):null,o.value?p("img",{class:["vp-nav-logo dark"],src:o.value,alt:""}):null,s.value?p("span",{class:["vp-site-name",{"hide-in-pad":a.value&&(n.value.hideSiteNameOnMobile??!0)}]},s.value):null])}}),kM=ye({name:"NavbarLinks",setup(){const t=Z0();return()=>t.value.length>0?p("nav",{class:"vp-nav-links"},t.value.map(e=>p("div",{class:"vp-nav-item hide-in-mobile"},"children"in e?p(DM,{config:e}):p(dn,{config:e,iconSizing:"height"})))):null}});const VM=()=>{const t=ii(),e=X(()=>t.value.repo),n=X(()=>e.value?rM(e.value):null),i=X(()=>e.value?Gf(e.value):null),r=X(()=>n.value?t.value.repoLabel??i.value??"Source":null);return X(()=>!n.value||!r.value||t.value.repoDisplay===!1?null:{type:i.value??"Source",label:r.value,link:n.value})};var HM=ye({name:"RepoLink",setup(){const t=VM();return()=>t.value?p("div",{class:"vp-nav-item vp-action"},p("a",{class:"vp-action-link",href:t.value.link,target:"_blank",rel:"noopener noreferrer","aria-label":t.value.label},p(sM,{type:t.value.type,style:{width:"1.25rem",height:"1.25rem",verticalAlign:"middle"}}))):null}});const J0=({active:t=!1},{emit:e})=>p("button",{type:"button",class:["vp-toggle-navbar-button",{"is-active":t}],"aria-label":"Toggle Navbar","aria-expanded":t,"aria-controls":"nav-screen",onClick:()=>{e("toggle")}},p("span",[p("span",{class:"vp-top"}),p("span",{class:"vp-middle"}),p("span",{class:"vp-bottom"})]));J0.displayName="ToggleNavbarButton";const lu=(t,{emit:e})=>p("button",{type:"button",class:"vp-toggle-sidebar-button",title:"Toggle Sidebar",onClick:()=>{e("toggle")}},p("span",{class:"icon"}));lu.displayName="ToggleSidebarButton",lu.emits=["toggle"];var zM=ye({name:"NavBar",emits:["toggleSidebar"],slots:Object,setup(t,{emit:e,slots:n}){const i=ii(),{isMobile:r}=Al(),s=et(!1),a=X(()=>{const{navbarAutoHide:u="mobile"}=i.value;return u!=="none"&&(u==="always"||r.value)}),o=X(()=>i.value.navbarLayout??{start:["Brand"],center:["Links"],end:["Language","Repo","Outlook","Search"]}),l={Brand:BM,Language:Oo,Links:kM,Repo:HM,Outlook:LM,Search:Rn("SearchBox")?Rt("SearchBox"):Oo},c=u=>l[u]??(Rn(u)?Rt(u):Oo);return Yi(()=>{s.value=!1}),Pt(r,u=>{u||(s.value=!1)}),()=>[p("header",{key:"navbar",id:"navbar",class:["vp-navbar",{"auto-hide":a.value}],"vp-navbar":""},[p("div",{class:"vp-navbar-start"},[p(lu,{onToggle:()=>{s.value&&(s.value=!1),e("toggleSidebar")}}),o.value.start?.map(u=>p(c(u)))]),p("div",{class:"vp-navbar-center"},[o.value.center?.map(u=>p(c(u)))]),p("div",{class:"vp-navbar-end"},[o.value.end?.map(u=>p(c(u))),p(J0,{active:s.value,onToggle:()=>{s.value=!s.value}})])]),p(OM,{show:s.value},n)]}});const Xf=(t,e)=>e.activeMatch?new RegExp(e.activeMatch,"u").test(t.path):E0(t,e.link);var GM=ye({name:"SidebarChild",props:{config:{type:Object,required:!0}},setup(t){const e=yi();return()=>vt(t.config.link)?p(dn,{class:["vp-sidebar-link",{active:Xf(e,t.config)}],config:{...t.config,exact:!0}}):p("p",t,[p(Rt("VPIcon"),{icon:t.config.icon,sizing:"both"}),t.config.text])}});const jf=(t,e)=>"children"in e?!!e.prefix&&E0(t,e.prefix)||e.children.some(n=>jf(t,n)):Xf(t,e);var WM=ye({name:"SidebarGroup",props:{config:{type:Object,required:!0},open:{type:Boolean,required:!0}},emits:["toggle"],setup(t,{emit:e}){const n=yi(),i=et(!1),r=X(()=>jf(n,t.config)),s=X(()=>Xf(n,t.config)),a=X(()=>t.open||t.config.expanded&&!i.value);return()=>{const{collapsible:o,children:l=[],icon:c,prefix:u,link:f,text:d}=t.config;return p("section",{class:"vp-sidebar-group"},[p(o?"button":"p",{class:["vp-sidebar-header",{clickable:o||f,exact:s.value,active:r.value}],...o?{type:"button",onClick:()=>{i.value=!0,e("toggle")}}:{}},[p(Rt("VPIcon"),{icon:c,sizing:"both"}),f?p(dn,{class:"vp-sidebar-title no-external-link-icon",config:{text:d,link:f}}):p("span",{class:"vp-sidebar-title"},d),o?p("span",{class:["vp-arrow",a.value?"down":"end"]}):null]),a.value||!o?p(Q0,{key:u,config:l}):null])}}}),Q0=ye({name:"SidebarLinks",props:{config:{type:Array,required:!0}},setup(t){const e=yi(),n=gS(),i=et(-1),r=s=>{i.value=s===i.value?-1:s};return ei(n,()=>{const s=t.config.findIndex(a=>jf(e,a));i.value=s},{flush:"post"}),()=>p("ul",{class:"vp-sidebar-links"},t.config.map((s,a)=>p("li","children"in s?p(WM,{config:s,open:a===i.value,onToggle:()=>{r(a)}}):p(GM,{config:s}))))}}),$M=ye({name:"SideBar",slots:Object,setup(t,{slots:e}){const n=yi(),i=$f(),r=Je();return Ct(()=>{ei(()=>n.hash,s=>{const a=document.querySelector(`.vp-sidebar a.vp-sidebar-link[href="${n.path}${s}"]`);if(!a)return;const{top:o,height:l}=r.value.getBoundingClientRect(),{top:c,height:u}=a.getBoundingClientRect();c<o?a.scrollIntoView(!0):c+u>o+l&&a.scrollIntoView(!1)})}),()=>p("aside",{ref:r,key:"sidebar",id:"sidebar",class:"vp-sidebar","vp-sidebar":""},[e.sidebarTop?.(),e.sidebarItems?.(i.value)??p(Q0,{config:i.value}),e.sidebarBottom?.()])}}),qf=ye({name:"MainLayout",props:{containerClass:String,noNavbar:Boolean,noSidebar:Boolean,noToc:Boolean},slots:Object,setup(t,{slots:e}){const{frontmatter:n,theme:i,themeLocale:r}=Ht(),{isMobile:s,isPC:a}=Al(),o=xn(),[l,c]=ru(!1),[u,f]=ru(!1),d=$f(),h=Je(),v=zf(h),_=et(!1),g=X(()=>t.noNavbar||n.value.navbar===!1||r.value.navbar===!1?!1:!!(r.value.logo??r.value.repo??r.value.navbar)),m=X(()=>n.value.externalLinkIcon??i.value.externalLinkIcon??!0),E=X(()=>!t.noToc&&!n.value.home&&!!(n.value.toc??r.value.toc??!0)),y={x:0,y:0},b=L=>{y.x=L.changedTouches[0].clientX,y.y=L.changedTouches[0].clientY},w=L=>{const F=L.changedTouches[0].clientX-y.x,S=L.changedTouches[0].clientY-y.y;Math.abs(F)>Math.abs(S)*1.5&&Math.abs(F)>40&&(F>0&&y.x<=80?c(!0):c(!1))};let P=0;return _t("scroll",Jg(()=>{const L=window.scrollY;L<=58||L<P?_.value=!1:P+200<L&&!l.value&&(_.value=!0),P=L},300,!0)),Pt(s,L=>{L||c(!1)}),Pt(l,L=>{v.value=L}),Yi(()=>{c(!1)}),Ct(()=>{h.value=document.body}),ji(()=>{v.value=!1}),()=>{const L=e.sidebarTop?.(),F=e.sidebarItems?.(d.value),S=e.sidebarBottom?.(),M=Ms(L)&&Ms(F)&&Ms(S),I=t.noSidebar||n.value.sidebar===!1||(n.value.home||d.value.length===0)&&M;return p(Rn("GlobalEncrypt")?Rt("GlobalEncrypt"):Of,()=>p("div",{class:["theme-container",{"hide-navbar":_.value,"no-navbar":!g.value,"sidebar-collapsed":!s.value&&!a.value&&u.value,"sidebar-open":s.value&&l.value,"no-sidebar":I,"external-link-icon":m.value,pure:o.value,"has-toc":E.value},t.containerClass??"",n.value.containerClass??""],"vp-container":"",onTouchStart:b,onTouchEnd:w},[g.value?p(zM,{onToggleSidebar:()=>c()},e):null,p(Ps,{name:"fade-in"},()=>l.value?p("div",{class:"vp-sidebar-mask",onClick:()=>c(!1)}):null),p(Ps,{name:"fade-in"},()=>s.value?null:p("div",{class:"toggle-sidebar-wrapper",onClick:()=>f()},p("span",{class:["arrow",u.value?"end":"start"]}))),I?null:p($M,null,e),e.default(),p(CM)]))}}});const ev=()=>{const{frontmatter:t,themeLocale:e}=Ht(),n=X(()=>t.value.changelog??((e.value.changelog??!1)&&!t.value.home)),i=X(()=>{const{contributors:s,home:a}=t.value;return zi(s)?a?!1:e.value.contributors??!0:s??(a?!1:e.value.contributors??!0)}),r=X(()=>t.value.lastUpdated??e.value.lastUpdated??!0);return{changelog:n,contributors:i,lastUpdated:r}};var wl=ye({name:"MarkdownContent",props:{custom:Boolean},slots:Object,setup(t,{slots:e}){const n=qr(),{changelog:i,contributors:r}=ev(),s=et(),a=fb(s,{delayEnter:Fo(n.value.focus)?n.value.focus:1500,delayLeave:0}),o=X(()=>!!(n.value.focus??n.value.pure)&&a.value);return Ct(()=>{const l=document.documentElement;ei(o,c=>{l.classList.toggle("is-focusing",c)})}),()=>p("div",{class:{custom:t.custom},"vp-content":""},[e.contentBefore?.(),p(zg,{ref:s,id:"markdown-content"}),e.contentAfter?.(),i.value&&Rn("GitChangelog")?p(Rt("GitChangelog")):null,r.value==="content"&&Rn("GitContributors")?p(Rt("GitContributors")):null])}});const XM=({target:t})=>{const e=document.querySelector(t.hash);if(e){const n=()=>{e.removeAttribute("tabindex"),e.removeEventListener("blur",n)};e.setAttribute("tabindex","-1"),e.addEventListener("blur",n),e.focus(),window.scrollTo(0,0)}};var Yf=ye({name:"SkipLink",props:{content:{type:String,default:"main-content"}},setup(t){const e=ii(),n=Je();return Yi(()=>{n.value?.focus()}),()=>[p("span",{ref:n,tabindex:"-1"}),p("a",{href:`#${t.content}`,class:"vp-skip-link sr-only",onClick:XM},e.value.routerLocales.skipToContent)]}});const cu=()=>p(St,{name:"slide-down"},()=>p("path",{d:"M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"}));cu.displayName="SlideDownIcon";const Kf=(t,{emit:e})=>p("button",{type:"button",class:"vp-hero-slide-down-button",onClick:()=>{e("click")}},[p(cu),p(cu)]);Kf.displayName="HeroSlideDownButton";const Kh=t=>{t.style.transform="translateY(0)",t.style.opacity="1"};var Ze=ye({name:"DropTransition",props:{delay:{type:Number,default:0},duration:{type:Number,default:.25},group:Boolean,appear:Boolean},slots:Object,setup(t,{slots:e}){const n=i=>{i.style.transition=`transform ${t.duration}s ease-in-out ${t.delay}s, opacity ${t.duration}s ease-in-out ${t.delay}s`,i.style.transform="translateY(-20px)",i.style.opacity="0"};return()=>{const i={name:"drop",appear:t.appear,onAppear:n,onAfterAppear:Kh,onEnter:n,onAfterEnter:Kh,onBeforeLeave:n};return t.group?p(bg,i,e.default):p(Ps,i,e.default)}}});let oc=null,lc=null;const uu={wait:()=>oc,pending:()=>{oc=new Promise(t=>{lc=t})},resolve:()=>{lc?.(),oc=null,lc=null}};var jM=ye({name:"MainFadeInUpTransition",slots:Object,setup(t,{slots:e}){const n=xn();return()=>n.value?p(Of,e.default):p(Ps,{name:"fade-in-up",mode:"out-in",onBeforeEnter:uu.resolve,onBeforeLeave:uu.pending},e.default)}}),qM=ye({name:"PageTitle",setup(){const{frontmatter:t,page:e,themeLocale:n}=Ht(),{info:i,items:r}=pM();return()=>p("div",{class:"vp-page-title"},[p("h1",[n.value.titleIcon===!1?null:p(Rt("VPIcon"),{icon:t.value.icon}),e.value.title]),p(F0,{info:i.value,items:r.value}),p("hr")])}});const YM=(t,e)=>{const n=t.replace(e,"/").split("/"),i=[];let r=Pf(e);return n.forEach((s,a)=>{a!==n.length-1?(r+=`${s}/`,i.push({link:r,name:s||"Home"})):s!==""&&(r+=s,i.push({link:r,name:s}))}),i};var KM=ye({name:"BreadCrumb",setup(){const{frontmatter:t,page:e,routeLocale:n,routePath:i,themeLocale:r}=Ht(),s=Je([]),a=X(()=>(t.value.breadcrumb??r.value.breadcrumb??!0)&&s.value.length>1),o=X(()=>t.value.breadcrumbIcon??r.value.breadcrumbIcon??!0),l=()=>{const c=YM(e.value.path,n.value).map(({link:u,name:f})=>{const{path:d,meta:h,notFound:v}=Bn(u);return v||h.breadcrumbExclude?null:{title:h.shortTitle||h.title||f,icon:h.icon,path:d}}).filter(u=>u!==null);c.length>1&&(s.value=c)};return Ct(()=>{ei(i,l)}),()=>p("nav",{class:["vp-breadcrumb",{disable:!a.value}]},a.value?p("ol",{vocab:"https://schema.org/",typeof:"BreadcrumbList"},s.value.map((c,u)=>p("li",{class:{"is-active":s.value.length-1===u},property:"itemListElement",typeof:"ListItem"},[p(Gt,{to:c.path,property:"item",typeof:"WebPage"},()=>[o.value?p(Rt("VPIcon"),{icon:c.icon}):null,p("span",{property:"name"},c.title||"Unknown")]),p("meta",{property:"position",content:u+1})]))):[])}});const Zh=(t,e)=>t===!1?t:Vs(t)?{...t,link:nl(t.link,!0,e).link}:vt(t)?nl(t,!0,e):null,fu=(t,e,n)=>{const i=t.findIndex(s=>s.link===e);if(i!==-1){if(!t[i+n])return null;const s=t[i+n];return s.link?s:"prefix"in s&&!Bn(s.prefix).notFound?{...s,link:s.prefix}:null}for(const s of t)if("children"in s){const a=fu(s.children,e,n);if(a)return a}const r=t.findIndex(s=>"prefix"in s&&s.prefix===e);if(r!==-1){if(!t[r+n])return null;const s=t[r+n];return s.link?s:"prefix"in s&&!Bn(s.prefix).notFound?{...s,link:s.prefix}:null}return null},ZM=()=>{const{frontmatter:t,routePath:e,themeLocale:n}=Ht(),i=$f(),r=X(()=>{const a=Zh(t.value.prev,e.value);return a===!1?null:a??(n.value.prevLink===!1?null:fu(i.value,e.value,-1))}),s=X(()=>{const a=Zh(t.value.next,e.value);return a===!1?null:a??(n.value.nextLink===!1?null:fu(i.value,e.value,1))});return{prevLink:r,nextLink:s}};var JM=ye({name:"PageNav",setup(){const t=Vn(),e=Ki(),{prevLink:n,nextLink:i}=ZM();return _t("keydown",r=>{if(r.altKey)switch(r.key){case"ArrowRight":{i.value&&(e(i.value.link),r.preventDefault());break}case"ArrowLeft":{n.value&&(e(n.value.link),r.preventDefault());break}}}),()=>n.value||i.value?p("nav",{class:"vp-page-nav"},[n.value?p(dn,{class:"prev",config:n.value},()=>[p("div",{class:"hint"},[p("span",{class:"arrow start"}),t.value.prev]),p("div",{class:"link"},[p(Rt("VPIcon"),{icon:n.value?.icon}),n.value?.text])]):null,i.value?p(dn,{class:"next",config:i.value},()=>[p("div",{class:"hint"},[t.value.next,p("span",{class:"arrow end"})]),p("div",{class:"link"},[i.value?.text,p(Rt("VPIcon"),{icon:i.value?.icon})])]):null]):null}}),QM=ye({name:"PrintButton",setup(){const t=Vn(),e=qr();return()=>e.value.print===!1?null:p("button",{type:"button",class:"print-button",title:t.value.print,onClick:()=>{window.print()}},p(D0))}});const Jh={selector:[...Array.from({length:6}).map((t,e)=>`#markdown-content > h${e+1}`),"[vp-content] > h2"].join(", "),levels:"deep",ignore:[".vp-badge",".vp-icon"]};var e3=ye({name:"TOC",props:{items:Array},slots:Object,setup(t,{slots:e}){const{frontmatter:n,themeLocale:i}=Ht(),r=X(()=>{const g=n.value.toc??i.value.toc;return Vs(g)?{...Jh,...g}:g??!0?Jh:void 0}),s=BS(r),a=yi(),o=Vn(),[l,c]=ru(),u=Je(),f=et("-2rem"),d=g=>{u.value?.scrollTo({top:g,behavior:"smooth"})},h=()=>{if(u.value){const g=document.querySelector(".vp-toc-item.active");g?f.value=`${g.getBoundingClientRect().top-u.value.getBoundingClientRect().top+u.value.scrollTop}px`:f.value="-2rem"}else f.value="-2rem"};Ct(()=>{ei(()=>a.hash,g=>{if(u.value){const m=document.querySelector(`#toc a.vp-toc-link[href$="${g}"]`);if(!m)return;const{top:E,height:y}=u.value.getBoundingClientRect(),{top:b,height:w}=m.getBoundingClientRect();b<E?d(u.value.scrollTop+b-E):b+w>E+y&&d(u.value.scrollTop+b+w-E-y)}},{flush:"post"}),ei(()=>a.fullPath,h,{flush:"post"})});const v=({title:g,level:m,slug:E})=>p(Gt,{to:`#${E}`,class:["vp-toc-link",`level${m}`],onClick:()=>{c()}},()=>g),_=g=>g.length>0?p("ul",{class:"vp-toc-list"},g.map(m=>{const E=_(m.children);return[p("li",{class:["vp-toc-item",{active:a.hash===`#${m.slug}`}]},v(m)),E?p("li",E):null]})):null;return()=>r.value||t.items?.length?p(Uf,()=>{const g=t.items?.length?_(t.items):_(s.value),m=e.toc?.(s.value)??(g?[p("div",{class:"vp-toc-header",onClick:()=>{c()}},[o.value.toc,p(QM),p("div",{class:["arrow",l.value?"down":"end"]})]),p("div",{class:["vp-toc-wrapper",l.value?"open":""],ref:u},[g,p("div",{class:"vp-toc-marker",style:{top:f.value}})])]:null),E=e.tocBefore?.(),y=e.tocAfter?.();return Ms(m)&&Ms(E)&&Ms(y)?null:p("div",{class:"vp-toc-placeholder"},[p("aside",{id:"toc","vp-toc":""},[E,m,y])])}):null}});const tv=()=>p(St,{name:"edit"},()=>[p("path",{d:"M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"}),p("path",{d:"M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"})]);tv.displayName="EditIcon";const t3={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},n3=({docsRepo:t,docsBranch:e,docsDir:n,filePathRelative:i,editLinkPattern:r})=>{if(!i)return null;const s=Gf(t);let a="";return r?a=r:s!==null&&(a=t3[s]),a?a.replace(/:repo/u,ks(t)?t:`https://github.com/${t}`).replace(/:branch/u,e).replace(/:path/u,Tg(`${Pf(n)}/${i}`)):null},i3=()=>{const{frontmatter:t,page:e,themeLocale:n}=Ht(),i=Vn();return X(()=>{const{repo:r,docsRepo:s=r,docsBranch:a="main",docsDir:o="",editLink:l,editLinkPattern:c=""}=n.value;if(!(t.value.editLink??l??!0)||!s)return null;const u=n3({docsRepo:s,docsBranch:a,docsDir:o,editLinkPattern:c,filePathRelative:e.value.filePathRelative});return u?{text:i.value.editLink,link:u}:null})};var r3=ye({name:"PageMeta",setup(){const t=ev(),e=n0(),n=i3(),i=Sb(t.lastUpdated),r=Vn();return()=>p("footer",{class:"vp-page-meta"},[n.value?p("div",{class:"vp-meta-item edit-link"},p(dn,{class:"vp-meta-label",config:n.value},{before:()=>p(tv)})):null,p("div",{class:"vp-meta-item git-info"},[(!t.changelog.value||!Rn("GitChangelog"))&&i.value?p("div",{class:"update-time"},[p("span",{class:"vp-meta-label"},`${i.value.locale}: `),p("time",{class:"vp-meta-info",datetime:i.value.iso,"data-allow-mismatch":""},i.value.text)]):null,t.contributors.value&&t.contributors.value!=="content"&&e.value.length>0?p("div",{class:"contributors"},[p("span",{class:"vp-meta-label"},`${r.value.contributors}: `),e.value.map(({email:s,name:a},o,l)=>[p("span",{class:"vp-meta-info",title:`email: ${s}`},a),o===l.length-1?"":","])]):null])])}}),s3=ye({name:"PageContent",slots:Object,setup(t,{slots:e}){const{frontmatter:n}=Ht(),{isDarkMode:i}=Ba();return()=>p("main",{id:"main-content",class:"vp-page"},p(Rn("LocalEncrypt")?Rt("LocalEncrypt"):Of,()=>[e.pageTop?.(),n.value.cover?p("div",{class:"page-cover"},p("img",{src:At(n.value.cover),alt:"","no-view":""})):null,p(KM),p(qM),p(e3,null,e),e.content?.()??p(wl,null,e),p(r3),p(JM),Rn("CommentService")?p(Rt("CommentService"),{darkmode:i.value}):null,e.pageBottom?.()]))}});const du=(t,{slots:e})=>{const{bgImage:n,bgImageDark:i,bgImageStyle:r,color:s,description:a,image:o,imageDark:l,header:c,features:u=[]}=t;return p("div",{class:"vp-feature-wrapper"},[n?p("div",{class:["vp-feature-bg",{light:i}],style:[{"background-image":`url(${n})`},r]}):null,i?p("div",{class:"vp-feature-bg dark",style:[{"background-image":`url(${i})`},r]}):null,p("div",{class:"vp-feature",style:s?{color:s}:{}},[e.image?.(t)??[o?p("img",{class:["vp-feature-image",{light:l}],src:At(o),alt:""}):null,l?p("img",{class:"vp-feature-image dark",src:At(l),alt:""}):null],e.info?.(t)??[c?p("h2",{class:"vp-feature-header"},c):null,a?p("div",{class:"vp-feature-description",innerHTML:a}):null],u.length>0?p("div",{class:"vp-features"},u.map(({icon:f,title:d,details:h,link:v})=>{const _=[p("h3",{class:"vp-feature-title"},[p(Rt("VPIcon"),{icon:f}),p("span",{innerHTML:d})]),p("div",{class:"vp-feature-details",innerHTML:h})];return v?Rf(v)?p("a",{class:"vp-feature-item link",href:v,"aria-label":d,target:"_blank"},_):p(Gt,{class:"vp-feature-item link",to:v,"aria-label":d},()=>_):p("div",{class:"vp-feature-item"},_)})):null])])};du.displayName="FeaturePanel";var a3=ye({name:"HeroInfo",slots:Object,setup(t,{slots:e}){const{frontmatter:n,siteLocale:i}=Ht(),r=X(()=>{const{heroText:l,tagline:c,heroStyle:u,heroFullScreen:f=!1}=n.value;return{text:l??(i.value.title||"Hello"),tagline:c??i.value.description,style:u??null,isFullScreen:f}}),s=X(()=>{const{heroImage:l,heroImageDark:c,heroAlt:u,heroImageStyle:f}=n.value;return{image:l?At(l):null,imageDark:c?At(c):null,style:f??null,alt:u??""}}),a=X(()=>{const{bgImage:l,bgImageDark:c,bgImageStyle:u}=n.value;return{image:vt(l)?At(l):null,imageDark:vt(c)?At(c):null,style:u??null}}),o=X(()=>n.value.actions??[]);return()=>p("header",{class:["vp-hero-info-wrapper",{"hero-fullscreen":r.value.isFullScreen}],style:r.value.style},[e.heroBg?.(a.value)??[a.value.image?p("div",{class:["vp-hero-mask",{light:a.value.imageDark}],style:[{"background-image":`url(${a.value.image})`},a.value.style]}):null,a.value.imageDark?p("div",{class:"vp-hero-mask dark",style:[{"background-image":`url(${a.value.imageDark})`},a.value.style]}):null],p("div",{class:"vp-hero-info"},[e.heroLogo?.(s.value)??p(Ze,{appear:!0,group:!0},()=>{const{image:l,imageDark:c,style:u,alt:f}=s.value;return[l?p("img",{key:"light",class:["vp-hero-image",{light:c}],style:u,src:l,alt:f}):null,c?p("img",{key:"dark",class:"vp-hero-image dark",style:u,src:c,alt:f}):null]}),e.heroInfo?.(r.value)??p("div",{class:"vp-hero-infos"},[r.value.text?p(Ze,{appear:!0,delay:.04},()=>p("h1",{id:"main-title",class:"vp-hero-title"},r.value.text)):null,r.value.tagline?p(Ze,{appear:!0,delay:.08},()=>p("div",{id:"main-description",innerHTML:r.value.tagline})):null,o.value.length>0?p(Ze,{appear:!0,delay:.12},()=>p("p",{class:"vp-hero-actions"},o.value.map(l=>p(dn,{class:["vp-hero-action",l.type??"default","no-external-link-icon"],config:l})))):null])]),r.value.isFullScreen?p(Kf,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}}):null])}});const nv=(t,{slots:e})=>{const{bgImage:n,bgImageDark:i,bgImageStyle:r,color:s,description:a,image:o,imageDark:l,header:c,highlights:u=[],type:f="un-order"}=t;return p("div",{class:"vp-highlight-wrapper",style:s?{color:s}:{}},[n?p("div",{class:["vp-highlight-bg",{light:i}],style:[{"background-image":`url(${n})`},r]}):null,i?p("div",{class:"vp-highlight-bg dark",style:[{"background-image":`url(${i})`},r]}):null,p("div",{class:"vp-highlight"},[e.image?.(t)??[o?p("img",{class:["vp-highlight-image",{light:l}],src:At(o),alt:""}):null,l?p("img",{class:"vp-highlight-image dark",src:At(l),alt:""}):null],e.info?.(t)??[p("div",{class:"vp-highlight-info-wrapper"},p("div",{class:"vp-highlight-info"},[c?p("h2",{class:"vp-highlight-header",innerHTML:c}):null,a?p("div",{class:"vp-highlight-description",innerHTML:a}):null,e.highlights?.(u)??p(f==="order"?"ol":f==="no-order"?"dl":"ul",{class:"vp-highlights"},u.map(({icon:d,title:h,details:v,link:_})=>{const g=[p(f==="no-order"?"dt":"h3",{class:"vp-highlight-title"},[d?p(Rt("VPIcon"),{class:"vp-highlight-icon",icon:d}):null,p("span",{innerHTML:h})]),v?p(f==="no-order"?"dd":"div",{class:"vp-highlight-details",innerHTML:v}):null];return p(f==="no-order"?"div":"li",{class:["vp-highlight-item-wrapper",{link:_}]},_?Rf(_)?p("a",{class:"vp-highlight-item link",href:_,"aria-label":h,target:"_blank"},g):p(Gt,{class:"vp-highlight-item link",to:_,"aria-label":h},()=>g):p("div",{class:"vp-highlight-item"},g))}))]))]])])};nv.displayName="HighlightSection";var o3=ye({name:"HomePage",slots:Object,setup(t,{slots:e}){const n=Pn();return()=>{const{features:i,highlights:r}=n.value;return p("main",{id:"main-content",class:"vp-page vp-project-home","aria-labelledby":n.value.heroText===""?"":"main-title"},[e.heroBefore?.(),p(a3,null,e),e.heroAfter?.(),zi(r)?r.map(s=>"features"in s?p(du,s):p(nv,s)):zi(i)?p(Ze,{appear:!0,delay:.24},()=>p(du,{features:i})):null,e.content?.()??p(Ze,{appear:!0,delay:.32},()=>p(wl,null,e))])}}}),l3=ye({name:"PortfolioHero",slots:Object,setup(t,{slots:e}){const n=M0(),i=Pn(),r=et(0),s=X(()=>i.value.titles?.[r.value]??""),a=et(""),o=X(()=>{const{name:d,avatar:h,avatarDark:v,avatarAlt:_,avatarStyle:g}=i.value;return{name:d??n.value.name,avatar:h?At(h):null,avatarDark:v?At(v):null,alt:(_||d)??"",style:g??null}}),l=X(()=>{const{bgImage:d,bgImageDark:h,bgImageStyle:v}=i.value;return{image:vt(d)?At(d):null,imageDark:vt(h)?At(h):null,style:v??null}}),c=X(()=>{const{welcome:d,name:h,titles:v=[],medias:_}=i.value;return{name:h??n.value.name,welcome:d??"👋 Hi There, I'm",title:a.value,titles:v,medias:_??null}}),u=()=>{a.value="";let d=0,h=!1;const v=async()=>{if(!h)if(a.value+=s.value[d],d+=1,await xi(),d<s.value.length)setTimeout(()=>{v()},150);else{const{length:_}=c.value.titles;setTimeout(()=>{r.value=_<=1||r.value===c.value.titles.length-1?0:r.value+1},1e3)}};return v(),()=>{h=!0}};let f;return Ct(()=>{ei(s,()=>{f?.(),f=u()})}),()=>p("section",{id:"portfolio",class:["vp-portfolio",{bg:l.value.image}]},[e.portfolioBg?.(l.value)??[l.value.image?p("div",{class:["vp-portfolio-mask",{light:l.value.imageDark}],style:[{background:`url(${l.value.image}) center/cover no-repeat`},l.value.style]}):null,l.value.imageDark?p("div",{class:"vp-portfolio-mask dark",style:[{background:`url(${l.value.imageDark}) center/cover no-repeat`},l.value.style]}):null],e.portfolioAvatar?.(o.value)??p("div",{class:"vp-portfolio-avatar"},[p(Ze,{delay:.04},()=>{const{avatar:d,avatarDark:h,name:v,alt:_,style:g}=o.value;return[d?p("img",{key:"light",class:{light:h},src:d,title:v,alt:_,style:g}):null,h?p("img",{key:"dark",class:"dark",src:h,title:v,alt:_,style:g}):null]})]),p("div",{class:"vp-portfolio-container"},e.portfolioInfo?.(c.value)??p("div",{class:"vp-portfolio-info"},[p(Ze,{appear:!0,delay:.08},()=>p("h6",{class:"vp-portfolio-welcome"},c.value.welcome)),p(Ze,{appear:!0,delay:.12},()=>p("h1",{class:"vp-portfolio-name",id:"main-title"},c.value.name)),p(Ze,{appear:!0,delay:.16},()=>p("h2",{class:"vp-portfolio-title"},a.value)),p(Ze,{appear:!0,delay:.2},()=>c.value.medias?p("div",{class:"vp-portfolio-medias"},c.value.medias.map(({name:d,url:h,icon:v})=>p("a",{class:"vp-portfolio-media",href:h,rel:"noopener noreferrer",target:"_blank",title:d},p(Rt("VPIcon"),{icon:v,sizing:"both"})))):Rn("SocialMedias")?p(Rt("SocialMedias")):null)]))])}}),c3=ye({name:"PortfolioHome",slots:Object,setup(t,{slots:e}){const n=Pn();return()=>{const i=n.value.content??"portfolio";return p("main",{id:"main-content",class:"vp-page vp-portfolio-home","aria-labelledby":"main-title"},[p(l3,null,e),i==="none"?null:e.content?.()??p("div",p(Ze,{appear:!0,delay:.24},()=>p(wl,{class:{"vp-portfolio-content":i==="portfolio"}},e)))])}}}),u3=ye({name:"Layout",slots:Object,setup(t,{slots:e}){const{frontmatter:n,page:i}=Ht();return()=>[p(Yf),p(qf,null,{...e,default:e.default??(()=>n.value.portfolio?p(c3,null,e):n.value.home?p(o3,null,e):p(jM,()=>p(s3,{key:i.value.path},e))),navScreenBottom:e.navScreenBottom??(Rn("BloggerInfo")?()=>p(Rt("BloggerInfo")):null)})]}}),f3=ye({name:"NotFound",slots:Object,setup(t,{slots:e}){const{routeLocale:n,theme:i,themeLocale:r}=Ht(),s=xr(),a=et(!1),o=X(()=>i.value.locales[a.value?n.value:"/"].routerLocales),l=()=>{if(!a.value)return o.value.notFoundMsg[0];const c=o.value.notFoundMsg;return c[Math.floor(Math.random()*c.length)]};return Ct(()=>{a.value=!0}),()=>[p(Yf),p(qf,{noSidebar:!0},{...e,default:()=>p("main",{id:"main-content",class:"vp-page not-found"},e.default?.()??[p("div",{class:"not-found-hint"},[p("p",{class:"error-code"},"404"),p("h1",{class:"error-title"},o.value.notFoundTitle),p("p",{class:"error-hint"},l())]),p("div",{class:"actions"},[p("button",{type:"button",class:"action-button",onClick:()=>{window.history.go(-1)}},o.value.back),p("button",{type:"button",class:"action-button",onClick:()=>{s.push(r.value.home??n.value)}},o.value.home)])])})]}});const iv=()=>p(St,{name:"lock"},()=>p("path",{d:"M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"}));iv.displayName="LockIcon";const d3=JSON.parse('{"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[0,1,2,3,4]},"指南":{"path":"/category/%E6%8C%87%E5%8D%97/","indexes":[5]},"数据库":{"path":"/category/%E6%95%B0%E6%8D%AE%E5%BA%93/","indexes":[6,7,8]},"java web":{"path":"/category/java-web/","indexes":[9]},"linux":{"path":"/category/linux/","indexes":[10]},"信号与系统":{"path":"/category/%E4%BF%A1%E5%8F%B7%E4%B8%8E%E7%B3%BB%E7%BB%9F/","indexes":[11]},"网络":{"path":"/category/%E7%BD%91%E7%BB%9C/","indexes":[12]},"数据结构":{"path":"/category/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/","indexes":[13]},"算法":{"path":"/category/%E7%AE%97%E6%B3%95/","indexes":[14]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","indexes":[2]},"加密":{"path":"/tag/%E5%8A%A0%E5%AF%86/","indexes":[3]},"布局":{"path":"/tag/%E5%B8%83%E5%B1%80/","indexes":[5]},"Markdown":{"path":"/tag/markdown/","indexes":[4]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","indexes":[0]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","indexes":[0]},"算法":{"path":"/tag/%E7%AE%97%E6%B3%95/","indexes":[14]},"模板":{"path":"/tag/%E6%A8%A1%E6%9D%BF/","indexes":[14]},"Python":{"path":"/tag/python/","indexes":[14]},"C++":{"path":"/tag/c__/","indexes":[14]},"Java":{"path":"/tag/java/","indexes":[14]}}}}}'),rv=JSON.parse('["/demo/page.html","/demo/","/demo/disable.html","/demo/encrypt.html","/demo/markdown.html","/demo/layout.html","/posts/%E5%85%B6%E4%BB%96/1sjk.html","/posts/%E5%85%B6%E4%BB%96/2sjk.html","/posts/%E5%85%B6%E4%BB%96/3.sjk.html","/posts/%E5%85%B6%E4%BB%96/javaweb.html","/posts/%E5%85%B6%E4%BB%96/linux.html","/posts/%E5%85%B6%E4%BB%96/signal.html","/posts/%E5%85%B6%E4%BB%96/web.html","/posts/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84/stack.html","/posts/%E7%AE%97%E6%B3%95/%E4%B8%80%E4%BA%9B%E7%AE%97%E6%B3%95%E7%9A%84%E6%A8%A1%E6%9D%BF.html","/posts/%E8%80%83%E7%A0%94%E6%95%B0%E5%AD%A6/1.html","/intro.html"]'),h3=JSON.parse('{"article":{"/":{"path":"/article/","indexes":[9,10,6,7,8,11,12,0,14,15,13,16,1,2,3,5,4]}},"star":{"/":{"path":"/star/","indexes":[9,10,6,7,8,11,12,0]}},"timeline":{"/":{"path":"/timeline/","indexes":[14,9,10,15,6,7,8,11,13,16,1,2,3,5,4,12,0]}}}'),hu=Je(d3);gi(hu);const sv=t=>{const{frontmatter:e,page:n,routeLocale:i}=yr();return X(()=>{const r=t??e.value.blog?.key??"";if(!r)return console.warn("useBlogCategory: key not found"),{path:"/",map:{}};if(!(r in hu.value))throw new Error(`useBlogCategory: key ${r} is invalid`);const s=hu.value[r][i.value],a={path:s.path,map:{}};for(const o in s.map){const l=s.map[o];a.map[o]={path:l.path,items:[]};for(const c of l.indexes){const{path:u,meta:f}=Bn(rv[c]);a.map[o].items.push({path:u,info:f})}n.value.path===l.path&&(a.currentItems=a.map[o].items)}return a})},pu=Je(h3);gi(pu);const Cl=t=>{const{frontmatter:e,routeLocale:n}=yr();return X(()=>{const i=t??e.value.blog?.key??"";if(!i)return console.warn("useBlogType: key not found"),{path:"/",items:[]};if(!(i in pu.value))throw new Error(`useBlogType: key ${t} is invalid`);const r=pu.value[i][n.value],s={path:r.path,items:[]};for(const a of r.indexes){const{path:o,meta:l}=Bn(rv[a]);s.items.push({path:o,info:l})}return s})},p3={BiliBili:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon bilibili-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1296db"/><path fill="#fff" d="M745.363 177.725a47 47 0 0 1 0 66.3L702.5 286.85h44A141 141 0 0 1 887 427.512v281.25a141 141 0 0 1-141 140.626H277.25A141 141 0 0 1 137 708.763v-281.25a141 141 0 0 1 141-141h43.725l-42.788-42.825a47 47 0 1 1 66.263-66.3l99.45 99.45c2.963 2.962 5.438 6.187 7.425 9.637h120.487c1.988-3.45 4.5-6.75 7.463-9.675l99.413-99.45a47 47 0 0 1 66.3 0zm1.012 203.25h-468.75a47 47 0 0 0-46.763 43.388l-.112 3.525v281.25c0 24.712 19.125 44.962 43.387 46.724l3.488.15h468.75a47 47 0 0 0 46.763-43.387l.112-3.487v-281.25c0-26-21-47-47-46.876zm-375 93.75c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47zm281.25 0c26 0 47 21 47 47v47a47 47 0 1 1-93.75 0V521.6c0-26 21-47 47-47z"/></svg>',Email:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon email-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#1384FF"/><path fill="#fff" d="M270.077 286.233H751.99c32.933 0 59.86 24.855 60.274 55.51l-301.023 157L210.217 341.88c.207-30.723 26.927-55.717 59.86-55.717zm-59.929 115.714-.276 277.756c0 30.931 27.134 56.2 60.205 56.2H751.99c33.14 0 60.274-25.269 60.274-56.2V401.81L518.283 551.492a15.88 15.88 0 0 1-14.43 0L210.148 401.947z"/></svg>',Github:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon github-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#171515"/><path fill="#fff" d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z"/></svg>',QQ:'<svg xmlns="http://www.w3.org/2000/svg" class="vp-social-media-icon qq-icon" viewBox="0 0 1024 1024"><circle cx="512" cy="512" r="512" fill="#5eaade"/><path fill="#fff" d="M805.25 585.542c-15-48.188-32.25-88.688-58.781-154.97 4.125-174.093-68.25-314.905-234.938-314.905-168.562 0-239.344 143.625-234.844 314.906-26.625 66.375-43.78 106.594-58.78 154.969-31.876 102.656-21.563 145.125-13.688 146.062 16.875 2.063 65.718-77.25 65.718-77.25 0 45.938 23.625 105.844 74.813 149.063-24.75 7.593-80.344 28.03-67.125 50.437 10.688 18.094 183.938 11.531 233.906 5.906 49.969 5.625 223.219 12.188 233.906-5.906 13.22-22.312-42.468-42.844-67.125-50.437 51.188-43.313 74.813-103.22 74.813-149.063 0 0 48.844 79.313 65.719 77.25 7.969-1.031 18.281-43.5-13.594-146.062z"/></svg>'};var m3=[];const ka=()=>{const{theme:t,themeLocale:e}=Ht();return X(()=>({...t.value.blog,...e.value.blog}))};var av=ye({name:"SocialMedias",setup(){const t=ka(),e=xn(),n=X(()=>Hs(t.value.medias??{}).map(([i,r])=>typeof r=="string"?{name:i,icon:p3[i],link:r}:{name:i,...r}));return()=>n.value.length>0?p("div",{class:"vp-social-medias"},n.value.map(({name:i,icon:r,link:s})=>p("a",{class:"vp-social-media",href:s,rel:"noopener noreferrer",target:"_blank","aria-label":i||"",...e.value?{}:{"data-balloon-pos":"up"},innerHTML:ks(r)?`<img class="vp-social-media-icon ${i}-icon" src="${r}">`:r}))):null}});const ov=Symbol(""),Va=()=>{const t=wt(ov);if(!t)throw new Error("useArticles() is called without provider.");return t},g3=()=>{const t=Cl("article");Kn(ov,t)},Zi=()=>{const t=ii();return X(()=>t.value.blogLocales)},lv=Symbol.for("categoryMap"),Ha=()=>{const t=wt(lv);if(!t)throw new Error("useCategoryMap() is called without provider.");return t},v3=()=>{const t=sv("category");Kn(lv,t)},cv=Symbol.for("tagMap"),za=()=>{const t=wt(cv);if(!t)throw new Error("useTagMap() is called without provider.");return t},_3=()=>{const t=sv("tag");Kn(cv,t)},uv=Symbol(""),Zf=()=>{const t=wt(uv);if(!t)throw new Error("useTimeline() is called without provider.");return t},x3=()=>{const t=Cl("timeline"),e=Nf(),n=X(()=>{const i=[];return t.value.items.forEach(({info:r,path:s})=>{const a=Bf(r.date);if(a){const o=a.getFullYear();i[0]?.year!==o&&i.unshift({year:o,items:[]}),i[0].items.push({date:a.toLocaleDateString(e.value,{month:"numeric",day:"numeric"}),info:r,path:s})}}),{...t.value,config:i.reverse()}});Kn(uv,n)};var Jf=ye({name:"BloggerInfo",slots:Object,setup(t,{slots:e}){const n=Zi(),i=ka(),{siteLocale:r,themeLocale:s}=Ht(),a=Va(),o=Ha(),l=za(),c=Zf(),u=Ki(),f=X(()=>({name:i.value.name??Ea(s.value.author)[0]?.name??r.value.title,avatar:i.value.avatar??s.value.logo??null,description:i.value.description??null})),d=X(()=>i.value.intro);return()=>{const{article:h,category:v,tag:_,timeline:g}=n.value,m=[[a.value.path,a.value.items.length,h],[o.value.path,gr(o.value.map).length,v],[l.value.path,gr(l.value.map).length,_],[c.value.path,c.value.items.length,g]];return p("div",{class:"vp-blogger-info",vocab:"https://schema.org/",typeof:"Person"},e.bloggerInfo?.(f.value)??[p("div",{class:"vp-blogger",...d.value?{"aria-label":n.value.intro,"data-balloon-pos":"down",role:"link",onClick:()=>{u(d.value)}}:{}},[f.value.avatar?p("img",{class:"vp-blogger-avatar",src:At(f.value.avatar),property:"image",alt:"Blogger Avatar",loading:"lazy"}):null,f.value.name?p("div",{class:"vp-blogger-name",property:"name"},f.value.name):null,f.value.description?p("div",{class:"vp-blogger-description",innerHTML:f.value.description}):null,d.value?p("meta",{property:"url",content:At(d.value)}):null]),p("div",{class:"vp-blog-counts"},m.map(([E,y,b])=>p(Gt,{class:"vp-blog-count",to:E},()=>[p("div",{class:"count"},y),p("div",b)]))),p(av)])}}});const fv=Symbol(""),Qf=()=>{const t=wt(fv);if(!t)throw new Error("useStars() is called without provider.");return t},y3=()=>{const t=Cl("star");Kn(fv,t)},ed=()=>p(St,{name:"category"},()=>p("path",{d:"M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"}));ed.displayName="CategoryIcon";const td=()=>p(St,{name:"tag"},()=>p("path",{d:"M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"}));td.displayName="TagIcon";const nd=()=>p(St,{name:"timeline"},()=>p("path",{d:"M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"}));nd.displayName="TimelineIcon";const dv=()=>p(St,{name:"slides"},()=>p("path",{d:"M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"}));dv.displayName="SlideIcon";const hv=()=>p(St,{name:"sticky"},()=>[p("path",{d:"m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"})]);hv.displayName="StickyIcon";const id=()=>p(St,{name:"article"},()=>p("path",{d:"M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"}));id.displayName="ArticleIcon";const S3=t=>{const e=ii();return X(()=>{const{author:n}=t.value;return n?Ea(n):n===!1?[]:Ea(e.value.author,!1)})},b3=t=>{const e=Ha();return X(()=>A0(t.value.category).map(n=>({name:n,path:e.value.map[n].path})))},E3=t=>{const e=za();return X(()=>w0(t.value.tag).map(n=>({name:n,path:e.value.map[n].path})))},M3=t=>X(()=>Bf(t.value.date)),T3=t=>{const e=Bs(t,"info"),n=ka(),i=S3(e),r=b3(e),s=E3(e),a=M3(e),o=v0(),l=X(()=>({author:i.value,category:r.value,date:a.value,tag:s.value,isOriginal:e.value.isOriginal??!1,readingTime:e.value.readingTime??null,readingTimeLocale:e.value.readingTime&&o.value?g0(e.value.readingTime,o.value):null,pageview:t.path})),c=X(()=>n.value.articleInfo??null);return{info:l,items:c}};var A3=ye({name:"ArticleItem",props:{info:{type:Object,required:!0},path:{type:String,required:!0}},slots:Object,setup(t,{slots:e}){const n=Bs(t,"info"),{info:i,items:r}=T3(t),s=xr();return()=>{const{title:a,type:o,isEncrypted:l=!1,cover:c=null,excerpt:u=null,sticky:f}=n.value,d=i.value;return p("div",{class:"vp-article-wrapper",onClick:h=>{h.target?.matches("summary")||(h.preventDefault(),s.push(t.path))}},p("article",{class:"vp-article-item",vocab:"https://schema.org/",typeof:"Article"},[e.articleCover?.({cover:c})??(c?[p("img",{class:"vp-article-cover",src:At(c),alt:"",loading:"lazy"}),p("meta",{property:"image",content:At(c)})]:[]),f?p(hv):null,p(Gt,{to:t.path},()=>e.articleTitle?.({title:a,isEncrypted:l,type:o})??p("header",{class:"vp-article-title"},[l?p(iv):null,o==="slide"?p(dv):null,p("span",{property:"headline"},a)])),e.articleExcerpt?.({excerpt:u})??(u?p("div",{class:"vp-article-excerpt",innerHTML:u}):null),p("hr",{class:"vp-article-hr"}),e.articleInfo?.(d)??p(F0,{info:d,items:r.value,onClick:h=>{h.stopPropagation()}})]))}}});const w3='<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M64 512a448 448 0 1 0 896 0 448 448 0 1 0-896 0Z" fill="#FA5151"/><path d="m557.3 512 113.1-113.1c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L512 466.7 398.9 353.6c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 512 353.6 625.1c-12.5 12.5-12.5 32.8 0 45.3 6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4L512 557.3l113.1 113.1c6.2 6.2 14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4c12.5-12.5 12.5-32.8 0-45.3L557.3 512z" fill="#FFF"/></svg>';var C3=ye({name:"Pagination",props:{total:{type:Number,default:10},perPage:{type:Number,default:10},current:{type:Number,default:1}},emits:["updateCurrentPage"],setup(t,{emit:e}){const n=new kf,i=ii(),r=et(""),s=X(()=>i.value.paginationLocales),a=X(()=>Math.ceil(t.total/t.perPage)),o=X(()=>!!a.value&&a.value!==1),l=X(()=>a.value<7?!1:t.current>4),c=X(()=>a.value<7?!1:t.current<a.value-3),u=X(()=>{const{current:h}=t;let v=1,_=a.value;const g=[];a.value>=7&&(h<=4&&h<a.value-3?(v=1,_=5):h>4&&h>=a.value-3?(_=a.value,v=a.value-4):a.value>7&&(v=h-2,_=h+2));for(let m=v;m<=_;m++)g.push(m);return g}),f=h=>{e("updateCurrentPage",h)},d=h=>{const v=parseInt(h,10);v<=a.value&&v>0?f(v):n.pop(`${w3}${s.value.errorText.replaceAll(String.raw`\$page`,a.value.toString())}`)};return()=>p("div",{class:"vp-pagination"},o.value?p("nav",{class:"vp-pagination-list"},[p("div",{class:"vp-pagination-number "},[t.current>1?p("div",{class:"prev",role:"navigation",unselectable:"on",onClick:()=>{f(t.current-1)}},s.value.prev):null,l.value?[p("div",{role:"navigation",onClick:()=>{f(1)}},1),p("div",{class:"ellipsis"},"...")]:null,u.value.map(h=>p("div",{key:h,class:{active:t.current===h},role:"navigation",onClick:()=>{f(h)}},h)),c.value?[p("div",{class:"ellipsis"},"..."),p("div",{role:"navigation",onClick:()=>{f(a.value)}},a.value)]:null,t.current<a.value?p("div",{class:"next",role:"navigation",unselectable:"on",onClick:()=>{f(t.current+1)}},s.value.next):null]),p("div",{class:"vp-pagination-nav"},[p("label",{for:"navigation-text"},`${s.value.navigate}: `),p("input",{id:"navigation-text",value:r.value,onInput:({target:h})=>{r.value=h.value},onKeydown:h=>{h.key==="Enter"&&(h.preventDefault(),d(r.value))}}),p("button",{class:"vp-pagination-button",type:"button",role:"navigation",title:s.value.action,onClick:()=>{d(r.value)}},s.value.action)])]):[])}}),rd=ye({name:"ArticleList",props:{items:{type:Array,required:!0}},slots:Object,setup(t,{slots:e}){const n=yi(),i=xr(),r=Zi(),s=ka(),a=et(1),o=X(()=>s.value.articlePerPage??10),l=X(()=>t.items.slice((a.value-1)*o.value,a.value*o.value)),c=async u=>{a.value=u;const f={...n.query};!(f.page===u.toString()||u===1&&!f.page)&&(u===1?delete f.page:f.page=u.toString(),await i.push({path:n.path,query:f}))};return Ct(()=>{const{page:u}=n.query;c(u?Number(u):1),Pt(a,()=>{const f=document.querySelector("#article-list").getBoundingClientRect().top+window.scrollY;setTimeout(()=>{window.scrollTo(0,f)},100)})}),()=>p("div",{id:"article-list",class:"vp-article-list",role:"feed"},l.value.length>0?[...l.value.map(({info:u,path:f},d)=>p(Ze,{appear:!0,delay:d*.04},()=>p(A3,{key:f,info:u,path:f},e))),p(C3,{current:a.value,perPage:o.value,total:t.items.length,onUpdateCurrentPage:c})]:p("h2",{class:"vp-empty-hint"},r.value.empty.replace("$text",r.value.article.toLocaleLowerCase())))}});const R3="//theme-hope-assets.vuejs.press/hero/default.jpg";var P3=ye({name:"BlogHero",slots:Object,setup(t,{slots:e}){const{frontmatter:n,siteLocale:i}=Ht(),r=X(()=>{const{heroText:o,heroStyle:l,tagline:c,heroFullScreen:u=!1}=n.value;return{text:o??(i.value.title||"Hello"),tagline:c??"",style:l??null,isFullScreen:u}}),s=X(()=>{const{heroImage:o,heroImageDark:l,heroAlt:c,heroImageStyle:u}=n.value;return{image:o?At(o):null,imageDark:l?At(l):null,style:u??null,alt:c??""}}),a=X(()=>{const{bgImage:o,bgImageDark:l,bgImageStyle:c}=n.value;return{image:vt(o)?At(o):o===!1?null:R3,imageDark:vt(l)?At(l):null,style:c??null}});return()=>n.value.hero===!1?null:p("div",{class:["vp-blog-hero",{"hero-fullscreen":n.value.heroFullScreen,"no-bg":!a.value.image}]},[e.heroBg?.(a.value)??[a.value.image?p("div",{class:["vp-blog-mask",{light:a.value.imageDark}],style:[{background:`url(${a.value.image}) center/cover no-repeat`},a.value.style]}):null,a.value.imageDark?p("div",{class:"vp-blog-mask dark",style:[{background:`url(${a.value.imageDark}) center/cover no-repeat`},a.value.style]}):null],e.heroLogo?.(s.value)??p(Ze,{appear:!0,group:!0,delay:.04},()=>{const{image:o,imageDark:l,style:c,alt:u}=s.value;return[o?p("img",{key:"light",class:["vp-blog-hero-image",{light:l}],style:c,src:o,alt:u}):null,l?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:c,src:l,alt:u}):null]}),e.heroInfo?.(r.value)??p("div",{class:"vp-blog-hero-info"},[p(Ze,{appear:!0,delay:.08},()=>r.value.text?p("h1",{class:"vp-blog-hero-title"},r.value.text):null),p(Ze,{appear:!0,delay:.12},()=>r.value.tagline?p("div",{class:"vp-blog-hero-description",innerHTML:r.value.tagline}):null)]),n.value.heroFullScreen?p(Kf,{onClick:()=>{window.scrollTo({top:window.innerHeight-(document.querySelector("[vp-navbar]")?.clientHeight??0),behavior:"smooth"})}}):null])}}),L3=ye({name:"ArticlesInfo",setup(){const t=Va(),e=Zi(),n=Qf(),i=Ki(),r=X(()=>t.value.items.length),s=X(()=>n.value.items);return()=>p(Ze,()=>p("div",{class:"vp-star-article-wrapper"},[p("div",{class:"title",onClick:()=>{i(t.value.path)}},[p(id),p("span",{class:"num"},r.value),e.value.article]),p("hr"),s.value.length>0?p("ul",{class:"vp-star-articles"},s.value.map(({info:a,path:o},l)=>p(Ze,{appear:!0,delay:.08*(l+1)},()=>p("li",{class:"vp-star-article"},p(Gt,{to:o},()=>a.title))))):p("div",{class:"vp-star-article-empty"},e.value.empty.replace("$text",e.value.star))]))}}),pv=ye({name:"CategoryList",setup(){const t=bl(),e=Ha();return()=>p("ul",{class:"vp-category-list"},Hs(e.value.map).sort(([,n],[,i])=>i.items.length-n.items.length).map(([n,{path:i,items:r}])=>p("li",{class:"vp-category-item"},p(Gt,{class:["vp-category",`color${Oa(n,Number(Xs.colorNumber))}`,{active:i===t.value.path}],to:i},()=>[n,p("span",{class:"vp-category-count"},r.length)]))))}}),D3=ye({name:"CategoriesInfo",setup(){const t=Zi(),e=Ha(),n=Ki(),i=X(()=>gr(e.value.map).length);return()=>p("div",{class:"vp-category-wrapper"},[i.value?[p("div",{class:"title",onClick:()=>{n(e.value.path)}},[p(ed),p("span",{class:"num"},i.value),t.value.category]),p("hr"),p(Ze,{delay:.04},()=>p(pv))]:p("div",{class:"vp-category-empty"},t.value.empty.replace("$text",t.value.category))])}}),mv=ye({name:"TagList",setup(){const t=Pn(),e=za(),n=i=>i===t.value.blog?.name;return()=>p("ul",{class:"vp-tag-list"},Hs(e.value.map).sort(([,i],[,r])=>r.items.length-i.items.length).map(([i,{path:r,items:s}])=>p("li",{class:"vp-tag-item"},p(Gt,{class:["vp-tag",`color${Oa(i,Number(Xs.colorNumber))}`,{active:n(i)}],to:r},()=>[i,p("span",{class:"vp-tag-count"},s.length)]))))}}),I3=ye({name:"TagsInfo",setup(){const t=Zi(),e=za(),n=Ki(),i=X(()=>gr(e.value.map).length);return()=>p("div",{class:"vp-tag-wrapper"},[i.value?[p("div",{class:"title",onClick:()=>{n(e.value.path)}},[p(td),p("span",{class:"num"},i.value),t.value.tag]),p("hr"),p(Ze,{delay:.04},()=>p(mv))]:p("div",{class:"vp-tag-empty"},t.value.empty.replace("$text",t.value.tag))])}}),N3=ye({name:"TimelineList",setup(){const t=Zi(),e=Zf(),n=Ki();return()=>p("div",{class:"timeline-list-wrapper"},[p("div",{class:"title",onClick:()=>{n(e.value.path)}},[p(nd),p("span",{class:"num"},e.value.items.length),t.value.timeline]),p("hr"),p("div",{class:"timeline-content"},p("ul",{class:"timeline-list"},e.value.config.map(({year:i,items:r},s)=>p(Ze,{appear:!0,delay:.08*(s+1)},()=>p("li",[p("h3",{class:"timeline-year"},i),p("ul",{class:"timeline-year-wrapper"},r.map(({date:a,info:o,path:l})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},a),p(Gt,{class:"timeline-title",to:l},()=>o.title)])))])))))])}});const U3={article:id,category:ed,tag:td,timeline:nd};var gv=ye({name:"InfoList",setup(){const t=Zi(),e=et("article");return()=>p("div",{class:"vp-blog-infos"},[p("div",{class:"vp-blog-type-switcher"},Hs(U3).map(([n,i])=>p("button",{type:"button",class:"vp-blog-type-button",onClick:()=>{e.value=n}},p("div",{class:["vp-blog-type-icon-wrapper",{active:e.value===n}],"aria-label":t.value[n],"data-balloon-pos":"down"},p(i))))),p(Ze,()=>e.value==="article"?p(L3):e.value==="category"?p(D3):e.value==="tag"?p(I3):p(N3))])}});const Ga=(t,{slots:e})=>p("aside",{class:"vp-blog-info-wrapper"},[e.infoBefore?.(),p(Ze,()=>p(Jf,{},e)),p(Ze,{delay:.04},()=>p(gv)),e.infoAfter?.()]);Ga.displayName="InfoPanel";var F3=ye({name:"ProjectPanel",props:{items:{type:Array,required:!0}},setup(t){const e=xn(),n=Ki();return()=>p("div",{class:"vp-project-panel"},t.items.map(({icon:i,link:r,name:s,desc:a,background:o})=>p("a",{class:["vp-project-card",{[`color${Oa(s,Number(Xs.colorNumber))}`]:!e.value&&!o}],...o?{style:o}:{},href:El(r)?At(r):r,onClick:l=>{n(r),l.preventDefault()}},[i?p(Rt("VPIcon"),{class:"vp-project-icon",icon:i}):null,p("div",{class:"vp-project-name"},s),p("div",{class:"vp-project-desc"},a)])))}}),O3=ye({name:"BlogHome",slots:Object,setup(t,{slots:e}){const n=Va(),i=Pn(),r=X(()=>i.value.projects??[]);return()=>p("div",{class:"vp-page vp-blog-home"},[e.heroBefore?.(),p(P3,{},e),e.heroAfter?.(),p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[e.articlesBefore?.()??(r.value.length>0?p(Ze,{appear:!0,delay:.16},()=>p(F3,{items:r.value})):null),p(Ze,{appear:!0,delay:.24},()=>p(rd,{items:n.value.items},e)),e.articlesAfter?.()]),p(Ze,{appear:!0,delay:.16},()=>p(Ga,{key:"blog"},e))]),e.content?.()??p(Ze,{appear:!0,delay:.28},()=>p(wl,{},e))])}}),B3=ye({name:"BlogMainLayout",slots:Object,setup(t,{slots:e}){const{isMobile:n}=Al();return()=>[p(Yf),p(qf,{noSidebar:!n.value,noToc:!0},{...e,navScreenBottom:()=>e.navScreenBottom?.()??p(Jf,{},e),sidebarItems:i=>e.sidebarItems?.(i)??(n.value?p(gv):null)})]}}),k3=ye({name:"CategoryPage",slots:Object,setup(t,{slots:e}){const n=bl(),i=Pn(),r=Ha(),s=za(),a=X(()=>{const o=i.value.blog;if(o?.type!=="category")return null;const{name:l,key:c}=o;return c==="category"?{component:pv,items:l?r.value.map[l].items:null}:c==="tag"?{component:mv,items:l?s.value.map[l].items:null}:null});return()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},e.default?.()??[p(Ze,{appear:!0},()=>a.value?p(a.value.component):null),e.articlesBefore?.(),a.value?.items?p(Ze,{appear:!0,delay:.08},()=>[p(rd,{key:n.value.path,items:a.value.items},e)]):null,e.articlesAfter?.()]),p(Ze,{delay:.16},()=>p(Ga,{key:"blog"},e))]))}}),V3=ye({name:"TimelineItems",setup(){const t=ka(),e=Zi(),n=Zf(),i=X(()=>t.value.timeline??e.value.timelineTitle);return()=>p("div",{class:"timeline-wrapper"},p("ul",{class:"timeline-content"},[p(Ze,()=>p("li",{class:"motto"},i.value)),n.value.config.map(({year:r,items:s},a)=>p(Ze,{appear:!0,delay:.08*(a+1),group:!0},()=>[p("h3",{key:"title",id:r,class:"timeline-year-title"},p("span",r)),p("li",{key:"content",class:"timeline-year-list"},[p("ul",{class:"timeline-year-wrapper"},s.map(({date:o,info:l,path:c})=>p("li",{class:"timeline-item"},[p("span",{class:"timeline-date"},o),p(Gt,{class:"timeline-title",to:c},()=>l.title)])))])]))]))}});const vv=(t,{slots:e})=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},[e.articlesBefore?.(),p(Ze,{appear:!0},()=>p(V3)),e.articlesAfter?.()]),p(Ze,{appear:!0},()=>p(Ga,{key:"blog"},e))]));vv.displayName="TimelinePage";var H3=ye({name:"ArticleType",setup(){const{page:t,routeLocale:e}=Ht(),n=Va(),i=Qf(),r=Zi(),s=X(()=>[{text:r.value.all,path:n.value.path},{text:r.value.star,path:i.value.path},...m3.map(({key:a,path:o})=>{const l=o.replace(/^\//,e.value);return{text:r.value[a]??Bn(l).meta.title??a,path:l}})]);return()=>p("ul",{class:"vp-article-type-wrapper"},s.value.map(a=>p("li",{class:["vp-article-type",{active:a.path===t.value.path}]},p(Gt,{to:a.path},()=>a.text))))}}),z3=ye({name:"TypePage",slots:Object,setup(t,{slots:e}){const n=Cl(),i=Pn(),r=bl(),s=Va(),a=Qf(),o=X(()=>{const l=i.value.blog;return l?.type!=="type"||!l.key?s.value.items:l.key==="star"?a.value.items:n.value.items});return()=>p("div",{class:"vp-page vp-blog"},p("div",{class:"blog-page-wrapper"},[p("main",{id:"main-content",class:"vp-blog-main"},e.default?.()??[p(Ze,()=>p(H3)),e.articlesBefore?.(),p(Ze,{appear:!0,delay:.08},()=>p(rd,{key:r.value.path,items:o.value})),e.articlesAfter?.()]),p(Ze,{appear:!0,delay:.08},()=>p(Ga,{key:"blog"},e))]))}}),_v=ye({name:"Blog",slots:Object,setup(t,{slots:e}){const n=Pn();return()=>{const{type:i,key:r}=n.value.blog??{};return p(B3,null,{...e,default:()=>e.default?.()??p(i==="category"?k3:i==="type"?r==="timeline"?vv:z3:O3,null,e)})}}});const G3=()=>{g3(),v3(),y3(),_3(),x3()};RE(t=>{const e=t.title,n=t.index??!0,i=t.icon;return n?{title:e,content:i?()=>[p(Rt("VPIcon"),{icon:i,sizing:"both"}),e]:null,order:t.order,index:t.index}:null});const W3={enhance:({app:t,router:e})=>{const{scrollBehavior:n}=e.options;e.options.scrollBehavior=async(...i)=>(await uu.wait(),n(...i)),EM(t),t.component("BloggerInfo",Jf),t.component("SocialMedias",av)},setup:()=>{MM(),wM(),G3()},layouts:{Layout:u3,NotFound:f3,Blog:_v}},$3=Object.freeze(Object.defineProperty({__proto__:null,default:W3},Symbol.toStringTag,{value:"Module"})),X3=ye({name:"HitokotoBlogHero",inheritAttrs:!1,props:{text:{type:String,required:!0},image:[String,null],imageDark:[String,null],alt:String,imageStyle:[String,Object]},setup(t){const e=et(""),n=et(""),i=et("");let r=!1;const s=()=>fetch("https://v1.hitokoto.cn").then(a=>a.json()).then(({from:a,hitokoto:o})=>{e.value=o,i.value=a});return Ct(()=>{r=!0,Pt(e,()=>{n.value="";let a=0;const o=()=>(n.value+=e.value[a],a+=1,xi().then(()=>{a<e.value.length?setTimeout(()=>{o()},150):r&&setTimeout(()=>{s()},3e3)}));o()}),s()}),ji(()=>{r=!1}),()=>[p(Ze,{appear:!0,group:!0,delay:.04},()=>[t.image?p("img",{key:"light",class:["vp-blog-hero-image",{light:t.imageDark}],style:t.imageStyle,src:t.image,alt:t.alt??t.text}):null,t.imageDark?p("img",{key:"dark",class:"vp-blog-hero-image dark",style:t.imageStyle,src:t.imageDark,alt:t.alt??t.text}):null]),p(Ze,{appear:!0,delay:.08},()=>t.text?p("h1",{class:"vp-blog-hero-title"},t.text):null),p("div",{class:"hitokoto"},[p("p",{class:"hitokoto-text"},p("span",n.value)),p("p",{class:"hitokoto-author",style:{opacity:n.value.length>4?1:0}},`——「${i.value}」`)])]}});/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sd="182",j3=0,Qh=1,q3=2,Bo=1,Y3=2,la=3,vr=0,hn=1,Ui=2,Oi=0,Ts=1,il=2,ep=3,tp=4,K3=5,Ur=100,Z3=101,J3=102,Q3=103,e2=104,t2=200,n2=201,i2=202,r2=203,mu=204,gu=205,s2=206,a2=207,o2=208,l2=209,c2=210,u2=211,f2=212,d2=213,h2=214,vu=0,_u=1,xu=2,Is=3,yu=4,Su=5,bu=6,Eu=7,xv=0,p2=1,m2=2,hi=0,yv=1,Sv=2,bv=3,ad=4,Ev=5,Mv=6,Tv=7,Av=300,Xr=301,Ns=302,Mu=303,Tu=304,Rl=306,Au=1e3,Fi=1001,wu=1002,Zt=1003,g2=1004,co=1005,rn=1006,cc=1007,kr=1008,Tn=1009,wv=1010,Cv=1011,Ma=1012,od=1013,vi=1014,ui=1015,Wi=1016,ld=1017,cd=1018,Ta=1020,Rv=35902,Pv=35899,Lv=1021,Dv=1022,jn=1023,$i=1026,Vr=1027,Iv=1028,ud=1029,Us=1030,fd=1031,dd=1033,ko=33776,Vo=33777,Ho=33778,zo=33779,Cu=35840,Ru=35841,Pu=35842,Lu=35843,Du=36196,Iu=37492,Nu=37496,Uu=37488,Fu=37489,Ou=37490,Bu=37491,ku=37808,Vu=37809,Hu=37810,zu=37811,Gu=37812,Wu=37813,$u=37814,Xu=37815,ju=37816,qu=37817,Yu=37818,Ku=37819,Zu=37820,Ju=37821,Qu=36492,ef=36494,tf=36495,nf=36283,rf=36284,sf=36285,af=36286,v2=3200,Nv=0,_2=1,fr="",Un="srgb",Fs="srgb-linear",rl="linear",mt="srgb",Jr=7680,np=519,x2=512,y2=513,S2=514,hd=515,b2=516,E2=517,pd=518,M2=519,ip=35044,rp="300 es",fi=2e3,sl=2001;function Uv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Aa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function T2(){const t=Aa("canvas");return t.style.display="block",t}const sp={};function ap(...t){const e="THREE."+t.shift();console.log(e,...t)}function Xe(...t){const e="THREE."+t.shift();console.warn(e,...t)}function lt(...t){const e="THREE."+t.shift();console.error(e,...t)}function wa(...t){const e=t.join(" ");e in sp||(sp[e]=!0,Xe(...t))}function A2(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class js{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],uc=Math.PI/180,of=180/Math.PI;function Wa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function w2(t,e){return(t%e+e)%e}function fc(t,e,n){return(1-n)*t+n*e}function ea(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,n=0){ct.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $a{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],v=s[a+2],_=s[a+3];if(o<=0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(o>=1){e[n+0]=d,e[n+1]=h,e[n+2]=v,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==v){let g=l*d+c*h+u*v+f*_;g<0&&(d=-d,h=-h,v=-v,_=-_,g=-g);let m=1-o;if(g<.9995){const E=Math.acos(g),y=Math.sin(E);m=Math.sin(m*E)/y,o=Math.sin(o*E)/y,l=l*m+d*o,c=c*m+h*o,u=u*m+v*o,f=f*m+_*o}else{l=l*m+d*o,c=c*m+h*o,u=u*m+v*o,f=f*m+_*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],v=s[a+3];return e[n]=o*v+u*f+l*h-c*d,e[n+1]=l*v+u*d+c*f-o*h,e[n+2]=c*v+u*h+o*d-l*f,e[n+3]=u*v-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),v=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"YXZ":this._x=d*u*f+c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"ZXY":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f-d*h*v;break;case"ZYX":this._x=d*u*f-c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f+d*h*v;break;case"YZX":this._x=d*u*f+c*h*v,this._y=c*h*f+d*u*v,this._z=c*u*v-d*h*f,this._w=c*u*f-d*h*v;break;case"XZY":this._x=d*u*f-c*h*v,this._y=c*h*f-d*u*v,this._z=c*u*v+d*h*f,this._w=c*u*f+d*h*v;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(op.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(op.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return dc.copy(this).projectOnVector(e),this.sub(dc)}reflect(e){return this.sub(dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dc=new J,op=new $a;class Ye{constructor(e,n,i,r,s,a,o,l,c){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],v=i[8],_=r[0],g=r[3],m=r[6],E=r[1],y=r[4],b=r[7],w=r[2],P=r[5],L=r[8];return s[0]=a*_+o*E+l*w,s[3]=a*g+o*y+l*P,s[6]=a*m+o*b+l*L,s[1]=c*_+u*E+f*w,s[4]=c*g+u*y+f*P,s[7]=c*m+u*b+f*L,s[2]=d*_+h*E+v*w,s[5]=d*g+h*y+v*P,s[8]=d*m+h*b+v*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,v=n*f+i*d+r*h;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(hc.makeScale(e,n)),this}rotate(e){return this.premultiply(hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hc=new Ye,lp=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),cp=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function C2(){const t={enabled:!0,workingColorSpace:Fs,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=Bi(r.r),r.g=Bi(r.g),r.b=Bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=As(r.r),r.g=As(r.g),r.b=As(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===fr?rl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return wa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return wa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Fs]:{primaries:e,whitePoint:i,transfer:rl,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Un},outputColorSpaceConfig:{drawingBufferColorSpace:Un}},[Un]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:lp,fromXYZ:cp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Un}}}),t}const at=C2();function Bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function As(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Qr;class R2{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Qr===void 0&&(Qr=Aa("canvas")),Qr.width=e.width,Qr.height=e.height;const r=Qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Aa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Bi(n[i]/255)*255):n[i]=Bi(n[i]);return{data:n,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let P2=0;class md{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:P2++}),this.uuid=Wa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(pc(r[a].image)):s.push(pc(r[a]))}else s=pc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?R2.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}let L2=0;const mc=new J;class sn extends js{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Fi,r=Fi,s=rn,a=kr,o=jn,l=Tn,c=sn.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:L2++}),this.uuid=Wa(),this.name="",this.source=new md(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(mc).x}get height(){return this.source.getSize(mc).y}get depth(){return this.source.getSize(mc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Xe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Av)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Au:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case wu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Au:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case wu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Av;sn.DEFAULT_ANISOTROPY=1;class Ot{constructor(e=0,n=0,i=0,r=1){Ot.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],v=l[9],_=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(v-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(v+g)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(c+1)/2,b=(h+1)/2,w=(m+1)/2,P=(u+d)/4,L=(f+_)/4,F=(v+g)/4;return y>b&&y>w?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=P/i,s=L/i):b>w?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=F/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=L/s,r=F/s),this.set(i,r,s,n),this}let E=Math.sqrt((g-v)*(g-v)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(g-v)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class D2 extends js{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ot(0,0,e,n),this.scissorTest=!1,this.viewport=new Ot(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new sn(r);this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:rn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new md(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends D2{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Fv extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class I2 extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),fo.subVectors(this.max,ta),es.subVectors(e.a,ta),ts.subVectors(e.b,ta),ns.subVectors(e.c,ta),Qi.subVectors(ts,es),er.subVectors(ns,ts),Ar.subVectors(es,ns);let n=[0,-Qi.z,Qi.y,0,-er.z,er.y,0,-Ar.z,Ar.y,Qi.z,0,-Qi.x,er.z,0,-er.x,Ar.z,0,-Ar.x,-Qi.y,Qi.x,0,-er.y,er.x,0,-Ar.y,Ar.x,0];return!gc(n,es,ts,ns,fo)||(n=[1,0,0,0,1,0,0,0,1],!gc(n,es,ts,ns,fo))?!1:(ho.crossVectors(Qi,er),n=[ho.x,ho.y,ho.z],gc(n,es,ts,ns,fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ai=[new J,new J,new J,new J,new J,new J,new J,new J],zn=new J,uo=new Xa,es=new J,ts=new J,ns=new J,Qi=new J,er=new J,Ar=new J,ta=new J,fo=new J,ho=new J,wr=new J;function gc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){wr.fromArray(t,s);const o=r.x*Math.abs(wr.x)+r.y*Math.abs(wr.y)+r.z*Math.abs(wr.z),l=e.dot(wr),c=n.dot(wr),u=i.dot(wr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const N2=new Xa,na=new J,vc=new J;class Pl{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):N2.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(na,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(vc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(vc)),this.expandByPoint(na.copy(e.center).sub(vc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const wi=new J,_c=new J,po=new J,tr=new J,xc=new J,mo=new J,yc=new J;class Ov{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,wi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=wi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(wi.copy(this.origin).addScaledVector(this.direction,n),wi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){_c.copy(e).add(n).multiplyScalar(.5),po.copy(n).sub(e).normalize(),tr.copy(this.origin).sub(_c);const s=e.distanceTo(n)*.5,a=-this.direction.dot(po),o=tr.dot(this.direction),l=-tr.dot(po),c=tr.lengthSq(),u=Math.abs(1-a*a);let f,d,h,v;if(u>0)if(f=a*l-o,d=a*o-l,v=s*u,f>=0)if(d>=-v)if(d<=v){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(_c).addScaledVector(po,d),h}intersectSphere(e,n){wi.subVectors(e.center,this.origin);const i=wi.dot(this.direction),r=wi.dot(wi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,wi)!==null}intersectTriangle(e,n,i,r,s){xc.subVectors(n,e),mo.subVectors(i,e),yc.crossVectors(xc,mo);let a=this.direction.dot(yc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;tr.subVectors(this.origin,e);const l=o*this.direction.dot(mo.crossVectors(tr,mo));if(l<0)return null;const c=o*this.direction.dot(xc.cross(tr));if(c<0||l+c>a)return null;const u=-o*tr.dot(yc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,v,_,g){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,v,_,g)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,v,_,g){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=v,m[11]=_,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/is.setFromMatrixColumn(e,0).length(),s=1/is.setFromMatrixColumn(e,1).length(),a=1/is.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,v=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+v*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=v+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,v=c*u,_=c*f;n[0]=d+_*o,n[4]=v*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-v,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,v=c*u,_=c*f;n[0]=d-_*o,n[4]=-a*f,n[8]=v+h*o,n[1]=h+v*o,n[5]=a*u,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,v=o*u,_=o*f;n[0]=l*u,n[4]=v*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-v,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=_-d*f,n[8]=v*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+v,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,v=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=a*u,n[9]=h*f-v,n[2]=v*f-h,n[6]=o*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(U2,e,F2)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),nr.crossVectors(i,bn),nr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),nr.crossVectors(i,bn)),nr.normalize(),go.crossVectors(bn,nr),r[0]=nr.x,r[4]=go.x,r[8]=bn.x,r[1]=nr.y,r[5]=go.y,r[9]=bn.y,r[2]=nr.z,r[6]=go.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],v=i[2],_=i[6],g=i[10],m=i[14],E=i[3],y=i[7],b=i[11],w=i[15],P=r[0],L=r[4],F=r[8],S=r[12],M=r[1],I=r[5],U=r[9],k=r[13],H=r[2],$=r[6],B=r[10],W=r[14],j=r[3],de=r[7],_e=r[11],be=r[15];return s[0]=a*P+o*M+l*H+c*j,s[4]=a*L+o*I+l*$+c*de,s[8]=a*F+o*U+l*B+c*_e,s[12]=a*S+o*k+l*W+c*be,s[1]=u*P+f*M+d*H+h*j,s[5]=u*L+f*I+d*$+h*de,s[9]=u*F+f*U+d*B+h*_e,s[13]=u*S+f*k+d*W+h*be,s[2]=v*P+_*M+g*H+m*j,s[6]=v*L+_*I+g*$+m*de,s[10]=v*F+_*U+g*B+m*_e,s[14]=v*S+_*k+g*W+m*be,s[3]=E*P+y*M+b*H+w*j,s[7]=E*L+y*I+b*$+w*de,s[11]=E*F+y*U+b*B+w*_e,s[15]=E*S+y*k+b*W+w*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],v=e[3],_=e[7],g=e[11],m=e[15],E=l*h-c*d,y=o*h-c*f,b=o*d-l*f,w=a*h-c*u,P=a*d-l*u,L=a*f-o*u;return n*(_*E-g*y+m*b)-i*(v*E-g*w+m*P)+r*(v*y-_*w+m*L)-s*(v*b-_*P+g*L)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],v=e[12],_=e[13],g=e[14],m=e[15],E=f*g*c-_*d*c+_*l*h-o*g*h-f*l*m+o*d*m,y=v*d*c-u*g*c-v*l*h+a*g*h+u*l*m-a*d*m,b=u*_*c-v*f*c+v*o*h-a*_*h-u*o*m+a*f*m,w=v*f*l-u*_*l-v*o*d+a*_*d+u*o*g-a*f*g,P=n*E+i*y+r*b+s*w;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/P;return e[0]=E*L,e[1]=(_*d*s-f*g*s-_*r*h+i*g*h+f*r*m-i*d*m)*L,e[2]=(o*g*s-_*l*s+_*r*c-i*g*c-o*r*m+i*l*m)*L,e[3]=(f*l*s-o*d*s-f*r*c+i*d*c+o*r*h-i*l*h)*L,e[4]=y*L,e[5]=(u*g*s-v*d*s+v*r*h-n*g*h-u*r*m+n*d*m)*L,e[6]=(v*l*s-a*g*s-v*r*c+n*g*c+a*r*m-n*l*m)*L,e[7]=(a*d*s-u*l*s+u*r*c-n*d*c-a*r*h+n*l*h)*L,e[8]=b*L,e[9]=(v*f*s-u*_*s-v*i*h+n*_*h+u*i*m-n*f*m)*L,e[10]=(a*_*s-v*o*s+v*i*c-n*_*c-a*i*m+n*o*m)*L,e[11]=(u*o*s-a*f*s-u*i*c+n*f*c+a*i*h-n*o*h)*L,e[12]=w*L,e[13]=(u*_*r-v*f*r+v*i*d-n*_*d-u*i*g+n*f*g)*L,e[14]=(v*o*r-a*_*r-v*i*l+n*_*l+a*i*g-n*o*g)*L,e[15]=(a*f*r-u*o*r+u*i*l-n*f*l-a*i*d+n*o*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,v=s*f,_=a*u,g=a*f,m=o*f,E=l*c,y=l*u,b=l*f,w=i.x,P=i.y,L=i.z;return r[0]=(1-(_+m))*w,r[1]=(h+b)*w,r[2]=(v-y)*w,r[3]=0,r[4]=(h-b)*P,r[5]=(1-(d+m))*P,r[6]=(g+E)*P,r[7]=0,r[8]=(v+y)*L,r[9]=(g-E)*L,r[10]=(1-(d+_))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=is.set(r[0],r[1],r[2]).length();const a=is.set(r[4],r[5],r[6]).length(),o=is.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),Gn.copy(this);const c=1/s,u=1/a,f=1/o;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=f,Gn.elements[9]*=f,Gn.elements[10]*=f,n.setFromRotationMatrix(Gn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let v,_;if(l)v=s/(a-s),_=a*s/(a-s);else if(o===fi)v=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===sl)v=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let v,_;if(l)v=1/(a-s),_=a/(a-s);else if(o===fi)v=-2/(a-s),_=-(a+s)/(a-s);else if(o===sl)v=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=v,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const is=new J,Gn=new Dt,U2=new J(0,0,0),F2=new J(1,1,1),nr=new J,go=new J,bn=new J,up=new Dt,fp=new $a;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return up.makeRotationFromQuaternion(e),this.setFromRotationMatrix(up,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return fp.setFromEuler(this),this.setFromQuaternion(fp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class Bv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let O2=0;const dp=new J,rs=new $a,Ci=new Dt,vo=new J,ia=new J,B2=new J,k2=new $a,hp=new J(1,0,0),pp=new J(0,1,0),mp=new J(0,0,1),gp={type:"added"},V2={type:"removed"},ss={type:"childadded",child:null},Sc={type:"childremoved",child:null};class Jt extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:O2++}),this.uuid=Wa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new J,n=new _i,i=new $a,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ye}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Bv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.multiply(rs),this}rotateOnWorldAxis(e,n){return rs.setFromAxisAngle(e,n),this.quaternion.premultiply(rs),this}rotateX(e){return this.rotateOnAxis(hp,e)}rotateY(e){return this.rotateOnAxis(pp,e)}rotateZ(e){return this.rotateOnAxis(mp,e)}translateOnAxis(e,n){return dp.copy(e).applyQuaternion(this.quaternion),this.position.add(dp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(hp,e)}translateY(e){return this.translateOnAxis(pp,e)}translateZ(e){return this.translateOnAxis(mp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(ia,vo,this.up):Ci.lookAt(vo,ia,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),rs.setFromRotationMatrix(Ci),this.quaternion.premultiply(rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(gp),ss.child=e,this.dispatchEvent(ss),ss.child=null):lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(V2),Sc.child=e,this.dispatchEvent(Sc),Sc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(gp),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,B2),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,k2,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new J(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wn=new J,Ri=new J,bc=new J,Pi=new J,as=new J,os=new J,vp=new J,Ec=new J,Mc=new J,Tc=new J,Ac=new Ot,wc=new Ot,Cc=new Ot;class $n{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Wn.subVectors(e,n),r.cross(Wn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Wn.subVectors(r,n),Ri.subVectors(i,n),bc.subVectors(e,n);const a=Wn.dot(Wn),o=Wn.dot(Ri),l=Wn.dot(bc),c=Ri.dot(Ri),u=Ri.dot(bc),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,v=(a*u-o*l)*d;return s.set(1-h-v,v,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Pi)===null?!1:Pi.x>=0&&Pi.y>=0&&Pi.x+Pi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,Pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Pi.x),l.addScaledVector(a,Pi.y),l.addScaledVector(o,Pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ac.setScalar(0),wc.setScalar(0),Cc.setScalar(0),Ac.fromBufferAttribute(e,n),wc.fromBufferAttribute(e,i),Cc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ac,s.x),a.addScaledVector(wc,s.y),a.addScaledVector(Cc,s.z),a}static isFrontFacing(e,n,i,r){return Wn.subVectors(i,n),Ri.subVectors(e,n),Wn.cross(Ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wn.subVectors(this.c,this.b),Ri.subVectors(this.a,this.b),Wn.cross(Ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;as.subVectors(r,i),os.subVectors(s,i),Ec.subVectors(e,i);const l=as.dot(Ec),c=os.dot(Ec);if(l<=0&&c<=0)return n.copy(i);Mc.subVectors(e,r);const u=as.dot(Mc),f=os.dot(Mc);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),n.copy(i).addScaledVector(as,a);Tc.subVectors(e,s);const h=as.dot(Tc),v=os.dot(Tc);if(v>=0&&h<=v)return n.copy(s);const _=h*c-l*v;if(_<=0&&c>=0&&v<=0)return o=c/(c-v),n.copy(i).addScaledVector(os,o);const g=u*v-h*f;if(g<=0&&f-u>=0&&h-v>=0)return vp.subVectors(s,r),o=(f-u)/(f-u+(h-v)),n.copy(r).addScaledVector(vp,o);const m=1/(g+_+d);return a=_*m,o=d*m,n.copy(i).addScaledVector(as,a).addScaledVector(os,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Rc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class rt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=at.workingColorSpace){return this.r=e,this.g=n,this.b=i,at.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=at.workingColorSpace){if(e=w2(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Rc(a,s,e+1/3),this.g=Rc(a,s,e),this.b=Rc(a,s,e-1/3)}return at.colorSpaceToWorking(this,r),this}setStyle(e,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Xe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Un){const i=kv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bi(e.r),this.g=Bi(e.g),this.b=Bi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Un){return at.workingToColorSpace(en.copy(this),e),Math.round(tt(en.r*255,0,255))*65536+Math.round(tt(en.g*255,0,255))*256+Math.round(tt(en.b*255,0,255))}getHexString(e=Un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=at.workingColorSpace){at.workingToColorSpace(en.copy(this),n);const i=en.r,r=en.g,s=en.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=at.workingColorSpace){return at.workingToColorSpace(en.copy(this),n),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=Un){at.workingToColorSpace(en.copy(this),e);const n=en.r,i=en.g,r=en.b;return e!==Un?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+n,ir.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ir),e.getHSL(_o);const i=fc(ir.h,_o.h,n),r=fc(ir.s,_o.s,n),s=fc(ir.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new rt;rt.NAMES=kv;let H2=0;class qs extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:H2++}),this.uuid=Wa(),this.name="",this.type="Material",this.blending=Ts,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=np,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jr,this.stencilZFail=Jr,this.stencilZPass=Jr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Xe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Xe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(i.blending=this.blending),this.side!==vr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==mu&&(i.blendSrc=this.blendSrc),this.blendDst!==gu&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==np&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Jr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Jr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Vv extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=xv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new J,xo=new ct;let z2=0;class mi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:z2++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ip,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xo.fromBufferAttribute(this,n),xo.applyMatrix3(e),this.setXY(n,xo.x,xo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ea(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ea(n,this.array)),n}setX(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ea(n,this.array)),n}setY(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ea(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ea(n,this.array)),n}setW(e,n){return this.normalized&&(n=gn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gn(n,this.array),i=gn(i,this.array),r=gn(r,this.array),s=gn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ip&&(e.usage=this.usage),e}}class Hv extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zv extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class vn extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let G2=0;const In=new Dt,Pc=new Jt,ls=new J,En=new Xa,ra=new Xa,jt=new J;class Hn extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:G2++}),this.uuid=Wa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uv(e)?zv:Hv)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ye().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Pc.lookAt(e),Pc.updateMatrix(),this.applyMatrix4(Pc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ra.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(En.min,ra.min),En.expandByPoint(jt),jt.addVectors(En.max,ra.max),En.expandByPoint(jt)):(En.expandByPoint(ra.min),En.expandByPoint(ra.max))}En.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(ls.fromBufferAttribute(e,c),jt.add(ls)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mi(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<i.count;F++)o[F]=new J,l[F]=new J;const c=new J,u=new J,f=new J,d=new ct,h=new ct,v=new ct,_=new J,g=new J;function m(F,S,M){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,F),h.fromBufferAttribute(s,S),v.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),v.sub(d);const I=1/(h.x*v.y-v.x*h.y);isFinite(I)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(f,-h.y).multiplyScalar(I),g.copy(f).multiplyScalar(h.x).addScaledVector(u,-v.x).multiplyScalar(I),o[F].add(_),o[S].add(_),o[M].add(_),l[F].add(g),l[S].add(g),l[M].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,S=E.length;F<S;++F){const M=E[F],I=M.start,U=M.count;for(let k=I,H=I+U;k<H;k+=3)m(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new J,b=new J,w=new J,P=new J;function L(F){w.fromBufferAttribute(r,F),P.copy(w);const S=o[F];y.copy(S),y.sub(w.multiplyScalar(w.dot(S))).normalize(),b.crossVectors(P,S);const I=b.dot(l[F])<0?-1:1;a.setXYZW(F,y.x,y.y,y.z,I)}for(let F=0,S=E.length;F<S;++F){const M=E[F],I=M.start,U=M.count;for(let k=I,H=I+U;k<H;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,a=new J,o=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const v=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,g),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,g),o.add(u),l.add(u),c.add(u),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,v=0;for(let _=0,g=l.length;_<g;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let m=0;m<u;m++)d[v++]=c[h++]}return new mi(d,u,f)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Hn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new Dt,Cr=new Ov,yo=new Pl,xp=new J,So=new J,bo=new J,Eo=new J,Lc=new J,Mo=new J,yp=new J,To=new J;class ti extends Jt{constructor(e=new Hn,n=new Vv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Lc.fromBufferAttribute(f,e),a?Mo.addScaledVector(Lc,u):Mo.addScaledVector(Lc.sub(n),u))}n.add(Mo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),Cr.copy(e.ray).recast(e.near),!(yo.containsPoint(Cr.origin)===!1&&(Cr.intersectSphere(yo,xp)===null||Cr.origin.distanceToSquared(xp)>(e.far-e.near)**2))&&(_p.copy(s).invert(),Cr.copy(e.ray).applyMatrix4(_p),!(i.boundingBox!==null&&Cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const g=d[v],m=a[g.materialIndex],E=Math.max(g.start,h.start),y=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let b=E,w=y;b<w;b+=3){const P=o.getX(b),L=o.getX(b+1),F=o.getX(b+2);r=Ao(this,m,e,i,c,u,f,P,L,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let g=v,m=_;g<m;g+=3){const E=o.getX(g),y=o.getX(g+1),b=o.getX(g+2);r=Ao(this,a,e,i,c,u,f,E,y,b),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,_=d.length;v<_;v++){const g=d[v],m=a[g.materialIndex],E=Math.max(g.start,h.start),y=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let b=E,w=y;b<w;b+=3){const P=b,L=b+1,F=b+2;r=Ao(this,m,e,i,c,u,f,P,L,F),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let g=v,m=_;g<m;g+=3){const E=g,y=g+1,b=g+2;r=Ao(this,a,e,i,c,u,f,E,y,b),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function W2(t,e,n,i,r,s,a,o){let l;if(e.side===hn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===vr,o),l===null)return null;To.copy(o),To.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(To);return c<n.near||c>n.far?null:{distance:c,point:To.clone(),object:t}}function Ao(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,So),t.getVertexPosition(l,bo),t.getVertexPosition(c,Eo);const u=W2(t,e,n,i,So,bo,Eo,yp);if(u){const f=new J;$n.getBarycoord(yp,So,bo,Eo,f),r&&(u.uv=$n.getInterpolatedAttribute(r,o,l,c,f,new ct)),s&&(u.uv1=$n.getInterpolatedAttribute(s,o,l,c,f,new ct)),a&&(u.normal=$n.getInterpolatedAttribute(a,o,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new J,materialIndex:0};$n.getNormal(So,bo,Eo,d.normal),u.face=d,u.barycoord=f}return u}class ja extends Hn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new vn(c,3)),this.setAttribute("normal",new vn(u,3)),this.setAttribute("uv",new vn(f,2));function v(_,g,m,E,y,b,w,P,L,F,S){const M=b/L,I=w/F,U=b/2,k=w/2,H=P/2,$=L+1,B=F+1;let W=0,j=0;const de=new J;for(let _e=0;_e<B;_e++){const be=_e*I-k;for(let Oe=0;Oe<$;Oe++){const Ge=Oe*M-U;de[_]=Ge*E,de[g]=be*y,de[m]=H,c.push(de.x,de.y,de.z),de[_]=0,de[g]=0,de[m]=P>0?1:-1,u.push(de.x,de.y,de.z),f.push(Oe/L),f.push(1-_e/F),W+=1}}for(let _e=0;_e<F;_e++)for(let be=0;be<L;be++){const Oe=d+be+$*_e,Ge=d+be+$*(_e+1),ut=d+(be+1)+$*(_e+1),st=d+(be+1)+$*_e;l.push(Oe,Ge,st),l.push(Ge,ut,st),j+=6}o.addGroup(h,j,S),h+=j,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=Os(t[n]);for(const r in i)e[r]=i[r]}return e}function $2(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const X2={clone:Os,merge:ln};var j2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,q2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j2,this.fragmentShader=q2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=$2(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wv extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=fi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new J,Sp=new ct,bp=new ct;class On extends Wv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=of*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return of*2*Math.atan(Math.tan(uc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,n){return this.getViewBounds(e,Sp,bp),n.subVectors(bp,Sp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(uc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class Y2 extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new On(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new On(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new On(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new On(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new On(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new On(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class $v extends sn{constructor(e=[],n=Xr,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xv extends pi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new $v(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ja(5,5,5),s=new ni({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Oi});s.uniforms.tEquirect.value=n;const a=new ti(r,s),o=n.minFilter;return n.minFilter===kr&&(n.minFilter=rn),new Y2(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}class wo extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const K2={type:"move"};class Dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const g=n.getJointPose(_,i),m=this._getHandJoint(c,_);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,v=.005;c.inputState.pinching&&d>h+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(K2)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new wo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Z2 extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class J2 extends sn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Zt,u=Zt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ic=new J,Q2=new J,eT=new Ye;class Ir{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(Q2.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||eT.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rr=new Pl,tT=new ct(.5,.5),Co=new J;class gd{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,a=new Ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],v=s[8],_=s[9],g=s[10],m=s[11],E=s[12],y=s[13],b=s[14],w=s[15];if(r[0].setComponents(c-a,h-u,m-v,w-E).normalize(),r[1].setComponents(c+a,h+u,m+v,w+E).normalize(),r[2].setComponents(c+o,h+f,m+_,w+y).normalize(),r[3].setComponents(c-o,h-f,m-_,w-y).normalize(),i)r[4].setComponents(l,d,g,b).normalize(),r[5].setComponents(c-l,h-d,m-g,w-b).normalize();else if(r[4].setComponents(c-l,h-d,m-g,w-b).normalize(),n===fi)r[5].setComponents(c+l,h+d,m+g,w+b).normalize();else if(n===sl)r[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const n=tT.distanceTo(e.center);return Rr.radius=.7071067811865476+n,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Co.x=r.normal.x>0?e.max.x:e.min.x,Co.y=r.normal.y>0?e.max.y:e.min.y,Co.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Co)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jv extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ep=new Dt,lf=new Ov,Ro=new Pl,Po=new J;class nT extends Jt{constructor(e=new Hn,n=new jv){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;Ep.copy(r).invert(),lf.copy(e.ray).applyMatrix4(Ep);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),h=Math.min(c.count,a.start+a.count);for(let v=d,_=h;v<_;v++){const g=c.getX(v);Po.fromBufferAttribute(f,g),Mp(Po,g,l,r,e,n,this)}}else{const d=Math.max(0,a.start),h=Math.min(f.count,a.start+a.count);for(let v=d,_=h;v<_;v++)Po.fromBufferAttribute(f,v),Mp(Po,v,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Mp(t,e,n,i,r,s,a){const o=lf.distanceSqToPoint(t);if(o<n){const l=new J;lf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Ca extends sn{constructor(e,n,i=vi,r,s,a,o=Zt,l=Zt,c,u=$i,f=1){if(u!==$i&&u!==Vr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new md(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class iT extends Ca{constructor(e,n=vi,i=Xr,r,s,a=Zt,o=Zt,l,c=$i){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class qv extends sn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ll extends Hn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],v=[],_=[],g=[];for(let m=0;m<u;m++){const E=m*d-a;for(let y=0;y<c;y++){const b=y*f-s;v.push(b,-E,0),_.push(0,0,1),g.push(y/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let E=0;E<o;E++){const y=E+c*m,b=E+c*(m+1),w=E+1+c*(m+1),P=E+1+c*m;h.push(y,b,P),h.push(b,w,P)}this.setIndex(h),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ll(e.width,e.height,e.widthSegments,e.heightSegments)}}class al extends Hn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new J,d=new J,h=[],v=[],_=[],g=[];for(let m=0;m<=i;m++){const E=[],y=m/i;let b=0;m===0&&a===0?b=.5/n:m===i&&l===Math.PI&&(b=-.5/n);for(let w=0;w<=n;w++){const P=w/n;f.x=-e*Math.cos(r+P*s)*Math.sin(a+y*o),f.y=e*Math.cos(a+y*o),f.z=e*Math.sin(r+P*s)*Math.sin(a+y*o),v.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(P+b,1-y),E.push(c++)}u.push(E)}for(let m=0;m<i;m++)for(let E=0;E<n;E++){const y=u[m][E+1],b=u[m][E],w=u[m+1][E],P=u[m+1][E+1];(m!==0||a>0)&&h.push(y,b,P),(m!==i-1||l<Math.PI)&&h.push(b,w,P)}this.setIndex(h),this.setAttribute("position",new vn(v,3)),this.setAttribute("normal",new vn(_,3)),this.setAttribute("uv",new vn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new al(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rT extends ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sT extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nv,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class aT extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oT extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Nc={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class lT{constructor(e,n,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],v=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return v}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const cT=new lT;class vd{constructor(e){this.manager=e!==void 0?e:cT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}vd.DEFAULT_MATERIAL_NAME="__DEFAULT";const fs=new WeakMap;class uT extends vd{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Nc.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){n&&n(a),s.manager.itemEnd(e)},0);else{let f=fs.get(a);f===void 0&&(f=[],fs.set(a,f)),f.push({onLoad:n,onError:r})}return a}const o=Aa("img");function l(){u(),n&&n(this);const f=fs.get(this)||[];for(let d=0;d<f.length;d++){const h=f[d];h.onLoad&&h.onLoad(this)}fs.delete(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),Nc.remove(`image:${e}`);const d=fs.get(this)||[];for(let h=0;h<d.length;h++){const v=d[h];v.onError&&v.onError(f)}fs.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Nc.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class fT extends vd{constructor(e){super(e)}load(e,n,i,r){const s=new sn,a=new uT(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Yv extends Jt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Uc=new Dt,Tp=new J,Ap=new J;class dT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new Dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new gd,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Tp.setFromMatrixPosition(e.matrixWorld),n.position.copy(Tp),Ap.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ap),n.updateMatrixWorld(),Uc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uc,n.coordinateSystem,n.reversedDepth),n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class _d extends Wv{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class hT extends dT{constructor(){super(new _d(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class pT extends Yv{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new hT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class mT extends Yv{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class gT extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function wp(t,e,n,i){const r=vT(i);switch(n){case Lv:return t*e;case Iv:return t*e/r.components*r.byteLength;case ud:return t*e/r.components*r.byteLength;case Us:return t*e*2/r.components*r.byteLength;case fd:return t*e*2/r.components*r.byteLength;case Dv:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case dd:return t*e*4/r.components*r.byteLength;case ko:case Vo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ho:case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ru:case Lu:return Math.max(t,16)*Math.max(e,8)/4;case Cu:case Pu:return Math.max(t,8)*Math.max(e,8)/2;case Du:case Iu:case Uu:case Fu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nu:case Ou:case Bu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ku:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vu:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Hu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case zu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Wu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case $u:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Xu:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case ju:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qu:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Yu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ku:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Zu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ju:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Qu:case ef:case tf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case nf:case rf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case sf:case af:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function vT(t){switch(t){case Tn:case wv:return{byteLength:1,components:1};case Ma:case Cv:case Wi:return{byteLength:2,components:1};case ld:case cd:return{byteLength:2,components:4};case vi:case od:case ui:return{byteLength:4,components:1};case Rv:case Pv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sd}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Kv(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function _T(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,v)=>h.start-v.start);let d=0;for(let h=1;h<f.length;h++){const v=f[d],_=f[h];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,v=f.length;h<v;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var xT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yT=`#ifdef USE_ALPHAHASH
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
#endif`,ST=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ET=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,MT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TT=`#ifdef USE_AOMAP
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
#endif`,AT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wT=`#ifdef USE_BATCHING
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
#endif`,CT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,RT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,LT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DT=`#ifdef USE_IRIDESCENCE
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
#endif`,IT=`#ifdef USE_BUMPMAP
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
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,UT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,OT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,HT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zT=`#define PI 3.141592653589793
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
} // validated`,GT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,WT=`vec3 transformedNormal = objectNormal;
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
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,YT="gl_FragColor = linearToOutputTexel( gl_FragColor );",KT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZT=`#ifdef USE_ENVMAP
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
#endif`,JT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QT=`#ifdef USE_ENVMAP
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
#endif`,eA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tA=`#ifdef USE_ENVMAP
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
#endif`,nA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,iA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,aA=`#ifdef USE_GRADIENTMAP
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
}`,oA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uA=`uniform bool receiveShadow;
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
#endif`,fA=`#ifdef USE_ENVMAP
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
#endif`,dA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gA=`PhysicalMaterial material;
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
#endif`,vA=`uniform sampler2D dfgLUT;
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
}`,_A=`
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
#endif`,xA=`#if defined( RE_IndirectDiffuse )
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
#endif`,yA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,TA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CA=`#if defined( USE_POINTS_UV )
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
#endif`,RA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,LA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,DA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NA=`#ifdef USE_MORPHTARGETS
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
#endif`,UA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,BA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,VA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,HA=`#ifdef USE_NORMALMAP
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
#endif`,zA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,XA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,YA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,KA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ZA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,JA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,QA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ew=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,iw=`float getShadowMask() {
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
}`,rw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,sw=`#ifdef USE_SKINNING
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
#endif`,aw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ow=`#ifdef USE_SKINNING
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
#endif`,lw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dw=`#ifdef USE_TRANSMISSION
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
#endif`,hw=`#ifdef USE_TRANSMISSION
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
#endif`,pw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xw=`uniform sampler2D t2D;
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
}`,yw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Sw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mw=`#include <common>
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
}`,Tw=`#if DEPTH_PACKING == 3200
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
}`,Aw=`#define DISTANCE
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
}`,ww=`#define DISTANCE
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
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Rw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Pw=`uniform float scale;
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
}`,Lw=`uniform vec3 diffuse;
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
}`,Dw=`#include <common>
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Nw=`#define LAMBERT
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
}`,Uw=`#define LAMBERT
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
}`,Fw=`#define MATCAP
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
}`,Ow=`#define MATCAP
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
}`,Bw=`#define NORMAL
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
}`,kw=`#define NORMAL
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
}`,Vw=`#define PHONG
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
}`,Hw=`#define PHONG
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
}`,zw=`#define STANDARD
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
}`,Gw=`#define STANDARD
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
}`,Ww=`#define TOON
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
}`,$w=`#define TOON
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
}`,Xw=`uniform float size;
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
}`,jw=`uniform vec3 diffuse;
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
}`,qw=`#include <common>
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
}`,Yw=`uniform vec3 color;
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
}`,Kw=`uniform float rotation;
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
}`,Zw=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:xT,alphahash_pars_fragment:yT,alphamap_fragment:ST,alphamap_pars_fragment:bT,alphatest_fragment:ET,alphatest_pars_fragment:MT,aomap_fragment:TT,aomap_pars_fragment:AT,batching_pars_vertex:wT,batching_vertex:CT,begin_vertex:RT,beginnormal_vertex:PT,bsdfs:LT,iridescence_fragment:DT,bumpmap_pars_fragment:IT,clipping_planes_fragment:NT,clipping_planes_pars_fragment:UT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:OT,color_fragment:BT,color_pars_fragment:kT,color_pars_vertex:VT,color_vertex:HT,common:zT,cube_uv_reflection_fragment:GT,defaultnormal_vertex:WT,displacementmap_pars_vertex:$T,displacementmap_vertex:XT,emissivemap_fragment:jT,emissivemap_pars_fragment:qT,colorspace_fragment:YT,colorspace_pars_fragment:KT,envmap_fragment:ZT,envmap_common_pars_fragment:JT,envmap_pars_fragment:QT,envmap_pars_vertex:eA,envmap_physical_pars_fragment:fA,envmap_vertex:tA,fog_vertex:nA,fog_pars_vertex:iA,fog_fragment:rA,fog_pars_fragment:sA,gradientmap_pars_fragment:aA,lightmap_pars_fragment:oA,lights_lambert_fragment:lA,lights_lambert_pars_fragment:cA,lights_pars_begin:uA,lights_toon_fragment:dA,lights_toon_pars_fragment:hA,lights_phong_fragment:pA,lights_phong_pars_fragment:mA,lights_physical_fragment:gA,lights_physical_pars_fragment:vA,lights_fragment_begin:_A,lights_fragment_maps:xA,lights_fragment_end:yA,logdepthbuf_fragment:SA,logdepthbuf_pars_fragment:bA,logdepthbuf_pars_vertex:EA,logdepthbuf_vertex:MA,map_fragment:TA,map_pars_fragment:AA,map_particle_fragment:wA,map_particle_pars_fragment:CA,metalnessmap_fragment:RA,metalnessmap_pars_fragment:PA,morphinstance_vertex:LA,morphcolor_vertex:DA,morphnormal_vertex:IA,morphtarget_pars_vertex:NA,morphtarget_vertex:UA,normal_fragment_begin:FA,normal_fragment_maps:OA,normal_pars_fragment:BA,normal_pars_vertex:kA,normal_vertex:VA,normalmap_pars_fragment:HA,clearcoat_normal_fragment_begin:zA,clearcoat_normal_fragment_maps:GA,clearcoat_pars_fragment:WA,iridescence_pars_fragment:$A,opaque_fragment:XA,packing:jA,premultiplied_alpha_fragment:qA,project_vertex:YA,dithering_fragment:KA,dithering_pars_fragment:ZA,roughnessmap_fragment:JA,roughnessmap_pars_fragment:QA,shadowmap_pars_fragment:ew,shadowmap_pars_vertex:tw,shadowmap_vertex:nw,shadowmask_pars_fragment:iw,skinbase_vertex:rw,skinning_pars_vertex:sw,skinning_vertex:aw,skinnormal_vertex:ow,specularmap_fragment:lw,specularmap_pars_fragment:cw,tonemapping_fragment:uw,tonemapping_pars_fragment:fw,transmission_fragment:dw,transmission_pars_fragment:hw,uv_pars_fragment:pw,uv_pars_vertex:mw,uv_vertex:gw,worldpos_vertex:vw,background_vert:_w,background_frag:xw,backgroundCube_vert:yw,backgroundCube_frag:Sw,cube_vert:bw,cube_frag:Ew,depth_vert:Mw,depth_frag:Tw,distance_vert:Aw,distance_frag:ww,equirect_vert:Cw,equirect_frag:Rw,linedashed_vert:Pw,linedashed_frag:Lw,meshbasic_vert:Dw,meshbasic_frag:Iw,meshlambert_vert:Nw,meshlambert_frag:Uw,meshmatcap_vert:Fw,meshmatcap_frag:Ow,meshnormal_vert:Bw,meshnormal_frag:kw,meshphong_vert:Vw,meshphong_frag:Hw,meshphysical_vert:zw,meshphysical_frag:Gw,meshtoon_vert:Ww,meshtoon_frag:$w,points_vert:Xw,points_frag:jw,shadow_vert:qw,shadow_frag:Yw,sprite_vert:Kw,sprite_frag:Zw},Ae={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},ci={basic:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:ln([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:ln([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:ln([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new rt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:ln([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:ln([Ae.points,Ae.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:ln([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:ln([Ae.common,Ae.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:ln([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:ln([Ae.sprite,Ae.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:ln([Ae.common,Ae.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:ln([Ae.lights,Ae.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ci.physical={uniforms:ln([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Lo={r:0,b:0,g:0},Pr=new _i,Jw=new Dt;function Qw(t,e,n,i,r,s,a){const o=new rt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function v(y){let b=y.isScene===!0?y.background:null;return b&&b.isTexture&&(b=(y.backgroundBlurriness>0?n:e).get(b)),b}function _(y){let b=!1;const w=v(y);w===null?m(o,l):w&&w.isColor&&(m(w,1),b=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(y,b){const w=v(b);w&&(w.isCubeTexture||w.mapping===Rl)?(u===void 0&&(u=new ti(new ja(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:Os(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,L,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Pr.copy(b.backgroundRotation),Pr.x*=-1,Pr.y*=-1,Pr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Pr.y*=-1,Pr.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Jw.makeRotationFromEuler(Pr)),u.material.toneMapped=at.getTransfer(w.colorSpace)!==mt,(f!==w||d!==w.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=w,d=w.version,h=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new ti(new Ll(2,2),new ni({name:"BackgroundMaterial",uniforms:Os(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=at.getTransfer(w.colorSpace)!==mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||d!==w.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=w,d=w.version,h=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,b){y.getRGB(Lo,Gv(t)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,b,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,b=1){o.set(y),l=b,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:_,addToRenderList:g,dispose:E}}function eC(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(M,I,U,k,H){let $=!1;const B=f(k,U,I);s!==B&&(s=B,c(s.object)),$=h(M,k,U,H),$&&v(M,k,U,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(M,I,U,k),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,I,U){const k=U.wireframe===!0;let H=i[M.id];H===void 0&&(H={},i[M.id]=H);let $=H[I.id];$===void 0&&($={},H[I.id]=$);let B=$[k];return B===void 0&&(B=d(l()),$[k]=B),B}function d(M){const I=[],U=[],k=[];for(let H=0;H<n;H++)I[H]=0,U[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:U,attributeDivisors:k,object:M,attributes:{},index:null}}function h(M,I,U,k){const H=s.attributes,$=I.attributes;let B=0;const W=U.getAttributes();for(const j in W)if(W[j].location>=0){const _e=H[j];let be=$[j];if(be===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),_e===void 0||_e.attribute!==be||be&&_e.data!==be.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function v(M,I,U,k){const H={},$=I.attributes;let B=0;const W=U.getAttributes();for(const j in W)if(W[j].location>=0){let _e=$[j];_e===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor));const be={};be.attribute=_e,_e&&_e.data&&(be.data=_e.data),H[j]=be,B++}s.attributes=H,s.attributesNum=B,s.index=k}function _(){const M=s.newAttributes;for(let I=0,U=M.length;I<U;I++)M[I]=0}function g(M){m(M,0)}function m(M,I){const U=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;U[M]=1,k[M]===0&&(t.enableVertexAttribArray(M),k[M]=1),H[M]!==I&&(t.vertexAttribDivisor(M,I),H[M]=I)}function E(){const M=s.newAttributes,I=s.enabledAttributes;for(let U=0,k=I.length;U<k;U++)I[U]!==M[U]&&(t.disableVertexAttribArray(U),I[U]=0)}function y(M,I,U,k,H,$,B){B===!0?t.vertexAttribIPointer(M,I,U,H,$):t.vertexAttribPointer(M,I,U,k,H,$)}function b(M,I,U,k){_();const H=k.attributes,$=U.getAttributes(),B=I.defaultAttributeValues;for(const W in $){const j=$[W];if(j.location>=0){let de=H[W];if(de===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(de=M.instanceColor)),de!==void 0){const _e=de.normalized,be=de.itemSize,Oe=e.get(de);if(Oe===void 0)continue;const Ge=Oe.buffer,ut=Oe.type,st=Oe.bytesPerElement,se=ut===t.INT||ut===t.UNSIGNED_INT||de.gpuType===od;if(de.isInterleavedBufferAttribute){const O=de.data,re=O.stride,oe=de.offset;if(O.isInstancedInterleavedBuffer){for(let ae=0;ae<j.locationSize;ae++)m(j.location+ae,O.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ae=0;ae<j.locationSize;ae++)g(j.location+ae);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let ae=0;ae<j.locationSize;ae++)y(j.location+ae,be/j.locationSize,ut,_e,re*st,(oe+be/j.locationSize*ae)*st,se)}else{if(de.isInstancedBufferAttribute){for(let O=0;O<j.locationSize;O++)m(j.location+O,de.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let O=0;O<j.locationSize;O++)g(j.location+O);t.bindBuffer(t.ARRAY_BUFFER,Ge);for(let O=0;O<j.locationSize;O++)y(j.location+O,be/j.locationSize,ut,_e,be*st,be/j.locationSize*O*st,se)}}else if(B!==void 0){const _e=B[W];if(_e!==void 0)switch(_e.length){case 2:t.vertexAttrib2fv(j.location,_e);break;case 3:t.vertexAttrib3fv(j.location,_e);break;case 4:t.vertexAttrib4fv(j.location,_e);break;default:t.vertexAttrib1fv(j.location,_e)}}}}E()}function w(){F();for(const M in i){const I=i[M];for(const U in I){const k=I[U];for(const H in k)u(k[H].object),delete k[H];delete I[U]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const I=i[M.id];for(const U in I){const k=I[U];for(const H in k)u(k[H].object),delete k[H];delete I[U]}delete i[M.id]}function L(M){for(const I in i){const U=i[I];if(U[M.id]===void 0)continue;const k=U[M.id];for(const H in k)u(k[H].object),delete k[H];delete U[M.id]}}function F(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:S,dispose:w,releaseStatesOfGeometry:P,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:g,disableUnusedAttributes:E}}function tC(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let v=0;v<f;v++)h+=u[v];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let v=0;v<c.length;v++)a(c[v],u[v],d[v]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let v=0;for(let _=0;_<f;_++)v+=u[_]*d[_];n.update(v,i,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function nC(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(L){return!(L!==jn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const F=L===Wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Tn&&i.convert(L)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==ui&&!F)}function l(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Xe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),E=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),P=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,maxSamples:w,samples:P}}function iC(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ir,o=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const v=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,m=t.get(f);if(!r||v===null||v.length===0||s&&!g)s?u(null):c();else{const E=s?0:i,y=E*4;let b=m.clippingState||null;l.value=b,b=u(v,d,y,h);for(let w=0;w!==y;++w)b[w]=n[w];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,v){const _=f!==null?f.length:0;let g=null;if(_!==0){if(g=l.value,v!==!0||g===null){const m=h+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(g===null||g.length<m)&&(g=new Float32Array(m));for(let y=0,b=h;y!==_;++y,b+=4)a.copy(f[y]).applyMatrix4(E,o),a.normal.toArray(g,b),g[b+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function rC(t){let e=new WeakMap;function n(a,o){return o===Mu?a.mapping=Xr:o===Tu&&(a.mapping=Ns),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Mu||o===Tu)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xv(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const dr=4,Cp=[.125,.215,.35,.446,.526,.582],Fr=20,sC=256,sa=new _d,Rp=new rt;let Fc=null,Oc=0,Bc=0,kc=!1;const aC=new J;class Pp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=aC}=s;Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ip(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fc,Oc,Bc),this._renderer.xr.enabled=kc,e.scissorTest=!1,ds(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xr||e.mapping===Ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fc=this._renderer.getRenderTarget(),Oc=this._renderer.getActiveCubeFace(),Bc=this._renderer.getActiveMipmapLevel(),kc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:rn,minFilter:rn,generateMipmaps:!1,type:Wi,format:jn,colorSpace:Fs,depthBuffer:!1},r=Lp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oC(s)),this._blurMaterial=cC(s,e,n),this._ggxMaterial=lC(s,e,n)}return r}_compileMaterial(e){const n=new ti(new Hn,e);this._renderer.compile(n,sa)}_sceneToCubeUV(e,n,i,r,s){const l=new On(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Rp),f.toneMapping=hi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ti(new ja,new Vv({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,g=_.material;let m=!1;const E=e.background;E?E.isColor&&(g.color.copy(E),e.background=null,m=!0):(g.color.copy(Rp),m=!0);for(let y=0;y<6;y++){const b=y%3;b===0?(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[y],s.y,s.z)):b===1?(l.up.set(0,0,c[y]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[y],s.z)):(l.up.set(0,c[y],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[y]));const w=this._cubeSize;ds(r,b*w,y>2?w:0,w,w),f.setRenderTarget(r),m&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=E}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xr||e.mapping===Ns;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ip()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ds(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,sa)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),u=n/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:v}=this,_=this._sizeLods[i],g=3*_*(i>v-dr?i-v+dr:0),m=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=v-n,ds(s,g,m,3*_,2*_),r.setRenderTarget(s),r.render(o,sa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=v-i,ds(e,g,m,3*_,2*_),r.setRenderTarget(e),r.render(o,sa)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&lt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[r];f.material=c;const d=c.uniforms,h=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Fr-1),_=s/v,g=isFinite(s)?1+Math.floor(u*_):Fr;g>Fr&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Fr}`);const m=[];let E=0;for(let L=0;L<Fr;++L){const F=L/_,S=Math.exp(-F*F/2);m.push(S),L===0?E+=S:L<g&&(E+=2*S)}for(let L=0;L<m.length;L++)m[L]=m[L]/E;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=v,d.mipInt.value=y-i;const b=this._sizeLods[r],w=3*b*(r>y-dr?r-y+dr:0),P=4*(this._cubeSize-b);ds(n,w,P,3*b,2*b),l.setRenderTarget(n),l.render(f,sa)}}function oC(t){const e=[],n=[],i=[];let r=t;const s=t-dr+1+Cp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-dr?l=Cp[a-t+dr-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,v=6,_=3,g=2,m=1,E=new Float32Array(_*v*h),y=new Float32Array(g*v*h),b=new Float32Array(m*v*h);for(let P=0;P<h;P++){const L=P%3*2/3-1,F=P>2?0:-1,S=[L,F,0,L+2/3,F,0,L+2/3,F+1,0,L,F,0,L+2/3,F+1,0,L,F+1,0];E.set(S,_*v*P),y.set(d,g*v*P);const M=[P,P,P,P,P,P];b.set(M,m*v*P)}const w=new Hn;w.setAttribute("position",new mi(E,_)),w.setAttribute("uv",new mi(y,g)),w.setAttribute("faceIndex",new mi(b,m)),i.push(new ti(w,null)),r>dr&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Lp(t,e,n){const i=new pi(t,e,n);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ds(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function lC(t,e,n){return new ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:sC,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function cC(t,e,n){const i=new Float32Array(Fr),r=new J(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Dp(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dl(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Ip(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Dl(){return`

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
	`}function uC(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Mu||l===Tu,u=l===Xr||l===Ns;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return n===null&&(n=new Pp(t)),f=c?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Pp(t)),f=c?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function fC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&wa("WebGLRenderer: "+i+" extension not supported."),r}}}function dC(t,e,n,i){const r={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,v=f.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let y=0,b=E.length;y<b;y+=3){const w=E[y+0],P=E[y+1],L=E[y+2];d.push(w,P,P,L,L,w)}}else if(v!==void 0){const E=v.array;_=v.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const w=y+0,P=y+1,L=y+2;d.push(w,P,P,L,L,w)}}else return;const g=new(Uv(d)?zv:Hv)(d,1);g.version=_;const m=s.get(f);m&&e.remove(m),s.set(f,g)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function hC(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*a),n.update(h,i,1)}function c(d,h,v){v!==0&&(t.drawElementsInstanced(i,h,s,d*a,v),n.update(h,i,v))}function u(d,h,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,v);let g=0;for(let m=0;m<v;m++)g+=h[m];n.update(g,i,1)}function f(d,h,v,_){if(v===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,h[m],_[m]);else{g.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,v);let m=0;for(let E=0;E<v;E++)m+=h[E]*_[E];n.update(m,i,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function pC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:lt("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function mC(t,e,n){const i=new WeakMap,r=new Ot;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;h===!0&&(y=1),v===!0&&(y=2),_===!0&&(y=3);let b=o.attributes.position.count*y,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*w*4*f),L=new Fv(P,b,w,f);L.type=ui,L.needsUpdate=!0;const F=y*4;for(let M=0;M<f;M++){const I=g[M],U=m[M],k=E[M],H=b*w*4*M;for(let $=0;$<I.count;$++){const B=$*F;h===!0&&(r.fromBufferAttribute(I,$),P[H+B+0]=r.x,P[H+B+1]=r.y,P[H+B+2]=r.z,P[H+B+3]=0),v===!0&&(r.fromBufferAttribute(U,$),P[H+B+4]=r.x,P[H+B+5]=r.y,P[H+B+6]=r.z,P[H+B+7]=0),_===!0&&(r.fromBufferAttribute(k,$),P[H+B+8]=r.x,P[H+B+9]=r.y,P[H+B+10]=r.z,P[H+B+11]=k.itemSize===4?r.w:1)}}d={count:f,texture:L,size:new ct(b,w)},i.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const v=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function gC(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}const vC={[yv]:"LINEAR_TONE_MAPPING",[Sv]:"REINHARD_TONE_MAPPING",[bv]:"CINEON_TONE_MAPPING",[ad]:"ACES_FILMIC_TONE_MAPPING",[Mv]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[Ev]:"CUSTOM_TONE_MAPPING"};function _C(t,e,n,i,r){const s=new pi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),a=new pi(e,n,{type:Wi,depthBuffer:!1,stencilBuffer:!1}),o=new Hn;o.setAttribute("position",new vn([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new vn([0,2,0,0,2,0],2));const l=new rT({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new ti(o,l),u=new _d(-1,1,1,-1,0,1);let f=null,d=null,h=!1,v,_=null,g=[],m=!1;this.setSize=function(E,y){s.setSize(E,y),a.setSize(E,y);for(let b=0;b<g.length;b++){const w=g[b];w.setSize&&w.setSize(E,y)}},this.setEffects=function(E){g=E,m=g.length>0&&g[0].isRenderPass===!0;const y=s.width,b=s.height;for(let w=0;w<g.length;w++){const P=g[w];P.setSize&&P.setSize(y,b)}},this.begin=function(E,y){if(h||E.toneMapping===hi&&g.length===0)return!1;if(_=y,y!==null){const b=y.width,w=y.height;(s.width!==b||s.height!==w)&&this.setSize(b,w)}return m===!1&&E.setRenderTarget(s),v=E.toneMapping,E.toneMapping=hi,!0},this.hasRenderPass=function(){return m},this.end=function(E,y){E.toneMapping=v,h=!0;let b=s,w=a;for(let P=0;P<g.length;P++){const L=g[P];if(L.enabled!==!1&&(L.render(E,w,b,y),L.needsSwap!==!1)){const F=b;b=w,w=F}}if(f!==E.outputColorSpace||d!==E.toneMapping){f=E.outputColorSpace,d=E.toneMapping,l.defines={},at.getTransfer(f)===mt&&(l.defines.SRGB_TRANSFER="");const P=vC[d];P&&(l.defines[P]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,E.setRenderTarget(_),E.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Zv=new sn,cf=new Ca(1,1),Jv=new Fv,Qv=new I2,e_=new $v,Np=[],Up=[],Fp=new Float32Array(16),Op=new Float32Array(9),Bp=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Np[r];if(s===void 0&&(s=new Float32Array(r),Np[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Il(t,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function yC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function SC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function bC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function EC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if($t(n,i))return;Bp.set(i),t.uniformMatrix2fv(this.addr,!1,Bp),Xt(n,i)}}function MC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if($t(n,i))return;Op.set(i),t.uniformMatrix3fv(this.addr,!1,Op),Xt(n,i)}}function TC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if($t(n,i))return;Fp.set(i),t.uniformMatrix4fv(this.addr,!1,Fp),Xt(n,i)}}function AC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function CC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function RC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function PC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function NC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(cf.compareFunction=n.isReversedDepthBuffer()?pd:hd,s=cf):s=Zv,n.setTexture2D(e||s,r)}function UC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qv,r)}function FC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||e_,r)}function OC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jv,r)}function BC(t){switch(t){case 5126:return xC;case 35664:return yC;case 35665:return SC;case 35666:return bC;case 35674:return EC;case 35675:return MC;case 35676:return TC;case 5124:case 35670:return AC;case 35667:case 35671:return wC;case 35668:case 35672:return CC;case 35669:case 35673:return RC;case 5125:return PC;case 36294:return LC;case 36295:return DC;case 36296:return IC;case 35678:case 36198:case 36298:case 36306:case 35682:return NC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return OC}}function kC(t,e){t.uniform1fv(this.addr,e)}function VC(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function HC(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function zC(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function GC(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WC(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $C(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function XC(t,e){t.uniform1iv(this.addr,e)}function jC(t,e){t.uniform2iv(this.addr,e)}function qC(t,e){t.uniform3iv(this.addr,e)}function YC(t,e){t.uniform4iv(this.addr,e)}function KC(t,e){t.uniform1uiv(this.addr,e)}function ZC(t,e){t.uniform2uiv(this.addr,e)}function JC(t,e){t.uniform3uiv(this.addr,e)}function QC(t,e){t.uniform4uiv(this.addr,e)}function eR(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=cf:a=Zv;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function tR(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Qv,s[a])}function nR(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||e_,s[a])}function iR(t,e,n){const i=this.cache,r=e.length,s=Il(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Jv,s[a])}function rR(t){switch(t){case 5126:return kC;case 35664:return VC;case 35665:return HC;case 35666:return zC;case 35674:return GC;case 35675:return WC;case 35676:return $C;case 5124:case 35670:return XC;case 35667:case 35671:return jC;case 35668:case 35672:return qC;case 35669:case 35673:return YC;case 5125:return KC;case 36294:return ZC;case 36295:return JC;case 36296:return QC;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}class sR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BC(n.type)}}class aR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rR(n.type)}}class oR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Vc=/(\w+)(\])?(\[|\.)?/g;function kp(t,e){t.seq.push(e),t.map[e.id]=e}function lR(t,e,n){const i=t.name,r=i.length;for(Vc.lastIndex=0;;){const s=Vc.exec(i),a=Vc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){kp(n,c===void 0?new sR(o,t,e):new aR(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new oR(o),kp(n,f)),n=f}}}class Go{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);lR(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Vp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cR=37297;let uR=0;function fR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Hp=new Ye;function dR(t){at._getMatrix(Hp,at.workingColorSpace,t);const e=`mat3( ${Hp.elements.map(n=>n.toFixed(4))} )`;switch(at.getTransfer(t)){case rl:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function zp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+fR(t.getShaderSource(e),o)}else return s}function hR(t,e){const n=dR(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const pR={[yv]:"Linear",[Sv]:"Reinhard",[bv]:"Cineon",[ad]:"ACESFilmic",[Mv]:"AgX",[Tv]:"Neutral",[Ev]:"Custom"};function mR(t,e){const n=pR[e];return n===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Do=new J;function gR(){at.getLuminanceCoefficients(Do);const t=Do.x.toFixed(4),e=Do.y.toFixed(4),n=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vR(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function _R(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ca(t){return t!==""}function Gp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const yR=/^[ \t]*#include +<([\w\d./]+)>/gm;function uf(t){return t.replace(yR,bR)}const SR=new Map;function bR(t,e){let n=Ke[e];if(n===void 0){const i=SR.get(e);if(i!==void 0)n=Ke[i],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uf(n)}const ER=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $p(t){return t.replace(ER,MR)}function MR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Xp(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const TR={[Bo]:"SHADOWMAP_TYPE_PCF",[la]:"SHADOWMAP_TYPE_VSM"};function AR(t){return TR[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wR={[Xr]:"ENVMAP_TYPE_CUBE",[Ns]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function CR(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":wR[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const RR={[Ns]:"ENVMAP_MODE_REFRACTION"};function PR(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":RR[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const LR={[xv]:"ENVMAP_BLENDING_MULTIPLY",[p2]:"ENVMAP_BLENDING_MIX",[m2]:"ENVMAP_BLENDING_ADD"};function DR(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":LR[t.combine]||"ENVMAP_BLENDING_NONE"}function IR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function NR(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=AR(n),c=CR(n),u=PR(n),f=DR(n),d=IR(n),h=vR(n),v=_R(s),_=r.createProgram();let g,m,E=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ca).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ca).join(`
`),m.length>0&&(m+=`
`)):(g=[Xp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),m=[Xp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Ke.tonemapping_pars_fragment:"",n.toneMapping!==hi?mR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,hR("linearToOutputTexel",n.outputColorSpace),gR(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),a=uf(a),a=Gp(a,n),a=Wp(a,n),o=uf(o),o=Gp(o,n),o=Wp(o,n),a=$p(a),o=$p(o),n.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=E+g+a,b=E+m+o,w=Vp(r,r.VERTEX_SHADER,y),P=Vp(r,r.FRAGMENT_SHADER,b);r.attachShader(_,w),r.attachShader(_,P),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function L(I){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",k=r.getShaderInfoLog(w)||"",H=r.getShaderInfoLog(P)||"",$=U.trim(),B=k.trim(),W=H.trim();let j=!0,de=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,w,P);else{const _e=zp(r,w,"vertex"),be=zp(r,P,"fragment");lt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+$+`
`+_e+`
`+be)}else $!==""?Xe("WebGLProgram: Program Info Log:",$):(B===""||W==="")&&(de=!1);de&&(I.diagnostics={runnable:j,programLog:$,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:m}})}r.deleteShader(w),r.deleteShader(P),F=new Go(r,_),S=xR(r,_)}let F;this.getUniforms=function(){return F===void 0&&L(this),F};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,cR)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uR++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=P,this}let UR=0;class FR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new OR(e),n.set(e,i)),i}}class OR{constructor(e){this.id=UR++,this.code=e,this.usedTimes=0}}function BR(t,e,n,i,r,s,a){const o=new Bv,l=new FR,c=new Set,u=[],f=new Map,d=r.logarithmicDepthBuffer;let h=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return c.add(S),S===0?"uv":`uv${S}`}function g(S,M,I,U,k){const H=U.fog,$=k.geometry,B=S.isMeshStandardMaterial?U.environment:null,W=(S.isMeshStandardMaterial?n:e).get(S.envMap||B),j=W&&W.mapping===Rl?W.image.height:null,de=v[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&Xe("WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const _e=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=_e!==void 0?_e.length:0;let Oe=0;$.morphAttributes.position!==void 0&&(Oe=1),$.morphAttributes.normal!==void 0&&(Oe=2),$.morphAttributes.color!==void 0&&(Oe=3);let Ge,ut,st,se;if(de){const ht=ci[de];Ge=ht.vertexShader,ut=ht.fragmentShader}else Ge=S.vertexShader,ut=S.fragmentShader,l.update(S),st=l.getVertexShaderID(S),se=l.getFragmentShaderID(S);const O=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),oe=k.isInstancedMesh===!0,ae=k.isBatchedMesh===!0,Pe=!!S.map,je=!!S.matcap,R=!!W,D=!!S.aoMap,G=!!S.lightMap,ee=!!S.bumpMap,ie=!!S.normalMap,C=!!S.displacementMap,he=!!S.emissiveMap,le=!!S.metalnessMap,ce=!!S.roughnessMap,K=S.anisotropy>0,A=S.clearcoat>0,x=S.dispersion>0,N=S.iridescence>0,q=S.sheen>0,te=S.transmission>0,Z=K&&!!S.anisotropyMap,ve=A&&!!S.clearcoatMap,pe=A&&!!S.clearcoatNormalMap,Me=A&&!!S.clearcoatRoughnessMap,Ue=N&&!!S.iridescenceMap,fe=N&&!!S.iridescenceThicknessMap,Se=q&&!!S.sheenColorMap,Ie=q&&!!S.sheenRoughnessMap,we=!!S.specularMap,ge=!!S.specularColorMap,qe=!!S.specularIntensityMap,V=te&&!!S.transmissionMap,Re=te&&!!S.thicknessMap,xe=!!S.gradientMap,Le=!!S.alphaMap,me=S.alphaTest>0,ue=!!S.alphaHash,Ee=!!S.extensions;let $e=hi;S.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&($e=t.toneMapping);const bt={shaderID:de,shaderType:S.type,shaderName:S.name,vertexShader:Ge,fragmentShader:ut,defines:S.defines,customVertexShaderID:st,customFragmentShaderID:se,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:ae,batchingColor:ae&&k._colorsTexture!==null,instancing:oe,instancingColor:oe&&k.instanceColor!==null,instancingMorph:oe&&k.morphTexture!==null,outputColorSpace:O===null?t.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Fs,alphaToCoverage:!!S.alphaToCoverage,map:Pe,matcap:je,envMap:R,envMapMode:R&&W.mapping,envMapCubeUVHeight:j,aoMap:D,lightMap:G,bumpMap:ee,normalMap:ie,displacementMap:C,emissiveMap:he,normalMapObjectSpace:ie&&S.normalMapType===_2,normalMapTangentSpace:ie&&S.normalMapType===Nv,metalnessMap:le,roughnessMap:ce,anisotropy:K,anisotropyMap:Z,clearcoat:A,clearcoatMap:ve,clearcoatNormalMap:pe,clearcoatRoughnessMap:Me,dispersion:x,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:fe,sheen:q,sheenColorMap:Se,sheenRoughnessMap:Ie,specularMap:we,specularColorMap:ge,specularIntensityMap:qe,transmission:te,transmissionMap:V,thicknessMap:Re,gradientMap:xe,opaque:S.transparent===!1&&S.blending===Ts&&S.alphaToCoverage===!1,alphaMap:Le,alphaTest:me,alphaHash:ue,combine:S.combine,mapUv:Pe&&_(S.map.channel),aoMapUv:D&&_(S.aoMap.channel),lightMapUv:G&&_(S.lightMap.channel),bumpMapUv:ee&&_(S.bumpMap.channel),normalMapUv:ie&&_(S.normalMap.channel),displacementMapUv:C&&_(S.displacementMap.channel),emissiveMapUv:he&&_(S.emissiveMap.channel),metalnessMapUv:le&&_(S.metalnessMap.channel),roughnessMapUv:ce&&_(S.roughnessMap.channel),anisotropyMapUv:Z&&_(S.anisotropyMap.channel),clearcoatMapUv:ve&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ie&&_(S.sheenRoughnessMap.channel),specularMapUv:we&&_(S.specularMap.channel),specularColorMapUv:ge&&_(S.specularColorMap.channel),specularIntensityMapUv:qe&&_(S.specularIntensityMap.channel),transmissionMapUv:V&&_(S.transmissionMap.channel),thicknessMapUv:Re&&_(S.thicknessMap.channel),alphaMapUv:Le&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ie||K),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(Pe||Le),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:re,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Oe,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:$e,decodeVideoTexture:Pe&&S.map.isVideoTexture===!0&&at.getTransfer(S.map.colorSpace)===mt,decodeVideoTextureEmissive:he&&S.emissiveMap.isVideoTexture===!0&&at.getTransfer(S.emissiveMap.colorSpace)===mt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ui,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ee&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&S.extensions.multiDraw===!0||ae)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function m(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)M.push(I),M.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(E(M,S),y(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function E(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.instancing&&o.enable(0),M.instancingColor&&o.enable(1),M.instancingMorph&&o.enable(2),M.matcap&&o.enable(3),M.envMap&&o.enable(4),M.normalMapObjectSpace&&o.enable(5),M.normalMapTangentSpace&&o.enable(6),M.clearcoat&&o.enable(7),M.iridescence&&o.enable(8),M.alphaTest&&o.enable(9),M.vertexColors&&o.enable(10),M.vertexAlphas&&o.enable(11),M.vertexUv1s&&o.enable(12),M.vertexUv2s&&o.enable(13),M.vertexUv3s&&o.enable(14),M.vertexTangents&&o.enable(15),M.anisotropy&&o.enable(16),M.alphaHash&&o.enable(17),M.batching&&o.enable(18),M.dispersion&&o.enable(19),M.batchingColor&&o.enable(20),M.gradientMap&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function b(S){const M=v[S.type];let I;if(M){const U=ci[M];I=X2.clone(U.uniforms)}else I=S.uniforms;return I}function w(S,M){let I=f.get(M);return I!==void 0?++I.usedTimes:(I=new NR(t,M,S,s),u.push(I),f.set(M,I)),I}function P(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),f.delete(S.cacheKey),S.destroy()}}function L(S){l.remove(S)}function F(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:b,acquireProgram:w,releaseProgram:P,releaseShaderCache:L,programs:u,dispose:F}}function kR(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function VR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function jp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function qp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,d,h,v,_,g){let m=t[e];return m===void 0?(m={id:f.id,object:f,geometry:d,material:h,groupOrder:v,renderOrder:f.renderOrder,z:_,group:g},t[e]=m):(m.id=f.id,m.object=f,m.geometry=d,m.material=h,m.groupOrder=v,m.renderOrder=f.renderOrder,m.z=_,m.group=g),e++,m}function o(f,d,h,v,_,g){const m=a(f,d,h,v,_,g);h.transmission>0?i.push(m):h.transparent===!0?r.push(m):n.push(m)}function l(f,d,h,v,_,g){const m=a(f,d,h,v,_,g);h.transmission>0?i.unshift(m):h.transparent===!0?r.unshift(m):n.unshift(m)}function c(f,d){n.length>1&&n.sort(f||VR),i.length>1&&i.sort(d||jp),r.length>1&&r.sort(d||jp)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function HR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new qp,t.set(i,[a])):r>=s.length?(a=new qp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function zR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new rt};break;case"SpotLight":n={position:new J,direction:new J,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":n={color:new rt,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function GR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let WR=0;function $R(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function XR(t){const e=new zR,n=GR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Dt,a=new Dt;function o(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,v=0,_=0,g=0,m=0,E=0,y=0,b=0,w=0,P=0,L=0;c.sort($R);for(let S=0,M=c.length;S<M;S++){const I=c[S],U=I.color,k=I.intensity,H=I.distance;let $=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Us?$=I.shadow.map.texture:$=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=U.r*k,f+=U.g*k,d+=U.b*k;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],k);L++}else if(I.isDirectionalLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const W=I.shadow,j=n.get(I);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.directionalShadow[h]=j,i.directionalShadowMap[h]=$,i.directionalShadowMatrix[h]=I.shadow.matrix,E++}i.directional[h]=B,h++}else if(I.isSpotLight){const B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(U).multiplyScalar(k),B.distance=H,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[_]=B;const W=I.shadow;if(I.map&&(i.spotLightMap[w]=I.map,w++,W.updateMatrices(I),I.castShadow&&P++),i.spotLightMatrix[_]=W.matrix,I.castShadow){const j=n.get(I);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,i.spotShadow[_]=j,i.spotShadowMap[_]=$,b++}_++}else if(I.isRectAreaLight){const B=e.get(I);B.color.copy(U).multiplyScalar(k),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[g]=B,g++}else if(I.isPointLight){const B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){const W=I.shadow,j=n.get(I);j.shadowIntensity=W.intensity,j.shadowBias=W.bias,j.shadowNormalBias=W.normalBias,j.shadowRadius=W.radius,j.shadowMapSize=W.mapSize,j.shadowCameraNear=W.camera.near,j.shadowCameraFar=W.camera.far,i.pointShadow[v]=j,i.pointShadowMap[v]=$,i.pointShadowMatrix[v]=I.shadow.matrix,y++}i.point[v]=B,v++}else if(I.isHemisphereLight){const B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(k),B.groundColor.copy(I.groundColor).multiplyScalar(k),i.hemi[m]=B,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==h||F.pointLength!==v||F.spotLength!==_||F.rectAreaLength!==g||F.hemiLength!==m||F.numDirectionalShadows!==E||F.numPointShadows!==y||F.numSpotShadows!==b||F.numSpotMaps!==w||F.numLightProbes!==L)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=g,i.point.length=v,i.hemi.length=m,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=E,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=b+w-P,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,F.directionalLength=h,F.pointLength=v,F.spotLength=_,F.rectAreaLength=g,F.hemiLength=m,F.numDirectionalShadows=E,F.numPointShadows=y,F.numSpotShadows=b,F.numSpotMaps=w,F.numLightProbes=L,i.version=WR++)}function l(c,u){let f=0,d=0,h=0,v=0,_=0;const g=u.matrixWorldInverse;for(let m=0,E=c.length;m<E;m++){const y=c[m];if(y.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),f++}else if(y.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(g),h++}else if(y.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),a.identity(),s.copy(y.matrixWorld),s.premultiply(g),a.extractRotation(s),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:o,setupView:l,state:i}}function Yp(t){const e=new XR(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function a(u){i.push(u)}function o(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function jR(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Yp(t),e.set(r,[o])):s>=a.length?(o=new Yp(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const qR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
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
}`,KR=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],ZR=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],Kp=new Dt,aa=new J,Hc=new J;function JR(t,e,n){let i=new gd;const r=new ct,s=new ct,a=new Ot,o=new aT,l=new oT,c={},u=n.maxTextureSize,f={[vr]:hn,[hn]:vr,[Ui]:Ui},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:qR,fragmentShader:YR}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const v=new Hn;v.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new ti(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bo;let m=this.type;this.render=function(P,L,F){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||P.length===0)return;P.type===Y3&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=Bo);const S=t.getRenderTarget(),M=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),U=t.state;U.setBlending(Oi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const k=m!==this.type;k&&L.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach($=>$.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,$=P.length;H<$;H++){const B=P[H],W=B.shadow;if(W===void 0){Xe("WebGLShadowMap:",B,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const j=W.getFrameExtents();if(r.multiply(j),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,W.mapSize.y=s.y)),W.map===null||k===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===la){if(B.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new pi(r.x,r.y,{format:Us,type:Wi,minFilter:rn,magFilter:rn,generateMipmaps:!1}),W.map.texture.name=B.name+".shadowMap",W.map.depthTexture=new Ca(r.x,r.y,ui),W.map.depthTexture.name=B.name+".shadowMapDepth",W.map.depthTexture.format=$i,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt}else{B.isPointLight?(W.map=new Xv(r.x),W.map.depthTexture=new iT(r.x,vi)):(W.map=new pi(r.x,r.y),W.map.depthTexture=new Ca(r.x,r.y,vi)),W.map.depthTexture.name=B.name+".shadowMap",W.map.depthTexture.format=$i;const _e=t.state.buffers.depth.getReversed();this.type===Bo?(W.map.depthTexture.compareFunction=_e?pd:hd,W.map.depthTexture.minFilter=rn,W.map.depthTexture.magFilter=rn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Zt,W.map.depthTexture.magFilter=Zt)}W.camera.updateProjectionMatrix()}const de=W.map.isWebGLCubeRenderTarget?6:1;for(let _e=0;_e<de;_e++){if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,_e),t.clear();else{_e===0&&(t.setRenderTarget(W.map),t.clear());const be=W.getViewport(_e);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),U.viewport(a)}if(B.isPointLight){const be=W.camera,Oe=W.matrix,Ge=B.distance||be.far;Ge!==be.far&&(be.far=Ge,be.updateProjectionMatrix()),aa.setFromMatrixPosition(B.matrixWorld),be.position.copy(aa),Hc.copy(be.position),Hc.add(KR[_e]),be.up.copy(ZR[_e]),be.lookAt(Hc),be.updateMatrixWorld(),Oe.makeTranslation(-aa.x,-aa.y,-aa.z),Kp.multiplyMatrices(be.projectionMatrix,be.matrixWorldInverse),W._frustum.setFromProjectionMatrix(Kp,be.coordinateSystem,be.reversedDepth)}else W.updateMatrices(B);i=W.getFrustum(),b(L,F,W.camera,B,this.type)}W.isPointLightShadow!==!0&&this.type===la&&E(W,F),W.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(S,M,I)};function E(P,L){const F=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new pi(r.x,r.y,{format:Us,type:Wi})),d.uniforms.shadow_pass.value=P.map.depthTexture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(L,null,F,d,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(L,null,F,h,_,null)}function y(P,L,F,S){let M=null;const I=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(I!==void 0)M=I;else if(M=F.isPointLight===!0?l:o,t.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=M.uuid,k=L.uuid;let H=c[U];H===void 0&&(H={},c[U]=H);let $=H[k];$===void 0&&($=M.clone(),H[k]=$,L.addEventListener("dispose",w)),M=$}if(M.visible=L.visible,M.wireframe=L.wireframe,S===la?M.side=L.shadowSide!==null?L.shadowSide:L.side:M.side=L.shadowSide!==null?L.shadowSide:f[L.side],M.alphaMap=L.alphaMap,M.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,M.map=L.map,M.clipShadows=L.clipShadows,M.clippingPlanes=L.clippingPlanes,M.clipIntersection=L.clipIntersection,M.displacementMap=L.displacementMap,M.displacementScale=L.displacementScale,M.displacementBias=L.displacementBias,M.wireframeLinewidth=L.wireframeLinewidth,M.linewidth=L.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=t.properties.get(M);U.light=F}return M}function b(P,L,F,S,M){if(P.visible===!1)return;if(P.layers.test(L.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===la)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const k=e.update(P),H=P.material;if(Array.isArray(H)){const $=k.groups;for(let B=0,W=$.length;B<W;B++){const j=$[B],de=H[j.materialIndex];if(de&&de.visible){const _e=y(P,de,S,M);P.onBeforeShadow(t,P,L,F,k,_e,j),t.renderBufferDirect(F,null,k,_e,P,j),P.onAfterShadow(t,P,L,F,k,_e,j)}}}else if(H.visible){const $=y(P,H,S,M);P.onBeforeShadow(t,P,L,F,k,$,null),t.renderBufferDirect(F,null,k,$,P,null),P.onAfterShadow(t,P,L,F,k,$,null)}}const U=P.children;for(let k=0,H=U.length;k<H;k++)b(U[k],L,F,S,M)}function w(P){P.target.removeEventListener("dispose",w);for(const F in c){const S=c[F],M=P.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const QR={[vu]:_u,[xu]:bu,[yu]:Eu,[Is]:Su,[_u]:vu,[bu]:xu,[Eu]:yu,[Su]:Is};function e4(t,e){function n(){let V=!1;const Re=new Ot;let xe=null;const Le=new Ot(0,0,0,0);return{setMask:function(me){xe!==me&&!V&&(t.colorMask(me,me,me,me),xe=me)},setLocked:function(me){V=me},setClear:function(me,ue,Ee,$e,bt){bt===!0&&(me*=$e,ue*=$e,Ee*=$e),Re.set(me,ue,Ee,$e),Le.equals(Re)===!1&&(t.clearColor(me,ue,Ee,$e),Le.copy(Re))},reset:function(){V=!1,xe=null,Le.set(-1,0,0,0)}}}function i(){let V=!1,Re=!1,xe=null,Le=null,me=null;return{setReversed:function(ue){if(Re!==ue){const Ee=e.get("EXT_clip_control");ue?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),Re=ue;const $e=me;me=null,this.setClear($e)}},getReversed:function(){return Re},setTest:function(ue){ue?O(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(ue){xe!==ue&&!V&&(t.depthMask(ue),xe=ue)},setFunc:function(ue){if(Re&&(ue=QR[ue]),Le!==ue){switch(ue){case vu:t.depthFunc(t.NEVER);break;case _u:t.depthFunc(t.ALWAYS);break;case xu:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case yu:t.depthFunc(t.EQUAL);break;case Su:t.depthFunc(t.GEQUAL);break;case bu:t.depthFunc(t.GREATER);break;case Eu:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=ue}},setLocked:function(ue){V=ue},setClear:function(ue){me!==ue&&(Re&&(ue=1-ue),t.clearDepth(ue),me=ue)},reset:function(){V=!1,xe=null,Le=null,me=null,Re=!1}}}function r(){let V=!1,Re=null,xe=null,Le=null,me=null,ue=null,Ee=null,$e=null,bt=null;return{setTest:function(ht){V||(ht?O(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(ht){Re!==ht&&!V&&(t.stencilMask(ht),Re=ht)},setFunc:function(ht,ri,bi){(xe!==ht||Le!==ri||me!==bi)&&(t.stencilFunc(ht,ri,bi),xe=ht,Le=ri,me=bi)},setOp:function(ht,ri,bi){(ue!==ht||Ee!==ri||$e!==bi)&&(t.stencilOp(ht,ri,bi),ue=ht,Ee=ri,$e=bi)},setLocked:function(ht){V=ht},setClear:function(ht){bt!==ht&&(t.clearStencil(ht),bt=ht)},reset:function(){V=!1,Re=null,xe=null,Le=null,me=null,ue=null,Ee=null,$e=null,bt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],v=null,_=!1,g=null,m=null,E=null,y=null,b=null,w=null,P=null,L=new rt(0,0,0),F=0,S=!1,M=null,I=null,U=null,k=null,H=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,W=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(j)[1]),B=W>=1):j.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),B=W>=2);let de=null,_e={};const be=t.getParameter(t.SCISSOR_BOX),Oe=t.getParameter(t.VIEWPORT),Ge=new Ot().fromArray(be),ut=new Ot().fromArray(Oe);function st(V,Re,xe,Le){const me=new Uint8Array(4),ue=t.createTexture();t.bindTexture(V,ue),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ee=0;Ee<xe;Ee++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(Re,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(Re+Ee,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ue}const se={};se[t.TEXTURE_2D]=st(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=st(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[t.TEXTURE_2D_ARRAY]=st(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=st(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),O(t.DEPTH_TEST),a.setFunc(Is),ee(!1),ie(Qh),O(t.CULL_FACE),D(Oi);function O(V){u[V]!==!0&&(t.enable(V),u[V]=!0)}function re(V){u[V]!==!1&&(t.disable(V),u[V]=!1)}function oe(V,Re){return f[V]!==Re?(t.bindFramebuffer(V,Re),f[V]=Re,V===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=Re),V===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=Re),!0):!1}function ae(V,Re){let xe=h,Le=!1;if(V){xe=d.get(Re),xe===void 0&&(xe=[],d.set(Re,xe));const me=V.textures;if(xe.length!==me.length||xe[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ee=me.length;ue<Ee;ue++)xe[ue]=t.COLOR_ATTACHMENT0+ue;xe.length=me.length,Le=!0}}else xe[0]!==t.BACK&&(xe[0]=t.BACK,Le=!0);Le&&t.drawBuffers(xe)}function Pe(V){return v!==V?(t.useProgram(V),v=V,!0):!1}const je={[Ur]:t.FUNC_ADD,[Z3]:t.FUNC_SUBTRACT,[J3]:t.FUNC_REVERSE_SUBTRACT};je[Q3]=t.MIN,je[e2]=t.MAX;const R={[t2]:t.ZERO,[n2]:t.ONE,[i2]:t.SRC_COLOR,[mu]:t.SRC_ALPHA,[c2]:t.SRC_ALPHA_SATURATE,[o2]:t.DST_COLOR,[s2]:t.DST_ALPHA,[r2]:t.ONE_MINUS_SRC_COLOR,[gu]:t.ONE_MINUS_SRC_ALPHA,[l2]:t.ONE_MINUS_DST_COLOR,[a2]:t.ONE_MINUS_DST_ALPHA,[u2]:t.CONSTANT_COLOR,[f2]:t.ONE_MINUS_CONSTANT_COLOR,[d2]:t.CONSTANT_ALPHA,[h2]:t.ONE_MINUS_CONSTANT_ALPHA};function D(V,Re,xe,Le,me,ue,Ee,$e,bt,ht){if(V===Oi){_===!0&&(re(t.BLEND),_=!1);return}if(_===!1&&(O(t.BLEND),_=!0),V!==K3){if(V!==g||ht!==S){if((m!==Ur||b!==Ur)&&(t.blendEquation(t.FUNC_ADD),m=Ur,b=Ur),ht)switch(V){case Ts:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case il:t.blendFunc(t.ONE,t.ONE);break;case ep:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case tp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:lt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ts:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case il:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ep:lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tp:lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:lt("WebGLState: Invalid blending: ",V);break}E=null,y=null,w=null,P=null,L.set(0,0,0),F=0,g=V,S=ht}return}me=me||Re,ue=ue||xe,Ee=Ee||Le,(Re!==m||me!==b)&&(t.blendEquationSeparate(je[Re],je[me]),m=Re,b=me),(xe!==E||Le!==y||ue!==w||Ee!==P)&&(t.blendFuncSeparate(R[xe],R[Le],R[ue],R[Ee]),E=xe,y=Le,w=ue,P=Ee),($e.equals(L)===!1||bt!==F)&&(t.blendColor($e.r,$e.g,$e.b,bt),L.copy($e),F=bt),g=V,S=!1}function G(V,Re){V.side===Ui?re(t.CULL_FACE):O(t.CULL_FACE);let xe=V.side===hn;Re&&(xe=!xe),ee(xe),V.blending===Ts&&V.transparent===!1?D(Oi):D(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),s.setMask(V.colorWrite);const Le=V.stencilWrite;o.setTest(Le),Le&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),he(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?O(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function ee(V){M!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),M=V)}function ie(V){V!==j3?(O(t.CULL_FACE),V!==I&&(V===Qh?t.cullFace(t.BACK):V===q3?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),I=V}function C(V){V!==U&&(B&&t.lineWidth(V),U=V)}function he(V,Re,xe){V?(O(t.POLYGON_OFFSET_FILL),(k!==Re||H!==xe)&&(t.polygonOffset(Re,xe),k=Re,H=xe)):re(t.POLYGON_OFFSET_FILL)}function le(V){V?O(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function ce(V){V===void 0&&(V=t.TEXTURE0+$-1),de!==V&&(t.activeTexture(V),de=V)}function K(V,Re,xe){xe===void 0&&(de===null?xe=t.TEXTURE0+$-1:xe=de);let Le=_e[xe];Le===void 0&&(Le={type:void 0,texture:void 0},_e[xe]=Le),(Le.type!==V||Le.texture!==Re)&&(de!==xe&&(t.activeTexture(xe),de=xe),t.bindTexture(V,Re||se[V]),Le.type=V,Le.texture=Re)}function A(){const V=_e[de];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function q(){try{t.texSubImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function te(){try{t.texSubImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function ve(){try{t.compressedTexSubImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function pe(){try{t.texStorage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function Me(){try{t.texStorage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function Ue(){try{t.texImage2D(...arguments)}catch(V){lt("WebGLState:",V)}}function fe(){try{t.texImage3D(...arguments)}catch(V){lt("WebGLState:",V)}}function Se(V){Ge.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Ge.copy(V))}function Ie(V){ut.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),ut.copy(V))}function we(V,Re){let xe=c.get(Re);xe===void 0&&(xe=new WeakMap,c.set(Re,xe));let Le=xe.get(V);Le===void 0&&(Le=t.getUniformBlockIndex(Re,V.name),xe.set(V,Le))}function ge(V,Re){const Le=c.get(Re).get(V);l.get(Re)!==Le&&(t.uniformBlockBinding(Re,Le,V.__bindingPointIndex),l.set(Re,Le))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},de=null,_e={},f={},d=new WeakMap,h=[],v=null,_=!1,g=null,m=null,E=null,y=null,b=null,w=null,P=null,L=new rt(0,0,0),F=0,S=!1,M=null,I=null,U=null,k=null,H=null,Ge.set(0,0,t.canvas.width,t.canvas.height),ut.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:O,disable:re,bindFramebuffer:oe,drawBuffers:ae,useProgram:Pe,setBlending:D,setMaterial:G,setFlipSided:ee,setCullFace:ie,setLineWidth:C,setPolygonOffset:he,setScissorTest:le,activeTexture:ce,bindTexture:K,unbindTexture:A,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Ue,texImage3D:fe,updateUBOMapping:we,uniformBlockBinding:ge,texStorage2D:pe,texStorage3D:Me,texSubImage2D:q,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:ve,scissor:Se,viewport:Ie,reset:qe}}function t4(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ct,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,x){return h?new OffscreenCanvas(A,x):Aa("canvas")}function _(A,x,N){let q=1;const te=K(A);if((te.width>N||te.height>N)&&(q=N/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(q*te.width),ve=Math.floor(q*te.height);f===void 0&&(f=v(Z,ve));const pe=x?v(Z,ve):f;return pe.width=Z,pe.height=ve,pe.getContext("2d").drawImage(A,0,0,Z,ve),Xe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+ve+")."),pe}else return"data"in A&&Xe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){t.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,x,N,q,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=x;if(x===t.RED&&(N===t.FLOAT&&(Z=t.R32F),N===t.HALF_FLOAT&&(Z=t.R16F),N===t.UNSIGNED_BYTE&&(Z=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.R8UI),N===t.UNSIGNED_SHORT&&(Z=t.R16UI),N===t.UNSIGNED_INT&&(Z=t.R32UI),N===t.BYTE&&(Z=t.R8I),N===t.SHORT&&(Z=t.R16I),N===t.INT&&(Z=t.R32I)),x===t.RG&&(N===t.FLOAT&&(Z=t.RG32F),N===t.HALF_FLOAT&&(Z=t.RG16F),N===t.UNSIGNED_BYTE&&(Z=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RG8UI),N===t.UNSIGNED_SHORT&&(Z=t.RG16UI),N===t.UNSIGNED_INT&&(Z=t.RG32UI),N===t.BYTE&&(Z=t.RG8I),N===t.SHORT&&(Z=t.RG16I),N===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),N===t.UNSIGNED_INT&&(Z=t.RGB32UI),N===t.BYTE&&(Z=t.RGB8I),N===t.SHORT&&(Z=t.RGB16I),N===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),N===t.UNSIGNED_INT&&(Z=t.RGBA32UI),N===t.BYTE&&(Z=t.RGBA8I),N===t.SHORT&&(Z=t.RGBA16I),N===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),x===t.RGBA){const ve=te?rl:at.getTransfer(q);N===t.FLOAT&&(Z=t.RGBA32F),N===t.HALF_FLOAT&&(Z=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Z=ve===mt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(A,x){let N;return A?x===null||x===vi||x===Ta?N=t.DEPTH24_STENCIL8:x===ui?N=t.DEPTH32F_STENCIL8:x===Ma&&(N=t.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===vi||x===Ta?N=t.DEPTH_COMPONENT24:x===ui?N=t.DEPTH_COMPONENT32F:x===Ma&&(N=t.DEPTH_COMPONENT16),N}function w(A,x){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==Zt&&A.minFilter!==rn?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function P(A){const x=A.target;x.removeEventListener("dispose",P),F(x),x.isVideoTexture&&u.delete(x)}function L(A){const x=A.target;x.removeEventListener("dispose",L),M(x)}function F(A){const x=i.get(A);if(x.__webglInit===void 0)return;const N=A.source,q=d.get(N);if(q){const te=q[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&S(A),Object.keys(q).length===0&&d.delete(N)}i.remove(A)}function S(A){const x=i.get(A);t.deleteTexture(x.__webglTexture);const N=A.source,q=d.get(N);delete q[x.__cacheKey],a.memory.textures--}function M(A){const x=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(x.__webglFramebuffer[q]))for(let te=0;te<x.__webglFramebuffer[q].length;te++)t.deleteFramebuffer(x.__webglFramebuffer[q][te]);else t.deleteFramebuffer(x.__webglFramebuffer[q]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[q])}else{if(Array.isArray(x.__webglFramebuffer))for(let q=0;q<x.__webglFramebuffer.length;q++)t.deleteFramebuffer(x.__webglFramebuffer[q]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let q=0;q<x.__webglColorRenderbuffer.length;q++)x.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[q]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=A.textures;for(let q=0,te=N.length;q<te;q++){const Z=i.get(N[q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(N[q])}i.remove(A)}let I=0;function U(){I=0}function k(){const A=I;return A>=r.maxTextures&&Xe("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),I+=1,A}function H(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function $(A,x){const N=i.get(A);if(A.isVideoTexture&&le(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&N.__version!==A.version){const q=A.image;if(q===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{se(N,A,x);return}}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function B(A,x){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){se(N,A,x);return}else A.isExternalTexture&&(N.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function W(A,x){const N=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&N.__version!==A.version){se(N,A,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function j(A,x){const N=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&N.__version!==A.version){O(N,A,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const de={[Au]:t.REPEAT,[Fi]:t.CLAMP_TO_EDGE,[wu]:t.MIRRORED_REPEAT},_e={[Zt]:t.NEAREST,[g2]:t.NEAREST_MIPMAP_NEAREST,[co]:t.NEAREST_MIPMAP_LINEAR,[rn]:t.LINEAR,[cc]:t.LINEAR_MIPMAP_NEAREST,[kr]:t.LINEAR_MIPMAP_LINEAR},be={[x2]:t.NEVER,[M2]:t.ALWAYS,[y2]:t.LESS,[hd]:t.LEQUAL,[S2]:t.EQUAL,[pd]:t.GEQUAL,[b2]:t.GREATER,[E2]:t.NOTEQUAL};function Oe(A,x){if(x.type===ui&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===rn||x.magFilter===cc||x.magFilter===co||x.magFilter===kr||x.minFilter===rn||x.minFilter===cc||x.minFilter===co||x.minFilter===kr)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,de[x.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,de[x.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,de[x.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,_e[x.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,_e[x.minFilter]),x.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,be[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Zt||x.minFilter!==co&&x.minFilter!==kr||x.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ge(A,x){let N=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",P));const q=x.source;let te=d.get(q);te===void 0&&(te={},d.set(q,te));const Z=H(x);if(Z!==A.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,N=!0),te[Z].usedTimes++;const ve=te[A.__cacheKey];ve!==void 0&&(te[A.__cacheKey].usedTimes--,ve.usedTimes===0&&S(x)),A.__cacheKey=Z,A.__webglTexture=te[Z].texture}return N}function ut(A,x,N){return Math.floor(Math.floor(A/N)/x)}function st(A,x,N,q){const Z=A.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,q,x.data);else{Z.sort((fe,Se)=>fe.start-Se.start);let ve=0;for(let fe=1;fe<Z.length;fe++){const Se=Z[ve],Ie=Z[fe],we=Se.start+Se.count,ge=ut(Ie.start,x.width,4),qe=ut(Se.start,x.width,4);Ie.start<=we+1&&ge===qe&&ut(Ie.start+Ie.count-1,x.width,4)===ge?Se.count=Math.max(Se.count,Ie.start+Ie.count-Se.start):(++ve,Z[ve]=Ie)}Z.length=ve+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),Me=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let fe=0,Se=Z.length;fe<Se;fe++){const Ie=Z[fe],we=Math.floor(Ie.start/4),ge=Math.ceil(Ie.count/4),qe=we%x.width,V=Math.floor(we/x.width),Re=ge,xe=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,V),n.texSubImage2D(t.TEXTURE_2D,0,qe,V,Re,xe,N,q,x.data)}A.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Me),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function se(A,x,N){let q=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(q=t.TEXTURE_3D);const te=Ge(A,x),Z=x.source;n.bindTexture(q,A.__webglTexture,t.TEXTURE0+N);const ve=i.get(Z);if(Z.version!==ve.__version||te===!0){n.activeTexture(t.TEXTURE0+N);const pe=at.getPrimaries(at.workingColorSpace),Me=x.colorSpace===fr?null:at.getPrimaries(x.colorSpace),Ue=x.colorSpace===fr||pe===Me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let fe=_(x.image,!1,r.maxTextureSize);fe=ce(x,fe);const Se=s.convert(x.format,x.colorSpace),Ie=s.convert(x.type);let we=y(x.internalFormat,Se,Ie,x.colorSpace,x.isVideoTexture);Oe(q,x);let ge;const qe=x.mipmaps,V=x.isVideoTexture!==!0,Re=ve.__version===void 0||te===!0,xe=Z.dataReady,Le=w(x,fe);if(x.isDepthTexture)we=b(x.format===Vr,x.type),Re&&(V?n.texStorage2D(t.TEXTURE_2D,1,we,fe.width,fe.height):n.texImage2D(t.TEXTURE_2D,0,we,fe.width,fe.height,0,Se,Ie,null));else if(x.isDataTexture)if(qe.length>0){V&&Re&&n.texStorage2D(t.TEXTURE_2D,Le,we,qe[0].width,qe[0].height);for(let me=0,ue=qe.length;me<ue;me++)ge=qe[me],V?xe&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,ge.width,ge.height,Se,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,me,we,ge.width,ge.height,0,Se,Ie,ge.data);x.generateMipmaps=!1}else V?(Re&&n.texStorage2D(t.TEXTURE_2D,Le,we,fe.width,fe.height),xe&&st(x,fe,Se,Ie)):n.texImage2D(t.TEXTURE_2D,0,we,fe.width,fe.height,0,Se,Ie,fe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){V&&Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,we,qe[0].width,qe[0].height,fe.depth);for(let me=0,ue=qe.length;me<ue;me++)if(ge=qe[me],x.format!==jn)if(Se!==null)if(V){if(xe)if(x.layerUpdates.size>0){const Ee=wp(ge.width,ge.height,x.format,x.type);for(const $e of x.layerUpdates){const bt=ge.data.subarray($e*Ee/ge.data.BYTES_PER_ELEMENT,($e+1)*Ee/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,$e,ge.width,ge.height,1,Se,bt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,ge.width,ge.height,fe.depth,Se,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,me,we,ge.width,ge.height,fe.depth,0,ge.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,me,0,0,0,ge.width,ge.height,fe.depth,Se,Ie,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,me,we,ge.width,ge.height,fe.depth,0,Se,Ie,ge.data)}else{V&&Re&&n.texStorage2D(t.TEXTURE_2D,Le,we,qe[0].width,qe[0].height);for(let me=0,ue=qe.length;me<ue;me++)ge=qe[me],x.format!==jn?Se!==null?V?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,me,0,0,ge.width,ge.height,Se,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,me,we,ge.width,ge.height,0,ge.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?xe&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,ge.width,ge.height,Se,Ie,ge.data):n.texImage2D(t.TEXTURE_2D,me,we,ge.width,ge.height,0,Se,Ie,ge.data)}else if(x.isDataArrayTexture)if(V){if(Re&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,we,fe.width,fe.height,fe.depth),xe)if(x.layerUpdates.size>0){const me=wp(fe.width,fe.height,x.format,x.type);for(const ue of x.layerUpdates){const Ee=fe.data.subarray(ue*me/fe.data.BYTES_PER_ELEMENT,(ue+1)*me/fe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,fe.width,fe.height,1,Se,Ie,Ee)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ie,fe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,we,fe.width,fe.height,fe.depth,0,Se,Ie,fe.data);else if(x.isData3DTexture)V?(Re&&n.texStorage3D(t.TEXTURE_3D,Le,we,fe.width,fe.height,fe.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ie,fe.data)):n.texImage3D(t.TEXTURE_3D,0,we,fe.width,fe.height,fe.depth,0,Se,Ie,fe.data);else if(x.isFramebufferTexture){if(Re)if(V)n.texStorage2D(t.TEXTURE_2D,Le,we,fe.width,fe.height);else{let me=fe.width,ue=fe.height;for(let Ee=0;Ee<Le;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,we,me,ue,0,Se,Ie,null),me>>=1,ue>>=1}}else if(qe.length>0){if(V&&Re){const me=K(qe[0]);n.texStorage2D(t.TEXTURE_2D,Le,we,me.width,me.height)}for(let me=0,ue=qe.length;me<ue;me++)ge=qe[me],V?xe&&n.texSubImage2D(t.TEXTURE_2D,me,0,0,Se,Ie,ge):n.texImage2D(t.TEXTURE_2D,me,we,Se,Ie,ge);x.generateMipmaps=!1}else if(V){if(Re){const me=K(fe);n.texStorage2D(t.TEXTURE_2D,Le,we,me.width,me.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Ie,fe)}else n.texImage2D(t.TEXTURE_2D,0,we,Se,Ie,fe);g(x)&&m(q),ve.__version=Z.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function O(A,x,N){if(x.image.length!==6)return;const q=Ge(A,x),te=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+N);const Z=i.get(te);if(te.version!==Z.__version||q===!0){n.activeTexture(t.TEXTURE0+N);const ve=at.getPrimaries(at.workingColorSpace),pe=x.colorSpace===fr?null:at.getPrimaries(x.colorSpace),Me=x.colorSpace===fr||ve===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ue=x.isCompressedTexture||x.image[0].isCompressedTexture,fe=x.image[0]&&x.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!Ue&&!fe?Se[ue]=_(x.image[ue],!0,r.maxCubemapSize):Se[ue]=fe?x.image[ue].image:x.image[ue],Se[ue]=ce(x,Se[ue]);const Ie=Se[0],we=s.convert(x.format,x.colorSpace),ge=s.convert(x.type),qe=y(x.internalFormat,we,ge,x.colorSpace),V=x.isVideoTexture!==!0,Re=Z.__version===void 0||q===!0,xe=te.dataReady;let Le=w(x,Ie);Oe(t.TEXTURE_CUBE_MAP,x);let me;if(Ue){V&&Re&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,qe,Ie.width,Ie.height);for(let ue=0;ue<6;ue++){me=Se[ue].mipmaps;for(let Ee=0;Ee<me.length;Ee++){const $e=me[Ee];x.format!==jn?we!==null?V?xe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,$e.width,$e.height,we,$e.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,qe,$e.width,$e.height,0,$e.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,0,0,$e.width,$e.height,we,ge,$e.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee,qe,$e.width,$e.height,0,we,ge,$e.data)}}}else{if(me=x.mipmaps,V&&Re){me.length>0&&Le++;const ue=K(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(fe){V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,we,ge,Se[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Se[ue].width,Se[ue].height,0,we,ge,Se[ue].data);for(let Ee=0;Ee<me.length;Ee++){const bt=me[Ee].image[ue].image;V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,bt.width,bt.height,we,ge,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,qe,bt.width,bt.height,0,we,ge,bt.data)}}else{V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,we,ge,Se[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,we,ge,Se[ue]);for(let Ee=0;Ee<me.length;Ee++){const $e=me[Ee];V?xe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,0,0,we,ge,$e.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ee+1,qe,we,ge,$e.image[ue])}}}g(x)&&m(t.TEXTURE_CUBE_MAP),Z.__version=te.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function re(A,x,N,q,te,Z){const ve=s.convert(N.format,N.colorSpace),pe=s.convert(N.type),Me=y(N.internalFormat,ve,pe,N.colorSpace),Ue=i.get(x),fe=i.get(N);if(fe.__renderTarget=x,!Ue.__hasExternalTextures){const Se=Math.max(1,x.width>>Z),Ie=Math.max(1,x.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,Me,Se,Ie,x.depth,0,ve,pe,null):n.texImage2D(te,Z,Me,Se,Ie,0,ve,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),he(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,fe.__webglTexture,0,C(x)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,fe.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(A,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,A),x.depthBuffer){const q=x.depthTexture,te=q&&q.isDepthTexture?q.type:null,Z=b(x.stencilBuffer,te),ve=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;he(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(x),Z,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(x),Z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ve,t.RENDERBUFFER,A)}else{const q=x.textures;for(let te=0;te<q.length;te++){const Z=q[te],ve=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),Me=y(Z.internalFormat,ve,pe,Z.colorSpace);he(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,C(x),Me,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,C(x),Me,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Me,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ae(A,x,N){const q=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(x.depthTexture);if(te.__renderTarget=x,(!te.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),q){if(te.__webglInit===void 0&&(te.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,x.depthTexture);const Ue=s.convert(x.depthTexture.format),fe=s.convert(x.depthTexture.type);let Se;x.depthTexture.format===$i?Se=t.DEPTH_COMPONENT24:x.depthTexture.format===Vr&&(Se=t.DEPTH24_STENCIL8);for(let Ie=0;Ie<6;Ie++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ie,0,Se,x.width,x.height,0,Ue,fe,null)}}else $(x.depthTexture,0);const Z=te.__webglTexture,ve=C(x),pe=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Me=x.depthTexture.format===Vr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===$i)he(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,pe,Z,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Me,pe,Z,0);else if(x.depthTexture.format===Vr)he(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Me,pe,Z,0,ve):t.framebufferTexture2D(t.FRAMEBUFFER,Me,pe,Z,0);else throw new Error("Unknown depthTexture format")}function Pe(A){const x=i.get(A),N=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const q=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),q){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=q}if(A.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)ae(x.__webglFramebuffer[q],A,q);else{const q=A.texture.mipmaps;q&&q.length>0?ae(x.__webglFramebuffer[0],A,0):ae(x.__webglFramebuffer,A,0)}else if(N){x.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[q]),x.__webglDepthbuffer[q]===void 0)x.__webglDepthbuffer[q]=t.createRenderbuffer(),oe(x.__webglDepthbuffer[q],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else{const q=A.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),oe(x.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function je(A,x,N){const q=i.get(A);x!==void 0&&re(q.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Pe(A)}function R(A){const x=A.texture,N=i.get(A),q=i.get(x);A.addEventListener("dispose",L);const te=A.textures,Z=A.isWebGLCubeRenderTarget===!0,ve=te.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=x.version,a.memory.textures++),Z){N.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[pe]=[];for(let Me=0;Me<x.mipmaps.length;Me++)N.__webglFramebuffer[pe][Me]=t.createFramebuffer()}else N.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let pe=0;pe<x.mipmaps.length;pe++)N.__webglFramebuffer[pe]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(ve)for(let pe=0,Me=te.length;pe<Me;pe++){const Ue=i.get(te[pe]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&he(A)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let pe=0;pe<te.length;pe++){const Me=te[pe];N.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[pe]);const Ue=s.convert(Me.format,Me.colorSpace),fe=s.convert(Me.type),Se=y(Me.internalFormat,Ue,fe,Me.colorSpace,A.isXRRenderTarget===!0),Ie=C(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie,Se,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,N.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(N.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Oe(t.TEXTURE_CUBE_MAP,x);for(let pe=0;pe<6;pe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)re(N.__webglFramebuffer[pe][Me],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Me);else re(N.__webglFramebuffer[pe],A,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);g(x)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ve){for(let pe=0,Me=te.length;pe<Me;pe++){const Ue=te[pe],fe=i.get(Ue);let Se=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Se=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,fe.__webglTexture),Oe(Se,Ue),re(N.__webglFramebuffer,A,Ue,t.COLOR_ATTACHMENT0+pe,Se,0),g(Ue)&&m(Se)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,q.__webglTexture),Oe(pe,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)re(N.__webglFramebuffer[Me],A,x,t.COLOR_ATTACHMENT0,pe,Me);else re(N.__webglFramebuffer,A,x,t.COLOR_ATTACHMENT0,pe,0);g(x)&&m(pe),n.unbindTexture()}A.depthBuffer&&Pe(A)}function D(A){const x=A.textures;for(let N=0,q=x.length;N<q;N++){const te=x[N];if(g(te)){const Z=E(A),ve=i.get(te).__webglTexture;n.bindTexture(Z,ve),m(Z),n.unbindTexture()}}}const G=[],ee=[];function ie(A){if(A.samples>0){if(he(A)===!1){const x=A.textures,N=A.width,q=A.height;let te=t.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ve=i.get(A),pe=x.length>1;if(pe)for(let Ue=0;Ue<x.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer);const Me=A.texture.mipmaps;Me&&Me.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let Ue=0;Ue<x.length;Ue++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const fe=i.get(x[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,fe,0)}t.blitFramebuffer(0,0,N,q,0,0,N,q,te,t.NEAREST),l===!0&&(G.length=0,ee.length=0,G.push(t.COLOR_ATTACHMENT0+Ue),A.depthBuffer&&A.resolveDepthBuffer===!1&&(G.push(Z),ee.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ee)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,G))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let Ue=0;Ue<x.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,ve.__webglColorRenderbuffer[Ue]);const fe=i.get(x[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ve.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,fe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const x=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function C(A){return Math.min(r.maxSamples,A.samples)}function he(A){const x=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(A){const x=a.render.frame;u.get(A)!==x&&(u.set(A,x),A.update())}function ce(A,x){const N=A.colorSpace,q=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||N!==Fs&&N!==fr&&(at.getTransfer(N)===mt?(q!==jn||te!==Tn)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):lt("WebGLTextures: Unsupported texture color space:",N)),x}function K(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=j,this.rebindTextures=je,this.setupRenderTarget=R,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=re,this.useMultisampledRTT=he,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function n4(t,e){function n(i,r=fr){let s;const a=at.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===ld)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Rv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Pv)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===wv)return t.BYTE;if(i===Cv)return t.SHORT;if(i===Ma)return t.UNSIGNED_SHORT;if(i===od)return t.INT;if(i===vi)return t.UNSIGNED_INT;if(i===ui)return t.FLOAT;if(i===Wi)return t.HALF_FLOAT;if(i===Lv)return t.ALPHA;if(i===Dv)return t.RGB;if(i===jn)return t.RGBA;if(i===$i)return t.DEPTH_COMPONENT;if(i===Vr)return t.DEPTH_STENCIL;if(i===Iv)return t.RED;if(i===ud)return t.RED_INTEGER;if(i===Us)return t.RG;if(i===fd)return t.RG_INTEGER;if(i===dd)return t.RGBA_INTEGER;if(i===ko||i===Vo||i===Ho||i===zo)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cu||i===Ru||i===Pu||i===Lu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ru)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Lu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Du||i===Iu||i===Nu||i===Uu||i===Fu||i===Ou||i===Bu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Du||i===Iu)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Uu)return s.COMPRESSED_R11_EAC;if(i===Fu)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Ou)return s.COMPRESSED_RG11_EAC;if(i===Bu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ku||i===Vu||i===Hu||i===zu||i===Gu||i===Wu||i===$u||i===Xu||i===ju||i===qu||i===Yu||i===Ku||i===Zu||i===Ju)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ku)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Hu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Wu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$u)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Xu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ju)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Yu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ku)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Zu)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ju)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qu||i===ef||i===tf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Qu)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ef)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===tf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===nf||i===rf||i===sf||i===af)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===nf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===rf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===af)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ta?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const i4=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,r4=`
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

}`;class s4{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new qv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ni({vertexShader:i4,fragmentShader:r4,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ti(new Ll(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class a4 extends js{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,v=null;const _=typeof XRWebGLBinding<"u",g=new s4,m={},E=n.getContextAttributes();let y=null,b=null;const w=[],P=[],L=new ct;let F=null;const S=new On;S.viewport=new Ot;const M=new On;M.viewport=new Ot;const I=[S,M],U=new gT;let k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let O=w[se];return O===void 0&&(O=new Dc,w[se]=O),O.getTargetRaySpace()},this.getControllerGrip=function(se){let O=w[se];return O===void 0&&(O=new Dc,w[se]=O),O.getGripSpace()},this.getHand=function(se){let O=w[se];return O===void 0&&(O=new Dc,w[se]=O),O.getHandSpace()};function $(se){const O=P.indexOf(se.inputSource);if(O===-1)return;const re=w[O];re!==void 0&&(re.update(se.inputSource,se.frame,c||a),re.dispatchEvent({type:se.type,data:se.inputSource}))}function B(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",W);for(let se=0;se<w.length;se++){const O=P[se];O!==null&&(P[se]=null,w[se].disconnect(O))}k=null,H=null,g.reset();for(const se in m)delete m[se];e.setRenderTarget(y),h=null,d=null,f=null,r=null,b=null,st.stop(),i.isPresenting=!1,e.setPixelRatio(F),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",B),r.addEventListener("inputsourceschange",W),E.xrCompatible!==!0&&await n.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(L),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,oe=null,ae=null;E.depth&&(ae=E.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=E.stencil?Vr:$i,oe=E.stencil?Ta:vi);const Pe={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Pe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new pi(d.textureWidth,d.textureHeight,{format:jn,type:Tn,depthTexture:new Ca(d.textureWidth,d.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new pi(h.framebufferWidth,h.framebufferHeight,{format:jn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),st.setContext(r),st.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function W(se){for(let O=0;O<se.removed.length;O++){const re=se.removed[O],oe=P.indexOf(re);oe>=0&&(P[oe]=null,w[oe].disconnect(re))}for(let O=0;O<se.added.length;O++){const re=se.added[O];let oe=P.indexOf(re);if(oe===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=P.length){P.push(re),oe=Pe;break}else if(P[Pe]===null){P[Pe]=re,oe=Pe;break}if(oe===-1)break}const ae=w[oe];ae&&ae.connect(re)}}const j=new J,de=new J;function _e(se,O,re){j.setFromMatrixPosition(O.matrixWorld),de.setFromMatrixPosition(re.matrixWorld);const oe=j.distanceTo(de),ae=O.projectionMatrix.elements,Pe=re.projectionMatrix.elements,je=ae[14]/(ae[10]-1),R=ae[14]/(ae[10]+1),D=(ae[9]+1)/ae[5],G=(ae[9]-1)/ae[5],ee=(ae[8]-1)/ae[0],ie=(Pe[8]+1)/Pe[0],C=je*ee,he=je*ie,le=oe/(-ee+ie),ce=le*-ee;if(O.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(ce),se.translateZ(le),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),ae[10]===-1)se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse);else{const K=je+le,A=R+le,x=C-ce,N=he+(oe-ce),q=D*R/A*K,te=G*R/A*K;se.projectionMatrix.makePerspective(x,N,q,te,K,A),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function be(se,O){O===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(O.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let O=se.near,re=se.far;g.texture!==null&&(g.depthNear>0&&(O=g.depthNear),g.depthFar>0&&(re=g.depthFar)),U.near=M.near=S.near=O,U.far=M.far=S.far=re,(k!==U.near||H!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),k=U.near,H=U.far),U.layers.mask=se.layers.mask|6,S.layers.mask=U.layers.mask&3,M.layers.mask=U.layers.mask&5;const oe=se.parent,ae=U.cameras;be(U,oe);for(let Pe=0;Pe<ae.length;Pe++)be(ae[Pe],oe);ae.length===2?_e(U,S,M):U.projectionMatrix.copy(S.projectionMatrix),Oe(se,U,oe)};function Oe(se,O,re){re===null?se.matrix.copy(O.matrixWorld):(se.matrix.copy(re.matrixWorld),se.matrix.invert(),se.matrix.multiply(O.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(O.projectionMatrix),se.projectionMatrixInverse.copy(O.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=of*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(U)},this.getCameraTexture=function(se){return m[se]};let Ge=null;function ut(se,O){if(u=O.getViewerPose(c||a),v=O,u!==null){const re=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let oe=!1;re.length!==U.cameras.length&&(U.cameras.length=0,oe=!0);for(let R=0;R<re.length;R++){const D=re[R];let G=null;if(h!==null)G=h.getViewport(D);else{const ie=f.getViewSubImage(d,D);G=ie.viewport,R===0&&(e.setRenderTargetTextures(b,ie.colorTexture,ie.depthStencilTexture),e.setRenderTarget(b))}let ee=I[R];ee===void 0&&(ee=new On,ee.layers.enable(R),ee.viewport=new Ot,I[R]=ee),ee.matrix.fromArray(D.transform.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.projectionMatrix.fromArray(D.projectionMatrix),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert(),ee.viewport.set(G.x,G.y,G.width,G.height),R===0&&(U.matrix.copy(ee.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),oe===!0&&U.cameras.push(ee)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const R=f.getDepthInformation(re[0]);R&&R.isValid&&R.texture&&g.init(R,r.renderState)}if(ae&&ae.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let R=0;R<re.length;R++){const D=re[R].camera;if(D){let G=m[D];G||(G=new qv,m[D]=G);const ee=f.getCameraImage(D);G.sourceTexture=ee}}}}for(let re=0;re<w.length;re++){const oe=P[re],ae=w[re];oe!==null&&ae!==void 0&&ae.update(oe,O,c||a)}Ge&&Ge(se,O),O.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:O}),v=null}const st=new Kv;st.setAnimationLoop(ut),this.setAnimationLoop=function(se){Ge=se},this.dispose=function(){}}}const Lr=new _i,o4=new Dt;function l4(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Gv(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,E,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),f(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&h(g,m,b)):m.isMeshMatcapMaterial?(s(g,m),v(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),_(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,E,y):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===hn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===hn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const E=e.get(m),y=E.envMap,b=E.envMapRotation;y&&(g.envMap.value=y,Lr.copy(b),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),g.envMapRotation.value.setFromMatrix4(o4.makeRotationFromEuler(Lr)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,E,y){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*E,g.scale.value=y*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function f(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function h(g,m,E){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===hn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=E.texture,g.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,m){m.matcap&&(g.matcap.value=m.matcap)}function _(g,m){const E=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(E.matrixWorld),g.nearDistance.value=E.shadow.camera.near,g.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function c4(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const b=y.program;i.uniformBlockBinding(E,b)}function c(E,y){let b=r[E.id];b===void 0&&(v(E),b=u(E),r[E.id]=b,E.addEventListener("dispose",g));const w=y.program;i.updateUBOMapping(E,w);const P=e.render.frame;s[E.id]!==P&&(d(E),s[E.id]=P)}function u(E){const y=f();E.__bindingPointIndex=y;const b=t.createBuffer(),w=E.__size,P=E.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,w,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,b),b}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=r[E.id],b=E.uniforms,w=E.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let P=0,L=b.length;P<L;P++){const F=Array.isArray(b[P])?b[P]:[b[P]];for(let S=0,M=F.length;S<M;S++){const I=F[S];if(h(I,P,S,w)===!0){const U=I.__offset,k=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let $=0;$<k.length;$++){const B=k[$],W=_(B);typeof B=="number"||typeof B=="boolean"?(I.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,U+H,I.__data)):B.isMatrix3?(I.__data[0]=B.elements[0],I.__data[1]=B.elements[1],I.__data[2]=B.elements[2],I.__data[3]=0,I.__data[4]=B.elements[3],I.__data[5]=B.elements[4],I.__data[6]=B.elements[5],I.__data[7]=0,I.__data[8]=B.elements[6],I.__data[9]=B.elements[7],I.__data[10]=B.elements[8],I.__data[11]=0):(B.toArray(I.__data,H),H+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,U,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(E,y,b,w){const P=E.value,L=y+"_"+b;if(w[L]===void 0)return typeof P=="number"||typeof P=="boolean"?w[L]=P:w[L]=P.clone(),!0;{const F=w[L];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return w[L]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function v(E){const y=E.uniforms;let b=0;const w=16;for(let L=0,F=y.length;L<F;L++){const S=Array.isArray(y[L])?y[L]:[y[L]];for(let M=0,I=S.length;M<I;M++){const U=S[M],k=Array.isArray(U.value)?U.value:[U.value];for(let H=0,$=k.length;H<$;H++){const B=k[H],W=_(B),j=b%w,de=j%W.boundary,_e=j+de;b+=de,_e!==0&&w-_e<W.storage&&(b+=w-_e),U.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=b,b+=W.storage}}}const P=b%w;return P>0&&(b+=w-P),E.__size=b,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",E),y}function g(E){const y=E.target;y.removeEventListener("dispose",g);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function m(){for(const E in r)t.deleteBuffer(r[E]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}const u4=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let si=null;function f4(){return si===null&&(si=new J2(u4,16,16,Us,Wi),si.name="DFG_LUT",si.minFilter=rn,si.magFilter=rn,si.wrapS=Fi,si.wrapT=Fi,si.generateMipmaps=!1,si.needsUpdate=!0),si}class d4{constructor(e={}){const{canvas:n=T2(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Tn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const _=h,g=new Set([dd,fd,ud]),m=new Set([Tn,vi,Ma,Ta,ld,cd]),E=new Uint32Array(4),y=new Int32Array(4);let b=null,w=null;const P=[],L=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let M=!1;this._outputColorSpace=Un;let I=0,U=0,k=null,H=-1,$=null;const B=new Ot,W=new Ot;let j=null;const de=new rt(0);let _e=0,be=n.width,Oe=n.height,Ge=1,ut=null,st=null;const se=new Ot(0,0,be,Oe),O=new Ot(0,0,be,Oe);let re=!1;const oe=new gd;let ae=!1,Pe=!1;const je=new Dt,R=new J,D=new Ot,G={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ee=!1;function ie(){return k===null?Ge:1}let C=i;function he(T,z){return n.getContext(T,z)}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sd}`),n.addEventListener("webglcontextlost",$e,!1),n.addEventListener("webglcontextrestored",bt,!1),n.addEventListener("webglcontextcreationerror",ht,!1),C===null){const z="webgl2";if(C=he(z,T),C===null)throw he(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw lt("WebGLRenderer: "+T.message),T}let le,ce,K,A,x,N,q,te,Z,ve,pe,Me,Ue,fe,Se,Ie,we,ge,qe,V,Re,xe,Le,me;function ue(){le=new fC(C),le.init(),xe=new n4(C,le),ce=new nC(C,le,e,xe),K=new e4(C,le),ce.reversedDepthBuffer&&d&&K.buffers.depth.setReversed(!0),A=new pC(C),x=new kR,N=new t4(C,le,K,x,ce,xe,A),q=new rC(S),te=new uC(S),Z=new _T(C),Le=new eC(C,Z),ve=new dC(C,Z,A,Le),pe=new gC(C,ve,Z,A),qe=new mC(C,ce,N),Ie=new iC(x),Me=new BR(S,q,te,le,ce,Le,Ie),Ue=new l4(S,x),fe=new HR,Se=new jR(le),ge=new Qw(S,q,te,K,pe,v,l),we=new JR(S,pe,ce),me=new c4(C,A,ce,K),V=new tC(C,le,A),Re=new hC(C,le,A),A.programs=Me.programs,S.capabilities=ce,S.extensions=le,S.properties=x,S.renderLists=fe,S.shadowMap=we,S.state=K,S.info=A}ue(),_!==Tn&&(F=new _C(_,n.width,n.height,r,s));const Ee=new a4(S,C);this.xr=Ee,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const T=le.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=le.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return Ge},this.setPixelRatio=function(T){T!==void 0&&(Ge=T,this.setSize(be,Oe,!1))},this.getSize=function(T){return T.set(be,Oe)},this.setSize=function(T,z,ne=!0){if(Ee.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}be=T,Oe=z,n.width=Math.floor(T*Ge),n.height=Math.floor(z*Ge),ne===!0&&(n.style.width=T+"px",n.style.height=z+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,T,z)},this.getDrawingBufferSize=function(T){return T.set(be*Ge,Oe*Ge).floor()},this.setDrawingBufferSize=function(T,z,ne){be=T,Oe=z,Ge=ne,n.width=Math.floor(T*ne),n.height=Math.floor(z*ne),this.setViewport(0,0,T,z)},this.setEffects=function(T){if(_===Tn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let z=0;z<T.length;z++)if(T[z].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(B)},this.getViewport=function(T){return T.copy(se)},this.setViewport=function(T,z,ne,Q){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,z,ne,Q),K.viewport(B.copy(se).multiplyScalar(Ge).round())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,z,ne,Q){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,z,ne,Q),K.scissor(W.copy(O).multiplyScalar(Ge).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(T){K.setScissorTest(re=T)},this.setOpaqueSort=function(T){ut=T},this.setTransparentSort=function(T){st=T},this.getClearColor=function(T){return T.copy(ge.getClearColor())},this.setClearColor=function(){ge.setClearColor(...arguments)},this.getClearAlpha=function(){return ge.getClearAlpha()},this.setClearAlpha=function(){ge.setClearAlpha(...arguments)},this.clear=function(T=!0,z=!0,ne=!0){let Q=0;if(T){let Y=!1;if(k!==null){const Te=k.texture.format;Y=g.has(Te)}if(Y){const Te=k.texture.type,De=m.has(Te),Ce=ge.getClearColor(),Ne=ge.getClearAlpha(),Fe=Ce.r,He=Ce.g,Be=Ce.b;De?(E[0]=Fe,E[1]=He,E[2]=Be,E[3]=Ne,C.clearBufferuiv(C.COLOR,0,E)):(y[0]=Fe,y[1]=He,y[2]=Be,y[3]=Ne,C.clearBufferiv(C.COLOR,0,y))}else Q|=C.COLOR_BUFFER_BIT}z&&(Q|=C.DEPTH_BUFFER_BIT),ne&&(Q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",$e,!1),n.removeEventListener("webglcontextrestored",bt,!1),n.removeEventListener("webglcontextcreationerror",ht,!1),ge.dispose(),fe.dispose(),Se.dispose(),x.dispose(),q.dispose(),te.dispose(),pe.dispose(),Le.dispose(),me.dispose(),Me.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",yd),Ee.removeEventListener("sessionend",Sd),Sr.stop()};function $e(T){T.preventDefault(),ap("WebGLRenderer: Context Lost."),M=!0}function bt(){ap("WebGLRenderer: Context Restored."),M=!1;const T=A.autoReset,z=we.enabled,ne=we.autoUpdate,Q=we.needsUpdate,Y=we.type;ue(),A.autoReset=T,we.enabled=z,we.autoUpdate=ne,we.needsUpdate=Q,we.type=Y}function ht(T){lt("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ri(T){const z=T.target;z.removeEventListener("dispose",ri),bi(z)}function bi(T){n_(T),x.remove(T)}function n_(T){const z=x.get(T).programs;z!==void 0&&(z.forEach(function(ne){Me.releaseProgram(ne)}),T.isShaderMaterial&&Me.releaseShaderCache(T))}this.renderBufferDirect=function(T,z,ne,Q,Y,Te){z===null&&(z=G);const De=Y.isMesh&&Y.matrixWorld.determinant()<0,Ce=r_(T,z,ne,Q,Y);K.setMaterial(Q,De);let Ne=ne.index,Fe=1;if(Q.wireframe===!0){if(Ne=ve.getWireframeAttribute(ne),Ne===void 0)return;Fe=2}const He=ne.drawRange,Be=ne.attributes.position;let Qe=He.start*Fe,gt=(He.start+He.count)*Fe;Te!==null&&(Qe=Math.max(Qe,Te.start*Fe),gt=Math.min(gt,(Te.start+Te.count)*Fe)),Ne!==null?(Qe=Math.max(Qe,0),gt=Math.min(gt,Ne.count)):Be!=null&&(Qe=Math.max(Qe,0),gt=Math.min(gt,Be.count));const It=gt-Qe;if(It<0||It===1/0)return;Le.setup(Y,Q,Ce,ne,Ne);let Nt,xt=V;if(Ne!==null&&(Nt=Z.get(Ne),xt=Re,xt.setIndex(Nt)),Y.isMesh)Q.wireframe===!0?(K.setLineWidth(Q.wireframeLinewidth*ie()),xt.setMode(C.LINES)):xt.setMode(C.TRIANGLES);else if(Y.isLine){let ke=Q.linewidth;ke===void 0&&(ke=1),K.setLineWidth(ke*ie()),Y.isLineSegments?xt.setMode(C.LINES):Y.isLineLoop?xt.setMode(C.LINE_LOOP):xt.setMode(C.LINE_STRIP)}else Y.isPoints?xt.setMode(C.POINTS):Y.isSprite&&xt.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)wa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(le.get("WEBGL_multi_draw"))xt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const ke=Y._multiDrawStarts,pt=Y._multiDrawCounts,ot=Y._multiDrawCount,yn=Ne?Z.get(Ne).bytesPerElement:1,Yr=x.get(Q).currentProgram.getUniforms();for(let Sn=0;Sn<ot;Sn++)Yr.setValue(C,"_gl_DrawID",Sn),xt.render(ke[Sn]/yn,pt[Sn])}else if(Y.isInstancedMesh)xt.renderInstances(Qe,It,Y.count);else if(ne.isInstancedBufferGeometry){const ke=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,pt=Math.min(ne.instanceCount,ke);xt.renderInstances(Qe,It,pt)}else xt.render(Qe,It)};function xd(T,z,ne){T.transparent===!0&&T.side===Ui&&T.forceSinglePass===!1?(T.side=hn,T.needsUpdate=!0,Ya(T,z,ne),T.side=vr,T.needsUpdate=!0,Ya(T,z,ne),T.side=Ui):Ya(T,z,ne)}this.compile=function(T,z,ne=null){ne===null&&(ne=T),w=Se.get(ne),w.init(z),L.push(w),ne.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),T!==ne&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(z.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights();const Q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Te=Y.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const Ce=Te[De];xd(Ce,ne,Y),Q.add(Ce)}else xd(Te,ne,Y),Q.add(Te)}),w=L.pop(),Q},this.compileAsync=function(T,z,ne=null){const Q=this.compile(T,z,ne);return new Promise(Y=>{function Te(){if(Q.forEach(function(De){x.get(De).currentProgram.isReady()&&Q.delete(De)}),Q.size===0){Y(T);return}setTimeout(Te,10)}le.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Nl=null;function i_(T){Nl&&Nl(T)}function yd(){Sr.stop()}function Sd(){Sr.start()}const Sr=new Kv;Sr.setAnimationLoop(i_),typeof self<"u"&&Sr.setContext(self),this.setAnimationLoop=function(T){Nl=T,Ee.setAnimationLoop(T),T===null?Sr.stop():Sr.start()},Ee.addEventListener("sessionstart",yd),Ee.addEventListener("sessionend",Sd),this.render=function(T,z){if(z!==void 0&&z.isCamera!==!0){lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;const ne=Ee.enabled===!0&&Ee.isPresenting===!0,Q=F!==null&&(k===null||ne)&&F.begin(S,k);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(z),z=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(S,T,z,k),w=Se.get(T,L.length),w.init(z),L.push(w),je.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(je,fi,z.reversedDepth),Pe=this.localClippingEnabled,ae=Ie.init(this.clippingPlanes,Pe),b=fe.get(T,P.length),b.init(),P.push(b),Ee.enabled===!0&&Ee.isPresenting===!0){const De=S.xr.getDepthSensingMesh();De!==null&&Ul(De,z,-1/0,S.sortObjects)}Ul(T,z,0,S.sortObjects),b.finish(),S.sortObjects===!0&&b.sort(ut,st),ee=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,ee&&ge.addToRenderList(b,T),this.info.render.frame++,ae===!0&&Ie.beginShadows();const Y=w.state.shadowsArray;if(we.render(Y,T,z),ae===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&F.hasRenderPass())===!1){const De=b.opaque,Ce=b.transmissive;if(w.setupLights(),z.isArrayCamera){const Ne=z.cameras;if(Ce.length>0)for(let Fe=0,He=Ne.length;Fe<He;Fe++){const Be=Ne[Fe];Ed(De,Ce,T,Be)}ee&&ge.render(T);for(let Fe=0,He=Ne.length;Fe<He;Fe++){const Be=Ne[Fe];bd(b,T,Be,Be.viewport)}}else Ce.length>0&&Ed(De,Ce,T,z),ee&&ge.render(T),bd(b,T,z)}k!==null&&U===0&&(N.updateMultisampleRenderTarget(k),N.updateRenderTargetMipmap(k)),Q&&F.end(S),T.isScene===!0&&T.onAfterRender(S,T,z),Le.resetDefaultState(),H=-1,$=null,L.pop(),L.length>0?(w=L[L.length-1],ae===!0&&Ie.setGlobalState(S.clippingPlanes,w.state.camera)):w=null,P.pop(),P.length>0?b=P[P.length-1]:b=null};function Ul(T,z,ne,Q){if(T.visible===!1)return;if(T.layers.test(z.layers)){if(T.isGroup)ne=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(z);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||oe.intersectsSprite(T)){Q&&D.setFromMatrixPosition(T.matrixWorld).applyMatrix4(je);const De=pe.update(T),Ce=T.material;Ce.visible&&b.push(T,De,Ce,ne,D.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||oe.intersectsObject(T))){const De=pe.update(T),Ce=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),D.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),D.copy(De.boundingSphere.center)),D.applyMatrix4(T.matrixWorld).applyMatrix4(je)),Array.isArray(Ce)){const Ne=De.groups;for(let Fe=0,He=Ne.length;Fe<He;Fe++){const Be=Ne[Fe],Qe=Ce[Be.materialIndex];Qe&&Qe.visible&&b.push(T,De,Qe,ne,D.z,Be)}}else Ce.visible&&b.push(T,De,Ce,ne,D.z,null)}}const Te=T.children;for(let De=0,Ce=Te.length;De<Ce;De++)Ul(Te[De],z,ne,Q)}function bd(T,z,ne,Q){const{opaque:Y,transmissive:Te,transparent:De}=T;w.setupLightsView(ne),ae===!0&&Ie.setGlobalState(S.clippingPlanes,ne),Q&&K.viewport(B.copy(Q)),Y.length>0&&qa(Y,z,ne),Te.length>0&&qa(Te,z,ne),De.length>0&&qa(De,z,ne),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Ed(T,z,ne,Q){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Q.id]===void 0){const Qe=le.has("EXT_color_buffer_half_float")||le.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Q.id]=new pi(1,1,{generateMipmaps:!0,type:Qe?Wi:Tn,minFilter:kr,samples:ce.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace})}const Te=w.state.transmissionRenderTarget[Q.id],De=Q.viewport||B;Te.setSize(De.z*S.transmissionResolutionScale,De.w*S.transmissionResolutionScale);const Ce=S.getRenderTarget(),Ne=S.getActiveCubeFace(),Fe=S.getActiveMipmapLevel();S.setRenderTarget(Te),S.getClearColor(de),_e=S.getClearAlpha(),_e<1&&S.setClearColor(16777215,.5),S.clear(),ee&&ge.render(ne);const He=S.toneMapping;S.toneMapping=hi;const Be=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),w.setupLightsView(Q),ae===!0&&Ie.setGlobalState(S.clippingPlanes,Q),qa(T,ne,Q),N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te),le.has("WEBGL_multisampled_render_to_texture")===!1){let Qe=!1;for(let gt=0,It=z.length;gt<It;gt++){const Nt=z[gt],{object:xt,geometry:ke,material:pt,group:ot}=Nt;if(pt.side===Ui&&xt.layers.test(Q.layers)){const yn=pt.side;pt.side=hn,pt.needsUpdate=!0,Md(xt,ne,Q,ke,pt,ot),pt.side=yn,pt.needsUpdate=!0,Qe=!0}}Qe===!0&&(N.updateMultisampleRenderTarget(Te),N.updateRenderTargetMipmap(Te))}S.setRenderTarget(Ce,Ne,Fe),S.setClearColor(de,_e),Be!==void 0&&(Q.viewport=Be),S.toneMapping=He}function qa(T,z,ne){const Q=z.isScene===!0?z.overrideMaterial:null;for(let Y=0,Te=T.length;Y<Te;Y++){const De=T[Y],{object:Ce,geometry:Ne,group:Fe}=De;let He=De.material;He.allowOverride===!0&&Q!==null&&(He=Q),Ce.layers.test(ne.layers)&&Md(Ce,z,ne,Ne,He,Fe)}}function Md(T,z,ne,Q,Y,Te){T.onBeforeRender(S,z,ne,Q,Y,Te),T.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(S,z,ne,Q,T,Te),Y.transparent===!0&&Y.side===Ui&&Y.forceSinglePass===!1?(Y.side=hn,Y.needsUpdate=!0,S.renderBufferDirect(ne,z,Q,Y,T,Te),Y.side=vr,Y.needsUpdate=!0,S.renderBufferDirect(ne,z,Q,Y,T,Te),Y.side=Ui):S.renderBufferDirect(ne,z,Q,Y,T,Te),T.onAfterRender(S,z,ne,Q,Y,Te)}function Ya(T,z,ne){z.isScene!==!0&&(z=G);const Q=x.get(T),Y=w.state.lights,Te=w.state.shadowsArray,De=Y.state.version,Ce=Me.getParameters(T,Y.state,Te,z,ne),Ne=Me.getProgramCacheKey(Ce);let Fe=Q.programs;Q.environment=T.isMeshStandardMaterial?z.environment:null,Q.fog=z.fog,Q.envMap=(T.isMeshStandardMaterial?te:q).get(T.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&T.envMap===null?z.environmentRotation:T.envMapRotation,Fe===void 0&&(T.addEventListener("dispose",ri),Fe=new Map,Q.programs=Fe);let He=Fe.get(Ne);if(He!==void 0){if(Q.currentProgram===He&&Q.lightsStateVersion===De)return Ad(T,Ce),He}else Ce.uniforms=Me.getUniforms(T),T.onBeforeCompile(Ce,S),He=Me.acquireProgram(Ce,Ne),Fe.set(Ne,He),Q.uniforms=Ce.uniforms;const Be=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Ie.uniform),Ad(T,Ce),Q.needsLights=a_(T),Q.lightsStateVersion=De,Q.needsLights&&(Be.ambientLightColor.value=Y.state.ambient,Be.lightProbe.value=Y.state.probe,Be.directionalLights.value=Y.state.directional,Be.directionalLightShadows.value=Y.state.directionalShadow,Be.spotLights.value=Y.state.spot,Be.spotLightShadows.value=Y.state.spotShadow,Be.rectAreaLights.value=Y.state.rectArea,Be.ltc_1.value=Y.state.rectAreaLTC1,Be.ltc_2.value=Y.state.rectAreaLTC2,Be.pointLights.value=Y.state.point,Be.pointLightShadows.value=Y.state.pointShadow,Be.hemisphereLights.value=Y.state.hemi,Be.directionalShadowMap.value=Y.state.directionalShadowMap,Be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Be.spotShadowMap.value=Y.state.spotShadowMap,Be.spotLightMatrix.value=Y.state.spotLightMatrix,Be.spotLightMap.value=Y.state.spotLightMap,Be.pointShadowMap.value=Y.state.pointShadowMap,Be.pointShadowMatrix.value=Y.state.pointShadowMatrix),Q.currentProgram=He,Q.uniformsList=null,He}function Td(T){if(T.uniformsList===null){const z=T.currentProgram.getUniforms();T.uniformsList=Go.seqWithValue(z.seq,T.uniforms)}return T.uniformsList}function Ad(T,z){const ne=x.get(T);ne.outputColorSpace=z.outputColorSpace,ne.batching=z.batching,ne.batchingColor=z.batchingColor,ne.instancing=z.instancing,ne.instancingColor=z.instancingColor,ne.instancingMorph=z.instancingMorph,ne.skinning=z.skinning,ne.morphTargets=z.morphTargets,ne.morphNormals=z.morphNormals,ne.morphColors=z.morphColors,ne.morphTargetsCount=z.morphTargetsCount,ne.numClippingPlanes=z.numClippingPlanes,ne.numIntersection=z.numClipIntersection,ne.vertexAlphas=z.vertexAlphas,ne.vertexTangents=z.vertexTangents,ne.toneMapping=z.toneMapping}function r_(T,z,ne,Q,Y){z.isScene!==!0&&(z=G),N.resetTextureUnits();const Te=z.fog,De=Q.isMeshStandardMaterial?z.environment:null,Ce=k===null?S.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Fs,Ne=(Q.isMeshStandardMaterial?te:q).get(Q.envMap||De),Fe=Q.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,He=!!ne.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Be=!!ne.morphAttributes.position,Qe=!!ne.morphAttributes.normal,gt=!!ne.morphAttributes.color;let It=hi;Q.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(It=S.toneMapping);const Nt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,xt=Nt!==void 0?Nt.length:0,ke=x.get(Q),pt=w.state.lights;if(ae===!0&&(Pe===!0||T!==$)){const an=T===$&&Q.id===H;Ie.setState(Q,T,an)}let ot=!1;Q.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==pt.state.version||ke.outputColorSpace!==Ce||Y.isBatchedMesh&&ke.batching===!1||!Y.isBatchedMesh&&ke.batching===!0||Y.isBatchedMesh&&ke.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&ke.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&ke.instancing===!1||!Y.isInstancedMesh&&ke.instancing===!0||Y.isSkinnedMesh&&ke.skinning===!1||!Y.isSkinnedMesh&&ke.skinning===!0||Y.isInstancedMesh&&ke.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&ke.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&ke.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&ke.instancingMorph===!1&&Y.morphTexture!==null||ke.envMap!==Ne||Q.fog===!0&&ke.fog!==Te||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ie.numPlanes||ke.numIntersection!==Ie.numIntersection)||ke.vertexAlphas!==Fe||ke.vertexTangents!==He||ke.morphTargets!==Be||ke.morphNormals!==Qe||ke.morphColors!==gt||ke.toneMapping!==It||ke.morphTargetsCount!==xt)&&(ot=!0):(ot=!0,ke.__version=Q.version);let yn=ke.currentProgram;ot===!0&&(yn=Ya(Q,z,Y));let Yr=!1,Sn=!1,Ks=!1;const Et=yn.getUniforms(),pn=ke.uniforms;if(K.useProgram(yn.program)&&(Yr=!0,Sn=!0,Ks=!0),Q.id!==H&&(H=Q.id,Sn=!0),Yr||$!==T){K.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Et.setValue(C,"projectionMatrix",T.projectionMatrix),Et.setValue(C,"viewMatrix",T.matrixWorldInverse);const mn=Et.map.cameraPosition;mn!==void 0&&mn.setValue(C,R.setFromMatrixPosition(T.matrixWorld)),ce.logarithmicDepthBuffer&&Et.setValue(C,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Et.setValue(C,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,Sn=!0,Ks=!0)}if(ke.needsLights&&(pt.state.directionalShadowMap.length>0&&Et.setValue(C,"directionalShadowMap",pt.state.directionalShadowMap,N),pt.state.spotShadowMap.length>0&&Et.setValue(C,"spotShadowMap",pt.state.spotShadowMap,N),pt.state.pointShadowMap.length>0&&Et.setValue(C,"pointShadowMap",pt.state.pointShadowMap,N)),Y.isSkinnedMesh){Et.setOptional(C,Y,"bindMatrix"),Et.setOptional(C,Y,"bindMatrixInverse");const an=Y.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Et.setValue(C,"boneTexture",an.boneTexture,N))}Y.isBatchedMesh&&(Et.setOptional(C,Y,"batchingTexture"),Et.setValue(C,"batchingTexture",Y._matricesTexture,N),Et.setOptional(C,Y,"batchingIdTexture"),Et.setValue(C,"batchingIdTexture",Y._indirectTexture,N),Et.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Et.setValue(C,"batchingColorTexture",Y._colorsTexture,N));const Ln=ne.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&qe.update(Y,ne,yn),(Sn||ke.receiveShadow!==Y.receiveShadow)&&(ke.receiveShadow=Y.receiveShadow,Et.setValue(C,"receiveShadow",Y.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(pn.envMap.value=Ne,pn.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&z.environment!==null&&(pn.envMapIntensity.value=z.environmentIntensity),pn.dfgLUT!==void 0&&(pn.dfgLUT.value=f4()),Sn&&(Et.setValue(C,"toneMappingExposure",S.toneMappingExposure),ke.needsLights&&s_(pn,Ks),Te&&Q.fog===!0&&Ue.refreshFogUniforms(pn,Te),Ue.refreshMaterialUniforms(pn,Q,Ge,Oe,w.state.transmissionRenderTarget[T.id]),Go.upload(C,Td(ke),pn,N)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Go.upload(C,Td(ke),pn,N),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Et.setValue(C,"center",Y.center),Et.setValue(C,"modelViewMatrix",Y.modelViewMatrix),Et.setValue(C,"normalMatrix",Y.normalMatrix),Et.setValue(C,"modelMatrix",Y.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const an=Q.uniformsGroups;for(let mn=0,Fl=an.length;mn<Fl;mn++){const br=an[mn];me.update(br,yn),me.bind(br,yn)}}return yn}function s_(T,z){T.ambientLightColor.needsUpdate=z,T.lightProbe.needsUpdate=z,T.directionalLights.needsUpdate=z,T.directionalLightShadows.needsUpdate=z,T.pointLights.needsUpdate=z,T.pointLightShadows.needsUpdate=z,T.spotLights.needsUpdate=z,T.spotLightShadows.needsUpdate=z,T.rectAreaLights.needsUpdate=z,T.hemisphereLights.needsUpdate=z}function a_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(T,z,ne){const Q=x.get(T);Q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=z,x.get(T.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:ne,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,z){const ne=x.get(T);ne.__webglFramebuffer=z,ne.__useDefaultFramebuffer=z===void 0};const o_=C.createFramebuffer();this.setRenderTarget=function(T,z=0,ne=0){k=T,I=z,U=ne;let Q=null,Y=!1,Te=!1;if(T){const Ce=x.get(T);if(Ce.__useDefaultFramebuffer!==void 0){K.bindFramebuffer(C.FRAMEBUFFER,Ce.__webglFramebuffer),B.copy(T.viewport),W.copy(T.scissor),j=T.scissorTest,K.viewport(B),K.scissor(W),K.setScissorTest(j),H=-1;return}else if(Ce.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(Ce.__hasExternalTextures)N.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Ce.__boundDepthTexture!==He){if(He!==null&&x.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const Ne=T.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Te=!0);const Fe=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[z])?Q=Fe[z][ne]:Q=Fe[z],Y=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?Q=x.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?Q=Fe[ne]:Q=Fe,B.copy(T.viewport),W.copy(T.scissor),j=T.scissorTest}else B.copy(se).multiplyScalar(Ge).floor(),W.copy(O).multiplyScalar(Ge).floor(),j=re;if(ne!==0&&(Q=o_),K.bindFramebuffer(C.FRAMEBUFFER,Q)&&K.drawBuffers(T,Q),K.viewport(B),K.scissor(W),K.setScissorTest(j),Y){const Ce=x.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,ne)}else if(Te){const Ce=z;for(let Ne=0;Ne<T.textures.length;Ne++){const Fe=x.get(T.textures[Ne]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Ne,Fe.__webglTexture,ne,Ce)}}else if(T!==null&&ne!==0){const Ce=x.get(T.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,ne)}H=-1},this.readRenderTargetPixels=function(T,z,ne,Q,Y,Te,De,Ce=0){if(!(T&&T.isWebGLRenderTarget)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){K.bindFramebuffer(C.FRAMEBUFFER,Ne);try{const Fe=T.textures[Ce],He=Fe.format,Be=Fe.type;if(!ce.textureFormatReadable(He)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ce.textureTypeReadable(Be)){lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=T.width-Q&&ne>=0&&ne<=T.height-Y&&(T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),C.readPixels(z,ne,Q,Y,xe.convert(He),xe.convert(Be),Te))}finally{const Fe=k!==null?x.get(k).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,Fe)}}},this.readRenderTargetPixelsAsync=async function(T,z,ne,Q,Y,Te,De,Ce=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne)if(z>=0&&z<=T.width-Q&&ne>=0&&ne<=T.height-Y){K.bindFramebuffer(C.FRAMEBUFFER,Ne);const Fe=T.textures[Ce],He=Fe.format,Be=Fe.type;if(!ce.textureFormatReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ce.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.bufferData(C.PIXEL_PACK_BUFFER,Te.byteLength,C.STREAM_READ),T.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ce),C.readPixels(z,ne,Q,Y,xe.convert(He),xe.convert(Be),0);const gt=k!==null?x.get(k).__webglFramebuffer:null;K.bindFramebuffer(C.FRAMEBUFFER,gt);const It=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await A2(C,It,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Qe),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Te),C.deleteBuffer(Qe),C.deleteSync(It),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,z=null,ne=0){const Q=Math.pow(2,-ne),Y=Math.floor(T.image.width*Q),Te=Math.floor(T.image.height*Q),De=z!==null?z.x:0,Ce=z!==null?z.y:0;N.setTexture2D(T,0),C.copyTexSubImage2D(C.TEXTURE_2D,ne,0,0,De,Ce,Y,Te),K.unbindTexture()};const l_=C.createFramebuffer(),c_=C.createFramebuffer();this.copyTextureToTexture=function(T,z,ne=null,Q=null,Y=0,Te=null){Te===null&&(Y!==0?(wa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=Y,Y=0):Te=0);let De,Ce,Ne,Fe,He,Be,Qe,gt,It;const Nt=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(ne!==null)De=ne.max.x-ne.min.x,Ce=ne.max.y-ne.min.y,Ne=ne.isBox3?ne.max.z-ne.min.z:1,Fe=ne.min.x,He=ne.min.y,Be=ne.isBox3?ne.min.z:0;else{const Ln=Math.pow(2,-Y);De=Math.floor(Nt.width*Ln),Ce=Math.floor(Nt.height*Ln),T.isDataArrayTexture?Ne=Nt.depth:T.isData3DTexture?Ne=Math.floor(Nt.depth*Ln):Ne=1,Fe=0,He=0,Be=0}Q!==null?(Qe=Q.x,gt=Q.y,It=Q.z):(Qe=0,gt=0,It=0);const xt=xe.convert(z.format),ke=xe.convert(z.type);let pt;z.isData3DTexture?(N.setTexture3D(z,0),pt=C.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(N.setTexture2DArray(z,0),pt=C.TEXTURE_2D_ARRAY):(N.setTexture2D(z,0),pt=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,z.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,z.unpackAlignment);const ot=C.getParameter(C.UNPACK_ROW_LENGTH),yn=C.getParameter(C.UNPACK_IMAGE_HEIGHT),Yr=C.getParameter(C.UNPACK_SKIP_PIXELS),Sn=C.getParameter(C.UNPACK_SKIP_ROWS),Ks=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Nt.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Nt.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Fe),C.pixelStorei(C.UNPACK_SKIP_ROWS,He),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Be);const Et=T.isDataArrayTexture||T.isData3DTexture,pn=z.isDataArrayTexture||z.isData3DTexture;if(T.isDepthTexture){const Ln=x.get(T),an=x.get(z),mn=x.get(Ln.__renderTarget),Fl=x.get(an.__renderTarget);K.bindFramebuffer(C.READ_FRAMEBUFFER,mn.__webglFramebuffer),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,Fl.__webglFramebuffer);for(let br=0;br<Ne;br++)Et&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(T).__webglTexture,Y,Be+br),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,x.get(z).__webglTexture,Te,It+br)),C.blitFramebuffer(Fe,He,De,Ce,Qe,gt,De,Ce,C.DEPTH_BUFFER_BIT,C.NEAREST);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||x.has(T)){const Ln=x.get(T),an=x.get(z);K.bindFramebuffer(C.READ_FRAMEBUFFER,l_),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,c_);for(let mn=0;mn<Ne;mn++)Et?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ln.__webglTexture,Y,Be+mn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ln.__webglTexture,Y),pn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,an.__webglTexture,Te,It+mn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,an.__webglTexture,Te),Y!==0?C.blitFramebuffer(Fe,He,De,Ce,Qe,gt,De,Ce,C.COLOR_BUFFER_BIT,C.NEAREST):pn?C.copyTexSubImage3D(pt,Te,Qe,gt,It+mn,Fe,He,De,Ce):C.copyTexSubImage2D(pt,Te,Qe,gt,Fe,He,De,Ce);K.bindFramebuffer(C.READ_FRAMEBUFFER,null),K.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else pn?T.isDataTexture||T.isData3DTexture?C.texSubImage3D(pt,Te,Qe,gt,It,De,Ce,Ne,xt,ke,Nt.data):z.isCompressedArrayTexture?C.compressedTexSubImage3D(pt,Te,Qe,gt,It,De,Ce,Ne,xt,Nt.data):C.texSubImage3D(pt,Te,Qe,gt,It,De,Ce,Ne,xt,ke,Nt):T.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Te,Qe,gt,De,Ce,xt,ke,Nt.data):T.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Te,Qe,gt,Nt.width,Nt.height,xt,Nt.data):C.texSubImage2D(C.TEXTURE_2D,Te,Qe,gt,De,Ce,xt,ke,Nt);C.pixelStorei(C.UNPACK_ROW_LENGTH,ot),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,yn),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yr),C.pixelStorei(C.UNPACK_SKIP_ROWS,Sn),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ks),Te===0&&z.generateMipmaps&&C.generateMipmap(pt),K.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),K.unbindTexture()},this.resetState=function(){I=0,U=0,k=null,K.reset(),Le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=at._getDrawingBufferColorSpace(e),n.unpackColorSpace=at._getUnpackColorSpace()}}const t_=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},h4={__name:"EarthGlobe",setup(t){const e=et(null);let n;return Ct(()=>{const i=e.value.clientWidth||600,r=e.value.clientHeight||400,s=new Z2;s.background=new rt(2068);const a=new On(45,i/r,.1,1e3);a.position.z=2.5;const o=new d4({alpha:!0,antialias:!0});o.setSize(i,r),o.setPixelRatio(window.devicePixelRatio),o.shadowMap.enabled=!0,o.toneMapping=ad,o.toneMappingExposure=.5,e.value.appendChild(o.domElement);const l=new Hn,c=[],u=[];for(let F=0;F<5e3;F++){const S=(Math.random()-.5)*2e3,M=(Math.random()-.5)*2e3,I=(Math.random()-.5)*2e3;c.push(S,M,I);const U=new rt,k=Math.random();k>.8?U.setHSL(.6,.2,Math.random()*.5+.5):k>.5?U.setHSL(.1,.1,Math.random()*.5+.5):U.setHSL(0,0,Math.random()*.5+.5),u.push(U.r,U.g,U.b)}l.setAttribute("position",new vn(c,3)),l.setAttribute("color",new vn(u,3));const f=new jv({size:1.5,vertexColors:!0,transparent:!0,opacity:.8,blending:il}),d=new nT(l,f);s.add(d);const h=new al(.9,64,64),v=new fT().load("https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"),_=new sT({map:v,emissive:4491519,emissiveIntensity:.35,roughness:.8}),g=new ti(h,_);s.add(g);const m=new al(1.05,64,64),E=new ni({vertexShader:`
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
    `,blending:il,side:hn,transparent:!0,depthWrite:!1}),y=new ti(m,E);g.add(y);const b=new mT(4210752,1.5);s.add(b);const w=new pT(16777215,1.5);w.position.set(5,3,5),w.castShadow=!0,s.add(w);const P=()=>{n=requestAnimationFrame(P),g.rotation.y+=.01,d.rotation.y+=2e-4,o.render(s,a)};P();const L=()=>{const F=e.value.clientWidth,S=e.value.clientHeight;a.aspect=F/S,a.updateProjectionMatrix(),o.setSize(F,S)};window.addEventListener("resize",L),ji(()=>{cancelAnimationFrame(n),window.removeEventListener("resize",L),e.value&&o.domElement&&e.value.removeChild(o.domElement)})}),(i,r)=>(Af(),e1("div",{ref_key:"mountPoint",ref:e,class:"earth-globe"},null,512))}},p4=t_(h4,[["__scopeId","data-v-deb8df03"]]),m4=ye({__name:"Blog",setup(t){return(e,n)=>{const i=Rt("BingHeroBackground");return Af(),lg(Yn(_v),null,{heroInfo:Pm(r=>[Gd(" 1. 地球底层 "),Lt(p4,{class:"hero-earth"}),Gd(" 2. 原来的标语/背景 "),Lt(i),Lt(Yn(X3),y_(fg(r)),null,16)]),_:1})}}}),g4=t_(m4,[["__scopeId","data-v-bad2b6ed"]]);if(typeof window<"u"){const t=document.createElement("script");t.src="https://cdn.jsdelivr.net/npm/live2d-widget@3.1.4/lib/L2Dwidget.min.js",t.async=!0,t.onload=function(){window.L2Dwidget.init({model:{jsonPath:"https://cdn.jsdelivr.net/npm/live2d-widget-model-shizuku@1.0.5/assets/shizuku.model.json"},display:{position:"right",width:150,height:300,hOffset:0,vOffset:-20},mobile:{show:!0,scale:.8},react:{opacityDefault:.8,opacityOnHover:.9}})},document.head.appendChild(t);const e=document.createElement("link");e.rel="stylesheet",e.href="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.css",document.head.appendChild(e);const n=document.createElement("style");n.textContent=`
    #aplayer {
      border-radius: 12px;
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      overflow: hidden;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }
    #aplayer:hover {
      box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
      transform: translateY(-2px);
    }
    .aplayer-lrc {
      font-size: 13px;
      line-height: 1.6;
      color: #333;
      text-align: center;
      padding: 10px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 0 0 12px 12px;
    }
    .aplayer-pic {
      border-radius: 12px 0 0 12px;
      width: 80px !important;
      height: 80px !important;
    }
    .aplayer-info {
      border-radius: 0 12px 12px 0;
      padding: 12px;
    }
    .aplayer-title {
      font-size: 14px;
      font-weight: 600;
      color: #333;
      margin-bottom: 4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .aplayer-author {
      font-size: 12px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .aplayer-bar-wrap {
      margin: 10px 0;
    }
    .aplayer-bar {
      height: 4px;
      border-radius: 2px;
      background: #e0e0e0;
    }
    .aplayer-loaded {
      background: #c0c0c0;
    }
    .aplayer-played {
      background: #2196f3;
      border-radius: 2px;
    }
    .aplayer-volume-bar-wrap {
      width: 60px;
    }
    .aplayer-volume-bar {
      height: 4px;
      border-radius: 2px;
    }
    .aplayer-button {
      transition: all 0.2s ease;
    }
    .aplayer-button:hover {
      transform: scale(1.1);
    }
    .aplayer-list {
      border-radius: 0 0 12px 12px;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
    }
    .aplayer-list li {
      padding: 8px 12px;
      transition: all 0.2s ease;
    }
    .aplayer-list li:hover {
      background: rgba(33, 150, 243, 0.1);
    }
    .aplayer-list li.aplayer-list-light {
      background: rgba(33, 150, 243, 0.2);
    }
    @media (max-width: 768px) {
      #aplayer {
        width: 280px !important;
        bottom: 20px !important;
        left: 20px !important;
      }
      .aplayer-pic {
        width: 60px !important;
        height: 60px !important;
      }
    }
  `,document.head.appendChild(n);const i=document.createElement("script");i.src="https://cdn.jsdelivr.net/npm/aplayer@1.10.1/dist/APlayer.min.js",i.async=!0,i.onload=function(){window.onload=function(){const r=document.createElement("div");r.id="aplayer",r.style.position="fixed",r.style.bottom="30px",r.style.left="30px",r.style.zIndex="9999",r.style.width="340px",r.style.minHeight="120px",document.body.appendChild(r);async function s(){try{const l=["周杰伦 - 青花瓷.flac","周杰伦 - 晴天.flac","周杰伦 - 七里香.flac","Beyond - 海阔天空.flac","陈奕迅 - 浮夸.flac","林俊杰 - 江南.flac","Taylor Swift - Love Story.flac","Ed Sheeran - Shape of You.flac","邓紫棋 - 光年之外.flac","五月天 - 突然好想你.flac"].map(c=>{let u=c.replace(/\.(mp3|flac|wav|ogg)$/,""),f="Unknown";const d=u.match(/^(.*?)\s*[-\s]+\s*(.*)$/);d&&(f=d[1].trim(),u=d[2].trim());let h="https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg";(c.includes("青花瓷")||c.includes("晴天")||c.includes("七里香")||c.includes("海阔天空")||c.includes("浮夸")||c.includes("江南")||c.includes("Love Story")||c.includes("Shape of You")||c.includes("光年之外")||c.includes("突然好想你"))&&(h="https://p2.music.126.net/4G95iMjwQH0vR1X7cY3jMg==/109951165464504821.jpg");let v="";return c.includes("青花瓷")?v=`[00:00.00] 青花瓷 - 周杰伦
[00:10.00] 素胚勾勒出青花笔锋浓转淡
[00:15.00] 瓶身描绘的牡丹一如你初妆
[00:20.00] 冉冉檀香透过窗心事我了然
[00:25.00] 宣纸上走笔至此搁一半
[00:30.00] 釉色渲染仕女图韵味被私藏
[00:35.00] 而你嫣然的一笑如含苞待放
[00:40.00] 你的美一缕飘散
[00:45.00] 去到我去不了的地方`:c.includes("晴天")?v=`[00:00.00] 晴天 - 周杰伦
[00:10.00] 故事的小黄花
[00:15.00] 从出生那年就飘着
[00:20.00] 童年的荡秋千
[00:25.00] 随记忆一直晃到现在`:c.includes("海阔天空")&&(v=`[00:00.00] 海阔天空 - Beyond
[00:10.00] 今天我寒夜里看雪飘过
[00:15.00] 怀著冷却了的心窝飘远方
[00:20.00] 风雨里追赶
[00:25.00] 雾里分不清影踪`),{name:u,artist:f,url:`/myblog/music/${encodeURIComponent(c)}`,cover:h,lrc:v}});return console.log("Music files:",l),l}catch(o){return console.error("Error scanning music folder:",o),[]}}async function a(){const o=await s(),l=new APlayer({element:document.getElementById("aplayer"),autoplay:!1,mutex:!0,volume:.6,listFolded:!0,listMaxHeight:400,lrcType:1,theme:"#2196f3",loop:"all",order:"random",preload:"auto",audio:o}),c=document.getElementById("aplayer");c&&c.addEventListener("click",function(_){if(!_.target.closest(".aplayer-list")&&!_.target.closest(".aplayer-button")){const g=c.querySelector(".aplayer-list");g&&(g.style.display==="none"||g.style.display===""?g.style.display="block":g.style.display="none")}});let u="random";const f=document.createElement("button");f.innerHTML="🔄",f.style.position="absolute",f.style.top="10px",f.style.right="10px",f.style.background="transparent",f.style.border="none",f.style.fontSize="16px",f.style.cursor="pointer",f.style.zIndex="10000",f.title="切换播放模式",c.appendChild(f),f.addEventListener("click",function(){u==="random"?(u="single",l.setOption("order","single"),f.innerHTML="🔂",f.title="单曲循环"):u==="single"?(u="list",l.setOption("order","list"),f.innerHTML="➡️",f.title="列表顺序播放"):(u="random",l.setOption("order","random"),f.innerHTML="🔄",f.title="随机播放")});const d=document.createElement("button");d.innerHTML="🔊",d.style.position="absolute",d.style.top="10px",d.style.right="40px",d.style.background="transparent",d.style.border="none",d.style.fontSize="16px",d.style.cursor="pointer",d.style.zIndex="10000",d.title="静音/取消静音",c.appendChild(d);let h=!1,v=.6;d.addEventListener("click",function(){h?(l.volume(v),d.innerHTML="🔊",h=!1):(v=l.volume,l.volume(0),d.innerHTML="🔇",h=!0)}),l.on("play",function(){console.log("开始播放")}),l.on("pause",function(){console.log("暂停播放")}),l.on("ended",function(){console.log("播放结束")}),l.on("listswitch",function(){console.log("切换歌曲")}),l.on("volumechange",function(){console.log("音量变化:",l.volume)})}a()}},document.head.appendChild(i)}const v4=kn({layouts:{Blog:g4}}),_4=Object.freeze(Object.defineProperty({__proto__:null,default:v4},Symbol.toStringTag,{value:"Module"})),Io=[Ab,wb,Cb,Pb,Lb,Ib,kb,Vb,Hb,jb,Zb,nE,sE,xE,SE,CE,UE,HE,KE,nM,$3,_4].map(t=>t.default).filter(Boolean),x4=JSON.parse('{"base":"/myblog/","lang":"zh-CN","title":"探索科技 · 分享知识 - superxuan的博客","description":"superxuan05的个人博客","head":[],"locales":{}}');var ms=Je(x4),y4=Gy,S4=()=>{const t=fS({history:y4(Pf("/myblog/")),routes:[{name:"vuepress-route",path:"/:catchAll(.*)",components:{}}],scrollBehavior:(e,n,i)=>i||(e.hash?{el:e.hash}:{top:0})});return t.beforeResolve(async(e,n)=>{if(e.path!==n.path||n===Li){const i=Bn(e.fullPath);if(i.path!==e.fullPath)return i.path;const r=await i.loader();e.meta={...i.meta,_pageChunk:r}}else e.path===n.path&&(e.meta=n.meta)}),t},b4=t=>{t.component("ClientOnly",Uf),t.component("Content",zg),t.component("RouteLink",Gt)},E4=(t,e,n)=>{const i=X(()=>e.currentRoute.value.path),r=Tm((g,m)=>({get(){return g(),e.currentRoute.value.meta._pageChunk},set(E){e.currentRoute.value.meta._pageChunk=E,m()}})),s=X(()=>Tr.resolveLayouts(n)),a=X(()=>Tr.resolveRouteLocale(ms.value.locales,i.value)),o=X(()=>Tr.resolveSiteLocaleData(ms.value,a.value)),l=X(()=>r.value.comp),c=X(()=>r.value.data),u=X(()=>c.value.frontmatter),f=X(()=>Tr.resolvePageHeadTitle(c.value,o.value)),d=X(()=>Tr.resolvePageHead(f.value,u.value,o.value)),h=X(()=>Tr.resolvePageLang(c.value,o.value)),v=X(()=>Tr.resolvePageLayout(c.value,s.value)),_={layouts:s,pageData:c,pageComponent:l,pageFrontmatter:u,pageHead:d,pageHeadTitle:f,pageLang:h,pageLayout:v,redirects:iu,routeLocale:a,routePath:i,routes:Es,siteData:ms,siteLocaleData:o,frontmatter:u,head:d,headTitle:f,lang:h,page:c,site:ms,siteLocale:o};return t.provide(If,_),Object.defineProperties(t.config.globalProperties,{$pageFrontmatter:{get:()=>u.value},$pageHead:{get:()=>d.value},$pageHeadTitle:{get:()=>f.value},$pageLang:{get:()=>h.value},$pageData:{get:()=>c.value},$routeLocale:{get:()=>a.value},$withBase:{get:()=>At},$frontmatter:{get:()=>u.value},$head:{get:()=>d.value},$headTitle:{get:()=>f.value},$lang:{get:()=>h.value},$page:{get:()=>c.value},$site:{get:()=>ms.value},$siteLocale:{get:()=>o.value}}),_},M4=([t,e,n=""])=>{const i=Object.entries(e).map(([o,l])=>vt(l)?`[${o}=${JSON.stringify(l)}]`:l?`[${o}]`:"").join(""),r=`head > ${t}${i}`;return Array.from(document.querySelectorAll(r)).find(o=>o.innerText===n)??null},T4=([t,e,n])=>{if(!vt(t))return null;const i=document.createElement(t);return Vs(e)&&Object.entries(e).forEach(([r,s])=>{vt(s)?i.setAttribute(r,s):s&&i.setAttribute(r,"")}),vt(n)&&i.appendChild(document.createTextNode(n)),i},A4=()=>{const t=pS(),e=kg();let n=[];const i=()=>{t.value.forEach(a=>{const o=M4(a);o&&n.push(o)})},r=()=>{const a=[];return t.value.forEach(o=>{const l=T4(o);l&&a.push(l)}),a},s=()=>{document.documentElement.lang=e.value;const a=r();n.forEach((o,l)=>{const c=a.findIndex(u=>o.isEqualNode(u));c===-1?(o.remove(),delete n[l]):a.splice(c,1)}),a.forEach(o=>document.head.appendChild(o)),n=[...n.filter(o=>!!o),...a]};Kn(_S,s),Ct(()=>{i(),Pt(t,s,{immediate:!1})})},w4=G1,C4=async()=>{const t=w4({name:"Vuepress",setup(){A4();for(const r of Io)r.setup?.();const n=Io.flatMap(({rootComponents:r=[]})=>r.map(s=>p(s))),i=mS();return()=>[p(i.value),n]}}),e=S4();b4(t),E4(t,e,Io);for(const n of Io)await n.enhance?.({app:t,router:e,siteData:ms});return t.use(e),{app:t,router:e}};C4().then(({app:t,router:e})=>{e.isReady().then(()=>{t.mount("#app")})});export{fn as F,t_ as _,ug as a,Lt as b,e1 as c,C4 as createVueApp,Gd as d,P4 as e,dg as f,fg as g,R4 as h,ye as i,et as j,p as k,y_ as n,Af as o,Rt as r,E_ as t,Yn as u,Pm as w};
