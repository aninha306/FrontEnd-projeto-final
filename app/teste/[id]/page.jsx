"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./editar.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import Header from '@/app/components/header/header';
import Footer from '@/app/components/footer/footer';

export default function Editar({ params }) {
  const [nomeObra, setNomeObra] = useState("");
  const [tipo, setTipo] = useState("");
  const [artista, setArtista] = useState("");
  const [idadeArtista, setIdadeArtista] = useState("");
  const [dataProducao, setDataProducao] = useState("");
  const [url, setUrl] = useState("");
  
  const { id } = params;
  const router = useRouter;
  useEffect(() => {
    async function fetchArts() {
      try {
        const response = await axios.get(`API/artes/${id}`);
        const arte = response.data.artes;
        setNomeObra(arte.nomeObra);
        setTipo(arte.tipo);
        setArtista(arte.artista);
        setIdadeArtista(arte.idadeArtista);
        setDataProducao(arte.dataProducao);
        setUrl(arte.url);
  
      } catch (error) {
        console.error("Erro ao buscar arte:", error);
      }
    }
  
    if (id) {
      fetchArts();
    }
  }, [id]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!id) {
        console.error("ID não está definido");
        return;
      }
  
      await axios.put(`API/artes/${id}`, {
        nomeObra,
        url,
        tipo,
        artista,
        idadeArtista,
        dataProducao,
        
      });
      router.push(`/`);
    } catch (error) {
      console.log("Enviando dados:", { nomeObra, url, artista, dataProducao, tipo, idadeArtista, descricao });
      console.error("Erro ao atualizar arte:", error);
    }
  };
  

  const handleExcluir = async () => {
    try {
      await axios.delete(`/API/artes/${id}`);
      router.push(`/`);
    } catch (error) {
      console.error("Error deleting art:", error);
    }
  };

  return (
    <>
    <Header/>
      <div className={styles.container}>
        <div className={styles.arteContainer}>
          <h1 className={styles.mainText}>Atualizar Arte</h1>
          {id ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
              <div className={styles.formGroup}>
              <p>Nome da obra:</p>  
                < input className={styles.input}
                 
                  type="text"
                  value={nomeObra}
                  onChange={(e) => setNomeObra(e.target.value)}
                  required
                />
              </div>

                <p>Link da Obra:</p>
                < input className={styles.input}
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
               <p> Nome do artista:</p>
                < input className={styles.input}
                  type="text"
                  value={artista}
                  onChange={(e) => setArtista(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
               <p>Data de produção:</p> 
                < input className={styles.input}
                  type="text"
                  value={dataProducao}
                  onChange={(e) => setDataProducao(e.target.value)}
                  required
                />
              </div>
             
              <div className={styles.formGroup}>
              <p> Tipo da Obra:</p> 
                < input className={styles.input}
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
            
          <p>Idade do artista:</p>  
                < input className={styles.input}
                  type="text"
                  value={idadeArtista}
                  onChange={(e) => setIdadeArtista(e.target.value)}
                  required
                />
              </div>
              
              

            
              
              {/* <button
                type="submit"
                onClick={() => (router.push= '/')}
              >
                voltar para obras
              </button> */}
            </form>
          ) : (
            <p>Carregando...</p>
          )}

          {id && (
            <div className={styles.caixaBotao}>
             <button
                type="submit"
                className={`${styles.button} ${styles.Button}`}
                onClick={handleSubmit}
              >
                editar
              </button>

           
              <button
                type="button"
                className={`${styles.button} ${styles.Button}`}
                onClick={handleExcluir}
              >
                Excluir Arte
              </button>

              <Link  href="/cadastro2" >
              <button
                type="button"
                className={`${styles.button} ${styles.Button}`}
             
              >
                Voltar para Obras
              </button></Link>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
}
