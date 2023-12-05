import React, { useEffect } from 'react';
import axios from 'axios';

function Quadros() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000');
        console.log(response.data);
        // Faça algo com os dados da API aqui
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
<>
    <h1>Quadros</h1>
</>
  )
}

export default Quadros;
