import React from 'react'
import { Link } from 'react-router-dom';
import backgroundpizza from './backrond1.png'
import '../compenents/Home.css';

function Home() {
  
  return(
    <div className='home' style={{backgroundImage:`url(${backgroundpizza})`}}>
        <div className='headerContainer'  >
       
      <h1>OCEAN SNACK</h1>
      <p>The Best Snack Of Morocco</p>
      <Link to='/menu'><button>order now</button></Link>
        </div>
    </div>
  );
}

export default Home
