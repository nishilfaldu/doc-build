function h(){}function Q(t,n){for(const e in n)t[e]=n[e];return t}function P(t){return t()}function C(){return Object.create(null)}function g(t){t.forEach(P)}function z(t){return typeof t=="function"}function U(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let b;function dt(t,n){return b||(b=document.createElement("a")),b.href=n,t===b.href}function V(t){return Object.keys(t).length===0}function ht(t,n,e,i){if(t){const r=O(t,n,e,i);return t[0](r)}}function O(t,n,e,i){return t[1]&&i?Q(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(n.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=n.dirty[s]|r[s];return u}return n.dirty|r}return n.dirty}function pt(t,n,e,i,r,u){if(r){const o=O(n,e,i,u);t.p(o,r)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function gt(t){return t&&z(t.destroy)?t.destroy:h}let T=!1;function X(){T=!0}function Y(){T=!1}function Z(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function tt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<n.length;l++){const a=n[l];a.claim_order!==void 0&&c.push(a)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const l=n[c].claim_order,a=(r>0&&n[e[r]].claim_order<=l?r+1:Z(1,r,x=>n[e[x]].claim_order,l))-1;i[c]=e[a]+1;const f=a+1;e[f]=c,r=Math.max(f,r)}const u=[],o=[];let s=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(u.push(n[c-1]);s>=c;s--)o.push(n[s]);s--}for(;s>=0;s--)o.push(n[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const a=l<u.length?u[l]:null;t.insertBefore(o[c],a)}}function nt(t,n){if(T){for(tt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function et(t,n,e){t.insertBefore(n,e||null)}function it(t,n,e){T&&!e?nt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function A(t){t.parentNode.removeChild(t)}function xt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function G(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function M(t){return document.createTextNode(t)}function bt(){return M(" ")}function wt(){return M("")}function $t(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Et(t){return function(n){return n.preventDefault(),t.call(this,n)}}function At(t){return function(n){return n.stopPropagation(),t.call(this,n)}}function Tt(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function ct(t){return Array.from(t.childNodes)}function F(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function I(t,n,e,i,r=!1){F(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(n(s)){const c=e(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(n(s)){const c=e(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function R(t,n,e,i){return I(t,r=>r.nodeName===n,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];e[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(n))}function Nt(t,n,e){return R(t,n,e,G)}function St(t,n,e){return R(t,n,e,rt)}function ot(t,n){return I(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>M(n),!0)}function kt(t){return ot(t," ")}function H(t,n,e){for(let i=e;i<t.length;i+=1){const r=t[i];if(r.nodeType===8&&r.textContent.trim()===n)return i}return t.length}function jt(t){const n=H(t,"HTML_TAG_START",0),e=H(t,"HTML_TAG_END",n);if(n===e)return new L;F(t);const i=t.splice(n,e-n+1);A(i[0]),A(i[i.length-1]);const r=i.slice(1,i.length-1);for(const u of r)u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new L(r)}function Mt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function qt(t,n,e,i){e===null?t.style.removeProperty(n):t.style.setProperty(n,e,i?"important":"")}function vt(t,n=document.body){return Array.from(n.querySelectorAll(t))}class st{constructor(){this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.e=G(e.nodeName),this.t=e,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)et(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(A)}}class L extends st{constructor(n){super();this.e=this.n=null,this.l=n}c(n){this.l?this.n=this.l:super.c(n)}i(n){for(let e=0;e<this.n.length;e+=1)it(this.t,this.n[e],n)}}let y;function p(t){y=t}function N(){if(!y)throw new Error("Function called outside component initialization");return y}function Ct(t){N().$$.on_mount.push(t)}function Ht(t){N().$$.after_update.push(t)}function Lt(t){N().$$.on_destroy.push(t)}function Bt(t,n){N().$$.context.set(t,n)}const m=[],B=[],$=[],D=[],W=Promise.resolve();let k=!1;function J(){k||(k=!0,W.then(K))}function Dt(){return J(),W}function j(t){$.push(t)}const S=new Set;let w=0;function K(){const t=y;do{for(;w<m.length;){const n=m[w];w++,p(n),lt(n.$$)}for(p(null),m.length=0,w=0;B.length;)B.pop()();for(let n=0;n<$.length;n+=1){const e=$[n];S.has(e)||(S.add(e),e())}$.length=0}while(m.length);for(;D.length;)D.pop()();k=!1,S.clear(),p(t)}function lt(t){if(t.fragment!==null){t.update(),g(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(j)}}const E=new Set;let _;function Pt(){_={r:0,c:[],p:_}}function zt(){_.r||g(_.c),_=_.p}function ut(t,n){t&&t.i&&(E.delete(t),t.i(n))}function Ot(t,n,e,i){if(t&&t.o){if(E.has(t))return;E.add(t),_.c.push(()=>{E.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}}function Gt(t,n){const e={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],s=n[u];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(e[c]=s[c],r[c]=1);t[u]=s}else for(const c in o)r[c]=1}for(const o in i)o in e||(e[o]=void 0);return e}function Ft(t){return typeof t=="object"&&t!==null?t:{}}function It(t){t&&t.c()}function Rt(t,n){t&&t.l(n)}function ft(t,n,e,i){const{fragment:r,on_mount:u,on_destroy:o,after_update:s}=t.$$;r&&r.m(n,e),i||j(()=>{const c=u.map(P).filter(z);o?o.push(...c):g(c),t.$$.on_mount=[]}),s.forEach(j)}function at(t,n){const e=t.$$;e.fragment!==null&&(g(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function _t(t,n){t.$$.dirty[0]===-1&&(m.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Wt(t,n,e,i,r,u,o,s=[-1]){const c=y;p(t);const l=t.$$={fragment:null,ctx:null,props:u,update:h,not_equal:r,bound:C(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:C(),dirty:s,skip_bound:!1,root:n.target||c.$$.root};o&&o(l.root);let a=!1;if(l.ctx=e?e(t,n.props||{},(f,x,...q)=>{const v=q.length?q[0]:x;return l.ctx&&r(l.ctx[f],l.ctx[f]=v)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](v),a&&_t(t,f)),x}):[],l.update(),a=!0,g(l.before_update),l.fragment=i?i(l.ctx):!1,n.target){if(n.hydrate){X();const f=ct(n.target);l.fragment&&l.fragment.l(f),f.forEach(A)}else l.fragment&&l.fragment.c();n.intro&&ut(t.$$.fragment),ft(t,n.target,n.anchor,n.customElement),Y(),K()}p(c)}class Jt{$destroy(){at(this,1),this.$destroy=h}$on(n,e){const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!V(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}const d=[];function Kt(t,n=h){let e;const i=new Set;function r(s){if(U(t,s)&&(t=s,e)){const c=!d.length;for(const l of i)l[1](),d.push(l,t);if(c){for(let l=0;l<d.length;l+=2)d[l][0](d[l+1]);d.length=0}}}function u(s){r(s(t))}function o(s,c=h){const l=[s,c];return i.add(l),i.size===1&&(e=n(r)||h),s(t),()=>{i.delete(l),i.size===0&&(e(),e=null)}}return{set:r,update:u,subscribe:o}}export{Ft as A,at as B,Q as C,Kt as D,Dt as E,nt as F,xt as G,ht as H,pt as I,yt as J,mt as K,h as L,vt as M,dt as N,rt as O,St as P,gt as Q,$t as R,Jt as S,z as T,g as U,At as V,Et as W,L as X,jt as Y,B as Z,Lt as _,ct as a,Tt as b,Nt as c,A as d,G as e,qt as f,it as g,ot as h,Wt as i,Mt as j,bt as k,wt as l,kt as m,Pt as n,Ot as o,zt as p,ut as q,Bt as r,U as s,M as t,Ht as u,Ct as v,It as w,Rt as x,ft as y,Gt as z};
