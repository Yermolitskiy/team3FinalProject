(function(e){function t(t){for(var a,r,c=t[0],i=t[1],u=t[2],l=0,d=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);b&&b(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},r={app:0},o={app:0},s=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c85f8":"5ca7b073","chunk-2d0d03d6":"12c9e0b7","chunk-2d0e5991":"d864f986","chunk-5c491832":"f2d0cbae","chunk-70444475":"826f0553","chunk-7ad1da5f":"d9fdbcf8","chunk-fd68499c":"e557fcb6"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-5c491832":1,"chunk-70444475":1,"chunk-7ad1da5f":1,"chunk-fd68499c":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0c85f8":"31d6cfe0","chunk-2d0d03d6":"31d6cfe0","chunk-2d0e5991":"31d6cfe0","chunk-5c491832":"934fe30e","chunk-70444475":"fb33995a","chunk-7ad1da5f":"12d4b1ea","chunk-fd68499c":"4b548e41"}[e]+".css",o=i.p+a,s=document.getElementsByTagName("link"),c=0;c<s.length;c++){var u=s[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){u=d[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],b.parentNode.removeChild(b),n(s)},b.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var b=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f57":function(e,t,n){"use strict";var a=n("d4ec"),r=n("bee2"),o=n("7424"),s=function(){function e(){Object(a["a"])(this,e)}return Object(r["a"])(e,[{key:"getPublicContent",value:function(){return o["a"].get("/test/all")}},{key:"getUserBoard",value:function(){return o["a"].get("/test/user")}},{key:"getModeratorBoard",value:function(){return o["a"].get("/test/mod")}},{key:"getAdminBoard",value:function(){return o["a"].get("/test/admin")}}]),e}();t["a"]=new s},"2f4a":function(e,t,n){"use strict";n("e7d3")},"30ef":function(e,t,n){"use strict";var a={on:function(e,t){document.addEventListener(e,(function(e){return t(e.detail)}))},dispatch:function(e,t){document.dispatchEvent(new CustomEvent(e,{detail:t}))},remove:function(e,t){document.removeEventListener(e,t)}};t["a"]=a},4677:function(e,t,n){"use strict";n("66ee")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),r={id:"app"},o={class:"navb"},s=Object(a["i"])("Posts"),c=Object(a["i"])("Add"),i={key:0},u=Object(a["i"])("Admin Board"),l={key:1},d=Object(a["i"])("Moderator Board"),b=Object(a["i"])("User Content"),f={key:0},p=Object(a["i"])(" Sign Up"),m=Object(a["i"])(" Login"),h={key:1},g={class:"container"};function v(e,t,n,v,j,O){var y=Object(a["E"])("font-awesome-icon"),w=Object(a["E"])("router-link"),k=Object(a["E"])("router-view");return Object(a["w"])(),Object(a["f"])("div",r,[Object(a["g"])("div",o,[Object(a["g"])("ul",null,[Object(a["g"])("div",null,[Object(a["g"])("li",null,[Object(a["j"])(w,{to:"/home",id:"nl"},{default:Object(a["O"])((function(){return[Object(a["j"])(y,{icon:"home"})]})),_:1})]),Object(a["g"])("li",null,[O.currentUser?(Object(a["w"])(),Object(a["d"])(w,{key:0,to:"/posts",id:"nl"},{default:Object(a["O"])((function(){return[s]})),_:1})):Object(a["e"])("",!0)]),Object(a["g"])("li",null,[O.currentUser?(Object(a["w"])(),Object(a["d"])(w,{key:0,to:"/add",id:"nl"},{default:Object(a["O"])((function(){return[c]})),_:1})):Object(a["e"])("",!0)]),O.showAdminBoard?(Object(a["w"])(),Object(a["f"])("li",i,[Object(a["j"])(w,{id:"nl",to:"/admin"},{default:Object(a["O"])((function(){return[u]})),_:1})])):Object(a["e"])("",!0),O.showModeratorBoard?(Object(a["w"])(),Object(a["f"])("li",l,[Object(a["j"])(w,{id:"nl",to:"/mod"},{default:Object(a["O"])((function(){return[d]})),_:1})])):Object(a["e"])("",!0),Object(a["g"])("li",null,[O.currentUser?(Object(a["w"])(),Object(a["d"])(w,{key:0,id:"nl",to:"/user"},{default:Object(a["O"])((function(){return[b]})),_:1})):Object(a["e"])("",!0)])]),O.currentUser?Object(a["e"])("",!0):(Object(a["w"])(),Object(a["f"])("div",f,[Object(a["g"])("li",null,[Object(a["j"])(w,{id:"nl",to:"/register"},{default:Object(a["O"])((function(){return[Object(a["j"])(y,{icon:"user-plus"}),p]})),_:1})]),Object(a["g"])("li",null,[Object(a["j"])(w,{id:"nl",to:"/login"},{default:Object(a["O"])((function(){return[Object(a["j"])(y,{icon:"sign-in-alt"}),m]})),_:1})])])),O.currentUser?(Object(a["w"])(),Object(a["f"])("div",h,[Object(a["g"])("li",null,[Object(a["j"])(w,{id:"nl",to:"/profile"},{default:Object(a["O"])((function(){return[Object(a["i"])(Object(a["H"])(O.currentUser.username),1)]})),_:1})]),Object(a["g"])("li",null,[Object(a["g"])("a",{id:"nl",onClick:t[0]||(t[0]=Object(a["Q"])((function(){return O.logOut&&O.logOut.apply(O,arguments)}),["prevent"]))}," LogOut ")])])):Object(a["e"])("",!0)])]),Object(a["g"])("div",g,[Object(a["j"])(k)])])}n("caad"),n("2532");var j=n("30ef"),O={computed:{currentUser:function(){return this.$store.state.auth.user},showAdminBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_ADMIN")},showModeratorBoard:function(){return!(!this.currentUser||!this.currentUser["roles"])&&this.currentUser["roles"].includes("ROLE_MODERATOR")}},methods:{logOut:function(){this.$store.dispatch("auth/logout"),this.$router.push("/login")}},mounted:function(){var e=this;j["a"].on("logout",(function(){e.logOut()}))},beforeUnmount:function(){j["a"].remove("logout")}};n("5c54");O.render=v;var y=O,w=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02"));Object(a["z"])("data-v-b3361b5c");var k=Object(a["h"])('<div id="main-wrapper" data-v-b3361b5c><div class="primary-content col" data-v-b3361b5c><h2 data-v-b3361b5c>Technologies used in Node:</h2></div><div class="primary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;JWT&quot;</h3><p data-v-b3361b5c>JSON Web Token is an open standard for securely transferring data within parties using a JSON object. JWT is used for stateless authentication mechanisms for users and providers, this means maintaining session is on the client-side instead of storing sessions on the server. Here, we will implement the JWT authentication system in NodeJs.</p></div><div class="primary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;MULTER&quot;</h3><p data-v-b3361b5c>Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.</p></div><div class="primary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;Sequelize&quot;</h3><p data-v-b3361b5c>Sequelize is a promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.</p></div><div class="primary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;Bcryptjs&quot;</h3><p data-v-b3361b5c>The bcrypt hashing function allows us to build a password security platform that scales with computation power and always hashes every password with a salt.</p></div><div class="primary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;Cors&quot;</h3><p data-v-b3361b5c>CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p></div><div class="primary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;Express&quot;</h3><p data-v-b3361b5c>Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. </p></div><div class="secondary-content col" data-v-b3361b5c><h2 data-v-b3361b5c>Technologies used in VUE module:</h2></div><div class="secondary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;vee-validate&quot;</h3><p data-v-b3361b5c>vee-validate is a template-based validation framework for Vue.js that allows you to validate inputs and display errors.</p></div><div class="secondary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;vue-router&quot;</h3><p data-v-b3361b5c>Vue Router is the official router for Vue.js (opens new window). It deeply integrates with Vue.js core to make building Single Page Applications with Vue.js a breeze.</p><hr data-v-b3361b5c></div><div class="secondary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;vuex&quot;</h3><p data-v-b3361b5c>Vuex is a state management pattern + library for Vue.js applications. It serves as a centralized store for all the components in an application, with rules ensuring that the state can only be mutated in a predictable fashion. It also integrates with Vue&#39;s official devtools extension (opens new window) to provide advanced features such as zero-config time-travel debugging and state snapshot export / import.</p><hr data-v-b3361b5c></div><div class="secondary-content col" data-v-b3361b5c><h3 data-v-b3361b5c>&quot;yup&quot;</h3><p data-v-b3361b5c>Yup is a JavaScript schema builder for value parsing and validation. Define a schema, transform a value to match, validate the shape of an existing value, or both. Yup schema are extremely expressive and allow modeling complex, interdependent validations, or value transformations.</p><hr data-v-b3361b5c></div><footer class="main-footer" data-v-b3361b5c><p data-v-b3361b5c>©2021 Accenture Bootcamp project by AJ</p></footer></div>',1);function S(e,t,n,r,o,s){return Object(a["w"])(),Object(a["f"])("div",null,[Object(a["g"])("header",null,[Object(a["g"])("h3",null,Object(a["H"])(o.content),1),k])])}Object(a["x"])();n("25f0");var E=n("1f57"),q={name:"Home",data:function(){return{content:""}},mounted:function(){var e=this;E["a"].getPublicContent().then((function(t){e.content=t.data}),(function(t){e.content=t.response&&t.response.data&&t.response.data.message||t.message||t.toString()}))}};n("4677");q.render=S,q.__scopeId="data-v-b3361b5c";var x=q;Object(a["z"])("data-v-37a6c8cc");var T={class:"login"},I=Object(a["g"])("h1",{class:"login-title"},"Login to your account",-1),U=Object(a["g"])("label",{for:"username"},"Username",-1),_=Object(a["g"])("label",{for:"password"},"Password",-1),L=["disabled"],P={class:"spinner-border spinner-border-sm"},M=Object(a["g"])("span",null,"Login",-1),A={key:0,class:"alert alert-danger",role:"alert"};function N(e,t,n,r,o,s){var c=Object(a["E"])("Field"),i=Object(a["E"])("ErrorMessage"),u=Object(a["E"])("Form");return Object(a["w"])(),Object(a["f"])("div",null,[Object(a["g"])("form",T,[I,Object(a["j"])(u,{onSubmit:s.handleLogin,"validation-schema":o.schema},{default:Object(a["O"])((function(){return[Object(a["g"])("div",null,[U,Object(a["j"])(c,{name:"username",class:"login-input",type:"text"}),Object(a["j"])(i,{name:"username"})]),Object(a["g"])("div",null,[_,Object(a["j"])(c,{name:"password",class:"login-input",type:"password"}),Object(a["j"])(i,{name:"password"})]),Object(a["g"])("div",null,[Object(a["g"])("button",{class:"login-button",disabled:o.loading},[Object(a["P"])(Object(a["g"])("span",P,null,512),[[a["L"],o.loading]]),M],8,L)]),Object(a["g"])("div",null,[o.message?(Object(a["w"])(),Object(a["f"])("div",A,Object(a["H"])(o.message),1)):Object(a["e"])("",!0)])]})),_:1},8,["onSubmit","validation-schema"])])])}Object(a["x"])();var J=n("7bb1"),C=n("506a"),R={name:"Login",components:{Form:J["c"],Field:J["b"],ErrorMessage:J["a"]},data:function(){var e=C["a"]().shape({username:C["b"]().required("Username is required!"),password:C["b"]().required("Password is required!")});return{loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},created:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleLogin:function(e){var t=this;this.loading=!0,this.$store.dispatch("auth/login",e).then((function(){t.$router.push("/profile")}),(function(e){t.loading=!1,t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString()}))}}};n("2f4a");R.render=N,R.__scopeId="data-v-37a6c8cc";var B=R;Object(a["z"])("data-v-77de1983");var F={class:"signup"},$=Object(a["g"])("h1",{class:"signup-title"},"Please Sign Up",-1),z={key:0},V=Object(a["g"])("label",{for:"username"},"Username",-1),H=Object(a["g"])("label",{for:"email"},"Email",-1),D=Object(a["g"])("label",{for:"password"},"Password",-1),Q=["disabled"],W={class:"spinner-border spinner-border-sm"},Y=Object(a["i"])(" Sign Up ");function K(e,t,n,r,o,s){var c=Object(a["E"])("Field"),i=Object(a["E"])("ErrorMessage"),u=Object(a["E"])("Form");return Object(a["w"])(),Object(a["f"])("div",null,[Object(a["g"])("form",F,[$,Object(a["j"])(u,{onSubmit:s.handleRegister,"validation-schema":o.schema},{default:Object(a["O"])((function(){return[o.successful?Object(a["e"])("",!0):(Object(a["w"])(),Object(a["f"])("div",z,[Object(a["g"])("div",null,[V,Object(a["j"])(c,{name:"username",class:"signup-input",type:"text"}),Object(a["j"])(i,{name:"username",class:"error-feedback"})]),Object(a["g"])("div",null,[H,Object(a["j"])(c,{name:"email",class:"signup-input",type:"email"}),Object(a["j"])(i,{name:"email",class:"error-feedback"})]),Object(a["g"])("div",null,[D,Object(a["j"])(c,{name:"password",class:"signup-input",type:"password"}),Object(a["j"])(i,{name:"password",class:"error-feedback"})]),Object(a["g"])("div",null,[Object(a["g"])("button",{class:"signup-button",disabled:o.loading},[Object(a["P"])(Object(a["g"])("span",W,null,512),[[a["L"],o.loading]]),Y],8,Q)])]))]})),_:1},8,["onSubmit","validation-schema"]),o.message?(Object(a["w"])(),Object(a["f"])("div",{key:0,class:Object(a["q"])(["alert",o.successful?"alert-success":"alert-danger"])},Object(a["H"])(o.message),3)):Object(a["e"])("",!0)])])}Object(a["x"])();var G={name:"Register",components:{Form:J["c"],Field:J["b"],ErrorMessage:J["a"]},data:function(){var e=C["a"]().shape({username:C["b"]().required("Username is required!").min(3,"Must be at least 3 characters!").max(20,"Must be maximum 20 characters!"),email:C["b"]().required("Email is required!").email("Email is invalid!").max(50,"Must be maximum 50 characters!"),password:C["b"]().required("Password is required!").min(6,"Must be at least 6 characters!").max(40,"Must be maximum 40 characters!")});return{successful:!1,loading:!1,message:"",schema:e}},computed:{loggedIn:function(){return this.$store.state.auth.status.loggedIn}},mounted:function(){this.loggedIn&&this.$router.push("/profile")},methods:{handleRegister:function(e){var t=this;this.message="",this.successful=!1,this.loading=!0,this.$store.dispatch("auth/register",e).then((function(e){t.message=e.message,t.successful=!0,t.loading=!1}),(function(e){t.message=e.response&&e.response.data&&e.response.data.message||e.message||e.toString(),t.successful=!1,t.loading=!1}))}}};n("c7ff");G.render=K,G.__scopeId="data-v-77de1983";var X=G,Z=function(){return n.e("chunk-2d0d03d6").then(n.bind(null,"66aa"))},ee=function(){return n.e("chunk-2d0c85f8").then(n.bind(null,"5535"))},te=function(){return n.e("chunk-2d0e5991").then(n.bind(null,"94bb"))},ne=function(){return n.e("chunk-5c491832").then(n.bind(null,"0899"))},ae=[{path:"/",name:"home",component:x},{path:"/home",component:x},{path:"/login",component:B},{path:"/register",component:X},{path:"/profile",name:"profile",component:Z},{path:"/admin",name:"admin",component:ee},{path:"/mod",name:"moderator",component:te},{path:"/user",name:"user",component:ne},{path:"/",alias:"/posts",name:"posts",component:function(){return n.e("chunk-7ad1da5f").then(n.bind(null,"807b"))}},{path:"/posts/:id",name:"post-details",component:function(){return n.e("chunk-fd68499c").then(n.bind(null,"9c93"))}},{path:"/add",name:"add",component:function(){return n.e("chunk-70444475").then(n.bind(null,"cad4"))}}],re=Object(w["a"])({history:Object(w["b"])(),routes:ae});re.beforeEach((function(e,t,n){var a=["/login","/register","/home"],r=!a.includes(e.path),o=localStorage.getItem("user");r&&!o?n("/login"):n()}));var oe=re,se=n("5502"),ce=n("5530"),ie=n("d4ec"),ue=n("bee2"),le=n("7424"),de=function(){function e(){Object(ie["a"])(this,e)}return Object(ue["a"])(e,[{key:"getLocalRefreshToken",value:function(){var e=JSON.parse(localStorage.getItem("user"));return null===e||void 0===e?void 0:e.refreshToken}},{key:"getLocalAccessToken",value:function(){var e=JSON.parse(localStorage.getItem("user"));return null===e||void 0===e?void 0:e.accessToken}},{key:"updateLocalAccessToken",value:function(e){var t=JSON.parse(localStorage.getItem("user"));t.accessToken=e,localStorage.setItem("user",JSON.stringify(t))}},{key:"getUser",value:function(){return JSON.parse(localStorage.getItem("user"))}},{key:"setUser",value:function(e){console.log(JSON.stringify(e)),localStorage.setItem("user",JSON.stringify(e))}},{key:"removeUser",value:function(){localStorage.removeItem("user")}}]),e}(),be=new de,fe=function(){function e(){Object(ie["a"])(this,e)}return Object(ue["a"])(e,[{key:"login",value:function(e){var t=e.username,n=e.password;return le["a"].post("/auth/signin",{username:t,password:n}).then((function(e){return e.data.accessToken&&be.setUser(e.data),e.data}))}},{key:"logout",value:function(){be.removeUser()}},{key:"register",value:function(e){var t=e.username,n=e.email,a=e.password;return le["a"].post("/auth/signup",{username:t,email:n,password:a})}}]),e}(),pe=new fe,me=JSON.parse(localStorage.getItem("user")),he=me?{status:{loggedIn:!0},user:me}:{status:{loggedIn:!1},user:null},ge={namespaced:!0,state:he,actions:{login:function(e,t){var n=e.commit;return pe.login(t).then((function(e){return n("loginSuccess",e),Promise.resolve(e)}),(function(e){return n("loginFailure"),Promise.reject(e)}))},logout:function(e){var t=e.commit;pe.logout(),t("logout")},register:function(e,t){var n=e.commit;return pe.register(t).then((function(e){return n("registerSuccess"),Promise.resolve(e.data)}),(function(e){return n("registerFailure"),Promise.reject(e)}))},refreshToken:function(e,t){var n=e.commit;n("refreshToken",t)}},mutations:{loginSuccess:function(e,t){e.status.loggedIn=!0,e.user=t},loginFailure:function(e){e.status.loggedIn=!1,e.user=null},logout:function(e){e.status.loggedIn=!1,e.user=null},registerSuccess:function(e){e.status.loggedIn=!1},registerFailure:function(e){e.status.loggedIn=!1},refreshToken:function(e,t){e.status.loggedIn=!0,e.user=Object(ce["a"])(Object(ce["a"])({},e.user),{},{accessToken:t})}}},ve=Object(se["a"])({modules:{auth:ge}}),je=ve,Oe=n("1da1"),ye=(n("96cf"),function(e){le["a"].interceptors.request.use((function(e){var t=be.getLocalAccessToken();return t&&(e.headers["x-access-token"]=t),e}),(function(e){return Promise.reject(e)})),le["a"].interceptors.response.use((function(e){return e}),function(){var t=Object(Oe["a"])(regeneratorRuntime.mark((function t(n){var a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=n.config,"/auth/signin"===a.url||!n.response){t.next=17;break}if(401!==n.response.status||a._retry){t.next=17;break}return a._retry=!0,t.prev=4,t.next=7,le["a"].post("/auth/refreshtoken",{refreshToken:be.getLocalRefreshToken()});case 7:return r=t.sent,o=r.data.accessToken,e.dispatch("auth/refreshToken",o),be.updateLocalAccessToken(o),t.abrupt("return",Object(le["a"])(a));case 14:return t.prev=14,t.t0=t["catch"](4),t.abrupt("return",Promise.reject(t.t0));case 17:return t.abrupt("return",Promise.reject(n));case 18:case"end":return t.stop()}}),t,null,[[4,14]])})));return function(e){return t.apply(this,arguments)}}())}),we=ye,ke=n("ecee"),Se=n("ad3d"),Ee=n("c074");ke["c"].add(Ee["a"],Ee["d"],Ee["e"],Ee["b"],Ee["c"]),we(je),Object(a["c"])(y).use(oe).use(je).component("font-awesome-icon",Se["a"]).mount("#app")},"5c54":function(e,t,n){"use strict";n("f1fb")},"66ee":function(e,t,n){},7424:function(e,t,n){"use strict";var a=n("bc3a"),r=n.n(a),o=r.a.create({baseURL:"api",headers:{"Content-Type":"application/json"}});t["a"]=o},"7d60":function(e,t,n){},c7ff:function(e,t,n){"use strict";n("7d60")},e7d3:function(e,t,n){},f1fb:function(e,t,n){}});
//# sourceMappingURL=app.11225982.js.map