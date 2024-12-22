import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './logosite-removebg-preview.png';

import  "./style.css"
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar(){
const [openLinks,setOpenLinks] = useState(false)
const toggleNavbar=()=>{setOpenLinks(!openLinks);}
  return(
    <div className='navbar'>
        <div className='leftSide' id={openLinks ? "open" : "close"}>
         <img src={Logo} alt='logo' />
         <div className='hiddenLinks'>
         <Link to="/home">Home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
         </div>
        </div>
        <div className='rightSide'>
            <Link to="/home">Home</Link>
            <Link to="/menu">menu</Link>
            <Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon/>
              </button>
        </div>
        
    </div>
    
    
  )
  
}export default Navbar;
