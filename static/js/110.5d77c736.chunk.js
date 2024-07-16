"use strict";(self.webpackChunkqbee_web=self.webpackChunkqbee_web||[]).push([[110],{4110:(e,s,n)=>{n.r(s),n.d(s,{default:()=>h});var l=n(5043),a=n(3216),t=n(5475),c=n(5981),i=n(579);const o=()=>(0,i.jsx)(t.N_,{to:"/contact-us",children:(0,i.jsx)("button",{className:"bg-primary text-white px-6 py-2 rounded-full",children:"Contact Us"})}),r=[{name:"Courses",submenu:!0,sublinks:[{Head:"Programming",sublink:[{name:"Java Full Stack Development",link:"/courses/Javafsd"},{name:"Python Full Stack Development",link:"/courses/Pythonfsd"},{name:"Core Java",link:"/courses/Java"},{name:"Core Python",link:"/courses/Python"},{name:"React Development",link:"/courses/React"},{name:"Sql",link:"/courses/Sql"}]},{Head:"Cloud",sublink:[{name:"Amazon Web Services (AWS)",link:"/courses/Aws"},{name:"Microsoft Azure",link:"/courses/Azure"},{name:"DevOps",link:"/courses/Devops"}]},{Head:"SAP (S4/HANA)",sublink:[{name:"Materials Management",link:"/courses/sap_mm"},{name:"Finance & Accounting",link:"/courses/sap_fi"},{name:"Sales & Distribution",link:"/courses/sap_sd"}]}]}],d=()=>{const[e,s]=(0,l.useState)(""),[n,a]=(0,l.useState)("");return(0,i.jsx)(i.Fragment,{children:r.map(((l,c)=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"px-3 text-left md:cursor-pointer group",children:[(0,i.jsxs)("h1",{className:"py-7 flex justify-between items-center md:pr-0 pr-5 group",onClick:()=>{e!==l.name?s(l.name):s(""),a("")},children:[l.name,(0,i.jsx)("span",{className:"text-xl md:hidden inline",children:(0,i.jsx)("ion-icon",{name:"".concat(e===l.name?"chevron-up":"chevron-down")})}),(0,i.jsx)("span",{className:"text-xl md:mt-1 md:ml-2 hidden group-hover:block",children:(0,i.jsx)("ion-icon",{name:"chevron-down"})})]}),l.submenu&&(0,i.jsx)("div",{children:(0,i.jsxs)("div",{className:"absolute top-full hidden group-hover:block hover:block",children:[(0,i.jsx)("div",{className:"py-3",children:(0,i.jsx)("div",{className:"w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"})}),(0,i.jsx)("div",{className:"bg-white p-5 grid grid-cols-1 md:grid-cols-3 gap-10",children:l.sublinks.map(((e,s)=>(0,i.jsxs)("div",{children:[(0,i.jsx)("h1",{className:"text-lg font-semibold",children:e.Head}),e.sublink.map(((e,s)=>(0,i.jsx)("li",{className:"text-sm text-gray-600 my-2.5",children:(0,i.jsx)(t.N_,{to:e.link,className:"hover:text-primary",children:e.name})},s)))]},s)))})]})})]}),(0,i.jsx)("div",{className:"".concat(e===l.name?"block":"hidden"," md:hidden"),children:l.sublinks.map(((e,s)=>(0,i.jsxs)("div",{children:[(0,i.jsxs)("h1",{onClick:()=>n!==e.Head?a(e.Head):a(""),className:"py-4 pl-7 font-semibold flex justify-between items-center",children:[e.Head,(0,i.jsx)("span",{className:"text-xl",children:(0,i.jsx)("ion-icon",{name:"".concat(n===e.Head?"chevron-up":"chevron-down")})})]}),(0,i.jsx)("div",{className:"".concat(n===e.Head?"block":"hidden"),children:e.sublink.map(((e,s)=>(0,i.jsx)("li",{className:"py-3 pl-14",children:(0,i.jsx)(t.N_,{to:e.link,children:e.name})},s)))})]},s)))})]},c)))})};var m=n(1591);const h=()=>{const[e,s]=(0,l.useState)(!1),n=(0,a.zy)(),r=()=>{s(!e)};return(0,i.jsxs)("nav",{className:"fixed top-0 w-full z-50 h-20 bg-gradient-to-r from-green-500 to-blue-500",children:[(0,i.jsxs)(m.m,{children:[(0,i.jsx)("title",{children:"Navbar - Qbee Academy"}),(0,i.jsx)("meta",{name:"description",content:"Navigate through Qbee Academy's various sections including courses, workshops, internships, and placements."})]}),(0,i.jsxs)("div",{className:"w-full flex items-center justify-between px-5",children:[(0,i.jsx)(t.N_,{to:"/",className:"h-20 flex items-center",children:(0,i.jsx)("img",{src:c,alt:"logo",className:"w-48 h-auto"})}),(0,i.jsx)("div",{className:"md:hidden text-3xl",onClick:r,children:e?(0,i.jsx)("ion-icon",{name:"close",style:{color:"white"}}):(0,i.jsx)("ion-icon",{name:"menu",style:{color:"white"}})}),(0,i.jsxs)("ul",{className:"hidden md:flex items-center gap-8 font-poppins",children:[(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/software",className:"py-7 px-3 inline-block ".concat("/software"===n.pathname?"text-blue-500":""),children:"Home"})}),(0,i.jsx)(d,{setOpen:s,handleMenuToggle:r}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/workshop",className:"py-7 px-3 inline-block ".concat("/workshop"===n.pathname?"text-blue-500":""),children:"Workshop"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/internship",className:"py-7 px-3 inline-block ".concat("/internship"===n.pathname?"text-blue-500":""),children:"Internship"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/placement",className:"py-7 px-3 inline-block ".concat("/placement"===n.pathname?"text-blue-500":""),children:"Placement"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/",className:"py-7 px-3 inline-block ".concat("/"===n.pathname?"text-blue-500":""),children:"Little-Champions"})})]}),(0,i.jsx)("div",{className:"hidden md:block",children:(0,i.jsx)(o,{})})]}),(0,i.jsxs)("ul",{className:"\n          md:hidden bg-red-500 fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4\n          duration-500 z-50 ".concat(e?"left-0":"left-[-100%]","\n        "),children:[(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/software",className:"block py-3 px-4 text-white ".concat("/software"===n.pathname?"text-blue-500":""),onClick:r,children:"Home"})}),(0,i.jsx)(d,{setOpen:s,handleMenuToggle:r}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/workshop",className:"block py-3 px-4 text-white ".concat("/workshop"===n.pathname?"text-blue-500":""),onClick:r,children:"Workshop"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/internship",className:"block py-3 px-4 text-white ".concat("/internship"===n.pathname?"text-blue-500":""),onClick:r,children:"Internship"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/placement",className:"block py-3 px-4 text-white ".concat("/placement"===n.pathname?"text-blue-500":""),onClick:r,children:"Placement"})}),(0,i.jsx)("li",{children:(0,i.jsx)(t.N_,{to:"/robotics",className:"block py-3 px-4 text-white ".concat("/"===n.pathname?"text-blue-500":""),onClick:r,children:"Little-Champions"})}),(0,i.jsx)("li",{className:"pt-4",children:(0,i.jsx)(o,{})})]})]})}},5981:(e,s,n)=>{e.exports=n.p+"static/media/Logo.00414e6cad29e8fbee98.webp"}}]);
//# sourceMappingURL=110.5d77c736.chunk.js.map