import React, { useState } from 'react';
import './PaiementPage.css';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AddCardIcon from '@mui/icons-material/AddCard';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import PaymentIcon from '@mui/icons-material/Payment';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PersonIcon from '@mui/icons-material/Person';

function Paiemt() {
  const [nom, setNom] = useState('');
  const [adresse, setAdresse] = useState('');
  const [carte, setCarte] = useState('');
  const [phone, setPhone] = useState('');
  const [exp, setExp] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Vous pouvez ici ajouter une logique réelle pour le paiement.
    // Par exemple, intégrer Stripe, PayPal, ou tout autre service.
 
    alert('Paiement effectué avec succès !');
    
    // Fermer la fenêtre après le paiement
    window.close();
  };

  return (
    <div className="paiement-container">
      <h2>Formulaire de paiement</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="nom"><PersonIcon/>  Nom :</label>
          <input
            type="text"
            placeholder='entrer votre nom complet'
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="adresse"><AddLocationAltIcon />  Adresse :</label>
          <input
            placeholder='entrer votre adresse'
            type="text"
            id="adresse"
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            required
          /> </div>
        <div className="input-group">
       <label htmlFor="phone"><AddIcCallIcon/>  Phone:  </label>  
          <input 
          type="tel "
          id="phone"
          placeholder='entrer votre tél'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required />
        </div>
        <div className="input-group">
        <td/>  <label htmlFor="carte"><AccountBalanceIcon/>  Numéro de carte :</label>
          <input
            type="tel"
            id="carte"
            value={carte}
            placeholder="entrer votre numéro de carte"
            onChange={(e) => setCarte(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="carte"><PaymentIcon />  date d'expiration :</label>
          <input
            type="tel"
            id="carte"
            value={exp}
            placeholder='date dexpiration'
            onChange={(e) => setExp(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="carte"><AddCardIcon/>  code bancaire :</label>
          <input
            type="tel"
            placeholder='code bancaire'
            id="carte"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>
        <button type="submit">Payer</button>
      </form>
    </div>
  );
}

export default Paiemt;
