(this.webpackJsonpsearch=this.webpackJsonpsearch||[]).push([[0],{12:function(e,t,a){},15:function(e,t,a){e.exports=a(37)},37:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),l=a(2),o=a(14),i=a.n(o),u=(a(12),function(e){var t=e.user;return c.a.createElement("div",{className:"App"},c.a.createElement("div",{className:"container1"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-12 mx-auto mt-1 col-md-9 mx-auto col-sm-6"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-block p-2"},c.a.createElement("div",{className:"card-text "},c.a.createElement("p",{style:{"font-size":"20px"}},t.id),c.a.createElement("p",{style:{"font-size":"15px"}},c.a.createElement("i",null,t.name)),c.a.createElement("br",null),c.a.createElement("p",{style:{"font-size":"15px"}},t.address))))))))});var m=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),o=Object(l.a)(s,2),m=o[0],d=o[1],p=Object(n.useState)(""),E=Object(l.a)(p,2),f=E[0],b=E[1],v=Object(n.useState)([]),h=Object(l.a)(v,2),w=h[0],j=h[1];return Object(n.useEffect)((function(){d(!0),i.a.get("http://www.mocky.io/v2/5ba8efb23100007200c2750c").then((function(e){r(e.data),d(!1)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){j(a.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())||e.address.toLowerCase().includes(f.toLowerCase())||e.id.toLowerCase().includes(f.toLowerCase())})))}),[f,a]),m?c.a.createElement("p",null,"Loading UserDetails..."):c.a.createElement("div",{className:"App contr container"},c.a.createElement("div",{class:"input-icons"},c.a.createElement("input",{type:"text",placeholder:"Search Users by ID, adress, name",onChange:function(e){return b(e.target.value)},className:"boxWid"}),w.map((function(e,t){return c.a.createElement(u,{key:t,user:e})}))),w.length<=0?c.a.createElement("h5",{className:"card p-2"},"results not found"):null)};s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m,null)),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c9bff656.chunk.js.map