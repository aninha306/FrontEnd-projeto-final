"use client"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import style from './pageIndex.module.css'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import React, { useEffect, useState } from "react";
import axios from "axios";


import ArteLoading from "./components/loading/loading";


function Home() {

  const [artes, setArtes] = useState([]);
  const [filtroArte, setFiltroArte] = useState('')
  const [deleteArte, setDeleteArte] = useState(1)

  useEffect(() => {
    async function BuscarObra() {
      try {
        let queryParams = '';
        if(filtroArte){
          queryParams += `tipo=${filtroArte}`
        }
        const resposta = await axios.get(`/api/artes?${queryParams}`);
        setArtes(resposta.data.artes);
      } catch (error) {
        console.error("ERRO AO ENVIAR DADOS", error);
      }
    }
    BuscarObra();
  }, [filtroArte, deleteArte]);

  const deletarArte = async (id) => {
    await axios.delete(`/api/artes/${id}`)
    //alert("APAGOOOOOOOOOOOOOOOOOOOOU");
    setDeleteArte(deleteArte + 1)
  }
  
  return (
    <>
      <Header />
      <div className={style.principal}>
        <div className={style.poster}>

          <>
            <h1 className={style.titulo}>Arte Além da Tela</h1>
          </>

          <img src="https://photoarts.com.br/magazine/wp-content/uploads/sites/2/2021/07/artur-matosyan-4YWUMaftmag-unsplash-1-1.jpg" width={1250} height={600} alt="" />
        </div>
    
        <div className={style.infos}>
          <p className={style.textoInfo}>
            A definição de arte é uma questão complexa e muitas vezes subjetiva, pois a arte abrange uma ampla gama de formas de expressão criativa e manifestações culturais. Ao longo da história, diferentes culturas e períodos de tempo têm apresentado concepções distintas sobre o que constitui a arte. No entanto, algumas características e princípios fundamentais podem ser explorados para compreender melhor essa manifestação humana.</p>
          <p className={style.textoInfo}>A arte, em sua essência, é uma forma de comunicação e expressão. Ela transcende a linguagem verbal, permitindo que os artistas transmitam ideias, emoções, conceitos e experiências através de diferentes meios. Pode ser visual, como pintura e escultura; auditiva, como música e poesia; cênica, como teatro e dança; ou uma combinação de várias formas, como no cinema.</p>
        </div>

        <div>
          <select value={filtroArte} onChange={(e) => setFiltroArte(e.target.value)}className={style.filtro}>
            <option>Mostrar Todas as Obras</option>
            <option value="Óleo sobre tela">Óleo sobre tela</option>
            <option value="Pintura histórica">Pintura histórica</option>
            <option value="Alegoria">Alegoria</option>
            <option value="Tinta a óleo ">Tinta a óleo </option>
            <option value="Barroco">Barroco</option>
            <option value="Modernismo no Brasil">Modernismo no Brasil </option>
            <option value="Aquarela">Aquarela</option>
            <option value="Guache">Guache</option>
            <option value="Acrílica">Acrílica</option>
            <option value="Afresco">Afresco</option>
            <option value="Mural">Mural</option>
            <option value="Têmpera">Têmpera</option>
          </select>
        </div>

        {
          artes ? (
          artes.map(arte => (
            <div key={arte.id}>
              <div className={style.main} >

                <div className={style.qudrosDiv}>
                  <img src={arte.url} className={style.imgsQuadrosFixos} />
                  <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
                  <div className={style.testoDiv}>
                    <p >{arte.nomeObra}</p>
                    <p> {arte.artista}</p>
                    <p>{arte.tipo}</p>
                    {/* <button className={style.button} onClick={editarArtes}><FaEdit color={"white"} fontSize={25} /></button> */}
                    <button className={style.button} onClick={() => deletarArte(arte.id)}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
                    <button className={style.button} 
                    // onClick={}
                    >Ver mais informações</button>

                <div className={style.alinhamento}>
                  <div className={style.qudrosDiv}>
                    <img src={arte.url} className={style.imgsQuadrosFixos} />
                    <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
                    <div className={style.testoDiv}>
                      <p className={style.texto}> {arte.nomeObra}</p>
                      <p className={style.texto}>  {arte.artista}</p>
                      <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
                      <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
                      <button className={style.button}>Saiba Mais...</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))
          )
          : (
            <ArteLoading />
          )
        }
      </div>         

      <Footer></Footer>
    </>
  ) 
}; export default Home;
