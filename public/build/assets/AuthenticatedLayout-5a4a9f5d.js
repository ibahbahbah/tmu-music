import{r as o,j as e,d}from"./app-d575b866.js";import{t as f}from"./transition-1a053668.js";import{l as y}from"./tmusiclogo-591b3884.js";const h=o.createContext(),l=({children:r})=>{const[t,s]=o.useState(!1),a=()=>{s(n=>!n)};return e.jsx(h.Provider,{value:{open:t,setOpen:s,toggleOpen:a},children:e.jsx("div",{className:"relative",children:r})})},b=({children:r})=>{const{open:t,setOpen:s,toggleOpen:a}=o.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:a,children:r}),t&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},p=({align:r="right",width:t="48",contentClasses:s="py-1 bg-white dark:bg-gray-700",children:a})=>{const{open:n,setOpen:c}=o.useContext(h);let g="origin-top";r==="left"?g="origin-top-left left-0":r==="right"&&(g="origin-top-right right-0");let u="";return t==="48"&&(u="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{as:o.Fragment,show:n,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${g} ${u}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:a})})})})},v=({className:r="",children:t,...s})=>e.jsx(d,{...s,className:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out "+r,children:t});l.Trigger=b;l.Content=p;l.Link=v;const i=l;function m({active:r=!1,className:t="",children:s,...a}){return e.jsx(d,{...a,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(r?"border-indigo-400 dark:border-indigo-600 text-gray-900 dark:text-gray-100 focus:border-indigo-700 ":"border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 ")+t,children:s})}function x({active:r=!1,className:t="",children:s,...a}){return e.jsx(d,{...a,className:`w-full flex items-start pl-3 pr-4 py-2 border-l-4 ${r?"border-indigo-400 dark:border-indigo-600 text-indigo-700 dark:text-indigo-300 bg-spotify-gray focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${t}`,children:s})}function w({user:r,header:t,children:s}){const[a,n]=o.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-black",children:[e.jsxs("nav",{className:"bg-spotifygray border-b border-gray-100 dark:border-gray-700",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-24",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(d,{href:"/dashboard",children:e.jsx("img",{src:y,alt:"TMUsic Logo",className:"h-24 md:h-28 lg:h-28"})})}),e.jsxs("div",{className:"lg:text-xl font-bold text-sm hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:[e.jsx(m,{href:route("dashboard"),active:route().current("dashboard"),children:"Post"}),e.jsx(m,{href:route("chatify"),active:route().current("chatify"),children:"Chat"})]})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:e.jsx("div",{className:"ml-3 relative",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150",children:[r.name,e.jsx("svg",{className:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-mr-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>n(c=>!c),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:a?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:a?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(a?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(x,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800 dark:text-gray-200",children:r.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:r.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(x,{href:route("profile.edit"),children:"Profile"}),e.jsx(x,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white dark:bg-gray-800 shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{children:s})]})}export{w as A};
