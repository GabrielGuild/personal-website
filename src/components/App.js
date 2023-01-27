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
import twitter from '../icons/black twitter logo.png';
import instagram from '../icons/black insta logo.png'
import facebook from '../icons/black facebook icon.png'
import ticktock from '../icons/black tic toc icon.png'



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
        <div className='Name'>Gabriel Guild</div>
      <ul className={isActive}>
        <NavLink exact to='/' className='navlink' activeClassName="active">
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
       <Route path="/" element={<Home/>} />
       <Route path="/About" element={<About/>} />
       <Route path="/Experience" element={<Experience/>} />
       <Route path="/Contact" element={<Contact/>}/>
   </Routes>
   </main>
  );
};

export default App;
