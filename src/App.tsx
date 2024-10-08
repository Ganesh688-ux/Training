import React, { useState } from 'react';
import './App.css';
import Header from './component1/header/Header';
function App() {
//   let users=[{
//     Name:"Ganesh",
//     mNumber:9369759855,
//     Gender:"male",
//     newMember:true,
//     image: 'https://img.icons8.com/?size=100&id=98957&format=png&color=000000'
//   },
// {
//     Name:"Mahesh",
//     mNumber:45465265656,
//     Gender:"male",
//     newMember:false,
//     image:'https://img.icons8.com/?size=100&id=98957&format=png&color=000000'

// },
// {
//   Name:"Pooja",
//   mNumber:4565656556,
//   Gender:"female",
//   newMember:true,
//   image:'https://img.icons8.com/?size=100&id=98957&format=png&color=000000'
// }
// ]
//   return (
//     <div className="App" key="i">
//       <h1>User-Profile</h1>
//       {users.map((users,i)=>
//       <div className="users">
//         <h3>Name:{users.Name}</h3>
//         <h3>mNumber:{users.mNumber}</h3>
//         <h3>Gender:{users.Gender}</h3>
//         <h3>newMember:{users.newMember}</h3>
//         <img src='image:{users.image}' alt="" />
//       </div>
//       )}
//       </div>
//   );
// }
const [message, setMessage] = useState('');
const handleMessage = (msg: string) => {
  setMessage(msg);
}
return (
  <div>
    <Header onMessage={handleMessage}/>
    <p>Message From Child :{message}</p>
  </div>
);
};
export default App;