(this["webpackJsonpquizz-app"]=this["webpackJsonpquizz-app"]||[]).push([[0],{118:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),s=t.n(i),o=(t(84),t(28));t(85);function l(){return r.a.createElement("div",null,r.a.createElement("h1",{style:{color:"white"}},"REACT HOOKS - QUIZ APP"))}var c=[{id:1,quiz:"Who is pro ?",answers:["hieu","hieu1","hieu2"],rightAnswer:"hieu"},{id:2,quiz:"Who is pro 2?",answers:["hieu","hieu1","hieu2"],rightAnswer:"hieu2"},{id:"099099",quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"093909"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"009039"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"090089"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"01010101"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"092299"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"099099"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"222099"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"2222099"},{quiz:"how build the app ?",answers:["vinayak","sarthak","somil","devesh"],rightAnswer:"vinayak",id:"09922099"}],h=t(122),u=t(124),d=t(125);function m(e){var a=Object(n.useState)(!0),t=Object(o.a)(a,2),i=t[0],s=t[1],l=Object(n.useState)(null),c=Object(o.a)(l,2),m=c[0],w=c[1],v=e.score,p=e.loadScore,k=e.answers,y=e.rightAnswer;return r.a.createElement("div",null,i?k.map((function(e,a){return r.a.createElement(h.a,{key:e.index,onClick:function(e){return function(e,a){s(!1),e.target.textContent===a&&(v++,p(v),w(!0))}(e,y)}},e)})):r.a.createElement(h.a,{type:"primary"},y),i?"":m?r.a.createElement("div",{style:{marginTop:30}},r.a.createElement(u.a,{style:{color:"green",margin:10}}),"Correct!"):r.a.createElement("div",{style:{marginTop:30}},r.a.createElement(d.a,{style:{color:"red",margin:10}}),"Incorrect!"))}var w=t(120);function v(){var e=Object(n.useState)([]),a=Object(o.a)(e,2),t=a[0],i=a[1],s=Object(n.useState)(0),l=Object(o.a)(s,2),u=l[0],d=l[1],v=function(e){d(e)};Object(n.useEffect)((function(){i(c)}));return r.a.createElement("div",{className:"site-card-border-less-wrapper"},r.a.createElement(h.a,{onClick:function(){d(0),window.location.reload()}},"Play Again!"),r.a.createElement("h2",null,"Score: ",u),t.map((function(e){return r.a.createElement(w.a,{title:e.quiz,style:{borderBottom:"0.5px solid"},key:e.id},r.a.createElement(m,{score:u,loadScore:v,key:e.id,answers:e.answers,rightAnswer:e.rightAnswer}))})))}var p=t(123),k=p.a.Header,y=p.a.Content;var g=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],i=a[1];return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,r.a.createElement(k,{className:"header"},r.a.createElement(l,null)),t?r.a.createElement(y,{className:"content"}," ",r.a.createElement(v,null)):r.a.createElement(h.a,{className:"get-started-button",onClick:function(){return i(!0)}}," Get Started")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,a,t){e.exports=t(118)},84:function(e,a,t){},85:function(e,a,t){}},[[79,1,2]]]);
//# sourceMappingURL=main.aae453e0.chunk.js.map