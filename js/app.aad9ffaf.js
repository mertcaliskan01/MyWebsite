(function(){"use strict";var t={4422:function(t,e,n){n.d(e,{A:function(){return _}});var o=n(7233),i=n(2938),r=n(4566),a=n(7296),s=n(4493),l=n(5621),c=n(9473),d=function(){var t=this,e=t._self._c;return e(r.A,[e(o.A,{attrs:{width:"100%",color:t.backgroundColor}},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-h4 font-weight-bold pt-4"},[t._v(t._s(t.model.header))])]),e(i.OQ,[e(l.A,{attrs:{"align-top":"",dense:""}},t._l(t.model.experiences,(function(n){return e(c.A,{key:n.title,attrs:{color:n.color,small:""}},[e("div",[e("div",{staticClass:"font-weight-normal"},[e("h3",[t._v(t._s(n.title))]),n.isSkill?e("div",[e("linear-progress",{attrs:{model:n}})],1):t._e()]),n.isSkill?t._e():e("div",t._l(n.items,(function(n){return e(a.A,{key:n.content},[e(s.pr,[e(s.UZ,[t._v(t._s(n.content))])],1)],1)})),1)])])})),1)],1)],1)],1)},u=[],p=n(3299),h=function(){var t=this,e=t._self._c;return e("div",[e(p.A,{attrs:{rounded:"",height:"5",color:t.model.color},model:{value:t.model.percent,callback:function(e){t.$set(t.model,"percent",e)},expression:"model.percent"}})],1)},m=[],f={props:["model"]},g=f,k=n(1656),v=(0,k.A)(g,h,m,!1,null,null,null),y=v.exports,b={components:{LinearProgress:y},props:["model"],data:()=>({backgroundColor:"#FCFCFD",isActive:!1})},A=b,w=(0,k.A)(A,d,u,!1,null,null,null),_=w.exports},6051:function(t,e,n){n.d(e,{A:function(){return k}});var o=n(7314),i=n(7233),r=n(2938),a=n(4566),s=n(9873),l=n(7296),c=n(3138),d=n(4493),u=function(){var t=this,e=t._self._c;return e(a.A,[e(i.A,{staticClass:"mx-auto",attrs:{color:t.backgroundColor}},[e("div",{staticClass:"text-center"},[e("h1",{staticClass:"text-h4 font-weight-bold pt-4"},[t._v(t._s(t.model.header))])]),t._l(t.model.projects,(function(n){return e("div",{key:n.title,staticClass:"m-8"},[e(l.A,{attrs:{"three-line":""}},[e(d.pr,[e(d.UZ,{staticClass:"text-h5 mb-1"},[t._v(" "+t._s(n.title)+" ")]),e(d.w,[t._v(t._s(n.content))])],1),e(c.A,{attrs:{tile:"",size:"80"}},[e(s.A,{attrs:{src:n.image,alt:"Photo"}})],1)],1),e(r.SL,[e(o.A,{attrs:{outlined:"",rounded:"",text:"",href:n.link,target:"_blank"}},[t._v(" "+t._s(n.title)+" ")])],1)],1)}))],2)],1)},p=[],h={data:()=>({backgroundColor:"#FCFCFD",isActive:!1,model:{header:"PERSONAL PROJECTS",projects:[{title:"Knight Wars - Board Game",content:"The game continues with players taking turns, rolling the dice, and moving their tokens around the board. The objective is to acquire as many streets as possible, build hotels on them to increase rent, and collect as much money as you can from your opponents.",link:"https://play.google.com/store/apps/details?id=com.mtcn.knightwars",image:"https://play-lh.googleusercontent.com/NgwVnFUyGPwxQvT_goXbumh4GqD3VpflTc3aYMCKBo61m3w3qIzden1zhl3tOsCLphI=w480-h960-rw"},{title:"Full-Stack Web Application with React and Nest.js",content:"I have designed, developed, and deployed a full-stack web application using React for the front end and Nest.js for the backend API. The project includes essential features such as user registration, login, and a to-do list management system. It is hosted on Digital Ocean.",link:"http://www.developermert.site/",image:""},{title:"Space Wars - Grand Admiral",content:"Strategy Game - In this game, players command a fleet of three combat ships to engage and defeat enemy forces. They have the option to fight as a squadron or assign specific positions to each ship for base defense.",link:"https://play.google.com/store/apps/details?id=com.mtcn.grandadmiral",image:"https://play-lh.googleusercontent.com/WIug8WLl-3M2zgFSbRj1Bu1KW8-qIQjp_9PkUj7SHNgMNUJIOSi04xukBQu4vpo8Wes=w480-h960-rw"},{title:"M Notes-Easy Notepad",content:"Note Taking App",link:"https://play.google.com/store/apps/details?id=com.mtcn.mynotes",image:"https://play-lh.googleusercontent.com/8CB0oaqMGegkI8SypE1REFq2y5hND1OE51T_x87Vj0pz9-2v4m-6dCANXeX4nwLtDis=w480-h960-rw"},{title:"Bitmamoon",content:"Exchange Simulator",link:"https://play.google.com/store/apps/details?id=com.bitmamoon.crypto",image:"https://play-lh.googleusercontent.com/Tic5eEF3nSgqq3AMho1UA6eI7W2b-l8E7RsxTASA0XNeONgU4sbn1IknCOcn50wRLvjC=w480-h960-rw"}]}})},m=h,f=n(1656),g=(0,f.A)(m,u,p,!1,null,null,null),k=g.exports},5528:function(t,e,n){n.d(e,{A:function(){return g}});var o=n(7314),i=n(4414),r=n(697),a=n(6930),s=n(7296),l=n(4493),c=n(2756),d=function(){var t=this,e=t._self._c;return e(r.A,{attrs:{padless:""}},[e(c.A,{attrs:{"no-gutters":"",justify:"space-around"}},[t._l(t.links,(function(n,i){return e("div",{key:i,staticClass:"my-5"},[e(s.A,{attrs:{"three-line":""}},[e(l.pr,[e(l.w,{attrs:{align:"center"}},[e(s.A,{staticClass:"text-h6 d-flex justify-center"},[t._v(" "+t._s(n.title)+" ")]),n.showIcon?e(o.A,{attrs:{icon:"",href:n.url,target:"_blank"}},[e(a.A,{attrs:{color:"blue darken-3","x-large":""}},[t._v(" "+t._s(n.icon)+" ")])],1):e(s.A,[t._v(" "+t._s(n.content)+" ")])],1)],1)],1)],1)})),e(i.A,{staticClass:"text-h8 d-flex justify-center",attrs:{cols:"12"}},[t._v(" "+t._s((new Date).getFullYear())+" ")])],2)],1)},u=[],p={data(){return{links:[{title:"Linkedin",content:"",url:"https://www.linkedin.com/in/developermert",showIcon:!0,icon:"mdi-linkedin"},{title:"Email",content:"mcaliskanmert@gmail.com",url:"",showIcon:!1,icon:""},{title:"Github",content:"",url:"https://github.com/mertcaliskan01",showIcon:!0,icon:"mdi-github"}]}}},h=p,m=n(1656),f=(0,m.A)(h,d,u,!1,null,"71c8e4a8",null),g=f.exports},3330:function(t,e,n){n.d(e,{A:function(){return A}});var o=n(4112),i=n(7314),r=n(4414),a=n(4566),s=n(6930),l=n(9873),c=n(7296),d=n(4493),u=n(2756),p=n(8184),h=n(3467),m=function(){var t=this,e=t._self._c;return e("div",[e(a.A,[e(u.A,{staticClass:"pt-5"},[e(r.A,{attrs:{cols:"12",md:"5"}},[e(c.A,{attrs:{"three-line":""}},[e(d.pr,t._l(t.PersonalInfo,(function(n,o){return e(d.w,{key:o},[e(c.A,{staticClass:"text-h6"},[t._v(" "+t._s(n.title)+": "+t._s(n.content)+" "),n.showIcon?e(i.A,{attrs:{icon:"",href:t.linkedinURL,target:"_blank"}},[e(s.A,{attrs:{large:""}},[t._v(" "+t._s(n.icon)+" ")])],1):t._e()],1)],1)})),1)],1)],1),e(r.A,{staticClass:"pa-5",attrs:{cols:"12",md:"7"}},[e(p.A,{staticClass:"stackSheet",attrs:{color:"blue-grey lighten-5"}},[e(h.A,{attrs:{value:t.value,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"auto-draw-duration":4e3,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}}),e(h.A,{staticClass:"stackSpark",attrs:{value:t.value2,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"auto-draw-duration":4e3,"line-width":t.width,"stroke-linecap":t.lineCap,"gradient-direction":t.gradientDirection,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1)],1)],1),e(u.A,[e(r.A,{attrs:{cols:"12",md:"5",align:"center"}},[e(o.A,{attrs:{size:"300"}},[e(l.A,{attrs:{src:n(558),alt:"Profile Photo"}})],1)],1),e(r.A,{staticClass:"pa-12",attrs:{cols:"12",md:"7",align:"left"}},[e("h2",{attrs:{align:"left"}},[t._v(t._s(t.myInfoText))]),e("h3",[t._v(t._s(t.infoText))])])],1)],1)],1)},f=[];const g=[["#222"],["#42b3f4"],["red","orange","yellow"],["purple","violet"],["#00c6ff","#F0F","#FF0"],["#f72047","#2f3838","#1feaea"]];var k={data(){return{width:3,radius:10,padding:2,lineCap:"round",gradient:g[5],value:[0,10,2,10,0,6,4,0,4,6,0,10],value2:[1,10],gradientDirection:"top",gradients:g,fill:!1,type:"trend",autoLineWidth:!1,PersonalInfo:[{title:"Email",content:"mcaliskanmert@gmail.com",showIcon:!1,icon:""},{title:"Linkedin",content:"",showIcon:!0,icon:"mdi-linkedin"}],linkedinURL:"https://www.linkedin.com/in/developermert",myInfoText:"Hello!",infoText:"I'm Mert Çalışkan. I graduated from Celal Bayar University as a Computer Engineer, and since 2019, I've been working as a software developer. Throughout my career, I've developed projects for leading institutions, continuously enhancing my skills and expertise.",colors:["blue lighten-4","red lighten-1","blue-grey lighten-3","purple lighten-1","indigo lighten-1","lime lighten-1","orange lighten-1","brown lighten-1","lime lighten-1","green lighten-1","deep-purple lighten-4","teal lighten-4"],cycle:!0,slides:["1","2","3","4","5","6","7","8","9","10","11","12"]}}},v=k,y=n(1656),b=(0,y.A)(v,m,f,!1,null,"fd7a9cde",null),A=b.exports},7656:function(t,e,n){n.d(e,{A:function(){return u}});var o=n(7314),i=n(7150),r=function(){var t=this,e=t._self._c;return e(i.A,{scopedSlots:t._u([{key:"action",fn:function({attrs:n}){return[e(o.A,t._b({attrs:{text:""},on:{click:function(e){return t.$store.commit("hideSnackbar")}}},"v-btn",n,!1),[t._v(" Close ")])]}}]),model:{value:t.$store.state.snackbar.show,callback:function(e){t.$set(t.$store.state.snackbar,"show",e)},expression:"$store.state.snackbar.show"}},[t._v(" "+t._s(t.$store.state.snackbar.text)+" ")])},a=[],s={},l=s,c=n(1656),d=(0,c.A)(l,r,a,!1,null,null,null),u=d.exports},9362:function(t,e,n){var o=n(5471),i=n(5668),r=n(5322),a=function(){var t=this,e=t._self._c;return e(i.A,{attrs:{id:"inspire"}},[e(r.A,[e("router-view"),e("snackbar")],1)],1)},s=[],l={data:()=>({backgroundColor:"#F6F7FF"}),components:{snackbar:n(7656).A},methods:{scrollTo(t){document.getElementById(t).scrollIntoView()}}},c=l,d=n(1656),u=(0,d.A)(c,a,s,!1,null,null,null),p=u.exports,h=n(173),m=n(9483),f=n(3497),g=function(){var t=this,e=t._self._c;return e(f.A,{staticClass:"overflow-y-auto blue-grey lighten-5",attrs:{"max-height":"100%"}},[e("profile-info-section",{attrs:{id:"main-profile"}}),e("div",{staticClass:"container pa-4"},[e(m.A,{staticClass:"mt-16",attrs:{id:"main-skills"}}),e("div",{staticClass:"row"},[e("experiences-section",{staticClass:"col-md-6 mt-16",attrs:{model:t.skillsModel}}),e("experiences-section",{staticClass:"col-md-6 mt-16",attrs:{model:t.otherSkillsModel}})],1),e("div",{staticClass:"row"},[e("experiences-section",{staticClass:"col-md-6 mt-8",attrs:{model:t.experienceModel}}),e("experiences-section",{staticClass:"col-md-6 mt-8",attrs:{model:t.educationModel}})],1),e("my-projects",{staticClass:"mt-16"})],1),e("footer-section")],1)},k=[],v={data:()=>({skillsModel:{header:"Skills",experiences:[{title:"React/Nodejs",percent:100,isSkill:!0,color:"#82B1FF"},{title:"Android Development",percent:100,isSkill:!0,color:"#82B1FF"},{title:".Net/C#",percent:60,isSkill:!0,color:"#82B1FF"},{title:"Vuejs",percent:60,isSkill:!0,color:"#82B1FF"},{title:"Flutter",percent:40,isSkill:!0,color:"#82B1FF"},{title:"Selenium",percent:40,isSkill:!0,color:"#82B1FF"},{title:"Sql (Oracle, Sql Server, PostgreSQL)",percent:100,isSkill:!0,color:"#82B1FF"}]},otherSkillsModel:{header:"Other Skills",experiences:[{title:"Git",percent:100,isSkill:!0,color:"#82B1FF"},{title:"Github / Bitbucket",percent:100,isSkill:!0,color:"#82B1FF"},{title:"Scrum",percent:100,isSkill:!0,color:"#82B1FF"},{title:"Jira",percent:100,isSkill:!0,color:"#82B1FF"},{title:"CI/CD",percent:100,isSkill:!0,color:"#82B1FF"},{title:"Unit Testing",percent:100,isSkill:!0,color:"#82B1FF"}]},experienceModel:{header:"Experience",experiences:[{title:"Bilgiyön Yazılım Danışmanlık Aug 2020 - Present ",items:[{content:"Android Developer"}],color:"#82B1FF"},{title:"My Next Match Jun 2019 - Jul 2020",items:[{content:"Software Tester"}],color:"#82B1FF"}]},educationModel:{header:"Education",experiences:[{title:"Celal Bayar University",items:[{content:"Computer Engineer"}],color:"#82B1FF"},{title:"Celal Bayar University ",items:[{content:"Foreign Language"}],color:"#82B1FF"}]}}),components:{"profile-info-section":n(3330).A,"footer-section":n(5528).A,"experiences-section":n(4422).A,"my-projects":n(6051).A}},y=v,b=(0,d.A)(y,g,k,!1,null,null,null),A=b.exports;o.Ay.use(h.Ay);const w=[{path:"/",name:"Dashboard",component:A},{path:"/about",name:"About",component:()=>n.e(594).then(n.bind(n,4164))},{path:"/SpaceWarsPrivacyPolicy",name:"SpaceWarsPrivacyPolicy",component:()=>n.e(594).then(n.bind(n,7390))},{path:"/SpaceWarsTermsAndConditions",name:"SpaceWarsTermsAndConditions",component:()=>n.e(594).then(n.bind(n,4708))}],_=new h.Ay({routes:w});var C=_,x=(n(4114),n(5353)),F=n(2505),S=n.n(F);const T="https://jsonplaceholder.typicode.com/todos?_limit=5";S().defaults.baseURL="https://jsonplaceholder.typicode.com",o.Ay.use(x.Ay);var j=new x.Ay.Store({state:{tasks:[],snackbar:{show:!1,text:""}},mutations:{async fetchTasks(t){await S().get(T).then((e=>t.tasks=e.data)).catch((t=>console.log(t)))},async addTask(t,e){const{id:n,title:o,completed:i}=e;await S().post(T,{id:n,title:o,completed:i}).then((n=>t.tasks.push(e))).catch((t=>console.log(t)))},doneTask(t,e){let n=t.tasks.filter((t=>t.id===e))[0];n.completed=!n.completed},deleteTask(t,e){S()["delete"](`/todos/${e}`).then((n=>t.tasks=t.tasks.filter((t=>t.id!==e)))).catch((t=>console.log(t)))},async updateTaskTitle(t,e){const{id:n,title:o,completed:i}=e;await S().patch(`/todos/${n}`,{title:o,completed:i}).then((function(n){let o=t.tasks.filter((t=>t.id===e.id))[0];o.title=e.title})).catch((t=>console.log(t)))},updateTodo(t,e){const n=t.todos.findIndex((t=>t.id==e.id));t.todos.splice(n,1,{id:e.id,title:e.title,completed:e.completed})},showSnackbar(t,e){let n=0;t.snackbar.show&&(t.snackbar.show=!1,n=300),setTimeout((()=>{t.snackbar.show=!0,t.snackbar.text=e}),n)},hideSnackbar(t){t.snackbar.show=!1}},actions:{addTask({commit:t},e){t("addTask",e),t("showSnackbar","Task added!")},deleteTask({commit:t},e){t("deleteTask",e),t("showSnackbar","Task deleted!")}},getters:{}}),I=n(5868);o.Ay.use(I.A);var B=new I.A({});o.Ay.config.productionTip=!1,new o.Ay({router:C,store:j,vuetify:B,render:t=>t(p)}).$mount("#app")},558:function(t,e,n){t.exports=n.p+"img/image.aa04dd72.jpeg"}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,r){if(!o){var a=1/0;for(d=0;d<t.length;d++){o=t[d][0],i=t[d][1],r=t[d][2];for(var s=!0,l=0;l<o.length;l++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](o[l])}))?o.splice(l--,1):(s=!1,r<a&&(a=r));if(s){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}r=r||0;for(var d=t.length;d>0&&t[d-1][2]>r;d--)t[d]=t[d-1];t[d]=[o,i,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about.67209d6a.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vuetify-todo:";n.l=function(o,i,r,a){if(t[o])t[o].push(i);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==e+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",e+r),s.src=o),t[o]=[i];var p=function(e,n){s.onerror=s.onload=null,clearTimeout(h);var i=t[o];if(delete t[o],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((function(t){return t(n)})),e)return e(n)},h=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/MyWebsite/"}(),function(){var t={524:0};n.f.j=function(e,o){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=t[e]=[n,o]}));o.push(i[2]=r);var a=n.p+n.u(e),s=new Error,l=function(o){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,i[1](s)}};n.l(a,l,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,r,a=o[0],s=o[1],l=o[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)var d=l(n)}for(e&&e(o);c<a.length;c++)r=a[c],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(d)},o=self["webpackChunkvuetify_todo"]=self["webpackChunkvuetify_todo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(9362)}));o=n.O(o)})();
//# sourceMappingURL=app.aad9ffaf.js.map