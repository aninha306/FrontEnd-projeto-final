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
            className={styles.inp}
            value={state}
            type={text}
            name={nome}
            placeholder={texto}
            onChange={(e) => setState(e.target.value)}
    />
            
        </div>

        <div className={styles.divicones}>
           
        </div>
    </div>
  )
}

export default contato;