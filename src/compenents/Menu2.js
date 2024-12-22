import React, { useState } from 'react';

// Composant Modal
function Modal({ isOpen, closeModal, imageInfo }) {
  if (!isOpen) return null; // Si le modal est fermé, ne rien afficher
  
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <label htmlFor='number carte'>Carte Bancaire</label>
        <input name='number carte' placeholder='5534...' type="tel"/>
        <label htmlFor='date carte'>Date Dexpiration </label>
        <input name='date carte' placeholder='Expiration Carte...' type="date" />
        <label htmlFor='code carte'>Carte Bancaire</label>
        <input name='code carte' placeholder='Code banc...' type="text"/>
        <p>{imageInfo}</p>
        <button onClick={closeModal}>Fermer</button>
      </div>
    </div>
  );
}
// Composant principal
function ImageWithInfo() {
  // L'état qui contrôle si le modal est ouvert ou non
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageInfo, setImageInfo] = useState('');

  // Fonction pour ouvrir le modal et afficher des informations spécifiques à l'image
  const handleImageClick = () => {
    setImageInfo('Entrer vous infos de carte bancaire  pour commander');
    setIsModalOpen(true);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Cliquer sur l'image pour voir plus d'infos</h1>
      <img
        src="https://via.placeholder.com/300" // Remplacez par l'URL de votre image
        alt="Example"
        style={{ cursor: 'pointer' }}
        onClick={handleImageClick}
      />
      
      {/* Modal */}
      <Modal isOpen={isModalOpen} closeModal={closeModal} imageInfo={imageInfo} />
    </div>
  );
}

// Styles pour le modal
const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    width: '300px',
    textAlign: 'center',
  },
};

export default ImageWithInfo;