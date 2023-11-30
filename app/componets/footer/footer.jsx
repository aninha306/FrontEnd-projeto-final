import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "@/app/componets/footer/footer.module.css";
import { FaGithub,FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { MdOutlineMail } from "react-icons/md";

//funcao responsavel pelo header
//div style.main engloba todos os componentes do footer
//div style.icons armazena os icones
//div style.camihos armazena as rotas de home, sobre nos, contato e cadastro.
function Footer(){

        return(
            <div className={styles.main}>
                <div className={styles.icons}>
                <FaGithub className={styles.icons1} fontSize={30} color={"white"}/>
                    <SiLinktree className={styles.icons1} fontSize={30} color={"white"}/>
                    <FaInstagram className={styles.icons1} fontSize={30} color={"white"}/>
                    
                </div>
                <div className={styles.camihos}>
                    <Link className={styles.links} href={"/"}>HOME</Link>
                    <Link className={styles.links} href={"/"}>SOBRE NÓS</Link>
                    <Link className={styles.links} href={"/"}>CONTATO</Link>
                    <Link className={styles.links} href={"/"}>CADASTRO</Link> 
                </div>
                <div className={styles.todosdireitosreservados}>
                    <p className={styles.titulocopyright}>COPYRIGHT ©</p>
                </div>
            </div>
        )
    } 

    export default Footer;
    //exportar funçao