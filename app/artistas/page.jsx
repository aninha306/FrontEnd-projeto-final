"use client"
import { RiDeleteBinLine } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import style from "../test.module.css"
import Header from "../components/header/header";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/footer/footer";



function sobreNos() {

  const [artes, setArtes] = useState([]);

  useEffect(() => {
    async function BuscarObra() {
      try {
        const resposta = await axios.get("/api/artistas");
        setArtes(resposta.data);
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
      <div className={style.title}>
        <h1>Sobre Nós.</h1>
      </div>

      <div className={style.main}>
        {
          artes.map(artista => (
            <div className={style.blocos}>
              <div className={style.infos}>
                <p className={style.texto}>{artista.nome}</p>
                <p className={style.texto}>{artista.idade}</p>
                <img src="{}" alt="" />
                <button className={style.button}><RiDeleteBinLine color={"white"} fontSize={25} /></button>
                <button className={style.button}><FaEdit color={"white"} fontSize={25} /></button>
              </div>
            </div>
          ))
        } </div>

      <Footer></Footer>
    </>
  )
} export default sobreNos;
