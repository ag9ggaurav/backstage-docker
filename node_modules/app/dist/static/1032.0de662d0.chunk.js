(self.webpackChunkapp=self.webpackChunkapp||[]).push([["1032"],{44139(e,t,a){"use strict";a.d(t,{W:()=>ee});var r=a(31085),o=a(14041),n=a(18690),i=a(82326),l=a(96872),s=a(11618),d=a(83380),c=a(33895),m=a(93285),h=a(42899),u=a(4387),p=a(13660),g=a(15246),v=a(699),f=a(37281),b=a(14158),y=a(27593),w=a(64398),x=a(79182),k=a(72814),A=a(56005),E=a.n(A),L=a(17749),S=a(78560),C=a(96170),_=a(96814),j=a(91072);let T=(0,r.jsx)(u.A,{animation:"wave",variant:"text",height:40}),R=e=>{let{children:t}=e,{title:a,subtitle:i,entityRef:l,entityMetadata:c,tabTitle:u,hidden:A,showSourceLink:R,sourceLink:M,addons:$}=function(){let e=(0,s.YR)(),t=(0,C.gf)(_.U),a=(0,C.gf)(j.n),{"*":r=""}=(0,n.useParams)(),{title:i,setTitle:l,subtitle:c,setSubtitle:m,entityRef:h,metadata:{value:u,loading:p},entityMetadata:{value:g,loading:v}}=(0,d.V)();(0,o.useEffect)(()=>{u&&(l(u.site_name),m(()=>{let{site_description:e}=u;return e&&"None"!==e||(e=""),e}))},[u,l,m]);let f=t.getOptionalString("app.title")||"Backstage",b=g?.locationMetadata,y=!!b&&"dir"!==b.type&&"file"!==b.type,w=!p&&void 0===u,x=!v&&void 0===g||w,k=f;if(!x){let e=(0,S.U2)(h),t=a.forEntity(e).snapshot.primaryTitle,o=[];""!==r&&(o=r.replace(/\/$/,"").split("/").map(e=>e.replace(/[-_]/g," ").split(" ").map(E()).join(" "))),k=[t,...o,f].join(" | ")}return{title:i,subtitle:c,entityRef:h,entityMetadata:g,tabTitle:k,hidden:x,showSourceLink:y,sourceLink:b?.target,addons:e}}(),z=(0,k.S)(L.rQ)();if(A)return null;let{spec:N}=c||{},H=N?.lifecycle,B=c?(0,v.t)(c,y.vv):[],O=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w.S,{label:E()(c?.kind||"entity"),value:(0,r.jsx)(f.z,{color:"inherit",entityRef:l,title:c?.metadata.title,defaultKind:"Component"})}),B.length>0&&(0,r.jsx)(w.S,{label:"Owner",value:(0,r.jsx)(b.i,{color:"inherit",entityRefs:B,defaultKind:"group"})}),H?(0,r.jsx)(w.S,{label:"Lifecycle",value:String(H)}):null,R?(0,r.jsx)(w.S,{label:"",value:(0,r.jsxs)(h.A,{container:!0,direction:"column",alignItems:"center",children:[(0,r.jsx)(h.A,{style:{padding:0},item:!0,children:(0,r.jsx)(p.default,{style:{marginTop:"-25px"}})}),(0,r.jsx)(h.A,{style:{padding:0},item:!0,children:"Source"})]}),url:M}):null]});return(0,r.jsxs)(x.Y,{type:"Documentation",typeLink:z,title:a||T,subtitle:""===i?void 0:i||T,children:[(0,r.jsx)(m.A,{titleTemplate:"%s",children:(0,r.jsx)("title",{children:u})}),O,t,$.renderComponentsByLocation(g.e.Header)]})};var M=a(84893),$=a(76888),z=a(85408),N=a(12554),H=a(61128),B=a(64947),O=a(19976),I=a(60662),D=a(91042),V=a(76842),U=a(41148);function q(e){let{children:t,...a}=e,{Progress:n}=(0,H.n)().getComponents(),i=function(e){let{pluginId:t}=e??{},a=(0,C.gf)(O.a),r=(0,C.gf)(I.I),n=(0,o.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${t}-auth-cookie-expires-at`):null,[t]),[i,l]=(0,D.Y)(async()=>{let e=await r.getBaseUrl(t),o=`${e}/.backstage/auth/v1/cookie`,n=await a.fetch(`${o}`,{credentials:"include"});if(!n.ok){if(404===n.status)return{expiresAt:new Date(Date.now()+31536e6)};throw await U.o.fromResponse(n)}let i=await n.json();if(!i.expiresAt)throw Error("No expiration date found in response");return i});(0,V.u)(l.execute);let s=(0,o.useCallback)(()=>{l.execute()},[l]),d=(0,o.useCallback)(e=>{let t=(1+3*Math.random())*6e4,a=setTimeout(s,Date.parse(e.expiresAt)-Date.now()-t);return()=>clearTimeout(a)},[s]);return((0,o.useEffect)(()=>{if("success"!==i.status||!i.result)return()=>{};n?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:i.result});let e=d(i.result),t=t=>{let{action:a,payload:r}=t.data;"COOKIE_REFRESH_SUCCESS"===a&&(e(),e=d(r))};return n?.addEventListener("message",t),()=>{e(),n?.removeEventListener("message",t)}},[i,d,n]),"not-executed"===i.status||"loading"===i.status&&!i.result||"loading"===i.status&&i.error)?{status:"loading"}:"error"===i.status&&i.error?{status:"error",error:i.error,retry:s}:{status:"success",data:i.result}}(a);return"loading"===i.status?(0,r.jsx)(n,{}):"error"===i.status?(0,r.jsx)(N.b,{error:i.error,children:(0,r.jsx)(B.A,{variant:"outlined",onClick:i.retry,children:"Retry"})}):(0,r.jsx)(r.Fragment,{children:t})}var P=a(60882),F=a(54917),Y=a(41329),G=a(50868),W=a(73466),K=a(30043),X=a(11642),Z=a(19108);let Q=e=>{let{withSearch:t,withHeader:a=!0}=e;return(0,r.jsxs)(i.Y,{themeId:"documentation",children:[a&&(0,r.jsx)(R,{}),(0,r.jsx)(M.Z,{}),(0,r.jsx)(c.p,{withSearch:t})]})},J=(0,P.A)(i.Y)({height:"inherit",overflowY:"visible"}),ee=e=>{let t,a,i,c,m,h,u,p,g=(0,F.A)(),v=(0,o.useMemo)(()=>(0,Y.A)({...g,...e.overrideThemeOptions||{}}),[g,e.overrideThemeOptions]),{kind:f,name:b,namespace:y}=(0,$.K)(L.Oc),{children:w,entityRef:x={kind:f,name:b,namespace:y}}=e,A=(0,n.useOutlet)(),E=(0,o.useMemo)(()=>({kind:x.kind,name:x.name,namespace:x.namespace}),[x.kind,x.name,x.namespace]),{shouldShowProgress:_}=(t=(0,C.gf)(K.v),a=(0,n.useNavigate)(),i=(0,k.S)(L.Oc),c=(0,S.U2)(E),h=(m=(0,o.useRef)(null)).current!==c,u=(0,W.A)(async()=>{try{let e=await t.getEntityByRef(E);if(e?.metadata?.annotations?.[Z.GO])return(0,X.b1)(e,i)}catch(e){}},[c,t]),(0,o.useEffect)(()=>{!u.loading&&u.value&&a(u.value,{replace:!0}),u.loading||u.value||(m.current=c)},[u.loading,u.value,a,c]),p=h&&u.loading||!!u.value,{loading:u.loading,shouldShowProgress:p}),j=(0,o.useMemo)(()=>w?null:(A?o.Children.toArray(A.props.children):[]).flatMap(e=>e?.props?.children??[]).find(e=>!(0,z.E)(e,s.AF)&&!(0,z.E)(e,s.Wm)),[w,A]);return _?(0,r.jsx)(l.k,{}):w?(0,r.jsx)(G.A,{theme:v,children:(0,r.jsx)(q,{pluginId:"techdocs",children:(0,r.jsx)(d.R,{entityRef:E,children:({metadata:e,entityMetadata:t,onReady:a})=>(0,r.jsx)(J,{themeId:"documentation",className:"techdocs-reader-page",children:w instanceof Function?w({entityRef:E,techdocsMetadataValue:e.value,entityMetadataValue:t.value,onReady:a}):w})})})}):(0,r.jsx)(G.A,{theme:v,children:(0,r.jsx)(q,{pluginId:"techdocs",children:(0,r.jsx)(d.R,{entityRef:E,children:j||(0,r.jsx)(Q,{})})})})}},33895(e,t,a){"use strict";let r,o,n;a.d(t,{p:()=>eY});var i=a(31085),l=a(42899),s=a(58837),d=a(14041),c=a(9394),m=a(91360),h=a(22856);let u="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",p=e=>{let[t,a]=(0,d.useState)(!1);return(0,d.useEffect)(()=>{if(!e)return()=>{};a(!0);let t=e.style;t.setProperty("opacity","0");let r=()=>{a(!1),t.setProperty("opacity","1")};return e.addEventListener(u,r),()=>{e.removeEventListener(u,r)}},[e]),t},g=e=>{let{element:t,onAppend:a,children:r}=e,[o,n]=(0,d.useState)((0,c.vt)({...(0,h.A)(),insertionPoint:void 0}));(0,d.useEffect)(()=>{if(!t)return()=>{};let e=t.querySelectorAll('head > link[rel="stylesheet"]'),a=e?.length??0,r=new CustomEvent(u);if(!a)return t.dispatchEvent(r),()=>{};let o=()=>{0==--a&&t.dispatchEvent(r)};return e?.forEach(e=>{e.addEventListener("load",o)}),()=>{e?.forEach(e=>{e.removeEventListener("load",o)})}},[t]);let l=(0,d.useCallback)(e=>{if(!t||!e)return;n((0,c.vt)({...(0,h.A)(),insertionPoint:t.querySelector("head")||void 0}));let r=e.shadowRoot;r||(r=e.attachShadow({mode:"open"})),r.replaceChildren(t),"function"==typeof a&&a(r)},[t,a]);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(m.Ay,{jss:o,sheetsManager:new Map,children:[(0,i.jsx)("div",{ref:l,"data-testid":"techdocs-native-shadowroot"}),r]})})};var v=a(16454),f=a(96872),b=a(78467),y=a(98312),w=a(87437),x=a(33986);let k=(0,s.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),A=()=>{let e=k();return(0,i.jsx)(b.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},E=(o=function(e){let{loading:t,value:a,onChange:r=()=>{},options:o=[],getOptionLabel:n=e=>String(e),inputPlaceholder:l,inputDebounceTime:s,freeSolo:c=!0,fullWidth:m=!0,clearOnBlur:h=!1,"data-testid":u="search-autocomplete",...p}=e,{setTerm:g}=(0,w.SQ)(),v=(0,d.useCallback)(e=>e?"string"==typeof e?e:n(e):"",[n]),f=(0,d.useMemo)(()=>v(a),[a,v]),b=(0,d.useCallback)((e,t,a,o)=>{g(v(t)),r(e,t,a,o)},[v,g,r]),k=(0,d.useCallback)(({InputProps:{ref:e,className:a,endAdornment:r},InputLabelProps:o,...n})=>(0,i.jsx)(x.I,{...n,ref:e,clearButton:!1,value:f,placeholder:l,debounceTime:s,endAdornment:t?(0,i.jsx)(A,{}):r,InputProps:{className:a}}),[t,f,l,s]);return(0,i.jsx)(y.Ay,{...p,"data-testid":u,value:a,onChange:b,options:o,getOptionLabel:n,renderInput:k,freeSolo:c,fullWidth:m,clearOnBlur:h})},e=>(0,i.jsx)(w.Lt,{inheritParentContextIfAvailable:!0,children:(0,i.jsx)(o,{...e})}));var L=a(18690),S=a(41472);let C=e=>{let{entityId:t,entityTitle:a,debounceTime:r=150,searchResultUrlMapper:o}=e,[n,l]=(0,d.useState)(!1),s=(0,L.useNavigate)(),{results:c,term:m,loading:h}=function(e){let{setFilters:t,setTerm:a,term:r,result:{loading:o,value:n}}=(0,w.SQ)(),[i,l]=(0,d.useState)([]),[s,c]=(0,d.useState)(!1),m=(0,d.useRef)();(0,d.useEffect)(()=>{n&&l(n.results.slice(0,10))},[o,n]),(0,d.useEffect)(()=>(clearTimeout(m.current),c(!1),o&&(m.current=setTimeout(()=>c(!0),200)),()=>clearTimeout(m.current)),[r,o]);let{kind:h,name:u,namespace:p}=e;return(0,d.useEffect)(()=>{t(e=>({...e,kind:h,namespace:p,name:u}))},[h,p,u,t]),{results:i,term:r,setTerm:a,loading:o,deferredLoading:s}}(t);return(0,i.jsx)(E,{"data-testid":"techdocs-search-bar",size:"small",open:n&&!!m,getOptionLabel:()=>"",filterOptions:e=>e,onClose:()=>{l(!1)},onOpen:()=>{l(!0)},onChange:(e,t)=>{if(t?.document){let{location:e}=t.document;s(o?o(e):e)}},blurOnSelect:!0,noOptionsText:"No results found",value:null,options:c,renderOption:({document:e,highlight:t})=>(0,i.jsx)(S.TechDocsSearchResultListItem,{result:e,lineClamp:3,asListItem:!1,asLink:!1,title:e.title,highlight:t}),loading:h,inputDebounceTime:r,inputPlaceholder:`Search ${a||t.name} docs`,freeSolo:!1})},_=e=>{let t={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return(0,i.jsx)(w.Lt,{initialState:t,children:(0,i.jsx)(C,{...e})})};var j=a(64947),T=a(48209),R=a(67296),M=a(73845),$=a(29365),z=a(72501),N=a(99703),H=a(32881);let B=(0,s.A)(e=>(0,N.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),O=({buildLog:e,onClose:t})=>{let a=B(),r=0===e.length?"Waiting for logs...":e.join("\n");return(0,i.jsxs)(l.A,{container:!0,direction:"column",className:a.root,spacing:0,wrap:"nowrap",children:[(0,i.jsxs)(l.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap",children:[(0,i.jsx)(z.A,{variant:"h5",children:"Build Details"}),(0,i.jsx)($.A,{title:"Close the drawer",onClick:t,color:"inherit",children:(0,i.jsx)(H.default,{})},"dismiss")]}),(0,i.jsx)(l.A,{item:!0,xs:!0,children:(0,i.jsx)(R.r,{text:r,classes:{root:a.logs}})})]})},I=({buildLog:e})=>{let t=B(),[a,r]=(0,d.useState)(!1);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.A,{color:"inherit",onClick:()=>r(!0),children:"Show Build Logs"}),(0,i.jsx)(M.Ay,{classes:{paper:t.paper},anchor:"right",open:a,onClose:()=>r(!1),children:(0,i.jsx)(O,{buildLog:e,onClose:()=>r(!1)})})]})};var D=a(96170),V=a(96814),U=a(52262),q=a(90299),P=a(83380);let F=({errorMessage:e})=>{let t=(0,D.gf)(V.U).getOptionalString("techdocs.builder"),a=(0,U.s)(),{entityRef:r}=(0,P.V)(),o=(0,L.useLocation)();(0,d.useEffect)(()=>{let{pathname:e,search:t,hash:n}=o;a.captureEvent("not-found",`${e}${t}${n}`,{attributes:r})},[a,r,o]);let n="";return[void 0,"local"].includes(t)||(n="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),(0,i.jsx)(q.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:n})};var Y=a(73466),G=a(28966),W=a(49707);function K(e,t){let a={...e};switch(t.type){case"sync":"CHECKING"===t.state&&(a.buildLog=[]),a.activeSyncState=t.state,a.syncError=t.syncError;break;case"contentLoading":a.contentLoading=!0,a.contentError=void 0;break;case"content":"string"==typeof t.path&&(a.path=t.path),a.contentLoading=!1,a.content=t.content,a.contentError=t.contentError;break;case"buildLog":a.buildLog=a.buildLog.concat(t.log);break;default:throw Error()}return["BUILD_READY","BUILD_READY_RELOAD"].includes(a.activeSyncState)&&["contentLoading","content"].includes(t.type)&&(a.activeSyncState="UP_TO_DATE",a.buildLog=[]),a}let X=(0,d.createContext)({}),Z=()=>(0,d.useContext)(X),Q=e=>{let{children:t}=e,{"*":a=""}=(0,L.useParams)(),{entityRef:r}=(0,P.V)(),{kind:o,namespace:n,name:l}=r,s=function(e,t,a,r){let[o,n]=(0,d.useReducer)(K,{activeSyncState:"CHECKING",path:r,contentLoading:!0,buildLog:[]}),i=(0,D.gf)(W.s),{retry:l}=(0,G.A)(async()=>{n({type:"contentLoading"});try{let o=await i.getEntityDocs({kind:e,namespace:t,name:a},r);return n({type:"content",content:o,path:r}),o}catch(e){n({type:"content",contentError:e,path:r})}},[i,e,t,a,r]),s=(0,d.useRef)({content:void 0,reload:()=>{}});s.current={content:o.content,reload:l},(0,Y.A)(async()=>{n({type:"sync",state:"CHECKING"});let r=setTimeout(()=>{n({type:"sync",state:"BUILDING"})},1e3);try{switch(await i.syncEntityDocs({kind:e,namespace:t,name:a},e=>{n({type:"buildLog",log:e})})){case"updated":s.current.content?n({type:"sync",state:"BUILD_READY"}):(s.current.reload(),n({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":n({type:"sync",state:"UP_TO_DATE"});break;default:n({type:"sync",state:"ERROR",syncError:Error("Unexpected return state")})}}catch(e){n({type:"sync",state:"ERROR",syncError:e})}finally{clearTimeout(r)}},[e,a,t,i,n,s]);let c=(0,d.useMemo)(()=>(function({contentLoading:e,content:t,activeSyncState:a}){return e||"BUILD_READY_RELOAD"===a||!t&&"CHECKING"===a?"CHECKING":t||"BUILDING"!==a?t?"BUILDING"===a?"CONTENT_STALE_REFRESHING":"BUILD_READY"===a?"CONTENT_STALE_READY":"ERROR"===a?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND":"INITIAL_BUILD"})({activeSyncState:o.activeSyncState,contentLoading:o.contentLoading,content:o.content}),[o.activeSyncState,o.content,o.contentLoading]);return(0,d.useMemo)(()=>({state:c,contentReload:l,path:o.path,content:o.content,contentErrorMessage:o.contentError?.toString(),syncErrorMessage:o.syncError?.toString(),buildLog:o.buildLog}),[c,l,o.path,o.content,o.contentError,o.syncError,o.buildLog])}(o,n,l,a);return(0,i.jsx)(X.Provider,{value:s,children:t instanceof Function?t(s):t})},J=(0,s.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),ee=()=>{let e=null,t=J(),{state:a,contentReload:r,contentErrorMessage:o,syncErrorMessage:n,buildLog:l}=Z();return"INITIAL_BUILD"===a&&(e=(0,i.jsx)(T.A,{classes:{root:t.root},variant:"outlined",severity:"info",icon:(0,i.jsx)(b.A,{size:"24px"}),action:(0,i.jsx)(I,{buildLog:l}),children:"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster."})),"CONTENT_STALE_REFRESHING"===a&&(e=(0,i.jsx)(T.A,{variant:"outlined",severity:"info",icon:(0,i.jsx)(b.A,{size:"24px"}),action:(0,i.jsx)(I,{buildLog:l}),classes:{root:t.root},children:"A newer version of this documentation is being prepared and will be available shortly."})),"CONTENT_STALE_READY"===a&&(e=(0,i.jsx)(T.A,{variant:"outlined",severity:"success",action:(0,i.jsx)(j.A,{color:"inherit",onClick:()=>r(),children:"Refresh"}),classes:{root:t.root},children:"A newer version of this documentation is now available, please refresh to view."})),"CONTENT_STALE_ERROR"===a&&(e=(0,i.jsxs)(T.A,{variant:"outlined",severity:"error",action:(0,i.jsx)(I,{buildLog:l}),classes:{root:t.root,message:t.message},children:["Building a newer version of this documentation failed."," ",n]})),"CONTENT_NOT_FOUND"===a&&(e=(0,i.jsxs)(i.Fragment,{children:[n&&(0,i.jsxs)(T.A,{variant:"outlined",severity:"error",action:(0,i.jsx)(I,{buildLog:l}),classes:{root:t.root,message:t.message},children:["Building a newer version of this documentation failed."," ",n]}),(0,i.jsx)(F,{errorMessage:o})]})),e};var et=a(41883),ea=a(11618),er=a(15246);let eo=()=>{let e=(0,ea.YR)(),{shadowRoot:t}=(0,P.V)(),a=t?.querySelector('[data-md-component="content"]'),r=t?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]'),o=r?.querySelector('[data-techdocs-addons-location="primary sidebar"]');o||((o=document.createElement("div")).setAttribute("data-techdocs-addons-location","primary sidebar"),r?.prepend(o));let n=t?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]'),l=n?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return l||((l=document.createElement("div")).setAttribute("data-techdocs-addons-location","secondary sidebar"),n?.prepend(l)),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(et.A,{container:o,children:e.renderComponentsByLocation(er.e.PrimarySidebar)}),(0,i.jsx)(et.A,{container:a,children:e.renderComponentsByLocation(er.e.Content)}),(0,i.jsx)(et.A,{container:l,children:e.renderComponentsByLocation(er.e.SecondarySidebar)})]})};var en=a(85639),ei=a(61128),el=a(5893),es=a(54917),ed=a(18726),ec=a(97519);let em=/main\.[A-Fa-f0-9]{8}\.min\.css$/,eh=/^https:\/\/fonts\.googleapis\.com/,eu=/^https:\/\/fonts\.gstatic\.com/,ep=e=>{if(e.nodeType===Node.ELEMENT_NODE){let t,a,r,o;"LINK"!==e.nodeName||(a=(t=e?.getAttribute("href")||"").match(em),r=t.match(eh),o=t.match(eu),a||r||o)||e.remove()}},eg=(e,t)=>{if(e.nodeType===Node.ELEMENT_NODE){let a,r;"meta"===t.tagName&&(a=e.getAttribute("http-equiv"),r=e.getAttribute("content"),"refresh"!==a||r?.includes("url=")!==!0)&&e.parentNode?.removeChild(e)}},ev=(e,t)=>{"META"!==e.tagName&&("http-equiv"===t.attrName||"content"===t.attrName)&&e.removeAttribute(t.attrName)};var ef=a(65901),eb=a(268);let ey=["h1","h2","h3","h4","h5","h6"],ew=/(em)|(rem)/gi,ex=/var\(|\)/gi,ek={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]},eA=[({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,eb.X4)(e.palette.text.secondary,.3)};
  --md-default-fg-color--lightest: ${(0,eb.X4)(e.palette.text.secondary,.15)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,eb.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,eb.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,eb.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,eb.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.code?.background??e.palette.background.paper};
  --md-code-hl-color: ${(0,eb.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${"dark"===e.palette.type?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${"dark"===e.palette.type?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${"dark"===e.palette.type?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${"dark"===e.palette.type?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${(0,eb.X4)(e.palette.text.primary,.15)};
  --md-typeset-table-color--light: ${(0,eb.X4)(e.palette.text.primary,.05)};
  --md-typeset-del-color: ${"dark"===e.palette.type?(0,eb.X4)(e.palette.error.dark,.5):(0,eb.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${"dark"===e.palette.type?(0,eb.X4)(e.palette.success.dark,.5):(0,eb.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${"dark"===e.palette.type?(0,eb.X4)(e.palette.warning.dark,.5):(0,eb.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`,({theme:e,sidebar:t})=>`

/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  height: 100%
}

@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
    /* Less padding before the Previous / Next buttons */
    padding-bottom: 0 !important;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${t.isPinned?"calc(-16rem + 224px)":"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`,({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${ey.reduce((t,a)=>{let r=e.typography.htmlFontSize??16,{lineHeight:o,fontFamily:n,fontWeight:i,fontSize:l}=e.typography[a],s=e=>{if("number"==typeof e)return s(`${e/r*.6}rem`);if("string"==typeof e){if(e.match(ex)){let t=window.getComputedStyle(document.body).getPropertyValue(e.replaceAll(ex,""));if(""!==t)return s(t)}else if(e.match(ew)){let t=e.replace(ew,"");return`calc(${t} * var(--md-typeset-font-size))`}}return e};return t.concat(`
    .md-typeset ${a} {
      color: var(--md-default-fg-color);
      line-height: ${o};
      font-family: ${n};
      font-weight: ${i};
      font-size: ${s(l)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-typeset-table-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${e.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-typeset-table-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${"dark"===e.palette.type?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${"dark"===e.palette.type?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${"dark"===e.palette.type?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`,({theme:e})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${ek[e.palette.type].map(e=>`img[src$="${e}"]`).join(", ")} {
  display: none;
}
`],eE=(e,t,a)=>{let r=new URL(t,"https://ignored.com").pathname,o="src"===e&&r.endsWith(".svg"),n=!t.match(/^([a-z]*:)?\/\//i),i=t.startsWith(a);return o&&(n||i)};var eL=a(82619),eS=a(90292),eC=a(52536),e_=a.n(eC);function ej(e,t){r.then(a=>{"createRoot"in a?a.createRoot(t).render(e):a.render(e,t)})}r=Promise.resolve().then(a.t.bind(a,25873,19));var eT=a(27326);function eR(e){let t=new URL(e);return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+="/"),t.toString()}var eM=a(7031),e$=a(50868),ez=a(10437),eN=a(71677),eH=a(11688);let eB=(0,eM.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(eN.Ay),eO=()=>(0,i.jsx)(ez.A,{children:(0,i.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})}),eI=({text:e})=>{let[t,a]=(0,d.useState)(!1),[,r]=(0,eH.A)(),o=(0,d.useCallback)(()=>{r(e),a(!0)},[e,r]),n=(0,d.useCallback)(()=>{a(!1)},[a]);return(0,i.jsx)(eB,{title:"Copied to clipboard",placement:"left",open:t,onClose:n,leaveDelay:1e3,children:(0,i.jsx)($.A,{style:{position:"absolute",top:"0.5rem",right:"0.5rem"},className:"md-clipboard md-icon",onClick:o,"aria-label":"Copy to clipboard",children:(0,i.jsx)(eO,{})})})},eD=({onLoading:e,onLoaded:t})=>a=>(e(),a.addEventListener(u,function e(){t(),a.removeEventListener(u,e)}),a),eV=async(e,t)=>{let a;if("string"==typeof e)a=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)a=e;else throw Error("dom is not a recognized type");for(let e of t)a=await e(a);return a};var eU=a(38097);let eq=(0,s.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),eP=({message:e,handleButtonClick:t,autoHideDuration:a})=>{let r=eq(),[o,n]=(0,d.useState)(!0),l=()=>n(!1);return(0,i.jsx)(eU.A,{open:o,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:a,color:"primary",onClose:l,message:e,action:(0,i.jsx)(j.A,{classes:{root:r.button},size:"small",onClick:()=>{l(),t()},children:"Redirect now"})})},eF=(0,s.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),eY=(n=e=>{let{withSearch:t=!0,searchResultUrlMapper:a}=e,r=eF(),{entityRef:o,entityMetadata:n,dom:s,handleAppend:c,isNotFound:m,isDomReady:h,showProgress:u,NotFoundErrorPage:b}=function(e){let{defaultPath:t,onReady:a}=e,{entityMetadata:{value:r,loading:o},entityRef:n,setShadowRoot:l}=(0,P.V)(),{state:s}=Z(),c=((e,t)=>{let a,r,o,n,l,s,c,m=(a=(0,d.useRef)((0,L.useNavigate)()),r=(0,D.gf)(V.U).getOptionalString("app.baseUrl"),(0,d.useCallback)(e=>{let t=e;if(r)try{let a,o,n,i;a=new URL(r),o=`${a.origin}${a.pathname.replace(/\/$/,"")}`,n=e.replace(o,"").replace(/^\/+/,""),i=new URL(`http://localhost/${n}`),t=`${i.pathname}${i.search}${i.hash}`}catch(e){}a.current(t)},[r])),h=(0,es.A)(),u=(0,el.A)("screen and (max-width: 76.1875em)"),g=(o=(0,D.gf)(V.U),n=(0,d.useMemo)(()=>o.getOptionalConfig("techdocs.sanitizer"),[o]),(0,d.useCallback)(async e=>{let t=n?.getOptionalStringArray("allowedIframeHosts");ec.A.addHook("beforeSanitizeElements",ep);let a=["link","meta"];t&&(a.push("iframe"),ec.A.addHook("beforeSanitizeElements",e=>{e.nodeType!==Node.ELEMENT_NODE||"IFRAME"!==e.nodeName||((e,t)=>{let a=e.getAttribute("src")||"";try{let{host:e}=new URL(a);return t.includes(e)}catch{return!1}})(e,t)||e.remove()}));ec.A.addHook("uponSanitizeElement",eg),ec.A.addHook("uponSanitizeAttribute",ev);let r=n?.getOptionalString("allowedCustomElementTagNameRegExp"),o=n?.getOptionalString("allowedCustomElementAttributeNameRegExp"),i=["callto","cid","ftp","ftps","http","https","mailto","matrix","sms","tel","xmpp",...n?.getOptionalStringArray("additionalAllowedURIProtocols")||[]].filter(Boolean),l=RegExp(`^(?:${i.join("|")}:|[^a-z]|[a-z+.-]+(?:[^a-z+.\\-:]|$))`,"i");return ec.A.sanitize(e.outerHTML,{ADD_TAGS:a,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content","dominant-baseline"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0,ALLOWED_URI_REGEXP:l,CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?new RegExp(r):void 0,attributeNameCheck:o?new RegExp(o):void 0}})},[n])),v=(l=(0,ef.Ut)(),s=(0,es.A)(),c=(0,d.useMemo)(()=>{let e={theme:s,sidebar:l};return eA.reduce((t,a)=>t+a(e),"")},[s,l]),(0,d.useCallback)(e=>(e.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${c}</style>`),e),[c])),f=(0,U.s)(),b=(0,D.gf)(W.s),y=(0,D.gf)(ed.Y),w=(0,D.gf)(V.U),{state:x,path:k,content:A}=Z(),{"*":E=""}=(0,L.useParams)(),[S,C]=(0,d.useState)(null),_=p(S);(e=>{let t=(0,L.useLocation)(),a=(0,L.useNavigate)(),{"*":r=""}=(0,L.useParams)();(0,d.useLayoutEffect)(()=>{""===r&&e&&a(`${t.pathname}${e}`,{replace:!0})},[])})(t);let j=(0,d.useCallback)(()=>{S&&S.querySelectorAll(".md-sidebar").forEach(e=>{if(u)e.style.top="0px";else{let t=document?.querySelector(".techdocs-reader-page"),a=t?.getBoundingClientRect().top??0,r=S.getBoundingClientRect().top??0,o=S.querySelector(".md-container > .md-tabs"),n=o?.getBoundingClientRect().height??0;r<a&&(r=a);let i=Math.max(r,0)+n;e.style.top=`${i}px`;let l=S.querySelector(".md-container > .md-footer"),s=l?.getBoundingClientRect().top??window.innerHeight;e.style.height=`${s-i}px`}e.style.setProperty("opacity","1")})},[S,u]);(0,d.useEffect)(()=>(window.addEventListener("resize",j),window.addEventListener("scroll",j,!0),()=>{window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0)}),[S,j]);let T=(0,d.useCallback)(()=>{if(!S)return;let e=S.querySelector(".md-footer");e&&(e.style.width=`${S.getBoundingClientRect().width}px`)},[S]);(0,d.useEffect)(()=>(window.addEventListener("resize",T),()=>{window.removeEventListener("resize",T)}),[S,T]),(0,d.useEffect)(()=>{_||(T(),j())},[x,_,T,j]);let R=(0,d.useCallback)((t,a)=>eV(t,[g,(({techdocsStorageApi:e,entityId:t,path:a})=>async r=>{let o=await e.getApiOrigin(),n=async(r,n)=>{for(let i of r)if(i.hasAttribute(n)){let r=i.getAttribute(n);if(!r)return;let l=await e.getBaseUrl(r,t,a);if(eE(n,r,o))try{let e=await fetch(l,{credentials:"include"}),t=await e.text();i.setAttribute(n,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(t)))}`)}catch(e){i.setAttribute("alt",`Error: ${r}`)}else i.setAttribute(n,l)}};return await Promise.all([n(r.querySelectorAll("img"),"src"),n(r.querySelectorAll("script"),"src"),n(r.querySelectorAll("source"),"src"),n(r.querySelectorAll("link"),"href"),n(r.querySelectorAll("a[download]"),"href")]),r})({techdocsStorageApi:b,entityId:e,path:a}),e=>{var t,a;return t=Array.from(e.getElementsByTagName("a")),a="href",Array.from(t).filter(e=>e.hasAttribute(a)).forEach(e=>{let t=e.getAttribute(a);if(t){t.match(/^https?:\/\//i)&&e.setAttribute("target","_blank");try{let r=eR(window.location.href);e.setAttribute(a,new URL(t,r).toString())}catch(a){e.replaceWith(e.textContent||t)}}}),e},e=>{let t=e.querySelector('.md-header label[for="__drawer"]'),a=e.querySelector("article");if(!t||!a)return e;let r=t.cloneNode();return ej((0,d.createElement)(eT.default),r),r.id="toggle-sidebar",r.title="Toggle Sidebar",r.classList.add("md-content__button"),r.style.setProperty("padding","0 0 0 5px"),r.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),a?.prepend(r),e},e=>(e.querySelector(".md-header")?.remove(),e),e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),e=>{let t=e.querySelector('[title="Edit this page"]');if(!t||!t.href)return e;let a=new URL(t.href),r=y.byUrl(a);if(r?.type!=="github"&&r?.type!=="gitlab")return e;let o=e.querySelector("article>h1")?.childNodes[0].textContent||"",n=encodeURIComponent(`Documentation Feedback: ${o}`),i=encodeURIComponent(`Page source:
${t.href}

Feedback:`),l=r?.type==="github"?(0,eL.F)(a.href,"blob"):a.href,s=e_()(l),c=`/${s.organization}/${s.name}`,m=t.cloneNode();switch(r?.type){case"gitlab":m.href=`${a.origin}${c}/issues/new?issue[title]=${n}&issue[description]=${i}`;break;case"github":m.href=`${a.origin}${c}/issues/new?title=${n}&body=${i}`;break;default:return e}return ej((0,d.createElement)(eS.default),m),m.style.paddingLeft="5px",m.title="Leave feedback for this page",m.id="git-feedback-link",t?.insertAdjacentElement("beforebegin",m),e},v]),[e,y,b,g,v]),M=(0,d.useCallback)(async t=>{var a;let r;return eV(t,[(a=e.name,r=e=>{let t=eR(window.location.href),r=new URL(e,t);if(r.hostname!==window.location.hostname){let e=window.location.pathname,r=e.indexOf(a);return new URL(e.slice(0,r+a.length),t).href}return r.href},e=>{for(let t of Array.from(e.querySelectorAll("meta")))if("refresh"===t.getAttribute("http-equiv")){let a=t.getAttribute("content")?.split("url=");if(!a||a.length<2)return e;let o=r(a[1]);if(window.location.href===o)return e;let n=document.createElement("div");ej((0,i.jsx)(eP,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>m(o),autoHideDuration:3e3}),n),document.body.appendChild(n),setTimeout(()=>{m(o)},3e3);break}return e}),e=>(setTimeout(()=>{let t=e?.querySelectorAll("li.md-nav__item--active");0!==t.length&&(t.forEach(e=>{let t=e?.querySelector("input");t?.checked||t?.click()}),t[t.length-1].scrollIntoView())},200),e),e=>{for(let t of e.querySelectorAll("pre > code")){let e=t.textContent||"",a=document.createElement("div");t?.parentElement?.prepend(a),ej((0,i.jsx)(e$.A,{theme:h,children:(0,i.jsx)(eI,{text:e})}),a)}return e},(({baseUrl:e,onClick:t})=>a=>(Array.from(a.getElementsByTagName("a")).forEach(a=>{a.addEventListener("click",r=>{let o=a.getAttribute("href");o&&o.startsWith(e)&&!a.hasAttribute("download")&&(r.preventDefault(),t(r,o))})}),a))({baseUrl:w.getOptionalString("app.baseUrl")||window.location.origin,onClick:(e,a)=>{let r=e.ctrlKey||e.metaKey,o=new URL(a),n=e.target?.innerText||a,i=a.replace(window.location.origin,"");f.captureEvent("click",n,{attributes:{to:i}}),o.hash?r?window.open(a,"_blank"):(window.location.pathname!==o.pathname?m(a):window.history.pushState(null,document.title,o.hash),t?.querySelector(`[id="${o.hash.slice(1)}"]`)?.scrollIntoView(),t?.querySelector(`[id="${o.hash.slice(1)}"]`)?.querySelector("a, button, [tabindex]")?.focus()):r?window.open(a,"_blank"):m(a)}}),eD({onLoading:()=>{},onLoaded:()=>{t.querySelector(".md-nav__title")?.removeAttribute("for")}}),eD({onLoading:()=>{Array.from(t.querySelectorAll(".md-sidebar")).forEach(e=>{e.style.setProperty("opacity","0")})},onLoaded:()=>{}}),e=>(e.querySelectorAll("label.md-nav__link[for]").forEach(t=>{t.setAttribute("tabIndex","0"),t.addEventListener("keydown",a=>{if("Enter"===a.key||" "===a.key){let r=t.getAttribute("for");if(!r)return;let o=e.querySelector(`#${r}`);o&&"checkbox"===o.type&&(o.checked=!o.checked,o.dispatchEvent(new Event("change",{bubbles:!0})),a.preventDefault(),a.stopPropagation())}})}),e)])},[h,m,f,e.name,w]);return(0,d.useEffect)(()=>{if(!A)return()=>{};let e=!0;return R(A,k).then(async t=>{t?.innerHTML&&e&&E===k&&(window.scroll({top:0}),C(await M(t)))}),()=>{e=!1}},[A,E,k,R,M]),S})(n,t),m=(0,L.useLocation)(),h=m.pathname,u=m.hash,g=p(c),[v]=(0,en.$r)([`[id="${u.slice(1)}"]`]),{NotFoundErrorPage:f}=(0,ei.n)().getComponents();(0,d.useEffect)(()=>{if(!g)if(u){if(v){v.scrollIntoView();let e=v.querySelector("a.headerlink");e&&e.focus()}}else document?.querySelector("header")?.scrollIntoView()},[h,u,v,g]);let b=(0,d.useCallback)(e=>{l(e),a instanceof Function&&a()},[l,a]),y=!!c;return{entityRef:n,entityMetadata:r,dom:c,handleAppend:b,isNotFound:!1===o&&!r,isDomReady:y,showProgress:"CHECKING"===s||g,NotFoundErrorPage:f}}({defaultPath:e.defaultPath,onReady:e.onReady});return m?(0,i.jsx)(b,{}):h?(0,i.jsx)(v.U,{children:(0,i.jsxs)(l.A,{container:!0,children:[(0,i.jsx)(l.A,{xs:12,item:!0,children:(0,i.jsx)(ee,{})}),t&&(0,i.jsx)(l.A,{className:r.search,xs:"auto",item:!0,children:(0,i.jsx)(_,{entityId:o,entityTitle:n?.metadata?.title,searchResultUrlMapper:a})}),(0,i.jsxs)(l.A,{xs:12,item:!0,children:[u&&(0,i.jsx)(f.k,{}),(0,i.jsx)(g,{element:s,onAppend:c,children:(0,i.jsx)(eo,{})})]})]})}):(0,i.jsx)(v.U,{children:(0,i.jsx)(l.A,{container:!0,children:(0,i.jsx)(l.A,{xs:12,item:!0,children:(0,i.jsx)(ee,{})})})})},e=>(0,i.jsx)(Q,{children:(0,i.jsx)(n,{...e})}))},84893(e,t,a){"use strict";a.d(t,{Z:()=>v});var r=a(31085),o=a(14041),n=a(58837),i=a(29365),l=a(75173),s=a(71677),d=a(37757),c=a(77125),m=a(9684),h=a(83380),u=a(11618),p=a(15246);let g=(0,n.A)(e=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:e.spacing(3,3,0),"@media print":{display:"none"}}})),v=e=>{let t=g(),[a,n]=(0,o.useState)(null),v=(0,o.useCallback)(e=>{n(e.currentTarget)},[]),f=(0,o.useCallback)(()=>{n(null)},[]),{entityMetadata:{value:b,loading:y}}=(0,h.V)(),w=(0,u.YR)(),x=w.renderComponentsByLocation(p.e.Subheader),k=w.renderComponentsByLocation(p.e.Settings);return(x||k)&&(!1!==y||b)?(0,r.jsx)(l.A,{classes:t,...e.toolbarProps,children:(0,r.jsxs)(c.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap",children:[x,k?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{title:"Settings",children:(0,r.jsx)(i.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:v,children:(0,r.jsx)(m.default,{})})}),(0,r.jsx)(d.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!a,onClose:f,keepMounted:!0,children:(0,r.jsx)("div",{children:k})})]}):null]})}):null}},41472(e,t,a){"use strict";a.d(t,{TechDocsSearchResultListItem:()=>m});var r=a(31085),o=a(46423),n=a(5951),i=a(58837),l=a(72501),s=a(75202),d=a(51470);let c=(0,i.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),m=e=>{let{result:t,highlight:a,lineClamp:i=5,asListItem:m=!0,asLink:h=!0,title:u,icon:p}=e,g=c(),v=({children:e})=>h?(0,r.jsx)(s.N_,{noTrack:!0,to:t.location,children:e}):(0,r.jsx)(r.Fragment,{children:e});return(0,r.jsx)(({children:e})=>m?(0,r.jsxs)(r.Fragment,{children:[p&&(0,r.jsx)(o.A,{children:"function"==typeof p?p(t):p}),(0,r.jsx)("div",{className:g.flexContainer,children:e})]}):(0,r.jsx)(r.Fragment,{children:e}),{children:(0,r.jsx)(()=>{let e=a?.fields.title?(0,r.jsx)(d.e,{text:a.fields.title,preTag:a.preTag,postTag:a.postTag}):t.title,o=a?.fields.entityTitle?(0,r.jsx)(d.e,{text:a.fields.entityTitle,preTag:a.preTag,postTag:a.postTag}):t.entityTitle,s=a?.fields.name?(0,r.jsx)(d.e,{text:a.fields.name,preTag:a.preTag,postTag:a.postTag}):t.name;return t?(0,r.jsx)(n.A,{className:g.itemText,primaryTypographyProps:{variant:"h6"},primary:(0,r.jsx)(v,{children:u||(0,r.jsxs)(r.Fragment,{children:[e," | ",o??s," docs"]})}),secondary:(0,r.jsx)(l.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:i,overflow:"hidden"},color:"textSecondary",variant:"body2",children:a?.fields.text?(0,r.jsx)(d.e,{text:a.fields.text,preTag:a.preTag,postTag:a.postTag}):t.text})}):null},{})})}},13660(e,t,a){"use strict";var r=a(4293),o=a(78920);t.default=void 0;var n=o(a(14041));t.default=(0,r(a(74044)).default)(n.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code")},90292(e,t,a){"use strict";var r=a(4293),o=a(78920);t.default=void 0;var n=o(a(14041));t.default=(0,r(a(74044)).default)(n.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined")},56005(e,t,a){var r=a(95243),o=a(5485);e.exports=function(e){return o(r(e).toLowerCase())}},91042(e,t,a){"use strict";a.d(t,{Y:()=>n});var r=a(14041),o=a(16261);function n(e,t){let[a,n]=(0,r.useState)({status:"not-executed",error:void 0,result:t}),i=(0,r.useRef)(),l=(0,r.useRef)(),s=(0,o.J)({execute(...t){l.current=t;let a=e(...t);return i.current=a,n(e=>({...e,status:"loading"})),a.then(e=>{a===i.current&&n(t=>({...t,status:"success",error:void 0,result:e}))},e=>{a===i.current&&n(t=>({...t,status:"error",error:e}))}),a},reset(){n({status:"not-executed",error:void 0,result:t}),i.current=void 0,l.current=void 0}});return[a,(0,r.useMemo)(()=>({reset(){s.current.reset()},execute:(...e)=>s.current.execute(...e)}),[]),{promise:i.current,lastArgs:l.current}]}}}]);
//# sourceMappingURL=1032.0de662d0.chunk.js.map