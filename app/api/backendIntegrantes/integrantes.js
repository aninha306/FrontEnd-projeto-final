import React, { useEffect } from 'react';
import axios from 'axios';

function Integrantes() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/artistas');
        console.log(response.data);
        // Faça algo com os dados recebidos da API
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    </>
  );
}

export default Integrantes;
