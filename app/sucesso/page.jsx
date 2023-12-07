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

                <div className={styles.divcontainer}>

                    <div className={styles.imagem}>

                    <img  src={"/gifcadastro.gif"} alt="imagem sucesso" width={150} height={150} className={styles.img} />
                    </div>


                    <div className={styles.divTitulo}>
                    <h1 className={styles.titulo}>Arte Além da Tela</h1>

                    <Link href={"/"}><button className={styles.botao}>Voltar para home</button></Link>

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}