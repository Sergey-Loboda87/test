(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{19:function(e,t,a){e.exports={navBar:"NavBar_navBar__Z_Myu",navBar_items:"NavBar_navBar_items__13rgR"}},23:function(e,t,a){e.exports={header:"Header_header__Bl05-"}},25:function(e,t,a){e.exports={item_container:"PortletInform_item_container__1Kph9"}},26:function(e,t,a){e.exports={profile:"Profile_profile__37LCL"}},27:function(e,t,a){e.exports={saidBar:"SaidBar_saidBar__2BYZ4"}},29:function(e,t,a){e.exports={items:"Account_items__3yMxs"}},30:function(e,t,a){e.exports={items:"PrisePlans_items__1c3xc"}},35:function(e,t,a){},36:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),c=a(22),s=a.n(c),r=(a(35),a(14)),o=a(2),l=(a(36),a(23)),j=a.n(l),d=a(0),h=function(){return Object(d.jsx)("div",{className:j.a.header})},b=a(8),m=a.n(b),u=a(24),x=a(10),_=a(11),O=a(16),f=a(13),v=a(12),p=function(e){var t=e.formErrors;return Object(d.jsx)("div",{className:"formErrors",children:Object.keys(t).map((function(e,a){return t[e].length>0?Object(d.jsx)("div",{className:m.a.contain_error,children:t[e]},a):""}))})},N=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(x.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",email:"",tel:"",country:"",region:"",formErrors:{email:""},emailValid:!1,formValid:!1},n.handleSubmit=n.handleSubmit.bind(Object(O.a)(n)),n.handleChange=n.handleChange.bind(Object(O.a)(n)),n}return Object(_.a)(a,[{key:"handleSubmit",value:function(){console.log(this.state);var e=this.state,t=e.firstName,a=e.lastName,n=e.email,i=e.tel,c=e.country,s=e.region;alert("The form is completed and ready to be sent: \nFirst Name: ".concat(t," \nLast Name: ").concat(a," \nE-mail: ").concat(n," \nTel: ").concat(i," \nCountry: ").concat(c," \nRegion: ").concat(s))}},{key:"handleChange",value:function(e){var t=this;console.log(e.target.value);var a=e.target,n=a.name,i=a.value;this.setState(Object(u.a)({},n,i),(function(){t.validateField(n,i)}))}},{key:"validateField",value:function(e,t){var a=this.state.formErrors,n=this.state.emailValid;switch(e){case"email":n=t.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i),a.email=n?"":"\u041f\u043e\u043b\u0435 E-mail \u043d\u0435 \u0443\u0434\u043e\u0432\u043b\u0435\u0442\u0432\u043e\u0440\u044f\u0435\u0442 \u0444\u043e\u0440\u043c\u0430\u0442\u0443!"}this.setState({formErrors:a,emailValid:n},this.validateForm)}},{key:"validateForm",value:function(){this.setState({formValid:this.state.emailValid})}},{key:"render",value:function(){return Object(d.jsxs)("form",{className:m.a.body_container,action:"#",method:"get",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{placeholder:"First Name",type:"text",name:"firstName",value:this.state.firstName,onChange:this.handleChange}),Object(d.jsx)("legend",{children:"Please specify the first name"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{placeholder:"Last Name",type:"text",name:"lastName",value:this.state.lastName,onChange:this.handleChange}),Object(d.jsx)("legend",{children:"Assistive text"})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{placeholder:"adrian_shp@yahoo.com",type:"email",name:"email",value:this.state.email,onChange:this.handleChange}),Object(d.jsx)(p,{formErrors:this.state.formErrors})]}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{placeholder:"8-888-888-88-88",type:"tel",name:"tel",value:this.state.tel,onChange:this.handleChange})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{placeholder:"Romania",type:"text",name:"country",value:this.state.country,onChange:this.handleChange})}),Object(d.jsx)("div",{children:Object(d.jsx)("input",{placeholder:"Ramnicu Valcea",type:"text",name:"region",value:this.state.region,onChange:this.handleChange})}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{className:m.a.button,onClick:this.handleSubmit,disabled:!(this.state.firstName&&this.state.lastName&&this.state.emailValid),children:"seve settings"})})]})}}]),a}(n.Component),y=function(){return Object(d.jsxs)("div",{className:m.a.item_container,children:[Object(d.jsx)("div",{className:m.a.item_header,children:Object(d.jsxs)("div",{className:m.a.header_container,children:[Object(d.jsx)("span",{children:"Basic Profile"}),"The information can be edited from yuor profile page"]})}),Object(d.jsx)("div",{className:m.a.item_body,children:Object(d.jsx)(N,{})})]})},g=a(25),B=a.n(g),C=function(){return Object(d.jsx)("div",{className:B.a.item_container})},P=a(6),k=a.n(P),E=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:k.a.item_notif,children:[Object(d.jsx)("h2",{children:"Notifications"}),Object(d.jsxs)("form",{action:"#",method:"get",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Email"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Push notifications",Object(d.jsx)("legend",{children:"For your mobile or tablet device"})]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Text Messages"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Phone Calls"]})]})]})}}]),a}(n.Component),F=function(e){Object(f.a)(a,e);var t=Object(v.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(_.a)(a,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:k.a.item_messages,children:[Object(d.jsx)("h2",{children:"Messages"}),Object(d.jsxs)("form",{action:"#",method:"get",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Email"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Push notifications"]}),Object(d.jsx)("br",{}),Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{type:"checkbox",value:"yes"})," Text Messages"]})]})]})}}]),a}(n.Component),w=function(){return Object(d.jsxs)("div",{className:k.a.item_container,children:[Object(d.jsx)("div",{className:k.a.item_header,children:Object(d.jsxs)("div",{className:k.a.header_container,children:[Object(d.jsx)("span",{children:"Notifications"}),"Mange the notifications emailing"]})}),Object(d.jsxs)("div",{className:k.a.item_body,children:[Object(d.jsx)(E,{}),Object(d.jsx)(F,{})]}),Object(d.jsx)("div",{className:k.a.item_footer,children:Object(d.jsx)("div",{className:k.a.buttom_container,children:Object(d.jsx)("button",{className:k.a.button,children:"seve"})})})]})},S=a(26),V=a.n(S),T=function(){return Object(d.jsxs)("div",{className:V.a.profile,children:[Object(d.jsx)(w,{}),Object(d.jsx)(y,{}),Object(d.jsx)(C,{})]})},M=a(27),L=a.n(M),A=function(){return Object(d.jsx)("div",{className:L.a.saidBar})},R=a(19),J=a.n(R),H=function(){return Object(d.jsx)("div",{className:J.a.navBar,children:Object(d.jsxs)("div",{className:J.a.navBar_items,children:[Object(d.jsx)(r.b,{to:"/profile",children:"Profile"}),Object(d.jsx)(r.b,{to:"/account",children:"Account"}),Object(d.jsx)(r.b,{to:"/prisePlans",children:"Prise Plans"})]})})},I=a(29),U=a.n(I),Z=function(){return Object(d.jsx)("div",{className:U.a.items,children:Object(d.jsx)("h1",{children:"Account"})})},K=a(30),Q=a.n(K),W=function(){return Object(d.jsx)("div",{className:Q.a.items,children:Object(d.jsx)("h1",{children:"PrisePlans"})})};var z=function(){return Object(d.jsx)(r.a,{children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"app-wrapper",children:[Object(d.jsx)(h,{}),Object(d.jsx)(A,{}),Object(d.jsx)(H,{}),Object(d.jsxs)("div",{className:"app-wrapper-content",children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:T}),Object(d.jsx)(o.a,{exact:!0,path:"/profile",component:T}),Object(d.jsx)(o.a,{path:"/account",component:Z}),Object(d.jsx)(o.a,{path:"/prisePlans",component:W})]})]})})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,47)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(z,{})}),document.getElementById("root")),D()},6:function(e,t,a){e.exports={item_container:"Notifications_item_container__2Hh6b",item_header:"Notifications_item_header__1cU1Q",header_container:"Notifications_header_container__1Ul9p",item_body:"Notifications_item_body__We9AL",item_footer:"Notifications_item_footer__2c9EU",buttom_container:"Notifications_buttom_container__1VkT2",button:"Notifications_button__7KBkC"}},8:function(e,t,a){e.exports={item_container:"BasicProfile_item_container__33_Br",item_header:"BasicProfile_item_header__4vRNQ",header_container:"BasicProfile_header_container__3mEH-",item_body:"BasicProfile_item_body__3JT0l",body_container:"BasicProfile_body_container__GZld7",buttom_container:"BasicProfile_buttom_container__2wCz9",button:"BasicProfile_button__yWVdw",contain_error:"BasicProfile_contain_error__2caMJ"}}},[[46,1,2]]]);
//# sourceMappingURL=main.02099b37.chunk.js.map