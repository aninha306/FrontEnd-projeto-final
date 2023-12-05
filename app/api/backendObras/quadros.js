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
<div className={style.qudrosDiv}>
          <img className={style.url} src="https://www.melhoresdestinos.com.br/wp-content/uploads/2021/02/nascimento-de-venus-artes.jpg" alt="" />
          <p className={style.direitos}>  As imagens podem ter direitos autorais.</p>
          <div className={style.nomeObra}>
            <h2>O Nascimento de Vênus </h2>
            <h2 className={style.artista}> Sandro Botticelli</h2>
            <button className={style.button}><RiDeleteBinLine color={"white"} /></button>
            <button className={style.button}><FaEdit color={"white"} /></button>
            <button className={style.button} >Saiba Mais...</button>
          </div>
        </div>
</>
  )
}

export default Quadros;
