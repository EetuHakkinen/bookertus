(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{206:function(e,t,n){e.exports=n(353)},211:function(e,t,n){},212:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},213:function(e,t,n){},218:function(e,t,n){},353:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(22),o=n.n(c),l=(n(211),n(122)),i=n(21),u=(n(212),n(213),n(34)),s=n(28),m=n(35),p=function(e){return{type:"SET",data:e}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET":return t.data;default:return e}},d=(n(218),n(29)),g=n.n(d),E=n(16),h=n.n(E),v=n(26),b="http://localhost:3001/api/";function w(e){return k.apply(this,arguments)}function k(){return(k=Object(v.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post(b+"users",t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(e){return O.apply(this,arguments)}function O(){return(O=Object(v.a)(h.a.mark(function e(t){return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.post(b+"login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)}))).apply(this,arguments)}var x,j=function(e,t,n){return g.a.post(b+"stock",{name:t,ticker:e},{headers:{authorization:"bearer "+n.token}})},S=function(e){return g.a.get(b+"stock",{headers:{authorization:"bearer "+e.token}})},N=function(e,t){return g.a.delete(b+"stock/"+e,{headers:{authorization:"bearer "+t.token}})},A=function(e,t){return j(e.ticker,e.name,t),{type:"ADD",data:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD":return e.concat(t.data);case"ADDALL":return t.data;default:return e}},L=n(25),M=n(119),R=n.n(M),B=function(e){var t=e.ticker,n=(e.name,e.id),a=e.user;return r.a.createElement(L.d,null,r.a.createElement(L.f,null,t),r.a.createElement(L.e,null,r.a.createElement(L.b,{"aria-label":"Delete",onClick:function(){return C(n,a)}},r.a.createElement(R.a,null))))},C=function(e,t){N(e,t)},G=Object(m.b)(function(e){return{user:e.user,stocks:e.stock}},{setUser:p,addStock:A,addAllStocks:function(e){return{type:"ADDALL",data:e}}})(function(e){var t,n=e.user,c=(e.setUser,e.stocks),o=e.addAllStocks;if(Object(a.useEffect)(function(){S(n).then(function(e){o(e.data)})},[]),!n||!n.token)return r.a.createElement(s.a,{to:"/login"});return console.log(c),r.a.createElement("div",{className:"container"},r.a.createElement("p",null,"moi"),r.a.createElement("h1",null,"Welcome to Stonot, ",n&&n.name,"!"),r.a.createElement("h2",null,"add a new stock"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),A({name:e.target.name.value,ticker:e.target.ticker.value},n),e.target.name.value="",e.target.ticker.value=""}},r.a.createElement("span",null,"ticker:"),r.a.createElement("input",{name:"ticker"}),r.a.createElement("span",null,"name"),r.a.createElement("input",{name:"name"}),r.a.createElement("button",{type:"submit"},"add")),r.a.createElement(L.a,{container:!0,spacing:16},r.a.createElement(L.a,(t={item:!0,xs:12},Object(i.a)(t,"xs",!0),Object(i.a)(t,"md",6),t),r.a.createElement(L.g,{variant:"h5"},"Stocks"),r.a.createElement(L.c,null,c.map(function(e){return r.a.createElement(B,Object.assign({key:e.id},e,{user:n}))})))))}),P=function(e){var t=function(){var e=Object(v.a)(h.a.mark(function e(t){var n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={username:t.target.username.value,name:t.target.name.value,password:t.target.password.value},e.next=4,w(n);case 4:200===e.sent.status&&window.location.replace("/login");case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("h1",null,"Registeration form"),r.a.createElement("form",{onSubmit:t},r.a.createElement("p",null,"Username"),r.a.createElement("input",{type:"text",name:"username"}),r.a.createElement("p",null,"Name"),r.a.createElement("input",{type:"text",name:"name"}),r.a.createElement("p",null,"Password"),r.a.createElement("input",{type:"password",name:"password"}),r.a.createElement("button",{type:"submit"},"Register")))},T={setUser:p},z=Object(m.b)(function(e){return{user:e.user}},T)(function(e){var t=e.user,n=e.setUser;Object(a.useEffect)(function(){var e=window.localStorage.getItem("stonot-user"),t=JSON.parse(e);n(t)},[]);var c=function(){var e=Object(v.a)(h.a.mark(function e(t){var a;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,y({username:t.target.username.value,password:t.target.password.value});case 3:200===(a=e.sent).status&&(n(a.data),window.localStorage.setItem("stonot-user",JSON.stringify(a.data)),window.location.replace("/"));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return t&&t.token?r.a.createElement(s.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:function(e){return c(e)}},r.a.createElement("p",null,"username: "),r.a.createElement("input",{type:"text",name:"username"}),r.a.createElement("p",null,"password:"),r.a.createElement("input",{type:"password",name:"password"}),r.a.createElement("button",{type:"submit"},"Log in"),r.a.createElement("br",null),r.a.createElement(u.b,{to:"/registeration"},"No user yet?")))}),U=n(17),H=n(56),I=n.n(H),J=n(57),W=n.n(J),Y=n(40),q=n.n(Y),X=n(58),F=n.n(X),$=n(53),_=n.n($),K=n(60),Q=n.n(K),V=n(41),Z=n.n(V),ee=n(120),te=n.n(ee),ne=n(121),ae=n.n(ne),re=n(54),ce=n.n(re),oe=n(59),le=n.n(oe),ie=n(55),ue=n.n(ie),se=n(81),me=n.n(se),pe=Object(U.createMuiTheme)({palette:{primary:{main:"#673ab7"},secondary:{main:"#ffb74d"}},overrides:{MuiBottomNavigation:{root:{backgroundColor:"#673ab7"}},MuiBottomNavigationAction:{root:{color:me.a[400],"&$selected":{color:"#fff"}},selected:{color:"#fff"},label:{"&$selected":{fontSize:"8pt"}}},MuiCircularProgress:{root:{margin:"auto"}}}}),fe=n(7),de=n.n(fe);var ge=(x={root:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}},Object(i.a)(x,"root",{display:"flex"}),Object(i.a)(x,"menuButton",{marginLeft:12,marginRight:20}),Object(i.a)(x,"hide",{display:"none"}),Object(i.a)(x,"drawer",{width:240,flexShrink:0}),Object(i.a)(x,"drawerPaper",{width:240}),Object(i.a)(x,"drawerHeader",{display:"flex",alignItems:"center",padding:"0 8px",justifyContent:"flex-end"}),Object(i.a)(x,"content",{flexGrow:1,padding:"5px",marginLeft:-240}),Object(i.a)(x,"contentShift",{marginLeft:0}),x),Ee=Object(U.withStyles)(ge,{withTheme:!1})(function(e){var t=e.classes,n=Object(a.useState)(!1),c=Object(l.a)(n,2),o=c[0],i=c[1];return r.a.createElement("div",{className:t.root},r.a.createElement(I.a,{position:"fixed"},r.a.createElement(W.a,null,r.a.createElement(Z.a,{className:de()(t.menuButton,o&&t.hide),color:"inherit","aria-label":"Menu",onClick:function(){return i(!o)}},r.a.createElement(te.a,null)),r.a.createElement(q.a,{variant:"h6",color:"inherit",className:t.grow},"Stonot"))),r.a.createElement(F.a,{className:t.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:t.drawerPaper}},r.a.createElement("div",{className:t.drawerHeader},r.a.createElement(Z.a,{onClick:function(){return i(!1)}},r.a.createElement(ae.a,null))),r.a.createElement(_.a,null,r.a.createElement(ce.a,{button:!0},r.a.createElement(le.a,null),r.a.createElement(ue.a,{primary:"Text here"}))),r.a.createElement(Q.a,null)))}),he=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(u.a,null,r.a.createElement(U.MuiThemeProvider,{theme:pe},r.a.createElement(Ee,null),r.a.createElement(s.b,{exact:!0,path:"/",render:function(){return r.a.createElement(G,null)}}),r.a.createElement(s.b,{path:"/registeration",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(s.b,{path:"/login",render:function(){return r.a.createElement(z,null)}}))))},ve="BPX1GQyGMO9t0kYGqzlj1S6EcXIfLpuYC5HqnrcBGiGxHAgvAi46iOtHYqeg3Wy2tczoaFS_ZAaDhFNX5Y509vM";function be(){return(be=Object(v.a)(h.a.mark(function e(){var t,n;return h.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Registering service worker"),e.next=3,navigator.serviceWorker.register("/sw.js",{scope:"/"});case 3:return t=e.sent,navigator.serviceWorker.register(),console.log("Registered service worker"),console.log("Registering push"),e.next=9,t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:we(ve)});case 9:return n=e.sent,console.log("Registered push"),console.log("Sending push"),e.next=14,fetch("/api/push/subscribe",{method:"POST",body:JSON.stringify(n),headers:{"content-type":"application/json"}});case 14:console.log("Sent push");case 15:case"end":return e.stop()}},e)}))).apply(this,arguments)}function we(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=window.atob(t),a=new Uint8Array(n.length),r=0;r<n.length;++r)a[r]=n.charCodeAt(r);return a}"serviceWorker"in navigator&&(console.log("Registering service worker"),function(){return be.apply(this,arguments)}().catch(function(e){return console.error(e)}));var ke=n(42),ye=Object(ke.c)(Object(ke.b)({user:f,stock:D}));o.a.render(r.a.createElement(m.a,{store:ye},r.a.createElement(he,null)),document.getElementById("root"))}},[[206,1,2]]]);
//# sourceMappingURL=main.6d9f1a85.chunk.js.map