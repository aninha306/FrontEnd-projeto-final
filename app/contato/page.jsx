"use client"
import React, { useState } from "react";
import styles from './Contato.module.css';
import Header from "../componets/header/header";
import Footer from "../componets/footer/footer";

function Contato() {
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    const handleSubmit = () => {
        // Lógica para enviar a mensagem

        // Se a mensagem for enviada com sucesso, mostrar pop-up de sucesso
        // Se houver um erro no envio, mostrar pop-up de erro
        const mensagemEnviadaComSucesso = true; // Substitua isso pela lógica real

        if (mensagemEnviadaComSucesso) {
            setShowSuccess(true);
        } else {
            setShowError(true);
        }
    };

    return (
        <div className={styles.contato}>
            <Header></Header>
            <div className={styles.card}>
                <div>
                    <h1 className={styles.titulo}>Entre em Contato Conosco! </h1>
                    <div className={styles.inputs}>
                        <input className={styles.nome} href={'/'} placeholder="Nome"/>
                        <input className={styles.email} href={'/'} placeholder="Email"/>
                    </div>
                </div>
                <div className={styles.contato}>
                    <button className={styles.enviarMsg} onClick={handleSubmit}>Enviar</button>
                </div>
            </div>

            <Footer></Footer>

            {showSuccess && (
                <div className={styles.successPopup}>
                    <p>Mensagem enviada com sucesso!</p>
                    <button onClick={() => setShowSuccess(false)}>Fechar</button>
                </div>
            )}

            {showError && (
                <div className={styles.errorPopup}>
                    <p>Ocorreu um erro ao enviar a mensagem.</p>
                    <button onClick={() => setShowError(false)}>Fechar</button>
                </div>
            )}
        </div>
    );
}
export default Contato;