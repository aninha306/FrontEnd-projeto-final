import React, { useEffect } from 'react';
import axios from 'axios';


function Quadros() {
  useEffect(() => {
    axios.get('http://localhost:3000/quadros')
      .try(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])

  return (
    <>
      <h1>Quadros</h1>
    </>
  )
}


export default Quadros;
