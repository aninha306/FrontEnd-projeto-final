"use client"
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import style from "././test.module.css"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


function artistas() {


    const [artistas, setArtistas] = useState([]);

    useEffect(() => {
        async function BuscarObra() {
            try {
                const resposta = await axios.get("/api/artistas");
                setArtistas(resposta.data.artistas);
            } catch (error) {
                console.error("ERRO AO ENVIAR DADOS", error);
            }
        }
        BuscarObra();
    }, []);
    console.log(artistas)
    return (
        <>
            <Header></Header>
            {artistas.map(artistas => (
                <div key={artistas.id}>
                    <div className={style.main}>
                      
                      <div className={style.title}>
                        <h1>Sobre Nós.</h1>
                      </div>
                      <div className={style.blocos}>
                        <p className={style.nome}></p>
                        <p className={style.idade}></p>
                        <img src="https://escoladainteligencia.com.br/wp-content/uploads/2018/04/179018-o-que-fazer-quando-se-percebe-uma-dificuldade-de-aprendizagem.jpg" alt="" />
                      </div>



                    </div>
                </div>
            ))
            }

            <Footer></Footer>
        </>
    )

}export default artistas