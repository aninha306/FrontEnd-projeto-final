import styles from "./popup.module.css"
import React from "react"

const Popup = ({message, type}) =>{
    var color = (type == "sucesso") ? styles.sucesso : styles.erro;
    var maindiv = styles.maindiv + ' ' + color ;

    return(
        <div className={styles.maindiv}>
            <p>message</p>
        </div>
    );
};

export default Popup;