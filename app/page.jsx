"use client"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import Header from "./components/header/header";
import Footer from './components/footer/footer';
import style from './pageIndex.module.css'
import { useEffect, useState } from "react";
import axios from "axios"; // Add missing import

function Home() {
  const [obras, setObras] = useState([]);
  const [dadosApi, setdadosApi] = useState("")


  useEffect(() => {
    async function ArtesFetch(){
      try{
        const response = await axios.get("/api/backendIntegrantes");
        setObras(response.data.obras);
        setdadosApi(response.data.obras);
      }catch(error){
        console.error(error);
      
      }}
      ArtesFetch();
  },[])

  return (
    <>
      <Header></Header>

      <div className={style.poster}>
        <img src="https://photoarts.com.br/magazine/wp-content/uploads/sites/2/2021/07/artur-matosyan-4YWUMaftmag-unsplash-1-1.jpg" alt="" />
      </div>

      <div className={style.infos}>

        <p>
          A definição de arte é uma questão complexa e muitas vezes subjetiva, pois a arte abrange uma ampla gama de formas de expressão criativa e manifestações culturais. Ao longo da história, diferentes culturas e períodos de tempo têm apresentado concepções distintas sobre o que constitui a arte. No entanto, algumas características e princípios fundamentais podem ser explorados para compreender melhor essa manifestação humana.</p>
        <p>A arte, em sua essência, é uma forma de comunicação e expressão. Ela transcende a linguagem verbal, permitindo que os artistas transmitam ideias, emoções, conceitos e experiências através de diferentes meios. Pode ser visual, como pintura e escultura; auditiva, como música e poesia; cênica, como teatro e dança; ou uma combinação de várias formas, como no cinema.</p>
      </div>

      <div className={style.titulo}>
        <h3>Conheça algumas obras...</h3>
      </div>

      <div className={style.main} >
        {obras.map(obras => (
          <div className={style.qudrosDiv} key={obras.id}>
            <img className={style.imgsobrassFixos} src={obras.url} alt="" />
            <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
            <div className={style.testoDiv}>
              <h2 className={style.textoDiv}>{obras.nomeObra}</h2>
              <h2>{obras.artista}</h2>
              <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
              <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
              <button className={style.button}>Saiba Mais...</button>
            </div>
          </div>
        ))}
      </div>

      <Footer></Footer>
    </>
  )
}

export default Home;

