(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70444475"],{2513:function(t,e,n){"use strict";var i=n("d4ec"),o=n("bee2"),c=n("bc3a"),s=n.n(c),r=s.a.create({baseURL:"/api",headers:{"Content-type":"application/json"}}),a=function(){function t(){Object(i["a"])(this,t)}return Object(o["a"])(t,[{key:"getAll",value:function(){return r.get("/posts")}},{key:"get",value:function(t){return r.get("/posts/".concat(t))}},{key:"create",value:function(t){return r.post("/posts",t)}},{key:"update",value:function(t,e){return r.put("/posts/".concat(t),e)}},{key:"delete",value:function(t){return r.delete("/posts/".concat(t))}},{key:"deleteAll",value:function(){return r.delete("/posts")}},{key:"findByTitle",value:function(t){return r.get("/posts?title=".concat(t))}}]),t}();e["a"]=new a},"74bd":function(t,e,n){},ab6d:function(t,e,n){"use strict";n("74bd")},cad4:function(t,e,n){"use strict";n.r(e);n("a4d3"),n("e01a");var i=n("7a23"),o={class:"edit-form"},c={key:0},s=Object(i["i"])(" Share your thoughts with other "),r=Object(i["g"])("label",{for:"title"}," Title ",-1),a=Object(i["i"])(" lol "),l=Object(i["g"])("label",{for:"description"}," Enter your post description ",-1),u={key:0},p=Object(i["g"])("p",null,"Post Image preview",-1),d=["src"],b={key:1},f=Object(i["g"])("h4",null,"You submitted successfully!",-1);function O(t,e,n,O,j,g){var v=Object(i["E"])("Form");return Object(i["w"])(),Object(i["f"])("form",o,[j.submitted?(Object(i["w"])(),Object(i["f"])("div",b,[f,Object(i["g"])("button",{class:"button-blog",onClick:e[5]||(e[5]=function(){return g.newPost&&g.newPost.apply(g,arguments)})},"Add")])):(Object(i["w"])(),Object(i["f"])("div",c,[Object(i["j"])(v,null,{header:Object(i["O"])((function(){return[s]})),input1:Object(i["O"])((function(){return[Object(i["g"])("div",null,[r,Object(i["P"])(Object(i["g"])("input",{type:"text",id:"title",required:"","onUpdate:modelValue":e[0]||(e[0]=function(t){return j.post.title=t}),name:"title",placeholder:"Post title"},null,512),[[i["K"],j.post.title]])])]})),buttontest:Object(i["O"])((function(){return[a]})),input2:Object(i["O"])((function(){return[l,Object(i["P"])(Object(i["g"])("textarea",{name:"description",required:"","onUpdate:modelValue":e[1]||(e[1]=function(t){return j.post.description=t}),id:"description",cols:"30",rows:"10"},null,512),[[i["K"],j.post.description]])]})),button1:Object(i["O"])((function(){return[Object(i["g"])("button",{onClick:e[2]||(e[2]=function(){return g.savePost&&g.savePost.apply(g,arguments)}),class:"success_btn"},"Submit")]})),button2:Object(i["O"])((function(){return[Object(i["g"])("button",{onClick:e[3]||(e[3]=Object(i["Q"])((function(){return g.pickFile&&g.pickFile.apply(g,arguments)}),["prevent"])),class:"additional_btn1"},"Upload Image"),Object(i["g"])("input",{type:"file",ref:"fileInput",accept:"image/* , .jpg , .png",onChange:e[4]||(e[4]=function(){return g.onFilePicked&&g.onFilePicked.apply(g,arguments)})},null,544)]})),additional_content1:Object(i["O"])((function(){return[j.post.image?(Object(i["w"])(),Object(i["f"])("div",u,[p,Object(i["g"])("img",{src:j.post.imageUrl,alt:"Post image preview"},null,8,d)])):Object(i["e"])("",!0)]})),_:1})]))])}var j=n("2513"),g={class:"wrapper"},v={class:"form-wrapper"},m={class:"form-header"},h={class:"form-container__inputs"},y={class:"form-container__buttons"},w={class:"form-container__additional"};function k(t,e,n,o,c,s){return Object(i["w"])(),Object(i["f"])("div",g,[Object(i["g"])("form",v,[Object(i["g"])("div",m,[Object(i["D"])(t.$slots,"header")]),Object(i["g"])("div",h,[Object(i["D"])(t.$slots,"input1"),Object(i["D"])(t.$slots,"input2"),Object(i["D"])(t.$slots,"input3"),Object(i["D"])(t.$slots,"input4"),Object(i["D"])(t.$slots,"input5")]),Object(i["g"])("div",y,[Object(i["D"])(t.$slots,"button1"),Object(i["D"])(t.$slots,"button2"),Object(i["D"])(t.$slots,"button3")]),Object(i["g"])("div",w,[Object(i["D"])(t.$slots,"additional_content1"),Object(i["D"])(t.$slots,"additional_content2"),Object(i["D"])(t.$slots,"additional_content3")])])])}var $={};n("ab6d");$.render=k;var D=$,P={components:{Form:D},name:"add-post",data:function(){return{post:{id:null,title:"",description:"",published:!1,image:null,imageUrl:null},submitted:!1}},methods:{pickFile:function(){this.$refs.fileInput.click()},onFilePicked:function(t){var e=this,n=t.target.files;if(this.post.image=n[0],this.post.image){var i=new FileReader;i.addEventListener("load",(function(){return e.post.imageUrl=i.result})),i.readAsDataURL(n[0])}},savePost:function(){var t,e=this;this.post.image?(t=new FormData,t.append("title",this.post.title),t.append("description",this.post.description),t.append("image",this.post.image)):t={title:this.post.title,description:this.post.description},j["a"].create(t).then((function(t){e.post.id=t.data.id,console.log(t.data),e.submitted=!0})).catch((function(t){console.log(t)}))},newPost:function(){this.submitted=!1,this.post={}}}};P.render=O;e["default"]=P},e01a:function(t,e,n){"use strict";var i=n("23e7"),o=n("83ab"),c=n("da84"),s=n("5135"),r=n("861d"),a=n("9bf2").f,l=n("e893"),u=c.Symbol;if(o&&"function"==typeof u&&(!("description"in u.prototype)||void 0!==u().description)){var p={},d=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof d?new u(t):void 0===t?u():u(t);return""===t&&(p[e]=!0),e};l(d,u);var b=d.prototype=u.prototype;b.constructor=d;var f=b.toString,O="Symbol(test)"==String(u("test")),j=/^Symbol\((.*)\)[^)]+$/;a(b,"description",{configurable:!0,get:function(){var t=r(this)?this.valueOf():this,e=f.call(t);if(s(p,t))return"";var n=O?e.slice(7,-1):e.replace(j,"$1");return""===n?void 0:n}}),i({global:!0,forced:!0},{Symbol:d})}}}]);
//# sourceMappingURL=chunk-70444475.8059213c.js.map