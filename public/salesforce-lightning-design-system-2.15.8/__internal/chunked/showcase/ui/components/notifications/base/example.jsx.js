var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/./ui/components/notifications/base/example.jsx.js"]=function(e){function t(t){for(var n,o,s=t[0],r=t[1],c=t[2],m=0,u=[];m<s.length;m++)o=s[m],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);for(d&&d(t);u.length;)u.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,s=1;s<a.length;s++){var r=a[s];0!==i[r]&&(n=!1)}n&&(l.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={105:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,119:0,123:0,125:0,128:0,132:0,134:0,136:0,137:0,138:0,141:0,143:0,146:0,147:0,148:0,151:0,155:0,158:0},l=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assets/scripts/bundle/";var s=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],r=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=r;return l.push([203,0]),a()}({0:function(e,t){e.exports=React},16:function(e,t){e.exports=ReactDOM},203:function(e,t,a){"use strict";a.r(t),a.d(t,"examples",(function(){return u}));var n=a(0),i=a.n(n),l=a(6),o=a(4),s=a(23),r=a(2),c=a.n(r),d=function(e){return i.a.createElement("div",{className:"slds-notification-container"},e.children)},m=function(e){var t=l.d.uniqueId("dialog-body-id-");return i.a.createElement("section",{className:"slds-notification",role:"dialog","aria-labelledby":e.headingID,"aria-describedby":t},i.a.createElement("div",{className:"slds-notification__body",id:t},i.a.createElement("a",{className:"slds-notification__target slds-media",href:"#",onClick:function(e){return e.preventDefault()}},i.a.createElement(s.StandardIcon,{containerClassName:"slds-media__figure",className:"slds-icon_small",assistiveText:!1,symbol:e.type,title:e.type}),i.a.createElement("div",{className:"slds-media__body"},i.a.createElement("h2",{className:"slds-text-heading_small slds-m-bottom_xx-small",id:e.headingID},i.a.createElement("span",{className:"slds-assistive-text"},e.type+" notification:"),e.title),i.a.createElement("p",null,e.description))),i.a.createElement(o.b,{className:"slds-button_icon-container slds-notification__close",symbol:"close",assistiveText:"Dismiss "+e.title+" notification",title:"Dismiss "+e.title+" notification"})),e.footer?i.a.createElement("footer",{className:c()("slds-notification__footer",e.footerClassName)},e.footer):null)};t.default=i.a.createElement("div",{className:"demo-only demo-only_viewport",style:{height:"4.5rem"}},i.a.createElement(d,null,i.a.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"event notification: Tesla - Renewal meeting"),i.a.createElement(m,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"})));var u=[{id:"task-notification",label:"Task Notification",element:i.a.createElement("div",{className:"demo-only demo-only_viewport",style:{height:"4.5rem"}},i.a.createElement(d,null,i.a.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),i.a.createElement(m,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"})))},{id:"stacked-2",label:"Stacked Notifications",element:i.a.createElement("div",{className:"demo-only demo-only_viewport",style:{height:"15rem"}},i.a.createElement(d,null,i.a.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),i.a.createElement(m,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),i.a.createElement(m,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"})))},{id:"stacked-3",label:"Three Stacked Notifications",element:i.a.createElement("div",{className:"demo-only demo-only_viewport",style:{height:"15rem"}},i.a.createElement(d,null,i.a.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),i.a.createElement(m,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),i.a.createElement(m,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"}),i.a.createElement(m,{headingID:"noti66",type:"task",title:"Call Three: Jim Jameson",description:"Task due on Jan 8"})))},{id:"overflow-six",label:"Six Stacked Notifications",element:i.a.createElement("div",{className:"demo-only demo-only_viewport",style:{height:"17rem"}},i.a.createElement(d,null,i.a.createElement("div",{"aria-live":"assertive","aria-atomic":"true",className:"slds-assistive-text"},"task notification: Call Two: Jane Johnson"),i.a.createElement(m,{headingID:"noti77",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),i.a.createElement(m,{headingID:"noti52",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"}),i.a.createElement(m,{headingID:"noti66",type:"task",title:"Call Three: Jim Jameson",description:"Task due on Jan 8"}),i.a.createElement(m,{headingID:"noti48",type:"task",title:"Call Two: Jane Johnson",description:"Task due on Jan 8"}),i.a.createElement(m,{headingID:"noti59",type:"event",title:"Tesla - Renewal meeting",description:"Event at 11:00am on Jan 8"}),i.a.createElement(m,{headingID:"noti86",type:"task",title:"Call Three: Jim Jameson",description:"Task due on Jan 8"})))}]}});