import React from 'react'
import { MenuList } from './MenuList';
import MnItem from './MnItem';
import { MenuList2 } from './MenuList';
import { MenuList3 } from './MenuList';
import './menu.css'
function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <h3 style={{fontSize:'30px',fontFamily:'cursive'}}> PIZZA </h3>
      <div className='menuList'>
        {MenuList.map((MenuItem,key)=>
        {return (
         <MnItem key={key} image={MenuItem.image} name={MenuItem.name} price={MenuItem.price}   />
        )}
        )}<td/>
     <h3 style={{fontSize:'30px',fontFamily:'cursive'}}>TACOS</h3><td/>
         {MenuList2.map((MenuItem,key)=>
        {return (
         <MnItem key={key} image={MenuItem.image} name={MenuItem.name} price={MenuItem.price}   />
        )}
        )}<td/>
          <h3 style={{fontSize:'30px',fontFamily:'cursive'}}>BURGER</h3><td/>
         {MenuList3.map((MenuItem,key)=>
        {return (
         <MnItem key={key} image={MenuItem.image} name={MenuItem.name} price={MenuItem.price}   />
        )}
        )}
      </div>
    </div>
  )
}

export default Menu