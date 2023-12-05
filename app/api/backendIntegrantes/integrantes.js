import React, { useEffect } from 'react';
import axios from 'axios';
import React, { useEffect } from 'react';
import axios from 'axios';


function Integrantes() {
  useEffect(() => {
    axios.get('http://localhost:5000/artistas')
      .then(response => {
        console.log(response.data);
        // Faça algo com os dados recebidos da API
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    </>
  );
}

export default Integrantes;
