import './App.css';
import {useState} from "react";
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
  const [isActive, setActive] = useState('nav-menu');
  const [hamburger, setHamburger] = useState('hamburger');
  
  const toggleHamburger = () => {
          
  
    if(hamburger === 'hamburger' ){
    setHamburger('hamburger-active');
  
    console.log(isActive)
    }
    else
    setHamburger('hamburger');
    
    if(isActive === 'nav-menu'){
        setActive('nav-menuActive');
  
    }else{
        setActive('nav-menu');
  
    }
  };
  const closeHamburger= () =>{
    if(hamburger === 'hamburger'){
        return null
    }
    setHamburger('hamburger');
    setActive('nav-menu');
  
  }


  return (
    <main onClick={closeHamburger}>
      <div className="navbar">
        <h4>Gabriel Guild</h4>
      <ul className={isActive}>
        <NavLink exact to='/home' className='navlink' activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to='/about' className='navlink' activeClassName="active">
          About 
        </NavLink>
        <NavLink exact to='/experience' className='navlink' activeClassName="active">
        Experience 
        </NavLink>
        <NavLink exact to='/contact' className='navlink' activeClassName="active">
          Contact
        </NavLink>
      </ul>
      <div className={hamburger} onClick={toggleHamburger}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>
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
