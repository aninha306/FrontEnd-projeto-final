import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './Contato.module.css';
import Header from "../componets/header/header";
import Footer from "../componets/footer/footer";

function Contato() {
    return (

        <div className={styles.contato}>

    <Header></Header>

            <div>

                <h1 className={styles.titulo}>Entre em Contato Conosco! </h1>
                
                <input className={styles.nome}  href={'/'} placeholder="Nome"/>
                <input className={styles.email} href={'/'} placeholder="Email"/>

            </div>

            <div className={styles.contato}>
                <button className={styles.enviarMsg}>Enviar</button>
            </div>

            <Footer></Footer>

        </div>
    )
}
export default Contato;
