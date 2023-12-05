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

<div className={style.qudrosDiv}>

<img className={style.imgsQuadrosFixos} src="https://m.media-amazon.com/images/I/71xpcgHewaL.__AC_SY300_SX300_QL70_ML2_.jpg" alt="" />
<p className={style.direitos}>As imagens podem ter direitos autorais.</p>
<div className={style.testoDiv}>
  <h2> Noite Estrelada</h2>
  <h2>  van gogh</h2>
   <button className={style.button}><RiDeleteBinLine color={"white"} /></button>
  <button className={style.button}><FaEdit color={"white"} /></button>
  <button className={style.button} >Saiba Mais...</button>

</div>
</div>
            </>
          );

        }

export default Integrantes;
