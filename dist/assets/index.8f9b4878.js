var R=Object.defineProperty,F=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var $=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var E=(i,e,t)=>e in i?R(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,g=(i,e)=>{for(var t in e||(e={}))V.call(e,t)&&E(i,t,e[t]);if($)for(var t of $(e))H.call(e,t)&&E(i,t,e[t]);return i},p=(i,e)=>F(i,T(e));import{d as y,w as I,o as u,c as d,a as _,u as Z,b as S,r as j,e as f,F as b,t as v,f as q,n as P,g as z,h as x,i as W,j as K,k as l,l as w,m as G,p as k,q as J,s as Q,v as U,x as X,y as Y,z as ee}from"./vendor.63a86f41.js";const te=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};te();const ne=y({props:{passed:{type:Boolean}},setup(i){const e=i;function t(){const r={colors:["#5D8C7B","#F2D091","#F2A679","#D9695F","#8C4646"],shapes:["square"],ticks:500};_(p(g({},r),{particleCount:80,spread:100,origin:{y:0}})),setTimeout(()=>{_(p(g({},r),{particleCount:50,angle:60,spread:80,origin:{x:0}}))},250),setTimeout(()=>{_(p(g({},r),{particleCount:50,angle:120,spread:80,origin:{x:1}}))},400)}return I(()=>e.passed,r=>{r&&setTimeout(t,300)},{flush:"post"}),(r,n)=>(u(),d("div"))}}),D=Z(),se=S(D),M=j(!1),re=S(M),ae={key:0,"i-mdi-flag":"","text-red":""},ie={key:0,"i-mdi-mine":""},oe={key:1,"font-600":""},le=y({props:{block:null},emits:["lrclick"],setup(i,{emit:e}){function t(s){s.buttons===3&&e("lrclick",s)}const r=["text-transparent","text-blue-500","text-green-500","text-yellow-500","text-orange-500","text-red-500","text-purple-500","text-pink-500","text-teal-500"];function n(s){return s.flagged?"bg-gray-500/10":s.revealed?s.mine?"bg-red-500/50":r[s.adjacentMines]:"bg-gray-500/10 hover:bg-gray-500/20"}return(s,a)=>(u(),d("button",{flex:"~","items-center":"","justify-center":"","min-w-8":"","min-h-8":"",m:"1px",border:"0.5 gray-400/10",class:P(n(i.block)),onMousedown:t},[i.block.flagged?(u(),d("div",ae)):i.block.revealed||f(M)?(u(),d(b,{key:1},[i.block.mine?(u(),d("div",ie)):(u(),d("div",oe,v(i.block.adjacentMines),1))],64)):q("",!0)],34))}}),ue=[[1,1],[1,0],[1,-1],[0,-1],[-1,-1],[-1,0],[-1,1],[0,1]];class ce{constructor(e,t,r){this.width=e,this.height=t,this.mines=r,this.state=j(),this.reset()}get board(){return this.state.value.board}get blocks(){return this.state.value.board.flat()}reset(e=this.width,t=this.height,r=this.mines){this.width=e,this.height=t,this.mines=r,this.state.value={mineGenerated:!1,status:"ready",board:Array.from({length:this.height},(n,s)=>Array.from({length:this.width},(a,c)=>({x:c,y:s,adjacentMines:0,revealed:!1})))}}randomRange(e,t){return Math.random()*(t-e)+e}randomInt(e,t){return Math.round(this.randomRange(e,t))}generateMines(e,t){const r=()=>{const n=this.randomInt(0,this.width-1),s=this.randomInt(0,this.height-1),a=e[s][n];return Math.abs(t.x-a.x)<=1&&Math.abs(t.y-a.y)<=1||a.mine?!1:(a.mine=!0,!0)};Array.from({length:this.mines},()=>null).forEach(()=>{let n=!1;for(;!n;)n=r()}),this.updateNumbers()}updateNumbers(){this.board.forEach(e=>{e.forEach(t=>{t.mine||this.getSiblings(t).forEach(r=>{r.mine&&(t.adjacentMines+=1)})})})}expendZero(e){e.adjacentMines||this.getSiblings(e).forEach(t=>{t.revealed||(t.flagged||(t.revealed=!0),this.expendZero(t))})}onRightClick(e){this.state.value.status==="play"&&(e.revealed||(e.flagged=!e.flagged))}onClick(e){if(this.state.value.status==="ready"&&(this.state.value.status="play",this.state.value.startMS=+new Date),!(this.state.value.status!=="play"||e.flagged)){if(this.state.value.mineGenerated||(this.generateMines(this.board,e),this.state.value.mineGenerated=!0),e.revealed=!0,e.mine){this.onGameOver("lost");return}this.expendZero(e)}}getSiblings(e){return ue.map(([t,r])=>{const n=e.x+t,s=e.y+r;if(!(n<0||n>=this.width||s<0||s>=this.height))return this.board[s][n]}).filter(Boolean)}showAllMines(){this.board.flat().forEach(e=>{e.mine&&(e.revealed=!0)})}checkGameState(){if(!this.state.value.mineGenerated||this.state.value.status!=="play")return;this.board.flat().some(t=>!t.mine&&!t.revealed)||this.onGameOver("won")}autoExpand(e){if(this.state.value.status!=="play"||e.flagged)return;const t=this.getSiblings(e),r=t.reduce((a,c)=>a+(c.flagged?1:0),0),n=t.reduce((a,c)=>a+(!c.revealed&&!c.flagged?1:0),0);r===e.adjacentMines&&t.forEach(a=>{a.revealed||a.flagged||(a.revealed=!0,this.expendZero(a),a.mine&&this.onGameOver("lost"))});const s=e.adjacentMines-r;n===s&&t.forEach(a=>{!a.revealed&&!a.flagged&&(a.flagged=!0)})}onGameOver(e){this.state.value.status=e,this.state.value.endMS=+Date.now(),e==="lost"&&(this.showAllMines(),setTimeout(()=>{alert("lost")},10))}}const de=w(" Minesweeper "),fe={flex:"~ gap1","justify-center":"",p4:""},he={flex:"~ gap-10","justify-center":""},me={"font-mono":"","text-2xl":"",flex:"~ gap-1","items-center":""},ge=l("div",{"i-carbon-timer":""},null,-1),pe={"font-mono":"","text-2xl":"",flex:"~ gap-1","items-center":""},ve=l("div",{"i-mdi-mine":""},null,-1),ye={p5:"","w-full":"","overflow-auto":""},_e={flex:"~ gap-1","justify-center":""},xe=y({setup(i){const e=new ce(9,9,10),t=z(),r=x(()=>{var c,o;return Math.round((((c=e.state.value.endMS)!=null?c:+t.value)-((o=e.state.value.startMS)!=null?o:+t.value))/1e3)});W("vuesweeper-state",e.state);const n=x(()=>e.board),s=x(()=>e.state.value.mineGenerated?e.blocks.reduce((c,o)=>c-(o.flagged?1:0),e.mines):e.mines);function a(c){switch(c){case"easy":e.reset(9,9,10);break;case"medium":e.reset(16,16,40);break;case"hard":e.reset(20,20,60);break}}return K(()=>{e.checkGameState()}),(c,o)=>{const O=le,A=ne;return u(),d("div",null,[de,l("div",fe,[l("button",{btn:"",onClick:o[0]||(o[0]=h=>f(e).reset())}," New Game "),l("button",{btn:"",onClick:o[1]||(o[1]=h=>a("easy"))}," Easy "),l("button",{btn:"",onClick:o[2]||(o[2]=h=>a("medium"))}," Medium "),l("button",{btn:"",onClick:o[3]||(o[3]=h=>a("hard"))}," Hard ")]),l("div",he,[l("div",me,[ge,w(" "+v(r.value),1)]),l("div",pe,[ve,w(" "+v(s.value),1)])]),l("div",ye,[(u(!0),d(b,null,G(n.value,(h,B)=>(u(),d("div",{key:B,flex:"~","items-center":"","justify-center":"","w-max":"",ma:""},[(u(!0),d(b,null,G(h,(m,L)=>(u(),J(O,{key:L,block:m,onClick:C=>f(e).onClick(m),onLrclick:C=>f(e).autoExpand(m),onContextmenu:Q(C=>f(e).onRightClick(m),["prevent"])},null,8,["block","onClick","onLrclick","onContextmenu"]))),128))]))),128))]),l("div",_e,[l("button",{btn:"",onClick:o[4]||(o[4]=h=>f(re)())},v(f(M)?"DEV":"NORMAL"),1)]),k(A,{passed:f(e).state.value.status==="won"},null,8,["passed"])])}}}),be=[{name:"index",path:"/",component:xe,props:!0}],we={"text-xl":"","mt-6":"","inline-flex":"","gap-2":""},ke={key:0,"i-carbon-moon":""},Me={key:1,"i-carbon-sun":""},Ce=l("a",{class:"icon-btn","i-carbon-logo-github":"",rel:"noreferrer",href:"https://github.com/OliverWit/mineSweeping",target:"_blank",title:"GitHub"},null,-1),$e=y({setup(i){return(e,t)=>(u(),d("nav",we,[l("button",{class:"icon-btn !outline-none",onClick:t[0]||(t[0]=r=>f(se)())},[f(D)?(u(),d("div",ke)):(u(),d("div",Me))]),Ce]))}});var Ee=(i,e)=>{const t=i.__vccOpts||i;for(const[r,n]of e)t[r]=n;return t};const Ge={},Se={"font-sans":"",p:"y-10",text:"center gray-700 dark:gray-200"};function je(i,e){const t=U("router-view"),r=$e;return u(),d("main",Se,[k(t),k(r)])}var De=Ee(Ge,[["render",je]]);const N=X(De),Ne=Y({history:ee("./"),routes:be});N.use(Ne);N.mount("#app");
