import React from 'react'
import styles from "./contato.module.css"
import Image from 'next/image';
import { text } from 'express';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Link from 'next/link';

function contato() {
  return (
    <div className={styles.principal}>
        <div className={styles.titulo}>
            <h1>  Contato  </h1>
        </div>

        <div className={styles.imagem}>
            <Image src={'/almoçodosbarqueiros.png'} width={400} height={300} className={styles.img}/>
        </div>

        <div className={styles.divinputs}>
            <input 
            type='text'
            className={styles.inp1}
            placeholder='Nome'
           />

            <input 
            type='text'
            className={styles.inp1}
            placeholder='Email'
           />

            <input 
            type='number'
            className={styles.inp1}
            placeholder='Numero'
           />

           <button className={styles.button}> Enviar </button>
            
        </div>

        <div className={styles.divicones}>
           <Link href='/'>
           <FaGithub color={"black"} fontSize={30}/>
           </Link>

           <Link href='/'>
            <SiLinktree color={"black"} fontSize={30}/>
           </Link>

           <Link href='/'>
            <FaInstagram color={"black"} fontSize={30}/>
           </Link>
        </div>
    </div>
  )
}

export default contato;