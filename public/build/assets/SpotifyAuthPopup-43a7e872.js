import{j as t}from"./app-d575b866.js";const i="https://accounts.spotify.com/authorize",n="http://yourapp.com/dashboard",r=["user-library-read","playlist-modify-public","user-read-currently-playing","user-top-read"];function l({onClose:s}){const e=`${i}?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(n)}&scope=${encodeURIComponent(r.join(" "))}&response_type=token&show_dialog=true`,o=()=>{window.location.href=e};return t.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black bg-opacity-50",children:t.jsxs("div",{className:"bg-white p-4 rounded-lg shadow-lg",children:[t.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Spotify Authorization"}),t.jsx("p",{children:"Click the button below to authorize your Spotify account."}),t.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4",onClick:o,children:"Authorize Spotify"})]})})}export{l as default};
