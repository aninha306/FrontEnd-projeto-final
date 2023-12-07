"use client"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import style from './pageIndex.module.css'
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {

  const [artes, setArtes] = useState([]);

  useEffect(() => {
    async function BuscarObra() {
      try {
        const resposta = await axios.get("/api/artes");
        setArtes(resposta.data.artes);
      } catch (error) {
        console.error("ERRO AO ENVIAR DADOS", error);
      }
    }
    BuscarObra();
  }, []);
  console.log(artes)
  return (
    <>
      <Header></Header>
      <div className={style.principal}>
        <div className={style.poster}>

          <>
            <h1 className={style.titulo}>Arte Além da Tela</h1>
          </>

          <img src="https://photoarts.com.br/magazine/wp-content/uploads/sites/2/2021/07/artur-matosyan-4YWUMaftmag-unsplash-1-1.jpg" width={1250} height={600} alt="" />
        </div>

        <div className={style.infos}>

          <p>
            A definição de arte é uma questão complexa e muitas vezes subjetiva, pois a arte abrange uma ampla gama de formas de expressão criativa e manifestações culturais. Ao longo da história, diferentes culturas e períodos de tempo têm apresentado concepções distintas sobre o que constitui a arte. No entanto, algumas características e princípios fundamentais podem ser explorados para compreender melhor essa manifestação humana.</p>
          <p>A arte, em sua essência, é uma forma de comunicação e expressão. Ela transcende a linguagem verbal, permitindo que os artistas transmitam ideias, emoções, conceitos e experiências através de diferentes meios. Pode ser visual, como pintura e escultura; auditiva, como música e poesia; cênica, como teatro e dança; ou uma combinação de várias formas, como no cinema.</p>
        </div>

        {
          artes.map(arte => (
            <div key={arte.id}>

              <div className={style.main} >
                <div className={style.qudrosDiv}>
                  <img src={arte.url} className={style.imgsQuadrosFixos} />
                  <p className={style.direitos}>As imagens podem ter direitos autorais.</p>
                  <div className={style.testoDiv}>
                    <p >{arte.nomeObra}</p>
                    <p> {arte.artista}</p>
                    <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
                    <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
                    <button className={style.button}>Saiba Mais...</button>
                  </div>

                </div>
              </div>
            </div>
          ))
        }
      </div>
      <Footer></Footer>

    </>
  )
} export default Home;
