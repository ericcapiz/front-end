(this["webpackJsonpmed-cabinet"]=this["webpackJsonpmed-cabinet"]||[]).push([[0],{62:function(e,t,n){e.exports=n(97)},86:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),l=n.n(o),c=n(18),i=n(27),s=n(54),u=n(3),m=n(20),p=n.n(m),d={isPosting:!1,isLoggingIn:!1,credentials:{username:"",password:""},token:"",error:"",loggingError:""},g=(n(86),n(13)),E=n(6),f=n(15),b=n(11),h=n(24),v=n(25);function O(){var e=Object(h.a)(["\n    width: 800px;\n    margin: 0 auto;\n    padding: 40px 0;\n    border-radius: 10px;\n    background: #6ed36e;\n    display: flex;\n    flex-direction: column;\n    form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;  \n        input {\n            width: 70%;\n            margin: 0 15%;\n        }      \n        button {\n           width: 150px; \n           margin: 20px 0 0 0;\n        }\n        a button {\n            margin-bottom: 20px;\n        }\n    }\n"]);return O=function(){return e},e}var j=v.a.div(O()),y={email:"",password:""},w=Object(c.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:e.isLoggingIn,loggingError:e.loggingError})}),{logIn:function(e){return function(t){t({type:"LOGGING_IN_STATUS"}),p.a.post("https://reqres.in/api/login",e).then((function(e){console.log("action.js: logIn: success: ",e.data.token),window.localStorage.setItem("token",e.data.token),t({type:"LOGIN_SUCCESS",payload:e.data.token})})).catch((function(e){console.log(e.message),t({type:"LOGIN_ERROR",payload:e.message})}))}}})((function(e){var t=Object(a.useState)(y),n=Object(b.a)(t,2),o=n[0],l=n[1],c=function(e){l(Object(u.a)(Object(u.a)({},o),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement(j,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),e.logIn({email:"eve.holt@reqres.in",password:"pistol"}),l(y)}},r.a.createElement("legend",null,"Enter Username (email) and Password"),r.a.createElement("label",{htmlFor:"email"}),"email :",r.a.createElement("input",{type:"text",name:"email",id:"email",placeholder:"Enter Email(Username)",value:o.email,onChange:c}),r.a.createElement("label",{htmlFor:"password"}),"Password :",r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:o.password,onChange:c}),r.a.createElement("button",{type:"submit"},"Log In"),r.a.createElement(g.b,{to:"/sign-up"},r.a.createElement("button",null,"sign up")),e.isLoggingIn?r.a.createElement("p",{style:{color:"red"}},"Signing In..."):null,e.loggingError?r.a.createElement("p",{style:{color:"red"}},"There was an error...",e.loggingError):null))})),S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null))};function x(){var e=Object(h.a)(["\n    width: 800px;\n    margin: 0 auto;\n    padding: 40px 0;\n    border-radius: 10px;\n    background: #6ed36e;\n    display: flex;\n    flex-direction: column;\n    form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;  \n        input {\n            width: 70%;\n            margin: 0 15%;\n        }      \n        button {\n        width: 150px; \n        margin: 20px 0 0 0;\n        }\n        a button {\n            margin-bottom: 20px;\n        }\n    }\n"]);return x=function(){return e},e}var k=v.a.div(x()),I=Object(c.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{isPosting:e.isPosting,error:e.error})}),{makeUser:function(e){return function(t){console.log("in the makeUser function",e),t({type:"POSTING_USER_CREDS"}),p.a.post("https://lambda-med4-api.herokuapp.com/users/register",e).then((function(e){console.log(e.data),t({type:"USER_CREATE_SUCCESS",payload:e.data})})).catch((function(e){console.log("Error",e),t({type:"USER_CREATE_ERROR",payload:e.message})}))}}})((function(e){var t=Object(E.g)().push,n=Object(a.useState)({username:"",password:""}),o=Object(b.a)(n,2),l=o[0],c=o[1],i=function(e){console.log(l.username),c(Object(u.a)(Object(u.a)({},l),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement(k,null,r.a.createElement("form",{onSubmit:function(n){return n.preventDefault(),l.username&&l.password?(e.makeUser(l),t("/")):c({username:"",password:""})}},r.a.createElement("legend",null,"Input New Username and Create a Password"),r.a.createElement("label",{htmlFor:"username"}),"Enter Username:",r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Please Enter Your Email",value:l.username,onChange:i}),r.a.createElement("label",{htmlFor:"password"}),"Enter Password:",r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Please Create a Password",value:l.password,onChange:i}),r.a.createElement("button",{type:"submit"},"Submit"),e.isPosting?r.a.createElement("p",{style:{color:"red"}},"Signing Up..."):null,e.error?r.a.createElement("p",{style:{color:"red"}},"unsuccessful post"):null))})),R=n(28),C=n(98),U=n(99),L=n(100),P=function(e){return r.a.createElement(C.a,null,r.a.createElement(U.a,null,r.a.createElement("div",null,e.weed.map((function(e){return r.a.createElement(L.a,null,r.a.createElement("div",{key:e.id},r.a.createElement("img",{src:e.url,alt:"Bud type"}),r.a.createElement("h2",null,e.name),r.a.createElement("p",null,e.effects),r.a.createElement("p",null,e.flavors)))})))))},_=n(101),T=function(){var e=[{src:"https://medcabinet4.netlify.app/images/canna01_.jpg",altText:"Weed 1",caption:"OUR CABINET HAS IT ALL Find a strain that suits your perfect mood and favorite flavor. Browse all that the cannabis industry has to offer",header:"Sour Diesal",key:"1"},{src:"https://medcabinet4.netlify.app/images/injar02.jpg",altText:"AK-47",caption:"FILL UP YOUR CABINET FOR LATER",header:"AK 47",key:"2"},{src:"https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",altText:"OG",caption:"Sometime's it takes Sativa",header:"OG",key:"3"}];return r.a.createElement("div",null,r.a.createElement(_.a,{items:e}))},F=function(){Object(E.g)().push;var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],o=(t[1],{effect:"",flavor:""}),l=Object(a.useState)(o),c=Object(b.a)(l,2),i=c[0],s=c[1],m=Object(a.useState)(!0),d=Object(b.a)(m,2),g=d[0],h=d[1],v=Object(a.useState)({effect:"",flavor:""}),O=Object(b.a)(v,2),j=O[0],y=O[1],w=R.a().shape({effects:R.c().oneOf(["Creative","Focused"],"Please select a desired effect"),flavors:R.c().oneOf(["Earthy"],"Please select a desired Flavor")}),S=function(e){e.persist();var t=Object(u.a)(Object(u.a)({},i),{},Object(f.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value));x(e),s(t)},x=function(e){R.b(w,e.target.name).validate("terms"===e.target.name?e.target.checked:e.target.value).then((function(t){y(Object(u.a)(Object(u.a)({},j),{},Object(f.a)({},e.target.name,"")))})).catch((function(t){console.log(t),y(Object(u.a)(Object(u.a)({},j),{},Object(f.a)({},e.target.name,t.errors[0])))}))};return Object(a.useEffect)((function(){p.a.post("https://med-cab4.herokuapp.com/predict").then((function(e){console.log(e)})).catch((function(e){console.log(e)})),w.isValid(i).then((function(e){h(!e)}))}),[i]),r.a.createElement("div",null,r.a.createElement(C.a,null,r.a.createElement(U.a,{className:"sizing"},r.a.createElement(L.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement(T,null))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p.a.post("https://med-cab4.herokuapp.com/predict",i).then((function(e){console.log(e.data);e.data.filter((function(e){return e.effect===i.effect}));s(o)})).catch((function(e){console.log(e)}))}},r.a.createElement(U.a,null,r.a.createElement(L.a,null,r.a.createElement("label",{htmlFor:"effects"},"Effect you're Looking for:",r.a.createElement("select",{name:"effects",onChange:S,value:i.effects},r.a.createElement("option",{value:"Energetic"},"Energetic"),r.a.createElement("option",{value:"Tingly"},"Tingly"),r.a.createElement("option",{value:"Euphoric"},"Euphoric"),r.a.createElement("option",{value:"Relaxed"},"'Relaxed'"),r.a.createElement("option",{value:"Aroused"},"'Aroused'"),r.a.createElement("option",{value:"Happy"},"'Happy'"),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:null}),r.a.createElement("option",{value:"Creative"},"Creative"),r.a.createElement("option",{value:"Focused"},"Focused")))),r.a.createElement(L.a,null,r.a.createElement("label",{htmlFor:"flavors"},"Flavor you're Looking for:",r.a.createElement("select",{name:"flavors",onChange:S,value:i.flavors},r.a.createElement("option",{value:null}),r.a.createElement("option",{value:"Earthy"},"Earthy"))))),r.a.createElement("button",{className:"Danger",disabled:g,type:"submit"},"Submit"))),r.a.createElement(C.a,null,r.a.createElement(P,{weed:n})))},A=n(61),N=function(e){var t=e.component,n=Object(A.a)(e,["component"]);return r.a.createElement(E.b,Object.assign({},n,{render:function(){return window.localStorage.getItem("token")?r.a.createElement(t,null):r.a.createElement(E.a,{to:"/"})}}))};function G(){var e=Object(h.a)(["\n    width: 100%;\n    height: 90px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 40px 10px 40px;\n    background: rgba(0, 100, 0, .2);\n    color: white;\n    span {\n        width: 50px;\n        height: 50px;\n        img {\n            max-width: 100%;\n        }\n    }\n    div {\n        width: 50%;\n        display: flex;\n        justify-content: space-between;\n        a {\n            color: #007e00;\n            &:hover {\n                color: #04f204;\n            }\n        }\n    }\n"]);return G=function(){return e},e}var B=v.a.div(G()),D=Object(c.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{token:e.token})}),null)((function(e){var t=Object(a.useState)(""),n=Object(b.a)(t,2),o=n[0],l=n[1];return Object(a.useEffect)((function(){e.token&&l("Find Recommendations")}),[e.token]),r.a.createElement(B,null,r.a.createElement("span",null,r.a.createElement("img",{src:"https://smallimg.pngkey.com/png/small/60-600941_cannabis-registration-green-medical-cross-logo.png",alt:"medicinal marijuana cross"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://medcabinet4.netlify.app/"},"Marketing Page"),r.a.createElement(g.c,{to:"/"},"Login / SignUp"),r.a.createElement(g.c,{to:"/user-form"},o)))})),H=(n(95),{effect:"Creative",flavor:"Blueberry"}),W=function(){var e=Object(a.useState)({}),t=Object(b.a)(e,2);t[0],t[1];return Object(a.useEffect)((function(){p.a.get("https://med-cab4.herokuapp.com/predict",H).then((function(e){console.log(e.data)})).catch((function(e){console.log(e.message)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"inside of APITest"))};var q=function(){return r.a.createElement(g.a,null,r.a.createElement(D,null),r.a.createElement("div",{className:"chilled"},r.a.createElement(E.d,null,r.a.createElement(N,{exact:!0,path:"/user-form",component:F}),r.a.createElement(E.b,{path:"/sign-up",component:I}),r.a.createElement(E.b,{path:"/api-test",component:W}),r.a.createElement(E.b,{exact:!0,path:"/",component:S}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(96);var J=Object(i.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTING_USER_CREDS":return Object(u.a)(Object(u.a)({},e),{},{isPosting:!0});case"USER_CREATE_SUCCESS":return console.log(t.payload),Object(u.a)(Object(u.a)({},e),{},{credentials:{username:t.payload.username,password:t.payload.password},error:"",isPosting:!1});case"USER_CREATE_ERROR":return Object(u.a)(Object(u.a)({},e),{},{isPosting:!1,error:t.payload});case"LOGGING_IN_STATUS":return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:!0,token:t.payload});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:!1,token:t.payload,loggingError:""});case"LOGIN_ERROR":return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:!1,loggingError:t.payload});default:return e}}),Object(i.a)(s.a));l.a.render(r.a.createElement(c.a,{store:J},r.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.f7124275.chunk.js.map