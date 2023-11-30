import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

function Header() {
    return (
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