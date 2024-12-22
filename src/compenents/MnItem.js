import React from "react";
import './menu.css';

function MnItem({ image, name, price }) {

  const ouvrirNouvellePage = () => {
    window.open('/paiement','_blank'); // Remplacez l'URL par celle que vous souhaitez ouvrir
  };
  return (
    <div className="menuItem">
     <img  src={image} // Remplacez par l'URL de votre image
      alt="Example"/>
      <h2> {name} </h2>
      
      <button type="button"  style={{ cursor: 'pointer',textAlign:'center'}} onClick={ouvrirNouvellePage}> {price} MAD </button>
    
     
    </div>

  );}export default MnItem;