'use client'
import React from 'react'
import styles from "./contato.module.css"
import Image from 'next/image';
import { text } from 'express';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import Link from 'next/link';
import Footer from '../components/footer/footer';
import Header from '../components/header/header';
import { useState, useEffect } from 'react';

export default function Contato() {
  return (
    <>

    <Header></Header>
    <div className={styles.principal}>
        
    
        <div className={styles.imagem}>
            <img src={'/noiteestrelada.gif'} width={350} height={450} className={styles.img}/>
        </div>

        <div className={styles.maeinputs}>

        <div className={styles.titulo}>
            <h1>  Contato  </h1>
        </div>

        <div className={styles.divinputs}>
            <input 
            type='text'
            className={styles.inp1}
            placeholder='Nome'
            required
           />
           <hr className={styles.hr}></hr>

            <input 
            type='text'
            className={styles.inp1}
            placeholder='Email'
            required
           />
           <hr className={styles.hr}></hr>

            <input 
            type='number'
            className={styles.inp1}
            placeholder='Numero'
            required
           />
           <hr className={styles.hr}></hr>

           <button className={styles.button}> Enviar </button>
          

           <div className={styles.divicones}>

           <Link href='https://github.com' className={styles.icons}>
           <FaGithub color={"white"} fontSize={20} />
           </Link>

           <Link href='https://linktr.ee/ArteAlemdaTela' className={styles.icons}>
            <SiLinktree color={"white"} fontSize={20}/>
            
           </Link>

           <Link href='https://www.instagram.com/' className={styles.icons}>
            <FaInstagram color={"white"} fontSize={20}/>
           </Link>
           </div>
        </div>
            
        </div>

        
        
    </div>
    <Footer></Footer>
    </>
  )
}