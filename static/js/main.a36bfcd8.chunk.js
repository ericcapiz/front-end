(this["webpackJsonpmed-cabinet"]=this["webpackJsonpmed-cabinet"]||[]).push([[0],{62:function(e,t,n){e.exports=n(97)},86:function(e,t,n){},95:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(25),o=n.n(c),l=n(11),s=n(27),i=n(54),u=n(3),m=n(16),d=n.n(m),g={description:"great medical marijuana",effect:"relief of pain-like symptoms",flavor:"citrus-like accents",rating:"7",type:"sativa-indica hybrid",strain:"JChan"},E=function(){return window.localStorage.clear(),{type:"LOGOUT_ACTION"}},p={isPosting:!1,isLoggingIn:!1,token:"",successMessage:"",error:"",loggingSuccess:"",loggingError:"",userId:0,savingStatus:!1,saveSuccessMessage:"",saveErrorMessage:"",recommendRetrieve:!1,recommendSuccess:[],recommendError:"",deleteStart:!1,deleteSuccess:"",deleteError:""},f=(n(86),n(10)),b=n(6),O=n(18),h=n(12),S=n(19),v=n(20);function j(){var e=Object(S.a)(["\n    width: 800px;\n    margin: 0 auto;\n    padding: 40px 0;\n    border-radius: 10px;\n    background: #6ed36e;\n    display: flex;\n    flex-direction: column;\n    form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;  \n        input {\n            width: 70%;\n            margin: 0 15%;\n        }      \n        button {\n           width: 150px; \n           margin: 20px 0 0 0;\n        }\n        a button {\n            margin-bottom: 20px;\n        }\n    }\n"]);return j=function(){return e},e}var y=v.a.div(j()),R={username:"",password:""},C=Object(l.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{successMessage:e.successMessage,error:e.error,isLoggingIn:e.isLoggingIn,loggingSuccess:e.loggingSuccess,loggingError:e.loggingError})}),{logIn:function(e){return function(t){t({type:"LOGGING_IN_STATUS"}),d.a.post("https://lambda-med4-api.herokuapp.com/users/login",e).then((function(e){console.log("action.js: logIn: success: ",e.data),window.localStorage.setItem("token",e.data.token),t({type:"LOGIN_SUCCESS",payload:e.data})})).catch((function(e){console.log(e.message),t({type:"LOGIN_ERROR",payload:e.message})}))}}})((function(e){var t=Object(a.useState)(R),n=Object(h.a)(t,2),c=n[0],o=n[1],l=Object(b.g)().push,s=function(e){o(Object(u.a)(Object(u.a)({},c),{},Object(O.a)({},e.target.name,e.target.value)))};return r.a.createElement(y,null,r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),l("/user-form"),e.logIn(c),o(R)}},r.a.createElement("legend",null,"Enter Username (email) and Password"),r.a.createElement("label",{htmlFor:"username"}),"Username :",r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Enter Email(Username)",value:c.username,onChange:s}),r.a.createElement("label",{htmlFor:"password"}),"Password :",r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Enter Password",value:c.password,onChange:s}),r.a.createElement("button",{type:"submit"},"Log In"),r.a.createElement(f.b,{to:"/sign-up"},r.a.createElement("button",null,"sign up")),e.successMessage?r.a.createElement("p",{style:{color:"darkgreen"}},e.successMessage):null,e.error?r.a.createElement("p",{style:{color:"red"}},e.error):null,e.isLoggingIn?r.a.createElement("p",{style:{color:"red"}},"Signing In..."):null,e.loggingSuccess?r.a.createElement("p",{style:{color:"white",backgroundColor:"darkgreen",padding:"0 10px"}},e.loggingSuccess):null,e.loggingError?r.a.createElement("p",{style:{color:"red"}},"There was an error...",e.loggingError):null))})),w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null))};function _(){var e=Object(S.a)(["\n    width: 800px;\n    margin: 0 auto;\n    padding: 40px 0;\n    border-radius: 10px;\n    background: #6ed36e;\n    display: flex;\n    flex-direction: column;\n    form {\n        display: flex;\n        flex-direction: column;\n        align-items: center;  \n        input {\n            width: 70%;\n            margin: 0 15%;\n        }      \n        button {\n        width: 150px; \n        margin: 20px 0 0 0;\n        }\n        a button {\n            margin-bottom: 20px;\n        }\n    }\n"]);return _=function(){return e},e}var I=v.a.div(_()),x=Object(l.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{isPosting:e.isPosting,error:e.error})}),{makeUser:function(e){return function(t){console.log("in the makeUser function",e),t({type:"POSTING_USER_CREDS"}),d.a.post("https://lambda-med4-api.herokuapp.com/users/register",e).then((function(e){console.log(e.data),t({type:"USER_CREATE_SUCCESS",payload:e.data})})).catch((function(e){console.log("Error",e.message),t({type:"USER_CREATE_ERROR",payload:e.message})}))}}})((function(e){var t=Object(b.g)().push,n=Object(a.useState)({username:"",password:""}),c=Object(h.a)(n,2),o=c[0],l=c[1],s=function(e){console.log(o.username),l(Object(u.a)(Object(u.a)({},o),{},Object(O.a)({},e.target.name,e.target.value)))};return r.a.createElement(I,null,r.a.createElement("form",{onSubmit:function(n){return n.preventDefault(),o.username&&o.password?(e.makeUser(o),t("/")):l({username:"",password:""})}},r.a.createElement("legend",null,"Input New Username and Create a Password"),r.a.createElement("label",{htmlFor:"username"}),"Enter Username:",r.a.createElement("input",{type:"text",name:"username",id:"username",placeholder:"Please Enter Your Email",value:o.username,onChange:s}),r.a.createElement("label",{htmlFor:"password"}),"Enter Password:",r.a.createElement("input",{type:"password",name:"password",id:"password",placeholder:"Please Create a Password",value:o.password,onChange:s}),r.a.createElement("button",{type:"submit"},"Submit"),e.isPosting?r.a.createElement("p",{style:{color:"red"}},"Signing Up..."):null,e.error?r.a.createElement("p",{style:{color:"red"}},"unsuccessful post"):null))})),M=n(31),k=n(98),T=n(99),L=n(100),N=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null,r.a.createElement(T.a,null,r.a.createElement("div",null,e.weed.map((function(e){return r.a.createElement(L.a,null,r.a.createElement("div",{key:e.id},console.log(e.flavor[0]),console.log(e.strain[0]),r.a.createElement("h2",null,e.strain[0]),r.a.createElement("p",null,e.description[0])))}))))))},A=n(101),U=function(){var e=[{src:"https://medcabinet4.netlify.app/images/canna01_.jpg",altText:"Weed 1",caption:"OUR CABINET HAS IT ALL Find a strain that suits your perfect mood and favorite flavor. Browse all that the cannabis industry has to offer",header:"Sour Diesal",key:"1"},{src:"https://medcabinet4.netlify.app/images/injar02.jpg",altText:"AK-47",caption:"FILL UP YOUR CABINET FOR LATER",header:"AK 47",key:"2"},{src:"https://images.unsplash.com/photo-1503262028195-93c528f03218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",altText:"OG",caption:"Sometime's it takes Sativa",header:"OG",key:"3"}];return r.a.createElement("div",null,r.a.createElement(A.a,{items:e}))},D=function(){Object(b.g)().push;var e=Object(a.useState)([]),t=Object(h.a)(e,2),n=t[0],c=t[1],o={effect:"",flavor:""},l=Object(a.useState)(o),s=Object(h.a)(l,2),i=s[0],m=s[1],g=Object(a.useState)(!0),E=Object(h.a)(g,2),p=(E[0],E[1],Object(a.useState)({effect:"",flavor:""})),S=Object(h.a)(p,2),v=(S[0],S[1],M.a().shape({effect:M.b().oneOf(["Creative","Focused","Creative"],"Please select a desired effect"),flavor:M.b().oneOf(["Earthy","Apple"],"Please select a desired Flavor")}),function(e){e.persist();var t=Object(u.a)(Object(u.a)({},i),{},Object(O.a)({},e.target.name,e.target.value));m(t)});return r.a.createElement("div",null,r.a.createElement(k.a,null,r.a.createElement(T.a,{className:"sizing"},r.a.createElement(L.a,{sm:"12",md:{size:6,offset:3}},r.a.createElement(U,null))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(i),d.a.post("https://med-cab4.herokuapp.com/predict",i).then((function(e){console.log(e.data),c(e.data),m(o)})).catch((function(e){console.log(e)}))}},r.a.createElement(T.a,null,r.a.createElement(L.a,null,r.a.createElement("label",{htmlFor:"effect"},"Effect you're Looking for:",r.a.createElement("select",{name:"effect",onChange:v,value:i.effect},r.a.createElement("option",{value:null}),r.a.createElement("option",{value:"Energetic"},"Energetic"),r.a.createElement("option",{value:"Creative"},"Creative"),r.a.createElement("option",{value:"Focused"},"Focused")))),r.a.createElement(L.a,null,r.a.createElement("label",{htmlFor:"flavor"},"Flavor you're Looking for:",r.a.createElement("select",{name:"flavor",onChange:v,value:i.flavor},r.a.createElement("option",{value:null}),r.a.createElement("option",{value:"Apple"},"Apple"),r.a.createElement("option",{value:"Earthy"},"Earthy"),r.a.createElement("option",{value:"Blueberry"},"Blueberry"))))),r.a.createElement("button",{className:"Danger",type:"submit"},"Submit"))),r.a.createElement(k.a,null,r.a.createElement(N,{weed:n}),r.a.createElement(f.b,{to:"/save-recommend"},r.a.createElement("button",null,"Save Recommendation ?")),r.a.createElement(f.b,{to:"/get-recommend"},r.a.createElement("button",null,"Get Recommendation(s) ?"))))},F=n(61),G=function(e){var t=e.component,n=Object(F.a)(e,["component"]);return r.a.createElement(b.b,Object.assign({},n,{render:function(){return window.localStorage.getItem("token")?r.a.createElement(t,null):r.a.createElement(b.a,{to:"/"})}}))};function P(){var e=Object(S.a)(["\n    width: 100%;\n    height: 90px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 20px 40px 10px 40px;\n    background: rgba(0, 100, 0, .2);\n    color: white;\n    span {\n        width: 50px;\n        height: 50px;\n        img {\n            max-width: 100%;\n        }\n    }\n    div {\n        width: 50%;\n        display: flex;\n        justify-content: space-between;\n        a {\n            color: #007e00;\n            &:hover {\n                color: #04f204;\n            }\n        }\n    }\n"]);return P=function(){return e},e}var B=v.a.div(P()),V=Object(l.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{token:e.token})}),{logOut:E})((function(e){var t=Object(a.useState)(""),n=Object(h.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){return e.token?o("Find Recommendations"):o("")}),[e.token]),r.a.createElement(B,null,r.a.createElement("span",null,r.a.createElement("img",{src:"https://smallimg.pngkey.com/png/small/60-600941_cannabis-registration-green-medical-cross-logo.png",alt:"medicinal marijuana cross"})),r.a.createElement("div",null,r.a.createElement("a",{href:"https://medcabinet4.netlify.app/"},"Marketing Page"),r.a.createElement(f.c,{to:"/"},"Login / SignUp"),r.a.createElement(f.c,{to:"/logout"},"Log Out"),r.a.createElement(f.c,{to:"/user-form"},c)))})),J=Object(l.b)(null,{logOut:E})((function(e){var t=Object(b.g)().push;return Object(a.useEffect)((function(){e.logOut(),t("/")}),[]),r.a.createElement(r.a.Fragment,null)})),W=(n(95),{effect:"Creative",flavor:"Blueberry"}),Y=function(){var e=Object(a.useState)({}),t=Object(h.a)(e,2);t[0],t[1];return Object(a.useEffect)((function(){d.a.post("https://med-cab4.herokuapp.com/predict",W).then((function(e){console.log(e.data)})).catch((function(e){console.log(e.message)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"inside of APITest"))},z=Object(l.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{userId:e.userId})}),{saveRecommend:function(e){return function(t){t({type:"SAVE_INITIALIZE"}),d.a.post("https://lambda-med4-api.herokuapp.com/recommendations/".concat(e),g).then((function(e){console.log(e.data),t({type:"SAVE_RECOMMEND_SUCCESS",payload:e.data.message})})).catch((function(e){console.log(e.message),t({type:"SAVE_RECOMMEND_FAILURE",payload:e.message})}))}}})((function(e){return Object(a.useEffect)((function(){e.saveRecommend(e.userId)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{to:"/user-form"}))})),H=Object(l.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{userId:e.userId})}),{getRecommends:function(e){return function(t){t({type:"GET_RECOMMEND_START"}),d.a.get("https://lambda-med4-api.herokuapp.com/recommendations/".concat(e)).then((function(e){console.log(e.data),t({type:"GET_RECOMMEND_SUCCESS",payload:e.data})})).catch((function(e){console.log(e.message),t({type:"GET_RECOMMEND_ERROR"})}))}}})((function(e){return Object(a.useEffect)((function(){e.getRecommends(e.userId)}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{to:"/recommend-display"}))}));function K(){var e=Object(S.a)(["\n    width: 800px;\n    margin: 0 auto;\n    padding: 40px 0 40px 30px;\n    border-radius: 10px;\n    background: #6ed36e;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    div {\n        width: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        align-items: flex-start;\n        span {\n            color: rgb(0, 100, 0);\n            font-weight: 800;\n        }\n    }\n"]);return K=function(){return e},e}var Z=v.a.div(K()),q=Object(l.b)((function(e){return Object(u.a)(Object(u.a)({},e),{},{recommendRetrieve:e.recommendRetrieve,recommendSuccess:e.recommendSuccess})}),{deleteRecommend:function(e){return function(t){t({type:"DELETE_RECOMMEND_START"}),d.a.delete("https://lambda-med4-api.herokuapp.com/recommendations/".concat(e)).then((function(e){console.log(e.data),t({type:"DELETE_RECOMMEND_SUCCESS"})})).catch((function(e){console.log(e.message),t({type:"DELETE_RECOMMEND_FAIL"})}))}}})((function(e){console.log(e.recommendSuccess);var t=Object(a.useState)([]),n=Object(h.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){return e.recommendSuccess.length>0?o(e.recommendSuccess):o([])}),[e.recommendSuccess]),r.a.createElement(Z,null,e.recommendRetrieve?r.a.createElement("p",{style:{color:"red"}},"Retrieving Recommendations..."):null,c.length>0?r.a.createElement("div",null,r.a.createElement("h1",null,"Your List of Recommendations : ",console.log(c[0])),r.a.createElement("h3",null,r.a.createElement("span",null,"Strain: ")," ",c[0].strain),r.a.createElement("h3",null,c[0].type),r.a.createElement("p",null,r.a.createElement("span",null,"description: ")," ",c[0].description),r.a.createElement("p",null,c[0].flavor),r.a.createElement("p",null,r.a.createElement("span",null,"effects: ")," ",c[0].effect),r.a.createElement("p",null,r.a.createElement("span",null,"rating: ")," ",c[0].rating),r.a.createElement("button",{onClick:function(){e.deleteRecommend(c[0].id)}},"Delete Recommendation ?")):r.a.createElement("p",{style:{color:"red"}},"Recommendation Deleted ! "))}));var Q=function(){return r.a.createElement(f.a,null,r.a.createElement(V,null),r.a.createElement("div",{className:"chilled"},r.a.createElement(b.d,null,r.a.createElement(G,{exact:!0,path:"/user-form",component:D}),r.a.createElement(G,{exact:!0,path:"/recommend-display",component:q}),r.a.createElement(b.b,{path:"/save-recommend",component:z}),r.a.createElement(b.b,{path:"/get-recommend",component:H}),r.a.createElement(b.b,{path:"/sign-up",component:x}),r.a.createElement(b.b,{path:"/logout",component:J}),r.a.createElement(b.b,{path:"/api-test",component:Y}),r.a.createElement(b.b,{exact:!0,path:"/",component:w}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(96);var $=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"POSTING_USER_CREDS":return Object(u.a)(Object(u.a)({},e),{},{isPosting:!0});case"USER_CREATE_SUCCESS":return console.log(t.payload),Object(u.a)(Object(u.a)({},e),{},{error:"",loggingSuccess:"",loggingError:"",successMessage:t.payload.message,isPosting:!1});case"USER_CREATE_ERROR":return Object(u.a)(Object(u.a)({},e),{},{successMessage:"",loggingSuccess:"",loggingError:"",isPosting:!1,error:t.payload});case"LOGGING_IN_STATUS":return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:!0});case"LOGIN_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:!1,successMessage:"",error:"",loggingSuccess:t.payload.message+", Click Find Recommendations at the top of the page to Get Started !",userId:t.payload.id,token:t.payload.token,loggingError:""});case"LOGIN_ERROR":return Object(u.a)(Object(u.a)({},e),{},{isLoggingIn:!1,successMessage:"",error:"",loggingSuccess:"",loggingError:t.payload});case"LOGOUT_ACTION":return{isPosting:!1,isLoggingIn:!1,token:"",successMessage:"",error:"",loggingSuccess:"",loggingError:"",userId:0,savingStatus:!1,saveSuccessMessage:"",saveErrorMessage:"",recommendRetrieve:!1,recommendSuccess:[],recommendError:"",deleteStart:!1,deleteSuccess:"",deleteError:""};case"SAVE_INITIALIZE":return Object(u.a)(Object(u.a)({},e),{},{savingStatus:!0});case"SAVE_RECOMMEND_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{savingStatus:!1,saveSuccessMessage:t.payload,saveErrorMessage:""});case"SAVE_RECOMMEND_FAILURE":return Object(u.a)(Object(u.a)({},e),{},{savingStatus:!1,saveSuccessMessage:"",saveErrorMessage:t.payload});case"GET_RECOMMEND_START":return Object(u.a)(Object(u.a)({},e),{},{recommendRetrieve:!0});case"GET_RECOMMEND_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{recommendRetrieve:!1,recommendSuccess:t.payload,recommendError:""});case"GET_RECOMMEND_ERROR":return Object(u.a)(Object(u.a)({},e),{},{recommendRetrieve:!1,recommendError:t.payload,recommendSuccess:[]});case"DELETE_RECOMMEND_START":return Object(u.a)(Object(u.a)({},e),{},{deleteStart:!0});case"DELETE_RECOMMEND_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{recommendSuccess:[],deleteStart:!1});case"DELETE_RECOMMEND_FAIL":return Object(u.a)(Object(u.a)({},e),{},{deleteStart:!1});default:return e}}),Object(s.a)(i.a));o.a.render(r.a.createElement(l.a,{store:$},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.a36bfcd8.chunk.js.map