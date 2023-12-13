"use client"
import axios from 'axios'
import { useEffect, useState } from 'react'
import styles from "./editar.module.css"
import { useRouter } from 'next/navigation' // Add this import

export default function Editar({ params }) {
  const [nomeObra, setNomeObra] = useState("");
  const [tipo, setTipo] = useState("");
  const [artista, setArtista] = useState("");
  const [idadeArtista, setIdadeArtista] = useState("");
  const [dataProducao, setDataProducao] = useState("");
  const [url, setUrl] = useState("");
  const [descricao, setDescricao] = useState("");
  const { id } = params;
  const router = useRouter(); // Add this line

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
      console.error("Error updating art:", error);
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
                <label htmlFor="url" className={styles.label}>
                  URL:
                </label>
                <input
                  type="text"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="nomeObra" className={styles.label}>
                  Nome:
                </label>
                <input
                  type="text"
                  value={nomeObra}
                  onChange={(e) => setNomeObra(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="tipo" className={styles.label}>
                  Tipo da Obra:
                </label>
                <input
                  type="text"
                  value={tipo}
                  onChange={(e) => setTipo(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="idadeArtista" className={styles.label}>
                  Idade do Artista:
                </label>
                <input
                  type="text"
                  value={idadeArtista}
                  onChange={(e) => setIdadeArtista(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="dataProducao" className={styles.label}>
                  Data de Produção:
                </label>
                <input
                  type="text"
                  value={dataProducao}
                  onChange={(e) => setDataProducao(e.target.value)}
                  required
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="artista" className={styles.label}>
                  Artista:
                </label>
                <input
                  type="text"
                  value={artista}
                  onChange={(e) => setArtista(e.target.value)}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="descricao" className={styles.label}>
                  Descrição:
                </label>
                <input
                  type="text"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
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
        </div>
      </div>
    </>
  )
}
