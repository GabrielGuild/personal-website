import './App.css';
// import {useState} from "react";
import {
  NavLink,
   Route,
   Routes,
  } from "react-router-dom";

  import {
    Home,
    About,
    Experience,
    Contact
} from "./index.js";

function App() {
  return (
    <main>
      <h1>Hello</h1>
      <div className="navbar">

      <ul>
        <NavLink exact to='/home' >
          Home
        </NavLink>
        <NavLink exact to='/about'>
          about me 
        </NavLink>
        <NavLink exact to='/experience'>
        Experience 
        </NavLink>
        <NavLink exact to='/contact'>
          Contact
        </NavLink>
      </ul>
      </div>
      <Routes>
       <Route path="/Home" element={<Home/>} />
       <Route path="/About" element={<About/>} />
       <Route path="/Experience" element={<Experience/>} />
       <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </main>
  );
};

export default App;
