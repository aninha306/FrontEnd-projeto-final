import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';
import Contato from "../../contato/page";

export function Header() {
    return (
        <div className={styles.header}>

            <div className={styles.img}>
                <Image src={"/logoArteAlémdaTela.jpeg"} width={150} height={150} className={styles.imagem}/>
            </div>

            <div>
                <Link className={styles.links} href={'/'}>Home</Link>
                <Link className={styles.links} href={'/'}>Sobre nós</Link>

                <Link className={styles.links} href={'/contato'} >Contato</Link>
            </div>

            <div className={styles.cadastro}>
                <button className={styles.butaocadastro}>Cadastro</button>
            </div>

        </div>
    )
}
export default Header;