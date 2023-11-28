import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

function Contato() {
    return (

        
        <div className={styles.contato}>

    <Header></Header>

            <div>
                
                <input className={styles.nome}  href={'/'} placeholder="Nome">Nome</input>
                <input className={styles.email} href={'/'} placeholder="Email"><Email></Email></input>

            </div>

            <div className={styles.contato}>
                <button className={styles.enviarMsg}></button>
            </div>

            <Footer></Footer>

        </div>
    )
}
export default Contato;
