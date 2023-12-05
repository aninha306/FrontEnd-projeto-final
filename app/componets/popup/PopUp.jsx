"use client"
import React, { useState } from 'react';
import PopUp from '../popup/popup.module.css';


const App = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');

  function handleShowPopup(message, type, time) {
    setPopupMessage(message)
    setPopupType(type)
    setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, time)
  }

  return (
    <div>
     
    <button onClick={() => handleShowPopup('Erro ao processar!', 'error', 4000)}></button>
      
    <button onClick={() => handleShowPopup('Mensagem Enviada!', 'success', 6000)}></button>

      {showPopup && (
        <PopUp
          message={popupMessage}
          type={popupType}
        />
      )}
    </div>
  );
};

export default App;