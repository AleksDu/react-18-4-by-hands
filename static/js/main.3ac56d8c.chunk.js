(this["webpackJsonpreact-18-4-by-hands"]=this["webpackJsonpreact-18-4-by-hands"]||[]).push([[0],{12:function(e){e.exports=JSON.parse('[{"label":"Tab 1","content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters."},{"label":"Tab 2","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries."},{"label":"Tab 3","content":"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."}]')},27:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(8),l=n.n(a),c=n(6),i=n(13),s=n(2),u=n(3),d=n(5),h=n(4),b=n(10),m=n.n(b),p=(n(27),n(0)),f=function(e){var t=e.children;return Object(p.jsx)("div",{className:"Container",children:t})},g=n(11),j=n.n(g),v=(n(29),n(14)),O=(n(30),["children","onClick"]),y=function(e){var t=e.children,n=e.onClick,o=Object(v.a)(e,O);return Object(p.jsx)("button",Object(c.a)(Object(c.a)({type:"button",className:"IconButton",onClick:n},o),{},{children:t}))};y.defaultProps={onClick:function(){return null},children:null};var x,w,C=y,k=["title","titleId"];function T(){return T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},T.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function S(e,t){var n=e.title,r=e.titleId,a=E(e,k);return o.createElement("svg",T({width:"24px",height:"24px",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,x||(x=o.createElement("path",{d:"M8 11C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H8Z",fill:"black"})),w||(w=o.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z",fill:"black"})))}var I,M,_,D,L,N,P,A,B,J,R,F,U,K,V,W,Z=o.forwardRef(S),z=(n.p,function(e){var t=e.text,n=e.completed,o=e.onToggleCompleted,r=e.onDelete;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("input",{type:"checkbox",className:"TodoList__checkbox",checked:n,onChange:o}),Object(p.jsx)("p",{className:"TodoList__text",children:t}),Object(p.jsx)(C,{children:Object(p.jsx)(Z,{width:"40",heihgt:"40",onClick:r})})]})}),H=function(e){var t=e.todos,n=e.onDeleteTodo,o=e.onToggleCompleted;return Object(p.jsx)("ul",{className:"TodoList",children:t.map((function(e){var t=e.id,r=e.text,a=e.completed;return Object(p.jsx)("li",{className:j()("TodoList__item",{"TodoList__item--completed":a}),children:Object(p.jsx)(z,{text:r,completed:a,onToggleCompleted:function(){return o(t)},onDelete:function(){return n(t)}})},t)}))})},q=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={message:""},e.handleChange=function(t){e.setState({message:t.currentTarget.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.message),e.setState({message:""})},e}return Object(u.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("form",{className:"TodoEditor",onSubmit:this.handleSubmit,children:[Object(p.jsx)("textarea",{className:"TodoEditor__textarea",value:this.state.message,onChange:this.handleChange}),Object(p.jsx)("button",{type:"submit",className:"TodoEditor__button",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}}]),n}(o.Component),X=q,G=function(e){var t=e.value,n=e.onChange;return Object(p.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440 \u043f\u043e \u0438\u043c\u0435\u043d\u0438",Object(p.jsx)("input",{type:"text",value:t,onChange:n})]})},Q=(n(31),document.querySelector("#modal-root")),Y=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&(console.log("\u041d\u0430\u0436\u0430\u043b\u0438 ESC, \u043d\u0443\u0436\u043d\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u043a\u0443"),e.props.onClose())},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("Modal componentDidMount"),window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){console.log("Modal componentWillUnmount"),window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(a.createPortal)(Object(p.jsx)("div",{className:"Modal__backdrop",onClick:this.handleBackdropClick,children:Object(p.jsx)("div",{className:"Modal__content",children:this.props.children})}),Q)}}]),n}(o.Component),$=(n(32),function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={time:(new Date).toLocaleTimeString()},e.intervalId=null,e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;console.log("setInterval"),this.intervalId=setInterval((function(){return e.setState({time:(new Date).toLocaleTimeString()})}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalId)}},{key:"render",value:function(){return Object(p.jsx)("div",{className:"Clock__face",children:this.state.time})}}]),n}(o.Component)),ee=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={activeTabIdx:0},e.setActiveTabIdx=function(t){e.setState({activeTabIdx:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;console.log("Re-render @ ".concat(Date.now()));var t=this.state.activeTabIdx,n=this.props.items,o=n[t];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{children:n.map((function(t,n){return Object(p.jsx)("button",{type:"button",onClick:function(){return e.setActiveTabIdx(n)},children:t.label},t.label)}))}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h2",{children:o.label}),Object(p.jsx)("p",{children:o.content})]})]})}}]),n}(o.PureComponent),te=n(12),ne=["title","titleId"];function oe(){return oe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},oe.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ae(e,t){var n=e.title,r=e.titleId,a=re(e,ne);return o.createElement("svg",oe({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"416.979px",height:"416.979px",viewBox:"0 0 416.979 416.979",style:{enableBackground:"new 0 0 416.979 416.979"},xmlSpace:"preserve",ref:t,"aria-labelledby":r},a),n?o.createElement("title",{id:r},n):null,I||(I=o.createElement("g",null,o.createElement("path",{d:"M208.489,0C93.343,0,0,93.343,0,208.489c0,115.146,93.343,208.489,208.489,208.489s208.49-93.344,208.49-208.489 C416.979,93.343,323.635,0,208.489,0z M329.006,235.1c0,6.299-5.105,11.404-11.404,11.404h-71.099v71.1 c0,6.298-5.106,11.404-11.404,11.404h-53.22c-6.298,0-11.404-5.106-11.404-11.404v-71.1h-71.1c-6.298,0-11.404-5.106-11.404-11.404 v-53.22c0-6.298,5.106-11.404,11.404-11.404h71.1v-71.1c0-6.298,5.105-11.404,11.404-11.404h53.22 c6.298,0,11.404,5.106,11.404,11.404v71.1h71.099c6.299,0,11.404,5.106,11.404,11.404V235.1L329.006,235.1z"}))),M||(M=o.createElement("g",null)),_||(_=o.createElement("g",null)),D||(D=o.createElement("g",null)),L||(L=o.createElement("g",null)),N||(N=o.createElement("g",null)),P||(P=o.createElement("g",null)),A||(A=o.createElement("g",null)),B||(B=o.createElement("g",null)),J||(J=o.createElement("g",null)),R||(R=o.createElement("g",null)),F||(F=o.createElement("g",null)),U||(U=o.createElement("g",null)),K||(K=o.createElement("g",null)),V||(V=o.createElement("g",null)),W||(W=o.createElement("g",null)))}var le=o.forwardRef(ae),ce=(n.p,function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),a=0;a<o;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],filter:"",showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.addTodo=function(t){var n={id:m.a.generate(),text:t,completed:!1};e.setState((function(e){var t=e.todos;return{todos:[n].concat(Object(i.a)(t))}}))},e.deleteTodo=function(t){e.setState((function(e){return{todos:e.todos.filter((function(e){return e.id!==t}))}}))},e.toggleCompleted=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed}):e}))}}))},e.changeFilter=function(t){e.setState({filter:t.currentTarget.value})},e.getVisibleTodos=function(){var t=e.state,n=t.filter,o=t.todos,r=n.toLowerCase();return o.filter((function(e){return e.text.toLowerCase().includes(r)}))},e.calculateCompletedTodos=function(){return e.state.todos.reduce((function(e,t){return t.completed?e+1:e}),0)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){console.log("App componentDidMount");var e=localStorage.getItem("todos"),t=JSON.parse(e);console.log(t),t&&this.setState({todos:t})}},{key:"componentDidUpdate",value:function(e,t){var n=this.state.todos,o=t.todos;n!==o&&(console.log("\u041e\u0431\u043d\u043e\u0432\u0438\u043b\u043e\u0441\u044c \u043f\u043e\u043b\u0435 todos, \u0437\u0430\u043f\u0438\u0441\u044b\u0432\u0430\u044e todos \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435"),localStorage.setItem("todos",JSON.stringify(n))),n.length>o.length&&0!==o.length&&this.toggleModal()}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.filter,o=e.showModal,r=t.length,a=this.calculateCompletedTodos(),l=this.getVisibleTodos();return Object(p.jsxs)(f,{children:[Object(p.jsx)(C,{onClick:this.toggleModal,"aria-label":"\u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u043e\u0434\u043e",children:Object(p.jsx)(le,{width:"40",height:"40"})}),Object(p.jsx)(ee,{items:te}),Object(p.jsx)($,{}),o&&Object(p.jsx)(Y,{onClose:this.toggleModal,children:Object(p.jsx)(X,{onSubmit:this.addTodo})}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("p",{children:["\u0412\u0441\u0435\u0433\u043e \u0437\u0430\u043c\u0435\u0442\u043e\u043a: ",r]}),Object(p.jsxs)("p",{children:["\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d\u043e: ",a]})]}),Object(p.jsx)(G,{value:n,onChange:this.changeFilter}),Object(p.jsx)(H,{todos:l,onDeleteTodo:this.deleteTodo,onToggleCompleted:this.toggleCompleted})]})}}]),n}(o.Component)),ie=ce;n(33),n(34);l.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(ie,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.3ac56d8c.chunk.js.map