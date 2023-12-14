"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from "./editar.module.css";
import { useRouter } from 'next/router';

export default function Editar({ params }) {
  const [nomeObra, setNomeObra] = useState("");
  const [tipo, setTipo] = useState("");
  const [artista, setArtista] = useState("");
  const [idadeArtista, setIdadeArtista] = useState("");
  const [dataProducao, setDataProducao] = useState("");
  const [url, setUrl] = useState("");
  const [descricao, setDescricao] = useState("");
  const { id } = params;
  const router = useRouter;

  useEffect(() => {
    async function fetchArts() {
      try {
        const response = await axios.get(`/API/artes/${id}`);
        const arte = response.data;
        setNomeObra(arte.nomeObra);
        setTipo(arte.tipo);
        setArtista(arte.artista);
        setIdadeArtista(arte.idadeArtista);
        setDataProducao(arte.dataProducao);
        setUrl(arte.url);
        setDescricao(arte.descricao);
      } catch (error) {
        console.error("Error fetching art details:", error);
      }
    }

    if (id) {
      fetchArts();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/artes/${id}`, {
        nomeObra,
        url,
        tipo,
        artista,
        idadeArtista,
        dataProducao,
        descricao
      });
      router.push(`/`);
    } catch (error) {
      console.error("bobocaaa ta com erro", error);
    }
  };

  const handleExcluir = async () => {
    try {
      await axios.delete(`/api/artes/${id}`);
      router.push(`/`);
    } catch (error) {
      console.error("Error deleting art:", error);
    }
  };

  return (
    <>


      <div className={styles.container}>
        <div className={styles.arteContainer}>
          <h1 className={styles.mainText}>Atualizar Arte</h1>
          {id ? (
            <form onSubmit={handleSubmit}>
              <div className={styles.formGroup}>

              <div className={styles.formGroup}>
                <p>Nome da sua obra:</p>
                <input
                  type="text"
                  value={nomeObra}
                  onChange={(e) => setNomeObra(e.target.value)}
                  required
                />
              </div>

               <p>Link da sua obra:</p>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>

                 
              <div className={styles.formGroup}>
               <p>Artista:</p>
                <input
                  type="text"
                  value={artista}
                  onChange={(e) => setArtista(e.target.value)}
                  required
                />
              </div>
              
              
              <div className={styles.formGroup}>
              <p>Data de producao:</p>
                <input
                  type="text"
                  value={dataProducao}
                  onChange={(e) => setDataProducao(e.target.value)}
                  required
                />
              </div>
             

              <div className={styles.formGroup}>
               <p>Tipo da sua obra:</p>
                <input
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <p>Idade do artista:</p>
                <input
                  type="text"
                  value={idadeArtista}
                  onChange={(e) => setIdadeArtista(e.target.value)}
                  required
                />
              </div>

          

       
              <button
                type="submit"
                className={`${styles.button} ${styles.submitButton}`}
                onClick={handleSubmit}
              >
                Salvar alterações
              </button>
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
            <>
              <button
                type="button"
                className={`${styles.button} ${styles.deleteButton}`}
                onClick={handleExcluir}
              >
                Excluir Arte
              </button>
              <button
                type="button"
                className={`${styles.button} ${styles.backButton}`}
                onClick={() => router.push('/')}
              >
                Voltar para Obras
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
