import React, { useState } from 'react';

const ErrorPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    // Limpar mensagem de erro ao fechar o popup
    setError('');
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    // Limpar mensagem de erro ao começar a digitar
    setError('');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Limpar mensagem de erro ao começar a digitar
    setError('');
  };

  const handleSubmit = () => {
    // Verificar se os campos estão vazios
    if (name === '' || email === '' || numero === '') {
      setError('Por favor, preencha todos os campos.');
    } else {
      // Faça algo com os valores de 'name' e 'email', por exemplo, envie para o servidor
      console.log('Nome:', name);
      console.log('E-mail:', email);

      // Feche o popup após o envio
      closePopup();
    }
  };

  return (
    <div>
      <button onClick={openPopup}>Abrir Popup</button>

      {isOpen && (
        <div className="popup-overlay">
          <div className="popup">
            
            <p>Insira suas informações:</p>
            
            <label>
              Nome:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
            
            <label>
              E-mail:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>

            <label>
              Numero:
              <input type="email" value={email} onChange={handleEmailChange} />
            </label>
            
            {error && <p className="error-message">{error}</p>}
            <button onClick={handleSubmit}>Enviar</button>
            <button onClick={closePopup}>Fechar Popup</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPopup;

