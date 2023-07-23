import{o as te,ag as de,au as fe,bh as X,aZ as me,bi as ve,K as Z,d0 as pe,s as se,bc as _,P as q,d1 as ye,d2 as ge,cs as be,d3 as Ce,b2 as U,A as J,B as K,d as Y,b as R,d4 as V,a1 as C,ao as he,ad as ke,J as we,ae as G,d5 as Ee,O as A,f as O,c as W,g as H,n as k,u as o,t as Me,w as D,k as j,l as Be,q as Se,S as x,Q as le,a4 as ne,d6 as De,d7 as Ie,aW as Te,L as Le,at as Q,r as I,d8 as $e,y as Oe,al as Ae,d9 as Fe,da as ee,bd as Pe,bg as oe,am as ze,$ as Ne,ap as Re,aa as Ye,bq as He,a0 as Ue,a2 as Ve,a3 as We,a7 as Xe}from"./index-86793bc5.js";import{U as ae}from"./event-ed688fce.js";import{a as qe}from"./scroll-5b1422a6.js";const Ke=(e,s,c)=>{let a={offsetX:0,offsetY:0};const r=l=>{const i=l.clientX,v=l.clientY,{offsetX:f,offsetY:p}=a,t=e.value.getBoundingClientRect(),m=t.left,w=t.top,F=t.width,P=t.height,z=document.documentElement.clientWidth,T=document.documentElement.clientHeight,N=-m+f,L=-w+p,E=z-m-F+f,M=T-w-P+p,$=h=>{const n=Math.min(Math.max(f+h.clientX-i,N),E),b=Math.min(Math.max(p+h.clientY-v,L),M);a={offsetX:n,offsetY:b},e.value.style.transform=`translate(${X(n)}, ${X(b)})`},y=()=>{document.removeEventListener("mousemove",$),document.removeEventListener("mouseup",y)};document.addEventListener("mousemove",$),document.addEventListener("mouseup",y)},d=()=>{s.value&&e.value&&s.value.addEventListener("mousedown",r)},u=()=>{s.value&&e.value&&s.value.removeEventListener("mousedown",r)};te(()=>{de(()=>{c.value?d():u()})}),fe(()=>{u()})},je=(e,s={})=>{me(e)||ve("[useLockscreen]","You need to pass a ref param to this function");const c=s.ns||Z("popup"),a=pe(()=>c.bm("parent","hidden"));if(!se||_(document.body,a.value))return;let r=0,d=!1,u="0";const l=()=>{setTimeout(()=>{Ce(document==null?void 0:document.body,a.value),d&&document&&(document.body.style.width=u)},200)};q(e,i=>{if(!i){l();return}d=!_(document.body,a.value),d&&(u=document.body.style.width),r=qe(c.namespace.value);const v=document.documentElement.clientHeight<document.body.scrollHeight,f=ye(document.body,"overflowY");r>0&&(v||f==="scroll")&&d&&(document.body.style.width=`calc(100% - ${r}px)`),ge(document.body,a.value)}),be(()=>l())},ue=e=>{if(!e)return{onClick:U,onMousedown:U,onMouseup:U};let s=!1,c=!1;return{onClick:u=>{s&&c&&e(u),s=c=!1},onMousedown:u=>{s=u.target===u.currentTarget},onMouseup:u=>{c=u.target===u.currentTarget}}},xe=J({mask:{type:Boolean,default:!0},customMaskEvent:{type:Boolean,default:!1},overlayClass:{type:K([String,Array,Object])},zIndex:{type:K([String,Number])}}),Ze={click:e=>e instanceof MouseEvent},Je="overlay";var _e=Y({name:"ElOverlay",props:xe,emits:Ze,setup(e,{slots:s,emit:c}){const a=Z(Je),r=i=>{c("click",i)},{onClick:d,onMousedown:u,onMouseup:l}=ue(e.customMaskEvent?void 0:r);return()=>e.mask?R("div",{class:[a.b(),e.overlayClass],style:{zIndex:e.zIndex},onClick:d,onMousedown:u,onMouseup:l},[C(s,"default")],V.STYLE|V.CLASS|V.PROPS,["onClick","onMouseup","onMousedown"]):he("div",{class:e.overlayClass,style:{zIndex:e.zIndex,position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px"}},[C(s,"default")])}});const Ge=_e,re=Symbol("dialogInjectionKey"),ie=J({center:{type:Boolean,default:!1},alignCenter:{type:Boolean,default:!1},closeIcon:{type:ke},customClass:{type:String,default:""},draggable:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},showClose:{type:Boolean,default:!0},title:{type:String,default:""}}),Qe={close:()=>!0},eo=["aria-label"],oo=["id"],to=Y({name:"ElDialogContent"}),so=Y({...to,props:ie,emits:Qe,setup(e){const s=e,{t:c}=we(),{Close:a}=De,{dialogRef:r,headerRef:d,bodyId:u,ns:l,style:i}=G(re),{focusTrapRef:v}=G(Ee),f=Ie(v,r),p=A(()=>s.draggable);return Ke(r,d,p),(t,m)=>(O(),W("div",{ref:o(f),class:k([o(l).b(),o(l).is("fullscreen",t.fullscreen),o(l).is("draggable",o(p)),o(l).is("align-center",t.alignCenter),{[o(l).m("center")]:t.center},t.customClass]),style:le(o(i)),tabindex:"-1"},[H("header",{ref_key:"headerRef",ref:d,class:k(o(l).e("header"))},[C(t.$slots,"header",{},()=>[H("span",{role:"heading",class:k(o(l).e("title"))},Me(t.title),3)]),t.showClose?(O(),W("button",{key:0,"aria-label":o(c)("el.dialog.close"),class:k(o(l).e("headerbtn")),type:"button",onClick:m[0]||(m[0]=w=>t.$emit("close"))},[R(o(Se),{class:k(o(l).e("close"))},{default:D(()=>[(O(),j(Be(t.closeIcon||o(a))))]),_:1},8,["class"])],10,eo)):x("v-if",!0)],2),H("div",{id:o(u),class:k(o(l).e("body"))},[C(t.$slots,"default")],10,oo),t.$slots.footer?(O(),W("footer",{key:0,class:k(o(l).e("footer"))},[C(t.$slots,"footer")],2)):x("v-if",!0)],6))}});var lo=ne(so,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog-content.vue"]]);const no=J({...ie,appendToBody:{type:Boolean,default:!1},beforeClose:{type:K(Function)},destroyOnClose:{type:Boolean,default:!1},closeOnClickModal:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},modal:{type:Boolean,default:!0},openDelay:{type:Number,default:0},closeDelay:{type:Number,default:0},top:{type:String},modelValue:{type:Boolean,default:!1},modalClass:String,width:{type:[String,Number]},zIndex:{type:Number},trapFocus:{type:Boolean,default:!1}}),ao={open:()=>!0,opened:()=>!0,close:()=>!0,closed:()=>!0,[ae]:e=>Te(e),openAutoFocus:()=>!0,closeAutoFocus:()=>!0},uo=(e,s)=>{const a=Ae().emit,{nextZIndex:r}=Le();let d="";const u=Q(),l=Q(),i=I(!1),v=I(!1),f=I(!1),p=I(e.zIndex||r());let t,m;const w=$e("namespace",Fe),F=A(()=>{const g={},S=`--${w.value}-dialog`;return e.fullscreen||(e.top&&(g[`${S}-margin-top`]=e.top),e.width&&(g[`${S}-width`]=X(e.width))),g}),P=A(()=>e.alignCenter?{display:"flex"}:{});function z(){a("opened")}function T(){a("closed"),a(ae,!1),e.destroyOnClose&&(f.value=!1)}function N(){a("close")}function L(){m==null||m(),t==null||t(),e.openDelay&&e.openDelay>0?{stop:t}=ee(()=>y(),e.openDelay):y()}function E(){t==null||t(),m==null||m(),e.closeDelay&&e.closeDelay>0?{stop:m}=ee(()=>h(),e.closeDelay):h()}function M(){function g(S){S||(v.value=!0,i.value=!1)}e.beforeClose?e.beforeClose(g):E()}function $(){e.closeOnClickModal&&M()}function y(){se&&(i.value=!0)}function h(){i.value=!1}function n(){a("openAutoFocus")}function b(){a("closeAutoFocus")}function B(g){var S;((S=g.detail)==null?void 0:S.focusReason)==="pointer"&&g.preventDefault()}e.lockScroll&&je(i);function ce(){e.closeOnPressEscape&&M()}return q(()=>e.modelValue,g=>{g?(v.value=!1,L(),f.value=!0,p.value=e.zIndex?p.value++:r(),Oe(()=>{a("open"),s.value&&(s.value.scrollTop=0)})):i.value&&E()}),q(()=>e.fullscreen,g=>{s.value&&(g?(d=s.value.style.transform,s.value.style.transform=""):s.value.style.transform=d)}),te(()=>{e.modelValue&&(i.value=!0,f.value=!0,L())}),{afterEnter:z,afterLeave:T,beforeLeave:N,handleClose:M,onModalClick:$,close:E,doClose:h,onOpenAutoFocus:n,onCloseAutoFocus:b,onCloseRequested:ce,onFocusoutPrevented:B,titleId:u,bodyId:l,closed:v,style:F,overlayDialogStyle:P,rendered:f,visible:i,zIndex:p}},ro=["aria-label","aria-labelledby","aria-describedby"],io=Y({name:"ElDialog",inheritAttrs:!1}),co=Y({...io,props:no,emits:ao,setup(e,{expose:s}){const c=e,a=Pe();oe({scope:"el-dialog",from:"the title slot",replacement:"the header slot",version:"3.0.0",ref:"https://element-plus.org/en-US/component/dialog.html#slots"},A(()=>!!a.title)),oe({scope:"el-dialog",from:"custom-class",replacement:"class",version:"2.3.0",ref:"https://element-plus.org/en-US/component/dialog.html#attributes",type:"Attribute"},A(()=>!!c.customClass));const r=Z("dialog"),d=I(),u=I(),l=I(),{visible:i,titleId:v,bodyId:f,style:p,overlayDialogStyle:t,rendered:m,zIndex:w,afterEnter:F,afterLeave:P,beforeLeave:z,handleClose:T,onModalClick:N,onOpenAutoFocus:L,onCloseAutoFocus:E,onCloseRequested:M,onFocusoutPrevented:$}=uo(c,d);ze(re,{dialogRef:d,headerRef:u,bodyId:f,ns:r,rendered:m,style:p});const y=ue(N),h=A(()=>c.draggable&&!c.fullscreen);return s({visible:i,dialogContentRef:l}),(n,b)=>(O(),j(We,{to:"body",disabled:!n.appendToBody},[R(Ve,{name:"dialog-fade",onAfterEnter:o(F),onAfterLeave:o(P),onBeforeLeave:o(z),persisted:""},{default:D(()=>[Ne(R(o(Ge),{"custom-mask-event":"",mask:n.modal,"overlay-class":n.modalClass,"z-index":o(w)},{default:D(()=>[H("div",{role:"dialog","aria-modal":"true","aria-label":n.title||void 0,"aria-labelledby":n.title?void 0:o(v),"aria-describedby":o(f),class:k(`${o(r).namespace.value}-overlay-dialog`),style:le(o(t)),onClick:b[0]||(b[0]=(...B)=>o(y).onClick&&o(y).onClick(...B)),onMousedown:b[1]||(b[1]=(...B)=>o(y).onMousedown&&o(y).onMousedown(...B)),onMouseup:b[2]||(b[2]=(...B)=>o(y).onMouseup&&o(y).onMouseup(...B))},[R(o(Re),{loop:"",trapped:o(i),"focus-start-el":"container",onFocusAfterTrapped:o(L),onFocusAfterReleased:o(E),onFocusoutPrevented:o($),onReleaseRequested:o(M)},{default:D(()=>[o(m)?(O(),j(lo,Ye({key:0,ref_key:"dialogContentRef",ref:l},n.$attrs,{"custom-class":n.customClass,center:n.center,"align-center":n.alignCenter,"close-icon":n.closeIcon,draggable:o(h),fullscreen:n.fullscreen,"show-close":n.showClose,title:n.title,onClose:o(T)}),He({header:D(()=>[n.$slots.title?C(n.$slots,"title",{key:1}):C(n.$slots,"header",{key:0,close:o(T),titleId:o(v),titleClass:o(r).e("title")})]),default:D(()=>[C(n.$slots,"default")]),_:2},[n.$slots.footer?{name:"footer",fn:D(()=>[C(n.$slots,"footer")])}:void 0]),1040,["custom-class","center","align-center","close-icon","draggable","fullscreen","show-close","title","onClose"])):x("v-if",!0)]),_:3},8,["trapped","onFocusAfterTrapped","onFocusAfterReleased","onFocusoutPrevented","onReleaseRequested"])],46,ro)]),_:3},8,["mask","overlay-class","z-index"]),[[Ue,o(i)]])]),_:3},8,["onAfterEnter","onAfterLeave","onBeforeLeave"])],8,["disabled"]))}});var fo=ne(co,[["__file","/home/runner/work/element-plus/element-plus/packages/components/dialog/src/dialog.vue"]]);const yo=Xe(fo);export{Ge as E,je as a,ue as b,yo as c,Ke as u};
