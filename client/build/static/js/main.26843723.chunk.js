(this.webpackJsonphackathon=this.webpackJsonphackathon||[]).push([[0],{40:function(e,t,s){},41:function(e,t,s){},65:function(e,t,s){},69:function(e,t,s){},70:function(e,t,s){},71:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(1),c=s.n(n),l=s(33),o=s.n(l),i=(s(40),s(41),s(4)),r=s(9),d=s(10),j=s(12),h=s(11),b=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).logout=function(){localStorage.clear()},e}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{children:Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(a.jsx)(i.b,{className:"navbar-brand",style:{fontFamily:"'Kaushan Script', cursive"},to:"/home",children:"Social.in"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{className:"navbar-nav",style:{marginLeft:"auto"},children:[Object(a.jsx)("li",{className:"nav-item active",children:Object(a.jsxs)(i.b,{className:"nav-link",to:"/home",children:["Home ",Object(a.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{className:"nav-link",to:"/profile",children:"Profile"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(i.b,{className:"nav-link",onClick:this.logout,to:"/login",children:"Logout"})})]})})]})})}}]),s}(c.a.Component),m=s(2),u=s(18),g=s(3),p=s.n(g),x=(s(65),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).formSubmit=function(e){e.preventDefault();console.log(a.state),p.a.post("/api/user/login",a.state,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){console.log(e.data.token),localStorage.setItem("token",e.data.token),a.props.history.push("/home")}))},a.changeHanler=function(e){var t=e.target.name,s=e.target.value;a.setState(Object(u.a)({},t,s))},a.state={userName:null,password:null},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-5 mx-auto",children:Object(a.jsxs)("div",{className:"myform form",children:[Object(a.jsx)("div",{className:"logo mb-3",children:Object(a.jsx)("div",{className:"col-md-12 text-center",children:Object(a.jsx)("h1",{children:"Login"})})}),this.state.name,Object(a.jsxs)("form",{onSubmit:this.formSubmit,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(a.jsx)("input",{type:"text",name:"userName",onChange:this.changeHanler,className:"form-control",id:"emailLogin","aria-describedby":"emailHelp",placeholder:"Enter User Name",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.changeHanler,id:"passwordLogin",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Password",required:!0})]}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("p",{className:"text-center",children:["By signing up you accept our ",Object(a.jsx)(i.b,{to:"/login",children:"Terms Of Use"})]})}),Object(a.jsx)("div",{className:"col-md-12 text-center ",children:Object(a.jsx)("button",{type:"submit",className:" btn btn-block mybtn btn-primary tx-tfm",children:"Login"})}),Object(a.jsx)("div",{className:"col-md-12 ",children:Object(a.jsxs)("div",{className:"login-or",children:[Object(a.jsx)("hr",{className:"hr-or"}),Object(a.jsx)("span",{className:"span-or",children:"or"})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("p",{className:"text-center",children:["Don't have account? ",Object(a.jsx)(i.b,{to:"/signup",id:"signup",children:"Sign up here"})]})})]})]})})})})}}]),s}(c.a.Component)),O=s(16),f=s.n(O),v=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleFollow=function(e){if(localStorage.getItem("token")){var t={"Content-Type":"application/json",authorization:localStorage.getItem("token")},s={user_id:e};p.a.post("/api/post/follow",s,{headers:t}).then((function(e){alert("Follow Successfully")})).catch((function(e){419===e.response.status&&alert("Already Follow"),console.log("Error ",e)}))}else alert("Please Login Before Follow !!"),a.props.history.push("/login")},a.getUserPost=function(){var e={"Content-Type":"application/json",authorization:localStorage.getItem("token")};console.log("User ID : ",a.userId),p.a.get("/api/post/by/user/".concat(a.userId),{headers:e}).then((function(e){console.log(e.data),a.setState({postList:e.data.postList,followingList:[],followerList:[]})})).catch((function(e){console.log("Error : "+e)}))},a.getUserFollwer=function(){p.a.get("/api/post/user/follower/".concat(a.userId)).then((function(e){console.log(e.data),a.setState({postList:[],followerList:e.data.followerList,followingList:[]})})).catch((function(e){console.log("Error : "+e)}))},a.getUserFollowing=function(){p.a.get("/api/post/following/user/".concat(a.userId)).then((function(e){console.log(e.data),a.setState({postList:[],followerList:[],followingList:e.data.followingList})})).catch((function(e){console.log("Error : "+e)}))},a.changeHanler=function(e){var t=e.target.value;a.setState({message:t})},a.handlePost=function(e){e.preventDefault();var t={"Content-Type":"application/json",authorization:localStorage.getItem("token")};console.log(a.state),p.a.post("/api/post/create",a.state,{headers:t}).then((function(e){console.log(e.data),a.setState({message:"Post Add Successfully Please Refresh !!"}),a.props.history.push("/home")})).catch((function(e){console.log("Error ",e)}))},a.state={message:null,userId:null,userName:null,image:null,postList:[],followerList:[],followingList:[],activePage:1},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;this.getUserProfile(),setTimeout((function(){return e.getUserPost()}),2e3)}},{key:"getUserProfile",value:function(){var e=this,t={authorization:localStorage.getItem("token")};p.a.get("/api/user/profile",{headers:t}).then((function(t){e.userId=t.data.userInfo._id,e.setState({userId:t.data.userInfo._id,userName:t.data.userInfo.firstName+" "+t.data.userInfo.lastName}),console.log(t.data)})).catch((function(t){e.props.history.push("/login"),alert("Please Login First ")}))}},{key:"componentDidCatch",value:function(e,t){console.log("Errro ",e),console.log("Info ",t)}},{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e})}},{key:"render",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{backgroundColor:"white"},className:"job-listing-main",children:Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row ",style:{marginLeft:"60px",width:"85%"},children:Object(a.jsxs)("div",{className:"col-md-12",style:{width:"80%"},children:[Object(a.jsx)("textarea",{style:{marginTop:"20px"},onChange:this.changeHanler,name:"message",className:"form-control",cols:"10",rows:"6"}),Object(a.jsx)("button",{style:{float:"right",margin:"5px"},onClick:this.handlePost,className:"btn btn-primary",children:"Add Post"})]})})})}),Object(a.jsx)("div",{style:{backgroundColor:"white"},className:"container",children:Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{className:"job-list",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{onClick:this.getUserPost,className:"btn btn-primary",children:"Time Line"})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{onClick:this.getUserFollwer,className:"btn btn-primary",children:"Followed By You"})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{onClick:this.getUserFollowing,className:"btn btn-primary",children:"Following List"})})]})})})}),Object(a.jsx)("div",{style:{backgroundColor:"white"},className:"job-listing-main",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row justify-content-center",children:[this.state.postList.map((function(e,t){return Object(a.jsxs)("div",{className:"job-list",children:[Object(a.jsxs)("h5",{style:{marginBottom:"0px"},children:[Object(a.jsx)("i",{className:"fa fa-user margin: 15px 0px 15px 0px"}),e.userName]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("div",{className:"row justify-content-start",children:Object(a.jsxs)("p",{style:{marginLeft:"10px"},children:["Date : ",e.date]})})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("div",{className:"row justify-content-end"})})]}),Object(a.jsx)("div",{className:"middle-section",children:Object(a.jsxs)("p",{children:[" ",Object(a.jsxs)("b",{children:[e.message," "]})]})})]},t)})),this.state.followerList.map((function(e,t){return Object(a.jsx)("div",{className:"job-list",children:Object(a.jsxs)("table",{className:"table",cellSpacing:"0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"User Name"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.followerName}),Object(a.jsx)("td",{children:e.date}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{className:"btn btn-info",children:" Un Follow"})})]})})]})},t)})),this.state.followingList.map((function(e,t){return Object(a.jsx)("div",{className:"job-list",children:Object(a.jsxs)("table",{className:"table",cellspacing:"0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"User Name"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:e.userName}),Object(a.jsx)("td",{children:e.date}),Object(a.jsx)("td",{children:Object(a.jsx)("button",{className:"btn btn-info",children:" Follow Back"})})]})})]})},t)}))]}),Object(a.jsx)("div",{className:"form-control center",children:Object(a.jsx)(f.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:450,pageRangeDisplayed:5,onChange:this.handlePageChange.bind(this)})})]})})]})}}]),s}(c.a.Component),N=(s(69),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleFollow=function(e){if(localStorage.getItem("token")){var t={"Content-Type":"application/json",authorization:localStorage.getItem("token")},s={user_id:e};p.a.post("/api/post/follow",s,{headers:t}).then((function(e){alert("Follow Successfully")})).catch((function(e){419===e.response.status&&alert("Already Follow"),console.log("Error ",e)}))}else alert("Please Login Before Follow !!"),a.props.history.push("/login")},a.state={postList:[],activePage:1},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;p.a.get("/api/post/get/all").then((function(t){console.log(t.data),e.setState({postList:t.data.postList})})).catch((function(e){console.log("Error : "+e)}))}},{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{style:{backgroundColor:"white"},className:"job-listing-main",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("div",{className:"row justify-content-center",children:this.state.postList.map((function(t,s){return Object(a.jsxs)("div",{className:"job-list",children:[Object(a.jsx)("h5",{style:{marginBottom:"0px"},children:Object(a.jsxs)(i.b,{to:"/user/detail/".concat(t.userId),children:[Object(a.jsx)("i",{className:"fa fa-user margin: 15px 0px 15px 0px"}),t.userName]})}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("div",{className:"row justify-content-start",children:Object(a.jsxs)("p",{style:{marginLeft:"10px"},children:["Date : ",t.date]})})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("div",{className:"row justify-content-end",children:Object(a.jsxs)(i.b,{to:"#",onClick:function(){return e.handleFollow(t.userId)},children:[" ",Object(a.jsx)("i",{className:"fa fa-user-plus fa-2x",style:{color:"orange"}}),"Follow"]})})})]}),Object(a.jsx)("div",{className:"middle-section",children:Object(a.jsxs)("p",{children:[" ",Object(a.jsxs)("b",{children:[t.message," "]})]})})]},s)}))}),Object(a.jsx)("div",{className:"form-control center",children:Object(a.jsx)(f.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:450,pageRangeDisplayed:5,onChange:this.handlePageChange.bind(this)})})]})})}}]),s}(c.a.Component)),y=(s(70),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).formSubmit=function(e){e.preventDefault();console.log(a.state),p.a.post("/api/user/signup",a.state,{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"http://localhost:3000"}}).then((function(e){console.log(e.data),a.setState({message:"Register Successfully Please Login !!"}),a.props.history.push("/login")})).catch((function(e){console.log("Error ",e)}))},a.changeHanler=function(e){var t=e.target.name,s=e.target.value;a.setState(Object(u.a)({},t,s))},a.state={firstName:null,lastName:null,email:null,userName:null,password:null,message:null},a}return Object(d.a)(s,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-md-5 mx-auto",children:Object(a.jsxs)("div",{className:"myform form ",children:[Object(a.jsx)("div",{className:"logo mb-3",children:Object(a.jsx)("div",{className:"col-md-12 text-center",children:Object(a.jsx)("h1",{children:"Signup"})})}),Object(a.jsxs)("form",{onSubmit:this.formSubmit,name:"registration",children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(a.jsx)("input",{type:"text",name:"firstName",onChange:this.changeHanler,className:"form-control",id:"firstname","aria-describedby":"emailHelp",placeholder:"Enter Firstname",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(a.jsx)("input",{type:"text",name:"lastName",onChange:this.changeHanler,className:"form-control",id:"lastname","aria-describedby":"emailHelp",placeholder:"Enter Lastname",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(a.jsx)("input",{type:"email",name:"email",onChange:this.changeHanler,className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"userName",children:"User Name"}),Object(a.jsx)("input",{type:"text",name:"userName",onChange:this.changeHanler,className:"form-control",id:"userName","aria-describedby":"emailHelp",placeholder:"Enter userName",required:!0})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{htmlFor:"password",children:"Password"}),Object(a.jsx)("input",{type:"password",name:"password",onChange:this.changeHanler,id:"password",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Password",required:!0})]}),Object(a.jsx)("div",{className:"col-md-12 text-center mb-3",children:Object(a.jsx)("button",{type:"submit",className:" btn btn-block mybtn btn-primary tx-tfm",children:"Signup"})}),Object(a.jsx)("div",{className:"col-md-12",children:Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("p",{className:"text-center",children:Object(a.jsx)(i.b,{to:"/login",id:"signin",children:"Already have an account?"})})})})]}),null!=this.state.message?Object(a.jsx)("h5",{className:"text-danger",children:this.state.message}):""]})})})})}}]),s}(c.a.Component)),w=function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).handleFollow=function(e){if(localStorage.getItem("token")){var t={"Content-Type":"application/json",authorization:localStorage.getItem("token")},s={user_id:e};p.a.post("/api/post/follow",s,{headers:t}).then((function(e){alert("Follow Successfully")})).catch((function(e){419===e.response.status&&alert("Already Follow"),console.log("Error ",e)}))}else alert("Please Login Before Follow !!"),a.props.history.push("/login")},a.getUserPost=function(){p.a.get("/api/post/by/user/by/".concat(a.props.match.params.id)).then((function(e){a.setState({postList:e.data.postList,followingList:[],followerList:[]})})).catch((function(e){console.log("Error : "+e)}))},a.getUserFollwer=function(){p.a.get("/api/post/user/follower/".concat(a.props.match.params.id)).then((function(e){a.setState({postList:[],followerList:e.data.followerList,followingList:[]})})).catch((function(e){console.log("Error : "+e)}))},a.getUserFollowing=function(){p.a.get("/api/post/following/user/".concat(a.props.match.params.id)).then((function(e){a.setState({postList:[],followerList:[],followingList:e.data.followingList})})).catch((function(e){console.log("Error : "+e)}))},a.changeHanler=function(e){var t=e.target.value;a.setState({message:t})},a.handlePost=function(e){e.preventDefault();var t={"Content-Type":"application/json",authorization:localStorage.getItem("token")};console.log(a.state),p.a.post("/api/post/create",a.state,{headers:t}).then((function(e){console.log(e.data),a.setState({message:"Post Add Successfully Please Refresh !!"}),a.props.history.push("/home")})).catch((function(e){console.log("Error ",e)}))},a.state={message:null,userId:null,userName:null,image:null,postList:[],followerList:[],followingList:[],activePage:1},a}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getUserPost()}},{key:"getUserProfile",value:function(){var e=this,t={authorization:localStorage.getItem("token")};p.a.get("/api/user/profile",{headers:t}).then((function(t){e.userId=t.data.userInfo._id,e.setState({userId:t.data.userInfo._id,userName:t.data.userInfo.firstName+" "+t.data.userInfo.lastName}),console.log(t.data)})).catch((function(t){e.props.history.push("/login"),alert("Please Login First ")}))}},{key:"componentDidCatch",value:function(e,t){console.log("Errro ",e),console.log("Info ",t)}},{key:"handlePageChange",value:function(e){console.log("active page is ".concat(e)),this.setState({activePage:e})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{backgroundColor:"white"},className:"container",children:Object(a.jsx)("div",{className:"row justify-content-center",children:Object(a.jsx)("div",{className:"job-list",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{onClick:this.getUserPost,className:"btn btn-primary",children:"Time Line"})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{onClick:this.getUserFollwer,className:"btn btn-primary",children:"Follow By The User"})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsx)("button",{onClick:this.getUserFollowing,className:"btn btn-primary",children:"Following List"})})]})})})}),Object(a.jsx)("div",{style:{backgroundColor:"white"},className:"job-listing-main",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsxs)("div",{className:"row justify-content-center",children:[this.state.postList.map((function(t,s){return Object(a.jsxs)("div",{className:"job-list",children:[Object(a.jsxs)("h5",{style:{marginBottom:"0px"},children:[Object(a.jsx)("i",{className:"fa fa-user margin: 15px 0px 15px 0px"}),t.userName]}),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("div",{className:"row justify-content-start",children:Object(a.jsxs)("p",{style:{marginLeft:"10px"},children:["Date : ",t.date]})})}),Object(a.jsx)("div",{className:"col-6",children:Object(a.jsx)("div",{className:"row justify-content-end",children:Object(a.jsxs)(i.b,{to:"#",onClick:function(){return e.handleFollow(t._id)},children:[" ",Object(a.jsx)("i",{className:"fa fa-user-plus fa-2x",style:{color:"orange"}}),"Follow"]})})})]}),Object(a.jsx)("div",{className:"middle-section",children:Object(a.jsxs)("p",{children:[" ",Object(a.jsxs)("b",{children:[t.message," "]})]})})]},s)})),this.state.followerList.map((function(t,s){return Object(a.jsx)("div",{className:"job-list",children:Object(a.jsxs)("table",{className:"table",cellSpacing:"0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"User Name"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.followerName}),Object(a.jsx)("td",{children:t.date}),Object(a.jsx)("td",{children:Object(a.jsxs)(i.b,{to:"#",onClick:function(){return e.handleFollow(t._id)},children:[" ",Object(a.jsx)("i",{className:"fa fa-user-plus fa-2x",style:{color:"orange"}}),"Follow"]})})]})})]})},s)})),this.state.followingList.map((function(t,s){return Object(a.jsx)("div",{className:"job-list",children:Object(a.jsxs)("table",{className:"table",cellspacing:"0",children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"User Name"}),Object(a.jsx)("th",{children:"Date"}),Object(a.jsx)("th",{children:"Action"})]})}),Object(a.jsx)("tbody",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:t.userName}),Object(a.jsx)("td",{children:t.date}),Object(a.jsx)("td",{children:Object(a.jsxs)(i.b,{to:"#",onClick:function(){return e.handleFollow(t._id)},children:[" ",Object(a.jsx)("i",{className:"fa fa-user-plus fa-2x",style:{color:"orange"}}),"Follow"]})})]})})]})},s)}))]}),Object(a.jsx)("div",{className:"form-control center",children:Object(a.jsx)(f.a,{activePage:this.state.activePage,itemsCountPerPage:10,totalItemsCount:450,pageRangeDisplayed:5,onChange:this.handlePageChange.bind(this)})})]})})]})}}]),s}(c.a.Component),L=function(){return Object(a.jsxs)(m.c,{children:[Object(a.jsx)(m.a,{exact:!0,path:"/",component:N}),Object(a.jsx)(m.a,{exact:!0,path:"/login",component:x}),Object(a.jsx)(m.a,{exact:!0,path:"/signup",component:y}),Object(a.jsx)(m.a,{exact:!0,path:"/user/detail/:id",component:w}),Object(a.jsx)(m.a,{path:"/home",component:N}),Object(a.jsx)(m.a,{path:"/profile",component:v})]})};var C=function(){return Object(a.jsxs)(i.a,{children:[Object(a.jsx)(b,{}),Object(a.jsx)("div",{className:"container mt-5",children:Object(a.jsx)(L,{})})]})},k=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,72)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,l=t.getTTFB;s(e),a(e),n(e),c(e),l(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),k()}},[[71,1,2]]]);
//# sourceMappingURL=main.26843723.chunk.js.map