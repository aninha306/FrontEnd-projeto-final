import React from 'react'
import styles from "./contato.module.css"
import { text } from 'express';

function contato() {
  return (
    <div className={styles.principal}>
        <div className={styles.titulo}>
            <h1> Contato </h1>
        </div>

        <div className={styles.imagem}>
            <img src="/contato.png" alt="Imagem de contato" />
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
           
        </div>
    </div>
  )
}

export default contato;