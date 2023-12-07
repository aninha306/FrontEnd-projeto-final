import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from './header.module.css';

function Header() {
    return (
        <div className={styles.header}>

            <div className={styles.img}>
                <img src={"/Arte.jpg"} width={89} height={89} className={styles.imagem}/>
            </div>

            <div className={styles.rotas}>
                <Link className={styles.links} href={'/'}>Home</Link>
                <Link className={styles.links} href={'/'}>Sobre nós</Link>
                <Link className={styles.links} href={'/cadastro2'}>Quadros</Link>
                <Link className={styles.links} href={'/contato'}>Contato</Link>
            </div>

            <div className={styles.cadastro}>
                <button href={'/cadastro2/register'} className={styles.butaocadastro}>Cadastro</button>
            </div>

        </div>
    )
}
export default Header;