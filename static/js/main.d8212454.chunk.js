(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{104:function(e,t,a){e.exports=a(148)},109:function(e,t,a){},120:function(e,t,a){},125:function(e,t,a){},126:function(e,t,a){},127:function(e,t,a){},128:function(e,t,a){},146:function(e,t,a){},147:function(e,t,a){},148:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),i=(a(109),a(78)),c=a(79),s=a(93),m=a(92),u=a(37),d=a(53),p=a(187),h=a(188),g=a(202),f=a(189),E=a(59),b=a.n(E),v=a(84),y=a.n(v),x=a(85),w=a.n(x),k=a(52),j=a.n(k),B=a(184),S=a(201),A=a(17),O=a.n(A),N=(a(120),["children","value","index"]);function C(e){var t=e.children,a=e.value,n=e.index,l=Object(d.a)(e,N);return r.a.createElement(B.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"scrollable-force-tabpanel-".concat(n),"aria-labelledby":"scrollable-force-tab-".concat(n)},l),r.a.createElement(S.a,{p:3},t))}function D(e){return{id:"scrollable-force-tab-".concat(e),"aria-controls":"scrollable-force-tabpanel-".concat(e)}}var M=Object(p.a)((function(e){return{root:{flexGrow:1,width:"100%",backgroundColor:e.palette.background.paper}}}));function Q(){var e=M(),t=r.a.useState(0),a=Object(u.a)(t,2),n=a[0],l=a[1],o=r.a.useState(["standard",!0]),i=Object(u.a)(o,2),c=i[0],s=i[1];r.a.useLayoutEffect((function(){function e(){window.innerWidth>500?s(["standard",!0]):s(["scrollable",!1])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]);var m=O.a.scroller,d=function(e){"about-me"===e?A.animateScroll.scrollToTop():m.scrollTo(e,{duration:800,delay:0,offset:-200,smooth:"easeInOutQuart"})};return r.a.createElement("div",{className:e.root},r.a.createElement(h.a,{color:"default",className:"tabs"},r.a.createElement(g.a,{value:n,onChange:function(e,t){l(t)},variant:c[0],scrollButtons:"on",indicatorColor:"primary",textColor:"primary","aria-label":"scrollable force tabs example",centered:c[1]},r.a.createElement(f.a,Object.assign({onClick:function(){return d("about-me")},label:"About Me",icon:r.a.createElement(y.a,null)},D(0))),r.a.createElement(f.a,Object.assign({onClick:function(){return d("projects")},label:"Projects",icon:r.a.createElement(b.a,null)},D(1))),r.a.createElement(f.a,Object.assign({onClick:function(){return d("skill")},label:"Skill",icon:r.a.createElement(b.a,null)},D(3))),r.a.createElement(f.a,Object.assign({onClick:function(){return d("contact-me")},label:"Contact Me",icon:r.a.createElement(w.a,null)},D(4))),r.a.createElement(f.a,Object.assign({onClick:function(){return d("resume")},label:"Find Me",icon:r.a.createElement(j.a,null)},D(5))))),r.a.createElement(C,{value:n,index:0},"About Me"),r.a.createElement(C,{value:n,index:1},"Project"),r.a.createElement(C,{value:n,index:2},"Experience"),r.a.createElement(C,{value:n,index:3},"Skill"),r.a.createElement(C,{value:n,index:4}),r.a.createElement(C,{value:n,index:5},"Resume"))}a(125);var G=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase"}}),r.a.createElement("div",{className:"name"},r.a.createElement("img",{src:"https://media.discordapp.net/attachments/762721371809382421/793101111309500466/11334138_10204951267766836_8466014935568855448_o.jpg?width=473&height=473",alt:"profile_photo",className:"img"}),r.a.createElement("h1",{style:{fontWeight:"lighter"}},"Ameed Asmah"),r.a.createElement("div",{className:"subtitle"},r.a.createElement("h3",null,"I am a Full stack web developer."),r.a.createElement("p",null,"Creating Beautiful things with quality and elegance! ",r.a.createElement("br",null),"Experienced in React and ASP.NET"))))},I=a(191),Y=a(86),P=[{image:"https://media.discordapp.net/attachments/762704922474840094/873654314428674068/unknown.png?width=1200&height=213",title:"BookAuthorPublisher",des:"Simple project contains three relational DB, one to many \u201cBook-Publisher\u201d, and Many to Many \u201cBook-Authors\u201d, divided to four layers, API\u2019S, Business Layer, Data Access Layer and Contract layer. Then Divided the project to two services, the First Service for Books, and Second For Authors and Publisher using microservices Rabbit MQ.",tags:["Angular","NGRX","C#/.Net","Microsoft-SQL-Server","Unit Testing","MicroServices"],links:Object(Y.a)({github:"https://github.com/ameedasmah/BAuthorPublisherMicroService"},"github","https://github.com/ameedasmah/BookAPMicroService")},{image:"https://media.discordapp.net/attachments/762704922474840094/873649257817714720/Capture12.PNG?width=1238&height=587",title:"Twitter",des:"Full Stack Application using the python Django in the backend, react and redux in the frontend, you can create your own Tweets, Twitter user follow other users. If you follow someone you can see their tweets on your home page, you can see all user\u2019s Tweets on Explore page, you can add like, comments, and bookmark other tweets, and you can search on other people's profile.",tags:["React","Redux","Django","Djoser","Cloudinary","Api"],links:{launch:"https://tweeeeeter.herokuapp.com/home",github:"https://github.com/ameedasmah/Tweetler.git"}},{image:"https://media.discordapp.net/attachments/763317063266729986/793144962908815380/unknown.png?width=1025&height=471",title:"Online School System",des:"full Stack Application using the python Django in the backend, react and redux in the frontend, it\u2019s about manage a School system, it has adminwith all control, portal for Students/Parents, Staff, Teachers, Classes, Subjects and Exams. ",tags:["React","Redux","typeScript","Django","Firebase","Cloudenary"],links:{github:"https://github.com/ameedasmah/OnlineSchoolSystem"}},{image:"https://media.discordapp.net/attachments/763317063266729986/793141749849522186/unknown.png?width=1025&height=472",title:"WhatsappMessenger",des:"A MERN-Stack project that allows you to send the data and save it database using MongoAtlas,  It's appear in front-end page.In this project I used  React in front-end and I used material Ui in Design",tags:["React","Express","mongoDb","CSS"],links:{github:"https://github.com/ameedasmah/whatsapp_challenge"}}],T=a(203),L=a(192),R=a(193),V=a(194),q=a(195),z=a(196),X=a(197),F=a(198),J=a(199),U=a(190),W=(a(126),function(e){var t=e.project,a=e.handleClose,l=function(e){"Escape"===e.key&&a()};return Object(n.useEffect)((function(){return window.addEventListener("keydown",l),function(){return window.removeEventListener("onkeydown",l)}})),r.a.createElement("div",{style:{position:"fixed",top:"0",left:"0",width:"100%",height:"100%",overflow:"auto",margin:"0",zIndex:"100",display:"flex",backgroundColor:"rgba(100, 100, 100, 0.4)"}},r.a.createElement("div",{className:"modal"},r.a.createElement(B.a,{gutterBottom:!0,variant:"h6",component:"h2",style:{display:"flex",justifyContent:"center",alignItems:"center"}},t.title),r.a.createElement(B.a,{gutterBottom:!0,variant:"body2",component:"p",style:{display:"flex",justifyContent:"center",alignItems:"center"}},t.des),r.a.createElement(U.a,{variant:"outlined",color:"primary",onClick:a},"Close")))});a(127);function K(e){var t=e.project,a=r.a.createRef(),l=Object(n.useState)(t.des),o=Object(u.a)(l,2),i=o[0],c=o[1],s=Object(n.useState)(!1),m=Object(u.a)(s,2),d=m[0],p=m[1],h=function(){c(13*t.des.length<=10*a.current.offsetWidth?t.des:t.des.slice(0,10*a.current.offsetWidth/15).trim()+"...")};Object(n.useEffect)((function(){return h(),window.addEventListener("resize",h),function(){return window.removeEventListener("resize",h)}}));return r.a.createElement(I.a,{item:!0,xs:12,sm:6,md:6,lg:4,xl:2},r.a.createElement(L.a,null,r.a.createElement(R.a,{component:"img",className:"project-image",alt:t.title,image:t.image,title:t.title}),r.a.createElement(V.a,null,r.a.createElement(B.a,{gutterBottom:!0,variant:"h6",component:"h2",className:"one-line"},t.title),r.a.createElement(B.a,{variant:"body2",component:"p",className:"description",ref:a,gutterBottom:!0},i),r.a.createElement("div",{className:"chip-container"},t.tags.map((function(e,t){return r.a.createElement(T.a,{className:"chip",size:"small",label:e,color:"primary",key:t})})))),r.a.createElement(q.a,{disableSpacing:!0,className:"card-actions"},r.a.createElement(z.a,{title:"More Info","aria-label":"More Info",onClick:function(){p(!0)}},r.a.createElement(X.a,null)),d?r.a.createElement(W,{project:t,handleClose:function(){p(!1)}}):null,t.links.launch?r.a.createElement(z.a,{title:"Launch App","aria-label":"Launch Application",href:t.links.launch},r.a.createElement(F.a,null)):r.a.createElement("div",null),r.a.createElement(z.a,{title:"See Code","aria-label":"Source Code On Github",href:t.links.github},r.a.createElement(J.a,null)))))}var H=Object(p.a)({"spacing-xs-4":{width:"inherit",margin:0}});function Z(){var e=H();return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{id:"projects",variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase",fontFamily:"'Bungee',cursive"}},r.a.createElement(A.Element,{name:"projects"},"Projects")),r.a.createElement(I.a,{container:!0,spacing:4,style:{flexGrow:1,display:"flex",justifyContent:"center",alignItems:"center"},classes:{"spacing-xs-4":e["spacing-xs-4"]}},P.map((function(e,t){return r.a.createElement(K,{project:e,key:t})}))))}var _=a(96),$=(a(128),[{name:"ASP.NET",value:"https://qwertyseo.com/wp-content/uploads/2017/05/67e4dee31014593770dfcd064e9faf24a982881c.png"},{name:"Microsoft-SQL-Server",value:"https://cdn.holistics.io/landing/databases/sqlserver.png"},{name:"microservices",value:"https://image.shutterstock.com/image-vector/microservice-architecture-vector-icon-micro-260nw-1634676511.jpg"},{name:"React",value:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png"},{name:"JavaScript",value:"data:image/png;base64,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"},{name:"HTML/CSS",value:"https://media.discordapp.net/attachments/762721371809382421/793153790260805712/html5-css3.png"},{name:"TypeScript",value:"https://cdn.iconscout.com/icon/free/png-512/typescript-1174965.png"},{name:"C++",value:"https://img.icons8.com/color/452/c-plus-plus-logo.png"},{name:"Python",value:"https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-512.png"},{name:"MongoDB",value:"https://img.icons8.com/color/452/mongodb.png"},{name:"MySQL/PostgreSQL",value:"https://icons-for-free.com/iconfiles/png/512/file+sql+icon-1320183612970878250.png"},{name:"Django",value:"https://icon-library.com/images/django-icon/django-icon-0.jpg"},{name:"Firebase",value:"https://img.icons8.com/color/452/firebase.png"},{name:"Material-Ui",value:"https://miro.medium.com/max/560/1*jZtQFMYGgMvRkIje-Rm1gQ.png"}]);function ee(e){e.skill;return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase",fontFamily:'"Bungee", cursive'}},r.a.createElement(A.Element,{name:"skill"},"Skills")),r.a.createElement("div",{className:"skill-container"},$.map((function(e,t){return r.a.createElement("div",{className:"skill-img",key:t},r.a.createElement(_.a,{titleAccess:e.name}),r.a.createElement("img",{src:e.value,style:{width:"auto",height:"100%"},className:"svg-icon",viewBox:"0 0 24 24",color:"primary"}))}))))}var te=a(200),ae=a(87),ne=a.n(ae);a(146);function re(){var e=function(e){e.preventDefault();var t=document.getElementById("name").value,a=document.getElementById("email").value,n=document.getElementById("message").value;ne()({method:"POST",url:"URLOFBACKEND/email",data:{name:t,email:a,message:n}}).then((function(e){console.log("response:",e),"success"===e.data.message?(alert("Message Sent."),document.getElementById("contact-form").reset()):"fail"===e.data.msg&&alert("Message failed to send.")}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(B.a,{variant:"h2",display:"block",align:"center",id:"contact-us",style:{margin:"1rem",fontSize:"1.6rem",textTransform:"uppercase",fontFamily:'"Bungee", cursive'}},r.a.createElement(A.Element,{name:"contact-me"},"Contact Me")),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px"}},r.a.createElement("form",{onSubmit:function(t){return e(t)},className:"contact-form",id:"contact-form",style:{backgroundColor:"#fff",display:"flex",flexDirection:"column",padding:"25px",borderRadius:"10px"}},r.a.createElement(te.a,{label:"Name",type:"text",margin:"normal",variant:"outlined",id:"name",placeholder:"Enter your name"}),r.a.createElement(te.a,{label:"Email",type:"email",id:"email",margin:"normal",variant:"outlined",placeholder:"Enter your email"}),r.a.createElement(te.a,{label:"Message",id:"message",multiline:!0,margin:"normal",variant:"outlined",placeholder:"Enter your message"}),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"}},r.a.createElement(U.a,{variant:"outlined",color:"primary",size:"large",type:"submit",style:{width:"50%",marginTop:"15px"}},"Send")))))}var le=a(88),oe=a.n(le),ie=a(89),ce=a.n(ie),se=a(90),me=a.n(se),ue=a(91),de=a.n(ue);function pe(){return r.a.createElement(B.a,{variant:"h2",display:"block",align:"center",style:{margin:"1rem",fontSize:"35px",textTransform:"uppercase",fontFamily:'"Bungee", cursive'}},r.a.createElement(A.Element,{name:"resume"},"Find Me"),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"20px",marginTop:"35px"}},r.a.createElement("a",{href:"https://drive.google.com/file/d/1pnoeG8oHVgmH1Q4KOsJEhVr30bBUmbXT/view?usp=sharing",target:"_blank",rel:"noreferrer"},r.a.createElement(j.a,{style:{height:"60px",width:"120px"},color:"primary"})),r.a.createElement("a",{href:"https://github.com/ameedasmah",target:"_blank",rel:"noreferrer"},r.a.createElement(oe.a,{color:"primary",style:{paddingLeft:"6px",paddingRight:"6px",height:"60px",width:"120px"}})),r.a.createElement("a",{href:"https://www.linkedin.com/in/ameed-asmah-1532431b7/",target:"_blank",rel:"noreferrer"},r.a.createElement(ce.a,{color:"primary",style:{height:"60px",width:"120px"}}))),r.a.createElement("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",marginBottom:"20px",fontSize:"19px",fontFamily:" cursive"}},r.a.createElement("div",null,r.a.createElement(me.a,{color:"primary"}),": (+970)-599-043-747"),r.a.createElement("div",null,r.a.createElement(de.a,{color:"primary"}),": ameed.asmah1@gmail.com")))}a(147);var he=Object(p.a)({bg:{background:"rgb(256, 256, 256, 0.6)",padding:"50px 5%",borderTop:"1px solid rgba(0, 0, 0, 0.13)",borderBottom:"1px solid rgba(0, 0, 0, 0.13)",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2)"},noBg:{background:"none",padding:"50px 5%"}}),ge=["bg"];function fe(e){var t=e.bg,a=Object(d.a)(e,ge),n=he(),l=t?n.bg:n.noBg;return r.a.createElement("div",{className:l},a.children)}var Ee=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q,null),r.a.createElement(fe,null,r.a.createElement(G,null)),r.a.createElement(fe,{bg:!0},r.a.createElement(Z,null)),r.a.createElement(fe,{bg:!0},r.a.createElement(ee,null)),r.a.createElement(fe,null,r.a.createElement(re,null)),r.a.createElement(fe,null,r.a.createElement(pe,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[104,1,2]]]);
//# sourceMappingURL=main.d8212454.chunk.js.map