import{m as N,a as D,b as z,u as Tt}from"./tag-a4443cf4.js";import{v as ce,p as g,x as G,c as f,y as J,z as Fe,A as Ne,j as r,F as Ue,B as Re,q as K,h as I,t as Q,C as me,D as $,g as Ye,E as Lt,d as ge,i as he,G as ye,H as M,a as zt,I as $t,o as Nt,J as Rt,f as At,K as Ot,L as be,M as Ht,b as P,N as q,r as oe,O as Mt,P as Dt,T as Gt,s as H,S as pe,Q as Wt,u as Xe,R as jt,U as Ae,V as Je,W as qt,X as Oe,Y as F,Z as _e,_ as Ft,$ as xe,a0 as Ce,a1 as Ut,a2 as Ke,m as ne,n as ae,w as k,a3 as L,a4 as B,a5 as Yt,k as Xt,a6 as Jt,a7 as Kt}from"./index-71cc7502.js";const Qt=["top","bottom"],Zt=["start","end","left","right"];function en(e,a){let[n,t]=e.split(" ");return t||(t=ce(Qt,n)?"start":ce(Zt,n)?"top":"center"),{side:He(n,a),align:He(t,a)}}function He(e,a){return e==="start"?a?"right":"left":e==="end"?a?"left":"right":e}const tn="/rockthiswedding/foto.jpg",nn={data(){return{directions:[{title:"Cerimonia",link:"https://www.google.com/maps/search/?api=1&query=Chiesa+Annunciazione+Marigolda"},{title:"Ricevimento",link:"https://www.google.com/maps/search/?api=1&query=Agriturismo%20Larice%2C%20strada%20per%20San%20Lucio%2C%20Clusone%2C%20BG"}]}},methods:{scrollIntoView(e){scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}}},Qe=(e,a)=>{const n=e.__vccOpts||e;for(const[t,i]of a)n[t]=i;return n};const Ze=g({border:[Boolean,Number,String]},"border");function et(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{borderClasses:f(()=>{const t=J(e)?e.value:e.border,i=[];if(t===!0||t==="")i.push(`${a}--border`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`border-${s}`);return i})}}const an=[null,"default","comfortable","compact"],tt=g({density:{type:String,default:"default",validator:e=>an.includes(e)}},"density");function nt(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{densityClasses:f(()=>`${a}--density-${e.density}`)}}const Se=g({elevation:{type:[Number,String],validator(e){const a=parseInt(e);return!isNaN(a)&&a>=0&&a<=24}}},"elevation");function we(e){return{elevationClasses:f(()=>{const n=J(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const ke=g({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function Ie(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{roundedClasses:f(()=>{const t=J(e)?e.value:e.rounded,i=[];if(t===!0||t==="")i.push(`${a}--rounded`);else if(typeof t=="string"||t===0)for(const s of String(t).split(" "))i.push(`rounded-${s}`);return i})}}function Ve(e){return Fe(()=>{const a=[],n={};return e.value.background&&(Ne(e.value.background)?n.backgroundColor=e.value.background:a.push(`bg-${e.value.background}`)),e.value.text&&(Ne(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):a.push(`text-${e.value.text}`)),{colorClasses:a,colorStyles:n}})}function de(e,a){const n=f(()=>({text:J(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=Ve(n);return{textColorClasses:t,textColorStyles:i}}function at(e,a){const n=f(()=>({background:J(e)?e.value:a?e[a]:null})),{colorClasses:t,colorStyles:i}=Ve(n);return{backgroundColorClasses:t,backgroundColorStyles:i}}const sn=["elevated","flat","tonal","outlined","text","plain"];function ln(e,a){return r(Ue,null,[e&&r("span",{key:"overlay",class:`${a}__overlay`},null),r("span",{key:"underlay",class:`${a}__underlay`},null)])}const st=g({color:String,variant:{type:String,default:"elevated",validator:e=>sn.includes(e)}},"variant");function on(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();const n=f(()=>{const{variant:s}=Re(e);return`${a}--variant-${s}`}),{colorClasses:t,colorStyles:i}=Ve(f(()=>{const{variant:s,color:l}=Re(e);return{[["elevated","flat"].includes(s)?"background":"text"]:l}}));return{colorClasses:t,colorStyles:i,variantClasses:n}}const it=g({divided:Boolean,...Ze(),...N(),...tt(),...Se(),...ke(),...D(),...K(),...st()},"VBtnGroup"),Me=I()({name:"VBtnGroup",props:it(),setup(e,a){let{slots:n}=a;const{themeClasses:t}=Q(e),{densityClasses:i}=nt(e),{borderClasses:s}=et(e),{elevationClasses:l}=we(e),{roundedClasses:o}=Ie(e);me({VBtn:{height:"auto",color:$(e,"color"),density:$(e,"density"),flat:!0,variant:$(e,"variant")}}),z(()=>r(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,s.value,i.value,l.value,o.value,e.class],style:e.style},n))}}),lt=g({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),ot=g({value:null,disabled:Boolean,selectedClass:String},"group-item");function rt(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=Ye("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const i=Lt();ge(Symbol.for(`${a.description}:id`),i);const s=he(a,null);if(!s){if(!n)return s;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${a.description}`)}const l=$(e,"value"),o=f(()=>s.disabled.value||e.disabled);s.register({id:i,value:l,disabled:o},t),ye(()=>{s.unregister(i)});const c=f(()=>s.isSelected(i)),v=f(()=>c.value&&[s.selectedClass.value,e.selectedClass]);return M(c,m=>{t.emit("group:selected",{value:m})}),{id:i,isSelected:c,toggle:()=>s.select(i,!c.value),select:m=>s.select(i,m),selectedClass:v,value:l,disabled:o,group:s}}function ut(e,a){let n=!1;const t=zt([]),i=$t(e,"modelValue",[],u=>u==null?[]:ct(t,Ot(u)),u=>{const d=un(t,u);return e.multiple?d:d[0]}),s=Ye("useGroup");function l(u,d){const x=u,b=Symbol.for(`${a.description}:id`),S=At(b,s==null?void 0:s.vnode).indexOf(d);S>-1?t.splice(S,0,x):t.push(x)}function o(u){if(n)return;c();const d=t.findIndex(x=>x.id===u);t.splice(d,1)}function c(){const u=t.find(d=>!d.disabled);u&&e.mandatory==="force"&&!i.value.length&&(i.value=[u.id])}Nt(()=>{c()}),ye(()=>{n=!0});function v(u,d){const x=t.find(b=>b.id===u);if(!(d&&(x!=null&&x.disabled)))if(e.multiple){const b=i.value.slice(),C=b.findIndex(p=>p===u),S=~C;if(d=d??!S,S&&e.mandatory&&b.length<=1||!S&&e.max!=null&&b.length+1>e.max)return;C<0&&d?b.push(u):C>=0&&!d&&b.splice(C,1),i.value=b}else{const b=i.value.includes(u);if(e.mandatory&&b)return;i.value=d??!b?[u]:[]}}function m(u){if(e.multiple,i.value.length){const d=i.value[0],x=t.findIndex(S=>S.id===d);let b=(x+u)%t.length,C=t[b];for(;C.disabled&&b!==x;)b=(b+u)%t.length,C=t[b];if(C.disabled)return;i.value=[t[b].id]}else{const d=t.find(x=>!x.disabled);d&&(i.value=[d.id])}}const h={register:l,unregister:o,selected:i,select:v,disabled:$(e,"disabled"),prev:()=>m(t.length-1),next:()=>m(1),isSelected:u=>i.value.includes(u),selectedClass:f(()=>e.selectedClass),items:f(()=>t),getItemIndex:u=>rn(t,u)};return ge(a,h),h}function rn(e,a){const n=ct(e,[a]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function ct(e,a){const n=[];return a.forEach(t=>{const i=e.find(l=>Rt(t,l.value)),s=e[t];(i==null?void 0:i.value)!=null?n.push(i.id):s!=null&&n.push(s.id)}),n}function un(e,a){const n=[];return a.forEach(t=>{const i=e.findIndex(s=>s.id===t);if(~i){const s=e[i];n.push(s.value!=null?s.value:i)}}),n}const dt=Symbol.for("vuetify:v-btn-toggle"),cn=g({...it(),...lt()},"VBtnToggle");I()({name:"VBtnToggle",props:cn(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;const{isSelected:t,next:i,prev:s,select:l,selected:o}=ut(e,dt);return z(()=>{const[c]=Me.filterProps(e);return r(Me,be({class:["v-btn-toggle",e.class]},c,{style:e.style}),{default:()=>{var v;return[(v=n.default)==null?void 0:v.call(n,{isSelected:t,next:i,prev:s,select:l,selected:o})]}})}),{next:i,prev:s,select:l}}});const dn=g({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),re=I(!1)({name:"VDefaultsProvider",props:dn(),setup(e,a){let{slots:n}=a;const{defaults:t,disabled:i,reset:s,root:l,scoped:o}=Ht(e);return me(t,{reset:s,root:l,scoped:o,disabled:i}),()=>{var c;return(c=n.default)==null?void 0:c.call(n)}}});const vn=["x-small","small","default","large","x-large"],Pe=g({size:{type:[String,Number],default:"default"}},"size");function Ee(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return Fe(()=>{let n,t;return ce(vn,e.size)?n=`${a}--size-${e.size}`:e.size&&(t={width:P(e.size),height:P(e.size)}),{sizeClasses:n,sizeStyles:t}})}const fn=g({color:String,start:Boolean,end:Boolean,icon:q,...N(),...Pe(),...D({tag:"i"}),...K()},"VIcon"),R=I()({name:"VIcon",props:fn(),setup(e,a){let{attrs:n,slots:t}=a;const i=oe(),{themeClasses:s}=Q(e),{iconData:l}=Mt(f(()=>i.value||e.icon)),{sizeClasses:o}=Ee(e),{textColorClasses:c,textColorStyles:v}=de($(e,"color"));return z(()=>{var h,u;const m=(h=t.default)==null?void 0:h.call(t);return m&&(i.value=(u=Dt(m).filter(d=>d.type===Gt&&d.children&&typeof d.children=="string")[0])==null?void 0:u.children),r(l.value.component,{tag:e.tag,icon:l.value.icon,class:["v-icon","notranslate",s.value,o.value,c.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[o.value?void 0:{fontSize:P(e.size),height:P(e.size),width:P(e.size)},v.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[m]})}),{}}});function mn(e,a){const n=oe(),t=H(!1);if(pe){const i=new IntersectionObserver(s=>{e==null||e(s,i),t.value=!!s.find(l=>l.isIntersecting)},a);ye(()=>{i.disconnect()}),M(n,(s,l)=>{l&&(i.unobserve(l),t.value=!1),s&&i.observe(s)},{flush:"post"})}return{intersectionRef:n,isIntersecting:t}}const gn=g({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...N(),...Pe(),...D({tag:"div"}),...K()},"VProgressCircular"),hn=I()({name:"VProgressCircular",props:gn(),setup(e,a){let{slots:n}=a;const t=20,i=2*Math.PI*t,s=oe(),{themeClasses:l}=Q(e),{sizeClasses:o,sizeStyles:c}=Ee(e),{textColorClasses:v,textColorStyles:m}=de($(e,"color")),{textColorClasses:h,textColorStyles:u}=de($(e,"bgColor")),{intersectionRef:d,isIntersecting:x}=mn(),{resizeRef:b,contentRect:C}=Tt(),S=f(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),p=f(()=>Number(e.width)),w=f(()=>c.value?Number(e.size):C.value?C.value.width:Math.max(p.value,32)),O=f(()=>t/(1-p.value/w.value)*2),A=f(()=>p.value/w.value*O.value),W=f(()=>P((100-S.value)/100*i));return Wt(()=>{d.value=s.value,b.value=s.value}),z(()=>r(e.tag,{ref:s,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":x.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},l.value,o.value,v.value,e.class],style:[c.value,m.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:S.value},{default:()=>[r("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${O.value} ${O.value}`},[r("circle",{class:["v-progress-circular__underlay",h.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":A.value,"stroke-dasharray":i,"stroke-dashoffset":0},null),r("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":A.value,"stroke-dasharray":i,"stroke-dashoffset":W.value},null)]),n.default&&r("div",{class:"v-progress-circular__content"},[n.default({value:S.value})])]})),{}}}),vt=g({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function ft(e){return{dimensionStyles:f(()=>({height:P(e.height),maxHeight:P(e.maxHeight),maxWidth:P(e.maxWidth),minHeight:P(e.minHeight),minWidth:P(e.minWidth),width:P(e.width)}))}}const De={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},yn=g({location:String},"location");function bn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=Xe();return{locationStyles:f(()=>{if(!e.location)return{};const{side:s,align:l}=en(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function o(v){return n?n(v):0}const c={};return s!=="center"&&(a?c[De[s]]=`calc(100% - ${o(s)}px)`:c[s]=0),l!=="center"?a?c[De[l]]=`calc(100% - ${o(l)}px)`:c[l]=0:(s==="center"?c.top=c.left="50%":c[{top:"left",bottom:"left",left:"top",right:"top"}[s]]="50%",c.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[s]),c})}}const pn=g({loading:[Boolean,String]},"loader");function _n(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{loaderClasses:f(()=>({[`${a}--loading`]:e.loading}))}}const xn=["static","relative","fixed","absolute","sticky"],Cn=g({position:{type:String,validator:e=>xn.includes(e)}},"position");function Sn(e){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:G();return{positionClasses:f(()=>e.position?`${a}--${e.position}`:void 0)}}function wn(e,a){const n=jt("RouterLink"),t=f(()=>!!(e.href||e.to)),i=f(()=>(t==null?void 0:t.value)||Ae(a,"click")||Ae(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:i,href:$(e,"href")};const s=e.to?n.useLink(e):void 0;return{isLink:t,isClickable:i,route:s==null?void 0:s.route,navigate:s==null?void 0:s.navigate,isActive:s&&f(()=>{var l,o;return e.exact?(l=s.isExactActive)==null?void 0:l.value:(o=s.isActive)==null?void 0:o.value}),href:f(()=>e.to?s==null?void 0:s.route.value.href:e.href)}}const kn=g({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function In(e,a){M(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&a&&Je(()=>{a(!0)})},{immediate:!0})}const ve=Symbol("rippleStop"),Vn=80;function Ge(e,a){e.style.transform=a,e.style.webkitTransform=a}function fe(e){return e.constructor.name==="TouchEvent"}function mt(e){return e.constructor.name==="KeyboardEvent"}const Pn=function(e,a){var h;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,i=0;if(!mt(e)){const u=a.getBoundingClientRect(),d=fe(e)?e.touches[e.touches.length-1]:e;t=d.clientX-u.left,i=d.clientY-u.top}let s=0,l=.3;(h=a._ripple)!=null&&h.circle?(l=.15,s=a.clientWidth/2,s=n.center?s:s+Math.sqrt((t-s)**2+(i-s)**2)/4):s=Math.sqrt(a.clientWidth**2+a.clientHeight**2)/2;const o=`${(a.clientWidth-s*2)/2}px`,c=`${(a.clientHeight-s*2)/2}px`,v=n.center?o:`${t-s}px`,m=n.center?c:`${i-s}px`;return{radius:s,scale:l,x:v,y:m,centerX:o,centerY:c}},le={show(e,a){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=a==null?void 0:a._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),i=document.createElement("span");t.appendChild(i),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:s,scale:l,x:o,y:c,centerX:v,centerY:m}=Pn(e,a,n),h=`${s*2}px`;i.className="v-ripple__animation",i.style.width=h,i.style.height=h,a.appendChild(t);const u=window.getComputedStyle(a);u&&u.position==="static"&&(a.style.position="relative",a.dataset.previousPosition="static"),i.classList.add("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--visible"),Ge(i,`translate(${o}, ${c}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout(()=>{i.classList.remove("v-ripple__animation--enter"),i.classList.add("v-ripple__animation--in"),Ge(i,`translate(${v}, ${m}) scale3d(1,1,1)`)},0)},hide(e){var s;if(!((s=e==null?void 0:e._ripple)!=null&&s.enabled))return;const a=e.getElementsByClassName("v-ripple__animation");if(a.length===0)return;const n=a[a.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),i=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var o;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((o=n.parentNode)==null?void 0:o.parentNode)===e&&e.removeChild(n.parentNode)},300)},i)}};function gt(e){return typeof e>"u"||!!e}function U(e){const a={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[ve])){if(e[ve]=!0,fe(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(a.center=n._ripple.centered||mt(e),n._ripple.class&&(a.class=n._ripple.class),fe(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{le.show(e,n,a)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},Vn)}else le.show(e,n,a)}}function We(e){e[ve]=!0}function E(e){const a=e.currentTarget;if(a!=null&&a._ripple){if(window.clearTimeout(a._ripple.showTimer),e.type==="touchend"&&a._ripple.showTimerCommit){a._ripple.showTimerCommit(),a._ripple.showTimerCommit=null,a._ripple.showTimer=window.setTimeout(()=>{E(e)});return}window.setTimeout(()=>{a._ripple&&(a._ripple.touched=!1)}),le.hide(a)}}function ht(e){const a=e.currentTarget;a!=null&&a._ripple&&(a._ripple.showTimerCommit&&(a._ripple.showTimerCommit=null),window.clearTimeout(a._ripple.showTimer))}let Y=!1;function yt(e){!Y&&(e.keyCode===Oe.enter||e.keyCode===Oe.space)&&(Y=!0,U(e))}function bt(e){Y=!1,E(e)}function pt(e){Y&&(Y=!1,E(e))}function _t(e,a,n){const{value:t,modifiers:i}=a,s=gt(t);if(s||le.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=s,e._ripple.centered=i.center,e._ripple.circle=i.circle,qt(t)&&t.class&&(e._ripple.class=t.class),s&&!n){if(i.stop){e.addEventListener("touchstart",We,{passive:!0}),e.addEventListener("mousedown",We);return}e.addEventListener("touchstart",U,{passive:!0}),e.addEventListener("touchend",E,{passive:!0}),e.addEventListener("touchmove",ht,{passive:!0}),e.addEventListener("touchcancel",E),e.addEventListener("mousedown",U),e.addEventListener("mouseup",E),e.addEventListener("mouseleave",E),e.addEventListener("keydown",yt),e.addEventListener("keyup",bt),e.addEventListener("blur",pt),e.addEventListener("dragstart",E,{passive:!0})}else!s&&n&&xt(e)}function xt(e){e.removeEventListener("mousedown",U),e.removeEventListener("touchstart",U),e.removeEventListener("touchend",E),e.removeEventListener("touchmove",ht),e.removeEventListener("touchcancel",E),e.removeEventListener("mouseup",E),e.removeEventListener("mouseleave",E),e.removeEventListener("keydown",yt),e.removeEventListener("keyup",bt),e.removeEventListener("dragstart",E),e.removeEventListener("blur",pt)}function En(e,a){_t(e,a,!1)}function Bn(e){delete e._ripple,xt(e)}function Tn(e,a){if(a.value===a.oldValue)return;const n=gt(a.oldValue);_t(e,a,n)}const Ct={mounted:En,unmounted:Bn,updated:Tn},Ln=g({active:{type:Boolean,default:void 0},symbol:{type:null,default:dt},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:q,appendIcon:q,block:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ze(),...N(),...tt(),...vt(),...Se(),...ot(),...pn(),...yn(),...Cn(),...ke(),...kn(),...Pe(),...D({tag:"button"}),...K(),...st({variant:"elevated"})},"VBtn"),je=I()({name:"VBtn",directives:{Ripple:Ct},props:Ln(),emits:{"group:selected":e=>!0},setup(e,a){let{attrs:n,slots:t}=a;const{themeClasses:i}=Q(e),{borderClasses:s}=et(e),{colorClasses:l,colorStyles:o,variantClasses:c}=on(e),{densityClasses:v}=nt(e),{dimensionStyles:m}=ft(e),{elevationClasses:h}=we(e),{loaderClasses:u}=_n(e),{locationStyles:d}=bn(e),{positionClasses:x}=Sn(e),{roundedClasses:b}=Ie(e),{sizeClasses:C,sizeStyles:S}=Ee(e),p=rt(e,e.symbol,!1),w=wn(e,n),O=f(()=>{var _;return e.active!==void 0?e.active:w.isLink.value?(_=w.isActive)==null?void 0:_.value:p==null?void 0:p.isSelected.value}),A=f(()=>(p==null?void 0:p.disabled.value)||e.disabled),W=f(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),Z=f(()=>{if(e.value!==void 0)return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function y(_){var V;A.value||w.isLink.value&&(_.metaKey||_.ctrlKey||_.shiftKey||_.button!==0||n.target==="_blank")||((V=w.navigate)==null||V.call(w,_),p==null||p.toggle())}return In(w,p==null?void 0:p.select),z(()=>{var Te,Le;const _=w.isLink.value?"a":e.tag,V=!!(e.prependIcon||t.prepend),ee=!!(e.appendIcon||t.append),j=!!(e.icon&&e.icon!==!0),Be=(p==null?void 0:p.isSelected.value)&&(!w.isLink.value||((Te=w.isActive)==null?void 0:Te.value))||!p||((Le=w.isActive)==null?void 0:Le.value);return F(r(_,{type:_==="a"?void 0:"button",class:["v-btn",p==null?void 0:p.selectedClass.value,{"v-btn--active":O.value,"v-btn--block":e.block,"v-btn--disabled":A.value,"v-btn--elevated":W.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--stacked":e.stacked},i.value,s.value,Be?l.value:void 0,v.value,h.value,u.value,x.value,b.value,C.value,c.value,e.class],style:[Be?o.value:void 0,m.value,d.value,S.value,e.style],disabled:A.value||void 0,href:w.href.value,onClick:y,value:Z.value},{default:()=>{var ze;return[ln(!0,"v-btn"),!e.icon&&V&&r("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?r(re,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):r(R,{key:"prepend-icon",icon:e.prependIcon},null)]),r("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&j?r(R,{key:"content-icon",icon:e.icon},null):r(re,{key:"content-defaults",disabled:!j,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var $e;return[(($e=t.default)==null?void 0:$e.call(t))??e.text]}})]),!e.icon&&ee&&r("span",{key:"append",class:"v-btn__append"},[t.append?r(re,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):r(R,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&r("span",{key:"loader",class:"v-btn__loader"},[((ze=t.loader)==null?void 0:ze.call(t))??r(hn,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[_e("ripple"),!A.value&&e.ripple,null]])}),{}}});const X=Symbol.for("vuetify:v-expansion-panel"),zn=["default","accordion","inset","popout"],$n=g({color:String,variant:{type:String,default:"default",validator:e=>zn.includes(e)},readonly:Boolean,...N(),...lt(),...D(),...K()},"VExpansionPanels"),Nn=I()({name:"VExpansionPanels",props:$n(),emits:{"update:modelValue":e=>!0},setup(e,a){let{slots:n}=a;ut(e,X);const{themeClasses:t}=Q(e),i=f(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return me({VExpansionPanel:{color:$(e,"color")},VExpansionPanelTitle:{readonly:$(e,"readonly")}}),z(()=>r(e.tag,{class:["v-expansion-panels",t.value,i.value,e.class],style:e.style},n)),{}}}),Rn=g({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function T(e,a,n){return I()({name:e,props:Rn({mode:n,origin:a}),setup(t,i){let{slots:s}=i;const l={onBeforeEnter(o){t.origin&&(o.style.transformOrigin=t.origin)},onLeave(o){if(t.leaveAbsolute){const{offsetTop:c,offsetLeft:v,offsetWidth:m,offsetHeight:h}=o;o._transitionInitialStyles={position:o.style.position,top:o.style.top,left:o.style.left,width:o.style.width,height:o.style.height},o.style.position="absolute",o.style.top=`${c}px`,o.style.left=`${v}px`,o.style.width=`${m}px`,o.style.height=`${h}px`}t.hideOnLeave&&o.style.setProperty("display","none","important")},onAfterLeave(o){if(t.leaveAbsolute&&(o!=null&&o._transitionInitialStyles)){const{position:c,top:v,left:m,width:h,height:u}=o._transitionInitialStyles;delete o._transitionInitialStyles,o.style.position=c||"",o.style.top=v||"",o.style.left=m||"",o.style.width=h||"",o.style.height=u||""}}};return()=>{const o=t.group?Ft:xe;return Ce(o,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:l},s.default)}}})}function St(e,a){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return I()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,i){let{slots:s}=i;return()=>Ce(xe,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:a},s.default)}})}function wt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Ut(`offset-${n}`);return{onBeforeEnter(l){l._parent=l.parentNode,l._initialStyle={transition:l.style.transition,overflow:l.style.overflow,[n]:l.style[n]}},onEnter(l){const o=l._initialStyle;l.style.setProperty("transition","none","important"),l.style.overflow="hidden";const c=`${l[t]}px`;l.style[n]="0",l.offsetHeight,l.style.transition=o.transition,e&&l._parent&&l._parent.classList.add(e),requestAnimationFrame(()=>{l.style[n]=c})},onAfterEnter:s,onEnterCancelled:s,onLeave(l){l._initialStyle={transition:"",overflow:l.style.overflow,[n]:l.style[n]},l.style.overflow="hidden",l.style[n]=`${l[t]}px`,l.offsetHeight,requestAnimationFrame(()=>l.style[n]="0")},onAfterLeave:i,onLeaveCancelled:i};function i(l){e&&l._parent&&l._parent.classList.remove(e),s(l)}function s(l){const o=l._initialStyle[n];l.style.overflow=l._initialStyle.overflow,o!=null&&(l.style[n]=o),delete l._initialStyle}}T("fab-transition","center center","out-in");T("dialog-bottom-transition");T("dialog-top-transition");T("fade-transition");T("scale-transition");T("scroll-x-transition");T("scroll-x-reverse-transition");T("scroll-y-transition");T("scroll-y-reverse-transition");T("slide-x-transition");T("slide-x-reverse-transition");T("slide-y-transition");T("slide-y-reverse-transition");const An=St("expand-transition",wt());St("expand-x-transition",wt("",!0));const kt=g({eager:Boolean},"lazy");function On(e,a){const n=H(!1),t=f(()=>n.value||e.eager||a.value);M(a,()=>n.value=!0);function i(){e.eager||(n.value=!1)}return{isBooted:n,hasContent:t,onAfterLeave:i}}const Hn=g({...N(),...kt()},"VExpansionPanelText"),se=I()({name:"VExpansionPanelText",props:Hn(),setup(e,a){let{slots:n}=a;const t=he(X);if(!t)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:i,onAfterLeave:s}=On(e,t.isSelected);return z(()=>r(An,{onAfterLeave:s},{default:()=>{var l;return[F(r("div",{class:["v-expansion-panel-text",e.class],style:e.style},[n.default&&i.value&&r("div",{class:"v-expansion-panel-text__wrapper"},[(l=n.default)==null?void 0:l.call(n)])]),[[Ke,t.isSelected.value]])]}})),{}}}),It=g({color:String,expandIcon:{type:q,default:"$expand"},collapseIcon:{type:q,default:"$collapse"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,...N()},"VExpansionPanelTitle"),ie=I()({name:"VExpansionPanelTitle",directives:{Ripple:Ct},props:It(),setup(e,a){let{slots:n}=a;const t=he(X);if(!t)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:i,backgroundColorStyles:s}=at(e,"color"),l=f(()=>({collapseIcon:e.collapseIcon,disabled:t.disabled.value,expanded:t.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return z(()=>{var o;return F(r("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":t.isSelected.value},i.value,e.class],style:[s.value,e.style],type:"button",tabindex:t.disabled.value?-1:void 0,disabled:t.disabled.value,"aria-expanded":t.isSelected.value,onClick:e.readonly?void 0:t.toggle},[r("span",{class:"v-expansion-panel-title__overlay"},null),(o=n.default)==null?void 0:o.call(n,l.value),!e.hideActions&&r("span",{class:"v-expansion-panel-title__icon"},[n.actions?n.actions(l.value):r(R,{icon:t.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[_e("ripple"),e.ripple]])}),{}}}),Mn=g({title:String,text:String,bgColor:String,...N(),...Se(),...ot(),...kt(),...ke(),...D(),...It()},"VExpansionPanel"),ue=I()({name:"VExpansionPanel",props:Mn(),emits:{"group:selected":e=>!0},setup(e,a){let{slots:n}=a;const t=rt(e,X),{backgroundColorClasses:i,backgroundColorStyles:s}=at(e,"bgColor"),{elevationClasses:l}=we(e),{roundedClasses:o}=Ie(e),c=f(()=>(t==null?void 0:t.disabled.value)||e.disabled),v=f(()=>t.group.items.value.reduce((u,d,x)=>(t.group.selected.value.includes(d.id)&&u.push(x),u),[])),m=f(()=>{const u=t.group.items.value.findIndex(d=>d.id===t.id);return!t.isSelected.value&&v.value.some(d=>d-u===1)}),h=f(()=>{const u=t.group.items.value.findIndex(d=>d.id===t.id);return!t.isSelected.value&&v.value.some(d=>d-u===-1)});return ge(X,t),z(()=>{const u=!!(n.text||e.text),d=!!(n.title||e.title);return r(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":t.isSelected.value,"v-expansion-panel--before-active":m.value,"v-expansion-panel--after-active":h.value,"v-expansion-panel--disabled":c.value},o.value,i.value,e.class],style:[s.value,e.style]},{default:()=>{var x;return[r("div",{class:["v-expansion-panel__shadow",...l.value]},null),d&&r(ie,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[n.title?n.title():e.title]}),u&&r(se,{key:"text",eager:e.eager},{default:()=>[n.text?n.text():e.text]}),(x=n.default)==null?void 0:x.call(n)]}})}),{}}});const Dn=g({fluid:{type:Boolean,default:!1},...N(),...D()},"VContainer"),Vt=I()({name:"VContainer",props:Dn(),setup(e,a){let{slots:n}=a;const{rtlClasses:t}=Xe();return z(()=>r(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),Gn=B("h3",null,"Cerimonia",-1),Wn=B("br",null,null,-1),jn=B("h3",null,"Ricevimento",-1),qn=B("br",null,null,-1),Fn=B("h3",null,"Lista nozze",-1),Un=B("br",null,null,-1),Yn=B("br",null,null,-1);function Xn(e,a,n,t,i,s){return ne(),ae(Vt,{class:"d-flex flex-column justify-center align-center",style:{"background-color":"rgba(94, 119, 69, 0.7)","max-width":"none"}},{default:k(()=>[r(Nn,{accordion:""},{default:k(()=>[r(ue,{style:{"background-color":"rgba(94, 119, 69, 0.7)"},onClick:s.scrollIntoView},{default:k(()=>[r(ie,null,{default:k(()=>[Gn,r(R,{icon:"fas fa-church",size:"small",class:"ml-4"})]),_:1}),r(se,null,{default:k(()=>[L(" Chiesa dell'Annunciazione "),Wn,L(" Via Abruzzi (Marigolda), Curno "),(ne(),ae(je,{block:"",variant:"outlined",href:i.directions[0].link,class:"my-2",key:i.directions[0].title},{default:k(()=>[L(" Indicazioni "),r(R,{icon:"fas fa-route",size:"small",class:"ml-4"})]),_:1},8,["href"]))]),_:1})]),_:1},8,["onClick"]),r(ue,{style:{"background-color":"rgba(94, 119, 69, 0.7)"},onClick:s.scrollIntoView},{default:k(()=>[r(ie,null,{default:k(()=>[jn,r(R,{icon:"fas fa-utensils",size:"small",class:"ml-4"})]),_:1}),r(se,null,{default:k(()=>[L(" Agriturismo Larice "),qn,L(" Strada per San Lucio, Clusone "),(ne(),ae(je,{block:"",variant:"outlined",href:i.directions[1].link,class:"my-2",key:i.directions[1].title},{default:k(()=>[L(" Indicazioni "),r(R,{icon:"fas fa-route",size:"small",class:"ml-4"})]),_:1},8,["href"]))]),_:1})]),_:1},8,["onClick"]),r(ue,{style:{"background-color":"rgba(94, 119, 69, 0.7)"},onClick:s.scrollIntoView},{default:k(()=>[r(ie,null,{default:k(()=>[Fn,r(R,{icon:"fas fa-gift",size:"small",class:"ml-4"})]),_:1}),r(se,null,{default:k(()=>[L(" IBAN: IT 00 A 00000 00000 000000000000 "),Un,L(" Intestato a: Lisa & Mattia "),Yn,L(" Causale: Lista nozze ")]),_:1})]),_:1},8,["onClick"])]),_:1})]),_:1})}const Jn=Qe(nn,[["render",Xn]]);function Kn(e){return{aspectStyles:f(()=>{const a=Number(e.aspectRatio);return a?{paddingBottom:String(1/a*100)+"%"}:void 0})}}const Pt=g({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...N(),...vt()},"VResponsive"),qe=I()({name:"VResponsive",props:Pt(),setup(e,a){let{slots:n}=a;const{aspectStyles:t}=Kn(e),{dimensionStyles:i}=ft(e);return z(()=>{var s;return r("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[i.value,e.style]},[r("div",{class:"v-responsive__sizer",style:t.value},null),(s=n.additional)==null?void 0:s.call(n),n.default&&r("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),Qn=g({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),te=(e,a)=>{let{slots:n}=a;const{transition:t,disabled:i,...s}=e,{component:l=xe,...o}=typeof t=="object"?t:{};return Ce(l,be(typeof t=="string"?{name:i?"":t}:o,s,{disabled:i}),n)};function Zn(e,a){if(!pe)return;const n=a.modifiers||{},t=a.value,{handler:i,options:s}=typeof t=="object"?t:{handler:t,options:{}},l=new IntersectionObserver(function(){var h;let o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0;const v=(h=e._observe)==null?void 0:h[a.instance.$.uid];if(!v)return;const m=o.some(u=>u.isIntersecting);i&&(!n.quiet||v.init)&&(!n.once||m||v.init)&&i(m,o,c),m&&n.once?Et(e,a):v.init=!0},s);e._observe=Object(e._observe),e._observe[a.instance.$.uid]={init:!1,observer:l},l.observe(e)}function Et(e,a){var t;const n=(t=e._observe)==null?void 0:t[a.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[a.instance.$.uid])}const ea={mounted:Zn,unmounted:Et},ta=ea,na=g({alt:String,cover:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},srcset:String,...Pt(),...N(),...Qn()},"VImg"),aa=I()({name:"VImg",directives:{intersect:ta},props:na(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,a){let{emit:n,slots:t}=a;const i=H(""),s=oe(),l=H(e.eager?"loading":"idle"),o=H(),c=H(),v=f(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),m=f(()=>v.value.aspect||o.value/c.value||0);M(()=>e.src,()=>{h(l.value!=="idle")}),M(m,(y,_)=>{!y&&_&&s.value&&C(s.value)}),Yt(()=>h());function h(y){if(!(e.eager&&y)&&!(pe&&!y&&!e.eager)){if(l.value="loading",v.value.lazySrc){const _=new Image;_.src=v.value.lazySrc,C(_,null)}v.value.src&&Je(()=>{var _,V;if(n("loadstart",((_=s.value)==null?void 0:_.currentSrc)||v.value.src),(V=s.value)!=null&&V.complete){if(s.value.naturalWidth||d(),l.value==="error")return;m.value||C(s.value,null),u()}else m.value||C(s.value),x()})}}function u(){var y;x(),l.value="loaded",n("load",((y=s.value)==null?void 0:y.currentSrc)||v.value.src)}function d(){var y;l.value="error",n("error",((y=s.value)==null?void 0:y.currentSrc)||v.value.src)}function x(){const y=s.value;y&&(i.value=y.currentSrc||y.src)}let b=-1;function C(y){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const V=()=>{clearTimeout(b);const{naturalHeight:ee,naturalWidth:j}=y;ee||j?(o.value=j,c.value=ee):!y.complete&&l.value==="loading"&&_!=null?b=window.setTimeout(V,_):(y.currentSrc.endsWith(".svg")||y.currentSrc.startsWith("data:image/svg+xml"))&&(o.value=1,c.value=1)};V()}const S=f(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),p=()=>{var V;if(!v.value.src||l.value==="idle")return null;const y=r("img",{class:["v-img__img",S.value],src:v.value.src,srcset:v.value.srcset,alt:e.alt,sizes:e.sizes,ref:s,onLoad:u,onError:d},null),_=(V=t.sources)==null?void 0:V.call(t);return r(te,{transition:e.transition,appear:!0},{default:()=>[F(_?r("picture",{class:"v-img__picture"},[_,y]):y,[[Ke,l.value==="loaded"]])]})},w=()=>r(te,{transition:e.transition},{default:()=>[v.value.lazySrc&&l.value!=="loaded"&&r("img",{class:["v-img__img","v-img__img--preload",S.value],src:v.value.lazySrc,alt:e.alt},null)]}),O=()=>t.placeholder?r(te,{transition:e.transition,appear:!0},{default:()=>[(l.value==="loading"||l.value==="error"&&!t.error)&&r("div",{class:"v-img__placeholder"},[t.placeholder()])]}):null,A=()=>t.error?r(te,{transition:e.transition,appear:!0},{default:()=>[l.value==="error"&&r("div",{class:"v-img__error"},[t.error()])]}):null,W=()=>e.gradient?r("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,Z=H(!1);{const y=M(m,_=>{_&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Z.value=!0})}),y())})}return z(()=>{const[y]=qe.filterProps(e);return F(r(qe,be({class:["v-img",{"v-img--booting":!Z.value},e.class],style:[{width:P(e.width==="auto"?o.value:e.width)},e.style]},y,{aspectRatio:m.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>r(Ue,null,[r(p,null,null),r(w,null,null),r(W,null,null),r(O,null,null),r(A,null,null)]),default:t.default}),[[_e("intersect"),{handler:h,options:e.options},null,{once:!0}]])}),{currentSrc:i,image:s,state:l,naturalWidth:o,naturalHeight:c}}}),Bt=e=>(Jt("data-v-d09f1dbd"),e=e(),Kt(),e),sa={class:"d-flex fill-height justify-center align-end text-gray pb-4"},ia={style:{"background-color":"azure",opacity:"0.7","border-radius":"10px",padding:"10px"},class:"d-flex flex-column justify-center align-center"},la=Bt(()=>B("h1",{class:"text-h4 font-weight-bold mb-4 name-font"},"Lisa & Mattia",-1)),oa=Bt(()=>B("h4",{class:"subheading text-center"},[L(" 31 Maggio 2024 "),B("br"),L(" Curno, Marigolda "),B("br"),L(" h. 11.00 ")],-1)),ra={data(){return{screenHeight:window.innerHeight}}},ua=Xt({...ra,__name:"Home",setup(e){return(a,n)=>(ne(),ae(Vt,{class:"ma-0 pa-0",style:{"max-width":"none"}},{default:k(()=>[r(aa,{height:a.screenHeight,"aspect-ratio":"4/3",cover:"",src:tn,style:{opacity:"0.7"}},{default:k(()=>[B("div",sa,[B("div",ia,[la,oa,r(R,{icon:"fas fa-angles-down",size:"large",class:"mt-4 moving-arrows"})])])]),_:1},8,["height"]),r(Jn)]),_:1}))}});const va=Qe(ua,[["__scopeId","data-v-d09f1dbd"]]);export{va as default};
