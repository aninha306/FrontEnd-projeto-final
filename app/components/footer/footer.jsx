import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css"
import { FaGithub,FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

function Footer(){

        return(
            <div className={styles.main}>
                <div className={styles.icons}>
                <Link href={'https://github.com'}><FaGithub className={styles.icons1} fontSize={30} color={"white"}/></Link>
                    <Link href={'https://linktr.ee/ArteAlemdaTela'}><SiLinktree className={styles.icons1} fontSize={30} color={"white"}/></Link>
                    <Link href={'https://www.instagram.com'}><FaInstagram className={styles.icons1} fontSize={30} color={"white"}/></Link>
                    
                </div>
                <div className={styles.caminhos}>
                <Link className={styles.links} href={"/"}>HOME</Link>
                    <Link className={styles.links} href={"/"}>SOBRE NÓS</Link>
                    <Link className={styles.links} href={"/cadastro2"}>QUADROS</Link>
                    <Link className={styles.links} href={"/contato"}>CONTATO</Link>
                    <Link className={styles.links} href={"/cadastro2/register"}>CADASTRO</Link>
                </div>
                <div className={styles.todosdireitosreservados}>
                    <p className={styles.titulocopyright}>COPYRIGHT ©</p>
                </div>
            </div>
        )
    } 

    export default Footer;