(this["webpackJsonpgoit-react-hw06-phonebook"]=this["webpackJsonpgoit-react-hw06-phonebook"]||[]).push([[0],{29:function(n,t,e){n.exports=e(43)},40:function(n,t,e){},41:function(n,t,e){},42:function(n,t,e){},43:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(6),i=e.n(o),c=e(5),l=e(7),u=e(27),p="phonebook/addContact",s="phonebook/deleteContact",f="phonebook/changeFilter",d=Object(l.b)({contacts:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,e=t.type,a=t.payload;switch(e){case p:return[a.contact].concat(Object(u.a)(n));case s:return n.filter((function(n){return n.id!==a.id}));default:return n}},filter:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,e=t.type,a=t.payload;switch(e){case f:return a.filter;default:return n}}}),x=Object(l.b)({phonebook:d}),b=Object(l.c)(x,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=e(13),h=e(14),g=e(17),v=e(16),y=e(45),E=e(23),w=e(46),O={addContact:function(n,t){return{type:p,payload:{contact:{id:Object(w.a)(),name:n,number:t}}}},deleteContact:function(n){return{type:s,payload:{id:n}}},changeFilter:function(n){return{type:f,payload:{filter:n}}}},j=e(1),C=e(2);function k(){var n=Object(j.a)(["\n  width: 42%;\n  padding-left: 10px;\n  font-size: 18px;\n\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 500;\n"]);return k=function(){return n},n}function S(){var n=Object(j.a)(["\n  width: 90%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n  height: 50px;\n  font-size: 14px;\n  line-height: 50px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return S=function(){return n},n}function F(){var n=Object(j.a)(["\n  list-style-type: none;\n  width: 100%;\n\n  display: flex;\n  padding: 0;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n"]);return F=function(){return n},n}function N(){var n=Object(j.a)(["\n  width: 90px;\n  align-self: center;\n  height: 30px;\n  border: none;\n  border-radius: 5px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return N=function(){return n},n}function _(){var n=Object(j.a)(["\n  font-size: 14px;\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 500;\n  color: #3f51b5;\n"]);return _=function(){return n},n}function z(){var n=Object(j.a)(["\n  border: 1px grey solid;\n  height: 35px;\n  border-radius: 5px;\n  width: 98%;\n  /* & :focus {\n    border: 2px #3f51b5 solid;\n  } */\n"]);return z=function(){return n},n}function D(){var n=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: left;\n  margin-bottom: 10px;\n"]);return D=function(){return n},n}function A(){var n=Object(j.a)(["\n  width: 100%;\n  display: flex;\n  /* height: 120px; */\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: stretch;\n"]);return A=function(){return n},n}function I(){var n=Object(j.a)(["\n  width: 90%;\n"]);return I=function(){return n},n}function T(){var n=Object(j.a)(["\n  margin-right: 50%;\n  font-size: 30px;\n  font-family: inherit;\n  font-style: normal;\n  font-weight: 800;\n  text-align: center;\n  justify-self: left;\n  color: #3f51b5;\n"]);return T=function(){return n},n}function B(){var n=Object(j.a)(['\n  font-family: "Arial";\n  font-size: 18px;\n  width: 450px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n\n  margin: auto;\n  /* padding-inline-start: 0; */\n  /* border: 2px grey solid; */\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n']);return B=function(){return n},n}var J=C.a.div(B()),L=C.a.h2(T()),X=C.a.div(I()),U=C.a.form(A()),M=C.a.label(D()),R=C.a.input(z()),V=C.a.span(_()),H=(C.a.button(N()),C.a.ul(F()),C.a.li(S())),P=C.a.p(k());function q(){var n=Object(j.a)(["\n  margin: auto;\n\n  padding: 0;\n  border-radius: 3px;\n  background-color: #ff2400;\n\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 14px;\n  /* line-height: 24px; */\n  font-style: normal;\n  font-weight: 500;\n  max-width: 30px;\n  height: 30px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  width: 10%;\n\n  margin-right: auto;\n  &:hover,\n  :focus {\n    background-color: #b00000;\n  }\n"]);return q=function(){return n},n}var G=C.a.button(q()),K=function(n){var t=n.onBtnClick;return r.a.createElement(G,{onClick:t},"\u2716")},Q=Object(c.b)((function(n,t){var e=n.phonebook.contacts.find((function(n){return n.id===t.id}));return Object(E.a)({},e)}),(function(n,t){return{onDeleteContact:function(){return n(O.deleteContact(t.id))}}}))((function(n){var t=n.name,e=n.number,a=n.onDeleteContact;return r.a.createElement(H,null,r.a.createElement(P,null,t),r.a.createElement(P,null,e),r.a.createElement(K,{onBtnClick:a}))})),W=e(47),Y=(e(40),Object(c.b)((function(n){var t=n.phonebook,e=t.contacts,a=t.filter.toLowerCase();return{contacts:e.filter((function(n){return n.name.toLowerCase().includes(a)}))}}))((function(n){var t=n.contacts;return r.a.createElement(W.a,{comronent:"ul",className:"list"},t.map((function(n){var t=n.id;return r.a.createElement(y.a,{key:t,timeout:250,classNames:"list-item-fade"},r.a.createElement(Q,{key:t,id:t}))})))}))),Z=e(15);function $(){var n=Object(j.a)(["\n  position: absolute;\n  left: 50%;\n  top: 35px;\n  padding: 0;\n  border-radius: 3px;\n  background-color: #ff2400;\n\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  width: 220px;\n  height: 50px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n"]);return $=function(){return n},n}var nn=C.a.div($()),tn=function(n){var t=n.condition,e=n.nextCondition;return r.a.createElement(nn,null,t?"Contact already exists!":e?"Fill in all fields!":"")};e(41);function en(){var n=Object(j.a)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  justify-self: center;\n\n  padding: 8px 16px;\n  border-radius: 3px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 100%;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  width: 10%;\n\n  &:hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]);return en=function(){return n},n}var an=C.a.button(en()),rn=function(n){var t=n.onBtnClick;return r.a.createElement(an,{onClick:t},"Add contact ")},on=function(n){Object(g.a)(e,n);var t=Object(v.a)(e);function e(){var n;Object(m.a)(this,e);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))).state={name:"",number:"",isExists:!1,notFilled:!1},n.handleChange=function(t){var e=t.target;""!==n.props.filterContent&&n.props.onClearFilter("");var a=e.name,r=e.value;n.setState(Object(Z.a)({},a,r))},n.handleSubmit=function(t){t.preventDefault();var e=n.props.existingContacts.find((function(t){return t.name===n.state.name}));""===n.state.name||""===n.state.name?n.setState({notFilled:!0}):void 0!==e?n.setState({isExists:!0}):n.props.onAddContact(n.state.name,n.state.number),n.setState({name:"",number:""}),setTimeout((function(){return n.setState({isExists:!1,notFilled:!1})}),3e3)},n}return Object(h.a)(e,[{key:"componentDidMount",value:function(){this.props.onClearFilter("")}},{key:"render",value:function(){var n=this.state,t=n.name,e=n.number,a=n.isExists,o=n.notFilled;return r.a.createElement(X,null,r.a.createElement(U,{onSubmit:this.handleSubmit},r.a.createElement(M,null,r.a.createElement(V,null,"Name"),r.a.createElement(R,{type:"text",name:"name",value:t,onChange:this.handleChange})),r.a.createElement(M,null,r.a.createElement(V,null,"Number"),r.a.createElement(R,{type:"tel",name:"number",value:e,onChange:this.handleChange})),r.a.createElement(rn,{type:"submit"},"Add contact")),r.a.createElement(y.a,{in:a||o,timeout:250,classNames:"warning-item-fade",unmountOnExit:!0},r.a.createElement(tn,{condition:a,nextCondition:o})))}}]),e}(a.Component),cn={onAddContact:O.addContact,onClearFilter:O.changeFilter},ln=Object(c.b)((function(n){return{existingContacts:n.phonebook.contacts,filterContent:n.phonebook.filter}}),cn)(on),un={onFindContacts:O.changeFilter},pn=Object(c.b)((function(n){return{value:n.phonebook.filter}}),un)((function(n){var t=n.value,e=n.onFindContacts;return r.a.createElement(X,null,r.a.createElement(M,null,r.a.createElement(V,null,"Find contacts by name"),r.a.createElement(R,{type:"text",name:"filter",value:t,onChange:function(n){return e(n.target.value)}})))})),sn=(e(42),function(n){Object(g.a)(e,n);var t=Object(v.a)(e);function e(){return Object(m.a)(this,e),t.apply(this,arguments)}return Object(h.a)(e,[{key:"componentDidMount",value:function(){var n=localStorage.getItem("contacts");n&&this.setState({contacts:JSON.parse(n)})}},{key:"componentDidUpdate",value:function(n){n.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(y.a,{in:!0,appear:!0,timeout:500,classNames:"fadeHeader",unmountOnExit:!0},r.a.createElement(L,null,"Phonebook")),r.a.createElement(ln,null),r.a.createElement(pn,null),r.a.createElement(Y,null))}}]),e}(a.Component));i.a.render(r.a.createElement(c.a,{store:b},r.a.createElement(sn,null)),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.36b90e7a.chunk.js.map