import styles from "./sucesso.module.css"
import React from "react"
import Link from "next/link"
import Header from "../components/header/header"
import Footer from "../components/footer/footer"

export default function Sucesso() {

    return (
        <>
        <Header></Header>
            <div className={styles.main}>

                <div className={styles.agredecimento}>
                    <h1 className={styles.titulo}>Obrigado por entrar em contato</h1>
                </div>
                
                <div className={styles.imagem}>
                    <img  src={"/imagemsucesso.png"} alt="imagem sucesso" width={150} height={150} className={styles.img} />
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}