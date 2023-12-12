import React from "react";
import styles from "./loading.module.css"

const arteLoading = () =>{
    const [loadingArte, setLoadingArte] = useState(true);
  
    useEffect(() =>{
  
      const chamadaFalsa = () =>{
  
        setTimeout(() =>{
          setLoadingArte(false);
        }, 2000)
      };
      chamadaFalsa();
    }, []);
  };

function loadingArte(){
    return(
        <>
        <div className={styles.maingifLoading}>
        <img className={styles.gifLoading} src="/loadingArte.gif" alt="Loading gif"/>
    </div>
        </>
    )
}
export default loadingArte;