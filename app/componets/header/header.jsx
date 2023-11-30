import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

//funcao responsavel pelo header//

function Header() {
    return (
        //div style.header responsavel por armazenar tudo
        //div style.img responsavel pela imagem
        //div style.rotas responsavel pelas rotas de home, sobre nos, detalhes e contato
        // div style.cadastro responsavel por armazenar o botao de cadastrar
        <div className={styles.header}>

            <div className={styles.img}>
                <Image src={"/logoArteAlémdaTela.jpeg"} width={150} height={150} className={styles.imagem}/>
            </div>
      
            <div className={styles.rotas}>
                <Link className={styles.links} href={'/'}>Home</Link>
                <Link className={styles.links} href={'/'}>Sobre nós</Link>
                <Link className={styles.links} href={'/'}>Detralhes</Link>
                <Link className={styles.links} href={'/'}>Contato</Link>
            </div>

            <div className={styles.cadastro}>
                <button className={styles.butaocadastro}>Cadastro</button>
            </div>

        </div>
    )
}
export default Header;
//exportar funçao